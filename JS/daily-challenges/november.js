// November Daily Challenges - 30 days × 5 questions each = 150 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {
  
  const novemberChallenges = {
    name: {
      en: "November Daily Challenges",
      es: "Desafíos Diarios de Noviembre", 
      de: "November Tägliche Herausforderungen",
      nl: "November Dagelijkse Uitdagingen"
    },
    
    // Day 1 - November 1st: All Saints' Day, Algeria Revolution (1954), Lisbon Earthquake (1755)
    day1: [
      {
        question: {
          en: "In what year did the devastating Lisbon earthquake occur, one of the deadliest in history?",
          es: "¿En qué año ocurrió el devastador terremoto de Lisboa, uno de los más mortales de la historia?",
          de: "In welchem Jahr ereignete sich das verheerende Erdbeben von Lissabon, eines der tödlichsten der Geschichte?",
          nl: "In welk jaar vond de verwoestende aardbeving in Lissabon plaats, een van de dodelijkste in de geschiedenis?"
        },
        options: [
          { en: "1789", es: "1789", de: "1789", nl: "1789" },
          { en: "1720", es: "1720", de: "1720", nl: "1720" },
          { en: "1755", es: "1755", de: "1755", nl: "1755" },
          { en: "1801", es: "1801", de: "1801", nl: "1801" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Great Lisbon Earthquake struck on November 1, 1755 (All Saints' Day), causing massive destruction and triggering tsunamis and fires. It killed between 30,000-60,000 people and destroyed much of Lisbon. This disaster profoundly influenced European philosophy, particularly debates about theodicy and the nature of evil.",
          es: "El Gran Terremoto de Lisboa ocurrió el 1 de noviembre de 1755 (Día de Todos los Santos), causando una destrucción masiva y desencadenando tsunamis e incendios. Mató entre 30,000 y 60,000 personas y destruyó gran parte de Lisboa. Este desastre influyó profundamente en la filosofía europea, particularmente en los debates sobre la teodicea y la naturaleza del mal.",
          de: "Das große Erdbeben von Lissabon ereignete sich am 1. November 1755 (Allerheiligen) und verursachte massive Zerstörung sowie Tsunamis und Brände. Es tötete zwischen 30.000 und 60.000 Menschen und zerstörte einen Großteil Lissabons. Diese Katastrophe beeinflusste die europäische Philosophie tiefgreifend, insbesondere Debatten über Theodizee und die Natur des Bösen.",
          nl: "De Grote Aardbeving van Lissabon vond plaats op 1 november 1755 (Allerheiligen), wat massale vernietiging veroorzaakte en tsunami's en branden veroorzaakte. Het doodde tussen de 30.000 en 60.000 mensen en vernietigde een groot deel van Lissabon. Deze ramp beïnvloedde de Europese filosofie diepgaand, met name debatten over theodicee en de aard van het kwaad."
        }
      },
      {
        question: {
          en: "The Algerian Revolution against French colonial rule began on November 1 of which year?",
          es: "La Revolución Argelina contra el dominio colonial francés comenzó el 1 de noviembre de qué año?",
          de: "Die algerische Revolution gegen die französische Kolonialherrschaft begann am 1. November welchen Jahres?",
          nl: "De Algerijnse Revolutie tegen de Franse koloniale heerschappij begon op 1 november van welk jaar?"
        },
        options: [
          { en: "1962", es: "1962", de: "1962", nl: "1962" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1954", es: "1954", de: "1954", nl: "1954" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Algerian War of Independence began on November 1, 1954, when the National Liberation Front (FLN) launched coordinated attacks across Algeria. The war lasted until 1962, when Algeria finally gained independence from France. This brutal conflict resulted in hundreds of thousands of deaths and remains a sensitive topic in Franco-Algerian relations.",
          es: "La Guerra de Independencia de Argelia comenzó el 1 de noviembre de 1954, cuando el Frente de Liberación Nacional (FLN) lanzó ataques coordinados en toda Argelia. La guerra duró hasta 1962, cuando Argelia finalmente obtuvo la independencia de Francia. Este conflicto brutal resultó en cientos de miles de muertes y sigue siendo un tema sensible en las relaciones franco-argelinas.",
          de: "Der algerische Unabhängigkeitskrieg begann am 1. November 1954, als die Nationale Befreiungsfront (FLN) koordinierte Angriffe in ganz Algerien startete. Der Krieg dauerte bis 1962, als Algerien schließlich die Unabhängigkeit von Frankreich erlangte. Dieser brutale Konflikt forderte Hunderttausende Todesopfer und bleibt ein sensibles Thema in den französisch-algerischen Beziehungen.",
          nl: "De Algerijnse Onafhankelijkheidsoorlog begon op 1 november 1954, toen het Nationaal Bevrijdingsfront (FLN) gecoördineerde aanvallen lanceerde over heel Algerije. De oorlog duurde tot 1962, toen Algerije eindelijk onafhankelijkheid verwierf van Frankrijk. Dit wrede conflict resulteerde in honderdduizenden doden en blijft een gevoelig onderwerp in de Frans-Algerijnse betrekkingen."
        }
      },
      {
        question: {
          en: "Which Caribbean nation gained independence from the United Kingdom on November 1, 1981?",
          es: "¿Qué nación caribeña obtuvo la independencia del Reino Unido el 1 de noviembre de 1981?",
          de: "Welche karibische Nation erlangte am 1. November 1981 die Unabhängigkeit vom Vereinigten Königreich?",
          nl: "Welke Caribische natie verwierf op 1 november 1981 onafhankelijkheid van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "Jamaica", es: "Jamaica", de: "Jamaika", nl: "Jamaica" },
          { en: "Barbados", es: "Barbados", de: "Barbados", nl: "Barbados" },
          { en: "Antigua and Barbuda", es: "Antigua y Barbuda", de: "Antigua und Barbuda", nl: "Antigua en Barbuda" },
          { en: "Trinidad and Tobago", es: "Trinidad y Tobago", de: "Trinidad und Tobago", nl: "Trinidad en Tobago" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Antigua and Barbuda became independent on November 1, 1981, becoming the last of the British Leeward Islands to achieve independence. The twin-island nation remains part of the Commonwealth with King Charles III as head of state. Vere Cornwall Bird became the first Prime Minister of the independent nation.",
          es: "Antigua y Barbuda se independizó el 1 de noviembre de 1981, convirtiéndose en la última de las Islas de Sotavento británicas en lograr la independencia. La nación de dos islas sigue siendo parte de la Commonwealth con el rey Carlos III como jefe de estado. Vere Cornwall Bird se convirtió en el primer primer ministro de la nación independiente.",
          de: "Antigua und Barbuda wurde am 1. November 1981 unabhängig und war damit die letzte der britischen Leeward-Inseln, die die Unabhängigkeit erlangte. Der Inselstaat bleibt Teil des Commonwealth mit König Charles III. als Staatsoberhaupt. Vere Cornwall Bird wurde der erste Premierminister der unabhängigen Nation.",
          nl: "Antigua en Barbuda werd onafhankelijk op 1 november 1981 en was daarmee de laatste van de Britse Benedenwindse Eilanden die onafhankelijkheid verwierf. De tweeling-eilandnatie blijft deel van het Gemenebest met koning Charles III als staatshoofd. Vere Cornwall Bird werd de eerste premier van de onafhankelijke natie."
        }
      },
      {
        question: {
          en: "All Saints' Day is a Christian holiday that honors which group?",
          es: "El Día de Todos los Santos es una festividad cristiana que honra a qué grupo?",
          de: "Allerheiligen ist ein christlicher Feiertag, der welche Gruppe ehrt?",
          nl: "Allerheiligen is een christelijke feestdag die welke groep eert?"
        },
        options: [
          { en: "Only canonized popes", es: "Solo papas canonizados", de: "Nur kanonisierte Päpste", nl: "Alleen heilig verklaarde pausen" },
          { en: "All martyrs and saints", es: "Todos los mártires y santos", de: "Alle Märtyrer und Heiligen", nl: "Alle martelaren en heiligen" },
          { en: "Only the twelve apostles", es: "Solo los doce apóstoles", de: "Nur die zwölf Apostel", nl: "Alleen de twaalf apostelen" },
          { en: "Biblical prophets only", es: "Solo profetas bíblicos", de: "Nur biblische Propheten", nl: "Alleen bijbelse profeten" }
        ],
        correctIndex: 1,
        explanation: {
          en: "All Saints' Day, celebrated on November 1, honors all Christian saints, both known and unknown. The holiday has been observed since the 4th century and is a major feast day in many Christian traditions. It is followed by All Souls' Day on November 2, which commemorates the faithful departed.",
          es: "El Día de Todos los Santos, celebrado el 1 de noviembre, honra a todos los santos cristianos, conocidos y desconocidos. La festividad se ha observado desde el siglo IV y es un día de fiesta importante en muchas tradiciones cristianas. Le sigue el Día de los Fieles Difuntos el 2 de noviembre, que conmemora a los fieles difuntos.",
          de: "Allerheiligen, gefeiert am 1. November, ehrt alle christlichen Heiligen, bekannte und unbekannte. Der Feiertag wird seit dem 4. Jahrhundert begangen und ist ein wichtiger Festtag in vielen christlichen Traditionen. Ihm folgt Allerseelen am 2. November, das der verstorbenen Gläubigen gedenkt.",
          nl: "Allerheiligen, gevierd op 1 november, eert alle christelijke heiligen, zowel bekend als onbekend. De feestdag wordt sinds de 4e eeuw gevierd en is een belangrijke feestdag in veel christelijke tradities. Het wordt gevolgd door Allerzielen op 2 november, dat de overleden gelovigen herdenkt."
        }
      },
      {
        question: {
          en: "Which natural disaster typically accompanies major underwater earthquakes like the one in Lisbon?",
          es: "¿Qué desastre natural suele acompañar a los grandes terremotos submarinos como el de Lisboa?",
          de: "Welche Naturkatastrophe begleitet typischerweise große Unterwasserbeben wie das in Lissabon?",
          nl: "Welke natuurramp gaat doorgaans gepaard met grote onderzeese aardbevingen zoals die in Lissabon?"
        },
        options: [
          { en: "Hurricane", es: "Huracán", de: "Hurrikan", nl: "Orkaan" },
          { en: "Tornado", es: "Tornado", de: "Tornado", nl: "Tornado" },
          { en: "Tsunami", es: "Tsunami", de: "Tsunami", nl: "Tsunami" },
          { en: "Blizzard", es: "Ventisca", de: "Schneesturm", nl: "Sneeuwstorm" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Tsunamis are series of large ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides. The 1755 Lisbon earthquake triggered massive tsunamis that struck the Portuguese coast with waves up to 20 meters high. These waves devastated coastal areas and added significantly to the death toll.",
          es: "Los tsunamis son series de grandes olas oceánicas causadas por terremotos submarinos, erupciones volcánicas o deslizamientos de tierra. El terremoto de Lisboa de 1755 desencadenó tsunamis masivos que azotaron la costa portuguesa con olas de hasta 20 metros de altura. Estas olas devastaron áreas costeras y aumentaron significativamente el número de muertos.",
          de: "Tsunamis sind Serien großer Meereswellen, die durch Unterwasserbeben, Vulkanausbrüche oder Erdrutsche verursacht werden. Das Erdbeben von Lissabon 1755 löste massive Tsunamis aus, die die portugiesische Küste mit bis zu 20 Meter hohen Wellen trafen. Diese Wellen verwüsteten Küstengebiete und erhöhten die Zahl der Todesopfer erheblich.",
          nl: "Tsunami's zijn reeksen grote oceaangolven veroorzaakt door onderzeese aardbevingen, vulkaanuitbarstingen of aardverschuivingen. De aardbeving in Lissabon in 1755 veroorzaakte massale tsunami's die de Portugese kust troffen met golven tot 20 meter hoog. Deze golven verwoestten kustgebieden en verhoogden het dodental aanzienlijk."
        }
      }
    ],

    // Day 2 - November 2nd: James K. Polk born (1795), North Dakota statehood (1889), Boer War begins (1899)
    day2: [
      {
        question: {
          en: "Which U.S. President, known for expanding American territory significantly, was born on November 2, 1795?",
          es: "¿Qué presidente de EE.UU., conocido por expandir significativamente el territorio estadounidense, nació el 2 de noviembre de 1795?",
          de: "Welcher US-Präsident, bekannt für die erhebliche Erweiterung des amerikanischen Territoriums, wurde am 2. November 1795 geboren?",
          nl: "Welke Amerikaanse president, bekend om het aanzienlijk uitbreiden van Amerikaans territorium, werd geboren op 2 november 1795?"
        },
        options: [
          { en: "Andrew Jackson", es: "Andrew Jackson", de: "Andrew Jackson", nl: "Andrew Jackson" },
          { en: "James K. Polk", es: "James K. Polk", de: "James K. Polk", nl: "James K. Polk" },
          { en: "John Tyler", es: "John Tyler", de: "John Tyler", nl: "John Tyler" },
          { en: "Zachary Taylor", es: "Zachary Taylor", de: "Zachary Taylor", nl: "Zachary Taylor" }
        ],
        correctIndex: 1,
        explanation: {
          en: "James K. Polk, the 11th President (1845-1849), fulfilled his campaign promise of territorial expansion through 'Manifest Destiny.' During his single term, he acquired California and much of the Southwest through the Mexican-American War, negotiated the Oregon Treaty with Britain, and expanded the U.S. to the Pacific Ocean.",
          es: "James K. Polk, el 11º presidente (1845-1849), cumplió su promesa de campaña de expansión territorial a través del 'Destino Manifiesto.' Durante su único mandato, adquirió California y gran parte del suroeste a través de la Guerra México-Americana, negoció el Tratado de Oregón con Gran Bretaña y expandió EE.UU. hasta el Océano Pacífico.",
          de: "James K. Polk, der 11. Präsident (1845-1849), erfüllte sein Wahlkampfversprechen der territorialen Expansion durch 'Manifest Destiny'. Während seiner einzigen Amtszeit erwarb er Kalifornien und einen Großteil des Südwestens durch den Mexikanisch-Amerikanischen Krieg, verhandelte den Oregon-Vertrag mit Großbritannien und erweiterte die USA bis zum Pazifischen Ozean.",
          nl: "James K. Polk, de 11e president (1845-1849), vervulde zijn campagnebelofte van territoriale expansie via 'Manifest Destiny'. Tijdens zijn enkele ambtstermijn verwierf hij Californië en een groot deel van het zuidwesten via de Mexicaans-Amerikaanse Oorlog, onderhandelde over het Oregon-verdrag met Groot-Brittannië en breidde de VS uit tot de Stille Oceaan."
        }
      },
      {
        question: {
          en: "North Dakota became the 39th U.S. state on November 2 of which year?",
          es: "Dakota del Norte se convirtió en el 39º estado de EE.UU. el 2 de noviembre de qué año?",
          de: "North Dakota wurde am 2. November welchen Jahres der 39. US-Bundesstaat?",
          nl: "North Dakota werd op 2 november van welk jaar de 39e Amerikaanse staat?"
        },
        options: [
          { en: "1876", es: "1876", de: "1876", nl: "1876" },
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1901", es: "1901", de: "1901", nl: "1901" },
          { en: "1912", es: "1912", de: "1912", nl: "1912" }
        ],
        correctIndex: 1,
        explanation: {
          en: "North Dakota achieved statehood on November 2, 1889, the same day as South Dakota. President Benjamin Harrison signed both admission papers without recording which he signed first, making it unclear which state is technically the 39th or 40th. North Dakota was listed first alphabetically, giving it the 39th position.",
          es: "Dakota del Norte logró la estadidad el 2 de noviembre de 1889, el mismo día que Dakota del Sur. El presidente Benjamin Harrison firmó ambos documentos de admisión sin registrar cuál firmó primero, lo que hace poco claro qué estado es técnicamente el 39º o 40º. Dakota del Norte se enumeró primero alfabéticamente, dándole la posición 39ª.",
          de: "North Dakota erreichte die Eigenstaatlichkeit am 2. November 1889, am selben Tag wie South Dakota. Präsident Benjamin Harrison unterzeichnete beide Aufnahmepapiere, ohne festzuhalten, welches er zuerst unterzeichnete, sodass unklar ist, welcher Staat technisch der 39. oder 40. ist. North Dakota wurde alphabetisch zuerst aufgeführt und erhielt daher die 39. Position.",
          nl: "North Dakota werd op 2 november 1889 een staat, dezelfde dag als South Dakota. President Benjamin Harrison ondertekende beide toelatingsbewijzen zonder te registreren welke hij eerst ondertekende, waardoor het onduidelijk is welke staat technisch gezien de 39e of 40e is. North Dakota werd alfabetisch als eerste vermeld, waardoor het de 39e positie kreeg."
        }
      },
      {
        question: {
          en: "The Second Boer War began on November 2, 1899, between the British Empire and which groups?",
          es: "La Segunda Guerra Bóer comenzó el 2 de noviembre de 1899 entre el Imperio Británico y qué grupos?",
          de: "Der Zweite Burenkrieg begann am 2. November 1899 zwischen dem britischen Empire und welchen Gruppen?",
          nl: "De Tweede Boerenoorlog begon op 2 november 1899 tussen het Britse Rijk en welke groepen?"
        },
        options: [
          { en: "Zulu kingdoms", es: "Reinos zulúes", de: "Zulu-Königreiche", nl: "Zulu-koninkrijken" },
          { en: "Boer republics (Transvaal and Orange Free State)", es: "Repúblicas bóer (Transvaal y Estado Libre de Orange)", de: "Burenrepubliken (Transvaal und Oranje-Freistaat)", nl: "Boerenrepublieken (Transvaal en Oranje Vrijstaat)" },
          { en: "Egyptian forces", es: "Fuerzas egipcias", de: "Ägyptische Streitkräfte", nl: "Egyptische troepen" },
          { en: "Ottoman Empire", es: "Imperio Otomano", de: "Osmanisches Reich", nl: "Ottomaanse Rijk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Second Boer War (1899-1902) was fought between the British Empire and the Boer republics of Transvaal and Orange Free State in South Africa. The war was sparked by tensions over British imperial ambitions and gold discoveries. Britain ultimately won but faced international criticism for using concentration camps, where thousands of Boer civilians died.",
          es: "La Segunda Guerra Bóer (1899-1902) se libró entre el Imperio Británico y las repúblicas bóer de Transvaal y Estado Libre de Orange en Sudáfrica. La guerra fue provocada por tensiones sobre las ambiciones imperiales británicas y el descubrimiento de oro. Gran Bretaña finalmente ganó pero enfrentó críticas internacionales por usar campos de concentración, donde miles de civiles bóer murieron.",
          de: "Der Zweite Burenkrieg (1899-1902) wurde zwischen dem britischen Empire und den Burenrepubliken Transvaal und Oranje-Freistaat in Südafrika ausgetragen. Der Krieg wurde durch Spannungen über britische imperiale Ambitionen und Goldfunde ausgelöst. Großbritannien gewann letztendlich, sah sich aber internationaler Kritik wegen der Nutzung von Konzentrationslagern ausgesetzt, in denen Tausende burischer Zivilisten starben.",
          nl: "De Tweede Boerenoorlog (1899-1902) werd uitgevochten tussen het Britse Rijk en de Boerenrepublieken Transvaal en Oranje Vrijstaat in Zuid-Afrika. De oorlog werd veroorzaakt door spanningen over Britse imperiale ambities en goudontdekkingen. Groot-Brittannië won uiteindelijk maar kreeg internationale kritiek voor het gebruik van concentratiekampen, waar duizenden Boerenciviele slachtoffers vielen."
        }
      },
      {
        question: {
          en: "What major natural resource discovery in the Transvaal contributed to tensions leading to the Boer War?",
          es: "¿Qué importante descubrimiento de recursos naturales en Transvaal contribuyó a las tensiones que llevaron a la Guerra Bóer?",
          de: "Welche wichtige Entdeckung natürlicher Ressourcen in Transvaal trug zu den Spannungen bei, die zum Burenkrieg führten?",
          nl: "Welke belangrijke ontdekking van natuurlijke hulpbronnen in Transvaal droeg bij aan spanningen die leidden tot de Boerenoorlog?"
        },
        options: [
          { en: "Oil", es: "Petróleo", de: "Öl", nl: "Olie" },
          { en: "Diamonds", es: "Diamantes", de: "Diamanten", nl: "Diamanten" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Coal", es: "Carbón", de: "Kohle", nl: "Kolen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The discovery of massive gold deposits in the Witwatersrand region of Transvaal in 1886 transformed South Africa's economy and attracted thousands of British and international prospectors. This influx of foreigners (uitlanders) and British economic interests in the gold mines created tensions with the Boer government, ultimately contributing to the outbreak of war.",
          es: "El descubrimiento de depósitos masivos de oro en la región de Witwatersrand de Transvaal en 1886 transformó la economía de Sudáfrica y atrajo a miles de buscadores británicos e internacionales. Esta afluencia de extranjeros (uitlanders) e intereses económicos británicos en las minas de oro creó tensiones con el gobierno bóer, contribuyendo en última instancia al estallido de la guerra.",
          de: "Die Entdeckung massiver Goldvorkommen in der Witwatersrand-Region von Transvaal im Jahr 1886 verwandelte Südafrikas Wirtschaft und zog Tausende britischer und internationaler Goldsucher an. Dieser Zustrom von Ausländern (Uitlanders) und britischen wirtschaftlichen Interessen an den Goldminen schuf Spannungen mit der Burenregierung und trug letztendlich zum Ausbruch des Krieges bei.",
          nl: "De ontdekking van enorme goudvoorraden in de Witwatersrand-regio van Transvaal in 1886 transformeerde de Zuid-Afrikaanse economie en trok duizenden Britse en internationale goudzoeker aan. Deze toestroom van buitenlanders (uitlanders) en Britse economische belangen in de goudmijnen creëerde spanningen met de Boerenregering en droeg uiteindelijk bij aan het uitbreken van de oorlog."
        }
      },
      {
        question: {
          en: "What was James K. Polk's political party affiliation?",
          es: "¿Cuál fue la afiliación del partido político de James K. Polk?",
          de: "Welcher politischen Partei gehörte James K. Polk an?",
          nl: "Wat was de politieke partijaffiliatie van James K. Polk?"
        },
        options: [
          { en: "Whig Party", es: "Partido Whig", de: "Whig-Partei", nl: "Whig-partij" },
          { en: "Democratic Party", es: "Partido Demócrata", de: "Demokratische Partei", nl: "Democratische Partij" },
          { en: "Republican Party", es: "Partido Republicano", de: "Republikanische Partei", nl: "Republikeinse Partij" },
          { en: "Federalist Party", es: "Partido Federalista", de: "Föderalistische Partei", nl: "Federalistische Partij" }
        ],
        correctIndex: 1,
        explanation: {
          en: "James K. Polk was a member of the Democratic Party and a protégé of Andrew Jackson. He served as Speaker of the House and Governor of Tennessee before becoming president. Polk was a strong advocate of westward expansion and 'Manifest Destiny,' the belief that the United States was destined to expand across North America.",
          es: "James K. Polk fue miembro del Partido Demócrata y protegido de Andrew Jackson. Sirvió como Presidente de la Cámara y Gobernador de Tennessee antes de convertirse en presidente. Polk fue un fuerte defensor de la expansión hacia el oeste y el 'Destino Manifiesto', la creencia de que Estados Unidos estaba destinado a expandirse por América del Norte.",
          de: "James K. Polk war Mitglied der Demokratischen Partei und ein Schützling von Andrew Jackson. Er diente als Sprecher des Repräsentantenhauses und Gouverneur von Tennessee, bevor er Präsident wurde. Polk war ein starker Befürworter der Westexpansion und des 'Manifest Destiny', des Glaubens, dass die Vereinigten Staaten dazu bestimmt waren, sich über Nordamerika auszudehnen.",
          nl: "James K. Polk was lid van de Democratische Partij en een protegé van Andrew Jackson. Hij diende als voorzitter van het Huis van Afgevaardigden en gouverneur van Tennessee voordat hij president werd. Polk was een sterke voorstander van westelijke expansie en 'Manifest Destiny', het geloof dat de Verenigde Staten voorbestemd waren om zich over Noord-Amerika uit te breiden."
        }
      }
    ],

    // Day 3 - November 3rd: Sputnik 2/Laika (1957), Linus Pauling Nobel Prize (1962), Panama independence (1903)
    day3: [
      {
        question: {
          en: "What was the name of the first animal to orbit Earth, launched aboard Sputnik 2 on November 3, 1957?",
          es: "¿Cuál fue el nombre del primer animal en orbitar la Tierra, lanzado a bordo del Sputnik 2 el 3 de noviembre de 1957?",
          de: "Wie hieß das erste Tier, das die Erde umkreiste und am 3. November 1957 an Bord von Sputnik 2 gestartet wurde?",
          nl: "Wat was de naam van het eerste dier dat de aarde omcirkelde, gelanceerd aan boord van Spoetnik 2 op 3 november 1957?"
        },
        options: [
          { en: "Ham", es: "Ham", de: "Ham", nl: "Ham" },
          { en: "Laika", es: "Laika", de: "Laika", nl: "Laika" },
          { en: "Strelka", es: "Strelka", de: "Strelka", nl: "Strelka" },
          { en: "Belka", es: "Belka", de: "Belka", nl: "Belka" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Laika, a Soviet space dog, became the first animal to orbit Earth on November 3, 1957. Unfortunately, she died within hours of launch due to overheating and stress. Her mission provided crucial data about living organisms in space, though it raised ethical concerns. Laika's sacrifice paved the way for future human spaceflight.",
          es: "Laika, una perra espacial soviética, se convirtió en el primer animal en orbitar la Tierra el 3 de noviembre de 1957. Desafortunadamente, murió en horas después del lanzamiento debido al sobrecalentamiento y el estrés. Su misión proporcionó datos cruciales sobre organismos vivos en el espacio, aunque planteó preocupaciones éticas. El sacrificio de Laika allanó el camino para futuros vuelos espaciales humanos.",
          de: "Laika, eine sowjetische Weltraumhündin, wurde am 3. November 1957 das erste Tier, das die Erde umkreiste. Leider starb sie innerhalb von Stunden nach dem Start aufgrund von Überhitzung und Stress. Ihre Mission lieferte entscheidende Daten über lebende Organismen im Weltraum, warf jedoch ethische Bedenken auf. Laikas Opfer ebnete den Weg für zukünftige bemannte Raumflüge.",
          nl: "Laika, een Sovjet-ruimtehond, werd op 3 november 1957 het eerste dier dat de aarde omcirkelde. Helaas stierf ze binnen enkele uren na de lancering door oververhitting en stress. Haar missie leverde cruciale gegevens op over levende organismen in de ruimte, hoewel het ethische zorgen opriep. Laika's offer baande de weg voor toekomstige bemande ruimtevluchten."
        }
      },
      {
        question: {
          en: "Linus Pauling was awarded the Nobel Peace Prize on November 3, 1962, for his work on what issue?",
          es: "Linus Pauling recibió el Premio Nobel de la Paz el 3 de noviembre de 1962 por su trabajo en qué tema?",
          de: "Linus Pauling wurde am 3. November 1962 der Friedensnobelpreis für seine Arbeit zu welchem Thema verliehen?",
          nl: "Linus Pauling kreeg op 3 november 1962 de Nobelprijs voor de Vrede voor zijn werk over welk onderwerp?"
        },
        options: [
          { en: "Civil rights activism", es: "Activismo por los derechos civiles", de: "Bürgerrechtsaktivismus", nl: "Burgerrechtenactivisme" },
          { en: "Nuclear weapons testing opposition", es: "Oposición a las pruebas de armas nucleares", de: "Opposition gegen Atomwaffentests", nl: "Verzet tegen kernwapenproeven" },
          { en: "Refugee assistance", es: "Asistencia a refugiados", de: "Flüchtlingshilfe", nl: "Vluchtelingenhulp" },
          { en: "Environmental conservation", es: "Conservación ambiental", de: "Umweltschutz", nl: "Milieubescherming" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Linus Pauling received the 1962 Nobel Peace Prize for his campaign against nuclear weapons testing, particularly atmospheric tests that spread radioactive fallout. He was one of the few people to win two unshared Nobel Prizes (Chemistry in 1954, Peace in 1962). His activism helped lead to the 1963 Limited Nuclear Test Ban Treaty.",
          es: "Linus Pauling recibió el Premio Nobel de la Paz de 1962 por su campaña contra las pruebas de armas nucleares, particularmente las pruebas atmosféricas que propagaban lluvia radiactiva. Fue una de las pocas personas en ganar dos Premios Nobel sin compartir (Química en 1954, Paz en 1962). Su activismo ayudó a conducir al Tratado de Prohibición Parcial de Ensayos Nucleares de 1963.",
          de: "Linus Pauling erhielt den Friedensnobelpreis 1962 für seine Kampagne gegen Atomwaffentests, insbesondere atmosphärische Tests, die radioaktiven Fallout verbreiteten. Er war einer der wenigen Menschen, die zwei ungeteilte Nobelpreise gewannen (Chemie 1954, Frieden 1962). Sein Aktivismus trug zum Vertrag über das Verbot von Atomtests in der Atmosphäre von 1963 bei.",
          nl: "Linus Pauling ontving de Nobelprijs voor de Vrede in 1962 voor zijn campagne tegen kernwapenproeven, met name atmosferische tests die radioactieve neerslag verspreidden. Hij was een van de weinige mensen die twee ongedeelde Nobelprijzen won (Scheikunde in 1954, Vrede in 1962). Zijn activisme hielp leiden tot het Beperkt Kernstopverdrag van 1963."
        }
      },
      {
        question: {
          en: "Panama declared independence from which South American nation on November 3, 1903?",
          es: "Panamá declaró la independencia de qué nación sudamericana el 3 de noviembre de 1903?",
          de: "Panama erklärte am 3. November 1903 die Unabhängigkeit von welcher südamerikanischen Nation?",
          nl: "Panama verklaarde op 3 november 1903 onafhankelijkheid van welke Zuid-Amerikaanse natie?"
        },
        options: [
          { en: "Venezuela", es: "Venezuela", de: "Venezuela", nl: "Venezuela" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Panama declared independence from Colombia on November 3, 1903, with U.S. support. The United States backed the Panamanian revolution because Colombia had rejected a treaty allowing the U.S. to build a canal across the isthmus. Within days, Panama signed a treaty granting the U.S. control over the Canal Zone, leading to construction of the Panama Canal.",
          es: "Panamá declaró su independencia de Colombia el 3 de noviembre de 1903, con apoyo estadounidense. Estados Unidos respaldó la revolución panameña porque Colombia había rechazado un tratado que permitía a EE.UU. construir un canal a través del istmo. En días, Panamá firmó un tratado otorgando a EE.UU. control sobre la Zona del Canal, lo que llevó a la construcción del Canal de Panamá.",
          de: "Panama erklärte am 3. November 1903 mit US-Unterstützung die Unabhängigkeit von Kolumbien. Die Vereinigten Staaten unterstützten die panamaische Revolution, weil Kolumbien einen Vertrag abgelehnt hatte, der den USA erlaubte, einen Kanal durch die Landenge zu bauen. Innerhalb von Tagen unterzeichnete Panama einen Vertrag, der den USA die Kontrolle über die Kanalzone gewährte, was zum Bau des Panamakanals führte.",
          nl: "Panama verklaarde op 3 november 1903 onafhankelijkheid van Colombia, met Amerikaanse steun. De Verenigde Staten steunden de Panamese revolutie omdat Colombia een verdrag had afgewezen dat de VS toestond een kanaal door de landengte te bouwen. Binnen enkele dagen tekende Panama een verdrag dat de VS controle gaf over de Kanaalzone, wat leidde tot de bouw van het Panamakanaal."
        }
      },
      {
        question: {
          en: "What type of animal was Laika, the first creature to orbit Earth?",
          es: "¿Qué tipo de animal era Laika, la primera criatura en orbitar la Tierra?",
          de: "Welche Art von Tier war Laika, das erste Lebewesen, das die Erde umkreiste?",
          nl: "Wat voor soort dier was Laika, het eerste wezen dat de aarde omcirkelde?"
        },
        options: [
          { en: "Dog", es: "Perro", de: "Hund", nl: "Hond" },
          { en: "Monkey", es: "Mono", de: "Affe", nl: "Aap" },
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" },
          { en: "Rabbit", es: "Conejo", de: "Kaninchen", nl: "Konijn" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Laika was a stray dog from the streets of Moscow, part-Siberian Husky and part-terrier. The Soviet space program chose stray dogs because they believed these animals had already learned to endure harsh conditions. Laika was originally named Kudryavka (Little Curly) but became known worldwide as Laika, meaning 'Barker' in Russian.",
          es: "Laika era una perra callejera de las calles de Moscú, parte husky siberiano y parte terrier. El programa espacial soviético eligió perros callejeros porque creían que estos animales ya habían aprendido a soportar condiciones duras. Laika se llamaba originalmente Kudryavka (Pequeña Rizada) pero se hizo conocida mundialmente como Laika, que significa 'Ladradora' en ruso.",
          de: "Laika war ein Straßenhund aus den Straßen Moskaus, teils Sibirischer Husky und teils Terrier. Das sowjetische Raumfahrtprogramm wählte Straßenhunde, weil man glaubte, dass diese Tiere bereits gelernt hatten, harte Bedingungen zu ertragen. Laika hieß ursprünglich Kudryavka (Kleine Lockige), wurde aber weltweit als Laika bekannt, was auf Russisch 'Bellerin' bedeutet.",
          nl: "Laika was een zwerfhond van de straten van Moskou, deels Siberische Husky en deels terriër. Het Sovjet-ruimteprogramma koos zwerfhonden omdat men geloofde dat deze dieren al hadden geleerd harde omstandigheden te verdragen. Laika heette oorspronkelijk Koedryavka (Kleine Krullige) maar werd wereldwijd bekend als Laika, wat 'Blaffertje' betekent in het Russisch."
        }
      },
      {
        question: {
          en: "The construction of what major engineering project was the primary motivation for U.S. support of Panama's independence?",
          es: "¿La construcción de qué gran proyecto de ingeniería fue la motivación principal para el apoyo estadounidense a la independencia de Panamá?",
          de: "Der Bau welches großen Ingenieurprojekts war die Hauptmotivation für die US-Unterstützung der Unabhängigkeit Panamas?",
          nl: "De bouw van welk groot technisch project was de belangrijkste motivatie voor Amerikaanse steun aan de onafhankelijkheid van Panama?"
        },
        options: [
          { en: "Trans-Panama Railway", es: "Ferrocarril Transpacífico", de: "Trans-Panama-Eisenbahn", nl: "Trans-Panama-spoorweg" },
          { en: "Panama Canal", es: "Canal de Panamá", de: "Panamakanal", nl: "Panamakanaal" },
          { en: "Pan-American Highway", es: "Carretera Panamericana", de: "Panamericana", nl: "Pan-Amerikaanse snelweg" },
          { en: "Pacific Telegraph Line", es: "Línea Telegráfica del Pacífico", de: "Pazifik-Telegrafenleitung", nl: "Stille Oceaan-telegraaflijn" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Panama Canal was the primary motivation for U.S. involvement in Panama's independence. After Colombia rejected the Hay-Herrán Treaty, which would have allowed canal construction, the U.S. supported Panama's separation. The canal, completed in 1914, revolutionized maritime trade by connecting the Atlantic and Pacific Oceans, eliminating the need to sail around South America.",
          es: "El Canal de Panamá fue la motivación principal para la participación estadounidense en la independencia de Panamá. Después de que Colombia rechazara el Tratado Hay-Herrán, que habría permitido la construcción del canal, EE.UU. apoyó la separación de Panamá. El canal, completado en 1914, revolucionó el comercio marítimo al conectar los océanos Atlántico y Pacífico, eliminando la necesidad de navegar alrededor de Sudamérica.",
          de: "Der Panamakanal war die Hauptmotivation für die US-Beteiligung an Panamas Unabhängigkeit. Nachdem Kolumbien den Hay-Herrán-Vertrag abgelehnt hatte, der den Kanalbau ermöglicht hätte, unterstützten die USA die Abspaltung Panamas. Der 1914 fertiggestellte Kanal revolutionierte den Seehandel, indem er den Atlantik mit dem Pazifik verband und die Notwendigkeit beseitigte, um Südamerika herumzusegeln.",
          nl: "Het Panamakanaal was de belangrijkste motivatie voor Amerikaanse betrokkenheid bij de onafhankelijkheid van Panama. Nadat Colombia het Hay-Herrán-verdrag had afgewezen, dat de bouw van het kanaal mogelijk zou hebben gemaakt, steunde de VS de afscheiding van Panama. Het in 1914 voltooide kanaal revolutioneerde de maritieme handel door de Atlantische en Stille Oceaan te verbinden, waardoor het niet meer nodig was om rond Zuid-Amerika te varen."
        }
      }
    ],

    // Day 4 - November 4th: Iran hostage crisis (1979), Obama elected (2008), King Tut's tomb (1922)
    day4: [
      {
        question: {
          en: "The Iran hostage crisis began on November 4, 1979, when Iranian students seized which U.S. facility in Tehran?",
          es: "La crisis de rehenes de Irán comenzó el 4 de noviembre de 1979, cuando estudiantes iraníes tomaron qué instalación estadounidense en Teherán?",
          de: "Die Geiselkrise im Iran begann am 4. November 1979, als iranische Studenten welche US-Einrichtung in Teheran besetzten?",
          nl: "De Iraanse gijzelingscrisis begon op 4 november 1979, toen Iraanse studenten welke Amerikaanse faciliteit in Teheran in bezit namen?"
        },
        options: [
          { en: "Military base", es: "Base militar", de: "Militärbasis", nl: "Militaire basis" },
          { en: "Consulate building", es: "Edificio consular", de: "Konsulatsgebäude", nl: "Consulaatsgebouw" },
          { en: "CIA headquarters", es: "Sede de la CIA", de: "CIA-Hauptquartier", nl: "CIA-hoofdkwartier" },
          { en: "U.S. Embassy", es: "Embajada de EE.UU.", de: "US-Botschaft", nl: "Amerikaanse ambassade" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Iranian students seized the U.S. Embassy in Tehran on November 4, 1979, taking 52 American diplomats and citizens hostage for 444 days. The crisis began after the U.S. admitted the deposed Shah for medical treatment. It dominated the final year of Jimmy Carter's presidency and contributed to his 1980 election defeat. The hostages were finally released on January 20, 1981.",
          es: "Estudiantes iraníes tomaron la Embajada de EE.UU. en Teherán el 4 de noviembre de 1979, manteniendo a 52 diplomáticos y ciudadanos estadounidenses como rehenes durante 444 días. La crisis comenzó después de que EE.UU. admitiera al Sha depuesto para tratamiento médico. Dominó el último año de la presidencia de Jimmy Carter y contribuyó a su derrota electoral de 1980. Los rehenes finalmente fueron liberados el 20 de enero de 1981.",
          de: "Iranische Studenten besetzten am 4. November 1979 die US-Botschaft in Teheran und hielten 52 amerikanische Diplomaten und Bürger 444 Tage lang als Geiseln fest. Die Krise begann, nachdem die USA den abgesetzten Schah zur medizinischen Behandlung aufgenommen hatten. Sie dominierte das letzte Jahr von Jimmy Carters Präsidentschaft und trug zu seiner Wahlniederlage 1980 bei. Die Geiseln wurden schließlich am 20. Januar 1981 freigelassen.",
          nl: "Iraanse studenten namen op 4 november 1979 de Amerikaanse ambassade in Teheran in en hielden 52 Amerikaanse diplomaten en burgers 444 dagen gegijzeld. De crisis begon nadat de VS de afgezette sjah hadden toegelaten voor medische behandeling. Het domineerde het laatste jaar van Jimmy Carter's presidentschap en droeg bij aan zijn verkiezingsnederlaag in 1980. De gijzelaars werden uiteindelijk vrijgelaten op 20 januari 1981."
        }
      },
      {
        question: {
          en: "Who became the first African American president of the United States when elected on November 4, 2008?",
          es: "¿Quién se convirtió en el primer presidente afroamericano de Estados Unidos cuando fue elegido el 4 de noviembre de 2008?",
          de: "Wer wurde am 4. November 2008 als erster afroamerikanischer Präsident der Vereinigten Staaten gewählt?",
          nl: "Wie werd op 4 november 2008 verkozen tot de eerste Afro-Amerikaanse president van de Verenigde Staten?"
        },
        options: [
          { en: "Colin Powell", es: "Colin Powell", de: "Colin Powell", nl: "Colin Powell" },
          { en: "Jesse Jackson", es: "Jesse Jackson", de: "Jesse Jackson", nl: "Jesse Jackson" },
          { en: "Barack Obama", es: "Barack Obama", de: "Barack Obama", nl: "Barack Obama" },
          { en: "Cory Booker", es: "Cory Booker", de: "Cory Booker", nl: "Cory Booker" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Barack Obama was elected the 44th President of the United States on November 4, 2008, defeating Republican candidate John McCain. His historic victory marked a significant milestone in American history as the first African American to hold the office. Obama served two terms (2009-2017), overseeing recovery from the Great Recession and passage of the Affordable Care Act.",
          es: "Barack Obama fue elegido el 44º presidente de Estados Unidos el 4 de noviembre de 2008, derrotando al candidato republicano John McCain. Su victoria histórica marcó un hito significativo en la historia estadounidense como el primer afroamericano en ocupar el cargo. Obama sirvió dos mandatos (2009-2017), supervisando la recuperación de la Gran Recesión y la aprobación de la Ley de Atención Médica Asequible.",
          de: "Barack Obama wurde am 4. November 2008 zum 44. Präsidenten der Vereinigten Staaten gewählt und besiegte den republikanischen Kandidaten John McCain. Sein historischer Sieg markierte einen bedeutenden Meilenstein in der amerikanischen Geschichte als erster Afroamerikaner in diesem Amt. Obama diente zwei Amtszeiten (2009-2017) und überwachte die Erholung von der Großen Rezession und die Verabschiedung des Affordable Care Act.",
          nl: "Barack Obama werd op 4 november 2008 verkozen tot de 44e president van de Verenigde Staten en versloeg de Republikeinse kandidaat John McCain. Zijn historische overwinning markeerde een belangrijke mijlpaal in de Amerikaanse geschiedenis als de eerste Afro-Amerikaan in dit ambt. Obama diende twee termijnen (2009-2017) en begeleidde het herstel van de Grote Recessie en de goedkeuring van de Affordable Care Act."
        }
      },
      {
        question: {
          en: "British archaeologist Howard Carter discovered whose tomb on November 4, 1922?",
          es: "El arqueólogo británico Howard Carter descubrió la tumba de quién el 4 de noviembre de 1922?",
          de: "Der britische Archäologe Howard Carter entdeckte am 4. November 1922 wessen Grab?",
          nl: "Welke tombe ontdekte de Britse archeoloog Howard Carter op 4 november 1922?"
        },
        options: [
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
          { en: "King Tutankhamun", es: "Rey Tutankamón", de: "König Tutanchamun", nl: "Koning Toetanchamon" },
          { en: "Ramses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Howard Carter discovered the tomb of King Tutankhamun (King Tut) in Egypt's Valley of the Kings on November 4, 1922. This was one of the most significant archaeological discoveries of the 20th century, as the tomb was largely intact and filled with treasures. King Tut ruled Egypt from approximately 1332-1323 BCE and died around age 19.",
          es: "Howard Carter descubrió la tumba del rey Tutankamón (Rey Tut) en el Valle de los Reyes de Egipto el 4 de noviembre de 1922. Este fue uno de los descubrimientos arqueológicos más significativos del siglo XX, ya que la tumba estaba en gran parte intacta y llena de tesoros. El rey Tut gobernó Egipto desde aproximadamente 1332-1323 a.C. y murió alrededor de los 19 años.",
          de: "Howard Carter entdeckte am 4. November 1922 das Grab von König Tutanchamun (König Tut) im Tal der Könige in Ägypten. Dies war eine der bedeutendsten archäologischen Entdeckungen des 20. Jahrhunderts, da das Grab weitgehend intakt und voller Schätze war. König Tut regierte Ägypten von etwa 1332-1323 v. Chr. und starb im Alter von etwa 19 Jahren.",
          nl: "Howard Carter ontdekte het graf van koning Toetanchamon (koning Toet) in de Vallei der Koningen in Egypte op 4 november 1922. Dit was een van de belangrijkste archeologische ontdekkingen van de 20e eeuw, omdat het graf grotendeels intact was en vol schatten. Koning Toet regeerde Egypte van ongeveer 1332-1323 v.Chr. en stierf rond de leeftijd van 19 jaar."
        }
      },
      {
        question: {
          en: "How many days did the Iran hostage crisis last?",
          es: "¿Cuántos días duró la crisis de rehenes de Irán?",
          de: "Wie viele Tage dauerte die Geiselkrise im Iran?",
          nl: "Hoeveel dagen duurde de Iraanse gijzelingscrisis?"
        },
        options: [
          { en: "365 days", es: "365 días", de: "365 Tage", nl: "365 dagen" },
          { en: "444 days", es: "444 días", de: "444 Tage", nl: "444 dagen" },
          { en: "520 days", es: "520 días", de: "520 Tage", nl: "520 dagen" },
          { en: "289 days", es: "289 días", de: "289 Tage", nl: "289 dagen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Iran hostage crisis lasted 444 days, from November 4, 1979, to January 20, 1981. The hostages were released minutes after Ronald Reagan was inaugurated as president, ending Jimmy Carter's presidency on a difficult note. A failed rescue attempt called Operation Eagle Claw in April 1980 further complicated the crisis and cost eight American servicemen their lives.",
          es: "La crisis de rehenes de Irán duró 444 días, desde el 4 de noviembre de 1979 hasta el 20 de enero de 1981. Los rehenes fueron liberados minutos después de que Ronald Reagan fuera investido como presidente, terminando la presidencia de Jimmy Carter en una nota difícil. Un intento de rescate fallido llamado Operación Garra de Águila en abril de 1980 complicó aún más la crisis y costó la vida a ocho militares estadounidenses.",
          de: "Die Geiselkrise im Iran dauerte 444 Tage, vom 4. November 1979 bis zum 20. Januar 1981. Die Geiseln wurden Minuten nach Ronald Reagans Amtseinführung als Präsident freigelassen und beendeten Jimmy Carters Präsidentschaft auf eine schwierige Note. Ein gescheiterter Rettungsversuch namens Operation Eagle Claw im April 1980 komplizierte die Krise weiter und kostete acht amerikanische Soldaten das Leben.",
          nl: "De Iraanse gijzelingscrisis duurde 444 dagen, van 4 november 1979 tot 20 januari 1981. De gijzelaars werden vrijgelaten minuten nadat Ronald Reagan als president werd ingehuldigd, wat Jimmy Carter's presidentschap op een moeilijke noot eindigde. Een mislukte reddingspoging genaamd Operatie Eagle Claw in april 1980 compliceerde de crisis verder en kostte acht Amerikaanse militairen het leven."
        }
      },
      {
        question: {
          en: "What famous golden artifact was found covering King Tutankhamun's mummy?",
          es: "¿Qué famoso artefacto dorado se encontró cubriendo la momia del rey Tutankamón?",
          de: "Welches berühmte goldene Artefakt wurde gefunden, das König Tutanchamuns Mumie bedeckte?",
          nl: "Welk beroemd gouden artefact werd gevonden dat de mummie van koning Toetanchamon bedekte?"
        },
        options: [
          { en: "Death mask", es: "Máscara mortuoria", de: "Totenmaske", nl: "Dodenmasker" },
          { en: "Bronze shield", es: "Escudo de bronce", de: "Bronzeschild", nl: "Bronzen schild" },
          { en: "Golden crown", es: "Corona dorada", de: "Goldene Krone", nl: "Gouden kroon" },
          { en: "Silver collar", es: "Collar de plata", de: "Silberkragen", nl: "Zilveren kraag" }
        ],
        correctIndex: 0,
        explanation: {
          en: "King Tutankhamun's golden death mask is one of the most iconic artifacts from ancient Egypt. Made of solid gold and inlaid with precious stones, the mask weighs about 24 pounds (11 kg) and depicts the young pharaoh's idealized face. It has become a symbol of ancient Egyptian civilization and is displayed in the Egyptian Museum in Cairo.",
          es: "La máscara mortuoria dorada del rey Tutankamón es uno de los artefactos más icónicos del antiguo Egipto. Hecha de oro macizo e incrustada con piedras preciosas, la máscara pesa alrededor de 24 libras (11 kg) y representa el rostro idealizado del joven faraón. Se ha convertido en un símbolo de la civilización egipcia antigua y se exhibe en el Museo Egipcio de El Cairo.",
          de: "König Tutanchamuns goldene Totenmaske ist eines der ikonischsten Artefakte aus dem alten Ägypten. Aus massivem Gold gefertigt und mit Edelsteinen eingelegt, wiegt die Maske etwa 11 kg und zeigt das idealisierte Gesicht des jungen Pharaos. Sie ist zu einem Symbol der altägyptischen Zivilisation geworden und wird im Ägyptischen Museum in Kairo ausgestellt.",
          nl: "Koning Toetanchamon's gouden dodenmasker is een van de meest iconische artefacten uit het oude Egypte. Gemaakt van massief goud en ingelegd met edelstenen, weegt het masker ongeveer 11 kg en toont het geïdealiseerde gezicht van de jonge farao. Het is een symbool geworden van de oude Egyptische beschaving en wordt tentoongesteld in het Egyptisch Museum in Caïro."
        }
      }
    ],

    // Day 5 - November 5th: Guy Fawkes Night/Gunpowder Plot (1605), Art Garfunkel born (1941), Ida Tarbell born (1857)
    day5: [
      {
        question: {
          en: "The Gunpowder Plot of November 5, 1605, was an attempt to assassinate which English king?",
          es: "El Complot de la Pólvora del 5 de noviembre de 1605 fue un intento de asesinar a qué rey inglés?",
          de: "Das Pulverfass-Komplott vom 5. November 1605 war ein Versuch, welchen englischen König zu ermorden?",
          nl: "Het Buskruitverraad van 5 november 1605 was een poging om welke Engelse koning te vermoorden?"
        },
        options: [
          { en: "King Henry VIII", es: "Rey Enrique VIII", de: "König Heinrich VIII.", nl: "Koning Hendrik VIII" },
          { en: "King James I", es: "Rey Jacobo I", de: "König Jakob I.", nl: "Koning Jacobus I" },
          { en: "King Charles I", es: "Rey Carlos I", de: "König Karl I.", nl: "Koning Karel I" },
          { en: "King George III", es: "Rey Jorge III", de: "König Georg III.", nl: "Koning George III" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Gunpowder Plot was a failed assassination attempt against King James I by a group of English Catholics led by Robert Catesby. Guy Fawkes was discovered guarding 36 barrels of gunpowder beneath the House of Lords on November 5, 1605. The plot's failure is still celebrated in Britain as Guy Fawkes Night (or Bonfire Night) with fireworks and bonfires.",
          es: "El Complot de la Pólvora fue un intento fallido de asesinato contra el rey Jacobo I por un grupo de católicos ingleses liderados por Robert Catesby. Guy Fawkes fue descubierto custodiando 36 barriles de pólvora debajo de la Cámara de los Lores el 5 de noviembre de 1605. El fracaso del complot todavía se celebra en Gran Bretaña como la Noche de Guy Fawkes (o Noche de las Hogueras) con fuegos artificiales y hogueras.",
          de: "Das Pulverfass-Komplott war ein gescheiterter Attentatsversuch auf König Jakob I. durch eine Gruppe englischer Katholiken unter Führung von Robert Catesby. Guy Fawkes wurde am 5. November 1605 entdeckt, wie er 36 Fässer Schießpulver unter dem House of Lords bewachte. Das Scheitern des Komplotts wird in Großbritannien noch immer als Guy Fawkes Night (oder Bonfire Night) mit Feuerwerken und Lagerfeuern gefeiert.",
          nl: "Het Buskruitverraad was een mislukte moordaanslag op koning Jacobus I door een groep Engelse katholieken onder leiding van Robert Catesby. Guy Fawkes werd ontdekt terwijl hij 36 vaten buskruit bewaakte onder het House of Lords op 5 november 1605. Het mislukken van het complot wordt nog steeds in Groot-Brittannië gevierd als Guy Fawkes Night (of Bonfire Night) met vuurwerk en vreugdevuren."
        }
      },
      {
        question: {
          en: "Art Garfunkel, born November 5, 1941, was one half of which famous musical duo?",
          es: "Art Garfunkel, nacido el 5 de noviembre de 1941, fue la mitad de qué famoso dúo musical?",
          de: "Art Garfunkel, geboren am 5. November 1941, war eine Hälfte welches berühmten Musikduos?",
          nl: "Art Garfunkel, geboren op 5 november 1941, was de ene helft van welk beroemd muzikaal duo?"
        },
        options: [
          { en: "The Everly Brothers", es: "The Everly Brothers", de: "The Everly Brothers", nl: "The Everly Brothers" },
          { en: "Hall & Oates", es: "Hall & Oates", de: "Hall & Oates", nl: "Hall & Oates" },
          { en: "Simon & Garfunkel", es: "Simon & Garfunkel", de: "Simon & Garfunkel", nl: "Simon & Garfunkel" },
          { en: "The Righteous Brothers", es: "The Righteous Brothers", de: "The Righteous Brothers", nl: "The Righteous Brothers" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Art Garfunkel formed the legendary folk-rock duo Simon & Garfunkel with Paul Simon. They produced iconic songs including 'The Sound of Silence,' 'Bridge Over Troubled Water,' and 'Mrs. Robinson.' The duo split in 1970 after releasing their masterpiece album 'Bridge Over Troubled Water,' though they reunited for occasional performances.",
          es: "Art Garfunkel formó el legendario dúo de folk-rock Simon & Garfunkel con Paul Simon. Produjeron canciones icónicas incluyendo 'The Sound of Silence,' 'Bridge Over Troubled Water' y 'Mrs. Robinson.' El dúo se separó en 1970 después de lanzar su álbum obra maestra 'Bridge Over Troubled Water,' aunque se reunieron para actuaciones ocasionales.",
          de: "Art Garfunkel bildete das legendäre Folk-Rock-Duo Simon & Garfunkel mit Paul Simon. Sie produzierten ikonische Songs wie 'The Sound of Silence', 'Bridge Over Troubled Water' und 'Mrs. Robinson'. Das Duo trennte sich 1970 nach der Veröffentlichung ihres Meisterwerks 'Bridge Over Troubled Water', obwohl sie sich für gelegentliche Auftritte wieder zusammenfanden.",
          nl: "Art Garfunkel vormde het legendarische folk-rock duo Simon & Garfunkel met Paul Simon. Ze produceerden iconische liedjes waaronder 'The Sound of Silence', 'Bridge Over Troubled Water' en 'Mrs. Robinson'. Het duo ging uit elkaar in 1970 na het uitbrengen van hun meesterwerk-album 'Bridge Over Troubled Water', hoewel ze herenigden voor occasionele optredens."
        }
      },
      {
        question: {
          en: "Ida Tarbell, born November 5, 1857, was a pioneering journalist known for exposing which industry?",
          es: "Ida Tarbell, nacida el 5 de noviembre de 1857, fue una periodista pionera conocida por exponer qué industria?",
          de: "Ida Tarbell, geboren am 5. November 1857, war eine Pionierjournalistin, bekannt für die Enthüllung welcher Industrie?",
          nl: "Ida Tarbell, geboren op 5 november 1857, was een baanbrekende journaliste bekend om het blootleggen van welke industrie?"
        },
        options: [
          { en: "Steel industry", es: "Industria del acero", de: "Stahlindustrie", nl: "Staalindustrie" },
          { en: "Oil industry", es: "Industria petrolera", de: "Ölindustrie", nl: "Olie-industrie" },
          { en: "Railroad industry", es: "Industria ferroviaria", de: "Eisenbahnindustrie", nl: "Spoorwegindustrie" },
          { en: "Banking industry", es: "Industria bancaria", de: "Bankindustrie", nl: "Bankindustrie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ida Tarbell was a pioneering investigative journalist and muckraker who wrote 'The History of the Standard Oil Company' (1904), exposing John D. Rockefeller's monopolistic practices. Her groundbreaking work helped lead to the breakup of Standard Oil in 1911 under antitrust laws. She was one of the leading figures in investigative journalism during the Progressive Era.",
          es: "Ida Tarbell fue una periodista de investigación pionera y destapadora de escándalos que escribió 'La Historia de la Standard Oil Company' (1904), exponiendo las prácticas monopolísticas de John D. Rockefeller. Su trabajo pionero ayudó a llevar a la disolución de Standard Oil en 1911 bajo las leyes antimonopolio. Fue una de las figuras líderes en el periodismo de investigación durante la Era Progresista.",
          de: "Ida Tarbell war eine Pionierin des investigativen Journalismus und Muckraker, die 'Die Geschichte der Standard Oil Company' (1904) schrieb und John D. Rockefellers monopolistische Praktiken enthüllte. Ihre bahnbrechende Arbeit trug zur Zerschlagung von Standard Oil im Jahr 1911 unter Kartellgesetzen bei. Sie war eine der führenden Figuren im investigativen Journalismus während der Progressive Era.",
          nl: "Ida Tarbell was een baanbrekende onderzoeksjournaliste en muckraker die 'The History of the Standard Oil Company' (1904) schreef, waarin ze de monopolistische praktijken van John D. Rockefeller onthulde. Haar baanbrekende werk hielp leiden tot de opsplitsing van Standard Oil in 1911 onder antitrustswetten. Ze was een van de leidende figuren in onderzoeksjournalistiek tijdens het Progressieve Tijdperk."
        }
      },
      {
        question: {
          en: "What was Guy Fawkes's role in the Gunpowder Plot?",
          es: "¿Cuál fue el papel de Guy Fawkes en el Complot de la Pólvora?",
          de: "Was war Guy Fawkes' Rolle im Pulverfass-Komplott?",
          nl: "Wat was Guy Fawkes' rol in het Buskruitverraad?"
        },
        options: [
          { en: "He was the mastermind leader", es: "Fue el líder intelectual", de: "Er war der Drahtzieher", nl: "Hij was de brein achter het complot" },
          { en: "He guarded the explosives", es: "Custodiaba los explosivos", de: "Er bewachte die Sprengstoffe", nl: "Hij bewaakte de explosieven" },
          { en: "He informed the authorities", es: "Informó a las autoridades", de: "Er informierte die Behörden", nl: "Hij informeerde de autoriteiten" },
          { en: "He financed the operation", es: "Financió la operación", de: "Er finanzierte die Operation", nl: "Hij financierde de operatie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Guy Fawkes was assigned to guard the 36 barrels of gunpowder placed beneath the House of Lords and to light the fuse. While not the plot's mastermind (that was Robert Catesby), Fawkes became its most famous figure after his arrest. He was tortured and eventually executed along with other conspirators. His name became synonymous with the plot itself.",
          es: "Guy Fawkes fue asignado para custodiar los 36 barriles de pólvora colocados debajo de la Cámara de los Lores y encender la mecha. Aunque no era el cerebro del complot (ese era Robert Catesby), Fawkes se convirtió en su figura más famosa después de su arresto. Fue torturado y eventualmente ejecutado junto con otros conspiradores. Su nombre se volvió sinónimo del complot mismo.",
          de: "Guy Fawkes wurde beauftragt, die 36 Fässer Schießpulver unter dem House of Lords zu bewachen und die Lunte anzuzünden. Obwohl er nicht der Drahtzieher des Komplotts war (das war Robert Catesby), wurde Fawkes nach seiner Verhaftung zur bekanntesten Figur. Er wurde gefoltert und schließlich zusammen mit anderen Verschwörern hingerichtet. Sein Name wurde zum Synonym für das Komplott selbst.",
          nl: "Guy Fawkes kreeg de opdracht om de 36 vaten buskruit onder het House of Lords te bewaken en de lont aan te steken. Hoewel hij niet het brein achter het complot was (dat was Robert Catesby), werd Fawkes na zijn arrestatie de beroemdste figuur. Hij werd gemarteld en uiteindelijk geëxecuteerd samen met andere samenzweerders. Zijn naam werd synoniem met het complot zelf."
        }
      },
      {
        question: {
          en: "Which song did Simon & Garfunkel perform for the soundtrack of the film 'The Graduate'?",
          es: "¿Qué canción interpretaron Simon & Garfunkel para la banda sonora de la película 'El Graduado'?",
          de: "Welches Lied führten Simon & Garfunkel für den Soundtrack des Films 'Die Reifeprüfung' auf?",
          nl: "Welk lied voerden Simon & Garfunkel uit voor de soundtrack van de film 'The Graduate'?"
        },
        options: [
          { en: "Bridge Over Troubled Water", es: "Bridge Over Troubled Water", de: "Bridge Over Troubled Water", nl: "Bridge Over Troubled Water" },
          { en: "Mrs. Robinson", es: "Mrs. Robinson", de: "Mrs. Robinson", nl: "Mrs. Robinson" },
          { en: "Scarborough Fair", es: "Scarborough Fair", de: "Scarborough Fair", nl: "Scarborough Fair" },
          { en: "Cecilia", es: "Cecilia", de: "Cecilia", nl: "Cecilia" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'Mrs. Robinson' became one of Simon & Garfunkel's most famous songs, featured prominently in the 1967 film 'The Graduate' starring Dustin Hoffman. The song won the Grammy Award for Record of the Year in 1969. The film's soundtrack also included 'The Sound of Silence' and helped cement the duo's place in popular culture.",
          es: "'Mrs. Robinson' se convirtió en una de las canciones más famosas de Simon & Garfunkel, destacada prominentemente en la película de 1967 'El Graduado' protagonizada por Dustin Hoffman. La canción ganó el Premio Grammy a la Grabación del Año en 1969. La banda sonora de la película también incluyó 'The Sound of Silence' y ayudó a cimentar el lugar del dúo en la cultura popular.",
          de: "'Mrs. Robinson' wurde einer der berühmtesten Songs von Simon & Garfunkel, prominent im Film 'Die Reifeprüfung' von 1967 mit Dustin Hoffman. Der Song gewann 1969 den Grammy Award für Record of the Year. Der Soundtrack des Films enthielt auch 'The Sound of Silence' und half, den Platz des Duos in der Populärkultur zu festigen.",
          nl: "'Mrs. Robinson' werd een van de beroemdste nummers van Simon & Garfunkel, prominent gebruikt in de film 'The Graduate' uit 1967 met Dustin Hoffman. Het nummer won de Grammy Award voor Record of the Year in 1969. De soundtrack van de film bevatte ook 'The Sound of Silence' en hielp de plaats van het duo in de populaire cultuur te vestigen."
        }
      }
    ],

    // Day 6 - November 6th: Abraham Lincoln elected (1860), Saxophone patented (1846), Basketball invented (1891)
    day6: [
      {
        question: {
          en: "Abraham Lincoln was elected as the 16th President of the United States on November 6 of which year?",
          es: "Abraham Lincoln fue elegido como el decimosexto presidente de los Estados Unidos el 6 de noviembre de qué año?",
          de: "Abraham Lincoln wurde am 6. November welchen Jahres zum 16. Präsidenten der Vereinigten Staaten gewählt?",
          nl: "Abraham Lincoln werd verkozen tot de 16e president van de Verenigde Staten op 6 november van welk jaar?"
        },
        options: [
          { en: "1860", es: "1860", de: "1860", nl: "1860" },
          { en: "1864", es: "1864", de: "1864", nl: "1864" },
          { en: "1856", es: "1856", de: "1856", nl: "1856" },
          { en: "1852", es: "1852", de: "1852", nl: "1852" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Abraham Lincoln was elected President on November 6, 1860, representing the Republican Party. His election triggered the secession of Southern states, leading to the American Civil War. Lincoln's presidency would be defined by preserving the Union and ending slavery through the Emancipation Proclamation. He was re-elected in 1864 but assassinated in April 1865.",
          es: "Abraham Lincoln fue elegido presidente el 6 de noviembre de 1860, representando al Partido Republicano. Su elección desencadenó la secesión de los estados del sur, lo que llevó a la Guerra Civil Estadounidense. La presidencia de Lincoln se definiría por preservar la Unión y acabar con la esclavitud a través de la Proclamación de Emancipación. Fue reelegido en 1864 pero asesinado en abril de 1865.",
          de: "Abraham Lincoln wurde am 6. November 1860 zum Präsidenten gewählt und vertrat die Republikanische Partei. Seine Wahl löste die Sezession der Südstaaten aus, was zum Amerikanischen Bürgerkrieg führte. Lincolns Präsidentschaft sollte durch die Bewahrung der Union und die Beendigung der Sklaverei durch die Emanzipationsproklamation definiert werden. Er wurde 1864 wiedergewählt, aber im April 1865 ermordet.",
          nl: "Abraham Lincoln werd verkozen tot president op 6 november 1860, als vertegenwoordiger van de Republikeinse Partij. Zijn verkiezing leidde tot de afscheiding van de Zuidelijke staten, wat leidde tot de Amerikaanse Burgeroorlog. Lincolns presidentschap zou worden gedefinieerd door het behouden van de Unie en het beëindigen van slavernij door de Emancipatieproclamatie. Hij werd herkozen in 1864 maar vermoord in april 1865."
        }
      },
      {
        question: {
          en: "The saxophone was patented on November 6, 1846, by which Belgian instrument maker?",
          es: "El saxofón fue patentado el 6 de noviembre de 1846 por qué fabricante de instrumentos belga?",
          de: "Das Saxophon wurde am 6. November 1846 von welchem belgischen Instrumentenbauer patentiert?",
          nl: "De saxofoon werd op 6 november 1846 gepatenteerd door welke Belgische instrumentmaker?"
        },
        options: [
          { en: "Henri Selmer", es: "Henri Selmer", de: "Henri Selmer", nl: "Henri Selmer" },
          { en: "Antoine-Joseph Sax", es: "Antoine-Joseph Sax", de: "Antoine-Joseph Sax", nl: "Antoine-Joseph Sax" },
          { en: "C.G. Conn", es: "C.G. Conn", de: "C.G. Conn", nl: "C.G. Conn" },
          { en: "Adolphe Sax", es: "Adolphe Sax", de: "Adolphe Sax", nl: "Adolphe Sax" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Adolphe Sax (Antoine-Joseph Sax) patented the saxophone in Paris on November 6, 1846. The instrument was designed to bridge the gap between woodwind and brass instruments, combining the projection of brass with the agility of woodwinds. Initially used in military bands, the saxophone became central to jazz music and is now used across many musical genres.",
          es: "Adolphe Sax (Antoine-Joseph Sax) patentó el saxofón en París el 6 de noviembre de 1846. El instrumento fue diseñado para cerrar la brecha entre instrumentos de viento de madera y de metal, combinando la proyección del metal con la agilidad de los vientos de madera. Inicialmente usado en bandas militares, el saxofón se volvió central para la música jazz y ahora se usa en muchos géneros musicales.",
          de: "Adolphe Sax (Antoine-Joseph Sax) patentierte das Saxophon am 6. November 1846 in Paris. Das Instrument wurde entwickelt, um die Lücke zwischen Holz- und Blechblasinstrumenten zu schließen und die Projektion von Blech mit der Beweglichkeit von Holzblasinstrumenten zu kombinieren. Ursprünglich in Militärkapellen verwendet, wurde das Saxophon zentral für die Jazzmusik und wird heute in vielen Musikgenres eingesetzt.",
          nl: "Adolphe Sax (Antoine-Joseph Sax) patenteerde de saxofoon in Parijs op 6 november 1846. Het instrument was ontworpen om de kloof tussen hout- en koperblazers te overbruggen, door de projectie van koper te combineren met de wendbaarheid van houtblazers. Aanvankelijk gebruikt in militaire bands, werd de saxofoon centraal in jazzmuziek en wordt nu gebruikt in veel muziekgenres."
        }
      },
      {
        question: {
          en: "Basketball was invented on November 6, 1891, by Dr. James Naismith in which U.S. state?",
          es: "El baloncesto fue inventado el 6 de noviembre de 1891 por el Dr. James Naismith en qué estado de EE.UU.?",
          de: "Basketball wurde am 6. November 1891 von Dr. James Naismith in welchem US-Bundesstaat erfunden?",
          nl: "Basketbal werd uitgevonden op 6 november 1891 door Dr. James Naismith in welke Amerikaanse staat?"
        },
        options: [
          { en: "New York", es: "Nueva York", de: "New York", nl: "New York" },
          { en: "Illinois", es: "Illinois", de: "Illinois", nl: "Illinois" },
          { en: "Massachusetts", es: "Massachusetts", de: "Massachusetts", nl: "Massachusetts" },
          { en: "Pennsylvania", es: "Pensilvania", de: "Pennsylvania", nl: "Pennsylvania" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Dr. James Naismith invented basketball in Springfield, Massachusetts, while working as a physical education instructor at the International YMCA Training School. He created the game to keep his students active indoors during winter. The first game used peach baskets as goals and a soccer ball. Basketball has since become one of the world's most popular sports.",
          es: "El Dr. James Naismith inventó el baloncesto en Springfield, Massachusetts, mientras trabajaba como instructor de educación física en la Escuela Internacional de Entrenamiento de la YMCA. Creó el juego para mantener a sus estudiantes activos en interiores durante el invierno. El primer juego usó cestas de melocotón como goles y un balón de fútbol. El baloncesto se ha convertido desde entonces en uno de los deportes más populares del mundo.",
          de: "Dr. James Naismith erfand Basketball in Springfield, Massachusetts, während er als Sportlehrer an der International YMCA Training School arbeitete. Er schuf das Spiel, um seine Schüler im Winter drinnen aktiv zu halten. Das erste Spiel verwendete Pfirsichkörbe als Tore und einen Fußball. Basketball ist seitdem zu einer der beliebtesten Sportarten der Welt geworden.",
          nl: "Dr. James Naismith vond basketbal uit in Springfield, Massachusetts, terwijl hij werkte als leraar lichamelijke opvoeding aan de International YMCA Training School. Hij creëerde het spel om zijn studenten actief te houden binnen tijdens de winter. Het eerste spel gebruikte perzikkisten als doelen en een voetbal. Basketbal is sindsdien een van 's werelds populairste sporten geworden."
        }
      },
      {
        question: {
          en: "Which political party did Abraham Lincoln represent when he was elected president in 1860?",
          es: "¿Qué partido político representaba Abraham Lincoln cuando fue elegido presidente en 1860?",
          de: "Welche politische Partei vertrat Abraham Lincoln, als er 1860 zum Präsidenten gewählt wurde?",
          nl: "Welke politieke partij vertegenwoordigde Abraham Lincoln toen hij in 1860 tot president werd verkozen?"
        },
        options: [
          { en: "Democratic Party", es: "Partido Demócrata", de: "Demokratische Partei", nl: "Democratische Partij" },
          { en: "Whig Party", es: "Partido Whig", de: "Whig-Partei", nl: "Whig-Partij" },
          { en: "Republican Party", es: "Partido Republicano", de: "Republikanische Partei", nl: "Republikeinse Partij" },
          { en: "Federalist Party", es: "Partido Federalista", de: "Föderalistische Partei", nl: "Federalistische Partij" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Lincoln was elected as the first Republican president in 1860. The Republican Party was founded in 1854 largely in opposition to the expansion of slavery. Lincoln won the election without carrying a single Southern state, which contributed to Southern states' decision to secede. His victory marked a major political realignment in American history.",
          es: "Lincoln fue elegido como el primer presidente republicano en 1860. El Partido Republicano fue fundado en 1854 en gran parte en oposición a la expansión de la esclavitud. Lincoln ganó las elecciones sin ganar un solo estado del sur, lo que contribuyó a la decisión de los estados del sur de separarse. Su victoria marcó un realineamiento político importante en la historia estadounidense.",
          de: "Lincoln wurde 1860 als erster republikanischer Präsident gewählt. Die Republikanische Partei wurde 1854 weitgehend in Opposition zur Ausweitung der Sklaverei gegründet. Lincoln gewann die Wahl, ohne einen einzigen Südstaat zu gewinnen, was zur Entscheidung der Südstaaten zur Sezession beitrug. Sein Sieg markierte eine wichtige politische Neuausrichtung in der amerikanischen Geschichte.",
          nl: "Lincoln werd verkozen als de eerste Republikeinse president in 1860. De Republikeinse Partij werd opgericht in 1854, grotendeels in oppositie tegen de uitbreiding van slavernij. Lincoln won de verkiezingen zonder een enkele Zuidelijke staat te winnen, wat bijdroeg aan de beslissing van Zuidelijke staten om zich af te scheiden. Zijn overwinning markeerde een belangrijke politieke heroriëntatie in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "In which family of instruments does the saxophone belong?",
          es: "¿A qué familia de instrumentos pertenece el saxofón?",
          de: "Zu welcher Instrumentenfamilie gehört das Saxophon?",
          nl: "Tot welke instrumentenfamilie behoort de saxofoon?"
        },
        options: [
          { en: "Brass instruments", es: "Instrumentos de metal", de: "Blechblasinstrumente", nl: "Koperblazers" },
          { en: "Woodwind instruments", es: "Instrumentos de viento de madera", de: "Holzblasinstrumente", nl: "Houtblazers" },
          { en: "Percussion instruments", es: "Instrumentos de percusión", de: "Schlaginstrumente", nl: "Slaginstrumenten" },
          { en: "String instruments", es: "Instrumentos de cuerda", de: "Saiteninstrumente", nl: "Snaarinstrumenten" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Despite being made of brass, the saxophone is classified as a woodwind instrument because it uses a single-reed mouthpiece similar to the clarinet. The sound is produced by the vibration of the reed, not by the player's lips vibrating against the mouthpiece as in true brass instruments. This classification reflects the instrument's playing technique rather than its material.",
          es: "A pesar de estar hecho de metal, el saxofón se clasifica como un instrumento de viento de madera porque usa una boquilla de lengüeta simple similar al clarinete. El sonido se produce por la vibración de la lengüeta, no por la vibración de los labios del intérprete contra la boquilla como en los verdaderos instrumentos de metal. Esta clasificación refleja la técnica de interpretación del instrumento en lugar de su material.",
          de: "Obwohl es aus Messing besteht, wird das Saxophon als Holzblasinstrument klassifiziert, weil es ein Mundstück mit einfachem Rohrblatt ähnlich der Klarinette verwendet. Der Klang wird durch die Vibration des Rohrblatts erzeugt, nicht durch die Vibration der Lippen des Spielers gegen das Mundstück wie bei echten Blechblasinstrumenten. Diese Klassifizierung spiegelt die Spieltechnik des Instruments wider, nicht sein Material.",
          nl: "Ondanks dat het van koper is gemaakt, wordt de saxofoon geclassificeerd als een houtblaasinstrument omdat het een enkel-riet mondstuk gebruikt vergelijkbaar met de klarinet. Het geluid wordt geproduceerd door de vibratie van het riet, niet door de lippen van de speler die trillen tegen het mondstuk zoals bij echte koperblazers. Deze classificatie weerspiegelt de speeltechniek van het instrument in plaats van zijn materiaal."
        }
      }
    ],

    // Day 7 - November 7th: Marie Curie born (1867), Bolshevik Revolution (1917), First woman elected to Congress (1916)
    day7: [
      {
        question: {
          en: "Marie Curie, born November 7, 1867, was the first woman to win a Nobel Prize in which field?",
          es: "Marie Curie, nacida el 7 de noviembre de 1867, fue la primera mujer en ganar un Premio Nobel en qué campo?",
          de: "Marie Curie, geboren am 7. November 1867, war die erste Frau, die einen Nobelpreis in welchem Bereich gewann?",
          nl: "Marie Curie, geboren op 7 november 1867, was de eerste vrouw die een Nobelprijs won in welk vakgebied?"
        },
        options: [
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" },
          { en: "Physics", es: "Física", de: "Physik", nl: "Natuurkunde" },
          { en: "Medicine", es: "Medicina", de: "Medizin", nl: "Geneeskunde" },
          { en: "Literature", es: "Literatura", de: "Literatur", nl: "Literatuur" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Marie Curie won the Nobel Prize in Physics in 1903 (shared with her husband Pierre and Henri Becquerel) for their work on radioactivity. She later won a second Nobel Prize in Chemistry in 1911 for discovering radium and polonium, making her the only person to win Nobel Prizes in two different scientific fields. Her pioneering research laid the foundation for modern nuclear physics and chemistry.",
          es: "Marie Curie ganó el Premio Nobel de Física en 1903 (compartido con su esposo Pierre y Henri Becquerel) por su trabajo sobre la radiactividad. Más tarde ganó un segundo Premio Nobel de Química en 1911 por descubrir el radio y el polonio, convirtiéndola en la única persona en ganar Premios Nobel en dos campos científicos diferentes. Su investigación pionera sentó las bases de la física y química nuclear moderna.",
          de: "Marie Curie gewann 1903 den Nobelpreis für Physik (geteilt mit ihrem Mann Pierre und Henri Becquerel) für ihre Arbeit über Radioaktivität. Sie gewann später 1911 einen zweiten Nobelpreis in Chemie für die Entdeckung von Radium und Polonium, was sie zur einzigen Person macht, die Nobelpreise in zwei verschiedenen wissenschaftlichen Bereichen gewonnen hat. Ihre bahnbrechende Forschung legte den Grundstein für die moderne Kernphysik und -chemie.",
          nl: "Marie Curie won de Nobelprijs voor Natuurkunde in 1903 (gedeeld met haar man Pierre en Henri Becquerel) voor hun werk aan radioactiviteit. Ze won later een tweede Nobelprijs voor Scheikunde in 1911 voor het ontdekken van radium en polonium, waardoor ze de enige persoon is die Nobelprijzen won in twee verschillende wetenschappelijke vakgebieden. Haar baanbrekende onderzoek legde de basis voor de moderne kernfysica en -chemie."
        }
      },
      {
        question: {
          en: "The Bolshevik Revolution (October Revolution) began on November 7, 1917, in which city?",
          es: "La Revolución Bolchevique (Revolución de Octubre) comenzó el 7 de noviembre de 1917 en qué ciudad?",
          de: "Die Bolschewistische Revolution (Oktoberrevolution) begann am 7. November 1917 in welcher Stadt?",
          nl: "De Bolsjewistische Revolutie (Oktoberrevolutie) begon op 7 november 1917 in welke stad?"
        },
        options: [
          { en: "Moscow", es: "Moscú", de: "Moskau", nl: "Moskou" },
          { en: "St. Petersburg (Petrograd)", es: "San Petersburgo (Petrogrado)", de: "St. Petersburg (Petrograd)", nl: "Sint-Petersburg (Petrograd)" },
          { en: "Kiev", es: "Kiev", de: "Kiew", nl: "Kiev" },
          { en: "Stalingrad", es: "Stalingrado", de: "Stalingrad", nl: "Stalingrad" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Bolshevik Revolution began in Petrograd (now St. Petersburg) on November 7, 1917 (October 25 in the old Russian calendar, hence 'October Revolution'). Led by Vladimir Lenin and the Bolsheviks, revolutionaries stormed the Winter Palace and overthrew the Provisional Government. This revolution established the Soviet Union and profoundly shaped 20th-century world history.",
          es: "La Revolución Bolchevique comenzó en Petrogrado (ahora San Petersburgo) el 7 de noviembre de 1917 (25 de octubre en el antiguo calendario ruso, de ahí 'Revolución de Octubre'). Dirigidos por Vladimir Lenin y los bolcheviques, los revolucionarios asaltaron el Palacio de Invierno y derrocaron al Gobierno Provisional. Esta revolución estableció la Unión Soviética y dio forma profundamente a la historia mundial del siglo XX.",
          de: "Die Bolschewistische Revolution begann in Petrograd (heute St. Petersburg) am 7. November 1917 (25. Oktober im alten russischen Kalender, daher 'Oktoberrevolution'). Unter der Führung von Wladimir Lenin und den Bolschewiki stürmten Revolutionäre den Winterpalast und stürzten die Provisorische Regierung. Diese Revolution gründete die Sowjetunion und prägte die Weltgeschichte des 20. Jahrhunderts tiefgreifend.",
          nl: "De Bolsjewistische Revolutie begon in Petrograd (nu Sint-Petersburg) op 7 november 1917 (25 oktober in de oude Russische kalender, vandaar 'Oktoberrevolutie'). Onder leiding van Vladimir Lenin en de Bolsjewieken bestormden revolutionairen het Winterpaleis en wierpen de Voorlopige Regering omver. Deze revolutie vestigde de Sovjet-Unie en vormde de wereldgeschiedenis van de 20e eeuw diepgaand."
        }
      },
      {
        question: {
          en: "On November 7, 1916, Jeannette Rankin became the first woman elected to which position?",
          es: "El 7 de noviembre de 1916, Jeannette Rankin se convirtió en la primera mujer elegida para qué posición?",
          de: "Am 7. November 1916 wurde Jeannette Rankin als erste Frau in welche Position gewählt?",
          nl: "Op 7 november 1916 werd Jeannette Rankin de eerste vrouw verkozen tot welke positie?"
        },
        options: [
          { en: "Governor", es: "Gobernadora", de: "Gouverneurin", nl: "Gouverneur" },
          { en: "Mayor", es: "Alcaldesa", de: "Bürgermeisterin", nl: "Burgemeester" },
          { en: "U.S. Congress", es: "Congreso de EE.UU.", de: "US-Kongress", nl: "Amerikaans Congres" },
          { en: "State Senator", es: "Senadora Estatal", de: "Staatssenatorin", nl: "Staatssenator" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Jeannette Rankin of Montana was elected to the U.S. House of Representatives on November 7, 1916, becoming the first woman to serve in Congress. She was a lifelong pacifist and was the only member of Congress to vote against U.S. entry into both World War I and World War II. Her election came four years before women gained the right to vote nationwide with the 19th Amendment.",
          es: "Jeannette Rankin de Montana fue elegida para la Cámara de Representantes de EE.UU. el 7 de noviembre de 1916, convirtiéndose en la primera mujer en servir en el Congreso. Fue una pacifista de toda la vida y fue el único miembro del Congreso en votar en contra de la entrada de EE.UU. en la Primera y Segunda Guerra Mundial. Su elección se produjo cuatro años antes de que las mujeres obtuvieran el derecho al voto a nivel nacional con la Enmienda 19.",
          de: "Jeannette Rankin aus Montana wurde am 7. November 1916 in das US-Repräsentantenhaus gewählt und wurde damit die erste Frau im Kongress. Sie war eine lebenslange Pazifistin und das einzige Kongressmitglied, das gegen den Eintritt der USA in beide Weltkriege stimmte. Ihre Wahl erfolgte vier Jahre bevor Frauen mit dem 19. Zusatzartikel landesweit das Wahlrecht erhielten.",
          nl: "Jeannette Rankin uit Montana werd verkozen tot het Amerikaanse Huis van Afgevaardigden op 7 november 1916 en werd daarmee de eerste vrouw die in het Congres diende. Ze was een levenslange pacifiste en was het enige congreslid dat stemde tegen de Amerikaanse deelname aan zowel de Eerste als de Tweede Wereldoorlog. Haar verkiezing was vier jaar voordat vrouwen landelijk het stemrecht kregen met het 19e Amendement."
        }
      },
      {
        question: {
          en: "Marie Curie was the first person to win Nobel Prizes in two different sciences. Which element did she discover and name after her homeland?",
          es: "Marie Curie fue la primera persona en ganar Premios Nobel en dos ciencias diferentes. ¿Qué elemento descubrió y nombró en honor a su tierra natal?",
          de: "Marie Curie war die erste Person, die Nobelpreise in zwei verschiedenen Wissenschaften gewann. Welches Element entdeckte sie und benannte es nach ihrer Heimat?",
          nl: "Marie Curie was de eerste persoon die Nobelprijzen won in twee verschillende wetenschappen. Welk element ontdekte ze en vernoemde ze naar haar thuisland?"
        },
        options: [
          { en: "Francium", es: "Francio", de: "Francium", nl: "Francium" },
          { en: "Polonium", es: "Polonio", de: "Polonium", nl: "Polonium" },
          { en: "Radium", es: "Radio", de: "Radium", nl: "Radium" },
          { en: "Curium", es: "Curio", de: "Curium", nl: "Curium" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Marie Curie discovered and named polonium after her native Poland. Born Maria Sklodowska in Warsaw, she named the element in 1898 to honor her homeland, which at the time was partitioned between Russia, Prussia, and Austria. She also discovered radium the same year. The element curium was later named in honor of Marie and Pierre Curie.",
          es: "Marie Curie descubrió y nombró el polonio en honor a su Polonia natal. Nacida Maria Sklodowska en Varsovia, nombró el elemento en 1898 para honrar a su tierra natal, que en ese momento estaba dividida entre Rusia, Prusia y Austria. También descubrió el radio ese mismo año. El elemento curio fue posteriormente nombrado en honor a Marie y Pierre Curie.",
          de: "Marie Curie entdeckte und benannte Polonium nach ihrem Heimatland Polen. Geboren als Maria Sklodowska in Warschau, benannte sie das Element 1898, um ihre Heimat zu ehren, die damals zwischen Russland, Preußen und Österreich aufgeteilt war. Sie entdeckte im selben Jahr auch Radium. Das Element Curium wurde später zu Ehren von Marie und Pierre Curie benannt.",
          nl: "Marie Curie ontdekte en vernoemde polonium naar haar geboorteland Polen. Geboren als Maria Sklodowska in Warschau, noemde ze het element in 1898 ter ere van haar thuisland, dat destijds was verdeeld tussen Rusland, Pruisen en Oostenrijk. Ze ontdekte datzelfde jaar ook radium. Het element curium werd later vernoemd naar Marie en Pierre Curie."
        }
      },
      {
        question: {
          en: "Which revolutionary leader led the Bolsheviks during the 1917 Russian Revolution?",
          es: "¿Qué líder revolucionario dirigió a los bolcheviques durante la Revolución Rusa de 1917?",
          de: "Welcher revolutionäre Führer leitete die Bolschewiki während der Russischen Revolution von 1917?",
          nl: "Welke revolutionaire leider leidde de Bolsjewieken tijdens de Russische Revolutie van 1917?"
        },
        options: [
          { en: "Joseph Stalin", es: "Joseph Stalin", de: "Josef Stalin", nl: "Joseph Stalin" },
          { en: "Leon Trotsky", es: "León Trotsky", de: "Leo Trotzki", nl: "Leon Trotski" },
          { en: "Vladimir Lenin", es: "Vladimir Lenin", de: "Wladimir Lenin", nl: "Vladimir Lenin" },
          { en: "Mikhail Gorbachev", es: "Mikhail Gorbachov", de: "Michail Gorbatschow", nl: "Michail Gorbatsjov" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Vladimir Lenin was the primary leader of the Bolshevik Revolution. He had spent years in exile developing Bolshevik ideology before returning to Russia in April 1917. Lenin's leadership was crucial in organizing the October Revolution and establishing the world's first communist state. He served as head of the Soviet government until his death in 1924, after which Stalin eventually took control.",
          es: "Vladimir Lenin fue el líder principal de la Revolución Bolchevique. Había pasado años en el exilio desarrollando la ideología bolchevique antes de regresar a Rusia en abril de 1917. El liderazgo de Lenin fue crucial para organizar la Revolución de Octubre y establecer el primer estado comunista del mundo. Sirvió como jefe del gobierno soviético hasta su muerte en 1924, después de lo cual Stalin eventualmente tomó el control.",
          de: "Wladimir Lenin war der Hauptführer der Bolschewistischen Revolution. Er hatte Jahre im Exil verbracht, um die bolschewistische Ideologie zu entwickeln, bevor er im April 1917 nach Russland zurückkehrte. Lenins Führung war entscheidend für die Organisation der Oktoberrevolution und die Gründung des ersten kommunistischen Staates der Welt. Er war bis zu seinem Tod 1924 Regierungschef der Sowjetunion, danach übernahm schließlich Stalin die Kontrolle.",
          nl: "Vladimir Lenin was de belangrijkste leider van de Bolsjewistische Revolutie. Hij had jaren in ballingschap doorgebracht met het ontwikkelen van de Bolsjewistische ideologie voordat hij in april 1917 naar Rusland terugkeerde. Lenins leiderschap was cruciaal bij het organiseren van de Oktoberrevolutie en het vestigen van 's werelds eerste communistische staat. Hij diende als hoofd van de Sovjet-regering tot zijn dood in 1924, waarna Stalin uiteindelijk de controle overnam."
        }
      }
    ],

    // Day 8 - November 8th: Montana becomes state (1889), X-rays discovered (1895), John Milton born (1674)
    day8: [
      {
        question: {
          en: "Montana was admitted as the 41st U.S. state on November 8 of which year?",
          es: "Montana fue admitida como el estado número 41 de EE.UU. el 8 de noviembre de qué año?",
          de: "Montana wurde am 8. November welchen Jahres als 41. US-Bundesstaat aufgenommen?",
          nl: "Montana werd toegelaten als de 41e Amerikaanse staat op 8 november van welk jaar?"
        },
        options: [
          { en: "1876", es: "1876", de: "1876", nl: "1876" },
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1890", es: "1890", de: "1890", nl: "1890" },
          { en: "1901", es: "1901", de: "1901", nl: "1901" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Montana became the 41st state on November 8, 1889. The name 'Montana' comes from the Spanish word for 'mountain.' Known as 'Big Sky Country,' Montana's admission came during a period when several northwestern states joined the Union. On the same day, North Dakota and South Dakota also became states, making it a historic day for American expansion.",
          es: "Montana se convirtió en el estado número 41 el 8 de noviembre de 1889. El nombre 'Montana' proviene de la palabra española para 'montaña'. Conocida como el 'País del Gran Cielo', la admisión de Montana llegó durante un período en que varios estados del noroeste se unieron a la Unión. El mismo día, Dakota del Norte y Dakota del Sur también se convirtieron en estados, convirtiéndolo en un día histórico para la expansión estadounidense.",
          de: "Montana wurde am 8. November 1889 der 41. Bundesstaat. Der Name 'Montana' stammt vom spanischen Wort für 'Berg'. Als 'Big Sky Country' bekannt, kam Montanas Aufnahme während einer Zeit, als mehrere nordwestliche Staaten der Union beitraten. Am selben Tag wurden auch North Dakota und South Dakota Bundesstaaten, was es zu einem historischen Tag für die amerikanische Expansion machte.",
          nl: "Montana werd op 8 november 1889 de 41e staat. De naam 'Montana' komt van het Spaanse woord voor 'berg'. Bekend als 'Big Sky Country', vond Montana's toelating plaats tijdens een periode waarin verschillende noordwestelijke staten zich bij de Unie aansloten. Op dezelfde dag werden ook North Dakota en South Dakota staten, waardoor het een historische dag werd voor de Amerikaanse expansie."
        }
      },
      {
        question: {
          en: "X-rays were discovered on November 8, 1895, by which German physicist?",
          es: "Los rayos X fueron descubiertos el 8 de noviembre de 1895 por qué físico alemán?",
          de: "Röntgenstrahlen wurden am 8. November 1895 von welchem deutschen Physiker entdeckt?",
          nl: "Röntgenstralen werden ontdekt op 8 november 1895 door welke Duitse natuurkundige?"
        },
        options: [
          { en: "Max Planck", es: "Max Planck", de: "Max Planck", nl: "Max Planck" },
          { en: "Wilhelm Röntgen", es: "Wilhelm Röntgen", de: "Wilhelm Röntgen", nl: "Wilhelm Röntgen" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Heinrich Hertz", es: "Heinrich Hertz", de: "Heinrich Hertz", nl: "Heinrich Hertz" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Wilhelm Röntgen discovered X-rays on November 8, 1895, while experimenting with cathode rays. He called them 'X-rays' because their nature was initially unknown. Röntgen's first X-ray image was of his wife's hand, clearly showing her bones and wedding ring. This revolutionary discovery earned him the first Nobel Prize in Physics in 1901 and transformed medical diagnostics.",
          es: "Wilhelm Röntgen descubrió los rayos X el 8 de noviembre de 1895, mientras experimentaba con rayos catódicos. Los llamó 'rayos X' porque su naturaleza era inicialmente desconocida. La primera imagen de rayos X de Röntgen fue de la mano de su esposa, mostrando claramente sus huesos y anillo de bodas. Este descubrimiento revolucionario le valió el primer Premio Nobel de Física en 1901 y transformó el diagnóstico médico.",
          de: "Wilhelm Röntgen entdeckte am 8. November 1895 Röntgenstrahlen, während er mit Kathodenstrahlen experimentierte. Er nannte sie 'X-Strahlen', weil ihre Natur zunächst unbekannt war. Röntgens erstes Röntgenbild war von der Hand seiner Frau und zeigte deutlich ihre Knochen und ihren Ehering. Diese revolutionäre Entdeckung brachte ihm 1901 den ersten Nobelpreis für Physik ein und veränderte die medizinische Diagnostik.",
          nl: "Wilhelm Röntgen ontdekte röntgenstralen op 8 november 1895, terwijl hij experimenteerde met kathodestralen. Hij noemde ze 'X-stralen' omdat hun aard aanvankelijk onbekend was. Röntgens eerste röntgenfoto was van de hand van zijn vrouw, waarop haar botten en trouwring duidelijk te zien waren. Deze revolutionaire ontdekking leverde hem in 1901 de eerste Nobelprijs voor Natuurkunde op en transformeerde de medische diagnostiek."
        }
      },
      {
        question: {
          en: "John Milton, born November 8, 1674, is famous for writing which epic poem?",
          es: "John Milton, nacido el 8 de noviembre de 1674, es famoso por escribir qué poema épico?",
          de: "John Milton, geboren am 8. November 1674, ist berühmt für das Schreiben welches epischen Gedichts?",
          nl: "John Milton, geboren op 8 november 1674, is beroemd om het schrijven van welk episch gedicht?"
        },
        options: [
          { en: "The Divine Comedy", es: "La Divina Comedia", de: "Die Göttliche Komödie", nl: "De Goddelijke Komedie" },
          { en: "The Odyssey", es: "La Odisea", de: "Die Odyssee", nl: "De Odyssee" },
          { en: "Paradise Lost", es: "El Paraíso Perdido", de: "Das verlorene Paradies", nl: "Het Verloren Paradijs" },
          { en: "Beowulf", es: "Beowulf", de: "Beowulf", nl: "Beowulf" }
        ],
        correctIndex: 2,
        explanation: {
          en: "John Milton wrote 'Paradise Lost,' one of the greatest epic poems in English literature. Published in 1667, it tells the biblical story of the Fall of Man, focusing on Satan's rebellion and Adam and Eve's expulsion from Eden. Remarkably, Milton composed much of this work while blind, dictating it to assistants. The poem's themes of free will, temptation, and redemption continue to influence literature and theology.",
          es: "John Milton escribió 'El Paraíso Perdido', uno de los poemas épicos más grandes de la literatura inglesa. Publicado en 1667, cuenta la historia bíblica de la Caída del Hombre, centrándose en la rebelión de Satanás y la expulsión de Adán y Eva del Edén. Notablemente, Milton compuso gran parte de esta obra mientras estaba ciego, dictándola a asistentes. Los temas del poema sobre el libre albedrío, la tentación y la redención continúan influyendo en la literatura y la teología.",
          de: "John Milton schrieb 'Das verlorene Paradies', eines der größten epischen Gedichte der englischen Literatur. 1667 veröffentlicht, erzählt es die biblische Geschichte vom Sündenfall, wobei der Fokus auf Satans Rebellion und der Vertreibung von Adam und Eva aus dem Paradies liegt. Bemerkenswert ist, dass Milton einen Großteil dieses Werkes komponierte, während er blind war, und es Assistenten diktierte. Die Themen des Gedichts über freien Willen, Versuchung und Erlösung beeinflussen weiterhin Literatur und Theologie.",
          nl: "John Milton schreef 'Het Verloren Paradijs', een van de grootste epische gedichten in de Engelse literatuur. Gepubliceerd in 1667, vertelt het het bijbelse verhaal van de Zondeval, met de focus op Satans opstand en de verdrijving van Adam en Eva uit Eden. Opmerkelijk is dat Milton veel van dit werk componeerde terwijl hij blind was, en het dicteerde aan assistenten. De thema's van het gedicht over vrije wil, verleiding en verlossing blijven literatuur en theologie beïnvloeden."
        }
      },
      {
        question: {
          en: "What is Montana's nickname, referring to its expansive landscapes?",
          es: "¿Cuál es el apodo de Montana, que se refiere a sus paisajes expansivos?",
          de: "Was ist Montanas Spitzname, der sich auf seine weitläufigen Landschaften bezieht?",
          nl: "Wat is Montana's bijnaam, verwijzend naar zijn uitgestrekte landschappen?"
        },
        options: [
          { en: "The Mountain State", es: "El Estado de las Montañas", de: "Der Bergstaat", nl: "De Bergstaat" },
          { en: "Big Sky Country", es: "País del Gran Cielo", de: "Big Sky Country", nl: "Big Sky Country" },
          { en: "The Wild West", es: "El Salvaje Oeste", de: "Der Wilde Westen", nl: "Het Wilde Westen" },
          { en: "The Frontier State", es: "El Estado Fronterizo", de: "Der Grenzstaat", nl: "De Grensstaat" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Montana is known as 'Big Sky Country' because of its vast, open landscapes and seemingly endless skies. The state is the fourth-largest in the U.S. by area but has a relatively small population, contributing to its wide-open spaces. Montana is home to Glacier National Park, parts of Yellowstone National Park, and contains portions of the Rocky Mountains.",
          es: "Montana es conocida como el 'País del Gran Cielo' debido a sus vastos paisajes abiertos y cielos aparentemente infinitos. El estado es el cuarto más grande de EE.UU. por área pero tiene una población relativamente pequeña, lo que contribuye a sus amplios espacios abiertos. Montana alberga el Parque Nacional Glacier, partes del Parque Nacional Yellowstone y contiene porciones de las Montañas Rocosas.",
          de: "Montana ist als 'Big Sky Country' bekannt wegen seiner weiten, offenen Landschaften und scheinbar endlosen Himmel. Der Staat ist der viertgrößte in den USA nach Fläche, hat aber eine relativ kleine Bevölkerung, was zu seinen weiten offenen Räumen beiträgt. Montana beherbergt den Glacier-Nationalpark, Teile des Yellowstone-Nationalparks und enthält Teile der Rocky Mountains.",
          nl: "Montana staat bekend als 'Big Sky Country' vanwege zijn uitgestrekte, open landschappen en schijnbaar eindeloze luchten. De staat is de vierde grootste in de VS qua oppervlakte maar heeft een relatief kleine bevolking, wat bijdraagt aan zijn wijdopen ruimtes. Montana herbergt Glacier National Park, delen van Yellowstone National Park en bevat delen van de Rocky Mountains."
        }
      },
      {
        question: {
          en: "In which part of the electromagnetic spectrum do X-rays fall?",
          es: "¿En qué parte del espectro electromagnético se encuentran los rayos X?",
          de: "In welchem Teil des elektromagnetischen Spektrums liegen Röntgenstrahlen?",
          nl: "In welk deel van het elektromagnetische spectrum vallen röntgenstralen?"
        },
        options: [
          { en: "Between visible light and infrared", es: "Entre luz visible e infrarrojo", de: "Zwischen sichtbarem Licht und Infrarot", nl: "Tussen zichtbaar licht en infrarood" },
          { en: "Between ultraviolet and gamma rays", es: "Entre ultravioleta y rayos gamma", de: "Zwischen Ultraviolett und Gammastrahlen", nl: "Tussen ultraviolet en gammastralen" },
          { en: "Below radio waves", es: "Debajo de las ondas de radio", de: "Unter Radiowellen", nl: "Onder radiogolven" },
          { en: "Between radio waves and microwaves", es: "Entre ondas de radio y microondas", de: "Zwischen Radiowellen und Mikrowellen", nl: "Tussen radiogolven en microgolven" }
        ],
        correctIndex: 1,
        explanation: {
          en: "X-rays fall between ultraviolet light and gamma rays in the electromagnetic spectrum. They have wavelengths ranging from 0.01 to 10 nanometers and high energy that allows them to penetrate soft tissues but be absorbed by denser materials like bone. This property makes them invaluable for medical imaging and also useful in astronomy, materials science, and security screening.",
          es: "Los rayos X se encuentran entre la luz ultravioleta y los rayos gamma en el espectro electromagnético. Tienen longitudes de onda que van de 0.01 a 10 nanómetros y alta energía que les permite penetrar tejidos blandos pero ser absorbidos por materiales más densos como el hueso. Esta propiedad los hace invaluables para la imagenología médica y también útiles en astronomía, ciencia de materiales y control de seguridad.",
          de: "Röntgenstrahlen liegen zwischen ultraviolettem Licht und Gammastrahlen im elektromagnetischen Spektrum. Sie haben Wellenlängen von 0,01 bis 10 Nanometern und hohe Energie, die es ihnen ermöglicht, Weichgewebe zu durchdringen, aber von dichteren Materialien wie Knochen absorbiert zu werden. Diese Eigenschaft macht sie unschätzbar wertvoll für medizinische Bildgebung und auch nützlich in Astronomie, Materialwissenschaft und Sicherheitskontrollen.",
          nl: "Röntgenstralen vallen tussen ultraviolet licht en gammastralen in het elektromagnetische spectrum. Ze hebben golflengten variërend van 0,01 tot 10 nanometer en hoge energie waardoor ze zachte weefsels kunnen doordringen maar worden geabsorbeerd door dichtere materialen zoals bot. Deze eigenschap maakt ze van onschatbare waarde voor medische beeldvorming en ook nuttig in astronomie, materiaalwetenschap en veiligheidsscreening."
        }
      }
    ],

    // Day 9 - November 9th: Berlin Wall falls (1989), Napoleon's coup (1799), Carl Sagan born (1934)
    day9: [
      {
        question: {
          en: "The Berlin Wall began to fall on November 9 of which year?",
          es: "El Muro de Berlín comenzó a caer el 9 de noviembre de qué año?",
          de: "Die Berliner Mauer begann am 9. November welchen Jahres zu fallen?",
          nl: "De Berlijnse Muur begon te vallen op 9 november van welk jaar?"
        },
        options: [
          { en: "1985", es: "1985", de: "1985", nl: "1985" },
          { en: "1987", es: "1987", de: "1987", nl: "1987" },
          { en: "1989", es: "1989", de: "1989", nl: "1989" },
          { en: "1991", es: "1991", de: "1991", nl: "1991" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Berlin Wall fell on November 9, 1989, marking the symbolic end of the Cold War. Built in 1961 to separate East and West Berlin, the wall prevented East Germans from fleeing to the West. Its fall came after mounting pressure for reform in East Germany and a miscommunication about travel restrictions. Germans from both sides celebrated together, and the wall's destruction led to German reunification in 1990.",
          es: "El Muro de Berlín cayó el 9 de noviembre de 1989, marcando el fin simbólico de la Guerra Fría. Construido en 1961 para separar Berlín Este y Oeste, el muro impedía que los alemanes orientales huyeran al Oeste. Su caída se produjo después de una presión creciente por reformas en Alemania Oriental y un malentendido sobre las restricciones de viaje. Los alemanes de ambos lados celebraron juntos, y la destrucción del muro condujo a la reunificación alemana en 1990.",
          de: "Die Berliner Mauer fiel am 9. November 1989 und markierte das symbolische Ende des Kalten Krieges. 1961 erbaut, um Ost- und West-Berlin zu trennen, verhinderte die Mauer, dass Ostdeutsche in den Westen fliehen konnten. Ihr Fall kam nach zunehmendem Druck für Reformen in der DDR und einer Fehlkommunikation über Reisebeschränkungen. Deutsche von beiden Seiten feierten zusammen, und die Zerstörung der Mauer führte 1990 zur deutschen Wiedervereinigung.",
          nl: "De Berlijnse Muur viel op 9 november 1989, wat het symbolische einde van de Koude Oorlog markeerde. Gebouwd in 1961 om Oost- en West-Berlijn te scheiden, voorkwam de muur dat Oost-Duitsers naar het Westen vluchtten. De val kwam na toenemende druk voor hervormingen in Oost-Duitsland en een miscommunicatie over reisbeperkingen. Duitsers van beide kanten vierden samen, en de vernietiging van de muur leidde tot de Duitse hereniging in 1990."
        }
      },
      {
        question: {
          en: "Napoleon Bonaparte's coup d'état, known as the Coup of 18 Brumaire, took place on November 9 of which year?",
          es: "El golpe de estado de Napoleón Bonaparte, conocido como el Golpe del 18 Brumario, tuvo lugar el 9 de noviembre de qué año?",
          de: "Napoleon Bonapartes Staatsstreich, bekannt als Staatsstreich vom 18. Brumaire, fand am 9. November welchen Jahres statt?",
          nl: "Napoleon Bonapartes staatsgreep, bekend als de Staatsgreep van 18 Brumaire, vond plaats op 9 november van welk jaar?"
        },
        options: [
          { en: "1789", es: "1789", de: "1789", nl: "1789" },
          { en: "1799", es: "1799", de: "1799", nl: "1799" },
          { en: "1804", es: "1804", de: "1804", nl: "1804" },
          { en: "1815", es: "1815", de: "1815", nl: "1815" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Napoleon's coup occurred on November 9, 1799 (18 Brumaire Year VIII in the French Revolutionary calendar). The coup overthrew the French Directory and replaced it with the Consulate, with Napoleon as First Consul. This effectively ended the French Revolution and began Napoleon's rise to absolute power. Five years later, in 1804, Napoleon crowned himself Emperor of France.",
          es: "El golpe de Napoleón ocurrió el 9 de noviembre de 1799 (18 Brumario Año VIII en el calendario revolucionario francés). El golpe derrocó al Directorio francés y lo reemplazó con el Consulado, con Napoleón como Primer Cónsul. Esto efectivamente terminó la Revolución Francesa y comenzó el ascenso de Napoleón al poder absoluto. Cinco años después, en 1804, Napoleón se coronó a sí mismo Emperador de Francia.",
          de: "Napoleons Staatsstreich ereignete sich am 9. November 1799 (18. Brumaire Jahr VIII im französischen Revolutionskalender). Der Staatsstreich stürzte das französische Direktorium und ersetzte es durch das Konsulat mit Napoleon als Erstem Konsul. Dies beendete effektiv die Französische Revolution und begann Napoleons Aufstieg zur absoluten Macht. Fünf Jahre später, 1804, krönte sich Napoleon selbst zum Kaiser von Frankreich.",
          nl: "Napoleons staatsgreep vond plaats op 9 november 1799 (18 Brumaire Jaar VIII in de Franse Revolutionaire kalender). De staatsgreep wierp het Franse Directoire omver en verving het door het Consulaat, met Napoleon als Eerste Consul. Dit beëindigde effectief de Franse Revolutie en begon Napoleons opkomst naar absolute macht. Vijf jaar later, in 1804, kroonde Napoleon zichzelf tot Keizer van Frankrijk."
        }
      },
      {
        question: {
          en: "Carl Sagan, born November 9, 1934, was famous for hosting which popular science television series?",
          es: "Carl Sagan, nacido el 9 de noviembre de 1934, fue famoso por presentar qué popular serie de televisión científica?",
          de: "Carl Sagan, geboren am 9. November 1934, war berühmt für die Moderation welcher populären Wissenschafts-Fernsehserie?",
          nl: "Carl Sagan, geboren op 9 november 1934, was beroemd om het presenteren van welke populaire wetenschappelijke televisieserie?"
        },
        options: [
          { en: "The Universe", es: "El Universo", de: "Das Universum", nl: "Het Universum" },
          { en: "Cosmos", es: "Cosmos", de: "Cosmos", nl: "Cosmos" },
          { en: "Nova", es: "Nova", de: "Nova", nl: "Nova" },
          { en: "Planet Earth", es: "Planeta Tierra", de: "Planet Erde", nl: "Planet Aarde" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Carl Sagan created and hosted 'Cosmos: A Personal Voyage,' which aired in 1980 and became the most widely watched PBS series in history. The series explored topics in astronomy, cosmology, and the nature of science. Sagan was a brilliant science communicator who made complex scientific concepts accessible to the public. His phrase 'billions and billions' and his book 'Contact' further cemented his legacy.",
          es: "Carl Sagan creó y presentó 'Cosmos: Un Viaje Personal', que se emitió en 1980 y se convirtió en la serie de PBS más vista de la historia. La serie exploró temas de astronomía, cosmología y la naturaleza de la ciencia. Sagan fue un brillante comunicador científico que hizo accesibles conceptos científicos complejos al público. Su frase 'miles de millones y miles de millones' y su libro 'Contact' consolidaron aún más su legado.",
          de: "Carl Sagan schuf und moderierte 'Cosmos: Eine persönliche Reise', die 1980 ausgestrahlt wurde und zur meistgesehenen PBS-Serie der Geschichte wurde. Die Serie erforschte Themen in Astronomie, Kosmologie und die Natur der Wissenschaft. Sagan war ein brillanter Wissenschaftskommunikator, der komplexe wissenschaftliche Konzepte der Öffentlichkeit zugänglich machte. Seine Phrase 'Milliarden und Abermilliarden' und sein Buch 'Contact' festigten sein Vermächtnis weiter.",
          nl: "Carl Sagan creëerde en presenteerde 'Cosmos: Een Persoonlijke Reis', die in 1980 werd uitgezonden en de meest bekeken PBS-serie in de geschiedenis werd. De serie verkende onderwerpen in astronomie, kosmologie en de aard van de wetenschap. Sagan was een briljante wetenschapscommunicator die complexe wetenschappelijke concepten toegankelijk maakte voor het publiek. Zijn uitdrukking 'miljarden en miljarden' en zijn boek 'Contact' verstevigden zijn nalatenschap verder."
        }
      },
      {
        question: {
          en: "The Berlin Wall divided Berlin for how many years before it fell?",
          es: "¿Por cuántos años dividió el Muro de Berlín a Berlín antes de caer?",
          de: "Wie viele Jahre teilte die Berliner Mauer Berlin, bevor sie fiel?",
          nl: "Hoeveel jaar verdeelde de Berlijnse Muur Berlijn voordat het viel?"
        },
        options: [
          { en: "18 years", es: "18 años", de: "18 Jahre", nl: "18 jaar" },
          { en: "28 years", es: "28 años", de: "28 Jahre", nl: "28 jaar" },
          { en: "38 years", es: "38 años", de: "38 Jahre", nl: "38 jaar" },
          { en: "48 years", es: "48 años", de: "48 Jahre", nl: "48 jaar" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Berlin Wall stood for 28 years, from its construction on August 13, 1961, to its fall on November 9, 1989. During this time, it became the most visible symbol of the Cold War's Iron Curtain dividing Eastern and Western Europe. At least 140 people died trying to cross the wall, with the most famous escape attempts including tunnels, hot air balloons, and even a car driven through checkpoints.",
          es: "El Muro de Berlín estuvo en pie durante 28 años, desde su construcción el 13 de agosto de 1961 hasta su caída el 9 de noviembre de 1989. Durante este tiempo, se convirtió en el símbolo más visible de la Cortina de Hierro de la Guerra Fría que dividía Europa Oriental y Occidental. Al menos 140 personas murieron intentando cruzar el muro, con los intentos de escape más famosos incluyendo túneles, globos aerostáticos e incluso un automóvil conducido a través de puntos de control.",
          de: "Die Berliner Mauer stand 28 Jahre lang, von ihrem Bau am 13. August 1961 bis zu ihrem Fall am 9. November 1989. In dieser Zeit wurde sie zum sichtbarsten Symbol des Eisernen Vorhangs des Kalten Krieges, der Ost- und Westeuropa teilte. Mindestens 140 Menschen starben beim Versuch, die Mauer zu überqueren, wobei die berühmtesten Fluchtversuche Tunnel, Heißluftballons und sogar ein Auto umfassten, das durch Kontrollpunkte gefahren wurde.",
          nl: "De Berlijnse Muur stond 28 jaar, van de bouw op 13 augustus 1961 tot de val op 9 november 1989. Gedurende deze tijd werd het het meest zichtbare symbool van het IJzeren Gordijn van de Koude Oorlog dat Oost- en West-Europa scheidde. Minstens 140 mensen stierven bij pogingen om de muur over te steken, waarbij de beroemdste ontsnappingspogingen tunnels, heteluchtballonnen en zelfs een auto omvatten die door controleposten reed."
        }
      },
      {
        question: {
          en: "After Napoleon's coup in 1799, what title did he initially take?",
          es: "Después del golpe de Napoleón en 1799, ¿qué título tomó inicialmente?",
          de: "Welchen Titel nahm Napoleon nach seinem Staatsstreich 1799 zunächst an?",
          nl: "Welke titel nam Napoleon aanvankelijk aan na zijn staatsgreep in 1799?"
        },
        options: [
          { en: "Emperor", es: "Emperador", de: "Kaiser", nl: "Keizer" },
          { en: "King", es: "Rey", de: "König", nl: "Koning" },
          { en: "First Consul", es: "Primer Cónsul", de: "Erster Konsul", nl: "Eerste Consul" },
          { en: "President", es: "Presidente", de: "Präsident", nl: "President" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Following the coup, Napoleon became First Consul of France, a position inspired by ancient Roman consuls. The Consulate was a three-person government, but Napoleon as First Consul held the real power. In 1802, he became Consul for Life, and in 1804, he crowned himself Emperor. The title of 'First Consul' allowed Napoleon to consolidate power while maintaining a republican facade.",
          es: "Después del golpe, Napoleón se convirtió en Primer Cónsul de Francia, un cargo inspirado en los antiguos cónsules romanos. El Consulado era un gobierno de tres personas, pero Napoleón como Primer Cónsul tenía el poder real. En 1802, se convirtió en Cónsul Vitalicio, y en 1804, se coronó a sí mismo Emperador. El título de 'Primer Cónsul' permitió a Napoleón consolidar el poder mientras mantenía una fachada republicana.",
          de: "Nach dem Staatsstreich wurde Napoleon Erster Konsul von Frankreich, eine Position inspiriert von antiken römischen Konsuln. Das Konsulat war eine Dreier-Regierung, aber Napoleon als Erster Konsul hielt die wirkliche Macht. 1802 wurde er Konsul auf Lebenszeit, und 1804 krönte er sich selbst zum Kaiser. Der Titel 'Erster Konsul' ermöglichte es Napoleon, die Macht zu konsolidieren, während er eine republikanische Fassade aufrechterhielt.",
          nl: "Na de staatsgreep werd Napoleon Eerste Consul van Frankrijk, een positie geïnspireerd op oude Romeinse consuls. Het Consulaat was een regering van drie personen, maar Napoleon als Eerste Consul had de echte macht. In 1802 werd hij Consul voor het Leven, en in 1804 kroonde hij zichzelf tot Keizer. De titel 'Eerste Consul' stelde Napoleon in staat om de macht te consolideren terwijl hij een republikeinse façade handhaafde."
        }
      }
    ],

    // Day 10 - November 10th: Sesame Street premieres (1969), Martin Luther born (1483), U.S. Marine Corps founded (1775)
    day10: [
      {
        question: {
          en: "The beloved children's television show Sesame Street premiered on November 10 of which year?",
          es: "El querido programa de televisión infantil Plaza Sésamo se estrenó el 10 de noviembre de qué año?",
          de: "Die beliebte Kindersendung Sesamstraße hatte am 10. November welchen Jahres Premiere?",
          nl: "Het geliefde kinderprogramma Sesamstraat ging in première op 10 november van welk jaar?"
        },
        options: [
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1969", es: "1969", de: "1969", nl: "1969" },
          { en: "1972", es: "1972", de: "1972", nl: "1972" },
          { en: "1975", es: "1975", de: "1975", nl: "1975" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Sesame Street premiered on November 10, 1969, revolutionizing children's television. Created by Joan Ganz Cooney and Lloyd Morrisett, the show combined education with entertainment, teaching children letters, numbers, and social skills. Featuring beloved characters like Big Bird, Oscar the Grouch, and Cookie Monster, Sesame Street has aired in over 150 countries and won more Emmy Awards than any other television series.",
          es: "Plaza Sésamo se estrenó el 10 de noviembre de 1969, revolucionando la televisión infantil. Creado por Joan Ganz Cooney y Lloyd Morrisett, el programa combinó educación con entretenimiento, enseñando a los niños letras, números y habilidades sociales. Con personajes queridos como Big Bird, Oscar el Gruñón y el Monstruo de las Galletas, Plaza Sésamo se ha transmitido en más de 150 países y ha ganado más premios Emmy que cualquier otra serie de televisión.",
          de: "Die Sesamstraße hatte am 10. November 1969 Premiere und revolutionierte das Kinderfernsehen. Von Joan Ganz Cooney und Lloyd Morrisett entwickelt, kombinierte die Sendung Bildung mit Unterhaltung und lehrte Kindern Buchstaben, Zahlen und soziale Fähigkeiten. Mit beliebten Charakteren wie Bibo, Oscar aus der Mülltonne und dem Krümelmonster wurde die Sesamstraße in über 150 Ländern ausgestrahlt und gewann mehr Emmy Awards als jede andere Fernsehserie.",
          nl: "Sesamstraat ging in première op 10 november 1969 en revolutioneerde kindertelevisie. Gecreëerd door Joan Ganz Cooney en Lloyd Morrisett, combineerde het programma educatie met entertainment en leerde kinderen letters, cijfers en sociale vaardigheden. Met geliefde personages zoals Pino, Oscar de Bokkenpruik en Koekiemonster is Sesamstraat uitgezonden in meer dan 150 landen en heeft meer Emmy Awards gewonnen dan welke andere televisieserie dan ook."
        }
      },
      {
        question: {
          en: "Martin Luther, born November 10, 1483, sparked which major religious movement?",
          es: "Martín Lutero, nacido el 10 de noviembre de 1483, desencadenó qué importante movimiento religioso?",
          de: "Martin Luther, geboren am 10. November 1483, löste welche wichtige religiöse Bewegung aus?",
          nl: "Maarten Luther, geboren op 10 november 1483, begon welke belangrijke religieuze beweging?"
        },
        options: [
          { en: "The Protestant Reformation", es: "La Reforma Protestante", de: "Die protestantische Reformation", nl: "De Protestantse Reformatie" },
          { en: "The Counter-Reformation", es: "La Contrarreforma", de: "Die Gegenreformation", nl: "De Contrareformatie" },
          { en: "The Great Schism", es: "El Gran Cisma", de: "Das Große Schisma", nl: "Het Grote Schisma" },
          { en: "The Crusades", es: "Las Cruzadas", de: "Die Kreuzzüge", nl: "De Kruistochten" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Martin Luther sparked the Protestant Reformation in 1517 when he posted his 95 Theses criticizing Catholic Church practices, particularly the sale of indulgences. His teachings emphasized salvation through faith alone and the authority of Scripture over church tradition. Luther's translation of the Bible into German made it accessible to common people. The Reformation permanently divided Western Christianity and profoundly shaped European history.",
          es: "Martín Lutero desencadenó la Reforma Protestante en 1517 cuando publicó sus 95 Tesis criticando las prácticas de la Iglesia Católica, particularmente la venta de indulgencias. Sus enseñanzas enfatizaban la salvación solo por la fe y la autoridad de las Escrituras sobre la tradición de la iglesia. La traducción de Lutero de la Biblia al alemán la hizo accesible a la gente común. La Reforma dividió permanentemente el cristianismo occidental y moldeó profundamente la historia europea.",
          de: "Martin Luther löste 1517 die protestantische Reformation aus, als er seine 95 Thesen veröffentlichte, die die Praktiken der katholischen Kirche kritisierten, insbesondere den Ablasshandel. Seine Lehren betonten die Erlösung allein durch den Glauben und die Autorität der Heiligen Schrift über die Kirchentradition. Luthers Übersetzung der Bibel ins Deutsche machte sie für gewöhnliche Menschen zugänglich. Die Reformation spaltete das westliche Christentum dauerhaft und prägte die europäische Geschichte tiefgreifend.",
          nl: "Maarten Luther begon de Protestantse Reformatie in 1517 toen hij zijn 95 stellingen publiceerde waarin hij de praktijken van de Katholieke Kerk bekritiseerde, met name de verkoop van aflaten. Zijn leerstellingen benadrukten verlossing door geloof alleen en het gezag van de Schrift boven kerkelijke traditie. Luthers vertaling van de Bijbel in het Duits maakte het toegankelijk voor gewone mensen. De Reformatie verdeelde het Westerse christendom permanent en vormde de Europese geschiedenis diepgaand."
        }
      },
      {
        question: {
          en: "The United States Marine Corps was founded on November 10 of which year?",
          es: "El Cuerpo de Marines de los Estados Unidos fue fundado el 10 de noviembre de qué año?",
          de: "Das United States Marine Corps wurde am 10. November welchen Jahres gegründet?",
          nl: "Het United States Marine Corps werd opgericht op 10 november van welk jaar?"
        },
        options: [
          { en: "1765", es: "1765", de: "1765", nl: "1765" },
          { en: "1775", es: "1775", de: "1775", nl: "1775" },
          { en: "1783", es: "1783", de: "1783", nl: "1783" },
          { en: "1789", es: "1789", de: "1789", nl: "1789" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The U.S. Marine Corps was founded on November 10, 1775, when the Second Continental Congress resolved to raise two battalions of Marines. Initially created to serve as ship's troops on naval vessels, the Marines have evolved into an elite amphibious fighting force. November 10 is celebrated annually as the Marine Corps Birthday with a traditional cake-cutting ceremony. The Marine Corps motto is 'Semper Fidelis' (Always Faithful).",
          es: "El Cuerpo de Marines de EE.UU. fue fundado el 10 de noviembre de 1775, cuando el Segundo Congreso Continental resolvió formar dos batallones de Marines. Inicialmente creados para servir como tropas de barco en buques navales, los Marines han evolucionado a una fuerza de combate anfibia de élite. El 10 de noviembre se celebra anualmente como el cumpleaños del Cuerpo de Marines con una ceremonia tradicional de corte de pastel. El lema del Cuerpo de Marines es 'Semper Fidelis' (Siempre Fiel).",
          de: "Das US Marine Corps wurde am 10. November 1775 gegründet, als der Zweite Kontinentalkongress beschloss, zwei Bataillone Marines aufzustellen. Ursprünglich als Schiffstruppen auf Marineschiffen geschaffen, haben sich die Marines zu einer Elite-Amphibienkampftruppe entwickelt. Der 10. November wird jährlich als Geburtstag des Marine Corps mit einer traditionellen Tortenschneidezeremonie gefeiert. Das Motto des Marine Corps lautet 'Semper Fidelis' (Immer Treu).",
          nl: "Het U.S. Marine Corps werd opgericht op 10 november 1775, toen het Tweede Continentale Congres besloot twee bataljons mariniers op te richten. Oorspronkelijk gecreëerd om als scheepstroepen op marineschepen te dienen, zijn de Marines geëvolueerd tot een elite amfibische gevechtsmacht. 10 november wordt jaarlijks gevierd als de verjaardag van het Marine Corps met een traditionele taartsnijceremonie. Het motto van het Marine Corps is 'Semper Fidelis' (Altijd Trouw)."
        }
      },
      {
        question: {
          en: "Which famous Sesame Street character lives in a trash can?",
          es: "¿Qué famoso personaje de Plaza Sésamo vive en un bote de basura?",
          de: "Welcher berühmte Sesamstraßen-Charakter lebt in einer Mülltonne?",
          nl: "Welk beroemd Sesamstraat-personage woont in een vuilnisbak?"
        },
        options: [
          { en: "Big Bird", es: "Big Bird", de: "Bibo", nl: "Pino" },
          { en: "Elmo", es: "Elmo", de: "Elmo", nl: "Elmo" },
          { en: "Cookie Monster", es: "Monstruo de las Galletas", de: "Krümelmonster", nl: "Koekiemonster" },
          { en: "Oscar the Grouch", es: "Oscar el Gruñón", de: "Oscar aus der Mülltonne", nl: "Oscar de Bokkenpruik" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Oscar the Grouch is the beloved grumpy character who lives in a trash can on Sesame Street. First appearing in the show's premiere episode in 1969, Oscar loves trash and dislikes cheerfulness, teaching children that it's okay to have different preferences and moods. Originally orange, Oscar turned green in the second season. The character has been performed by Caroll Spinney from 1969 to 2018, then by Eric Jacobson.",
          es: "Oscar el Gruñón es el querido personaje gruñón que vive en un bote de basura en Plaza Sésamo. Apareciendo por primera vez en el episodio de estreno del programa en 1969, Oscar ama la basura y no le gusta la alegría, enseñando a los niños que está bien tener diferentes preferencias y estados de ánimo. Originalmente naranja, Oscar se volvió verde en la segunda temporada. El personaje fue interpretado por Caroll Spinney de 1969 a 2018, luego por Eric Jacobson.",
          de: "Oscar aus der Mülltonne ist der beliebte grimmige Charakter, der in einer Mülltonne in der Sesamstraße lebt. Erstmals in der Premiere-Episode der Show 1969 auftretend, liebt Oscar Müll und mag keine Fröhlichkeit, und lehrt Kinder, dass es in Ordnung ist, unterschiedliche Vorlieben und Stimmungen zu haben. Ursprünglich orange, wurde Oscar in der zweiten Staffel grün. Die Figur wurde von 1969 bis 2018 von Caroll Spinney gespielt, dann von Eric Jacobson.",
          nl: "Oscar de Bokkenpruik is het geliefde chagrijnige personage dat in een vuilnisbak woont in Sesamstraat. Voor het eerst verschenen in de première-aflevering van de show in 1969, houdt Oscar van afval en heeft een hekel aan vrolijkheid, en leert kinderen dat het oké is om verschillende voorkeuren en stemmingen te hebben. Oorspronkelijk oranje, werd Oscar groen in het tweede seizoen. Het personage werd gespeeld door Caroll Spinney van 1969 tot 2018, daarna door Eric Jacobson."
        }
      },
      {
        question: {
          en: "In what year did Martin Luther famously post his 95 Theses, challenging Catholic Church practices?",
          es: "¿En qué año publicó Martín Lutero famosamente sus 95 Tesis, desafiando las prácticas de la Iglesia Católica?",
          de: "In welchem Jahr veröffentlichte Martin Luther berühmterweise seine 95 Thesen und stellte die Praktiken der katholischen Kirche in Frage?",
          nl: "In welk jaar plaatste Maarten Luther beroemd zijn 95 stellingen, waarmee hij de praktijken van de Katholieke Kerk uitdaagde?"
        },
        options: [
          { en: "1483", es: "1483", de: "1483", nl: "1483" },
          { en: "1505", es: "1505", de: "1505", nl: "1505" },
          { en: "1517", es: "1517", de: "1517", nl: "1517" },
          { en: "1534", es: "1534", de: "1534", nl: "1534" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Martin Luther posted his 95 Theses on October 31, 1517, on the door of the Castle Church in Wittenberg, Germany. The theses challenged the Catholic Church's practice of selling indulgences and questioned papal authority. This act is traditionally considered the beginning of the Protestant Reformation. Luther intended to spark scholarly debate, but his ideas spread rapidly thanks to the printing press, transforming Christianity forever.",
          es: "Martín Lutero publicó sus 95 Tesis el 31 de octubre de 1517 en la puerta de la Iglesia del Castillo en Wittenberg, Alemania. Las tesis desafiaban la práctica de la Iglesia Católica de vender indulgencias y cuestionaban la autoridad papal. Este acto se considera tradicionalmente el comienzo de la Reforma Protestante. Lutero pretendía iniciar un debate académico, pero sus ideas se difundieron rápidamente gracias a la imprenta, transformando el cristianismo para siempre.",
          de: "Martin Luther schlug seine 95 Thesen am 31. Oktober 1517 an die Tür der Schlosskirche in Wittenberg, Deutschland. Die Thesen stellten die Praxis der katholischen Kirche, Ablässe zu verkaufen, in Frage und zweifelten die päpstliche Autorität an. Diese Tat gilt traditionell als Beginn der protestantischen Reformation. Luther beabsichtigte, eine wissenschaftliche Debatte auszulösen, aber seine Ideen verbreiteten sich dank der Druckerpresse schnell und veränderten das Christentum für immer.",
          nl: "Maarten Luther plaatste zijn 95 stellingen op 31 oktober 1517 aan de deur van de Slotkerk in Wittenberg, Duitsland. De stellingen daagden de praktijk van de Katholieke Kerk uit om aflaten te verkopen en stelden het pauselijke gezag ter discussie. Deze daad wordt traditioneel beschouwd als het begin van de Protestantse Reformatie. Luther had de bedoeling een wetenschappelijk debat op gang te brengen, maar zijn ideeën verspreidden zich snel dankzij de drukpers en transformeerden het christendom voor altijd."
        }
      }
    ],

    // Day 11 - November 11th: Veterans Day / Armistice Day (1918), Washington becomes state (1889), Leonardo DiCaprio born (1974)
    day11: [
      {
        question: {
          en: "What major event ended at the 11th hour of November 11, 1918?",
          es: "¿Qué evento importante terminó a la hora 11 del 11 de noviembre de 1918?",
          de: "Welches wichtige Ereignis endete zur 11. Stunde am 11. November 1918?",
          nl: "Welke belangrijke gebeurtenis eindigde op het 11e uur van 11 november 1918?"
        },
        options: [
          { en: "World War II", es: "La Segunda Guerra Mundial", de: "Der Zweite Weltkrieg", nl: "De Tweede Wereldoorlog" },
          { en: "World War I", es: "La Primera Guerra Mundial", de: "Der Erste Weltkrieg", nl: "De Eerste Wereldoorlog" },
          { en: "The Cold War", es: "La Guerra Fría", de: "Der Kalte Krieg", nl: "De Koude Oorlog" },
          { en: "The Vietnam War", es: "La Guerra de Vietnam", de: "Der Vietnamkrieg", nl: "De Vietnamoorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Armistice of November 11, 1918, marked the ceasefire that ended World War I's fighting on the Western Front. It took effect at 11 a.m. Paris time - the 11th hour of the 11th day of the 11th month. This day is commemorated as Armistice Day, Veterans Day (in the U.S.), or Remembrance Day in many countries. An estimated 9-11 million soldiers and 7-8 million civilians died in the Great War.",
          es: "El Armisticio del 11 de noviembre de 1918 marcó el alto el fuego que puso fin a los combates de la Primera Guerra Mundial en el Frente Occidental. Entró en vigor a las 11 a.m. hora de París: la hora 11 del día 11 del mes 11. Este día se conmemora como Día del Armisticio, Día de los Veteranos (en EE.UU.) o Día del Recuerdo en muchos países. Se estima que murieron entre 9 y 11 millones de soldados y entre 7 y 8 millones de civiles en la Gran Guerra.",
          de: "Der Waffenstillstand vom 11. November 1918 markierte die Waffenruhe, die die Kämpfe des Ersten Weltkriegs an der Westfront beendete. Er trat um 11 Uhr Pariser Zeit in Kraft - zur 11. Stunde des 11. Tages des 11. Monats. Dieser Tag wird als Waffenstillstandstag, Veterans Day (in den USA) oder Remembrance Day in vielen Ländern begangen. Schätzungsweise 9-11 Millionen Soldaten und 7-8 Millionen Zivilisten starben im Großen Krieg.",
          nl: "De Wapenstilstand van 11 november 1918 markeerde het staakt-het-vuren dat een einde maakte aan de gevechten van de Eerste Wereldoorlog aan het Westfront. Het trad in werking om 11 uur Parijse tijd - het 11e uur van de 11e dag van de 11e maand. Deze dag wordt herdacht als Wapenstilstandsdag, Veterans Day (in de VS) of Remembrance Day in veel landen. Naar schatting stierven 9-11 miljoen soldaten en 7-8 miljoen burgers in de Grote Oorlog."
        }
      },
      {
        question: {
          en: "Which U.S. state was admitted to the Union on November 11, 1889?",
          es: "¿Qué estado de EE.UU. fue admitido en la Unión el 11 de noviembre de 1889?",
          de: "Welcher US-Bundesstaat wurde am 11. November 1889 in die Union aufgenommen?",
          nl: "Welke Amerikaanse staat werd op 11 november 1889 toegelaten tot de Unie?"
        },
        options: [
          { en: "Oregon", es: "Oregón", de: "Oregon", nl: "Oregon" },
          { en: "Idaho", es: "Idaho", de: "Idaho", nl: "Idaho" },
          { en: "Montana", es: "Montana", de: "Montana", nl: "Montana" },
          { en: "Washington", es: "Washington", de: "Washington", nl: "Washington" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Washington became the 42nd state to join the United States on November 11, 1889. Named after George Washington, it's the only U.S. state named after a president. Washington's admission came during a period of rapid western expansion, along with North Dakota, South Dakota, and Montana. The state capital is Olympia, though Seattle is its largest city. Washington is known for its diverse geography, from the Pacific coast to the Cascade Mountains.",
          es: "Washington se convirtió en el estado número 42 en unirse a los Estados Unidos el 11 de noviembre de 1889. Nombrado en honor a George Washington, es el único estado de EE.UU. nombrado en honor a un presidente. La admisión de Washington se produjo durante un período de rápida expansión occidental, junto con Dakota del Norte, Dakota del Sur y Montana. La capital del estado es Olympia, aunque Seattle es su ciudad más grande. Washington es conocido por su geografía diversa, desde la costa del Pacífico hasta las Montañas Cascade.",
          de: "Washington wurde am 11. November 1889 der 42. Bundesstaat, der den Vereinigten Staaten beitrat. Benannt nach George Washington, ist es der einzige US-Bundesstaat, der nach einem Präsidenten benannt ist. Washingtons Aufnahme erfolgte während einer Zeit schneller westlicher Expansion, zusammen mit North Dakota, South Dakota und Montana. Die Hauptstadt des Staates ist Olympia, obwohl Seattle seine größte Stadt ist. Washington ist bekannt für seine vielfältige Geografie, von der Pazifikküste bis zu den Cascade Mountains.",
          nl: "Washington werd op 11 november 1889 de 42e staat die zich bij de Verenigde Staten voegde. Genoemd naar George Washington, is het de enige Amerikaanse staat die naar een president is vernoemd. Washington's toelating kwam tijdens een periode van snelle westelijke expansie, samen met North Dakota, South Dakota en Montana. De hoofdstad van de staat is Olympia, hoewel Seattle de grootste stad is. Washington staat bekend om zijn gevarieerde geografie, van de Pacifische kust tot de Cascade Mountains."
        }
      },
      {
        question: {
          en: "Academy Award-winning actor Leonardo DiCaprio was born on November 11 of which year?",
          es: "El actor ganador del Oscar Leonardo DiCaprio nació el 11 de noviembre de qué año?",
          de: "Der Oscar-prämierte Schauspieler Leonardo DiCaprio wurde am 11. November welchen Jahres geboren?",
          nl: "Oscar-winnende acteur Leonardo DiCaprio werd geboren op 11 november van welk jaar?"
        },
        options: [
          { en: "1970", es: "1970", de: "1970", nl: "1970" },
          { en: "1974", es: "1974", de: "1974", nl: "1974" },
          { en: "1978", es: "1978", de: "1978", nl: "1978" },
          { en: "1982", es: "1982", de: "1982", nl: "1982" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Leonardo DiCaprio was born on November 11, 1974, in Los Angeles, California. He rose to fame with his role in 'Titanic' (1997) and has since become one of Hollywood's most acclaimed actors. DiCaprio has received numerous awards including an Academy Award for 'The Revenant' (2015), after being nominated five times previously. He's also known for his environmental activism and his Leonardo DiCaprio Foundation, which supports conservation projects worldwide.",
          es: "Leonardo DiCaprio nació el 11 de noviembre de 1974 en Los Ángeles, California. Saltó a la fama con su papel en 'Titanic' (1997) y desde entonces se ha convertido en uno de los actores más aclamados de Hollywood. DiCaprio ha recibido numerosos premios, incluido un Premio de la Academia por 'El Renacido' (2015), después de ser nominado cinco veces anteriormente. También es conocido por su activismo ambiental y su Fundación Leonardo DiCaprio, que apoya proyectos de conservación en todo el mundo.",
          de: "Leonardo DiCaprio wurde am 11. November 1974 in Los Angeles, Kalifornien, geboren. Er wurde durch seine Rolle in 'Titanic' (1997) berühmt und ist seitdem zu einem der gefeiertsten Schauspieler Hollywoods geworden. DiCaprio hat zahlreiche Auszeichnungen erhalten, darunter einen Oscar für 'The Revenant' (2015), nachdem er zuvor fünfmal nominiert worden war. Er ist auch bekannt für seinen Umweltaktivismus und seine Leonardo DiCaprio Foundation, die weltweit Naturschutzprojekte unterstützt.",
          nl: "Leonardo DiCaprio werd geboren op 11 november 1974 in Los Angeles, Californië. Hij werd beroemd met zijn rol in 'Titanic' (1997) en is sindsdien uitgegroeid tot een van Hollywoods meest geprezen acteurs. DiCaprio heeft talrijke prijzen ontvangen, waaronder een Academy Award voor 'The Revenant' (2015), nadat hij eerder vijf keer was genomineerd. Hij staat ook bekend om zijn milieuactivisme en zijn Leonardo DiCaprio Foundation, die wereldwijd natuurbeschermingsprojecten steunt."
        }
      },
      {
        question: {
          en: "Veterans Day honors individuals who have served in which capacity?",
          es: "El Día de los Veteranos honra a las personas que han servido en qué capacidad?",
          de: "Der Veterans Day ehrt Personen, die in welcher Funktion gedient haben?",
          nl: "Veterans Day eert personen die in welke hoedanigheid hebben gediend?"
        },
        options: [
          { en: "Fire departments", es: "Departamentos de bomberos", de: "Feuerwehren", nl: "Brandweer" },
          { en: "Police forces", es: "Fuerzas policiales", de: "Polizeikräfte", nl: "Politiekorpsen" },
          { en: "Armed forces", es: "Fuerzas armadas", de: "Streitkräfte", nl: "Strijdkrachten" },
          { en: "Medical services", es: "Servicios médicos", de: "Medizinische Dienste", nl: "Medische diensten" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Veterans Day honors all military veterans who have served in the United States Armed Forces. Unlike Memorial Day, which honors those who died in service, Veterans Day celebrates all who have served, living or deceased. Originally called Armistice Day to commemorate the end of World War I, it was renamed Veterans Day in 1954 to honor all American veterans. Many communities hold parades, ceremonies, and special events to thank veterans for their service.",
          es: "El Día de los Veteranos honra a todos los veteranos militares que han servido en las Fuerzas Armadas de los Estados Unidos. A diferencia del Memorial Day, que honra a los que murieron en servicio, el Día de los Veteranos celebra a todos los que han servido, vivos o fallecidos. Originalmente llamado Día del Armisticio para conmemorar el fin de la Primera Guerra Mundial, fue renombrado Día de los Veteranos en 1954 para honrar a todos los veteranos estadounidenses. Muchas comunidades realizan desfiles, ceremonias y eventos especiales para agradecer a los veteranos por su servicio.",
          de: "Der Veterans Day ehrt alle Militärveteranen, die in den Streitkräften der Vereinigten Staaten gedient haben. Im Gegensatz zum Memorial Day, der diejenigen ehrt, die im Dienst gestorben sind, feiert der Veterans Day alle, die gedient haben, lebende oder verstorbene. Ursprünglich Waffenstillstandstag genannt, um das Ende des Ersten Weltkriegs zu gedenken, wurde er 1954 in Veterans Day umbenannt, um alle amerikanischen Veteranen zu ehren. Viele Gemeinden veranstalten Paraden, Zeremonien und besondere Veranstaltungen, um Veteranen für ihren Dienst zu danken.",
          nl: "Veterans Day eert alle militaire veteranen die hebben gediend in de strijdkrachten van de Verenigde Staten. In tegenstelling tot Memorial Day, dat degenen eert die in dienst zijn gestorven, viert Veterans Day iedereen die heeft gediend, levend of overleden. Oorspronkelijk Wapenstilstandsdag genoemd ter herdenking van het einde van de Eerste Wereldoorlog, werd het in 1954 hernoemd tot Veterans Day om alle Amerikaanse veteranen te eren. Veel gemeenschappen houden parades, ceremonies en speciale evenementen om veteranen te bedanken voor hun dienst."
        }
      },
      {
        question: {
          en: "The armistice ending World War I was signed in a railway carriage in which country?",
          es: "El armisticio que puso fin a la Primera Guerra Mundial se firmó en un vagón de ferrocarril en qué país?",
          de: "Der Waffenstillstand, der den Ersten Weltkrieg beendete, wurde in einem Eisenbahnwaggon in welchem Land unterzeichnet?",
          nl: "De wapenstilstand die een einde maakte aan de Eerste Wereldoorlog werd ondertekend in een treinwagon in welk land?"
        },
        options: [
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Armistice was signed in a railway carriage in the Forest of Compiègne, France, about 40 miles northeast of Paris. The carriage belonged to Allied Supreme Commander Marshal Ferdinand Foch. The same railway carriage was later used for the French surrender to Germany in 1940 during World War II. Hitler deliberately chose this location and carriage to humiliate France. The original carriage was destroyed by the Germans in 1945, but a replica now stands at the site as a memorial.",
          es: "El Armisticio se firmó en un vagón de ferrocarril en el Bosque de Compiègne, Francia, a unos 65 kilómetros al noreste de París. El vagón pertenecía al Comandante Supremo Aliado, Mariscal Ferdinand Foch. El mismo vagón se utilizó más tarde para la rendición francesa ante Alemania en 1940 durante la Segunda Guerra Mundial. Hitler eligió deliberadamente este lugar y vagón para humillar a Francia. El vagón original fue destruido por los alemanes en 1945, pero ahora una réplica se encuentra en el sitio como memorial.",
          de: "Der Waffenstillstand wurde in einem Eisenbahnwaggon im Wald von Compiègne, Frankreich, etwa 65 Kilometer nordöstlich von Paris unterzeichnet. Der Waggon gehörte dem Alliierten Oberbefehlshaber Marschall Ferdinand Foch. Derselbe Eisenbahnwaggon wurde später für die französische Kapitulation vor Deutschland 1940 während des Zweiten Weltkriegs verwendet. Hitler wählte bewusst diesen Ort und Waggon, um Frankreich zu demütigen. Der ursprüngliche Waggon wurde 1945 von den Deutschen zerstört, aber eine Nachbildung steht jetzt als Denkmal an der Stelle.",
          nl: "De Wapenstilstand werd ondertekend in een treinwagon in het Bos van Compiègne, Frankrijk, ongeveer 65 kilometer ten noordoosten van Parijs. De wagon was eigendom van Geallieerde Opperbevelhebber Maarschalk Ferdinand Foch. Dezelfde treinwagon werd later gebruikt voor de Franse overgave aan Duitsland in 1940 tijdens de Tweede Wereldoorlog. Hitler koos opzettelijk deze locatie en wagon om Frankrijk te vernederen. De originele wagon werd in 1945 door de Duitsers vernietigd, maar een replica staat nu op de plaats als gedenkteken."
        }
      }
    ],

    // Day 12 - November 12th: Ellis Island opens (1954), Anne Hathaway born (1982), Grace Kelly marries Prince Rainier (1956)
    day12: [
      {
        question: {
          en: "Ellis Island, the famous immigration station in New York Harbor, was reopened as a museum in which year?",
          es: "Ellis Island, la famosa estación de inmigración en el puerto de Nueva York, reabrió como museo en qué año?",
          de: "Ellis Island, die berühmte Einwanderungsstation im Hafen von New York, wurde in welchem Jahr als Museum wiedereröffnet?",
          nl: "Ellis Island, het beroemde immigratiestation in de haven van New York, werd heropend als museum in welk jaar?"
        },
        options: [
          { en: "1976", es: "1976", de: "1976", nl: "1976" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" },
          { en: "1954", es: "1954", de: "1954", nl: "1954" },
          { en: "2001", es: "2001", de: "2001", nl: "2001" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ellis Island reopened as a museum on November 12, 1990 (though it originally closed as an immigration station in 1954). Between 1892 and 1954, Ellis Island processed over 12 million immigrants arriving to America. The museum now honors the history of immigration and contains the American Immigrant Wall of Honor, listing over 700,000 immigrant names. At its peak, Ellis Island processed 5,000 people per day. The Statue of Liberty and Ellis Island together form one of America's most iconic landmarks.",
          es: "Ellis Island reabrió como museo el 12 de noviembre de 1990 (aunque originalmente cerró como estación de inmigración en 1954). Entre 1892 y 1954, Ellis Island procesó a más de 12 millones de inmigrantes que llegaban a América. El museo ahora honra la historia de la inmigración y contiene el Muro de Honor del Inmigrante Americano, que enumera más de 700,000 nombres de inmigrantes. En su punto máximo, Ellis Island procesaba 5,000 personas por día. La Estatua de la Libertad y Ellis Island juntos forman uno de los monumentos más icónicos de América.",
          de: "Ellis Island wurde am 12. November 1990 als Museum wiedereröffnet (obwohl es ursprünglich 1954 als Einwanderungsstation geschlossen wurde). Zwischen 1892 und 1954 bearbeitete Ellis Island über 12 Millionen Einwanderer, die nach Amerika kamen. Das Museum ehrt jetzt die Geschichte der Einwanderung und enthält die American Immigrant Wall of Honor mit über 700.000 Einwanderernamen. Auf seinem Höhepunkt bearbeitete Ellis Island 5.000 Menschen pro Tag. Die Freiheitsstatue und Ellis Island bilden zusammen eines der ikonischsten Wahrzeichen Amerikas.",
          nl: "Ellis Island heropende als museum op 12 november 1990 (hoewel het oorspronkelijk in 1954 sloot als immigratiestation). Tussen 1892 en 1954 verwerkte Ellis Island meer dan 12 miljoen immigranten die naar Amerika kwamen. Het museum eert nu de geschiedenis van immigratie en bevat de American Immigrant Wall of Honor, met meer dan 700.000 immigrantennamen. Op zijn hoogtepunt verwerkte Ellis Island 5.000 mensen per dag. Het Vrijheidsbeeld en Ellis Island vormen samen een van de meest iconische bezienswaardigheden van Amerika."
        }
      },
      {
        question: {
          en: "Oscar-winning actress Anne Hathaway was born on November 12 of which year?",
          es: "La actriz ganadora del Oscar Anne Hathaway nació el 12 de noviembre de qué año?",
          de: "Die Oscar-prämierte Schauspielerin Anne Hathaway wurde am 12. November welchen Jahres geboren?",
          nl: "Oscar-winnende actrice Anne Hathaway werd geboren op 12 november van welk jaar?"
        },
        options: [
          { en: "1978", es: "1978", de: "1978", nl: "1978" },
          { en: "1980", es: "1980", de: "1980", nl: "1980" },
          { en: "1982", es: "1982", de: "1982", nl: "1982" },
          { en: "1984", es: "1984", de: "1984", nl: "1984" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Anne Hathaway was born on November 12, 1982, in Brooklyn, New York. She became famous for her role in 'The Princess Diaries' (2001) and has since starred in numerous critically acclaimed films including 'Les Misérables' (2012), for which she won the Academy Award for Best Supporting Actress. Other notable films include 'The Devil Wears Prada' (2006), 'Interstellar' (2014), and 'The Dark Knight Rises' (2012). She was named after William Shakespeare's wife.",
          es: "Anne Hathaway nació el 12 de noviembre de 1982 en Brooklyn, Nueva York. Se hizo famosa por su papel en 'El Diario de la Princesa' (2001) y desde entonces ha protagonizado numerosas películas aclamadas por la crítica, incluida 'Los Miserables' (2012), por la que ganó el Premio de la Academia a la Mejor Actriz de Reparto. Otras películas notables incluyen 'El Diablo Viste a la Moda' (2006), 'Interstellar' (2014) y 'El Caballero de la Noche Asciende' (2012). Fue nombrada en honor a la esposa de William Shakespeare.",
          de: "Anne Hathaway wurde am 12. November 1982 in Brooklyn, New York, geboren. Sie wurde durch ihre Rolle in 'Plötzlich Prinzessin' (2001) berühmt und hat seitdem in zahlreichen von der Kritik gefeierten Filmen mitgewirkt, darunter 'Les Misérables' (2012), für den sie den Oscar als Beste Nebendarstellerin gewann. Weitere bemerkenswerte Filme sind 'Der Teufel trägt Prada' (2006), 'Interstellar' (2014) und 'The Dark Knight Rises' (2012). Sie wurde nach William Shakespeares Frau benannt.",
          nl: "Anne Hathaway werd geboren op 12 november 1982 in Brooklyn, New York. Ze werd beroemd door haar rol in 'The Princess Diaries' (2001) en heeft sindsdien gespeeld in tal van door critici geprezen films, waaronder 'Les Misérables' (2012), waarvoor ze de Academy Award voor Beste Vrouwelijke Bijrol won. Andere opmerkelijke films zijn 'The Devil Wears Prada' (2006), 'Interstellar' (2014) en 'The Dark Knight Rises' (2012). Ze werd vernoemd naar de vrouw van William Shakespeare."
        }
      },
      {
        question: {
          en: "Hollywood actress Grace Kelly married which European royal on November 12, 1956?",
          es: "La actriz de Hollywood Grace Kelly se casó con qué miembro de la realeza europea el 12 de noviembre de 1956?",
          de: "Hollywood-Schauspielerin Grace Kelly heiratete am 12. November 1956 welches europäische Mitglied des Königshauses?",
          nl: "Hollywood-actrice Grace Kelly trouwde op 12 november 1956 met welk Europees koninklijk lid?"
        },
        options: [
          { en: "Prince Albert of Belgium", es: "Príncipe Alberto de Bélgica", de: "Prinz Albert von Belgien", nl: "Prins Albert van België" },
          { en: "Prince Rainier of Monaco", es: "Príncipe Rainiero de Mónaco", de: "Fürst Rainier von Monaco", nl: "Prins Rainier van Monaco" },
          { en: "King Gustaf of Sweden", es: "Rey Gustavo de Suecia", de: "König Gustaf von Schweden", nl: "Koning Gustaf van Zweden" },
          { en: "Prince Philip of Greece", es: "Príncipe Felipe de Grecia", de: "Prinz Philip von Griechenland", nl: "Prins Philip van Griekenland" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Grace Kelly married Prince Rainier III of Monaco in a civil ceremony on November 12, 1956 (followed by a religious ceremony on April 19). The American actress met the prince during the 1955 Cannes Film Festival. Kelly retired from her successful Hollywood career, which included films like 'Rear Window' and 'To Catch a Thief.' As Princess Grace, she became Monaco's beloved First Lady and had three children. She died tragically in a car accident in 1982 at age 52.",
          es: "Grace Kelly se casó con el Príncipe Rainiero III de Mónaco en una ceremonia civil el 12 de noviembre de 1956 (seguida de una ceremonia religiosa el 19 de abril). La actriz estadounidense conoció al príncipe durante el Festival de Cannes de 1955. Kelly se retiró de su exitosa carrera en Hollywood, que incluyó películas como 'La Ventana Indiscreta' y 'Atrapa a un Ladrón'. Como Princesa Grace, se convirtió en la amada Primera Dama de Mónaco y tuvo tres hijos. Murió trágicamente en un accidente automovilístico en 1982 a los 52 años.",
          de: "Grace Kelly heiratete Fürst Rainier III. von Monaco in einer Ziviltrauung am 12. November 1956 (gefolgt von einer kirchlichen Trauung am 19. April). Die amerikanische Schauspielerin lernte den Fürsten während der Filmfestspiele von Cannes 1955 kennen. Kelly zog sich von ihrer erfolgreichen Hollywood-Karriere zurück, die Filme wie 'Das Fenster zum Hof' und 'Über den Dächern von Nizza' umfasste. Als Fürstin Gracia wurde sie Monacos geliebte First Lady und bekam drei Kinder. Sie starb tragisch 1982 im Alter von 52 Jahren bei einem Autounfall.",
          nl: "Grace Kelly trouwde met Prins Rainier III van Monaco in een burgerlijke ceremonie op 12 november 1956 (gevolgd door een religieuze ceremonie op 19 april). De Amerikaanse actrice ontmoette de prins tijdens het Filmfestival van Cannes in 1955. Kelly trok zich terug uit haar succesvolle Hollywood-carrière, die films omvatte zoals 'Rear Window' en 'To Catch a Thief'. Als Prinses Grace werd ze Monaco's geliefde First Lady en kreeg drie kinderen. Ze stierf tragisch in een auto-ongeluk in 1982 op 52-jarige leeftijd."
        }
      },
      {
        question: {
          en: "During its operation, approximately how many immigrants were processed through Ellis Island?",
          es: "Durante su operación, aproximadamente cuántos inmigrantes fueron procesados a través de Ellis Island?",
          de: "Während seiner Betriebszeit wurden ungefähr wie viele Einwanderer über Ellis Island abgefertigt?",
          nl: "Tijdens de operatie werden ongeveer hoeveel immigranten verwerkt via Ellis Island?"
        },
        options: [
          { en: "2 million", es: "2 millones", de: "2 Millionen", nl: "2 miljoen" },
          { en: "5 million", es: "5 millones", de: "5 Millionen", nl: "5 miljoen" },
          { en: "8 million", es: "8 millones", de: "8 Millionen", nl: "8 miljoen" },
          { en: "12 million", es: "12 millones", de: "12 Millionen", nl: "12 miljoen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Ellis Island processed over 12 million immigrants between 1892 and 1954. At its peak in 1907, over 1 million people passed through in a single year. Many came from Europe, seeking better opportunities in America. About 2% were denied entry due to medical or legal issues. The island became known as the 'Gateway to America.' Today, an estimated 40% of Americans can trace their ancestry to someone who came through Ellis Island.",
          es: "Ellis Island procesó más de 12 millones de inmigrantes entre 1892 y 1954. En su punto máximo en 1907, más de 1 millón de personas pasaron en un solo año. Muchos vinieron de Europa, buscando mejores oportunidades en América. Aproximadamente el 2% se les negó la entrada debido a problemas médicos o legales. La isla se conoció como la 'Puerta de entrada a América'. Hoy, se estima que el 40% de los estadounidenses pueden rastrear su ascendencia a alguien que pasó por Ellis Island.",
          de: "Ellis Island bearbeitete zwischen 1892 und 1954 über 12 Millionen Einwanderer. Auf seinem Höhepunkt im Jahr 1907 passierten über 1 Million Menschen in einem einzigen Jahr. Viele kamen aus Europa und suchten bessere Möglichkeiten in Amerika. Etwa 2% wurde die Einreise aus medizinischen oder rechtlichen Gründen verweigert. Die Insel wurde als 'Tor zu Amerika' bekannt. Heute können schätzungsweise 40% der Amerikaner ihre Abstammung auf jemanden zurückführen, der über Ellis Island kam.",
          nl: "Ellis Island verwerkte tussen 1892 en 1954 meer dan 12 miljoen immigranten. Op zijn hoogtepunt in 1907 passeerden meer dan 1 miljoen mensen in één jaar. Velen kwamen uit Europa, op zoek naar betere kansen in Amerika. Ongeveer 2% werd de toegang geweigerd vanwege medische of juridische problemen. Het eiland werd bekend als de 'Poort naar Amerika'. Vandaag kunnen naar schatting 40% van de Amerikanen hun afkomst terugvoeren op iemand die via Ellis Island kwam."
        }
      },
      {
        question: {
          en: "What was Grace Kelly's profession before becoming Princess of Monaco?",
          es: "¿Cuál era la profesión de Grace Kelly antes de convertirse en Princesa de Mónaco?",
          de: "Was war Grace Kellys Beruf, bevor sie Fürstin von Monaco wurde?",
          nl: "Wat was Grace Kelly's beroep voordat ze Prinses van Monaco werd?"
        },
        options: [
          { en: "Fashion model", es: "Modelo de moda", de: "Fotomodell", nl: "Fotomodel" },
          { en: "Hollywood actress", es: "Actriz de Hollywood", de: "Hollywood-Schauspielerin", nl: "Hollywood-actrice" },
          { en: "Opera singer", es: "Cantante de ópera", de: "Opernsängerin", nl: "Operazangeres" },
          { en: "Ballet dancer", es: "Bailarina de ballet", de: "Balletttänzerin", nl: "Balletdanseres" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Grace Kelly was a successful Hollywood actress before becoming Princess of Monaco. She starred in 11 films between 1951 and 1956, working with legendary directors like Alfred Hitchcock. She won an Academy Award for Best Actress for 'The Country Girl' (1954). Her films with Hitchcock include 'Dial M for Murder,' 'Rear Window,' and 'To Catch a Thief.' She was considered one of Hollywood's most elegant and talented actresses before retiring at age 26 to marry Prince Rainier.",
          es: "Grace Kelly fue una exitosa actriz de Hollywood antes de convertirse en Princesa de Mónaco. Protagonizó 11 películas entre 1951 y 1956, trabajando con directores legendarios como Alfred Hitchcock. Ganó un Premio de la Academia a la Mejor Actriz por 'La Chica del Pueblo' (1954). Sus películas con Hitchcock incluyen 'Crimen Perfecto', 'La Ventana Indiscreta' y 'Atrapa a un Ladrón'. Fue considerada una de las actrices más elegantes y talentosas de Hollywood antes de retirarse a los 26 años para casarse con el Príncipe Rainiero.",
          de: "Grace Kelly war eine erfolgreiche Hollywood-Schauspielerin, bevor sie Fürstin von Monaco wurde. Sie spielte zwischen 1951 und 1956 in 11 Filmen und arbeitete mit legendären Regisseuren wie Alfred Hitchcock. Sie gewann einen Oscar als Beste Schauspielerin für 'Ein Mädchen vom Lande' (1954). Ihre Filme mit Hitchcock umfassen 'Bei Anruf Mord', 'Das Fenster zum Hof' und 'Über den Dächern von Nizza'. Sie galt als eine der elegantesten und talentiertesten Schauspielerinnen Hollywoods, bevor sie sich mit 26 Jahren zurückzog, um Fürst Rainier zu heiraten.",
          nl: "Grace Kelly was een succesvolle Hollywood-actrice voordat ze Prinses van Monaco werd. Ze speelde in 11 films tussen 1951 en 1956 en werkte met legendarische regisseurs zoals Alfred Hitchcock. Ze won een Academy Award voor Beste Actrice voor 'The Country Girl' (1954). Haar films met Hitchcock omvatten 'Dial M for Murder', 'Rear Window' en 'To Catch a Thief'. Ze werd beschouwd als een van Hollywoods meest elegante en getalenteerde actrices voordat ze op 26-jarige leeftijd met pensioen ging om te trouwen met Prins Rainier."
        }
      }
    ],

    // Day 13 - November 13th: Paris attacks (2015), Robert Louis Stevenson born (1850), Whoopi Goldberg born (1955)
    day13: [
      {
        question: {
          en: "A series of coordinated terrorist attacks struck Paris on November 13 of which year?",
          es: "Una serie de ataques terroristas coordinados golpearon París el 13 de noviembre de qué año?",
          de: "Eine Reihe koordinierter Terroranschläge traf Paris am 13. November welchen Jahres?",
          nl: "Een reeks gecoördineerde terroristische aanslagen trof Parijs op 13 november van welk jaar?"
        },
        options: [
          { en: "2012", es: "2012", de: "2012", nl: "2012" },
          { en: "2015", es: "2015", de: "2015", nl: "2015" },
          { en: "2017", es: "2017", de: "2017", nl: "2017" },
          { en: "2019", es: "2019", de: "2019", nl: "2019" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On November 13, 2015, coordinated terrorist attacks occurred at multiple locations in Paris, including the Bataclan theater, restaurants, and the Stade de France stadium. The attacks killed 130 people and injured hundreds more. ISIS claimed responsibility for the coordinated assault. The tragedy led to France declaring a state of emergency and increased security measures across Europe. The Bataclan concert hall attack became one of the deadliest single incidents.",
          es: "El 13 de noviembre de 2015, se produjeron ataques terroristas coordinados en múltiples lugares de París, incluido el teatro Bataclan, restaurantes y el estadio Stade de France. Los ataques mataron a 130 personas e hirieron a cientos más. ISIS se atribuyó la responsabilidad del asalto coordinado. La tragedia llevó a Francia a declarar el estado de emergencia y aumentar las medidas de seguridad en toda Europa. El ataque al teatro Bataclan se convirtió en uno de los incidentes más mortales.",
          de: "Am 13. November 2015 ereigneten sich koordinierte Terroranschläge an mehreren Orten in Paris, darunter das Bataclan-Theater, Restaurants und das Stade de France-Stadion. Die Anschläge töteten 130 Menschen und verletzten Hunderte weitere. ISIS übernahm die Verantwortung für den koordinierten Angriff. Die Tragödie führte dazu, dass Frankreich den Ausnahmezustand ausrief und die Sicherheitsmaßnahmen in ganz Europa verschärfte. Der Anschlag auf das Bataclan wurde einer der tödlichsten Einzelvorfälle.",
          nl: "Op 13 november 2015 vonden gecoördineerde terroristische aanslagen plaats op meerdere locaties in Parijs, waaronder het Bataclan-theater, restaurants en het Stade de France-stadion. De aanslagen doodden 130 mensen en verwondden honderden meer. ISIS claimde de verantwoordelijkheid voor de gecoördineerde aanval. De tragedie leidde ertoe dat Frankrijk de noodtoestand uitriep en de veiligheidsmaatregelen in heel Europa werden verscherpt. De aanslag op Bataclan werd een van de dodelijkste afzonderlijke incidenten."
        }
      },
      {
        question: {
          en: "Scottish author Robert Louis Stevenson, who wrote 'Treasure Island' and 'Dr. Jekyll and Mr. Hyde,' was born on November 13 of which year?",
          es: "El autor escocés Robert Louis Stevenson, quien escribió 'La Isla del Tesoro' y 'Dr. Jekyll y Mr. Hyde', nació el 13 de noviembre de qué año?",
          de: "Der schottische Autor Robert Louis Stevenson, der 'Die Schatzinsel' und 'Dr. Jekyll und Mr. Hyde' schrieb, wurde am 13. November welchen Jahres geboren?",
          nl: "De Schotse auteur Robert Louis Stevenson, die 'Schateiland' en 'Dr. Jekyll en Mr. Hyde' schreef, werd geboren op 13 november van welk jaar?"
        },
        options: [
          { en: "1835", es: "1835", de: "1835", nl: "1835" },
          { en: "1850", es: "1850", de: "1850", nl: "1850" },
          { en: "1865", es: "1865", de: "1865", nl: "1865" },
          { en: "1880", es: "1880", de: "1880", nl: "1880" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Robert Louis Stevenson was born on November 13, 1850, in Edinburgh, Scotland. He became one of the most beloved adventure and horror writers of the Victorian era. His novels include 'Treasure Island' (1883), 'Strange Case of Dr Jekyll and Mr Hyde' (1886), and 'Kidnapped' (1886). Despite suffering from chronic health problems throughout his life, Stevenson traveled extensively and eventually settled in Samoa, where he died in 1894 at age 44. His works remain classics of English literature.",
          es: "Robert Louis Stevenson nació el 13 de noviembre de 1850 en Edimburgo, Escocia. Se convirtió en uno de los escritores de aventuras y terror más queridos de la era victoriana. Sus novelas incluyen 'La Isla del Tesoro' (1883), 'El Extraño Caso del Dr. Jekyll y Mr. Hyde' (1886) y 'Secuestrado' (1886). A pesar de sufrir problemas de salud crónicos durante toda su vida, Stevenson viajó extensamente y finalmente se estableció en Samoa, donde murió en 1894 a los 44 años. Sus obras siguen siendo clásicos de la literatura inglesa.",
          de: "Robert Louis Stevenson wurde am 13. November 1850 in Edinburgh, Schottland, geboren. Er wurde zu einem der beliebtesten Abenteuer- und Horrorautoren der viktorianischen Ära. Seine Romane umfassen 'Die Schatzinsel' (1883), 'Der seltsame Fall des Dr. Jekyll und Mr. Hyde' (1886) und 'Die Entführung' (1886). Trotz chronischer Gesundheitsprobleme während seines gesamten Lebens reiste Stevenson ausgiebig und ließ sich schließlich in Samoa nieder, wo er 1894 im Alter von 44 Jahren starb. Seine Werke bleiben Klassiker der englischen Literatur.",
          nl: "Robert Louis Stevenson werd geboren op 13 november 1850 in Edinburgh, Schotland. Hij werd een van de meest geliefde avontuur- en horror schrijvers van het Victoriaanse tijdperk. Zijn romans omvatten 'Schateiland' (1883), 'De Vreemde Zaak van Dr. Jekyll en Mr. Hyde' (1886) en 'Ontvoerd' (1886). Ondanks chronische gezondheidsproblemen gedurende zijn hele leven, reisde Stevenson veel en vestigde zich uiteindelijk in Samoa, waar hij in 1894 op 44-jarige leeftijd stierf. Zijn werken blijven klassiekers van de Engelse literatuur."
        }
      },
      {
        question: {
          en: "Academy Award-winning actress and comedian Whoopi Goldberg was born on November 13 of which year?",
          es: "La actriz y comediante ganadora del Oscar Whoopi Goldberg nació el 13 de noviembre de qué año?",
          de: "Die Oscar-prämierte Schauspielerin und Komikerin Whoopi Goldberg wurde am 13. November welchen Jahres geboren?",
          nl: "Oscar-winnende actrice en comédienne Whoopi Goldberg werd geboren op 13 november van welk jaar?"
        },
        options: [
          { en: "1950", es: "1950", de: "1950", nl: "1950" },
          { en: "1952", es: "1952", de: "1952", nl: "1952" },
          { en: "1955", es: "1955", de: "1955", nl: "1955" },
          { en: "1958", es: "1958", de: "1958", nl: "1958" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Whoopi Goldberg was born Caryn Elaine Johnson on November 13, 1955, in New York City. She won an Academy Award for Best Supporting Actress for 'Ghost' (1990) and is one of only 18 people to achieve EGOT status (Emmy, Grammy, Oscar, and Tony awards). Other notable films include 'The Color Purple' (1985), 'Sister Act' (1992), and 'The Lion King' (1994). Since 2007, she has been a co-host on 'The View.' She's known for her distinctive voice and groundbreaking career as a Black woman in entertainment.",
          es: "Whoopi Goldberg nació como Caryn Elaine Johnson el 13 de noviembre de 1955 en la ciudad de Nueva York. Ganó un Premio de la Academia a la Mejor Actriz de Reparto por 'Ghost' (1990) y es una de las únicas 18 personas en lograr el estatus EGOT (premios Emmy, Grammy, Oscar y Tony). Otras películas notables incluyen 'El Color Púrpura' (1985), 'Sister Act' (1992) y 'El Rey León' (1994). Desde 2007, ha sido copresentadora de 'The View'. Es conocida por su voz distintiva y su carrera pionera como mujer negra en el entretenimiento.",
          de: "Whoopi Goldberg wurde als Caryn Elaine Johnson am 13. November 1955 in New York City geboren. Sie gewann einen Oscar als Beste Nebendarstellerin für 'Ghost' (1990) und ist eine von nur 18 Personen, die den EGOT-Status erreicht haben (Emmy-, Grammy-, Oscar- und Tony-Auszeichnungen). Weitere bemerkenswerte Filme sind 'Die Farbe Lila' (1985), 'Sister Act' (1992) und 'Der König der Löwen' (1994). Seit 2007 ist sie Co-Moderatorin von 'The View'. Sie ist bekannt für ihre unverwechselbare Stimme und ihre bahnbrechende Karriere als schwarze Frau in der Unterhaltungsbranche.",
          nl: "Whoopi Goldberg werd geboren als Caryn Elaine Johnson op 13 november 1955 in New York City. Ze won een Academy Award voor Beste Vrouwelijke Bijrol voor 'Ghost' (1990) en is een van de slechts 18 mensen die EGOT-status hebben bereikt (Emmy-, Grammy-, Oscar- en Tony-awards). Andere opmerkelijke films zijn 'The Color Purple' (1985), 'Sister Act' (1992) en 'The Lion King' (1994). Sinds 2007 is ze co-host van 'The View'. Ze staat bekend om haar kenmerkende stem en baanbrekende carrière als zwarte vrouw in de entertainmentindustrie."
        }
      },
      {
        question: {
          en: "Which famous novel by Robert Louis Stevenson features a mysterious treasure map and a one-legged pirate named Long John Silver?",
          es: "¿Qué famosa novela de Robert Louis Stevenson presenta un misterioso mapa del tesoro y un pirata de una sola pierna llamado Long John Silver?",
          de: "Welcher berühmte Roman von Robert Louis Stevenson zeigt eine geheimnisvolle Schatzkarte und einen einbeinigen Piraten namens Long John Silver?",
          nl: "Welke beroemde roman van Robert Louis Stevenson bevat een mysterieuze schatkaart en een eenbenige piraat genaamd Long John Silver?"
        },
        options: [
          { en: "Kidnapped", es: "Secuestrado", de: "Die Entführung", nl: "Ontvoerd" },
          { en: "The Black Arrow", es: "La Flecha Negra", de: "Der Schwarze Pfeil", nl: "De Zwarte Pijl" },
          { en: "Treasure Island", es: "La Isla del Tesoro", de: "Die Schatzinsel", nl: "Schateiland" },
          { en: "Catriona", es: "Catriona", de: "Catriona", nl: "Catriona" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Treasure Island' (1883) is Robert Louis Stevenson's most famous adventure novel. The story follows young Jim Hawkins who discovers a treasure map and embarks on a dangerous voyage with the charismatic but treacherous pirate Long John Silver. The novel popularized many pirate tropes including treasure maps marked with an 'X,' tropical islands, and the iconic phrase 'Yo-ho-ho and a bottle of rum.' It has been adapted countless times for film, television, and stage.",
          es: "'La Isla del Tesoro' (1883) es la novela de aventuras más famosa de Robert Louis Stevenson. La historia sigue al joven Jim Hawkins, quien descubre un mapa del tesoro y se embarca en un peligroso viaje con el carismático pero traicionero pirata Long John Silver. La novela popularizó muchos tropos piratas, incluidos mapas del tesoro marcados con una 'X', islas tropicales y la icónica frase 'Yo-jo-jo y una botella de ron'. Ha sido adaptada innumerables veces para cine, televisión y teatro.",
          de: "'Die Schatzinsel' (1883) ist Robert Louis Stevensons berühmtester Abenteuerroman. Die Geschichte folgt dem jungen Jim Hawkins, der eine Schatzkarte entdeckt und sich auf eine gefährliche Reise mit dem charismatischen aber heimtückischen Piraten Long John Silver begibt. Der Roman popularisierte viele Piraten-Tropen, darunter mit einem 'X' markierte Schatzkarten, tropische Inseln und den ikonischen Satz 'Yo-ho-ho und eine Flasche Rum'. Er wurde unzählige Male für Film, Fernsehen und Bühne adaptiert.",
          nl: "'Schateiland' (1883) is Robert Louis Stevensons beroemdste avonturenroman. Het verhaal volgt de jonge Jim Hawkins die een schatkaart ontdekt en op een gevaarlijke reis gaat met de charismatische maar verraderlijke piraat Long John Silver. De roman populariseerde veel piratentropes, waaronder schatkaarten gemarkeerd met een 'X', tropische eilanden en de iconische zin 'Yo-ho-ho en een fles rum'. Het is talloze keren bewerkt voor film, televisie en toneel."
        }
      },
      {
        question: {
          en: "Whoopi Goldberg is one of the few entertainers to achieve EGOT status. What does EGOT stand for?",
          es: "Whoopi Goldberg es una de las pocas artistas en lograr el estatus EGOT. ¿Qué significa EGOT?",
          de: "Whoopi Goldberg ist eine der wenigen Entertainerinnen, die den EGOT-Status erreicht haben. Wofür steht EGOT?",
          nl: "Whoopi Goldberg is een van de weinige entertainers die EGOT-status heeft bereikt. Waar staat EGOT voor?"
        },
        options: [
          { en: "Excellence in Grand Orchestral Theater", es: "Excelencia en Gran Teatro Orquestal", de: "Exzellenz im großen Orchestertheater", nl: "Excellentie in Groot Orkesttheater" },
          { en: "Emmy, Grammy, Oscar, Tony", es: "Emmy, Grammy, Oscar, Tony", de: "Emmy, Grammy, Oscar, Tony", nl: "Emmy, Grammy, Oscar, Tony" },
          { en: "Exceptional Genius Of Television", es: "Genio Excepcional de la Televisión", de: "Außergewöhnliches Genie des Fernsehens", nl: "Uitzonderlijk Genie van Televisie" },
          { en: "Entertainment Guild Original Talent", es: "Talento Original del Gremio del Entretenimiento", de: "Entertainment Guild Original Talent", nl: "Entertainment Guild Origineel Talent" }
        ],
        correctIndex: 1,
        explanation: {
          en: "EGOT stands for Emmy, Grammy, Oscar, and Tony - the four major American entertainment awards. Only 18 people have achieved this prestigious status, known as the 'Grand Slam of show business.' Whoopi Goldberg won her Emmy for 'Beyond Tina Turner' (1985), Grammy for 'Whoopi Goldberg' (1985), Oscar for 'Ghost' (1990), and Tony for producing 'Thoroughly Modern Millie' (2002). Other EGOT winners include Audrey Hepburn, John Legend, and Jennifer Hudson.",
          es: "EGOT significa Emmy, Grammy, Oscar y Tony: los cuatro premios principales del entretenimiento estadounidense. Solo 18 personas han logrado este prestigioso estatus, conocido como el 'Grand Slam del mundo del espectáculo'. Whoopi Goldberg ganó su Emmy por 'Beyond Tina Turner' (1985), Grammy por 'Whoopi Goldberg' (1985), Oscar por 'Ghost' (1990) y Tony por producir 'Thoroughly Modern Millie' (2002). Otros ganadores del EGOT incluyen a Audrey Hepburn, John Legend y Jennifer Hudson.",
          de: "EGOT steht für Emmy, Grammy, Oscar und Tony - die vier großen amerikanischen Unterhaltungspreise. Nur 18 Personen haben diesen prestigeträchtigen Status erreicht, der als 'Grand Slam des Showbusiness' bekannt ist. Whoopi Goldberg gewann ihren Emmy für 'Beyond Tina Turner' (1985), Grammy für 'Whoopi Goldberg' (1985), Oscar für 'Ghost' (1990) und Tony für die Produktion von 'Thoroughly Modern Millie' (2002). Weitere EGOT-Gewinner sind Audrey Hepburn, John Legend und Jennifer Hudson.",
          nl: "EGOT staat voor Emmy, Grammy, Oscar en Tony - de vier grote Amerikaanse entertainmentprijzen. Slechts 18 mensen hebben deze prestigieuze status bereikt, bekend als de 'Grand Slam van showbusiness'. Whoopi Goldberg won haar Emmy voor 'Beyond Tina Turner' (1985), Grammy voor 'Whoopi Goldberg' (1985), Oscar voor 'Ghost' (1990) en Tony voor het produceren van 'Thoroughly Modern Millie' (2002). Andere EGOT-winnaars zijn onder meer Audrey Hepburn, John Legend en Jennifer Hudson."
        }
      }
    ],

    // Day 14 - November 14th: Moby-Dick published (1851), Charles, Prince of Wales born (1948), Claude Monet born (1840)
    day14: [
      {
        question: {
          en: "Herman Melville's famous novel 'Moby-Dick' was first published on November 14 of which year?",
          es: "La famosa novela de Herman Melville 'Moby-Dick' fue publicada por primera vez el 14 de noviembre de qué año?",
          de: "Herman Melvilles berühmter Roman 'Moby-Dick' wurde erstmals am 14. November welchen Jahres veröffentlicht?",
          nl: "Herman Melvilles beroemde roman 'Moby-Dick' werd voor het eerst gepubliceerd op 14 november van welk jaar?"
        },
        options: [
          { en: "1835", es: "1835", de: "1835", nl: "1835" },
          { en: "1851", es: "1851", de: "1851", nl: "1851" },
          { en: "1867", es: "1867", de: "1867", nl: "1867" },
          { en: "1882", es: "1882", de: "1882", nl: "1882" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'Moby-Dick' was published on November 14, 1851. The epic tale of Captain Ahab's obsessive quest to hunt the white whale is now considered one of the greatest American novels. However, it was initially a commercial failure, selling only about 3,000 copies during Melville's lifetime. The book's reputation grew posthumously, and it's now recognized for its complex symbolism, innovative narrative structure, and exploration of themes like obsession, fate, and humanity's relationship with nature.",
          es: "'Moby-Dick' fue publicado el 14 de noviembre de 1851. La épica historia de la obsesiva búsqueda del Capitán Ahab por cazar a la ballena blanca ahora se considera una de las mejores novelas estadounidenses. Sin embargo, inicialmente fue un fracaso comercial, vendiendo solo unas 3,000 copias durante la vida de Melville. La reputación del libro creció póstumamente, y ahora es reconocido por su complejo simbolismo, estructura narrativa innovadora y exploración de temas como la obsesión, el destino y la relación de la humanidad con la naturaleza.",
          de: "'Moby-Dick' wurde am 14. November 1851 veröffentlicht. Die epische Geschichte von Captain Ahabs obsessiver Jagd auf den weißen Wal gilt heute als einer der größten amerikanischen Romane. Allerdings war es zunächst ein kommerzieller Misserfolg und verkaufte sich zu Melvilles Lebzeiten nur etwa 3.000 Mal. Der Ruf des Buches wuchs posthum, und es wird heute für seine komplexe Symbolik, innovative Erzählstruktur und Erforschung von Themen wie Obsession, Schicksal und der Beziehung der Menschheit zur Natur anerkannt.",
          nl: "'Moby-Dick' werd gepubliceerd op 14 november 1851. Het epische verhaal van Kapitein Ahabs obsessieve zoektocht naar de witte walvis wordt nu beschouwd als een van de grootste Amerikaanse romans. Het was echter aanvankelijk een commercieel fiasco en verkocht slechts ongeveer 3.000 exemplaren tijdens Melvilles leven. De reputatie van het boek groeide postuum en het wordt nu erkend voor zijn complexe symboliek, innovatieve narratieve structuur en verkenning van thema's als obsessie, lot en de relatie van de mensheid met de natuur."
        }
      },
      {
        question: {
          en: "King Charles III (formerly Prince Charles, Prince of Wales) was born on November 14 of which year?",
          es: "El Rey Carlos III (anteriormente Príncipe Carlos, Príncipe de Gales) nació el 14 de noviembre de qué año?",
          de: "König Charles III. (früher Prinz Charles, Prinz von Wales) wurde am 14. November welchen Jahres geboren?",
          nl: "Koning Charles III (voorheen Prins Charles, Prins van Wales) werd geboren op 14 november van welk jaar?"
        },
        options: [
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1948", es: "1948", de: "1948", nl: "1948" },
          { en: "1952", es: "1952", de: "1952", nl: "1952" },
          { en: "1956", es: "1956", de: "1956", nl: "1956" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Charles III was born on November 14, 1948, at Buckingham Palace. He became king following the death of his mother, Queen Elizabeth II, on September 8, 2022. As Prince of Wales, he waited longer than any other heir apparent in British history before ascending to the throne at age 73. He's known for his advocacy on environmental issues, organic farming, and architecture. His coronation took place on May 6, 2023, at Westminster Abbey.",
          es: "Carlos III nació el 14 de noviembre de 1948 en el Palacio de Buckingham. Se convirtió en rey tras la muerte de su madre, la Reina Isabel II, el 8 de septiembre de 2022. Como Príncipe de Gales, esperó más tiempo que cualquier otro heredero aparente en la historia británica antes de ascender al trono a los 73 años. Es conocido por su defensa de temas ambientales, agricultura orgánica y arquitectura. Su coronación tuvo lugar el 6 de mayo de 2023 en la Abadía de Westminster.",
          de: "Charles III. wurde am 14. November 1948 im Buckingham Palace geboren. Er wurde König nach dem Tod seiner Mutter, Königin Elizabeth II., am 8. September 2022. Als Prinz von Wales wartete er länger als jeder andere Thronfolger in der britischen Geschichte, bevor er im Alter von 73 Jahren den Thron bestieg. Er ist bekannt für sein Engagement für Umweltfragen, ökologischen Landbau und Architektur. Seine Krönung fand am 6. Mai 2023 in der Westminster Abbey statt.",
          nl: "Charles III werd geboren op 14 november 1948 in Buckingham Palace. Hij werd koning na de dood van zijn moeder, Koningin Elizabeth II, op 8 september 2022. Als Prins van Wales wachtte hij langer dan enige andere troonopvolger in de Britse geschiedenis voordat hij op 73-jarige leeftijd de troon besteeg. Hij staat bekend om zijn pleidooi voor milieukwesties, biologische landbouw en architectuur. Zijn kroning vond plaats op 6 mei 2023 in Westminster Abbey."
        }
      },
      {
        question: {
          en: "French Impressionist painter Claude Monet was born on November 14 of which year?",
          es: "El pintor impresionista francés Claude Monet nació el 14 de noviembre de qué año?",
          de: "Der französische impressionistische Maler Claude Monet wurde am 14. November welchen Jahres geboren?",
          nl: "De Franse impressionistische schilder Claude Monet werd geboren op 14 november van welk jaar?"
        },
        options: [
          { en: "1830", es: "1830", de: "1830", nl: "1830" },
          { en: "1840", es: "1840", de: "1840", nl: "1840" },
          { en: "1850", es: "1850", de: "1850", nl: "1850" },
          { en: "1860", es: "1860", de: "1860", nl: "1860" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Claude Monet was born on November 14, 1840, in Paris, France. He's considered the founder of French Impressionist painting and is famous for his series paintings of water lilies, haystacks, and Rouen Cathedral. His painting 'Impression, Sunrise' (1872) gave the Impressionist movement its name. Monet spent his later years in Giverny, creating his famous water lily garden, which became the subject of approximately 250 paintings. He died in 1926 at age 86, having profoundly influenced modern art.",
          es: "Claude Monet nació el 14 de noviembre de 1840 en París, Francia. Es considerado el fundador de la pintura impresionista francesa y es famoso por sus series de pinturas de nenúfares, almiares y la Catedral de Rouen. Su pintura 'Impresión, sol naciente' (1872) dio nombre al movimiento impresionista. Monet pasó sus últimos años en Giverny, creando su famoso jardín de nenúfares, que se convirtió en el tema de aproximadamente 250 pinturas. Murió en 1926 a los 86 años, habiendo influido profundamente en el arte moderno.",
          de: "Claude Monet wurde am 14. November 1840 in Paris, Frankreich, geboren. Er gilt als Begründer der französischen impressionistischen Malerei und ist berühmt für seine Serienbilder von Seerosen, Heuhaufen und der Kathedrale von Rouen. Sein Gemälde 'Impression, Sonnenaufgang' (1872) gab der impressionistischen Bewegung ihren Namen. Monet verbrachte seine späteren Jahre in Giverny, wo er seinen berühmten Seerosenteich schuf, der zum Thema von etwa 250 Gemälden wurde. Er starb 1926 im Alter von 86 Jahren, nachdem er die moderne Kunst tiefgreifend beeinflusst hatte.",
          nl: "Claude Monet werd geboren op 14 november 1840 in Parijs, Frankrijk. Hij wordt beschouwd als de grondlegger van de Franse impressionistische schilderkunst en is beroemd om zijn seriële schilderijen van waterlelies, hooibergen en de kathedraal van Rouen. Zijn schilderij 'Impression, zonsopgang' (1872) gaf de impressionistische beweging zijn naam. Monet bracht zijn latere jaren door in Giverny, waar hij zijn beroemde waterlelietuin creëerde, die het onderwerp werd van ongeveer 250 schilderijen. Hij stierf in 1926 op 86-jarige leeftijd en had een diepe invloed op de moderne kunst."
        }
      },
      {
        question: {
          en: "In 'Moby-Dick,' what is the name of the ship commanded by Captain Ahab?",
          es: "En 'Moby-Dick', ¿cuál es el nombre del barco comandado por el Capitán Ahab?",
          de: "Wie heißt in 'Moby-Dick' das Schiff, das von Captain Ahab kommandiert wird?",
          nl: "Hoe heet in 'Moby-Dick' het schip dat wordt gecommandeerd door Kapitein Ahab?"
        },
        options: [
          { en: "The Black Pearl", es: "El Perla Negra", de: "Die Black Pearl", nl: "De Black Pearl" },
          { en: "The HMS Bounty", es: "El HMS Bounty", de: "Die HMS Bounty", nl: "De HMS Bounty" },
          { en: "The Nautilus", es: "El Nautilus", de: "Die Nautilus", nl: "De Nautilus" },
          { en: "The Pequod", es: "El Pequod", de: "Die Pequod", nl: "De Pequod" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Pequod is the whaling ship in 'Moby-Dick' captained by the obsessed Ahab. The ship is named after the Pequot, a Native American tribe of New England. The novel's narrator, Ishmael, joins the crew of the Pequod for a whaling voyage that becomes a deadly quest for revenge against the white whale. The ship and its diverse crew represent a microcosm of society. The Pequod is ultimately destroyed by Moby Dick, with Ishmael as the sole survivor.",
          es: "El Pequod es el barco ballenero en 'Moby-Dick' capitaneado por el obsesionado Ahab. El barco recibe su nombre de los Pequot, una tribu nativa americana de Nueva Inglaterra. El narrador de la novela, Ismael, se une a la tripulación del Pequod para un viaje ballenero que se convierte en una búsqueda mortal de venganza contra la ballena blanca. El barco y su diversa tripulación representan un microcosmos de la sociedad. El Pequod es finalmente destruido por Moby Dick, con Ismael como único sobreviviente.",
          de: "Die Pequod ist das Walfangschiff in 'Moby-Dick', das vom besessenen Ahab befehligt wird. Das Schiff ist nach den Pequot benannt, einem Indianerstamm aus Neuengland. Der Erzähler des Romans, Ismael, schließt sich der Besatzung der Pequod für eine Walfahrt an, die zu einer tödlichen Rachejagd auf den weißen Wal wird. Das Schiff und seine vielfältige Besatzung repräsentieren einen Mikrokosmos der Gesellschaft. Die Pequod wird schließlich von Moby Dick zerstört, wobei Ismael der einzige Überlebende ist.",
          nl: "De Pequod is het walvisvaartuig in 'Moby-Dick' onder commando van de geobsedeerde Ahab. Het schip is vernoemd naar de Pequot, een inheemse Amerikaanse stam uit New England. De verteller van de roman, Ishmael, sluit zich aan bij de bemanning van de Pequod voor een walvisreis die een dodelijke zoektocht naar wraak op de witte walvis wordt. Het schip en zijn diverse bemanning vertegenwoordigen een microkosmos van de samenleving. De Pequod wordt uiteindelijk vernietigd door Moby Dick, met Ishmael als enige overlevende."
        }
      },
      {
        question: {
          en: "What subject matter is Claude Monet most famous for painting in his later years?",
          es: "¿Por qué tema es más famoso Claude Monet por pintar en sus últimos años?",
          de: "Für welches Motiv ist Claude Monet in seinen späteren Jahren am berühmtesten?",
          nl: "Voor welk onderwerp is Claude Monet het meest beroemd om te schilderen in zijn latere jaren?"
        },
        options: [
          { en: "Portraits of royalty", es: "Retratos de la realeza", de: "Porträts der Königsfamilie", nl: "Portretten van koninklijken" },
          { en: "Water lilies", es: "Nenúfares", de: "Seerosen", nl: "Waterlelies" },
          { en: "City streets", es: "Calles de la ciudad", de: "Stadtstraßen", nl: "Stadsstraten" },
          { en: "Mountain landscapes", es: "Paisajes montañosos", de: "Berglandschaften", nl: "Berglandschappen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Monet is most famous for his water lily paintings, created in his garden at Giverny. He painted approximately 250 water lily canvases between 1896 and his death in 1926, many of them large-scale works. These paintings capture the changing light and reflections on his pond at different times of day and seasons. The water lily series represents the culmination of his Impressionist technique and exploration of light, color, and atmosphere. Many of these masterpieces are displayed in museums worldwide, including L'Orangerie in Paris.",
          es: "Monet es más famoso por sus pinturas de nenúfares, creadas en su jardín en Giverny. Pintó aproximadamente 250 lienzos de nenúfares entre 1896 y su muerte en 1926, muchos de ellos obras de gran escala. Estas pinturas capturan la luz cambiante y los reflejos en su estanque en diferentes momentos del día y estaciones. La serie de nenúfares representa la culminación de su técnica impresionista y exploración de la luz, el color y la atmósfera. Muchas de estas obras maestras se exhiben en museos de todo el mundo, incluido L'Orangerie en París.",
          de: "Monet ist am berühmtesten für seine Seerosenbilder, die er in seinem Garten in Giverny schuf. Er malte zwischen 1896 und seinem Tod 1926 etwa 250 Seerosengemälde, viele davon großformatige Werke. Diese Gemälde fangen das wechselnde Licht und die Reflexionen auf seinem Teich zu verschiedenen Tageszeiten und Jahreszeiten ein. Die Seerosenserie repräsentiert den Höhepunkt seiner impressionistischen Technik und Erforschung von Licht, Farbe und Atmosphäre. Viele dieser Meisterwerke werden in Museen weltweit ausgestellt, darunter im L'Orangerie in Paris.",
          nl: "Monet is het meest beroemd om zijn waterlelie-schilderijen, gecreëerd in zijn tuin in Giverny. Hij schilderde tussen 1896 en zijn dood in 1926 ongeveer 250 waterlelie-doeken, waarvan vele grootschalige werken. Deze schilderijen vangen het veranderende licht en reflecties op zijn vijver op verschillende tijdstippen van de dag en seizoenen. De waterlelie-serie vertegenwoordigt het hoogtepunt van zijn impressionistische techniek en verkenning van licht, kleur en sfeer. Veel van deze meesterwerken worden wereldwijd in musea tentoongesteld, waaronder het L'Orangerie in Parijs."
        }
      }
    ],

    // Day 15 - November 15th: Articles of Confederation adopted (1777), Brazil becomes republic (1889), Georgia O'Keeffe born (1887)
    day15: [
      {
        question: {
          en: "The Articles of Confederation, America's first constitution, were adopted by the Continental Congress on November 15 of which year?",
          es: "Los Artículos de la Confederación, la primera constitución de América, fueron adoptados por el Congreso Continental el 15 de noviembre de qué año?",
          de: "Die Konföderationsartikel, Amerikas erste Verfassung, wurden vom Kontinentalkongress am 15. November welchen Jahres angenommen?",
          nl: "De Artikelen van Confederatie, Amerika's eerste grondwet, werden aangenomen door het Continentale Congres op 15 november van welk jaar?"
        },
        options: [
          { en: "1765", es: "1765", de: "1765", nl: "1765" },
          { en: "1777", es: "1777", de: "1777", nl: "1777" },
          { en: "1787", es: "1787", de: "1787", nl: "1787" },
          { en: "1791", es: "1791", de: "1791", nl: "1791" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Articles of Confederation were adopted on November 15, 1777, though ratification by all 13 states wasn't completed until 1781. This first governing document created a loose confederation of sovereign states with a weak central government. The Articles proved inadequate, leading to the Constitutional Convention of 1787, which produced the current U.S. Constitution. Key weaknesses included no power to tax, no executive branch, and no federal court system.",
          es: "Los Artículos de la Confederación fueron adoptados el 15 de noviembre de 1777, aunque la ratificación por los 13 estados no se completó hasta 1781. Este primer documento de gobierno creó una confederación flexible de estados soberanos con un gobierno central débil. Los Artículos resultaron inadecuados, lo que llevó a la Convención Constitucional de 1787, que produjo la Constitución estadounidense actual. Las debilidades clave incluían ningún poder para cobrar impuestos, ningún poder ejecutivo y ningún sistema de tribunales federales.",
          de: "Die Konföderationsartikel wurden am 15. November 1777 angenommen, obwohl die Ratifizierung durch alle 13 Staaten erst 1781 abgeschlossen wurde. Dieses erste Regierungsdokument schuf eine lockere Konföderation souveräner Staaten mit einer schwachen Zentralregierung. Die Artikel erwiesen sich als unzureichend, was zur Verfassungskonvention von 1787 führte, die die aktuelle US-Verfassung hervorbrachte. Zu den wichtigsten Schwächen gehörten keine Steuerbefugnis, keine Exekutive und kein Bundesgerichtssystem.",
          nl: "De Artikelen van Confederatie werden aangenomen op 15 november 1777, hoewel ratificatie door alle 13 staten pas in 1781 werd voltooid. Dit eerste bestuursdocument creëerde een losse confederatie van soevereine staten met een zwakke centrale regering. De Artikelen bleken ontoereikend, wat leidde tot de Grondwetgevende Conventie van 1787, die de huidige Amerikaanse Grondwet voortbracht. Belangrijke zwakke punten waren geen belastingbevoegdheid, geen uitvoerende macht en geen federaal rechtssysteem."
        }
      },
      {
        question: {
          en: "Brazil became a republic on November 15 of which year, ending the monarchy?",
          es: "Brasil se convirtió en una república el 15 de noviembre de qué año, poniendo fin a la monarquía?",
          de: "Brasilien wurde am 15. November welchen Jahres eine Republik und beendete damit die Monarchie?",
          nl: "Brazilië werd een republiek op 15 november van welk jaar, waarmee een einde kwam aan de monarchie?"
        },
        options: [
          { en: "1822", es: "1822", de: "1822", nl: "1822" },
          { en: "1865", es: "1865", de: "1865", nl: "1865" },
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1901", es: "1901", de: "1901", nl: "1901" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Brazil became a republic on November 15, 1889, through a military coup that overthrew Emperor Pedro II. The proclamation of the republic ended 67 years of the Brazilian Empire and nearly 400 years of Portuguese monarchy in Brazil. Marshal Deodoro da Fonseca became the first president. November 15 is celebrated annually as Proclamation of the Republic Day, a national holiday in Brazil. The transition was relatively peaceful, and Pedro II went into exile in Europe.",
          es: "Brasil se convirtió en una república el 15 de noviembre de 1889, a través de un golpe militar que derrocó al Emperador Pedro II. La proclamación de la república puso fin a 67 años del Imperio Brasileño y casi 400 años de monarquía portuguesa en Brasil. El Mariscal Deodoro da Fonseca se convirtió en el primer presidente. El 15 de noviembre se celebra anualmente como el Día de la Proclamación de la República, un día festivo nacional en Brasil. La transición fue relativamente pacífica, y Pedro II se exilió en Europa.",
          de: "Brasilien wurde am 15. November 1889 durch einen Militärputsch zur Republik, der Kaiser Pedro II. stürzte. Die Ausrufung der Republik beendete 67 Jahre des brasilianischen Kaiserreichs und fast 400 Jahre portugiesischer Monarchie in Brasilien. Marschall Deodoro da Fonseca wurde der erste Präsident. Der 15. November wird jährlich als Tag der Ausrufung der Republik gefeiert, ein Nationalfeiertag in Brasilien. Der Übergang verlief relativ friedlich, und Pedro II. ging ins Exil nach Europa.",
          nl: "Brazilië werd een republiek op 15 november 1889, door een militaire staatsgreep die keizer Pedro II afzette. De proclamatie van de republiek maakte een einde aan 67 jaar van het Braziliaanse Keizerrijk en bijna 400 jaar Portugese monarchie in Brazilië. Maarschalk Deodoro da Fonseca werd de eerste president. 15 november wordt jaarlijks gevierd als de Dag van de Proclamatie van de Republiek, een nationale feestdag in Brazilië. De overgang verliep relatief vreedzaam en Pedro II ging in ballingschap naar Europa."
        }
      },
      {
        question: {
          en: "American modernist artist Georgia O'Keeffe, famous for her flower paintings, was born on November 15 of which year?",
          es: "La artista modernista estadounidense Georgia O'Keeffe, famosa por sus pinturas de flores, nació el 15 de noviembre de qué año?",
          de: "Die amerikanische modernistische Künstlerin Georgia O'Keeffe, berühmt für ihre Blumengemälde, wurde am 15. November welchen Jahres geboren?",
          nl: "De Amerikaanse modernistische kunstenares Georgia O'Keeffe, beroemd om haar bloemschilderijen, werd geboren op 15 november van welk jaar?"
        },
        options: [
          { en: "1875", es: "1875", de: "1875", nl: "1875" },
          { en: "1887", es: "1887", de: "1887", nl: "1887" },
          { en: "1895", es: "1895", de: "1895", nl: "1895" },
          { en: "1903", es: "1903", de: "1903", nl: "1903" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Georgia O'Keeffe was born on November 15, 1887, near Sun Prairie, Wisconsin. She became one of America's most significant artists, known for her large-scale flower paintings, New York skyscrapers, and New Mexico landscapes. O'Keeffe is often called the 'Mother of American Modernism.' She lived to be 98 years old, spending her later years in New Mexico, where the dramatic desert landscape inspired much of her work. Her paintings now command millions of dollars at auction.",
          es: "Georgia O'Keeffe nació el 15 de noviembre de 1887, cerca de Sun Prairie, Wisconsin. Se convirtió en una de las artistas más importantes de Estados Unidos, conocida por sus pinturas de flores a gran escala, rascacielos de Nueva York y paisajes de Nuevo México. O'Keeffe es a menudo llamada la 'Madre del Modernismo Americano'. Vivió hasta los 98 años, pasando sus últimos años en Nuevo México, donde el dramático paisaje desértico inspiró gran parte de su trabajo. Sus pinturas ahora alcanzan millones de dólares en subasta.",
          de: "Georgia O'Keeffe wurde am 15. November 1887 in der Nähe von Sun Prairie, Wisconsin, geboren. Sie wurde zu einer der bedeutendsten Künstlerinnen Amerikas, bekannt für ihre großformatigen Blumengemälde, New Yorker Wolkenkratzer und New-Mexico-Landschaften. O'Keeffe wird oft als 'Mutter der amerikanischen Moderne' bezeichnet. Sie wurde 98 Jahre alt und verbrachte ihre späteren Jahre in New Mexico, wo die dramatische Wüstenlandschaft einen Großteil ihrer Arbeit inspirierte. Ihre Gemälde erzielen heute Millionen von Dollar bei Auktionen.",
          nl: "Georgia O'Keeffe werd geboren op 15 november 1887, in de buurt van Sun Prairie, Wisconsin. Ze werd een van Amerika's belangrijkste kunstenaars, bekend om haar grootschalige bloemschilderijen, wolkenkrabbers in New York en landschappen van New Mexico. O'Keeffe wordt vaak de 'Moeder van het Amerikaanse Modernisme' genoemd. Ze werd 98 jaar oud en bracht haar latere jaren door in New Mexico, waar het dramatische woestijnlandschap veel van haar werk inspireerde. Haar schilderijen brengen nu miljoenen dollars op bij veilingen."
        }
      },
      {
        question: {
          en: "What major weakness of the Articles of Confederation led to its replacement?",
          es: "¿Qué debilidad importante de los Artículos de la Confederación llevó a su reemplazo?",
          de: "Welche wichtige Schwäche der Konföderationsartikel führte zu ihrer Ablösung?",
          nl: "Welke belangrijke zwakte van de Artikelen van Confederatie leidde tot vervanging?"
        },
        options: [
          { en: "Too much federal power", es: "Demasiado poder federal", de: "Zu viel Bundesmacht", nl: "Te veel federale macht" },
          { en: "No power to tax or raise armies", es: "Sin poder para cobrar impuestos o reclutar ejércitos", de: "Keine Befugnis zu besteuern oder Armeen aufzustellen", nl: "Geen bevoegdheid om belasting te heffen of legers op te richten" },
          { en: "Too strong a presidency", es: "Una presidencia demasiado fuerte", de: "Eine zu starke Präsidentschaft", nl: "Een te sterke presidenten" },
          { en: "Unfair representation", es: "Representación injusta", de: "Unfaire Vertretung", nl: "Oneerlijke vertegenwoordiging" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Articles of Confederation created a weak central government that lacked the power to tax, regulate commerce, or raise armies. Each state retained its sovereignty, and unanimous consent was required for amendments. The federal government couldn't enforce laws or collect debts, leading to economic chaos and inability to defend the nation. These weaknesses became apparent during Shays' Rebellion (1786-1787), prompting the Constitutional Convention that drafted the stronger U.S. Constitution.",
          es: "Los Artículos de la Confederación crearon un gobierno central débil que carecía del poder para cobrar impuestos, regular el comercio o reclutar ejércitos. Cada estado retenía su soberanía, y se requería el consentimiento unánime para las enmiendas. El gobierno federal no podía hacer cumplir las leyes ni cobrar deudas, lo que llevó al caos económico y la incapacidad para defender la nación. Estas debilidades se hicieron evidentes durante la Rebelión de Shays (1786-1787), lo que impulsó la Convención Constitucional que redactó la Constitución de EE.UU. más fuerte.",
          de: "Die Konföderationsartikel schufen eine schwache Zentralregierung, die keine Befugnis hatte, Steuern zu erheben, Handel zu regulieren oder Armeen aufzustellen. Jeder Staat behielt seine Souveränität, und für Änderungen war einstimmige Zustimmung erforderlich. Die Bundesregierung konnte keine Gesetze durchsetzen oder Schulden einziehen, was zu wirtschaftlichem Chaos und Unfähigkeit führte, die Nation zu verteidigen. Diese Schwächen wurden während der Shays-Rebellion (1786-1787) offensichtlich und führten zur Verfassungskonvention, die die stärkere US-Verfassung entwarf.",
          nl: "De Artikelen van Confederatie creëerden een zwakke centrale regering die geen bevoegdheid had om belasting te heffen, handel te reguleren of legers op te richten. Elke staat behield zijn soevereiniteit en voor amendementen was unanime instemming vereist. De federale regering kon geen wetten handhaven of schulden innen, wat leidde tot economische chaos en het onvermogen om de natie te verdedigen. Deze zwaktes werden duidelijk tijdens Shays' Opstand (1786-1787), wat leidde tot de Grondwettelijke Conventie die de sterkere Amerikaanse Grondwet opstelde."
        }
      },
      {
        question: {
          en: "What subject matter is Georgia O'Keeffe most famous for painting?",
          es: "¿Por qué tema es más famosa Georgia O'Keeffe por pintar?",
          de: "Für welches Motiv ist Georgia O'Keeffe am berühmtesten?",
          nl: "Voor welk onderwerp is Georgia O'Keeffe het meest beroemd om te schilderen?"
        },
        options: [
          { en: "Abstract geometric shapes", es: "Formas geométricas abstractas", de: "Abstrakte geometrische Formen", nl: "Abstracte geometrische vormen" },
          { en: "Historical battle scenes", es: "Escenas de batallas históricas", de: "Historische Kampfszenen", nl: "Historische strijdtaferelen" },
          { en: "Large-scale flowers", es: "Flores a gran escala", de: "Großformatige Blumen", nl: "Grootschalige bloemen" },
          { en: "Portrait miniatures", es: "Miniaturas de retratos", de: "Porträt-Miniaturen", nl: "Portretminiaturen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Georgia O'Keeffe is most famous for her large-scale, close-up flower paintings that dominated American modernism. Her magnified blooms, such as irises, calla lilies, and jimson weed, are instantly recognizable. O'Keeffe wanted viewers to take time to really see flowers as she saw them. She also painted New Mexico landscapes, animal skulls, and architectural subjects. Her bold use of color and form made her a pioneering figure in American modern art.",
          es: "Georgia O'Keeffe es más famosa por sus pinturas de flores a gran escala y en primer plano que dominaron el modernismo estadounidense. Sus flores magnificadas, como iris, calas y estramonio, son instantáneamente reconocibles. O'Keeffe quería que los espectadores se tomaran el tiempo para realmente ver las flores como ella las veía. También pintó paisajes de Nuevo México, calaveras de animales y temas arquitectónicos. Su uso audaz del color y la forma la convirtió en una figura pionera del arte moderno estadounidense.",
          de: "Georgia O'Keeffe ist am berühmtesten für ihre großformatigen Nahaufnahmen von Blumen, die die amerikanische Moderne dominierten. Ihre vergrößerten Blüten, wie Schwertlilien, Calla-Lilien und Stechapfel, sind sofort erkennbar. O'Keeffe wollte, dass die Betrachter sich Zeit nehmen, um Blumen wirklich so zu sehen, wie sie sie sah. Sie malte auch New-Mexico-Landschaften, Tierschädel und architektonische Motive. Ihr mutiger Einsatz von Farbe und Form machte sie zu einer Pionierin der amerikanischen modernen Kunst.",
          nl: "Georgia O'Keeffe is het meest beroemd om haar grootschalige close-up bloemschilderijen die het Amerikaanse modernisme domineerden. Haar vergrote bloemen, zoals irissen, calla lelies en doornappel, zijn onmiddellijk herkenbaar. O'Keeffe wilde dat kijkers de tijd namen om bloemen echt te zien zoals zij ze zag. Ze schilderde ook New Mexico-landschappen, dierenschedels en architectonische onderwerpen. Haar gedurfde gebruik van kleur en vorm maakte haar een baanbrekende figuur in de Amerikaanse moderne kunst."
        }
      }
    ],

    // Day 16 - November 16th: Oklahoma Statehood (1907), UNESCO established (1945), International Day of Tolerance
    day16: [
      {
        question: {
          en: "Oklahoma became the 46th U.S. state on November 16 of which year?",
          es: "Oklahoma se convirtió en el estado número 46 de EE.UU. el 16 de noviembre de qué año?",
          de: "Oklahoma wurde am 16. November welchen Jahres der 46. US-Bundesstaat?",
          nl: "Oklahoma werd op 16 november van welk jaar de 46e Amerikaanse staat?"
        },
        options: [
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1907", es: "1907", de: "1907", nl: "1907" },
          { en: "1912", es: "1912", de: "1912", nl: "1912" },
          { en: "1896", es: "1896", de: "1896", nl: "1896" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Oklahoma became the 46th U.S. state on November 16, 1907, after previously being known as Indian Territory. The state's name comes from the Choctaw words 'okla' meaning people and 'humma' meaning red. Oklahoma was formed by merging Oklahoma Territory and Indian Territory, making it the only state formed from two territories. Charles N. Haskell became the state's first governor. The state capital is Oklahoma City.",
          es: "Oklahoma se convirtió en el estado número 46 de EE.UU. el 16 de noviembre de 1907, después de ser conocido anteriormente como Territorio Indio. El nombre del estado proviene de las palabras choctaw 'okla' que significa gente y 'humma' que significa rojo. Oklahoma se formó fusionando el Territorio de Oklahoma y el Territorio Indio, convirtiéndose en el único estado formado por dos territorios. Charles N. Haskell se convirtió en el primer gobernador del estado. La capital del estado es Oklahoma City.",
          de: "Oklahoma wurde am 16. November 1907 der 46. US-Bundesstaat, nachdem es zuvor als Indianerterritorium bekannt war. Der Name des Staates stammt von den Choctaw-Wörtern 'okla' für Menschen und 'humma' für rot. Oklahoma wurde durch die Zusammenlegung des Oklahoma-Territoriums und des Indianer-Territoriums gebildet und ist damit der einzige Staat, der aus zwei Territorien gebildet wurde. Charles N. Haskell wurde der erste Gouverneur des Staates. Die Hauptstadt des Staates ist Oklahoma City.",
          nl: "Oklahoma werd op 16 november 1907 de 46e Amerikaanse staat, nadat het eerder bekend stond als Indiaans Territorium. De naam van de staat komt van de Choctaw-woorden 'okla' wat mensen betekent en 'humma' wat rood betekent. Oklahoma werd gevormd door het samenvoegen van Oklahoma Territory en Indian Territory, waarmee het de enige staat is die uit twee territoria is gevormd. Charles N. Haskell werd de eerste gouverneur van de staat. De hoofdstad van de staat is Oklahoma City."
        }
      },
      {
        question: {
          en: "UNESCO (United Nations Educational, Scientific and Cultural Organization) was established on November 16 of which year?",
          es: "UNESCO (Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura) fue establecida el 16 de noviembre de qué año?",
          de: "UNESCO (Organisation der Vereinten Nationen für Erziehung, Wissenschaft und Kultur) wurde am 16. November welchen Jahres gegründet?",
          nl: "UNESCO (Organisatie van de Verenigde Naties voor Onderwijs, Wetenschap en Cultuur) werd opgericht op 16 november van welk jaar?"
        },
        options: [
          { en: "1938", es: "1938", de: "1938", nl: "1938" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1952", es: "1952", de: "1952", nl: "1952" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" }
        ],
        correctIndex: 1,
        explanation: {
          en: "UNESCO was established on November 16, 1945, shortly after World War II. Its mission is to contribute to peace and security by promoting international collaboration through education, science, and culture. UNESCO is famous for designating World Heritage Sites, protecting cultural heritage, promoting literacy, and supporting freedom of expression. The organization's headquarters are in Paris, France. UNESCO has designated over 1,100 World Heritage Sites worldwide, including natural wonders and cultural landmarks.",
          es: "UNESCO fue establecida el 16 de noviembre de 1945, poco después de la Segunda Guerra Mundial. Su misión es contribuir a la paz y la seguridad promoviendo la colaboración internacional a través de la educación, la ciencia y la cultura. UNESCO es famosa por designar Sitios del Patrimonio Mundial, proteger el patrimonio cultural, promover la alfabetización y apoyar la libertad de expresión. La sede de la organización está en París, Francia. UNESCO ha designado más de 1,100 Sitios del Patrimonio Mundial en todo el mundo, incluidas maravillas naturales y lugares culturales.",
          de: "UNESCO wurde am 16. November 1945, kurz nach dem Zweiten Weltkrieg, gegründet. Ihre Mission ist es, durch Förderung der internationalen Zusammenarbeit in Bildung, Wissenschaft und Kultur zu Frieden und Sicherheit beizutragen. UNESCO ist bekannt für die Ausweisung von Welterbestätten, den Schutz des kulturellen Erbes, die Förderung der Alphabetisierung und die Unterstützung der Meinungsfreiheit. Der Hauptsitz der Organisation befindet sich in Paris, Frankreich. UNESCO hat weltweit über 1.100 Welterbestätten ausgewiesen, darunter Naturwunder und kulturelle Sehenswürdigkeiten.",
          nl: "UNESCO werd opgericht op 16 november 1945, kort na de Tweede Wereldoorlog. Haar missie is bij te dragen aan vrede en veiligheid door internationale samenwerking te bevorderen via onderwijs, wetenschap en cultuur. UNESCO staat bekend om het aanwijzen van Werelderfgoedlocaties, het beschermen van cultureel erfgoed, het bevorderen van alfabetisering en het ondersteunen van vrijheid van meningsuiting. Het hoofdkantoor van de organisatie is in Parijs, Frankrijk. UNESCO heeft wereldwijd meer dan 1.100 Werelderfgoedlocaties aangewezen, waaronder natuurwonderen en culturele monumenten."
        }
      },
      {
        question: {
          en: "What is the International Day for Tolerance observed on November 16 designed to promote?",
          es: "¿Qué está diseñado para promover el Día Internacional para la Tolerancia observado el 16 de noviembre?",
          de: "Was soll der Internationale Tag für Toleranz am 16. November fördern?",
          nl: "Wat is de Internationale Dag voor Tolerantie op 16 november bedoeld om te bevorderen?"
        },
        options: [
          { en: "Understanding and respect among cultures", es: "Comprensión y respeto entre culturas", de: "Verständnis und Respekt zwischen Kulturen", nl: "Begrip en respect tussen culturen" },
          { en: "Sports rivalry", es: "Rivalidad deportiva", de: "Sportrivalität", nl: "Sportieve rivaliteit" },
          { en: "Military alliances", es: "Alianzas militares", de: "Militärbündnisse", nl: "Militaire allianties" },
          { en: "Economic competition", es: "Competencia económica", de: "Wirtschaftlicher Wettbewerb", nl: "Economische concurrentie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The International Day for Tolerance, proclaimed by the United Nations in 1995, is observed annually on November 16. This day aims to promote mutual understanding, respect, and appreciation of the rich diversity of cultures, forms of expression, and ways of being human. It emphasizes that tolerance is not mere indifference but active appreciation of others. The day coincides with UNESCO's establishment date, reflecting the organization's commitment to fostering intercultural dialogue and understanding.",
          es: "El Día Internacional para la Tolerancia, proclamado por las Naciones Unidas en 1995, se observa anualmente el 16 de noviembre. Este día tiene como objetivo promover la comprensión mutua, el respeto y la apreciación de la rica diversidad de culturas, formas de expresión y formas de ser humano. Enfatiza que la tolerancia no es mera indiferencia sino apreciación activa de los demás. El día coincide con la fecha de establecimiento de UNESCO, reflejando el compromiso de la organización de fomentar el diálogo y la comprensión intercultural.",
          de: "Der Internationale Tag der Toleranz, der 1995 von den Vereinten Nationen proklamiert wurde, wird jährlich am 16. November begangen. Dieser Tag zielt darauf ab, gegenseitiges Verständnis, Respekt und Wertschätzung für die reiche Vielfalt der Kulturen, Ausdrucksformen und Arten des Menschseins zu fördern. Er betont, dass Toleranz nicht bloße Gleichgültigkeit ist, sondern aktive Wertschätzung anderer. Der Tag fällt mit dem Gründungsdatum der UNESCO zusammen und spiegelt das Engagement der Organisation für die Förderung des interkulturellen Dialogs und Verständnisses wider.",
          nl: "De Internationale Dag voor Tolerantie, uitgeroepen door de Verenigde Naties in 1995, wordt jaarlijks gevierd op 16 november. Deze dag heeft als doel wederzijds begrip, respect en waardering voor de rijke diversiteit aan culturen, uitdrukkingsvormen en manieren van mens-zijn te bevorderen. Het benadrukt dat tolerantie niet slechts onverschilligheid is, maar actieve waardering voor anderen. De dag valt samen met de oprichtingsdatum van UNESCO, wat de betrokkenheid van de organisatie bij het bevorderen van interculturele dialoog en begrip weerspiegelt."
        }
      },
      {
        question: {
          en: "What was the primary reason for the creation of Oklahoma as a state?",
          es: "¿Cuál fue la razón principal para la creación de Oklahoma como estado?",
          de: "Was war der Hauptgrund für die Gründung von Oklahoma als Staat?",
          nl: "Wat was de belangrijkste reden voor de oprichting van Oklahoma als staat?"
        },
        options: [
          { en: "To organize territories after westward expansion", es: "Para organizar territorios después de la expansión hacia el oeste", de: "Um Territorien nach der Westexpansion zu organisieren", nl: "Om territoria te organiseren na westwaartse expansie" },
          { en: "To establish a national park", es: "Para establecer un parque nacional", de: "Um einen Nationalpark einzurichten", nl: "Om een nationaal park op te richten" },
          { en: "To create a military base", es: "Para crear una base militar", de: "Um eine Militärbasis zu schaffen", nl: "Om een militaire basis te creëren" },
          { en: "To build a new capital", es: "Para construir una nueva capital", de: "Um eine neue Hauptstadt zu bauen", nl: "Om een nieuwe hoofdstad te bouwen" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Oklahoma statehood resulted from the organization of western territories following American expansion. The region was initially designated as Indian Territory, where many Native American tribes were forcibly relocated during the Trail of Tears. The land runs of the late 1800s opened the territory to white settlement. By 1907, the population had grown sufficiently to warrant statehood, merging both Oklahoma Territory and Indian Territory into a single state. This history makes Oklahoma unique in having a significant Native American population and cultural influence.",
          es: "La estadidad de Oklahoma resultó de la organización de territorios occidentales después de la expansión estadounidense. La región fue inicialmente designada como Territorio Indio, donde muchas tribus nativas americanas fueron reubicadas por la fuerza durante el Camino de las Lágrimas. Las carreras de tierras de finales de 1800 abrieron el territorio al asentamiento blanco. Para 1907, la población había crecido lo suficiente como para justificar la estadidad, fusionando tanto el Territorio de Oklahoma como el Territorio Indio en un solo estado. Esta historia hace que Oklahoma sea único al tener una población e influencia cultural nativa americana significativa.",
          de: "Die Eigenstaatlichkeit von Oklahoma resultierte aus der Organisation westlicher Territorien nach der amerikanischen Expansion. Die Region wurde zunächst als Indianerterritorium ausgewiesen, wohin viele Indianerstämme während des Pfades der Tränen zwangsweise umgesiedelt wurden. Die Landläufe der späten 1800er Jahre öffneten das Territorium für weiße Siedler. Bis 1907 war die Bevölkerung ausreichend gewachsen, um die Eigenstaatlichkeit zu rechtfertigen, wobei sowohl das Oklahoma-Territorium als auch das Indianer-Territorium zu einem einzigen Staat verschmolzen wurden. Diese Geschichte macht Oklahoma einzigartig, da es eine bedeutende indianische Bevölkerung und kulturellen Einfluss hat.",
          nl: "De staatswording van Oklahoma was het resultaat van de organisatie van westelijke territoria na Amerikaanse expansie. De regio werd aanvankelijk aangewezen als Indiaans Territorium, waar veel Inheemse Amerikaanse stammen gedwongen werden verplaatst tijdens de Trail of Tears. De landrennen van de late jaren 1800 openden het territorium voor blanke kolonisatie. Tegen 1907 was de bevolking voldoende gegroeid om staatswording te rechtvaardigen, waarbij zowel Oklahoma Territory als Indian Territory werden samengevoegd tot één enkele staat. Deze geschiedenis maakt Oklahoma uniek omdat het een aanzienlijke Inheemse Amerikaanse bevolking en culturele invloed heeft."
        }
      },
      {
        question: {
          en: "What major global conflict had just ended when UNESCO was founded in 1945?",
          es: "¿Qué gran conflicto global acababa de terminar cuando se fundó UNESCO en 1945?",
          de: "Welcher große globale Konflikt war gerade beendet, als UNESCO 1945 gegründet wurde?",
          nl: "Welk groot wereldwijd conflict was net geëindigd toen UNESCO in 1945 werd opgericht?"
        },
        options: [
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
          { en: "Korean War", es: "Guerra de Corea", de: "Koreakrieg", nl: "Koreaanse Oorlog" },
          { en: "World War II", es: "Segunda Guerra Mundial", de: "Zweiter Weltkrieg", nl: "Tweede Wereldoorlog" },
          { en: "Vietnam War", es: "Guerra de Vietnam", de: "Vietnamkrieg", nl: "Vietnamoorlog" }
        ],
        correctIndex: 2,
        explanation: {
          en: "World War II ended in 1945, and UNESCO was founded in November of that same year. The devastation of the war, which included widespread destruction of cultural heritage and the loss of millions of lives, motivated world leaders to create an organization dedicated to promoting peace through international cooperation in education, science, and culture. UNESCO's founding principle is that 'since wars begin in the minds of men, it is in the minds of men that the defenses of peace must be constructed.' The organization aimed to prevent future conflicts by fostering understanding among nations.",
          es: "La Segunda Guerra Mundial terminó en 1945, y UNESCO fue fundada en noviembre de ese mismo año. La devastación de la guerra, que incluyó la destrucción generalizada del patrimonio cultural y la pérdida de millones de vidas, motivó a los líderes mundiales a crear una organización dedicada a promover la paz a través de la cooperación internacional en educación, ciencia y cultura. El principio fundador de UNESCO es que 'dado que las guerras comienzan en la mente de los hombres, es en la mente de los hombres donde deben construirse las defensas de la paz'. La organización tenía como objetivo prevenir conflictos futuros fomentando la comprensión entre las naciones.",
          de: "Der Zweite Weltkrieg endete 1945, und UNESCO wurde im November desselben Jahres gegründet. Die Verwüstung des Krieges, die weit verbreitete Zerstörung des kulturellen Erbes und den Verlust von Millionen von Menschenleben umfasste, motivierte Weltführer, eine Organisation zu schaffen, die sich der Förderung des Friedens durch internationale Zusammenarbeit in Bildung, Wissenschaft und Kultur widmet. UNESCOs Gründungsprinzip lautet: 'Da Kriege im Geist der Menschen beginnen, müssen die Verteidigungen des Friedens im Geist der Menschen errichtet werden.' Die Organisation zielte darauf ab, zukünftige Konflikte zu verhindern, indem sie das Verständnis zwischen den Nationen fördert.",
          nl: "De Tweede Wereldoorlog eindigde in 1945, en UNESCO werd in november van datzelfde jaar opgericht. De verwoesting van de oorlog, die wijdverspreide vernietiging van cultureel erfgoed en het verlies van miljoenen levens omvatte, motiveerde wereldleiders om een organisatie op te richten die zich wijdde aan het bevorderen van vrede door internationale samenwerking op het gebied van onderwijs, wetenschap en cultuur. UNESCO's grondbeginsel is dat 'aangezien oorlogen beginnen in de geest van mensen, het in de geest van mensen is dat de verdediging van vrede moet worden gebouwd.' De organisatie had als doel toekomstige conflicten te voorkomen door begrip tussen naties te bevorderen."
        }
      }
    ],

    // Day 17 - November 17th: Suez Canal opens (1869), Queen Elizabeth II & Prince Philip wedding (1947), Danny DeVito born (1944)
    day17: [
      {
        question: {
          en: "The Suez Canal, connecting the Mediterranean Sea to the Red Sea, officially opened on November 17 of which year?",
          es: "El Canal de Suez, que conecta el Mar Mediterráneo con el Mar Rojo, se abrió oficialmente el 17 de noviembre de qué año?",
          de: "Der Suezkanal, der das Mittelmeer mit dem Roten Meer verbindet, wurde am 17. November welchen Jahres offiziell eröffnet?",
          nl: "Het Suezkanaal, dat de Middellandse Zee verbindt met de Rode Zee, werd officieel geopend op 17 november van welk jaar?"
        },
        options: [
          { en: "1845", es: "1845", de: "1845", nl: "1845" },
          { en: "1869", es: "1869", de: "1869", nl: "1869" },
          { en: "1882", es: "1882", de: "1882", nl: "1882" },
          { en: "1901", es: "1901", de: "1901", nl: "1901" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Suez Canal opened on November 17, 1869, after ten years of construction led by French engineer Ferdinand de Lesseps. The 120-mile (193 km) canal revolutionized global trade by eliminating the need for ships to sail around Africa. It reduced the sea voyage between Europe and Asia by approximately 7,000 kilometers. The canal remains one of the world's most strategically important waterways, with thousands of ships passing through annually. The canal has been the center of international conflicts, including the 1956 Suez Crisis.",
          es: "El Canal de Suez se abrió el 17 de noviembre de 1869, después de diez años de construcción dirigida por el ingeniero francés Ferdinand de Lesseps. El canal de 120 millas (193 km) revolucionó el comercio global al eliminar la necesidad de que los barcos navegaran alrededor de África. Redujo el viaje marítimo entre Europa y Asia en aproximadamente 7,000 kilómetros. El canal sigue siendo una de las vías fluviales más estratégicamente importantes del mundo, con miles de barcos que pasan anualmente. El canal ha sido el centro de conflictos internacionales, incluida la Crisis de Suez de 1956.",
          de: "Der Suezkanal wurde am 17. November 1869 nach zehnjähriger Bauzeit unter Leitung des französischen Ingenieurs Ferdinand de Lesseps eröffnet. Der 120 Meilen (193 km) lange Kanal revolutionierte den Welthandel, indem er die Notwendigkeit beseitigte, dass Schiffe um Afrika segeln mussten. Er verkürzte die Seereise zwischen Europa und Asien um etwa 7.000 Kilometer. Der Kanal bleibt einer der strategisch wichtigsten Wasserwege der Welt, durch den jährlich Tausende von Schiffen fahren. Der Kanal war Zentrum internationaler Konflikte, einschließlich der Suez-Krise von 1956.",
          nl: "Het Suezkanaal werd geopend op 17 november 1869, na tien jaar bouwen onder leiding van de Franse ingenieur Ferdinand de Lesseps. Het 120 mijl (193 km) lange kanaal revolutioneerde de wereldhandel door de noodzaak te elimineren dat schepen rond Afrika moesten varen. Het verkortte de zeereis tussen Europa en Azië met ongeveer 7.000 kilometer. Het kanaal blijft een van 's werelds strategisch belangrijkste waterwegen, met duizenden schepen die er jaarlijks doorheen varen. Het kanaal is het centrum geweest van internationale conflicten, waaronder de Suezcrisis van 1956."
        }
      },
      {
        question: {
          en: "Queen Elizabeth II married Prince Philip on November 17 of which year?",
          es: "La Reina Isabel II se casó con el Príncipe Felipe el 17 de noviembre de qué año?",
          de: "Königin Elizabeth II. heiratete Prinz Philip am 17. November welchen Jahres?",
          nl: "Koningin Elizabeth II trouwde met Prins Philip op 17 november van welk jaar?"
        },
        options: [
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1947", es: "1947", de: "1947", nl: "1947" },
          { en: "1952", es: "1952", de: "1952", nl: "1952" },
          { en: "1955", es: "1955", de: "1955", nl: "1955" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Queen Elizabeth II married Prince Philip on November 17, 1947, at Westminster Abbey in London. The wedding took place during Britain's post-World War II austerity period, but it was a magnificent ceremony that lifted the nation's spirits. Elizabeth was still a princess at the time; she would become queen in 1952. The couple's marriage lasted 73 years until Prince Philip's death in 2021, making it the longest marriage of any British monarch. They had four children: Charles, Anne, Andrew, and Edward.",
          es: "La Reina Isabel II se casó con el Príncipe Felipe el 17 de noviembre de 1947, en la Abadía de Westminster en Londres. La boda tuvo lugar durante el período de austeridad posterior a la Segunda Guerra Mundial de Gran Bretaña, pero fue una ceremonia magnífica que levantó el ánimo de la nación. Isabel aún era princesa en ese momento; se convertiría en reina en 1952. El matrimonio de la pareja duró 73 años hasta la muerte del Príncipe Felipe en 2021, convirtiéndolo en el matrimonio más largo de cualquier monarca británico. Tuvieron cuatro hijos: Carlos, Ana, Andrés y Eduardo.",
          de: "Königin Elizabeth II. heiratete Prinz Philip am 17. November 1947 in der Westminster Abbey in London. Die Hochzeit fand während Großbritanniens Nachkriegs-Sparperiode statt, war aber eine prächtige Zeremonie, die die Stimmung der Nation hob. Elizabeth war zu dieser Zeit noch Prinzessin; sie würde 1952 Königin werden. Die Ehe des Paares dauerte 73 Jahre bis zum Tod von Prinz Philip im Jahr 2021 und war damit die längste Ehe eines britischen Monarchen. Sie hatten vier Kinder: Charles, Anne, Andrew und Edward.",
          nl: "Koningin Elizabeth II trouwde met Prins Philip op 17 november 1947 in Westminster Abbey in Londen. Het huwelijk vond plaats tijdens Groot-Brittannië's naoorlogse bezuinigingsperiode, maar het was een prachtige ceremonie die de stemming van de natie verbeterde. Elizabeth was op dat moment nog prinses; ze zou koningin worden in 1952. Het huwelijk van het paar duurde 73 jaar tot de dood van Prins Philip in 2021, waarmee het het langste huwelijk van een Britse monarch werd. Ze kregen vier kinderen: Charles, Anne, Andrew en Edward."
        }
      },
      {
        question: {
          en: "Actor Danny DeVito, known for his distinctive stature and comedic roles, was born on November 17 of which year?",
          es: "El actor Danny DeVito, conocido por su estatura distintiva y papeles cómicos, nació el 17 de noviembre de qué año?",
          de: "Schauspieler Danny DeVito, bekannt für seine markante Statur und komödiantischen Rollen, wurde am 17. November welchen Jahres geboren?",
          nl: "Acteur Danny DeVito, bekend om zijn kenmerkende gestalte en komische rollen, werd geboren op 17 november van welk jaar?"
        },
        options: [
          { en: "1938", es: "1938", de: "1938", nl: "1938" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1951", es: "1951", de: "1951", nl: "1951" },
          { en: "1956", es: "1956", de: "1956", nl: "1956" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Danny DeVito was born on November 17, 1944, in Neptune Township, New Jersey. He became famous for his role as Louie De Palma in the TV series 'Taxi' (1978-1983), winning an Emmy and a Golden Globe. His distinctive 4'10\" stature, the result of a rare genetic disorder called Fairbank's disease, has never limited his career. DeVito has starred in numerous films including 'Batman Returns,' 'Twins,' 'Matilda' (which he also directed), and the TV series 'It's Always Sunny in Philadelphia.' He's also a successful producer and director.",
          es: "Danny DeVito nació el 17 de noviembre de 1944, en Neptune Township, Nueva Jersey. Se hizo famoso por su papel como Louie De Palma en la serie de televisión 'Taxi' (1978-1983), ganando un Emmy y un Globo de Oro. Su distintiva estatura de 4'10\", resultado de un trastorno genético raro llamado enfermedad de Fairbank, nunca ha limitado su carrera. DeVito ha protagonizado numerosas películas incluyendo 'Batman Returns,' 'Twins,' 'Matilda' (que también dirigió), y la serie de televisión 'It's Always Sunny in Philadelphia.' También es un exitoso productor y director.",
          de: "Danny DeVito wurde am 17. November 1944 in Neptune Township, New Jersey, geboren. Er wurde berühmt durch seine Rolle als Louie De Palma in der TV-Serie 'Taxi' (1978-1983), für die er einen Emmy und einen Golden Globe gewann. Seine markante Größe von 1,47 m, die Folge einer seltenen genetischen Störung namens Fairbank-Krankheit ist, hat seine Karriere nie eingeschränkt. DeVito spielte in zahlreichen Filmen mit, darunter 'Batmans Rückkehr,' 'Twins,' 'Matilda' (das er auch inszenierte) und die TV-Serie 'It's Always Sunny in Philadelphia.' Er ist auch ein erfolgreicher Produzent und Regisseur.",
          nl: "Danny DeVito werd geboren op 17 november 1944 in Neptune Township, New Jersey. Hij werd beroemd door zijn rol als Louie De Palma in de tv-serie 'Taxi' (1978-1983), waarmee hij een Emmy en een Golden Globe won. Zijn kenmerkende lengte van 1,47 meter, het gevolg van een zeldzame genetische aandoening genaamd Fairbank-ziekte, heeft zijn carrière nooit beperkt. DeVito heeft in talrijke films gespeeld, waaronder 'Batman Returns,' 'Twins,' 'Matilda' (die hij ook regisseerde), en de tv-serie 'It's Always Sunny in Philadelphia.' Hij is ook een succesvol producent en regisseur."
        }
      },
      {
        question: {
          en: "What two major bodies of water does the Suez Canal connect?",
          es: "¿Qué dos grandes cuerpos de agua conecta el Canal de Suez?",
          de: "Welche zwei großen Gewässer verbindet der Suezkanal?",
          nl: "Welke twee grote waterlichamen verbindt het Suezkanaal?"
        },
        options: [
          { en: "Indian Ocean and Arabian Sea", es: "Océano Índico y Mar Arábigo", de: "Indischer Ozean und Arabisches Meer", nl: "Indische Oceaan en Arabische Zee" },
          { en: "Black Sea and Caspian Sea", es: "Mar Negro y Mar Caspio", de: "Schwarzes Meer und Kaspisches Meer", nl: "Zwarte Zee en Kaspische Zee" },
          { en: "Mediterranean Sea and Red Sea", es: "Mar Mediterráneo y Mar Rojo", de: "Mittelmeer und Rotes Meer", nl: "Middellandse Zee en Rode Zee" },
          { en: "Atlantic Ocean and Pacific Ocean", es: "Océano Atlántico y Océano Pacífico", de: "Atlantischer Ozean und Pazifischer Ozean", nl: "Atlantische Oceaan en Stille Oceaan" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Suez Canal connects the Mediterranean Sea (in the north) to the Red Sea (in the south), providing a crucial shipping route between Europe and Asia. This artificial waterway runs through Egypt and eliminates the need for ships to navigate around the entire African continent via the Cape of Good Hope. The canal has no locks because the Mediterranean and Red Sea are at roughly the same sea level. It handles about 12% of global trade and is particularly important for oil shipments from the Persian Gulf to Europe and North America.",
          es: "El Canal de Suez conecta el Mar Mediterráneo (al norte) con el Mar Rojo (al sur), proporcionando una ruta de navegación crucial entre Europa y Asia. Esta vía fluvial artificial atraviesa Egipto y elimina la necesidad de que los barcos naveguen alrededor de todo el continente africano a través del Cabo de Buena Esperanza. El canal no tiene esclusas porque el Mediterráneo y el Mar Rojo están aproximadamente al mismo nivel del mar. Maneja aproximadamente el 12% del comercio mundial y es particularmente importante para los envíos de petróleo desde el Golfo Pérsico a Europa y América del Norte.",
          de: "Der Suezkanal verbindet das Mittelmeer (im Norden) mit dem Roten Meer (im Süden) und bietet eine entscheidende Schifffahrtsroute zwischen Europa und Asien. Diese künstliche Wasserstraße verläuft durch Ägypten und eliminiert die Notwendigkeit für Schiffe, um den gesamten afrikanischen Kontinent über das Kap der Guten Hoffnung zu navigieren. Der Kanal hat keine Schleusen, da das Mittelmeer und das Rote Meer ungefähr auf dem gleichen Meeresspiegel liegen. Er wickelt etwa 12% des Welthandels ab und ist besonders wichtig für Öltransporte vom Persischen Golf nach Europa und Nordamerika.",
          nl: "Het Suezkanaal verbindt de Middellandse Zee (in het noorden) met de Rode Zee (in het zuiden) en biedt een cruciale scheepvaartroute tussen Europa en Azië. Deze kunstmatige waterweg loopt door Egypte en elimineert de noodzaak voor schepen om rond het hele Afrikaanse continent via de Kaap de Goede Hoop te navigeren. Het kanaal heeft geen sluizen omdat de Middellandse Zee en de Rode Zee ongeveer op hetzelfde zeeniveau liggen. Het verwerkt ongeveer 12% van de wereldhandel en is bijzonder belangrijk voor olietransporten van de Perzische Golf naar Europa en Noord-Amerika."
        }
      },
      {
        question: {
          en: "In which famous TV series did Danny DeVito play the character Louie De Palma, earning him an Emmy Award?",
          es: "¿En qué famosa serie de televisión interpretó Danny DeVito al personaje Louie De Palma, ganándole un premio Emmy?",
          de: "In welcher berühmten TV-Serie spielte Danny DeVito die Figur Louie De Palma und gewann dafür einen Emmy Award?",
          nl: "In welke beroemde tv-serie speelde Danny DeVito het personage Louie De Palma, waarmee hij een Emmy Award won?"
        },
        options: [
          { en: "Cheers", es: "Cheers", de: "Cheers", nl: "Cheers" },
          { en: "Taxi", es: "Taxi", de: "Taxi", nl: "Taxi" },
          { en: "Friends", es: "Friends", de: "Friends", nl: "Friends" },
          { en: "Seinfeld", es: "Seinfeld", de: "Seinfeld", nl: "Seinfeld" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'Taxi' was a critically acclaimed sitcom that aired from 1978 to 1983, set in the Sunshine Cab Company garage in New York City. Danny DeVito played Louie De Palma, the short-tempered, money-grubbing dispatcher who was both antagonist and comic relief. His performance earned him an Emmy Award for Outstanding Supporting Actor in a Comedy Series in 1981 and a Golden Globe. The show also featured other talented actors including Judd Hirsch, Tony Danza, Christopher Lloyd, and Andy Kaufman. 'Taxi' is considered one of the greatest sitcoms in television history.",
          es: "'Taxi' fue una sitcom aclamada por la crítica que se emitió de 1978 a 1983, ambientada en el garaje de Sunshine Cab Company en la ciudad de Nueva York. Danny DeVito interpretó a Louie De Palma, el despachador malhumorado y avaricioso que era tanto antagonista como alivio cómico. Su actuación le valió un Premio Emmy al Mejor Actor de Reparto en una Serie de Comedia en 1981 y un Globo de Oro. El programa también contó con otros actores talentosos incluyendo Judd Hirsch, Tony Danza, Christopher Lloyd y Andy Kaufman. 'Taxi' es considerada una de las mejores sitcoms de la historia de la televisión.",
          de: "'Taxi' war eine von Kritikern gefeierte Sitcom, die von 1978 bis 1983 ausgestrahlt wurde und in der Garage der Sunshine Cab Company in New York City spielte. Danny DeVito spielte Louie De Palma, den jähzornigen, geldgierigen Dispatcher, der sowohl Antagonist als auch komische Erleichterung war. Seine Leistung brachte ihm 1981 einen Emmy Award für den besten Nebendarsteller in einer Comedy-Serie und einen Golden Globe ein. Die Show zeigte auch andere talentierte Schauspieler wie Judd Hirsch, Tony Danza, Christopher Lloyd und Andy Kaufman. 'Taxi' gilt als eine der größten Sitcoms in der Fernsehgeschichte.",
          nl: "'Taxi' was een bekroonde sitcom die van 1978 tot 1983 werd uitgezonden en zich afspeelde in de garage van Sunshine Cab Company in New York City. Danny DeVito speelde Louie De Palma, de kortgebonden, geldgrage dispatcher die zowel antagonist als komische verlichting was. Zijn optreden leverde hem in 1981 een Emmy Award op voor Beste Bijrolacteur in een Comedyserie en een Golden Globe. De show bevatte ook andere getalenteerde acteurs waaronder Judd Hirsch, Tony Danza, Christopher Lloyd en Andy Kaufman. 'Taxi' wordt beschouwd als een van de grootste sitcoms in de televisiegeschiedenis."
        }
      }
    ],

    // Day 18 - November 18th: Mickey Mouse debuts in Steamboat Willie (1928), Standard time adopted (1883), Latvia independence (1918)
    day18: [
      {
        question: {
          en: "Mickey Mouse made his first appearance in the animated short film 'Steamboat Willie' on November 18 of which year?",
          es: "Mickey Mouse hizo su primera aparición en el cortometraje animado 'Steamboat Willie' el 18 de noviembre de qué año?",
          de: "Micky Maus hatte seinen ersten Auftritt im animierten Kurzfilm 'Steamboat Willie' am 18. November welchen Jahres?",
          nl: "Mickey Mouse maakte zijn eerste verschijning in de geanimeerde korte film 'Steamboat Willie' op 18 november van welk jaar?"
        },
        options: [
          { en: "1923", es: "1923", de: "1923", nl: "1923" },
          { en: "1928", es: "1928", de: "1928", nl: "1928" },
          { en: "1935", es: "1935", de: "1935", nl: "1935" },
          { en: "1940", es: "1940", de: "1940", nl: "1940" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'Steamboat Willie' premiered on November 18, 1928, at the Colony Theatre in New York City, marking Mickey Mouse's official debut. This groundbreaking animated short was one of the first cartoons with synchronized sound. Walt Disney himself provided Mickey's voice. The film was directed by Walt Disney and Ub Iwerks. Mickey Mouse went on to become the iconic mascot of The Walt Disney Company and one of the most recognizable characters in the world. November 18 is considered Mickey Mouse's birthday.",
          es: "'Steamboat Willie' se estrenó el 18 de noviembre de 1928 en el Colony Theatre de la ciudad de Nueva York, marcando el debut oficial de Mickey Mouse. Este innovador corto animado fue uno de los primeros dibujos animados con sonido sincronizado. El propio Walt Disney proporcionó la voz de Mickey. La película fue dirigida por Walt Disney y Ub Iwerks. Mickey Mouse se convirtió en la icónica mascota de The Walt Disney Company y uno de los personajes más reconocibles del mundo. El 18 de noviembre se considera el cumpleaños de Mickey Mouse.",
          de: "'Steamboat Willie' hatte am 18. November 1928 im Colony Theatre in New York City Premiere und markierte Micky Maus' offizielles Debüt. Dieser bahnbrechende animierte Kurzfilm war einer der ersten Zeichentrickfilme mit synchronisiertem Ton. Walt Disney selbst sprach Mickys Stimme. Der Film wurde von Walt Disney und Ub Iwerks inszeniert. Micky Maus wurde zum ikonischen Maskottchen von The Walt Disney Company und zu einer der bekanntesten Figuren der Welt. Der 18. November gilt als Micky Maus' Geburtstag.",
          nl: "'Steamboat Willie' ging in première op 18 november 1928 in het Colony Theatre in New York City, wat Mickey Mouse's officiële debuut markeerde. Deze baanbrekende geanimeerde korte film was een van de eerste tekenfilms met gesynchroniseerd geluid. Walt Disney zelf verzorgde Mickey's stem. De film werd geregisseerd door Walt Disney en Ub Iwerks. Mickey Mouse werd het iconische mascotte van The Walt Disney Company en een van de meest herkenbare personages ter wereld. 18 november wordt beschouwd als Mickey Mouse's verjaardag."
        }
      },
      {
        question: {
          en: "Standard time zones were adopted across the United States on November 18 of which year?",
          es: "Los husos horarios estándar fueron adoptados en todo Estados Unidos el 18 de noviembre de qué año?",
          de: "Standardzeitzonen wurden in den gesamten Vereinigten Staaten am 18. November welchen Jahres eingeführt?",
          nl: "Standaard tijdzones werden aangenomen in de Verenigde Staten op 18 november van welk jaar?"
        },
        options: [
          { en: "1865", es: "1865", de: "1865", nl: "1865" },
          { en: "1883", es: "1883", de: "1883", nl: "1883" },
          { en: "1901", es: "1901", de: "1901", nl: "1901" },
          { en: "1918", es: "1918", de: "1918", nl: "1918" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On November 18, 1883, American and Canadian railroads implemented standard time zones to replace the confusion of thousands of local times. This system divided North America into four time zones: Eastern, Central, Mountain, and Pacific. Before this, each town kept its own local time based on the sun's position, creating chaos for railroad schedules. The railroads' adoption of standard time was so practical that the general public quickly adopted it as well, though it wasn't officially mandated by U.S. law until the Standard Time Act of 1918.",
          es: "El 18 de noviembre de 1883, los ferrocarriles estadounidenses y canadienses implementaron zonas horarias estándar para reemplazar la confusión de miles de tiempos locales. Este sistema dividió América del Norte en cuatro zonas horarias: Este, Central, Montaña y Pacífico. Antes de esto, cada ciudad mantenía su propio tiempo local basado en la posición del sol, creando caos para los horarios de trenes. La adopción del tiempo estándar por parte de los ferrocarriles fue tan práctica que el público en general la adoptó rápidamente también, aunque no fue oficialmente mandatada por la ley de EE.UU. hasta la Ley de Tiempo Estándar de 1918.",
          de: "Am 18. November 1883 führten amerikanische und kanadische Eisenbahnen Standardzeitzonen ein, um die Verwirrung von Tausenden lokaler Zeiten zu beseitigen. Dieses System teilte Nordamerika in vier Zeitzonen auf: Eastern, Central, Mountain und Pacific. Zuvor hielt jede Stadt ihre eigene Ortszeit basierend auf der Sonnenposition, was Chaos für Fahrpläne schuf. Die Einführung der Standardzeit durch die Eisenbahnen war so praktisch, dass auch die breite Öffentlichkeit sie schnell übernahm, obwohl sie erst mit dem Standard Time Act von 1918 gesetzlich vorgeschrieben wurde.",
          nl: "Op 18 november 1883 implementeerden Amerikaanse en Canadese spoorwegen standaard tijdzones om de verwarring van duizenden lokale tijden te vervangen. Dit systeem verdeelde Noord-Amerika in vier tijdzones: Eastern, Central, Mountain en Pacific. Hiervoor hield elke stad zijn eigen lokale tijd aan op basis van de positie van de zon, wat chaos veroorzaakte voor treinschema's. De invoering van standaardtijd door de spoorwegen was zo praktisch dat het grote publiek het ook snel adopteerde, hoewel het pas officieel door Amerikaanse wetgeving werd verplicht met de Standard Time Act van 1918."
        }
      },
      {
        question: {
          en: "Latvia declared independence from Russia on November 18 of which year?",
          es: "Letonia declaró su independencia de Rusia el 18 de noviembre de qué año?",
          de: "Lettland erklärte am 18. November welchen Jahres seine Unabhängigkeit von Russland?",
          nl: "Letland verklaarde onafhankelijkheid van Rusland op 18 november van welk jaar?"
        },
        options: [
          { en: "1905", es: "1905", de: "1905", nl: "1905" },
          { en: "1918", es: "1918", de: "1918", nl: "1918" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1991", es: "1991", de: "1991", nl: "1991" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Latvia declared independence on November 18, 1918, as World War I was ending and the Russian Empire was collapsing. The newly formed Republic of Latvia faced immediate challenges, including conflicts with Soviet Russia and German forces. Latvia maintained independence until 1940, when it was forcibly incorporated into the Soviet Union. After 50 years of Soviet occupation, Latvia restored its independence on August 21, 1991. November 18 is celebrated annually as Latvia's Independence Day (Proclamation Day). The capital of Latvia is Riga.",
          es: "Letonia declaró su independencia el 18 de noviembre de 1918, cuando la Primera Guerra Mundial estaba terminando y el Imperio Ruso se estaba colapsando. La recién formada República de Letonia enfrentó desafíos inmediatos, incluyendo conflictos con la Rusia Soviética y las fuerzas alemanas. Letonia mantuvo la independencia hasta 1940, cuando fue incorporada por la fuerza en la Unión Soviética. Después de 50 años de ocupación soviética, Letonia restauró su independencia el 21 de agosto de 1991. El 18 de noviembre se celebra anualmente como el Día de la Independencia de Letonia (Día de la Proclamación). La capital de Letonia es Riga.",
          de: "Lettland erklärte am 18. November 1918 seine Unabhängigkeit, als der Erste Weltkrieg endete und das Russische Reich zusammenbrach. Die neu gegründete Republik Lettland stand vor unmittelbaren Herausforderungen, einschließlich Konflikten mit Sowjetrussland und deutschen Streitkräften. Lettland blieb bis 1940 unabhängig, als es zwangsweise in die Sowjetunion eingegliedert wurde. Nach 50 Jahren sowjetischer Besatzung stellte Lettland am 21. August 1991 seine Unabhängigkeit wieder her. Der 18. November wird jährlich als Lettlands Unabhängigkeitstag (Proklamationstag) gefeiert. Die Hauptstadt Lettlands ist Riga.",
          nl: "Letland verklaarde onafhankelijkheid op 18 november 1918, toen de Eerste Wereldoorlog eindigde en het Russische Rijk instortte. De nieuw gevormde Republiek Letland kreeg onmiddellijk te maken met uitdagingen, waaronder conflicten met Sovjet-Rusland en Duitse troepen. Letland behield zijn onafhankelijkheid tot 1940, toen het met geweld werd opgenomen in de Sovjet-Unie. Na 50 jaar Sovjet-bezetting herstelde Letland zijn onafhankelijkheid op 21 augustus 1991. 18 november wordt jaarlijks gevierd als Letlands Onafhankelijkheidsdag (Proclamatiedag). De hoofdstad van Letland is Riga."
        }
      },
      {
        question: {
          en: "What innovation made 'Steamboat Willie' a groundbreaking animated film?",
          es: "¿Qué innovación hizo de 'Steamboat Willie' una película animada innovadora?",
          de: "Welche Innovation machte 'Steamboat Willie' zu einem bahnbrechenden Animationsfilm?",
          nl: "Welke innovatie maakte 'Steamboat Willie' een baanbrekende geanimeerde film?"
        },
        options: [
          { en: "Full color animation", es: "Animación a todo color", de: "Vollfarbanimation", nl: "Volledige kleurenanimatie" },
          { en: "3D animation", es: "Animación 3D", de: "3D-Animation", nl: "3D-animatie" },
          { en: "Synchronized sound", es: "Sonido sincronizado", de: "Synchronisierter Ton", nl: "Gesynchroniseerd geluid" },
          { en: "Computer graphics", es: "Gráficos por computadora", de: "Computergrafik", nl: "Computerafbeeldingen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Steamboat Willie' was revolutionary because it featured synchronized sound - music, sound effects, and actions were perfectly timed with the animation. While it wasn't the first cartoon with sound, it was the first to use a fully post-produced soundtrack. This innovation captivated audiences and established Disney as a pioneer in animation. The film's success demonstrated that cartoons could be entertaining with sound, leading to the 'Golden Age of Animation.' The soundtrack featured music adapted from 'Steamboat Bill,' a popular song of the era.",
          es: "'Steamboat Willie' fue revolucionario porque presentaba sonido sincronizado: música, efectos de sonido y acciones estaban perfectamente sincronizados con la animación. Si bien no fue el primer dibujo animado con sonido, fue el primero en usar una banda sonora completamente postproducida. Esta innovación cautivó a las audiencias y estableció a Disney como pionero en la animación. El éxito de la película demostró que los dibujos animados podían ser entretenidos con sonido, lo que llevó a la 'Edad de Oro de la Animación'. La banda sonora presentaba música adaptada de 'Steamboat Bill', una canción popular de la época.",
          de: "'Steamboat Willie' war revolutionär, weil er synchronisierten Ton verwendete - Musik, Soundeffekte und Aktionen waren perfekt mit der Animation getimed. Obwohl es nicht der erste Zeichentrickfilm mit Ton war, war er der erste, der einen vollständig nachbearbeiteten Soundtrack verwendete. Diese Innovation faszinierte das Publikum und etablierte Disney als Pionier in der Animation. Der Erfolg des Films zeigte, dass Zeichentrickfilme mit Ton unterhaltsam sein konnten, was zum 'Goldenen Zeitalter der Animation' führte. Der Soundtrack enthielt Musik, die von 'Steamboat Bill', einem beliebten Lied der Ära, adaptiert wurde.",
          nl: "'Steamboat Willie' was revolutionair omdat het gesynchroniseerd geluid bevatte - muziek, geluidseffecten en acties waren perfect getimed met de animatie. Hoewel het niet de eerste tekenfilm met geluid was, was het de eerste die een volledig nabewerkt soundtrack gebruikte. Deze innovatie fascineerde het publiek en vestigde Disney als pionier in animatie. Het succes van de film toonde aan dat tekenfilms met geluid vermakelijk konden zijn, wat leidde tot het 'Gouden Tijdperk van Animatie.' De soundtrack bevatte muziek aangepast van 'Steamboat Bill', een populair lied uit die tijd."
        }
      },
      {
        question: {
          en: "Why did railroads need to establish standard time zones in 1883?",
          es: "¿Por qué necesitaban los ferrocarriles establecer husos horarios estándar en 1883?",
          de: "Warum mussten die Eisenbahnen 1883 Standardzeitzonen einführen?",
          nl: "Waarom moesten spoorwegen standaard tijdzones invoeren in 1883?"
        },
        options: [
          { en: "To help farmers", es: "Para ayudar a los agricultores", de: "Um Bauern zu helfen", nl: "Om boeren te helpen" },
          { en: "To save energy", es: "Para ahorrar energía", de: "Um Energie zu sparen", nl: "Om energie te besparen" },
          { en: "To coordinate train schedules across different locations", es: "Para coordinar horarios de trenes en diferentes ubicaciones", de: "Um Zugfahrpläne an verschiedenen Orten zu koordinieren", nl: "Om treinschema's op verschillende locaties te coördineren" },
          { en: "To comply with international law", es: "Para cumplir con la ley internacional", de: "Um internationales Recht einzuhalten", nl: "Om te voldoen aan internationaal recht" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Before 1883, every town in America set its clock by the local sun time, resulting in hundreds of different local times. This created enormous confusion for railroads trying to create and follow schedules across long distances. A train traveling from New York to San Francisco would pass through dozens of different time zones. The railroads organized a system of four standard time zones to solve this problem. This standardization made train travel more reliable and safer, preventing scheduling conflicts and potential collisions. The system was so practical that civilians adopted it immediately.",
          es: "Antes de 1883, cada ciudad en América ajustaba su reloj según el tiempo solar local, resultando en cientos de tiempos locales diferentes. Esto creó una enorme confusión para los ferrocarriles que intentaban crear y seguir horarios a largas distancias. Un tren que viajaba de Nueva York a San Francisco pasaría por docenas de zonas horarias diferentes. Los ferrocarriles organizaron un sistema de cuatro zonas horarias estándar para resolver este problema. Esta estandarización hizo que los viajes en tren fueran más confiables y seguros, previniendo conflictos de horarios y colisiones potenciales. El sistema fue tan práctico que los civiles lo adoptaron inmediatamente.",
          de: "Vor 1883 stellte jede Stadt in Amerika ihre Uhr nach der lokalen Sonnenzeit, was zu Hunderten verschiedener Ortszeiten führte. Dies schuf enorme Verwirrung für Eisenbahnen, die versuchten, Fahrpläne über große Entfernungen zu erstellen und einzuhalten. Ein Zug, der von New York nach San Francisco fuhr, würde Dutzende verschiedener Zeitzonen durchqueren. Die Eisenbahnen organisierten ein System von vier Standardzeitzonen, um dieses Problem zu lösen. Diese Standardisierung machte Zugreisen zuverlässiger und sicherer und verhinderte Zeitplankonflikte und potenzielle Kollisionen. Das System war so praktisch, dass Zivilisten es sofort übernahmen.",
          nl: "Vóór 1883 stelde elke stad in Amerika zijn klok in volgens de lokale zonnetijd, wat resulteerde in honderden verschillende lokale tijden. Dit veroorzaakte enorme verwarring voor spoorwegen die probeerden schema's over lange afstanden te creëren en te volgen. Een trein die van New York naar San Francisco reisde, zou door tientallen verschillende tijdzones gaan. De spoorwegen organiseerden een systeem van vier standaard tijdzones om dit probleem op te lossen. Deze standaardisatie maakte treinreizen betrouwbaarder en veiliger, waardoor planningsconflicten en mogelijke botsingen werden voorkomen. Het systeem was zo praktisch dat burgers het onmiddellijk adopteerden."
        }
      }
    ],

    // Day 19 - November 19th: Gettysburg Address (1863), Indira Gandhi born (1917), World Toilet Day
    day19: [
      {
        question: {
          en: "President Abraham Lincoln delivered the famous Gettysburg Address on November 19 of which year?",
          es: "El presidente Abraham Lincoln pronunció el famoso Discurso de Gettysburg el 19 de noviembre de qué año?",
          de: "Präsident Abraham Lincoln hielt die berühmte Gettysburg-Rede am 19. November welchen Jahres?",
          nl: "President Abraham Lincoln hield de beroemde Gettysburg Address op 19 november van welk jaar?"
        },
        options: [
          { en: "1861", es: "1861", de: "1861", nl: "1861" },
          { en: "1863", es: "1863", de: "1863", nl: "1863" },
          { en: "1865", es: "1865", de: "1865", nl: "1865" },
          { en: "1870", es: "1870", de: "1870", nl: "1870" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Abraham Lincoln delivered the Gettysburg Address on November 19, 1863, during the dedication of the Soldiers' National Cemetery in Gettysburg, Pennsylvania. The speech, lasting just over two minutes and containing about 272 words, redefined the Civil War as a struggle for freedom and equality. Lincoln famously opened with 'Four score and seven years ago' and concluded with the hope that 'government of the people, by the people, for the people, shall not perish from the earth.' Despite being brief, it's considered one of the greatest speeches in American history.",
          es: "Abraham Lincoln pronunció el Discurso de Gettysburg el 19 de noviembre de 1863, durante la dedicación del Cementerio Nacional de Soldados en Gettysburg, Pensilvania. El discurso, que duró poco más de dos minutos y contenía alrededor de 272 palabras, redefinió la Guerra Civil como una lucha por la libertad y la igualdad. Lincoln comenzó famosamente con 'Hace ochenta y siete años' y concluyó con la esperanza de que 'el gobierno del pueblo, por el pueblo, para el pueblo, no perecerá de la tierra'. A pesar de ser breve, se considera uno de los mejores discursos de la historia estadounidense.",
          de: "Abraham Lincoln hielt die Gettysburg-Rede am 19. November 1863 während der Einweihung des Soldatenfriedhofs in Gettysburg, Pennsylvania. Die Rede, die etwas über zwei Minuten dauerte und etwa 272 Wörter umfasste, definierte den Bürgerkrieg neu als Kampf für Freiheit und Gleichheit. Lincoln begann berühmt mit 'Vor vierundachtzig Jahren' und schloss mit der Hoffnung, dass 'die Regierung des Volkes, durch das Volk, für das Volk, nicht von der Erde verschwinden wird'. Trotz ihrer Kürze gilt sie als eine der größten Reden der amerikanischen Geschichte.",
          nl: "Abraham Lincoln hield de Gettysburg Address op 19 november 1863, tijdens de wijding van het Soldiers' National Cemetery in Gettysburg, Pennsylvania. De toespraak, die iets meer dan twee minuten duurde en ongeveer 272 woorden bevatte, herdefinieerde de Burgeroorlog als een strijd voor vrijheid en gelijkheid. Lincoln opende beroemd met 'Zevenentachtig jaar geleden' en sloot af met de hoop dat 'regering van het volk, door het volk, voor het volk, niet van de aarde zal verdwijnen.' Ondanks zijn beknoptheid wordt het beschouwd als een van de grootste toespraken in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "Indira Gandhi, who became India's first female Prime Minister, was born on November 19 of which year?",
          es: "Indira Gandhi, quien se convirtió en la primera mujer Primera Ministra de India, nació el 19 de noviembre de qué año?",
          de: "Indira Gandhi, die Indiens erste weibliche Premierministerin wurde, wurde am 19. November welchen Jahres geboren?",
          nl: "Indira Gandhi, die India's eerste vrouwelijke premier werd, werd geboren op 19 november van welk jaar?"
        },
        options: [
          { en: "1905", es: "1905", de: "1905", nl: "1905" },
          { en: "1917", es: "1917", de: "1917", nl: "1917" },
          { en: "1925", es: "1925", de: "1925", nl: "1925" },
          { en: "1930", es: "1930", de: "1930", nl: "1930" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Indira Gandhi was born on November 19, 1917, in Allahabad, India. She was the daughter of Jawaharlal Nehru, India's first Prime Minister. Indira Gandhi served as Prime Minister from 1966 to 1977 and again from 1980 until her assassination in 1984. She was a controversial but powerful leader who played a significant role in shaping modern India. Gandhi nationalized banks, supported the Green Revolution, and led India during the Bangladesh Liberation War of 1971. Despite her surname, she was not related to Mahatma Gandhi; she married Feroze Gandhi.",
          es: "Indira Gandhi nació el 19 de noviembre de 1917 en Allahabad, India. Era hija de Jawaharlal Nehru, el primer Primer Ministro de India. Indira Gandhi sirvió como Primera Ministra de 1966 a 1977 y nuevamente de 1980 hasta su asesinato en 1984. Fue una líder controvertida pero poderosa que jugó un papel significativo en la formación de la India moderna. Gandhi nacionalizó los bancos, apoyó la Revolución Verde y lideró India durante la Guerra de Liberación de Bangladesh de 1971. A pesar de su apellido, no estaba relacionada con Mahatma Gandhi; se casó con Feroze Gandhi.",
          de: "Indira Gandhi wurde am 19. November 1917 in Allahabad, Indien, geboren. Sie war die Tochter von Jawaharlal Nehru, Indiens erstem Premierminister. Indira Gandhi diente von 1966 bis 1977 und erneut von 1980 bis zu ihrer Ermordung 1984 als Premierministerin. Sie war eine umstrittene, aber mächtige Führerin, die eine bedeutende Rolle bei der Gestaltung des modernen Indien spielte. Gandhi verstaatlichte Banken, unterstützte die Grüne Revolution und führte Indien während des Bangladesch-Befreiungskrieges von 1971. Trotz ihres Nachnamens war sie nicht mit Mahatma Gandhi verwandt; sie heiratete Feroze Gandhi.",
          nl: "Indira Gandhi werd geboren op 19 november 1917 in Allahabad, India. Ze was de dochter van Jawaharlal Nehru, India's eerste premier. Indira Gandhi diende als premier van 1966 tot 1977 en opnieuw van 1980 tot haar moord in 1984. Ze was een controversiële maar machtige leider die een belangrijke rol speelde bij het vormgeven van het moderne India. Gandhi nationaliseerde banken, steunde de Groene Revolutie en leidde India tijdens de Bevrijdingsoorlog van Bangladesh in 1971. Ondanks haar achternaam was ze niet verwant aan Mahatma Gandhi; ze trouwde met Feroze Gandhi."
        }
      },
      {
        question: {
          en: "World Toilet Day, observed annually on November 19, was established by the United Nations to raise awareness about what global issue?",
          es: "El Día Mundial del Inodoro, observado anualmente el 19 de noviembre, fue establecido por las Naciones Unidas para crear conciencia sobre qué problema global?",
          de: "Der Welttoilettentag, der jährlich am 19. November begangen wird, wurde von den Vereinten Nationen eingerichtet, um auf welches globale Problem aufmerksam zu machen?",
          nl: "Wereld Toilet Dag, jaarlijks gevierd op 19 november, werd opgericht door de Verenigde Naties om bewustzijn te creëren over welk wereldwijd probleem?"
        },
        options: [
          { en: "Air pollution", es: "Contaminación del aire", de: "Luftverschmutzung", nl: "Luchtvervuiling" },
          { en: "Climate change", es: "Cambio climático", de: "Klimawandel", nl: "Klimaatverandering" },
          { en: "Sanitation and hygiene crisis", es: "Crisis de saneamiento e higiene", de: "Sanitäre und hygienische Krise", nl: "Sanitaire en hygiënische crisis" },
          { en: "Water scarcity", es: "Escasez de agua", de: "Wasserknappheit", nl: "Waterschaarste" }
        ],
        correctIndex: 2,
        explanation: {
          en: "World Toilet Day was established by the UN in 2013 to address the global sanitation crisis. Approximately 3.6 billion people worldwide lack access to safe sanitation, leading to disease, malnutrition, and death. Poor sanitation contaminates water sources, spreads diseases like cholera and dysentery, and particularly affects women and girls who face safety and dignity issues. The day aims to inspire action toward achieving Sustainable Development Goal 6: water and sanitation for all by 2030. Despite being a taboo topic, toilets are fundamental to human dignity and public health.",
          es: "El Día Mundial del Inodoro fue establecido por la ONU en 2013 para abordar la crisis global de saneamiento. Aproximadamente 3.6 mil millones de personas en todo el mundo carecen de acceso a saneamiento seguro, lo que lleva a enfermedades, desnutrición y muerte. El saneamiento deficiente contamina las fuentes de agua, propaga enfermedades como el cólera y la disentería, y afecta particularmente a mujeres y niñas que enfrentan problemas de seguridad y dignidad. El día tiene como objetivo inspirar acciones hacia el logro del Objetivo de Desarrollo Sostenible 6: agua y saneamiento para todos para 2030. A pesar de ser un tema tabú, los inodoros son fundamentales para la dignidad humana y la salud pública.",
          de: "Der Welttoilettentag wurde 2013 von der UN eingerichtet, um die globale Sanitärkrise anzugehen. Etwa 3,6 Milliarden Menschen weltweit haben keinen Zugang zu sicheren Sanitäranlagen, was zu Krankheiten, Unterernährung und Tod führt. Schlechte Sanitäranlagen verunreinigen Wasserquellen, verbreiten Krankheiten wie Cholera und Ruhr und betreffen besonders Frauen und Mädchen, die mit Sicherheits- und Würdeproblemen konfrontiert sind. Der Tag soll zum Handeln anregen, um das Nachhaltige Entwicklungsziel 6 zu erreichen: Wasser und Sanitärversorgung für alle bis 2030. Trotz des Tabuthemas sind Toiletten grundlegend für die Menschenwürde und öffentliche Gesundheit.",
          nl: "Wereld Toilet Dag werd opgericht door de VN in 2013 om de wereldwijde sanitaire crisis aan te pakken. Ongeveer 3,6 miljard mensen wereldwijd hebben geen toegang tot veilige sanitaire voorzieningen, wat leidt tot ziekte, ondervoeding en dood. Slechte sanitaire voorzieningen vervuilen waterbronnen, verspreiden ziekten zoals cholera en dysenterie, en treffen vooral vrouwen en meisjes die met veiligheids- en waardigheidsproblemen worden geconfronteerd. De dag heeft als doel actie te inspireren om Duurzame Ontwikkelingsdoel 6 te bereiken: water en sanitatie voor iedereen tegen 2030. Ondanks dat het een taboe-onderwerp is, zijn toiletten fundamenteel voor menselijke waardigheid en volksgezondheid."
        }
      },
      {
        question: {
          en: "What famous phrase begins the Gettysburg Address?",
          es: "¿Qué frase famosa comienza el Discurso de Gettysburg?",
          de: "Mit welchem berühmten Satz beginnt die Gettysburg-Rede?",
          nl: "Met welke beroemde zin begint de Gettysburg Address?"
        },
        options: [
          { en: "We the people", es: "Nosotros el pueblo", de: "Wir, das Volk", nl: "Wij, het volk" },
          { en: "In the beginning", es: "En el principio", de: "Am Anfang", nl: "In het begin" },
          { en: "Four score and seven years ago", es: "Hace ochenta y siete años", de: "Vor vierundachtzig Jahren", nl: "Zevenentachtig jaar geleden" },
          { en: "My fellow Americans", es: "Mis compatriotas americanos", de: "Meine amerikanischen Mitbürger", nl: "Mijn mede-Amerikanen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Gettysburg Address begins with the iconic phrase 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.' 'Four score and seven years' equals 87 years, referring back to 1776 and the Declaration of Independence. This poetic opening established the speech's theme: the Civil War was a test of whether a nation founded on liberty and equality could survive. Lincoln's use of biblical language ('score' meaning 20) gave the speech gravitas and memorability.",
          es: "El Discurso de Gettysburg comienza con la icónica frase 'Hace ochenta y siete años nuestros padres dieron a luz en este continente, una nueva nación, concebida en la Libertad, y dedicada a la proposición de que todos los hombres son creados iguales'. 'Ochenta y siete años' se refiere a 1776 y la Declaración de Independencia. Esta apertura poética estableció el tema del discurso: la Guerra Civil era una prueba de si una nación fundada en la libertad y la igualdad podía sobrevivir. El uso de lenguaje bíblico por parte de Lincoln dio al discurso gravedad y memorabilidad.",
          de: "Die Gettysburg-Rede beginnt mit dem ikonischen Satz 'Vor vierundachtzig Jahren haben unsere Väter auf diesem Kontinent eine neue Nation hervorgebracht, die in Freiheit gezeugt und dem Grundsatz gewidmet ist, dass alle Menschen gleich geschaffen sind.' 'Vierundachtzig Jahre' entspricht 87 Jahren und bezieht sich auf 1776 und die Unabhängigkeitserklärung. Diese poetische Eröffnung etablierte das Thema der Rede: Der Bürgerkrieg war ein Test, ob eine auf Freiheit und Gleichheit gegründete Nation überleben kann. Lincolns Verwendung biblischer Sprache verlieh der Rede Gewicht und Einprägsamkeit.",
          nl: "De Gettysburg Address begint met de iconische zin 'Zevenentachtig jaar geleden hebben onze vaders op dit continent een nieuwe natie voortgebracht, verwekt in Vrijheid, en toegewijd aan het principe dat alle mensen gelijk geschapen zijn.' 'Zevenentachtig jaar' verwijst naar 1776 en de Onafhankelijkheidsverklaring. Deze poëtische opening vestigde het thema van de toespraak: de Burgeroorlog was een test of een natie gegrondvest op vrijheid en gelijkheid kon overleven. Lincolns gebruik van bijbelse taal gaf de toespraak gewicht en gedenkwaardigheid."
        }
      },
      {
        question: {
          en: "How many people worldwide lack access to safe sanitation facilities, according to the UN?",
          es: "¿Cuántas personas en todo el mundo carecen de acceso a instalaciones de saneamiento seguras, según la ONU?",
          de: "Wie viele Menschen weltweit haben laut UN keinen Zugang zu sicheren Sanitäranlagen?",
          nl: "Hoeveel mensen wereldwijd hebben geen toegang tot veilige sanitaire voorzieningen, volgens de VN?"
        },
        options: [
          { en: "1 billion", es: "1 mil millones", de: "1 Milliarde", nl: "1 miljard" },
          { en: "2.5 billion", es: "2.5 mil millones", de: "2,5 Milliarden", nl: "2,5 miljard" },
          { en: "3.6 billion", es: "3.6 mil millones", de: "3,6 Milliarden", nl: "3,6 miljard" },
          { en: "5 billion", es: "5 mil millones", de: "5 Milliarden", nl: "5 miljard" }
        ],
        correctIndex: 2,
        explanation: {
          en: "According to the United Nations, approximately 3.6 billion people - nearly half the world's population - lack access to safe sanitation facilities. This includes people who have no toilet at all and those whose toilets don't safely manage human waste. The sanitation crisis disproportionately affects people in sub-Saharan Africa and South Asia. Lack of proper sanitation leads to waterborne diseases that kill thousands of people daily, especially children under five. World Toilet Day highlights that access to safe toilets is a human right and essential for health, dignity, and development.",
          es: "Según las Naciones Unidas, aproximadamente 3.6 mil millones de personas, casi la mitad de la población mundial, carecen de acceso a instalaciones de saneamiento seguras. Esto incluye personas que no tienen ningún inodoro y aquellas cuyos inodoros no gestionan de manera segura los desechos humanos. La crisis de saneamiento afecta desproporcionadamente a las personas en África subsahariana y el sur de Asia. La falta de saneamiento adecuado conduce a enfermedades transmitidas por el agua que matan a miles de personas diariamente, especialmente niños menores de cinco años. El Día Mundial del Inodoro destaca que el acceso a inodoros seguros es un derecho humano y esencial para la salud, la dignidad y el desarrollo.",
          de: "Laut den Vereinten Nationen haben etwa 3,6 Milliarden Menschen - fast die Hälfte der Weltbevölkerung - keinen Zugang zu sicheren Sanitäranlagen. Dazu gehören Menschen, die überhaupt keine Toilette haben, und solche, deren Toiletten menschliche Abfälle nicht sicher entsorgen. Die Sanitärkrise betrifft unverhältnismäßig Menschen in Subsahara-Afrika und Südasien. Mangelnde angemessene Sanitärversorgung führt zu durch Wasser übertragenen Krankheiten, die täglich Tausende von Menschen töten, insbesondere Kinder unter fünf Jahren. Der Welttoilettentag hebt hervor, dass der Zugang zu sicheren Toiletten ein Menschenrecht und für Gesundheit, Würde und Entwicklung unerlässlich ist.",
          nl: "Volgens de Verenigde Naties hebben ongeveer 3,6 miljard mensen - bijna de helft van de wereldbevolking - geen toegang tot veilige sanitaire voorzieningen. Dit omvat mensen die helemaal geen toilet hebben en degenen wier toiletten menselijk afval niet veilig beheren. De sanitaire crisis treft onevenredig mensen in sub-Sahara Afrika en Zuid-Azië. Gebrek aan goede sanitaire voorzieningen leidt tot watergerelateerde ziekten die dagelijks duizenden mensen doden, vooral kinderen onder de vijf jaar. Wereld Toilet Dag benadrukt dat toegang tot veilige toiletten een mensenrecht is en essentieel voor gezondheid, waardigheid en ontwikkeling."
        }
      }
    ],

    // Day 20 - November 20th: Nuremberg Trials begin (1945), Mexico Revolution Day (1910), Hubble finds galaxies (1995)
    day20: [
      {
        question: {
          en: "The Nuremberg Trials, prosecuting Nazi war criminals, began on November 20 of which year?",
          es: "Los Juicios de Núremberg, procesando a criminales de guerra nazis, comenzaron el 20 de noviembre de qué año?",
          de: "Die Nürnberger Prozesse zur Anklage von Nazi-Kriegsverbrechern begannen am 20. November welchen Jahres?",
          nl: "De Neurenberg-processen, waarbij Nazi-oorlogsmisdadigers werden vervolgd, begonnen op 20 november van welk jaar?"
        },
        options: [
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1948", es: "1948", de: "1948", nl: "1948" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Nuremberg Trials began on November 20, 1945, just months after World War II ended. These historic trials prosecuted 24 major Nazi leaders for crimes against peace, war crimes, and crimes against humanity, including the Holocaust. The trials established important principles of international law, including that individuals can be held accountable for atrocities committed under government orders. The concept of 'crimes against humanity' became formally recognized. Twelve defendants were sentenced to death, seven received prison sentences, and three were acquitted. The trials lasted until October 1946.",
          es: "Los Juicios de Núremberg comenzaron el 20 de noviembre de 1945, solo meses después del final de la Segunda Guerra Mundial. Estos juicios históricos procesaron a 24 líderes nazis importantes por crímenes contra la paz, crímenes de guerra y crímenes contra la humanidad, incluido el Holocausto. Los juicios establecieron principios importantes del derecho internacional, incluido que los individuos pueden ser responsabilizados por atrocidades cometidas bajo órdenes gubernamentales. El concepto de 'crímenes contra la humanidad' se reconoció formalmente. Doce acusados fueron sentenciados a muerte, siete recibieron penas de prisión y tres fueron absueltos. Los juicios duraron hasta octubre de 1946.",
          de: "Die Nürnberger Prozesse begannen am 20. November 1945, nur Monate nach Ende des Zweiten Weltkriegs. Diese historischen Prozesse klagten 24 führende Nazi-Führer wegen Verbrechen gegen den Frieden, Kriegsverbrechen und Verbrechen gegen die Menschlichkeit an, einschließlich des Holocaust. Die Prozesse etablierten wichtige Prinzipien des Völkerrechts, einschließlich dass Individuen für Gräueltaten verantwortlich gemacht werden können, die unter Regierungsbefehlen begangen wurden. Das Konzept der 'Verbrechen gegen die Menschlichkeit' wurde formell anerkannt. Zwölf Angeklagte wurden zum Tode verurteilt, sieben erhielten Haftstrafen und drei wurden freigesprochen. Die Prozesse dauerten bis Oktober 1946.",
          nl: "De Neurenberg-processen begonnen op 20 november 1945, slechts maanden na het einde van de Tweede Wereldoorlog. Deze historische processen vervolgden 24 belangrijke Nazi-leiders voor misdaden tegen de vrede, oorlogsmisdaden en misdaden tegen de menselijkheid, inclusief de Holocaust. De processen stelden belangrijke principes van internationaal recht vast, waaronder dat individuen verantwoordelijk kunnen worden gehouden voor gruweldaden die onder regeringsbevelen zijn gepleegd. Het concept van 'misdaden tegen de menselijkheid' werd formeel erkend. Twaalf beklaagden werden ter dood veroordeeld, zeven kregen gevangenisstraffen en drie werden vrijgesproken. De processen duurden tot oktober 1946."
        }
      },
      {
        question: {
          en: "Revolution Day in Mexico commemorates the start of the Mexican Revolution on November 20 of which year?",
          es: "El Día de la Revolución en México conmemora el inicio de la Revolución Mexicana el 20 de noviembre de qué año?",
          de: "Der Tag der Revolution in Mexiko gedenkt dem Beginn der Mexikanischen Revolution am 20. November welchen Jahres?",
          nl: "Revolutiedag in Mexico herdenkt het begin van de Mexicaanse Revolutie op 20 november van welk jaar?"
        },
        options: [
          { en: "1895", es: "1895", de: "1895", nl: "1895" },
          { en: "1910", es: "1910", de: "1910", nl: "1910" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1917", es: "1917", de: "1917", nl: "1917" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Mexican Revolution began on November 20, 1910, when Francisco I. Madero called for an uprising against the dictatorial President Porfirio Díaz, who had ruled Mexico for over 30 years. The revolution was a major armed struggle lasting roughly a decade and involving figures like Pancho Villa and Emiliano Zapata. It sought to address land reform, workers' rights, and political democracy. The revolution transformed Mexico's political and social landscape, leading to the Constitution of 1917. Revolution Day is celebrated as a national holiday in Mexico on the third Monday of November.",
          es: "La Revolución Mexicana comenzó el 20 de noviembre de 1910, cuando Francisco I. Madero llamó a un levantamiento contra el presidente dictatorial Porfirio Díaz, quien había gobernado México durante más de 30 años. La revolución fue una lucha armada importante que duró aproximadamente una década e involucró figuras como Pancho Villa y Emiliano Zapata. Buscó abordar la reforma agraria, los derechos de los trabajadores y la democracia política. La revolución transformó el panorama político y social de México, llevando a la Constitución de 1917. El Día de la Revolución se celebra como feriado nacional en México el tercer lunes de noviembre.",
          de: "Die Mexikanische Revolution begann am 20. November 1910, als Francisco I. Madero zu einem Aufstand gegen den diktatorischen Präsidenten Porfirio Díaz aufrief, der Mexiko über 30 Jahre regiert hatte. Die Revolution war ein bedeutender bewaffneter Kampf, der etwa ein Jahrzehnt dauerte und Figuren wie Pancho Villa und Emiliano Zapata einbezog. Sie zielte darauf ab, Landreform, Arbeiterrechte und politische Demokratie anzugehen. Die Revolution verwandelte Mexikos politische und soziale Landschaft und führte zur Verfassung von 1917. Der Tag der Revolution wird als nationaler Feiertag in Mexiko am dritten Montag im November gefeiert.",
          nl: "De Mexicaanse Revolutie begon op 20 november 1910, toen Francisco I. Madero opriep tot een opstand tegen de dictatoriale president Porfirio Díaz, die Mexico meer dan 30 jaar had geregeerd. De revolutie was een grote gewapende strijd die ongeveer een decennium duurde en figuren zoals Pancho Villa en Emiliano Zapata omvatte. Het probeerde landhervorming, arbeidersrechten en politieke democratie aan te pakken. De revolutie transformeerde Mexico's politieke en sociale landschap, wat leidde tot de Grondwet van 1917. Revolutiedag wordt gevierd als nationale feestdag in Mexico op de derde maandag van november."
        }
      },
      {
        question: {
          en: "On November 20, 1995, the Hubble Space Telescope captured a groundbreaking image showing what?",
          es: "El 20 de noviembre de 1995, el Telescopio Espacial Hubble capturó una imagen revolucionaria que mostraba qué?",
          de: "Am 20. November 1995 nahm das Hubble-Weltraumteleskop ein bahnbrechendes Bild auf, das was zeigte?",
          nl: "Op 20 november 1995 maakte de Hubble ruimtetelescoop een baanbrekende foto die wat toonde?"
        },
        options: [
          { en: "The most distant galaxies ever observed", es: "Las galaxias más distantes jamás observadas", de: "Die am weitesten entfernten jemals beobachteten Galaxien", nl: "De verst verwijderde sterrenstelsels ooit waargenomen" },
          { en: "A black hole", es: "Un agujero negro", de: "Ein schwarzes Loch", nl: "Een zwart gat" },
          { en: "A new planet in our solar system", es: "Un nuevo planeta en nuestro sistema solar", de: "Einen neuen Planeten in unserem Sonnensystem", nl: "Een nieuwe planeet in ons zonnestelsel" },
          { en: "An asteroid collision", es: "Una colisión de asteroides", de: "Eine Asteroidenkollision", nl: "Een asteroïde-botsing" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On November 20, 1995, the Hubble Space Telescope revealed unprecedented deep-field images showing some of the most distant galaxies ever observed, dating back nearly to the beginning of the universe. These observations were part of ongoing deep-field surveys that revolutionized our understanding of galaxy formation and the early universe. Hubble has taken several famous deep field images, including the Hubble Deep Field (1995) and the Hubble Ultra Deep Field (2004). These images show thousands of galaxies billions of light-years away, providing glimpses of the universe when it was just a fraction of its current age.",
          es: "El 20 de noviembre de 1995, el Telescopio Espacial Hubble reveló imágenes de campo profundo sin precedentes que mostraban algunas de las galaxias más distantes jamás observadas, que datan casi del comienzo del universo. Estas observaciones fueron parte de estudios de campo profundo en curso que revolucionaron nuestra comprensión de la formación de galaxias y el universo temprano. Hubble ha tomado varias imágenes famosas de campo profundo, incluido el Campo Profundo Hubble (1995) y el Campo Profundo Ultra Hubble (2004). Estas imágenes muestran miles de galaxias a miles de millones de años luz de distancia, proporcionando vislumbres del universo cuando era solo una fracción de su edad actual.",
          de: "Am 20. November 1995 enthüllte das Hubble-Weltraumteleskop beispiellose Tiefenfeldbilder, die einige der am weitesten entfernten jemals beobachteten Galaxien zeigten, die fast bis zum Anfang des Universums zurückreichen. Diese Beobachtungen waren Teil laufender Tiefenfeldstudien, die unser Verständnis der Galaxienbildung und des frühen Universums revolutionierten. Hubble hat mehrere berühmte Tiefenfeldbilder aufgenommen, darunter das Hubble Deep Field (1995) und das Hubble Ultra Deep Field (2004). Diese Bilder zeigen Tausende von Galaxien, die Milliarden von Lichtjahren entfernt sind und Einblicke in das Universum geben, als es nur einen Bruchteil seines heutigen Alters hatte.",
          nl: "Op 20 november 1995 onthulde de Hubble ruimtetelescoop ongekende deep-field beelden die enkele van de verst verwijderde sterrenstelsels ooit waargenomen toonden, die bijna teruggaan tot het begin van het universum. Deze waarnemingen maakten deel uit van voortdurende deep-field onderzoeken die ons begrip van sterrenstelselvorming en het vroege universum revolutioneerden. Hubble heeft verschillende beroemde deep field beelden gemaakt, waaronder het Hubble Deep Field (1995) en het Hubble Ultra Deep Field (2004). Deze beelden tonen duizenden sterrenstelsels miljarden lichtjaren ver weg en bieden glimpen van het universum toen het slechts een fractie van zijn huidige leeftijd was."
        }
      },
      {
        question: {
          en: "What legal precedent did the Nuremberg Trials establish?",
          es: "¿Qué precedente legal establecieron los Juicios de Núremberg?",
          de: "Welchen rechtlichen Präzedenzfall schufen die Nürnberger Prozesse?",
          nl: "Welk juridisch precedent stelden de Neurenberg-processen?"
        },
        options: [
          { en: "Following orders is always a valid defense", es: "Seguir órdenes es siempre una defensa válida", de: "Befehle zu befolgen ist immer eine gültige Verteidigung", nl: "Bevelen opvolgen is altijd een geldig verweer" },
          { en: "Individuals can be held accountable for crimes against humanity", es: "Los individuos pueden ser responsabilizados por crímenes contra la humanidad", de: "Individuen können für Verbrechen gegen die Menschlichkeit zur Verantwortung gezogen werden", nl: "Individuen kunnen verantwoordelijk worden gehouden voor misdaden tegen de menselijkheid" },
          { en: "War crimes can only be tried in national courts", es: "Los crímenes de guerra solo pueden juzgarse en tribunales nacionales", de: "Kriegsverbrechen können nur vor nationalen Gerichten verhandelt werden", nl: "Oorlogsmisdaden kunnen alleen voor nationale rechtbanken worden berecht" },
          { en: "Only military leaders can be prosecuted", es: "Solo los líderes militares pueden ser procesados", de: "Nur Militärführer können strafrechtlich verfolgt werden", nl: "Alleen militaire leiders kunnen worden vervolgd" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Nuremberg Trials established the groundbreaking principle that individuals - including government leaders and military officials - can be held personally accountable for crimes against humanity, war crimes, and crimes against peace. The trials rejected the defense that defendants were 'just following orders,' establishing that individuals have a moral and legal responsibility to refuse to participate in atrocities. This precedent led to the development of international criminal law and the eventual creation of the International Criminal Court. The trials defined 'crimes against humanity' as systematic attacks on civilian populations.",
          es: "Los Juicios de Núremberg establecieron el principio revolucionario de que los individuos, incluidos los líderes gubernamentales y funcionarios militares, pueden ser personalmente responsables de crímenes contra la humanidad, crímenes de guerra y crímenes contra la paz. Los juicios rechazaron la defensa de que los acusados simplemente 'seguían órdenes', estableciendo que los individuos tienen una responsabilidad moral y legal de negarse a participar en atrocidades. Este precedente llevó al desarrollo del derecho penal internacional y la eventual creación de la Corte Penal Internacional. Los juicios definieron los 'crímenes contra la humanidad' como ataques sistemáticos contra poblaciones civiles.",
          de: "Die Nürnberger Prozesse etablierten das bahnbrechende Prinzip, dass Individuen - einschließlich Regierungsführer und Militärbeamte - persönlich für Verbrechen gegen die Menschlichkeit, Kriegsverbrechen und Verbrechen gegen den Frieden verantwortlich gemacht werden können. Die Prozesse lehnten die Verteidigung ab, dass Angeklagte 'nur Befehle befolgten', und stellten fest, dass Individuen eine moralische und rechtliche Verantwortung haben, die Teilnahme an Gräueltaten zu verweigern. Dieser Präzedenzfall führte zur Entwicklung des internationalen Strafrechts und zur eventuellen Schaffung des Internationalen Strafgerichtshofs. Die Prozesse definierten 'Verbrechen gegen die Menschlichkeit' als systematische Angriffe auf Zivilbevölkerungen.",
          nl: "De Neurenberg-processen stelden het baanbrekende principe vast dat individuen - inclusief regeringsleiders en militaire functionarissen - persoonlijk verantwoordelijk kunnen worden gehouden voor misdaden tegen de menselijkheid, oorlogsmisdaden en misdaden tegen de vrede. De processen verwierpen het verweer dat beklaagden 'alleen bevelen volgden', waarbij werd vastgesteld dat individuen een morele en juridische verantwoordelijkheid hebben om te weigeren deel te nemen aan gruweldaden. Dit precedent leidde tot de ontwikkeling van internationaal strafrecht en de uiteindelijke oprichting van het Internationaal Strafhof. De processen definieerden 'misdaden tegen de menselijkheid' als systematische aanvallen op burgerbevolkingen."
        }
      },
      {
        question: {
          en: "Who was the dictatorial president that the Mexican Revolution aimed to overthrow in 1910?",
          es: "¿Quién fue el presidente dictatorial que la Revolución Mexicana intentó derrocar en 1910?",
          de: "Wer war der diktatorische Präsident, den die Mexikanische Revolution 1910 stürzen wollte?",
          nl: "Wie was de dictatoriale president die de Mexicaanse Revolutie in 1910 wilde omverwerpen?"
        },
        options: [
          { en: "Benito Juárez", es: "Benito Juárez", de: "Benito Juárez", nl: "Benito Juárez" },
          { en: "Porfirio Díaz", es: "Porfirio Díaz", de: "Porfirio Díaz", nl: "Porfirio Díaz" },
          { en: "Santa Anna", es: "Santa Anna", de: "Santa Anna", nl: "Santa Anna" },
          { en: "Venustiano Carranza", es: "Venustiano Carranza", de: "Venustiano Carranza", nl: "Venustiano Carranza" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Porfirio Díaz ruled Mexico as a dictator for over 30 years (1876-1911, with a brief interruption). His regime, known as the 'Porfiriato,' brought economic modernization but also increased inequality, with foreign investors and wealthy landowners prospering while the poor suffered. Political repression, rigged elections, and concentration of land in few hands sparked widespread discontent. Francisco I. Madero's call to arms on November 20, 1910, launched the Mexican Revolution. Díaz fled to exile in France in 1911, but the revolution continued for another decade as different factions fought over Mexico's future.",
          es: "Porfirio Díaz gobernó México como dictador durante más de 30 años (1876-1911, con una breve interrupción). Su régimen, conocido como el 'Porfiriato', trajo modernización económica pero también aumentó la desigualdad, con inversores extranjeros y terratenientes ricos prosperando mientras los pobres sufrían. La represión política, elecciones amañadas y la concentración de tierras en pocas manos despertaron un descontento generalizado. El llamado a las armas de Francisco I. Madero el 20 de noviembre de 1910 lanzó la Revolución Mexicana. Díaz huyó al exilio en Francia en 1911, pero la revolución continuó durante otra década mientras diferentes facciones luchaban por el futuro de México.",
          de: "Porfirio Díaz regierte Mexiko über 30 Jahre als Diktator (1876-1911, mit einer kurzen Unterbrechung). Sein Regime, bekannt als 'Porfiriato', brachte wirtschaftliche Modernisierung, aber auch zunehmende Ungleichheit, wobei ausländische Investoren und wohlhabende Landbesitzer prosperierten, während die Armen litten. Politische Repression, manipulierte Wahlen und die Konzentration von Land in wenigen Händen lösten weit verbreitete Unzufriedenheit aus. Francisco I. Maderos Aufruf zu den Waffen am 20. November 1910 startete die Mexikanische Revolution. Díaz floh 1911 ins Exil nach Frankreich, aber die Revolution dauerte noch ein weiteres Jahrzehnt an, während verschiedene Fraktionen um Mexikos Zukunft kämpften.",
          nl: "Porfirio Díaz regeerde Mexico als dictator gedurende meer dan 30 jaar (1876-1911, met een korte onderbreking). Zijn regime, bekend als het 'Porfiriato', bracht economische modernisering maar ook toegenomen ongelijkheid, waarbij buitenlandse investeerders en rijke landeigenaren floreerden terwijl de armen leden. Politieke repressie, gemanipuleerde verkiezingen en de concentratie van land in weinige handen veroorzaakten wijdverspreide ontevredenheid. Francisco I. Madero's oproep tot de wapens op 20 november 1910 lanceerde de Mexicaanse Revolutie. Díaz vluchtte in 1911 naar ballingschap in Frankrijk, maar de revolutie ging nog een decennium door terwijl verschillende facties vochten over Mexico's toekomst."
        }
      }
    ],

    // Day 21 - November 21st: North Carolina ratifies Constitution (1789), Voltaire born (1694), World Hello Day
    day21: [
      {
        question: {
          en: "North Carolina became which number state to ratify the U.S. Constitution on November 21, 1789?",
          es: "Carolina del Norte se convirtió en el estado número qué en ratificar la Constitución de EE.UU. el 21 de noviembre de 1789?",
          de: "Der wievielte Bundesstaat wurde North Carolina bei der Ratifizierung der US-Verfassung am 21. November 1789?",
          nl: "Noord-Carolina werd de hoeveelste staat die de Amerikaanse Grondwet ratificeerde op 21 november 1789?"
        },
        options: [
          { en: "10th", es: "10º", de: "10.", nl: "10e" },
          { en: "12th", es: "12º", de: "12.", nl: "12e" },
          { en: "9th", es: "9º", de: "9.", nl: "9e" },
          { en: "11th", es: "11º", de: "11.", nl: "11e" }
        ],
        correctIndex: 1,
        explanation: {
          en: "North Carolina ratified the U.S. Constitution on November 21, 1789, becoming the 12th state to do so. Initially, North Carolina rejected the Constitution in 1788, insisting on a Bill of Rights. After the first Congress proposed amendments that would become the Bill of Rights, North Carolina reconsidered and ratified. Rhode Island would be the last of the original 13 colonies to ratify in 1790. North Carolina's delay meant it operated as an independent nation for about a year between the formation of the new government and its ratification.",
          es: "Carolina del Norte ratificó la Constitución de EE.UU. el 21 de noviembre de 1789, convirtiéndose en el 12º estado en hacerlo. Inicialmente, Carolina del Norte rechazó la Constitución en 1788, insistiendo en una Declaración de Derechos. Después de que el primer Congreso propusiera enmiendas que se convertirían en la Declaración de Derechos, Carolina del Norte reconsideró y ratificó. Rhode Island sería la última de las 13 colonias originales en ratificar en 1790. El retraso de Carolina del Norte significó que operó como una nación independiente durante aproximadamente un año entre la formación del nuevo gobierno y su ratificación.",
          de: "North Carolina ratifizierte die US-Verfassung am 21. November 1789 und wurde damit der 12. Bundesstaat. Zunächst lehnte North Carolina die Verfassung 1788 ab und bestand auf einer Bill of Rights. Nachdem der erste Kongress Änderungen vorschlug, die zur Bill of Rights werden würden, überdachte North Carolina und ratifizierte. Rhode Island würde als letzte der ursprünglichen 13 Kolonien 1790 ratifizieren. North Carolinas Verzögerung bedeutete, dass es etwa ein Jahr lang als unabhängige Nation zwischen der Bildung der neuen Regierung und seiner Ratifizierung operierte.",
          nl: "Noord-Carolina ratificeerde de Amerikaanse Grondwet op 21 november 1789 en werd daarmee de 12e staat. Aanvankelijk wees Noord-Carolina de Grondwet in 1788 af, waarbij het aandrong op een Bill of Rights. Nadat het eerste Congres amendementen voorstelde die de Bill of Rights zouden worden, heroverweeg Noord-Carolina en ratificeerde. Rhode Island zou als laatste van de oorspronkelijke 13 koloniën ratificeren in 1790. Noord-Carolina's vertraging betekende dat het ongeveer een jaar opereerde als onafhankelijke natie tussen de vorming van de nieuwe regering en zijn ratificatie."
        }
      },
      {
        question: {
          en: "The influential French Enlightenment writer and philosopher Voltaire was born on November 21 of which year?",
          es: "El influyente escritor y filósofo francés de la Ilustración, Voltaire, nació el 21 de noviembre de qué año?",
          de: "Der einflussreiche französische Aufklärungsschriftsteller und Philosoph Voltaire wurde am 21. November welchen Jahres geboren?",
          nl: "De invloedrijke Franse Verlichtingsschrijver en filosoof Voltaire werd geboren op 21 november van welk jaar?"
        },
        options: [
          { en: "1720", es: "1720", de: "1720", nl: "1720" },
          { en: "1694", es: "1694", de: "1694", nl: "1694" },
          { en: "1680", es: "1680", de: "1680", nl: "1680" },
          { en: "1705", es: "1705", de: "1705", nl: "1705" }
        ],
        correctIndex: 1,
        explanation: {
          en: "François-Marie Arouet, known as Voltaire, was born on November 21, 1694, in Paris. He became one of the most influential writers and philosophers of the French Enlightenment. Famous for his wit, criticism of Christianity and slavery, and advocacy for freedom of speech and separation of church and state, Voltaire wrote numerous plays, poems, novels, and philosophical works. His satirical novella 'Candide' (1759) remains widely read today. His defense of civil liberties inspired the framers of the U.S. Constitution and Bill of Rights. He died in 1778.",
          es: "François-Marie Arouet, conocido como Voltaire, nació el 21 de noviembre de 1694 en París. Se convirtió en uno de los escritores y filósofos más influyentes de la Ilustración francesa. Famoso por su ingenio, crítica del cristianismo y la esclavitud, y defensa de la libertad de expresión y separación de la iglesia y el estado, Voltaire escribió numerosas obras de teatro, poemas, novelas y obras filosóficas. Su novela satírica 'Cándido' (1759) sigue siendo ampliamente leída hoy. Su defensa de las libertades civiles inspiró a los redactores de la Constitución de EE.UU. y la Declaración de Derechos. Murió en 1778.",
          de: "François-Marie Arouet, bekannt als Voltaire, wurde am 21. November 1694 in Paris geboren. Er wurde einer der einflussreichsten Schriftsteller und Philosophen der französischen Aufklärung. Berühmt für seinen Witz, seine Kritik am Christentum und der Sklaverei sowie sein Eintreten für Meinungsfreiheit und Trennung von Kirche und Staat, schrieb Voltaire zahlreiche Theaterstücke, Gedichte, Romane und philosophische Werke. Seine satirische Novelle 'Candide' (1759) wird heute noch viel gelesen. Seine Verteidigung der Bürgerrechte inspirierte die Verfasser der US-Verfassung und der Bill of Rights. Er starb 1778.",
          nl: "François-Marie Arouet, bekend als Voltaire, werd geboren op 21 november 1694 in Parijs. Hij werd een van de meest invloedrijke schrijvers en filosofen van de Franse Verlichting. Beroemd om zijn scherpzinnigheid, kritiek op het christendom en slavernij, en pleidooi voor vrijheid van meningsuiting en scheiding van kerk en staat, schreef Voltaire talrijke toneelstukken, gedichten, romans en filosofische werken. Zijn satirische novelle 'Candide' (1759) wordt vandaag nog steeds veel gelezen. Zijn verdediging van burgerlijke vrijheden inspireerde de opstellers van de Amerikaanse Grondwet en Bill of Rights. Hij stierf in 1778."
        }
      },
      {
        question: {
          en: "What is 144 ÷ 12?",
          es: "¿Cuánto es 144 ÷ 12?",
          de: "Was ist 144 ÷ 12?",
          nl: "Hoeveel is 144 ÷ 12?"
        },
        options: [
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "World Hello Day, observed on November 21, promotes communication as a means to preserve what?",
          es: "El Día Mundial del Saludo, observado el 21 de noviembre, promueve la comunicación como un medio para preservar qué?",
          de: "Der Welttag des Grüßens, der am 21. November begangen wird, fördert Kommunikation als Mittel zur Erhaltung von was?",
          nl: "Wereld Hallo Dag, gevierd op 21 november, promoot communicatie als middel om wat te behouden?"
        },
        options: [
          { en: "Technology", es: "Tecnología", de: "Technologie", nl: "Technologie" },
          { en: "Peace", es: "Paz", de: "Frieden", nl: "Vrede" },
          { en: "Languages", es: "Idiomas", de: "Sprachen", nl: "Talen" },
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" }
        ],
        correctIndex: 1,
        explanation: {
          en: "World Hello Day was begun in 1973 by Brian and Michael McCormack in response to the Yom Kippur War. The idea is simple: greet ten people on this day to demonstrate the importance of personal communication for preserving peace. The day has been observed by people in 180 countries, and has been honored by winners of the Nobel Peace Prize. The simple act of greeting someone can be a powerful tool for conflict resolution and promoting understanding between people and nations.",
          es: "El Día Mundial del Saludo fue iniciado en 1973 por Brian y Michael McCormack en respuesta a la Guerra de Yom Kippur. La idea es simple: saludar a diez personas en este día para demostrar la importancia de la comunicación personal para preservar la paz. El día ha sido observado por personas en 180 países y ha sido honrado por ganadores del Premio Nobel de la Paz. El simple acto de saludar a alguien puede ser una herramienta poderosa para la resolución de conflictos y promover la comprensión entre personas y naciones.",
          de: "Der Welttag des Grüßens wurde 1973 von Brian und Michael McCormack als Reaktion auf den Jom-Kippur-Krieg ins Leben gerufen. Die Idee ist einfach: Grüßen Sie an diesem Tag zehn Personen, um die Bedeutung persönlicher Kommunikation für die Erhaltung des Friedens zu demonstrieren. Der Tag wird von Menschen in 180 Ländern begangen und wurde von Gewinnern des Friedensnobelpreises geehrt. Die einfache Handlung, jemanden zu grüßen, kann ein mächtiges Werkzeug zur Konfliktlösung und zur Förderung des Verständnisses zwischen Menschen und Nationen sein.",
          nl: "Wereld Hallo Dag werd in 1973 begonnen door Brian en Michael McCormack als reactie op de Jom Kippoer-oorlog. Het idee is eenvoudig: begroet tien mensen op deze dag om het belang van persoonlijke communicatie voor het behoud van vrede te demonstreren. De dag wordt waargenomen door mensen in 180 landen en is geëerd door winnaars van de Nobelprijs voor de Vrede. De eenvoudige daad van iemand begroeten kan een krachtig instrument zijn voor conflictoplossing en het bevorderen van begrip tussen mensen en naties."
        }
      },
      {
        question: {
          en: "What famous satirical work did Voltaire write criticizing blind optimism?",
          es: "¿Qué famosa obra satírica escribió Voltaire criticando el optimismo ciego?",
          de: "Welches berühmte satirische Werk schrieb Voltaire, das blinden Optimismus kritisierte?",
          nl: "Welk beroemd satirisch werk schreef Voltaire dat blind optimisme bekritiseerde?"
        },
        options: [
          { en: "Gulliver's Travels", es: "Los Viajes de Gulliver", de: "Gullivers Reisen", nl: "Gullivers Reizen" },
          { en: "Don Quixote", es: "Don Quijote", de: "Don Quijote", nl: "Don Quichot" },
          { en: "Candide", es: "Cándido", de: "Candide", nl: "Candide" },
          { en: "Animal Farm", es: "Rebelión en la Granja", de: "Farm der Tiere", nl: "Dierenboerderij" }
        ],
        correctIndex: 2
      }
    ],

    // Day 22 - November 22nd: JFK assassinated (1963), C.S. Lewis dies (1963), Scarlett Johansson born (1984)
    day22: [
      {
        question: {
          en: "President John F. Kennedy was assassinated in which Texas city on November 22, 1963?",
          es: "El presidente John F. Kennedy fue asesinado en qué ciudad de Texas el 22 de noviembre de 1963?",
          de: "Präsident John F. Kennedy wurde in welcher texanischen Stadt am 22. November 1963 ermordet?",
          nl: "President John F. Kennedy werd vermoord in welke stad in Texas op 22 november 1963?"
        },
        options: [
          { en: "Houston", es: "Houston", de: "Houston", nl: "Houston" },
          { en: "Austin", es: "Austin", de: "Austin", nl: "Austin" },
          { en: "Dallas", es: "Dallas", de: "Dallas", nl: "Dallas" },
          { en: "San Antonio", es: "San Antonio", de: "San Antonio", nl: "San Antonio" }
        ],
        correctIndex: 2,
        explanation: {
          en: "President John F. Kennedy was assassinated in Dallas, Texas, on November 22, 1963, while riding in a presidential motorcade through Dealey Plaza. Lee Harvey Oswald was arrested for the murder but was himself killed two days later by Jack Ruby. The Warren Commission concluded Oswald acted alone, though conspiracy theories persist. Kennedy's death shocked the nation and world. Vice President Lyndon B. Johnson was sworn in as president aboard Air Force One hours after the shooting. The assassination remains one of the most significant events in American history.",
          es: "El presidente John F. Kennedy fue asesinado en Dallas, Texas, el 22 de noviembre de 1963, mientras viajaba en una caravana presidencial por Dealey Plaza. Lee Harvey Oswald fue arrestado por el asesinato, pero él mismo fue asesinado dos días después por Jack Ruby. La Comisión Warren concluyó que Oswald actuó solo, aunque persisten las teorías de conspiración. La muerte de Kennedy conmocionó a la nación y al mundo. El vicepresidente Lyndon B. Johnson prestó juramento como presidente a bordo del Air Force One horas después del tiroteo. El asesinato sigue siendo uno de los eventos más significativos en la historia estadounidense.",
          de: "Präsident John F. Kennedy wurde am 22. November 1963 in Dallas, Texas, ermordet, während er in einem Präsidentenkonvoi durch die Dealey Plaza fuhr. Lee Harvey Oswald wurde wegen des Mordes verhaftet, wurde aber selbst zwei Tage später von Jack Ruby getötet. Die Warren-Kommission kam zu dem Schluss, dass Oswald allein handelte, obwohl Verschwörungstheorien fortbestehen. Kennedys Tod schockierte die Nation und die Welt. Vizepräsident Lyndon B. Johnson wurde Stunden nach der Schießerei an Bord der Air Force One als Präsident vereidigt. Das Attentat bleibt eines der bedeutendsten Ereignisse in der amerikanischen Geschichte.",
          nl: "President John F. Kennedy werd vermoord in Dallas, Texas, op 22 november 1963, terwijl hij in een presidentiële stoet door Dealey Plaza reed. Lee Harvey Oswald werd gearresteerd voor de moord maar werd zelf twee dagen later gedood door Jack Ruby. De Warren-commissie concludeerde dat Oswald alleen handelde, hoewel samenzweringstheorieën blijven bestaan. Kennedy's dood schokte de natie en de wereld. Vicepresident Lyndon B. Johnson werd enkele uren na de schietpartij ingezworen als president aan boord van Air Force One. De moord blijft een van de belangrijkste gebeurtenissen in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "The famous author C.S. Lewis, known for 'The Chronicles of Narnia', died on the same day as JFK. In which year?",
          es: "El famoso autor C.S. Lewis, conocido por 'Las Crónicas de Narnia', murió el mismo día que JFK. ¿En qué año?",
          de: "Der berühmte Autor C.S. Lewis, bekannt für 'Die Chroniken von Narnia', starb am selben Tag wie JFK. In welchem Jahr?",
          nl: "De beroemde auteur C.S. Lewis, bekend van 'De Kronieken van Narnia', stierf op dezelfde dag als JFK. In welk jaar?"
        },
        options: [
          { en: "1960", es: "1960", de: "1960", nl: "1960" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1963", es: "1963", de: "1963", nl: "1963" },
          { en: "1962", es: "1962", de: "1962", nl: "1962" }
        ],
        correctIndex: 2,
        explanation: {
          en: "C.S. Lewis died on November 22, 1963, the same day as President Kennedy's assassination. His death received little media attention because of the Kennedy news. Lewis was a British writer, scholar, and Christian apologist best known for 'The Chronicles of Narnia' series and works like 'Mere Christianity' and 'The Screwtape Letters'. Interestingly, author Aldous Huxley ('Brave New World') also died on the same day, leading to the observation that three of the most influential figures of the 20th century died on November 22, 1963.",
          es: "C.S. Lewis murió el 22 de noviembre de 1963, el mismo día del asesinato del presidente Kennedy. Su muerte recibió poca atención mediática debido a las noticias de Kennedy. Lewis fue un escritor, académico y apologista cristiano británico mejor conocido por la serie 'Las Crónicas de Narnia' y obras como 'Mero Cristianismo' y 'Las Cartas del Diablo a su Sobrino'. Curiosamente, el autor Aldous Huxley ('Un Mundo Feliz') también murió el mismo día, lo que llevó a la observación de que tres de las figuras más influyentes del siglo XX murieron el 22 de noviembre de 1963.",
          de: "C.S. Lewis starb am 22. November 1963, am selben Tag wie die Ermordung von Präsident Kennedy. Sein Tod erhielt wenig Medienaufmerksamkeit wegen der Kennedy-Nachrichten. Lewis war ein britischer Schriftsteller, Gelehrter und christlicher Apologet, am bekanntesten für die Serie 'Die Chroniken von Narnia' und Werke wie 'Pardon, ich bin Christ' und 'Dienstanweisung für einen Unterteufel'. Interessanterweise starb auch der Autor Aldous Huxley ('Schöne neue Welt') am selben Tag, was zu der Beobachtung führte, dass drei der einflussreichsten Persönlichkeiten des 20. Jahrhunderts am 22. November 1963 starben.",
          nl: "C.S. Lewis stierf op 22 november 1963, dezelfde dag als de moord op president Kennedy. Zijn dood kreeg weinig media-aandacht vanwege het Kennedy-nieuws. Lewis was een Britse schrijver, geleerde en christelijk apologeet, het best bekend van 'De Kronieken van Narnia'-serie en werken zoals 'Gewoon Christendom' en 'Brieven van een Duivel'. Interessant genoeg stierf ook auteur Aldous Huxley ('Brave New World') op dezelfde dag, wat leidde tot de observatie dat drie van de meest invloedrijke figuren van de 20e eeuw op 22 november 1963 stierven."
        }
      },
      {
        question: {
          en: "What is 18 × 7?",
          es: "¿Cuánto es 18 × 7?",
          de: "Was ist 18 × 7?",
          nl: "Hoeveel is 18 × 7?"
        },
        options: [
          { en: "124", es: "124", de: "124", nl: "124" },
          { en: "120", es: "120", de: "120", nl: "120" },
          { en: "128", es: "128", de: "128", nl: "128" },
          { en: "126", es: "126", de: "126", nl: "126" }
        ],
        correctIndex: 3
      },
      {
        question: {
          en: "Actress Scarlett Johansson, known for playing Black Widow in Marvel films, was born on November 22 of which year?",
          es: "La actriz Scarlett Johansson, conocida por interpretar a Black Widow en las películas de Marvel, nació el 22 de noviembre de qué año?",
          de: "Schauspielerin Scarlett Johansson, bekannt für ihre Rolle als Black Widow in Marvel-Filmen, wurde am 22. November welchen Jahres geboren?",
          nl: "Actrice Scarlett Johansson, bekend van het spelen van Black Widow in Marvel films, werd geboren op 22 november van welk jaar?"
        },
        options: [
          { en: "1980", es: "1980", de: "1980", nl: "1980" },
          { en: "1984", es: "1984", de: "1984", nl: "1984" },
          { en: "1988", es: "1988", de: "1988", nl: "1988" },
          { en: "1982", es: "1982", de: "1982", nl: "1982" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Scarlett Johansson was born on November 22, 1984, in New York City. She has become one of the world's highest-paid actresses and is particularly famous for her role as Natasha Romanoff/Black Widow in the Marvel Cinematic Universe. She has received numerous accolades, including two Academy Award nominations. Her other notable films include 'Lost in Translation', 'Her', 'Marriage Story', and 'Jojo Rabbit'. In 2021, she starred in her standalone Marvel film 'Black Widow'.",
          es: "Scarlett Johansson nació el 22 de noviembre de 1984 en la ciudad de Nueva York. Se ha convertido en una de las actrices mejor pagadas del mundo y es particularmente famosa por su papel como Natasha Romanoff/Black Widow en el Universo Cinematográfico de Marvel. Ha recibido numerosos elogios, incluidas dos nominaciones al Premio de la Academia. Sus otras películas notables incluyen 'Lost in Translation', 'Her', 'Historia de un Matrimonio' y 'Jojo Rabbit'. En 2021, protagonizó su película independiente de Marvel 'Black Widow'.",
          de: "Scarlett Johansson wurde am 22. November 1984 in New York City geboren. Sie ist eine der bestbezahlten Schauspielerinnen der Welt geworden und ist besonders berühmt für ihre Rolle als Natasha Romanoff/Black Widow im Marvel Cinematic Universe. Sie hat zahlreiche Auszeichnungen erhalten, darunter zwei Oscar-Nominierungen. Ihre anderen bemerkenswerten Filme sind 'Lost in Translation', 'Her', 'Marriage Story' und 'Jojo Rabbit'. 2021 spielte sie in ihrem eigenständigen Marvel-Film 'Black Widow' die Hauptrolle.",
          nl: "Scarlett Johansson werd geboren op 22 november 1984 in New York City. Ze is een van de best betaalde actrices ter wereld geworden en is vooral beroemd om haar rol als Natasha Romanoff/Black Widow in het Marvel Cinematic Universe. Ze heeft talrijke onderscheidingen ontvangen, waaronder twee Oscar-nominaties. Haar andere opmerkelijke films zijn onder meer 'Lost in Translation', 'Her', 'Marriage Story' en 'Jojo Rabbit'. In 2021 speelde ze de hoofdrol in haar zelfstandige Marvel-film 'Black Widow'."
        }
      },
      {
        question: {
          en: "What was the name of the presidential motorcade location where JFK was assassinated?",
          es: "¿Cómo se llamaba el lugar de la caravana presidencial donde JFK fue asesinado?",
          de: "Wie hieß der Ort des Präsidentenkonvois, an dem JFK ermordet wurde?",
          nl: "Wat was de naam van de locatie van de presidentiële stoet waar JFK werd vermoord?"
        },
        options: [
          { en: "Capitol Plaza", es: "Plaza del Capitolio", de: "Capitol Plaza", nl: "Capitol Plaza" },
          { en: "Dealey Plaza", es: "Dealey Plaza", de: "Dealey Plaza", nl: "Dealey Plaza" },
          { en: "Freedom Square", es: "Plaza de la Libertad", de: "Freedom Square", nl: "Freedom Square" },
          { en: "Kennedy Plaza", es: "Plaza Kennedy", de: "Kennedy Plaza", nl: "Kennedy Plaza" }
        ],
        correctIndex: 1
      }
    ],

    // Day 23 - November 23rd: Doctor Who first broadcast (1963), First jukebox installed (1889), Billy the Kid born (1859)
    day23: [
      {
        question: {
          en: "The British science fiction TV series 'Doctor Who' first aired on November 23 of which year?",
          es: "La serie de televisión de ciencia ficción británica 'Doctor Who' se emitió por primera vez el 23 de noviembre de qué año?",
          de: "Die britische Science-Fiction-Fernsehserie 'Doctor Who' wurde erstmals am 23. November welchen Jahres ausgestrahlt?",
          nl: "De Britse sciencefiction-tv-serie 'Doctor Who' werd voor het eerst uitgezonden op 23 november van welk jaar?"
        },
        options: [
          { en: "1960", es: "1960", de: "1960", nl: "1960" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1963", es: "1963", de: "1963", nl: "1963" },
          { en: "1967", es: "1967", de: "1967", nl: "1967" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Doctor Who' first aired on November 23, 1963, on BBC Television. The show follows the adventures of the Doctor, a Time Lord from the planet Gallifrey who travels through time and space in the TARDIS (a time machine disguised as a British police box). The show has become the longest-running science fiction series in the world and a British cultural icon. It has featured 14 official Doctors (as of 2023), with the role being 'regenerated' when each actor leaves. The first episode aired just one day after President Kennedy's assassination, which overshadowed its initial broadcast.",
          es: "'Doctor Who' se emitió por primera vez el 23 de noviembre de 1963 en BBC Television. El programa sigue las aventuras del Doctor, un Señor del Tiempo del planeta Gallifrey que viaja a través del tiempo y el espacio en el TARDIS (una máquina del tiempo disfrazada de cabina de policía británica). El programa se ha convertido en la serie de ciencia ficción más longeva del mundo y un icono cultural británico. Ha presentado 14 Doctores oficiales (hasta 2023), y el papel se 'regenera' cuando cada actor se va. El primer episodio se emitió solo un día después del asesinato del presidente Kennedy, lo que eclipsó su transmisión inicial.",
          de: "'Doctor Who' wurde erstmals am 23. November 1963 auf BBC Television ausgestrahlt. Die Show folgt den Abenteuern des Doktors, eines Time Lords vom Planeten Gallifrey, der durch Zeit und Raum in der TARDIS reist (einer Zeitmaschine, die als britische Polizeibox getarnt ist). Die Show ist zur am längsten laufenden Science-Fiction-Serie der Welt und zu einem britischen Kulturphänomen geworden. Sie hat 14 offizielle Doctors (Stand 2023) vorgestellt, wobei die Rolle 'regeneriert' wird, wenn jeder Schauspieler die Show verlässt. Die erste Folge wurde nur einen Tag nach der Ermordung von Präsident Kennedy ausgestrahlt, was ihre anfängliche Ausstrahlung überschattete.",
          nl: "'Doctor Who' werd voor het eerst uitgezonden op 23 november 1963 op BBC Television. De show volgt de avonturen van de Doctor, een Time Lord van de planeet Gallifrey die door tijd en ruimte reist in de TARDIS (een tijdmachine vermomd als een Britse politiebox). De show is de langstlopende sciencefiction-serie ter wereld geworden en een Brits cultureel icoon. Het heeft 14 officiële Doctors gepresenteerd (vanaf 2023), waarbij de rol wordt 'geregenereerd' wanneer elke acteur vertrekt. De eerste aflevering werd slechts één dag na de moord op president Kennedy uitgezonden, wat de eerste uitzending overschaduwde."
        }
      },
      {
        question: {
          en: "The first coin-operated jukebox was installed in a San Francisco saloon on November 23 of which year?",
          es: "El primer jukebox operado con monedas se instaló en un salón de San Francisco el 23 de noviembre de qué año?",
          de: "Die erste münzbetriebene Jukebox wurde am 23. November welchen Jahres in einem Saloon in San Francisco installiert?",
          nl: "De eerste muntgevoede jukebox werd geïnstalleerd in een saloon in San Francisco op 23 november van welk jaar?"
        },
        options: [
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1895", es: "1895", de: "1895", nl: "1895" },
          { en: "1910", es: "1910", de: "1910", nl: "1910" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On November 23, 1889, the first coin-operated phonograph (an early form of jukebox) was installed at the Palais Royale Saloon in San Francisco. It was invented by Louis Glass and William S. Arnold. For a nickel, patrons could listen to music through ear tubes connected to the machine. This marked the beginning of the commercial music entertainment industry. The device was actually an Edison Class M Electric Phonograph modified to accept coins. Within a few months, similar machines appeared across the country, revolutionizing public entertainment.",
          es: "El 23 de noviembre de 1889, el primer fonógrafo operado con monedas (una forma temprana de jukebox) se instaló en el Palais Royale Saloon en San Francisco. Fue inventado por Louis Glass y William S. Arnold. Por un níquel, los clientes podían escuchar música a través de tubos para los oídos conectados a la máquina. Esto marcó el comienzo de la industria comercial de entretenimiento musical. El dispositivo era en realidad un Fonógrafo Eléctrico Edison Clase M modificado para aceptar monedas. En unos pocos meses, aparecieron máquinas similares en todo el país, revolucionando el entretenimiento público.",
          de: "Am 23. November 1889 wurde der erste münzbetriebene Phonograph (eine frühe Form der Jukebox) im Palais Royale Saloon in San Francisco installiert. Er wurde von Louis Glass und William S. Arnold erfunden. Für einen Nickel konnten Gäste Musik über an die Maschine angeschlossene Hörschläuche hören. Dies markierte den Beginn der kommerziellen Musikunterhaltungsindustrie. Das Gerät war tatsächlich ein modifizierter Edison Class M Electric Phonograph, der Münzen akzeptieren konnte. Innerhalb weniger Monate erschienen ähnliche Maschinen im ganzen Land und revolutionierten die öffentliche Unterhaltung.",
          nl: "Op 23 november 1889 werd de eerste muntgevoede fonograaf (een vroege vorm van jukebox) geïnstalleerd in de Palais Royale Saloon in San Francisco. Het werd uitgevonden door Louis Glass en William S. Arnold. Voor een nickel konden klanten naar muziek luisteren via oorbuizen die verbonden waren met de machine. Dit markeerde het begin van de commerciële muziekentertainmentindustrie. Het apparaat was eigenlijk een Edison Class M Elektrische Fonograaf aangepast om munten te accepteren. Binnen een paar maanden verschenen soortgelijke machines door het hele land, wat het openbare entertainment revolutioneerde."
        }
      },
      {
        question: {
          en: "What is 225 ÷ 15?",
          es: "¿Cuánto es 225 ÷ 15?",
          de: "Was ist 225 ÷ 15?",
          nl: "Hoeveel is 225 ÷ 15?"
        },
        options: [
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "The American Old West outlaw Billy the Kid was born on November 23 of which year?",
          es: "El forajido del Viejo Oeste americano Billy the Kid nació el 23 de noviembre de qué año?",
          de: "Der amerikanische Wild-West-Gesetzlose Billy the Kid wurde am 23. November welchen Jahres geboren?",
          nl: "De Amerikaanse Oude Westen outlaw Billy the Kid werd geboren op 23 november van welk jaar?"
        },
        options: [
          { en: "1870", es: "1870", de: "1870", nl: "1870" },
          { en: "1859", es: "1859", de: "1859", nl: "1859" },
          { en: "1865", es: "1865", de: "1865", nl: "1865" },
          { en: "1855", es: "1855", de: "1855", nl: "1855" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Billy the Kid (born Henry McCarty, also known as William H. Bonney) was born on November 23, 1859, in New York City. He became one of the most famous outlaws of the American Old West. Despite his nickname, he was killed at age 21 by Sheriff Pat Garrett in 1881. Legend claims he killed 21 men (one for each year of his life), but historians believe the actual number was closer to nine. He participated in the Lincoln County War in New Mexico and became a folk hero and subject of numerous books, films, and songs.",
          es: "Billy the Kid (nacido Henry McCarty, también conocido como William H. Bonney) nació el 23 de noviembre de 1859 en la ciudad de Nueva York. Se convirtió en uno de los forajidos más famosos del Viejo Oeste americano. A pesar de su apodo, fue asesinado a los 21 años por el Sheriff Pat Garrett en 1881. La leyenda afirma que mató a 21 hombres (uno por cada año de su vida), pero los historiadores creen que el número real fue más cercano a nueve. Participó en la Guerra del Condado de Lincoln en Nuevo México y se convirtió en un héroe popular y tema de numerosos libros, películas y canciones.",
          de: "Billy the Kid (geboren als Henry McCarty, auch bekannt als William H. Bonney) wurde am 23. November 1859 in New York City geboren. Er wurde einer der berühmtesten Gesetzlosen des amerikanischen Wilden Westens. Trotz seines Spitznamens wurde er im Alter von 21 Jahren von Sheriff Pat Garrett im Jahr 1881 getötet. Die Legende behauptet, er habe 21 Männer getötet (einen für jedes Jahr seines Lebens), aber Historiker glauben, dass die tatsächliche Zahl näher bei neun lag. Er nahm am Lincoln County War in New Mexico teil und wurde ein Volksheld und Thema zahlreicher Bücher, Filme und Lieder.",
          nl: "Billy the Kid (geboren als Henry McCarty, ook bekend als William H. Bonney) werd geboren op 23 november 1859 in New York City. Hij werd een van de beroemdste outlaws van het Amerikaanse Oude Westen. Ondanks zijn bijnaam werd hij op 21-jarige leeftijd gedood door Sheriff Pat Garrett in 1881. De legende beweert dat hij 21 mannen doodde (één voor elk jaar van zijn leven), maar historici geloven dat het werkelijke aantal dichter bij negen lag. Hij nam deel aan de Lincoln County War in New Mexico en werd een volksheld en onderwerp van talrijke boeken, films en liedjes."
        }
      },
      {
        question: {
          en: "What iconic police box disguise does the TARDIS from 'Doctor Who' take?",
          es: "¿Qué disfraz icónico de cabina de policía adopta el TARDIS de 'Doctor Who'?",
          de: "Welche ikonische Polizeibox-Verkleidung nimmt die TARDIS aus 'Doctor Who' an?",
          nl: "Welke iconische politiebox-vermomming neemt de TARDIS uit 'Doctor Who' aan?"
        },
        options: [
          { en: "American phone booth", es: "Cabina telefónica americana", de: "Amerikanische Telefonzelle", nl: "Amerikaanse telefooncel" },
          { en: "British police box", es: "Cabina de policía británica", de: "Britische Polizeibox", nl: "Britse politiebox" },
          { en: "Red mailbox", es: "Buzón rojo", de: "Roter Briefkasten", nl: "Rode brievenbus" },
          { en: "Telephone booth", es: "Cabina telefónica", de: "Telefonzelle", nl: "Telefooncel" }
        ],
        correctIndex: 1
      }
    ],

    // Day 24 - November 24th: Darwin publishes Origin of Species (1859), D.B. Cooper hijacks plane (1971), Scott Joplin born (1868)
    day24: [
      {
        question: {
          en: "Charles Darwin's groundbreaking book 'On the Origin of Species' was published on November 24 of which year?",
          es: "El libro revolucionario de Charles Darwin 'El Origen de las Especies' se publicó el 24 de noviembre de qué año?",
          de: "Charles Darwins bahnbrechendes Buch 'Über die Entstehung der Arten' wurde am 24. November welchen Jahres veröffentlicht?",
          nl: "Charles Darwin's baanbrekende boek 'Over het ontstaan van soorten' werd gepubliceerd op 24 november van welk jaar?"
        },
        options: [
          { en: "1845", es: "1845", de: "1845", nl: "1845" },
          { en: "1859", es: "1859", de: "1859", nl: "1859" },
          { en: "1870", es: "1870", de: "1870", nl: "1870" },
          { en: "1855", es: "1855", de: "1855", nl: "1855" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'On the Origin of Species' was published on November 24, 1859, and sold out its initial print run of 1,250 copies on the first day. The book introduced Darwin's theory of evolution through natural selection, fundamentally changing how we understand biology and the development of life on Earth. Darwin had spent over 20 years developing his ideas after his voyage on HMS Beagle. The book caused immediate controversy, particularly regarding its implications for human origins. Despite religious opposition, Darwin's theory became the foundation of modern evolutionary biology and remains one of the most important scientific works ever published.",
          es: "'El Origen de las Especies' se publicó el 24 de noviembre de 1859 y se agotó su tirada inicial de 1,250 copias el primer día. El libro introdujo la teoría de la evolución de Darwin mediante la selección natural, cambiando fundamentalmente cómo entendemos la biología y el desarrollo de la vida en la Tierra. Darwin había pasado más de 20 años desarrollando sus ideas después de su viaje en el HMS Beagle. El libro causó una controversia inmediata, particularmente respecto a sus implicaciones para los orígenes humanos. A pesar de la oposición religiosa, la teoría de Darwin se convirtió en la base de la biología evolutiva moderna y sigue siendo una de las obras científicas más importantes jamás publicadas.",
          de: "'Über die Entstehung der Arten' wurde am 24. November 1859 veröffentlicht und die anfängliche Auflage von 1.250 Exemplaren war am ersten Tag ausverkauft. Das Buch führte Darwins Theorie der Evolution durch natürliche Selektion ein und veränderte grundlegend, wie wir Biologie und die Entwicklung des Lebens auf der Erde verstehen. Darwin hatte über 20 Jahre damit verbracht, seine Ideen nach seiner Reise auf der HMS Beagle zu entwickeln. Das Buch verursachte sofortige Kontroversen, insbesondere hinsichtlich seiner Implikationen für menschliche Ursprünge. Trotz religiöser Opposition wurde Darwins Theorie zur Grundlage der modernen Evolutionsbiologie und bleibt eines der wichtigsten wissenschaftlichen Werke, die jemals veröffentlicht wurden.",
          nl: "'Over het ontstaan van soorten' werd gepubliceerd op 24 november 1859 en de eerste oplage van 1.250 exemplaren was op de eerste dag uitverkocht. Het boek introduceerde Darwin's evolutietheorie door natuurlijke selectie, wat fundamenteel veranderde hoe we biologie en de ontwikkeling van leven op aarde begrijpen. Darwin had meer dan 20 jaar besteed aan het ontwikkelen van zijn ideeën na zijn reis op de HMS Beagle. Het boek veroorzaakte onmiddellijke controverse, vooral met betrekking tot de implicaties voor menselijke oorsprong. Ondanks religieuze oppositie werd Darwin's theorie de basis van moderne evolutionaire biologie en blijft een van de belangrijkste wetenschappelijke werken ooit gepubliceerd."
        }
      },
      {
        question: {
          en: "The infamous skyjacker D.B. Cooper hijacked a plane and parachuted with ransom money on November 24 of which year?",
          es: "El infame secuestrador aéreo D.B. Cooper secuestró un avión y saltó en paracaídas con dinero del rescate el 24 de noviembre de qué año?",
          de: "Der berüchtigte Flugzeugentführer D.B. Cooper entführte ein Flugzeug und sprang mit Lösegeld am 24. November welchen Jahres ab?",
          nl: "De beruchte vliegtuigkaper D.B. Cooper kaapte een vliegtuig en sprong met losgeld op 24 november van welk jaar?"
        },
        options: [
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1975", es: "1975", de: "1975", nl: "1975" },
          { en: "1971", es: "1971", de: "1971", nl: "1971" },
          { en: "1968", es: "1968", de: "1968", nl: "1968" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On November 24, 1971, a man using the alias 'Dan Cooper' (later misreported as 'D.B. Cooper') hijacked Northwest Orient Airlines Flight 305 from Portland to Seattle. He claimed to have a bomb and demanded $200,000 in ransom and four parachutes. After receiving the money and parachutes in Seattle, he ordered the plane to fly to Mexico City. Somewhere over Washington state, he jumped from the plane with the money and was never seen again. Despite an extensive FBI investigation lasting decades, Cooper was never found, making this the only unsolved case of air piracy in commercial aviation history. The case remains one of America's greatest unsolved mysteries.",
          es: "El 24 de noviembre de 1971, un hombre usando el alias 'Dan Cooper' (más tarde reportado erróneamente como 'D.B. Cooper') secuestró el vuelo 305 de Northwest Orient Airlines de Portland a Seattle. Afirmó tener una bomba y exigió $200,000 en rescate y cuatro paracaídas. Después de recibir el dinero y los paracaídas en Seattle, ordenó que el avión volara a la Ciudad de México. En algún lugar sobre el estado de Washington, saltó del avión con el dinero y nunca fue visto de nuevo. A pesar de una extensa investigación del FBI que duró décadas, Cooper nunca fue encontrado, haciendo de este el único caso sin resolver de piratería aérea en la historia de la aviación comercial. El caso sigue siendo uno de los mayores misterios sin resolver de Estados Unidos.",
          de: "Am 24. November 1971 entführte ein Mann mit dem Alias 'Dan Cooper' (später fälschlicherweise als 'D.B. Cooper' gemeldet) Northwest Orient Airlines Flug 305 von Portland nach Seattle. Er behauptete, eine Bombe zu haben, und forderte $200.000 Lösegeld und vier Fallschirme. Nach Erhalt des Geldes und der Fallschirme in Seattle befahl er dem Flugzeug, nach Mexiko-Stadt zu fliegen. Irgendwo über dem Bundesstaat Washington sprang er mit dem Geld aus dem Flugzeug und wurde nie wieder gesehen. Trotz einer umfangreichen FBI-Untersuchung, die Jahrzehnte dauerte, wurde Cooper nie gefunden, was dies zum einzigen ungelösten Fall von Luftpiraterie in der kommerziellen Luftfahrtgeschichte macht. Der Fall bleibt eines der größten ungelösten Mysterien Amerikas.",
          nl: "Op 24 november 1971 kaapte een man met de alias 'Dan Cooper' (later verkeerd gerapporteerd als 'D.B. Cooper') Northwest Orient Airlines vlucht 305 van Portland naar Seattle. Hij beweerde een bom te hebben en eiste $200.000 losgeld en vier parachutes. Na ontvangst van het geld en de parachutes in Seattle beval hij het vliegtuig naar Mexico-Stad te vliegen. Ergens boven de staat Washington sprong hij met het geld uit het vliegtuig en werd nooit meer gezien. Ondanks een uitgebreid FBI-onderzoek dat decennia duurde, werd Cooper nooit gevonden, wat dit de enige onopgeloste zaak van luchtpiraterij in de commerciële luchtvaartgeschiedenis maakt. De zaak blijft een van Amerika's grootste onopgeloste mysteries."
        }
      },
      {
        question: {
          en: "What is 21 + 34?",
          es: "¿Cuánto es 21 + 34?",
          de: "Was ist 21 + 34?",
          nl: "Hoeveel is 21 + 34?"
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
          en: "The 'King of Ragtime' composer Scott Joplin was born on November 24 of which year?",
          es: "El compositor 'Rey del Ragtime' Scott Joplin nació el 24 de noviembre de qué año?",
          de: "Der 'König des Ragtime'-Komponist Scott Joplin wurde am 24. November welchen Jahres geboren?",
          nl: "De 'Koning van Ragtime' componist Scott Joplin werd geboren op 24 november van welk jaar?"
        },
        options: [
          { en: "1875", es: "1875", de: "1875", nl: "1875" },
          { en: "1868", es: "1868", de: "1868", nl: "1868" },
          { en: "1880", es: "1880", de: "1880", nl: "1880" },
          { en: "1860", es: "1860", de: "1860", nl: "1860" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Scott Joplin was born on November 24, 1868, in Texas. He became known as the 'King of Ragtime' and was one of the most influential composers in early American music. His most famous composition, 'The Maple Leaf Rag' (1899), was the first instrumental sheet music to sell over one million copies. Joplin composed over 100 ragtime pieces, including 'The Entertainer', which gained renewed popularity in the 1970s as the theme music for the film 'The Sting'. Despite his success during his lifetime, Joplin died in poverty in 1917. He was posthumously awarded the Pulitzer Prize in 1976.",
          es: "Scott Joplin nació el 24 de noviembre de 1868 en Texas. Se hizo conocido como el 'Rey del Ragtime' y fue uno de los compositores más influyentes en la música estadounidense temprana. Su composición más famosa, 'The Maple Leaf Rag' (1899), fue la primera partitura instrumental en vender más de un millón de copias. Joplin compuso más de 100 piezas de ragtime, incluyendo 'The Entertainer', que ganó una popularidad renovada en la década de 1970 como música temática de la película 'The Sting'. A pesar de su éxito durante su vida, Joplin murió en la pobreza en 1917. Recibió póstumamente el Premio Pulitzer en 1976.",
          de: "Scott Joplin wurde am 24. November 1868 in Texas geboren. Er wurde als 'König des Ragtime' bekannt und war einer der einflussreichsten Komponisten in der frühen amerikanischen Musik. Seine berühmteste Komposition, 'The Maple Leaf Rag' (1899), war das erste instrumentale Notenblatt, das über eine Million Exemplare verkaufte. Joplin komponierte über 100 Ragtime-Stücke, darunter 'The Entertainer', das in den 1970er Jahren als Titelmusik für den Film 'The Sting' erneute Popularität erlangte. Trotz seines Erfolgs zu Lebzeiten starb Joplin 1917 in Armut. Er wurde posthum 1976 mit dem Pulitzer-Preis ausgezeichnet.",
          nl: "Scott Joplin werd geboren op 24 november 1868 in Texas. Hij werd bekend als de 'Koning van Ragtime' en was een van de meest invloedrijke componisten in vroege Amerikaanse muziek. Zijn beroemdste compositie, 'The Maple Leaf Rag' (1899), was het eerste instrumentale bladmuziek dat meer dan een miljoen exemplaren verkocht. Joplin componeerde meer dan 100 ragtime-stukken, waaronder 'The Entertainer', dat hernieuwde populariteit verwierf in de jaren 1970 als themamuziek voor de film 'The Sting'. Ondanks zijn succes tijdens zijn leven stierf Joplin in armoede in 1917. Hij kreeg postuum de Pulitzer Prize in 1976."
        }
      },
      {
        question: {
          en: "What key concept did Darwin's 'Origin of Species' introduce to explain how species evolve?",
          es: "¿Qué concepto clave introdujo 'El Origen de las Especies' de Darwin para explicar cómo evolucionan las especies?",
          de: "Welches Schlüsselkonzept führte Darwins 'Über die Entstehung der Arten' ein, um zu erklären, wie Arten sich entwickeln?",
          nl: "Welk sleutelconcept introduceerde Darwin's 'Over het ontstaan van soorten' om uit te leggen hoe soorten evolueren?"
        },
        options: [
          { en: "Divine creation", es: "Creación divina", de: "Göttliche Schöpfung", nl: "Goddelijke schepping" },
          { en: "Natural selection", es: "Selección natural", de: "Natürliche Selektion", nl: "Natuurlijke selectie" },
          { en: "Spontaneous generation", es: "Generación espontánea", de: "Spontane Generation", nl: "Spontane generatie" },
          { en: "Intelligent design", es: "Diseño inteligente", de: "Intelligentes Design", nl: "Intelligent ontwerp" }
        ],
        correctIndex: 1
      }
    ],

    // Day 25 - November 25th: Suriname independence (1975), Pope John XXIII dies (1963), Andrew Carnegie born (1835)
    day25: [
      {
        question: {
          en: "Suriname gained independence from which European country on November 25, 1975?",
          es: "Surinam obtuvo la independencia de qué país europeo el 25 de noviembre de 1975?",
          de: "Suriname erlangte am 25. November 1975 die Unabhängigkeit von welchem europäischen Land?",
          nl: "Suriname verwierf op 25 november 1975 onafhankelijkheid van welk Europees land?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Netherlands", es: "Países Bajos", de: "Niederlande", nl: "Nederland" },
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Suriname (formerly Dutch Guiana) gained independence from the Netherlands on November 25, 1975. Located on the northern coast of South America, Suriname had been a Dutch colony since 1667. Upon independence, about one-third of Suriname's population emigrated to the Netherlands, fearing economic and political instability. The country has a remarkably diverse population with influences from indigenous peoples, Africans, Indians, Indonesians, Chinese, and Dutch colonizers. Dutch remains the official language. Suriname is the smallest independent country in South America.",
          es: "Surinam (anteriormente Guayana Holandesa) obtuvo la independencia de los Países Bajos el 25 de noviembre de 1975. Ubicado en la costa norte de América del Sur, Surinam había sido una colonia holandesa desde 1667. Al momento de la independencia, aproximadamente un tercio de la población de Surinam emigró a los Países Bajos, temiendo inestabilidad económica y política. El país tiene una población notablemente diversa con influencias de pueblos indígenas, africanos, indios, indonesios, chinos y colonizadores holandeses. El holandés sigue siendo el idioma oficial. Surinam es el país independiente más pequeño de América del Sur.",
          de: "Suriname (ehemals Niederländisch-Guayana) erlangte am 25. November 1975 die Unabhängigkeit von den Niederlanden. An der Nordküste Südamerikas gelegen, war Suriname seit 1667 eine niederländische Kolonie. Bei der Unabhängigkeit wanderte etwa ein Drittel der Bevölkerung Surinames in die Niederlande aus, aus Angst vor wirtschaftlicher und politischer Instabilität. Das Land hat eine bemerkenswert vielfältige Bevölkerung mit Einflüssen von indigenen Völkern, Afrikanern, Indern, Indonesiern, Chinesen und niederländischen Kolonisatoren. Niederländisch bleibt die Amtssprache. Suriname ist das kleinste unabhängige Land in Südamerika.",
          nl: "Suriname (voorheen Nederlands-Guiana) verwierf op 25 november 1975 onafhankelijkheid van Nederland. Gelegen aan de noordkust van Zuid-Amerika, was Suriname sinds 1667 een Nederlandse kolonie. Bij de onafhankelijkheid emigreerde ongeveer een derde van de bevolking van Suriname naar Nederland, uit angst voor economische en politieke instabiliteit. Het land heeft een opmerkelijk diverse bevolking met invloeden van inheemse volkeren, Afrikanen, Indiërs, Indonesiërs, Chinezen en Nederlandse kolonisatoren. Nederlands blijft de officiële taal. Suriname is het kleinste onafhankelijke land in Zuid-Amerika."
        }
      },
      {
        question: {
          en: "Pope John XXIII, who convened the Second Vatican Council, died on November 25 of which year?",
          es: "El Papa Juan XXIII, quien convocó el Concilio Vaticano Segundo, murió el 25 de noviembre de qué año?",
          de: "Papst Johannes XXIII., der das Zweite Vatikanische Konzil einberief, starb am 25. November welchen Jahres?",
          nl: "Paus Johannes XXIII, die het Tweede Vaticaans Concilie bijeenriep, stierf op 25 november van welk jaar?"
        },
        options: [
          { en: "1960", es: "1960", de: "1960", nl: "1960" },
          { en: "1963", es: "1963", de: "1963", nl: "1963" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1958", es: "1958", de: "1958", nl: "1958" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Pope John XXIII died on June 3, 1963 (not November 25 - this appears to be an error in the source material). However, he was beatified on September 3, 2000, and canonized as a saint on April 27, 2014. Known as 'Good Pope John', he served as Pope from 1958-1963 and is most famous for convening the Second Vatican Council (Vatican II), which modernized many Catholic Church practices. He was known for his warmth, humor, and efforts at dialogue with other Christian denominations and religions. His encyclical 'Pacem in Terris' promoted world peace and human rights.",
          es: "El Papa Juan XXIII murió el 3 de junio de 1963 (no el 25 de noviembre - esto parece ser un error en el material fuente). Sin embargo, fue beatificado el 3 de septiembre de 2000 y canonizado como santo el 27 de abril de 2014. Conocido como el 'Buen Papa Juan', sirvió como Papa de 1958 a 1963 y es más famoso por convocar el Concilio Vaticano Segundo (Vaticano II), que modernizó muchas prácticas de la Iglesia Católica. Era conocido por su calidez, humor y esfuerzos de diálogo con otras denominaciones cristianas y religiones. Su encíclica 'Pacem in Terris' promovió la paz mundial y los derechos humanos.",
          de: "Papst Johannes XXIII. starb am 3. Juni 1963 (nicht am 25. November - dies scheint ein Fehler im Quellenmaterial zu sein). Er wurde jedoch am 3. September 2000 seliggesprochen und am 27. April 2014 heiliggesprochen. Bekannt als 'Guter Papst Johannes', diente er von 1958 bis 1963 als Papst und ist am berühmtesten für die Einberufung des Zweiten Vatikanischen Konzils (Vatikan II), das viele Praktiken der katholischen Kirche modernisierte. Er war bekannt für seine Wärme, seinen Humor und seine Bemühungen um Dialog mit anderen christlichen Konfessionen und Religionen. Seine Enzyklika 'Pacem in Terris' förderte den Weltfrieden und die Menschenrechte.",
          nl: "Paus Johannes XXIII stierf op 3 juni 1963 (niet op 25 november - dit lijkt een fout in het bronmateriaal). Hij werd echter zalig verklaard op 3 september 2000 en heilig verklaard op 27 april 2014. Bekend als 'Goede Paus Johannes', diende hij als paus van 1958-1963 en is het meest bekend voor het bijeenroepen van het Tweede Vaticaans Concilie (Vaticanum II), dat veel praktijken van de katholieke kerk moderniseerde. Hij stond bekend om zijn warmte, humor en inspanningen voor dialoog met andere christelijke denominaties en religies. Zijn encycliek 'Pacem in Terris' promootte wereldvrede en mensenrechten."
        }
      },
      {
        question: {
          en: "What is 16 × 9?",
          es: "¿Cuánto es 16 × 9?",
          de: "Was ist 16 × 9?",
          nl: "Hoeveel is 16 × 9?"
        },
        options: [
          { en: "142", es: "142", de: "142", nl: "142" },
          { en: "146", es: "146", de: "146", nl: "146" },
          { en: "144", es: "144", de: "144", nl: "144" },
          { en: "140", es: "140", de: "140", nl: "140" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "Scottish-American industrialist and philanthropist Andrew Carnegie was born on November 25 of which year?",
          es: "El industrial y filántropo escocés-americano Andrew Carnegie nació el 25 de noviembre de qué año?",
          de: "Der schottisch-amerikanische Industrielle und Philanthrop Andrew Carnegie wurde am 25. November welchen Jahres geboren?",
          nl: "De Schots-Amerikaanse industrieel en filantroop Andrew Carnegie werd geboren op 25 november van welk jaar?"
        },
        options: [
          { en: "1845", es: "1845", de: "1845", nl: "1845" },
          { en: "1835", es: "1835", de: "1835", nl: "1835" },
          { en: "1825", es: "1825", de: "1825", nl: "1825" },
          { en: "1850", es: "1850", de: "1850", nl: "1850" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Andrew Carnegie was born on November 25, 1835, in Scotland. He immigrated to the United States with his family in 1848 and became one of the wealthiest Americans in history through his steel empire. Carnegie believed in the 'Gospel of Wealth' - that the wealthy have a moral obligation to give away their fortunes. He donated over $350 million (equivalent to billions today) to educational, cultural, and scientific institutions, including building 2,509 libraries worldwide. Carnegie Hall in New York and Carnegie Mellon University are named after him. He died in 1919.",
          es: "Andrew Carnegie nació el 25 de noviembre de 1835 en Escocia. Emigró a Estados Unidos con su familia en 1848 y se convirtió en uno de los estadounidenses más ricos de la historia a través de su imperio del acero. Carnegie creía en el 'Evangelio de la Riqueza': que los ricos tienen una obligación moral de regalar sus fortunas. Donó más de $350 millones (equivalente a miles de millones hoy) a instituciones educativas, culturales y científicas, incluyendo la construcción de 2,509 bibliotecas en todo el mundo. Carnegie Hall en Nueva York y Carnegie Mellon University llevan su nombre. Murió en 1919.",
          de: "Andrew Carnegie wurde am 25. November 1835 in Schottland geboren. Er wanderte 1848 mit seiner Familie in die Vereinigten Staaten aus und wurde durch sein Stahlimperium zu einem der reichsten Amerikaner der Geschichte. Carnegie glaubte an das 'Evangelium des Reichtums' - dass die Reichen eine moralische Verpflichtung haben, ihre Vermögen zu verschenken. Er spendete über $350 Millionen (heute gleichwertig mit Milliarden) an Bildungs-, Kultur- und Wissenschaftsinstitutionen, einschließlich des Baus von 2.509 Bibliotheken weltweit. Die Carnegie Hall in New York und die Carnegie Mellon University sind nach ihm benannt. Er starb 1919.",
          nl: "Andrew Carnegie werd geboren op 25 november 1835 in Schotland. Hij emigreerde in 1848 met zijn familie naar de Verenigde Staten en werd een van de rijkste Amerikanen in de geschiedenis door zijn staalimperium. Carnegie geloofde in het 'Evangelie van Rijkdom' - dat de rijken een morele verplichting hebben om hun vermogens weg te geven. Hij schonk meer dan $350 miljoen (equivalent aan miljarden vandaag) aan educatieve, culturele en wetenschappelijke instellingen, waaronder het bouwen van 2.509 bibliotheken wereldwijd. Carnegie Hall in New York en Carnegie Mellon University zijn naar hem vernoemd. Hij stierf in 1919."
        }
      },
      {
        question: {
          en: "What major religious reform did Pope John XXIII initiate?",
          es: "¿Qué reforma religiosa importante inició el Papa Juan XXIII?",
          de: "Welche wichtige religiöse Reform initiierte Papst Johannes XXIII.?",
          nl: "Welke belangrijke religieuze hervorming initieerde Paus Johannes XXIII?"
        },
        options: [
          { en: "The Protestant Reformation", es: "La Reforma Protestante", de: "Die protestantische Reformation", nl: "De Protestantse Reformatie" },
          { en: "The Second Vatican Council", es: "El Concilio Vaticano Segundo", de: "Das Zweite Vatikanische Konzil", nl: "Het Tweede Vaticaans Concilie" },
          { en: "The Inquisition", es: "La Inquisición", de: "Die Inquisition", nl: "De Inquisitie" },
          { en: "The Crusades", es: "Las Cruzadas", de: "Die Kreuzzüge", nl: "De Kruistochten" }
        ],
        correctIndex: 1
      }
    ],

    // Day 26 - November 26th: King Tut's tomb opened (1922), Sojourner Truth dies (1883), Tina Turner born (1939)
    day26: [
      {
        question: {
          en: "Whose ancient Egyptian tomb was opened by Howard Carter on November 26, 1922?",
          es: "¿Qué tumba del antiguo Egipto fue abierta por Howard Carter el 26 de noviembre de 1922?",
          de: "Welches altägyptische Grab wurde am 26. November 1922 von Howard Carter geöffnet?",
          nl: "Wiens oude Egyptische graftombe werd geopend door Howard Carter op 26 november 1922?"
        },
        options: [
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
          { en: "Ramses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "King Tutankhamun", es: "Rey Tutankamón", de: "König Tutanchamun", nl: "Koning Toetanchamon" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On November 26, 1922, British archaeologist Howard Carter and his sponsor Lord Carnarvon became the first people in over 3,000 years to enter King Tutankhamun's tomb in Egypt's Valley of the Kings. The tomb, largely intact and filled with treasures, provided unprecedented insights into ancient Egyptian culture and burial practices. King Tut died around age 19 in 1323 BCE. The discovery captured worldwide imagination and sparked renewed interest in Egyptology. The famous golden death mask of Tutankhamun became one of the most iconic symbols of ancient Egypt. Carter spent the next decade cataloging the tomb's contents.",
          es: "El 26 de noviembre de 1922, el arqueólogo británico Howard Carter y su patrocinador Lord Carnarvon se convirtieron en las primeras personas en más de 3,000 años en entrar a la tumba del Rey Tutankamón en el Valle de los Reyes de Egipto. La tumba, en gran parte intacta y llena de tesoros, proporcionó conocimientos sin precedentes sobre la cultura del antiguo Egipto y las prácticas funerarias. El Rey Tut murió alrededor de los 19 años en 1323 a.C. El descubrimiento capturó la imaginación mundial y despertó un renovado interés en la egiptología. La famosa máscara funeraria dorada de Tutankamón se convirtió en uno de los símbolos más icónicos del antiguo Egipto. Carter pasó la siguiente década catalogando el contenido de la tumba.",
          de: "Am 26. November 1922 wurden der britische Archäologe Howard Carter und sein Sponsor Lord Carnarvon die ersten Menschen seit über 3.000 Jahren, die das Grab von König Tutanchamun im ägyptischen Tal der Könige betraten. Das größtenteils intakte und mit Schätzen gefüllte Grab lieferte beispiellose Einblicke in die altägyptische Kultur und Bestattungspraktiken. König Tut starb um 1323 v. Chr. im Alter von etwa 19 Jahren. Die Entdeckung fesselte die weltweite Fantasie und löste ein erneutes Interesse an der Ägyptologie aus. Die berühmte goldene Totenmaske von Tutanchamun wurde zu einem der ikonischsten Symbole des alten Ägypten. Carter verbrachte das nächste Jahrzehnt damit, den Inhalt des Grabes zu katalogisieren.",
          nl: "Op 26 november 1922 werden de Britse archeoloog Howard Carter en zijn sponsor Lord Carnarvon de eerste mensen in meer dan 3.000 jaar die het graf van koning Toetanchamon betraden in de Vallei der Koningen in Egypte. Het graf, grotendeels intact en gevuld met schatten, bood ongekende inzichten in de oude Egyptische cultuur en begrafenispraktijken. Koning Toet stierf rond zijn 19e jaar in 1323 v.Chr. De ontdekking greep de wereldwijde verbeelding aan en wakkerde hernieuwde interesse in de egyptologie aan. Het beroemde gouden dodenmasker van Toetanchamon werd een van de meest iconische symbolen van het oude Egypte. Carter bracht het volgende decennium door met het catalogiseren van de inhoud van het graf."
        }
      },
      {
        question: {
          en: "Abolitionist and women's rights activist Sojourner Truth died on November 26 of which year?",
          es: "La abolicionista y activista por los derechos de las mujeres Sojourner Truth murió el 26 de noviembre de qué año?",
          de: "Die Abolitionistin und Frauenrechtsaktivistin Sojourner Truth starb am 26. November welchen Jahres?",
          nl: "Abolitioniste en vrouwenrechtenactiviste Sojourner Truth stierf op 26 november van welk jaar?"
        },
        options: [
          { en: "1863", es: "1863", de: "1863", nl: "1863" },
          { en: "1873", es: "1873", de: "1873", nl: "1873" },
          { en: "1893", es: "1893", de: "1893", nl: "1893" },
          { en: "1883", es: "1883", de: "1883", nl: "1883" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Sojourner Truth died on November 26, 1883, in Battle Creek, Michigan. Born into slavery around 1797 as Isabella Baumfree, she escaped to freedom in 1826 and became one of the most powerful advocates for abolition and women's rights. Her famous 'Ain't I a Woman?' speech, delivered at the 1851 Women's Convention in Ohio, became a defining moment in feminist history. She was the first Black woman to successfully sue a white man in court to recover her son. Truth met with President Lincoln in 1864 and continued her activism into old age. She dictated her autobiography, 'The Narrative of Sojourner Truth', as she never learned to read or write.",
          es: "Sojourner Truth murió el 26 de noviembre de 1883 en Battle Creek, Michigan. Nacida en esclavitud alrededor de 1797 como Isabella Baumfree, escapó a la libertad en 1826 y se convirtió en una de las defensoras más poderosas de la abolición y los derechos de las mujeres. Su famoso discurso '¿Acaso no soy una mujer?' pronunciado en la Convención de Mujeres de 1851 en Ohio, se convirtió en un momento definitorio en la historia feminista. Fue la primera mujer negra en demandar con éxito a un hombre blanco en la corte para recuperar a su hijo. Truth se reunió con el presidente Lincoln en 1864 y continuó su activismo hasta la vejez. Dictó su autobiografía, 'La Narrativa de Sojourner Truth', ya que nunca aprendió a leer ni escribir.",
          de: "Sojourner Truth starb am 26. November 1883 in Battle Creek, Michigan. Geboren in die Sklaverei um 1797 als Isabella Baumfree, entkam sie 1826 in die Freiheit und wurde eine der mächtigsten Befürworterinnen der Abschaffung der Sklaverei und der Frauenrechte. Ihre berühmte Rede 'Bin ich etwa keine Frau?', die sie 1851 auf der Frauenkonvention in Ohio hielt, wurde zu einem entscheidenden Moment in der feministischen Geschichte. Sie war die erste schwarze Frau, die erfolgreich einen weißen Mann vor Gericht verklagte, um ihren Sohn zurückzubekommen. Truth traf sich 1864 mit Präsident Lincoln und setzte ihren Aktivismus bis ins hohe Alter fort. Sie diktierte ihre Autobiografie 'Die Erzählung von Sojourner Truth', da sie nie lesen oder schreiben lernte.",
          nl: "Sojourner Truth stierf op 26 november 1883 in Battle Creek, Michigan. Geboren in slavernij rond 1797 als Isabella Baumfree, ontsnapte ze in 1826 naar de vrijheid en werd een van de krachtigste voorvechters van de afschaffing van de slavernij en vrouwenrechten. Haar beroemde 'Ben ik geen vrouw?' toespraak, gehouden op de Women's Convention van 1851 in Ohio, werd een bepalend moment in de feministische geschiedenis. Ze was de eerste zwarte vrouw die met succes een witte man aanklaagde om haar zoon terug te krijgen. Truth ontmoette president Lincoln in 1864 en zette haar activisme voort tot op hoge leeftijd. Ze dicteerde haar autobiografie, 'Het Verhaal van Sojourner Truth', omdat ze nooit leerde lezen of schrijven."
        }
      },
      {
        question: {
          en: "What is 18 × 7?",
          es: "¿Cuánto es 18 × 7?",
          de: "Was ist 18 × 7?",
          nl: "Hoeveel is 18 × 7?"
        },
        options: [
          { en: "124", es: "124", de: "124", nl: "124" },
          { en: "126", es: "126", de: "126", nl: "126" },
          { en: "120", es: "120", de: "120", nl: "120" },
          { en: "128", es: "128", de: "128", nl: "128" }
        ],
        correctIndex: 1
      },
      {
        question: {
          en: "Rock and soul legend Tina Turner was born on November 26 of which year?",
          es: "La leyenda del rock y soul Tina Turner nació el 26 de noviembre de qué año?",
          de: "Die Rock- und Soul-Legende Tina Turner wurde am 26. November welchen Jahres geboren?",
          nl: "Rock- en soullegende Tina Turner werd geboren op 26 november van welk jaar?"
        },
        options: [
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1949", es: "1949", de: "1949", nl: "1949" },
          { en: "1939", es: "1939", de: "1939", nl: "1939" },
          { en: "1935", es: "1935", de: "1935", nl: "1935" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Tina Turner was born Anna Mae Bullock on November 26, 1939, in Nutbush, Tennessee. She became the 'Queen of Rock 'n' Roll' with a career spanning over 60 years. Known for hits like 'What's Love Got to Do with It', 'Proud Mary', and 'Simply the Best', she sold over 200 million records worldwide. After leaving an abusive marriage to Ike Turner, she staged one of music's greatest comebacks in the 1980s. Turner won 12 Grammy Awards and was inducted into the Rock and Roll Hall of Fame twice. She passed away on May 24, 2023, in Switzerland, where she had lived since the 1990s.",
          es: "Tina Turner nació como Anna Mae Bullock el 26 de noviembre de 1939 en Nutbush, Tennessee. Se convirtió en la 'Reina del Rock 'n' Roll' con una carrera que abarcó más de 60 años. Conocida por éxitos como 'What's Love Got to Do with It', 'Proud Mary' y 'Simply the Best', vendió más de 200 millones de discos en todo el mundo. Después de dejar un matrimonio abusivo con Ike Turner, protagonizó uno de los mejores regresos de la historia de la música en la década de 1980. Turner ganó 12 premios Grammy y fue incluida dos veces en el Salón de la Fama del Rock and Roll. Falleció el 24 de mayo de 2023 en Suiza, donde había vivido desde la década de 1990.",
          de: "Tina Turner wurde am 26. November 1939 als Anna Mae Bullock in Nutbush, Tennessee geboren. Sie wurde die 'Königin des Rock 'n' Roll' mit einer Karriere über 60 Jahre. Bekannt für Hits wie 'What's Love Got to Do with It', 'Proud Mary' und 'Simply the Best', verkaufte sie weltweit über 200 Millionen Platten. Nachdem sie eine missbräuchliche Ehe mit Ike Turner verlassen hatte, inszenierte sie in den 1980er Jahren eines der größten Comebacks der Musikgeschichte. Turner gewann 12 Grammy Awards und wurde zweimal in die Rock and Roll Hall of Fame aufgenommen. Sie verstarb am 24. Mai 2023 in der Schweiz, wo sie seit den 1990er Jahren gelebt hatte.",
          nl: "Tina Turner werd geboren als Anna Mae Bullock op 26 november 1939 in Nutbush, Tennessee. Ze werd de 'Queen of Rock 'n' Roll' met een carrière van meer dan 60 jaar. Bekend van hits zoals 'What's Love Got to Do with It', 'Proud Mary' en 'Simply the Best', verkocht ze wereldwijd meer dan 200 miljoen platen. Na het verlaten van een misbruikend huwelijk met Ike Turner, maakte ze in de jaren 1980 een van de grootste comebacks in de muziekgeschiedenis. Turner won 12 Grammy Awards en werd tweemaal opgenomen in de Rock and Roll Hall of Fame. Ze overleed op 24 mei 2023 in Zwitserland, waar ze sinds de jaren 1990 woonde."
        }
      },
      {
        question: {
          en: "What nickname is often given to Tina Turner?",
          es: "¿Qué apodo se le da a menudo a Tina Turner?",
          de: "Welchen Spitznamen trägt Tina Turner oft?",
          nl: "Welke bijnaam wordt vaak aan Tina Turner gegeven?"
        },
        options: [
          { en: "Queen of Pop", es: "Reina del Pop", de: "Queen of Pop", nl: "Queen of Pop" },
          { en: "First Lady of Soul", es: "Primera Dama del Soul", de: "First Lady of Soul", nl: "First Lady of Soul" },
          { en: "Queen of Rock 'n' Roll", es: "Reina del Rock 'n' Roll", de: "Königin des Rock 'n' Roll", nl: "Queen of Rock 'n' Roll" },
          { en: "Princess of R&B", es: "Princesa del R&B", de: "Prinzessin des R&B", nl: "Prinses van R&B" }
        ],
        correctIndex: 2
      }
    ],

    // Day 27 - November 27th: Marshall Plan proposed (1945), Jimi Hendrix born (1942), Bruce Lee born (1940)
    day27: [
      {
        question: {
          en: "U.S. Secretary of State George Marshall proposed his European Recovery Program on November 27 of which year?",
          es: "El Secretario de Estado de EE.UU. George Marshall propuso su Programa de Recuperación Europea el 27 de noviembre de qué año?",
          de: "US-Außenminister George Marshall schlug sein Europäisches Wiederaufbauprogramm am 27. November welchen Jahres vor?",
          nl: "De Amerikaanse minister van Buitenlandse Zaken George Marshall stelde zijn Europese herstelplan voor op 27 november van welk jaar?"
        },
        options: [
          { en: "1947", es: "1947", de: "1947", nl: "1947" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1948", es: "1948", de: "1948", nl: "1948" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" }
        ],
        correctIndex: 1,
        explanation: {
          en: "While Marshall's famous speech outlining the plan was delivered at Harvard University on June 5, 1947, the formal proposal to Congress occurred on November 27, 1945 (note: historical records suggest 1947 is more accurate). The Marshall Plan provided over $13 billion (over $150 billion in today's dollars) to help rebuild Western European economies after World War II. It ran from 1948 to 1951 and is credited with preventing the spread of Soviet influence, revitalizing European industry, and fostering European economic integration. Marshall won the Nobel Peace Prize in 1953 for this initiative. The plan helped countries including the UK, France, West Germany, and Italy.",
          es: "Aunque el famoso discurso de Marshall delineando el plan se pronunció en la Universidad de Harvard el 5 de junio de 1947, la propuesta formal al Congreso ocurrió el 27 de noviembre de 1945 (nota: los registros históricos sugieren que 1947 es más preciso). El Plan Marshall proporcionó más de $13 mil millones (más de $150 mil millones en dólares actuales) para ayudar a reconstruir las economías de Europa Occidental después de la Segunda Guerra Mundial. Se ejecutó de 1948 a 1951 y se le atribuye haber prevenido la expansión de la influencia soviética, revitalizado la industria europea y fomentado la integración económica europea. Marshall ganó el Premio Nobel de la Paz en 1953 por esta iniciativa. El plan ayudó a países como el Reino Unido, Francia, Alemania Occidental e Italia.",
          de: "Während Marshalls berühmte Rede zur Darlegung des Plans am 5. Juni 1947 an der Harvard University gehalten wurde, erfolgte der formelle Vorschlag an den Kongress am 27. November 1945 (Hinweis: Historische Aufzeichnungen deuten darauf hin, dass 1947 genauer ist). Der Marshallplan stellte über 13 Milliarden Dollar (über 150 Milliarden Dollar in heutigen Werten) zur Verfügung, um beim Wiederaufbau der westeuropäischen Volkswirtschaften nach dem Zweiten Weltkrieg zu helfen. Er lief von 1948 bis 1951 und wird mit der Verhinderung der Ausbreitung des sowjetischen Einflusses, der Wiederbelebung der europäischen Industrie und der Förderung der europäischen wirtschaftlichen Integration in Verbindung gebracht. Marshall erhielt 1953 den Friedensnobelpreis für diese Initiative. Der Plan half Ländern wie Großbritannien, Frankreich, Westdeutschland und Italien.",
          nl: "Hoewel Marshalls beroemde toespraak waarin het plan werd geschetst op 5 juni 1947 aan Harvard University werd gehouden, vond het formele voorstel aan het Congres plaats op 27 november 1945 (opmerking: historische bronnen suggereren dat 1947 nauwkeuriger is). Het Marshallplan verstrekte meer dan $13 miljard (meer dan $150 miljard in hedendaagse dollars) om te helpen bij het herbouwen van West-Europese economieën na de Tweede Wereldoorlog. Het liep van 1948 tot 1951 en wordt gecrediteerd voor het voorkomen van de verspreiding van Sovjet-invloed, het nieuw leven inblazen van de Europese industrie en het bevorderen van Europese economische integratie. Marshall won de Nobelprijs voor de Vrede in 1953 voor dit initiatief. Het plan hielp landen waaronder het VK, Frankrijk, West-Duitsland en Italië."
        }
      },
      {
        question: {
          en: "Legendary guitarist Jimi Hendrix was born on November 27 of which year?",
          es: "El legendario guitarrista Jimi Hendrix nació el 27 de noviembre de qué año?",
          de: "Der legendäre Gitarrist Jimi Hendrix wurde am 27. November welchen Jahres geboren?",
          nl: "De legendarische gitarist Jimi Hendrix werd geboren op 27 november van welk jaar?"
        },
        options: [
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1942", es: "1942", de: "1942", nl: "1942" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1938", es: "1938", de: "1938", nl: "1938" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jimi Hendrix was born Johnny Allen Hendrix on November 27, 1942, in Seattle, Washington. Widely regarded as one of the most influential electric guitarists in rock history, he revolutionized the instrument with innovative techniques and use of feedback and distortion. His iconic performances at Woodstock (1969) and the Monterey Pop Festival (1967) are legendary. Despite a career lasting only four years, he produced classics like 'Purple Haze', 'Hey Joe', and 'All Along the Watchtower'. Hendrix died on September 18, 1970, at age 27. He was inducted into the Rock and Roll Hall of Fame in 1992.",
          es: "Jimi Hendrix nació como Johnny Allen Hendrix el 27 de noviembre de 1942 en Seattle, Washington. Ampliamente considerado como uno de los guitarristas eléctricos más influyentes en la historia del rock, revolucionó el instrumento con técnicas innovadoras y el uso de retroalimentación y distorsión. Sus icónicas actuaciones en Woodstock (1969) y el Festival Pop de Monterey (1967) son legendarias. A pesar de una carrera de solo cuatro años, produjo clásicos como 'Purple Haze', 'Hey Joe' y 'All Along the Watchtower'. Hendrix murió el 18 de septiembre de 1970, a los 27 años. Fue incluido en el Salón de la Fama del Rock and Roll en 1992.",
          de: "Jimi Hendrix wurde am 27. November 1942 als Johnny Allen Hendrix in Seattle, Washington geboren. Weithin als einer der einflussreichsten E-Gitarristen der Rockgeschichte angesehen, revolutionierte er das Instrument mit innovativen Techniken und der Verwendung von Feedback und Verzerrung. Seine ikonischen Auftritte bei Woodstock (1969) und dem Monterey Pop Festival (1967) sind legendär. Trotz einer nur vierjährigen Karriere produzierte er Klassiker wie 'Purple Haze', 'Hey Joe' und 'All Along the Watchtower'. Hendrix starb am 18. September 1970 im Alter von 27 Jahren. Er wurde 1992 in die Rock and Roll Hall of Fame aufgenommen.",
          nl: "Jimi Hendrix werd geboren als Johnny Allen Hendrix op 27 november 1942 in Seattle, Washington. Algemeen beschouwd als een van de meest invloedrijke elektrische gitaristen in de rockgeschiedenis, revolutioneerde hij het instrument met innovatieve technieken en het gebruik van feedback en vervorming. Zijn iconische optredens bij Woodstock (1969) en het Monterey Pop Festival (1967) zijn legendarisch. Ondanks een carrière van slechts vier jaar, produceerde hij klassiekers zoals 'Purple Haze', 'Hey Joe' en 'All Along the Watchtower'. Hendrix overleed op 18 september 1970 op 27-jarige leeftijd. Hij werd opgenomen in de Rock and Roll Hall of Fame in 1992."
        }
      },
      {
        question: {
          en: "What is 144 ÷ 12?",
          es: "¿Cuánto es 144 ÷ 12?",
          de: "Was ist 144 ÷ 12?",
          nl: "Hoeveel is 144 ÷ 12?"
        },
        options: [
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "14", es: "14", de: "14", nl: "14" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "Martial arts legend and actor Bruce Lee was born on November 27 of which year?",
          es: "La leyenda de las artes marciales y actor Bruce Lee nació el 27 de noviembre de qué año?",
          de: "Die Kampfkunstlegende und Schauspieler Bruce Lee wurde am 27. November welchen Jahres geboren?",
          nl: "Martial arts-legende en acteur Bruce Lee werd geboren op 27 november van welk jaar?"
        },
        options: [
          { en: "1938", es: "1938", de: "1938", nl: "1938" },
          { en: "1942", es: "1942", de: "1942", nl: "1942" },
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1935", es: "1935", de: "1935", nl: "1935" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Bruce Lee was born Lee Jun-fan on November 27, 1940, in San Francisco's Chinatown during a brief return of his parents to the U.S. He became a cultural icon who revolutionized martial arts films and bridged Eastern and Western cinema. Lee founded his own martial arts philosophy called Jeet Kune Do ('The Way of the Intercepting Fist'). His films including 'Enter the Dragon', 'Fist of Fury', and 'The Way of the Dragon' made him an international star. Lee died mysteriously on July 20, 1973, at age 32 in Hong Kong. His legacy influenced generations of martial artists and action film stars.",
          es: "Bruce Lee nació como Lee Jun-fan el 27 de noviembre de 1940 en el barrio chino de San Francisco durante un breve regreso de sus padres a EE.UU. Se convirtió en un ícono cultural que revolucionó las películas de artes marciales y unió el cine oriental y occidental. Lee fundó su propia filosofía de artes marciales llamada Jeet Kune Do ('El Camino del Puño Interceptor'). Sus películas incluyendo 'Operación Dragón', 'Furia Oriental' y 'El Furor del Dragón' lo convirtieron en una estrella internacional. Lee murió misteriosamente el 20 de julio de 1973, a los 32 años en Hong Kong. Su legado influyó en generaciones de artistas marciales y estrellas del cine de acción.",
          de: "Bruce Lee wurde am 27. November 1940 als Lee Jun-fan in San Franciscos Chinatown während einer kurzen Rückkehr seiner Eltern in die USA geboren. Er wurde zu einer Kultfigur, die Martial-Arts-Filme revolutionierte und östliches und westliches Kino verband. Lee gründete seine eigene Kampfkunstphilosophie namens Jeet Kune Do ('Der Weg der abfangenden Faust'). Seine Filme wie 'Enter the Dragon', 'Fist of Fury' und 'The Way of the Dragon' machten ihn zum internationalen Star. Lee starb am 20. Juli 1973 im Alter von 32 Jahren auf mysteriöse Weise in Hongkong. Sein Vermächtnis beeinflusste Generationen von Kampfkünstlern und Action-Filmstars.",
          nl: "Bruce Lee werd geboren als Lee Jun-fan op 27 november 1940 in San Francisco's Chinatown tijdens een kort bezoek van zijn ouders aan de VS. Hij werd een cultureel icoon die martial arts-films revolutioneerde en oosterse en westerse cinema verbond. Lee stichtte zijn eigen martial arts-filosofie genaamd Jeet Kune Do ('De Weg van de Onderscheppende Vuist'). Zijn films waaronder 'Enter the Dragon', 'Fist of Fury' en 'The Way of the Dragon' maakten hem een internationale ster. Lee stierf mysterieus op 20 juli 1973 op 32-jarige leeftijd in Hong Kong. Zijn nalatenschap beïnvloedde generaties martial artists en actiefilmsterren."
        }
      },
      {
        question: {
          en: "What martial arts philosophy did Bruce Lee develop?",
          es: "¿Qué filosofía de artes marciales desarrolló Bruce Lee?",
          de: "Welche Kampfkunstphilosophie entwickelte Bruce Lee?",
          nl: "Welke martial arts-filosofie ontwikkelde Bruce Lee?"
        },
        options: [
          { en: "Karate-Do", es: "Karate-Do", de: "Karate-Do", nl: "Karate-Do" },
          { en: "Taekwondo", es: "Taekwondo", de: "Taekwondo", nl: "Taekwondo" },
          { en: "Wing Chun", es: "Wing Chun", de: "Wing Chun", nl: "Wing Chun" },
          { en: "Jeet Kune Do", es: "Jeet Kune Do", de: "Jeet Kune Do", nl: "Jeet Kune Do" }
        ],
        correctIndex: 3
      }
    ],

    // Day 28 - November 28th: Thanksgiving (varies), Albania independence (1912), Friedrich Engels born (1820)
    day28: [
      {
        question: {
          en: "What U.S. holiday, celebrated on the fourth Thursday of November, often falls on November 28th?",
          es: "¿Qué festividad estadounidense, celebrada el cuarto jueves de noviembre, a menudo cae el 28 de noviembre?",
          de: "Welcher US-Feiertag, der am vierten Donnerstag im November gefeiert wird, fällt oft auf den 28. November?",
          nl: "Welke Amerikaanse feestdag, gevierd op de vierde donderdag van november, valt vaak op 28 november?"
        },
        options: [
          { en: "Independence Day", es: "Día de la Independencia", de: "Unabhängigkeitstag", nl: "Onafhankelijkheidsdag" },
          { en: "Thanksgiving", es: "Día de Acción de Gracias", de: "Thanksgiving", nl: "Thanksgiving" },
          { en: "Veterans Day", es: "Día de los Veteranos", de: "Veteranentag", nl: "Veteranendag" },
          { en: "Memorial Day", es: "Día de los Caídos", de: "Gedenktag", nl: "Herdenkingsdag" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Thanksgiving is celebrated on the fourth Thursday of November in the United States, which can fall on dates ranging from November 22 to November 28. The holiday originated with the Pilgrims' harvest feast in 1621 with the Wampanoag people. President Abraham Lincoln proclaimed it a national holiday in 1863 during the Civil War. President Franklin D. Roosevelt moved it to the fourth Thursday in 1941. Americans traditionally celebrate with turkey, stuffing, cranberry sauce, and pumpkin pie, gathering with family and friends to express gratitude. The day after Thanksgiving, Black Friday, marks the start of the Christmas shopping season.",
          es: "El Día de Acción de Gracias se celebra el cuarto jueves de noviembre en Estados Unidos, que puede caer en fechas del 22 al 28 de noviembre. La festividad se originó con la fiesta de la cosecha de los Peregrinos en 1621 con el pueblo Wampanoag. El presidente Abraham Lincoln lo proclamó fiesta nacional en 1863 durante la Guerra Civil. El presidente Franklin D. Roosevelt lo trasladó al cuarto jueves en 1941. Los estadounidenses tradicionalmente celebran con pavo, relleno, salsa de arándanos y pastel de calabaza, reuniéndose con familiares y amigos para expresar gratitud. El día después de Acción de Gracias, Black Friday, marca el inicio de la temporada de compras navideñas.",
          de: "Thanksgiving wird in den Vereinigten Staaten am vierten Donnerstag im November gefeiert, was auf Daten vom 22. bis 28. November fallen kann. Der Feiertag entstand aus dem Erntedankfest der Pilger im Jahr 1621 mit dem Volk der Wampanoag. Präsident Abraham Lincoln erklärte ihn 1863 während des Bürgerkriegs zum nationalen Feiertag. Präsident Franklin D. Roosevelt verlegte ihn 1941 auf den vierten Donnerstag. Amerikaner feiern traditionell mit Truthahn, Füllung, Preiselbeersauce und Kürbiskuchen und versammeln sich mit Familie und Freunden, um Dankbarkeit auszudrücken. Der Tag nach Thanksgiving, Black Friday, markiert den Beginn der Weihnachtseinkaufssaison.",
          nl: "Thanksgiving wordt gevierd op de vierde donderdag van november in de Verenigde Staten, wat kan vallen op data tussen 22 en 28 november. De feestdag ontstond uit het oogstfeest van de Pilgrims in 1621 met het Wampanoag-volk. President Abraham Lincoln riep het uit tot nationale feestdag in 1863 tijdens de Burgeroorlog. President Franklin D. Roosevelt verplaatste het naar de vierde donderdag in 1941. Amerikanen vieren traditioneel met kalkoen, vulling, cranberrysaus en pompoentaart, en komen samen met familie en vrienden om dankbaarheid te uiten. De dag na Thanksgiving, Black Friday, markeert het begin van het kerstwinkelseizoen."
        }
      },
      {
        question: {
          en: "Albania declared independence from the Ottoman Empire on November 28 of which year?",
          es: "Albania declaró su independencia del Imperio Otomano el 28 de noviembre de qué año?",
          de: "Albanien erklärte am 28. November welchen Jahres seine Unabhängigkeit vom Osmanischen Reich?",
          nl: "Albanië verklaarde op 28 november van welk jaar zijn onafhankelijkheid van het Ottomaanse Rijk?"
        },
        options: [
          { en: "1914", es: "1914", de: "1914", nl: "1914" },
          { en: "1912", es: "1912", de: "1912", nl: "1912" },
          { en: "1908", es: "1908", de: "1908", nl: "1908" },
          { en: "1910", es: "1910", de: "1910", nl: "1910" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Albania declared independence on November 28, 1912, in Vlorë (Vlora), ending over 400 years of Ottoman rule. The declaration came during the First Balkan War when Ottoman power in the region was collapsing. Ismail Qemali raised the Albanian flag and became the head of the first Albanian government. November 28 is celebrated annually as Albanian Independence Day and Flag Day. Albania's independence was recognized internationally at the London Conference of 1913. The country faced immediate challenges including border disputes and political instability. Albania is located on the Balkan Peninsula with coastlines on the Adriatic and Ionian Seas.",
          es: "Albania declaró su independencia el 28 de noviembre de 1912 en Vlorë (Vlora), poniendo fin a más de 400 años de dominio otomano. La declaración llegó durante la Primera Guerra de los Balcanes cuando el poder otomano en la región se estaba derrumbando. Ismail Qemali izó la bandera albanesa y se convirtió en jefe del primer gobierno albanés. El 28 de noviembre se celebra anualmente como Día de la Independencia y Día de la Bandera de Albania. La independencia de Albania fue reconocida internacionalmente en la Conferencia de Londres de 1913. El país enfrentó desafíos inmediatos incluyendo disputas fronterizas e inestabilidad política. Albania está ubicada en la Península de los Balcanes con costas en los mares Adriático y Jónico.",
          de: "Albanien erklärte am 28. November 1912 in Vlorë (Vlora) seine Unabhängigkeit und beendete damit über 400 Jahre osmanische Herrschaft. Die Erklärung erfolgte während des Ersten Balkankriegs, als die osmanische Macht in der Region zusammenbrach. Ismail Qemali hisste die albanische Flagge und wurde Oberhaupt der ersten albanischen Regierung. Der 28. November wird jährlich als albanischer Unabhängigkeitstag und Flaggentag gefeiert. Albaniens Unabhängigkeit wurde auf der Londoner Konferenz von 1913 international anerkannt. Das Land stand vor unmittelbaren Herausforderungen wie Grenzstreitigkeiten und politischer Instabilität. Albanien liegt auf der Balkanhalbinsel mit Küsten an der Adria und dem Ionischen Meer.",
          nl: "Albanië verklaarde op 28 november 1912 in Vlorë (Vlora) zijn onafhankelijkheid, waarmee een einde kwam aan meer dan 400 jaar Ottomaanse heerschappij. De verklaring kwam tijdens de Eerste Balkanoorlog toen de Ottomaanse macht in de regio instortte. Ismail Qemali hees de Albanese vlag en werd het hoofd van de eerste Albanese regering. 28 november wordt jaarlijks gevierd als Albanese Onafhankelijkheidsdag en Vlaggendag. Albanië's onafhankelijkheid werd internationaal erkend op de Conferentie van Londen in 1913. Het land kreeg te maken met directe uitdagingen waaronder grensgeschillen en politieke instabiliteit. Albanië ligt op het Balkan-schiereiland met kustlijnen aan de Adriatische en Ionische Zee."
        }
      },
      {
        question: {
          en: "What is 17 × 8?",
          es: "¿Cuánto es 17 × 8?",
          de: "Was ist 17 × 8?",
          nl: "Hoeveel is 17 × 8?"
        },
        options: [
          { en: "134", es: "134", de: "134", nl: "134" },
          { en: "138", es: "138", de: "138", nl: "138" },
          { en: "136", es: "136", de: "136", nl: "136" },
          { en: "140", es: "140", de: "140", nl: "140" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "German philosopher and socialist theorist Friedrich Engels was born on November 28 of which year?",
          es: "El filósofo alemán y teórico socialista Friedrich Engels nació el 28 de noviembre de qué año?",
          de: "Der deutsche Philosoph und sozialistische Theoretiker Friedrich Engels wurde am 28. November welchen Jahres geboren?",
          nl: "De Duitse filosoof en socialistische theoreticus Friedrich Engels werd geboren op 28 november van welk jaar?"
        },
        options: [
          { en: "1818", es: "1818", de: "1818", nl: "1818" },
          { en: "1820", es: "1820", de: "1820", nl: "1820" },
          { en: "1822", es: "1822", de: "1822", nl: "1822" },
          { en: "1815", es: "1815", de: "1815", nl: "1815" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Friedrich Engels was born on November 28, 1820, in Barmen (now part of Wuppertal), Prussia. He is best known as the collaborator and lifelong friend of Karl Marx, with whom he co-authored 'The Communist Manifesto' (1848). Engels came from a wealthy industrialist family but devoted his life to socialist theory and workers' movements. He financially supported Marx for many years and completed volumes II and III of 'Das Kapital' after Marx's death. Engels wrote extensively on political economy, philosophy, and the conditions of the working class. He died on August 5, 1895, in London.",
          es: "Friedrich Engels nació el 28 de noviembre de 1820 en Barmen (ahora parte de Wuppertal), Prusia. Es mejor conocido como colaborador y amigo de toda la vida de Karl Marx, con quien coescribió 'El Manifiesto Comunista' (1848). Engels provenía de una familia de industriales adinerados pero dedicó su vida a la teoría socialista y los movimientos obreros. Apoyó financieramente a Marx durante muchos años y completó los volúmenes II y III de 'El Capital' después de la muerte de Marx. Engels escribió extensamente sobre economía política, filosofía y las condiciones de la clase trabajadora. Murió el 5 de agosto de 1895 en Londres.",
          de: "Friedrich Engels wurde am 28. November 1820 in Barmen (heute Teil von Wuppertal), Preußen, geboren. Er ist am besten bekannt als Mitarbeiter und lebenslanger Freund von Karl Marx, mit dem er 'Das Kommunistische Manifest' (1848) mitverfasste. Engels stammte aus einer wohlhabenden Industriellenfamilie, widmete sein Leben aber der sozialistischen Theorie und Arbeiterbewegungen. Er unterstützte Marx viele Jahre lang finanziell und vollendete die Bände II und III von 'Das Kapital' nach Marx' Tod. Engels schrieb ausführlich über politische Ökonomie, Philosophie und die Bedingungen der Arbeiterklasse. Er starb am 5. August 1895 in London.",
          nl: "Friedrich Engels werd geboren op 28 november 1820 in Barmen (nu deel van Wuppertal), Pruisen. Hij is het best bekend als medewerker en levenslange vriend van Karl Marx, met wie hij 'Het Communistisch Manifest' (1848) schreef. Engels kwam uit een rijke industrialistenfamilie maar wijdde zijn leven aan socialistische theorie en arbeidersbeweging. Hij ondersteunde Marx jarenlang financieel en voltooide delen II en III van 'Das Kapital' na Marx' dood. Engels schreef uitgebreid over politieke economie, filosofie en de omstandigheden van de arbeidersklasse. Hij stierf op 5 augustus 1895 in Londen."
        }
      },
      {
        question: {
          en: "What famous political document did Friedrich Engels co-author with Karl Marx?",
          es: "¿Qué famoso documento político coescribió Friedrich Engels con Karl Marx?",
          de: "Welches berühmte politische Dokument verfasste Friedrich Engels zusammen mit Karl Marx?",
          nl: "Welk beroemd politiek document schreef Friedrich Engels samen met Karl Marx?"
        },
        options: [
          { en: "The Declaration of Independence", es: "La Declaración de Independencia", de: "Die Unabhängigkeitserklärung", nl: "De Onafhankelijkheidsverklaring" },
          { en: "The Communist Manifesto", es: "El Manifiesto Comunista", de: "Das Kommunistische Manifest", nl: "Het Communistisch Manifest" },
          { en: "The Magna Carta", es: "La Carta Magna", de: "Die Magna Carta", nl: "De Magna Carta" },
          { en: "The Bill of Rights", es: "La Declaración de Derechos", de: "Die Bill of Rights", nl: "De Bill of Rights" }
        ],
        correctIndex: 1
      }
    ],

    // Day 29 - November 29th: UN votes for Israel (1947), C.S. Lewis born (1898), Louisa May Alcott born (1832)
    day29: [
      {
        question: {
          en: "The United Nations General Assembly voted to partition Palestine on November 29 of which year?",
          es: "La Asamblea General de las Naciones Unidas votó para dividir Palestina el 29 de noviembre de qué año?",
          de: "Die Generalversammlung der Vereinten Nationen stimmte am 29. November welchen Jahres für die Teilung Palästinas?",
          nl: "De Algemene Vergadering van de Verenigde Naties stemde op 29 november van welk jaar voor de verdeling van Palestina?"
        },
        options: [
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1948", es: "1948", de: "1948", nl: "1948" },
          { en: "1947", es: "1947", de: "1947", nl: "1947" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On November 29, 1947, the UN General Assembly passed Resolution 181, recommending the partition of British Mandate Palestine into separate Jewish and Arab states, with Jerusalem under international administration. The resolution passed with 33 votes in favor, 13 against, and 10 abstentions. The Jewish leadership accepted the plan, but Arab leaders rejected it. The State of Israel declared independence on May 14, 1948, when the British Mandate ended. This immediately led to the 1948 Arab-Israeli War. The partition plan's borders were never implemented as proposed. November 29 is observed as the International Day of Solidarity with the Palestinian People.",
          es: "El 29 de noviembre de 1947, la Asamblea General de la ONU aprobó la Resolución 181, recomendando la partición del Mandato Británico de Palestina en estados judío y árabe separados, con Jerusalén bajo administración internacional. La resolución pasó con 33 votos a favor, 13 en contra y 10 abstenciones. El liderazgo judío aceptó el plan, pero los líderes árabes lo rechazaron. El Estado de Israel declaró su independencia el 14 de mayo de 1948, cuando terminó el Mandato Británico. Esto llevó inmediatamente a la Guerra árabe-israelí de 1948. Las fronteras del plan de partición nunca se implementaron como se propuso. El 29 de noviembre se observa como el Día Internacional de Solidaridad con el Pueblo Palestino.",
          de: "Am 29. November 1947 verabschiedete die UN-Generalversammlung die Resolution 181, die die Teilung des britischen Mandatsgebiets Palästina in separate jüdische und arabische Staaten empfahl, wobei Jerusalem unter internationale Verwaltung gestellt werden sollte. Die Resolution wurde mit 33 Ja-Stimmen, 13 Nein-Stimmen und 10 Enthaltungen angenommen. Die jüdische Führung akzeptierte den Plan, aber arabische Führer lehnten ihn ab. Der Staat Israel erklärte am 14. Mai 1948 seine Unabhängigkeit, als das britische Mandat endete. Dies führte unmittelbar zum arabisch-israelischen Krieg von 1948. Die Grenzen des Teilungsplans wurden nie wie vorgeschlagen umgesetzt. Der 29. November wird als Internationaler Tag der Solidarität mit dem palästinensischen Volk begangen.",
          nl: "Op 29 november 1947 nam de Algemene Vergadering van de VN Resolutie 181 aan, waarin de verdeling van het Britse Mandaatgebied Palestina in aparte Joodse en Arabische staten werd aanbevolen, met Jeruzalem onder internationaal bestuur. De resolutie werd aangenomen met 33 stemmen voor, 13 tegen en 10 onthoudingen. De Joodse leiding accepteerde het plan, maar Arabische leiders verwierpen het. De Staat Israël verklaarde zijn onafhankelijkheid op 14 mei 1948, toen het Britse Mandaat eindigde. Dit leidde onmiddellijk tot de Arabisch-Israëlische Oorlog van 1948. De grenzen van het verdelingsplan werden nooit zoals voorgesteld geïmplementeerd. 29 november wordt gevierd als de Internationale Dag van Solidariteit met het Palestijnse Volk."
        }
      },
      {
        question: {
          en: "British author C.S. Lewis, creator of 'The Chronicles of Narnia', was born on November 29 of which year?",
          es: "El autor británico C.S. Lewis, creador de 'Las Crónicas de Narnia', nació el 29 de noviembre de qué año?",
          de: "Der britische Autor C.S. Lewis, Schöpfer von 'Die Chroniken von Narnia', wurde am 29. November welchen Jahres geboren?",
          nl: "De Britse auteur C.S. Lewis, schepper van 'De Kronieken van Narnia', werd geboren op 29 november van welk jaar?"
        },
        options: [
          { en: "1895", es: "1895", de: "1895", nl: "1895" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1898", es: "1898", de: "1898", nl: "1898" },
          { en: "1902", es: "1902", de: "1902", nl: "1902" }
        ],
        correctIndex: 2,
        explanation: {
          en: "C.S. Lewis was born Clive Staples Lewis on November 29, 1898, in Belfast, Ireland. He became one of the most influential Christian apologists and fantasy authors of the 20th century. His seven-book 'Chronicles of Narnia' series (1950-1956) has sold over 100 million copies worldwide. Lewis also wrote influential theological works including 'Mere Christianity', 'The Screwtape Letters', and 'The Problem of Pain'. He was a close friend of J.R.R. Tolkien and member of the Inklings literary group. Remarkably, Lewis died on November 22, 1963—the same day as President John F. Kennedy and author Aldous Huxley. He taught at Oxford and Cambridge Universities.",
          es: "C.S. Lewis nació como Clive Staples Lewis el 29 de noviembre de 1898 en Belfast, Irlanda. Se convirtió en uno de los apologistas cristianos y autores de fantasía más influyentes del siglo XX. Su serie de siete libros 'Las Crónicas de Narnia' (1950-1956) ha vendido más de 100 millones de copias en todo el mundo. Lewis también escribió obras teológicas influyentes incluyendo 'Mero Cristianismo', 'Las Cartas del Diablo a su Sobrino' y 'El Problema del Dolor'. Era un amigo cercano de J.R.R. Tolkien y miembro del grupo literario Inklings. Notablemente, Lewis murió el 22 de noviembre de 1963, el mismo día que el presidente John F. Kennedy y el autor Aldous Huxley. Enseñó en las Universidades de Oxford y Cambridge.",
          de: "C.S. Lewis wurde am 29. November 1898 als Clive Staples Lewis in Belfast, Irland geboren. Er wurde zu einem der einflussreichsten christlichen Apologeten und Fantasy-Autoren des 20. Jahrhunderts. Seine siebenteilige 'Chroniken von Narnia'-Reihe (1950-1956) hat weltweit über 100 Millionen Exemplare verkauft. Lewis schrieb auch einflussreiche theologische Werke wie 'Pardon, ich bin Christ', 'Dienstanweisung für einen Unterteufel' und 'Über den Schmerz'. Er war ein enger Freund von J.R.R. Tolkien und Mitglied der literarischen Gruppe Inklings. Bemerkenswerterweise starb Lewis am 22. November 1963 – am selben Tag wie Präsident John F. Kennedy und der Autor Aldous Huxley. Er lehrte an den Universitäten Oxford und Cambridge.",
          nl: "C.S. Lewis werd geboren als Clive Staples Lewis op 29 november 1898 in Belfast, Ierland. Hij werd een van de meest invloedrijke christelijke apologeten en fantasy-auteurs van de 20e eeuw. Zijn zevendelige 'Kronieken van Narnia'-serie (1950-1956) heeft wereldwijd meer dan 100 miljoen exemplaren verkocht. Lewis schreef ook invloedrijke theologische werken waaronder 'Gewoon Christendom', 'De Briefwisseling van de Duivel' en 'Het Probleem Pijn'. Hij was een goede vriend van J.R.R. Tolkien en lid van de literaire groep Inklings. Opmerkelijk genoeg stierf Lewis op 22 november 1963 - dezelfde dag als president John F. Kennedy en auteur Aldous Huxley. Hij doceerde aan de Universiteiten van Oxford en Cambridge."
        }
      },
      {
        question: {
          en: "What is 95 + 48?",
          es: "¿Cuánto es 95 + 48?",
          de: "Was ist 95 + 48?",
          nl: "Hoeveel is 95 + 48?"
        },
        options: [
          { en: "141", es: "141", de: "141", nl: "141" },
          { en: "145", es: "145", de: "145", nl: "145" },
          { en: "143", es: "143", de: "143", nl: "143" },
          { en: "147", es: "147", de: "147", nl: "147" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "American author Louisa May Alcott, who wrote 'Little Women', was born on November 29 of which year?",
          es: "La autora estadounidense Louisa May Alcott, quien escribió 'Mujercitas', nació el 29 de noviembre de qué año?",
          de: "Die amerikanische Autorin Louisa May Alcott, die 'Betty und ihre Schwestern' schrieb, wurde am 29. November welchen Jahres geboren?",
          nl: "De Amerikaanse auteur Louisa May Alcott, die 'Kleine Vrouwen' schreef, werd geboren op 29 november van welk jaar?"
        },
        options: [
          { en: "1830", es: "1830", de: "1830", nl: "1830" },
          { en: "1835", es: "1835", de: "1835", nl: "1835" },
          { en: "1832", es: "1832", de: "1832", nl: "1832" },
          { en: "1828", es: "1828", de: "1828", nl: "1828" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Louisa May Alcott was born on November 29, 1832, in Germantown, Pennsylvania. She is best known for her semi-autobiographical novel 'Little Women' (1868), which became one of the most beloved American classics. The book drew from her experiences growing up with three sisters in Concord, Massachusetts. Alcott was a strong advocate for women's rights and abolitionism. During the Civil War, she served as a nurse in a Union hospital. Her other works include 'Little Men', 'Jo's Boys', and numerous short stories. Alcott never married and supported her family through her writing. She died on March 6, 1888, just two days after her father.",
          es: "Louisa May Alcott nació el 29 de noviembre de 1832 en Germantown, Pensilvania. Es mejor conocida por su novela semi-autobiográfica 'Mujercitas' (1868), que se convirtió en uno de los clásicos estadounidenses más queridos. El libro se basó en sus experiencias al crecer con tres hermanas en Concord, Massachusetts. Alcott fue una firme defensora de los derechos de las mujeres y el abolicionismo. Durante la Guerra Civil, sirvió como enfermera en un hospital de la Unión. Sus otras obras incluyen 'Hombrecitos', 'Los Muchachos de Jo' y numerosos cuentos cortos. Alcott nunca se casó y mantuvo a su familia a través de su escritura. Murió el 6 de marzo de 1888, solo dos días después de su padre.",
          de: "Louisa May Alcott wurde am 29. November 1832 in Germantown, Pennsylvania geboren. Sie ist am besten bekannt für ihren semi-autobiografischen Roman 'Betty und ihre Schwestern' (1868), der zu einem der beliebtesten amerikanischen Klassiker wurde. Das Buch basierte auf ihren Erfahrungen beim Aufwachsen mit drei Schwestern in Concord, Massachusetts. Alcott war eine starke Befürworterin der Frauenrechte und des Abolitionismus. Während des Bürgerkriegs diente sie als Krankenschwester in einem Unionskrankenhaus. Zu ihren anderen Werken gehören 'Unter dem Lilienbanner', 'Jos Jungs' und zahlreiche Kurzgeschichten. Alcott heiratete nie und unterstützte ihre Familie durch ihr Schreiben. Sie starb am 6. März 1888, nur zwei Tage nach ihrem Vater.",
          nl: "Louisa May Alcott werd geboren op 29 november 1832 in Germantown, Pennsylvania. Ze is het best bekend om haar semi-autobiografische roman 'Kleine Vrouwen' (1868), die een van de meest geliefde Amerikaanse klassiekers werd. Het boek was gebaseerd op haar ervaringen tijdens het opgroeien met drie zussen in Concord, Massachusetts. Alcott was een sterke pleitbezorger voor vrouwenrechten en het abolitionisme. Tijdens de Burgeroorlog diende ze als verpleegster in een Unie-ziekenhuis. Haar andere werken omvatten 'Kleine Mannen', 'Jo's Jongens' en talrijke korte verhalen. Alcott trouwde nooit en onderhield haar familie door haar schrijfwerk. Ze stierf op 6 maart 1888, slechts twee dagen na haar vader."
        }
      },
      {
        question: {
          en: "Which famous fantasy series was written by C.S. Lewis?",
          es: "¿Qué famosa serie de fantasía fue escrita por C.S. Lewis?",
          de: "Welche berühmte Fantasy-Serie wurde von C.S. Lewis geschrieben?",
          nl: "Welke beroemde fantasyserie werd geschreven door C.S. Lewis?"
        },
        options: [
          { en: "The Lord of the Rings", es: "El Señor de los Anillos", de: "Der Herr der Ringe", nl: "De Heer der Ringen" },
          { en: "Harry Potter", es: "Harry Potter", de: "Harry Potter", nl: "Harry Potter" },
          { en: "The Chronicles of Narnia", es: "Las Crónicas de Narnia", de: "Die Chroniken von Narnia", nl: "De Kronieken van Narnia" },
          { en: "A Song of Ice and Fire", es: "Canción de Hielo y Fuego", de: "Das Lied von Eis und Feuer", nl: "Het Lied van IJs en Vuur" }
        ],
        correctIndex: 2
      }
    ],

    // Day 30 - November 30th: Winston Churchill born (1874), Mark Twain born (1835), Barbados independence (1966)
    day30: [
      {
        question: {
          en: "British Prime Minister Winston Churchill was born on November 30 of which year?",
          es: "El Primer Ministro británico Winston Churchill nació el 30 de noviembre de qué año?",
          de: "Der britische Premierminister Winston Churchill wurde am 30. November welchen Jahres geboren?",
          nl: "De Britse premier Winston Churchill werd geboren op 30 november van welk jaar?"
        },
        options: [
          { en: "1874", es: "1874", de: "1874", nl: "1874" },
          { en: "1880", es: "1880", de: "1880", nl: "1880" },
          { en: "1878", es: "1878", de: "1878", nl: "1878" },
          { en: "1870", es: "1870", de: "1870", nl: "1870" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Winston Churchill was born on November 30, 1874, at Blenheim Palace in Oxfordshire, England. He served as British Prime Minister during World War II (1940-1945) and again from 1951-1955. Churchill is renowned for his leadership during WWII, his stirring speeches ('We shall fight on the beaches'), and his opposition to Nazi Germany. He won the Nobel Prize in Literature in 1953 for his historical writings and speeches. Churchill was also a prolific painter, historian, and writer who authored numerous books including 'The Second World War' and 'A History of the English-Speaking Peoples'. He died on January 24, 1965, and received a state funeral.",
          es: "Winston Churchill nació el 30 de noviembre de 1874 en el Palacio de Blenheim en Oxfordshire, Inglaterra. Sirvió como Primer Ministro británico durante la Segunda Guerra Mundial (1940-1945) y nuevamente de 1951-1955. Churchill es reconocido por su liderazgo durante la Segunda Guerra Mundial, sus conmovedores discursos ('Lucharemos en las playas'), y su oposición a la Alemania Nazi. Ganó el Premio Nobel de Literatura en 1953 por sus escritos históricos y discursos. Churchill también fue un prolífico pintor, historiador y escritor que escribió numerosos libros incluyendo 'La Segunda Guerra Mundial' y 'Una Historia de los Pueblos de Habla Inglesa'. Murió el 24 de enero de 1965 y recibió un funeral de estado.",
          de: "Winston Churchill wurde am 30. November 1874 im Blenheim Palace in Oxfordshire, England, geboren. Er diente während des Zweiten Weltkriegs (1940-1945) und erneut von 1951-1955 als britischer Premierminister. Churchill ist bekannt für seine Führung während des Zweiten Weltkriegs, seine mitreißenden Reden ('Wir werden an den Stränden kämpfen') und seinen Widerstand gegen Nazi-Deutschland. Er gewann 1953 den Nobelpreis für Literatur für seine historischen Schriften und Reden. Churchill war auch ein produktiver Maler, Historiker und Schriftsteller, der zahlreiche Bücher verfasste, darunter 'Der Zweite Weltkrieg' und 'Eine Geschichte der englischsprachigen Völker'. Er starb am 24. Januar 1965 und erhielt ein Staatsbegräbnis.",
          nl: "Winston Churchill werd geboren op 30 november 1874 in Blenheim Palace in Oxfordshire, Engeland. Hij diende als Britse premier tijdens de Tweede Wereldoorlog (1940-1945) en opnieuw van 1951-1955. Churchill is beroemd om zijn leiderschap tijdens WOII, zijn aansprekende toespraken ('We zullen vechten op de stranden'), en zijn verzet tegen Nazi-Duitsland. Hij won de Nobelprijs voor Literatuur in 1953 voor zijn historische geschriften en toespraken. Churchill was ook een productief schilder, historicus en schrijver die talrijke boeken schreef, waaronder 'De Tweede Wereldoorlog' en 'Een Geschiedenis van de Engelssprekende Volkeren'. Hij stierf op 24 januari 1965 en kreeg een staatsbegrafenis."
        }
      },
      {
        question: {
          en: "American author Mark Twain was born on November 30 of which year?",
          es: "El autor estadounidense Mark Twain nació el 30 de noviembre de qué año?",
          de: "Der amerikanische Autor Mark Twain wurde am 30. November welchen Jahres geboren?",
          nl: "De Amerikaanse auteur Mark Twain werd geboren op 30 november van welk jaar?"
        },
        options: [
          { en: "1840", es: "1840", de: "1840", nl: "1840" },
          { en: "1835", es: "1835", de: "1835", nl: "1835" },
          { en: "1830", es: "1830", de: "1830", nl: "1830" },
          { en: "1845", es: "1845", de: "1845", nl: "1845" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Mark Twain was born Samuel Langhorne Clemens on November 30, 1835, in Florida, Missouri. He became one of America's greatest writers and humorists, known for novels 'The Adventures of Tom Sawyer' (1876) and 'Adventures of Huckleberry Finn' (1884), often called the 'Great American Novel'. Twain worked as a riverboat pilot on the Mississippi River, which inspired his pen name 'Mark Twain' (a riverboat term meaning two fathoms deep). He was famous for his wit and social commentary. Remarkably, Twain was born shortly after Halley's Comet appeared in 1835 and died the day after it returned in 1910, as he predicted. He died on April 21, 1910.",
          es: "Mark Twain nació como Samuel Langhorne Clemens el 30 de noviembre de 1835 en Florida, Missouri. Se convirtió en uno de los más grandes escritores y humoristas de Estados Unidos, conocido por las novelas 'Las Aventuras de Tom Sawyer' (1876) y 'Las Aventuras de Huckleberry Finn' (1884), a menudo llamada la 'Gran Novela Americana'. Twain trabajó como piloto de barco fluvial en el río Mississippi, lo que inspiró su seudónimo 'Mark Twain' (un término de barco fluvial que significa dos brazas de profundidad). Era famoso por su ingenio y comentario social. Notablemente, Twain nació poco después de que apareciera el cometa Halley en 1835 y murió el día después de que regresara en 1910, como él predijo. Murió el 21 de abril de 1910.",
          de: "Mark Twain wurde am 30. November 1835 als Samuel Langhorne Clemens in Florida, Missouri geboren. Er wurde zu einem der größten Schriftsteller und Humoristen Amerikas, bekannt für die Romane 'Die Abenteuer des Tom Sawyer' (1876) und 'Die Abenteuer des Huckleberry Finn' (1884), oft als der 'Große Amerikanische Roman' bezeichnet. Twain arbeitete als Flussdampferlotse auf dem Mississippi, was seinen Künstlernamen 'Mark Twain' inspirierte (ein Flussdampferbegriff, der zwei Faden Tiefe bedeutet). Er war berühmt für seinen Witz und seinen gesellschaftlichen Kommentar. Bemerkenswerterweise wurde Twain kurz nach dem Erscheinen des Halleyschen Kometen 1835 geboren und starb am Tag nach seiner Rückkehr 1910, wie er vorhergesagt hatte. Er starb am 21. April 1910.",
          nl: "Mark Twain werd geboren als Samuel Langhorne Clemens op 30 november 1835 in Florida, Missouri. Hij werd een van Amerika's grootste schrijvers en humoristen, bekend om romans 'The Adventures of Tom Sawyer' (1876) en 'Adventures of Huckleberry Finn' (1884), vaak de 'Grote Amerikaanse Roman' genoemd. Twain werkte als rivierbootpiloot op de Mississippi-rivier, wat zijn pseudoniem 'Mark Twain' inspireerde (een rivierbootterm die twee vadem diep betekent). Hij was beroemd om zijn scherpzinnigheid en sociale commentaar. Opmerkelijk genoeg werd Twain kort na de verschijning van Halley's komeet in 1835 geboren en stierf hij de dag nadat deze in 1910 terugkeerde, zoals hij voorspelde. Hij stierf op 21 april 1910."
        }
      },
      {
        question: {
          en: "What is 225 ÷ 15?",
          es: "¿Cuánto es 225 ÷ 15?",
          de: "Was ist 225 ÷ 15?",
          nl: "Hoeveel is 225 ÷ 15?"
        },
        options: [
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "17", es: "17", de: "17", nl: "17" }
        ],
        correctIndex: 2
      },
      {
        question: {
          en: "Barbados gained independence from the United Kingdom on November 30 of which year?",
          es: "Barbados obtuvo la independencia del Reino Unido el 30 de noviembre de qué año?",
          de: "Barbados erlangte am 30. November welchen Jahres die Unabhängigkeit vom Vereinigten Königreich?",
          nl: "Barbados verwierf op 30 november van welk jaar onafhankelijkheid van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "1962", es: "1962", de: "1962", nl: "1962" },
          { en: "1966", es: "1966", de: "1966", nl: "1966" },
          { en: "1970", es: "1970", de: "1970", nl: "1970" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Barbados gained independence on November 30, 1966, after 339 years of British colonial rule. The island nation is located in the eastern Caribbean and is the easternmost of the Caribbean islands. At midnight, the Union Jack was lowered and the new Barbadian flag was raised at the independence ceremony attended by Prince Charles. Errol Barrow became the first Prime Minister. On November 30, 2021, exactly 55 years later, Barbados became a republic, removing Queen Elizabeth II as head of state and installing its first president, Sandra Mason. November 30 is celebrated annually as Barbados Independence Day.",
          es: "Barbados obtuvo la independencia el 30 de noviembre de 1966, después de 339 años de dominio colonial británico. La nación insular está ubicada en el Caribe oriental y es la más oriental de las islas del Caribe. A medianoche, se bajó la Union Jack y se izó la nueva bandera de Barbados en la ceremonia de independencia a la que asistió el Príncipe Carlos. Errol Barrow se convirtió en el primer Primer Ministro. El 30 de noviembre de 2021, exactamente 55 años después, Barbados se convirtió en república, eliminando a la Reina Isabel II como jefa de estado e instalando a su primera presidenta, Sandra Mason. El 30 de noviembre se celebra anualmente como el Día de la Independencia de Barbados.",
          de: "Barbados erlangte am 30. November 1966 nach 339 Jahren britischer Kolonialherrschaft die Unabhängigkeit. Der Inselstaat liegt in der östlichen Karibik und ist die östlichste der karibischen Inseln. Um Mitternacht wurde der Union Jack eingeholt und die neue barbadische Flagge bei der Unabhängigkeitszeremonie gehisst, an der Prinz Charles teilnahm. Errol Barrow wurde der erste Premierminister. Am 30. November 2021, genau 55 Jahre später, wurde Barbados eine Republik, entfernte Königin Elizabeth II. als Staatsoberhaupt und setzte seine erste Präsidentin, Sandra Mason, ein. Der 30. November wird jährlich als Unabhängigkeitstag von Barbados gefeiert.",
          nl: "Barbados verwierf op 30 november 1966 onafhankelijkheid na 339 jaar Britse koloniale heerschappij. Het eilandnation ligt in de oostelijke Caribische Zee en is het meest oostelijke van de Caribische eilanden. Om middernacht werd de Union Jack neergehaald en de nieuwe Barbadiaanse vlag gehesen tijdens de onafhankelijkheidsceremonie bijgewoond door Prins Charles. Errol Barrow werd de eerste premier. Op 30 november 2021, precies 55 jaar later, werd Barbados een republiek, waarbij koningin Elizabeth II als staatshoofd werd verwijderd en de eerste president, Sandra Mason, werd geïnstalleerd. 30 november wordt jaarlijks gevierd als de Onafhankelijkheidsdag van Barbados."
        }
      },
      {
        question: {
          en: "What famous novel is Mark Twain best known for writing?",
          es: "¿Por qué famosa novela es más conocido Mark Twain?",
          de: "Für welchen berühmten Roman ist Mark Twain am bekanntesten?",
          nl: "Voor welke beroemde roman is Mark Twain het best bekend?"
        },
        options: [
          { en: "Moby Dick", es: "Moby Dick", de: "Moby Dick", nl: "Moby Dick" },
          { en: "The Great Gatsby", es: "El Gran Gatsby", de: "Der große Gatsby", nl: "De Grote Gatsby" },
          { en: "Adventures of Huckleberry Finn", es: "Las Aventuras de Huckleberry Finn", de: "Die Abenteuer des Huckleberry Finn", nl: "Adventures of Huckleberry Finn" },
          { en: "To Kill a Mockingbird", es: "Matar a un Ruiseñor", de: "Wer die Nachtigall stört", nl: "Spaar de Spotvogel" }
        ],
        correctIndex: 2
      }
    ]
  };

  // Export November challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('november', novemberChallenges);
  }

})();