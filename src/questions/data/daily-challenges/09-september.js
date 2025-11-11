// September Daily Challenges - 30 days × 5 questions each = 150 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {
  
  const septemberChallenges = {
    name: {
      en: "September Daily Challenges",
      es: "Desafíos Diarios de Septiembre", 
      de: "September Tägliche Herausforderungen",
      nl: "September Dagelijkse Uitdagingen"
    },
    
    // Day 1 - September 1st: WWII begins - Germany invades Poland (1939), Great Fire of London begins (1666), Libya becomes kingdom (1969)
    day1: [
      {
        question: {
          en: "In what year did Germany invade Poland, marking the beginning of World War II?",
          es: "¿En qué año invadió Alemania Polonia, marcando el comienzo de la Segunda Guerra Mundial?",
          de: "In welchem Jahr überfiel Deutschland Polen und markierte damit den Beginn des Zweiten Weltkriegs?",
          nl: "In welk jaar viel Duitsland Polen binnen, wat het begin van de Tweede Wereldoorlog markeerde?"
        },
        options: [
          { en: "1938", es: "1938", de: "1938", nl: "1938" },
          { en: "1939", es: "1939", de: "1939", nl: "1939" },
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1941", es: "1941", de: "1941", nl: "1941" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Germany invaded Poland on September 1, 1939, initiating World War II in Europe. This invasion prompted Britain and France to declare war on Germany two days later. The swift German victory demonstrated the effectiveness of their 'Blitzkrieg' tactics, combining rapid armored assaults with air power.",
          es: "Alemania invadió Polonia el 1 de septiembre de 1939, iniciando la Segunda Guerra Mundial en Europa. Esta invasión llevó a Gran Bretaña y Francia a declarar la guerra a Alemania dos días después. La rápida victoria alemana demostró la efectividad de sus tácticas de 'Blitzkrieg', combinando asaltos blindados rápidos con poder aéreo.",
          de: "Deutschland überfiel Polen am 1. September 1939 und löste damit den Zweiten Weltkrieg in Europa aus. Diese Invasion veranlasste Großbritannien und Frankreich, zwei Tage später Deutschland den Krieg zu erklären. Der schnelle deutsche Sieg demonstrierte die Wirksamkeit ihrer 'Blitzkrieg'-Taktiken, die schnelle Panzerangriffe mit Luftmacht kombinierten.",
          nl: "Duitsland viel Polen binnen op 1 september 1939, wat de Tweede Wereldoorlog in Europa inleidde. Deze invasie bracht Groot-Brittannië en Frankrijk ertoe twee dagen later de oorlog aan Duitsland te verklaren. De snelle Duitse overwinning toonde de effectiviteit van hun 'Blitzkrieg'-tactieken, die snelle gepantserde aanvallen combineerden met luchtmacht."
        }
      },
      {
        question: {
          en: "The Great Fire of London, which began on September 1, 1666, started in which type of establishment?",
          es: "El Gran Incendio de Londres, que comenzó el 1 de septiembre de 1666, comenzó en qué tipo de establecimiento?",
          de: "Der Große Brand von London, der am 1. September 1666 begann, startete in welcher Art von Einrichtung?",
          nl: "De Grote Brand van Londen, die begon op 1 september 1666, begon in welk type vestiging?"
        },
        options: [
          { en: "A blacksmith's forge", es: "Una herrería", de: "Eine Schmiede", nl: "Een smederij" },
          { en: "A bakery", es: "Una panadería", de: "Eine Bäckerei", nl: "Een bakkerij" },
          { en: "A candle shop", es: "Una tienda de velas", de: "Ein Kerzenladen", nl: "Een kaarsenwinkel" },
          { en: "A tavern", es: "Una taberna", de: "Eine Taverne", nl: "Een taverne" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Great Fire of London started in Thomas Farriner's bakery on Pudding Lane. The fire raged for four days, destroying much of the medieval City of London, including 87 churches and over 13,000 houses. Despite the massive destruction, only six verified deaths were recorded, though the actual toll was likely higher.",
          es: "El Gran Incendio de Londres comenzó en la panadería de Thomas Farriner en Pudding Lane. El incendio duró cuatro días, destruyendo gran parte de la Ciudad medieval de Londres, incluidas 87 iglesias y más de 13,000 casas. A pesar de la destrucción masiva, solo se registraron seis muertes verificadas, aunque el número real probablemente fue mayor.",
          de: "Der Große Brand von London begann in der Bäckerei von Thomas Farriner in der Pudding Lane. Das Feuer wütete vier Tage lang und zerstörte einen Großteil der mittelalterlichen City of London, darunter 87 Kirchen und über 13.000 Häuser. Trotz der massiven Zerstörung wurden nur sechs verifizierte Todesfälle verzeichnet, obwohl die tatsächliche Zahl wahrscheinlich höher war.",
          nl: "De Grote Brand van Londen begon in de bakkerij van Thomas Farriner op Pudding Lane. De brand woedde vier dagen lang en vernietigde een groot deel van het middeleeuwse Londen, waaronder 87 kerken en meer dan 13.000 huizen. Ondanks de massale verwoesting werden slechts zes geverifieerde doden geregistreerd, hoewel het werkelijke aantal waarschijnlijk hoger was."
        }
      },
      {
        question: {
          en: "Which country gained independence and became a kingdom on September 1, 1969?",
          es: "¿Qué país obtuvo su independencia y se convirtió en un reino el 1 de septiembre de 1969?",
          de: "Welches Land erlangte am 1. September 1969 seine Unabhängigkeit und wurde ein Königreich?",
          nl: "Welk land kreeg op 1 september 1969 onafhankelijkheid en werd een koninkrijk?"
        },
        options: [
          { en: "Morocco", es: "Marruecos", de: "Marokko", nl: "Marokko" },
          { en: "Jordan", es: "Jordania", de: "Jordanien", nl: "Jordanië" },
          { en: "Libya", es: "Libia", de: "Libyen", nl: "Libië" },
          { en: "Tunisia", es: "Túnez", de: "Tunesien", nl: "Tunesië" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Libya gained independence from Italy in 1951, but on September 1, 1969, a military coup led by Muammar Gaddafi overthrew King Idris I and established the Libyan Arab Republic. This event transformed Libya from a monarchy into a revolutionary state. Gaddafi would rule Libya for over 40 years until 2011.",
          es: "Libia obtuvo su independencia de Italia en 1951, pero el 1 de septiembre de 1969, un golpe militar liderado por Muamar el Gadafi derrocó al rey Idris I y estableció la República Árabe Libia. Este evento transformó Libia de una monarquía en un estado revolucionario. Gadafi gobernaría Libia durante más de 40 años hasta 2011.",
          de: "Libyen erlangte 1951 die Unabhängigkeit von Italien, aber am 1. September 1969 stürzte ein Militärputsch unter der Führung von Muammar al-Gaddafi König Idris I. und gründete die Libysch-Arabische Republik. Dieses Ereignis verwandelte Libyen von einer Monarchie in einen revolutionären Staat. Gaddafi würde Libyen über 40 Jahre lang bis 2011 regieren.",
          nl: "Libië werd in 1951 onafhankelijk van Italië, maar op 1 september 1969 pleegde een militaire coup onder leiding van Muammar al-Gaddafi een staatsgreep tegen koning Idris I en vestigde de Libisch-Arabische Republiek. Deze gebeurtenis transformeerde Libië van een monarchie naar een revolutionaire staat. Gaddafi zou Libië meer dan 40 jaar regeren tot 2011."
        }
      },
      {
        question: {
          en: "What was the code name for the German invasion of Poland that began on September 1, 1939?",
          es: "¿Cuál fue el nombre en clave de la invasión alemana de Polonia que comenzó el 1 de septiembre de 1939?",
          de: "Wie war der Codename für den deutschen Überfall auf Polen, der am 1. September 1939 begann?",
          nl: "Wat was de codenaam voor de Duitse invasie van Polen die begon op 1 september 1939?"
        },
        options: [
          { en: "Operation Barbarossa", es: "Operación Barbarroja", de: "Unternehmen Barbarossa", nl: "Operatie Barbarossa" },
          { en: "Case White", es: "Caso Blanco", de: "Fall Weiß", nl: "Case White" },
          { en: "Operation Overlord", es: "Operación Overlord", de: "Operation Overlord", nl: "Operatie Overlord" },
          { en: "Operation Sea Lion", es: "Operación León Marino", de: "Unternehmen Seelöwe", nl: "Operatie Zeeleeuw" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The German invasion of Poland was code-named 'Fall Weiß' (Case White). It involved 1.5 million German troops attacking from multiple directions. The invasion demonstrated the new Blitzkrieg warfare tactics and resulted in Poland's surrender within five weeks, despite fierce Polish resistance.",
          es: "La invasión alemana de Polonia tenía el nombre en código 'Fall Weiß' (Caso Blanco). Involucró 1,5 millones de tropas alemanas atacando desde múltiples direcciones. La invasión demostró las nuevas tácticas de guerra Blitzkrieg y resultó en la rendición de Polonia en cinco semanas, a pesar de la feroz resistencia polaca.",
          de: "Der deutsche Überfall auf Polen hatte den Codenamen 'Fall Weiß'. Er umfasste 1,5 Millionen deutsche Soldaten, die aus mehreren Richtungen angriffen. Der Überfall demonstrierte die neue Blitzkrieg-Kriegstaktik und führte trotz heftigen polnischen Widerstands innerhalb von fünf Wochen zur Kapitulation Polens.",
          nl: "De Duitse invasie van Polen had de codenaam 'Fall Weiß' (Case White). Het omvatte 1,5 miljoen Duitse troepen die vanuit meerdere richtingen aanvielen. De invasie demonstreerde de nieuwe Blitzkrieg-oorlogstactieken en resulteerde in de overgave van Polen binnen vijf weken, ondanks fel Pools verzet."
        }
      },
      {
        question: {
          en: "How many days did the Great Fire of London burn before it was finally extinguished?",
          es: "¿Cuántos días ardió el Gran Incendio de Londres antes de ser finalmente extinguido?",
          de: "Wie viele Tage brannte der Große Brand von London, bevor er schließlich gelöscht wurde?",
          nl: "Hoeveel dagen brandde de Grote Brand van Londen voordat deze eindelijk werd geblust?"
        },
        options: [
          { en: "2 days", es: "2 días", de: "2 Tage", nl: "2 dagen" },
          { en: "4 days", es: "4 días", de: "4 Tage", nl: "4 dagen" },
          { en: "7 days", es: "7 días", de: "7 Tage", nl: "7 dagen" },
          { en: "10 days", es: "10 días", de: "10 Tage", nl: "10 dagen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Great Fire of London burned for four days, from September 1-5, 1666. It destroyed approximately 436 acres of the city, including the original St. Paul's Cathedral. The fire led to major rebuilding efforts and improved fire safety measures. Sir Christopher Wren designed the new St. Paul's Cathedral that still stands today.",
          es: "El Gran Incendio de Londres ardió durante cuatro días, del 1 al 5 de septiembre de 1666. Destruyó aproximadamente 436 acres de la ciudad, incluida la catedral original de St. Paul. El incendio llevó a importantes esfuerzos de reconstrucción y mejores medidas de seguridad contra incendios. Sir Christopher Wren diseñó la nueva catedral de St. Paul que todavía se mantiene en pie hoy.",
          de: "Der Große Brand von London brannte vier Tage lang, vom 1. bis 5. September 1666. Er zerstörte etwa 436 Acres der Stadt, einschließlich der ursprünglichen St. Paul's Cathedral. Das Feuer führte zu großen Wiederaufbaumaßnahmen und verbesserten Brandschutzmaßnahmen. Sir Christopher Wren entwarf die neue St. Paul's Cathedral, die heute noch steht.",
          nl: "De Grote Brand van Londen brandde vier dagen, van 1 tot 5 september 1666. Het vernietigde ongeveer 436 acres van de stad, inclusief de oorspronkelijke St. Paul's Cathedral. De brand leidde tot grote herbouwprojecten en verbeterde brandveiligheidsmaatregelen. Sir Christopher Wren ontwierp de nieuwe St. Paul's Cathedral die vandaag nog steeds staat."
        }
      }
    ],

    // Day 2 - September 2nd: WWII ends - Japan surrenders (1945), Great Fire of London worst day (1666), Vietnam independence (1945)
    day2: [
      {
        question: {
          en: "On what ship did Japan formally surrender to the Allies on September 2, 1945, ending World War II?",
          es: "¿En qué barco se rindió formalmente Japón a los Aliados el 2 de septiembre de 1945, poniendo fin a la Segunda Guerra Mundial?",
          de: "Auf welchem Schiff kapitulierte Japan am 2. September 1945 formell vor den Alliierten und beendete damit den Zweiten Weltkrieg?",
          nl: "Op welk schip capituleerde Japan formeel voor de Geallieerden op 2 september 1945, waarmee de Tweede Wereldoorlog eindigde?"
        },
        options: [
          { en: "USS Arizona", es: "USS Arizona", de: "USS Arizona", nl: "USS Arizona" },
          { en: "USS Enterprise", es: "USS Enterprise", de: "USS Enterprise", nl: "USS Enterprise" },
          { en: "USS Missouri", es: "USS Missouri", de: "USS Missouri", nl: "USS Missouri" },
          { en: "USS Iowa", es: "USS Iowa", de: "USS Iowa", nl: "USS Iowa" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Japan formally surrendered aboard the USS Missouri in Tokyo Bay on September 2, 1945. The ceremony was attended by representatives from the Allied nations, with General Douglas MacArthur accepting the surrender on behalf of the Allied powers. This event officially ended World War II, which had lasted six years and claimed millions of lives.",
          es: "Japón se rindió formalmente a bordo del USS Missouri en la Bahía de Tokio el 2 de septiembre de 1945. La ceremonia contó con la asistencia de representantes de las naciones aliadas, y el general Douglas MacArthur aceptó la rendición en nombre de las potencias aliadas. Este evento puso fin oficialmente a la Segunda Guerra Mundial, que había durado seis años y había cobrado millones de vidas.",
          de: "Japan kapitulierte am 2. September 1945 formell an Bord der USS Missouri in der Bucht von Tokio. An der Zeremonie nahmen Vertreter der alliierten Nationen teil, wobei General Douglas MacArthur die Kapitulation im Namen der Alliierten entgegennahm. Dieses Ereignis beendete offiziell den Zweiten Weltkrieg, der sechs Jahre gedauert und Millionen von Menschenleben gekostet hatte.",
          nl: "Japan capituleerde formeel aan boord van de USS Missouri in de Baai van Tokio op 2 september 1945. Bij de ceremonie waren vertegenwoordigers van de Geallieerde naties aanwezig, waarbij generaal Douglas MacArthur de overgave namens de Geallieerde mogendheden aanvaardde. Deze gebeurtenis beëindigde officieel de Tweede Wereldoorlog, die zes jaar had geduurd en miljoenen levens had gekost."
        }
      },
      {
        question: {
          en: "Who declared Vietnam's independence from France on September 2, 1945?",
          es: "¿Quién declaró la independencia de Vietnam de Francia el 2 de septiembre de 1945?",
          de: "Wer erklärte am 2. September 1945 Vietnams Unabhängigkeit von Frankreich?",
          nl: "Wie verklaarde Vietnams onafhankelijkheid van Frankrijk op 2 september 1945?"
        },
        options: [
          { en: "Bao Dai", es: "Bao Dai", de: "Bao Dai", nl: "Bao Dai" },
          { en: "Ngo Dinh Diem", es: "Ngo Dinh Diem", de: "Ngo Dinh Diem", nl: "Ngo Dinh Diem" },
          { en: "Ho Chi Minh", es: "Ho Chi Minh", de: "Ho Chi Minh", nl: "Ho Chi Minh" },
          { en: "Le Duan", es: "Le Duan", de: "Le Duan", nl: "Le Duan" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ho Chi Minh declared Vietnam's independence on September 2, 1945, in Hanoi's Ba Dinh Square. He began his speech by quoting the American Declaration of Independence. However, France refused to recognize Vietnamese independence, leading to the First Indochina War that lasted until 1954.",
          es: "Ho Chi Minh declaró la independencia de Vietnam el 2 de septiembre de 1945 en la Plaza Ba Dinh de Hanói. Comenzó su discurso citando la Declaración de Independencia estadounidense. Sin embargo, Francia se negó a reconocer la independencia vietnamita, lo que llevó a la Primera Guerra de Indochina que duró hasta 1954.",
          de: "Ho Chi Minh erklärte am 2. September 1945 auf dem Ba-Dinh-Platz in Hanoi die Unabhängigkeit Vietnams. Er begann seine Rede mit einem Zitat aus der amerikanischen Unabhängigkeitserklärung. Frankreich weigerte sich jedoch, die Unabhängigkeit Vietnams anzuerkennen, was zum Ersten Indochinakrieg führte, der bis 1954 dauerte.",
          nl: "Ho Chi Minh verklaarde Vietnams onafhankelijkheid op 2 september 1945 op het Ba Dinh-plein in Hanoi. Hij begon zijn toespraak met een citaat uit de Amerikaanse Onafhankelijkheidsverklaring. Frankrijk weigerde echter de Vietnamese onafhankelijkheid te erkennen, wat leidde tot de Eerste Indochina-oorlog die duurde tot 1954."
        }
      },
      {
        question: {
          en: "September 2, 1666, was the worst day of the Great Fire of London. Which famous landmark was destroyed on this day?",
          es: "El 2 de septiembre de 1666 fue el peor día del Gran Incendio de Londres. ¿Qué punto de referencia famoso fue destruido este día?",
          de: "Der 2. September 1666 war der schlimmste Tag des Großen Brandes von London. Welches berühmte Wahrzeichen wurde an diesem Tag zerstört?",
          nl: "2 september 1666 was de ergste dag van de Grote Brand van Londen. Welk beroemd monument werd op deze dag verwoest?"
        },
        options: [
          { en: "Tower of London", es: "Torre de Londres", de: "Tower of London", nl: "Tower of London" },
          { en: "Westminster Abbey", es: "Abadía de Westminster", de: "Westminster Abbey", nl: "Westminster Abbey" },
          { en: "Old St. Paul's Cathedral", es: "Antigua Catedral de St. Paul", de: "Alte St. Paul's Cathedral", nl: "Oude St. Paul's Cathedral" },
          { en: "London Bridge", es: "Puente de Londres", de: "London Bridge", nl: "London Bridge" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The old St. Paul's Cathedral was destroyed on September 2, 1666, during the worst day of the Great Fire of London. The medieval cathedral's lead roof melted, and the building's stones exploded from the intense heat. After the fire, Sir Christopher Wren designed the magnificent new St. Paul's Cathedral that stands today, completed in 1711.",
          es: "La antigua catedral de St. Paul fue destruida el 2 de septiembre de 1666, durante el peor día del Gran Incendio de Londres. El techo de plomo de la catedral medieval se derritió y las piedras del edificio explotaron por el intenso calor. Después del incendio, Sir Christopher Wren diseñó la magnífica nueva catedral de St. Paul que existe hoy, completada en 1711.",
          de: "Die alte St. Paul's Cathedral wurde am 2. September 1666 während des schlimmsten Tages des Großen Brandes von London zerstört. Das Bleidach der mittelalterlichen Kathedrale schmolz, und die Steine des Gebäudes explodierten durch die intensive Hitze. Nach dem Feuer entwarf Sir Christopher Wren die prächtige neue St. Paul's Cathedral, die heute steht und 1711 fertiggestellt wurde.",
          nl: "De oude St. Paul's Cathedral werd vernietigd op 2 september 1666, tijdens de ergste dag van de Grote Brand van Londen. Het loden dak van de middeleeuwse kathedraal smolt en de stenen van het gebouw explodeerden door de intense hitte. Na de brand ontwierp Sir Christopher Wren de prachtige nieuwe St. Paul's Cathedral die er vandaag nog staat, voltooid in 1711."
        }
      },
      {
        question: {
          en: "What were the two atomic bombs that led to Japan's surrender called?",
          es: "¿Cómo se llamaban las dos bombas atómicas que llevaron a la rendición de Japón?",
          de: "Wie hießen die beiden Atombomben, die zur Kapitulation Japans führten?",
          nl: "Hoe heetten de twee atoombommen die leidden tot Japans capitulatie?"
        },
        options: [
          { en: "Alpha and Omega", es: "Alfa y Omega", de: "Alpha und Omega", nl: "Alpha en Omega" },
          { en: "Little Boy and Fat Man", es: "Little Boy y Fat Man", de: "Little Boy und Fat Man", nl: "Little Boy en Fat Man" },
          { en: "Trinity and Manhattan", es: "Trinity y Manhattan", de: "Trinity und Manhattan", nl: "Trinity en Manhattan" },
          { en: "Thunder and Lightning", es: "Thunder y Lightning", de: "Thunder und Lightning", nl: "Thunder en Lightning" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The two atomic bombs were 'Little Boy,' dropped on Hiroshima on August 6, 1945, and 'Fat Man,' dropped on Nagasaki on August 9, 1945. These devastating attacks, combined with the Soviet Union's declaration of war against Japan, led Emperor Hirohito to announce Japan's surrender on August 15. The formal surrender ceremony took place on September 2, 1945.",
          es: "Las dos bombas atómicas fueron 'Little Boy', lanzada sobre Hiroshima el 6 de agosto de 1945, y 'Fat Man', lanzada sobre Nagasaki el 9 de agosto de 1945. Estos devastadores ataques, combinados con la declaración de guerra de la Unión Soviética contra Japón, llevaron al emperador Hirohito a anunciar la rendición de Japón el 15 de agosto. La ceremonia formal de rendición tuvo lugar el 2 de septiembre de 1945.",
          de: "Die beiden Atombomben waren 'Little Boy', die am 6. August 1945 auf Hiroshima abgeworfen wurde, und 'Fat Man', die am 9. August 1945 auf Nagasaki abgeworfen wurde. Diese verheerenden Angriffe, kombiniert mit der Kriegserklärung der Sowjetunion gegen Japan, führten dazu, dass Kaiser Hirohito am 15. August die Kapitulation Japans ankündigte. Die formelle Kapitulationszeremonie fand am 2. September 1945 statt.",
          nl: "De twee atoombommen waren 'Little Boy', gedropt op Hiroshima op 6 augustus 1945, en 'Fat Man', gedropt op Nagasaki op 9 augustus 1945. Deze verwoestende aanvallen, gecombineerd met de oorlogsverklaring van de Sovjet-Unie aan Japan, leidden ertoe dat keizer Hirohito op 15 augustus de overgave van Japan aankondigde. De formele overgaveceremonie vond plaats op 2 september 1945."
        }
      },
      {
        question: {
          en: "How many years after the start of World War II did Japan surrender?",
          es: "¿Cuántos años después del inicio de la Segunda Guerra Mundial se rindió Japón?",
          de: "Wie viele Jahre nach Beginn des Zweiten Weltkriegs kapitulierte Japan?",
          nl: "Hoeveel jaar na het begin van de Tweede Wereldoorlog capituleerde Japan?"
        },
        options: [
          { en: "4 years", es: "4 años", de: "4 Jahre", nl: "4 jaar" },
          { en: "5 years", es: "5 años", de: "5 Jahre", nl: "5 jaar" },
          { en: "6 years", es: "6 años", de: "6 Jahre", nl: "6 jaar" },
          { en: "7 years", es: "7 años", de: "7 Jahre", nl: "7 jaar" }
        ],
        correctIndex: 2,
        explanation: {
          en: "World War II began with Germany's invasion of Poland on September 1, 1939, and ended with Japan's formal surrender on September 2, 1945 - exactly 6 years and 1 day later. The war resulted in an estimated 70-85 million deaths worldwide, making it the deadliest conflict in human history. The war fundamentally reshaped the global political order.",
          es: "La Segunda Guerra Mundial comenzó con la invasión alemana de Polonia el 1 de septiembre de 1939 y terminó con la rendición formal de Japón el 2 de septiembre de 1945, exactamente 6 años y 1 día después. La guerra resultó en un estimado de 70-85 millones de muertes en todo el mundo, convirtiéndola en el conflicto más mortífero de la historia humana. La guerra remodeló fundamentalmente el orden político global.",
          de: "Der Zweite Weltkrieg begann mit Deutschlands Überfall auf Polen am 1. September 1939 und endete mit der formellen Kapitulation Japans am 2. September 1945 - genau 6 Jahre und 1 Tag später. Der Krieg forderte schätzungsweise 70-85 Millionen Tote weltweit und war damit der tödlichste Konflikt der Menschheitsgeschichte. Der Krieg veränderte die globale politische Ordnung grundlegend.",
          nl: "De Tweede Wereldoorlog begon met Duitslands invasie van Polen op 1 september 1939 en eindigde met Japans formele capitulatie op 2 september 1945 - precies 6 jaar en 1 dag later. De oorlog resulteerde in naar schatting 70-85 miljoen doden wereldwijd, waardoor het het dodelijkste conflict in de menselijke geschiedenis werd. De oorlog veranderde de wereldwijde politieke orde fundamenteel."
        }
      }
    ],

    // Day 3 - September 3rd: Treaty of Paris ends Revolutionary War (1783), Qatar independence (1971), Viking 2 lands on Mars (1976)
    day3: [
      {
        question: {
          en: "The Treaty of Paris, signed on September 3, 1783, officially ended which conflict?",
          es: "El Tratado de París, firmado el 3 de septiembre de 1783, puso fin oficialmente a qué conflicto?",
          de: "Der Vertrag von Paris, unterzeichnet am 3. September 1783, beendete offiziell welchen Konflikt?",
          nl: "Het Verdrag van Parijs, ondertekend op 3 september 1783, beëindigde officieel welk conflict?"
        },
        options: [
          { en: "French and Indian War", es: "Guerra Franco-India", de: "Franzosen- und Indianerkrieg", nl: "Franse en Indiaanse Oorlog" },
          { en: "War of 1812", es: "Guerra de 1812", de: "Krieg von 1812", nl: "Oorlog van 1812" },
          { en: "American Revolutionary War", es: "Guerra de Independencia de Estados Unidos", de: "Amerikanischer Unabhängigkeitskrieg", nl: "Amerikaanse Onafhankelijkheidsoorlog" },
          { en: "Seven Years' War", es: "Guerra de los Siete Años", de: "Siebenjähriger Krieg", nl: "Zevenjarige Oorlog" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Treaty of Paris of 1783 officially ended the American Revolutionary War and recognized the independence of the United States. Britain acknowledged American sovereignty and ceded territory that doubled the size of the new nation, extending from the Atlantic to the Mississippi River. The treaty was negotiated by Benjamin Franklin, John Adams, and John Jay.",
          es: "El Tratado de París de 1783 puso fin oficialmente a la Guerra de Independencia de Estados Unidos y reconoció la independencia de Estados Unidos. Gran Bretaña reconoció la soberanía estadounidense y cedió territorio que duplicó el tamaño de la nueva nación, extendiéndose desde el Atlántico hasta el río Mississippi. El tratado fue negociado por Benjamin Franklin, John Adams y John Jay.",
          de: "Der Vertrag von Paris von 1783 beendete offiziell den Amerikanischen Unabhängigkeitskrieg und erkannte die Unabhängigkeit der Vereinigten Staaten an. Großbritannien erkannte die amerikanische Souveränität an und trat Gebiete ab, die die Größe der neuen Nation verdoppelten und sich vom Atlantik bis zum Mississippi erstreckten. Der Vertrag wurde von Benjamin Franklin, John Adams und John Jay ausgehandelt.",
          nl: "Het Verdrag van Parijs van 1783 beëindigde officieel de Amerikaanse Onafhankelijkheidsoorlog en erkende de onafhankelijkheid van de Verenigde Staten. Groot-Brittannië erkende de Amerikaanse soevereiniteit en stond grondgebied af dat de omvang van de nieuwe natie verdubbelde, zich uitstrekkend van de Atlantische Oceaan tot de Mississippi. Het verdrag werd onderhandeld door Benjamin Franklin, John Adams en John Jay."
        }
      },
      {
        question: {
          en: "Qatar gained independence from which country on September 3, 1971?",
          es: "Qatar obtuvo su independencia de qué país el 3 de septiembre de 1971?",
          de: "Katar erlangte am 3. September 1971 seine Unabhängigkeit von welchem Land?",
          nl: "Qatar werd onafhankelijk van welk land op 3 september 1971?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Ottoman Empire", es: "Imperio Otomano", de: "Osmanisches Reich", nl: "Ottomaanse Rijk" },
          { en: "Saudi Arabia", es: "Arabia Saudita", de: "Saudi-Arabien", nl: "Saudi-Arabië" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Qatar gained independence from the United Kingdom on September 3, 1971. Prior to independence, Qatar had been a British protectorate since 1916. The country quickly joined the Arab League and the United Nations. Today, Qatar is one of the world's wealthiest nations per capita, largely due to its vast natural gas reserves.",
          es: "Qatar obtuvo su independencia del Reino Unido el 3 de septiembre de 1971. Antes de la independencia, Qatar había sido un protectorado británico desde 1916. El país se unió rápidamente a la Liga Árabe y las Naciones Unidas. Hoy, Qatar es una de las naciones más ricas del mundo per cápita, en gran parte debido a sus vastas reservas de gas natural.",
          de: "Katar erlangte am 3. September 1971 seine Unabhängigkeit vom Vereinigten Königreich. Vor der Unabhängigkeit war Katar seit 1916 ein britisches Protektorat gewesen. Das Land trat schnell der Arabischen Liga und den Vereinten Nationen bei. Heute ist Katar eine der wohlhabendsten Nationen der Welt pro Kopf, hauptsächlich aufgrund seiner riesigen Erdgasreserven.",
          nl: "Qatar werd onafhankelijk van het Verenigd Koninkrijk op 3 september 1971. Voor de onafhankelijkheid was Qatar sinds 1916 een Brits protectoraat geweest. Het land trad snel toe tot de Arabische Liga en de Verenigde Naties. Vandaag is Qatar een van 's werelds rijkste landen per hoofd van de bevolking, grotendeels dankzij zijn enorme aardgasreserves."
        }
      },
      {
        question: {
          en: "Viking 2 successfully landed on Mars on September 3, 1976. What was its primary mission?",
          es: "Viking 2 aterrizó con éxito en Marte el 3 de septiembre de 1976. ¿Cuál fue su misión principal?",
          de: "Viking 2 landete am 3. September 1976 erfolgreich auf dem Mars. Was war seine Hauptmission?",
          nl: "Viking 2 landde succesvol op Mars op 3 september 1976. Wat was zijn primaire missie?"
        },
        options: [
          { en: "Search for water ice", es: "Buscar hielo de agua", de: "Nach Wassereis suchen", nl: "Zoeken naar waterijs" },
          { en: "Search for signs of life", es: "Buscar señales de vida", de: "Nach Lebenszeichen suchen", nl: "Zoeken naar tekenen van leven" },
          { en: "Map the surface", es: "Mapear la superficie", de: "Die Oberfläche kartieren", nl: "Het oppervlak in kaart brengen" },
          { en: "Study the atmosphere", es: "Estudiar la atmósfera", de: "Die Atmosphäre untersuchen", nl: "De atmosfeer bestuderen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Viking 2's primary mission was to search for signs of life on Mars. Along with Viking 1, it conducted biological experiments to detect microbial life in Martian soil. While the results were inconclusive, the mission provided valuable data about Mars' surface, atmosphere, and geology. Viking 2 operated for over three years, far exceeding its planned 90-day mission.",
          es: "La misión principal de Viking 2 fue buscar señales de vida en Marte. Junto con Viking 1, realizó experimentos biológicos para detectar vida microbiana en el suelo marciano. Aunque los resultados no fueron concluyentes, la misión proporcionó datos valiosos sobre la superficie, atmósfera y geología de Marte. Viking 2 operó durante más de tres años, superando con creces su misión planificada de 90 días.",
          de: "Die Hauptmission von Viking 2 war die Suche nach Lebenszeichen auf dem Mars. Zusammen mit Viking 1 führte es biologische Experimente durch, um mikrobielles Leben im Marsboden zu entdecken. Obwohl die Ergebnisse nicht eindeutig waren, lieferte die Mission wertvolle Daten über die Oberfläche, Atmosphäre und Geologie des Mars. Viking 2 war über drei Jahre lang in Betrieb und übertraf damit seine geplante 90-Tage-Mission bei weitem.",
          nl: "De primaire missie van Viking 2 was het zoeken naar tekenen van leven op Mars. Samen met Viking 1 voerde het biologische experimenten uit om microbieel leven in Martiaanse bodem te detecteren. Hoewel de resultaten niet overtuigend waren, leverde de missie waardevolle gegevens op over het oppervlak, de atmosfeer en de geologie van Mars. Viking 2 opereerde meer dan drie jaar, wat de geplande 90-daagse missie ver overtrof."
        }
      },
      {
        question: {
          en: "Which American founding father was the chief negotiator of the Treaty of Paris of 1783?",
          es: "¿Qué padre fundador estadounidense fue el negociador principal del Tratado de París de 1783?",
          de: "Welcher amerikanische Gründervater war der Hauptunterhändler des Vertrags von Paris von 1783?",
          nl: "Welke Amerikaanse grondlegger was de hoofdonderhandelaar van het Verdrag van Parijs van 1783?"
        },
        options: [
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Alexander Hamilton", es: "Alexander Hamilton", de: "Alexander Hamilton", nl: "Alexander Hamilton" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Benjamin Franklin was the chief American negotiator of the Treaty of Paris, alongside John Adams and John Jay. At 77 years old, Franklin used his diplomatic skills and popularity in France to secure favorable terms for the United States. The treaty not only recognized American independence but also granted territory far beyond the original thirteen colonies.",
          es: "Benjamin Franklin fue el principal negociador estadounidense del Tratado de París, junto con John Adams y John Jay. A los 77 años, Franklin utilizó sus habilidades diplomáticas y popularidad en Francia para asegurar términos favorables para Estados Unidos. El tratado no solo reconoció la independencia estadounidense, sino que también otorgó territorio mucho más allá de las trece colonias originales.",
          de: "Benjamin Franklin war der amerikanische Hauptunterhändler des Vertrags von Paris, neben John Adams und John Jay. Mit 77 Jahren nutzte Franklin seine diplomatischen Fähigkeiten und Popularität in Frankreich, um günstige Bedingungen für die Vereinigten Staaten zu sichern. Der Vertrag erkannte nicht nur die amerikanische Unabhängigkeit an, sondern gewährte auch Gebiete weit über die ursprünglichen dreizehn Kolonien hinaus.",
          nl: "Benjamin Franklin was de belangrijkste Amerikaanse onderhandelaar van het Verdrag van Parijs, samen met John Adams en John Jay. Op 77-jarige leeftijd gebruikte Franklin zijn diplomatieke vaardigheden en populariteit in Frankrijk om gunstige voorwaarden voor de Verenigde Staten te verkrijgen. Het verdrag erkende niet alleen de Amerikaanse onafhankelijkheid, maar verleende ook grondgebied ver voorbij de oorspronkelijke dertien koloniën."
        }
      },
      {
        question: {
          en: "Where on Mars did Viking 2 land?",
          es: "¿Dónde en Marte aterrizó Viking 2?",
          de: "Wo auf dem Mars landete Viking 2?",
          nl: "Waar op Mars landde Viking 2?"
        },
        options: [
          { en: "Valles Marineris", es: "Valles Marineris", de: "Valles Marineris", nl: "Valles Marineris" },
          { en: "Olympus Mons", es: "Olympus Mons", de: "Olympus Mons", nl: "Olympus Mons" },
          { en: "Utopia Planitia", es: "Utopia Planitia", de: "Utopia Planitia", nl: "Utopia Planitia" },
          { en: "Gale Crater", es: "Cráter Gale", de: "Gale-Krater", nl: "Gale-krater" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Viking 2 landed in the Utopia Planitia region on Mars' northern hemisphere. This vast plain is one of the flattest areas on Mars and was chosen for its safety and scientific interest. Viking 2 took thousands of photographs and analyzed soil samples during its mission. The site later became notable when scientists detected subsurface ice in the region.",
          es: "Viking 2 aterrizó en la región de Utopia Planitia en el hemisferio norte de Marte. Esta vasta llanura es una de las áreas más planas de Marte y fue elegida por su seguridad e interés científico. Viking 2 tomó miles de fotografías y analizó muestras de suelo durante su misión. El sitio se volvió notable posteriormente cuando los científicos detectaron hielo subterráneo en la región.",
          de: "Viking 2 landete in der Region Utopia Planitia auf der nördlichen Hemisphäre des Mars. Diese weite Ebene ist eine der flachsten Gebiete auf dem Mars und wurde wegen ihrer Sicherheit und ihres wissenschaftlichen Interesses ausgewählt. Viking 2 machte während seiner Mission Tausende von Fotografien und analysierte Bodenproben. Die Stelle wurde später bemerkenswert, als Wissenschaftler unterirdisches Eis in der Region entdeckten.",
          nl: "Viking 2 landde in de Utopia Planitia-regio op het noordelijk halfrond van Mars. Deze uitgestrekte vlakte is een van de vlakste gebieden op Mars en werd gekozen vanwege de veiligheid en wetenschappelijk belang. Viking 2 maakte tijdens zijn missie duizenden foto's en analyseerde bodemmonsters. De locatie werd later opmerkelijk toen wetenschappers ondergronds ijs in de regio ontdekten."
        }
      }
    ],

    // Day 4 - September 4th: Google founded (1998), Los Angeles founded (1781), Beyoncé born (1981)
    day4: [
      {
        question: {
          en: "In what year was Google officially incorporated?",
          es: "¿En qué año se incorporó oficialmente Google?",
          de: "In welchem Jahr wurde Google offiziell gegründet?",
          nl: "In welk jaar werd Google officieel opgericht?"
        },
        options: [
          { en: "1996", es: "1996", de: "1996", nl: "1996" },
          { en: "1998", es: "1998", de: "1998", nl: "1998" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "2002", es: "2002", de: "2002", nl: "2002" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Google was officially incorporated on September 4, 1998, by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. The company started in a garage in Menlo Park, California. Today, Google is one of the world's most valuable companies and its parent company Alphabet has become a technology conglomerate.",
          es: "Google se incorporó oficialmente el 4 de septiembre de 1998 por Larry Page y Sergey Brin mientras eran estudiantes de doctorado en la Universidad de Stanford. La compañía comenzó en un garaje en Menlo Park, California. Hoy, Google es una de las compañías más valiosas del mundo y su empresa matriz Alphabet se ha convertido en un conglomerado tecnológico.",
          de: "Google wurde am 4. September 1998 offiziell von Larry Page und Sergey Brin gegründet, während sie Doktoranden an der Stanford University waren. Das Unternehmen begann in einer Garage in Menlo Park, Kalifornien. Heute ist Google eines der wertvollsten Unternehmen der Welt und seine Muttergesellschaft Alphabet ist zu einem Technologiekonglomerat geworden.",
          nl: "Google werd officieel opgericht op 4 september 1998 door Larry Page en Sergey Brin terwijl ze doctoraalstudenten waren aan Stanford University. Het bedrijf begon in een garage in Menlo Park, Californië. Vandaag is Google een van 's werelds meest waardevolle bedrijven en zijn moederbedrijf Alphabet is een technologieconglomeraat geworden."
        }
      },
      {
        question: {
          en: "Los Angeles was founded on September 4, 1781, by settlers from which country?",
          es: "Los Ángeles fue fundada el 4 de septiembre de 1781 por colonos de qué país?",
          de: "Los Angeles wurde am 4. September 1781 von Siedlern aus welchem Land gegründet?",
          nl: "Los Angeles werd gesticht op 4 september 1781 door kolonisten uit welk land?"
        },
        options: [
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Los Angeles was founded by Spanish settlers on September 4, 1781. The full original name was 'El Pueblo de Nuestra Señora la Reina de los Ángeles' (The Town of Our Lady the Queen of the Angels). The 44 original settlers were a diverse group of mixed Spanish, African, and Native American heritage. Today, LA is the second-largest city in the United States.",
          es: "Los Ángeles fue fundada por colonos españoles el 4 de septiembre de 1781. El nombre original completo era 'El Pueblo de Nuestra Señora la Reina de los Ángeles'. Los 44 colonos originales eran un grupo diverso de herencia española, africana y nativa americana mixta. Hoy, LA es la segunda ciudad más grande de Estados Unidos.",
          de: "Los Angeles wurde am 4. September 1781 von spanischen Siedlern gegründet. Der vollständige ursprüngliche Name war 'El Pueblo de Nuestra Señora la Reina de los Ángeles' (Die Stadt Unserer Lieben Frau, der Königin der Engel). Die 44 ursprünglichen Siedler waren eine vielfältige Gruppe gemischter spanischer, afrikanischer und indianischer Herkunft. Heute ist LA die zweitgrößte Stadt in den Vereinigten Staaten.",
          nl: "Los Angeles werd gesticht door Spaanse kolonisten op 4 september 1781. De volledige oorspronkelijke naam was 'El Pueblo de Nuestra Señora la Reina de los Ángeles' (De Stad van Onze Lieve Vrouw de Koningin der Engelen). De 44 oorspronkelijke kolonisten waren een diverse groep met gemengde Spaanse, Afrikaanse en inheems-Amerikaanse afkomst. Vandaag is LA de op één na grootste stad in de Verenigde Staten."
        }
      },
      {
        question: {
          en: "Beyoncé, born on September 4, 1981, first gained fame as a member of which group?",
          es: "Beyoncé, nacida el 4 de septiembre de 1981, ganó fama por primera vez como miembro de qué grupo?",
          de: "Beyoncé, geboren am 4. September 1981, wurde zunächst als Mitglied welcher Gruppe berühmt?",
          nl: "Beyoncé, geboren op 4 september 1981, werd eerst beroemd als lid van welke groep?"
        },
        options: [
          { en: "TLC", es: "TLC", de: "TLC", nl: "TLC" },
          { en: "Destiny's Child", es: "Destiny's Child", de: "Destiny's Child", nl: "Destiny's Child" },
          { en: "En Vogue", es: "En Vogue", de: "En Vogue", nl: "En Vogue" },
          { en: "Spice Girls", es: "Spice Girls", de: "Spice Girls", nl: "Spice Girls" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Beyoncé first gained fame as the lead singer of Destiny's Child, one of the best-selling girl groups of all time. The group achieved massive success in the late 1990s and early 2000s with hits like 'Say My Name' and 'Survivor.' Beyoncé launched her solo career in 2003 and has since become one of the most influential artists in music history.",
          es: "Beyoncé ganó fama por primera vez como la cantante principal de Destiny's Child, uno de los grupos femeninos más vendidos de todos los tiempos. El grupo logró un éxito masivo a finales de la década de 1990 y principios de la de 2000 con éxitos como 'Say My Name' y 'Survivor'. Beyoncé lanzó su carrera en solitario en 2003 y desde entonces se ha convertido en una de las artistas más influyentes en la historia de la música.",
          de: "Beyoncé wurde zunächst als Lead-Sängerin von Destiny's Child berühmt, einer der meistverkauften Girlgroups aller Zeiten. Die Gruppe erzielte Ende der 1990er und Anfang der 2000er Jahre großen Erfolg mit Hits wie 'Say My Name' und 'Survivor'. Beyoncé startete 2003 ihre Solokarriere und ist seitdem eine der einflussreichsten Künstlerinnen der Musikgeschichte geworden.",
          nl: "Beyoncé werd eerst beroemd als de leadzangeres van Destiny's Child, een van de bestverkopende meidengroepen aller tijden. De groep behaalde enorm succes in de late jaren 1990 en vroege jaren 2000 met hits als 'Say My Name' en 'Survivor'. Beyoncé lanceerde haar solocarrière in 2003 en is sindsdien een van de meest invloedrijke artiesten in de muziekgeschiedenis geworden."
        }
      },
      {
        question: {
          en: "What algorithm did Larry Page develop that became the foundation for Google's search engine?",
          es: "¿Qué algoritmo desarrolló Larry Page que se convirtió en la base del motor de búsqueda de Google?",
          de: "Welchen Algorithmus entwickelte Larry Page, der die Grundlage für Googles Suchmaschine wurde?",
          nl: "Welk algoritme ontwikkelde Larry Page dat de basis werd voor de zoekmachine van Google?"
        },
        options: [
          { en: "SearchRank", es: "SearchRank", de: "SearchRank", nl: "SearchRank" },
          { en: "WebRank", es: "WebRank", de: "WebRank", nl: "WebRank" },
          { en: "PageRank", es: "PageRank", de: "PageRank", nl: "PageRank" },
          { en: "LinkRank", es: "LinkRank", de: "LinkRank", nl: "LinkRank" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Larry Page developed the PageRank algorithm, named after him, which became the foundation of Google's search engine. PageRank revolutionized web search by ranking pages based on their importance, determined by the number and quality of links pointing to them. This algorithm made Google's search results far more relevant than competitors and drove the company's early success.",
          es: "Larry Page desarrolló el algoritmo PageRank, nombrado así por él, que se convirtió en la base del motor de búsqueda de Google. PageRank revolucionó la búsqueda web al clasificar páginas según su importancia, determinada por el número y calidad de enlaces que apuntan a ellas. Este algoritmo hizo que los resultados de búsqueda de Google fueran mucho más relevantes que los de la competencia e impulsó el éxito inicial de la compañía.",
          de: "Larry Page entwickelte den PageRank-Algorithmus, der nach ihm benannt wurde und die Grundlage für Googles Suchmaschine bildete. PageRank revolutionierte die Websuche, indem es Seiten nach ihrer Bedeutung rangierte, die durch die Anzahl und Qualität der darauf verweisenden Links bestimmt wurde. Dieser Algorithmus machte Googles Suchergebnisse weitaus relevanter als die der Konkurrenz und trieb den frühen Erfolg des Unternehmens voran.",
          nl: "Larry Page ontwikkelde het PageRank-algoritme, naar hem vernoemd, dat de basis werd van de zoekmachine van Google. PageRank revolutioneerde webzoekopdrachten door pagina's te rangschikken op basis van hun belang, bepaald door het aantal en de kwaliteit van links die ernaar verwijzen. Dit algoritme maakte de zoekresultaten van Google veel relevanter dan die van concurrenten en dreef het vroege succes van het bedrijf."
        }
      },
      {
        question: {
          en: "How many original settlers founded Los Angeles in 1781?",
          es: "¿Cuántos colonos originales fundaron Los Ángeles en 1781?",
          de: "Wie viele ursprüngliche Siedler gründeten 1781 Los Angeles?",
          nl: "Hoeveel oorspronkelijke kolonisten stichtten Los Angeles in 1781?"
        },
        options: [
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "22", es: "22", de: "22", nl: "22" },
          { en: "44", es: "44", de: "44", nl: "44" },
          { en: "88", es: "88", de: "88", nl: "88" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Forty-four settlers, known as 'Los Pobladores,' founded Los Angeles in 1781. This diverse group included people of Spanish, African, and Native American descent. They established the settlement along the Los Angeles River. The city has grown from these humble beginnings to become the second-largest metropolitan area in the United States with over 13 million people.",
          es: "Cuarenta y cuatro colonos, conocidos como 'Los Pobladores', fundaron Los Ángeles en 1781. Este grupo diverso incluía personas de ascendencia española, africana y nativa americana. Establecieron el asentamiento a lo largo del río Los Ángeles. La ciudad ha crecido desde estos humildes comienzos hasta convertirse en la segunda área metropolitana más grande de Estados Unidos con más de 13 millones de personas.",
          de: "Vierundvierzig Siedler, bekannt als 'Los Pobladores', gründeten 1781 Los Angeles. Diese vielfältige Gruppe umfasste Menschen spanischer, afrikanischer und indianischer Abstammung. Sie gründeten die Siedlung entlang des Los Angeles River. Die Stadt ist von diesen bescheidenen Anfängen zur zweitgrößten Metropolregion in den Vereinigten Staaten mit über 13 Millionen Menschen gewachsen.",
          nl: "Vierenveertig kolonisten, bekend als 'Los Pobladores', stichtten Los Angeles in 1781. Deze diverse groep omvatte mensen van Spaanse, Afrikaanse en inheems-Amerikaanse afkomst. Ze vestigden de nederzetting langs de Los Angeles River. De stad is gegroeid van deze bescheiden begin tot het op één na grootste grootstedelijk gebied in de Verenigde Staten met meer dan 13 miljoen mensen."
        }
      }
    ],

    // Day 5 - September 5th: First Labor Day (1882), Mother Teresa dies (1997), Freddie Mercury born (1946)
    day5: [
      {
        question: {
          en: "In what year was the first Labor Day celebrated in the United States?",
          es: "¿En qué año se celebró el primer Día del Trabajo en Estados Unidos?",
          de: "In welchem Jahr wurde der erste Tag der Arbeit in den Vereinigten Staaten gefeiert?",
          nl: "In welk jaar werd de eerste Dag van de Arbeid in de Verenigde Staten gevierd?"
        },
        options: [
          { en: "1890", es: "1890", de: "1890", nl: "1890" },
          { en: "1894", es: "1894", de: "1894", nl: "1894" },
          { en: "1882", es: "1882", de: "1882", nl: "1882" },
          { en: "1886", es: "1886", de: "1886", nl: "1886" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first Labor Day was celebrated on September 5, 1882, in New York City. The event was organized by the Central Labor Union and featured a parade of 10,000 workers who took unpaid time off to march. Labor Day became a federal holiday in 1894 and is now celebrated on the first Monday of September, honoring the contributions and achievements of American workers.",
          es: "El primer Día del Trabajo se celebró el 5 de septiembre de 1882 en la ciudad de Nueva York. El evento fue organizado por la Central Labor Union y contó con un desfile de 10,000 trabajadores que tomaron tiempo libre sin pago para marchar. El Día del Trabajo se convirtió en un feriado federal en 1894 y ahora se celebra el primer lunes de septiembre, honrando las contribuciones y logros de los trabajadores estadounidenses.",
          de: "Der erste Tag der Arbeit wurde am 5. September 1882 in New York City gefeiert. Die Veranstaltung wurde von der Central Labor Union organisiert und umfasste eine Parade von 10.000 Arbeitern, die unbezahlte Freizeit nahmen, um zu marschieren. Der Tag der Arbeit wurde 1894 ein Bundesfeiertag und wird jetzt am ersten Montag im September gefeiert, um die Beiträge und Errungenschaften amerikanischer Arbeiter zu ehren.",
          nl: "De eerste Dag van de Arbeid werd gevierd op 5 september 1882 in New York City. Het evenement werd georganiseerd door de Central Labor Union en omvatte een parade van 10.000 arbeiders die onbetaald vrij namen om te marcheren. Dag van de Arbeid werd een federale feestdag in 1894 en wordt nu gevierd op de eerste maandag van september, ter ere van de bijdragen en prestaties van Amerikaanse arbeiders."
        }
      },
      {
        question: {
          en: "Mother Teresa, who died on September 5, 1997, was awarded the Nobel Peace Prize in which year?",
          es: "Madre Teresa, quien murió el 5 de septiembre de 1997, recibió el Premio Nobel de la Paz en qué año?",
          de: "Mutter Teresa, die am 5. September 1997 starb, erhielt den Friedensnobelpreis in welchem Jahr?",
          nl: "Moeder Teresa, die stierf op 5 september 1997, ontving de Nobelprijs voor de Vrede in welk jaar?"
        },
        options: [
          { en: "1975", es: "1975", de: "1975", nl: "1975" },
          { en: "1979", es: "1979", de: "1979", nl: "1979" },
          { en: "1983", es: "1983", de: "1983", nl: "1983" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Mother Teresa was awarded the Nobel Peace Prize in 1979 for her humanitarian work with the poor in Calcutta, India. She founded the Missionaries of Charity in 1950, which grew to operate in over 130 countries. She was canonized as Saint Teresa of Calcutta in 2016. Her life was dedicated to serving 'the poorest of the poor.'",
          es: "Madre Teresa recibió el Premio Nobel de la Paz en 1979 por su trabajo humanitario con los pobres en Calcuta, India. Fundó las Misioneras de la Caridad en 1950, que creció para operar en más de 130 países. Fue canonizada como Santa Teresa de Calcuta en 2016. Su vida estuvo dedicada a servir a 'los más pobres de los pobres'.",
          de: "Mutter Teresa erhielt 1979 den Friedensnobelpreis für ihre humanitäre Arbeit mit den Armen in Kalkutta, Indien. Sie gründete 1950 die Missionarinnen der Nächstenliebe, die in über 130 Ländern tätig wurde. Sie wurde 2016 als Heilige Teresa von Kalkutta heiliggesprochen. Ihr Leben war dem Dienst an 'den Ärmsten der Armen' gewidmet.",
          nl: "Moeder Teresa ontving in 1979 de Nobelprijs voor de Vrede voor haar humanitaire werk met de armen in Calcutta, India. Ze stichtte in 1950 de Missionarissen van Naastenliefde, die uitgroeide tot activiteiten in meer dan 130 landen. Ze werd in 2016 heilig verklaard als Heilige Teresa van Calcutta. Haar leven was gewijd aan het dienen van 'de armsten der armen'."
        }
      },
      {
        question: {
          en: "Freddie Mercury, born on September 5, 1946, was the lead vocalist of which legendary rock band?",
          es: "Freddie Mercury, nacido el 5 de septiembre de 1946, fue el vocalista principal de qué legendaria banda de rock?",
          de: "Freddie Mercury, geboren am 5. September 1946, war der Leadsänger welcher legendären Rockband?",
          nl: "Freddie Mercury, geboren op 5 september 1946, was de leadzanger van welke legendarische rockband?"
        },
        options: [
          { en: "The Beatles", es: "The Beatles", de: "The Beatles", nl: "The Beatles" },
          { en: "Led Zeppelin", es: "Led Zeppelin", de: "Led Zeppelin", nl: "Led Zeppelin" },
          { en: "Queen", es: "Queen", de: "Queen", nl: "Queen" },
          { en: "The Rolling Stones", es: "The Rolling Stones", de: "The Rolling Stones", nl: "The Rolling Stones" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Freddie Mercury was the legendary lead vocalist and pianist of Queen, one of the most iconic rock bands in history. Known for his powerful four-octave vocal range and flamboyant stage presence, Mercury wrote many of Queen's biggest hits including 'Bohemian Rhapsody' and 'We Are the Champions.' He died in 1991 from AIDS-related complications.",
          es: "Freddie Mercury fue el legendario vocalista principal y pianista de Queen, una de las bandas de rock más icónicas de la historia. Conocido por su poderoso rango vocal de cuatro octavas y su presencia escénica extravagante, Mercury escribió muchos de los mayores éxitos de Queen, incluidos 'Bohemian Rhapsody' y 'We Are the Champions'. Murió en 1991 por complicaciones relacionadas con el SIDA.",
          de: "Freddie Mercury war der legendäre Leadsänger und Pianist von Queen, einer der ikonischsten Rockbands der Geschichte. Bekannt für seinen kraftvollen Vier-Oktaven-Stimmumfang und seine extravagante Bühnenpräsenz, schrieb Mercury viele der größten Hits von Queen, darunter 'Bohemian Rhapsody' und 'We Are the Champions'. Er starb 1991 an AIDS-bedingten Komplikationen.",
          nl: "Freddie Mercury was de legendarische leadzanger en pianist van Queen, een van de meest iconische rockbands in de geschiedenis. Bekend om zijn krachtige vieroktaafstembereik en flamboyante podiumaanwezigheid, schreef Mercury veel van Queens grootste hits, waaronder 'Bohemian Rhapsody' en 'We Are the Champions'. Hij stierf in 1991 aan AIDS-gerelateerde complicaties."
        }
      },
      {
        question: {
          en: "In which city was the first Labor Day parade held in 1882?",
          es: "¿En qué ciudad se realizó el primer desfile del Día del Trabajo en 1882?",
          de: "In welcher Stadt fand 1882 die erste Tag-der-Arbeit-Parade statt?",
          nl: "In welke stad werd de eerste Dag van de Arbeid-parade gehouden in 1882?"
        },
        options: [
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
          { en: "New York City", es: "Nueva York", de: "New York City", nl: "New York City" },
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
          { en: "Philadelphia", es: "Filadelfia", de: "Philadelphia", nl: "Philadelphia" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Labor Day parade was held in New York City on September 5, 1882. Organized by the Central Labor Union, approximately 10,000 workers marched from City Hall to Union Square. The workers took unpaid leave to participate, demonstrating their commitment to the labor movement. The parade established a tradition that continues today in cities across America.",
          es: "El primer desfile del Día del Trabajo se realizó en la ciudad de Nueva York el 5 de septiembre de 1882. Organizado por la Central Labor Union, aproximadamente 10,000 trabajadores marcharon desde el Ayuntamiento hasta Union Square. Los trabajadores tomaron permiso sin pago para participar, demostrando su compromiso con el movimiento laboral. El desfile estableció una tradición que continúa hoy en ciudades de toda América.",
          de: "Die erste Tag-der-Arbeit-Parade fand am 5. September 1882 in New York City statt. Organisiert von der Central Labor Union, marschierten etwa 10.000 Arbeiter vom Rathaus zum Union Square. Die Arbeiter nahmen unbezahlten Urlaub, um teilzunehmen, und demonstrierten damit ihr Engagement für die Arbeiterbewegung. Die Parade begründete eine Tradition, die heute in Städten in ganz Amerika fortbesteht.",
          nl: "De eerste Dag van de Arbeid-parade werd gehouden in New York City op 5 september 1882. Georganiseerd door de Central Labor Union, marcheerden ongeveer 10.000 arbeiders van het stadhuis naar Union Square. De arbeiders namen onbetaald verlof om deel te nemen, wat hun toewijding aan de arbeidersbeweging aantoonde. De parade vestigde een traditie die vandaag voortduurt in steden door heel Amerika."
        }
      },
      {
        question: {
          en: "What was Freddie Mercury's birth name?",
          es: "¿Cuál era el nombre de nacimiento de Freddie Mercury?",
          de: "Was war Freddie Mercurys Geburtsname?",
          nl: "Wat was Freddie Mercury's geboortenaam?"
        },
        options: [
          { en: "Frederick Mercury", es: "Frederick Mercury", de: "Frederick Mercury", nl: "Frederick Mercury" },
          { en: "Farrokh Bulsara", es: "Farrokh Bulsara", de: "Farrokh Bulsara", nl: "Farrokh Bulsara" },
          { en: "Frederick Bulsara", es: "Frederick Bulsara", de: "Frederick Bulsara", nl: "Frederick Bulsara" },
          { en: "Frederic Mercuri", es: "Frederic Mercuri", de: "Frederic Mercuri", nl: "Frederic Mercuri" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Freddie Mercury was born Farrokh Bulsara in Zanzibar (now part of Tanzania) to Parsi parents from India. He adopted the stage name 'Freddie Mercury' when he formed Queen in 1970. Despite changing his name, he maintained strong connections to his Parsi heritage throughout his life. His unique background influenced his artistic style and global perspective.",
          es: "Freddie Mercury nació como Farrokh Bulsara en Zanzíbar (ahora parte de Tanzania) de padres parsis de India. Adoptó el nombre artístico 'Freddie Mercury' cuando formó Queen en 1970. A pesar de cambiar su nombre, mantuvo fuertes conexiones con su herencia parsi durante toda su vida. Su origen único influyó en su estilo artístico y perspectiva global.",
          de: "Freddie Mercury wurde als Farrokh Bulsara in Sansibar (heute Teil von Tansania) als Sohn parsischer Eltern aus Indien geboren. Er nahm den Künstlernamen 'Freddie Mercury' an, als er 1970 Queen gründete. Trotz seiner Namensänderung behielt er sein Leben lang starke Verbindungen zu seinem parsischen Erbe. Sein einzigartiger Hintergrund beeinflusste seinen künstlerischen Stil und seine globale Perspektive.",
          nl: "Freddie Mercury werd geboren als Farrokh Bulsara in Zanzibar (nu deel van Tanzania) bij Parsi-ouders uit India. Hij nam de artiestennaam 'Freddie Mercury' aan toen hij Queen vormde in 1970. Ondanks het veranderen van zijn naam, behield hij zijn hele leven sterke banden met zijn Parsi-erfgoed. Zijn unieke achtergrond beïnvloedde zijn artistieke stijl en mondiale perspectief."
        }
      }
    ],

    // Day 6 - September 6th: First Victoria Cross awarded (1857), Swaziland independence (1968), Jane Addams born (1860)
    day6: [
      {
        question: {
          en: "In what year was the first Victoria Cross, Britain's highest military honor, awarded?",
          es: "¿En qué año se otorgó la primera Cruz Victoria, el honor militar más alto de Gran Bretaña?",
          de: "In welchem Jahr wurde das erste Victoria Cross, Großbritanniens höchste militärische Auszeichnung, verliehen?",
          nl: "In welk jaar werd het eerste Victoria Cross, de hoogste militaire onderscheiding van Groot-Brittannië, uitgereikt?"
        },
        options: [
          { en: "1854", es: "1854", de: "1854", nl: "1854" },
          { en: "1857", es: "1857", de: "1857", nl: "1857" },
          { en: "1860", es: "1860", de: "1860", nl: "1860" },
          { en: "1863", es: "1863", de: "1863", nl: "1863" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Victoria Cross medals were awarded on June 26, 1857, by Queen Victoria herself in a ceremony in Hyde Park. The medal was created to honor acts of valor during the Crimean War (1854-1856). Made from the bronze of Russian cannons captured at Sevastopol, it remains Britain's highest award for gallantry in the face of the enemy.",
          es: "Las primeras medallas de la Cruz Victoria fueron otorgadas el 26 de junio de 1857 por la propia Reina Victoria en una ceremonia en Hyde Park. La medalla fue creada para honrar actos de valor durante la Guerra de Crimea (1854-1856). Hecha del bronce de cañones rusos capturados en Sebastopol, sigue siendo el premio más alto de Gran Bretaña por valor frente al enemigo.",
          de: "Die ersten Victoria Cross-Medaillen wurden am 26. Juni 1857 von Königin Victoria selbst bei einer Zeremonie im Hyde Park verliehen. Die Medaille wurde geschaffen, um Tapferkeitstaten während des Krimkrieges (1854-1856) zu ehren. Sie besteht aus Bronze russischer Kanonen, die in Sewastopol erbeutet wurden, und bleibt Großbritanniens höchste Auszeichnung für Tapferkeit vor dem Feind.",
          nl: "De eerste Victoria Cross-medailles werden op 26 juni 1857 uitgereikt door koningin Victoria zelf tijdens een ceremonie in Hyde Park. De medaille werd gecreëerd om daden van moed tijdens de Krimoorlog (1854-1856) te eren. Gemaakt van het brons van Russische kanonnen die in Sebastopol werden buitgemaakt, blijft het de hoogste Britse onderscheiding voor moed in het aangezicht van de vijand."
        }
      },
      {
        question: {
          en: "Swaziland (now Eswatini) gained independence from which country on September 6, 1968?",
          es: "Suazilandia (ahora Esuatini) obtuvo su independencia de qué país el 6 de septiembre de 1968?",
          de: "Swasiland (jetzt Eswatini) erlangte am 6. September 1968 seine Unabhängigkeit von welchem Land?",
          nl: "Swaziland (nu Eswatini) werd onafhankelijk van welk land op 6 september 1968?"
        },
        options: [
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Swaziland gained independence from the United Kingdom on September 6, 1968, after being a British protectorate since 1903. King Sobhuza II led the country to independence and ruled until 1982. In 2018, King Mswati III renamed the country to 'Kingdom of Eswatini' to reflect its heritage and avoid confusion with Switzerland. It is one of the world's few remaining absolute monarchies.",
          es: "Suazilandia obtuvo su independencia del Reino Unido el 6 de septiembre de 1968, después de ser un protectorado británico desde 1903. El rey Sobhuza II llevó al país a la independencia y gobernó hasta 1982. En 2018, el rey Mswati III cambió el nombre del país a 'Reino de Esuatini' para reflejar su herencia y evitar confusión con Suiza. Es una de las pocas monarquías absolutas restantes del mundo.",
          de: "Swasiland erlangte am 6. September 1968 seine Unabhängigkeit vom Vereinigten Königreich, nachdem es seit 1903 ein britisches Protektorat gewesen war. König Sobhuza II. führte das Land in die Unabhängigkeit und regierte bis 1982. Im Jahr 2018 benannte König Mswati III. das Land in 'Königreich Eswatini' um, um sein Erbe zu reflektieren und Verwechslungen mit der Schweiz zu vermeiden. Es ist eine der wenigen verbliebenen absoluten Monarchien der Welt.",
          nl: "Swaziland werd onafhankelijk van het Verenigd Koninkrijk op 6 september 1968, nadat het sinds 1903 een Brits protectoraat was geweest. Koning Sobhuza II leidde het land naar onafhankelijkheid en regeerde tot 1982. In 2018 hernoemde koning Mswati III het land tot 'Koninkrijk Eswatini' om zijn erfgoed te weerspiegelen en verwarring met Zwitserland te voorkomen. Het is een van 's werelds weinige overgebleven absolute monarchieën."
        }
      },
      {
        question: {
          en: "Jane Addams, born September 6, 1860, was the first American woman to win which prestigious prize?",
          es: "Jane Addams, nacida el 6 de septiembre de 1860, fue la primera mujer estadounidense en ganar qué premio prestigioso?",
          de: "Jane Addams, geboren am 6. September 1860, war die erste amerikanische Frau, die welchen prestigeträchtigen Preis gewann?",
          nl: "Jane Addams, geboren op 6 september 1860, was de eerste Amerikaanse vrouw die welke prestigieuze prijs won?"
        },
        options: [
          { en: "Pulitzer Prize", es: "Premio Pulitzer", de: "Pulitzer-Preis", nl: "Pulitzerprijs" },
          { en: "Nobel Peace Prize", es: "Premio Nobel de la Paz", de: "Friedensnobelpreis", nl: "Nobelprijs voor de Vrede" },
          { en: "Academy Award", es: "Premio de la Academia", de: "Oscar", nl: "Oscar" },
          { en: "Fields Medal", es: "Medalla Fields", de: "Fields-Medaille", nl: "Fields-medaille" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jane Addams won the Nobel Peace Prize in 1931, becoming the first American woman to receive this honor. She was a pioneer social worker and reformer who founded Hull House in Chicago in 1889, one of America's first settlement houses. She was also a leader in women's suffrage and peace movements. Her work focused on helping immigrants and the poor adapt to urban life.",
          es: "Jane Addams ganó el Premio Nobel de la Paz en 1931, convirtiéndose en la primera mujer estadounidense en recibir este honor. Fue una trabajadora social y reformadora pionera que fundó Hull House en Chicago en 1889, una de las primeras casas de asentamiento de Estados Unidos. También fue líder en los movimientos de sufragio femenino y paz. Su trabajo se centró en ayudar a los inmigrantes y los pobres a adaptarse a la vida urbana.",
          de: "Jane Addams gewann 1931 den Friedensnobelpreis und war damit die erste amerikanische Frau, die diese Ehre erhielt. Sie war eine Pionierin der Sozialarbeit und Reformerin, die 1889 das Hull House in Chicago gründete, eines der ersten Settlement Houses Amerikas. Sie war auch eine Führerin der Frauenwahlrechts- und Friedensbewegungen. Ihre Arbeit konzentrierte sich darauf, Einwanderern und Armen bei der Anpassung an das städtische Leben zu helfen.",
          nl: "Jane Addams won in 1931 de Nobelprijs voor de Vrede en werd daarmee de eerste Amerikaanse vrouw die deze eer ontving. Ze was een baanbrekende maatschappelijk werkster en hervormster die in 1889 Hull House in Chicago oprichtte, een van Amerika's eerste settlement houses. Ze was ook een leider in de bewegingen voor vrouwenkiesrecht en vrede. Haar werk was gericht op het helpen van immigranten en armen zich aan te passen aan het stadsleven."
        }
      },
      {
        question: {
          en: "What material is the Victoria Cross medal traditionally made from?",
          es: "¿De qué material está hecha tradicionalmente la medalla de la Cruz Victoria?",
          de: "Aus welchem Material wird die Victoria Cross-Medaille traditionell hergestellt?",
          nl: "Van welk materiaal is de Victoria Cross-medaille traditioneel gemaakt?"
        },
        options: [
          { en: "Pure gold", es: "Oro puro", de: "Reinem Gold", nl: "Puur goud" },
          { en: "Sterling silver", es: "Plata esterlina", de: "Sterlingsilber", nl: "Sterling zilver" },
          { en: "Bronze from captured Russian cannons", es: "Bronce de cañones rusos capturados", de: "Bronze erbeuteter russischer Kanonen", nl: "Brons van buitgemaakte Russische kanonnen" },
          { en: "Iron from British warships", es: "Hierro de buques de guerra británicos", de: "Eisen britischer Kriegsschiffe", nl: "IJzer van Britse oorlogsschepen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Victoria Cross is made from bronze cascabels (handles) from two Russian cannons captured during the Siege of Sevastopol in the Crimean War. This tradition adds symbolic meaning to the medal, as it represents victory over the enemy. Despite various claims, research suggests the same two cannons have provided material for all VCs since 1857. Each medal is individually cast at the Royal Logistic Corps foundry.",
          es: "La Cruz Victoria está hecha de cascabeles de bronce (manijas) de dos cañones rusos capturados durante el Sitio de Sebastopol en la Guerra de Crimea. Esta tradición añade significado simbólico a la medalla, ya que representa la victoria sobre el enemigo. A pesar de varias afirmaciones, la investigación sugiere que los mismos dos cañones han proporcionado material para todas las CV desde 1857. Cada medalla se funde individualmente en la fundición del Royal Logistic Corps.",
          de: "Das Victoria Cross wird aus bronzenen Cascabels (Griffen) von zwei russischen Kanonen hergestellt, die während der Belagerung von Sewastopol im Krimkrieg erbeutet wurden. Diese Tradition verleiht der Medaille symbolische Bedeutung, da sie den Sieg über den Feind darstellt. Trotz verschiedener Behauptungen deutet die Forschung darauf hin, dass dieselben zwei Kanonen seit 1857 Material für alle VCs geliefert haben. Jede Medaille wird einzeln in der Gießerei des Royal Logistic Corps gegossen.",
          nl: "Het Victoria Cross is gemaakt van bronzen cascabels (handvatten) van twee Russische kanonnen die werden buitgemaakt tijdens het Beleg van Sebastopol in de Krimoorlog. Deze traditie voegt symbolische betekenis toe aan de medaille, omdat het de overwinning op de vijand vertegenwoordigt. Ondanks verschillende beweringen suggereert onderzoek dat dezelfde twee kanonnen sinds 1857 materiaal hebben geleverd voor alle VC's. Elke medaille wordt individueel gegoten in de gieterij van het Royal Logistic Corps."
        }
      },
      {
        question: {
          en: "Hull House, founded by Jane Addams in Chicago, was an example of what type of social institution?",
          es: "Hull House, fundada por Jane Addams en Chicago, fue un ejemplo de qué tipo de institución social?",
          de: "Hull House, von Jane Addams in Chicago gegründet, war ein Beispiel für welche Art von sozialer Einrichtung?",
          nl: "Hull House, opgericht door Jane Addams in Chicago, was een voorbeeld van welk type sociale instelling?"
        },
        options: [
          { en: "A hospital", es: "Un hospital", de: "Ein Krankenhaus", nl: "Een ziekenhuis" },
          { en: "A settlement house", es: "Una casa de asentamiento", de: "Ein Settlement House", nl: "Een settlement house" },
          { en: "A university", es: "Una universidad", de: "Eine Universität", nl: "Een universiteit" },
          { en: "A orphanage", es: "Un orfanato", de: "Ein Waisenhaus", nl: "Een weeshuis" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Hull House was a settlement house, a community center providing social services, education, and cultural activities to immigrants and the poor. Founded in 1889, it offered English classes, childcare, health services, art programs, and more. The settlement house movement aimed to bridge the gap between social classes by having middle-class reformers live in poor neighborhoods. Hull House became a model for similar institutions nationwide and operated until 2012.",
          es: "Hull House fue una casa de asentamiento, un centro comunitario que brindaba servicios sociales, educación y actividades culturales a inmigrantes y pobres. Fundada en 1889, ofrecía clases de inglés, cuidado infantil, servicios de salud, programas de arte y más. El movimiento de casas de asentamiento tenía como objetivo cerrar la brecha entre las clases sociales al hacer que reformadores de clase media vivieran en vecindarios pobres. Hull House se convirtió en un modelo para instituciones similares en todo el país y operó hasta 2012.",
          de: "Hull House war ein Settlement House, ein Gemeindezentrum, das Sozialdienste, Bildung und kulturelle Aktivitäten für Einwanderer und Arme anbot. 1889 gegründet, bot es Englischkurse, Kinderbetreuung, Gesundheitsdienste, Kunstprogramme und mehr. Die Settlement-House-Bewegung zielte darauf ab, die Kluft zwischen den sozialen Klassen zu überbrücken, indem Reformer der Mittelklasse in armen Vierteln lebten. Hull House wurde zum Vorbild für ähnliche Einrichtungen im ganzen Land und war bis 2012 in Betrieb.",
          nl: "Hull House was een settlement house, een gemeenschapscentrum dat sociale diensten, onderwijs en culturele activiteiten bood aan immigranten en armen. Opgericht in 1889, bood het Engelse lessen, kinderopvang, gezondheidsdiensten, kunstprogramma's en meer. De settlement house-beweging was erop gericht de kloof tussen sociale klassen te overbruggen door middenklasse-hervormers in arme buurten te laten wonen. Hull House werd een model voor soortgelijke instellingen in het hele land en was in bedrijf tot 2012."
        }
      }
    ],

    // Day 7 - September 7th: London Blitz begins (1940), Brazil independence (1822), Buddy Holly born (1936)
    day7: [
      {
        question: {
          en: "On September 7, 1940, the London Blitz began when Germany launched a massive bombing campaign. How many consecutive days did this initial phase last?",
          es: "El 7 de septiembre de 1940, el Blitz de Londres comenzó cuando Alemania lanzó una campaña masiva de bombardeos. ¿Cuántos días consecutivos duró esta fase inicial?",
          de: "Am 7. September 1940 begann der London Blitz, als Deutschland eine massive Bombenangriffskampagne startete. Wie viele aufeinanderfolgende Tage dauerte diese Anfangsphase?",
          nl: "Op 7 september 1940 begon de Blitz van Londen toen Duitsland een massale bombardementscampagne lanceerde. Hoeveel opeenvolgende dagen duurde deze initiële fase?"
        },
        options: [
          { en: "30 days", es: "30 días", de: "30 Tage", nl: "30 dagen" },
          { en: "45 days", es: "45 días", de: "45 Tage", nl: "45 dagen" },
          { en: "57 days", es: "57 días", de: "57 Tage", nl: "57 dagen" },
          { en: "70 days", es: "70 días", de: "70 Tage", nl: "70 dagen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The London Blitz began on September 7, 1940, with 57 consecutive nights of bombing by the German Luftwaffe. Over 40,000 civilians were killed during the entire Blitz campaign, which lasted until May 1941. The attacks targeted London's docks, industrial areas, and residential neighborhoods. Despite the devastation, British morale remained strong, symbolized by the phrase 'Keep Calm and Carry On.'",
          es: "El Blitz de Londres comenzó el 7 de septiembre de 1940, con 57 noches consecutivas de bombardeos por la Luftwaffe alemana. Más de 40,000 civiles murieron durante toda la campaña del Blitz, que duró hasta mayo de 1941. Los ataques se dirigieron a los muelles de Londres, áreas industriales y vecindarios residenciales. A pesar de la devastación, la moral británica se mantuvo fuerte, simbolizada por la frase 'Mantén la calma y sigue adelante'.",
          de: "Der London Blitz begann am 7. September 1940 mit 57 aufeinanderfolgenden Nächten von Bombenangriffen durch die deutsche Luftwaffe. Während der gesamten Blitz-Kampagne, die bis Mai 1941 dauerte, wurden über 40.000 Zivilisten getötet. Die Angriffe richteten sich gegen Londons Docks, Industriegebiete und Wohnviertel. Trotz der Verwüstung blieb die britische Moral stark, symbolisiert durch den Satz 'Keep Calm and Carry On'.",
          nl: "De Blitz van Londen begon op 7 september 1940, met 57 opeenvolgende nachten van bombardementen door de Duitse Luftwaffe. Meer dan 40.000 burgers werden gedood tijdens de hele Blitz-campagne, die duurde tot mei 1941. De aanvallen waren gericht op de dokken van Londen, industriële gebieden en woonwijken. Ondanks de verwoesting bleef het Britse moreel sterk, gesymboliseerd door de zin 'Keep Calm and Carry On'."
        }
      },
      {
        question: {
          en: "Brazil declared independence from Portugal on September 7, 1822. Who became Brazil's first Emperor?",
          es: "Brasil declaró su independencia de Portugal el 7 de septiembre de 1822. ¿Quién se convirtió en el primer Emperador de Brasil?",
          de: "Brasilien erklärte am 7. September 1822 seine Unabhängigkeit von Portugal. Wer wurde Brasiliens erster Kaiser?",
          nl: "Brazilië verklaarde op 7 september 1822 onafhankelijkheid van Portugal. Wie werd de eerste keizer van Brazilië?"
        },
        options: [
          { en: "João VI", es: "João VI", de: "Johann VI.", nl: "João VI" },
          { en: "Pedro I", es: "Pedro I", de: "Pedro I.", nl: "Pedro I" },
          { en: "Pedro II", es: "Pedro II", de: "Pedro II.", nl: "Pedro II" },
          { en: "Ferdinand I", es: "Fernando I", de: "Ferdinand I.", nl: "Ferdinand I" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Dom Pedro I, son of Portuguese King João VI, declared Brazil's independence and became its first Emperor on September 7, 1822. According to legend, he proclaimed 'Independence or Death!' on the banks of the Ipiranga River near São Paulo. Unlike most Latin American independence movements, Brazil's transition was relatively peaceful and maintained a monarchical system until 1889. Pedro I ruled until 1831 when he abdicated in favor of his son, Pedro II.",
          es: "Dom Pedro I, hijo del rey portugués João VI, declaró la independencia de Brasil y se convirtió en su primer Emperador el 7 de septiembre de 1822. Según la leyenda, proclamó '¡Independencia o Muerte!' en las orillas del río Ipiranga cerca de São Paulo. A diferencia de la mayoría de los movimientos de independencia latinoamericanos, la transición de Brasil fue relativamente pacífica y mantuvo un sistema monárquico hasta 1889. Pedro I gobernó hasta 1831 cuando abdicó a favor de su hijo, Pedro II.",
          de: "Dom Pedro I., Sohn des portugiesischen Königs Johann VI., erklärte am 7. September 1822 die Unabhängigkeit Brasiliens und wurde dessen erster Kaiser. Der Legende nach rief er 'Unabhängigkeit oder Tod!' am Ufer des Flusses Ipiranga bei São Paulo aus. Im Gegensatz zu den meisten lateinamerikanischen Unabhängigkeitsbewegungen verlief Brasiliens Übergang relativ friedlich und behielt bis 1889 ein monarchisches System bei. Pedro I. regierte bis 1831, als er zugunsten seines Sohnes Pedro II. abdankte.",
          nl: "Dom Pedro I, zoon van de Portugese koning João VI, verklaarde de onafhankelijkheid van Brazilië en werd op 7 september 1822 de eerste keizer. Volgens de legende riep hij 'Onafhankelijkheid of Dood!' uit op de oevers van de rivier de Ipiranga bij São Paulo. In tegenstelling tot de meeste Latijns-Amerikaanse onafhankelijkheidsbewegingen was Brazilië's overgang relatief vreedzaam en behield het tot 1889 een monarchaal systeem. Pedro I regeerde tot 1831 toen hij afstand deed ten gunste van zijn zoon, Pedro II."
        }
      },
      {
        question: {
          en: "Buddy Holly, born September 7, 1936, was a pioneering rock and roll musician. Which of these was one of his biggest hits?",
          es: "Buddy Holly, nacido el 7 de septiembre de 1936, fue un músico pionero del rock and roll. ¿Cuál de estos fue uno de sus mayores éxitos?",
          de: "Buddy Holly, geboren am 7. September 1936, war ein Pionier des Rock and Roll. Welcher dieser Songs war einer seiner größten Hits?",
          nl: "Buddy Holly, geboren op 7 september 1936, was een baanbrekende rock-'n-rollmuzikant. Welke van deze was een van zijn grootste hits?"
        },
        options: [
          { en: "Johnny B. Goode", es: "Johnny B. Goode", de: "Johnny B. Goode", nl: "Johnny B. Goode" },
          { en: "That'll Be the Day", es: "That'll Be the Day", de: "That'll Be the Day", nl: "That'll Be the Day" },
          { en: "Great Balls of Fire", es: "Great Balls of Fire", de: "Great Balls of Fire", nl: "Great Balls of Fire" },
          { en: "Jailhouse Rock", es: "Jailhouse Rock", de: "Jailhouse Rock", nl: "Jailhouse Rock" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'That'll Be the Day' was one of Buddy Holly's biggest hits, reaching #1 on the Billboard charts in 1957. Holly pioneered the standard rock band lineup of two guitars, bass, and drums. He was influential in the careers of The Beatles, The Rolling Stones, and many others. Tragically, Holly died in a plane crash on February 3, 1959, at age 22, in what became known as 'The Day the Music Died.'",
          es: "'That'll Be the Day' fue uno de los mayores éxitos de Buddy Holly, alcanzando el #1 en las listas de Billboard en 1957. Holly fue pionero en la formación estándar de banda de rock de dos guitarras, bajo y batería. Influyó en las carreras de The Beatles, The Rolling Stones y muchos otros. Trágicamente, Holly murió en un accidente de avión el 3 de febrero de 1959, a los 22 años, en lo que se conoció como 'El Día que Murió la Música'.",
          de: "'That'll Be the Day' war einer von Buddy Hollys größten Hits und erreichte 1957 Platz 1 der Billboard-Charts. Holly war ein Pionier der Standard-Rockband-Besetzung aus zwei Gitarren, Bass und Schlagzeug. Er beeinflusste die Karrieren von The Beatles, The Rolling Stones und vielen anderen. Tragischerweise starb Holly am 3. Februar 1959 im Alter von 22 Jahren bei einem Flugzeugabsturz, der als 'The Day the Music Died' bekannt wurde.",
          nl: "'That'll Be the Day' was een van Buddy Holly's grootste hits en bereikte in 1957 #1 in de Billboard-hitlijsten. Holly was een pionier in de standaard rockband-bezetting van twee gitaren, bas en drums. Hij beïnvloedde de carrières van The Beatles, The Rolling Stones en vele anderen. Tragisch genoeg stierf Holly op 3 februari 1959 op 22-jarige leeftijd bij een vliegtuigongeluk, wat bekend werd als 'The Day the Music Died'."
        }
      },
      {
        question: {
          en: "What was the German code name for the strategic bombing campaign against Britain that included the London Blitz?",
          es: "¿Cuál fue el nombre en código alemán para la campaña de bombardeo estratégico contra Gran Bretaña que incluyó el Blitz de Londres?",
          de: "Was war der deutsche Codename für die strategische Bombenangriffskampagne gegen Großbritannien, die den London Blitz umfasste?",
          nl: "Wat was de Duitse codenaam voor de strategische bombardementscampagne tegen Groot-Brittannië die de Blitz van Londen omvatte?"
        },
        options: [
          { en: "Operation Barbarossa", es: "Operación Barbarroja", de: "Unternehmen Barbarossa", nl: "Operatie Barbarossa" },
          { en: "Operation Sea Lion", es: "Operación León Marino", de: "Unternehmen Seelöwe", nl: "Operatie Zeeleeuw" },
          { en: "The Blitz", es: "El Blitz", de: "Der Blitz", nl: "De Blitz" },
          { en: "Operation Eagle Attack", es: "Operación Ataque de Águila", de: "Unternehmen Adlerangriff", nl: "Operatie Adelaarsaanval" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Operation Eagle Attack (Unternehmen Adlerangriff) was the German code name for the bombing campaign against Britain. The term 'Blitz' comes from the German word 'Blitzkrieg' (lightning war) and was adopted by the British to describe the raids. The campaign was intended to destroy British air defenses and break civilian morale before a planned invasion (Operation Sea Lion). When Britain's RAF held firm during the Battle of Britain, the invasion was postponed indefinitely.",
          es: "Operación Ataque de Águila (Unternehmen Adlerangriff) fue el nombre en código alemán para la campaña de bombardeo contra Gran Bretaña. El término 'Blitz' proviene de la palabra alemana 'Blitzkrieg' (guerra relámpago) y fue adoptado por los británicos para describir los ataques. La campaña tenía como objetivo destruir las defensas aéreas británicas y quebrar la moral civil antes de una invasión planificada (Operación León Marino). Cuando la RAF británica se mantuvo firme durante la Batalla de Inglaterra, la invasión se pospuso indefinidamente.",
          de: "Unternehmen Adlerangriff war der deutsche Codename für die Bombenangriffskampagne gegen Großbritannien. Der Begriff 'Blitz' stammt vom deutschen Wort 'Blitzkrieg' und wurde von den Briten übernommen, um die Angriffe zu beschreiben. Die Kampagne sollte die britische Luftabwehr zerstören und die Zivilmoral vor einer geplanten Invasion (Unternehmen Seelöwe) brechen. Als Großbritanniens RAF während der Luftschlacht um England standhielt, wurde die Invasion auf unbestimmte Zeit verschoben.",
          nl: "Operatie Adelaarsaanval (Unternehmen Adlerangriff) was de Duitse codenaam voor de bombardementscampagne tegen Groot-Brittannië. De term 'Blitz' komt van het Duitse woord 'Blitzkrieg' (bliksemoorlog) en werd door de Britten overgenomen om de aanvallen te beschrijven. De campagne was bedoeld om de Britse luchtverdediging te vernietigen en het burgermoral te breken voor een geplande invasie (Operatie Zeeleeuw). Toen de Britse RAF standhield tijdens de Slag om Engeland, werd de invasie voor onbepaalde tijd uitgesteld."
        }
      },
      {
        question: {
          en: "Where did Brazil's independence proclamation, known as the 'Cry of Ipiranga,' take place?",
          es: "¿Dónde tuvo lugar la proclamación de independencia de Brasil, conocida como el 'Grito de Ipiranga'?",
          de: "Wo fand Brasiliens Unabhängigkeitsproklamation statt, bekannt als der 'Schrei von Ipiranga'?",
          nl: "Waar vond de onafhankelijkheidsproclamatie van Brazilië plaats, bekend als de 'Schreeuw van Ipiranga'?"
        },
        options: [
          { en: "Rio de Janeiro", es: "Río de Janeiro", de: "Rio de Janeiro", nl: "Rio de Janeiro" },
          { en: "Near São Paulo", es: "Cerca de São Paulo", de: "In der Nähe von São Paulo", nl: "Nabij São Paulo" },
          { en: "Salvador", es: "Salvador", de: "Salvador", nl: "Salvador" },
          { en: "Brasília", es: "Brasilia", de: "Brasília", nl: "Brasília" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 'Cry of Ipiranga' (Grito do Ipiranga) occurred on the banks of the Ipiranga River near São Paulo on September 7, 1822. Dom Pedro I allegedly shouted 'Independence or Death!' after receiving letters from Portugal demanding his return. This moment is commemorated in Brazilian history and art, most famously in Pedro Américo's 1888 painting. The site is now home to the Ipiranga Museum and Independence Park. September 7 remains Brazil's Independence Day.",
          es: "El 'Grito de Ipiranga' ocurrió en las orillas del río Ipiranga cerca de São Paulo el 7 de septiembre de 1822. Dom Pedro I supuestamente gritó '¡Independencia o Muerte!' después de recibir cartas de Portugal exigiendo su regreso. Este momento se conmemora en la historia y el arte brasileños, más famosamente en la pintura de 1888 de Pedro Américo. El sitio ahora alberga el Museo Ipiranga y el Parque de la Independencia. El 7 de septiembre sigue siendo el Día de la Independencia de Brasil.",
          de: "Der 'Schrei von Ipiranga' (Grito do Ipiranga) ereignete sich am 7. September 1822 am Ufer des Flusses Ipiranga bei São Paulo. Dom Pedro I. soll 'Unabhängigkeit oder Tod!' gerufen haben, nachdem er Briefe aus Portugal erhalten hatte, die seine Rückkehr forderten. Dieser Moment wird in der brasilianischen Geschichte und Kunst gewürdigt, am berühmtesten in Pedro Américos Gemälde von 1888. Der Ort beherbergt heute das Ipiranga-Museum und den Unabhängigkeitspark. Der 7. September bleibt Brasiliens Unabhängigkeitstag.",
          nl: "De 'Schreeuw van Ipiranga' (Grito do Ipiranga) vond plaats op de oevers van de rivier de Ipiranga bij São Paulo op 7 september 1822. Dom Pedro I riep naar verluidt 'Onafhankelijkheid of Dood!' nadat hij brieven uit Portugal had ontvangen die zijn terugkeer eisten. Dit moment wordt herdacht in de Braziliaanse geschiedenis en kunst, het meest beroemd in Pedro Américo's schilderij uit 1888. De locatie herbergt nu het Ipiranga Museum en het Onafhankelijkheidspark. 7 september blijft de Onafhankelijkheidsdag van Brazilië."
        }
      }
    ],

    // Day 8 - September 8th: Star Trek premieres (1966), Siege of Leningrad begins (1941), Pink born (1979)
    day8: [
      {
        question: {
          en: "The original Star Trek television series premiered on September 8, 1966. Who was the captain of the USS Enterprise?",
          es: "La serie de televisión original de Star Trek se estrenó el 8 de septiembre de 1966. ¿Quién era el capitán del USS Enterprise?",
          de: "Die ursprüngliche Star Trek-Fernsehserie wurde am 8. September 1966 uraufgeführt. Wer war der Kapitän der USS Enterprise?",
          nl: "De originele Star Trek-televisieserie ging in première op 8 september 1966. Wie was de kapitein van de USS Enterprise?"
        },
        options: [
          { en: "Captain Jean-Luc Picard", es: "Capitán Jean-Luc Picard", de: "Captain Jean-Luc Picard", nl: "Kapitein Jean-Luc Picard" },
          { en: "Captain Benjamin Sisko", es: "Capitán Benjamin Sisko", de: "Captain Benjamin Sisko", nl: "Kapitein Benjamin Sisko" },
          { en: "Captain James T. Kirk", es: "Capitán James T. Kirk", de: "Captain James T. Kirk", nl: "Kapitein James T. Kirk" },
          { en: "Captain Kathryn Janeway", es: "Capitana Kathryn Janeway", de: "Captain Kathryn Janeway", nl: "Kapitein Kathryn Janeway" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Captain James T. Kirk, played by William Shatner, commanded the USS Enterprise in the original Star Trek series (1966-1969). The show, created by Gene Roddenberry, featured a multicultural crew exploring space in the 23rd century. Though it only ran for three seasons, Star Trek became a cultural phenomenon, spawning multiple spin-off series, films, and a devoted fanbase. Its vision of a hopeful future and diverse crew was groundbreaking for 1960s television.",
          es: "El Capitán James T. Kirk, interpretado por William Shatner, comandó el USS Enterprise en la serie original de Star Trek (1966-1969). El programa, creado por Gene Roddenberry, presentaba una tripulación multicultural explorando el espacio en el siglo XXIII. Aunque solo duró tres temporadas, Star Trek se convirtió en un fenómeno cultural, generando múltiples series derivadas, películas y una base de fans devotos. Su visión de un futuro esperanzador y una tripulación diversa fue innovadora para la televisión de los años 60.",
          de: "Captain James T. Kirk, gespielt von William Shatner, befehligte die USS Enterprise in der ursprünglichen Star Trek-Serie (1966-1969). Die von Gene Roddenberry geschaffene Show zeigte eine multikulturelle Crew, die im 23. Jahrhundert den Weltraum erkundete. Obwohl sie nur drei Staffeln lief, wurde Star Trek zu einem kulturellen Phänomen, das mehrere Ableger-Serien, Filme und eine treue Fangemeinde hervorbrachte. Seine Vision einer hoffnungsvollen Zukunft und vielfältigen Crew war bahnbrechend für das Fernsehen der 1960er Jahre.",
          nl: "Kapitein James T. Kirk, gespeeld door William Shatner, was de commandant van de USS Enterprise in de originele Star Trek-serie (1966-1969). De show, gemaakt door Gene Roddenberry, toonde een multiculturele bemanning die de ruimte verkende in de 23e eeuw. Hoewel het slechts drie seizoenen liep, werd Star Trek een cultureel fenomeen, dat meerdere spin-off series, films en een toegewijde fanbasis voortbracht. Zijn visie van een hoopvolle toekomst en diverse bemanning was baanbrekend voor televisie in de jaren '60."
        }
      },
      {
        question: {
          en: "The Siege of Leningrad began on September 8, 1941, during World War II. Approximately how long did this devastating siege last?",
          es: "El Sitio de Leningrado comenzó el 8 de septiembre de 1941, durante la Segunda Guerra Mundial. ¿Aproximadamente cuánto duró este devastador asedio?",
          de: "Die Belagerung Leningrads begann am 8. September 1941 während des Zweiten Weltkriegs. Ungefähr wie lange dauerte diese verheerende Belagerung?",
          nl: "Het Beleg van Leningrad begon op 8 september 1941, tijdens de Tweede Wereldoorlog. Ongeveer hoe lang duurde dit verwoestende beleg?"
        },
        options: [
          { en: "6 months", es: "6 meses", de: "6 Monate", nl: "6 maanden" },
          { en: "1 year", es: "1 año", de: "1 Jahr", nl: "1 jaar" },
          { en: "872 days (nearly 2.5 years)", es: "872 días (casi 2,5 años)", de: "872 Tage (fast 2,5 Jahre)", nl: "872 dagen (bijna 2,5 jaar)" },
          { en: "3 years", es: "3 años", de: "3 Jahre", nl: "3 jaar" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Siege of Leningrad lasted 872 days, from September 8, 1941, to January 27, 1944, making it one of the longest and most destructive sieges in history. German and Finnish forces surrounded the city, cutting off food supplies and causing widespread starvation. An estimated 1.5 million people died, mostly from hunger and cold. Despite horrific conditions, the city never surrendered. The resilience of Leningrad's defenders became a symbol of Soviet resistance during WWII.",
          es: "El Sitio de Leningrado duró 872 días, desde el 8 de septiembre de 1941 hasta el 27 de enero de 1944, convirtiéndolo en uno de los asedios más largos y destructivos de la historia. Las fuerzas alemanas y finlandesas rodearon la ciudad, cortando los suministros de alimentos y causando hambre generalizada. Se estima que murieron 1,5 millones de personas, principalmente por hambre y frío. A pesar de las condiciones horribles, la ciudad nunca se rindió. La resistencia de los defensores de Leningrado se convirtió en un símbolo de la resistencia soviética durante la Segunda Guerra Mundial.",
          de: "Die Belagerung Leningrads dauerte 872 Tage, vom 8. September 1941 bis zum 27. Januar 1944, und war damit eine der längsten und zerstörerischsten Belagerungen der Geschichte. Deutsche und finnische Truppen umzingelten die Stadt, schnitten die Lebensmittelversorgung ab und verursachten weit verbreiteten Hunger. Schätzungsweise 1,5 Millionen Menschen starben, hauptsächlich an Hunger und Kälte. Trotz schrecklicher Bedingungen kapitulierte die Stadt nie. Die Widerstandsfähigkeit der Verteidiger Leningrads wurde zum Symbol des sowjetischen Widerstands während des Zweiten Weltkriegs.",
          nl: "Het Beleg van Leningrad duurde 872 dagen, van 8 september 1941 tot 27 januari 1944, waardoor het een van de langste en meest verwoestende belegeringen in de geschiedenis was. Duitse en Finse troepen omsingelden de stad, sneden voedselvoorraden af en veroorzaakten wijdverspreide hongersnood. Naar schatting 1,5 miljoen mensen stierven, voornamelijk door honger en kou. Ondanks de afschuwelijke omstandigheden gaf de stad zich nooit over. De veerkracht van de verdedigers van Leningrad werd een symbool van het Sovjet-verzet tijdens WOII."
        }
      },
      {
        question: {
          en: "Singer Pink (Alecia Beth Moore), born September 8, 1979, is known for her powerful voice and acrobatic performances. Which was her first solo #1 hit in the US?",
          es: "La cantante Pink (Alecia Beth Moore), nacida el 8 de septiembre de 1979, es conocida por su poderosa voz y actuaciones acrobáticas. ¿Cuál fue su primer éxito en solitario número 1 en Estados Unidos?",
          de: "Die Sängerin Pink (Alecia Beth Moore), geboren am 8. September 1979, ist bekannt für ihre kraftvolle Stimme und akrobatische Auftritte. Welches war ihr erster Solo-#1-Hit in den USA?",
          nl: "Zangeres Pink (Alecia Beth Moore), geboren op 8 september 1979, staat bekend om haar krachtige stem en acrobatische optredens. Wat was haar eerste solo #1-hit in de VS?"
        },
        options: [
          { en: "Get the Party Started", es: "Get the Party Started", de: "Get the Party Started", nl: "Get the Party Started" },
          { en: "So What", es: "So What", de: "So What", nl: "So What" },
          { en: "Just Give Me a Reason", es: "Just Give Me a Reason", de: "Just Give Me a Reason", nl: "Just Give Me a Reason" },
          { en: "Raise Your Glass", es: "Raise Your Glass", de: "Raise Your Glass", nl: "Raise Your Glass" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'So What' became Pink's first solo #1 hit on the Billboard Hot 100 in 2008. The defiant breakup anthem resonated with audiences worldwide and topped charts in multiple countries. Pink has won three Grammy Awards and sold over 90 million records. Known for her aerial circus performances during concerts, she combines powerful vocals with death-defying acrobatics. She's also an advocate for various social causes including LGBTQ+ rights and animal welfare.",
          es: "'So What' se convirtió en el primer éxito número 1 en solitario de Pink en el Billboard Hot 100 en 2008. El desafiante himno de ruptura resonó con audiencias de todo el mundo y encabezó las listas en múltiples países. Pink ha ganado tres premios Grammy y ha vendido más de 90 millones de discos. Conocida por sus actuaciones de circo aéreo durante los conciertos, combina vocales poderosas con acrobacias que desafían la muerte. También es defensora de varias causas sociales, incluidos los derechos LGBTQ+ y el bienestar animal.",
          de: "'So What' wurde 2008 Pinks erster Solo-#1-Hit in den Billboard Hot 100. Die trotzige Trennungshymne kam beim Publikum weltweit an und führte die Charts in mehreren Ländern an. Pink hat drei Grammy Awards gewonnen und über 90 Millionen Platten verkauft. Bekannt für ihre Luftzirkus-Auftritte bei Konzerten, kombiniert sie kraftvolle Vocals mit lebensgefährlicher Akrobatik. Sie setzt sich auch für verschiedene soziale Anliegen ein, darunter LGBTQ+-Rechte und Tierschutz.",
          nl: "'So What' werd Pink's eerste solo #1-hit in de Billboard Hot 100 in 2008. Het uitdagende break-up-anthem vond weerklank bij publiek over de hele wereld en stond bovenaan de hitlijsten in meerdere landen. Pink heeft drie Grammy Awards gewonnen en meer dan 90 miljoen platen verkocht. Bekend om haar luchtcircusoptredens tijdens concerten, combineert ze krachtige zang met levensgevaarlijke acrobatiek. Ze is ook een pleitbezorger voor verschillende sociale doelen, waaronder LGBTQ+-rechten en dierenwelzijn."
        }
      },
      {
        question: {
          en: "What was the famous phrase that began each episode of the original Star Trek series?",
          es: "¿Cuál era la famosa frase que comenzaba cada episodio de la serie original de Star Trek?",
          de: "Was war der berühmte Satz, der jede Folge der ursprünglichen Star Trek-Serie begann?",
          nl: "Wat was de beroemde zin die elke aflevering van de originele Star Trek-serie begon?"
        },
        options: [
          { en: "To boldly go where no one has gone before", es: "Ir audazmente donde nadie ha ido antes", de: "Kühn dorthin zu gehen, wo noch nie jemand zuvor gewesen ist", nl: "Moedig te gaan waar niemand ooit is geweest" },
          { en: "Space: the final frontier", es: "El espacio: la frontera final", de: "Der Weltraum: unendliche Weiten", nl: "De ruimte: het laatste grensgebied" },
          { en: "Live long and prosper", es: "Larga vida y prosperidad", de: "Lebe lang und erfolgreich", nl: "Lang leven en welvaart" },
          { en: "Beam me up, Scotty", es: "Transpórtame, Scotty", de: "Beam mich hoch, Scotty", nl: "Beam me op, Scotty" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Each episode began with Captain Kirk's famous narration: 'Space: the final frontier. These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.' The phrase 'to boldly go' became iconic, despite splitting the infinitive. Later series changed 'no man' to 'no one' for inclusivity. This opening became one of the most recognizable introductions in television history.",
          es: "Cada episodio comenzaba con la famosa narración del Capitán Kirk: 'El espacio: la frontera final. Estos son los viajes de la nave estelar Enterprise. Su misión de cinco años: explorar extraños nuevos mundos, buscar nueva vida y nuevas civilizaciones, ir audazmente donde ningún hombre ha ido antes.' La frase 'ir audazmente' se volvió icónica, a pesar de dividir el infinitivo. Series posteriores cambiaron 'ningún hombre' por 'nadie' por inclusividad. Esta apertura se convirtió en una de las introducciones más reconocibles de la historia de la televisión.",
          de: "Jede Folge begann mit Captain Kirks berühmter Erzählung: 'Der Weltraum, unendliche Weiten. Dies sind die Abenteuer des Raumschiffs Enterprise, das mit seiner 400 Mann starken Besatzung fünf Jahre unterwegs ist, um fremde Galaxien zu erforschen, neues Leben und neue Zivilisationen. Viele Lichtjahre von der Erde entfernt dringt die Enterprise in Galaxien vor, die nie ein Mensch zuvor gesehen hat.' Diese Einleitung wurde zu einer der bekanntesten Einführungen in der Fernsehgeschichte.",
          nl: "Elke aflevering begon met de beroemde vertelling van kapitein Kirk: 'De ruimte: het laatste grensgebied. Dit zijn de reizen van het ruimteschip Enterprise. Zijn vijfjarige missie: vreemde nieuwe werelden verkennen, nieuw leven en nieuwe beschavingen zoeken, moedig te gaan waar geen mens ooit is geweest.' De zin 'moedig te gaan' werd iconisch. Latere series veranderden 'geen mens' in 'niemand' voor inclusiviteit. Deze opening werd een van de meest herkenbare introducties in de televisiegeschiedenis."
        }
      },
      {
        question: {
          en: "During the Siege of Leningrad, what vital supply route across frozen Lake Ladoga kept the city alive?",
          es: "Durante el Sitio de Leningrado, ¿qué ruta de suministro vital a través del lago Ladoga congelado mantuvo viva la ciudad?",
          de: "Welche lebenswichtige Versorgungsroute über den zugefrorenen Ladogasee hielt die Stadt während der Belagerung Leningrads am Leben?",
          nl: "Welke vitale bevoorradingsroute over het bevroren Ladogameer hield de stad tijdens het Beleg van Leningrad in leven?"
        },
        options: [
          { en: "The Iron Road", es: "El Camino de Hierro", de: "Die Eisenstraße", nl: "De IJzeren Weg" },
          { en: "The Road of Life", es: "El Camino de la Vida", de: "Die Straße des Lebens", nl: "De Weg van het Leven" },
          { en: "The Frozen Highway", es: "La Autopista Congelada", de: "Die gefrorene Autobahn", nl: "De Bevroren Snelweg" },
          { en: "The Winter Trail", es: "El Sendero de Invierno", de: "Der Winterpfad", nl: "Het Winterpad" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 'Road of Life' (Doroga Zhizni) was the ice road across frozen Lake Ladoga that served as Leningrad's only supply route during winter months. Trucks transported food, fuel, and military supplies into the city while evacuating civilians. The ice road operated from November 1941 to April 1942, saving countless lives despite constant German bombardment. Many drivers and vehicles fell through the ice. This lifeline became a symbol of the city's determination to survive against overwhelming odds.",
          es: "El 'Camino de la Vida' (Doroga Zhizni) fue la carretera de hielo a través del lago Ladoga congelado que sirvió como la única ruta de suministro de Leningrado durante los meses de invierno. Los camiones transportaban alimentos, combustible y suministros militares a la ciudad mientras evacuaban a los civiles. La carretera de hielo operó desde noviembre de 1941 hasta abril de 1942, salvando innumerables vidas a pesar del constante bombardeo alemán. Muchos conductores y vehículos cayeron a través del hielo. Esta línea de vida se convirtió en un símbolo de la determinación de la ciudad de sobrevivir contra pronósticos abrumadores.",
          de: "Die 'Straße des Lebens' (Doroga Zhizni) war die Eisstraße über den zugefrorenen Ladogasee, die während der Wintermonate als einzige Versorgungsroute Leningrads diente. Lastwagen transportierten Lebensmittel, Treibstoff und militärische Versorgungsgüter in die Stadt, während Zivilisten evakuiert wurden. Die Eisstraße war von November 1941 bis April 1942 in Betrieb und rettete unzählige Leben trotz ständiger deutscher Bombardierung. Viele Fahrer und Fahrzeuge brachen durch das Eis. Diese Lebensader wurde zum Symbol für die Entschlossenheit der Stadt, gegen überwältigende Widrigkeiten zu überleben.",
          nl: "De 'Weg van het Leven' (Doroga Zhizni) was de ijsweg over het bevroren Ladogameer die tijdens de wintermaanden als de enige bevoorradingsroute van Leningrad diende. Vrachtwagens vervoerden voedsel, brandstof en militaire voorraden naar de stad terwijl burgers werden geëvacueerd. De ijsweg was in bedrijf van november 1941 tot april 1942 en redde talloze levens ondanks constante Duitse bombardementen. Veel chauffeurs en voertuigen zakten door het ijs. Deze levenslijn werd een symbool van de vastberadenheid van de stad om te overleven tegen overweldigende odds."
        }
      }
    ],

    // Day 9 - September 9th: California becomes state (1850), North Korea founded (1948), Mao Zedong dies (1976)
    day9: [
      {
        question: {
          en: "California became the 31st state of the United States on September 9, 1850. What number was California in the order of admission?",
          es: "California se convirtió en el estado número 31 de los Estados Unidos el 9 de septiembre de 1850. ¿Qué número fue California en el orden de admisión?",
          de: "Kalifornien wurde am 9. September 1850 der 31. Bundesstaat der Vereinigten Staaten. Welche Nummer hatte Kalifornien in der Reihenfolge der Aufnahme?",
          nl: "Californië werd de 31e staat van de Verenigde Staten op 9 september 1850. Welk nummer had Californië in de volgorde van toelating?"
        },
        options: [
          { en: "28th", es: "28º", de: "28.", nl: "28e" },
          { en: "29th", es: "29º", de: "29.", nl: "29e" },
          { en: "31st", es: "31º", de: "31.", nl: "31e" },
          { en: "33rd", es: "33º", de: "33.", nl: "33e" }
        ],
        correctIndex: 2,
        explanation: {
          en: "California was admitted as the 31st state on September 9, 1850, as part of the Compromise of 1850. This occurred during the Gold Rush, just two years after gold was discovered at Sutter's Mill. California entered as a free state, which upset the balance between slave and free states. The rapid population growth from the Gold Rush (from 14,000 to 300,000 in four years) accelerated its statehood. California skipped the usual territorial phase due to this population boom.",
          es: "California fue admitida como el estado número 31 el 9 de septiembre de 1850, como parte del Compromiso de 1850. Esto ocurrió durante la Fiebre del Oro, solo dos años después de que se descubriera oro en Sutter's Mill. California entró como estado libre, lo que alteró el equilibrio entre estados esclavistas y libres. El rápido crecimiento demográfico de la Fiebre del Oro (de 14,000 a 300,000 en cuatro años) aceleró su condición de estado. California se saltó la fase territorial habitual debido a este boom demográfico.",
          de: "Kalifornien wurde am 9. September 1850 als 31. Bundesstaat aufgenommen, als Teil des Kompromisses von 1850. Dies geschah während des Goldrausches, nur zwei Jahre nachdem Gold in Sutter's Mill entdeckt worden war. Kalifornien trat als freier Staat bei, was das Gleichgewicht zwischen Sklaven- und freien Staaten störte. Das schnelle Bevölkerungswachstum durch den Goldrausch (von 14.000 auf 300.000 in vier Jahren) beschleunigte seine Eigenstaatlichkeit. Kalifornien übersprang die übliche territoriale Phase aufgrund dieses Bevölkerungsbooms.",
          nl: "Californië werd op 9 september 1850 als 31e staat toegelaten, als onderdeel van het Compromis van 1850. Dit gebeurde tijdens de Goudkoorts, slechts twee jaar nadat goud was ontdekt bij Sutter's Mill. Californië trad toe als vrije staat, wat het evenwicht tussen slavenstaten en vrije staten verstoorde. De snelle bevolkingsgroei door de Goudkoorts (van 14.000 naar 300.000 in vier jaar) versnelde het staatschap. Californië sloeg de gebruikelijke territoriale fase over vanwege deze bevolkingsexplosie."
        }
      },
      {
        question: {
          en: "The Democratic People's Republic of Korea (North Korea) was officially founded on September 9, 1948. Who became its first leader?",
          es: "La República Popular Democrática de Corea (Corea del Norte) se fundó oficialmente el 9 de septiembre de 1948. ¿Quién se convirtió en su primer líder?",
          de: "Die Demokratische Volksrepublik Korea (Nordkorea) wurde am 9. September 1948 offiziell gegründet. Wer wurde ihr erster Führer?",
          nl: "De Democratische Volksrepubliek Korea (Noord-Korea) werd officieel opgericht op 9 september 1948. Wie werd de eerste leider?"
        },
        options: [
          { en: "Kim Jong-il", es: "Kim Jong-il", de: "Kim Jong-il", nl: "Kim Jong-il" },
          { en: "Kim Il-sung", es: "Kim Il-sung", de: "Kim Il-sung", nl: "Kim Il-sung" },
          { en: "Kim Jong-un", es: "Kim Jong-un", de: "Kim Jong-un", nl: "Kim Jong-un" },
          { en: "Park Chung-hee", es: "Park Chung-hee", de: "Park Chung-hee", nl: "Park Chung-hee" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Kim Il-sung became North Korea's first leader when it was founded on September 9, 1948. He ruled until his death in 1994, establishing a totalitarian state with a personality cult. The country was formed after Korea was divided along the 38th parallel following World War II, with the Soviet Union controlling the north. Kim Il-sung led North Korea during the Korean War (1950-1953) and established a hereditary dictatorship that continues through his descendants.",
          es: "Kim Il-sung se convirtió en el primer líder de Corea del Norte cuando se fundó el 9 de septiembre de 1948. Gobernó hasta su muerte en 1994, estableciendo un estado totalitario con un culto a la personalidad. El país se formó después de que Corea se dividiera a lo largo del paralelo 38 después de la Segunda Guerra Mundial, con la Unión Soviética controlando el norte. Kim Il-sung lideró Corea del Norte durante la Guerra de Corea (1950-1953) y estableció una dictadura hereditaria que continúa a través de sus descendientes.",
          de: "Kim Il-sung wurde Nordkoreas erster Führer, als es am 9. September 1948 gegründet wurde. Er regierte bis zu seinem Tod 1994 und etablierte einen totalitären Staat mit einem Personenkult. Das Land wurde gebildet, nachdem Korea nach dem Zweiten Weltkrieg entlang des 38. Breitengrads geteilt wurde, wobei die Sowjetunion den Norden kontrollierte. Kim Il-sung führte Nordkorea während des Koreakrieges (1950-1953) und etablierte eine erbliche Diktatur, die durch seine Nachkommen fortbesteht.",
          nl: "Kim Il-sung werd de eerste leider van Noord-Korea toen het werd opgericht op 9 september 1948. Hij regeerde tot zijn dood in 1994 en vestigde een totalitaire staat met een persoonlijkheidscultus. Het land werd gevormd nadat Korea werd verdeeld langs de 38e breedtegraad na de Tweede Wereldoorlog, met de Sovjet-Unie die het noorden controleerde. Kim Il-sung leidde Noord-Korea tijdens de Koreaanse Oorlog (1950-1953) en vestigde een erfelijke dictatuur die voortduurt via zijn nakomelingen."
        }
      },
      {
        question: {
          en: "Mao Zedong, founder of the People's Republic of China, died on September 9, 1976. How long had he ruled China?",
          es: "Mao Zedong, fundador de la República Popular China, murió el 9 de septiembre de 1976. ¿Cuánto tiempo había gobernado China?",
          de: "Mao Zedong, Gründer der Volksrepublik China, starb am 9. September 1976. Wie lange hatte er China regiert?",
          nl: "Mao Zedong, oprichter van de Volksrepubliek China, stierf op 9 september 1976. Hoe lang had hij China geregeerd?"
        },
        options: [
          { en: "15 years", es: "15 años", de: "15 Jahre", nl: "15 jaar" },
          { en: "27 years", es: "27 años", de: "27 Jahre", nl: "27 jaar" },
          { en: "33 years", es: "33 años", de: "33 Jahre", nl: "33 jaar" },
          { en: "40 years", es: "40 años", de: "40 Jahre", nl: "40 jaar" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Mao Zedong ruled China for 27 years, from the founding of the People's Republic of China in 1949 until his death in 1976. He led the Communist revolution and transformed China into a socialist state. His policies included the Great Leap Forward (1958-1962) and the Cultural Revolution (1966-1976), which caused millions of deaths but also modernized China. His legacy remains controversial - viewed as both a revolutionary leader and a dictator responsible for mass suffering.",
          es: "Mao Zedong gobernó China durante 27 años, desde la fundación de la República Popular China en 1949 hasta su muerte en 1976. Lideró la revolución comunista y transformó China en un estado socialista. Sus políticas incluyeron el Gran Salto Adelante (1958-1962) y la Revolución Cultural (1966-1976), que causaron millones de muertes pero también modernizaron China. Su legado sigue siendo controvertido: visto tanto como un líder revolucionario como un dictador responsable de sufrimiento masivo.",
          de: "Mao Zedong regierte China 27 Jahre lang, von der Gründung der Volksrepublik China 1949 bis zu seinem Tod 1976. Er führte die kommunistische Revolution an und verwandelte China in einen sozialistischen Staat. Zu seinen Politiken gehörten der Große Sprung nach vorn (1958-1962) und die Kulturrevolution (1966-1976), die Millionen von Todesfällen verursachten, aber auch China modernisierten. Sein Vermächtnis bleibt umstritten - er wird sowohl als revolutionärer Führer als auch als Diktator angesehen, der für Massenleid verantwortlich ist.",
          nl: "Mao Zedong regeerde China gedurende 27 jaar, vanaf de oprichting van de Volksrepubliek China in 1949 tot zijn dood in 1976. Hij leidde de communistische revolutie en transformeerde China in een socialistische staat. Zijn beleid omvatte de Grote Sprong Voorwaarts (1958-1962) en de Culturele Revolutie (1966-1976), die miljoenen doden veroorzaakten maar China ook moderniseerden. Zijn erfenis blijft controversieel - gezien als zowel een revolutionaire leider als een dictator verantwoordelijk voor massaal lijden."
        }
      },
      {
        question: {
          en: "California's admission as a free state in 1850 was part of which major political agreement?",
          es: "La admisión de California como estado libre en 1850 fue parte de qué acuerdo político importante?",
          de: "Kaliforniens Aufnahme als freier Staat im Jahr 1850 war Teil welcher wichtigen politischen Vereinbarung?",
          nl: "De toelating van Californië als vrije staat in 1850 was onderdeel van welk belangrijk politiek akkoord?"
        },
        options: [
          { en: "The Missouri Compromise", es: "El Compromiso de Misuri", de: "Der Missouri-Kompromiss", nl: "Het Missouri-compromis" },
          { en: "The Compromise of 1850", es: "El Compromiso de 1850", de: "Der Kompromiss von 1850", nl: "Het Compromis van 1850" },
          { en: "The Kansas-Nebraska Act", es: "La Ley Kansas-Nebraska", de: "Der Kansas-Nebraska Act", nl: "De Kansas-Nebraska Act" },
          { en: "The Wilmot Proviso", es: "El Wilmot Proviso", de: "Der Wilmot Proviso", nl: "Het Wilmot Proviso" }
        ],
        correctIndex: 1,
        explanation: {
          en: "California's admission was part of the Compromise of 1850, a series of laws designed to ease tensions between slave and free states. The compromise, crafted by Henry Clay and championed by Daniel Webster and Stephen Douglas, admitted California as a free state while strengthening the Fugitive Slave Act to appease the South. It also organized Utah and New Mexico territories without restrictions on slavery. This compromise temporarily delayed the Civil War but ultimately failed to resolve the fundamental conflict over slavery.",
          es: "La admisión de California fue parte del Compromiso de 1850, una serie de leyes diseñadas para aliviar las tensiones entre estados esclavistas y libres. El compromiso, elaborado por Henry Clay y defendido por Daniel Webster y Stephen Douglas, admitió a California como estado libre mientras fortalecía la Ley de Esclavos Fugitivos para apaciguar al Sur. También organizó los territorios de Utah y Nuevo México sin restricciones sobre la esclavitud. Este compromiso retrasó temporalmente la Guerra Civil pero finalmente no logró resolver el conflicto fundamental sobre la esclavitud.",
          de: "Kaliforniens Aufnahme war Teil des Kompromisses von 1850, einer Reihe von Gesetzen, die darauf abzielten, die Spannungen zwischen Sklaven- und freien Staaten zu verringern. Der Kompromiss, ausgearbeitet von Henry Clay und verfochten von Daniel Webster und Stephen Douglas, nahm Kalifornien als freien Staat auf, während er das Fugitive Slave Act stärkte, um den Süden zu besänftigen. Er organisierte auch die Territorien Utah und New Mexico ohne Beschränkungen bezüglich der Sklaverei. Dieser Kompromiss verzögerte vorübergehend den Bürgerkrieg, konnte aber letztlich den grundlegenden Konflikt über die Sklaverei nicht lösen.",
          nl: "De toelating van Californië was onderdeel van het Compromis van 1850, een reeks wetten die waren ontworpen om de spanningen tussen slavenstaten en vrije staten te verminderen. Het compromis, opgesteld door Henry Clay en verdedigd door Daniel Webster en Stephen Douglas, liet Californië toe als vrije staat terwijl het de Fugitive Slave Act versterkte om het Zuiden te sussen. Het organiseerde ook de gebieden Utah en New Mexico zonder beperkingen op slavernij. Dit compromis stelde de Burgeroorlog tijdelijk uit maar slaagde er uiteindelijk niet in het fundamentele conflict over slavernij op te lossen."
        }
      },
      {
        question: {
          en: "Which major campaign initiated by Mao Zedong aimed to rapidly industrialize China but resulted in widespread famine?",
          es: "¿Qué campaña importante iniciada por Mao Zedong tenía como objetivo industrializar rápidamente a China pero resultó en hambruna generalizada?",
          de: "Welche große Kampagne, die von Mao Zedong initiiert wurde, zielte darauf ab, China schnell zu industrialisieren, führte aber zu weit verbreiteter Hungersnot?",
          nl: "Welke grote campagne geïnitieerd door Mao Zedong was bedoeld om China snel te industrialiseren maar resulteerde in wijdverspreide hongersnood?"
        },
        options: [
          { en: "The Cultural Revolution", es: "La Revolución Cultural", de: "Die Kulturrevolution", nl: "De Culturele Revolutie" },
          { en: "The Great Leap Forward", es: "El Gran Salto Adelante", de: "Der Große Sprung nach vorn", nl: "De Grote Sprong Voorwaarts" },
          { en: "The Hundred Flowers Campaign", es: "La Campaña de las Cien Flores", de: "Die Hundert-Blumen-Bewegung", nl: "De Honderd Bloemen Campagne" },
          { en: "The Long March", es: "La Larga Marcha", de: "Der Lange Marsch", nl: "De Lange Mars" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Great Leap Forward (1958-1962) was Mao's campaign to rapidly transform China from an agrarian economy into an industrial powerhouse. The policy forced farmers into communes and demanded unrealistic production quotas. Poor planning, false reporting, and natural disasters led to the Great Chinese Famine, killing an estimated 15-55 million people. This catastrophic failure temporarily reduced Mao's power within the Communist Party, though he later regained control through the Cultural Revolution.",
          es: "El Gran Salto Adelante (1958-1962) fue la campaña de Mao para transformar rápidamente a China de una economía agraria en una potencia industrial. La política forzó a los agricultores a formar comunas y exigió cuotas de producción poco realistas. La mala planificación, informes falsos y desastres naturales llevaron a la Gran Hambruna China, matando a un estimado de 15-55 millones de personas. Este fracaso catastrófico redujo temporalmente el poder de Mao dentro del Partido Comunista, aunque luego recuperó el control a través de la Revolución Cultural.",
          de: "Der Große Sprung nach vorn (1958-1962) war Maos Kampagne, um China schnell von einer Agrarwirtschaft in eine Industriemacht zu verwandeln. Die Politik zwang Bauern in Kommunen und forderte unrealistische Produktionsquoten. Schlechte Planung, falsche Berichte und Naturkatastrophen führten zur Großen Chinesischen Hungersnot, die schätzungsweise 15-55 Millionen Menschen tötete. Dieses katastrophale Scheitern reduzierte vorübergehend Maos Macht innerhalb der Kommunistischen Partei, obwohl er später durch die Kulturrevolution die Kontrolle zurückgewann.",
          nl: "De Grote Sprong Voorwaarts (1958-1962) was Mao's campagne om China snel te transformeren van een agrarische economie naar een industriële grootmacht. Het beleid dwong boeren in communes en eiste onrealistische productiequota. Slechte planning, valse rapportages en natuurrampen leidden tot de Grote Chinese Hongersnood, waarbij naar schatting 15-55 miljoen mensen omkwamen. Deze catastrofale mislukking verminderde tijdelijk Mao's macht binnen de Communistische Partij, hoewel hij later de controle herkreeg via de Culturele Revolutie."
        }
      }
    ],

    // Day 10 - September 10th: Sewing machine patented (1846), Battle of Lake Erie (1813), Arnold Palmer born (1929)
    day10: [
      {
        question: {
          en: "Elias Howe patented the sewing machine on September 10, 1846. What key innovation did his design introduce?",
          es: "Elias Howe patentó la máquina de coser el 10 de septiembre de 1846. ¿Qué innovación clave introdujo su diseño?",
          de: "Elias Howe patentierte am 10. September 1846 die Nähmaschine. Welche wichtige Innovation führte sein Design ein?",
          nl: "Elias Howe patenteerde de naaimachine op 10 september 1846. Welke belangrijke innovatie introduceerde zijn ontwerp?"
        },
        options: [
          { en: "The rotary wheel", es: "La rueda rotatoria", de: "Das Drehrad", nl: "Het draaiende wiel" },
          { en: "The lockstitch with eye-pointed needle", es: "La puntada de bloqueo con aguja de ojo puntiagudo", de: "Der Doppelsteppstich mit ösenspitziger Nadel", nl: "De locksteek met naald met oog aan punt" },
          { en: "The electric motor", es: "El motor eléctrico", de: "Der Elektromotor", nl: "De elektrische motor" },
          { en: "The foot pedal", es: "El pedal de pie", de: "Das Fußpedal", nl: "Het voetpedaal" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Elias Howe's sewing machine used a lockstitch mechanism with an eye-pointed needle that carried thread through fabric, where it interlocked with a second thread from a shuttle below. This created a strong, reliable stitch. Although Howe patented the design, he struggled to commercialize it. Isaac Singer later improved the design and built a successful business, leading to patent disputes. The sewing machine revolutionized clothing production and became essential in textile industries worldwide.",
          es: "La máquina de coser de Elias Howe utilizó un mecanismo de puntada de bloqueo con una aguja de ojo puntiagudo que llevaba hilo a través de la tela, donde se entrelazaba con un segundo hilo de una lanzadera debajo. Esto creaba una puntada fuerte y confiable. Aunque Howe patentó el diseño, tuvo dificultades para comercializarlo. Isaac Singer luego mejoró el diseño y construyó un negocio exitoso, lo que llevó a disputas de patentes. La máquina de coser revolucionó la producción de ropa y se volvió esencial en las industrias textiles de todo el mundo.",
          de: "Elias Howes Nähmaschine verwendete einen Doppelsteppstich-Mechanismus mit einer ösenspitzigen Nadel, die Faden durch Stoff führte, wo er sich mit einem zweiten Faden von einem Schiffchen darunter verflechten konnte. Dies erzeugte einen starken, zuverlässigen Stich. Obwohl Howe das Design patentieren ließ, hatte er Schwierigkeiten, es zu kommerzialisieren. Isaac Singer verbesserte später das Design und baute ein erfolgreiches Geschäft auf, was zu Patentstreitigkeiten führte. Die Nähmaschine revolutionierte die Kleiderproduktion und wurde in Textilindustrien weltweit unverzichtbar.",
          nl: "Elias Howe's naaimachine gebruikte een locksteek-mechanisme met een naald met oog aan de punt die draad door stof voerde, waar het verweven werd met een tweede draad van een spoel eronder. Dit creëerde een sterke, betrouwbare steek. Hoewel Howe het ontwerp patenteerde, had hij moeite het te commercialiseren. Isaac Singer verbeterde later het ontwerp en bouwde een succesvol bedrijf op, wat leidde tot patentgeschillen. De naaimachine revolutioneerde kledingproductie en werd essentieel in textielindustrieën wereldwijd."
        }
      },
      {
        question: {
          en: "The Battle of Lake Erie took place on September 10, 1813, during the War of 1812. Which American naval officer led the U.S. victory?",
          es: "La Batalla del Lago Erie tuvo lugar el 10 de septiembre de 1813, durante la Guerra de 1812. ¿Qué oficial naval estadounidense lideró la victoria de EE.UU.?",
          de: "Die Schlacht am Eriesee fand am 10. September 1813 während des Krieges von 1812 statt. Welcher amerikanische Marineoffizier führte den US-Sieg an?",
          nl: "De Slag om Lake Erie vond plaats op 10 september 1813, tijdens de Oorlog van 1812. Welke Amerikaanse marineofficier leidde de Amerikaanse overwinning?"
        },
        options: [
          { en: "Admiral Horatio Nelson", es: "Almirante Horatio Nelson", de: "Admiral Horatio Nelson", nl: "Admiraal Horatio Nelson" },
          { en: "Commodore Oliver Hazard Perry", es: "Comodoro Oliver Hazard Perry", de: "Commodore Oliver Hazard Perry", nl: "Commodore Oliver Hazard Perry" },
          { en: "Admiral David Farragut", es: "Almirante David Farragut", de: "Admiral David Farragut", nl: "Admiraal David Farragut" },
          { en: "Captain John Paul Jones", es: "Capitán John Paul Jones", de: "Captain John Paul Jones", nl: "Kapitein John Paul Jones" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Commodore Oliver Hazard Perry led the American fleet to victory at the Battle of Lake Erie. After his flagship was destroyed, Perry famously transferred to another ship and continued fighting, ultimately defeating the British squadron. His victory message became legendary: 'We have met the enemy and they are ours.' This decisive win gave the U.S. control of Lake Erie, cut British supply lines, and enabled American forces to recapture Detroit. Perry became a national hero at age 27.",
          es: "El Comodoro Oliver Hazard Perry lideró la flota estadounidense a la victoria en la Batalla del Lago Erie. Después de que su buque insignia fue destruido, Perry se transfirió famosamente a otro barco y continuó luchando, finalmente derrotando al escuadrón británico. Su mensaje de victoria se volvió legendario: 'Hemos encontrado al enemigo y son nuestros'. Esta victoria decisiva le dio a EE.UU. el control del Lago Erie, cortó las líneas de suministro británicas y permitió a las fuerzas estadounidenses recuperar Detroit. Perry se convirtió en un héroe nacional a los 27 años.",
          de: "Commodore Oliver Hazard Perry führte die amerikanische Flotte zum Sieg in der Schlacht am Eriesee. Nachdem sein Flaggschiff zerstört wurde, wechselte Perry berühmt auf ein anderes Schiff und kämpfte weiter, wobei er schließlich das britische Geschwader besiegte. Seine Siegesnachricht wurde legendär: 'Wir haben den Feind getroffen und sie sind unser.' Dieser entscheidende Sieg gab den USA die Kontrolle über den Eriesee, unterbrach britische Versorgungslinien und ermöglichte es amerikanischen Streitkräften, Detroit zurückzuerobern. Perry wurde mit 27 Jahren ein Nationalheld.",
          nl: "Commodore Oliver Hazard Perry leidde de Amerikaanse vloot naar overwinning in de Slag om Lake Erie. Nadat zijn vlaggenschip was vernietigd, stapte Perry beroemd over naar een ander schip en bleef vechten, waarbij hij uiteindelijk het Britse squadron versloeg. Zijn overwinningsboodschap werd legendarisch: 'We hebben de vijand ontmoet en ze zijn van ons.' Deze beslissende overwinning gaf de VS controle over Lake Erie, onderbrak Britse bevoorradingslijnen en stelde Amerikaanse troepen in staat Detroit te heroveren. Perry werd een nationale held op 27-jarige leeftijd."
        }
      },
      {
        question: {
          en: "Arnold Palmer, born September 10, 1929, was one of golf's greatest players. What popular non-alcoholic beverage is named after him?",
          es: "Arnold Palmer, nacido el 10 de septiembre de 1929, fue uno de los mejores jugadores de golf. ¿Qué bebida popular sin alcohol lleva su nombre?",
          de: "Arnold Palmer, geboren am 10. September 1929, war einer der größten Golfspieler. Welches beliebte alkoholfreie Getränk ist nach ihm benannt?",
          nl: "Arnold Palmer, geboren op 10 september 1929, was een van de grootste golfspelers. Welke populaire alcoholvrije drank is naar hem vernoemd?"
        },
        options: [
          { en: "Orange juice and ginger ale", es: "Jugo de naranja y ginger ale", de: "Orangensaft und Ginger Ale", nl: "Sinaasappelsap en ginger ale" },
          { en: "Grape juice and tonic water", es: "Jugo de uva y agua tónica", de: "Traubensaft und Tonic Water", nl: "Druivensap en tonic" },
          { en: "Half iced tea, half lemonade", es: "Mitad té helado, mitad limonada", de: "Halb Eistee, halb Limonade", nl: "Half ijsthee, half limonade" },
          { en: "Cranberry juice and soda water", es: "Jugo de arándano y agua con gas", de: "Cranberrysaft und Sodawasser", nl: "Veenbessensap en spuitwater" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 'Arnold Palmer' is a refreshing drink made of half iced tea and half lemonade. Palmer popularized this combination, which he would order at golf tournaments. The beverage became so associated with him that it took his name. Palmer won 62 PGA Tour events and seven major championships. Beyond golf, he was a successful businessman and one of sports' first major celebrity endorsers. His charisma and aggressive playing style helped popularize golf on television in the 1960s.",
          es: "El 'Arnold Palmer' es una bebida refrescante hecha de mitad té helado y mitad limonada. Palmer popularizó esta combinación, que solía pedir en torneos de golf. La bebida se asoció tanto con él que tomó su nombre. Palmer ganó 62 eventos del PGA Tour y siete campeonatos mayores. Más allá del golf, fue un exitoso hombre de negocios y uno de los primeros grandes patrocinadores famosos del deporte. Su carisma y estilo de juego agresivo ayudaron a popularizar el golf en la televisión en la década de 1960.",
          de: "Der 'Arnold Palmer' ist ein erfrischendes Getränk aus halb Eistee und halb Limonade. Palmer popularisierte diese Kombination, die er bei Golfturnieren bestellte. Das Getränk wurde so mit ihm assoziiert, dass es seinen Namen annahm. Palmer gewann 62 PGA-Tour-Events und sieben Major-Meisterschaften. Über den Golfsport hinaus war er ein erfolgreicher Geschäftsmann und einer der ersten großen prominenten Werbeträger im Sport. Sein Charisma und aggressiver Spielstil halfen, Golf in den 1960er Jahren im Fernsehen zu popularisieren.",
          nl: "De 'Arnold Palmer' is een verfrissende drank gemaakt van half ijsthee en half limonade. Palmer populariseerde deze combinatie, die hij bestelde bij golftoernooien. De drank werd zo met hem geassocieerd dat het zijn naam kreeg. Palmer won 62 PGA Tour-evenementen en zeven majorkampioenschappen. Buiten golf was hij een succesvol zakenman en een van de eerste grote beroemdheden die producten sponsorde. Zijn charisma en agressieve speelstijl hielpen golf in de jaren '60 populair te maken op televisie."
        }
      },
      {
        question: {
          en: "What famous message did Commodore Perry send after the Battle of Lake Erie?",
          es: "¿Qué mensaje famoso envió el Comodoro Perry después de la Batalla del Lago Erie?",
          de: "Welche berühmte Nachricht sandte Commodore Perry nach der Schlacht am Eriesee?",
          nl: "Welke beroemde boodschap stuurde Commodore Perry na de Slag om Lake Erie?"
        },
        options: [
          { en: "Don't give up the ship", es: "No abandonen el barco", de: "Gebt das Schiff nicht auf", nl: "Geef het schip niet op" },
          { en: "We have met the enemy and they are ours", es: "Hemos encontrado al enemigo y son nuestros", de: "Wir haben den Feind getroffen und sie sind unser", nl: "We hebben de vijand ontmoet en ze zijn van ons" },
          { en: "I have not yet begun to fight", es: "Aún no he empezado a luchar", de: "Ich habe noch nicht angefangen zu kämpfen", nl: "Ik ben nog niet begonnen te vechten" },
          { en: "Damn the torpedoes, full speed ahead", es: "Al diablo los torpedos, adelante a toda velocidad", de: "Verdammt seien die Torpedos, volle Kraft voraus", nl: "Verdomme de torpedo's, volle kracht vooruit" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Perry's famous victory message read: 'We have met the enemy and they are ours. Two ships, two brigs, one schooner and one sloop.' This concise report to General William Henry Harrison announced the complete capture of the British squadron. The phrase 'We have met the enemy and they are ours' became one of the most famous quotes in American military history. Perry wrote the message in pencil on the back of an envelope. The battle gave Americans control of Lake Erie and the Northwest Territory.",
          es: "El famoso mensaje de victoria de Perry decía: 'Hemos encontrado al enemigo y son nuestros. Dos barcos, dos bergantines, una goleta y un balandro'. Este informe conciso al General William Henry Harrison anunció la captura completa del escuadrón británico. La frase 'Hemos encontrado al enemigo y son nuestros' se convirtió en una de las citas más famosas de la historia militar estadounidense. Perry escribió el mensaje a lápiz en el reverso de un sobre. La batalla dio a los estadounidenses el control del Lago Erie y el Territorio del Noroeste.",
          de: "Perrys berühmte Siegesnachricht lautete: 'Wir haben den Feind getroffen und sie sind unser. Zwei Schiffe, zwei Briggs, ein Schoner und eine Schaluppe.' Dieser prägnante Bericht an General William Henry Harrison verkündete die vollständige Gefangennahme des britischen Geschwaders. Der Satz 'Wir haben den Feind getroffen und sie sind unser' wurde zu einem der berühmtesten Zitate in der amerikanischen Militärgeschichte. Perry schrieb die Nachricht mit Bleistift auf die Rückseite eines Umschlags. Die Schlacht gab den Amerikanern die Kontrolle über den Eriesee und das Nordwest-Territorium.",
          nl: "Perry's beroemde overwinningsboodschap luidde: 'We hebben de vijand ontmoet en ze zijn van ons. Twee schepen, twee briggs, een schoener en een sloep.' Dit beknopte rapport aan generaal William Henry Harrison kondigde de volledige verovering van het Britse squadron aan. De zin 'We hebben de vijand ontmoet en ze zijn van ons' werd een van de beroemdste uitspraken in de Amerikaanse militaire geschiedenis. Perry schreef de boodschap in potlood op de achterkant van een envelop. De slag gaf Amerikanen controle over Lake Erie en het Northwest Territory."
        }
      },
      {
        question: {
          en: "How many major championships did Arnold Palmer win during his legendary golf career?",
          es: "¿Cuántos campeonatos mayores ganó Arnold Palmer durante su legendaria carrera de golf?",
          de: "Wie viele Major-Meisterschaften gewann Arnold Palmer während seiner legendären Golfkarriere?",
          nl: "Hoeveel majorkampioenschappen won Arnold Palmer tijdens zijn legendarische golfcarrière?"
        },
        options: [
          { en: "4 majors", es: "4 mayores", de: "4 Majors", nl: "4 majors" },
          { en: "7 majors", es: "7 mayores", de: "7 Majors", nl: "7 majors" },
          { en: "11 majors", es: "11 mayores", de: "11 Majors", nl: "11 majors" },
          { en: "15 majors", es: "15 mayores", de: "15 Majors", nl: "15 majors" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Arnold Palmer won seven major championships: four Masters titles (1958, 1960, 1962, 1964), two British Opens (1961, 1962), and one U.S. Open (1960). He never won the PGA Championship, missing the career Grand Slam. Palmer's aggressive, risk-taking style of play earned him the nickname 'The King' and attracted a devoted following known as 'Arnie's Army.' He was instrumental in making golf a popular televised sport and helped establish the modern PGA Tour. Palmer died in 2016 at age 87.",
          es: "Arnold Palmer ganó siete campeonatos mayores: cuatro títulos del Masters (1958, 1960, 1962, 1964), dos Opens Británicos (1961, 1962) y un US Open (1960). Nunca ganó el Campeonato PGA, perdiendo el Grand Slam de carrera. El estilo de juego agresivo y arriesgado de Palmer le valió el apodo de 'El Rey' y atrajo un seguimiento devoto conocido como 'El Ejército de Arnie'. Fue fundamental para hacer del golf un deporte televisado popular y ayudó a establecer el PGA Tour moderno. Palmer murió en 2016 a los 87 años.",
          de: "Arnold Palmer gewann sieben Major-Meisterschaften: vier Masters-Titel (1958, 1960, 1962, 1964), zwei British Opens (1961, 1962) und ein U.S. Open (1960). Er gewann nie die PGA Championship und verpasste damit den Career Grand Slam. Palmers aggressiver, risikoreicher Spielstil brachte ihm den Spitznamen 'The King' ein und zog eine treue Anhängerschaft an, die als 'Arnie's Army' bekannt wurde. Er war maßgeblich daran beteiligt, Golf zu einem beliebten Fernsehsport zu machen und half, die moderne PGA Tour zu etablieren. Palmer starb 2016 im Alter von 87 Jahren.",
          nl: "Arnold Palmer won zeven majorkampioenschappen: vier Masters-titels (1958, 1960, 1962, 1964), twee British Opens (1961, 1962) en een U.S. Open (1960). Hij won nooit het PGA Championship en miste daarmee de career Grand Slam. Palmers agressieve, risico nemende speelstijl leverde hem de bijnaam 'The King' op en trok een toegewijde aanhang aan die bekend stond als 'Arnie's Army'. Hij was van groot belang bij het populair maken van golf als televisiesport en hielp de moderne PGA Tour te vestigen. Palmer overleed in 2016 op 87-jarige leeftijd."
        }
      }
    ],

    // Day 11 - September 11th: 9/11 terrorist attacks (2001), Chilean coup (1973), O. Henry born (1862)
    day11: [
      {
        question: {
          en: "On September 11, 2001, terrorists hijacked commercial airplanes and attacked which two major locations in the United States?",
          es: "El 11 de septiembre de 2001, los terroristas secuestraron aviones comerciales y atacaron qué dos ubicaciones principales en los Estados Unidos?",
          de: "Am 11. September 2001 entführten Terroristen Verkehrsflugzeuge und griffen welche zwei Hauptstandorte in den Vereinigten Staaten an?",
          nl: "Op 11 september 2001 kaapten terroristen verkeersvliegtuigen en vielen welke twee belangrijke locaties in de Verenigde Staten aan?"
        },
        options: [
          { en: "Golden Gate Bridge and Hollywood", es: "Puente Golden Gate y Hollywood", de: "Golden Gate Bridge und Hollywood", nl: "Golden Gate Bridge en Hollywood" },
          { en: "World Trade Center and Pentagon", es: "World Trade Center y Pentágono", de: "World Trade Center und Pentagon", nl: "World Trade Center en Pentagon" },
          { en: "White House and Capitol", es: "Casa Blanca y Capitolio", de: "Weißes Haus und Kapitol", nl: "Witte Huis en Capitol" },
          { en: "Statue of Liberty and Empire State Building", es: "Estatua de la Libertad y Empire State Building", de: "Freiheitsstatue und Empire State Building", nl: "Vrijheidsbeeld en Empire State Building" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On September 11, 2001, al-Qaeda terrorists hijacked four commercial airplanes. Two planes struck the Twin Towers of the World Trade Center in New York City, causing both towers to collapse. A third plane hit the Pentagon in Washington, D.C. A fourth plane, United Flight 93, crashed in Pennsylvania after passengers fought back against the hijackers. The attacks killed nearly 3,000 people from over 90 countries and led to major changes in U.S. foreign policy, including the War on Terror and military operations in Afghanistan and Iraq.",
          es: "El 11 de septiembre de 2001, terroristas de al-Qaeda secuestraron cuatro aviones comerciales. Dos aviones golpearon las Torres Gemelas del World Trade Center en la ciudad de Nueva York, causando el colapso de ambas torres. Un tercer avión golpeó el Pentágono en Washington, D.C. Un cuarto avión, el Vuelo 93 de United, se estrelló en Pensilvania después de que los pasajeros lucharan contra los secuestradores. Los ataques mataron a casi 3,000 personas de más de 90 países y llevaron a cambios importantes en la política exterior de EE.UU., incluida la Guerra contra el Terrorismo y operaciones militares en Afganistán e Irak.",
          de: "Am 11. September 2001 entführten al-Qaida-Terroristen vier Verkehrsflugzeuge. Zwei Flugzeuge trafen die Zwillingstürme des World Trade Centers in New York City und brachten beide Türme zum Einsturz. Ein drittes Flugzeug traf das Pentagon in Washington, D.C. Ein viertes Flugzeug, United-Flug 93, stürzte in Pennsylvania ab, nachdem Passagiere gegen die Entführer gekämpft hatten. Die Anschläge töteten fast 3.000 Menschen aus über 90 Ländern und führten zu großen Änderungen in der US-Außenpolitik, einschließlich des Krieges gegen den Terror und Militäroperationen in Afghanistan und im Irak.",
          nl: "Op 11 september 2001 kaapten al-Qaeda-terroristen vier verkeersvliegtuigen. Twee vliegtuigen troffen de Twin Towers van het World Trade Center in New York City, waardoor beide torens instortten. Een derde vliegtuig raakte het Pentagon in Washington, D.C. Een vierde vliegtuig, United-vlucht 93, stortte neer in Pennsylvania nadat passagiers tegen de kapers hadden gevochten. De aanvallen doodden bijna 3.000 mensen uit meer dan 90 landen en leidden tot grote veranderingen in het Amerikaanse buitenlandse beleid, waaronder de War on Terror en militaire operaties in Afghanistan en Irak."
        }
      },
      {
        question: {
          en: "What was the name of the terrorist organization responsible for the September 11, 2001 attacks?",
          es: "¿Cuál era el nombre de la organización terrorista responsable de los ataques del 11 de septiembre de 2001?",
          de: "Wie hieß die Terrororganisation, die für die Anschläge vom 11. September 2001 verantwortlich war?",
          nl: "Wat was de naam van de terroristische organisatie die verantwoordelijk was voor de aanvallen van 11 september 2001?"
        },
        options: [
          { en: "ISIS", es: "ISIS", de: "ISIS", nl: "ISIS" },
          { en: "Al-Qaeda", es: "Al-Qaeda", de: "Al-Qaida", nl: "Al-Qaeda" },
          { en: "Taliban", es: "Talibán", de: "Taliban", nl: "Taliban" },
          { en: "Hezbollah", es: "Hezbolá", de: "Hisbollah", nl: "Hezbollah" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Al-Qaeda, led by Osama bin Laden, was responsible for planning and executing the 9/11 attacks. The organization had been founded in 1988 and had previously carried out attacks against U.S. targets, including the 1998 U.S. embassy bombings in Kenya and Tanzania. The 9/11 attacks were the deadliest terrorist act in world history. Bin Laden was killed by U.S. forces in Pakistan in 2011. The attacks fundamentally changed American society and led to enhanced security measures at airports and public venues worldwide.",
          es: "Al-Qaeda, liderada por Osama bin Laden, fue responsable de planificar y ejecutar los ataques del 11 de septiembre. La organización había sido fundada en 1988 y había llevado a cabo previamente ataques contra objetivos estadounidenses, incluidos los atentados de 1998 contra las embajadas de EE.UU. en Kenia y Tanzania. Los ataques del 11 de septiembre fueron el acto terrorista más mortífero en la historia mundial. Bin Laden fue asesinado por las fuerzas estadounidenses en Pakistán en 2011. Los ataques cambiaron fundamentalmente la sociedad estadounidense y llevaron a medidas de seguridad mejoradas en aeropuertos y lugares públicos en todo el mundo.",
          de: "Al-Qaida, angeführt von Osama bin Laden, war für die Planung und Durchführung der Anschläge vom 11. September verantwortlich. Die Organisation war 1988 gegründet worden und hatte zuvor Anschläge auf US-Ziele durchgeführt, darunter die Bombenanschläge auf US-Botschaften in Kenia und Tansania 1998. Die Anschläge vom 11. September waren der tödlichste Terrorakt in der Weltgeschichte. Bin Laden wurde 2011 von US-Streitkräften in Pakistan getötet. Die Anschläge veränderten die amerikanische Gesellschaft grundlegend und führten zu verstärkten Sicherheitsmaßnahmen an Flughäfen und öffentlichen Orten weltweit.",
          nl: "Al-Qaeda, geleid door Osama bin Laden, was verantwoordelijk voor het plannen en uitvoeren van de 9/11-aanvallen. De organisatie was opgericht in 1988 en had eerder aanvallen uitgevoerd op Amerikaanse doelen, waaronder de bomaanslagen op Amerikaanse ambassades in Kenia en Tanzania in 1998. De 9/11-aanvallen waren de dodelijkste terroristische daad in de wereldgeschiedenis. Bin Laden werd in 2011 gedood door Amerikaanse troepen in Pakistan. De aanvallen veranderden de Amerikaanse samenleving fundamenteel en leidden tot verbeterde veiligheidsmaatregelen op luchthavens en openbare plaatsen wereldwijd."
        }
      },
      {
        question: {
          en: "On September 11, 1973, a military coup in Chile overthrew which democratically elected president?",
          es: "El 11 de septiembre de 1973, un golpe militar en Chile derrocó a qué presidente democráticamente elegido?",
          de: "Am 11. September 1973 stürzte ein Militärputsch in Chile welchen demokratisch gewählten Präsidenten?",
          nl: "Op 11 september 1973 zette een militaire staatsgreep in Chili welke democratisch gekozen president af?"
        },
        options: [
          { en: "Che Guevara", es: "Che Guevara", de: "Che Guevara", nl: "Che Guevara" },
          { en: "Fidel Castro", es: "Fidel Castro", de: "Fidel Castro", nl: "Fidel Castro" },
          { en: "Hugo Chávez", es: "Hugo Chávez", de: "Hugo Chávez", nl: "Hugo Chávez" },
          { en: "Salvador Allende", es: "Salvador Allende", de: "Salvador Allende", nl: "Salvador Allende" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Salvador Allende, a Marxist elected president in 1970, was overthrown on September 11, 1973, by a military coup led by General Augusto Pinochet. Allende died during the coup, reportedly by suicide. The coup was supported by the U.S. government, which opposed Allende's socialist policies. Pinochet established a military dictatorship that lasted until 1990, during which thousands of political opponents were killed, tortured, or disappeared. The coup marked the end of Chile's long democratic tradition and the beginning of one of Latin America's most brutal dictatorships.",
          es: "Salvador Allende, un marxista elegido presidente en 1970, fue derrocado el 11 de septiembre de 1973 por un golpe militar liderado por el general Augusto Pinochet. Allende murió durante el golpe, supuestamente por suicidio. El golpe fue apoyado por el gobierno de EE.UU., que se oponía a las políticas socialistas de Allende. Pinochet estableció una dictadura militar que duró hasta 1990, durante la cual miles de opositores políticos fueron asesinados, torturados o desaparecidos. El golpe marcó el fin de la larga tradición democrática de Chile y el comienzo de una de las dictaduras más brutales de América Latina.",
          de: "Salvador Allende, ein 1970 gewählter Marxist, wurde am 11. September 1973 durch einen Militärputsch unter der Führung von General Augusto Pinochet gestürzt. Allende starb während des Putsches, angeblich durch Selbstmord. Der Putsch wurde von der US-Regierung unterstützt, die Allendes sozialistische Politik ablehnte. Pinochet errichtete eine Militärdiktatur, die bis 1990 dauerte und während der Tausende politischer Gegner getötet, gefoltert oder verschwunden wurden. Der Putsch markierte das Ende von Chiles langer demokratischer Tradition und den Beginn einer der brutalsten Diktaturen Lateinamerikas.",
          nl: "Salvador Allende, een marxist die in 1970 tot president werd gekozen, werd op 11 september 1973 afgezet door een militaire staatsgreep onder leiding van generaal Augusto Pinochet. Allende stierf tijdens de staatsgreep, naar verluidt door zelfmoord. De staatsgreep werd gesteund door de Amerikaanse regering, die tegen Allende's socialistische beleid was. Pinochet vestigde een militaire dictatuur die tot 1990 duurde, waarin duizenden politieke tegenstanders werden gedood, gemarteld of verdwenen. De staatsgreep markeerde het einde van Chili's lange democratische traditie en het begin van een van de meest brute dictaturen van Latijns-Amerika."
        }
      },
      {
        question: {
          en: "O. Henry, the famous American short story writer born on September 11, 1862, was known for his stories with what distinctive feature?",
          es: "O. Henry, el famoso escritor estadounidense de cuentos cortos nacido el 11 de septiembre de 1862, era conocido por sus historias con qué característica distintiva?",
          de: "O. Henry, der berühmte amerikanische Kurzgeschichtenschreiber, geboren am 11. September 1862, war bekannt für seine Geschichten mit welchem charakteristischen Merkmal?",
          nl: "O. Henry, de beroemde Amerikaanse korte verhalen schrijver geboren op 11 september 1862, stond bekend om zijn verhalen met welk kenmerkend kenmerk?"
        },
        options: [
          { en: "Horror elements", es: "Elementos de horror", de: "Horror-Elemente", nl: "Horror-elementen" },
          { en: "Twist endings", es: "Finales sorpresa", de: "Überraschende Enden", nl: "Verrassende eindes" },
          { en: "Science fiction themes", es: "Temas de ciencia ficción", de: "Science-Fiction-Themen", nl: "Science fiction thema's" },
          { en: "Historical accuracy", es: "Precisión histórica", de: "Historische Genauigkeit", nl: "Historische nauwkeurigheid" }
        ],
        correctIndex: 1,
        explanation: {
          en: "O. Henry (real name William Sydney Porter) was renowned for his short stories with surprise twist endings. His most famous works include 'The Gift of the Magi,' about a couple who sacrifice their most precious possessions for each other, and 'The Ransom of Red Chief,' about kidnappers whose young victim torments them. He wrote over 600 short stories during his career. Before becoming a writer, O. Henry worked various jobs and even served prison time for embezzlement. His witty, plot-driven stories often featured ordinary people in New York City and the American Southwest. The O. Henry Award for short fiction is named in his honor.",
          es: "O. Henry (nombre real William Sydney Porter) era famoso por sus cuentos cortos con finales sorpresa. Sus obras más famosas incluyen 'El regalo de los Reyes Magos', sobre una pareja que sacrifica sus posesiones más preciadas el uno por el otro, y 'El rescate del Jefe Rojo', sobre secuestradores cuya joven víctima los atormenta. Escribió más de 600 cuentos cortos durante su carrera. Antes de convertirse en escritor, O. Henry trabajó en varios empleos e incluso cumplió condena por malversación de fondos. Sus historias ingeniosas y centradas en la trama a menudo presentaban personas comunes en la ciudad de Nueva York y el suroeste estadounidense. El Premio O. Henry para ficción corta lleva su nombre en su honor.",
          de: "O. Henry (richtiger Name William Sydney Porter) war bekannt für seine Kurzgeschichten mit überraschenden Wendungen am Ende. Zu seinen berühmtesten Werken gehören 'Das Geschenk der Weisen', über ein Paar, das seine wertvollsten Besitztümer füreinander opfert, und 'Das Lösegeld des Roten Häuptlings', über Entführer, deren junges Opfer sie quält. Er schrieb während seiner Karriere über 600 Kurzgeschichten. Bevor er Schriftsteller wurde, arbeitete O. Henry in verschiedenen Jobs und verbüßte sogar eine Gefängnisstrafe wegen Unterschlagung. Seine witzigen, handlungsgetriebenen Geschichten zeigten oft gewöhnliche Menschen in New York City und im amerikanischen Südwesten. Der O. Henry Award für Kurzprosa ist nach ihm benannt.",
          nl: "O. Henry (echte naam William Sydney Porter) stond bekend om zijn korte verhalen met verrassende wendingen aan het eind. Zijn beroemdste werken zijn onder andere 'Het geschenk van de Wijzen', over een stel dat hun kostbaarste bezittingen voor elkaar opoffert, en 'Het losgeld van Red Chief', over ontvoerders wier jonge slachtoffer hen kwelt. Hij schreef tijdens zijn carrière meer dan 600 korte verhalen. Voordat hij schrijver werd, werkte O. Henry in verschillende banen en zat zelfs gevangen voor verduistering. Zijn geestige, plot-gedreven verhalen gingen vaak over gewone mensen in New York City en het Amerikaanse Zuidwesten. De O. Henry Award voor korte fictie is naar hem vernoemd."
        }
      },
      {
        question: {
          en: "How many people died in the September 11, 2001 terrorist attacks?",
          es: "¿Cuántas personas murieron en los ataques terroristas del 11 de septiembre de 2001?",
          de: "Wie viele Menschen starben bei den Terroranschlägen vom 11. September 2001?",
          nl: "Hoeveel mensen stierven bij de terroristische aanvallen van 11 september 2001?"
        },
        options: [
          { en: "Approximately 1,000", es: "Aproximadamente 1,000", de: "Etwa 1.000", nl: "Ongeveer 1.000" },
          { en: "Approximately 3,000", es: "Aproximadamente 3,000", de: "Etwa 3.000", nl: "Ongeveer 3.000" },
          { en: "Approximately 5,000", es: "Aproximadamente 5,000", de: "Etwa 5.000", nl: "Ongeveer 5.000" },
          { en: "Approximately 10,000", es: "Aproximadamente 10,000", de: "Etwa 10.000", nl: "Ongeveer 10.000" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nearly 3,000 people from over 90 countries were killed in the September 11 attacks. This included 2,753 people at the World Trade Center, 184 at the Pentagon, and 40 on Flight 93 in Pennsylvania. The victims included office workers, first responders (343 firefighters and 72 police officers), airline passengers and crew, and Pentagon personnel. Additionally, thousands more have since died from illnesses related to exposure to toxic dust and debris at Ground Zero. The attacks remain the deadliest terrorist incident in world history and the single deadliest event for firefighters and law enforcement officers in U.S. history.",
          es: "Casi 3,000 personas de más de 90 países fueron asesinadas en los ataques del 11 de septiembre. Esto incluyó 2,753 personas en el World Trade Center, 184 en el Pentágono y 40 en el Vuelo 93 en Pensilvania. Las víctimas incluyeron trabajadores de oficina, primeros respondientes (343 bomberos y 72 oficiales de policía), pasajeros y tripulación de aerolíneas, y personal del Pentágono. Además, miles más han muerto desde entonces por enfermedades relacionadas con la exposición al polvo y escombros tóxicos en la Zona Cero. Los ataques siguen siendo el incidente terrorista más mortífero en la historia mundial y el evento más mortífero para bomberos y oficiales de la ley en la historia de EE.UU.",
          de: "Fast 3.000 Menschen aus über 90 Ländern wurden bei den Anschlägen vom 11. September getötet. Dazu gehörten 2.753 Menschen im World Trade Center, 184 im Pentagon und 40 auf Flug 93 in Pennsylvania. Zu den Opfern gehörten Büroangestellte, Ersthelfer (343 Feuerwehrleute und 72 Polizisten), Flugpassagiere und Besatzung sowie Pentagon-Personal. Darüber hinaus sind seitdem Tausende weitere an Krankheiten gestorben, die mit der Exposition gegenüber giftigem Staub und Trümmern am Ground Zero zusammenhängen. Die Anschläge bleiben der tödlichste terroristische Vorfall in der Weltgeschichte und das tödlichste Ereignis für Feuerwehrleute und Polizeibeamte in der US-Geschichte.",
          nl: "Bijna 3.000 mensen uit meer dan 90 landen werden gedood bij de aanvallen van 11 september. Dit omvatte 2.753 mensen in het World Trade Center, 184 in het Pentagon en 40 op vlucht 93 in Pennsylvania. De slachtoffers waren kantoormedewerkers, eerste hulpverleners (343 brandweerlieden en 72 politieagenten), vliegtuigpassagiers en bemanning, en Pentagon-personeel. Daarnaast zijn sindsdien duizenden meer gestorven aan ziekten gerelateerd aan blootstelling aan giftig stof en puin bij Ground Zero. De aanvallen blijven het dodelijkste terroristische incident in de wereldgeschiedenis en de dodelijkste gebeurtenis voor brandweerlieden en wetshandhavers in de Amerikaanse geschiedenis."
        }
      }
    ],

    // Day 12 - September 12th: Steve Biko dies (1977), Jesse Owens born (1913), Johnny Cash born (1932)
    day12: [
      {
        question: {
          en: "Steve Biko, a South African anti-apartheid activist who died on September 12, 1977, founded which important consciousness movement?",
          es: "Steve Biko, un activista sudafricano contra el apartheid que murió el 12 de septiembre de 1977, fundó qué importante movimiento de conciencia?",
          de: "Steve Biko, ein südafrikanischer Anti-Apartheid-Aktivist, der am 12. September 1977 starb, gründete welche wichtige Bewusstseinsbewegung?",
          nl: "Steve Biko, een Zuid-Afrikaanse anti-apartheid activist die stierf op 12 september 1977, richtte welke belangrijke bewustzijnsbeweging op?"
        },
        options: [
          { en: "Civil Rights Movement", es: "Movimiento de Derechos Civiles", de: "Bürgerrechtsbewegung", nl: "Civil Rights Movement" },
          { en: "Freedom Charter Alliance", es: "Alianza de la Carta de la Libertad", de: "Freedom Charter Alliance", nl: "Freedom Charter Alliance" },
          { en: "Pan-African Congress", es: "Congreso Panafricano", de: "Panafrikanischer Kongress", nl: "Pan-Afrikaans Congres" },
          { en: "Black Consciousness Movement", es: "Movimiento de Conciencia Negra", de: "Black Consciousness Movement", nl: "Black Consciousness Movement" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Steve Biko founded the Black Consciousness Movement in the 1960s, which emphasized black pride, self-reliance, and psychological liberation from apartheid oppression. He was detained by security police in August 1977 and died from severe head injuries sustained during interrogation. The apartheid government claimed he died from a hunger strike, but evidence showed he was beaten. His death at age 30 sparked international outrage and became a symbol of apartheid brutality. The 1987 film 'Cry Freedom' told his story. Biko's philosophy profoundly influenced the anti-apartheid struggle and continues to inspire movements for racial justice worldwide.",
          es: "Steve Biko fundó el Movimiento de Conciencia Negra en la década de 1960, que enfatizaba el orgullo negro, la autosuficiencia y la liberación psicológica de la opresión del apartheid. Fue detenido por la policía de seguridad en agosto de 1977 y murió por graves lesiones en la cabeza sufridas durante el interrogatorio. El gobierno del apartheid afirmó que murió por una huelga de hambre, pero la evidencia mostró que fue golpeado. Su muerte a los 30 años provocó indignación internacional y se convirtió en un símbolo de la brutalidad del apartheid. La película de 1987 'Cry Freedom' contó su historia. La filosofía de Biko influyó profundamente en la lucha contra el apartheid y continúa inspirando movimientos por la justicia racial en todo el mundo.",
          de: "Steve Biko gründete in den 1960er Jahren die Black Consciousness Movement, die schwarzen Stolz, Selbstständigkeit und psychologische Befreiung von Apartheid-Unterdrückung betonte. Er wurde im August 1977 von der Sicherheitspolizei festgenommen und starb an schweren Kopfverletzungen, die er während der Vernehmung erlitt. Die Apartheid-Regierung behauptete, er sei an einem Hungerstreik gestorben, aber Beweise zeigten, dass er geschlagen wurde. Sein Tod im Alter von 30 Jahren löste internationale Empörung aus und wurde zum Symbol für die Brutalität der Apartheid. Der Film 'Cry Freedom' von 1987 erzählte seine Geschichte. Bikos Philosophie beeinflusste den Anti-Apartheid-Kampf tiefgreifend und inspiriert weiterhin Bewegungen für Rassengerechtigkeit weltweit.",
          nl: "Steve Biko richtte in de jaren 1960 de Black Consciousness Movement op, die zwarte trots, zelfstandigheid en psychologische bevrijding van apartheidsonderdrukking benadrukte. Hij werd in augustus 1977 vastgehouden door veiligheidspolitie en stierf aan ernstige hoofdletsel opgelopen tijdens verhoor. De apartheidsregering beweerde dat hij stierf aan een hongerstaking, maar bewijsmateriaal toonde aan dat hij was geslagen. Zijn dood op 30-jarige leeftijd veroorzaakte internationale verontwaardiging en werd een symbool van apartheidsbrutaliteit. De film 'Cry Freedom' uit 1987 vertelde zijn verhaal. Biko's filosofie beïnvloedde de anti-apartheidstrijd diepgaand en blijft bewegingen voor raciale gerechtigheid wereldwijd inspireren."
        }
      },
      {
        question: {
          en: "Jesse Owens, born September 12, 1913, famously won four gold medals at which Olympic Games?",
          es: "Jesse Owens, nacido el 12 de septiembre de 1913, ganó famosamente cuatro medallas de oro en qué Juegos Olímpicos?",
          de: "Jesse Owens, geboren am 12. September 1913, gewann berühmt vier Goldmedaillen bei welchen Olympischen Spielen?",
          nl: "Jesse Owens, geboren op 12 september 1913, won beroemd vier gouden medailles op welke Olympische Spelen?"
        },
        options: [
          { en: "1932 Los Angeles Olympics", es: "Juegos Olímpicos de Los Ángeles 1932", de: "Olympische Spiele 1932 in Los Angeles", nl: "Olympische Spelen 1932 in Los Angeles" },
          { en: "1936 Berlin Olympics", es: "Juegos Olímpicos de Berlín 1936", de: "Olympische Spiele 1936 in Berlin", nl: "Olympische Spelen 1936 in Berlijn" },
          { en: "1940 Tokyo Olympics", es: "Juegos Olímpicos de Tokio 1940", de: "Olympische Spiele 1940 in Tokio", nl: "Olympische Spelen 1940 in Tokio" },
          { en: "1948 London Olympics", es: "Juegos Olímpicos de Londres 1948", de: "Olympische Spiele 1948 in London", nl: "Olympische Spelen 1948 in Londen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jesse Owens won four gold medals at the 1936 Berlin Olympics in the 100 meters, 200 meters, long jump, and 4×100 meter relay. His victories were particularly significant because they came in Nazi Germany, where Adolf Hitler had intended the Games to demonstrate Aryan superiority. Owens' triumphs directly contradicted Nazi racial ideology. Despite his Olympic success, Owens returned to America and still faced racial discrimination. He was forced to take menial jobs to support his family. In 1976, President Gerald Ford awarded him the Presidential Medal of Freedom. Owens remains one of the greatest and most influential athletes in Olympic history.",
          es: "Jesse Owens ganó cuatro medallas de oro en los Juegos Olímpicos de Berlín 1936 en los 100 metros, 200 metros, salto de longitud y relevo 4×100 metros. Sus victorias fueron particularmente significativas porque ocurrieron en la Alemania nazi, donde Adolf Hitler había pretendido que los Juegos demostraran la superioridad aria. Los triunfos de Owens contradijeron directamente la ideología racial nazi. A pesar de su éxito olímpico, Owens regresó a Estados Unidos y aún enfrentó discriminación racial. Se vio obligado a tomar trabajos serviles para mantener a su familia. En 1976, el presidente Gerald Ford le otorgó la Medalla Presidencial de la Libertad. Owens sigue siendo uno de los atletas más grandes e influyentes en la historia olímpica.",
          de: "Jesse Owens gewann bei den Olympischen Spielen 1936 in Berlin vier Goldmedaillen in den Disziplinen 100 Meter, 200 Meter, Weitsprung und 4×100-Meter-Staffel. Seine Siege waren besonders bedeutsam, weil sie im nationalsozialistischen Deutschland stattfanden, wo Adolf Hitler beabsichtigt hatte, die Spiele zur Demonstration arischer Überlegenheit zu nutzen. Owens' Triumphe widersprachen direkt der nationalsozialistischen Rassenideologie. Trotz seines olympischen Erfolgs kehrte Owens nach Amerika zurück und sah sich weiterhin rassistischer Diskriminierung ausgesetzt. Er war gezwungen, niedere Arbeiten anzunehmen, um seine Familie zu ernähren. 1976 verlieh ihm Präsident Gerald Ford die Presidential Medal of Freedom. Owens bleibt einer der größten und einflussreichsten Athleten der olympischen Geschichte.",
          nl: "Jesse Owens won vier gouden medailles op de Olympische Spelen van 1936 in Berlijn op de 100 meter, 200 meter, verspringen en 4×100 meter estafette. Zijn overwinningen waren bijzonder betekenisvol omdat ze plaaatsvonden in nazi-Duitsland, waar Adolf Hitler had bedoeld dat de Spelen arische superioriteit zouden demonstreren. Owens' triomfen waren in directe tegenspraak met de nazi-rassenideologie. Ondanks zijn olympisch succes keerde Owens terug naar Amerika en werd nog steeds geconfronteerd met raciale discriminatie. Hij was gedwongen ondergeschikte banen te nemen om zijn gezin te onderhouden. In 1976 kende president Gerald Ford hem de Presidential Medal of Freedom toe. Owens blijft een van de grootste en meest invloedrijke atleten in de olympische geschiedenis."
        }
      },
      {
        question: {
          en: "Johnny Cash, the legendary country music singer born September 12, 1932, was known by what nickname?",
          es: "Johnny Cash, el legendario cantante de música country nacido el 12 de septiembre de 1932, era conocido por qué apodo?",
          de: "Johnny Cash, der legendäre Country-Musik-Sänger, geboren am 12. September 1932, war unter welchem Spitznamen bekannt?",
          nl: "Johnny Cash, de legendarische countrymuziekzanger geboren op 12 september 1932, stond bekend onder welke bijnaam?"
        },
        options: [
          { en: "The King of Rock", es: "El Rey del Rock", de: "Der König des Rock", nl: "De Koning van Rock" },
          { en: "The Man in Black", es: "El Hombre de Negro", de: "Der Mann in Schwarz", nl: "De Man in het Zwart" },
          { en: "The Voice", es: "La Voz", de: "Die Stimme", nl: "De Stem" },
          { en: "The Boss", es: "El Jefe", de: "Der Boss", nl: "De Baas" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Johnny Cash was known as 'The Man in Black' because he always wore black clothing on stage. He explained this choice was in solidarity with the poor, the imprisoned, and those suffering injustice. Cash recorded iconic songs including 'I Walk the Line,' 'Ring of Fire,' and 'Folsom Prison Blues.' His 1968 concert at Folsom Prison became a landmark live album. Cash struggled with addiction but became a redemptive figure in American music. He was inducted into multiple music halls of fame spanning country, rock, and gospel. His deep, distinctive voice and raw emotional honesty influenced generations of musicians. Cash died in 2003, shortly after his wife June Carter Cash.",
          es: "Johnny Cash era conocido como 'El Hombre de Negro' porque siempre vestía ropa negra en el escenario. Explicó que esta elección era en solidaridad con los pobres, los encarcelados y aquellos que sufren injusticia. Cash grabó canciones icónicas como 'I Walk the Line', 'Ring of Fire' y 'Folsom Prison Blues'. Su concierto de 1968 en la Prisión de Folsom se convirtió en un álbum en vivo histórico. Cash luchó contra la adicción pero se convirtió en una figura redentora en la música estadounidense. Fue incluido en múltiples salones de la fama musical que abarcan country, rock y gospel. Su voz profunda y distintiva y su honestidad emocional cruda influyeron en generaciones de músicos. Cash murió en 2003, poco después de su esposa June Carter Cash.",
          de: "Johnny Cash war als 'Der Mann in Schwarz' bekannt, weil er auf der Bühne immer schwarze Kleidung trug. Er erklärte, diese Wahl sei aus Solidarität mit den Armen, den Inhaftierten und denjenigen, die unter Ungerechtigkeit leiden. Cash nahm ikonische Songs auf, darunter 'I Walk the Line', 'Ring of Fire' und 'Folsom Prison Blues'. Sein Konzert von 1968 im Folsom-Gefängnis wurde zu einem wegweisenden Live-Album. Cash kämpfte mit Sucht, wurde aber zu einer erlösenden Figur in der amerikanischen Musik. Er wurde in mehrere Musikhallen der Ruhms aufgenommen, die Country, Rock und Gospel umfassen. Seine tiefe, unverwechselbare Stimme und rohe emotionale Ehrlichkeit beeinflussten Generationen von Musikern. Cash starb 2003, kurz nach seiner Frau June Carter Cash.",
          nl: "Johnny Cash stond bekend als 'De Man in het Zwart' omdat hij altijd zwarte kleding droeg op het podium. Hij legde uit dat deze keuze uit solidariteit was met de armen, de gevangenen en degenen die onrecht lijden. Cash nam iconische liedjes op, waaronder 'I Walk the Line', 'Ring of Fire' en 'Folsom Prison Blues'. Zijn concert in 1968 in de Folsom-gevangenis werd een mijlpaal live-album. Cash worstelde met verslaving maar werd een verlossende figuur in Amerikaanse muziek. Hij werd opgenomen in meerdere muziek halls of fame die country, rock en gospel omvatten. Zijn diepe, onderscheidende stem en rauwe emotionele eerlijkheid beïnvloedden generaties muzikanten. Cash stierf in 2003, kort na zijn vrouw June Carter Cash."
        }
      },
      {
        question: {
          en: "How did Steve Biko die while in police custody on September 12, 1977?",
          es: "¿Cómo murió Steve Biko mientras estaba bajo custodia policial el 12 de septiembre de 1977?",
          de: "Wie starb Steve Biko am 12. September 1977 in Polizeigewahrsam?",
          nl: "Hoe stierf Steve Biko terwijl hij in politiegewahrsam was op 12 september 1977?"
        },
        options: [
          { en: "Natural causes", es: "Causas naturales", de: "Natürliche Ursachen", nl: "Natuurlijke oorzaken" },
          { en: "Severe head injuries from beating", es: "Lesiones graves en la cabeza por golpes", de: "Schwere Kopfverletzungen durch Schläge", nl: "Ernstig hoofdletsel door mishandeling" },
          { en: "Heart attack", es: "Ataque cardíaco", de: "Herzinfarkt", nl: "Hartaanval" },
          { en: "Pneumonia", es: "Neumonía", de: "Lungenentzündung", nl: "Longontsteking" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Steve Biko died from severe brain injuries sustained during brutal interrogation by security police. He was beaten while shackled and suffered massive head trauma. After his condition deteriorated, police transported him naked in the back of a Land Rover for 12 hours to Pretoria, 1,100 kilometers away, claiming no facility closer could treat him. He died shortly after arrival. The apartheid government initially claimed he died from a hunger strike, but an inquest revealed the truth. No one was ever prosecuted for his death. The Truth and Reconciliation Commission later heard testimony about his torture. His death became a rallying cry against apartheid.",
          es: "Steve Biko murió por lesiones cerebrales graves sufridas durante un interrogatorio brutal por parte de la policía de seguridad. Fue golpeado mientras estaba encadenado y sufrió un trauma craneal masivo. Después de que su condición se deteriorara, la policía lo transportó desnudo en la parte trasera de un Land Rover durante 12 horas hasta Pretoria, a 1,100 kilómetros de distancia, alegando que ninguna instalación más cercana podía tratarlo. Murió poco después de llegar. El gobierno del apartheid afirmó inicialmente que murió por una huelga de hambre, pero una investigación reveló la verdad. Nadie fue nunca procesado por su muerte. La Comisión de Verdad y Reconciliación escuchó más tarde testimonios sobre su tortura. Su muerte se convirtió en un grito de guerra contra el apartheid.",
          de: "Steve Biko starb an schweren Hirnverletzungen, die er während brutaler Verhöre durch die Sicherheitspolizei erlitt. Er wurde geschlagen, während er gefesselt war, und erlitt massive Kopftrauma. Nachdem sich sein Zustand verschlechtert hatte, transportierte ihn die Polizei nackt auf der Ladefläche eines Land Rovers 12 Stunden lang nach Pretoria, 1.100 Kilometer entfernt, mit der Behauptung, keine nähere Einrichtung könne ihn behandeln. Er starb kurz nach der Ankunft. Die Apartheid-Regierung behauptete zunächst, er sei an einem Hungerstreik gestorben, aber eine Untersuchung enthüllte die Wahrheit. Niemand wurde jemals für seinen Tod angeklagt. Die Wahrheits- und Versöhnungskommission hörte später Zeugenaussagen über seine Folter. Sein Tod wurde zum Schlachtruf gegen die Apartheid.",
          nl: "Steve Biko stierf aan ernstig hersenletsel opgelopen tijdens brutale verhoren door veiligheidspolitie. Hij werd geslagen terwijl hij geboeid was en leed massaal hoofdtrauma. Nadat zijn toestand verslechterde, vervoerde de politie hem naakt op de laadback van een Land Rover gedurende 12 uur naar Pretoria, 1.100 kilometer verderop, met de bewering dat geen dichter bij gelegen faciliteit hem kon behandelen. Hij stierf kort na aankomst. De apartheidsregering beweerde aanvankelijk dat hij stierf aan een hongerstaking, maar een onderzoek onthulde de waarheid. Niemand werd ooit vervolgd voor zijn dood. De Waarheids- en Verzoeningscommissie hoorde later getuigenissen over zijn marteling. Zijn dood werd een strijdkreet tegen apartheid."
        }
      },
      {
        question: {
          en: "In which track and field events did Jesse Owens NOT win a gold medal at the 1936 Olympics?",
          es: "¿En qué eventos de atletismo NO ganó Jesse Owens una medalla de oro en los Juegos Olímpicos de 1936?",
          de: "In welchen Leichtathletik-Disziplinen gewann Jesse Owens KEINE Goldmedaille bei den Olympischen Spielen 1936?",
          nl: "In welke atletiekonderdelen won Jesse Owens GEEN gouden medaille op de Olympische Spelen van 1936?"
        },
        options: [
          { en: "Long jump", es: "Salto de longitud", de: "Weitsprung", nl: "Verspringen" },
          { en: "100 meter sprint", es: "Carrera de 100 metros", de: "100-Meter-Sprint", nl: "100 meter sprint" },
          { en: "400 meter sprint", es: "Carrera de 400 metros", de: "400-Meter-Sprint", nl: "400 meter sprint" },
          { en: "200 meter sprint", es: "Carrera de 200 metros", de: "200-Meter-Sprint", nl: "200 meter sprint" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Jesse Owens did not compete in the 400 meter sprint at the 1936 Olympics. His four gold medals came in the 100 meters (10.3 seconds), 200 meters (20.7 seconds, Olympic record), long jump (8.06 meters, Olympic record), and 4×100 meter relay (39.8 seconds, world record). In the long jump, he famously received advice from his German competitor Luz Long, who became his friend despite Nazi pressure. Owens' performance was one of the greatest individual achievements in Olympic history. He set three world records and tied another during the Games. His success dealt a significant blow to Hitler's theories of racial superiority.",
          es: "Jesse Owens no compitió en la carrera de 400 metros en los Juegos Olímpicos de 1936. Sus cuatro medallas de oro fueron en los 100 metros (10.3 segundos), 200 metros (20.7 segundos, récord olímpico), salto de longitud (8.06 metros, récord olímpico) y relevo 4×100 metros (39.8 segundos, récord mundial). En el salto de longitud, recibió famosamente consejos de su competidor alemán Luz Long, quien se convirtió en su amigo a pesar de la presión nazi. El desempeño de Owens fue uno de los mayores logros individuales en la historia olímpica. Estableció tres récords mundiales e igualó otro durante los Juegos. Su éxito dio un golpe significativo a las teorías de Hitler sobre la superioridad racial.",
          de: "Jesse Owens trat bei den Olympischen Spielen 1936 nicht im 400-Meter-Sprint an. Seine vier Goldmedaillen gewann er in den Disziplinen 100 Meter (10,3 Sekunden), 200 Meter (20,7 Sekunden, olympischer Rekord), Weitsprung (8,06 Meter, olympischer Rekord) und 4×100-Meter-Staffel (39,8 Sekunden, Weltrekord). Beim Weitsprung erhielt er berühmt Ratschläge von seinem deutschen Konkurrenten Luz Long, der trotz Nazi-Druck sein Freund wurde. Owens' Leistung war eine der größten individuellen Errungenschaften in der olympischen Geschichte. Er stellte drei Weltrekorde auf und egalisierte einen weiteren während der Spiele. Sein Erfolg versetzte Hitlers Theorien über rassische Überlegenheit einen erheblichen Schlag.",
          nl: "Jesse Owens nam niet deel aan de 400 meter sprint op de Olympische Spelen van 1936. Zijn vier gouden medailles kwamen op de 100 meter (10,3 seconden), 200 meter (20,7 seconden, olympisch record), verspringen (8,06 meter, olympisch record) en 4×100 meter estafette (39,8 seconden, wereldrecord). Bij het verspringen kreeg hij beroemd advies van zijn Duitse concurrent Luz Long, die ondanks nazi-druk zijn vriend werd. Owens' prestatie was een van de grootste individuele prestaties in de olympische geschiedenis. Hij vestigde drie wereldrecords en evenaarde een ander tijdens de Spelen. Zijn succes gaf een aanzienlijke slag aan Hitlers theorieën over raciale superioriteit."
        }
      }
    ],

    // Day 13 - September 13th: Oslo Accords signed (1993), Roald Dahl born (1916), Tupac Shakur shot (1996)
    day13: [
      {
        question: {
          en: "The Oslo Accords, signed on September 13, 1993, were a peace agreement between Israel and which organization?",
          es: "Los Acuerdos de Oslo, firmados el 13 de septiembre de 1993, fueron un acuerdo de paz entre Israel y qué organización?",
          de: "Die Oslo-Abkommen, unterzeichnet am 13. September 1993, waren ein Friedensabkommen zwischen Israel und welcher Organisation?",
          nl: "De Oslo-akkoorden, ondertekend op 13 september 1993, waren een vredesakkoord tussen Israël en welke organisatie?"
        },
        options: [
          { en: "Arab League", es: "Liga Árabe", de: "Arabische Liga", nl: "Arabische Liga" },
          { en: "Palestine Liberation Organization (PLO)", es: "Organización para la Liberación de Palestina (OLP)", de: "Palästinensische Befreiungsorganisation (PLO)", nl: "Palestine Liberation Organization (PLO)" },
          { en: "Hezbollah", es: "Hezbolá", de: "Hisbollah", nl: "Hezbollah" },
          { en: "Hamas", es: "Hamás", de: "Hamas", nl: "Hamas" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Oslo Accords were signed between Israel and the Palestine Liberation Organization (PLO) on September 13, 1993, at the White House. The ceremony featured a historic handshake between Israeli Prime Minister Yitzhak Rabin and PLO Chairman Yasser Arafat, with U.S. President Bill Clinton presiding. The accords established a framework for Palestinian self-governance in parts of the West Bank and Gaza Strip. They were intended as a first step toward a comprehensive peace settlement. However, the peace process faced many obstacles, including continued violence, settlement expansion, and the assassination of Rabin in 1995. Despite initial optimism, final status negotiations ultimately collapsed.",
          es: "Los Acuerdos de Oslo fueron firmados entre Israel y la Organización para la Liberación de Palestina (OLP) el 13 de septiembre de 1993 en la Casa Blanca. La ceremonia presentó un histórico apretón de manos entre el Primer Ministro israelí Yitzhak Rabin y el Presidente de la OLP Yasser Arafat, con el presidente estadounidense Bill Clinton presidiendo. Los acuerdos establecieron un marco para el autogobierno palestino en partes de Cisjordania y la Franja de Gaza. Estaban destinados a ser un primer paso hacia un acuerdo de paz integral. Sin embargo, el proceso de paz enfrentó muchos obstáculos, incluida la violencia continua, la expansión de asentamientos y el asesinato de Rabin en 1995. A pesar del optimismo inicial, las negociaciones de estatus final finalmente colapsaron.",
          de: "Die Oslo-Abkommen wurden am 13. September 1993 im Weißen Haus zwischen Israel und der Palästinensischen Befreiungsorganisation (PLO) unterzeichnet. Die Zeremonie zeigte einen historischen Händedruck zwischen dem israelischen Premierminister Yitzhak Rabin und PLO-Vorsitzendem Yasser Arafat, wobei US-Präsident Bill Clinton den Vorsitz führte. Die Abkommen etablierten einen Rahmen für palästinensische Selbstverwaltung in Teilen des Westjordanlandes und des Gazastreifens. Sie sollten ein erster Schritt zu einer umfassenden Friedensregelung sein. Der Friedensprozess stieß jedoch auf viele Hindernisse, darunter anhaltende Gewalt, Siedlungsausbau und die Ermordung Rabins 1995. Trotz anfänglichem Optimismus scheiterten die Endstatusverhandlungen letztendlich.",
          nl: "De Oslo-akkoorden werden ondertekend tussen Israël en de Palestine Liberation Organization (PLO) op 13 september 1993 in het Witte Huis. De ceremonie kenmerkte een historische handdruk tussen de Israëlische premier Yitzhak Rabin en PLO-voorzitter Yasser Arafat, met de Amerikaanse president Bill Clinton als voorzitter. De akkoorden vestigden een kader voor Palestijns zelfbestuur in delen van de Westelijke Jordaanoever en de Gazastrook. Ze waren bedoeld als eerste stap naar een alomvattende vredesregeling. Het vredesproces stuitte echter op veel obstakels, waaronder aanhoudend geweld, nederzettingsuitbreiding en de moord op Rabin in 1995. Ondanks aanvankelijk optimisme mislukten de onderhandelingen over de eindstatus uiteindelijk."
        }
      },
      {
        question: {
          en: "Roald Dahl, born September 13, 1916, wrote which famous children's book about a boy who wins a factory tour?",
          es: "Roald Dahl, nacido el 13 de septiembre de 1916, escribió qué famoso libro infantil sobre un niño que gana un tour por una fábrica?",
          de: "Roald Dahl, geboren am 13. September 1916, schrieb welches berühmte Kinderbuch über einen Jungen, der eine Fabrikführung gewinnt?",
          nl: "Roald Dahl, geboren op 13 september 1916, schreef welk beroemd kinderboek over een jongen die een fabriekstour wint?"
        },
        options: [
          { en: "James and the Giant Peach", es: "James y el melocotón gigante", de: "James und der Riesenpfirsich", nl: "James en de reuzenperzik" },
          { en: "Charlie and the Chocolate Factory", es: "Charlie y la fábrica de chocolate", de: "Charlie und die Schokoladenfabrik", nl: "Sjakie en de chocoladefabriek" },
          { en: "Matilda", es: "Matilda", de: "Matilda", nl: "Matilda" },
          { en: "The BFG", es: "El gran gigante bonachón", de: "Sophiechen und der Riese", nl: "De GVR" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Roald Dahl wrote 'Charlie and the Chocolate Factory' in 1964, about Charlie Bucket who wins a golden ticket to tour Willy Wonka's magical chocolate factory. The book became one of Dahl's most beloved works and has been adapted into films twice (1971 and 2005). Dahl wrote many classic children's books including 'Matilda,' 'The BFG,' 'James and the Giant Peach,' and 'The Witches.' Before becoming an author, he served as a fighter pilot in World War II. His stories often featured dark humor and child protagonists triumphing over cruel adults. Dahl's books have sold over 250 million copies worldwide and continue to captivate young readers.",
          es: "Roald Dahl escribió 'Charlie y la fábrica de chocolate' en 1964, sobre Charlie Bucket que gana un boleto dorado para recorrer la mágica fábrica de chocolate de Willy Wonka. El libro se convirtió en una de las obras más queridas de Dahl y ha sido adaptado al cine dos veces (1971 y 2005). Dahl escribió muchos libros infantiles clásicos, incluidos 'Matilda', 'El gran gigante bonachón', 'James y el melocotón gigante' y 'Las brujas'. Antes de convertirse en autor, sirvió como piloto de combate en la Segunda Guerra Mundial. Sus historias a menudo presentaban humor negro y protagonistas infantiles que triunfaban sobre adultos crueles. Los libros de Dahl han vendido más de 250 millones de copias en todo el mundo y continúan cautivando a jóvenes lectores.",
          de: "Roald Dahl schrieb 1964 'Charlie und die Schokoladenfabrik', über Charlie Bucket, der ein goldenes Ticket gewinnt, um Willy Wonkas magische Schokoladenfabrik zu besichtigen. Das Buch wurde eines von Dahls beliebtesten Werken und wurde zweimal verfilmt (1971 und 2005). Dahl schrieb viele klassische Kinderbücher, darunter 'Matilda', 'Sophiechen und der Riese', 'James und der Riesenpfirsich' und 'Hexen hexen'. Bevor er Autor wurde, diente er als Kampfpilot im Zweiten Weltkrieg. Seine Geschichten enthielten oft schwarzen Humor und kindliche Protagonisten, die über grausame Erwachsene triumphierten. Dahls Bücher haben weltweit über 250 Millionen Exemplare verkauft und fesseln weiterhin junge Leser.",
          nl: "Roald Dahl schreef in 1964 'Sjakie en de chocoladefabriek', over Charlie Bucket die een gouden ticket wint om de magische chocoladefabriek van Willy Wonka te bezoeken. Het boek werd een van Dahls meest geliefde werken en is twee keer verfilmd (1971 en 2005). Dahl schreef veel klassieke kinderboeken, waaronder 'Matilda', 'De GVR', 'James en de reuzenperzik' en 'De heksen'. Voordat hij auteur werd, diende hij als gevechtspiloot in de Tweede Wereldoorlog. Zijn verhalen bevatten vaak zwarte humor en kindprotagonisten die triomfeerden over wrede volwassenen. Dahls boeken hebben wereldwijd meer dan 250 miljoen exemplaren verkocht en blijven jonge lezers boeien."
        }
      },
      {
        question: {
          en: "Tupac Shakur, one of hip-hop's most influential artists, was fatally shot on September 13, 1996, in which city?",
          es: "Tupac Shakur, uno de los artistas más influyentes del hip-hop, fue fatalmente baleado el 13 de septiembre de 1996, en qué ciudad?",
          de: "Tupac Shakur, einer der einflussreichsten Hip-Hop-Künstler, wurde am 13. September 1996 in welcher Stadt tödlich erschossen?",
          nl: "Tupac Shakur, een van hip-hops meest invloedrijke artiesten, werd dodelijk neergeschoten op 13 september 1996, in welke stad?"
        },
        options: [
          { en: "Los Angeles, California", es: "Los Ángeles, California", de: "Los Angeles, Kalifornien", nl: "Los Angeles, Californië" },
          { en: "Las Vegas, Nevada", es: "Las Vegas, Nevada", de: "Las Vegas, Nevada", nl: "Las Vegas, Nevada" },
          { en: "New York City, New York", es: "Nueva York, Nueva York", de: "New York City, New York", nl: "New York City, New York" },
          { en: "Atlanta, Georgia", es: "Atlanta, Georgia", de: "Atlanta, Georgia", nl: "Atlanta, Georgia" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Tupac Shakur was shot multiple times in a drive-by shooting in Las Vegas on September 7, 1996, and died six days later on September 13 at age 25. He was leaving a Mike Tyson boxing match when the shooting occurred. The murder remains officially unsolved, though numerous theories exist. Tupac was one of the best-selling music artists of all time, with over 75 million records sold. His socially conscious lyrics addressed poverty, violence, and racial inequality. He also acted in several films. His death came during the East Coast-West Coast hip-hop rivalry. Tupac's influence on music and culture continues decades after his death.",
          es: "Tupac Shakur recibió múltiples disparos en un tiroteo desde un auto en Las Vegas el 7 de septiembre de 1996 y murió seis días después el 13 de septiembre a los 25 años. Salía de una pelea de boxeo de Mike Tyson cuando ocurrió el tiroteo. El asesinato permanece oficialmente sin resolver, aunque existen numerosas teorías. Tupac fue uno de los artistas musicales más vendidos de todos los tiempos, con más de 75 millones de discos vendidos. Sus letras socialmente conscientes abordaban la pobreza, la violencia y la desigualdad racial. También actuó en varias películas. Su muerte llegó durante la rivalidad hip-hop Costa Este-Costa Oeste. La influencia de Tupac en la música y la cultura continúa décadas después de su muerte.",
          de: "Tupac Shakur wurde am 7. September 1996 bei einer Schießerei in Las Vegas mehrmals getroffen und starb sechs Tage später am 13. September im Alter von 25 Jahren. Er verließ gerade einen Boxkampf von Mike Tyson, als die Schießerei stattfand. Der Mord ist offiziell ungelöst, obwohl zahlreiche Theorien existieren. Tupac war einer der meistverkauften Musikkünstler aller Zeiten mit über 75 Millionen verkauften Platten. Seine sozial bewussten Texte thematisierten Armut, Gewalt und Rassenungleichheit. Er spielte auch in mehreren Filmen. Sein Tod ereignete sich während der Ostküste-Westküste-Hip-Hop-Rivalität. Tupacs Einfluss auf Musik und Kultur hält Jahrzehnte nach seinem Tod an.",
          nl: "Tupac Shakur werd meerdere keren neergeschoten in een drive-by-schietpartij in Las Vegas op 7 september 1996 en stierf zes dagen later op 13 september op 25-jarige leeftijd. Hij verliet een bokswedstrijd van Mike Tyson toen de schietpartij plaatsvond. De moord blijft officieel onopgelost, hoewel er talrijke theorieën bestaan. Tupac was een van de best verkopende muziekartiesten aller tijden, met meer dan 75 miljoen verkochte platen. Zijn sociaal bewuste teksten gingen over armoede, geweld en raciale ongelijkheid. Hij speelde ook in verschillende films. Zijn dood vond plaats tijdens de Oostkust-Westkust hip-hop rivaliteit. Tupacs invloed op muziek en cultuur gaat decennia na zijn dood door."
        }
      },
      {
        question: {
          en: "At which famous location was the Oslo Accords signing ceremony held?",
          es: "¿En qué lugar famoso se llevó a cabo la ceremonia de firma de los Acuerdos de Oslo?",
          de: "An welchem berühmten Ort fand die Unterzeichnungszeremonie der Oslo-Abkommen statt?",
          nl: "Op welke beroemde locatie vond de ondertekeningsceremonie van de Oslo-akkoorden plaats?"
        },
        options: [
          { en: "United Nations Headquarters", es: "Sede de las Naciones Unidas", de: "Hauptquartier der Vereinten Nationen", nl: "Hoofdkwartier van de Verenigde Naties" },
          { en: "The White House", es: "La Casa Blanca", de: "Das Weiße Haus", nl: "Het Witte Huis" },
          { en: "Oslo City Hall", es: "Ayuntamiento de Oslo", de: "Osloer Rathaus", nl: "Stadhuis van Oslo" },
          { en: "Camp David", es: "Camp David", de: "Camp David", nl: "Camp David" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Oslo Accords signing ceremony took place on the White House South Lawn in Washington, D.C., with President Bill Clinton hosting. The actual negotiations had been conducted in secret in Oslo, Norway, hence the name 'Oslo Accords.' The public ceremony was a historic moment broadcast worldwide. The image of Rabin and Arafat's reluctant handshake, with Clinton between them, became iconic. The accords were actually called the Declaration of Principles on Interim Self-Government Arrangements. For their peace efforts, Rabin, Arafat, and Israeli Foreign Minister Shimon Peres were awarded the 1994 Nobel Peace Prize.",
          es: "La ceremonia de firma de los Acuerdos de Oslo tuvo lugar en el jardín sur de la Casa Blanca en Washington, D.C., con el presidente Bill Clinton como anfitrión. Las negociaciones reales se habían llevado a cabo en secreto en Oslo, Noruega, de ahí el nombre 'Acuerdos de Oslo'. La ceremonia pública fue un momento histórico transmitido en todo el mundo. La imagen del apretón de manos reacio de Rabin y Arafat, con Clinton entre ellos, se volvió icónica. Los acuerdos en realidad se llamaban Declaración de Principios sobre Acuerdos de Autogobierno Provisional. Por sus esfuerzos de paz, Rabin, Arafat y el Ministro de Relaciones Exteriores israelí Shimon Peres recibieron el Premio Nobel de la Paz de 1994.",
          de: "Die Unterzeichnungszeremonie der Oslo-Abkommen fand auf dem Südrasen des Weißen Hauses in Washington, D.C., statt, wobei Präsident Bill Clinton Gastgeber war. Die tatsächlichen Verhandlungen waren geheim in Oslo, Norwegen, geführt worden, daher der Name 'Oslo-Abkommen'. Die öffentliche Zeremonie war ein historischer Moment, der weltweit übertragen wurde. Das Bild des zögerlichen Händedrucks zwischen Rabin und Arafat, mit Clinton zwischen ihnen, wurde ikonisch. Die Abkommen hießen eigentlich Prinzipienerklärung über Übergangsregelungen zur Selbstverwaltung. Für ihre Friedensbemühungen erhielten Rabin, Arafat und der israelische Außenminister Shimon Peres 1994 den Friedensnobelpreis.",
          nl: "De ondertekeningsceremonie van de Oslo-akkoorden vond plaats op het zuidelijke gazon van het Witte Huis in Washington, D.C., met president Bill Clinton als gastheer. De werkelijke onderhandelingen waren in het geheim gevoerd in Oslo, Noorwegen, vandaar de naam 'Oslo-akkoorden'. De openbare ceremonie was een historisch moment dat wereldwijd werd uitgezonden. Het beeld van de aarzelende handdruk van Rabin en Arafat, met Clinton tussen hen in, werd iconisch. De akkoorden heetten eigenlijk de Verklaring van Principes over Interim Zelfbestuursregelingen. Voor hun vredesinspanningen ontvingen Rabin, Arafat en de Israëlische minister van Buitenlandse Zaken Shimon Peres de Nobelprijs voor de Vrede van 1994."
        }
      },
      {
        question: {
          en: "Which of these is NOT a book written by Roald Dahl?",
          es: "¿Cuál de estos NO es un libro escrito por Roald Dahl?",
          de: "Welches davon ist KEIN von Roald Dahl geschriebenes Buch?",
          nl: "Welke van deze is GEEN boek geschreven door Roald Dahl?"
        },
        options: [
          { en: "The BFG", es: "El gran gigante bonachón", de: "Sophiechen und der Riese", nl: "De GVR" },
          { en: "The Giving Tree", es: "El árbol generoso", de: "Der gebende Baum", nl: "De gulle boom" },
          { en: "Matilda", es: "Matilda", de: "Matilda", nl: "Matilda" },
          { en: "The Twits", es: "Los Cretinos", de: "Die Zwicks", nl: "De Griezels" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'The Giving Tree' was written by Shel Silverstein, not Roald Dahl. Dahl did write 'The BFG' (Big Friendly Giant), 'Matilda,' and 'The Twits,' among many other beloved children's books. Dahl's writing style was distinctive, often featuring dark humor, unexpected plot twists, and child characters who outwit terrible adults. His books frequently included themes of justice, with good children rewarded and nasty adults punished. Before his writing career, Dahl worked for Shell Oil and served as an RAF fighter pilot in World War II. He died in 1990, but his books remain bestsellers and have been translated into 63 languages.",
          es: "'El árbol generoso' fue escrito por Shel Silverstein, no por Roald Dahl. Dahl sí escribió 'El gran gigante bonachón', 'Matilda' y 'Los Cretinos', entre muchos otros libros infantiles queridos. El estilo de escritura de Dahl era distintivo, a menudo presentando humor negro, giros inesperados de trama y personajes infantiles que superan en astucia a adultos terribles. Sus libros incluían frecuentemente temas de justicia, con niños buenos recompensados y adultos desagradables castigados. Antes de su carrera como escritor, Dahl trabajó para Shell Oil y sirvió como piloto de combate de la RAF en la Segunda Guerra Mundial. Murió en 1990, pero sus libros siguen siendo bestsellers y han sido traducidos a 63 idiomas.",
          de: "'Der gebende Baum' wurde von Shel Silverstein geschrieben, nicht von Roald Dahl. Dahl schrieb 'Sophiechen und der Riese', 'Matilda' und 'Die Zwicks', neben vielen anderen beliebten Kinderbüchern. Dahls Schreibstil war unverwechselbar und enthielt oft schwarzen Humor, unerwartete Handlungswendungen und kindliche Charaktere, die schreckliche Erwachsene überlisten. Seine Bücher enthielten häufig Themen der Gerechtigkeit, wobei gute Kinder belohnt und böse Erwachsene bestraft wurden. Vor seiner Schriftstellerkarriere arbeitete Dahl für Shell Oil und diente als RAF-Kampfpilot im Zweiten Weltkrieg. Er starb 1990, aber seine Bücher bleiben Bestseller und wurden in 63 Sprachen übersetzt.",
          nl: "'De gulle boom' werd geschreven door Shel Silverstein, niet door Roald Dahl. Dahl schreef wel 'De GVR' (Grote Vriendelijke Reus), 'Matilda' en 'De Griezels', naast vele andere geliefde kinderboeken. Dahls schrijfstijl was onderscheidend en bevatte vaak zwarte humor, onverwachte plotwendingen en kindpersonages die verschrikkelijke volwassenen te slim af waren. Zijn boeken bevatten vaak thema's van gerechtigheid, waarbij goede kinderen werden beloond en nare volwassenen werden gestraft. Voor zijn schrijverscarrière werkte Dahl voor Shell Oil en diende als RAF-gevechtspiloot in de Tweede Wereldoorlog. Hij stierf in 1990, maar zijn boeken blijven bestsellers en zijn vertaald in 63 talen."
        }
      }
    ],

    // Day 14 - September 14th: Star-Spangled Banner written (1814), Princess Grace of Monaco dies (1982), Ivan Pavlov born (1849)
    day14: [
      {
        question: {
          en: "Francis Scott Key wrote 'The Star-Spangled Banner' on September 14, 1814, after witnessing the bombardment of which fort?",
          es: "Francis Scott Key escribió 'The Star-Spangled Banner' el 14 de septiembre de 1814, después de presenciar el bombardeo de qué fuerte?",
          de: "Francis Scott Key schrieb 'The Star-Spangled Banner' am 14. September 1814, nachdem er die Bombardierung welcher Festung miterlebt hatte?",
          nl: "Francis Scott Key schreef 'The Star-Spangled Banner' op 14 september 1814, na het getuige zijn van het bombardement van welk fort?"
        },
        options: [
          { en: "Fort Sumter", es: "Fort Sumter", de: "Fort Sumter", nl: "Fort Sumter" },
          { en: "Fort McHenry", es: "Fort McHenry", de: "Fort McHenry", nl: "Fort McHenry" },
          { en: "Fort Ticonderoga", es: "Fort Ticonderoga", de: "Fort Ticonderoga", nl: "Fort Ticonderoga" },
          { en: "Fort Knox", es: "Fort Knox", de: "Fort Knox", nl: "Fort Knox" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Francis Scott Key wrote 'The Star-Spangled Banner' after watching the British bombardment of Fort McHenry in Baltimore during the War of 1812. Detained on a British ship during the 25-hour attack, Key was inspired by seeing the American flag still flying over the fort at dawn. He wrote the poem 'Defence of Fort McHenry,' which was set to music and eventually became the U.S. national anthem in 1931. The flag that inspired Key had 15 stars and 15 stripes and measured 30 by 42 feet. It's now preserved at the Smithsonian's National Museum of American History. The anthem's lyrics capture a pivotal moment when the young nation's survival was uncertain.",
          es: "Francis Scott Key escribió 'The Star-Spangled Banner' después de observar el bombardeo británico de Fort McHenry en Baltimore durante la Guerra de 1812. Detenido en un barco británico durante el ataque de 25 horas, Key se inspiró al ver la bandera estadounidense todavía ondeando sobre el fuerte al amanecer. Escribió el poema 'Defensa de Fort McHenry', que fue puesto en música y finalmente se convirtió en el himno nacional de EE.UU. en 1931. La bandera que inspiró a Key tenía 15 estrellas y 15 franjas y medía 30 por 42 pies. Ahora está conservada en el Museo Nacional de Historia Estadounidense del Smithsonian. La letra del himno captura un momento crucial cuando la supervivencia de la joven nación era incierta.",
          de: "Francis Scott Key schrieb 'The Star-Spangled Banner', nachdem er die britische Bombardierung von Fort McHenry in Baltimore während des Krieges von 1812 beobachtet hatte. Während des 25-stündigen Angriffs auf einem britischen Schiff festgehalten, wurde Key inspiriert, als er bei Tagesanbruch die amerikanische Flagge immer noch über der Festung wehen sah. Er schrieb das Gedicht 'Verteidigung von Fort McHenry', das vertont wurde und schließlich 1931 zur US-Nationalhymne wurde. Die Flagge, die Key inspirierte, hatte 15 Sterne und 15 Streifen und maß 30 mal 42 Fuß. Sie wird jetzt im Smithsonians National Museum of American History aufbewahrt. Der Text der Hymne fängt einen entscheidenden Moment ein, als das Überleben der jungen Nation ungewiss war.",
          nl: "Francis Scott Key schreef 'The Star-Spangled Banner' na het observeren van het Britse bombardement van Fort McHenry in Baltimore tijdens de Oorlog van 1812. Vastgehouden op een Brits schip tijdens de 25 uur durende aanval, werd Key geïnspireerd door het zien van de Amerikaanse vlag nog steeds wapperen boven het fort bij dageraad. Hij schreef het gedicht 'Verdediging van Fort McHenry', dat op muziek werd gezet en uiteindelijk in 1931 het Amerikaanse volkslied werd. De vlag die Key inspireerde had 15 sterren en 15 strepen en mat 30 bij 42 voet. Het wordt nu bewaard in het Smithsonian's National Museum of American History. De tekst van het volkslied vangt een cruciaal moment toen het voortbestaan van de jonge natie onzeker was."
        }
      },
      {
        question: {
          en: "Princess Grace of Monaco, who died on September 14, 1982, was a famous actress before marrying Prince Rainier III. What was her birth name?",
          es: "La Princesa Grace de Mónaco, que murió el 14 de septiembre de 1982, era una actriz famosa antes de casarse con el Príncipe Rainiero III. ¿Cuál era su nombre de nacimiento?",
          de: "Prinzessin Grace von Monaco, die am 14. September 1982 starb, war eine berühmte Schauspielerin, bevor sie Prinz Rainier III. heiratete. Was war ihr Geburtsname?",
          nl: "Prinses Grace van Monaco, die stierf op 14 september 1982, was een beroemde actrice voordat ze trouwde met Prins Rainier III. Wat was haar geboortenaam?"
        },
        options: [
          { en: "Grace Garland", es: "Grace Garland", de: "Grace Garland", nl: "Grace Garland" },
          { en: "Grace Kelly", es: "Grace Kelly", de: "Grace Kelly", nl: "Grace Kelly" },
          { en: "Grace Monroe", es: "Grace Monroe", de: "Grace Monroe", nl: "Grace Monroe" },
          { en: "Grace Hepburn", es: "Grace Hepburn", de: "Grace Hepburn", nl: "Grace Hepburn" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Princess Grace was born Grace Kelly in Philadelphia. She became a Hollywood star in the 1950s, winning an Academy Award for Best Actress for 'The Country Girl' (1954). She starred in three Alfred Hitchcock films: 'Dial M for Murder,' 'Rear Window,' and 'To Catch a Thief.' In 1956, she married Prince Rainier III and retired from acting at age 26. As Princess of Monaco, she was known for her elegance and charitable work. She died from injuries sustained in a car accident on a winding mountain road. The crash may have been caused by a stroke. She was 52 years old.",
          es: "La Princesa Grace nació como Grace Kelly en Filadelfia. Se convirtió en una estrella de Hollywood en la década de 1950, ganando un Premio de la Academia a Mejor Actriz por 'The Country Girl' (1954). Protagonizó tres películas de Alfred Hitchcock: 'Dial M for Murder', 'Rear Window' y 'To Catch a Thief'. En 1956, se casó con el Príncipe Rainiero III y se retiró de la actuación a los 26 años. Como Princesa de Mónaco, era conocida por su elegancia y trabajo caritativo. Murió por lesiones sufridas en un accidente automovilístico en una sinuosa carretera de montaña. El accidente puede haber sido causado por un derrame cerebral. Tenía 52 años.",
          de: "Prinzessin Grace wurde als Grace Kelly in Philadelphia geboren. Sie wurde in den 1950er Jahren ein Hollywoodstar und gewann einen Oscar für die beste Hauptdarstellerin für 'Ein Mädchen vom Lande' (1954). Sie spielte in drei Alfred-Hitchcock-Filmen: 'Bei Anruf Mord', 'Das Fenster zum Hof' und 'Über den Dächern von Nizza'. 1956 heiratete sie Prinz Rainier III. und zog sich im Alter von 26 Jahren aus der Schauspielerei zurück. Als Prinzessin von Monaco war sie für ihre Eleganz und wohltätige Arbeit bekannt. Sie starb an Verletzungen, die sie bei einem Autounfall auf einer kurvenreichen Bergstraße erlitt. Der Unfall könnte durch einen Schlaganfall verursacht worden sein. Sie war 52 Jahre alt.",
          nl: "Prinses Grace werd geboren als Grace Kelly in Philadelphia. Ze werd een Hollywoodster in de jaren 1950 en won een Academy Award voor Beste Actrice voor 'The Country Girl' (1954). Ze speelde in drie Alfred Hitchcock-films: 'Dial M for Murder', 'Rear Window' en 'To Catch a Thief'. In 1956 trouwde ze met Prins Rainier III en stopte met acteren op 26-jarige leeftijd. Als Prinses van Monaco stond ze bekend om haar elegantie en liefdadigheidswerk. Ze stierf aan verwondingen opgelopen bij een auto-ongeluk op een kronkelende bergweg. Het ongeluk kan veroorzaakt zijn door een beroerte. Ze was 52 jaar oud."
        }
      },
      {
        question: {
          en: "Ivan Pavlov, born September 14, 1849, won the Nobel Prize for his research on what bodily system?",
          es: "Ivan Pavlov, nacido el 14 de septiembre de 1849, ganó el Premio Nobel por su investigación sobre qué sistema corporal?",
          de: "Ivan Pavlov, geboren am 14. September 1849, gewann den Nobelpreis für seine Forschung über welches Körpersystem?",
          nl: "Ivan Pavlov, geboren op 14 september 1849, won de Nobelprijs voor zijn onderzoek naar welk lichaamssysteem?"
        },
        options: [
          { en: "Nervous system", es: "Sistema nervioso", de: "Nervensystem", nl: "Zenuwstelsel" },
          { en: "Digestive system", es: "Sistema digestivo", de: "Verdauungssystem", nl: "Spijsverteringsstelsel" },
          { en: "Circulatory system", es: "Sistema circulatorio", de: "Kreislaufsystem", nl: "Bloedsomloopstelsel" },
          { en: "Respiratory system", es: "Sistema respiratorio", de: "Atmungssystem", nl: "Ademhalingsstelsel" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ivan Pavlov won the 1904 Nobel Prize in Physiology or Medicine for his work on the digestive system. However, he is most famous for his research on conditioned reflexes, demonstrated through his experiments with dogs. Pavlov showed that dogs could be trained to salivate at the sound of a bell if the bell was repeatedly paired with food. This discovery of 'classical conditioning' became fundamental to behavioral psychology. Pavlov's work influenced psychology, education, advertising, and animal training. He continued researching until his death in 1936 at age 86. His legacy includes groundbreaking contributions to understanding learning and behavior.",
          es: "Ivan Pavlov ganó el Premio Nobel de Fisiología o Medicina de 1904 por su trabajo sobre el sistema digestivo. Sin embargo, es más famoso por su investigación sobre reflejos condicionados, demostrada a través de sus experimentos con perros. Pavlov mostró que los perros podían ser entrenados para salivar al sonido de una campana si la campana se emparejaba repetidamente con comida. Este descubrimiento del 'condicionamiento clásico' se volvió fundamental para la psicología conductual. El trabajo de Pavlov influyó en la psicología, la educación, la publicidad y el entrenamiento animal. Continuó investigando hasta su muerte en 1936 a los 86 años. Su legado incluye contribuciones revolucionarias para comprender el aprendizaje y el comportamiento.",
          de: "Ivan Pavlov gewann 1904 den Nobelpreis für Physiologie oder Medizin für seine Arbeit über das Verdauungssystem. Er ist jedoch am berühmtesten für seine Forschung über konditionierte Reflexe, die er durch seine Experimente mit Hunden demonstrierte. Pavlov zeigte, dass Hunde darauf trainiert werden konnten, beim Klang einer Glocke zu sabbern, wenn die Glocke wiederholt mit Futter gepaart wurde. Diese Entdeckung der 'klassischen Konditionierung' wurde grundlegend für die Verhaltenspsychologie. Pavlovs Arbeit beeinflusste Psychologie, Bildung, Werbung und Tiertraining. Er forschte bis zu seinem Tod 1936 im Alter von 86 Jahren weiter. Sein Vermächtnis umfasst bahnbrechende Beiträge zum Verständnis von Lernen und Verhalten.",
          nl: "Ivan Pavlov won in 1904 de Nobelprijs voor Fysiologie of Geneeskunde voor zijn werk aan het spijsverteringsstelsel. Hij is echter het meest beroemd om zijn onderzoek naar geconditioneerde reflexen, aangetoond door zijn experimenten met honden. Pavlov toonde aan dat honden konden worden getraind om te kwijlen bij het geluid van een bel als de bel herhaaldelijk werd gekoppeld aan voedsel. Deze ontdekking van 'klassieke conditionering' werd fundamenteel voor de gedragspsychologie. Pavlovs werk beïnvloedde psychologie, onderwijs, reclame en dierentraining. Hij bleef onderzoek doen tot zijn dood in 1936 op 86-jarige leeftijd. Zijn nalatenschap omvat baanbrekende bijdragen aan het begrijpen van leren en gedrag."
        }
      },
      {
        question: {
          en: "What phenomenon did Ivan Pavlov discover through his famous dog experiments?",
          es: "¿Qué fenómeno descubrió Ivan Pavlov a través de sus famosos experimentos con perros?",
          de: "Welches Phänomen entdeckte Ivan Pavlov durch seine berühmten Hundeexperimente?",
          nl: "Welk fenomeen ontdekte Ivan Pavlov door zijn beroemde hondenexperimenten?"
        },
        options: [
          { en: "Classical conditioning", es: "Condicionamiento clásico", de: "Klassische Konditionierung", nl: "Klassieke conditionering" },
          { en: "Social learning", es: "Aprendizaje social", de: "Soziales Lernen", nl: "Sociaal leren" },
          { en: "Operant conditioning", es: "Condicionamiento operante", de: "Operante Konditionierung", nl: "Operante conditionering" },
          { en: "Cognitive dissonance", es: "Disonancia cognitiva", de: "Kognitive Dissonanz", nl: "Cognitieve dissonantie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Pavlov discovered classical conditioning (also called Pavlovian conditioning), where a neutral stimulus becomes associated with a meaningful stimulus to produce a learned response. In his experiments, dogs naturally salivated when presented with food (unconditioned response). After repeatedly ringing a bell before feeding, the dogs learned to salivate just from hearing the bell (conditioned response). This groundbreaking research showed that behaviors could be learned through association. Classical conditioning explains many automatic responses in humans and animals, from phobias to advertising effectiveness. Pavlov's work laid the foundation for behaviorism and continues to influence modern psychology, education, and therapy.",
          es: "Pavlov descubrió el condicionamiento clásico (también llamado condicionamiento pavloviano), donde un estímulo neutral se asocia con un estímulo significativo para producir una respuesta aprendida. En sus experimentos, los perros salivaban naturalmente cuando se les presentaba comida (respuesta incondicionada). Después de tocar repetidamente una campana antes de alimentarlos, los perros aprendieron a salivar solo por escuchar la campana (respuesta condicionada). Esta investigación revolucionaria mostró que los comportamientos podían aprenderse a través de la asociación. El condicionamiento clásico explica muchas respuestas automáticas en humanos y animales, desde fobias hasta la efectividad de la publicidad. El trabajo de Pavlov sentó las bases del conductismo y continúa influyendo en la psicología, educación y terapia modernas.",
          de: "Pavlov entdeckte die klassische Konditionierung (auch pavlovsche Konditionierung genannt), bei der ein neutraler Reiz mit einem bedeutungsvollen Reiz verbunden wird, um eine erlernte Reaktion zu erzeugen. In seinen Experimenten sabbelten Hunde natürlich, wenn ihnen Futter präsentiert wurde (unkonditionierte Reaktion). Nach wiederholtem Läuten einer Glocke vor dem Füttern lernten die Hunde, allein durch das Hören der Glocke zu sabbeln (konditionierte Reaktion). Diese bahnbrechende Forschung zeigte, dass Verhaltensweisen durch Assoziation erlernt werden können. Klassische Konditionierung erklärt viele automatische Reaktionen bei Menschen und Tieren, von Phobien bis zur Werbewirksamkeit. Pavlovs Arbeit legte den Grundstein für den Behaviorismus und beeinflusst weiterhin moderne Psychologie, Bildung und Therapie.",
          nl: "Pavlov ontdekte klassieke conditionering (ook wel Pavloviaanse conditionering genoemd), waarbij een neutrale stimulus wordt geassocieerd met een betekenisvolle stimulus om een aangeleerde reactie te produceren. In zijn experimenten kwijlden honden natuurlijk wanneer ze voedsel kregen voorgeschoteld (ongeconditioneerde reactie). Na herhaaldelijk een bel te luiden voor het voeren, leerden de honden te kwijlen alleen van het horen van de bel (geconditioneerde reactie). Dit baanbrekend onderzoek toonde aan dat gedrag kon worden aangeleerd door associatie. Klassieke conditionering verklaart veel automatische reacties bij mensen en dieren, van fobieën tot reclame-effectiviteit. Pavlovs werk legde de basis voor behaviorisme en blijft moderne psychologie, onderwijs en therapie beïnvloeden."
        }
      },
      {
        question: {
          en: "In which Alfred Hitchcock film did Grace Kelly NOT star?",
          es: "¿En qué película de Alfred Hitchcock NO protagonizó Grace Kelly?",
          de: "In welchem Alfred-Hitchcock-Film spielte Grace Kelly NICHT mit?",
          nl: "In welke Alfred Hitchcock-film speelde Grace Kelly NIET?"
        },
        options: [
          { en: "Vertigo", es: "Vértigo", de: "Vertigo", nl: "Vertigo" },
          { en: "To Catch a Thief", es: "Atrapa a un ladrón", de: "Über den Dächern von Nizza", nl: "To Catch a Thief" },
          { en: "Rear Window", es: "La ventana indiscreta", de: "Das Fenster zum Hof", nl: "Rear Window" },
          { en: "Dial M for Murder", es: "La llamada fatal", de: "Bei Anruf Mord", nl: "Dial M for Murder" }
        ],
        correctIndex: 0,
        explanation: {
          en: "'Vertigo' (1958) starred Kim Novak and James Stewart, not Grace Kelly. Kelly appeared in three Hitchcock films: 'Dial M for Murder' (1954), where she played a woman targeted for murder by her husband; 'Rear Window' (1954), as the girlfriend of a photographer who witnesses a crime; and 'To Catch a Thief' (1955), as an heiress who falls for a reformed jewel thief. Hitchcock considered Kelly his ideal leading lady, embodying his preference for elegant, cool blondes. He reportedly was disappointed when she retired from acting to become Princess of Monaco. Kelly's Hitchcock films remain classics, showcasing her beauty, talent, and sophisticated screen presence.",
          es: "'Vértigo' (1958) protagonizada por Kim Novak y James Stewart, no Grace Kelly. Kelly apareció en tres películas de Hitchcock: 'La llamada fatal' (1954), donde interpretó a una mujer objetivo de asesinato por parte de su esposo; 'La ventana indiscreta' (1954), como la novia de un fotógrafo que es testigo de un crimen; y 'Atrapa a un ladrón' (1955), como una heredera que se enamora de un ladrón de joyas reformado. Hitchcock consideraba a Kelly su actriz principal ideal, encarnando su preferencia por rubias elegantes y frías. Según informes, se sintió decepcionado cuando se retiró de la actuación para convertirse en Princesa de Mónaco. Las películas de Kelly con Hitchcock siguen siendo clásicas, mostrando su belleza, talento y sofisticada presencia en pantalla.",
          de: "'Vertigo' (1958) spielte Kim Novak und James Stewart, nicht Grace Kelly. Kelly trat in drei Hitchcock-Filmen auf: 'Bei Anruf Mord' (1954), wo sie eine Frau spielte, die von ihrem Ehemann ermordet werden soll; 'Das Fenster zum Hof' (1954), als Freundin eines Fotografen, der Zeuge eines Verbrechens wird; und 'Über den Dächern von Nizza' (1955), als Erbin, die sich in einen geläuterten Juwelendieb verliebt. Hitchcock betrachtete Kelly als seine ideale Hauptdarstellerin und verkörperte seine Vorliebe für elegante, kühle Blondinen. Er war Berichten zufolge enttäuscht, als sie sich aus der Schauspielerei zurückzog, um Prinzessin von Monaco zu werden. Kellys Hitchcock-Filme bleiben Klassiker und zeigen ihre Schönheit, ihr Talent und ihre raffinierte Leinwandpräsenz.",
          nl: "'Vertigo' (1958) speelde Kim Novak en James Stewart, niet Grace Kelly. Kelly verscheen in drie Hitchcock-films: 'Dial M for Murder' (1954), waar ze een vrouw speelde die door haar man vermoord zou worden; 'Rear Window' (1954), als de vriendin van een fotograaf die getuige is van een misdaad; en 'To Catch a Thief' (1955), als een erfgename die valt voor een hervormde juwelenf. Hitchcock beschouwde Kelly als zijn ideale hoofdrolspeelster, die zijn voorkeur voor elegante, koele blondines belichaamde. Hij was naar verluidt teleurgesteld toen ze stopte met acteren om Prinses van Monaco te worden. Kelly's Hitchcock-films blijven klassiekers en tonen haar schoonheid, talent en verfijnde schermpresentie."
        }
      }
    ],

    // Day 15 - September 15th: Battle of Britain Day (1940), Lehman Brothers collapses (2008), Agatha Christie born (1890)
    day15: [
      {
        question: {
          en: "Battle of Britain Day, commemorated on September 15, 1940, marked a turning point in which conflict?",
          es: "El Día de la Batalla de Inglaterra, conmemorado el 15 de septiembre de 1940, marcó un punto de inflexión en qué conflicto?",
          de: "Der Battle of Britain Day, der am 15. September 1940 begangen wird, markierte einen Wendepunkt in welchem Konflikt?",
          nl: "Battle of Britain Day, herdacht op 15 september 1940, markeerde een keerpunt in welk conflict?"
        },
        options: [
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
          { en: "World War II", es: "Segunda Guerra Mundial", de: "Zweiter Weltkrieg", nl: "Tweede Wereldoorlog" },
          { en: "The Falklands War", es: "Guerra de las Malvinas", de: "Falklandkrieg", nl: "Falklandoorlog" },
          { en: "The Hundred Years' War", es: "Guerra de los Cien Años", de: "Hundertjähriger Krieg", nl: "Honderdjarige Oorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "September 15, 1940, was the climactic day of the Battle of Britain during World War II. The Royal Air Force repelled two massive German Luftwaffe bombing raids on London, shooting down many aircraft and forcing Germany to abandon plans to invade Britain (Operation Sea Lion). The RAF's successful defense prevented Nazi occupation and proved that Germany could be defeated. Winston Churchill famously said of the RAF pilots: 'Never in the field of human conflict was so much owed by so many to so few.' The battle was fought entirely in the air from July to October 1940. Britain's victory was crucial to maintaining Allied resistance against Nazi Germany.",
          es: "El 15 de septiembre de 1940 fue el día culminante de la Batalla de Inglaterra durante la Segunda Guerra Mundial. La Real Fuerza Aérea repelió dos ataques masivos de bombardeo de la Luftwaffe alemana sobre Londres, derribando muchos aviones y obligando a Alemania a abandonar los planes de invadir Gran Bretaña (Operación León Marino). La exitosa defensa de la RAF evitó la ocupación nazi y demostró que Alemania podía ser derrotada. Winston Churchill dijo famosamente de los pilotos de la RAF: 'Nunca en el campo del conflicto humano tantos debieron tanto a tan pocos'. La batalla se libró enteramente en el aire de julio a octubre de 1940. La victoria de Gran Bretaña fue crucial para mantener la resistencia aliada contra la Alemania nazi.",
          de: "Der 15. September 1940 war der Höhepunkt der Luftschlacht um England während des Zweiten Weltkriegs. Die Royal Air Force wehrte zwei massive Bombenangriffe der deutschen Luftwaffe auf London ab, schoss viele Flugzeuge ab und zwang Deutschland, Pläne zur Invasion Großbritanniens aufzugeben (Unternehmen Seelöwe). Die erfolgreiche Verteidigung der RAF verhinderte die Nazi-Besatzung und bewies, dass Deutschland besiegt werden konnte. Winston Churchill sagte berühmt über die RAF-Piloten: 'Niemals im Feld menschlicher Konflikte schuldeten so viele so wenigen so viel.' Die Schlacht wurde von Juli bis Oktober 1940 ausschließlich in der Luft ausgetragen. Großbritanniens Sieg war entscheidend für die Aufrechterhaltung des alliierten Widerstands gegen Nazi-Deutschland.",
          nl: "15 september 1940 was de climax van de Slag om Engeland tijdens de Tweede Wereldoorlog. De Royal Air Force sloeg twee massale Duitse Luftwaffe-bombardementen op Londen af, schoot veel vliegtuigen neer en dwong Duitsland plannen om Groot-Brittannië binnen te vallen (Operatie Zeeleeuw) op te geven. De succesvolle verdediging van de RAF voorkwam nazi-bezetting en bewees dat Duitsland verslagen kon worden. Winston Churchill zei beroemd over de RAF-piloten: 'Nooit in het veld van menselijk conflict was zoveel verschuldigd door zovelen aan zo weinigen.' De slag werd volledig in de lucht uitgevochten van juli tot oktober 1940. Groot-Brittannië's overwinning was cruciaal voor het handhaven van geallieerd verzet tegen nazi-Duitsland."
        }
      },
      {
        question: {
          en: "The investment bank Lehman Brothers collapsed on September 15, 2008, triggering what major economic event?",
          es: "El banco de inversión Lehman Brothers colapsó el 15 de septiembre de 2008, desencadenando qué evento económico importante?",
          de: "Die Investmentbank Lehman Brothers brach am 15. September 2008 zusammen und löste welches wichtige wirtschaftliche Ereignis aus?",
          nl: "De investeringsbank Lehman Brothers stortte in op 15 september 2008, wat welke belangrijke economische gebeurtenis veroorzaakte?"
        },
        options: [
          { en: "The Great Depression", es: "La Gran Depresión", de: "Die Große Depression", nl: "De Grote Depressie" },
          { en: "The 2008 Global Financial Crisis", es: "La Crisis Financiera Global de 2008", de: "Die globale Finanzkrise 2008", nl: "De wereldwijde financiële crisis van 2008" },
          { en: "The Dot-com Bubble", es: "La burbuja de las puntocom", de: "Die Dotcom-Blase", nl: "De Dotcom-bubbel" },
          { en: "The Asian Financial Crisis", es: "La Crisis Financiera Asiática", de: "Die Asienkrise", nl: "De Aziatische financiële crisis" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Lehman Brothers' bankruptcy on September 15, 2008, was the largest in U.S. history ($613 billion in debt) and precipitated the 2008 Global Financial Crisis. The 158-year-old bank collapsed due to massive losses from subprime mortgage investments. Its failure sent shockwaves through global financial markets, causing credit to freeze and stock markets to plummet. Governments worldwide intervened with bailouts and stimulus packages. The crisis led to the Great Recession, with millions losing jobs and homes. It prompted major financial reforms including the Dodd-Frank Act. The collapse highlighted the dangers of excessive risk-taking, inadequate regulation, and 'too big to fail' institutions.",
          es: "La quiebra de Lehman Brothers el 15 de septiembre de 2008 fue la más grande en la historia de EE.UU. ($613 mil millones en deuda) y precipitó la Crisis Financiera Global de 2008. El banco de 158 años colapsó debido a pérdidas masivas de inversiones en hipotecas subprime. Su fracaso envió ondas de choque a través de los mercados financieros globales, causando que el crédito se congelara y los mercados de valores se desplomaran. Los gobiernos de todo el mundo intervinieron con rescates y paquetes de estímulo. La crisis llevó a la Gran Recesión, con millones perdiendo empleos y hogares. Provocó importantes reformas financieras incluida la Ley Dodd-Frank. El colapso destacó los peligros de tomar riesgos excesivos, regulación inadecuada e instituciones 'demasiado grandes para quebrar'.",
          de: "Die Insolvenz von Lehman Brothers am 15. September 2008 war die größte in der US-Geschichte (613 Milliarden Dollar Schulden) und löste die globale Finanzkrise 2008 aus. Die 158 Jahre alte Bank brach aufgrund massiver Verluste aus Subprime-Hypothekeninvestitionen zusammen. Ihr Scheitern schickte Schockwellen durch die globalen Finanzmärkte, ließ Kredite einfrieren und Aktienmärkte abstürzen. Regierungen weltweit griffen mit Rettungspaketen und Konjunkturprogrammen ein. Die Krise führte zur Großen Rezession, wobei Millionen Jobs und Häuser verloren. Sie veranlasste große Finanzreformen einschließlich des Dodd-Frank-Gesetzes. Der Zusammenbruch hob die Gefahren übermäßiger Risikobereitschaft, unzureichender Regulierung und 'zu groß zum Scheitern'-Institutionen hervor.",
          nl: "Het faillissement van Lehman Brothers op 15 september 2008 was het grootste in de Amerikaanse geschiedenis ($613 miljard schuld) en leidde tot de wereldwijde financiële crisis van 2008. De 158 jaar oude bank stortte in door massale verliezen uit subprime hypotheekinvesteringen. Het falen zond schokgolven door wereldwijde financiële markten, waardoor krediet bevroor en aandelenmarkten kelderden. Regeringen wereldwijd grepen in met reddingspakketten en stimuleringspakketten. De crisis leidde tot de Grote Recessie, waarbij miljoenen banen en huizen verloren gingen. Het leidde tot grote financiële hervormingen waaronder de Dodd-Frank Act. De ineenstorting benadrukte de gevaren van overmatig risico nemen, onvoldoende regulering en 'too big to fail' instellingen."
        }
      },
      {
        question: {
          en: "Agatha Christie, born September 15, 1890, created which famous Belgian detective character?",
          es: "Agatha Christie, nacida el 15 de septiembre de 1890, creó qué famoso personaje de detective belga?",
          de: "Agatha Christie, geboren am 15. September 1890, schuf welche berühmte belgische Detektivfigur?",
          nl: "Agatha Christie, geboren op 15 september 1890, creëerde welk beroemd Belgisch detectivekarakter?"
        },
        options: [
          { en: "Sherlock Holmes", es: "Sherlock Holmes", de: "Sherlock Holmes", nl: "Sherlock Holmes" },
          { en: "Hercule Poirot", es: "Hercule Poirot", de: "Hercule Poirot", nl: "Hercule Poirot" },
          { en: "Father Brown", es: "Padre Brown", de: "Pater Brown", nl: "Pater Brown" },
          { en: "Inspector Morse", es: "Inspector Morse", de: "Inspektor Morse", nl: "Inspecteur Morse" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Agatha Christie created Hercule Poirot, the meticulous Belgian detective who appeared in 33 novels and 51 short stories. Poirot first appeared in 'The Mysterious Affair at Styles' (1920) and last in 'Curtain' (1975). Known for his egg-shaped head, waxed mustache, and 'little grey cells,' Poirot solved cases through psychology and logic rather than physical evidence. Christie also created Miss Marple, another beloved detective. Christie is the best-selling novelist of all time, with over 2 billion books sold. Her play 'The Mousetrap' holds the record for longest initial run. She disappeared mysteriously for 11 days in 1926, generating massive publicity.",
          es: "Agatha Christie creó a Hercule Poirot, el meticuloso detective belga que apareció en 33 novelas y 51 cuentos cortos. Poirot apareció por primera vez en 'El misterioso caso de Styles' (1920) y por última vez en 'Telón' (1975). Conocido por su cabeza en forma de huevo, bigote encerado y 'pequeñas células grises', Poirot resolvía casos a través de la psicología y la lógica en lugar de evidencia física. Christie también creó a Miss Marple, otra detective querida. Christie es la novelista más vendida de todos los tiempos, con más de 2 mil millones de libros vendidos. Su obra 'La ratonera' tiene el récord de la ejecución inicial más larga. Desapareció misteriosamente durante 11 días en 1926, generando publicidad masiva.",
          de: "Agatha Christie schuf Hercule Poirot, den akribischen belgischen Detektiv, der in 33 Romanen und 51 Kurzgeschichten auftrat. Poirot erschien erstmals in 'Das fehlende Glied in der Kette' (1920) und zuletzt in 'Vorhang' (1975). Bekannt für seinen eiförmigen Kopf, gewachsten Schnurrbart und 'kleine graue Zellen', löste Poirot Fälle durch Psychologie und Logik statt physischer Beweise. Christie schuf auch Miss Marple, eine weitere beliebte Detektivin. Christie ist die meistverkaufte Romanautorin aller Zeiten mit über 2 Milliarden verkauften Büchern. Ihr Theaterstück 'Die Mausefalle' hält den Rekord für die längste Erstaufführung. Sie verschwand 1926 auf mysteriöse Weise für 11 Tage und erzeugte massive Publizität.",
          nl: "Agatha Christie creëerde Hercule Poirot, de nauwgezette Belgische detective die verscheen in 33 romans en 51 korte verhalen. Poirot verscheen voor het eerst in 'De mysterieuze zaak in Styles' (1920) en voor het laatst in 'Gordijn' (1975). Bekend om zijn eivormige hoofd, gewaxte snor en 'kleine grijze cellen', loste Poirot zaken op door psychologie en logica in plaats van fysiek bewijs. Christie creëerde ook Miss Marple, een andere geliefde detective. Christie is de best verkopende romanschrijver aller tijden, met meer dan 2 miljard verkochte boeken. Haar toneelstuk 'De Muizenval' heeft het record voor de langste eerste run. Ze verdween mysterieus voor 11 dagen in 1926, wat massale publiciteit genereerde."
        }
      },
      {
        question: {
          en: "How much debt did Lehman Brothers have when it filed for bankruptcy in 2008?",
          es: "¿Cuánta deuda tenía Lehman Brothers cuando se declaró en bancarrota en 2008?",
          de: "Wie viel Schulden hatte Lehman Brothers, als es 2008 Insolvenz anmeldete?",
          nl: "Hoeveel schuld had Lehman Brothers toen het in 2008 faillissement aanvroeg?"
        },
        options: [
          { en: "Approximately $150 billion", es: "Aproximadamente $150 mil millones", de: "Etwa 150 Milliarden Dollar", nl: "Ongeveer $150 miljard" },
          { en: "Approximately $300 billion", es: "Aproximadamente $300 mil millones", de: "Etwa 300 Milliarden Dollar", nl: "Ongeveer $300 miljard" },
          { en: "Approximately $613 billion", es: "Aproximadamente $613 mil millones", de: "Etwa 613 Milliarden Dollar", nl: "Ongeveer $613 miljard" },
          { en: "Approximately $1 trillion", es: "Aproximadamente $1 billón", de: "Etwa 1 Billion Dollar", nl: "Ongeveer $1 biljoen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Lehman Brothers filed for bankruptcy with approximately $613 billion in debt, making it the largest bankruptcy filing in U.S. history. The bank also had $639 billion in assets. Founded in 1850, Lehman had survived the Civil War, two World Wars, and the Great Depression, but couldn't survive the subprime mortgage crisis. Its collapse wiped out shareholders and sent global markets into panic. The bankruptcy filing was over 10 times larger than previous record-holder WorldCom. It took years to unwind the complex web of Lehman's financial obligations. The event became synonymous with the 2008 financial crisis and led to increased scrutiny of Wall Street practices.",
          es: "Lehman Brothers se declaró en bancarrota con aproximadamente $613 mil millones en deuda, convirtiéndola en la presentación de quiebra más grande en la historia de EE.UU. El banco también tenía $639 mil millones en activos. Fundado en 1850, Lehman había sobrevivido a la Guerra Civil, dos Guerras Mundiales y la Gran Depresión, pero no pudo sobrevivir a la crisis de las hipotecas subprime. Su colapso eliminó a los accionistas y envió a los mercados globales al pánico. La presentación de bancarrota fue más de 10 veces mayor que el anterior poseedor del récord WorldCom. Tomó años deshacer la compleja red de obligaciones financieras de Lehman. El evento se convirtió en sinónimo de la crisis financiera de 2008 y llevó a un mayor escrutinio de las prácticas de Wall Street.",
          de: "Lehman Brothers meldete Insolvenz mit etwa 613 Milliarden Dollar Schulden an, was es zur größten Insolvenzanmeldung in der US-Geschichte machte. Die Bank hatte auch 639 Milliarden Dollar an Vermögenswerten. Gegründet 1850, hatte Lehman den Bürgerkrieg, zwei Weltkriege und die Große Depression überlebt, konnte aber die Subprime-Hypothekenkrise nicht überstehen. Ihr Zusammenbruch vernichtete Aktionäre und schickte globale Märkte in Panik. Die Insolvenzanmeldung war über 10-mal größer als der vorherige Rekordhalter WorldCom. Es dauerte Jahre, das komplexe Netz von Lehmans finanziellen Verpflichtungen aufzulösen. Das Ereignis wurde zum Synonym für die Finanzkrise 2008 und führte zu verstärkter Überprüfung der Wall-Street-Praktiken.",
          nl: "Lehman Brothers vroeg faillissement aan met ongeveer $613 miljard aan schuld, waarmee het de grootste faillissementsaanvraag in de Amerikaanse geschiedenis werd. De bank had ook $639 miljard aan activa. Opgericht in 1850, had Lehman de Burgeroorlog, twee Wereldoorlogen en de Grote Depressie overleefd, maar kon de subprime hypotheekcrisis niet overleven. Het ineenstorten vernietigde aandeelhouders en stuurde wereldwijde markten in paniek. De faillissementsaanvraag was meer dan 10 keer groter dan de vorige recordhouder WorldCom. Het duurde jaren om het complexe web van Lehmans financiële verplichtingen te ontwarren. De gebeurtenis werd synoniem met de financiële crisis van 2008 en leidde tot meer controle op Wall Street-praktijken."
        }
      },
      {
        question: {
          en: "Which Agatha Christie novel features the famous conclusion where the narrator is revealed as the murderer?",
          es: "¿Qué novela de Agatha Christie presenta la famosa conclusión donde se revela que el narrador es el asesino?",
          de: "Welcher Agatha-Christie-Roman enthält den berühmten Schluss, in dem der Erzähler als Mörder enthüllt wird?",
          nl: "Welke Agatha Christie-roman bevat de beroemde conclusie waarin de verteller wordt onthuld als de moordenaar?"
        },
        options: [
          { en: "Murder on the Orient Express", es: "Asesinato en el Orient Express", de: "Mord im Orient-Express", nl: "Moord op de Orient-Expres" },
          { en: "And Then There Were None", es: "Diez negritos", de: "Und dann gabs keines mehr", nl: "En toen waren er nog maar..." },
          { en: "The Murder of Roger Ackroyd", es: "El asesinato de Roger Ackroyd", de: "Alibi", nl: "De moord op Roger Ackroyd" },
          { en: "Death on the Nile", es: "Muerte en el Nilo", de: "Der Tod auf dem Nil", nl: "Dood op de Nijl" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'The Murder of Roger Ackroyd' (1926) shocked readers with its twist ending where Dr. Sheppard, the narrator, is revealed as the killer. This revolutionary technique was controversial at the time, with some critics calling it unfair to readers. However, it's now considered one of Christie's masterpieces and a landmark in detective fiction. The novel demonstrated Christie's willingness to break conventional rules and innovate within the genre. Hercule Poirot solves the case in the story. The twist has been widely imitated but rarely equaled. The book established Christie as a major figure in mystery writing and remains influential today.",
          es: "'El asesinato de Roger Ackroyd' (1926) sorprendió a los lectores con su final sorpresa donde el Dr. Sheppard, el narrador, se revela como el asesino. Esta técnica revolucionaria fue controvertida en su momento, con algunos críticos llamándola injusta para los lectores. Sin embargo, ahora se considera una de las obras maestras de Christie y un hito en la ficción detectivesca. La novela demostró la voluntad de Christie de romper las reglas convencionales e innovar dentro del género. Hercule Poirot resuelve el caso en la historia. El giro ha sido ampliamente imitado pero rara vez igualado. El libro estableció a Christie como una figura importante en la escritura de misterio y sigue siendo influyente hoy.",
          de: "'Alibi' (1926) schockierte Leser mit seinem überraschenden Ende, in dem Dr. Sheppard, der Erzähler, als Mörder enthüllt wird. Diese revolutionäre Technik war damals umstritten, wobei einige Kritiker sie als unfair gegenüber Lesern bezeichneten. Heute wird sie jedoch als eines von Christies Meisterwerken und ein Meilenstein in der Kriminalliteratur betrachtet. Der Roman zeigte Christies Bereitschaft, konventionelle Regeln zu brechen und innerhalb des Genres zu innovieren. Hercule Poirot löst den Fall in der Geschichte. Die Wendung wurde vielfach imitiert, aber selten erreicht. Das Buch etablierte Christie als wichtige Figur im Mystery-Schreiben und bleibt heute einflussreich.",
          nl: "'De moord op Roger Ackroyd' (1926) schokte lezers met zijn verrassende einde waarin Dr. Sheppard, de verteller, wordt onthuld als de moordenaar. Deze revolutionaire techniek was controversieel in die tijd, waarbij sommige critici het oneerlijk tegenover lezers noemden. Het wordt nu echter beschouwd als een van Christies meesterwerken en een mijlpaal in detectivefictie. De roman toonde Christies bereidheid om conventionele regels te breken en te innoveren binnen het genre. Hercule Poirot lost de zaak op in het verhaal. De twist is veel geïmiteerd maar zelden geëvenaard. Het boek vestigde Christie als belangrijke figuur in mysterieus schrijven en blijft vandaag invloedrijk."
        }
      }
    ],

    // Day 16 - September 16th: Malaysia formed (1963), Mexico independence (1810), B.B. King born (1925)
    day16: [
      {
        question: {
          en: "In what year was Malaysia formed as a federation?",
          es: "¿En qué año se formó Malasia como federación?",
          de: "In welchem Jahr wurde Malaysia als Föderation gegründet?",
          nl: "In welk jaar werd Maleisië als federatie gevormd?"
        },
        options: [
          { en: "1957", es: "1957", de: "1957", nl: "1957" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" },
          { en: "1963", es: "1963", de: "1963", nl: "1963" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Malaysia was formed on September 16, 1963, when the Federation of Malaya merged with the former British colonies of Singapore, North Borneo (Sabah), and Sarawak. This date is now celebrated as Malaysia Day, a national holiday. Singapore later separated from Malaysia in 1965 to become an independent nation. The formation brought together diverse cultures, languages, and ethnic groups under one federation. Malaysia has since developed into a multi-ethnic, multi-cultural nation and a major Southeast Asian economy.",
          es: "Malasia se formó el 16 de septiembre de 1963, cuando la Federación de Malaya se fusionó con las antiguas colonias británicas de Singapur, Borneo del Norte (Sabah) y Sarawak. Esta fecha ahora se celebra como el Día de Malasia, un feriado nacional. Singapur se separó posteriormente de Malasia en 1965 para convertirse en una nación independiente. La formación reunió diversas culturas, idiomas y grupos étnicos bajo una federación. Malasia desde entonces se ha desarrollado en una nación multiétnica, multicultural y una importante economía del sudeste asiático.",
          de: "Malaysia wurde am 16. September 1963 gegründet, als die Föderation Malaya mit den ehemaligen britischen Kolonien Singapur, Nordborneo (Sabah) und Sarawak fusionierte. Dieses Datum wird jetzt als Malaysia-Tag gefeiert, ein nationaler Feiertag. Singapur trennte sich später 1965 von Malaysia und wurde eine unabhängige Nation. Die Gründung brachte vielfältige Kulturen, Sprachen und ethnische Gruppen unter einer Föderation zusammen. Malaysia hat sich seitdem zu einer multiethnischen, multikulturellen Nation und einer wichtigen südostasiatischen Wirtschaft entwickelt.",
          nl: "Maleisië werd gevormd op 16 september 1963, toen de Federatie van Malaya fuseerde met de voormalige Britse kolonies Singapore, Noord-Borneo (Sabah) en Sarawak. Deze datum wordt nu gevierd als Maleisië Dag, een nationale feestdag. Singapore scheidde zich later in 1965 van Maleisië af om een onafhankelijke natie te worden. De vorming bracht diverse culturen, talen en etnische groepen samen onder één federatie. Maleisië heeft zich sindsdien ontwikkeld tot een multi-etnische, multiculturele natie en een belangrijke Zuidoost-Aziatische economie."
        }
      },
      {
        question: {
          en: "Mexico's independence from Spain began with the Grito de Dolores on September 16, 1810. Who gave this famous cry?",
          es: "La independencia de México de España comenzó con el Grito de Dolores el 16 de septiembre de 1810. ¿Quién dio este famoso grito?",
          de: "Mexikos Unabhängigkeit von Spanien begann mit dem Grito de Dolores am 16. September 1810. Wer gab diesen berühmten Ruf ab?",
          nl: "Mexico's onafhankelijkheid van Spanje begon met de Grito de Dolores op 16 september 1810. Wie gaf deze beroemde kreet?"
        },
        options: [
          { en: "Benito Juárez", es: "Benito Juárez", de: "Benito Juárez", nl: "Benito Juárez" },
          { en: "Pancho Villa", es: "Pancho Villa", de: "Pancho Villa", nl: "Pancho Villa" },
          { en: "Emiliano Zapata", es: "Emiliano Zapata", de: "Emiliano Zapata", nl: "Emiliano Zapata" },
          { en: "Father Miguel Hidalgo", es: "Padre Miguel Hidalgo", de: "Pater Miguel Hidalgo", nl: "Vader Miguel Hidalgo" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Father Miguel Hidalgo y Costilla, a Catholic priest, rang the church bell in Dolores and gave the 'Grito de Dolores' (Cry of Dolores) on September 16, 1810, calling for the end of Spanish rule and social reforms. This sparked the Mexican War of Independence, which lasted 11 years until 1821. Although Hidalgo was captured and executed in 1811, he's considered the father of Mexican independence. Every year on September 15th at 11pm, the President of Mexico reenacts the Grito from the National Palace balcony, followed by Independence Day celebrations on September 16th.",
          es: "El padre Miguel Hidalgo y Costilla, un sacerdote católico, tocó la campana de la iglesia en Dolores y dio el 'Grito de Dolores' el 16 de septiembre de 1810, pidiendo el fin del dominio español y reformas sociales. Esto desencadenó la Guerra de Independencia de México, que duró 11 años hasta 1821. Aunque Hidalgo fue capturado y ejecutado en 1811, es considerado el padre de la independencia mexicana. Cada año el 15 de septiembre a las 11pm, el Presidente de México recrea el Grito desde el balcón del Palacio Nacional, seguido de las celebraciones del Día de la Independencia el 16 de septiembre.",
          de: "Pater Miguel Hidalgo y Costilla, ein katholischer Priester, läutete die Kirchenglocke in Dolores und gab den 'Grito de Dolores' (Ruf von Dolores) am 16. September 1810 ab und rief zum Ende der spanischen Herrschaft und zu sozialen Reformen auf. Dies löste den mexikanischen Unabhängigkeitskrieg aus, der 11 Jahre bis 1821 dauerte. Obwohl Hidalgo 1811 gefangen genommen und hingerichtet wurde, gilt er als Vater der mexikanischen Unabhängigkeit. Jedes Jahr am 15. September um 23 Uhr stellt der Präsident von Mexiko den Grito vom Balkon des Nationalpalastes nach, gefolgt von Unabhängigkeitsfeiern am 16. September.",
          nl: "Vader Miguel Hidalgo y Costilla, een katholieke priester, luidde de kerkklok in Dolores en gaf de 'Grito de Dolores' (Kreet van Dolores) op 16 september 1810, waarbij hij opriep tot het einde van de Spaanse heerschappij en sociale hervormingen. Dit ontketende de Mexicaanse Onafhankelijkheidsoorlog, die 11 jaar duurde tot 1821. Hoewel Hidalgo in 1811 werd gevangengenomen en geëxecuteerd, wordt hij beschouwd als de vader van de Mexicaanse onafhankelijkheid. Elk jaar op 15 september om 23.00 uur voert de president van Mexico de Grito opnieuw uit vanaf het balkon van het Nationaal Paleis, gevolgd door Onafhankelijkheidsdagvieringen op 16 september."
        }
      },
      {
        question: {
          en: "B.B. King, born September 16, 1925, was a legendary musician in which music genre?",
          es: "B.B. King, nacido el 16 de septiembre de 1925, fue un músico legendario en qué género musical?",
          de: "B.B. King, geboren am 16. September 1925, war ein legendärer Musiker in welchem Musikgenre?",
          nl: "B.B. King, geboren op 16 september 1925, was een legendarische muzikant in welk muziekgenre?"
        },
        options: [
          { en: "Rock", es: "Rock", de: "Rock", nl: "Rock" },
          { en: "Blues", es: "Blues", de: "Blues", nl: "Blues" },
          { en: "Jazz", es: "Jazz", de: "Jazz", nl: "Jazz" },
          { en: "Country", es: "Country", de: "Country", nl: "Country" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Riley B. 'B.B.' King was one of the most influential blues guitarists of all time. Born in Mississippi, he's known for his expressive guitar playing style and vibrato. His famous guitar was named 'Lucille.' King's signature songs include 'The Thrill Is Gone,' which won him his first Grammy in 1970. He recorded over 50 albums and performed more than 15,000 concerts in his career. King was inducted into the Rock and Roll Hall of Fame in 1987. He influenced countless musicians across multiple genres and was known as 'The King of the Blues.' He continued performing into his 80s before passing away in 2015.",
          es: "Riley B. 'B.B.' King fue uno de los guitarristas de blues más influyentes de todos los tiempos. Nacido en Mississippi, es conocido por su estilo expresivo de tocar la guitarra y su vibrato. Su famosa guitarra se llamaba 'Lucille'. Las canciones emblemáticas de King incluyen 'The Thrill Is Gone', que le ganó su primer Grammy en 1970. Grabó más de 50 álbumes y realizó más de 15,000 conciertos en su carrera. King fue incluido en el Salón de la Fama del Rock and Roll en 1987. Influenció a innumerables músicos en múltiples géneros y era conocido como 'El Rey del Blues'. Continuó actuando hasta sus 80 años antes de fallecer en 2015.",
          de: "Riley B. 'B.B.' King war einer der einflussreichsten Blues-Gitarristen aller Zeiten. Geboren in Mississippi, ist er bekannt für seinen ausdrucksstarken Gitarrenspiels und sein Vibrato. Seine berühmte Gitarre hieß 'Lucille'. Zu Kings Signature-Songs gehört 'The Thrill Is Gone', das ihm 1970 seinen ersten Grammy einbrachte. Er nahm über 50 Alben auf und gab in seiner Karriere mehr als 15.000 Konzerte. King wurde 1987 in die Rock and Roll Hall of Fame aufgenommen. Er beeinflusste unzählige Musiker verschiedener Genres und war als 'König des Blues' bekannt. Er trat bis in seine 80er Jahre auf, bevor er 2015 verstarb.",
          nl: "Riley B. 'B.B.' King was een van de meest invloedrijke bluesgitaristen aller tijden. Geboren in Mississippi, staat hij bekend om zijn expressieve gitaarspel en vibrato. Zijn beroemde gitaar heette 'Lucille'. Kings kenmerkende nummers zijn onder meer 'The Thrill Is Gone', waarmee hij in 1970 zijn eerste Grammy won. Hij nam meer dan 50 albums op en gaf meer dan 15.000 concerten in zijn carrière. King werd in 1987 opgenomen in de Rock and Roll Hall of Fame. Hij beïnvloedde talloze muzikanten in meerdere genres en stond bekend als 'The King of the Blues'. Hij bleef optreden tot in zijn 80e voordat hij in 2015 overleed."
        }
      },
      {
        question: {
          en: "Which former British colonies joined with the Federation of Malaya to form Malaysia in 1963?",
          es: "¿Qué antiguas colonias británicas se unieron con la Federación de Malaya para formar Malasia en 1963?",
          de: "Welche ehemaligen britischen Kolonien schlossen sich der Föderation Malaya an, um 1963 Malaysia zu bilden?",
          nl: "Welke voormalige Britse kolonies sloten zich aan bij de Federatie van Malaya om in 1963 Maleisië te vormen?"
        },
        options: [
          { en: "Hong Kong and Macau", es: "Hong Kong y Macao", de: "Hongkong und Macau", nl: "Hong Kong en Macau" },
          { en: "Singapore, Sabah, and Sarawak", es: "Singapur, Sabah y Sarawak", de: "Singapur, Sabah und Sarawak", nl: "Singapore, Sabah en Sarawak" },
          { en: "Brunei and Singapore", es: "Brunéi y Singapur", de: "Brunei und Singapur", nl: "Brunei en Singapore" },
          { en: "Indonesia and Thailand", es: "Indonesia y Tailandia", de: "Indonesien und Thailand", nl: "Indonesië en Thailand" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Singapore, North Borneo (renamed Sabah), and Sarawak joined the Federation of Malaya to form Malaysia on September 16, 1963. Brunei was originally planned to join but declined at the last moment. The merger faced early challenges, including the Indonesia-Malaysia confrontation and internal political tensions. Singapore separated from Malaysia on August 9, 1965, becoming an independent nation due to ideological and political differences. Today, Malaysia consists of 13 states and 3 federal territories, with West Malaysia (Peninsular Malaysia) and East Malaysia (Sabah and Sarawak on Borneo) separated by the South China Sea.",
          es: "Singapur, Borneo del Norte (renombrado Sabah) y Sarawak se unieron a la Federación de Malaya para formar Malasia el 16 de septiembre de 1963. Brunéi originalmente estaba planeado para unirse pero declinó en el último momento. La fusión enfrentó desafíos tempranos, incluida la confrontación Indonesia-Malasia y tensiones políticas internas. Singapur se separó de Malasia el 9 de agosto de 1965, convirtiéndose en una nación independiente debido a diferencias ideológicas y políticas. Hoy, Malasia consiste en 13 estados y 3 territorios federales, con Malasia Occidental (Malasia Peninsular) y Malasia Oriental (Sabah y Sarawak en Borneo) separadas por el Mar de China Meridional.",
          de: "Singapur, Nordborneo (umbenannt in Sabah) und Sarawak schlossen sich der Föderation Malaya an, um am 16. September 1963 Malaysia zu bilden. Brunei war ursprünglich geplant beizutreten, lehnte aber im letzten Moment ab. Die Fusion stand vor frühen Herausforderungen, einschließlich der Indonesien-Malaysia-Konfrontation und internen politischen Spannungen. Singapur trennte sich am 9. August 1965 von Malaysia und wurde aufgrund ideologischer und politischer Differenzen eine unabhängige Nation. Heute besteht Malaysia aus 13 Bundesstaaten und 3 Bundesgebieten, wobei Westmalaysia (Halbinsel Malaysia) und Ostmalaysia (Sabah und Sarawak auf Borneo) durch das Südchinesische Meer getrennt sind.",
          nl: "Singapore, Noord-Borneo (hernoemd naar Sabah) en Sarawak sloten zich aan bij de Federatie van Malaya om op 16 september 1963 Maleisië te vormen. Brunei was oorspronkelijk van plan zich aan te sluiten maar weigerde op het laatste moment. De fusie kreeg te maken met vroege uitdagingen, waaronder de Indonesië-Maleisië confrontatie en interne politieke spanningen. Singapore scheidde zich op 9 augustus 1965 van Maleisië af en werd een onafhankelijke natie vanwege ideologische en politieke verschillen. Vandaag bestaat Maleisië uit 13 staten en 3 federale territoria, met West-Maleisië (Schiereiland Maleisië) en Oost-Maleisië (Sabah en Sarawak op Borneo) gescheiden door de Zuid-Chinese Zee."
        }
      },
      {
        question: {
          en: "What was the name of B.B. King's famous guitar?",
          es: "¿Cuál era el nombre de la famosa guitarra de B.B. King?",
          de: "Wie hieß B.B. Kings berühmte Gitarre?",
          nl: "Wat was de naam van B.B. King's beroemde gitaar?"
        },
        options: [
          { en: "Betsy", es: "Betsy", de: "Betsy", nl: "Betsy" },
          { en: "Lucille", es: "Lucille", de: "Lucille", nl: "Lucille" },
          { en: "Rosie", es: "Rosie", de: "Rosie", nl: "Rosie" },
          { en: "Blackie", es: "Blackie", de: "Blackie", nl: "Blackie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "B.B. King named his guitar 'Lucille' after an incident in 1949 in Twist, Arkansas. Two men got into a fight over a woman named Lucille, which started a fire in the dance hall where King was performing. King risked his life running back into the burning building to save his guitar. He named all his guitars Lucille thereafter as a reminder never to do something that foolish again and never to fight over a woman. Throughout his career, King played Gibson guitars, typically Gibson ES-335 and ES-355 models. The name became iconic in blues and guitar history, symbolizing King's deep connection to his instrument.",
          es: "B.B. King nombró su guitarra 'Lucille' después de un incidente en 1949 en Twist, Arkansas. Dos hombres se pelearon por una mujer llamada Lucille, lo que inició un incendio en el salón de baile donde King estaba actuando. King arriesgó su vida corriendo de vuelta al edificio en llamas para salvar su guitarra. Nombró todas sus guitarras Lucille a partir de entonces como recordatorio de nunca hacer algo tan tonto de nuevo y nunca pelear por una mujer. A lo largo de su carrera, King tocó guitarras Gibson, típicamente modelos Gibson ES-335 y ES-355. El nombre se volvió icónico en el blues y la historia de la guitarra, simbolizando la profunda conexión de King con su instrumento.",
          de: "B.B. King nannte seine Gitarre 'Lucille' nach einem Vorfall 1949 in Twist, Arkansas. Zwei Männer gerieten in einen Kampf um eine Frau namens Lucille, was ein Feuer in der Tanzhalle auslöste, in der King auftrat. King riskierte sein Leben, indem er zurück in das brennende Gebäude lief, um seine Gitarre zu retten. Er nannte alle seine Gitarren danach Lucille als Erinnerung daran, niemals wieder etwas so Dummes zu tun und niemals um eine Frau zu kämpfen. Während seiner Karriere spielte King Gibson-Gitarren, typischerweise Gibson ES-335 und ES-355 Modelle. Der Name wurde ikonisch in der Blues- und Gitarrengeschichte und symbolisiert Kings tiefe Verbindung zu seinem Instrument.",
          nl: "B.B. King noemde zijn gitaar 'Lucille' naar een incident in 1949 in Twist, Arkansas. Twee mannen kregen ruzie over een vrouw genaamd Lucille, wat een brand veroorzaakte in de danszaal waar King aan het optreden was. King riskeerde zijn leven door terug het brandende gebouw in te rennen om zijn gitaar te redden. Hij noemde al zijn gitaren daarna Lucille als herinnering om nooit meer zoiets stoms te doen en nooit te vechten om een vrouw. Gedurende zijn carrière speelde King Gibson-gitaren, meestal Gibson ES-335 en ES-355 modellen. De naam werd iconisch in de blues- en gitaargeschiedenis en symboliseert Kings diepe verbinding met zijn instrument."
        }
      }
    ],

    // Day 17 - September 17th: US Constitution signed (1787), Occupy Wall Street begins (2011), Belize independence (1981)
    day17: [
      {
        question: {
          en: "In what year was the United States Constitution signed?",
          es: "¿En qué año se firmó la Constitución de los Estados Unidos?",
          de: "In welchem Jahr wurde die Verfassung der Vereinigten Staaten unterzeichnet?",
          nl: "In welk jaar werd de Grondwet van de Verenigde Staten ondertekend?"
        },
        options: [
          { en: "1776", es: "1776", de: "1776", nl: "1776" },
          { en: "1787", es: "1787", de: "1787", nl: "1787" },
          { en: "1791", es: "1791", de: "1791", nl: "1791" },
          { en: "1800", es: "1800", de: "1800", nl: "1800" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The United States Constitution was signed on September 17, 1787, at the Constitutional Convention in Philadelphia, Pennsylvania. It replaced the Articles of Confederation and established the framework for the federal government that still exists today. The Constitution was drafted over the course of the summer of 1787 by 55 delegates from 12 states (Rhode Island didn't attend). It was signed by 39 of the delegates present. The document established the separation of powers among three branches of government: legislative, executive, and judicial. It became effective on March 4, 1789, after ratification by nine states. The Constitution is the oldest written national constitution still in use and has served as a model for many other countries.",
          es: "La Constitución de los Estados Unidos fue firmada el 17 de septiembre de 1787, en la Convención Constitucional en Filadelfia, Pensilvania. Reemplazó los Artículos de la Confederación y estableció el marco para el gobierno federal que aún existe hoy. La Constitución fue redactada durante el verano de 1787 por 55 delegados de 12 estados (Rhode Island no asistió). Fue firmada por 39 de los delegados presentes. El documento estableció la separación de poderes entre tres ramas del gobierno: legislativo, ejecutivo y judicial. Entró en vigor el 4 de marzo de 1789, después de la ratificación por nueve estados. La Constitución es la constitución nacional escrita más antigua aún en uso y ha servido como modelo para muchos otros países.",
          de: "Die Verfassung der Vereinigten Staaten wurde am 17. September 1787 auf der Verfassungskonvention in Philadelphia, Pennsylvania, unterzeichnet. Sie ersetzte die Konföderationsartikel und etablierte den Rahmen für die Bundesregierung, der noch heute existiert. Die Verfassung wurde im Sommer 1787 von 55 Delegierten aus 12 Staaten entworfen (Rhode Island nahm nicht teil). Sie wurde von 39 der anwesenden Delegierten unterzeichnet. Das Dokument etablierte die Gewaltenteilung zwischen drei Regierungszweigen: Legislative, Exekutive und Judikative. Sie trat am 4. März 1789 in Kraft, nach Ratifizierung durch neun Staaten. Die Verfassung ist die älteste noch in Gebrauch befindliche geschriebene nationale Verfassung und hat als Modell für viele andere Länder gedient.",
          nl: "De Grondwet van de Verenigde Staten werd ondertekend op 17 september 1787, tijdens de Grondwetgevende Conventie in Philadelphia, Pennsylvania. Het verving de Artikelen van Confederatie en stelde het kader vast voor de federale regering dat vandaag nog steeds bestaat. De Grondwet werd gedurende de zomer van 1787 opgesteld door 55 afgevaardigden uit 12 staten (Rhode Island nam niet deel). Het werd ondertekend door 39 van de aanwezige afgevaardigden. Het document vestigde de scheiding der machten tussen drie takken van de regering: wetgevend, uitvoerend en rechterlijk. Het werd van kracht op 4 maart 1789, na ratificatie door negen staten. De Grondwet is de oudste geschreven nationale grondwet die nog in gebruik is en heeft gediend als model voor veel andere landen."
        }
      },
      {
        question: {
          en: "The Occupy Wall Street movement began on September 17, 2011, in which U.S. city?",
          es: "El movimiento Occupy Wall Street comenzó el 17 de septiembre de 2011, ¿en qué ciudad de EE.UU.?",
          de: "Die Occupy Wall Street-Bewegung begann am 17. September 2011 in welcher US-Stadt?",
          nl: "De Occupy Wall Street-beweging begon op 17 september 2011 in welke Amerikaanse stad?"
        },
        options: [
          { en: "Washington D.C.", es: "Washington D.C.", de: "Washington D.C.", nl: "Washington D.C." },
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" },
          { en: "New York City", es: "Nueva York", de: "New York City", nl: "New York City" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Occupy Wall Street began on September 17, 2011, in Zuccotti Park in Lower Manhattan's Financial District in New York City. The movement protested economic inequality, corporate greed, and the influence of money in politics. The slogan 'We are the 99%' highlighted the concentration of wealth among the top 1% of earners. The protest lasted for two months until the camp was cleared by police on November 15, 2011. Occupy Wall Street inspired similar movements worldwide in over 951 cities across 82 countries. The movement brought issues of wealth inequality and corporate influence into mainstream political discourse. While the physical occupation ended, its influence on political conversations about economic inequality continues today.",
          es: "Occupy Wall Street comenzó el 17 de septiembre de 2011, en el Parque Zuccotti en el Distrito Financiero del Bajo Manhattan en la ciudad de Nueva York. El movimiento protestó contra la desigualdad económica, la codicia corporativa y la influencia del dinero en la política. El eslogan 'Somos el 99%' destacó la concentración de riqueza entre el 1% superior de los que más ganan. La protesta duró dos meses hasta que el campamento fue desalojado por la policía el 15 de noviembre de 2011. Occupy Wall Street inspiró movimientos similares en todo el mundo en más de 951 ciudades en 82 países. El movimiento llevó temas de desigualdad de riqueza e influencia corporativa al discurso político dominante. Aunque la ocupación física terminó, su influencia en las conversaciones políticas sobre desigualdad económica continúa hoy.",
          de: "Occupy Wall Street begann am 17. September 2011 im Zuccotti Park im Financial District von Lower Manhattan in New York City. Die Bewegung protestierte gegen wirtschaftliche Ungleichheit, Unternehmenshabgier und den Einfluss von Geld in der Politik. Der Slogan 'Wir sind die 99%' hob die Vermögenskonzentration unter den Top 1% der Verdiener hervor. Der Protest dauerte zwei Monate, bis das Lager am 15. November 2011 von der Polizei geräumt wurde. Occupy Wall Street inspirierte ähnliche Bewegungen weltweit in über 951 Städten in 82 Ländern. Die Bewegung brachte Fragen der Vermögensungleichheit und des Unternehmensflusses in den politischen Mainstream-Diskurs. Obwohl die physische Besetzung endete, setzt sich ihr Einfluss auf politische Gespräche über wirtschaftliche Ungleichheit bis heute fort.",
          nl: "Occupy Wall Street begon op 17 september 2011 in Zuccotti Park in het Financial District van Lower Manhattan in New York City. De beweging protesteerde tegen economische ongelijkheid, bedrijfshebzucht en de invloed van geld in de politiek. De slogan 'We zijn de 99%' benadrukte de concentratie van rijkdom onder de top 1% van verdieners. Het protest duurde twee maanden tot het kamp op 15 november 2011 door de politie werd ontruimd. Occupy Wall Street inspireerde vergelijkbare bewegingen wereldwijd in meer dan 951 steden in 82 landen. De beweging bracht kwesties van vermogensongelijkheid en bedrijfsinvloed in het mainstream politieke discours. Hoewel de fysieke bezetting eindigde, blijft de invloed ervan op politieke gesprekken over economische ongelijkheid vandaag bestaan."
        }
      },
      {
        question: {
          en: "Belize gained independence on September 21, 1981, from which country?",
          es: "Belice obtuvo su independencia el 21 de septiembre de 1981, ¿de qué país?",
          de: "Belize erlangte am 21. September 1981 die Unabhängigkeit von welchem Land?",
          nl: "Belize kreeg op 21 september 1981 onafhankelijkheid van welk land?"
        },
        options: [
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Belize gained independence from the United Kingdom on September 21, 1981, making it one of the last British colonies in the Americas to achieve independence. Before independence, it was known as British Honduras. The territory was a British colony since 1862. Belize faced a long-standing territorial dispute with neighboring Guatemala, which claimed the territory. British troops remained in Belize after independence to deter potential invasion by Guatemala. The country is the only Central American nation where English is the official language. Belize is known for its Caribbean coastline, Mayan ruins, and the Great Blue Hole. Today, it remains a member of the Commonwealth with King Charles III as head of state.",
          es: "Belice obtuvo su independencia del Reino Unido el 21 de septiembre de 1981, convirtiéndose en una de las últimas colonias británicas en las Américas en lograr la independencia. Antes de la independencia, se conocía como Honduras Británica. El territorio fue una colonia británica desde 1862. Belice enfrentó una disputa territorial de larga data con la vecina Guatemala, que reclamaba el territorio. Las tropas británicas permanecieron en Belice después de la independencia para disuadir una posible invasión de Guatemala. El país es la única nación centroamericana donde el inglés es el idioma oficial. Belice es conocido por su costa caribeña, ruinas mayas y el Gran Agujero Azul. Hoy, sigue siendo miembro de la Commonwealth con el rey Carlos III como jefe de estado.",
          de: "Belize erlangte am 21. September 1981 die Unabhängigkeit vom Vereinigten Königreich und war damit eine der letzten britischen Kolonien in Amerika, die Unabhängigkeit erlangte. Vor der Unabhängigkeit war es als Britisch-Honduras bekannt. Das Gebiet war seit 1862 eine britische Kolonie. Belize hatte einen langjährigen Territorialstreit mit dem Nachbarland Guatemala, das das Gebiet beanspruchte. Britische Truppen blieben nach der Unabhängigkeit in Belize, um eine mögliche Invasion durch Guatemala abzuschrecken. Das Land ist die einzige zentralamerikanische Nation, in der Englisch die Amtssprache ist. Belize ist bekannt für seine karibische Küste, Maya-Ruinen und das Great Blue Hole. Heute bleibt es Mitglied des Commonwealth mit König Charles III. als Staatsoberhaupt.",
          nl: "Belize kreeg onafhankelijkheid van het Verenigd Koninkrijk op 21 september 1981, waarmee het een van de laatste Britse kolonies in Amerika was die onafhankelijkheid bereikte. Voor de onafhankelijkheid stond het bekend als Brits Honduras. Het gebied was sinds 1862 een Britse kolonie. Belize had een langdurig territoriaal geschil met buurland Guatemala, dat het gebied opeiste. Britse troepen bleven na de onafhankelijkheid in Belize om een mogelijke invasie door Guatemala af te schrikken. Het land is de enige Centraal-Amerikaanse natie waar Engels de officiële taal is. Belize staat bekend om zijn Caribische kustlijn, Maya-ruïnes en het Great Blue Hole. Vandaag blijft het lid van het Gemenebest met koning Charles III als staatshoofd."
        }
      },
      {
        question: {
          en: "How many delegates signed the U.S. Constitution on September 17, 1787?",
          es: "¿Cuántos delegados firmaron la Constitución de EE.UU. el 17 de septiembre de 1787?",
          de: "Wie viele Delegierte unterzeichneten die US-Verfassung am 17. September 1787?",
          nl: "Hoeveel afgevaardigden ondertekenden de Amerikaanse Grondwet op 17 september 1787?"
        },
        options: [
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "55", es: "55", de: "55", nl: "55" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "39", es: "39", de: "39", nl: "39" }
        ],
        correctIndex: 3,
        explanation: {
          en: "39 delegates signed the U.S. Constitution on September 17, 1787, out of the 42 who were present at the convention that day. Of the original 55 delegates who attended the Constitutional Convention over the summer, 13 either left early or refused to sign. Three delegates present on signing day refused to sign: Edmund Randolph and George Mason of Virginia, and Elbridge Gerry of Massachusetts. They felt the Constitution needed a Bill of Rights before they could support it. The oldest signer was Benjamin Franklin at age 81, and the youngest was Jonathan Dayton of New Jersey at age 26. George Washington was the first to sign, as president of the convention.",
          es: "39 delegados firmaron la Constitución de EE.UU. el 17 de septiembre de 1787, de los 42 que estaban presentes en la convención ese día. De los 55 delegados originales que asistieron a la Convención Constitucional durante el verano, 13 se fueron temprano o se negaron a firmar. Tres delegados presentes el día de la firma se negaron a firmar: Edmund Randolph y George Mason de Virginia, y Elbridge Gerry de Massachusetts. Sentían que la Constitución necesitaba una Carta de Derechos antes de que pudieran apoyarla. El firmante más viejo fue Benjamin Franklin a los 81 años, y el más joven fue Jonathan Dayton de Nueva Jersey a los 26 años. George Washington fue el primero en firmar, como presidente de la convención.",
          de: "39 Delegierte unterzeichneten die US-Verfassung am 17. September 1787, von den 42, die an diesem Tag auf der Konvention anwesend waren. Von den ursprünglich 55 Delegierten, die im Sommer an der Verfassungskonvention teilnahmen, verließen 13 entweder früh oder weigerten sich zu unterschreiben. Drei am Unterzeichnungstag anwesende Delegierte weigerten sich zu unterschreiben: Edmund Randolph und George Mason aus Virginia sowie Elbridge Gerry aus Massachusetts. Sie fühlten, dass die Verfassung eine Bill of Rights brauchte, bevor sie sie unterstützen könnten. Der älteste Unterzeichner war Benjamin Franklin mit 81 Jahren, und der jüngste war Jonathan Dayton aus New Jersey mit 26 Jahren. George Washington unterschrieb als Präsident der Konvention als Erster.",
          nl: "39 afgevaardigden ondertekenden de Amerikaanse Grondwet op 17 september 1787, van de 42 die die dag aanwezig waren op de conventie. Van de oorspronkelijke 55 afgevaardigden die gedurende de zomer de Grondwetgevende Conventie bijwoonden, vertrokken 13 vroeg of weigerden te tekenen. Drie afgevaardigden die aanwezig waren op de ondertekendag weigerden te tekenen: Edmund Randolph en George Mason uit Virginia, en Elbridge Gerry uit Massachusetts. Ze vonden dat de Grondwet een Bill of Rights nodig had voordat ze het konden steunen. De oudste ondertekenaar was Benjamin Franklin op 81-jarige leeftijd, en de jongste was Jonathan Dayton uit New Jersey op 26-jarige leeftijd. George Washington was de eerste die tekende, als president van de conventie."
        }
      },
      {
        question: {
          en: "What was the main slogan of the Occupy Wall Street movement?",
          es: "¿Cuál fue el eslogan principal del movimiento Occupy Wall Street?",
          de: "Was war der Hauptslogan der Occupy Wall Street-Bewegung?",
          nl: "Wat was de belangrijkste slogan van de Occupy Wall Street-beweging?"
        },
        options: [
          { en: "Yes We Can", es: "Sí se puede", de: "Ja, wir können", nl: "Yes We Can" },
          { en: "We are the 99%", es: "Somos el 99%", de: "Wir sind die 99%", nl: "Wij zijn de 99%" },
          { en: "Power to the People", es: "Poder al Pueblo", de: "Macht dem Volk", nl: "Macht aan het Volk" },
          { en: "No Justice, No Peace", es: "No hay justicia, no hay paz", de: "Keine Gerechtigkeit, kein Frieden", nl: "Geen Gerechtigheid, Geen Vrede" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The main slogan of Occupy Wall Street was 'We are the 99%,' which referred to the concentration of wealth and income among the top 1% of the U.S. population. The slogan resonated globally and became a rallying cry against economic inequality. It highlighted that the wealthiest 1% controlled a disproportionate share of wealth while the remaining 99% faced stagnant wages and economic hardship. The movement used social media, particularly Twitter and Facebook, to spread its message and coordinate actions. While critics questioned the movement's lack of specific demands, supporters argued it successfully shifted public discourse toward issues of inequality. The phrase entered common usage in political and economic discussions and continues to be used today when discussing wealth disparity.",
          es: "El eslogan principal de Occupy Wall Street fue 'Somos el 99%', que se refería a la concentración de riqueza e ingresos entre el 1% superior de la población estadounidense. El eslogan resonó globalmente y se convirtió en un grito de guerra contra la desigualdad económica. Destacó que el 1% más rico controlaba una parte desproporcionada de la riqueza mientras que el 99% restante enfrentaba salarios estancados y dificultades económicas. El movimiento usó las redes sociales, particularmente Twitter y Facebook, para difundir su mensaje y coordinar acciones. Mientras los críticos cuestionaban la falta de demandas específicas del movimiento, los partidarios argumentaban que cambió exitosamente el discurso público hacia temas de desigualdad. La frase entró en uso común en discusiones políticas y económicas y continúa siendo usada hoy al discutir la disparidad de riqueza.",
          de: "Der Hauptslogan von Occupy Wall Street war 'Wir sind die 99%', was sich auf die Konzentration von Vermögen und Einkommen unter den oberen 1% der US-Bevölkerung bezog. Der Slogan fand weltweit Anklang und wurde zum Schlachtruf gegen wirtschaftliche Ungleichheit. Er hob hervor, dass die reichsten 1% einen unverhältnismäßigen Anteil des Vermögens kontrollierten, während die verbleibenden 99% stagnierende Löhne und wirtschaftliche Härten erlebten. Die Bewegung nutzte soziale Medien, insbesondere Twitter und Facebook, um ihre Botschaft zu verbreiten und Aktionen zu koordinieren. Während Kritiker die fehlenden spezifischen Forderungen der Bewegung hinterfragten, argumentierten Unterstützer, dass sie erfolgreich den öffentlichen Diskurs in Richtung Ungleichheitsfragen verschoben habe. Der Ausdruck fand Eingang in die allgemeine Verwendung in politischen und wirtschaftlichen Diskussionen und wird heute weiterhin verwendet, wenn über Vermögensunterschiede gesprochen wird.",
          nl: "De belangrijkste slogan van Occupy Wall Street was 'Wij zijn de 99%', wat verwees naar de concentratie van rijkdom en inkomen onder de top 1% van de Amerikaanse bevolking. De slogan resoneerde wereldwijd en werd een strijdkreet tegen economische ongelijkheid. Het benadrukte dat de rijkste 1% een onevenredig groot deel van de rijkdom controleerde terwijl de overige 99% stagnerende lonen en economische moeilijkheden ondervond. De beweging gebruikte sociale media, met name Twitter en Facebook, om haar boodschap te verspreiden en acties te coördineren. Terwijl critici de gebrek aan specifieke eisen van de beweging in twijfel trokken, betoogden supporters dat het met succes het publieke discours naar kwesties van ongelijkheid had verschoven. De uitdrukking kwam in algemeen gebruik in politieke en economische discussies en wordt vandaag nog steeds gebruikt bij het bespreken van vermogensverschillen."
        }
      }
    ],

    // Day 18 - September 18th: First issue of New York Times (1851), Chile independence (1810), Greta Garbo born (1905)
    day18: [
      {
        question: {
          en: "In what year was the first issue of The New York Times published?",
          es: "¿En qué año se publicó el primer número del New York Times?",
          de: "In welchem Jahr wurde die erste Ausgabe der New York Times veröffentlicht?",
          nl: "In welk jaar werd de eerste editie van The New York Times gepubliceerd?"
        },
        options: [
          { en: "1841", es: "1841", de: "1841", nl: "1841" },
          { en: "1851", es: "1851", de: "1851", nl: "1851" },
          { en: "1861", es: "1861", de: "1861", nl: "1861" },
          { en: "1871", es: "1871", de: "1871", nl: "1871" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The New York Times published its first issue on September 18, 1851, founded by journalist and politician Henry Jarvis Raymond and former banker George Jones. Originally called the New-York Daily Times, it cost one penny. The newspaper adopted its current name in 1857. The Times is known for its motto 'All the News That's Fit to Print,' which has appeared on the paper since 1897. It has won more Pulitzer Prizes than any other news organization. The newspaper became publicly traded in 1969 but the Ochs-Sulzberger family retained control. Despite challenges from digital media, The Times successfully transitioned to a digital subscription model. It remains one of the world's most influential newspapers with global readership.",
          es: "El New York Times publicó su primer número el 18 de septiembre de 1851, fundado por el periodista y político Henry Jarvis Raymond y el ex banquero George Jones. Originalmente llamado New-York Daily Times, costaba un centavo. El periódico adoptó su nombre actual en 1857. El Times es conocido por su lema 'Todas las Noticias Aptas para Imprimir', que ha aparecido en el periódico desde 1897. Ha ganado más Premios Pulitzer que cualquier otra organización de noticias. El periódico se hizo público en 1969, pero la familia Ochs-Sulzberger retuvo el control. A pesar de los desafíos de los medios digitales, el Times hizo una transición exitosa a un modelo de suscripción digital. Sigue siendo uno de los periódicos más influyentes del mundo con lectores globales.",
          de: "Die New York Times veröffentlichte ihre erste Ausgabe am 18. September 1851, gegründet vom Journalisten und Politiker Henry Jarvis Raymond und dem ehemaligen Banker George Jones. Ursprünglich New-York Daily Times genannt, kostete sie einen Penny. Die Zeitung nahm ihren heutigen Namen 1857 an. Die Times ist bekannt für ihr Motto 'All the News That's Fit to Print', das seit 1897 in der Zeitung erscheint. Sie hat mehr Pulitzer-Preise gewonnen als jede andere Nachrichtenorganisation. Die Zeitung wurde 1969 an die Börse gebracht, aber die Familie Ochs-Sulzberger behielt die Kontrolle. Trotz der Herausforderungen durch digitale Medien gelang der Times erfolgreich der Übergang zu einem digitalen Abonnementmodell. Sie bleibt eine der einflussreichsten Zeitungen der Welt mit globaler Leserschaft.",
          nl: "The New York Times publiceerde zijn eerste editie op 18 september 1851, opgericht door journalist en politicus Henry Jarvis Raymond en voormalig bankier George Jones. Oorspronkelijk genaamd de New-York Daily Times, kostte het een cent. De krant nam zijn huidige naam aan in 1857. De Times staat bekend om zijn motto 'All the News That's Fit to Print', dat sinds 1897 in de krant verschijnt. Het heeft meer Pulitzer Prizes gewonnen dan enige andere nieuwsorganisatie. De krant werd in 1969 beursgenoteerd, maar de familie Ochs-Sulzberger behield de controle. Ondanks uitdagingen van digitale media maakte de Times met succes de overgang naar een digitaal abonnementsmodel. Het blijft een van 's werelds meest invloedrijke kranten met wereldwijd lezerspubliek."
        }
      },
      {
        question: {
          en: "Chile declared independence from Spain on September 18, 1810. This date is now celebrated as what national holiday?",
          es: "Chile declaró su independencia de España el 18 de septiembre de 1810. ¿Esta fecha ahora se celebra como qué feriado nacional?",
          de: "Chile erklärte am 18. September 1810 die Unabhängigkeit von Spanien. Welcher Nationalfeiertag wird an diesem Datum gefeiert?",
          nl: "Chili verklaarde op 18 september 1810 de onafhankelijkheid van Spanje. Deze datum wordt nu gevierd als welke nationale feestdag?"
        },
        options: [
          { en: "Cinco de Mayo", es: "Cinco de Mayo", de: "Cinco de Mayo", nl: "Cinco de Mayo" },
          { en: "Carnaval", es: "Carnaval", de: "Karneval", nl: "Carnaval" },
          { en: "Fiestas Patrias", es: "Fiestas Patrias", de: "Fiestas Patrias", nl: "Fiestas Patrias" },
          { en: "Día de la Raza", es: "Día de la Raza", de: "Día de la Raza", nl: "Día de la Raza" }
        ],
        correctIndex: 2,
        explanation: {
          en: "September 18 is celebrated in Chile as the start of Fiestas Patrias (National Holidays), commemorating the First Government Junta of 1810, which marked the beginning of Chile's independence process. The celebration typically lasts two days (September 18-19), though independence wasn't fully achieved until 1818 after the Chilean War of Independence. During Fiestas Patrias, Chileans celebrate with traditional foods like empanadas and asado (barbecue), drink chicha and pisco, and perform the cueca, Chile's national dance. The holiday includes rodeos, military parades, and fondas (traditional parties). Businesses close and families gather for celebrations. It's one of Chile's most important holidays, emphasizing national identity and patriotism.",
          es: "El 18 de septiembre se celebra en Chile como el inicio de las Fiestas Patrias, conmemorando la Primera Junta de Gobierno de 1810, que marcó el comienzo del proceso de independencia de Chile. La celebración típicamente dura dos días (18-19 de septiembre), aunque la independencia no se logró completamente hasta 1818 después de la Guerra de Independencia de Chile. Durante las Fiestas Patrias, los chilenos celebran con comidas tradicionales como empanadas y asado, beben chicha y pisco, y bailan la cueca, la danza nacional de Chile. La festividad incluye rodeos, desfiles militares y fondas (fiestas tradicionales). Los negocios cierran y las familias se reúnen para celebrar. Es uno de los feriados más importantes de Chile, enfatizando la identidad nacional y el patriotismo.",
          de: "Der 18. September wird in Chile als Beginn der Fiestas Patrias (Nationalfeiertage) gefeiert und erinnert an die Erste Regierungsjunta von 1810, die den Beginn von Chiles Unabhängigkeitsprozess markierte. Die Feier dauert typischerweise zwei Tage (18.-19. September), obwohl die Unabhängigkeit erst 1818 nach dem chilenischen Unabhängigkeitskrieg vollständig erreicht wurde. Während der Fiestas Patrias feiern Chilenen mit traditionellen Speisen wie Empanadas und Asado (Barbecue), trinken Chicha und Pisco und führen die Cueca auf, Chiles Nationaltanz. Der Feiertag umfasst Rodeos, Militärparaden und Fondas (traditionelle Partys). Geschäfte schließen und Familien versammeln sich zum Feiern. Es ist einer von Chiles wichtigsten Feiertagen und betont nationale Identität und Patriotismus.",
          nl: "18 september wordt in Chili gevierd als het begin van Fiestas Patrias (Nationale Feestdagen), ter herdenking van de Eerste Regerings Junta van 1810, die het begin markeerde van Chili's onafhankelijkheidsproces. De viering duurt meestal twee dagen (18-19 september), hoewel de onafhankelijkheid pas volledig werd bereikt in 1818 na de Chileense Onafhankelijkheidsoorlog. Tijdens Fiestas Patrias vieren Chilenen met traditionele gerechten zoals empanadas en asado (barbecue), drinken chicha en pisco, en voeren de cueca uit, Chili's nationale dans. De feestdag omvat rodeo's, militaire parades en fondas (traditionele feesten). Bedrijven sluiten en families komen samen voor vieringen. Het is een van Chili's belangrijkste feestdagen, waarbij nationale identiteit en patriottisme worden benadrukt."
        }
      },
      {
        question: {
          en: "Greta Garbo, born September 18, 1905, was a legendary actress from which country?",
          es: "Greta Garbo, nacida el 18 de septiembre de 1905, fue una actriz legendaria de qué país?",
          de: "Greta Garbo, geboren am 18. September 1905, war eine legendäre Schauspielerin aus welchem Land?",
          nl: "Greta Garbo, geboren op 18 september 1905, was een legendarische actrice uit welk land?"
        },
        options: [
          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" },
          { en: "Denmark", es: "Dinamarca", de: "Dänemark", nl: "Denemarken" },
          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },
          { en: "Finland", es: "Finlandia", de: "Finnland", nl: "Finland" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Greta Garbo was born in Stockholm, Sweden, and became one of Hollywood's greatest and most mysterious stars during the 1920s and 1930s. Her real name was Greta Lovisa Gustafsson. She starred in 28 films, including classics like 'Grand Hotel,' 'Queen Christina,' and 'Ninotchka.' Garbo was known for her beauty, enigmatic screen presence, and desire for privacy. Her famous line 'I want to be alone' from 'Grand Hotel' became synonymous with her reclusive lifestyle. She retired from acting at age 35 in 1941 at the height of her fame. Garbo received an honorary Academy Award in 1955. She lived the rest of her life in New York City, avoiding publicity. She's remembered as an icon of cinema's Golden Age.",
          es: "Greta Garbo nació en Estocolmo, Suecia, y se convirtió en una de las estrellas más grandes y misteriosas de Hollywood durante las décadas de 1920 y 1930. Su nombre real era Greta Lovisa Gustafsson. Protagonizó 28 películas, incluidos clásicos como 'Gran Hotel', 'La reina Cristina' y 'Ninotchka'. Garbo era conocida por su belleza, presencia enigmática en pantalla y deseo de privacidad. Su famosa línea 'Quiero estar sola' de 'Gran Hotel' se volvió sinónima de su estilo de vida reclusivo. Se retiró de la actuación a los 35 años en 1941 en el apogeo de su fama. Garbo recibió un Premio de la Academia honorífico en 1955. Vivió el resto de su vida en la ciudad de Nueva York, evitando la publicidad. Es recordada como un ícono de la Edad de Oro del cine.",
          de: "Greta Garbo wurde in Stockholm, Schweden, geboren und wurde in den 1920er und 1930er Jahren zu einem der größten und geheimnisvollsten Stars Hollywoods. Ihr richtiger Name war Greta Lovisa Gustafsson. Sie spielte in 28 Filmen mit, darunter Klassiker wie 'Menschen im Hotel', 'Königin Christina' und 'Ninotchka'. Garbo war bekannt für ihre Schönheit, rätselhafte Leinwandpräsenz und ihren Wunsch nach Privatsphäre. Ihre berühmte Zeile 'Ich will allein sein' aus 'Menschen im Hotel' wurde zum Synonym für ihren zurückgezogenen Lebensstil. Sie zog sich 1941 im Alter von 35 Jahren auf dem Höhepunkt ihres Ruhms von der Schauspielerei zurück. Garbo erhielt 1955 einen Ehren-Oscar. Sie lebte den Rest ihres Lebens in New York City und mied die Öffentlichkeit. Sie wird als Ikone des Goldenen Zeitalters des Kinos erinnert.",
          nl: "Greta Garbo werd geboren in Stockholm, Zweden, en werd een van Hollywood's grootste en meest mysterieuze sterren tijdens de jaren 1920 en 1930. Haar echte naam was Greta Lovisa Gustafsson. Ze speelde in 28 films, waaronder klassiekers zoals 'Grand Hotel', 'Queen Christina' en 'Ninotchka'. Garbo stond bekend om haar schoonheid, enigmatische aanwezigheid op het scherm en verlangen naar privacy. Haar beroemde uitspraak 'I want to be alone' uit 'Grand Hotel' werd synoniem met haar teruggetrokken levensstijl. Ze trok zich terug uit acteren op 35-jarige leeftijd in 1941 op het hoogtepunt van haar roem. Garbo ontving een ere Academy Award in 1955. Ze leefde de rest van haar leven in New York City, waarbij ze publiciteit vermeed. Ze wordt herinnerd als een icoon van het Gouden Tijdperk van de cinema."
        }
      },
      {
        question: {
          en: "What is the famous motto that has appeared on The New York Times since 1897?",
          es: "¿Cuál es el famoso lema que ha aparecido en el New York Times desde 1897?",
          de: "Was ist das berühmte Motto, das seit 1897 in der New York Times erscheint?",
          nl: "Wat is het beroemde motto dat sinds 1897 in The New York Times verschijnt?"
        },
        options: [
          { en: "Democracy Dies in Darkness", es: "La democracia muere en la oscuridad", de: "Demokratie stirbt in Dunkelheit", nl: "Democratie sterft in duisternis" },
          { en: "All the News That's Fit to Print", es: "Todas las Noticias Aptas para Imprimir", de: "All the News That's Fit to Print", nl: "All the News That's Fit to Print" },
          { en: "The Truth Matters", es: "La verdad importa", de: "Die Wahrheit zählt", nl: "De waarheid telt" },
          { en: "Facts First", es: "Hechos primero", de: "Fakten zuerst", nl: "Feiten eerst" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'All the News That's Fit to Print' has been The New York Times' motto since 1897, appearing on the front page. The slogan was created by Adolph Ochs, who bought the struggling newspaper in 1896 and transformed it into a serious journal of record. The motto was partly a response to sensationalist 'yellow journalism' practiced by competing newspapers like Hearst's New York Journal. It signaled the Times' commitment to responsible journalism and editorial standards. The phrase has been both praised for representing journalistic integrity and criticized for implying editorial judgment about what news is 'fit.' The motto remains on the paper today, representing its commitment to quality journalism. It's one of the most recognized newspaper slogans in the world.",
          es: "'Todas las Noticias Aptas para Imprimir' ha sido el lema del New York Times desde 1897, apareciendo en la portada. El eslogan fue creado por Adolph Ochs, quien compró el periódico en dificultades en 1896 y lo transformó en un serio diario de registro. El lema fue en parte una respuesta al 'periodismo amarillo' sensacionalista practicado por periódicos competidores como el New York Journal de Hearst. Señaló el compromiso del Times con el periodismo responsable y los estándares editoriales. La frase ha sido tanto elogiada por representar la integridad periodística como criticada por implicar juicio editorial sobre qué noticias son 'aptas'. El lema permanece en el periódico hoy, representando su compromiso con el periodismo de calidad. Es uno de los eslóganes de periódicos más reconocidos del mundo.",
          de: "'All the News That's Fit to Print' ist seit 1897 das Motto der New York Times und erscheint auf der Titelseite. Der Slogan wurde von Adolph Ochs geschaffen, der die angeschlagene Zeitung 1896 kaufte und sie in ein seriöses Nachrichtenblatt verwandelte. Das Motto war teilweise eine Antwort auf den sensationalistischen 'Gelben Journalismus', der von konkurrierenden Zeitungen wie Hearsts New York Journal praktiziert wurde. Es signalisierte das Engagement der Times für verantwortungsvollen Journalismus und redaktionelle Standards. Die Phrase wurde sowohl für die Darstellung journalistischer Integrität gelobt als auch dafür kritisiert, dass sie redaktionelles Urteil darüber impliziert, welche Nachrichten 'druckreif' sind. Das Motto bleibt heute in der Zeitung und repräsentiert ihr Engagement für Qualitätsjournalismus. Es ist einer der bekanntesten Zeitungsslogans der Welt.",
          nl: "'All the News That's Fit to Print' is sinds 1897 het motto van The New York Times en verschijnt op de voorpagina. De slogan werd gecreëerd door Adolph Ochs, die de worstelende krant in 1896 kocht en transformeerde tot een serieus journaal van documentatie. Het motto was deels een reactie op sensationalistische 'gele journalistiek' die werd beoefend door concurrerende kranten zoals Hearst's New York Journal. Het signaleerde de toewijding van de Times aan verantwoordelijke journalistiek en redactionele normen. De uitdrukking is zowel geprezen voor het vertegenwoordigen van journalistieke integriteit als bekritiseerd voor het impliceren van redactioneel oordeel over welk nieuws 'geschikt' is. Het motto blijft vandaag in de krant en vertegenwoordigt haar toewijding aan kwaliteitsjournalistiek. Het is een van de meest erkende krantslogans ter wereld."
        }
      },
      {
        question: {
          en: "In which classic film did Greta Garbo famously say 'I want to be alone'?",
          es: "¿En qué película clásica dijo famosamente Greta Garbo 'Quiero estar sola'?",
          de: "In welchem klassischen Film sagte Greta Garbo berühmt 'Ich will allein sein'?",
          nl: "In welke klassieke film zei Greta Garbo beroemd 'I want to be alone'?"
        },
        options: [
          { en: "Grand Hotel", es: "Gran Hotel", de: "Menschen im Hotel", nl: "Grand Hotel" },
          { en: "Ninotchka", es: "Ninotchka", de: "Ninotchka", nl: "Ninotchka" },
          { en: "Anna Karenina", es: "Anna Karenina", de: "Anna Karenina", nl: "Anna Karenina" },
          { en: "Queen Christina", es: "La reina Cristina", de: "Königin Christina", nl: "Queen Christina" }
        ],
        correctIndex: 0,
        explanation: {
          en: "'Grand Hotel' (1932) featured Greta Garbo's iconic line 'I want to be alone,' spoken by her character, a fading ballerina. The film won the Academy Award for Best Picture and was an ensemble piece featuring an all-star cast including John Barrymore, Joan Crawford, and Wallace Beery. The line became famous and was often misquoted in real life as describing Garbo's own reclusive nature. In reality, Garbo later clarified that she wanted to be 'let alone' rather than lonely. The phrase nonetheless became synonymous with her persona. Grand Hotel was based on Vicki Baum's 1929 novel and play. It's considered a classic of early sound cinema and established the 'hotel film' genre where multiple storylines intersect.",
          es: "'Gran Hotel' (1932) presentó la icónica línea de Greta Garbo 'Quiero estar sola', dicha por su personaje, una bailarina en declive. La película ganó el Premio de la Academia a la Mejor Película y fue una pieza de conjunto con un elenco estelar que incluía a John Barrymore, Joan Crawford y Wallace Beery. La línea se hizo famosa y a menudo se citaba incorrectamente en la vida real como describiendo la propia naturaleza reclusiva de Garbo. En realidad, Garbo luego aclaró que quería que la 'dejaran sola' en lugar de estar sola. La frase sin embargo se volvió sinónima de su persona. Gran Hotel se basó en la novela y obra de teatro de Vicki Baum de 1929. Se considera un clásico del cine sonoro temprano y estableció el género de 'película de hotel' donde múltiples historias se cruzan.",
          de: "'Menschen im Hotel' (1932) enthielt Greta Garbos ikonische Zeile 'Ich will allein sein', gesprochen von ihrer Figur, einer verblassenden Ballerina. Der Film gewann den Oscar für den Besten Film und war ein Ensemblestück mit einem All-Star-Cast einschließlich John Barrymore, Joan Crawford und Wallace Beery. Die Zeile wurde berühmt und wurde im wirklichen Leben oft falsch zitiert als Beschreibung von Garbos eigener zurückgezogener Natur. In Wirklichkeit stellte Garbo später klar, dass sie 'in Ruhe gelassen werden' wollte, anstatt einsam zu sein. Die Phrase wurde dennoch zum Synonym für ihre Persona. Menschen im Hotel basierte auf Vicki Baums Roman und Theaterstück von 1929. Es gilt als Klassiker des frühen Tonfilms und etablierte das 'Hotelfilm'-Genre, in dem sich mehrere Handlungsstränge kreuzen.",
          nl: "'Grand Hotel' (1932) bevatte Greta Garbo's iconische regel 'I want to be alone', gesproken door haar personage, een vervallende ballerina. De film won de Academy Award voor Beste Film en was een ensemblestuk met een sterrencast waaronder John Barrymore, Joan Crawford en Wallace Beery. De regel werd beroemd en werd vaak in het echte leven verkeerd geciteerd als beschrijving van Garbo's eigen teruggetrokken aard. In werkelijkheid verduidelijkte Garbo later dat ze 'met rust gelaten wilde worden' in plaats van eenzaam te zijn. De uitdrukking werd desondanks synoniem met haar persona. Grand Hotel was gebaseerd op Vicki Baums roman en toneelstuk uit 1929. Het wordt beschouwd als een klassieker van de vroege geluidsfilm en vestigde het 'hotelfilm'-genre waar meerdere verhaallijnen elkaar kruisen."
        }
      }
    ],

    // Day 19 - September 19th: Mickey Mouse newspaper strip debut (1930), New Zealand women vote (1893), Hermione Granger birthday (fictional)
    day19: [
      {
        question: {
          en: "In what year did the Mickey Mouse newspaper comic strip debut?",
          es: "¿En qué año debutó la tira cómica de Mickey Mouse en los periódicos?",
          de: "In welchem Jahr debütierte der Mickey Mouse-Zeitungscomic?",
          nl: "In welk jaar debuteerde de Mickey Mouse stripverhaal in kranten?"
        },
        options: [
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1930", es: "1930", de: "1930", nl: "1930" },
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Mickey Mouse newspaper comic strip debuted on January 13, 1930, but gained widespread distribution by September 19, 1930. The strip was initially drawn by Ub Iwerks and written by Walt Disney, then later taken over by Floyd Gottfredson who became the primary artist and writer for over 45 years. The comic strip featured longer, more complex storylines than the animated shorts, introducing new characters and adventures. Mickey appeared in daily strips and Sunday color pages. The comic strip was syndicated by King Features and appeared in newspapers worldwide. It helped establish Mickey Mouse as an international icon beyond the movie theaters. The strip continued publication until 1995, making it one of the longest-running comic strips in history.",
          es: "La tira cómica de Mickey Mouse en periódicos debutó el 13 de enero de 1930, pero obtuvo una distribución generalizada para el 19 de septiembre de 1930. La tira fue dibujada inicialmente por Ub Iwerks y escrita por Walt Disney, luego fue tomada por Floyd Gottfredson quien se convirtió en el artista y escritor principal durante más de 45 años. La tira cómica presentaba historias más largas y complejas que los cortos animados, introduciendo nuevos personajes y aventuras. Mickey apareció en tiras diarias y páginas en color de los domingos. La tira cómica fue sindicada por King Features y apareció en periódicos de todo el mundo. Ayudó a establecer a Mickey Mouse como un ícono internacional más allá de las salas de cine. La tira continuó su publicación hasta 1995, convirtiéndola en una de las tiras cómicas más longevas de la historia.",
          de: "Der Mickey Mouse-Zeitungscomic debütierte am 13. Januar 1930, erhielt aber bis zum 19. September 1930 weite Verbreitung. Der Strip wurde zunächst von Ub Iwerks gezeichnet und von Walt Disney geschrieben, dann von Floyd Gottfredson übernommen, der über 45 Jahre lang der Hauptkünstler und Autor war. Der Comic enthielt längere, komplexere Handlungsstränge als die animierten Kurzfilme und führte neue Charaktere und Abenteuer ein. Mickey erschien in täglichen Strips und farbigen Sonntagsseiten. Der Comic-Strip wurde von King Features syndiziert und erschien in Zeitungen weltweit. Er half dabei, Mickey Mouse als internationale Ikone über die Kinos hinaus zu etablieren. Der Strip wurde bis 1995 veröffentlicht und war damit einer der am längsten laufenden Comics der Geschichte.",
          nl: "De Mickey Mouse krantenstrip debuteerde op 13 januari 1930, maar kreeg wijdverspreide distributie tegen 19 september 1930. De strip werd aanvankelijk getekend door Ub Iwerks en geschreven door Walt Disney, en later overgenomen door Floyd Gottfredson die meer dan 45 jaar de primaire kunstenaar en schrijver werd. De strip bevatte langere, complexere verhaallijnen dan de animatiefilms, met nieuwe personages en avonturen. Mickey verscheen in dagelijkse strips en zondagse kleurenpagina's. De strip werd gesyndikeerd door King Features en verscheen in kranten wereldwijd. Het help Mickey Mouse te vestigen als een internationaal icoon buiten de bioscopen. De strip werd tot 1995 gepubliceerd, waardoor het een van de langstlopende strips in de geschiedenis werd."
        }
      },
      {
        question: {
          en: "New Zealand became the first country to grant women the right to vote in 1893. What term describes this achievement?",
          es: "Nueva Zelanda se convirtió en el primer país en otorgar a las mujeres el derecho al voto en 1893. ¿Qué término describe este logro?",
          de: "Neuseeland wurde 1893 das erste Land, das Frauen das Wahlrecht gewährte. Welcher Begriff beschreibt diese Errungenschaft?",
          nl: "Nieuw-Zeeland werd in 1893 het eerste land dat vrouwen stemrecht gaf. Welke term beschrijft deze prestatie?"
        },
        options: [
          { en: "Democratic representation", es: "Representación democrática", de: "Demokratische Vertretung", nl: "Democratische vertegenwoordiging" },
          { en: "Universal franchise", es: "Sufragio universal", de: "Allgemeines Wahlrecht", nl: "Algemeen stemrecht" },
          { en: "Electoral reform", es: "Reforma electoral", de: "Wahlreform", nl: "Verkiezingshervorming" },
          { en: "Women's suffrage", es: "Sufragio femenino", de: "Frauenwahlrecht", nl: "Vrouwenkiesrecht" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Women's suffrage refers to the right of women to vote in elections. New Zealand became the first self-governing country to grant all women the right to vote on September 19, 1893. The movement was led by Kate Sheppard, who organized petitions that collected signatures from nearly a quarter of the adult European female population. The Electoral Act 1893 was passed after years of campaigning and debate. However, New Zealand women couldn't stand for parliament until 1919. The achievement inspired suffrage movements worldwide, particularly in Australia, the UK, and the United States. New Zealand's early adoption of women's suffrage reflected its progressive social policies. Today, women's suffrage is recognized as a fundamental democratic right globally.",
          es: "El sufragio femenino se refiere al derecho de las mujeres a votar en las elecciones. Nueva Zelanda se convirtió en el primer país autogobernado en otorgar a todas las mujeres el derecho al voto el 19 de septiembre de 1893. El movimiento fue liderado por Kate Sheppard, quien organizó peticiones que recolectaron firmas de casi un cuarto de la población femenina europea adulta. La Ley Electoral de 1893 fue aprobada después de años de campaña y debate. Sin embargo, las mujeres neozelandesas no pudieron postularse al parlamento hasta 1919. El logro inspiró movimientos de sufragio en todo el mundo, particularmente en Australia, el Reino Unido y los Estados Unidos. La adopción temprana del sufragio femenino por Nueva Zelanda reflejó sus políticas sociales progresistas. Hoy, el sufragio femenino es reconocido como un derecho democrático fundamental a nivel mundial.",
          de: "Frauenwahlrecht bezeichnet das Recht von Frauen, bei Wahlen zu wählen. Neuseeland wurde am 19. September 1893 das erste selbstverwaltete Land, das allen Frauen das Wahlrecht gewährte. Die Bewegung wurde von Kate Sheppard angeführt, die Petitionen organisierte, die Unterschriften von fast einem Viertel der erwachsenen europäischen weiblichen Bevölkerung sammelten. Das Wahlgesetz von 1893 wurde nach Jahren der Kampagne und Debatte verabschiedet. Neuseeländische Frauen konnten jedoch erst 1919 für das Parlament kandidieren. Die Errungenschaft inspirierte Wahlrechtsbewegungen weltweit, insbesondere in Australien, Großbritannien und den USA. Neuseelands frühe Einführung des Frauenwahlrechts spiegelte seine fortschrittlichen Sozialpolitiken wider. Heute wird das Frauenwahlrecht weltweit als grundlegendes demokratisches Recht anerkannt.",
          nl: "Vrouwenkiesrecht verwijst naar het recht van vrouwen om te stemmen bij verkiezingen. Nieuw-Zeeland werd op 19 september 1893 het eerste zelfbesturende land dat alle vrouwen stemrecht gaf. De beweging werd geleid door Kate Sheppard, die petities organiseerde die handtekeningen verzamelden van bijna een kwart van de volwassen Europese vrouwelijke bevolking. De Kieswet 1893 werd aangenomen na jaren van campagne voeren en debat. Nieuw-Zeelandse vrouwen konden echter pas in 1919 kandidaat stellen voor het parlement. De prestatie inspireerde stemrechtbewegingen wereldwijd, met name in Australië, het VK en de Verenigde Staten. Nieuw-Zeelands vroege adoptie van vrouwenkiesrecht weerspiegelde zijn progressieve sociaal beleid. Vandaag wordt vrouwenkiesrecht wereldwijd erkend als een fundamenteel democratisch recht."
        }
      },
      {
        question: {
          en: "In the Harry Potter series, which character celebrates her birthday on September 19th?",
          es: "En la serie de Harry Potter, ¿qué personaje celebra su cumpleaños el 19 de septiembre?",
          de: "In der Harry Potter-Serie feiert welche Figur am 19. September Geburtstag?",
          nl: "In de Harry Potter-serie viert welk personage haar verjaardag op 19 september?"
        },
        options: [
          { en: "Luna Lovegood", es: "Luna Lovegood", de: "Luna Lovegood", nl: "Luna Lovegood" },
          { en: "Ginny Weasley", es: "Ginny Weasley", de: "Ginny Weasley", nl: "Ginny Weasley" },
          { en: "Hermione Granger", es: "Hermione Granger", de: "Hermine Granger", nl: "Hermione Granger" },
          { en: "Cho Chang", es: "Cho Chang", de: "Cho Chang", nl: "Cho Chang" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Hermione Granger's birthday is September 19, making her a Virgo in the zodiac. She's one of the main characters in J.K. Rowling's Harry Potter series, known for her exceptional intelligence, work ethic, and loyalty. Hermione is a Muggle-born witch who becomes best friends with Harry Potter and Ron Weasley. She's sorted into Gryffindor house at Hogwarts. Hermione is characterized by her love of learning, logical thinking, and dedication to fighting for justice, including her work with S.P.E.W. (Society for the Promotion of Elfish Welfare). She plays crucial roles in defeating Voldemort throughout the series. Hermione later marries Ron and becomes Minister for Magic. The character has become an icon for intelligent young women and bookish heroines.",
          es: "El cumpleaños de Hermione Granger es el 19 de septiembre, lo que la convierte en Virgo en el zodiaco. Es uno de los personajes principales de la serie Harry Potter de J.K. Rowling, conocida por su inteligencia excepcional, ética de trabajo y lealtad. Hermione es una bruja nacida de muggles que se convierte en mejor amiga de Harry Potter y Ron Weasley. Es seleccionada para la casa Gryffindor en Hogwarts. Hermione se caracteriza por su amor al aprendizaje, pensamiento lógico y dedicación a luchar por la justicia, incluido su trabajo con P.E.D.D.O. (Plataforma Élfica de Defensa de los Derechos Obreros). Juega roles cruciales en la derrota de Voldemort a lo largo de la serie. Hermione más tarde se casa con Ron y se convierte en Ministra de Magia. El personaje se ha convertido en un ícono para las mujeres jóvenes inteligentes y las heroínas estudiosas.",
          de: "Hermine Grangers Geburtstag ist der 19. September, was sie im Tierkreis zur Jungfrau macht. Sie ist eine der Hauptfiguren in J.K. Rowlings Harry Potter-Serie, bekannt für ihre außergewöhnliche Intelligenz, Arbeitsmoral und Loyalität. Hermine ist eine muggelstämmige Hexe, die beste Freundin von Harry Potter und Ron Weasley wird. Sie wird dem Haus Gryffindor in Hogwarts zugeteilt. Hermine zeichnet sich durch ihre Liebe zum Lernen, logisches Denken und ihr Engagement für Gerechtigkeit aus, einschließlich ihrer Arbeit mit B.ELFE.R (Bund für Elfenrechte). Sie spielt entscheidende Rollen bei der Niederlage Voldemorts während der gesamten Serie. Hermine heiratet später Ron und wird Zaubereiministerin. Die Figur ist zu einer Ikone für intelligente junge Frauen und bücherliebende Heldinnen geworden.",
          nl: "Hermione Grangers verjaardag is 19 september, waardoor ze een Maagd is in de dierenriem. Ze is een van de hoofdpersonages in J.K. Rowlings Harry Potter-serie, bekend om haar uitzonderlijke intelligentie, werkethiek en loyaliteit. Hermione is een Dreuzelgeboren heks die beste vrienden wordt met Harry Potter en Ron Weasley. Ze wordt ingedeeld bij het huis Griffoendor in Zweinstein. Hermione wordt gekenmerkt door haar liefde voor leren, logisch denken en toewijding aan het strijden voor gerechtigheid, inclusief haar werk met S.P.E.W. (Society for the Promotion of Elfish Welfare). Ze speelt cruciale rollen bij het verslaan van Voldemort door de hele serie. Hermione trouwt later met Ron en wordt Minister van Toverkunst. Het personage is een icoon geworden voor intelligente jonge vrouwen en boekenwurmheldinnen."
        }
      },
      {
        question: {
          en: "Who was the primary artist and writer of the Mickey Mouse comic strip for over 45 years?",
          es: "¿Quién fue el principal artista y escritor de la tira cómica de Mickey Mouse durante más de 45 años?",
          de: "Wer war über 45 Jahre lang der Hauptkünstler und Autor des Mickey Mouse-Comics?",
          nl: "Wie was meer dan 45 jaar de primaire kunstenaar en schrijver van de Mickey Mouse strip?"
        },
        options: [
          { en: "Walt Disney", es: "Walt Disney", de: "Walt Disney", nl: "Walt Disney" },
          { en: "Floyd Gottfredson", es: "Floyd Gottfredson", de: "Floyd Gottfredson", nl: "Floyd Gottfredson" },
          { en: "Ub Iwerks", es: "Ub Iwerks", de: "Ub Iwerks", nl: "Ub Iwerks" },
          { en: "Carl Barks", es: "Carl Barks", de: "Carl Barks", nl: "Carl Barks" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Floyd Gottfredson took over the Mickey Mouse comic strip in 1930 and continued as its primary artist and writer until 1975. He was initially supposed to be a temporary replacement but ended up defining Mickey's character in comics for decades. Gottfredson created elaborate adventure storylines that were more sophisticated than the animated shorts. He introduced many supporting characters and villains, including the Phantom Blot, one of Mickey's most famous adversaries. His work influenced how Mickey was portrayed across all media. Gottfredson received numerous awards for his contributions to comic art. His strips have been collected in multiple volumes by Fantagraphics Books. He's considered one of the most important figures in Disney comic history.",
          es: "Floyd Gottfredson se hizo cargo de la tira cómica de Mickey Mouse en 1930 y continuó como su principal artista y escritor hasta 1975. Inicialmente se suponía que era un reemplazo temporal, pero terminó definiendo el personaje de Mickey en cómics durante décadas. Gottfredson creó elaboradas historias de aventuras que eran más sofisticadas que los cortos animados. Introdujo muchos personajes secundarios y villanos, incluido el Fantasma Negro, uno de los adversarios más famosos de Mickey. Su trabajo influyó en cómo se retrató a Mickey en todos los medios. Gottfredson recibió numerosos premios por sus contribuciones al arte del cómic. Sus tiras han sido recopiladas en múltiples volúmenes por Fantagraphics Books. Es considerado una de las figuras más importantes en la historia de los cómics de Disney.",
          de: "Floyd Gottfredson übernahm 1930 den Mickey Mouse-Comic und blieb bis 1975 dessen Hauptkünstler und Autor. Er sollte zunächst nur ein vorübergehender Ersatz sein, prägte aber letztendlich Mickeys Charakter in Comics über Jahrzehnte. Gottfredson schuf aufwändige Abenteuergeschichten, die anspruchsvoller waren als die animierten Kurzfilme. Er führte viele Nebenfiguren und Schurken ein, darunter das Phantom, einen von Mickeys berühmtesten Gegnern. Seine Arbeit beeinflusste, wie Mickey in allen Medien dargestellt wurde. Gottfredson erhielt zahlreiche Auszeichnungen für seine Beiträge zur Comic-Kunst. Seine Strips wurden in mehreren Bänden von Fantagraphics Books gesammelt. Er gilt als eine der wichtigsten Figuren in der Geschichte der Disney-Comics.",
          nl: "Floyd Gottfredson nam in 1930 de Mickey Mouse strip over en bleef tot 1975 de primaire kunstenaar en schrijver. Hij was aanvankelijk bedoeld als tijdelijke vervanger, maar eindigde met het definiëren van Mickey's karakter in strips voor decennia. Gottfredson creëerde uitgebreide avonturenverhaallijnen die verfijnder waren dan de animatiefilms. Hij introduceerde veel ondersteunende personages en schurken, waaronder de Phantom Blot, een van Mickey's beroemdste tegenstanders. Zijn werk beïnvloedde hoe Mickey werd afgebeeld in alle media. Gottfredson ontving talrijke awards voor zijn bijdragen aan stripkunst. Zijn strips zijn verzameld in meerdere volumes door Fantagraphics Books. Hij wordt beschouwd als een van de belangrijkste figuren in Disney stripgeschiedenis."
        }
      },
      {
        question: {
          en: "What was the name of the organization Hermione Granger founded to promote elf welfare?",
          es: "¿Cuál era el nombre de la organización que Hermione Granger fundó para promover el bienestar de los elfos?",
          de: "Wie hieß die Organisation, die Hermine Granger zur Förderung des Elfenwohls gründete?",
          nl: "Wat was de naam van de organisatie die Hermione Granger oprichtte om het welzijn van elfen te bevorderen?"
        },
        options: [
          { en: "E.L.F. (Elf Liberation Front)", es: "F.L.E. (Frente de Liberación Élfica)", de: "E.B.F. (Elfen-Befreiungsfront)", nl: "E.B.F. (Elfen Bevrijdingsfront)" },
          { en: "S.P.E.W. (Society for the Promotion of Elfish Welfare)", es: "P.E.D.D.O. (Plataforma Élfica de Defensa de los Derechos Obreros)", de: "B.ELFE.R (Bund für Elfenrechte)", nl: "S.T.I.L. (Steun Tot Integratie van de Lagere soorten)" },
          { en: "H.E.L.P. (House-Elf Liberation Program)", es: "A.Y.U.D.A. (Ayuda Y Unión De Asistencia)", de: "H.I.L.F.E. (Hauself-Hilfe)", nl: "H.U.L.P. (Huiself Uitbreiding en Liberalisering Programma)" },
          { en: "E.R.A. (Elf Rights Association)", es: "A.D.E. (Asociación de Derechos Élficos)", de: "E.R.V. (Elfenrechte-Vereinigung)", nl: "E.R.V. (Elfen Rechten Vereniging)" }
        ],
        correctIndex: 1,
        explanation: {
          en: "S.P.E.W. stands for the Society for the Promotion of Elfish Welfare, founded by Hermione Granger in her fourth year at Hogwarts. She was disturbed by the treatment of house-elves as slaves and sought to improve their rights and working conditions. Hermione created badges, collected dues, and tried to recruit members, though many students (including Ron) were skeptical or dismissive of her efforts. She knitted hats and socks to try to trick house-elves into becoming free. While S.P.E.W. was often played for comedy in the books, it demonstrated Hermione's compassion and commitment to social justice. The organization highlighted issues of systemic oppression and the importance of advocacy. Though S.P.E.W. had limited success, it showed Hermione's character development and foreshadowed her later career in magical law reform.",
          es: "P.E.D.D.O. significa Plataforma Élfica de Defensa de los Derechos Obreros, fundada por Hermione Granger en su cuarto año en Hogwarts. Estaba perturbada por el trato de los elfos domésticos como esclavos y buscó mejorar sus derechos y condiciones laborales. Hermione creó insignias, recolectó cuotas e intentó reclutar miembros, aunque muchos estudiantes (incluido Ron) eran escépticos o despectivos de sus esfuerzos. Tejió gorros y calcetines para intentar engañar a los elfos domésticos para que se liberaran. Aunque P.E.D.D.O. a menudo se usó para la comedia en los libros, demostró la compasión y el compromiso de Hermione con la justicia social. La organización destacó cuestiones de opresión sistémica y la importancia de la defensa. Aunque P.E.D.D.O. tuvo un éxito limitado, mostró el desarrollo del personaje de Hermione y presagió su carrera posterior en la reforma de la ley mágica.",
          de: "B.ELFE.R steht für Bund für Elfenrechte, gegründet von Hermine Granger in ihrem vierten Jahr in Hogwarts. Sie war verstört über die Behandlung von Hauselfen als Sklaven und versuchte, ihre Rechte und Arbeitsbedingungen zu verbessern. Hermine fertigte Anstecker an, sammelte Beiträge und versuchte, Mitglieder zu rekrutieren, obwohl viele Schüler (einschließlich Ron) skeptisch oder abweisend gegenüber ihren Bemühungen waren. Sie strickte Hüte und Socken, um zu versuchen, Hauselfen zur Freiheit zu verleiten. Obwohl B.ELFE.R in den Büchern oft komödiantisch dargestellt wurde, zeigte es Hermines Mitgefühl und Engagement für soziale Gerechtigkeit. Die Organisation hob Fragen der systemischen Unterdrückung und die Bedeutung von Advocacy hervor. Obwohl B.ELFE.R begrenzten Erfolg hatte, zeigte es Hermines Charakterentwicklung und deutete auf ihre spätere Karriere in der Reform des magischen Rechts hin.",
          nl: "S.T.I.L. staat voor Steun Tot Integratie van de Lagere soorten (in het Engels S.P.E.W. - Society for the Promotion of Elfish Welfare), opgericht door Hermione Granger in haar vierde jaar op Zweinstein. Ze was verontrust door de behandeling van huiselfen als slaven en probeerde hun rechten en arbeidsomstandigheden te verbeteren. Hermione maakte badges, zamelde contributies in en probeerde leden te werven, hoewel veel studenten (waaronder Ron) sceptisch of afwijzend waren over haar inspanningen. Ze breide hoeden en sokken om huiselfen te proberen te verleiden vrij te worden. Hoewel S.T.I.L. vaak voor komedie werd gebruikt in de boeken, toonde het Hermione's medeleven en toewijding aan sociale rechtvaardigheid. De organisatie benadrukte kwesties van systemische onderdrukking en het belang van belangenbehartiging. Hoewel S.T.I.L. beperkt succes had, toonde het Hermione's karakterontwikkeling en voorspelde het haar latere carrière in hervormingen van magische wetgeving."
        }
      }
    ],

    // Day 20 - September 20th: First Cannes Film Festival (1946), Equal Pay Act (1963), Sophia Loren born (1934)
    day20: [
      {
        question: {
          en: "In what year was the first Cannes Film Festival held?",
          es: "¿En qué año se celebró el primer Festival de Cine de Cannes?",
          de: "In welchem Jahr fanden die ersten Filmfestspiele von Cannes statt?",
          nl: "In welk jaar werd het eerste filmfestival van Cannes gehouden?"
        },
        options: [
          { en: "1936", es: "1936", de: "1936", nl: "1936" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1956", es: "1956", de: "1956", nl: "1956" },
          { en: "1966", es: "1966", de: "1966", nl: "1966" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Cannes Film Festival was held on September 20, 1946, though it had been planned to launch in 1939 before being cancelled due to World War II. The festival was created as a response to the Venice Film Festival, which had become politicized under fascist influence. French minister of education Jean Zay and art historian Philippe Erlanger conceived the idea. The inaugural festival lasted three weeks and featured films from 21 countries. The top prize, the Grand Prix (later renamed the Palme d'Or), was shared among multiple films. The festival takes place annually in May and has become one of the most prestigious film festivals in the world. It's known for glamorous red carpet events, prestigious awards, and launching international film careers.",
          es: "El primer Festival de Cine de Cannes se celebró el 20 de septiembre de 1946, aunque estaba planeado para lanzarse en 1939 antes de ser cancelado debido a la Segunda Guerra Mundial. El festival se creó como respuesta al Festival de Cine de Venecia, que se había politizado bajo la influencia fascista. El ministro francés de educación Jean Zay y el historiador de arte Philippe Erlanger concibieron la idea. El festival inaugural duró tres semanas y presentó películas de 21 países. El premio máximo, el Gran Premio (más tarde rebautizado como la Palma de Oro), fue compartido entre varias películas. El festival se lleva a cabo anualmente en mayo y se ha convertido en uno de los festivales de cine más prestigiosos del mundo. Es conocido por sus glamurosos eventos de alfombra roja, premios prestigiosos y por lanzar carreras cinematográficas internacionales.",
          de: "Die ersten Filmfestspiele von Cannes fanden am 20. September 1946 statt, obwohl sie ursprünglich 1939 starten sollten, bevor sie wegen des Zweiten Weltkriegs abgesagt wurden. Das Festival wurde als Antwort auf die Filmfestspiele von Venedig geschaffen, die unter faschistischem Einfluss politisiert worden waren. Der französische Bildungsminister Jean Zay und der Kunsthistoriker Philippe Erlanger hatten die Idee. Das Eröffnungsfestival dauerte drei Wochen und zeigte Filme aus 21 Ländern. Der Hauptpreis, der Grand Prix (später in Goldene Palme umbenannt), wurde unter mehreren Filmen geteilt. Das Festival findet jährlich im Mai statt und ist zu einem der renommiertesten Filmfestivals der Welt geworden. Es ist bekannt für glamouröse Red-Carpet-Events, prestigeträchtige Auszeichnungen und den Start internationaler Filmkarrieren.",
          nl: "Het eerste filmfestival van Cannes werd gehouden op 20 september 1946, hoewel het was gepland om in 1939 te starten voordat het werd geannuleerd vanwege de Tweede Wereldoorlog. Het festival werd gecreëerd als reactie op het Filmfestival van Venetië, dat was gepolitiseerd onder fascistische invloed. De Franse minister van onderwijs Jean Zay en kunsthistoricus Philippe Erlanger bedachten het idee. Het inaugurele festival duurde drie weken en vertoonde films uit 21 landen. De hoofdprijs, de Grand Prix (later hernoemd tot Gouden Palm), werd gedeeld onder meerdere films. Het festival vindt jaarlijks plaats in mei en is een van de meest prestigieuze filmfestivals ter wereld geworden. Het staat bekend om glamoureuze rode loper evenementen, prestigieuze prijzen en het lanceren van internationale filmcarrières."
        }
      },
      {
        question: {
          en: "The Equal Pay Act of 1963 aimed to abolish wage disparity based on what?",
          es: "La Ley de Igualdad Salarial de 1963 tenía como objetivo abolir la disparidad salarial basada en qué?",
          de: "Der Equal Pay Act von 1963 zielte darauf ab, Lohnunterschiede basierend auf was abzuschaffen?",
          nl: "De Equal Pay Act van 1963 had tot doel loonongelijkheid op basis van wat af te schaffen?"
        },
        options: [
          { en: "Race", es: "Raza", de: "Rasse", nl: "Ras" },
          { en: "Sex", es: "Sexo", de: "Geschlecht", nl: "Geslacht" },
          { en: "Age", es: "Edad", de: "Alter", nl: "Leeftijd" },
          { en: "Religion", es: "Religión", de: "Religion", nl: "Religie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Equal Pay Act of 1963 was signed into law by President John F. Kennedy on June 10, 1963, and went into effect on September 20, 1963. It aimed to abolish wage disparity based on sex, requiring that men and women in the same workplace be given equal pay for equal work. The act was part of Kennedy's New Frontier Program and addressed systematic discrimination where women earned approximately 59 cents for every dollar earned by men. It amended the Fair Labor Standards Act and was the first federal law to address sex discrimination. The act covers differences in wages, benefits, and other compensation. However, significant wage gaps persist today, showing that full equality hasn't been achieved. The act was a landmark step in women's rights and labor law.",
          es: "La Ley de Igualdad Salarial de 1963 fue firmada por el presidente John F. Kennedy el 10 de junio de 1963 y entró en vigor el 20 de septiembre de 1963. Su objetivo era abolir la disparidad salarial basada en el sexo, requiriendo que hombres y mujeres en el mismo lugar de trabajo reciban el mismo salario por el mismo trabajo. La ley fue parte del Programa Nueva Frontera de Kennedy y abordó la discriminación sistemática donde las mujeres ganaban aproximadamente 59 centavos por cada dólar ganado por los hombres. Enmendó la Ley de Normas Justas de Trabajo y fue la primera ley federal en abordar la discriminación sexual. La ley cubre diferencias en salarios, beneficios y otras compensaciones. Sin embargo, brechas salariales significativas persisten hoy, mostrando que no se ha logrado la igualdad total. La ley fue un paso histórico en los derechos de las mujeres y la ley laboral.",
          de: "Der Equal Pay Act von 1963 wurde am 10. Juni 1963 von Präsident John F. Kennedy unterzeichnet und trat am 20. September 1963 in Kraft. Er zielte darauf ab, Lohnunterschiede aufgrund des Geschlechts abzuschaffen und forderte, dass Männer und Frauen am gleichen Arbeitsplatz für gleiche Arbeit gleich bezahlt werden. Das Gesetz war Teil von Kennedys New Frontier-Programm und adressierte systematische Diskriminierung, bei der Frauen etwa 59 Cent für jeden von Männern verdienten Dollar erhielten. Es änderte den Fair Labor Standards Act und war das erste Bundesgesetz zur Bekämpfung von geschlechtsspezifischer Diskriminierung. Das Gesetz deckt Unterschiede bei Löhnen, Leistungen und anderen Vergütungen ab. Allerdings bestehen heute noch erhebliche Lohnunterschiede, was zeigt, dass vollständige Gleichstellung noch nicht erreicht wurde. Das Gesetz war ein Meilenstein in den Frauenrechten und im Arbeitsrecht.",
          nl: "De Equal Pay Act van 1963 werd op 10 juni 1963 door president John F. Kennedy ondertekend en ging op 20 september 1963 in werking. Het was bedoeld om loonongelijkheid op basis van geslacht af te schaffen, waarbij vereist werd dat mannen en vrouwen op dezelfde werkplek gelijk loon ontvangen voor gelijk werk. De wet was onderdeel van Kennedy's New Frontier Programma en adresseerde systematische discriminatie waarbij vrouwen ongeveer 59 cent verdienden voor elke door mannen verdiende dollar. Het wijzigde de Fair Labor Standards Act en was de eerste federale wet die seksuele discriminatie aanpakte. De wet dekt verschillen in lonen, uitkeringen en andere compensaties. Er blijven echter vandaag aanzienlijke loonkloven bestaan, wat aantoont dat volledige gelijkheid nog niet is bereikt. De wet was een mijlpaal in vrouwenrechten en arbeidswetgeving."
        }
      },
      {
        question: {
          en: "Italian actress Sophia Loren, born September 20, 1934, won an Academy Award for which film?",
          es: "La actriz italiana Sophia Loren, nacida el 20 de septiembre de 1934, ganó un Premio de la Academia por qué película?",
          de: "Die italienische Schauspielerin Sophia Loren, geboren am 20. September 1934, gewann einen Oscar für welchen Film?",
          nl: "De Italiaanse actrice Sophia Loren, geboren op 20 september 1934, won een Academy Award voor welke film?"
        },
        options: [
          { en: "La Dolce Vita", es: "La Dolce Vita", de: "Das süße Leben", nl: "La Dolce Vita" },
          { en: "Two Women", es: "Dos mujeres", de: "Und dennoch leben sie", nl: "Twee Vrouwen" },
          { en: "Marriage Italian Style", es: "Matrimonio a la italiana", de: "Hochzeit auf Italienisch", nl: "Italiaans Huwelijk" },
          { en: "Yesterday, Today and Tomorrow", es: "Ayer, hoy y mañana", de: "Gestern, heute und morgen", nl: "Gisteren, Vandaag en Morgen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Sophia Loren won the Academy Award for Best Actress for her role in 'Two Women' (La Ciociara) in 1962, becoming the first actor to win an Oscar for a foreign-language performance. The film, directed by Vittorio De Sica, depicts a mother and daughter's struggle to survive during World War II. Loren's raw, powerful performance was universally acclaimed. She's one of the last surviving stars from Hollywood's Golden Age. Loren has received numerous honors including an Honorary Oscar in 1991, Kennedy Center Honors, and Italy's highest civilian honor. She appeared in over 100 films and became an international sex symbol and style icon. Her partnership with director De Sica produced several classics. At 90, she remains active and celebrated.",
          es: "Sophia Loren ganó el Premio de la Academia a la Mejor Actriz por su papel en 'Dos mujeres' (La Ciociara) en 1962, convirtiéndose en la primera actriz en ganar un Oscar por una actuación en lengua extranjera. La película, dirigida por Vittorio De Sica, representa la lucha de una madre e hija por sobrevivir durante la Segunda Guerra Mundial. La actuación cruda y poderosa de Loren fue aclamada universalmente. Es una de las últimas estrellas sobrevivientes de la Edad de Oro de Hollywood. Loren ha recibido numerosos honores, incluido un Oscar honorífico en 1991, los Honores del Centro Kennedy y el honor civil más alto de Italia. Apareció en más de 100 películas y se convirtió en un símbolo sexual internacional y un ícono de estilo. Su asociación con el director De Sica produjo varios clásicos. A los 90 años, permanece activa y celebrada.",
          de: "Sophia Loren gewann 1962 den Oscar als Beste Hauptdarstellerin für ihre Rolle in 'Und dennoch leben sie' (La Ciociara) und wurde damit die erste Schauspielerin, die einen Oscar für eine fremdsprachige Leistung gewann. Der von Vittorio De Sica inszenierte Film zeigt den Überlebenskampf einer Mutter und Tochter während des Zweiten Weltkriegs. Lorens rohe, kraftvolle Darstellung wurde universell gelobt. Sie ist eine der letzten überlebenden Stars aus Hollywoods Goldenem Zeitalter. Loren erhielt zahlreiche Auszeichnungen, darunter einen Ehren-Oscar 1991, Kennedy Center Honors und Italiens höchste zivile Auszeichnung. Sie trat in über 100 Filmen auf und wurde zum internationalen Sexsymbol und Stilikone. Ihre Partnerschaft mit Regisseur De Sica brachte mehrere Klassiker hervor. Mit 90 Jahren ist sie immer noch aktiv und gefeiert.",
          nl: "Sophia Loren won de Academy Award voor Beste Actrice voor haar rol in 'Twee Vrouwen' (La Ciociara) in 1962, waarmee ze de eerste acteur werd die een Oscar won voor een buitenlandstalige prestatie. De film, geregisseerd door Vittorio De Sica, toont de strijd van een moeder en dochter om te overleven tijdens de Tweede Wereldoorlog. Lorens rauwe, krachtige vertolking werd universeel geprezen. Ze is een van de laatste overlevende sterren uit Hollywood's Gouden Tijdperk. Loren heeft talrijke onderscheidingen ontvangen, waaronder een ere-Oscar in 1991, Kennedy Center Honors en de hoogste civiele onderscheiding van Italië. Ze verscheen in meer dan 100 films en werd een internationaal sekssymbool en stijlicoon. Haar samenwerking met regisseur De Sica produceerde verschillende klassiekers. Op 90-jarige leeftijd blijft ze actief en gevierd."
        }
      },
      {
        question: {
          en: "What is the name of the top prize awarded at the Cannes Film Festival?",
          es: "¿Cuál es el nombre del premio máximo otorgado en el Festival de Cine de Cannes?",
          de: "Wie heißt der Hauptpreis der Filmfestspiele von Cannes?",
          nl: "Wat is de naam van de hoofdprijs die wordt uitgereikt op het filmfestival van Cannes?"
        },
        options: [
          { en: "Golden Lion", es: "León de Oro", de: "Goldener Löwe", nl: "Gouden Leeuw" },
          { en: "Golden Bear", es: "Oso de Oro", de: "Goldener Bär", nl: "Gouden Beer" },
          { en: "Palme d'Or", es: "Palma de Oro", de: "Goldene Palme", nl: "Gouden Palm" },
          { en: "Golden Globe", es: "Globo de Oro", de: "Golden Globe", nl: "Golden Globe" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Palme d'Or (Golden Palm) is the highest prize awarded at the Cannes Film Festival for best film. The award was introduced in 1955 and was designed by Parisian jeweler Lucienne Lazon. The palm design reflects the coat of arms of the city of Cannes. The trophy is cast in 18-carat gold and rests on a crystal base. Winners include legendary directors like Francis Ford Coppola, Martin Scorsese, Quentin Tarantino, and the Dardenne brothers (who've won it twice). The award is chosen by a jury of film industry professionals headed by a prestigious director or actor. Winning the Palme d'Or is considered one of cinema's greatest honors. The Golden Lion is Venice's prize, and the Golden Bear is Berlin's.",
          es: "La Palma de Oro es el premio máximo otorgado en el Festival de Cine de Cannes a la mejor película. El premio se introdujo en 1955 y fue diseñado por el joyero parisino Lucienne Lazon. El diseño de la palma refleja el escudo de armas de la ciudad de Cannes. El trofeo está fundido en oro de 18 quilates y descansa sobre una base de cristal. Los ganadores incluyen directores legendarios como Francis Ford Coppola, Martin Scorsese, Quentin Tarantino y los hermanos Dardenne (que la han ganado dos veces). El premio es elegido por un jurado de profesionales de la industria cinematográfica encabezado por un director o actor prestigioso. Ganar la Palma de Oro se considera uno de los mayores honores del cine. El León de Oro es el premio de Venecia, y el Oso de Oro es el de Berlín.",
          de: "Die Goldene Palme ist der Hauptpreis der Filmfestspiele von Cannes für den besten Film. Die Auszeichnung wurde 1955 eingeführt und vom Pariser Juwelier Lucienne Lazon entworfen. Das Palmendesign spiegelt das Wappen der Stadt Cannes wider. Die Trophäe ist aus 18-karätigem Gold gegossen und ruht auf einem Kristallsockel. Zu den Gewinnern gehören legendäre Regisseure wie Francis Ford Coppola, Martin Scorsese, Quentin Tarantino und die Dardenne-Brüder (die sie zweimal gewonnen haben). Der Preis wird von einer Jury aus Filmindustrie-Profis unter Leitung eines renommierten Regisseurs oder Schauspielers vergeben. Die Goldene Palme zu gewinnen gilt als eine der größten Ehren des Kinos. Der Goldene Löwe ist der Preis von Venedig, und der Goldene Bär ist der von Berlin.",
          nl: "De Gouden Palm is de hoogste prijs die wordt uitgereikt op het filmfestival van Cannes voor de beste film. De prijs werd geïntroduceerd in 1955 en werd ontworpen door de Parijse juwelier Lucienne Lazon. Het palmontwerp weerspiegelt het wapen van de stad Cannes. De trofee is gegoten in 18-karaats goud en rust op een kristallen basis. Winnaars omvatten legendarische regisseurs zoals Francis Ford Coppola, Martin Scorsese, Quentin Tarantino en de gebroeders Dardenne (die het twee keer hebben gewonnen). De prijs wordt gekozen door een jury van filmvakindustrie professionals onder leiding van een prestigieuze regisseur of acteur. Het winnen van de Gouden Palm wordt beschouwd als een van de grootste onderscheidingen in de cinema. De Gouden Leeuw is de prijs van Venetië, en de Gouden Beer is die van Berlijn."
        }
      },
      {
        question: {
          en: "Which president signed the Equal Pay Act into law in 1963?",
          es: "¿Qué presidente firmó la Ley de Igualdad Salarial en 1963?",
          de: "Welcher Präsident unterzeichnete den Equal Pay Act 1963?",
          nl: "Welke president ondertekende de Equal Pay Act in 1963?"
        },
        options: [
          { en: "Dwight D. Eisenhower", es: "Dwight D. Eisenhower", de: "Dwight D. Eisenhower", nl: "Dwight D. Eisenhower" },
          { en: "John F. Kennedy", es: "John F. Kennedy", de: "John F. Kennedy", nl: "John F. Kennedy" },
          { en: "Lyndon B. Johnson", es: "Lyndon B. Johnson", de: "Lyndon B. Johnson", nl: "Lyndon B. Johnson" },
          { en: "Richard Nixon", es: "Richard Nixon", de: "Richard Nixon", nl: "Richard Nixon" }
        ],
        correctIndex: 1,
        explanation: {
          en: "President John F. Kennedy signed the Equal Pay Act into law on June 10, 1963, as part of his New Frontier domestic program. The legislation was championed by Kennedy's Presidential Commission on the Status of Women, chaired by Eleanor Roosevelt until her death in 1962. The act was a response to decades of advocacy by labor unions, women's groups, and civil rights organizations. Kennedy recognized that pay discrimination was both economically inefficient and morally wrong. The signing ceremony included prominent women's rights advocates. Kennedy's support for the act was part of his broader commitment to civil rights, though he was assassinated later that year before seeing its full implementation. The act laid groundwork for subsequent anti-discrimination legislation including Title VII of the Civil Rights Act of 1964.",
          es: "El presidente John F. Kennedy firmó la Ley de Igualdad Salarial el 10 de junio de 1963, como parte de su programa doméstico Nueva Frontera. La legislación fue defendida por la Comisión Presidencial de Kennedy sobre el Estado de las Mujeres, presidida por Eleanor Roosevelt hasta su muerte en 1962. La ley fue una respuesta a décadas de defensa por parte de sindicatos, grupos de mujeres y organizaciones de derechos civiles. Kennedy reconoció que la discriminación salarial era tanto económicamente ineficiente como moralmente incorrecta. La ceremonia de firma incluyó destacadas defensoras de los derechos de las mujeres. El apoyo de Kennedy a la ley fue parte de su compromiso más amplio con los derechos civiles, aunque fue asesinado más tarde ese año antes de ver su implementación completa. La ley sentó las bases para la legislación antidiscriminación posterior, incluido el Título VII de la Ley de Derechos Civiles de 1964.",
          de: "Präsident John F. Kennedy unterzeichnete den Equal Pay Act am 10. Juni 1963 als Teil seines innenpolitischen New Frontier-Programms. Das Gesetz wurde von Kennedys Präsidialkommission zum Status der Frauen befürwortet, die bis zu ihrem Tod 1962 von Eleanor Roosevelt geleitet wurde. Das Gesetz war eine Antwort auf jahrzehntelange Advocacy durch Gewerkschaften, Frauengruppen und Bürgerrechtsorganisationen. Kennedy erkannte, dass Lohndiskriminierung sowohl wirtschaftlich ineffizient als auch moralisch falsch war. An der Unterzeichnungszeremonie nahmen prominente Frauenrechtsaktivistinnen teil. Kennedys Unterstützung für das Gesetz war Teil seines breiteren Engagements für Bürgerrechte, obwohl er später in diesem Jahr ermordet wurde, bevor er dessen vollständige Umsetzung sehen konnte. Das Gesetz legte den Grundstein für nachfolgende Antidiskriminierungsgesetze, einschließlich Titel VII des Civil Rights Act von 1964.",
          nl: "President John F. Kennedy ondertekende de Equal Pay Act op 10 juni 1963, als onderdeel van zijn New Frontier binnenlands programma. De wetgeving werd gechampioned door Kennedy's Presidentiële Commissie over de Status van Vrouwen, voorgezeten door Eleanor Roosevelt tot haar dood in 1962. De wet was een reactie op decennia van belangenbehartiging door vakbonden, vrouwengroepen en burgerrechtenorganisaties. Kennedy erkende dat loondiscriminatie zowel economisch inefficiënt als moreel verkeerd was. De ondertekeningsceremonie omvatte prominente vrouwenrechtenactivisten. Kennedy's steun voor de wet was onderdeel van zijn bredere toewijding aan burgerrechten, hoewel hij later dat jaar werd vermoord voordat hij de volledige implementatie kon zien. De wet legde de basis voor latere antidiscriminatiewetgeving, waaronder Title VII van de Civil Rights Act van 1964."
        }
      }
    ],

    // Day 21 - September 21st: International Day of Peace, Malta independence (1964), Belize independence (1981), Stephen King born (1947)
    day21: [
      {
        question: {
          en: "September 21 is celebrated globally as what United Nations observance?",
          es: "El 21 de septiembre se celebra globalmente como qué observancia de las Naciones Unidas?",
          de: "Der 21. September wird weltweit als welcher UN-Gedenktag gefeiert?",
          nl: "21 september wordt wereldwijd gevierd als welke Verenigde Naties gedenkdag?"
        },
        options: [
          { en: "World Environment Day", es: "Día Mundial del Medio Ambiente", de: "Weltumwelttag", nl: "Wereldmilieudag" },
          { en: "International Day of Peace", es: "Día Internacional de la Paz", de: "Internationaler Tag des Friedens", nl: "Internationale Dag van de Vrede" },
          { en: "Human Rights Day", es: "Día de los Derechos Humanos", de: "Tag der Menschenrechte", nl: "Mensenrechtendag" },
          { en: "World Humanitarian Day", es: "Día Mundial Humanitario", de: "Welttag der humanitären Hilfe", nl: "Wereld Humanitaire Dag" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The International Day of Peace was established by the United Nations General Assembly in 1981 and is observed annually on September 21. The day is dedicated to strengthening ideals of peace both within and among all nations and peoples. In 2001, the General Assembly voted to make the day a period of non-violence and cease-fire. Each year has a different theme focusing on peace-building, conflict resolution, and global cooperation. Activities include peace vigils, educational events, and moments of silence at noon. The UN Peace Bell is rung at headquarters in New York. The day encourages individuals and organizations to promote peace in their communities. It serves as a reminder that peace is achievable through collective effort and understanding.",
          es: "El Día Internacional de la Paz fue establecido por la Asamblea General de las Naciones Unidas en 1981 y se observa anualmente el 21 de septiembre. El día está dedicado a fortalecer los ideales de paz tanto dentro como entre todas las naciones y pueblos. En 2001, la Asamblea General votó para hacer del día un período de no violencia y alto el fuego. Cada año tiene un tema diferente centrado en la construcción de la paz, la resolución de conflictos y la cooperación global. Las actividades incluyen vigilias de paz, eventos educativos y momentos de silencio al mediodía. La Campana de la Paz de la ONU se toca en la sede de Nueva York. El día alienta a individuos y organizaciones a promover la paz en sus comunidades. Sirve como recordatorio de que la paz es alcanzable a través del esfuerzo colectivo y la comprensión.",
          de: "Der Internationale Tag des Friedens wurde 1981 von der Generalversammlung der Vereinten Nationen eingeführt und wird jährlich am 21. September begangen. Der Tag ist der Stärkung der Friedensideale sowohl innerhalb als auch zwischen allen Nationen und Völkern gewidmet. 2001 stimmte die Generalversammlung dafür, den Tag zu einer Zeit der Gewaltlosigkeit und des Waffenstillstands zu machen. Jedes Jahr hat ein anderes Thema, das sich auf Friedensaufbau, Konfliktlösung und globale Zusammenarbeit konzentriert. Zu den Aktivitäten gehören Friedenswachen, Bildungsveranstaltungen und Schweigeminuten um die Mittagszeit. Die UN-Friedensglocke wird am Hauptsitz in New York geläutet. Der Tag ermutigt Einzelpersonen und Organisationen, Frieden in ihren Gemeinden zu fördern. Er dient als Erinnerung daran, dass Frieden durch kollektive Anstrengungen und Verständnis erreichbar ist.",
          nl: "De Internationale Dag van de Vrede werd in 1981 ingesteld door de Algemene Vergadering van de Verenigde Naties en wordt jaarlijks gevierd op 21 september. De dag is gewijd aan het versterken van idealen van vrede zowel binnen als tussen alle naties en volkeren. In 2001 stemde de Algemene Vergadering om van de dag een periode van geweldloosheid en staakt-het-vuren te maken. Elk jaar heeft een ander thema gericht op vredesopbouw, conflictoplossing en wereldwijde samenwerking. Activiteiten omvatten vredeswakes, educatieve evenementen en momenten van stilte om 12 uur 's middags. De VN Vredesklok wordt geluid bij het hoofdkwartier in New York. De dag moedigt individuen en organisaties aan om vrede in hun gemeenschappen te bevorderen. Het dient als herinnering dat vrede haalbaar is door collectieve inspanning en begrip."
        }
      },
      {
        question: {
          en: "Malta gained independence from the United Kingdom on September 21, 1964. What is Malta's capital city?",
          es: "Malta obtuvo su independencia del Reino Unido el 21 de septiembre de 1964. ¿Cuál es la ciudad capital de Malta?",
          de: "Malta erlangte am 21. September 1964 die Unabhängigkeit vom Vereinigten Königreich. Was ist Maltas Hauptstadt?",
          nl: "Malta werd onafhankelijk van het Verenigd Koninkrijk op 21 september 1964. Wat is de hoofdstad van Malta?"
        },
        options: [
          { en: "Mdina", es: "Mdina", de: "Mdina", nl: "Mdina" },
          { en: "Valletta", es: "La Valeta", de: "Valletta", nl: "Valletta" },
          { en: "Sliema", es: "Sliema", de: "Sliema", nl: "Sliema" },
          { en: "Gozo", es: "Gozo", de: "Gozo", nl: "Gozo" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Valletta is the capital city of Malta, named after Jean Parisot de Valette, the Grand Master who successfully defended the island from Ottoman invasion in 1565. The city was founded in 1566 and is one of Europe's smallest capitals, covering just 0.8 square kilometers. Valletta is known for its Baroque architecture and was designated a UNESCO World Heritage Site in 1980. The entire city is an architectural masterpiece with palaces, churches, and fortifications. St. John's Co-Cathedral houses Caravaggio masterpieces. Malta gained independence from Britain in 1964 after 164 years of colonial rule, though Queen Elizabeth II remained Head of State until Malta became a republic in 1974. Today, Malta is an EU member and popular tourist destination.",
          es: "La Valeta es la ciudad capital de Malta, nombrada en honor a Jean Parisot de Valette, el Gran Maestre que defendió exitosamente la isla de la invasión otomana en 1565. La ciudad fue fundada en 1566 y es una de las capitales más pequeñas de Europa, cubriendo solo 0.8 kilómetros cuadrados. La Valeta es conocida por su arquitectura barroca y fue designada Patrimonio de la Humanidad por la UNESCO en 1980. Toda la ciudad es una obra maestra arquitectónica con palacios, iglesias y fortificaciones. La Concatedral de San Juan alberga obras maestras de Caravaggio. Malta obtuvo su independencia de Gran Bretaña en 1964 después de 164 años de dominio colonial, aunque la Reina Isabel II permaneció como Jefa de Estado hasta que Malta se convirtió en república en 1974. Hoy, Malta es miembro de la UE y un destino turístico popular.",
          de: "Valletta ist die Hauptstadt Maltas, benannt nach Jean Parisot de Valette, dem Großmeister, der die Insel 1565 erfolgreich gegen die osmanische Invasion verteidigte. Die Stadt wurde 1566 gegründet und ist mit nur 0,8 Quadratkilometern eine der kleinsten Hauptstädte Europas. Valletta ist für seine barocke Architektur bekannt und wurde 1980 zum UNESCO-Weltkulturerbe erklärt. Die gesamte Stadt ist ein architektonisches Meisterwerk mit Palästen, Kirchen und Befestigungen. Die St. John's Co-Kathedrale beherbergt Meisterwerke von Caravaggio. Malta erlangte 1964 nach 164 Jahren Kolonialherrschaft die Unabhängigkeit von Großbritannien, obwohl Königin Elizabeth II. bis zur Ausrufung der Republik Malta 1974 Staatsoberhaupt blieb. Heute ist Malta EU-Mitglied und ein beliebtes Reiseziel.",
          nl: "Valletta is de hoofdstad van Malta, vernoemd naar Jean Parisot de Valette, de Grootmeester die het eiland in 1565 met succes verdedigde tegen Ottomaanse invasie. De stad werd gesticht in 1566 en is een van Europa's kleinste hoofdsteden, met slechts 0,8 vierkante kilometer. Valletta staat bekend om zijn barokke architectuur en werd in 1980 aangewezen als UNESCO Werelderfgoedlocatie. De hele stad is een architectonisch meesterwerk met paleizen, kerken en vestingwerken. De Sint-Janscokathedraal herbergt meesterwerken van Caravaggio. Malta werd in 1964 onafhankelijk van Groot-Brittannië na 164 jaar koloniale heerschappij, hoewel koningin Elizabeth II staatshoofd bleef totdat Malta in 1974 een republiek werd. Vandaag is Malta lid van de EU en een populaire toeristische bestemming."
        }
      },
      {
        question: {
          en: "Horror author Stephen King, born September 21, 1947, wrote which novel about a rabid dog?",
          es: "El autor de terror Stephen King, nacido el 21 de septiembre de 1947, escribió qué novela sobre un perro rabioso?",
          de: "Horror-Autor Stephen King, geboren am 21. September 1947, schrieb welchen Roman über einen tollwütigen Hund?",
          nl: "Horrorauteur Stephen King, geboren op 21 september 1947, schreef welke roman over een hondsdolle hond?"
        },
        options: [
          { en: "Pet Sematary", es: "Cementerio de animales", de: "Friedhof der Kuscheltiere", nl: "Begraafplaats voor Huisdieren" },
          { en: "Cujo", es: "Cujo", de: "Cujo", nl: "Cujo" },
          { en: "The Stand", es: "Apocalipsis", de: "Das letzte Gefecht", nl: "Het Laatste Oordeel" },
          { en: "It", es: "Eso", de: "Es", nl: "Het" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Stephen King published 'Cujo' in 1981, a horror novel about a friendly St. Bernard dog who contracts rabies from a bat bite and terrorizes a small Maine town. The story focuses on a mother and son trapped in a car while the rabid dog circles outside. King has stated he barely remembers writing the book due to his substance abuse issues at the time. The novel was adapted into a successful 1983 film starring Dee Wallace. King is one of the most prolific and successful authors of all time, with over 60 novels and 200 short stories published. His works have sold more than 350 million copies worldwide. Many of his books have been adapted into films and TV series. He's won numerous awards including the Bram Stoker Award, World Fantasy Award, and National Medal of Arts.",
          es: "Stephen King publicó 'Cujo' en 1981, una novela de terror sobre un amigable perro San Bernardo que contrae rabia por la mordedura de un murciélago y aterroriza un pequeño pueblo de Maine. La historia se centra en una madre y su hijo atrapados en un auto mientras el perro rabioso da vueltas afuera. King ha declarado que apenas recuerda haber escrito el libro debido a sus problemas de abuso de sustancias en ese momento. La novela fue adaptada en una exitosa película de 1983 protagonizada por Dee Wallace. King es uno de los autores más prolíficos y exitosos de todos los tiempos, con más de 60 novelas y 200 cuentos cortos publicados. Sus obras han vendido más de 350 millones de copias en todo el mundo. Muchos de sus libros han sido adaptados en películas y series de TV. Ha ganado numerosos premios, incluido el Premio Bram Stoker, el Premio Mundial de Fantasía y la Medalla Nacional de las Artes.",
          de: "Stephen King veröffentlichte 'Cujo' 1981, einen Horroroman über einen freundlichen Bernhardiner, der durch einen Fledermausbiss Tollwut bekommt und eine kleine Stadt in Maine terrorisiert. Die Geschichte konzentriert sich auf eine Mutter und ihren Sohn, die in einem Auto gefangen sind, während der tollwütige Hund draußen kreist. King hat erklärt, dass er sich kaum an das Schreiben des Buches erinnern kann, aufgrund seiner Substanzmissbrauchsprobleme zu dieser Zeit. Der Roman wurde 1983 mit Dee Wallace in der Hauptrolle erfolgreich verfilmt. King ist einer der produktivsten und erfolgreichsten Autoren aller Zeiten mit über 60 veröffentlichten Romanen und 200 Kurzgeschichten. Seine Werke haben sich über 350 Millionen Mal weltweit verkauft. Viele seiner Bücher wurden in Filme und TV-Serien adaptiert. Er hat zahlreiche Auszeichnungen gewonnen, darunter den Bram Stoker Award, den World Fantasy Award und die National Medal of Arts.",
          nl: "Stephen King publiceerde 'Cujo' in 1981, een horrorrroman over een vriendelijke Sint-Bernardshond die hondsdolheid oploopt door een vleermuizenbeet en een klein stadje in Maine terroriseert. Het verhaal concentreert zich op een moeder en zoon die gevangen zitten in een auto terwijl de hondsdolle hond buiten rondcirkelt. King heeft verklaard dat hij zich nauwelijks kan herinneren het boek te hebben geschreven vanwege zijn middelenmisbruikproblemen in die tijd. De roman werd verfilmd in een succesvolle film uit 1983 met Dee Wallace in de hoofdrol. King is een van de meest productieve en succesvolle auteurs aller tijden, met meer dan 60 romans en 200 korte verhalen gepubliceerd. Zijn werken hebben meer dan 350 miljoen exemplaren verkocht wereldwijd. Veel van zijn boeken zijn verfilmd als films en tv-series. Hij heeft talloze prijzen gewonnen, waaronder de Bram Stoker Award, World Fantasy Award en National Medal of Arts."
        }
      },
      {
        question: {
          en: "Belize gained independence from the United Kingdom on September 21, 1981. What was Belize formerly known as?",
          es: "Belice obtuvo su independencia del Reino Unido el 21 de septiembre de 1981. ¿Cómo se conocía anteriormente a Belice?",
          de: "Belize erlangte am 21. September 1981 die Unabhängigkeit vom Vereinigten Königreich. Wie hieß Belize früher?",
          nl: "Belize werd onafhankelijk van het Verenigd Koninkrijk op 21 september 1981. Hoe stond Belize voorheen bekend?"
        },
        options: [
          { en: "British Guiana", es: "Guayana Británica", de: "Britisch-Guayana", nl: "Brits-Guyana" },
          { en: "British Honduras", es: "Honduras Británica", de: "Britisch-Honduras", nl: "Brits-Honduras" },
          { en: "British Caribbean", es: "Caribe Británico", de: "Britisch-Karibik", nl: "Brits-Caribisch Gebied" },
          { en: "British Central America", es: "Centroamérica Británica", de: "Britisch-Mittelamerika", nl: "Brits-Midden-Amerika" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Belize was formerly known as British Honduras until it gained independence in 1981. The name change to Belize occurred in 1973 in preparation for independence. The country is located on the Caribbean coast of Central America, bordered by Mexico and Guatemala. Belize is the only Central American country where English is the official language, reflecting its British colonial history. The country is known for its diverse ecosystems, including the Belize Barrier Reef, the second-largest in the world. Belize has a rich Mayan heritage with numerous archaeological sites. The population is ethnically diverse, including Creole, Mestizo, Maya, and Garifuna peoples. Despite independence, Belize remains part of the Commonwealth with King Charles III as head of state.",
          es: "Belice se conocía anteriormente como Honduras Británica hasta que obtuvo su independencia en 1981. El cambio de nombre a Belice ocurrió en 1973 en preparación para la independencia. El país está ubicado en la costa caribeña de América Central, bordeado por México y Guatemala. Belice es el único país centroamericano donde el inglés es el idioma oficial, reflejando su historia colonial británica. El país es conocido por sus ecosistemas diversos, incluida la Barrera de Coral de Belice, la segunda más grande del mundo. Belice tiene una rica herencia maya con numerosos sitios arqueológicos. La población es étnicamente diversa, incluidos pueblos criollos, mestizos, mayas y garífunas. A pesar de la independencia, Belice sigue siendo parte de la Commonwealth con el Rey Carlos III como jefe de estado.",
          de: "Belize war früher als Britisch-Honduras bekannt, bis es 1981 unabhängig wurde. Die Namensänderung zu Belize erfolgte 1973 zur Vorbereitung auf die Unabhängigkeit. Das Land liegt an der Karibikküste Mittelamerikas und grenzt an Mexiko und Guatemala. Belize ist das einzige mittelamerikanische Land, in dem Englisch die Amtssprache ist, was seine britische Kolonialgeschichte widerspiegelt. Das Land ist bekannt für seine vielfältigen Ökosysteme, einschließlich des Belize-Barriereriffs, dem zweitgrößten der Welt. Belize hat ein reiches Maya-Erbe mit zahlreichen archäologischen Stätten. Die Bevölkerung ist ethnisch vielfältig, darunter Kreolen, Mestizen, Maya und Garifuna-Völker. Trotz der Unabhängigkeit bleibt Belize Teil des Commonwealth mit König Charles III. als Staatsoberhaupt.",
          nl: "Belize stond voorheen bekend als Brits-Honduras tot het in 1981 onafhankelijk werd. De naamsverandering naar Belize vond plaats in 1973 ter voorbereiding op de onafhankelijkheid. Het land ligt aan de Caribische kust van Midden-Amerika, grenzend aan Mexico en Guatemala. Belize is het enige Midden-Amerikaanse land waar Engels de officiële taal is, wat zijn Britse koloniale geschiedenis weerspiegelt. Het land staat bekend om zijn diverse ecosystemen, waaronder het Belize Barrièrerif, het op een na grootste ter wereld. Belize heeft een rijk Maya-erfgoed met talrijke archeologische sites. De bevolking is etnisch divers, waaronder Creoolse, Mestizo, Maya en Garifuna volkeren. Ondanks onafhankelijkheid blijft Belize deel van het Gemenebest met koning Charles III als staatshoofd."
        }
      },
      {
        question: {
          en: "Which Stephen King novel features a clown named Pennywise?",
          es: "¿Qué novela de Stephen King presenta a un payaso llamado Pennywise?",
          de: "Welcher Stephen King-Roman zeigt einen Clown namens Pennywise?",
          nl: "Welke roman van Stephen King bevat een clown genaamd Pennywise?"
        },
        options: [
          { en: "The Shining", es: "El resplandor", de: "Shining", nl: "The Shining" },
          { en: "Carrie", es: "Carrie", de: "Carrie", nl: "Carrie" },
          { en: "It", es: "Eso", de: "Es", nl: "Het" },
          { en: "Misery", es: "Misery", de: "Sie", nl: "Misery" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'It' is Stephen King's 1986 horror novel featuring Pennywise the Dancing Clown, a shape-shifting entity that preys on children in the fictional town of Derry, Maine. The novel alternates between two time periods, following a group of friends as children in 1958 and as adults in 1985 when they reunite to defeat It once again. The book explores themes of childhood trauma, friendship, and the power of memory. At over 1,100 pages, it's one of King's longest novels. The story was adapted into a 1990 TV miniseries starring Tim Curry as Pennywise, and more recently into two successful films in 2017 and 2019 with Bill Skarsgård. The character of Pennywise has become one of the most iconic villains in horror literature and film.",
          es: "'Eso' es la novela de terror de Stephen King de 1986 que presenta a Pennywise el Payaso Bailarín, una entidad que cambia de forma y se alimenta de niños en la ciudad ficticia de Derry, Maine. La novela alterna entre dos períodos de tiempo, siguiendo a un grupo de amigos cuando eran niños en 1958 y como adultos en 1985 cuando se reúnen para derrotar a Eso una vez más. El libro explora temas de trauma infantil, amistad y el poder de la memoria. Con más de 1,100 páginas, es una de las novelas más largas de King. La historia fue adaptada en una miniserie de televisión de 1990 protagonizada por Tim Curry como Pennywise, y más recientemente en dos películas exitosas en 2017 y 2019 con Bill Skarsgård. El personaje de Pennywise se ha convertido en uno de los villanos más icónicos de la literatura de terror y el cine.",
          de: "'Es' ist Stephen Kings Horrorrroman von 1986 mit Pennywise dem tanzenden Clown, einer gestaltwandelnden Entität, die Kinder in der fiktiven Stadt Derry, Maine, jagt. Der Roman wechselt zwischen zwei Zeitperioden und folgt einer Gruppe von Freunden als Kinder im Jahr 1958 und als Erwachsene im Jahr 1985, als sie sich wieder vereinen, um Es erneut zu besiegen. Das Buch erforscht Themen wie Kindheitstrauma, Freundschaft und die Macht der Erinnerung. Mit über 1.100 Seiten ist es einer von Kings längsten Romanen. Die Geschichte wurde 1990 als TV-Miniserie mit Tim Curry als Pennywise adaptiert und in jüngerer Zeit in zwei erfolgreiche Filme 2017 und 2019 mit Bill Skarsgård. Die Figur Pennywise ist zu einem der ikonischsten Schurken in der Horror-Literatur und im Film geworden.",
          nl: "'Het' is Stephen Kings horrorrroman uit 1986 met Pennywise de Dansende Clown, een gedaanteveranderend wezen dat jaagt op kinderen in het fictieve stadje Derry, Maine. De roman wisselt tussen twee tijdsperioden en volgt een groep vrienden als kinderen in 1958 en als volwassenen in 1985 wanneer ze zich herenigen om Het opnieuw te verslaan. Het boek verkent thema's van kindheitstrauma, vriendschap en de kracht van herinnering. Met meer dan 1.100 pagina's is het een van Kings langste romans. Het verhaal werd verfilmd als een tv-miniserie in 1990 met Tim Curry als Pennywise, en meer recentelijk in twee succesvolle films in 2017 en 2019 met Bill Skarsgård. Het personage Pennywise is een van de meest iconische schurken in horror literatuur en film geworden."
        }
      }
    ],

    // Day 22 - September 22nd: Autumn equinox (usually), First Hobbit published (1937), Mali independence (1960)
    day22: [
      {
        question: {
          en: "September 22 (or 23) usually marks which astronomical event in the Northern Hemisphere?",
          es: "El 22 de septiembre (o 23) generalmente marca qué evento astronómico en el Hemisferio Norte?",
          de: "Der 22. September (oder 23.) markiert normalerweise welches astronomische Ereignis auf der Nordhalbkugel?",
          nl: "22 september (of 23) markeert gewoonlijk welke astronomische gebeurtenis op het noordelijk halfrond?"
        },
        options: [
          { en: "Summer solstice", es: "Solsticio de verano", de: "Sommersonnenwende", nl: "Zomerzonnewende" },
          { en: "Winter solstice", es: "Solsticio de invierno", de: "Wintersonnenwende", nl: "Winterzonnewende" },
          { en: "Autumn equinox", es: "Equinoccio de otoño", de: "Herbst-Tagundnachtgleiche", nl: "Herfst-equinox" },
          { en: "Spring equinox", es: "Equinoccio de primavera", de: "Frühlings-Tagundnachtgleiche", nl: "Lente-equinox" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The autumn (autumnal) equinox typically occurs around September 22 or 23 each year, marking the official start of autumn in the Northern Hemisphere. During an equinox, day and night are approximately equal in length everywhere on Earth. The word 'equinox' comes from Latin 'aequus' (equal) and 'nox' (night). This occurs when Earth's axis is tilted neither toward nor away from the Sun, and the Sun crosses the celestial equator. After the autumn equinox, nights become longer than days in the Northern Hemisphere, while the opposite occurs in the Southern Hemisphere where it marks the spring equinox. The exact date varies slightly each year due to the calendar system and Earth's elliptical orbit. Ancient cultures worldwide marked this event with festivals and celebrations.",
          es: "El equinoccio de otoño típicamente ocurre alrededor del 22 o 23 de septiembre cada año, marcando el comienzo oficial del otoño en el Hemisferio Norte. Durante un equinoccio, el día y la noche tienen aproximadamente la misma duración en todas partes de la Tierra. La palabra 'equinoccio' proviene del latín 'aequus' (igual) y 'nox' (noche). Esto ocurre cuando el eje de la Tierra no está inclinado ni hacia ni alejándose del Sol, y el Sol cruza el ecuador celeste. Después del equinoccio de otoño, las noches se vuelven más largas que los días en el Hemisferio Norte, mientras que lo opuesto ocurre en el Hemisferio Sur donde marca el equinoccio de primavera. La fecha exacta varía ligeramente cada año debido al sistema de calendario y la órbita elíptica de la Tierra. Culturas antiguas en todo el mundo marcaban este evento con festivales y celebraciones.",
          de: "Die Herbst-Tagundnachtgleiche findet typischerweise um den 22. oder 23. September jeden Jahres statt und markiert den offiziellen Beginn des Herbstes auf der Nordhalbkugel. Während einer Tagundnachtgleiche sind Tag und Nacht überall auf der Erde ungefähr gleich lang. Das Wort 'Äquinoktium' stammt vom lateinischen 'aequus' (gleich) und 'nox' (Nacht). Dies geschieht, wenn die Erdachse weder zur Sonne hin noch von ihr weg geneigt ist und die Sonne den Himmelsäquator kreuzt. Nach der Herbst-Tagundnachtgleiche werden die Nächte länger als die Tage auf der Nordhalbkugel, während auf der Südhalbkugel das Gegenteil eintritt, wo es die Frühlings-Tagundnachtgleiche markiert. Das genaue Datum variiert jedes Jahr leicht aufgrund des Kalendersystems und der elliptischen Umlaufbahn der Erde. Antike Kulturen weltweit markierten dieses Ereignis mit Festen und Feiern.",
          nl: "De herfst-equinox vindt gewoonlijk plaats rond 22 of 23 september elk jaar en markeert de officiële start van de herfst op het noordelijk halfrond. Tijdens een equinox zijn dag en nacht ongeveer even lang overal op aarde. Het woord 'equinox' komt van het Latijnse 'aequus' (gelijk) en 'nox' (nacht). Dit gebeurt wanneer de aardas noch naar de zon toe noch ervan weg helt, en de zon de hemelequator kruist. Na de herfst-equinox worden nachten langer dan dagen op het noordelijk halfrond, terwijl het tegenovergestelde gebeurt op het zuidelijk halfrond waar het de lente-equinox markeert. De exacte datum varieert elk jaar enigszins vanwege het kalendersysteem en de elliptische baan van de aarde. Oude culturen wereldwijd markeerden deze gebeurtenis met festivals en vieringen."
        }
      },
      {
        question: {
          en: "J.R.R. Tolkien's novel 'The Hobbit' was first published on September 21, 1937. What is the main character's name?",
          es: "La novela 'El Hobbit' de J.R.R. Tolkien fue publicada por primera vez el 21 de septiembre de 1937. ¿Cuál es el nombre del personaje principal?",
          de: "J.R.R. Tolkiens Roman 'Der Hobbit' wurde erstmals am 21. September 1937 veröffentlicht. Wie heißt die Hauptfigur?",
          nl: "J.R.R. Tolkiens roman 'De Hobbit' werd voor het eerst gepubliceerd op 21 september 1937. Wat is de naam van het hoofdpersonage?"
        },
        options: [
          { en: "Frodo Baggins", es: "Frodo Bolsón", de: "Frodo Beutlin", nl: "Frodo Balings" },
          { en: "Gandalf", es: "Gandalf", de: "Gandalf", nl: "Gandalf" },
          { en: "Bilbo Baggins", es: "Bilbo Bolsón", de: "Bilbo Beutlin", nl: "Bilbo Balings" },
          { en: "Thorin", es: "Thorin", de: "Thorin", nl: "Thorin" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Bilbo Baggins is the protagonist of 'The Hobbit, or There and Back Again,' first published on September 21, 1937. The story follows Bilbo, a respectable hobbit who lives in the Shire, on his unexpected adventure with thirteen dwarves and the wizard Gandalf to reclaim treasure from the dragon Smaug. Tolkien initially wrote the book for his children, and it became immensely popular, eventually leading to 'The Lord of the Rings' trilogy where Bilbo's nephew Frodo takes center stage. The book established Middle-earth as one of literature's most beloved fantasy worlds. Tolkien was a professor at Oxford University specializing in Anglo-Saxon literature. The Hobbit has sold over 100 million copies and been translated into more than 50 languages. It was adapted into successful films by Peter Jackson released in 2012-2014.",
          es: "Bilbo Bolsón es el protagonista de 'El Hobbit, o ida y vuelta otra vez', publicado por primera vez el 21 de septiembre de 1937. La historia sigue a Bilbo, un hobbit respetable que vive en la Comarca, en su aventura inesperada con trece enanos y el mago Gandalf para reclamar un tesoro del dragón Smaug. Tolkien escribió inicialmente el libro para sus hijos, y se volvió inmensamente popular, llevando eventualmente a la trilogía 'El Señor de los Anillos' donde el sobrino de Bilbo, Frodo, toma el papel central. El libro estableció la Tierra Media como uno de los mundos de fantasía más queridos de la literatura. Tolkien era profesor en la Universidad de Oxford especializado en literatura anglosajona. El Hobbit ha vendido más de 100 millones de copias y ha sido traducido a más de 50 idiomas. Fue adaptado en películas exitosas por Peter Jackson estrenadas en 2012-2014.",
          de: "Bilbo Beutlin ist der Protagonist von 'Der Hobbit oder Hin und zurück', erstmals veröffentlicht am 21. September 1937. Die Geschichte folgt Bilbo, einem respektablen Hobbit, der im Auenland lebt, auf seinem unerwarteten Abenteuer mit dreizehn Zwergen und dem Zauberer Gandalf, um einen Schatz vom Drachen Smaug zurückzuerobern. Tolkien schrieb das Buch ursprünglich für seine Kinder, und es wurde immens populär und führte schließlich zur Trilogie 'Der Herr der Ringe', in der Bilbos Neffe Frodo im Mittelpunkt steht. Das Buch etablierte Mittelerde als eine der beliebtesten Fantasy-Welten der Literatur. Tolkien war Professor an der Universität Oxford mit Spezialisierung auf angelsächsische Literatur. Der Hobbit hat sich über 100 Millionen Mal verkauft und wurde in mehr als 50 Sprachen übersetzt. Es wurde von Peter Jackson erfolgreich verfilmt, die Filme erschienen 2012-2014.",
          nl: "Bilbo Balings is de hoofdpersoon van 'De Hobbit, of daar en weer terug', voor het eerst gepubliceerd op 21 september 1937. Het verhaal volgt Bilbo, een respectabele hobbit die in de Gouw woont, op zijn onverwachte avontuur met dertien dwergen en de tovenaar Gandalf om schat terug te vorderen van de draak Smaug. Tolkien schreef het boek aanvankelijk voor zijn kinderen, en het werd immens populair, wat uiteindelijk leidde tot de trilogie 'In de Ban van de Ring' waarin Bilbo's neef Frodo centraal staat. Het boek vestigde Midden-aarde als een van de meest geliefde fantasiewerelden in de literatuur. Tolkien was professor aan de Universiteit van Oxford gespecialiseerd in Angelsaksische literatuur. De Hobbit heeft meer dan 100 miljoen exemplaren verkocht en is vertaald in meer dan 50 talen. Het werd verfilmd door Peter Jackson in succesvolle films uitgebracht in 2012-2014."
        }
      },
      {
        question: {
          en: "Mali gained independence from France on September 22, 1960. What is Mali's capital city?",
          es: "Mali obtuvo su independencia de Francia el 22 de septiembre de 1960. ¿Cuál es la ciudad capital de Mali?",
          de: "Mali erlangte am 22. September 1960 die Unabhängigkeit von Frankreich. Was ist Malis Hauptstadt?",
          nl: "Mali werd onafhankelijk van Frankrijk op 22 september 1960. Wat is de hoofdstad van Mali?"
        },
        options: [
          { en: "Dakar", es: "Dakar", de: "Dakar", nl: "Dakar" },
          { en: "Abidjan", es: "Abiyán", de: "Abidjan", nl: "Abidjan" },
          { en: "Bamako", es: "Bamako", de: "Bamako", nl: "Bamako" },
          { en: "Niamey", es: "Niamey", de: "Niamey", nl: "Niamey" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Bamako is the capital and largest city of Mali, located on the Niger River in the southwestern part of the country. The city has been inhabited since the Paleolithic era and became an important trading center along trans-Saharan trade routes. Mali gained independence from France on September 22, 1960, initially as part of the Mali Federation with Senegal, which dissolved two months later. The country is named after the Mali Empire, which flourished from the 13th to 16th centuries and was known for its wealth, particularly under Mansa Musa, often cited as one of the richest people in history. Mali is home to ancient cities like Timbuktu, a historic center of Islamic learning. The country faces challenges including poverty and political instability but has a rich cultural heritage including distinctive music traditions.",
          es: "Bamako es la capital y ciudad más grande de Mali, ubicada en el río Níger en la parte suroeste del país. La ciudad ha estado habitada desde la era Paleolítica y se convirtió en un importante centro comercial a lo largo de las rutas comerciales trans-saharianas. Mali obtuvo su independencia de Francia el 22 de septiembre de 1960, inicialmente como parte de la Federación de Mali con Senegal, que se disolvió dos meses después. El país lleva el nombre del Imperio de Mali, que floreció del siglo XIII al XVI y era conocido por su riqueza, particularmente bajo Mansa Musa, a menudo citado como una de las personas más ricas de la historia. Mali es hogar de ciudades antiguas como Tombuctú, un centro histórico de aprendizaje islámico. El país enfrenta desafíos que incluyen pobreza e inestabilidad política pero tiene una rica herencia cultural incluyendo tradiciones musicales distintivas.",
          de: "Bamako ist die Hauptstadt und größte Stadt von Mali, am Niger-Fluss im südwestlichen Teil des Landes gelegen. Die Stadt ist seit der Altsteinzeit bewohnt und wurde zu einem wichtigen Handelszentrum entlang transsaharischer Handelsrouten. Mali erlangte am 22. September 1960 die Unabhängigkeit von Frankreich, zunächst als Teil der Mali-Föderation mit Senegal, die sich zwei Monate später auflöste. Das Land ist nach dem Mali-Reich benannt, das vom 13. bis 16. Jahrhundert blühte und für seinen Reichtum bekannt war, besonders unter Mansa Musa, der oft als einer der reichsten Menschen der Geschichte genannt wird. Mali beherbergt antike Städte wie Timbuktu, ein historisches Zentrum islamischen Lernens. Das Land steht vor Herausforderungen wie Armut und politischer Instabilität, hat aber ein reiches kulturelles Erbe einschließlich unverwechselbarer Musiktraditionen.",
          nl: "Bamako is de hoofdstad en grootste stad van Mali, gelegen aan de rivier de Niger in het zuidwestelijke deel van het land. De stad is bewoond sinds het Paleolithicum en werd een belangrijk handelscentrum langs trans-Sahara handelsroutes. Mali werd onafhankelijk van Frankrijk op 22 september 1960, aanvankelijk als deel van de Mali Federatie met Senegal, die twee maanden later werd ontbonden. Het land is vernoemd naar het Mali-rijk, dat floreerde van de 13e tot de 16e eeuw en bekend stond om zijn rijkdom, vooral onder Mansa Musa, vaak genoemd als een van de rijkste mensen in de geschiedenis. Mali herbergt oude steden zoals Timboektoe, een historisch centrum van islamitisch leren. Het land wordt geconfronteerd met uitdagingen zoals armoede en politieke instabiliteit maar heeft een rijk cultureel erfgoed inclusief onderscheidende muziektradities."
        }
      },
      {
        question: {
          en: "What is 18 × 3?",
          es: "¿Cuánto es 18 × 3?",
          de: "Was ist 18 × 3?",
          nl: "Hoeveel is 18 × 3?"
        },
        options: [
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "54", es: "54", de: "54", nl: "54" },
          { en: "51", es: "51", de: "51", nl: "51" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "Which season begins with the autumn equinox in the Northern Hemisphere?",
          es: "¿Qué estación comienza con el equinoccio de otoño en el Hemisferio Norte?",
          de: "Welche Jahreszeit beginnt mit der Herbst-Tagundnachtgleiche auf der Nordhalbkugel?",
          nl: "Welk seizoen begint met de herfst-equinox op het noordelijk halfrond?"
        },
        options: [
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Autumn", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" }
        ],
        correctIndex: 2
      }
    ],

    // Day 23 - September 23rd: Neptune discovered (1846), Saudi Arabia founded (1932), Ray Charles born (1930)
    day23: [
      {
        question: {
          en: "On September 23, 1846, which planet was first observed by telescope after its existence was mathematically predicted?",
          es: "El 23 de septiembre de 1846, ¿qué planeta fue observado por primera vez por telescopio después de que su existencia fuera predicha matemáticamente?",
          de: "Am 23. September 1846 wurde welcher Planet erstmals durch ein Teleskop beobachtet, nachdem seine Existenz mathematisch vorhergesagt wurde?",
          nl: "Op 23 september 1846, welke planeet werd voor het eerst waargenomen door een telescoop nadat zijn bestaan wiskundig was voorspeld?"
        },
        options: [
          { en: "Uranus", es: "Urano", de: "Uranus", nl: "Uranus" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
          { en: "Pluto", es: "Plutón", de: "Pluto", nl: "Pluto" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Neptune was discovered on September 23, 1846, by German astronomer Johann Gottfried Galle at the Berlin Observatory, using calculations by French mathematician Urbain Le Verrier. This was the first planet found through mathematical prediction rather than empirical observation. Le Verrier calculated Neptune's position based on perturbations in Uranus's orbit. Neptune is the eighth and farthest known planet from the Sun in our solar system. It's an ice giant with powerful winds reaching up to 2,100 km/h, the fastest in the solar system. Neptune is about 17 times Earth's mass and takes 165 Earth years to complete one orbit. The planet has 14 known moons, with Triton being the largest. Neptune appears deep blue due to methane in its atmosphere. It was named after the Roman god of the sea.",
          es: "Neptuno fue descubierto el 23 de septiembre de 1846 por el astrónomo alemán Johann Gottfried Galle en el Observatorio de Berlín, usando cálculos del matemático francés Urbain Le Verrier. Este fue el primer planeta encontrado a través de predicción matemática en lugar de observación empírica. Le Verrier calculó la posición de Neptuno basándose en perturbaciones en la órbita de Urano. Neptuno es el octavo y más lejano planeta conocido del Sol en nuestro sistema solar. Es un gigante de hielo con vientos poderosos que alcanzan hasta 2,100 km/h, los más rápidos del sistema solar. Neptuno tiene aproximadamente 17 veces la masa de la Tierra y tarda 165 años terrestres en completar una órbita. El planeta tiene 14 lunas conocidas, siendo Tritón la más grande. Neptuno aparece azul profundo debido al metano en su atmósfera. Fue nombrado en honor al dios romano del mar.",
          de: "Neptun wurde am 23. September 1846 vom deutschen Astronomen Johann Gottfried Galle an der Berliner Sternwarte entdeckt, basierend auf Berechnungen des französischen Mathematikers Urbain Le Verrier. Dies war der erste Planet, der durch mathematische Vorhersage statt durch empirische Beobachtung gefunden wurde. Le Verrier berechnete Neptuns Position basierend auf Störungen in Uranus' Umlaufbahn. Neptun ist der achte und am weitesten entfernte bekannte Planet von der Sonne in unserem Sonnensystem. Er ist ein Eisriese mit mächtigen Winden, die bis zu 2.100 km/h erreichen, die schnellsten im Sonnensystem. Neptun hat etwa die 17-fache Masse der Erde und benötigt 165 Erdenjahre für einen Umlauf. Der Planet hat 14 bekannte Monde, wobei Triton der größte ist. Neptun erscheint tiefblau aufgrund von Methan in seiner Atmosphäre. Er wurde nach dem römischen Gott des Meeres benannt.",
          nl: "Neptunus werd ontdekt op 23 september 1846 door de Duitse astronoom Johann Gottfried Galle bij de Berlijnse Sterrenwacht, gebruikmakend van berekeningen van de Franse wiskundige Urbain Le Verrier. Dit was de eerste planeet die gevonden werd door wiskundige voorspelling in plaats van empirische waarneming. Le Verrier berekende Neptunus' positie op basis van verstoringen in Uranus' baan. Neptunus is de achtste en verst bekende planeet van de zon in ons zonnestelsel. Het is een ijsreus met krachtige winden die snelheden bereiken tot 2.100 km/u, de snelste in het zonnestelsel. Neptunus is ongeveer 17 keer de massa van de aarde en doet er 165 aardjaren over om één baan te voltooien. De planeet heeft 14 bekende manen, waarvan Triton de grootste is. Neptunus verschijnt diepblauw vanwege methaan in zijn atmosfeer. Het werd vernoemd naar de Romeinse god van de zee."
        }
      },
      {
        question: {
          en: "The Kingdom of Saudi Arabia was officially founded on September 23, 1932. What is the capital city of Saudi Arabia?",
          es: "El Reino de Arabia Saudita fue fundado oficialmente el 23 de septiembre de 1932. ¿Cuál es la ciudad capital de Arabia Saudita?",
          de: "Das Königreich Saudi-Arabien wurde offiziell am 23. September 1932 gegründet. Was ist die Hauptstadt von Saudi-Arabien?",
          nl: "Het Koninkrijk Saoedi-Arabië werd officieel gesticht op 23 september 1932. Wat is de hoofdstad van Saoedi-Arabië?"
        },
        options: [
          { en: "Dubai", es: "Dubái", de: "Dubai", nl: "Dubai" },
          { en: "Mecca", es: "La Meca", de: "Mekka", nl: "Mekka" },
          { en: "Riyadh", es: "Riad", de: "Riad", nl: "Riyad" },
          { en: "Jeddah", es: "Yeda", de: "Dschidda", nl: "Jeddah" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Riyadh is the capital and largest city of Saudi Arabia, located in the center of the Arabian Peninsula. The Kingdom of Saudi Arabia was proclaimed on September 23, 1932, by King Abdulaziz ibn Saud, who unified the country after decades of conquest. Saudi Arabia is the birthplace of Islam and home to its two holiest cities, Mecca and Medina. The country is the world's largest oil exporter and has one of the fastest-growing economies in the Arab world. Saudi Arabia follows Islamic law and is an absolute monarchy ruled by the House of Saud. The country covers most of the Arabian Peninsula and includes vast deserts. September 23 is celebrated annually as Saudi National Day. The modern Saudi state is the result of unification of four distinct regions: Najd, Hejaz, Asir, and Al-Ahsa.",
          es: "Riad es la capital y ciudad más grande de Arabia Saudita, ubicada en el centro de la Península Arábiga. El Reino de Arabia Saudita fue proclamado el 23 de septiembre de 1932 por el Rey Abdulaziz ibn Saud, quien unificó el país después de décadas de conquista. Arabia Saudita es el lugar de nacimiento del Islam y hogar de sus dos ciudades más sagradas, La Meca y Medina. El país es el mayor exportador de petróleo del mundo y tiene una de las economías de más rápido crecimiento en el mundo árabe. Arabia Saudita sigue la ley islámica y es una monarquía absoluta gobernada por la Casa de Saud. El país cubre la mayor parte de la Península Arábiga e incluye vastos desiertos. El 23 de septiembre se celebra anualmente como el Día Nacional Saudí. El estado saudí moderno es el resultado de la unificación de cuatro regiones distintas: Najd, Hiyaz, Asir y Al-Ahsa.",
          de: "Riad ist die Hauptstadt und größte Stadt Saudi-Arabiens, gelegen im Zentrum der Arabischen Halbinsel. Das Königreich Saudi-Arabien wurde am 23. September 1932 von König Abdulaziz ibn Saud proklamiert, der das Land nach Jahrzehnten der Eroberung einte. Saudi-Arabien ist die Geburtsstätte des Islam und Heimat seiner zwei heiligsten Städte, Mekka und Medina. Das Land ist der weltweit größte Ölexporteur und hat eine der am schnellsten wachsenden Volkswirtschaften in der arabischen Welt. Saudi-Arabien folgt islamischem Recht und ist eine absolute Monarchie, regiert vom Haus Saud. Das Land bedeckt den größten Teil der Arabischen Halbinsel und umfasst riesige Wüsten. Der 23. September wird jährlich als saudischer Nationalfeiertag gefeiert. Der moderne saudische Staat ist das Ergebnis der Vereinigung von vier verschiedenen Regionen: Nadschd, Hedschas, Asir und Al-Ahsa.",
          nl: "Riyad is de hoofdstad en grootste stad van Saoedi-Arabië, gelegen in het centrum van het Arabische schiereiland. Het Koninkrijk Saoedi-Arabië werd uitgeroepen op 23 september 1932 door koning Abdulaziz ibn Saud, die het land verenigde na decennia van verovering. Saoedi-Arabië is de geboorteplaats van de islam en thuisbasis van zijn twee heiligste steden, Mekka en Medina. Het land is 's werelds grootste olie-exporteur en heeft een van de snelst groeiende economieën in de Arabische wereld. Saoedi-Arabië volgt de islamitische wet en is een absolute monarchie geregeerd door het Huis van Saud. Het land beslaat het grootste deel van het Arabische schiereiland en omvat uitgestrekte woestijnen. 23 september wordt jaarlijks gevierd als de Saoedische Nationale Dag. De moderne Saoedische staat is het resultaat van eenwording van vier verschillende regio's: Najd, Hejaz, Asir en Al-Ahsa."
        }
      },
      {
        question: {
          en: "Legendary musician Ray Charles, born September 23, 1930, pioneered which music genre blending gospel, blues, and jazz?",
          es: "El legendario músico Ray Charles, nacido el 23 de septiembre de 1930, fue pionero de qué género musical que mezcla gospel, blues y jazz?",
          de: "Der legendäre Musiker Ray Charles, geboren am 23. September 1930, war Pionier welches Musikgenres, das Gospel, Blues und Jazz vermischt?",
          nl: "De legendarische muzikant Ray Charles, geboren op 23 september 1930, was pionier van welk muziekgenre dat gospel, blues en jazz vermengde?"
        },
        options: [
          { en: "Rock and roll", es: "Rock and roll", de: "Rock and Roll", nl: "Rock-and-roll" },
          { en: "Soul", es: "Soul", de: "Soul", nl: "Soul" },
          { en: "Country", es: "Country", de: "Country", nl: "Country" },
          { en: "Hip hop", es: "Hip hop", de: "Hip-Hop", nl: "Hiphop" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ray Charles was born on September 23, 1930, in Albany, Georgia, and became known as 'The Genius' and 'The Father of Soul.' He pioneered the genre of soul music by blending gospel, blues, jazz, and R&B. Charles lost his sight at age seven due to glaucoma but went on to become one of the most influential musicians of the 20th century. His breakthrough hit 'What'd I Say' (1959) helped establish soul music. Other iconic songs include 'Georgia on My Mind,' 'Hit the Road Jack,' and 'I Can't Stop Loving You.' Charles was one of the first African American musicians to be granted artistic control by a mainstream record company. He won 17 Grammy Awards during his lifetime. His 2004 biopic 'Ray,' starring Jamie Foxx, won multiple Academy Awards. Charles was inducted into the Rock and Roll Hall of Fame in 1986.",
          es: "Ray Charles nació el 23 de septiembre de 1930 en Albany, Georgia, y se hizo conocido como 'El Genio' y 'El Padre del Soul'. Fue pionero del género de música soul al mezclar gospel, blues, jazz y R&B. Charles perdió la vista a los siete años debido al glaucoma, pero llegó a ser uno de los músicos más influyentes del siglo XX. Su exitoso hit 'What'd I Say' (1959) ayudó a establecer la música soul. Otras canciones icónicas incluyen 'Georgia on My Mind', 'Hit the Road Jack' e 'I Can't Stop Loving You'. Charles fue uno de los primeros músicos afroamericanos en recibir control artístico de una compañía discográfica convencional. Ganó 17 premios Grammy durante su vida. Su película biográfica de 2004 'Ray', protagonizada por Jamie Foxx, ganó múltiples premios de la Academia. Charles fue incluido en el Salón de la Fama del Rock and Roll en 1986.",
          de: "Ray Charles wurde am 23. September 1930 in Albany, Georgia, geboren und wurde als 'Das Genie' und 'Der Vater des Soul' bekannt. Er war Pionier des Soul-Genres, indem er Gospel, Blues, Jazz und R&B vermischte. Charles verlor im Alter von sieben Jahren sein Augenlicht aufgrund eines Glaukoms, wurde aber zu einem der einflussreichsten Musiker des 20. Jahrhunderts. Sein Durchbruchshit 'What'd I Say' (1959) half, die Soul-Musik zu etablieren. Andere ikonische Songs sind 'Georgia on My Mind', 'Hit the Road Jack' und 'I Can't Stop Loving You'. Charles war einer der ersten afroamerikanischen Musiker, denen von einer Mainstream-Plattenfirma künstlerische Kontrolle gewährt wurde. Er gewann während seines Lebens 17 Grammy Awards. Sein Biopic 'Ray' von 2004 mit Jamie Foxx gewann mehrere Academy Awards. Charles wurde 1986 in die Rock and Roll Hall of Fame aufgenommen.",
          nl: "Ray Charles werd geboren op 23 september 1930 in Albany, Georgia, en stond bekend als 'Het Genie' en 'De Vader van de Soul'. Hij was pionier van het soul-genre door gospel, blues, jazz en R&B te vermengen. Charles verloor zijn gezichtsvermogen op zevenjarige leeftijd door glaucoom maar werd een van de meest invloedrijke muzikanten van de 20e eeuw. Zijn doorbraakhit 'What'd I Say' (1959) hielp soulmuziek te vestigen. Andere iconische nummers zijn 'Georgia on My Mind', 'Hit the Road Jack' en 'I Can't Stop Loving You'. Charles was een van de eerste Afro-Amerikaanse muzikanten die artistieke controle kreeg van een mainstream platenmaatschappij. Hij won 17 Grammy Awards tijdens zijn leven. Zijn biopic 'Ray' uit 2004, met Jamie Foxx, won meerdere Academy Awards. Charles werd in 1986 opgenomen in de Rock and Roll Hall of Fame."
        }
      },
      {
        question: {
          en: "What is 72 ÷ 8?",
          es: "¿Cuánto es 72 ÷ 8?",
          de: "Was ist 72 ÷ 8?",
          nl: "Hoeveel is 72 ÷ 8?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 1
      },
      {
        question: {
          en: "Which planet in our solar system is farthest from the Sun?",
          es: "¿Qué planeta en nuestro sistema solar está más lejos del Sol?",
          de: "Welcher Planet in unserem Sonnensystem ist am weitesten von der Sonne entfernt?",
          nl: "Welke planeet in ons zonnestelsel is het verst van de zon?"
        },
        options: [
          { en: "Uranus", es: "Urano", de: "Uranus", nl: "Uranus" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
        ],
        correctIndex: 2
      }
    ],

    // Day 24 - September 24th: Muppet Show premieres (1976), Guinea-Bissau independence (1973), F. Scott Fitzgerald born (1896)
    day24: [
      {
        question: {
          en: "The Muppet Show premiered on September 24, 1976. Who created the Muppets?",
          es: "El Muppet Show se estrenó el 24 de septiembre de 1976. ¿Quién creó los Muppets?",
          de: "Die Muppet Show hatte am 24. September 1976 Premiere. Wer schuf die Muppets?",
          nl: "The Muppet Show ging in première op 24 september 1976. Wie creëerde de Muppets?"
        },
        options: [
          { en: "Walt Disney", es: "Walt Disney", de: "Walt Disney", nl: "Walt Disney" },
          { en: "Jim Henson", es: "Jim Henson", de: "Jim Henson", nl: "Jim Henson" },
          { en: "Stan Lee", es: "Stan Lee", de: "Stan Lee", nl: "Stan Lee" },
          { en: "Charles Schulz", es: "Charles Schulz", de: "Charles Schulz", nl: "Charles Schulz" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Muppet Show premiered on September 24, 1976, created by puppeteer Jim Henson. The variety show featured Kermit the Frog as host, along with beloved characters like Miss Piggy, Fozzie Bear, Gonzo, and Animal. The show ran for five seasons and became a worldwide phenomenon, broadcast in over 100 countries. Each episode featured celebrity guest stars performing alongside the Muppets. Jim Henson pioneered innovative puppetry techniques and created numerous other projects including Sesame Street characters and films like The Dark Crystal. The Muppets have remained cultural icons for decades. After Henson's death in 1990, his legacy continued through The Jim Henson Company. The Muppets were acquired by Disney in 2004 and continue to entertain audiences through films, TV shows, and streaming content.",
          es: "El Muppet Show se estrenó el 24 de septiembre de 1976, creado por el titiritero Jim Henson. El programa de variedades presentaba a la Rana René como anfitrión, junto con personajes queridos como la Cerdita Peggy, el Oso Fozzie, Gonzo y Animal. El programa duró cinco temporadas y se convirtió en un fenómeno mundial, transmitido en más de 100 países. Cada episodio presentaba estrellas invitadas famosas actuando junto a los Muppets. Jim Henson fue pionero en técnicas innovadoras de títeres y creó numerosos otros proyectos, incluidos personajes de Plaza Sésamo y películas como El cristal oscuro. Los Muppets han permanecido como íconos culturales durante décadas. Después de la muerte de Henson en 1990, su legado continuó a través de The Jim Henson Company. Los Muppets fueron adquiridos por Disney en 2004 y continúan entreteniendo al público a través de películas, programas de TV y contenido de streaming.",
          de: "Die Muppet Show hatte am 24. September 1976 Premiere, geschaffen vom Puppenspieler Jim Henson. Die Varietéshow zeigte Kermit den Frosch als Gastgeber, zusammen mit beliebten Charakteren wie Miss Piggy, Fozzie Bär, Gonzo und Animal. Die Show lief fünf Staffeln und wurde zu einem weltweiten Phänomen, das in über 100 Ländern ausgestrahlt wurde. Jede Episode zeigte prominente Gaststars, die zusammen mit den Muppets auftraten. Jim Henson war Pionier innovativer Puppentechniken und schuf zahlreiche andere Projekte, darunter Sesamstraßen-Charaktere und Filme wie Der dunkle Kristall. Die Muppets sind seit Jahrzehnten kulturelle Ikonen geblieben. Nach Hensons Tod 1990 wurde sein Vermächtnis durch The Jim Henson Company fortgesetzt. Die Muppets wurden 2004 von Disney erworben und unterhalten das Publikum weiterhin durch Filme, TV-Shows und Streaming-Inhalte.",
          nl: "The Muppet Show ging in première op 24 september 1976, gecreëerd door poppenspeler Jim Henson. De varietéshow had Kermit de Kikker als gastheer, samen met geliefde personages zoals Miss Piggy, Fozzie Beer, Gonzo en Animal. De show liep vijf seizoenen en werd een wereldwijd fenomeen, uitgezonden in meer dan 100 landen. Elke aflevering had beroemde gaststerren die optraden naast de Muppets. Jim Henson was pionier van innovatieve poppentechnieken en creëerde talrijke andere projecten, waaronder Sesamstraat-personages en films zoals The Dark Crystal. De Muppets zijn tientallen jaren lang culturele iconen gebleven. Na Hensons dood in 1990 werd zijn nalatenschap voortgezet door The Jim Henson Company. De Muppets werden in 2004 overgenomen door Disney en blijven het publiek vermaken via films, tv-shows en streaming-inhoud."
        }
      },
      {
        question: {
          en: "Guinea-Bissau gained independence from Portugal on September 24, 1973. What is Guinea-Bissau's capital city?",
          es: "Guinea-Bisáu obtuvo su independencia de Portugal el 24 de septiembre de 1973. ¿Cuál es la ciudad capital de Guinea-Bisáu?",
          de: "Guinea-Bissau erlangte am 24. September 1973 die Unabhängigkeit von Portugal. Was ist die Hauptstadt von Guinea-Bissau?",
          nl: "Guinee-Bissau werd onafhankelijk van Portugal op 24 september 1973. Wat is de hoofdstad van Guinee-Bissau?"
        },
        options: [
          { en: "Conakry", es: "Conakri", de: "Conakry", nl: "Conakry" },
          { en: "Bissau", es: "Bisáu", de: "Bissau", nl: "Bissau" },
          { en: "Banjul", es: "Banjul", de: "Banjul", nl: "Banjul" },
          { en: "Dakar", es: "Dakar", de: "Dakar", nl: "Dakar" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bissau is the capital and largest city of Guinea-Bissau, located on the Atlantic coast of West Africa. Guinea-Bissau declared independence from Portugal on September 24, 1973, after a long war of liberation led by the PAIGC (African Party for the Independence of Guinea and Cape Verde). Portugal officially recognized independence in 1974 following the Carnation Revolution. The country is named 'Guinea-Bissau' to distinguish it from neighboring Guinea (Guinea-Conakry). Guinea-Bissau is one of the world's poorest countries despite having natural resources. The official language is Portuguese, though Crioulo is widely spoken. The country has a tropical climate and is known for its diverse wildlife including hippos and various bird species. Guinea-Bissau has faced political instability with multiple coups since independence.",
          es: "Bisáu es la capital y ciudad más grande de Guinea-Bisáu, ubicada en la costa atlántica de África Occidental. Guinea-Bisáu declaró su independencia de Portugal el 24 de septiembre de 1973, después de una larga guerra de liberación liderada por el PAIGC (Partido Africano para la Independencia de Guinea y Cabo Verde). Portugal reconoció oficialmente la independencia en 1974 tras la Revolución de los Claveles. El país se llama 'Guinea-Bisáu' para distinguirlo de la vecina Guinea (Guinea-Conakry). Guinea-Bisáu es uno de los países más pobres del mundo a pesar de tener recursos naturales. El idioma oficial es el portugués, aunque el criollo se habla ampliamente. El país tiene un clima tropical y es conocido por su diversa vida silvestre, incluidos hipopótamos y varias especies de aves. Guinea-Bisáu ha enfrentado inestabilidad política con múltiples golpes de estado desde la independencia.",
          de: "Bissau ist die Hauptstadt und größte Stadt von Guinea-Bissau, an der Atlantikküste Westafrikas gelegen. Guinea-Bissau erklärte am 24. September 1973 die Unabhängigkeit von Portugal nach einem langen Befreiungskrieg unter Führung der PAIGC (Afrikanische Partei für die Unabhängigkeit von Guinea und Kap Verde). Portugal erkannte die Unabhängigkeit 1974 nach der Nelkenrevolution offiziell an. Das Land heißt 'Guinea-Bissau', um es vom benachbarten Guinea (Guinea-Conakry) zu unterscheiden. Guinea-Bissau ist trotz natürlicher Ressourcen eines der ärmsten Länder der Welt. Die Amtssprache ist Portugiesisch, obwohl Crioulo weit verbreitet ist. Das Land hat ein tropisches Klima und ist bekannt für seine vielfältige Tierwelt, darunter Flusspferde und verschiedene Vogelarten. Guinea-Bissau hat seit der Unabhängigkeit politische Instabilität mit mehreren Staatsstreichen erlebt.",
          nl: "Bissau is de hoofdstad en grootste stad van Guinee-Bissau, gelegen aan de Atlantische kust van West-Afrika. Guinee-Bissau verklaarde op 24 september 1973 onafhankelijkheid van Portugal na een lange bevrijdingsoorlog geleid door de PAIGC (Afrikaanse Partij voor de Onafhankelijkheid van Guinee en Kaapverdië). Portugal erkende de onafhankelijkheid officieel in 1974 na de Anjerrevolutie. Het land heet 'Guinee-Bissau' om het te onderscheiden van buurland Guinee (Guinee-Conakry). Guinee-Bissau is een van de armste landen ter wereld ondanks natuurlijke hulpbronnen. De officiële taal is Portugees, hoewel Crioulo wijdverbreid wordt gesproken. Het land heeft een tropisch klimaat en staat bekend om zijn diverse wildlife waaronder nijlpaarden en verschillende vogelsoorten. Guinee-Bissau heeft sinds de onafhankelijkheid politieke instabiliteit gekend met meerdere staatsgrepen."
        }
      },
      {
        question: {
          en: "F. Scott Fitzgerald, born September 24, 1896, wrote which famous novel about the American Dream set in the 1920s?",
          es: "F. Scott Fitzgerald, nacido el 24 de septiembre de 1896, escribió qué famosa novela sobre el sueño americano ambientada en los años 1920?",
          de: "F. Scott Fitzgerald, geboren am 24. September 1896, schrieb welchen berühmten Roman über den amerikanischen Traum, der in den 1920er Jahren spielt?",
          nl: "F. Scott Fitzgerald, geboren op 24 september 1896, schreef welke beroemde roman over de Amerikaanse Droom die zich afspeelt in de jaren 1920?"
        },
        options: [
          { en: "To Kill a Mockingbird", es: "Matar un ruiseñor", de: "Wer die Nachtigall stört", nl: "Spaar de spotvogel" },
          { en: "The Catcher in the Rye", es: "El guardián entre el centeno", de: "Der Fänger im Roggen", nl: "De vanger in het graan" },
          { en: "The Great Gatsby", es: "El gran Gatsby", de: "Der große Gatsby", nl: "De grote Gatsby" },
          { en: "The Grapes of Wrath", es: "Las uvas de la ira", de: "Früchte des Zorns", nl: "Vruchten der wrake" }
        ],
        correctIndex: 2,
        explanation: {
          en: "F. Scott Fitzgerald was born on September 24, 1896, in St. Paul, Minnesota, and became one of the greatest American writers. His masterpiece 'The Great Gatsby,' published in 1925, is considered one of the greatest American novels. The book explores themes of wealth, love, and the corruption of the American Dream through the mysterious millionaire Jay Gatsby and narrator Nick Carraway. Set in the Jazz Age of the 1920s, it captures the excess and disillusionment of the era. Though not initially successful, the novel gained recognition after Fitzgerald's death in 1940. Fitzgerald also wrote 'This Side of Paradise,' 'Tender Is the Night,' and 'The Beautiful and Damned.' He and his wife Zelda embodied the glamorous, troubled lifestyle of the Jazz Age. The Great Gatsby has been adapted into multiple films, most notably the 2013 version starring Leonardo DiCaprio.",
          es: "F. Scott Fitzgerald nació el 24 de septiembre de 1896 en St. Paul, Minnesota, y se convirtió en uno de los más grandes escritores estadounidenses. Su obra maestra 'El gran Gatsby', publicada en 1925, es considerada una de las mejores novelas estadounidenses. El libro explora temas de riqueza, amor y la corrupción del sueño americano a través del misterioso millonario Jay Gatsby y el narrador Nick Carraway. Ambientada en la Era del Jazz de los años 1920, captura el exceso y la desilusión de la época. Aunque no tuvo éxito inicialmente, la novela ganó reconocimiento después de la muerte de Fitzgerald en 1940. Fitzgerald también escribió 'Este lado del paraíso', 'Suave es la noche' y 'Hermosos y malditos'. Él y su esposa Zelda encarnaron el estilo de vida glamoroso y problemático de la Era del Jazz. El gran Gatsby ha sido adaptado en múltiples películas, especialmente la versión de 2013 protagonizada por Leonardo DiCaprio.",
          de: "F. Scott Fitzgerald wurde am 24. September 1896 in St. Paul, Minnesota, geboren und wurde zu einem der größten amerikanischen Schriftsteller. Sein Meisterwerk 'Der große Gatsby', veröffentlicht 1925, gilt als einer der größten amerikanischen Romane. Das Buch erkundet Themen wie Reichtum, Liebe und die Korruption des amerikanischen Traums durch den mysteriösen Millionär Jay Gatsby und den Erzähler Nick Carraway. Es spielt im Jazz-Zeitalter der 1920er Jahre und fängt den Exzess und die Ernüchterung der Ära ein. Obwohl zunächst nicht erfolgreich, gewann der Roman nach Fitzgeralds Tod 1940 Anerkennung. Fitzgerald schrieb auch 'Diesseits vom Paradies', 'Zärtlich ist die Nacht' und 'Die Schönen und Verdammten'. Er und seine Frau Zelda verkörperten den glamourösen, problematischen Lebensstil des Jazz-Zeitalters. Der große Gatsby wurde mehrfach verfilmt, insbesondere die Version von 2013 mit Leonardo DiCaprio.",
          nl: "F. Scott Fitzgerald werd geboren op 24 september 1896 in St. Paul, Minnesota, en werd een van de grootste Amerikaanse schrijvers. Zijn meesterwerk 'De grote Gatsby', gepubliceerd in 1925, wordt beschouwd als een van de grootste Amerikaanse romans. Het boek verkent thema's van rijkdom, liefde en de corruptie van de Amerikaanse Droom via de mysterieuze miljonair Jay Gatsby en verteller Nick Carraway. Het speelt zich af in het Jazz-tijdperk van de jaren 1920 en vangt de overvloed en desillusie van het tijdperk. Hoewel aanvankelijk niet succesvol, kreeg de roman erkenning na Fitzgeralds dood in 1940. Fitzgerald schreef ook 'This Side of Paradise', 'Tender Is the Night' en 'The Beautiful and Damned'. Hij en zijn vrouw Zelda belichaamden de glamoureuze, problematische levensstijl van het Jazz-tijdperk. De grote Gatsby is meerdere keren verfilmd, met name de versie uit 2013 met Leonardo DiCaprio."
        }
      },
      {
        question: {
          en: "What is 15 + 27?",
          es: "¿Cuánto es 15 + 27?",
          de: "Was ist 15 + 27?",
          nl: "Hoeveel is 15 + 27?"
        },
        options: [
          { en: "41", es: "41", de: "41", nl: "41" },
          { en: "43", es: "43", de: "43", nl: "43" },
          { en: "42", es: "42", de: "42", nl: "42" },
          { en: "40", es: "40", de: "40", nl: "40" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "Which famous Muppet character is a green frog?",
          es: "¿Qué famoso personaje de los Muppets es una rana verde?",
          de: "Welcher berühmte Muppet-Charakter ist ein grüner Frosch?",
          nl: "Welk beroemd Muppet-personage is een groene kikker?"
        },
        options: [
          { en: "Fozzie Bear", es: "Oso Fozzie", de: "Fozzie Bär", nl: "Fozzie Beer" },
          { en: "Gonzo", es: "Gonzo", de: "Gonzo", nl: "Gonzo" },
          { en: "Kermit", es: "René", de: "Kermit", nl: "Kermit" },
          { en: "Animal", es: "Animal", de: "Animal", nl: "Animal" }
        ],
        correctIndex: 2
      }
    ],

    // Day 25 - September 25th: First published crossword puzzle (1913), Pacific Ocean discovered by Europeans (1513), Will Smith born (1968)
    day25: [
      {
        question: {
          en: "The first crossword puzzle was published on September 25, 1913. What do we call a puzzle with numbered squares for words?",
          es: "El primer crucigrama se publicó el 25 de septiembre de 1913. ¿Cómo llamamos a un rompecabezas con cuadrados numerados para palabras?",
          de: "Das erste Kreuzworträtsel wurde am 25. September 1913 veröffentlicht. Wie nennen wir ein Rätsel mit nummerierten Feldern für Wörter?",
          nl: "De eerste kruiswoordpuzzel werd gepubliceerd op 25 september 1913. Hoe noemen we een puzzel met genummerde vakjes voor woorden?"
        },
        options: [
          { en: "Sudoku", es: "Sudoku", de: "Sudoku", nl: "Sudoku" },
          { en: "Jigsaw puzzle", es: "Rompecabezas", de: "Puzzle", nl: "Legpuzzel" },
          { en: "Crossword", es: "Crucigrama", de: "Kreuzworträtsel", nl: "Kruiswoordpuzzel" },
          { en: "Word search", es: "Sopa de letras", de: "Wortsuche", nl: "Woordzoeker" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first crossword puzzle was published on September 25, 1913, in the New York World newspaper. Created by journalist Arthur Wynne, it was called a 'word-cross' puzzle and had a diamond shape. The first puzzle had simple clues and no black squares—just a hollow diamond grid. Crosswords quickly became popular and spread to other newspapers across America and eventually worldwide. The format evolved over time, with black squares added to create separate words. Today, crossword puzzles are enjoyed by millions of people daily in newspapers, books, and online. The New York Times crossword, started in 1942, is considered the gold standard. Crosswords are praised for keeping minds sharp and expanding vocabulary. Modern crosswords range from easy Monday puzzles to challenging Saturday and Sunday editions.",
          es: "El primer crucigrama se publicó el 25 de septiembre de 1913 en el periódico New York World. Creado por el periodista Arthur Wynne, se llamaba 'word-cross' y tenía forma de diamante. El primer rompecabezas tenía pistas simples y sin cuadros negros, solo una cuadrícula de diamante hueca. Los crucigramas rápidamente se volvieron populares y se extendieron a otros periódicos en América y eventualmente en todo el mundo. El formato evolucionó con el tiempo, con cuadros negros agregados para crear palabras separadas. Hoy en día, millones de personas disfrutan crucigramas diariamente en periódicos, libros y en línea. El crucigrama del New York Times, iniciado en 1942, es considerado el estándar de oro. Los crucigramas son elogiados por mantener la mente aguda y expandir el vocabulario. Los crucigramas modernos van desde rompecabezas fáciles de lunes hasta desafiantes ediciones de sábado y domingo.",
          de: "Das erste Kreuzworträtsel wurde am 25. September 1913 in der Zeitung New York World veröffentlicht. Erstellt vom Journalisten Arthur Wynne, wurde es 'word-cross' genannt und hatte Diamantform. Das erste Rätsel hatte einfache Hinweise und keine schwarzen Felder—nur ein hohles Diamantgitter. Kreuzworträtsel wurden schnell populär und verbreiteten sich in anderen Zeitungen in Amerika und schließlich weltweit. Das Format entwickelte sich im Laufe der Zeit, mit schwarzen Feldern, die hinzugefügt wurden, um separate Wörter zu erstellen. Heute werden Kreuzworträtsel täglich von Millionen Menschen in Zeitungen, Büchern und online genossen. Das New York Times Kreuzworträtsel, 1942 gestartet, gilt als Goldstandard. Kreuzworträtsel werden gelobt, um den Geist scharf zu halten und den Wortschatz zu erweitern. Moderne Kreuzworträtsel reichen von einfachen Montagsrätseln bis zu herausfordernden Samstag- und Sonntagsausgaben.",
          nl: "De eerste kruiswoordpuzzel werd gepubliceerd op 25 september 1913 in de krant New York World. Gemaakt door journalist Arthur Wynne, werd het een 'word-cross' puzzel genoemd en had een diamantvorm. De eerste puzzel had eenvoudige aanwijzingen en geen zwarte vakjes—alleen een hol diamantraster. Kruiswoordpuzzels werden snel populair en verspreidden zich naar andere kranten in Amerika en uiteindelijk wereldwijd. Het format evolueerde in de loop van de tijd, met zwarte vakjes toegevoegd om aparte woorden te creëren. Vandaag worden kruiswoordpuzzels dagelijks genoten door miljoenen mensen in kranten, boeken en online. De New York Times kruiswoordpuzzel, gestart in 1942, wordt beschouwd als de gouden standaard. Kruiswoordpuzzels worden geprezen voor het scherp houden van de geest en het uitbreiden van vocabulaire. Moderne kruiswoordpuzzels variëren van gemakkelijke maandagpuzzels tot uitdagende zaterdag- en zondageditites."
        }
      },
      {
        question: {
          en: "On September 25, 1513, Vasco Núñez de Balboa became the first European to see the Pacific Ocean from the Americas. What is the Pacific Ocean?",
          es: "El 25 de septiembre de 1513, Vasco Núñez de Balboa se convirtió en el primer europeo en ver el Océano Pacífico desde las Américas. ¿Qué es el Océano Pacífico?",
          de: "Am 25. September 1513 wurde Vasco Núñez de Balboa der erste Europäer, der den Pazifischen Ozean von Amerika aus sah. Was ist der Pazifische Ozean?",
          nl: "Op 25 september 1513 werd Vasco Núñez de Balboa de eerste Europeaan die de Stille Oceaan zag vanaf Amerika. Wat is de Stille Oceaan?"
        },
        options: [
          { en: "The world's smallest ocean", es: "El océano más pequeño del mundo", de: "Der kleinste Ozean der Welt", nl: "De kleinste oceaan ter wereld" },
          { en: "A large lake", es: "Un lago grande", de: "Ein großer See", nl: "Een groot meer" },
          { en: "The world's largest ocean", es: "El océano más grande del mundo", de: "Der größte Ozean der Welt", nl: "De grootste oceaan ter wereld" },
          { en: "A river", es: "Un río", de: "Ein Fluss", nl: "Een rivier" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On September 25, 1513, Spanish explorer Vasco Núñez de Balboa became the first European to see the Pacific Ocean from the New World. After crossing the Isthmus of Panama, he reached the Pacific coast and claimed the ocean and all its shores for Spain. He called it the 'South Sea' because he traveled south to reach it. The Pacific Ocean is the world's largest and deepest ocean, covering more than 63 million square miles—larger than all of Earth's land area combined. The name 'Pacific' means peaceful, given by explorer Ferdinand Magellan in 1521 because he encountered calm waters during his voyage. The Pacific contains more than half of the world's free water and thousands of islands. It borders Asia, Australia, and the Americas. Balboa's discovery opened the door for European exploration and colonization of the Pacific region.",
          es: "El 25 de septiembre de 1513, el explorador español Vasco Núñez de Balboa se convirtió en el primer europeo en ver el Océano Pacífico desde el Nuevo Mundo. Después de cruzar el Istmo de Panamá, llegó a la costa del Pacífico y reclamó el océano y todas sus costas para España. Lo llamó el 'Mar del Sur' porque viajó hacia el sur para alcanzarlo. El Océano Pacífico es el océano más grande y profundo del mundo, cubriendo más de 63 millones de millas cuadradas, más grande que toda el área terrestre de la Tierra combinada. El nombre 'Pacífico' significa pacífico, dado por el explorador Fernando de Magallanes en 1521 porque encontró aguas tranquilas durante su viaje. El Pacífico contiene más de la mitad del agua libre del mundo y miles de islas. Limita con Asia, Australia y las Américas. El descubrimiento de Balboa abrió la puerta para la exploración y colonización europea de la región del Pacífico.",
          de: "Am 25. September 1513 wurde der spanische Entdecker Vasco Núñez de Balboa der erste Europäer, der den Pazifischen Ozean von der Neuen Welt aus sah. Nach der Überquerung der Landenge von Panama erreichte er die Pazifikküste und beanspruchte den Ozean und alle seine Küsten für Spanien. Er nannte ihn das 'Südmeer', weil er nach Süden reiste, um ihn zu erreichen. Der Pazifische Ozean ist der größte und tiefste Ozean der Welt und bedeckt mehr als 63 Millionen Quadratmeilen—größer als die gesamte Landfläche der Erde zusammen. Der Name 'Pazifik' bedeutet friedlich, gegeben vom Entdecker Ferdinand Magellan 1521, weil er während seiner Reise ruhige Gewässer antraf. Der Pazifik enthält mehr als die Hälfte des freien Wassers der Welt und Tausende von Inseln. Er grenzt an Asien, Australien und die Amerikas. Balboas Entdeckung öffnete die Tür für europäische Erkundung und Kolonisierung der Pazifikregion.",
          nl: "Op 25 september 1513 werd de Spaanse ontdekkingsreiziger Vasco Núñez de Balboa de eerste Europeaan die de Stille Oceaan zag vanaf de Nieuwe Wereld. Na het oversteken van de Landengte van Panama bereikte hij de Pacifische kust en claimde de oceaan en al zijn kusten voor Spanje. Hij noemde het de 'Zuidzee' omdat hij naar het zuiden reisde om het te bereiken. De Stille Oceaan is 's werelds grootste en diepste oceaan, met een oppervlakte van meer dan 63 miljoen vierkante mijl—groter dan alle landoppervlakte van de aarde samen. De naam 'Pacific' betekent vreedzaam, gegeven door ontdekkingsreiziger Ferdinand Magellan in 1521 omdat hij kalme wateren tegenkwam tijdens zijn reis. De Stille Oceaan bevat meer dan de helft van het vrije water van de wereld en duizenden eilanden. Het grenst aan Azië, Australië en Amerika. Balboa's ontdekking opende de deur voor Europese verkenning en kolonisatie van de Pacifische regio."
        }
      },
      {
        question: {
          en: "Actor Will Smith was born on September 25, 1968. In which science fiction film series did Will Smith fight against aliens?",
          es: "El actor Will Smith nació el 25 de septiembre de 1968. ¿En qué serie de películas de ciencia ficción luchó Will Smith contra extraterrestres?",
          de: "Schauspieler Will Smith wurde am 25. September 1968 geboren. In welcher Science-Fiction-Filmreihe kämpfte Will Smith gegen Außerirdische?",
          nl: "Acteur Will Smith werd geboren op 25 september 1968. In welke sciencefictionfilmserie vocht Will Smith tegen buitenaardse wezens?"
        },
        options: [
          { en: "Star Wars", es: "Star Wars", de: "Star Wars", nl: "Star Wars" },
          { en: "Men in Black", es: "Men in Black", de: "Men in Black", nl: "Men in Black" },
          { en: "Star Trek", es: "Star Trek", de: "Star Trek", nl: "Star Trek" },
          { en: "The Matrix", es: "Matrix", de: "Matrix", nl: "The Matrix" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Will Smith was born on September 25, 1968, in Philadelphia, Pennsylvania. He became one of Hollywood's biggest stars, known for blockbuster films. In the 'Men in Black' series (1997, 2002, 2012), Smith played Agent J, fighting aliens alongside Tommy Lee Jones' Agent K. The franchise became hugely successful, earning over $1.7 billion worldwide. Smith also starred in 'Independence Day' (1996), another alien invasion film. His other major films include 'The Pursuit of Happyness,' 'I Am Legend,' 'Ali,' and 'King Richard' (for which he won an Oscar). Smith started as a rapper in the duo DJ Jazzy Jeff & The Fresh Prince, winning the first-ever Grammy for rap in 1989. He then starred in the sitcom 'The Fresh Prince of Bel-Air' (1990-1996). Smith is one of only two actors to have eight consecutive films gross over $100 million.",
          es: "Will Smith nació el 25 de septiembre de 1968 en Filadelfia, Pensilvania. Se convirtió en una de las estrellas más grandes de Hollywood, conocido por películas taquilleras. En la serie 'Men in Black' (1997, 2002, 2012), Smith interpretó al Agente J, luchando contra extraterrestres junto al Agente K de Tommy Lee Jones. La franquicia tuvo un gran éxito, recaudando más de $1.7 mil millones en todo el mundo. Smith también protagonizó 'Independence Day' (1996), otra película de invasión alienígena. Sus otras películas importantes incluyen 'En busca de la felicidad', 'Soy leyenda', 'Ali' y 'King Richard' (por la cual ganó un Oscar). Smith comenzó como rapero en el dúo DJ Jazzy Jeff & The Fresh Prince, ganando el primer Grammy para rap en 1989. Luego protagonizó la comedia 'El Príncipe del Rap' (1990-1996). Smith es uno de los únicos dos actores que tiene ocho películas consecutivas que recaudaron más de $100 millones.",
          de: "Will Smith wurde am 25. September 1968 in Philadelphia, Pennsylvania, geboren. Er wurde zu einem der größten Stars Hollywoods, bekannt für Blockbuster-Filme. In der 'Men in Black'-Reihe (1997, 2002, 2012) spielte Smith Agent J und kämpfte gegen Außerirdische an der Seite von Tommy Lee Jones' Agent K. Das Franchise wurde sehr erfolgreich und spielte weltweit über 1,7 Milliarden Dollar ein. Smith spielte auch in 'Independence Day' (1996), einem weiteren Alien-Invasionsfilm. Seine anderen großen Filme sind 'Das Streben nach Glück', 'I Am Legend', 'Ali' und 'King Richard' (für den er einen Oscar gewann). Smith begann als Rapper im Duo DJ Jazzy Jeff & The Fresh Prince und gewann 1989 den allerersten Grammy für Rap. Dann spielte er in der Sitcom 'Der Prinz von Bel-Air' (1990-1996). Smith ist einer von nur zwei Schauspielern, die acht aufeinanderfolgende Filme mit über 100 Millionen Dollar Einnahmen hatten.",
          nl: "Will Smith werd geboren op 25 september 1968 in Philadelphia, Pennsylvania. Hij werd een van de grootste sterren van Hollywood, bekend om blockbusterfilms. In de 'Men in Black'-serie (1997, 2002, 2012) speelde Smith Agent J, vechtend tegen buitenaardse wezens naast Tommy Lee Jones' Agent K. De franchise werd enorm succesvol en verdiende wereldwijd meer dan $1,7 miljard. Smith speelde ook in 'Independence Day' (1996), een andere buitenaardse invasiefilm. Zijn andere grote films zijn 'The Pursuit of Happyness', 'I Am Legend', 'Ali' en 'King Richard' (waarvoor hij een Oscar won). Smith begon als rapper in het duo DJ Jazzy Jeff & The Fresh Prince en won in 1989 de allereerste Grammy voor rap. Daarna speelde hij in de sitcom 'The Fresh Prince of Bel-Air' (1990-1996). Smith is een van slechts twee acteurs die acht opeenvolgende films heeft met meer dan $100 miljoen opbrengst."
        }
      },
      {
        question: {
          en: "What is 18 + 37?",
          es: "¿Cuánto es 18 + 37?",
          de: "Was ist 18 + 37?",
          nl: "Hoeveel is 18 + 37?"
        },
        options: [
          { en: "54", es: "54", de: "54", nl: "54" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "55", es: "55", de: "55", nl: "55" },
          { en: "53", es: "53", de: "53", nl: "53" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "In which newspaper was the first crossword puzzle published?",
          es: "¿En qué periódico se publicó el primer crucigrama?",
          de: "In welcher Zeitung wurde das erste Kreuzworträtsel veröffentlicht?",
          nl: "In welke krant werd de eerste kruiswoordpuzzel gepubliceerd?"
        },
        options: [
          { en: "The Times", es: "The Times", de: "The Times", nl: "The Times" },
          { en: "New York World", es: "New York World", de: "New York World", nl: "New York World" },
          { en: "The Guardian", es: "The Guardian", de: "The Guardian", nl: "The Guardian" },
          { en: "USA Today", es: "USA Today", de: "USA Today", nl: "USA Today" }
        ],
        correctIndex: 1
      }
    ],

    // Day 26 - September 26th: Concorde's first flight (1969), West Side Story premieres (1957), George Gershwin born (1898)
    day26: [
      {
        question: {
          en: "The Concorde supersonic jet made its first flight on September 26, 1969. What made the Concorde special?",
          es: "El avión supersónico Concorde hizo su primer vuelo el 26 de septiembre de 1969. ¿Qué hizo especial al Concorde?",
          de: "Die Concorde machte am 26. September 1969 ihren ersten Flug. Was machte die Concorde besonders?",
          nl: "De Concorde supersonische jet maakte zijn eerste vlucht op 26 september 1969. Wat maakte de Concorde speciaal?"
        },
        options: [
          { en: "It could fly faster than sound", es: "Podía volar más rápido que el sonido", de: "Sie konnte schneller als Schallgeschwindigkeit fliegen", nl: "Het kon sneller vliegen dan geluid" },
          { en: "It was solar-powered", es: "Funcionaba con energía solar", de: "Es war solarbetrieben", nl: "Het was op zonne-energie" },
          { en: "It could carry 1000 passengers", es: "Podía transportar 1000 pasajeros", de: "Es konnte 1000 Passagiere befördern", nl: "Het kon 1000 passagiers vervoeren" },
          { en: "It was the largest plane", es: "Era el avión más grande", de: "Es war das größte Flugzeug", nl: "Het was het grootste vliegtuig" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Concorde made its maiden flight on September 26, 1969, from Toulouse, France. It was a supersonic passenger jet that could fly faster than the speed of sound (Mach 2, over 1,350 mph). The Concorde was developed jointly by British and French aerospace companies. It could cross the Atlantic in just 3.5 hours, less than half the time of conventional aircraft. The distinctive delta-wing design and drooping nose made it instantly recognizable. Concorde entered commercial service in 1976, primarily flying routes between London/Paris and New York. The aircraft could carry about 100 passengers in luxury. Only 20 Concordes were ever built. The service was expensive and fuel-inefficient. After a fatal crash in 2000 and declining passenger numbers, the Concorde was retired in 2003, ending the era of supersonic commercial flight.",
          es: "El Concorde hizo su vuelo inaugural el 26 de septiembre de 1969 desde Toulouse, Francia. Era un avión de pasajeros supersónico que podía volar más rápido que la velocidad del sonido (Mach 2, más de 1,350 mph). El Concorde fue desarrollado conjuntamente por compañías aeroespaciales británicas y francesas. Podía cruzar el Atlántico en solo 3.5 horas, menos de la mitad del tiempo de los aviones convencionales. El distintivo diseño de ala delta y nariz inclinada lo hacía instantáneamente reconocible. El Concorde entró en servicio comercial en 1976, volando principalmente rutas entre Londres/París y Nueva York. La aeronave podía transportar alrededor de 100 pasajeros en lujo. Solo se construyeron 20 Concordes. El servicio era costoso y poco eficiente en combustible. Después de un accidente fatal en 2000 y una disminución de pasajeros, el Concorde fue retirado en 2003, terminando la era del vuelo comercial supersónico.",
          de: "Die Concorde machte am 26. September 1969 ihren Jungfernflug von Toulouse, Frankreich. Es war ein Überschall-Passagierflugzeug, das schneller als die Schallgeschwindigkeit fliegen konnte (Mach 2, über 1.350 mph). Die Concorde wurde gemeinsam von britischen und französischen Luft- und Raumfahrtunternehmen entwickelt. Sie konnte den Atlantik in nur 3,5 Stunden überqueren, weniger als die Hälfte der Zeit konventioneller Flugzeuge. Das markante Delta-Flügel-Design und die herunterklappbare Nase machten sie sofort erkennbar. Die Concorde nahm 1976 den kommerziellen Betrieb auf und flog hauptsächlich Strecken zwischen London/Paris und New York. Das Flugzeug konnte etwa 100 Passagiere in Luxus befördern. Es wurden nur 20 Concordes gebaut. Der Service war teuer und kraftstoffineffizient. Nach einem tödlichen Absturz im Jahr 2000 und rückläufigen Passagierzahlen wurde die Concorde 2003 außer Dienst gestellt und beendete die Ära des kommerziellen Überschallflugs.",
          nl: "De Concorde maakte zijn eerste vlucht op 26 september 1969 vanuit Toulouse, Frankrijk. Het was een supersonisch passagiersvliegtuig dat sneller kon vliegen dan de geluidssnelheid (Mach 2, meer dan 1.350 mph). De Concorde werd gezamenlijk ontwikkeld door Britse en Franse ruimtevaartbedrijven. Het kon de Atlantische Oceaan in slechts 3,5 uur oversteken, minder dan de helft van de tijd van conventionele vliegtuigen. Het kenmerkende deltavleugelontwerp en de naar beneden buigende neus maakten het onmiddellijk herkenbaar. De Concorde ging in 1976 in commerciële dienst, voornamelijk op routes tussen Londen/Parijs en New York. Het vliegtuig kon ongeveer 100 passagiers in luxe vervoeren. Er werden slechts 20 Concordes gebouwd. De dienst was duur en brandstof-inefficiënt. Na een fatale crash in 2000 en dalende passagiersaantallen werd de Concorde in 2003 uit dienst genomen, waarmee het tijdperk van supersonische commerciële vluchten eindigde."
        }
      },
      {
        question: {
          en: "West Side Story premiered on Broadway on September 26, 1957. What classic story is West Side Story based on?",
          es: "West Side Story se estrenó en Broadway el 26 de septiembre de 1957. ¿En qué historia clásica se basa West Side Story?",
          de: "West Side Story hatte am 26. September 1957 am Broadway Premiere. Auf welcher klassischen Geschichte basiert West Side Story?",
          nl: "West Side Story ging in première op Broadway op 26 september 1957. Op welk klassiek verhaal is West Side Story gebaseerd?"
        },
        options: [
          { en: "Cinderella", es: "Cenicienta", de: "Aschenputtel", nl: "Assepoester" },
          { en: "The Wizard of Oz", es: "El mago de Oz", de: "Der Zauberer von Oz", nl: "De Tovenaar van Oz" },
          { en: "Romeo and Juliet", es: "Romeo y Julieta", de: "Romeo und Julia", nl: "Romeo en Julia" },
          { en: "Alice in Wonderland", es: "Alicia en el país de las maravillas", de: "Alice im Wunderland", nl: "Alice in Wonderland" }
        ],
        correctIndex: 2,
        explanation: {
          en: "West Side Story premiered on Broadway on September 26, 1957, at the Winter Garden Theatre. It's a modern retelling of Shakespeare's 'Romeo and Juliet,' set in 1950s New York City. The musical tells the tragic love story between Tony and Maria, members of rival street gangs—the Jets (white Americans) and the Sharks (Puerto Ricans). The show features music by Leonard Bernstein, lyrics by Stephen Sondheim, and choreography by Jerome Robbins. Famous songs include 'Maria,' 'Tonight,' 'America,' and 'Somewhere.' West Side Story was groundbreaking for addressing serious social issues like racism, immigration, and gang violence. The 1961 film adaptation won 10 Academy Awards, including Best Picture. The musical has been revived numerous times and remains one of the most beloved Broadway shows. Steven Spielberg directed a new film version in 2021.",
          es: "West Side Story se estrenó en Broadway el 26 de septiembre de 1957 en el Winter Garden Theatre. Es una versión moderna de 'Romeo y Julieta' de Shakespeare, ambientada en la ciudad de Nueva York de los años 1950. El musical cuenta la trágica historia de amor entre Tony y María, miembros de pandillas callejeras rivales: los Jets (estadounidenses blancos) y los Sharks (puertorriqueños). El espectáculo presenta música de Leonard Bernstein, letras de Stephen Sondheim y coreografía de Jerome Robbins. Las canciones famosas incluyen 'María', 'Tonight', 'America' y 'Somewhere'. West Side Story fue innovador por abordar temas sociales serios como el racismo, la inmigración y la violencia de pandillas. La adaptación cinematográfica de 1961 ganó 10 premios de la Academia, incluido Mejor Película. El musical ha sido revivido numerosas veces y sigue siendo uno de los shows de Broadway más queridos. Steven Spielberg dirigió una nueva versión cinematográfica en 2021.",
          de: "West Side Story hatte am 26. September 1957 am Winter Garden Theatre am Broadway Premiere. Es ist eine moderne Neuerzählung von Shakespeares 'Romeo und Julia', angesiedelt im New York der 1950er Jahre. Das Musical erzählt die tragische Liebesgeschichte zwischen Tony und Maria, Mitgliedern rivalisierender Straßengangs—den Jets (weiße Amerikaner) und den Sharks (Puerto-Ricaner). Die Show bietet Musik von Leonard Bernstein, Texte von Stephen Sondheim und Choreografie von Jerome Robbins. Berühmte Songs sind 'Maria', 'Tonight', 'America' und 'Somewhere'. West Side Story war bahnbrechend für die Behandlung ernster sozialer Themen wie Rassismus, Einwanderung und Gang-Gewalt. Die Filmadaption von 1961 gewann 10 Academy Awards, darunter Bester Film. Das Musical wurde zahlreiche Male wieder aufgenommen und bleibt eine der beliebtesten Broadway-Shows. Steven Spielberg führte 2021 Regie bei einer neuen Filmversion.",
          nl: "West Side Story ging in première op Broadway op 26 september 1957 in het Winter Garden Theatre. Het is een moderne hervertelling van Shakespeares 'Romeo en Julia', gesitueerd in New York City in de jaren 1950. De musical vertelt het tragische liefdesverhaal tussen Tony en Maria, leden van rivaliserende straatbendes—de Jets (blanke Amerikanen) en de Sharks (Puerto Ricanen). De show heeft muziek van Leonard Bernstein, teksten van Stephen Sondheim en choreografie van Jerome Robbins. Beroemde liedjes zijn 'Maria', 'Tonight', 'America' en 'Somewhere'. West Side Story was baanbrekend door ernstige sociale kwesties aan te kaarten zoals racisme, immigratie en bendegeweld. De filmadaptatie uit 1961 won 10 Academy Awards, waaronder Beste Film. De musical is talloze keren nieuw leven ingeblazen en blijft een van de meest geliefde Broadway-shows. Steven Spielberg regisseerde in 2021 een nieuwe filmversie."
        }
      },
      {
        question: {
          en: "Composer George Gershwin was born on September 26, 1898. Which famous American composition did Gershwin write that blends jazz and classical music?",
          es: "El compositor George Gershwin nació el 26 de septiembre de 1898. ¿Qué famosa composición estadounidense escribió Gershwin que mezcla jazz y música clásica?",
          de: "Komponist George Gershwin wurde am 26. September 1898 geboren. Welche berühmte amerikanische Komposition schrieb Gershwin, die Jazz und klassische Musik verbindet?",
          nl: "Componist George Gershwin werd geboren op 26 september 1898. Welke beroemde Amerikaanse compositie schreef Gershwin die jazz en klassieke muziek combineert?"
        },
        options: [
          { en: "The Four Seasons", es: "Las cuatro estaciones", de: "Die vier Jahreszeiten", nl: "De vier jaargetijden" },
          { en: "Rhapsody in Blue", es: "Rapsodia en azul", de: "Rhapsody in Blue", nl: "Rhapsody in Blue" },
          { en: "Moonlight Sonata", es: "Sonata claro de luna", de: "Mondscheinsonate", nl: "Maanlicht Sonate" },
          { en: "The Nutcracker", es: "El cascanueces", de: "Der Nussknacker", nl: "De Notenkraker" }
        ],
        correctIndex: 1,
        explanation: {
          en: "George Gershwin was born on September 26, 1898, in Brooklyn, New York. He became one of America's greatest composers, bridging classical music and popular jazz. His most famous work is 'Rhapsody in Blue' (1924), a groundbreaking piece combining jazz rhythms with orchestral arrangements. The opening clarinet glissando is one of the most recognizable moments in American music. Gershwin also composed the opera 'Porgy and Bess' (1935), featuring classics like 'Summertime' and 'I Got Rhythm.' He wrote numerous Broadway shows with his brother Ira, including 'Funny Face' and 'Of Thee I Sing.' His music captured the spirit of 1920s-30s America. Other famous works include 'An American in Paris' and 'Cuban Overture.' Gershwin died tragically young at 38 from a brain tumor in 1937. His music remains hugely influential and is performed worldwide.",
          es: "George Gershwin nació el 26 de septiembre de 1898 en Brooklyn, Nueva York. Se convirtió en uno de los más grandes compositores de Estados Unidos, uniendo la música clásica y el jazz popular. Su obra más famosa es 'Rapsodia en azul' (1924), una pieza innovadora que combina ritmos de jazz con arreglos orquestales. El glissando de clarinete de apertura es uno de los momentos más reconocibles en la música estadounidense. Gershwin también compuso la ópera 'Porgy and Bess' (1935), con clásicos como 'Summertime' e 'I Got Rhythm'. Escribió numerosos espectáculos de Broadway con su hermano Ira, incluidos 'Funny Face' y 'Of Thee I Sing'. Su música capturó el espíritu de Estados Unidos de los años 1920-30. Otras obras famosas incluyen 'Un americano en París' y 'Obertura cubana'. Gershwin murió trágicamente joven a los 38 años de un tumor cerebral en 1937. Su música sigue siendo muy influyente y se interpreta en todo el mundo.",
          de: "George Gershwin wurde am 26. September 1898 in Brooklyn, New York, geboren. Er wurde zu einem der größten amerikanischen Komponisten und verband klassische Musik mit populärem Jazz. Sein berühmtestes Werk ist 'Rhapsody in Blue' (1924), ein bahnbrechendes Stück, das Jazzrhythmen mit Orchesterarrangements kombiniert. Das einleitende Klarinetten-Glissando ist einer der bekanntesten Momente in der amerikanischen Musik. Gershwin komponierte auch die Oper 'Porgy and Bess' (1935) mit Klassikern wie 'Summertime' und 'I Got Rhythm'. Er schrieb zahlreiche Broadway-Shows mit seinem Bruder Ira, darunter 'Funny Face' und 'Of Thee I Sing'. Seine Musik fing den Geist Amerikas der 1920er-30er Jahre ein. Andere berühmte Werke sind 'Ein Amerikaner in Paris' und 'Kubanische Ouvertüre'. Gershwin starb tragisch jung mit 38 Jahren an einem Gehirntumor 1937. Seine Musik bleibt äußerst einflussreich und wird weltweit aufgeführt.",
          nl: "George Gershwin werd geboren op 26 september 1898 in Brooklyn, New York. Hij werd een van Amerika's grootste componisten en verbond klassieke muziek met populaire jazz. Zijn beroemdste werk is 'Rhapsody in Blue' (1924), een baanbrekend stuk dat jazzritmes combineert met orkestrale arrangementen. De openingsglissando op klarinet is een van de meest herkenbare momenten in Amerikaanse muziek. Gershwin componeerde ook de opera 'Porgy and Bess' (1935), met klassiekers zoals 'Summertime' en 'I Got Rhythm'. Hij schreef talrijke Broadway-shows met zijn broer Ira, waaronder 'Funny Face' en 'Of Thee I Sing'. Zijn muziek ving de geest van Amerika in de jaren 1920-30. Andere beroemde werken zijn 'An American in Paris' en 'Cuban Overture'. Gershwin stierf tragisch jong op 38-jarige leeftijd aan een hersentumor in 1937. Zijn muziek blijft enorm invloedrijk en wordt wereldwijd uitgevoerd."
        }
      },
      {
        question: {
          en: "What is 9 × 6?",
          es: "¿Cuánto es 9 × 6?",
          de: "Was ist 9 × 6?",
          nl: "Hoeveel is 9 × 6?"
        },
        options: [
          { en: "52", es: "52", de: "52", nl: "52" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "54", es: "54", de: "54", nl: "54" },
          { en: "48", es: "48", de: "48", nl: "48" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "What type of aircraft can fly faster than the speed of sound?",
          es: "¿Qué tipo de aeronave puede volar más rápido que la velocidad del sonido?",
          de: "Welche Art von Flugzeug kann schneller als die Schallgeschwindigkeit fliegen?",
          nl: "Welk type vliegtuig kan sneller vliegen dan de geluidssnelheid?"
        },
        options: [
          { en: "Helicopter", es: "Helicóptero", de: "Hubschrauber", nl: "Helikopter" },
          { en: "Glider", es: "Planeador", de: "Segelflugzeug", nl: "Zweefvliegtuig" },
          { en: "Supersonic jet", es: "Avión supersónico", de: "Überschallflugzeug", nl: "Supersonische jet" },
          { en: "Hot air balloon", es: "Globo aerostático", de: "Heißluftballon", nl: "Heteluchtballon" }
        ],
        correctIndex: 2
      }
    ],

    // Day 27 - September 27th: Google's birthday (alternate, 1998), Warren Commission report (1964), Samuel Adams born (1722)
    day27: [
      {
        question: {
          en: "Google was founded around September 27, 1998. What is Google primarily known for?",
          es: "Google fue fundado alrededor del 27 de septiembre de 1998. ¿Por qué es conocido principalmente Google?",
          de: "Google wurde um den 27. September 1998 gegründet. Wofür ist Google hauptsächlich bekannt?",
          nl: "Google werd rond 27 september 1998 opgericht. Waarvoor staat Google voornamelijk bekend?"
        },
        options: [
          { en: "Making cars", es: "Hacer autos", de: "Autos herstellen", nl: "Auto's maken" },
          { en: "Search engine", es: "Motor de búsqueda", de: "Suchmaschine", nl: "Zoekmachine" },
          { en: "Making phones only", es: "Solo hacer teléfonos", de: "Nur Telefone herstellen", nl: "Alleen telefoons maken" },
          { en: "Selling books", es: "Vender libros", de: "Bücher verkaufen", nl: "Boeken verkopen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Google was founded by Larry Page and Sergey Brin on September 4, 1998, though the company celebrates its birthday on September 27. It started as a research project at Stanford University in 1996. Google revolutionized internet search with its PageRank algorithm, which ranked web pages by relevance and importance. The name 'Google' is a play on 'googol,' a mathematical term for the number 1 followed by 100 zeros, representing the vast amount of information the search engine aimed to organize. Google became the world's most popular search engine, handling billions of searches daily. The company expanded into numerous products and services including Gmail (2004), Google Maps (2005), YouTube (acquired 2006), Android mobile OS, and Chrome browser. In 2015, Google reorganized under parent company Alphabet Inc. Google's motto was 'Don't be evil,' later changed to 'Do the right thing.' Today, Google is one of the world's most valuable companies.",
          es: "Google fue fundado por Larry Page y Sergey Brin el 4 de septiembre de 1998, aunque la compañía celebra su cumpleaños el 27 de septiembre. Comenzó como un proyecto de investigación en la Universidad de Stanford en 1996. Google revolucionó la búsqueda en internet con su algoritmo PageRank, que clasificaba páginas web por relevancia e importancia. El nombre 'Google' es un juego de palabras con 'googol', un término matemático para el número 1 seguido de 100 ceros, representando la vasta cantidad de información que el motor de búsqueda pretendía organizar. Google se convirtió en el motor de búsqueda más popular del mundo, manejando miles de millones de búsquedas diariamente. La compañía se expandió a numerosos productos y servicios incluyendo Gmail (2004), Google Maps (2005), YouTube (adquirido 2006), sistema operativo móvil Android y navegador Chrome. En 2015, Google se reorganizó bajo la compañía matriz Alphabet Inc. El lema de Google era 'No seas malvado', luego cambiado a 'Haz lo correcto'. Hoy, Google es una de las compañías más valiosas del mundo.",
          de: "Google wurde am 4. September 1998 von Larry Page und Sergey Brin gegründet, obwohl das Unternehmen seinen Geburtstag am 27. September feiert. Es begann 1996 als Forschungsprojekt an der Stanford University. Google revolutionierte die Internetsuche mit seinem PageRank-Algorithmus, der Webseiten nach Relevanz und Wichtigkeit ordnete. Der Name 'Google' ist ein Wortspiel mit 'googol', einem mathematischen Begriff für die Zahl 1 gefolgt von 100 Nullen, der die riesige Informationsmenge repräsentiert, die die Suchmaschine organisieren wollte. Google wurde zur weltweit beliebtesten Suchmaschine und bearbeitet täglich Milliarden von Suchanfragen. Das Unternehmen expandierte in zahlreiche Produkte und Dienstleistungen, darunter Gmail (2004), Google Maps (2005), YouTube (2006 erworben), Android-Betriebssystem und Chrome-Browser. 2015 reorganisierte sich Google unter der Muttergesellschaft Alphabet Inc. Googles Motto war 'Don't be evil', später geändert zu 'Do the right thing'. Heute ist Google eines der wertvollsten Unternehmen der Welt.",
          nl: "Google werd opgericht door Larry Page en Sergey Brin op 4 september 1998, hoewel het bedrijf zijn verjaardag viert op 27 september. Het begon als een onderzoeksproject aan Stanford University in 1996. Google revolutioneerde zoeken op internet met zijn PageRank-algoritme, dat webpagina's rangschikt op relevantie en belang. De naam 'Google' is een woordspeling op 'googol', een wiskundige term voor het getal 1 gevolgd door 100 nullen, wat de enorme hoeveelheid informatie vertegenwoordigt die de zoekmachine wilde organiseren. Google werd 's werelds populairste zoekmachine en verwerkt dagelijks miljarden zoekopdrachten. Het bedrijf breidde uit naar talrijke producten en diensten waaronder Gmail (2004), Google Maps (2005), YouTube (overgenomen 2006), Android mobiel OS en Chrome-browser. In 2015 reorganiseerde Google onder moederbedrijf Alphabet Inc. Google's motto was 'Don't be evil', later veranderd in 'Do the right thing'. Vandaag is Google een van 's werelds meest waardevolle bedrijven."
        }
      },
      {
        question: {
          en: "The Warren Commission report was released on September 27, 1964. What event did the Warren Commission investigate?",
          es: "El informe de la Comisión Warren se publicó el 27 de septiembre de 1964. ¿Qué evento investigó la Comisión Warren?",
          de: "Der Warren-Kommissionsbericht wurde am 27. September 1964 veröffentlicht. Welches Ereignis untersuchte die Warren-Kommission?",
          nl: "Het Warren Commissie-rapport werd uitgebracht op 27 september 1964. Welke gebeurtenis onderzocht de Warren Commissie?"
        },
        options: [
          { en: "The Moon landing", es: "El alunizaje", de: "Die Mondlandung", nl: "De maanlanding" },
          { en: "President Kennedy's assassination", es: "El asesinato del presidente Kennedy", de: "Die Ermordung von Präsident Kennedy", nl: "De moord op president Kennedy" },
          { en: "World War II", es: "La Segunda Guerra Mundial", de: "Der Zweite Weltkrieg", nl: "Wereldoorlog II" },
          { en: "The Civil War", es: "La Guerra Civil", de: "Der Bürgerkrieg", nl: "De Burgeroorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Warren Commission released its report on September 27, 1964, investigating the assassination of President John F. Kennedy on November 22, 1963, in Dallas, Texas. The commission was led by Chief Justice Earl Warren and included prominent figures like future President Gerald Ford. After a 10-month investigation, the report concluded that Lee Harvey Oswald acted alone in killing Kennedy and that Jack Ruby acted alone in killing Oswald two days later. The 888-page report examined witness testimonies, physical evidence, and Oswald's background. However, the findings have been controversial and widely debated for decades. Many conspiracy theories emerged questioning the 'lone gunman' conclusion. Subsequent investigations, including the House Select Committee on Assassinations (1979), examined additional evidence. The Kennedy assassination remains one of the most analyzed events in American history. The report's conclusions continue to be scrutinized by researchers and the public.",
          es: "La Comisión Warren publicó su informe el 27 de septiembre de 1964, investigando el asesinato del presidente John F. Kennedy el 22 de noviembre de 1963 en Dallas, Texas. La comisión fue dirigida por el presidente del Tribunal Supremo Earl Warren e incluyó figuras prominentes como el futuro presidente Gerald Ford. Después de una investigación de 10 meses, el informe concluyó que Lee Harvey Oswald actuó solo al matar a Kennedy y que Jack Ruby actuó solo al matar a Oswald dos días después. El informe de 888 páginas examinó testimonios de testigos, evidencia física y los antecedentes de Oswald. Sin embargo, los hallazgos han sido controvertidos y ampliamente debatidos durante décadas. Surgieron muchas teorías de conspiración cuestionando la conclusión del 'pistolero solitario'. Investigaciones posteriores, incluido el Comité Selecto de la Cámara sobre Asesinatos (1979), examinaron evidencia adicional. El asesinato de Kennedy sigue siendo uno de los eventos más analizados en la historia estadounidense. Las conclusiones del informe continúan siendo escrutadas por investigadores y el público.",
          de: "Die Warren-Kommission veröffentlichte am 27. September 1964 ihren Bericht zur Untersuchung der Ermordung von Präsident John F. Kennedy am 22. November 1963 in Dallas, Texas. Die Kommission wurde von Oberrichter Earl Warren geleitet und umfasste prominente Persönlichkeiten wie den späteren Präsidenten Gerald Ford. Nach einer 10-monatigen Untersuchung kam der Bericht zu dem Schluss, dass Lee Harvey Oswald allein bei der Ermordung Kennedys handelte und Jack Ruby zwei Tage später allein Oswald tötete. Der 888-seitige Bericht untersuchte Zeugenaussagen, physische Beweise und Oswalds Hintergrund. Die Ergebnisse waren jedoch kontrovers und wurden jahrzehntelang diskutiert. Viele Verschwörungstheorien entstanden, die die 'Einzeltäter'-Schlussfolgerung in Frage stellten. Nachfolgende Untersuchungen, einschließlich des House Select Committee on Assassinations (1979), untersuchten zusätzliche Beweise. Die Ermordung Kennedys bleibt eines der am meisten analysierten Ereignisse in der amerikanischen Geschichte. Die Schlussfolgerungen des Berichts werden weiterhin von Forschern und der Öffentlichkeit untersucht.",
          nl: "De Warren Commissie bracht op 27 september 1964 haar rapport uit over het onderzoek naar de moord op president John F. Kennedy op 22 november 1963 in Dallas, Texas. De commissie werd geleid door opperrechter Earl Warren en omvatte prominente figuren zoals toekomstig president Gerald Ford. Na een 10 maanden durend onderzoek concludeerde het rapport dat Lee Harvey Oswald alleen handelde bij het vermoorden van Kennedy en dat Jack Ruby alleen handelde bij het vermoorden van Oswald twee dagen later. Het 888 pagina's tellende rapport onderzocht getuigenverklaringen, fysiek bewijs en Oswalds achtergrond. De bevindingen zijn echter controversieel en worden al tientallen jaren breed besproken. Veel samenzweringstheorieën ontstonden die de conclusie van de 'eenzame schutter' in twijfel trokken. Daaropvolgende onderzoeken, waaronder het House Select Committee on Assassinations (1979), onderzochten aanvullend bewijs. De moord op Kennedy blijft een van de meest geanalyseerde gebeurtenissen in de Amerikaanse geschiedenis. De conclusies van het rapport worden nog steeds onderzocht door onderzoekers en het publiek."
        }
      },
      {
        question: {
          en: "Samuel Adams, American Revolutionary leader, was born on September 27, 1722. Which beverage is named after Samuel Adams?",
          es: "Samuel Adams, líder revolucionario estadounidense, nació el 27 de septiembre de 1722. ¿Qué bebida lleva el nombre de Samuel Adams?",
          de: "Samuel Adams, amerikanischer Revolutionsführer, wurde am 27. September 1722 geboren. Welches Getränk ist nach Samuel Adams benannt?",
          nl: "Samuel Adams, Amerikaanse revolutionaire leider, werd geboren op 27 september 1722. Welke drank is vernoemd naar Samuel Adams?"
        },
        options: [
          { en: "Soda", es: "Refresco", de: "Limonade", nl: "Frisdrank" },
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" },
          { en: "Beer", es: "Cerveza", de: "Bier", nl: "Bier" },
          { en: "Tea", es: "Té", de: "Tee", nl: "Thee" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Samuel Adams was born on September 27, 1722, in Boston, Massachusetts. He was a Founding Father and key leader in the American Revolution. Adams organized protests against British taxation, including the Boston Tea Party in 1773, where colonists dumped British tea into Boston Harbor. He was a master of political propaganda and helped rally colonists to the revolutionary cause. Adams signed the Declaration of Independence and served as Governor of Massachusetts (1794-1797). He was second cousin to President John Adams. Samuel Adams was a brewer early in his career, though not particularly successful. In 1984, the Boston Beer Company launched Samuel Adams Boston Lager, named in his honor. The beer brand became one of America's most popular craft beers. The Samuel Adams beer logo features a portrait inspired by the patriot. Adams died in 1803, leaving a legacy as one of America's most important revolutionary figures.",
          es: "Samuel Adams nació el 27 de septiembre de 1722 en Boston, Massachusetts. Fue un Padre Fundador y líder clave en la Revolución Americana. Adams organizó protestas contra la tributación británica, incluida la Fiesta del Té de Boston en 1773, donde los colonos arrojaron té británico al puerto de Boston. Fue un maestro de la propaganda política y ayudó a reunir a los colonos para la causa revolucionaria. Adams firmó la Declaración de Independencia y sirvió como Gobernador de Massachusetts (1794-1797). Era primo segundo del presidente John Adams. Samuel Adams fue cervecero al principio de su carrera, aunque no particularmente exitoso. En 1984, Boston Beer Company lanzó Samuel Adams Boston Lager, nombrada en su honor. La marca de cerveza se convirtió en una de las cervezas artesanales más populares de Estados Unidos. El logotipo de la cerveza Samuel Adams presenta un retrato inspirado en el patriota. Adams murió en 1803, dejando un legado como una de las figuras revolucionarias más importantes de Estados Unidos.",
          de: "Samuel Adams wurde am 27. September 1722 in Boston, Massachusetts, geboren. Er war ein Gründervater und wichtiger Führer in der Amerikanischen Revolution. Adams organisierte Proteste gegen die britische Besteuerung, einschließlich der Boston Tea Party 1773, bei der Kolonisten britischen Tee in den Hafen von Boston warfen. Er war ein Meister der politischen Propaganda und half, die Kolonisten für die revolutionäre Sache zu mobilisieren. Adams unterzeichnete die Unabhängigkeitserklärung und diente als Gouverneur von Massachusetts (1794-1797). Er war ein Cousin zweiten Grades von Präsident John Adams. Samuel Adams war früh in seiner Karriere Brauer, obwohl nicht besonders erfolgreich. 1984 brachte die Boston Beer Company Samuel Adams Boston Lager auf den Markt, benannt zu seinen Ehren. Die Biermarke wurde zu einem der beliebtesten Craft-Biere Amerikas. Das Samuel Adams Bierlogo zeigt ein vom Patrioten inspiriertes Porträt. Adams starb 1803 und hinterließ ein Vermächtnis als eine der wichtigsten revolutionären Figuren Amerikas.",
          nl: "Samuel Adams werd geboren op 27 september 1722 in Boston, Massachusetts. Hij was een Founding Father en belangrijke leider in de Amerikaanse Revolutie. Adams organiseerde protesten tegen Britse belastingheffing, waaronder de Boston Tea Party in 1773, waarbij kolonisten Britse thee in de haven van Boston gooiden. Hij was een meester in politieke propaganda en hielp kolonisten te verzamelen voor de revolutionaire zaak. Adams tekende de Onafhankelijkheidsverklaring en diende als gouverneur van Massachusetts (1794-1797). Hij was een achterneef van president John Adams. Samuel Adams was vroeg in zijn carrière brouwer, hoewel niet bijzonder succesvol. In 1984 lanceerde Boston Beer Company Samuel Adams Boston Lager, vernoemd ter ere van hem. Het biermerk werd een van Amerika's populairste craft bieren. Het Samuel Adams bierlogo toont een portret geïnspireerd door de patriot. Adams stierf in 1803 en liet een erfenis achter als een van Amerika's belangrijkste revolutionaire figuren."
        }
      },
      {
        question: {
          en: "What is 64 ÷ 8?",
          es: "¿Cuánto es 64 ÷ 8?",
          de: "Was ist 64 ÷ 8?",
          nl: "Hoeveel is 64 ÷ 8?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 3
      },
      {
        question: {
          en: "What type of website is Google best known for?",
          es: "¿Por qué tipo de sitio web es más conocido Google?",
          de: "Für welche Art von Website ist Google am bekanntesten?",
          nl: "Voor welk type website is Google het bekendst?"
        },
        options: [
          { en: "Online shopping", es: "Compras en línea", de: "Online-Shopping", nl: "Online winkelen" },
          { en: "Social media", es: "Redes sociales", de: "Soziale Medien", nl: "Sociale media" },
          { en: "Search engine", es: "Motor de búsqueda", de: "Suchmaschine", nl: "Zoekmachine" },
          { en: "Video streaming", es: "Transmisión de video", de: "Video-Streaming", nl: "Video streaming" }
        ],
        correctIndex: 2
      }
    ],

    // Day 28 - September 28th: First transatlantic telephone cable (1956), Taiwan ceasefire (1954), Confucius born (traditional, 551 BC)
    day28: [
      {
        question: {
          en: "The first transatlantic telephone cable (TAT-1) went into operation on September 28, 1956. What two continents did it connect?",
          es: "El primer cable telefónico transatlántico (TAT-1) entró en operación el 28 de septiembre de 1956. ¿Qué dos continentes conectaba?",
          de: "Das erste transatlantische Telefonkabel (TAT-1) ging am 28. September 1956 in Betrieb. Welche zwei Kontinente verband es?",
          nl: "De eerste transatlantische telefoonkabel (TAT-1) werd in gebruik genomen op 28 september 1956. Welke twee continenten verbond het?"
        },
        options: [
          { en: "Asia and Africa", es: "Asia y África", de: "Asien und Afrika", nl: "Azië en Afrika" },
          { en: "North America and Europe", es: "América del Norte y Europa", de: "Nordamerika und Europa", nl: "Noord-Amerika en Europa" },
          { en: "South America and Australia", es: "América del Sur y Australia", de: "Südamerika und Australien", nl: "Zuid-Amerika en Australië" },
          { en: "Europe and Asia", es: "Europa y Asia", de: "Europa und Asien", nl: "Europa en Azië" }
        ],
        correctIndex: 1,
        explanation: {
          en: "TAT-1 (Transatlantic No. 1) became operational on September 28, 1956, connecting Gallanach Bay, near Oban, Scotland with Clarenville, Newfoundland, Canada. This revolutionary cable could carry 36 telephone channels simultaneously. Before TAT-1, transatlantic phone calls relied on expensive and unreliable radio telephony with limited capacity. The cable was a joint project between AT&T, the British Post Office, and the Canadian Overseas Telecommunication Corporation. It cost about $120 million to build (equivalent to over $1 billion today). The first official call was made by the chairman of AT&T. TAT-1 remained in service for 22 years until 1978. The cable used vacuum tube repeaters placed every 40 nautical miles to amplify signals. This groundbreaking project paved the way for modern global telecommunications. Today, hundreds of undersea fiber optic cables connect continents, carrying the vast majority of international internet traffic.",
          es: "TAT-1 (Transatlántico No. 1) entró en operación el 28 de septiembre de 1956, conectando Gallanach Bay, cerca de Oban, Escocia con Clarenville, Terranova, Canadá. Este cable revolucionario podía transportar 36 canales telefónicos simultáneamente. Antes de TAT-1, las llamadas telefónicas transatlánticas dependían de radiotelefonía costosa y poco fiable con capacidad limitada. El cable fue un proyecto conjunto entre AT&T, la Oficina Postal Británica y la Corporación de Telecomunicaciones de Ultramar de Canadá. Costó alrededor de $120 millones construir (equivalente a más de $1 mil millones hoy). La primera llamada oficial fue realizada por el presidente de AT&T. TAT-1 permaneció en servicio durante 22 años hasta 1978. El cable usaba repetidores de tubos de vacío colocados cada 40 millas náuticas para amplificar señales. Este proyecto innovador allanó el camino para las telecomunicaciones globales modernas. Hoy, cientos de cables submarinos de fibra óptica conectan continentes, transportando la gran mayoría del tráfico internacional de internet.",
          de: "TAT-1 (Transatlantic No. 1) wurde am 28. September 1956 in Betrieb genommen und verband Gallanach Bay bei Oban, Schottland mit Clarenville, Neufundland, Kanada. Dieses revolutionäre Kabel konnte 36 Telefonkanäle gleichzeitig übertragen. Vor TAT-1 waren transatlantische Telefongespräche auf teure und unzuverlässige Funktelefonie mit begrenzter Kapazität angewiesen. Das Kabel war ein gemeinsames Projekt von AT&T, dem British Post Office und der Canadian Overseas Telecommunication Corporation. Der Bau kostete etwa 120 Millionen Dollar (heute über 1 Milliarde Dollar). Der erste offizielle Anruf wurde vom Vorsitzenden von AT&T getätigt. TAT-1 blieb 22 Jahre lang bis 1978 in Betrieb. Das Kabel verwendete Vakuumröhrenverstärker alle 40 Seemeilen zur Signalverstärkung. Dieses bahnbrechende Projekt ebnete den Weg für moderne globale Telekommunikation. Heute verbinden Hunderte von Unterwasser-Glasfaserkabeln Kontinente und transportieren den Großteil des internationalen Internetverkehrs.",
          nl: "TAT-1 (Transatlantic No. 1) werd operationeel op 28 september 1956 en verbond Gallanach Bay bij Oban, Schotland met Clarenville, Newfoundland, Canada. Deze revolutionaire kabel kon 36 telefoonkanalen tegelijkertijd verwerken. Voor TAT-1 waren transatlantische telefoongesprekken afhankelijk van dure en onbetrouwbare radiotelefonie met beperkte capaciteit. De kabel was een gezamenlijk project van AT&T, de British Post Office en de Canadian Overseas Telecommunication Corporation. De bouw kostte ongeveer $120 miljoen (equivalent aan meer dan $1 miljard vandaag). Het eerste officiële gesprek werd gevoerd door de voorzitter van AT&T. TAT-1 bleef 22 jaar in gebruik tot 1978. De kabel gebruikte vacuümbuisversterkers elke 40 zeemijl om signalen te versterken. Dit baanbrekende project effende de weg voor moderne wereldwijde telecommunicatie. Vandaag verbinden honderden onderzeese glasvezelkabels continenten en vervoeren het grootste deel van het internationale internetverkeer."
        }
      },
      {
        question: {
          en: "Confucius, the influential Chinese philosopher, is traditionally said to have been born on September 28, 551 BC. What philosophy is he most associated with?",
          es: "Confucio, el influyente filósofo chino, tradicionalmente se dice que nació el 28 de septiembre de 551 a.C. ¿Con qué filosofía se le asocia más?",
          de: "Konfuzius, der einflussreiche chinesische Philosoph, soll traditionell am 28. September 551 v. Chr. geboren worden sein. Mit welcher Philosophie wird er am meisten in Verbindung gebracht?",
          nl: "Confucius, de invloedrijke Chinese filosoof, zou traditioneel geboren zijn op 28 september 551 v.Chr. Met welke filosofie wordt hij het meest geassocieerd?"
        },
        options: [
          { en: "Taoism", es: "Taoísmo", de: "Taoismus", nl: "Taoïsme" },
          { en: "Buddhism", es: "Budismo", de: "Buddhismus", nl: "Boeddhisme" },
          { en: "Confucianism", es: "Confucianismo", de: "Konfuzianismus", nl: "Confucianisme" },
          { en: "Legalism", es: "Legalismo", de: "Legalismus", nl: "Legalisme" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Confucius (Kong Fuzi) was born traditionally on September 28, 551 BC in the state of Lu (modern Shandong Province, China), though the exact date is debated. He founded Confucianism, a philosophy emphasizing personal and governmental morality, social relationships, justice, kindness, and sincerity. Confucius taught that society functions best when people act according to their roles and relationships (ruler-subject, father-son, etc.). He emphasized education, proper conduct (li), and humaneness (ren). His teachings were compiled in the 'Analects' by his disciples. Confucius served briefly in government but spent most of his life as a teacher. He advocated for meritocracy and believed anyone could become virtuous through education. Confucianism became the official philosophy of China during the Han Dynasty (206 BC-220 AD) and profoundly influenced East Asian culture for over 2,000 years. In China, September 28 is celebrated as Teacher's Day in his honor. His philosophy continues to shape Asian societies and is studied worldwide.",
          es: "Confucio (Kong Fuzi) nació tradicionalmente el 28 de septiembre de 551 a.C. en el estado de Lu (provincia moderna de Shandong, China), aunque la fecha exacta es debatida. Fundó el confucianismo, una filosofía que enfatiza la moralidad personal y gubernamental, las relaciones sociales, la justicia, la bondad y la sinceridad. Confucio enseñó que la sociedad funciona mejor cuando las personas actúan según sus roles y relaciones (gobernante-súbdito, padre-hijo, etc.). Enfatizó la educación, la conducta apropiada (li) y la humanidad (ren). Sus enseñanzas fueron compiladas en las 'Analectas' por sus discípulos. Confucio sirvió brevemente en el gobierno pero pasó la mayor parte de su vida como maestro. Abogó por la meritocracia y creía que cualquiera podía volverse virtuoso a través de la educación. El confucianismo se convirtió en la filosofía oficial de China durante la dinastía Han (206 a.C.-220 d.C.) e influyó profundamente en la cultura de Asia Oriental durante más de 2,000 años. En China, el 28 de septiembre se celebra como el Día del Maestro en su honor. Su filosofía continúa dando forma a las sociedades asiáticas y se estudia en todo el mundo.",
          de: "Konfuzius (Kong Fuzi) wurde traditionell am 28. September 551 v. Chr. im Staat Lu (heutige Provinz Shandong, China) geboren, obwohl das genaue Datum umstritten ist. Er gründete den Konfuzianismus, eine Philosophie, die persönliche und staatliche Moral, soziale Beziehungen, Gerechtigkeit, Güte und Aufrichtigkeit betont. Konfuzius lehrte, dass die Gesellschaft am besten funktioniert, wenn Menschen entsprechend ihrer Rollen und Beziehungen handeln (Herrscher-Untertan, Vater-Sohn usw.). Er betonte Bildung, angemessenes Verhalten (li) und Menschlichkeit (ren). Seine Lehren wurden von seinen Schülern in den 'Analekten' zusammengestellt. Konfuzius diente kurz in der Regierung, verbrachte aber den größten Teil seines Lebens als Lehrer. Er setzte sich für Meritokratie ein und glaubte, dass jeder durch Bildung tugendhaft werden könne. Der Konfuzianismus wurde während der Han-Dynastie (206 v. Chr.-220 n. Chr.) zur offiziellen Philosophie Chinas und beeinflusste die ostasiatische Kultur über 2.000 Jahre lang tiefgreifend. In China wird der 28. September als Tag des Lehrers zu seinen Ehren gefeiert. Seine Philosophie prägt weiterhin asiatische Gesellschaften und wird weltweit studiert.",
          nl: "Confucius (Kong Fuzi) werd traditioneel geboren op 28 september 551 v.Chr. in de staat Lu (huidige provincie Shandong, China), hoewel de exacte datum wordt bediscussieerd. Hij stichtte het confucianisme, een filosofie die nadruk legt op persoonlijke en overheidsmoraal, sociale relaties, gerechtigheid, vriendelijkheid en oprechtheid. Confucius leerde dat de samenleving het beste functioneert wanneer mensen handelen volgens hun rollen en relaties (heerser-onderdaan, vader-zoon, enz.). Hij benadrukte onderwijs, correct gedrag (li) en menselijkheid (ren). Zijn lessen werden samengesteld in de 'Analecten' door zijn leerlingen. Confucius diende kort in de overheid maar bracht het grootste deel van zijn leven door als leraar. Hij pleitte voor meritocratie en geloofde dat iedereen deugdzaam kon worden door onderwijs. Het confucianisme werd de officiële filosofie van China tijdens de Han-dynastie (206 v.Chr.-220 n.Chr.) en beïnvloedde de Oost-Aziatische cultuur diepgaand gedurende meer dan 2.000 jaar. In China wordt 28 september gevierd als Dag van de Leraar ter ere van hem. Zijn filosofie blijft Aziatische samenlevingen vormgeven en wordt wereldwijd bestudeerd."
        }
      },
      {
        question: {
          en: "On September 28, 1954, a ceasefire agreement ended the First Taiwan Strait Crisis. Which country was involved in this conflict with China?",
          es: "El 28 de septiembre de 1954, un acuerdo de alto el fuego puso fin a la Primera Crisis del Estrecho de Taiwán. ¿Qué país estuvo involucrado en este conflicto con China?",
          de: "Am 28. September 1954 beendete ein Waffenstillstandsabkommen die Erste Taiwanstraßenkrise. Welches Land war in diesen Konflikt mit China verwickelt?",
          nl: "Op 28 september 1954 beëindigde een staakt-het-vuren de Eerste Straat van Taiwancrisis. Welk land was betrokken bij dit conflict met China?"
        },
        options: [
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "South Korea", es: "Corea del Sur", de: "Südkorea", nl: "Zuid-Korea" },
          { en: "Taiwan (Republic of China)", es: "Taiwán (República de China)", de: "Taiwan (Republik China)", nl: "Taiwan (Republiek China)" },
          { en: "Vietnam", es: "Vietnam", de: "Vietnam", nl: "Vietnam" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The First Taiwan Strait Crisis occurred from September 1954 to May 1955 between the People's Republic of China (PRC) and the Republic of China (ROC/Taiwan). After the Chinese Civil War ended in 1949, the defeated Nationalist government (KMT) retreated to Taiwan, while the Communist Party established the PRC on mainland China. The crisis began when the PRC bombarded the ROC-held islands of Kinmen (Quemoy) and Matsu on September 3, 1954. The United States, allied with Taiwan, responded by signing a Mutual Defense Treaty with the ROC in December 1954. The crisis eased after China agreed to attend the Bandung Conference in April 1955. The conflict highlighted Cold War tensions in Asia and the unresolved status of Taiwan. Though a ceasefire was reached, the fundamental dispute remained unresolved. Two more Taiwan Strait Crises followed in 1958 and 1995-96. The relationship between mainland China and Taiwan remains a sensitive geopolitical issue today.",
          es: "La Primera Crisis del Estrecho de Taiwán ocurrió de septiembre de 1954 a mayo de 1955 entre la República Popular China (RPC) y la República de China (RdC/Taiwán). Después de que la Guerra Civil China terminara en 1949, el gobierno nacionalista derrotado (KMT) se retiró a Taiwán, mientras que el Partido Comunista estableció la RPC en China continental. La crisis comenzó cuando la RPC bombardeó las islas controladas por la RdC de Kinmen (Quemoy) y Matsu el 3 de septiembre de 1954. Estados Unidos, aliado con Taiwán, respondió firmando un Tratado de Defensa Mutua con la RdC en diciembre de 1954. La crisis disminuyó después de que China acordara asistir a la Conferencia de Bandung en abril de 1955. El conflicto destacó las tensiones de la Guerra Fría en Asia y el estatus no resuelto de Taiwán. Aunque se alcanzó un alto el fuego, la disputa fundamental permaneció sin resolver. Siguieron dos crisis más del Estrecho de Taiwán en 1958 y 1995-96. La relación entre China continental y Taiwán sigue siendo un tema geopolítico sensible hoy.",
          de: "Die Erste Taiwanstraßenkrise ereignete sich von September 1954 bis Mai 1955 zwischen der Volksrepublik China (VRC) und der Republik China (ROC/Taiwan). Nach dem Ende des Chinesischen Bürgerkriegs 1949 zog sich die besiegte nationalistische Regierung (KMT) nach Taiwan zurück, während die Kommunistische Partei die VRC auf dem Festland gründete. Die Krise begann, als die VRC am 3. September 1954 die von der ROC gehaltenen Inseln Kinmen (Quemoy) und Matsu bombardierte. Die USA, verbündet mit Taiwan, reagierten mit der Unterzeichnung eines Gegenseitigen Verteidigungsvertrags mit der ROC im Dezember 1954. Die Krise entspannte sich, nachdem China zugestimmt hatte, an der Bandung-Konferenz im April 1955 teilzunehmen. Der Konflikt verdeutlichte die Spannungen des Kalten Krieges in Asien und den ungelösten Status Taiwans. Obwohl ein Waffenstillstand erreicht wurde, blieb der grundlegende Streit ungelöst. Zwei weitere Taiwanstraßenkrisen folgten 1958 und 1995-96. Die Beziehung zwischen Festlandchina und Taiwan bleibt heute ein sensibles geopolitisches Thema.",
          nl: "De Eerste Straat van Taiwancrisis vond plaats van september 1954 tot mei 1955 tussen de Volksrepubliek China (VRC) en de Republiek China (ROC/Taiwan). Na het einde van de Chinese Burgeroorlog in 1949 trok de verslagen nationalistische regering (KMT) zich terug naar Taiwan, terwijl de Communistische Partij de VRC vestigde op het vasteland van China. De crisis begon toen de VRC op 3 september 1954 de door de ROC gecontroleerde eilanden Kinmen (Quemoy) en Matsu bombardeerde. De Verenigde Staten, geallieerd met Taiwan, reageerden door in december 1954 een Wederzijds Verdedigingsverdrag met de ROC te ondertekenen. De crisis verminderde nadat China ermee instemde de Bandung-conferentie bij te wonen in april 1955. Het conflict benadrukte de spanningen van de Koude Oorlog in Azië en de onopgeloste status van Taiwan. Hoewel een staakt-het-vuren werd bereikt, bleef het fundamentele geschil onopgelost. Twee meer Straat van Taiwancrises volgden in 1958 en 1995-96. De relatie tussen vasteland China en Taiwan blijft vandaag een gevoelig geopolitiek vraagstuk."
        }
      },
      {
        question: {
          en: "What is 72 ÷ 9?",
          es: "¿Cuánto es 72 ÷ 9?",
          de: "Was ist 72 ÷ 9?",
          nl: "Hoeveel is 72 ÷ 9?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 3
      },
      {
        question: {
          en: "Before the transatlantic cable, how did people mainly communicate across the Atlantic Ocean?",
          es: "Antes del cable transatlántico, ¿cómo se comunicaban principalmente las personas a través del Océano Atlántico?",
          de: "Wie kommunizierten die Menschen vor dem transatlantischen Kabel hauptsächlich über den Atlantik?",
          nl: "Hoe communiceerden mensen voornamelijk over de Atlantische Oceaan voor de transatlantische kabel?"
        },
        options: [
          { en: "By email", es: "Por correo electrónico", de: "Per E-Mail", nl: "Per e-mail" },
          { en: "By airplane", es: "Por avión", de: "Mit dem Flugzeug", nl: "Per vliegtuig" },
          { en: "By satellite", es: "Por satélite", de: "Per Satellit", nl: "Via satelliet" },
          { en: "By ships carrying letters", es: "Por barcos con cartas", de: "Mit Schiffen, die Briefe trugen", nl: "Door schepen met brieven" }
        ],
        correctIndex: 3
      }
    ],

    // Day 29 - September 29th: Scotland Yard established (1829), Botswana independence (1966), Enrico Fermi born (1901)
    day29: [
      {
        question: {
          en: "Scotland Yard was established on September 29, 1829. What is Scotland Yard?",
          es: "Scotland Yard se estableció el 29 de septiembre de 1829. ¿Qué es Scotland Yard?",
          de: "Scotland Yard wurde am 29. September 1829 gegründet. Was ist Scotland Yard?",
          nl: "Scotland Yard werd opgericht op 29 september 1829. Wat is Scotland Yard?"
        },
        options: [
          { en: "A sports stadium", es: "Un estadio deportivo", de: "Ein Sportstadion", nl: "Een sportstadion" },
          { en: "London's police headquarters", es: "La sede de la policía de Londres", de: "Das Londoner Polizeipräsidium", nl: "Het hoofdkwartier van de politie van Londen" },
          { en: "A royal palace", es: "Un palacio real", de: "Ein königlicher Palast", nl: "Een koninklijk paleis" },
          { en: "A university", es: "Una universidad", de: "Eine Universität", nl: "Een universiteit" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Scotland Yard, officially the Metropolitan Police Service, was established on September 29, 1829, by Sir Robert Peel. It was the world's first modern professional police force. The name 'Scotland Yard' came from its original headquarters at 4 Whitehall Place, which had a rear entrance on Great Scotland Yard street. The force revolutionized policing with principles still used today: police must be accountable to the law, prevention is better than punishment, and police effectiveness is measured by absence of crime rather than visible police action. Officers were nicknamed 'Bobbies' or 'Peelers' after Robert Peel. The headquarters moved to New Scotland Yard on the Victoria Embankment in 1890, then to Broadway in 1967, and finally to the current location near the Thames in 2016. Scotland Yard became famous for its detective work and is referenced in countless detective novels and films. The Metropolitan Police force serves Greater London (excluding the City of London, which has its own force).",
          es: "Scotland Yard, oficialmente el Servicio de Policía Metropolitana, se estableció el 29 de septiembre de 1829 por Sir Robert Peel. Fue la primera fuerza policial profesional moderna del mundo. El nombre 'Scotland Yard' proviene de su sede original en 4 Whitehall Place, que tenía una entrada trasera en la calle Great Scotland Yard. La fuerza revolucionó la policía con principios que todavía se usan hoy: la policía debe rendir cuentas ante la ley, la prevención es mejor que el castigo, y la efectividad policial se mide por la ausencia de crimen en lugar de la acción policial visible. Los oficiales fueron apodados 'Bobbies' o 'Peelers' en honor a Robert Peel. La sede se trasladó a New Scotland Yard en Victoria Embankment en 1890, luego a Broadway en 1967, y finalmente a la ubicación actual cerca del Támesis en 2016. Scotland Yard se hizo famosa por su trabajo detectivesco y se menciona en innumerables novelas y películas de detectives. La fuerza de Policía Metropolitana sirve al Gran Londres (excluyendo la City de Londres, que tiene su propia fuerza).",
          de: "Scotland Yard, offiziell der Metropolitan Police Service, wurde am 29. September 1829 von Sir Robert Peel gegründet. Es war die erste moderne professionelle Polizeikraft der Welt. Der Name 'Scotland Yard' stammt von seinem ursprünglichen Hauptquartier in 4 Whitehall Place, das einen Hintereingang in der Great Scotland Yard Straße hatte. Die Truppe revolutionierte die Polizeiarbeit mit Prinzipien, die noch heute verwendet werden: Die Polizei muss dem Gesetz Rechenschaft ablegen, Prävention ist besser als Bestrafung, und die Polizeieffektivität wird an der Abwesenheit von Verbrechen und nicht an sichtbarer Polizeiarbeit gemessen. Offiziere wurden nach Robert Peel 'Bobbies' oder 'Peelers' genannt. Das Hauptquartier zog 1890 nach New Scotland Yard am Victoria Embankment, dann 1967 nach Broadway und schließlich 2016 an den heutigen Standort in der Nähe der Themse. Scotland Yard wurde berühmt für seine Detektivarbeit und wird in zahllosen Detektivromanen und Filmen erwähnt. Der Metropolitan Police Service dient Greater London (mit Ausnahme der City of London, die ihre eigene Polizei hat).",
          nl: "Scotland Yard, officieel de Metropolitan Police Service, werd opgericht op 29 september 1829 door Sir Robert Peel. Het was 's werelds eerste moderne professionele politiemacht. De naam 'Scotland Yard' komt van het oorspronkelijke hoofdkwartier op 4 Whitehall Place, dat een achteringang had aan Great Scotland Yard straat. De politiemacht revolutioneerde het politiewerk met principes die vandaag nog steeds worden gebruikt: de politie moet verantwoording afleggen aan de wet, preventie is beter dan straf, en de effectiviteit van de politie wordt gemeten aan de afwezigheid van criminaliteit in plaats van zichtbare politieacties. Agenten werden 'Bobbies' of 'Peelers' genoemd naar Robert Peel. Het hoofdkwartier verhuisde naar New Scotland Yard aan de Victoria Embankment in 1890, vervolgens naar Broadway in 1967, en uiteindelijk naar de huidige locatie bij de Theems in 2016. Scotland Yard werd beroemd om zijn detectivewerk en wordt genoemd in talloze detectiveromans en films. De Metropolitan Police dient Greater London (met uitzondering van de City of London, die zijn eigen politiemacht heeft)."
        }
      },
      {
        question: {
          en: "Botswana gained independence on September 30, 1966 (some sources say September 29). From which country did Botswana gain independence?",
          es: "Botswana obtuvo la independencia el 30 de septiembre de 1966 (algunas fuentes dicen el 29 de septiembre). ¿De qué país obtuvo Botswana la independencia?",
          de: "Botswana erlangte am 30. September 1966 die Unabhängigkeit (einige Quellen sagen 29. September). Von welchem Land erlangte Botswana die Unabhängigkeit?",
          nl: "Botswana verwierf onafhankelijkheid op 30 september 1966 (sommige bronnen zeggen 29 september). Van welk land kreeg Botswana onafhankelijkheid?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Botswana (formerly Bechuanaland Protectorate) gained independence from the United Kingdom on September 30, 1966. The British had established the protectorate in 1885 to prevent expansion by Germany from the west and the Boer republics from the east. Unlike many African colonies, Bechuanaland was relatively peaceful and not heavily exploited for resources. Independence came peacefully under the leadership of Seretse Khama, who became Botswana's first president. At independence, Botswana was one of the world's poorest countries with a GDP per capita of about $70 and only 12 kilometers of paved roads. However, the discovery of diamonds in 1967 transformed the economy. Botswana became one of Africa's success stories with prudent economic management, stable democracy, and respect for the rule of law. Today, Botswana has one of Africa's highest GDP per capita. The country maintained multiparty democracy since independence, a rarity in post-colonial Africa. Botswana's success is often attributed to good governance and wise management of diamond revenues.",
          es: "Botswana (anteriormente Protectorado de Bechuanalandia) obtuvo la independencia del Reino Unido el 30 de septiembre de 1966. Los británicos habían establecido el protectorado en 1885 para prevenir la expansión de Alemania desde el oeste y las repúblicas Boer desde el este. A diferencia de muchas colonias africanas, Bechuanalandia fue relativamente pacífica y no fue fuertemente explotada por recursos. La independencia llegó pacíficamente bajo el liderazgo de Seretse Khama, quien se convirtió en el primer presidente de Botswana. En la independencia, Botswana era uno de los países más pobres del mundo con un PIB per cápita de unos $70 y solo 12 kilómetros de carreteras pavimentadas. Sin embargo, el descubrimiento de diamantes en 1967 transformó la economía. Botswana se convirtió en una de las historias de éxito de África con gestión económica prudente, democracia estable y respeto por el estado de derecho. Hoy, Botswana tiene uno de los PIB per cápita más altos de África. El país ha mantenido la democracia multipartidista desde la independencia, una rareza en el África poscolonial. El éxito de Botswana a menudo se atribuye a la buena gobernanza y la gestión sabia de los ingresos de diamantes.",
          de: "Botswana (ehemals Betschuanaland-Protektorat) erlangte am 30. September 1966 die Unabhängigkeit vom Vereinigten Königreich. Die Briten hatten das Protektorat 1885 eingerichtet, um die Expansion Deutschlands von Westen und der Burenrepubliken von Osten zu verhindern. Im Gegensatz zu vielen afrikanischen Kolonien war Betschuanaland relativ friedlich und wurde nicht stark für Ressourcen ausgebeutet. Die Unabhängigkeit kam friedlich unter der Führung von Seretse Khama, der Botswanas erster Präsident wurde. Bei der Unabhängigkeit war Botswana eines der ärmsten Länder der Welt mit einem BIP pro Kopf von etwa 70 Dollar und nur 12 Kilometern asphaltierter Straßen. Die Entdeckung von Diamanten im Jahr 1967 veränderte jedoch die Wirtschaft. Botswana wurde zu einer der Erfolgsgeschichten Afrikas mit umsichtigem Wirtschaftsmanagement, stabiler Demokratie und Achtung der Rechtsstaatlichkeit. Heute hat Botswana eines der höchsten BIP pro Kopf in Afrika. Das Land hat seit der Unabhängigkeit eine Mehrparteiendemokratie aufrechterhalten, eine Seltenheit im postkolonialen Afrika. Botswanas Erfolg wird oft auf gute Regierungsführung und kluges Management der Diamanteneinnahmen zurückgeführt.",
          nl: "Botswana (voorheen Bechuanaland Protectoraat) verwierf onafhankelijkheid van het Verenigd Koninkrijk op 30 september 1966. De Britten hadden het protectoraat in 1885 opgericht om expansie door Duitsland vanuit het westen en de Boerenrepublieken vanuit het oosten te voorkomen. In tegenstelling tot veel Afrikaanse koloniën was Bechuanaland relatief vreedzaam en werd het niet zwaar uitgebuit voor grondstoffen. Onafhankelijkheid kwam vreedzaam onder leiding van Seretse Khama, die Botswana's eerste president werd. Bij onafhankelijkheid was Botswana een van 's werelds armste landen met een BBP per hoofd van ongeveer $70 en slechts 12 kilometer verharde wegen. De ontdekking van diamanten in 1967 transformeerde echter de economie. Botswana werd een van Afrika's succesverhalen met verstandig economisch beheer, stabiele democratie en respect voor de rechtsstaat. Vandaag heeft Botswana een van Afrika's hoogste BBP per hoofd. Het land heeft sinds de onafhankelijkheid een meerpartijendemocratie gehandhaafd, een zeldzaamheid in postkoloniaal Afrika. Botswana's succes wordt vaak toegeschreven aan goed bestuur en wijs beheer van diamantopbrengsten."
        }
      },
      {
        question: {
          en: "Enrico Fermi, the physicist who created the first nuclear reactor, was born on September 29, 1901. In which country was he born?",
          es: "Enrico Fermi, el físico que creó el primer reactor nuclear, nació el 29 de septiembre de 1901. ¿En qué país nació?",
          de: "Enrico Fermi, der Physiker, der den ersten Kernreaktor schuf, wurde am 29. September 1901 geboren. In welchem Land wurde er geboren?",
          nl: "Enrico Fermi, de natuurkundige die de eerste kernreactor creëerde, werd geboren op 29 september 1901. In welk land werd hij geboren?"
        },
        options: [
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Enrico Fermi was born on September 29, 1901, in Rome, Italy. He became one of the most important physicists of the 20th century. Fermi won the Nobel Prize in Physics in 1938 for his work on radioactivity and nuclear reactions. After receiving the Nobel Prize in Stockholm, Fermi and his Jewish wife emigrated to the United States to escape Mussolini's fascist regime and its anti-Semitic laws. In the US, Fermi led the team that created the first controlled nuclear chain reaction on December 2, 1942, at the University of Chicago. This achievement was part of the Manhattan Project to develop the atomic bomb. Fermi was known for his ability to excel in both theoretical and experimental physics, a rare combination. He made significant contributions to quantum theory, nuclear physics, particle physics, and statistical mechanics. The element Fermium (Fm, atomic number 100) was named in his honor. Fermi died in 1954 at age 53 from stomach cancer, possibly related to radiation exposure.",
          es: "Enrico Fermi nació el 29 de septiembre de 1901 en Roma, Italia. Se convirtió en uno de los físicos más importantes del siglo XX. Fermi ganó el Premio Nobel de Física en 1938 por su trabajo sobre radiactividad y reacciones nucleares. Después de recibir el Premio Nobel en Estocolmo, Fermi y su esposa judía emigraron a Estados Unidos para escapar del régimen fascista de Mussolini y sus leyes antisemitas. En EE.UU., Fermi dirigió el equipo que creó la primera reacción nuclear en cadena controlada el 2 de diciembre de 1942 en la Universidad de Chicago. Este logro fue parte del Proyecto Manhattan para desarrollar la bomba atómica. Fermi era conocido por su capacidad de sobresalir tanto en física teórica como experimental, una combinación rara. Hizo contribuciones significativas a la teoría cuántica, física nuclear, física de partículas y mecánica estadística. El elemento Fermio (Fm, número atómico 100) fue nombrado en su honor. Fermi murió en 1954 a los 53 años de cáncer de estómago, posiblemente relacionado con la exposición a la radiación.",
          de: "Enrico Fermi wurde am 29. September 1901 in Rom, Italien, geboren. Er wurde einer der wichtigsten Physiker des 20. Jahrhunderts. Fermi gewann 1938 den Nobelpreis für Physik für seine Arbeit über Radioaktivität und Kernreaktionen. Nach Erhalt des Nobelpreises in Stockholm emigrierten Fermi und seine jüdische Frau in die Vereinigten Staaten, um Mussolinis faschistischem Regime und seinen antisemitischen Gesetzen zu entkommen. In den USA leitete Fermi das Team, das am 2. Dezember 1942 an der Universität von Chicago die erste kontrollierte nukleare Kettenreaktion erzeugte. Diese Errungenschaft war Teil des Manhattan-Projekts zur Entwicklung der Atombombe. Fermi war bekannt für seine Fähigkeit, sowohl in theoretischer als auch experimenteller Physik zu brillieren, eine seltene Kombination. Er leistete bedeutende Beiträge zur Quantentheorie, Kernphysik, Teilchenphysik und statistischen Mechanik. Das Element Fermium (Fm, Ordnungszahl 100) wurde ihm zu Ehren benannt. Fermi starb 1954 im Alter von 53 Jahren an Magenkrebs, möglicherweise im Zusammenhang mit Strahlenexposition.",
          nl: "Enrico Fermi werd geboren op 29 september 1901 in Rome, Italië. Hij werd een van de belangrijkste natuurkundigen van de 20e eeuw. Fermi won de Nobelprijs voor Natuurkunde in 1938 voor zijn werk aan radioactiviteit en kernreacties. Na het ontvangen van de Nobelprijs in Stockholm emigreerden Fermi en zijn Joodse vrouw naar de Verenigde Staten om te ontsnappen aan Mussolini's fascistische regime en zijn antisemitische wetten. In de VS leidde Fermi het team dat op 2 december 1942 de eerste gecontroleerde nucleaire kettingreactie creëerde aan de Universiteit van Chicago. Deze prestatie was onderdeel van het Manhattan Project om de atoombom te ontwikkelen. Fermi stond bekend om zijn vermogen om uit te blinken in zowel theoretische als experimentele natuurkunde, een zeldzame combinatie. Hij leverde belangrijke bijdragen aan kwantumtheorie, kernfysica, deeltjesfysica en statistische mechanica. Het element Fermium (Fm, atoomnummer 100) werd naar hem vernoemd. Fermi stierf in 1954 op 53-jarige leeftijd aan maagkanker, mogelijk gerelateerd aan blootstelling aan straling."
        }
      },
      {
        question: {
          en: "What is 81 ÷ 9?",
          es: "¿Cuánto es 81 ÷ 9?",
          de: "Was ist 81 ÷ 9?",
          nl: "Hoeveel is 81 ÷ 9?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "What type of organization is Scotland Yard?",
          es: "¿Qué tipo de organización es Scotland Yard?",
          de: "Was für eine Organisation ist Scotland Yard?",
          nl: "Wat voor soort organisatie is Scotland Yard?"
        },
        options: [
          { en: "A hospital", es: "Un hospital", de: "Ein Krankenhaus", nl: "Een ziekenhuis" },
          { en: "A school", es: "Una escuela", de: "Eine Schule", nl: "Een school" },
          { en: "A police force", es: "Una fuerza policial", de: "Eine Polizeikraft", nl: "Een politiemacht" },
          { en: "A museum", es: "Un museo", de: "Ein Museum", nl: "Een museum" }
        ],
        correctIndex: 2
      }
    ],

    // Day 30 - September 30th: Babe Ruth's 60th home run (1927), Botswana independence (1966), James Dean dies (1955)
    day30: [
      {
        question: {
          en: "On September 30, 1927, Babe Ruth hit his 60th home run of the season. In which sport did Babe Ruth play?",
          es: "El 30 de septiembre de 1927, Babe Ruth bateó su jonrón número 60 de la temporada. ¿En qué deporte jugó Babe Ruth?",
          de: "Am 30. September 1927 schlug Babe Ruth seinen 60. Home Run der Saison. In welcher Sportart spielte Babe Ruth?",
          nl: "Op 30 september 1927 sloeg Babe Ruth zijn 60e homerun van het seizoen. In welke sport speelde Babe Ruth?"
        },
        options: [
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Football", es: "Fútbol americano", de: "American Football", nl: "American football" },
          { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
          { en: "Hockey", es: "Hockey", de: "Hockey", nl: "Hockey" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Babe Ruth hit his 60th home run on September 30, 1927, setting a single-season record that stood for 34 years. George Herman 'Babe' Ruth Jr. (1895-1948) was one of baseball's greatest players. He played for the Boston Red Sox (1914-1919) and New York Yankees (1920-1934). Ruth revolutionized baseball by making the home run a dominant offensive strategy. Before Ruth, baseball focused on 'small ball' tactics. His 60 home runs in 1927 seemed untouchable until Roger Maris hit 61 in 1961. Ruth's career total of 714 home runs stood as the record until Hank Aaron broke it in 1974. Beyond statistics, Ruth became an American cultural icon during the Roaring Twenties. His larger-than-life personality and prodigious eating and drinking habits were legendary. Ruth helped save baseball after the 1919 Black Sox scandal damaged the sport's reputation. He earned the nicknames 'The Sultan of Swat' and 'The Bambino.' Ruth was among the first five players inducted into the Baseball Hall of Fame in 1936.",
          es: "Babe Ruth bateó su jonrón número 60 el 30 de septiembre de 1927, estableciendo un récord de temporada individual que se mantuvo durante 34 años. George Herman 'Babe' Ruth Jr. (1895-1948) fue uno de los mejores jugadores de béisbol. Jugó para los Boston Red Sox (1914-1919) y los New York Yankees (1920-1934). Ruth revolucionó el béisbol haciendo del jonrón una estrategia ofensiva dominante. Antes de Ruth, el béisbol se centraba en tácticas de 'small ball'. Sus 60 jonrones en 1927 parecían intocables hasta que Roger Maris bateó 61 en 1961. El total de carrera de Ruth de 714 jonrones se mantuvo como récord hasta que Hank Aaron lo rompió en 1974. Más allá de las estadísticas, Ruth se convirtió en un ícono cultural estadounidense durante los Años Locos. Su personalidad más grande que la vida y sus prodigiosos hábitos de comer y beber eran legendarios. Ruth ayudó a salvar el béisbol después de que el escándalo de los Black Sox de 1919 dañara la reputación del deporte. Ganó los apodos 'El Sultán del Swat' y 'El Bambino'. Ruth fue uno de los primeros cinco jugadores incluidos en el Salón de la Fama del Béisbol en 1936.",
          de: "Babe Ruth schlug am 30. September 1927 seinen 60. Home Run und stellte damit einen Einzelsaison-Rekord auf, der 34 Jahre lang Bestand hatte. George Herman 'Babe' Ruth Jr. (1895-1948) war einer der größten Baseballspieler. Er spielte für die Boston Red Sox (1914-1919) und die New York Yankees (1920-1934). Ruth revolutionierte Baseball, indem er den Home Run zu einer dominanten Offensivstrategie machte. Vor Ruth konzentrierte sich Baseball auf 'Small Ball'-Taktiken. Seine 60 Home Runs im Jahr 1927 schienen unerreichbar, bis Roger Maris 1961 61 schlug. Ruths Karrieregesamtzahl von 714 Home Runs war der Rekord, bis Hank Aaron ihn 1974 brach. Über die Statistiken hinaus wurde Ruth während der Goldenen Zwanziger zu einer amerikanischen Kulturikone. Seine größer-als-das-Leben-Persönlichkeit und seine enormen Ess- und Trinkgewohnheiten waren legendär. Ruth half, Baseball zu retten, nachdem der Black Sox-Skandal von 1919 den Ruf des Sports beschädigt hatte. Er erhielt die Spitznamen 'The Sultan of Swat' und 'The Bambino'. Ruth gehörte zu den ersten fünf Spielern, die 1936 in die Baseball Hall of Fame aufgenommen wurden.",
          nl: "Babe Ruth sloeg op 30 september 1927 zijn 60e homerun en vestigde daarmee een seizoensrecord dat 34 jaar standhield. George Herman 'Babe' Ruth Jr. (1895-1948) was een van de grootste honkbalspelers. Hij speelde voor de Boston Red Sox (1914-1919) en New York Yankees (1920-1934). Ruth revolutioneerde honkbal door de homerun een dominante offensieve strategie te maken. Voor Ruth concentreerde honkbal zich op 'small ball'-tactieken. Zijn 60 homeruns in 1927 leken onaantastbaar totdat Roger Maris er 61 sloeg in 1961. Ruth's carrièretotaal van 714 homeruns was het record totdat Hank Aaron het in 1974 brak. Naast statistieken werd Ruth tijdens de Roaring Twenties een Amerikaans cultureel icoon. Zijn larger-than-life persoonlijkheid en zijn enorme eet- en drinkgewoonten waren legendarisch. Ruth hielp honkbal te redden nadat het Black Sox-schandaal van 1919 de reputatie van de sport had beschadigd. Hij kreeg de bijnamen 'The Sultan of Swat' en 'The Bambino'. Ruth behoorde tot de eerste vijf spelers die in 1936 werden opgenomen in de Baseball Hall of Fame."
        }
      },
      {
        question: {
          en: "Actor James Dean died in a car crash on September 30, 1955, at age 24. How many major films did he complete during his short career?",
          es: "El actor James Dean murió en un accidente automovilístico el 30 de septiembre de 1955, a los 24 años. ¿Cuántas películas importantes completó durante su breve carrera?",
          de: "Schauspieler James Dean starb am 30. September 1955 bei einem Autounfall im Alter von 24 Jahren. Wie viele große Filme vollendete er während seiner kurzen Karriere?",
          nl: "Acteur James Dean stierf in een auto-ongeluk op 30 september 1955, op 24-jarige leeftijd. Hoeveel grote films voltooide hij tijdens zijn korte carrière?"
        },
        options: [
          { en: "One", es: "Una", de: "Einen", nl: "Een" },
          { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
          { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" },
          { en: "Seven", es: "Siete", de: "Sieben", nl: "Zeven" }
        ],
        correctIndex: 1,
        explanation: {
          en: "James Dean completed only three major films before his death: 'East of Eden' (1955), 'Rebel Without a Cause' (1955), and 'Giant' (1956, released posthumously). Dean was born in 1931 in Marion, Indiana. He moved to Hollywood in 1951 and worked in television and theater before his film breakthrough. Dean became a cultural icon of teenage disillusionment and social estrangement. His performance in 'East of Eden' earned him an Academy Award nomination for Best Actor. On September 30, 1955, Dean was driving his Porsche 550 Spyder to a racing event in Salinas, California when he collided with another vehicle near Cholame, California. He died instantly at age 24. After his death, Dean received a second Oscar nomination for 'Giant,' making him the only actor to receive two posthumous acting nominations. Dean's premature death cemented his legendary status. He became an enduring symbol of American youth rebellion and cool. Despite his brief career, Dean's influence on popular culture and acting remains significant decades later.",
          es: "James Dean completó solo tres películas importantes antes de su muerte: 'Al este del Edén' (1955), 'Rebelde sin causa' (1955) y 'Gigante' (1956, estrenada póstumamente). Dean nació en 1931 en Marion, Indiana. Se mudó a Hollywood en 1951 y trabajó en televisión y teatro antes de su gran avance en el cine. Dean se convirtió en un ícono cultural de la desilusión adolescente y el distanciamiento social. Su actuación en 'Al este del Edén' le valió una nominación al Premio de la Academia como Mejor Actor. El 30 de septiembre de 1955, Dean conducía su Porsche 550 Spyder a un evento de carreras en Salinas, California cuando chocó con otro vehículo cerca de Cholame, California. Murió instantáneamente a los 24 años. Después de su muerte, Dean recibió una segunda nominación al Oscar por 'Gigante', convirtiéndolo en el único actor en recibir dos nominaciones de actuación póstumas. La muerte prematura de Dean cimentó su estatus legendario. Se convirtió en un símbolo duradero de la rebelión juvenil estadounidense y la elegancia. A pesar de su breve carrera, la influencia de Dean en la cultura popular y la actuación sigue siendo significativa décadas después.",
          de: "James Dean vollendete nur drei große Filme vor seinem Tod: 'Jenseits von Eden' (1955), 'Denn sie wissen nicht, was sie tun' (1955) und 'Giganten' (1956, posthum veröffentlicht). Dean wurde 1931 in Marion, Indiana geboren. Er zog 1951 nach Hollywood und arbeitete in Fernsehen und Theater, bevor sein Filmdurchbruch kam. Dean wurde zu einer Kulturikone jugendlicher Desillusionierung und sozialer Entfremdung. Seine Leistung in 'Jenseits von Eden' brachte ihm eine Oscar-Nominierung als Bester Hauptdarsteller ein. Am 30. September 1955 fuhr Dean mit seinem Porsche 550 Spyder zu einem Rennen in Salinas, Kalifornien, als er in der Nähe von Cholame, Kalifornien mit einem anderen Fahrzeug zusammenstieß. Er starb sofort im Alter von 24 Jahren. Nach seinem Tod erhielt Dean eine zweite Oscar-Nominierung für 'Giganten' und wurde damit der einzige Schauspieler, der zwei posthume Schauspiel-Nominierungen erhielt. Deans vorzeitiger Tod zementierte seinen legendären Status. Er wurde zu einem dauerhaften Symbol amerikanischer Jugendrebellion und Coolness. Trotz seiner kurzen Karriere bleibt Deans Einfluss auf Popkultur und Schauspielerei Jahrzehnte später bedeutend.",
          nl: "James Dean voltooide slechts drie grote films voor zijn dood: 'East of Eden' (1955), 'Rebel Without a Cause' (1955) en 'Giant' (1956, postuum uitgebracht). Dean werd geboren in 1931 in Marion, Indiana. Hij verhuisde in 1951 naar Hollywood en werkte in televisie en theater voordat zijn filmdoorbraak kwam. Dean werd een cultureel icoon van tienerdesi llusie en sociale vervreemding. Zijn optreden in 'East of Eden' leverde hem een Academy Award-nominatie op voor Beste Acteur. Op 30 september 1955 reed Dean in zijn Porsche 550 Spyder naar een race-evenement in Salinas, Californië toen hij botste met een ander voertuig bij Cholame, Californië. Hij stierf onmiddellijk op 24-jarige leeftijd. Na zijn dood ontving Dean een tweede Oscar-nominatie voor 'Giant', waardoor hij de enige acteur werd die twee posthume acteernominaties ontving. Dean's voortijdige dood bezegelde zijn legendarische status. Hij werd een blijvend symbool van Amerikaanse jeugdrebellion en coolness. Ondanks zijn korte carrière blijft Dean's invloed op populaire cultuur en acteren decennia later aanzienlijk."
        }
      },
      {
        question: {
          en: "Botswana gained independence on September 30, 1966. What valuable resource was discovered there shortly after independence?",
          es: "Botswana obtuvo la independencia el 30 de septiembre de 1966. ¿Qué recurso valioso se descubrió allí poco después de la independencia?",
          de: "Botswana erlangte am 30. September 1966 die Unabhängigkeit. Welche wertvolle Ressource wurde dort kurz nach der Unabhängigkeit entdeckt?",
          nl: "Botswana verwierf onafhankelijkheid op 30 september 1966. Welke waardevolle grondstof werd daar kort na de onafhankelijkheid ontdekt?"
        },
        options: [
          { en: "Oil", es: "Petróleo", de: "Öl", nl: "Olie" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Diamonds", es: "Diamantes", de: "Diamanten", nl: "Diamanten" },
          { en: "Coal", es: "Carbón", de: "Kohle", nl: "Kolen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Diamonds were discovered in Botswana in 1967, just one year after independence. This discovery transformed Botswana from one of the world's poorest countries into an upper-middle-income nation. The Orapa diamond mine, discovered in 1967, became one of the world's largest diamond mines. Botswana partnered with De Beers to form Debswana, a 50-50 joint venture that manages diamond mining. Unlike many resource-rich African countries, Botswana avoided the 'resource curse' through good governance, transparent management, and wise investment of diamond revenues in education, healthcare, and infrastructure. Today, Botswana is the world's largest producer of diamonds by value. The diamond industry accounts for about one-third of Botswana's GDP and most of its export revenue. The government has invested diamond proceeds into sovereign wealth funds and economic diversification efforts. Botswana's success story demonstrates how natural resources can benefit a nation when managed properly. The country has maintained political stability and democratic governance since independence.",
          es: "Los diamantes fueron descubiertos en Botswana en 1967, solo un año después de la independencia. Este descubrimiento transformó a Botswana de uno de los países más pobres del mundo a una nación de ingreso medio-alto. La mina de diamantes de Orapa, descubierta en 1967, se convirtió en una de las minas de diamantes más grandes del mundo. Botswana se asoció con De Beers para formar Debswana, una empresa conjunta 50-50 que gestiona la minería de diamantes. A diferencia de muchos países africanos ricos en recursos, Botswana evitó la 'maldición de los recursos' a través de buen gobierno, gestión transparente e inversión sabia de los ingresos de diamantes en educación, atención médica e infraestructura. Hoy, Botswana es el mayor productor mundial de diamantes por valor. La industria de diamantes representa aproximadamente un tercio del PIB de Botswana y la mayor parte de sus ingresos de exportación. El gobierno ha invertido las ganancias de diamantes en fondos soberanos de riqueza y esfuerzos de diversificación económica. La historia de éxito de Botswana demuestra cómo los recursos naturales pueden beneficiar a una nación cuando se gestionan adecuadamente. El país ha mantenido estabilidad política y gobierno democrático desde la independencia.",
          de: "Diamanten wurden 1967 in Botswana entdeckt, nur ein Jahr nach der Unabhängigkeit. Diese Entdeckung verwandelte Botswana von einem der ärmsten Länder der Welt in eine Nation mit oberem mittlerem Einkommen. Die 1967 entdeckte Orapa-Diamantenmine wurde zu einer der größten Diamantenminen der Welt. Botswana ging eine Partnerschaft mit De Beers ein, um Debswana zu gründen, ein 50-50-Joint-Venture, das den Diamantenabbau verwaltet. Im Gegensatz zu vielen ressourcenreichen afrikanischen Ländern vermied Botswana den 'Ressourcenfluch' durch gute Regierungsführung, transparentes Management und kluge Investitionen der Diamanteneinnahmen in Bildung, Gesundheitswesen und Infrastruktur. Heute ist Botswana der weltgrößte Diamantenproduzent nach Wert. Die Diamantenindustrie macht etwa ein Drittel des BIP von Botswana und den Großteil der Exporteinnahmen aus. Die Regierung hat Diamantenerlöse in Staatsfonds und wirtschaftliche Diversifizierungsbemühungen investiert. Botswanas Erfolgsgeschichte zeigt, wie natürliche Ressourcen einer Nation zugute kommen können, wenn sie richtig verwaltet werden. Das Land hat seit der Unabhängigkeit politische Stabilität und demokratische Regierungsführung aufrechterhalten.",
          nl: "Diamanten werden ontdekt in Botswana in 1967, slechts één jaar na de onafhankelijkheid. Deze ontdekking transformeerde Botswana van een van 's werelds armste landen tot een land met een hoger middeninkomen. De Orapa diamantmijn, ontdekt in 1967, werd een van 's werelds grootste diamantmijnen. Botswana ging in partnerschap met De Beers om Debswana te vormen, een 50-50 joint venture die diamantwinning beheert. In tegenstelling tot veel grondstofrijke Afrikaanse landen vermeed Botswana de 'grondstoffenvloek' door goed bestuur, transparant beheer en verstandige investeringen van diamantopbrengsten in onderwijs, gezondheidszorg en infrastructuur. Vandaag is Botswana de grootste diamantproducent ter wereld naar waarde. De diamantindustrie is goed voor ongeveer een derde van Botswana's BBP en het grootste deel van de exportinkomsten. De regering heeft diamantopbrengsten geïnvesteerd in soevereine fondsen en economische diversificatie-inspanningen. Botswana's succesverhaal toont aan hoe natuurlijke hulpbronnen een natie kunnen baten wanneer ze goed worden beheerd. Het land heeft politieke stabiliteit en democratisch bestuur gehandhaafd sinds de onafhankelijkheid."
        }
      },
      {
        question: {
          en: "What is 100 ÷ 10?",
          es: "¿Cuánto es 100 ÷ 10?",
          de: "Was ist 100 ÷ 10?",
          nl: "Hoeveel is 100 ÷ 10?"
        },
        options: [
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 3
      },
      {
        question: {
          en: "What is the last day of September?",
          es: "¿Cuál es el último día de septiembre?",
          de: "Was ist der letzte Tag im September?",
          nl: "Wat is de laatste dag van september?"
        },
        options: [
          { en: "September 31st", es: "31 de septiembre", de: "31. September", nl: "31 september" },
          { en: "September 29th", es: "29 de septiembre", de: "29. September", nl: "29 september" },
          { en: "September 30th", es: "30 de septiembre", de: "30. September", nl: "30 september" },
          { en: "October 1st", es: "1 de octubre", de: "1. Oktober", nl: "1 oktober" }
        ],
        correctIndex: 2
      }
    ]
  };

  // Export September challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('september', septemberChallenges);
  }

})();