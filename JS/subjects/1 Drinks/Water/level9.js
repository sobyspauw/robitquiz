// Quiz - Level 9: Drinken - Water (Watergeschiedenis)
(function() {
  const level9 = {
    name: {
      en: "Water History",
      es: "Historia del Agua",
      de: "Wassergeschichte",
      nl: "Watergeschiedenis"
    },
    questions: [
      {
        question: {
          en: "When was the first water treatment plant built?",
          es: "¿Cuándo se construyó la primera planta de tratamiento de agua?",
          de: "Wann wurde die erste Wasseraufbereitungsanlage gebaut?",
          nl: "Wanneer werd de eerste waterzuiveringsinstallatie gebouwd?"
        },
        options: [
          { en: "1804 in Paisley, Scotland", es: "1804 en Paisley, Escocia", de: "1804 in Paisley, Schottland", nl: "1804 in Paisley, Schotland" },
          { en: "1820 in London, England", es: "1820 en Londres, Inglaterra", de: "1820 in London, England", nl: "1820 in Londen, Engeland" },
          { en: "1850 in New York, USA", es: "1850 en Nueva York, EUA", de: "1850 in New York, USA", nl: "1850 in New York, VS" },
          { en: "1875 in Paris, France", es: "1875 en París, Francia", de: "1875 in Paris, Frankreich", nl: "1875 in Parijs, Frankrijk" }
        ],
        correct: 0,
        explanation: {
          en: "The first water treatment plant was built in 1804 in Paisley, Scotland, using slow sand filtration.",
          es: "La primera planta de tratamiento de agua se construyó en 1804 en Paisley, Escocia, usando filtración lenta de arena.",
          de: "Die erste Wasseraufbereitungsanlage wurde 1804 in Paisley, Schottland, mit langsamer Sandfiltration gebaut.",
          nl: "De eerste waterzuiveringsinstallatie werd gebouwd in 1804 in Paisley, Schotland, met langzame zandfiltratie."
        }
      },
      {
        question: {
          en: "Who discovered that cholera was waterborne in 1854?",
          es: "¿Quién descubrió que el cólera se transmitía por el agua en 1854?",
          de: "Wer entdeckte 1854, dass Cholera über das Wasser übertragen wird?",
          nl: "Wie ontdekte in 1854 dat cholera via water werd overgedragen?"
        },
        options: [
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "John Snow", es: "John Snow", de: "John Snow", nl: "John Snow" },
          { en: "Robert Koch", es: "Robert Koch", de: "Robert Koch", nl: "Robert Koch" },
          { en: "Joseph Lister", es: "Joseph Lister", de: "Joseph Lister", nl: "Joseph Lister" }
        ],
        correct: 1,
        explanation: {
          en: "Dr. John Snow traced a cholera outbreak in London to contaminated water from a Broad Street pump.",
          es: "El Dr. John Snow rastreó un brote de cólera en Londres hasta agua contaminada de una bomba en Broad Street.",
          de: "Dr. John Snow verfolgte einen Cholera-Ausbruch in London bis zu kontaminiertem Wasser aus einer Broad Street-Pumpe.",
          nl: "Dr. John Snow traceerde een cholera-uitbraak in Londen naar vervuild water van een Broad Street pomp."
        }
      },
      {
        question: {
          en: "When was chlorine first used for water disinfection?",
          es: "¿Cuándo se usó cloro por primera vez para la desinfección del agua?",
          de: "Wann wurde Chlor erstmals zur Wasserdesinfektion verwendet?",
          nl: "Wanneer werd chloor voor het eerst gebruikt voor waterdesinfectie?"
        },
        options: [
          { en: "1897 in Maidstone, England", es: "1897 en Maidstone, Inglaterra", de: "1897 in Maidstone, England", nl: "1897 in Maidstone, Engeland" },
          { en: "1905 in Jersey City, USA", es: "1905 en Jersey City, EUA", de: "1905 in Jersey City, USA", nl: "1905 in Jersey City, VS" },
          { en: "1910 in Berlin, Germany", es: "1910 en Berlín, Alemania", de: "1910 in Berlin, Deutschland", nl: "1910 in Berlijn, Duitsland" },
          { en: "1915 in Paris, France", es: "1915 en París, Francia", de: "1915 in Paris, Frankreich", nl: "1915 in Parijs, Frankrijk" }
        ],
        correct: 0,
        explanation: {
          en: "Chlorine was first used continuously for water disinfection in 1897 in Maidstone, England, following a typhoid outbreak.",
          es: "El cloro se usó por primera vez de manera continua para la desinfección del agua en 1897 en Maidstone, Inglaterra, tras un brote de tifoidea.",
          de: "Chlor wurde erstmals 1897 in Maidstone, England, kontinuierlich zur Wasserdesinfektion verwendet, nach einem Typhus-Ausbruch.",
          nl: "Chloor werd voor het eerst continu gebruikt voor waterdesinfectie in 1897 in Maidstone, Engeland, na een tyfusuitbraak."
        }
      },
      {
        question: {
          en: "Which ancient civilization built the first aqueducts?",
          es: "¿Qué civilización antigua construyó los primeros acueductos?",
          de: "Welche antike Zivilisation baute die ersten Aquädukte?",
          nl: "Welke oude beschaving bouwde de eerste aquaducten?"
        },
        options: [
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" },
          { en: "Greeks", es: "Griegos", de: "Griechen", nl: "Grieken" },
          { en: "Romans", es: "Romanos", de: "Römer", nl: "Romeinen" },
          { en: "Mesopotamians", es: "Mesopotámicos", de: "Mesopotamier", nl: "Mesopotamiërs" }
        ],
        correct: 3,
        explanation: {
          en: "The Mesopotamians built the first known aqueducts around 700 BCE, though Romans later perfected the technology.",
          es: "Los mesopotámicos construyeron los primeros acueductos conocidos alrededor del 700 a.C., aunque los romanos luego perfeccionaron la tecnología.",
          de: "Die Mesopotamier bauten die ersten bekannten Aquädukte um 700 v. Chr., obwohl die Römer die Technologie später perfektionierten.",
          nl: "De Mesopotamiërs bouwden de eerste bekende aquaducten rond 700 v.Chr., hoewel de Romeinen de technologie later perfectioneerden."
        }
      },
      {
        question: {
          en: "When was fluoride first added to public water supplies?",
          es: "¿Cuándo se añadió fluoruro por primera vez a los suministros públicos de agua?",
          de: "Wann wurde Fluorid erstmals öffentlichen Wasserversorgungen zugesetzt?",
          nl: "Wanneer werd fluoride voor het eerst toegevoegd aan openbare watervoorzieningen?"
        },
        options: [
          { en: "1938 in Michigan, USA", es: "1938 en Michigan, EUA", de: "1938 in Michigan, USA", nl: "1938 in Michigan, VS" },
          { en: "1945 in Grand Rapids, USA", es: "1945 en Grand Rapids, EUA", de: "1945 in Grand Rapids, USA", nl: "1945 in Grand Rapids, VS" },
          { en: "1950 in Toronto, Canada", es: "1950 en Toronto, Canadá", de: "1950 in Toronto, Kanada", nl: "1950 in Toronto, Canada" },
          { en: "1955 in London, England", es: "1955 en Londres, Inglaterra", de: "1955 in London, England", nl: "1955 in Londen, Engeland" }
        ],
        correct: 1,
        explanation: {
          en: "Grand Rapids, Michigan became the first city to fluoridate its water supply in 1945, reducing tooth decay by 60%.",
          es: "Grand Rapids, Michigan se convirtió en la primera ciudad en fluorar su suministro de agua en 1945, reduciendo las caries dentales en un 60%.",
          de: "Grand Rapids, Michigan wurde 1945 die erste Stadt, die ihr Wasser fluoridierte und Karies um 60% reduzierte.",
          nl: "Grand Rapids, Michigan werd in 1945 de eerste stad die haar watervoorziening fluorideerde, waardoor tandcariës met 60% verminderde."
        }
      },
      {
        question: {
          en: "Who invented the modern reverse osmosis membrane in 1959?",
          es: "¿Quién inventó la membrana moderna de ósmosis inversa en 1959?",
          de: "Wer erfand 1959 die moderne Umkehrosmose-Membran?",
          nl: "Wie vond in 1959 de moderne omgekeerde osmose membraan uit?"
        },
        options: [
          { en: "Sidney Loeb and Srinivasa Sourirajan", es: "Sidney Loeb y Srinivasa Sourirajan", de: "Sidney Loeb und Srinivasa Sourirajan", nl: "Sidney Loeb en Srinivasa Sourirajan" },
          { en: "Charles Wilson and John Reid", es: "Charles Wilson y John Reid", de: "Charles Wilson und John Reid", nl: "Charles Wilson en John Reid" },
          { en: "Robert Burns and James Clark", es: "Robert Burns y James Clark", de: "Robert Burns und James Clark", nl: "Robert Burns en James Clark" },
          { en: "Thomas Edison and Nikola Tesla", es: "Thomas Edison y Nikola Tesla", de: "Thomas Edison und Nikola Tesla", nl: "Thomas Edison en Nikola Tesla" }
        ],
        correct: 0,
        explanation: {
          en: "Sidney Loeb and Srinivasa Sourirajan at UCLA developed the first practical reverse osmosis membrane using cellulose acetate.",
          es: "Sidney Loeb y Srinivasa Sourirajan en UCLA desarrollaron la primera membrana práctica de ósmosis inversa usando acetato de celulosa.",
          de: "Sidney Loeb und Srinivasa Sourirajan an der UCLA entwickelten die erste praktische Umkehrosmose-Membran aus Celluloseacetat.",
          nl: "Sidney Loeb en Srinivasa Sourirajan aan UCLA ontwikkelden de eerste praktische omgekeerde osmose membraan met celluloseacetaat."
        }
      },
      {
        question: {
          en: "When was the first desalination plant built?",
          es: "¿Cuándo se construyó la primera planta de desalinización?",
          de: "Wann wurde die erste Entsalzungsanlage gebaut?",
          nl: "Wanneer werd de eerste ontziltingsinstallatie gebouwd?"
        },
        options: [
          { en: "1928 in Curacao", es: "1928 en Curazao", de: "1928 in Curaçao", nl: "1928 in Curaçao" },
          { en: "1938 in Saudi Arabia", es: "1938 en Arabia Saudí", de: "1938 in Saudi-Arabien", nl: "1938 in Saoedi-Arabië" },
          { en: "1945 in Israel", es: "1945 in Israel", de: "1945 in Israel", nl: "1945 in Israël" },
          { en: "1950 in Kuwait", es: "1950 en Kuwait", de: "1950 in Kuwait", nl: "1950 in Koeweit" }
        ],
        correct: 0,
        explanation: {
          en: "The first commercial desalination plant was built in 1928 in Curaçao using multi-stage flash distillation.",
          es: "La primera planta de desalinización comercial se construyó en 1928 en Curazao usando destilación flash multietapa.",
          de: "Die erste kommerzielle Entsalzungsanlage wurde 1928 in Curaçao mit mehrstufiger Flash-Destillation gebaut.",
          nl: "De eerste commerciële ontziltingsinstallatie werd gebouwd in 1928 in Curaçao met meertraps flash-destillatie."
        }
      },
      {
        question: {
          en: "Which civilization first used lead pipes for water distribution?",
          es: "¿Qué civilización usó primero tuberías de plomo para la distribución de agua?",
          de: "Welche Zivilisation verwendete zuerst Bleirohre für die Wasserverteilung?",
          nl: "Welke beschaving gebruikte eerst loden buizen voor waterdistributie?"
        },
        options: [
          { en: "Greeks", es: "Griegos", de: "Griechen", nl: "Grieken" },
          { en: "Romans", es: "Romanos", de: "Römer", nl: "Romeinen" },
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" },
          { en: "Chinese", es: "Chinos", de: "Chinesen", nl: "Chinezen" }
        ],
        correct: 1,
        explanation: {
          en: "Romans extensively used lead pipes (plumbum) for water distribution, giving us the word 'plumbing'.",
          es: "Los romanos usaron extensivamente tuberías de plomo (plumbum) para la distribución de agua, dándonos la palabra 'plomería'.",
          de: "Die Römer verwendeten ausgiebig Bleirohre (plumbum) für die Wasserverteilung und gaben uns das Wort 'Klempnerei'.",
          nl: "Romeinen gebruikten uitgebreid loden buizen (plumbum) voor waterdistributie, wat ons het woord 'loodgieterswerk' gaf."
        }
      },
      {
        question: {
          en: "When was ozone first used for water treatment?",
          es: "¿Cuándo se usó ozono por primera vez para el tratamiento de agua?",
          de: "Wann wurde Ozon erstmals zur Wasserbehandlung verwendet?",
          nl: "Wanneer werd ozon voor het eerst gebruikt voor waterbehandeling?"
        },
        options: [
          { en: "1886 in France", es: "1886 en Francia", de: "1886 in Frankreich", nl: "1886 in Frankrijk" },
          { en: "1893 in Netherlands", es: "1893 en Países Bajos", de: "1893 in den Niederlanden", nl: "1893 in Nederland" },
          { en: "1901 in Germany", es: "1901 en Alemania", de: "1901 in Deutschland", nl: "1901 in Duitsland" },
          { en: "1906 in Belgium", es: "1906 en Bélgica", de: "1906 in Belgien", nl: "1906 in België" }
        ],
        correct: 1,
        explanation: {
          en: "Ozone was first used for water treatment in 1893 in Oudshoorn, Netherlands, for iron and manganese removal.",
          es: "El ozono se usó por primera vez para el tratamiento de agua en 1893 en Oudshoorn, Países Bajos, para la eliminación de hierro y manganeso.",
          de: "Ozon wurde erstmals 1893 in Oudshoorn, Niederlande, zur Wasserbehandlung für die Eisen- und Manganentfernung verwendet.",
          nl: "Ozon werd voor het eerst gebruikt voor waterbehandeling in 1893 in Oudshoorn, Nederland, voor ijzer- en mangaanverwijdering."
        }
      },
      {
        question: {
          en: "Who discovered the water molecule's structure (H₂O)?",
          es: "¿Quién descubrió la estructura de la molécula de agua (H₂O)?",
          de: "Wer entdeckte die Struktur des Wassermoleküls (H₂O)?",
          nl: "Wie ontdekte de structuur van het watermolecuul (H₂O)?"
        },
        options: [
          { en: "Antoine Lavoisier in 1783", es: "Antoine Lavoisier en 1783", de: "Antoine Lavoisier 1783", nl: "Antoine Lavoisier in 1783" },
          { en: "Henry Cavendish in 1781", es: "Henry Cavendish en 1781", de: "Henry Cavendish 1781", nl: "Henry Cavendish in 1781" },
          { en: "Joseph Priestley in 1774", es: "Joseph Priestley en 1774", de: "Joseph Priestley 1774", nl: "Joseph Priestley in 1774" },
          { en: "John Dalton in 1803", es: "John Dalton en 1803", de: "John Dalton 1803", nl: "John Dalton in 1803" }
        ],
        correct: 0,
        explanation: {
          en: "Antoine Lavoisier determined in 1783 that water is composed of hydrogen and oxygen, establishing H₂O.",
          es: "Antoine Lavoisier determinó en 1783 que el agua está compuesta de hidrógeno y oxígeno, estableciendo H₂O.",
          de: "Antoine Lavoisier bestimmte 1783, dass Wasser aus Wasserstoff und Sauerstoff besteht und etablierte H₂O.",
          nl: "Antoine Lavoisier bepaalde in 1783 dat water bestaat uit waterstof en zuurstof, en stelde H₂O vast."
        }
      },
      {
        question: {
          en: "When did bottled water become commercially popular?",
          es: "¿Cuándo se popularizó comercialmente el agua embotellada?",
          de: "Wann wurde Flaschenwasser kommerziell populär?",
          nl: "Wanneer werd gebotteld water commercieel populair?"
        },
        options: [
          { en: "1760s with Perrier in France", es: "Años 1760 con Perrier en Francia", de: "1760er Jahre mit Perrier in Frankreich", nl: "Jaren 1760 met Perrier in Frankrijk" },
          { en: "1820s with Evian in France", es: "Años 1820 con Evian en Francia", de: "1820er Jahre mit Evian in Frankreich", nl: "Jaren 1820 met Evian in Frankrijk" },
          { en: "1890s with Vittel in France", es: "Años 1890 con Vittel en Francia", de: "1890er Jahre mit Vittel in Frankreich", nl: "Jaren 1890 met Vittel in Frankrijk" },
          { en: "1970s with plastic bottles", es: "Años 1970 con botellas de plástico", de: "1970er Jahre mit Plastikflaschen", nl: "Jaren 1970 met plastic flessen" }
        ],
        correct: 3,
        explanation: {
          en: "While mineral water was bottled as early as the 1760s, the modern bottled water industry exploded in the 1970s with the introduction of PET plastic bottles. The first PET bottle was patented in 1973, and by 1977 Perrier launched the first major marketing campaign making bottled water fashionable.",
          es: "Aunque el agua mineral se embotellaba desde los años 1760, la industria moderna del agua embotellada explotó en los años 1970 con la introducción de botellas de plástico PET. La primera botella PET fue patentada en 1973, y en 1977 Perrier lanzó la primera gran campaña de marketing haciendo el agua embotellada popular.",
          de: "Während Mineralwasser bereits in den 1760er Jahren abgefüllt wurde, explodierte die moderne Flaschenwasserindustrie in den 1970er Jahren mit der Einführung von PET-Kunststoffflaschen. Die erste PET-Flasche wurde 1973 patentiert, und 1977 startete Perrier die erste große Marketingkampagne, die Flaschenwasser modisch machte.",
          nl: "Hoewel mineraalwater al sinds de jaren 1760 werd gebotteld, explodeerde de moderne gebotteld waterindustrie in de jaren 1970 met de introductie van PET-plastic flessen. De eerste PET-fles werd gepatenteerd in 1973, en in 1977 lanceerde Perrier de eerste grote marketingcampagne die gebotteld water modieus maakte."
        }
      },
      {
        question: {
          en: "What was the 'Great Stink' of London in 1858?",
          es: "¿Qué fue el 'Gran Hedor' de Londres en 1858?",
          de: "Was war der 'Große Gestank' von London 1858?",
          nl: "Wat was de 'Grote Stank' van Londen in 1858?"
        },
        options: [
          { en: "A severe sewage pollution crisis in the Thames River", es: "Una crisis severa de contaminación de aguas residuales en el río Támesis", de: "Eine schwere Abwasserverschmutzungskrise in der Themse", nl: "Een ernstige rioolwatervervuilingscrisis in de Theems" },
          { en: "A fire in a water treatment plant", es: "Un incendio en una planta de tratamiento de agua", de: "Ein Brand in einer Wasseraufbereitungsanlage", nl: "Een brand in een waterzuiveringsinstallatie" },
          { en: "A cholera outbreak", es: "Un brote de cólera", de: "Ein Cholera-Ausbruch", nl: "Een cholera-uitbraak" },
          { en: "A chemical spill", es: "Un derrame químico", de: "Eine Chemikalienverschüttung", nl: "Een chemische lekkage" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Stink was an event in London during the hot summer of 1858 when the smell of untreated human waste in the Thames River became so bad that Parliament couldn't function. This crisis led to the construction of London's modern sewer system designed by Joseph Bazalgette, completed in 1875.",
          es: "El Gran Hedor fue un evento en Londres durante el caluroso verano de 1858 cuando el olor de desechos humanos sin tratar en el río Támesis se volvió tan malo que el Parlamento no podía funcionar. Esta crisis llevó a la construcción del sistema de alcantarillado moderno de Londres diseñado por Joseph Bazalgette, completado en 1875.",
          de: "Der Große Gestank war ein Ereignis in London im heißen Sommer 1858, als der Geruch von unbehandelten menschlichen Abfällen in der Themse so schlimm wurde, dass das Parlament nicht funktionieren konnte. Diese Krise führte zum Bau des modernen Abwassersystems Londons, entworfen von Joseph Bazalgette, fertiggestellt 1875.",
          nl: "De Grote Stank was een gebeurtenis in Londen tijdens de hete zomer van 1858 toen de geur van onbehandeld menselijk afval in de Theems zo erg werd dat het Parlement niet kon functioneren. Deze crisis leidde tot de bouw van Londens moderne rioleringssysteem ontworpen door Joseph Bazalgette, voltooid in 1875."
        }
      },
      {
        question: {
          en: "When was UV light first used to disinfect water?",
          es: "¿Cuándo se usó luz UV por primera vez para desinfectar agua?",
          de: "Wann wurde UV-Licht erstmals zur Wasserdesinfektion verwendet?",
          nl: "Wanneer werd UV-licht voor het eerst gebruikt om water te desinfecteren?"
        },
        options: [
          { en: "1877 in England", es: "1877 en Inglaterra", de: "1877 in England", nl: "1877 in Engeland" },
          { en: "1901 in Austria", es: "1901 en Austria", de: "1901 in Österreich", nl: "1901 in Oostenrijk" },
          { en: "1910 in France", es: "1910 en Francia", de: "1910 in Frankreich", nl: "1910 in Frankrijk" },
          { en: "1919 in USA", es: "1919 en EUA", de: "1919 in den USA", nl: "1919 in VS" }
        ],
        correct: 3,
        explanation: {
          en: "UV light was first used for water disinfection in 1919 in the USA, though the technology wasn't widely adopted until the 1980s due to mercury lamp limitations. Modern UV disinfection systems can achieve 99.99% pathogen removal without chemicals, making them increasingly popular for drinking water treatment.",
          es: "La luz UV se usó por primera vez para desinfección de agua en 1919 en EUA, aunque la tecnología no se adoptó ampliamente hasta los años 1980 debido a limitaciones de lámparas de mercurio. Los sistemas modernos de desinfección UV pueden lograr 99.99% de eliminación de patógenos sin químicos, haciéndolos cada vez más populares para tratamiento de agua potable.",
          de: "UV-Licht wurde erstmals 1919 in den USA zur Wasserdesinfektion verwendet, aber die Technologie wurde erst in den 1980er Jahren aufgrund von Quecksilberlampen-Einschränkungen weit verbreitet. Moderne UV-Desinfektionssysteme können 99,99% Pathogenentfernung ohne Chemikalien erreichen, was sie für Trinkwasserbehandlung zunehmend beliebt macht.",
          nl: "UV-licht werd voor het eerst gebruikt voor waterdesinfectie in 1919 in de VS, hoewel de technologie pas in de jaren 1980 wijdverbreid werd aangenomen vanwege beperkingen van kwiklamp. Moderne UV-desinfectiesystemen kunnen 99,99% pathogenverwijdering bereiken zonder chemicaliën, waardoor ze steeds populairder worden voor drinkwaterbehandeling."
        }
      },
      {
        question: {
          en: "Which ancient city had the most advanced water supply system?",
          es: "¿Qué ciudad antigua tenía el sistema de suministro de agua más avanzado?",
          de: "Welche antike Stadt hatte das fortschrittlichste Wasserversorgungssystem?",
          nl: "Welke oude stad had het meest geavanceerde watervoorzieningssysteem?"
        },
        options: [
          { en: "Rome with 11 aqueducts supplying 1 million cubic meters daily", es: "Roma con 11 acueductos suministrando 1 millón de metros cúbicos diarios", de: "Rom mit 11 Aquädukten, die täglich 1 Million Kubikmeter lieferten", nl: "Rome met 11 aquaducten die dagelijks 1 miljoen kubieke meter leverden" },
          { en: "Athens with underground pipes", es: "Atenas con tuberías subterráneas", de: "Athen mit unterirdischen Rohren", nl: "Athene met ondergrondse buizen" },
          { en: "Babylon with hanging gardens", es: "Babilonia con jardines colgantes", de: "Babylon mit hängenden Gärten", nl: "Babylon met hangende tuinen" },
          { en: "Alexandria with water wheels", es: "Alejandría con norias", de: "Alexandria mit Wasserrädern", nl: "Alexandrië met waterraderen" }
        ],
        correct: 0,
        explanation: {
          en: "Ancient Rome had the most sophisticated water system with 11 aqueducts bringing in about 1 million cubic meters of water daily by 226 CE. The system included fountains, public baths, toilets, and private homes. The Aqua Marcia aqueduct (built 144 BCE) was 91 km long with only 7 km above ground.",
          es: "La antigua Roma tenía el sistema de agua más sofisticado con 11 acueductos trayendo aproximadamente 1 millón de metros cúbicos de agua diariamente para el año 226 EC. El sistema incluía fuentes, baños públicos, aseos y casas privadas. El acueducto Aqua Marcia (construido 144 a.C.) tenía 91 km de largo con solo 7 km sobre tierra.",
          de: "Das antike Rom hatte das ausgefeilteste Wassersystem mit 11 Aquädukten, die bis 226 n.Chr. täglich etwa 1 Million Kubikmeter Wasser lieferten. Das System umfasste Brunnen, öffentliche Bäder, Toiletten und Privathäuser. Das Aqua Marcia-Aquädukt (144 v.Chr. gebaut) war 91 km lang mit nur 7 km oberirdisch.",
          nl: "Het oude Rome had het meest geavanceerde watersysteem met 11 aquaducten die tegen 226 CE dagelijks ongeveer 1 miljoen kubieke meter water brachten. Het systeem omvatte fonteinen, openbare baden, toiletten en privéwoningen. Het Aqua Marcia-aquaduct (gebouwd 144 v.Chr.) was 91 km lang met slechts 7 km bovengronds."
        }
      },
      {
        question: {
          en: "When was the Safe Drinking Water Act passed in the USA?",
          es: "¿Cuándo se aprobó la Ley de Agua Potable Segura en EUA?",
          de: "Wann wurde der Safe Drinking Water Act in den USA verabschiedet?",
          nl: "Wanneer werd de Safe Drinking Water Act aangenomen in de VS?"
        },
        options: [
          { en: "1962", es: "1962", de: "1962", nl: "1962" },
          { en: "1970", es: "1970", de: "1970", nl: "1970" },
          { en: "1974", es: "1974", de: "1974", nl: "1974" },
          { en: "1980", es: "1980", de: "1980", nl: "1980" }
        ],
        correct: 2,
        explanation: {
          en: "The Safe Drinking Water Act (SDWA) was passed in 1974, establishing national standards for drinking water quality to protect public health. It regulates over 90 contaminants and has been amended several times, most significantly in 1986 and 1996, requiring regular testing and monitoring of public water systems.",
          es: "La Ley de Agua Potable Segura (SDWA) se aprobó en 1974, estableciendo estándares nacionales para la calidad del agua potable para proteger la salud pública. Regula más de 90 contaminantes y ha sido enmendada varias veces, más significativamente en 1986 y 1996, requiriendo pruebas y monitoreo regular de sistemas públicos de agua.",
          de: "Der Safe Drinking Water Act (SDWA) wurde 1974 verabschiedet und etablierte nationale Standards für Trinkwasserqualität zum Schutz der öffentlichen Gesundheit. Er reguliert über 90 Schadstoffe und wurde mehrmals geändert, am bedeutendsten 1986 und 1996, was regelmäßige Tests und Überwachung öffentlicher Wassersysteme erfordert.",
          nl: "De Safe Drinking Water Act (SDWA) werd aangenomen in 1974, waarbij nationale normen voor drinkwaterkwaliteit werden vastgesteld om de volksgezondheid te beschermen. Het reguleert meer dan 90 verontreinigende stoffen en is verschillende keren gewijzigd, het meest significant in 1986 en 1996, waarbij regelmatige tests en monitoring van openbare watersystemen vereist zijn."
        }
      },
      {
        question: {
          en: "What was the Minamata disease outbreak (1956) related to?",
          es: "¿Con qué estaba relacionado el brote de la enfermedad de Minamata (1956)?",
          de: "Womit stand der Minamata-Krankheitsausbruch (1956) in Zusammenhang?",
          nl: "Waar was de Minamata-ziekteuitbraak (1956) mee gerelateerd?"
        },
        options: [
          { en: "Mercury contamination in water from industrial waste", es: "Contaminación por mercurio en agua de desechos industriales", de: "Quecksilberkontamination im Wasser aus Industrieabfällen", nl: "Kwikverontreiniging in water door industrieel afval" },
          { en: "Lead poisoning from pipes", es: "Envenenamiento por plomo de tuberías", de: "Bleivergiftung durch Rohre", nl: "Loodvergiftiging door buizen" },
          { en: "Bacterial outbreak", es: "Brote bacteriano", de: "Bakterieller Ausbruch", nl: "Bacteriële uitbraak" },
          { en: "Algae bloom toxins", es: "Toxinas de floración de algas", de: "Algenblüten-Toxine", nl: "Algenbloeitoxines" }
        ],
        correct: 0,
        explanation: {
          en: "Minamata disease was caused by methylmercury poisoning from industrial wastewater discharged by Chisso Corporation into Minamata Bay, Japan. Fish and shellfish accumulated the mercury, which was then consumed by local residents, causing severe neurological damage affecting over 2,000 people. This tragedy led to stricter water pollution regulations worldwide.",
          es: "La enfermedad de Minamata fue causada por envenenamiento con metilmercurio de aguas residuales industriales descargadas por Chisso Corporation en la bahía de Minamata, Japón. Peces y mariscos acumularon el mercurio, que luego fue consumido por residentes locales, causando daño neurológico severo afectando a más de 2,000 personas. Esta tragedia llevó a regulaciones más estrictas de contaminación del agua en todo el mundo.",
          de: "Die Minamata-Krankheit wurde durch Methylquecksilber-Vergiftung aus Industrieabwässern verursacht, die von der Chisso Corporation in die Minamata-Bucht in Japan eingeleitet wurden. Fische und Schalentiere reicherten das Quecksilber an, das dann von Anwohnern konsumiert wurde, was schwere neurologische Schäden bei über 2.000 Menschen verursachte. Diese Tragödie führte weltweit zu strengeren Wasserverschmutzungsvorschriften.",
          nl: "De Minamata-ziekte werd veroorzaakt door methylkwikvergiftiging door industrieel afvalwater geloosd door Chisso Corporation in Minamata Bay, Japan. Vis en schaaldieren accumuleerden het kwik, dat vervolgens werd geconsumeerd door lokale bewoners, waardoor ernstige neurologische schade ontstond die meer dan 2.000 mensen trof. Deze tragedie leidde wereldwijd tot strengere watervervuilingsregels."
        }
      },
      {
        question: {
          en: "Which country first implemented comprehensive water quality standards?",
          es: "¿Qué país implementó primero estándares integrales de calidad del agua?",
          de: "Welches Land implementierte zuerst umfassende Wasserqualitätsstandards?",
          nl: "Welk land voerde als eerste uitgebreide waterkwaliteitsnormen in?"
        },
        options: [
          { en: "USA in 1914", es: "EUA en 1914", de: "USA 1914", nl: "VS in 1914" },
          { en: "Germany in 1900", es: "Alemania en 1900", de: "Deutschland 1900", nl: "Duitsland in 1900" },
          { en: "UK in 1876", es: "Reino Unido en 1876", de: "Großbritannien 1876", nl: "VK in 1876" },
          { en: "Netherlands in 1850", es: "Países Bajos en 1850", de: "Niederlande 1850", nl: "Nederland in 1850" }
        ],
        correct: 0,
        explanation: {
          en: "The USA's Public Health Service established the first comprehensive drinking water standards in 1914, initially applying only to water provided on interstate carriers like trains and ships. These standards covered only bacteriological quality and were limited to 2 parameters. Modern standards now regulate over 90 contaminants.",
          es: "El Servicio de Salud Pública de EUA estableció los primeros estándares integrales de agua potable en 1914, inicialmente aplicándose solo al agua proporcionada en transportistas interestatales como trenes y barcos. Estos estándares cubrían solo calidad bacteriológica y se limitaban a 2 parámetros. Los estándares modernos ahora regulan más de 90 contaminantes.",
          de: "Der US-amerikanische Public Health Service etablierte 1914 die ersten umfassenden Trinkwasserstandards, die zunächst nur für Wasser auf zwischenstaatlichen Verkehrsmitteln wie Zügen und Schiffen galten. Diese Standards deckten nur bakteriologische Qualität ab und waren auf 2 Parameter begrenzt. Moderne Standards regulieren jetzt über 90 Schadstoffe.",
          nl: "De Amerikaanse Public Health Service stelde in 1914 de eerste uitgebreide drinkwaternormen vast, aanvankelijk alleen van toepassing op water geleverd op interstate vervoerders zoals treinen en schepen. Deze normen dekten alleen bacteriologische kwaliteit en waren beperkt tot 2 parameters. Moderne normen reguleren nu meer dan 90 verontreinigende stoffen."
        }
      },
      {
        question: {
          en: "When was the first water meter invented?",
          es: "¿Cuándo se inventó el primer medidor de agua?",
          de: "Wann wurde der erste Wasserzähler erfunden?",
          nl: "Wanneer werd de eerste watermeter uitgevonden?"
        },
        options: [
          { en: "1825 in England", es: "1825 en Inglaterra", de: "1825 in England", nl: "1825 in Engeland" },
          { en: "1850 in Germany", es: "1850 en Alemania", de: "1850 in Deutschland", nl: "1850 in Duitsland" },
          { en: "1875 in USA", es: "1875 en EUA", de: "1875 in den USA", nl: "1875 in VS" },
          { en: "1900 in France", es: "1900 en Francia", de: "1900 in Frankreich", nl: "1900 in Frankrijk" }
        ],
        correct: 0,
        explanation: {
          en: "The first water meter was invented in 1825 in England by William Nicholson. However, widespread metering didn't occur until the late 1800s. The first modern displacement water meter was patented in 1850 in Germany by Siemens. Water metering revolutionized water conservation by charging based on actual usage rather than flat rates.",
          es: "El primer medidor de agua fue inventado en 1825 en Inglaterra por William Nicholson. Sin embargo, la medición generalizada no ocurrió hasta finales de los años 1800. El primer medidor de agua de desplazamiento moderno fue patentado en 1850 en Alemania por Siemens. La medición de agua revolucionó la conservación del agua al cobrar según el uso real en lugar de tarifas planas.",
          de: "Der erste Wasserzähler wurde 1825 in England von William Nicholson erfunden. Eine flächendeckende Messung erfolgte jedoch erst Ende der 1800er Jahre. Der erste moderne Verdrängungswasserzähler wurde 1850 in Deutschland von Siemens patentiert. Die Wassermessung revolutionierte die Wassereinsparung durch verbrauchsabhängige Abrechnung statt Pauschalgebühren.",
          nl: "De eerste watermeter werd uitgevonden in 1825 in Engeland door William Nicholson. Wijdverbreide meting vond echter pas plaats eind jaren 1800. De eerste moderne verplaatsingswatermeter werd gepatenteerd in 1850 in Duitsland door Siemens. Watermeting revolutioneerde waterbesparing door te laden op basis van werkelijk verbruik in plaats van vaste tarieven."
        }
      },
      {
        question: {
          en: "What was the Broad Street cholera outbreak's significance (1854)?",
          es: "¿Cuál fue la importancia del brote de cólera de Broad Street (1854)?",
          de: "Was war die Bedeutung des Broad Street Cholera-Ausbruchs (1854)?",
          nl: "Wat was de betekenis van de Broad Street cholera-uitbraak (1854)?"
        },
        options: [
          { en: "First proof that disease could spread through contaminated water", es: "Primera prueba de que enfermedades podían propagarse por agua contaminada", de: "Erster Beweis, dass Krankheiten durch kontaminiertes Wasser verbreitet werden können", nl: "Eerste bewijs dat ziekte zich kon verspreiden via vervuild water" },
          { en: "Discovery of bacteria", es: "Descubrimiento de bacterias", de: "Entdeckung von Bakterien", nl: "Ontdekking van bacteriën" },
          { en: "Invention of chlorination", es: "Invención de la cloración", de: "Erfindung der Chlorierung", nl: "Uitvinding van chlorering" },
          { en: "First use of antibiotics", es: "Primer uso de antibióticos", de: "Erste Verwendung von Antibiotika", nl: "Eerste gebruik van antibiotica" }
        ],
        correct: 0,
        explanation: {
          en: "Dr. John Snow's investigation of the Broad Street cholera outbreak in London proved for the first time that cholera spread through contaminated water, not 'bad air' (miasma theory). By mapping cases and identifying a contaminated water pump as the source, Snow pioneered epidemiological methods and fundamentally changed public health policy, leading to modern water treatment systems.",
          es: "La investigación del Dr. John Snow del brote de cólera de Broad Street en Londres probó por primera vez que el cólera se propagaba por agua contaminada, no por 'aire malo' (teoría del miasma). Al mapear casos e identificar una bomba de agua contaminada como la fuente, Snow fue pionero en métodos epidemiológicos y cambió fundamentalmente la política de salud pública, llevando a sistemas modernos de tratamiento de agua.",
          de: "Dr. John Snows Untersuchung des Broad Street Cholera-Ausbruchs in London bewies zum ersten Mal, dass Cholera durch kontaminiertes Wasser verbreitet wurde, nicht durch 'schlechte Luft' (Miasma-Theorie). Durch Kartierung der Fälle und Identifikation einer kontaminierten Wasserpumpe als Quelle war Snow Pionier epidemiologischer Methoden und veränderte grundlegend die öffentliche Gesundheitspolitik, was zu modernen Wasserbehandlungssystemen führte.",
          nl: "Dr. John Snows onderzoek naar de Broad Street cholera-uitbraak in Londen bewees voor het eerst dat cholera zich verspreidde via vervuild water, niet via 'slechte lucht' (miasma-theorie). Door gevallen in kaart te brengen en een vervuilde waterpomp als bron te identificeren, was Snow een pionier in epidemiologische methoden en veranderde fundamenteel het volksgezondheidsbeleid, wat leidde tot moderne waterzuiveringssystemen."
        }
      },
      {
        question: {
          en: "When was the water closet (flush toilet) invented?",
          es: "¿Cuándo se inventó el inodoro con descarga?",
          de: "Wann wurde das Wasserklosett (Spültoilette) erfunden?",
          nl: "Wanneer werd het watercloset (spoeltoilet) uitgevonden?"
        },
        options: [
          { en: "1596 by Sir John Harington", es: "1596 por Sir John Harington", de: "1596 von Sir John Harington", nl: "1596 door Sir John Harington" },
          { en: "1650 by Thomas Crapper", es: "1650 por Thomas Crapper", de: "1650 von Thomas Crapper", nl: "1650 door Thomas Crapper" },
          { en: "1775 by Alexander Cummings", es: "1775 por Alexander Cummings", de: "1775 von Alexander Cummings", nl: "1775 door Alexander Cummings" },
          { en: "1850 by George Jennings", es: "1850 por George Jennings", de: "1850 von George Jennings", nl: "1850 door George Jennings" }
        ],
        correct: 0,
        explanation: {
          en: "Sir John Harington invented the first flush toilet in 1596 for Queen Elizabeth I, but it wasn't widely adopted. Alexander Cummings patented the S-trap in 1775, solving odor problems. Thomas Crapper (1880s) improved and popularized the design. The flush toilet revolutionized sanitation, dramatically reducing waterborne diseases when combined with proper sewage systems.",
          es: "Sir John Harington inventó el primer inodoro con descarga en 1596 para la Reina Isabel I, pero no fue ampliamente adoptado. Alexander Cummings patentó la trampa en S en 1775, resolviendo problemas de olor. Thomas Crapper (años 1880) mejoró y popularizó el diseño. El inodoro con descarga revolucionó el saneamiento, reduciendo dramáticamente enfermedades transmitidas por agua cuando se combinó con sistemas de alcantarillado adecuados.",
          de: "Sir John Harington erfand 1596 die erste Spültoilette für Königin Elizabeth I, aber sie wurde nicht weit verbreitet. Alexander Cummings patentierte 1775 den S-Siphon, der Geruchsprobleme löste. Thomas Crapper (1880er) verbesserte und popularisierte das Design. Die Spültoilette revolutionierte die Sanitärversorgung und reduzierte wasserbürtige Krankheiten dramatisch, wenn sie mit geeigneten Abwassersystemen kombiniert wurde.",
          nl: "Sir John Harington vond in 1596 het eerste spoeltoilet uit voor koningin Elizabeth I, maar het werd niet wijdverbreid aangenomen. Alexander Cummings patenteerde de S-sifon in 1775, wat geurproblemen oploste. Thomas Crapper (jaren 1880) verbeterde en populariseerde het ontwerp. Het spoeltoilet revolutioneerde sanitatie, wat watergerelateerde ziekten dramatisch verminderde wanneer gecombineerd met goede rioleringssystemen."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
