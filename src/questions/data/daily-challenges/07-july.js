// July Daily Challenges - 31 days × 5 questions each = 155 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {
  
  const julyChallenges = {
    name: {
      en: "July Daily Challenges",
      es: "Desafíos Diarios de Julio", 
      de: "Juli Tägliche Herausforderungen",
      nl: "Juli Dagelijkse Uitdagingen"
    },
    
    // Day 1 - July 1st: Battle of Gettysburg, Canada Day, Hong Kong handover
    day1: [
      {
        question: {
          en: "Which major Civil War battle began on July 1, 1863?",
          es: "¿Qué gran batalla de la Guerra Civil comenzó el 1 de julio de 1863?",
          de: "Welche große Schlacht des Bürgerkriegs begann am 1. Juli 1863?",
          nl: "Welke grote slag uit de Burgeroorlog begon op 1 juli 1863?"
        },
        options: [
          { en: "Battle of Vicksburg", es: "Batalla de Vicksburg", de: "Schlacht von Vicksburg", nl: "Slag bij Vicksburg" },
          { en: "Battle of Gettysburg", es: "Batalla de Gettysburg", de: "Schlacht von Gettysburg", nl: "Slag bij Gettysburg" },
          { en: "Battle of Bull Run", es: "Batalla de Bull Run", de: "Schlacht von Bull Run", nl: "Slag bij Bull Run" },
          { en: "Battle of Antietam", es: "Batalla de Antietam", de: "Schlacht von Antietam", nl: "Slag bij Antietam" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Battle of Gettysburg began on July 1, 1863, in Pennsylvania and lasted three days. It became the bloodiest battle of the American Civil War with over 50,000 casualties. This decisive Union victory marked the turning point of the war and ended General Robert E. Lee's invasion of the North. President Lincoln later delivered the famous Gettysburg Address at the battlefield cemetery.",
          es: "La Batalla de Gettysburg comenzó el 1 de julio de 1863 en Pensilvania y duró tres días. Se convirtió en la batalla más sangrienta de la Guerra Civil Americana con más de 50,000 bajas. Esta decisiva victoria de la Unión marcó el punto de inflexión de la guerra y puso fin a la invasión del Norte por el General Robert E. Lee. El presidente Lincoln pronunció más tarde el famoso Discurso de Gettysburg en el cementerio del campo de batalla.",
          de: "Die Schlacht von Gettysburg begann am 1. Juli 1863 in Pennsylvania und dauerte drei Tage. Sie wurde die blutigste Schlacht des Amerikanischen Bürgerkriegs mit über 50.000 Opfern. Dieser entscheidende Sieg der Union markierte den Wendepunkt des Krieges und beendete General Robert E. Lees Invasion des Nordens. Präsident Lincoln hielt später die berühmte Gettysburg-Rede auf dem Schlachtfeldfriedhof.",
          nl: "De Slag bij Gettysburg begon op 1 juli 1863 in Pennsylvania en duurde drie dagen. Het werd de bloedigste slag van de Amerikaanse Burgeroorlog met meer dan 50.000 slachtoffers. Deze beslissende overwinning van de Unie markeerde het keerpunt van de oorlog en maakte een einde aan generaal Robert E. Lee's invasie van het Noorden. President Lincoln hield later de beroemde Gettysburg Address op de slagveldbegraafplaats."
        }
      },
      {
        question: {
          en: "Which country celebrates its national independence day on July 1, marking confederation in 1867?",
          es: "¿Qué país celebra su día nacional de independencia el 1 de julio, marcando la confederación en 1867?",
          de: "Welches Land feiert seinen nationalen Unabhängigkeitstag am 1. Juli, der die Konföderation von 1867 markiert?",
          nl: "Welk land viert zijn nationale onafhankelijkheidsdag op 1 juli, ter herdenking van de confederatie in 1867?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "New Zealand", es: "Nueva Zelanda", de: "Neuseeland", nl: "Nieuw-Zeeland" },
          { en: "South Africa", es: "Sudáfrica", de: "Südafrika", nl: "Zuid-Afrika" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Canada celebrates Canada Day on July 1, commemorating the Constitution Act of 1867, which united three colonies into a single country called Canada. Originally called Dominion Day, it was renamed Canada Day in 1982. The holiday marks the beginning of Canadian confederation and is celebrated nationwide with fireworks, parades, concerts, and barbecues. Canada remained part of the British Commonwealth while gaining self-governance.",
          es: "Canadá celebra el Día de Canadá el 1 de julio, conmemorando la Ley Constitucional de 1867, que unió tres colonias en un solo país llamado Canadá. Originalmente llamado Día del Dominio, fue renombrado Día de Canadá en 1982. El día festivo marca el comienzo de la confederación canadiense y se celebra en todo el país con fuegos artificiales, desfiles, conciertos y barbacoas. Canadá permaneció parte de la Commonwealth británica mientras obtenía autogobierno.",
          de: "Kanada feiert den Canada Day am 1. Juli zum Gedenken an das Verfassungsgesetz von 1867, das drei Kolonien zu einem einzigen Land namens Kanada vereinte. Ursprünglich Dominion Day genannt, wurde es 1982 in Canada Day umbenannt. Der Feiertag markiert den Beginn der kanadischen Konföderation und wird landesweit mit Feuerwerk, Paraden, Konzerten und Grillpartys gefeiert. Kanada blieb Teil des britischen Commonwealth, während es Selbstverwaltung erlangte.",
          nl: "Canada viert Canada Day op 1 juli, ter herdenking van de Constitutional Act van 1867, die drie koloniën verenigde tot één land genaamd Canada. Oorspronkelijk Dominion Day genoemd, werd het in 1982 omgedoopt tot Canada Day. De feestdag markeert het begin van de Canadese confederatie en wordt landelijk gevierd met vuurwerk, parades, concerten en barbecues. Canada bleef deel van het Britse Gemenebest terwijl het zelfbestuur verwierf."
        }
      },
      {
        question: {
          en: "On July 1, 1997, which territory was handed over from British to Chinese sovereignty?",
          es: "El 1 de julio de 1997, ¿qué territorio fue transferido de la soberanía británica a la china?",
          de: "Welches Territorium wurde am 1. Juli 1997 von britischer an chinesische Souveränität übergeben?",
          nl: "Welk gebied werd op 1 juli 1997 overgedragen van Britse naar Chinese soevereiniteit?"
        },
        options: [
          { en: "Macau", es: "Macao", de: "Macau", nl: "Macau" },
          { en: "Hong Kong", es: "Hong Kong", de: "Hongkong", nl: "Hong Kong" },
          { en: "Taiwan", es: "Taiwán", de: "Taiwan", nl: "Taiwan" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Hong Kong was handed over to China on July 1, 1997, ending 156 years of British colonial rule. The handover followed the expiration of the 99-year lease of the New Territories. Under the 'one country, two systems' principle, Hong Kong was promised a high degree of autonomy for 50 years. The midnight ceremony was attended by Prince Charles and witnessed by millions worldwide. This historic event marked the end of one of Britain's last major colonies.",
          es: "Hong Kong fue transferido a China el 1 de julio de 1997, poniendo fin a 156 años de dominio colonial británico. La transferencia siguió a la expiración del arrendamiento de 99 años de los Nuevos Territorios. Bajo el principio de 'un país, dos sistemas', a Hong Kong se le prometió un alto grado de autonomía durante 50 años. La ceremonia de medianoche fue atendida por el príncipe Carlos y presenciada por millones en todo el mundo. Este evento histórico marcó el fin de una de las últimas grandes colonias de Gran Bretaña.",
          de: "Hongkong wurde am 1. Juli 1997 an China übergeben, was 156 Jahre britischer Kolonialherrschaft beendete. Die Übergabe folgte dem Ablauf des 99-jährigen Pachtvertrags der New Territories. Unter dem Prinzip 'ein Land, zwei Systeme' wurde Hongkong ein hohes Maß an Autonomie für 50 Jahre versprochen. An der Mitternachtszeremonie nahm Prinz Charles teil und sie wurde von Millionen weltweit bezeugt. Dieses historische Ereignis markierte das Ende einer der letzten großen Kolonien Großbritanniens.",
          nl: "Hong Kong werd op 1 juli 1997 overgedragen aan China, wat een einde maakte aan 156 jaar Brits koloniaal bestuur. De overdracht volgde op het verstrijken van de 99-jarige huurovereenkomst van de New Territories. Onder het 'één land, twee systemen'-principe werd Hong Kong een hoge mate van autonomie beloofd voor 50 jaar. De middernachtceremonie werd bijgewoond door prins Charles en door miljoenen wereldwijd bekeken. Deze historische gebeurtenis markeerde het einde van een van Groot-Brittannië's laatste grote koloniën."
        }
      },
      {
        question: {
          en: "What international treaty banning certain weapons came into force on July 1, 1968?",
          es: "¿Qué tratado internacional que prohíbe ciertas armas entró en vigor el 1 de julio de 1968?",
          de: "Welcher internationale Vertrag zum Verbot bestimmter Waffen trat am 1. Juli 1968 in Kraft?",
          nl: "Welk internationaal verdrag dat bepaalde wapens verbiedt, trad in werking op 1 juli 1968?"
        },
        options: [
          { en: "Chemical Weapons Convention", es: "Convención de Armas Químicas", de: "Chemiewaffenübereinkommen", nl: "Chemische Wapenverdrag" },
          { en: "Nuclear Non-Proliferation Treaty", es: "Tratado de No Proliferación Nuclear", de: "Atomwaffensperrvertrag", nl: "Non-proliferatieverdrag" },
          { en: "Geneva Convention", es: "Convención de Ginebra", de: "Genfer Konvention", nl: "Verdrag van Genève" },
          { en: "Biological Weapons Convention", es: "Convención de Armas Biológicas", de: "Biowaffenkonvention", nl: "Verdrag inzake biologische wapens" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Treaty on the Non-Proliferation of Nuclear Weapons (NPT) opened for signature on July 1, 1968, and is a cornerstone of global nuclear arms control. The treaty aims to prevent the spread of nuclear weapons and technology, promote peaceful uses of nuclear energy, and work toward nuclear disarmament. Nearly every country in the world has joined the NPT, making it one of the most widely adhered-to arms control agreements in history.",
          es: "El Tratado de No Proliferación de Armas Nucleares (TNP) se abrió para firmas el 1 de julio de 1968 y es una piedra angular del control mundial de armas nucleares. El tratado tiene como objetivo prevenir la propagación de armas y tecnología nuclear, promover usos pacíficos de la energía nuclear y trabajar hacia el desarme nuclear. Casi todos los países del mundo se han unido al TNP, convirtiéndolo en uno de los acuerdos de control de armas más ampliamente adoptados en la historia.",
          de: "Der Vertrag über die Nichtverbreitung von Kernwaffen (NVV) wurde am 1. Juli 1968 zur Unterzeichnung aufgelegt und ist ein Eckpfeiler der globalen nuklearen Rüstungskontrolle. Der Vertrag zielt darauf ab, die Verbreitung von Atomwaffen und -technologie zu verhindern, die friedliche Nutzung der Kernenergie zu fördern und auf nukleare Abrüstung hinzuarbeiten. Fast jedes Land der Welt ist dem NVV beigetreten, was ihn zu einem der am weitesten verbreiteten Rüstungskontrollabkommen der Geschichte macht.",
          nl: "Het Verdrag inzake de niet-verspreiding van kernwapens (NPV) werd op 1 juli 1968 opengesteld voor ondertekening en is een hoeksteen van mondiale nucleaire wapenbeheersing. Het verdrag heeft als doel de verspreiding van kernwapens en -technologie te voorkomen, vreedzaam gebruik van kernenergie te bevorderen en te werken aan nucleaire ontwapening. Bijna elk land ter wereld is toegetreden tot het NPV, waardoor het een van de meest breed aanvaarde wapenbeheersingsovereenkomsten in de geschiedenis is."
        }
      },
      {
        question: {
          en: "Which famous children's book series began publication on July 1, 1997, launching a global phenomenon?",
          es: "¿Qué famosa serie de libros infantiles comenzó su publicación el 1 de julio de 1997, lanzando un fenómeno global?",
          de: "Welche berühmte Kinderbuchreihe begann am 1. Juli 1997 mit der Veröffentlichung und löste ein globales Phänomen aus?",
          nl: "Welke beroemde kinderboekenserie begon met publicatie op 1 juli 1997, wat een mondiaal fenomeen ontketende?"
        },
        options: [
          { en: "The Hunger Games", es: "Los Juegos del Hambre", de: "Die Tribute von Panem", nl: "The Hunger Games" },
          { en: "Twilight", es: "Crepúsculo", de: "Twilight", nl: "Twilight" },
          { en: "Harry Potter", es: "Harry Potter", de: "Harry Potter", nl: "Harry Potter" },
          { en: "Percy Jackson", es: "Percy Jackson", de: "Percy Jackson", nl: "Percy Jackson" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Harry Potter and the Philosopher's Stone (Sorcerer's Stone in the US) was first published in the UK on July 1, 1997, by Bloomsbury Publishing. Written by J.K. Rowling, the book introduced readers to the magical world of Hogwarts. The series went on to become one of the best-selling book series in history, spawning movies, theme parks, and a massive global fanbase. The original print run was only 500 copies, but the franchise is now worth billions.",
          es: "Harry Potter y la Piedra Filosofal fue publicado por primera vez en el Reino Unido el 1 de julio de 1997 por Bloomsbury Publishing. Escrito por J.K. Rowling, el libro presentó a los lectores el mundo mágico de Hogwarts. La serie se convirtió en una de las series de libros más vendidas de la historia, generando películas, parques temáticos y una enorme base de fans global. La tirada original fue de solo 500 copias, pero la franquicia ahora vale miles de millones.",
          de: "Harry Potter und der Stein der Weisen wurde am 1. Juli 1997 erstmals von Bloomsbury Publishing in Großbritannien veröffentlicht. Geschrieben von J.K. Rowling, führte das Buch die Leser in die magische Welt von Hogwarts ein. Die Serie wurde zu einer der meistverkauften Buchreihen der Geschichte und brachte Filme, Themenparks und eine riesige globale Fangemeinde hervor. Die ursprüngliche Auflage betrug nur 500 Exemplare, aber das Franchise ist jetzt Milliarden wert.",
          nl: "Harry Potter en de Steen der Wijzen werd voor het eerst gepubliceerd in het VK op 1 juli 1997 door Bloomsbury Publishing. Geschreven door J.K. Rowling, introduceerde het boek lezers in de magische wereld van Zweinstein. De serie werd een van de best verkochte boekenreeksen in de geschiedenis, met films, themaparken en een enorme wereldwijde fanbase. De oorspronkelijke oplage was slechts 500 exemplaren, maar het franchise is nu miljarden waard."
        }
      }
    ],

    // Day 2 - July 2nd: Civil Rights Act, Amelia Earhart, Thurgood Marshall
    day2: [
      {
        question: {
          en: "Which landmark legislation did President Lyndon B. Johnson sign on July 2, 1964?",
          es: "¿Qué legislación histórica firmó el presidente Lyndon B. Johnson el 2 de julio de 1964?",
          de: "Welches wegweisende Gesetz unterzeichnete Präsident Lyndon B. Johnson am 2. Juli 1964?",
          nl: "Welke baanbrekende wetgeving ondertekende president Lyndon B. Johnson op 2 juli 1964?"
        },
        options: [
          { en: "Fair Housing Act", es: "Ley de Vivienda Justa", de: "Faires Wohnungsgesetz", nl: "Eerlijke Huisvestingswet" },
          { en: "Social Security Act", es: "Ley de Seguridad Social", de: "Sozialversicherungsgesetz", nl: "Sociale Zekerheidswet" },
          { en: "Civil Rights Act", es: "Ley de Derechos Civiles", de: "Bürgerrechtsgesetz", nl: "Burgerrechtenwet" },
          { en: "Voting Rights Act", es: "Ley de Derecho al Voto", de: "Wahlrechtsgesetz", nl: "Stemrechtenwet" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Civil Rights Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin. This groundbreaking legislation ended segregation in public places and banned employment discrimination. It was a major victory for the civil rights movement and remains one of the most significant laws in American history.",
          es: "La Ley de Derechos Civiles de 1964 prohibió la discriminación por motivos de raza, color, religión, sexo u origen nacional. Esta legislación revolucionaria puso fin a la segregación en lugares públicos y prohibió la discriminación laboral. Fue una gran victoria para el movimiento de derechos civiles y sigue siendo una de las leyes más importantes de la historia estadounidense.",
          de: "Das Bürgerrechtsgesetz von 1964 verbot Diskriminierung aufgrund von Rasse, Hautfarbe, Religion, Geschlecht oder nationaler Herkunft. Dieses bahnbrechende Gesetz beendete die Rassentrennung an öffentlichen Orten und verbot Diskriminierung am Arbeitsplatz. Es war ein großer Sieg für die Bürgerrechtsbewegung und bleibt eines der bedeutendsten Gesetze in der amerikanischen Geschichte.",
          nl: "De Burgerrechtenwet van 1964 verbood discriminatie op basis van ras, huidskleur, religie, geslacht of nationale afkomst. Deze baanbrekende wetgeving maakte een einde aan segregatie op openbare plaatsen en verbood discriminatie op de werkplek. Het was een grote overwinning voor de burgerrechtenbeweging en blijft een van de belangrijkste wetten in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "On July 2, 1937, which pioneering aviator disappeared over the Pacific Ocean during an attempted around-the-world flight?",
          es: "El 2 de julio de 1937, ¿qué aviadora pionera desapareció sobre el Océano Pacífico durante un intento de vuelo alrededor del mundo?",
          de: "Welche Pilotin verschwand am 2. Juli 1937 über dem Pazifischen Ozean während eines versuchten Weltflugs?",
          nl: "Welke baanbrekende vliegenierster verdween op 2 juli 1937 boven de Stille Oceaan tijdens een poging tot een wereldvlucht?"
        },
        options: [
          { en: "Bessie Coleman", es: "Bessie Coleman", de: "Bessie Coleman", nl: "Bessie Coleman" },
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" },
          { en: "Jacqueline Cochran", es: "Jacqueline Cochran", de: "Jacqueline Cochran", nl: "Jacqueline Cochran" },
          { en: "Harriet Quimby", es: "Harriet Quimby", de: "Harriet Quimby", nl: "Harriet Quimby" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Amelia Earhart disappeared on July 2, 1937, near Howland Island in the Pacific Ocean during her attempt to circumnavigate the globe. She was the first woman to fly solo across the Atlantic Ocean and set many aviation records. Her disappearance remains one of history's greatest unsolved mysteries, sparking countless theories and searches.",
          es: "Amelia Earhart desapareció el 2 de julio de 1937, cerca de la isla Howland en el Océano Pacífico durante su intento de circunnavegar el globo. Fue la primera mujer en volar sola a través del Océano Atlántico y estableció muchos récords de aviación. Su desaparición sigue siendo uno de los mayores misterios sin resolver de la historia, generando innumerables teorías y búsquedas.",
          de: "Amelia Earhart verschwand am 2. Juli 1937 in der Nähe von Howland Island im Pazifischen Ozean während ihres Versuchs, die Erde zu umrunden. Sie war die erste Frau, die alleine über den Atlantischen Ozean flog und stellte viele Luftfahrtrekorde auf. Ihr Verschwinden bleibt eines der größten ungelösten Rätsel der Geschichte und löste unzählige Theorien und Suchaktionen aus.",
          nl: "Amelia Earhart verdween op 2 juli 1937 nabij Howland Island in de Stille Oceaan tijdens haar poging om de aarde te omcirkelen. Ze was de eerste vrouw die solo over de Atlantische Oceaan vloog en vestigde vele luchtvaartrecords. Haar verdwijning blijft een van de grootste onopgeloste mysteries uit de geschiedenis, wat ontelbare theorieën en zoekacties heeft opgeleverd."
        }
      },
      {
        question: {
          en: "Which pioneering Supreme Court Justice was born on July 2, 1908?",
          es: "¿Qué juez pionero de la Corte Suprema nació el 2 de julio de 1908?",
          de: "Welcher bahnbrechende Richter am Obersten Gerichtshof wurde am 2. Juli 1908 geboren?",
          nl: "Welke baanbrekende rechter van het Hooggerechtshof werd geboren op 2 juli 1908?"
        },
        options: [
          { en: "Earl Warren", es: "Earl Warren", de: "Earl Warren", nl: "Earl Warren" },
          { en: "William Rehnquist", es: "William Rehnquist", de: "William Rehnquist", nl: "William Rehnquist" },
          { en: "Thurgood Marshall", es: "Thurgood Marshall", de: "Thurgood Marshall", nl: "Thurgood Marshall" },
          { en: "Sandra Day O'Connor", es: "Sandra Day O'Connor", de: "Sandra Day O'Connor", nl: "Sandra Day O'Connor" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Thurgood Marshall became the first African American Supreme Court Justice in 1967. Before his appointment, he was a brilliant lawyer who argued the landmark Brown v. Board of Education case that ended school segregation. Marshall served on the Court for 24 years and was a champion of individual rights and equal justice.",
          es: "Thurgood Marshall se convirtió en el primer juez afroamericano de la Corte Suprema en 1967. Antes de su nombramiento, fue un brillante abogado que argumentó el caso histórico Brown v. Board of Education que puso fin a la segregación escolar. Marshall sirvió en la Corte durante 24 años y fue un defensor de los derechos individuales y la justicia igualitaria.",
          de: "Thurgood Marshall wurde 1967 der erste afroamerikanische Richter am Obersten Gerichtshof. Vor seiner Ernennung war er ein brillanter Anwalt, der den wegweisenden Fall Brown gegen Board of Education vertrat, der die Schulsegregation beendete. Marshall diente 24 Jahre am Gerichtshof und war ein Verfechter individueller Rechte und gleicher Gerechtigkeit.",
          nl: "Thurgood Marshall werd in 1967 de eerste Afro-Amerikaanse rechter van het Hooggerechtshof. Voor zijn benoeming was hij een briljante advocaat die de baanbrekende zaak Brown v. Board of Education bepleitte die een einde maakte aan schoolsegregatie. Marshall diende 24 jaar bij het Hof en was een voorvechter van individuele rechten en gelijke rechtvaardigheid."
        }
      },
      {
        question: {
          en: "On July 2, 1776, what crucial vote took place in the Continental Congress?",
          es: "El 2 de julio de 1776, ¿qué votación crucial tuvo lugar en el Congreso Continental?",
          de: "Welche entscheidende Abstimmung fand am 2. Juli 1776 im Kontinentalkongress statt?",
          nl: "Welke cruciale stemming vond plaats op 2 juli 1776 in het Continentaal Congres?"
        },
        options: [
          { en: "Election of George Washington", es: "Elección de George Washington", de: "Wahl von George Washington", nl: "Verkiezing van George Washington" },
          { en: "Approval of the Constitution", es: "Aprobación de la Constitución", de: "Genehmigung der Verfassung", nl: "Goedkeuring van de Grondwet" },
          { en: "Vote for independence from Britain", es: "Votación por la independencia de Gran Bretaña", de: "Abstimmung über die Unabhängigkeit von Großbritannien", nl: "Stemming voor onafhankelijkheid van Groot-Brittannië" },
          { en: "Declaration of war", es: "Declaración de guerra", de: "Kriegserklärung", nl: "Oorlogsverklaring" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On July 2, 1776, the Continental Congress voted in favor of independence from Great Britain. John Adams believed this would be the date celebrated as America's independence day. The Declaration of Independence was formally adopted two days later on July 4th, which became the celebrated date.",
          es: "El 2 de julio de 1776, el Congreso Continental votó a favor de la independencia de Gran Bretaña. John Adams creía que esta sería la fecha celebrada como el día de la independencia de América. La Declaración de Independencia fue formalmente adoptada dos días después, el 4 de julio, que se convirtió en la fecha celebrada.",
          de: "Am 2. Juli 1776 stimmte der Kontinentalkongress für die Unabhängigkeit von Großbritannien. John Adams glaubte, dass dies das Datum sein würde, das als Amerikas Unabhängigkeitstag gefeiert wird. Die Unabhängigkeitserklärung wurde zwei Tage später am 4. Juli offiziell angenommen, das zum gefeierten Datum wurde.",
          nl: "Op 2 juli 1776 stemde het Continentaal Congres voor onafhankelijkheid van Groot-Brittannië. John Adams geloofde dat dit de datum zou zijn die gevierd zou worden als Amerika's onafhankelijkheidsdag. De Onafhankelijkheidsverklaring werd twee dagen later op 4 juli formeel aangenomen, wat de gevierde datum werd."
        }
      },
      {
        question: {
          en: "What revolutionary aircraft made its maiden flight on July 2, 1900?",
          es: "¿Qué aeronave revolucionaria realizó su primer vuelo el 2 de julio de 1900?",
          de: "Welches revolutionäre Luftschiff machte am 2. Juli 1900 seinen Jungfernflug?",
          nl: "Welk revolutionair luchtvaartuig maakte zijn eerste vlucht op 2 juli 1900?"
        },
        options: [
          { en: "Hot air balloon", es: "Globo aerostático", de: "Heißluftballon", nl: "Heteluchtballon" },
          { en: "Wright Brothers plane", es: "Avión de los hermanos Wright", de: "Wright-Brothers-Flugzeug", nl: "Wright Brothers vliegtuig" },
          { en: "The first Zeppelin", es: "El primer Zeppelin", de: "Der erste Zeppelin", nl: "De eerste Zeppelin" },
          { en: "Glider", es: "Planeador", de: "Segelflugzeug", nl: "Zweefvliegtuig" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Count Ferdinand von Zeppelin's first rigid airship, the LZ-1, made its maiden flight over Lake Constance on July 2, 1900. This revolutionary design featured a rigid framework covered with fabric, unlike soft balloons. Zeppelins became iconic symbols of early aviation and were used for passenger travel and military purposes until the Hindenburg disaster in 1937.",
          es: "El primer dirigible rígido del conde Ferdinand von Zeppelin, el LZ-1, realizó su primer vuelo sobre el lago de Constanza el 2 de julio de 1900. Este diseño revolucionario presentaba una estructura rígida cubierta de tela, a diferencia de los globos blandos. Los Zeppelines se convirtieron en símbolos icónicos de la aviación temprana y se utilizaron para viajes de pasajeros y propósitos militares hasta el desastre del Hindenburg en 1937.",
          de: "Graf Ferdinand von Zeppelins erstes Starrluftschiff, die LZ-1, machte am 2. Juli 1900 seinen Jungfernflug über dem Bodensee. Dieses revolutionäre Design hatte ein starres Gerüst, das mit Stoff bedeckt war, im Gegensatz zu weichen Ballons. Zeppeline wurden zu ikonischen Symbolen der frühen Luftfahrt und wurden für Passagierreisen und militärische Zwecke bis zur Hindenburg-Katastrophe 1937 eingesetzt.",
          nl: "Het eerste stijve luchtschip van graaf Ferdinand von Zeppelin, de LZ-1, maakte zijn eerste vlucht boven het Bodenmeer op 2 juli 1900. Dit revolutionaire ontwerp had een stijf frame bedekt met stof, in tegenstelling tot zachte ballonnen. Zeppelins werden iconische symbolen van vroege luchtvaart en werden gebruikt voor passagiersreizen en militaire doeleinden tot de Hindenburg-ramp in 1937."
        }
      }
    ],

    // Day 3 - July 3rd: Battle of Gettysburg, Idaho, Tom Cruise, Franz Kafka
    day3: [
      {
        question: {
          en: "Which major Civil War battle concluded on July 3, 1863?",
          es: "¿Qué gran batalla de la Guerra Civil concluyó el 3 de julio de 1863?",
          de: "Welche große Schlacht des Bürgerkriegs endete am 3. Juli 1863?",
          nl: "Welke grote slag uit de Burgeroorlog eindigde op 3 juli 1863?"
        },
        options: [
          { en: "Battle of Antietam", es: "Batalla de Antietam", de: "Schlacht von Antietam", nl: "Slag bij Antietam" },
          { en: "Battle of Gettysburg", es: "Batalla de Gettysburg", de: "Schlacht von Gettysburg", nl: "Slag bij Gettysburg" },
          { en: "Battle of Bull Run", es: "Batalla de Bull Run", de: "Schlacht von Bull Run", nl: "Slag bij Bull Run" },
          { en: "Battle of Shiloh", es: "Batalla de Shiloh", de: "Schlacht von Shiloh", nl: "Slag bij Shiloh" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Battle of Gettysburg ended on July 3, 1863, with Pickett's Charge, a massive Confederate assault that failed. This three-day battle was the bloodiest of the Civil War with over 50,000 casualties. It marked the turning point of the war, ending General Lee's invasion of the North and giving the Union momentum.",
          es: "La Batalla de Gettysburg terminó el 3 de julio de 1863 con la Carga de Pickett, un asalto confederado masivo que fracasó. Esta batalla de tres días fue la más sangrienta de la Guerra Civil con más de 50,000 bajas. Marcó el punto de inflexión de la guerra, poniendo fin a la invasión del Norte por el general Lee y dando impulso a la Unión.",
          de: "Die Schlacht von Gettysburg endete am 3. Juli 1863 mit Picketts Angriff, einem massiven konföderierten Angriff, der scheiterte. Diese dreitägige Schlacht war die blutigste des Bürgerkriegs mit über 50.000 Opfern. Sie markierte den Wendepunkt des Krieges, beendete General Lees Invasion des Nordens und gab der Union Auftrieb.",
          nl: "De Slag bij Gettysburg eindigde op 3 juli 1863 met Pickett's Charge, een massale Geconfedereerde aanval die mislukte. Deze driedaagse slag was de bloedigste van de Burgeroorlog met meer dan 50.000 slachtoffers. Het markeerde het keerpunt van de oorlog, maakte een einde aan generaal Lee's invasie van het Noorden en gaf de Unie momentum."
        }
      },
      {
        question: {
          en: "Which US state was admitted to the Union on July 3, 1890?",
          es: "¿Qué estado de EE.UU. fue admitido en la Unión el 3 de julio de 1890?",
          de: "Welcher US-Bundesstaat wurde am 3. Juli 1890 in die Union aufgenommen?",
          nl: "Welke Amerikaanse staat werd op 3 juli 1890 toegelaten tot de Unie?"
        },
        options: [
          { en: "Montana", es: "Montana", de: "Montana", nl: "Montana" },
          { en: "Wyoming", es: "Wyoming", de: "Wyoming", nl: "Wyoming" },
          { en: "Idaho", es: "Idaho", de: "Idaho", nl: "Idaho" },
          { en: "Utah", es: "Utah", de: "Utah", nl: "Utah" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Idaho became the 43rd state of the United States on July 3, 1890. Known as the 'Gem State,' Idaho is famous for its potatoes, natural beauty, and outdoor recreation. The state's name may come from a Shoshone word meaning 'gem of the mountains,' though its exact origin remains debated.",
          es: "Idaho se convirtió en el estado número 43 de los Estados Unidos el 3 de julio de 1890. Conocido como el 'Estado de las Gemas', Idaho es famoso por sus papas, belleza natural y recreación al aire libre. El nombre del estado puede provenir de una palabra shoshone que significa 'gema de las montañas', aunque su origen exacto sigue siendo debatido.",
          de: "Idaho wurde am 3. Juli 1890 der 43. Bundesstaat der Vereinigten Staaten. Idaho ist als 'Edelstein-Staat' bekannt und berühmt für seine Kartoffeln, natürliche Schönheit und Freizeitmöglichkeiten im Freien. Der Name des Staates könnte von einem Shoshone-Wort stammen, das 'Edelstein der Berge' bedeutet, obwohl sein genauer Ursprung umstritten bleibt.",
          nl: "Idaho werd op 3 juli 1890 de 43e staat van de Verenigde Staten. Idaho staat bekend als de 'Edelsteen Staat' en is beroemd om zijn aardappelen, natuurlijke schoonheid en openluchtrecreatie. De naam van de staat komt mogelijk van een Shoshone-woord dat 'edelsteen van de bergen' betekent, hoewel de exacte oorsprong nog steeds wordt bediscussieerd."
        }
      },
      {
        question: {
          en: "Which famous actor, known for 'Top Gun' and 'Mission: Impossible,' was born on July 3, 1962?",
          es: "¿Qué famoso actor, conocido por 'Top Gun' y 'Misión: Imposible', nació el 3 de julio de 1962?",
          de: "Welcher berühmte Schauspieler, bekannt für 'Top Gun' und 'Mission: Impossible', wurde am 3. Juli 1962 geboren?",
          nl: "Welke beroemde acteur, bekend van 'Top Gun' en 'Mission: Impossible', werd geboren op 3 juli 1962?"
        },
        options: [
          { en: "Brad Pitt", es: "Brad Pitt", de: "Brad Pitt", nl: "Brad Pitt" },
          { en: "Tom Hanks", es: "Tom Hanks", de: "Tom Hanks", nl: "Tom Hanks" },
          { en: "Harrison Ford", es: "Harrison Ford", de: "Harrison Ford", nl: "Harrison Ford" },
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Tom Cruise is one of Hollywood's biggest stars and has been nominated for three Academy Awards. He became famous in the 1980s with films like 'Risky Business' and 'Top Gun.' Known for performing his own dangerous stunts, Cruise has starred in the long-running Mission: Impossible franchise since 1996.",
          es: "Tom Cruise es una de las mayores estrellas de Hollywood y ha sido nominado a tres premios de la Academia. Se hizo famoso en los años 80 con películas como 'Risky Business' y 'Top Gun'. Conocido por realizar sus propias acrobacias peligrosas, Cruise ha protagonizado la franquicia de larga duración Misión: Imposible desde 1996.",
          de: "Tom Cruise ist einer der größten Stars Hollywoods und wurde dreimal für einen Oscar nominiert. Er wurde in den 1980er Jahren mit Filmen wie 'Risky Business' und 'Top Gun' berühmt. Bekannt dafür, seine eigenen gefährlichen Stunts durchzuführen, spielt Cruise seit 1996 in der langjährigen Mission: Impossible-Franchise mit.",
          nl: "Tom Cruise is een van Hollywoods grootste sterren en is genomineerd geweest voor drie Academy Awards. Hij werd beroemd in de jaren '80 met films als 'Risky Business' en 'Top Gun'. Bekend om het uitvoeren van zijn eigen gevaarlijke stunts, heeft Cruise sinds 1996 in de langlopende Mission: Impossible franchise gespeeld."
        }
      },
      {
        question: {
          en: "Which influential writer, author of 'The Metamorphosis,' was born on July 3, 1883?",
          es: "¿Qué escritor influyente, autor de 'La metamorfosis', nació el 3 de julio de 1883?",
          de: "Welcher einflussreiche Schriftsteller, Autor von 'Die Verwandlung', wurde am 3. Juli 1883 geboren?",
          nl: "Welke invloedrijke schrijver, auteur van 'De gedaanteverwisseling', werd geboren op 3 juli 1883?"
        },
        options: [
          { en: "James Joyce", es: "James Joyce", de: "James Joyce", nl: "James Joyce" },
          { en: "Franz Kafka", es: "Franz Kafka", de: "Franz Kafka", nl: "Franz Kafka" },
          { en: "Thomas Mann", es: "Thomas Mann", de: "Thomas Mann", nl: "Thomas Mann" },
          { en: "Marcel Proust", es: "Marcel Proust", de: "Marcel Proust", nl: "Marcel Proust" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Franz Kafka was a German-language writer whose works explore themes of alienation, guilt, and absurdity. His most famous works include 'The Metamorphosis' and 'The Trial.' Though little known during his lifetime, Kafka became one of the most influential writers of the 20th century. The term 'Kafkaesque' describes surreal, nightmarish situations.",
          es: "Franz Kafka fue un escritor de lengua alemana cuyas obras exploran temas de alienación, culpa y absurdo. Sus obras más famosas incluyen 'La metamorfosis' y 'El proceso'. Aunque poco conocido durante su vida, Kafka se convirtió en uno de los escritores más influyentes del siglo XX. El término 'kafkiano' describe situaciones surrealistas y de pesadilla.",
          de: "Franz Kafka war ein deutschsprachiger Schriftsteller, dessen Werke Themen wie Entfremdung, Schuld und Absurdität untersuchen. Seine bekanntesten Werke sind 'Die Verwandlung' und 'Der Prozess'. Obwohl zu Lebzeiten wenig bekannt, wurde Kafka einer der einflussreichsten Schriftsteller des 20. Jahrhunderts. Der Begriff 'kafkaesk' beschreibt surreale, alptraumhafte Situationen.",
          nl: "Franz Kafka was een Duitstalige schrijver wiens werken thema's van vervreemding, schuld en absurditeit verkennen. Zijn beroemdste werken zijn 'De gedaanteverwisseling' en 'Het proces'. Hoewel weinig bekend tijdens zijn leven, werd Kafka een van de meest invloedrijke schrijvers van de 20e eeuw. De term 'Kafkaiaans' beschrijft surrealistische, nachtmerrieachtige situaties."
        }
      },
      {
        question: {
          en: "What period traditionally begins on July 3rd in ancient Roman calendars?",
          es: "¿Qué período comienza tradicionalmente el 3 de julio en los calendarios romanos antiguos?",
          de: "Welche Periode beginnt traditionell am 3. Juli in antiken römischen Kalendern?",
          nl: "Welke periode begint traditioneel op 3 juli in oude Romeinse kalenders?"
        },
        options: [
          { en: "Harvest Season", es: "Temporada de Cosecha", de: "Erntezeit", nl: "Oogstseizoen" },
          { en: "Indian Summer", es: "Veranillo de San Martín", de: "Altweibersommer", nl: "Nazomer" },
          { en: "Spring Equinox", es: "Equinoccio de Primavera", de: "Frühlingstagundnachtgleiche", nl: "Lente-equinox" },
          { en: "Dog Days of Summer", es: "Canícula", de: "Hundstage", nl: "Hondsdagen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Dog Days of Summer traditionally begin around July 3rd and last until August 11th. This period coincides with the heliacal rising of Sirius, the 'Dog Star' in the constellation Canis Major. Ancient Romans believed this was the hottest time of year. The phrase now refers to the sultry summer period when dogs would lie around panting in the heat.",
          es: "La Canícula tradicionalmente comienza alrededor del 3 de julio y dura hasta el 11 de agosto. Este período coincide con el orto helíaco de Sirio, la 'Estrella del Perro' en la constelación Canis Major. Los antiguos romanos creían que este era el momento más caluroso del año. La frase ahora se refiere al período de verano bochornoso cuando los perros se tumbaban jadeando por el calor.",
          de: "Die Hundstage beginnen traditionell um den 3. Juli und dauern bis zum 11. August. Diese Periode fällt mit dem heliakischen Aufgang von Sirius, dem 'Hundsstern' im Sternbild Canis Major, zusammen. Die alten Römer glaubten, dies sei die heißeste Zeit des Jahres. Der Ausdruck bezieht sich jetzt auf die schwüle Sommerperiode, wenn Hunde hechend herumliegen würden.",
          nl: "De Hondsdagen beginnen traditioneel rond 3 juli en duren tot 11 augustus. Deze periode valt samen met de heliacale opkomst van Sirius, de 'Hondenster' in het sterrenbeeld Canis Major. Oude Romeinen geloofden dat dit de heetste tijd van het jaar was. De uitdrukking verwijst nu naar de zwoele zomerperiode waarin honden hijgend zouden liggen in de hitte."
        }
      }
    ],

    // Day 4 - July 4th: US Independence Day, Higgs boson, Lou Gehrig, Statue of Liberty
    day4: [
      {
        question: {
          en: "What historic document was adopted on July 4, 1776?",
          es: "¿Qué documento histórico fue adoptado el 4 de julio de 1776?",
          de: "Welches historische Dokument wurde am 4. Juli 1776 verabschiedet?",
          nl: "Welk historisch document werd aangenomen op 4 juli 1776?"
        },
        options: [
          { en: "Bill of Rights", es: "Declaración de Derechos", de: "Bill of Rights", nl: "Bill of Rights" },
          { en: "Articles of Confederation", es: "Artículos de la Confederación", de: "Konföderationsartikel", nl: "Artikelen van Confederatie" },
          { en: "US Constitution", es: "Constitución de EE.UU.", de: "US-Verfassung", nl: "Amerikaanse Grondwet" },
          { en: "Declaration of Independence", es: "Declaración de Independencia", de: "Unabhängigkeitserklärung", nl: "Onafhankelijkheidsverklaring" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Declaration of Independence was adopted on July 4, 1776, declaring the thirteen American colonies free from British rule. Written primarily by Thomas Jefferson, it articulated the principles of individual liberty and government by consent. This document inspired independence movements worldwide and established July 4th as America's most important national holiday.",
          es: "La Declaración de Independencia fue adoptada el 4 de julio de 1776, declarando las trece colonias americanas libres del dominio británico. Escrita principalmente por Thomas Jefferson, articuló los principios de libertad individual y gobierno por consentimiento. Este documento inspiró movimientos de independencia en todo el mundo y estableció el 4 de julio como el día festivo nacional más importante de América.",
          de: "Die Unabhängigkeitserklärung wurde am 4. Juli 1776 verabschiedet und erklärte die dreizehn amerikanischen Kolonien für frei von britischer Herrschaft. Hauptsächlich von Thomas Jefferson verfasst, artikulierte sie die Prinzipien individueller Freiheit und Regierung durch Zustimmung. Dieses Dokument inspirierte Unabhängigkeitsbewegungen weltweit und etablierte den 4. Juli als Amerikas wichtigsten Nationalfeiertag.",
          nl: "De Onafhankelijkheidsverklaring werd aangenomen op 4 juli 1776, waarbij de dertien Amerikaanse koloniën vrij werden verklaard van Britse heerschappij. Voornamelijk geschreven door Thomas Jefferson, verwoordde het de principes van individuele vrijheid en regering door instemming. Dit document inspireerde onafhankelijkheidsbewegingen wereldwijd en vestigde 4 juli als Amerika's belangrijkste nationale feestdag."
        }
      },
      {
        question: {
          en: "What groundbreaking particle was announced to have been discovered on July 4, 2012?",
          es: "¿Qué partícula revolucionaria se anunció que había sido descubierta el 4 de julio de 2012?",
          de: "Welches bahnbrechende Teilchen wurde am 4. Juli 2012 als entdeckt angekündigt?",
          nl: "Welk baanbrekend deeltje werd aangekondigd te zijn ontdekt op 4 juli 2012?"
        },
        options: [
          { en: "Electron", es: "Electrón", de: "Elektron", nl: "Elektron" },
          { en: "Neutron", es: "Neutrón", de: "Neutron", nl: "Neutron" },
          { en: "Higgs boson", es: "Bosón de Higgs", de: "Higgs-Boson", nl: "Higgs-boson" },
          { en: "Quark", es: "Quark", de: "Quark", nl: "Quark" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Scientists at CERN announced the discovery of the Higgs boson on July 4, 2012, using the Large Hadron Collider. This particle explains why other particles have mass and was the last missing piece of the Standard Model of particle physics. Peter Higgs and François Englert won the 2013 Nobel Prize in Physics for predicting its existence in 1964.",
          es: "Los científicos del CERN anunciaron el descubrimiento del bosón de Higgs el 4 de julio de 2012, utilizando el Gran Colisionador de Hadrones. Esta partícula explica por qué otras partículas tienen masa y fue la última pieza que faltaba del Modelo Estándar de física de partículas. Peter Higgs y François Englert ganaron el Premio Nobel de Física 2013 por predecir su existencia en 1964.",
          de: "Wissenschaftler am CERN kündigten am 4. Juli 2012 die Entdeckung des Higgs-Bosons an, unter Verwendung des Large Hadron Colliders. Dieses Teilchen erklärt, warum andere Teilchen Masse haben, und war das letzte fehlende Teil des Standardmodells der Teilchenphysik. Peter Higgs und François Englert gewannen den Physik-Nobelpreis 2013 für die Vorhersage seiner Existenz im Jahr 1964.",
          nl: "Wetenschappers bij CERN kondigden de ontdekking van het Higgs-boson aan op 4 juli 2012, met behulp van de Large Hadron Collider. Dit deeltje verklaart waarom andere deeltjes massa hebben en was het laatste ontbrekende stukje van het Standaardmodel van deeltjesfysica. Peter Higgs en François Englert wonnen de Nobelprijs voor Natuurkunde 2013 voor het voorspellen van zijn bestaan in 1964."
        }
      },
      {
        question: {
          en: "Which baseball legend delivered his famous farewell speech on July 4, 1939?",
          es: "¿Qué leyenda del béisbol pronunció su famoso discurso de despedida el 4 de julio de 1939?",
          de: "Welche Baseball-Legende hielt am 4. Juli 1939 seine berühmte Abschiedsrede?",
          nl: "Welke honkballegende hield zijn beroemde afscheidsspeech op 4 juli 1939?"
        },
        options: [
          { en: "Babe Ruth", es: "Babe Ruth", de: "Babe Ruth", nl: "Babe Ruth" },
          { en: "Jackie Robinson", es: "Jackie Robinson", de: "Jackie Robinson", nl: "Jackie Robinson" },
          { en: "Lou Gehrig", es: "Lou Gehrig", de: "Lou Gehrig", nl: "Lou Gehrig" },
          { en: "Joe DiMaggio", es: "Joe DiMaggio", de: "Joe DiMaggio", nl: "Joe DiMaggio" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Lou Gehrig gave his emotional farewell speech at Yankee Stadium on July 4, 1939, after being diagnosed with ALS. Despite his terminal illness, he called himself 'the luckiest man on the face of the earth.' The disease that ended his career is now commonly called Lou Gehrig's disease. His consecutive games streak of 2,130 stood as a record for 56 years.",
          es: "Lou Gehrig pronunció su emotivo discurso de despedida en el Yankee Stadium el 4 de julio de 1939, después de ser diagnosticado con ELA. A pesar de su enfermedad terminal, se llamó a sí mismo 'el hombre más afortunado sobre la faz de la tierra'. La enfermedad que terminó su carrera ahora se llama comúnmente enfermedad de Lou Gehrig. Su racha de juegos consecutivos de 2,130 se mantuvo como récord durante 56 años.",
          de: "Lou Gehrig hielt am 4. Juli 1939 seine emotionale Abschiedsrede im Yankee Stadium, nachdem bei ihm ALS diagnostiziert worden war. Trotz seiner unheilbaren Krankheit nannte er sich selbst 'den glücklichsten Mann auf der Erde'. Die Krankheit, die seine Karriere beendete, wird heute allgemein Lou-Gehrig-Krankheit genannt. Seine Serie von 2.130 aufeinanderfolgenden Spielen war 56 Jahre lang Rekord.",
          nl: "Lou Gehrig hield zijn emotionele afscheidsspeech in het Yankee Stadium op 4 juli 1939, nadat hij was gediagnosticeerd met ALS. Ondanks zijn terminale ziekte noemde hij zichzelf 'de gelukkigste man ter wereld'. De ziekte die zijn carrière beëindigde wordt nu gewoonlijk de ziekte van Lou Gehrig genoemd. Zijn reeks van 2.130 opeenvolgende wedstrijden stond 56 jaar als record."
        }
      },
      {
        question: {
          en: "What iconic monument was presented to the United States on July 4, 1884?",
          es: "¿Qué monumento icónico fue presentado a Estados Unidos el 4 de julio de 1884?",
          de: "Welches ikonische Denkmal wurde den Vereinigten Staaten am 4. Juli 1884 überreicht?",
          nl: "Welk iconisch monument werd aan de Verenigde Staten geschonken op 4 juli 1884?"
        },
        options: [
          { en: "Washington Monument", es: "Monumento a Washington", de: "Washington Monument", nl: "Washington Monument" },
          { en: "Lincoln Memorial", es: "Memorial de Lincoln", de: "Lincoln Memorial", nl: "Lincoln Memorial" },
          { en: "Statue of Liberty", es: "Estatua de la Libertad", de: "Freiheitsstatue", nl: "Vrijheidsbeeld" },
          { en: "Mount Rushmore", es: "Monte Rushmore", de: "Mount Rushmore", nl: "Mount Rushmore" }
        ],
        correctIndex: 2,
        explanation: {
          en: "France presented the Statue of Liberty to the United States on July 4, 1884, as a gift celebrating friendship and shared democratic values. Designed by Frédéric Auguste Bartholdi, Lady Liberty was shipped in pieces and reassembled on Liberty Island in New York Harbor. The statue was dedicated in 1886 and has since welcomed millions of immigrants arriving in America.",
          es: "Francia presentó la Estatua de la Libertad a Estados Unidos el 4 de julio de 1884, como un regalo celebrando la amistad y los valores democráticos compartidos. Diseñada por Frédéric Auguste Bartholdi, Lady Liberty fue enviada en piezas y reensamblada en Liberty Island en el puerto de Nueva York. La estatua fue inaugurada en 1886 y desde entonces ha dado la bienvenida a millones de inmigrantes que llegaban a América.",
          de: "Frankreich überreichte den Vereinigten Staaten am 4. Juli 1884 die Freiheitsstatue als Geschenk zur Feier der Freundschaft und gemeinsamer demokratischer Werte. Entworfen von Frédéric Auguste Bartholdi, wurde Lady Liberty in Einzelteilen verschifft und auf Liberty Island im New Yorker Hafen wieder zusammengebaut. Die Statue wurde 1886 eingeweiht und hat seitdem Millionen von Einwanderern in Amerika willkommen geheißen.",
          nl: "Frankrijk schonk het Vrijheidsbeeld aan de Verenigde Staten op 4 juli 1884, als geschenk ter viering van vriendschap en gedeelde democratische waarden. Ontworpen door Frédéric Auguste Bartholdi, werd Lady Liberty in stukken verscheept en opnieuw samengesteld op Liberty Island in de haven van New York. Het beeld werd ingewijd in 1886 en heeft sindsdien miljoenen immigranten verwelkomd die in Amerika aankwamen."
        }
      },
      {
        question: {
          en: "Which Asian country gained independence on July 4, 1946?",
          es: "¿Qué país asiático obtuvo la independencia el 4 de julio de 1946?",
          de: "Welches asiatische Land erlangte am 4. Juli 1946 die Unabhängigkeit?",
          nl: "Welk Aziatisch land werd onafhankelijk op 4 juli 1946?"
        },
        options: [
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },
          { en: "Vietnam", es: "Vietnam", de: "Vietnam", nl: "Vietnam" },
          { en: "Philippines", es: "Filipinas", de: "Philippinen", nl: "Filipijnen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Philippines gained independence from the United States on July 4, 1946, after nearly 50 years of American rule. The date was deliberately chosen to coincide with American Independence Day. In 1962, the Philippines changed its official Independence Day to June 12, commemorating independence from Spain in 1898, though July 4 remains a significant date in Philippine history.",
          es: "Filipinas obtuvo la independencia de Estados Unidos el 4 de julio de 1946, después de casi 50 años de dominio estadounidense. La fecha fue deliberadamente elegida para coincidir con el Día de la Independencia estadounidense. En 1962, Filipinas cambió su Día de Independencia oficial al 12 de junio, conmemorando la independencia de España en 1898, aunque el 4 de julio sigue siendo una fecha significativa en la historia filipina.",
          de: "Die Philippinen erlangten am 4. Juli 1946 die Unabhängigkeit von den Vereinigten Staaten nach fast 50 Jahren amerikanischer Herrschaft. Das Datum wurde bewusst gewählt, um mit dem amerikanischen Unabhängigkeitstag zusammenzufallen. 1962 änderten die Philippinen ihren offiziellen Unabhängigkeitstag auf den 12. Juni, zum Gedenken an die Unabhängigkeit von Spanien 1898, obwohl der 4. Juli ein bedeutendes Datum in der philippinischen Geschichte bleibt.",
          nl: "De Filipijnen werden onafhankelijk van de Verenigde Staten op 4 juli 1946, na bijna 50 jaar Amerikaans bestuur. De datum werd opzettelijk gekozen om samen te vallen met de Amerikaanse Onafhankelijkheidsdag. In 1962 veranderde de Filipijnen hun officiële Onafhankelijkheidsdag naar 12 juni, ter herdenking van de onafhankelijkheid van Spanje in 1898, hoewel 4 juli een belangrijke datum blijft in de Filipijnse geschiedenis."
        }
      }
    ],

    // Day 5 - July 5th: Bikini, Algeria independence, Dolly the sheep, Venezuela
    day5: [
      {
        question: {
          en: "What revolutionary swimsuit was unveiled in Paris on July 5, 1946?",
          es: "¿Qué traje de baño revolucionario fue presentado en París el 5 de julio de 1946?",
          de: "Welcher revolutionäre Badeanzug wurde am 5. Juli 1946 in Paris vorgestellt?",
          nl: "Welk revolutionair badpak werd onthuld in Parijs op 5 juli 1946?"
        },
        options: [
          { en: "Wetsuit", es: "Traje de neopreno", de: "Neoprenanzug", nl: "Wetsuit" },
          { en: "One-piece swimsuit", es: "Traje de baño de una pieza", de: "Einteiler", nl: "Eendelig badpak" },
          { en: "Bikini", es: "Bikini", de: "Bikini", nl: "Bikini" },
          { en: "Swimming trunks", es: "Bañador", de: "Badehose", nl: "Zwembroek" }
        ],
        correctIndex: 2,
        explanation: {
          en: "French designer Louis Réard introduced the modern bikini on July 5, 1946. Named after Bikini Atoll where nuclear tests had just occurred, it was considered so scandalous that Réard had to hire a nude dancer to model it. The bikini revolutionized swimwear and became a symbol of liberation and changing social attitudes toward the female body.",
          es: "El diseñador francés Louis Réard introdujo el bikini moderno el 5 de julio de 1946. Nombrado después del atolón Bikini donde acababan de ocurrir pruebas nucleares, se consideró tan escandaloso que Réard tuvo que contratar a una bailarina desnuda para modelarlo. El bikini revolucionó los trajes de baño y se convirtió en un símbolo de liberación y cambio de actitudes sociales hacia el cuerpo femenino.",
          de: "Der französische Designer Louis Réard stellte am 5. Juli 1946 den modernen Bikini vor. Benannt nach dem Bikini-Atoll, wo gerade Atomtests stattgefunden hatten, galt er als so skandalös, dass Réard eine Nackttänzerin engagieren musste, um ihn vorzuführen. Der Bikini revolutionierte die Bademode und wurde zum Symbol der Befreiung und sich wandelnder gesellschaftlicher Einstellungen zum weiblichen Körper.",
          nl: "Franse ontwerper Louis Réard introduceerde de moderne bikini op 5 juli 1946. Vernoemd naar het Bikini-atol waar net kernproeven hadden plaatsgevonden, werd het als zo schandalig beschouwd dat Réard een naaktdanseres moest inhuren om het te modellen. De bikini revolutioneerde zwemkleding en werd een symbool van bevrijding en veranderende sociale attitudes ten opzichte van het vrouwelijk lichaam."
        }
      },
      {
        question: {
          en: "Which North African country gained independence from France on July 5, 1962?",
          es: "¿Qué país del norte de África obtuvo la independencia de Francia el 5 de julio de 1962?",
          de: "Welches nordafrikanische Land erlangte am 5. Juli 1962 die Unabhängigkeit von Frankreich?",
          nl: "Welk Noord-Afrikaans land werd onafhankelijk van Frankrijk op 5 juli 1962?"
        },
        options: [
          { en: "Morocco", es: "Marruecos", de: "Marokko", nl: "Marokko" },
          { en: "Tunisia", es: "Túnez", de: "Tunesien", nl: "Tunesië" },
          { en: "Algeria", es: "Argelia", de: "Algerien", nl: "Algerije" },
          { en: "Libya", es: "Libia", de: "Libyen", nl: "Libië" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Algeria gained independence from France on July 5, 1962, after a brutal eight-year war. The Algerian War of Independence (1954-1962) cost hundreds of thousands of lives and deeply divided French society. Independence Day is celebrated as one of Algeria's most important national holidays, marking the end of 132 years of French colonial rule.",
          es: "Argelia obtuvo la independencia de Francia el 5 de julio de 1962, después de una brutal guerra de ocho años. La Guerra de Independencia de Argelia (1954-1962) costó cientos de miles de vidas y dividió profundamente a la sociedad francesa. El Día de la Independencia se celebra como uno de los días festivos nacionales más importantes de Argelia, marcando el fin de 132 años de dominio colonial francés.",
          de: "Algerien erlangte am 5. Juli 1962 die Unabhängigkeit von Frankreich nach einem brutalen achtjährigen Krieg. Der Algerische Unabhängigkeitskrieg (1954-1962) kostete Hunderttausende von Leben und spaltete die französische Gesellschaft tief. Der Unabhängigkeitstag wird als einer der wichtigsten Nationalfeiertage Algeriens gefeiert und markiert das Ende von 132 Jahren französischer Kolonialherrschaft.",
          nl: "Algerije werd onafhankelijk van Frankrijk op 5 juli 1962, na een brute achtjarige oorlog. De Algerijnse Onafhankelijkheidsoorlog (1954-1962) kostte honderdduizenden levens en verdeelde de Franse samenleving diep. Onafhankelijkheidsdag wordt gevierd als een van Algerije's belangrijkste nationale feestdagen, wat het einde markeert van 132 jaar Franse koloniale heerschappij."
        }
      },
      {
        question: {
          en: "What groundbreaking cloning achievement was announced on July 5, 1996?",
          es: "¿Qué logro revolucionario en clonación fue anunciado el 5 de julio de 1996?",
          de: "Welche bahnbrechende Errungenschaft der Klontechnik wurde am 5. Juli 1996 bekannt gegeben?",
          nl: "Welke baanbrekende kloonprestatie werd aangekondigd op 5 juli 1996?"
        },
        options: [
          { en: "First cloned mouse", es: "Primer ratón clonado", de: "Erste geklonte Maus", nl: "Eerste gekloonde muis" },
          { en: "First cloned dog", es: "Primer perro clonado", de: "Erster geklonter Hund", nl: "Eerste gekloonde hond" },
          { en: "Dolly the sheep - first cloned mammal", es: "Dolly la oveja - primer mamífero clonado", de: "Dolly das Schaf - erstes geklontes Säugetier", nl: "Dolly het schaap - eerste gekloonde zoogdier" },
          { en: "First cloned horse", es: "Primer caballo clonado", de: "Erstes geklontes Pferd", nl: "Eerste gekloonde paard" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Scientists announced the birth of Dolly the sheep on July 5, 1996, the first mammal cloned from an adult cell. Created at the Roslin Institute in Scotland, Dolly proved that specialized cells could be reprogrammed. This breakthrough sparked worldwide debate about cloning ethics and possibilities. Dolly lived until 2003 and had several offspring through natural reproduction.",
          es: "Los científicos anunciaron el nacimiento de Dolly la oveja el 5 de julio de 1996, el primer mamífero clonado a partir de una célula adulta. Creada en el Instituto Roslin en Escocia, Dolly demostró que las células especializadas podían ser reprogramadas. Este avance provocó un debate mundial sobre la ética y las posibilidades de la clonación. Dolly vivió hasta 2003 y tuvo varios descendientes a través de reproducción natural.",
          de: "Wissenschaftler verkündeten am 5. Juli 1996 die Geburt von Dolly dem Schaf, dem ersten aus einer erwachsenen Zelle geklonten Säugetier. Im Roslin Institute in Schottland erschaffen, bewies Dolly, dass spezialisierte Zellen umprogrammiert werden können. Dieser Durchbruch löste weltweite Debatten über Klonethik und -möglichkeiten aus. Dolly lebte bis 2003 und hatte mehrere Nachkommen durch natürliche Fortpflanzung.",
          nl: "Wetenschappers kondigden de geboorte van Dolly het schaap aan op 5 juli 1996, het eerste zoogdier gekloond uit een volwassen cel. Gecreëerd bij het Roslin Institute in Schotland, bewees Dolly dat gespecialiseerde cellen geherprogrammeerd konden worden. Deze doorbraak zorgde voor wereldwijd debat over kloonethiek en mogelijkheden. Dolly leefde tot 2003 en had verschillende nakomelingen via natuurlijke voortplanting."
        }
      },
      {
        question: {
          en: "Which South American country declared independence from Spain on July 5, 1811?",
          es: "¿Qué país sudamericano declaró su independencia de España el 5 de julio de 1811?",
          de: "Welches südamerikanische Land erklärte am 5. Juli 1811 seine Unabhängigkeit von Spanien?",
          nl: "Welk Zuid-Amerikaans land verklaarde zijn onafhankelijkheid van Spanje op 5 juli 1811?"
        },
        options: [
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" },
          { en: "Venezuela", es: "Venezuela", de: "Venezuela", nl: "Venezuela" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Venezuela declared independence from Spain on July 5, 1811, becoming one of the first South American colonies to break free. Led by Simón Bolívar and other revolutionaries, Venezuela fought for its freedom for over a decade. Independence Day is a major national celebration in Venezuela, though the country didn't achieve final victory until the Battle of Carabobo in 1821.",
          es: "Venezuela declaró su independencia de España el 5 de julio de 1811, convirtiéndose en una de las primeras colonias sudamericanas en liberarse. Dirigida por Simón Bolívar y otros revolucionarios, Venezuela luchó por su libertad durante más de una década. El Día de la Independencia es una gran celebración nacional en Venezuela, aunque el país no logró la victoria final hasta la Batalla de Carabobo en 1821.",
          de: "Venezuela erklärte am 5. Juli 1811 seine Unabhängigkeit von Spanien und wurde damit eine der ersten südamerikanischen Kolonien, die sich befreite. Unter der Führung von Simón Bolívar und anderen Revolutionären kämpfte Venezuela über ein Jahrzehnt lang für seine Freiheit. Der Unabhängigkeitstag ist eine große nationale Feier in Venezuela, obwohl das Land den endgültigen Sieg erst in der Schlacht von Carabobo 1821 errang.",
          nl: "Venezuela verklaarde zijn onafhankelijkheid van Spanje op 5 juli 1811, en werd daarmee een van de eerste Zuid-Amerikaanse koloniën die zich bevrijdden. Geleid door Simón Bolívar en andere revolutionairen, vocht Venezuela meer dan tien jaar voor zijn vrijheid. Onafhankelijkheidsdag is een grote nationale viering in Venezuela, hoewel het land pas de definitieve overwinning behaalde in de Slag bij Carabobo in 1821."
        }
      },
      {
        question: {
          en: "What canned meat product was introduced by Hormel on July 5, 1937?",
          es: "¿Qué producto de carne enlatada fue introducido por Hormel el 5 de julio de 1937?",
          de: "Welches Dosenfleischprodukt wurde von Hormel am 5. Juli 1937 eingeführt?",
          nl: "Welk ingeblikte vleesproduct werd geïntroduceerd door Hormel op 5 juli 1937?"
        },
        options: [
          { en: "Corned beef", es: "Carne en conserva", de: "Corned Beef", nl: "Corned beef" },
          { en: "Vienna sausages", es: "Salchichas de Viena", de: "Wiener Würstchen", nl: "Weense worstjes" },
          { en: "Spam", es: "Spam", de: "Spam", nl: "Spam" },
          { en: "Ham loaf", es: "Pan de jamón", de: "Schinkenbrot", nl: "Hambrood" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Hormel introduced Spam on July 5, 1937, creating one of the most iconic canned meat products. The name combines 'spiced' and 'ham.' Spam became crucial during World War II, feeding Allied troops worldwide. Over 9 billion cans have been sold, and it remains especially popular in Hawaii, South Korea, and the Philippines. The term 'spam' later inspired the name for unwanted email.",
          es: "Hormel introdujo Spam el 5 de julio de 1937, creando uno de los productos de carne enlatada más icónicos. El nombre combina 'especiado' y 'jamón'. Spam se volvió crucial durante la Segunda Guerra Mundial, alimentando a las tropas aliadas en todo el mundo. Se han vendido más de 9 mil millones de latas, y sigue siendo especialmente popular en Hawái, Corea del Sur y Filipinas. El término 'spam' más tarde inspiró el nombre del correo electrónico no deseado.",
          de: "Hormel führte Spam am 5. Juli 1937 ein und schuf damit eines der ikonischsten Dosenfleischprodukte. Der Name kombiniert 'spiced' (gewürzt) und 'ham' (Schinken). Spam wurde während des Zweiten Weltkriegs entscheidend und ernährte alliierte Truppen weltweit. Über 9 Milliarden Dosen wurden verkauft, und es ist besonders beliebt in Hawaii, Südkorea und auf den Philippinen. Der Begriff 'Spam' inspirierte später den Namen für unerwünschte E-Mails.",
          nl: "Hormel introduceerde Spam op 5 juli 1937, waarmee een van de meest iconische ingeblikte vleesproducten werd gecreëerd. De naam combineert 'spiced' (gekruid) en 'ham'. Spam werd cruciaal tijdens de Tweede Wereldoorlog en voedde geallieerde troepen wereldwijd. Meer dan 9 miljard blikken zijn verkocht, en het blijft vooral populair in Hawaii, Zuid-Korea en de Filipijnen. De term 'spam' inspireerde later de naam voor ongewenste e-mail."
        }
      }
    ],

    // Day 6 - July 6th: Frida Kahlo, Wimbledon, Malawi, Beatles meeting, Louis Armstrong
    day6: [
      {
        question: {
          en: "Which iconic Mexican artist was born on July 6, 1907?",
          es: "¿Qué artista mexicana icónica nació el 6 de julio de 1907?",
          de: "Welche ikonische mexikanische Künstlerin wurde am 6. Juli 1907 geboren?",
          nl: "Welke iconische Mexicaanse kunstenares werd geboren op 6 juli 1907?"
        },
        options: [
          { en: "Diego Rivera", es: "Diego Rivera", de: "Diego Rivera", nl: "Diego Rivera" },
          { en: "Frida Kahlo", es: "Frida Kahlo", de: "Frida Kahlo", nl: "Frida Kahlo" },
          { en: "Leonora Carrington", es: "Leonora Carrington", de: "Leonora Carrington", nl: "Leonora Carrington" },
          { en: "Remedios Varo", es: "Remedios Varo", de: "Remedios Varo", nl: "Remedios Varo" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Frida Kahlo was a groundbreaking Mexican artist known for her vibrant self-portraits and depictions of pain, passion, and Mexican culture. Despite suffering a devastating bus accident at 18 and lifelong health problems, she created over 200 works. Her art explored identity, postcolonialism, gender, and class. Today, she's celebrated as a feminist icon and one of the most important 20th-century artists.",
          es: "Frida Kahlo fue una artista mexicana revolucionaria conocida por sus vibrantes autorretratos y representaciones del dolor, la pasión y la cultura mexicana. A pesar de sufrir un devastador accidente de autobús a los 18 años y problemas de salud de por vida, creó más de 200 obras. Su arte exploró la identidad, el poscolonialismo, el género y la clase. Hoy es celebrada como un ícono feminista y una de las artistas más importantes del siglo XX.",
          de: "Frida Kahlo war eine bahnbrechende mexikanische Künstlerin, bekannt für ihre lebendigen Selbstporträts und Darstellungen von Schmerz, Leidenschaft und mexikanischer Kultur. Trotz eines verheerenden Busunfalls mit 18 Jahren und lebenslangen Gesundheitsproblemen schuf sie über 200 Werke. Ihre Kunst erforschte Identität, Postkolonialismus, Geschlecht und Klasse. Heute wird sie als feministische Ikone und eine der wichtigsten Künstlerinnen des 20. Jahrhunderts gefeiert.",
          nl: "Frida Kahlo was een baanbrekende Mexicaanse kunstenares bekend om haar levendige zelfportretten en afbeeldingen van pijn, passie en Mexicaanse cultuur. Ondanks een verwoestend busongeluk op 18-jarige leeftijd en levenslange gezondheidsproblemen, creëerde ze meer dan 200 werken. Haar kunst verkende identiteit, postkolonialisme, gender en klasse. Vandaag wordt ze gevierd als feministisch icoon en een van de belangrijkste 20e-eeuwse kunstenaars."
        }
      },
      {
        question: {
          en: "What prestigious tennis tournament held its first championship on July 6, 1877?",
          es: "¿Qué prestigioso torneo de tenis celebró su primer campeonato el 6 de julio de 1877?",
          de: "Welches prestigeträchtige Tennisturnier fand am 6. Juli 1877 seine erste Meisterschaft statt?",
          nl: "Welk prestigieus tennistoernooi hield zijn eerste kampioenschap op 6 juli 1877?"
        },
        options: [
          { en: "US Open", es: "US Open", de: "US Open", nl: "US Open" },
          { en: "French Open", es: "Roland Garros", de: "French Open", nl: "Roland Garros" },
          { en: "Wimbledon", es: "Wimbledon", de: "Wimbledon", nl: "Wimbledon" },
          { en: "Australian Open", es: "Abierto de Australia", de: "Australian Open", nl: "Australian Open" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first Wimbledon Championship was held on July 6, 1877, at the All England Lawn Tennis and Croquet Club. Only 22 men competed in the inaugural tournament, which Spencer Gore won. Wimbledon is the oldest tennis tournament in the world and is still played on grass courts. It's one of four Grand Slam tournaments and is famous for its traditions like all-white dress codes and strawberries with cream.",
          es: "El primer Campeonato de Wimbledon se celebró el 6 de julio de 1877 en el All England Lawn Tennis and Croquet Club. Solo 22 hombres compitieron en el torneo inaugural, que ganó Spencer Gore. Wimbledon es el torneo de tenis más antiguo del mundo y todavía se juega en canchas de césped. Es uno de los cuatro torneos de Grand Slam y es famoso por sus tradiciones como el código de vestimenta totalmente blanco y las fresas con crema.",
          de: "Die erste Wimbledon-Meisterschaft fand am 6. Juli 1877 im All England Lawn Tennis and Croquet Club statt. Nur 22 Männer traten beim ersten Turnier an, das Spencer Gore gewann. Wimbledon ist das älteste Tennisturnier der Welt und wird noch immer auf Rasen gespielt. Es ist eines von vier Grand-Slam-Turnieren und berühmt für seine Traditionen wie die komplett weiße Kleiderordnung und Erdbeeren mit Sahne.",
          nl: "Het eerste Wimbledon Kampioenschap werd gehouden op 6 juli 1877 in de All England Lawn Tennis and Croquet Club. Slechts 22 mannen namen deel aan het inaugurele toernooi, dat Spencer Gore won. Wimbledon is het oudste tennistoernooi ter wereld en wordt nog steeds op grasbanen gespeeld. Het is een van de vier Grand Slam toernooien en beroemd om zijn tradities zoals de volledig witte kledingcode en aardbeien met room."
        }
      },
      {
        question: {
          en: "Which African country gained independence from Britain on July 6, 1964?",
          es: "¿Qué país africano obtuvo la independencia de Gran Bretaña el 6 de julio de 1964?",
          de: "Welches afrikanische Land erlangte am 6. Juli 1964 die Unabhängigkeit von Großbritannien?",
          nl: "Welk Afrikaans land werd onafhankelijk van Groot-Brittannië op 6 juli 1964?"
        },
        options: [
          { en: "Kenya", es: "Kenia", de: "Kenia", nl: "Kenia" },
          { en: "Malawi", es: "Malaui", de: "Malawi", nl: "Malawi" },
          { en: "Zambia", es: "Zambia", de: "Sambia", nl: "Zambia" },
          { en: "Zimbabwe", es: "Zimbabue", de: "Simbabwe", nl: "Zimbabwe" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Malawi (formerly Nyasaland) gained independence from Britain on July 6, 1964. Dr. Hastings Kamuzu Banda led the independence movement and became the country's first president. Located in southeastern Africa, Malawi is known as 'The Warm Heart of Africa' for its friendly people. July 6 is celebrated annually as Independence Day, one of Malawi's most important national holidays.",
          es: "Malaui (anteriormente Nyasalandia) obtuvo la independencia de Gran Bretaña el 6 de julio de 1964. El Dr. Hastings Kamuzu Banda lideró el movimiento de independencia y se convirtió en el primer presidente del país. Ubicado en el sureste de África, Malaui es conocido como 'El Corazón Cálido de África' por su gente amable. El 6 de julio se celebra anualmente como el Día de la Independencia, uno de los días festivos nacionales más importantes de Malaui.",
          de: "Malawi (ehemals Njassaland) erlangte am 6. Juli 1964 die Unabhängigkeit von Großbritannien. Dr. Hastings Kamuzu Banda führte die Unabhängigkeitsbewegung an und wurde der erste Präsident des Landes. Malawi liegt im südöstlichen Afrika und ist als 'Das warme Herz Afrikas' bekannt für seine freundlichen Menschen. Der 6. Juli wird jährlich als Unabhängigkeitstag gefeiert, einer der wichtigsten Nationalfeiertage Malawis.",
          nl: "Malawi (voorheen Nyasaland) werd onafhankelijk van Groot-Brittannië op 6 juli 1964. Dr. Hastings Kamuzu Banda leidde de onafhankelijkheidsbeweging en werd de eerste president van het land. Gelegen in zuidoostelijk Afrika, staat Malawi bekend als 'Het Warme Hart van Afrika' vanwege zijn vriendelijke mensen. 6 juli wordt jaarlijks gevierd als Onafhankelijkheidsdag, een van Malawi's belangrijkste nationale feestdagen."
        }
      },
      {
        question: {
          en: "Which two Beatles first met at a church fete on July 6, 1957?",
          es: "¿Qué dos Beatles se conocieron por primera vez en una fiesta de la iglesia el 6 de julio de 1957?",
          de: "Welche zwei Beatles trafen sich am 6. Juli 1957 zum ersten Mal bei einem Kirchenfest?",
          nl: "Welke twee Beatles ontmoetten elkaar voor het eerst op een kerkfeest op 6 juli 1957?"
        },
        options: [
          { en: "John Lennon and George Harrison", es: "John Lennon y George Harrison", de: "John Lennon und George Harrison", nl: "John Lennon en George Harrison" },
          { en: "Paul McCartney and Ringo Starr", es: "Paul McCartney y Ringo Starr", de: "Paul McCartney und Ringo Starr", nl: "Paul McCartney en Ringo Starr" },
          { en: "John Lennon and Paul McCartney", es: "John Lennon y Paul McCartney", de: "John Lennon und Paul McCartney", nl: "John Lennon en Paul McCartney" },
          { en: "George Harrison and Ringo Starr", es: "George Harrison y Ringo Starr", de: "George Harrison und Ringo Starr", nl: "George Harrison en Ringo Starr" }
        ],
        correctIndex: 2,
        explanation: {
          en: "John Lennon and Paul McCartney first met at St. Peter's Church in Liverpool on July 6, 1957. Lennon was performing with his band The Quarrymen when 15-year-old McCartney impressed him by showing he could tune a guitar and playing 'Twenty Flight Rock.' This meeting began one of the most successful songwriting partnerships in music history. The Lennon-McCartney duo would go on to create countless Beatles classics.",
          es: "John Lennon y Paul McCartney se conocieron por primera vez en la Iglesia de San Pedro en Liverpool el 6 de julio de 1957. Lennon estaba actuando con su banda The Quarrymen cuando McCartney, de 15 años, lo impresionó mostrando que podía afinar una guitarra y tocando 'Twenty Flight Rock'. Este encuentro comenzó una de las asociaciones de composición más exitosas en la historia de la música. El dúo Lennon-McCartney continuaría creando innumerables clásicos de los Beatles.",
          de: "John Lennon und Paul McCartney trafen sich am 6. Juli 1957 zum ersten Mal in der St. Peter's Church in Liverpool. Lennon trat mit seiner Band The Quarrymen auf, als der 15-jährige McCartney ihn beeindruckte, indem er zeigte, dass er eine Gitarre stimmen konnte und 'Twenty Flight Rock' spielte. Dieses Treffen begann eine der erfolgreichsten Songwriting-Partnerschaften der Musikgeschichte. Das Duo Lennon-McCartney sollte unzählige Beatles-Klassiker schaffen.",
          nl: "John Lennon en Paul McCartney ontmoetten elkaar voor het eerst in de St. Peter's Church in Liverpool op 6 juli 1957. Lennon trad op met zijn band The Quarrymen toen de 15-jarige McCartney indruk op hem maakte door te laten zien dat hij een gitaar kon stemmen en 'Twenty Flight Rock' speelde. Deze ontmoeting begon een van de meest succesvolle songwriting-partnerschappen in de muziekgeschiedenis. Het duo Lennon-McCartney zou talloze Beatles-klassiekers creëren."
        }
      },
      {
        question: {
          en: "Which legendary jazz musician was born on July 6, 1901?",
          es: "¿Qué músico de jazz legendario nació el 6 de julio de 1901?",
          de: "Welcher legendäre Jazzmusiker wurde am 6. Juli 1901 geboren?",
          nl: "Welke legendarische jazzmuzikant werd geboren op 6 juli 1901?"
        },
        options: [
          { en: "Duke Ellington", es: "Duke Ellington", de: "Duke Ellington", nl: "Duke Ellington" },
          { en: "Charlie Parker", es: "Charlie Parker", de: "Charlie Parker", nl: "Charlie Parker" },
          { en: "Miles Davis", es: "Miles Davis", de: "Miles Davis", nl: "Miles Davis" },
          { en: "Louis Armstrong", es: "Louis Armstrong", de: "Louis Armstrong", nl: "Louis Armstrong" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Louis Armstrong was born on July 6, 1901 (though he celebrated August 4th). 'Satchmo' revolutionized jazz with his virtuoso trumpet playing and distinctive gravelly voice. He popularized scat singing and recorded classics like 'What a Wonderful World' and 'Hello, Dolly!' Armstrong broke racial barriers and became America's first Black entertainment superstar, influencing countless musicians and helping jazz become globally popular.",
          es: "Louis Armstrong nació el 6 de julio de 1901 (aunque celebraba el 4 de agosto). 'Satchmo' revolucionó el jazz con su virtuoso trompetismo y distintiva voz ronca. Popularizó el canto scat y grabó clásicos como 'What a Wonderful World' y 'Hello, Dolly!' Armstrong rompió barreras raciales y se convirtió en la primera superestrella negra del entretenimiento de América, influyendo en innumerables músicos y ayudando a que el jazz se volviera globalmente popular.",
          de: "Louis Armstrong wurde am 6. Juli 1901 geboren (obwohl er den 4. August feierte). 'Satchmo' revolutionierte den Jazz mit seinem virtuosen Trompetenspiel und seiner markanten rauen Stimme. Er popularisierte das Scat-Singen und nahm Klassiker wie 'What a Wonderful World' und 'Hello, Dolly!' auf. Armstrong durchbrach Rassenschranken und wurde Amerikas erster schwarzer Entertainment-Superstar, beeinflusste unzählige Musiker und half, Jazz weltweit populär zu machen.",
          nl: "Louis Armstrong werd geboren op 6 juli 1901 (hoewel hij 4 augustus vierde). 'Satchmo' revolutioneerde jazz met zijn virtuoze trompetspel en kenmerkende raspende stem. Hij populariseerde scat-zang en nam klassiekers op zoals 'What a Wonderful World' en 'Hello, Dolly!' Armstrong brak raciale barrières en werd Amerika's eerste Zwarte entertainment-superster, beïnvloedde talloze muzikanten en hielp jazz wereldwijd populair te maken."
        }
      }
    ],

    // Day 7 - July 7th: London bombings, Hawaii, Ringo Starr, Solomon Islands, Nessie
    day7: [
      {
        question: {
          en: "What tragic terrorist attack occurred in London on July 7, 2005?",
          es: "¿Qué trágico ataque terrorista ocurrió en Londres el 7 de julio de 2005?",
          de: "Welcher tragische Terroranschlag ereignete sich am 7. Juli 2005 in London?",
          nl: "Welke tragische terroristische aanval vond plaats in Londen op 7 juli 2005?"
        },
        options: [
          { en: "London Bridge attack", es: "Ataque del Puente de Londres", de: "London-Bridge-Anschlag", nl: "London Bridge-aanval" },
          { en: "Manchester Arena bombing", es: "Atentado de Manchester Arena", de: "Manchester-Arena-Anschlag", nl: "Manchester Arena-aanslag" },
          { en: "7/7 London bombings", es: "Atentados del 7-J en Londres", de: "7/7-Anschläge in London", nl: "7/7 aanslagen in Londen" },
          { en: "Westminster attack", es: "Ataque de Westminster", de: "Westminster-Anschlag", nl: "Westminster-aanval" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 7/7 London bombings killed 52 people and injured over 700 in coordinated suicide attacks on London's transport system. Four bombs exploded on three Underground trains and one bus during morning rush hour. This was the UK's deadliest terrorist attack since 1988. The attacks led to increased security measures and demonstrated London's resilience with the motto 'We are not afraid.'",
          es: "Los atentados del 7-J en Londres mataron a 52 personas e hirieron a más de 700 en ataques suicidas coordinados contra el sistema de transporte de Londres. Cuatro bombas explotaron en tres trenes del metro y un autobús durante la hora pico de la mañana. Este fue el ataque terrorista más mortífero del Reino Unido desde 1988. Los ataques llevaron a mayores medidas de seguridad y demostraron la resistencia de Londres con el lema 'No tenemos miedo'.",
          de: "Die 7/7-Anschläge in London töteten 52 Menschen und verletzten über 700 bei koordinierten Selbstmordattentaten auf Londons Transportsystem. Vier Bomben explodierten in drei U-Bahn-Zügen und einem Bus während der morgendlichen Hauptverkehrszeit. Dies war der tödlichste Terroranschlag in Großbritannien seit 1988. Die Anschläge führten zu verstärkten Sicherheitsmaßnahmen und zeigten Londons Widerstandsfähigkeit mit dem Motto 'Wir haben keine Angst'.",
          nl: "De 7/7 aanslagen in Londen doodden 52 mensen en verwondden meer dan 700 bij gecoördineerde zelfmoordaanslagen op het transportsysteem van Londen. Vier bommen ontploften in drie metrotreinen en één bus tijdens de ochtendspits. Dit was de dodelijkste terroristische aanval in het VK sinds 1988. De aanslagen leidden tot verhoogde veiligheidsmaatregelen en toonden Londen's veerkracht met het motto 'We zijn niet bang'."
        }
      },
      {
        question: {
          en: "Which Pacific island chain was annexed by the United States on July 7, 1898?",
          es: "¿Qué cadena de islas del Pacífico fue anexada por Estados Unidos el 7 de julio de 1898?",
          de: "Welche pazifische Inselkette wurde am 7. Juli 1898 von den Vereinigten Staaten annektiert?",
          nl: "Welke Pacifische eilandengroep werd geannexeerd door de Verenigde Staten op 7 juli 1898?"
        },
        options: [
          { en: "Guam", es: "Guam", de: "Guam", nl: "Guam" },
          { en: "American Samoa", es: "Samoa Americana", de: "Amerikanisch-Samoa", nl: "Amerikaans-Samoa" },
          { en: "Hawaii", es: "Hawái", de: "Hawaii", nl: "Hawaï" },
          { en: "Puerto Rico", es: "Puerto Rico", de: "Puerto Rico", nl: "Puerto Rico" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The United States annexed Hawaii on July 7, 1898, through the Newlands Resolution. Hawaii had been an independent kingdom until 1893 when American businessmen overthrew Queen Liliuokalani. The annexation was controversial, but strategic interests during the Spanish-American War pushed it through. Hawaii became the 50th US state in 1959. Many Native Hawaiians continue to advocate for sovereignty and recognition of the illegal overthrow.",
          es: "Estados Unidos anexó Hawái el 7 de julio de 1898, a través de la Resolución Newlands. Hawái había sido un reino independiente hasta 1893 cuando empresarios estadounidenses derrocaron a la reina Liliuokalani. La anexión fue controvertida, pero los intereses estratégicos durante la Guerra Hispano-Estadounidense la impulsaron. Hawái se convirtió en el estado número 50 de EE.UU. en 1959. Muchos hawaianos nativos continúan abogando por la soberanía y el reconocimiento del derrocamiento ilegal.",
          de: "Die Vereinigten Staaten annektierten Hawaii am 7. Juli 1898 durch die Newlands-Resolution. Hawaii war bis 1893 ein unabhängiges Königreich, als amerikanische Geschäftsleute Königin Liliuokalani stürzten. Die Annexion war umstritten, aber strategische Interessen während des Spanisch-Amerikanischen Krieges trieben sie voran. Hawaii wurde 1959 der 50. US-Bundesstaat. Viele einheimische Hawaiianer setzen sich weiterhin für Souveränität und Anerkennung des illegalen Sturzes ein.",
          nl: "De Verenigde Staten annexeerden Hawaï op 7 juli 1898 via de Newlands Resolutie. Hawaï was een onafhankelijk koninkrijk geweest tot 1893 toen Amerikaanse zakenlieden koningin Liliuokalani omver wierpen. De annexatie was controversieel, maar strategische belangen tijdens de Spaans-Amerikaanse Oorlog dreven het door. Hawaï werd de 50e Amerikaanse staat in 1959. Veel inheemse Hawaiianen blijven pleiten voor soevereiniteit en erkenning van de illegale omverwerping."
        }
      },
      {
        question: {
          en: "Which Beatles drummer was born on July 7, 1940?",
          es: "¿Qué baterista de los Beatles nació el 7 de julio de 1940?",
          de: "Welcher Beatles-Schlagzeuger wurde am 7. Juli 1940 geboren?",
          nl: "Welke Beatles-drummer werd geboren op 7 juli 1940?"
        },
        options: [
          { en: "Pete Best", es: "Pete Best", de: "Pete Best", nl: "Pete Best" },
          { en: "Ringo Starr", es: "Ringo Starr", de: "Ringo Starr", nl: "Ringo Starr" },
          { en: "George Martin", es: "George Martin", de: "George Martin", nl: "George Martin" },
          { en: "Stuart Sutcliffe", es: "Stuart Sutcliffe", de: "Stuart Sutcliffe", nl: "Stuart Sutcliffe" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ringo Starr (born Richard Starkey) joined The Beatles in 1962, replacing Pete Best. His distinctive drumming style and charming personality made him an integral part of the band's success. Ringo sang lead vocals on songs like 'Yellow Submarine' and 'With a Little Help from My Friends.' After the Beatles split, he had a successful solo career and remains active in music today.",
          es: "Ringo Starr (nacido Richard Starkey) se unió a los Beatles en 1962, reemplazando a Pete Best. Su distintivo estilo de batería y personalidad encantadora lo convirtieron en una parte integral del éxito de la banda. Ringo cantó voces principales en canciones como 'Yellow Submarine' y 'With a Little Help from My Friends'. Después de la separación de los Beatles, tuvo una exitosa carrera en solitario y permanece activo en la música hoy.",
          de: "Ringo Starr (geboren als Richard Starkey) trat 1962 den Beatles bei und ersetzte Pete Best. Sein unverwechselbarer Schlagzeugstil und seine charmante Persönlichkeit machten ihn zu einem integralen Bestandteil des Erfolgs der Band. Ringo sang Lead-Vocals auf Liedern wie 'Yellow Submarine' und 'With a Little Help from My Friends'. Nach der Trennung der Beatles hatte er eine erfolgreiche Solokarriere und ist heute noch musikalisch aktiv.",
          nl: "Ringo Starr (geboren als Richard Starkey) sloot zich in 1962 bij The Beatles aan en verving Pete Best. Zijn onderscheidende drumstijl en charmante persoonlijkheid maakten hem een integraal onderdeel van het succes van de band. Ringo zong hoofdvocalen op nummers als 'Yellow Submarine' en 'With a Little Help from My Friends'. Na de splitsing van de Beatles had hij een succesvolle solocarrière en blijft hij vandaag actief in de muziek."
        }
      },
      {
        question: {
          en: "Which Pacific island nation gained independence from Britain on July 7, 1978?",
          es: "¿Qué nación insular del Pacífico obtuvo la independencia de Gran Bretaña el 7 de julio de 1978?",
          de: "Welche pazifische Inselnation erlangte am 7. Juli 1978 die Unabhängigkeit von Großbritannien?",
          nl: "Welke Pacifische eilandnatie werd onafhankelijk van Groot-Brittannië op 7 juli 1978?"
        },
        options: [
          { en: "Fiji", es: "Fiyi", de: "Fidschi", nl: "Fiji" },
          { en: "Samoa", es: "Samoa", de: "Samoa", nl: "Samoa" },
          { en: "Tonga", es: "Tonga", de: "Tonga", nl: "Tonga" },
          { en: "Solomon Islands", es: "Islas Salomón", de: "Salomonen", nl: "Salomonseilanden" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Solomon Islands gained independence from Britain on July 7, 1978, after 85 years as a British protectorate. Located in the South Pacific, the islands were the site of fierce fighting during World War II, including the Battle of Guadalcanal. The country is named after King Solomon from the Bible. Independence Day is celebrated annually with cultural performances, sports events, and parades.",
          es: "Las Islas Salomón obtuvieron la independencia de Gran Bretaña el 7 de julio de 1978, después de 85 años como protectorado británico. Ubicadas en el Pacífico Sur, las islas fueron el sitio de feroces combates durante la Segunda Guerra Mundial, incluida la Batalla de Guadalcanal. El país lleva el nombre del Rey Salomón de la Biblia. El Día de la Independencia se celebra anualmente con actuaciones culturales, eventos deportivos y desfiles.",
          de: "Die Salomonen erlangten am 7. Juli 1978 die Unabhängigkeit von Großbritannien, nach 85 Jahren als britisches Protektorat. Die im Südpazifik gelegenen Inseln waren Schauplatz heftiger Kämpfe während des Zweiten Weltkriegs, einschließlich der Schlacht um Guadalcanal. Das Land ist nach König Salomon aus der Bibel benannt. Der Unabhängigkeitstag wird jährlich mit kulturellen Aufführungen, Sportveranstaltungen und Paraden gefeiert.",
          nl: "De Salomonseilanden werden onafhankelijk van Groot-Brittannië op 7 juli 1978, na 85 jaar als Brits protectoraat. Gelegen in de Stille Zuidzee, waren de eilanden het toneel van hevige gevechten tijdens de Tweede Wereldoorlog, waaronder de Slag om Guadalcanal. Het land is vernoemd naar Koning Salomo uit de Bijbel. Onafhankelijkheidsdag wordt jaarlijks gevierd met culturele voorstellingen, sportevenementen en parades."
        }
      },
      {
        question: {
          en: "What legendary Scottish lake monster was first photographed on July 7, 1933?",
          es: "¿Qué legendario monstruo del lago escocés fue fotografiado por primera vez el 7 de julio de 1933?",
          de: "Welches legendäre schottische Seeungeheuer wurde am 7. Juli 1933 zum ersten Mal fotografiert?",
          nl: "Welk legendarisch Schots meermoster werd voor het eerst gefotografeerd op 7 juli 1933?"
        },
        options: [
          { en: "Kraken", es: "Kraken", de: "Kraken", nl: "Kraken" },
          { en: "Loch Ness Monster (Nessie)", es: "Monstruo del Lago Ness (Nessie)", de: "Ungeheuer von Loch Ness (Nessie)", nl: "Monster van Loch Ness (Nessie)" },
          { en: "Bigfoot", es: "Pie Grande", de: "Bigfoot", nl: "Bigfoot" },
          { en: "Chupacabra", es: "Chupacabra", de: "Chupacabra", nl: "Chupacabra" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first widely circulated photograph of the Loch Ness Monster was taken on July 7, 1933. 'Nessie' became a global phenomenon, with thousands claiming sightings in Scotland's Loch Ness. While most scientists consider Nessie a myth or misidentification, the legend has made Loch Ness a major tourist attraction. The search for Nessie continues today with sonar scans and underwater cameras, though conclusive proof remains elusive.",
          es: "La primera fotografía ampliamente difundida del Monstruo del Lago Ness fue tomada el 7 de julio de 1933. 'Nessie' se convirtió en un fenómeno global, con miles afirmando avistamientos en el Lago Ness de Escocia. Aunque la mayoría de los científicos consideran a Nessie un mito o identificación errónea, la leyenda ha convertido al Lago Ness en una importante atracción turística. La búsqueda de Nessie continúa hoy con escaneos de sonar y cámaras submarinas, aunque la prueba concluyente sigue siendo esquiva.",
          de: "Das erste weit verbreitete Foto des Ungeheuers von Loch Ness wurde am 7. Juli 1933 aufgenommen. 'Nessie' wurde zu einem globalen Phänomen, wobei Tausende Sichtungen im schottischen Loch Ness behaupteten. Während die meisten Wissenschaftler Nessie für einen Mythos oder eine Fehlidentifikation halten, hat die Legende Loch Ness zu einer wichtigen Touristenattraktion gemacht. Die Suche nach Nessie geht heute mit Sonarscans und Unterwasserkameras weiter, obwohl eindeutige Beweise schwer fassbar bleiben.",
          nl: "De eerste wijdverbreide foto van het Monster van Loch Ness werd genomen op 7 juli 1933. 'Nessie' werd een wereldwijd fenomeen, waarbij duizenden beweerden waarnemingen te hebben in het Schotse Loch Ness. Hoewel de meeste wetenschappers Nessie als een mythe of verkeerde identificatie beschouwen, heeft de legende Loch Ness tot een belangrijke toeristische attractie gemaakt. De zoektocht naar Nessie gaat vandaag door met sonarscans en onderwatercamera's, hoewel overtuigend bewijs ongrijpbaar blijft."
        }
      }
    ],

    // Day 8 - July 8th: Liberty Bell, Rockefeller, Venus Express, Wall Street Journal, Shelley
    day8: [
      {
        question: {
          en: "In which year did the Liberty Bell ring for the last time?",
          es: "¿En qué año sonó la Campana de la Libertad por última vez?",
          de: "In welchem Jahr läutete die Liberty Bell zum letzten Mal?",
          nl: "In welk jaar luidde de Liberty Bell voor het laatst?"
        },
        options: [
          { en: "1776", es: "1776", de: "1776", nl: "1776" },
          { en: "1835", es: "1835", de: "1835", nl: "1835" },
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Liberty Bell last rang on July 8, 1835, for the death of Chief Justice John Marshall. The famous crack that makes the bell unusable appeared during this time. The bell became an iconic symbol of American independence and freedom, originally cast in 1752 to hang in the Pennsylvania State House (now Independence Hall).",
          es: "La Campana de la Libertad sonó por última vez el 8 de julio de 1835 por la muerte del Presidente del Tribunal Supremo John Marshall. La famosa grieta que hace que la campana sea inutilizable apareció durante este tiempo. La campana se convirtió en un símbolo icónico de la independencia y libertad estadounidense, originalmente fundida en 1752 para colgar en la Casa del Estado de Pensilvania (ahora Independence Hall).",
          de: "Die Liberty Bell läutete zum letzten Mal am 8. Juli 1835 für den Tod des Obersten Richters John Marshall. Der berühmte Riss, der die Glocke unbrauchbar macht, entstand während dieser Zeit. Die Glocke wurde zum ikonischen Symbol der amerikanischen Unabhängigkeit und Freiheit, ursprünglich 1752 gegossen, um im Pennsylvania State House (jetzt Independence Hall) zu hängen.",
          nl: "De Liberty Bell luidde voor het laatst op 8 juli 1835 bij de dood van opperrechter John Marshall. De beroemde barst die de klok onbruikbaar maakt, verscheen tijdens deze periode. De klok werd een iconisch symbool van Amerikaanse onafhankelijkheid en vrijheid, oorspronkelijk gegoten in 1752 om te hangen in het Pennsylvania State House (nu Independence Hall)."
        }
      },
      {
        question: {
          en: "Which wealthy industrialist had his fortune documented on July 8, 1839?",
          es: "¿Qué rico industrial tuvo su fortuna documentada el 8 de julio de 1839?",
          de: "Welcher wohlhabende Industrielle hatte sein Vermögen am 8. Juli 1839 dokumentiert?",
          nl: "Welke rijke industrieel had zijn vermogen gedocumenteerd op 8 juli 1839?"
        },
        options: [
          { en: "Andrew Carnegie", es: "Andrew Carnegie", de: "Andrew Carnegie", nl: "Andrew Carnegie" },
          { en: "J.P. Morgan", es: "J.P. Morgan", de: "J.P. Morgan", nl: "J.P. Morgan" },
          { en: "John D. Rockefeller", es: "John D. Rockefeller", de: "John D. Rockefeller", nl: "John D. Rockefeller" },
          { en: "Cornelius Vanderbilt", es: "Cornelius Vanderbilt", de: "Cornelius Vanderbilt", nl: "Cornelius Vanderbilt" }
        ],
        correctIndex: 2,
        explanation: {
          en: "John D. Rockefeller's wealth was documented on July 8, 1839. He would become America's first billionaire and one of the wealthiest people in modern history through his oil company, Standard Oil. Rockefeller pioneered business practices and became a major philanthropist, donating over $500 million during his lifetime to medical research, education, and scientific advancement.",
          es: "La riqueza de John D. Rockefeller fue documentada el 8 de julio de 1839. Se convertiría en el primer multimillonario de Estados Unidos y una de las personas más ricas de la historia moderna a través de su compañía petrolera, Standard Oil. Rockefeller fue pionero en prácticas comerciales y se convirtió en un importante filántropo, donando más de 500 millones de dólares durante su vida a la investigación médica, educación y avance científico.",
          de: "John D. Rockefellers Reichtum wurde am 8. Juli 1839 dokumentiert. Er wurde Amerikas erster Milliardär und eine der reichsten Personen der modernen Geschichte durch sein Ölunternehmen Standard Oil. Rockefeller war Pionier in Geschäftspraktiken und wurde ein bedeutender Philanthrop, der während seines Lebens über 500 Millionen Dollar für medizinische Forschung, Bildung und wissenschaftlichen Fortschritt spendete.",
          nl: "John D. Rockefellers rijkdom werd gedocumenteerd op 8 juli 1839. Hij zou Amerika's eerste miljardair worden en een van de rijkste mensen in de moderne geschiedenis via zijn oliemaatschappij Standard Oil. Rockefeller was pionier in zakelijke praktijken en werd een belangrijke filantroop, die tijdens zijn leven meer dan 500 miljoen dollar doneerde aan medisch onderzoek, onderwijs en wetenschappelijke vooruitgang."
        }
      },
      {
        question: {
          en: "Which space mission reached Venus on July 8, 2006?",
          es: "¿Qué misión espacial llegó a Venus el 8 de julio de 2006?",
          de: "Welche Weltraummission erreichte am 8. Juli 2006 die Venus?",
          nl: "Welke ruimtemissie bereikte Venus op 8 juli 2006?"
        },
        options: [
          { en: "Venera 9", es: "Venera 9", de: "Venera 9", nl: "Venera 9" },
          { en: "Magellan", es: "Magallanes", de: "Magellan", nl: "Magellan" },
          { en: "Venus Express", es: "Venus Express", de: "Venus Express", nl: "Venus Express" },
          { en: "Mariner 2", es: "Mariner 2", de: "Mariner 2", nl: "Mariner 2" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Venus Express, launched by the European Space Agency, reached Venus on July 8, 2006. This mission studied Venus's atmosphere, plasma environment, and surface characteristics. Venus Express discovered that Venus once had oceans but lost them due to a runaway greenhouse effect. The mission operated until 2014, providing valuable data about Earth's 'sister planet.'",
          es: "Venus Express, lanzado por la Agencia Espacial Europea, llegó a Venus el 8 de julio de 2006. Esta misión estudió la atmósfera de Venus, el entorno del plasma y las características de la superficie. Venus Express descubrió que Venus una vez tuvo océanos pero los perdió debido a un efecto invernadero descontrolado. La misión operó hasta 2014, proporcionando datos valiosos sobre el 'planeta hermano' de la Tierra.",
          de: "Venus Express, gestartet von der Europäischen Weltraumorganisation, erreichte am 8. Juli 2006 die Venus. Diese Mission untersuchte die Atmosphäre, die Plasma-Umgebung und die Oberflächenmerkmale der Venus. Venus Express entdeckte, dass Venus einst Ozeane hatte, diese aber durch einen außer Kontrolle geratenen Treibhauseffekt verlor. Die Mission war bis 2014 in Betrieb und lieferte wertvolle Daten über den 'Schwesterplaneten' der Erde.",
          nl: "Venus Express, gelanceerd door het Europees Ruimtevaartagentschap, bereikte Venus op 8 juli 2006. Deze missie bestudeerde de atmosfeer van Venus, de plasma-omgeving en oppervlaktekenmerken. Venus Express ontdekte dat Venus ooit oceanen had maar deze verloor door een ongecontroleerd broeikaseffect. De missie was actief tot 2014 en leverde waardevolle gegevens over de 'zusterplaneet' van de Aarde."
        }
      },
      {
        question: {
          en: "Which influential financial newspaper was first published on July 8, 1889?",
          es: "¿Qué influyente periódico financiero se publicó por primera vez el 8 de julio de 1889?",
          de: "Welche einflussreiche Finanzzeitung wurde erstmals am 8. Juli 1889 veröffentlicht?",
          nl: "Welke invloedrijke financiële krant werd voor het eerst gepubliceerd op 8 juli 1889?"
        },
        options: [
          { en: "Financial Times", es: "Financial Times", de: "Financial Times", nl: "Financial Times" },
          { en: "The Economist", es: "The Economist", de: "The Economist", nl: "The Economist" },
          { en: "Wall Street Journal", es: "Wall Street Journal", de: "Wall Street Journal", nl: "Wall Street Journal" },
          { en: "Bloomberg News", es: "Bloomberg News", de: "Bloomberg News", nl: "Bloomberg News" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Wall Street Journal was first published on July 8, 1889, by Charles Dow, Edward Jones, and Charles Bergstresser. It began as a four-page afternoon newsletter reporting on financial markets. Today, it's one of the most respected and widely read newspapers in the world, known for its business and financial coverage. The Dow Jones Industrial Average, created by its founder, remains a key market indicator.",
          es: "El Wall Street Journal se publicó por primera vez el 8 de julio de 1889 por Charles Dow, Edward Jones y Charles Bergstresser. Comenzó como un boletín vespertino de cuatro páginas que informaba sobre los mercados financieros. Hoy en día, es uno de los periódicos más respetados y leídos del mundo, conocido por su cobertura empresarial y financiera. El Promedio Industrial Dow Jones, creado por su fundador, sigue siendo un indicador clave del mercado.",
          de: "Das Wall Street Journal wurde erstmals am 8. Juli 1889 von Charles Dow, Edward Jones und Charles Bergstresser veröffentlicht. Es begann als vierseitiger Nachmittags-Newsletter über Finanzmärkte. Heute ist es eine der angesehensten und meistgelesenen Zeitungen der Welt, bekannt für ihre Wirtschafts- und Finanzberichterstattung. Der Dow Jones Industrial Average, von seinem Gründer geschaffen, bleibt ein wichtiger Marktindikator.",
          nl: "De Wall Street Journal werd voor het eerst gepubliceerd op 8 juli 1889 door Charles Dow, Edward Jones en Charles Bergstresser. Het begon als een vier pagina's tellende middagnieuwsbrief over financiële markten. Vandaag is het een van de meest gerespecteerde en meest gelezen kranten ter wereld, bekend om zijn zakelijke en financiële berichtgeving. De Dow Jones Industrial Average, gecreëerd door zijn oprichter, blijft een belangrijke marktindicator."
        }
      },
      {
        question: {
          en: "Which famous Romantic poet died on July 8, 1822?",
          es: "¿Qué famoso poeta romántico murió el 8 de julio de 1822?",
          de: "Welcher berühmte romantische Dichter starb am 8. Juli 1822?",
          nl: "Welke beroemde romantische dichter stierf op 8 juli 1822?"
        },
        options: [
          { en: "Lord Byron", es: "Lord Byron", de: "Lord Byron", nl: "Lord Byron" },
          { en: "John Keats", es: "John Keats", de: "John Keats", nl: "John Keats" },
          { en: "Percy Bysshe Shelley", es: "Percy Bysshe Shelley", de: "Percy Bysshe Shelley", nl: "Percy Bysshe Shelley" },
          { en: "William Wordsworth", es: "William Wordsworth", de: "William Wordsworth", nl: "William Wordsworth" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Percy Bysshe Shelley drowned on July 8, 1822, when his boat sank during a storm off the coast of Italy. He was only 29 years old. Shelley was one of the major English Romantic poets, known for works like 'Ozymandias' and 'Ode to the West Wind.' He was married to Mary Shelley, author of 'Frankenstein,' and was friends with Lord Byron.",
          es: "Percy Bysshe Shelley se ahogó el 8 de julio de 1822 cuando su barco se hundió durante una tormenta frente a la costa de Italia. Tenía solo 29 años. Shelley fue uno de los principales poetas románticos ingleses, conocido por obras como 'Ozymandias' y 'Oda al viento del oeste'. Estaba casado con Mary Shelley, autora de 'Frankenstein', y era amigo de Lord Byron.",
          de: "Percy Bysshe Shelley ertrank am 8. Juli 1822, als sein Boot während eines Sturms vor der Küste Italiens sank. Er war erst 29 Jahre alt. Shelley war einer der bedeutendsten englischen romantischen Dichter, bekannt für Werke wie 'Ozymandias' und 'Ode an den Westwind'. Er war mit Mary Shelley, der Autorin von 'Frankenstein', verheiratet und mit Lord Byron befreundet.",
          nl: "Percy Bysshe Shelley verdronk op 8 juli 1822 toen zijn boot zonk tijdens een storm voor de kust van Italië. Hij was pas 29 jaar oud. Shelley was een van de belangrijkste Engelse romantische dichters, bekend om werken als 'Ozymandias' en 'Ode aan de Westenwind'. Hij was getrouwd met Mary Shelley, auteur van 'Frankenstein', en was bevriend met Lord Byron."
        }
      }
    ],

    // Day 9 - July 9th: Argentina independence, Tom Hanks, 10-cent coins, Connecticut, O.J. Simpson
    day9: [
      {
        question: {
          en: "Which South American country declared its independence on July 9, 1816?",
          es: "¿Qué país sudamericano declaró su independencia el 9 de julio de 1816?",
          de: "Welches südamerikanische Land erklärte am 9. Juli 1816 seine Unabhängigkeit?",
          nl: "Welk Zuid-Amerikaans land verklaarde zijn onafhankelijkheid op 9 juli 1816?"
        },
        options: [
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Argentina declared its independence from Spain on July 9, 1816, at the Congress of Tucumán. This date is celebrated annually as Argentina's Independence Day. The declaration came after six years of revolutionary war and established the United Provinces of South America, which later became Argentina. The country's name comes from the Latin word for silver, 'argentum.'",
          es: "Argentina declaró su independencia de España el 9 de julio de 1816 en el Congreso de Tucumán. Esta fecha se celebra anualmente como el Día de la Independencia de Argentina. La declaración llegó después de seis años de guerra revolucionaria y estableció las Provincias Unidas de Sudamérica, que más tarde se convirtieron en Argentina. El nombre del país proviene de la palabra latina para plata, 'argentum'.",
          de: "Argentinien erklärte am 9. Juli 1816 auf dem Kongress von Tucumán seine Unabhängigkeit von Spanien. Dieses Datum wird jährlich als Argentiniens Unabhängigkeitstag gefeiert. Die Erklärung kam nach sechs Jahren Revolutionskrieg und etablierte die Vereinigten Provinzen Südamerikas, die später zu Argentinien wurden. Der Name des Landes stammt vom lateinischen Wort für Silber, 'argentum'.",
          nl: "Argentinië verklaarde zijn onafhankelijkheid van Spanje op 9 juli 1816 tijdens het Congres van Tucumán. Deze datum wordt jaarlijks gevierd als Argentinië's Onafhankelijkheidsdag. De verklaring kwam na zes jaar revolutionaire oorlog en vestigde de Verenigde Provinciën van Zuid-Amerika, die later Argentinië werden. De naam van het land komt van het Latijnse woord voor zilver, 'argentum'."
        }
      },
      {
        question: {
          en: "Which Oscar-winning actor, known for 'Forrest Gump,' was born on July 9, 1956?",
          es: "¿Qué actor ganador del Oscar, conocido por 'Forrest Gump', nació el 9 de julio de 1956?",
          de: "Welcher Oscar-prämierte Schauspieler, bekannt für 'Forrest Gump', wurde am 9. Juli 1956 geboren?",
          nl: "Welke Oscar-winnende acteur, bekend van 'Forrest Gump', werd geboren op 9 juli 1956?"
        },
        options: [
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" },
          { en: "Tom Hanks", es: "Tom Hanks", de: "Tom Hanks", nl: "Tom Hanks" },
          { en: "Brad Pitt", es: "Brad Pitt", de: "Brad Pitt", nl: "Brad Pitt" },
          { en: "Morgan Freeman", es: "Morgan Freeman", de: "Morgan Freeman", nl: "Morgan Freeman" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Tom Hanks is one of the most beloved actors in Hollywood, known for his versatility and likability. He has won two consecutive Best Actor Oscars for 'Philadelphia' (1993) and 'Forrest Gump' (1994). Other iconic roles include 'Cast Away,' 'Saving Private Ryan,' and voicing Woody in the 'Toy Story' franchise. Hanks is also a producer, writer, and director.",
          es: "Tom Hanks es uno de los actores más queridos de Hollywood, conocido por su versatilidad y simpatía. Ha ganado dos Oscar consecutivos al Mejor Actor por 'Filadelfia' (1993) y 'Forrest Gump' (1994). Otros papeles icónicos incluyen 'Náufrago', 'Rescatando al Soldado Ryan' y dar voz a Woody en la franquicia 'Toy Story'. Hanks también es productor, escritor y director.",
          de: "Tom Hanks ist einer der beliebtesten Schauspieler Hollywoods, bekannt für seine Vielseitigkeit und Sympathie. Er hat zwei aufeinanderfolgende Oscars als Bester Hauptdarsteller für 'Philadelphia' (1993) und 'Forrest Gump' (1994) gewonnen. Weitere ikonische Rollen sind 'Cast Away', 'Der Soldat James Ryan' und die Stimme von Woody in der 'Toy Story'-Franchise. Hanks ist auch Produzent, Autor und Regisseur.",
          nl: "Tom Hanks is een van de meest geliefde acteurs in Hollywood, bekend om zijn veelzijdigheid en sympathie. Hij heeft twee opeenvolgende Oscars voor Beste Acteur gewonnen voor 'Philadelphia' (1993) en 'Forrest Gump' (1994). Andere iconische rollen zijn 'Cast Away', 'Saving Private Ryan' en de stem van Woody in de 'Toy Story' franchise. Hanks is ook producent, schrijver en regisseur."
        }
      },
      {
        question: {
          en: "What coin was first minted in the United States on July 9, 1793?",
          es: "¿Qué moneda se acuñó por primera vez en los Estados Unidos el 9 de julio de 1793?",
          de: "Welche Münze wurde erstmals am 9. Juli 1793 in den Vereinigten Staaten geprägt?",
          nl: "Welke munt werd voor het eerst geslagen in de Verenigde Staten op 9 juli 1793?"
        },
        options: [
          { en: "Quarter (25-cent)", es: "Cuarto de dólar (25 centavos)", de: "Quarter (25-Cent)", nl: "Kwartje (25-cent)" },
          { en: "Dime (10-cent)", es: "Dime (10 centavos)", de: "Dime (10-Cent)", nl: "Dubbeltje (10-cent)" },
          { en: "Penny (1-cent)", es: "Penique (1 centavo)", de: "Penny (1-Cent)", nl: "Cent (1-cent)" },
          { en: "Nickel (5-cent)", es: "Níquel (5 centavos)", de: "Nickel (5-Cent)", nl: "Stuiver (5-cent)" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first 10-cent coins (dimes) were minted on July 9, 1793, at the newly established U.S. Mint in Philadelphia. These early dimes were made of silver and featured Lady Liberty on one side. The word 'dime' comes from the French word 'dîme,' meaning 'tithe' or one-tenth. The dime remains the smallest and thinnest U.S. coin in circulation today.",
          es: "Las primeras monedas de 10 centavos (dimes) se acuñaron el 9 de julio de 1793 en la recién establecida Casa de la Moneda de Estados Unidos en Filadelfia. Estos primeros dimes estaban hechos de plata y presentaban a Lady Liberty en un lado. La palabra 'dime' proviene de la palabra francesa 'dîme', que significa 'diezmo' o un décimo. El dime sigue siendo la moneda estadounidense más pequeña y delgada en circulación hoy en día.",
          de: "Die ersten 10-Cent-Münzen (Dimes) wurden am 9. Juli 1793 in der neu gegründeten U.S. Mint in Philadelphia geprägt. Diese frühen Dimes waren aus Silber und zeigten Lady Liberty auf einer Seite. Das Wort 'dime' kommt vom französischen Wort 'dîme', was 'Zehntel' bedeutet. Der Dime bleibt die kleinste und dünnste US-Münze im Umlauf.",
          nl: "De eerste 10-cent munten (dimes) werden geslagen op 9 juli 1793 in de nieuw opgerichte U.S. Mint in Philadelphia. Deze vroege dimes waren gemaakt van zilver en toonden Lady Liberty aan één kant. Het woord 'dime' komt van het Franse woord 'dîme', wat 'tiende' betekent. De dime blijft de kleinste en dunste Amerikaanse munt in omloop vandaag."
        }
      },
      {
        question: {
          en: "Which state, known as the 'Constitution State,' ratified the Bill of Rights on July 9, 1868?",
          es: "¿Qué estado, conocido como el 'Estado de la Constitución', ratificó la Declaración de Derechos el 9 de julio de 1868?",
          de: "Welcher Staat, bekannt als 'Constitution State', ratifizierte am 9. Juli 1868 die Bill of Rights?",
          nl: "Welke staat, bekend als de 'Grondwet Staat', ratificeerde de Bill of Rights op 9 juli 1868?"
        },
        options: [
          { en: "Massachusetts", es: "Massachusetts", de: "Massachusetts", nl: "Massachusetts" },
          { en: "Virginia", es: "Virginia", de: "Virginia", nl: "Virginia" },
          { en: "Connecticut", es: "Connecticut", de: "Connecticut", nl: "Connecticut" },
          { en: "Rhode Island", es: "Rhode Island", de: "Rhode Island", nl: "Rhode Island" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Connecticut, nicknamed the 'Constitution State,' belatedly ratified the Bill of Rights on July 9, 1868, though it had been adopted in 1791. Connecticut is one of the original 13 colonies and played a key role in the Constitutional Convention. The state's Fundamental Orders (1639) is considered by some to be the first written constitution in North America.",
          es: "Connecticut, apodado el 'Estado de la Constitución', ratificó tardíamente la Declaración de Derechos el 9 de julio de 1868, aunque había sido adoptada en 1791. Connecticut es una de las 13 colonias originales y desempeñó un papel clave en la Convención Constitucional. Las Órdenes Fundamentales del estado (1639) son consideradas por algunos como la primera constitución escrita en América del Norte.",
          de: "Connecticut, mit dem Spitznamen 'Constitution State', ratifizierte verspätet die Bill of Rights am 9. Juli 1868, obwohl sie 1791 verabschiedet worden war. Connecticut ist eine der ursprünglichen 13 Kolonien und spielte eine Schlüsselrolle beim Verfassungskonvent. Die Fundamental Orders des Staates (1639) werden von einigen als die erste geschriebene Verfassung Nordamerikas angesehen.",
          nl: "Connecticut, met de bijnaam 'Grondwet Staat', ratificeerde laat de Bill of Rights op 9 juli 1868, hoewel deze in 1791 was aangenomen. Connecticut is een van de oorspronkelijke 13 koloniën en speelde een sleutelrol in de Grondwettelijke Conventie. De Fundamental Orders van de staat (1639) worden door sommigen beschouwd als de eerste geschreven grondwet in Noord-Amerika."
        }
      },
      {
        question: {
          en: "Which controversial former NFL player was born on July 9, 1947?",
          es: "¿Qué controvertido ex jugador de la NFL nació el 9 de julio de 1947?",
          de: "Welcher umstrittene ehemalige NFL-Spieler wurde am 9. Juli 1947 geboren?",
          nl: "Welke controversiële voormalige NFL-speler werd geboren op 9 juli 1947?"
        },
        options: [
          { en: "Jim Brown", es: "Jim Brown", de: "Jim Brown", nl: "Jim Brown" },
          { en: "Walter Payton", es: "Walter Payton", de: "Walter Payton", nl: "Walter Payton" },
          { en: "O.J. Simpson", es: "O.J. Simpson", de: "O.J. Simpson", nl: "O.J. Simpson" },
          { en: "Joe Namath", es: "Joe Namath", de: "Joe Namath", nl: "Joe Namath" }
        ],
        correctIndex: 2,
        explanation: {
          en: "O.J. Simpson was a Heisman Trophy winner and NFL Hall of Fame running back who played primarily for the Buffalo Bills. He became the first NFL player to rush for over 2,000 yards in a season (1973). After retiring, he pursued acting and broadcasting. His 1995 murder trial became one of the most watched events in American television history.",
          es: "O.J. Simpson fue ganador del Trofeo Heisman y corredor del Salón de la Fama de la NFL que jugó principalmente para los Buffalo Bills. Se convirtió en el primer jugador de la NFL en correr más de 2,000 yardas en una temporada (1973). Después de retirarse, siguió la actuación y la transmisión. Su juicio por asesinato en 1995 se convirtió en uno de los eventos más vistos en la historia de la televisión estadounidense.",
          de: "O.J. Simpson war ein Heisman-Trophy-Gewinner und NFL Hall of Fame Running Back, der hauptsächlich für die Buffalo Bills spielte. Er wurde der erste NFL-Spieler, der in einer Saison über 2.000 Yards erlief (1973). Nach seiner Pensionierung verfolgte er Schauspielerei und Broadcasting. Sein Mordprozess 1995 wurde zu einem der meistgesehenen Ereignisse in der amerikanischen Fernsehgeschichte.",
          nl: "O.J. Simpson was een Heisman Trophy-winnaar en NFL Hall of Fame running back die voornamelijk speelde voor de Buffalo Bills. Hij werd de eerste NFL-speler die meer dan 2.000 yards in een seizoen liep (1973). Na zijn pensionering ging hij acteren en omroepen. Zijn moordzaak in 1995 werd een van de meest bekeken evenementen in de Amerikaanse televisiegeschiedenis."
        }
      }
    ],

    // Day 10 - July 10th: Nikola Tesla, Telstar, Bahamas, Battle of Britain, Wyoming
    day10: [
      {
        question: {
          en: "Which famous inventor and electrical engineer was born on July 10, 1856?",
          es: "¿Qué famoso inventor e ingeniero eléctrico nació el 10 de julio de 1856?",
          de: "Welcher berühmte Erfinder und Elektroingenieur wurde am 10. Juli 1856 geboren?",
          nl: "Welke beroemde uitvinder en elektrotechnicus werd geboren op 10 juli 1856?"
        },
        options: [
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nikola Tesla was born on July 10, 1856, in modern-day Croatia. He was a brilliant inventor who pioneered alternating current (AC) electricity, which powers our homes today. Tesla held over 300 patents and made groundbreaking contributions to wireless communication, radio, and X-ray technology. His rivalry with Thomas Edison over electrical systems became legendary in scientific history.",
          es: "Nikola Tesla nació el 10 de julio de 1856 en la actual Croacia. Fue un brillante inventor que fue pionero en la corriente alterna (CA), que alimenta nuestros hogares hoy en día. Tesla tenía más de 300 patentes e hizo contribuciones revolucionarias a la comunicación inalámbrica, la radio y la tecnología de rayos X. Su rivalidad con Thomas Edison sobre los sistemas eléctricos se volvió legendaria en la historia científica.",
          de: "Nikola Tesla wurde am 10. Juli 1856 im heutigen Kroatien geboren. Er war ein brillanter Erfinder, der den Wechselstrom (AC) entwickelte, der heute unsere Häuser mit Energie versorgt. Tesla hielt über 300 Patente und leistete bahnbrechende Beiträge zur drahtlosen Kommunikation, zum Radio und zur Röntgentechnologie. Seine Rivalität mit Thomas Edison über elektrische Systeme wurde legendär in der Wissenschaftsgeschichte.",
          nl: "Nikola Tesla werd geboren op 10 juli 1856 in het huidige Kroatië. Hij was een briljante uitvinder die baanbrekend werk verrichtte met wisselstroom (AC), die vandaag onze huizen van stroom voorziet. Tesla had meer dan 300 patenten en leverde baanbrekende bijdragen aan draadloze communicatie, radio en röntgentechnologie. Zijn rivaliteit met Thomas Edison over elektrische systemen werd legendarisch in de wetenschapsgeschiedenis."
        }
      },
      {
        question: {
          en: "Which revolutionary communications satellite was launched on July 10, 1962?",
          es: "¿Qué satélite de comunicaciones revolucionario se lanzó el 10 de julio de 1962?",
          de: "Welcher revolutionäre Kommunikationssatellit wurde am 10. Juli 1962 gestartet?",
          nl: "Welke revolutionaire communicatiesatelliet werd gelanceerd op 10 juli 1962?"
        },
        options: [
          { en: "Sputnik", es: "Sputnik", de: "Sputnik", nl: "Spoetnik" },
          { en: "Explorer 1", es: "Explorer 1", de: "Explorer 1", nl: "Explorer 1" },
          { en: "Telstar", es: "Telstar", de: "Telstar", nl: "Telstar" },
          { en: "Voyager", es: "Voyager", de: "Voyager", nl: "Voyager" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Telstar was launched on July 10, 1962, becoming the world's first active communications satellite. It successfully relayed the first transatlantic television signal, telephone calls, and fax images. Telstar enabled live television broadcasts between the United States and Europe for the first time. The satellite's success inspired the famous instrumental song 'Telstar' by The Tornados.",
          es: "Telstar se lanzó el 10 de julio de 1962, convirtiéndose en el primer satélite de comunicaciones activo del mundo. Retransmitió con éxito la primera señal de televisión transatlántica, llamadas telefónicas e imágenes de fax. Telstar permitió transmisiones de televisión en vivo entre Estados Unidos y Europa por primera vez. El éxito del satélite inspiró la famosa canción instrumental 'Telstar' de The Tornados.",
          de: "Telstar wurde am 10. Juli 1962 gestartet und wurde der erste aktive Kommunikationssatellit der Welt. Er übertrug erfolgreich das erste transatlantische Fernsehsignal, Telefongespräche und Faxbilder. Telstar ermöglichte zum ersten Mal Live-Fernsehübertragungen zwischen den Vereinigten Staaten und Europa. Der Erfolg des Satelliten inspirierte den berühmten Instrumentalsong 'Telstar' von The Tornados.",
          nl: "Telstar werd gelanceerd op 10 juli 1962 en werd 's werelds eerste actieve communicatiesatelliet. Het relayeerde met succes het eerste transatlantische televisiesignaal, telefoongesprekken en faxbeelden. Telstar maakte voor het eerst live televisie-uitzendingen mogelijk tussen de Verenigde Staten en Europa. Het succes van de satelliet inspireerde het beroemde instrumentale nummer 'Telstar' van The Tornados."
        }
      },
      {
        question: {
          en: "Which Caribbean island nation gained independence on July 10, 1973?",
          es: "¿Qué nación insular del Caribe obtuvo su independencia el 10 de julio de 1973?",
          de: "Welche karibische Inselstaat erlangte am 10. Juli 1973 seine Unabhängigkeit?",
          nl: "Welke Caribische eilandnatie kreeg onafhankelijkheid op 10 juli 1973?"
        },
        options: [
          { en: "Jamaica", es: "Jamaica", de: "Jamaika", nl: "Jamaica" },
          { en: "Bahamas", es: "Bahamas", de: "Bahamas", nl: "Bahama's" },
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Haiti", es: "Haití", de: "Haiti", nl: "Haïti" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Bahamas gained independence from the United Kingdom on July 10, 1973, after more than 250 years of British colonial rule. The nation consists of over 700 islands and cays in the Atlantic Ocean. The Bahamas is known for its beautiful beaches, clear turquoise waters, and vibrant culture. It became the first Caribbean nation to gain independence in the 1970s.",
          es: "Las Bahamas obtuvieron su independencia del Reino Unido el 10 de julio de 1973, después de más de 250 años de dominio colonial británico. La nación consta de más de 700 islas y cayos en el Océano Atlántico. Las Bahamas son conocidas por sus hermosas playas, aguas turquesas cristalinas y cultura vibrante. Se convirtió en la primera nación caribeña en obtener la independencia en la década de 1970.",
          de: "Die Bahamas erlangten am 10. Juli 1973 nach mehr als 250 Jahren britischer Kolonialherrschaft ihre Unabhängigkeit vom Vereinigten Königreich. Die Nation besteht aus über 700 Inseln und Korallenriffen im Atlantischen Ozean. Die Bahamas sind bekannt für ihre schönen Strände, klaren türkisfarbenen Gewässer und lebendige Kultur. Sie wurden die erste karibische Nation, die in den 1970er Jahren unabhängig wurde.",
          nl: "De Bahama's werden onafhankelijk van het Verenigd Koninkrijk op 10 juli 1973, na meer dan 250 jaar Britse koloniale heerschappij. De natie bestaat uit meer dan 700 eilanden en eilandjes in de Atlantische Oceaan. De Bahama's staan bekend om hun prachtige stranden, heldere turquoise wateren en levendige cultuur. Het werd de eerste Caribische natie die onafhankelijk werd in de jaren 1970."
        }
      },
      {
        question: {
          en: "Which major World War II air campaign began on July 10, 1940?",
          es: "¿Qué importante campaña aérea de la Segunda Guerra Mundial comenzó el 10 de julio de 1940?",
          de: "Welche große Luftkampagne des Zweiten Weltkriegs begann am 10. Juli 1940?",
          nl: "Welke grote luchtcampagne uit de Tweede Wereldoorlog begon op 10 juli 1940?"
        },
        options: [
          { en: "D-Day invasion", es: "Invasión del Día D", de: "D-Day-Invasion", nl: "D-Day invasie" },
          { en: "Pearl Harbor attack", es: "Ataque a Pearl Harbor", de: "Angriff auf Pearl Harbor", nl: "Aanval op Pearl Harbor" },
          { en: "Battle of Britain", es: "Batalla de Inglaterra", de: "Luftschlacht um England", nl: "Slag om Engeland" },
          { en: "Battle of Midway", es: "Batalla de Midway", de: "Schlacht um Midway", nl: "Slag om Midway" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Britain began on July 10, 1940, when Nazi Germany launched a massive air offensive against the United Kingdom. The Royal Air Force heroically defended Britain against the German Luftwaffe in what became the first major military campaign fought entirely in the air. Britain's victory prevented a German invasion and marked a turning point in World War II. Winston Churchill famously said, 'Never was so much owed by so many to so few.'",
          es: "La Batalla de Inglaterra comenzó el 10 de julio de 1940, cuando la Alemania nazi lanzó una ofensiva aérea masiva contra el Reino Unido. La Real Fuerza Aérea defendió heroicamente a Gran Bretaña contra la Luftwaffe alemana en lo que se convirtió en la primera campaña militar importante librada completamente en el aire. La victoria de Gran Bretaña evitó una invasión alemana y marcó un punto de inflexión en la Segunda Guerra Mundial. Winston Churchill dijo famosamente: 'Nunca tantos debieron tanto a tan pocos'.",
          de: "Die Luftschlacht um England begann am 10. Juli 1940, als Nazideutschland eine massive Luftoffensive gegen das Vereinigte Königreich startete. Die Royal Air Force verteidigte Großbritannien heroisch gegen die deutsche Luftwaffe in der ersten großen Militärkampagne, die vollständig in der Luft ausgetragen wurde. Großbritanniens Sieg verhinderte eine deutsche Invasion und markierte einen Wendepunkt im Zweiten Weltkrieg. Winston Churchill sagte berühmt: 'Noch nie schuldeten so viele so wenigen so viel.'",
          nl: "De Slag om Engeland begon op 10 juli 1940, toen Nazi-Duitsland een massaal luchtoffensief lanceerde tegen het Verenigd Koninkrijk. De Royal Air Force verdedigde heldhaftig Groot-Brittannië tegen de Duitse Luftwaffe in wat de eerste grote militaire campagne werd die volledig in de lucht werd gevochten. De overwinning van Groot-Brittannië verhinderde een Duitse invasie en markeerde een keerpunt in de Tweede Wereldoorlog. Winston Churchill zei beroemd: 'Nooit was zoveel verschuldigd door zovelen aan zo weinigen.'"
        }
      },
      {
        question: {
          en: "Which US state was admitted to the Union on July 10, 1890?",
          es: "¿Qué estado de EE.UU. fue admitido en la Unión el 10 de julio de 1890?",
          de: "Welcher US-Bundesstaat wurde am 10. Juli 1890 in die Union aufgenommen?",
          nl: "Welke Amerikaanse staat werd toegelaten tot de Unie op 10 juli 1890?"
        },
        options: [
          { en: "Montana", es: "Montana", de: "Montana", nl: "Montana" },
          { en: "Idaho", es: "Idaho", de: "Idaho", nl: "Idaho" },
          { en: "Wyoming", es: "Wyoming", de: "Wyoming", nl: "Wyoming" },
          { en: "Utah", es: "Utah", de: "Utah", nl: "Utah" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Wyoming became the 44th state on July 10, 1890. Known as the 'Equality State,' Wyoming was the first state to grant women the right to vote (1869) and had the first female governor in US history. The state is famous for Yellowstone National Park, the world's first national park, and the Grand Tetons. Wyoming's wide-open spaces and cowboy culture embody the American West.",
          es: "Wyoming se convirtió en el estado número 44 el 10 de julio de 1890. Conocido como el 'Estado de la Igualdad', Wyoming fue el primer estado en otorgar a las mujeres el derecho al voto (1869) y tuvo la primera gobernadora en la historia de Estados Unidos. El estado es famoso por el Parque Nacional Yellowstone, el primer parque nacional del mundo, y los Grand Tetons. Los amplios espacios abiertos de Wyoming y la cultura vaquera encarnan el Oeste americano.",
          de: "Wyoming wurde am 10. Juli 1890 der 44. Bundesstaat. Bekannt als der 'Gleichheits-Staat', war Wyoming der erste Staat, der Frauen das Wahlrecht gewährte (1869) und hatte die erste weibliche Gouverneurin in der US-Geschichte. Der Staat ist berühmt für den Yellowstone-Nationalpark, den weltweit ersten Nationalpark, und die Grand Tetons. Wyomings weite offene Räume und Cowboy-Kultur verkörpern den amerikanischen Westen.",
          nl: "Wyoming werd de 44e staat op 10 juli 1890. Bekend als de 'Gelijkheid Staat', was Wyoming de eerste staat die vrouwen het stemrecht verleende (1869) en had de eerste vrouwelijke gouverneur in de Amerikaanse geschiedenis. De staat is beroemd om Yellowstone National Park, 's werelds eerste nationale park, en de Grand Tetons. Wyoming's weidse open ruimtes en cowboycultuur belichamen het Amerikaanse Westen."
        }
      }
    ],

    // Day 11 - July 11th: World Population Day, Burr-Hamilton duel, Skylab, To Kill a Mockingbird, Mongolia
    day11: [
      {
        question: {
          en: "What United Nations observance is celebrated on July 11th?",
          es: "¿Qué conmemoración de las Naciones Unidas se celebra el 11 de julio?",
          de: "Welcher Gedenktag der Vereinten Nationen wird am 11. Juli gefeiert?",
          nl: "Welke herdenking van de Verenigde Naties wordt gevierd op 11 juli?"
        },
        options: [
          { en: "World Environment Day", es: "Día Mundial del Medio Ambiente", de: "Weltumwelttag", nl: "Wereldmilieudag" },
          { en: "World Population Day", es: "Día Mundial de la Población", de: "Weltbevölkerungstag", nl: "Wereldbevolkingsdag" },
          { en: "World Health Day", es: "Día Mundial de la Salud", de: "Weltgesundheitstag", nl: "Wereldgezondheidsdag" },
          { en: "World Peace Day", es: "Día Mundial de la Paz", de: "Weltfriedenstag", nl: "Wereldvredesdag" }
        ],
        correctIndex: 1,
        explanation: {
          en: "World Population Day has been observed on July 11th since 1990 to raise awareness about global population issues. It was established by the UN to focus on the urgency and importance of population issues including family planning, gender equality, poverty, maternal health, and human rights. The day commemorates the approximate date when world population reached 5 billion people in 1987.",
          es: "El Día Mundial de la Población se celebra el 11 de julio desde 1990 para crear conciencia sobre los problemas de población global. Fue establecido por la ONU para enfocarse en la urgencia e importancia de los problemas de población, incluida la planificación familiar, la igualdad de género, la pobreza, la salud materna y los derechos humanos. El día conmemora la fecha aproximada cuando la población mundial alcanzó los 5 mil millones de personas en 1987.",
          de: "Der Weltbevölkerungstag wird seit 1990 am 11. Juli begangen, um das Bewusstsein für globale Bevölkerungsfragen zu schärfen. Er wurde von der UN eingerichtet, um sich auf die Dringlichkeit und Bedeutung von Bevölkerungsfragen zu konzentrieren, einschließlich Familienplanung, Gleichstellung der Geschlechter, Armut, Gesundheit der Mütter und Menschenrechte. Der Tag erinnert an das ungefähre Datum, als die Weltbevölkerung 1987 5 Milliarden Menschen erreichte.",
          nl: "Wereldbevolkingsdag wordt sinds 1990 op 11 juli gevierd om bewustzijn te creëren over wereldwijde bevolkingskwesties. Het werd ingesteld door de VN om zich te richten op de urgentie en het belang van bevolkingskwesties, waaronder gezinsplanning, gendergelijkheid, armoede, gezondheid van moeders en mensenrechten. De dag herdenkt de geschatte datum waarop de wereldbevolking in 1987 5 miljard mensen bereikte."
        }
      },
      {
        question: {
          en: "Which two American Founding Fathers engaged in a famous duel on July 11, 1804?",
          es: "¿Qué dos Padres Fundadores estadounidenses participaron en un famoso duelo el 11 de julio de 1804?",
          de: "Welche beiden amerikanischen Gründerväter führten am 11. Juli 1804 ein berühmtes Duell?",
          nl: "Welke twee Amerikaanse Founding Fathers hielden een beroemd duel op 11 juli 1804?"
        },
        options: [
          { en: "Washington and Jefferson", es: "Washington y Jefferson", de: "Washington und Jefferson", nl: "Washington en Jefferson" },
          { en: "Franklin and Adams", es: "Franklin y Adams", de: "Franklin und Adams", nl: "Franklin en Adams" },
          { en: "Burr and Hamilton", es: "Burr y Hamilton", de: "Burr und Hamilton", nl: "Burr en Hamilton" },
          { en: "Madison and Monroe", es: "Madison y Monroe", de: "Madison und Monroe", nl: "Madison en Monroe" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Aaron Burr, the sitting Vice President, fatally shot Alexander Hamilton in a duel in Weehawken, New Jersey on July 11, 1804. Hamilton, a Founding Father and first Treasury Secretary, died the next day. The duel resulted from years of political and personal animosity. Burr was charged with murder but never tried. This tragic event became one of the most famous duels in American history and inspired the hit musical 'Hamilton.'",
          es: "Aaron Burr, el vicepresidente en funciones, disparó fatalmente a Alexander Hamilton en un duelo en Weehawken, Nueva Jersey el 11 de julio de 1804. Hamilton, un Padre Fundador y primer Secretario del Tesoro, murió al día siguiente. El duelo resultó de años de animosidad política y personal. Burr fue acusado de asesinato pero nunca fue juzgado. Este trágico evento se convirtió en uno de los duelos más famosos de la historia estadounidense e inspiró el exitoso musical 'Hamilton'.",
          de: "Aaron Burr, der amtierende Vizepräsident, erschoss Alexander Hamilton tödlich in einem Duell in Weehawken, New Jersey am 11. Juli 1804. Hamilton, ein Gründervater und erster Finanzminister, starb am nächsten Tag. Das Duell resultierte aus Jahren politischer und persönlicher Feindschaft. Burr wurde des Mordes angeklagt, aber nie vor Gericht gestellt. Dieses tragische Ereignis wurde zu einem der berühmtesten Duelle der amerikanischen Geschichte und inspirierte das Hit-Musical 'Hamilton'.",
          nl: "Aaron Burr, de zittende vicepresident, schoot Alexander Hamilton dodelijk neer in een duel in Weehawken, New Jersey op 11 juli 1804. Hamilton, een Founding Father en eerste minister van Financiën, stierf de volgende dag. Het duel volgde uit jarenlange politieke en persoonlijke vijandigheid. Burr werd aangeklaagd voor moord maar nooit berecht. Deze tragische gebeurtenis werd een van de beroemdste duels in de Amerikaanse geschiedenis en inspireerde de hit-musical 'Hamilton'."
        }
      },
      {
        question: {
          en: "Which NASA space station fell to Earth on July 11, 1979?",
          es: "¿Qué estación espacial de la NASA cayó a la Tierra el 11 de julio de 1979?",
          de: "Welche NASA-Raumstation fiel am 11. Juli 1979 zur Erde?",
          nl: "Welk NASA-ruimtestation viel op 11 juli 1979 naar de aarde?"
        },
        options: [
          { en: "Mir", es: "Mir", de: "Mir", nl: "Mir" },
          { en: "International Space Station", es: "Estación Espacial Internacional", de: "Internationale Raumstation", nl: "Internationaal Ruimtestation" },
          { en: "Skylab", es: "Skylab", de: "Skylab", nl: "Skylab" },
          { en: "Salyut", es: "Salyut", de: "Saljut", nl: "Saljoet" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Skylab, America's first space station, fell back to Earth on July 11, 1979, breaking up over the Indian Ocean and Western Australia. Launched in 1973, Skylab hosted three crews of astronauts who conducted experiments and observations. The uncontrolled re-entry created worldwide media attention as people tracked where it might land. Some debris fell on unpopulated areas of Australia, and the town of Esperance jokingly fined NASA $400 for littering.",
          es: "Skylab, la primera estación espacial de Estados Unidos, cayó de vuelta a la Tierra el 11 de julio de 1979, desintegrándose sobre el Océano Índico y Australia Occidental. Lanzado en 1973, Skylab albergó tres tripulaciones de astronautas que realizaron experimentos y observaciones. El reingreso no controlado creó atención mediática mundial mientras la gente rastreaba dónde podría aterrizar. Algunos escombros cayeron en áreas despobladas de Australia, y la ciudad de Esperance multó en broma a la NASA con 400 dólares por tirar basura.",
          de: "Skylab, Amerikas erste Raumstation, fiel am 11. Juli 1979 zur Erde zurück und zerbrach über dem Indischen Ozean und Westaustralien. Skylab wurde 1973 gestartet und beherbergte drei Astronautencrews, die Experimente und Beobachtungen durchführten. Der unkontrollierte Wiedereintritt erzeugte weltweite Medienaufmerksamkeit, da die Menschen verfolgten, wo sie landen könnte. Einige Trümmer fielen auf unbewohnte Gebiete Australiens, und die Stadt Esperance verhängte scherzhaft eine Geldstrafe von 400 Dollar gegen die NASA wegen Verschmutzung.",
          nl: "Skylab, Amerika's eerste ruimtestation, viel terug naar de Aarde op 11 juli 1979 en brak uiteen boven de Indische Oceaan en West-Australië. Gelanceerd in 1973, herbergde Skylab drie bemanningen van astronauten die experimenten en observaties uitvoerden. De ongecontroleerde terugkeer creëerde wereldwijde media-aandacht terwijl mensen volgden waar het zou kunnen landen. Sommige brokstukken vielen op onbewoonde gebieden van Australië, en de stad Esperance beboette NASA schertsend $400 voor zwerfvuil."
        }
      },
      {
        question: {
          en: "Which classic American novel was published on July 11, 1960?",
          es: "¿Qué novela estadounidense clásica se publicó el 11 de julio de 1960?",
          de: "Welcher klassische amerikanische Roman wurde am 11. Juli 1960 veröffentlicht?",
          nl: "Welke klassieke Amerikaanse roman werd gepubliceerd op 11 juli 1960?"
        },
        options: [
          { en: "The Catcher in the Rye", es: "El guardián entre el centeno", de: "Der Fänger im Roggen", nl: "De vanger in het graan" },
          { en: "To Kill a Mockingbird", es: "Matar a un ruiseñor", de: "Wer die Nachtigall stört", nl: "Spaar de spotvogel" },
          { en: "The Great Gatsby", es: "El gran Gatsby", de: "Der große Gatsby", nl: "De grote Gatsby" },
          { en: "Of Mice and Men", es: "De ratones y hombres", de: "Von Mäusen und Menschen", nl: "Van muizen en mensen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'To Kill a Mockingbird' by Harper Lee was published on July 11, 1960. This Pulitzer Prize-winning novel tells the story of racial injustice in the American South through the eyes of young Scout Finch. The book addresses themes of racism, morality, and compassion, becoming an instant classic. It has sold over 40 million copies worldwide and remains required reading in many schools. The novel was adapted into an acclaimed 1962 film starring Gregory Peck.",
          es: "'Matar a un ruiseñor' de Harper Lee se publicó el 11 de julio de 1960. Esta novela ganadora del Premio Pulitzer cuenta la historia de la injusticia racial en el sur de Estados Unidos a través de los ojos de la joven Scout Finch. El libro aborda temas de racismo, moralidad y compasión, convirtiéndose en un clásico instantáneo. Ha vendido más de 40 millones de copias en todo el mundo y sigue siendo lectura obligatoria en muchas escuelas. La novela fue adaptada a una aclamada película de 1962 protagonizada por Gregory Peck.",
          de: "'Wer die Nachtigall stört' von Harper Lee wurde am 11. Juli 1960 veröffentlicht. Dieser Pulitzer-Preis-gekrönte Roman erzählt die Geschichte rassistischer Ungerechtigkeit im amerikanischen Süden durch die Augen der jungen Scout Finch. Das Buch behandelt Themen wie Rassismus, Moral und Mitgefühl und wurde zu einem sofortigen Klassiker. Es hat weltweit über 40 Millionen Exemplare verkauft und bleibt Pflichtlektüre an vielen Schulen. Der Roman wurde 1962 in einen gefeierten Film mit Gregory Peck adaptiert.",
          nl: "'Spaar de spotvogel' van Harper Lee werd gepubliceerd op 11 juli 1960. Deze Pulitzer Prize-winnende roman vertelt het verhaal van raciale onrechtvaardigheid in het Amerikaanse Zuiden door de ogen van de jonge Scout Finch. Het boek behandelt thema's van racisme, moraliteit en mededogen en werd een onmiddellijke klassieker. Het heeft wereldwijd meer dan 40 miljoen exemplaren verkocht en blijft verplichte lectuur op veel scholen. De roman werd aangepast tot een veelgeprezen film uit 1962 met Gregory Peck."
        }
      },
      {
        question: {
          en: "Which Asian country declared independence from China on July 11, 1921?",
          es: "¿Qué país asiático declaró su independencia de China el 11 de julio de 1921?",
          de: "Welches asiatische Land erklärte am 11. Juli 1921 seine Unabhängigkeit von China?",
          nl: "Welk Aziatisch land verklaarde zijn onafhankelijkheid van China op 11 juli 1921?"
        },
        options: [
          { en: "Tibet", es: "Tíbet", de: "Tibet", nl: "Tibet" },
          { en: "Mongolia", es: "Mongolia", de: "Mongolei", nl: "Mongolië" },
          { en: "Korea", es: "Corea", de: "Korea", nl: "Korea" },
          { en: "Vietnam", es: "Vietnam", de: "Vietnam", nl: "Vietnam" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Mongolia declared its independence on July 11, 1921, with Soviet support, ending over 200 years of Qing Dynasty rule. The country established itself as a people's republic and became the second communist country in the world after the Soviet Union. Mongolia is known for its vast steppes, nomadic culture, and history as the heartland of Genghis Khan's empire. Today, it's a democratic nation sandwiched between Russia and China.",
          es: "Mongolia declaró su independencia el 11 de julio de 1921, con apoyo soviético, poniendo fin a más de 200 años de dominio de la dinastía Qing. El país se estableció como una república popular y se convirtió en el segundo país comunista del mundo después de la Unión Soviética. Mongolia es conocida por sus vastas estepas, cultura nómada e historia como el corazón del imperio de Genghis Khan. Hoy en día, es una nación democrática situada entre Rusia y China.",
          de: "Mongolei erklärte am 11. Juli 1921 mit sowjetischer Unterstützung seine Unabhängigkeit und beendete damit über 200 Jahre Qing-Dynastie-Herrschaft. Das Land etablierte sich als Volksrepublik und wurde nach der Sowjetunion das zweite kommunistische Land der Welt. Die Mongolei ist bekannt für ihre weiten Steppen, nomadische Kultur und Geschichte als Herzland des Reiches von Dschingis Khan. Heute ist sie eine demokratische Nation zwischen Russland und China.",
          nl: "Mongolië verklaarde zijn onafhankelijkheid op 11 juli 1921, met Sovjetsteun, waarmee meer dan 200 jaar heerschappij van de Qing-dynastie eindigde. Het land vestigde zich als volksrepubliek en werd het tweede communistische land ter wereld na de Sovjet-Unie. Mongolië staat bekend om zijn uitgestrekte steppen, nomadische cultuur en geschiedenis als het hartland van het rijk van Genghis Khan. Tegenwoordig is het een democratische natie ingeklemd tussen Rusland en China."
        }
      }
    ],

    // Day 12 - July 12th: Henry David Thoreau, Malala Yousafzai, Battle of Kursk, Orangemen's Day, Julius Caesar
    day12: [
      {
        question: {
          en: "Which American transcendentalist author of 'Walden' was born on July 12, 1817?",
          es: "¿Qué autor trascendentalista estadounidense de 'Walden' nació el 12 de julio de 1817?",
          de: "Welcher amerikanische transzendentalist Author von 'Walden' wurde am 12. Juli 1817 geboren?",
          nl: "Welke Amerikaanse transcendentalist auteur van 'Walden' werd geboren op 12 juli 1817?"
        },
        options: [
          { en: "Ralph Waldo Emerson", es: "Ralph Waldo Emerson", de: "Ralph Waldo Emerson", nl: "Ralph Waldo Emerson" },
          { en: "Walt Whitman", es: "Walt Whitman", de: "Walt Whitman", nl: "Walt Whitman" },
          { en: "Henry David Thoreau", es: "Henry David Thoreau", de: "Henry David Thoreau", nl: "Henry David Thoreau" },
          { en: "Nathaniel Hawthorne", es: "Nathaniel Hawthorne", de: "Nathaniel Hawthorne", nl: "Nathaniel Hawthorne" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Henry David Thoreau was born on July 12, 1817. His masterpiece 'Walden' describes his experiment of simple living in the woods for two years. Thoreau was a philosopher, naturalist, and advocate of civil disobedience who influenced Gandhi and Martin Luther King Jr. His essay 'Civil Disobedience' argued for individual conscience over government law. Thoreau's writings on nature and self-reliance remain highly influential in environmental and social movements.",
          es: "Henry David Thoreau nació el 12 de julio de 1817. Su obra maestra 'Walden' describe su experimento de vida simple en el bosque durante dos años. Thoreau fue un filósofo, naturalista y defensor de la desobediencia civil que influyó en Gandhi y Martin Luther King Jr. Su ensayo 'Desobediencia Civil' argumentaba por la conciencia individual sobre la ley gubernamental. Los escritos de Thoreau sobre la naturaleza y la autosuficiencia siguen siendo muy influyentes en los movimientos ambientales y sociales.",
          de: "Henry David Thoreau wurde am 12. Juli 1817 geboren. Sein Meisterwerk 'Walden' beschreibt sein Experiment des einfachen Lebens in den Wäldern für zwei Jahre. Thoreau war ein Philosoph, Naturalist und Verfechter des zivilen Ungehorsams, der Gandhi und Martin Luther King Jr. beeinflusste. Sein Essay 'Ziviler Ungehorsam' plädierte für individuelles Gewissen über staatliches Gesetz. Thoreaus Schriften über Natur und Selbstvertrauen bleiben sehr einflussreich in Umwelt- und sozialen Bewegungen.",
          nl: "Henry David Thoreau werd geboren op 12 juli 1817. Zijn meesterwerk 'Walden' beschrijft zijn experiment van eenvoudig leven in de bossen gedurende twee jaar. Thoreau was een filosoof, naturalist en voorstander van burgerlijke ongehoorzaamheid die Gandhi en Martin Luther King Jr. beïnvloedde. Zijn essay 'Burgerlijke Ongehoorzaamheid' pleitte voor individueel geweten boven overheidswet. Thoreau's geschriften over natuur en zelfvertrouwen blijven zeer invloedrijk in milieu- en sociale bewegingen."
        }
      },
      {
        question: {
          en: "Which young Pakistani education activist was born on July 12, 1997?",
          es: "¿Qué joven activista pakistaní de la educación nació el 12 de julio de 1997?",
          de: "Welche junge pakistanische Bildungsaktivistin wurde am 12. Juli 1997 geboren?",
          nl: "Welke jonge Pakistaanse onderwijsactiviste werd geboren op 12 juli 1997?"
        },
        options: [
          { en: "Greta Thunberg", es: "Greta Thunberg", de: "Greta Thunberg", nl: "Greta Thunberg" },
          { en: "Emma Watson", es: "Emma Watson", de: "Emma Watson", nl: "Emma Watson" },
          { en: "Malala Yousafzai", es: "Malala Yousafzai", de: "Malala Yousafzai", nl: "Malala Yousafzai" },
          { en: "Wangari Maathai", es: "Wangari Maathai", de: "Wangari Maathai", nl: "Wangari Maathai" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Malala Yousafzai was born on July 12, 1997, in Pakistan. She became an advocate for girls' education and survived an assassination attempt by the Taliban in 2012. At age 17, she became the youngest Nobel Peace Prize laureate in 2014. Malala co-founded the Malala Fund to champion every girl's right to 12 years of free, safe, quality education. Her courage and advocacy have inspired millions worldwide.",
          es: "Malala Yousafzai nació el 12 de julio de 1997 en Pakistán. Se convirtió en defensora de la educación de las niñas y sobrevivió a un intento de asesinato por parte de los talibanes en 2012. A los 17 años, se convirtió en la ganadora más joven del Premio Nobel de la Paz en 2014. Malala cofundó el Fondo Malala para defender el derecho de cada niña a 12 años de educación gratuita, segura y de calidad. Su valentía y defensa han inspirado a millones en todo el mundo.",
          de: "Malala Yousafzai wurde am 12. Juli 1997 in Pakistan geboren. Sie wurde Verfechterin der Bildung für Mädchen und überlebte 2012 einen Attentatsversuch der Taliban. Mit 17 Jahren wurde sie 2014 die jüngste Nobelpreisträgerin für Frieden. Malala gründete den Malala Fund mit, um das Recht jedes Mädchens auf 12 Jahre kostenlose, sichere und qualitativ hochwertige Bildung zu verteidigen. Ihr Mut und ihre Fürsprache haben Millionen weltweit inspiriert.",
          nl: "Malala Yousafzai werd geboren op 12 juli 1997 in Pakistan. Ze werd voorvechter voor meisjesonderwijs en overleefde een moordaanslag door de Taliban in 2012. Op 17-jarige leeftijd werd ze in 2014 de jongste Nobelprijs voor de Vrede winnaar. Malala richtte mee het Malala Fund op om het recht van elk meisje op 12 jaar gratis, veilig, kwaliteitsonderwijs te verdedigen. Haar moed en belangenbehartiging hebben miljoenen wereldwijd geïnspireerd."
        }
      },
      {
        question: {
          en: "Which massive World War II tank battle began on July 12, 1943?",
          es: "¿Qué batalla masiva de tanques de la Segunda Guerra Mundial comenzó el 12 de julio de 1943?",
          de: "Welche massive Panzerschlacht des Zweiten Weltkriegs begann am 12. Juli 1943?",
          nl: "Welke massale tankslag uit de Tweede Wereldoorlog begon op 12 juli 1943?"
        },
        options: [
          { en: "Battle of El Alamein", es: "Batalla de El Alamein", de: "Schlacht von El Alamein", nl: "Slag bij El Alamein" },
          { en: "Battle of the Bulge", es: "Batalla de las Ardenas", de: "Ardennenoffensive", nl: "Slag om de Ardennen" },
          { en: "Battle of Kursk", es: "Batalla de Kursk", de: "Schlacht um Kursk", nl: "Slag om Koersk" },
          { en: "Battle of Stalingrad", es: "Batalla de Stalingrado", de: "Schlacht von Stalingrad", nl: "Slag om Stalingrad" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Kursk began on July 12, 1943, and became the largest tank battle in history. Soviet and German forces deployed over 6,000 tanks in this decisive Eastern Front engagement. The Soviet victory marked a major turning point in World War II, ending Germany's ability to launch large-scale offensives on the Eastern Front. The battle involved over 2 million troops and resulted in decisive Soviet momentum for the remainder of the war.",
          es: "La Batalla de Kursk comenzó el 12 de julio de 1943 y se convirtió en la batalla de tanques más grande de la historia. Las fuerzas soviéticas y alemanas desplegaron más de 6,000 tanques en este enfrentamiento decisivo del Frente Oriental. La victoria soviética marcó un gran punto de inflexión en la Segunda Guerra Mundial, poniendo fin a la capacidad de Alemania para lanzar ofensivas a gran escala en el Frente Oriental. La batalla involucró a más de 2 millones de tropas y resultó en un impulso soviético decisivo para el resto de la guerra.",
          de: "Die Schlacht um Kursk begann am 12. Juli 1943 und wurde zur größten Panzerschlacht der Geschichte. Sowjetische und deutsche Streitkräfte setzten über 6.000 Panzer in dieser entscheidenden Ostfront-Auseinandersetzung ein. Der sowjetische Sieg markierte einen großen Wendepunkt im Zweiten Weltkrieg und beendete Deutschlands Fähigkeit, großangelegte Offensiven an der Ostfront zu starten. Die Schlacht umfasste über 2 Millionen Soldaten und führte zu entscheidendem sowjetischen Momentum für den Rest des Krieges.",
          nl: "De Slag om Koersk begon op 12 juli 1943 en werd de grootste tankslag in de geschiedenis. Sovjettroepen en Duitse troepen zetten meer dan 6.000 tanks in bij dit beslissende Oostfront-gevecht. De Sovjet-overwinning markeerde een belangrijk keerpunt in de Tweede Wereldoorlog en beëindigde Duitslands vermogen om grootschalige offensieven aan het Oostfront te lanceren. De slag omvatte meer dan 2 miljoen troepen en resulteerde in beslissend Sovjet-momentum voor de rest van de oorlog."
        }
      },
      {
        question: {
          en: "What traditional Protestant celebration is observed on July 12th in Northern Ireland?",
          es: "¿Qué celebración protestante tradicional se observa el 12 de julio en Irlanda del Norte?",
          de: "Welche traditionelle protestantische Feier wird am 12. Juli in Nordirland begangen?",
          nl: "Welke traditionele protestantse viering wordt gehouden op 12 juli in Noord-Ierland?"
        },
        options: [
          { en: "St. Patrick's Day", es: "Día de San Patricio", de: "St. Patrick's Day", nl: "St. Patrick's Day" },
          { en: "Easter Monday", es: "Lunes de Pascua", de: "Ostermontag", nl: "Paasmaandag" },
          { en: "Orangemen's Day", es: "Día de los Orangemen", de: "Orangemen's Day", nl: "Orangemen's Day" },
          { en: "Boxing Day", es: "Boxing Day", de: "Boxing Day", nl: "Boxing Day" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Orangemen's Day (the Twelfth) is celebrated on July 12th by Protestant unionists in Northern Ireland and other countries. It commemorates the 1690 Battle of the Boyne, where Protestant King William of Orange defeated Catholic King James II. The day features parades, bonfires, and marching bands. While celebrated by many as heritage, the holiday has been controversial due to Northern Ireland's sectarian history and the Troubles.",
          es: "El Día de los Orangemen (el Doce) se celebra el 12 de julio por unionistas protestantes en Irlanda del Norte y otros países. Conmemora la Batalla del Boyne de 1690, donde el rey protestante Guillermo de Orange derrotó al rey católico Jacobo II. El día presenta desfiles, hogueras y bandas de música. Aunque muchos lo celebran como patrimonio, la festividad ha sido controvertida debido a la historia sectaria de Irlanda del Norte y los Troubles.",
          de: "Der Orangemen's Day (der Zwölfte) wird am 12. Juli von protestantischen Unionisten in Nordirland und anderen Ländern gefeiert. Er erinnert an die Schlacht am Boyne 1690, bei der der protestantische König Wilhelm von Oranien den katholischen König Jakob II. besiegte. Der Tag umfasst Paraden, Lagerfeuer und Marschkapellen. Obwohl von vielen als Erbe gefeiert, war der Feiertag aufgrund der sektiererischen Geschichte Nordirlands und der Troubles umstritten.",
          nl: "Orangemen's Day (de Twaalfde) wordt gevierd op 12 juli door protestantse unionisten in Noord-Ierland en andere landen. Het herdenkt de Slag aan de Boyne in 1690, waar protestantse koning Willem van Oranje de katholieke koning Jacobus II versloeg. De dag kenmerkt zich door parades, vreugdevuren en marcherende bands. Hoewel door velen gevierd als erfgoed, is de feestdag controversieel geweest vanwege de sektarische geschiedenis van Noord-Ierland en de Troubles."
        }
      },
      {
        question: {
          en: "Which famous Roman leader was traditionally said to be born on July 12, 100 BC?",
          es: "¿Qué famoso líder romano se dice tradicionalmente que nació el 12 de julio del 100 a.C.?",
          de: "Welcher berühmte römische Führer soll traditionell am 12. Juli 100 v. Chr. geboren worden sein?",
          nl: "Welke beroemde Romeinse leider zou traditioneel geboren zijn op 12 juli 100 v.Chr.?"
        },
        options: [
          { en: "Augustus Caesar", es: "Augusto César", de: "Augustus Caesar", nl: "Augustus Caesar" },
          { en: "Julius Caesar", es: "Julio César", de: "Julius Caesar", nl: "Julius Caesar" },
          { en: "Marcus Aurelius", es: "Marco Aurelio", de: "Marcus Aurelius", nl: "Marcus Aurelius" },
          { en: "Constantine", es: "Constantino", de: "Konstantin", nl: "Constantijn" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Julius Caesar was traditionally believed to be born on July 12, 100 BC (though the exact date is debated). He was a military genius, statesman, and dictator who transformed the Roman Republic into the Roman Empire. Caesar conquered Gaul (modern France), crossed the Rubicon River to seize power, and reformed the calendar. His assassination on the Ides of March (March 15, 44 BC) was immortalized by Shakespeare. The month of July is named after him.",
          es: "Tradicionalmente se creía que Julio César nació el 12 de julio del 100 a.C. (aunque la fecha exacta es debatida). Fue un genio militar, estadista y dictador que transformó la República Romana en el Imperio Romano. César conquistó la Galia (Francia moderna), cruzó el río Rubicón para tomar el poder y reformó el calendario. Su asesinato en los Idus de Marzo (15 de marzo del 44 a.C.) fue inmortalizado por Shakespeare. El mes de julio lleva su nombre.",
          de: "Julius Caesar wurde traditionell am 12. Juli 100 v. Chr. geboren (obwohl das genaue Datum umstritten ist). Er war ein militärisches Genie, Staatsmann und Diktator, der die Römische Republik in das Römische Reich verwandelte. Caesar eroberte Gallien (das heutige Frankreich), überquerte den Rubikon, um die Macht zu ergreifen, und reformierte den Kalender. Seine Ermordung an den Iden des März (15. März 44 v. Chr.) wurde von Shakespeare verewigt. Der Monat Juli ist nach ihm benannt.",
          nl: "Julius Caesar zou traditioneel geboren zijn op 12 juli 100 v.Chr. (hoewel de exacte datum wordt bediscussieerd). Hij was een militair genie, staatsman en dictator die de Romeinse Republiek transformeerde tot het Romeinse Rijk. Caesar veroverde Gallië (het huidige Frankrijk), stak de Rubicon over om de macht te grijpen, en hervormde de kalender. Zijn moord op de Iden van Maart (15 maart 44 v.Chr.) werd vereeuwigd door Shakespeare. De maand juli is naar hem vernoemd."
        }
      }
    ],

    // Day 13 - July 13th: Live Aid, Hollywood sign, Northwest Ordinance, New York draft riots, Harrison Ford
    day13: [
      {
        question: {
          en: "Which historic benefit concerts took place simultaneously on July 13, 1985?",
          es: "¿Qué conciertos benéficos históricos tuvieron lugar simultáneamente el 13 de julio de 1985?",
          de: "Welche historischen Benefizkonzerte fanden am 13. Juli 1985 gleichzeitig statt?",
          nl: "Welke historische benefietconcerten vonden gelijktijdig plaats op 13 juli 1985?"
        },
        options: [
          { en: "Woodstock", es: "Woodstock", de: "Woodstock", nl: "Woodstock" },
          { en: "Live Aid", es: "Live Aid", de: "Live Aid", nl: "Live Aid" },
          { en: "Band Aid", es: "Band Aid", de: "Band Aid", nl: "Band Aid" },
          { en: "Farm Aid", es: "Farm Aid", de: "Farm Aid", nl: "Farm Aid" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Live Aid concerts took place on July 13, 1985, simultaneously at Wembley Stadium in London and JFK Stadium in Philadelphia. The dual-venue event featured legendary performances by Queen, U2, David Bowie, and many others. Organized by Bob Geldof and Midge Ure, the concerts raised over $125 million for Ethiopian famine relief. An estimated 1.9 billion people across 150 nations watched the broadcasts, making it one of the largest-scale satellite link-ups and TV broadcasts of all time.",
          es: "Los conciertos Live Aid tuvieron lugar el 13 de julio de 1985, simultáneamente en el Estadio de Wembley en Londres y el Estadio JFK en Filadelfia. El evento de doble sede presentó actuaciones legendarias de Queen, U2, David Bowie y muchos otros. Organizado por Bob Geldof y Midge Ure, los conciertos recaudaron más de 125 millones de dólares para el alivio de la hambruna etíope. Se estima que 1.9 mil millones de personas en 150 naciones vieron las transmisiones, convirtiéndolo en uno de los enlaces satelitales y transmisiones de TV de mayor escala de todos los tiempos.",
          de: "Die Live Aid-Konzerte fanden am 13. Juli 1985 gleichzeitig im Wembley-Stadion in London und im JFK-Stadion in Philadelphia statt. Das Event an zwei Veranstaltungsorten zeigte legendäre Auftritte von Queen, U2, David Bowie und vielen anderen. Organisiert von Bob Geldof und Midge Ure, sammelten die Konzerte über 125 Millionen Dollar für die Hungersnothilfe in Äthiopien. Schätzungsweise 1,9 Milliarden Menschen in 150 Ländern sahen die Übertragungen, was es zu einer der größten Satellitenverbindungen und TV-Übertragungen aller Zeiten machte.",
          nl: "De Live Aid-concerten vonden plaats op 13 juli 1985, gelijktijdig in Wembley Stadium in Londen en JFK Stadium in Philadelphia. Het tweeledige evenement kenmerkte legendarische optredens van Queen, U2, David Bowie en vele anderen. Georganiseerd door Bob Geldof en Midge Ure, brachten de concerten meer dan $125 miljoen op voor de Ethiopische hongersnoodhulp. Naar schatting keken 1,9 miljard mensen in 150 landen naar de uitzendingen, waardoor het een van de grootschaligste satellietverbindingen en tv-uitzendingen aller tijden werd."
        }
      },
      {
        question: {
          en: "What famous Los Angeles landmark was erected on July 13, 1923?",
          es: "¿Qué famoso punto de referencia de Los Ángeles se erigió el 13 de julio de 1923?",
          de: "Welches berühmte Wahrzeichen von Los Angeles wurde am 13. Juli 1923 errichtet?",
          nl: "Welk beroemd Los Angeles-monument werd opgericht op 13 juli 1923?"
        },
        options: [
          { en: "Griffith Observatory", es: "Observatorio Griffith", de: "Griffith Observatory", nl: "Griffith Observatory" },
          { en: "Hollywood sign", es: "Letrero de Hollywood", de: "Hollywood-Schriftzug", nl: "Hollywood-bord" },
          { en: "Walk of Fame", es: "Paseo de la Fama", de: "Walk of Fame", nl: "Walk of Fame" },
          { en: "Chinese Theatre", es: "Teatro Chino", de: "Chinese Theatre", nl: "Chinese Theatre" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Hollywood sign was erected on July 13, 1923, originally reading 'HOLLYWOODLAND' as an advertisement for a housing development. Each letter stood 50 feet tall. In 1949, the sign was shortened to just 'HOLLYWOOD' and has become an iconic symbol of the entertainment industry and Los Angeles. The sign has been renovated several times and is now protected as a historic landmark.",
          es: "El letrero de Hollywood se erigió el 13 de julio de 1923, originalmente decía 'HOLLYWOODLAND' como un anuncio para un desarrollo inmobiliario. Cada letra medía 50 pies de altura. En 1949, el letrero se acortó a solo 'HOLLYWOOD' y se ha convertido en un símbolo icónico de la industria del entretenimiento y Los Ángeles. El letrero ha sido renovado varias veces y ahora está protegido como un monumento histórico.",
          de: "Der Hollywood-Schriftzug wurde am 13. Juli 1923 errichtet und las ursprünglich 'HOLLYWOODLAND' als Werbung für eine Wohnsiedlung. Jeder Buchstabe war 50 Fuß hoch. 1949 wurde das Schild auf nur 'HOLLYWOOD' verkürzt und ist zu einem ikonischen Symbol der Unterhaltungsindustrie und Los Angeles geworden. Das Schild wurde mehrmals renoviert und steht nun als historisches Wahrzeichen unter Schutz.",
          nl: "Het Hollywood-bord werd opgericht op 13 juli 1923, oorspronkelijk met 'HOLLYWOODLAND' als advertentie voor een woningontwikkeling. Elke letter was 50 voet hoog. In 1949 werd het bord ingekort tot alleen 'HOLLYWOOD' en is het een iconisch symbool geworden van de entertainmentindustrie en Los Angeles. Het bord is meerdere keren gerenoveerd en staat nu beschermd als historisch monument."
        }
      },
      {
        question: {
          en: "Which important American law establishing government in the Northwest Territory was passed on July 13, 1787?",
          es: "¿Qué importante ley estadounidense que estableció el gobierno en el Territorio del Noroeste se aprobó el 13 de julio de 1787?",
          de: "Welches wichtige amerikanische Gesetz zur Einrichtung der Regierung im Nordwest-Territorium wurde am 13. Juli 1787 verabschiedet?",
          nl: "Welke belangrijke Amerikaanse wet die de regering in het Northwest Territory vestigde, werd aangenomen op 13 juli 1787?"
        },
        options: [
          { en: "Bill of Rights", es: "Declaración de Derechos", de: "Bill of Rights", nl: "Bill of Rights" },
          { en: "Declaration of Independence", es: "Declaración de Independencia", de: "Unabhängigkeitserklärung", nl: "Onafhankelijkheidsverklaring" },
          { en: "Northwest Ordinance", es: "Ordenanza del Noroeste", de: "Nordwest-Verordnung", nl: "Northwest Ordinance" },
          { en: "Louisiana Purchase", es: "Compra de Luisiana", de: "Louisiana-Kauf", nl: "Louisiana Purchase" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Northwest Ordinance was passed on July 13, 1787, establishing government for the Northwest Territory and creating the process for admitting new states. It prohibited slavery in the territory and guaranteed civil liberties and education. The ordinance created a precedent for how the United States would expand westward. It's considered one of the most important legislative acts in American history, alongside the Declaration of Independence and the Constitution.",
          es: "La Ordenanza del Noroeste se aprobó el 13 de julio de 1787, estableciendo el gobierno para el Territorio del Noroeste y creando el proceso para admitir nuevos estados. Prohibió la esclavitud en el territorio y garantizó libertades civiles y educación. La ordenanza creó un precedente para cómo Estados Unidos se expandiría hacia el oeste. Se considera uno de los actos legislativos más importantes de la historia estadounidense, junto con la Declaración de Independencia y la Constitución.",
          de: "Die Nordwest-Verordnung wurde am 13. Juli 1787 verabschiedet und richtete die Regierung für das Nordwest-Territorium ein und schuf den Prozess zur Aufnahme neuer Staaten. Sie verbot die Sklaverei im Territorium und garantierte bürgerliche Freiheiten und Bildung. Die Verordnung schuf einen Präzedenzfall dafür, wie die Vereinigten Staaten sich nach Westen ausdehnen würden. Sie gilt als einer der wichtigsten legislativen Akte in der amerikanischen Geschichte, neben der Unabhängigkeitserklärung und der Verfassung.",
          nl: "De Northwest Ordinance werd aangenomen op 13 juli 1787, waarbij het bestuur voor het Northwest Territory werd gevestigd en het proces voor het toelaten van nieuwe staten werd gecreëerd. Het verbood slavernij in het gebied en garandeerde burgerlijke vrijheden en onderwijs. De verordening creëerde een precedent voor hoe de Verenigde Staten naar het westen zouden uitbreiden. Het wordt beschouwd als een van de belangrijkste wetgevende daden in de Amerikaanse geschiedenis, naast de Onafhankelijkheidsverklaring en de Grondwet."
        }
      },
      {
        question: {
          en: "Which violent protests against the Civil War draft began in New York City on July 13, 1863?",
          es: "¿Qué protestas violentas contra el reclutamiento de la Guerra Civil comenzaron en la ciudad de Nueva York el 13 de julio de 1863?",
          de: "Welche gewalttätigen Proteste gegen die Einberufung im Bürgerkrieg begannen am 13. Juli 1863 in New York City?",
          nl: "Welke gewelddadige protesten tegen de dienstplicht tijdens de Burgeroorlog begonnen in New York City op 13 juli 1863?"
        },
        options: [
          { en: "Boston Tea Party", es: "Motín del Té de Boston", de: "Boston Tea Party", nl: "Boston Tea Party" },
          { en: "Haymarket Riot", es: "Motín de Haymarket", de: "Haymarket-Aufstand", nl: "Haymarket-rellen" },
          { en: "New York draft riots", es: "Disturbios del reclutamiento de Nueva York", de: "New Yorker Einberufungsaufstände", nl: "New York dienstplichtrellen" },
          { en: "Whiskey Rebellion", es: "Rebelión del Whisky", de: "Whiskey-Rebellion", nl: "Whiskey Rebellie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The New York Draft Riots began on July 13, 1863, in response to the Union's conscription laws during the Civil War. The riots lasted four days and became the largest civil insurrection in American history outside the Civil War itself. Over 100 people were killed, and the violence particularly targeted African Americans and abolitionists. The riots reflected class tensions, as wealthy men could pay $300 to avoid the draft while poor men could not.",
          es: "Los Disturbios del Reclutamiento de Nueva York comenzaron el 13 de julio de 1863 en respuesta a las leyes de conscripción de la Unión durante la Guerra Civil. Los disturbios duraron cuatro días y se convirtieron en la insurrección civil más grande en la historia estadounidense fuera de la Guerra Civil misma. Más de 100 personas murieron, y la violencia se dirigió particularmente contra afroamericanos y abolicionistas. Los disturbios reflejaron tensiones de clase, ya que los hombres ricos podían pagar $300 para evitar el reclutamiento mientras que los pobres no podían.",
          de: "Die New Yorker Einberufungsaufstände begannen am 13. Juli 1863 als Reaktion auf die Einberufungsgesetze der Union während des Bürgerkriegs. Die Aufstände dauerten vier Tage und wurden zur größten zivilen Insurrektion in der amerikanischen Geschichte außerhalb des Bürgerkriegs selbst. Über 100 Menschen wurden getötet, und die Gewalt richtete sich besonders gegen Afroamerikaner und Abolitionisten. Die Aufstände spiegelten Klassenspannungen wider, da wohlhabende Männer 300 Dollar zahlen konnten, um der Einberufung zu entgehen, während arme Männer dies nicht konnten.",
          nl: "De New York dienstplichtrellen begonnen op 13 juli 1863 als reactie op de dienstplichtwetten van de Unie tijdens de Burgeroorlog. De rellen duurden vier dagen en werden de grootste burgerlijke opstand in de Amerikaanse geschiedenis buiten de Burgeroorlog zelf. Meer dan 100 mensen werden gedood, en het geweld richtte zich vooral tegen Afro-Amerikanen en abolitionisten. De rellen weerspiegelden klassenspanningen, aangezien rijke mannen $300 konden betalen om de dienstplicht te ontlopen terwijl arme mannen dat niet konden."
        }
      },
      {
        question: {
          en: "Which actor, famous for playing Han Solo and Indiana Jones, was born on July 13, 1942?",
          es: "¿Qué actor, famoso por interpretar a Han Solo e Indiana Jones, nació el 13 de julio de 1942?",
          de: "Welcher Schauspieler, berühmt für die Rollen als Han Solo und Indiana Jones, wurde am 13. Juli 1942 geboren?",
          nl: "Welke acteur, beroemd voor het spelen van Han Solo en Indiana Jones, werd geboren op 13 juli 1942?"
        },
        options: [
          { en: "Mark Hamill", es: "Mark Hamill", de: "Mark Hamill", nl: "Mark Hamill" },
          { en: "Sean Connery", es: "Sean Connery", de: "Sean Connery", nl: "Sean Connery" },
          { en: "Harrison Ford", es: "Harrison Ford", de: "Harrison Ford", nl: "Harrison Ford" },
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Harrison Ford was born on July 13, 1942. He's one of Hollywood's most successful actors, known for iconic roles as Han Solo in Star Wars and Indiana Jones. Ford has starred in some of the highest-grossing films of all time, including Blade Runner and The Fugitive. Before his acting breakthrough, he worked as a carpenter. Ford has been nominated for one Academy Award and received the AFI Life Achievement Award.",
          es: "Harrison Ford nació el 13 de julio de 1942. Es uno de los actores más exitosos de Hollywood, conocido por papeles icónicos como Han Solo en Star Wars e Indiana Jones. Ford ha protagonizado algunas de las películas más taquilleras de todos los tiempos, incluidas Blade Runner y El Fugitivo. Antes de su gran avance actoral, trabajó como carpintero. Ford ha sido nominado a un Premio de la Academia y recibió el Premio AFI a la Trayectoria.",
          de: "Harrison Ford wurde am 13. Juli 1942 geboren. Er ist einer der erfolgreichsten Schauspieler Hollywoods, bekannt für ikonische Rollen als Han Solo in Star Wars und Indiana Jones. Ford spielte in einigen der erfolgreichsten Filme aller Zeiten mit, darunter Blade Runner und Auf der Flucht. Vor seinem schauspielerischen Durchbruch arbeitete er als Zimmermann. Ford wurde einmal für einen Oscar nominiert und erhielt den AFI Life Achievement Award.",
          nl: "Harrison Ford werd geboren op 13 juli 1942. Hij is een van Hollywood's meest succesvolle acteurs, bekend om iconische rollen als Han Solo in Star Wars en Indiana Jones. Ford heeft in enkele van de best verdienende films aller tijden gespeeld, waaronder Blade Runner en The Fugitive. Voor zijn doorbraak in de acteerwereld werkte hij als timmerman. Ford is genomineerd geweest voor één Academy Award en ontving de AFI Life Achievement Award."
        }
      }
    ],

    // Day 14 - July 14th: Bastille Day, Gerald Ford, Woody Guthrie, Emmeline Pankhurst, Bastille storming
    day14: [
      {
        question: {
          en: "Which famous French national holiday is celebrated on July 14th?",
          es: "¿Qué famoso feriado nacional francés se celebra el 14 de julio?",
          de: "Welcher berühmte französische Nationalfeiertag wird am 14. Juli gefeiert?",
          nl: "Welke beroemde Franse nationale feestdag wordt gevierd op 14 juli?"
        },
        options: [
          { en: "Victory Day", es: "Día de la Victoria", de: "Tag des Sieges", nl: "Overwinningsdag" },
          { en: "Bastille Day", es: "Día de la Bastilla", de: "Nationalfeiertag", nl: "Bastille Dag" },
          { en: "Liberation Day", es: "Día de la Liberación", de: "Befreiungstag", nl: "Bevrijdingsdag" },
          { en: "Republic Day", es: "Día de la República", de: "Tag der Republik", nl: "Dag van de Republiek" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bastille Day is celebrated on July 14th, commemorating the storming of the Bastille prison in 1789, which marked the beginning of the French Revolution. The holiday represents the overthrow of monarchy and the birth of the modern French Republic. Celebrations include military parades on the Champs-Élysées, fireworks, parties, and concerts. It's France's national day and a symbol of liberty, equality, and fraternity.",
          es: "El Día de la Bastilla se celebra el 14 de julio, conmemorando la toma de la prisión de la Bastilla en 1789, que marcó el comienzo de la Revolución Francesa. La festividad representa el derrocamiento de la monarquía y el nacimiento de la República Francesa moderna. Las celebraciones incluyen desfiles militares en los Campos Elíseos, fuegos artificiales, fiestas y conciertos. Es el día nacional de Francia y un símbolo de libertad, igualdad y fraternidad.",
          de: "Der französische Nationalfeiertag wird am 14. Juli gefeiert und erinnert an den Sturm auf die Bastille im Jahr 1789, der den Beginn der Französischen Revolution markierte. Der Feiertag repräsentiert den Sturz der Monarchie und die Geburt der modernen Französischen Republik. Feierlichkeiten umfassen Militärparaden auf den Champs-Élysées, Feuerwerke, Partys und Konzerte. Es ist Frankreichs Nationalfeiertag und ein Symbol für Freiheit, Gleichheit und Brüderlichkeit.",
          nl: "Bastille Dag wordt gevierd op 14 juli, ter herdenking van de bestorming van de Bastille-gevangenis in 1789, die het begin markeerde van de Franse Revolutie. De feestdag vertegenwoordigt de omverwerping van de monarchie en de geboorte van de moderne Franse Republiek. Vieringen omvatten militaire parades op de Champs-Élysées, vuurwerk, feesten en concerten. Het is de nationale feestdag van Frankrijk en een symbool van vrijheid, gelijkheid en broederschap."
        }
      },
      {
        question: {
          en: "Which US President, who later pardoned Richard Nixon, was born on July 14, 1913?",
          es: "¿Qué presidente de EE.UU., que más tarde indultó a Richard Nixon, nació el 14 de julio de 1913?",
          de: "Welcher US-Präsident, der später Richard Nixon begnadigte, wurde am 14. Juli 1913 geboren?",
          nl: "Welke Amerikaanse president, die later Richard Nixon gratie verleende, werd geboren op 14 juli 1913?"
        },
        options: [
          { en: "Jimmy Carter", es: "Jimmy Carter", de: "Jimmy Carter", nl: "Jimmy Carter" },
          { en: "Gerald Ford", es: "Gerald Ford", de: "Gerald Ford", nl: "Gerald Ford" },
          { en: "Ronald Reagan", es: "Ronald Reagan", de: "Ronald Reagan", nl: "Ronald Reagan" },
          { en: "George H.W. Bush", es: "George H.W. Bush", de: "George H.W. Bush", nl: "George H.W. Bush" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Gerald Ford was born on July 14, 1913, and became the 38th President of the United States. He's the only person to serve as both Vice President and President without being elected to either office. Ford became VP when Spiro Agnew resigned, then President when Nixon resigned over Watergate in 1974. His controversial pardon of Nixon aimed to help the nation heal. Ford is remembered for his integrity and efforts to restore trust in government.",
          es: "Gerald Ford nació el 14 de julio de 1913 y se convirtió en el 38º presidente de los Estados Unidos. Es la única persona en servir como vicepresidente y presidente sin haber sido elegido para ninguno de los cargos. Ford se convirtió en vicepresidente cuando Spiro Agnew renunció, luego presidente cuando Nixon renunció por Watergate en 1974. Su controvertido indulto a Nixon buscaba ayudar a la nación a sanar. Ford es recordado por su integridad y esfuerzos por restaurar la confianza en el gobierno.",
          de: "Gerald Ford wurde am 14. Juli 1913 geboren und wurde der 38. Präsident der Vereinigten Staaten. Er ist die einzige Person, die sowohl als Vizepräsident als auch als Präsident diente, ohne für eines der Ämter gewählt worden zu sein. Ford wurde VP, als Spiro Agnew zurücktrat, dann Präsident, als Nixon 1974 wegen Watergate zurücktrat. Seine umstrittene Begnadigung von Nixon sollte der Nation helfen zu heilen. Ford wird für seine Integrität und Bemühungen erinnert, das Vertrauen in die Regierung wiederherzustellen.",
          nl: "Gerald Ford werd geboren op 14 juli 1913 en werd de 38e president van de Verenigde Staten. Hij is de enige persoon die zowel als vicepresident als president diende zonder voor een van beide functies gekozen te zijn. Ford werd VP toen Spiro Agnew aftrad, vervolgens president toen Nixon in 1974 aftrad vanwege Watergate. Zijn controversiële gratie voor Nixon was bedoeld om de natie te helpen genezen. Ford wordt herinnerd om zijn integriteit en inspanningen om het vertrouwen in de overheid te herstellen."
        }
      },
      {
        question: {
          en: "Which American folk singer, famous for 'This Land Is Your Land,' was born on July 14, 1912?",
          es: "¿Qué cantante folk estadounidense, famoso por 'This Land Is Your Land', nació el 14 de julio de 1912?",
          de: "Welcher amerikanische Folksänger, berühmt für 'This Land Is Your Land', wurde am 14. Juli 1912 geboren?",
          nl: "Welke Amerikaanse folksinger, beroemd om 'This Land Is Your Land', werd geboren op 14 juli 1912?"
        },
        options: [
          { en: "Bob Dylan", es: "Bob Dylan", de: "Bob Dylan", nl: "Bob Dylan" },
          { en: "Pete Seeger", es: "Pete Seeger", de: "Pete Seeger", nl: "Pete Seeger" },
          { en: "Woody Guthrie", es: "Woody Guthrie", de: "Woody Guthrie", nl: "Woody Guthrie" },
          { en: "Johnny Cash", es: "Johnny Cash", de: "Johnny Cash", nl: "Johnny Cash" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Woody Guthrie was born on July 14, 1912, and became one of America's most significant folk musicians. His song 'This Land Is Your Land' became an alternative national anthem. Guthrie wrote over 1,000 songs about the experiences of working-class Americans during the Great Depression and Dust Bowl era. His guitar famously displayed the message 'This Machine Kills Fascists.' Guthrie influenced countless musicians including Bob Dylan and Bruce Springsteen.",
          es: "Woody Guthrie nació el 14 de julio de 1912 y se convirtió en uno de los músicos folk más significativos de Estados Unidos. Su canción 'This Land Is Your Land' se convirtió en un himno nacional alternativo. Guthrie escribió más de 1,000 canciones sobre las experiencias de los estadounidenses de clase trabajadora durante la Gran Depresión y la era del Dust Bowl. Su guitarra mostraba famosamente el mensaje 'Esta máquina mata fascistas'. Guthrie influyó en innumerables músicos, incluidos Bob Dylan y Bruce Springsteen.",
          de: "Woody Guthrie wurde am 14. Juli 1912 geboren und wurde einer der bedeutendsten Folkmusiker Amerikas. Sein Lied 'This Land Is Your Land' wurde eine alternative Nationalhymne. Guthrie schrieb über 1.000 Songs über die Erfahrungen von Arbeitern während der Großen Depression und der Dust Bowl-Ära. Seine Gitarre zeigte berühmt die Botschaft 'Diese Maschine tötet Faschisten'. Guthrie beeinflusste unzählige Musiker, darunter Bob Dylan und Bruce Springsteen.",
          nl: "Woody Guthrie werd geboren op 14 juli 1912 en werd een van Amerika's meest significante folkmuzikanten. Zijn nummer 'This Land Is Your Land' werd een alternatief nationaal volkslied. Guthrie schreef meer dan 1.000 liedjes over de ervaringen van arbeiders tijdens de Grote Depressie en het Dust Bowl-tijdperk. Zijn gitaar toonde beroemd de boodschap 'Deze machine doodt fascisten'. Guthrie beïnvloedde talloze muzikanten waaronder Bob Dylan en Bruce Springsteen."
        }
      },
      {
        question: {
          en: "Which pioneering British suffragette was born on July 14, 1858?",
          es: "¿Qué pionera sufragista británica nació el 14 de julio de 1858?",
          de: "Welche bahnbrechende britische Suffragette wurde am 14. Juli 1858 geboren?",
          nl: "Welke baanbrekende Britse suffragette werd geboren op 14 juli 1858?"
        },
        options: [
          { en: "Susan B. Anthony", es: "Susan B. Anthony", de: "Susan B. Anthony", nl: "Susan B. Anthony" },
          { en: "Elizabeth Cady Stanton", es: "Elizabeth Cady Stanton", de: "Elizabeth Cady Stanton", nl: "Elizabeth Cady Stanton" },
          { en: "Emmeline Pankhurst", es: "Emmeline Pankhurst", de: "Emmeline Pankhurst", nl: "Emmeline Pankhurst" },
          { en: "Harriet Tubman", es: "Harriet Tubman", de: "Harriet Tubman", nl: "Harriet Tubman" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Emmeline Pankhurst was born on July 14, 1858, and became the leader of the British suffragette movement. She founded the Women's Social and Political Union (WSPU) in 1903, known for its militant tactics to win women's voting rights. Her motto was 'Deeds not words.' Pankhurst was arrested and imprisoned numerous times. Her activism was instrumental in securing voting rights for British women in 1918. Time magazine named her one of the 100 most important people of the 20th century.",
          es: "Emmeline Pankhurst nació el 14 de julio de 1858 y se convirtió en la líder del movimiento sufragista británico. Fundó la Unión Social y Política de Mujeres (WSPU) en 1903, conocida por sus tácticas militantes para ganar derechos de voto para las mujeres. Su lema era 'Hechos no palabras'. Pankhurst fue arrestada y encarcelada numerosas veces. Su activismo fue fundamental para asegurar derechos de voto para las mujeres británicas en 1918. La revista Time la nombró una de las 100 personas más importantes del siglo XX.",
          de: "Emmeline Pankhurst wurde am 14. Juli 1858 geboren und wurde die Anführerin der britischen Suffragetten-Bewegung. Sie gründete 1903 die Women's Social and Political Union (WSPU), bekannt für ihre militanten Taktiken, um das Frauenwahlrecht zu gewinnen. Ihr Motto war 'Taten nicht Worte'. Pankhurst wurde zahlreiche Male verhaftet und inhaftiert. Ihr Aktivismus war entscheidend für die Sicherung des Wahlrechts für britische Frauen im Jahr 1918. Das Time Magazine nannte sie eine der 100 wichtigsten Personen des 20. Jahrhunderts.",
          nl: "Emmeline Pankhurst werd geboren op 14 juli 1858 en werd de leider van de Britse suffragettebeweging. Ze richtte in 1903 de Women's Social and Political Union (WSPU) op, bekend om haar militante tactieken om stemrecht voor vrouwen te winnen. Haar motto was 'Daden niet woorden'. Pankhurst werd talloze keren gearresteerd en gevangengezet. Haar activisme was cruciaal voor het veiligstellen van stemrecht voor Britse vrouwen in 1918. Time magazine noemde haar een van de 100 belangrijkste mensen van de 20e eeuw."
        }
      },
      {
        question: {
          en: "In which year was the Bastille prison stormed, marking the start of the French Revolution?",
          es: "¿En qué año se asaltó la prisión de la Bastilla, marcando el inicio de la Revolución Francesa?",
          de: "In welchem Jahr wurde die Bastille gestürmt und markierte den Beginn der Französischen Revolution?",
          nl: "In welk jaar werd de Bastille-gevangenis bestormd, wat het begin markeerde van de Franse Revolutie?"
        },
        options: [
          { en: "1776", es: "1776", de: "1776", nl: "1776" },
          { en: "1789", es: "1789", de: "1789", nl: "1789" },
          { en: "1800", es: "1800", de: "1800", nl: "1800" },
          { en: "1815", es: "1815", de: "1815", nl: "1815" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Bastille was stormed on July 14, 1789, by angry Parisian citizens seeking weapons and gunpowder. The medieval fortress-prison represented royal authority and tyranny. Though only seven prisoners were found inside, the symbolic act triggered the French Revolution. The Bastille was subsequently demolished, and its stones were distributed as souvenirs. This event fundamentally changed France and inspired revolutionary movements worldwide, establishing principles of democracy and human rights.",
          es: "La Bastilla fue asaltada el 14 de julio de 1789 por ciudadanos parisinos enojados que buscaban armas y pólvora. La fortaleza-prisión medieval representaba la autoridad y tiranía real. Aunque solo se encontraron siete prisioneros adentro, el acto simbólico desencadenó la Revolución Francesa. La Bastilla fue posteriormente demolida y sus piedras se distribuyeron como recuerdos. Este evento cambió fundamentalmente Francia e inspiró movimientos revolucionarios en todo el mundo, estableciendo principios de democracia y derechos humanos.",
          de: "Die Bastille wurde am 14. Juli 1789 von wütenden Pariser Bürgern gestürmt, die nach Waffen und Schießpulver suchten. Die mittelalterliche Festung-Gefängnis repräsentierte königliche Autorität und Tyrannei. Obwohl nur sieben Gefangene darin gefunden wurden, löste die symbolische Tat die Französische Revolution aus. Die Bastille wurde anschließend abgerissen und ihre Steine als Souvenirs verteilt. Dieses Ereignis veränderte Frankreich grundlegend und inspirierte revolutionäre Bewegungen weltweit, wobei Prinzipien der Demokratie und Menschenrechte etabliert wurden.",
          nl: "De Bastille werd bestormd op 14 juli 1789 door boze Parijse burgers die op zoek waren naar wapens en buskruit. De middeleeuwse vesting-gevangenis vertegenwoordigde koninklijk gezag en tirannie. Hoewel er slechts zeven gevangenen werden aangetroffen, veroorzaakte de symbolische daad de Franse Revolutie. De Bastille werd vervolgens gesloopt en haar stenen werden verdeeld als souvenirs. Deze gebeurtenis veranderde Frankrijk fundamenteel en inspireerde revolutionaire bewegingen wereldwijd, waarbij principes van democratie en mensenrechten werden gevestigd."
        }
      }
    ],

    // Day 15 - July 15th: Rosetta Stone, Rembrandt, Twitter, Boeing 747, St. Swithin's Day
    day15: [
      {
        question: {
          en: "What ancient artifact was discovered in Egypt on July 15, 1799, that helped decode hieroglyphics?",
          es: "¿Qué artefacto antiguo fue descubierto en Egipto el 15 de julio de 1799 que ayudó a descifrar los jeroglíficos?",
          de: "Welches antike Artefakt wurde am 15. Juli 1799 in Ägypten entdeckt, das half, Hieroglyphen zu entschlüsseln?",
          nl: "Welk oud artefact werd op 15 juli 1799 in Egypte ontdekt dat hielp hiërogliefen te ontcijferen?"
        },
        options: [
          { en: "Book of the Dead", es: "Libro de los Muertos", de: "Totenbuch", nl: "Dodenboek" },
          { en: "Dead Sea Scrolls", es: "Rollos del Mar Muerto", de: "Schriftrollen vom Toten Meer", nl: "Dode Zeerollen" },
          { en: "Rosetta Stone", es: "Piedra de Rosetta", de: "Rosetta-Stein", nl: "Steen van Rosetta" },
          { en: "Tutankhamun's Mask", es: "Máscara de Tutankamón", de: "Tutanchamun-Maske", nl: "Masker van Toetanchamon" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Rosetta Stone was discovered by French soldiers during Napoleon's Egyptian campaign in 1799. This ancient stele contains the same text in three scripts: ancient Greek, Demotic, and hieroglyphics. By comparing the Greek text with the hieroglyphics, scholars like Jean-François Champollion were finally able to decode Egyptian hieroglyphics after centuries of mystery.",
          es: "La Piedra de Rosetta fue descubierta por soldados franceses durante la campaña egipcia de Napoleón en 1799. Esta antigua estela contiene el mismo texto en tres escrituras: griego antiguo, demótico y jeroglíficos. Al comparar el texto griego con los jeroglíficos, eruditos como Jean-François Champollion finalmente pudieron descifrar los jeroglíficos egipcios después de siglos de misterio.",
          de: "Der Rosetta-Stein wurde 1799 von französischen Soldaten während Napoleons ägyptischem Feldzug entdeckt. Diese antike Stele enthält denselben Text in drei Schriften: Altgriechisch, Demotisch und Hieroglyphen. Durch den Vergleich des griechischen Textes mit den Hieroglyphen konnten Gelehrte wie Jean-François Champollion schließlich die ägyptischen Hieroglyphen nach Jahrhunderten des Rätsels entschlüsseln.",
          nl: "De Steen van Rosetta werd in 1799 ontdekt door Franse soldaten tijdens Napoleons Egyptische veldtocht. Deze oude stèle bevat dezelfde tekst in drie schriften: Oudgrieks, Demotisch en hiërogliefen. Door de Griekse tekst te vergelijken met de hiërogliefen, konden geleerden zoals Jean-François Champollion eindelijk de Egyptische hiërogliefen ontcijferen na eeuwen van mysterie."
        }
      },
      {
        question: {
          en: "Which famous Dutch Golden Age painter was born on July 15, 1606?",
          es: "¿Qué famoso pintor holandés del Siglo de Oro nació el 15 de julio de 1606?",
          de: "Welcher berühmte niederländische Maler des Goldenen Zeitalters wurde am 15. Juli 1606 geboren?",
          nl: "Welke beroemde Nederlandse Gouden Eeuw schilder werd geboren op 15 juli 1606?"
        },
        options: [
          { en: "Johannes Vermeer", es: "Johannes Vermeer", de: "Johannes Vermeer", nl: "Johannes Vermeer" },
          { en: "Rembrandt van Rijn", es: "Rembrandt van Rijn", de: "Rembrandt van Rijn", nl: "Rembrandt van Rijn" },
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Frans Hals", es: "Frans Hals", de: "Frans Hals", nl: "Frans Hals" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Rembrandt van Rijn was born on July 15, 1606, in Leiden, Netherlands. He is considered one of the greatest painters in European art history, renowned for his masterful use of light and shadow. His famous works include 'The Night Watch' and numerous self-portraits. Rembrandt's innovative techniques in painting and etching had a profound influence on art for centuries.",
          es: "Rembrandt van Rijn nació el 15 de julio de 1606 en Leiden, Países Bajos. Se le considera uno de los más grandes pintores de la historia del arte europeo, reconocido por su magistral uso de la luz y la sombra. Sus obras famosas incluyen 'La ronda de noche' y numerosos autorretratos. Las técnicas innovadoras de Rembrandt en pintura y grabado tuvieron una profunda influencia en el arte durante siglos.",
          de: "Rembrandt van Rijn wurde am 15. Juli 1606 in Leiden, Niederlande, geboren. Er gilt als einer der größten Maler der europäischen Kunstgeschichte, bekannt für seinen meisterhaften Einsatz von Licht und Schatten. Zu seinen berühmten Werken gehören 'Die Nachtwache' und zahlreiche Selbstporträts. Rembrandts innovative Techniken in Malerei und Radierung hatten jahrhundertelang einen tiefgreifenden Einfluss auf die Kunst.",
          nl: "Rembrandt van Rijn werd geboren op 15 juli 1606 in Leiden, Nederland. Hij wordt beschouwd als een van de grootste schilders in de Europese kunstgeschiedenis, beroemd om zijn meesterlijk gebruik van licht en schaduw. Zijn beroemde werken omvatten 'De Nachtwacht' en talrijke zelfportretten. Rembrandts vernieuwende technieken in schilderen en etsen hadden eeuwenlang een diepgaande invloed op de kunst."
        }
      },
      {
        question: {
          en: "Which social media platform was founded on July 15, 2006?",
          es: "¿Qué plataforma de redes sociales fue fundada el 15 de julio de 2006?",
          de: "Welche Social-Media-Plattform wurde am 15. Juli 2006 gegründet?",
          nl: "Welk social mediaplatform werd opgericht op 15 juli 2006?"
        },
        options: [
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Instagram", es: "Instagram", de: "Instagram", nl: "Instagram" },
          { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" },
          { en: "LinkedIn", es: "LinkedIn", de: "LinkedIn", nl: "LinkedIn" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Twitter (now known as X) was officially launched on July 15, 2006, by Jack Dorsey, Noah Glass, Biz Stone, and Evan Williams. The platform revolutionized communication with its 140-character limit (later expanded to 280), making it a powerful tool for real-time news, political discourse, and social connection. It became particularly influential during major events and social movements worldwide.",
          es: "Twitter (ahora conocido como X) fue lanzado oficialmente el 15 de julio de 2006 por Jack Dorsey, Noah Glass, Biz Stone y Evan Williams. La plataforma revolucionó la comunicación con su límite de 140 caracteres (más tarde ampliado a 280), convirtiéndola en una herramienta poderosa para noticias en tiempo real, discurso político y conexión social. Se volvió particularmente influyente durante eventos importantes y movimientos sociales en todo el mundo.",
          de: "Twitter (jetzt bekannt als X) wurde am 15. Juli 2006 offiziell von Jack Dorsey, Noah Glass, Biz Stone und Evan Williams gestartet. Die Plattform revolutionierte die Kommunikation mit ihrer 140-Zeichen-Grenze (später auf 280 erweitert) und machte sie zu einem leistungsstarken Werkzeug für Echtzeit-Nachrichten, politischen Diskurs und soziale Verbindung. Sie wurde besonders einflussreich während wichtiger Ereignisse und sozialer Bewegungen weltweit.",
          nl: "Twitter (nu bekend als X) werd officieel gelanceerd op 15 juli 2006 door Jack Dorsey, Noah Glass, Biz Stone en Evan Williams. Het platform revolutioneerde communicatie met zijn 140-tekenlimiet (later uitgebreid naar 280), waardoor het een krachtig hulpmiddel werd voor realtime nieuws, politiek discours en sociale verbinding. Het werd bijzonder invloedrijk tijdens grote gebeurtenissen en sociale bewegingen wereldwijd."
        }
      },
      {
        question: {
          en: "What iconic jumbo jet made its first flight on July 15, 1954?",
          es: "¿Qué icónico avión jumbo hizo su primer vuelo el 15 de julio de 1954?",
          de: "Welcher ikonische Jumbojet hatte am 15. Juli 1954 seinen Erstflug?",
          nl: "Welk iconisch jumbojet maakte zijn eerste vlucht op 15 juli 1954?"
        },
        options: [
          { en: "Concorde", es: "Concorde", de: "Concorde", nl: "Concorde" },
          { en: "Airbus A380", es: "Airbus A380", de: "Airbus A380", nl: "Airbus A380" },
          { en: "Boeing 747", es: "Boeing 747", de: "Boeing 747", nl: "Boeing 747" },
          { en: "Douglas DC-8", es: "Douglas DC-8", de: "Douglas DC-8", nl: "Douglas DC-8" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Boeing 747, known as the 'Queen of the Skies,' made its first flight on July 15, 1954. This revolutionary wide-body aircraft transformed international air travel by making it more accessible and affordable. With its distinctive hump and four engines, the 747 could carry up to 400 passengers and became a symbol of the jet age. It remained the largest passenger airliner for 37 years.",
          es: "El Boeing 747, conocido como la 'Reina de los Cielos', hizo su primer vuelo el 15 de julio de 1954. Este revolucionario avión de fuselaje ancho transformó los viajes aéreos internacionales al hacerlos más accesibles y asequibles. Con su distintiva joroba y cuatro motores, el 747 podía transportar hasta 400 pasajeros y se convirtió en un símbolo de la era del jet. Siguió siendo el avión de pasajeros más grande durante 37 años.",
          de: "Die Boeing 747, bekannt als 'Königin der Lüfte', hatte am 15. Juli 1954 ihren Erstflug. Dieses revolutionäre Großraumflugzeug veränderte den internationalen Luftverkehr, indem es ihn zugänglicher und erschwinglicher machte. Mit seinem charakteristischen Buckel und vier Triebwerken konnte die 747 bis zu 400 Passagiere befördern und wurde zum Symbol des Jet-Zeitalters. Sie blieb 37 Jahre lang das größte Passagierflugzeug.",
          nl: "De Boeing 747, bekend als de 'Queen of the Skies', maakte zijn eerste vlucht op 15 juli 1954. Dit revolutionaire widebody vliegtuig transformeerde internationaal luchtvervoer door het toegankelijker en betaalbaarder te maken. Met zijn karakteristieke bult en vier motoren kon de 747 tot 400 passagiers vervoeren en werd een symbool van het straalvliegtuigtijdperk. Het bleef 37 jaar het grootste passagiersvliegtuig."
        }
      },
      {
        question: {
          en: "July 15th is known as St. Swithin's Day. According to legend, what weather phenomenon is predicted for 40 days based on this day?",
          es: "El 15 de julio es conocido como el Día de San Swithin. Según la leyenda, ¿qué fenómeno meteorológico se predice durante 40 días basándose en este día?",
          de: "Der 15. Juli ist als St. Swithins Tag bekannt. Der Legende nach, welches Wetterphänomen wird für 40 Tage basierend auf diesem Tag vorhergesagt?",
          nl: "15 juli staat bekend als Sint-Swithindag. Volgens de legende, welk weerfenomeen wordt voorspeld voor 40 dagen op basis van deze dag?"
        },
        options: [
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
          { en: "Heat wave", es: "Ola de calor", de: "Hitzewelle", nl: "Hittegolf" },
          { en: "Fog", es: "Niebla", de: "Nebel", nl: "Mist" }
        ],
        correctIndex: 1,
        explanation: {
          en: "St. Swithin's Day commemorates a 9th-century Bishop of Winchester. According to British folklore, if it rains on July 15th, it will rain for the next 40 days. The legend originated from the story that when St. Swithin's remains were moved to Winchester Cathedral against his wishes, it rained for 40 days. While scientifically unfounded, this tradition has been part of British culture for centuries.",
          es: "El Día de San Swithin conmemora a un obispo de Winchester del siglo IX. Según el folclore británico, si llueve el 15 de julio, lloverá durante los próximos 40 días. La leyenda se originó de la historia de que cuando los restos de San Swithin fueron trasladados a la Catedral de Winchester en contra de sus deseos, llovió durante 40 días. Aunque científicamente infundada, esta tradición ha sido parte de la cultura británica durante siglos.",
          de: "Der St. Swithins Tag erinnert an einen Bischof von Winchester aus dem 9. Jahrhundert. Der britischen Folklore zufolge wird es die nächsten 40 Tage regnen, wenn es am 15. Juli regnet. Die Legende entstand aus der Geschichte, dass es 40 Tage lang regnete, als St. Swithins Überreste gegen seinen Willen in die Kathedrale von Winchester überführt wurden. Obwohl wissenschaftlich unbegründet, ist diese Tradition seit Jahrhunderten Teil der britischen Kultur.",
          nl: "Sint-Swithindag herdenkt een 9e-eeuwse bisschop van Winchester. Volgens Britse folklore zal het de volgende 40 dagen regenen als het op 15 juli regent. De legende ontstond uit het verhaal dat toen Sint-Swithins stoffelijke resten tegen zijn wensen in naar de kathedraal van Winchester werden overgebracht, het 40 dagen regende. Hoewel wetenschappelijk ongegrond, is deze traditie al eeuwenlang onderdeel van de Britse cultuur."
        }
      }
    ],

    // Day 16 - July 16th: Apollo 11 Launch, Trinity Test, J.D. Salinger, District of Columbia, Boeing 707 Crash
    day16: [
      {
        question: {
          en: "On July 16, 1969, which historic mission launched from Kennedy Space Center to take humans to the Moon?",
          es: "El 16 de julio de 1969, ¿qué misión histórica se lanzó desde el Centro Espacial Kennedy para llevar humanos a la Luna?",
          de: "Welche historische Mission startete am 16. Juli 1969 vom Kennedy Space Center, um Menschen zum Mond zu bringen?",
          nl: "Welke historische missie werd op 16 juli 1969 gelanceerd vanaf Kennedy Space Center om mensen naar de Maan te brengen?"
        },
        options: [
          { en: "Apollo 13", es: "Apolo 13", de: "Apollo 13", nl: "Apollo 13" },
          { en: "Apollo 11", es: "Apolo 11", de: "Apollo 11", nl: "Apollo 11" },
          { en: "Gemini 7", es: "Géminis 7", de: "Gemini 7", nl: "Gemini 7" },
          { en: "Mercury 6", es: "Mercury 6", de: "Mercury 6", nl: "Mercury 6" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Apollo 11 launched on July 16, 1969, carrying astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins. Four days later, on July 20, Armstrong and Aldrin became the first humans to walk on the Moon while Collins orbited above. This achievement fulfilled President Kennedy's goal and represented one of humanity's greatest technological accomplishments during the Space Race.",
          es: "El Apolo 11 se lanzó el 16 de julio de 1969, llevando a los astronautas Neil Armstrong, Buzz Aldrin y Michael Collins. Cuatro días después, el 20 de julio, Armstrong y Aldrin se convirtieron en los primeros humanos en caminar sobre la Luna mientras Collins orbitaba arriba. Este logro cumplió el objetivo del presidente Kennedy y representó uno de los mayores logros tecnológicos de la humanidad durante la Carrera Espacial.",
          de: "Apollo 11 startete am 16. Juli 1969 mit den Astronauten Neil Armstrong, Buzz Aldrin und Michael Collins. Vier Tage später, am 20. Juli, wurden Armstrong und Aldrin die ersten Menschen, die auf dem Mond gingen, während Collins darüber kreiste. Diese Leistung erfüllte Präsident Kennedys Ziel und stellte eine der größten technologischen Errungenschaften der Menschheit während des Wettlaufs ins All dar.",
          nl: "Apollo 11 lanceerde op 16 juli 1969 met astronauten Neil Armstrong, Buzz Aldrin en Michael Collins. Vier dagen later, op 20 juli, werden Armstrong en Aldrin de eerste mensen die op de Maan liepen terwijl Collins erboven cirkelde. Deze prestatie vervulde president Kennedy's doel en vertegenwoordigde een van de grootste technologische prestaties van de mensheid tijdens de Space Race."
        }
      },
      {
        question: {
          en: "What code name was given to the first atomic bomb test conducted on July 16, 1945?",
          es: "¿Qué nombre en clave se le dio a la primera prueba de la bomba atómica realizada el 16 de julio de 1945?",
          de: "Welcher Codename wurde dem ersten Atombombentest am 16. Juli 1945 gegeben?",
          nl: "Welke codenaam kreeg de eerste atoombomtest uitgevoerd op 16 juli 1945?"
        },
        options: [
          { en: "Manhattan", es: "Manhattan", de: "Manhattan", nl: "Manhattan" },
          { en: "Little Boy", es: "Little Boy", de: "Little Boy", nl: "Little Boy" },
          { en: "Trinity", es: "Trinity", de: "Trinity", nl: "Trinity" },
          { en: "Fat Man", es: "Fat Man", de: "Fat Man", nl: "Fat Man" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Trinity test was the first detonation of a nuclear weapon, conducted in the Jornada del Muerto desert in New Mexico. The successful test marked the culmination of the Manhattan Project and ushered in the atomic age. J. Robert Oppenheimer, witnessing the explosion, famously quoted the Bhagavad Gita: 'Now I am become Death, the destroyer of worlds.' The test led directly to the bombings of Hiroshima and Nagasaki weeks later.",
          es: "La prueba Trinity fue la primera detonación de un arma nuclear, realizada en el desierto de Jornada del Muerto en Nuevo México. La prueba exitosa marcó la culminación del Proyecto Manhattan e inauguró la era atómica. J. Robert Oppenheimer, al presenciar la explosión, citó famosamente el Bhagavad Gita: 'Ahora me he convertido en la Muerte, el destructor de mundos'. La prueba condujo directamente a los bombardeos de Hiroshima y Nagasaki semanas después.",
          de: "Der Trinity-Test war die erste Detonation einer Atomwaffe, durchgeführt in der Wüste Jornada del Muerto in New Mexico. Der erfolgreiche Test markierte den Höhepunkt des Manhattan-Projekts und läutete das Atomzeitalter ein. J. Robert Oppenheimer, der die Explosion miterlebte, zitierte berühmt die Bhagavad Gita: 'Jetzt bin ich der Tod geworden, der Zerstörer der Welten.' Der Test führte direkt zu den Atombombenabwürfen auf Hiroshima und Nagasaki Wochen später.",
          nl: "De Trinity-test was de eerste ontploffing van een kernwapen, uitgevoerd in de Jornada del Muerto-woestijn in New Mexico. De succesvolle test markeerde het hoogtepunt van het Manhattan Project en luidde het atoomtijdperk in. J. Robert Oppenheimer, die de explosie bijwoonde, citeerde beroemd de Bhagavad Gita: 'Nu ben ik de Dood geworden, de vernietiger van werelden.' De test leidde direct tot de bombardementen op Hiroshima en Nagasaki weken later."
        }
      },
      {
        question: {
          en: "Which acclaimed author of 'The Catcher in the Rye' was born on July 16, 1919?",
          es: "¿Qué aclamado autor de 'El guardián entre el centeno' nació el 16 de julio de 1919?",
          de: "Welcher gefeierte Autor von 'Der Fänger im Roggen' wurde am 16. Juli 1919 geboren?",
          nl: "Welke geprezen auteur van 'De vanger in het graan' werd geboren op 16 juli 1919?"
        },
        options: [
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "F. Scott Fitzgerald", es: "F. Scott Fitzgerald", de: "F. Scott Fitzgerald", nl: "F. Scott Fitzgerald" },
          { en: "J.D. Salinger", es: "J.D. Salinger", de: "J.D. Salinger", nl: "J.D. Salinger" },
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Jerome David Salinger was born on July 16, 1919, in New York City. His novel 'The Catcher in the Rye' (1951) became one of the most influential American novels, capturing teenage alienation and rebellion. The story of Holden Caulfield resonated with generations of readers. Salinger was famously reclusive, avoiding public appearances and interviews for most of his life, adding to his mystique as a literary figure.",
          es: "Jerome David Salinger nació el 16 de julio de 1919 en la ciudad de Nueva York. Su novela 'El guardián entre el centeno' (1951) se convirtió en una de las novelas estadounidenses más influyentes, capturando la alienación y rebelión adolescente. La historia de Holden Caulfield resonó con generaciones de lectores. Salinger era famosamente reservado, evitando apariciones públicas y entrevistas durante la mayor parte de su vida, añadiendo a su mística como figura literaria.",
          de: "Jerome David Salinger wurde am 16. Juli 1919 in New York City geboren. Sein Roman 'Der Fänger im Roggen' (1951) wurde zu einem der einflussreichsten amerikanischen Romane und fängt jugendliche Entfremdung und Rebellion ein. Die Geschichte von Holden Caulfield fand bei Generationen von Lesern Anklang. Salinger war berühmt zurückgezogen und vermied die meiste Zeit seines Lebens öffentliche Auftritte und Interviews, was zu seiner Mystik als literarische Figur beitrug.",
          nl: "Jerome David Salinger werd geboren op 16 juli 1919 in New York City. Zijn roman 'De vanger in het graan' (1951) werd een van de meest invloedrijke Amerikaanse romans, die tienerentfremdung en rebellie vastlegde. Het verhaal van Holden Caulfield resoneerde met generaties lezers. Salinger was beroemd teruggetrokken en vermeed het grootste deel van zijn leven openbare optredens en interviews, wat bijdroeg aan zijn mystiek als literaire figuur."
        }
      },
      {
        question: {
          en: "On July 16, 1790, which territory was established to become the nation's capital?",
          es: "El 16 de julio de 1790, ¿qué territorio se estableció para convertirse en la capital de la nación?",
          de: "Welches Territorium wurde am 16. Juli 1790 gegründet, um die Hauptstadt der Nation zu werden?",
          nl: "Welk territorium werd op 16 juli 1790 opgericht om de hoofdstad van de natie te worden?"
        },
        options: [
          { en: "Maryland", es: "Maryland", de: "Maryland", nl: "Maryland" },
          { en: "Virginia", es: "Virginia", de: "Virginia", nl: "Virginia" },
          { en: "District of Columbia", es: "Distrito de Columbia", de: "District of Columbia", nl: "District of Columbia" },
          { en: "Pennsylvania", es: "Pensilvania", de: "Pennsylvania", nl: "Pennsylvania" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The District of Columbia was established on July 16, 1790, through the Residence Act, which authorized the creation of a national capital on the Potomac River. The district was formed from land donated by Maryland and Virginia (though Virginia's portion was later returned). Named after Christopher Columbus, it was designed by Pierre L'Enfant and became home to the federal government when it moved from Philadelphia in 1800.",
          es: "El Distrito de Columbia se estableció el 16 de julio de 1790 a través de la Ley de Residencia, que autorizó la creación de una capital nacional en el río Potomac. El distrito se formó a partir de tierras donadas por Maryland y Virginia (aunque la porción de Virginia fue devuelta más tarde). Nombrado en honor a Cristóbal Colón, fue diseñado por Pierre L'Enfant y se convirtió en sede del gobierno federal cuando se mudó desde Filadelfia en 1800.",
          de: "Der District of Columbia wurde am 16. Juli 1790 durch den Residence Act gegründet, der die Schaffung einer nationalen Hauptstadt am Potomac River genehmigte. Der Bezirk wurde aus Land gebildet, das von Maryland und Virginia gespendet wurde (obwohl Virginias Anteil später zurückgegeben wurde). Benannt nach Christoph Kolumbus, wurde er von Pierre L'Enfant entworfen und wurde 1800 zum Sitz der Bundesregierung, als diese von Philadelphia umzog.",
          nl: "Het District of Columbia werd opgericht op 16 juli 1790 door de Residence Act, die de oprichting van een nationale hoofdstad aan de Potomac River autoriseerde. Het district werd gevormd uit land gedoneerd door Maryland en Virginia (hoewel Virginia's deel later werd teruggegeven). Genoemd naar Christoffel Columbus, werd het ontworpen door Pierre L'Enfant en werd in 1800 de thuisbasis van de federale regering toen deze vanuit Philadelphia verhuisde."
        }
      },
      {
        question: {
          en: "What tragic aviation accident occurred on July 16, 1964, involving a Boeing 707?",
          es: "¿Qué trágico accidente de aviación ocurrió el 16 de julio de 1964, involucrando un Boeing 707?",
          de: "Welcher tragische Flugunfall ereignete sich am 16. Juli 1964 mit einer Boeing 707?",
          nl: "Welk tragisch vliegtuigongeluk vond plaats op 16 juli 1964, waarbij een Boeing 707 betrokken was?"
        },
        options: [
          { en: "It crashed into a building", es: "Se estrelló contra un edificio", de: "Es stürzte in ein Gebäude", nl: "Het stortte neer op een gebouw" },
          { en: "It crashed into a mountain", es: "Se estrelló contra una montaña", de: "Es stürzte in einen Berg", nl: "Het stortte neer tegen een berg" },
          { en: "It disappeared over the ocean", es: "Desapareció sobre el océano", de: "Es verschwand über dem Ozean", nl: "Het verdween boven de oceaan" },
          { en: "It collided with another plane", es: "Colisionó con otro avión", de: "Es kollidierte mit einem anderen Flugzeug", nl: "Het botste met een ander vliegtuig" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On July 16, 1964, a United Airlines Boeing 707 crashed into Mount Tamalpais near San Francisco during a training flight, killing all aboard. This tragedy, along with other aviation accidents of the era, led to significant improvements in pilot training procedures, navigation systems, and safety protocols. The incident highlighted the importance of terrain awareness and proper instrument flying techniques.",
          es: "El 16 de julio de 1964, un Boeing 707 de United Airlines se estrelló contra el Monte Tamalpais cerca de San Francisco durante un vuelo de entrenamiento, matando a todos a bordo. Esta tragedia, junto con otros accidentes de aviación de la época, condujo a mejoras significativas en los procedimientos de entrenamiento de pilotos, sistemas de navegación y protocolos de seguridad. El incidente destacó la importancia de la conciencia del terreno y las técnicas adecuadas de vuelo por instrumentos.",
          de: "Am 16. Juli 1964 stürzte eine Boeing 707 von United Airlines während eines Trainingsflugs in den Mount Tamalpais bei San Francisco und tötete alle an Bord. Diese Tragödie führte zusammen mit anderen Flugunfällen dieser Zeit zu erheblichen Verbesserungen bei Pilotenausbildungsverfahren, Navigationssystemen und Sicherheitsprotokollen. Der Vorfall betonte die Bedeutung des Geländebewusstseins und geeigneter Instrumentenflugstechniken.",
          nl: "Op 16 juli 1964 stortte een United Airlines Boeing 707 neer op Mount Tamalpais bij San Francisco tijdens een trainingsvlucht, waarbij iedereen aan boord omkwam. Deze tragedie, samen met andere luchtvaartrampen uit die tijd, leidde tot aanzienlijke verbeteringen in pilootopleidingsprocedures, navigatiesystemen en veiligheidsprotocollen. Het incident benadrukte het belang van terreinbewustzijn en goede instrumentvliegtechnieken."
        }
      }
    ],

    // Day 17 - July 17th: Disneyland Opens, Tsar Nicholas II Executed, Spanish Civil War, MH17, Potsdam Conference
    day17: [
      {
        question: {
          en: "Which famous theme park opened its doors to the public on July 17, 1955?",
          es: "¿Qué famoso parque temático abrió sus puertas al público el 17 de julio de 1955?",
          de: "Welcher berühmte Freizeitpark öffnete am 17. Juli 1955 seine Pforten für die Öffentlichkeit?",
          nl: "Welk beroemd pretpark opende op 17 juli 1955 zijn deuren voor het publiek?"
        },
        options: [
          { en: "Universal Studios", es: "Universal Studios", de: "Universal Studios", nl: "Universal Studios" },
          { en: "Six Flags", es: "Six Flags", de: "Six Flags", nl: "Six Flags" },
          { en: "Disneyland", es: "Disneyland", de: "Disneyland", nl: "Disneyland" },
          { en: "SeaWorld", es: "SeaWorld", de: "SeaWorld", nl: "SeaWorld" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Disneyland opened in Anaheim, California on July 17, 1955, becoming the first theme park of its kind. Walt Disney's vision of a family entertainment destination revolutionized the amusement park industry. Despite technical difficulties on opening day (dubbed 'Black Sunday'), Disneyland became immensely popular and inspired the creation of Disney parks worldwide. It remains one of the most visited theme parks in the world.",
          es: "Disneyland abrió en Anaheim, California, el 17 de julio de 1955, convirtiéndose en el primer parque temático de su tipo. La visión de Walt Disney de un destino de entretenimiento familiar revolucionó la industria de los parques de atracciones. A pesar de las dificultades técnicas el día de apertura (apodado 'Domingo Negro'), Disneyland se volvió inmensamente popular e inspiró la creación de parques Disney en todo el mundo. Sigue siendo uno de los parques temáticos más visitados del mundo.",
          de: "Disneyland eröffnete am 17. Juli 1955 in Anaheim, Kalifornien, und wurde zum ersten Themenpark seiner Art. Walt Disneys Vision eines Familienunterhaltungsziels revolutionierte die Vergnügungsparkindustrie. Trotz technischer Schwierigkeiten am Eröffnungstag (genannt 'Schwarzer Sonntag') wurde Disneyland immens populär und inspirierte die Schaffung von Disney-Parks weltweit. Es bleibt einer der meistbesuchten Themenparks der Welt.",
          nl: "Disneyland opende op 17 juli 1955 in Anaheim, Californië, en werd het eerste themapark van zijn soort. Walt Disney's visie van een familie-entertainmentbestemming revolutioneerde de pretparkindustrie. Ondanks technische problemen op de openingsdag (genaamd 'Zwarte Zondag') werd Disneyland immens populair en inspireerde het de creatie van Disney-parken wereldwijd. Het blijft een van de meest bezochte themaparken ter wereld."
        }
      },
      {
        question: {
          en: "On July 17, 1918, which Russian ruler and his family were executed by Bolsheviks?",
          es: "El 17 de julio de 1918, ¿qué gobernante ruso y su familia fueron ejecutados por los bolcheviques?",
          de: "Welcher russische Herrscher und seine Familie wurden am 17. Juli 1918 von den Bolschewiki hingerichtet?",
          nl: "Welke Russische heerser en zijn familie werden op 17 juli 1918 geëxecuteerd door de Bolsjewieken?"
        },
        options: [
          { en: "Tsar Alexander II", es: "Zar Alejandro II", de: "Zar Alexander II", nl: "Tsaar Alexander II" },
          { en: "Tsar Nicholas II", es: "Zar Nicolás II", de: "Zar Nikolaus II", nl: "Tsaar Nicolaas II" },
          { en: "Tsar Peter the Great", es: "Zar Pedro el Grande", de: "Zar Peter der Große", nl: "Tsaar Peter de Grote" },
          { en: "Tsar Ivan IV", es: "Zar Iván IV", de: "Zar Iwan IV", nl: "Tsaar Ivan IV" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Tsar Nicholas II, the last Emperor of Russia, was executed with his wife Alexandra and their five children in Yekaterinburg on July 17, 1918. After his abdication in 1917 during the Russian Revolution, the Romanov family was held in captivity. The Bolsheviks ordered their execution as White Army forces approached the city. Their remains were hidden for decades until being discovered and identified in the 1990s, finally receiving a proper burial.",
          es: "El Zar Nicolás II, el último Emperador de Rusia, fue ejecutado con su esposa Alexandra y sus cinco hijos en Ekaterimburgo el 17 de julio de 1918. Después de su abdicación en 1917 durante la Revolución Rusa, la familia Romanov fue mantenida en cautiverio. Los bolcheviques ordenaron su ejecución cuando las fuerzas del Ejército Blanco se acercaban a la ciudad. Sus restos permanecieron ocultos durante décadas hasta ser descubiertos e identificados en la década de 1990, finalmente recibiendo un entierro apropiado.",
          de: "Zar Nikolaus II., der letzte Kaiser Russlands, wurde mit seiner Frau Alexandra und ihren fünf Kindern am 17. Juli 1918 in Jekaterinburg hingerichtet. Nach seiner Abdankung 1917 während der Russischen Revolution wurde die Familie Romanow in Gefangenschaft gehalten. Die Bolschewiki ordneten ihre Hinrichtung an, als Truppen der Weißen Armee sich der Stadt näherten. Ihre Überreste blieben jahrzehntelang verborgen, bis sie in den 1990er Jahren entdeckt und identifiziert wurden und schließlich eine angemessene Bestattung erhielten.",
          nl: "Tsaar Nicolaas II, de laatste keizer van Rusland, werd samen met zijn vrouw Alexandra en hun vijf kinderen op 17 juli 1918 geëxecuteerd in Jekaterinenburg. Na zijn troonsafstand in 1917 tijdens de Russische Revolutie werd de Romanov-familie in gevangenschap gehouden. De Bolsjewieken gaven bevel tot hun executie toen Witte Leger troepen de stad naderden. Hun stoffelijke resten bleven decennialang verborgen totdat ze in de jaren 1990 werden ontdekt en geïdentificeerd, en eindelijk een gepaste begrafenis kregen."
        }
      },
      {
        question: {
          en: "What major European conflict began on July 17, 1936?",
          es: "¿Qué gran conflicto europeo comenzó el 17 de julio de 1936?",
          de: "Welcher große europäische Konflikt begann am 17. Juli 1936?",
          nl: "Welk groot Europees conflict begon op 17 juli 1936?"
        },
        options: [
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
          { en: "Spanish Civil War", es: "Guerra Civil Española", de: "Spanischer Bürgerkrieg", nl: "Spaanse Burgeroorlog" },
          { en: "French Revolution", es: "Revolución Francesa", de: "Französische Revolution", nl: "Franse Revolutie" },
          { en: "Napoleonic Wars", es: "Guerras Napoleónicas", de: "Napoleonische Kriege", nl: "Napoleontische Oorlogen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Spanish Civil War began on July 17, 1936, when military forces led by General Francisco Franco rebelled against the democratically elected Republican government. This brutal conflict lasted until 1939 and became a testing ground for World War II, with Nazi Germany and Fascist Italy supporting Franco, while the Soviet Union aided the Republicans. The war resulted in Franco's dictatorship that lasted until his death in 1975.",
          es: "La Guerra Civil Española comenzó el 17 de julio de 1936, cuando las fuerzas militares lideradas por el General Francisco Franco se rebelaron contra el gobierno republicano democráticamente elegido. Este brutal conflicto duró hasta 1939 y se convirtió en un campo de pruebas para la Segunda Guerra Mundial, con la Alemania Nazi y la Italia Fascista apoyando a Franco, mientras la Unión Soviética ayudaba a los republicanos. La guerra resultó en la dictadura de Franco que duró hasta su muerte en 1975.",
          de: "Der Spanische Bürgerkrieg begann am 17. Juli 1936, als Militärkräfte unter General Francisco Franco gegen die demokratisch gewählte republikanische Regierung rebellierten. Dieser brutale Konflikt dauerte bis 1939 und wurde zu einem Testgelände für den Zweiten Weltkrieg, wobei Nazi-Deutschland und das faschistische Italien Franco unterstützten, während die Sowjetunion den Republikanern half. Der Krieg führte zu Francos Diktatur, die bis zu seinem Tod 1975 andauerte.",
          nl: "De Spaanse Burgeroorlog begon op 17 juli 1936, toen militaire troepen onder leiding van generaal Francisco Franco in opstand kwamen tegen de democratisch gekozen Republikeinse regering. Dit brute conflict duurde tot 1939 en werd een testterrein voor de Tweede Wereldoorlog, waarbij Nazi-Duitsland en Fascistisch Italië Franco steunden, terwijl de Sovjet-Unie de Republikeinen hielp. De oorlog resulteerde in Franco's dictatuur die duurde tot zijn dood in 1975."
        }
      },
      {
        question: {
          en: "Which tragic aviation incident occurred on July 17, 2014, over eastern Ukraine?",
          es: "¿Qué trágico incidente de aviación ocurrió el 17 de julio de 2014, sobre el este de Ucrania?",
          de: "Welcher tragische Flugunfall ereignete sich am 17. Juli 2014 über der Ostukraine?",
          nl: "Welk tragisch luchtvaartincident vond plaats op 17 juli 2014 boven Oost-Oekraïne?"
        },
        options: [
          { en: "Air France Flight 447", es: "Vuelo 447 de Air France", de: "Air France Flug 447", nl: "Air France Vlucht 447" },
          { en: "Malaysia Airlines MH370", es: "Malaysia Airlines MH370", de: "Malaysia Airlines MH370", nl: "Malaysia Airlines MH370" },
          { en: "Malaysia Airlines MH17", es: "Malaysia Airlines MH17", de: "Malaysia Airlines MH17", nl: "Malaysia Airlines MH17" },
          { en: "Germanwings Flight 9525", es: "Vuelo 9525 de Germanwings", de: "Germanwings Flug 9525", nl: "Germanwings Vlucht 9525" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Malaysia Airlines Flight MH17 was shot down over eastern Ukraine on July 17, 2014, killing all 298 people aboard. The Boeing 777 was traveling from Amsterdam to Kuala Lumpur when it was hit by a surface-to-air missile in an area of armed conflict. International investigations concluded the missile was launched from territory controlled by Russian-backed separatists. This tragedy highlighted the dangers of civilian aircraft flying over conflict zones.",
          es: "El vuelo MH17 de Malaysia Airlines fue derribado sobre el este de Ucrania el 17 de julio de 2014, matando a las 298 personas a bordo. El Boeing 777 viajaba de Ámsterdam a Kuala Lumpur cuando fue alcanzado por un misil tierra-aire en un área de conflicto armado. Las investigaciones internacionales concluyeron que el misil fue lanzado desde territorio controlado por separatistas respaldados por Rusia. Esta tragedia destacó los peligros de que los aviones civiles vuelen sobre zonas de conflicto.",
          de: "Malaysia Airlines Flug MH17 wurde am 17. Juli 2014 über der Ostukraine abgeschossen, wobei alle 298 Menschen an Bord starben. Die Boeing 777 war auf dem Weg von Amsterdam nach Kuala Lumpur, als sie von einer Boden-Luft-Rakete in einem Konfliktgebiet getroffen wurde. Internationale Untersuchungen kamen zu dem Schluss, dass die Rakete von einem von russisch unterstützten Separatisten kontrollierten Gebiet abgefeuert wurde. Diese Tragödie verdeutlichte die Gefahren ziviler Flugzeuge über Konfliktgebieten.",
          nl: "Malaysia Airlines vlucht MH17 werd op 17 juli 2014 neergeschoten boven Oost-Oekraïne, waarbij alle 298 inzittenden omkwamen. De Boeing 777 was onderweg van Amsterdam naar Kuala Lumpur toen het werd geraakt door een grond-luchtrakket in een gebied van gewapend conflict. Internationale onderzoeken concludeerden dat de raket werd gelanceerd vanuit door Rusland gesteunde separatisten gecontroleerd gebied. Deze tragedie benadrukte de gevaren van civiele vliegtuigen die over conflictgebieden vliegen."
        }
      },
      {
        question: {
          en: "Which important Allied conference began on July 17, 1945, to discuss post-war Europe?",
          es: "¿Qué importante conferencia aliada comenzó el 17 de julio de 1945 para discutir la Europa de posguerra?",
          de: "Welche wichtige Konferenz der Alliierten begann am 17. Juli 1945, um das Nachkriegs-Europa zu besprechen?",
          nl: "Welke belangrijke geallieerde conferentie begon op 17 juli 1945 om het naoorlogse Europa te bespreken?"
        },
        options: [
          { en: "Yalta Conference", es: "Conferencia de Yalta", de: "Konferenz von Jalta", nl: "Conferentie van Jalta" },
          { en: "Tehran Conference", es: "Conferencia de Teherán", de: "Konferenz von Teheran", nl: "Conferentie van Teheran" },
          { en: "Potsdam Conference", es: "Conferencia de Potsdam", de: "Potsdamer Konferenz", nl: "Conferentie van Potsdam" },
          { en: "Paris Peace Conference", es: "Conferencia de Paz de París", de: "Pariser Friedenskonferenz", nl: "Parijse Vredesconferentie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Potsdam Conference began on July 17, 1945, bringing together leaders from the United States (President Truman), the United Kingdom (Prime Minister Churchill, later Attlee), and the Soviet Union (Premier Stalin). Meeting in Potsdam, Germany, they discussed the administration of defeated Germany, war reparations, and the conclusion of the war with Japan. The conference marked the beginning of tensions that would lead to the Cold War.",
          es: "La Conferencia de Potsdam comenzó el 17 de julio de 1945, reuniendo a líderes de los Estados Unidos (Presidente Truman), el Reino Unido (Primer Ministro Churchill, luego Attlee) y la Unión Soviética (Premier Stalin). Reunidos en Potsdam, Alemania, discutieron la administración de la Alemania derrotada, las reparaciones de guerra y la conclusión de la guerra con Japón. La conferencia marcó el comienzo de las tensiones que conducirían a la Guerra Fría.",
          de: "Die Potsdamer Konferenz begann am 17. Juli 1945 und brachte Führer aus den Vereinigten Staaten (Präsident Truman), dem Vereinigten Königreich (Premierminister Churchill, später Attlee) und der Sowjetunion (Premier Stalin) zusammen. In Potsdam, Deutschland, diskutierten sie die Verwaltung des besiegten Deutschlands, Kriegsreparationen und den Abschluss des Krieges mit Japan. Die Konferenz markierte den Beginn der Spannungen, die zum Kalten Krieg führen würden.",
          nl: "De Conferentie van Potsdam begon op 17 juli 1945 en bracht leiders van de Verenigde Staten (President Truman), het Verenigd Koninkrijk (Premier Churchill, later Attlee) en de Sovjet-Unie (Premier Stalin) samen. In Potsdam, Duitsland, bespraken ze het bestuur van het verslagen Duitsland, oorlogsschadevergoedingen en de afsluiting van de oorlog met Japan. De conferentie markeerde het begin van spanningen die zouden leiden tot de Koude Oorlog."
        }
      }
    ],

    // Day 18 - July 18th: Nelson Mandela Born, First Special Olympics, Glenn Curtiss Flight, Rome Burns, Nelson Mandela Day
    day18: [
      {
        question: {
          en: "Which legendary anti-apartheid leader and South African president was born on July 18, 1918?",
          es: "¿Qué legendario líder anti-apartheid y presidente sudafricano nació el 18 de julio de 1918?",
          de: "Welcher legendäre Anti-Apartheid-Führer und südafrikanische Präsident wurde am 18. Juli 1918 geboren?",
          nl: "Welke legendarische anti-apartheidleider en Zuid-Afrikaanse president werd geboren op 18 juli 1918?"
        },
        options: [
          { en: "Desmond Tutu", es: "Desmond Tutu", de: "Desmond Tutu", nl: "Desmond Tutu" },
          { en: "Nelson Mandela", es: "Nelson Mandela", de: "Nelson Mandela", nl: "Nelson Mandela" },
          { en: "Steve Biko", es: "Steve Biko", de: "Steve Biko", nl: "Steve Biko" },
          { en: "Thabo Mbeki", es: "Thabo Mbeki", de: "Thabo Mbeki", nl: "Thabo Mbeki" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nelson Mandela was born on July 18, 1918, in Mvezo, South Africa. He spent 27 years in prison for his opposition to apartheid before being released in 1990. In 1994, he became South Africa's first Black president in the country's first fully democratic elections. His advocacy for reconciliation and human rights earned him the Nobel Peace Prize in 1993. July 18 is now celebrated as Nelson Mandela International Day.",
          es: "Nelson Mandela nació el 18 de julio de 1918 en Mvezo, Sudáfrica. Pasó 27 años en prisión por su oposición al apartheid antes de ser liberado en 1990. En 1994, se convirtió en el primer presidente negro de Sudáfrica en las primeras elecciones completamente democráticas del país. Su defensa de la reconciliación y los derechos humanos le valió el Premio Nobel de la Paz en 1993. El 18 de julio ahora se celebra como el Día Internacional de Nelson Mandela.",
          de: "Nelson Mandela wurde am 18. Juli 1918 in Mvezo, Südafrika, geboren. Er verbrachte 27 Jahre im Gefängnis wegen seines Widerstands gegen die Apartheid, bevor er 1990 freigelassen wurde. 1994 wurde er Südafrikas erster schwarzer Präsident bei den ersten vollständig demokratischen Wahlen des Landes. Sein Einsatz für Versöhnung und Menschenrechte brachte ihm 1993 den Friedensnobelpreis ein. Der 18. Juli wird heute als Nelson Mandela Internationaler Tag gefeiert.",
          nl: "Nelson Mandela werd geboren op 18 juli 1918 in Mvezo, Zuid-Afrika. Hij bracht 27 jaar in de gevangenis door voor zijn verzet tegen apartheid voordat hij in 1990 werd vrijgelaten. In 1994 werd hij de eerste zwarte president van Zuid-Afrika in de eerste volledig democratische verkiezingen van het land. Zijn pleidooi voor verzoening en mensenrechten leverde hem in 1993 de Nobelprijs voor de Vrede op. 18 juli wordt nu gevierd als Nelson Mandela Internationale Dag."
        }
      },
      {
        question: {
          en: "What groundbreaking athletic event for people with intellectual disabilities was first held on July 18, 1968?",
          es: "¿Qué evento atlético pionero para personas con discapacidades intelectuales se celebró por primera vez el 18 de julio de 1968?",
          de: "Welche bahnbrechende Sportveranstaltung für Menschen mit geistigen Behinderungen fand erstmals am 18. Juli 1968 statt?",
          nl: "Welk baanbrekend sportevenement voor mensen met een verstandelijke beperking werd voor het eerst gehouden op 18 juli 1968?"
        },
        options: [
          { en: "Paralympics", es: "Juegos Paralímpicos", de: "Paralympics", nl: "Paralympics" },
          { en: "Special Olympics", es: "Olimpiadas Especiales", de: "Special Olympics", nl: "Special Olympics" },
          { en: "Invictus Games", es: "Juegos Invictus", de: "Invictus Games", nl: "Invictus Games" },
          { en: "Deaflympics", es: "Deaflympics", de: "Deaflympics", nl: "Deaflympics" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Special Olympics were held in Chicago on July 18, 1968, organized by Eunice Kennedy Shriver. About 1,000 athletes with intellectual disabilities competed in track and field events. The event was revolutionary in providing opportunities for people with intellectual disabilities to participate in sports. Today, Special Olympics serves over 5 million athletes in more than 170 countries, promoting inclusion, acceptance, and human dignity.",
          es: "Las primeras Olimpiadas Especiales se celebraron en Chicago el 18 de julio de 1968, organizadas por Eunice Kennedy Shriver. Alrededor de 1,000 atletas con discapacidades intelectuales compitieron en eventos de atletismo. El evento fue revolucionario al proporcionar oportunidades para que las personas con discapacidades intelectuales participaran en deportes. Hoy, las Olimpiadas Especiales sirven a más de 5 millones de atletas en más de 170 países, promoviendo la inclusión, la aceptación y la dignidad humana.",
          de: "Die ersten Special Olympics fanden am 18. Juli 1968 in Chicago statt, organisiert von Eunice Kennedy Shriver. Etwa 1.000 Athleten mit geistigen Behinderungen nahmen an Leichtathletikveranstaltungen teil. Die Veranstaltung war revolutionär darin, Menschen mit geistigen Behinderungen Möglichkeiten zur Sportteilnahme zu bieten. Heute dienen die Special Olympics über 5 Millionen Athleten in mehr als 170 Ländern und fördern Inklusion, Akzeptanz und Menschenwürde.",
          nl: "De eerste Special Olympics werden gehouden in Chicago op 18 juli 1968, georganiseerd door Eunice Kennedy Shriver. Ongeveer 1.000 atleten met een verstandelijke beperking namen deel aan atletiekevenementen. Het evenement was revolutionair in het bieden van mogelijkheden voor mensen met verstandelijke beperkingen om aan sport deel te nemen. Tegenwoordig bedient Special Olympics meer dan 5 miljoen atleten in meer dan 170 landen, ter bevordering van inclusie, acceptatie en menselijke waardigheid."
        }
      },
      {
        question: {
          en: "Which aviation pioneer flew 1 mile in an aircraft on July 18, 1908?",
          es: "¿Qué pionero de la aviación voló 1 milla en un avión el 18 de julio de 1908?",
          de: "Welcher Luftfahrtpionier flog am 18. Juli 1908 eine Meile in einem Flugzeug?",
          nl: "Welke luchtvaartpionier vloog 1 mijl in een vliegtuig op 18 juli 1908?"
        },
        options: [
          { en: "Orville Wright", es: "Orville Wright", de: "Orville Wright", nl: "Orville Wright" },
          { en: "Charles Lindbergh", es: "Charles Lindbergh", de: "Charles Lindbergh", nl: "Charles Lindbergh" },
          { en: "Glenn Curtiss", es: "Glenn Curtiss", de: "Glenn Curtiss", nl: "Glenn Curtiss" },
          { en: "Louis Blériot", es: "Louis Blériot", de: "Louis Blériot", nl: "Louis Blériot" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Glenn Curtiss made history on July 18, 1908, when he flew his 'June Bug' aircraft for one mile to win the Scientific American Trophy. This was the first officially witnessed public flight of one mile in America. Curtiss went on to become a major figure in early aviation, founding the Curtiss Aeroplane Company and developing seaplanes and other aircraft innovations. He was a rival of the Wright Brothers in the early aviation industry.",
          es: "Glenn Curtiss hizo historia el 18 de julio de 1908, cuando voló su avión 'June Bug' durante una milla para ganar el Trofeo Scientific American. Este fue el primer vuelo público oficialmente presenciado de una milla en América. Curtiss se convirtió en una figura importante en la aviación temprana, fundando la Curtiss Aeroplane Company y desarrollando hidroaviones y otras innovaciones de aeronaves. Fue rival de los hermanos Wright en la industria de la aviación temprana.",
          de: "Glenn Curtiss machte Geschichte am 18. Juli 1908, als er mit seinem Flugzeug 'June Bug' eine Meile flog, um den Scientific American Trophy zu gewinnen. Dies war der erste offiziell bezeugte öffentliche Flug von einer Meile in Amerika. Curtiss wurde zu einer wichtigen Figur in der frühen Luftfahrt, gründete die Curtiss Aeroplane Company und entwickelte Wasserflugzeuge und andere Luftfahrtinnovationen. Er war ein Rivale der Wright Brothers in der frühen Luftfahrtindustrie.",
          nl: "Glenn Curtiss maakte geschiedenis op 18 juli 1908 toen hij met zijn vliegtuig 'June Bug' een mijl vloog om de Scientific American Trophy te winnen. Dit was de eerste officieel getuigde publieke vlucht van één mijl in Amerika. Curtiss werd een belangrijke figuur in de vroege luchtvaart, richtte de Curtiss Aeroplane Company op en ontwikkelde watervliegtuigen en andere luchtvaartinnovaties. Hij was een rivaal van de gebroeders Wright in de vroege luchtvaartindustrie."
        }
      },
      {
        question: {
          en: "According to legend, what did Roman Emperor Nero do while Rome burned on July 18, 64 AD?",
          es: "Según la leyenda, ¿qué hizo el emperador romano Nerón mientras Roma ardía el 18 de julio de 64 d.C.?",
          de: "Der Legende nach, was tat der römische Kaiser Nero, während Rom am 18. Juli 64 n. Chr. brannte?",
          nl: "Volgens de legende, wat deed de Romeinse keizer Nero terwijl Rome brandde op 18 juli 64 na Christus?"
        },
        options: [
          { en: "He prayed at a temple", es: "Rezó en un templo", de: "Er betete in einem Tempel", nl: "Hij bad in een tempel" },
          { en: "He fled the city", es: "Huyó de la ciudad", de: "Er floh aus der Stadt", nl: "Hij vluchtte de stad uit" },
          { en: "He fiddled (played music)", es: "Tocó el violín (música)", de: "Er fiedelte (spielte Musik)", nl: "Hij speelde viool (muziek)" },
          { en: "He fought the fire personally", es: "Luchó contra el fuego personalmente", de: "Er bekämpfte das Feuer persönlich", nl: "Hij bestreed persoonlijk het vuur" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Great Fire of Rome began on July 18, 64 AD, and burned for six days, destroying much of the city. Legend claims Nero 'fiddled while Rome burned,' though this is historically inaccurate (the fiddle hadn't been invented yet). Some sources suggest Nero sang or played the lyre. While he was likely not responsible for starting the fire, Nero later blamed Christians for it, leading to their persecution. He used the cleared land to build his grand palace, the Domus Aurea.",
          es: "El Gran Incendio de Roma comenzó el 18 de julio de 64 d.C. y ardió durante seis días, destruyendo gran parte de la ciudad. La leyenda afirma que Nerón 'tocó el violín mientras Roma ardía', aunque esto es históricamente inexacto (el violín aún no se había inventado). Algunas fuentes sugieren que Nerón cantó o tocó la lira. Aunque probablemente no fue responsable de iniciar el incendio, Nerón más tarde culpó a los cristianos, lo que llevó a su persecución. Usó el terreno despejado para construir su gran palacio, la Domus Aurea.",
          de: "Der Große Brand von Rom begann am 18. Juli 64 n. Chr. und brannte sechs Tage lang, wobei ein Großteil der Stadt zerstört wurde. Die Legende besagt, Nero habe 'gefiedelt, während Rom brannte', obwohl dies historisch ungenau ist (die Geige war noch nicht erfunden). Einige Quellen deuten darauf hin, dass Nero sang oder die Lyra spielte. Obwohl er wahrscheinlich nicht für den Brand verantwortlich war, gab Nero später den Christen die Schuld, was zu ihrer Verfolgung führte. Er nutzte das geräumte Land, um seinen Prachtpalast, die Domus Aurea, zu bauen.",
          nl: "De Grote Brand van Rome begon op 18 juli 64 na Christus en brandde zes dagen lang, waarbij een groot deel van de stad werd verwoest. De legende beweert dat Nero 'viool speelde terwijl Rome brandde', hoewel dit historisch onjuist is (de viool was nog niet uitgevonden). Sommige bronnen suggereren dat Nero zong of lier speelde. Hoewel hij waarschijnlijk niet verantwoordelijk was voor het starten van de brand, gaf Nero later christenen de schuld, wat leidde tot hun vervolging. Hij gebruikte het vrijgekomen land om zijn grootse paleis, de Domus Aurea, te bouwen."
        }
      },
      {
        question: {
          en: "July 18 is celebrated as Nelson Mandela International Day. What does the UN ask people to do for 67 minutes?",
          es: "El 18 de julio se celebra como el Día Internacional de Nelson Mandela. ¿Qué pide la ONU que la gente haga durante 67 minutos?",
          de: "Der 18. Juli wird als Nelson Mandela Internationaler Tag gefeiert. Was bittet die UN die Menschen, 67 Minuten lang zu tun?",
          nl: "18 juli wordt gevierd als Nelson Mandela Internationale Dag. Wat vraagt de VN mensen om 67 minuten te doen?"
        },
        options: [
          { en: "Meditate in silence", es: "Meditar en silencio", de: "In Stille meditieren", nl: "In stilte mediteren" },
          { en: "Serve their community", es: "Servir a su comunidad", de: "Ihrer Gemeinde dienen", nl: "Hun gemeenschap dienen" },
          { en: "Study history", es: "Estudiar historia", de: "Geschichte studieren", nl: "Geschiedenis bestuderen" },
          { en: "Plant trees", es: "Plantar árboles", de: "Bäume pflanzen", nl: "Bomen planten" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nelson Mandela International Day, established by the UN in 2009, asks people to spend 67 minutes doing something good for others. The 67 minutes represent the 67 years Mandela devoted to public service and the fight for social justice. Activities can include volunteering, helping those in need, or community service. The day celebrates Mandela's legacy and encourages everyone to take action to help create a better world.",
          es: "El Día Internacional de Nelson Mandela, establecido por la ONU en 2009, pide a las personas que pasen 67 minutos haciendo algo bueno por los demás. Los 67 minutos representan los 67 años que Mandela dedicó al servicio público y la lucha por la justicia social. Las actividades pueden incluir voluntariado, ayudar a los necesitados o servicio comunitario. El día celebra el legado de Mandela y alienta a todos a tomar acción para ayudar a crear un mundo mejor.",
          de: "Der Nelson Mandela Internationale Tag, 2009 von der UN eingeführt, bittet die Menschen, 67 Minuten damit zu verbringen, etwas Gutes für andere zu tun. Die 67 Minuten repräsentieren die 67 Jahre, die Mandela dem öffentlichen Dienst und dem Kampf für soziale Gerechtigkeit widmete. Aktivitäten können Freiwilligenarbeit, Hilfe für Bedürftige oder Gemeindedienst umfassen. Der Tag feiert Mandelas Vermächtnis und ermutigt jeden, Maßnahmen zu ergreifen, um eine bessere Welt zu schaffen.",
          nl: "Nelson Mandela Internationale Dag, opgericht door de VN in 2009, vraagt mensen om 67 minuten te besteden aan iets goeds doen voor anderen. De 67 minuten vertegenwoordigen de 67 jaar die Mandela wijdde aan openbare dienst en de strijd voor sociale rechtvaardigheid. Activiteiten kunnen vrijwilligerswerk, hulp aan mensen in nood of gemeenschapsdienst omvatten. De dag viert Mandela's nalatenschap en moedigt iedereen aan om actie te ondernemen om een betere wereld te creëren."
        }
      }
    ],

    // Day 19 - July 19th: First Tour de France Finish, Edgar Degas Born, Women Lawyers UK, First Color TV, Charles Mayo Born
    day19: [
      {
        question: {
          en: "Which famous cycling race finished for the first time on July 19, 1903?",
          es: "¿Qué famosa carrera ciclista terminó por primera vez el 19 de julio de 1903?",
          de: "Welches berühmte Radrennen endete zum ersten Mal am 19. Juli 1903?",
          nl: "Welke beroemde wielerwedstrijd eindigde voor het eerst op 19 juli 1903?"
        },
        options: [
          { en: "Giro d'Italia", es: "Giro de Italia", de: "Giro d'Italia", nl: "Giro d'Italia" },
          { en: "Vuelta a España", es: "Vuelta a España", de: "Vuelta a España", nl: "Vuelta a España" },
          { en: "Tour de France", es: "Tour de Francia", de: "Tour de France", nl: "Tour de France" },
          { en: "Paris-Roubaix", es: "París-Roubaix", de: "Paris-Roubaix", nl: "Parijs-Roubaix" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first Tour de France concluded on July 19, 1903, after 19 days and 2,428 kilometers of racing. Maurice Garin won the inaugural event, finishing ahead of the second-place rider by nearly three hours. The race was created by journalist Géo Lefèvre to boost sales of the newspaper L'Auto. The Tour de France has since become cycling's most prestigious race and one of the world's greatest sporting events.",
          es: "El primer Tour de Francia concluyó el 19 de julio de 1903, después de 19 días y 2,428 kilómetros de carrera. Maurice Garin ganó el evento inaugural, terminando casi tres horas por delante del segundo lugar. La carrera fue creada por el periodista Géo Lefèvre para aumentar las ventas del periódico L'Auto. El Tour de Francia se ha convertido desde entonces en la carrera más prestigiosa del ciclismo y uno de los mayores eventos deportivos del mundo.",
          de: "Die erste Tour de France endete am 19. Juli 1903 nach 19 Tagen und 2.428 Kilometern Rennen. Maurice Garin gewann die Auftaktveranstaltung und lag fast drei Stunden vor dem Zweitplatzierten. Das Rennen wurde vom Journalisten Géo Lefèvre ins Leben gerufen, um die Verkäufe der Zeitung L'Auto anzukurbeln. Die Tour de France ist seitdem das prestigeträchtigste Radrennen und eines der größten Sportereignisse der Welt geworden.",
          nl: "De eerste Tour de France eindigde op 19 juli 1903, na 19 dagen en 2.428 kilometer racen. Maurice Garin won het inaugurele evenement en eindigde bijna drie uur voor de tweede plaats. De race werd gecreëerd door journalist Géo Lefèvre om de verkoop van de krant L'Auto te stimuleren. De Tour de France is sindsdien de meest prestigieuze wielerwedstrijd en een van 's werelds grootste sportevenementen geworden."
        }
      },
      {
        question: {
          en: "Which famous French Impressionist painter was born on July 19, 1834?",
          es: "¿Qué famoso pintor impresionista francés nació el 19 de julio de 1834?",
          de: "Welcher berühmte französische impressionistische Maler wurde am 19. Juli 1834 geboren?",
          nl: "Welke beroemde Franse impressionistische schilder werd geboren op 19 juli 1834?"
        },
        options: [
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Pierre-Auguste Renoir", es: "Pierre-Auguste Renoir", de: "Pierre-Auguste Renoir", nl: "Pierre-Auguste Renoir" },
          { en: "Edgar Degas", es: "Edgar Degas", de: "Edgar Degas", nl: "Edgar Degas" },
          { en: "Camille Pissarro", es: "Camille Pissarro", de: "Camille Pissarro", nl: "Camille Pissarro" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Edgar Degas was born on July 19, 1834, in Paris. While associated with the Impressionists, he preferred to be called a Realist. Degas is famous for his paintings, sculptures, and drawings, particularly of ballet dancers, racetracks, and café scenes. His works like 'The Dance Class' and 'L'Absinthe' capture movement and everyday life with remarkable precision. His innovative compositions and use of light influenced generations of artists.",
          es: "Edgar Degas nació el 19 de julio de 1834 en París. Aunque asociado con los impresionistas, prefería ser llamado realista. Degas es famoso por sus pinturas, esculturas y dibujos, particularmente de bailarinas de ballet, hipódromos y escenas de café. Sus obras como 'La clase de danza' y 'L'Absinthe' capturan el movimiento y la vida cotidiana con notable precisión. Sus composiciones innovadoras y uso de la luz influyeron en generaciones de artistas.",
          de: "Edgar Degas wurde am 19. Juli 1834 in Paris geboren. Obwohl mit den Impressionisten verbunden, bezeichnete er sich lieber als Realist. Degas ist berühmt für seine Gemälde, Skulpturen und Zeichnungen, besonders von Balletttänzerinnen, Rennbahnen und Café-Szenen. Seine Werke wie 'Die Tanzklasse' und 'L'Absinthe' fangen Bewegung und Alltagsleben mit bemerkenswerter Präzision ein. Seine innovativen Kompositionen und Lichtnutzung beeinflussten Generationen von Künstlern.",
          nl: "Edgar Degas werd geboren op 19 juli 1834 in Parijs. Hoewel geassocieerd met de impressionisten, verkoos hij zichzelf een realist te noemen. Degas is beroemd om zijn schilderijen, sculpturen en tekeningen, vooral van balletdanseressen, renbanen en cafétaferelen. Zijn werken zoals 'De dansles' en 'L'Absinthe' vangen beweging en het dagelijks leven met opmerkelijke precisie. Zijn innovatieve composities en gebruik van licht beïnvloedden generaties kunstenaars."
        }
      },
      {
        question: {
          en: "On July 19, 1919, what milestone was achieved for women's rights in the United Kingdom?",
          es: "El 19 de julio de 1919, ¿qué hito se logró para los derechos de las mujeres en el Reino Unido?",
          de: "Welcher Meilenstein für Frauenrechte wurde am 19. Juli 1919 im Vereinigten Königreich erreicht?",
          nl: "Welke mijlpaal werd op 19 juli 1919 bereikt voor vrouwenrechten in het Verenigd Koninkrijk?"
        },
        options: [
          { en: "Women gained the right to vote", es: "Las mujeres obtuvieron el derecho al voto", de: "Frauen erhielten das Wahlrecht", nl: "Vrouwen kregen stemrecht" },
          { en: "Women were allowed to practice law", es: "A las mujeres se les permitió ejercer la abogacía", de: "Frauen durften als Anwältinnen arbeiten", nl: "Vrouwen mochten advocaat worden" },
          { en: "Women could own property", es: "Las mujeres podían poseer propiedades", de: "Frauen konnten Eigentum besitzen", nl: "Vrouwen konden eigendom bezitten" },
          { en: "Women were admitted to universities", es: "Las mujeres fueron admitidas en universidades", de: "Frauen wurden an Universitäten zugelassen", nl: "Vrouwen werden toegelaten tot universiteiten" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On July 19, 1919, the Sex Disqualification (Removal) Act was passed in the UK, allowing women to practice law and become solicitors and barristers. This groundbreaking legislation removed barriers that had prevented women from entering legal professions. It also opened other professions and public offices to women. The first woman to be admitted as a solicitor in England was Carrie Morrison in December 1922.",
          es: "El 19 de julio de 1919, se aprobó la Ley de Eliminación de Descalificación por Sexo en el Reino Unido, permitiendo a las mujeres ejercer la abogacía y convertirse en procuradoras y abogadas. Esta legislación revolucionaria eliminó las barreras que habían impedido a las mujeres ingresar a las profesiones legales. También abrió otras profesiones y cargos públicos a las mujeres. La primera mujer admitida como procuradora en Inglaterra fue Carrie Morrison en diciembre de 1922.",
          de: "Am 19. Juli 1919 wurde im Vereinigten Königreich der Sex Disqualification (Removal) Act verabschiedet, der Frauen erlaubte, als Rechtsanwältinnen zu praktizieren und Solicitors und Barristers zu werden. Diese bahnbrechende Gesetzgebung beseitigte Barrieren, die Frauen daran gehindert hatten, in juristische Berufe einzutreten. Sie öffnete auch andere Berufe und öffentliche Ämter für Frauen. Die erste Frau, die als Solicitor in England zugelassen wurde, war Carrie Morrison im Dezember 1922.",
          nl: "Op 19 juli 1919 werd de Sex Disqualification (Removal) Act aangenomen in het VK, waardoor vrouwen advocaat mochten worden en solicitors en barristers konden worden. Deze baanbrekende wetgeving verwijderde barrières die vrouwen hadden verhinderd om juridische beroepen te betreden. Het opende ook andere beroepen en openbare functies voor vrouwen. De eerste vrouw die werd toegelaten als solicitor in Engeland was Carrie Morrison in december 1922."
        }
      },
      {
        question: {
          en: "What television milestone occurred on July 19, 1941?",
          es: "¿Qué hito de la televisión ocurrió el 19 de julio de 1941?",
          de: "Welcher Fernsehmeilenstein ereignete sich am 19. Juli 1941?",
          nl: "Welke televisiemijlpaal vond plaats op 19 juli 1941?"
        },
        options: [
          { en: "First TV broadcast", es: "Primera transmisión de TV", de: "Erste TV-Übertragung", nl: "Eerste tv-uitzending" },
          { en: "First color TV transmission", es: "Primera transmisión de TV en color", de: "Erste Farbfernsehübertragung", nl: "Eerste kleurentelevisie-uitzending" },
          { en: "First satellite TV", es: "Primera TV satelital", de: "Erstes Satellitenfernsehen", nl: "Eerste satelliet-tv" },
          { en: "First TV commercial", es: "Primer comercial de TV", de: "Erste TV-Werbung", nl: "Eerste tv-reclame" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On July 19, 1941, CBS conducted the first public color television transmission in New York. The experimental broadcast demonstrated the potential of color TV technology, though it would be years before color broadcasting became standard. The broadcast featured a variety show and demonstrated the vibrancy of color television. Commercial color TV broadcasts wouldn't begin in earnest until the 1950s, and color TV sets didn't become common in homes until the 1960s.",
          es: "El 19 de julio de 1941, CBS realizó la primera transmisión pública de televisión en color en Nueva York. La transmisión experimental demostró el potencial de la tecnología de TV en color, aunque pasarían años antes de que las transmisiones en color se volvieran estándar. La transmisión presentó un programa de variedades y demostró la vitalidad de la televisión en color. Las transmisiones comerciales de TV en color no comenzarían en serio hasta la década de 1950, y los televisores en color no se volvieron comunes en los hogares hasta la década de 1960.",
          de: "Am 19. Juli 1941 führte CBS die erste öffentliche Farbfernsehübertragung in New York durch. Die experimentelle Sendung demonstrierte das Potenzial der Farbfernsehtechnologie, obwohl es Jahre dauern würde, bis Farbübertragungen zum Standard wurden. Die Sendung zeigte eine Varieté-Show und demonstrierte die Lebendigkeit des Farbfernsehens. Kommerzielle Farbfernsehübertragungen begannen erst in den 1950er Jahren ernsthaft, und Farbfernseher wurden erst in den 1960er Jahren in Haushalten üblich.",
          nl: "Op 19 juli 1941 voerde CBS de eerste publieke kleurentelevisie-uitzending uit in New York. De experimentele uitzending toonde het potentieel van kleurentelevisietechnologie, hoewel het jaren zou duren voordat kleurenuitzendingen standaard werden. De uitzending presenteerde een variétéshow en demonstreerde de levendigheid van kleurentelevisie. Commerciële kleurenuitzendingen begonnen pas serieus in de jaren 1950, en kleurentelevisies werden pas gebruikelijk in huizen in de jaren 1960."
        }
      },
      {
        question: {
          en: "Which co-founder of the famous Mayo Clinic was born on July 19, 1865?",
          es: "¿Qué cofundador de la famosa Clínica Mayo nació el 19 de julio de 1865?",
          de: "Welcher Mitbegründer der berühmten Mayo-Klinik wurde am 19. Juli 1865 geboren?",
          nl: "Welke medeoprichter van de beroemde Mayo Clinic werd geboren op 19 juli 1865?"
        },
        options: [
          { en: "William Mayo", es: "William Mayo", de: "William Mayo", nl: "William Mayo" },
          { en: "Charles Mayo", es: "Charles Mayo", de: "Charles Mayo", nl: "Charles Mayo" },
          { en: "Henry Mayo", es: "Henry Mayo", de: "Henry Mayo", nl: "Henry Mayo" },
          { en: "Joseph Mayo", es: "Joseph Mayo", de: "Joseph Mayo", nl: "Joseph Mayo" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Charles Horace Mayo was born on July 19, 1865, in Rochester, Minnesota. Along with his brother William, he founded the Mayo Clinic with their father, Dr. William Worrall Mayo. Charles specialized in surgery and became renowned for his surgical innovations and techniques. The Mayo Clinic became one of the world's leading medical centers, known for its integrated group practice model and commitment to patient care, research, and education.",
          es: "Charles Horace Mayo nació el 19 de julio de 1865 en Rochester, Minnesota. Junto con su hermano William, fundó la Clínica Mayo con su padre, el Dr. William Worrall Mayo. Charles se especializó en cirugía y se hizo famoso por sus innovaciones y técnicas quirúrgicas. La Clínica Mayo se convirtió en uno de los centros médicos líderes del mundo, conocida por su modelo de práctica grupal integrada y compromiso con la atención al paciente, la investigación y la educación.",
          de: "Charles Horace Mayo wurde am 19. Juli 1865 in Rochester, Minnesota, geboren. Zusammen mit seinem Bruder William gründete er mit ihrem Vater, Dr. William Worrall Mayo, die Mayo-Klinik. Charles spezialisierte sich auf Chirurgie und wurde für seine chirurgischen Innovationen und Techniken bekannt. Die Mayo-Klinik wurde zu einem der führenden medizinischen Zentren der Welt, bekannt für ihr integriertes Gruppenpraxismodell und ihr Engagement für Patientenversorgung, Forschung und Ausbildung.",
          nl: "Charles Horace Mayo werd geboren op 19 juli 1865 in Rochester, Minnesota. Samen met zijn broer William richtte hij met hun vader, Dr. William Worrall Mayo, de Mayo Clinic op. Charles specialiseerde zich in chirurgie en werd bekend om zijn chirurgische innovaties en technieken. De Mayo Clinic werd een van 's werelds toonaangevende medische centra, bekend om zijn geïntegreerde groepspraktijkmodel en toewijding aan patiëntenzorg, onderzoek en onderwijs."
        }
      }
    ],

    // Day 20 - July 20th: Moon Landing, Hitler Assassination Attempt, Colombia Independence, Viking 1 Mars, Bruce Lee Dies
    day20: [
      {
        question: {
          en: "On July 20, 1969, Neil Armstrong became the first person to walk on the Moon. What were his famous first words?",
          es: "El 20 de julio de 1969, Neil Armstrong se convirtió en la primera persona en caminar sobre la Luna. ¿Cuáles fueron sus famosas primeras palabras?",
          de: "Am 20. Juli 1969 wurde Neil Armstrong der erste Mensch, der auf dem Mond ging. Was waren seine berühmten ersten Worte?",
          nl: "Op 20 juli 1969 werd Neil Armstrong de eerste persoon die op de Maan liep. Wat waren zijn beroemde eerste woorden?"
        },
        options: [
          { en: "One giant leap for mankind", es: "Un salto gigante para la humanidad", de: "Ein riesiger Sprung für die Menschheit", nl: "Een reuzensprong voor de mensheid" },
          { en: "One small step for man", es: "Un pequeño paso para el hombre", de: "Ein kleiner Schritt für einen Menschen", nl: "Een kleine stap voor de mens" },
          { en: "Houston, we've landed", es: "Houston, hemos aterrizado", de: "Houston, wir sind gelandet", nl: "Houston, we zijn geland" },
          { en: "The Eagle has landed", es: "El Águila ha aterrizado", de: "Der Adler ist gelandet", nl: "De adelaar is geland" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Neil Armstrong's famous words were: 'That's one small step for man, one giant leap for mankind.' This historic moment occurred at 10:56 PM EDT on July 20, 1969, when Armstrong descended the lunar module's ladder and stepped onto the Moon's surface. Buzz Aldrin joined him about 20 minutes later. They spent about two and a half hours on the lunar surface, collecting samples and conducting experiments, while Michael Collins orbited above in the command module.",
          es: "Las famosas palabras de Neil Armstrong fueron: 'Ese es un pequeño paso para el hombre, un salto gigante para la humanidad'. Este momento histórico ocurrió a las 10:56 PM EDT el 20 de julio de 1969, cuando Armstrong descendió por la escalera del módulo lunar y pisó la superficie de la Luna. Buzz Aldrin se le unió unos 20 minutos después. Pasaron aproximadamente dos horas y media en la superficie lunar, recolectando muestras y realizando experimentos, mientras Michael Collins orbitaba arriba en el módulo de comando.",
          de: "Neil Armstrongs berühmte Worte waren: 'Das ist ein kleiner Schritt für einen Menschen, ein riesiger Sprung für die Menschheit.' Dieser historische Moment ereignete sich um 22:56 Uhr EDT am 20. Juli 1969, als Armstrong die Leiter des Mondmoduls hinabstieg und auf die Mondoberfläche trat. Buzz Aldrin gesellte sich etwa 20 Minuten später zu ihm. Sie verbrachten etwa zweieinhalb Stunden auf der Mondoberfläche, sammelten Proben und führten Experimente durch, während Michael Collins im Kommandomodul darüber kreiste.",
          nl: "Neil Armstrongs beroemde woorden waren: 'Dat is een kleine stap voor de mens, een reuzensprong voor de mensheid.' Dit historische moment vond plaats om 22:56 uur EDT op 20 juli 1969, toen Armstrong de ladder van de maanmodule afdaalde en op het maanoppervlak stapte. Buzz Aldrin voegde zich ongeveer 20 minuten later bij hem. Ze brachten ongeveer twee en een half uur door op het maanoppervlak, verzamelden monsters en voerden experimenten uit, terwijl Michael Collins in de commandomodule daarboven cirkelde."
        }
      },
      {
        question: {
          en: "On July 20, 1944, who survived an assassination attempt at his headquarters in East Prussia?",
          es: "El 20 de julio de 1944, ¿quién sobrevivió a un intento de asesinato en su cuartel general en Prusia Oriental?",
          de: "Wer überlebte am 20. Juli 1944 ein Attentat in seinem Hauptquartier in Ostpreußen?",
          nl: "Wie overleefde op 20 juli 1944 een moordaanslag in zijn hoofdkwartier in Oost-Pruisen?"
        },
        options: [
          { en: "Benito Mussolini", es: "Benito Mussolini", de: "Benito Mussolini", nl: "Benito Mussolini" },
          { en: "Joseph Stalin", es: "Joseph Stalin", de: "Joseph Stalin", nl: "Joseph Stalin" },
          { en: "Adolf Hitler", es: "Adolf Hitler", de: "Adolf Hitler", nl: "Adolf Hitler" },
          { en: "Winston Churchill", es: "Winston Churchill", de: "Winston Churchill", nl: "Winston Churchill" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On July 20, 1944, a group of German officers led by Colonel Claus von Stauffenberg attempted to assassinate Adolf Hitler at the Wolf's Lair headquarters. A briefcase bomb exploded during a meeting, but Hitler survived with minor injuries due to the heavy conference table that shielded him. The conspirators, part of Operation Valkyrie, planned to overthrow the Nazi regime. The plot's failure led to brutal reprisals, with about 5,000 people executed, including Stauffenberg.",
          es: "El 20 de julio de 1944, un grupo de oficiales alemanes liderados por el coronel Claus von Stauffenberg intentó asesinar a Adolf Hitler en el cuartel general Guarida del Lobo. Explotó una bomba en un maletín durante una reunión, pero Hitler sobrevivió con heridas menores debido a la pesada mesa de conferencias que lo protegió. Los conspiradores, parte de la Operación Valquiria, planeaban derrocar al régimen nazi. El fracaso del complot llevó a represalias brutales, con unas 5,000 personas ejecutadas, incluido Stauffenberg.",
          de: "Am 20. Juli 1944 versuchte eine Gruppe deutscher Offiziere unter Führung von Oberst Claus von Stauffenberg, Adolf Hitler im Hauptquartier Wolfsschanze zu ermorden. Eine Aktentaschenbombe explodierte während einer Besprechung, aber Hitler überlebte mit leichten Verletzungen dank des schweren Konferenztisches, der ihn schützte. Die Verschwörer, Teil der Operation Walküre, planten, das Nazi-Regime zu stürzen. Das Scheitern des Attentats führte zu brutalen Vergeltungsmaßnahmen, bei denen etwa 5.000 Menschen hingerichtet wurden, darunter Stauffenberg.",
          nl: "Op 20 juli 1944 probeerde een groep Duitse officieren onder leiding van kolonel Claus von Stauffenberg Adolf Hitler te vermoorden in het Wolfsschans-hoofdkwartier. Een aktetas met een bom ontplofte tijdens een vergadering, maar Hitler overleefde met lichte verwondingen dankzij de zware conferentietafel die hem beschermde. De samenzweerders, onderdeel van Operatie Walküre, waren van plan het nazi-regime omver te werpen. Het mislukken van het complot leidde tot brute represailles, waarbij ongeveer 5.000 mensen werden geëxecuteerd, waaronder Stauffenberg."
        }
      },
      {
        question: {
          en: "Which South American country declared independence from Spain on July 20, 1810?",
          es: "¿Qué país sudamericano declaró su independencia de España el 20 de julio de 1810?",
          de: "Welches südamerikanische Land erklärte am 20. Juli 1810 seine Unabhängigkeit von Spanien?",
          nl: "Welk Zuid-Amerikaans land verklaarde op 20 juli 1810 zijn onafhankelijkheid van Spanje?"
        },
        options: [
          { en: "Venezuela", es: "Venezuela", de: "Venezuela", nl: "Venezuela" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Colombia declared independence from Spain on July 20, 1810, in an event known as the 'Cry of Independence' or 'Grito de Independencia.' The revolution began in Bogotá when citizens and Creole elites rose up against Spanish colonial rule. While full independence wasn't achieved until after several years of warfare led by Simón Bolívar and others, July 20 is celebrated as Colombia's Independence Day. The independence movement inspired similar revolutions throughout South America.",
          es: "Colombia declaró su independencia de España el 20 de julio de 1810, en un evento conocido como el 'Grito de Independencia'. La revolución comenzó en Bogotá cuando ciudadanos y élites criollas se levantaron contra el dominio colonial español. Aunque la independencia completa no se logró hasta después de varios años de guerra liderada por Simón Bolívar y otros, el 20 de julio se celebra como el Día de la Independencia de Colombia. El movimiento de independencia inspiró revoluciones similares en toda Sudamérica.",
          de: "Kolumbien erklärte am 20. Juli 1810 seine Unabhängigkeit von Spanien, in einem Ereignis, das als 'Schrei der Unabhängigkeit' oder 'Grito de Independencia' bekannt ist. Die Revolution begann in Bogotá, als Bürger und kreolische Eliten sich gegen die spanische Kolonialherrschaft erhoben. Obwohl die vollständige Unabhängigkeit erst nach mehreren Jahren Kriegsführung unter Simón Bolívar und anderen erreicht wurde, wird der 20. Juli als Kolumbiens Unabhängigkeitstag gefeiert. Die Unabhängigkeitsbewegung inspirierte ähnliche Revolutionen in ganz Südamerika.",
          nl: "Colombia verklaarde op 20 juli 1810 zijn onafhankelijkheid van Spanje, in een gebeurtenis bekend als de 'Schreeuw van Onafhankelijkheid' of 'Grito de Independencia'. De revolutie begon in Bogotá toen burgers en Creoolse elites in opstand kwamen tegen de Spaanse koloniale heerschappij. Hoewel volledige onafhankelijkheid pas werd bereikt na meerdere jaren oorlogvoering onder leiding van Simón Bolívar en anderen, wordt 20 juli gevierd als Colombia's Onafhankelijkheidsdag. De onafhankelijkheidsbeweging inspireerde vergelijkbare revoluties in heel Zuid-Amerika."
        }
      },
      {
        question: {
          en: "Which NASA spacecraft successfully landed on Mars on July 20, 1976?",
          es: "¿Qué nave espacial de la NASA aterrizó con éxito en Marte el 20 de julio de 1976?",
          de: "Welche NASA-Raumsonde landete erfolgreich auf dem Mars am 20. Juli 1976?",
          nl: "Welk NASA-ruimtevaartuig landde succesvol op Mars op 20 juli 1976?"
        },
        options: [
          { en: "Mariner 9", es: "Mariner 9", de: "Mariner 9", nl: "Mariner 9" },
          { en: "Viking 1", es: "Viking 1", de: "Viking 1", nl: "Viking 1" },
          { en: "Pathfinder", es: "Pathfinder", de: "Pathfinder", nl: "Pathfinder" },
          { en: "Spirit", es: "Spirit", de: "Spirit", nl: "Spirit" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Viking 1 successfully landed on Mars on July 20, 1976, becoming the first American spacecraft to land on the Red Planet and send back images from the surface. The lander operated for over six years, far exceeding its planned 90-day mission. It conducted experiments searching for signs of life, analyzed soil and rock samples, and studied Martian weather. Viking 1's sister spacecraft, Viking 2, landed on Mars six weeks later. Together, they revolutionized our understanding of Mars.",
          es: "Viking 1 aterrizó con éxito en Marte el 20 de julio de 1976, convirtiéndose en la primera nave espacial estadounidense en aterrizar en el Planeta Rojo y enviar imágenes desde la superficie. El módulo de aterrizaje operó durante más de seis años, superando con creces su misión planificada de 90 días. Realizó experimentos buscando señales de vida, analizó muestras de suelo y roca, y estudió el clima marciano. La nave espacial hermana de Viking 1, Viking 2, aterrizó en Marte seis semanas después. Juntas, revolucionaron nuestra comprensión de Marte.",
          de: "Viking 1 landete erfolgreich auf dem Mars am 20. Juli 1976 und wurde das erste amerikanische Raumschiff, das auf dem Roten Planeten landete und Bilder von der Oberfläche zurückschickte. Der Lander war über sechs Jahre in Betrieb und übertraf damit bei weitem seine geplante 90-Tage-Mission. Er führte Experimente auf der Suche nach Lebenszeichen durch, analysierte Boden- und Gesteinsproben und studierte das marsianische Wetter. Vikings 1 Schwestersonde, Viking 2, landete sechs Wochen später auf dem Mars. Zusammen revolutionierten sie unser Verständnis des Mars.",
          nl: "Viking 1 landde succesvol op Mars op 20 juli 1976 en werd het eerste Amerikaanse ruimtevaartuig dat op de Rode Planeet landde en beelden vanaf het oppervlak terugstuurde. De lander werkte meer dan zes jaar, wat zijn geplande 90-daagse missie verre overtrof. Hij voerde experimenten uit op zoek naar tekenen van leven, analyseerde bodem- en gesteentemonsters, en bestudeerde het weer op Mars. Vikings 1 zusterruimtevaartuig, Viking 2, landde zes weken later op Mars. Samen revolutioneerden ze ons begrip van Mars."
        }
      },
      {
        question: {
          en: "Which legendary martial arts actor and cultural icon died on July 20, 1973?",
          es: "¿Qué legendario actor de artes marciales e ícono cultural murió el 20 de julio de 1973?",
          de: "Welcher legendäre Kampfkunstschauspieler und kulturelle Ikone starb am 20. Juli 1973?",
          nl: "Welke legendarische martial arts-acteur en culturele icoon stierf op 20 juli 1973?"
        },
        options: [
          { en: "Chuck Norris", es: "Chuck Norris", de: "Chuck Norris", nl: "Chuck Norris" },
          { en: "Jackie Chan", es: "Jackie Chan", de: "Jackie Chan", nl: "Jackie Chan" },
          { en: "Bruce Lee", es: "Bruce Lee", de: "Bruce Lee", nl: "Bruce Lee" },
          { en: "Jet Li", es: "Jet Li", de: "Jet Li", nl: "Jet Li" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Bruce Lee died tragically on July 20, 1973, in Hong Kong at age 32. His death was attributed to cerebral edema. Lee revolutionized martial arts cinema and broke down racial barriers in Hollywood. He developed his own martial arts philosophy, Jeet Kune Do, emphasizing practicality and efficiency. His films like 'Enter the Dragon' became international hits. Despite his short career, Lee's impact on martial arts, film, and popular culture remains immense, inspiring generations of martial artists and actors.",
          es: "Bruce Lee murió trágicamente el 20 de julio de 1973 en Hong Kong a los 32 años. Su muerte se atribuyó a edema cerebral. Lee revolucionó el cine de artes marciales y rompió barreras raciales en Hollywood. Desarrolló su propia filosofía de artes marciales, Jeet Kune Do, enfatizando la practicidad y eficiencia. Sus películas como 'Operación Dragón' se convirtieron en éxitos internacionales. A pesar de su corta carrera, el impacto de Lee en las artes marciales, el cine y la cultura popular sigue siendo inmenso, inspirando a generaciones de artistas marciales y actores.",
          de: "Bruce Lee starb tragisch am 20. Juli 1973 in Hongkong im Alter von 32 Jahren. Sein Tod wurde auf ein Hirnödem zurückgeführt. Lee revolutionierte das Kampfkunstkino und durchbrach Rassenbarrieren in Hollywood. Er entwickelte seine eigene Kampfkunstphilosophie, Jeet Kune Do, die Praktikabilität und Effizienz betonte. Seine Filme wie 'Enter the Dragon' wurden internationale Hits. Trotz seiner kurzen Karriere bleibt Lees Einfluss auf Kampfkunst, Film und Popkultur immens und inspiriert Generationen von Kampfkünstlern und Schauspielern.",
          nl: "Bruce Lee stierf tragisch op 20 juli 1973 in Hong Kong op 32-jarige leeftijd. Zijn dood werd toegeschreven aan hersenzwelling. Lee revolutioneerde martial arts-cinema en doorbrak raciale barrières in Hollywood. Hij ontwikkelde zijn eigen martial arts-filosofie, Jeet Kune Do, met nadruk op praktisch heid en efficiëntie. Zijn films zoals 'Enter the Dragon' werden internationale hits. Ondanks zijn korte carrière blijft Lee's impact op martial arts, film en populaire cultuur immens, en inspireert hij generaties martial artists en acteurs."
        }
      }
    ],

    // Day 21 - July 21st: Ernest Hemingway Born, Robin Williams Born, Belgium Independence, First Bull Run, Belgium National Day
    day21: [
      {
        question: {
          en: "Which Nobel Prize-winning author of 'The Old Man and the Sea' was born on July 21, 1899?",
          es: "¿Qué autor ganador del Premio Nobel de 'El viejo y el mar' nació el 21 de julio de 1899?",
          de: "Welcher Nobelpreisträger und Autor von 'Der alte Mann und das Meer' wurde am 21. Juli 1899 geboren?",
          nl: "Welke Nobelprijswinnende auteur van 'De oude man en de zee' werd geboren op 21 juli 1899?"
        },
        options: [
          { en: "F. Scott Fitzgerald", es: "F. Scott Fitzgerald", de: "F. Scott Fitzgerald", nl: "F. Scott Fitzgerald" },
          { en: "William Faulkner", es: "William Faulkner", de: "William Faulkner", nl: "William Faulkner" },
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ernest Hemingway was born on July 21, 1899, in Oak Park, Illinois. He became one of the most influential American writers of the 20th century, known for his economical and understated writing style. His major works include 'The Sun Also Rises,' 'A Farewell to Arms,' 'For Whom the Bell Tolls,' and 'The Old Man and the Sea,' which won the Pulitzer Prize. He received the Nobel Prize in Literature in 1954 for his mastery of narrative art.",
          es: "Ernest Hemingway nació el 21 de julio de 1899 en Oak Park, Illinois. Se convirtió en uno de los escritores estadounidenses más influyentes del siglo XX, conocido por su estilo de escritura económico y sobrio. Sus obras principales incluyen 'Fiesta,' 'Adiós a las armas,' 'Por quién doblan las campanas' y 'El viejo y el mar,' que ganó el Premio Pulitzer. Recibió el Premio Nobel de Literatura en 1954 por su dominio del arte narrativo.",
          de: "Ernest Hemingway wurde am 21. Juli 1899 in Oak Park, Illinois, geboren. Er wurde einer der einflussreichsten amerikanischen Schriftsteller des 20. Jahrhunderts, bekannt für seinen sparsamen und zurückhaltenden Schreibstil. Zu seinen Hauptwerken gehören 'Fiesta,' 'In einem anderen Land,' 'Wem die Stunde schlägt' und 'Der alte Mann und das Meer,' das den Pulitzer-Preis gewann. Er erhielt 1954 den Nobelpreis für Literatur für seine Meisterschaft in der Erzählkunst.",
          nl: "Ernest Hemingway werd geboren op 21 juli 1899 in Oak Park, Illinois. Hij werd een van de meest invloedrijke Amerikaanse schrijvers van de 20e eeuw, bekend om zijn zuinige en ingetogen schrijfstijl. Zijn belangrijkste werken omvatten 'Fiësta,' 'Vaarwel wapenen,' 'Voor wie de klok luidt' en 'De oude man en de zee,' dat de Pulitzerprijs won. Hij ontving de Nobelprijs voor Literatuur in 1954 voor zijn meesterschap in de vertelkunst."
        }
      },
      {
        question: {
          en: "Which beloved comedian and actor, known for 'Good Morning, Vietnam' and 'Mrs. Doubtfire,' was born on July 21, 1951?",
          es: "¿Qué querido comediante y actor, conocido por 'Good Morning, Vietnam' y 'Mrs. Doubtfire,' nació el 21 de julio de 1951?",
          de: "Welcher geliebte Komiker und Schauspieler, bekannt für 'Good Morning, Vietnam' und 'Mrs. Doubtfire,' wurde am 21. Juli 1951 geboren?",
          nl: "Welke geliefde komiek en acteur, bekend van 'Good Morning, Vietnam' en 'Mrs. Doubtfire,' werd geboren op 21 juli 1951?"
        },
        options: [
          { en: "Steve Martin", es: "Steve Martin", de: "Steve Martin", nl: "Steve Martin" },
          { en: "Bill Murray", es: "Bill Murray", de: "Bill Murray", nl: "Bill Murray" },
          { en: "Robin Williams", es: "Robin Williams", de: "Robin Williams", nl: "Robin Williams" },
          { en: "Eddie Murphy", es: "Eddie Murphy", de: "Eddie Murphy", nl: "Eddie Murphy" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Robin Williams was born on July 21, 1951, in Chicago. He became one of the most versatile and beloved entertainers, starting in stand-up comedy and television with 'Mork & Mindy.' His film career spanned drama and comedy, with memorable roles in 'Dead Poets Society,' 'Good Will Hunting' (for which he won an Oscar), 'Aladdin,' and many others. Known for his rapid-fire improvisation and warm humanity, Williams left an indelible mark on entertainment before his death in 2014.",
          es: "Robin Williams nació el 21 de julio de 1951 en Chicago. Se convirtió en uno de los artistas más versátiles y queridos, comenzando en la comedia stand-up y la televisión con 'Mork & Mindy'. Su carrera cinematográfica abarcó drama y comedia, con papeles memorables en 'La sociedad de los poetas muertos,' 'El indomable Will Hunting' (por la cual ganó un Oscar), 'Aladdin' y muchas otras. Conocido por su improvisación vertiginosa y su cálida humanidad, Williams dejó una marca indeleble en el entretenimiento antes de su muerte en 2014.",
          de: "Robin Williams wurde am 21. Juli 1951 in Chicago geboren. Er wurde einer der vielseitigsten und beliebtesten Entertainer, beginnend in Stand-up-Comedy und Fernsehen mit 'Mork vom Ork'. Seine Filmkarriere umfasste Drama und Komödie, mit unvergesslichen Rollen in 'Der Club der toten Dichter,' 'Good Will Hunting' (wofür er einen Oscar gewann), 'Aladdin' und vielen anderen. Bekannt für seine blitzschnelle Improvisation und warme Menschlichkeit, hinterließ Williams vor seinem Tod 2014 einen unauslöschlichen Eindruck in der Unterhaltungsbranche.",
          nl: "Robin Williams werd geboren op 21 juli 1951 in Chicago. Hij werd een van de meest veelzijdige en geliefde entertainers, beginnend in stand-up comedy en televisie met 'Mork & Mindy'. Zijn filmcarrière omvatte drama en komedie, met memorabele rollen in 'Dead Poets Society,' 'Good Will Hunting' (waarvoor hij een Oscar won), 'Aladdin' en vele anderen. Bekend om zijn razendsnelle improvisatie en warme menselijkheid, liet Williams een onuitwisbare indruk achter op entertainment voor zijn dood in 2014."
        }
      },
      {
        question: {
          en: "Which European country declared independence from the Netherlands on July 21, 1831?",
          es: "¿Qué país europeo declaró su independencia de los Países Bajos el 21 de julio de 1831?",
          de: "Welches europäische Land erklärte am 21. Juli 1831 seine Unabhängigkeit von den Niederlanden?",
          nl: "Welk Europees land verklaarde op 21 juli 1831 zijn onafhankelijkheid van Nederland?"
        },
        options: [
          { en: "Luxembourg", es: "Luxemburgo", de: "Luxemburg", nl: "Luxemburg" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" },
          { en: "Austria", es: "Austria", de: "Österreich", nl: "Oostenrijk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Belgium declared independence from the Netherlands on July 21, 1831, when Leopold I took his oath as the first King of the Belgians. The Belgian Revolution had begun in 1830, inspired by the July Revolution in France. The independence was internationally recognized, and Belgium became a constitutional monarchy. July 21 is celebrated annually as Belgium's National Day, featuring military parades, fireworks, and festivities. The country chose a constitutional monarchy with strong democratic institutions.",
          es: "Bélgica declaró su independencia de los Países Bajos el 21 de julio de 1831, cuando Leopoldo I prestó juramento como el primer Rey de los Belgas. La Revolución Belga había comenzado en 1830, inspirada por la Revolución de Julio en Francia. La independencia fue reconocida internacionalmente y Bélgica se convirtió en una monarquía constitucional. El 21 de julio se celebra anualmente como el Día Nacional de Bélgica, con desfiles militares, fuegos artificiales y festividades. El país eligió una monarquía constitucional con instituciones democráticas fuertes.",
          de: "Belgien erklärte am 21. Juli 1831 seine Unabhängigkeit von den Niederlanden, als Leopold I. seinen Eid als erster König der Belgier ablegte. Die Belgische Revolution hatte 1830 begonnen, inspiriert durch die Julirevolution in Frankreich. Die Unabhängigkeit wurde international anerkannt, und Belgien wurde eine konstitutionelle Monarchie. Der 21. Juli wird jährlich als Belgiens Nationalfeiertag gefeiert, mit Militärparaden, Feuerwerk und Festlichkeiten. Das Land wählte eine konstitutionelle Monarchie mit starken demokratischen Institutionen.",
          nl: "België verklaarde op 21 juli 1831 zijn onafhankelijkheid van Nederland, toen Leopold I zijn eed aflegde als de eerste Koning der Belgen. De Belgische Revolutie was in 1830 begonnen, geïnspireerd door de Julirevolutie in Frankrijk. De onafhankelijkheid werd internationaal erkend en België werd een constitutionele monarchie. 21 juli wordt jaarlijks gevierd als Belgische Nationale Feestdag, met militaire parades, vuurwerk en festiviteiten. Het land koos voor een constitutionele monarchie met sterke democratische instellingen."
        }
      },
      {
        question: {
          en: "What was the name of the first major land battle of the American Civil War, fought on July 21, 1861?",
          es: "¿Cuál fue el nombre de la primera gran batalla terrestre de la Guerra Civil Estadounidense, librada el 21 de julio de 1861?",
          de: "Wie hieß die erste große Landschlacht des Amerikanischen Bürgerkriegs, die am 21. Juli 1861 stattfand?",
          nl: "Wat was de naam van de eerste grote landslag van de Amerikaanse Burgeroorlog, gevochten op 21 juli 1861?"
        },
        options: [
          { en: "Battle of Gettysburg", es: "Batalla de Gettysburg", de: "Schlacht von Gettysburg", nl: "Slag bij Gettysburg" },
          { en: "Battle of Antietam", es: "Batalla de Antietam", de: "Schlacht am Antietam", nl: "Slag bij Antietam" },
          { en: "First Battle of Bull Run", es: "Primera Batalla de Bull Run", de: "Erste Schlacht am Bull Run", nl: "Eerste Slag bij Bull Run" },
          { en: "Battle of Shiloh", es: "Batalla de Shiloh", de: "Schlacht von Shiloh", nl: "Slag bij Shiloh" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The First Battle of Bull Run (also called First Manassas) was fought on July 21, 1861, near Manassas, Virginia. It was the first major land battle of the American Civil War. Union forces under General Irvin McDowell attacked Confederate troops commanded by Generals Beauregard and Johnston. The Confederates won decisively, shattering Northern hopes for a quick victory. The battle shocked both sides with its violence and casualties, making clear the war would be long and costly.",
          es: "La Primera Batalla de Bull Run (también llamada Primera Manassas) se libró el 21 de julio de 1861, cerca de Manassas, Virginia. Fue la primera gran batalla terrestre de la Guerra Civil Estadounidense. Las fuerzas de la Unión bajo el General Irvin McDowell atacaron a las tropas Confederadas comandadas por los Generales Beauregard y Johnston. Los Confederados ganaron decisivamente, destrozando las esperanzas del Norte de una victoria rápida. La batalla sorprendió a ambos bandos con su violencia y bajas, dejando claro que la guerra sería larga y costosa.",
          de: "Die Erste Schlacht am Bull Run (auch Erste Manassas genannt) fand am 21. Juli 1861 in der Nähe von Manassas, Virginia, statt. Es war die erste große Landschlacht des Amerikanischen Bürgerkriegs. Unionstruppen unter General Irvin McDowell griffen konföderierte Truppen an, die von den Generälen Beauregard und Johnston befehligt wurden. Die Konföderierten siegten entscheidend und zerstörten damit die Hoffnungen des Nordens auf einen schnellen Sieg. Die Schlacht schockierte beide Seiten mit ihrer Gewalt und den Verlusten und machte deutlich, dass der Krieg lang und kostspielig sein würde.",
          nl: "De Eerste Slag bij Bull Run (ook wel Eerste Manassas genoemd) werd gevochten op 21 juli 1861, nabij Manassas, Virginia. Het was de eerste grote landslag van de Amerikaanse Burgeroorlog. Unietroepen onder generaal Irvin McDowell vielen Geconfedereerde troepen aan die werden gecommandeerd door generaals Beauregard en Johnston. De Geconfedereerden wonnen beslissend, wat de hoop van het Noorden op een snelle overwinning verbrijzelde. De slag schokte beide kanten met zijn geweld en slachtoffers, en maakte duidelijk dat de oorlog lang en kostbaar zou zijn."
        }
      },
      {
        question: {
          en: "July 21 is Belgium's National Day. What do Belgians celebrate on this day?",
          es: "El 21 de julio es el Día Nacional de Bélgica. ¿Qué celebran los belgas en este día?",
          de: "Der 21. Juli ist Belgiens Nationalfeiertag. Was feiern die Belgier an diesem Tag?",
          nl: "21 juli is Belgische Nationale Feestdag. Wat vieren Belgen op deze dag?"
        },
        options: [
          { en: "End of World War II", es: "Fin de la Segunda Guerra Mundial", de: "Ende des Zweiten Weltkriegs", nl: "Einde Tweede Wereldoorlog" },
          { en: "King's oath and independence", es: "Juramento del Rey e independencia", de: "Eid des Königs und Unabhängigkeit", nl: "Eed van de Koning en onafhankelijkheid" },
          { en: "Liberation from France", es: "Liberación de Francia", de: "Befreiung von Frankreich", nl: "Bevrijding van Frankrijk" },
          { en: "European Union founding", es: "Fundación de la Unión Europea", de: "Gründung der Europäischen Union", nl: "Oprichting Europese Unie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Belgium's National Day on July 21 commemorates the day in 1831 when Leopold I swore the oath as the first King of the Belgians, marking Belgium's establishment as an independent constitutional monarchy. The day features a military parade in Brussels attended by the Royal Family, a Te Deum service, official receptions, and evening festivities including fireworks. It's a celebration of Belgian independence, democracy, and national unity. The day off work allows Belgians nationwide to celebrate their country's sovereignty and heritage.",
          es: "El Día Nacional de Bélgica el 21 de julio conmemora el día de 1831 cuando Leopoldo I juró como el primer Rey de los Belgas, marcando el establecimiento de Bélgica como una monarquía constitucional independiente. El día presenta un desfile militar en Bruselas al que asiste la Familia Real, un servicio de Te Deum, recepciones oficiales y festividades nocturnas que incluyen fuegos artificiales. Es una celebración de la independencia, la democracia y la unidad nacional belgas. El día libre permite a los belgas de todo el país celebrar la soberanía y el patrimonio de su país.",
          de: "Belgiens Nationalfeiertag am 21. Juli erinnert an den Tag 1831, als Leopold I. den Eid als erster König der Belgier schwor und damit Belgiens Etablierung als unabhängige konstitutionelle Monarchie markierte. Der Tag umfasst eine Militärparade in Brüssel, der die Königliche Familie beiwohnt, einen Te Deum-Gottesdienst, offizielle Empfänge und abendliche Festlichkeiten mit Feuerwerk. Es ist eine Feier der belgischen Unabhängigkeit, Demokratie und nationalen Einheit. Der freie Tag ermöglicht Belgiern landesweit, die Souveränität und das Erbe ihres Landes zu feiern.",
          nl: "Belgische Nationale Feestdag op 21 juli herdenkt de dag in 1831 waarop Leopold I de eed aflegde als de eerste Koning der Belgen, wat de vestiging van België als onafhankelijke constitutionele monarchie markeerde. De dag omvat een militaire parade in Brussel bijgewoond door de Koninklijke Familie, een Te Deum-dienst, officiële recepties en avondfestiviteiten inclusief vuurwerk. Het is een viering van Belgische onafhankelijkheid, democratie en nationale eenheid. De vrije dag stelt Belgen landelings in staat om de soevereiniteit en het erfgoed van hun land te vieren."
        }
      }
    ],

    // Day 22 - July 22nd: Inventions and Discoveries
    day22: [
      {
        question: {
          en: "On July 22, 1933, who became the first person to fly solo around the world?",
          es: "El 22 de julio de 1933, ¿quién se convirtió en la primera persona en volar solo alrededor del mundo?",
          de: "Wer war am 22. Juli 1933 der erste Mensch, der alleine um die Welt flog?",
          nl: "Wie werd op 22 juli 1933 de eerste persoon die solo rond de wereld vloog?"
        },
        options: [
          { en: "Charles Lindbergh", es: "Charles Lindbergh", de: "Charles Lindbergh", nl: "Charles Lindbergh" },
          { en: "Wiley Post", es: "Wiley Post", de: "Wiley Post", nl: "Wiley Post" },
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" },
          { en: "Howard Hughes", es: "Howard Hughes", de: "Howard Hughes", nl: "Howard Hughes" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Wiley Post completed the first solo flight around the world on July 22, 1933, in his plane 'Winnie Mae'. The journey took 7 days, 18 hours, and 49 minutes, covering approximately 15,596 miles. Post was also famous for developing an early pressure suit for high-altitude flying.",
          es: "Wiley Post completó el primer vuelo en solitario alrededor del mundo el 22 de julio de 1933 en su avión 'Winnie Mae'. El viaje duró 7 días, 18 horas y 49 minutos, cubriendo aproximadamente 15,596 millas. Post también fue famoso por desarrollar uno de los primeros trajes presurizados para vuelos a gran altitud.",
          de: "Wiley Post vollendete am 22. Juli 1933 den ersten Alleinflug um die Welt in seinem Flugzeug 'Winnie Mae'. Die Reise dauerte 7 Tage, 18 Stunden und 49 Minuten und umfasste etwa 15.596 Meilen. Post war auch berühmt für die Entwicklung eines frühen Druckanzugs für Höhenflüge.",
          nl: "Wiley Post voltooide op 22 juli 1933 de eerste solovlucht rond de wereld in zijn vliegtuig 'Winnie Mae'. De reis duurde 7 dagen, 18 uur en 49 minuten en besloeg ongeveer 15.596 mijl. Post was ook beroemd om het ontwikkelen van een vroeg drukpak voor hoogterekordvluchten."
        }
      },
      {
        question: {
          en: "Which pop star, known for hits like 'Come & Get It', was born on July 22, 1992?",
          es: "¿Qué estrella del pop, conocida por éxitos como 'Come & Get It', nació el 22 de julio de 1992?",
          de: "Welcher Popstar, bekannt für Hits wie 'Come & Get It', wurde am 22. Juli 1992 geboren?",
          nl: "Welke popster, bekend van hits als 'Come & Get It', werd geboren op 22 juli 1992?"
        },
        options: [
          { en: "Ariana Grande", es: "Ariana Grande", de: "Ariana Grande", nl: "Ariana Grande" },
          { en: "Demi Lovato", es: "Demi Lovato", de: "Demi Lovato", nl: "Demi Lovato" },
          { en: "Selena Gomez", es: "Selena Gomez", de: "Selena Gomez", nl: "Selena Gomez" },
          { en: "Miley Cyrus", es: "Miley Cyrus", de: "Miley Cyrus", nl: "Miley Cyrus" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Selena Gomez was born on July 22, 1992, in Grand Prairie, Texas. She began her career on the children's television series 'Barney & Friends' before rising to fame on Disney Channel's 'Wizards of Waverly Place'. She has since become a successful singer, actress, and producer.",
          es: "Selena Gomez nació el 22 de julio de 1992 en Grand Prairie, Texas. Comenzó su carrera en la serie de televisión infantil 'Barney & Friends' antes de alcanzar la fama en 'Wizards of Waverly Place' de Disney Channel. Desde entonces se ha convertido en una exitosa cantante, actriz y productora.",
          de: "Selena Gomez wurde am 22. Juli 1992 in Grand Prairie, Texas, geboren. Sie begann ihre Karriere in der Kinderserie 'Barney & Friends', bevor sie mit Disney Channels 'Wizards of Waverly Place' berühmt wurde. Seitdem ist sie eine erfolgreiche Sängerin, Schauspielerin und Produzentin geworden.",
          nl: "Selena Gomez werd geboren op 22 juli 1992 in Grand Prairie, Texas. Ze begon haar carrière in de kindertelevisieserie 'Barney & Friends' voordat ze beroemd werd via Disney Channel's 'Wizards of Waverly Place'. Sindsdien is ze een succesvolle zangeres, actrice en producer geworden."
        }
      },
      {
        question: {
          en: "On July 22, 1822, which scientist known as the 'father of genetics' was born?",
          es: "El 22 de julio de 1822, ¿qué científico conocido como el 'padre de la genética' nació?",
          de: "Welcher Wissenschaftler, bekannt als 'Vater der Genetik', wurde am 22. Juli 1822 geboren?",
          nl: "Welke wetenschapper, bekend als de 'vader van de genetica', werd geboren op 22 juli 1822?"
        },
        options: [
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" },
          { en: "James Watson", es: "James Watson", de: "James Watson", nl: "James Watson" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Gregor Mendel was born on July 22, 1822. Through his experiments with pea plants, he discovered the fundamental laws of inheritance, establishing the field of genetics. His work was largely ignored during his lifetime but was rediscovered in the early 20th century, revolutionizing biology.",
          es: "Gregor Mendel nació el 22 de julio de 1822. A través de sus experimentos con plantas de guisantes, descubrió las leyes fundamentales de la herencia, estableciendo el campo de la genética. Su trabajo fue ignorado en gran medida durante su vida, pero fue redescubierto a principios del siglo XX, revolucionando la biología.",
          de: "Gregor Mendel wurde am 22. Juli 1822 geboren. Durch seine Experimente mit Erbsenpflanzen entdeckte er die grundlegenden Vererbungsgesetze und begründete das Feld der Genetik. Seine Arbeit wurde zu seinen Lebzeiten weitgehend ignoriert, aber Anfang des 20. Jahrhunderts wiederentdeckt und revolutionierte die Biologie.",
          nl: "Gregor Mendel werd geboren op 22 juli 1822. Door zijn experimenten met erwtenplanten ontdekte hij de fundamentele wetten van erfelijkheid en legde daarmee de basis voor de genetica. Zijn werk werd grotendeels genegeerd tijdens zijn leven, maar werd herontdekt in het begin van de 20e eeuw en revolutioneerde de biologie."
        }
      },
      {
        question: {
          en: "On July 22, 1998, impeachment proceedings began against which U.S. President?",
          es: "El 22 de julio de 1998, ¿contra qué presidente de EE.UU. comenzaron los procedimientos de impeachment?",
          de: "Am 22. Juli 1998 begannen Amtsenthebungsverfahren gegen welchen US-Präsidenten?",
          nl: "Op 22 juli 1998 begonnen afzettingsprocedures tegen welke Amerikaanse president?"
        },
        options: [
          { en: "George H.W. Bush", es: "George H.W. Bush", de: "George H.W. Bush", nl: "George H.W. Bush" },
          { en: "Ronald Reagan", es: "Ronald Reagan", de: "Ronald Reagan", nl: "Ronald Reagan" },
          { en: "Bill Clinton", es: "Bill Clinton", de: "Bill Clinton", nl: "Bill Clinton" },
          { en: "Jimmy Carter", es: "Jimmy Carter", de: "Jimmy Carter", nl: "Jimmy Carter" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On July 22, 1998, impeachment proceedings officially began against President Bill Clinton related to the Monica Lewinsky scandal. Clinton was impeached by the House of Representatives in December 1998 but acquitted by the Senate in February 1999, remaining in office.",
          es: "El 22 de julio de 1998 comenzaron oficialmente los procedimientos de impeachment contra el presidente Bill Clinton relacionados con el escándalo de Monica Lewinsky. Clinton fue sometido a impeachment por la Cámara de Representantes en diciembre de 1998, pero absuelto por el Senado en febrero de 1999, permaneciendo en el cargo.",
          de: "Am 22. Juli 1998 begannen offiziell Amtsenthebungsverfahren gegen Präsident Bill Clinton im Zusammenhang mit der Monica-Lewinsky-Affäre. Clinton wurde im Dezember 1998 vom Repräsentantenhaus angeklagt, aber im Februar 1999 vom Senat freigesprochen und blieb im Amt.",
          nl: "Op 22 juli 1998 begonnen officieel afzettingsprocedures tegen president Bill Clinton in verband met het Monica Lewinsky-schandaal. Clinton werd in december 1998 afgezet door het Huis van Afgevaardigden maar vrijgesproken door de Senaat in februari 1999 en bleef in functie."
        }
      },
      {
        question: {
          en: "What apocalyptic event did some people mistakenly believe would occur on July 22, 2012?",
          es: "¿Qué evento apocalíptico creían erróneamente algunas personas que ocurriría el 22 de julio de 2012?",
          de: "Welches apokalyptische Ereignis glaubten einige Menschen fälschlicherweise würde am 22. Juli 2012 eintreten?",
          nl: "Welke apocalyptische gebeurtenis geloofden sommige mensen ten onrechte zou plaatsvinden op 22 juli 2012?"
        },
        options: [
          { en: "Alien invasion", es: "Invasión alienígena", de: "Alieninvasion", nl: "Buitenaardse invasie" },
          { en: "End of the Mayan calendar", es: "Fin del calendario maya", de: "Ende des Maya-Kalenders", nl: "Einde van de Maya-kalender" },
          { en: "Solar explosion", es: "Explosión solar", de: "Sonnenexplosion", nl: "Zonne-explosie" },
          { en: "Magnetic pole reversal", es: "Inversión de polos magnéticos", de: "Magnetpolumkehr", nl: "Magnetische poolomkering" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Many people misunderstood that the Mayan Long Count calendar would 'end' in 2012, with some incorrectly believing it would be December 21. The misconception that this meant the end of the world was thoroughly debunked by archaeologists and astronomers. The Mayan calendar simply completed a cycle, similar to our odometer rolling over.",
          es: "Muchas personas malinterpretaron que el calendario maya de Cuenta Larga 'terminaría' en 2012, algunos creyendo incorrectamente que sería el 21 de diciembre. La idea errónea de que esto significaba el fin del mundo fue completamente desacreditada por arqueólogos y astrónomos. El calendario maya simplemente completaba un ciclo, similar a como nuestro odómetro vuelve a cero.",
          de: "Viele Menschen verstanden falsch, dass der Maya-Langzeitkalender 2012 'enden' würde, wobei einige fälschlicherweise glaubten, es wäre der 21. Dezember. Die Fehlvorstellung, dass dies das Ende der Welt bedeutete, wurde von Archäologen und Astronomen gründlich widerlegt. Der Maya-Kalender vollendete einfach einen Zyklus, ähnlich wie ein Kilometerzähler.",
          nl: "Veel mensen begrepen verkeerd dat de Maya Lange Telkalender zou 'eindigen' in 2012, waarbij sommigen ten onrechte geloofden dat het 21 december zou zijn. Het misverstand dat dit het einde van de wereld betekende werd grondig ontkracht door archeologen en astronomen. De Maya-kalender voltooide simpelweg een cyclus, vergelijkbaar met een kilometerteller die opnieuw begint."
        }
      }
    ],

    // Day 23 - July 23rd: Historical Events and Innovation
    day23: [
      {
        question: {
          en: "On July 23, 1904, what dessert holder was patented by Charles Menches?",
          es: "El 23 de julio de 1904, ¿qué soporte para postres fue patentado por Charles Menches?",
          de: "Welcher Desserthalter wurde am 23. Juli 1904 von Charles Menches patentiert?",
          nl: "Welke desserthouder werd op 23 juli 1904 door Charles Menches gepatenteerd?"
        },
        options: [
          { en: "Ice cream sundae dish", es: "Copa de helado sundae", de: "Eisbecher", nl: "IJscoupe" },
          { en: "Ice cream cone", es: "Cono de helado", de: "Eistüte", nl: "IJshoorntje" },
          { en: "Popsicle stick", es: "Palito de paleta", de: "Eisstiel", nl: "IJslollystokje" },
          { en: "Waffle bowl", es: "Tazón de waffle", de: "Waffelschale", nl: "Wafelkom" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The ice cream cone was patented on July 23, 1904, by Charles Menches at the St. Louis World's Fair. Legend says he invented it when an ice cream vendor ran out of dishes and rolled a waffle into a cone shape. This simple innovation revolutionized how ice cream was served and eaten.",
          es: "El cono de helado fue patentado el 23 de julio de 1904 por Charles Menches en la Feria Mundial de St. Louis. La leyenda dice que lo inventó cuando un vendedor de helados se quedó sin platos y enrolló un waffle en forma de cono. Esta simple innovación revolucionó cómo se servía y comía el helado.",
          de: "Die Eistüte wurde am 23. Juli 1904 von Charles Menches auf der Weltausstellung in St. Louis patentiert. Die Legende besagt, dass er sie erfand, als einem Eisverkäufer die Schalen ausgingen und er eine Waffel zu einer Kegelform rollte. Diese einfache Innovation revolutionierte, wie Eis serviert und gegessen wurde.",
          nl: "Het ijshoorntje werd op 23 juli 1904 door Charles Menches gepatenteerd op de Wereldtentoonstelling in St. Louis. Volgens de legende vond hij het uit toen een ijsverkoper geen bakjes meer had en een wafel tot een kegel rolde. Deze eenvoudige innovatie revolutioneerde hoe ijs werd geserveerd en gegeten."
        }
      },
      {
        question: {
          en: "When did the first Tour de France bicycle race begin on July 23?",
          es: "¿Cuándo comenzó la primera carrera ciclista del Tour de Francia el 23 de julio?",
          de: "Wann begann das erste Tour de France Radrennen am 23. Juli?",
          nl: "Wanneer begon de eerste Tour de France wielerwedstrijd op 23 juli?"
        },
        options: [
          { en: "1893", es: "1893", de: "1893", nl: "1893" },
          { en: "1903", es: "1903", de: "1903", nl: "1903" },
          { en: "1913", es: "1913", de: "1913", nl: "1913" },
          { en: "1923", es: "1923", de: "1923", nl: "1923" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Tour de France began on July 23, 1903. Created by newspaper editor Henri Desgrange to boost circulation, the inaugural race covered 2,428 kilometers over six stages. Maurice Garin won the race, and it has since become the world's most prestigious cycling event.",
          es: "El primer Tour de Francia comenzó el 23 de julio de 1903. Creado por el editor de periódico Henri Desgrange para aumentar la circulación, la carrera inaugural cubrió 2,428 kilómetros en seis etapas. Maurice Garin ganó la carrera, y desde entonces se ha convertido en el evento ciclista más prestigioso del mundo.",
          de: "Die erste Tour de France begann am 23. Juli 1903. Geschaffen vom Zeitungsredakteur Henri Desgrange zur Steigerung der Auflage, umfasste das erste Rennen 2.428 Kilometer über sechs Etappen. Maurice Garin gewann das Rennen, und es ist seitdem das prestigeträchtigste Radrennen der Welt geworden.",
          nl: "De eerste Tour de France begon op 23 juli 1903. Gecreëerd door krantenredacteur Henri Desgrange om de oplage te verhogen, bedroeg de eerste race 2.428 kilometer over zes etappes. Maurice Garin won de race, en het is sindsdien het meest prestigieuze wielerevenement ter wereld geworden."
        }
      },
      {
        question: {
          en: "Which British singer, known for 'Back to Black', died on July 23, 2011?",
          es: "¿Qué cantante británica, conocida por 'Back to Black', murió el 23 de julio de 2011?",
          de: "Welche britische Sängerin, bekannt für 'Back to Black', starb am 23. Juli 2011?",
          nl: "Welke Britse zangeres, bekend van 'Back to Black', stierf op 23 juli 2011?"
        },
        options: [
          { en: "Adele", es: "Adele", de: "Adele", nl: "Adele" },
          { en: "Duffy", es: "Duffy", de: "Duffy", nl: "Duffy" },
          { en: "Amy Winehouse", es: "Amy Winehouse", de: "Amy Winehouse", nl: "Amy Winehouse" },
          { en: "Lily Allen", es: "Lily Allen", de: "Lily Allen", nl: "Lily Allen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Amy Winehouse died on July 23, 2011, at age 27, joining the tragic '27 Club' of musicians who died at that age. Known for her distinctive voice and neo-soul style, her album 'Back to Black' won five Grammy Awards. Her struggles with addiction were well-documented and ultimately led to her premature death.",
          es: "Amy Winehouse murió el 23 de julio de 2011 a los 27 años, uniéndose al trágico 'Club de los 27' de músicos que murieron a esa edad. Conocida por su voz distintiva y estilo neo-soul, su álbum 'Back to Black' ganó cinco premios Grammy. Sus luchas con la adicción fueron bien documentadas y finalmente llevaron a su muerte prematura.",
          de: "Amy Winehouse starb am 23. Juli 2011 im Alter von 27 Jahren und trat dem tragischen '27 Club' von Musikern bei, die in diesem Alter starben. Bekannt für ihre unverwechselbare Stimme und ihren Neo-Soul-Stil, gewann ihr Album 'Back to Black' fünf Grammy Awards. Ihre Suchtprobleme waren gut dokumentiert und führten letztlich zu ihrem frühen Tod.",
          nl: "Amy Winehouse stierf op 23 juli 2011 op 27-jarige leeftijd en voegde zich bij de tragische '27 Club' van muzikanten die op die leeftijd stierven. Bekend om haar kenmerkende stem en neo-soul stijl won haar album 'Back to Black' vijf Grammy Awards. Haar strijd met verslaving was goed gedocumenteerd en leidde uiteindelijk tot haar voortijdige dood."
        }
      },
      {
        question: {
          en: "On July 23, 1952, which country had a revolution that overthrew King Farouk?",
          es: "El 23 de julio de 1952, ¿qué país tuvo una revolución que derrocó al rey Farouk?",
          de: "Welches Land hatte am 23. Juli 1952 eine Revolution, die König Farouk stürzte?",
          nl: "Welk land had op 23 juli 1952 een revolutie die koning Farouk omverwierp?"
        },
        options: [
          { en: "Libya", es: "Libia", de: "Libyen", nl: "Libië" },
          { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" },
          { en: "Jordan", es: "Jordania", de: "Jordanien", nl: "Jordanië" },
          { en: "Morocco", es: "Marruecos", de: "Marokko", nl: "Marokko" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Egyptian Revolution began on July 23, 1952, when the Free Officers Movement, led by Gamal Abdel Nasser and Muhammad Naguib, overthrew King Farouk I. This bloodless coup ended the monarchy and British influence in Egypt, establishing a republic and transforming Egyptian society and politics.",
          es: "La Revolución Egipcia comenzó el 23 de julio de 1952, cuando el Movimiento de Oficiales Libres, liderado por Gamal Abdel Nasser y Muhammad Naguib, derrocó al rey Farouk I. Este golpe sin derramamiento de sangre terminó con la monarquía y la influencia británica en Egipto, estableciendo una república y transformando la sociedad y política egipcias.",
          de: "Die ägyptische Revolution begann am 23. Juli 1952, als die Bewegung Freier Offiziere unter Führung von Gamal Abdel Nasser und Muhammad Naguib König Farouk I. stürzte. Dieser unblutige Putsch beendete die Monarchie und den britischen Einfluss in Ägypten, etablierte eine Republik und transformierte die ägyptische Gesellschaft und Politik.",
          nl: "De Egyptische Revolutie begon op 23 juli 1952, toen de Beweging van Vrije Officieren, geleid door Gamal Abdel Nasser en Muhammad Naguib, koning Farouk I omverwierp. Deze onbloedige staatsgreep beëindigde de monarchie en Britse invloed in Egypte, vestigde een republiek en transformeerde de Egyptische maatschappij en politiek."
        }
      },
      {
        question: {
          en: "In what year did Ford recall 1.5 million Pinto cars on July 23 due to safety concerns?",
          es: "¿En qué año Ford retiró 1.5 millones de autos Pinto el 23 de julio debido a preocupaciones de seguridad?",
          de: "In welchem Jahr rief Ford am 23. Juli 1,5 Millionen Pinto-Autos wegen Sicherheitsbedenken zurück?",
          nl: "In welk jaar riep Ford op 23 juli 1,5 miljoen Pinto-auto's terug vanwege veiligheidsproblemen?"
        },
        options: [
          { en: "1968", es: "1968", de: "1968", nl: "1968" },
          { en: "1973", es: "1973", de: "1973", nl: "1973" },
          { en: "1978", es: "1978", de: "1978", nl: "1978" },
          { en: "1983", es: "1983", de: "1983", nl: "1983" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On July 23, 1978, Ford recalled 1.5 million Pinto cars due to dangerous fuel tank defects that could cause fires in rear-end collisions. The Pinto case became infamous in business ethics, as internal documents revealed Ford knew about the problem but calculated that recalls would cost more than lawsuit settlements.",
          es: "El 23 de julio de 1978, Ford retiró 1.5 millones de autos Pinto debido a defectos peligrosos en el tanque de combustible que podían causar incendios en colisiones traseras. El caso Pinto se hizo infame en ética empresarial, ya que documentos internos revelaron que Ford sabía del problema pero calculó que los retiros costarían más que los acuerdos judiciales.",
          de: "Am 23. Juli 1978 rief Ford 1,5 Millionen Pinto-Autos wegen gefährlicher Kraftstofftank-Defekte zurück, die bei Auffahrunfällen Brände verursachen konnten. Der Pinto-Fall wurde in der Unternehmensethik berüchtigt, da interne Dokumente zeigten, dass Ford das Problem kannte, aber berechnete, dass Rückrufe mehr kosten würden als Vergleichszahlungen.",
          nl: "Op 23 juli 1978 riep Ford 1,5 miljoen Pinto-auto's terug vanwege gevaarlijke brandstoftankdefecten die brand konden veroorzaken bij kop-staartbotsingen. De Pinto-zaak werd berucht in bedrijfsethiek, omdat interne documenten onthulden dat Ford van het probleem wist maar berekende dat terugroepacties meer zouden kosten dan schikkingen in rechtszaken."
        }
      }
    ],

    // Day 24 - July 24th: Explorers and Pioneers
    day24: [
      {
        question: {
          en: "On July 24, 1911, who discovered the ancient Incan city of Machu Picchu?",
          es: "El 24 de julio de 1911, ¿quién descubrió la antigua ciudad inca de Machu Picchu?",
          de: "Wer entdeckte am 24. Juli 1911 die antike Inka-Stadt Machu Picchu?",
          nl: "Wie ontdekte op 24 juli 1911 de oude Inca-stad Machu Picchu?"
        },
        options: [
          { en: "Richard Burton", es: "Richard Burton", de: "Richard Burton", nl: "Richard Burton" },
          { en: "Hiram Bingham", es: "Hiram Bingham", de: "Hiram Bingham", nl: "Hiram Bingham" },
          { en: "Howard Carter", es: "Howard Carter", de: "Howard Carter", nl: "Howard Carter" },
          { en: "Percy Fawcett", es: "Percy Fawcett", de: "Percy Fawcett", nl: "Percy Fawcett" }
        ],
        correctIndex: 1,
        explanation: {
          en: "American historian Hiram Bingham III discovered Machu Picchu on July 24, 1911, with the help of local guides. Though locals knew of its existence, Bingham brought international attention to the 15th-century Incan citadel. The site is now one of the New Seven Wonders of the World and Peru's most visited tourist attraction.",
          es: "El historiador estadounidense Hiram Bingham III descubrió Machu Picchu el 24 de julio de 1911 con la ayuda de guías locales. Aunque los lugareños conocían su existencia, Bingham trajo atención internacional a la ciudadela inca del siglo XV. El sitio es ahora una de las Nuevas Siete Maravillas del Mundo y la atracción turística más visitada de Perú.",
          de: "Der amerikanische Historiker Hiram Bingham III entdeckte Machu Picchu am 24. Juli 1911 mit Hilfe lokaler Führer. Obwohl Einheimische von seiner Existenz wussten, brachte Bingham internationale Aufmerksamkeit auf die Inka-Zitadelle aus dem 15. Jahrhundert. Die Stätte gehört heute zu den Neuen Sieben Weltwundern und ist Perus meistbesuchte Touristenattraktion.",
          nl: "De Amerikaanse historicus Hiram Bingham III ontdekte Machu Picchu op 24 juli 1911 met behulp van lokale gidsen. Hoewel de lokale bevolking van het bestaan wist, trok Bingham internationale aandacht naar de 15e-eeuwse Inca-citadel. De site is nu een van de Nieuwe Zeven Wereldwonderen en de meest bezochte toeristische attractie van Peru."
        }
      },
      {
        question: {
          en: "Which famous aviator was born on July 24, 1897?",
          es: "¿Qué famosa aviadora nació el 24 de julio de 1897?",
          de: "Welche berühmte Fliegerin wurde am 24. Juli 1897 geboren?",
          nl: "Welke beroemde vliegenierster werd geboren op 24 juli 1897?"
        },
        options: [
          { en: "Bessie Coleman", es: "Bessie Coleman", de: "Bessie Coleman", nl: "Bessie Coleman" },
          { en: "Harriet Quimby", es: "Harriet Quimby", de: "Harriet Quimby", nl: "Harriet Quimby" },
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" },
          { en: "Jacqueline Cochran", es: "Jacqueline Cochran", de: "Jacqueline Cochran", nl: "Jacqueline Cochran" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Amelia Earhart was born on July 24, 1897, in Atchison, Kansas. She was the first woman to fly solo across the Atlantic Ocean in 1932 and set many other aviation records. Her mysterious disappearance in 1937 while attempting to circumnavigate the globe remains one of history's greatest unsolved mysteries.",
          es: "Amelia Earhart nació el 24 de julio de 1897 en Atchison, Kansas. Fue la primera mujer en volar en solitario a través del Océano Atlántico en 1932 y estableció muchos otros récords de aviación. Su misteriosa desaparición en 1937 mientras intentaba circunnavegar el globo sigue siendo uno de los mayores misterios sin resolver de la historia.",
          de: "Amelia Earhart wurde am 24. Juli 1897 in Atchison, Kansas, geboren. Sie war 1932 die erste Frau, die allein über den Atlantik flog, und stellte viele andere Luftfahrtrekorde auf. Ihr mysteriöses Verschwinden 1937 bei dem Versuch, die Welt zu umrunden, bleibt eines der größten ungelösten Rätsel der Geschichte.",
          nl: "Amelia Earhart werd geboren op 24 juli 1897 in Atchison, Kansas. Ze was in 1932 de eerste vrouw die solo over de Atlantische Oceaan vloog en vestigde vele andere luchtvaartrecords. Haar mysterieuze verdwijning in 1937 tijdens een poging de wereld rond te vliegen blijft een van de grootste onopgeloste mysteries uit de geschiedenis."
        }
      },
      {
        question: {
          en: "Which famous ocean explorer and filmmaker was born on July 24, 1910?",
          es: "¿Qué famoso explorador oceánico y cineasta nació el 24 de julio de 1910?",
          de: "Welcher berühmte Meeresforscher und Filmemacher wurde am 24. Juli 1910 geboren?",
          nl: "Welke beroemde oceaanverkenner en filmmaker werd geboren op 24 juli 1910?"
        },
        options: [
          { en: "Robert Ballard", es: "Robert Ballard", de: "Robert Ballard", nl: "Robert Ballard" },
          { en: "Jacques Cousteau", es: "Jacques Cousteau", de: "Jacques Cousteau", nl: "Jacques Cousteau" },
          { en: "Sylvia Earle", es: "Sylvia Earle", de: "Sylvia Earle", nl: "Sylvia Earle" },
          { en: "Thor Heyerdahl", es: "Thor Heyerdahl", de: "Thor Heyerdahl", nl: "Thor Heyerdahl" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jacques Cousteau was born on July 24, 1910. He co-invented the Aqua-Lung, pioneered marine conservation, and produced over 120 television documentaries including 'The Undersea World of Jacques Cousteau'. His work brought the ocean's wonders to millions and made him one of the most recognizable scientists of the 20th century.",
          es: "Jacques Cousteau nació el 24 de julio de 1910. Co-inventó el Aqua-Lung, fue pionero en la conservación marina y produjo más de 120 documentales de televisión incluyendo 'El Mundo Submarino de Jacques Cousteau'. Su trabajo llevó las maravillas del océano a millones de personas y lo convirtió en uno de los científicos más reconocibles del siglo XX.",
          de: "Jacques Cousteau wurde am 24. Juli 1910 geboren. Er erfand gemeinsam das Aqua-Lung, war Pionier im Meeresschutz und produzierte über 120 Fernsehdokumentationen, darunter 'Die Unterwasserwelt von Jacques Cousteau'. Seine Arbeit brachte die Wunder des Ozeans Millionen näher und machte ihn zu einem der bekanntesten Wissenschaftler des 20. Jahrhunderts.",
          nl: "Jacques Cousteau werd geboren op 24 juli 1910. Hij vond mee de Aqua-Lung uit, was pionier in zeebescherming en produceerde meer dan 120 televisiedocumentaires waaronder 'De Onderwaterwereld van Jacques Cousteau'. Zijn werk bracht de wonderen van de oceaan bij miljoenen mensen en maakte hem een van de meest herkenbare wetenschappers van de 20e eeuw."
        }
      },
      {
        question: {
          en: "On July 24, 1847, which religious group reached the Salt Lake Valley?",
          es: "El 24 de julio de 1847, ¿qué grupo religioso llegó al Valle del Lago Salado?",
          de: "Welche religiöse Gruppe erreichte am 24. Juli 1847 das Salt Lake Valley?",
          nl: "Welke religieuze groep bereikte op 24 juli 1847 de Salt Lake Valley?"
        },
        options: [
          { en: "Puritans", es: "Puritanos", de: "Puritaner", nl: "Puriteinen" },
          { en: "Quakers", es: "Cuáqueros", de: "Quäker", nl: "Quakers" },
          { en: "Mormon Pioneers", es: "Pioneros Mormones", de: "Mormonenpioniere", nl: "Mormoonse Pioniers" },
          { en: "Shakers", es: "Shakers", de: "Shaker", nl: "Shakers" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Mormon pioneers led by Brigham Young reached the Salt Lake Valley on July 24, 1847, after a grueling 1,300-mile journey from Illinois. This date, Pioneer Day, is still celebrated as a state holiday in Utah. The migration established Salt Lake City and laid the foundation for Mormon settlement throughout the American West.",
          es: "Los pioneros mormones liderados por Brigham Young llegaron al Valle del Lago Salado el 24 de julio de 1847, después de un agotador viaje de 1,300 millas desde Illinois. Esta fecha, el Día de los Pioneros, todavía se celebra como feriado estatal en Utah. La migración estableció Salt Lake City y sentó las bases para el asentamiento mormón en todo el oeste estadounidense.",
          de: "Mormonenpioniere unter der Führung von Brigham Young erreichten am 24. Juli 1847 das Salt Lake Valley nach einer anstrengenden 1.300-Meilen-Reise von Illinois. Dieses Datum, der Pioneer Day, wird immer noch als staatlicher Feiertag in Utah gefeiert. Die Migration begründete Salt Lake City und legte den Grundstein für mormonische Siedlungen im gesamten amerikanischen Westen.",
          nl: "Mormoonse pioniers onder leiding van Brigham Young bereikten de Salt Lake Valley op 24 juli 1847, na een uitputtende reis van 1.300 mijl vanuit Illinois. Deze datum, Pioneer Day, wordt nog steeds gevierd als staatsfeestdag in Utah. De migratie vestigde Salt Lake City en legde de basis voor Mormoonse nederzettingen in het Amerikaanse Westen."
        }
      },
      {
        question: {
          en: "Which South American liberator was born on July 24, 1783?",
          es: "¿Qué libertador sudamericano nació el 24 de julio de 1783?",
          de: "Welcher südamerikanische Befreier wurde am 24. Juli 1783 geboren?",
          nl: "Welke Zuid-Amerikaanse bevrijder werd geboren op 24 juli 1783?"
        },
        options: [
          { en: "José de San Martín", es: "José de San Martín", de: "José de San Martín", nl: "José de San Martín" },
          { en: "Bernardo O'Higgins", es: "Bernardo O'Higgins", de: "Bernardo O'Higgins", nl: "Bernardo O'Higgins" },
          { en: "Simón Bolívar", es: "Simón Bolívar", de: "Simón Bolívar", nl: "Simón Bolívar" },
          { en: "Antonio José de Sucre", es: "Antonio José de Sucre", de: "Antonio José de Sucre", nl: "Antonio José de Sucre" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Simón Bolívar was born on July 24, 1783, in Caracas, Venezuela. Known as 'El Libertador', he led the independence movements that freed Venezuela, Bolivia, Colombia, Ecuador, Peru, and Panama from Spanish rule. Bolivia is named in his honor, and he remains one of the most influential figures in Latin American history.",
          es: "Simón Bolívar nació el 24 de julio de 1783 en Caracas, Venezuela. Conocido como 'El Libertador', lideró los movimientos de independencia que liberaron a Venezuela, Bolivia, Colombia, Ecuador, Perú y Panamá del dominio español. Bolivia lleva su nombre en su honor, y sigue siendo una de las figuras más influyentes en la historia de América Latina.",
          de: "Simón Bolívar wurde am 24. Juli 1783 in Caracas, Venezuela, geboren. Bekannt als 'El Libertador', führte er die Unabhängigkeitsbewegungen an, die Venezuela, Bolivien, Kolumbien, Ecuador, Peru und Panama von der spanischen Herrschaft befreiten. Bolivien ist nach ihm benannt, und er bleibt eine der einflussreichsten Figuren der lateinamerikanischen Geschichte.",
          nl: "Simón Bolívar werd geboren op 24 juli 1783 in Caracas, Venezuela. Bekend als 'El Libertador', leidde hij de onafhankelijkheidsbewegingen die Venezuela, Bolivia, Colombia, Ecuador, Peru en Panama bevrijdden van Spaanse heerschappij. Bolivia is naar hem vernoemd, en hij blijft een van de meest invloedrijke figuren in de Latijns-Amerikaanse geschiedenis."
        }
      }
    ],

    // Day 25 - July 25th: Medical and Scientific Breakthroughs
    day25: [
      {
        question: {
          en: "On July 25, 1978, what medical milestone occurred with the birth of Louise Brown?",
          es: "El 25 de julio de 1978, ¿qué hito médico ocurrió con el nacimiento de Louise Brown?",
          de: "Welcher medizinische Meilenstein ereignete sich am 25. Juli 1978 mit der Geburt von Louise Brown?",
          nl: "Welke medische mijlpaal vond plaats op 25 juli 1978 met de geboorte van Louise Brown?"
        },
        options: [
          { en: "First heart transplant baby", es: "Primer bebé con trasplante de corazón", de: "Erstes Herztransplantations-Baby", nl: "Eerste harttransplantatiebaby" },
          { en: "First IVF baby", es: "Primer bebé FIV", de: "Erstes IVF-Baby", nl: "Eerste IVF-baby" },
          { en: "First cloned baby", es: "Primer bebé clonado", de: "Erstes geklontes Baby", nl: "Eerste gekloonde baby" },
          { en: "First premature baby survivor", es: "Primer bebé prematuro superviviente", de: "Erstes Frühgeborenen-Überlebende", nl: "Eerste te vroeg geboren baby die overleefde" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Louise Brown, born July 25, 1978, in England, was the world's first 'test tube baby' conceived through in vitro fertilization (IVF). Developed by doctors Patrick Steptoe and Robert Edwards, this revolutionary procedure has since helped millions of couples have children and earned Edwards the 2010 Nobel Prize in Physiology or Medicine.",
          es: "Louise Brown, nacida el 25 de julio de 1978 en Inglaterra, fue el primer 'bebé probeta' del mundo concebido mediante fertilización in vitro (FIV). Desarrollado por los doctores Patrick Steptoe y Robert Edwards, este procedimiento revolucionario ha ayudado desde entonces a millones de parejas a tener hijos y le valió a Edwards el Premio Nobel de Fisiología o Medicina en 2010.",
          de: "Louise Brown, geboren am 25. Juli 1978 in England, war das weltweit erste 'Retortenbaby', das durch In-vitro-Fertilisation (IVF) gezeugt wurde. Entwickelt von den Ärzten Patrick Steptoe und Robert Edwards, hat dieses revolutionäre Verfahren seitdem Millionen von Paaren geholfen, Kinder zu bekommen, und brachte Edwards 2010 den Nobelpreis für Physiologie oder Medizin ein.",
          nl: "Louise Brown, geboren op 25 juli 1978 in Engeland, was 's werelds eerste 'reageerbuisbaby' verwekt via in-vitrofertilisatie (IVF). Ontwikkeld door artsen Patrick Steptoe en Robert Edwards, heeft deze revolutionaire procedure sindsdien miljoenen koppels geholpen om kinderen te krijgen en leverde Edwards in 2010 de Nobelprijs voor Fysiologie of Geneeskunde op."
        }
      },
      {
        question: {
          en: "On July 25, 1898, which Caribbean territory became a U.S. possession?",
          es: "El 25 de julio de 1898, ¿qué territorio caribeño se convirtió en posesión de Estados Unidos?",
          de: "Welches karibische Territorium wurde am 25. Juli 1898 US-Besitz?",
          nl: "Welk Caribisch gebied werd op 25 juli 1898 Amerikaans bezit?"
        },
        options: [
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Haiti", es: "Haití", de: "Haiti", nl: "Haïti" },
          { en: "Dominican Republic", es: "República Dominicana", de: "Dominikanische Republik", nl: "Dominicaanse Republiek" },
          { en: "Puerto Rico", es: "Puerto Rico", de: "Puerto Rico", nl: "Puerto Rico" }
        ],
        correctIndex: 3,
        explanation: {
          en: "U.S. forces landed in Puerto Rico on July 25, 1898, during the Spanish-American War. Following Spain's defeat, Puerto Rico was ceded to the United States under the Treaty of Paris. Puerto Ricans became U.S. citizens in 1917, and the island remains a U.S. territory with ongoing debates about its political status.",
          es: "Las fuerzas estadounidenses desembarcaron en Puerto Rico el 25 de julio de 1898 durante la Guerra Hispano-Estadounidense. Tras la derrota de España, Puerto Rico fue cedido a Estados Unidos bajo el Tratado de París. Los puertorriqueños se convirtieron en ciudadanos estadounidenses en 1917, y la isla sigue siendo un territorio estadounidense con debates continuos sobre su estatus político.",
          de: "US-Streitkräfte landeten am 25. Juli 1898 während des Spanisch-Amerikanischen Krieges in Puerto Rico. Nach Spaniens Niederlage wurde Puerto Rico durch den Vertrag von Paris an die Vereinigten Staaten abgetreten. Puerto Ricaner wurden 1917 US-Bürger, und die Insel bleibt ein US-Territorium mit anhaltenden Debatten über ihren politischen Status.",
          nl: "Amerikaanse troepen landden op 25 juli 1898 in Puerto Rico tijdens de Spaans-Amerikaanse Oorlog. Na de nederlaag van Spanje werd Puerto Rico aan de Verenigde Staten afgestaan onder het Verdrag van Parijs. Puerto Ricanen werden in 1917 Amerikaanse staatsburgers, en het eiland blijft een Amerikaans gebied met voortdurende debatten over de politieke status."
        }
      },
      {
        question: {
          en: "On July 25, 1943, which Italian dictator was deposed?",
          es: "El 25 de julio de 1943, ¿qué dictador italiano fue depuesto?",
          de: "Welcher italienische Diktator wurde am 25. Juli 1943 abgesetzt?",
          nl: "Welke Italiaanse dictator werd op 25 juli 1943 afgezet?"
        },
        options: [
          { en: "Victor Emmanuel III", es: "Víctor Manuel III", de: "Viktor Emanuel III.", nl: "Victor Emmanuel III" },
          { en: "Benito Mussolini", es: "Benito Mussolini", de: "Benito Mussolini", nl: "Benito Mussolini" },
          { en: "Pietro Badoglio", es: "Pietro Badoglio", de: "Pietro Badoglio", nl: "Pietro Badoglio" },
          { en: "Umberto II", es: "Humberto II", de: "Umberto II.", nl: "Umberto II" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Benito Mussolini was deposed as Prime Minister of Italy on July 25, 1943, after the Grand Council of Fascism voted no confidence in his leadership following Allied victories in North Africa and Sicily. King Victor Emmanuel III ordered his arrest, ending Mussolini's 21-year fascist rule, though he would briefly return to power in German-occupied northern Italy.",
          es: "Benito Mussolini fue depuesto como Primer Ministro de Italia el 25 de julio de 1943, después de que el Gran Consejo del Fascismo votara la falta de confianza en su liderazgo tras las victorias aliadas en África del Norte y Sicilia. El rey Víctor Manuel III ordenó su arresto, poniendo fin a los 21 años de gobierno fascista de Mussolini, aunque regresaría brevemente al poder en el norte de Italia ocupado por Alemania.",
          de: "Benito Mussolini wurde am 25. Juli 1943 als Premierminister Italiens abgesetzt, nachdem der Große Faschistische Rat ihm nach alliierten Siegen in Nordafrika und Sizilien das Misstrauen ausgesprochen hatte. König Viktor Emanuel III. ordnete seine Verhaftung an und beendete damit Mussolinis 21-jährige faschistische Herrschaft, obwohl er kurzzeitig in das von Deutschland besetzte Norditalien zurückkehren würde.",
          nl: "Benito Mussolini werd op 25 juli 1943 afgezet als premier van Italië nadat de Grote Raad van het Fascisme een motie van wantrouwen in zijn leiderschap had aangenomen na geallieerde overwinningen in Noord-Afrika en Sicilië. Koning Victor Emmanuel III beval zijn arrestatie, waarmee een einde kwam aan Mussolini's 21-jarige fascistische heerschappij, hoewel hij kort zou terugkeren aan de macht in het door Duitsland bezette Noord-Italië."
        }
      },
      {
        question: {
          en: "On July 25, 1824, which Central American country declared independence from Mexico?",
          es: "El 25 de julio de 1824, ¿qué país centroamericano declaró su independencia de México?",
          de: "Welches mittelamerikanische Land erklärte am 25. Juli 1824 seine Unabhängigkeit von Mexiko?",
          nl: "Welk Midden-Amerikaans land verklaarde op 25 juli 1824 zijn onafhankelijkheid van Mexico?"
        },
        options: [
          { en: "Guatemala", es: "Guatemala", de: "Guatemala", nl: "Guatemala" },
          { en: "Costa Rica", es: "Costa Rica", de: "Costa Rica", nl: "Costa Rica" },
          { en: "El Salvador", es: "El Salvador", de: "El Salvador", nl: "El Salvador" },
          { en: "Nicaragua", es: "Nicaragua", de: "Nicaragua", nl: "Nicaragua" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Costa Rica declared its independence from Mexico on July 25, 1824, having previously been part of the Mexican Empire after gaining independence from Spain. Costa Rica then joined the Federal Republic of Central America until becoming a fully independent nation in 1838. Today, Costa Rica is known for its stable democracy and environmental conservation efforts.",
          es: "Costa Rica declaró su independencia de México el 25 de julio de 1824, habiendo sido previamente parte del Imperio Mexicano después de obtener la independencia de España. Costa Rica luego se unió a la República Federal de Centroamérica hasta convertirse en una nación completamente independiente en 1838. Hoy, Costa Rica es conocida por su democracia estable y esfuerzos de conservación ambiental.",
          de: "Costa Rica erklärte am 25. Juli 1824 seine Unabhängigkeit von Mexiko, nachdem es zuvor nach der Unabhängigkeit von Spanien Teil des Mexikanischen Kaiserreichs gewesen war. Costa Rica trat dann der Bundesrepublik Mittelamerika bei, bis es 1838 eine vollständig unabhängige Nation wurde. Heute ist Costa Rica für seine stabile Demokratie und Umweltschutzbemühungen bekannt.",
          nl: "Costa Rica verklaarde op 25 juli 1824 zijn onafhankelijkheid van Mexico, nadat het eerder deel had uitgemaakt van het Mexicaanse Keizerrijk na de onafhankelijkheid van Spanje. Costa Rica sloot zich vervolgens aan bij de Federale Republiek Midden-Amerika totdat het in 1838 een volledig onafhankelijke natie werd. Vandaag staat Costa Rica bekend om zijn stabiele democratie en inspanningen voor milieubescherming."
        }
      },
      {
        question: {
          en: "On July 25, 1957, which North African country became a republic?",
          es: "El 25 de julio de 1957, ¿qué país del norte de África se convirtió en república?",
          de: "Welches nordafrikanische Land wurde am 25. Juli 1957 zur Republik?",
          nl: "Welk Noord-Afrikaans land werd op 25 juli 1957 een republiek?"
        },
        options: [
          { en: "Morocco", es: "Marruecos", de: "Marokko", nl: "Marokko" },
          { en: "Algeria", es: "Argelia", de: "Algerien", nl: "Algerije" },
          { en: "Tunisia", es: "Túnez", de: "Tunesien", nl: "Tunesië" },
          { en: "Libya", es: "Libia", de: "Libyen", nl: "Libië" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Tunisia became a republic on July 25, 1957, when the monarchy was abolished and Habib Bourguiba became the country's first president. This came a year after Tunisia gained independence from France in 1956. Bourguiba modernized Tunisia and promoted women's rights, serving as president until 1987.",
          es: "Túnez se convirtió en república el 25 de julio de 1957, cuando se abolió la monarquía y Habib Bourguiba se convirtió en el primer presidente del país. Esto ocurrió un año después de que Túnez obtuviera la independencia de Francia en 1956. Bourguiba modernizó Túnez y promovió los derechos de las mujeres, sirviendo como presidente hasta 1987.",
          de: "Tunesien wurde am 25. Juli 1957 zur Republik, als die Monarchie abgeschafft wurde und Habib Bourguiba der erste Präsident des Landes wurde. Dies geschah ein Jahr nachdem Tunesien 1956 die Unabhängigkeit von Frankreich erlangt hatte. Bourguiba modernisierte Tunesien und förderte Frauenrechte, er war bis 1987 Präsident.",
          nl: "Tunesië werd op 25 juli 1957 een republiek toen de monarchie werd afgeschaft en Habib Bourguiba de eerste president van het land werd. Dit was een jaar nadat Tunesië in 1956 onafhankelijk was geworden van Frankrijk. Bourguiba moderniseerde Tunesië en promootte vrouwenrechten, hij was president tot 1987."
        }
      }
    ],

    // Day 26 - July 26th: American History and Culture
    day26: [
      {
        question: {
          en: "On July 26, 1788, which state became the 11th to ratify the U.S. Constitution?",
          es: "El 26 de julio de 1788, ¿qué estado se convirtió en el 11° en ratificar la Constitución de EE.UU.?",
          de: "Welcher Staat ratifizierte am 26. Juli 1788 als elfter die US-Verfassung?",
          nl: "Welke staat werd op 26 juli 1788 de 11e die de Amerikaanse Grondwet ratificeerde?"
        },
        options: [
          { en: "Pennsylvania", es: "Pensilvania", de: "Pennsylvania", nl: "Pennsylvania" },
          { en: "Massachusetts", es: "Massachusetts", de: "Massachusetts", nl: "Massachusetts" },
          { en: "New York", es: "Nueva York", de: "New York", nl: "New York" },
          { en: "Virginia", es: "Virginia", de: "Virginia", nl: "Virginia" }
        ],
        correctIndex: 2,
        explanation: {
          en: "New York ratified the U.S. Constitution on July 26, 1788, becoming the 11th state to do so. The ratification was controversial and passed by only a narrow margin (30-27) after intense debate. New York's approval was crucial for the Constitution's success given the state's size and economic importance.",
          es: "Nueva York ratificó la Constitución de EE.UU. el 26 de julio de 1788, convirtiéndose en el 11° estado en hacerlo. La ratificación fue controvertida y pasó por un margen estrecho (30-27) después de un intenso debate. La aprobación de Nueva York fue crucial para el éxito de la Constitución dada el tamaño y la importancia económica del estado.",
          de: "New York ratifizierte am 26. Juli 1788 die US-Verfassung und wurde damit der elfte Staat. Die Ratifizierung war umstritten und wurde nur mit knapper Mehrheit (30-27) nach intensiver Debatte verabschiedet. New Yorks Zustimmung war angesichts der Größe und wirtschaftlichen Bedeutung des Staates entscheidend für den Erfolg der Verfassung.",
          nl: "New York ratificeerde op 26 juli 1788 de Amerikaanse Grondwet en werd daarmee de 11e staat. De ratificatie was controversieel en werd met een kleine meerderheid (30-27) aangenomen na intensief debat. De goedkeuring van New York was cruciaal voor het succes van de Grondwet gezien de grootte en economische betekenis van de staat."
        }
      },
      {
        question: {
          en: "On July 26, 1908, which famous U.S. law enforcement agency was founded?",
          es: "El 26 de julio de 1908, ¿qué famosa agencia de aplicación de la ley de EE.UU. fue fundada?",
          de: "Welche berühmte US-Strafverfolgungsbehörde wurde am 26. Juli 1908 gegründet?",
          nl: "Welk beroemd Amerikaans wetshandhavingsagentschap werd opgericht op 26 juli 1908?"
        },
        options: [
          { en: "CIA", es: "CIA", de: "CIA", nl: "CIA" },
          { en: "FBI", es: "FBI", de: "FBI", nl: "FBI" },
          { en: "DEA", es: "DEA", de: "DEA", nl: "DEA" },
          { en: "Secret Service", es: "Servicio Secreto", de: "Secret Service", nl: "Secret Service" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Federal Bureau of Investigation (FBI) was founded on July 26, 1908, originally as the Bureau of Investigation within the Department of Justice. Created by Attorney General Charles Bonaparte, it was renamed the FBI in 1935. The agency is responsible for investigating federal crimes and protecting national security.",
          es: "El Buró Federal de Investigaciones (FBI) fue fundado el 26 de julio de 1908, originalmente como el Buró de Investigación dentro del Departamento de Justicia. Creado por el Fiscal General Charles Bonaparte, fue renombrado FBI en 1935. La agencia es responsable de investigar crímenes federales y proteger la seguridad nacional.",
          de: "Das Federal Bureau of Investigation (FBI) wurde am 26. Juli 1908 gegründet, ursprünglich als Bureau of Investigation innerhalb des Justizministeriums. Gegründet von Generalstaatsanwalt Charles Bonaparte, wurde es 1935 in FBI umbenannt. Die Behörde ist für die Untersuchung von Bundesverbrechen und den Schutz der nationalen Sicherheit zuständig.",
          nl: "De Federal Bureau of Investigation (FBI) werd opgericht op 26 juli 1908, oorspronkelijk als het Bureau of Investigation binnen het Ministerie van Justitie. Opgericht door procureur-generaal Charles Bonaparte, werd het in 1935 hernoemd tot FBI. Het agentschap is verantwoordelijk voor het onderzoeken van federale misdaden en het beschermen van de nationale veiligheid."
        }
      },
      {
        question: {
          en: "Which Rolling Stones frontman was born on July 26, 1943?",
          es: "¿Qué líder de los Rolling Stones nació el 26 de julio de 1943?",
          de: "Welcher Rolling Stones-Frontmann wurde am 26. Juli 1943 geboren?",
          nl: "Welke Rolling Stones-frontman werd geboren op 26 juli 1943?"
        },
        options: [
          { en: "Keith Richards", es: "Keith Richards", de: "Keith Richards", nl: "Keith Richards" },
          { en: "Mick Jagger", es: "Mick Jagger", de: "Mick Jagger", nl: "Mick Jagger" },
          { en: "Charlie Watts", es: "Charlie Watts", de: "Charlie Watts", nl: "Charlie Watts" },
          { en: "Ron Wood", es: "Ron Wood", de: "Ron Wood", nl: "Ron Wood" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Mick Jagger was born on July 26, 1943, in Dartford, England. As lead singer of the Rolling Stones, he became one of rock music's most iconic performers. Known for his distinctive voice, energetic stage presence, and songwriting partnership with Keith Richards, Jagger has been performing for over six decades.",
          es: "Mick Jagger nació el 26 de julio de 1943 en Dartford, Inglaterra. Como cantante principal de los Rolling Stones, se convirtió en uno de los intérpretes más icónicos de la música rock. Conocido por su voz distintiva, presencia escénica energética y asociación compositora con Keith Richards, Jagger ha estado actuando durante más de seis décadas.",
          de: "Mick Jagger wurde am 26. Juli 1943 in Dartford, England, geboren. Als Leadsänger der Rolling Stones wurde er zu einem der ikonischsten Performer der Rockmusik. Bekannt für seine unverwechselbare Stimme, energiegeladene Bühnenpräsenz und Songwriting-Partnerschaft mit Keith Richards, tritt Jagger seit über sechs Jahrzehnten auf.",
          nl: "Mick Jagger werd geboren op 26 juli 1943 in Dartford, Engeland. Als leadzanger van de Rolling Stones werd hij een van de meest iconische artiesten in de rockmuziek. Bekend om zijn kenmerkende stem, energieke podiumpresen­tie en songwriting-partnerschap met Keith Richards, treedt Jagger al meer dan zes decennia op."
        }
      },
      {
        question: {
          en: "On July 26, 1953, which revolution began when Fidel Castro attacked the Moncada Barracks?",
          es: "El 26 de julio de 1953, ¿qué revolución comenzó cuando Fidel Castro atacó el Cuartel Moncada?",
          de: "Welche Revolution begann am 26. Juli 1953, als Fidel Castro die Moncada-Kaserne angriff?",
          nl: "Welke revolutie begon op 26 juli 1953 toen Fidel Castro de Moncada-kazerne aanviel?"
        },
        options: [
          { en: "Mexican Revolution", es: "Revolución Mexicana", de: "Mexikanische Revolution", nl: "Mexicaanse Revolutie" },
          { en: "Cuban Revolution", es: "Revolución Cubana", de: "Kubanische Revolution", nl: "Cubaanse Revolutie" },
          { en: "Bolivian Revolution", es: "Revolución Boliviana", de: "Bolivianische Revolution", nl: "Boliviaanse Revolutie" },
          { en: "Nicaraguan Revolution", es: "Revolución Nicaragüense", de: "Nicaraguanische Revolution", nl: "Nicaraguaanse Revolutie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Cuban Revolution effectively began on July 26, 1953, when Fidel Castro and about 140 rebels attacked the Moncada Barracks in Santiago de Cuba. Though the attack failed and many were killed or captured, it marked the start of Castro's revolutionary movement. The date '26th of July' became the name of Castro's revolutionary organization.",
          es: "La Revolución Cubana comenzó efectivamente el 26 de julio de 1953, cuando Fidel Castro y unos 140 rebeldes atacaron el Cuartel Moncada en Santiago de Cuba. Aunque el ataque fracasó y muchos fueron asesinados o capturados, marcó el inicio del movimiento revolucionario de Castro. La fecha '26 de julio' se convirtió en el nombre de la organización revolucionaria de Castro.",
          de: "Die Kubanische Revolution begann faktisch am 26. Juli 1953, als Fidel Castro und etwa 140 Rebellen die Moncada-Kaserne in Santiago de Cuba angriffen. Obwohl der Angriff scheiterte und viele getötet oder gefangen genommen wurden, markierte er den Beginn von Castros revolutionärer Bewegung. Das Datum '26. Juli' wurde zum Namen von Castros revolutionärer Organisation.",
          nl: "De Cubaanse Revolutie begon in feite op 26 juli 1953, toen Fidel Castro en ongeveer 140 rebellen de Moncada-kazerne in Santiago de Cuba aanvielen. Hoewel de aanval mislukte en velen werden gedood of gevangengenomen, markeerde het het begin van Castro's revolutionaire beweging. De datum '26 juli' werd de naam van Castro's revolutionaire organisatie."
        }
      },
      {
        question: {
          en: "Which famous author of 'Brave New World' was born on July 26, 1894?",
          es: "¿Qué famoso autor de 'Un Mundo Feliz' nació el 26 de julio de 1894?",
          de: "Welcher berühmte Autor von 'Schöne Neue Welt' wurde am 26. Juli 1894 geboren?",
          nl: "Welke beroemde auteur van 'Brave New World' werd geboren op 26 juli 1894?"
        },
        options: [
          { en: "George Orwell", es: "George Orwell", de: "George Orwell", nl: "George Orwell" },
          { en: "Ray Bradbury", es: "Ray Bradbury", de: "Ray Bradbury", nl: "Ray Bradbury" },
          { en: "Aldous Huxley", es: "Aldous Huxley", de: "Aldous Huxley", nl: "Aldous Huxley" },
          { en: "H.G. Wells", es: "H.G. Wells", de: "H.G. Wells", nl: "H.G. Wells" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Aldous Huxley was born on July 26, 1894, in England. His 1932 dystopian novel 'Brave New World' explored themes of technology, consumerism, and social control. The book remains highly influential and is considered one of the most important works of science fiction, offering a chilling vision of a future society.",
          es: "Aldous Huxley nació el 26 de julio de 1894 en Inglaterra. Su novela distópica de 1932 'Un Mundo Feliz' exploró temas de tecnología, consumismo y control social. El libro sigue siendo muy influyente y se considera una de las obras más importantes de ciencia ficción, ofreciendo una visión escalofriante de una sociedad futura.",
          de: "Aldous Huxley wurde am 26. Juli 1894 in England geboren. Sein dystopischer Roman 'Schöne Neue Welt' von 1932 erforschte Themen wie Technologie, Konsumverhalten und soziale Kontrolle. Das Buch bleibt höchst einflussreich und gilt als eines der wichtigsten Werke der Science-Fiction, das eine erschreckende Vision einer zukünftigen Gesellschaft bietet.",
          nl: "Aldous Huxley werd geboren op 26 juli 1894 in Engeland. Zijn dystopische roman 'Brave New World' uit 1932 verkende thema's als technologie, consumentisme en sociale controle. Het boek blijft zeer invloedrijk en wordt beschouwd als een van de belangrijkste werken van sciencefiction, met een huiveringwekkende visie op een toekomstige maatschappij."
        }
      }
    ],

    // Day 27 - July 27th: War, Peace, and Pop Culture
    day27: [
      {
        question: {
          en: "On July 27, 1953, which armistice ended the active fighting in what war?",
          es: "El 27 de julio de 1953, ¿qué armisticio puso fin a los combates activos en qué guerra?",
          de: "Welcher Waffenstillstand beendete am 27. Juli 1953 die aktiven Kämpfe in welchem Krieg?",
          nl: "Welk wapensti­lstand beëindigde op 27 juli 1953 de actieve gevechten in welke oorlog?"
        },
        options: [
          { en: "Vietnam War", es: "Guerra de Vietnam", de: "Vietnamkrieg", nl: "Vietnamoorlog" },
          { en: "Korean War", es: "Guerra de Corea", de: "Koreakrieg", nl: "Koreaanse Oorlog" },
          { en: "World War II", es: "Segunda Guerra Mundial", de: "Zweiter Weltkrieg", nl: "Tweede Wereldoorlog" },
          { en: "Cold War", es: "Guerra Fría", de: "Kalter Krieg", nl: "Koude Oorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Korean War Armistice was signed on July 27, 1953, at Panmunjom, ending three years of fighting. The agreement created the Korean Demilitarized Zone (DMZ) and established a ceasefire, though no peace treaty was ever signed. Technically, North and South Korea remain at war to this day.",
          es: "El Armisticio de la Guerra de Corea se firmó el 27 de julio de 1953 en Panmunjom, poniendo fin a tres años de combates. El acuerdo creó la Zona Desmilitarizada de Corea (DMZ) y estableció un alto el fuego, aunque nunca se firmó un tratado de paz. Técnicamente, Corea del Norte y Corea del Sur siguen en guerra hasta el día de hoy.",
          de: "Der Waffenstillstand im Koreakrieg wurde am 27. Juli 1953 in Panmunjom unterzeichnet und beendete drei Jahre Kampfhandlungen. Das Abkommen schuf die Koreanische Demilitarisierte Zone (DMZ) und etablierte einen Waffenstillstand, obwohl nie ein Friedensvertrag unterzeichnet wurde. Technisch gesehen befinden sich Nord- und Südkorea bis heute im Krieg.",
          nl: "Het Koreaanse wapenstilstandsakkoord werd getekend op 27 juli 1953 in Panmunjom, waarmee een einde kwam aan drie jaar vechten. Het akkoord creëerde de Koreaanse Gedemilitariseerde Zone (DMZ) en stelde een staakt-het-vuren in, hoewel er nooit een vredesverdrag werd getekend. Technisch gezien zijn Noord- en Zuid-Korea nog steeds in oorlog."
        }
      },
      {
        question: {
          en: "On July 27, 1940, which famous cartoon character made his debut?",
          es: "El 27 de julio de 1940, ¿qué famoso personaje de dibujos animados hizo su debut?",
          de: "Welche berühmte Zeichentrickfigur hatte am 27. Juli 1940 ihr Debüt?",
          nl: "Welk beroemd stripfiguur maakte op 27 juli 1940 zijn debuut?"
        },
        options: [
          { en: "Mickey Mouse", es: "Mickey Mouse", de: "Micky Maus", nl: "Mickey Mouse" },
          { en: "Bugs Bunny", es: "Bugs Bunny", de: "Bugs Bunny", nl: "Bugs Bunny" },
          { en: "Donald Duck", es: "Pato Donald", de: "Donald Duck", nl: "Donald Duck" },
          { en: "Daffy Duck", es: "Pato Lucas", de: "Daffy Duck", nl: "Duffy Duck" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bugs Bunny made his official debut in the cartoon 'A Wild Hare' on July 27, 1940. Created by Tex Avery and voiced by Mel Blanc, Bugs became one of the most iconic cartoon characters in history. His catchphrase 'What's up, Doc?' and cool, wise-cracking personality made him a beloved figure worldwide.",
          es: "Bugs Bunny hizo su debut oficial en el dibujo animado 'A Wild Hare' el 27 de julio de 1940. Creado por Tex Avery y con la voz de Mel Blanc, Bugs se convirtió en uno de los personajes de dibujos animados más icónicos de la historia. Su frase característica '¿Qué hay de nuevo, viejo?' y su personalidad bromista lo convirtieron en una figura querida en todo el mundo.",
          de: "Bugs Bunny hatte sein offizielles Debüt im Zeichentrickfilm 'A Wild Hare' am 27. Juli 1940. Geschaffen von Tex Avery und gesprochen von Mel Blanc, wurde Bugs zu einer der ikonischsten Zeichentrickfiguren der Geschichte. Sein Erkennungssatz 'Eh, was gibt's, Doc?' und seine coole, witzige Persönlichkeit machten ihn weltweit zu einer beliebten Figur.",
          nl: "Bugs Bunny maakte zijn officiële debuut in de cartoon 'A Wild Hare' op 27 juli 1940. Gecreëerd door Tex Avery en ingesproken door Mel Blanc, werd Bugs een van de meest iconische stripfiguren in de geschiedenis. Zijn beroemde uitspraak 'What's up, Doc?' en zijn coole, grappige persoonlijkheid maakten hem wereldwijd geliefd."
        }
      },
      {
        question: {
          en: "On July 27, 1921, which life-saving hormone was successfully isolated in Canada?",
          es: "El 27 de julio de 1921, ¿qué hormona que salva vidas fue aislada con éxito en Canadá?",
          de: "Welches lebensrettende Hormon wurde am 27. Juli 1921 erfolgreich in Kanada isoliert?",
          nl: "Welk levensreddend hormoon werd op 27 juli 1921 succesvol geïsoleerd in Canada?"
        },
        options: [
          { en: "Adrenaline", es: "Adrenalina", de: "Adrenalin", nl: "Adrenaline" },
          { en: "Insulin", es: "Insulina", de: "Insulin", nl: "Insuline" },
          { en: "Growth hormone", es: "Hormona del crecimiento", de: "Wachstumshormon", nl: "Groeihormoon" },
          { en: "Testosterone", es: "Testosterona", de: "Testosteron", nl: "Testosteron" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Insulin was successfully isolated on July 27, 1921, by Frederick Banting and Charles Best at the University of Toronto. This discovery revolutionized diabetes treatment, transforming it from a fatal disease to a manageable condition. Banting received the Nobel Prize in 1923 for this breakthrough, which has saved millions of lives.",
          es: "La insulina fue aislada con éxito el 27 de julio de 1921 por Frederick Banting y Charles Best en la Universidad de Toronto. Este descubrimiento revolucionó el tratamiento de la diabetes, transformándola de una enfermedad mortal a una condición manejable. Banting recibió el Premio Nobel en 1923 por este avance, que ha salvado millones de vidas.",
          de: "Insulin wurde am 27. Juli 1921 erfolgreich von Frederick Banting und Charles Best an der Universität Toronto isoliert. Diese Entdeckung revolutionierte die Diabetesbehandlung und verwandelte sie von einer tödlichen Krankheit in einen beherrschbaren Zustand. Banting erhielt 1923 den Nobelpreis für diesen Durchbruch, der Millionen von Leben gerettet hat.",
          nl: "Insuline werd succesvol geïsoleerd op 27 juli 1921 door Frederick Banting en Charles Best aan de Universiteit van Toronto. Deze ontdekking revolutioneerde de diabetesbehandeling en transformeerde het van een fatale ziekte naar een beheersbare aandoening. Banting ontving in 1923 de Nobelprijs voor deze doorbraak, die miljoenen levens heeft gered."
        }
      },
      {
        question: {
          en: "On July 27, 1941, which agreement between the U.S. and Britain outlined post-war goals?",
          es: "El 27 de julio de 1941, ¿qué acuerdo entre EE.UU. y Gran Bretaña delineó los objetivos de posguerra?",
          de: "Welches Abkommen zwischen den USA und Großbritannien skizzierte am 27. Juli 1941 Nachkriegsziele?",
          nl: "Welk akkoord tussen de VS en Groot-Brittannië schetste op 27 juli 1941 naoorlogse doelen?"
        },
        options: [
          { en: "Treaty of Versailles", es: "Tratado de Versalles", de: "Vertrag von Versailles", nl: "Verdrag van Versailles" },
          { en: "Yalta Agreement", es: "Acuerdo de Yalta", de: "Jalta-Abkommen", nl: "Jalta-akkoord" },
          { en: "Atlantic Charter", es: "Carta del Atlántico", de: "Atlantik-Charta", nl: "Atlantisch Handvest" },
          { en: "Potsdam Declaration", es: "Declaración de Potsdam", de: "Potsdamer Erklärung", nl: "Potsdam-verklaring" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Atlantic Charter was issued on August 14, 1941 (not July 27), but discussions began around late July. Signed by President Roosevelt and Prime Minister Churchill, it outlined eight principles for a post-war world, including self-determination, free trade, and collective security. It laid the groundwork for the United Nations and post-WWII international order.",
          es: "La Carta del Atlántico fue emitida el 14 de agosto de 1941 (no el 27 de julio), pero las discusiones comenzaron a finales de julio. Firmada por el presidente Roosevelt y el primer ministro Churchill, delineó ocho principios para un mundo de posguerra, incluyendo la autodeterminación, el libre comercio y la seguridad colectiva. Sentó las bases para las Naciones Unidas y el orden internacional posterior a la Segunda Guerra Mundial.",
          de: "Die Atlantik-Charta wurde am 14. August 1941 (nicht am 27. Juli) herausgegeben, aber die Diskussionen begannen Ende Juli. Unterzeichnet von Präsident Roosevelt und Premierminister Churchill, umriss sie acht Prinzipien für eine Nachkriegswelt, darunter Selbstbestimmung, Freihandel und kollektive Sicherheit. Sie legte den Grundstein für die Vereinten Nationen und die internationale Ordnung nach dem Zweiten Weltkrieg.",
          nl: "Het Atlantisch Handvest werd uitgegeven op 14 augustus 1941 (niet 27 juli), maar discussies begonnen eind juli. Ondertekend door president Roosevelt en premier Churchill, schetste het acht principes voor een naoorlogse wereld, waaronder zelfbeschikking, vrije handel en collectieve veiligheid. Het legde de basis voor de Verenigde Naties en de internationale orde na WOII."
        }
      },
      {
        question: {
          en: "Which famous American writer and art collector was born on July 27, 1874?",
          es: "¿Qué famosa escritora y coleccionista de arte estadounidense nació el 27 de julio de 1874?",
          de: "Welche berühmte amerikanische Schriftstellerin und Kunstsammlerin wurde am 27. Juli 1874 geboren?",
          nl: "Welke beroemde Amerikaanse schrijfster en kunstverzamelaar werd geboren op 27 juli 1874?"
        },
        options: [
          { en: "Virginia Woolf", es: "Virginia Woolf", de: "Virginia Woolf", nl: "Virginia Woolf" },
          { en: "Gertrude Stein", es: "Gertrude Stein", de: "Gertrude Stein", nl: "Gertrude Stein" },
          { en: "Dorothy Parker", es: "Dorothy Parker", de: "Dorothy Parker", nl: "Dorothy Parker" },
          { en: "Edith Wharton", es: "Edith Wharton", de: "Edith Wharton", nl: "Edith Wharton" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Gertrude Stein was born on July 27, 1874, in Pennsylvania. She became a central figure in Parisian modernist culture, hosting a famous salon that attracted writers and artists like Hemingway, Picasso, and Matisse. Her experimental writing style and famous phrase 'A rose is a rose is a rose' made her an influential figure in 20th-century literature.",
          es: "Gertrude Stein nació el 27 de julio de 1874 en Pensilvania. Se convirtió en una figura central en la cultura modernista parisina, organizando un famoso salón que atrajo a escritores y artistas como Hemingway, Picasso y Matisse. Su estilo de escritura experimental y su famosa frase 'Una rosa es una rosa es una rosa' la convirtieron en una figura influyente en la literatura del siglo XX.",
          de: "Gertrude Stein wurde am 27. Juli 1874 in Pennsylvania geboren. Sie wurde zu einer zentralen Figur der Pariser modernistischen Kultur und führte einen berühmten Salon, der Schriftsteller und Künstler wie Hemingway, Picasso und Matisse anzog. Ihr experimenteller Schreibstil und ihr berühmter Satz 'Eine Rose ist eine Rose ist eine Rose' machten sie zu einer einflussreichen Figur der Literatur des 20. Jahrhunderts.",
          nl: "Gertrude Stein werd geboren op 27 juli 1874 in Pennsylvania. Ze werd een centrale figuur in de Parijse modernistische cultuur en hield een beroemde salon die schrijvers en kunstenaars als Hemingway, Picasso en Matisse aantrok. Haar experimentele schrijfstijl en beroemde zin 'Een roos is een roos is een roos' maakten haar een invloedrijke figuur in de 20e-eeuwse literatuur."
        }
      }
    ],

    // Day 28 - July 28th: Wars, Independence, and Tragedy
    day28: [
      {
        question: {
          en: "On July 28, 1914, what event triggered the start of World War I?",
          es: "El 28 de julio de 1914, ¿qué evento desencadenó el inicio de la Primera Guerra Mundial?",
          de: "Welches Ereignis löste am 28. Juli 1914 den Beginn des Ersten Weltkriegs aus?",
          nl: "Welke gebeurtenis leidde op 28 juli 1914 tot het begin van de Eerste Wereldoorlog?"
        },
        options: [
          { en: "Germany invaded Poland", es: "Alemania invadió Polonia", de: "Deutschland überfiel Polen", nl: "Duitsland viel Polen binnen" },
          { en: "Austria-Hungary declared war on Serbia", es: "Austria-Hungría declaró la guerra a Serbia", de: "Österreich-Ungarn erklärte Serbien den Krieg", nl: "Oostenrijk-Hongarije verklaarde Servië de oorlog" },
          { en: "Japan attacked Pearl Harbor", es: "Japón atacó Pearl Harbor", de: "Japan griff Pearl Harbor an", nl: "Japan viel Pearl Harbor aan" },
          { en: "France surrendered", es: "Francia se rindió", de: "Frankreich kapitulierte", nl: "Frankrijk capituleerde" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Austria-Hungary declared war on Serbia on July 28, 1914, exactly one month after the assassination of Archduke Franz Ferdinand. This declaration set off a chain reaction of alliances and declarations that plunged Europe into World War I, a conflict that would last four years and claim over 17 million lives.",
          es: "Austria-Hungría declaró la guerra a Serbia el 28 de julio de 1914, exactamente un mes después del asesinato del archiduque Francisco Fernando. Esta declaración desencadenó una reacción en cadena de alianzas y declaraciones que hundió a Europa en la Primera Guerra Mundial, un conflicto que duraría cuatro años y se cobraría más de 17 millones de vidas.",
          de: "Österreich-Ungarn erklärte Serbien am 28. Juli 1914 den Krieg, genau einen Monat nach der Ermordung von Erzherzog Franz Ferdinand. Diese Kriegserklärung löste eine Kettenreaktion von Bündnissen und Erklärungen aus, die Europa in den Ersten Weltkrieg stürzte, einen Konflikt, der vier Jahre dauern und über 17 Millionen Menschenleben fordern sollte.",
          nl: "Oostenrijk-Hongarije verklaarde Servië de oorlog op 28 juli 1914, precies een maand na de moord op aartshertog Franz Ferdinand. Deze verklaring veroorzaakte een kettingreactie van allianties en verklaringen die Europa in de Eerste Wereldoorlog stortte, een conflict dat vier jaar zou duren en meer dan 17 miljoen levens zou eisen."
        }
      },
      {
        question: {
          en: "On July 28, 1868, which amendment granting citizenship and equal protection was ratified?",
          es: "El 28 de julio de 1868, ¿qué enmienda que otorgaba ciudadanía y protección igualitaria fue ratificada?",
          de: "Welcher Verfassungszusatz, der Staatsbürgerschaft und gleichen Schutz gewährte, wurde am 28. Juli 1868 ratifiziert?",
          nl: "Welk amendement dat staatsburgerschap en gelijke bescherming verleende, werd op 28 juli 1868 geratificeerd?"
        },
        options: [
          { en: "13th Amendment", es: "13ª Enmienda", de: "13. Zusatzartikel", nl: "13e Amendement" },
          { en: "14th Amendment", es: "14ª Enmienda", de: "14. Zusatzartikel", nl: "14e Amendement" },
          { en: "15th Amendment", es: "15ª Enmienda", de: "15. Zusatzartikel", nl: "15e Amendement" },
          { en: "19th Amendment", es: "19ª Enmienda", de: "19. Zusatzartikel", nl: "19e Amendement" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 14th Amendment to the U.S. Constitution was ratified on July 28, 1868. It granted citizenship to all persons born or naturalized in the United States, including formerly enslaved people, and provided equal protection under the law. This Reconstruction amendment has been fundamental to civil rights cases throughout American history.",
          es: "La 14ª Enmienda a la Constitución de EE.UU. fue ratificada el 28 de julio de 1868. Otorgó ciudadanía a todas las personas nacidas o naturalizadas en Estados Unidos, incluidas las personas anteriormente esclavizadas, y proporcionó protección igualitaria bajo la ley. Esta enmienda de la Reconstrucción ha sido fundamental para los casos de derechos civiles a lo largo de la historia estadounidense.",
          de: "Der 14. Zusatzartikel zur US-Verfassung wurde am 28. Juli 1868 ratifiziert. Er gewährte die Staatsbürgerschaft allen in den Vereinigten Staaten geborenen oder eingebürgerten Personen, einschließlich ehemals versklavter Menschen, und bot gleichen Schutz nach dem Gesetz. Dieser Rekonstruktionszusatz war grundlegend für Bürgerrechtsfälle in der gesamten amerikanischen Geschichte.",
          nl: "Het 14e Amendement op de Amerikaanse Grondwet werd geratificeerd op 28 juli 1868. Het verleende staatsburgerschap aan alle personen geboren of genaturaliseerd in de Verenigde Staten, inclusief voormalig tot slaaf gemaakte mensen, en bood gelijke bescherming onder de wet. Dit Reconstructie-amendement is fundamenteel geweest voor burgerrechtenzaken in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "Which famous children's book author, creator of Peter Rabbit, was born on July 28, 1866?",
          es: "¿Qué famosa autora de libros infantiles, creadora de Peter Rabbit, nació el 28 de julio de 1866?",
          de: "Welche berühmte Kinderbuchautorin, Schöpferin von Peter Rabbit, wurde am 28. Juli 1866 geboren?",
          nl: "Welke beroemde kinderboekenschrijfster, schepper van Peter Rabbit, werd geboren op 28 juli 1866?"
        },
        options: [
          { en: "J.K. Rowling", es: "J.K. Rowling", de: "J.K. Rowling", nl: "J.K. Rowling" },
          { en: "Roald Dahl", es: "Roald Dahl", de: "Roald Dahl", nl: "Roald Dahl" },
          { en: "Beatrix Potter", es: "Beatrix Potter", de: "Beatrix Potter", nl: "Beatrix Potter" },
          { en: "Dr. Seuss", es: "Dr. Seuss", de: "Dr. Seuss", nl: "Dr. Seuss" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Beatrix Potter was born on July 28, 1866, in London. She created the beloved character Peter Rabbit and authored 23 children's books. Her stories featuring animals in the English countryside have enchanted generations of children. Potter was also a natural scientist and conservationist who preserved large areas of the Lake District.",
          es: "Beatrix Potter nació el 28 de julio de 1866 en Londres. Creó el querido personaje Peter Rabbit y escribió 23 libros infantiles. Sus historias con animales en la campiña inglesa han encantado a generaciones de niños. Potter también fue una científica natural y conservacionista que preservó grandes áreas del Distrito de los Lagos.",
          de: "Beatrix Potter wurde am 28. Juli 1866 in London geboren. Sie schuf die beliebte Figur Peter Rabbit und verfasste 23 Kinderbücher. Ihre Geschichten über Tiere auf dem englischen Land haben Generationen von Kindern verzaubert. Potter war auch Naturwissenschaftlerin und Naturschützerin, die große Gebiete des Lake District erhielt.",
          nl: "Beatrix Potter werd geboren op 28 juli 1866 in Londen. Ze creëerde het geliefde personage Peter Rabbit en schreef 23 kinderboeken. Haar verhalen over dieren op het Engelse platteland hebben generaties kinderen betoverd. Potter was ook een natuurwetenschapper en natuurbeschermer die grote gebieden van het Lake District behield."
        }
      },
      {
        question: {
          en: "On July 28, 1821, which South American country gained independence from Spain?",
          es: "El 28 de julio de 1821, ¿qué país sudamericano obtuvo la independencia de España?",
          de: "Welches südamerikanische Land erlangte am 28. Juli 1821 die Unabhängigkeit von Spanien?",
          nl: "Welk Zuid-Amerikaans land werd onafhankelijk van Spanje op 28 juli 1821?"
        },
        options: [
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Peru declared independence from Spain on July 28, 1821, proclaimed by General José de San Martín in Lima. This date is celebrated annually as Peru's Independence Day. However, full independence wasn't secured until December 1824 after the Battle of Ayacucho, which ended Spanish rule in South America.",
          es: "Perú declaró su independencia de España el 28 de julio de 1821, proclamada por el general José de San Martín en Lima. Esta fecha se celebra anualmente como el Día de la Independencia de Perú. Sin embargo, la independencia completa no se aseguró hasta diciembre de 1824 después de la Batalla de Ayacucho, que terminó con el dominio español en Sudamérica.",
          de: "Peru erklärte am 28. Juli 1821 seine Unabhängigkeit von Spanien, verkündet von General José de San Martín in Lima. Dieses Datum wird jährlich als Perus Unabhängigkeitstag gefeiert. Die vollständige Unabhängigkeit wurde jedoch erst im Dezember 1824 nach der Schlacht von Ayacucho gesichert, die die spanische Herrschaft in Südamerika beendete.",
          nl: "Peru verklaarde zich onafhankelijk van Spanje op 28 juli 1821, afgekondigd door generaal José de San Martín in Lima. Deze datum wordt jaarlijks gevierd als Peru's Onafhankelijkheidsdag. Volledige onafhankelijkheid werd echter pas bereikt in december 1824 na de Slag bij Ayacucho, die de Spaanse heerschappij in Zuid-Amerika beëindigde."
        }
      },
      {
        question: {
          en: "On July 28, 1881, which U.S. President was shot by Charles Guiteau?",
          es: "El 28 de julio de 1881, ¿qué presidente de EE.UU. fue disparado por Charles Guiteau?",
          de: "Welcher US-Präsident wurde am 28. Juli 1881 von Charles Guiteau erschossen?",
          nl: "Welke Amerikaanse president werd op 28 juli 1881 neergeschoten door Charles Guiteau?"
        },
        options: [
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "James A. Garfield", es: "James A. Garfield", de: "James A. Garfield", nl: "James A. Garfield" },
          { en: "William McKinley", es: "William McKinley", de: "William McKinley", nl: "William McKinley" },
          { en: "Ulysses S. Grant", es: "Ulysses S. Grant", de: "Ulysses S. Grant", nl: "Ulysses S. Grant" }
        ],
        correctIndex: 1,
        explanation: {
          en: "President James A. Garfield was shot on July 2, 1881 (not July 28), by Charles Guiteau at a Washington railroad station. Garfield lingered for 79 days before dying on September 19, 1881, largely due to infections from doctors' unsanitary treatment. The assassination led to civil service reform and the end of the spoils system.",
          es: "El presidente James A. Garfield fue disparado el 2 de julio de 1881 (no el 28 de julio) por Charles Guiteau en una estación de ferrocarril de Washington. Garfield languideció durante 79 días antes de morir el 19 de septiembre de 1881, en gran parte debido a infecciones del tratamiento insalubre de los médicos. El asesinato llevó a la reforma del servicio civil y el fin del sistema de clientelismo.",
          de: "Präsident James A. Garfield wurde am 2. Juli 1881 (nicht am 28. Juli) von Charles Guiteau an einem Washingtoner Bahnhof erschossen. Garfield kämpfte 79 Tage lang ums Überleben, bevor er am 19. September 1881 starb, größtenteils aufgrund von Infektionen durch die unhygienische Behandlung der Ärzte. Das Attentat führte zur Reform des öffentlichen Dienstes und zum Ende des Ämterpatronage-Systems.",
          nl: "President James A. Garfield werd neergeschoten op 2 juli 1881 (niet 28 juli) door Charles Guiteau op een Washington spoorwegstation. Garfield bleef 79 dagen in leven voordat hij stierf op 19 september 1881, grotendeels als gevolg van infecties door de onhygiënische behandeling van artsen. De moord leidde tot hervorming van de overheidsdienst en het einde van het vriendjespolitiek-systeem."
        }
      }
    ],

    // Day 29 - July 29th: Royal Wedding, NASA, Mussolini, Barcelona Olympics
    day29: [
      {
        question: {
          en: "Which royal couple married on July 29, 1981, in a ceremony watched by 750 million people worldwide?",
          es: "¿Qué pareja real se casó el 29 de julio de 1981 en una ceremonia vista por 750 millones de personas en todo el mundo?",
          de: "Welches königliche Paar heiratete am 29. Juli 1981 in einer Zeremonie, die von 750 Millionen Menschen weltweit gesehen wurde?",
          nl: "Welk koninklijk paar trouwde op 29 juli 1981 in een ceremonie die door 750 miljoen mensen wereldwijd werd bekeken?"
        },
        options: [
          { en: "William and Kate", es: "William y Kate", de: "William und Kate", nl: "William en Kate" },
          { en: "Charles and Diana", es: "Carlos y Diana", de: "Charles und Diana", nl: "Charles en Diana" },
          { en: "Harry and Meghan", es: "Harry y Meghan", de: "Harry und Meghan", nl: "Harry en Meghan" },
          { en: "Andrew and Sarah", es: "Andrés y Sarah", de: "Andrew und Sarah", nl: "Andrew en Sarah" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Prince Charles married Lady Diana Spencer on July 29, 1981, at St Paul's Cathedral in London. The televised ceremony was watched by an estimated 750 million people around the world, making it one of the most-watched events in television history. Diana's 25-foot train and the couple's balcony kiss became iconic moments.",
          es: "El príncipe Carlos se casó con Lady Diana Spencer el 29 de julio de 1981 en la Catedral de San Pablo en Londres. La ceremonia televisada fue vista por unos 750 millones de personas en todo el mundo, convirtiéndola en uno de los eventos más vistos en la historia de la televisión. La cola de 25 pies de Diana y el beso de la pareja en el balcón se convirtieron en momentos icónicos.",
          de: "Prinz Charles heiratete Lady Diana Spencer am 29. Juli 1981 in der St. Paul's Cathedral in London. Die im Fernsehen übertragene Zeremonie wurde von schätzungsweise 750 Millionen Menschen auf der ganzen Welt gesehen, was sie zu einem der meistgesehenen Ereignisse in der Fernsehgeschichte macht. Dianas 7,5-Meter-Schleppe und der Balkenkuss des Paares wurden zu ikonischen Momenten.",
          nl: "Prins Charles trouwde op 29 juli 1981 met Lady Diana Spencer in de St. Paul's Cathedral in Londen. De televisie-uitzending werd door naar schatting 750 miljoen mensen over de hele wereld bekeken, waardoor het een van de meest bekeken evenementen in de televisiegeschiedenis werd. Diana's 7,5 meter lange sleep en de balkenkus van het paar werden iconische momenten."
        }
      },
      {
        question: {
          en: "Which space organization was established on July 29, 1958?",
          es: "¿Qué organización espacial se estableció el 29 de julio de 1958?",
          de: "Welche Raumfahrtorganisation wurde am 29. Juli 1958 gegründet?",
          nl: "Welke ruimtevaartorganisatie werd opgericht op 29 juli 1958?"
        },
        options: [
          { en: "ESA (European Space Agency)", es: "ESA (Agencia Espacial Europea)", de: "ESA (Europäische Weltraumorganisation)", nl: "ESA (Europees Ruimteagentschap)" },
          { en: "NASA", es: "NASA", de: "NASA", nl: "NASA" },
          { en: "SpaceX", es: "SpaceX", de: "SpaceX", nl: "SpaceX" },
          { en: "Roscosmos", es: "Roscosmos", de: "Roskosmos", nl: "Roscosmos" }
        ],
        correctIndex: 1,
        explanation: {
          en: "NASA (National Aeronautics and Space Administration) was established on July 29, 1958, when President Dwight D. Eisenhower signed the National Aeronautics and Space Act. Created in response to the Soviet Union's launch of Sputnik, NASA has since achieved remarkable milestones including the Moon landings, Mars rovers, and the Hubble Space Telescope.",
          es: "La NASA (Administración Nacional de Aeronáutica y el Espacio) se estableció el 29 de julio de 1958 cuando el presidente Dwight D. Eisenhower firmó la Ley Nacional de Aeronáutica y el Espacio. Creada en respuesta al lanzamiento del Sputnik por la Unión Soviética, la NASA ha logrado desde entonces hitos notables, incluidos los alunizajes, los rovers de Marte y el Telescopio Espacial Hubble.",
          de: "Die NASA (National Aeronautics and Space Administration) wurde am 29. Juli 1958 gegründet, als Präsident Dwight D. Eisenhower das Nationale Luft- und Raumfahrtgesetz unterzeichnete. Als Reaktion auf den Start von Sputnik durch die Sowjetunion geschaffen, hat die NASA seitdem bemerkenswerte Meilensteine erreicht, darunter die Mondlandungen, Mars-Rover und das Hubble-Weltraumteleskop.",
          nl: "NASA (National Aeronautics and Space Administration) werd opgericht op 29 juli 1958, toen president Dwight D. Eisenhower de National Aeronautics and Space Act ondertekende. Opgericht als reactie op de lancering van Spoetnik door de Sovjet-Unie, heeft NASA sindsdien opmerkelijke mijlpalen bereikt, waaronder de maanlandingen, Mars-rovers en de Hubble-ruimtetelescoop."
        }
      },
      {
        question: {
          en: "Which Italian dictator was born on July 29, 1883?",
          es: "¿Qué dictador italiano nació el 29 de julio de 1883?",
          de: "Welcher italienische Diktator wurde am 29. Juli 1883 geboren?",
          nl: "Welke Italiaanse dictator werd geboren op 29 juli 1883?"
        },
        options: [
          { en: "Giuseppe Garibaldi", es: "Giuseppe Garibaldi", de: "Giuseppe Garibaldi", nl: "Giuseppe Garibaldi" },
          { en: "Victor Emmanuel III", es: "Víctor Manuel III", de: "Viktor Emanuel III", nl: "Victor Emmanuel III" },
          { en: "Benito Mussolini", es: "Benito Mussolini", de: "Benito Mussolini", nl: "Benito Mussolini" },
          { en: "Silvio Berlusconi", es: "Silvio Berlusconi", de: "Silvio Berlusconi", nl: "Silvio Berlusconi" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Benito Mussolini was born on July 29, 1883, in Predappio, Italy. He founded fascism and ruled Italy as Prime Minister from 1922 to 1943. Mussolini allied with Nazi Germany during World War II. His regime ended in 1943 when he was deposed, and he was executed by Italian partisans in 1945.",
          es: "Benito Mussolini nació el 29 de julio de 1883 en Predappio, Italia. Fundó el fascismo y gobernó Italia como Primer Ministro desde 1922 hasta 1943. Mussolini se alió con la Alemania nazi durante la Segunda Guerra Mundial. Su régimen terminó en 1943 cuando fue depuesto, y fue ejecutado por partisanos italianos en 1945.",
          de: "Benito Mussolini wurde am 29. Juli 1883 in Predappio, Italien, geboren. Er gründete den Faschismus und regierte Italien von 1922 bis 1943 als Premierminister. Mussolini verbündete sich während des Zweiten Weltkriegs mit Nazi-Deutschland. Sein Regime endete 1943, als er abgesetzt wurde, und er wurde 1945 von italienischen Partisanen hingerichtet.",
          nl: "Benito Mussolini werd geboren op 29 juli 1883 in Predappio, Italië. Hij stichtte het fascisme en regeerde Italië als premier van 1922 tot 1943. Mussolini sloot een verbond met nazi-Duitsland tijdens de Tweede Wereldoorlog. Zijn regime eindigde in 1943 toen hij werd afgezet, en hij werd in 1945 geëxecuteerd door Italiaanse partizanen."
        }
      },
      {
        question: {
          en: "What annual event is celebrated on July 29 to raise awareness about endangered big cats?",
          es: "¿Qué evento anual se celebra el 29 de julio para crear conciencia sobre los grandes felinos en peligro de extinción?",
          de: "Welches jährliche Ereignis wird am 29. Juli gefeiert, um das Bewusstsein für gefährdete Großkatzen zu schärfen?",
          nl: "Welk jaarlijks evenement wordt gevierd op 29 juli om bewustzijn te creëren over bedreigde grote katten?"
        },
        options: [
          { en: "World Lion Day", es: "Día Mundial del León", de: "Welttag des Löwen", nl: "Wereldleeuwendag" },
          { en: "International Tiger Day", es: "Día Internacional del Tigre", de: "Internationaler Tiger-Tag", nl: "Internationale Tijgerdag" },
          { en: "Leopard Awareness Day", es: "Día de Concienciación del Leopardo", de: "Tag des Leoparden-Bewusstseins", nl: "Luipaarddag" },
          { en: "Cheetah Conservation Day", es: "Día de Conservación del Guepardo", de: "Geparden-Erhaltungstag", nl: "Dag van de Jachtluipaard" }
        ],
        correctIndex: 1,
        explanation: {
          en: "International Tiger Day (also known as Global Tiger Day) is celebrated annually on July 29 to raise awareness about tiger conservation. Established in 2010 at the Saint Petersburg Tiger Summit, this day highlights the urgent need to protect wild tigers, whose population has declined by over 95% in the past century due to habitat loss and poaching.",
          es: "El Día Internacional del Tigre (también conocido como Día Mundial del Tigre) se celebra anualmente el 29 de julio para crear conciencia sobre la conservación de los tigres. Establecido en 2010 en la Cumbre del Tigre de San Petersburgo, este día destaca la necesidad urgente de proteger a los tigres salvajes, cuya población ha disminuido más del 95% en el último siglo debido a la pérdida de hábitat y la caza furtiva.",
          de: "Der Internationale Tiger-Tag (auch als Globaler Tiger-Tag bekannt) wird jährlich am 29. Juli gefeiert, um das Bewusstsein für den Tigerschutz zu schärfen. Dieser Tag wurde 2010 beim Tiger-Gipfel in St. Petersburg eingeführt und hebt die dringende Notwendigkeit hervor, wilde Tiger zu schützen, deren Population im letzten Jahrhundert aufgrund von Lebensraumverlust und Wilderei um über 95% zurückgegangen ist.",
          nl: "Internationale Tijgerdag (ook bekend als Wereldtijgerdag) wordt jaarlijks gevierd op 29 juli om bewustzijn te creëren over tijgerbescherming. Opgericht in 2010 tijdens de Sint-Petersburg Tijgertop, benadrukt deze dag de dringende noodzaak om wilde tijgers te beschermen, waarvan de populatie in de afgelopen eeuw met meer dan 95% is afgenomen door habitatverlies en stroperij."
        }
      },
      {
        question: {
          en: "Which major sporting event opened on July 29, 1992?",
          es: "¿Qué gran evento deportivo se inauguró el 29 de julio de 1992?",
          de: "Welche große Sportveranstaltung wurde am 29. Juli 1992 eröffnet?",
          nl: "Welk groot sportevenement werd geopend op 29 juli 1992?"
        },
        options: [
          { en: "Atlanta Olympics", es: "Juegos Olímpicos de Atlanta", de: "Olympische Spiele in Atlanta", nl: "Olympische Spelen in Atlanta" },
          { en: "Barcelona Olympics", es: "Juegos Olímpicos de Barcelona", de: "Olympische Spiele in Barcelona", nl: "Olympische Spelen in Barcelona" },
          { en: "Sydney Olympics", es: "Juegos Olímpicos de Sídney", de: "Olympische Spiele in Sydney", nl: "Olympische Spelen in Sydney" },
          { en: "Seoul Olympics", es: "Juegos Olímpicos de Seúl", de: "Olympische Spiele in Seoul", nl: "Olympische Spelen in Seoul" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 1992 Summer Olympics opened in Barcelona, Spain, on July 29, 1992. These games were particularly memorable as they marked the first Olympics after the Cold War, with unified German and former Soviet teams competing. The Barcelona Olympics also featured the original 'Dream Team' - the first US Olympic basketball team with NBA players, including Michael Jordan and Magic Johnson.",
          es: "Los Juegos Olímpicos de Verano de 1992 se inauguraron en Barcelona, España, el 29 de julio de 1992. Estos juegos fueron particularmente memorables ya que marcaron las primeras Olimpiadas después de la Guerra Fría, con equipos alemanes unificados y ex soviéticos compitiendo. Las Olimpiadas de Barcelona también presentaron el 'Dream Team' original, el primer equipo olímpico de baloncesto de EE.UU. con jugadores de la NBA, incluidos Michael Jordan y Magic Johnson.",
          de: "Die Olympischen Sommerspiele 1992 wurden am 29. Juli 1992 in Barcelona, Spanien, eröffnet. Diese Spiele waren besonders denkwürdig, da sie die ersten Olympischen Spiele nach dem Kalten Krieg markierten, bei denen vereinte deutsche und ehemalige sowjetische Teams antraten. Die Olympischen Spiele in Barcelona zeigten auch das ursprüngliche 'Dream Team' - das erste US-amerikanische olympische Basketballteam mit NBA-Spielern, darunter Michael Jordan und Magic Johnson.",
          nl: "De Olympische Zomerspelen van 1992 werden geopend in Barcelona, Spanje, op 29 juli 1992. Deze spelen waren bijzonder gedenkwaardig omdat ze de eerste Olympische Spelen na de Koude Oorlog markeerden, met verenigd Duitse en voormalige Sovjet-teams die deelnamen. De Olympische Spelen in Barcelona toonden ook het originele 'Dream Team' - het eerste Amerikaanse Olympische basketbalteam met NBA-spelers, waaronder Michael Jordan en Magic Johnson."
        }
      }
    ],

    // Day 30 - July 30th: Henry Ford, Schwarzenegger, Paperback Books, Vanuatu, World Cup
    day30: [
      {
        question: {
          en: "Which pioneering industrialist was born on July 30, 1863, revolutionizing automobile manufacturing?",
          es: "¿Qué industrial pionero nació el 30 de julio de 1863, revolucionando la fabricación de automóviles?",
          de: "Welcher Pionierindustrielle wurde am 30. Juli 1863 geboren und revolutionierte die Automobilherstellung?",
          nl: "Welke baanbrekende industrieel werd geboren op 30 juli 1863 en revolutioneerde de automobielfabricage?"
        },
        options: [
          { en: "Karl Benz", es: "Karl Benz", de: "Karl Benz", nl: "Karl Benz" },
          { en: "Henry Ford", es: "Henry Ford", de: "Henry Ford", nl: "Henry Ford" },
          { en: "Gottlieb Daimler", es: "Gottlieb Daimler", de: "Gottlieb Daimler", nl: "Gottlieb Daimler" },
          { en: "Ransom Olds", es: "Ransom Olds", de: "Ransom Olds", nl: "Ransom Olds" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Henry Ford was born on July 30, 1863, in Michigan. He founded the Ford Motor Company and developed the assembly line technique of mass production, making automobiles affordable for the middle class. The Model T, introduced in 1908, transformed American society and transportation. Ford also pioneered the $5 workday, doubling workers' wages.",
          es: "Henry Ford nació el 30 de julio de 1863 en Michigan. Fundó Ford Motor Company y desarrolló la técnica de línea de ensamblaje de producción en masa, haciendo que los automóviles fueran asequibles para la clase media. El Modelo T, introducido en 1908, transformó la sociedad y el transporte estadounidenses. Ford también fue pionero en el salario diario de $5, duplicando los salarios de los trabajadores.",
          de: "Henry Ford wurde am 30. Juli 1863 in Michigan geboren. Er gründete die Ford Motor Company und entwickelte die Fließbandtechnik der Massenproduktion, wodurch Autos für die Mittelschicht erschwinglich wurden. Das 1908 eingeführte Model T transformierte die amerikanische Gesellschaft und den Transport. Ford führte auch den 5-Dollar-Arbeitstag ein und verdoppelte die Löhne der Arbeiter.",
          nl: "Henry Ford werd geboren op 30 juli 1863 in Michigan. Hij stichtte Ford Motor Company en ontwikkelde de assemblagelijn-techniek voor massaproductie, waardoor auto's betaalbaar werden voor de middenklasse. De Model T, geïntroduceerd in 1908, transformeerde de Amerikaanse samenleving en het transport. Ford was ook pionier van de $5-werkdag en verdubbelde de lonen van arbeiders."
        }
      },
      {
        question: {
          en: "Which Austrian-American actor and politician was born on July 30, 1947?",
          es: "¿Qué actor y político austríaco-estadounidense nació el 30 de julio de 1947?",
          de: "Welcher österreichisch-amerikanische Schauspieler und Politiker wurde am 30. Juli 1947 geboren?",
          nl: "Welke Oostenrijks-Amerikaanse acteur en politicus werd geboren op 30 juli 1947?"
        },
        options: [
          { en: "Sylvester Stallone", es: "Sylvester Stallone", de: "Sylvester Stallone", nl: "Sylvester Stallone" },
          { en: "Jean-Claude Van Damme", es: "Jean-Claude Van Damme", de: "Jean-Claude Van Damme", nl: "Jean-Claude Van Damme" },
          { en: "Arnold Schwarzenegger", es: "Arnold Schwarzenegger", de: "Arnold Schwarzenegger", nl: "Arnold Schwarzenegger" },
          { en: "Dolph Lundgren", es: "Dolph Lundgren", de: "Dolph Lundgren", nl: "Dolph Lundgren" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Arnold Schwarzenegger was born on July 30, 1947, in Austria. He became a bodybuilding champion, winning Mr. Olympia seven times. He then became a Hollywood action star in films like 'The Terminator' and 'Predator.' He later served as the 38th Governor of California from 2003 to 2011, demonstrating success in multiple careers.",
          es: "Arnold Schwarzenegger nació el 30 de julio de 1947 en Austria. Se convirtió en campeón de culturismo, ganando Mr. Olympia siete veces. Luego se convirtió en una estrella de acción de Hollywood en películas como 'Terminator' y 'Depredador'. Más tarde sirvió como el 38º Gobernador de California de 2003 a 2011, demostrando éxito en múltiples carreras.",
          de: "Arnold Schwarzenegger wurde am 30. Juli 1947 in Österreich geboren. Er wurde Bodybuilding-Champion und gewann siebenmal Mr. Olympia. Dann wurde er ein Hollywood-Actionstar in Filmen wie 'Terminator' und 'Predator'. Später diente er von 2003 bis 2011 als 38. Gouverneur von Kalifornien und bewies Erfolg in mehreren Karrieren.",
          nl: "Arnold Schwarzenegger werd geboren op 30 juli 1947 in Oostenrijk. Hij werd bodybuilding-kampioen en won zeven keer Mr. Olympia. Daarna werd hij een Hollywood-actiester in films zoals 'The Terminator' en 'Predator'. Later diende hij van 2003 tot 2011 als de 38e gouverneur van Californië, wat succes in meerdere carrières aantoonde."
        }
      },
      {
        question: {
          en: "What revolutionary book format was first introduced on July 30, 1935, by Penguin Books?",
          es: "¿Qué formato revolucionario de libro fue introducido por primera vez el 30 de julio de 1935 por Penguin Books?",
          de: "Welches revolutionäre Buchformat wurde am 30. Juli 1935 von Penguin Books erstmals eingeführt?",
          nl: "Welk revolutionair boekformaat werd voor het eerst geïntroduceerd op 30 juli 1935 door Penguin Books?"
        },
        options: [
          { en: "Hardcover books", es: "Libros de tapa dura", de: "Gebundene Bücher", nl: "Hardcover boeken" },
          { en: "Paperback books", es: "Libros de bolsillo", de: "Taschenbücher", nl: "Paperback boeken" },
          { en: "E-books", es: "Libros electrónicos", de: "E-Books", nl: "E-boeken" },
          { en: "Audiobooks", es: "Audiolibros", de: "Hörbücher", nl: "Luisterboeken" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Penguin Books published the first mass-market paperback books on July 30, 1935, in Britain. Founded by Allen Lane, Penguin made quality literature affordable and accessible to the masses at just sixpence per book. This innovation democratized reading and transformed the publishing industry, making books as affordable as a pack of cigarettes.",
          es: "Penguin Books publicó los primeros libros de bolsillo del mercado masivo el 30 de julio de 1935 en Gran Bretaña. Fundado por Allen Lane, Penguin hizo que la literatura de calidad fuera asequible y accesible para las masas a solo seis peniques por libro. Esta innovación democratizó la lectura y transformó la industria editorial, haciendo que los libros fueran tan asequibles como un paquete de cigarrillos.",
          de: "Penguin Books veröffentlichte am 30. Juli 1935 in Großbritannien die ersten Massen-Taschenbücher. Von Allen Lane gegründet, machte Penguin Qualitätsliteratur erschwinglich und für die Massen zugänglich für nur sechs Pence pro Buch. Diese Innovation demokratisierte das Lesen und transformierte die Verlagsbranche, indem Bücher so erschwinglich wie eine Packung Zigaretten wurden.",
          nl: "Penguin Books publiceerde de eerste massagedrukte paperback boeken op 30 juli 1935 in Groot-Brittannië. Opgericht door Allen Lane, maakte Penguin kwaliteitsliteratuur betaalbaar en toegankelijk voor de massa's voor slechts zes pence per boek. Deze innovatie democratiseerde het lezen en transformeerde de uitgeverij-industrie, waardoor boeken net zo betaalbaar werden als een pakje sigaretten."
        }
      },
      {
        question: {
          en: "Which island nation in the South Pacific gained independence on July 30, 1980?",
          es: "¿Qué nación insular en el Pacífico Sur obtuvo la independencia el 30 de julio de 1980?",
          de: "Welcher Inselstaat im Südpazifik erlangte am 30. Juli 1980 die Unabhängigkeit?",
          nl: "Welke eilandnatie in de Stille Zuidzee verkreeg onafhankelijkheid op 30 juli 1980?"
        },
        options: [
          { en: "Fiji", es: "Fiyi", de: "Fidschi", nl: "Fiji" },
          { en: "Tonga", es: "Tonga", de: "Tonga", nl: "Tonga" },
          { en: "Samoa", es: "Samoa", de: "Samoa", nl: "Samoa" },
          { en: "Vanuatu", es: "Vanuatu", de: "Vanuatu", nl: "Vanuatu" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Vanuatu gained independence from joint British and French colonial rule on July 30, 1980. Previously known as the New Hebrides, this archipelago of about 80 islands is located in the South Pacific Ocean. Vanuatu is known for its diverse cultures, active volcanoes, and pristine beaches. The country has three official languages: Bislama, English, and French.",
          es: "Vanuatu obtuvo la independencia del dominio colonial conjunto británico y francés el 30 de julio de 1980. Anteriormente conocido como las Nuevas Hébridas, este archipiélago de unas 80 islas está ubicado en el Océano Pacífico Sur. Vanuatu es conocido por sus diversas culturas, volcanes activos y playas vírgenes. El país tiene tres idiomas oficiales: bislama, inglés y francés.",
          de: "Vanuatu erlangte am 30. Juli 1980 die Unabhängigkeit von der gemeinsamen britischen und französischen Kolonialherrschaft. Früher als Neue Hebriden bekannt, liegt dieser Archipel von etwa 80 Inseln im Südpazifischen Ozean. Vanuatu ist bekannt für seine vielfältigen Kulturen, aktiven Vulkane und unberührten Strände. Das Land hat drei Amtssprachen: Bislama, Englisch und Französisch.",
          nl: "Vanuatu verkreeg onafhankelijkheid van gezamenlijk Brits en Frans koloniaal bestuur op 30 juli 1980. Voorheen bekend als de Nieuwe Hebriden, ligt deze archipel van ongeveer 80 eilanden in de Stille Zuidzee. Vanuatu staat bekend om zijn diverse culturen, actieve vulkanen en ongerepte stranden. Het land heeft drie officiële talen: Bislama, Engels en Frans."
        }
      },
      {
        question: {
          en: "Which country won the first-ever FIFA World Cup final on July 30, 1930?",
          es: "¿Qué país ganó la primera final de la Copa Mundial de la FIFA el 30 de julio de 1930?",
          de: "Welches Land gewann das allererste FIFA-Weltmeisterschaftsfinale am 30. Juli 1930?",
          nl: "Welk land won de allereerste FIFA Wereldbeker-finale op 30 juli 1930?"
        },
        options: [
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Uruguay", es: "Uruguay", de: "Uruguay", nl: "Uruguay" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Uruguay won the first FIFA World Cup on July 30, 1930, defeating Argentina 4-2 in the final held in Montevideo, Uruguay. As hosts celebrating their centenary of independence, Uruguay's victory was particularly significant. The tournament featured only 13 teams, all invited, making it much smaller than modern World Cups which feature 32 teams (expanding to 48 in 2026).",
          es: "Uruguay ganó la primera Copa Mundial de la FIFA el 30 de julio de 1930, derrotando a Argentina 4-2 en la final celebrada en Montevideo, Uruguay. Como anfitriones celebrando su centenario de independencia, la victoria de Uruguay fue particularmente significativa. El torneo contó con solo 13 equipos, todos invitados, lo que lo hizo mucho más pequeño que las Copas Mundiales modernas que cuentan con 32 equipos (ampliándose a 48 en 2026).",
          de: "Uruguay gewann die erste FIFA-Weltmeisterschaft am 30. Juli 1930 und besiegte Argentinien im Finale in Montevideo, Uruguay, mit 4:2. Als Gastgeber, die ihr hundertjähriges Unabhängigkeitsjubiläum feierten, war Uruguays Sieg besonders bedeutsam. Das Turnier umfasste nur 13 Teams, alle eingeladen, was es viel kleiner machte als moderne Weltmeisterschaften mit 32 Teams (Erweiterung auf 48 im Jahr 2026).",
          nl: "Uruguay won de eerste FIFA Wereldbeker op 30 juli 1930 door Argentinië met 4-2 te verslaan in de finale in Montevideo, Uruguay. Als gastheer die hun eeuwfeest van onafhankelijkheid vierde, was Uruguay's overwinning bijzonder significant. Het toernooi telde slechts 13 teams, allemaal uitgenodigd, waardoor het veel kleiner was dan moderne Wereldbekers met 32 teams (uitbreiding naar 48 in 2026)."
        }
      }
    ],

    // Day 31 - July 31st: J.K. Rowling, Apollo 15, Harry Potter, Mallard, Franz Liszt
    day31: [
      {
        question: {
          en: "Which famous author was born on July 31, 1965, creating one of the best-selling book series of all time?",
          es: "¿Qué famosa autora nació el 31 de julio de 1965, creando una de las series de libros más vendidas de todos los tiempos?",
          de: "Welche berühmte Autorin wurde am 31. Juli 1965 geboren und schuf eine der meistverkauften Buchreihen aller Zeiten?",
          nl: "Welke beroemde auteur werd geboren op 31 juli 1965 en creëerde een van de bestverkochte boekenreeksen aller tijden?"
        },
        options: [
          { en: "Suzanne Collins", es: "Suzanne Collins", de: "Suzanne Collins", nl: "Suzanne Collins" },
          { en: "Stephenie Meyer", es: "Stephenie Meyer", de: "Stephenie Meyer", nl: "Stephenie Meyer" },
          { en: "J.K. Rowling", es: "J.K. Rowling", de: "J.K. Rowling", nl: "J.K. Rowling" },
          { en: "Veronica Roth", es: "Veronica Roth", de: "Veronica Roth", nl: "Veronica Roth" }
        ],
        correctIndex: 2,
        explanation: {
          en: "J.K. Rowling was born on July 31, 1965, in England. She created the Harry Potter series, which has sold over 500 million copies worldwide and been translated into 80 languages. The series sparked a reading revolution among young people and became a multi-billion dollar franchise including films, theme parks, and merchandise. Rowling went from struggling single mother to one of the world's wealthiest authors.",
          es: "J.K. Rowling nació el 31 de julio de 1965 en Inglaterra. Creó la serie de Harry Potter, que ha vendido más de 500 millones de copias en todo el mundo y ha sido traducida a 80 idiomas. La serie provocó una revolución de la lectura entre los jóvenes y se convirtió en una franquicia multimillonaria que incluye películas, parques temáticos y mercancía. Rowling pasó de ser una madre soltera en dificultades a una de las autoras más ricas del mundo.",
          de: "J.K. Rowling wurde am 31. Juli 1965 in England geboren. Sie schuf die Harry-Potter-Reihe, die weltweit über 500 Millionen Exemplare verkauft und in 80 Sprachen übersetzt wurde. Die Serie löste eine Leserevolution unter jungen Menschen aus und wurde zu einem Milliarden-Dollar-Franchise mit Filmen, Themenparks und Merchandise. Rowling entwickelte sich von einer kämpfenden Alleinerziehenden zu einer der reichsten Autorinnen der Welt.",
          nl: "J.K. Rowling werd geboren op 31 juli 1965 in Engeland. Ze creëerde de Harry Potter-serie, die wereldwijd meer dan 500 miljoen exemplaren heeft verkocht en in 80 talen is vertaald. De serie veroorzaakte een leesrevolutie onder jongeren en werd een franchise van meerdere miljarden dollars, inclusief films, themaparken en merchandise. Rowling ging van worstelende alleenstaande moeder naar een van 's werelds rijkste auteurs."
        }
      },
      {
        question: {
          en: "On July 31, 1971, astronauts first used which revolutionary vehicle on the Moon during the Apollo 15 mission?",
          es: "El 31 de julio de 1971, los astronautas usaron por primera vez qué vehículo revolucionario en la Luna durante la misión Apollo 15?",
          de: "Am 31. Juli 1971 nutzten Astronauten erstmals welches revolutionäre Fahrzeug auf dem Mond während der Apollo-15-Mission?",
          nl: "Op 31 juli 1971 gebruikten astronauten voor het eerst welk revolutionair voertuig op de Maan tijdens de Apollo 15-missie?"
        },
        options: [
          { en: "Moon Motorcycle", es: "Motocicleta Lunar", de: "Mondmotorrad", nl: "Maanmotor" },
          { en: "Moon Helicopter", es: "Helicóptero Lunar", de: "Mondhubschrauber", nl: "Maanhelikopter" },
          { en: "Moon Train", es: "Tren Lunar", de: "Mondzug", nl: "Maantrein" },
          { en: "Moon Buggy (Lunar Roving Vehicle)", es: "Buggy Lunar (Vehículo Rover Lunar)", de: "Mondrover (Mondfahrzeug)", nl: "Maanwagen (Lunar Roving Vehicle)" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On July 31, 1971, Apollo 15 astronauts David Scott and James Irwin became the first to drive the Lunar Roving Vehicle (LRV) on the Moon. This battery-powered, four-wheeled vehicle allowed astronauts to travel much farther from their landing site, covering 17 miles total. The LRV could reach speeds of 8 mph and carry equipment, rock samples, and two astronauts in their bulky spacesuits.",
          es: "El 31 de julio de 1971, los astronautas del Apollo 15 David Scott y James Irwin se convirtieron en los primeros en conducir el Vehículo Rover Lunar (LRV) en la Luna. Este vehículo de cuatro ruedas con batería permitió a los astronautas viajar mucho más lejos de su sitio de aterrizaje, cubriendo 17 millas en total. El LRV podía alcanzar velocidades de 8 mph y transportar equipos, muestras de rocas y dos astronautas con sus voluminosos trajes espaciales.",
          de: "Am 31. Juli 1971 wurden die Apollo-15-Astronauten David Scott und James Irwin die ersten, die das Mondfahrzeug (LRV) auf dem Mond fuhren. Dieses batteriebetriebene, vierrädrige Fahrzeug ermöglichte es Astronauten, viel weiter von ihrer Landestelle zu reisen und insgesamt 17 Meilen zurückzulegen. Das LRV konnte Geschwindigkeiten von 8 mph erreichen und Ausrüstung, Gesteinsproben und zwei Astronauten in ihren sperrigen Raumanzügen transportieren.",
          nl: "Op 31 juli 1971 werden Apollo 15-astronauten David Scott en James Irwin de eersten die de Lunar Roving Vehicle (LRV) op de Maan bestuurden. Dit op batterijen werkende, vierwielige voertuig stelde astronauten in staat veel verder van hun landingsplaats te reizen, in totaal 17 mijl. De LRV kon snelheden van 8 mph bereiken en apparatuur, gesteentemonsters en twee astronauten in hun omvangrijke ruimtepakken vervoeren."
        }
      },
      {
        question: {
          en: "Which beloved fictional character shares a birthday with J.K. Rowling on July 31?",
          es: "¿Qué querido personaje ficticio comparte cumpleaños con J.K. Rowling el 31 de julio?",
          de: "Welche beliebte fiktive Figur teilt einen Geburtstag mit J.K. Rowling am 31. Juli?",
          nl: "Welk geliefd fictief personage deelt een verjaardag met J.K. Rowling op 31 juli?"
        },
        options: [
          { en: "Frodo Baggins", es: "Frodo Bolsón", de: "Frodo Beutlin", nl: "Frodo Balings" },
          { en: "Harry Potter", es: "Harry Potter", de: "Harry Potter", nl: "Harry Potter" },
          { en: "Percy Jackson", es: "Percy Jackson", de: "Percy Jackson", nl: "Percy Jackson" },
          { en: "Katniss Everdeen", es: "Katniss Everdeen", de: "Katniss Everdeen", nl: "Katniss Everdeen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Harry Potter, the protagonist of J.K. Rowling's series, was born on July 31, 1980 - exactly 15 years after his creator. This shared birthday is no coincidence; Rowling intentionally gave her famous character the same birthday as herself. In the books, Harry receives his Hogwarts letter on his 11th birthday, July 31, 1991, which marks the beginning of his magical journey.",
          es: "Harry Potter, el protagonista de la serie de J.K. Rowling, nació el 31 de julio de 1980, exactamente 15 años después de su creadora. Este cumpleaños compartido no es una coincidencia; Rowling intencionalmente le dio a su famoso personaje el mismo cumpleaños que ella. En los libros, Harry recibe su carta de Hogwarts en su 11º cumpleaños, el 31 de julio de 1991, lo que marca el comienzo de su viaje mágico.",
          de: "Harry Potter, der Protagonist von J.K. Rowlings Serie, wurde am 31. Juli 1980 geboren - genau 15 Jahre nach seiner Schöpferin. Dieser gemeinsame Geburtstag ist kein Zufall; Rowling gab ihrer berühmten Figur absichtlich denselben Geburtstag wie sich selbst. In den Büchern erhält Harry seinen Hogwarts-Brief an seinem 11. Geburtstag, dem 31. Juli 1991, was den Beginn seiner magischen Reise markiert.",
          nl: "Harry Potter, de protagonist van J.K. Rowlings serie, werd geboren op 31 juli 1980 - precies 15 jaar na zijn schepper. Deze gedeelde verjaardag is geen toeval; Rowling gaf haar beroemde personage opzettelijk dezelfde verjaardag als zijzelf. In de boeken ontvangt Harry zijn Zweinstein-brief op zijn 11e verjaardag, 31 juli 1991, wat het begin markeert van zijn magische reis."
        }
      },
      {
        question: {
          en: "On July 31, 1938, which steam locomotive set a world speed record for steam trains that still stands today?",
          es: "El 31 de julio de 1938, ¿qué locomotora de vapor estableció un récord mundial de velocidad para trenes de vapor que aún se mantiene hoy?",
          de: "Am 31. Juli 1938 stellte welche Dampflokomotive einen Weltgeschwindigkeitsrekord für Dampfzüge auf, der bis heute Bestand hat?",
          nl: "Op 31 juli 1938 vestigde welke stoomlocomotief een wereldsnelheidsrecord voor stoomtreinen dat vandaag nog steeds staat?"
        },
        options: [
          { en: "Flying Scotsman", es: "Flying Scotsman", de: "Flying Scotsman", nl: "Flying Scotsman" },
          { en: "LNER Mallard", es: "LNER Mallard", de: "LNER Mallard", nl: "LNER Mallard" },
          { en: "Orient Express", es: "Orient Express", de: "Orient Express", nl: "Orient Express" },
          { en: "Big Boy", es: "Big Boy", de: "Big Boy", nl: "Big Boy" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The LNER Class A4 locomotive 'Mallard' set the world speed record for steam locomotives on July 31, 1938, reaching 126 mph (203 km/h) on the East Coast Main Line in England. This record has never been officially broken. The Mallard was designed by Sir Nigel Gresley and is now preserved at the National Railway Museum in York, England, as one of Britain's most celebrated engineering achievements.",
          es: "La locomotora LNER Clase A4 'Mallard' estableció el récord mundial de velocidad para locomotoras de vapor el 31 de julio de 1938, alcanzando 126 mph (203 km/h) en la Línea Principal de la Costa Este en Inglaterra. Este récord nunca ha sido oficialmente superado. El Mallard fue diseñado por Sir Nigel Gresley y ahora se conserva en el Museo Nacional del Ferrocarril en York, Inglaterra, como uno de los logros de ingeniería más celebrados de Gran Bretaña.",
          de: "Die LNER-Klasse-A4-Lokomotive 'Mallard' stellte am 31. Juli 1938 den Weltgeschwindigkeitsrekord für Dampflokomotiven auf und erreichte 126 mph (203 km/h) auf der East Coast Main Line in England. Dieser Rekord wurde nie offiziell gebrochen. Die Mallard wurde von Sir Nigel Gresley entworfen und ist jetzt im National Railway Museum in York, England, als eine von Großbritanniens gefeiertsten ingenieurtechnischen Errungenschaften erhalten.",
          nl: "De LNER Class A4-locomotief 'Mallard' vestigde het wereldsnelheidsrecord voor stoomlocomotieven op 31 juli 1938 en bereikte 126 mph (203 km/u) op de East Coast Main Line in Engeland. Dit record is nooit officieel gebroken. De Mallard werd ontworpen door Sir Nigel Gresley en wordt nu bewaard in het National Railway Museum in York, Engeland, als een van Groot-Brittannië's meest gevierde technische prestaties."
        }
      },
      {
        question: {
          en: "Which Hungarian composer and piano virtuoso was born on July 31, 1811?",
          es: "¿Qué compositor húngaro y virtuoso del piano nació el 31 de julio de 1811?",
          de: "Welcher ungarische Komponist und Klaviervirtuose wurde am 31. Juli 1811 geboren?",
          nl: "Welke Hongaarse componist en pianovirtuoos werd geboren op 31 juli 1811?"
        },
        options: [
          { en: "Frédéric Chopin", es: "Frédéric Chopin", de: "Frédéric Chopin", nl: "Frédéric Chopin" },
          { en: "Johannes Brahms", es: "Johannes Brahms", de: "Johannes Brahms", nl: "Johannes Brahms" },
          { en: "Franz Liszt", es: "Franz Liszt", de: "Franz Liszt", nl: "Franz Liszt" },
          { en: "Robert Schumann", es: "Robert Schumann", de: "Robert Schumann", nl: "Robert Schumann" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Franz Liszt was born on July 31, 1811, in Hungary. He was one of the greatest pianists of all time and a pioneering composer of the Romantic era. Liszt revolutionized piano technique, invented the symphonic poem, and was known for his virtuosic performances that caused 'Lisztomania' - mass hysteria among fans. He also mentored many young musicians and became an influential teacher.",
          es: "Franz Liszt nació el 31 de julio de 1811 en Hungría. Fue uno de los mejores pianistas de todos los tiempos y un compositor pionero de la era romántica. Liszt revolucionó la técnica del piano, inventó el poema sinfónico y era conocido por sus actuaciones virtuosas que causaron 'Lisztomanía': histeria masiva entre los fanáticos. También fue mentor de muchos músicos jóvenes y se convirtió en un maestro influyente.",
          de: "Franz Liszt wurde am 31. Juli 1811 in Ungarn geboren. Er war einer der größten Pianisten aller Zeiten und ein wegweisender Komponist der Romantik. Liszt revolutionierte die Klaviertechnik, erfand die sinfonische Dichtung und war bekannt für seine virtuosen Auftritte, die 'Lisztomanie' verursachten - Massenhysterie unter Fans. Er betreute auch viele junge Musiker und wurde ein einflussreicher Lehrer.",
          nl: "Franz Liszt werd geboren op 31 juli 1811 in Hongarije. Hij was een van de grootste pianisten aller tijden en een baanbrekend componist van het romantische tijdperk. Liszt revolutioneerde pianotechniek, vond het symfonisch gedicht uit en stond bekend om zijn virtuoze optredens die 'Lisztomanie' veroorzaakten - massahysterie onder fans. Hij begeleidde ook veel jonge musici en werd een invloedrijke leraar."
        }
      }
    ]
  };

  // Export July challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('july', julyChallenges);
  }

})();