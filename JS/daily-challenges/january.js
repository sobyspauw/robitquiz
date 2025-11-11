// January Daily Challenges - 31 days × 5 questions each = 155 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {

  const januaryChallenges = {
    name: {
      en: "January Daily Challenges",
      es: "Desafíos Diarios de Enero",
      de: "Januar Tägliche Herausforderungen",
      nl: "Januari Dagelijkse Uitdagingen"
    },

    // Day 1 - January 1st: New Year's Day & Euro Introduction (1999)
    day1: [
      {
        question: {
          en: "In what year was the Euro officially introduced as currency in 11 EU countries?",
          es: "¿En qué año se introdujo oficialmente el Euro como moneda en 11 países de la UE?",
          de: "In welchem Jahr wurde der Euro offiziell als Währung in 11 EU-Ländern eingeführt?",
          nl: "In welk jaar werd de Euro officieel ingevoerd als valuta in 11 EU-landen?"
        },
        options: [
          { en: "1992", es: "1992", de: "1992", nl: "1992" },
          { en: "1999", es: "1999", de: "1999", nl: "1999" },
          { en: "2002", es: "2002", de: "2002", nl: "2002" },
          { en: "1995", es: "1995", de: "1995", nl: "1995" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Euro was introduced as an accounting currency on January 1, 1999, in 11 European Union countries. Physical euro coins and banknotes were not introduced until January 1, 2002. This marked a major milestone in European integration and created the world's second-largest reserve currency.",
          es: "El Euro se introdujo como moneda contable el 1 de enero de 1999 en 11 países de la Unión Europea. Las monedas y billetes físicos de euro no se introdujeron hasta el 1 de enero de 2002. Esto marcó un hito importante en la integración europea y creó la segunda moneda de reserva más grande del mundo.",
          de: "Der Euro wurde am 1. Januar 1999 als Buchgeld in 11 Ländern der Europäischen Union eingeführt. Physische Euro-Münzen und Banknoten wurden erst am 1. Januar 2002 eingeführt. Dies markierte einen wichtigen Meilenstein in der europäischen Integration und schuf die zweitgrößte Reservewährung der Welt.",
          nl: "De Euro werd op 1 januari 1999 geïntroduceerd als boekhoudkundige munt in 11 landen van de Europese Unie. Fysieke euromunten en bankbiljetten werden pas op 1 januari 2002 ingevoerd. Dit markeerde een belangrijke mijlpaal in de Europese integratie en creëerde 's werelds op één na grootste reservevaluta."
        }
      },
      {
        question: {
          en: "What historic proclamation did President Lincoln sign on January 1, 1863?",
          es: "¿Qué proclamación histórica firmó el presidente Lincoln el 1 de enero de 1863?",
          de: "Welche historische Proklamation unterzeichnete Präsident Lincoln am 1. Januar 1863?",
          nl: "Welke historische proclamatie ondertekende president Lincoln op 1 januari 1863?"
        },
        options: [
          { en: "Declaration of Independence", es: "Declaración de Independencia", de: "Unabhängigkeitserklärung", nl: "Onafhankelijkheidsverklaring" },
          { en: "Constitution", es: "Constitución", de: "Verfassung", nl: "Grondwet" },
          { en: "Emancipation Proclamation", es: "Proclamación de Emancipación", de: "Emanzipationsproklamation", nl: "Emancipatieproclamatie" },
          { en: "Bill of Rights", es: "Declaración de Derechos", de: "Bill of Rights", nl: "Bill of Rights" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Emancipation Proclamation declared that all enslaved people in Confederate states were to be set free. This executive order fundamentally transformed the Civil War into a fight for freedom and human rights. It paved the way for the eventual abolition of slavery through the 13th Amendment in 1865.",
          es: "La Proclamación de Emancipación declaró que todas las personas esclavizadas en los estados confederados debían ser liberadas. Esta orden ejecutiva transformó fundamentalmente la Guerra Civil en una lucha por la libertad y los derechos humanos. Allanó el camino para la eventual abolición de la esclavitud a través de la 13ª Enmienda en 1865.",
          de: "Die Emanzipationsproklamation erklärte, dass alle versklavten Menschen in den Konföderierten Staaten befreit werden sollten. Diese Durchführungsverordnung verwandelte den Bürgerkrieg grundlegend in einen Kampf für Freiheit und Menschenrechte. Sie ebnete den Weg für die endgültige Abschaffung der Sklaverei durch den 13. Zusatzartikel im Jahr 1865.",
          nl: "De Emancipatieproclamatie verklaarde dat alle tot slaaf gemaakte mensen in de Geconfedereerde staten vrij moesten worden gelaten. Dit uitvoerend besluit transformeerde de Burgeroorlog fundamenteel tot een strijd voor vrijheid en mensenrechten. Het effende het pad voor de uiteindelijke afschaffing van slavernij via het 13e Amendement in 1865."
        }
      },
      {
        question: {
          en: "Which famous author of 'The Catcher in the Rye' was born on January 1, 1919?",
          es: "¿Qué famoso autor de 'El guardián entre el centeno' nació el 1 de enero de 1919?",
          de: "Welcher berühmte Autor von 'Der Fänger im Roggen' wurde am 1. Januar 1919 geboren?",
          nl: "Welke beroemde auteur van 'De vanger in het graan' werd geboren op 1 januari 1919?"
        },
        options: [
          { en: "J.D. Salinger", es: "J.D. Salinger", de: "J.D. Salinger", nl: "J.D. Salinger" },
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" },
          { en: "F. Scott Fitzgerald", es: "F. Scott Fitzgerald", de: "F. Scott Fitzgerald", nl: "F. Scott Fitzgerald" },
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" }
        ],
        correctIndex: 0,
        explanation: {
          en: "J.D. Salinger wrote 'The Catcher in the Rye' in 1951, a novel that became one of the most influential works in American literature. The book explores themes of teenage angst and alienation through protagonist Holden Caulfield. Salinger was notoriously reclusive, avoiding public life for most of his later years.",
          es: "J.D. Salinger escribió 'El guardián entre el centeno' en 1951, una novela que se convirtió en una de las obras más influyentes de la literatura estadounidense. El libro explora temas de angustia adolescente y alienación a través del protagonista Holden Caulfield. Salinger fue notoriamente reclusivo, evitando la vida pública durante la mayor parte de sus últimos años.",
          de: "J.D. Salinger schrieb 'Der Fänger im Roggen' im Jahr 1951, einen Roman, der zu einem der einflussreichsten Werke der amerikanischen Literatur wurde. Das Buch erforscht Themen der jugendlichen Angst und Entfremdung durch den Protagonisten Holden Caulfield. Salinger war notorisch zurückgezogen und mied das öffentliche Leben für den größten Teil seiner späteren Jahre.",
          nl: "J.D. Salinger schreef 'De vanger in het graan' in 1951, een roman die een van de meest invloedrijke werken in de Amerikaanse literatuur werd. Het boek verkent thema's van tienerdepressie en vervreemding via hoofdpersoon Holden Caulfield. Salinger was notoir teruggetrokken en meed het openbare leven gedurende het grootste deel van zijn latere jaren."
        }
      },
      {
        question: {
          en: "The Julian calendar, which set January 1 as New Year's Day, took effect in which year BC?",
          es: "El calendario juliano, que estableció el 1 de enero como Año Nuevo, entró en vigor en qué año a.C.?",
          de: "Der julianische Kalender, der den 1. Januar als Neujahrstag festlegte, trat in welchem Jahr v. Chr. in Kraft?",
          nl: "De Juliaanse kalender, die 1 januari als nieuwjaarsdag instelde, trad in welk jaar v.Chr. in werking?"
        },
        options: [
          { en: "100 BC", es: "100 a.C.", de: "100 v. Chr.", nl: "100 v.Chr." },
          { en: "1 BC", es: "1 a.C.", de: "1 v. Chr.", nl: "1 v.Chr." },
          { en: "45 BC", es: "45 a.C.", de: "45 v. Chr.", nl: "45 v.Chr." },
          { en: "27 BC", es: "27 a.C.", de: "27 v. Chr.", nl: "27 v.Chr." }
        ],
        correctIndex: 2,
        explanation: {
          en: "Julius Caesar introduced the Julian calendar in 45 BC, reforming the Roman calendar system. This calendar established January 1 as the official start of the new year and introduced the concept of leap years. It remained in use throughout Europe until the Gregorian calendar replaced it in 1582.",
          es: "Julio César introdujo el calendario juliano en el 45 a.C., reformando el sistema de calendario romano. Este calendario estableció el 1 de enero como el inicio oficial del año nuevo e introdujo el concepto de años bisiestos. Permaneció en uso en toda Europa hasta que el calendario gregoriano lo reemplazó en 1582.",
          de: "Julius Cäsar führte den julianischen Kalender im Jahr 45 v. Chr. ein und reformierte damit das römische Kalendersystem. Dieser Kalender legte den 1. Januar als offiziellen Beginn des neuen Jahres fest und führte das Konzept der Schaltjahre ein. Er blieb in ganz Europa in Gebrauch, bis der Gregorianische Kalender ihn 1582 ersetzte.",
          nl: "Julius Caesar introduceerde de Juliaanse kalender in 45 v.Chr., waarbij hij het Romeinse kalendersysteem hervormde. Deze kalender stelde 1 januari vast als de officiële start van het nieuwe jaar en introduceerde het concept van schrikkeljaren. Het bleef in gebruik in heel Europa totdat de Gregoriaanse kalender het in 1582 verving."
        }
      },
      {
        question: {
          en: "Which asteroid, the first to be discovered, was found on January 1, 1801?",
          es: "¿Qué asteroide, el primero en ser descubierto, se encontró el 1 de enero de 1801?",
          de: "Welcher Asteroid, der erste, der entdeckt wurde, wurde am 1. Januar 1801 gefunden?",
          nl: "Welke asteroïde, de eerste die werd ontdekt, werd gevonden op 1 januari 1801?"
        },
        options: [
          { en: "Vesta", es: "Vesta", de: "Vesta", nl: "Vesta" },
          { en: "Juno", es: "Juno", de: "Juno", nl: "Juno" },
          { en: "Pallas", es: "Palas", de: "Pallas", nl: "Pallas" },
          { en: "Ceres", es: "Ceres", de: "Ceres", nl: "Ceres" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Ceres was discovered by Italian astronomer Giuseppe Piazzi on the first day of the 19th century. Initially classified as a planet, it was later reclassified as an asteroid and is now considered a dwarf planet. Ceres is the largest object in the asteroid belt between Mars and Jupiter.",
          es: "Ceres fue descubierto por el astrónomo italiano Giuseppe Piazzi en el primer día del siglo XIX. Inicialmente clasificado como planeta, más tarde fue reclasificado como asteroide y ahora se considera un planeta enano. Ceres es el objeto más grande en el cinturón de asteroides entre Marte y Júpiter.",
          de: "Ceres wurde vom italienischen Astronomen Giuseppe Piazzi am ersten Tag des 19. Jahrhunderts entdeckt. Zunächst als Planet klassifiziert, wurde er später als Asteroid umklassifiziert und gilt jetzt als Zwergplanet. Ceres ist das größte Objekt im Asteroidengürtel zwischen Mars und Jupiter.",
          nl: "Ceres werd ontdekt door de Italiaanse astronoom Giuseppe Piazzi op de eerste dag van de 19e eeuw. Aanvankelijk geclassificeerd als een planeet, werd het later opnieuw geclassificeerd als een asteroïde en wordt nu beschouwd als een dwergplaneet. Ceres is het grootste object in de asteroïdengordel tussen Mars en Jupiter."
        }
      }
    ],

    // Day 2 - January 2nd: Luna 1 & Isaac Asimov
    day2: [
      {
        question: {
          en: "Which Soviet spacecraft became the first to reach the vicinity of the Moon on January 2, 1959?",
          es: "¿Qué nave espacial soviética fue la primera en alcanzar las cercanías de la Luna el 2 de enero de 1959?",
          de: "Welches sowjetische Raumschiff erreichte als erstes die Nähe des Mondes am 2. Januar 1959?",
          nl: "Welk Sovjet-ruimtevaartuig bereikte als eerste de nabijheid van de Maan op 2 januari 1959?"
        },
        options: [
          { en: "Sputnik 1", es: "Sputnik 1", de: "Sputnik 1", nl: "Sputnik 1" },
          { en: "Apollo 11", es: "Apolo 11", de: "Apollo 11", nl: "Apollo 11" },
          { en: "Luna 1", es: "Luna 1", de: "Luna 1", nl: "Luna 1" },
          { en: "Vostok 1", es: "Vostok 1", de: "Vostok 1", nl: "Vostok 1" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Luna 1 was the first spacecraft to reach the vicinity of the Moon and the first to escape Earth's gravity. It passed within 6,000 km of the Moon's surface before entering orbit around the Sun. This achievement marked a significant milestone in the Space Race between the Soviet Union and the United States.",
          es: "Luna 1 fue la primera nave espacial en alcanzar las cercanías de la Luna y la primera en escapar de la gravedad de la Tierra. Pasó a menos de 6,000 km de la superficie lunar antes de entrar en órbita alrededor del Sol. Este logro marcó un hito significativo en la Carrera Espacial entre la Unión Soviética y los Estados Unidos.",
          de: "Luna 1 war das erste Raumschiff, das die Nähe des Mondes erreichte und das erste, das der Erdanziehung entkam. Es passierte die Mondoberfläche in einer Entfernung von 6.000 km, bevor es in eine Umlaufbahn um die Sonne eintrat. Diese Leistung markierte einen bedeutenden Meilenstein im Weltraumrennen zwischen der Sowjetunion und den Vereinigten Staaten.",
          nl: "Luna 1 was het eerste ruimtevaartuig dat de nabijheid van de Maan bereikte en het eerste dat aan de zwaartekracht van de aarde ontsnapte. Het passeerde binnen 6.000 km van het maanoppervlak voordat het in een baan om de zon kwam. Deze prestatie markeerde een belangrijke mijlpaal in de ruimtewedloop tussen de Sovjet-Unie en de Verenigde Staten."
        }
      },
      {
        question: {
          en: "Which famous science fiction author, born January 2, 1920, wrote the Foundation series?",
          es: "¿Qué famoso autor de ciencia ficción, nacido el 2 de enero de 1920, escribió la serie Fundación?",
          de: "Welcher berühmte Science-Fiction-Autor, geboren am 2. Januar 1920, schrieb die Foundation-Reihe?",
          nl: "Welke beroemde sciencefictionauteur, geboren op 2 januari 1920, schreef de Foundation-serie?"
        },
        options: [
          { en: "Philip K. Dick", es: "Philip K. Dick", de: "Philip K. Dick", nl: "Philip K. Dick" },
          { en: "Arthur C. Clarke", es: "Arthur C. Clarke", de: "Arthur C. Clarke", nl: "Arthur C. Clarke" },
          { en: "Ray Bradbury", es: "Ray Bradbury", de: "Ray Bradbury", nl: "Ray Bradbury" },
          { en: "Isaac Asimov", es: "Isaac Asimov", de: "Isaac Asimov", nl: "Isaac Asimov" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Isaac Asimov was one of the most prolific and influential science fiction writers of all time. His Foundation series explores the fall and rise of galactic civilizations using psychohistory, a fictional mathematical science. Asimov also formulated the famous Three Laws of Robotics that influenced both science fiction and real robotics ethics.",
          es: "Isaac Asimov fue uno de los escritores de ciencia ficción más prolíficos e influyentes de todos los tiempos. Su serie Fundación explora la caída y el ascenso de civilizaciones galácticas usando psicohistoria, una ciencia matemática ficticia. Asimov también formuló las famosas Tres Leyes de la Robótica que influyeron tanto en la ciencia ficción como en la ética real de la robótica.",
          de: "Isaac Asimov war einer der produktivsten und einflussreichsten Science-Fiction-Autoren aller Zeiten. Seine Foundation-Reihe erforscht den Fall und Aufstieg galaktischer Zivilisationen mittels Psychohistorie, einer fiktiven mathematischen Wissenschaft. Asimov formulierte auch die berühmten Drei Gesetze der Robotik, die sowohl Science Fiction als auch die reale Robotikethik beeinflussten.",
          nl: "Isaac Asimov was een van de meest productieve en invloedrijke sciencefictionschrijvers aller tijden. Zijn Foundation-serie verkent de val en opkomst van galactische beschavingen met behulp van psychohistorie, een fictieve wiskundige wetenschap. Asimov formuleerde ook de beroemde Drie Wetten van de Robotica die zowel sciencefiction als echte robotica-ethiek beïnvloedden."
        }
      },
      {
        question: {
          en: "In what year did Japanese forces capture Manila during World War II on January 2?",
          es: "¿En qué año las fuerzas japonesas capturaron Manila durante la Segunda Guerra Mundial el 2 de enero?",
          de: "In welchem Jahr eroberten japanische Streitkräfte Manila während des Zweiten Weltkriegs am 2. Januar?",
          nl: "In welk jaar veroverden Japanse troepen Manilla tijdens de Tweede Wereldoorlog op 2 januari?"
        },
        options: [
          { en: "1942", es: "1942", de: "1942", nl: "1942" },
          { en: "1943", es: "1943", de: "1943", nl: "1943" },
          { en: "1941", es: "1941", de: "1941", nl: "1941" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Japanese occupation of Manila in 1942 came shortly after the attack on Pearl Harbor and marked a dark period in Philippine history. The city suffered extensive damage during both the Japanese occupation and its eventual liberation in 1945. The Battle of Manila became one of the most devastating urban battles of World War II.",
          es: "La ocupación japonesa de Manila en 1942 llegó poco después del ataque a Pearl Harbor y marcó un período oscuro en la historia filipina. La ciudad sufrió grandes daños tanto durante la ocupación japonesa como durante su eventual liberación en 1945. La Batalla de Manila se convirtió en una de las batallas urbanas más devastadoras de la Segunda Guerra Mundial.",
          de: "Die japanische Besetzung von Manila im Jahr 1942 erfolgte kurz nach dem Angriff auf Pearl Harbor und markierte eine dunkle Periode in der philippinischen Geschichte. Die Stadt erlitt während der japanischen Besatzung und ihrer eventuellen Befreiung 1945 erhebliche Schäden. Die Schlacht um Manila wurde zu einer der verheerendsten Stadtschlachten des Zweiten Weltkriegs.",
          nl: "De Japanse bezetting van Manilla in 1942 kwam kort na de aanval op Pearl Harbor en markeerde een donkere periode in de Filipijnse geschiedenis. De stad leed aanzienlijke schade tijdens zowel de Japanse bezetting als de uiteindelijke bevrijding in 1945. De Slag om Manilla werd een van de meest verwoestende stadsgevechten van de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "Which serial killer known as the 'Yorkshire Ripper' was arrested on January 2, 1981?",
          es: "¿Qué asesino en serie conocido como el 'Destripador de Yorkshire' fue arrestado el 2 de enero de 1981?",
          de: "Welcher Serienmörder, bekannt als 'Yorkshire Ripper', wurde am 2. Januar 1981 verhaftet?",
          nl: "Welke seriemoordenaar bekend als de 'Yorkshire Ripper' werd gearresteerd op 2 januari 1981?"
        },
        options: [
          { en: "Ted Bundy", es: "Ted Bundy", de: "Ted Bundy", nl: "Ted Bundy" },
          { en: "Jeffrey Dahmer", es: "Jeffrey Dahmer", de: "Jeffrey Dahmer", nl: "Jeffrey Dahmer" },
          { en: "Jack the Ripper", es: "Jack el Destripador", de: "Jack the Ripper", nl: "Jack the Ripper" },
          { en: "Peter Sutcliffe", es: "Peter Sutcliffe", de: "Peter Sutcliffe", nl: "Peter Sutcliffe" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Peter Sutcliffe terrorized northern England from 1975 to 1980, committing 13 murders and numerous attacks. His arrest ended one of the largest manhunts in British criminal history. The case exposed serious flaws in police investigation methods and led to significant reforms in British law enforcement procedures.",
          es: "Peter Sutcliffe aterrorizó el norte de Inglaterra desde 1975 hasta 1980, cometiendo 13 asesinatos y numerosos ataques. Su arresto puso fin a una de las mayores cacerías humanas en la historia criminal británica. El caso expuso graves fallas en los métodos de investigación policial y llevó a reformas significativas en los procedimientos de aplicación de la ley británica.",
          de: "Peter Sutcliffe terrorisierte Nordengland von 1975 bis 1980 und beging 13 Morde und zahlreiche Angriffe. Seine Verhaftung beendete eine der größten Fahndungen in der britischen Kriminalgeschichte. Der Fall deckte ernsthafte Mängel in den polizeilichen Ermittlungsmethoden auf und führte zu bedeutenden Reformen in den britischen Strafverfolgungsverfahren.",
          nl: "Peter Sutcliffe terroriseerde Noord-Engeland van 1975 tot 1980, waarbij hij 13 moorden en talrijke aanvallen pleegde. Zijn arrestatie beëindigde een van de grootste klopjachten in de Britse criminele geschiedenis. De zaak legde ernstige gebreken in politieonderzoeksmethoden bloot en leidde tot aanzienlijke hervormingen in Britse wetshandhavingsprocedures."
        }
      },
      {
        question: {
          en: "On January 2, 1920, over 3,000 suspected radicals were arrested in the U.S. in what event?",
          es: "El 2 de enero de 1920, más de 3,000 radicales sospechosos fueron arrestados en EE.UU. en qué evento?",
          de: "Am 2. Januar 1920 wurden über 3.000 mutmaßliche Radikale in den USA bei welchem Ereignis verhaftet?",
          nl: "Op 2 januari 1920 werden meer dan 3.000 vermeende radicalen gearresteerd in de VS tijdens welk evenement?"
        },
        options: [
          { en: "Red Scare", es: "Miedo Rojo", de: "Rote Angst", nl: "Rode Schrik" },
          { en: "Palmer Raids", es: "Redadas Palmer", de: "Palmer-Razzien", nl: "Palmer Raids" },
          { en: "Haymarket Affair", es: "Asunto Haymarket", de: "Haymarket-Aufstand", nl: "Haymarket-affaire" },
          { en: "Boston Tea Party", es: "Motín del Té de Boston", de: "Boston Tea Party", nl: "Boston Tea Party" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Palmer Raids were a series of controversial raids conducted by the U.S. Department of Justice to capture and deport suspected anarchists and communists. Named after Attorney General A. Mitchell Palmer, these raids were part of the First Red Scare following World War I. Many civil liberties advocates criticized the raids as violations of constitutional rights.",
          es: "Las Redadas Palmer fueron una serie de redadas controvertidas realizadas por el Departamento de Justicia de EE.UU. para capturar y deportar a sospechosos anarquistas y comunistas. Nombradas en honor al Fiscal General A. Mitchell Palmer, estas redadas fueron parte del Primer Miedo Rojo después de la Primera Guerra Mundial. Muchos defensores de las libertades civiles criticaron las redadas como violaciones de los derechos constitucionales.",
          de: "Die Palmer-Razzien waren eine Reihe kontroverser Razzien des US-Justizministeriums zur Festnahme und Abschiebung mutmaßlicher Anarchisten und Kommunisten. Benannt nach Generalstaatsanwalt A. Mitchell Palmer, waren diese Razzien Teil der Ersten Roten Angst nach dem Ersten Weltkrieg. Viele Befürworter der Bürgerrechte kritisierten die Razzien als Verletzungen verfassungsmäßiger Rechte.",
          nl: "De Palmer Raids waren een reeks controversiële invallen door het Amerikaanse ministerie van Justitie om vermeende anarchisten en communisten te arresteren en uit te zetten. Genoemd naar procureur-generaal A. Mitchell Palmer, waren deze invallen onderdeel van de Eerste Rode Schrik na de Eerste Wereldoorlog. Veel voorstanders van burgerlijke vrijheden bekritiseerden de invallen als schendingen van constitutionele rechten."
        }
      }
    ],

    // Day 3 - January 3rd: Alaska Statehood & Bitcoin Genesis Block
    day3: [
      {
        question: {
          en: "On January 3, 1959, which U.S. state was admitted as the 49th state?",
          es: "El 3 de enero de 1959, ¿qué estado de EE.UU. fue admitido como el estado número 49?",
          de: "Am 3. Januar 1959 wurde welcher US-Bundesstaat als 49. Bundesstaat aufgenommen?",
          nl: "Op 3 januari 1959 werd welke Amerikaanse staat toegelaten als de 49e staat?"
        },
        options: [
          { en: "Hawaii", es: "Hawái", de: "Hawaii", nl: "Hawaii" },
          { en: "New Mexico", es: "Nuevo México", de: "New Mexico", nl: "New Mexico" },
          { en: "Alaska", es: "Alaska", de: "Alaska", nl: "Alaska" },
          { en: "Arizona", es: "Arizona", de: "Arizona", nl: "Arizona" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Alaska became the 49th state after being purchased from Russia in 1867 for $7.2 million, often called 'Seward's Folly'. Despite initial criticism, the purchase proved invaluable with Alaska's vast natural resources including oil, gold, and fisheries. Hawaii followed as the 50th state just seven months later in August 1959.",
          es: "Alaska se convirtió en el estado número 49 después de ser comprado a Rusia en 1867 por $7.2 millones, a menudo llamado 'La Locura de Seward'. A pesar de las críticas iniciales, la compra resultó invaluable con los vastos recursos naturales de Alaska, incluidos petróleo, oro y pesquerías. Hawái siguió como el estado número 50 solo siete meses después en agosto de 1959.",
          de: "Alaska wurde der 49. Bundesstaat, nachdem es 1867 für 7,2 Millionen Dollar von Russland gekauft wurde, oft als 'Sewards Torheit' bezeichnet. Trotz anfänglicher Kritik erwies sich der Kauf als unbezahlbar mit Alaskas riesigen natürlichen Ressourcen einschließlich Öl, Gold und Fischerei. Hawaii folgte als 50. Bundesstaat nur sieben Monate später im August 1959.",
          nl: "Alaska werd de 49e staat nadat het in 1867 voor $7,2 miljoen van Rusland werd gekocht, vaak 'Seward's Dwaasheid' genoemd. Ondanks aanvankelijke kritiek bleek de aankoop van onschatbare waarde met Alaska's enorme natuurlijke hulpbronnen, waaronder olie, goud en visserij. Hawaii volgde als de 50e staat slechts zeven maanden later in augustus 1959."
        }
      },
      {
        question: {
          en: "The Genesis block of Bitcoin was created on January 3 of which year?",
          es: "El bloque Génesis de Bitcoin se creó el 3 de enero de qué año?",
          de: "Der Genesis-Block von Bitcoin wurde am 3. Januar welchen Jahres erstellt?",
          nl: "Het Genesis-blok van Bitcoin werd gecreëerd op 3 januari van welk jaar?"
        },
        options: [
          { en: "2009", es: "2009", de: "2009", nl: "2009" },
          { en: "2010", es: "2010", de: "2010", nl: "2010" },
          { en: "2011", es: "2011", de: "2011", nl: "2011" },
          { en: "2008", es: "2008", de: "2008", nl: "2008" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Satoshi Nakamoto mined the Genesis block, marking the birth of Bitcoin and blockchain technology. The block contained a message referencing a newspaper headline about bank bailouts, highlighting Bitcoin's purpose as an alternative to traditional banking. This innovation revolutionized digital currency and inspired thousands of cryptocurrencies.",
          es: "Satoshi Nakamoto minó el bloque Génesis, marcando el nacimiento de Bitcoin y la tecnología blockchain. El bloque contenía un mensaje que hacía referencia a un titular de periódico sobre rescates bancarios, destacando el propósito de Bitcoin como alternativa a la banca tradicional. Esta innovación revolucionó la moneda digital e inspiró miles de criptomonedas.",
          de: "Satoshi Nakamoto schürfte den Genesis-Block und markierte damit die Geburt von Bitcoin und Blockchain-Technologie. Der Block enthielt eine Nachricht, die sich auf eine Zeitungsschlagzeile über Bankenrettungen bezog und Bitcoins Zweck als Alternative zum traditionellen Bankwesen hervorhob. Diese Innovation revolutionierte die digitale Währung und inspirierte Tausende von Kryptowährungen.",
          nl: "Satoshi Nakamoto mijnde het Genesis-blok, wat de geboorte van Bitcoin en blockchain-technologie markeerde. Het blok bevatte een bericht dat verwees naar een krantenkoppen over bankenredding, wat het doel van Bitcoin als alternatief voor traditioneel bankieren benadrukte. Deze innovatie revolutioneerde digitale valuta en inspireerde duizenden cryptocurrencies."
        }
      },
      {
        question: {
          en: "Which American general defeated British forces at the Battle of Princeton on January 3, 1777?",
          es: "¿Qué general estadounidense derrotó a las fuerzas británicas en la Batalla de Princeton el 3 de enero de 1777?",
          de: "Welcher amerikanische General besiegte britische Truppen in der Schlacht von Princeton am 3. Januar 1777?",
          nl: "Welke Amerikaanse generaal versloeg Britse troepen in de Slag bij Princeton op 3 januari 1777?"
        },
        options: [
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 0,
        explanation: {
          en: "George Washington's victory at Princeton came just days after his famous crossing of the Delaware River and victory at Trenton. These successive victories revitalized the Continental Army's morale during a critical period of the Revolutionary War. The Princeton campaign demonstrated Washington's strategic brilliance and changed the war's momentum in favor of the Americans.",
          es: "La victoria de George Washington en Princeton llegó solo días después de su famoso cruce del río Delaware y la victoria en Trenton. Estas victorias sucesivas revitalizaron la moral del Ejército Continental durante un período crítico de la Guerra Revolucionaria. La campaña de Princeton demostró la brillantez estratégica de Washington y cambió el impulso de la guerra a favor de los estadounidenses.",
          de: "George Washingtons Sieg in Princeton kam nur wenige Tage nach seiner berühmten Überquerung des Delaware River und dem Sieg in Trenton. Diese aufeinanderfolgenden Siege belebten die Moral der Kontinentalarmee während einer kritischen Phase des Unabhängigkeitskrieges. Der Princeton-Feldzug demonstrierte Washingtons strategische Brillanz und änderte den Schwung des Krieges zugunsten der Amerikaner.",
          nl: "George Washingtons overwinning bij Princeton kwam slechts dagen na zijn beroemde oversteek van de Delaware-rivier en overwinning bij Trenton. Deze opeenvolgende overwinningen herstelden het moreel van het Continentale Leger tijdens een kritieke periode van de Revolutionaire Oorlog. De Princeton-campagne toonde Washingtons strategische genialiteit en veranderde het momentum van de oorlog in het voordeel van de Amerikanen."
        }
      },
      {
        question: {
          en: "Which actor, famous for 'Mad Max' and 'Braveheart', was born on January 3, 1956?",
          es: "¿Qué actor, famoso por 'Mad Max' y 'Braveheart', nació el 3 de enero de 1956?",
          de: "Welcher Schauspieler, berühmt für 'Mad Max' und 'Braveheart', wurde am 3. Januar 1956 geboren?",
          nl: "Welke acteur, beroemd om 'Mad Max' en 'Braveheart', werd geboren op 3 januari 1956?"
        },
        options: [
          { en: "Tom Cruise", es: "Tom Cruise", de: "Tom Cruise", nl: "Tom Cruise" },
          { en: "Mel Gibson", es: "Mel Gibson", de: "Mel Gibson", nl: "Mel Gibson" },
          { en: "Russell Crowe", es: "Russell Crowe", de: "Russell Crowe", nl: "Russell Crowe" },
          { en: "Brad Pitt", es: "Brad Pitt", de: "Brad Pitt", nl: "Brad Pitt" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Mel Gibson became a global superstar with the Mad Max trilogy in the 1980s and later won Academy Awards for directing and producing 'Braveheart' in 1995. Born in New York but raised in Australia, he successfully transitioned from action star to acclaimed director. His films have grossed billions worldwide and influenced modern action cinema.",
          es: "Mel Gibson se convirtió en una superestrella global con la trilogía de Mad Max en la década de 1980 y luego ganó premios de la Academia por dirigir y producir 'Braveheart' en 1995. Nacido en Nueva York pero criado en Australia, pasó con éxito de estrella de acción a director aclamado. Sus películas han recaudado miles de millones en todo el mundo e influenciado el cine de acción moderno.",
          de: "Mel Gibson wurde mit der Mad Max-Trilogie in den 1980er Jahren zum globalen Superstar und gewann später Academy Awards für die Regie und Produktion von 'Braveheart' im Jahr 1995. Geboren in New York, aber in Australien aufgewachsen, gelang ihm erfolgreich der Übergang vom Actionstar zum gefeierten Regisseur. Seine Filme haben weltweit Milliarden eingespielt und das moderne Actionkino beeinflusst.",
          nl: "Mel Gibson werd een wereldwijde superster met de Mad Max-trilogie in de jaren 1980 en won later Academy Awards voor het regisseren en produceren van 'Braveheart' in 1995. Geboren in New York maar opgegroeid in Australië, maakte hij met succes de overstap van actiester naar geprezen regisseur. Zijn films hebben wereldwijd miljarden opgebracht en het moderne actiecinema beïnvloed."
        }
      },
      {
        question: {
          en: "On January 3, 2019, which spacecraft made the first landing on the far side of the Moon?",
          es: "El 3 de enero de 2019, ¿qué nave espacial realizó el primer aterrizaje en el lado oculto de la Luna?",
          de: "Am 3. Januar 2019 landete welches Raumschiff als erstes auf der Rückseite des Mondes?",
          nl: "Op 3 januari 2019 landde welk ruimtevaartuig als eerste op de verre kant van de Maan?"
        },
        options: [
          { en: "Chang'e 4", es: "Chang'e 4", de: "Chang'e 4", nl: "Chang'e 4" },
          { en: "Apollo 11", es: "Apolo 11", de: "Apollo 11", nl: "Apollo 11" },
          { en: "Artemis 1", es: "Artemis 1", de: "Artemis 1", nl: "Artemis 1" },
          { en: "Luna 9", es: "Luna 9", de: "Luna 9", nl: "Luna 9" }
        ],
        correctIndex: 0,
        explanation: {
          en: "China's Chang'e 4 mission achieved a historic first by landing on the far side of the Moon, which never faces Earth. The mission deployed a rover named Yutu-2 to explore the Von Kármán crater. This landing required a relay satellite to maintain communication, showcasing China's growing capabilities in space exploration.",
          es: "La misión Chang'e 4 de China logró un primer histórico al aterrizar en el lado oculto de la Luna, que nunca mira hacia la Tierra. La misión desplegó un rover llamado Yutu-2 para explorar el cráter Von Kármán. Este aterrizaje requirió un satélite de retransmisión para mantener la comunicación, mostrando las crecientes capacidades de China en la exploración espacial.",
          de: "Chinas Chang'e 4-Mission erzielte eine historische Premiere durch die Landung auf der Rückseite des Mondes, die niemals der Erde zugewandt ist. Die Mission setzte einen Rover namens Yutu-2 ein, um den Von-Kármán-Krater zu erforschen. Diese Landung erforderte einen Relay-Satelliten zur Aufrechterhaltung der Kommunikation und zeigte Chinas wachsende Fähigkeiten in der Weltraumforschung.",
          nl: "China's Chang'e 4-missie bereikte een historische primeur door te landen op de verre kant van de Maan, die nooit naar de aarde is gericht. De missie zette een rover genaamd Yutu-2 in om de Von Kármán-krater te verkennen. Deze landing vereiste een relais-satelliet om communicatie te onderhouden, wat China's groeiende capaciteiten in ruimteverkenning toonde."
        }
      }
    ],

    // Day 4 - January 4th: Utah Statehood & Louis Braille
    day4: [
      {
        question: {
          en: "On January 4, 1896, which U.S. state became the 45th state to join the Union?",
          es: "El 4 de enero de 1896, ¿qué estado de EE.UU. se convirtió en el estado número 45 en unirse a la Unión?",
          de: "Am 4. Januar 1896 wurde welcher US-Bundesstaat der 45. Bundesstaat der Union?",
          nl: "Op 4 januari 1896 werd welke Amerikaanse staat de 45e staat die zich bij de Unie aansloot?"
        },
        options: [
          { en: "Colorado", es: "Colorado", de: "Colorado", nl: "Colorado" },
          { en: "Utah", es: "Utah", de: "Utah", nl: "Utah" },
          { en: "Wyoming", es: "Wyoming", de: "Wyoming", nl: "Wyoming" },
          { en: "Nevada", es: "Nevada", de: "Nevada", nl: "Nevada" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Utah's path to statehood was complicated by conflicts over Mormon practices, particularly polygamy. After the Mormon Church officially discontinued polygamy in 1890, Utah was finally admitted to the Union. The state's motto 'Industry' reflects the hardworking pioneer spirit of its early settlers who transformed the desert landscape.",
          es: "El camino de Utah hacia la estadidad fue complicado por conflictos sobre las prácticas mormonas, particularmente la poligamia. Después de que la Iglesia Mormona descontinuara oficialmente la poligamia en 1890, Utah fue finalmente admitido en la Unión. El lema del estado 'Industria' refleja el espíritu trabajador de sus primeros colonos que transformaron el paisaje desértico.",
          de: "Utahs Weg zur Eigenstaatlichkeit wurde durch Konflikte über mormonische Praktiken, insbesondere Polygamie, erschwert. Nachdem die Mormonenkirche 1890 offiziell die Polygamie einstellte, wurde Utah schließlich in die Union aufgenommen. Das Staatsmotto 'Industrie' spiegelt den fleißigen Pioniergeist seiner frühen Siedler wider, die die Wüstenlandschaft verwandelten.",
          nl: "Utah's weg naar staatsschap werd gecompliceerd door conflicten over mormoonse praktijken, met name polygamie. Nadat de mormoonse kerk in 1890 officieel de polygamie stopzette, werd Utah uiteindelijk toegelaten tot de Unie. Het staatsmotto 'Industrie' weerspiegelt de hardwerkende pioniergeest van de vroege kolonisten die het woestijnlandschap transformeerden."
        }
      },
      {
        question: {
          en: "Louis Braille, inventor of the Braille reading system for the blind, was born on January 4 of which year?",
          es: "Louis Braille, inventor del sistema de lectura Braille para ciegos, nació el 4 de enero de qué año?",
          de: "Louis Braille, Erfinder der Brailleschrift für Blinde, wurde am 4. Januar welchen Jahres geboren?",
          nl: "Louis Braille, uitvinder van het Braille-leessysteem voor blinden, werd geboren op 4 januari van welk jaar?"
        },
        options: [
          { en: "1809", es: "1809", de: "1809", nl: "1809" },
          { en: "1789", es: "1789", de: "1789", nl: "1789" },
          { en: "1849", es: "1849", de: "1849", nl: "1849" },
          { en: "1829", es: "1829", de: "1829", nl: "1829" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Louis Braille lost his sight in a childhood accident but developed his revolutionary reading system at age 15. His tactile alphabet using raised dots enabled blind people to read and write independently for the first time. Despite initial resistance, Braille is now used worldwide and has been adapted for music notation and computer input.",
          es: "Louis Braille perdió la vista en un accidente infantil pero desarrolló su revolucionario sistema de lectura a los 15 años. Su alfabeto táctil usando puntos en relieve permitió a las personas ciegas leer y escribir de forma independiente por primera vez. A pesar de la resistencia inicial, el Braille ahora se usa en todo el mundo y se ha adaptado para notación musical y entrada de computadora.",
          de: "Louis Braille verlor sein Augenlicht bei einem Kindheitsunfall, entwickelte aber sein revolutionäres Lesesystem im Alter von 15 Jahren. Sein taktiles Alphabet mit erhabenen Punkten ermöglichte es blinden Menschen zum ersten Mal, selbstständig zu lesen und zu schreiben. Trotz anfänglichen Widerstands wird Braille heute weltweit verwendet und wurde für Musiknotation und Computereingabe angepasst.",
          nl: "Louis Braille verloor zijn gezichtsvermogen bij een ongeluk in zijn kindertijd, maar ontwikkelde zijn revolutionaire leessysteem op 15-jarige leeftijd. Zijn tactiele alfabet met verhoogde punten stelde blinde mensen voor het eerst in staat om onafhankelijk te lezen en schrijven. Ondanks aanvankelijke weerstand wordt braille nu wereldwijd gebruikt en is aangepast voor muzieknotatie en computerinvoer."
        }
      },
      {
        question: {
          en: "Which famous tall building officially opened in Dubai on January 4, 2010?",
          es: "¿Qué famoso edificio alto se inauguró oficialmente en Dubái el 4 de enero de 2010?",
          de: "Welches berühmte hohe Gebäude wurde am 4. Januar 2010 in Dubai offiziell eröffnet?",
          nl: "Welk beroemd hoog gebouw werd officieel geopend in Dubai op 4 januari 2010?"
        },
        options: [
          { en: "Burj Khalifa", es: "Burj Khalifa", de: "Burj Khalifa", nl: "Burj Khalifa" },
          { en: "Empire State Building", es: "Empire State Building", de: "Empire State Building", nl: "Empire State Building" },
          { en: "Petronas Towers", es: "Torres Petronas", de: "Petronas Towers", nl: "Petronas Towers" },
          { en: "One World Trade Center", es: "One World Trade Center", de: "One World Trade Center", nl: "One World Trade Center" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Burj Khalifa stands at 828 meters tall, making it the world's tallest building. Its construction required innovative engineering to withstand desert heat and high winds. The tower contains residential apartments, office space, and the world's highest observation deck, symbolizing Dubai's rapid transformation into a global city.",
          es: "El Burj Khalifa tiene 828 metros de altura, lo que lo convierte en el edificio más alto del mundo. Su construcción requirió ingeniería innovadora para resistir el calor del desierto y los fuertes vientos. La torre contiene apartamentos residenciales, espacio de oficinas y el mirador más alto del mundo, simbolizando la rápida transformación de Dubái en una ciudad global.",
          de: "Der Burj Khalifa ist 828 Meter hoch und damit das höchste Gebäude der Welt. Sein Bau erforderte innovative Ingenieurskunst, um der Wüstenhitze und starken Winden standzuhalten. Der Turm enthält Wohnungen, Büroflächen und die höchste Aussichtsplattform der Welt und symbolisiert Dubais rasante Transformation zu einer globalen Stadt.",
          nl: "De Burj Khalifa is 828 meter hoog, waardoor het 's werelds hoogste gebouw is. De bouw vereiste innovatieve techniek om bestand te zijn tegen woestijnhitte en hoge wind. De toren bevat woningen, kantoorruimte en 's werelds hoogste observatiedek, wat Dubai's snelle transformatie tot wereldstad symboliseert."
        }
      },
      {
        question: {
          en: "On January 4, 2004, which NASA Mars rover successfully landed on Mars?",
          es: "El 4 de enero de 2004, ¿qué rover de Marte de la NASA aterrizó con éxito en Marte?",
          de: "Am 4. Januar 2004 landete welcher NASA-Mars-Rover erfolgreich auf dem Mars?",
          nl: "Op 4 januari 2004 landde welke NASA Mars-rover met succes op Mars?"
        },
        options: [
          { en: "Opportunity", es: "Opportunity", de: "Opportunity", nl: "Opportunity" },
          { en: "Spirit", es: "Spirit", de: "Spirit", nl: "Spirit" },
          { en: "Curiosity", es: "Curiosity", de: "Curiosity", nl: "Curiosity" },
          { en: "Perseverance", es: "Perseverance", de: "Perseverance", nl: "Perseverance" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Spirit landed three weeks before its twin rover Opportunity, beginning a mission designed to last 90 days. The rover exceeded all expectations, operating for over six years and traveling 7.7 kilometers across Mars. Spirit's discoveries provided crucial evidence that water once flowed on the Martian surface.",
          es: "Spirit aterrizó tres semanas antes que su rover gemelo Opportunity, comenzando una misión diseñada para durar 90 días. El rover superó todas las expectativas, operando durante más de seis años y viajando 7.7 kilómetros a través de Marte. Los descubrimientos de Spirit proporcionaron evidencia crucial de que el agua una vez fluyó en la superficie marciana.",
          de: "Spirit landete drei Wochen vor seinem Zwillingsrover Opportunity und begann eine Mission, die 90 Tage dauern sollte. Der Rover übertraf alle Erwartungen und war über sechs Jahre lang in Betrieb und legte 7,7 Kilometer auf dem Mars zurück. Spirits Entdeckungen lieferten entscheidende Beweise dafür, dass einst Wasser auf der Marsoberfläche floss.",
          nl: "Spirit landde drie weken voor zijn tweelingrover Opportunity en begon een missie die 90 dagen zou duren. De rover overtrof alle verwachtingen en was meer dan zes jaar actief en reisde 7,7 kilometer over Mars. Spirit's ontdekkingen leverden cruciaal bewijs dat water ooit op het Marsoppervlak stroomde."
        }
      },
      {
        question: {
          en: "Which famous author and Nobel laureate Albert Camus died in a car accident on January 4, 1960?",
          es: "¿Qué famoso autor y premio Nobel Albert Camus murió en un accidente automovilístico el 4 de enero de 1960?",
          de: "Welcher berühmte Autor und Nobelpreisträger Albert Camus starb am 4. Januar 1960 bei einem Autounfall?",
          nl: "Welke beroemde auteur en Nobelprijswinnaar Albert Camus stierf in een auto-ongeluk op 4 januari 1960?"
        },
        options: [
          { en: "American author", es: "Autor estadounidense", de: "Amerikanischer Autor", nl: "Amerikaanse auteur" },
          { en: "German author", es: "Autor alemán", de: "Deutscher Autor", nl: "Duitse auteur" },
          { en: "British author", es: "Autor británico", de: "Britischer Autor", nl: "Britse auteur" },
          { en: "French author", es: "Autor francés", de: "Französischer Autor", nl: "Franse auteur" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Albert Camus was a French existentialist philosopher and author who won the Nobel Prize in Literature in 1957. His most famous works include 'The Stranger' and 'The Plague', which explored themes of absurdism and the human condition. Ironically, an unused train ticket was found in his pocket after the fatal accident, suggesting he had changed his travel plans at the last minute.",
          es: "Albert Camus fue un filósofo y autor existencialista francés que ganó el Premio Nobel de Literatura en 1957. Sus obras más famosas incluyen 'El extranjero' y 'La peste', que exploraban temas de absurdismo y la condición humana. Irónicamente, se encontró un boleto de tren sin usar en su bolsillo después del accidente fatal, lo que sugiere que había cambiado sus planes de viaje en el último minuto.",
          de: "Albert Camus war ein französischer existentialistischer Philosoph und Autor, der 1957 den Nobelpreis für Literatur gewann. Seine berühmtesten Werke sind 'Der Fremde' und 'Die Pest', die Themen des Absurdismus und der menschlichen Existenz erforschten. Ironischerweise wurde nach dem tödlichen Unfall eine unbenutzte Fahrkarte in seiner Tasche gefunden, was darauf hindeutet, dass er seine Reisepläne in letzter Minute geändert hatte.",
          nl: "Albert Camus was een Franse existentialistische filosoof en auteur die de Nobelprijs voor Literatuur won in 1957. Zijn beroemdste werken zijn 'De vreemdeling' en 'De pest', die thema's van absurdisme en de menselijke conditie verkenden. Ironisch genoeg werd een ongebruikt treinkaartje in zijn zak gevonden na het dodelijke ongeval, wat suggereert dat hij zijn reisplannen op het laatste moment had gewijzigd."
        }
      }
    ],

    // Day 5 - January 5th: Nellie Tayloe Ross & Battle of Nancy
    day5: [
      {
        question: {
          en: "On January 5, 1925, who became the first female governor in U.S. history?",
          es: "El 5 de enero de 1925, ¿quién se convirtió en la primera gobernadora en la historia de EE.UU.?",
          de: "Am 5. Januar 1925 wurde wer die erste weibliche Gouverneurin in der US-Geschichte?",
          nl: "Op 5 januari 1925 werd wie de eerste vrouwelijke gouverneur in de Amerikaanse geschiedenis?"
        },
        options: [
          { en: "Hillary Clinton", es: "Hillary Clinton", de: "Hillary Clinton", nl: "Hillary Clinton" },
          { en: "Nellie Tayloe Ross", es: "Nellie Tayloe Ross", de: "Nellie Tayloe Ross", nl: "Nellie Tayloe Ross" },
          { en: "Eleanor Roosevelt", es: "Eleanor Roosevelt", de: "Eleanor Roosevelt", nl: "Eleanor Roosevelt" },
          { en: "Susan B. Anthony", es: "Susan B. Anthony", de: "Susan B. Anthony", nl: "Susan B. Anthony" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nellie Tayloe Ross was elected governor of Wyoming to complete her late husband's term. Just 15 days later, Miriam Ferguson became governor of Texas, making them the first two female governors in U.S. history. Ross later became the first woman to serve as Director of the U.S. Mint, a position she held for 20 years.",
          es: "Nellie Tayloe Ross fue elegida gobernadora de Wyoming para completar el mandato de su difunto esposo. Solo 15 días después, Miriam Ferguson se convirtió en gobernadora de Texas, convirtiéndolas en las primeras dos gobernadoras en la historia de EE.UU. Ross luego se convirtió en la primera mujer en servir como Directora de la Casa de la Moneda de EE.UU., un cargo que ocupó durante 20 años.",
          de: "Nellie Tayloe Ross wurde zur Gouverneurin von Wyoming gewählt, um die Amtszeit ihres verstorbenen Mannes zu vollenden. Nur 15 Tage später wurde Miriam Ferguson Gouverneurin von Texas, wodurch sie die ersten beiden weiblichen Gouverneurinnen in der US-Geschichte wurden. Ross wurde später die erste Frau, die als Direktorin der US-Münzanstalt diente, eine Position, die sie 20 Jahre lang innehatte.",
          nl: "Nellie Tayloe Ross werd gekozen tot gouverneur van Wyoming om de termijn van haar overleden echtgenoot te voltooien. Slechts 15 dagen later werd Miriam Ferguson gouverneur van Texas, waardoor zij de eerste twee vrouwelijke gouverneurs in de Amerikaanse geschiedenis werden. Ross werd later de eerste vrouw die diende als directeur van de Amerikaanse Munt, een positie die ze 20 jaar bekleedde."
        }
      },
      {
        question: {
          en: "Which famous opera house was inaugurated in Paris on January 5, 1875?",
          es: "¿Qué famosa casa de ópera se inauguró en París el 5 de enero de 1875?",
          de: "Welches berühmte Opernhaus wurde am 5. Januar 1875 in Paris eingeweiht?",
          nl: "Welk beroemd operagebouw werd ingewijd in Parijs op 5 januari 1875?"
        },
        options: [
          { en: "La Scala", es: "La Scala", de: "La Scala", nl: "La Scala" },
          { en: "Sydney Opera House", es: "Ópera de Sídney", de: "Opernhaus Sydney", nl: "Sydney Opera House" },
          { en: "Metropolitan Opera", es: "Ópera Metropolitana", de: "Metropolitan Opera", nl: "Metropolitan Opera" },
          { en: "Palais Garnier", es: "Palais Garnier", de: "Palais Garnier", nl: "Palais Garnier" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Palais Garnier is a stunning example of Second Empire architecture and one of Paris's most iconic landmarks. Designed by Charles Garnier, it took 15 years to complete and features elaborate decorations including a famous ceiling painted by Marc Chagall. The opera house inspired Gaston Leroux's novel 'The Phantom of the Opera'.",
          es: "El Palais Garnier es un ejemplo impresionante de arquitectura del Segundo Imperio y uno de los monumentos más icónicos de París. Diseñado por Charles Garnier, tardó 15 años en completarse y presenta decoraciones elaboradas incluyendo un famoso techo pintado por Marc Chagall. La casa de ópera inspiró la novela de Gaston Leroux 'El Fantasma de la Ópera'.",
          de: "Der Palais Garnier ist ein beeindruckendes Beispiel der Architektur des Zweiten Kaiserreichs und eines der berühmtesten Wahrzeichen von Paris. Entworfen von Charles Garnier, dauerte der Bau 15 Jahre und verfügt über aufwendige Dekorationen, darunter eine berühmte Decke, die von Marc Chagall gemalt wurde. Das Opernhaus inspirierte Gaston Leroux' Roman 'Das Phantom der Oper'.",
          nl: "Het Palais Garnier is een prachtig voorbeeld van Second Empire-architectuur en een van de meest iconische bezienswaardigheden van Parijs. Ontworpen door Charles Garnier, duurde het 15 jaar om te voltooien en bevat uitgebreide decoraties, waaronder een beroemd plafond geschilderd door Marc Chagall. Het operagebouw inspireerde Gaston Leroux' roman 'Het Spook van de Opera'."
        }
      },
      {
        question: {
          en: "Which Hollywood actor, famous for 'The Godfather', was born on January 5, 1931?",
          es: "¿Qué actor de Hollywood, famoso por 'El Padrino', nació el 5 de enero de 1931?",
          de: "Welcher Hollywood-Schauspieler, berühmt für 'Der Pate', wurde am 5. Januar 1931 geboren?",
          nl: "Welke Hollywood-acteur, beroemd om 'The Godfather', werd geboren op 5 januari 1931?"
        },
        options: [
          { en: "Al Pacino", es: "Al Pacino", de: "Al Pacino", nl: "Al Pacino" },
          { en: "Marlon Brando", es: "Marlon Brando", de: "Marlon Brando", nl: "Marlon Brando" },
          { en: "Robert Duvall", es: "Robert Duvall", de: "Robert Duvall", nl: "Robert Duvall" },
          { en: "James Caan", es: "James Caan", de: "James Caan", nl: "James Caan" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Robert Duvall played Tom Hagen, the consigliere to the Corleone family in 'The Godfather' trilogy. His distinguished career spans over 60 years with seven Academy Award nominations and one win for 'Tender Mercies'. Duvall is known for his versatility and has portrayed characters ranging from military officers to cowboys.",
          es: "Robert Duvall interpretó a Tom Hagen, el consejero de la familia Corleone en la trilogía de 'El Padrino'. Su distinguida carrera abarca más de 60 años con siete nominaciones al Oscar y una victoria por 'Tender Mercies'. Duvall es conocido por su versatilidad y ha interpretado personajes que van desde oficiales militares hasta vaqueros.",
          de: "Robert Duvall spielte Tom Hagen, den Consigliere der Corleone-Familie in der 'Der Pate'-Trilogie. Seine herausragende Karriere erstreckt sich über 60 Jahre mit sieben Oscar-Nominierungen und einem Gewinn für 'Tender Mercies'. Duvall ist bekannt für seine Vielseitigkeit und hat Charaktere von Militäroffizieren bis zu Cowboys dargestellt.",
          nl: "Robert Duvall speelde Tom Hagen, de consigliere van de Corleone-familie in 'The Godfather'-trilogie. Zijn vooraanstaande carrière beslaat meer dan 60 jaar met zeven Academy Award-nominaties en één overwinning voor 'Tender Mercies'. Duvall staat bekend om zijn veelzijdigheid en heeft personages gespeeld variërend van militaire officieren tot cowboys."
        }
      },
      {
        question: {
          en: "Singer and politician Sonny Bono died on January 5, 1998, while doing what activity?",
          es: "El cantante y político Sonny Bono murió el 5 de enero de 1998 mientras hacía qué actividad?",
          de: "Sänger und Politiker Sonny Bono starb am 5. Januar 1998 bei welcher Aktivität?",
          nl: "Zanger en politicus Sonny Bono stierf op 5 januari 1998 tijdens welke activiteit?"
        },
        options: [
          { en: "Flying", es: "Volar", de: "Fliegen", nl: "Vliegen" },
          { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Driving", es: "Conducir", de: "Autofahren", nl: "Autorijden" },
          { en: "Skiing", es: "Esquiar", de: "Skifahren", nl: "Skiën" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Sonny Bono died in a skiing accident at Heavenly Ski Resort in Nevada. He first gained fame as part of the pop duo Sonny & Cher in the 1960s with hits like 'I Got You Babe'. After his entertainment career, he successfully transitioned to politics, serving as mayor of Palm Springs and later as a U.S. Congressman.",
          es: "Sonny Bono murió en un accidente de esquí en Heavenly Ski Resort en Nevada. Primero ganó fama como parte del dúo pop Sonny & Cher en la década de 1960 con éxitos como 'I Got You Babe'. Después de su carrera en el entretenimiento, pasó con éxito a la política, sirviendo como alcalde de Palm Springs y luego como congresista de EE.UU.",
          de: "Sonny Bono starb bei einem Skiunfall im Heavenly Ski Resort in Nevada. Er wurde erstmals als Teil des Pop-Duos Sonny & Cher in den 1960er Jahren mit Hits wie 'I Got You Babe' bekannt. Nach seiner Unterhaltungskarriere wechselte er erfolgreich in die Politik und diente als Bürgermeister von Palm Springs und später als US-Kongressabgeordneter.",
          nl: "Sonny Bono stierf bij een ski-ongeluk in Heavenly Ski Resort in Nevada. Hij werd eerst beroemd als onderdeel van het popduo Sonny & Cher in de jaren 1960 met hits zoals 'I Got You Babe'. Na zijn entertainmentcarrière stapte hij succesvol over naar de politiek en diende als burgemeester van Palm Springs en later als Amerikaans congreslid."
        }
      },
      {
        question: {
          en: "On January 5, 1757, which French king survived an assassination attempt?",
          es: "El 5 de enero de 1757, ¿qué rey francés sobrevivió a un intento de asesinato?",
          de: "Am 5. Januar 1757 überlebte welcher französische König ein Attentat?",
          nl: "Op 5 januari 1757 overleefde welke Franse koning een moordaanslag?"
        },
        options: [
          { en: "Louis XVI", es: "Luis XVI", de: "Ludwig XVI.", nl: "Lodewijk XVI" },
          { en: "Louis XV", es: "Luis XV", de: "Ludwig XV.", nl: "Lodewijk XV" },
          { en: "Louis XIV", es: "Luis XIV", de: "Ludwig XIV.", nl: "Lodewijk XIV" },
          { en: "Napoleon", es: "Napoleón", de: "Napoleon", nl: "Napoleon" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Robert-François Damiens attacked King Louis XV with a small knife at Versailles, causing only a minor wound. The assassination attempt failed, but Damiens was executed in one of history's most brutal public executions. This event reflected growing discontent with the French monarchy that would eventually culminate in the French Revolution decades later.",
          es: "Robert-François Damiens atacó al rey Luis XV con un pequeño cuchillo en Versalles, causando solo una herida menor. El intento de asesinato falló, pero Damiens fue ejecutado en una de las ejecuciones públicas más brutales de la historia. Este evento reflejó el creciente descontento con la monarquía francesa que eventualmente culminaría en la Revolución Francesa décadas después.",
          de: "Robert-François Damiens griff König Ludwig XV. in Versailles mit einem kleinen Messer an und verursachte nur eine kleine Wunde. Das Attentat scheiterte, aber Damiens wurde in einer der brutalsten öffentlichen Hinrichtungen der Geschichte hingerichtet. Dieses Ereignis spiegelte die wachsende Unzufriedenheit mit der französischen Monarchie wider, die Jahrzehnte später in der Französischen Revolution gipfeln sollte.",
          nl: "Robert-François Damiens viel koning Lodewijk XV aan met een klein mes in Versailles, wat slechts een kleine wond veroorzaakte. De moordaanslag mislukte, maar Damiens werd geëxecuteerd in een van de meest brute openbare executies in de geschiedenis. Deze gebeurtenis weerspiegelde de groeiende ontevredenheid met de Franse monarchie die uiteindelijk decennia later zou culmineren in de Franse Revolutie."
        }
      }
    ],

    // Day 6 - January 6th: Epiphany, Joan of Arc & New Mexico Statehood
    day6: [
      {
        question: {
          en: "On January 6, 1412, which French heroine and saint was believed to have been born?",
          es: "El 6 de enero de 1412, ¿qué heroína y santa francesa se cree que nació?",
          de: "Am 6. Januar 1412 wurde welche französische Heldin und Heilige vermutlich geboren?",
          nl: "Op 6 januari 1412 werd welke Franse heldin en heilige vermoedelijk geboren?"
        },
        options: [
          { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
          { en: "Coco Chanel", es: "Coco Chanel", de: "Coco Chanel", nl: "Coco Chanel" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Joan of Arc was a French peasant girl who claimed divine guidance and led the French army to important victories during the Hundred Years' War. At age 19, she was captured by the English, tried for heresy, and burned at the stake in 1431. She was canonized as a saint in 1920 and remains one of France's most beloved national heroes.",
          es: "Juana de Arco fue una campesina francesa que afirmó tener guía divina y lideró al ejército francés a importantes victorias durante la Guerra de los Cien Años. A los 19 años, fue capturada por los ingleses, juzgada por herejía y quemada en la hoguera en 1431. Fue canonizada como santa en 1920 y sigue siendo una de las heroínas nacionales más queridas de Francia.",
          de: "Jeanne d'Arc war ein französisches Bauernmädchen, das behauptete, göttliche Führung zu haben, und die französische Armee zu wichtigen Siegen im Hundertjährigen Krieg führte. Mit 19 Jahren wurde sie von den Engländern gefangen genommen, wegen Ketzerei vor Gericht gestellt und 1431 auf dem Scheiterhaufen verbrannt. Sie wurde 1920 heiliggesprochen und bleibt eine der beliebtesten Nationalhelden Frankreichs.",
          nl: "Jeanne d'Arc was een Frans boerenmeisje dat beweerde goddelijke leiding te hebben en het Franse leger leidde naar belangrijke overwinningen tijdens de Honderdjarige Oorlog. Op 19-jarige leeftijd werd ze gevangen genomen door de Engelsen, berecht voor ketterij en verbrand op de brandstapel in 1431. Ze werd heilig verklaard in 1920 en blijft een van Frankrijk's meest geliefde nationale helden."
        }
      },
      {
        question: {
          en: "Which U.S. state was admitted as the 47th state on January 6, 1912?",
          es: "¿Qué estado de EE.UU. fue admitido como el estado número 47 el 6 de enero de 1912?",
          de: "Welcher US-Bundesstaat wurde am 6. Januar 1912 als 47. Bundesstaat aufgenommen?",
          nl: "Welke Amerikaanse staat werd toegelaten als de 47e staat op 6 januari 1912?"
        },
        options: [
          { en: "New Mexico", es: "Nuevo México", de: "New Mexico", nl: "New Mexico" },
          { en: "Oklahoma", es: "Oklahoma", de: "Oklahoma", nl: "Oklahoma" },
          { en: "Alaska", es: "Alaska", de: "Alaska", nl: "Alaska" },
          { en: "Arizona", es: "Arizona", de: "Arizona", nl: "Arizona" }
        ],
        correctIndex: 0,
        explanation: {
          en: "New Mexico became the 47th U.S. state on January 6, 1912, after being a U.S. territory for 62 years. Arizona followed just one month later as the 48th state. New Mexico's name comes from the Spanish 'Nuevo México' and it's known for its rich Native American and Hispanic heritage, as well as its role in nuclear weapons development at Los Alamos.",
          es: "Nuevo México se convirtió en el estado número 47 de Estados Unidos el 6 de enero de 1912, después de ser territorio estadounidense durante 62 años. Arizona siguió solo un mes después como el estado número 48. El nombre de Nuevo México proviene del español 'Nuevo México' y es conocido por su rica herencia nativa americana e hispana, así como por su papel en el desarrollo de armas nucleares en Los Alamos.",
          de: "New Mexico wurde am 6. Januar 1912 der 47. US-Bundesstaat, nachdem es 62 Jahre lang ein US-Territorium gewesen war. Arizona folgte nur einen Monat später als 48. Bundesstaat. New Mexicos Name stammt vom spanischen 'Nuevo México' und es ist bekannt für sein reiches indianisches und hispanisches Erbe sowie seine Rolle in der Entwicklung von Atomwaffen in Los Alamos.",
          nl: "New Mexico werd de 47e Amerikaanse staat op 6 januari 1912, na 62 jaar een Amerikaans territorium te zijn geweest. Arizona volgde slechts een maand later als de 48e staat. De naam van New Mexico komt van het Spaanse 'Nuevo México' en het staat bekend om zijn rijke inheemse Amerikaanse en Spaanse erfgoed, evenals zijn rol in de ontwikkeling van kernwapens in Los Alamos."
        }
      },
      {
        question: {
          en: "Which U.S. President Theodore Roosevelt died on January 6, 1919, at what age?",
          es: "¿Qué presidente de EE.UU., Theodore Roosevelt, murió el 6 de enero de 1919 a qué edad?",
          de: "Welcher US-Präsident Theodore Roosevelt starb am 6. Januar 1919 im Alter von wie vielen Jahren?",
          nl: "Welke Amerikaanse president Theodore Roosevelt stierf op 6 januari 1919 op welke leeftijd?"
        },
        options: [
          { en: "65 years old", es: "65 años", de: "65 Jahre", nl: "65 jaar" },
          { en: "55 years old", es: "55 años", de: "55 Jahre", nl: "55 jaar" },
          { en: "70 years old", es: "70 años", de: "70 Jahre", nl: "70 jaar" },
          { en: "60 years old", es: "60 años", de: "60 Jahre", nl: "60 jaar" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Theodore Roosevelt was the 26th U.S. President and the youngest person ever to assume the presidency at age 42. He was known for his energetic personality, trust-busting policies, and conservation efforts. Roosevelt won the Nobel Peace Prize in 1906 for mediating the end of the Russo-Japanese War and died peacefully in his sleep at his home in Sagamore Hill.",
          es: "Theodore Roosevelt fue el 26º presidente de Estados Unidos y la persona más joven en asumir la presidencia a los 42 años. Era conocido por su personalidad enérgica, políticas antimonopolio y esfuerzos de conservación. Roosevelt ganó el Premio Nobel de la Paz en 1906 por mediar el fin de la Guerra Ruso-Japonesa y murió pacíficamente mientras dormía en su casa en Sagamore Hill.",
          de: "Theodore Roosevelt war der 26. US-Präsident und die jüngste Person, die jemals im Alter von 42 Jahren das Präsidentenamt übernahm. Er war bekannt für seine energiegeladene Persönlichkeit, seine kartellfeindlichen Maßnahmen und seine Naturschutzbemühungen. Roosevelt erhielt 1906 den Friedensnobelpreis für die Vermittlung des Endes des Russisch-Japanischen Krieges und starb friedlich im Schlaf in seinem Haus in Sagamore Hill.",
          nl: "Theodore Roosevelt was de 26e Amerikaanse president en de jongste persoon ooit die het presidentschap op zich nam op 42-jarige leeftijd. Hij stond bekend om zijn energieke persoonlijkheid, antitrustbeleid en natuurbeschermingsinspanningen. Roosevelt won de Nobelprijs voor de Vrede in 1906 voor het bemiddelen van het einde van de Russisch-Japanse Oorlog en stierf vredig in zijn slaap in zijn huis in Sagamore Hill."
        }
      },
      {
        question: {
          en: "On January 6, 1941, which U.S. President delivered the famous 'Four Freedoms' speech?",
          es: "El 6 de enero de 1941, ¿qué presidente de EE.UU. pronunció el famoso discurso de las 'Cuatro Libertades'?",
          de: "Am 6. Januar 1941 hielt welcher US-Präsident die berühmte 'Vier Freiheiten'-Rede?",
          nl: "Op 6 januari 1941 hield welke Amerikaanse president de beroemde 'Vier Vrijheden'-toespraak?"
        },
        options: [
          { en: "Dwight Eisenhower", es: "Dwight Eisenhower", de: "Dwight Eisenhower", nl: "Dwight Eisenhower" },
          { en: "John F. Kennedy", es: "John F. Kennedy", de: "John F. Kennedy", nl: "John F. Kennedy" },
          { en: "Harry Truman", es: "Harry Truman", de: "Harry Truman", nl: "Harry Truman" },
          { en: "Franklin D. Roosevelt", es: "Franklin D. Roosevelt", de: "Franklin D. Roosevelt", nl: "Franklin D. Roosevelt" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Four Freedoms speech articulated fundamental rights that people everywhere should enjoy: freedom of speech, freedom of worship, freedom from want, and freedom from fear. This speech helped shape Allied goals during World War II and later influenced the Universal Declaration of Human Rights. It was delivered as part of FDR's State of the Union address to Congress.",
          es: "El discurso de las Cuatro Libertades articuló derechos fundamentales que las personas en todas partes deberían disfrutar: libertad de expresión, libertad de culto, libertad de necesidad y libertad del miedo. Este discurso ayudó a dar forma a los objetivos aliados durante la Segunda Guerra Mundial e influyó posteriormente en la Declaración Universal de Derechos Humanos. Fue pronunciado como parte del discurso del Estado de la Unión de FDR al Congreso.",
          de: "Die Vier-Freiheiten-Rede formulierte grundlegende Rechte, die Menschen überall genießen sollten: Meinungsfreiheit, Religionsfreiheit, Freiheit von Not und Freiheit von Angst. Diese Rede half, die Ziele der Alliierten während des Zweiten Weltkriegs zu formen und beeinflusste später die Allgemeine Erklärung der Menschenrechte. Sie wurde als Teil von FDRs State of the Union-Rede vor dem Kongress gehalten.",
          nl: "De Vier Vrijheden-toespraak verwoordde fundamentele rechten die mensen overal zouden moeten genieten: vrijheid van meningsuiting, vrijheid van godsdienst, vrijheid van gebrek en vrijheid van angst. Deze toespraak hielp de doelstellingen van de Geallieerden tijdens de Tweede Wereldoorlog vorm te geven en beïnvloedde later de Universele Verklaring van de Rechten van de Mens. Het werd uitgesproken als onderdeel van FDR's State of the Union-toespraak tot het Congres."
        }
      },
      {
        question: {
          en: "January 6 is celebrated as Epiphany. What does this Christian feast traditionally commemorate?",
          es: "El 6 de enero se celebra la Epifanía. ¿Qué conmemora tradicionalmente esta fiesta cristiana?",
          de: "Der 6. Januar wird als Epiphanias gefeiert. Was wird an diesem christlichen Fest traditionell gefeiert?",
          nl: "6 januari wordt gevierd als Driekoningen. Wat wordt traditioneel herdacht met dit christelijk feest?"
        },
        options: [
          { en: "Last Supper", es: "Última Cena", de: "Letztes Abendmahl", nl: "Laatste Avondmaal" },
          { en: "Visit of the Magi", es: "Visita de los Reyes Magos", de: "Besuch der Weisen", nl: "Bezoek van de Wijzen" },
          { en: "Birth of Jesus", es: "Nacimiento de Jesús", de: "Geburt Jesu", nl: "Geboorte van Jezus" },
          { en: "Resurrection", es: "Resurrección", de: "Auferstehung", nl: "Opstanding" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Epiphany commemorates the visit of the three wise men (Magi) who brought gifts of gold, frankincense, and myrrh to the infant Jesus. In many countries, this day is more important than Christmas itself and is celebrated with special traditions like the Three Kings Day parade. The word 'epiphany' comes from Greek meaning 'manifestation' or 'revelation'.",
          es: "La Epifanía conmemora la visita de los tres reyes magos que trajeron regalos de oro, incienso y mirra al niño Jesús. En muchos países, este día es más importante que la Navidad misma y se celebra con tradiciones especiales como el desfile del Día de los Reyes Magos. La palabra 'epifanía' proviene del griego que significa 'manifestación' o 'revelación'.",
          de: "Epiphanias gedenkt des Besuchs der drei Weisen (Könige), die dem Jesuskind Geschenke aus Gold, Weihrauch und Myrrhe brachten. In vielen Ländern ist dieser Tag wichtiger als Weihnachten selbst und wird mit besonderen Traditionen wie der Dreikönigsparade gefeiert. Das Wort 'Epiphanias' kommt aus dem Griechischen und bedeutet 'Erscheinung' oder 'Offenbarung'.",
          nl: "Driekoningen herdenkt het bezoek van de drie wijzen (koningen) die geschenken van goud, wierook en mirre brachten aan het kindje Jezus. In veel landen is deze dag belangrijker dan Kerstmis zelf en wordt gevierd met speciale tradities zoals de Driekoningenparade. Het woord 'epifanie' komt uit het Grieks en betekent 'openbaring' of 'manifestatie'."
        }
      }
    ],

    // Day 7 - January 7th: Galileo's Moons & Nikola Tesla
    day7: [
      {
        question: {
          en: "On January 7, 1610, Galileo Galilei discovered four moons of which planet?",
          es: "El 7 de enero de 1610, Galileo Galilei descubrió cuatro lunas de qué planeta?",
          de: "Am 7. Januar 1610 entdeckte Galileo Galilei vier Monde welches Planeten?",
          nl: "Op 7 januari 1610 ontdekte Galileo Galilei vier manen van welke planeet?"
        },
        options: [
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Galileo discovered Jupiter's four largest moons: Io, Europa, Ganymede, and Callisto, now called the Galilean moons. This discovery provided crucial evidence supporting the heliocentric model of the solar system. It was the first time celestial bodies were observed orbiting something other than Earth, challenging the geocentric worldview of the time.",
          es: "Galileo descubrió las cuatro lunas más grandes de Júpiter: Io, Europa, Ganímedes y Calisto, ahora llamadas las lunas galileanas. Este descubrimiento proporcionó evidencia crucial que respaldaba el modelo heliocéntrico del sistema solar. Fue la primera vez que se observaron cuerpos celestes orbitando algo que no fuera la Tierra, desafiando la visión geocéntrica del mundo de la época.",
          de: "Galileo entdeckte die vier größten Monde des Jupiter: Io, Europa, Ganymed und Kallisto, die heute Galileische Monde genannt werden. Diese Entdeckung lieferte entscheidende Beweise für das heliozentrische Modell des Sonnensystems. Es war das erste Mal, dass Himmelskörper beobachtet wurden, die etwas anderes als die Erde umkreisten, was die geozentrische Weltanschauung der Zeit in Frage stellte.",
          nl: "Galileo ontdekte de vier grootste manen van Jupiter: Io, Europa, Ganymedes en Callisto, nu de Galileïsche manen genoemd. Deze ontdekking leverde cruciaal bewijs ter ondersteuning van het heliocentrische model van het zonnestelsel. Het was de eerste keer dat hemellichamen werden waargenomen die iets anders dan de aarde omcirkelden, wat het geocentrische wereldbeeld van die tijd uitdaagde."
        }
      },
      {
        question: {
          en: "Which famous inventor and electrical engineer died on January 7, 1943?",
          es: "¿Qué famoso inventor e ingeniero eléctrico murió el 7 de enero de 1943?",
          de: "Welcher berühmte Erfinder und Elektroingenieur starb am 7. Januar 1943?",
          nl: "Welke beroemde uitvinder en elektrotechnisch ingenieur stierf op 7 januari 1943?"
        },
        options: [
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Guglielmo Marconi", es: "Guglielmo Marconi", de: "Guglielmo Marconi", nl: "Guglielmo Marconi" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nikola Tesla was a Serbian-American inventor who made groundbreaking contributions to the development of alternating current (AC) electrical systems. He held nearly 300 patents and his innovations laid the foundation for modern wireless communication and electrical power distribution. Despite his genius, Tesla died alone and in debt in a New York hotel room at age 86.",
          es: "Nikola Tesla fue un inventor serbio-estadounidense que hizo contribuciones revolucionarias al desarrollo de sistemas eléctricos de corriente alterna (CA). Poseyó casi 300 patentes y sus innovaciones sentaron las bases para la comunicación inalámbrica moderna y la distribución de energía eléctrica. A pesar de su genialidad, Tesla murió solo y endeudado en una habitación de hotel en Nueva York a los 86 años.",
          de: "Nikola Tesla war ein serbisch-amerikanischer Erfinder, der bahnbrechende Beiträge zur Entwicklung von Wechselstrom-Systemen (AC) leistete. Er hielt fast 300 Patente und seine Innovationen legten den Grundstein für moderne drahtlose Kommunikation und elektrische Energieverteilung. Trotz seines Genies starb Tesla allein und verschuldet in einem New Yorker Hotelzimmer im Alter von 86 Jahren.",
          nl: "Nikola Tesla was een Servisch-Amerikaanse uitvinder die baanbrekende bijdragen leverde aan de ontwikkeling van wisselstroom (AC) elektrische systemen. Hij had bijna 300 patenten en zijn innovaties legden de basis voor moderne draadloze communicatie en elektrische energiedistributie. Ondanks zijn genialiteit stierf Tesla alleen en in schulden in een hotelkamer in New York op 86-jarige leeftijd."
        }
      },
      {
        question: {
          en: "On January 7, 1927, the first transatlantic telephone service was established between which two cities?",
          es: "El 7 de enero de 1927, se estableció el primer servicio telefónico transatlántico entre qué dos ciudades?",
          de: "Am 7. Januar 1927 wurde der erste transatlantische Telefondienst zwischen welchen zwei Städten eingerichtet?",
          nl: "Op 7 januari 1927 werd de eerste trans-Atlantische telefoondienst opgezet tussen welke twee steden?"
        },
        options: [
          { en: "Boston and Paris", es: "Boston y París", de: "Boston und Paris", nl: "Boston en Parijs" },
          { en: "Washington and Berlin", es: "Washington y Berlín", de: "Washington und Berlin", nl: "Washington en Berlijn" },
          { en: "Chicago and Rome", es: "Chicago y Roma", de: "Chicago und Rom", nl: "Chicago en Rome" },
          { en: "New York and London", es: "Nueva York y Londres", de: "New York und London", nl: "New York en Londen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The first commercial transatlantic telephone service connected New York and London using radio transmission technology. A three-minute call cost $75 (equivalent to over $1,200 today), making it accessible only to the wealthy and businesses. This breakthrough paved the way for global telecommunications and transformed international business and diplomacy.",
          es: "El primer servicio telefónico transatlántico comercial conectó Nueva York y Londres utilizando tecnología de transmisión por radio. Una llamada de tres minutos costaba $75 (equivalente a más de $1,200 hoy), haciéndola accesible solo para los ricos y las empresas. Este avance allanó el camino para las telecomunicaciones globales y transformó los negocios internacionales y la diplomacia.",
          de: "Der erste kommerzielle transatlantische Telefondienst verband New York und London mittels Funkübertragungstechnologie. Ein dreiminütiges Gespräch kostete 75 Dollar (heute über 1.200 Dollar), was es nur für Wohlhabende und Unternehmen zugänglich machte. Dieser Durchbruch ebnete den Weg für globale Telekommunikation und veränderte internationale Geschäfte und Diplomatie.",
          nl: "De eerste commerciële trans-Atlantische telefoondienst verbond New York en Londen met radiotransmissietechnologie. Een gesprek van drie minuten kostte $75 (equivalent aan meer dan $1.200 vandaag), waardoor het alleen toegankelijk was voor de rijken en bedrijven. Deze doorbraak effende het pad voor wereldwijde telecommunicatie en transformeerde internationale zaken en diplomatie."
        }
      },
      {
        question: {
          en: "On January 7, 2020, which virus was officially identified as the cause of COVID-19?",
          es: "El 7 de enero de 2020, ¿qué virus fue identificado oficialmente como la causa de COVID-19?",
          de: "Am 7. Januar 2020 wurde welches Virus offiziell als Ursache von COVID-19 identifiziert?",
          nl: "Op 7 januari 2020 werd welk virus officieel geïdentificeerd als de oorzaak van COVID-19?"
        },
        options: [
          { en: "SARS-CoV-1", es: "SARS-CoV-1", de: "SARS-CoV-1", nl: "SARS-CoV-1" },
          { en: "H1N1", es: "H1N1", de: "H1N1", nl: "H1N1" },
          { en: "MERS-CoV", es: "MERS-CoV", de: "MERS-CoV", nl: "MERS-CoV" },
          { en: "SARS-CoV-2", es: "SARS-CoV-2", de: "SARS-CoV-2", nl: "SARS-CoV-2" }
        ],
        correctIndex: 3,
        explanation: {
          en: "SARS-CoV-2 (Severe Acute Respiratory Syndrome Coronavirus 2) was identified by Chinese scientists as the cause of the COVID-19 pandemic. The virus belongs to the coronavirus family and shares genetic similarities with SARS-CoV-1. This identification was crucial for developing diagnostic tests, treatments, and vaccines that helped combat the global pandemic.",
          es: "SARS-CoV-2 (Síndrome Respiratorio Agudo Grave Coronavirus 2) fue identificado por científicos chinos como la causa de la pandemia de COVID-19. El virus pertenece a la familia de coronavirus y comparte similitudes genéticas con SARS-CoV-1. Esta identificación fue crucial para desarrollar pruebas diagnósticas, tratamientos y vacunas que ayudaron a combatir la pandemia global.",
          de: "SARS-CoV-2 (Schweres Akutes Respiratorisches Syndrom Coronavirus 2) wurde von chinesischen Wissenschaftlern als Ursache der COVID-19-Pandemie identifiziert. Das Virus gehört zur Coronavirus-Familie und weist genetische Ähnlichkeiten mit SARS-CoV-1 auf. Diese Identifizierung war entscheidend für die Entwicklung diagnostischer Tests, Behandlungen und Impfstoffe zur Bekämpfung der globalen Pandemie.",
          nl: "SARS-CoV-2 (Ernstig Acuut Respiratoir Syndroom Coronavirus 2) werd door Chinese wetenschappers geïdentificeerd als de oorzaak van de COVID-19-pandemie. Het virus behoort tot de coronavirusfamilie en vertoont genetische overeenkomsten met SARS-CoV-1. Deze identificatie was cruciaal voor het ontwikkelen van diagnostische tests, behandelingen en vaccins die hielpen bij de bestrijding van de wereldwijde pandemie."
        }
      },
      {
        question: {
          en: "Which Formula One racing driver was born on January 7, 1985, and has won 7 World Championships?",
          es: "¿Qué piloto de Fórmula Uno nació el 7 de enero de 1985 y ha ganado 7 Campeonatos Mundiales?",
          de: "Welcher Formel-1-Rennfahrer wurde am 7. Januar 1985 geboren und hat 7 Weltmeisterschaften gewonnen?",
          nl: "Welke Formule 1-coureur werd geboren op 7 januari 1985 en heeft 7 wereldkampioenschappen gewonnen?"
        },
        options: [
          { en: "Lewis Hamilton", es: "Lewis Hamilton", de: "Lewis Hamilton", nl: "Lewis Hamilton" },
          { en: "Michael Schumacher", es: "Michael Schumacher", de: "Michael Schumacher", nl: "Michael Schumacher" },
          { en: "Fernando Alonso", es: "Fernando Alonso", de: "Fernando Alonso", nl: "Fernando Alonso" },
          { en: "Sebastian Vettel", es: "Sebastian Vettel", de: "Sebastian Vettel", nl: "Sebastian Vettel" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Lewis Hamilton is a British racing driver who has won seven Formula One World Championships, equaling Michael Schumacher's record. He holds numerous F1 records including most pole positions and most podium finishes. Hamilton is also known for his advocacy for diversity, environmental causes, and social justice both within and beyond motorsport.",
          es: "Lewis Hamilton es un piloto británico que ha ganado siete Campeonatos Mundiales de Fórmula Uno, igualando el récord de Michael Schumacher. Posee numerosos récords de F1 incluyendo más pole positions y más podios. Hamilton también es conocido por su defensa de la diversidad, causas ambientales y justicia social tanto dentro como fuera del automovilismo.",
          de: "Lewis Hamilton ist ein britischer Rennfahrer, der sieben Formel-1-Weltmeisterschaften gewonnen hat und damit Michael Schumachers Rekord egalisiert. Er hält zahlreiche F1-Rekorde, darunter die meisten Pole-Positionen und Podiumsplatzierungen. Hamilton ist auch bekannt für sein Engagement für Vielfalt, Umweltthemen und soziale Gerechtigkeit sowohl innerhalb als auch außerhalb des Motorsports.",
          nl: "Lewis Hamilton is een Britse autocoureur die zeven Formule 1-wereldkampioenschappen heeft gewonnen, waarmee hij het record van Michael Schumacher evenaart. Hij houdt talrijke F1-records waaronder de meeste poleposities en podiumplaatsen. Hamilton staat ook bekend om zijn belangenbehartiging voor diversiteit, milieukwesties en sociale rechtvaardigheid zowel binnen als buiten de motorsport."
        }
      }
    ],

    // Day 8 - January 8th: Elvis Presley & Stephen Hawking
    day8: [
      {
        question: {
          en: "Which music legend known as the 'King of Rock and Roll' was born on January 8, 1935?",
          es: "¿Qué leyenda de la música conocida como el 'Rey del Rock and Roll' nació el 8 de enero de 1935?",
          de: "Welche Musiklegende, bekannt als 'King of Rock and Roll', wurde am 8. Januar 1935 geboren?",
          nl: "Welke muzieklegende bekend als de 'King of Rock and Roll' werd geboren op 8 januari 1935?"
        },
        options: [
          { en: "Chuck Berry", es: "Chuck Berry", de: "Chuck Berry", nl: "Chuck Berry" },
          { en: "Little Richard", es: "Little Richard", de: "Little Richard", nl: "Little Richard" },
          { en: "Jerry Lee Lewis", es: "Jerry Lee Lewis", de: "Jerry Lee Lewis", nl: "Jerry Lee Lewis" },
          { en: "Elvis Presley", es: "Elvis Presley", de: "Elvis Presley", nl: "Elvis Presley" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Elvis Presley revolutionized popular music by bringing rock and roll into the mainstream in the 1950s. With his distinctive voice, energetic performances, and charismatic style, he became one of the best-selling solo music artists of all time. His cultural impact extended beyond music, influencing fashion, film, and popular culture for generations.",
          es: "Elvis Presley revolucionó la música popular al traer el rock and roll a la corriente principal en la década de 1950. Con su voz distintiva, actuaciones energéticas y estilo carismático, se convirtió en uno de los artistas musicales solistas más vendidos de todos los tiempos. Su impacto cultural se extendió más allá de la música, influyendo en la moda, el cine y la cultura popular durante generaciones.",
          de: "Elvis Presley revolutionierte die Popmusik, indem er den Rock'n'Roll in den 1950er Jahren in den Mainstream brachte. Mit seiner unverwechselbaren Stimme, energiegeladenen Auftritten und charismatischen Stil wurde er einer der meistverkauften Solo-Musikkünstler aller Zeiten. Sein kultureller Einfluss ging über die Musik hinaus und beeinflusste Mode, Film und Populärkultur über Generationen hinweg.",
          nl: "Elvis Presley revolutioneerde de populaire muziek door rock-'n-roll in de jaren 1950 mainstream te maken. Met zijn onderscheidende stem, energieke optredens en charismatische stijl werd hij een van de best verkopende solo muziekartiesten aller tijden. Zijn culturele impact reikte verder dan muziek en beïnvloedde mode, film en populaire cultuur gedurende generaties."
        }
      },
      {
        question: {
          en: "Which famous physicist who studied black holes was born on January 8, 1942?",
          es: "¿Qué famoso físico que estudió los agujeros negros nació el 8 de enero de 1942?",
          de: "Welcher berühmte Physiker, der schwarze Löcher studierte, wurde am 8. Januar 1942 geboren?",
          nl: "Welke beroemde fysicus die zwarte gaten bestudeerde, werd geboren op 8 januari 1942?"
        },
        options: [
          { en: "Richard Feynman", es: "Richard Feynman", de: "Richard Feynman", nl: "Richard Feynman" },
          { en: "Neil deGrasse Tyson", es: "Neil deGrasse Tyson", de: "Neil deGrasse Tyson", nl: "Neil deGrasse Tyson" },
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Stephen Hawking made groundbreaking contributions to cosmology and quantum gravity, particularly regarding black holes and the nature of the universe. Despite being diagnosed with ALS at age 21 and given only years to live, he survived for over 50 more years. His book 'A Brief History of Time' became a bestseller, making complex physics accessible to millions.",
          es: "Stephen Hawking hizo contribuciones revolucionarias a la cosmología y la gravedad cuántica, particularmente sobre los agujeros negros y la naturaleza del universo. A pesar de ser diagnosticado con ELA a los 21 años y recibir solo años de vida, sobrevivió más de 50 años. Su libro 'Breve historia del tiempo' se convirtió en un bestseller, haciendo accesible la física compleja a millones.",
          de: "Stephen Hawking leistete bahnbrechende Beiträge zur Kosmologie und Quantengravitation, insbesondere zu schwarzen Löchern und der Natur des Universums. Obwohl er im Alter von 21 Jahren mit ALS diagnostiziert wurde und ihm nur wenige Jahre zu leben gegeben wurden, überlebte er über 50 weitere Jahre. Sein Buch 'Eine kurze Geschichte der Zeit' wurde ein Bestseller und machte komplexe Physik für Millionen zugänglich.",
          nl: "Stephen Hawking leverde baanbrekende bijdragen aan kosmologie en kwantumzwaartekracht, met name over zwarte gaten en de aard van het universum. Ondanks dat hij op 21-jarige leeftijd met ALS werd gediagnosticeerd en slechts enkele jaren te leven kreeg, overleefde hij meer dan 50 jaar. Zijn boek 'Het heelal' werd een bestseller en maakte complexe fysica toegankelijk voor miljoenen."
        }
      },
      {
        question: {
          en: "On January 8, 1790, who delivered the first State of the Union address?",
          es: "El 8 de enero de 1790, ¿quién pronunció el primer discurso sobre el Estado de la Unión?",
          de: "Am 8. Januar 1790 hielt wer die erste State of the Union-Rede?",
          nl: "Op 8 januari 1790 hield wie de eerste State of the Union-toespraak?"
        },
        options: [
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" }
        ],
        correctIndex: 1,
        explanation: {
          en: "George Washington, the first U.S. President, delivered the inaugural State of the Union address in New York City, then the nation's capital. The speech was much shorter than modern versions, lasting only about 10 minutes. This constitutional requirement has evolved into an annual tradition where the president reports on the nation's condition and outlines legislative priorities.",
          es: "George Washington, el primer presidente de EE.UU., pronunció el discurso inaugural del Estado de la Unión en la ciudad de Nueva York, entonces capital de la nación. El discurso fue mucho más corto que las versiones modernas, durando solo unos 10 minutos. Este requisito constitucional ha evolucionado en una tradición anual donde el presidente informa sobre la condición de la nación y describe las prioridades legislativas.",
          de: "George Washington, der erste US-Präsident, hielt die erste State of the Union-Rede in New York City, damals der Hauptstadt der Nation. Die Rede war viel kürzer als moderne Versionen und dauerte nur etwa 10 Minuten. Diese verfassungsmäßige Anforderung hat sich zu einer jährlichen Tradition entwickelt, bei der der Präsident über den Zustand der Nation berichtet und gesetzgeberische Prioritäten darlegt.",
          nl: "George Washington, de eerste Amerikaanse president, hield de inaugurele State of the Union-toespraak in New York City, toen de hoofdstad van de natie. De toespraak was veel korter dan moderne versies en duurde slechts ongeveer 10 minuten. Deze grondwettelijke vereiste is geëvolueerd tot een jaarlijkse traditie waarbij de president verslag doet over de toestand van de natie en wetgevende prioriteiten schetst."
        }
      },
      {
        question: {
          en: "On January 8, 1835, the United States achieved what financial milestone for the only time in history?",
          es: "El 8 de enero de 1835, Estados Unidos logró qué hito financiero por única vez en la historia?",
          de: "Am 8. Januar 1835 erreichten die Vereinigten Staaten welchen finanziellen Meilenstein zum einzigen Mal in der Geschichte?",
          nl: "Op 8 januari 1835 bereikte de Verenigde Staten welke financiële mijlpaal voor de enige keer in de geschiedenis?"
        },
        options: [
          { en: "Zero national debt", es: "Deuda nacional cero", de: "Null Staatsverschuldung", nl: "Nul staatsschuld" },
          { en: "Trillion dollar economy", es: "Economía de un billón de dólares", de: "Billion-Dollar-Wirtschaft", nl: "Biljoen dollar economie" },
          { en: "Gold standard adoption", es: "Adopción del patrón oro", de: "Goldstandard-Einführung", nl: "Gouden standaard invoering" },
          { en: "Balanced budget", es: "Presupuesto equilibrado", de: "Ausgeglichener Haushalt", nl: "Gebalanceerde begroting" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Under President Andrew Jackson's administration, the United States completely paid off its national debt for the first and only time in history. Jackson was strongly opposed to federal debt and aggressively paid down borrowed money during his presidency. However, this debt-free status lasted only about a year before the country began borrowing again due to economic circumstances.",
          es: "Bajo la administración del presidente Andrew Jackson, Estados Unidos pagó completamente su deuda nacional por primera y única vez en la historia. Jackson se oponía firmemente a la deuda federal y pagó agresivamente el dinero prestado durante su presidencia. Sin embargo, este estatus libre de deuda duró solo alrededor de un año antes de que el país comenzara a pedir prestado nuevamente debido a circunstancias económicas.",
          de: "Unter Präsident Andrew Jacksons Regierung zahlten die Vereinigten Staaten ihre Staatsverschuldung zum ersten und einzigen Mal in der Geschichte vollständig ab. Jackson war stark gegen Bundesschulden und zahlte während seiner Präsidentschaft aggressiv geliehenes Geld zurück. Dieser schuldenfreie Status dauerte jedoch nur etwa ein Jahr, bevor das Land aufgrund wirtschaftlicher Umstände wieder Kredite aufnahm.",
          nl: "Onder de regering van president Andrew Jackson betaalden de Verenigde Staten hun staatsschuld volledig af voor de eerste en enige keer in de geschiedenis. Jackson was fel gekant tegen federale schulden en betaalde agressief geleend geld terug tijdens zijn presidentschap. Deze schuldenvrije status duurde echter slechts ongeveer een jaar voordat het land opnieuw begon te lenen vanwege economische omstandigheden."
        }
      },
      {
        question: {
          en: "On January 8, 1815, which general won the Battle of New Orleans in the War of 1812?",
          es: "El 8 de enero de 1815, ¿qué general ganó la Batalla de Nueva Orleans en la Guerra de 1812?",
          de: "Am 8. Januar 1815 gewann welcher General die Schlacht von New Orleans im Krieg von 1812?",
          nl: "Op 8 januari 1815 won welke generaal de Slag om New Orleans in de Oorlog van 1812?"
        },
        options: [
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Andrew Jackson", es: "Andrew Jackson", de: "Andrew Jackson", nl: "Andrew Jackson" },
          { en: "William Tecumseh Sherman", es: "William Tecumseh Sherman", de: "William Tecumseh Sherman", nl: "William Tecumseh Sherman" },
          { en: "Ulysses S. Grant", es: "Ulysses S. Grant", de: "Ulysses S. Grant", nl: "Ulysses S. Grant" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Andrew Jackson led American forces to a decisive victory against the British at the Battle of New Orleans, the final major battle of the War of 1812. Ironically, the battle was fought two weeks after the peace treaty had been signed in Europe, though news had not yet reached the combatants. This victory made Jackson a national hero and helped propel him to the presidency in 1829.",
          es: "Andrew Jackson lideró las fuerzas estadounidenses a una victoria decisiva contra los británicos en la Batalla de Nueva Orleans, la última batalla importante de la Guerra de 1812. Irónicamente, la batalla se libró dos semanas después de que se firmara el tratado de paz en Europa, aunque las noticias aún no habían llegado a los combatientes. Esta victoria convirtió a Jackson en un héroe nacional y ayudó a impulsarlo a la presidencia en 1829.",
          de: "Andrew Jackson führte die amerikanischen Streitkräfte zu einem entscheidenden Sieg gegen die Briten in der Schlacht von New Orleans, der letzten großen Schlacht des Krieges von 1812. Ironischerweise wurde die Schlacht zwei Wochen nach Unterzeichnung des Friedensvertrags in Europa ausgetragen, obwohl die Nachricht die Kämpfenden noch nicht erreicht hatte. Dieser Sieg machte Jackson zu einem Nationalhelden und half ihm 1829 ins Präsidentenamt.",
          nl: "Andrew Jackson leidde de Amerikaanse strijdkrachten naar een beslissende overwinning tegen de Britten in de Slag om New Orleans, de laatste grote slag van de Oorlog van 1812. Ironisch genoeg werd de slag twee weken na het ondertekenen van het vredesverdrag in Europa uitgevochten, hoewel het nieuws de strijdenden nog niet had bereikt. Deze overwinning maakte Jackson tot een nationale held en help hem in 1829 naar het presidentschap."
        }
      }
    ],

    // Day 9 - January 9th: iPhone Announcement & Richard Nixon
    day9: [
      {
        question: {
          en: "On January 9, 2007, Steve Jobs unveiled which revolutionary device at Macworld?",
          es: "El 9 de enero de 2007, Steve Jobs presentó qué dispositivo revolucionario en Macworld?",
          de: "Am 9. Januar 2007 enthüllte Steve Jobs welches revolutionäre Gerät auf der Macworld?",
          nl: "Op 9 januari 2007 onthulde Steve Jobs welk revolutionair apparaat op Macworld?"
        },
        options: [
          { en: "iPad", es: "iPad", de: "iPad", nl: "iPad" },
          { en: "Apple Watch", es: "Apple Watch", de: "Apple Watch", nl: "Apple Watch" },
          { en: "iPod", es: "iPod", de: "iPod", nl: "iPod" },
          { en: "iPhone", es: "iPhone", de: "iPhone", nl: "iPhone" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Steve Jobs introduced the iPhone by calling it 'three revolutionary products in one' - a widescreen iPod, a mobile phone, and an internet communicator. The iPhone fundamentally transformed the mobile phone industry and created the modern smartphone era. Its multi-touch interface and app ecosystem revolutionized how people interact with technology and access information.",
          es: "Steve Jobs presentó el iPhone llamándolo 'tres productos revolucionarios en uno': un iPod de pantalla ancha, un teléfono móvil y un comunicador de internet. El iPhone transformó fundamentalmente la industria de telefonía móvil y creó la era moderna de los smartphones. Su interfaz multitáctil y ecosistema de aplicaciones revolucionó cómo las personas interactúan con la tecnología y acceden a la información.",
          de: "Steve Jobs stellte das iPhone vor, indem er es als 'drei revolutionäre Produkte in einem' bezeichnete - einen Breitbild-iPod, ein Mobiltelefon und einen Internet-Kommunikator. Das iPhone veränderte die Mobiltelefonindustrie grundlegend und schuf die moderne Smartphone-Ära. Seine Multi-Touch-Oberfläche und das App-Ökosystem revolutionierten, wie Menschen mit Technologie interagieren und auf Informationen zugreifen.",
          nl: "Steve Jobs introduceerde de iPhone door het 'drie revolutionaire producten in één' te noemen - een breedbeeld iPod, een mobiele telefoon en een internetcommunicator. De iPhone transformeerde de mobiele telefoonindustrie fundamenteel en creëerde het moderne smartphone-tijdperk. Zijn multi-touch interface en app-ecosysteem revolutioneerden hoe mensen omgaan met technologie en toegang krijgen tot informatie."
        }
      },
      {
        question: {
          en: "Which U.S. President, born January 9, 1913, was the only president to resign from office?",
          es: "¿Qué presidente de EE.UU., nacido el 9 de enero de 1913, fue el único presidente en renunciar al cargo?",
          de: "Welcher US-Präsident, geboren am 9. Januar 1913, war der einzige Präsident, der zurücktrat?",
          nl: "Welke Amerikaanse president, geboren op 9 januari 1913, was de enige president die ontslag nam?"
        },
        options: [
          { en: "Jimmy Carter", es: "Jimmy Carter", de: "Jimmy Carter", nl: "Jimmy Carter" },
          { en: "Lyndon B. Johnson", es: "Lyndon B. Johnson", de: "Lyndon B. Johnson", nl: "Lyndon B. Johnson" },
          { en: "Gerald Ford", es: "Gerald Ford", de: "Gerald Ford", nl: "Gerald Ford" },
          { en: "Richard Nixon", es: "Richard Nixon", de: "Richard Nixon", nl: "Richard Nixon" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Richard Nixon resigned as the 37th U.S. President on August 9, 1974, due to the Watergate scandal. The scandal involved a break-in at Democratic National Committee headquarters and subsequent cover-up attempts. Nixon's resignation marked a constitutional crisis and demonstrated that no one, not even the president, is above the law in American democracy.",
          es: "Richard Nixon renunció como el 37º presidente de EE.UU. el 9 de agosto de 1974, debido al escándalo Watergate. El escándalo involucró un allanamiento en la sede del Comité Nacional Demócrata y subsecuentes intentos de encubrimiento. La renuncia de Nixon marcó una crisis constitucional y demostró que nadie, ni siquiera el presidente, está por encima de la ley en la democracia estadounidense.",
          de: "Richard Nixon trat am 9. August 1974 als 37. US-Präsident aufgrund des Watergate-Skandals zurück. Der Skandal betraf einen Einbruch in das Hauptquartier des Demokratischen Nationalkomitees und anschließende Vertuschungsversuche. Nixons Rücktritt markierte eine Verfassungskrise und zeigte, dass niemand, nicht einmal der Präsident, über dem Gesetz in der amerikanischen Demokratie steht.",
          nl: "Richard Nixon trad af als de 37e Amerikaanse president op 9 augustus 1974, vanwege het Watergate-schandaal. Het schandaal betrof een inbraak bij het hoofdkwartier van het Democratisch Nationaal Comité en daaropvolgende pogingen tot doofpotaffaire. Nixon's aftreden markeerde een constitutionele crisis en toonde aan dat niemand, zelfs niet de president, boven de wet staat in de Amerikaanse democratie."
        }
      },
      {
        question: {
          en: "On January 9, 1788, which state became the 5th to ratify the U.S. Constitution?",
          es: "El 9 de enero de 1788, ¿qué estado se convirtió en el quinto en ratificar la Constitución de EE.UU.?",
          de: "Am 9. Januar 1788 wurde welcher Staat der fünfte, der die US-Verfassung ratifizierte?",
          nl: "Op 9 januari 1788 werd welke staat de vijfde die de Amerikaanse Grondwet ratificeerde?"
        },
        options: [
          { en: "Pennsylvania", es: "Pensilvania", de: "Pennsylvania", nl: "Pennsylvania" },
          { en: "New York", es: "Nueva York", de: "New York", nl: "New York" },
          { en: "Massachusetts", es: "Massachusetts", de: "Massachusetts", nl: "Massachusetts" },
          { en: "Connecticut", es: "Connecticut", de: "Connecticut", nl: "Connecticut" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Connecticut ratified the U.S. Constitution by a vote of 128-40, becoming the fifth state to approve the document. The Constitution needed nine states to ratify it before taking effect. Connecticut's nickname 'The Constitution State' comes from its Fundamental Orders of 1638-39, which some historians consider the first written constitution in history.",
          es: "Connecticut ratificó la Constitución de EE.UU. por un voto de 128-40, convirtiéndose en el quinto estado en aprobar el documento. La Constitución necesitaba nueve estados para ratificarla antes de entrar en vigor. El apodo de Connecticut 'El Estado de la Constitución' proviene de sus Órdenes Fundamentales de 1638-39, que algunos historiadores consideran la primera constitución escrita de la historia.",
          de: "Connecticut ratifizierte die US-Verfassung mit 128 zu 40 Stimmen und wurde damit der fünfte Staat, der das Dokument genehmigte. Die Verfassung benötigte neun Staaten zur Ratifizierung, bevor sie in Kraft treten konnte. Connecticuts Spitzname 'The Constitution State' stammt von seinen Fundamental Orders von 1638-39, die einige Historiker als erste geschriebene Verfassung der Geschichte betrachten.",
          nl: "Connecticut ratificeerde de Amerikaanse Grondwet met een stem van 128-40, en werd daarmee de vijfde staat die het document goedkeurde. De Grondwet had negen staten nodig om het te ratificeren voordat het in werking trad. Connecticut's bijnaam 'The Constitution State' komt van zijn Fundamental Orders van 1638-39, die sommige historici als de eerste geschreven grondwet in de geschiedenis beschouwen."
        }
      },
      {
        question: {
          en: "On January 9, 1793, who became the first person to fly in a balloon in the United States?",
          es: "El 9 de enero de 1793, ¿quién se convirtió en la primera persona en volar en globo en Estados Unidos?",
          de: "Am 9. Januar 1793 wurde wer die erste Person, die in einem Ballon in den Vereinigten Staaten flog?",
          nl: "Op 9 januari 1793 werd wie de eerste persoon die in een ballon vloog in de Verenigde Staten?"
        },
        options: [
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" },
          { en: "Jean-Pierre Blanchard", es: "Jean-Pierre Blanchard", de: "Jean-Pierre Blanchard", nl: "Jean-Pierre Blanchard" },
          { en: "Wright Brothers", es: "Hermanos Wright", de: "Wright-Brüder", nl: "Gebroeders Wright" },
          { en: "Charles Lindbergh", es: "Charles Lindbergh", de: "Charles Lindbergh", nl: "Charles Lindbergh" }
        ],
        correctIndex: 1,
        explanation: {
          en: "French aeronaut Jean-Pierre Blanchard made the first balloon flight in the United States, launching from Philadelphia and landing in New Jersey. President George Washington was among the spectators who witnessed this historic event. Blanchard carried a letter from Washington, making it the first air mail delivery in American history.",
          es: "El aeronauta francés Jean-Pierre Blanchard realizó el primer vuelo en globo en Estados Unidos, despegando de Filadelfia y aterrizando en Nueva Jersey. El presidente George Washington fue uno de los espectadores que presenciaron este evento histórico. Blanchard llevaba una carta de Washington, convirtiéndola en la primera entrega de correo aéreo en la historia estadounidense.",
          de: "Der französische Aeronaut Jean-Pierre Blanchard machte den ersten Ballonflug in den Vereinigten Staaten und startete von Philadelphia aus mit Landung in New Jersey. Präsident George Washington gehörte zu den Zuschauern, die dieses historische Ereignis miterlebten. Blanchard trug einen Brief von Washington, was es zur ersten Luftpostlieferung in der amerikanischen Geschichte machte.",
          nl: "De Franse luchtvaartpionier Jean-Pierre Blanchard maakte de eerste ballonvlucht in de Verenigde Staten, vertrekkend vanuit Philadelphia en landend in New Jersey. President George Washington was een van de toeschouwers die dit historische evenement bijwoonde. Blanchard droeg een brief van Washington, waardoor het de eerste luchtpostbezorging in de Amerikaanse geschiedenis werd."
        }
      },
      {
        question: {
          en: "On January 9, 1960, construction began on which famous dam in Egypt?",
          es: "El 9 de enero de 1960, comenzó la construcción de qué famosa presa en Egipto?",
          de: "Am 9. Januar 1960 begann der Bau welcher berühmten Talsperre in Ägypten?",
          nl: "Op 9 januari 1960 begon de bouw van welke beroemde dam in Egypte?"
        },
        options: [
          { en: "Three Gorges Dam", es: "Presa de las Tres Gargantas", de: "Drei-Schluchten-Staudamm", nl: "Drieklovendam" },
          { en: "Grand Coulee Dam", es: "Presa Grand Coulee", de: "Grand-Coulee-Staudamm", nl: "Grand Coulee Dam" },
          { en: "Hoover Dam", es: "Presa Hoover", de: "Hoover-Staudamm", nl: "Hoover Dam" },
          { en: "Aswan High Dam", es: "Presa Alta de Asuán", de: "Assuan-Staudamm", nl: "Aswan-stuwdam" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Aswan High Dam was constructed on the Nile River with Soviet assistance and completed in 1970. It controls flooding, provides irrigation water, and generates hydroelectric power for Egypt. While the dam brought economic benefits, it also caused the relocation of thousands of people and required the rescue and relocation of ancient monuments like Abu Simbel temples.",
          es: "La Presa Alta de Asuán fue construida en el río Nilo con asistencia soviética y completada en 1970. Controla las inundaciones, proporciona agua de riego y genera energía hidroeléctrica para Egipto. Aunque la presa trajo beneficios económicos, también causó la reubicación de miles de personas y requirió el rescate y traslado de monumentos antiguos como los templos de Abu Simbel.",
          de: "Der Assuan-Staudamm wurde mit sowjetischer Hilfe am Nil gebaut und 1970 fertiggestellt. Er kontrolliert Überschwemmungen, liefert Bewässerungswasser und erzeugt Wasserkraft für Ägypten. Während der Damm wirtschaftliche Vorteile brachte, verursachte er auch die Umsiedlung Tausender Menschen und erforderte die Rettung und Verlegung antiker Monumente wie der Abu-Simbel-Tempel.",
          nl: "De Aswan-stuwdam werd gebouwd aan de Nijl met Sovjet-hulp en voltooid in 1970. Het controleert overstromingen, levert irrigatiewater en genereert waterkracht voor Egypte. Hoewel de dam economische voordelen bracht, veroorzaakte het ook de verplaatsing van duizenden mensen en vereiste het de redding en verplaatsing van oude monumenten zoals de Abu Simbel tempels."
        }
      }
    ],

    // Day 10 - January 10th: Common Sense & United Nations
    day10: [
      {
        question: {
          en: "On January 10, 1776, who published the influential pamphlet 'Common Sense'?",
          es: "El 10 de enero de 1776, ¿quién publicó el influyente panfleto 'Sentido Común'?",
          de: "Am 10. Januar 1776 veröffentlichte wer das einflussreiche Pamphlet 'Common Sense'?",
          nl: "Op 10 januari 1776 publiceerde wie het invloedrijke pamflet 'Common Sense'?"
        },
        options: [
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Thomas Paine", es: "Thomas Paine", de: "Thomas Paine", nl: "Thomas Paine" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Thomas Paine's 'Common Sense' was a powerful 47-page pamphlet that argued for American independence from Britain in plain language accessible to ordinary people. It sold over 500,000 copies in its first year, reaching a massive audience in the colonies. The pamphlet helped turn public opinion toward independence and influenced the Declaration of Independence six months later.",
          es: "El 'Sentido Común' de Thomas Paine fue un poderoso panfleto de 47 páginas que argumentaba a favor de la independencia estadounidense de Gran Bretaña en un lenguaje sencillo accesible para la gente común. Vendió más de 500,000 copias en su primer año, alcanzando una audiencia masiva en las colonias. El panfleto ayudó a cambiar la opinión pública hacia la independencia e influyó en la Declaración de Independencia seis meses después.",
          de: "Thomas Paines 'Common Sense' war ein kraftvolles 47-seitiges Pamphlet, das in einfacher Sprache für die amerikanische Unabhängigkeit von Großbritannien argumentierte und für gewöhnliche Menschen zugänglich war. Es verkaufte sich im ersten Jahr über 500.000 Mal und erreichte ein massives Publikum in den Kolonien. Das Pamphlet half, die öffentliche Meinung zur Unabhängigkeit zu wenden und beeinflusste die Unabhängigkeitserklärung sechs Monate später.",
          nl: "Thomas Paine's 'Common Sense' was een krachtig pamflet van 47 pagina's dat pleitte voor Amerikaanse onafhankelijkheid van Groot-Brittannië in eenvoudige taal die toegankelijk was voor gewone mensen. Het verkocht meer dan 500.000 exemplaren in het eerste jaar en bereikte een enorm publiek in de koloniën. Het pamflet hielp de publieke opinie richting onafhankelijkheid te keren en beïnvloedde de Onafhankelijkheidsverklaring zes maanden later."
        }
      },
      {
        question: {
          en: "In what year did the first United Nations General Assembly meet in London on January 10?",
          es: "¿En qué año se reunió la primera Asamblea General de las Naciones Unidas en Londres el 10 de enero?",
          de: "In welchem Jahr traf sich die erste UN-Generalversammlung am 10. Januar in London?",
          nl: "In welk jaar kwam de eerste Algemene Vergadering van de Verenigde Naties bijeen in Londen op 10 januari?"
        },
        options: [
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1948", es: "1948", de: "1948", nl: "1948" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1947", es: "1947", de: "1947", nl: "1947" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first United Nations General Assembly convened in London with representatives from 51 founding member nations. This marked the official beginning of the UN's work to maintain international peace and security after World War II. The UN Charter had been signed in San Francisco in June 1945, but this was the first gathering of the General Assembly.",
          es: "La primera Asamblea General de las Naciones Unidas se reunió en Londres con representantes de 51 naciones miembros fundadoras. Esto marcó el comienzo oficial del trabajo de la ONU para mantener la paz y seguridad internacionales después de la Segunda Guerra Mundial. La Carta de la ONU había sido firmada en San Francisco en junio de 1945, pero esta fue la primera reunión de la Asamblea General.",
          de: "Die erste UN-Generalversammlung tagte in London mit Vertretern von 51 Gründungsmitgliedsstaaten. Dies markierte den offiziellen Beginn der Arbeit der UN zur Aufrechterhaltung des internationalen Friedens und der Sicherheit nach dem Zweiten Weltkrieg. Die UN-Charta war im Juni 1945 in San Francisco unterzeichnet worden, aber dies war die erste Versammlung der Generalversammlung.",
          nl: "De eerste Algemene Vergadering van de Verenigde Naties kwam bijeen in Londen met vertegenwoordigers van 51 stichtende lidstaten. Dit markeerde het officiële begin van het werk van de VN om internationale vrede en veiligheid te handhaven na de Tweede Wereldoorlog. Het VN-Handvest was in juni 1945 in San Francisco ondertekend, maar dit was de eerste bijeenkomst van de Algemene Vergadering."
        }
      },
      {
        question: {
          en: "Which legendary boxer who became the oldest heavyweight champion was born on January 10, 1949?",
          es: "¿Qué boxeador legendario que se convirtió en el campeón de peso pesado más viejo nació el 10 de enero de 1949?",
          de: "Welcher legendäre Boxer, der der älteste Schwergewichtschampion wurde, wurde am 10. Januar 1949 geboren?",
          nl: "Welke legendarische bokser die de oudste zwaargewichtkampioen werd, werd geboren op 10 januari 1949?"
        },
        options: [
          { en: "Mike Tyson", es: "Mike Tyson", de: "Mike Tyson", nl: "Mike Tyson" },
          { en: "George Foreman", es: "George Foreman", de: "George Foreman", nl: "George Foreman" },
          { en: "Muhammad Ali", es: "Muhammad Ali", de: "Muhammad Ali", nl: "Muhammad Ali" },
          { en: "Evander Holyfield", es: "Evander Holyfield", de: "Evander Holyfield", nl: "Evander Holyfield" }
        ],
        correctIndex: 1,
        explanation: {
          en: "George Foreman won the heavyweight championship at age 45 in 1994, becoming the oldest boxer to win a major heavyweight title. He had first won the title 20 years earlier in 1974. After retiring from boxing for the second time, Foreman became a successful entrepreneur, most famously with the George Foreman Grill.",
          es: "George Foreman ganó el campeonato de peso pesado a los 45 años en 1994, convirtiéndose en el boxeador más viejo en ganar un título importante de peso pesado. Había ganado el título por primera vez 20 años antes en 1974. Después de retirarse del boxeo por segunda vez, Foreman se convirtió en un empresario exitoso, más famosamente con la parrilla George Foreman.",
          de: "George Foreman gewann 1994 im Alter von 45 Jahren die Schwergewichtsmeisterschaft und wurde damit der älteste Boxer, der einen großen Schwergewichtstitel gewann. Er hatte den Titel erstmals 20 Jahre zuvor 1974 gewonnen. Nach seinem zweiten Rücktritt vom Boxen wurde Foreman ein erfolgreicher Unternehmer, am bekanntesten mit dem George Foreman Grill.",
          nl: "George Foreman won het zwaargewichtkampioenschap op 45-jarige leeftijd in 1994 en werd daarmee de oudste bokser die een grote zwaargewichttitel won. Hij had de titel voor het eerst 20 jaar eerder in 1974 gewonnen. Na zijn tweede pensioen van het boksen werd Foreman een succesvol ondernemer, het beroemdst met de George Foreman Grill."
        }
      },
      {
        question: {
          en: "Who died on January 10, 1917, and was famous as a Wild West showman known as 'Buffalo Bill'?",
          es: "¿Quién murió el 10 de enero de 1917 y fue famoso como showman del Salvaje Oeste conocido como 'Buffalo Bill'?",
          de: "Wer starb am 10. Januar 1917 und war berühmt als Wild-West-Showman bekannt als 'Buffalo Bill'?",
          nl: "Wie stierf op 10 januari 1917 en was beroemd als Wild West showman bekend als 'Buffalo Bill'?"
        },
        options: [
          { en: "Jesse James", es: "Jesse James", de: "Jesse James", nl: "Jesse James" },
          { en: "Wild Bill Hickok", es: "Wild Bill Hickok", de: "Wild Bill Hickok", nl: "Wild Bill Hickok" },
          { en: "Wyatt Earp", es: "Wyatt Earp", de: "Wyatt Earp", nl: "Wyatt Earp" },
          { en: "William Cody", es: "William Cody", de: "William Cody", nl: "William Cody" }
        ],
        correctIndex: 3,
        explanation: {
          en: "William F. 'Buffalo Bill' Cody earned his nickname by hunting buffalo to feed railroad workers in the 1860s. He later became famous for his Wild West shows that toured America and Europe, featuring sharpshooting, horseback riding, and reenactments of frontier life. His shows helped mythologize the American West and made him one of the first global entertainment celebrities.",
          es: "William F. 'Buffalo Bill' Cody obtuvo su apodo cazando búfalos para alimentar a trabajadores del ferrocarril en la década de 1860. Más tarde se hizo famoso por sus espectáculos del Salvaje Oeste que recorrieron América y Europa, presentando tiro al blanco, equitación y recreaciones de la vida fronteriza. Sus espectáculos ayudaron a mitificar el Oeste estadounidense y lo convirtieron en una de las primeras celebridades globales del entretenimiento.",
          de: "William F. 'Buffalo Bill' Cody erhielt seinen Spitznamen, indem er in den 1860er Jahren Büffel jagte, um Eisenbahnarbeiter zu ernähren. Später wurde er durch seine Wild-West-Shows berühmt, die durch Amerika und Europa tourten und Scharfschießen, Reiten und Nachstellungen des Grenzlebens zeigten. Seine Shows halfen, den amerikanischen Westen zu mythologisieren und machten ihn zu einer der ersten globalen Unterhaltungsberühmtheiten.",
          nl: "William F. 'Buffalo Bill' Cody verdiende zijn bijnaam door buffels te jagen om spoorwegarbeiders te voeden in de jaren 1860. Later werd hij beroemd door zijn Wild West-shows die door Amerika en Europa toerden, met scherpschieten, paardrijden en recreaties van het pionierleven. Zijn shows hielpen het Amerikaanse Westen te mythologiseren en maakten hem tot een van de eerste wereldwijde entertainmentcelebriteiten."
        }
      },
      {
        question: {
          en: "On January 10, 2000, which two major companies announced a merger valued at $182 billion?",
          es: "El 10 de enero de 2000, ¿qué dos grandes empresas anunciaron una fusión valorada en 182 mil millones de dólares?",
          de: "Am 10. Januar 2000 kündigten welche zwei großen Unternehmen eine Fusion im Wert von 182 Milliarden Dollar an?",
          nl: "Op 10 januari 2000 kondigden welke twee grote bedrijven een fusie aan ter waarde van 182 miljard dollar?"
        },
        options: [
          { en: "Microsoft and Yahoo", es: "Microsoft y Yahoo", de: "Microsoft und Yahoo", nl: "Microsoft en Yahoo" },
          { en: "AOL and Time Warner", es: "AOL y Time Warner", de: "AOL und Time Warner", nl: "AOL en Time Warner" },
          { en: "Disney and Pixar", es: "Disney y Pixar", de: "Disney und Pixar", nl: "Disney en Pixar" },
          { en: "Google and YouTube", es: "Google y YouTube", de: "Google und YouTube", nl: "Google en YouTube" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The AOL-Time Warner merger was the largest corporate merger in history at the time, symbolizing the convergence of old and new media. However, it became one of the worst business deals ever, as AOL's dominance quickly faded with the rise of broadband internet. The companies split in 2009, with Time Warner spinning off AOL as a separate entity.",
          es: "La fusión AOL-Time Warner fue la mayor fusión corporativa de la historia en ese momento, simbolizando la convergencia de medios antiguos y nuevos. Sin embargo, se convirtió en uno de los peores negocios de la historia, ya que el dominio de AOL se desvaneció rápidamente con el auge del internet de banda ancha. Las compañías se separaron en 2009, con Time Warner escindiendo AOL como una entidad separada.",
          de: "Die AOL-Time-Warner-Fusion war zu dieser Zeit die größte Unternehmensfusion der Geschichte und symbolisierte die Konvergenz alter und neuer Medien. Sie wurde jedoch zu einem der schlechtesten Geschäfte aller Zeiten, da AOLs Dominanz mit dem Aufstieg des Breitband-Internets schnell verblasste. Die Unternehmen trennten sich 2009, wobei Time Warner AOL als separate Einheit ausgliederte.",
          nl: "De AOL-Time Warner fusie was de grootste bedrijfsfusie in de geschiedenis op dat moment en symboliseerde de convergentie van oude en nieuwe media. Het werd echter een van de slechtste zakelijke deals ooit, omdat de dominantie van AOL snel verdween met de opkomst van breedband internet. De bedrijven scheidden in 2009, waarbij Time Warner AOL afsplitste als een afzonderlijke entiteit."
        }
      }
    ],

    // Day 11 - January 11th: Amelia Earhart & Alexander Hamilton
    day11: [
      {
        question: {
          en: "In what year did Amelia Earhart complete the first solo flight from Hawaii to California on January 11?",
          es: "¿En qué año completó Amelia Earhart el primer vuelo en solitario de Hawái a California el 11 de enero?",
          de: "In welchem Jahr vollendete Amelia Earhart am 11. Januar den ersten Soloflug von Hawaii nach Kalifornien?",
          nl: "In welk jaar voltooide Amelia Earhart de eerste solovlucht van Hawaii naar Californië op 11 januari?"
        },
        options: [
          { en: "1928", es: "1928", de: "1928", nl: "1928" },
          { en: "1932", es: "1932", de: "1932", nl: "1932" },
          { en: "1935", es: "1935", de: "1935", nl: "1935" },
          { en: "1937", es: "1937", de: "1937", nl: "1937" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Amelia Earhart's solo flight from Honolulu to Oakland covered 2,408 miles in 18 hours, making her the first person to fly solo across the Pacific Ocean. This groundbreaking achievement demonstrated both her exceptional piloting skills and the advancing capabilities of aviation technology in the 1930s.",
          es: "El vuelo en solitario de Amelia Earhart desde Honolulu hasta Oakland cubrió 2,408 millas en 18 horas, convirtiéndola en la primera persona en volar sola a través del Océano Pacífico. Este logro innovador demostró tanto sus habilidades excepcionales de piloto como las capacidades avanzadas de la tecnología de aviación en la década de 1930.",
          de: "Amelia Earharts Soloflug von Honolulu nach Oakland umfasste 2.408 Meilen in 18 Stunden und machte sie zur ersten Person, die allein über den Pazifischen Ozean flog. Diese bahnbrechende Leistung demonstrierte sowohl ihre außergewöhnlichen Pilotenfähigkeiten als auch die fortschreitenden Fähigkeiten der Luftfahrttechnologie in den 1930er Jahren.",
          nl: "Amelia Earharts solovlucht van Honolulu naar Oakland bedroeg 2.408 mijl in 18 uur, waardoor zij de eerste persoon werd die solo over de Stille Oceaan vloog. Deze baanbrekende prestatie toonde zowel haar uitzonderlijke vliegvaardigheden als de voortschrijdende mogelijkheden van de luchtvaarttechnologie in de jaren 1930."
        }
      },
      {
        question: {
          en: "Which founding father was born on January 11, 1755, and later died in a duel with Aaron Burr?",
          es: "¿Qué padre fundador nació el 11 de enero de 1755 y más tarde murió en un duelo con Aaron Burr?",
          de: "Welcher Gründervater wurde am 11. Januar 1755 geboren und starb später in einem Duell mit Aaron Burr?",
          nl: "Welke grondlegger werd geboren op 11 januari 1755 en stierf later in een duel met Aaron Burr?"
        },
        options: [
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "James Madison", es: "James Madison", de: "James Madison", nl: "James Madison" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Alexander Hamilton", es: "Alexander Hamilton", de: "Alexander Hamilton", nl: "Alexander Hamilton" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Alexander Hamilton was a key architect of America's financial system and the first Secretary of the Treasury. His fatal duel with Vice President Aaron Burr on July 11, 1804, ended the life of one of the nation's most influential founding fathers. Hamilton's legacy includes establishing the U.S. banking system and authoring most of The Federalist Papers.",
          es: "Alexander Hamilton fue un arquitecto clave del sistema financiero de Estados Unidos y el primer Secretario del Tesoro. Su duelo fatal con el vicepresidente Aaron Burr el 11 de julio de 1804 terminó con la vida de uno de los padres fundadores más influyentes de la nación. El legado de Hamilton incluye el establecimiento del sistema bancario de EE.UU. y la autoría de la mayoría de los Documentos Federalistas.",
          de: "Alexander Hamilton war ein wichtiger Architekt des amerikanischen Finanzsystems und der erste Finanzminister. Sein tödliches Duell mit Vizepräsident Aaron Burr am 11. Juli 1804 beendete das Leben eines der einflussreichsten Gründerväter der Nation. Hamiltons Vermächtnis umfasst die Einrichtung des US-Bankensystems und die Verfasserschaft der meisten Federalist Papers.",
          nl: "Alexander Hamilton was een belangrijke architect van Amerika's financiële systeem en de eerste minister van Financiën. Zijn fatale duel met vicepresident Aaron Burr op 11 juli 1804 beëindigde het leven van een van de meest invloedrijke grondleggers van de natie. Hamiltons erfenis omvat het opzetten van het Amerikaanse banksysteem en het schrijven van de meeste Federalist Papers."
        }
      },
      {
        question: {
          en: "On January 11, 1964, the U.S. Surgeon General released a groundbreaking report linking what to cancer?",
          es: "El 11 de enero de 1964, el Cirujano General de EE.UU. publicó un informe revolucionario que relacionaba qué con el cáncer?",
          de: "Am 11. Januar 1964 veröffentlichte der US-Surgeon General einen bahnbrechenden Bericht, der was mit Krebs in Verbindung brachte?",
          nl: "Op 11 januari 1964 publiceerde de Amerikaanse Surgeon General een baanbrekend rapport dat wat aan kanker koppelde?"
        },
        options: [
          { en: "Processed food", es: "Alimentos procesados", de: "Verarbeitete Lebensmittel", nl: "Bewerkt voedsel" },
          { en: "Alcohol consumption", es: "Consumo de alcohol", de: "Alkoholkonsum", nl: "Alcoholgebruik" },
          { en: "Cigarette smoking", es: "Fumar cigarrillos", de: "Zigarettenrauchen", nl: "Sigaretten roken" },
          { en: "Air pollution", es: "Contaminación del aire", de: "Luftverschmutzung", nl: "Luchtvervuiling" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 1964 Surgeon General's Report concluded that cigarette smoking causes lung cancer and other serious diseases. This landmark report fundamentally changed public health policy and led to warning labels on cigarette packages, advertising restrictions, and widespread anti-smoking campaigns that have saved millions of lives.",
          es: "El Informe del Cirujano General de 1964 concluyó que fumar cigarrillos causa cáncer de pulmón y otras enfermedades graves. Este informe histórico cambió fundamentalmente la política de salud pública y llevó a etiquetas de advertencia en paquetes de cigarrillos, restricciones publicitarias y campañas antitabaco generalizadas que han salvado millones de vidas.",
          de: "Der Bericht des Surgeon General von 1964 kam zu dem Schluss, dass Zigarettenrauchen Lungenkrebs und andere schwere Krankheiten verursacht. Dieser wegweisende Bericht veränderte die öffentliche Gesundheitspolitik grundlegend und führte zu Warnhinweisen auf Zigarettenpackungen, Werbeeinschränkungen und umfassenden Anti-Raucher-Kampagnen, die Millionen von Leben gerettet haben.",
          nl: "Het rapport van de Surgeon General uit 1964 concludeerde dat sigaretten roken longkanker en andere ernstige ziekten veroorzaakt. Dit historische rapport veranderde het volksgezondheidsbeleid fundamenteel en leidde tot waarschuwingslabels op sigarettenpakjes, reclamebeperkingen en wijdverspreide anti-rookcampagnes die miljoenen levens hebben gered."
        }
      },
      {
        question: {
          en: "In what year did Major League Baseball adopt the designated hitter rule on January 11?",
          es: "¿En qué año adoptó la Major League Baseball la regla del bateador designado el 11 de enero?",
          de: "In welchem Jahr führte die Major League Baseball am 11. Januar die Designated-Hitter-Regel ein?",
          nl: "In welk jaar nam de Major League Baseball de designated hitter regel aan op 11 januari?"
        },
        options: [
          { en: "1970", es: "1970", de: "1970", nl: "1970" },
          { en: "1973", es: "1973", de: "1973", nl: "1973" },
          { en: "1980", es: "1980", de: "1980", nl: "1980" },
          { en: "1975", es: "1975", de: "1975", nl: "1975" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The designated hitter rule, adopted by the American League in 1973, allows a player to bat in place of the pitcher without playing a defensive position. This controversial rule aimed to increase offensive excitement and protect pitchers from injury. The National League didn't adopt it until 2022, maintaining baseball's traditional format for nearly 50 years longer.",
          es: "La regla del bateador designado, adoptada por la Liga Americana en 1973, permite que un jugador batee en lugar del lanzador sin jugar una posición defensiva. Esta regla controvertida tenía como objetivo aumentar la emoción ofensiva y proteger a los lanzadores de lesiones. La Liga Nacional no la adoptó hasta 2022, manteniendo el formato tradicional del béisbol durante casi 50 años más.",
          de: "Die Designated-Hitter-Regel, 1973 von der American League eingeführt, erlaubt einem Spieler, anstelle des Pitchers zu schlagen, ohne eine defensive Position zu spielen. Diese kontroverse Regel zielte darauf ab, die offensive Spannung zu erhöhen und Pitcher vor Verletzungen zu schützen. Die National League übernahm sie erst 2022, wodurch das traditionelle Baseballformat fast 50 Jahre länger beibehalten wurde.",
          nl: "De designated hitter regel, aangenomen door de American League in 1973, staat een speler toe om te slaan in plaats van de pitcher zonder een verdedigende positie te spelen. Deze controversiële regel was bedoeld om offensieve spanning te verhogen en pitchers te beschermen tegen blessures. De National League nam het pas in 2022 over, waarbij het traditionele honkbalformaat bijna 50 jaar langer behouden bleef."
        }
      },
      {
        question: {
          en: "Which famous mountaineer who first summited Mount Everest died on January 11, 2008?",
          es: "¿Qué famoso alpinista que alcanzó por primera vez la cumbre del Monte Everest murió el 11 de enero de 2008?",
          de: "Welcher berühmte Bergsteiger, der als Erster den Mount Everest bestieg, starb am 11. Januar 2008?",
          nl: "Welke beroemde bergbeklimmer die als eerste de top van de Mount Everest bereikte, stierf op 11 januari 2008?"
        },
        options: [
          { en: "Edmund Hillary", es: "Edmund Hillary", de: "Edmund Hillary", nl: "Edmund Hillary" },
          { en: "George Mallory", es: "George Mallory", de: "George Mallory", nl: "George Mallory" },
          { en: "Tenzing Norgay", es: "Tenzing Norgay", de: "Tenzing Norgay", nl: "Tenzing Norgay" },
          { en: "Reinhold Messner", es: "Reinhold Messner", de: "Reinhold Messner", nl: "Reinhold Messner" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Edmund Hillary and Tenzing Norgay became the first confirmed climbers to reach Mount Everest's summit on May 29, 1953. Hillary's achievement made him a global hero and inspired generations of mountaineers. Beyond climbing, he devoted his later life to humanitarian work in Nepal, building schools and hospitals for the Sherpa people.",
          es: "Edmund Hillary y Tenzing Norgay se convirtieron en los primeros escaladores confirmados en alcanzar la cumbre del Monte Everest el 29 de mayo de 1953. El logro de Hillary lo convirtió en un héroe mundial e inspiró a generaciones de alpinistas. Más allá de la escalada, dedicó su vida posterior al trabajo humanitario en Nepal, construyendo escuelas y hospitales para el pueblo sherpa.",
          de: "Edmund Hillary und Tenzing Norgay wurden am 29. Mai 1953 die ersten bestätigten Bergsteiger, die den Gipfel des Mount Everest erreichten. Hillarys Leistung machte ihn zu einem globalen Helden und inspirierte Generationen von Bergsteigern. Über das Klettern hinaus widmete er sein späteres Leben der humanitären Arbeit in Nepal und baute Schulen und Krankenhäuser für die Sherpa.",
          nl: "Edmund Hillary en Tenzing Norgay werden op 29 mei 1953 de eerste bevestigde klimmers die de top van de Mount Everest bereikten. Hillary's prestatie maakte hem tot een wereldheld en inspireerde generaties bergbeklimmers. Naast klimmen wijdde hij zijn latere leven aan humanitair werk in Nepal, met het bouwen van scholen en ziekenhuizen voor de Sherpa's."
        }
      }
    ],

    // Day 12 - January 12th: Haiti Earthquake & Super Bowl III
    day12: [
      {
        question: {
          en: "In what year did a devastating earthquake strike Haiti on January 12, killing over 200,000 people?",
          es: "¿En qué año un terremoto devastador golpeó Haití el 12 de enero, matando a más de 200,000 personas?",
          de: "In welchem Jahr traf am 12. Januar ein verheerendes Erdbeben Haiti und tötete über 200.000 Menschen?",
          nl: "In welk jaar trof een verwoestende aardbeving Haïti op 12 januari, waarbij meer dan 200.000 mensen omkwamen?"
        },
        options: [
          { en: "2010", es: "2010", de: "2010", nl: "2010" },
          { en: "2005", es: "2005", de: "2005", nl: "2005" },
          { en: "2012", es: "2012", de: "2012", nl: "2012" },
          { en: "2008", es: "2008", de: "2008", nl: "2008" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The magnitude 7.0 earthquake devastated Haiti's capital Port-au-Prince, destroying much of the city's infrastructure and leaving over 1.5 million people homeless. The disaster prompted one of the largest humanitarian relief efforts in history. Recovery efforts continue today, highlighting the ongoing challenges faced by developing nations in disaster preparedness and response.",
          es: "El terremoto de magnitud 7.0 devastó la capital de Haití, Puerto Príncipe, destruyendo gran parte de la infraestructura de la ciudad y dejando a más de 1.5 millones de personas sin hogar. El desastre provocó uno de los mayores esfuerzos de ayuda humanitaria de la historia. Los esfuerzos de recuperación continúan hoy, destacando los desafíos continuos que enfrentan las naciones en desarrollo en preparación y respuesta ante desastres.",
          de: "Das Erdbeben der Stärke 7,0 verwüstete Haitis Hauptstadt Port-au-Prince, zerstörte einen Großteil der Infrastruktur der Stadt und ließ über 1,5 Millionen Menschen obdachlos werden. Die Katastrophe löste eine der größten humanitären Hilfsaktionen der Geschichte aus. Die Wiederaufbauarbeiten dauern bis heute an und verdeutlichen die anhaltenden Herausforderungen, denen sich Entwicklungsländer bei der Katastrophenvorsorge und -reaktion gegenübersehen.",
          nl: "De aardbeving van magnitude 7.0 verwoestte Haïti's hoofdstad Port-au-Prince, vernietigde een groot deel van de infrastructuur van de stad en liet meer dan 1,5 miljoen mensen dakloos. De ramp leidde tot een van de grootste humanitaire hulpoperaties in de geschiedenis. Herstelwerkzaamheden gaan vandaag nog door, wat de voortdurende uitdagingen benadrukt waarmee ontwikkelingslanden worden geconfronteerd bij rampenparaatheid en -respons."
        }
      },
      {
        question: {
          en: "On January 12, 1969, which AFL team upset the Baltimore Colts in Super Bowl III?",
          es: "El 12 de enero de 1969, ¿qué equipo de la AFL derrotó sorpresivamente a los Baltimore Colts en el Super Bowl III?",
          de: "Am 12. Januar 1969 besiegte welches AFL-Team überraschend die Baltimore Colts im Super Bowl III?",
          nl: "Op 12 januari 1969 versloeg welk AFL-team de Baltimore Colts verrassend in Super Bowl III?"
        },
        options: [
          { en: "Kansas City Chiefs", es: "Kansas City Chiefs", de: "Kansas City Chiefs", nl: "Kansas City Chiefs" },
          { en: "Miami Dolphins", es: "Miami Dolphins", de: "Miami Dolphins", nl: "Miami Dolphins" },
          { en: "Oakland Raiders", es: "Oakland Raiders", de: "Oakland Raiders", nl: "Oakland Raiders" },
          { en: "New York Jets", es: "New York Jets", de: "New York Jets", nl: "New York Jets" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Jets' 16-7 victory, led by quarterback Joe Namath who famously guaranteed the win, is considered one of the greatest upsets in sports history. This game validated the AFL as equal to the established NFL and paved the way for the merger of the two leagues. Namath's bold prediction and subsequent performance made him an instant legend.",
          es: "La victoria 16-7 de los Jets, liderada por el mariscal de campo Joe Namath quien famosamente garantizó la victoria, se considera una de las mayores sorpresas en la historia del deporte. Este juego validó a la AFL como igual a la establecida NFL y allanó el camino para la fusión de las dos ligas. La audaz predicción de Namath y su posterior actuación lo convirtieron en una leyenda instantánea.",
          de: "Der 16-7-Sieg der Jets, angeführt von Quarterback Joe Namath, der den Sieg berühmt garantierte, gilt als eine der größten Überraschungen in der Sportgeschichte. Dieses Spiel bestätigte die AFL als gleichwertig mit der etablierten NFL und ebnete den Weg für die Fusion der beiden Ligen. Namuths kühne Vorhersage und anschließende Leistung machten ihn zu einer sofortigen Legende.",
          nl: "De 16-7 overwinning van de Jets, geleid door quarterback Joe Namath die de overwinning beroemd garandeerde, wordt beschouwd als een van de grootste verrassingen in de sportgeschiedenis. Deze wedstrijd valideerde de AFL als gelijk aan de gevestigde NFL en effende de weg voor de fusie van de twee competities. Namath's gedurfde voorspelling en daaropvolgende prestatie maakten hem tot een directe legende."
        }
      },
      {
        question: {
          en: "Which famous American author of 'The Call of the Wild' was born on January 12, 1876?",
          es: "¿Qué famoso autor estadounidense de 'La llamada de la selva' nació el 12 de enero de 1876?",
          de: "Welcher berühmte amerikanische Autor von 'Ruf der Wildnis' wurde am 12. Januar 1876 geboren?",
          nl: "Welke beroemde Amerikaanse auteur van 'The Call of the Wild' werd geboren op 12 januari 1876?"
        },
        options: [
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" },
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "Jack London", es: "Jack London", de: "Jack London", nl: "Jack London" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Jack London wrote adventure novels that drew from his experiences in the Klondike Gold Rush and as a sailor. His works explore themes of survival, nature, and the primitive versus civilization. London became one of the first American authors to earn significant wealth from writing and pioneered commercial magazine fiction.",
          es: "Jack London escribió novelas de aventuras que se inspiraron en sus experiencias en la Fiebre del Oro de Klondike y como marinero. Sus obras exploran temas de supervivencia, naturaleza y lo primitivo versus la civilización. London se convirtió en uno de los primeros autores estadounidenses en ganar una riqueza significativa de la escritura y fue pionero en la ficción comercial de revistas.",
          de: "Jack London schrieb Abenteuerromane, die sich auf seine Erfahrungen im Klondike-Goldrausch und als Seemann stützten. Seine Werke erforschen Themen des Überlebens, der Natur und des Primitiven versus Zivilisation. London wurde einer der ersten amerikanischen Autoren, der durch das Schreiben erheblichen Reichtum erlangte und war Pionier der kommerziellen Zeitschriftenliteratur.",
          nl: "Jack London schreef avonturenromans die voortkwamen uit zijn ervaringen in de Klondike Gold Rush en als zeeman. Zijn werken verkennen thema's van overleving, natuur en het primitieve versus beschaving. London werd een van de eerste Amerikaanse auteurs die aanzienlijke rijkdom verdiende met schrijven en was pionier in commerciële tijdschriftfictie."
        }
      },
      {
        question: {
          en: "Which acclaimed Japanese author of 'Norwegian Wood' was born on January 12, 1949?",
          es: "¿Qué aclamado autor japonés de 'Tokio blues' nació el 12 de enero de 1949?",
          de: "Welcher gefeierte japanische Autor von 'Naokos Lächeln' wurde am 12. Januar 1949 geboren?",
          nl: "Welke veelgeprezen Japanse auteur van 'Norwegian Wood' werd geboren op 12 januari 1949?"
        },
        options: [
          { en: "Yukio Mishima", es: "Yukio Mishima", de: "Yukio Mishima", nl: "Yukio Mishima" },
          { en: "Kenzaburo Oe", es: "Kenzaburo Oe", de: "Kenzaburo Oe", nl: "Kenzaburo Oe" },
          { en: "Haruki Murakami", es: "Haruki Murakami", de: "Haruki Murakami", nl: "Haruki Murakami" },
          { en: "Kobo Abe", es: "Kobo Abe", de: "Kobo Abe", nl: "Kobo Abe" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Haruki Murakami is one of the most widely read contemporary Japanese authors, blending surrealism with everyday life in his novels. His works have been translated into over 50 languages and have sold millions of copies worldwide. Murakami's distinctive style combines Western pop culture influences with Japanese sensibilities, creating a unique literary voice.",
          es: "Haruki Murakami es uno de los autores japoneses contemporáneos más leídos, fusionando el surrealismo con la vida cotidiana en sus novelas. Sus obras han sido traducidas a más de 50 idiomas y han vendido millones de copias en todo el mundo. El estilo distintivo de Murakami combina influencias de la cultura pop occidental con sensibilidades japonesas, creando una voz literaria única.",
          de: "Haruki Murakami ist einer der meistgelesenen zeitgenössischen japanischen Autoren, der in seinen Romanen Surrealismus mit dem Alltag verbindet. Seine Werke wurden in über 50 Sprachen übersetzt und haben weltweit Millionen von Exemplaren verkauft. Murakamis unverwechselbarer Stil kombiniert westliche Popkultur-Einflüsse mit japanischer Sensibilität und schafft eine einzigartige literarische Stimme.",
          nl: "Haruki Murakami is een van de meest gelezen hedendaagse Japanse auteurs, die in zijn romans surrealisme combineert met het dagelijks leven. Zijn werken zijn vertaald in meer dan 50 talen en hebben wereldwijd miljoenen exemplaren verkocht. Murakami's onderscheidende stijl combineert westerse popcultuur-invloeden met Japanse gevoeligheden, waardoor een unieke literaire stem ontstaat."
        }
      },
      {
        question: {
          en: "On January 12, 1998, nineteen European nations agreed to forbid what practice?",
          es: "El 12 de enero de 1998, diecinueve naciones europeas acordaron prohibir qué práctica?",
          de: "Am 12. Januar 1998 einigten sich neunzehn europäische Nationen darauf, welche Praxis zu verbieten?",
          nl: "Op 12 januari 1998 kwamen negentien Europese landen overeen welke praktijk te verbieden?"
        },
        options: [
          { en: "Human cloning", es: "Clonación humana", de: "Menschliches Klonen", nl: "Menselijk klonen" },
          { en: "Nuclear testing", es: "Pruebas nucleares", de: "Atomtests", nl: "Nucleaire tests" },
          { en: "Animal testing", es: "Experimentación animal", de: "Tierversuche", nl: "Dierproeven" },
          { en: "Genetic modification", es: "Modificación genética", de: "Genetische Veränderung", nl: "Genetische modificatie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "This agreement followed the 1996 cloning of Dolly the sheep and growing concerns about the ethical implications of human cloning. The treaty established legal frameworks to prevent reproductive cloning while allowing therapeutic research. This remains a significant milestone in international bioethics, balancing scientific progress with moral considerations.",
          es: "Este acuerdo siguió a la clonación de 1996 de la oveja Dolly y las crecientes preocupaciones sobre las implicaciones éticas de la clonación humana. El tratado estableció marcos legales para prevenir la clonación reproductiva mientras permitía la investigación terapéutica. Este sigue siendo un hito significativo en la bioética internacional, equilibrando el progreso científico con consideraciones morales.",
          de: "Diese Vereinbarung folgte auf das Klonen des Schafs Dolly im Jahr 1996 und wachsende Bedenken hinsichtlich der ethischen Implikationen des menschlichen Klonens. Der Vertrag schuf rechtliche Rahmenbedingungen zur Verhinderung des reproduktiven Klonens bei gleichzeitiger Zulassung therapeutischer Forschung. Dies bleibt ein bedeutender Meilenstein in der internationalen Bioethik, der wissenschaftlichen Fortschritt mit moralischen Erwägungen in Einklang bringt.",
          nl: "Deze overeenkomst volgde op het klonen van schaap Dolly in 1996 en groeiende bezorgdheid over de ethische implicaties van menselijk klonen. Het verdrag vestigde juridische kaders om reproductief klonen te voorkomen terwijl therapeutisch onderzoek werd toegestaan. Dit blijft een belangrijke mijlpaal in de internationale bio-ethiek, waarbij wetenschappelijke vooruitgang wordt afgewogen tegen morele overwegingen."
        }
      }
    ],

    // Day 13 - January 13th: Bill Gates & Johnny Cash
    day13: [
      {
        question: {
          en: "In what year did Bill Gates step down as CEO of Microsoft on January 13?",
          es: "¿En qué año renunció Bill Gates como CEO de Microsoft el 13 de enero?",
          de: "In welchem Jahr trat Bill Gates am 13. Januar als CEO von Microsoft zurück?",
          nl: "In welk jaar stapte Bill Gates op 13 januari af als CEO van Microsoft?"
        },
        options: [
          { en: "2002", es: "2002", de: "2002", nl: "2002" },
          { en: "2001", es: "2001", de: "2001", nl: "2001" },
          { en: "1999", es: "1999", de: "1999", nl: "1999" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Bill Gates transitioned from CEO to Chief Software Architect, allowing Steve Ballmer to take over day-to-day operations of Microsoft. This strategic shift enabled Gates to focus on software development and product strategy during a critical period for the company. Gates later fully retired from Microsoft in 2008 to dedicate himself to philanthropic work through the Bill & Melinda Gates Foundation.",
          es: "Bill Gates pasó de CEO a Arquitecto Jefe de Software, permitiendo que Steve Ballmer se hiciera cargo de las operaciones diarias de Microsoft. Este cambio estratégico permitió a Gates centrarse en el desarrollo de software y la estrategia de productos durante un período crítico para la empresa. Gates posteriormente se retiró completamente de Microsoft en 2008 para dedicarse al trabajo filantrópico a través de la Fundación Bill & Melinda Gates.",
          de: "Bill Gates wechselte von CEO zu Chief Software Architect, wodurch Steve Ballmer die täglichen Geschäfte von Microsoft übernehmen konnte. Diese strategische Verschiebung ermöglichte es Gates, sich während einer kritischen Phase für das Unternehmen auf Softwareentwicklung und Produktstrategie zu konzentrieren. Gates zog sich 2008 vollständig von Microsoft zurück, um sich der philanthropischen Arbeit durch die Bill & Melinda Gates Foundation zu widmen.",
          nl: "Bill Gates veranderde van CEO naar Chief Software Architect, waardoor Steve Ballmer de dagelijkse operaties van Microsoft kon overnemen. Deze strategische verschuiving stelde Gates in staat zich te concentreren op softwareontwikkeling en productstrategie tijdens een kritieke periode voor het bedrijf. Gates trok zich in 2008 volledig terug uit Microsoft om zich te wijden aan filantropisch werk via de Bill & Melinda Gates Foundation."
        }
      },
      {
        question: {
          en: "On January 13, 1999, Michael Jordan announced his retirement from basketball for which time?",
          es: "El 13 de enero de 1999, Michael Jordan anunció su retiro del baloncesto por cuál vez?",
          de: "Am 13. Januar 1999 kündigte Michael Jordan seinen Rücktritt vom Basketball zum wievielten Mal an?",
          nl: "Op 13 januari 1999 kondigde Michael Jordan zijn pensioen van basketbal aan voor de hoeveelste keer?"
        },
        options: [
          { en: "Third time", es: "Tercera vez", de: "Drittes Mal", nl: "Derde keer" },
          { en: "Second time", es: "Segunda vez", de: "Zweites Mal", nl: "Tweede keer" },
          { en: "Final time", es: "Última vez", de: "Letztes Mal", nl: "Laatste keer" },
          { en: "First time", es: "Primera vez", de: "Erstes Mal", nl: "Eerste keer" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jordan first retired in 1993 after winning three consecutive NBA championships with the Chicago Bulls, then returned in 1995. His second retirement in 1999 came after winning three more championships, cementing his legacy as basketball's greatest player. Jordan briefly returned again in 2001-2003 with the Washington Wizards.",
          es: "Jordan se retiró por primera vez en 1993 después de ganar tres campeonatos consecutivos de la NBA con los Chicago Bulls, luego regresó en 1995. Su segundo retiro en 1999 llegó después de ganar tres campeonatos más, consolidando su legado como el mejor jugador de baloncesto. Jordan regresó brevemente de nuevo en 2001-2003 con los Washington Wizards.",
          de: "Jordan trat erstmals 1993 zurück, nachdem er drei aufeinanderfolgende NBA-Meisterschaften mit den Chicago Bulls gewonnen hatte, und kehrte 1995 zurück. Sein zweiter Rücktritt 1999 erfolgte nach drei weiteren Meisterschaften und zementierte sein Vermächtnis als größter Basketballspieler. Jordan kehrte 2001-2003 kurz mit den Washington Wizards zurück.",
          nl: "Jordan ging voor het eerst met pensioen in 1993 na het winnen van drie opeenvolgende NBA-kampioenschappen met de Chicago Bulls, en keerde vervolgens terug in 1995. Zijn tweede pensioen in 1999 volgde na het winnen van nog drie kampioenschappen, waarmee zijn erfenis als 's werelds beste basketbalspeler werd bevestigd. Jordan keerde in 2001-2003 kort terug bij de Washington Wizards."
        }
      },
      {
        question: {
          en: "On January 13, 1968, Johnny Cash recorded a famous live album at which prison?",
          es: "El 13 de enero de 1968, Johnny Cash grabó un famoso álbum en vivo en qué prisión?",
          de: "Am 13. Januar 1968 nahm Johnny Cash ein berühmtes Live-Album in welchem Gefängnis auf?",
          nl: "Op 13 januari 1968 nam Johnny Cash een beroemd live-album op in welke gevangenis?"
        },
        options: [
          { en: "Folsom Prison", es: "Prisión Folsom", de: "Folsom-Gefángnis", nl: "Folsom Prison" },
          { en: "Alcatraz", es: "Alcatraz", de: "Alcatraz", nl: "Alcatraz" },
          { en: "San Quentin", es: "San Quentin", de: "San Quentin", nl: "San Quentin" },
          { en: "Sing Sing", es: "Sing Sing", de: "Sing Sing", nl: "Sing Sing" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Johnny Cash's 'At Folsom Prison' became one of the best-selling live albums in music history, revitalizing his career. The raw, authentic performance resonated with both inmates and the general public, establishing Cash's image as a champion of the downtrodden. His prison concerts demonstrated music's power to provide hope and dignity to marginalized populations.",
          es: "El álbum 'At Folsom Prison' de Johnny Cash se convirtió en uno de los álbumes en vivo más vendidos en la historia de la música, revitalizando su carrera. La actuación cruda y auténtica resonó tanto con los reclusos como con el público en general, estableciendo la imagen de Cash como un defensor de los oprimidos. Sus conciertos en prisiones demostraron el poder de la música para proporcionar esperanza y dignidad a poblaciones marginadas.",
          de: "Johnny Cashs 'At Folsom Prison' wurde eines der meistverkauften Live-Alben in der Musikgeschichte und belebte seine Karriere neu. Die rohe, authentische Darbietung fand sowohl bei den Insassen als auch beim allgemeinen Publikum Anklang und etablierte Cashs Image als Verfechter der Unterdrückten. Seine Gefängniskonzerte demonstrierten die Kraft der Musik, marginalisierten Bevölkerungsgruppen Hoffnung und Würde zu geben.",
          nl: "Johnny Cash's 'At Folsom Prison' werd een van de best verkochte live-albums in de muziekgeschiedenis en revitaliseerde zijn carrière. De rauwe, authentieke uitvoering resoneerde zowel bij gedetineerden als bij het grote publiek, waardoor Cash's imago als voorvechter van de verdrukten werd gevestigd. Zijn gevangenisconcerten toonden de kracht van muziek om hoop en waardigheid te bieden aan gemarginaliseerde bevolkingsgroepen."
        }
      },
      {
        question: {
          en: "Which actor known for playing Legolas in 'The Lord of the Rings' was born on January 13, 1977?",
          es: "¿Qué actor conocido por interpretar a Legolas en 'El Señor de los Anillos' nació el 13 de enero de 1977?",
          de: "Welcher Schauspieler, bekannt für seine Rolle als Legolas in 'Der Herr der Ringe', wurde am 13. Januar 1977 geboren?",
          nl: "Welke acteur bekend van het spelen van Legolas in 'The Lord of the Rings' werd geboren op 13 januari 1977?"
        },
        options: [
          { en: "Elijah Wood", es: "Elijah Wood", de: "Elijah Wood", nl: "Elijah Wood" },
          { en: "Sean Astin", es: "Sean Astin", de: "Sean Astin", nl: "Sean Astin" },
          { en: "Viggo Mortensen", es: "Viggo Mortensen", de: "Viggo Mortensen", nl: "Viggo Mortensen" },
          { en: "Orlando Bloom", es: "Orlando Bloom", de: "Orlando Bloom", nl: "Orlando Bloom" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Orlando Bloom's portrayal of the elf archer Legolas catapulted him to international stardom in Peter Jackson's epic trilogy. His performance combined athleticism with ethereal grace, making Legolas one of the most memorable characters in the films. Bloom went on to star in other major franchises including 'Pirates of the Caribbean.'",
          es: "La interpretación de Orlando Bloom del arquero elfo Legolas lo catapultó al estrellato internacional en la trilogía épica de Peter Jackson. Su actuación combinó atletismo con gracia etérea, convirtiendo a Legolas en uno de los personajes más memorables de las películas. Bloom continuó protagonizando otras grandes franquicias incluyendo 'Piratas del Caribe.'",
          de: "Orlando Blooms Darstellung des Elfenbogenschützen Legolas katapultierte ihn in Peter Jacksons epischer Trilogie zu internationalem Ruhm. Seine Darbietung kombinierte Athletik mit ätherischer Anmut und machte Legolas zu einer der denkwürdigsten Figuren der Filme. Bloom spielte später in anderen großen Franchises mit, darunter 'Fluch der Karibik.'",
          nl: "Orlando Bloom's vertolking van de elfenboogschutter Legolas katapulteerde hem naar internationale roem in Peter Jackson's epische trilogie. Zijn optreden combineerde atletiek met etherische gratie, waardoor Legolas een van de meest gedenkwaardige personages in de films werd. Bloom speelde later in andere grote franchises waaronder 'Pirates of the Caribbean.'"
        }
      },
      {
        question: {
          en: "On January 13, 2012, the cruise ship Costa Concordia ran aground off which Italian island?",
          es: "El 13 de enero de 2012, el crucero Costa Concordia encalló frente a qué isla italiana?",
          de: "Am 13. Januar 2012 lief das Kreuzfahrtschiff Costa Concordia vor welcher italienischen Insel auf Grund?",
          nl: "Op 13 januari 2012 liep het cruiseschip Costa Concordia aan de grond voor welk Italiaans eiland?"
        },
        options: [
          { en: "Capri", es: "Capri", de: "Capri", nl: "Capri" },
          { en: "Sardinia", es: "Cerdeña", de: "Sardinien", nl: "Sardinië" },
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" },
          { en: "Giglio", es: "Giglio", de: "Giglio", nl: "Giglio" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Costa Concordia disaster killed 32 people when the captain performed an unauthorized close pass to the island. The ship's capsizing and the captain's abandonment of passengers led to major changes in maritime safety regulations. The massive salvage operation took nearly three years and cost over $1.5 billion, making it one of the most complex maritime salvage operations ever undertaken.",
          es: "El desastre del Costa Concordia mató a 32 personas cuando el capitán realizó un pase cercano no autorizado a la isla. El volcamiento del barco y el abandono de los pasajeros por parte del capitán llevaron a cambios importantes en las regulaciones de seguridad marítima. La masiva operación de salvamento tomó casi tres años y costó más de $1.5 mil millones, convirtiéndola en una de las operaciones de salvamento marítimo más complejas jamás emprendidas.",
          de: "Die Costa-Concordia-Katastrophe forderte 32 Todesopfer, als der Kapitän eine nicht autorisierte enge Vorbeifahrt an der Insel durchführte. Das Kentern des Schiffes und das Verlassen der Passagiere durch den Kapitän führten zu großen Änderungen in den maritimen Sicherheitsvorschriften. Die massive Bergungsoperation dauerte fast drei Jahre und kostete über 1,5 Milliarden Dollar, was sie zu einer der komplexesten maritimen Bergungsoperationen aller Zeiten machte.",
          nl: "De Costa Concordia-ramp doodde 32 mensen toen de kapitein een ongeautoriseerde dichte passage bij het eiland uitvoerde. Het kapseizen van het schip en het verlaten van passagiers door de kapitein leidden tot grote veranderingen in maritieme veiligheidsregels. De enorme bergingsoperatie duurde bijna drie jaar en kostte meer dan $1,5 miljard, waardoor het een van de meest complexe maritieme bergingsoperaties ooit werd."
        }
      }
    ],

    // Day 14 - January 14th: Tosca & Elvis
    day14: [
      {
        question: {
          en: "In what year did Puccini's opera 'Tosca' premiere in Rome on January 14?",
          es: "¿En qué año se estrenó la ópera 'Tosca' de Puccini en Roma el 14 de enero?",
          de: "In welchem Jahr hatte Puccinis Oper 'Tosca' am 14. Januar in Rom Premiere?",
          nl: "In welk jaar ging Puccini's opera 'Tosca' in première in Rome op 14 januari?"
        },
        options: [
          { en: "1898", es: "1898", de: "1898", nl: "1898" },
          { en: "1895", es: "1895", de: "1895", nl: "1895" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1905", es: "1905", de: "1905", nl: "1905" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Puccini's 'Tosca' premiered at Rome's Teatro Costanzi at the turn of the century, becoming one of the most frequently performed operas worldwide. The dramatic story of love, jealousy, and political intrigue features some of opera's most famous arias. 'Tosca' exemplifies the verismo style, depicting realistic emotions and violent passions on stage.",
          es: "La 'Tosca' de Puccini se estrenó en el Teatro Costanzi de Roma al cambio de siglo, convirtiéndose en una de las óperas más representadas en todo el mundo. La dramática historia de amor, celos e intriga política presenta algunas de las arias más famosas de la ópera. 'Tosca' ejemplifica el estilo verismo, representando emociones realistas y pasiones violentas en el escenario.",
          de: "Puccinis 'Tosca' hatte am Teatro Costanzi in Rom zur Jahrhundertwende Premiere und wurde zu einer der weltweit am häufigsten aufgeführten Opern. Die dramatische Geschichte von Liebe, Eifersucht und politischer Intrige enthält einige der berühmtesten Arien der Oper. 'Tosca' verkörpert den Verismo-Stil und stellt realistische Emotionen und gewalttätige Leidenschaften auf der Bühne dar.",
          nl: "Puccini's 'Tosca' ging in première in Rome's Teatro Costanzi aan het begin van de eeuw en werd een van de meest opgevoerde opera's wereldwijd. Het dramatische verhaal van liefde, jaloezie en politieke intriges bevat enkele van de beroemdste aria's uit de opera. 'Tosca' belichaamt de verismo-stijl, waarbij realistische emoties en gewelddadige passies op het toneel worden uitgebeeld."
        }
      },
      {
        question: {
          en: "On January 14, 1973, Elvis Presley performed the first globally broadcast concert via satellite. What was it called?",
          es: "El 14 de enero de 1973, Elvis Presley realizó el primer concierto transmitido globalmente vía satélite. ¿Cómo se llamó?",
          de: "Am 14. Januar 1973 führte Elvis Presley das erste weltweit per Satellit übertragene Konzert auf. Wie hieß es?",
          nl: "Op 14 januari 1973 voerde Elvis Presley het eerste wereldwijd via satelliet uitgezonden concert uit. Hoe heette het?"
        },
        options: [
          { en: "Viva Las Vegas", es: "Viva Las Vegas", de: "Viva Las Vegas", nl: "Viva Las Vegas" },
          { en: "The King Returns", es: "The King Returns", de: "The King Returns", nl: "The King Returns" },
          { en: "Aloha from Hawaii", es: "Aloha from Hawaii", de: "Aloha from Hawaii", nl: "Aloha from Hawaii" },
          { en: "Elvis in Concert", es: "Elvis in Concert", de: "Elvis in Concert", nl: "Elvis in Concert" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Aloha from Hawaii' was watched by over 1 billion people across 40 countries, making it one of the most-watched broadcasts in history. The concert showcased Elvis at his peak performance in a lavish white jumpsuit with cape. This groundbreaking use of satellite technology revolutionized how live music events could be shared globally.",
          es: "'Aloha from Hawaii' fue visto por más de 1 mil millones de personas en 40 países, convirtiéndolo en una de las transmisiones más vistas de la historia. El concierto mostró a Elvis en su máximo rendimiento con un lujoso traje blanco con capa. Este uso innovador de la tecnología satelital revolucionó cómo los eventos de música en vivo podían compartirse globalmente.",
          de: "'Aloha from Hawaii' wurde von über 1 Milliarde Menschen in 40 Ländern gesehen und war damit eine der meistgesehenen Sendungen der Geschichte. Das Konzert zeigte Elvis auf dem Höhepunkt seiner Leistung in einem prächtigen weißen Jumpsuit mit Cape. Diese bahnbrechende Nutzung der Satellitentechnologie revolutionierte, wie Live-Musikveranstaltungen global geteilt werden konnten.",
          nl: "'Aloha from Hawaii' werd bekeken door meer dan 1 miljard mensen in 40 landen, waardoor het een van de meest bekeken uitzendingen in de geschiedenis werd. Het concert toonde Elvis op zijn beste in een luxueus wit jumpsuit met cape. Dit baanbrekende gebruik van satelliettechnologie zorgde voor een revolutie in hoe live muziekevenementen wereldwijd konden worden gedeeld."
        }
      },
      {
        question: {
          en: "Which famous traitor who sided with the British during the American Revolution was born on January 14, 1741?",
          es: "¿Qué famoso traidor que se alió con los británicos durante la Revolución Americana nació el 14 de enero de 1741?",
          de: "Welcher berühmte Verräter, der sich während der Amerikanischen Revolution auf die Seite der Briten stellte, wurde am 14. Januar 1741 geboren?",
          nl: "Welke beroemde verrader die zich tijdens de Amerikaanse Revolutie aan de kant van de Britten schaarde, werd geboren op 14 januari 1741?"
        },
        options: [
          { en: "William Howe", es: "William Howe", de: "William Howe", nl: "William Howe" },
          { en: "John André", es: "John André", de: "John André", nl: "John André" },
          { en: "Benedict Arnold", es: "Benedict Arnold", de: "Benedict Arnold", nl: "Benedict Arnold" },
          { en: "Charles Lee", es: "Charles Lee", de: "Charles Lee", nl: "Charles Lee" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Benedict Arnold was initially a successful American general who played crucial roles in early Revolutionary War victories. His betrayal in 1780, attempting to surrender West Point to the British, made his name synonymous with treason in American history. Arnold's motivations included financial difficulties and perceived lack of recognition for his military achievements.",
          es: "Benedict Arnold fue inicialmente un exitoso general estadounidense que desempeñó papeles cruciales en las primeras victorias de la Guerra Revolucionaria. Su traición en 1780, intentando entregar West Point a los británicos, hizo que su nombre fuera sinónimo de traición en la historia estadounidense. Las motivaciones de Arnold incluían dificultades financieras y falta percibida de reconocimiento por sus logros militares.",
          de: "Benedict Arnold war zunächst ein erfolgreicher amerikanischer General, der entscheidende Rollen bei frühen Siegen im Revolutionskrieg spielte. Sein Verrat im Jahr 1780, als er versuchte, West Point an die Briten zu übergeben, machte seinen Namen zum Synonym für Verrat in der amerikanischen Geschichte. Arnolds Motivationen umfassten finanzielle Schwierigkeiten und mangelnde Anerkennung für seine militärischen Leistungen.",
          nl: "Benedict Arnold was aanvankelijk een succesvolle Amerikaanse generaal die cruciale rollen speelde in vroege overwinningen in de Revolutionaire Oorlog. Zijn verraad in 1780, waarbij hij probeerde West Point aan de Britten over te dragen, maakte zijn naam synoniem met verraad in de Amerikaanse geschiedenis. Arnolds motivaties omvatten financiële moeilijkheden en waargenomen gebrek aan erkenning voor zijn militaire prestaties."
        }
      },
      {
        question: {
          en: "Which author of 'Alice in Wonderland' died on January 14, 1898?",
          es: "¿Qué autor de 'Alicia en el país de las maravillas' murió el 14 de enero de 1898?",
          de: "Welcher Autor von 'Alice im Wunderland' starb am 14. Januar 1898?",
          nl: "Welke auteur van 'Alice in Wonderland' stierf op 14 januari 1898?"
        },
        options: [
          { en: "Oscar Wilde", es: "Oscar Wilde", de: "Oscar Wilde", nl: "Oscar Wilde" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "Lewis Carroll", es: "Lewis Carroll", de: "Lewis Carroll", nl: "Lewis Carroll" },
          { en: "J.M. Barrie", es: "J.M. Barrie", de: "J.M. Barrie", nl: "J.M. Barrie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Lewis Carroll, born Charles Dodgson, was a mathematician and photographer who created one of literature's most enduring fantasy worlds. 'Alice's Adventures in Wonderland' revolutionized children's literature with its wordplay, logic puzzles, and surreal imagery. The book's influence extends far beyond literature into mathematics, philosophy, and popular culture.",
          es: "Lewis Carroll, nacido como Charles Dodgson, fue un matemático y fotógrafo que creó uno de los mundos de fantasía más duraderos de la literatura. 'Las aventuras de Alicia en el país de las maravillas' revolucionó la literatura infantil con sus juegos de palabras, acertijos lógicos e imágenes surrealistas. La influencia del libro se extiende mucho más allá de la literatura hacia las matemáticas, la filosofía y la cultura popular.",
          de: "Lewis Carroll, geboren als Charles Dodgson, war ein Mathematiker und Fotograf, der eine der beständigsten Fantasiewelten der Literatur schuf. 'Alice im Wunderland' revolutionierte die Kinderliteratur mit Wortspielen, Logikrätseln und surrealen Bildern. Der Einfluss des Buches erstreckt sich weit über die Literatur hinaus in Mathematik, Philosophie und Populärkultur.",
          nl: "Lewis Carroll, geboren als Charles Dodgson, was een wiskundige en fotograaf die een van de meest blijvende fantasiewerelden in de literatuur creëerde. 'Alice's Adventures in Wonderland' zorgde voor een revolutie in de kinderliteratuur met woordspelingen, logische puzzels en surrealistische beelden. De invloed van het boek reikt ver voorbij literatuur naar wiskunde, filosofie en populaire cultuur."
        }
      },
      {
        question: {
          en: "Which legendary actor known for 'Casablanca' died on January 14, 1957?",
          es: "¿Qué actor legendario conocido por 'Casablanca' murió el 14 de enero de 1957?",
          de: "Welcher legendäre Schauspieler, bekannt für 'Casablanca', starb am 14. Januar 1957?",
          nl: "Welke legendarische acteur bekend van 'Casablanca' stierf op 14 januari 1957?"
        },
        options: [
          { en: "Humphrey Bogart", es: "Humphrey Bogart", de: "Humphrey Bogart", nl: "Humphrey Bogart" },
          { en: "Cary Grant", es: "Cary Grant", de: "Cary Grant", nl: "Cary Grant" },
          { en: "Clark Gable", es: "Clark Gable", de: "Clark Gable", nl: "Clark Gable" },
          { en: "James Cagney", es: "James Cagney", de: "James Cagney", nl: "James Cagney" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Humphrey Bogart epitomized the tough-guy screen persona through iconic roles in films like 'Casablanca,' 'The Maltese Falcon,' and 'The African Queen.' His distinctive voice and world-weary charm made him one of Hollywood's greatest stars. Bogart won an Academy Award for Best Actor and remains an enduring symbol of classic Hollywood cinema.",
          es: "Humphrey Bogart personificó la persona de tipo duro en la pantalla a través de papeles icónicos en películas como 'Casablanca', 'El halcón maltés' y 'La reina de África'. Su voz distintiva y encanto cansado del mundo lo convirtieron en una de las mayores estrellas de Hollywood. Bogart ganó un Premio de la Academia al Mejor Actor y sigue siendo un símbolo duradero del cine clásico de Hollywood.",
          de: "Humphrey Bogart verkörperte die harte Bildschirmpersönlichkeit durch ikonische Rollen in Filmen wie 'Casablanca', 'Die Spur des Falken' und 'African Queen'. Seine unverwechselbare Stimme und sein weltmüder Charme machten ihn zu einem der größten Stars Hollywoods. Bogart gewann einen Oscar als bester Hauptdarsteller und bleibt ein dauerhaftes Symbol des klassischen Hollywood-Kinos.",
          nl: "Humphrey Bogart belichaamde het stoere schermbeeld door iconische rollen in films als 'Casablanca', 'The Maltese Falcon' en 'The African Queen'. Zijn onderscheidende stem en wereld-vermoeide charme maakten hem tot een van Hollywood's grootste sterren. Bogart won een Academy Award voor Beste Acteur en blijft een blijvend symbool van klassieke Hollywood-cinema."
        }
      }
    ],

    // Day 15 - January 15th: MLK Jr Birthday & Wikipedia
    day15: [
      {
        question: {
          en: "In what year was Martin Luther King Jr. born on January 15?",
          es: "¿En qué año nació Martin Luther King Jr. el 15 de enero?",
          de: "In welchem Jahr wurde Martin Luther King Jr. am 15. Januar geboren?",
          nl: "In welk jaar werd Martin Luther King Jr. geboren op 15 januari?"
        },
        options: [
          { en: "1929", es: "1929", de: "1929", nl: "1929" },
          { en: "1925", es: "1925", de: "1925", nl: "1925" },
          { en: "1930", es: "1930", de: "1930", nl: "1930" },
          { en: "1928", es: "1928", de: "1928", nl: "1928" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Martin Luther King Jr. became the face of the American Civil Rights Movement, advocating for racial equality through nonviolent resistance. His 'I Have a Dream' speech and leadership in peaceful protests helped end legal segregation in the United States. King was awarded the Nobel Peace Prize in 1964 and his birthday is now a national holiday in the U.S.",
          es: "Martin Luther King Jr. se convirtió en el rostro del Movimiento por los Derechos Civiles estadounidense, abogando por la igualdad racial a través de la resistencia no violenta. Su discurso 'Tengo un sueño' y liderazgo en protestas pacíficas ayudaron a terminar con la segregación legal en Estados Unidos. King recibió el Premio Nobel de la Paz en 1964 y su cumpleaños es ahora un feriado nacional en EE.UU.",
          de: "Martin Luther King Jr. wurde zum Gesicht der amerikanischen Bürgerrechtsbewegung und setzte sich durch gewaltfreien Widerstand für Rassengleichheit ein. Seine 'I Have a Dream'-Rede und seine Führung bei friedlichen Protesten trugen zur Beendigung der rechtlichen Rassentrennung in den Vereinigten Staaten bei. King wurde 1964 mit dem Friedensnobelpreis ausgezeichnet und sein Geburtstag ist heute ein nationaler Feiertag in den USA.",
          nl: "Martin Luther King Jr. werd het gezicht van de Amerikaanse burgerrechtenbeweging en pleitte voor rassengelijkheid door geweldloos verzet. Zijn 'I Have a Dream'-toespraak en leiderschap in vreedzame protesten hielpen de wettelijke segregatie in de Verenigde Staten te beëindigen. King ontving de Nobelprijs voor de Vrede in 1964 en zijn verjaardag is nu een nationale feestdag in de VS."
        }
      },
      {
        question: {
          en: "On January 15, 1759, which famous museum opened to the public in London?",
          es: "El 15 de enero de 1759, ¿qué famoso museo abrió al público en Londres?",
          de: "Am 15. Januar 1759 eröffnete welches berühmte Museum in London für die Öffentlichkeit?",
          nl: "Op 15 januari 1759 opende welk beroemd museum zijn deuren voor het publiek in Londen?"
        },
        options: [
          { en: "British Museum", es: "Museo Británico", de: "British Museum", nl: "British Museum" },
          { en: "Victoria and Albert Museum", es: "Museo Victoria y Alberto", de: "Victoria and Albert Museum", nl: "Victoria and Albert Museum" },
          { en: "Natural History Museum", es: "Museo de Historia Natural", de: "Naturhistorisches Museum", nl: "Natural History Museum" },
          { en: "National Gallery", es: "Galería Nacional", de: "Nationalgalerie", nl: "National Gallery" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The British Museum was the first national public museum in the world, offering free admission to 'studious and curious persons.' It houses an extraordinary collection including the Rosetta Stone and Egyptian mummies. The museum pioneered the concept of public access to cultural treasures, influencing museum development worldwide.",
          es: "El Museo Británico fue el primer museo público nacional del mundo, ofreciendo entrada gratuita a 'personas estudiosas y curiosas'. Alberga una colección extraordinaria que incluye la Piedra de Rosetta y momias egipcias. El museo fue pionero en el concepto de acceso público a tesoros culturales, influyendo en el desarrollo de museos en todo el mundo.",
          de: "Das British Museum war das erste nationale öffentliche Museum der Welt und bot freien Eintritt für 'gelehrte und wissbegierige Personen'. Es beherbergt eine außergewöhnliche Sammlung, darunter den Stein von Rosetta und ägyptische Mumien. Das Museum war Vorreiter des Konzepts des öffentlichen Zugangs zu Kulturschätzen und beeinflusste die Museumsentwicklung weltweit.",
          nl: "Het British Museum was het eerste nationale openbare museum ter wereld en bood gratis toegang aan 'studieuze en nieuwsgierige personen'. Het herbergt een buitengewone collectie waaronder de Steen van Rosetta en Egyptische mummies. Het museum was pionier in het concept van openbare toegang tot culturele schatten en beïnvloedde de ontwikkeling van musea wereldwijd."
        }
      },
      {
        question: {
          en: "In what year was the first Super Bowl played on January 15?",
          es: "¿En qué año se jugó el primer Super Bowl el 15 de enero?",
          de: "In welchem Jahr wurde am 15. Januar der erste Super Bowl gespielt?",
          nl: "In welk jaar werd de eerste Super Bowl gespeeld op 15 januari?"
        },
        options: [
          { en: "1967", es: "1967", de: "1967", nl: "1967" },
          { en: "1966", es: "1966", de: "1966", nl: "1966" },
          { en: "1970", es: "1970", de: "1970", nl: "1970" },
          { en: "1968", es: "1968", de: "1968", nl: "1968" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The first Super Bowl saw the Green Bay Packers defeat the Kansas City Chiefs 35-10, establishing the championship game between the NFL and AFL champions. Originally called the AFL-NFL World Championship Game, it was retroactively named Super Bowl I. The event has grown into America's most-watched annual sporting event and cultural phenomenon.",
          es: "El primer Super Bowl vio a los Green Bay Packers derrotar a los Kansas City Chiefs 35-10, estableciendo el juego de campeonato entre los campeones de la NFL y AFL. Originalmente llamado el Juego del Campeonato Mundial AFL-NFL, fue nombrado retroactivamente Super Bowl I. El evento ha crecido hasta convertirse en el evento deportivo anual más visto de Estados Unidos y un fenómeno cultural.",
          de: "Der erste Super Bowl sah die Green Bay Packers die Kansas City Chiefs 35-10 besiegen und etablierte das Meisterschaftsspiel zwischen den NFL- und AFL-Champions. Ursprünglich AFL-NFL World Championship Game genannt, wurde es rückwirkend Super Bowl I benannt. Das Event ist zu Amerikas meistgesehenem jährlichen Sportereignis und kulturellem Phänomen gewachsen.",
          nl: "De eerste Super Bowl zag de Green Bay Packers de Kansas City Chiefs met 35-10 verslaan, waardoor de kampioenschapswedstrijd tussen de NFL- en AFL-kampioenen werd gevestigd. Oorspronkelijk de AFL-NFL World Championship Game genoemd, werd het met terugwerkende kracht Super Bowl I genoemd. Het evenement is uitgegroeid tot Amerika's meest bekeken jaarlijkse sportevenement en cultureel fenomeen."
        }
      },
      {
        question: {
          en: "On January 15, 2001, which free online encyclopedia was launched?",
          es: "El 15 de enero de 2001, ¿qué enciclopedia gratuita en línea se lanzó?",
          de: "Am 15. Januar 2001 wurde welche kostenlose Online-Enzyklopädie gestartet?",
          nl: "Op 15 januari 2001 werd welke gratis online encyclopedie gelanceerd?"
        },
        options: [
          { en: "Citizendium", es: "Citizendium", de: "Citizendium", nl: "Citizendium" },
          { en: "Encarta", es: "Encarta", de: "Encarta", nl: "Encarta" },
          { en: "Wikipedia", es: "Wikipedia", de: "Wikipedia", nl: "Wikipedia" },
          { en: "Encyclopedia Britannica Online", es: "Enciclopedia Británica en Línea", de: "Encyclopedia Britannica Online", nl: "Encyclopedia Britannica Online" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Wikipedia revolutionized information access through its collaborative, user-edited model that allows anyone to contribute and edit articles. It has grown to over 60 million articles in more than 300 languages, becoming one of the world's most visited websites. Wikipedia's open-source approach democratized knowledge sharing and challenged traditional encyclopedia models.",
          es: "Wikipedia revolucionó el acceso a la información a través de su modelo colaborativo editado por usuarios que permite a cualquiera contribuir y editar artículos. Ha crecido a más de 60 millones de artículos en más de 300 idiomas, convirtiéndose en uno de los sitios web más visitados del mundo. El enfoque de código abierto de Wikipedia democratizó el intercambio de conocimientos y desafió los modelos tradicionales de enciclopedia.",
          de: "Wikipedia revolutionierte den Informationszugang durch sein kollaboratives, von Benutzern bearbeitetes Modell, das jedem ermöglicht, Artikel beizutragen und zu bearbeiten. Es ist auf über 60 Millionen Artikel in mehr als 300 Sprachen gewachsen und wurde zu einer der meistbesuchten Websites der Welt. Wikipedias Open-Source-Ansatz demokratisierte den Wissensaustausch und stellte traditionelle Enzyklopädie-Modelle in Frage.",
          nl: "Wikipedia zorgde voor een revolutie in informatietoegang door zijn collaboratieve, door gebruikers bewerkte model dat iedereen toestaat artikelen bij te dragen en te bewerken. Het is gegroeid tot meer dan 60 miljoen artikelen in meer dan 300 talen en werd een van 's werelds meest bezochte websites. Wikipedia's open-source benadering democratiseerde kennisdeling en daagde traditionele encyclopedie-modellen uit."
        }
      },
      {
        question: {
          en: "On January 15, 2009, US Airways Flight 1549 made an emergency landing in which river?",
          es: "El 15 de enero de 2009, el vuelo 1549 de US Airways realizó un aterrizaje de emergencia en qué río?",
          de: "Am 15. Januar 2009 führte US Airways Flug 1549 eine Notlandung in welchem Fluss durch?",
          nl: "Op 15 januari 2009 maakte US Airways vlucht 1549 een noodlanding in welke rivier?"
        },
        options: [
          { en: "Delaware River", es: "Río Delaware", de: "Delaware River", nl: "Delaware River" },
          { en: "East River", es: "Río Este", de: "East River", nl: "East River" },
          { en: "Potomac River", es: "Río Potomac", de: "Potomac River", nl: "Potomac River" },
          { en: "Hudson River", es: "Río Hudson", de: "Hudson River", nl: "Hudson River" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Captain Chesley 'Sully' Sullenberger successfully landed the disabled Airbus A320 on the Hudson River after bird strikes disabled both engines shortly after takeoff. All 155 passengers and crew survived in what became known as the 'Miracle on the Hudson.' Sullenberger's quick thinking and expert piloting skills made him an international hero and exemplar of aviation safety.",
          es: "El capitán Chesley 'Sully' Sullenberger aterrizó con éxito el Airbus A320 deshabilitado en el río Hudson después de que impactos de pájaros deshabilitaron ambos motores poco después del despegue. Los 155 pasajeros y tripulantes sobrevivieron en lo que se conoció como el 'Milagro en el Hudson'. El pensamiento rápido y las habilidades expertas de pilotaje de Sullenberger lo convirtieron en un héroe internacional y modelo de seguridad aérea.",
          de: "Kapitän Chesley 'Sully' Sullenberger landete erfolgreich den beschädigten Airbus A320 auf dem Hudson River, nachdem Vogelschläge kurz nach dem Start beide Triebwerke lahmgelegt hatten. Alle 155 Passagiere und Besatzungsmitglieder überlebten in dem, was als 'Wunder am Hudson' bekannt wurde. Sullenbergers schnelles Denken und seine exzellenten Pilotenfähigkeiten machten ihn zu einem internationalen Helden und Vorbild für Flugsicherheit.",
          nl: "Kapitein Chesley 'Sully' Sullenberger landde de uitgeschakelde Airbus A320 succesvol op de Hudson River nadat vogelaanvaringen beide motoren kort na het opstijgen uitschakelden. Alle 155 passagiers en bemanningsleden overleefden in wat bekend werd als het 'Wonder op de Hudson.' Sullenbergers snelle denkvermogen en uitstekende vliegvaardigheden maakten hem tot een internationale held en voorbeeld van luchtvaartveiligheid."
        }
      }
    ],

    // Day 16 - January 16th: Roman Empire & Gulf War
    day16: [
      {
        question: {
          en: "In 27 BC, the Roman Senate gave Octavian which title on January 16, marking the beginning of the Roman Empire?",
          es: "En el 27 a.C., el Senado Romano otorgó a Octavio qué título el 16 de enero, marcando el comienzo del Imperio Romano?",
          de: "27 v. Chr. verlieh der römische Senat Octavian am 16. Januar welchen Titel, der den Beginn des Römischen Reiches markierte?",
          nl: "In 27 v.Chr. gaf de Romeinse Senaat Octavianus welke titel op 16 januari, wat het begin van het Romeinse Rijk markeerde?"
        },
        options: [
          { en: "Augustus", es: "Augusto", de: "Augustus", nl: "Augustus" },
          { en: "Caesar", es: "César", de: "Cäsar", nl: "Caesar" },
          { en: "Imperator", es: "Imperator", de: "Imperator", nl: "Imperator" },
          { en: "Princeps", es: "Princeps", de: "Princeps", nl: "Princeps" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The title 'Augustus' meaning 'revered one' marked Octavian's transformation from triumvir to sole ruler of Rome. This date is considered the beginning of the Roman Empire and the Pax Romana. The title became synonymous with imperial power and was used by all subsequent Roman emperors.",
          es: "El título 'Augusto' que significa 'venerado' marcó la transformación de Octavio de triunviro a único gobernante de Roma. Esta fecha se considera el comienzo del Imperio Romano y la Pax Romana. El título se convirtió en sinónimo de poder imperial y fue utilizado por todos los emperadores romanos posteriores.",
          de: "Der Titel 'Augustus', was 'der Erhabene' bedeutet, markierte Octavians Verwandlung vom Triumvirn zum Alleinherrscher Roms. Dieses Datum gilt als Beginn des Römischen Reiches und der Pax Romana. Der Titel wurde zum Synonym für kaiserliche Macht und wurde von allen nachfolgenden römischen Kaisern verwendet.",
          nl: "De titel 'Augustus' betekent 'verhevene' en markeerde Octavianus' transformatie van triumvir tot alleenheerser van Rome. Deze datum wordt beschouwd als het begin van het Romeinse Rijk en de Pax Romana. De titel werd synoniem met keizerlijke macht en werd gebruikt door alle volgende Romeinse keizers."
        }
      },
      {
        question: {
          en: "In what year did the Gulf War begin on January 16?",
          es: "¿En qué año comenzó la Guerra del Golfo el 16 de enero?",
          de: "In welchem Jahr begann am 16. Januar der Golfkrieg?",
          nl: "In welk jaar begon de Golfoorlog op 16 januari?"
        },
        options: [
          { en: "1992", es: "1992", de: "1992", nl: "1992" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" },
          { en: "1989", es: "1989", de: "1989", nl: "1989" },
          { en: "1991", es: "1991", de: "1991", nl: "1991" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Operation Desert Storm began with massive air strikes against Iraqi forces following Iraq's invasion of Kuwait. The coalition forces led by the United States liberated Kuwait within weeks. This conflict marked the first major post-Cold War military engagement and demonstrated modern military technology.",
          es: "La Operación Tormenta del Desierto comenzó con ataques aéreos masivos contra las fuerzas iraquíes tras la invasión iraquí de Kuwait. Las fuerzas de la coalición lideradas por Estados Unidos liberaron Kuwait en semanas. Este conflicto marcó el primer gran compromiso militar posterior a la Guerra Fría y demostró la tecnología militar moderna.",
          de: "Die Operation Wüstensturm begann mit massiven Luftangriffen gegen irakische Streitkräfte nach Iraks Invasion in Kuwait. Die von den Vereinigten Staaten angeführten Koalitionsstreitkräfte befreiten Kuwait innerhalb von Wochen. Dieser Konflikt markierte das erste große militärische Engagement nach dem Kalten Krieg und demonstrierte moderne Militärtechnologie.",
          nl: "Operatie Desert Storm begon met massale luchtaanvallen tegen Iraakse troepen na Iraks invasie van Koeweit. De coalitietroepen onder leiding van de Verenigde Staten bevrijdden Koeweit binnen enkele weken. Dit conflict markeerde de eerste grote militaire betrokkenheid na de Koude Oorlog en demonstreerde moderne militaire technologie."
        }
      },
      {
        question: {
          en: "Which inventor of the ice resurfacing machine was born on January 16, 1901?",
          es: "¿Qué inventor de la máquina de resurfacing de hielo nació el 16 de enero de 1901?",
          de: "Welcher Erfinder der Eisaufbereitungsmaschine wurde am 16. Januar 1901 geboren?",
          nl: "Welke uitvinder van de ijsbereidingsmachine werd geboren op 16 januari 1901?"
        },
        options: [
          { en: "Frank Zamboni", es: "Frank Zamboni", de: "Frank Zamboni", nl: "Frank Zamboni" },
          { en: "John Zamboni", es: "John Zamboni", de: "John Zamboni", nl: "John Zamboni" },
          { en: "George Zamboni", es: "George Zamboni", de: "George Zamboni", nl: "George Zamboni" },
          { en: "Robert Zamboni", es: "Robert Zamboni", de: "Robert Zamboni", nl: "Robert Zamboni" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Frank Zamboni revolutionized ice maintenance by inventing the ice resurfacing machine in 1949. His machine became so iconic that 'Zamboni' became a generic term for all ice resurfacers. The invention dramatically reduced the time needed to resurface ice rinks from over an hour to just minutes.",
          es: "Frank Zamboni revolucionó el mantenimiento del hielo al inventar la máquina de resurfacing de hielo en 1949. Su máquina se volvió tan icónica que 'Zamboni' se convirtió en un término genérico para todos los resurfacing de hielo. La invención redujo dramáticamente el tiempo necesario para resurfacing las pistas de hielo de más de una hora a solo minutos.",
          de: "Frank Zamboni revolutionierte die Eispflege durch die Erfindung der Eisaufbereitungsmaschine im Jahr 1949. Seine Maschine wurde so ikonisch, dass 'Zamboni' zum Gattungsbegriff für alle Eisaufbereitungsmaschinen wurde. Die Erfindung reduzierte die Zeit für die Eisaufbereitung dramatisch von über einer Stunde auf nur wenige Minuten.",
          nl: "Frank Zamboni revolutioneerde het ijsonderhoud door de ijsbereidingsmachine uit te vinden in 1949. Zijn machine werd zo iconisch dat 'Zamboni' een generieke term werd voor alle ijsbereidingsmachines. De uitvinding verminderde de tijd die nodig was om ijsbanen te herstellen dramatisch van meer dan een uur tot slechts minuten."
        }
      },
      {
        question: {
          en: "Which famous primatologist known for studying gorillas was born on January 16, 1932?",
          es: "¿Qué famosa primatóloga conocida por estudiar gorilas nació el 16 de enero de 1932?",
          de: "Welche berühmte Primatologin, bekannt für ihr Studium von Gorillas, wurde am 16. Januar 1932 geboren?",
          nl: "Welke beroemde primatoloog bekend om het bestuderen van gorilla's werd geboren op 16 januari 1932?"
        },
        options: [
          { en: "Jane Goodall", es: "Jane Goodall", de: "Jane Goodall", nl: "Jane Goodall" },
          { en: "Dian Fossey", es: "Dian Fossey", de: "Dian Fossey", nl: "Dian Fossey" },
          { en: "Frans de Waal", es: "Frans de Waal", de: "Frans de Waal", nl: "Frans de Waal" },
          { en: "Biruté Galdikas", es: "Biruté Galdikas", de: "Biruté Galdikas", nl: "Biruté Galdikas" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Dian Fossey spent nearly 20 years studying mountain gorillas in Rwanda, revolutionizing our understanding of these endangered primates. Her groundbreaking work, documented in 'Gorillas in the Mist', highlighted the importance of gorilla conservation. Tragically, she was murdered in 1985, likely due to her anti-poaching activism.",
          es: "Dian Fossey pasó casi 20 años estudiando gorilas de montaña en Ruanda, revolucionando nuestra comprensión de estos primates en peligro de extinción. Su trabajo pionero, documentado en 'Gorilas en la niebla', destacó la importancia de la conservación de gorilas. Trágicamente, fue asesinada en 1985, probablemente debido a su activismo contra la caza furtiva.",
          de: "Dian Fossey verbrachte fast 20 Jahre mit der Erforschung von Berggorillas in Ruanda und revolutionierte unser Verständnis dieser gefährdeten Primaten. Ihre bahnbrechende Arbeit, dokumentiert in 'Gorillas im Nebel', hob die Bedeutung des Gorillaschutz hervor. Tragischerweise wurde sie 1985 ermordet, wahrscheinlich aufgrund ihres Anti-Wilderei-Aktivismus.",
          nl: "Dian Fossey bracht bijna 20 jaar door met het bestuderen van berggorilla's in Rwanda en revolutioneerde ons begrip van deze bedreigde primaten. Haar baanbrekende werk, gedocumenteerd in 'Gorilla's in de mist', benadrukte het belang van gorillabescherming. Tragisch genoeg werd ze in 1985 vermoord, waarschijnlijk vanwege haar anti-stroperij activisme."
        }
      },
      {
        question: {
          en: "On January 16, 1919, the 18th Amendment was ratified, establishing what in the United States?",
          es: "El 16 de enero de 1919, se ratificó la Enmienda 18, estableciendo qué en los Estados Unidos?",
          de: "Am 16. Januar 1919 wurde das 18. Amendment ratifiziert und etablierte was in den Vereinigten Staaten?",
          nl: "Op 16 januari 1919 werd het 18e amendement geratificeerd, wat instelde wat in de Verenigde Staten?"
        },
        options: [
          { en: "Income tax", es: "Impuesto sobre la renta", de: "Einkommensteuer", nl: "Inkomstenbelasting" },
          { en: "Women's suffrage", es: "Sufragio femenino", de: "Frauenwahlrecht", nl: "Vrouwenkiesrecht" },
          { en: "Abolition of slavery", es: "Abolición de la esclavitud", de: "Abschaffung der Sklaverei", nl: "Afschaffing van slavernij" },
          { en: "Prohibition of alcohol", es: "Prohibición del alcohol", de: "Alkoholverbot", nl: "Alcoholverbod" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The 18th Amendment prohibited the manufacture, sale, and transportation of alcoholic beverages in the United States. This constitutional amendment led to the Prohibition era from 1920 to 1933, which resulted in widespread bootlegging and organized crime. It was repealed by the 21st Amendment in 1933, making it the only constitutional amendment ever repealed.",
          es: "La Enmienda 18 prohibió la fabricación, venta y transporte de bebidas alcohólicas en los Estados Unidos. Esta enmienda constitucional llevó a la era de la Prohibición de 1920 a 1933, que resultó en contrabando generalizado y crimen organizado. Fue derogada por la Enmienda 21 en 1933, convirtiéndola en la única enmienda constitucional jamás derogada.",
          de: "Das 18. Amendment verbot die Herstellung, den Verkauf und den Transport von alkoholischen Getränken in den Vereinigten Staaten. Diese Verfassungsänderung führte zur Prohibitionsära von 1920 bis 1933, die zu weit verbreitetem Schwarzmarkthandel und organisiertem Verbrechen führte. Es wurde 1933 durch das 21. Amendment aufgehoben und ist damit die einzige jemals aufgehobene Verfassungsänderung.",
          nl: "Het 18e amendement verbood de productie, verkoop en transport van alcoholische dranken in de Verenigde Staten. Dit grondwettelijk amendement leidde tot het Droogleggingstijdperk van 1920 tot 1933, wat resulteerde in wijdverbreide smokkel en georganiseerde misdaad. Het werd in 1933 herroepen door het 21e amendement, waardoor het het enige grondwettelijke amendement is dat ooit werd herroepen."
        }
      }
    ],

    // Day 17 - January 17th: Prohibition & Benjamin Franklin
    day17: [
      {
        question: {
          en: "In what year did Prohibition begin in the United States on January 17?",
          es: "¿En qué año comenzó la Prohibición en los Estados Unidos el 17 de enero?",
          de: "In welchem Jahr begann am 17. Januar die Prohibition in den Vereinigten Staaten?",
          nl: "In welk jaar begon de drooglegging in de Verenigde Staten op 17 januari?"
        },
        options: [
          { en: "1919", es: "1919", de: "1919", nl: "1919" },
          { en: "1921", es: "1921", de: "1921", nl: "1921" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1918", es: "1918", de: "1918", nl: "1918" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Prohibition officially began with the Volstead Act taking effect on January 17, 1920, enforcing the 18th Amendment. The law banned the production, importation, and sale of alcoholic beverages. This 13-year period saw the rise of speakeasies, bootleggers, and organized crime syndicates.",
          es: "La Prohibición comenzó oficialmente con la entrada en vigor de la Ley Volstead el 17 de enero de 1920, haciendo cumplir la Enmienda 18. La ley prohibió la producción, importación y venta de bebidas alcohólicas. Este período de 13 años vio el auge de los bares clandestinos, contrabandistas y sindicatos del crimen organizado.",
          de: "Die Prohibition begann offiziell mit dem Inkrafttreten des Volstead Act am 17. Januar 1920, der das 18. Amendment durchsetzte. Das Gesetz verbot die Herstellung, Einfuhr und den Verkauf von alkoholischen Getränken. Diese 13-jährige Periode sah den Aufstieg von Flüsterkneipen, Schmugglern und organisierten Verbrechersyndikat.",
          nl: "De Drooglegging begon officieel met de inwerkingtreding van de Volstead Act op 17 januari 1920, die het 18e amendement handhaafde. De wet verbood de productie, import en verkoop van alcoholische dranken. Deze 13-jarige periode zag de opkomst van illegale drankgelegenheden, smokkelaars en georganiseerde misdaadsyndicaten."
        }
      },
      {
        question: {
          en: "On January 17, 1929, which famous cartoon character created by Elzie Segar made his first appearance?",
          es: "El 17 de enero de 1929, ¿qué famoso personaje de dibujos animados creado por Elzie Segar hizo su primera aparición?",
          de: "Am 17. Januar 1929 hatte welche berühmte Zeichentrickfigur, erschaffen von Elzie Segar, ihren ersten Auftritt?",
          nl: "Op 17 januari 1929 maakte welk beroemd stripfiguur gecreëerd door Elzie Segar zijn eerste optreden?"
        },
        options: [
          { en: "Mickey Mouse", es: "Mickey Mouse", de: "Micky Maus", nl: "Mickey Mouse" },
          { en: "Donald Duck", es: "Pato Donald", de: "Donald Duck", nl: "Donald Duck" },
          { en: "Bugs Bunny", es: "Bugs Bunny", de: "Bugs Bunny", nl: "Bugs Bunny" },
          { en: "Popeye", es: "Popeye", de: "Popeye", nl: "Popeye" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Popeye the Sailor Man first appeared in the 'Thimble Theatre' comic strip on January 17, 1929. The character became an immediate sensation with his spinach-eating superpowers and distinctive personality. Popeye went on to star in animated cartoons, making him one of the most iconic characters in American pop culture.",
          es: "Popeye el Marino apareció por primera vez en la tira cómica 'Thimble Theatre' el 17 de enero de 1929. El personaje se convirtió en una sensación inmediata con sus superpoderes de comer espinacas y personalidad distintiva. Popeye protagonizó dibujos animados, convirtiéndolo en uno de los personajes más icónicos de la cultura popular estadounidense.",
          de: "Popeye der Seemann erschien erstmals am 17. Januar 1929 im Comic-Strip 'Thimble Theatre'. Die Figur wurde mit ihren Spinat essenden Superkräften und ihrer charakteristischen Persönlichkeit sofort zur Sensation. Popeye spielte in Zeichentrickfilmen mit und wurde zu einer der ikonischsten Figuren der amerikanischen Popkultur.",
          nl: "Popeye de Zeeman verscheen voor het eerst in de stripverhaal 'Thimble Theatre' op 17 januari 1929. Het personage werd onmiddellijk een sensatie met zijn spinazie-etende superkrachten en kenmerkende persoonlijkheid. Popeye speelde in tekenfilms en werd een van de meest iconische personages in de Amerikaanse popcultuur."
        }
      },
      {
        question: {
          en: "Which American founding father was born on January 17, 1706?",
          es: "¿Qué padre fundador estadounidense nació el 17 de enero de 1706?",
          de: "Welcher amerikanische Gründervater wurde am 17. Januar 1706 geboren?",
          nl: "Welke Amerikaanse grondlegger werd geboren op 17 januari 1706?"
        },
        options: [
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Benjamin Franklin was a polymath who made major contributions as a scientist, inventor, diplomat, and author. He helped draft the Declaration of Independence and the U.S. Constitution. His experiments with electricity, invention of bifocals and the lightning rod, and diplomatic achievements in France made him one of America's most celebrated figures.",
          es: "Benjamin Franklin fue un polímata que hizo importantes contribuciones como científico, inventor, diplomático y autor. Ayudó a redactar la Declaración de Independencia y la Constitución de EE.UU. Sus experimentos con electricidad, invención de las gafas bifocales y el pararrayos, y logros diplomáticos en Francia lo convirtieron en una de las figuras más celebradas de Estados Unidos.",
          de: "Benjamin Franklin war ein Universalgelehrter, der bedeutende Beiträge als Wissenschaftler, Erfinder, Diplomat und Autor leistete. Er half bei der Ausarbeitung der Unabhängigkeitserklärung und der US-Verfassung. Seine Experimente mit Elektrizität, die Erfindung der Bifokalbrille und des Blitzableiters sowie seine diplomatischen Erfolge in Frankreich machten ihn zu einer der gefeiertsten Persönlichkeiten Amerikas.",
          nl: "Benjamin Franklin was een polymath die belangrijke bijdragen leverde als wetenschapper, uitvinder, diplomaat en auteur. Hij hielp de Onafhankelijkheidsverklaring en de Amerikaanse Grondwet opstellen. Zijn experimenten met elektriciteit, uitvinding van de bifocale bril en de bliksemafleider, en diplomatieke prestaties in Frankrijk maakten hem een van Amerika's meest gevierde figuren."
        }
      },
      {
        question: {
          en: "Which legendary boxer born on January 17, 1942, was known as 'The Greatest'?",
          es: "¿Qué boxeador legendario nacido el 17 de enero de 1942 era conocido como 'El Más Grande'?",
          de: "Welcher legendäre Boxer, geboren am 17. Januar 1942, war bekannt als 'The Greatest'?",
          nl: "Welke legendarische bokser geboren op 17 januari 1942 stond bekend als 'The Greatest'?"
        },
        options: [
          { en: "George Foreman", es: "George Foreman", de: "George Foreman", nl: "George Foreman" },
          { en: "Joe Frazier", es: "Joe Frazier", de: "Joe Frazier", nl: "Joe Frazier" },
          { en: "Mike Tyson", es: "Mike Tyson", de: "Mike Tyson", nl: "Mike Tyson" },
          { en: "Muhammad Ali", es: "Muhammad Ali", de: "Muhammad Ali", nl: "Muhammad Ali" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Muhammad Ali, born Cassius Clay, was a three-time world heavyweight champion and cultural icon. Beyond his boxing prowess, he was known for his activism, refusing military service during the Vietnam War on religious and moral grounds. His charisma, poetry, and social consciousness made him one of the most influential athletes of the 20th century.",
          es: "Muhammad Ali, nacido Cassius Clay, fue campeón mundial de peso pesado en tres ocasiones e ícono cultural. Más allá de su destreza en el boxeo, fue conocido por su activismo, rechazando el servicio militar durante la Guerra de Vietnam por motivos religiosos y morales. Su carisma, poesía y conciencia social lo convirtieron en uno de los atletas más influyentes del siglo XX.",
          de: "Muhammad Ali, geboren als Cassius Clay, war dreifacher Schwergewichtsweltmeister und kulturelles Idol. Über seine boxerischen Fähigkeiten hinaus war er für seinen Aktivismus bekannt und verweigerte aus religiösen und moralischen Gründen den Militärdienst während des Vietnamkriegs. Sein Charisma, seine Poesie und sein soziales Bewusstsein machten ihn zu einem der einflussreichsten Athleten des 20. Jahrhunderts.",
          nl: "Muhammad Ali, geboren als Cassius Clay, was een drievoudig wereldkampioen zwaargewicht en cultureel icoon. Naast zijn boksvaardigheid stond hij bekend om zijn activisme, waarbij hij militaire dienst weigerde tijdens de Vietnam-oorlog om religieuze en morele redenen. Zijn charisma, poëzie en sociaal bewustzijn maakten hem een van de meest invloedrijke atleten van de 20e eeuw."
        }
      },
      {
        question: {
          en: "Which beloved actress known for 'The Golden Girls' was born on January 17, 1922?",
          es: "¿Qué querida actriz conocida por 'Las chicas de oro' nació el 17 de enero de 1922?",
          de: "Welche beliebte Schauspielerin, bekannt für 'Golden Girls', wurde am 17. Januar 1922 geboren?",
          nl: "Welke geliefde actrice bekend van 'The Golden Girls' werd geboren op 17 januari 1922?"
        },
        options: [
          { en: "Bea Arthur", es: "Bea Arthur", de: "Bea Arthur", nl: "Bea Arthur" },
          { en: "Betty White", es: "Betty White", de: "Betty White", nl: "Betty White" },
          { en: "Estelle Getty", es: "Estelle Getty", de: "Estelle Getty", nl: "Estelle Getty" },
          { en: "Rue McClanahan", es: "Rue McClanahan", de: "Rue McClanahan", nl: "Rue McClanahan" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Betty White had one of the longest television careers in history, spanning over eight decades. She became a cultural icon through shows like 'The Golden Girls' and 'The Mary Tyler Moore Show'. Her quick wit, comedic timing, and warm personality made her beloved by generations of fans until her passing in 2021 at age 99.",
          es: "Betty White tuvo una de las carreras televisivas más largas de la historia, abarcando más de ocho décadas. Se convirtió en un ícono cultural a través de programas como 'Las chicas de oro' y 'The Mary Tyler Moore Show'. Su ingenio rápido, timing cómico y personalidad cálida la hicieron amada por generaciones de fans hasta su fallecimiento en 2021 a los 99 años.",
          de: "Betty White hatte eine der längsten Fernsehkarrieren in der Geschichte, die sich über acht Jahrzehnte erstreckte. Sie wurde durch Shows wie 'Golden Girls' und 'The Mary Tyler Moore Show' zur kulturellen Ikone. Ihr schneller Witz, komödiantisches Timing und ihre warmherzige Persönlichkeit machten sie bei Generationen von Fans beliebt bis zu ihrem Tod 2021 im Alter von 99 Jahren.",
          nl: "Betty White had een van de langste televisiecarrières in de geschiedenis, die meer dan acht decennia besloeg. Ze werd een cultureel icoon door shows als 'The Golden Girls' en 'The Mary Tyler Moore Show'. Haar snelle humor, komische timing en warme persoonlijkheid maakten haar geliefd bij generaties fans tot haar overlijden in 2021 op 99-jarige leeftijd."
        }
      }
    ],

    // Day 18 - January 18th: Captain Cook & MLK Day
    day18: [
      {
        question: {
          en: "In what year did Captain James Cook discover the Hawaiian Islands on January 18?",
          es: "¿En qué año descubrió el Capitán James Cook las Islas Hawaianas el 18 de enero?",
          de: "In welchem Jahr entdeckte Kapitän James Cook am 18. Januar die Hawaiianischen Inseln?",
          nl: "In welk jaar ontdekte Kapitein James Cook de Hawaïaanse Eilanden op 18 januari?"
        },
        options: [
          { en: "1770", es: "1770", de: "1770", nl: "1770" },
          { en: "1780", es: "1780", de: "1780", nl: "1780" },
          { en: "1778", es: "1778", de: "1778", nl: "1778" },
          { en: "1775", es: "1775", de: "1775", nl: "1775" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Captain James Cook encountered the Hawaiian Islands during his third Pacific voyage, making the first recorded European contact with the archipelago. He initially named them the 'Sandwich Islands' after the Earl of Sandwich. Cook was killed in Hawaii about a year later during a dispute with native Hawaiians in 1779.",
          es: "El Capitán James Cook encontró las Islas Hawaianas durante su tercer viaje por el Pacífico, realizando el primer contacto europeo registrado con el archipiélago. Inicialmente las nombró 'Islas Sandwich' en honor al Conde de Sandwich. Cook fue asesinado en Hawái aproximadamente un año después durante una disputa con hawaianos nativos en 1779.",
          de: "Kapitän James Cook stieß während seiner dritten Pazifikreise auf die Hawaiianischen Inseln und hatte damit den ersten dokumentierten europäischen Kontakt mit dem Archipel. Er nannte sie zunächst 'Sandwich-Inseln' nach dem Earl of Sandwich. Cook wurde etwa ein Jahr später während eines Streits mit einheimischen Hawaiianern im Jahr 1779 in Hawaii getötet.",
          nl: "Kapitein James Cook ontdekte de Hawaïaanse Eilanden tijdens zijn derde Pacifische reis, wat het eerste geregistreerde Europese contact met de archipel betekende. Hij noemde ze aanvankelijk de 'Sandwich-eilanden' naar de graaf van Sandwich. Cook werd ongeveer een jaar later tijdens een geschil met inheemse Hawaiianen in 1779 op Hawaii gedood."
        }
      },
      {
        question: {
          en: "On January 18, 1911, which pioneering aviator made the first aircraft landing on a ship?",
          es: "El 18 de enero de 1911, ¿qué aviador pionero realizó el primer aterrizaje de un avión en un barco?",
          de: "Am 18. Januar 1911 führte welcher Pionier-Flieger die erste Flugzeuglandung auf einem Schiff durch?",
          nl: "Op 18 januari 1911 maakte welke baanbrekende vlieger de eerste vliegtuiglanding op een schip?"
        },
        options: [
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" },
          { en: "Charles Lindbergh", es: "Charles Lindbergh", de: "Charles Lindbergh", nl: "Charles Lindbergh" },
          { en: "Orville Wright", es: "Orville Wright", de: "Orville Wright", nl: "Orville Wright" },
          { en: "Eugene Ely", es: "Eugene Ely", de: "Eugene Ely", nl: "Eugene Ely" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Eugene Ely landed his Curtiss pusher biplane on the USS Pennsylvania in San Francisco Bay, demonstrating the feasibility of naval aviation. This historic landing used arresting wires, a system still used on aircraft carriers today. Ely's pioneering work laid the foundation for modern carrier-based naval warfare.",
          es: "Eugene Ely aterrizó su biplano Curtiss en el USS Pennsylvania en la Bahía de San Francisco, demostrando la viabilidad de la aviación naval. Este aterrizaje histórico utilizó cables de arresto, un sistema que todavía se usa en portaaviones hoy. El trabajo pionero de Ely sentó las bases para la guerra naval moderna basada en portaaviones.",
          de: "Eugene Ely landete sein Curtiss-Doppeldecker auf der USS Pennsylvania in der Bucht von San Francisco und demonstrierte damit die Machbarkeit der Marineaviatik. Diese historische Landung nutzte Fangseile, ein System, das heute noch auf Flugzeugträgern verwendet wird. Elys Pionierarbeit legte den Grundstein für moderne trägergestützte Seekriegsführung.",
          nl: "Eugene Ely landde zijn Curtiss dubbeldekker vliegtuig op de USS Pennsylvania in de baai van San Francisco, waarmee hij de haalbaarheid van marineluchtvaart aantoonde. Deze historische landing gebruikte vanghaken, een systeem dat nog steeds op vliegdekschepen wordt gebruikt. Ely's baanbrekende werk legde de basis voor moderne vliegdekschip-gebaseerde zeeoorlogvoering."
        }
      },
      {
        question: {
          en: "In what year did the Paris Peace Conference begin on January 18, leading to the Treaty of Versailles?",
          es: "¿En qué año comenzó la Conferencia de Paz de París el 18 de enero, que condujo al Tratado de Versalles?",
          de: "In welchem Jahr begann am 18. Januar die Pariser Friedenskonferenz, die zum Vertrag von Versailles führte?",
          nl: "In welk jaar begon de Vredesconferentie van Parijs op 18 januari, die leidde tot het Verdrag van Versailles?"
        },
        options: [
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1918", es: "1918", de: "1918", nl: "1918" },
          { en: "1919", es: "1919", de: "1919", nl: "1919" },
          { en: "1917", es: "1917", de: "1917", nl: "1917" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Paris Peace Conference gathered Allied leaders to establish peace terms after World War I, resulting in the Treaty of Versailles. The conference redrew European borders and imposed heavy reparations on Germany. Many historians argue that the harsh terms contributed to economic instability and the rise of extremism in Germany, ultimately leading to World War II.",
          es: "La Conferencia de Paz de París reunió a líderes aliados para establecer términos de paz después de la Primera Guerra Mundial, resultando en el Tratado de Versalles. La conferencia redibujó las fronteras europeas e impuso fuertes reparaciones a Alemania. Muchos historiadores argumentan que los términos duros contribuyeron a la inestabilidad económica y el auge del extremismo en Alemania, finalmente conduciendo a la Segunda Guerra Mundial.",
          de: "Die Pariser Friedenskonferenz brachte alliierte Führer zusammen, um nach dem Ersten Weltkrieg Friedensbedingungen festzulegen, was zum Vertrag von Versailles führte. Die Konferenz zeichnete europäische Grenzen neu und verhängte schwere Reparationen gegen Deutschland. Viele Historiker argumentieren, dass die harten Bedingungen zur wirtschaftlichen Instabilität und zum Aufstieg des Extremismus in Deutschland beitrugen, was letztendlich zum Zweiten Weltkrieg führte.",
          nl: "De Vredesconferentie van Parijs bracht geallieerde leiders samen om vredesvoorwaarden vast te stellen na de Eerste Wereldoorlog, wat resulteerde in het Verdrag van Versailles. De conferentie hertekende Europese grenzen en legde zware herstelbetalingen op aan Duitsland. Veel historici beweren dat de harde voorwaarden bijdroegen aan economische instabiliteit en de opkomst van extremisme in Duitsland, wat uiteindelijk leidde tot de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "In what year was Martin Luther King Jr. Day first celebrated as a federal holiday on January 18?",
          es: "¿En qué año se celebró por primera vez el Día de Martin Luther King Jr. como feriado federal el 18 de enero?",
          de: "In welchem Jahr wurde der Martin Luther King Jr. Day am 18. Januar zum ersten Mal als Bundesfeiertag gefeiert?",
          nl: "In welk jaar werd Martin Luther King Jr. Day voor het eerst gevierd als federale feestdag op 18 januari?"
        },
        options: [
          { en: "1983", es: "1983", de: "1983", nl: "1983" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" },
          { en: "1986", es: "1986", de: "1986", nl: "1986" },
          { en: "1985", es: "1985", de: "1985", nl: "1985" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Martin Luther King Jr. Day honors the civil rights leader who advocated for racial equality through nonviolent resistance. Signed into law by President Reagan in 1983, it was first observed as a federal holiday in 1986. The holiday is celebrated on the third Monday of January, close to King's birthday on January 15.",
          es: "El Día de Martin Luther King Jr. honra al líder de derechos civiles que abogó por la igualdad racial a través de la resistencia no violenta. Firmado como ley por el presidente Reagan en 1983, se observó por primera vez como feriado federal en 1986. El feriado se celebra el tercer lunes de enero, cerca del cumpleaños de King el 15 de enero.",
          de: "Der Martin Luther King Jr. Day ehrt den Bürgerrechtsführer, der sich durch gewaltfreien Widerstand für Rassengleichheit einsetzte. Von Präsident Reagan 1983 zum Gesetz unterzeichnet, wurde er 1986 erstmals als Bundesfeiertag begangen. Der Feiertag wird am dritten Montag im Januar gefeiert, nahe Kings Geburtstag am 15. Januar.",
          nl: "Martin Luther King Jr. Day eert de burgerrechtenleider die pleitte voor rassengelijkheid door geweldloos verzet. Ondertekend door president Reagan in 1983, werd het voor het eerst als federale feestdag gevierd in 1986. De feestdag wordt gevierd op de derde maandag van januari, dicht bij Kings verjaardag op 15 januari."
        }
      },
      {
        question: {
          en: "On January 18, 2005, the world's largest commercial aircraft made its maiden flight. Which aircraft was it?",
          es: "El 18 de enero de 2005, el avión comercial más grande del mundo realizó su vuelo inaugural. ¿Qué avión fue?",
          de: "Am 18. Januar 2005 führte das größte Verkehrsflugzeug der Welt seinen Jungfernflug durch. Welches Flugzeug war es?",
          nl: "Op 18 januari 2005 maakte 's werelds grootste commerciële vliegtuig zijn eerste vlucht. Welk vliegtuig was het?"
        },
        options: [
          { en: "Boeing 777", es: "Boeing 777", de: "Boeing 777", nl: "Boeing 777" },
          { en: "Airbus A340", es: "Airbus A340", de: "Airbus A340", nl: "Airbus A340" },
          { en: "Airbus A380", es: "Airbus A380", de: "Airbus A380", nl: "Airbus A380" },
          { en: "Boeing 747", es: "Boeing 747", de: "Boeing 747", nl: "Boeing 747" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Airbus A380 is the world's largest passenger airliner, capable of carrying over 800 passengers in an all-economy configuration. Its double-deck design revolutionized long-haul air travel with unprecedented space and comfort. The A380 entered commercial service in 2007 with Singapore Airlines, though production ended in 2021 due to changing market demands.",
          es: "El Airbus A380 es el avión de pasajeros más grande del mundo, capaz de transportar más de 800 pasajeros en una configuración totalmente económica. Su diseño de doble cubierta revolucionó los viajes aéreos de larga distancia con espacio y comodidad sin precedentes. El A380 entró en servicio comercial en 2007 con Singapore Airlines, aunque la producción terminó en 2021 debido a las demandas cambiantes del mercado.",
          de: "Der Airbus A380 ist das größte Passagierflugzeug der Welt und kann in einer reinen Economy-Konfiguration über 800 Passagiere befördern. Sein Doppeldeckdesign revolutionierte Langstreckenflüge mit beispiellosem Raum und Komfort. Der A380 ging 2007 mit Singapore Airlines in den kommerziellen Dienst, obwohl die Produktion 2021 aufgrund sich ändernder Marktanforderungen endete.",
          nl: "De Airbus A380 is 's werelds grootste passagiersvliegtuig, dat meer dan 800 passagiers kan vervoeren in een volledig economy-configuratie. Het dubbeldekkersontwerp revolutioneerde langeafstandsvluchten met ongekende ruimte en comfort. De A380 ging in 2007 in commerciële dienst bij Singapore Airlines, hoewel de productie in 2021 eindigde vanwege veranderende marktvereisten."
        }
      }
    ],

    // Day 19 - January 19th: Indira Gandhi & Edgar Allan Poe
    day19: [
      {
        question: {
          en: "In what year did Indira Gandhi become the Prime Minister of India on January 19?",
          es: "¿En qué año se convirtió Indira Gandhi en la Primera Ministra de India el 19 de enero?",
          de: "In welchem Jahr wurde Indira Gandhi am 19. Januar Premierministerin von Indien?",
          nl: "In welk jaar werd Indira Gandhi op 19 januari premier van India?"
        },
        options: [
          { en: "1970", es: "1970", de: "1970", nl: "1970" },
          { en: "1964", es: "1964", de: "1964", nl: "1964" },
          { en: "1966", es: "1966", de: "1966", nl: "1966" },
          { en: "1968", es: "1968", de: "1968", nl: "1968" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Indira Gandhi became India's first and only female Prime Minister, serving from 1966 to 1977 and again from 1980 until her assassination in 1984. She was the daughter of Jawaharlal Nehru, India's first Prime Minister. Gandhi was known for her strong leadership during challenging times, including the Indo-Pakistani War and the Green Revolution.",
          es: "Indira Gandhi se convirtió en la primera y única Primera Ministra de India, sirviendo desde 1966 hasta 1977 y nuevamente desde 1980 hasta su asesinato en 1984. Era hija de Jawaharlal Nehru, el primer Primer Ministro de India. Gandhi fue conocida por su fuerte liderazgo durante tiempos desafiantes, incluyendo la Guerra Indo-Pakistaní y la Revolución Verde.",
          de: "Indira Gandhi wurde Indiens erste und einzige weibliche Premierministerin und diente von 1966 bis 1977 und erneut von 1980 bis zu ihrer Ermordung 1984. Sie war die Tochter von Jawaharlal Nehru, Indiens erstem Premierminister. Gandhi war bekannt für ihre starke Führung in herausfordernden Zeiten, einschließlich des Indisch-Pakistanischen Krieges und der Grünen Revolution.",
          nl: "Indira Gandhi werd India's eerste en enige vrouwelijke premier, die diende van 1966 tot 1977 en opnieuw van 1980 tot haar moord in 1984. Ze was de dochter van Jawaharlal Nehru, India's eerste premier. Gandhi stond bekend om haar sterke leiderschap tijdens uitdagende tijden, waaronder de Indiaas-Pakistaanse oorlog en de Groene Revolutie."
        }
      },
      {
        question: {
          en: "In what year did the popular TV show 'Happy Days' premiere on January 19?",
          es: "¿En qué año se estrenó el popular programa de televisión 'Happy Days' el 19 de enero?",
          de: "In welchem Jahr hatte die beliebte TV-Show 'Happy Days' am 19. Januar Premiere?",
          nl: "In welk jaar ging de populaire tv-show 'Happy Days' in première op 19 januari?"
        },
        options: [
          { en: "1975", es: "1975", de: "1975", nl: "1975" },
          { en: "1973", es: "1973", de: "1973", nl: "1973" },
          { en: "1974", es: "1974", de: "1974", nl: "1974" },
          { en: "1972", es: "1972", de: "1972", nl: "1972" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Happy Days' became one of television's most beloved sitcoms, depicting American life in the 1950s and early 1960s. The show launched the careers of Ron Howard and Henry Winkler, whose character 'The Fonz' became a cultural icon. The series ran for 11 seasons and spawned successful spin-offs including 'Laverne & Shirley' and 'Mork & Mindy'.",
          es: "'Happy Days' se convirtió en uno de los sitcoms más queridos de la televisión, representando la vida estadounidense en los años 1950 y principios de 1960. El programa lanzó las carreras de Ron Howard y Henry Winkler, cuyo personaje 'The Fonz' se convirtió en un ícono cultural. La serie duró 11 temporadas y generó spin-offs exitosos incluyendo 'Laverne & Shirley' y 'Mork & Mindy'.",
          de: "'Happy Days' wurde zu einer der beliebtesten Sitcoms des Fernsehens und stellte das amerikanische Leben in den 1950er und frühen 1960er Jahren dar. Die Show startete die Karrieren von Ron Howard und Henry Winkler, dessen Charakter 'The Fonz' zu einer kulturellen Ikone wurde. Die Serie lief 11 Staffeln und brachte erfolgreiche Ableger hervor, darunter 'Laverne & Shirley' und 'Mork & Mindy'.",
          nl: "'Happy Days' werd een van de meest geliefde sitcoms op televisie, die het Amerikaanse leven in de jaren 1950 en begin jaren 1960 uitbeeldde. De show lanceerde de carrières van Ron Howard en Henry Winkler, wiens personage 'The Fonz' een cultureel icoon werd. De serie liep 11 seizoenen en bracht succesvolle spin-offs voort, waaronder 'Laverne & Shirley' en 'Mork & Mindy'."
        }
      },
      {
        question: {
          en: "On January 19, 1969, The Beatles performed their last public concert on which location?",
          es: "El 19 de enero de 1969, The Beatles realizaron su último concierto público en qué ubicación?",
          de: "Am 19. Januar 1969 gaben The Beatles ihr letztes öffentliches Konzert an welchem Ort?",
          nl: "Op 19 januari 1969 gaven The Beatles hun laatste openbare concert op welke locatie?"
        },
        options: [
          { en: "Royal Albert Hall", es: "Royal Albert Hall", de: "Royal Albert Hall", nl: "Royal Albert Hall" },
          { en: "Abbey Road Studios", es: "Abbey Road Studios", de: "Abbey Road Studios", nl: "Abbey Road Studios" },
          { en: "Shea Stadium", es: "Shea Stadium", de: "Shea Stadium", nl: "Shea Stadium" },
          { en: "Rooftop of Apple Corps", es: "Azotea de Apple Corps", de: "Dach von Apple Corps", nl: "Dak van Apple Corps" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Beatles' legendary rooftop concert at their Apple Corps headquarters in London was an impromptu 42-minute performance that stopped traffic. This historic event was filmed for the documentary 'Let It Be' and marked their final public performance as a band. Police eventually shut down the concert due to noise complaints from neighboring businesses.",
          es: "El legendario concierto en la azotea de The Beatles en su sede de Apple Corps en Londres fue una actuación improvisada de 42 minutos que detuvo el tráfico. Este evento histórico fue filmado para el documental 'Let It Be' y marcó su actuación pública final como banda. La policía finalmente cerró el concierto debido a quejas de ruido de negocios vecinos.",
          de: "Das legendäre Dachkonzert der Beatles am Hauptsitz ihrer Apple Corps in London war eine improvisierte 42-minütige Aufführung, die den Verkehr zum Stillstand brachte. Dieses historische Ereignis wurde für den Dokumentarfilm 'Let It Be' gefilmt und markierte ihre letzte öffentliche Aufführung als Band. Die Polizei beendete schließlich das Konzert aufgrund von Lärmbeschwerden benachbarter Geschäfte.",
          nl: "Het legendarische dakconcert van The Beatles op hun Apple Corps hoofdkantoor in Londen was een geïmproviseerde 42 minuten durende voorstelling die het verkeer stillegde. Deze historische gebeurtenis werd gefilmd voor de documentaire 'Let It Be' en markeerde hun laatste openbare optreden als band. De politie beëindigde uiteindelijk het concert vanwege geluidsklachten van naburige bedrijven."
        }
      },
      {
        question: {
          en: "Which famous American poet and author was born on January 19, 1809?",
          es: "¿Qué famoso poeta y autor estadounidense nació el 19 de enero de 1809?",
          de: "Welcher berühmte amerikanische Dichter und Autor wurde am 19. Januar 1809 geboren?",
          nl: "Welke beroemde Amerikaanse dichter en auteur werd geboren op 19 januari 1809?"
        },
        options: [
          { en: "Ralph Waldo Emerson", es: "Ralph Waldo Emerson", de: "Ralph Waldo Emerson", nl: "Ralph Waldo Emerson" },
          { en: "Henry Wadsworth Longfellow", es: "Henry Wadsworth Longfellow", de: "Henry Wadsworth Longfellow", nl: "Henry Wadsworth Longfellow" },
          { en: "Edgar Allan Poe", es: "Edgar Allan Poe", de: "Edgar Allan Poe", nl: "Edgar Allan Poe" },
          { en: "Walt Whitman", es: "Walt Whitman", de: "Walt Whitman", nl: "Walt Whitman" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Edgar Allan Poe pioneered the modern detective story and perfected the tale of psychological horror. His most famous works include 'The Raven', 'The Tell-Tale Heart', and 'The Fall of the House of Usher'. Poe's innovative writing style and exploration of dark themes profoundly influenced American and world literature.",
          es: "Edgar Allan Poe fue pionero de la historia de detectives moderna y perfeccionó el relato de horror psicológico. Sus obras más famosas incluyen 'El cuervo', 'El corazón delator' y 'La caída de la casa Usher'. El estilo innovador de escritura de Poe y la exploración de temas oscuros influyeron profundamente en la literatura estadounidense y mundial.",
          de: "Edgar Allan Poe war Pionier der modernen Detektivgeschichte und perfektionierte die Erzählung des psychologischen Horrors. Seine berühmtesten Werke umfassen 'Der Rabe', 'Das verräterische Herz' und 'Der Untergang des Hauses Usher'. Poes innovativer Schreibstil und die Erforschung dunkler Themen beeinflussten die amerikanische und Weltliteratur tiefgreifend.",
          nl: "Edgar Allan Poe was pionier van het moderne detectiveverhaal en perfectioneerde het verhaal van psychologische horror. Zijn beroemdste werken zijn 'De raaf', 'Het verklikkende hart' en 'De ondergang van het huis Usher'. Poe's innovatieve schrijfstijl en verkenning van donkere thema's beïnvloedden de Amerikaanse en wereldliteratuur diepgaand."
        }
      },
      {
        question: {
          en: "Which Confederate general was born on January 19, 1807?",
          es: "¿Qué general confederado nació el 19 de enero de 1807?",
          de: "Welcher konföderierte General wurde am 19. Januar 1807 geboren?",
          nl: "Welke generaal van de Confederatie werd geboren op 19 januari 1807?"
        },
        options: [
          { en: "Jefferson Davis", es: "Jefferson Davis", de: "Jefferson Davis", nl: "Jefferson Davis" },
          { en: "J.E.B. Stuart", es: "J.E.B. Stuart", de: "J.E.B. Stuart", nl: "J.E.B. Stuart" },
          { en: "Robert E. Lee", es: "Robert E. Lee", de: "Robert E. Lee", nl: "Robert E. Lee" },
          { en: "Stonewall Jackson", es: "Stonewall Jackson", de: "Stonewall Jackson", nl: "Stonewall Jackson" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Robert E. Lee commanded the Confederate Army of Northern Virginia during the American Civil War and is considered one of the greatest military strategists in American history. Despite his tactical brilliance, Lee surrendered to Ulysses S. Grant at Appomattox Court House in 1865. After the war, he became president of Washington College (now Washington and Lee University) and advocated for national reconciliation.",
          es: "Robert E. Lee comandó el Ejército Confederado de Virginia del Norte durante la Guerra Civil Estadounidense y es considerado uno de los más grandes estrategas militares en la historia estadounidense. A pesar de su brillantez táctica, Lee se rindió a Ulysses S. Grant en Appomattox Court House en 1865. Después de la guerra, se convirtió en presidente de Washington College (ahora Washington and Lee University) y abogó por la reconciliación nacional.",
          de: "Robert E. Lee befehligte die Konföderierten Armee von Nord-Virginia während des Amerikanischen Bürgerkriegs und gilt als einer der größten Militärstrategen in der amerikanischen Geschichte. Trotz seiner taktischen Brillanz kapitulierte Lee vor Ulysses S. Grant in Appomattox Court House 1865. Nach dem Krieg wurde er Präsident des Washington College (heute Washington and Lee University) und setzte sich für nationale Versöhnung ein.",
          nl: "Robert E. Lee commandeerde het Geconfedereerde Leger van Noord-Virginia tijdens de Amerikaanse Burgeroorlog en wordt beschouwd als een van de grootste militaire strategen in de Amerikaanse geschiedenis. Ondanks zijn tactische briljantie gaf Lee zich over aan Ulysses S. Grant bij Appomattox Court House in 1865. Na de oorlog werd hij president van Washington College (nu Washington and Lee University) en pleitte voor nationale verzoening."
        }
      }
    ],

    // Day 20 - January 20th: Presidential Inaugurations
    day20: [
      {
        question: {
          en: "In what year was John F. Kennedy inaugurated as President on January 20?",
          es: "¿En qué año fue inaugurado John F. Kennedy como Presidente el 20 de enero?",
          de: "In welchem Jahr wurde John F. Kennedy am 20. Januar als Präsident vereidigt?",
          nl: "In welk jaar werd John F. Kennedy op 20 januari ingezworen als president?"
        },
        options: [
          { en: "1961", es: "1961", de: "1961", nl: "1961" },
          { en: "1962", es: "1962", de: "1962", nl: "1962" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" },
          { en: "1963", es: "1963", de: "1963", nl: "1963" }
        ],
        correctIndex: 0,
        explanation: {
          en: "John F. Kennedy became the youngest elected president and the first Catholic president in American history. His famous inaugural address included the iconic phrase 'Ask not what your country can do for you—ask what you can do for your country.' Kennedy's presidency, though tragically cut short by assassination in 1963, was marked by the Space Race, Cuban Missile Crisis, and the Civil Rights Movement.",
          es: "John F. Kennedy se convirtió en el presidente electo más joven y el primer presidente católico en la historia estadounidense. Su famoso discurso inaugural incluyó la frase icónica 'No preguntes qué puede hacer tu país por ti, pregunta qué puedes hacer tú por tu país.' La presidencia de Kennedy, aunque trágicamente interrumpida por su asesinato en 1963, estuvo marcada por la Carrera Espacial, la Crisis de los Misiles en Cuba y el Movimiento de Derechos Civiles.",
          de: "John F. Kennedy wurde der jüngste gewählte Präsident und der erste katholische Präsident in der amerikanischen Geschichte. Seine berühmte Antrittsrede enthielt den ikonischen Satz 'Frage nicht, was dein Land für dich tun kann—frage, was du für dein Land tun kannst.' Kennedys Präsidentschaft, obwohl tragisch durch Attentat 1963 beendet, war geprägt vom Weltraumrennen, der Kubakrise und der Bürgerrechtsbewegung.",
          nl: "John F. Kennedy werd de jongst gekozen president en de eerste katholieke president in de Amerikaanse geschiedenis. Zijn beroemde inaugurele toespraak bevatte de iconische zin 'Vraag niet wat je land voor jou kan doen—vraag wat jij voor je land kunt doen.' Kennedy's presidentschap, hoewel tragisch beëindigd door moord in 1963, werd gekenmerkt door de Ruimterace, de Cubacrisis en de Burgerrechtenbeweging."
        }
      },
      {
        question: {
          en: "In what year was Barack Obama inaugurated as the first African American President on January 20?",
          es: "¿En qué año fue inaugurado Barack Obama como el primer Presidente afroamericano el 20 de enero?",
          de: "In welchem Jahr wurde Barack Obama am 20. Januar als erster afroamerikanischer Präsident vereidigt?",
          nl: "In welk jaar werd Barack Obama op 20 januari ingezworen als eerste Afro-Amerikaanse president?"
        },
        options: [
          { en: "2007", es: "2007", de: "2007", nl: "2007" },
          { en: "2009", es: "2009", de: "2009", nl: "2009" },
          { en: "2010", es: "2010", de: "2010", nl: "2010" },
          { en: "2008", es: "2008", de: "2008", nl: "2008" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Barack Obama's inauguration was a historic moment marking a milestone in American race relations and democracy. His presidency focused on healthcare reform (Affordable Care Act), economic recovery from the 2008 financial crisis, and foreign policy initiatives. Obama served two terms and won the Nobel Peace Prize in 2009 for his efforts to strengthen international diplomacy.",
          es: "La inauguración de Barack Obama fue un momento histórico que marcó un hito en las relaciones raciales y la democracia estadounidense. Su presidencia se centró en la reforma de la salud (Ley de Cuidado de Salud Asequible), la recuperación económica de la crisis financiera de 2008 e iniciativas de política exterior. Obama sirvió dos mandatos y ganó el Premio Nobel de la Paz en 2009 por sus esfuerzos para fortalecer la diplomacia internacional.",
          de: "Barack Obamas Amtseinführung war ein historischer Moment, der einen Meilenstein in den amerikanischen Rassenbeziehungen und der Demokratie markierte. Seine Präsidentschaft konzentrierte sich auf Gesundheitsreform (Affordable Care Act), wirtschaftliche Erholung von der Finanzkrise 2008 und außenpolitische Initiativen. Obama diente zwei Amtszeiten und gewann 2009 den Friedensnobelpreis für seine Bemühungen zur Stärkung der internationalen Diplomatie.",
          nl: "Barack Obama's inauguratie was een historisch moment dat een mijlpaal markeerde in Amerikaanse rasverhoudingen en democratie. Zijn presidentschap richtte zich op gezondheidszorgreform (Affordable Care Act), economisch herstel van de financiële crisis van 2008 en buitenlands beleid initiatieven. Obama diende twee termijnen en won de Nobelprijs voor de Vrede in 2009 voor zijn inspanningen om internationale diplomatie te versterken."
        }
      },
      {
        question: {
          en: "On January 20, 1942, which infamous conference planned the 'Final Solution' during World War II?",
          es: "El 20 de enero de 1942, ¿qué infame conferencia planeó la 'Solución Final' durante la Segunda Guerra Mundial?",
          de: "Am 20. Januar 1942 plante welche berüchtigte Konferenz die 'Endlösung' während des Zweiten Weltkriegs?",
          nl: "Op 20 januari 1942 plande welke beruchte conferentie de 'Eindoplossing' tijdens de Tweede Wereldoorlog?"
        },
        options: [
          { en: "Wannsee Conference", es: "Conferencia de Wannsee", de: "Wannseekonferenz", nl: "Wannsee-conferentie" },
          { en: "Tehran Conference", es: "Conferencia de Teherán", de: "Teheran-Konferenz", nl: "Conferentie van Teheran" },
          { en: "Yalta Conference", es: "Conferencia de Yalta", de: "Jalta-Konferenz", nl: "Conferentie van Jalta" },
          { en: "Potsdam Conference", es: "Conferencia de Potsdam", de: "Potsdamer Konferenz", nl: "Conferentie van Potsdam" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Wannsee Conference brought together Nazi officials to coordinate the systematic genocide of European Jews, known as the Holocaust. This 90-minute meeting formalized plans for the deportation and murder of approximately 11 million Jews. The conference represents one of the darkest moments in human history, resulting in the deaths of six million Jews during World War II.",
          es: "La Conferencia de Wannsee reunió a funcionarios nazis para coordinar el genocidio sistemático de judíos europeos, conocido como el Holocausto. Esta reunión de 90 minutos formalizó planes para la deportación y asesinato de aproximadamente 11 millones de judíos. La conferencia representa uno de los momentos más oscuros de la historia humana, resultando en las muertes de seis millones de judíos durante la Segunda Guerra Mundial.",
          de: "Die Wannseekonferenz brachte Nazi-Beamte zusammen, um den systematischen Völkermord an europäischen Juden, bekannt als Holocaust, zu koordinieren. Dieses 90-minütige Treffen formalisierte Pläne für die Deportation und Ermordung von etwa 11 Millionen Juden. Die Konferenz repräsentiert einen der dunkelsten Momente der Menschheitsgeschichte und führte zum Tod von sechs Millionen Juden während des Zweiten Weltkriegs.",
          nl: "De Wannsee-conferentie bracht nazi-functionarissen samen om de systematische genocide van Europese Joden, bekend als de Holocaust, te coördineren. Deze 90 minuten durende bijeenkomst formaliseerde plannen voor de deportatie en moord op ongeveer 11 miljoen Joden. De conferentie vertegenwoordigt een van de donkerste momenten in de menselijke geschiedenis, wat resulteerde in de dood van zes miljoen Joden tijdens de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "Which iconic actress was born on January 20, 1929?",
          es: "¿Qué actriz icónica nació el 20 de enero de 1929?",
          de: "Welche ikonische Schauspielerin wurde am 20. Januar 1929 geboren?",
          nl: "Welke iconische actrice werd geboren op 20 januari 1929?"
        },
        options: [
          { en: "Audrey Hepburn", es: "Audrey Hepburn", de: "Audrey Hepburn", nl: "Audrey Hepburn" },
          { en: "Grace Kelly", es: "Grace Kelly", de: "Grace Kelly", nl: "Grace Kelly" },
          { en: "Elizabeth Taylor", es: "Elizabeth Taylor", de: "Elizabeth Taylor", nl: "Elizabeth Taylor" },
          { en: "Marilyn Monroe", es: "Marilyn Monroe", de: "Marilyn Monroe", nl: "Marilyn Monroe" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Audrey Hepburn became a Hollywood legend through films like 'Breakfast at Tiffany's', 'Roman Holiday', and 'My Fair Lady'. Beyond her acting career, she was a humanitarian who worked extensively with UNICEF in her later years. Hepburn's elegance, grace, and compassion made her an enduring icon of style and philanthropy.",
          es: "Audrey Hepburn se convirtió en una leyenda de Hollywood a través de películas como 'Desayuno en Tiffany's', 'Vacaciones en Roma' y 'Mi bella dama'. Más allá de su carrera como actriz, fue una humanitaria que trabajó extensamente con UNICEF en sus últimos años. La elegancia, gracia y compasión de Hepburn la convirtieron en un ícono duradero de estilo y filantropía.",
          de: "Audrey Hepburn wurde durch Filme wie 'Frühstück bei Tiffany', 'Ein Herz und eine Krone' und 'My Fair Lady' zur Hollywood-Legende. Über ihre Schauspielkarriere hinaus war sie eine Humanitärin, die in ihren späteren Jahren intensiv mit UNICEF arbeitete. Hepburns Eleganz, Anmut und Mitgefühl machten sie zu einer bleibenden Ikone von Stil und Philanthropie.",
          nl: "Audrey Hepburn werd een Hollywood-legende door films als 'Breakfast at Tiffany's', 'Roman Holiday' en 'My Fair Lady'. Naast haar acteercarrière was ze een humanitair die uitgebreid werkte met UNICEF in haar latere jaren. Hepburn's elegantie, gratie en compassie maakten haar een blijvend icoon van stijl en filantropie."
        }
      },
      {
        question: {
          en: "Which astronaut who was the second person to walk on the Moon was born on January 20, 1930?",
          es: "¿Qué astronauta que fue la segunda persona en caminar sobre la Luna nació el 20 de enero de 1930?",
          de: "Welcher Astronaut, der als zweiter Mensch auf dem Mond ging, wurde am 20. Januar 1930 geboren?",
          nl: "Welke astronaut die de tweede persoon was die op de Maan liep, werd geboren op 20 januari 1930?"
        },
        options: [
          { en: "Michael Collins", es: "Michael Collins", de: "Michael Collins", nl: "Michael Collins" },
          { en: "Alan Shepard", es: "Alan Shepard", de: "Alan Shepard", nl: "Alan Shepard" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" },
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Buzz Aldrin followed Neil Armstrong onto the lunar surface during the Apollo 11 mission on July 20, 1969. He spent over two hours outside the spacecraft collecting samples and conducting experiments. Aldrin's engineering expertise and piloting skills were crucial to the mission's success, and he remains an advocate for space exploration.",
          es: "Buzz Aldrin siguió a Neil Armstrong a la superficie lunar durante la misión Apollo 11 el 20 de julio de 1969. Pasó más de dos horas fuera de la nave espacial recolectando muestras y realizando experimentos. La experiencia en ingeniería y habilidades de pilotaje de Aldrin fueron cruciales para el éxito de la misión, y sigue siendo un defensor de la exploración espacial.",
          de: "Buzz Aldrin folgte Neil Armstrong während der Apollo 11-Mission am 20. Juli 1969 auf die Mondoberfläche. Er verbrachte über zwei Stunden außerhalb des Raumfahrzeugs mit dem Sammeln von Proben und der Durchführung von Experimenten. Aldrins Ingenieurskompetenz und Pilotenfähigkeiten waren entscheidend für den Erfolg der Mission, und er bleibt ein Befürworter der Weltraumforschung.",
          nl: "Buzz Aldrin volgde Neil Armstrong op het maanoppervlak tijdens de Apollo 11-missie op 20 juli 1969. Hij bracht meer dan twee uur buiten het ruimtevaartuig door met het verzamelen van monsters en het uitvoeren van experimenten. Aldrin's engineering-expertise en vliegvaardigheden waren cruciaal voor het succes van de missie, en hij blijft een voorstander van ruimteverkenning."
        }
      }
    ],

    // Day 21 - January 21st: Louis XVI & Nuclear Submarine
    day21: [
      {
        question: {
          en: "In what year was King Louis XVI of France executed by guillotine on January 21?",
          es: "¿En qué año fue ejecutado el Rey Luis XVI de Francia en la guillotina el 21 de enero?",
          de: "In welchem Jahr wurde König Ludwig XVI. von Frankreich am 21. Januar durch die Guillotine hingerichtet?",
          nl: "In welk jaar werd koning Lodewijk XVI van Frankrijk door de guillotine geëxecuteerd op 21 januari?"
        },
        options: [
          { en: "1795", es: "1795", de: "1795", nl: "1795" },
          { en: "1789", es: "1789", de: "1789", nl: "1789" },
          { en: "1792", es: "1792", de: "1792", nl: "1792" },
          { en: "1793", es: "1793", de: "1793", nl: "1793" }
        ],
        correctIndex: 3,
        explanation: {
          en: "King Louis XVI's execution marked a turning point in the French Revolution, symbolizing the end of absolute monarchy in France. He was convicted of treason by the National Convention and guillotined in Paris's Place de la Révolution. His death shocked European monarchies and accelerated France's descent into the Reign of Terror.",
          es: "La ejecución del Rey Luis XVI marcó un punto de inflexión en la Revolución Francesa, simbolizando el fin de la monarquía absoluta en Francia. Fue condenado por traición por la Convención Nacional y guillotinado en la Place de la Révolution de París. Su muerte conmocionó a las monarquías europeas y aceleró el descenso de Francia al Reinado del Terror.",
          de: "Die Hinrichtung König Ludwigs XVI. markierte einen Wendepunkt in der Französischen Revolution und symbolisierte das Ende der absoluten Monarchie in Frankreich. Er wurde vom Nationalkonvent des Hochverrats für schuldig befunden und auf der Place de la Révolution in Paris guillotiniert. Sein Tod schockierte die europäischen Monarchien und beschleunigte Frankreichs Abstieg in die Schreckensherrschaft.",
          nl: "De executie van koning Lodewijk XVI markeerde een keerpunt in de Franse Revolutie en symboliseerde het einde van de absolute monarchie in Frankrijk. Hij werd door de Nationale Conventie veroordeeld voor verraad en geguillotineerd op de Place de la Révolution in Parijs. Zijn dood schokte Europese monarchieën en versnelde Frankrijk's afdaling in de Terreur."
        }
      },
      {
        question: {
          en: "On January 21, 1954, the world's first nuclear-powered submarine was launched. What was its name?",
          es: "El 21 de enero de 1954, se lanzó el primer submarino de propulsión nuclear del mundo. ¿Cuál era su nombre?",
          de: "Am 21. Januar 1954 wurde das erste atomgetriebene U-Boot der Welt vom Stapel gelassen. Wie hieß es?",
          nl: "Op 21 januari 1954 werd 's werelds eerste nucleair aangedreven onderzeeër te water gelaten. Wat was de naam?"
        },
        options: [
          { en: "USS George Washington", es: "USS George Washington", de: "USS George Washington", nl: "USS George Washington" },
          { en: "USS Triton", es: "USS Triton", de: "USS Triton", nl: "USS Triton" },
          { en: "USS Nautilus", es: "USS Nautilus", de: "USS Nautilus", nl: "USS Nautilus" },
          { en: "USS Enterprise", es: "USS Enterprise", de: "USS Enterprise", nl: "USS Enterprise" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The USS Nautilus (SSN-571) revolutionized submarine warfare as the world's first operational nuclear-powered vessel. Named after Captain Nemo's submarine in Jules Verne's novel, it could remain submerged indefinitely without needing to surface for air. The Nautilus later became the first submarine to transit the North Pole underwater in 1958.",
          es: "El USS Nautilus (SSN-571) revolucionó la guerra submarina como el primer buque operacional de propulsión nuclear del mundo. Nombrado en honor al submarino del Capitán Nemo en la novela de Jules Verne, podía permanecer sumergido indefinidamente sin necesidad de salir a la superficie para tomar aire. El Nautilus se convirtió más tarde en el primer submarino en transitar bajo el Polo Norte en 1958.",
          de: "Die USS Nautilus (SSN-571) revolutionierte die U-Boot-Kriegsführung als das erste einsatzfähige atomgetriebene Schiff der Welt. Benannt nach dem U-Boot von Kapitän Nemo in Jules Vernes Roman, konnte es unbegrenzt unter Wasser bleiben, ohne zum Auftauchen für Luft auftauchen zu müssen. Die Nautilus wurde später 1958 zum ersten U-Boot, das den Nordpol unter Wasser durchquerte.",
          nl: "De USS Nautilus (SSN-571) revolutioneerde de onderzeebootoorlogvoering als 's werelds eerste operationele nucleair aangedreven vaartuig. Vernoemd naar de onderzeeër van kapitein Nemo in Jules Verne's roman, kon het voor onbepaalde tijd ondergedompeld blijven zonder naar de oppervlakte te hoeven komen voor lucht. De Nautilus werd later in 1958 de eerste onderzeeër die onder water door de Noordpool voer."
        }
      },
      {
        question: {
          en: "In what year did the Concorde make its first commercial flight on January 21?",
          es: "¿En qué año realizó el Concorde su primer vuelo comercial el 21 de enero?",
          de: "In welchem Jahr führte die Concorde am 21. Januar ihren ersten kommerziellen Flug durch?",
          nl: "In welk jaar maakte de Concorde zijn eerste commerciële vlucht op 21 januari?"
        },
        options: [
          { en: "1978", es: "1978", de: "1978", nl: "1978" },
          { en: "1977", es: "1977", de: "1977", nl: "1977" },
          { en: "1976", es: "1976", de: "1976", nl: "1976" },
          { en: "1975", es: "1975", de: "1975", nl: "1975" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Concorde's first commercial flight marked the beginning of supersonic passenger travel. British Airways flew from London to Bahrain while Air France simultaneously flew from Paris to Rio de Janeiro. The aircraft could fly at twice the speed of sound (Mach 2), reducing transatlantic flight times from 8 hours to just 3.5 hours.",
          es: "El primer vuelo comercial del Concorde marcó el comienzo de los viajes de pasajeros supersónicos. British Airways voló de Londres a Bahréin mientras Air France simultáneamente voló de París a Río de Janeiro. El avión podía volar al doble de la velocidad del sonido (Mach 2), reduciendo los tiempos de vuelo transatlántico de 8 horas a solo 3.5 horas.",
          de: "Der erste kommerzielle Flug der Concorde markierte den Beginn des Überschall-Passagierverkehrs. British Airways flog von London nach Bahrain, während Air France gleichzeitig von Paris nach Rio de Janeiro flog. Das Flugzeug konnte mit doppelter Schallgeschwindigkeit (Mach 2) fliegen und reduzierte transatlantische Flugzeiten von 8 Stunden auf nur 3,5 Stunden.",
          nl: "De eerste commerciële vlucht van de Concorde markeerde het begin van supersonisch passagiersvervoer. British Airways vloog van Londen naar Bahrein terwijl Air France tegelijkertijd van Parijs naar Rio de Janeiro vloog. Het vliegtuig kon twee keer de geluidssnelheid vliegen (Mach 2), waardoor transatlantische vluchttijden werden teruggebracht van 8 uur naar slechts 3,5 uur."
        }
      },
      {
        question: {
          en: "On January 21, 1976, which supersonic airliner began scheduled passenger service from London to Bahrain?",
          es: "El 21 de enero de 1976, ¿qué avión supersónico comenzó el servicio regular de pasajeros de Londres a Bahréin?",
          de: "Am 21. Januar 1976 begann welches Überschallflugzeug den planmäßigen Passagierservice von London nach Bahrain?",
          nl: "Op 21 januari 1976 begon welk supersonisch vliegtuig de geregelde passagiersdienst van Londen naar Bahrein?"
        },
        options: [
          { en: "Concorde", es: "Concorde", de: "Concorde", nl: "Concorde" },
          { en: "Douglas DC-10", es: "Douglas DC-10", de: "Douglas DC-10", nl: "Douglas DC-10" },
          { en: "Tupolev Tu-144", es: "Tupolev Tu-144", de: "Tupolev Tu-144", nl: "Tupolev Tu-144" },
          { en: "Boeing 747", es: "Boeing 747", de: "Boeing 747", nl: "Boeing 747" }
        ],
        correctIndex: 0,
        explanation: {
          en: "This question refers to the same historic Concorde flight mentioned earlier. The Anglo-French Concorde was a technological marvel of its era, representing international cooperation in aviation. Despite its success, the Concorde was retired in 2003 due to high operating costs and declining passenger numbers following a fatal crash in 2000.",
          es: "Esta pregunta se refiere al mismo vuelo histórico del Concorde mencionado anteriormente. El Concorde anglo-francés fue una maravilla tecnológica de su época, representando la cooperación internacional en aviación. A pesar de su éxito, el Concorde se retiró en 2003 debido a los altos costos operativos y la disminución del número de pasajeros tras un accidente fatal en 2000.",
          de: "Diese Frage bezieht sich auf denselben historischen Concorde-Flug, der zuvor erwähnt wurde. Die anglo-französische Concorde war ein technologisches Wunderwerk ihrer Zeit und repräsentierte internationale Zusammenarbeit in der Luftfahrt. Trotz ihres Erfolgs wurde die Concorde 2003 wegen hoher Betriebskosten und rückläufiger Passagierzahlen nach einem tödlichen Absturz im Jahr 2000 außer Dienst gestellt.",
          nl: "Deze vraag verwijst naar dezelfde historische Concorde-vlucht die eerder werd genoemd. De Anglo-Franse Concorde was een technologisch wonderwerk van zijn tijd, dat internationale samenwerking in de luchtvaart vertegenwoordigde. Ondanks het succes werd de Concorde in 2003 uit dienst genomen vanwege hoge operationele kosten en dalende passagiersaantallen na een dodelijke crash in 2000."
        }
      },
      {
        question: {
          en: "On January 21, 2017, which major event took place in Washington D.C. the day after the presidential inauguration?",
          es: "El 21 de enero de 2017, ¿qué evento importante tuvo lugar en Washington D.C. el día después de la inauguración presidencial?",
          de: "Am 21. Januar 2017 fand welches wichtige Ereignis in Washington D.C. am Tag nach der Amtseinführung des Präsidenten statt?",
          nl: "Op 21 januari 2017 vond welke belangrijke gebeurtenis plaats in Washington D.C. de dag na de presidentiële inauguratie?"
        },
        options: [
          { en: "Science March", es: "Marcha por la Ciencia", de: "Wissenschaftsmarsch", nl: "March for Science" },
          { en: "Civil Rights March", es: "Marcha por los Derechos Civiles", de: "Bürgerrechtsmarsch", nl: "Civil Rights March" },
          { en: "Climate March", es: "Marcha por el Clima", de: "Klimamarsch", nl: "Klimaatmars" },
          { en: "Women's March", es: "Marcha de las Mujeres", de: "Frauenmarsch", nl: "Women's March" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Women's March became one of the largest single-day protests in U.S. history, with millions participating worldwide. The march advocated for women's rights, immigration reform, healthcare reform, and environmental protection. Sister marches took place in over 600 cities globally, demonstrating widespread international solidarity.",
          es: "La Marcha de las Mujeres se convirtió en una de las protestas de un solo día más grandes en la historia de EE.UU., con millones de participantes en todo el mundo. La marcha abogó por los derechos de las mujeres, la reforma migratoria, la reforma de la atención médica y la protección ambiental. Marchas hermanas tuvieron lugar en más de 600 ciudades a nivel mundial, demostrando una amplia solidaridad internacional.",
          de: "Der Frauenmarsch wurde zu einer der größten eintägigen Proteste in der US-Geschichte, an dem weltweit Millionen teilnahmen. Der Marsch setzte sich für Frauenrechte, Einwanderungsreform, Gesundheitsreform und Umweltschutz ein. Schwester-Märsche fanden in über 600 Städten weltweit statt und zeigten weitreichende internationale Solidarität.",
          nl: "De Women's March werd een van de grootste eendaagse protesten in de Amerikaanse geschiedenis, met miljoenen deelnemers wereldwijd. De mars pleitte voor vrouwenrechten, immigratiehervorming, gezondheidszorghervorming en milieubescherming. Zustermars vond plaats in meer dan 600 steden wereldwijd, wat wijdverspreide internationale solidariteit demonstreerde."
        }
      }
    ],

    // Day 22 - January 22nd: Queen Victoria & Roe v. Wade
    day22: [
      {
        question: {
          en: "In what year did Queen Victoria die on January 22?",
          es: "¿En qué año murió la Reina Victoria el 22 de enero?",
          de: "In welchem Jahr starb Königin Victoria am 22. Januar?",
          nl: "In welk jaar stierf koningin Victoria op 22 januari?"
        },
        options: [
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1899", es: "1899", de: "1899", nl: "1899" },
          { en: "1902", es: "1902", de: "1902", nl: "1902" },
          { en: "1901", es: "1901", de: "1901", nl: "1901" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Queen Victoria's death ended the Victorian Era, marking the close of the longest reign in British history at that time (63 years). Her reign saw tremendous technological advancement, industrial expansion, and the growth of the British Empire. She was succeeded by her son, Edward VII, beginning the Edwardian Era.",
          es: "La muerte de la Reina Victoria puso fin a la Era Victoriana, marcando el cierre del reinado más largo en la historia británica en ese momento (63 años). Su reinado vio un tremendo avance tecnológico, expansión industrial y el crecimiento del Imperio Británico. Fue sucedida por su hijo, Eduardo VII, comenzando la Era Eduardiana.",
          de: "Königin Victorias Tod beendete die Viktorianische Ära und markierte das Ende der längsten Regierungszeit in der britischen Geschichte zu dieser Zeit (63 Jahre). Ihre Herrschaft erlebte enormen technologischen Fortschritt, industrielle Expansion und das Wachstum des Britischen Empires. Ihr folgte ihr Sohn Eduard VII., der die Edwardianische Ära einleitete.",
          nl: "De dood van koningin Victoria beëindigde het Victoriaanse Tijdperk en markeerde het einde van de langste regering in de Britse geschiedenis op dat moment (63 jaar). Haar regering zag enorme technologische vooruitgang, industriële expansie en de groei van het Britse Rijk. Ze werd opgevolgd door haar zoon, Edward VII, waarmee het Edwardiaanse Tijdperk begon."
        }
      },
      {
        question: {
          en: "In what year was the landmark Supreme Court case Roe v. Wade decided on January 22?",
          es: "¿En qué año se decidió el caso histórico de la Corte Suprema Roe v. Wade el 22 de enero?",
          de: "In welchem Jahr wurde am 22. Januar der wegweisende Supreme Court Fall Roe v. Wade entschieden?",
          nl: "In welk jaar werd de baanbrekende Supreme Court zaak Roe v. Wade beslist op 22 januari?"
        },
        options: [
          { en: "1971", es: "1971", de: "1971", nl: "1971" },
          { en: "1972", es: "1972", de: "1972", nl: "1972" },
          { en: "1973", es: "1973", de: "1973", nl: "1973" },
          { en: "1974", es: "1974", de: "1974", nl: "1974" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Roe v. Wade was a landmark decision establishing a constitutional right to abortion in the United States. The 7-2 ruling held that access to abortion was protected by the right to privacy under the Fourteenth Amendment. The decision remained in effect for nearly 50 years until it was overturned by the Supreme Court in 2022.",
          es: "Roe v. Wade fue una decisión histórica que estableció un derecho constitucional al aborto en los Estados Unidos. El fallo de 7-2 sostuvo que el acceso al aborto estaba protegido por el derecho a la privacidad bajo la Decimocuarta Enmienda. La decisión permaneció vigente durante casi 50 años hasta que fue anulada por la Corte Suprema en 2022.",
          de: "Roe v. Wade war eine wegweisende Entscheidung, die ein verfassungsmäßiges Recht auf Abtreibung in den Vereinigten Staaten etablierte. Das 7-2-Urteil besagte, dass der Zugang zur Abtreibung durch das Recht auf Privatsphäre gemäß der Vierzehnten Änderung geschützt war. Die Entscheidung blieb fast 50 Jahre in Kraft, bis sie 2022 vom Supreme Court aufgehoben wurde.",
          nl: "Roe v. Wade was een baanbrekend besluit dat een grondwettelijk recht op abortus in de Verenigde Staten vestigde. De 7-2 uitspraak hield in dat toegang tot abortus werd beschermd door het recht op privacy onder het Veertiende Amendement. Het besluit bleef bijna 50 jaar van kracht totdat het in 2022 door het Hooggerechtshof werd teruggedraaid."
        }
      },
      {
        question: {
          en: "On January 22, 1970, the first commercial flight of which iconic aircraft took place?",
          es: "El 22 de enero de 1970, tuvo lugar el primer vuelo comercial de qué avión icónico?",
          de: "Am 22. Januar 1970 fand der erste kommerzielle Flug welches ikonischen Flugzeugs statt?",
          nl: "Op 22 januari 1970 vond de eerste commerciële vlucht plaats van welk iconisch vliegtuig?"
        },
        options: [
          { en: "Concorde", es: "Concorde", de: "Concorde", nl: "Concorde" },
          { en: "Airbus A380", es: "Airbus A380", de: "Airbus A380", nl: "Airbus A380" },
          { en: "Boeing 777", es: "Boeing 777", de: "Boeing 777", nl: "Boeing 777" },
          { en: "Boeing 747", es: "Boeing 747", de: "Boeing 747", nl: "Boeing 747" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Boeing 747 'Jumbo Jet' revolutionized air travel by making long-distance flights more accessible and affordable. Pan Am operated the first commercial flight from New York to London with 324 passengers. The distinctive hump-shaped upper deck made it instantly recognizable and it became an icon of the jet age, serving for over 50 years.",
          es: "El Boeing 747 'Jumbo Jet' revolucionó los viajes aéreos al hacer los vuelos de larga distancia más accesibles y asequibles. Pan Am operó el primer vuelo comercial de Nueva York a Londres con 324 pasajeros. La distintiva cubierta superior en forma de joroba lo hizo instantáneamente reconocible y se convirtió en un ícono de la era del jet, sirviendo durante más de 50 años.",
          de: "Die Boeing 747 'Jumbo Jet' revolutionierte den Luftverkehr, indem sie Langstreckenflüge zugänglicher und erschwinglicher machte. Pan Am führte den ersten kommerziellen Flug von New York nach London mit 324 Passagieren durch. Das markante buckelförmige Oberdeck machte es sofort erkennbar und es wurde zu einer Ikone des Jet-Zeitalters, die über 50 Jahre lang im Dienst war.",
          nl: "De Boeing 747 'Jumbo Jet' revolutioneerde het luchtverkeer door langeafstandsvluchten toegankelijker en betaalbaarder te maken. Pan Am voerde de eerste commerciële vlucht uit van New York naar Londen met 324 passagiers. Het kenmerkende bultgevormde bovendek maakte het onmiddellijk herkenbaar en het werd een icoon van het straalvliegtuigtijdperk, dat meer dan 50 jaar heeft gediend."
        }
      },
      {
        question: {
          en: "In what year was the Swiss Guard, the military force of the Vatican, founded on January 22?",
          es: "¿En qué año se fundó la Guardia Suiza, la fuerza militar del Vaticano, el 22 de enero?",
          de: "In welchem Jahr wurde am 22. Januar die Schweizergarde, die Streitkräfte des Vatikans, gegründet?",
          nl: "In welk jaar werd de Zwitserse Garde, de militaire macht van het Vaticaan, opgericht op 22 januari?"
        },
        options: [
          { en: "1492", es: "1492", de: "1492", nl: "1492" },
          { en: "1500", es: "1500", de: "1500", nl: "1500" },
          { en: "1506", es: "1506", de: "1506", nl: "1506" },
          { en: "1510", es: "1510", de: "1510", nl: "1510" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Swiss Guard is one of the oldest military units in continuous operation, protecting the Pope and the Vatican for over 500 years. They are famous for their distinctive Renaissance-era uniforms with blue, red, orange, and yellow stripes. Today, they still serve as the Pope's bodyguards and ceremonial guards, maintaining centuries-old traditions.",
          es: "La Guardia Suiza es una de las unidades militares más antiguas en operación continua, protegiendo al Papa y al Vaticano durante más de 500 años. Son famosos por sus distintivos uniformes de la era del Renacimiento con rayas azules, rojas, naranjas y amarillas. Hoy en día, todavía sirven como guardaespaldas del Papa y guardias ceremoniales, manteniendo tradiciones centenarias.",
          de: "Die Schweizergarde ist eine der ältesten militärischen Einheiten in kontinuierlichem Betrieb und schützt den Papst und den Vatikan seit über 500 Jahren. Sie sind berühmt für ihre markanten Renaissance-Uniformen mit blauen, roten, orangen und gelben Streifen. Heute dienen sie immer noch als Leibwächter des Papstes und zeremonielle Wachen und pflegen jahrhundertealte Traditionen.",
          nl: "De Zwitserse Garde is een van de oudste militaire eenheden in continue werking en beschermt de paus en het Vaticaan al meer dan 500 jaar. Ze zijn beroemd om hun kenmerkende Renaissance-uniformen met blauwe, rode, oranje en gele strepen. Vandaag dienen ze nog steeds als lijfwachten van de paus en ceremoniële wachten, waarbij ze eeuwenoude tradities in stand houden."
        }
      },
      {
        question: {
          en: "On January 22, 1987, Pennsylvania treasurer R. Budd Dwyer committed suicide during a televised press conference. What was he about to be sentenced for?",
          es: "El 22 de enero de 1987, el tesorero de Pensilvania R. Budd Dwyer se suicidó durante una conferencia de prensa televisada. ¿Por qué estaba a punto de ser sentenciado?",
          de: "Am 22. Januar 1987 beging der Schatzmeister von Pennsylvania R. Budd Dwyer während einer im Fernsehen übertragenen Pressekonferenz Selbstmord. Wofür sollte er verurteilt werden?",
          nl: "Op 22 januari 1987 pleegde Pennsylvania's penningmeester R. Budd Dwyer zelfmoord tijdens een televised persconferentie. Waarvoor stond hij op het punt veroordeeld te worden?"
        },
        options: [
          { en: "Tax evasion", es: "Evasión fiscal", de: "Steuerhinterziehung", nl: "Belastingontduiking" },
          { en: "Fraud", es: "Fraude", de: "Betrug", nl: "Fraude" },
          { en: "Bribery", es: "Soborno", de: "Bestechung", nl: "Omkoping" },
          { en: "Embezzlement", es: "Malversación", de: "Unterschlagung", nl: "Verduistering" }
        ],
        correctIndex: 2,
        explanation: {
          en: "R. Budd Dwyer's suicide during a televised press conference shocked viewers across America and became one of the most notorious moments in broadcast history. He was convicted of receiving bribes in a payroll kickback scheme. Many supporters believed he was innocent, and some evidence later suggested the conviction may have been questionable.",
          es: "El suicidio de R. Budd Dwyer durante una conferencia de prensa televisada conmocionó a los espectadores en toda América y se convirtió en uno de los momentos más notorios en la historia de la transmisión. Fue condenado por recibir sobornos en un esquema de comisiones ilegales de nómina. Muchos partidarios creían que era inocente, y algunas evidencias posteriormente sugirieron que la condena pudo haber sido cuestionable.",
          de: "R. Budd Dwyers Selbstmord während einer im Fernsehen übertragenen Pressekonferenz schockierte Zuschauer in ganz Amerika und wurde zu einem der berüchtigtsten Momente in der Rundfunkgeschichte. Er wurde wegen Bestechungsgeldern in einem Lohn-Rückzahlungssystem verurteilt. Viele Unterstützer glaubten, er sei unschuldig, und einige Beweise deuteten später darauf hin, dass die Verurteilung möglicherweise fragwürdig war.",
          nl: "R. Budd Dwyers zelfmoord tijdens een televised persconferentie schokte kijkers in heel Amerika en werd een van de meest beruchte momenten in de omroepgeschiedenis. Hij werd veroordeeld voor het aannemen van smeergeld in een loonlijstkickback-schema. Veel supporters geloofden dat hij onschuldig was, en sommig bewijs suggereerde later dat de veroordeling twijfelachtig kan zijn geweest."
        }
      }
    ],

    // Day 23 - January 23rd: Deadliest Earthquake & Challenger Deep
    day23: [
      {
        question: {
          en: "In what year did the deadliest earthquake in recorded history occur in Shaanxi, China on January 23?",
          es: "¿En qué año ocurrió el terremoto más mortífero de la historia registrada en Shaanxi, China el 23 de enero?",
          de: "In welchem Jahr ereignete sich am 23. Januar das tödlichste Erdbeben der aufgezeichneten Geschichte in Shaanxi, China?",
          nl: "In welk jaar vond de dodelijkste aardbeving in de geregistreerde geschiedenis plaats in Shaanxi, China op 23 januari?"
        },
        options: [
          { en: "1556", es: "1556", de: "1556", nl: "1556" },
          { en: "1600", es: "1600", de: "1600", nl: "1600" },
          { en: "1500", es: "1500", de: "1500", nl: "1500" },
          { en: "1400", es: "1400", de: "1400", nl: "1400" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The 1556 Shaanxi earthquake killed an estimated 830,000 people, making it the deadliest earthquake in recorded history. The region's unique loess cave dwellings collapsed during the quake, trapping countless victims. The earthquake measured approximately 8.0 on the Richter scale and caused devastation across an area of 520 miles.",
          es: "El terremoto de Shaanxi de 1556 mató a aproximadamente 830,000 personas, convirtiéndolo en el terremoto más mortífero de la historia registrada. Las viviendas únicas en cuevas de loess de la región colapsaron durante el terremoto, atrapando a innumerables víctimas. El terremoto midió aproximadamente 8.0 en la escala de Richter y causó devastación en un área de 520 millas.",
          de: "Das Erdbeben von Shaanxi 1556 tötete schätzungsweise 830.000 Menschen und ist damit das tödlichste Erdbeben der aufgezeichneten Geschichte. Die einzigartigen Lösshöhlenwohnungen der Region stürzten während des Bebens ein und begruben unzählige Opfer. Das Erdbeben maß etwa 8,0 auf der Richterskala und verursachte Verwüstung über ein Gebiet von 520 Meilen.",
          nl: "De aardbeving in Shaanxi in 1556 doodde naar schatting 830.000 mensen, waardoor het de dodelijkste aardbeving in de geregistreerde geschiedenis werd. De unieke lössgrotwonin gen van de regio stortten in tijdens de beving, waarbij talloze slachtoffers vast kwamen te zitten. De aardbeving mat ongeveer 8,0 op de schaal van Richter en veroorzaakte verwoesting over een gebied van 520 mijl."
        }
      },
      {
        question: {
          en: "In what year did the bathyscaphe Trieste reach the Challenger Deep, the deepest part of the ocean, on January 23?",
          es: "¿En qué año el batiscafo Trieste alcanzó el Abismo Challenger, la parte más profunda del océano, el 23 de enero?",
          de: "In welchem Jahr erreichte das Bathyscaph Trieste am 23. Januar den Challengertief, den tiefsten Teil des Ozeans?",
          nl: "In welk jaar bereikte de bathyscaaf Trieste de Challenger Deep, het diepste deel van de oceaan, op 23 januari?"
        },
        options: [
          { en: "1961", es: "1961", de: "1961", nl: "1961" },
          { en: "1958", es: "1958", de: "1958", nl: "1958" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" },
          { en: "1959", es: "1959", de: "1959", nl: "1959" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Trieste's descent to the Challenger Deep reached a depth of 35,797 feet (10,911 meters) in the Mariana Trench. Piloted by Jacques Piccard and Don Walsh, this historic dive proved humans could reach the deepest point on Earth. The extreme pressure at this depth is over 1,000 times atmospheric pressure at sea level.",
          es: "El descenso del Trieste al Abismo Challenger alcanzó una profundidad de 35,797 pies (10,911 metros) en la Fosa de las Marianas. Pilotado por Jacques Piccard y Don Walsh, esta inmersión histórica demostró que los humanos podían alcanzar el punto más profundo de la Tierra. La presión extrema a esta profundidad es más de 1,000 veces la presión atmosférica al nivel del mar.",
          de: "Der Abstieg der Trieste zum Challengertief erreichte eine Tiefe von 35.797 Fuß (10.911 Meter) im Marianengraben. Von Jacques Piccard und Don Walsh gesteuert, bewies dieser historische Tauchgang, dass Menschen den tiefsten Punkt der Erde erreichen konnten. Der extreme Druck in dieser Tiefe ist über 1.000-mal höher als der atmosphärische Druck auf Meereshöhe.",
          nl: "De afdaling van de Trieste naar de Challenger Deep bereikte een diepte van 35.797 voet (10.911 meter) in de Marianentrog. Bestuurd door Jacques Piccard en Don Walsh, bewees deze historische duik dat mensen het diepste punt op aarde konden bereiken. De extreme druk op deze diepte is meer dan 1.000 keer de atmosferische druk op zeeniveau."
        }
      },
      {
        question: {
          en: "Which pioneering female physician was born on January 23, 1821, becoming the first woman to receive a medical degree in the United States?",
          es: "¿Qué médica pionera nació el 23 de enero de 1821, convirtiéndose en la primera mujer en recibir un título médico en los Estados Unidos?",
          de: "Welche Pionierärztin wurde am 23. Januar 1821 geboren und war die erste Frau, die in den Vereinigten Staaten einen medizinischen Abschluss erhielt?",
          nl: "Welke baanbrekende vrouwelijke arts werd geboren op 23 januari 1821 en was de eerste vrouw die een medisch diploma behaalde in de Verenigde Staten?"
        },
        options: [
          { en: "Clara Barton", es: "Clara Barton", de: "Clara Barton", nl: "Clara Barton" },
          { en: "Elizabeth Blackwell", es: "Elizabeth Blackwell", de: "Elizabeth Blackwell", nl: "Elizabeth Blackwell" },
          { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Elizabeth Blackwell graduated from Geneva Medical College in New York in 1849, becoming the first woman to earn a medical degree in the United States. She faced enormous discrimination and initially was only admitted as a joke by male students. She later founded the New York Infirmary for Women and Children and championed women's access to medical education.",
          es: "Elizabeth Blackwell se graduó del Geneva Medical College en Nueva York en 1849, convirtiéndose en la primera mujer en obtener un título médico en los Estados Unidos. Enfrentó una enorme discriminación y inicialmente fue admitida solo como una broma por estudiantes masculinos. Más tarde fundó el New York Infirmary for Women and Children y defendió el acceso de las mujeres a la educación médica.",
          de: "Elizabeth Blackwell absolvierte 1849 das Geneva Medical College in New York und wurde die erste Frau, die in den Vereinigten Staaten einen medizinischen Abschluss erwarb. Sie war enormer Diskriminierung ausgesetzt und wurde zunächst nur als Scherz von männlichen Studenten zugelassen. Später gründete sie das New York Infirmary for Women and Children und setzte sich für den Zugang von Frauen zur medizinischen Ausbildung ein.",
          nl: "Elizabeth Blackwell studeerde in 1849 af aan het Geneva Medical College in New York en werd de eerste vrouw die een medisch diploma behaalde in de Verenigde Staten. Ze kreeg te maken met enorme discriminatie en werd aanvankelijk alleen als grap toegelaten door mannelijke studenten. Later richtte ze het New York Infirmary for Women and Children op en streed ze voor de toegang van vrouwen tot medisch onderwijs."
        }
      },
      {
        question: {
          en: "On January 23, 2002, which American journalist was kidnapped and murdered in Pakistan?",
          es: "El 23 de enero de 2002, ¿qué periodista estadounidense fue secuestrado y asesinado en Pakistán?",
          de: "Am 23. Januar 2002 wurde welcher amerikanische Journalist in Pakistan entführt und ermordet?",
          nl: "Op 23 januari 2002 werd welke Amerikaanse journalist ontvoerd en vermoord in Pakistan?"
        },
        options: [
          { en: "Daniel Pearl", es: "Daniel Pearl", de: "Daniel Pearl", nl: "Daniel Pearl" },
          { en: "Steven Sotloff", es: "Steven Sotloff", de: "Steven Sotloff", nl: "Steven Sotloff" },
          { en: "James Foley", es: "James Foley", de: "James Foley", nl: "James Foley" },
          { en: "Peter Kassig", es: "Peter Kassig", de: "Peter Kassig", nl: "Peter Kassig" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Daniel Pearl, a Wall Street Journal reporter, was kidnapped while investigating links between Al-Qaeda and Pakistani militants in Karachi. He was murdered in captivity, and his death became a symbol of the dangers faced by journalists in conflict zones. His legacy continues through the Daniel Pearl Foundation, which promotes cross-cultural understanding and dialogue.",
          es: "Daniel Pearl, reportero del Wall Street Journal, fue secuestrado mientras investigaba vínculos entre Al-Qaeda y militantes paquistaníes en Karachi. Fue asesinado en cautiverio, y su muerte se convirtió en un símbolo de los peligros que enfrentan los periodistas en zonas de conflicto. Su legado continúa a través de la Fundación Daniel Pearl, que promueve el entendimiento intercultural y el diálogo.",
          de: "Daniel Pearl, ein Reporter des Wall Street Journal, wurde entführt, während er Verbindungen zwischen Al-Qaida und pakistanischen Militanten in Karatschi untersuchte. Er wurde in Gefangenschaft ermordet, und sein Tod wurde zum Symbol für die Gefahren, denen Journalisten in Konfliktgebieten ausgesetzt sind. Sein Vermächtnis lebt durch die Daniel Pearl Foundation weiter, die interkulturelles Verständnis und Dialog fördert.",
          nl: "Daniel Pearl, een verslaggever van de Wall Street Journal, werd ontvoerd terwijl hij banden tussen Al-Qaeda en Pakistaanse militanten in Karachi onderzocht. Hij werd vermoord in gevangenschap, en zijn dood werd een symbool voor de gevaren waarmee journalisten in conflictgebieden worden geconfronteerd. Zijn nalatenschap leeft voort via de Daniel Pearl Foundation, die intercultureel begrip en dialoog bevordert."
        }
      },
      {
        question: {
          en: "On January 23, 1849, which British-American philanthropist and founder of the first free public library in the U.S. died?",
          es: "El 23 de enero de 1849, ¿qué filántropo británico-estadounidense y fundador de la primera biblioteca pública gratuita en EE.UU. murió?",
          de: "Am 23. Januar 1849 starb welcher britisch-amerikanische Philanthrop und Gründer der ersten kostenlosen öffentlichen Bibliothek in den USA?",
          nl: "Op 23 januari 1849 stierf welke Brits-Amerikaanse filantroop en oprichter van de eerste gratis openbare bibliotheek in de VS?"
        },
        options: [
          { en: "Cornelius Vanderbilt", es: "Cornelius Vanderbilt", de: "Cornelius Vanderbilt", nl: "Cornelius Vanderbilt" },
          { en: "John Jacob Astor", es: "John Jacob Astor", de: "John Jacob Astor", nl: "John Jacob Astor" },
          { en: "Andrew Carnegie", es: "Andrew Carnegie", de: "Andrew Carnegie", nl: "Andrew Carnegie" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Benjamin Franklin established the Library Company of Philadelphia in 1731, which became the first subscription library in America and inspired the public library movement. Franklin was a founding father, inventor, scientist, and diplomat who made numerous contributions to American society. His legacy includes innovations in electricity, journalism, civic institutions, and democratic governance.",
          es: "Benjamin Franklin estableció la Library Company of Philadelphia en 1731, que se convirtió en la primera biblioteca de suscripción en América e inspiró el movimiento de bibliotecas públicas. Franklin fue un padre fundador, inventor, científico y diplomático que hizo numerosas contribuciones a la sociedad estadounidense. Su legado incluye innovaciones en electricidad, periodismo, instituciones cívicas y gobernanza democrática.",
          de: "Benjamin Franklin gründete 1731 die Library Company of Philadelphia, die zur ersten Abonnementbibliothek in Amerika wurde und die öffentliche Bibliotheksbewegung inspirierte. Franklin war ein Gründervater, Erfinder, Wissenschaftler und Diplomat, der zahlreiche Beiträge zur amerikanischen Gesellschaft leistete. Sein Vermächtnis umfasst Innovationen in Elektrizität, Journalismus, bürgerlichen Institutionen und demokratischer Regierungsführung.",
          nl: "Benjamin Franklin richtte in 1731 de Library Company of Philadelphia op, die de eerste abonnementsbibliotheek in Amerika werd en de openbare bibliotheekbeweging inspireerde. Franklin was een grondlegger, uitvinder, wetenschapper en diplomaat die talrijke bijdragen leverde aan de Amerikaanse samenleving. Zijn nalatenschap omvat innovaties op het gebied van elektriciteit, journalistiek, maatschappelijke instellingen en democratisch bestuur."
        }
      }
    ],

    // Day 24 - January 24th: Gold Rush & Mars Rover
    day24: [
      {
        question: {
          en: "In what year was gold discovered at Sutter's Mill in California on January 24, sparking the Gold Rush?",
          es: "¿En qué año se descubrió oro en el molino de Sutter en California el 24 de enero, desencadenando la Fiebre del Oro?",
          de: "In welchem Jahr wurde am 24. Januar Gold in Sutter's Mill in Kalifornien entdeckt, was den Goldrausch auslöste?",
          nl: "In welk jaar werd er op 24 januari goud ontdekt bij Sutter's Mill in Californië, wat de Goudkoorts veroorzaakte?"
        },
        options: [
          { en: "1850", es: "1850", de: "1850", nl: "1850" },
          { en: "1847", es: "1847", de: "1847", nl: "1847" },
          { en: "1849", es: "1849", de: "1849", nl: "1849" },
          { en: "1848", es: "1848", de: "1848", nl: "1848" }
        ],
        correctIndex: 3,
        explanation: {
          en: "James W. Marshall's discovery of gold at Sutter's Mill triggered one of the largest mass migrations in American history. Over 300,000 people rushed to California seeking fortune, giving rise to the nickname '49ers' for those who arrived in 1849. The Gold Rush transformed California's economy and demographics, accelerating its path to statehood in 1850.",
          es: "El descubrimiento de oro de James W. Marshall en el molino de Sutter desencadenó una de las mayores migraciones masivas en la historia estadounidense. Más de 300,000 personas se apresuraron a California buscando fortuna, dando origen al apodo '49ers' para quienes llegaron en 1849. La Fiebre del Oro transformó la economía y demografía de California, acelerando su camino hacia la estadidad en 1850.",
          de: "James W. Marshalls Goldentdeckung in Sutter's Mill löste eine der größten Massenwanderungen in der amerikanischen Geschichte aus. Über 300.000 Menschen eilten nach Kalifornien auf der Suche nach Reichtum, was den Spitznamen '49ers' für diejenigen hervorbrachte, die 1849 ankamen. Der Goldrausch verwandelte Kaliforniens Wirtschaft und Demografie und beschleunigte seinen Weg zur Eigenstaatlichkeit im Jahr 1850.",
          nl: "James W. Marshall's ontdekking van goud bij Sutter's Mill veroorzaakte een van de grootste massale migraties in de Amerikaanse geschiedenis. Meer dan 300.000 mensen haastten zich naar Californië op zoek naar fortuin, wat de bijnaam '49ers' opleverde voor degenen die in 1849 arriveerden. De Goudkoorts transformeerde de economie en demografie van Californië en versnelde het pad naar staatschap in 1850."
        }
      },
      {
        question: {
          en: "In what year did the NASA rover Opportunity land on Mars on January 24?",
          es: "¿En qué año aterrizó el rover Opportunity de la NASA en Marte el 24 de enero?",
          de: "In welchem Jahr landete der NASA-Rover Opportunity am 24. Januar auf dem Mars?",
          nl: "In welk jaar landde de NASA-rover Opportunity op Mars op 24 januari?"
        },
        options: [
          { en: "2005", es: "2005", de: "2005", nl: "2005" },
          { en: "2003", es: "2003", de: "2003", nl: "2003" },
          { en: "2006", es: "2006", de: "2006", nl: "2006" },
          { en: "2004", es: "2004", de: "2004", nl: "2004" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Opportunity rover exceeded all expectations, operating for nearly 15 years despite being designed for just 90 days. It discovered geological evidence that Mars once had liquid water on its surface. The rover traveled over 28 miles across the Martian surface before NASA lost contact during a dust storm in 2018.",
          es: "El rover Opportunity superó todas las expectativas, operando durante casi 15 años a pesar de estar diseñado para solo 90 días. Descubrió evidencia geológica de que Marte una vez tuvo agua líquida en su superficie. El rover viajó más de 28 millas a través de la superficie marciana antes de que la NASA perdiera contacto durante una tormenta de polvo en 2018.",
          de: "Der Opportunity-Rover übertraf alle Erwartungen und war fast 15 Jahre lang in Betrieb, obwohl er nur für 90 Tage konzipiert war. Er entdeckte geologische Beweise dafür, dass der Mars einst flüssiges Wasser auf seiner Oberfläche hatte. Der Rover legte über 28 Meilen auf der Marsoberfläche zurück, bevor die NASA während eines Staubsturms 2018 den Kontakt verlor.",
          nl: "De Opportunity rover overtrof alle verwachtingen en was bijna 15 jaar operationeel, ondanks dat het ontworpen was voor slechts 90 dagen. Het ontdekte geologisch bewijs dat Mars ooit vloeibaar water op zijn oppervlak had. De rover reisde meer dan 28 mijl over het Marsoppervlak voordat NASA het contact verloor tijdens een stofstorm in 2018."
        }
      },
      {
        question: {
          en: "Which famous singer known for 'Sweet Caroline' was born on January 24, 1941?",
          es: "¿Qué cantante famoso conocido por 'Sweet Caroline' nació el 24 de enero de 1941?",
          de: "Welcher berühmte Sänger, bekannt für 'Sweet Caroline', wurde am 24. Januar 1941 geboren?",
          nl: "Welke beroemde zanger bekend van 'Sweet Caroline' werd geboren op 24 januari 1941?"
        },
        options: [
          { en: "Elton John", es: "Elton John", de: "Elton John", nl: "Elton John" },
          { en: "Neil Diamond", es: "Neil Diamond", de: "Neil Diamond", nl: "Neil Diamond" },
          { en: "Paul Simon", es: "Paul Simon", de: "Paul Simon", nl: "Paul Simon" },
          { en: "Billy Joel", es: "Billy Joel", de: "Billy Joel", nl: "Billy Joel" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Neil Diamond is one of the best-selling musicians of all time, with over 130 million records sold worldwide. 'Sweet Caroline' became a cultural phenomenon and sports anthem, particularly at Boston Red Sox games. His career spans six decades with numerous hits including 'Cracklin' Rosie,' 'America,' and 'Hello Again.'",
          es: "Neil Diamond es uno de los músicos más vendidos de todos los tiempos, con más de 130 millones de discos vendidos en todo el mundo. 'Sweet Caroline' se convirtió en un fenómeno cultural y himno deportivo, particularmente en los juegos de los Boston Red Sox. Su carrera abarca seis décadas con numerosos éxitos incluyendo 'Cracklin' Rosie,' 'America' y 'Hello Again.'",
          de: "Neil Diamond ist einer der meistverkauften Musiker aller Zeiten mit über 130 Millionen verkauften Platten weltweit. 'Sweet Caroline' wurde zu einem kulturellen Phänomen und einer Sporthymne, besonders bei Spielen der Boston Red Sox. Seine Karriere erstreckt sich über sechs Jahrzehnte mit zahlreichen Hits wie 'Cracklin' Rosie,' 'America' und 'Hello Again.'",
          nl: "Neil Diamond is een van de best verkopende muzikanten aller tijden, met meer dan 130 miljoen verkochte platen wereldwijd. 'Sweet Caroline' werd een cultureel fenomeen en sporthymne, vooral bij Boston Red Sox-wedstrijden. Zijn carrière beslaat zes decennia met tal van hits waaronder 'Cracklin' Rosie,' 'America' en 'Hello Again.'"
        }
      },
      {
        question: {
          en: "On January 24, 1965, which British Prime Minister died?",
          es: "El 24 de enero de 1965, ¿qué Primer Ministro británico murió?",
          de: "Am 24. Januar 1965 starb welcher britische Premierminister?",
          nl: "Op 24 januari 1965 stierf welke Britse premier?"
        },
        options: [
          { en: "Harold Macmillan", es: "Harold Macmillan", de: "Harold Macmillan", nl: "Harold Macmillan" },
          { en: "Clement Attlee", es: "Clement Attlee", de: "Clement Attlee", nl: "Clement Attlee" },
          { en: "Anthony Eden", es: "Anthony Eden", de: "Anthony Eden", nl: "Anthony Eden" },
          { en: "Winston Churchill", es: "Winston Churchill", de: "Winston Churchill", nl: "Winston Churchill" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Winston Churchill was one of the most influential figures of the 20th century, leading Britain through World War II. His stirring speeches and unwavering determination helped rally the British people during their darkest hour. He received a state funeral attended by representatives from 112 nations, one of the largest gatherings of world leaders in history.",
          es: "Winston Churchill fue una de las figuras más influyentes del siglo XX, liderando a Gran Bretaña durante la Segunda Guerra Mundial. Sus conmovedores discursos y determinación inquebrantable ayudaron a reunir al pueblo británico durante su hora más oscura. Recibió un funeral de estado al que asistieron representantes de 112 naciones, una de las reuniones más grandes de líderes mundiales en la historia.",
          de: "Winston Churchill war eine der einflussreichsten Persönlichkeiten des 20. Jahrhunderts und führte Großbritannien durch den Zweiten Weltkrieg. Seine mitreißenden Reden und unerschütterliche Entschlossenheit halfen, das britische Volk in seiner dunkelsten Stunde zu vereinen. Er erhielt ein Staatsbegräbnis, an dem Vertreter von 112 Nationen teilnahmen, eine der größten Versammlungen von Weltführern in der Geschichte.",
          nl: "Winston Churchill was een van de meest invloedrijke figuren van de 20e eeuw, die Groot-Brittannië door de Tweede Wereldoorlog leidde. Zijn aangrijpende toespraken en onwrikbare vastberadenheid hielpen het Britse volk te verenigen tijdens hun donkerste uur. Hij kreeg een staatsbegrafenis bijgewoond door vertegenwoordigers van 112 naties, een van de grootste bijeenkomsten van wereldleiders in de geschiedenis."
        }
      },
      {
        question: {
          en: "On January 24, 1984, which company introduced the Macintosh personal computer?",
          es: "El 24 de enero de 1984, ¿qué compañía introdujo la computadora personal Macintosh?",
          de: "Am 24. Januar 1984 führte welches Unternehmen den Macintosh-Personal Computer ein?",
          nl: "Op 24 januari 1984 introduceerde welk bedrijf de Macintosh personal computer?"
        },
        options: [
          { en: "Commodore", es: "Commodore", de: "Commodore", nl: "Commodore" },
          { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Macintosh revolutionized personal computing with its graphical user interface and mouse, making computers accessible to everyday users. Introduced with the famous '1984' Super Bowl commercial directed by Ridley Scott, the Mac challenged IBM's dominance. It pioneered the desktop publishing revolution and set design standards that influenced the entire computer industry.",
          es: "El Macintosh revolucionó la informática personal con su interfaz gráfica de usuario y ratón, haciendo que las computadoras fueran accesibles para usuarios comunes. Presentado con el famoso comercial del Super Bowl '1984' dirigido por Ridley Scott, el Mac desafió el dominio de IBM. Fue pionero en la revolución de la autoedición y estableció estándares de diseño que influyeron en toda la industria informática.",
          de: "Der Macintosh revolutionierte das Personal Computing mit seiner grafischen Benutzeroberfläche und Maus und machte Computer für alltägliche Benutzer zugänglich. Eingeführt mit dem berühmten '1984' Super Bowl-Werbespot unter der Regie von Ridley Scott, stellte der Mac IBMs Dominanz in Frage. Er war Pionier der Desktop-Publishing-Revolution und setzte Designstandards, die die gesamte Computerindustrie beeinflussten.",
          nl: "De Macintosh revolutioneerde personal computing met zijn grafische gebruikersinterface en muis, waardoor computers toegankelijk werden voor gewone gebruikers. Geïntroduceerd met de beroemde '1984' Super Bowl-commercial geregisseerd door Ridley Scott, daagde de Mac IBM's dominantie uit. Het was baanbrekend voor de desktop publishing-revolutie en stelde ontwerpstandaarden vast die de hele computerindustrie beïnvloedden."
        }
      }
    ],

    // Day 25 - January 25th: Pope John Paul II Visits Cuba
    day25: [
      {
        question: {
          en: "In what year did Pope John Paul II visit Cuba on January 25?",
          es: "¿En qué año visitó el Papa Juan Pablo II Cuba el 25 de enero?",
          de: "In welchem Jahr besuchte Papst Johannes Paul II. am 25. Januar Kuba?",
          nl: "In welk jaar bezocht paus Johannes Paulus II Cuba op 25 januari?"
        },
        options: [
          { en: "1997", es: "1997", de: "1997", nl: "1997" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "1999", es: "1999", de: "1999", nl: "1999" },
          { en: "1998", es: "1998", de: "1998", nl: "1998" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Pope John Paul II's historic visit to Cuba was the first papal visit to the communist nation since the 1959 revolution. His meetings with Fidel Castro and calls for greater religious freedom marked a significant moment in Vatican-Cuba relations. The visit led to easing of restrictions on the Catholic Church and eventually Christmas being restored as a public holiday in Cuba.",
          es: "La histórica visita del Papa Juan Pablo II a Cuba fue la primera visita papal a la nación comunista desde la revolución de 1959. Sus reuniones con Fidel Castro y sus llamados a una mayor libertad religiosa marcaron un momento significativo en las relaciones Vaticano-Cuba. La visita condujo a la flexibilización de las restricciones sobre la Iglesia Católica y eventualmente la Navidad fue restaurada como día festivo público en Cuba.",
          de: "Papst Johannes Paul II.s historischer Besuch in Kuba war der erste päpstliche Besuch in der kommunistischen Nation seit der Revolution von 1959. Seine Treffen mit Fidel Castro und Aufrufe zu größerer Religionsfreiheit markierten einen bedeutenden Moment in den Beziehungen zwischen Vatikan und Kuba. Der Besuch führte zur Lockerung der Beschränkungen für die katholische Kirche und schließlich wurde Weihnachten als öffentlicher Feiertag in Kuba wiederhergestellt.",
          nl: "Het historische bezoek van paus Johannes Paulus II aan Cuba was het eerste pauselijke bezoek aan de communistische natie sinds de revolutie van 1959. Zijn ontmoetingen met Fidel Castro en oproepen tot grotere religieuze vrijheid markeerden een belangrijk moment in de Vaticaan-Cuba-betrekkingen. Het bezoek leidde tot versoepeling van beperkingen op de katholieke kerk en uiteindelijk werd Kerstmis hersteld als officiële feestdag in Cuba."
        }
      },
      {
        question: {
          en: "On January 25, 1924, the first Winter Olympics began in which French town?",
          es: "El 25 de enero de 1924, los primeros Juegos Olímpicos de Invierno comenzaron en qué ciudad francesa?",
          de: "Am 25. Januar 1924 begannen die ersten Olympischen Winterspiele in welcher französischen Stadt?",
          nl: "Op 25 januari 1924 begonnen de eerste Olympische Winterspelen in welke Franse stad?"
        },
        options: [
          { en: "Grenoble", es: "Grenoble", de: "Grenoble", nl: "Grenoble" },
          { en: "Annecy", es: "Annecy", de: "Annecy", nl: "Annecy" },
          { en: "Chamonix", es: "Chamonix", de: "Chamonix", nl: "Chamonix" },
          { en: "Albertville", es: "Albertville", de: "Albertville", nl: "Albertville" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 1924 Chamonix Games featured 16 nations and 258 athletes competing in events like skiing, ice hockey, figure skating, and bobsled. Originally called 'International Winter Sports Week,' it was retroactively designated as the first Winter Olympics. The picturesque Alpine town established the tradition of separate Winter Games that continues today.",
          es: "Los Juegos de Chamonix de 1924 contaron con 16 naciones y 258 atletas compitiendo en eventos como esquí, hockey sobre hielo, patinaje artístico y bobsled. Originalmente llamado 'Semana Internacional de Deportes de Invierno,' fue designado retroactivamente como los primeros Juegos Olímpicos de Invierno. El pintoresco pueblo alpino estableció la tradición de Juegos de Invierno separados que continúa hoy.",
          de: "Die Chamonix-Spiele 1924 umfassten 16 Nationen und 258 Athleten, die in Disziplinen wie Skifahren, Eishockey, Eiskunstlauf und Bobfahren antraten. Ursprünglich 'Internationale Wintersportwoche' genannt, wurde es rückwirkend als erste Olympische Winterspiele bezeichnet. Das malerische Alpenstädtchen begründete die Tradition separater Winterspiele, die bis heute fortbesteht.",
          nl: "De Chamonix Games van 1924 telden 16 naties en 258 atleten die deelnamen aan evenementen zoals skiën, ijshockey, kunstschaatsen en bobsleeën. Oorspronkelijk 'Internationale Wintersportweek' genoemd, werd het achteraf aangewezen als de eerste Olympische Winterspelen. Het schilderachtige Alpenstadje vestigde de traditie van afzonderlijke Winterspelen die vandaag voortduurt."
        }
      },
      {
        question: {
          en: "Which famous Scottish poet was born on January 25, 1759, and is celebrated annually on Burns Night?",
          es: "¿Qué famoso poeta escocés nació el 25 de enero de 1759 y es celebrado anualmente en la Noche de Burns?",
          de: "Welcher berühmte schottische Dichter wurde am 25. Januar 1759 geboren und wird jährlich am Burns Night gefeiert?",
          nl: "Welke beroemde Schotse dichter werd geboren op 25 januari 1759 en wordt jaarlijks gevierd op Burns Night?"
        },
        options: [
          { en: "Robert Louis Stevenson", es: "Robert Louis Stevenson", de: "Robert Louis Stevenson", nl: "Robert Louis Stevenson" },
          { en: "Sir Walter Scott", es: "Sir Walter Scott", de: "Sir Walter Scott", nl: "Sir Walter Scott" },
          { en: "Robert Burns", es: "Robert Burns", de: "Robert Burns", nl: "Robert Burns" },
          { en: "Lord Byron", es: "Lord Byron", de: "Lord Byron", nl: "Lord Byron" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Robert Burns is Scotland's national poet, beloved for works like 'Auld Lang Syne' and 'Tam o' Shanter.' Burns Night celebrations include traditional Scottish cuisine (haggis, neeps, and tatties), poetry readings, and toasts. His poems celebrated Scottish culture, love, nature, and the common man, making him a cultural icon far beyond Scotland's borders.",
          es: "Robert Burns es el poeta nacional de Escocia, amado por obras como 'Auld Lang Syne' y 'Tam o' Shanter.' Las celebraciones de la Noche de Burns incluyen cocina tradicional escocesa (haggis, neeps y tatties), lecturas de poesía y brindis. Sus poemas celebraban la cultura escocesa, el amor, la naturaleza y el hombre común, convirtiéndolo en un ícono cultural mucho más allá de las fronteras de Escocia.",
          de: "Robert Burns ist Schottlands Nationaldichter, geliebt für Werke wie 'Auld Lang Syne' und 'Tam o' Shanter.' Burns Night-Feiern umfassen traditionelle schottische Küche (Haggis, Steckrüben und Kartoffeln), Gedichtlesungen und Toasts. Seine Gedichte feierten die schottische Kultur, Liebe, Natur und den einfachen Mann und machten ihn zu einer kulturellen Ikone weit über Schottlands Grenzen hinaus.",
          nl: "Robert Burns is Schotlands nationale dichter, geliefd voor werken als 'Auld Lang Syne' en 'Tam o' Shanter.' Burns Night-vieringen omvatten traditionele Schotse keuken (haggis, neeps en tatties), poëzielezingen en toosts. Zijn gedichten vierden de Schotse cultuur, liefde, natuur en de gewone man, wat hem een cultureel icoon maakte ver buiten Schotlands grenzen."
        }
      },
      {
        question: {
          en: "On January 25, 1961, which famous film director was born in Hong Kong?",
          es: "El 25 de enero de 1961, ¿qué famoso director de cine nació en Hong Kong?",
          de: "Am 25. Januar 1961 wurde welcher berühmte Filmregisseur in Hongkong geboren?",
          nl: "Op 25 januari 1961 werd welke beroemde filmregisseur geboren in Hong Kong?"
        },
        options: [
          { en: "Zhang Yimou", es: "Zhang Yimou", de: "Zhang Yimou", nl: "Zhang Yimou" },
          { en: "Ang Lee", es: "Ang Lee", de: "Ang Lee", nl: "Ang Lee" },
          { en: "Wong Kar-wai", es: "Wong Kar-wai", de: "Wong Kar-wai", nl: "Wong Kar-wai" },
          { en: "John Woo", es: "John Woo", de: "John Woo", nl: "John Woo" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Wong Kar-wai is an acclaimed auteur known for his distinctive visual style and poetic narratives. His films include 'In the Mood for Love,' 'Chungking Express,' and '2046,' which explore themes of love, memory, and urban isolation. His work has influenced filmmakers worldwide and earned him numerous international awards including Best Director at Cannes.",
          es: "Wong Kar-wai es un aclamado autor conocido por su distintivo estilo visual y narrativas poéticas. Sus películas incluyen 'In the Mood for Love,' 'Chungking Express' y '2046,' que exploran temas de amor, memoria y aislamiento urbano. Su trabajo ha influido en cineastas de todo el mundo y le ha valido numerosos premios internacionales incluyendo Mejor Director en Cannes.",
          de: "Wong Kar-wai ist ein gefeierter Autorenfilmer, bekannt für seinen unverwechselbaren visuellen Stil und poetische Erzählungen. Seine Filme umfassen 'In the Mood for Love,' 'Chungking Express' und '2046,' die Themen wie Liebe, Erinnerung und urbane Isolation erkunden. Seine Arbeit hat Filmemacher weltweit beeinflusst und ihm zahlreiche internationale Auszeichnungen eingebracht, darunter Bester Regisseur in Cannes.",
          nl: "Wong Kar-wai is een geprezen auteur bekend om zijn onderscheidende visuele stijl en poëtische verhalen. Zijn films omvatten 'In the Mood for Love,' 'Chungking Express' en '2046,' die thema's van liefde, herinnering en stedelijke isolatie verkennen. Zijn werk heeft filmmakers wereldwijd beïnvloed en hem talrijke internationale prijzen opgeleverd, waaronder Beste Regisseur in Cannes."
        }
      },
      {
        question: {
          en: "On January 25, 1947, which American gangster was convicted of tax evasion?",
          es: "El 25 de enero de 1947, ¿qué gánster estadounidense fue condenado por evasión fiscal?",
          de: "Am 25. Januar 1947 wurde welcher amerikanische Gangster wegen Steuerhinterziehung verurteilt?",
          nl: "Op 25 januari 1947 werd welke Amerikaanse gangster veroordeeld voor belastingontduiking?"
        },
        options: [
          { en: "Bugsy Siegel", es: "Bugsy Siegel", de: "Bugsy Siegel", nl: "Bugsy Siegel" },
          { en: "John Dillinger", es: "John Dillinger", de: "John Dillinger", nl: "John Dillinger" },
          { en: "Al Capone", es: "Al Capone", de: "Al Capone", nl: "Al Capone" },
          { en: "Lucky Luciano", es: "Lucky Luciano", de: "Lucky Luciano", nl: "Lucky Luciano" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Al Capone, Chicago's most notorious mob boss during Prohibition, was finally brought down not for his violent crimes but for tax evasion. Federal agents led by Eliot Ness couldn't prosecute him for bootlegging or murder, so they pursued his financial records. He was sentenced to 11 years in federal prison and served time at Alcatraz, marking the end of his criminal empire.",
          es: "Al Capone, el jefe mafioso más notorio de Chicago durante la Prohibición, finalmente fue derribado no por sus crímenes violentos sino por evasión fiscal. Los agentes federales liderados por Eliot Ness no pudieron procesarlo por contrabando o asesinato, así que persiguieron sus registros financieros. Fue sentenciado a 11 años en prisión federal y cumplió tiempo en Alcatraz, marcando el fin de su imperio criminal.",
          de: "Al Capone, Chicagos berüchtigtster Mafiaboss während der Prohibition, wurde schließlich nicht wegen seiner Gewaltverbrechen, sondern wegen Steuerhinterziehung zu Fall gebracht. Bundesagenten unter der Leitung von Eliot Ness konnten ihn nicht wegen Alkoholschmuggel oder Mord anklagen, also verfolgten sie seine Finanzunterlagen. Er wurde zu 11 Jahren Bundesgefängnis verurteilt und verbüßte Zeit in Alcatraz, was das Ende seines kriminellen Imperiums markierte.",
          nl: "Al Capone, Chicago's meest beruchte maffiabaas tijdens de Drooglegging, werd uiteindelijk niet neergehaald voor zijn gewelddadige misdaden maar voor belastingontduiking. Federale agenten onder leiding van Eliot Ness konden hem niet vervolgen voor dranks mokkel of moord, dus gingen ze achter zijn financiële gegevens aan. Hij werd veroordeeld tot 11 jaar federale gevangenis en zat tijd uit in Alcatraz, wat het einde markeerde van zijn criminele imperium."
        }
      }
    ],

    // Day 26 - January 26th: Australia Day & Gretzky
    day26: [
      {
        question: {
          en: "In what year did the First Fleet arrive in Australia on January 26, now celebrated as Australia Day?",
          es: "¿En qué año llegó la Primera Flota a Australia el 26 de enero, ahora celebrado como el Día de Australia?",
          de: "In welchem Jahr kam am 26. Januar die Erste Flotte in Australien an, das heute als Australia Day gefeiert wird?",
          nl: "In welk jaar arriveerde de Eerste Vloot in Australië op 26 januari, nu gevierd als Australia Day?"
        },
        options: [
          { en: "1770", es: "1770", de: "1770", nl: "1770" },
          { en: "1800", es: "1800", de: "1800", nl: "1800" },
          { en: "1788", es: "1788", de: "1788", nl: "1788" },
          { en: "1776", es: "1776", de: "1776", nl: "1776" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The First Fleet consisted of 11 ships carrying over 1,000 people, including convicts, marines, and officials, establishing the first European settlement in Australia. Led by Captain Arthur Phillip, they arrived at Sydney Cove after an eight-month journey from Britain. While celebrated as Australia Day, the date is controversial among Indigenous Australians who refer to it as 'Invasion Day,' marking the beginning of colonization and its devastating impact on Aboriginal peoples.",
          es: "La Primera Flota consistió en 11 barcos que transportaban más de 1,000 personas, incluyendo convictos, marines y funcionarios, estableciendo el primer asentamiento europeo en Australia. Liderados por el Capitán Arthur Phillip, llegaron a Sydney Cove después de un viaje de ocho meses desde Gran Bretaña. Aunque se celebra como el Día de Australia, la fecha es controvertida entre los australianos indígenas que se refieren a ella como 'Día de la Invasión,' marcando el comienzo de la colonización y su impacto devastador en los pueblos aborígenes.",
          de: "Die Erste Flotte bestand aus 11 Schiffen, die über 1.000 Menschen transportierten, darunter Sträflinge, Marines und Beamte, und gründete die erste europäische Siedlung in Australien. Unter der Leitung von Kapitän Arthur Phillip erreichten sie Sydney Cove nach einer achtmonatigen Reise von Großbritannien. Obwohl als Australia Day gefeiert, ist das Datum bei indigenen Australiern umstritten, die es als 'Invasion Day' bezeichnen und den Beginn der Kolonisierung und ihre verheerenden Auswirkungen auf die Aborigines markieren.",
          nl: "De Eerste Vloot bestond uit 11 schepen die meer dan 1.000 mensen vervoerden, waaronder veroordeelden, mariniers en functionarissen, en vestigde de eerste Europese nederzetting in Australië. Onder leiding van kapitein Arthur Phillip arriveerden ze in Sydney Cove na een reis van acht maanden vanuit Groot-Brittannië. Hoewel gevierd als Australia Day, is de datum controversieel onder Indigenous Australiërs die ernaar verwijzen als 'Invasion Day,' wat het begin markeert van de kolonisatie en de verwoestende impact daarvan op de Aboriginalbevolking."
        }
      },
      {
        question: {
          en: "In what year did Michigan become a U.S. state on January 26?",
          es: "¿En qué año se convirtió Michigan en un estado de EE.UU. el 26 de enero?",
          de: "In welchem Jahr wurde Michigan am 26. Januar ein US-Bundesstaat?",
          nl: "In welk jaar werd Michigan op 26 januari een Amerikaanse staat?"
        },
        options: [
          { en: "1840", es: "1840", de: "1840", nl: "1840" },
          { en: "1835", es: "1835", de: "1835", nl: "1835" },
          { en: "1837", es: "1837", de: "1837", nl: "1837" },
          { en: "1836", es: "1836", de: "1836", nl: "1836" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Michigan became the 26th state admitted to the Union, completing a long process delayed by boundary disputes with Ohio known as the Toledo War. Michigan surrendered its claim to the Toledo Strip but gained the entire Upper Peninsula as compensation. The state's abundant natural resources, including copper, iron ore, and timber, would later fuel America's industrial growth.",
          es: "Michigan se convirtió en el estado número 26 admitido en la Unión, completando un largo proceso retrasado por disputas fronterizas con Ohio conocidas como la Guerra de Toledo. Michigan renunció a su reclamo sobre la Franja de Toledo pero ganó toda la Península Superior como compensación. Los abundantes recursos naturales del estado, incluyendo cobre, mineral de hierro y madera, impulsarían más tarde el crecimiento industrial de América.",
          de: "Michigan wurde der 26. Bundesstaat, der in die Union aufgenommen wurde, und vollendete einen langen Prozess, der durch Grenzstreitigkeiten mit Ohio, bekannt als der Toledo-Krieg, verzögert wurde. Michigan verzichtete auf seinen Anspruch auf den Toledo Strip, erhielt aber die gesamte Obere Halbinsel als Kompensation. Die reichlich vorhandenen natürlichen Ressourcen des Staates, einschließlich Kupfer, Eisenerz und Holz, würden später Amerikas industrielles Wachstum ankurbeln.",
          nl: "Michigan werd de 26e staat die tot de Unie werd toegelaten, waarmee een lang proces werd voltooid dat was vertraagd door grensdisputen met Ohio, bekend als de Toledo-oorlog. Michigan gaf zijn claim op de Toledo Strip op maar kreeg het gehele bovenste schiereiland als compensatie. De overvloedige natuurlijke hulpbronnen van de staat, waaronder koper, ijzererts en hout, zouden later de industriële groei van Amerika aandrijven."
        }
      },
      {
        question: {
          en: "In what year did India become a republic on January 26?",
          es: "¿En qué año se convirtió India en una república el 26 de enero?",
          de: "In welchem Jahr wurde Indien am 26. Januar eine Republik?",
          nl: "In welk jaar werd India op 26 januari een republiek?"
        },
        options: [
          { en: "1952", es: "1952", de: "1952", nl: "1952" },
          { en: "1947", es: "1947", de: "1947", nl: "1947" },
          { en: "1949", es: "1949", de: "1949", nl: "1949" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" }
        ],
        correctIndex: 3,
        explanation: {
          en: "India adopted its Constitution on January 26, 1950, becoming a sovereign democratic republic three years after gaining independence from Britain. Republic Day commemorates this historic transition from British Dominion to a republic with an elected head of state. The Constitution, the world's longest written constitution, established India as a secular, democratic nation guaranteeing fundamental rights to all citizens.",
          es: "India adoptó su Constitución el 26 de enero de 1950, convirtiéndose en una república democrática soberana tres años después de obtener la independencia de Gran Bretaña. El Día de la República conmemora esta transición histórica del Dominio Británico a una república con un jefe de estado elegido. La Constitución, la constitución escrita más larga del mundo, estableció a India como una nación secular y democrática que garantiza derechos fundamentales a todos los ciudadanos.",
          de: "Indien verabschiedete am 26. Januar 1950 seine Verfassung und wurde drei Jahre nach der Unabhängigkeit von Großbritannien eine souveräne demokratische Republik. Der Tag der Republik gedenkt dieses historischen Übergangs vom britischen Dominion zu einer Republik mit einem gewählten Staatsoberhaupt. Die Verfassung, die längste geschriebene Verfassung der Welt, etablierte Indien als säkulare, demokratische Nation, die allen Bürgern Grundrechte garantiert.",
          nl: "India nam op 26 januari 1950 zijn grondwet aan en werd een soevereine democratische republiek, drie jaar na het verkrijgen van onafhankelijkheid van Groot-Brittannië. Republiekdag herdenkt deze historische overgang van Brits dominium naar een republiek met een gekozen staatshoofd. De grondwet, 's werelds langste geschreven grondwet, vestigde India als een seculiere, democratische natie die fundamentele rechten garandeert aan alle burgers."
        }
      },
      {
        question: {
          en: "Which legendary hockey player known as 'The Great One' was born on January 26, 1961?",
          es: "¿Qué jugador legendario de hockey conocido como 'El Grande' nació el 26 de enero de 1961?",
          de: "Welcher legendäre Eishockeyspieler, bekannt als 'The Great One', wurde am 26. Januar 1961 geboren?",
          nl: "Welke legendarische hockeyspeler bekend als 'The Great One' werd geboren op 26 januari 1961?"
        },
        options: [
          { en: "Wayne Gretzky", es: "Wayne Gretzky", de: "Wayne Gretzky", nl: "Wayne Gretzky" },
          { en: "Bobby Orr", es: "Bobby Orr", de: "Bobby Orr", nl: "Bobby Orr" },
          { en: "Gordie Howe", es: "Gordie Howe", de: "Gordie Howe", nl: "Gordie Howe" },
          { en: "Mario Lemieux", es: "Mario Lemieux", de: "Mario Lemieux", nl: "Mario Lemieux" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Wayne Gretzky is widely considered the greatest hockey player of all time, holding or sharing 61 NHL records. He won four Stanley Cups with the Edmonton Oilers and earned nine Hart Trophies as league MVP. His jersey number 99 has been retired league-wide, the only player to receive this honor across all NHL teams.",
          es: "Wayne Gretzky es ampliamente considerado el mejor jugador de hockey de todos los tiempos, poseyendo o compartiendo 61 récords de la NHL. Ganó cuatro Copas Stanley con los Edmonton Oilers y obtuvo nueve Trofeos Hart como MVP de la liga. Su número de camiseta 99 ha sido retirado en toda la liga, el único jugador en recibir este honor en todos los equipos de la NHL.",
          de: "Wayne Gretzky gilt weithin als der größte Eishockeyspieler aller Zeiten und hält oder teilt 61 NHL-Rekorde. Er gewann vier Stanley Cups mit den Edmonton Oilers und erhielt neun Hart Trophies als Liga-MVP. Seine Trikotnummer 99 wurde ligaweit zurückgezogen, der einzige Spieler, der diese Ehre bei allen NHL-Teams erhielt.",
          nl: "Wayne Gretzky wordt algemeen beschouwd als de beste hockeyspeler aller tijden, met 61 NHL-records die hij houdt of deelt. Hij won vier Stanley Cups met de Edmonton Oilers en verdiende negen Hart Trophies als league MVP. Zijn rugnummer 99 is liga-breed met pensioen gegaan, de enige speler die deze eer ontving bij alle NHL-teams."
        }
      },
      {
        question: {
          en: "Which comedian and talk show host was born on January 26, 1958?",
          es: "¿Qué comediante y presentador de programas de entrevistas nació el 26 de enero de 1958?",
          de: "Welcher Komiker und Talkshow-Moderator wurde am 26. Januar 1958 geboren?",
          nl: "Welke komiek en talkshowhost werd geboren op 26 januari 1958?"
        },
        options: [
          { en: "Oprah Winfrey", es: "Oprah Winfrey", de: "Oprah Winfrey", nl: "Oprah Winfrey" },
          { en: "Jay Leno", es: "Jay Leno", de: "Jay Leno", nl: "Jay Leno" },
          { en: "David Letterman", es: "David Letterman", de: "David Letterman", nl: "David Letterman" },
          { en: "Ellen DeGeneres", es: "Ellen DeGeneres", de: "Ellen DeGeneres", nl: "Ellen DeGeneres" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Ellen DeGeneres became a groundbreaking figure in entertainment, hosting her Emmy Award-winning talk show 'The Ellen DeGeneres Show' for 19 seasons. She made history in 1997 when her character on 'Ellen' came out as gay, becoming the first lead character on television to do so. Her career has included stand-up comedy, acting, producing, and advocacy for LGBTQ+ rights and animal welfare.",
          es: "Ellen DeGeneres se convirtió en una figura pionera en el entretenimiento, presentando su programa de entrevistas ganador del Emmy 'The Ellen DeGeneres Show' durante 19 temporadas. Hizo historia en 1997 cuando su personaje en 'Ellen' salió del armario como gay, convirtiéndose en el primer personaje principal en televisión en hacerlo. Su carrera ha incluido comedia de stand-up, actuación, producción y defensa de los derechos LGBTQ+ y el bienestar animal.",
          de: "Ellen DeGeneres wurde zu einer bahnbrechenden Figur in der Unterhaltungsbranche und moderierte 19 Staffeln lang ihre mit dem Emmy-Award ausgezeichnete Talkshow 'The Ellen DeGeneres Show'. Sie machte Geschichte, als ihre Figur in 'Ellen' 1997 als lesbisch herausgestellt wurde und damit die erste Hauptfigur im Fernsehen wurde, die dies tat. Ihre Karriere umfasste Stand-up-Comedy, Schauspielerei, Produktion und Einsatz für LGBTQ+-Rechte und Tierschutz.",
          nl: "Ellen DeGeneres werd een baanbrekende figuur in de entertainmentwereld en presenteerde 19 seizoenen lang haar Emmy Award-winnende talkshow 'The Ellen DeGeneres Show'. Ze maakte geschiedenis in 1997 toen haar personage in 'Ellen' uit de kast kwam als gay, waarmee ze het eerste hoofdpersonage op televisie werd dat dit deed. Haar carrière omvatte stand-up comedy, acteren, produceren en belangenbehartiging voor LGBTQ+-rechten en dierenwelzijn."
        }
      }
    ],

    // Day 27 - January 27th: Auschwitz Liberation & Mozart
    day27: [
      {
        question: {
          en: "In what year was Auschwitz concentration camp liberated by Soviet troops on January 27?",
          es: "¿En qué año fue liberado el campo de concentración de Auschwitz por las tropas soviéticas el 27 de enero?",
          de: "In welchem Jahr wurde am 27. Januar das Konzentrationslager Auschwitz von sowjetischen Truppen befreit?",
          nl: "In welk jaar werd concentratiekamp Auschwitz bevrijd door Sovjet-troepen op 27 januari?"
        },
        options: [
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1943", es: "1943", de: "1943", nl: "1943" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The liberation of Auschwitz revealed the full horror of the Holocaust to the world. Soviet forces found approximately 7,000 surviving prisoners, most in critical condition, along with evidence of mass murder including personal belongings of victims. January 27 is now observed as International Holocaust Remembrance Day to honor the memory of the six million Jewish victims and millions of others killed by the Nazi regime.",
          es: "La liberación de Auschwitz reveló todo el horror del Holocausto al mundo. Las fuerzas soviéticas encontraron aproximadamente 7,000 prisioneros sobrevivientes, la mayoría en estado crítico, junto con evidencia de asesinatos en masa incluyendo pertenencias personales de las víctimas. El 27 de enero ahora se observa como el Día Internacional de Conmemoración en Memoria de las Víctimas del Holocausto para honrar la memoria de los seis millones de víctimas judías y millones de otras personas asesinadas por el régimen nazi.",
          de: "Die Befreiung von Auschwitz offenbarte das volle Grauen des Holocaust der Welt. Sowjetische Streitkräfte fanden etwa 7.000 überlebende Gefangene, die meisten in kritischem Zustand, zusammen mit Beweisen für Massenmord einschließlich persönlicher Habseligkeiten der Opfer. Der 27. Januar wird nun als Internationaler Tag des Gedenkens an die Opfer des Holocaust begangen, um das Andenken an die sechs Millionen jüdischen Opfer und Millionen anderer durch das NS-Regime getöteter Menschen zu ehren.",
          nl: "De bevrijding van Auschwitz onthulde de volledige verschrikking van de Holocaust aan de wereld. Sovjet-troepen vonden ongeveer 7.000 overlevende gevangenen, de meesten in kritieke toestand, samen met bewijs van massamoord waaronder persoonlijke bezittingen van slachtoffers. 27 januari wordt nu herdacht als Internationale Holocaustherdenk ingsdag ter nagedachtenis aan de zes miljoen joodse slachtoffers en miljoenen anderen die door het nazi-regime werden vermoord."
        }
      },
      {
        question: {
          en: "In what year did the Siege of Leningrad end on January 27 after 872 days?",
          es: "¿En qué año terminó el Sitio de Leningrado el 27 de enero después de 872 días?",
          de: "In welchem Jahr endete am 27. Januar die Belagerung von Leningrad nach 872 Tagen?",
          nl: "In welk jaar eindigde het Beleg van Leningrad op 27 januari na 872 dagen?"
        },
        options: [
          { en: "1942", es: "1942", de: "1942", nl: "1942" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1943", es: "1943", de: "1943", nl: "1943" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Siege of Leningrad was one of the longest and most devastating sieges in history, lasting from September 1941 to January 1944. An estimated 800,000 to 1.5 million civilians died, mostly from starvation and cold during the brutal winters. The city's heroic resistance became a symbol of Soviet determination, and residents endured unimaginable hardships including eating wallpaper paste and leather to survive.",
          es: "El Sitio de Leningrado fue uno de los sitios más largos y devastadores de la historia, durando desde septiembre de 1941 hasta enero de 1944. Se estima que murieron entre 800,000 y 1.5 millones de civiles, principalmente por inanición y frío durante los brutales inviernos. La heroica resistencia de la ciudad se convirtió en un símbolo de la determinación soviética, y los residentes soportaron penurias inimaginables incluyendo comer pasta de empapelar y cuero para sobrevivir.",
          de: "Die Belagerung von Leningrad war eine der längsten und verheerendsten Belagerungen der Geschichte und dauerte von September 1941 bis Januar 1944. Schätzungsweise 800.000 bis 1,5 Millionen Zivilisten starben, die meisten durch Hunger und Kälte während der brutalen Winter. Der heroische Widerstand der Stadt wurde zum Symbol sowjetischer Entschlossenheit, und die Bewohner ertrugen unvorstellbare Härten, einschließlich des Verzehrs von Tapetenkleister und Leder zum Überleben.",
          nl: "Het Beleg van Leningrad was een van de langste en meest verwoestende belegeringen in de geschiedenis, dat duurde van september 1941 tot januari 1944. Naar schatting stierven 800.000 tot 1,5 miljoen burgers, voornamelijk door verhongering en kou tijdens de barre winters. Het heroïsche verzet van de stad werd een symbool van Sovjet-vastberadenheid, en bewoners doorstonden onvoorstelbare ontberingen, waaronder het eten van behangplaksel en leer om te overleven."
        }
      },
      {
        question: {
          en: "In what year did the Apollo 1 fire kill three astronauts on January 27?",
          es: "¿En qué año el incendio del Apolo 1 mató a tres astronautas el 27 de enero?",
          de: "In welchem Jahr tötete am 27. Januar das Apollo-1-Feuer drei Astronauten?",
          nl: "In welk jaar doodde de Apollo 1-brand drie astronauten op 27 januari?"
        },
        options: [
          { en: "1966", es: "1966", de: "1966", nl: "1966" },
          { en: "1969", es: "1969", de: "1969", nl: "1969" },
          { en: "1968", es: "1968", de: "1968", nl: "1968" },
          { en: "1967", es: "1967", de: "1967", nl: "1967" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Apollo 1 fire killed astronauts Gus Grissom, Ed White, and Roger Chaffee during a launch rehearsal test. A spark ignited the pure oxygen atmosphere inside the command module, causing a flash fire that killed all three in seconds. This tragedy led to major redesigns of the Apollo spacecraft, ultimately making it safer for the successful moon landings that followed.",
          es: "El incendio del Apolo 1 mató a los astronautas Gus Grissom, Ed White y Roger Chaffee durante una prueba de ensayo de lanzamiento. Una chispa encendió la atmósfera de oxígeno puro dentro del módulo de comando, causando un incendio repentino que mató a los tres en segundos. Esta tragedia llevó a importantes rediseños de la nave espacial Apollo, haciéndola finalmente más segura para los exitosos aterrizajes lunares que siguieron.",
          de: "Das Apollo-1-Feuer tötete die Astronauten Gus Grissom, Ed White und Roger Chaffee während eines Start-Probetests. Ein Funke entzündete die reine Sauerstoffatmosphäre im Kommandomodul und verursachte einen Blitzfeuer, das alle drei in Sekunden tötete. Diese Tragödie führte zu umfangreichen Neugestaltungen des Apollo-Raumschiffs und machte es letztendlich sicherer für die erfolgreichen Mondlandungen, die folgten.",
          nl: "De Apollo 1-brand doodde astronauten Gus Grissom, Ed White en Roger Chaffee tijdens een lanceringsrepetitietest. Een vonk ontstak de zuivere zuurstofatmosfeer in de commandomodule, wat een vlitsbrand veroorzaakte die alle drie in seconden doodde. Deze tragedie leidde tot belangrijke herontwerpen van het Apollo-ruimtevaartuig, wat het uiteindelijk veiliger maakte voor de succesvolle maanlandingen die volgden."
        }
      },
      {
        question: {
          en: "In what year were the Paris Peace Accords signed on January 27, officially ending U.S. involvement in the Vietnam War?",
          es: "¿En qué año se firmaron los Acuerdos de Paz de París el 27 de enero, poniendo fin oficialmente a la participación de EE.UU. en la Guerra de Vietnam?",
          de: "In welchem Jahr wurden am 27. Januar die Pariser Friedensabkommen unterzeichnet, die offiziell die US-Beteiligung am Vietnamkrieg beendeten?",
          nl: "In welk jaar werden de Parisvrede-akkoorden getekend op 27 januari, waarmee officieel een einde kwam aan de Amerikaanse betrokkenheid bij de Vietnamoorlog?"
        },
        options: [
          { en: "1975", es: "1975", de: "1975", nl: "1975" },
          { en: "1973", es: "1973", de: "1973", nl: "1973" },
          { en: "1974", es: "1974", de: "1974", nl: "1974" },
          { en: "1972", es: "1972", de: "1972", nl: "1972" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Paris Peace Accords formally ended direct U.S. military involvement in Vietnam after years of negotiations. The agreement called for a ceasefire, withdrawal of U.S. troops, and release of prisoners of war. However, fighting between North and South Vietnam continued until Saigon fell in April 1975, completing North Vietnam's victory and reunifying the country under communist rule.",
          es: "Los Acuerdos de Paz de París pusieron fin formalmente a la participación militar directa de EE.UU. en Vietnam después de años de negociaciones. El acuerdo solicitó un alto el fuego, la retirada de las tropas estadounidenses y la liberación de prisioneros de guerra. Sin embargo, los combates entre Vietnam del Norte y del Sur continuaron hasta que Saigón cayó en abril de 1975, completando la victoria de Vietnam del Norte y reunificando el país bajo el gobierno comunista.",
          de: "Die Pariser Friedensabkommen beendeten formell die direkte militärische Beteiligung der USA in Vietnam nach jahrelangen Verhandlungen. Das Abkommen forderte einen Waffenstillstand, den Abzug der US-Truppen und die Freilassung von Kriegsgefangenen. Die Kämpfe zwischen Nord- und Südvietnam dauerten jedoch bis zum Fall Saigons im April 1975 an, wodurch der Sieg Nordvietnams vollendet und das Land unter kommunistischer Herrschaft wiedervereinigt wurde.",
          nl: "De Parisvrede-akkoorden beëindigden formeel de directe militaire betrokkenheid van de VS in Vietnam na jaren van onderhandelingen. Het akkoord riep op tot een staakt-het-vuren, terugtrekking van Amerikaanse troepen en vrijlating van krijgsgevangenen. De gevechten tussen Noord- en Zuid-Vietnam gingen echter door totdat Saigon viel in april 1975, waarmee de overwinning van Noord-Vietnam werd voltooid en het land werd herenigd onder communistisch bewind."
        }
      },
      {
        question: {
          en: "Which famous composer was born on January 27, 1756?",
          es: "¿Qué famoso compositor nació el 27 de enero de 1756?",
          de: "Welcher berühmte Komponist wurde am 27. Januar 1756 geboren?",
          nl: "Welke beroemde componist werd geboren op 27 januari 1756?"
        },
        options: [
          { en: "Franz Schubert", es: "Franz Schubert", de: "Franz Schubert", nl: "Franz Schubert" },
          { en: "Ludwig van Beethoven", es: "Ludwig van Beethoven", de: "Ludwig van Beethoven", nl: "Ludwig van Beethoven" },
          { en: "Johann Sebastian Bach", es: "Johann Sebastian Bach", de: "Johann Sebastian Bach", nl: "Johann Sebastian Bach" },
          { en: "Wolfgang Amadeus Mozart", es: "Wolfgang Amadeus Mozart", de: "Wolfgang Amadeus Mozart", nl: "Wolfgang Amadeus Mozart" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Wolfgang Amadeus Mozart was a prolific and influential composer of the Classical period, creating over 600 works including symphonies, operas, concertos, and chamber music. Despite his tragically short life (he died at 35), his compositions remain among the most performed and beloved in classical music. His operas like 'The Magic Flute' and 'Don Giovanni' and his Requiem Mass continue to captivate audiences worldwide.",
          es: "Wolfgang Amadeus Mozart fue un compositor prolífico e influyente del período Clásico, creando más de 600 obras incluyendo sinfonías, óperas, conciertos y música de cámara. A pesar de su trágicamente corta vida (murió a los 35 años), sus composiciones permanecen entre las más interpretadas y amadas de la música clásica. Sus óperas como 'La Flauta Mágica' y 'Don Giovanni' y su Misa de Réquiem continúan cautivando audiencias en todo el mundo.",
          de: "Wolfgang Amadeus Mozart war ein produktiver und einflussreicher Komponist der Klassik, der über 600 Werke schuf, darunter Symphonien, Opern, Konzerte und Kammermusik. Trotz seines tragisch kurzen Lebens (er starb mit 35 Jahren) gehören seine Kompositionen zu den am häufigsten aufgeführten und beliebtesten der klassischen Musik. Seine Opern wie 'Die Zauberflöte' und 'Don Giovanni' sowie seine Requiem-Messe faszinieren weiterhin Publikum weltweit.",
          nl: "Wolfgang Amadeus Mozart was een productieve en invloedrijke componist uit de Klassieke periode, die meer dan 600 werken creëerde waaronder symfonieën, opera's, concerten en kamermuziek. Ondanks zijn tragisch korte leven (hij stierf op 35-jarige leeftijd) blijven zijn composities behoren tot de meest uitgevoerde en geliefde in de klassieke muziek. Zijn opera's zoals 'De Toverfluit' en 'Don Giovanni' en zijn Requiem Mis blijven publiek wereldwijd boeien."
        }
      }
    ],

    // Day 28 - January 28th: Challenger Disaster
    day28: [
      {
        question: {
          en: "In what year did the Space Shuttle Challenger break apart 73 seconds after launch on January 28?",
          es: "¿En qué año el transbordador espacial Challenger se desintegró 73 segundos después del lanzamiento el 28 de enero?",
          de: "In welchem Jahr zerbrach am 28. Januar das Space Shuttle Challenger 73 Sekunden nach dem Start?",
          nl: "In welk jaar brak de Space Shuttle Challenger uit elkaar 73 seconden na de lancering op 28 januari?"
        },
        options: [
          { en: "1986", es: "1986", de: "1986", nl: "1986" },
          { en: "1985", es: "1985", de: "1985", nl: "1985" },
          { en: "1987", es: "1987", de: "1987", nl: "1987" },
          { en: "1984", es: "1984", de: "1984", nl: "1984" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Challenger disaster killed all seven crew members, including Christa McAuliffe, who would have been the first teacher in space. The tragedy was caused by the failure of an O-ring seal in the right solid rocket booster, compromised by unusually cold temperatures. The disaster was witnessed live by millions, including schoolchildren watching McAuliffe, and led to a 32-month suspension of the shuttle program.",
          es: "El desastre del Challenger mató a los siete miembros de la tripulación, incluyendo a Christa McAuliffe, quien habría sido la primera maestra en el espacio. La tragedia fue causada por la falla de un sello de junta tórica en el cohete propulsor sólido derecho, comprometido por temperaturas inusualmente frías. El desastre fue presenciado en vivo por millones, incluyendo niños escolares que veían a McAuliffe, y llevó a una suspensión de 32 meses del programa del transbordador.",
          de: "Die Challenger-Katastrophe tötete alle sieben Besatzungsmitglieder, darunter Christa McAuliffe, die die erste Lehrerin im Weltraum geworden wäre. Die Tragödie wurde durch den Ausfall einer O-Ring-Dichtung in der rechten Feststoffrakete verursacht, die durch ungewöhnlich kalte Temperaturen beeinträchtigt wurde. Die Katastrophe wurde live von Millionen miterlebt, darunter Schulkinder, die McAuliffe sahen, und führte zu einer 32-monatigen Aussetzung des Shuttle-Programms.",
          nl: "De Challenger-ramp doodde alle zeven bemanningsleden, waaronder Christa McAuliffe, die de eerste leraar in de ruimte zou zijn geweest. De tragedie werd veroorzaakt door het falen van een O-ringafdichting in de rechter vaste brandstofraket, aangetast door ongewoon koude temperaturen. De ramp werd live gezien door miljoenen, waaronder schoolkinderen die naar McAuliffe keken, en leidde tot een opschorting van 32 maanden van het shuttleprogramma."
        }
      },
      {
        question: {
          en: "In what year did USA for Africa record 'We Are the World' on January 28?",
          es: "¿En qué año USA for Africa grabó 'We Are the World' el 28 de enero?",
          de: "In welchem Jahr nahm USA for Africa am 28. Januar 'We Are the World' auf?",
          nl: "In welk jaar nam USA for Africa 'We Are the World' op op 28 januari?"
        },
        options: [
          { en: "1984", es: "1984", de: "1984", nl: "1984" },
          { en: "1986", es: "1986", de: "1986", nl: "1986" },
          { en: "1987", es: "1987", de: "1987", nl: "1987" },
          { en: "1985", es: "1985", de: "1985", nl: "1985" }
        ],
        correctIndex: 3,
        explanation: {
          en: "'We Are the World' brought together 45 of the biggest music stars including Michael Jackson, Lionel Richie, Bruce Springsteen, and Stevie Wonder to raise funds for African famine relief. Written by Jackson and Richie, the charity single became one of the best-selling singles of all time, raising over $63 million. It set the standard for celebrity charity collaborations that followed.",
          es: "'We Are the World' reunió a 45 de las estrellas de música más grandes incluyendo Michael Jackson, Lionel Richie, Bruce Springsteen y Stevie Wonder para recaudar fondos para el alivio de la hambruna africana. Escrito por Jackson y Richie, el sencillo benéfico se convirtió en uno de los sencillos más vendidos de todos los tiempos, recaudando más de $63 millones. Estableció el estándar para colaboraciones benéficas de celebridades que siguieron.",
          de: "'We Are the World' brachte 45 der größten Musikstars zusammen, darunter Michael Jackson, Lionel Richie, Bruce Springsteen und Stevie Wonder, um Spenden für die Hungersnot in Afrika zu sammeln. Von Jackson und Richie geschrieben, wurde die Wohltätigkeitssingle eine der meistverkauften Singles aller Zeiten und sammelte über 63 Millionen Dollar. Sie setzte den Standard für prominente Wohltätigkeitskooperationen, die folgten.",
          nl: "'We Are the World' bracht 45 van de grootste muzieksterren samen, waaronder Michael Jackson, Lionel Richie, Bruce Springsteen en Stevie Wonder, om fondsen te werven voor Afrikaanse hongersnoodhulp. Geschreven door Jackson en Richie, werd de goede doelensingel een van de best verkochte singles aller tijden en bracht meer dan $63 miljoen op. Het zette de standaard voor beroemdheidsliefdadigheidscollaboraties die volgden."
        }
      },
      {
        question: {
          en: "In what year did Charlemagne, the first Holy Roman Emperor, die on January 28?",
          es: "¿En qué año murió Carlomagno, el primer Emperador del Sacro Imperio Romano, el 28 de enero?",
          de: "In welchem Jahr starb Karl der Große, der erste Kaiser des Heiligen Römischen Reiches, am 28. Januar?",
          nl: "In welk jaar stierf Karel de Grote, de eerste keizer van het Heilige Roomse Rijk, op 28 januari?"
        },
        options: [
          { en: "810", es: "810", de: "810", nl: "810" },
          { en: "814", es: "814", de: "814", nl: "814" },
          { en: "820", es: "820", de: "820", nl: "820" },
          { en: "800", es: "800", de: "800", nl: "800" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Charlemagne united much of Western Europe during the early Middle Ages and became the first recognized Holy Roman Emperor in 800 AD. His reign marked the Carolingian Renaissance, a period of cultural and intellectual revival. He promoted education, standardized currency, and established a strong central government that influenced European politics for centuries to come.",
          es: "Carlomagno unificó gran parte de Europa Occidental durante la Alta Edad Media y se convirtió en el primer emperador del Sacro Imperio Romano reconocido en 800 d.C. Su reinado marcó el Renacimiento Carolingio, un período de renacimiento cultural e intelectual. Promovió la educación, estandarizó la moneda y estableció un fuerte gobierno central que influyó en la política europea durante siglos.",
          de: "Karl der Große einte einen Großteil Westeuropas während des frühen Mittelalters und wurde 800 n. Chr. zum ersten anerkannten Kaiser des Heiligen Römischen Reiches. Seine Herrschaft markierte die Karolingische Renaissance, eine Periode kultureller und intellektueller Erneuerung. Er förderte Bildung, standardisierte Währung und etablierte eine starke Zentralregierung, die die europäische Politik jahrhundertelang beeinflusste.",
          nl: "Karel de Grote verenigde een groot deel van West-Europa tijdens de vroege Middeleeuwen en werd in 800 na Christus de eerste erkende keizer van het Heilige Roomse Rijk. Zijn regering markeerde de Karolingische Renaissance, een periode van culturele en intellectuele heropleving. Hij bevorderde onderwijs, standaardiseerde valuta en vestigde een sterke centrale regering die de Europese politiek eeuwenlang zou beïnvloeden."
        }
      },
      {
        question: {
          en: "On January 28, 1547, which English king died?",
          es: "El 28 de enero de 1547, ¿qué rey inglés murió?",
          de: "Am 28. Januar 1547 starb welcher englische König?",
          nl: "Op 28 januari 1547 stierf welke Engelse koning?"
        },
        options: [
          { en: "Richard III", es: "Ricardo III", de: "Richard III.", nl: "Richard III" },
          { en: "Edward VI", es: "Eduardo VI", de: "Eduard VI.", nl: "Eduard VI" },
          { en: "Henry VII", es: "Enrique VII", de: "Heinrich VII.", nl: "Hendrik VII" },
          { en: "Henry VIII", es: "Enrique VIII", de: "Heinrich VIII.", nl: "Hendrik VIII" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Henry VIII was one of England's most famous monarchs, known for his six marriages and his break with the Roman Catholic Church, establishing the Church of England. His reign saw significant religious, political, and social changes including the English Reformation and the Dissolution of the Monasteries. He was succeeded by his son Edward VI, who was only nine years old.",
          es: "Enrique VIII fue uno de los monarcas más famosos de Inglaterra, conocido por sus seis matrimonios y su ruptura con la Iglesia Católica Romana, estableciendo la Iglesia de Inglaterra. Su reinado vio cambios religiosos, políticos y sociales significativos incluyendo la Reforma Inglesa y la Disolución de los Monasterios. Fue sucedido por su hijo Eduardo VI, quien tenía solo nueve años.",
          de: "Heinrich VIII. war einer der berühmtesten Monarchen Englands, bekannt für seine sechs Ehen und seinen Bruch mit der römisch-katholischen Kirche, wodurch er die Kirche von England etablierte. Seine Herrschaft sah bedeutende religiöse, politische und soziale Veränderungen einschließlich der englischen Reformation und der Auflösung der Klöster. Ihm folgte sein Sohn Eduard VI., der erst neun Jahre alt war.",
          nl: "Hendrik VIII was een van Engeland's meest beroemde vorsten, bekend om zijn zes huwelijken en zijn breuk met de Rooms-Katholieke Kerk, waarmee hij de Kerk van Engeland vestigde. Zijn regering zag aanzienlijke religieuze, politieke en sociale veranderingen, waaronder de Engelse Reformatie en de Ontbinding van de Kloosters. Hij werd opgevolgd door zijn zoon Edward VI, die slechts negen jaar oud was."
        }
      },
      {
        question: {
          en: "On January 28, 1807, which major street in London was first lit by gaslight?",
          es: "El 28 de enero de 1807, ¿qué calle principal de Londres fue iluminada por primera vez con luz de gas?",
          de: "Am 28. Januar 1807 wurde welche Hauptstraße in London zum ersten Mal mit Gaslicht beleuchtet?",
          nl: "Op 28 januari 1807 werd welke hoofdstraat in Londen voor het eerst verlicht met gaslicht?"
        },
        options: [
          { en: "Oxford Street", es: "Oxford Street", de: "Oxford Street", nl: "Oxford Street" },
          { en: "Piccadilly", es: "Piccadilly", de: "Piccadilly", nl: "Piccadilly" },
          { en: "Regent Street", es: "Regent Street", de: "Regent Street", nl: "Regent Street" },
          { en: "Pall Mall", es: "Pall Mall", de: "Pall Mall", nl: "Pall Mall" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Pall Mall became the first street in the world to be lit by gaslight, marking a revolutionary moment in urban infrastructure. This innovation by Frederick Albert Winsor transformed nighttime city life, improving safety and extending business hours. Gaslight rapidly spread to other cities worldwide, fundamentally changing how people lived and worked after dark.",
          es: "Pall Mall se convirtió en la primera calle del mundo en ser iluminada con luz de gas, marcando un momento revolucionario en la infraestructura urbana. Esta innovación de Frederick Albert Winsor transformó la vida nocturna de la ciudad, mejorando la seguridad y extendiendo las horas comerciales. La iluminación de gas se extendió rápidamente a otras ciudades en todo el mundo, cambiando fundamentalmente cómo las personas vivían y trabajaban después del anochecer.",
          de: "Pall Mall wurde die erste Straße der Welt, die mit Gaslicht beleuchtet wurde, und markierte einen revolutionären Moment in der städtischen Infrastruktur. Diese Innovation von Frederick Albert Winsor verwandelte das nächtliche Stadtleben, verbesserte die Sicherheit und verlängerte die Geschäftszeiten. Gaslicht verbreitete sich schnell in anderen Städten weltweit und veränderte grundlegend, wie Menschen nach Einbruch der Dunkelheit lebten und arbeiteten.",
          nl: "Pall Mall werd de eerste straat ter wereld die met gaslicht werd verlicht, wat een revolutionair moment in stedelijke infrastructuur markeerde. Deze innovatie van Frederick Albert Winsor transformeerde het nachtelijke stadsleven, verbeterde de veiligheid en verlengde openingstijden. Gaslicht verspreidde zich snel naar andere steden wereldwijd en veranderde fundamenteel hoe mensen leefden en werkten na het donker."
        }
      }
    ],

    // Day 29 - January 29th: Romeo & Juliet First Performance
    day29: [
      {
        question: {
          en: "In what year was Shakespeare's 'Romeo and Juliet' first performed on January 29?",
          es: "¿En qué año se representó por primera vez 'Romeo y Julieta' de Shakespeare el 29 de enero?",
          de: "In welchem Jahr wurde Shakespeares 'Romeo und Julia' am 29. Januar uraufgeführt?",
          nl: "In welk jaar werd Shakespeare's 'Romeo en Julia' voor het eerst opgevoerd op 29 januari?"
        },
        options: [
          { en: "1590", es: "1590", de: "1590", nl: "1590" },
          { en: "1595", es: "1595", de: "1595", nl: "1595" },
          { en: "1585", es: "1585", de: "1585", nl: "1585" },
          { en: "1600", es: "1600", de: "1600", nl: "1600" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Romeo and Juliet is one of Shakespeare's most famous tragedies, telling the story of two young star-crossed lovers from feuding families in Verona. The play explores themes of love, fate, and the destructive nature of family conflict. It has become a timeless symbol of romantic love and has been adapted countless times in theatre, film, ballet, and opera.",
          es: "Romeo y Julieta es una de las tragedias más famosas de Shakespeare, que cuenta la historia de dos jóvenes amantes de familias enemistadas en Verona. La obra explora temas de amor, destino y la naturaleza destructiva del conflicto familiar. Se ha convertido en un símbolo atemporal del amor romántico y ha sido adaptada innumerables veces en teatro, cine, ballet y ópera.",
          de: "Romeo und Julia ist eine von Shakespeares berühmtesten Tragödien, die die Geschichte zweier junger Liebender aus verfeindeten Familien in Verona erzählt. Das Stück erforscht Themen wie Liebe, Schicksal und die zerstörerische Natur von Familienkonflikten. Es ist zu einem zeitlosen Symbol romantischer Liebe geworden und wurde unzählige Male für Theater, Film, Ballett und Oper adaptiert.",
          nl: "Romeo en Julia is een van Shakespeare's beroemdste tragedies, die het verhaal vertelt van twee jonge geliefden uit vijandige families in Verona. Het stuk verkent thema's van liefde, lot en de destructieve aard van familieconflicten. Het is een tijdloos symbool van romantische liefde geworden en is talloze malen bewerkt voor theater, film, ballet en opera."
        }
      },
      {
        question: {
          en: "On January 29, 1886, which German engineer received a patent for the first successful gasoline-powered automobile?",
          es: "El 29 de enero de 1886, ¿qué ingeniero alemán recibió una patente por el primer automóvil exitoso de gasolina?",
          de: "Am 29. Januar 1886 erhielt welcher deutsche Ingenieur ein Patent für das erste erfolgreiche benzinbetriebene Automobil?",
          nl: "Op 29 januari 1886 ontving welke Duitse ingenieur een patent voor de eerste succesvolle benzine-aangedreven auto?"
        },
        options: [
          { en: "Rudolf Diesel", es: "Rudolf Diesel", de: "Rudolf Diesel", nl: "Rudolf Diesel" },
          { en: "Gottlieb Daimler", es: "Gottlieb Daimler", de: "Gottlieb Daimler", nl: "Gottlieb Daimler" },
          { en: "Henry Ford", es: "Henry Ford", de: "Henry Ford", nl: "Henry Ford" },
          { en: "Karl Benz", es: "Karl Benz", de: "Karl Benz", nl: "Karl Benz" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Karl Benz's Motorwagen was the first automobile designed to be powered by an internal combustion engine, marking the birth of the modern automobile industry. His three-wheeled vehicle featured innovations like electric ignition and a water-cooled engine. Today, Mercedes-Benz carries his name as a testament to his pioneering work in automotive engineering.",
          es: "El Motorwagen de Karl Benz fue el primer automóvil diseñado para ser impulsado por un motor de combustión interna, marcando el nacimiento de la industria automotriz moderna. Su vehículo de tres ruedas presentaba innovaciones como encendido eléctrico y un motor refrigerado por agua. Hoy, Mercedes-Benz lleva su nombre como testimonio de su trabajo pionero en ingeniería automotriz.",
          de: "Karl Benz' Motorwagen war das erste Automobil, das für den Antrieb durch einen Verbrennungsmotor entwickelt wurde, und markierte die Geburt der modernen Automobilindustrie. Sein dreirädriges Fahrzeug verfügte über Innovationen wie elektrische Zündung und einen wassergekühlten Motor. Heute trägt Mercedes-Benz seinen Namen als Zeugnis seiner Pionierarbeit im Automobilbau.",
          nl: "Karl Benz's Motorwagen was de eerste auto die ontworpen was om aangedreven te worden door een verbrandingsmotor, wat de geboorte van de moderne auto-industrie markeerde. Zijn driewielig voertuig had innovaties zoals elektrische ontsteking en een watergekoelde motor. Tegenwoordig draagt Mercedes-Benz zijn naam als eerbetoon aan zijn baanbrekende werk in auto-engineering."
        }
      },
      {
        question: {
          en: "On January 29, 2002, which U.S. president gave his State of the Union address that included the phrase 'axis of evil'?",
          es: "El 29 de enero de 2002, ¿qué presidente de EE.UU. pronunció su discurso del Estado de la Unión que incluyó la frase 'eje del mal'?",
          de: "Am 29. Januar 2002 hielt welcher US-Präsident seine State of the Union-Rede, die den Begriff 'Achse des Bösen' enthielt?",
          nl: "Op 29 januari 2002 hield welke Amerikaanse president zijn State of the Union-toespraak met daarin de uitdrukking 'as van het kwaad'?"
        },
        options: [
          { en: "George H.W. Bush", es: "George H.W. Bush", de: "George H.W. Bush", nl: "George H.W. Bush" },
          { en: "Bill Clinton", es: "Bill Clinton", de: "Bill Clinton", nl: "Bill Clinton" },
          { en: "George W. Bush", es: "George W. Bush", de: "George W. Bush", nl: "George W. Bush" },
          { en: "Barack Obama", es: "Barack Obama", de: "Barack Obama", nl: "Barack Obama" }
        ],
        correctIndex: 2,
        explanation: {
          en: "President Bush used the term 'axis of evil' to describe Iraq, Iran, and North Korea in his first State of the Union address after the September 11 attacks. The phrase became highly controversial and shaped U.S. foreign policy for years, particularly in justifying the 2003 invasion of Iraq. It reflected the administration's post-9/11 approach to combating terrorism and preventing weapons of mass destruction proliferation.",
          es: "El presidente Bush utilizó el término 'eje del mal' para describir a Irak, Irán y Corea del Norte en su primer discurso del Estado de la Unión después de los ataques del 11 de septiembre. La frase se volvió muy controvertida y moldeó la política exterior de EE.UU. durante años, particularmente para justificar la invasión de Irak en 2003. Reflejó el enfoque de la administración posterior al 11-S para combatir el terrorismo y prevenir la proliferación de armas de destrucción masiva.",
          de: "Präsident Bush verwendete den Begriff 'Achse des Bösen', um Irak, Iran und Nordkorea in seiner ersten State of the Union-Rede nach den Anschlägen vom 11. September zu beschreiben. Der Ausdruck wurde höchst umstritten und prägte jahrelang die US-Außenpolitik, insbesondere zur Rechtfertigung der Invasion im Irak 2003. Er spiegelte den Ansatz der Regierung nach 9/11 zur Terrorismusbekämpfung und Verhinderung der Verbreitung von Massenvernichtungswaffen wider.",
          nl: "President Bush gebruikte de term 'as van het kwaad' om Irak, Iran en Noord-Korea te beschrijven in zijn eerste State of the Union-toespraak na de aanslagen van 11 september. De uitdrukking werd zeer controversieel en vormde jarenlang het Amerikaanse buitenlandse beleid, vooral bij het rechtvaardigen van de invasie van Irak in 2003. Het weerspiegelde de benadering van de regering na 9/11 om terrorisme te bestrijden en de verspreiding van massavernietigingswapens te voorkomen."
        }
      },
      {
        question: {
          en: "Which famous talk show host was born on January 29, 1954?",
          es: "¿Qué famoso presentador de programas de entrevistas nació el 29 de enero de 1954?",
          de: "Welcher berühmte Talkshow-Moderator wurde am 29. Januar 1954 geboren?",
          nl: "Welke beroemde talkshowhost werd geboren op 29 januari 1954?"
        },
        options: [
          { en: "Oprah Winfrey", es: "Oprah Winfrey", de: "Oprah Winfrey", nl: "Oprah Winfrey" },
          { en: "Ellen DeGeneres", es: "Ellen DeGeneres", de: "Ellen DeGeneres", nl: "Ellen DeGeneres" },
          { en: "Jay Leno", es: "Jay Leno", de: "Jay Leno", nl: "Jay Leno" },
          { en: "David Letterman", es: "David Letterman", de: "David Letterman", nl: "David Letterman" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Oprah Winfrey became one of the most influential media personalities in history through her talk show, which ran for 25 years. Born into poverty in Mississippi, she overcame significant adversity to build a media empire including television production, magazine publishing, and cable networks. She is also known for her philanthropy, book club influence, and advocacy for education and women's empowerment.",
          es: "Oprah Winfrey se convirtió en una de las personalidades mediáticas más influyentes de la historia a través de su programa de entrevistas, que duró 25 años. Nacida en la pobreza en Mississippi, superó adversidades significativas para construir un imperio mediático que incluye producción televisiva, publicación de revistas y cadenas de cable. También es conocida por su filantropía, la influencia de su club de lectura y su defensa de la educación y el empoderamiento de las mujeres.",
          de: "Oprah Winfrey wurde durch ihre Talkshow, die 25 Jahre lief, zu einer der einflussreichsten Medienpersönlichkeiten der Geschichte. Geboren in Armut in Mississippi, überwand sie erhebliche Widrigkeiten, um ein Medienimperium aufzubauen, das Fernsehproduktion, Zeitschriftenverlag und Kabelnetze umfasst. Sie ist auch bekannt für ihre Philanthropie, den Einfluss ihres Buchclubs und ihr Eintreten für Bildung und Frauenförderung.",
          nl: "Oprah Winfrey werd een van de meest invloedrijke mediapersoonlijkheden in de geschiedenis door haar talkshow, die 25 jaar liep. Geboren in armoede in Mississippi, overwon ze aanzienlijke tegenspoed om een media-imperium op te bouwen inclusief televisieproductie, tijdschriftuitgeverij en kabelnetwerken. Ze is ook bekend om haar filantropie, de invloed van haar boekenclub en haar pleidooi voor onderwijs en empowerment van vrouwen."
        }
      },
      {
        question: {
          en: "On January 29, 1845, which famous poem by Edgar Allan Poe was first published?",
          es: "El 29 de enero de 1845, ¿qué famoso poema de Edgar Allan Poe fue publicado por primera vez?",
          de: "Am 29. Januar 1845 wurde welches berühmte Gedicht von Edgar Allan Poe erstmals veröffentlicht?",
          nl: "Op 29 januari 1845 werd welk beroemd gedicht van Edgar Allan Poe voor het eerst gepubliceerd?"
        },
        options: [
          { en: "The Raven", es: "El Cuervo", de: "Der Rabe", nl: "De Raaf" },
          { en: "Lenore", es: "Lenore", de: "Lenore", nl: "Lenore" },
          { en: "The Bells", es: "Las Campanas", de: "Die Glocken", nl: "De Klokken" },
          { en: "Annabel Lee", es: "Annabel Lee", de: "Annabel Lee", nl: "Annabel Lee" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Raven is Poe's most famous poem, featuring the haunting refrain 'Nevermore' spoken by a mysterious raven. The narrative poem tells of a grieving man visited by the bird while mourning his lost love Lenore. Its musicality, dark atmosphere, and exploration of grief made it an instant sensation and cemented Poe's reputation as a master of Gothic literature.",
          es: "El Cuervo es el poema más famoso de Poe, que presenta el estribillo inquietante 'Nunca más' pronunciado por un cuervo misterioso. El poema narrativo cuenta la historia de un hombre afligido visitado por el pájaro mientras llora a su amor perdido Lenore. Su musicalidad, atmósfera oscura y exploración del duelo lo convirtieron en una sensación instantánea y consolidaron la reputación de Poe como maestro de la literatura gótica.",
          de: "Der Rabe ist Poes berühmtestes Gedicht, das den eindringlichen Refrain 'Nimmermehr' enthält, gesprochen von einem mysteriösen Raben. Das narrative Gedicht erzählt von einem trauernden Mann, der von dem Vogel besucht wird, während er um seine verlorene Liebe Lenore trauert. Seine Musikalität, düstere Atmosphäre und die Erforschung der Trauer machten es zu einer sofortigen Sensation und festigten Poes Ruf als Meister der Gothic-Literatur.",
          nl: "De Raaf is Poe's beroemdste gedicht, met het angstaanjagende refrein 'Nimmermeer' gesproken door een mysterieuze raaf. Het verhalende gedicht vertelt over een rouwende man die wordt bezocht door de vogel terwijl hij rouwt om zijn verloren liefde Lenore. Zijn muzikaliteit, donkere sfeer en verkenning van verdriet maakten het een onmiddellijke sensatie en verstevigden Poe's reputatie als meester van de gotische literatuur."
        }
      }
    ],

    // Day 30 - January 30th: First Female Mayor in U.S.
    day30: [
      {
        question: {
          en: "In what year was Susanna M. Salter elected as the first female mayor in the United States on January 30?",
          es: "¿En qué año fue elegida Susanna M. Salter como la primera alcaldesa en los Estados Unidos el 30 de enero?",
          de: "In welchem Jahr wurde Susanna M. Salter am 30. Januar zur ersten weiblichen Bürgermeisterin in den Vereinigten Staaten gewählt?",
          nl: "In welk jaar werd Susanna M. Salter op 30 januari gekozen als de eerste vrouwelijke burgemeester in de Verenigde Staten?"
        },
        options: [
          { en: "1890", es: "1890", de: "1890", nl: "1890" },
          { en: "1885", es: "1885", de: "1885", nl: "1885" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1887", es: "1887", de: "1887", nl: "1887" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Susanna Salter was elected mayor of Argonia, Kansas, making her the first woman mayor in the United States. Ironically, she was nominated as a prank by men opposed to women's suffrage who hoped to embarrass the temperance movement. Instead, she won two-thirds of the vote and served a successful one-year term, paving the way for women in political leadership.",
          es: "Susanna Salter fue elegida alcaldesa de Argonia, Kansas, convirtiéndola en la primera mujer alcaldesa de los Estados Unidos. Irónicamente, fue nominada como una broma por hombres opuestos al sufragio femenino que esperaban avergonzar al movimiento por la templanza. En cambio, ganó dos tercios de los votos y sirvió un exitoso mandato de un año, allanando el camino para las mujeres en el liderazgo político.",
          de: "Susanna Salter wurde zur Bürgermeisterin von Argonia, Kansas, gewählt und war damit die erste weibliche Bürgermeisterin in den Vereinigten Staaten. Ironischerweise wurde sie als Scherz von Männern nominiert, die gegen das Frauenwahlrecht waren und hofften, die Abstinenzbewegung in Verlegenheit zu bringen. Stattdessen gewann sie zwei Drittel der Stimmen und diente eine erfolgreiche einjährige Amtszeit, die den Weg für Frauen in politischer Führung ebnete.",
          nl: "Susanna Salter werd gekozen tot burgemeester van Argonia, Kansas, waarmee ze de eerste vrouwelijke burgemeester in de Verenigde Staten werd. Ironisch genoeg werd ze genomineerd als grap door mannen die tegen vrouwenkiesrecht waren en hoopten de matigheidsbeweging in verlegenheid te brengen. In plaats daarvan won ze tweederde van de stemmen en diende een succesvol eenjarig termijn, waarmee ze de weg vrijmaakte voor vrouwen in politiek leiderschap."
        }
      },
      {
        question: {
          en: "On January 30, 1948, which political and spiritual leader was assassinated in New Delhi?",
          es: "El 30 de enero de 1948, ¿qué líder político y espiritual fue asesinado en Nueva Delhi?",
          de: "Am 30. Januar 1948 wurde welcher politische und spirituelle Führer in Neu-Delhi ermordet?",
          nl: "Op 30 januari 1948 werd welke politieke en spirituele leider vermoord in New Delhi?"
        },
        options: [
          { en: "Mahatma Gandhi", es: "Mahatma Gandhi", de: "Mahatma Gandhi", nl: "Mahatma Gandhi" },
          { en: "Muhammad Ali Jinnah", es: "Muhammad Ali Jinnah", de: "Muhammad Ali Jinnah", nl: "Muhammad Ali Jinnah" },
          { en: "Subhas Chandra Bose", es: "Subhas Chandra Bose", de: "Subhas Chandra Bose", nl: "Subhas Chandra Bose" },
          { en: "Jawaharlal Nehru", es: "Jawaharlal Nehru", de: "Jawaharlal Nehru", nl: "Jawaharlal Nehru" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Mahatma Gandhi led India's non-violent independence movement against British colonial rule, advocating for civil disobedience and peaceful resistance. He was assassinated by a Hindu nationalist who opposed his advocacy for Hindu-Muslim unity. Gandhi's philosophy of non-violence inspired civil rights movements worldwide, including Martin Luther King Jr.'s campaign in the United States.",
          es: "Mahatma Gandhi lideró el movimiento independentista no violento de la India contra el dominio colonial británico, abogando por la desobediencia civil y la resistencia pacífica. Fue asesinado por un nacionalista hindú que se oponía a su defensa de la unidad hindú-musulmana. La filosofía de no violencia de Gandhi inspiró movimientos de derechos civiles en todo el mundo, incluida la campaña de Martin Luther King Jr. en Estados Unidos.",
          de: "Mahatma Gandhi führte Indiens gewaltfreie Unabhängigkeitsbewegung gegen die britische Kolonialherrschaft an und setzte sich für zivilen Ungehorsam und friedlichen Widerstand ein. Er wurde von einem hinduistischen Nationalisten ermordet, der sich gegen sein Eintreten für hinduistisch-muslimische Einheit stellte. Gandhis Philosophie der Gewaltlosigkeit inspirierte Bürgerrechtsbewegungen weltweit, einschließlich Martin Luther King Jr.s Kampagne in den Vereinigten Staaten.",
          nl: "Mahatma Gandhi leidde India's geweldloze onafhankelijkheidsbeweging tegen de Britse koloniale overheersing, en pleitte voor burgerlijke ongehoorzaamheid en vreedzaam verzet. Hij werd vermoord door een hindoe-nationalist die tegen zijn pleidooi voor hindoe-islamitische eenheid was. Gandhi's filosofie van geweldloosheid inspireerde burgerrechten bewegingen wereldwijd, waaronder Martin Luther King Jr.'s campagne in de Verenigde Staten."
        }
      },
      {
        question: {
          en: "On January 30, 1933, which political figure became Chancellor of Germany?",
          es: "El 30 de enero de 1933, ¿qué figura política se convirtió en Canciller de Alemania?",
          de: "Am 30. Januar 1933 wurde welche politische Figur Reichskanzler von Deutschland?",
          nl: "Op 30 januari 1933 werd welke politieke figuur Rijkskanselier van Duitsland?"
        },
        options: [
          { en: "Joseph Goebbels", es: "Joseph Goebbels", de: "Joseph Goebbels", nl: "Joseph Goebbels" },
          { en: "Hermann Göring", es: "Hermann Göring", de: "Hermann Göring", nl: "Hermann Göring" },
          { en: "Adolf Hitler", es: "Adolf Hitler", de: "Adolf Hitler", nl: "Adolf Hitler" },
          { en: "Paul von Hindenburg", es: "Paul von Hindenburg", de: "Paul von Hindenburg", nl: "Paul von Hindenburg" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Hitler's appointment as Chancellor marked the beginning of Nazi Germany and one of history's darkest periods. Within months, he consolidated power through the Enabling Act, effectively ending democracy in Germany. This event led to World War II and the Holocaust, resulting in the deaths of millions and fundamentally reshaping the 20th century.",
          es: "El nombramiento de Hitler como Canciller marcó el comienzo de la Alemania nazi y uno de los períodos más oscuros de la historia. En meses, consolidó el poder a través de la Ley de Habilitación, terminando efectivamente la democracia en Alemania. Este evento condujo a la Segunda Guerra Mundial y el Holocausto, resultando en la muerte de millones y remodelando fundamentalmente el siglo XX.",
          de: "Hitlers Ernennung zum Reichskanzler markierte den Beginn des nationalsozialistischen Deutschlands und einer der dunkelsten Perioden der Geschichte. Innerhalb von Monaten konsolidierte er die Macht durch das Ermächtigungsgesetz und beendete effektiv die Demokratie in Deutschland. Dieses Ereignis führte zum Zweiten Weltkrieg und dem Holocaust, was zum Tod von Millionen führte und das 20. Jahrhundert grundlegend umgestaltete.",
          nl: "Hitlers benoeming tot Rijkskanselier markeerde het begin van Nazi-Duitsland en een van de donkerste perioden uit de geschiedenis. Binnen enkele maanden consolideerde hij de macht door de Machtigingswet, waarmee de democratie in Duitsland effectief werd beëindigd. Deze gebeurtenis leidde tot de Tweede Wereldoorlog en de Holocaust, met als gevolg de dood van miljoenen en een fundamentele hervorming van de 20e eeuw."
        }
      },
      {
        question: {
          en: "On January 30, 1972, which event became known as 'Bloody Sunday' in Northern Ireland?",
          es: "El 30 de enero de 1972, ¿qué evento se conoció como 'Domingo Sangriento' en Irlanda del Norte?",
          de: "Am 30. Januar 1972 wurde welches Ereignis als 'Bloody Sunday' in Nordirland bekannt?",
          nl: "Op 30 januari 1972 werd welke gebeurtenis bekend als 'Bloody Sunday' in Noord-Ierland?"
        },
        options: [
          { en: "British soldiers killed 14 civil rights protesters", es: "Soldados británicos mataron a 14 manifestantes por los derechos civiles", de: "Britische Soldaten töteten 14 Bürgerrechtsdemonstranten", nl: "Britse soldaten doodden 14 burgerrechtenbetogers" },
          { en: "Prison riot", es: "Motín en prisión", de: "Gefängnisaufstand", nl: "Gevangenisoproer" },
          { en: "IRA bombing in Belfast", es: "Bombardeo del IRA en Belfast", de: "IRA-Bombenanschlag in Belfast", nl: "IRA-bomaanslag in Belfast" },
          { en: "Political assassination", es: "Asesinato político", de: "Politischer Mord", nl: "Politieke moord" }
        ],
        correctIndex: 0,
        explanation: {
          en: "British paratroopers opened fire on unarmed civil rights marchers in Derry, killing 14 civilians in what became one of the darkest days of The Troubles. The march was protesting internment without trial of suspected Irish nationalists. A 2010 inquiry concluded that the killings were unjustified and unjustifiable, leading to a formal British government apology.",
          es: "Los paracaidistas británicos abrieron fuego contra manifestantes desarmados por los derechos civiles en Derry, matando a 14 civiles en lo que se convirtió en uno de los días más oscuros de Los Problemas. La marcha protestaba contra el internamiento sin juicio de sospechosos nacionalistas irlandeses. Una investigación de 2010 concluyó que las muertes fueron injustificadas e injustificables, lo que llevó a una disculpa formal del gobierno británico.",
          de: "Britische Fallschirmjäger eröffneten das Feuer auf unbewaffnete Bürgerrechtsdemonstranten in Derry und töteten 14 Zivilisten in einem der dunkelsten Tage des Nordirlandkonflikts. Der Marsch protestierte gegen Internierung ohne Prozess mutmaßlicher irischer Nationalisten. Eine Untersuchung von 2010 kam zu dem Schluss, dass die Tötungen ungerechtfertigt und nicht zu rechtfertigen waren, was zu einer formellen Entschuldigung der britischen Regierung führte.",
          nl: "Britse parachutisten openden het vuur op ongewapende burgerrechtenbetogers in Derry, waarbij 14 burgers werden gedood in wat een van de donkerste dagen van The Troubles werd. De mars was een protest tegen internering zonder proces van vermoedelijke Ierse nationalisten. Een onderzoek uit 2010 concludeerde dat de moorden ongerechtvaardigd en onverantwoordelijk waren, wat leidde tot een formele verontschuldiging van de Britse regering."
        }
      },
      {
        question: {
          en: "Which American President was born on January 30, 1882?",
          es: "¿Qué Presidente estadounidense nació el 30 de enero de 1882?",
          de: "Welcher amerikanische Präsident wurde am 30. Januar 1882 geboren?",
          nl: "Welke Amerikaanse president werd geboren op 30 januari 1882?"
        },
        options: [
          { en: "Harry S. Truman", es: "Harry S. Truman", de: "Harry S. Truman", nl: "Harry S. Truman" },
          { en: "Woodrow Wilson", es: "Woodrow Wilson", de: "Woodrow Wilson", nl: "Woodrow Wilson" },
          { en: "Theodore Roosevelt", es: "Theodore Roosevelt", de: "Theodore Roosevelt", nl: "Theodore Roosevelt" },
          { en: "Franklin D. Roosevelt", es: "Franklin D. Roosevelt", de: "Franklin D. Roosevelt", nl: "Franklin D. Roosevelt" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Franklin D. Roosevelt served as the 32nd President for an unprecedented four terms, leading America through the Great Depression and World War II. His New Deal programs fundamentally transformed the role of the federal government in American life. Despite being paralyzed from polio, he became one of America's most consequential presidents, establishing Social Security and other lasting reforms.",
          es: "Franklin D. Roosevelt sirvió como el 32º Presidente durante cuatro mandatos sin precedentes, liderando a América a través de la Gran Depresión y la Segunda Guerra Mundial. Sus programas del New Deal transformaron fundamentalmente el papel del gobierno federal en la vida estadounidense. A pesar de estar paralizado por la polio, se convirtió en uno de los presidentes más influyentes de América, estableciendo la Seguridad Social y otras reformas duraderas.",
          de: "Franklin D. Roosevelt diente als 32. Präsident für beispiellose vier Amtszeiten und führte Amerika durch die Große Depression und den Zweiten Weltkrieg. Seine New-Deal-Programme transformierten grundlegend die Rolle der Bundesregierung im amerikanischen Leben. Trotz Lähmung durch Polio wurde er einer der einflussreichsten Präsidenten Amerikas und etablierte die Sozialversicherung und andere dauerhafte Reformen.",
          nl: "Franklin D. Roosevelt diende als de 32e president voor ongekende vier termijnen, en leidde Amerika door de Grote Depressie en de Tweede Wereldoorlog. Zijn New Deal-programma's transformeerden fundamenteel de rol van de federale regering in het Amerikaanse leven. Ondanks verlamming door polio werd hij een van Amerika's meest invloedrijke presidenten en vestigde hij de sociale zekerheid en andere blijvende hervormingen."
        }
      }
    ],

    // Day 31 - January 31st: Guy Fawkes & Explorer 1
    day31: [
      {
        question: {
          en: "In what year was Guy Fawkes executed for his role in the Gunpowder Plot on January 31?",
          es: "¿En qué año fue ejecutado Guy Fawkes por su papel en el Complot de la Pólvora el 31 de enero?",
          de: "In welchem Jahr wurde Guy Fawkes am 31. Januar wegen seiner Rolle im Pulververschwörung hingerichtet?",
          nl: "In welk jaar werd Guy Fawkes geëxecuteerd voor zijn rol in het Buskruitverraad op 31 januari?"
        },
        options: [
          { en: "1606", es: "1606", de: "1606", nl: "1606" },
          { en: "1605", es: "1605", de: "1605", nl: "1605" },
          { en: "1604", es: "1604", de: "1604", nl: "1604" },
          { en: "1607", es: "1607", de: "1607", nl: "1607" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Guy Fawkes was part of a Catholic conspiracy to blow up the English Parliament and King James I on November 5, 1605. Discovered guarding 36 barrels of gunpowder beneath the House of Lords, he was arrested, tortured, and executed. The failed plot is still commemorated annually in Britain with Bonfire Night celebrations featuring fireworks and burning effigies of Fawkes.",
          es: "Guy Fawkes fue parte de una conspiración católica para hacer explotar el Parlamento inglés y al Rey Jaime I el 5 de noviembre de 1605. Descubierto custodiando 36 barriles de pólvora debajo de la Cámara de los Lores, fue arrestado, torturado y ejecutado. El complot fallido todavía se conmemora anualmente en Gran Bretaña con celebraciones de la Noche de las Hogueras con fuegos artificiales y quema de efigies de Fawkes.",
          de: "Guy Fawkes war Teil einer katholischen Verschwörung, um das englische Parlament und König James I. am 5. November 1605 in die Luft zu sprengen. Er wurde entdeckt, als er 36 Fässer Schießpulver unter dem House of Lords bewachte, verhaftet, gefoltert und hingerichtet. Das gescheiterte Komplott wird in Großbritannien noch jährlich mit Bonfire Night-Feiern mit Feuerwerk und brennenden Fawkes-Puppen gedacht.",
          nl: "Guy Fawkes maakte deel uit van een katholieke samenzwering om het Engelse parlement en koning James I op 5 november 1605 op te blazen. Ontdekt terwijl hij 36 vaten buskruit onder het Hogerhuis bewaakte, werd hij gearresteerd, gemarteld en geëxecuteerd. De mislukte samenzwering wordt nog steeds jaarlijks in Groot-Brittannië herdacht met Bonfire Night-vieringen met vuurwerk en het verbranden van Fawkes-beelden."
        }
      },
      {
        question: {
          en: "In what year was Explorer 1, the first U.S. satellite, launched on January 31?",
          es: "¿En qué año fue lanzado Explorer 1, el primer satélite de EE.UU., el 31 de enero?",
          de: "In welchem Jahr wurde am 31. Januar Explorer 1, der erste US-Satellit, gestartet?",
          nl: "In welk jaar werd Explorer 1, de eerste Amerikaanse satelliet, gelanceerd op 31 januari?"
        },
        options: [
          { en: "1957", es: "1957", de: "1957", nl: "1957" },
          { en: "1958", es: "1958", de: "1958", nl: "1958" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" },
          { en: "1959", es: "1959", de: "1959", nl: "1959" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Explorer 1 was America's response to the Soviet Union's Sputnik satellite, marking the U.S. entry into the Space Race. The satellite discovered the Van Allen radiation belts surrounding Earth, making its first major scientific contribution. This launch led directly to the creation of NASA later that year and accelerated America's space exploration efforts.",
          es: "Explorer 1 fue la respuesta de América al satélite Sputnik de la Unión Soviética, marcando la entrada de EE.UU. en la Carrera Espacial. El satélite descubrió los cinturones de radiación de Van Allen que rodean la Tierra, haciendo su primera contribución científica importante. Este lanzamiento condujo directamente a la creación de la NASA más tarde ese año y aceleró los esfuerzos de exploración espacial de América.",
          de: "Explorer 1 war Amerikas Antwort auf den sowjetischen Sputnik-Satelliten und markierte den Eintritt der USA in das Weltraumrennen. Der Satellit entdeckte die Van-Allen-Strahlungsgürtel um die Erde und leistete seinen ersten großen wissenschaftlichen Beitrag. Dieser Start führte direkt zur Gründung der NASA später in diesem Jahr und beschleunigte Amerikas Weltraumforschungsbemühungen.",
          nl: "Explorer 1 was Amerika's antwoord op de Sovjet-Unie's Spoetnik-satelliet, wat de Amerikaanse toetreding tot de ruimtewedloop markeerde. De satelliet ontdekte de Van Allen-stralingsgordels rond de aarde, waarmee het zijn eerste grote wetenschappelijke bijdrage leverde. Deze lancering leidde direct tot de oprichting van NASA later dat jaar en versnelde Amerika's ruimteverkenningsinspanningen."
        }
      },
      {
        question: {
          en: "In what year did the House of Representatives pass the 13th Amendment abolishing slavery on January 31?",
          es: "¿En qué año la Cámara de Representantes aprobó la Enmienda 13 que abolía la esclavitud el 31 de enero?",
          de: "In welchem Jahr verabschiedete am 31. Januar das Repräsentantenhaus das 13. Amendment zur Abschaffung der Sklaverei?",
          nl: "In welk jaar keurde het Huis van Afgevaardigden het 13e amendement goed dat slavernij afschafte op 31 januari?"
        },
        options: [
          { en: "1863", es: "1863", de: "1863", nl: "1863" },
          { en: "1865", es: "1865", de: "1865", nl: "1865" },
          { en: "1866", es: "1866", de: "1866", nl: "1866" },
          { en: "1864", es: "1864", de: "1864", nl: "1864" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 13th Amendment officially abolished slavery and involuntary servitude throughout the United States, passing just months before the end of the Civil War. President Lincoln heavily lobbied for its passage, seeing it as essential to permanently ending slavery beyond his Emancipation Proclamation. The amendment was ratified by the states in December 1865, fundamentally transforming American society and law.",
          es: "La Enmienda 13 abolió oficialmente la esclavitud y la servidumbre involuntaria en todos los Estados Unidos, aprobándose solo meses antes del final de la Guerra Civil. El presidente Lincoln presionó intensamente por su aprobación, viéndola como esencial para terminar permanentemente con la esclavitud más allá de su Proclamación de Emancipación. La enmienda fue ratificada por los estados en diciembre de 1865, transformando fundamentalmente la sociedad y la ley estadounidenses.",
          de: "Das 13. Amendment schaffte offiziell Sklaverei und unfreiwillige Knechtschaft in den gesamten Vereinigten Staaten ab und wurde nur Monate vor dem Ende des Bürgerkriegs verabschiedet. Präsident Lincoln setzte sich stark für dessen Verabschiedung ein, da er es als wesentlich ansah, die Sklaverei dauerhaft über seine Emanzipationsproklamation hinaus zu beenden. Das Amendment wurde im Dezember 1865 von den Staaten ratifiziert und transformierte die amerikanische Gesellschaft und das Recht grundlegend.",
          nl: "Het 13e amendement schafte officieel slavernij en onvrijwillige dienstbaarheid in de hele Verenigde Staten af, en werd slechts enkele maanden voor het einde van de Burgeroorlog aangenomen. President Lincoln lobbyde intensief voor de aanname ervan, omdat hij het essentieel achtte om slavernij permanent te beëindigen, voorbij zijn Emancipatieproclamatie. Het amendement werd in december 1865 door de staten geratificeerd, wat de Amerikaanse samenleving en wet fundamenteel transformeerde."
        }
      },
      {
        question: {
          en: "In what year did Ham the Chimp become the first hominid launched into space by NASA on January 31?",
          es: "¿En qué año Ham el Chimpancé se convirtió en el primer homínido lanzado al espacio por la NASA el 31 de enero?",
          de: "In welchem Jahr wurde am 31. Januar Ham der Schimpanse zum ersten Hominiden, der von der NASA ins All geschickt wurde?",
          nl: "In welk jaar werd Ham de Chimpansee de eerste mensaap die door NASA de ruimte in werd gestuurd op 31 januari?"
        },
        options: [
          { en: "1959", es: "1959", de: "1959", nl: "1959" },
          { en: "1962", es: "1962", de: "1962", nl: "1962" },
          { en: "1961", es: "1961", de: "1961", nl: "1961" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ham's successful 16-minute suborbital flight paved the way for human spaceflight, demonstrating that astronauts could safely perform tasks in space. He was trained to pull levers in response to signals during the flight, proving cognitive functions could work in zero gravity. His mission came just three months before Alan Shepard became the first American in space.",
          es: "El exitoso vuelo suborbital de 16 minutos de Ham allanó el camino para el vuelo espacial humano, demostrando que los astronautas podían realizar tareas de manera segura en el espacio. Fue entrenado para tirar palancas en respuesta a señales durante el vuelo, probando que las funciones cognitivas podían funcionar en gravedad cero. Su misión llegó solo tres meses antes de que Alan Shepard se convirtiera en el primer estadounidense en el espacio.",
          de: "Hams erfolgreicher 16-minütiger suborbitaler Flug ebnete den Weg für die bemannte Raumfahrt und zeigte, dass Astronauten sicher Aufgaben im Weltraum ausführen konnten. Er wurde trainiert, während des Fluges als Reaktion auf Signale Hebel zu ziehen, was bewies, dass kognitive Funktionen in der Schwerelosigkeit funktionieren konnten. Seine Mission kam nur drei Monate bevor Alan Shepard der erste Amerikaner im Weltraum wurde.",
          nl: "Ham's succesvolle 16 minuten durende suborbitale vlucht maakte de weg vrij voor menselijke ruimtevaart, door aan te tonen dat astronauten veilig taken konden uitvoeren in de ruimte. Hij werd getraind om hefbomen te bedienen als reactie op signalen tijdens de vlucht, wat bewees dat cognitieve functies konden werken in gewichtloosheid. Zijn missie kwam slechts drie maanden voordat Alan Shepard de eerste Amerikaan in de ruimte werd."
        }
      },
      {
        question: {
          en: "In what year did the United Kingdom officially leave the European Union (Brexit) on January 31?",
          es: "¿En qué año el Reino Unido abandonó oficialmente la Unión Europea (Brexit) el 31 de enero?",
          de: "In welchem Jahr verließ am 31. Januar das Vereinigte Königreich offiziell die Europäische Union (Brexit)?",
          nl: "In welk jaar verliet het Verenigd Koninkrijk officieel de Europese Unie (Brexit) op 31 januari?"
        },
        options: [
          { en: "2018", es: "2018", de: "2018", nl: "2018" },
          { en: "2020", es: "2020", de: "2020", nl: "2020" },
          { en: "2019", es: "2019", de: "2019", nl: "2019" },
          { en: "2021", es: "2021", de: "2021", nl: "2021" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Brexit concluded the UK's 47-year membership in the European Union, following a 2016 referendum where 52% voted to leave. The departure marked a historic shift in European integration and triggered complex negotiations on trade, immigration, and regulatory alignment. The UK entered a transition period until December 2020 to finalize new relationships with the EU.",
          es: "El Brexit concluyó la membresía de 47 años del Reino Unido en la Unión Europea, tras un referéndum de 2016 donde el 52% votó por salir. La salida marcó un cambio histórico en la integración europea y desencadenó negociaciones complejas sobre comercio, inmigración y alineación regulatoria. El Reino Unido entró en un período de transición hasta diciembre de 2020 para finalizar nuevas relaciones con la UE.",
          de: "Der Brexit beendete die 47-jährige Mitgliedschaft des Vereinigten Königreichs in der Europäischen Union nach einem Referendum 2016, bei dem 52% für den Austritt stimmten. Der Austritt markierte eine historische Verschiebung in der europäischen Integration und löste komplexe Verhandlungen über Handel, Einwanderung und regulatorische Angleichung aus. Das Vereinigte Königreich trat in eine Übergangsperiode bis Dezember 2020 ein, um neue Beziehungen zur EU zu finalisieren.",
          nl: "Brexit beëindigde het 47-jarige lidmaatschap van het VK in de Europese Unie, na een referendum in 2016 waarbij 52% stemde om te vertrekken. Het vertrek markeerde een historische verschuiving in Europese integratie en leidde tot complexe onderhandelingen over handel, immigratie en regelgevende afstemming. Het VK trad in een overgangsperiode tot december 2020 om nieuwe relaties met de EU te finaliseren."
        }
      }
    ]
  };

  // Assign to window for global access
  window.januaryChallenges = januaryChallenges;

})();
