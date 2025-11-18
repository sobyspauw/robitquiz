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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();