// Historical Figures Quiz - Level 3: Basic-Medium Historical Knowledge
(function() {
  const level3 = {
    name: {
      en: "Historical Figures Level 3",
      es: "Figuras Históricas Nivel 3",
      de: "Historische Figuren Stufe 3",
      nl: "Historische Figuren Level 3"
    },
    questions: [
      {
        question: {
          en: "Which Roman emperor is famous for playing the fiddle while Rome burned?",
          es: "¿Qué emperador romano es famoso por tocar el violín mientras Roma ardía?",
          de: "Welcher römische Kaiser ist berühmt dafür, Geige gespielt zu haben, während Rom brannte?",
          nl: "Welke Romeinse keizer staat bekend om het bespelen van de viool terwijl Rome brandde?"
        },
        options: [
          { en: "Nero", es: "Nerón", de: "Nero", nl: "Nero" },
          { en: "Caligula", es: "Calígula", de: "Caligula", nl: "Caligula" },
          { en: "Augustus", es: "Augusto", de: "Augustus", nl: "Augustus" },
          { en: "Marcus Aurelius", es: "Marco Aurelio", de: "Marcus Aurelius", nl: "Marcus Aurelius" }
        ],
        correct: 0,
        explanation: {
          en: "While this is largely a myth (the fiddle hadn't been invented yet), Emperor Nero is historically associated with this legend during the Great Fire of Rome in 64 AD.",
          es: "Aunque esto es en gran parte un mito (el violín aún no había sido inventado), el emperador Nerón se asocia históricamente con esta leyenda durante el Gran Incendio de Roma en 64 d.C.",
          de: "Obwohl dies größtenteils ein Mythos ist (die Geige war noch nicht erfunden worden), wird Kaiser Nero historisch mit dieser Legende während des Großen Brandes von Rom im Jahr 64 n.Chr. in Verbindung gebracht.",
          nl: "Hoewel dit grotendeels een mythe is (de viool was nog niet uitgevonden), wordt keizer Nero historisch geassocieerd met deze legende tijdens de Grote Brand van Rome in 64 n.Chr."
        }
      },
      {
        question: {
          en: "Who was the first woman to fly solo across the Atlantic Ocean?",
          es: "¿Quién fue la primera mujer en volar sola a través del Océano Atlántico?",
          de: "Wer war die erste Frau, die solo über den Atlantischen Ozean flog?",
          nl: "Wie was de eerste vrouw die solo over de Atlantische Oceaan vloog?"
        },
        options: [
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" },
          { en: "Bessie Coleman", es: "Bessie Coleman", de: "Bessie Coleman", nl: "Bessie Coleman" },
          { en: "Jacqueline Cochran", es: "Jacqueline Cochran", de: "Jacqueline Cochran", nl: "Jacqueline Cochran" },
          { en: "Amy Johnson", es: "Amy Johnson", de: "Amy Johnson", nl: "Amy Johnson" }
        ],
        correct: 0,
        explanation: {
          en: "Amelia Earhart became the first woman to fly solo across the Atlantic on May 20-21, 1932, landing in Northern Ireland after departing from Newfoundland.",
          es: "Amelia Earhart se convirtió en la primera mujer en volar sola a través del Atlántico el 20-21 de mayo de 1932, aterrizando en Irlanda del Norte después de partir de Terranova.",
          de: "Amelia Earhart wurde am 20.-21. Mai 1932 die erste Frau, die solo über den Atlantik flog, und landete in Nordirland, nachdem sie von Neufundland gestartet war.",
          nl: "Amelia Earhart werd de eerste vrouw die solo over de Atlantische Oceaan vloog op 20-21 mei 1932, landend in Noord-Ierland na vertrek uit Newfoundland."
        }
      },
      {
        question: {
          en: "Which Chinese emperor built the Terracotta Army?",
          es: "¿Qué emperador chino construyó el Ejército de Terracota?",
          de: "Welcher chinesische Kaiser baute die Terrakotta-Armee?",
          nl: "Welke Chinese keizer bouwde het Terracotta Leger?"
        },
        options: [
          { en: "Qin Shi Huang", es: "Qin Shi Huang", de: "Qin Shi Huang", nl: "Qin Shi Huang" },
          { en: "Emperor Wu", es: "Emperador Wu", de: "Kaiser Wu", nl: "Keizer Wu" },
          { en: "Kangxi Emperor", es: "Emperador Kangxi", de: "Kaiser Kangxi", nl: "Keizer Kangxi" },
          { en: "Ming Emperor", es: "Emperador Ming", de: "Ming Kaiser", nl: "Ming Keizer" }
        ],
        correct: 0,
        explanation: {
          en: "Qin Shi Huang, the first emperor of unified China (259-210 BCE), commissioned the Terracotta Army to protect him in the afterlife. It was discovered in 1974 near Xi'an.",
          es: "Qin Shi Huang, el primer emperador de China unificada (259-210 a.C.), encargó el Ejército de Terracota para protegerlo en el más allá. Fue descubierto en 1974 cerca de Xi'an.",
          de: "Qin Shi Huang, der erste Kaiser des vereinigten China (259-210 v.Chr.), beauftragte die Terrakotta-Armee, ihn im Jenseits zu beschützen. Sie wurde 1974 in der Nähe von Xi'an entdeckt.",
          nl: "Qin Shi Huang, de eerste keizer van het verenigde China (259-210 v.Chr.), gaf opdracht voor het Terracotta Leger om hem te beschermen in het hiernamaals. Het werd ontdekt in 1974 bij Xi'an."
        }
      },
      {
        question: {
          en: "Who was known as the 'Liberator of South America'?",
          es: "¿Quién era conocido como el 'Libertador de Sudamérica'?",
          de: "Wer war als der 'Befreier Südamerikas' bekannt?",
          nl: "Wie stond bekend als de 'Bevrijder van Zuid-Amerika'?"
        },
        options: [
          { en: "Simón Bolívar", es: "Simón Bolívar", de: "Simón Bolívar", nl: "Simón Bolívar" },
          { en: "José de San Martín", es: "José de San Martín", de: "José de San Martín", nl: "José de San Martín" },
          { en: "Bernardo O'Higgins", es: "Bernardo O'Higgins", de: "Bernardo O'Higgins", nl: "Bernardo O'Higgins" },
          { en: "Antonio José de Sucre", es: "Antonio José de Sucre", de: "Antonio José de Sucre", nl: "Antonio José de Sucre" }
        ],
        correct: 0,
        explanation: {
          en: "Simón Bolívar led independence movements across much of South America, helping to liberate Venezuela, Colombia, Ecuador, Peru, Panama, and Bolivia from Spanish rule.",
          es: "Simón Bolívar lideró movimientos independentistas en gran parte de Sudamérica, ayudando a liberar Venezuela, Colombia, Ecuador, Perú, Panamá y Bolivia del dominio español.",
          de: "Simón Bolívar führte Unabhängigkeitsbewegungen in weiten Teilen Südamerikas an und half dabei, Venezuela, Kolumbien, Ecuador, Peru, Panama und Bolivien von der spanischen Herrschaft zu befreien.",
          nl: "Simón Bolívar leidde onafhankelijkheidsbewegingen in een groot deel van Zuid-Amerika en hielp Venezuela, Colombia, Ecuador, Peru, Panama en Bolivia te bevrijden van de Spaanse heerschappij."
        }
      },
      {
        question: {
          en: "Which Viking explorer is believed to have reached North America around 1000 AD?",
          es: "¿Qué explorador vikingo se cree que llegó a América del Norte alrededor del año 1000 d.C.?",
          de: "Welcher Wikinger-Entdecker soll um 1000 n.Chr. Nordamerika erreicht haben?",
          nl: "Welke Viking-ontdekkingsreiziger zou rond 1000 n.Chr. Noord-Amerika hebben bereikt?"
        },
        options: [
          { en: "Leif Erikson", es: "Leif Erikson", de: "Leif Erikson", nl: "Leif Erikson" },
          { en: "Erik the Red", es: "Erik el Rojo", de: "Erik der Rote", nl: "Erik de Rode" },
          { en: "Ragnar Lodbrok", es: "Ragnar Lodbrok", de: "Ragnar Lodbrok", nl: "Ragnar Lodbrok" },
          { en: "Olaf Tryggvason", es: "Olaf Tryggvason", de: "Olaf Tryggvason", nl: "Olaf Tryggvason" }
        ],
        correct: 0,
        explanation: {
          en: "Leif Erikson, son of Erik the Red, is credited with being the first European to reach North America, establishing a settlement called Vinland around 1000 AD.",
          es: "Leif Erikson, hijo de Erik el Rojo, es acreditado como el primer europeo en llegar a América del Norte, estableciendo un asentamiento llamado Vinland alrededor del año 1000 d.C.",
          de: "Leif Erikson, Sohn von Erik dem Roten, wird als der erste Europäer angesehen, der Nordamerika erreichte und um 1000 n.Chr. eine Siedlung namens Vinland gründete.",
          nl: "Leif Erikson, zoon van Erik de Rode, wordt gecrediteerd als de eerste Europeaan die Noord-Amerika bereikte en rond 1000 n.Chr. een nederzetting genaamd Vinland stichtte."
        }
      },
      {
        question: {
          en: "Who was the first person to circumnavigate the globe?",
          es: "¿Quién fue la primera persona en circunnavegar el globo?",
          de: "Wer war die erste Person, die die Erde umrundete?",
          nl: "Wie was de eerste persoon die de aarde omzeilde?"
        },
        options: [
          { en: "Ferdinand Magellan's crew (Juan Sebastián Elcano)", es: "La tripulación de Fernando de Magallanes (Juan Sebastián Elcano)", de: "Ferdinand Magellans Crew (Juan Sebastián Elcano)", nl: "Ferdinand Magellaans bemanning (Juan Sebastián Elcano)" },
          { en: "Christopher Columbus", es: "Cristóbal Colón", de: "Christoph Kolumbus", nl: "Christoffel Columbus" },
          { en: "Vasco da Gama", es: "Vasco da Gama", de: "Vasco da Gama", nl: "Vasco da Gama" },
          { en: "James Cook", es: "James Cook", de: "James Cook", nl: "James Cook" }
        ],
        correct: 0,
        explanation: {
          en: "While Magellan started the voyage, he was killed in the Philippines. Juan Sebastián Elcano completed the first circumnavigation in 1522, returning to Spain with 18 survivors.",
          es: "Aunque Magallanes comenzó el viaje, fue asesinado en Filipinas. Juan Sebastián Elcano completó la primera circunnavegación en 1522, regresando a España con 18 supervivientes.",
          de: "Obwohl Magellan die Reise begann, wurde er auf den Philippinen getötet. Juan Sebastián Elcano vollendete 1522 die erste Weltumrundung und kehrte mit 18 Überlebenden nach Spanien zurück.",
          nl: "Hoewel Magellaan de reis begon, werd hij gedood op de Filipijnen. Juan Sebastián Elcano voltooide de eerste wereldomzeiling in 1522, terugkeerend naar Spanje met 18 overlevenden."
        }
      },
      {
        question: {
          en: "Which French queen was executed during the French Revolution?",
          es: "¿Qué reina francesa fue ejecutada durante la Revolución Francesa?",
          de: "Welche französische Königin wurde während der Französischen Revolution hingerichtet?",
          nl: "Welke Franse koningin werd geëxecuteerd tijdens de Franse Revolutie?"
        },
        options: [
          { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
          { en: "Catherine de' Medici", es: "Catalina de Médici", de: "Katharina von Medici", nl: "Catharina de' Medici" },
          { en: "Anne of Austria", es: "Ana de Austria", de: "Anna von Österreich", nl: "Anna van Oostenrijk" },
          { en: "Josephine de Beauharnais", es: "Josefina de Beauharnais", de: "Joséphine de Beauharnais", nl: "Joséphine de Beauharnais" }
        ],
        correct: 0,
        explanation: {
          en: "Marie Antoinette, wife of Louis XVI, was executed by guillotine on October 16, 1793, during the Reign of Terror. She was famously (though incorrectly) attributed the phrase 'Let them eat cake.'",
          es: "María Antonieta, esposa de Luis XVI, fue ejecutada en la guillotina el 16 de octubre de 1793, durante el Reino del Terror. Se le atribuye famosamente (aunque incorrectamente) la frase 'Que coman pasteles.'",
          de: "Marie Antoinette, Ehefrau von Ludwig XVI., wurde am 16. Oktober 1793 während der Schreckensherrschaft durch die Guillotine hingerichtet. Ihr wird fälschlicherweise der Ausspruch 'Sollen sie doch Kuchen essen' zugeschrieben.",
          nl: "Marie Antoinette, echtgenote van Lodewijk XVI, werd op 16 oktober 1793 geëxecuteerd door de guillotine tijdens de Terreur. Haar wordt (ten onrechte) de uitspraak 'Laat ze maar taart eten' toegeschreven."
        }
      },
      {
        question: {
          en: "Who was the Mongol leader who conquered much of Asia and Eastern Europe?",
          es: "¿Quién fue el líder mongol que conquistó gran parte de Asia y Europa Oriental?",
          de: "Wer war der mongolische Anführer, der große Teile Asiens und Osteuropas eroberte?",
          nl: "Wie was de Mongoolse leider die grote delen van Azië en Oost-Europa veroverde?"
        },
        options: [
          { en: "Genghis Khan", es: "Genghis Khan", de: "Dschingis Khan", nl: "Genghis Khan" },
          { en: "Kublai Khan", es: "Kublai Khan", de: "Kublai Khan", nl: "Kublai Khan" },
          { en: "Ögedei Khan", es: "Ögedei Khan", de: "Ögedei Khan", nl: "Ögedei Khan" },
          { en: "Tamerlane", es: "Tamerlán", de: "Timur", nl: "Timoer" }
        ],
        correct: 0,
        explanation: {
          en: "Genghis Khan (c. 1162-1227) founded the Mongol Empire, which became the largest contiguous land empire in history, stretching from Eastern Europe to the Pacific Ocean.",
          es: "Genghis Khan (c. 1162-1227) fundó el Imperio Mongol, que se convirtió en el imperio terrestre contiguo más grande de la historia, extendiéndose desde Europa Oriental hasta el Océano Pacífico.",
          de: "Dschingis Khan (ca. 1162-1227) gründete das Mongolische Reich, das zum größten zusammenhängenden Landreich der Geschichte wurde und sich von Osteuropa bis zum Pazifischen Ozean erstreckte.",
          nl: "Genghis Khan (ca. 1162-1227) stichtte het Mongoolse Rijk, dat het grootste aaneengesloten landrijk in de geschiedenis werd, zich uitstrekkend van Oost-Europa tot de Stille Oceaan."
        }
      },
      {
        question: {
          en: "Which scientist is famous for his laws of planetary motion?",
          es: "¿Qué científico es famoso por sus leyes del movimiento planetario?",
          de: "Welcher Wissenschaftler ist für seine Gesetze der Planetenbewegung berühmt?",
          nl: "Welke wetenschapper staat bekend om zijn wetten van planetaire beweging?"
        },
        options: [
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Nicolaus Copernicus", es: "Nicolás Copérnico", de: "Nikolaus Kopernikus", nl: "Nicolaas Copernicus" }
        ],
        correct: 0,
        explanation: {
          en: "Johannes Kepler (1571-1630) formulated three fundamental laws of planetary motion, describing how planets orbit the sun in elliptical paths, revolutionizing astronomy.",
          es: "Johannes Kepler (1571-1630) formuló tres leyes fundamentales del movimiento planetario, describiendo cómo los planetas orbitan el sol en trayectorias elípticas, revolucionando la astronomía.",
          de: "Johannes Kepler (1571-1630) formulierte drei fundamentale Gesetze der Planetenbewegung, die beschreiben, wie Planeten die Sonne in elliptischen Bahnen umkreisen, und revolutionierte die Astronomie.",
          nl: "Johannes Kepler (1571-1630) formuleerde drie fundamentele wetten van planetaire beweging, die beschrijven hoe planeten de zon omcirkelen in elliptische banen, wat de astronomie revolutioneerde."
        }
      },
      {
        question: {
          en: "Who was the first female ruler of Russia?",
          es: "¿Quién fue la primera gobernante femenina de Rusia?",
          de: "Wer war die erste weibliche Herrscherin Russlands?",
          nl: "Wie was de eerste vrouwelijke heerser van Rusland?"
        },
        options: [
          { en: "Catherine I", es: "Catalina I", de: "Katharina I.", nl: "Catharina I" },
          { en: "Catherine the Great", es: "Catalina la Grande", de: "Katharina die Große", nl: "Catharina de Grote" },
          { en: "Elizabeth of Russia", es: "Isabel de Rusia", de: "Elisabeth von Russland", nl: "Elisabeth van Rusland" },
          { en: "Anna Ioannovna", es: "Ana Ioánovna", de: "Anna Ioannowna", nl: "Anna Ivanovna" }
        ],
        correct: 0,
        explanation: {
          en: "Catherine I (1684-1727), wife of Peter the Great, became the first woman to rule Russia as empress regnant after her husband's death in 1725.",
          es: "Catalina I (1684-1727), esposa de Pedro el Grande, se convirtió en la primera mujer en gobernar Rusia como emperatriz reinante después de la muerte de su esposo en 1725.",
          de: "Katharina I. (1684-1727), Ehefrau Peters des Großen, wurde nach dem Tod ihres Mannes 1725 die erste Frau, die Russland als regierende Kaiserin regierte.",
          nl: "Catharina I (1684-1727), echtgenote van Peter de Grote, werd de eerste vrouw die Rusland regeerde als keizerin na de dood van haar echtgenoot in 1725."
        }
      },
      {
        question: {
          en: "Which Aztec emperor was captured by Hernán Cortés?",
          es: "¿Qué emperador azteca fue capturado por Hernán Cortés?",
          de: "Welcher aztekische Kaiser wurde von Hernán Cortés gefangen genommen?",
          nl: "Welke Azteekse keizer werd gevangen genomen door Hernán Cortés?"
        },
        options: [
          { en: "Moctezuma II", es: "Moctezuma II", de: "Moctezuma II.", nl: "Moctezuma II" },
          { en: "Huitzilihuitl", es: "Huitzilihuitl", de: "Huitzilihuitl", nl: "Huitzilihuitl" },
          { en: "Itzcoatl", es: "Itzcoatl", de: "Itzcoatl", nl: "Itzcoatl" },
          { en: "Tlacaelel", es: "Tlacaelel", de: "Tlacaelel", nl: "Tlacaelel" }
        ],
        correct: 0,
        explanation: {
          en: "Moctezuma II (1466-1520) was the Aztec emperor when Cortés arrived in 1519. He was captured and held hostage, leading to the eventual fall of the Aztec Empire.",
          es: "Moctezuma II (1466-1520) era el emperador azteca cuando Cortés llegó en 1519. Fue capturado y mantenido como rehén, llevando a la eventual caída del Imperio Azteca.",
          de: "Moctezuma II. (1466-1520) war der aztekische Kaiser, als Cortés 1519 ankam. Er wurde gefangen genommen und als Geisel gehalten, was zum eventuellen Fall des Aztekenreiches führte.",
          nl: "Moctezuma II (1466-1520) was de Azteekse keizer toen Cortés in 1519 aankwam. Hij werd gevangen genomen en gegijzeld, wat leidde tot de uiteindelijke val van het Azteekse Rijk."
        }
      },
      {
        question: {
          en: "Who was the German composer famous for his nine symphonies, including the 'Ode to Joy'?",
          es: "¿Quién fue el compositor alemán famoso por sus nueve sinfonías, incluyendo la 'Oda a la Alegría'?",
          de: "Wer war der deutsche Komponist, berühmt für seine neun Symphonien, einschließlich der 'Ode an die Freude'?",
          nl: "Wie was de Duitse componist beroemd om zijn negen symfonieën, inclusief de 'Ode aan de Vreugde'?"
        },
        options: [
          { en: "Ludwig van Beethoven", es: "Ludwig van Beethoven", de: "Ludwig van Beethoven", nl: "Ludwig van Beethoven" },
          { en: "Wolfgang Amadeus Mozart", es: "Wolfgang Amadeus Mozart", de: "Wolfgang Amadeus Mozart", nl: "Wolfgang Amadeus Mozart" },
          { en: "Johann Sebastian Bach", es: "Johann Sebastian Bach", de: "Johann Sebastian Bach", nl: "Johann Sebastian Bach" },
          { en: "Johannes Brahms", es: "Johannes Brahms", de: "Johannes Brahms", nl: "Johannes Brahms" }
        ],
        correct: 0,
        explanation: {
          en: "Ludwig van Beethoven (1770-1827) composed nine symphonies, with his Ninth Symphony featuring the famous 'Ode to Joy' chorus. Remarkably, he composed his later works while completely deaf.",
          es: "Ludwig van Beethoven (1770-1827) compuso nueve sinfonías, con su Novena Sinfonía presentando el famoso coro 'Oda a la Alegría'. Notablemente, compuso sus obras posteriores mientras estaba completamente sordo.",
          de: "Ludwig van Beethoven (1770-1827) komponierte neun Symphonien, wobei seine Neunte Symphonie den berühmten 'Ode an die Freude'-Chor enthält. Bemerkenswert ist, dass er seine späteren Werke komponierte, während er völlig taub war.",
          nl: "Ludwig van Beethoven (1770-1827) componeerde negen symfonieën, waarbij zijn Negende Symfonie het beroemde 'Ode aan de Vreugde'-koor bevat. Opmerkelijk is dat hij zijn latere werken componeerde terwijl hij volledig doof was."
        }
      },
      {
        question: {
          en: "Which Japanese emperor surrendered ending World War II?",
          es: "¿Qué emperador japonés se rindió terminando la Segunda Guerra Mundial?",
          de: "Welcher japanische Kaiser kapitulierte und beendete den Zweiten Weltkrieg?",
          nl: "Welke Japanse keizer capituleerde en beëindigde de Tweede Wereldoorlog?"
        },
        options: [
          { en: "Emperor Hirohito", es: "Emperador Hirohito", de: "Kaiser Hirohito", nl: "Keizer Hirohito" },
          { en: "Emperor Meiji", es: "Emperador Meiji", de: "Kaiser Meiji", nl: "Keizer Meiji" },
          { en: "Emperor Taisho", es: "Emperador Taisho", de: "Kaiser Taisho", nl: "Keizer Taisho" },
          { en: "Emperor Akihito", es: "Emperador Akihito", de: "Kaiser Akihito", nl: "Keizer Akihito" }
        ],
        correct: 0,
        explanation: {
          en: "Emperor Hirohito announced Japan's surrender on August 15, 1945, following the atomic bombings of Hiroshima and Nagasaki, officially ending World War II.",
          es: "El emperador Hirohito anunció la rendición de Japón el 15 de agosto de 1945, siguiendo los bombardeos atómicos de Hiroshima y Nagasaki, terminando oficialmente la Segunda Guerra Mundial.",
          de: "Kaiser Hirohito verkündete Japans Kapitulation am 15. August 1945, nach den Atombombenabwürfen auf Hiroshima und Nagasaki, und beendete offiziell den Zweiten Weltkrieg.",
          nl: "Keizer Hirohito kondigde Japans overgave aan op 15 augustus 1945, na de atoombommen op Hiroshima en Nagasaki, wat officieel de Tweede Wereldoorlog beëindigde."
        }
      },
      {
        question: {
          en: "Who was the famous nurse known as the 'Angel of the Battlefield'?",
          es: "¿Quién fue la famosa enfermera conocida como el 'Ángel del Campo de Batalla'?",
          de: "Wer war die berühmte Krankenschwester, bekannt als der 'Engel des Schlachtfeldes'?",
          nl: "Wie was de beroemde verpleegster bekend als de 'Engel van het Slagveld'?"
        },
        options: [
          { en: "Clara Barton", es: "Clara Barton", de: "Clara Barton", nl: "Clara Barton" },
          { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" },
          { en: "Mary Seacole", es: "Mary Seacole", de: "Mary Seacole", nl: "Mary Seacole" },
          { en: "Dorothea Dix", es: "Dorothea Dix", de: "Dorothea Dix", nl: "Dorothea Dix" }
        ],
        correct: 0,
        explanation: {
          en: "Clara Barton earned this nickname for her work nursing soldiers during the American Civil War. She later founded the American Red Cross in 1881.",
          es: "Clara Barton se ganó este apodo por su trabajo cuidando soldados durante la Guerra Civil Americana. Más tarde fundó la Cruz Roja Americana en 1881.",
          de: "Clara Barton erhielt diesen Spitznamen für ihre Arbeit als Krankenschwester für Soldaten während des Amerikanischen Bürgerkriegs. Sie gründete später 1881 das Amerikanische Rote Kreuz.",
          nl: "Clara Barton verdiende deze bijnaam voor haar werk als verpleegster van soldaten tijdens de Amerikaanse Burgeroorlog. Ze richtte later in 1881 het Amerikaanse Rode Kruis op."
        }
      },
      {
        question: {
          en: "Which Ottoman sultan conquered Constantinople in 1453?",
          es: "¿Qué sultán otomano conquistó Constantinopla en 1453?",
          de: "Welcher osmanische Sultan eroberte 1453 Konstantinopel?",
          nl: "Welke Ottomaanse sultan veroverde Constantinopel in 1453?"
        },
        options: [
          { en: "Mehmed II", es: "Mehmed II", de: "Mehmed II.", nl: "Mehmed II" },
          { en: "Suleiman the Magnificent", es: "Solimán el Magnífico", de: "Süleyman der Prächtige", nl: "Süleyman de Grote" },
          { en: "Osman I", es: "Osmán I", de: "Osman I.", nl: "Osman I" },
          { en: "Selim I", es: "Selim I", de: "Selim I.", nl: "Selim I" }
        ],
        correct: 0,
        explanation: {
          en: "Mehmed II, known as 'the Conqueror,' captured Constantinople on May 29, 1453, ending the Byzantine Empire and establishing Ottoman control over the strategic city.",
          es: "Mehmed II, conocido como 'el Conquistador,' capturó Constantinopla el 29 de mayo de 1453, terminando el Imperio Bizantino y estableciendo el control otomano sobre la ciudad estratégica.",
          de: "Mehmed II., bekannt als 'der Eroberer,' eroberte Konstantinopel am 29. Mai 1453, beendete das Byzantinische Reich und etablierte die osmanische Kontrolle über die strategische Stadt.",
          nl: "Mehmed II, bekend als 'de Veroveraar,' veroverde Constantinopel op 29 mei 1453, beëindigde het Byzantijnse Rijk en vestigde Ottomaanse controle over de strategische stad."
        }
      },
      {
        question: {
          en: "Who was the African American leader who delivered the famous 'I Have a Dream' speech?",
          es: "¿Quién fue el líder afroamericano que pronunció el famoso discurso 'Tengo un Sueño'?",
          de: "Wer war der afroamerikanische Anführer, der die berühmte 'I Have a Dream'-Rede hielt?",
          nl: "Wie was de Afro-Amerikaanse leider die de beroemde 'I Have a Dream'-toespraak hield?"
        },
        options: [
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." },
          { en: "Malcolm X", es: "Malcolm X", de: "Malcolm X", nl: "Malcolm X" },
          { en: "Frederick Douglass", es: "Frederick Douglass", de: "Frederick Douglass", nl: "Frederick Douglass" },
          { en: "Jesse Jackson", es: "Jesse Jackson", de: "Jesse Jackson", nl: "Jesse Jackson" }
        ],
        correct: 0,
        explanation: {
          en: "Martin Luther King Jr. delivered this iconic speech on August 28, 1963, during the March on Washington for Jobs and Freedom, becoming a defining moment of the Civil Rights Movement.",
          es: "Martin Luther King Jr. pronunció este discurso icónico el 28 de agosto de 1963, durante la Marcha en Washington por el Trabajo y la Libertad, convirtiéndose en un momento definitorio del Movimiento de Derechos Civiles.",
          de: "Martin Luther King Jr. hielt diese ikonische Rede am 28. August 1963 während des Marsches auf Washington für Arbeit und Freiheit, was zu einem prägenden Moment der Bürgerrechtsbewegung wurde.",
          nl: "Martin Luther King Jr. hield deze iconische toespraak op 28 augustus 1963, tijdens de Mars op Washington voor Werk en Vrijheid, wat een bepalend moment werd van de Burgerrechtenbeweging."
        }
      },
      {
        question: {
          en: "Which Scottish scientist is known for discovering penicillin?",
          es: "¿Qué científico escocés es conocido por descubrir la penicilina?",
          de: "Welcher schottische Wissenschaftler ist für die Entdeckung des Penicillins bekannt?",
          nl: "Welke Schotse wetenschapper staat bekend om de ontdekking van penicilline?"
        },
        options: [
          { en: "Alexander Fleming", es: "Alexander Fleming", de: "Alexander Fleming", nl: "Alexander Fleming" },
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "John Logie Baird", es: "John Logie Baird", de: "John Logie Baird", nl: "John Logie Baird" },
          { en: "James Clerk Maxwell", es: "James Clerk Maxwell", de: "James Clerk Maxwell", nl: "James Clerk Maxwell" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Fleming discovered penicillin in 1928, accidentally noticing that a mold had killed bacteria in his laboratory. This discovery revolutionized medicine and saved millions of lives.",
          es: "Alexander Fleming descubrió la penicilina en 1928, notando accidentalmente que un moho había matado bacterias en su laboratorio. Este descubrimiento revolucionó la medicina y salvó millones de vidas.",
          de: "Alexander Fleming entdeckte 1928 das Penicillin, als er zufällig bemerkte, dass ein Schimmelpilz Bakterien in seinem Labor getötet hatte. Diese Entdeckung revolutionierte die Medizin und rettete Millionen von Leben.",
          nl: "Alexander Fleming ontdekte penicilline in 1928, toen hij per ongeluk opmerkte dat een schimmel bacteriën in zijn laboratorium had gedood. Deze ontdekking revolutioneerde de geneeskunde en redde miljoenen levens."
        }
      },
      {
        question: {
          en: "Who was the first person to reach the South Pole?",
          es: "¿Quién fue la primera persona en llegar al Polo Sur?",
          de: "Wer war die erste Person, die den Südpol erreichte?",
          nl: "Wie was de eerste persoon die de Zuidpool bereikte?"
        },
        options: [
          { en: "Roald Amundsen", es: "Roald Amundsen", de: "Roald Amundsen", nl: "Roald Amundsen" },
          { en: "Robert Falcon Scott", es: "Robert Falcon Scott", de: "Robert Falcon Scott", nl: "Robert Falcon Scott" },
          { en: "Ernest Shackleton", es: "Ernest Shackleton", de: "Ernest Shackleton", nl: "Ernest Shackleton" },
          { en: "Richard Byrd", es: "Richard Byrd", de: "Richard Byrd", nl: "Richard Byrd" }
        ],
        correct: 0,
        explanation: {
          en: "Norwegian explorer Roald Amundsen reached the South Pole on December 14, 1911, beating Robert Falcon Scott's British expedition by 34 days in the famous 'Race to the South Pole.'",
          es: "El explorador noruego Roald Amundsen llegó al Polo Sur el 14 de diciembre de 1911, ganando a la expedición británica de Robert Falcon Scott por 34 días en la famosa 'Carrera al Polo Sur.'",
          de: "Der norwegische Entdecker Roald Amundsen erreichte den Südpol am 14. Dezember 1911 und schlug Robert Falcon Scotts britische Expedition um 34 Tage im berühmten 'Wettlauf zum Südpol.'",
          nl: "De Noorse ontdekkingsreiziger Roald Amundsen bereikte de Zuidpool op 14 december 1911, versloeg Robert Falcon Scotts Britse expeditie met 34 dagen in de beroemde 'Race naar de Zuidpool.'"
        }
      },
      {
        question: {
          en: "Which Polish scientist won Nobel Prizes in both Physics and Chemistry?",
          es: "¿Qué científica polaca ganó Premios Nobel tanto en Física como en Química?",
          de: "Welche polnische Wissenschaftlerin gewann Nobelpreise sowohl in Physik als auch in Chemie?",
          nl: "Welke Poolse wetenschapper won Nobelprijzen in zowel Natuurkunde als Scheikunde?"
        },
        options: [
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Lise Meitner", es: "Lise Meitner", de: "Lise Meitner", nl: "Lise Meitner" },
          { en: "Barbara McClintock", es: "Barbara McClintock", de: "Barbara McClintock", nl: "Barbara McClintock" },
          { en: "Dorothy Hodgkin", es: "Dorothy Hodgkin", de: "Dorothy Hodgkin", nl: "Dorothy Hodgkin" }
        ],
        correct: 0,
        explanation: {
          en: "Marie Curie remains the only person to win Nobel Prizes in two different scientific fields - Physics in 1903 and Chemistry in 1911 for her work on radioactivity and radium.",
          es: "Marie Curie sigue siendo la única persona en ganar Premios Nobel en dos campos científicos diferentes - Física en 1903 y Química en 1911 por su trabajo en radioactividad y radio.",
          de: "Marie Curie bleibt die einzige Person, die Nobelpreise in zwei verschiedenen wissenschaftlichen Bereichen gewann - Physik 1903 und Chemie 1911 für ihre Arbeit über Radioaktivität und Radium.",
          nl: "Marie Curie blijft de enige persoon die Nobelprijzen won in twee verschillende wetenschappelijke vakgebieden - Natuurkunde in 1903 en Scheikunde in 1911 voor haar werk aan radioactiviteit en radium."
        }
      },
      {
        question: {
          en: "Who was the founder of modern Turkey and its first president?",
          es: "¿Quién fue el fundador de la Turquía moderna y su primer presidente?",
          de: "Wer war der Gründer der modernen Türkei und ihr erster Präsident?",
          nl: "Wie was de oprichter van het moderne Turkije en zijn eerste president?"
        },
        options: [
          { en: "Mustafa Kemal Atatürk", es: "Mustafa Kemal Atatürk", de: "Mustafa Kemal Atatürk", nl: "Mustafa Kemal Atatürk" },
          { en: "Ismet Inönü", es: "Ismet Inönü", de: "Ismet Inönü", nl: "Ismet Inönü" },
          { en: "Enver Pasha", es: "Enver Pasha", de: "Enver Pascha", nl: "Enver Pasha" },
          { en: "Celal Bayar", es: "Celal Bayar", de: "Celal Bayar", nl: "Celal Bayar" }
        ],
        correct: 0,
        explanation: {
          en: "Mustafa Kemal Atatürk (1881-1938) led the Turkish independence movement, abolished the Ottoman Empire, and established the Republic of Turkey in 1923, serving as its first president until his death.",
          es: "Mustafa Kemal Atatürk (1881-1938) lideró el movimiento de independencia turco, abolió el Imperio Otomano y estableció la República de Turquía en 1923, sirviendo como su primer presidente hasta su muerte.",
          de: "Mustafa Kemal Atatürk (1881-1938) führte die türkische Unabhängigkeitsbewegung an, schaffte das Osmanische Reich ab und gründete 1923 die Republik Türkei, wo er bis zu seinem Tod als erster Präsident diente.",
          nl: "Mustafa Kemal Atatürk (1881-1938) leidde de Turkse onafhankelijkheidsbeweging, schafte het Ottomaanse Rijk af en stichtte de Republiek Turkije in 1923, dienend als zijn eerste president tot zijn dood."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian pharaoh is famous for his intact tomb discovered in 1922?",
          es: "¿Qué faraón egipcio antiguo es famoso por su tumba intacta descubierta en 1922?",
          de: "Welcher altägyptische Pharao ist berühmt für sein intaktes Grab, das 1922 entdeckt wurde?",
          nl: "Welke oude Egyptische farao staat bekend om zijn intacte graf dat in 1922 werd ontdekt?"
        },
        options: [
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II.", nl: "Ramses II" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" }
        ],
        correct: 0,
        explanation: {
          en: "Tutankhamun's tomb was discovered by Howard Carter in 1922, nearly intact with thousands of artifacts, making it one of the most important archaeological discoveries in history.",
          es: "La tumba de Tutankamón fue descubierta por Howard Carter en 1922, casi intacta con miles de artefactos, convirtiéndola en uno de los descubrimientos arqueológicos más importantes de la historia.",
          de: "Tutanchamuns Grab wurde 1922 von Howard Carter entdeckt, nahezu unversehrt mit Tausenden von Artefakten, was es zu einer der wichtigsten archäologischen Entdeckungen der Geschichte macht.",
          nl: "Toetanchamons graf werd in 1922 ontdekt door Howard Carter, bijna intact met duizenden artefacten, wat het een van de belangrijkste archeologische ontdekkingen in de geschiedenis maakt."
        }
      },
      {
        question: {
          en: "Who was the Renaissance artist who painted the ceiling of the Sistine Chapel?",
          es: "¿Quién fue el artista renacentista que pintó el techo de la Capilla Sixtina?",
          de: "Wer war der Renaissance-Künstler, der die Decke der Sixtinischen Kapelle malte?",
          nl: "Wie was de Renaissance-kunstenaar die het plafond van de Sixtijnse Kapel schilderde?"
        },
        options: [
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Rafaël" },
          { en: "Donatello", es: "Donatello", de: "Donatello", nl: "Donatello" }
        ],
        correct: 0,
        explanation: {
          en: "Michelangelo painted the Sistine Chapel ceiling between 1508-1512, creating one of the most famous works of Renaissance art, including the iconic 'Creation of Adam.'",
          es: "Miguel Ángel pintó el techo de la Capilla Sixtina entre 1508-1512, creando una de las obras de arte renacentista más famosas, incluyendo la icónica 'Creación de Adán.'",
          de: "Michelangelo malte die Decke der Sixtinischen Kapelle zwischen 1508-1512 und schuf eines der berühmtesten Werke der Renaissance-Kunst, einschließlich der ikonischen 'Erschaffung Adams.'",
          nl: "Michelangelo schilderde het plafond van de Sixtijnse Kapel tussen 1508-1512, creëerde een van de beroemdste werken van Renaissance-kunst, inclusief de iconische 'Schepping van Adam.'"
        }
      },
      {
        question: {
          en: "Which ancient Greek philosopher was the teacher of Alexander the Great?",
          es: "¿Qué filósofo griego antiguo fue el maestro de Alejandro Magno?",
          de: "Welcher antike griechische Philosoph war der Lehrer Alexanders des Großen?",
          nl: "Welke oude Griekse filosoof was de leraar van Alexander de Grote?"
        },
        options: [
          { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" },
          { en: "Plato", es: "Platón", de: "Platon", nl: "Plato" },
          { en: "Socrates", es: "Sócrates", de: "Sokrates", nl: "Socrates" },
          { en: "Pythagoras", es: "Pitágoras", de: "Pythagoras", nl: "Pythagoras" }
        ],
        correct: 0,
        explanation: {
          en: "Aristotle tutored Alexander the Great from 343-340 BCE, significantly influencing the young prince's education and worldview before he became one of history's greatest conquerors.",
          es: "Aristóteles fue tutor de Alejandro Magno de 343-340 a.C., influyendo significativamente en la educación y cosmovisión del joven príncipe antes de que se convirtiera en uno de los mayores conquistadores de la historia.",
          de: "Aristoteles unterrichtete Alexander den Großen von 343-340 v.Chr. und beeinflusste die Bildung und Weltanschauung des jungen Prinzen erheblich, bevor er einer der größten Eroberer der Geschichte wurde.",
          nl: "Aristoteles onderwees Alexander de Grote van 343-340 v.Chr., beïnvloedde de opleiding en wereldbeeld van de jonge prins aanzienlijk voordat hij een van de grootste veroveraars uit de geschiedenis werd."
        }
      },
      {
        question: {
          en: "Who was the Indian leader known as the 'Father of the Nation'?",
          es: "¿Quién fue el líder indio conocido como el 'Padre de la Nación'?",
          de: "Wer war der indische Anführer, bekannt als 'Vater der Nation'?",
          nl: "Wie was de Indiase leider bekend als de 'Vader van de Natie'?"
        },
        options: [
          { en: "Mahatma Gandhi", es: "Mahatma Gandhi", de: "Mahatma Gandhi", nl: "Mahatma Gandhi" },
          { en: "Jawaharlal Nehru", es: "Jawaharlal Nehru", de: "Jawaharlal Nehru", nl: "Jawaharlal Nehru" },
          { en: "Subhas Chandra Bose", es: "Subhas Chandra Bose", de: "Subhas Chandra Bose", nl: "Subhas Chandra Bose" },
          { en: "Sardar Patel", es: "Sardar Patel", de: "Sardar Patel", nl: "Sardar Patel" }
        ],
        correct: 0,
        explanation: {
          en: "Mahatma Gandhi led India's independence movement through nonviolent civil disobedience, becoming a global symbol of peaceful resistance and earning the title 'Father of the Nation.'",
          es: "Mahatma Gandhi lideró el movimiento de independencia de India a través de la desobediencia civil no violenta, convirtiéndose en símbolo global de resistencia pacífica y ganándose el título de 'Padre de la Nación.'",
          de: "Mahatma Gandhi führte Indiens Unabhängigkeitsbewegung durch gewaltfreien zivilen Ungehorsam an, wurde zum globalen Symbol friedlichen Widerstands und erwarb sich den Titel 'Vater der Nation.'",
          nl: "Mahatma Gandhi leidde India's onafhankelijkheidsbeweging door geweldloze burgerlijke ongehoorzaamheid, werd een wereldwijd symbool van vreedzaam verzet en verdiende de titel 'Vader van de Natie.'"
        }
      },
      {
        question: {
          en: "Which British prime minister led the country during World War II?",
          es: "¿Qué primer ministro británico lideró el país durante la Segunda Guerra Mundial?",
          de: "Welcher britische Premierminister führte das Land während des Zweiten Weltkriegs?",
          nl: "Welke Britse premier leidde het land tijdens de Tweede Wereldoorlog?"
        },
        options: [
          { en: "Winston Churchill", es: "Winston Churchill", de: "Winston Churchill", nl: "Winston Churchill" },
          { en: "Neville Chamberlain", es: "Neville Chamberlain", de: "Neville Chamberlain", nl: "Neville Chamberlain" },
          { en: "Clement Attlee", es: "Clement Attlee", de: "Clement Attlee", nl: "Clement Attlee" },
          { en: "Anthony Eden", es: "Anthony Eden", de: "Anthony Eden", nl: "Anthony Eden" }
        ],
        correct: 0,
        explanation: {
          en: "Winston Churchill served as British Prime Minister from 1940-1945, leading the nation through World War II with his inspiring speeches and steadfast determination.",
          es: "Winston Churchill fue Primer Ministro británico de 1940-1945, liderando la nación a través de la Segunda Guerra Mundial con sus discursos inspiradores y determinación inquebrantable.",
          de: "Winston Churchill war von 1940-1945 britischer Premierminister und führte die Nation durch den Zweiten Weltkrieg mit seinen inspirierenden Reden und unerschütterlicher Entschlossenheit.",
          nl: "Winston Churchill was van 1940-1945 Britse premier, leidde de natie door de Tweede Wereldoorlog met zijn inspirerende toespraken en standvastige vastberadenheid."
        }
      },
      {
        question: {
          en: "Who wrote 'The Communist Manifesto' with Friedrich Engels?",
          es: "¿Quién escribió 'El Manifiesto Comunista' con Friedrich Engels?",
          de: "Wer schrieb 'Das Kommunistische Manifest' mit Friedrich Engels?",
          nl: "Wie schreef 'Het Communistisch Manifest' met Friedrich Engels?"
        },
        options: [
          { en: "Karl Marx", es: "Karl Marx", de: "Karl Marx", nl: "Karl Marx" },
          { en: "Vladimir Lenin", es: "Vladimir Lenin", de: "Wladimir Lenin", nl: "Vladimir Lenin" },
          { en: "Leon Trotsky", es: "León Trotsky", de: "Leo Trotzki", nl: "Leon Trotski" },
          { en: "Joseph Stalin", es: "Joseph Stalin", de: "Josef Stalin", nl: "Jozef Stalin" }
        ],
        correct: 0,
        explanation: {
          en: "Karl Marx and Friedrich Engels published 'The Communist Manifesto' in 1848, outlining their theory of class struggle and revolutionary socialism that would influence political movements worldwide.",
          es: "Karl Marx y Friedrich Engels publicaron 'El Manifiesto Comunista' en 1848, esbozando su teoría de la lucha de clases y socialismo revolucionario que influiría en movimientos políticos mundiales.",
          de: "Karl Marx und Friedrich Engels veröffentlichten 1848 'Das Kommunistische Manifest', in dem sie ihre Theorie des Klassenkampfes und des revolutionären Sozialismus darlegten, die politische Bewegungen weltweit beeinflussen sollte.",
          nl: "Karl Marx en Friedrich Engels publiceerden 'Het Communistisch Manifest' in 1848, schetsten hun theorie van klassenstrijd en revolutionair socialisme die politieke bewegingen wereldwijd zou beïnvloeden."
        }
      },
      {
        question: {
          en: "Which ancient philosopher was forced to drink hemlock after being convicted of corrupting the youth?",
          es: "¿Qué filósofo antiguo fue obligado a beber cicuta después de ser condenado por corromper a la juventud?",
          de: "Welcher antike Philosoph wurde gezwungen, Schierling zu trinken, nachdem er wegen Verderbung der Jugend verurteilt wurde?",
          nl: "Welke oude filosoof werd gedwongen gifbeker te drinken na veroordeeld te zijn voor het corrumperen van de jeugd?"
        },
        options: [
          { en: "Socrates", es: "Sócrates", de: "Sokrates", nl: "Socrates" },
          { en: "Plato", es: "Platón", de: "Platon", nl: "Plato" },
          { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" },
          { en: "Diogenes", es: "Diógenes", de: "Diogenes", nl: "Diogenes" }
        ],
        correct: 0,
        explanation: {
          en: "Socrates was sentenced to death in 399 BCE by drinking hemlock, convicted of impiety and corrupting Athenian youth through his philosophical questioning method.",
          es: "Sócrates fue sentenciado a muerte en 399 a.C. bebiendo cicuta, condenado por impiedad y corromper a la juventud ateniense a través de su método de cuestionamiento filosófico.",
          de: "Sokrates wurde 399 v.Chr. zum Tode verurteilt, indem er Schierling trank, verurteilt wegen Gottlosigkeit und Verderbung der athenischen Jugend durch seine philosophische Fragemethode.",
          nl: "Socrates werd in 399 v.Chr. ter dood veroordeeld door gifbeker te drinken, veroordeeld voor goddeloosheid en het corrumperen van de Atheense jeugd door zijn filosofische vraagmethode."
        }
      },
      {
        question: {
          en: "Who was the first female Prime Minister of the United Kingdom?",
          es: "¿Quién fue la primera mujer Primera Ministra del Reino Unido?",
          de: "Wer war die erste weibliche Premierministerin des Vereinigten Königreichs?",
          nl: "Wie was de eerste vrouwelijke premier van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "Margaret Thatcher", es: "Margaret Thatcher", de: "Margaret Thatcher", nl: "Margaret Thatcher" },
          { en: "Theresa May", es: "Theresa May", de: "Theresa May", nl: "Theresa May" },
          { en: "Angela Merkel", es: "Angela Merkel", de: "Angela Merkel", nl: "Angela Merkel" },
          { en: "Indira Gandhi", es: "Indira Gandhi", de: "Indira Gandhi", nl: "Indira Gandhi" }
        ],
        correct: 0,
        explanation: {
          en: "Margaret Thatcher served as Prime Minister from 1979-1990, becoming Britain's first female PM and earning the nickname 'Iron Lady' for her uncompromising political stance.",
          es: "Margaret Thatcher fue Primera Ministra de 1979-1990, convirtiéndose en la primera mujer PM de Gran Bretaña y ganándose el apodo de 'Dama de Hierro' por su postura política intransigente.",
          de: "Margaret Thatcher war von 1979-1990 Premierministerin, wurde Großbritanniens erste weibliche PM und erhielt den Spitznamen 'Eiserne Lady' für ihre kompromisslose politische Haltung.",
          nl: "Margaret Thatcher was van 1979-1990 premier, werd de eerste vrouwelijke premier van Groot-Brittannië en verdiende de bijnaam 'IJzeren Lady' voor haar onverzettelijke politieke standpunt."
        }
      },
      {
        question: {
          en: "Which South African leader became the first Black president after the end of apartheid?",
          es: "¿Qué líder sudafricano se convirtió en el primer presidente negro después del fin del apartheid?",
          de: "Welcher südafrikanische Anführer wurde nach dem Ende der Apartheid der erste schwarze Präsident?",
          nl: "Welke Zuid-Afrikaanse leider werd de eerste zwarte president na het einde van de apartheid?"
        },
        options: [
          { en: "Nelson Mandela", es: "Nelson Mandela", de: "Nelson Mandela", nl: "Nelson Mandela" },
          { en: "Desmond Tutu", es: "Desmond Tutu", de: "Desmond Tutu", nl: "Desmond Tutu" },
          { en: "Thabo Mbeki", es: "Thabo Mbeki", de: "Thabo Mbeki", nl: "Thabo Mbeki" },
          { en: "Steve Biko", es: "Steve Biko", de: "Steve Biko", nl: "Steve Biko" }
        ],
        correct: 0,
        explanation: {
          en: "Nelson Mandela became South Africa's first Black president in 1994 after spending 27 years in prison, leading the country's transition from apartheid to democracy.",
          es: "Nelson Mandela se convirtió en el primer presidente negro de Sudáfrica en 1994 después de pasar 27 años en prisión, liderando la transición del país del apartheid a la democracia.",
          de: "Nelson Mandela wurde 1994 Südafrikas erster schwarzer Präsident, nachdem er 27 Jahre im Gefängnis verbracht hatte, und führte den Übergang des Landes von der Apartheid zur Demokratie.",
          nl: "Nelson Mandela werd Zuid-Afrika's eerste zwarte president in 1994 na 27 jaar gevangenis, leidde de overgang van het land van apartheid naar democratie."
        }
      },
      {
        question: {
          en: "Who invented the printing press around 1440?",
          es: "¿Quién inventó la imprenta alrededor de 1440?",
          de: "Wer erfand um 1440 die Druckerpresse?",
          nl: "Wie vond rond 1440 de drukpers uit?"
        },
        options: [
          { en: "Johannes Gutenberg", es: "Johannes Gutenberg", de: "Johannes Gutenberg", nl: "Johannes Gutenberg" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "William Caxton", es: "William Caxton", de: "William Caxton", nl: "William Caxton" },
          { en: "Aldus Manutius", es: "Aldo Manuzio", de: "Aldus Manutius", nl: "Aldus Manutius" }
        ],
        correct: 0,
        explanation: {
          en: "Johannes Gutenberg invented movable type printing in Europe around 1440, revolutionizing the spread of knowledge and making books accessible to the masses.",
          es: "Johannes Gutenberg inventó la impresión de tipos móviles en Europa alrededor de 1440, revolucionando la difusión del conocimiento y haciendo los libros accesibles a las masas.",
          de: "Johannes Gutenberg erfand um 1440 den Buchdruck mit beweglichen Lettern in Europa, revolutionierte die Verbreitung von Wissen und machte Bücher für die Massen zugänglich.",
          nl: "Johannes Gutenberg vond rond 1440 de boekdrukkunst met losse letters uit in Europa, revolutioneerde de verspreiding van kennis en maakte boeken toegankelijk voor de massa."
        }
      },
      {
        question: {
          en: "Which Russian leader introduced policies of glasnost and perestroika?",
          es: "¿Qué líder ruso introdujo políticas de glasnost y perestroika?",
          de: "Welcher russische Führer führte die Politik von Glasnost und Perestroika ein?",
          nl: "Welke Russische leider introduceerde het beleid van glasnost en perestrojka?"
        },
        options: [
          { en: "Mikhail Gorbachev", es: "Mijaíl Gorbachov", de: "Michail Gorbatschow", nl: "Michail Gorbatsjov" },
          { en: "Boris Yeltsin", es: "Boris Yeltsin", de: "Boris Jelzin", nl: "Boris Jeltsin" },
          { en: "Leonid Brezhnev", es: "Leonid Brézhnev", de: "Leonid Breschnew", nl: "Leonid Brezjnev" },
          { en: "Nikita Khrushchev", es: "Nikita Jrushchov", de: "Nikita Chruschtschow", nl: "Nikita Chroesjtsjov" }
        ],
        correct: 0,
        explanation: {
          en: "Mikhail Gorbachev introduced glasnost (openness) and perestroika (restructuring) in the 1980s, leading to dramatic reforms that ultimately contributed to the dissolution of the Soviet Union.",
          es: "Mijaíl Gorbachov introdujo glasnost (apertura) y perestroika (reestructuración) en los años 80, llevando a reformas dramáticas que finalmente contribuyeron a la disolución de la Unión Soviética.",
          de: "Michail Gorbatschow führte in den 1980er Jahren Glasnost (Offenheit) und Perestroika (Umstrukturierung) ein, was zu dramatischen Reformen führte, die letztlich zur Auflösung der Sowjetunion beitrugen.",
          nl: "Michail Gorbatsjov introduceerde glasnost (openheid) en perestrojka (herstructurering) in de jaren 80, leidde tot dramatische hervormingen die uiteindelijk bijdroegen aan de ontbinding van de Sovjet-Unie."
        }
      },
      {
        question: {
          en: "Who was the Prussian king who became the first German Emperor?",
          es: "¿Quién fue el rey prusiano que se convirtió en el primer Emperador Alemán?",
          de: "Wer war der preußische König, der der erste Deutsche Kaiser wurde?",
          nl: "Wie was de Pruisische koning die de eerste Duitse keizer werd?"
        },
        options: [
          { en: "Wilhelm I", es: "Guillermo I", de: "Wilhelm I.", nl: "Wilhelm I" },
          { en: "Frederick the Great", es: "Federico el Grande", de: "Friedrich der Große", nl: "Frederik de Grote" },
          { en: "Wilhelm II", es: "Guillermo II", de: "Wilhelm II.", nl: "Wilhelm II" },
          { en: "Frederick William IV", es: "Federico Guillermo IV", de: "Friedrich Wilhelm IV.", nl: "Frederik Willem IV" }
        ],
        correct: 0,
        explanation: {
          en: "Wilhelm I was proclaimed German Emperor on January 18, 1871, in the Hall of Mirrors at Versailles, marking the unification of Germany under Prussian leadership.",
          es: "Guillermo I fue proclamado Emperador Alemán el 18 de enero de 1871, en la Sala de los Espejos en Versalles, marcando la unificación de Alemania bajo liderazgo prusiano.",
          de: "Wilhelm I. wurde am 18. Januar 1871 im Spiegelsaal von Versailles zum Deutschen Kaiser proklamiert und markierte die Einigung Deutschlands unter preußischer Führung.",
          nl: "Wilhelm I werd op 18 januari 1871 uitgeroepen tot Duitse keizer in de Spiegelzaal van Versailles, markeerde de eenwording van Duitsland onder Pruisisch leiderschap."
        }
      },
      {
        question: {
          en: "Which English naturalist developed the theory of evolution by natural selection?",
          es: "¿Qué naturalista inglés desarrolló la teoría de la evolución por selección natural?",
          de: "Welcher englische Naturforscher entwickelte die Evolutionstheorie durch natürliche Selektion?",
          nl: "Welke Engelse natuuronderzoeker ontwikkelde de evolutietheorie door natuurlijke selectie?"
        },
        options: [
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Alfred Russel Wallace", es: "Alfred Russel Wallace", de: "Alfred Russel Wallace", nl: "Alfred Russel Wallace" },
          { en: "Jean-Baptiste Lamarck", es: "Jean-Baptiste Lamarck", de: "Jean-Baptiste Lamarck", nl: "Jean-Baptiste Lamarck" },
          { en: "Thomas Huxley", es: "Thomas Huxley", de: "Thomas Huxley", nl: "Thomas Huxley" }
        ],
        correct: 0,
        explanation: {
          en: "Charles Darwin published 'On the Origin of Species' in 1859, presenting evidence for evolution through natural selection and revolutionizing biological sciences.",
          es: "Charles Darwin publicó 'El Origen de las Especies' en 1859, presentando evidencia de la evolución a través de la selección natural y revolucionando las ciencias biológicas.",
          de: "Charles Darwin veröffentlichte 1859 'Über die Entstehung der Arten', präsentierte Beweise für die Evolution durch natürliche Selektion und revolutionierte die Biowissenschaften.",
          nl: "Charles Darwin publiceerde 'Over het Ontstaan van Soorten' in 1859, presenteerde bewijs voor evolutie door natuurlijke selectie en revolutioneerde de biologische wetenschappen."
        }
      },
      {
        question: {
          en: "Who was the Spanish conquistador who conquered the Inca Empire?",
          es: "¿Quién fue el conquistador español que conquistó el Imperio Inca?",
          de: "Wer war der spanische Konquistador, der das Inkareich eroberte?",
          nl: "Wie was de Spaanse conquistador die het Inca-rijk veroverde?"
        },
        options: [
          { en: "Francisco Pizarro", es: "Francisco Pizarro", de: "Francisco Pizarro", nl: "Francisco Pizarro" },
          { en: "Hernán Cortés", es: "Hernán Cortés", de: "Hernán Cortés", nl: "Hernán Cortés" },
          { en: "Diego de Almagro", es: "Diego de Almagro", de: "Diego de Almagro", nl: "Diego de Almagro" },
          { en: "Vasco Núñez de Balboa", es: "Vasco Núñez de Balboa", de: "Vasco Núñez de Balboa", nl: "Vasco Núñez de Balboa" }
        ],
        correct: 0,
        explanation: {
          en: "Francisco Pizarro conquered the Inca Empire in 1532-1533, capturing Emperor Atahualpa and establishing Spanish colonial rule over Peru and surrounding territories.",
          es: "Francisco Pizarro conquistó el Imperio Inca en 1532-1533, capturando al Emperador Atahualpa y estableciendo el dominio colonial español sobre Perú y territorios circundantes.",
          de: "Francisco Pizarro eroberte 1532-1533 das Inkareich, nahm Kaiser Atahualpa gefangen und etablierte die spanische Kolonialherrschaft über Peru und umliegende Gebiete.",
          nl: "Francisco Pizarro veroverde het Inca-rijk in 1532-1533, nam keizer Atahualpa gevangen en vestigde de Spaanse koloniale heerschappij over Peru en omliggende gebieden."
        }
      },
      {
        question: {
          en: "Which American inventor is credited with inventing the telephone?",
          es: "¿A qué inventor estadounidense se le atribuye la invención del teléfono?",
          de: "Welchem amerikanischen Erfinder wird die Erfindung des Telefons zugeschrieben?",
          nl: "Welke Amerikaanse uitvinder wordt gecrediteerd met de uitvinding van de telefoon?"
        },
        options: [
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Elisha Gray", es: "Elisha Gray", de: "Elisha Gray", nl: "Elisha Gray" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Graham Bell was granted the first U.S. patent for the telephone in 1876, though the invention's credit remains somewhat disputed with other contemporary inventors.",
          es: "Alexander Graham Bell recibió la primera patente estadounidense del teléfono en 1876, aunque el crédito de la invención permanece algo disputado con otros inventores contemporáneos.",
          de: "Alexander Graham Bell erhielt 1876 das erste US-Patent für das Telefon, obwohl die Anerkennung für die Erfindung mit anderen zeitgenössischen Erfindern umstritten bleibt.",
          nl: "Alexander Graham Bell kreeg in 1876 het eerste Amerikaanse patent voor de telefoon, hoewel het krediet voor de uitvinding enigszins betwist blijft met andere hedendaagse uitvinders."
        }
      },
      {
        question: {
          en: "Who was the Carthaginian general who crossed the Alps with elephants to fight Rome?",
          es: "¿Quién fue el general cartaginés que cruzó los Alpes con elefantes para luchar contra Roma?",
          de: "Wer war der karthagische General, der mit Elefanten die Alpen überquerte, um gegen Rom zu kämpfen?",
          nl: "Wie was de Carthaagse generaal die de Alpen overstak met olifanten om tegen Rome te vechten?"
        },
        options: [
          { en: "Hannibal Barca", es: "Aníbal Barca", de: "Hannibal Barkas", nl: "Hannibal Barca" },
          { en: "Scipio Africanus", es: "Escipión el Africano", de: "Scipio Africanus", nl: "Scipio Africanus" },
          { en: "Hamilcar Barca", es: "Amílcar Barca", de: "Hamilkar Barkas", nl: "Hamilcar Barca" },
          { en: "Hasdrubal", es: "Asdrúbal", de: "Hasdrubal", nl: "Hasdrubal" }
        ],
        correct: 0,
        explanation: {
          en: "Hannibal Barca led his army, including war elephants, across the Alps in 218 BCE during the Second Punic War, executing one of the most famous military maneuvers in history.",
          es: "Aníbal Barca dirigió su ejército, incluyendo elefantes de guerra, a través de los Alpes en 218 a.C. durante la Segunda Guerra Púnica, ejecutando una de las maniobras militares más famosas de la historia.",
          de: "Hannibal Barkas führte 218 v.Chr. während des Zweiten Punischen Krieges seine Armee, einschließlich Kriegselefanten, über die Alpen und führte eines der berühmtesten Militärmanöver der Geschichte aus.",
          nl: "Hannibal Barca leidde zijn leger, inclusief oorlogsolifanten, over de Alpen in 218 v.Chr. tijdens de Tweede Punische Oorlog, voerde een van de beroemdste militaire manoeuvres in de geschiedenis uit."
        }
      },
      {
        question: {
          en: "Which Persian queen helped save the Jewish people according to the biblical Book of Esther?",
          es: "¿Qué reina persa ayudó a salvar al pueblo judío según el Libro bíblico de Ester?",
          de: "Welche persische Königin half laut dem biblischen Buch Esther, das jüdische Volk zu retten?",
          nl: "Welke Perzische koningin hielp het Joodse volk te redden volgens het bijbelse boek Esther?"
        },
        options: [
          { en: "Esther", es: "Ester", de: "Esther", nl: "Esther" },
          { en: "Vashti", es: "Vasti", de: "Waschti", nl: "Vasti" },
          { en: "Jezebel", es: "Jezabel", de: "Isebel", nl: "Izebel" },
          { en: "Athaliah", es: "Atalía", de: "Atalja", nl: "Athalia" }
        ],
        correct: 0,
        explanation: {
          en: "Queen Esther risked her life to reveal a plot against the Jews to King Ahasuerus of Persia, saving her people from destruction around 473 BCE.",
          es: "La reina Ester arriesgó su vida para revelar un complot contra los judíos al rey Asuero de Persia, salvando a su pueblo de la destrucción alrededor del 473 a.C.",
          de: "Königin Esther riskierte ihr Leben, um König Ahasveros von Persien einen Plan gegen die Juden zu offenbaren und rettete ihr Volk um 473 v.Chr. vor der Vernichtung.",
          nl: "Koningin Esther riskeerde haar leven om een complot tegen de Joden aan koning Ahasveros van Perzië te onthullen, redde haar volk van vernietiging rond 473 v.Chr."
        }
      },
      {
        question: {
          en: "Who was the Italian astronomer placed under house arrest for supporting heliocentrism?",
          es: "¿Quién fue el astrónomo italiano puesto bajo arresto domiciliario por apoyar el heliocentrismo?",
          de: "Wer war der italienische Astronom, der wegen seiner Unterstützung des Heliozentrismus unter Hausarrest gestellt wurde?",
          nl: "Wie was de Italiaanse astronoom die onder huisarrest werd geplaatst voor het ondersteunen van heliocentrisme?"
        },
        options: [
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Nicolaus Copernicus", es: "Nicolás Copérnico", de: "Nikolaus Kopernikus", nl: "Nicolaas Copernicus" },
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },
          { en: "Tycho Brahe", es: "Tycho Brahe", de: "Tycho Brahe", nl: "Tycho Brahe" }
        ],
        correct: 0,
        explanation: {
          en: "Galileo Galilei was tried by the Inquisition in 1633 for supporting Copernicus's theory that Earth orbits the Sun, and spent his final years under house arrest.",
          es: "Galileo Galilei fue juzgado por la Inquisición en 1633 por apoyar la teoría de Copérnico de que la Tierra orbita el Sol, y pasó sus últimos años bajo arresto domiciliario.",
          de: "Galileo Galilei wurde 1633 von der Inquisition angeklagt, weil er die Theorie von Kopernikus unterstützte, dass die Erde die Sonne umkreist, und verbrachte seine letzten Jahre unter Hausarrest.",
          nl: "Galileo Galilei werd in 1633 berecht door de Inquisitie voor het ondersteunen van Copernicus' theorie dat de aarde om de zon draait, en bracht zijn laatste jaren onder huisarrest door."
        }
      },
      {
        question: {
          en: "Which French military leader rose from a commoner to become Emperor?",
          es: "¿Qué líder militar francés ascendió de plebeyo a Emperador?",
          de: "Welcher französische Militärführer stieg vom einfachen Bürger zum Kaiser auf?",
          nl: "Welke Franse militaire leider steeg op van gewone burger tot keizer?"
        },
        options: [
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
          { en: "Louis XIV", es: "Luis XIV", de: "Ludwig XIV.", nl: "Lodewijk XIV" },
          { en: "Charles de Gaulle", es: "Charles de Gaulle", de: "Charles de Gaulle", nl: "Charles de Gaulle" },
          { en: "Louis Philippe", es: "Luis Felipe", de: "Louis-Philippe", nl: "Louis Philippe" }
        ],
        correct: 0,
        explanation: {
          en: "Napoleon Bonaparte rose through military ranks during the French Revolution and crowned himself Emperor of France in 1804, conquering much of Europe before his defeat in 1815.",
          es: "Napoleón Bonaparte ascendió por los rangos militares durante la Revolución Francesa y se coronó Emperador de Francia en 1804, conquistando gran parte de Europa antes de su derrota en 1815.",
          de: "Napoleon Bonaparte stieg während der Französischen Revolution durch die militärischen Ränge auf und krönte sich 1804 zum Kaiser von Frankreich, eroberte einen Großteil Europas vor seiner Niederlage 1815.",
          nl: "Napoleon Bonaparte steeg op door militaire rangen tijdens de Franse Revolutie en kroonde zichzelf tot keizer van Frankrijk in 1804, veroverde een groot deel van Europa voor zijn nederlaag in 1815."
        }
      },
      {
        question: {
          en: "Who was the queen of ancient Egypt known for her romantic relationships with Julius Caesar and Mark Antony?",
          es: "¿Quién fue la reina del antiguo Egipto conocida por sus relaciones románticas con Julio César y Marco Antonio?",
          de: "Wer war die Königin des alten Ägypten, bekannt für ihre romantischen Beziehungen mit Julius Caesar und Marcus Antonius?",
          nl: "Wie was de koningin van het oude Egypte bekend om haar romantische relaties met Julius Caesar en Marcus Antonius?"
        },
        options: [
          { en: "Cleopatra VII", es: "Cleopatra VII", de: "Kleopatra VII.", nl: "Cleopatra VII" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" },
          { en: "Nefertari", es: "Nefertari", de: "Nefertari", nl: "Nefertari" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra VII was the last active pharaoh of ancient Egypt, known for her political alliances and romances with Roman leaders Julius Caesar and Mark Antony.",
          es: "Cleopatra VII fue la última faraona activa del antiguo Egipto, conocida por sus alianzas políticas y romances con los líderes romanos Julio César y Marco Antonio.",
          de: "Kleopatra VII. war die letzte aktive Pharaonin des alten Ägypten, bekannt für ihre politischen Bündnisse und Romanzen mit den römischen Führern Julius Caesar und Marcus Antonius.",
          nl: "Cleopatra VII was de laatste actieve farao van het oude Egypte, bekend om haar politieke allianties en romances met Romeinse leiders Julius Caesar en Marcus Antonius."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
