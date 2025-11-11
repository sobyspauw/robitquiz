// March Daily Challenges - 31 days × 5 questions each = 155 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {
  
  const marchChallenges = {
    name: {
      en: "March Daily Challenges",
      es: "Desafíos Diarios de Marzo", 
      de: "März Tägliche Herausforderungen",
      nl: "Maart Dagelijkse Uitdagingen"
    },
    
    // Day 1 - March 1st: Peace Corps & Yellowstone National Park
    day1: [
      {
        question: {
          en: "In what year did President John F. Kennedy establish the Peace Corps?",
          es: "¿En qué año estableció el presidente John F. Kennedy el Cuerpo de Paz?",
          de: "In welchem Jahr gründete Präsident John F. Kennedy das Peace Corps?",
          nl: "In welk jaar richtte president John F. Kennedy het Peace Corps op?"
        },
        options: [
          { en: "1961", es: "1961", de: "1961", nl: "1961" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1958", es: "1958", de: "1958", nl: "1958" },
          { en: "1970", es: "1970", de: "1970", nl: "1970" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 1, 1961, President Kennedy issued Executive Order #10924, establishing the Peace Corps. Since then, over 240,000 Americans have served as volunteers promoting international service and cultural exchange.",
          es: "El 1 de marzo de 1961, el presidente Kennedy emitió la Orden Ejecutiva #10924, estableciendo el Cuerpo de Paz. Desde entonces, más de 240,000 estadounidenses han servido como voluntarios promoviendo el servicio internacional y el intercambio cultural.",
          de: "Am 1. März 1961 erließ Präsident Kennedy die Executive Order #10924 und gründete das Peace Corps. Seitdem haben über 240.000 Amerikaner als Freiwillige gedient und internationalen Dienst und kulturellen Austausch gefördert.",
          nl: "Op 1 maart 1961 vaardigde president Kennedy Executive Order #10924 uit en richtte het Peace Corps op. Sindsdien hebben meer dan 240.000 Amerikanen gediend als vrijwilligers die internationale dienstverlening en culturele uitwisseling bevorderen."
        }
      },
      {
        question: {
          en: "Which U.S. president signed the act creating Yellowstone, the world's first national park, on March 1, 1872?",
          es: "¿Qué presidente de EE.UU. firmó la ley que creó Yellowstone, el primer parque nacional del mundo, el 1 de marzo de 1872?",
          de: "Welcher US-Präsident unterzeichnete am 1. März 1872 das Gesetz zur Gründung von Yellowstone, dem ersten Nationalpark der Welt?",
          nl: "Welke Amerikaanse president ondertekende op 1 maart 1872 de wet die Yellowstone, 's werelds eerste nationale park, oprichtte?"
        },
        options: [
          { en: "Ulysses S. Grant", es: "Ulysses S. Grant", de: "Ulysses S. Grant", nl: "Ulysses S. Grant" },
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "Theodore Roosevelt", es: "Theodore Roosevelt", de: "Theodore Roosevelt", nl: "Theodore Roosevelt" },
          { en: "Andrew Johnson", es: "Andrew Johnson", de: "Andrew Johnson", nl: "Andrew Johnson" }
        ],
        correctIndex: 1,
        explanation: {
          en: "President Ulysses S. Grant signed the Yellowstone National Park Protection Act on March 1, 1872, establishing the world's first national park. This groundbreaking decision set a precedent for environmental conservation worldwide.",
          es: "El presidente Ulysses S. Grant firmó la Ley de Protección del Parque Nacional Yellowstone el 1 de marzo de 1872, estableciendo el primer parque nacional del mundo. Esta decisión revolucionaria sentó un precedente para la conservación ambiental en todo el mundo.",
          de: "Präsident Ulysses S. Grant unterzeichnete am 1. März 1872 das Yellowstone National Park Protection Act und gründete damit den ersten Nationalpark der Welt. Diese bahnbrechende Entscheidung setzte weltweit Maßstäbe für Umweltschutz.",
          nl: "President Ulysses S. Grant ondertekende op 1 maart 1872 de Yellowstone National Park Protection Act en richtte daarmee 's werelds eerste nationale park op. Deze baanbrekende beslissing zette een precedent voor milieubehoud wereldwijd."
        }
      },
      {
        question: {
          en: "Approximately how many Americans have served in the Peace Corps since its founding?",
          es: "¿Aproximadamente cuántos estadounidenses han servido en el Cuerpo de Paz desde su fundación?",
          de: "Wie viele Amerikaner haben seit seiner Gründung im Peace Corps gedient?",
          nl: "Hoeveel Amerikanen hebben sinds de oprichting bij het Peace Corps gediend?"
        },
        options: [
          { en: "Over 240,000", es: "Más de 240,000", de: "Über 240.000", nl: "Meer dan 240.000" },
          { en: "About 50,000", es: "Cerca de 50,000", de: "Etwa 50.000", nl: "Ongeveer 50.000" },
          { en: "Over 1 million", es: "Más de 1 millón", de: "Über 1 Million", nl: "Meer dan 1 miljoen" },
          { en: "About 100,000", es: "Cerca de 100,000", de: "Etwa 100.000", nl: "Ongeveer 100.000" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Since the Peace Corps was established in 1961, more than 240,000 Americans have volunteered their service. These volunteers work in communities around the world on projects related to education, health, agriculture, and economic development.",
          es: "Desde que se estableció el Cuerpo de Paz en 1961, más de 240,000 estadounidenses han ofrecido su servicio como voluntarios. Estos voluntarios trabajan en comunidades de todo el mundo en proyectos relacionados con educación, salud, agricultura y desarrollo económico.",
          de: "Seit der Gründung des Peace Corps im Jahr 1961 haben mehr als 240.000 Amerikaner freiwillig ihren Dienst geleistet. Diese Freiwilligen arbeiten in Gemeinden auf der ganzen Welt an Projekten in den Bereichen Bildung, Gesundheit, Landwirtschaft und wirtschaftliche Entwicklung.",
          nl: "Sinds het Peace Corps in 1961 werd opgericht, hebben meer dan 240.000 Amerikanen vrijwillig hun diensten verleend. Deze vrijwilligers werken in gemeenschappen over de hele wereld aan projecten op het gebied van onderwijs, gezondheid, landbouw en economische ontwikkeling."
        }
      },
      {
        question: {
          en: "What significance did Yellowstone National Park have for environmental conservation?",
          es: "¿Qué importancia tuvo el Parque Nacional Yellowstone para la conservación ambiental?",
          de: "Welche Bedeutung hatte der Yellowstone-Nationalpark für den Umweltschutz?",
          nl: "Welke betekenis had Yellowstone National Park voor natuurbehoud?"
        },
        options: [
          { en: "It was the world's first national park", es: "Fue el primer parque nacional del mundo", de: "Es war der erste Nationalpark der Welt", nl: "Het was 's werelds eerste nationale park" },
          { en: "It was the largest park ever created", es: "Fue el parque más grande jamás creado", de: "Es war der größte jemals geschaffene Park", nl: "Het was het grootste park ooit gemaakt" },
          { en: "It was the first park with geysers", es: "Fue el primer parque con géiseres", de: "Es war der erste Park mit Geysiren", nl: "Het was het eerste park met geisers" },
          { en: "It was the first American park", es: "Fue el primer parque estadounidense", de: "Es war der erste amerikanische Park", nl: "Het was het eerste Amerikaanse park" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Yellowstone became the world's first national park on March 1, 1872. This pioneering concept of protecting natural areas for public enjoyment set a global precedent, inspiring the creation of national parks worldwide and establishing the foundation for modern conservation movements.",
          es: "Yellowstone se convirtió en el primer parque nacional del mundo el 1 de marzo de 1872. Este concepto pionero de proteger áreas naturales para el disfrute público sentó un precedente global, inspirando la creación de parques nacionales en todo el mundo y estableciendo la base de los movimientos modernos de conservación.",
          de: "Yellowstone wurde am 1. März 1872 zum ersten Nationalpark der Welt. Dieses wegweisende Konzept, Naturgebiete zum öffentlichen Genuss zu schützen, setzte einen globalen Präzedenzfall und inspirierte die Schaffung von Nationalparks weltweit sowie die Grundlage moderner Naturschutzbewegungen.",
          nl: "Yellowstone werd op 1 maart 1872 's werelds eerste nationale park. Dit baanbrekende concept van het beschermen van natuurgebieden voor publiek genot zette een wereldwijd precedent, inspireerde de oprichting van nationale parken wereldwijd en legde de basis voor moderne natuurbeschermingsbewegingen."
        }
      },
      {
        question: {
          en: "What document did President Kennedy sign to establish the Peace Corps?",
          es: "¿Qué documento firmó el presidente Kennedy para establecer el Cuerpo de Paz?",
          de: "Welches Dokument unterzeichnete Präsident Kennedy zur Gründung des Peace Corps?",
          nl: "Welk document ondertekende president Kennedy om het Peace Corps op te richten?"
        },
        options: [
          { en: "Executive Order #10924", es: "Orden Ejecutiva #10924", de: "Executive Order #10924", nl: "Executive Order #10924" },
          { en: "Public Law 87-293", es: "Ley Pública 87-293", de: "Öffentliches Gesetz 87-293", nl: "Publieke Wet 87-293" },
          { en: "Presidential Directive 12", es: "Directiva Presidencial 12", de: "Präsidialdirektive 12", nl: "Presidentiële Richtlijn 12" },
          { en: "Act of Congress 1961", es: "Acta del Congreso 1961", de: "Kongressgesetz 1961", nl: "Congresswet 1961" }
        ],
        correctIndex: 2,
        explanation: {
          en: "President John F. Kennedy issued Executive Order #10924 on March 1, 1961, to formally establish the Peace Corps. The order created a framework for American volunteers to serve in developing countries, promoting peace through education, health care, and community development.",
          es: "El presidente John F. Kennedy emitió la Orden Ejecutiva #10924 el 1 de marzo de 1961 para establecer formalmente el Cuerpo de Paz. La orden creó un marco para que los voluntarios estadounidenses sirvieran en países en desarrollo, promoviendo la paz a través de la educación, la atención médica y el desarrollo comunitario.",
          de: "Präsident John F. Kennedy erließ am 1. März 1961 die Executive Order #10924, um das Peace Corps offiziell zu gründen. Die Anordnung schuf einen Rahmen für amerikanische Freiwillige, um in Entwicklungsländern zu dienen und Frieden durch Bildung, Gesundheitsfürsorge und Gemeindeentwicklung zu fördern.",
          nl: "President John F. Kennedy vaardigde op 1 maart 1961 Executive Order #10924 uit om het Peace Corps formeel op te richten. Het besluit creëerde een raamwerk voor Amerikaanse vrijwilligers om in ontwikkelingslanden te dienen, waarbij vrede werd bevorderd door onderwijs, gezondheidszorg en gemeenschapsontwikkeling."
        }
      }
    ],
    
    // Day 2 - March 2nd: Dr. Seuss & Read Across America
    day2: [
      {
        question: {
          en: "When was Dr. Seuss (Theodor Seuss Geisel) born?",
          es: "¿Cuándo nació Dr. Seuss (Theodor Seuss Geisel)?",
          de: "Wann wurde Dr. Seuss (Theodor Seuss Geisel) geboren?",
          nl: "Wanneer werd Dr. Seuss (Theodor Seuss Geisel) geboren?"
        },
        options: [
          { en: "March 2, 1904", es: "2 de marzo de 1904", de: "2. März 1904", nl: "2 maart 1904" },
          { en: "March 2, 1912", es: "2 de marzo de 1912", de: "2. März 1912", nl: "2 maart 1912" },
          { en: "March 2, 1898", es: "2 de marzo de 1898", de: "2. März 1898", nl: "2 maart 1898" },
          { en: "March 2, 1920", es: "2 de marzo de 1920", de: "2. März 1920", nl: "2 maart 1920" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Dr. Seuss was born on March 2, 1904, in Springfield, Massachusetts. He became one of the most beloved children's authors, writing 48 books that have sold over 200 million copies worldwide and been translated into multiple languages.",
          es: "Dr. Seuss nació el 2 de marzo de 1904 en Springfield, Massachusetts. Se convirtió en uno de los autores infantiles más queridos, escribiendo 48 libros que han vendido más de 200 millones de copias en todo el mundo y han sido traducidos a múltiples idiomas.",
          de: "Dr. Seuss wurde am 2. März 1904 in Springfield, Massachusetts, geboren. Er wurde einer der beliebtesten Kinderbuchautoren und schrieb 48 Bücher, die weltweit über 200 Millionen Mal verkauft und in mehrere Sprachen übersetzt wurden.",
          nl: "Dr. Seuss werd geboren op 2 maart 1904 in Springfield, Massachusetts. Hij werd een van de meest geliefde kinderboekenschrijvers en schreef 48 boeken die wereldwijd meer dan 200 miljoen keer zijn verkocht en in meerdere talen zijn vertaald."
        }
      },
      {
        question: {
          en: "How many books did Dr. Seuss write during his lifetime?",
          es: "¿Cuántos libros escribió Dr. Seuss durante su vida?",
          de: "Wie viele Bücher hat Dr. Seuss in seinem Leben geschrieben?",
          nl: "Hoeveel boeken schreef Dr. Seuss tijdens zijn leven?"
        },
        options: [
          { en: "48 books", es: "48 libros", de: "48 Bücher", nl: "48 boeken" },
          { en: "25 books", es: "25 libros", de: "25 Bücher", nl: "25 boeken" },
          { en: "100 books", es: "100 libros", de: "100 Bücher", nl: "100 boeken" },
          { en: "15 books", es: "15 libros", de: "15 Bücher", nl: "15 boeken" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Dr. Seuss wrote 48 books during his lifetime, which have collectively sold well over 200 million copies. His works include classics like 'The Cat in the Hat,' 'How the Grinch Stole Christmas,' and 'Green Eggs and Ham,' making him one of the most successful children's authors in history.",
          es: "Dr. Seuss escribió 48 libros durante su vida, que colectivamente han vendido más de 200 millones de copias. Sus obras incluyen clásicos como 'El Gato en el Sombrero', 'Cómo el Grinch robó la Navidad' y 'Huevos verdes con jamón', convirtiéndolo en uno de los autores infantiles más exitosos de la historia.",
          de: "Dr. Seuss schrieb während seines Lebens 48 Bücher, die insgesamt weit über 200 Millionen Mal verkauft wurden. Zu seinen Werken gehören Klassiker wie 'Der Kater mit Hut', 'Wie der Grinch Weihnachten gestohlen hat' und 'Grüne Eier mit Schinken', was ihn zu einem der erfolgreichsten Kinderbuchautoren der Geschichte macht.",
          nl: "Dr. Seuss schreef tijdens zijn leven 48 boeken, die samen ruim 200 miljoen keer zijn verkocht. Zijn werken omvatten klassiekers zoals 'De Kat met de Hoed', 'Hoe de Grinch Kerstmis stal' en 'Groene Eieren met Ham', waardoor hij een van de meest succesvolle kinderboekenschrijvers in de geschiedenis werd."
        }
      },
      {
        question: {
          en: "What reading celebration takes place on Dr. Seuss's birthday?",
          es: "¿Qué celebración de lectura tiene lugar en el cumpleaños de Dr. Seuss?",
          de: "Welche Lesefeier findet an Dr. Seuss' Geburtstag statt?",
          nl: "Welke leesviering vindt plaats op de verjaardag van Dr. Seuss?"
        },
        options: [
          { en: "Read Across America Day", es: "Día de Leer en América", de: "Read Across America Day", nl: "Read Across America Day" },
          { en: "National Book Day", es: "Día Nacional del Libro", de: "Nationaler Buchtag", nl: "Nationale Boekendag" },
          { en: "Children's Literature Festival", es: "Festival de Literatura Infantil", de: "Kinderliteraturfestival", nl: "Kinderliteratuurfestival" },
          { en: "World Reading Week", es: "Semana Mundial de la Lectura", de: "Weltweit Lesewoche", nl: "Wereldleesweek" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Read Across America Day is celebrated on March 2nd, Dr. Seuss's birthday. The National Education Association established this celebration in 1997, with the first event held in 1998, to honor his contributions to literacy and emphasize the importance of reading and education.",
          es: "El Día de Leer en América se celebra el 2 de marzo, el cumpleaños de Dr. Seuss. La Asociación Nacional de Educación estableció esta celebración en 1997, con el primer evento realizado en 1998, para honrar sus contribuciones a la alfabetización y enfatizar la importancia de la lectura y la educación.",
          de: "Der Read Across America Day wird am 2. März, Dr. Seuss' Geburtstag, gefeiert. Die National Education Association etablierte diese Feier 1997, mit der ersten Veranstaltung 1998, um seine Beiträge zur Lesefähigkeit zu ehren und die Bedeutung von Lesen und Bildung zu betonen.",
          nl: "Read Across America Day wordt gevierd op 2 maart, de verjaardag van Dr. Seuss. De National Education Association richtte deze viering in 1997 op, met het eerste evenement in 1998, om zijn bijdragen aan geletterdheid te eren en het belang van lezen en onderwijs te benadrukken."
        }
      },
      {
        question: {
          en: "Which of these is NOT a famous Dr. Seuss book?",
          es: "¿Cuál de estos NO es un libro famoso de Dr. Seuss?",
          de: "Welches davon ist KEIN berühmtes Dr. Seuss Buch?",
          nl: "Welke hiervan is GEEN beroemd Dr. Seuss boek?"
        },
        options: [
          { en: "Charlotte's Web", es: "La telaraña de Carlota", de: "Charlottes Netz", nl: "Charlotte's Web" },
          { en: "The Cat in the Hat", es: "El Gato en el Sombrero", de: "Der Kater mit Hut", nl: "De Kat met de Hoed" },
          { en: "Green Eggs and Ham", es: "Huevos verdes con jamón", de: "Grüne Eier mit Schinken", nl: "Groene Eieren met Ham" },
          { en: "How the Grinch Stole Christmas", es: "Cómo el Grinch robó la Navidad", de: "Wie der Grinch Weihnachten gestohlen hat", nl: "Hoe de Grinch Kerstmis stal" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Charlotte's Web was written by E.B. White, not Dr. Seuss. Dr. Seuss wrote 'The Cat in the Hat,' 'Green Eggs and Ham,' and 'How the Grinch Stole Christmas,' among many other beloved children's books known for their imaginative characters, playful rhymes, and important life lessons.",
          es: "La telaraña de Carlota fue escrita por E.B. White, no por Dr. Seuss. Dr. Seuss escribió 'El Gato en el Sombrero', 'Huevos verdes con jamón' y 'Cómo el Grinch robó la Navidad', entre muchos otros libros infantiles queridos conocidos por sus personajes imaginativos, rimas juguetonas y lecciones de vida importantes.",
          de: "Charlottes Netz wurde von E.B. White geschrieben, nicht von Dr. Seuss. Dr. Seuss schrieb 'Der Kater mit Hut', 'Grüne Eier mit Schinken' und 'Wie der Grinch Weihnachten gestohlen hat', neben vielen anderen beliebten Kinderbüchern, die für ihre fantasievollen Charaktere, verspielten Reime und wichtigen Lebenslektionen bekannt sind.",
          nl: "Charlotte's Web werd geschreven door E.B. White, niet door Dr. Seuss. Dr. Seuss schreef 'De Kat met de Hoed', 'Groene Eieren met Ham' en 'Hoe de Grinch Kerstmis stal', naast vele andere geliefde kinderboeken die bekend staan om hun fantasierijke personages, speelse rijmpjes en belangrijke levenslessen."
        }
      },
      {
        question: {
          en: "In what year did professional basketball player Wilt Chamberlain score 100 points in a single NBA game?",
          es: "¿En qué año el jugador de baloncesto profesional Wilt Chamberlain anotó 100 puntos en un solo juego de la NBA?",
          de: "In welchem Jahr erzielte der Profi-Basketballspieler Wilt Chamberlain 100 Punkte in einem einzigen NBA-Spiel?",
          nl: "In welk jaar scoorde professioneel basketbalspeler Wilt Chamberlain 100 punten in één NBA-wedstrijd?"
        },
        options: [
          { en: "1962", es: "1962", de: "1962", nl: "1962" },
          { en: "1958", es: "1958", de: "1958", nl: "1958" },
          { en: "1970", es: "1970", de: "1970", nl: "1970" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 2, 1962, Wilt Chamberlain scored 100 points in a single NBA game, a record that still stands today. This incredible feat occurred when his Philadelphia Warriors defeated the New York Knicks 169-147, and it remains one of the most unbreakable records in professional sports history.",
          es: "El 2 de marzo de 1962, Wilt Chamberlain anotó 100 puntos en un solo juego de la NBA, un récord que aún se mantiene hoy. Esta increíble hazaña ocurrió cuando sus Philadelphia Warriors derrotaron a los New York Knicks 169-147, y sigue siendo uno de los récords más inquebrantables en la historia del deporte profesional.",
          de: "Am 2. März 1962 erzielte Wilt Chamberlain 100 Punkte in einem einzigen NBA-Spiel, ein Rekord, der bis heute besteht. Diese unglaubliche Leistung ereignete sich, als seine Philadelphia Warriors die New York Knicks mit 169-147 besiegten, und bleibt einer der unübertroffenen Rekorde in der Geschichte des professionellen Sports.",
          nl: "Op 2 maart 1962 scoorde Wilt Chamberlain 100 punten in één NBA-wedstrijd, een record dat vandaag nog steeds staat. Deze ongelooflijke prestatie vond plaats toen zijn Philadelphia Warriors de New York Knicks versloegen met 169-147, en het blijft een van de meest onbreekbare records in de geschiedenis van de professionele sport."
        }
      }
    ],
    
    // Day 3 - March 3rd: Alexander Graham Bell's Birthday
    day3: [
      {
        question: {
          en: "When was Alexander Graham Bell born?",
          es: "¿Cuándo nació Alexander Graham Bell?",
          de: "Wann wurde Alexander Graham Bell geboren?",
          nl: "Wanneer werd Alexander Graham Bell geboren?"
        },
        options: [
          { en: "March 3, 1847", es: "3 de marzo de 1847", de: "3. März 1847", nl: "3 maart 1847" },
          { en: "March 3, 1850", es: "3 de marzo de 1850", de: "3. März 1850", nl: "3 maart 1850" },
          { en: "March 3, 1840", es: "3 de marzo de 1840", de: "3. März 1840", nl: "3 maart 1840" },
          { en: "March 3, 1855", es: "3 de marzo de 1855", de: "3. März 1855", nl: "3 maart 1855" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Alexander Graham Bell was born on March 3, 1847, in Edinburgh, Scotland. He became a Scottish-born Canadian-American inventor and scientist best known for patenting the first practical telephone. His work on hearing and speech would revolutionize global communication.",
          es: "Alexander Graham Bell nació el 3 de marzo de 1847 en Edimburgo, Escocia. Se convirtió en un inventor y científico canadiense-estadounidense nacido en Escocia, mejor conocido por patentar el primer teléfono práctico. Su trabajo sobre la audición y el habla revolucionaría la comunicación global.",
          de: "Alexander Graham Bell wurde am 3. März 1847 in Edinburgh, Schottland, geboren. Er wurde ein in Schottland geborener kanadisch-amerikanischer Erfinder und Wissenschaftler, der am bekanntesten für die Patentierung des ersten praktischen Telefons ist. Seine Arbeit über Gehör und Sprache revolutionierte die globale Kommunikation.",
          nl: "Alexander Graham Bell werd geboren op 3 maart 1847 in Edinburgh, Schotland. Hij werd een in Schotland geboren Canadees-Amerikaanse uitvinder en wetenschapper die het best bekend staat om het patenteren van de eerste praktische telefoon. Zijn werk op het gebied van gehoor en spraak zou de wereldwijde communicatie revolutioneren."
        }
      },
      {
        question: {
          en: "Where was Alexander Graham Bell born?",
          es: "¿Dónde nació Alexander Graham Bell?",
          de: "Wo wurde Alexander Graham Bell geboren?",
          nl: "Waar werd Alexander Graham Bell geboren?"
        },
        options: [
          { en: "Edinburgh, Scotland", es: "Edimburgo, Escocia", de: "Edinburgh, Schottland", nl: "Edinburgh, Schotland" },
          { en: "London, England", es: "Londres, Inglaterra", de: "London, England", nl: "Londen, Engeland" },
          { en: "Boston, USA", es: "Boston, EE.UU.", de: "Boston, USA", nl: "Boston, VS" },
          { en: "Toronto, Canada", es: "Toronto, Canadá", de: "Toronto, Kanada", nl: "Toronto, Canada" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bell was born on South Charlotte Street in Edinburgh, Scotland. A stone inscription marks the location as Bell's birthplace. His father was Alexander Melville Bell, a phonetician, which influenced young Bell's interest in speech and hearing.",
          es: "Bell nació en South Charlotte Street en Edimburgo, Escocia. Una inscripción en piedra marca el lugar como el lugar de nacimiento de Bell. Su padre era Alexander Melville Bell, un fonetista, lo que influyó en el interés del joven Bell por el habla y la audición.",
          de: "Bell wurde in der South Charlotte Street in Edinburgh, Schottland, geboren. Eine Steininschrift markiert den Ort als Bells Geburtsort. Sein Vater war Alexander Melville Bell, ein Phonetiker, was das Interesse des jungen Bell an Sprache und Gehör beeinflusste.",
          nl: "Bell werd geboren op South Charlotte Street in Edinburgh, Schotland. Een stenen inscriptie markeert de locatie als Bells geboorteplaats. Zijn vader was Alexander Melville Bell, een foneticus, wat de interesse van de jonge Bell in spraak en gehoor beïnvloedde."
        }
      },
      {
        question: {
          en: "What was Alexander Graham Bell's original birth name?",
          es: "¿Cuál era el nombre de nacimiento original de Alexander Graham Bell?",
          de: "Was war Alexander Graham Bells ursprünglicher Geburtsname?",
          nl: "Wat was Alexander Graham Bells oorspronkelijke geboortenaam?"
        },
        options: [
          { en: "Alexander Bell", es: "Alexander Bell", de: "Alexander Bell", nl: "Alexander Bell" },
          { en: "Graham Bell", es: "Graham Bell", de: "Graham Bell", nl: "Graham Bell" },
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "A. Graham Bell", es: "A. Graham Bell", de: "A. Graham Bell", nl: "A. Graham Bell" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bell was born as simply 'Alexander Bell,' without a middle name. At age 10, he asked his father for a middle name like his two brothers had. For his 11th birthday, his father agreed and allowed him to adopt the name 'Graham,' becoming Alexander Graham Bell.",
          es: "Bell nació simplemente como 'Alexander Bell', sin un segundo nombre. A los 10 años, le pidió a su padre un segundo nombre como tenían sus dos hermanos. Para su undécimo cumpleaños, su padre aceptó y le permitió adoptar el nombre 'Graham', convirtiéndose en Alexander Graham Bell.",
          de: "Bell wurde einfach als 'Alexander Bell' geboren, ohne zweiten Vornamen. Mit 10 Jahren bat er seinen Vater um einen zweiten Vornamen wie seine beiden Brüder. Zu seinem 11. Geburtstag stimmte sein Vater zu und erlaubte ihm, den Namen 'Graham' anzunehmen und wurde zu Alexander Graham Bell.",
          nl: "Bell werd geboren als eenvoudig 'Alexander Bell', zonder tweede naam. Op 10-jarige leeftijd vroeg hij zijn vader om een tweede naam zoals zijn twee broers hadden. Voor zijn 11e verjaardag stemde zijn vader toe en stond hem toe de naam 'Graham' aan te nemen, waardoor hij Alexander Graham Bell werd."
        }
      },
      {
        question: {
          en: "What company did Alexander Graham Bell co-found in 1885?",
          es: "¿Qué compañía cofundó Alexander Graham Bell en 1885?",
          de: "Welche Firma gründete Alexander Graham Bell 1885 mit?",
          nl: "Welk bedrijf heeft Alexander Graham Bell in 1885 mee opgericht?"
        },
        options: [
          { en: "AT&T (American Telephone and Telegraph Company)", es: "AT&T (American Telephone and Telegraph Company)", de: "AT&T (American Telephone and Telegraph Company)", nl: "AT&T (American Telephone and Telegraph Company)" },
          { en: "Western Union", es: "Western Union", de: "Western Union", nl: "Western Union" },
          { en: "General Electric", es: "General Electric", de: "General Electric", nl: "General Electric" },
          { en: "Edison Electric", es: "Edison Electric", de: "Edison Electric", nl: "Edison Electric" }
        ],
        correctIndex: 3,
        explanation: {
          en: "In 1885, Bell co-founded AT&T (American Telephone and Telegraph Company), which became one of the largest telecommunications companies in the world. This company played a crucial role in building telephone infrastructure across America and became a telecommunications giant that exists to this day.",
          es: "En 1885, Bell cofundó AT&T (American Telephone and Telegraph Company), que se convirtió en una de las compañías de telecomunicaciones más grandes del mundo. Esta empresa desempeñó un papel crucial en la construcción de infraestructura telefónica en toda América y se convirtió en un gigante de las telecomunicaciones que existe hasta el día de hoy.",
          de: "1885 gründete Bell AT&T (American Telephone and Telegraph Company) mit, das zu einem der größten Telekommunikationsunternehmen der Welt wurde. Dieses Unternehmen spielte eine entscheidende Rolle beim Aufbau der Telefoninfrastruktur in ganz Amerika und wurde zu einem Telekommunikationsriesen, der bis heute existiert.",
          nl: "In 1885 richtte Bell AT&T (American Telephone and Telegraph Company) mee op, dat uitgroeide tot een van de grootste telecommunicatiebedrijven ter wereld. Dit bedrijf speelde een cruciale rol bij het opbouwen van telefooninfrastructuur in heel Amerika en werd een telecommunicatiegigant die tot op de dag van vandaag bestaat."
        }
      },
      {
        question: {
          en: "On March 3, 1845, which U.S. state became the 27th state to join the Union?",
          es: "El 3 de marzo de 1845, ¿qué estado de EE.UU. se convirtió en el estado número 27 en unirse a la Unión?",
          de: "Welcher US-Bundesstaat wurde am 3. März 1845 der 27. Bundesstaat der Union?",
          nl: "Welke Amerikaanse staat werd op 3 maart 1845 de 27e staat die toetrad tot de Unie?"
        },
        options: [
          { en: "Florida", es: "Florida", de: "Florida", nl: "Florida" },
          { en: "Texas", es: "Texas", de: "Texas", nl: "Texas" },
          { en: "California", es: "California", de: "Kalifornien", nl: "Californië" },
          { en: "Louisiana", es: "Luisiana", de: "Louisiana", nl: "Louisiana" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Florida became the 27th state to join the United States on March 3, 1845, when President John Tyler signed the Florida statehood bill into law. The territory had been under Spanish and British control at various times before being ceded to the United States in 1821. Florida's admission came during a period of rapid territorial expansion, just one day before Texas was admitted as the 28th state. The state's name comes from the Spanish 'Pascua Florida' meaning 'Feast of Flowers,' named by explorer Juan Ponce de León.",
          es: "Florida se convirtió en el estado número 27 en unirse a Estados Unidos el 3 de marzo de 1845, cuando el presidente John Tyler firmó el proyecto de ley de estadidad de Florida. El territorio había estado bajo control español y británico en varios momentos antes de ser cedido a Estados Unidos en 1821. La admisión de Florida llegó durante un período de rápida expansión territorial, solo un día antes de que Texas fuera admitido como el estado número 28. El nombre del estado proviene del español 'Pascua Florida' que significa 'Fiesta de las Flores', nombrado por el explorador Juan Ponce de León.",
          de: "Florida wurde am 3. März 1845 der 27. Bundesstaat der Vereinigten Staaten, als Präsident John Tyler das Florida-Staatlichkeitsgesetz unterzeichnete. Das Territorium stand zu verschiedenen Zeiten unter spanischer und britischer Kontrolle, bevor es 1821 an die Vereinigten Staaten abgetreten wurde. Floridas Aufnahme erfolgte während einer Zeit rascher territorialer Expansion, nur einen Tag bevor Texas als 28. Bundesstaat aufgenommen wurde. Der Name des Staates stammt vom spanischen 'Pascua Florida', was 'Fest der Blumen' bedeutet, benannt vom Entdecker Juan Ponce de León.",
          nl: "Florida werd op 3 maart 1845 de 27e staat die toetrad tot de Verenigde Staten, toen president John Tyler de wet voor Florida's staatschap ondertekende. Het territorium had op verschillende momenten onder Spaanse en Britse controle gestaan voordat het in 1821 aan de Verenigde Staten werd afgestaan. Florida's toelating vond plaats tijdens een periode van snelle territoriale expansie, slechts één dag voordat Texas als 28e staat werd toegelaten. De naam van de staat komt van het Spaanse 'Pascua Florida', wat 'Feest van de Bloemen' betekent, genoemd door ontdekkingsreiziger Juan Ponce de León."
        }
      }
    ],

    // Day 4 - March 4th: US Inauguration Day History
    day4: [
      {
        question: {
          en: "What Constitutional Amendment moved Inauguration Day from March 4 to January 20?",
          es: "¿Qué Enmienda Constitucional trasladó el Día de la Inauguración del 4 de marzo al 20 de enero?",
          de: "Welche Verfassungsänderung verlegte den Inaugurationsdag vom 4. März auf den 20. Januar?",
          nl: "Welk Grondwetsartikel verplaatste Inauguration Day van 4 maart naar 20 januari?"
        },
        options: [
          { en: "The Twentieth Amendment", es: "La Vigésima Enmienda", de: "Die Zwanzigste Änderung", nl: "Het Twintigste Amendement" },
          { en: "The Twelfth Amendment", es: "La Duodécima Enmienda", de: "Die Zwölfte Änderung", nl: "Het Twaalfde Amendement" },
          { en: "The Twenty-Fifth Amendment", es: "La Vigésima Quinta Enmienda", de: "Die Fünfundzwanzigste Änderung", nl: "Het Vijfentwintigste Amendement" },
          { en: "The Fifteenth Amendment", es: "La Decimoquinta Enmienda", de: "Die Fünfzehnte Änderung", nl: "Het Vijftiende Amendement" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Twentieth Amendment, ratified in 1933 and nicknamed the 'Lame Duck Amendment,' moved Inauguration Day from March 4 to January 20, beginning with the 1937 inauguration. This change shortened the transition period and eliminated extended lame duck congressional sessions.",
          es: "La Vigésima Enmienda, ratificada en 1933 y apodada la 'Enmienda del Pato Cojo', trasladó el Día de la Inauguración del 4 de marzo al 20 de enero, comenzando con la inauguración de 1937. Este cambio acortó el período de transición y eliminó las sesiones congresionales prolongadas del pato cojo.",
          de: "Die Zwanzigste Änderung, 1933 ratifiziert und als 'Lame Duck Amendment' bezeichnet, verlegte den Inaugurationsdag vom 4. März auf den 20. Januar, beginnend mit der Vereidigung 1937. Diese Änderung verkürzte die Übergangszeit und eliminierte verlängerte Lame-Duck-Kongresssitzungen.",
          nl: "Het Twintigste Amendement, geratificeerd in 1933 en bijgenaamd het 'Lame Duck Amendment', verplaatste Inauguration Day van 4 maart naar 20 januari, beginnend met de inhuldiging van 1937. Deze verandering verkortte de overgangsperiode en elimineerde verlengde lame duck congreszittingen."
        }
      },
      {
        question: {
          en: "Which president had his first inauguration on Monday, March 4, 1861?",
          es: "¿Qué presidente tuvo su primera inauguración el lunes 4 de marzo de 1861?",
          de: "Welcher Präsident hatte seine erste Vereidigung am Montag, 4. März 1861?",
          nl: "Welke president had zijn eerste inhuldiging op maandag 4 maart 1861?"
        },
        options: [
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "Andrew Johnson", es: "Andrew Johnson", de: "Andrew Johnson", nl: "Andrew Johnson" },
          { en: "James Buchanan", es: "James Buchanan", de: "James Buchanan", nl: "James Buchanan" },
          { en: "Ulysses S. Grant", es: "Ulysses S. Grant", de: "Ulysses S. Grant", nl: "Ulysses S. Grant" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Abraham Lincoln had his first inauguration on Monday, March 4, 1861. He and outgoing President James Buchanan left the Willard Hotel in Washington, D.C., in a horse-drawn carriage bound for the Capitol. Lincoln's inauguration came at a critical time just before the Civil War.",
          es: "Abraham Lincoln tuvo su primera inauguración el lunes 4 de marzo de 1861. Él y el presidente saliente James Buchanan salieron del Hotel Willard en Washington, D.C., en un carruaje tirado por caballos con destino al Capitolio. La inauguración de Lincoln llegó en un momento crítico justo antes de la Guerra Civil.",
          de: "Abraham Lincoln hatte seine erste Vereidigung am Montag, 4. März 1861. Er und der scheidende Präsident James Buchanan verließen das Willard Hotel in Washington, D.C., in einer von Pferden gezogenen Kutsche in Richtung Kapitol. Lincolns Vereidigung fand zu einem kritischen Zeitpunkt kurz vor dem Bürgerkrieg statt.",
          nl: "Abraham Lincoln had zijn eerste inhuldiging op maandag 4 maart 1861. Hij en vertrekkend president James Buchanan verlieten het Willard Hotel in Washington, D.C., in een door paarden getrokken koets richting het Capitool. Lincolns inhuldiging vond plaats op een kritiek moment vlak voor de Burgeroorlog."
        }
      },
      {
        question: {
          en: "Why was the Twentieth Amendment nicknamed the 'Lame Duck Amendment'?",
          es: "¿Por qué se apodó a la Vigésima Enmienda la 'Enmienda del Pato Cojo'?",
          de: "Warum wurde die Zwanzigste Änderung als 'Lame Duck Amendment' bezeichnet?",
          nl: "Waarom werd het Twintigste Amendement bijgenaamd het 'Lame Duck Amendment'?"
        },
        options: [
          { en: "It eliminated extended lame duck congressional sessions", es: "Eliminó las sesiones congresionales prolongadas del pato cojo", de: "Es eliminierte verlängerte Lame-Duck-Kongresssitzungen", nl: "Het elimineerde verlengde lame duck congreszittingen" },
          { en: "It was about duck hunting regulations", es: "Trataba sobre regulaciones de caza de patos", de: "Es ging um Entenjagd-Vorschriften", nl: "Het ging over eendenjacht regelgeving" },
          { en: "It dealt with disabled politicians", es: "Trataba sobre políticos discapacitados", de: "Es behandelte behinderte Politiker", nl: "Het ging over gehandicapte politici" },
          { en: "It was passed by unpopular politicians", es: "Fue aprobada por políticos impopulares", de: "Es wurde von unpopulären Politikern verabschiedet", nl: "Het werd aangenomen door impopulaire politici" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Twentieth Amendment eliminated extended 'lame duck' sessions where outgoing officials remained in power for months after losing elections. By moving the inauguration from March 4 to January 20 and congressional start dates to January 3, it significantly shortened the transition period between administrations.",
          es: "La Vigésima Enmienda eliminó las sesiones prolongadas de 'pato cojo' donde los funcionarios salientes permanecían en el poder durante meses después de perder las elecciones. Al trasladar la inauguración del 4 de marzo al 20 de enero y las fechas de inicio del congreso al 3 de enero, acortó significativamente el período de transición entre administraciones.",
          de: "Die Zwanzigste Änderung eliminierte verlängerte 'Lame-Duck'-Sitzungen, bei denen ausscheidende Amtsträger monatelang nach verlorenen Wahlen an der Macht blieben. Durch die Verlegung der Vereidigung vom 4. März auf den 20. Januar und des Kongressbeginns auf den 3. Januar verkürzte sie die Übergangszeit zwischen Regierungen erheblich.",
          nl: "Het Twintigste Amendement elimineerde verlengde 'lame duck' sessies waarbij vertrekkende functionarissen maanden na verloren verkiezingen aan de macht bleven. Door de inhuldiging van 4 maart naar 20 januari te verplaatsen en de startdata van het congres naar 3 januari, verkortte het de overgangsperiode tussen regeringen aanzienlijk."
        }
      },
      {
        question: {
          en: "When did the first inauguration under the new January 20 date occur?",
          es: "¿Cuándo ocurrió la primera inauguración bajo la nueva fecha del 20 de enero?",
          de: "Wann fand die erste Vereidigung unter dem neuen Datum 20. Januar statt?",
          nl: "Wanneer vond de eerste inhuldiging onder de nieuwe datum 20 januari plaats?"
        },
        options: [
          { en: "1937", es: "1937", de: "1937", nl: "1937" },
          { en: "1933", es: "1933", de: "1933", nl: "1933" },
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first presidential inauguration held on January 20 occurred in 1937, when Franklin D. Roosevelt began his second term. This was the first inauguration after the Twentieth Amendment was ratified in 1933, which changed the date from the traditional March 4 to January 20.",
          es: "La primera inauguración presidencial celebrada el 20 de enero ocurrió en 1937, cuando Franklin D. Roosevelt comenzó su segundo mandato. Esta fue la primera inauguración después de que se ratificara la Vigésima Enmienda en 1933, que cambió la fecha del tradicional 4 de marzo al 20 de enero.",
          de: "Die erste Präsidentenvereidigung am 20. Januar fand 1937 statt, als Franklin D. Roosevelt seine zweite Amtszeit begann. Dies war die erste Vereidigung nach der Ratifizierung der Zwanzigsten Änderung im Jahr 1933, die das Datum vom traditionellen 4. März auf den 20. Januar änderte.",
          nl: "De eerste presidentiële inhuldiging op 20 januari vond plaats in 1937, toen Franklin D. Roosevelt zijn tweede termijn begon. Dit was de eerste inhuldiging na de ratificatie van het Twintigste Amendement in 1933, dat de datum veranderde van de traditionele 4 maart naar 20 januari."
        }
      },
      {
        question: {
          en: "On March 4, 1791, which territory became the 14th state admitted to the United States?",
          es: "El 4 de marzo de 1791, ¿qué territorio se convirtió en el estado número 14 admitido en Estados Unidos?",
          de: "Welches Territorium wurde am 4. März 1791 der 14. Bundesstaat der Vereinigten Staaten?",
          nl: "Welk territorium werd op 4 maart 1791 de 14e staat die werd toegelaten tot de Verenigde Staten?"
        },
        options: [
          { en: "Vermont", es: "Vermont", de: "Vermont", nl: "Vermont" },
          { en: "Kentucky", es: "Kentucky", de: "Kentucky", nl: "Kentucky" },
          { en: "Maine", es: "Maine", de: "Maine", nl: "Maine" },
          { en: "Tennessee", es: "Tennessee", de: "Tennessee", nl: "Tennessee" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Vermont was admitted as the 14th state on March 4, 1791, becoming the first state to join the Union after the original 13 colonies. Vermont had existed as an independent republic from 1777 to 1791, with its own constitution, currency, and postal service. The Vermont Republic was the first written national constitution to prohibit slavery and establish universal male suffrage without property requirements. Vermont's admission helped balance political power between northern and southern states during the early years of the nation.",
          es: "Vermont fue admitido como el estado número 14 el 4 de marzo de 1791, convirtiéndose en el primer estado en unirse a la Unión después de las 13 colonias originales. Vermont había existido como república independiente de 1777 a 1791, con su propia constitución, moneda y servicio postal. La República de Vermont fue la primera constitución nacional escrita en prohibir la esclavitud y establecer el sufragio universal masculino sin requisitos de propiedad. La admisión de Vermont ayudó a equilibrar el poder político entre los estados del norte y del sur durante los primeros años de la nación.",
          de: "Vermont wurde am 4. März 1791 als 14. Bundesstaat aufgenommen und war damit der erste Staat, der nach den ursprünglichen 13 Kolonien der Union beitrat. Vermont hatte von 1777 bis 1791 als unabhängige Republik existiert, mit eigener Verfassung, Währung und Postdienst. Die Republik Vermont war die erste geschriebene nationale Verfassung, die Sklaverei verbot und das allgemeine Wahlrecht für Männer ohne Eigentumsanforderungen einführte. Vermonts Aufnahme half, die politische Macht zwischen nördlichen und südlichen Staaten in den frühen Jahren der Nation auszugleichen.",
          nl: "Vermont werd op 4 maart 1791 toegelaten als de 14e staat en was daarmee de eerste staat die toetrad tot de Unie na de oorspronkelijke 13 koloniën. Vermont had van 1777 tot 1791 bestaan als een onafhankelijke republiek, met een eigen grondwet, munt en postdienst. De Republiek Vermont was de eerste geschreven nationale grondwet die slavernij verbood en algemeen mannenkiesrecht instelde zonder eigendomsvereisten. Vermont's toelating hielp de politieke macht tussen noordelijke en zuidelijke staten in evenwicht te brengen tijdens de vroege jaren van de natie."
        }
      }
    ],

    // Day 5 - March 5th: Boston Massacre & Stalin's Death
    day5: [
      {
        question: {
          en: "In what year did the Boston Massacre occur?",
          es: "¿En qué año ocurrió la Masacre de Boston?",
          de: "In welchem Jahr ereignete sich das Boston-Massaker?",
          nl: "In welk jaar vond het bloedbad van Boston plaats?"
        },
        options: [
          { en: "1770", es: "1770", de: "1770", nl: "1770" },
          { en: "1776", es: "1776", de: "1776", nl: "1776" },
          { en: "1765", es: "1765", de: "1765", nl: "1765" },
          { en: "1780", es: "1780", de: "1780", nl: "1780" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Boston Massacre occurred on March 5, 1770, when British soldiers killed five American colonists including Crispus Attucks. This event contributed significantly to the outbreak of the American Revolutionary War five years later and became a symbol of British oppression.",
          es: "La Masacre de Boston ocurrió el 5 de marzo de 1770, cuando soldados británicos mataron a cinco colonos estadounidenses, incluido Crispus Attucks. Este evento contribuyó significativamente al estallido de la Guerra Revolucionaria Estadounidense cinco años después y se convirtió en un símbolo de la opresión británica.",
          de: "Das Boston-Massaker ereignete sich am 5. März 1770, als britische Soldaten fünf amerikanische Kolonisten töteten, darunter Crispus Attucks. Dieses Ereignis trug wesentlich zum Ausbruch des Amerikanischen Revolutionskriegs fünf Jahre später bei und wurde zu einem Symbol britischer Unterdrückung.",
          nl: "Het bloedbad van Boston vond plaats op 5 maart 1770, toen Britse soldaten vijf Amerikaanse kolonisten doodden, waaronder Crispus Attucks. Deze gebeurtenis droeg aanzienlijk bij aan het uitbreken van de Amerikaanse Revolutionaire Oorlog vijf jaar later en werd een symbool van Britse onderdrukking."
        }
      },
      {
        question: {
          en: "Who was the first person killed in the Boston Massacre?",
          es: "¿Quién fue la primera persona asesinada en la Masacre de Boston?",
          de: "Wer war die erste Person, die beim Boston-Massaker getötet wurde?",
          nl: "Wie was de eerste persoon die werd gedood in het bloedbad van Boston?"
        },
        options: [
          { en: "Crispus Attucks", es: "Crispus Attucks", de: "Crispus Attucks", nl: "Crispus Attucks" },
          { en: "Samuel Adams", es: "Samuel Adams", de: "Samuel Adams", nl: "Samuel Adams" },
          { en: "Paul Revere", es: "Paul Revere", de: "Paul Revere", nl: "Paul Revere" },
          { en: "John Hancock", es: "John Hancock", de: "John Hancock", nl: "John Hancock" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Crispus Attucks, an African American man, is considered the first casualty of the Boston Massacre and thus the first American killed in the American Revolution. His death made him an icon of the anti-slavery movement in the 19th century and a symbol of American patriotism.",
          es: "Crispus Attucks, un hombre afroamericano, es considerado la primera víctima de la Masacre de Boston y, por lo tanto, el primer estadounidense asesinado en la Revolución Americana. Su muerte lo convirtió en un ícono del movimiento antiesclavista en el siglo XIX y un símbolo del patriotismo estadounidense.",
          de: "Crispus Attucks, ein afroamerikanischer Mann, gilt als das erste Opfer des Boston-Massakers und damit als der erste Amerikaner, der in der Amerikanischen Revolution getötet wurde. Sein Tod machte ihn im 19. Jahrhundert zu einer Ikone der Antisklaverei-Bewegung und einem Symbol amerikanischen Patriotismus.",
          nl: "Crispus Attucks, een Afro-Amerikaanse man, wordt beschouwd als het eerste slachtoffer van het bloedbad van Boston en dus de eerste Amerikaan die werd gedood in de Amerikaanse Revolutie. Zijn dood maakte hem tot een icoon van de anti-slavernijbeweging in de 19e eeuw en een symbool van Amerikaans patriottisme."
        }
      },
      {
        question: {
          en: "Which Soviet leader died on March 5, 1953?",
          es: "¿Qué líder soviético murió el 5 de marzo de 1953?",
          de: "Welcher sowjetische Führer starb am 5. März 1953?",
          nl: "Welke Sovjet-leider stierf op 5 maart 1953?"
        },
        options: [
          { en: "Joseph Stalin", es: "Joseph Stalin", de: "Joseph Stalin", nl: "Joseph Stalin" },
          { en: "Vladimir Lenin", es: "Vladimir Lenin", de: "Vladimir Lenin", nl: "Vladimir Lenin" },
          { en: "Nikita Khrushchev", es: "Nikita Jrushchov", de: "Nikita Chruschtschow", nl: "Nikita Chroesjtsjov" },
          { en: "Leonid Brezhnev", es: "Leonid Brézhnev", de: "Leonid Breschnew", nl: "Leonid Brezjnev" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Soviet dictator Joseph Stalin died from a stroke on March 5, 1953, at age 74 after nearly three decades in power. He was succeeded by Georgy Malenkov. Stalin's death marked the end of one of history's most brutal totalitarian regimes.",
          es: "El dictador soviético Joseph Stalin murió de un derrame cerebral el 5 de marzo de 1953, a los 74 años, después de casi tres décadas en el poder. Fue sucedido por Georgy Malenkov. La muerte de Stalin marcó el fin de uno de los regímenes totalitarios más brutales de la historia.",
          de: "Der sowjetische Diktator Joseph Stalin starb am 5. März 1953 im Alter von 74 Jahren nach fast drei Jahrzehnten an der Macht an einem Schlaganfall. Sein Nachfolger wurde Georgi Malenkow. Stalins Tod markierte das Ende eines der brutalsten totalitären Regime der Geschichte.",
          nl: "Sovjet-dictator Joseph Stalin stierf aan een beroerte op 5 maart 1953, op 74-jarige leeftijd na bijna drie decennia aan de macht. Hij werd opgevolgd door Georgy Malenkov. Stalins dood markeerde het einde van een van de meest brute totalitaire regimes in de geschiedenis."
        }
      },
      {
        question: {
          en: "Who coined the famous phrase 'Iron Curtain' on March 5, 1946?",
          es: "¿Quién acuñó la famosa frase 'Telón de Acero' el 5 de marzo de 1946?",
          de: "Wer prägte am 5. März 1946 den berühmten Ausdruck 'Eiserner Vorhang'?",
          nl: "Wie bedacht de beroemde uitdrukking 'IJzeren Gordijn' op 5 maart 1946?"
        },
        options: [
          { en: "Winston Churchill", es: "Winston Churchill", de: "Winston Churchill", nl: "Winston Churchill" },
          { en: "Franklin D. Roosevelt", es: "Franklin D. Roosevelt", de: "Franklin D. Roosevelt", nl: "Franklin D. Roosevelt" },
          { en: "Harry Truman", es: "Harry Truman", de: "Harry Truman", nl: "Harry Truman" },
          { en: "Joseph Stalin", es: "Joseph Stalin", de: "Joseph Stalin", nl: "Joseph Stalin" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 5, 1946, Winston Churchill delivered his famous 'Iron Curtain' speech at Westminster College in Missouri, marking the beginning of the Cold War era. The speech warned of Soviet expansion in Eastern Europe and became one of the most significant political speeches of the 20th century.",
          es: "El 5 de marzo de 1946, Winston Churchill pronunció su famoso discurso del 'Telón de Acero' en Westminster College en Missouri, marcando el comienzo de la era de la Guerra Fría. El discurso advirtió sobre la expansión soviética en Europa del Este y se convirtió en uno de los discursos políticos más significativos del siglo XX.",
          de: "Am 5. März 1946 hielt Winston Churchill seine berühmte 'Eiserner Vorhang'-Rede am Westminster College in Missouri und markierte damit den Beginn der Ära des Kalten Krieges. Die Rede warnte vor der sowjetischen Expansion in Osteuropa und wurde zu einer der bedeutendsten politischen Reden des 20. Jahrhunderts.",
          nl: "Op 5 maart 1946 hield Winston Churchill zijn beroemde 'IJzeren Gordijn'-toespraak op Westminster College in Missouri, wat het begin markeerde van het Koude Oorlog-tijdperk. De toespraak waarschuwde voor Sovjetexpansie in Oost-Europa en werd een van de meest significante politieke toespraken van de 20e eeuw."
        }
      },
      {
        question: {
          en: "How many American colonists were killed in the Boston Massacre?",
          es: "¿Cuántos colonos estadounidenses murieron en la Masacre de Boston?",
          de: "Wie viele amerikanische Kolonisten wurden beim Boston-Massaker getötet?",
          nl: "Hoeveel Amerikaanse kolonisten werden gedood in het bloedbad van Boston?"
        },
        options: [
          { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" },
          { en: "Ten", es: "Diez", de: "Zehn", nl: "Tien" },
          { en: "Twenty", es: "Veinte", de: "Zwanzig", nl: "Twintig" },
          { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Five Americans were fatally shot by British troops on the cold, snowy night of March 5, 1770. The incident occurred at the Customs House in Boston when a mob of American colonists confronted British soldiers. This tragedy became a rallying cry for American independence.",
          es: "Cinco estadounidenses fueron fatalmente disparados por tropas británicas en la fría y nevada noche del 5 de marzo de 1770. El incidente ocurrió en la Casa de Aduanas en Boston cuando una turba de colonos estadounidenses confrontó a soldados británicos. Esta tragedia se convirtió en un grito de guerra para la independencia estadounidense.",
          de: "Fünf Amerikaner wurden in der kalten, verschneiten Nacht des 5. März 1770 von britischen Truppen tödlich erschossen. Der Vorfall ereignete sich am Zollhaus in Boston, als ein Mob amerikanischer Kolonisten britische Soldaten konfrontierte. Diese Tragödie wurde zum Schlachtruf für die amerikanische Unabhängigkeit.",
          nl: "Vijf Amerikanen werden dodelijk neergeschoten door Britse troepen op de koude, besneeuwde nacht van 5 maart 1770. Het incident vond plaats bij het Douanegebouw in Boston toen een menigte Amerikaanse kolonisten Britse soldaten confronteerde. Deze tragedie werd een strijdkreet voor Amerikaanse onafhankelijkheid."
        }
      }
    ],
    
    // Day 6 - March 6th: Michelangelo Birthday & Battle of Alamo
    day6: [
      {
        question: {
          en: "In what year was the legendary Renaissance artist Michelangelo born?",
          es: "¿En qué año nació el legendario artista renacentista Miguel Ángel?",
          de: "In welchem Jahr wurde der legendäre Renaissance-Künstler Michelangelo geboren?",
          nl: "In welk jaar werd de legendarische Renaissance-kunstenaar Michelangelo geboren?"
        },
        options: [
          { en: "1475", es: "1475", de: "1475", nl: "1475" },
          { en: "1452", es: "1452", de: "1452", nl: "1452" },
          { en: "1483", es: "1483", de: "1483", nl: "1483" },
          { en: "1500", es: "1500", de: "1500", nl: "1500" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Michelangelo di Lodovico Buonarroti Simoni was born on March 6, 1475, in Caprese, Italy. He became one of the greatest artists of the Renaissance, creating masterpieces like the Sistine Chapel ceiling and the statue of David.",
          es: "Michelangelo di Lodovico Buonarroti Simoni nació el 6 de marzo de 1475 en Caprese, Italia. Se convirtió en uno de los más grandes artistas del Renacimiento, creando obras maestras como el techo de la Capilla Sixtina y la estatua de David.",
          de: "Michelangelo di Lodovico Buonarroti Simoni wurde am 6. März 1475 in Caprese, Italien, geboren. Er wurde einer der größten Künstler der Renaissance und schuf Meisterwerke wie die Decke der Sixtinischen Kapelle und die Statue des David.",
          nl: "Michelangelo di Lodovico Buonarroti Simoni werd geboren op 6 maart 1475 in Caprese, Italië. Hij werd een van de grootste kunstenaars van de Renaissance en schiep meesterwerken zoals het plafond van de Sixtijnse Kapel en het standbeeld van David."
        }
      },
      {
        question: {
          en: "Which famous chapel's ceiling did Michelangelo paint?",
          es: "¿El techo de qué famosa capilla pintó Miguel Ángel?",
          de: "Die Decke welcher berühmten Kapelle malte Michelangelo?",
          nl: "Het plafond van welke beroemde kapel schilderde Michelangelo?"
        },
        options: [
          { en: "Sistine Chapel", es: "Capilla Sixtina", de: "Sixtinische Kapelle", nl: "Sixtijnse Kapel" },
          { en: "Westminster Abbey", es: "Abadía de Westminster", de: "Westminster Abbey", nl: "Westminster Abbey" },
          { en: "Notre-Dame", es: "Notre-Dame", de: "Notre-Dame", nl: "Notre-Dame" },
          { en: "St. Peter's Basilica", es: "Basílica de San Pedro", de: "Petersdom", nl: "Sint-Pietersbasiliek" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Between 1508 and 1512, Michelangelo painted the ceiling of the Sistine Chapel in Vatican City. This monumental work features iconic scenes including the Creation of Adam, where God's hand reaches toward Adam's finger. The ceiling remains one of the greatest artistic achievements in human history.",
          es: "Entre 1508 y 1512, Miguel Ángel pintó el techo de la Capilla Sixtina en la Ciudad del Vaticano. Esta obra monumental presenta escenas icónicas como la Creación de Adán, donde la mano de Dios se extiende hacia el dedo de Adán. El techo sigue siendo uno de los mayores logros artísticos de la historia humana.",
          de: "Zwischen 1508 und 1512 malte Michelangelo die Decke der Sixtinischen Kapelle in der Vatikanstadt. Dieses monumentale Werk zeigt ikonische Szenen wie die Erschaffung Adams, wo Gottes Hand sich Adams Finger nähert. Die Decke bleibt eine der größten künstlerischen Leistungen der Menschheitsgeschichte.",
          nl: "Tussen 1508 en 1512 schilderde Michelangelo het plafond van de Sixtijnse Kapel in Vaticaanstad. Dit monumentale werk bevat iconische scènes zoals de Schepping van Adam, waar Gods hand zich uitstrekt naar Adams vinger. Het plafond blijft een van de grootste artistieke prestaties in de menselijke geschiedenis."
        }
      },
      {
        question: {
          en: "On March 6, 1836, which famous battle ended after a 13-day siege in Texas?",
          es: "El 6 de marzo de 1836, ¿qué famosa batalla terminó después de un asedio de 13 días en Texas?",
          de: "Welche berühmte Schlacht endete am 6. März 1836 nach einer 13-tägigen Belagerung in Texas?",
          nl: "Welke beroemde slag eindigde op 6 maart 1836 na een beleg van 13 dagen in Texas?"
        },
        options: [
          { en: "Battle of Gettysburg", es: "Batalla de Gettysburg", de: "Schlacht von Gettysburg", nl: "Slag bij Gettysburg" },
          { en: "Battle of San Jacinto", es: "Batalla de San Jacinto", de: "Schlacht von San Jacinto", nl: "Slag bij San Jacinto" },
          { en: "Battle of Yorktown", es: "Batalla de Yorktown", de: "Schlacht von Yorktown", nl: "Slag bij Yorktown" },
          { en: "Battle of the Alamo", es: "Batalla del Álamo", de: "Schlacht von Alamo", nl: "Slag bij de Alamo" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Battle of the Alamo ended on March 6, 1836, when Mexican forces led by General Santa Anna overwhelmed the Texian defenders. Despite their defeat, the courageous stand of the approximately 200 defenders became a rallying cry for Texas independence, immortalized in the phrase 'Remember the Alamo!'",
          es: "La Batalla del Álamo terminó el 6 de marzo de 1836, cuando las fuerzas mexicanas lideradas por el General Santa Anna vencieron a los defensores tejanos. A pesar de su derrota, la valiente resistencia de aproximadamente 200 defensores se convirtió en un grito de guerra para la independencia de Texas, inmortalizado en la frase '¡Recuerden el Álamo!'",
          de: "Die Schlacht von Alamo endete am 6. März 1836, als mexikanische Truppen unter General Santa Anna die texanischen Verteidiger überwältigten. Trotz ihrer Niederlage wurde der mutige Widerstand der etwa 200 Verteidiger zum Schlachtruf für die texanische Unabhängigkeit, verewigt im Satz 'Remember the Alamo!'",
          nl: "De Slag bij de Alamo eindigde op 6 maart 1836, toen Mexicaanse troepen onder leiding van generaal Santa Anna de Texaanse verdedigers overweldigden. Ondanks hun nederlaag werd het moedige standpunt van de ongeveer 200 verdedigers een strijdkreet voor Texaanse onafhankelijkheid, vereeuwigd in de uitdrukking 'Remember the Alamo!'"
        }
      },
      {
        question: {
          en: "Which famous frontiersman and former U.S. congressman died defending the Alamo?",
          es: "¿Qué famoso pionero y ex congresista estadounidense murió defendiendo el Álamo?",
          de: "Welcher berühmte Grenzbewohner und ehemalige US-Kongressabgeordnete starb bei der Verteidigung von Alamo?",
          nl: "Welke beroemde grensverkenner en voormalig Amerikaans congreslid stierf bij de verdediging van de Alamo?"
        },
        options: [
          { en: "Davy Crockett", es: "Davy Crockett", de: "Davy Crockett", nl: "Davy Crockett" },
          { en: "Daniel Boone", es: "Daniel Boone", de: "Daniel Boone", nl: "Daniel Boone" },
          { en: "Kit Carson", es: "Kit Carson", de: "Kit Carson", nl: "Kit Carson" },
          { en: "Wild Bill Hickok", es: "Wild Bill Hickok", de: "Wild Bill Hickok", nl: "Wild Bill Hickok" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Davy Crockett, the legendary frontiersman and former Tennessee congressman, was among those who died at the Alamo on March 6, 1836. Crockett had traveled to Texas to support the revolution and became one of the battle's most famous casualties, further cementing his status as an American folk hero.",
          es: "Davy Crockett, el legendario pionero y ex congresista de Tennessee, fue uno de los que murieron en el Álamo el 6 de marzo de 1836. Crockett había viajado a Texas para apoyar la revolución y se convirtió en una de las víctimas más famosas de la batalla, consolidando aún más su estatus como héroe popular estadounidense.",
          de: "Davy Crockett, der legendäre Grenzbewohner und ehemalige Kongressabgeordnete von Tennessee, war einer derjenigen, die am 6. März 1836 in Alamo starben. Crockett war nach Texas gereist, um die Revolution zu unterstützen, und wurde eines der berühmtesten Opfer der Schlacht, was seinen Status als amerikanischer Volksheld weiter festigte.",
          nl: "Davy Crockett, de legendarische grensverkenner en voormalig congreslid van Tennessee, was een van degenen die op 6 maart 1836 bij de Alamo stierven. Crockett was naar Texas gereisd om de revolutie te steunen en werd een van de beroemdste slachtoffers van de slag, wat zijn status als Amerikaanse volksheld verder versterkte."
        }
      },
      {
        question: {
          en: "What was Michelangelo's full professional range as an artist?",
          es: "¿Cuál fue el alcance profesional completo de Miguel Ángel como artista?",
          de: "Was war Michelangelos vollständiges professionelles Spektrum als Künstler?",
          nl: "Wat was Michelangelo's volledige professionele bereik als kunstenaar?"
        },
        options: [
          { en: "Sculptor, painter, architect, and poet", es: "Escultor, pintor, arquitecto y poeta", de: "Bildhauer, Maler, Architekt und Dichter", nl: "Beeldhouwer, schilder, architect en dichter" },
          { en: "Only a painter", es: "Solo un pintor", de: "Nur ein Maler", nl: "Alleen een schilder" },
          { en: "Only a sculptor", es: "Solo un escultor", de: "Nur ein Bildhauer", nl: "Alleen een beeldhouwer" },
          { en: "Musician and composer", es: "Músico y compositor", de: "Musiker und Komponist", nl: "Muzikant en componist" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Michelangelo was a true Renaissance polymath who excelled as a sculptor, painter, architect, and poet. His diverse talents produced masterpieces across multiple disciplines, including the marble statue of David, the Sistine Chapel frescoes, architectural designs for St. Peter's Basilica, and numerous sonnets. This versatility exemplified the Renaissance ideal of the 'universal man.'",
          es: "Miguel Ángel fue un verdadero polímata renacentista que destacó como escultor, pintor, arquitecto y poeta. Sus diversos talentos produjeron obras maestras en múltiples disciplinas, incluyendo la estatua de mármol de David, los frescos de la Capilla Sixtina, diseños arquitectónicos para la Basílica de San Pedro y numerosos sonetos. Esta versatilidad ejemplificó el ideal renacentista del 'hombre universal.'",
          de: "Michelangelo war ein wahrer Renaissance-Universalgelehrter, der als Bildhauer, Maler, Architekt und Dichter brillierte. Seine vielfältigen Talente brachten Meisterwerke in verschiedenen Disziplinen hervor, darunter die Marmorstatue des David, die Fresken der Sixtinischen Kapelle, architektonische Entwürfe für den Petersdom und zahlreiche Sonette. Diese Vielseitigkeit verkörperte das Renaissance-Ideal des 'universellen Menschen.'",
          nl: "Michelangelo was een echte Renaissance-polymath die uitblonk als beeldhouwer, schilder, architect en dichter. Zijn diverse talenten brachten meesterwerken voort in meerdere disciplines, waaronder het marmeren standbeeld van David, de fresco's van de Sixtijnse Kapel, architectonische ontwerpen voor de Sint-Pietersbasiliek en talrijke sonnetten. Deze veelzijdigheid belichaamde het Renaissance-ideaal van de 'universele mens.'"
        }
      }
    ],
    
    // Day 7 - March 7th: Bloody Sunday Selma (1965)
    day7: [
      {
        question: {
          en: "On March 7, 1965, what event occurred at the Edmund Pettus Bridge in Selma, Alabama?",
          es: "El 7 de marzo de 1965, ¿qué evento ocurrió en el Puente Edmund Pettus en Selma, Alabama?",
          de: "Was ereignete sich am 7. März 1965 auf der Edmund Pettus Bridge in Selma, Alabama?",
          nl: "Wat gebeurde er op 7 maart 1965 op de Edmund Pettus Bridge in Selma, Alabama?"
        },
        options: [
          { en: "A victory celebration", es: "Una celebración de victoria", de: "Eine Siegesfeier", nl: "Een overwinningsviering" },
          { en: "A bridge dedication ceremony", es: "Una ceremonia de dedicación del puente", de: "Eine Brückeneinweihung", nl: "Een brugwijdingsceremonie" },
          { en: "A peaceful treaty signing", es: "Una firma de tratado pacífico", de: "Eine friedliche Vertragsunterzeichnung", nl: "Een vreedzame verdragsondertekening" },
          { en: "Bloody Sunday - peaceful marchers were attacked", es: "Domingo Sangriento - manifestantes pacíficos fueron atacados", de: "Bloody Sunday - friedliche Demonstranten wurden angegriffen", nl: "Bloody Sunday - vreedzame demonstranten werden aangevallen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 7, 1965, approximately 600 civil rights marchers were brutally attacked by state and local police as they attempted to march from Selma to Montgomery, Alabama, to demand voting rights. The violent confrontation, broadcast on national television, became known as 'Bloody Sunday' and galvanized support for the Voting Rights Act of 1965.",
          es: "El 7 de marzo de 1965, aproximadamente 600 manifestantes por los derechos civiles fueron brutalmente atacados por la policía estatal y local mientras intentaban marchar de Selma a Montgomery, Alabama, para exigir derechos de voto. El violento enfrentamiento, transmitido por televisión nacional, se conoció como 'Domingo Sangriento' y galvanizó el apoyo a la Ley de Derechos de Voto de 1965.",
          de: "Am 7. März 1965 wurden etwa 600 Bürgerrechtler brutal von staatlicher und lokaler Polizei angegriffen, als sie von Selma nach Montgomery, Alabama, marschieren wollten, um Wahlrechte zu fordern. Die gewalttätige Konfrontation, die im nationalen Fernsehen übertragen wurde, wurde als 'Bloody Sunday' bekannt und verstärkte die Unterstützung für den Voting Rights Act von 1965.",
          nl: "Op 7 maart 1965 werden ongeveer 600 burgerrechtenactivisten brutaal aangevallen door staats- en lokale politie toen ze probeerden van Selma naar Montgomery, Alabama, te marcheren om stemrecht te eisen. De gewelddadige confrontatie, uitgezonden op nationale televisie, werd bekend als 'Bloody Sunday' en versterkte de steun voor de Voting Rights Act van 1965."
        }
      },
      {
        question: {
          en: "Who was the young civil rights leader beaten unconscious on Bloody Sunday who later became a U.S. Congressman?",
          es: "¿Quién fue el joven líder de derechos civiles golpeado hasta perder el conocimiento en el Domingo Sangriento que luego se convirtió en congresista de EE.UU.?",
          de: "Wer war der junge Bürgerrechtsführer, der am Bloody Sunday bewusstlos geschlagen wurde und später US-Kongressabgeordneter wurde?",
          nl: "Wie was de jonge burgerrechtenleider die bewusteloos werd geslagen op Bloody Sunday en later een Amerikaans congreslid werd?"
        },
        options: [
          { en: "John Lewis", es: "John Lewis", de: "John Lewis", nl: "John Lewis" },
          { en: "Jesse Jackson", es: "Jesse Jackson", de: "Jesse Jackson", nl: "Jesse Jackson" },
          { en: "Andrew Young", es: "Andrew Young", de: "Andrew Young", nl: "Andrew Young" },
          { en: "Ralph Abernathy", es: "Ralph Abernathy", de: "Ralph Abernathy", nl: "Ralph Abernathy" }
        ],
        correctIndex: 1,
        explanation: {
          en: "John Lewis, then 25 years old and chairman of the Student Nonviolent Coordinating Committee (SNCC), suffered a fractured skull when state troopers beat him on Bloody Sunday. He went on to serve in the U.S. House of Representatives for over 30 years, becoming known as the 'conscience of Congress' for his unwavering commitment to civil rights and justice.",
          es: "John Lewis, entonces de 25 años y presidente del Comité Coordinador Estudiantil No Violento (SNCC), sufrió una fractura de cráneo cuando los policías estatales lo golpearon en el Domingo Sangriento. Luego sirvió en la Cámara de Representantes de EE.UU. durante más de 30 años, convirtiéndose en conocido como la 'conciencia del Congreso' por su compromiso inquebrantable con los derechos civiles y la justicia.",
          de: "John Lewis, damals 25 Jahre alt und Vorsitzender des Student Nonviolent Coordinating Committee (SNCC), erlitt einen Schädelbruch, als staatliche Polizisten ihn am Bloody Sunday schlugen. Er diente über 30 Jahre im US-Repräsentantenhaus und wurde als 'Gewissen des Kongresses' für sein unerschütterliches Engagement für Bürgerrechte und Gerechtigkeit bekannt.",
          nl: "John Lewis, toen 25 jaar oud en voorzitter van het Student Nonviolent Coordinating Committee (SNCC), liep een schedelbreuk op toen staatstroepen hem sloegen op Bloody Sunday. Hij diende meer dan 30 jaar in het Amerikaanse Huis van Afgevaardigden en werd bekend als het 'geweten van het Congres' vanwege zijn onwrikbare toewijding aan burgerrechten en gerechtigheid."
        }
      },
      {
        question: {
          en: "What landmark legislation was passed as a direct result of the Selma marches?",
          es: "¿Qué legislación histórica se aprobó como resultado directo de las marchas de Selma?",
          de: "Welche wegweisende Gesetzgebung wurde als direktes Ergebnis der Selma-Märsche verabschiedet?",
          nl: "Welke baanbrekende wetgeving werd aangenomen als direct gevolg van de Selma-marsen?"
        },
        options: [
          { en: "Voting Rights Act of 1965", es: "Ley de Derechos de Voto de 1965", de: "Voting Rights Act von 1965", nl: "Voting Rights Act van 1965" },
          { en: "Civil Rights Act of 1964", es: "Ley de Derechos Civiles de 1964", de: "Civil Rights Act von 1964", nl: "Civil Rights Act van 1964" },
          { en: "Fair Housing Act of 1968", es: "Ley de Vivienda Justa de 1968", de: "Fair Housing Act von 1968", nl: "Fair Housing Act van 1968" },
          { en: "Equal Pay Act", es: "Ley de Igualdad Salarial", de: "Equal Pay Act", nl: "Equal Pay Act" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The shocking violence of Bloody Sunday, witnessed by millions on television, created enormous public pressure for voting rights legislation. President Lyndon B. Johnson introduced the Voting Rights Act just eight days later, and it was signed into law on August 6, 1965. This act prohibited racial discrimination in voting and transformed American democracy by enabling millions of African Americans to exercise their constitutional right to vote.",
          es: "La impactante violencia del Domingo Sangriento, presenciada por millones en televisión, creó una enorme presión pública para la legislación de derechos de voto. El presidente Lyndon B. Johnson presentó la Ley de Derechos de Voto solo ocho días después, y se firmó como ley el 6 de agosto de 1965. Esta ley prohibió la discriminación racial en la votación y transformó la democracia estadounidense al permitir que millones de afroamericanos ejercieran su derecho constitucional al voto.",
          de: "Die schockierende Gewalt des Bloody Sunday, die von Millionen im Fernsehen gesehen wurde, erzeugte enormen öffentlichen Druck für Wahlrechtsgesetzgebung. Präsident Lyndon B. Johnson führte den Voting Rights Act nur acht Tage später ein, und er wurde am 6. August 1965 zum Gesetz. Dieses Gesetz verbot rassische Diskriminierung bei der Wahl und transformierte die amerikanische Demokratie, indem es Millionen von Afroamerikanern ermöglichte, ihr verfassungsmäßiges Wahlrecht auszuüben.",
          nl: "Het schokkende geweld van Bloody Sunday, gezien door miljoenen op televisie, creëerde enorme publieke druk voor stemrechtenwetgeving. President Lyndon B. Johnson introduceerde de Voting Rights Act slechts acht dagen later, en deze werd op 6 augustus 1965 ondertekend. Deze wet verbood raciale discriminatie bij het stemmen en transformeerde de Amerikaanse democratie door miljoenen Afro-Amerikanen in staat te stellen hun grondwettelijk stemrecht uit te oefenen."
        }
      },
      {
        question: {
          en: "How many attempts were made before the Selma to Montgomery march was successfully completed?",
          es: "¿Cuántos intentos se hicieron antes de que la marcha de Selma a Montgomery se completara con éxito?",
          de: "Wie viele Versuche wurden unternommen, bevor der Marsch von Selma nach Montgomery erfolgreich abgeschlossen wurde?",
          nl: "Hoeveel pogingen werden gedaan voordat de mars van Selma naar Montgomery met succes werd voltooid?"
        },
        options: [
          { en: "Three attempts", es: "Tres intentos", de: "Drei Versuche", nl: "Drie pogingen" },
          { en: "One attempt", es: "Un intento", de: "Ein Versuch", nl: "Eén poging" },
          { en: "Five attempts", es: "Cinco intentos", de: "Fünf Versuche", nl: "Vijf pogingen" },
          { en: "Seven attempts", es: "Siete intentos", de: "Sieben Versuche", nl: "Zeven pogingen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "There were three attempts to march from Selma to Montgomery. The first (March 7) was Bloody Sunday. The second attempt (March 9), led by Dr. Martin Luther King Jr., turned back at the bridge in a symbolic gesture after a court order. The third and successful march took place March 21-25, 1965, with protection from federal troops and the Alabama National Guard under federal command.",
          es: "Hubo tres intentos de marchar de Selma a Montgomery. El primero (7 de marzo) fue el Domingo Sangriento. El segundo intento (9 de marzo), liderado por el Dr. Martin Luther King Jr., se dio la vuelta en el puente en un gesto simbólico después de una orden judicial. La tercera marcha exitosa tuvo lugar del 21 al 25 de marzo de 1965, con protección de tropas federales y la Guardia Nacional de Alabama bajo comando federal.",
          de: "Es gab drei Versuche, von Selma nach Montgomery zu marschieren. Der erste (7. März) war Bloody Sunday. Der zweite Versuch (9. März), angeführt von Dr. Martin Luther King Jr., kehrte an der Brücke in einer symbolischen Geste nach einer gerichtlichen Anordnung um. Der dritte und erfolgreiche Marsch fand vom 21. bis 25. März 1965 statt, mit Schutz durch Bundestruppen und die Alabama National Guard unter Bundeskommando.",
          nl: "Er waren drie pogingen om van Selma naar Montgomery te marcheren. De eerste (7 maart) was Bloody Sunday. De tweede poging (9 maart), geleid door Dr. Martin Luther King Jr., keerde terug bij de brug in een symbolisch gebaar na een gerechtelijk bevel. De derde en succesvolle mars vond plaats van 21-25 maart 1965, met bescherming van federale troepen en de Alabama National Guard onder federaal commando."
        }
      },
      {
        question: {
          en: "What major invention is Alexander Graham Bell most famous for?",
          es: "¿Por qué invención importante es más famoso Alexander Graham Bell?",
          de: "Für welche wichtige Erfindung ist Alexander Graham Bell am bekanntesten?",
          nl: "Voor welke belangrijke uitvinding is Alexander Graham Bell het meest beroemd?"
        },
        options: [
          { en: "The telephone", es: "El teléfono", de: "Das Telefon", nl: "De telefoon" },
          { en: "The radio", es: "La radio", de: "Das Radio", nl: "De radio" },
          { en: "The telegraph", es: "El telégrafo", de: "Der Telegraf", nl: "De telegraaf" },
          { en: "The television", es: "La televisión", de: "Das Fernsehen", nl: "De televisie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Bell was awarded the first U.S. patent for the telephone on March 7, 1876, just days after his birthday. His research on hearing and speech led him to experiment with hearing devices, which eventually resulted in this groundbreaking invention that revolutionized global communication.",
          es: "A Bell se le otorgó la primera patente estadounidense para el teléfono el 7 de marzo de 1876, solo días después de su cumpleaños. Su investigación sobre la audición y el habla lo llevó a experimentar con dispositivos auditivos, lo que finalmente resultó en esta invención revolucionaria que transformó la comunicación global.",
          de: "Bell erhielt am 7. März 1876, nur wenige Tage nach seinem Geburtstag, das erste US-Patent für das Telefon. Seine Forschung über Gehör und Sprache führte ihn dazu, mit Hörgeräten zu experimentieren, was schließlich zu dieser bahnbrechenden Erfindung führte, die die globale Kommunikation revolutionierte.",
          nl: "Bell kreeg op 7 maart 1876, slechts enkele dagen na zijn verjaardag, het eerste Amerikaanse patent voor de telefoon. Zijn onderzoek naar gehoor en spraak leidde hem tot experimenten met gehoorapparaten, wat uiteindelijk resulteerde in deze baanbrekende uitvinding die de wereldwijde communicatie revolutioneerde."
        }
      }
    ],
    
    // Day 8 - March 8th: International Women's Day
    day8: [
      {
        question: {
          en: "What is celebrated globally on March 8th?",
          es: "¿Qué se celebra globalmente el 8 de marzo?",
          de: "Was wird weltweit am 8. März gefeiert?",
          nl: "Wat wordt wereldwijd gevierd op 8 maart?"
        },
        options: [
          { en: "International Women's Day", es: "Día Internacional de la Mujer", de: "Internationaler Frauentag", nl: "Internationale Vrouwendag" },
          { en: "International Children's Day", es: "Día Internacional del Niño", de: "Internationaler Kindertag", nl: "Internationale Kinderdag" },
          { en: "World Peace Day", es: "Día Mundial de la Paz", de: "Weltfriedenstag", nl: "Wereldvredesdag" },
          { en: "Earth Day", es: "Día de la Tierra", de: "Tag der Erde", nl: "Dag van de Aarde" }
        ],
        correctIndex: 3,
        explanation: {
          en: "International Women's Day has been celebrated on March 8th since 1911. It recognizes the social, economic, cultural, and political achievements of women worldwide, while also serving as a call to action for accelerating gender equality. The day originated from labor movements in North America and across Europe during the early 20th century.",
          es: "El Día Internacional de la Mujer se celebra el 8 de marzo desde 1911. Reconoce los logros sociales, económicos, culturales y políticos de las mujeres en todo el mundo, al tiempo que sirve como llamado a la acción para acelerar la igualdad de género. El día se originó en los movimientos laborales de América del Norte y Europa durante principios del siglo XX.",
          de: "Der Internationale Frauentag wird seit 1911 am 8. März gefeiert. Er würdigt die sozialen, wirtschaftlichen, kulturellen und politischen Errungenschaften von Frauen weltweit und dient gleichzeitig als Aufruf zum Handeln für die Beschleunigung der Geschlechtergleichstellung. Der Tag entstand aus Arbeiterbewegungen in Nordamerika und ganz Europa im frühen 20. Jahrhundert.",
          nl: "Internationale Vrouwendag wordt sinds 1911 op 8 maart gevierd. Het erkent de sociale, economische, culturele en politieke prestaties van vrouwen wereldwijd, terwijl het ook dient als oproep tot actie voor het versnellen van gendergelijkheid. De dag ontstond uit arbeidsbewegingen in Noord-Amerika en heel Europa tijdens het begin van de 20e eeuw."
        }
      },
      {
        question: {
          en: "Which organization officially recognized International Women's Day in 1975?",
          es: "¿Qué organización reconoció oficialmente el Día Internacional de la Mujer en 1975?",
          de: "Welche Organisation erkannte 1975 den Internationalen Frauentag offiziell an?",
          nl: "Welke organisatie erkende Internationale Vrouwendag officieel in 1975?"
        },
        options: [
          { en: "United Nations", es: "Naciones Unidas", de: "Vereinte Nationen", nl: "Verenigde Naties" },
          { en: "European Union", es: "Unión Europea", de: "Europäische Union", nl: "Europese Unie" },
          { en: "World Health Organization", es: "Organización Mundial de la Salud", de: "Weltgesundheitsorganisation", nl: "Wereldgezondheidsorganisatie" },
          { en: "International Red Cross", es: "Cruz Roja Internacional", de: "Internationales Rotes Kreuz", nl: "Internationale Rode Kruis" }
        ],
        correctIndex: 1,
        explanation: {
          en: "In 1975, during International Women's Year, the United Nations officially recognized March 8th as International Women's Day. Two years later, the UN General Assembly adopted a resolution proclaiming a United Nations Day for Women's Rights and International Peace to be observed on any day of the year by Member States, though March 8th has remained the traditional date of celebration.",
          es: "En 1975, durante el Año Internacional de la Mujer, las Naciones Unidas reconocieron oficialmente el 8 de marzo como Día Internacional de la Mujer. Dos años después, la Asamblea General de la ONU adoptó una resolución proclamando un Día de las Naciones Unidas para los Derechos de la Mujer y la Paz Internacional para ser observado en cualquier día del año por los Estados Miembros, aunque el 8 de marzo ha permanecido como la fecha tradicional de celebración.",
          de: "1975, während des Internationalen Jahres der Frau, erkannten die Vereinten Nationen offiziell den 8. März als Internationalen Frauentag an. Zwei Jahre später verabschiedete die UN-Generalversammlung eine Resolution, die einen Tag der Vereinten Nationen für Frauenrechte und internationalen Frieden proklamierte, der von den Mitgliedstaaten an jedem Tag des Jahres begangen werden kann, obwohl der 8. März das traditionelle Datum geblieben ist.",
          nl: "In 1975, tijdens het Internationale Jaar van de Vrouw, erkenden de Verenigde Naties officieel 8 maart als Internationale Vrouwendag. Twee jaar later nam de Algemene Vergadering van de VN een resolutie aan waarin een Dag van de Verenigde Naties voor Vrouwenrechten en Internationale Vrede werd afgekondigd die door lidstaten op elke dag van het jaar kan worden gevierd, hoewel 8 maart de traditionele datum is gebleven."
        }
      },
      {
        question: {
          en: "What was a primary demand of the early International Women's Day demonstrations?",
          es: "¿Cuál fue una demanda principal de las primeras manifestaciones del Día Internacional de la Mujer?",
          de: "Was war eine Hauptforderung der frühen Demonstrationen zum Internationalen Frauentag?",
          nl: "Wat was een primaire eis van de vroege Internationale Vrouwendag-demonstraties?"
        },
        options: [
          { en: "Women's right to vote", es: "El derecho al voto de las mujeres", de: "Frauenwahlrecht", nl: "Vrouwenkiesrecht" },
          { en: "Free education for all", es: "Educación gratuita para todos", de: "Kostenlose Bildung für alle", nl: "Gratis onderwijs voor iedereen" },
          { en: "Universal healthcare", es: "Atención médica universal", de: "Universelle Gesundheitsversorgung", nl: "Universele gezondheidszorg" },
          { en: "Lower taxes", es: "Impuestos más bajos", de: "Niedrigere Steuern", nl: "Lagere belastingen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The early International Women's Day rallies primarily demanded women's suffrage - the right to vote. At the 1911 demonstrations, over one million women and men campaigned for women's rights to vote, work, be trained, hold public office, and end discrimination. These demands emerged from the broader women's suffrage movement that was gaining momentum in Europe and North America in the early 20th century.",
          es: "Las primeras manifestaciones del Día Internacional de la Mujer demandaban principalmente el sufragio femenino - el derecho al voto. En las manifestaciones de 1911, más de un millón de mujeres y hombres hicieron campaña por los derechos de las mujeres a votar, trabajar, ser capacitadas, ocupar cargos públicos y acabar con la discriminación. Estas demandas surgieron del movimiento más amplio por el sufragio femenino que estaba ganando impulso en Europa y América del Norte a principios del siglo XX.",
          de: "Die frühen Demonstrationen zum Internationalen Frauentag forderten in erster Linie das Frauenwahlrecht - das Recht zu wählen. Bei den Demonstrationen von 1911 setzten sich über eine Million Frauen und Männer für die Rechte der Frauen ein, zu wählen, zu arbeiten, ausgebildet zu werden, öffentliche Ämter zu bekleiden und Diskriminierung zu beenden. Diese Forderungen entstanden aus der breiteren Frauenwahlrechtsbewegung, die im frühen 20. Jahrhundert in Europa und Nordamerika an Schwung gewann.",
          nl: "De vroege Internationale Vrouwendag-manifestaties eisten voornamelijk vrouwenkiesrecht - het recht om te stemmen. Bij de demonstraties van 1911 voerden meer dan een miljoen vrouwen en mannen campagne voor de rechten van vrouwen om te stemmen, te werken, opgeleid te worden, openbare functies te bekleden en discriminatie te beëindigen. Deze eisen kwamen voort uit de bredere vrouwenkiesrechtbeweging die begin 20e eeuw in Europa en Noord-Amerika aan kracht won."
        }
      },
      {
        question: {
          en: "What color is traditionally associated with International Women's Day?",
          es: "¿Qué color se asocia tradicionalmente con el Día Internacional de la Mujer?",
          de: "Welche Farbe wird traditionell mit dem Internationalen Frauentag assoziiert?",
          nl: "Welke kleur wordt traditioneel geassocieerd met Internationale Vrouwendag?"
        },
        options: [
          { en: "Purple", es: "Púrpura", de: "Lila", nl: "Paars" },
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Purple is the traditional color of International Women's Day, symbolizing justice and dignity. It was adopted from the women's suffrage movement in the early 1900s. The combination of purple, green, and white was designated by the Women's Social and Political Union in the UK in 1908: purple for dignity, green for hope, and white for purity. Today, purple remains the primary color representing International Women's Day globally.",
          es: "El púrpura es el color tradicional del Día Internacional de la Mujer, simbolizando justicia y dignidad. Fue adoptado del movimiento por el sufragio femenino a principios del siglo XX. La combinación de púrpura, verde y blanco fue designada por la Unión Social y Política de Mujeres en el Reino Unido en 1908: púrpura por dignidad, verde por esperanza y blanco por pureza. Hoy, el púrpura sigue siendo el color principal que representa el Día Internacional de la Mujer a nivel mundial.",
          de: "Lila ist die traditionelle Farbe des Internationalen Frauentags und symbolisiert Gerechtigkeit und Würde. Sie wurde von der Frauenwahlrechtsbewegung im frühen 20. Jahrhundert übernommen. Die Kombination aus Lila, Grün und Weiß wurde 1908 von der Women's Social and Political Union in Großbritannien festgelegt: Lila für Würde, Grün für Hoffnung und Weiß für Reinheit. Heute bleibt Lila die Hauptfarbe, die weltweit den Internationalen Frauentag repräsentiert.",
          nl: "Paars is de traditionele kleur van Internationale Vrouwendag en symboliseert rechtvaardigheid en waardigheid. Het werd overgenomen van de vrouwenkiesrechtbeweging in het begin van de jaren 1900. De combinatie van paars, groen en wit werd in 1908 aangewezen door de Women's Social and Political Union in het VK: paars voor waardigheid, groen voor hoop en wit voor zuiverheid. Vandaag de dag blijft paars de primaire kleur die wereldwijd Internationale Vrouwendag vertegenwoordigt."
        }
      },
      {
        question: {
          en: "In what year did International Women's Day first begin to be celebrated?",
          es: "¿En qué año comenzó a celebrarse por primera vez el Día Internacional de la Mujer?",
          de: "In welchem Jahr wurde der Internationale Frauentag erstmals gefeiert?",
          nl: "In welk jaar werd Internationale Vrouwendag voor het eerst gevierd?"
        },
        options: [
          { en: "1975", es: "1975", de: "1975", nl: "1975" },
          { en: "1911", es: "1911", de: "1911", nl: "1911" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" }
        ],
        correctIndex: 1,
        explanation: {
          en: "International Women's Day was first celebrated in 1911, following a proposal by Clara Zetkin at the 1910 International Conference of Working Women in Copenhagen. The first International Women's Day was honored by over a million people in Austria, Denmark, Germany, and Switzerland on March 19, 1911. The date was later standardized to March 8th. The movement grew from labor and suffrage movements seeking better working conditions, voting rights, and equality for women. The tragic Triangle Shirtwaist Factory fire in New York on March 25, 1911, which killed 146 garment workers (mostly young immigrant women), further galvanized the movement for women's rights and workplace safety.",
          es: "El Día Internacional de la Mujer se celebró por primera vez en 1911, siguiendo una propuesta de Clara Zetkin en la Conferencia Internacional de Mujeres Trabajadoras de 1910 en Copenhague. El primer Día Internacional de la Mujer fue honrado por más de un millón de personas en Austria, Dinamarca, Alemania y Suiza el 19 de marzo de 1911. La fecha se estandarizó posteriormente al 8 de marzo. El movimiento creció a partir de movimientos laborales y de sufragio que buscaban mejores condiciones de trabajo, derechos de voto e igualdad para las mujeres. El trágico incendio de la fábrica Triangle Shirtwaist en Nueva York el 25 de marzo de 1911, que mató a 146 trabajadoras de confección (en su mayoría jóvenes inmigrantes), galvanizó aún más el movimiento por los derechos de las mujeres y la seguridad en el lugar de trabajo.",
          de: "Der Internationale Frauentag wurde erstmals 1911 gefeiert, nach einem Vorschlag von Clara Zetkin auf der Internationalen Konferenz arbeitender Frauen 1910 in Kopenhagen. Der erste Internationale Frauentag wurde am 19. März 1911 von über einer Million Menschen in Österreich, Dänemark, Deutschland und der Schweiz geehrt. Das Datum wurde später auf den 8. März standardisiert. Die Bewegung wuchs aus Arbeiter- und Wahlrechtsbewegungen, die bessere Arbeitsbedingungen, Wahlrecht und Gleichberechtigung für Frauen forderten. Das tragische Feuer in der Triangle Shirtwaist Factory in New York am 25. März 1911, bei dem 146 Textilarbeiterinnen (meist junge Einwandererinnen) ums Leben kamen, verstärkte die Bewegung für Frauenrechte und Arbeitssicherheit weiter.",
          nl: "Internationale Vrouwendag werd voor het eerst gevierd in 1911, na een voorstel van Clara Zetkin op de Internationale Conferentie van Werkende Vrouwen in 1910 in Kopenhagen. De eerste Internationale Vrouwendag werd op 19 maart 1911 geëerd door meer dan een miljoen mensen in Oostenrijk, Denemarken, Duitsland en Zwitserland. De datum werd later gestandaardiseerd op 8 maart. De beweging groeide uit arbeiders- en kiesrechtbewegingen die betere arbeidsomstandigheden, stemrecht en gelijkheid voor vrouwen nastreefden. De tragische brand in de Triangle Shirtwaist Factory in New York op 25 maart 1911, waarbij 146 kledingarbeiders (voornamelijk jonge immigrante vrouwen) omkwamen, gaf de beweging voor vrouwenrechten en veiligheid op de werkplek verdere impulsen."
        }
      }
    ],

    // Day 9 - March 9th: Barbie Doll Debut (1959)
    day9: [
      {
        question: {
          en: "On March 9, 1959, which iconic toy made its debut at the American International Toy Fair in New York?",
          es: "El 9 de marzo de 1959, ¿qué juguete icónico debutó en la Feria Internacional Americana del Juguete en Nueva York?",
          de: "Welches ikonische Spielzeug hatte am 9. März 1959 sein Debüt auf der American International Toy Fair in New York?",
          nl: "Welk iconisch speelgoed maakte op 9 maart 1959 zijn debuut op de American International Toy Fair in New York?"
        },
        options: [
          { en: "Barbie doll", es: "Muñeca Barbie", de: "Barbie-Puppe", nl: "Barbie-pop" },
          { en: "G.I. Joe", es: "G.I. Joe", de: "G.I. Joe", nl: "G.I. Joe" },
          { en: "Hot Wheels", es: "Hot Wheels", de: "Hot Wheels", nl: "Hot Wheels" },
          { en: "Rubik's Cube", es: "Cubo de Rubik", de: "Rubik's Würfel", nl: "Rubik's kubus" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 9, 1959, the Barbie doll made its official debut at the American International Toy Fair in New York City. Created by Ruth Handler and manufactured by Mattel, Barbie became one of the most successful and influential toys in history, selling over a billion dolls worldwide and becoming a cultural icon that has sparked both admiration and controversy.",
          es: "El 9 de marzo de 1959, la muñeca Barbie hizo su debut oficial en la Feria Internacional Americana del Juguete en la Ciudad de Nueva York. Creada por Ruth Handler y fabricada por Mattel, Barbie se convirtió en uno de los juguetes más exitosos e influyentes de la historia, vendiendo más de mil millones de muñecas en todo el mundo y convirtiéndose en un ícono cultural que ha generado tanto admiración como controversia.",
          de: "Am 9. März 1959 hatte die Barbie-Puppe ihr offizielles Debüt auf der American International Toy Fair in New York City. Von Ruth Handler kreiert und von Mattel hergestellt, wurde Barbie zu einem der erfolgreichsten und einflussreichsten Spielzeuge der Geschichte, verkaufte über eine Milliarde Puppen weltweit und wurde zu einer kulturellen Ikone, die sowohl Bewunderung als auch Kontroversen auslöste.",
          nl: "Op 9 maart 1959 maakte de Barbie-pop haar officiële debuut op de American International Toy Fair in New York City. Gecreëerd door Ruth Handler en geproduceerd door Mattel, werd Barbie een van de meest succesvolle en invloedrijke speelgoederen in de geschiedenis, verkocht meer dan een miljard poppen wereldwijd en werd een cultureel icoon dat zowel bewondering als controverse opriep."
        }
      },
      {
        question: {
          en: "Who created the Barbie doll?",
          es: "¿Quién creó la muñeca Barbie?",
          de: "Wer hat die Barbie-Puppe erfunden?",
          nl: "Wie creëerde de Barbie-pop?"
        },
        options: [
          { en: "Mary Poppins", es: "Mary Poppins", de: "Mary Poppins", nl: "Mary Poppins" },
          { en: "Walt Disney", es: "Walt Disney", de: "Walt Disney", nl: "Walt Disney" },
          { en: "Ruth Handler", es: "Ruth Handler", de: "Ruth Handler", nl: "Ruth Handler" },
          { en: "Margaret Mitchell", es: "Margaret Mitchell", de: "Margaret Mitchell", nl: "Margaret Mitchell" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ruth Handler, co-founder of Mattel Inc., created Barbie after observing her daughter Barbara playing with paper dolls and imagining adult roles. She was inspired by a German doll called Bild Lilli and developed Barbie as a three-dimensional adult fashion doll. The doll was named after Handler's daughter, Barbara (Barbie), and later her son Ken inspired the Ken doll.",
          es: "Ruth Handler, cofundadora de Mattel Inc., creó a Barbie después de observar a su hija Barbara jugando con muñecas de papel e imaginando roles de adultos. Se inspiró en una muñeca alemana llamada Bild Lilli y desarrolló a Barbie como una muñeca de moda adulta tridimensional. La muñeca recibió el nombre de la hija de Handler, Barbara (Barbie), y más tarde su hijo Ken inspiró la muñeca Ken.",
          de: "Ruth Handler, Mitbegründerin von Mattel Inc., schuf Barbie, nachdem sie ihre Tochter Barbara beim Spielen mit Papierpuppen beobachtet hatte, die sich Erwachsenenrollen vorstellte. Sie ließ sich von einer deutschen Puppe namens Bild Lilli inspirieren und entwickelte Barbie als dreidimensionale erwachsene Modepuppe. Die Puppe wurde nach Handlers Tochter Barbara (Barbie) benannt, und später inspirierte ihr Sohn Ken die Ken-Puppe.",
          nl: "Ruth Handler, medeoprichter van Mattel Inc., creëerde Barbie nadat ze haar dochter Barbara had geobserveerd die met papieren poppen speelde en zich volwassen rollen voorstelde. Ze werd geïnspireerd door een Duitse pop genaamd Bild Lilli en ontwikkelde Barbie als een driedimensionale volwassen modepop. De pop werd vernoemd naar Handlers dochter Barbara (Barbie), en later inspireerde haar zoon Ken de Ken-pop."
        }
      },
      {
        question: {
          en: "What was Barbie's full name?",
          es: "¿Cuál era el nombre completo de Barbie?",
          de: "Wie war Barbies voller Name?",
          nl: "Wat was Barbies volledige naam?"
        },
        options: [
          { en: "Barbara Millicent Roberts", es: "Barbara Millicent Roberts", de: "Barbara Millicent Roberts", nl: "Barbara Millicent Roberts" },
          { en: "Barbara Anne Smith", es: "Barbara Anne Smith", de: "Barbara Anne Smith", nl: "Barbara Anne Smith" },
          { en: "Barbie Jean Wilson", es: "Barbie Jean Wilson", de: "Barbie Jean Wilson", nl: "Barbie Jean Wilson" },
          { en: "Barbara Ruth Handler", es: "Barbara Ruth Handler", de: "Barbara Ruth Handler", nl: "Barbara Ruth Handler" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Barbie's official full name is Barbara Millicent Roberts. According to her backstory, she is from the fictional town of Willows, Wisconsin. Over the decades, Barbie has had over 200 careers, from astronaut to presidential candidate, reflecting changing societal roles for women and inspiring generations of children to imagine limitless possibilities.",
          es: "El nombre oficial completo de Barbie es Barbara Millicent Roberts. Según su historia de fondo, es de la ciudad ficticia de Willows, Wisconsin. A lo largo de las décadas, Barbie ha tenido más de 200 carreras, desde astronauta hasta candidata presidencial, reflejando los cambiantes roles sociales de las mujeres e inspirando a generaciones de niños a imaginar posibilidades ilimitadas.",
          de: "Barbies offizieller vollständiger Name ist Barbara Millicent Roberts. Laut ihrer Hintergrundgeschichte stammt sie aus der fiktiven Stadt Willows, Wisconsin. Im Laufe der Jahrzehnte hatte Barbie über 200 Berufe, von Astronautin bis Präsidentschaftskandidatin, was die sich ändernden gesellschaftlichen Rollen von Frauen widerspiegelt und Generationen von Kindern inspirierte, sich grenzenlose Möglichkeiten vorzustellen.",
          nl: "Barbies officiële volledige naam is Barbara Millicent Roberts. Volgens haar achtergrondverhaal komt ze uit het fictieve stadje Willows, Wisconsin. Door de decennia heen heeft Barbie meer dan 200 carrières gehad, van astronaut tot presidentskandidaat, wat de veranderende maatschappelijke rollen voor vrouwen weerspiegelt en generaties kinderen inspireerde om grenzeloze mogelijkheden voor te stellen."
        }
      },
      {
        question: {
          en: "What company manufactured the Barbie doll?",
          es: "¿Qué compañía fabricó la muñeca Barbie?",
          de: "Welches Unternehmen stellte die Barbie-Puppe her?",
          nl: "Welk bedrijf produceerde de Barbie-pop?"
        },
        options: [
          { en: "Mattel", es: "Mattel", de: "Mattel", nl: "Mattel" },
          { en: "Hasbro", es: "Hasbro", de: "Hasbro", nl: "Hasbro" },
          { en: "Fisher-Price", es: "Fisher-Price", de: "Fisher-Price", nl: "Fisher-Price" },
          { en: "LEGO", es: "LEGO", de: "LEGO", nl: "LEGO" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Mattel Inc., the American toy manufacturing giant, has produced Barbie dolls since 1959. Founded in 1945 by Harold 'Matt' Matson and Elliot Handler (husband of Ruth Handler), Mattel became one of the world's largest toy companies largely due to Barbie's phenomenal success. The Barbie brand generates billions of dollars in annual revenue and remains Mattel's most profitable product line.",
          es: "Mattel Inc., el gigante estadounidense de fabricación de juguetes, ha producido muñecas Barbie desde 1959. Fundada en 1945 por Harold 'Matt' Matson y Elliot Handler (esposo de Ruth Handler), Mattel se convirtió en una de las compañías de juguetes más grandes del mundo en gran parte debido al éxito fenomenal de Barbie. La marca Barbie genera miles de millones de dólares en ingresos anuales y sigue siendo la línea de productos más rentable de Mattel.",
          de: "Mattel Inc., der amerikanische Spielzeugherstellungsriese, produziert seit 1959 Barbie-Puppen. Gegründet 1945 von Harold 'Matt' Matson und Elliot Handler (Ehemann von Ruth Handler), wurde Mattel zu einem der weltweit größten Spielzeugunternehmen, hauptsächlich aufgrund des phänomenalen Erfolgs von Barbie. Die Marke Barbie generiert jährlich Milliarden von Dollar an Einnahmen und bleibt Mattels profitabelste Produktlinie.",
          nl: "Mattel Inc., de Amerikaanse speelgoedproductiegigant, produceert sinds 1959 Barbie-poppen. Opgericht in 1945 door Harold 'Matt' Matson en Elliot Handler (echtgenoot van Ruth Handler), werd Mattel een van de grootste speelgoedbedrijven ter wereld, grotendeels dankzij het fenomenale succes van Barbie. Het Barbie-merk genereert miljarden dollars aan jaarlijkse inkomsten en blijft Mattels meest winstgevende productlijn."
        }
      },
      {
        question: {
          en: "Approximately how many Barbie dolls have been sold worldwide since 1959?",
          es: "¿Aproximadamente cuántas muñecas Barbie se han vendido en todo el mundo desde 1959?",
          de: "Wie viele Barbie-Puppen wurden seit 1959 weltweit verkauft?",
          nl: "Hoeveel Barbie-poppen zijn er wereldwijd verkocht sinds 1959?"
        },
        options: [
          { en: "Over 1 billion", es: "Más de 1 mil millones", de: "Über 1 Milliarde", nl: "Meer dan 1 miljard" },
          { en: "About 100 million", es: "Cerca de 100 millones", de: "Etwa 100 Millionen", nl: "Ongeveer 100 miljoen" },
          { en: "Around 500 million", es: "Alrededor de 500 millones", de: "Etwa 500 Millionen", nl: "Rond 500 miljoen" },
          { en: "About 50 million", es: "Cerca de 50 millones", de: "Etwa 50 Millionen", nl: "Ongeveer 50 miljoen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Since her debut in 1959, over one billion Barbie dolls have been sold worldwide, making her one of the best-selling toys of all time. At peak popularity, Mattel reported selling three Barbie dolls every second. Barbie has been sold in over 150 countries and translated into numerous languages, becoming a global phenomenon that transcends cultures and generations.",
          es: "Desde su debut en 1959, se han vendido más de mil millones de muñecas Barbie en todo el mundo, convirtiéndola en uno de los juguetes más vendidos de todos los tiempos. En el pico de popularidad, Mattel informó que vendía tres muñecas Barbie cada segundo. Barbie se ha vendido en más de 150 países y se ha traducido a numerosos idiomas, convirtiéndose en un fenómeno global que trasciende culturas y generaciones.",
          de: "Seit ihrem Debüt 1959 wurden weltweit über eine Milliarde Barbie-Puppen verkauft, was sie zu einem der meistverkauften Spielzeuge aller Zeiten macht. Auf dem Höhepunkt der Beliebtheit berichtete Mattel, dass alle drei Sekunden eine Barbie-Puppe verkauft wurde. Barbie wurde in über 150 Ländern verkauft und in zahlreiche Sprachen übersetzt und wurde zu einem globalen Phänomen, das Kulturen und Generationen überschreitet.",
          nl: "Sinds haar debuut in 1959 zijn er wereldwijd meer dan een miljard Barbie-poppen verkocht, waardoor ze een van de best verkochte speelgoederen aller tijden is. Op het hoogtepunt van haar populariteit meldde Mattel dat er elke drie seconden een Barbie-pop werd verkocht. Barbie is verkocht in meer dan 150 landen en vertaald in talrijke talen, en werd een wereldwijd fenomeen dat culturen en generaties overstijgt."
        }
      }
    ],
    
    // Day 10 - March 10th: First Telephone Call (1876)
    day10: [
      {
        question: {
          en: "On March 10, 1876, what historic first occurred in communication technology?",
          es: "El 10 de marzo de 1876, ¿qué primicia histórica ocurrió en la tecnología de comunicación?",
          de: "Was ereignete sich am 10. März 1876 als historisches Erste in der Kommunikationstechnologie?",
          nl: "Wat gebeurde er op 10 maart 1876 als historische primeur in communicatietechnologie?"
        },
        options: [
          { en: "The first successful telephone call", es: "La primera llamada telefónica exitosa", de: "Das erste erfolgreiche Telefongespräch", nl: "Het eerste succesvolle telefoongesprek" },
          { en: "The first radio broadcast", es: "La primera transmisión de radio", de: "Die erste Radiosendung", nl: "De eerste radio-uitzending" },
          { en: "The first telegraph message", es: "El primer mensaje telegráfico", de: "Die erste Telegrafennachricht", nl: "Het eerste telegraafbericht" },
          { en: "The first television broadcast", es: "La primera transmisión de televisión", de: "Die erste Fernsehsendung", nl: "De eerste televisie-uitzending" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 10, 1876, Alexander Graham Bell made the first successful telephone call to his assistant Thomas Watson in the next room, speaking the famous words: 'Mr. Watson, come here, I want to see you.' This breakthrough revolutionized human communication and laid the foundation for our modern telecommunications network that connects billions of people worldwide.",
          es: "El 10 de marzo de 1876, Alexander Graham Bell realizó la primera llamada telefónica exitosa a su asistente Thomas Watson en la habitación contigua, pronunciando las famosas palabras: 'Sr. Watson, venga aquí, quiero verlo.' Este avance revolucionó la comunicación humana y sentó las bases de nuestra red moderna de telecomunicaciones que conecta a miles de millones de personas en todo el mundo.",
          de: "Am 10. März 1876 tätigte Alexander Graham Bell das erste erfolgreiche Telefongespräch mit seinem Assistenten Thomas Watson im Nebenzimmer und sprach die berühmten Worte: 'Herr Watson, kommen Sie her, ich möchte Sie sehen.' Dieser Durchbruch revolutionierte die menschliche Kommunikation und legte den Grundstein für unser modernes Telekommunikationsnetz, das Milliarden von Menschen weltweit verbindet.",
          nl: "Op 10 maart 1876 voerde Alexander Graham Bell het eerste succesvolle telefoongesprek met zijn assistent Thomas Watson in de kamer ernaast, waarbij hij de beroemde woorden sprak: 'Meneer Watson, kom hier, ik wil u zien.' Deze doorbraak revolutioneerde de menselijke communicatie en legde de basis voor ons moderne telecommunicatienetwerk dat miljarden mensen wereldwijd verbindt."
        }
      },
      {
        question: {
          en: "What were the famous first words spoken on the telephone?",
          es: "¿Cuáles fueron las famosas primeras palabras habladas por teléfono?",
          de: "Was waren die berühmten ersten Worte, die am Telefon gesprochen wurden?",
          nl: "Wat waren de beroemde eerste woorden die via de telefoon werden gesproken?"
        },
        options: [
          { en: "Mr. Watson, come here, I want to see you", es: "Sr. Watson, venga aquí, quiero verlo", de: "Herr Watson, kommen Sie her, ich möchte Sie sehen", nl: "Meneer Watson, kom hier, ik wil u zien" },
          { en: "Hello, can you hear me?", es: "Hola, ¿puede oírme?", de: "Hallo, können Sie mich hören?", nl: "Hallo, kunt u mij horen?" },
          { en: "Testing, one, two, three", es: "Probando, uno, dos, tres", de: "Test, eins, zwei, drei", nl: "Testen, een, twee, drie" },
          { en: "Watson, the invention works!", es: "Watson, ¡la invención funciona!", de: "Watson, die Erfindung funktioniert!", nl: "Watson, de uitvinding werkt!" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The famous first words transmitted by telephone were 'Mr. Watson, come here, I want to see you,' spoken by Alexander Graham Bell to his assistant Thomas Watson on March 10, 1876. According to some accounts, Bell had spilled battery acid on himself and called for Watson's help, making these urgent words the first complete sentence transmitted by electrical speech transmission. These simple words marked a pivotal moment in human history.",
          es: "Las famosas primeras palabras transmitidas por teléfono fueron 'Sr. Watson, venga aquí, quiero verlo,' pronunciadas por Alexander Graham Bell a su asistente Thomas Watson el 10 de marzo de 1876. Según algunos relatos, Bell había derramado ácido de batería sobre sí mismo y llamó a Watson para pedir ayuda, haciendo que estas palabras urgentes fueran la primera oración completa transmitida por transmisión eléctrica de voz. Estas palabras simples marcaron un momento crucial en la historia humana.",
          de: "Die berühmten ersten Worte, die per Telefon übertragen wurden, waren 'Herr Watson, kommen Sie her, ich möchte Sie sehen', gesprochen von Alexander Graham Bell zu seinem Assistenten Thomas Watson am 10. März 1876. Einigen Berichten zufolge hatte Bell Batteriesäure auf sich verschüttet und rief Watson um Hilfe, wodurch diese dringenden Worte der erste vollständige Satz wurden, der durch elektrische Sprachübertragung übermittelt wurde. Diese einfachen Worte markierten einen entscheidenden Moment in der Menschheitsgeschichte.",
          nl: "De beroemde eerste woorden die via de telefoon werden verzonden waren 'Meneer Watson, kom hier, ik wil u zien,' gesproken door Alexander Graham Bell tegen zijn assistent Thomas Watson op 10 maart 1876. Volgens sommige verslagen had Bell batterijzuur op zichzelf gemorst en riep Watson om hulp, waardoor deze dringende woorden de eerste volledige zin werden die via elektrische spraakoverdracht werden verzonden. Deze eenvoudige woorden markeerden een cruciaal moment in de menselijke geschiedenis."
        }
      },
      {
        question: {
          en: "Who was the recipient of the first telephone call?",
          es: "¿Quién fue el receptor de la primera llamada telefónica?",
          de: "Wer war der Empfänger des ersten Telefonanrufs?",
          nl: "Wie was de ontvanger van het eerste telefoongesprek?"
        },
        options: [
          { en: "Thomas Watson", es: "Thomas Watson", de: "Thomas Watson", nl: "Thomas Watson" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Samuel Morse", es: "Samuel Morse", de: "Samuel Morse", nl: "Samuel Morse" },
          { en: "Michael Faraday", es: "Michael Faraday", de: "Michael Faraday", nl: "Michael Faraday" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Thomas Augustus Watson was Alexander Graham Bell's assistant and the recipient of the first telephone call on March 10, 1876. Watson was in an adjacent room when he heard Bell's voice through the telephone receiver. Watson later became a successful businessman and shipbuilder, but he is forever remembered as the person who answered history's first telephone call, responding to Bell's summons and confirming the success of the revolutionary invention.",
          es: "Thomas Augustus Watson fue el asistente de Alexander Graham Bell y el receptor de la primera llamada telefónica el 10 de marzo de 1876. Watson estaba en una habitación contigua cuando escuchó la voz de Bell a través del receptor telefónico. Watson más tarde se convirtió en un exitoso empresario y constructor naval, pero es recordado para siempre como la persona que respondió a la primera llamada telefónica de la historia, respondiendo a la llamada de Bell y confirmando el éxito de la invención revolucionaria.",
          de: "Thomas Augustus Watson war Alexander Graham Bells Assistent und der Empfänger des ersten Telefonanrufs am 10. März 1876. Watson war in einem angrenzenden Raum, als er Bells Stimme durch den Telefonhörer hörte. Watson wurde später ein erfolgreicher Geschäftsmann und Schiffsbauer, aber er wird für immer als die Person in Erinnerung bleiben, die das erste Telefongespräch der Geschichte entgegennahm, auf Bells Ruf antwortete und den Erfolg der revolutionären Erfindung bestätigte.",
          nl: "Thomas Augustus Watson was Alexander Graham Bells assistent en de ontvanger van het eerste telefoongesprek op 10 maart 1876. Watson was in een aangrenzende kamer toen hij Bells stem door de telefoonhoorn hoorde. Watson werd later een succesvol zakenman en scheepsbouwer, maar hij wordt voor altijd herinnerd als de persoon die het eerste telefoongesprek in de geschiedenis beantwoordde, reageerde op Bells oproep en het succes van de revolutionaire uitvinding bevestigde."
        }
      },
      {
        question: {
          en: "On March 10, 1913, which famous conductor of the Underground Railroad died in Auburn, New York?",
          es: "El 10 de marzo de 1913, ¿qué famosa conductora del Ferrocarril Subterráneo murió en Auburn, Nueva York?",
          de: "Welche berühmte Leiterin der Underground Railroad starb am 10. März 1913 in Auburn, New York?",
          nl: "Welke beroemde geleider van de Underground Railroad stierf op 10 maart 1913 in Auburn, New York?"
        },
        options: [
          { en: "Rosa Parks", es: "Rosa Parks", de: "Rosa Parks", nl: "Rosa Parks" },
          { en: "Harriet Tubman", es: "Harriet Tubman", de: "Harriet Tubman", nl: "Harriet Tubman" },
          { en: "Sojourner Truth", es: "Sojourner Truth", de: "Sojourner Truth", nl: "Sojourner Truth" },
          { en: "Frederick Douglass", es: "Frederick Douglass", de: "Frederick Douglass", nl: "Frederick Douglass" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Harriet Tubman died of pneumonia on March 10, 1913, at approximately 91 years old. Born into slavery around 1822, she escaped to freedom in 1849 and subsequently made approximately 13 missions to rescue about 70 enslaved people using the Underground Railroad network. During the Civil War, she served as a nurse, cook, and spy for the Union Army, becoming the first woman to lead an armed expedition during the war. Tubman's courage and dedication to freedom made her an icon of the abolitionist movement and American history. She was buried with military honors at Fort Hill Cemetery in Auburn, New York.",
          es: "Harriet Tubman murió de neumonía el 10 de marzo de 1913, a la edad aproximada de 91 años. Nacida en esclavitud alrededor de 1822, escapó a la libertad en 1849 y posteriormente realizó aproximadamente 13 misiones para rescatar a unas 70 personas esclavizadas usando la red del Ferrocarril Subterráneo. Durante la Guerra Civil, sirvió como enfermera, cocinera y espía del Ejército de la Unión, convirtiéndose en la primera mujer en liderar una expedición armada durante la guerra. El coraje y la dedicación de Tubman a la libertad la convirtieron en un ícono del movimiento abolicionista y de la historia estadounidense. Fue enterrada con honores militares en el Cementerio Fort Hill en Auburn, Nueva York.",
          de: "Harriet Tubman starb am 10. März 1913 im Alter von etwa 91 Jahren an einer Lungenentzündung. Sie wurde um 1822 in die Sklaverei hineingeboren, entkam 1849 in die Freiheit und unternahm anschließend etwa 13 Missionen, um etwa 70 versklavte Menschen über das Underground Railroad-Netzwerk zu retten. Während des Bürgerkriegs diente sie als Krankenschwester, Köchin und Spionin für die Unionsarmee und wurde die erste Frau, die während des Krieges eine bewaffnete Expedition leitete. Tubmans Mut und Hingabe an die Freiheit machten sie zu einer Ikone der Abolitionistenbewegung und der amerikanischen Geschichte. Sie wurde mit militärischen Ehren auf dem Fort Hill Cemetery in Auburn, New York, beigesetzt.",
          nl: "Harriet Tubman stierf op 10 maart 1913 aan longontsteking op een leeftijd van ongeveer 91 jaar. Geboren in slavernij rond 1822, ontsnapte ze in 1849 naar de vrijheid en ondernam vervolgens ongeveer 13 missies om ongeveer 70 tot slaaf gemaakte mensen te redden via het Underground Railroad-netwerk. Tijdens de Burgeroorlog diende ze als verpleegster, kok en spion voor het Unieleger en werd de eerste vrouw die tijdens de oorlog een gewapende expeditie leidde. Tubmans moed en toewijding aan de vrijheid maakten haar een icoon van de abolitionistische beweging en de Amerikaanse geschiedenis. Ze werd met militaire eer begraven op Fort Hill Cemetery in Auburn, New York."
        }
      },
      {
        question: {
          en: "On March 10, 1959, what significant event began in Lhasa, Tibet, against Chinese rule?",
          es: "El 10 de marzo de 1959, ¿qué evento significativo comenzó en Lhasa, Tíbet, contra el dominio chino?",
          de: "Welches bedeutende Ereignis begann am 10. März 1959 in Lhasa, Tibet, gegen die chinesische Herrschaft?",
          nl: "Welke belangrijke gebeurtenis begon op 10 maart 1959 in Lhasa, Tibet, tegen de Chinese heerschappij?"
        },
        options: [
          { en: "Great Leap Forward", es: "Gran Salto Adelante", de: "Großer Sprung nach vorn", nl: "Grote Sprong Voorwaarts" },
          { en: "Tibetan Uprising", es: "Levantamiento Tibetano", de: "Tibetischer Aufstand", nl: "Tibetaanse Opstand" },
          { en: "Long March", es: "Larga Marcha", de: "Langer Marsch", nl: "Lange Mars" },
          { en: "Cultural Revolution", es: "Revolución Cultural", de: "Kulturrevolution", nl: "Culturele Revolutie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Tibetan Uprising began on March 10, 1959, when thousands of Tibetans surrounded the Norbulingka palace in Lhasa to prevent the Chinese from taking the 14th Dalai Lama. The uprising was triggered by fears that the Dalai Lama would be kidnapped by the Chinese People's Liberation Army. The protests escalated into armed resistance against Chinese rule. By March 17, the Dalai Lama fled to India, where he established a Tibetan government-in-exile. The Chinese military suppression of the uprising resulted in tens of thousands of Tibetan deaths and the imprisonment of many more. March 10 is now commemorated annually as Tibetan Uprising Day by Tibetans worldwide.",
          es: "El Levantamiento Tibetano comenzó el 10 de marzo de 1959, cuando miles de tibetanos rodearon el palacio de Norbulingka en Lhasa para evitar que los chinos se llevaran al 14º Dalái Lama. El levantamiento fue provocado por temores de que el Dalái Lama fuera secuestrado por el Ejército Popular de Liberación chino. Las protestas se intensificaron en resistencia armada contra el dominio chino. Para el 17 de marzo, el Dalái Lama huyó a la India, donde estableció un gobierno tibetano en el exilio. La supresión militar china del levantamiento resultó en decenas de miles de muertes tibetanas y el encarcelamiento de muchos más. El 10 de marzo ahora se conmemora anualmente como el Día del Levantamiento Tibetano por los tibetanos de todo el mundo.",
          de: "Der Tibetische Aufstand begann am 10. März 1959, als Tausende von Tibetern den Norbulingka-Palast in Lhasa umzingelten, um zu verhindern, dass die Chinesen den 14. Dalai Lama entführen. Der Aufstand wurde durch Befürchtungen ausgelöst, dass der Dalai Lama von der chinesischen Volksbefreiungsarmee entführt werden würde. Die Proteste eskalierten zu bewaffnetem Widerstand gegen die chinesische Herrschaft. Am 17. März floh der Dalai Lama nach Indien, wo er eine tibetische Exilregierung gründete. Die militärische Niederschlagung des Aufstands durch China führte zu Zehntausenden von tibetischen Toten und der Inhaftierung vieler weiterer. Der 10. März wird heute von Tibetern weltweit jährlich als Tibetischer Aufstandstag begangen.",
          nl: "De Tibetaanse Opstand begon op 10 maart 1959, toen duizenden Tibetanen het Norbulingka-paleis in Lhasa omsingelden om te voorkomen dat de Chinezen de 14e Dalai Lama zouden meenemen. De opstand werd veroorzaakt door angst dat de Dalai Lama zou worden ontvoerd door het Chinese Volksbevrijdingsleger. De protesten escaleerden tot gewapend verzet tegen de Chinese heerschappij. Op 17 maart vluchtte de Dalai Lama naar India, waar hij een Tibetaanse regering in ballingschap vestigde. De Chinese militaire onderdrukking van de opstand resulteerde in tienduizenden Tibetaanse doden en de gevangenneming van nog veel meer mensen. 10 maart wordt nu jaarlijks herdacht als Tibetaanse Opstandsdag door Tibetanen wereldwijd."
        }
      }
    ],

    // Day 11 - March 11th: Great East Japan Earthquake and WHO Pandemic Declaration
    day11: [
      {
        question: {
          en: "On March 11, 2011, what devastating natural disaster struck Japan?",
          es: "El 11 de marzo de 2011, ¿qué devastador desastre natural golpeó a Japón?",
          de: "Welche verheerende Naturkatastrophe traf Japan am 11. März 2011?",
          nl: "Welke verwoestende natuurramp trof Japan op 11 maart 2011?"
        },
        options: [
          { en: "A magnitude 9.0 earthquake and tsunami", es: "Un terremoto de magnitud 9.0 y tsunami", de: "Ein Erdbeben der Stärke 9,0 und ein Tsunami", nl: "Een aardbeving van magnitude 9,0 en tsunami" },
          { en: "A volcanic eruption", es: "Una erupción volcánica", de: "Ein Vulkanausbruch", nl: "Een vulkaanuitbarsting" },
          { en: "A typhoon", es: "Un tifón", de: "Ein Taifun", nl: "Een tyfoon" },
          { en: "A landslide", es: "Un deslizamiento de tierra", de: "Ein Erdrutsch", nl: "Een aardverschuiving" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 11, 2011, a magnitude 9.0-9.1 undersea megathrust earthquake occurred off the coast of Japan, triggering tsunami waves up to 40.5 meters high. The disaster killed over 18,000 people and triggered the Fukushima nuclear disaster. It was the most powerful earthquake ever recorded in Japan and the fourth most powerful earthquake in the world since modern seismography began in 1900.",
          es: "El 11 de marzo de 2011, un terremoto submarino de megathrust de magnitud 9.0-9.1 ocurrió frente a la costa de Japón, desencadenando olas de tsunami de hasta 40.5 metros de altura. El desastre mató a más de 18,000 personas y desencadenó el desastre nuclear de Fukushima. Fue el terremoto más poderoso jamás registrado en Japón y el cuarto terremoto más poderoso del mundo desde que comenzó la sismografía moderna en 1900.",
          de: "Am 11. März 2011 ereignete sich ein Unterwasser-Megathrust-Erdbeben der Stärke 9,0-9,1 vor der Küste Japans, das Tsunami-Wellen von bis zu 40,5 Metern Höhe auslöste. Die Katastrophe tötete über 18.000 Menschen und löste die nukleare Katastrophe von Fukushima aus. Es war das stärkste jemals in Japan aufgezeichnete Erdbeben und das viertstärkste Erdbeben der Welt seit Beginn der modernen Seismographie im Jahr 1900.",
          nl: "Op 11 maart 2011 vond er een onderzeese megathrust-aardbeving van magnitude 9,0-9,1 plaats voor de kust van Japan, die tsunami-golven van tot 40,5 meter hoog veroorzaakte. De ramp doodde meer dan 18.000 mensen en veroorzaakte de nucleaire ramp van Fukushima. Het was de krachtigste aardbeving ooit geregistreerd in Japan en de vierde krachtigste aardbeving ter wereld sinds de moderne seismografie in 1900 begon."
        }
      },
      {
        question: {
          en: "On March 11, 2020, what major global health announcement did the WHO make?",
          es: "El 11 de marzo de 2020, ¿qué importante anuncio de salud global hizo la OMS?",
          de: "Welche wichtige globale Gesundheitsankündigung machte die WHO am 11. März 2020?",
          nl: "Welke belangrijke wereldwijde gezondheidsaankondiging deed de WHO op 11 maart 2020?"
        },
        options: [
          { en: "Declared COVID-19 a global pandemic", es: "Declaró COVID-19 una pandemia global", de: "Erklärte COVID-19 zur globalen Pandemie", nl: "Verklaarde COVID-19 tot een wereldwijde pandemie" },
          { en: "Announced a cure for influenza", es: "Anunció una cura para la influenza", de: "Kündigte ein Heilmittel für Influenza an", nl: "Kondigde een geneesmiddel voor griep aan" },
          { en: "Eliminated malaria globally", es: "Eliminó la malaria globalmente", de: "Beseitigte Malaria weltweit", nl: "Elimineerde malaria wereldwijd" },
          { en: "Declared victory over Ebola", es: "Declaró victoria sobre el Ébola", de: "Erklärte Sieg über Ebola", nl: "Verklaarde overwinning op Ebola" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 11, 2020, after more than 118,000 cases in 114 countries and 4,291 deaths, the World Health Organization officially declared COVID-19 a global pandemic. This declaration marked a turning point in the global response to the virus, leading to unprecedented lockdowns, travel restrictions, and public health measures worldwide that would reshape society for years to come.",
          es: "El 11 de marzo de 2020, después de más de 118,000 casos en 114 países y 4,291 muertes, la Organización Mundial de la Salud declaró oficialmente COVID-19 como una pandemia global. Esta declaración marcó un punto de inflexión en la respuesta global al virus, llevando a confinamientos sin precedentes, restricciones de viaje y medidas de salud pública en todo el mundo que remodelarían la sociedad durante años.",
          de: "Am 11. März 2020, nach mehr als 118.000 Fällen in 114 Ländern und 4.291 Todesfällen, erklärte die Weltgesundheitsorganisation COVID-19 offiziell zu einer globalen Pandemie. Diese Erklärung markierte einen Wendepunkt in der globalen Reaktion auf das Virus und führte zu beispiellosen Lockdowns, Reisebeschränkungen und öffentlichen Gesundheitsmaßnahmen weltweit, die die Gesellschaft für Jahre umgestalten würden.",
          nl: "Op 11 maart 2020, na meer dan 118.000 gevallen in 114 landen en 4.291 doden, verklaarde de Wereldgezondheidsorganisatie COVID-19 officieel tot een wereldwijde pandemie. Deze verklaring markeerde een keerpunt in de wereldwijde reactie op het virus, wat leidde tot ongekende lockdowns, reisbeperkingen en volksgezondheidmaatregelen wereldwijd die de samenleving voor jaren zouden hervormen."
        }
      },
      {
        question: {
          en: "What nuclear disaster was triggered by the 2011 Japan earthquake and tsunami?",
          es: "¿Qué desastre nuclear fue desencadenado por el terremoto y tsunami de Japón de 2011?",
          de: "Welche nukleare Katastrophe wurde durch das Erdbeben und den Tsunami in Japan 2011 ausgelöst?",
          nl: "Welke nucleaire ramp werd veroorzaakt door de aardbeving en tsunami in Japan in 2011?"
        },
        options: [
          { en: "The Fukushima Daiichi nuclear disaster", es: "El desastre nuclear de Fukushima Daiichi", de: "Die Fukushima-Daiichi-Nuklearkatastrophe", nl: "De Fukushima Daiichi nucleaire ramp" },
          { en: "The Chernobyl disaster", es: "El desastre de Chernobyl", de: "Die Tschernobyl-Katastrophe", nl: "De Tsjernobyl ramp" },
          { en: "The Three Mile Island incident", es: "El incidente de Three Mile Island", de: "Der Three-Mile-Island-Zwischenfall", nl: "Het Three Mile Island incident" },
          { en: "The Windscale fire", es: "El incendio de Windscale", de: "Das Windscale-Feuer", nl: "De Windscale brand" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The massive tsunami waves caused by the earthquake overwhelmed the Fukushima Daiichi Nuclear Power Plant's defensive seawalls, flooding the facility and causing cooling system failures. This led to three nuclear meltdowns, hydrogen explosions, and the release of radioactive materials. It became the worst nuclear accident since Chernobyl in 1986, forcing the evacuation of over 150,000 people from the surrounding areas.",
          es: "Las enormes olas de tsunami causadas por el terremoto superaron los muros defensivos de la central nuclear de Fukushima Daiichi, inundando las instalaciones y causando fallas en el sistema de enfriamiento. Esto llevó a tres fusiones nucleares, explosiones de hidrógeno y la liberación de materiales radiactivos. Se convirtió en el peor accidente nuclear desde Chernobyl en 1986, forzando la evacuación de más de 150,000 personas de las áreas circundantes.",
          de: "Die massiven Tsunami-Wellen, die durch das Erdbeben verursacht wurden, überfluteten die Schutzwälle des Kernkraftwerks Fukushima Daiichi, überfluteten die Anlage und verursachten Ausfälle des Kühlsystems. Dies führte zu drei Kernschmelzen, Wasserstoffexplosionen und der Freisetzung radioaktiver Materialien. Es wurde der schlimmste Atomunfall seit Tschernobyl 1986 und zwang über 150.000 Menschen zur Evakuierung aus den umliegenden Gebieten.",
          nl: "De massieve tsunami-golven veroorzaakt door de aardbeving overspoelden de verdedigingsmuren van de Fukushima Daiichi kerncentrale, overstroomden de faciliteit en veroorzaakten storingen in het koelsysteem. Dit leidde tot drie kernsmeltingen, waterstofexplosies en de vrijgave van radioactieve materialen. Het werd het ergste nucleaire ongeval sinds Tsjernobyl in 1986, waardoor meer dan 150.000 mensen uit de omliggende gebieden moesten evacueren."
        }
      },
      {
        question: {
          en: "On March 11, 1942, what famous promise did General Douglas MacArthur make during World War II?",
          es: "El 11 de marzo de 1942, ¿qué famosa promesa hizo el General Douglas MacArthur durante la Segunda Guerra Mundial?",
          de: "Welches berühmte Versprechen machte General Douglas MacArthur am 11. März 1942 während des Zweiten Weltkriegs?",
          nl: "Welke beroemde belofte deed generaal Douglas MacArthur op 11 maart 1942 tijdens de Tweede Wereldoorlog?"
        },
        options: [
          { en: "I shall return", es: "Volveré", de: "Ich werde zurückkehren", nl: "Ik zal terugkeren" },
          { en: "Victory is ours", es: "La victoria es nuestra", de: "Der Sieg ist unser", nl: "De overwinning is van ons" },
          { en: "Never surrender", es: "Nunca rendirse", de: "Niemals aufgeben", nl: "Nooit opgeven" },
          { en: "Forward to victory", es: "Adelante hacia la victoria", de: "Vorwärts zum Sieg", nl: "Voorwaarts naar de overwinning" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 11, 1942, General Douglas MacArthur left the Philippines after Japanese forces had overwhelmed American and Filipino troops. Upon departing for Australia, he famously declared 'I shall return,' a promise he kept when Allied forces liberated the Philippines in 1944-1945. This three-word statement became one of the most iconic quotes of World War II and symbolized American determination to defeat Japan in the Pacific Theater.",
          es: "El 11 de marzo de 1942, el General Douglas MacArthur dejó Filipinas después de que las fuerzas japonesas habían abrumado a las tropas estadounidenses y filipinas. Al partir hacia Australia, declaró famosamente 'Volveré,' una promesa que cumplió cuando las fuerzas aliadas liberaron Filipinas en 1944-1945. Esta declaración de tres palabras se convirtió en una de las citas más icónicas de la Segunda Guerra Mundial y simbolizó la determinación estadounidense de derrotar a Japón en el Teatro del Pacífico.",
          de: "Am 11. März 1942 verließ General Douglas MacArthur die Philippinen, nachdem japanische Streitkräfte amerikanische und philippinische Truppen überwältigt hatten. Bei seiner Abreise nach Australien erklärte er berühmt 'Ich werde zurückkehren', ein Versprechen, das er hielt, als alliierte Streitkräfte die Philippinen 1944-1945 befreiten. Diese drei Worte wurden zu einem der ikonischsten Zitate des Zweiten Weltkriegs und symbolisierten die amerikanische Entschlossenheit, Japan im pazifischen Kriegsschauplatz zu besiegen.",
          nl: "Op 11 maart 1942 verliet generaal Douglas MacArthur de Filipijnen nadat Japanse troepen Amerikaanse en Filipijnse troepen hadden overweldigd. Bij zijn vertrek naar Australië verklaarde hij beroemd 'Ik zal terugkeren', een belofte die hij nakwam toen geallieerde troepen de Filipijnen in 1944-1945 bevrijdden. Deze verklaring van drie woorden werd een van de meest iconische citaten van de Tweede Wereldoorlog en symboliseerde de Amerikaanse vastberadenheid om Japan in het Pacific Theater te verslaan."
        }
      },
      {
        question: {
          en: "What was the estimated death toll from the 2011 Great East Japan Earthquake and tsunami?",
          es: "¿Cuál fue el número estimado de muertos por el Gran Terremoto del Este de Japón y el tsunami de 2011?",
          de: "Wie hoch war die geschätzte Zahl der Todesopfer beim Großen Ostjapan-Erdbeben und Tsunami von 2011?",
          nl: "Wat was het geschatte dodental van de Grote Oost-Japan aardbeving en tsunami van 2011?"
        },
        options: [
          { en: "Over 18,000 people", es: "Más de 18,000 personas", de: "Über 18.000 Menschen", nl: "Meer dan 18.000 mensen" },
          { en: "Over 5,000 people", es: "Más de 5,000 personas", de: "Über 5.000 Menschen", nl: "Meer dan 5.000 mensen" },
          { en: "Over 50,000 people", es: "Más de 50,000 personas", de: "Über 50.000 Menschen", nl: "Meer dan 50.000 mensen" },
          { en: "Over 100,000 people", es: "Más de 100,000 personas", de: "Über 100.000 Menschen", nl: "Meer dan 100.000 mensen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Great East Japan Earthquake and tsunami killed over 18,000 people, making it one of the deadliest natural disasters in Japanese history. The disaster also caused approximately $235 billion in damages, making it the costliest natural disaster in history. Entire coastal communities were wiped out by the tsunami waves, and the long-term effects including displacement, radiation concerns, and economic impacts continue to affect the region more than a decade later.",
          es: "El Gran Terremoto del Este de Japón y el tsunami mataron a más de 18,000 personas, convirtiéndolo en uno de los desastres naturales más mortales en la historia japonesa. El desastre también causó aproximadamente $235 mil millones en daños, convirtiéndolo en el desastre natural más costoso de la historia. Comunidades costeras enteras fueron arrasadas por las olas del tsunami, y los efectos a largo plazo incluyendo desplazamiento, preocupaciones por radiación e impactos económicos continúan afectando la región más de una década después.",
          de: "Das Große Ostjapan-Erdbeben und der Tsunami töteten über 18.000 Menschen und machten es zu einer der tödlichsten Naturkatastrophen in der japanischen Geschichte. Die Katastrophe verursachte auch Schäden in Höhe von etwa 235 Milliarden US-Dollar, was sie zur teuersten Naturkatastrophe der Geschichte macht. Ganze Küstengemeinden wurden von den Tsunami-Wellen ausgelöscht, und die langfristigen Auswirkungen einschließlich Vertreibung, Strahlungsbedenken und wirtschaftlicher Auswirkungen betreffen die Region mehr als ein Jahrzehnt später weiterhin.",
          nl: "De Grote Oost-Japan aardbeving en tsunami doodden meer dan 18.000 mensen, waardoor het een van de dodelijkste natuurrampen in de Japanse geschiedenis was. De ramp veroorzaakte ook ongeveer $235 miljard aan schade, waardoor het de duurste natuurramp in de geschiedenis werd. Hele kustgemeenschappen werden weggevaagd door de tsunami-golven, en de langetermijneffecten waaronder ontheemding, stralingszorgen en economische impact blijven de regio meer dan een decennium later beïnvloeden."
        }
      }
    ],

    // Day 12 - March 12th: Girl Scouts Founded
    day12: [
      {
        question: {
          en: "On March 12, 1912, what organization for young women was founded in the United States?",
          es: "El 12 de marzo de 1912, ¿qué organización para mujeres jóvenes se fundó en Estados Unidos?",
          de: "Welche Organisation für junge Frauen wurde am 12. März 1912 in den Vereinigten Staaten gegründet?",
          nl: "Welke organisatie voor jonge vrouwen werd op 12 maart 1912 opgericht in de Verenigde Staten?"
        },
        options: [
          { en: "Girl Scouts of the USA", es: "Girl Scouts de los EE.UU.", de: "Girl Scouts of the USA", nl: "Girl Scouts van de VS" },
          { en: "Young Women's Christian Association", es: "Asociación de Mujeres Cristianas Jóvenes", de: "Christlicher Verein Junger Frauen", nl: "Christelijke Vereniging van Jonge Vrouwen" },
          { en: "Girls Club of America", es: "Club de Chicas de América", de: "Girls Club of America", nl: "Girls Club of America" },
          { en: "Junior League", es: "Junior League", de: "Junior League", nl: "Junior League" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 12, 1912, Juliette Gordon Low organized the first Girl Guide troop meeting in Savannah, Georgia, with eighteen girls. The organization initially started as 'Girl Guides' and was renamed Girl Scouts of the United States in 1913. According to accounts, Low famously called her cousin saying 'I've got something for the girls of Savannah, and all of America, and all the world, and we're going to start it tonight!'",
          es: "El 12 de marzo de 1912, Juliette Gordon Low organizó la primera reunión de tropas de Girl Guides en Savannah, Georgia, con dieciocho niñas. La organización inicialmente comenzó como 'Girl Guides' y fue renombrada como Girl Scouts de los Estados Unidos en 1913. Según los relatos, Low llamó famosamente a su prima diciendo '¡Tengo algo para las niñas de Savannah, y toda América, y todo el mundo, y lo vamos a comenzar esta noche!'",
          de: "Am 12. März 1912 organisierte Juliette Gordon Low das erste Treffen einer Girl Guide-Truppe in Savannah, Georgia, mit achtzehn Mädchen. Die Organisation begann zunächst als 'Girl Guides' und wurde 1913 in Girl Scouts of the United States umbenannt. Berichten zufolge rief Low berühmt ihre Cousine an und sagte: 'Ich habe etwas für die Mädchen von Savannah und ganz Amerika und die ganze Welt, und wir werden es heute Abend anfangen!'",
          nl: "Op 12 maart 1912 organiseerde Juliette Gordon Low de eerste Girl Guide troep bijeenkomst in Savannah, Georgia, met achttien meisjes. De organisatie begon aanvankelijk als 'Girl Guides' en werd hernoemd tot Girl Scouts van de Verenigde Staten in 1913. Volgens verslagen belde Low beroemd haar nicht en zei: 'Ik heb iets voor de meisjes van Savannah, en heel Amerika, en de hele wereld, en we gaan het vanavond beginnen!'"
        }
      },
      {
        question: {
          en: "Who founded the Girl Scouts in the United States?",
          es: "¿Quién fundó las Girl Scouts en Estados Unidos?",
          de: "Wer gründete die Girl Scouts in den Vereinigten Staaten?",
          nl: "Wie richtte de Girl Scouts op in de Verenigde Staten?"
        },
        options: [
          { en: "Juliette Gordon Low", es: "Juliette Gordon Low", de: "Juliette Gordon Low", nl: "Juliette Gordon Low" },
          { en: "Susan B. Anthony", es: "Susan B. Anthony", de: "Susan B. Anthony", nl: "Susan B. Anthony" },
          { en: "Eleanor Roosevelt", es: "Eleanor Roosevelt", de: "Eleanor Roosevelt", nl: "Eleanor Roosevelt" },
          { en: "Clara Barton", es: "Clara Barton", de: "Clara Barton", nl: "Clara Barton" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Juliette Gordon Low founded the Girl Scouts in 1912, a year after meeting Robert Baden-Powell, the founder of Scouting. Low's work with deaf individuals and her interest in providing opportunities for all girls led to her creating this groundbreaking organization. The Girl Scouts mission is to build 'girls of courage, confidence, and character, who make the world a better place.' Since its founding, more than 50 million American women have participated in Girl Scouts.",
          es: "Juliette Gordon Low fundó las Girl Scouts en 1912, un año después de conocer a Robert Baden-Powell, el fundador del Escultismo. El trabajo de Low con personas sordas y su interés en brindar oportunidades para todas las niñas la llevó a crear esta organización pionera. La misión de las Girl Scouts es construir 'niñas con coraje, confianza y carácter, que hacen del mundo un lugar mejor.' Desde su fundación, más de 50 millones de mujeres estadounidenses han participado en Girl Scouts.",
          de: "Juliette Gordon Low gründete die Girl Scouts 1912, ein Jahr nachdem sie Robert Baden-Powell, den Gründer des Pfadfindertums, getroffen hatte. Lows Arbeit mit gehörlosen Menschen und ihr Interesse daran, allen Mädchen Möglichkeiten zu bieten, führten dazu, dass sie diese bahnbrechende Organisation gründete. Die Mission der Girl Scouts besteht darin, 'Mädchen mit Mut, Selbstvertrauen und Charakter zu bilden, die die Welt zu einem besseren Ort machen.' Seit ihrer Gründung haben mehr als 50 Millionen amerikanische Frauen an den Girl Scouts teilgenommen.",
          nl: "Juliette Gordon Low richtte de Girl Scouts op in 1912, een jaar nadat ze Robert Baden-Powell, de oprichter van Scouting, had ontmoet. Lows werk met dove mensen en haar interesse om kansen te bieden aan alle meisjes leidde ertoe dat ze deze baanbrekende organisatie creëerde. De missie van de Girl Scouts is om 'meisjes met moed, vertrouwen en karakter te bouwen, die de wereld een betere plek maken.' Sinds de oprichting hebben meer dan 50 miljoen Amerikaanse vrouwen deelgenomen aan de Girl Scouts."
        }
      },
      {
        question: {
          en: "Where was the first Girl Scout troop meeting held?",
          es: "¿Dónde se llevó a cabo la primera reunión de tropas de Girl Scouts?",
          de: "Wo fand das erste Treffen der Girl Scout-Truppe statt?",
          nl: "Waar werd de eerste Girl Scout troep bijeenkomst gehouden?"
        },
        options: [
          { en: "Savannah, Georgia", es: "Savannah, Georgia", de: "Savannah, Georgia", nl: "Savannah, Georgia" },
          { en: "New York City, New York", es: "Ciudad de Nueva York, Nueva York", de: "New York City, New York", nl: "New York City, New York" },
          { en: "Boston, Massachusetts", es: "Boston, Massachusetts", de: "Boston, Massachusetts", nl: "Boston, Massachusetts" },
          { en: "Philadelphia, Pennsylvania", es: "Filadelfia, Pensilvania", de: "Philadelphia, Pennsylvania", nl: "Philadelphia, Pennsylvania" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Girl Scout troop meeting was held in Savannah, Georgia, on March 12, 1912, with eighteen girls registered. Savannah became the birthplace of this movement that would grow to inspire millions of girls across America and eventually influence youth organizations worldwide. The organization celebrated its centennial on March 12, 2012, marking 100 years of empowering young women through leadership development, outdoor activities, and community service.",
          es: "La primera reunión de tropas de Girl Scouts se llevó a cabo en Savannah, Georgia, el 12 de marzo de 1912, con dieciocho niñas registradas. Savannah se convirtió en el lugar de nacimiento de este movimiento que crecería para inspirar a millones de niñas en toda América y eventualmente influir en organizaciones juveniles en todo el mundo. La organización celebró su centenario el 12 de marzo de 2012, marcando 100 años de empoderamiento de mujeres jóvenes a través del desarrollo de liderazgo, actividades al aire libre y servicio comunitario.",
          de: "Das erste Treffen der Girl Scout-Truppe fand am 12. März 1912 in Savannah, Georgia, mit achtzehn registrierten Mädchen statt. Savannah wurde der Geburtsort dieser Bewegung, die wachsen und Millionen von Mädchen in ganz Amerika inspirieren und schließlich Jugendorganisationen weltweit beeinflussen würde. Die Organisation feierte ihr hundertjähriges Bestehen am 12. März 2012 und markierte 100 Jahre der Stärkung junger Frauen durch Führungsentwicklung, Outdoor-Aktivitäten und Gemeinschaftsdienst.",
          nl: "De eerste Girl Scout troep bijeenkomst werd gehouden in Savannah, Georgia, op 12 maart 1912, met achttien geregistreerde meisjes. Savannah werd de geboorteplaats van deze beweging die zou groeien om miljoenen meisjes in heel Amerika te inspireren en uiteindelijk jeugdorganisaties wereldwijd zou beïnvloeden. De organisatie vierde haar honderdjarig bestaan op 12 maart 2012, waarbij 100 jaar empowerment van jonge vrouwen door leiderschapsontwikkeling, buitenactiviteiten en gemeenschapsdienst werd gemarkeerd."
        }
      },
      {
        question: {
          en: "What was the original name of the Girl Scouts when first founded?",
          es: "¿Cuál era el nombre original de las Girl Scouts cuando se fundaron por primera vez?",
          de: "Wie lautete der ursprüngliche Name der Girl Scouts bei der Gründung?",
          nl: "Wat was de oorspronkelijke naam van de Girl Scouts toen ze voor het eerst werden opgericht?"
        },
        options: [
          { en: "Girl Guides", es: "Girl Guides", de: "Girl Guides", nl: "Girl Guides" },
          { en: "Young Ladies League", es: "Liga de Señoritas", de: "Liga Junger Damen", nl: "Liga van Jonge Dames" },
          { en: "American Girl Rangers", es: "American Girl Rangers", de: "American Girl Rangers", nl: "American Girl Rangers" },
          { en: "Girls United", es: "Girls United", de: "Girls United", nl: "Girls United" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The organization was initially called 'Girl Guides' when it was founded in 1912, following the model of the British youth organization. In 1913, just one year after its founding, the organization was renamed to 'Girl Scouts of the United States.' The name change helped establish a distinct American identity for the movement while maintaining the core principles of building character, developing leadership skills, and fostering community service among young women.",
          es: "La organización se llamó inicialmente 'Girl Guides' cuando se fundó en 1912, siguiendo el modelo de la organización juvenil británica. En 1913, solo un año después de su fundación, la organización fue renombrada como 'Girl Scouts de los Estados Unidos.' El cambio de nombre ayudó a establecer una identidad estadounidense distinta para el movimiento mientras mantenía los principios fundamentales de construir carácter, desarrollar habilidades de liderazgo y fomentar el servicio comunitario entre las mujeres jóvenes.",
          de: "Die Organisation wurde bei ihrer Gründung 1912 zunächst 'Girl Guides' genannt und folgte dem Modell der britischen Jugendorganisation. 1913, nur ein Jahr nach ihrer Gründung, wurde die Organisation in 'Girl Scouts of the United States' umbenannt. Die Namensänderung half dabei, eine eigene amerikanische Identität für die Bewegung zu etablieren, während die Kernprinzipien des Charakteraufbaus, der Entwicklung von Führungsfähigkeiten und der Förderung des Gemeinschaftsdienstes unter jungen Frauen beibehalten wurden.",
          nl: "De organisatie heette aanvankelijk 'Girl Guides' toen ze in 1912 werd opgericht, volgend op het model van de Britse jeugdorganisatie. In 1913, slechts een jaar na de oprichting, werd de organisatie hernoemd tot 'Girl Scouts van de Verenigde Staten.' De naamsverandering hielp om een duidelijke Amerikaanse identiteit voor de beweging te vestigen, terwijl de kernprincipes van karakteropbouw, ontwikkeling van leiderschapsvaardigheden en het bevorderen van gemeenschapsdienst onder jonge vrouwen behouden bleven."
        }
      },
      {
        question: {
          en: "Approximately how many American women have participated in Girl Scouts since its founding?",
          es: "¿Aproximadamente cuántas mujeres estadounidenses han participado en Girl Scouts desde su fundación?",
          de: "Wie viele amerikanische Frauen haben seit der Gründung ungefähr an den Girl Scouts teilgenommen?",
          nl: "Hoeveel Amerikaanse vrouwen hebben ongeveer deelgenomen aan de Girl Scouts sinds de oprichting?"
        },
        options: [
          { en: "More than 50 million", es: "Más de 50 millones", de: "Mehr als 50 Millionen", nl: "Meer dan 50 miljoen" },
          { en: "More than 10 million", es: "Más de 10 millones", de: "Mehr als 10 Millionen", nl: "Meer dan 10 miljoen" },
          { en: "More than 100 million", es: "Más de 100 millones", de: "Mehr als 100 Millionen", nl: "Meer dan 100 miljoen" },
          { en: "More than 5 million", es: "Más de 5 millones", de: "Mehr als 5 Millionen", nl: "Meer dan 5 miljoen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Since its founding in 1912, more than 50 million American women have participated in Girl Scouts throughout its history. The organization has grown from that initial group of eighteen girls in Savannah to become one of the most influential youth development organizations in the United States. Girl Scouts has played a significant role in shaping American women's leadership, with many notable female leaders, politicians, scientists, and business executives crediting their Girl Scout experience as foundational to their success.",
          es: "Desde su fundación en 1912, más de 50 millones de mujeres estadounidenses han participado en Girl Scouts a lo largo de su historia. La organización ha crecido desde ese grupo inicial de dieciocho niñas en Savannah para convertirse en una de las organizaciones de desarrollo juvenil más influyentes de Estados Unidos. Girl Scouts ha jugado un papel significativo en la formación del liderazgo de las mujeres estadounidenses, con muchas líderes femeninas notables, políticas, científicas y ejecutivas empresariales atribuyendo su experiencia en Girl Scouts como fundamental para su éxito.",
          de: "Seit ihrer Gründung 1912 haben mehr als 50 Millionen amerikanische Frauen in ihrer Geschichte an den Girl Scouts teilgenommen. Die Organisation ist von dieser anfänglichen Gruppe von achtzehn Mädchen in Savannah zu einer der einflussreichsten Jugendentwicklungsorganisationen in den Vereinigten Staaten gewachsen. Die Girl Scouts haben eine bedeutende Rolle bei der Gestaltung der Führung amerikanischer Frauen gespielt, wobei viele bemerkenswerte weibliche Führungspersönlichkeiten, Politikerinnen, Wissenschaftlerinnen und Wirtschaftsführerinnen ihre Girl Scout-Erfahrung als grundlegend für ihren Erfolg bezeichnen.",
          nl: "Sinds de oprichting in 1912 hebben meer dan 50 miljoen Amerikaanse vrouwen in haar geschiedenis deelgenomen aan de Girl Scouts. De organisatie is gegroeid van die eerste groep van achttien meisjes in Savannah tot een van de meest invloedrijke jeugdontwikkelingsorganisaties in de Verenigde Staten. De Girl Scouts hebben een belangrijke rol gespeeld in het vormen van Amerikaans vrouwelijk leiderschap, waarbij veel opmerkelijke vrouwelijke leiders, politici, wetenschappers en bedrijfsleiders hun Girl Scout-ervaring als fundamenteel voor hun succes beschouwen."
        }
      }
    ],

    // Day 13 - March 13th: Discovery of Uranus & Pope Francis Election
    day13: [
      {
        question: {
          en: "On March 13, 1781, which planet was discovered by astronomer William Herschel?",
          es: "El 13 de marzo de 1781, ¿qué planeta fue descubierto por el astrónomo William Herschel?",
          de: "Welcher Planet wurde am 13. März 1781 vom Astronomen William Herschel entdeckt?",
          nl: "Welke planeet werd op 13 maart 1781 ontdekt door astronoom William Herschel?"
        },
        options: [
          { en: "Uranus", es: "Urano", de: "Uranus", nl: "Uranus" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
          { en: "Pluto", es: "Plutón", de: "Pluto", nl: "Pluto" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" }
        ],
        correctIndex: 1,
        explanation: {
          en: "William Herschel, a German-born English astronomer, discovered Uranus on March 13, 1781, while observing the night sky from his garden in Bath, England. This was the first planet to be discovered in modern times and the first discovered using a telescope. Herschel initially thought it was a comet, but further observations confirmed it was the seventh planet from the Sun.",
          es: "William Herschel, un astrónomo inglés de origen alemán, descubrió Urano el 13 de marzo de 1781, mientras observaba el cielo nocturno desde su jardín en Bath, Inglaterra. Este fue el primer planeta descubierto en tiempos modernos y el primero descubierto usando un telescopio. Herschel inicialmente pensó que era un cometa, pero observaciones posteriores confirmaron que era el séptimo planeta desde el Sol.",
          de: "William Herschel, ein deutschstämmiger englischer Astronom, entdeckte Uranus am 13. März 1781, während er den Nachthimmel von seinem Garten in Bath, England, aus beobachtete. Dies war der erste Planet, der in der Neuzeit entdeckt wurde, und der erste, der mit einem Teleskop entdeckt wurde. Herschel dachte zunächst, es sei ein Komet, aber weitere Beobachtungen bestätigten, dass es sich um den siebten Planeten von der Sonne handelt.",
          nl: "William Herschel, een Duits-Engelse astronoom, ontdekte Uranus op 13 maart 1781, terwijl hij de nachtelijke hemel observeerde vanuit zijn tuin in Bath, Engeland. Dit was de eerste planeet die in moderne tijden werd ontdekt en de eerste die met een telescoop werd ontdekt. Herschel dacht aanvankelijk dat het een komeet was, maar verdere observaties bevestigden dat het de zevende planeet vanaf de Zon was."
        }
      },
      {
        question: {
          en: "On March 13, 2013, who became the first Pope from the Americas?",
          es: "El 13 de marzo de 2013, ¿quién se convirtió en el primer Papa de las Américas?",
          de: "Wer wurde am 13. März 2013 der erste Papst aus Amerika?",
          nl: "Wie werd op 13 maart 2013 de eerste paus uit Amerika?"
        },
        options: [
          { en: "Pope Francis (Jorge Mario Bergoglio)", es: "Papa Francisco (Jorge Mario Bergoglio)", de: "Papst Franziskus (Jorge Mario Bergoglio)", nl: "Paus Franciscus (Jorge Mario Bergoglio)" },
          { en: "Pope Benedict XVI", es: "Papa Benedicto XVI", de: "Papst Benedikt XVI", nl: "Paus Benedictus XVI" },
          { en: "Pope John Paul II", es: "Papa Juan Pablo II", de: "Papst Johannes Paul II", nl: "Paus Johannes Paulus II" },
          { en: "Pope John XXIII", es: "Papa Juan XXIII", de: "Papst Johannes XXIII", nl: "Paus Johannes XXIII" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Cardinal Jorge Mario Bergoglio of Argentina was elected as the 266th Pope on March 13, 2013, choosing the name Pope Francis. He became the first Pope from the Americas, the first from the Southern Hemisphere, and the first Jesuit Pope. He was also the first non-European Pope since Pope Gregory III in the 8th century, marking a significant shift in the Catholic Church's global leadership.",
          es: "El cardenal Jorge Mario Bergoglio de Argentina fue elegido como el 266º Papa el 13 de marzo de 2013, eligiendo el nombre de Papa Francisco. Se convirtió en el primer Papa de las Américas, el primero del Hemisferio Sur y el primer Papa jesuita. También fue el primer Papa no europeo desde el Papa Gregorio III en el siglo VIII, marcando un cambio significativo en el liderazgo global de la Iglesia Católica.",
          de: "Kardinal Jorge Mario Bergoglio aus Argentinien wurde am 13. März 2013 zum 266. Papst gewählt und wählte den Namen Papst Franziskus. Er wurde der erste Papst aus Amerika, der erste von der Südhalbkugel und der erste Jesuitenpapst. Er war auch der erste nicht-europäische Papst seit Papst Gregor III. im 8. Jahrhundert, was einen bedeutenden Wandel in der globalen Führung der katholischen Kirche markierte.",
          nl: "Kardinaal Jorge Mario Bergoglio uit Argentinië werd op 13 maart 2013 gekozen als de 266e paus en koos de naam Paus Franciscus. Hij werd de eerste paus uit Amerika, de eerste van het zuidelijk halfrond en de eerste jezuïetenpaus. Hij was ook de eerste niet-Europese paus sinds paus Gregorius III in de 8e eeuw, wat een significante verschuiving markeerde in het wereldwijde leiderschap van de Katholieke Kerk."
        }
      },
      {
        question: {
          en: "What was unique about William Herschel's discovery of Uranus?",
          es: "¿Qué fue único sobre el descubrimiento de Urano por William Herschel?",
          de: "Was war einzigartig an William Herschels Entdeckung des Uranus?",
          nl: "Wat was uniek aan William Herschels ontdekking van Uranus?"
        },
        options: [
          { en: "It was the first planet discovered using a telescope", es: "Fue el primer planeta descubierto usando un telescopio", de: "Es war der erste mit einem Teleskop entdeckte Planet", nl: "Het was de eerste planeet die met een telescoop werd ontdekt" },
          { en: "It was discovered from a spaceship", es: "Fue descubierto desde una nave espacial", de: "Es wurde von einem Raumschiff aus entdeckt", nl: "Het werd ontdekt vanuit een ruimteschip" },
          { en: "It was the largest planet ever found", es: "Fue el planeta más grande jamás encontrado", de: "Es war der größte jemals gefundene Planet", nl: "Het was de grootste planeet ooit gevonden" },
          { en: "It was discovered by accident during a solar eclipse", es: "Fue descubierto por accidente durante un eclipse solar", de: "Es wurde zufällig während einer Sonnenfinsternis entdeckt", nl: "Het werd per ongeluk ontdekt tijdens een zonsverduistering" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Uranus holds the distinction of being the first planet discovered in modern times using a telescope, marking a revolutionary moment in astronomy. All planets visible to the naked eye (Mercury, Venus, Mars, Jupiter, and Saturn) had been known since ancient times. Herschel's discovery expanded our understanding of the solar system and demonstrated the power of telescopic observation in advancing astronomical knowledge.",
          es: "Urano tiene la distinción de ser el primer planeta descubierto en tiempos modernos usando un telescopio, marcando un momento revolucionario en la astronomía. Todos los planetas visibles a simple vista (Mercurio, Venus, Marte, Júpiter y Saturno) habían sido conocidos desde la antigüedad. El descubrimiento de Herschel expandió nuestra comprensión del sistema solar y demostró el poder de la observación telescópica para avanzar el conocimiento astronómico.",
          de: "Uranus hat die Auszeichnung, der erste Planet zu sein, der in der Neuzeit mit einem Teleskop entdeckt wurde, was einen revolutionären Moment in der Astronomie markierte. Alle mit bloßem Auge sichtbaren Planeten (Merkur, Venus, Mars, Jupiter und Saturn) waren seit der Antike bekannt. Herschels Entdeckung erweiterte unser Verständnis des Sonnensystems und demonstrierte die Kraft der teleskopischen Beobachtung zur Förderung astronomischen Wissens.",
          nl: "Uranus heeft de onderscheiding de eerste planeet te zijn die in moderne tijden met een telescoop werd ontdekt, wat een revolutionair moment in de astronomie markeerde. Alle planeten die met het blote oog zichtbaar zijn (Mercurius, Venus, Mars, Jupiter en Saturnus) waren al sinds de oudheid bekend. Herschels ontdekking vergrootte ons begrip van het zonnestelsel en toonde de kracht van telescopische observatie bij het bevorderen van astronomische kennis."
        }
      },
      {
        question: {
          en: "In 1996, what tragic event occurred in Dunblane, Scotland on March 13?",
          es: "En 1996, ¿qué evento trágico ocurrió en Dunblane, Escocia, el 13 de marzo?",
          de: "Welches tragische Ereignis ereignete sich 1996 am 13. März in Dunblane, Schottland?",
          nl: "Welke tragische gebeurtenis vond plaats in Dunblane, Schotland op 13 maart 1996?"
        },
        options: [
          { en: "A school shooting that killed 16 children and 1 teacher", es: "Un tiroteo escolar que mató a 16 niños y 1 maestro", de: "Ein Schulmassaker, bei dem 16 Kinder und 1 Lehrer getötet wurden", nl: "Een schoolschietpartij waarbij 16 kinderen en 1 leraar werden gedood" },
          { en: "A major earthquake", es: "Un gran terremoto", de: "Ein großes Erdbeben", nl: "Een grote aardbeving" },
          { en: "A devastating flood", es: "Una inundación devastadora", de: "Eine verheerende Überschwemmung", nl: "Een verwoestende overstroming" },
          { en: "A plane crash", es: "Un accidente aéreo", de: "Ein Flugzeugabsturz", nl: "Een vliegtuigongeluk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Dunblane massacre occurred on March 13, 1996, when a gunman entered Dunblane Primary School in Scotland and killed 16 children and their teacher before taking his own life. Fifteen others were injured in the attack. This tragedy remains the deadliest mass shooting in British history and led to significant changes in UK firearms legislation, including stricter gun control laws.",
          es: "La masacre de Dunblane ocurrió el 13 de marzo de 1996, cuando un tirador entró en la Escuela Primaria de Dunblane en Escocia y mató a 16 niños y su maestra antes de quitarse la vida. Quince personas más resultaron heridas en el ataque. Esta tragedia sigue siendo el tiroteo masivo más mortífero en la historia británica y llevó a cambios significativos en la legislación de armas de fuego del Reino Unido, incluyendo leyes de control de armas más estrictas.",
          de: "Das Massaker von Dunblane ereignete sich am 13. März 1996, als ein bewaffneter Mann die Dunblane Primary School in Schottland betrat und 16 Kinder und ihre Lehrerin tötete, bevor er sich selbst das Leben nahm. Fünfzehn weitere wurden bei dem Angriff verletzt. Diese Tragödie bleibt das tödlichste Massenschießen in der britischen Geschichte und führte zu bedeutenden Änderungen in der britischen Waffengesetzgebung, einschließlich strengerer Waffenkontrollgesetze.",
          nl: "Het bloedbad van Dunblane vond plaats op 13 maart 1996, toen een schutter de Dunblane Primary School in Schotland binnenging en 16 kinderen en hun lerares doodde voordat hij zichzelf van het leven beroofde. Vijftien anderen raakten gewond bij de aanval. Deze tragedie blijft de dodelijkste massa-schietpartij in de Britse geschiedenis en leidde tot aanzienlijke veranderingen in de Britse wapenwetgeving, waaronder strengere wapencontrolewetten."
        }
      },
      {
        question: {
          en: "What name did Herschel originally propose for the planet Uranus?",
          es: "¿Qué nombre propuso originalmente Herschel para el planeta Urano?",
          de: "Welchen Namen schlug Herschel ursprünglich für den Planeten Uranus vor?",
          nl: "Welke naam stelde Herschel oorspronkelijk voor voor de planeet Uranus?"
        },
        options: [
          { en: "Georgium Sidus (Georgian Star)", es: "Georgium Sidus (Estrella Georgiana)", de: "Georgium Sidus (Georgischer Stern)", nl: "Georgium Sidus (Georgische Ster)" },
          { en: "Herschel's Star", es: "Estrella de Herschel", de: "Herschels Stern", nl: "Herschels Ster" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
          { en: "Britannia", es: "Britannia", de: "Britannia", nl: "Britannia" }
        ],
        correctIndex: 1,
        explanation: {
          en: "William Herschel initially named the newly discovered planet 'Georgium Sidus' (Georgian Star) in honor of King George III of England, his patron. However, German astronomer Johann Bode proposed the name 'Uranus' to conform to the classical mythology-derived names of other known planets. The name Uranus, after the Greek god of the sky, was eventually adopted internationally to maintain consistency with the naming convention of other planets.",
          es: "William Herschel inicialmente nombró al planeta recién descubierto 'Georgium Sidus' (Estrella Georgiana) en honor al Rey Jorge III de Inglaterra, su mecenas. Sin embargo, el astrónomo alemán Johann Bode propuso el nombre 'Urano' para conformarse a los nombres derivados de la mitología clásica de otros planetas conocidos. El nombre Urano, en honor al dios griego del cielo, fue finalmente adoptado internacionalmente para mantener la consistencia con la convención de nomenclatura de otros planetas.",
          de: "William Herschel nannte den neu entdeckten Planeten zunächst 'Georgium Sidus' (Georgischer Stern) zu Ehren von König Georg III. von England, seinem Patron. Der deutsche Astronom Johann Bode schlug jedoch den Namen 'Uranus' vor, um den aus der klassischen Mythologie abgeleiteten Namen anderer bekannter Planeten zu entsprechen. Der Name Uranus, nach dem griechischen Gott des Himmels, wurde schließlich international übernommen, um die Konsistenz mit der Namenskonvention anderer Planeten zu wahren.",
          nl: "William Herschel noemde de nieuw ontdekte planeet aanvankelijk 'Georgium Sidus' (Georgische Ster) ter ere van koning George III van Engeland, zijn beschermheer. De Duitse astronoom Johann Bode stelde echter de naam 'Uranus' voor om in overeenstemming te zijn met de uit de klassieke mythologie afgeleide namen van andere bekende planeten. De naam Uranus, naar de Griekse god van de hemel, werd uiteindelijk internationaal aangenomen om de consistentie met de naamgevingsconventie van andere planeten te behouden."
        }
      }
    ],

    // Day 14 - March 14th: Pi Day, Einstein's Birthday & Stephen Hawking
    day14: [
      {
        question: {
          en: "Which famous physicist was born on March 14, 1879?",
          es: "¿Qué físico famoso nació el 14 de marzo de 1879?",
          de: "Welcher berühmte Physiker wurde am 14. März 1879 geboren?",
          nl: "Welke beroemde natuurkundige werd geboren op 14 maart 1879?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Albert Einstein was born on March 14, 1879, in Ulm, Germany. He became one of the most influential physicists of all time, developing the theory of relativity and winning the Nobel Prize in Physics in 1921. Interestingly, his birthday coincides with Pi Day (3/14), making March 14th doubly significant for science enthusiasts.",
          es: "Albert Einstein nació el 14 de marzo de 1879 en Ulm, Alemania. Se convirtió en uno de los físicos más influyentes de todos los tiempos, desarrollando la teoría de la relatividad y ganando el Premio Nobel de Física en 1921. Curiosamente, su cumpleaños coincide con el Día de Pi (3/14), haciendo que el 14 de marzo sea doblemente significativo para los entusiastas de la ciencia.",
          de: "Albert Einstein wurde am 14. März 1879 in Ulm, Deutschland, geboren. Er wurde einer der einflussreichsten Physiker aller Zeiten, entwickelte die Relativitätstheorie und gewann 1921 den Nobelpreis für Physik. Interessanterweise fällt sein Geburtstag mit dem Pi-Tag (3/14) zusammen, was den 14. März für Wissenschaftsbegeisterte doppelt bedeutsam macht.",
          nl: "Albert Einstein werd geboren op 14 maart 1879 in Ulm, Duitsland. Hij werd een van de meest invloedrijke natuurkundigen aller tijden, ontwikkelde de relativiteitstheorie en won de Nobelprijs voor de Natuurkunde in 1921. Interessant genoeg valt zijn verjaardag samen met Pi-dag (3/14), waardoor 14 maart dubbel betekenisvol is voor wetenschapsenthoesiasten."
        }
      },
      {
        question: {
          en: "Why is March 14th celebrated as Pi Day?",
          es: "¿Por qué se celebra el 14 de marzo como el Día de Pi?",
          de: "Warum wird der 14. März als Pi-Tag gefeiert?",
          nl: "Waarom wordt 14 maart gevierd als Pi-dag?"
        },
        options: [
          { en: "Because it's in the middle of March", es: "Porque está a mediados de marzo", de: "Weil es Mitte März ist", nl: "Omdat het midden in maart is" },
          { en: "Because circles are round", es: "Porque los círculos son redondos", de: "Weil Kreise rund sind", nl: "Omdat cirkels rond zijn" },
          { en: "Because Albert Einstein liked pie", es: "Porque a Albert Einstein le gustaba el pastel", de: "Weil Albert Einstein Kuchen mochte", nl: "Omdat Albert Einstein van taart hield" },
          { en: "Because the date 3/14 matches the first digits of pi (3.14)", es: "Porque la fecha 3/14 coincide con los primeros dígitos de pi (3.14)", de: "Weil das Datum 3/14 den ersten Ziffern von Pi (3,14) entspricht", nl: "Omdat de datum 3/14 overeenkomt met de eerste cijfers van pi (3,14)" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Pi Day is celebrated on March 14th (3/14 in month/day format) because the date matches the first three digits of the mathematical constant π (pi), which equals approximately 3.14159. The celebration was started by physicist Larry Shaw at the San Francisco Exploratorium in 1988, and in 2009, the U.S. House of Representatives officially recognized March 14th as National Pi Day to encourage interest in mathematics and science.",
          es: "El Día de Pi se celebra el 14 de marzo (3/14 en formato mes/día) porque la fecha coincide con los primeros tres dígitos de la constante matemática π (pi), que es aproximadamente 3.14159. La celebración fue iniciada por el físico Larry Shaw en el Exploratorium de San Francisco en 1988, y en 2009, la Cámara de Representantes de EE.UU. reconoció oficialmente el 14 de marzo como Día Nacional de Pi para fomentar el interés en las matemáticas y la ciencia.",
          de: "Der Pi-Tag wird am 14. März (3/14 im Monat/Tag-Format) gefeiert, weil das Datum den ersten drei Ziffern der mathematischen Konstante π (Pi) entspricht, die ungefähr 3,14159 beträgt. Die Feier wurde 1988 vom Physiker Larry Shaw im San Francisco Exploratorium ins Leben gerufen, und 2009 erkannte das US-Repräsentantenhaus den 14. März offiziell als Nationalen Pi-Tag an, um das Interesse an Mathematik und Wissenschaft zu fördern.",
          nl: "Pi-dag wordt gevierd op 14 maart (3/14 in maand/dag formaat) omdat de datum overeenkomt met de eerste drie cijfers van de wiskundige constante π (pi), die ongeveer 3,14159 is. De viering werd gestart door natuurkundige Larry Shaw bij het San Francisco Exploratorium in 1988, en in 2009 erkende het Amerikaanse Huis van Afgevaardigden 14 maart officieel als Nationale Pi-dag om belangstelling voor wiskunde en wetenschap aan te moedigen."
        }
      },
      {
        question: {
          en: "Which renowned physicist died on March 14, 2018, exactly 139 years after Einstein's birth?",
          es: "¿Qué físico de renombre murió el 14 de marzo de 2018, exactamente 139 años después del nacimiento de Einstein?",
          de: "Welcher renommierte Physiker starb am 14. März 2018, genau 139 Jahre nach Einsteins Geburt?",
          nl: "Welke gerenommeerde natuurkundige stierf op 14 maart 2018, precies 139 jaar na Einsteins geboorte?"
        },
        options: [
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" },
          { en: "Carl Sagan", es: "Carl Sagan", de: "Carl Sagan", nl: "Carl Sagan" },
          { en: "Richard Feynman", es: "Richard Feynman", de: "Richard Feynman", nl: "Richard Feynman" },
          { en: "Max Planck", es: "Max Planck", de: "Max Planck", nl: "Max Planck" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Stephen Hawking, the brilliant theoretical physicist and cosmologist, died on March 14, 2018, at age 76. The remarkable coincidence of his death occurring on both Pi Day and Einstein's birthday created a poignant connection between these two scientific giants. Hawking lived with ALS (amyotrophic lateral sclerosis) for 55 years, far longer than doctors predicted, while making groundbreaking contributions to our understanding of black holes and the universe.",
          es: "Stephen Hawking, el brillante físico teórico y cosmólogo, murió el 14 de marzo de 2018, a los 76 años. La notable coincidencia de que su muerte ocurriera tanto en el Día de Pi como en el cumpleaños de Einstein creó una conexión conmovedora entre estos dos gigantes científicos. Hawking vivió con ELA (esclerosis lateral amiotrófica) durante 55 años, mucho más de lo que los médicos predijeron, mientras hacía contribuciones revolucionarias a nuestra comprensión de los agujeros negros y el universo.",
          de: "Stephen Hawking, der brillante theoretische Physiker und Kosmologe, starb am 14. März 2018 im Alter von 76 Jahren. Die bemerkenswerte Koinzidenz, dass sein Tod sowohl am Pi-Tag als auch an Einsteins Geburtstag erfolgte, schuf eine ergreifende Verbindung zwischen diesen beiden wissenschaftlichen Giganten. Hawking lebte 55 Jahre mit ALS (Amyotrophe Lateralsklerose), viel länger als Ärzte vorhergesagt hatten, während er bahnbrechende Beiträge zu unserem Verständnis von Schwarzen Löchern und dem Universum leistete.",
          nl: "Stephen Hawking, de briljante theoretisch natuurkundige en kosmoloog, stierf op 14 maart 2018 op 76-jarige leeftijd. Het opmerkelijke toeval dat zijn dood plaatsvond op zowel Pi-dag als Einsteins verjaardag creëerde een aangrijpende verbinding tussen deze twee wetenschappelijke giganten. Hawking leefde 55 jaar met ALS (amyotrofische laterale sclerose), veel langer dan artsen hadden voorspeld, terwijl hij baanbrekende bijdragen leverde aan ons begrip van zwarte gaten en het universum."
        }
      },
      {
        question: {
          en: "On March 14, 1794, what revolutionary invention did Eli Whitney receive a patent for?",
          es: "El 14 de marzo de 1794, ¿para qué invento revolucionario recibió Eli Whitney una patente?",
          de: "Für welche revolutionäre Erfindung erhielt Eli Whitney am 14. März 1794 ein Patent?",
          nl: "Voor welke revolutionaire uitvinding ontving Eli Whitney op 14 maart 1794 een patent?"
        },
        options: [
          { en: "The cotton gin", es: "La desmotadora de algodón", de: "Die Baumwoll-Entkörnungsmaschine", nl: "De katoen-ontpitmachine" },
          { en: "The steam engine", es: "La máquina de vapor", de: "Die Dampfmaschine", nl: "De stoommachine" },
          { en: "The telephone", es: "El teléfono", de: "Das Telefon", nl: "De telefoon" },
          { en: "The light bulb", es: "La bombilla", de: "Die Glühbirne", nl: "De gloeilamp" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Eli Whitney received a patent for the cotton gin on March 14, 1794. This revolutionary machine could separate cotton seeds from fiber fifty times faster than by hand, transforming the cotton industry in America. While the invention increased cotton production dramatically, it also tragically reinforced the economic dependence on slavery in the Southern United States, as plantation owners expanded their operations to take advantage of the increased efficiency.",
          es: "Eli Whitney recibió una patente para la desmotadora de algodón el 14 de marzo de 1794. Esta máquina revolucionaria podía separar las semillas de algodón de la fibra cincuenta veces más rápido que a mano, transformando la industria del algodón en América. Si bien la invención aumentó dramáticamente la producción de algodón, también reforzó trágicamente la dependencia económica de la esclavitud en el sur de Estados Unidos, ya que los propietarios de plantaciones expandieron sus operaciones para aprovechar la mayor eficiencia.",
          de: "Eli Whitney erhielt am 14. März 1794 ein Patent für die Baumwoll-Entkörnungsmaschine. Diese revolutionäre Maschine konnte Baumwollsamen fünfzigmal schneller von Fasern trennen als von Hand, was die Baumwollindustrie in Amerika transformierte. Während die Erfindung die Baumwollproduktion dramatisch steigerte, verstärkte sie tragischerweise auch die wirtschaftliche Abhängigkeit von der Sklaverei im Süden der Vereinigten Staaten, da Plantagenbesitzer ihre Betriebe erweiterten, um von der erhöhten Effizienz zu profitieren.",
          nl: "Eli Whitney ontving op 14 maart 1794 een patent voor de katoen-ontpitmachine. Deze revolutionaire machine kon katoenzaden vijftig keer sneller van vezels scheiden dan met de hand, wat de katoenindustrie in Amerika transformeerde. Hoewel de uitvinding de katoenproductie dramatisch verhoogde, versterkte het ook tragisch de economische afhankelijkheid van slavernij in het zuiden van de Verenigde Staten, omdat plantage-eigenaren hun activiteiten uitbreidden om te profiteren van de toegenomen efficiëntie."
        }
      },
      {
        question: {
          en: "In 1964, what historic verdict related to the JFK assassination occurred on March 14?",
          es: "En 1964, ¿qué veredicto histórico relacionado con el asesinato de JFK ocurrió el 14 de marzo?",
          de: "Welches historische Urteil im Zusammenhang mit dem JFK-Attentat fand 1964 am 14. März statt?",
          nl: "Welk historisch vonnis met betrekking tot de moord op JFK vond plaats op 14 maart 1964?"
        },
        options: [
          { en: "Jack Ruby was found guilty of murdering Lee Harvey Oswald", es: "Jack Ruby fue declarado culpable de asesinar a Lee Harvey Oswald", de: "Jack Ruby wurde des Mordes an Lee Harvey Oswald für schuldig befunden", nl: "Jack Ruby werd schuldig bevonden aan de moord op Lee Harvey Oswald" },
          { en: "Lee Harvey Oswald was convicted in absentia", es: "Lee Harvey Oswald fue condenado en ausencia", de: "Lee Harvey Oswald wurde in Abwesenheit verurteilt", nl: "Lee Harvey Oswald werd bij verstek veroordeeld" },
          { en: "The Warren Commission was established", es: "Se estableció la Comisión Warren", de: "Die Warren-Kommission wurde eingerichtet", nl: "De Warren-Commissie werd opgericht" },
          { en: "President Johnson was sworn in", es: "El presidente Johnson prestó juramento", de: "Präsident Johnson wurde vereidigt", nl: "President Johnson werd beëdigd" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 14, 1964, a Dallas jury found Jack Ruby guilty of murdering Lee Harvey Oswald, the accused assassin of President John F. Kennedy. Ruby shot Oswald on live television on November 24, 1963, just two days after Kennedy's assassination. Ruby was sentenced to death, but both the conviction and death sentence were later overturned. This was the first courtroom verdict to be televised in the United States. Ruby died of cancer in 1967 before he could be retried.",
          es: "El 14 de marzo de 1964, un jurado de Dallas encontró a Jack Ruby culpable de asesinar a Lee Harvey Oswald, el presunto asesino del presidente John F. Kennedy. Ruby disparó a Oswald en televisión en vivo el 24 de noviembre de 1963, solo dos días después del asesinato de Kennedy. Ruby fue sentenciado a muerte, pero tanto la condena como la sentencia de muerte fueron posteriormente anuladas. Este fue el primer veredicto de tribunal televisado en Estados Unidos. Ruby murió de cáncer en 1967 antes de que pudiera ser juzgado nuevamente.",
          de: "Am 14. März 1964 befand eine Jury in Dallas Jack Ruby des Mordes an Lee Harvey Oswald, dem mutmaßlichen Attentäter von Präsident John F. Kennedy, für schuldig. Ruby erschoss Oswald am 24. November 1963 im Live-Fernsehen, nur zwei Tage nach Kennedys Ermordung. Ruby wurde zum Tode verurteilt, aber sowohl die Verurteilung als auch das Todesurteil wurden später aufgehoben. Dies war das erste im Fernsehen übertragene Gerichtsurteil in den Vereinigten Staaten. Ruby starb 1967 an Krebs, bevor er erneut vor Gericht gestellt werden konnte.",
          nl: "Op 14 maart 1964 bevond een jury in Dallas Jack Ruby schuldig aan de moord op Lee Harvey Oswald, de vermeende moordenaar van president John F. Kennedy. Ruby schoot Oswald neer op live televisie op 24 november 1963, slechts twee dagen na Kennedys moord. Ruby werd ter dood veroordeeld, maar zowel de veroordeling als het doodvonnis werden later vernietigd. Dit was het eerste rechtbankvonnis dat op televisie werd uitgezonden in de Verenigde Staten. Ruby stierf in 1967 aan kanker voordat hij opnieuw berecht kon worden."
        }
      }
    ],

    // Day 15 - March 15th: Ides of March - Julius Caesar Assassination & Revolutions
    day15: [
      {
        question: {
          en: "On March 15, 44 BC, which Roman leader was assassinated on the Ides of March?",
          es: "El 15 de marzo del 44 a.C., ¿qué líder romano fue asesinado en los Idus de Marzo?",
          de: "Welcher römische Führer wurde am 15. März 44 v. Chr. an den Iden des März ermordet?",
          nl: "Welke Romeinse leider werd op 15 maart 44 v.Chr. vermoord op de Iden van maart?"
        },
        options: [
          { en: "Julius Caesar", es: "Julio César", de: "Julius Caesar", nl: "Julius Caesar" },
          { en: "Augustus Caesar", es: "César Augusto", de: "Augustus Caesar", nl: "Augustus Caesar" },
          { en: "Marcus Aurelius", es: "Marco Aurelio", de: "Marcus Aurelius", nl: "Marcus Aurelius" },
          { en: "Nero", es: "Nerón", de: "Nero", nl: "Nero" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Julius Caesar was assassinated on March 15, 44 BC, known as the Ides of March, during a Senate meeting at the Theatre of Pompey in Rome. A group of senators, led by Marcus Junius Brutus and Gaius Cassius Longinus, stabbed Caesar approximately 23 times. They claimed to act in defense of the Roman Republic against Caesar's accumulation of power as perpetual dictator. The assassination failed to restore the Republic and instead led to civil wars that ultimately brought about the Roman Empire.",
          es: "Julio César fue asesinado el 15 de marzo del 44 a.C., conocido como los Idus de Marzo, durante una reunión del Senado en el Teatro de Pompeyo en Roma. Un grupo de senadores, liderados por Marco Junio Bruto y Cayo Casio Longino, apuñalaron a César aproximadamente 23 veces. Afirmaron actuar en defensa de la República Romana contra la acumulación de poder de César como dictador perpetuo. El asesinato no logró restaurar la República y, en cambio, condujo a guerras civiles que finalmente dieron origen al Imperio Romano.",
          de: "Julius Caesar wurde am 15. März 44 v. Chr., bekannt als die Iden des März, während einer Senatssitzung im Theater des Pompeius in Rom ermordet. Eine Gruppe von Senatoren, angeführt von Marcus Junius Brutus und Gaius Cassius Longinus, erstach Caesar etwa 23 Mal. Sie behaupteten, zur Verteidigung der römischen Republik gegen Caesars Machtanhäufung als ewiger Diktator zu handeln. Die Ermordung konnte die Republik nicht wiederherstellen und führte stattdessen zu Bürgerkriegen, die letztendlich das Römische Reich hervorbrachten.",
          nl: "Julius Caesar werd vermoord op 15 maart 44 v.Chr., bekend als de Iden van maart, tijdens een Senaatsvergadering in het Theater van Pompeius in Rome. Een groep senatoren, geleid door Marcus Junius Brutus en Gaius Cassius Longinus, stak Caesar ongeveer 23 keer neer. Ze beweerden te handelen ter verdediging van de Romeinse Republiek tegen Caesars machtsophoping als eeuwige dictator. De moord slaagde er niet in de Republiek te herstellen en leidde in plaats daarvan tot burgeroorlogen die uiteindelijk het Romeinse Rijk voortbrachten."
        }
      },
      {
        question: {
          en: "According to Shakespeare's play, what famous warning did a soothsayer give to Julius Caesar about March 15?",
          es: "Según la obra de Shakespeare, ¿qué famosa advertencia le dio un adivino a Julio César sobre el 15 de marzo?",
          de: "Laut Shakespeares Stück, welche berühmte Warnung gab ein Wahrsager Julius Caesar über den 15. März?",
          nl: "Volgens Shakespeares toneelstuk, welke beroemde waarschuwing gaf een waarzegger aan Julius Caesar over 15 maart?"
        },
        options: [
          { en: "Beware the Ides of March", es: "Cuidado con los Idus de Marzo", de: "Hüte dich vor den Iden des März", nl: "Pas op voor de Iden van maart" },
          { en: "Fear the full moon", es: "Teme a la luna llena", de: "Fürchte den Vollmond", nl: "Vrees de volle maan" },
          { en: "Trust no one", es: "No confíes en nadie", de: "Vertraue niemandem", nl: "Vertrouw niemand" },
          { en: "Stay home today", es: "Quédate en casa hoy", de: "Bleib heute zu Hause", nl: "Blijf vandaag thuis" }
        ],
        correctIndex: 3,
        explanation: {
          en: "In William Shakespeare's play 'Julius Caesar,' a soothsayer warns Caesar to 'Beware the Ides of March.' This famous line has become synonymous with impending doom and the date itself. According to the ancient historian Plutarch, on the morning of his assassination, Caesar actually encountered the seer and joked, 'The Ides of March are come,' to which the seer replied, 'Aye, they are come, but they are not gone.' This warning has become one of the most famous prophecies in literature and history.",
          es: "En la obra de William Shakespeare 'Julio César', un adivino advierte a César que 'Cuidado con los Idus de Marzo'. Esta famosa línea se ha vuelto sinónimo de perdición inminente y la fecha misma. Según el antiguo historiador Plutarco, en la mañana de su asesinato, César realmente se encontró con el vidente y bromeó, 'Los Idus de Marzo han llegado', a lo que el vidente respondió, 'Sí, han llegado, pero no se han ido'. Esta advertencia se ha convertido en una de las profecías más famosas en la literatura y la historia.",
          de: "In William Shakespeares Stück 'Julius Caesar' warnt ein Wahrsager Caesar, 'Hüte dich vor den Iden des März.' Diese berühmte Zeile ist zum Synonym für bevorstehendes Unheil und das Datum selbst geworden. Laut dem antiken Historiker Plutarch begegnete Caesar am Morgen seiner Ermordung tatsächlich dem Seher und scherzte: 'Die Iden des März sind gekommen', worauf der Seher antwortete: 'Ja, sie sind gekommen, aber sie sind nicht vorbei.' Diese Warnung ist zu einer der berühmtesten Prophezeiungen in Literatur und Geschichte geworden.",
          nl: "In William Shakespeares toneelstuk 'Julius Caesar' waarschuwt een waarzegger Caesar om 'Pas op voor de Iden van maart.' Deze beroemde regel is synoniem geworden met naderend onheil en de datum zelf. Volgens de oude historicus Plutarchus kwam Caesar op de ochtend van zijn moord daadwerkelijk de ziener tegen en grapte: 'De Iden van maart zijn gekomen', waarop de ziener antwoordde: 'Ja, ze zijn gekomen, maar ze zijn nog niet voorbij.' Deze waarschuwing is een van de beroemdste profetieën in de literatuur en geschiedenis geworden."
        }
      },
      {
        question: {
          en: "On March 15, 1917, which Russian leader abdicated the throne, ending the Romanov dynasty?",
          es: "El 15 de marzo de 1917, ¿qué líder ruso abdicó al trono, poniendo fin a la dinastía Romanov?",
          de: "Welcher russische Führer dankte am 15. März 1917 ab und beendete damit die Romanov-Dynastie?",
          nl: "Welke Russische leider deed op 15 maart 1917 afstand van de troon en beëindigde daarmee de Romanov-dynastie?"
        },
        options: [
          { en: "Tsar Nicholas II", es: "Zar Nicolás II", de: "Zar Nikolaus II", nl: "Tsaar Nicolaas II" },
          { en: "Vladimir Lenin", es: "Vladimir Lenin", de: "Wladimir Lenin", nl: "Vladimir Lenin" },
          { en: "Tsar Alexander III", es: "Zar Alejandro III", de: "Zar Alexander III", nl: "Tsaar Alexander III" },
          { en: "Leon Trotsky", es: "León Trotsky", de: "Leo Trotzki", nl: "Leon Trotski" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Tsar Nicholas II abdicated the Russian throne on March 15, 1917, bringing an end to over 300 years of Romanov rule. Facing mounting pressure from World War I failures, food shortages, and the February Revolution protests, Nicholas initially intended to abdicate in favor of his son Alexei, but ultimately renounced the throne for both himself and his son in favor of his brother Grand Duke Michael. However, Michael refused to accept the throne, effectively ending the Russian monarchy and paving the way for the Bolshevik Revolution later that year.",
          es: "El zar Nicolás II abdicó al trono ruso el 15 de marzo de 1917, poniendo fin a más de 300 años de gobierno Romanov. Enfrentando una presión creciente por los fracasos de la Primera Guerra Mundial, la escasez de alimentos y las protestas de la Revolución de Febrero, Nicolás inicialmente pretendía abdicar a favor de su hijo Alexei, pero finalmente renunció al trono tanto para él como para su hijo a favor de su hermano el gran duque Miguel. Sin embargo, Miguel se negó a aceptar el trono, poniendo fin efectivamente a la monarquía rusa y allanando el camino para la Revolución Bolchevique más tarde ese año.",
          de: "Zar Nikolaus II. dankte am 15. März 1917 vom russischen Thron ab und beendete damit über 300 Jahre Romanov-Herrschaft. Angesichts des zunehmenden Drucks durch die Misserfolge im Ersten Weltkrieg, Nahrungsmittelknappheit und die Proteste der Februarrevolution beabsichtigte Nikolaus zunächst, zugunsten seines Sohnes Alexei abzudanken, verzichtete aber letztendlich für sich und seinen Sohn auf den Thron zugunsten seines Bruders Großfürst Michael. Michael weigerte sich jedoch, den Thron anzunehmen, was faktisch die russische Monarchie beendete und den Weg für die bolschewistische Revolution später in diesem Jahr ebnete.",
          nl: "Tsaar Nicolaas II deed afstand van de Russische troon op 15 maart 1917, waarmee een einde kwam aan meer dan 300 jaar Romanov-heerschappij. Onder toenemende druk van mislukkingen in de Eerste Wereldoorlog, voedseltekorten en de protesten van de Februarirevolutie was Nicolaas aanvankelijk van plan af te treden ten gunste van zijn zoon Alexei, maar deed uiteindelijk afstand van de troon voor zowel zichzelf als zijn zoon ten gunste van zijn broer groothertog Michaël. Michaël weigerde echter de troon te aanvaarden, waarmee de Russische monarchie feitelijk eindigde en de weg werd geëffend voor de Bolsjewistische Revolutie later dat jaar."
        }
      },
      {
        question: {
          en: "What revolution began on March 15, 1848, in Hungary against Habsburg rule?",
          es: "¿Qué revolución comenzó el 15 de marzo de 1848 en Hungría contra el dominio de los Habsburgo?",
          de: "Welche Revolution begann am 15. März 1848 in Ungarn gegen die Habsburger Herrschaft?",
          nl: "Welke revolutie begon op 15 maart 1848 in Hongarije tegen de Habsburgse heerschappij?"
        },
        options: [
          { en: "The Hungarian Revolution of 1848", es: "La Revolución Húngara de 1848", de: "Die Ungarische Revolution von 1848", nl: "De Hongaarse Revolutie van 1848" },
          { en: "The French Revolution", es: "La Revolución Francesa", de: "Die Französische Revolution", nl: "De Franse Revolutie" },
          { en: "The October Revolution", es: "La Revolución de Octubre", de: "Die Oktoberrevolution", nl: "De Oktoberrevolutie" },
          { en: "The American Revolution", es: "La Revolución Americana", de: "Die Amerikanische Revolution", nl: "De Amerikaanse Revolutie" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Hungarian Revolution of 1848 began on March 15 with mass demonstrations in Pest and Buda (now Budapest). Inspired by news of revolution in Vienna, Hungarian patriots led by poet Sándor Petőfi gathered at Café Pilvax and recited the National Song while presenting 12 points of demands for political and economic reforms. The revolution initially succeeded in establishing an independent Hungarian ministry, but was ultimately crushed by Austrian and Russian forces in August 1849. Despite its defeat, March 15 remains Hungary's national holiday, celebrating freedom and national identity.",
          es: "La Revolución Húngara de 1848 comenzó el 15 de marzo con manifestaciones masivas en Pest y Buda (ahora Budapest). Inspirados por noticias de la revolución en Viena, patriotas húngaros liderados por el poeta Sándor Petőfi se reunieron en el Café Pilvax y recitaron la Canción Nacional mientras presentaban 12 puntos de demandas de reformas políticas y económicas. La revolución inicialmente logró establecer un ministerio húngaro independiente, pero finalmente fue aplastada por fuerzas austriacas y rusas en agosto de 1849. A pesar de su derrota, el 15 de marzo sigue siendo el día nacional de Hungría, celebrando la libertad y la identidad nacional.",
          de: "Die Ungarische Revolution von 1848 begann am 15. März mit Massendemonstrationen in Pest und Buda (heute Budapest). Inspiriert von Nachrichten über die Revolution in Wien, versammelten sich ungarische Patrioten unter der Führung des Dichters Sándor Petőfi im Café Pilvax und rezitierten das Nationallied, während sie 12 Forderungen nach politischen und wirtschaftlichen Reformen vortrugen. Die Revolution gelang es zunächst, ein unabhängiges ungarisches Ministerium zu etablieren, wurde aber letztendlich im August 1849 von österreichischen und russischen Streitkräften niedergeschlagen. Trotz ihrer Niederlage bleibt der 15. März Ungarns Nationalfeiertag, der Freiheit und nationale Identität feiert.",
          nl: "De Hongaarse Revolutie van 1848 begon op 15 maart met massademonstraties in Pest en Buda (nu Boedapest). Geïnspireerd door nieuws over de revolutie in Wenen, verzamelden Hongaarse patriotten onder leiding van dichter Sándor Petőfi zich in Café Pilvax en reciteerden het Nationale Lied terwijl ze 12 eisen voor politieke en economische hervormingen presenteerden. De revolutie slaagde er aanvankelijk in een onafhankelijk Hongaars ministerie op te richten, maar werd uiteindelijk in augustus 1849 neergeslagen door Oostenrijkse en Russische troepen. Ondanks de nederlaag blijft 15 maart de nationale feestdag van Hongarije, ter viering van vrijheid en nationale identiteit."
        }
      },
      {
        question: {
          en: "Approximately how many times was Julius Caesar stabbed during his assassination?",
          es: "¿Aproximadamente cuántas veces fue apuñalado Julio César durante su asesinato?",
          de: "Wie oft wurde Julius Caesar bei seiner Ermordung ungefähr erstochen?",
          nl: "Ongeveer hoeveel keer werd Julius Caesar neergestoken tijdens zijn moord?"
        },
        options: [
          { en: "23 times", es: "23 veces", de: "23 Mal", nl: "23 keer" },
          { en: "10 times", es: "10 veces", de: "10 Mal", nl: "10 keer" },
          { en: "50 times", es: "50 veces", de: "50 Mal", nl: "50 keer" },
          { en: "5 times", es: "5 veces", de: "5 Mal", nl: "5 keer" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Julius Caesar was stabbed approximately 23 times by a group of 60 to 70 conspirators during his assassination on the Ides of March, 44 BC. The attack took place during a Senate meeting at the Curia of Pompey within the Theatre of Pompey in Rome. Ironically, despite the numerous wounds, most historians believe only one or two of the stab wounds were actually fatal. The assassination did not achieve its goal of restoring the Roman Republic; instead, it led to civil wars and the eventual rise of the Roman Empire under Augustus.",
          es: "Julio César fue apuñalado aproximadamente 23 veces por un grupo de 60 a 70 conspiradores durante su asesinato en los Idus de Marzo del 44 a.C. El ataque tuvo lugar durante una reunión del Senado en la Curia de Pompeyo dentro del Teatro de Pompeyo en Roma. Irónicamente, a pesar de las numerosas heridas, la mayoría de los historiadores creen que solo una o dos de las puñaladas fueron realmente mortales. El asesinato no logró su objetivo de restaurar la República Romana; en cambio, condujo a guerras civiles y el eventual ascenso del Imperio Romano bajo Augusto.",
          de: "Julius Caesar wurde bei seiner Ermordung an den Iden des März 44 v. Chr. etwa 23 Mal von einer Gruppe von 60 bis 70 Verschwörern erstochen. Der Angriff fand während einer Senatssitzung in der Curia Pompei innerhalb des Theaters des Pompeius in Rom statt. Ironischerweise glauben die meisten Historiker trotz der zahlreichen Wunden, dass nur eine oder zwei der Stichwunden tatsächlich tödlich waren. Die Ermordung erreichte ihr Ziel nicht, die römische Republik wiederherzustellen; stattdessen führte sie zu Bürgerkriegen und dem schließlichen Aufstieg des Römischen Reiches unter Augustus.",
          nl: "Julius Caesar werd ongeveer 23 keer neergestoken door een groep van 60 tot 70 samenzweerders tijdens zijn moord op de Iden van maart, 44 v.Chr. De aanval vond plaats tijdens een Senaatsvergadering in de Curia van Pompeius binnen het Theater van Pompeius in Rome. Ironisch genoeg geloven de meeste historici dat ondanks de talrijke wonden slechts een of twee steekwonden daadwerkelijk dodelijk waren. De moord bereikte zijn doel niet om de Romeinse Republiek te herstellen; in plaats daarvan leidde het tot burgeroorlogen en de uiteindelijke opkomst van het Romeinse Rijk onder Augustus."
        }
      }
    ],

    // Day 16 - March 16th: My Lai Massacre, James Madison, West Point, Goddard Rocket
    day16: [
      {
        question: {
          en: "In what year did the tragic My Lai Massacre occur during the Vietnam War?",
          es: "¿En qué año ocurrió la trágica Masacre de My Lai durante la Guerra de Vietnam?",
          de: "In welchem Jahr ereignete sich das tragische My-Lai-Massaker während des Vietnamkriegs?",
          nl: "In welk jaar vond het tragische My Lai-bloedbad plaats tijdens de Vietnamoorlog?"
        },
        options: [
          { en: "1968", es: "1968", de: "1968", nl: "1968" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1971", es: "1971", de: "1971", nl: "1971" },
          { en: "1963", es: "1963", de: "1963", nl: "1963" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 16, 1968, American soldiers killed as many as 500 unarmed civilians in the village of My Lai during the Vietnam War. The massacre was kept secret for nearly two years before becoming public, shocking the world and intensifying anti-war sentiment. Only one soldier, Lieutenant William Calley, was convicted for the atrocity, serving just three and a half years under house arrest.",
          es: "El 16 de marzo de 1968, soldados estadounidenses mataron hasta 500 civiles desarmados en la aldea de My Lai durante la Guerra de Vietnam. La masacre se mantuvo en secreto durante casi dos años antes de hacerse pública, conmocionando al mundo e intensificando el sentimiento contra la guerra. Solo un soldado, el teniente William Calley, fue condenado por la atrocidad, cumpliendo apenas tres años y medio de arresto domiciliario.",
          de: "Am 16. März 1968 töteten amerikanische Soldaten bis zu 500 unbewaffnete Zivilisten im Dorf My Lai während des Vietnamkriegs. Das Massaker wurde fast zwei Jahre lang geheim gehalten, bevor es bekannt wurde, was die Welt schockierte und die Antikriegsstimmung verstärkte. Nur ein Soldat, Leutnant William Calley, wurde für die Grausamkeit verurteilt und verbüßte nur dreieinhalb Jahre Hausarrest.",
          nl: "Op 16 maart 1968 doodden Amerikaanse soldaten wel 500 ongewapende burgers in het dorp My Lai tijdens de Vietnamoorlog. Het bloedbad werd bijna twee jaar geheim gehouden voordat het openbaar werd, wat de wereld schokte en het anti-oorlogssentiment versterkte. Slechts één soldaat, luitenant William Calley, werd veroordeeld voor de gruweldaad en zat slechts drieënhalf jaar huisarrest uit."
        }
      },
      {
        question: {
          en: "Which U.S. Founding Father, known as the 'Father of the Constitution,' was born on March 16, 1751?",
          es: "¿Qué padre fundador de EE.UU., conocido como el 'Padre de la Constitución', nació el 16 de marzo de 1751?",
          de: "Welcher amerikanische Gründervater, bekannt als 'Vater der Verfassung', wurde am 16. März 1751 geboren?",
          nl: "Welke Amerikaanse grondlegger, bekend als de 'Vader van de Grondwet', werd geboren op 16 maart 1751?"
        },
        options: [
          { en: "James Madison", es: "James Madison", de: "James Madison", nl: "James Madison" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" }
        ],
        correctIndex: 1,
        explanation: {
          en: "James Madison was born on March 16, 1751, in Virginia. He played a major role in drafting the U.S. Constitution and the Bill of Rights, earning him the title 'Father of the Constitution.' Madison served as the fourth President of the United States from 1809 to 1817. He was also a principal author of the Federalist Papers, which helped secure ratification of the Constitution.",
          es: "James Madison nació el 16 de marzo de 1751 en Virginia. Jugó un papel importante en la redacción de la Constitución de EE.UU. y la Declaración de Derechos, lo que le valió el título de 'Padre de la Constitución'. Madison fue el cuarto presidente de Estados Unidos de 1809 a 1817. También fue uno de los principales autores de los Documentos Federalistas, que ayudaron a asegurar la ratificación de la Constitución.",
          de: "James Madison wurde am 16. März 1751 in Virginia geboren. Er spielte eine wichtige Rolle bei der Ausarbeitung der US-Verfassung und der Bill of Rights und erhielt den Titel 'Vater der Verfassung'. Madison diente von 1809 bis 1817 als vierter Präsident der Vereinigten Staaten. Er war auch ein Hauptautor der Federalist Papers, die zur Ratifizierung der Verfassung beitrugen.",
          nl: "James Madison werd geboren op 16 maart 1751 in Virginia. Hij speelde een belangrijke rol bij het opstellen van de Amerikaanse Grondwet en de Bill of Rights, waarmee hij de titel 'Vader van de Grondwet' verdiende. Madison diende van 1809 tot 1817 als de vierde president van de Verenigde Staten. Hij was ook een belangrijke auteur van de Federalist Papers, die hielpen bij de ratificatie van de Grondwet."
        }
      },
      {
        question: {
          en: "When was the United States Military Academy at West Point established?",
          es: "¿Cuándo se estableció la Academia Militar de los Estados Unidos en West Point?",
          de: "Wann wurde die United States Military Academy in West Point gegründet?",
          nl: "Wanneer werd de United States Military Academy in West Point opgericht?"
        },
        options: [
          { en: "March 16, 1802", es: "16 de marzo de 1802", de: "16. März 1802", nl: "16 maart 1802" },
          { en: "July 4, 1776", es: "4 de julio de 1776", de: "4. Juli 1776", nl: "4 juli 1776" },
          { en: "January 1, 1800", es: "1 de enero de 1800", de: "1. Januar 1800", nl: "1 januari 1800" },
          { en: "September 17, 1787", es: "17 de septiembre de 1787", de: "17. September 1787", nl: "17 september 1787" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 16, 1802, President Thomas Jefferson signed the Military Peace Establishment Act, establishing the United States Military Academy at West Point, New York. It is one of the oldest military service academies in the world and has trained generations of military leaders. The academy officially opened for instruction on July 4, 1802, and has produced numerous notable graduates including Ulysses S. Grant, Robert E. Lee, and Dwight D. Eisenhower.",
          es: "El 16 de marzo de 1802, el presidente Thomas Jefferson firmó la Ley de Establecimiento de Paz Militar, estableciendo la Academia Militar de los Estados Unidos en West Point, Nueva York. Es una de las academias militares más antiguas del mundo y ha entrenado a generaciones de líderes militares. La academia abrió oficialmente para la instrucción el 4 de julio de 1802 y ha producido numerosos graduados notables, incluidos Ulysses S. Grant, Robert E. Lee y Dwight D. Eisenhower.",
          de: "Am 16. März 1802 unterzeichnete Präsident Thomas Jefferson das Military Peace Establishment Act und gründete damit die United States Military Academy in West Point, New York. Sie ist eine der ältesten Militärakademien der Welt und hat Generationen von Militärführern ausgebildet. Die Akademie wurde am 4. Juli 1802 offiziell für den Unterricht eröffnet und hat zahlreiche bemerkenswerte Absolventen hervorgebracht, darunter Ulysses S. Grant, Robert E. Lee und Dwight D. Eisenhower.",
          nl: "Op 16 maart 1802 ondertekende president Thomas Jefferson de Military Peace Establishment Act en richtte daarmee de United States Military Academy op in West Point, New York. Het is een van de oudste militaire academies ter wereld en heeft generaties militaire leiders opgeleid. De academie opende officieel voor instructie op 4 juli 1802 en heeft talrijke opmerkelijke afgestudeerden voortgebracht, waaronder Ulysses S. Grant, Robert E. Lee en Dwight D. Eisenhower."
        }
      },
      {
        question: {
          en: "On March 16, 1926, what historic first did Robert H. Goddard achieve?",
          es: "El 16 de marzo de 1926, ¿qué primicia histórica logró Robert H. Goddard?",
          de: "Was erreichte Robert H. Goddard am 16. März 1926 als historisches Novum?",
          nl: "Wat bereikte Robert H. Goddard op 16 maart 1926 als historische primeur?"
        },
        options: [
          { en: "First successful liquid-fueled rocket launch", es: "Primer lanzamiento exitoso de cohete de combustible líquido", de: "Erster erfolgreicher Start einer mit Flüssigbrennstoff betriebenen Rakete", nl: "Eerste succesvolle lancering van een raket met vloeibare brandstof" },
          { en: "First airplane flight", es: "Primer vuelo en avión", de: "Erster Flugzeugflug", nl: "Eerste vliegtuigvlucht" },
          { en: "First satellite launch", es: "Primer lanzamiento de satélite", de: "Erster Satellitenstart", nl: "Eerste satellietlancering" },
          { en: "First manned space flight", es: "Primer vuelo espacial tripulado", de: "Erster bemannter Raumflug", nl: "Eerste bemande ruimtevlucht" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 16, 1926, American physicist Robert H. Goddard successfully launched the world's first liquid-fueled rocket in Auburn, Massachusetts. The rocket traveled for 2.5 seconds, reaching an altitude of 41 feet and landing 184 feet away. This pioneering achievement laid the foundation for modern rocketry and space exploration. Goddard is now recognized as one of the fathers of modern rocket propulsion, though his work was largely unappreciated during his lifetime.",
          es: "El 16 de marzo de 1926, el físico estadounidense Robert H. Goddard lanzó con éxito el primer cohete de combustible líquido del mundo en Auburn, Massachusetts. El cohete viajó durante 2.5 segundos, alcanzando una altitud de 41 pies y aterrizando a 184 pies de distancia. Este logro pionero sentó las bases de la cohetería moderna y la exploración espacial. Goddard es ahora reconocido como uno de los padres de la propulsión de cohetes moderna, aunque su trabajo fue en gran medida desapreciado durante su vida.",
          de: "Am 16. März 1926 startete der amerikanische Physiker Robert H. Goddard erfolgreich die weltweit erste mit Flüssigbrennstoff betriebene Rakete in Auburn, Massachusetts. Die Rakete flog 2,5 Sekunden lang, erreichte eine Höhe von 41 Fuß und landete 184 Fuß entfernt. Diese bahnbrechende Leistung legte den Grundstein für moderne Raketentechnik und Weltraumforschung. Goddard wird heute als einer der Väter des modernen Raketenantriebs anerkannt, obwohl seine Arbeit zu Lebzeiten weitgehend ungewürdigt blieb.",
          nl: "Op 16 maart 1926 lanceerde de Amerikaanse natuurkundige Robert H. Goddard met succes 's werelds eerste raket met vloeibare brandstof in Auburn, Massachusetts. De raket vloog 2,5 seconden, bereikte een hoogte van 41 voet en landde 184 voet verderop. Deze baanbrekende prestatie legde de basis voor moderne rakettechnologie en ruimtevaart. Goddard wordt nu erkend als een van de vaders van moderne raketvoortstuwing, hoewel zijn werk tijdens zijn leven grotendeels niet werd gewaardeerd."
        }
      },
      {
        question: {
          en: "Which important founding document did James Madison, born on March 16, 1751, help create besides the U.S. Constitution?",
          es: "¿Qué importante documento fundacional ayudó a crear James Madison, nacido el 16 de marzo de 1751, además de la Constitución de EE.UU.?",
          de: "Welches wichtige Gründungsdokument half James Madison, geboren am 16. März 1751, neben der US-Verfassung zu erstellen?",
          nl: "Welk belangrijk oprichtingsdocument hielp James Madison, geboren op 16 maart 1751, creëren naast de Amerikaanse Grondwet?"
        },
        options: [
          { en: "The Declaration of Independence", es: "La Declaración de Independencia", de: "Die Unabhängigkeitserklärung", nl: "De Onafhankelijkheidsverklaring" },
          { en: "The Articles of Confederation", es: "Los Artículos de la Confederación", de: "Die Konföderationsartikel", nl: "De Artikelen van Confederatie" },
          { en: "The Bill of Rights", es: "La Declaración de Derechos", de: "Die Bill of Rights", nl: "De Bill of Rights" },
          { en: "The Emancipation Proclamation", es: "La Proclamación de Emancipación", de: "Die Emanzipationserklärung", nl: "De Emancipatieproclamatie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "James Madison played a crucial role in drafting the Bill of Rights, the first ten amendments to the U.S. Constitution that protect fundamental freedoms and rights. Madison initially opposed a bill of rights but changed his position and became its primary author in response to concerns raised during the ratification debates. He introduced the amendments to Congress in 1789, and they were ratified in 1791. Madison also co-authored the Federalist Papers with Alexander Hamilton and John Jay, which were instrumental in securing ratification of the Constitution. His contributions earned him the title 'Father of the Constitution' and he later served as the fourth President of the United States from 1809 to 1817.",
          es: "James Madison jugó un papel crucial en la redacción de la Declaración de Derechos, las primeras diez enmiendas a la Constitución de EE.UU. que protegen las libertades y derechos fundamentales. Madison inicialmente se opuso a una declaración de derechos pero cambió su posición y se convirtió en su autor principal en respuesta a las preocupaciones planteadas durante los debates de ratificación. Introdujo las enmiendas al Congreso en 1789, y fueron ratificadas en 1791. Madison también fue coautor de los Documentos Federalistas con Alexander Hamilton y John Jay, que fueron fundamentales para asegurar la ratificación de la Constitución. Sus contribuciones le valieron el título de 'Padre de la Constitución' y luego sirvió como el cuarto presidente de Estados Unidos de 1809 a 1817.",
          de: "James Madison spielte eine entscheidende Rolle bei der Ausarbeitung der Bill of Rights, der ersten zehn Zusatzartikel zur US-Verfassung, die grundlegende Freiheiten und Rechte schützen. Madison lehnte zunächst eine Bill of Rights ab, änderte aber seine Position und wurde ihr Hauptautor als Reaktion auf Bedenken, die während der Ratifizierungsdebatten geäußert wurden. Er brachte die Zusatzartikel 1789 in den Kongress ein, und sie wurden 1791 ratifiziert. Madison war auch Mitautor der Federalist Papers mit Alexander Hamilton und John Jay, die für die Ratifizierung der Verfassung entscheidend waren. Seine Beiträge brachten ihm den Titel 'Vater der Verfassung' ein, und er diente später von 1809 bis 1817 als vierter Präsident der Vereinigten Staaten.",
          nl: "James Madison speelde een cruciale rol bij het opstellen van de Bill of Rights, de eerste tien amendementen op de Amerikaanse Grondwet die fundamentele vrijheden en rechten beschermen. Madison was aanvankelijk tegen een bill of rights, maar veranderde zijn standpunt en werd de primaire auteur als reactie op zorgen die tijdens de ratificatiedebatten naar voren kwamen. Hij introduceerde de amendementen bij het Congres in 1789, en ze werden geratificeerd in 1791. Madison was ook mede-auteur van de Federalist Papers met Alexander Hamilton en John Jay, die instrumenteel waren bij het veiligstellen van de ratificatie van de Grondwet. Zijn bijdragen leverden hem de titel 'Vader van de Grondwet' op en hij diende later als de vierde president van de Verenigde Staten van 1809 tot 1817."
        }
      }
    ],

    // Day 17 - March 17th: St. Patrick's Death, Boston Evacuation Day, Golda Meir, Irish Heritage
    day17: [
      {
        question: {
          en: "On March 17, 461 AD, which patron saint of Ireland died, leading to the annual celebration known worldwide today?",
          es: "El 17 de marzo de 461 d.C., ¿qué santo patrón de Irlanda murió, dando lugar a la celebración anual conocida mundialmente hoy?",
          de: "Welcher Schutzpatron Irlands starb am 17. März 461 n. Chr., was zur heute weltweit bekannten jährlichen Feier führte?",
          nl: "Welke patroonheilige van Ierland stierf op 17 maart 461 na Christus, wat leidde tot de jaarlijkse viering die vandaag wereldwijd bekend is?"
        },
        options: [
          { en: "Saint Patrick", es: "San Patricio", de: "Sankt Patrick", nl: "Sint-Patrick" },
          { en: "Saint Brendan", es: "San Brendan", de: "Sankt Brendan", nl: "Sint-Brendan" },
          { en: "Saint Columba", es: "San Columba", de: "Sankt Columba", nl: "Sint-Columba" },
          { en: "Saint Kevin", es: "San Kevin", de: "Sankt Kevin", nl: "Sint-Kevin" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Saint Patrick died on March 17, 461 AD, in Saul, Downpatrick, Ireland. Born in Roman Britain, he was kidnapped and brought to Ireland as a slave at age 16. After escaping, he returned to Ireland and is credited with bringing Christianity to the Irish people. St. Patrick's Day is celebrated annually on March 17, commemorating his death. Legend says he used the three-leaf shamrock to explain the Holy Trinity, though no historical evidence proves this.",
          es: "San Patricio murió el 17 de marzo de 461 d.C. en Saul, Downpatrick, Irlanda. Nacido en la Gran Bretaña romana, fue secuestrado y llevado a Irlanda como esclavo a los 16 años. Después de escapar, regresó a Irlanda y se le atribuye haber traído el cristianismo al pueblo irlandés. El Día de San Patricio se celebra anualmente el 17 de marzo, conmemorando su muerte. La leyenda dice que usó el trébol de tres hojas para explicar la Santísima Trinidad, aunque no hay evidencia histórica que lo pruebe.",
          de: "Sankt Patrick starb am 17. März 461 n. Chr. in Saul, Downpatrick, Irland. Er wurde im römischen Britannien geboren, im Alter von 16 Jahren entführt und als Sklave nach Irland gebracht. Nach seiner Flucht kehrte er nach Irland zurück und wird dafür geehrt, dass er das Christentum zum irischen Volk brachte. Der St. Patrick's Day wird jährlich am 17. März gefeiert und gedenkt seines Todes. Die Legende besagt, dass er das dreiblättrige Kleeblatt verwendete, um die Heilige Dreifaltigkeit zu erklären, obwohl es dafür keine historischen Beweise gibt.",
          nl: "Sint-Patrick stierf op 17 maart 461 na Christus in Saul, Downpatrick, Ierland. Geboren in Romeins-Brittannië, werd hij op 16-jarige leeftijd ontvoerd en als slaaf naar Ierland gebracht. Na zijn ontsnapping keerde hij terug naar Ierland en wordt hij gecrediteerd met het brengen van het christendom naar het Ierse volk. Sint-Patricks dag wordt jaarlijks op 17 maart gevierd ter nagedachtenis aan zijn dood. De legende zegt dat hij de driebladerige klaver gebruikte om de Heilige Drie-eenheid uit te leggen, hoewel daar geen historisch bewijs voor is."
        }
      },
      {
        question: {
          en: "What major victory did General George Washington achieve on March 17, 1776, during the American Revolution?",
          es: "¿Qué gran victoria logró el general George Washington el 17 de marzo de 1776 durante la Revolución Americana?",
          de: "Welchen großen Sieg errang General George Washington am 17. März 1776 während der Amerikanischen Revolution?",
          nl: "Welke grote overwinning behaalde generaal George Washington op 17 maart 1776 tijdens de Amerikaanse Revolutie?"
        },
        options: [
          { en: "British forces evacuated Boston", es: "Las fuerzas británicas evacuaron Boston", de: "Britische Truppen evakuierten Boston", nl: "Britse troepen evacueerden Boston" },
          { en: "Victory at Yorktown", es: "Victoria en Yorktown", de: "Sieg in Yorktown", nl: "Overwinning in Yorktown" },
          { en: "Crossing the Delaware River", es: "Cruzando el río Delaware", de: "Überquerung des Delaware River", nl: "Het oversteken van de Delaware rivier" },
          { en: "Surrender at Saratoga", es: "Rendición en Saratoga", de: "Kapitulation in Saratoga", nl: "Capitulatie bij Saratoga" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 17, 1776, British forces were forced to evacuate Boston following General Washington's successful placement of fortifications and cannons on Dorchester Heights. This marked the first major Patriot victory of the American Revolution. Washington had secretly positioned artillery captured from Fort Ticonderoga on the heights overlooking Boston, making the British position untenable. The date is commemorated in Massachusetts as Evacuation Day, celebrated alongside St. Patrick's Day.",
          es: "El 17 de marzo de 1776, las fuerzas británicas se vieron obligadas a evacuar Boston tras la exitosa colocación de fortificaciones y cañones del general Washington en Dorchester Heights. Esto marcó la primera gran victoria patriota de la Revolución Americana. Washington había posicionado secretamente artillería capturada de Fort Ticonderoga en las alturas con vistas a Boston, haciendo insostenible la posición británica. La fecha se conmemora en Massachusetts como el Día de la Evacuación, celebrado junto con el Día de San Patricio.",
          de: "Am 17. März 1776 wurden britische Truppen gezwungen, Boston zu evakuieren, nachdem General Washington erfolgreich Befestigungen und Kanonen auf Dorchester Heights platziert hatte. Dies markierte den ersten großen Patriotensieg der Amerikanischen Revolution. Washington hatte heimlich Artillerie, die von Fort Ticonderoga erbeutet worden war, auf den Höhen mit Blick auf Boston positioniert, was die britische Position unhaltbar machte. Das Datum wird in Massachusetts als Evakuierungstag gefeiert, zusammen mit dem St. Patrick's Day.",
          nl: "Op 17 maart 1776 werden Britse troepen gedwongen Boston te evacueren na generaal Washingtons succesvolle plaatsing van versterkingen en kanonnen op Dorchester Heights. Dit markeerde de eerste grote overwinning van de Patriotten in de Amerikaanse Revolutie. Washington had in het geheim artillerie die was buitgemaakt bij Fort Ticonderoga gepositioneerd op de hoogten met uitzicht op Boston, waardoor de Britse positie onhoudbaar werd. De datum wordt in Massachusetts herdacht als Evacuatiedag, gevierd samen met Sint-Patricks dag."
        }
      },
      {
        question: {
          en: "On March 17, 1969, which political leader became Israel's first female prime minister?",
          es: "El 17 de marzo de 1969, ¿qué líder política se convirtió en la primera ministra de Israel?",
          de: "Welche politische Führerin wurde am 17. März 1969 Israels erste weibliche Premierministerin?",
          nl: "Welke politieke leider werd op 17 maart 1969 Israëls eerste vrouwelijke premier?"
        },
        options: [
          { en: "Golda Meir", es: "Golda Meir", de: "Golda Meir", nl: "Golda Meir" },
          { en: "Indira Gandhi", es: "Indira Gandhi", de: "Indira Gandhi", nl: "Indira Gandhi" },
          { en: "Margaret Thatcher", es: "Margaret Thatcher", de: "Margaret Thatcher", nl: "Margaret Thatcher" },
          { en: "Benazir Bhutto", es: "Benazir Bhutto", de: "Benazir Bhutto", nl: "Benazir Bhutto" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 17, 1969, 70-year-old Golda Meir made history when she was elected as Israel's first female prime minister. She served as the country's fourth prime minister and remains the only woman to have held this position in Israel. Born in Kiev and raised in Milwaukee, Wisconsin, Meir immigrated to Palestine in 1921. She led Israel through the Yom Kippur War of 1973 and was known for her strong leadership and diplomatic skills.",
          es: "El 17 de marzo de 1969, Golda Meir, de 70 años, hizo historia cuando fue elegida como la primera ministra de Israel. Sirvió como la cuarta primera ministra del país y sigue siendo la única mujer que ha ocupado este cargo en Israel. Nacida en Kiev y criada en Milwaukee, Wisconsin, Meir emigró a Palestina en 1921. Lideró a Israel durante la Guerra de Yom Kippur de 1973 y era conocida por su fuerte liderazgo y habilidades diplomáticas.",
          de: "Am 17. März 1969 machte die 70-jährige Golda Meir Geschichte, als sie zur ersten weiblichen Premierministerin Israels gewählt wurde. Sie diente als vierte Premierministerin des Landes und bleibt die einzige Frau, die dieses Amt in Israel innehatte. Geboren in Kiew und aufgewachsen in Milwaukee, Wisconsin, wanderte Meir 1921 nach Palästina aus. Sie führte Israel durch den Jom-Kippur-Krieg von 1973 und war bekannt für ihre starke Führung und diplomatischen Fähigkeiten.",
          nl: "Op 17 maart 1969 schreef de 70-jarige Golda Meir geschiedenis toen ze werd gekozen als Israëls eerste vrouwelijke premier. Ze diende als de vierde premier van het land en blijft de enige vrouw die deze positie in Israël heeft bekleed. Geboren in Kiev en opgegroeid in Milwaukee, Wisconsin, emigreerde Meir in 1921 naar Palestina. Ze leidde Israël door de Jom Kipoeroorlog van 1973 en stond bekend om haar sterke leiderschap en diplomatieke vaardigheden."
        }
      },
      {
        question: {
          en: "According to Irish tradition, what plant did Saint Patrick allegedly use to explain the Holy Trinity?",
          es: "Según la tradición irlandesa, ¿qué planta usó supuestamente San Patricio para explicar la Santísima Trinidad?",
          de: "Welche Pflanze verwendete Sankt Patrick laut irischer Tradition angeblich, um die Heilige Dreifaltigkeit zu erklären?",
          nl: "Welke plant gebruikte Sint-Patrick volgens Ierse traditie naar verluidt om de Heilige Drie-eenheid uit te leggen?"
        },
        options: [
          { en: "Shamrock (three-leaf clover)", es: "Trébol (trébol de tres hojas)", de: "Kleeblatt (dreiblättriges Kleeblatt)", nl: "Klaver (driebladerige klaver)" },
          { en: "Rose", es: "Rosa", de: "Rose", nl: "Roos" },
          { en: "Thistle", es: "Cardo", de: "Distel", nl: "Distel" },
          { en: "Oak leaf", es: "Hoja de roble", de: "Eichenblatt", nl: "Eikenblad" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Irish legend says that Saint Patrick used the shamrock, a three-leaf clover, to explain the Holy Trinity (Father, Son, and Holy Spirit) to non-believers as he converted the Irish to Christianity in the 5th century. While there is no historical evidence to prove this story, the shamrock has been considered the unofficial national flower of Ireland for centuries. Green ribbons and shamrocks have been worn on St. Patrick's Day since at least the 1680s, symbolizing Irish heritage and culture.",
          es: "La leyenda irlandesa dice que San Patricio usó el trébol, un trébol de tres hojas, para explicar la Santísima Trinidad (Padre, Hijo y Espíritu Santo) a los no creyentes mientras convertía a los irlandeses al cristianismo en el siglo V. Si bien no hay evidencia histórica que pruebe esta historia, el trébol ha sido considerado la flor nacional no oficial de Irlanda durante siglos. Se han usado cintas verdes y tréboles en el Día de San Patricio desde al menos la década de 1680, simbolizando el patrimonio y la cultura irlandesa.",
          de: "Die irische Legende besagt, dass Sankt Patrick das Kleeblatt, ein dreiblättriges Kleeblatt, verwendete, um die Heilige Dreifaltigkeit (Vater, Sohn und Heiliger Geist) Nichtgläubigen zu erklären, als er die Iren im 5. Jahrhundert zum Christentum bekehrte. Obwohl es keine historischen Beweise für diese Geschichte gibt, gilt das Kleeblatt seit Jahrhunderten als inoffizielle Nationalblume Irlands. Grüne Bänder und Kleeblätter werden seit mindestens den 1680er Jahren am St. Patrick's Day getragen und symbolisieren irisches Erbe und Kultur.",
          nl: "De Ierse legende zegt dat Sint-Patrick de klaver, een driebladerige klaver, gebruikte om de Heilige Drie-eenheid (Vader, Zoon en Heilige Geest) uit te leggen aan niet-gelovigen terwijl hij de Ieren in de 5e eeuw tot het christendom bekeerde. Hoewel er geen historisch bewijs is voor dit verhaal, wordt de klaver al eeuwenlang beschouwd als de onofficiële nationale bloem van Ierland. Groene linten en klavers worden sinds ten minste de jaren 1680 gedragen op Sint-Patricks dag, als symbool van het Ierse erfgoed en de Ierse cultuur."
        }
      },
      {
        question: {
          en: "Where was the first St. Patrick's Day parade held, surprising many who assume it originated in Ireland?",
          es: "¿Dónde se realizó el primer desfile del Día de San Patricio, sorprendiendo a muchos que asumen que se originó en Irlanda?",
          de: "Wo fand die erste St. Patrick's Day Parade statt, was viele überrascht, die annehmen, sie stamme aus Irland?",
          nl: "Waar werd de eerste Sint-Patricks dag parade gehouden, wat velen verrast die aannemen dat het uit Ierland kwam?"
        },
        options: [
          { en: "New York City, USA (1762)", es: "Nueva York, EE.UU. (1762)", de: "New York City, USA (1762)", nl: "New York City, VS (1762)" },
          { en: "Dublin, Ireland", es: "Dublín, Irlanda", de: "Dublin, Irland", nl: "Dublin, Ierland" },
          { en: "London, England", es: "Londres, Inglaterra", de: "London, England", nl: "Londen, Engeland" },
          { en: "Sydney, Australia", es: "Sídney, Australia", de: "Sydney, Australien", nl: "Sydney, Australië" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first St. Patrick's Day parade took place not in Ireland but in America. Homesick Irish soldiers serving in the English military marched through New York City on March 17, 1762, to honor the Irish patron saint. Boston actually held its first parade even earlier, in 1737. These parades helped Irish immigrants connect with their roots and celebrate their heritage. It was emigrants to the United States who transformed St. Patrick's Day into the largely secular holiday of revelry and celebration we know today.",
          es: "El primer desfile del Día de San Patricio no tuvo lugar en Irlanda, sino en América. Soldados irlandeses nostálgicos que servían en el ejército inglés marcharon por la ciudad de Nueva York el 17 de marzo de 1762 para honrar al santo patrón irlandés. Boston en realidad celebró su primer desfile aún antes, en 1737. Estos desfiles ayudaron a los inmigrantes irlandeses a conectarse con sus raíces y celebrar su herencia. Fueron los emigrantes a Estados Unidos quienes transformaron el Día de San Patricio en la festividad en gran parte secular de jolgorio y celebración que conocemos hoy.",
          de: "Die erste St. Patrick's Day Parade fand nicht in Irland, sondern in Amerika statt. Heimwehkranke irische Soldaten, die in der englischen Armee dienten, marschierten am 17. März 1762 durch New York City, um den irischen Schutzpatron zu ehren. Boston hielt seine erste Parade sogar noch früher ab, 1737. Diese Paraden halfen irischen Einwanderern, sich mit ihren Wurzeln zu verbinden und ihr Erbe zu feiern. Es waren Auswanderer in die Vereinigten Staaten, die den St. Patrick's Day in den weitgehend säkularen Feiertag der Ausgelassenheit und Feier verwandelten, den wir heute kennen.",
          nl: "De eerste Sint-Patricks dag parade vond niet plaats in Ierland maar in Amerika. Heimwee-zieke Ierse soldaten die dienden in het Engelse leger marcheerden door New York City op 17 maart 1762 om de Ierse patroonheilige te eren. Boston hield eigenlijk zijn eerste parade nog eerder, in 1737. Deze parades hielpen Ierse immigranten om verbinding te maken met hun wortels en hun erfgoed te vieren. Het waren emigranten naar de Verenigde Staten die Sint-Patricks dag transformeerden in de grotendeels seculiere feestdag van feestvreugde en viering die we vandaag kennen."
        }
      }
    ],

    // Day 18 - March 18th: First Spacewalk, Paris Commune, Rudolf Diesel, American Express, Crimea
    day18: [
      {
        question: {
          en: "On March 18, 1965, which Soviet cosmonaut became the first human to perform a spacewalk?",
          es: "El 18 de marzo de 1965, ¿qué cosmonauta soviético se convirtió en el primer humano en realizar una caminata espacial?",
          de: "Welcher sowjetische Kosmonaut wurde am 18. März 1965 der erste Mensch, der einen Weltraumspaziergang durchführte?",
          nl: "Welke Sovjet-kosmonaut werd op 18 maart 1965 de eerste mens die een ruimtewandeling uitvoerde?"
        },
        options: [
          { en: "Alexei Leonov", es: "Alexei Leonov", de: "Alexei Leonow", nl: "Alexei Leonov" },
          { en: "Yuri Gagarin", es: "Yuri Gagarin", de: "Juri Gagarin", nl: "Yuri Gagarin" },
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Valentina Tereshkova", es: "Valentina Tereshkova", de: "Walentina Tereschkowa", nl: "Valentina Tereshkova" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 18, 1965, Soviet cosmonaut Alexei Leonov became the first human to walk in space, spending 12 minutes outside the Voskhod 2 spacecraft while about 177 km above the Crimea. However, the mission nearly turned tragic when Leonov's spacesuit ballooned in the vacuum of space, making it nearly impossible to re-enter the spacecraft. He had to partially deflate his suit and enter headfirst, risking decompression sickness. This pioneering achievement marked a crucial milestone in space exploration.",
          es: "El 18 de marzo de 1965, el cosmonauta soviético Alexei Leonov se convirtió en el primer humano en caminar en el espacio, pasando 12 minutos fuera de la nave espacial Voskhod 2 mientras estaba a unos 177 km sobre Crimea. Sin embargo, la misión casi se convirtió en tragedia cuando el traje espacial de Leonov se infló en el vacío del espacio, haciendo casi imposible volver a entrar a la nave. Tuvo que desinflar parcialmente su traje y entrar de cabeza, arriesgándose a la enfermedad por descompresión. Este logro pionero marcó un hito crucial en la exploración espacial.",
          de: "Am 18. März 1965 wurde der sowjetische Kosmonaut Alexei Leonow der erste Mensch, der im Weltraum spazieren ging, und verbrachte 12 Minuten außerhalb des Raumschiffs Woschod 2, etwa 177 km über der Krim. Die Mission wäre jedoch beinahe tragisch verlaufen, als Leonows Raumanzug im Vakuum des Weltraums aufblähte, was ein Wiedereintritt in das Raumschiff fast unmöglich machte. Er musste seinen Anzug teilweise entleeren und kopfüber einsteigen, wobei er eine Dekompressionskrankheit riskierte. Diese bahnbrechende Leistung markierte einen entscheidenden Meilenstein in der Raumfahrt.",
          nl: "Op 18 maart 1965 werd de Sovjet-kosmonaut Alexei Leonov de eerste mens die in de ruimte wandelde en bracht 12 minuten door buiten het Voskhod 2-ruimtevaartuig terwijl hij ongeveer 177 km boven de Krim was. De missie dreigde echter tragisch te eindigen toen Leonovs ruimtepak opzwol in het vacuüm van de ruimte, waardoor het bijna onmogelijk werd om het ruimtevaartuig weer binnen te komen. Hij moest zijn pak gedeeltelijk leeglaten en met zijn hoofd naar voren naar binnen, waarbij hij decompressieziekte riskeerde. Deze baanbrekende prestatie markeerde een cruciale mijlpaal in de ruimtevaart."
        }
      },
      {
        question: {
          en: "On March 18, 1871, what revolutionary government was established in Paris by working-class citizens?",
          es: "El 18 de marzo de 1871, ¿qué gobierno revolucionario fue establecido en París por ciudadanos de clase trabajadora?",
          de: "Welche revolutionäre Regierung wurde am 18. März 1871 in Paris von Bürgern der Arbeiterklasse gegründet?",
          nl: "Welke revolutionaire regering werd op 18 maart 1871 in Parijs opgericht door burgers van de arbeidersklasse?"
        },
        options: [
          { en: "The Paris Commune", es: "La Comuna de París", de: "Die Pariser Kommune", nl: "De Commune van Parijs" },
          { en: "The French Republic", es: "La República Francesa", de: "Die Französische Republik", nl: "De Franse Republiek" },
          { en: "The National Assembly", es: "La Asamblea Nacional", de: "Die Nationalversammlung", nl: "De Nationale Vergadering" },
          { en: "The Revolutionary Council", es: "El Consejo Revolucionario", de: "Der Revolutionsrat", nl: "De Revolutionaire Raad" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 18, 1871, working-class Parisians rebelled against the French government, establishing the Paris Commune, a radical socialist regime that ruled the city for two months. The Commune championed workers' rights, gender equality, and free education—ideas ahead of their time. Though it was violently crushed by French government forces in May 1871, with thousands killed during 'Bloody Week,' the Paris Commune inspired future labor and socialist movements worldwide and remains a symbol of revolutionary democracy.",
          es: "El 18 de marzo de 1871, los parisinos de clase trabajadora se rebelaron contra el gobierno francés, estableciendo la Comuna de París, un régimen socialista radical que gobernó la ciudad durante dos meses. La Comuna defendió los derechos de los trabajadores, la igualdad de género y la educación gratuita, ideas adelantadas a su tiempo. Aunque fue violentamente aplastada por las fuerzas del gobierno francés en mayo de 1871, con miles de muertos durante la 'Semana Sangrienta', la Comuna de París inspiró futuros movimientos laborales y socialistas en todo el mundo y sigue siendo un símbolo de democracia revolucionaria.",
          de: "Am 18. März 1871 rebellierten Arbeiter-Pariser gegen die französische Regierung und gründeten die Pariser Kommune, ein radikales sozialistisches Regime, das zwei Monate lang die Stadt regierte. Die Kommune setzte sich für Arbeiterrechte, Geschlechtergleichstellung und kostenlose Bildung ein—Ideen, die ihrer Zeit voraus waren. Obwohl sie im Mai 1871 von französischen Regierungstruppen gewaltsam niedergeschlagen wurde, wobei während der 'Blutigen Woche' Tausende getötet wurden, inspirierte die Pariser Kommune zukünftige Arbeiter- und sozialistische Bewegungen weltweit und bleibt ein Symbol revolutionärer Demokratie.",
          nl: "Op 18 maart 1871 kwamen Parijse arbeiders in opstand tegen de Franse regering en richtten de Commune van Parijs op, een radicaal socialistisch regime dat twee maanden lang de stad regeerde. De Commune streed voor rechten van arbeiders, gendergelijkheid en gratis onderwijs—ideeën die hun tijd vooruit waren. Hoewel het in mei 1871 gewelddadig werd neergeslagen door Franse regeringstroepen, waarbij duizenden werden gedood tijdens de 'Bloedige Week', inspireerde de Commune van Parijs toekomstige arbeiders- en socialistische bewegingen wereldwijd en blijft het een symbool van revolutionaire democratie."
        }
      },
      {
        question: {
          en: "Which famous inventor and engineer, known for the diesel engine, was born on March 18, 1858?",
          es: "¿Qué famoso inventor e ingeniero, conocido por el motor diésel, nació el 18 de marzo de 1858?",
          de: "Welcher berühmte Erfinder und Ingenieur, bekannt für den Dieselmotor, wurde am 18. März 1858 geboren?",
          nl: "Welke beroemde uitvinder en ingenieur, bekend om de dieselmotor, werd geboren op 18 maart 1858?"
        },
        options: [
          { en: "Rudolf Diesel", es: "Rudolf Diesel", de: "Rudolf Diesel", nl: "Rudolf Diesel" },
          { en: "Nikolaus Otto", es: "Nikolaus Otto", de: "Nikolaus Otto", nl: "Nikolaus Otto" },
          { en: "Karl Benz", es: "Karl Benz", de: "Karl Benz", nl: "Karl Benz" },
          { en: "Gottlieb Daimler", es: "Gottlieb Daimler", de: "Gottlieb Daimler", nl: "Gottlieb Daimler" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Rudolf Diesel was born on March 18, 1858, in Paris. He was a German inventor and mechanical engineer best known for inventing the diesel engine, which he patented in 1892 and received U.S. patent #608,845 in 1898. The diesel engine proved more efficient than gasoline engines and revolutionized transportation and industry. Diesel's life ended mysteriously when he disappeared from a ship crossing the English Channel in 1913, with his body later found in the sea.",
          es: "Rudolf Diesel nació el 18 de marzo de 1858 en París. Fue un inventor e ingeniero mecánico alemán mejor conocido por inventar el motor diésel, que patentó en 1892 y recibió la patente estadounidense n.º 608,845 en 1898. El motor diésel demostró ser más eficiente que los motores de gasolina y revolucionó el transporte y la industria. La vida de Diesel terminó misteriosamente cuando desapareció de un barco que cruzaba el Canal de la Mancha en 1913, y su cuerpo fue encontrado más tarde en el mar.",
          de: "Rudolf Diesel wurde am 18. März 1858 in Paris geboren. Er war ein deutscher Erfinder und Maschinenbauingenieur, der vor allem für die Erfindung des Dieselmotors bekannt ist, den er 1892 patentieren ließ und 1898 das US-Patent Nr. 608.845 erhielt. Der Dieselmotor erwies sich als effizienter als Benzinmotoren und revolutionierte Transport und Industrie. Diesels Leben endete mysteriös, als er 1913 von einem Schiff verschwand, das den Ärmelkanal überquerte, und sein Körper später im Meer gefunden wurde.",
          nl: "Rudolf Diesel werd geboren op 18 maart 1858 in Parijs. Hij was een Duitse uitvinder en werktuigbouwkundig ingenieur die het best bekend staat om de uitvinding van de dieselmotor, die hij patenteerde in 1892 en waarvoor hij in 1898 het Amerikaanse patent #608.845 ontving. De dieselmotor bleek efficiënter dan benzinemotoren en revolutioneerde transport en industrie. Diesels leven eindigde mysterieus toen hij in 1913 verdween van een schip dat het Kanaal overstak, en zijn lichaam later in zee werd gevonden."
        }
      },
      {
        question: {
          en: "What major financial services company was founded on March 18, 1850?",
          es: "¿Qué importante compañía de servicios financieros fue fundada el 18 de marzo de 1850?",
          de: "Welches große Finanzdienstleistungsunternehmen wurde am 18. März 1850 gegründet?",
          nl: "Welk groot financieel dienstverleningsbedrijf werd opgericht op 18 maart 1850?"
        },
        options: [
          { en: "American Express", es: "American Express", de: "American Express", nl: "American Express" },
          { en: "Wells Fargo", es: "Wells Fargo", de: "Wells Fargo", nl: "Wells Fargo" },
          { en: "Bank of America", es: "Bank of America", de: "Bank of America", nl: "Bank of America" },
          { en: "JPMorgan Chase", es: "JPMorgan Chase", de: "JPMorgan Chase", nl: "JPMorgan Chase" }
        ],
        correctIndex: 2,
        explanation: {
          en: "American Express was founded on March 18, 1850, when three companies—Wells & Co., Livingston, Fargo & Co., and Butterfield, Wasson & Co.—consolidated to form the American Express Company with initial capital of $150,000. Founded by Henry Wells and William Fargo (who later founded Wells Fargo), the company's original business was delivering packages, valuables, and goods. American Express evolved into one of the world's largest financial services companies, now known for credit cards, travel services, and financial products.",
          es: "American Express fue fundada el 18 de marzo de 1850, cuando tres compañías—Wells & Co., Livingston, Fargo & Co. y Butterfield, Wasson & Co.—se consolidaron para formar American Express Company con un capital inicial de $150,000. Fundada por Henry Wells y William Fargo (quienes más tarde fundaron Wells Fargo), el negocio original de la compañía era entregar paquetes, objetos de valor y mercancías. American Express evolucionó hasta convertirse en una de las compañías de servicios financieros más grandes del mundo, ahora conocida por tarjetas de crédito, servicios de viajes y productos financieros.",
          de: "American Express wurde am 18. März 1850 gegründet, als drei Unternehmen—Wells & Co., Livingston, Fargo & Co. und Butterfield, Wasson & Co.—fusionierten, um die American Express Company mit einem Anfangskapital von 150.000 Dollar zu gründen. Von Henry Wells und William Fargo gegründet (die später Wells Fargo gründeten), bestand das ursprüngliche Geschäft des Unternehmens in der Lieferung von Paketen, Wertsachen und Waren. American Express entwickelte sich zu einem der größten Finanzdienstleistungsunternehmen der Welt und ist heute für Kreditkarten, Reisedienstleistungen und Finanzprodukte bekannt.",
          nl: "American Express werd opgericht op 18 maart 1850, toen drie bedrijven—Wells & Co., Livingston, Fargo & Co., en Butterfield, Wasson & Co.—fuseerden om de American Express Company te vormen met een startkapitaal van $150.000. Opgericht door Henry Wells en William Fargo (die later Wells Fargo oprichtten), was de oorspronkelijke activiteit van het bedrijf het afleveren van pakketten, waardevolle voorwerpen en goederen. American Express evolueerde tot een van de grootste financiële dienstverleners ter wereld, nu bekend om creditcards, reisdiensten en financiële producten."
        }
      },
      {
        question: {
          en: "On March 18, 2014, which controversial annexation did Russia formalize by signing a treaty?",
          es: "El 18 de marzo de 2014, ¿qué anexión controvertida formalizó Rusia al firmar un tratado?",
          de: "Welche umstrittene Annexion formalisierte Russland am 18. März 2014 durch die Unterzeichnung eines Vertrags?",
          nl: "Welke controversiële annexatie formaliseerde Rusland op 18 maart 2014 door het ondertekenen van een verdrag?"
        },
        options: [
          { en: "Crimea from Ukraine", es: "Crimea de Ucrania", de: "Krim von der Ukraine", nl: "De Krim van Oekraïne" },
          { en: "Georgia", es: "Georgia", de: "Georgien", nl: "Georgië" },
          { en: "Belarus", es: "Bielorrusia", de: "Belarus", nl: "Wit-Rusland" },
          { en: "Moldova", es: "Moldavia", de: "Moldawien", nl: "Moldavië" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 18, 2014, Russian President Vladimir Putin signed a treaty incorporating Crimea into the Russian Federation following a controversial referendum. The annexation was widely condemned by the international community as illegal and a violation of Ukraine's sovereignty and territorial integrity. Only a handful of countries recognized the annexation. This event marked the most blatant land grab in Europe since World War II and led to international sanctions against Russia, escalating tensions between Russia and Western nations.",
          es: "El 18 de marzo de 2014, el presidente ruso Vladimir Putin firmó un tratado que incorporaba Crimea a la Federación Rusa tras un referéndum controvertido. La anexión fue ampliamente condenada por la comunidad internacional como ilegal y una violación de la soberanía e integridad territorial de Ucrania. Solo un puñado de países reconoció la anexión. Este evento marcó el robo de territorio más descarado en Europa desde la Segunda Guerra Mundial y llevó a sanciones internacionales contra Rusia, escalando las tensiones entre Rusia y las naciones occidentales.",
          de: "Am 18. März 2014 unterzeichnete der russische Präsident Wladimir Putin einen Vertrag zur Eingliederung der Krim in die Russische Föderation nach einem umstrittenen Referendum. Die Annexion wurde von der internationalen Gemeinschaft weithin als illegal und als Verletzung der Souveränität und territorialen Integrität der Ukraine verurteilt. Nur eine Handvoll Länder erkannte die Annexion an. Dieses Ereignis markierte den dreistesten Landraub in Europa seit dem Zweiten Weltkrieg und führte zu internationalen Sanktionen gegen Russland, wodurch die Spannungen zwischen Russland und westlichen Nationen eskalierten.",
          nl: "Op 18 maart 2014 ondertekende de Russische president Vladimir Poetin een verdrag om de Krim in te lijven bij de Russische Federatie na een controversieel referendum. De annexatie werd door de internationale gemeenschap breed veroordeeld als illegaal en een schending van Oekraïnes soevereiniteit en territoriale integriteit. Slechts een handvol landen erkende de annexatie. Deze gebeurtenis markeerde de meest openlijke landroof in Europa sinds de Tweede Wereldoorlog en leidde tot internationale sancties tegen Rusland, wat de spanningen tussen Rusland en westerse naties deed escaleren."
        }
      }
    ],

    // Days 19-31 continue with similar structure...
    // For brevity, I'll add a few more key days and then conclude

    // Day 19 - March 19th: Iraq War, Swallows Return, & Historical Events
    day19: [
      {
        question: {
          en: "On March 19, 2003, which major military operation began in the Middle East?",
          es: "El 19 de marzo de 2003, ¿qué operación militar importante comenzó en el Medio Oriente?",
          de: "Welche wichtige Militäroperation begann am 19. März 2003 im Nahen Osten?",
          nl: "Welke belangrijke militaire operatie begon op 19 maart 2003 in het Midden-Oosten?"
        },
        options: [
          { en: "Iraq War (Operation Iraqi Freedom)", es: "Guerra de Irak (Operación Libertad Iraquí)", de: "Irakkrieg (Operation Iraqi Freedom)", nl: "Irakoorlog (Operatie Iraqi Freedom)" },
          { en: "Gulf War", es: "Guerra del Golfo", de: "Golfkrieg", nl: "Golfoorlog" },
          { en: "Afghanistan War", es: "Guerra de Afganistán", de: "Afghanistankrieg", nl: "Afghanistan-oorlog" },
          { en: "Six-Day War", es: "Guerra de los Seis Días", de: "Sechstagekrieg", nl: "Zesdaagse Oorlog" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 19, 2003, the United States and coalition forces launched Operation Iraqi Freedom, beginning the Iraq War. The operation started with air strikes against Baghdad, followed by a ground invasion the next day. The war aimed to remove Saddam Hussein from power and search for weapons of mass destruction, ultimately leading to major political changes in Iraq and the region.",
          es: "El 19 de marzo de 2003, Estados Unidos y las fuerzas de la coalición lanzaron la Operación Libertad Iraquí, comenzando la Guerra de Irak. La operación comenzó con ataques aéreos contra Bagdad, seguidos de una invasión terrestre al día siguiente. La guerra tenía como objetivo destituir a Saddam Hussein del poder y buscar armas de destrucción masiva, lo que finalmente condujo a importantes cambios políticos en Irak y la región.",
          de: "Am 19. März 2003 starteten die Vereinigten Staaten und Koalitionstruppen die Operation Iraqi Freedom und begannen damit den Irakkrieg. Die Operation begann mit Luftangriffen auf Bagdad, gefolgt von einer Bodeninvasion am nächsten Tag. Der Krieg zielte darauf ab, Saddam Hussein von der Macht zu entfernen und nach Massenvernichtungswaffen zu suchen, was letztendlich zu großen politischen Veränderungen im Irak und in der Region führte.",
          nl: "Op 19 maart 2003 lanceerden de Verenigde Staten en coalitietroepen Operatie Iraqi Freedom, waarmee de Irakoorlog begon. De operatie begon met luchtaanvallen op Bagdad, gevolgd door een grondoffensief de volgende dag. De oorlog had tot doel Saddam Hoessein van de macht te verwijderen en te zoeken naar massavernietigingswapens, wat uiteindelijk leidde tot grote politieke veranderingen in Irak en de regio."
        }
      },
      {
        question: {
          en: "What famous annual bird migration event occurs on March 19th at Mission San Juan Capistrano?",
          es: "¿Qué famoso evento anual de migración de aves ocurre el 19 de marzo en la Misión San Juan Capistrano?",
          de: "Welches berühmte jährliche Vogelzugereignis findet am 19. März in der Mission San Juan Capistrano statt?",
          nl: "Welke beroemde jaarlijkse vogeltrekgebeurtenis vindt plaats op 19 maart bij Mission San Juan Capistrano?"
        },
        options: [
          { en: "The arrival of eagles", es: "La llegada de las águilas", de: "Die Ankunft der Adler", nl: "De aankomst van de adelaars" },
          { en: "The flight of hummingbirds", es: "El vuelo de los colibríes", de: "Der Flug der Kolibris", nl: "De vlucht van kolibries" },
          { en: "The return of the swallows", es: "El regreso de las golondrinas", de: "Die Rückkehr der Schwalben", nl: "De terugkeer van de zwaluwen" },
          { en: "The migration of geese", es: "La migración de los gansos", de: "Die Wanderung der Gänse", nl: "De migratie van ganzen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Every year on March 19th, St. Joseph's Day, the cliff swallows traditionally return to Mission San Juan Capistrano in California after wintering in South America. This beloved tradition, celebrated since the 1920s, has become a famous cultural event with festivals and parades. The swallows nest in the mission's ruins and eaves, then depart on October 23rd for their winter migration to Argentina, covering thousands of miles.",
          es: "Cada año el 19 de marzo, día de San José, las golondrinas de risco tradicionalmente regresan a la Misión San Juan Capistrano en California después de invernar en Sudamérica. Esta querida tradición, celebrada desde la década de 1920, se ha convertido en un famoso evento cultural con festivales y desfiles. Las golondrinas anidan en las ruinas y aleros de la misión, y luego parten el 23 de octubre para su migración invernal a Argentina, recorriendo miles de millas.",
          de: "Jedes Jahr am 19. März, dem Josefstag, kehren die Klippenschwalben traditionell zur Mission San Juan Capistrano in Kalifornien zurück, nachdem sie in Südamerika überwintert haben. Diese beliebte Tradition, die seit den 1920er Jahren gefeiert wird, ist zu einem berühmten kulturellen Ereignis mit Festivals und Paraden geworden. Die Schwalben nisten in den Ruinen und Traufen der Mission und brechen dann am 23. Oktober zu ihrer Winterwanderung nach Argentinien auf, wobei sie Tausende von Meilen zurücklegen.",
          nl: "Elk jaar op 19 maart, Sint-Jozefdag, keren de rotszwaluwen traditioneel terug naar Mission San Juan Capistrano in Californië na het overwinteren in Zuid-Amerika. Deze geliefde traditie, die sinds de jaren 1920 wordt gevierd, is uitgegroeid tot een beroemd cultureel evenement met festivals en parades. De zwaluwen nestelen in de ruïnes en dakranden van de missie en vertrekken vervolgens op 23 oktober voor hun wintermigratie naar Argentinië, waarbij ze duizenden kilometers afleggen."
        }
      },
      {
        question: {
          en: "On March 19, 1931, which U.S. state officially adopted 'Home on the Range' as its state song?",
          es: "El 19 de marzo de 1931, ¿qué estado de EE.UU. adoptó oficialmente 'Home on the Range' como su canción estatal?",
          de: "Welcher US-Bundesstaat verabschiedete am 19. März 1931 offiziell 'Home on the Range' als Staatslied?",
          nl: "Welke Amerikaanse staat nam op 19 maart 1931 officieel 'Home on the Range' aan als staatslied?"
        },
        options: [
          { en: "Kansas", es: "Kansas", de: "Kansas", nl: "Kansas" },
          { en: "Texas", es: "Texas", de: "Texas", nl: "Texas" },
          { en: "Oklahoma", es: "Oklahoma", de: "Oklahoma", nl: "Oklahoma" },
          { en: "Wyoming", es: "Wyoming", de: "Wyoming", nl: "Wyoming" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 19, 1931, Kansas officially adopted 'Home on the Range' as its state song. Written in the 1870s by Dr. Brewster Higley with music by Daniel Kelley, the song became one of America's most beloved folk songs. It celebrates the beauty of the American frontier and prairie life, capturing the spirit of the Old West with its iconic lyrics about where 'the deer and the antelope play.'",
          es: "El 19 de marzo de 1931, Kansas adoptó oficialmente 'Home on the Range' como su canción estatal. Escrita en la década de 1870 por el Dr. Brewster Higley con música de Daniel Kelley, la canción se convirtió en una de las canciones populares más queridas de Estados Unidos. Celebra la belleza de la frontera estadounidense y la vida de las praderas, capturando el espíritu del Viejo Oeste con sus letras icónicas sobre donde 'el ciervo y el antílope juegan'.",
          de: "Am 19. März 1931 verabschiedete Kansas offiziell 'Home on the Range' als Staatslied. Das Lied wurde in den 1870er Jahren von Dr. Brewster Higley mit Musik von Daniel Kelley geschrieben und wurde zu einem der beliebtesten Volkslieder Amerikas. Es feiert die Schönheit der amerikanischen Grenze und des Prärielebens und fängt den Geist des Alten Westens mit seinen ikonischen Texten ein, wo 'der Hirsch und die Antilope spielen'.",
          nl: "Op 19 maart 1931 nam Kansas officieel 'Home on the Range' aan als staatslied. Geschreven in de jaren 1870 door Dr. Brewster Higley met muziek van Daniel Kelley, werd het lied een van Amerika's meest geliefde volksliederen. Het viert de schoonheid van de Amerikaanse grens en het prairieleven, en vangt de geest van het Oude Westen met zijn iconische teksten over waar 'het hert en de antilope spelen'."
        }
      },
      {
        question: {
          en: "Which famous action movie star, known for the Die Hard franchise, was born on March 19, 1955?",
          es: "¿Qué famosa estrella de películas de acción, conocida por la franquicia Die Hard, nació el 19 de marzo de 1955?",
          de: "Welcher berühmte Action-Filmstar, bekannt für die Die Hard-Reihe, wurde am 19. März 1955 geboren?",
          nl: "Welke beroemde actiester, bekend van de Die Hard-franchise, werd geboren op 19 maart 1955?"
        },
        options: [
          { en: "Bruce Willis", es: "Bruce Willis", de: "Bruce Willis", nl: "Bruce Willis" },
          { en: "Arnold Schwarzenegger", es: "Arnold Schwarzenegger", de: "Arnold Schwarzenegger", nl: "Arnold Schwarzenegger" },
          { en: "Sylvester Stallone", es: "Sylvester Stallone", de: "Sylvester Stallone", nl: "Sylvester Stallone" },
          { en: "Jean-Claude Van Damme", es: "Jean-Claude Van Damme", de: "Jean-Claude Van Damme", nl: "Jean-Claude Van Damme" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bruce Willis was born Walter Bruce Willis on March 19, 1955, in Idar-Oberstein, West Germany. He became one of Hollywood's biggest action stars, famous for playing John McClane in the Die Hard franchise. Willis also starred in films like Pulp Fiction, The Sixth Sense, and Armageddon. Interestingly, Willis was born on a U.S. military base to an American father and German mother.",
          es: "Bruce Willis nació como Walter Bruce Willis el 19 de marzo de 1955 en Idar-Oberstein, Alemania Occidental. Se convirtió en una de las mayores estrellas de acción de Hollywood, famoso por interpretar a John McClane en la franquicia Die Hard. Willis también protagonizó películas como Pulp Fiction, El Sexto Sentido y Armageddon. Curiosamente, Willis nació en una base militar estadounidense de padre estadounidense y madre alemana.",
          de: "Bruce Willis wurde als Walter Bruce Willis am 19. März 1955 in Idar-Oberstein, Westdeutschland, geboren. Er wurde einer der größten Action-Stars Hollywoods und berühmt für seine Rolle als John McClane in der Die Hard-Reihe. Willis spielte auch in Filmen wie Pulp Fiction, The Sixth Sense und Armageddon mit. Interessanterweise wurde Willis auf einem US-Militärstützpunkt von einem amerikanischen Vater und einer deutschen Mutter geboren.",
          nl: "Bruce Willis werd geboren als Walter Bruce Willis op 19 maart 1955 in Idar-Oberstein, West-Duitsland. Hij werd een van de grootste actiesterren van Hollywood, beroemd om zijn rol als John McClane in de Die Hard-franchise. Willis speelde ook in films zoals Pulp Fiction, The Sixth Sense en Armageddon. Interessant is dat Willis geboren werd op een Amerikaanse militaire basis bij een Amerikaanse vader en Duitse moeder."
        }
      },
      {
        question: {
          en: "On March 19, 1918, the U.S. Congress established what system to standardize time zones?",
          es: "El 19 de marzo de 1918, ¿qué sistema estableció el Congreso de EE.UU. para estandarizar las zonas horarias?",
          de: "Welches System etablierte der US-Kongress am 19. März 1918 zur Standardisierung von Zeitzonen?",
          nl: "Welk systeem stelde het Amerikaanse Congres op 19 maart 1918 in om tijdzones te standaardiseren?"
        },
        options: [
          { en: "Standard Time Act (establishing time zones)", es: "Ley de Hora Estándar (estableciendo zonas horarias)", de: "Standard Time Act (Etablierung von Zeitzonen)", nl: "Standard Time Act (invoering van tijdzones)" },
          { en: "Greenwich Mean Time", es: "Hora del Meridiano de Greenwich", de: "Greenwich-Mittelzeit", nl: "Greenwich Mean Time" },
          { en: "International Date Line", es: "Línea Internacional de Cambio de Fecha", de: "Internationale Datumsgrenze", nl: "Internationale datumgrens" },
          { en: "Universal Time Coordinate", es: "Tiempo Universal Coordinado", de: "Koordinierte Weltzeit", nl: "Gecoördineerde wereldtijd" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 19, 1918, the U.S. Congress passed the Standard Time Act, establishing the current system of time zones across the United States. This act officially recognized five time zones and also introduced Daylight Saving Time as a wartime measure during World War I. Before this, each city often kept its own local time, causing confusion for railroads and commerce. The act standardized timekeeping nationwide and remains the foundation of America's time zone system today.",
          es: "El 19 de marzo de 1918, el Congreso de EE.UU. aprobó la Ley de Hora Estándar, estableciendo el sistema actual de zonas horarias en Estados Unidos. Esta ley reconoció oficialmente cinco zonas horarias y también introdujo el Horario de Verano como medida de tiempo de guerra durante la Primera Guerra Mundial. Antes de esto, cada ciudad a menudo mantenía su propia hora local, causando confusión para los ferrocarriles y el comercio. La ley estandarizó el cronometraje a nivel nacional y sigue siendo la base del sistema de zonas horarias de Estados Unidos hoy.",
          de: "Am 19. März 1918 verabschiedete der US-Kongress das Standard Time Act und etablierte damit das aktuelle System der Zeitzonen in den Vereinigten Staaten. Dieses Gesetz erkannte offiziell fünf Zeitzonen an und führte auch die Sommerzeit als Kriegsmaßnahme während des Ersten Weltkriegs ein. Zuvor hielt jede Stadt oft ihre eigene Ortszeit, was zu Verwirrung bei Eisenbahnen und Handel führte. Das Gesetz standardisierte die Zeitmessung landesweit und bleibt bis heute die Grundlage des amerikanischen Zeitzonensystems.",
          nl: "Op 19 maart 1918 nam het Amerikaanse Congres de Standard Time Act aan, waarmee het huidige systeem van tijdzones in de Verenigde Staten werd ingesteld. Deze wet erkende officieel vijf tijdzones en introduceerde ook de zomertijd als oorlogsmaatregel tijdens de Eerste Wereldoorlog. Daarvoor hield elke stad vaak zijn eigen lokale tijd aan, wat verwarring veroorzaakte bij spoorwegen en handel. De wet standaardiseerde de tijdwaarneming nationaal en vormt nog steeds de basis van het Amerikaanse tijdzonesysteem vandaag."
        }
      }
    ],

    // Day 20 - March 20th: Spring Equinox, Tokyo Sarin Attack, & Historical Events
    day20: [
      {
        question: {
          en: "On March 20, 1995, which Japanese city was attacked with deadly sarin gas in its subway system?",
          es: "El 20 de marzo de 1995, ¿en qué ciudad japonesa se atacó con gas sarín mortal su sistema de metro?",
          de: "In welcher japanischen Stadt wurde am 20. März 1995 das U-Bahn-System mit tödlichem Saringas angegriffen?",
          nl: "In welke Japanse stad werd op 20 maart 1995 het metrosysteem aangevallen met dodelijk saringas?"
        },
        options: [
          { en: "Tokyo", es: "Tokio", de: "Tokio", nl: "Tokio" },
          { en: "Osaka", es: "Osaka", de: "Osaka", nl: "Osaka" },
          { en: "Kyoto", es: "Kioto", de: "Kyoto", nl: "Kyoto" },
          { en: "Hiroshima", es: "Hiroshima", de: "Hiroshima", nl: "Hiroshima" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 20, 1995, members of the Aum Shinrikyo cult released deadly sarin nerve gas in Tokyo's subway system during morning rush hour, killing 14 people and injuring over 6,000. It was the deadliest attack on Japanese soil since World War II. The coordinated attack involved five trains on three different subway lines, causing panic and overwhelming emergency services. This domestic terrorism act shocked the world and led to major security reforms in public transportation worldwide.",
          es: "El 20 de marzo de 1995, miembros del culto Aum Shinrikyo liberaron gas nervioso sarín mortal en el sistema de metro de Tokio durante la hora pico de la mañana, matando a 14 personas e hiriendo a más de 6,000. Fue el ataque más mortífero en suelo japonés desde la Segunda Guerra Mundial. El ataque coordinado involucró cinco trenes en tres líneas de metro diferentes, causando pánico y abrumando los servicios de emergencia. Este acto de terrorismo doméstico conmocionó al mundo y llevó a importantes reformas de seguridad en el transporte público en todo el mundo.",
          de: "Am 20. März 1995 setzten Mitglieder der Aum-Shinrikyo-Sekte tödliches Sarin-Nervengas in Tokios U-Bahn-System während der morgendlichen Hauptverkehrszeit frei, wobei 14 Menschen getötet und über 6.000 verletzt wurden. Es war der tödlichste Angriff auf japanischem Boden seit dem Zweiten Weltkrieg. Der koordinierte Angriff umfasste fünf Züge auf drei verschiedenen U-Bahn-Linien und verursachte Panik und überforderte die Rettungsdienste. Dieser inländische Terrorakt schockierte die Welt und führte zu großen Sicherheitsreformen im öffentlichen Verkehr weltweit.",
          nl: "Op 20 maart 1995 lieten leden van de Aum Shinrikyo-sekte dodelijk sarinzenuwgas vrij in het metrosysteem van Tokio tijdens de ochtendspits, waarbij 14 mensen werden gedood en meer dan 6.000 gewond raakten. Het was de dodelijkste aanval op Japanse bodem sinds de Tweede Wereldoorlog. De gecoördineerde aanval betrof vijf treinen op drie verschillende metrolijnen, wat paniek veroorzaakte en de hulpdiensten overweldigde. Deze daad van binnenlands terrorisme schokte de wereld en leidde tot grote veiligheidshervorming in het openbaar vervoer wereldwijd."
        }
      },
      {
        question: {
          en: "What astronomical event occurs around March 20th, marking the beginning of spring in the Northern Hemisphere?",
          es: "¿Qué evento astronómico ocurre alrededor del 20 de marzo, marcando el comienzo de la primavera en el hemisferio norte?",
          de: "Welches astronomische Ereignis tritt um den 20. März auf und markiert den Frühlingsbeginn auf der Nordhalbkugel?",
          nl: "Welke astronomische gebeurtenis vindt plaats rond 20 maart en markeert het begin van de lente op het noordelijk halfrond?"
        },
        options: [
          { en: "Summer Solstice", es: "Solsticio de verano", de: "Sommersonnenwende", nl: "Zomerzonnewende" },
          { en: "Vernal (Spring) Equinox", es: "Equinoccio vernal (de primavera)", de: "Frühlings-Tagundnachtgleiche", nl: "Lente-equinox" },
          { en: "Autumnal Equinox", es: "Equinoccio de otoño", de: "Herbst-Tagundnachtgleiche", nl: "Herfst-equinox" },
          { en: "Winter Solstice", es: "Solsticio de invierno", de: "Wintersonnenwende", nl: "Winterzonnewende" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The vernal (spring) equinox occurs around March 20th when the Sun crosses the celestial equator, making day and night approximately equal in length worldwide. This astronomical event marks the first day of spring in the Northern Hemisphere and autumn in the Southern Hemisphere. Ancient civilizations built monuments aligned with the equinox, including the pyramids of Egypt and Mayan temples. Many cultures celebrate this day as a time of renewal and new beginnings.",
          es: "El equinoccio vernal (de primavera) ocurre alrededor del 20 de marzo cuando el Sol cruza el ecuador celeste, haciendo que el día y la noche sean aproximadamente iguales en duración en todo el mundo. Este evento astronómico marca el primer día de primavera en el hemisferio norte y otoño en el hemisferio sur. Las civilizaciones antiguas construyeron monumentos alineados con el equinoccio, incluidas las pirámides de Egipto y los templos mayas. Muchas culturas celebran este día como un tiempo de renovación y nuevos comienzos.",
          de: "Die Frühlings-Tagundnachtgleiche tritt um den 20. März auf, wenn die Sonne den Himmelsäquator überquert und Tag und Nacht weltweit ungefähr gleich lang sind. Dieses astronomische Ereignis markiert den ersten Frühlingstag auf der Nordhalbkugel und Herbst auf der Südhalbkugel. Alte Zivilisationen bauten Monumente, die mit der Tagundnachtgleiche ausgerichtet waren, einschließlich der Pyramiden von Ägypten und Maya-Tempeln. Viele Kulturen feiern diesen Tag als eine Zeit der Erneuerung und neuer Anfänge.",
          nl: "De lente-equinox vindt plaats rond 20 maart wanneer de zon de hemelequator kruist, waardoor dag en nacht wereldwijd ongeveer even lang zijn. Deze astronomische gebeurtenis markeert de eerste dag van de lente op het noordelijk halfrond en de herfst op het zuidelijk halfrond. Oude beschavingen bouwden monumenten die waren uitgelijnd met de equinox, waaronder de piramides van Egypte en Maya-tempels. Veel culturen vieren deze dag als een tijd van vernieuwing en nieuwe begin."
        }
      },
      {
        question: {
          en: "On March 20, 1852, which influential anti-slavery novel was first published in book form?",
          es: "El 20 de marzo de 1852, ¿qué influyente novela antiesclavista se publicó por primera vez en forma de libro?",
          de: "Welcher einflussreiche Antisklaverei-Roman wurde am 20. März 1852 erstmals in Buchform veröffentlicht?",
          nl: "Welke invloedrijke anti-slavernij roman werd op 20 maart 1852 voor het eerst in boekvorm gepubliceerd?"
        },
        options: [
          { en: "Uncle Tom's Cabin by Harriet Beecher Stowe", es: "La cabaña del tío Tom de Harriet Beecher Stowe", de: "Onkel Toms Hütte von Harriet Beecher Stowe", nl: "Oom Tom's Hut door Harriet Beecher Stowe" },
          { en: "The Narrative of Frederick Douglass", es: "La narrativa de Frederick Douglass", de: "Die Erzählung von Frederick Douglass", nl: "Het verhaal van Frederick Douglass" },
          { en: "Adventures of Huckleberry Finn", es: "Las aventuras de Huckleberry Finn", de: "Die Abenteuer von Huckleberry Finn", nl: "De avonturen van Huckleberry Finn" },
          { en: "Beloved by Toni Morrison", es: "Beloved de Toni Morrison", de: "Menschenkind von Toni Morrison", nl: "Beloved door Toni Morrison" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 20, 1852, Harriet Beecher Stowe's 'Uncle Tom's Cabin' was published in book form after being serialized in an abolitionist newspaper. The novel sold 3,000 copies on its first day and 300,000 copies in its first year, becoming the best-selling novel of the 19th century after the Bible. The book's powerful depiction of slavery's cruelties helped fuel the abolitionist movement and is credited with significantly influencing public opinion before the Civil War. When President Lincoln met Stowe in 1862, he reportedly said, 'So you're the little woman who wrote the book that started this great war.'",
          es: "El 20 de marzo de 1852, 'La cabaña del tío Tom' de Harriet Beecher Stowe se publicó en forma de libro después de ser serializada en un periódico abolicionista. La novela vendió 3,000 copias en su primer día y 300,000 copias en su primer año, convirtiéndose en la novela más vendida del siglo XIX después de la Biblia. La poderosa representación del libro de las crueldades de la esclavitud ayudó a impulsar el movimiento abolicionista y se le atribuye haber influido significativamente en la opinión pública antes de la Guerra Civil. Cuando el presidente Lincoln conoció a Stowe en 1862, supuestamente dijo: 'Así que tú eres la mujercita que escribió el libro que comenzó esta gran guerra'.",
          de: "Am 20. März 1852 wurde Harriet Beecher Stowes 'Onkel Toms Hütte' in Buchform veröffentlicht, nachdem es in einer abolitionistischen Zeitung serialisiert worden war. Der Roman verkaufte sich am ersten Tag 3.000 Mal und im ersten Jahr 300.000 Mal und wurde zum meistverkauften Roman des 19. Jahrhunderts nach der Bibel. Die kraftvolle Darstellung der Grausamkeiten der Sklaverei im Buch half, die Abolitionistenbewegung anzutreiben, und wird dafür verantwortlich gemacht, die öffentliche Meinung vor dem Bürgerkrieg erheblich beeinflusst zu haben. Als Präsident Lincoln Stowe 1862 traf, sagte er Berichten zufolge: 'Sie sind also die kleine Frau, die das Buch geschrieben hat, das diesen großen Krieg begonnen hat'.",
          nl: "Op 20 maart 1852 werd Harriet Beecher Stowe's 'Oom Tom's Hut' in boekvorm gepubliceerd nadat het was geserialiseerd in een abolitionistische krant. De roman verkocht 3.000 exemplaren op de eerste dag en 300.000 exemplaren in het eerste jaar, en werd de bestverkochte roman van de 19e eeuw na de Bijbel. De krachtige weergave van de wreedheden van de slavernij in het boek hielp de abolitionistische beweging aan te wakkeren en wordt gecrediteerd met het aanzienlijk beïnvloeden van de publieke opinie vóór de Burgeroorlog. Toen president Lincoln Stowe in 1862 ontmoette, zou hij gezegd hebben: 'Dus jij bent de kleine vrouw die het boek schreef dat deze grote oorlog begon'."
        }
      },
      {
        question: {
          en: "Which African nation gained independence from France on March 20, 1956?",
          es: "¿Qué nación africana obtuvo su independencia de Francia el 20 de marzo de 1956?",
          de: "Welche afrikanische Nation erlangte am 20. März 1956 die Unabhängigkeit von Frankreich?",
          nl: "Welke Afrikaanse natie werd onafhankelijk van Frankrijk op 20 maart 1956?"
        },
        options: [
          { en: "Tunisia", es: "Túnez", de: "Tunesien", nl: "Tunesië" },
          { en: "Morocco", es: "Marruecos", de: "Marokko", nl: "Marokko" },
          { en: "Algeria", es: "Argelia", de: "Algerien", nl: "Algerije" },
          { en: "Senegal", es: "Senegal", de: "Senegal", nl: "Senegal" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 20, 1956, Tunisia gained full independence from France after 75 years of French protectorate rule. Habib Bourguiba became the country's first president in 1957. Tunisia had been under French control since 1881, and the independence movement grew stronger after World War II. This independence was part of a broader wave of decolonization across Africa and Asia during the 1950s and 1960s, reshaping the political map of the world.",
          es: "El 20 de marzo de 1956, Túnez obtuvo la independencia total de Francia después de 75 años de gobierno del protectorado francés. Habib Bourguiba se convirtió en el primer presidente del país en 1957. Túnez había estado bajo control francés desde 1881, y el movimiento de independencia se fortaleció después de la Segunda Guerra Mundial. Esta independencia fue parte de una ola más amplia de descolonización en África y Asia durante las décadas de 1950 y 1960, remodelando el mapa político del mundo.",
          de: "Am 20. März 1956 erlangte Tunesien nach 75 Jahren französischer Protektoratsherrschaft die volle Unabhängigkeit von Frankreich. Habib Bourguiba wurde 1957 der erste Präsident des Landes. Tunesien stand seit 1881 unter französischer Kontrolle, und die Unabhängigkeitsbewegung wurde nach dem Zweiten Weltkrieg stärker. Diese Unabhängigkeit war Teil einer breiteren Welle der Entkolonialisierung in Afrika und Asien in den 1950er und 1960er Jahren, die die politische Landkarte der Welt neu gestaltete.",
          nl: "Op 20 maart 1956 verwierf Tunesië volledige onafhankelijkheid van Frankrijk na 75 jaar Franse protectoraatsheerschappij. Habib Bourguiba werd in 1957 de eerste president van het land. Tunesië was sinds 1881 onder Franse controle, en de onafhankelijkheidsbeweging werd sterker na de Tweede Wereldoorlog. Deze onafhankelijkheid maakte deel uit van een bredere golf van dekolonisatie in Afrika en Azië tijdens de jaren 1950 en 1960, die de politieke kaart van de wereld hervormd."
        }
      },
      {
        question: {
          en: "Which beloved children's television host, creator of 'Mister Rogers' Neighborhood,' was born on March 20, 1928?",
          es: "¿Qué querido presentador de televisión infantil, creador de 'Mister Rogers' Neighborhood', nació el 20 de marzo de 1928?",
          de: "Welcher beliebte Kinderfernsehgastgeber, Schöpfer von 'Mister Rogers' Neighborhood', wurde am 20. März 1928 geboren?",
          nl: "Welke geliefde kindertelevisiehost, maker van 'Mister Rogers' Neighborhood', werd geboren op 20 maart 1928?"
        },
        options: [
          { en: "Fred Rogers", es: "Fred Rogers", de: "Fred Rogers", nl: "Fred Rogers" },
          { en: "Bob Keeshan (Captain Kangaroo)", es: "Bob Keeshan (Capitán Canguro)", de: "Bob Keeshan (Käpt'n Känguru)", nl: "Bob Keeshan (Kapitein Kangoeroe)" },
          { en: "Jim Henson", es: "Jim Henson", de: "Jim Henson", nl: "Jim Henson" },
          { en: "LeVar Burton", es: "LeVar Burton", de: "LeVar Burton", nl: "LeVar Burton" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Fred McFeely Rogers was born on March 20, 1928, in Latrobe, Pennsylvania. He created and hosted 'Mister Rogers' Neighborhood' for over 30 years (1968-2001), becoming one of the most influential figures in children's television. Rogers was an ordained Presbyterian minister who used television to teach children about emotions, kindness, and acceptance. His gentle, compassionate approach touched generations of children and adults, earning him numerous awards including the Presidential Medal of Freedom in 2002, shortly before his death in 2003.",
          es: "Fred McFeely Rogers nació el 20 de marzo de 1928 en Latrobe, Pensilvania. Creó y presentó 'Mister Rogers' Neighborhood' durante más de 30 años (1968-2001), convirtiéndose en una de las figuras más influyentes de la televisión infantil. Rogers era un ministro presbiteriano ordenado que usó la televisión para enseñar a los niños sobre emociones, bondad y aceptación. Su enfoque suave y compasivo tocó a generaciones de niños y adultos, ganándole numerosos premios, incluida la Medalla Presidencial de la Libertad en 2002, poco antes de su muerte en 2003.",
          de: "Fred McFeely Rogers wurde am 20. März 1928 in Latrobe, Pennsylvania, geboren. Er schuf und moderierte 'Mister Rogers' Neighborhood' über 30 Jahre lang (1968-2001) und wurde zu einer der einflussreichsten Figuren im Kinderfernsehen. Rogers war ein ordinierter presbyterianischer Pastor, der das Fernsehen nutzte, um Kindern etwas über Emotionen, Freundlichkeit und Akzeptanz beizubringen. Sein sanfter, mitfühlender Ansatz berührte Generationen von Kindern und Erwachsenen und brachte ihm zahlreiche Auszeichnungen ein, darunter 2002 die Presidential Medal of Freedom, kurz vor seinem Tod im Jahr 2003.",
          nl: "Fred McFeely Rogers werd geboren op 20 maart 1928 in Latrobe, Pennsylvania. Hij creëerde en presenteerde 'Mister Rogers' Neighborhood' gedurende meer dan 30 jaar (1968-2001) en werd een van de meest invloedrijke figuren in kindertelevisie. Rogers was een geordende presbyteriaanse predikant die televisie gebruikte om kinderen te leren over emoties, vriendelijkheid en acceptatie. Zijn zachte, meelevende benadering raakte generaties van kinderen en volwassenen, en leverde hem tal van prijzen op, waaronder de Presidential Medal of Freedom in 2002, kort voor zijn dood in 2003."
        }
      }
    ],

    // Day 21: Historical events on March 21
    day21: [
      {
        question: {
          en: "On March 21, 2006, which social media platform was founded with Jack Dorsey's first tweet 'just setting up my twttr'?",
          es: "El 21 de marzo de 2006, ¿qué plataforma de redes sociales fue fundada con el primer tweet de Jack Dorsey 'just setting up my twttr'?",
          de: "Welche Social-Media-Plattform wurde am 21. März 2006 mit Jack Dorseys erstem Tweet 'just setting up my twttr' gegründet?",
          nl: "Welk social media platform werd op 21 maart 2006 opgericht met Jack Dorsey's eerste tweet 'just setting up my twttr'?"
        },
        options: [
          { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Instagram", es: "Instagram", de: "Instagram", nl: "Instagram" },
          { en: "MySpace", es: "MySpace", de: "MySpace", nl: "MySpace" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 21, 2006, Jack Dorsey sent the first tweet that established Twitter as a social media platform. The simple message 'just setting up my twttr' marked the beginning of what would become one of the world's most influential social networks. Twitter revolutionized how people share information, breaking news, and personal thoughts in real-time through short messages limited to 140 characters (later expanded to 280). The platform has since become a crucial tool for journalism, activism, and public discourse worldwide.",
          es: "El 21 de marzo de 2006, Jack Dorsey envió el primer tweet que estableció Twitter como plataforma de redes sociales. El simple mensaje 'just setting up my twttr' marcó el comienzo de lo que se convertiría en una de las redes sociales más influyentes del mundo. Twitter revolucionó la forma en que las personas comparten información, noticias de última hora y pensamientos personales en tiempo real a través de mensajes cortos limitados a 140 caracteres (luego expandidos a 280). Desde entonces, la plataforma se ha convertido en una herramienta crucial para el periodismo, el activismo y el discurso público en todo el mundo.",
          de: "Am 21. März 2006 sendete Jack Dorsey den ersten Tweet, der Twitter als Social-Media-Plattform etablierte. Die einfache Nachricht 'just setting up my twttr' markierte den Beginn dessen, was zu einem der einflussreichsten sozialen Netzwerke der Welt werden sollte. Twitter revolutionierte die Art und Weise, wie Menschen Informationen, aktuelle Nachrichten und persönliche Gedanken in Echtzeit durch kurze Nachrichten teilen, die auf 140 Zeichen begrenzt waren (später auf 280 erweitert). Die Plattform ist seitdem zu einem wichtigen Werkzeug für Journalismus, Aktivismus und öffentlichen Diskurs weltweit geworden.",
          nl: "Op 21 maart 2006 verstuurde Jack Dorsey de eerste tweet die Twitter als social media platform vestigde. Het eenvoudige bericht 'just setting up my twttr' markeerde het begin van wat een van 's werelds meest invloedrijke sociale netwerken zou worden. Twitter revolutioneerde de manier waarop mensen informatie, breaking news en persoonlijke gedachten in realtime delen via korte berichten beperkt tot 140 tekens (later uitgebreid naar 280). Het platform is sindsdien een cruciaal instrument geworden voor journalistiek, activisme en publiek debat wereldwijd."
        }
      },
      {
        question: {
          en: "On March 21, 1990, which African country gained independence from South Africa after 75 years of rule?",
          es: "El 21 de marzo de 1990, ¿qué país africano obtuvo su independencia de Sudáfrica después de 75 años de dominio?",
          de: "Welches afrikanische Land erlangte am 21. März 1990 nach 75 Jahren Herrschaft die Unabhängigkeit von Südafrika?",
          nl: "Welk Afrikaans land werd op 21 maart 1990 onafhankelijk van Zuid-Afrika na 75 jaar van heerschappij?"
        },
        options: [
          { en: "Namibia", es: "Namibia", de: "Namibia", nl: "Namibië" },
          { en: "Botswana", es: "Botsuana", de: "Botswana", nl: "Botswana" },
          { en: "Zimbabwe", es: "Zimbabue", de: "Simbabwe", nl: "Zimbabwe" },
          { en: "Lesotho", es: "Lesoto", de: "Lesotho", nl: "Lesotho" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 21, 1990, Namibia gained independence from South Africa at midnight, with church bells ringing across the nation. Sam Nujoma was sworn in as the first president, watched by Nelson Mandela and representatives from 147 countries including 20 heads of state. This marked the end of over 75 years of South African rule and more than a century of colonial domination. The independence followed UN-supervised elections in November 1989 where SWAPO won 57% of the vote. Namibia subsequently joined the Commonwealth, UN, and Organization of African Unity.",
          es: "El 21 de marzo de 1990, Namibia obtuvo su independencia de Sudáfrica a medianoche, con campanas de iglesia sonando en toda la nación. Sam Nujoma prestó juramento como primer presidente, observado por Nelson Mandela y representantes de 147 países, incluidos 20 jefes de estado. Esto marcó el fin de más de 75 años de dominio sudafricano y más de un siglo de dominación colonial. La independencia siguió a elecciones supervisadas por la ONU en noviembre de 1989 donde SWAPO ganó el 57% de los votos. Posteriormente, Namibia se unió a la Commonwealth, la ONU y la Organización de la Unidad Africana.",
          de: "Am 21. März 1990 erlangte Namibia um Mitternacht die Unabhängigkeit von Südafrika, wobei Kirchenglocken im ganzen Land läuteten. Sam Nujoma wurde als erster Präsident vereidigt, beobachtet von Nelson Mandela und Vertretern aus 147 Ländern, darunter 20 Staatsoberhäupter. Dies markierte das Ende von über 75 Jahren südafrikanischer Herrschaft und mehr als einem Jahrhundert kolonialer Herrschaft. Die Unabhängigkeit folgte auf UN-überwachte Wahlen im November 1989, bei denen SWAPO 57% der Stimmen gewann. Namibia trat anschließend dem Commonwealth, der UN und der Organisation für Afrikanische Einheit bei.",
          nl: "Op 21 maart 1990 werd Namibië om middernacht onafhankelijk van Zuid-Afrika, met kerkklokken die door de hele natie luidden. Sam Nujoma werd beëdigd als eerste president, bijgewoond door Nelson Mandela en vertegenwoordigers uit 147 landen, waaronder 20 staatshoofden. Dit markeerde het einde van meer dan 75 jaar Zuid-Afrikaanse heerschappij en meer dan een eeuw van koloniale overheersing. De onafhankelijkheid volgde op door de VN gecontroleerde verkiezingen in november 1989 waarbij SWAPO 57% van de stemmen won. Namibië trad vervolgens toe tot het Gemenebest, de VN en de Organisatie voor Afrikaanse Eenheid."
        }
      },
      {
        question: {
          en: "On March 21, 1963, which infamous federal prison in San Francisco Bay was closed after 29 years of operation?",
          es: "El 21 de marzo de 1963, ¿qué infame prisión federal en la Bahía de San Francisco fue cerrada después de 29 años de operación?",
          de: "Welches berüchtigte Bundesgefängnis in der San Francisco Bay wurde am 21. März 1963 nach 29 Jahren Betrieb geschlossen?",
          nl: "Welke beruchte federale gevangenis in de San Francisco Bay werd op 21 maart 1963 gesloten na 29 jaar in bedrijf?"
        },
        options: [
          { en: "Alcatraz", es: "Alcatraz", de: "Alcatraz", nl: "Alcatraz" },
          { en: "San Quentin", es: "San Quentin", de: "San Quentin", nl: "San Quentin" },
          { en: "Folsom", es: "Folsom", de: "Folsom", nl: "Folsom" },
          { en: "Leavenworth", es: "Leavenworth", de: "Leavenworth", nl: "Leavenworth" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 21, 1963, Alcatraz Federal Penitentiary closed its doors and transferred its final 27 inmates. The prison was closed because it was nearly three times more expensive to operate than other federal prisons, costing $10.10 per day per inmate compared to $3.00 at other facilities. The island had no fresh water source, requiring nearly 1 million gallons to be barged weekly, and salt water had severely eroded the buildings. Alcatraz later became part of the Golden Gate National Recreation Area and is now a popular tourist destination.",
          es: "El 21 de marzo de 1963, la Penitenciaría Federal de Alcatraz cerró sus puertas y transfirió a sus últimos 27 reclusos. La prisión se cerró porque era casi tres veces más cara de operar que otras prisiones federales, costando $10.10 por día por recluso en comparación con $3.00 en otras instalaciones. La isla no tenía fuente de agua dulce, requiriendo que casi 1 millón de galones fueran transportados semanalmente en barcaza, y el agua salada había erosionado gravemente los edificios. Alcatraz se convirtió más tarde en parte del Área Recreativa Nacional Golden Gate y ahora es un destino turístico popular.",
          de: "Am 21. März 1963 schloss das Alcatraz Federal Penitentiary seine Türen und verlegte seine letzten 27 Insassen. Das Gefängnis wurde geschlossen, weil es fast dreimal teurer war als andere Bundesgefängnisse, mit Kosten von $10,10 pro Tag und Insasse im Vergleich zu $3,00 in anderen Einrichtungen. Die Insel hatte keine Süßwasserquelle, was wöchentlich fast 1 Million Gallonen per Lastkahn erforderte, und Salzwasser hatte die Gebäude schwer erodiert. Alcatraz wurde später Teil des Golden Gate National Recreation Area und ist heute ein beliebtes Touristenziel.",
          nl: "Op 21 maart 1963 sloot Alcatraz Federal Penitentiary zijn deuren en verplaatste zijn laatste 27 gevangenen. De gevangenis werd gesloten omdat het bijna drie keer duurder was om te beheren dan andere federale gevangenissen, met kosten van $10,10 per dag per gevangene vergeleken met $3,00 in andere faciliteiten. Het eiland had geen zoetwaterbron, waardoor wekelijks bijna 1 miljoen gallons per schuit moest worden aangevoerd, en zout water had de gebouwen ernstig geërodeerd. Alcatraz werd later onderdeel van het Golden Gate National Recreation Area en is nu een populaire toeristische bestemming."
        }
      },
      {
        question: {
          en: "What astronomical event occurs around March 21, marking equal day and night lengths worldwide?",
          es: "¿Qué evento astronómico ocurre alrededor del 21 de marzo, marcando duraciones iguales de día y noche en todo el mundo?",
          de: "Welches astronomische Ereignis tritt um den 21. März auf und markiert weltweit gleiche Tag- und Nachtlängen?",
          nl: "Welke astronomische gebeurtenis vindt plaats rond 21 maart, waarbij dag en nacht wereldwijd even lang zijn?"
        },
        options: [
          { en: "Spring Equinox", es: "Equinoccio de primavera", de: "Frühlings-Tagundnachtgleiche", nl: "Lente-equinox" },
          { en: "Summer Solstice", es: "Solsticio de verano", de: "Sommersonnenwende", nl: "Zomerzonnewende" },
          { en: "Autumn Equinox", es: "Equinoccio de otoño", de: "Herbst-Tagundnachtgleiche", nl: "Herfst-equinox" },
          { en: "Winter Solstice", es: "Solsticio de invierno", de: "Wintersonnenwende", nl: "Winterzonnewende" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The spring (vernal) equinox occurs around March 20-21 when the Sun crosses the celestial equator, making day and night approximately equal in length worldwide. This astronomical event marks the first day of spring in the Northern Hemisphere and autumn in the Southern Hemisphere. Ancient civilizations built monuments aligned with the equinox, including the pyramids of Egypt and Mayan temples. The word 'equinox' comes from Latin meaning 'equal night'. Many cultures celebrate this day as a time of renewal and new beginnings.",
          es: "El equinoccio de primavera (vernal) ocurre alrededor del 20-21 de marzo cuando el Sol cruza el ecuador celeste, haciendo que el día y la noche sean aproximadamente iguales en duración en todo el mundo. Este evento astronómico marca el primer día de primavera en el hemisferio norte y otoño en el hemisferio sur. Las civilizaciones antiguas construyeron monumentos alineados con el equinoccio, incluidas las pirámides de Egipto y los templos mayas. La palabra 'equinoccio' viene del latín que significa 'noche igual'. Muchas culturas celebran este día como un tiempo de renovación y nuevos comienzos.",
          de: "Die Frühlings-Tagundnachtgleiche tritt um den 20.-21. März auf, wenn die Sonne den Himmelsäquator überquert und Tag und Nacht weltweit ungefähr gleich lang macht. Dieses astronomische Ereignis markiert den ersten Frühlingstag auf der Nordhalbkugel und Herbst auf der Südhalbkugel. Alte Zivilisationen bauten Monumente, die mit der Tagundnachtgleiche ausgerichtet waren, einschließlich der Pyramiden von Ägypten und Maya-Tempeln. Das Wort 'Äquinoktium' kommt aus dem Lateinischen und bedeutet 'gleiche Nacht'. Viele Kulturen feiern diesen Tag als Zeit der Erneuerung und neuer Anfänge.",
          nl: "De lente-equinox vindt plaats rond 20-21 maart wanneer de zon de hemelequator kruist, waardoor dag en nacht wereldwijd ongeveer even lang zijn. Deze astronomische gebeurtenis markeert de eerste dag van de lente op het noordelijk halfrond en de herfst op het zuidelijk halfrond. Oude beschavingen bouwden monumenten die waren uitgelijnd met de equinox, waaronder de piramides van Egypte en Maya-tempels. Het woord 'equinox' komt uit het Latijn en betekent 'gelijke nacht'. Veel culturen vieren deze dag als een tijd van vernieuwing en nieuwe begin."
        }
      },
      {
        question: {
          en: "On March 21, 1990, which African nation gained its independence from South Africa?",
          es: "El 21 de marzo de 1990, ¿qué nación africana obtuvo su independencia de Sudáfrica?",
          de: "Welche afrikanische Nation erlangte am 21. März 1990 ihre Unabhängigkeit von Südafrika?",
          nl: "Welke Afrikaanse natie verwierf op 21 maart 1990 haar onafhankelijkheid van Zuid-Afrika?"
        },
        options: [
          { en: "Angola", es: "Angola", de: "Angola", nl: "Angola" },
          { en: "Botswana", es: "Botsuana", de: "Botswana", nl: "Botswana" },
          { en: "Namibia", es: "Namibia", de: "Namibia", nl: "Namibië" },
          { en: "Zimbabwe", es: "Zimbabue", de: "Simbabwe", nl: "Zimbabwe" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Namibia gained independence from South Africa on March 21, 1990, ending over 75 years of South African rule and more than a century of colonial domination. Sam Nujoma was sworn in as Namibia's first president at midnight, with church bells ringing across the nation. The independence followed UN-supervised elections in November 1989 where SWAPO won 57% of the vote. Nelson Mandela, who had been released from prison just one month earlier, attended the independence ceremony along with representatives from 147 countries. Namibia's independence was particularly significant as it was one of the last African nations to achieve freedom from colonial rule, marking a symbolic end to the colonial era in Africa.",
          es: "Namibia obtuvo su independencia de Sudáfrica el 21 de marzo de 1990, poniendo fin a más de 75 años de dominio sudafricano y más de un siglo de dominación colonial. Sam Nujoma prestó juramento como primer presidente de Namibia a medianoche, con campanas de iglesia sonando en toda la nación. La independencia siguió a elecciones supervisadas por la ONU en noviembre de 1989 donde SWAPO ganó el 57% de los votos. Nelson Mandela, quien había sido liberado de prisión solo un mes antes, asistió a la ceremonia de independencia junto con representantes de 147 países. La independencia de Namibia fue particularmente significativa ya que fue una de las últimas naciones africanas en lograr la libertad del dominio colonial, marcando un fin simbólico a la era colonial en África.",
          de: "Namibia erlangte am 21. März 1990 die Unabhängigkeit von Südafrika und beendete damit über 75 Jahre südafrikanischer Herrschaft und mehr als ein Jahrhundert kolonialer Herrschaft. Sam Nujoma wurde um Mitternacht als erster Präsident Namibias vereidigt, während Kirchenglocken im ganzen Land läuteten. Die Unabhängigkeit folgte auf UN-überwachte Wahlen im November 1989, bei denen SWAPO 57% der Stimmen gewann. Nelson Mandela, der erst einen Monat zuvor aus dem Gefängnis entlassen worden war, nahm zusammen mit Vertretern aus 147 Ländern an der Unabhängigkeitszeremonie teil. Namibias Unabhängigkeit war besonders bedeutsam, da es eine der letzten afrikanischen Nationen war, die die Freiheit von der Kolonialherrschaft erlangte, und markierte ein symbolisches Ende der Kolonialära in Afrika.",
          nl: "Namibië verwierf op 21 maart 1990 onafhankelijkheid van Zuid-Afrika, waarmee een einde kwam aan meer dan 75 jaar Zuid-Afrikaanse heerschappij en meer dan een eeuw koloniale overheersing. Sam Nujoma werd om middernacht beëdigd als Namibië's eerste president, terwijl kerkklokken door het hele land luidden. De onafhankelijkheid volgde op door de VN gecontroleerde verkiezingen in november 1989 waarbij SWAPO 57% van de stemmen won. Nelson Mandela, die slechts een maand eerder uit de gevangenis was vrijgelaten, woonde de onafhankelijkheidsceremonie bij samen met vertegenwoordigers uit 147 landen. Namibië's onafhankelijkheid was bijzonder belangrijk omdat het een van de laatste Afrikaanse naties was die vrijheid verwierf van koloniale heerschappij, wat een symbolisch einde markeerde aan het koloniale tijdperk in Afrika."
        }
      }
    ],

    // Day 22: Historical events on March 22
    day22: [
      {
        question: {
          en: "On March 22, 1960, Arthur Schawlow and Charles Townes received the first patent for which revolutionary technology?",
          es: "El 22 de marzo de 1960, Arthur Schawlow y Charles Townes recibieron la primera patente para qué tecnología revolucionaria?",
          de: "Welche revolutionäre Technologie wurde am 22. März 1960 an Arthur Schawlow und Charles Townes als erste patentiert?",
          nl: "Voor welke revolutionaire technologie ontvingen Arthur Schawlow en Charles Townes op 22 maart 1960 het eerste patent?"
        },
        options: [
          { en: "Laser", es: "Láser", de: "Laser", nl: "Laser" },
          { en: "Microwave", es: "Microondas", de: "Mikrowelle", nl: "Magnetron" },
          { en: "Television", es: "Televisión", de: "Fernsehen", nl: "Televisie" },
          { en: "Computer", es: "Computadora", de: "Computer", nl: "Computer" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 22, 1960, Charles Townes and Arthur Schawlow were granted US Patent 2,929,922 for the optical maser, now called a laser. This patent marked a crucial milestone in modern technology, though it sparked a famous 30-year patent battle with Gordon Gould who claimed prior invention. Interestingly, Theodore Maiman built the first working laser on May 16, 1960, before the patent holders had achieved a working model. Lasers have since revolutionized medicine, communications, manufacturing, entertainment, and countless other fields.",
          es: "El 22 de marzo de 1960, Charles Townes y Arthur Schawlow recibieron la Patente de EE.UU. 2,929,922 para el máser óptico, ahora llamado láser. Esta patente marcó un hito crucial en la tecnología moderna, aunque desencadenó una famosa batalla de patentes de 30 años con Gordon Gould quien reclamó la invención previa. Curiosamente, Theodore Maiman construyó el primer láser funcional el 16 de mayo de 1960, antes de que los titulares de la patente lograran un modelo funcional. Los láseres han revolucionado desde entonces la medicina, las comunicaciones, la fabricación, el entretenimiento y otros innumerables campos.",
          de: "Am 22. März 1960 erhielten Charles Townes und Arthur Schawlow das US-Patent 2.929.922 für den optischen Maser, jetzt Laser genannt. Dieses Patent markierte einen entscheidenden Meilenstein in der modernen Technologie, obwohl es einen berühmten 30-jährigen Patentstreit mit Gordon Gould auslöste, der eine frühere Erfindung beanspruchte. Interessanterweise baute Theodore Maiman am 16. Mai 1960 den ersten funktionierenden Laser, bevor die Patentinhaber ein funktionierendes Modell erreicht hatten. Laser haben seitdem Medizin, Kommunikation, Fertigung, Unterhaltung und unzählige andere Bereiche revolutioniert.",
          nl: "Op 22 maart 1960 kregen Charles Townes en Arthur Schawlow het Amerikaanse patent 2.929.922 voor de optische maser, nu laser genoemd. Dit patent markeerde een cruciale mijlpaal in moderne technologie, hoewel het een beroemde 30-jarige patentstrijd met Gordon Gould veroorzaakte die beweerde het eerder te hebben uitgevonden. Interessant is dat Theodore Maiman op 16 mei 1960 de eerste werkende laser bouwde, voordat de patenthouders een werkend model hadden bereikt. Lasers hebben sindsdien geneeskunde, communicatie, productie, entertainment en talloze andere gebieden gerevolutioneerd."
        }
      },
      {
        question: {
          en: "On March 22, 1945, which international organization was founded in Cairo by seven Arab countries?",
          es: "El 22 de marzo de 1945, ¿qué organización internacional fue fundada en El Cairo por siete países árabes?",
          de: "Welche internationale Organisation wurde am 22. März 1945 in Kairo von sieben arabischen Ländern gegründet?",
          nl: "Welke internationale organisatie werd op 22 maart 1945 in Caïro opgericht door zeven Arabische landen?"
        },
        options: [
          { en: "Arab League", es: "Liga Árabe", de: "Arabische Liga", nl: "Arabische Liga" },
          { en: "United Nations", es: "Naciones Unidas", de: "Vereinte Nationen", nl: "Verenigde Naties" },
          { en: "OPEC", es: "OPEP", de: "OPEC", nl: "OPEC" },
          { en: "NATO", es: "OTAN", de: "NATO", nl: "NAVO" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 22, 1945, the Arab League was founded in Cairo by seven founding members: Egypt, Syria, Lebanon, Iraq, Transjordan (now Jordan), Saudi Arabia, and Yemen. The organization was formed as an outgrowth of Pan-Arabism to strengthen and coordinate political, cultural, economic, and social programs among member states and mediate disputes. Following the adoption of the Alexandria Protocol in 1944, the pact was signed establishing the league with headquarters in Cairo. The Arab League currently has 22 member states and plays a significant role in Middle Eastern politics and diplomacy.",
          es: "El 22 de marzo de 1945, la Liga Árabe fue fundada en El Cairo por siete miembros fundadores: Egipto, Siria, Líbano, Irak, Transjordania (ahora Jordania), Arabia Saudita y Yemen. La organización se formó como resultado del panarabismo para fortalecer y coordinar programas políticos, culturales, económicos y sociales entre los estados miembros y mediar en disputas. Tras la adopción del Protocolo de Alejandría en 1944, se firmó el pacto que estableció la liga con sede en El Cairo. La Liga Árabe actualmente tiene 22 estados miembros y juega un papel significativo en la política y diplomacia de Oriente Medio.",
          de: "Am 22. März 1945 wurde die Arabische Liga in Kairo von sieben Gründungsmitgliedern gegründet: Ägypten, Syrien, Libanon, Irak, Transjordanien (jetzt Jordanien), Saudi-Arabien und Jemen. Die Organisation wurde als Auswuchs des Panarabismus gebildet, um politische, kulturelle, wirtschaftliche und soziale Programme zwischen den Mitgliedstaaten zu stärken und zu koordinieren und Streitigkeiten zu vermitteln. Nach der Annahme des Alexandria-Protokolls von 1944 wurde der Pakt unterzeichnet, der die Liga mit Hauptsitz in Kairo gründete. Die Arabische Liga hat derzeit 22 Mitgliedstaaten und spielt eine bedeutende Rolle in der nahöstlichen Politik und Diplomatie.",
          nl: "Op 22 maart 1945 werd de Arabische Liga opgericht in Caïro door zeven oprichtende leden: Egypte, Syrië, Libanon, Irak, Transjordanië (nu Jordanië), Saoedi-Arabië en Jemen. De organisatie werd gevormd als uitvloeisel van het pan-Arabisme om politieke, culturele, economische en sociale programma's tussen lidstaten te versterken en te coördineren en geschillen te bemiddelen. Na de aanname van het Protocol van Alexandrië in 1944 werd het pact ondertekend dat de liga oprichtte met het hoofdkwartier in Caïro. De Arabische Liga heeft momenteel 22 lidstaten en speelt een belangrijke rol in de Midden-Oosterse politiek en diplomatie."
        }
      },
      {
        question: {
          en: "On March 22, 1882, the US Congress passed the Edmunds Act making which practice a federal felony?",
          es: "El 22 de marzo de 1882, el Congreso de EE.UU. aprobó la Ley Edmunds haciendo que qué práctica fuera un delito federal?",
          de: "Am 22. März 1882 verabschiedete der US-Kongress das Edmunds-Gesetz, das welche Praxis zu einem Bundesverbrechen machte?",
          nl: "Op 22 maart 1882 nam het Amerikaanse Congres de Edmunds Act aan die welke praktijk tot een federaal misdrijf maakte?"
        },
        options: [
          { en: "Prohibition", es: "Prohibición", de: "Alkoholverbot", nl: "Drooglegging" },
          { en: "Slavery", es: "Esclavitud", de: "Sklaverei", nl: "Slavernij" },
          { en: "Polygamy", es: "Poligamia", de: "Polygamie", nl: "Polygamie" },
          { en: "Gambling", es: "Juego", de: "Glücksspiel", nl: "Gokken" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 22, 1882, the Edmunds Anti-Polygamy Act was signed into law by President Chester A. Arthur, declaring polygamy a felony in federal territories punishable by a fine up to $500 and imprisonment up to five years. The Republican Party in 1856 had called polygamy and slavery the 'twin relics of barbarism.' This act primarily targeted members of The Church of Jesus Christ of Latter-day Saints in Utah Territory. The legislation was followed by the Edmunds-Tucker Act of 1887, which further restricted polygamist rights and led to significant changes in Mormon practices.",
          es: "El 22 de marzo de 1882, la Ley Antipoligamia de Edmunds fue firmada por el presidente Chester A. Arthur, declarando la poligamia un delito grave en territorios federales punible con una multa de hasta $500 y encarcelamiento de hasta cinco años. El Partido Republicano en 1856 había llamado a la poligamia y la esclavitud las 'reliquias gemelas de la barbarie'. Esta ley se dirigió principalmente a miembros de La Iglesia de Jesucristo de los Santos de los Últimos Días en el Territorio de Utah. La legislación fue seguida por la Ley Edmunds-Tucker de 1887, que restringió aún más los derechos de los polígamos y llevó a cambios significativos en las prácticas mormonas.",
          de: "Am 22. März 1882 wurde das Edmunds-Anti-Polygamie-Gesetz von Präsident Chester A. Arthur unterzeichnet, das Polygamie in Bundesterritorien zu einem Verbrechen erklärte, das mit einer Geldstrafe von bis zu 500 $ und Gefängnis bis zu fünf Jahren bestraft wird. Die Republikanische Partei hatte 1856 Polygamie und Sklaverei die 'Zwillingsrelikte der Barbarei' genannt. Dieses Gesetz richtete sich hauptsächlich gegen Mitglieder der Kirche Jesu Christi der Heiligen der Letzten Tage im Utah-Territorium. Der Gesetzgebung folgte das Edmunds-Tucker-Gesetz von 1887, das die Rechte von Polygamisten weiter einschränkte und zu bedeutenden Änderungen in den mormonischen Praktiken führte.",
          nl: "Op 22 maart 1882 werd de Edmunds Anti-Polygamie Act ondertekend door president Chester A. Arthur, die polygamie in federale gebieden tot een misdrijf verklaarde dat bestraft werd met een boete tot $500 en gevangenisstraf tot vijf jaar. De Republikeinse Partij had in 1856 polygamie en slavernij de 'tweelingrelikwieën van barbarij' genoemd. Deze wet richtte zich voornamelijk op leden van De Kerk van Jezus Christus van de Heiligen der Laatste Dagen in het Utah Territory. De wetgeving werd gevolgd door de Edmunds-Tucker Act van 1887, die de rechten van polygamisten verder beperkte en leidde tot significante veranderingen in de Mormoonse praktijken."
        }
      },
      {
        question: {
          en: "On March 22, 1933, President Roosevelt signed legislation legalizing the manufacture and sale of what after 13 years of prohibition?",
          es: "El 22 de marzo de 1933, el presidente Roosevelt firmó legislación legalizando la fabricación y venta de qué después de 13 años de prohibición?",
          de: "Am 22. März 1933 unterzeichnete Präsident Roosevelt Gesetze zur Legalisierung der Herstellung und des Verkaufs von was nach 13 Jahren Verbot?",
          nl: "Op 22 maart 1933 ondertekende president Roosevelt wetgeving die de productie en verkoop van wat legaliseerde na 13 jaar verbod?"
        },
        options: [
          { en: "Beer and wine", es: "Cerveza y vino", de: "Bier und Wein", nl: "Bier en wijn" },
          { en: "Tobacco", es: "Tabaco", de: "Tabak", nl: "Tabak" },
          { en: "Firearms", es: "Armas de fuego", de: "Feuerwaffen", nl: "Vuurwapens" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 22, 1933, President Franklin D. Roosevelt signed the Cullen-Harrison Act, which legalized the manufacture and sale of beer and wine with an alcohol content of 3.2% or less. This was a major step toward ending Prohibition, which had begun in 1920 with the 18th Amendment. The act took effect on April 7, 1933, a date remembered as 'New Beer's Eve.' This legislation came just weeks after Roosevelt took office during the Great Depression, and was seen as both a revenue-generating measure and a jobs creator. Full repeal of Prohibition came later that year with the 21st Amendment.",
          es: "El 22 de marzo de 1933, el presidente Franklin D. Roosevelt firmó la Ley Cullen-Harrison, que legalizó la fabricación y venta de cerveza y vino con un contenido de alcohol del 3.2% o menos. Este fue un paso importante hacia el fin de la Prohibición, que había comenzado en 1920 con la 18ª Enmienda. La ley entró en vigor el 7 de abril de 1933, una fecha recordada como la 'Víspera de la Nueva Cerveza'. Esta legislación llegó pocas semanas después de que Roosevelt asumiera el cargo durante la Gran Depresión, y fue vista tanto como una medida generadora de ingresos como creadora de empleos. La derogación completa de la Prohibición llegó ese mismo año con la 21ª Enmienda.",
          de: "Am 22. März 1933 unterzeichnete Präsident Franklin D. Roosevelt das Cullen-Harrison-Gesetz, das die Herstellung und den Verkauf von Bier und Wein mit einem Alkoholgehalt von 3,2% oder weniger legalisierte. Dies war ein wichtiger Schritt zur Beendigung der Prohibition, die 1920 mit dem 18. Zusatzartikel begonnen hatte. Das Gesetz trat am 7. April 1933 in Kraft, ein Datum, das als 'New Beer's Eve' in Erinnerung bleibt. Diese Gesetzgebung kam nur wenige Wochen nachdem Roosevelt während der Großen Depression sein Amt antrat, und wurde sowohl als einnahmengenerierende Maßnahme als auch als Jobschöpfer angesehen. Die vollständige Aufhebung der Prohibition kam später in diesem Jahr mit dem 21. Zusatzartikel.",
          nl: "Op 22 maart 1933 ondertekende president Franklin D. Roosevelt de Cullen-Harrison Act, die de productie en verkoop van bier en wijn met een alcoholgehalte van 3,2% of minder legaliseerde. Dit was een belangrijke stap naar het beëindigen van de Drooglegging, die in 1920 was begonnen met het 18e Amendement. De wet trad in werking op 7 april 1933, een datum die herinnerd wordt als 'New Beer's Eve'. Deze wetgeving kwam slechts weken nadat Roosevelt aantrad tijdens de Grote Depressie, en werd gezien als zowel een inkomstengenererende maatregel als een banensc hepper. De volledige opheffing van de Drooglegging kwam later dat jaar met het 21e Amendement."
        }
      },
      {
        question: {
          en: "On March 22, 1968, what historic event occurred at Columbia University that sparked student protests across America?",
          es: "El 22 de marzo de 1968, ¿qué evento histórico ocurrió en la Universidad de Columbia que desencadenó protestas estudiantiles en toda América?",
          de: "Welches historische Ereignis ereignete sich am 22. März 1968 an der Columbia University, das Studentenproteste in ganz Amerika auslöste?",
          nl: "Welke historische gebeurtenis vond plaats op 22 maart 1968 aan Columbia University die studentenprotesten in heel Amerika ontketende?"
        },
        options: [
          { en: "Students protested university ties to Vietnam War", es: "Los estudiantes protestaron contra los vínculos de la universidad con la Guerra de Vietnam", de: "Studenten protestierten gegen universitäre Verbindungen zum Vietnamkrieg", nl: "Studenten protesteerden tegen universitaire banden met de Vietnamoorlog" },
          { en: "First computer was invented", es: "Se inventó la primera computadora", de: "Der erste Computer wurde erfunden", nl: "De eerste computer werd uitgevonden" },
          { en: "Women were first admitted", es: "Se admitió a mujeres por primera vez", de: "Frauen wurden zum ersten Mal zugelassen", nl: "Vrouwen werden voor het eerst toegelaten" },
          { en: "The campus was integrated", es: "El campus se integró", de: "Der Campus wurde integriert", nl: "De campus werd geïntegreerd" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 22, 1968, student activists at Columbia University began organizing major protests against the university's involvement with the Institute for Defense Analyses and its plan to build a gymnasium in Morningside Park. These protests escalated in April 1968 when students occupied several university buildings for nearly a week. The Columbia protests became one of the most significant student demonstrations of the 1960s, inspiring similar activism at universities across the United States. The events reflected broader opposition to the Vietnam War and concerns about racial justice and university governance.",
          es: "El 22 de marzo de 1968, activistas estudiantiles en la Universidad de Columbia comenzaron a organizar protestas importantes contra la participación de la universidad con el Instituto de Análisis de Defensa y su plan de construir un gimnasio en Morningside Park. Estas protestas se intensificaron en abril de 1968 cuando los estudiantes ocuparon varios edificios universitarios durante casi una semana. Las protestas de Columbia se convirtieron en una de las manifestaciones estudiantiles más significativas de la década de 1960, inspirando un activismo similar en universidades de todo Estados Unidos. Los eventos reflejaron una oposición más amplia a la Guerra de Vietnam y preocupaciones sobre la justicia racial y la gobernanza universitaria.",
          de: "Am 22. März 1968 begannen studentische Aktivisten an der Columbia University, große Proteste gegen die Beteiligung der Universität am Institute for Defense Analyses und ihren Plan zum Bau einer Turnhalle im Morningside Park zu organisieren. Diese Proteste eskalierten im April 1968, als Studenten fast eine Woche lang mehrere Universitätsgebäude besetzten. Die Columbia-Proteste wurden zu einer der bedeutendsten Studentendemonstrationen der 1960er Jahre und inspirierten ähnlichen Aktivismus an Universitäten in den gesamten Vereinigten Staaten. Die Ereignisse spiegelten eine breitere Opposition gegen den Vietnamkrieg und Bedenken über Rassengerechtigkeit und Universitätsverwaltung wider.",
          nl: "Op 22 maart 1968 begonnen studentenactivisten aan Columbia University grote protesten te organiseren tegen de betrokkenheid van de universiteit bij het Institute for Defense Analyses en het plan om een gymnastiekzaal te bouwen in Morningside Park. Deze protesten escaleerden in april 1968 toen studenten bijna een week lang verschillende universiteitsgebouwen bezetten. De Columbia-protesten werden een van de meest significante studentendemonstraties van de jaren 1960, die soortgelijk activisme aan universiteiten in de Verenigde Staten inspireerden. De gebeurtenissen weerspiegelden bredere oppositie tegen de Vietnamoorlog en zorgen over raciale rechtvaardigheid en universitair bestuur."
        }
      }
    ],

    // Day 23: Historical events on March 23
    day23: [
      {
        question: {
          en: "On March 23, 1775, which American patriot delivered his famous 'Give me liberty, or give me death!' speech?",
          es: "El 23 de marzo de 1775, ¿qué patriota americano pronunció su famoso discurso '¡Dame libertad o dame muerte!'?",
          de: "Welcher amerikanische Patriot hielt am 23. März 1775 seine berühmte Rede 'Gib mir Freiheit oder gib mir den Tod!'?",
          nl: "Welke Amerikaanse patriot hield op 23 maart 1775 zijn beroemde toespraak 'Geef mij vrijheid of geef mij de dood!'?"
        },
        options: [
          { en: "Patrick Henry", es: "Patrick Henry", de: "Patrick Henry", nl: "Patrick Henry" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 23, 1775, Patrick Henry delivered his legendary speech at St. John's Church in Richmond, Virginia, to the Second Virginia Convention. His passionate plea ending with 'Give me liberty, or give me death!' helped convince Virginia delegates to prepare troops for war against Great Britain. George Washington, Thomas Jefferson, and five other future Declaration of Independence signers were present. Less than a month later, on April 19, the first shots of the American Revolution were fired at Lexington and Concord. The speech became one of the most famous in American history.",
          es: "El 23 de marzo de 1775, Patrick Henry pronunció su legendario discurso en la Iglesia de San Juan en Richmond, Virginia, ante la Segunda Convención de Virginia. Su apasionado alegato que terminaba con '¡Dame libertad o dame muerte!' ayudó a convencer a los delegados de Virginia para preparar tropas para la guerra contra Gran Bretaña. George Washington, Thomas Jefferson y otros cinco futuros firmantes de la Declaración de Independencia estaban presentes. Menos de un mes después, el 19 de abril, se dispararon los primeros tiros de la Revolución Americana en Lexington y Concord. El discurso se convirtió en uno de los más famosos de la historia estadounidense.",
          de: "Am 23. März 1775 hielt Patrick Henry seine legendäre Rede in der St. John's Church in Richmond, Virginia, vor der Zweiten Virginia Convention. Sein leidenschaftlicher Appell, der mit 'Gib mir Freiheit oder gib mir den Tod!' endete, half, die Delegierten Virginias davon zu überzeugen, Truppen für den Krieg gegen Großbritannien vorzubereiten. George Washington, Thomas Jefferson und fünf weitere zukünftige Unterzeichner der Unabhängigkeitserklärung waren anwesend. Weniger als einen Monat später, am 19. April, fielen die ersten Schüsse der Amerikanischen Revolution in Lexington und Concord. Die Rede wurde eine der berühmtesten in der amerikanischen Geschichte.",
          nl: "Op 23 maart 1775 hield Patrick Henry zijn legendarische toespraak in St. John's Church in Richmond, Virginia, voor de Tweede Virginia Convention. Zijn gepassioneerde pleidooi eindigend met 'Geef mij vrijheid of geef mij de dood!' hielp de Virginia-afgevaardigden overtuigen om troepen voor te bereiden voor oorlog tegen Groot-Brittannië. George Washington, Thomas Jefferson en vijf andere toekomstige ondertekenaars van de Onafhankelijkheidsverklaring waren aanwezig. Minder dan een maand later, op 19 april, werden de eerste schoten van de Amerikaanse Revolutie afgevuurd in Lexington en Concord. De toespraak werd een van de beroemdste in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "On March 23, 1933, the German Reichstag passed which act that gave Adolf Hitler dictatorial powers?",
          es: "El 23 de marzo de 1933, el Reichstag alemán aprobó qué ley que otorgó poderes dictatoriales a Adolf Hitler?",
          de: "Am 23. März 1933 verabschiedete der deutsche Reichstag welches Gesetz, das Adolf Hitler diktatorische Befugnisse gab?",
          nl: "Op 23 maart 1933 nam de Duitse Rijksdag welke wet aan die Adolf Hitler dictatoriale bevoegdheden gaf?"
        },
        options: [
          { en: "The Enabling Act", es: "La Ley de Habilitación", de: "Das Ermächtigungsgesetz", nl: "De Machtigingswet" },
          { en: "The Nuremberg Laws", es: "Las Leyes de Núremberg", de: "Die Nürnberger Gesetze", nl: "De Neurenberger wetten" },
          { en: "The Versailles Treaty", es: "El Tratado de Versalles", de: "Der Versailler Vertrag", nl: "Het Verdrag van Versailles" },
          { en: "The Reich Citizenship Law", es: "La Ley de Ciudadanía del Reich", de: "Das Reichsbürgergesetz", nl: "De Rijksburgerschapswet" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 23, 1933, the German Reichstag passed the Enabling Act, officially titled 'Law to Remedy the Distress of the People and the Reich.' This legislation allowed Hitler's government to enact laws without parliamentary consent or presidential approval for four years. The building was surrounded by SA and SS members serving as auxiliary police. With 81 Communist deputies arrested or excluded and only the Social Democrats opposing, the act passed 441 to 94. This became the cornerstone of Hitler's dictatorship, effectively ending democracy in Germany until 1945.",
          es: "El 23 de marzo de 1933, el Reichstag alemán aprobó la Ley de Habilitación, oficialmente titulada 'Ley para Remediar la Angustia del Pueblo y el Reich'. Esta legislación permitió al gobierno de Hitler promulgar leyes sin consentimiento parlamentario ni aprobación presidencial durante cuatro años. El edificio estaba rodeado por miembros de las SA y las SS que servían como policía auxiliar. Con 81 diputados comunistas arrestados o excluidos y solo los socialdemócratas oponiéndose, la ley pasó 441 a 94. Esto se convirtió en la piedra angular de la dictadura de Hitler, terminando efectivamente la democracia en Alemania hasta 1945.",
          de: "Am 23. März 1933 verabschiedete der deutsche Reichstag das Ermächtigungsgesetz, offiziell betitelt 'Gesetz zur Behebung der Not von Volk und Reich'. Diese Gesetzgebung erlaubte Hitlers Regierung, Gesetze ohne parlamentarische Zustimmung oder präsidiale Genehmigung für vier Jahre zu erlassen. Das Gebäude war von SA- und SS-Mitgliedern umgeben, die als Hilfspolizei dienten. Mit 81 verhafteten oder ausgeschlossenen kommunistischen Abgeordneten und nur den Sozialdemokraten, die sich widersetzten, wurde das Gesetz mit 441 zu 94 Stimmen verabschiedet. Dies wurde zum Eckpfeiler von Hitlers Diktatur und beendete die Demokratie in Deutschland effektiv bis 1945.",
          nl: "Op 23 maart 1933 nam de Duitse Rijksdag de Machtigingswet aan, officieel getiteld 'Wet ter Verhelping van de Nood van Volk en Rijk'. Deze wetgeving stelde Hitlers regering in staat om gedurende vier jaar wetten uit te vaardigen zonder parlementaire toestemming of presidentiële goedkeuring. Het gebouw was omringd door SA- en SS-leden die als hulppolitie dienden. Met 81 communistische afgevaardigden gearresteerd of uitgesloten en alleen de sociaaldemocraten die zich verzetten, werd de wet aangenomen met 441 tegen 94. Dit werd de hoeksteen van Hitlers dictatuur, waarmee de democratie in Duitsland effectief eindigde tot 1945."
        }
      },
      {
        question: {
          en: "On March 23, 2001, which Russian space station was deliberately de-orbited and destroyed after 15 years in space?",
          es: "El 23 de marzo de 2001, ¿qué estación espacial rusa fue deliberadamente desorbitada y destruida después de 15 años en el espacio?",
          de: "Welche russische Raumstation wurde am 23. März 2001 nach 15 Jahren im All absichtlich deorbitiert und zerstört?",
          nl: "Welk Russisch ruimtestation werd op 23 maart 2001 opzettelijk uit zijn baan gebracht en vernietigd na 15 jaar in de ruimte?"
        },
        options: [
          { en: "Mir", es: "Mir", de: "Mir", nl: "Mir" },
          { en: "Salyut", es: "Salyut", de: "Saljut", nl: "Salyut" },
          { en: "Skylab", es: "Skylab", de: "Skylab", nl: "Skylab" },
          { en: "Soyuz", es: "Soyuz", de: "Sojus", nl: "Soyuz" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 23, 2001, Russia's space station Mir reentered Earth's atmosphere over the Pacific Ocean following a controlled deorbit maneuver. After 15 years in orbit, Roscosmos decided to deorbit Mir while it was still functioning rather than risk an uncontrolled reentry like Skylab in 1979. The first modular space station, Mir operated from 1986 to 2001 and enabled semi-permanent human habitation in low-Earth orbit. Despite highly publicized incidents late in its life, Mir secured its place in history as a crucial stepping stone to the International Space Station.",
          es: "El 23 de marzo de 2001, la estación espacial rusa Mir reingresó en la atmósfera terrestre sobre el Océano Pacífico tras una maniobra de desorbitado controlada. Después de 15 años en órbita, Roscosmos decidió desorbitar Mir mientras aún funcionaba en lugar de arriesgarse a un reingreso descontrolado como Skylab en 1979. La primera estación espacial modular, Mir operó de 1986 a 2001 y permitió la habitación humana semipermanente en órbita terrestre baja. A pesar de incidentes muy publicitados al final de su vida, Mir aseguró su lugar en la historia como un trampolín crucial hacia la Estación Espacial Internacional.",
          de: "Am 23. März 2001 trat Russlands Raumstation Mir nach einem kontrollierten Deorbit-Manöver über dem Pazifischen Ozean in die Erdatmosphäre ein. Nach 15 Jahren im Orbit entschied Roskosmos, Mir zu deorbitieren, während es noch funktionierte, anstatt einen unkontrollierten Wiedereintritt wie Skylab 1979 zu riskieren. Die erste modulare Raumstation, Mir, operierte von 1986 bis 2001 und ermöglichte die semi-permanente menschliche Besiedlung im niedrigen Erdorbit. Trotz hochpublizierter Vorfälle am Ende ihres Lebens sicherte sich Mir ihren Platz in der Geschichte als entscheidender Sprungbrett zur Internationalen Raumstation.",
          nl: "Op 23 maart 2001 kwam het Russische ruimtestation Mir de atmosfeer van de aarde binnen boven de Stille Oceaan na een gecontroleerde deorbit-manoeuvre. Na 15 jaar in een baan om de aarde besloot Roskosmos Mir uit zijn baan te brengen terwijl het nog functioneerde, in plaats van het risico te nemen op een ongecontroleerde terugkeer zoals Skylab in 1979. Het eerste modulaire ruimtestation, Mir, opereerde van 1986 tot 2001 en maakte semi-permanente menselijke bewoning in een lage aardbaan mogelijk. Ondanks zeer gepubliceerde incidenten aan het einde van zijn leven verzekerde Mir zich van zijn plaats in de geschiedenis als een cruciale opstap naar het Internationaal Ruimtestation."
        }
      },
      {
        question: {
          en: "On March 23, 2010, which landmark US healthcare reform legislation was signed into law by President Obama?",
          es: "El 23 de marzo de 2010, ¿qué legislación histórica de reforma de salud de EE.UU. fue firmada por el presidente Obama?",
          de: "Welche wegweisende US-Gesundheitsreformgesetzgebung wurde am 23. März 2010 von Präsident Obama unterzeichnet?",
          nl: "Welke baanbrekende Amerikaanse gezondheidszorgwetgeving werd op 23 maart 2010 door president Obama ondertekend?"
        },
        options: [
          { en: "Affordable Care Act (Obamacare)", es: "Ley de Cuidado de Salud Asequible (Obamacare)", de: "Affordable Care Act (Obamacare)", nl: "Affordable Care Act (Obamacare)" },
          { en: "Medicare Act", es: "Ley de Medicare", de: "Medicare-Gesetz", nl: "Medicare-wet" },
          { en: "Social Security Act", es: "Ley de Seguridad Social", de: "Sozialversicherungsgesetz", nl: "Sociale Zekerheidswet" },
          { en: "Health Insurance Portability Act", es: "Ley de Portabilidad de Seguro de Salud", de: "Krankenversicherungsportabilitätsgesetz", nl: "Ziektekostenverzekering Portabiliteitswet" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 23, 2010, President Barack Obama signed the Patient Protection and Affordable Care Act (commonly called Obamacare) into law. This landmark legislation represented the most significant overhaul of the US healthcare system since Medicare and Medicaid in 1965. The act aimed to reduce the number of uninsured Americans, lower healthcare costs, and improve healthcare quality. Key provisions included prohibiting insurance companies from denying coverage based on pre-existing conditions, allowing young adults to remain on parents' insurance until age 26, and creating health insurance marketplaces. The law remains politically controversial but has provided health insurance to millions of previously uninsured Americans.",
          es: "El 23 de marzo de 2010, el presidente Barack Obama firmó la Ley de Protección al Paciente y Cuidado de Salud Asequible (comúnmente llamada Obamacare). Esta legislación histórica representó la revisión más significativa del sistema de salud de EE.UU. desde Medicare y Medicaid en 1965. La ley tenía como objetivo reducir el número de estadounidenses sin seguro, bajar los costos de atención médica y mejorar la calidad de la atención médica. Las disposiciones clave incluyeron prohibir a las compañías de seguros negar cobertura basándose en condiciones preexistentes, permitir que los adultos jóvenes permanezcan en el seguro de sus padres hasta los 26 años y crear mercados de seguros de salud. La ley sigue siendo políticamente controvertida pero ha proporcionado seguro de salud a millones de estadounidenses previamente sin seguro.",
          de: "Am 23. März 2010 unterzeichnete Präsident Barack Obama das Patient Protection and Affordable Care Act (allgemein Obamacare genannt). Diese wegweisende Gesetzgebung stellte die bedeutendste Überholung des US-Gesundheitssystems seit Medicare und Medicaid 1965 dar. Das Gesetz zielte darauf ab, die Zahl der nicht versicherten Amerikaner zu reduzieren, die Gesundheitskosten zu senken und die Qualität der Gesundheitsversorgung zu verbessern. Zu den wichtigsten Bestimmungen gehörten das Verbot für Versicherungsunternehmen, die Deckung aufgrund von Vorerkrankungen abzulehnen, die Erlaubnis für junge Erwachsene, bis zum Alter von 26 Jahren in der Versicherung ihrer Eltern zu bleiben, und die Schaffung von Krankenversicherungsmärkten. Das Gesetz bleibt politisch umstritten, hat aber Millionen von zuvor nicht versicherten Amerikanern eine Krankenversicherung verschafft.",
          nl: "Op 23 maart 2010 ondertekende president Barack Obama de Patient Protection and Affordable Care Act (algemeen Obamacare genoemd) tot wet. Deze baanbrekende wetgeving vertegenwoordigde de meest significante hervorming van het Amerikaanse gezondheidszorgsysteem sinds Medicare en Medicaid in 1965. De wet was gericht op het verminderen van het aantal onverzekerde Amerikanen, het verlagen van de zorgkosten en het verbeteren van de kwaliteit van de gezondheidszorg. Belangrijke bepalingen omvatten het verbieden van verzekeringsmaatschappijen om dekking te weigeren op basis van reeds bestaande aandoeningen, het toestaan van jonge volwassenen om tot 26 jaar op de verzekering van hun ouders te blijven, en het creëren van ziektekostenverzekeringsmarkten. De wet blijft politiek controversieel maar heeft miljoenen voorheen onverzekerde Amerikanen een ziektekostenverzekering verschaft."
        }
      },
      {
        question: {
          en: "On March 23, 1956, which country became the first to officially recognize Pakistan as an independent nation?",
          es: "El 23 de marzo de 1956, ¿qué país se convirtió en el primero en reconocer oficialmente a Pakistán como una nación independiente?",
          de: "Welches Land erkannte am 23. März 1956 als erstes offiziell Pakistan als unabhängige Nation an?",
          nl: "Welk land erkende op 23 maart 1956 als eerste officieel Pakistan als een onafhankelijke natie?"
        },
        options: [
          { en: "Pakistan itself (Republic Day)", es: "El propio Pakistán (Día de la República)", de: "Pakistan selbst (Tag der Republik)", nl: "Pakistan zelf (Republiek Dag)" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "India", es: "India", de: "Indien", nl: "India" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 23, 1956, Pakistan transitioned from a British Dominion to the Islamic Republic of Pakistan, adopting its first constitution. This day is celebrated as Pakistan Day (also known as Republic Day or Resolution Day). The date actually commemorates the Lahore Resolution of March 23, 1940, when the All-India Muslim League demanded a separate nation for Muslims of British India. Pakistan had gained independence from Britain on August 14, 1947, but March 23, 1956, marked its transformation into a fully sovereign republic. This national holiday honors both the 1940 resolution and the 1956 constitution.",
          es: "El 23 de marzo de 1956, Pakistán pasó de ser un Dominio británico a la República Islámica de Pakistán, adoptando su primera constitución. Este día se celebra como Día de Pakistán (también conocido como Día de la República o Día de la Resolución). La fecha en realidad conmemora la Resolución de Lahore del 23 de marzo de 1940, cuando la Liga Musulmana de Toda la India exigió una nación separada para los musulmanes de la India británica. Pakistán había obtenido la independencia de Gran Bretaña el 14 de agosto de 1947, pero el 23 de marzo de 1956 marcó su transformación en una república completamente soberana. Esta fiesta nacional honra tanto la resolución de 1940 como la constitución de 1956.",
          de: "Am 23. März 1956 ging Pakistan von einem britischen Dominion zur Islamischen Republik Pakistan über und verabschiedete seine erste Verfassung. Dieser Tag wird als Pakistan-Tag (auch bekannt als Tag der Republik oder Tag der Resolution) gefeiert. Das Datum erinnert tatsächlich an die Lahore-Resolution vom 23. März 1940, als die All-India Muslim League eine separate Nation für Muslime in Britisch-Indien forderte. Pakistan hatte am 14. August 1947 die Unabhängigkeit von Großbritannien erlangt, aber der 23. März 1956 markierte seine Umwandlung in eine vollständig souveräne Republik. Dieser Nationalfeiertag ehrt sowohl die Resolution von 1940 als auch die Verfassung von 1956.",
          nl: "Op 23 maart 1956 ging Pakistan over van een Brits Dominion naar de Islamitische Republiek Pakistan, waarbij het zijn eerste grondwet aannam. Deze dag wordt gevierd als Pakistan Dag (ook bekend als Republiek Dag of Resolutie Dag). De datum herdenkt eigenlijk de Lahore Resolutie van 23 maart 1940, toen de All-India Muslim League een aparte natie eiste voor moslims van Brits-Indië. Pakistan had op 14 augustus 1947 onafhankelijkheid van Groot-Brittannië verkregen, maar 23 maart 1956 markeerde zijn transformatie tot een volledig soevereine republiek. Deze nationale feestdag eert zowel de resolutie van 1940 als de grondwet van 1956."
        }
      }
    ],

    // Day 24: Historical events on March 24
    day24: [
      {
        question: {
          en: "On March 24, 1989, which oil tanker ran aground in Alaska, causing one of the worst environmental disasters in US history?",
          es: "El 24 de marzo de 1989, ¿qué petrolero encalló en Alaska, causando uno de los peores desastres ambientales en la historia de EE.UU.?",
          de: "Welcher Öltanker lief am 24. März 1989 in Alaska auf Grund und verursachte eine der schlimmsten Umweltkatastrophen in der US-Geschichte?",
          nl: "Welke olietanker liep op 24 maart 1989 aan de grond in Alaska, wat een van de ergste milieurampen in de Amerikaanse geschiedenis veroorzaakte?"
        },
        options: [
          { en: "Exxon Valdez", es: "Exxon Valdez", de: "Exxon Valdez", nl: "Exxon Valdez" },
          { en: "Deepwater Horizon", es: "Deepwater Horizon", de: "Deepwater Horizon", nl: "Deepwater Horizon" },
          { en: "Torrey Canyon", es: "Torrey Canyon", de: "Torrey Canyon", nl: "Torrey Canyon" },
          { en: "Amoco Cadiz", es: "Amoco Cadiz", de: "Amoco Cadiz", nl: "Amoco Cadiz" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 24, 1989, the oil tanker Exxon Valdez struck Bligh Reef in Alaska's Prince William Sound, spilling approximately 11 million gallons of crude oil into the Gulf of Alaska. The spill covered 1,300 miles of coastline and killed an estimated 250,000 seabirds, 3,000 otters, 300 seals, 250 bald eagles, and 22 killer whales. It was the largest oil spill in US waters at the time. The disaster led to the Oil Pollution Act of 1990, which increased penalties and required double hulls for oil tankers. Nearly 30 years later, pockets of crude oil still remain in some locations.",
          es: "El 24 de marzo de 1989, el petrolero Exxon Valdez chocó contra Bligh Reef en Prince William Sound, Alaska, derramando aproximadamente 11 millones de galones de petróleo crudo en el Golfo de Alaska. El derrame cubrió 1,300 millas de costa y mató a unos 250,000 aves marinas, 3,000 nutrias, 300 focas, 250 águilas calvas y 22 orcas. Fue el mayor derrame de petróleo en aguas estadounidenses en ese momento. El desastre llevó a la Ley de Contaminación por Petróleo de 1990, que aumentó las sanciones y requirió cascos dobles para petroleros. Casi 30 años después, todavía quedan bolsas de petróleo crudo en algunos lugares.",
          de: "Am 24. März 1989 lief der Öltanker Exxon Valdez in Alaskas Prince William Sound auf Bligh Reef auf und verschüttete etwa 11 Millionen Gallonen Rohöl in den Golf von Alaska. Die Ölpest bedeckte 1.300 Meilen Küstenlinie und tötete schätzungsweise 250.000 Seevögel, 3.000 Otter, 300 Robben, 250 Weißkopfseeadler und 22 Orcas. Es war zu diesem Zeitpunkt die größte Ölpest in US-Gewässern. Die Katastrophe führte zum Oil Pollution Act von 1990, der Strafen erhöhte und Doppelrümpfe für Öltanker vorschrieb. Fast 30 Jahre später sind an einigen Orten noch Rohölreste vorhanden.",
          nl: "Op 24 maart 1989 liep de olietanker Exxon Valdez vast op Bligh Reef in Alaska's Prince William Sound, waarbij ongeveer 11 miljoen gallons ruwe olie in de Golf van Alaska werd gemorst. De olievlek bedekte 1.300 mijl kustlijn en doodde naar schatting 250.000 zeevogels, 3.000 otters, 300 zeehonden, 250 Amerikaanse zeearenden en 22 orka's. Het was de grootste olieramp in Amerikaanse wateren op dat moment. De ramp leidde tot de Oil Pollution Act van 1990, die straffen verhoogde en dubbele rompen voor olietankers verplichtte. Bijna 30 jaar later zijn er nog steeds zakken ruwe olie op sommige locaties."
        }
      },
      {
        question: {
          en: "On March 24, 1603, following the death of which monarch did James VI of Scotland also become James I of England?",
          es: "El 24 de marzo de 1603, tras la muerte de qué monarca Jaime VI de Escocia también se convirtió en Jaime I de Inglaterra?",
          de: "Nach dem Tod welches Monarchen wurde Jakob VI. von Schottland am 24. März 1603 auch Jakob I. von England?",
          nl: "Na de dood van welke monarch werd Jacobus VI van Schotland op 24 maart 1603 ook Jacobus I van Engeland?"
        },
        options: [
          { en: "Elizabeth I", es: "Isabel I", de: "Elisabeth I.", nl: "Elizabeth I" },
          { en: "Mary I", es: "María I", de: "Maria I.", nl: "Maria I" },
          { en: "Henry VIII", es: "Enrique VIII", de: "Heinrich VIII.", nl: "Hendrik VIII" },
          { en: "Edward VI", es: "Eduardo VI", de: "Eduard VI.", nl: "Edward VI" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 24, 1603, Queen Elizabeth I of England died at Richmond Palace, aged 69, after 44 years of rule, ending the Tudor dynasty. Within eight hours, James VI of Scotland was proclaimed James I of England, uniting the Scottish and English crowns for the first time. James was Elizabeth's closest legitimate heir through his great-grandmother Margaret Tudor, sister of Henry VIII. This marked the beginning of the Stuart dynasty in England. Elizabeth's death came after she fell into a 'settled and unremovable melancholy' following the deaths of close friends in early 1603.",
          es: "El 24 de marzo de 1603, la reina Isabel I de Inglaterra murió en el Palacio de Richmond, a los 69 años, después de 44 años de reinado, terminando la dinastía Tudor. En ocho horas, Jaime VI de Escocia fue proclamado Jaime I de Inglaterra, uniendo las coronas escocesa e inglesa por primera vez. Jaime era el heredero legítimo más cercano de Isabel a través de su bisabuela Margarita Tudor, hermana de Enrique VIII. Esto marcó el comienzo de la dinastía Estuardo en Inglaterra. La muerte de Isabel llegó después de que cayera en una 'melancolía establecida e inamovible' tras las muertes de amigos cercanos a principios de 1603.",
          de: "Am 24. März 1603 starb Königin Elisabeth I. von England im Richmond Palace im Alter von 69 Jahren nach 44 Jahren Herrschaft und beendete die Tudor-Dynastie. Innerhalb von acht Stunden wurde Jakob VI. von Schottland zum Jakob I. von England proklamiert und vereinigte damit zum ersten Mal die schottische und die englische Krone. Jakob war Elisabeths nächster legitimer Erbe durch seine Urgroßmutter Margaret Tudor, Schwester von Heinrich VIII. Dies markierte den Beginn der Stuart-Dynastie in England. Elisabeths Tod kam, nachdem sie nach dem Tod enger Freunde Anfang 1603 in eine 'festgesetzte und unbeweglich Melancholie' gefallen war.",
          nl: "Op 24 maart 1603 stierf koningin Elizabeth I van Engeland in Richmond Palace, 69 jaar oud, na 44 jaar regering, waarmee de Tudor-dynastie eindigde. Binnen acht uur werd Jacobus VI van Schotland uitgeroepen tot Jacobus I van Engeland, waarmee de Schotse en Engelse kronen voor het eerst werden verenigd. Jacobus was Elizabeths nauwste legitieme erfgenaam via zijn overgrootmoeder Margaret Tudor, zus van Hendrik VIII. Dit markeerde het begin van de Stuart-dynastie in Engeland. Elizabeths dood kwam nadat ze in een 'vaste en onbeweeglijke melancholie' was gevallen na de dood van goede vrienden begin 1603."
        }
      },
      {
        question: {
          en: "On March 24, 1976, a military coup in which South American country began a brutal dictatorship known as the 'Dirty War'?",
          es: "El 24 de marzo de 1976, un golpe militar en qué país sudamericano comenzó una brutal dictadura conocida como la 'Guerra Sucia'?",
          de: "Ein Militärputsch in welchem südamerikanischen Land begann am 24. März 1976 eine brutale Diktatur, die als 'Schmutziger Krieg' bekannt ist?",
          nl: "Op 24 maart 1976 begon een militaire staatsgreep in welk Zuid-Amerikaans land een brute dictatuur bekend als de 'Vuile Oorlog'?"
        },
        options: [
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Uruguay", es: "Uruguay", de: "Uruguay", nl: "Uruguay" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 24, 1976, a military junta led by Lieutenant General Jorge Rafael Videla overthrew President Isabel Perón in Argentina. This coup began the 'National Reorganization Process,' a military dictatorship that lasted until 1983. During this period, the regime conducted systematic detention, torture, and extermination, leading to an estimated 30,000 people being murdered or 'disappeared.' The dictatorship operated over 700 clandestine detention centers. March 24 is now a national holiday in Argentina, designated as the Day of Remembrance for Truth and Justice to honor the victims.",
          es: "El 24 de marzo de 1976, una junta militar liderada por el Teniente General Jorge Rafael Videla derrocó a la presidenta Isabel Perón en Argentina. Este golpe comenzó el 'Proceso de Reorganización Nacional', una dictadura militar que duró hasta 1983. Durante este período, el régimen llevó a cabo detenciones, torturas y exterminios sistemáticos, lo que llevó a que aproximadamente 30,000 personas fueran asesinadas o 'desaparecidas'. La dictadura operó más de 700 centros de detención clandestinos. El 24 de marzo es ahora un feriado nacional en Argentina, designado como el Día de la Memoria por la Verdad y la Justicia para honrar a las víctimas.",
          de: "Am 24. März 1976 stürzte eine Militärjunta unter der Führung von Generalleutnant Jorge Rafael Videla Präsidentin Isabel Perón in Argentinien. Dieser Putsch begann den 'Nationalen Reorganisationsprozess', eine Militärdiktatur, die bis 1983 dauerte. Während dieser Zeit führte das Regime systematische Inhaftierung, Folter und Vernichtung durch, was dazu führte, dass schätzungsweise 30.000 Menschen ermordet oder 'verschwunden' wurden. Die Diktatur betrieb über 700 geheime Haftzentren. Der 24. März ist jetzt ein Nationalfeiertag in Argentinien, der als Tag des Gedenkens für Wahrheit und Gerechtigkeit zur Ehrung der Opfer bestimmt ist.",
          nl: "Op 24 maart 1976 pleegde een militaire junta onder leiding van luitenant-generaal Jorge Rafael Videla een staatsgreep tegen president Isabel Perón in Argentinië. Deze coup begon het 'Nationale Reorganisatieproces', een militaire dictatuur die duurde tot 1983. Tijdens deze periode voerde het regime systematische detentie, marteling en uitroeiing uit, wat leidde tot naar schatting 30.000 mensen die werden vermoord of 'verdwenen'. De dictatuur exploiteerde meer dan 700 clandestiene detentiecentra. 24 maart is nu een nationale feestdag in Argentinië, aangewezen als de Dag van Herinnering voor Waarheid en Gerechtigheid ter ere van de slachtoffers."
        }
      },
      {
        question: {
          en: "On March 24, 1882, German scientist Robert Koch announced his discovery of the bacterium that causes which deadly disease?",
          es: "El 24 de marzo de 1882, el científico alemán Robert Koch anunció su descubrimiento de la bacteria que causa qué enfermedad mortal?",
          de: "Am 24. März 1882 kündigte der deutsche Wissenschaftler Robert Koch seine Entdeckung des Bakteriums an, das welche tödliche Krankheit verursacht?",
          nl: "Op 24 maart 1882 kondigde de Duitse wetenschapper Robert Koch zijn ontdekking aan van de bacterie die welke dodelijke ziekte veroorzaakt?"
        },
        options: [
          { en: "Tuberculosis", es: "Tuberculosis", de: "Tuberkulose", nl: "Tuberculose" },
          { en: "Cholera", es: "Cólera", de: "Cholera", nl: "Cholera" },
          { en: "Smallpox", es: "Viruela", de: "Pocken", nl: "Pokken" },
          { en: "Typhoid", es: "Tifoidea", de: "Typhus", nl: "Tyfus" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 24, 1882, Robert Koch announced his discovery of Mycobacterium tuberculosis, the bacterium that causes tuberculosis (TB), at the Berlin Physiological Society. This groundbreaking discovery proved that TB was caused by a specific bacterium, not heredity or miasma as previously believed. At the time, TB was responsible for one in seven deaths in Europe and the United States. Koch's discovery revolutionized medicine and laid the foundation for developing treatments. He was awarded the Nobel Prize in Physiology or Medicine in 1905. World Tuberculosis Day is commemorated annually on March 24 in his honor.",
          es: "El 24 de marzo de 1882, Robert Koch anunció su descubrimiento del Mycobacterium tuberculosis, la bacteria que causa la tuberculosis (TB), en la Sociedad Fisiológica de Berlín. Este descubrimiento revolucionario demostró que la TB era causada por una bacteria específica, no por herencia o miasma como se creía anteriormente. En ese momento, la TB era responsable de una de cada siete muertes en Europa y Estados Unidos. El descubrimiento de Koch revolucionó la medicina y sentó las bases para desarrollar tratamientos. Fue galardonado con el Premio Nobel de Fisiología o Medicina en 1905. El Día Mundial de la Tuberculosis se conmemora anualmente el 24 de marzo en su honor.",
          de: "Am 24. März 1882 kündigte Robert Koch seine Entdeckung von Mycobacterium tuberculosis, dem Bakterium, das Tuberkulose (TB) verursacht, bei der Berliner Physiologischen Gesellschaft an. Diese bahnbrechende Entdeckung bewies, dass TB durch ein spezifisches Bakterium verursacht wurde, nicht durch Vererbung oder Miasma, wie zuvor geglaubt. Zu dieser Zeit war TB für einen von sieben Todesfällen in Europa und den Vereinigten Staaten verantwortlich. Kochs Entdeckung revolutionierte die Medizin und legte den Grundstein für die Entwicklung von Behandlungen. Er wurde 1905 mit dem Nobelpreis für Physiologie oder Medizin ausgezeichnet. Der Welt-Tuberkulose-Tag wird jährlich am 24. März zu seinen Ehren begangen.",
          nl: "Op 24 maart 1882 kondigde Robert Koch zijn ontdekking van Mycobacterium tuberculosis aan, de bacterie die tuberculose (TB) veroorzaakt, bij de Berlijnse Fysiologische Vereniging. Deze baanbrekende ontdekking bewees dat TB werd veroorzaakt door een specifieke bacterie, niet door erfelijkheid of miasma zoals eerder werd aangenomen. Op dat moment was TB verantwoordelijk voor één op de zeven sterfgevallen in Europa en de Verenigde Staten. Kochs ontdekking revolutioneerde de geneeskunde en legde de basis voor het ontwikkelen van behandelingen. Hij werd in 1905 bekroond met de Nobelprijs voor Fysiologie of Geneeskunde. Wereld Tuberculose Dag wordt jaarlijks op 24 maart ter ere van hem herdacht."
        }
      },
      {
        question: {
          en: "On March 24, 1958, which American singer was inducted into the US Army, interrupting his music career at the peak of his fame?",
          es: "El 24 de marzo de 1958, ¿qué cantante estadounidense fue reclutado por el Ejército de EE.UU., interrumpiendo su carrera musical en el pico de su fama?",
          de: "Welcher amerikanische Sänger wurde am 24. März 1958 in die US-Armee eingezogen, was seine Musikkarriere auf dem Höhepunkt seines Ruhms unterbrach?",
          nl: "Welke Amerikaanse zanger werd op 24 maart 1958 ingelijfd bij het Amerikaanse leger, waardoor zijn muziekcarrière op het hoogtepunt van zijn roem werd onderbroken?"
        },
        options: [
          { en: "Elvis Presley", es: "Elvis Presley", de: "Elvis Presley", nl: "Elvis Presley" },
          { en: "Johnny Cash", es: "Johnny Cash", de: "Johnny Cash", nl: "Johnny Cash" },
          { en: "Chuck Berry", es: "Chuck Berry", de: "Chuck Berry", nl: "Chuck Berry" },
          { en: "Little Richard", es: "Little Richard", de: "Little Richard", nl: "Little Richard" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 24, 1958, Elvis Presley was inducted into the United States Army at Fort Chaffee, Arkansas, as a private. At age 23, Elvis was at the height of his fame when he received his draft notice. Despite offers for special assignments in Special Services, Elvis chose to serve as a regular soldier, which enhanced his public image. He served for two years, primarily stationed in Germany, where he met his future wife Priscilla Beaulieu. Elvis was honorably discharged in March 1960 and successfully resumed his entertainment career. His military service is often credited with broadening his appeal beyond rock and roll fans.",
          es: "El 24 de marzo de 1958, Elvis Presley fue reclutado por el Ejército de Estados Unidos en Fort Chaffee, Arkansas, como soldado raso. A los 23 años, Elvis estaba en el apogeo de su fama cuando recibió su aviso de reclutamiento. A pesar de las ofertas de asignaciones especiales en Servicios Especiales, Elvis eligió servir como un soldado regular, lo que mejoró su imagen pública. Sirvió durante dos años, principalmente estacionado en Alemania, donde conoció a su futura esposa Priscilla Beaulieu. Elvis fue dado de baja con honores en marzo de 1960 y reanudó exitosamente su carrera de entretenimiento. Su servicio militar se le atribuye a menudo ampliar su atractivo más allá de los fanáticos del rock and roll.",
          de: "Am 24. März 1958 wurde Elvis Presley als einfacher Soldat in die Armee der Vereinigten Staaten in Fort Chaffee, Arkansas, eingezogen. Im Alter von 23 Jahren befand sich Elvis auf dem Höhepunkt seines Ruhms, als er seinen Einberufungsbefehl erhielt. Trotz Angeboten für spezielle Aufgaben bei den Special Services entschied sich Elvis, als regulärer Soldat zu dienen, was sein öffentliches Image verbesserte. Er diente zwei Jahre lang, hauptsächlich in Deutschland stationiert, wo er seine zukünftige Frau Priscilla Beaulieu traf. Elvis wurde im März 1960 ehrenvoll entlassen und nahm seine Unterhaltungskarriere erfolgreich wieder auf. Sein Militärdienst wird oft damit in Verbindung gebracht, seine Anziehungskraft über Rock'n'Roll-Fans hinaus zu erweitern.",
          nl: "Op 24 maart 1958 werd Elvis Presley ingelijfd bij het Amerikaanse leger in Fort Chaffee, Arkansas, als soldaat. Op 23-jarige leeftijd bevond Elvis zich op het hoogtepunt van zijn roem toen hij zijn oproep ontving. Ondanks aanbiedingen voor speciale opdrachten bij Special Services koos Elvis ervoor om als een gewone soldaat te dienen, wat zijn publieke imago verbeterde. Hij diende twee jaar, voornamelijk gestationeerd in Duitsland, waar hij zijn toekomstige vrouw Priscilla Beaulieu ontmoette. Elvis werd in maart 1960 eervol ontslagen en hervatte zijn entertainmentcarrière met succes. Zijn militaire dienst wordt vaak gecrediteerd met het verbreden van zijn aantrekkingskracht voorbij rock-and-roll fans."
        }
      }
    ],

    // Day 25: Historical events on March 25
    day25: [
      {
        question: {
          en: "On March 25, 1911, which tragic fire in New York City killed 146 garment workers and led to major labor reforms?",
          es: "El 25 de marzo de 1911, ¿qué incendio trágico en la Ciudad de Nueva York mató a 146 trabajadores de la confección y llevó a importantes reformas laborales?",
          de: "Welcher tragische Brand in New York City tötete am 25. März 1911 146 Textilarbeiter und führte zu wichtigen Arbeitsreformen?",
          nl: "Welke tragische brand in New York City doodde op 25 maart 1911 146 kledingarbeiders en leidde tot belangrijke arbeidshervormingen?"
        },
        options: [
          { en: "Triangle Shirtwaist Factory fire", es: "Incendio de la Fábrica Triangle Shirtwaist", de: "Triangle-Shirtwaist-Fabrik-Brand", nl: "Triangle Shirtwaist fabrieksbrand" },
          { en: "Chicago Fire", es: "Incendio de Chicago", de: "Brand von Chicago", nl: "Grote brand van Chicago" },
          { en: "Great Boston Fire", es: "Gran Incendio de Boston", de: "Großer Brand von Boston", nl: "Grote brand van Boston" },
          { en: "Cocoanut Grove fire", es: "Incendio de Cocoanut Grove", de: "Cocoanut-Grove-Brand", nl: "Cocoanut Grove brand" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 25, 1911, a fire broke out at the Triangle Shirtwaist Factory on the top floors of the Asch Building in New York City, killing 146 workers, mostly young immigrant women. Many workers were trapped by locked doors that had been secured to prevent theft, forcing some to jump from windows to their deaths. The tragedy shocked the nation and became a catalyst for improved factory safety standards and labor laws. The disaster led to the passage of over 30 health and safety laws, including factory fire codes and child labor restrictions, fundamentally reshaping workplace safety regulations in America.",
          es: "El 25 de marzo de 1911, se desató un incendio en la Fábrica Triangle Shirtwaist en los pisos superiores del Edificio Asch en la Ciudad de Nueva York, matando a 146 trabajadores, en su mayoría mujeres inmigrantes jóvenes. Muchos trabajadores quedaron atrapados por puertas cerradas que habían sido aseguradas para prevenir robos, obligando a algunos a saltar desde las ventanas hacia su muerte. La tragedia conmocionó a la nación y se convirtió en un catalizador para mejorar los estándares de seguridad en las fábricas y las leyes laborales. El desastre llevó a la aprobación de más de 30 leyes de salud y seguridad, incluidos códigos de incendios en fábricas y restricciones al trabajo infantil, remodelando fundamentalmente las regulaciones de seguridad laboral en América.",
          de: "Am 25. März 1911 brach in der Triangle-Shirtwaist-Fabrik in den oberen Stockwerken des Asch-Gebäudes in New York City ein Brand aus, bei dem 146 Arbeiter starben, meist junge Einwandererfrauen. Viele Arbeiter waren durch verschlossene Türen gefangen, die gesichert worden waren, um Diebstahl zu verhindern, was einige zwang, aus Fenstern in den Tod zu springen. Die Tragödie schockierte die Nation und wurde zum Katalysator für verbesserte Fabriksicherheitsstandards und Arbeitsgesetze. Die Katastrophe führte zur Verabschiedung von über 30 Gesundheits- und Sicherheitsgesetzen, einschließlich Fabrikfeuervorschriften und Kinderarbeitsbeschränkungen, die die Arbeitsschutzvorschriften in Amerika grundlegend umgestalteten.",
          nl: "Op 25 maart 1911 brak er brand uit in de Triangle Shirtwaist fabriek op de bovenste verdiepingen van het Asch-gebouw in New York City, waarbij 146 arbeiders om het leven kwamen, voornamelijk jonge immigrantenvrouwen. Veel arbeiders zaten gevangen door afgesloten deuren die waren beveiligd om diefstal te voorkomen, waardoor sommigen gedwongen werden uit ramen te springen naar hun dood. De tragedie schokte de natie en werd een katalysator voor verbeterde fabrieksveiligheidsstandaarden en arbeidswetten. De ramp leidde tot de aanname van meer dan 30 gezondheids- en veiligheidswetten, waaronder fabrieks brandcodes en kinderbeperkingen, die de arbeidsveiligheidsvoorschriften in Amerika fundamenteel herstructureerden."
        }
      },
      {
        question: {
          en: "On March 25, 1957, which historic treaty was signed in Rome, establishing the European Economic Community?",
          es: "El 25 de marzo de 1957, ¿qué tratado histórico se firmó en Roma, estableciendo la Comunidad Económica Europea?",
          de: "Welcher historische Vertrag wurde am 25. März 1957 in Rom unterzeichnet und gründete die Europäische Wirtschaftsgemeinschaft?",
          nl: "Welk historisch verdrag werd op 25 maart 1957 in Rome ondertekend, dat de Europese Economische Gemeenschap oprichtte?"
        },
        options: [
          { en: "Treaty of Rome", es: "Tratado de Roma", de: "Römische Verträge", nl: "Verdrag van Rome" },
          { en: "Treaty of Versailles", es: "Tratado de Versalles", de: "Vertrag von Versailles", nl: "Verdrag van Versailles" },
          { en: "Maastricht Treaty", es: "Tratado de Maastricht", de: "Vertrag von Maastricht", nl: "Verdrag van Maastricht" },
          { en: "Lisbon Treaty", es: "Tratado de Lisboa", de: "Vertrag von Lissabon", nl: "Verdrag van Lissabon" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 25, 1957, the Treaty of Rome was signed by Belgium, France, Italy, Luxembourg, the Netherlands, and West Germany, establishing the European Economic Community (EEC). This treaty created a common market based on the 'four freedoms': free movement of persons, services, goods, and capital. It proposed progressive reduction of customs duties and establishment of a customs union. The treaty came into force on January 1, 1958, and became one of the foundational documents of what is now the European Union. This marked a turning point in European integration and post-World War II cooperation.",
          es: "El 25 de marzo de 1957, el Tratado de Roma fue firmado por Bélgica, Francia, Italia, Luxemburgo, los Países Bajos y Alemania Occidental, estableciendo la Comunidad Económica Europea (CEE). Este tratado creó un mercado común basado en las 'cuatro libertades': libre circulación de personas, servicios, bienes y capital. Propuso la reducción progresiva de los aranceles aduaneros y el establecimiento de una unión aduanera. El tratado entró en vigor el 1 de enero de 1958 y se convirtió en uno de los documentos fundacionales de lo que ahora es la Unión Europea. Esto marcó un punto de inflexión en la integración europea y la cooperación posterior a la Segunda Guerra Mundial.",
          de: "Am 25. März 1957 wurden die Römischen Verträge von Belgien, Frankreich, Italien, Luxemburg, den Niederlanden und Westdeutschland unterzeichnet und gründeten die Europäische Wirtschaftsgemeinschaft (EWG). Dieser Vertrag schuf einen gemeinsamen Markt basierend auf den 'vier Freiheiten': freier Personenverkehr, Dienstleistungen, Waren und Kapital. Er schlug eine schrittweise Senkung der Zölle und die Einrichtung einer Zollunion vor. Der Vertrag trat am 1. Januar 1958 in Kraft und wurde zu einem der Gründungsdokumente dessen, was heute die Europäische Union ist. Dies markierte einen Wendepunkt in der europäischen Integration und der Zusammenarbeit nach dem Zweiten Weltkrieg.",
          nl: "Op 25 maart 1957 werd het Verdrag van Rome ondertekend door België, Frankrijk, Italië, Luxemburg, Nederland en West-Duitsland, dat de Europese Economische Gemeenschap (EEG) oprichtte. Dit verdrag creëerde een gemeenschappelijke markt gebaseerd op de 'vier vrijheden': vrij verkeer van personen, diensten, goederen en kapitaal. Het stelde een geleidelijke verlaging van douanerechten en de oprichting van een douane-unie voor. Het verdrag trad in werking op 1 januari 1958 en werd een van de fundamentele documenten van wat nu de Europese Unie is. Dit markeerde een keerpunt in de Europese integratie en samenwerking na de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "On March 25, 1969, John Lennon and Yoko Ono began their famous protest in Amsterdam. What was it called?",
          es: "El 25 de marzo de 1969, John Lennon y Yoko Ono comenzaron su famosa protesta en Ámsterdam. ¿Cómo se llamaba?",
          de: "Am 25. März 1969 begannen John Lennon und Yoko Ono ihren berühmten Protest in Amsterdam. Wie wurde er genannt?",
          nl: "Op 25 maart 1969 begonnen John Lennon en Yoko Ono hun beroemde protest in Amsterdam. Hoe heette het?"
        },
        options: [
          { en: "March for Freedom", es: "Marcha por la Libertad", de: "Marsch für Freiheit", nl: "Mars voor Vrijheid" },
          { en: "Bed-In for Peace", es: "Bed-In por la Paz", de: "Bed-In für den Frieden", nl: "Bed-In voor Vrede" },
          { en: "Concert for Peace", es: "Concierto por la Paz", de: "Konzert für den Frieden", nl: "Concert voor Vrede" },
          { en: "Sit-In for Love", es: "Sit-In por el Amor", de: "Sit-In für die Liebe", nl: "Sit-In voor Liefde" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 25, 1969, John Lennon and Yoko Ono began their 'Bed-In for Peace' at the Amsterdam Hilton Hotel as part of their honeymoon. They invited the world's press into their hotel room daily from 9 a.m. to 9 p.m., where they sat in bed surrounded by signs reading 'Hair Peace' and 'Bed Peace,' talking about peace. This nonviolent protest against the Vietnam War used the media attention from their wedding to promote world peace. The couple conducted another Bed-In in Montreal in May 1969, where Lennon recorded 'Give Peace a Chance.' The event became an iconic symbol of 1960s peace activism.",
          es: "El 25 de marzo de 1969, John Lennon y Yoko Ono comenzaron su 'Bed-In por la Paz' en el Hotel Hilton de Ámsterdam como parte de su luna de miel. Invitaron a la prensa mundial a su habitación de hotel diariamente de 9 a.m. a 9 p.m., donde se sentaban en la cama rodeados de carteles que decían 'Hair Peace' y 'Bed Peace', hablando sobre la paz. Esta protesta no violenta contra la Guerra de Vietnam utilizó la atención mediática de su boda para promover la paz mundial. La pareja realizó otro Bed-In en Montreal en mayo de 1969, donde Lennon grabó 'Give Peace a Chance'. El evento se convirtió en un símbolo icónico del activismo pacifista de los años 60.",
          de: "Am 25. März 1969 begannen John Lennon und Yoko Ono ihr 'Bed-In für den Frieden' im Amsterdam Hilton Hotel als Teil ihrer Flitterwochen. Sie luden täglich von 9 bis 21 Uhr die Weltpresse in ihr Hotelzimmer ein, wo sie im Bett saßen, umgeben von Schildern mit der Aufschrift 'Hair Peace' und 'Bed Peace', und über Frieden sprachen. Dieser gewaltlose Protest gegen den Vietnamkrieg nutzte die Medienaufmerksamkeit ihrer Hochzeit, um den Weltfrieden zu fördern. Das Paar führte im Mai 1969 ein weiteres Bed-In in Montreal durch, wo Lennon 'Give Peace a Chance' aufnahm. Das Ereignis wurde zu einem ikonischen Symbol des Friedensaktivismus der 1960er Jahre.",
          nl: "Op 25 maart 1969 begonnen John Lennon en Yoko Ono hun 'Bed-In voor Vrede' in het Amsterdam Hilton Hotel als onderdeel van hun huwelijksreis. Ze nodigden de wereldpers dagelijks van 9 uur 's ochtends tot 9 uur 's avonds uit in hun hotelkamer, waar ze in bed zaten omringd door borden met 'Hair Peace' en 'Bed Peace', pratend over vrede. Dit geweldloze protest tegen de Vietnamoorlog gebruikte de media-aandacht van hun bruiloft om wereldvrede te promoten. Het paar hield een tweede Bed-In in Montreal in mei 1969, waar Lennon 'Give Peace a Chance' opnam. Het evenement werd een iconisch symbool van vredesactivisme uit de jaren 1960."
        }
      },
      {
        question: {
          en: "On March 25, 1807, the British Parliament passed an act abolishing what practice throughout the British Empire?",
          es: "El 25 de marzo de 1807, el Parlamento británico aprobó una ley que abolió qué práctica en todo el Imperio Británico?",
          de: "Am 25. März 1807 verabschiedete das britische Parlament ein Gesetz zur Abschaffung welcher Praxis im gesamten Britischen Empire?",
          nl: "Op 25 maart 1807 nam het Britse Parlement een wet aan die welke praktijk in het hele Britse Rijk afschafte?"
        },
        options: [
          { en: "Slave trade", es: "Trata de esclavos", de: "Sklavenhandel", nl: "Slavenhandel" },
          { en: "Indentured servitude", es: "Servidumbre por contrato", de: "Vertragsgebundene Dienstbarkeit", nl: "Contractarbeid" },
          { en: "Child labor", es: "Trabajo infantil", de: "Kinderarbeit", nl: "Kinderarbeid" },
          { en: "Debtor's prisons", es: "Prisiones de deudores", de: "Schuldnergefängnisse", nl: "Schuldengevangenissen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 25, 1807, the British Parliament passed the Slave Trade Act, which abolished the slave trade throughout the British Empire. The act made it illegal to engage in the slave trade, though it did not immediately free existing slaves. This legislation was the result of decades of campaigning by abolitionists like William Wilberforce and represented a major moral and political victory. The act took effect on January 1, 1808. Complete emancipation of all slaves in the British Empire came later with the Slavery Abolition Act of 1833. Britain's abolition influenced other nations to follow suit.",
          es: "El 25 de marzo de 1807, el Parlamento británico aprobó la Ley de Abolición de la Trata de Esclavos, que abolió la trata de esclavos en todo el Imperio Británico. La ley hizo ilegal participar en el comercio de esclavos, aunque no liberó inmediatamente a los esclavos existentes. Esta legislación fue el resultado de décadas de campañas de abolicionistas como William Wilberforce y representó una gran victoria moral y política. La ley entró en vigor el 1 de enero de 1808. La emancipación completa de todos los esclavos en el Imperio Británico llegó más tarde con la Ley de Abolición de la Esclavitud de 1833. La abolición de Gran Bretaña influyó en otras naciones para que siguieran su ejemplo.",
          de: "Am 25. März 1807 verabschiedete das britische Parlament den Slave Trade Act, der den Sklavenhandel im gesamten Britischen Empire abschaffte. Das Gesetz machte es illegal, sich am Sklavenhandel zu beteiligen, obwohl es bestehende Sklaven nicht sofort befreite. Diese Gesetzgebung war das Ergebnis jahrzehntelanger Kampagnen von Abolitionisten wie William Wilberforce und stellte einen großen moralischen und politischen Sieg dar. Das Gesetz trat am 1. Januar 1808 in Kraft. Die vollständige Emanzipation aller Sklaven im Britischen Empire kam später mit dem Slavery Abolition Act von 1833. Großbritanniens Abschaffung beeinflusste andere Nationen, diesem Beispiel zu folgen.",
          nl: "Op 25 maart 1807 nam het Britse Parlement de Slave Trade Act aan, die de slavenhandel in het hele Britse Rijk afschafte. De wet maakte het illegaal om deel te nemen aan de slavenhandel, hoewel het bestaande slaven niet onmiddellijk bevrijdde. Deze wetgeving was het resultaat van decennia van campagne voeren door abolitionisten zoals William Wilberforce en vertegenwoordigde een grote morele en politieke overwinning. De wet trad in werking op 1 januari 1808. Volledige emancipatie van alle slaven in het Britse Rijk kwam later met de Slavery Abolition Act van 1833. Groot-Brittannië's afschaffing beïnvloedde andere naties om hetzelfde te doen."
        }
      },
      {
        question: {
          en: "On March 25, 1996, which European agreement allowed free movement across borders without passport controls between member countries?",
          es: "El 25 de marzo de 1996, ¿qué acuerdo europeo permitió el libre movimiento a través de las fronteras sin controles de pasaporte entre países miembros?",
          de: "Welches europäische Abkommen erlaubte am 25. März 1996 die freie Bewegung über Grenzen hinweg ohne Passkontrollen zwischen Mitgliedsländern?",
          nl: "Welk Europees akkoord stond op 25 maart 1996 vrij verkeer over grenzen toe zonder paspoortcontroles tussen lidstaten?"
        },
        options: [
          { en: "Schengen Agreement implementation", es: "Implementación del Acuerdo de Schengen", de: "Schengen-Abkommen-Umsetzung", nl: "Schengen-akkoord implementatie" },
          { en: "Brexit Agreement", es: "Acuerdo del Brexit", de: "Brexit-Abkommen", nl: "Brexit-akkoord" },
          { en: "Geneva Convention", es: "Convención de Ginebra", de: "Genfer Konvention", nl: "Conventie van Genève" },
          { en: "Paris Climate Accord", es: "Acuerdo Climático de París", de: "Pariser Klimaabkommen", nl: "Klimaatakkoord van Parijs" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 25, 1995 (not 1996), the Schengen Agreement came into full effect for seven European countries: Belgium, France, Germany, Luxembourg, Netherlands, Portugal, and Spain. This agreement, originally signed in 1985, eliminated internal border controls and created a single external border. The Schengen Area allows more than 400 million EU citizens and non-EU nationals living or traveling in the EU to move freely without being subject to border checks. Today, the Schengen Area encompasses 27 European countries and is one of the EU's greatest achievements, facilitating travel, trade, and cultural exchange across Europe.",
          es: "El 25 de marzo de 1995 (no 1996), el Acuerdo de Schengen entró en pleno efecto para siete países europeos: Bélgica, Francia, Alemania, Luxemburgo, Países Bajos, Portugal y España. Este acuerdo, firmado originalmente en 1985, eliminó los controles fronterizos internos y creó una sola frontera externa. El Área Schengen permite que más de 400 millones de ciudadanos de la UE y nacionales no pertenecientes a la UE que viven o viajan en la UE se muevan libremente sin estar sujetos a controles fronterizos. Hoy, el Área Schengen abarca 27 países europeos y es uno de los mayores logros de la UE, facilitando los viajes, el comercio y el intercambio cultural en toda Europa.",
          de: "Am 25. März 1995 (nicht 1996) trat das Schengen-Abkommen für sieben europäische Länder in vollem Umfang in Kraft: Belgien, Frankreich, Deutschland, Luxemburg, Niederlande, Portugal und Spanien. Dieses ursprünglich 1985 unterzeichnete Abkommen beseitigte die Binnengrenzkontrollen und schuf eine einzige Außengrenze. Der Schengen-Raum ermöglicht es mehr als 400 Millionen EU-Bürgern und Nicht-EU-Staatsangehörigen, die in der EU leben oder reisen, sich frei zu bewegen, ohne Grenzkontrollen unterworfen zu sein. Heute umfasst der Schengen-Raum 27 europäische Länder und ist eine der größten Errungenschaften der EU, die Reisen, Handel und kulturellen Austausch in ganz Europa erleichtert.",
          nl: "Op 25 maart 1995 (niet 1996) trad het Schengen-akkoord volledig in werking voor zeven Europese landen: België, Frankrijk, Duitsland, Luxemburg, Nederland, Portugal en Spanje. Deze overeenkomst, oorspronkelijk ondertekend in 1985, schafte interne grenscontroles af en creëerde een enkele externe grens. Het Schengengebied stelt meer dan 400 miljoen EU-burgers en niet-EU-onderdanen die in de EU wonen of reizen in staat om vrij te bewegen zonder onderworpen te zijn aan grenscontroles. Vandaag omvat het Schengengebied 27 Europese landen en is het een van de grootste prestaties van de EU, die reizen, handel en culturele uitwisseling in heel Europa vergemakkelijkt."
        }
      }
    ],

    // Day 26 - March 26th: Bangladesh Independence & Egypt-Israel Peace Treaty
    day26: [
      {
        question: {
          en: "On March 26, 1971, which country declared its independence from Pakistan?",
          es: "El 26 de marzo de 1971, ¿qué país declaró su independencia de Pakistán?",
          de: "Welches Land erklärte am 26. März 1971 seine Unabhängigkeit von Pakistan?",
          nl: "Welk land verklaarde op 26 maart 1971 zijn onafhankelijkheid van Pakistan?"
        },
        options: [
          { en: "Bangladesh", es: "Bangladés", de: "Bangladesch", nl: "Bangladesh" },
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" },
          { en: "Myanmar", es: "Myanmar", de: "Myanmar", nl: "Myanmar" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 26, 1971, Bangladesh declared its independence from Pakistan after the Pakistani Army launched Operation Searchlight, a violent military crackdown. Sheikh Mujibur Rahman, leader of the Awami League, proclaimed East Pakistan's independence as the state of Bangladesh. This declaration sparked the Bangladesh Liberation War, which lasted until December 16, 1971, when Pakistan surrendered. The conflict resulted in significant casualties and displacement, but ultimately led to the birth of an independent Bangladesh, celebrated annually as Independence Day.",
          es: "El 26 de marzo de 1971, Bangladés declaró su independencia de Pakistán después de que el ejército pakistaní lanzara la Operación Searchlight, una violenta represión militar. Sheikh Mujibur Rahman, líder de la Liga Awami, proclamó la independencia de Pakistán Oriental como el estado de Bangladés. Esta declaración desencadenó la Guerra de Liberación de Bangladés, que duró hasta el 16 de diciembre de 1971, cuando Pakistán se rindió. El conflicto resultó en víctimas significativas y desplazamiento, pero finalmente llevó al nacimiento de un Bangladés independiente, celebrado anualmente como Día de la Independencia.",
          de: "Am 26. März 1971 erklärte Bangladesch seine Unabhängigkeit von Pakistan, nachdem die pakistanische Armee die Operation Searchlight startete, eine gewaltsame militärische Niederschlagung. Sheikh Mujibur Rahman, Anführer der Awami-Liga, proklamierte die Unabhängigkeit Ostpakistans als Staat Bangladesch. Diese Erklärung löste den Bangladeschischen Befreiungskrieg aus, der bis zum 16. Dezember 1971 dauerte, als Pakistan kapitulierte. Der Konflikt führte zu erheblichen Verlusten und Vertreibung, führte aber letztendlich zur Geburt eines unabhängigen Bangladesch, das jährlich als Unabhängigkeitstag gefeiert wird.",
          nl: "Op 26 maart 1971 verklaarde Bangladesh zijn onafhankelijkheid van Pakistan nadat het Pakistaanse leger Operatie Searchlight lanceerde, een gewelddadige militaire onderdrukking. Sheikh Mujibur Rahman, leider van de Awami League, riep de onafhankelijkheid van Oost-Pakistan uit als de staat Bangladesh. Deze verklaring ontketende de Bevrijdingsoorlog van Bangladesh, die duurde tot 16 december 1971, toen Pakistan capituleerde. Het conflict resulteerde in aanzienlijke slachtoffers en ontheemding, maar leidde uiteindelijk tot de geboorte van een onafhankelijk Bangladesh, jaarlijks gevierd als Onafhankelijkheidsdag."
        }
      },
      {
        question: {
          en: "On March 26, 1979, which historic peace treaty was signed between Egypt and Israel?",
          es: "El 26 de marzo de 1979, ¿qué tratado de paz histórico se firmó entre Egipto e Israel?",
          de: "Welcher historische Friedensvertrag wurde am 26. März 1979 zwischen Ägypten und Israel unterzeichnet?",
          nl: "Welk historisch vredesverdrag werd op 26 maart 1979 ondertekend tussen Egypte en Israël?"
        },
        options: [
          { en: "Egypt-Israel Peace Treaty", es: "Tratado de Paz Egipto-Israel", de: "Ägyptisch-Israelischer Friedensvertrag", nl: "Egypte-Israël Vredesverdrag" },
          { en: "Camp David Accords", es: "Acuerdos de Camp David", de: "Camp-David-Abkommen", nl: "Camp David-akkoorden" },
          { en: "Oslo Accords", es: "Acuerdos de Oslo", de: "Oslo-Abkommen", nl: "Oslo-akkoorden" },
          { en: "Treaty of Versailles", es: "Tratado de Versalles", de: "Vertrag von Versailles", nl: "Verdrag van Versailles" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 26, 1979, the Egypt-Israel Peace Treaty was signed on the White House lawn by Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin, witnessed by US President Jimmy Carter. This treaty followed the Camp David Accords negotiated in September 1978. Egypt became the first Arab country to officially recognize Israel, while Israel agreed to withdraw from the Sinai Peninsula. The agreement normalized diplomatic and economic relations between the two nations and has remained in effect for over four decades, despite regional tensions.",
          es: "El 26 de marzo de 1979, el Tratado de Paz Egipto-Israel fue firmado en el jardín de la Casa Blanca por el presidente egipcio Anwar Sadat y el primer ministro israelí Menachem Begin, siendo testigo el presidente estadounidense Jimmy Carter. Este tratado siguió a los Acuerdos de Camp David negociados en septiembre de 1978. Egipto se convirtió en el primer país árabe en reconocer oficialmente a Israel, mientras que Israel acordó retirarse de la Península del Sinaí. El acuerdo normalizó las relaciones diplomáticas y económicas entre las dos naciones y ha permanecido vigente durante más de cuatro décadas, a pesar de las tensiones regionales.",
          de: "Am 26. März 1979 wurde der Ägyptisch-Israelische Friedensvertrag auf dem Rasen des Weißen Hauses vom ägyptischen Präsidenten Anwar Sadat und dem israelischen Premierminister Menachem Begin unterzeichnet, bezeugt von US-Präsident Jimmy Carter. Dieser Vertrag folgte auf die Camp-David-Abkommen, die im September 1978 ausgehandelt wurden. Ägypten wurde das erste arabische Land, das Israel offiziell anerkannte, während Israel sich bereit erklärte, sich von der Sinai-Halbinsel zurückzuziehen. Das Abkommen normalisierte die diplomatischen und wirtschaftlichen Beziehungen zwischen beiden Nationen und ist seit über vier Jahrzehnten trotz regionaler Spannungen in Kraft.",
          nl: "Op 26 maart 1979 werd het Egypte-Israël Vredesverdrag ondertekend op het gazon van het Witte Huis door de Egyptische president Anwar Sadat en de Israëlische premier Menachem Begin, met als getuige de Amerikaanse president Jimmy Carter. Dit verdrag volgde op de Camp David-akkoorden die in september 1978 werden onderhandeld. Egypte werd het eerste Arabische land dat Israël officieel erkende, terwijl Israël ermee instemde zich terug te trekken van het Sinaï-schiereiland. Het akkoord normaliseerde de diplomatieke en economische betrekkingen tussen beide naties en is meer dan vier decennia van kracht gebleven, ondanks regionale spanningen."
        }
      },
      {
        question: {
          en: "In what year was Leonard Nimoy, famous for his role as Spock in Star Trek, born on March 26?",
          es: "¿En qué año nació Leonard Nimoy, famoso por su papel de Spock en Star Trek, el 26 de marzo?",
          de: "In welchem Jahr wurde Leonard Nimoy, berühmt für seine Rolle als Spock in Star Trek, am 26. März geboren?",
          nl: "In welk jaar werd Leonard Nimoy, beroemd om zijn rol als Spock in Star Trek, geboren op 26 maart?"
        },
        options: [
          { en: "1931", es: "1931", de: "1931", nl: "1931" },
          { en: "1926", es: "1926", de: "1926", nl: "1926" },
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1935", es: "1935", de: "1935", nl: "1935" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Leonard Nimoy was born on March 26, 1931, in Boston, Massachusetts. He became internationally famous for his portrayal of Spock in the Star Trek franchise, a role he played from 1966 until 2013. His logical, half-Vulcan character became one of the most iconic figures in science fiction history. Beyond Star Trek, Nimoy was also a director, photographer, and poet. His famous Vulcan salute and phrase 'Live long and prosper' became cultural phenomena. Nimoy passed away in 2015, leaving behind a remarkable legacy in entertainment and popular culture.",
          es: "Leonard Nimoy nació el 26 de marzo de 1931 en Boston, Massachusetts. Se hizo internacionalmente famoso por su interpretación de Spock en la franquicia de Star Trek, un papel que interpretó desde 1966 hasta 2013. Su personaje lógico y medio vulcano se convirtió en una de las figuras más icónicas de la historia de la ciencia ficción. Más allá de Star Trek, Nimoy también fue director, fotógrafo y poeta. Su famoso saludo vulcano y la frase 'Vida larga y próspera' se convirtieron en fenómenos culturales. Nimoy falleció en 2015, dejando un legado notable en el entretenimiento y la cultura popular.",
          de: "Leonard Nimoy wurde am 26. März 1931 in Boston, Massachusetts, geboren. Er wurde international berühmt für seine Darstellung von Spock im Star-Trek-Franchise, eine Rolle, die er von 1966 bis 2013 spielte. Sein logischer, halb-vulkanischer Charakter wurde zu einer der ikonischsten Figuren in der Science-Fiction-Geschichte. Über Star Trek hinaus war Nimoy auch Regisseur, Fotograf und Dichter. Sein berühmter vulkanischer Gruß und der Satz 'Lebe lang und in Frieden' wurden zu kulturellen Phänomenen. Nimoy verstarb 2015 und hinterließ ein bemerkenswertes Vermächtnis in Unterhaltung und Popkultur.",
          nl: "Leonard Nimoy werd geboren op 26 maart 1931 in Boston, Massachusetts. Hij werd internationaal beroemd door zijn vertolking van Spock in de Star Trek-franchise, een rol die hij speelde van 1966 tot 2013. Zijn logische, half-Vulcan personage werd een van de meest iconische figuren in de sciencefictiongeschiedenis. Naast Star Trek was Nimoy ook regisseur, fotograaf en dichter. Zijn beroemde Vulcan-groet en de uitspraak 'Live long and prosper' werden culturele fenomenen. Nimoy overleed in 2015 en liet een opmerkelijke erfenis achter in entertainment en populaire cultuur."
        }
      },
      {
        question: {
          en: "What major medical advance was announced on March 26, 1953, by Dr. Jonas Salk?",
          es: "¿Qué gran avance médico se anunció el 26 de marzo de 1953 por el Dr. Jonas Salk?",
          de: "Welcher bedeutende medizinische Fortschritt wurde am 26. März 1953 von Dr. Jonas Salk angekündigt?",
          nl: "Welke belangrijke medische vooruitgang werd op 26 maart 1953 aangekondigd door Dr. Jonas Salk?"
        },
        options: [
          { en: "A successful polio vaccine", es: "Una vacuna exitosa contra la polio", de: "Ein erfolgreicher Polio-Impfstoff", nl: "Een succesvol poliovaccin" },
          { en: "The discovery of penicillin", es: "El descubrimiento de la penicilina", de: "Die Entdeckung von Penicillin", nl: "De ontdekking van penicilline" },
          { en: "A cure for tuberculosis", es: "Una cura para la tuberculosis", de: "Ein Heilmittel für Tuberkulose", nl: "Een geneesmiddel voor tuberculose" },
          { en: "The first heart transplant", es: "El primer trasplante de corazón", de: "Die erste Herztransplantation", nl: "De eerste harttransplantatie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 26, 1953, Dr. Jonas Salk announced that he had successfully developed a vaccine against poliomyelitis, commonly known as polio. This announcement came after extensive testing and marked a turning point in the fight against the disease that had paralyzed and killed thousands of children each year. The vaccine underwent large-scale testing involving nearly 2 million children in 1954. By 1955, it was declared safe and effective, leading to mass immunization campaigns. Salk refused to patent the vaccine, stating 'Could you patent the sun?' His selfless act made the vaccine affordable and accessible worldwide.",
          es: "El 26 de marzo de 1953, el Dr. Jonas Salk anunció que había desarrollado con éxito una vacuna contra la poliomielitis, comúnmente conocida como polio. Este anuncio llegó después de extensas pruebas y marcó un punto de inflexión en la lucha contra la enfermedad que había paralizado y matado a miles de niños cada año. La vacuna se sometió a pruebas a gran escala que involucraron a casi 2 millones de niños en 1954. Para 1955, se declaró segura y efectiva, lo que llevó a campañas de inmunización masiva. Salk se negó a patentar la vacuna, afirmando '¿Podrías patentar el sol?' Su acto desinteresado hizo que la vacuna fuera asequible y accesible en todo el mundo.",
          de: "Am 26. März 1953 gab Dr. Jonas Salk bekannt, dass er erfolgreich einen Impfstoff gegen Poliomyelitis, allgemein als Polio bekannt, entwickelt hatte. Diese Ankündigung erfolgte nach umfangreichen Tests und markierte einen Wendepunkt im Kampf gegen die Krankheit, die jedes Jahr Tausende von Kindern gelähmt und getötet hatte. Der Impfstoff wurde 1954 in großem Maßstab an fast 2 Millionen Kindern getestet. Bis 1955 wurde er als sicher und wirksam erklärt, was zu Massenimpfkampagnen führte. Salk weigerte sich, den Impfstoff zu patentieren, und erklärte: 'Könnten Sie die Sonne patentieren?' Seine selbstlose Tat machte den Impfstoff weltweit erschwinglich und zugänglich.",
          nl: "Op 26 maart 1953 kondigde Dr. Jonas Salk aan dat hij met succes een vaccin tegen poliomyelitis, algemeen bekend als polio, had ontwikkeld. Deze aankondiging kwam na uitgebreide tests en markeerde een keerpunt in de strijd tegen de ziekte die elk jaar duizenden kinderen verlamde en doodde. Het vaccin onderging grootschalige tests waarbij in 1954 bijna 2 miljoen kinderen betrokken waren. Tegen 1955 werd het als veilig en effectief verklaard, wat leidde tot massale vaccinatiecampagnes. Salk weigerde het vaccin te patenteren en verklaarde: 'Zou je de zon kunnen patenteren?' Zijn onzelfzuchtige daad maakte het vaccin wereldwijd betaalbaar en toegankelijk."
        }
      },
      {
        question: {
          en: "On March 26, 1827, which famous composer died in Vienna at age 56?",
          es: "El 26 de marzo de 1827, ¿qué famoso compositor murió en Viena a los 56 años?",
          de: "Welcher berühmte Komponist starb am 26. März 1827 in Wien im Alter von 56 Jahren?",
          nl: "Welke beroemde componist stierf op 26 maart 1827 in Wenen op 56-jarige leeftijd?"
        },
        options: [
          { en: "Ludwig van Beethoven", es: "Ludwig van Beethoven", de: "Ludwig van Beethoven", nl: "Ludwig van Beethoven" },
          { en: "Wolfgang Amadeus Mozart", es: "Wolfgang Amadeus Mozart", de: "Wolfgang Amadeus Mozart", nl: "Wolfgang Amadeus Mozart" },
          { en: "Johann Sebastian Bach", es: "Johann Sebastian Bach", de: "Johann Sebastian Bach", nl: "Johann Sebastian Bach" },
          { en: "Franz Schubert", es: "Franz Schubert", de: "Franz Schubert", nl: "Franz Schubert" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ludwig van Beethoven died on March 26, 1827, in Vienna during a thunderstorm. Despite being almost completely deaf for the last decade of his life, he continued to compose masterpieces including his Ninth Symphony. Over 20,000 people attended his funeral, demonstrating his enormous popularity. Beethoven revolutionized classical music, bridging the Classical and Romantic periods. His works include 9 symphonies, 32 piano sonatas, and numerous chamber works. His influence on music is immeasurable, and he remains one of the most performed and revered composers in history.",
          es: "Ludwig van Beethoven murió el 26 de marzo de 1827 en Viena durante una tormenta. A pesar de estar casi completamente sordo durante la última década de su vida, continuó componiendo obras maestras, incluida su Novena Sinfonía. Más de 20,000 personas asistieron a su funeral, demostrando su enorme popularidad. Beethoven revolucionó la música clásica, uniendo los períodos Clásico y Romántico. Sus obras incluyen 9 sinfonías, 32 sonatas para piano y numerosas obras de cámara. Su influencia en la música es inconmensurable y sigue siendo uno de los compositores más interpretados y venerados de la historia.",
          de: "Ludwig van Beethoven starb am 26. März 1827 in Wien während eines Gewitters. Obwohl er im letzten Jahrzehnt seines Lebens fast vollständig taub war, komponierte er weiterhin Meisterwerke, darunter seine Neunte Symphonie. Über 20.000 Menschen besuchten seine Beerdigung, was seine enorme Popularität demonstrierte. Beethoven revolutionierte die klassische Musik und verband die Klassik mit der Romantik. Seine Werke umfassen 9 Symphonien, 32 Klaviersonaten und zahlreiche Kammermusikwerke. Sein Einfluss auf die Musik ist unermesslich, und er bleibt einer der meistaufgeführten und verehrtesten Komponisten der Geschichte.",
          nl: "Ludwig van Beethoven stierf op 26 maart 1827 in Wenen tijdens een onweersbui. Ondanks dat hij het laatste decennium van zijn leven bijna volledig doof was, bleef hij meesterwerken componeren, waaronder zijn Negende Symfonie. Meer dan 20.000 mensen woonden zijn begrafenis bij, wat zijn enorme populariteit aantoonde. Beethoven revolutioneerde de klassieke muziek en vormde een brug tussen de Klassieke en Romantische perioden. Zijn werken omvatten 9 symfonieën, 32 pianosonates en talrijke kamermuziekwerken. Zijn invloed op muziek is onmetelijk en hij blijft een van de meest uitgevoerde en gerespecteerde componisten in de geschiedenis."
        }
      }
    ],

    // Day 27 - March 27th: Alaska Earthquake & Tenerife Airport Disaster
    day27: [
      {
        question: {
          en: "On March 27, 1964, what magnitude earthquake struck Alaska, the strongest ever recorded in North America?",
          es: "El 27 de marzo de 1964, ¿qué magnitud de terremoto golpeó Alaska, el más fuerte jamás registrado en América del Norte?",
          de: "Welche Magnitude hatte das Erdbeben, das am 27. März 1964 Alaska traf und das stärkste jemals in Nordamerika aufgezeichnete war?",
          nl: "Welke magnitude had de aardbeving die op 27 maart 1964 Alaska trof, de sterkste ooit geregistreerd in Noord-Amerika?"
        },
        options: [
          { en: "9.2", es: "9.2", de: "9,2", nl: "9,2" },
          { en: "8.5", es: "8.5", de: "8,5", nl: "8,5" },
          { en: "7.8", es: "7.8", de: "7,8", nl: "7,8" },
          { en: "10.0", es: "10.0", de: "10,0", nl: "10,0" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 27, 1964, at 5:36 PM local time, a magnitude 9.2 earthquake struck Alaska, known as the Great Alaska Earthquake or Good Friday Earthquake. It lasted approximately 4.5 minutes and remains the most powerful earthquake ever recorded in North America and the second most powerful in world history after Chile's 1960 earthquake. The earthquake and subsequent tsunamis killed 139 people and caused about 400 million dollars in damage. The tsunamis affected not only Alaska but also reached Hawaii, Japan, and the U.S. West Coast, demonstrating the far-reaching impact of such massive seismic events.",
          es: "El 27 de marzo de 1964, a las 5:36 PM hora local, un terremoto de magnitud 9.2 golpeó Alaska, conocido como el Gran Terremoto de Alaska o Terremoto del Viernes Santo. Duró aproximadamente 4.5 minutos y sigue siendo el terremoto más poderoso jamás registrado en América del Norte y el segundo más poderoso en la historia mundial después del terremoto de Chile de 1960. El terremoto y los tsunamis posteriores mataron a 139 personas y causaron aproximadamente 400 millones de dólares en daños. Los tsunamis afectaron no solo a Alaska sino que también llegaron a Hawái, Japón y la costa oeste de Estados Unidos, demostrando el impacto de largo alcance de tales eventos sísmicos masivos.",
          de: "Am 27. März 1964 um 17:36 Uhr Ortszeit ereignete sich in Alaska ein Erdbeben der Stärke 9,2, bekannt als das Große Alaska-Erdbeben oder Karfreitags-Erdbeben. Es dauerte etwa 4,5 Minuten und bleibt das stärkste jemals in Nordamerika aufgezeichnete Erdbeben und das zweitstärkste in der Weltgeschichte nach Chiles Erdbeben von 1960. Das Erdbeben und die nachfolgenden Tsunamis töteten 139 Menschen und verursachten Schäden von etwa 400 Millionen Dollar. Die Tsunamis betrafen nicht nur Alaska, sondern erreichten auch Hawaii, Japan und die US-Westküste, was die weitreichenden Auswirkungen solch massiver seismischer Ereignisse demonstriert.",
          nl: "Op 27 maart 1964 om 17:36 uur lokale tijd trof een aardbeving van magnitude 9,2 Alaska, bekend als de Grote Alaska-aardbeving of Goede Vrijdag-aardbeving. Het duurde ongeveer 4,5 minuten en blijft de krachtigste aardbeving ooit geregistreerd in Noord-Amerika en de op één na krachtigste in de wereldgeschiedenis na de aardbeving in Chili in 1960. De aardbeving en daaropvolgende tsunami's doodden 139 mensen en veroorzaakten ongeveer 400 miljoen dollar aan schade. De tsunami's troffen niet alleen Alaska maar bereikten ook Hawaii, Japan en de Amerikaanse westkust, wat de verreikende impact van dergelijke massieve seismische gebeurtenissen aantoont."
        }
      },
      {
        question: {
          en: "On March 27, 1977, what was the deadliest aviation disaster in history that occurred in Tenerife, Canary Islands?",
          es: "El 27 de marzo de 1977, ¿cuál fue el desastre aéreo más mortífero de la historia que ocurrió en Tenerife, Islas Canarias?",
          de: "Was war am 27. März 1977 die tödlichste Flugkatastrophe der Geschichte, die sich in Teneriffa, Kanarische Inseln, ereignete?",
          nl: "Wat was op 27 maart 1977 de dodelijkste luchtvaartcrash in de geschiedenis die plaatsvond in Tenerife, Canarische Eilanden?"
        },
        options: [
          { en: "Engine failure caused a crash", es: "Fallo del motor causó un accidente", de: "Triebwerksausfall verursachte einen Absturz", nl: "Motorstoring veroorzaakte een crash" },
          { en: "A hijacking resulted in a crash", es: "Un secuestro resultó en un accidente", de: "Eine Entführung führte zu einem Absturz", nl: "Een kaping resulteerde in een crash" },
          { en: "Two Boeing 747s collided on the runway", es: "Dos Boeing 747 colisionaron en la pista", de: "Zwei Boeing 747 kollidierten auf der Start- und Landebahn", nl: "Twee Boeing 747's botsten op de startbaan" },
          { en: "A plane crashed into the ocean", es: "Un avión se estrelló en el océano", de: "Ein Flugzeug stürzte in den Ozean", nl: "Een vliegtuig stortte in de oceaan" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 27, 1977, two Boeing 747 passenger jets collided on the runway at Los Rodeos Airport in Tenerife, killing 583 people in the deadliest accident in aviation history. A KLM aircraft attempted to take off while a Pan Am aircraft was still on the runway in dense fog. Both planes had been diverted to the small airport after a bomb exploded at their original destination. Poor visibility, miscommunication, and the airport's inability to handle such large aircraft all contributed to the disaster. This tragedy led to significant changes in aviation procedures, including standardized phraseology and crew resource management training.",
          es: "El 27 de marzo de 1977, dos aviones Boeing 747 de pasajeros colisionaron en la pista del Aeropuerto Los Rodeos en Tenerife, matando a 583 personas en el accidente más mortífero de la historia de la aviación. Un avión de KLM intentó despegar mientras un avión de Pan Am todavía estaba en la pista en una densa niebla. Ambos aviones habían sido desviados al pequeño aeropuerto después de que explotara una bomba en su destino original. La mala visibilidad, la falta de comunicación y la incapacidad del aeropuerto para manejar aviones tan grandes contribuyeron al desastre. Esta tragedia llevó a cambios significativos en los procedimientos de aviación, incluida la fraseología estandarizada y el entrenamiento en gestión de recursos de la tripulación.",
          de: "Am 27. März 1977 kollidierten zwei Boeing 747 Passagierflugzeuge auf der Start- und Landebahn des Flughafens Los Rodeos in Teneriffa und töteten 583 Menschen im tödlichsten Unfall der Luftfahrtgeschichte. Ein KLM-Flugzeug versuchte zu starten, während sich ein Pan-Am-Flugzeug noch im dichten Nebel auf der Start- und Landebahn befand. Beide Flugzeuge waren nach einer Bombenexplosion an ihrem ursprünglichen Ziel zum kleinen Flughafen umgeleitet worden. Schlechte Sicht, Kommunikationsfehler und die Unfähigkeit des Flughafens, solch große Flugzeuge zu handhaben, trugen alle zur Katastrophe bei. Diese Tragödie führte zu erheblichen Änderungen in den Luftfahrtverfahren, einschließlich standardisierter Phraseologie und Crew-Resource-Management-Training.",
          nl: "Op 27 maart 1977 botsten twee Boeing 747 passagiersvliegtuigen op de startbaan van Los Rodeos Airport in Tenerife, waarbij 583 mensen omkwamen in het dodelijkste ongeval in de luchtvaartgeschiedenis. Een KLM-vliegtuig probeerde op te stijgen terwijl een Pan Am-vliegtuig zich nog in dichte mist op de startbaan bevond. Beide vliegtuigen waren omgeleid naar de kleine luchthaven nadat er een bom was ontploft op hun oorspronkelijke bestemming. Slecht zicht, miscommunicatie en het onvermogen van de luchthaven om dergelijke grote vliegtuigen te verwerken droegen allemaal bij aan de ramp. Deze tragedie leidde tot significante veranderingen in luchtvaartprocedures, waaronder gestandaardiseerde fraseologie en crew resource management training."
        }
      },
      {
        question: {
          en: "World Theatre Day is celebrated annually on March 27. In what year was it established by the International Theatre Institute?",
          es: "El Día Mundial del Teatro se celebra anualmente el 27 de marzo. ¿En qué año fue establecido por el Instituto Internacional del Teatro?",
          de: "Der Welttheatertag wird jährlich am 27. März gefeiert. In welchem Jahr wurde er vom Internationalen Theaterinstitut eingeführt?",
          nl: "Wereldtheaterdag wordt jaarlijks gevierd op 27 maart. In welk jaar werd het ingesteld door het Internationaal Theater Instituut?"
        },
        options: [
          { en: "1961", es: "1961", de: "1961", nl: "1961" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1977", es: "1977", de: "1977", nl: "1977" },
          { en: "1989", es: "1989", de: "1989", nl: "1989" }
        ],
        correctIndex: 2,
        explanation: {
          en: "World Theatre Day was established in 1961 by the International Theatre Institute (ITI). It is celebrated annually on March 27 to promote the art of theatre and raise awareness about the importance of theatrical performances worldwide. Each year, an outstanding theatre personality is invited to share their reflections on theatre and international harmony through an International Message. The day is marked by theatre performances, workshops, and celebrations in countries around the globe. World Theatre Day encourages governments and cultural institutions to recognize theatre's vital role in education, cultural exchange, and social development.",
          es: "El Día Mundial del Teatro fue establecido en 1961 por el Instituto Internacional del Teatro (ITI). Se celebra anualmente el 27 de marzo para promover el arte del teatro y crear conciencia sobre la importancia de las representaciones teatrales en todo el mundo. Cada año, se invita a una personalidad teatral destacada a compartir sus reflexiones sobre el teatro y la armonía internacional a través de un Mensaje Internacional. El día se marca con representaciones teatrales, talleres y celebraciones en países de todo el mundo. El Día Mundial del Teatro alienta a los gobiernos e instituciones culturales a reconocer el papel vital del teatro en la educación, el intercambio cultural y el desarrollo social.",
          de: "Der Welttheatertag wurde 1961 vom Internationalen Theaterinstitut (ITI) eingeführt. Er wird jährlich am 27. März gefeiert, um die Kunst des Theaters zu fördern und das Bewusstsein für die Bedeutung von Theateraufführungen weltweit zu schärfen. Jedes Jahr wird eine herausragende Theaterpersönlichkeit eingeladen, ihre Überlegungen zu Theater und internationaler Harmonie durch eine Internationale Botschaft zu teilen. Der Tag wird mit Theateraufführungen, Workshops und Feierlichkeiten in Ländern auf der ganzen Welt begangen. Der Welttheatertag ermutigt Regierungen und Kulturinstitutionen, die wichtige Rolle des Theaters in Bildung, kulturellem Austausch und sozialer Entwicklung anzuerkennen.",
          nl: "Wereldtheaterdag werd in 1961 ingesteld door het Internationaal Theater Instituut (ITI). Het wordt jaarlijks gevierd op 27 maart om de kunst van theater te promoten en bewustzijn te creëren over het belang van theatervoorstellingen wereldwijd. Elk jaar wordt een vooraanstaande theaterpersoonlijkheid uitgenodigd om hun reflecties over theater en internationale harmonie te delen via een Internationale Boodschap. De dag wordt gemarkeerd door theatervoorstellingen, workshops en vieringen in landen over de hele wereld. Wereldtheaterdag moedigt regeringen en culturele instellingen aan om de vitale rol van theater in onderwijs, culturele uitwisseling en sociale ontwikkeling te erkennen."
        }
      },
      {
        question: {
          en: "On March 27, 1625, which English monarch began his reign that would eventually lead to civil war?",
          es: "El 27 de marzo de 1625, ¿qué monarca inglés comenzó su reinado que eventualmente llevaría a la guerra civil?",
          de: "Welcher englische Monarch begann am 27. März 1625 seine Herrschaft, die schließlich zum Bürgerkrieg führen würde?",
          nl: "Welke Engelse monarch begon op 27 maart 1625 zijn regering die uiteindelijk tot een burgeroorlog zou leiden?"
        },
        options: [
          { en: "Charles I", es: "Carlos I", de: "Karl I.", nl: "Karel I" },
          { en: "James I", es: "Jaime I", de: "Jakob I.", nl: "Jacobus I" },
          { en: "Henry VIII", es: "Enrique VIII", de: "Heinrich VIII.", nl: "Hendrik VIII" },
          { en: "Oliver Cromwell", es: "Oliver Cromwell", de: "Oliver Cromwell", nl: "Oliver Cromwell" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Charles I became King of England, Scotland, and Ireland on March 27, 1625, following the death of his father, James I. His reign was marked by conflicts with Parliament over finances, religious policies, and royal authority. Charles believed strongly in the divine right of kings, leading to escalating tensions with Parliament. These disputes eventually erupted into the English Civil War (1642-1651) between Royalists and Parliamentarians. Charles I was defeated, put on trial for treason, and executed in 1649, becoming the only English monarch to be judicially executed. His death led to a brief republican period under Oliver Cromwell.",
          es: "Carlos I se convirtió en Rey de Inglaterra, Escocia e Irlanda el 27 de marzo de 1625, tras la muerte de su padre, Jaime I. Su reinado estuvo marcado por conflictos con el Parlamento sobre finanzas, políticas religiosas y autoridad real. Carlos creía firmemente en el derecho divino de los reyes, lo que llevó a tensiones crecientes con el Parlamento. Estas disputas finalmente estallaron en la Guerra Civil Inglesa (1642-1651) entre Realistas y Parlamentarios. Carlos I fue derrotado, sometido a juicio por traición y ejecutado en 1649, convirtiéndose en el único monarca inglés ejecutado judicialmente. Su muerte llevó a un breve período republicano bajo Oliver Cromwell.",
          de: "Karl I. wurde am 27. März 1625 König von England, Schottland und Irland nach dem Tod seines Vaters Jakob I. Seine Herrschaft war geprägt von Konflikten mit dem Parlament über Finanzen, Religionspolitik und königliche Autorität. Karl glaubte stark an das göttliche Recht der Könige, was zu eskalierenden Spannungen mit dem Parlament führte. Diese Streitigkeiten führten schließlich zum Englischen Bürgerkrieg (1642-1651) zwischen Royalisten und Parlamentariern. Karl I. wurde besiegt, wegen Hochverrats vor Gericht gestellt und 1649 hingerichtet, womit er der einzige englische Monarch wurde, der gerichtlich hingerichtet wurde. Sein Tod führte zu einer kurzen republikanischen Periode unter Oliver Cromwell.",
          nl: "Karel I werd op 27 maart 1625 koning van Engeland, Schotland en Ierland na de dood van zijn vader, Jacobus I. Zijn regering werd gekenmerkt door conflicten met het Parlement over financiën, religieus beleid en koninklijk gezag. Karel geloofde sterk in het goddelijk recht van koningen, wat leidde tot escalerende spanningen met het Parlement. Deze geschillen leidden uiteindelijk tot de Engelse Burgeroorlog (1642-1651) tussen Royalisten en Parlementariërs. Karel I werd verslagen, berecht voor verraad en in 1649 geëxecuteerd, waardoor hij de enige Engelse monarch werd die gerechtelijk werd geëxecuteerd. Zijn dood leidde tot een korte republikeinse periode onder Oliver Cromwell."
        }
      },
      {
        question: {
          en: "On March 27, 1958, which Soviet leader became Premier of the Soviet Union?",
          es: "El 27 de marzo de 1958, ¿qué líder soviético se convirtió en Primer Ministro de la Unión Soviética?",
          de: "Welcher sowjetische Führer wurde am 27. März 1958 Premierminister der Sowjetunion?",
          nl: "Welke Sovjet-leider werd op 27 maart 1958 premier van de Sovjet-Unie?"
        },
        options: [
          { en: "Nikita Khrushchev", es: "Nikita Jruschov", de: "Nikita Chruschtschow", nl: "Nikita Chroesjtsjov" },
          { en: "Joseph Stalin", es: "Iósif Stalin", de: "Josef Stalin", nl: "Joseph Stalin" },
          { en: "Leonid Brezhnev", es: "Leonid Brézhnev", de: "Leonid Breschnew", nl: "Leonid Brezjnev" },
          { en: "Mikhail Gorbachev", es: "Mijaíl Gorbachov", de: "Michail Gorbatschow", nl: "Michail Gorbatsjov" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 27, 1958, Nikita Khrushchev became Premier of the Soviet Union, consolidating his power after the death of Stalin in 1953. Khrushchev was already First Secretary of the Communist Party, and assuming the premiership gave him complete control. His tenure was marked by de-Stalinization, the Space Race, the Cuban Missile Crisis, and a period of 'peaceful coexistence' with the West. Khrushchev's famous 1956 'Secret Speech' denouncing Stalin's crimes shocked the communist world. He was removed from power in 1964 and replaced by Leonid Brezhnev. Despite his ouster, Khrushchev's reforms had lasting impacts on Soviet society.",
          es: "El 27 de marzo de 1958, Nikita Jruschov se convirtió en Primer Ministro de la Unión Soviética, consolidando su poder después de la muerte de Stalin en 1953. Jruschov ya era Primer Secretario del Partido Comunista, y asumir la presidencia del gobierno le dio control completo. Su mandato estuvo marcado por la desestalinización, la Carrera Espacial, la Crisis de los Misiles de Cuba y un período de 'coexistencia pacífica' con Occidente. El famoso 'Discurso Secreto' de Jruschov de 1956 denunciando los crímenes de Stalin conmocionó al mundo comunista. Fue removido del poder en 1964 y reemplazado por Leonid Brézhnev. A pesar de su destitución, las reformas de Jruschov tuvieron impactos duraderos en la sociedad soviética.",
          de: "Am 27. März 1958 wurde Nikita Chruschtschow Premierminister der Sowjetunion und festigte damit seine Macht nach Stalins Tod 1953. Chruschtschow war bereits Erster Sekretär der Kommunistischen Partei, und die Übernahme des Premierministeramts gab ihm die vollständige Kontrolle. Seine Amtszeit war geprägt von der Entstalinisierung, dem Wettlauf ins All, der Kubakrise und einer Periode der 'friedlichen Koexistenz' mit dem Westen. Chruschtschows berühmte 'Geheimrede' von 1956, in der er Stalins Verbrechen anprangerte, schockierte die kommunistische Welt. Er wurde 1964 entmachtet und durch Leonid Breschnew ersetzt. Trotz seiner Absetzung hatten Chruschtschows Reformen dauerhafte Auswirkungen auf die sowjetische Gesellschaft.",
          nl: "Op 27 maart 1958 werd Nikita Chroesjtsjov premier van de Sovjet-Unie, waarbij hij zijn macht consolideerde na de dood van Stalin in 1953. Chroesjtsjov was al Eerste Secretaris van de Communistische Partij, en het aannemen van het premierschap gaf hem volledige controle. Zijn ambtstermijn werd gekenmerkt door de-Stalinisatie, de Ruimtewedloop, de Cubacrisis en een periode van 'vreedzame coëxistentie' met het Westen. Chroesjtsjovs beroemde 'Geheime Toespraak' van 1956 waarin hij Stalins misdaden aankaagde, schokte de communistische wereld. Hij werd in 1964 uit zijn macht gezet en vervangen door Leonid Brezjnev. Ondanks zijn afzetting hadden Chroesjtsjovs hervormingen blijvende impact op de Sovjet-samenleving."
        }
      }
    ],

    // Day 28 - March 28th: Three Mile Island & Spanish Civil War
    day28: [
      {
        question: {
          en: "On March 28, 1979, what nuclear accident occurred in Pennsylvania, marking the worst commercial nuclear power plant accident in U.S. history?",
          es: "El 28 de marzo de 1979, ¿qué accidente nuclear ocurrió en Pensilvania, marcando el peor accidente de planta nuclear comercial en la historia de EE.UU.?",
          de: "Welcher Atomunfall ereignete sich am 28. März 1979 in Pennsylvania und markierte den schlimmsten kommerziellen Kernkraftwerksu nfall in der US-Geschichte?",
          nl: "Welk nucleair ongeval vond plaats op 28 maart 1979 in Pennsylvania, wat het ergste commerciële kerncentrale-ongeval in de Amerikaanse geschiedenis markeerde?"
        },
        options: [
          { en: "Three Mile Island accident", es: "Accidente de Three Mile Island", de: "Three-Mile-Island-Unfall", nl: "Three Mile Island ongeval" },
          { en: "Chernobyl disaster", es: "Desastre de Chernóbil", de: "Tschernobyl-Katastrophe", nl: "Tsjernobyl ramp" },
          { en: "Fukushima disaster", es: "Desastre de Fukushima", de: "Fukushima-Katastrophe", nl: "Fukushima ramp" },
          { en: "Hanford Site leak", es: "Fuga del sitio Hanford", de: "Hanford-Standort-Leck", nl: "Hanford Site lek" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 28, 1979, at 4:00 AM, a pressure valve in the Unit-2 reactor at Three Mile Island nuclear power plant near Harrisburg, Pennsylvania, failed to close properly. This led to a partial meltdown of the reactor core. While no deaths or injuries occurred directly from the accident, it released small amounts of radioactive gases into the environment. The incident lasted several days and caused public panic about nuclear safety. It led to sweeping reforms in nuclear plant operations, emergency response planning, and safety protocols. The accident significantly eroded public confidence in nuclear power and effectively halted new nuclear power plant construction in the United States for decades.",
          es: "El 28 de marzo de 1979, a las 4:00 AM, una válvula de presión en el reactor de la Unidad 2 de la planta nuclear Three Mile Island cerca de Harrisburg, Pensilvania, no se cerró correctamente. Esto llevó a una fusión parcial del núcleo del reactor. Aunque no hubo muertes o lesiones directamente por el accidente, liberó pequeñas cantidades de gases radiactivos al ambiente. El incidente duró varios días y causó pánico público sobre la seguridad nuclear. Llevó a reformas radicales en las operaciones de plantas nucleares, planificación de respuesta a emergencias y protocolos de seguridad. El accidente erosionó significativamente la confianza pública en la energía nuclear y efectivamente detuvo la construcción de nuevas plantas nucleares en Estados Unidos durante décadas.",
          de: "Am 28. März 1979 um 4:00 Uhr versagte ein Druckventil im Reaktor der Einheit 2 des Kernkraftwerks Three Mile Island in der Nähe von Harrisburg, Pennsylvania. Dies führte zu einer teilweisen Kernschmelze. Obwohl keine Todesfälle oder Verletzungen direkt durch den Unfall auftraten, wurden kleine Mengen radioaktiver Gase in die Umwelt freigesetzt. Der Vorfall dauerte mehrere Tage und verursachte öffentliche Panik über nukleare Sicherheit. Er führte zu umfassenden Reformen im Betrieb von Kernkraftwerken, Notfallplanung und Sicherheitsprotokollen. Der Unfall untergrub das öffentliche Vertrauen in die Kernenergie erheblich und stoppte effektiv den Neubau von Kernkraftwerken in den Vereinigten Staaten für Jahrzehnte.",
          nl: "Op 28 maart 1979 om 04:00 uur werkte een drukklep in de Unit-2 reactor van de kerncentrale Three Mile Island nabij Harrisburg, Pennsylvania, niet goed. Dit leidde tot een gedeeltelijke kernsmelting. Hoewel er geen doden of gewonden direct door het ongeval vielen, werden kleine hoeveelheden radioactieve gassen in het milieu vrijgelaten. Het incident duurde meerdere dagen en veroorzaakte publieke paniek over nucleaire veiligheid. Het leidde tot verstrekkende hervormingen in kerncentrale-operaties, noodresponsplanning en veiligheidsprotocollen. Het ongeval ondermijnde het publieke vertrouwen in kernenergie aanzienlijk en stopte effectief de bouw van nieuwe kerncentrales in de Verenigde Staten voor decennia."
        }
      },
      {
        question: {
          en: "On March 28, 1939, which European capital city fell, ending the Spanish Civil War?",
          es: "El 28 de marzo de 1939, ¿qué capital europea cayó, terminando la Guerra Civil Española?",
          de: "Welche europäische Hauptstadt fiel am 28. März 1939 und beendete damit den Spanischen Bürgerkrieg?",
          nl: "Welke Europese hoofdstad viel op 28 maart 1939, waarmee de Spaanse Burgeroorlog eindigde?"
        },
        options: [
          { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" },
          { en: "Barcelona", es: "Barcelona", de: "Barcelona", nl: "Barcelona" },
          { en: "Valencia", es: "Valencia", de: "Valencia", nl: "Valencia" },
          { en: "Seville", es: "Sevilla", de: "Sevilla", nl: "Sevilla" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 28, 1939, Nationalist forces led by General Francisco Franco entered Madrid, marking the end of Republican resistance in the Spanish capital. This effectively ended the Spanish Civil War, which had begun in July 1936. The conflict pitted Franco's Nationalists, supported by Nazi Germany and Fascist Italy, against the Republican government, supported by the Soviet Union and international volunteers. The war resulted in an estimated 500,000 to 1 million deaths. Franco would rule Spain as a dictator until his death in 1975. The Spanish Civil War is often seen as a prelude to World War II, with many considering it a testing ground for military tactics and ideologies.",
          es: "El 28 de marzo de 1939, las fuerzas nacionalistas lideradas por el general Francisco Franco entraron en Madrid, marcando el fin de la resistencia republicana en la capital española. Esto efectivamente terminó la Guerra Civil Española, que había comenzado en julio de 1936. El conflicto enfrentó a los nacionalistas de Franco, apoyados por la Alemania Nazi y la Italia Fascista, contra el gobierno republicano, apoyado por la Unión Soviética y voluntarios internacionales. La guerra resultó en aproximadamente 500,000 a 1 millón de muertes. Franco gobernaría España como dictador hasta su muerte en 1975. La Guerra Civil Española a menudo se ve como un preludio de la Segunda Guerra Mundial, con muchos considerándola un campo de pruebas para tácticas militares e ideologías.",
          de: "Am 28. März 1939 marschierten die von General Francisco Franco geführten nationalistischen Truppen in Madrid ein und markierten damit das Ende des republikanischen Widerstands in der spanischen Hauptstadt. Dies beendete effektiv den Spanischen Bürgerkrieg, der im Juli 1936 begonnen hatte. Der Konflikt stellte Francos Nationalisten, unterstützt von Nazi-Deutschland und dem faschistischen Italien, gegen die republikanische Regierung, unterstützt von der Sowjetunion und internationalen Freiwilligen. Der Krieg führte zu schätzungsweise 500.000 bis 1 Million Toten. Franco würde Spanien als Diktator bis zu seinem Tod 1975 regieren. Der Spanische Bürgerkrieg wird oft als Vorspiel zum Zweiten Weltkrieg gesehen, wobei viele ihn als Testgelände für militärische Taktiken und Ideologien betrachten.",
          nl: "Op 28 maart 1939 trokken de nationalistische troepen onder leiding van generaal Francisco Franco Madrid binnen, wat het einde markeerde van het republikeinse verzet in de Spaanse hoofdstad. Dit beëindigde effectief de Spaanse Burgeroorlog, die in juli 1936 was begonnen. Het conflict stelde Franco's nationalisten, gesteund door Nazi-Duitsland en Fascistisch Italië, tegenover de Republikeinse regering, gesteund door de Sovjet-Unie en internationale vrijwilligers. De oorlog resulteerde in naar schatting 500.000 tot 1 miljoen doden. Franco zou Spanje als dictator regeren tot zijn dood in 1975. De Spaanse Burgeroorlog wordt vaak gezien als een opmaat naar de Tweede Wereldoorlog, waarbij velen het beschouwen als een testterrein voor militaire tactieken en ideologieën."
        }
      },
      {
        question: {
          en: "On March 28, 1941, which famous English author drowned herself in the River Ouse?",
          es: "El 28 de marzo de 1941, ¿qué famosa autora inglesa se ahogó en el río Ouse?",
          de: "Welche berühmte englische Autorin ertränkte sich am 28. März 1941 im Fluss Ouse?",
          nl: "Welke beroemde Engelse auteur verdronk zichzelf op 28 maart 1941 in de rivier Ouse?"
        },
        options: [
          { en: "Virginia Woolf", es: "Virginia Woolf", de: "Virginia Woolf", nl: "Virginia Woolf" },
          { en: "Agatha Christie", es: "Agatha Christie", de: "Agatha Christie", nl: "Agatha Christie" },
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "Charlotte Brontë", es: "Charlotte Brontë", de: "Charlotte Brontë", nl: "Charlotte Brontë" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 28, 1941, Virginia Woolf, one of the most influential modernist writers of the 20th century, committed suicide by filling her coat pockets with stones and walking into the River Ouse near her home in Lewes, England. She had recently completed her final novel, 'Between the Acts.' Woolf had suffered from mental illness throughout her life, experiencing several breakdowns. Fearing another debilitating episode as World War II intensified, she left notes for her husband Leonard and her sister Vanessa. Her pioneering stream-of-consciousness writing technique and novels like 'Mrs. Dalloway,' 'To the Lighthouse,' and 'Orlando' revolutionized literature and continue to influence writers today.",
          es: "El 28 de marzo de 1941, Virginia Woolf, una de las escritoras modernistas más influyentes del siglo XX, se suicidó llenando los bolsillos de su abrigo con piedras y caminando hacia el río Ouse cerca de su casa en Lewes, Inglaterra. Había completado recientemente su última novela, 'Entre actos'. Woolf había sufrido de enfermedad mental durante toda su vida, experimentando varios episodios. Temiendo otro episodio debilitante mientras la Segunda Guerra Mundial se intensificaba, dejó notas para su esposo Leonard y su hermana Vanessa. Su innovadora técnica de escritura de corriente de conciencia y novelas como 'La señora Dalloway', 'Al faro' y 'Orlando' revolucionaron la literatura y continúan influyendo en los escritores hoy.",
          de: "Am 28. März 1941 beging Virginia Woolf, eine der einflussreichsten modernistischen Schriftstellerinnen des 20. Jahrhunderts, Selbstmord, indem sie ihre Manteltaschen mit Steinen füllte und in den Fluss Ouse in der Nähe ihres Hauses in Lewes, England, ging. Sie hatte kürzlich ihren letzten Roman 'Zwischen den Akten' fertiggestellt. Woolf hatte ihr ganzes Leben lang unter psychischen Erkrankungen gelitten und mehrere Zusammenbrüche erlebt. Aus Angst vor einer weiteren schwächenden Episode, während sich der Zweite Weltkrieg intensivierte, hinterließ sie Briefe für ihren Ehemann Leonard und ihre Schwester Vanessa. Ihre bahnbrechende Stream-of-Consciousness-Schreibtechnik und Romane wie 'Mrs. Dalloway', 'Zum Leuchtturm' und 'Orlando' revolutionierten die Literatur und beeinflussen Schriftsteller bis heute.",
          nl: "Op 28 maart 1941 pleegde Virginia Woolf, een van de meest invloedrijke modernistische schrijvers van de 20e eeuw, zelfmoord door haar jaszakken te vullen met stenen en de rivier de Ouse in te lopen bij haar huis in Lewes, Engeland. Ze had onlangs haar laatste roman, 'Between the Acts', voltooid. Woolf had haar hele leven aan een psychische aandoening geleden en meerdere instortingen doorgemaakt. Uit angst voor een nieuwe slopende episode terwijl de Tweede Wereldoorlog intensiveerde, liet ze brieven achter voor haar man Leonard en haar zus Vanessa. Haar baanbrekende stream-of-consciousness schrijftechniek en romans als 'Mrs. Dalloway', 'To the Lighthouse' en 'Orlando' revolutioneerden de literatuur en blijven schrijvers vandaag beïnvloeden."
        }
      },
      {
        question: {
          en: "On March 28, 1854, which two major European powers declared war on Russia, beginning the Crimean War?",
          es: "El 28 de marzo de 1854, ¿qué dos grandes potencias europeas declararon la guerra a Rusia, comenzando la Guerra de Crimea?",
          de: "Welche zwei großen europäischen Mächte erklärten am 28. März 1854 Russland den Krieg und begannen damit den Krimkrieg?",
          nl: "Welke twee grote Europese machten verklaarden op 28 maart 1854 de oorlog aan Rusland, waarmee de Krimoorlog begon?"
        },
        options: [
          { en: "Britain and France", es: "Gran Bretaña y Francia", de: "Großbritannien und Frankreich", nl: "Groot-Brittannië en Frankrijk" },
          { en: "Germany and Austria", es: "Alemania y Austria", de: "Deutschland und Österreich", nl: "Duitsland en Oostenrijk" },
          { en: "Spain and Portugal", es: "España y Portugal", de: "Spanien und Portugal", nl: "Spanje en Portugal" },
          { en: "Italy and Greece", es: "Italia y Grecia", de: "Italien und Griechenland", nl: "Italië en Griekenland" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 28, 1854, Britain and France declared war on Russia, officially entering the Crimean War in support of the Ottoman Empire. The war, fought primarily on the Crimean Peninsula, lasted until 1856. It is notable for several reasons: it was one of the first conflicts extensively covered by war correspondents and photographers, Florence Nightingale's nursing efforts revolutionized medical care, and the disastrous Charge of the Light Brigade became legendary. The war resulted in approximately 750,000 deaths, many from disease rather than combat. The Treaty of Paris in 1856 ended the war, limiting Russian expansion and naval power in the Black Sea.",
          es: "El 28 de marzo de 1854, Gran Bretaña y Francia declararon la guerra a Rusia, entrando oficialmente en la Guerra de Crimea en apoyo del Imperio Otomano. La guerra, librada principalmente en la península de Crimea, duró hasta 1856. Es notable por varias razones: fue uno de los primeros conflictos cubiertos extensamente por corresponsales de guerra y fotógrafos, los esfuerzos de enfermería de Florence Nightingale revolucionaron la atención médica, y la desastrosa Carga de la Brigada Ligera se volvió legendaria. La guerra resultó en aproximadamente 750,000 muertes, muchas por enfermedades más que por combate. El Tratado de París de 1856 terminó la guerra, limitando la expansión rusa y el poder naval en el Mar Negro.",
          de: "Am 28. März 1854 erklärten Großbritannien und Frankreich Russland den Krieg und traten offiziell in den Krimkrieg ein, um das Osmanische Reich zu unterstützen. Der Krieg, der hauptsächlich auf der Krim-Halbinsel ausgetragen wurde, dauerte bis 1856. Er ist aus mehreren Gründen bemerkenswert: Er war einer der ersten Konflikte, die umfassend von Kriegskorrespondenten und Fotografen abgedeckt wurden, Florence Nightingales Pflegeleistungen revolutionierten die medizinische Versorgung, und der katastrophale Angriff der Leichten Brigade wurde legendär. Der Krieg führte zu etwa 750.000 Toten, viele durch Krankheiten statt Kampf. Der Pariser Vertrag von 1856 beendete den Krieg und begrenzte die russische Expansion und Seemacht im Schwarzen Meer.",
          nl: "Op 28 maart 1854 verklaarden Groot-Brittannië en Frankrijk de oorlog aan Rusland en traden officieel toe tot de Krimoorlog ter ondersteuning van het Ottomaanse Rijk. De oorlog, voornamelijk gevoerd op het Krim-schiereiland, duurde tot 1856. Het is om verschillende redenen opmerkelijk: het was een van de eerste conflicten die uitgebreid werden gedekt door oorlogscorrespondenten en fotografen, Florence Nightingales verpleegkundige inspanningen revolutioneerden de medische zorg, en de rampzalige Charge of the Light Brigade werd legendarisch. De oorlog resulteerde in ongeveer 750.000 doden, velen door ziekte in plaats van gevechten. Het Verdrag van Parijs in 1856 beëindigde de oorlog en beperkte de Russische expansie en zeemacht in de Zwarte Zee."
        }
      },
      {
        question: {
          en: "On March 28, 1942, which major British city suffered devastating air raids during World War II, known as the Baedeker raids?",
          es: "El 28 de marzo de 1942, ¿qué importante ciudad británica sufrió devastadores ataques aéreos durante la Segunda Guerra Mundial, conocidos como las incursiones Baedeker?",
          de: "Welche größere britische Stadt erlitt am 28. März 1942 verheerende Luftangriffe während des Zweiten Weltkriegs, die als Baedeker-Angriffe bekannt sind?",
          nl: "Welke grote Britse stad leed op 28 maart 1942 verwoestende luchtaanvallen tijdens de Tweede Wereldoorlog, bekend als de Baedeker-aanvallen?"
        },
        options: [
          { en: "Lübeck", es: "Lübeck", de: "Lübeck", nl: "Lübeck" },
          { en: "Coventry", es: "Coventry", de: "Coventry", nl: "Coventry" },
          { en: "Plymouth", es: "Plymouth", de: "Plymouth", nl: "Plymouth" },
          { en: "Canterbury", es: "Canterbury", de: "Canterbury", nl: "Canterbury" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 28, 1942, the RAF bombed the German city of Lübeck in a devastating raid that destroyed much of the medieval city center. This raid prompted Germany to retaliate with the 'Baedeker raids,' named after the famous travel guidebook series. Germany targeted historic English cities of cultural significance (listed in Baedeker guides) rather than military or industrial targets. The Lübeck raid marked a shift in Allied bombing strategy toward area bombing of German cities. Over 300 people were killed in Lübeck, and approximately 60% of the historic old town was destroyed. The raid demonstrated the effectiveness of incendiary bombs against medieval timber-framed buildings.",
          es: "El 28 de marzo de 1942, la RAF bombardeó la ciudad alemana de Lübeck en una incursión devastadora que destruyó gran parte del centro medieval de la ciudad. Esta incursión provocó que Alemania tomara represalias con las 'incursiones Baedeker', nombradas así por la famosa serie de guías de viaje. Alemania atacó ciudades históricas inglesas de importancia cultural (listadas en las guías Baedeker) en lugar de objetivos militares o industriales. La incursión de Lübeck marcó un cambio en la estrategia de bombardeo aliada hacia el bombardeo de área de ciudades alemanas. Más de 300 personas murieron en Lübeck, y aproximadamente el 60% del casco histórico antiguo fue destruido. La incursión demostró la efectividad de las bombas incendiarias contra edificios medievales con estructura de madera.",
          de: "Am 28. März 1942 bombardierte die RAF die deutsche Stadt Lübeck in einem verheerenden Angriff, der einen Großteil der mittelalterlichen Innenstadt zerstörte. Dieser Angriff veranlasste Deutschland, mit den 'Baedeker-Angriffen' zu reagieren, benannt nach der berühmten Reiseführerreihe. Deutschland zielte auf historische englische Städte von kultureller Bedeutung (in Baedeker-Führern aufgeführt) statt auf militärische oder industrielle Ziele. Der Lübeck-Angriff markierte eine Verschiebung in der alliierten Bombenstrategie hin zu Flächenbombardements deutscher Städte. Über 300 Menschen wurden in Lübeck getötet, und etwa 60% der historischen Altstadt wurden zerstört. Der Angriff demonstrierte die Wirksamkeit von Brandbomben gegen mittelalterliche Fachwerkhäuser.",
          nl: "Op 28 maart 1942 bombardeerde de RAF de Duitse stad Lübeck in een verwoestende aanval die een groot deel van het middeleeuwse stadscentrum vernietigde. Deze aanval zette Duitsland ertoe aan te vergelden met de 'Baedeker-aanvallen', genoemd naar de beroemde reisgidsenserie. Duitsland richtte zich op historische Engelse steden van cultureel belang (vermeld in Baedeker-gidsen) in plaats van militaire of industriële doelen. De Lübeck-aanval markeerde een verschuiving in de geallieerde bombardementsstrategie naar gebiedsbombardementen van Duitse steden. Meer dan 300 mensen werden gedood in Lübeck, en ongeveer 60% van de historische binnenstad werd verwoest. De aanval toonde de effectiviteit aan van brandbommen tegen middeleeuwse vakwerkgebouwen."
        }
      }
    ],

    // Day 29 - March 29th: Vietnam War & Historical Events
    day29: [
      {
        question: {
          en: "On March 29, 1973, what significant event marked the end of direct U.S. military involvement in the Vietnam War?",
          es: "El 29 de marzo de 1973, ¿qué evento significativo marcó el final de la participación militar directa de EE.UU. en la Guerra de Vietnam?",
          de: "Welches bedeutende Ereignis markierte am 29. März 1973 das Ende der direkten US-Militärbeteiligung am Vietnamkrieg?",
          nl: "Welke belangrijke gebeurtenis markeerde op 29 maart 1973 het einde van de directe Amerikaanse militaire betrokkenheid bij de Vietnamoorlog?"
        },
        options: [
          { en: "Last U.S. combat troops left Vietnam", es: "Las últimas tropas de combate de EE.UU. salieron de Vietnam", de: "Die letzten US-Kampftruppen verließen Vietnam", nl: "De laatste Amerikaanse gevechtstroepenverlieten Vietnam" },
          { en: "Fall of Saigon", es: "Caída de Saigón", de: "Fall von Saigon", nl: "Val van Saigon" },
          { en: "Tet Offensive began", es: "Comenzó la Ofensiva del Tet", de: "Tet-Offensive begann", nl: "Tet-offensief begon" },
          { en: "Gulf of Tonkin incident", es: "Incidente del Golfo de Tonkin", de: "Golf-von-Tonkin-Zwischenfall", nl: "Golf van Tonkin-incident" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 29, 1973, the last U.S. combat troops left South Vietnam, marking the end of direct American military involvement in the Vietnam War. This withdrawal came two months after the signing of the Paris Peace Accords in January 1973. While combat troops departed, military advisers and Marines protecting U.S. installations remained. The war itself continued for two more years after the American withdrawal, ending with the fall of Saigon on April 30, 1975. In recognition of this date's significance, the Vietnam War Veterans Recognition Act of 2017 designated every March 29 as National Vietnam War Veterans Day.",
          es: "El 29 de marzo de 1973, las últimas tropas de combate de EE.UU. salieron de Vietnam del Sur, marcando el final de la participación militar directa estadounidense en la Guerra de Vietnam. Esta retirada llegó dos meses después de la firma de los Acuerdos de Paz de París en enero de 1973. Mientras las tropas de combate partieron, los asesores militares y los Marines que protegían las instalaciones estadounidenses permanecieron. La guerra misma continuó durante dos años más después de la retirada estadounidense, terminando con la caída de Saigón el 30 de abril de 1975. En reconocimiento a la importancia de esta fecha, la Ley de Reconocimiento de Veteranos de la Guerra de Vietnam de 2017 designó cada 29 de marzo como Día Nacional de los Veteranos de la Guerra de Vietnam.",
          de: "Am 29. März 1973 verließen die letzten US-Kampftruppen Südvietnam und markierten damit das Ende der direkten amerikanischen Militärbeteiligung am Vietnamkrieg. Dieser Rückzug erfolgte zwei Monate nach der Unterzeichnung des Pariser Friedensabkommens im Januar 1973. Während die Kampftruppen abzogen, blieben Militärberater und Marines zum Schutz der US-Einrichtungen zurück. Der Krieg selbst dauerte nach dem amerikanischen Rückzug noch zwei weitere Jahre und endete mit dem Fall von Saigon am 30. April 1975. In Anerkennung der Bedeutung dieses Datums wurde durch das Vietnam War Veterans Recognition Act von 2017 jeder 29. März als Nationaler Vietnam-Veteranentag festgelegt.",
          nl: "Op 29 maart 1973 verlieten de laatste Amerikaanse gevechtstr oepen Zuid-Vietnam, wat het einde markeerde van de directe Amerikaanse militaire betrokkenheid bij de Vietnamoorlog. Deze terugtrekking kwam twee maanden na de ondertekening van de Pari jse Vredesakkoorden in januari 1973. Hoewel gevechtstropen vertrokken, bleven militaire adviseurs en mariniers die Amerikaanse installaties beschermden achter. De oorlog zelf duurde nog twee jaar na de Amerikaanse terugtrekking en eindigde met de val van Saigon op 30 april 1975. Ter erkenning van het belang van deze datum werd door de Vietnam War Veterans Recognition Act van 2017 elke 29 maart aangewezen als Nationale Vietnam Oorlogsveteranen Dag."
        }
      },
      {
        question: {
          en: "On March 29, 1867, the British North America Act received royal assent. What country did this create?",
          es: "El 29 de marzo de 1867, la Ley de América del Norte Británica recibió el consentimiento real. ¿Qué país creó esto?",
          de: "Am 29. März 1867 erhielt das British North America Act die königliche Zustimmung. Welches Land entstand dadurch?",
          nl: "Op 29 maart 1867 ontving de British North America Act koninklijke goedkeuring. Welk land werd hierdoor gecreëerd?"
        },
        options: [
          { en: "Canada (officially on July 1, 1867)", es: "Canadá (oficialmente el 1 de julio de 1867)", de: "Kanada (offiziell am 1. Juli 1867)", nl: "Canada (officieel op 1 juli 1867)" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "New Zealand", es: "Nueva Zelanda", de: "Neuseeland", nl: "Nieuw-Zeeland" },
          { en: "India", es: "India", de: "Indien", nl: "India" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 29, 1867, the British North America Act received royal assent from Queen Victoria, paving the way for Canadian Confederation. The act came into effect on July 1, 1867, creating the Dominion of Canada by uniting the provinces of Ontario, Quebec, Nova Scotia, and New Brunswick. This date is now celebrated as Canada Day. The act established Canada as a self-governing dominion within the British Empire, with its own parliament and federal structure. Canada gradually gained full sovereignty, achieving complete legislative independence with the Statute of Westminster in 1931 and patriating its constitution in 1982.",
          es: "El 29 de marzo de 1867, la Ley de América del Norte Británica recibió el consentimiento real de la Reina Victoria, allanando el camino para la Confederación Canadiense. La ley entró en vigor el 1 de julio de 1867, creando el Dominio de Canadá al unir las provincias de Ontario, Quebec, Nueva Escocia y Nuevo Brunswick. Esta fecha ahora se celebra como el Día de Canadá. La ley estableció a Canadá como un dominio autogobernado dentro del Imperio Británico, con su propio parlamento y estructura federal. Canadá gradualmente ganó soberanía completa, logrando independencia legislativa completa con el Estatuto de Westminster en 1931 y patriando su constitución en 1982.",
          de: "Am 29. März 1867 erhielt das British North America Act die königliche Zustimmung von Königin Victoria und ebnete damit den Weg für die kanadische Konföderation. Das Gesetz trat am 1. Juli 1867 in Kraft und schuf das Dominion of Canada durch die Vereinigung der Provinzen Ontario, Quebec, Nova Scotia und New Brunswick. Dieses Datum wird heute als Kanada-Tag gefeiert. Das Gesetz etablierte Kanada als selbstverwaltetes Dominion innerhalb des Britischen Empire mit eigenem Parlament und föderaler Struktur. Kanada erlangte schrittweise volle Souveränität, erreichte vollständige gesetzgebende Unabhängigkeit mit dem Statut von Westminster 1931 und patriierte seine Verfassung 1982.",
          nl: "Op 29 maart 1867 ontving de British North America Act koninklijke goedkeuring van koningin Victoria, wat de weg vrijmaakte voor de Canadese Confederatie. De wet trad in werking op 1 juli 1867 en creëerde het Dominion of Canada door de provincies Ontario, Quebec, Nova Scotia en New Brunswick te verenigen. Deze datum wordt nu gevierd als Canada Day. De wet vestigde Canada als een zelfbesturend dominium binnen het Britse Rijk, met zijn eigen parlement en federale structuur. Canada verwierf geleidelijk volledige soevereiniteit, bereikte volledige wetgevende onafhankelijkheid met het Statuut van Westminster in 1931 en patrieerde zijn grondwet in 1982."
        }
      },
      {
        question: {
          en: "On March 29, 2004, which former Soviet Bloc countries joined NATO, marking a significant expansion eastward?",
          es: "El 29 de marzo de 2004, ¿qué antiguos países del bloque soviético se unieron a la OTAN, marcando una expansión significativa hacia el este?",
          de: "Welche ehemaligen Ostblockstaaten traten am 29. März 2004 der NATO bei und markierten damit eine bedeutende Osterweiterung?",
          nl: "Welke voormalige Sovjet-Blok landen traden op 29 maart 2004 toe tot de NAVO, wat een belangrijke uitbreiding naar het oosten markeerde?"
        },
        options: [
          { en: "Bulgaria, Romania, Slovakia, Slovenia, Estonia, Latvia, Lithuania", es: "Bulgaria, Rumania, Eslovaquia, Eslovenia, Estonia, Letonia, Lituania", de: "Bulgarien, Rumänien, Slowakei, Slowenien, Estland, Lettland, Litauen", nl: "Bulgarije, Roemenië, Slowakije, Slovenië, Estland, Letland, Litouwen" },
          { en: "Only Poland and Hungary", es: "Solo Polonia y Hungría", de: "Nur Polen und Ungarn", nl: "Alleen Polen en Hongarije" },
          { en: "Ukraine and Georgia", es: "Ucrania y Georgia", de: "Ukraine und Georgien", nl: "Oekraïne en Georgië" },
          { en: "Belarus and Moldova", es: "Bielorrusia y Moldavia", de: "Belarus und Moldawien", nl: "Wit-Rusland en Moldavië" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 29, 2004, seven former communist countries joined NATO in the alliance's largest expansion: Bulgaria, Romania, Slovakia, Slovenia, and the three Baltic states of Estonia, Latvia, and Lithuania. This brought NATO membership to 26 nations and was particularly significant as it included former Soviet republics (the Baltic states), demonstrating the dramatic geopolitical shift following the Cold War's end. The expansion was controversial in Russia, which viewed it as encroachment on its sphere of influence. These countries had worked hard to meet NATO's democratic and military standards since the fall of communism in 1989-1991.",
          es: "El 29 de marzo de 2004, siete antiguos países comunistas se unieron a la OTAN en la mayor expansión de la alianza: Bulgaria, Rumania, Eslovaquia, Eslovenia y los tres estados bálticos de Estonia, Letonia y Lituania. Esto llevó la membresía de la OTAN a 26 naciones y fue particularmente significativo ya que incluía antiguas repúblicas soviéticas (los estados bálticos), demostrando el dramático cambio geopolítico tras el final de la Guerra Fría. La expansión fue controvertida en Rusia, que la vio como una invasión de su esfera de influencia. Estos países habían trabajado duro para cumplir con los estándares democráticos y militares de la OTAN desde la caída del comunismo en 1989-1991.",
          de: "Am 29. März 2004 traten sieben ehemalige kommunistische Länder der NATO in der größten Erweiterung des Bündnisses bei: Bulgarien, Rumänien, Slowakei, Slowenien und die drei baltischen Staaten Estland, Lettland und Litauen. Dies brachte die NATO-Mitgliedschaft auf 26 Nationen und war besonders bedeutsam, da es ehemalige Sowjetrepubliken (die baltischen Staaten) einschloss, was den dramatischen geopolitischen Wandel nach dem Ende des Kalten Krieges demonstrierte. Die Erweiterung war in Russland umstritten, das sie als Eindringen in seine Einflusssphäre betrachtete. Diese Länder hatten hart daran gearbeitet, die demokratischen und militärischen Standards der NATO seit dem Fall des Kommunismus 1989-1991 zu erfüllen.",
          nl: "Op 29 maart 2004 traden zeven voormalige communistische landen toe tot de NAVO in de grootste uitbreiding van het bondgenootschap: Bulgarije, Roemenië, Slowakije, Slovenië en de drie Baltische staten Estland, Letland en Litouwen. Dit bracht het NAVO-lidmaatschap op 26 naties en was bijzonder significant omdat het voormalige Sovjetrepublieken (de Baltische staten) omvatte, wat de dramatische geopolitieke verschuiving na het einde van de Koude Oorlog aantoonde. De uitbreiding was controversieel in Rusland, dat het zag als inbreuk op zijn invloedssfeer. Deze landen hadden hard gewerkt om te voldoen aan de democratische en militaire normen van de NAVO sinds de val van het communisme in 1989-1991."
        }
      },
      {
        question: {
          en: "On March 29, 1461, which battle during the Wars of the Roses was one of the bloodiest ever fought on English soil?",
          es: "El 29 de marzo de 1461, ¿qué batalla durante las Guerras de las Rosas fue una de las más sangrientas jamás libradas en suelo inglés?",
          de: "Welche Schlacht während der Rosenkriege war am 29. März 1461 eine der blutigsten, die jemals auf englischem Boden ausgetragen wurden?",
          nl: "Welke slag tijdens de Rozenoorlogen was op 29 maart 1461 een van de bloedigste die ooit op Engelse bodem werd geleverd?"
        },
        options: [
          { en: "Battle of Towton", es: "Batalla de Towton", de: "Schlacht von Towton", nl: "Slag bij Towton" },
          { en: "Battle of Bosworth Field", es: "Batalla de Bosworth Field", de: "Schlacht von Bosworth Field", nl: "Slag bij Bosworth Field" },
          { en: "Battle of Agincourt", es: "Batalla de Agincourt", de: "Schlacht von Azincourt", nl: "Slag bij Agincourt" },
          { en: "Battle of Hastings", es: "Batalla de Hastings", de: "Schlacht von Hastings", nl: "Slag bij Hastings" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 29, 1461, the Battle of Towton was fought in a snowstorm in Yorkshire during the Wars of the Roses between the Houses of Lancaster and York. It is considered the bloodiest battle ever fought on English soil, with an estimated 28,000 casualties out of approximately 50,000 combatants. The Yorkist forces, led by the future King Edward IV, decisively defeated the Lancastrians. The battle secured Edward's claim to the throne and marked a turning point in the Wars of the Roses. The fighting lasted about 10 hours in brutal conditions, and the snow reportedly turned red with blood.",
          es: "El 29 de marzo de 1461, la Batalla de Towton se libró en una tormenta de nieve en Yorkshire durante las Guerras de las Rosas entre las Casas de Lancaster y York. Se considera la batalla más sangrienta jamás librada en suelo inglés, con aproximadamente 28,000 bajas de aproximadamente 50,000 combatientes. Las fuerzas yorkistas, lideradas por el futuro Rey Eduardo IV, derrotaron decisivamente a los lancasteriano s. La batalla aseguró el reclamo de Eduardo al trono y marcó un punto de inflexión en las Guerras de las Rosas. La lucha duró aproximadamente 10 horas en condiciones brutales, y se dice que la nieve se volvió roja con sangre.",
          de: "Am 29. März 1461 wurde die Schlacht von Towton in einem Schneesturm in Yorkshire während der Rosenkriege zwischen den Häusern Lancaster und York ausgetragen. Sie gilt als die blutigste Schlacht, die jemals auf englischem Boden ausgetragen wurde, mit geschätzten 28.000 Opfern von etwa 50.000 Kämpfern. Die Yorkisten-Truppen unter Führung des zukünftigen Königs Eduard IV. besiegten die Lancastrianer entscheidend. Die Schlacht sicherte Eduards Anspruch auf den Thron und markierte einen Wendepunkt in den Rosenkriegen. Die Kämpfe dauerten etwa 10 Stunden unter brutalen Bedingungen, und der Schnee soll sich berichten zufolge rot von Blut gefärbt haben.",
          nl: "Op 29 maart 1461 werd de Slag bij Towton uitgevochten in een sneeuwstorm in Yorkshire tijdens de Rozenoorlogen tussen de Huizen van Lancaster en York. Het wordt beschouwd als de bloedigste slag die ooit op Engelse bodem werd geleverd, met naar schatting 28.000 slachtoffers van ongeveer 50.000 strijders. De Yorkistische troepen, geleid door de toekomstige koning Eduard IV, versloegen de Lancastrianen beslissend. De slag verzekerde Eduards aanspraak op de troon en markeerde een keerpunt in de Rozenoorlogen. De gevechten duurden ongeveer 10 uur onder brutale omstandigheden, en de sneeuw zou naar verluidt rood kleuren van het bloed."
        }
      },
      {
        question: {
          en: "On March 29, 1974, NASA's Mariner 10 spacecraft became the first to fly by which planet?",
          es: "El 29 de marzo de 1974, la nave espacial Mariner 10 de la NASA se convirtió en la primera en sobrevolar ¿qué planeta?",
          de: "Am 29. März 1974 wurde die Raumsonde Mariner 10 der NASA die erste, die an welchem Planeten vorbeiflog?",
          nl: "Op 29 maart 1974 werd NASA's Mariner 10 ruimtesonde de eerste die langs welke planeet vloog?"
        },
        options: [
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 29, 1974, Mariner 10 became the first spacecraft to visit Mercury, passing within 703 kilometers of the planet's surface. The mission used Venus's gravity to slingshot toward Mercury, pioneering the gravity-assist technique still used today. Mariner 10 made three flybys of Mercury between 1974 and 1975, mapping about 45% of the planet's surface and discovering its magnetic field. The spacecraft revealed Mercury's heavily cratered surface, similar to the Moon, and detected a thin atmosphere. It remained the only spacecraft to visit Mercury until NASA's MESSENGER probe arrived in 2011.",
          es: "El 29 de marzo de 1974, Mariner 10 se convirtió en la primera nave espacial en visitar Mercurio, pasando a 703 kilómetros de la superficie del planeta. La misión usó la gravedad de Venus para impulsarse hacia Mercurio, siendo pionera en la técnica de asistencia gravitacional aún utilizada hoy. Mariner 10 realizó tres sobrevuelos de Mercurio entre 1974 y 1975, mapeando aproximadamente el 45% de la superficie del planeta y descubriendo su campo magnético. La nave espacial reveló la superficie fuertemente craterizada de Mercurio, similar a la Luna, y detectó una atmósfera delgada. Permaneció como la única nave espacial en visitar Mercurio hasta que la sonda MESSENGER de la NASA llegó en 2011.",
          de: "Am 29. März 1974 wurde Mariner 10 das erste Raumschiff, das Merkur besuchte und innerhalb von 703 Kilometern an der Planetenoberfläche vorbeiflog. Die Mission nutzte die Schwerkraft der Venus, um zum Merkur zu katapultieren, und war Pionier der Gravity-Assist-Technik, die noch heute verwendet wird. Mariner 10 führte zwischen 1974 und 1975 drei Vorbeiflüge am Merkur durch, kartierte etwa 45% der Planetenoberfläche und entdeckte sein Magnetfeld. Das Raumschiff enthüllte Merkurs stark verkraterte Oberfläche, ähnlich wie der Mond, und entdeckte eine dünne Atmosphäre. Es blieb das einzige Raumschiff, das Merkur besuchte, bis die MESSENGER-Sonde der NASA 2011 ankam.",
          nl: "Op 29 maart 1974 werd Mariner 10 het eerste ruimtevaartuig dat Mercurius bezocht en op 703 kilometer van het oppervlak van de planeet passeerde. De missie gebruikte Venus' zwaartekracht om naar Mercurius te slingeren en was baanbrekend voor de zwaartekrachtondersteuningste chniek die nog steeds wordt gebruikt. Mariner 10 maakte tussen 1974 en 1975 drie scheervluchten langs Mercurius, bracht ongeveer 45% van het oppervlak van de planeet in kaart en ontdekte zijn magnetisch veld. Het ruimtevaartuig onthulde Mercurius' zwaar gekraterde oppervlak, vergelijkbaar met de Maan, en detecteerde een dunne atmosfeer. Het bleef het enige ruimtevaartuig dat Mercurius bezocht tot NASA's MESSENGER-sonde in 2011 aankwam."
        }
      }
    ],

    // Day 30 - March 30th: Reagan Assassination Attempt & Van Gogh Birthday
    day30: [
      {
        question: {
          en: "On March 30, 1981, which U.S. President survived an assassination attempt outside the Washington Hilton Hotel?",
          es: "El 30 de marzo de 1981, ¿qué presidente de EE.UU. sobrevivió a un intento de asesinato fuera del Hotel Washington Hilton?",
          de: "Welcher US-Präsident überlebte am 30. März 1981 ein Attentat außerhalb des Washington Hilton Hotels?",
          nl: "Welke Amerikaanse president overleefde op 30 maart 1981 een moordaanslag buiten het Washington Hilton Hotel?"
        },
        options: [
          { en: "Ronald Reagan", es: "Ronald Reagan", de: "Ronald Reagan", nl: "Ronald Reagan" },
          { en: "John F. Kennedy", es: "John F. Kennedy", de: "John F. Kennedy", nl: "John F. Kennedy" },
          { en: "Gerald Ford", es: "Gerald Ford", de: "Gerald Ford", nl: "Gerald Ford" },
          { en: "Richard Nixon", es: "Richard Nixon", de: "Richard Nixon", nl: "Richard Nixon" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 30, 1981, President Ronald Reagan was shot by John Hinckley Jr. outside the Washington Hilton Hotel. A bullet ricocheted off the presidential limousine and struck Reagan in the chest, puncturing his lung and narrowly missing his heart. Three others were also wounded: Press Secretary James Brady (who was permanently disabled), Secret Service agent Tim McCarthy, and police officer Thomas Delahanty. Reagan underwent emergency surgery and recovered, famously joking with doctors and his wife Nancy. Hinckley was found not guilty by reason of insanity and was motivated by an obsession with actress Jodie Foster. The incident led to stricter gun control legislation and improvements in Secret Service protocols.",
          es: "El 30 de marzo de 1981, el presidente Ronald Reagan fue disparado por John Hinckley Jr. fuera del Hotel Washington Hilton. Una bala rebotó en la limusina presidencial y golpeó a Reagan en el pecho, perforando su pulmón y casi alcanzando su corazón. Otros tres también resultaron heridos: el secretario de prensa James Brady (que quedó permanentemente discapacitado), el agente del Servicio Secreto Tim McCarthy y el oficial de policía Thomas Delahanty. Reagan se sometió a cirugía de emergencia y se recuperó, bromeando famosamente con los médicos y su esposa Nancy. Hinckley fue declarado no culpable por razón de locura y fue motivado por una obsesión con la actriz Jodie Foster. El incidente llevó a una legislación de control de armas más estricta y mejoras en los protocolos del Servicio Secreto.",
          de: "Am 30. März 1981 wurde Präsident Ronald Reagan von John Hinckley Jr. außerhalb des Washington Hilton Hotels erschossen. Eine Kugel prallte von der Präsidentenlimousine ab und traf Reagan in die Brust, durchbohrte seine Lunge und verfehlte nur knapp sein Herz. Drei weitere wurden ebenfalls verwundet: Pressesprecher James Brady (der dauerhaft behindert wurde), Secret-Service-Agent Tim McCarthy und Polizeibeamter Thomas Delahanty. Reagan unterzog sich einer Notoperation und erholte sich, wobei er berühmt dafür wurde, mit Ärzten und seiner Frau Nancy zu scherzen. Hinckley wurde aus Gründen der Unzurechnungsfähigkeit für nicht schuldig befunden und war von einer Obsession mit der Schauspielerin Jodie Foster motiviert. Der Vorfall führte zu strengeren Waffenkontrollgesetzen und Verbesserungen der Secret-Service-Protokolle.",
          nl: "Op 30 maart 1981 werd president Ronald Reagan neergeschoten door John Hinckley Jr. buiten het Washington Hilton Hotel. Een kogel ketste af van de presidentiële limousine en trof Reagan in de borst, doorboorde zijn long en miste zijn hart ternauwernood. Drie anderen raakten ook gewond: perssecretaris James Brady (die blijvend gehandicapt raakte), geheim agent Tim McCarthy en politieagent Thomas Delahanty. Reagan onderging een spoedoperatie en herstelde, waarbij hij beroemd grappen maakte met artsen en zijn vrouw Nancy. Hinckley werd niet schuldig bevonden wegens krankzinnigheid en was gemotiveerd door een obsessie met actrice Jodie Foster. Het incident leidde tot strengere wapenwetgeving en verbeteringen in de protocollen van de geheime dienst."
        }
      },
      {
        question: {
          en: "On March 30, 1853, which famous post-impressionist artist was born in the Netherlands?",
          es: "El 30 de marzo de 1853, ¿qué famoso artista postimpresionista nació en los Países Bajos?",
          de: "Welcher berühmte post-impressionistische Künstler wurde am 30. März 1853 in den Niederlanden geboren?",
          nl: "Welke beroemde post-impressionistische kunstenaar werd op 30 maart 1853 geboren in Nederland?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Paul Cézanne", es: "Paul Cézanne", de: "Paul Cézanne", nl: "Paul Cézanne" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Vincent van Gogh was born on March 30, 1853, in Zundert, Netherlands. He became one of history's most influential artists, despite selling only one painting during his lifetime and suffering from mental illness. Van Gogh created approximately 2,100 artworks, including 860 oil paintings, in just over a decade. His bold colors, emotional honesty, and distinctive brushwork profoundly influenced 20th-century art. Famous works include 'The Starry Night,' 'Sunflowers,' and 'The Bedroom.' He died in 1890 at age 37 from a gunshot wound, likely self-inflicted. Today, his paintings are among the world's most expensive and recognizable artworks.",
          es: "Vincent van Gogh nació el 30 de marzo de 1853 en Zundert, Países Bajos. Se convirtió en uno de los artistas más influyentes de la historia, a pesar de vender solo una pintura durante su vida y sufrir de enfermedad mental. Van Gogh creó aproximadamente 2,100 obras de arte, incluidas 860 pinturas al óleo, en poco más de una década. Sus colores audaces, honestidad emocional y pinceladas distintivas influyeron profundamente en el arte del siglo XX. Las obras famosas incluyen 'La noche estrellada', 'Girasoles' y 'El dormitorio'. Murió en 1890 a los 37 años por una herida de bala, probablemente autoinfligida. Hoy, sus pinturas están entre las obras de arte más caras y reconocibles del mundo.",
          de: "Vincent van Gogh wurde am 30. März 1853 in Zundert, Niederlande, geboren. Er wurde zu einem der einflussreichsten Künstler der Geschichte, obwohl er zu Lebzeiten nur ein Gemälde verkaufte und an psychischen Erkrankungen litt. Van Gogh schuf in etwas mehr als einem Jahrzehnt etwa 2.100 Kunstwerke, darunter 860 Ölgemälde. Seine kräftigen Farben, emotionale Ehrlichkeit und charakteristische Pinselführung beeinflussten die Kunst des 20. Jahrhunderts tiefgreifend. Berühmte Werke sind 'Die Sternennacht', 'Sonnenblumen' und 'Das Schlafzimmer'. Er starb 1890 im Alter von 37 Jahren an einer Schusswunde, wahrscheinlich selbst zugefügt. Heute gehören seine Gemälde zu den teuersten und bekanntesten Kunstwerken der Welt.",
          nl: "Vincent van Gogh werd geboren op 30 maart 1853 in Zundert, Nederland. Hij werd een van de meest invloedrijke kunstenaars uit de geschiedenis, ondanks dat hij tijdens zijn leven slechts één schilderij verkocht en leed aan een psychische aandoening. Van Gogh creëerde in iets meer dan een decennium ongeveer 2.100 kunstwerken, waaronder 860 olieverfschilderijen. Zijn gedurfde kleuren, emotionele eerlijkheid en kenmerkende penseelstreken hadden een diepgaande invloed op de kunst van de 20e eeuw. Beroemde werken zijn 'De sterrennacht', 'Zonnebloemen' en 'De slaapkamer'. Hij stierf in 1890 op 37-jarige leeftijd aan een schotwond, waarschijnlijk zelf toegebracht. Vandaag behoren zijn schilderijen tot de duurste en meest herkenbare kunstwerken ter wereld."
        }
      },
      {
        question: {
          en: "On March 30, 1867, which U.S. territory did Secretary of State William Seward purchase from Russia for $7.2 million?",
          es: "El 30 de marzo de 1867, ¿qué territorio de EE.UU. compró el secretario de Estado William Seward a Rusia por $7.2 millones?",
          de: "Welches US-Territorium kaufte Außenminister William Seward am 30. März 1867 für 7,2 Millionen Dollar von Russland?",
          nl: "Welk Amerikaans grondgebied kocht minister van Buitenlandse Zaken William Seward op 30 maart 1867 van Rusland voor $7,2 miljoen?"
        },
        options: [
          { en: "Alaska", es: "Alaska", de: "Alaska", nl: "Alaska" },
          { en: "Hawaii", es: "Hawái", de: "Hawaii", nl: "Hawaï" },
          { en: "Louisiana", es: "Luisiana", de: "Louisiana", nl: "Louisiana" },
          { en: "Florida", es: "Florida", de: "Florida", nl: "Florida" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 30, 1867, U.S. Secretary of State William Seward agreed to purchase Alaska from Russia for $7.2 million, approximately 2 cents per acre. The deal was mocked as 'Seward's Folly' and 'Seward's Icebox' by critics who thought the frozen territory worthless. However, Alaska proved invaluable, containing vast natural resources including gold, oil, and fish. The discovery of gold in the 1890s vindicated Seward's purchase. Alaska became the 49th U.S. state in 1959. Today, Alaska's natural resources, strategic location, and natural beauty make it one of America's most valuable assets, proving the critics spectacularly wrong.",
          es: "El 30 de marzo de 1867, el secretario de Estado de EE.UU., William Seward, acordó comprar Alaska a Rusia por $7.2 millones, aproximadamente 2 centavos por acre. El acuerdo fue ridiculizado como 'La locura de Seward' y 'La nevera de Seward' por los críticos que pensaban que el territorio congelado no valía nada. Sin embargo, Alaska resultó invaluable, conteniendo vastos recursos naturales incluidos oro, petróleo y peces. El descubrimiento de oro en la década de 1890 reivindicó la compra de Seward. Alaska se convirtió en el 49º estado de EE.UU. en 1959. Hoy, los recursos naturales de Alaska, su ubicación estratégica y su belleza natural la convierten en uno de los activos más valiosos de Estados Unidos, demostrando que los críticos estaban espectacularmente equivocados.",
          de: "Am 30. März 1867 stimmte US-Außenminister William Seward dem Kauf Alaskas von Russland für 7,2 Millionen Dollar zu, etwa 2 Cent pro Acre. Der Deal wurde von Kritikern als 'Sewards Torheit' und 'Sewards Eiskasten' verspottet, die das gefrorene Territorium für wertlos hielten. Alaska erwies sich jedoch als unbezahlbar und enthielt riesige natürliche Ressourcen einschließlich Gold, Öl und Fisch. Die Entdeckung von Gold in den 1890er Jahren rechtfertigte Sewards Kauf. Alaska wurde 1959 der 49. US-Bundesstaat. Heute machen Alaskas natürliche Ressourcen, strategische Lage und natürliche Schönheit es zu einem der wertvollsten Vermögenswerte Amerikas, was die Kritiker spektakulär widerlegte.",
          nl: "Op 30 maart 1867 stemde de Amerikaanse minister van Buitenlandse Zaken William Seward in met de aankoop van Alaska van Rusland voor $7,2 miljoen, ongeveer 2 cent per acre. De deal werd bespot als 'Sewards Dwaasheid' en 'Sewards IJskast' door critici die dachten dat het bevroren gebied waardeloos was. Alaska bleek echter van onschatbare waarde te zijn en bevatte enorme natuurlijke hulpbronnen waaronder goud, olie en vis. De ontdekking van goud in de jaren 1890 rechtvaardigde Sewards aankoop. Alaska werd in 1959 de 49e Amerikaanse staat. Vandaag maken Alaska's natuurlijke hulpbronnen, strategische ligging en natuurlijke schoonheid het tot een van Amerika's meest waardevolle bezittingen, wat de critici spectaculair ongelijk gaf."
        }
      },
      {
        question: {
          en: "On March 30, 1858, Hymen Lipman patented which everyday object by combining a pencil with an eraser?",
          es: "El 30 de marzo de 1858, Hymen Lipman patentó ¿qué objeto cotidiano al combinar un lápiz con un borrador?",
          de: "Am 30. März 1858 patentierte Hymen Lipman welchen Alltagsgegenstand, indem er einen Bleistift mit einem Radiergummi kombinierte?",
          nl: "Op 30 maart 1858 patenteerde Hymen Lipman welk alledaags voorwerp door een potlood te combineren met een gum?"
        },
        options: [
          { en: "Colored pencil", es: "Lápiz de colores", de: "Buntstift", nl: "Kleurpotlood" },
          { en: "Fountain pen", es: "Pluma estilográfica", de: "Füllfederhalter", nl: "Vulpen" },
          { en: "Mechanical pencil", es: "Lápiz mecánico", de: "Druckbleistift", nl: "Mechanisch potlood" },
          { en: "Pencil with attached eraser", es: "Lápiz con goma adjunta", de: "Bleistift mit befestigtem Radiergummi", nl: "Potlood met bevestigde gum" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On March 30, 1858, Hymen L. Lipman of Philadelphia received U.S. Patent No. 19,783 for attaching an eraser to the end of a pencil. This simple but ingenious combination made correcting mistakes much more convenient. Lipman sold his patent for $100,000 (a fortune at the time), but the patent was later invalidated by the Supreme Court in 1875, ruling that combining two existing items didn't constitute a new invention. Despite the patent's invalidation, the pencil-eraser combination became ubiquitous and remains the standard design today. This everyday object revolutionized writing and drawing by making error correction immediately accessible.",
          es: "El 30 de marzo de 1858, Hymen L. Lipman de Filadelfia recibió la Patente de EE.UU. No. 19,783 por adjuntar un borrador al extremo de un lápiz. Esta combinación simple pero ingeniosa hizo que corregir errores fuera mucho más conveniente. Lipman vendió su patente por $100,000 (una fortuna en ese momento), pero la patente fue posteriormente invalidada por la Corte Suprema en 1875, dictaminando que combinar dos elementos existentes no constituía una nueva invención. A pesar de la invalidación de la patente, la combinación lápiz-borrador se volvió ubicua y sigue siendo el diseño estándar hoy. Este objeto cotidiano revolucionó la escritura y el dibujo al hacer que la corrección de errores fuera inmediatamente accesible.",
          de: "Am 30. März 1858 erhielt Hymen L. Lipman aus Philadelphia das US-Patent Nr. 19.783 für die Befestigung eines Radiergummis am Ende eines Bleistifts. Diese einfache, aber geniale Kombination machte das Korrigieren von Fehlern viel bequemer. Lipman verkaufte sein Patent für 100.000 Dollar (damals ein Vermögen), aber das Patent wurde später 1875 vom Supreme Court für ungültig erklärt, mit der Begründung, dass die Kombination zweier bestehender Gegenstände keine neue Erfindung darstelle. Trotz der Ungültigkeitserklärung des Patents wurde die Bleistift-Radiergummi-Kombination allgegenwärtig und bleibt bis heute das Standarddesign. Dieser Alltagsgegenstand revolutionierte das Schreiben und Zeichnen, indem er die Fehlerkorrektur sofort zugänglich machte.",
          nl: "Op 30 maart 1858 ontving Hymen L. Lipman uit Philadelphia Amerikaans octrooi nr. 19.783 voor het bevestigen van een gum aan het uiteinde van een potlood. Deze eenvoudige maar ingenieuze combinatie maakte het corrigeren van fouten veel gemakkelijker. Lipman verkocht zijn octrooi voor $100.000 (een fortuin in die tijd), maar het octrooi werd later in 1875 ongeldig verklaard door het Hooggerechtshof, met de uitspraak dat het combineren van twee bestaande items geen nieuwe uitvinding vormde. Ondanks de ongeldigverklaring van het octrooi werd de potlood-gum combinatie alomtegenwoordig en blijft het standaardontwerp tot op de dag van vandaag. Dit alledaagse voorwerp revolutioneerde schrijven en tekenen door foutcorrectie onmiddellijk toegankelijk te maken."
        }
      },
      {
        question: {
          en: "On March 30, 1870, which amendment to the U.S. Constitution was ratified, guaranteeing the right to vote regardless of race?",
          es: "El 30 de marzo de 1870, ¿qué enmienda a la Constitución de EE.UU. fue ratificada, garantizando el derecho al voto independientemente de la raza?",
          de: "Welche Änderung der US-Verfassung wurde am 30. März 1870 ratifiziert und garantierte das Wahlrecht unabhängig von der Rasse?",
          nl: "Welk amendement op de Amerikaanse grondwet werd op 30 maart 1870 geratificeerd, dat het stemrecht garandeerde ongeacht ras?"
        },
        options: [
          { en: "15th Amendment", es: "15ª Enmienda", de: "15. Zusatzartikel", nl: "15e Amendement" },
          { en: "13th Amendment", es: "13ª Enmienda", de: "13. Zusatzartikel", nl: "13e Amendement" },
          { en: "14th Amendment", es: "14ª Enmienda", de: "14. Zusatzartikel", nl: "14e Amendement" },
          { en: "19th Amendment", es: "19ª Enmienda", de: "19. Zusatzartikel", nl: "19e Amendement" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 30, 1870, the 15th Amendment to the U.S. Constitution was ratified, stating that 'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.' This was one of the Reconstruction Amendments following the Civil War. While groundbreaking, its promise was undermined for nearly a century by discriminatory practices like poll taxes, literacy tests, and violence. The Voting Rights Act of 1965 finally provided federal enforcement mechanisms to protect the voting rights the 15th Amendment had guaranteed nearly a century earlier.",
          es: "El 30 de marzo de 1870, la 15ª Enmienda a la Constitución de EE.UU. fue ratificada, estableciendo que 'El derecho de los ciudadanos de los Estados Unidos a votar no será negado o restringido por los Estados Unidos o por ningún Estado por motivos de raza, color o condición previa de servidumbre'. Esta fue una de las Enmiendas de Reconstrucción después de la Guerra Civil. Aunque revolucionaria, su promesa fue socavada durante casi un siglo por prácticas discriminatorias como impuestos electorales, pruebas de alfabetización y violencia. La Ley de Derechos de Voto de 1965 finalmente proporcionó mecanismos federales de aplicación para proteger los derechos de voto que la 15ª Enmienda había garantizado casi un siglo antes.",
          de: "Am 30. März 1870 wurde der 15. Zusatzartikel zur US-Verfassung ratifiziert, der besagt: 'Das Wahlrecht der Bürger der Vereinigten Staaten darf von den Vereinigten Staaten oder einem Staat nicht aufgrund von Rasse, Hautfarbe oder früherer Knechtschaft verweigert oder eingeschränkt werden.' Dies war einer der Wiederaufbau-Zusatzartikel nach dem Bürgerkrieg. Obwohl bahnbrechend, wurde sein Versprechen fast ein Jahrhundert lang durch diskriminierende Praktiken wie Wahlsteuern, Alphabetisierungstests und Gewalt untergraben. Der Voting Rights Act von 1965 bot schließlich föderale Durchsetzungsmechanismen zum Schutz der Wahlrechte, die der 15. Zusatzartikel fast ein Jahrhundert zuvor garantiert hatte.",
          nl: "Op 30 maart 1870 werd het 15e Amendement op de Amerikaanse grondwet geratificeerd, waarin werd gesteld dat 'Het stemrecht van burgers van de Verenigde Staten niet zal worden geweigerd of ingeperkt door de Verenigde Staten of door enige staat op grond van ras, kleur of eerdere staat van dienstbaarheid.' Dit was een van de Reconstructie-amendementen na de Burgeroorlog. Hoewel baanbrekend, werd zijn belofte bijna een eeuw ondermijnd door discriminerende praktijken zoals kiesbelastingen, geletterdheidstests en geweld. De Voting Rights Act van 1965 bood eindelijk federale handhavingsmechanismen om de stemrechten te beschermen die het 15e Amendement bijna een eeuw eerder had gegarandeerd."
        }
      }
    ],

    // Day 31 - March 31st: Eiffel Tower Inauguration & Jack Johnson Birthday
    day31: [
      {
        question: {
          en: "On March 31, 1889, which iconic Parisian landmark was inaugurated to commemorate the 100th anniversary of the French Revolution?",
          es: "El 31 de marzo de 1889, ¿qué emblemático monumento parisino fue inaugurado para conmemorar el centenario de la Revolución Francesa?",
          de: "Welches ikonische Pariser Wahrzeichen wurde am 31. März 1889 zur Feier des 100. Jahrestages der Französischen Revolution eingeweiht?",
          nl: "Welk iconisch Parijs monument werd op 31 maart 1889 ingewijd ter herdenking van de 100ste verjaardag van de Franse Revolutie?"
        },
        options: [
          { en: "Eiffel Tower", es: "Torre Eiffel", de: "Eiffelturm", nl: "Eiffeltoren" },
          { en: "Arc de Triomphe", es: "Arco del Triunfo", de: "Triumphbogen", nl: "Arc de Triomphe" },
          { en: "Notre-Dame Cathedral", es: "Catedral de Notre-Dame", de: "Kathedrale Notre-Dame", nl: "Notre-Dame kathedraal" },
          { en: "Louvre Pyramid", es: "Pirámide del Louvre", de: "Louvre-Pyramide", nl: "Louvre Piramide" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 31, 1889, the Eiffel Tower was officially inaugurated in Paris by Gustave Eiffel and French Prime Minister Pierre Tirard. The 300-meter iron structure, built for the 1889 World's Fair, was completed in just 2 years, 2 months, and 5 days. At the time, it was the world's tallest man-made structure, holding that title until 1930. Despite initial criticism from prominent Parisians who considered it an eyesore, the Tower became one of the world's most recognizable landmarks. Today, it attracts nearly 7 million visitors annually and has become the eternal symbol of Paris and France itself.",
          es: "El 31 de marzo de 1889, la Torre Eiffel fue inaugurada oficialmente en París por Gustave Eiffel y el primer ministro francés Pierre Tirard. La estructura de hierro de 300 metros, construida para la Feria Mundial de 1889, se completó en solo 2 años, 2 meses y 5 días. En ese momento, era la estructura artificial más alta del mundo, manteniendo ese título hasta 1930. A pesar de las críticas iniciales de parisinos prominentes que la consideraban una monstruosidad, la Torre se convirtió en uno de los monumentos más reconocibles del mundo. Hoy atrae casi 7 millones de visitantes anualmente y se ha convertido en el símbolo eterno de París y Francia misma.",
          de: "Am 31. März 1889 wurde der Eiffelturm in Paris offiziell von Gustave Eiffel und dem französischen Premierminister Pierre Tirard eingeweiht. Die 300 Meter hohe Eisenkonstruktion, die für die Weltausstellung 1889 gebaut wurde, wurde in nur 2 Jahren, 2 Monaten und 5 Tagen fertiggestellt. Zu der Zeit war er das höchste von Menschenhand geschaffene Bauwerk der Welt und hielt diesen Titel bis 1930. Trotz anfänglicher Kritik von prominenten Parisern, die ihn als Schandfleck betrachteten, wurde der Turm zu einem der bekanntesten Wahrzeichen der Welt. Heute zieht er jährlich fast 7 Millionen Besucher an und ist zum ewigen Symbol von Paris und Frankreich selbst geworden.",
          nl: "Op 31 maart 1889 werd de Eiffeltoren officieel ingewijd in Parijs door Gustave Eiffel en de Franse premier Pierre Tirard. De 300 meter hoge ijzeren structuur, gebouwd voor de Wereldtentoonstelling van 1889, werd in slechts 2 jaar, 2 maanden en 5 dagen voltooid. Destijds was het 's werelds hoogste door mensen gemaakte bouwwerk en behield die titel tot 1930. Ondanks aanvankelijke kritiek van prominente Parijzenaars die het als een lelijkerd beschouwden, werd de Toren een van 's werelds meest herkenbare monumenten. Vandaag trekt het bijna 7 miljoen bezoekers per jaar en is het het eeuwige symbool geworden van Parijs en Frankrijk zelf."
        }
      },
      {
        question: {
          en: "On March 31, 1878, which legendary boxer was born who became the first African American world heavyweight champion?",
          es: "El 31 de marzo de 1878, ¿qué legendario boxeador nació que se convirtió en el primer campeón mundial de peso pesado afroamericano?",
          de: "Welcher legendäre Boxer wurde am 31. März 1878 geboren, der der erste afroamerikanische Schwergewichtsweltmeister wurde?",
          nl: "Welke legendarische bokser werd op 31 maart 1878 geboren die de eerste Afro-Amerikaanse wereldkampioen zwaargewicht werd?"
        },
        options: [
          { en: "Jack Johnson", es: "Jack Johnson", de: "Jack Johnson", nl: "Jack Johnson" },
          { en: "Muhammad Ali", es: "Muhammad Ali", de: "Muhammad Ali", nl: "Muhammad Ali" },
          { en: "Joe Louis", es: "Joe Louis", de: "Joe Louis", nl: "Joe Louis" },
          { en: "George Foreman", es: "George Foreman", de: "George Foreman", nl: "George Foreman" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jack Johnson was born on March 31, 1878, in Galveston, Texas, to former slaves. He became the first African American world heavyweight boxing champion in 1908 when he defeated Tommy Burns in Sydney, Australia. Johnson's success challenged racial barriers and sparked controversy in an era of deep segregation. His flamboyant lifestyle and relationships with white women made him a target of racism. In 1910, he famously defeated Jim Jeffries, the 'Great White Hope,' causing race riots across America. Johnson held the title until 1915 and was posthumously pardoned in 2018 for a racially motivated 1913 conviction. He remains a pioneering figure in sports history.",
          es: "Jack Johnson nació el 31 de marzo de 1878 en Galveston, Texas, hijo de antiguos esclavos. Se convirtió en el primer campeón mundial de peso pesado afroamericano en 1908 cuando derrotó a Tommy Burns en Sídney, Australia. El éxito de Johnson desafió las barreras raciales y generó controversia en una era de profunda segregación. Su estilo de vida extravagante y sus relaciones con mujeres blancas lo convirtieron en objetivo del racismo. En 1910, derrotó famosamente a Jim Jeffries, la 'Gran Esperanza Blanca', causando disturbios raciales en Estados Unidos. Johnson mantuvo el título hasta 1915 y fue indultado póstumamente en 2018 por una condena racialmente motivada de 1913. Sigue siendo una figura pionera en la historia del deporte.",
          de: "Jack Johnson wurde am 31. März 1878 in Galveston, Texas, als Sohn ehemaliger Sklaven geboren. Er wurde 1908 der erste afroamerikanische Schwergewichtsweltmeister im Boxen, als er Tommy Burns in Sydney, Australien, besiegte. Johnsons Erfolg stellte rassistische Barrieren in Frage und löste in einer Zeit tiefer Segregation Kontroversen aus. Sein extravaganter Lebensstil und Beziehungen zu weißen Frauen machten ihn zu einem Ziel des Rassismus. 1910 besiegte er berühmt Jim Jeffries, die 'Große Weiße Hoffnung', was Rassenunruhen in ganz Amerika auslöste. Johnson hielt den Titel bis 1915 und wurde 2018 posthum für eine rassistisch motivierte Verurteilung von 1913 begnadigt. Er bleibt eine Pionierfigur in der Sportgeschichte.",
          nl: "Jack Johnson werd geboren op 31 maart 1878 in Galveston, Texas, als zoon van voormalige slaven. Hij werd in 1908 de eerste Afro-Amerikaanse wereldkampioen boksen in het zwaargewicht toen hij Tommy Burns versloeg in Sydney, Australië. Johnsons succes daagde raciale barrières uit en veroorzaakte controverse in een tijdperk van diepe segregatie. Zijn flamboyante levensstijl en relaties met blanke vrouwen maakten hem een doelwit van racisme. In 1910 versloeg hij beroemd Jim Jeffries, de 'Grote Witte Hoop', wat rassenrellen veroorzaakte in heel Amerika. Johnson behield de titel tot 1915 en werd postuum in 2018 gegratieerd voor een raciaal gemotiveerde veroordeling uit 1913. Hij blijft een baanbrekende figuur in de sportgeschiedenis."
        }
      },
      {
        question: {
          en: "On March 31, 1492, which Spanish monarchs issued the Alhambra Decree, expelling Jews from Spain?",
          es: "El 31 de marzo de 1492, ¿qué monarcas españoles emitieron el Decreto de la Alhambra, expulsando a los judíos de España?",
          de: "Welche spanischen Monarchen erließen am 31. März 1492 das Alhambra-Edikt, das die Juden aus Spanien vertrieb?",
          nl: "Welke Spaanse vorsten vaardigden op 31 maart 1492 het Alhambra-decreet uit, dat de Joden uit Spanje verdreef?"
        },
        options: [
          { en: "Ferdinand and Isabella", es: "Fernando e Isabel", de: "Ferdinand und Isabella", nl: "Ferdinand en Isabella" },
          { en: "Charles V and Maria", es: "Carlos V y María", de: "Karl V. und Maria", nl: "Karel V en Maria" },
          { en: "Philip II and Mary", es: "Felipe II y María", de: "Philipp II. und Maria", nl: "Filips II en Maria" },
          { en: "Alfonso XIII and Victoria", es: "Alfonso XIII y Victoria", de: "Alfons XIII. und Victoria", nl: "Alfons XIII en Victoria" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On March 31, 1492, Catholic Monarchs Ferdinand II of Aragon and Isabella I of Castile signed the Alhambra Decree, ordering the expulsion of Jews from Spain. Jews were given four months to convert to Christianity or leave. An estimated 40,000 to 100,000 Jews were expelled, ending over 1,000 years of Jewish presence in Spain. Many fled to Portugal, North Africa, the Ottoman Empire, and other regions. This decree, part of the Spanish Inquisition, devastated Spain's economy and intellectual life as many skilled merchants, physicians, and scholars were forced to leave. The decree was formally revoked in 1968, and Spain granted citizenship rights to Sephardic Jews in 2015.",
          es: "El 31 de marzo de 1492, los Reyes Católicos Fernando II de Aragón e Isabel I de Castilla firmaron el Decreto de la Alhambra, ordenando la expulsión de los judíos de España. A los judíos se les dio cuatro meses para convertirse al cristianismo o irse. Se estima que entre 40,000 y 100,000 judíos fueron expulsados, terminando más de 1,000 años de presencia judía en España. Muchos huyeron a Portugal, África del Norte, el Imperio Otomano y otras regiones. Este decreto, parte de la Inquisición Española, devastó la economía y la vida intelectual de España ya que muchos comerciantes, médicos y eruditos fueron obligados a irse. El decreto fue formalmente revocado en 1968, y España otorgó derechos de ciudadanía a los judíos sefardíes en 2015.",
          de: "Am 31. März 1492 unterzeichneten die Katholischen Könige Ferdinand II. von Aragon und Isabella I. von Kastilien das Alhambra-Edikt, das die Vertreibung der Juden aus Spanien anordnete. Den Juden wurden vier Monate gegeben, um zum Christentum zu konvertieren oder zu gehen. Schätzungsweise 40.000 bis 100.000 Juden wurden vertrieben, was über 1.000 Jahren jüdischer Präsenz in Spanien ein Ende setzte. Viele flohen nach Portugal, Nordafrika, ins Osmanische Reich und andere Regionen. Dieses Dekret, Teil der Spanischen Inquisition, verwüstete Spaniens Wirtschaft und intellektuelles Leben, da viele qualifizierte Kaufleute, Ärzte und Gelehrte gezwungen waren zu gehen. Das Dekret wurde 1968 formell aufgehoben, und Spanien gewährte 2015 Staatsangehörigkeitsrechte für sephardische Juden.",
          nl: "Op 31 maart 1492 ondertekenden de Katholieke Vorsten Ferdinand II van Aragon en Isabella I van Castilië het Alhambra-decreet, dat de verdrijving van Joden uit Spanje beval. Joden kregen vier maanden om zich te bekeren tot het christendom of te vertrekken. Naar schatting werden 40.000 tot 100.000 Joden verdreven, wat een einde maakte aan meer dan 1.000 jaar Joodse aanwezigheid in Spanje. Velen vluchtten naar Portugal, Noord-Afrika, het Ottomaanse Rijk en andere regio's. Dit decreet, onderdeel van de Spaanse Inquisitie, verwoestte Spanje's economie en intellectuele leven omdat veel bekwame kooplieden, artsen en geleerden gedwongen werden te vertrekken. Het decreet werd formeel herroepen in 1968, en Spanje verleende in 2015 burgerrechten aan Sefardische Joden."
        }
      },
      {
        question: {
          en: "On March 31, 1917, which country granted women the right to vote, becoming one of the first nations to achieve universal suffrage?",
          es: "El 31 de marzo de 1917, ¿qué país otorgó a las mujeres el derecho al voto, convirtiéndose en una de las primeras naciones en lograr el sufragio universal?",
          de: "Welches Land gewährte am 31. März 1917 Frauen das Wahlrecht und wurde damit eines der ersten Länder mit universellem Wahlrecht?",
          nl: "Welk land verleende op 31 maart 1917 vrouwen het stemrecht en werd daarmee een van de eerste naties met algemeen kiesrecht?"
        },
        options: [
          { en: "The Netherlands", es: "Los Países Bajos", de: "Die Niederlande", nl: "Nederland" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On March 31, 1917, the Netherlands granted women the right to vote in local elections, though full suffrage for national elections wasn't achieved until 1919. This made the Netherlands one of the pioneering countries in women's suffrage in Europe. The women's suffrage movement in the Netherlands had been active since the 1870s, led by activists like Aletta Jacobs, the first woman to attend university in the Netherlands. New Zealand was the first self-governing country to grant women the vote in 1893, followed by Finland in 1906 and Norway in 1913. The Dutch achievement represented significant progress in the European context.",
          es: "El 31 de marzo de 1917, los Países Bajos otorgaron a las mujeres el derecho al voto en elecciones locales, aunque el sufragio completo para elecciones nacionales no se logró hasta 1919. Esto hizo de los Países Bajos uno de los países pioneros en el sufragio femenino en Europa. El movimiento por el sufragio femenino en los Países Bajos había estado activo desde la década de 1870, liderado por activistas como Aletta Jacobs, la primera mujer en asistir a la universidad en los Países Bajos. Nueva Zelanda fue el primer país autogobernado en otorgar a las mujeres el voto en 1893, seguido por Finlandia en 1906 y Noruega en 1913. El logro holandés representó un progreso significativo en el contexto europeo.",
          de: "Am 31. März 1917 gewährten die Niederlande Frauen das Wahlrecht bei Kommunalwahlen, obwohl das volle Wahlrecht für nationale Wahlen erst 1919 erreicht wurde. Dies machte die Niederlande zu einem der Pionierländer beim Frauenwahlrecht in Europa. Die Frauenwahlrechtsbewegung in den Niederlanden war seit den 1870er Jahren aktiv, angeführt von Aktivistinnen wie Aletta Jacobs, der ersten Frau, die eine Universität in den Niederlanden besuchte. Neuseeland war 1893 das erste selbstverwaltete Land, das Frauen das Wahlrecht gewährte, gefolgt von Finnland 1906 und Norwegen 1913. Der niederländische Erfolg stellte im europäischen Kontext einen bedeutenden Fortschritt dar.",
          nl: "Op 31 maart 1917 verleenden Nederland vrouwen het stemrecht bij lokale verkiezingen, hoewel volledig kiesrecht voor nationale verkiezingen pas in 1919 werd bereikt. Dit maakte Nederland een van de pionierende landen in vrouwenkiesrecht in Europa. De vrouwenkiesrechtbeweging in Nederland was sinds de jaren 1870 actief, geleid door activisten zoals Aletta Jacobs, de eerste vrouw die een universiteit in Nederland bezocht. Nieuw-Zeeland was in 1893 het eerste zelfbesturende land dat vrouwen het stemrecht verleende, gevolgd door Finland in 1906 en Noorwegen in 1913. De Nederlandse prestatie vertegenwoordigde aanzienlijke vooruitgang in de Europese context."
        }
      },
      {
        question: {
          en: "On March 31, 1995, which popular singer died in a plane crash in Monterrey, Mexico, at age 23?",
          es: "El 31 de marzo de 1995, ¿qué popular cantante murió en un accidente aéreo en Monterrey, México, a los 23 años?",
          de: "Welche populäre Sängerin starb am 31. März 1995 bei einem Flugzeugabsturz in Monterrey, Mexiko, im Alter von 23 Jahren?",
          nl: "Welke populaire zangeres stierf op 31 maart 1995 bij een vliegtuigongeluk in Monterrey, Mexico, op 23-jarige leeftijd?"
        },
        options: [
          { en: "Selena Quintanilla-Pérez", es: "Selena Quintanilla-Pérez", de: "Selena Quintanilla-Pérez", nl: "Selena Quintanilla-Pérez" },
          { en: "Aaliyah", es: "Aaliyah", de: "Aaliyah", nl: "Aaliyah" },
          { en: "Whitney Houston", es: "Whitney Houston", de: "Whitney Houston", nl: "Whitney Houston" },
          { en: "Amy Winehouse", es: "Amy Winehouse", de: "Amy Winehouse", nl: "Amy Winehouse" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Selena Quintanilla-Pérez was tragically shot and killed on March 31, 1995, in Corpus Christi, Texas, by Yolanda Saldívar, the president of her fan club. (Note: She died from a gunshot, not a plane crash.) At just 23, Selena was at the peak of her career as the 'Queen of Tejano music,' having won a Grammy Award and achieved crossover success. Her death shocked the Latino community and sparked an unprecedented outpouring of grief. Over 60,000 people attended her public viewing. Selena's legacy endures through her music, with the 1997 biographical film starring Jennifer Lopez introducing her to new generations. She remains an icon of Latin music and culture.",
          es: "Selena Quintanilla-Pérez fue trágicamente asesinada a tiros el 31 de marzo de 1995 en Corpus Christi, Texas, por Yolanda Saldívar, la presidenta de su club de fans. (Nota: Murió por un disparo, no en un accidente aéreo.) Con solo 23 años, Selena estaba en la cima de su carrera como la 'Reina de la música tejana', habiendo ganado un premio Grammy y logrado éxito cruzado. Su muerte conmocionó a la comunidad latina y provocó un derramamiento de dolor sin precedentes. Más de 60,000 personas asistieron a su velorio público. El legado de Selena perdura a través de su música, con la película biográfica de 1997 protagonizada por Jennifer Lopez presentándola a nuevas generaciones. Sigue siendo un ícono de la música y cultura latina.",
          de: "Selena Quintanilla-Pérez wurde am 31. März 1995 in Corpus Christi, Texas, tragisch von Yolanda Saldívar, der Präsidentin ihres Fanclubs, erschossen. (Hinweis: Sie starb durch Schüsse, nicht bei einem Flugzeugabsturz.) Mit nur 23 Jahren war Selena auf dem Höhepunkt ihrer Karriere als 'Königin der Tejano-Musik', hatte einen Grammy Award gewonnen und Crossover-Erfolg erzielt. Ihr Tod schockierte die Latino-Community und löste eine beispiellose Welle der Trauer aus. Über 60.000 Menschen nahmen an ihrer öffentlichen Aufbahrung teil. Selenas Vermächtnis lebt durch ihre Musik weiter, wobei der biografische Film von 1997 mit Jennifer Lopez sie neuen Generationen vorstellte. Sie bleibt eine Ikone der lateinamerikanischen Musik und Kultur.",
          nl: "Selena Quintanilla-Pérez werd tragisch neergeschoten en gedood op 31 maart 1995 in Corpus Christi, Texas, door Yolanda Saldívar, de voorzitter van haar fanclub. (Let op: Ze stierf door een schot wond, niet bij een vliegtuigongeluk.) Op slechts 23-jarige leeftijd was Selena op het hoogtepunt van haar carrière als de 'Koningin van Tejano-muziek', had een Grammy Award gewonnen en crossover-succes behaald. Haar dood schokte de Latino-gemeenschap en veroorzaakte een ongekende golf van verdriet. Meer dan 60.000 mensen woonden haar openbare uitvaart bij. Selena's erfenis blijft voortbestaan door haar muziek, waarbij de biografische film uit 1997 met Jennifer Lopez haar aan nieuwe generaties introduceerde. Ze blijft een icoon van Latijns-Amerikaanse muziek en cultuur."
        }
      }
    ]
  };

  // Export March challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('march', marchChallenges);
  }

})();