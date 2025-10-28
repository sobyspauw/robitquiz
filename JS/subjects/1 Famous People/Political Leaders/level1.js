(function() {
  const level1 = {
    name: {
      en: "Political Leaders - Very Easy",
      es: "Líderes Políticos - Muy Fácil",
      de: "Politische Führer - Sehr Leicht",
      nl: "Politieke Leiders - Zeer Gemakkelijk"
    },
    questions: [
      {
        question: {
          en: "Who is the current President of the United States (as of 2024)?",
          es: "¿Quién es el actual Presidente de los Estados Unidos (a partir de 2024)?",
          de: "Wer ist der aktuelle Präsident der Vereinigten Staaten (ab 2024)?",
          nl: "Wie is de huidige President van de Verenigde Staten (vanaf 2024)?"
        },
        options: [
          { en: "Joe Biden", es: "Joe Biden", de: "Joe Biden", nl: "Joe Biden" },
          { en: "Donald Trump", es: "Donald Trump", de: "Donald Trump", nl: "Donald Trump" },
          { en: "Barack Obama", es: "Barack Obama", de: "Barack Obama", nl: "Barack Obama" },
          { en: "Kamala Harris", es: "Kamala Harris", de: "Kamala Harris", nl: "Kamala Harris" }
        ],
        correct: 0,
        explanation: {
          en: "Joe Biden became the 46th President of the United States in January 2021, serving alongside Vice President Kamala Harris.",
          es: "Joe Biden se convirtió en el 46º Presidente de los Estados Unidos en enero de 2021, sirviendo junto a la Vicepresidenta Kamala Harris.",
          de: "Joe Biden wurde im Januar 2021 der 46. Präsident der Vereinigten Staaten und dient zusammen mit Vizepräsidentin Kamala Harris.",
          nl: "Joe Biden werd in januari 2021 de 46e President van de Verenigde Staten, dienend samen met Vicepresident Kamala Harris."
        }
      },
      {
        question: {
          en: "Who is the current President of France?",
          es: "¿Quién es el actual Presidente de Francia?",
          de: "Wer ist der aktuelle Präsident Frankreichs?",
          nl: "Wie is de huidige President van Frankrijk?"
        },
        options: [
          { en: "Emmanuel Macron", es: "Emmanuel Macron", de: "Emmanuel Macron", nl: "Emmanuel Macron" },
          { en: "Marine Le Pen", es: "Marine Le Pen", de: "Marine Le Pen", nl: "Marine Le Pen" },
          { en: "François Hollande", es: "François Hollande", de: "François Hollande", nl: "François Hollande" },
          { en: "Nicolas Sarkozy", es: "Nicolas Sarkozy", de: "Nicolas Sarkozy", nl: "Nicolas Sarkozy" }
        ],
        correct: 0,
        explanation: {
          en: "Emmanuel Macron has been President of France since 2017, winning re-election in 2022 for a second five-year term.",
          es: "Emmanuel Macron ha sido Presidente de Francia desde 2017, ganando la reelección en 2022 para un segundo mandato de cinco años.",
          de: "Emmanuel Macron ist seit 2017 Präsident Frankreichs und gewann 2022 die Wiederwahl für eine zweite fünfjährige Amtszeit.",
          nl: "Emmanuel Macron is sinds 2017 President van Frankrijk en won in 2022 de herverkiezing voor een tweede termijn van vijf jaar."
        }
      },
      {
        question: {
          en: "Who is the current Chancellor of Germany?",
          es: "¿Quién es el actual Canciller de Alemania?",
          de: "Wer ist der aktuelle Bundeskanzler Deutschlands?",
          nl: "Wie is de huidige Bondskanselier van Duitsland?"
        },
        options: [
          { en: "Olaf Scholz", es: "Olaf Scholz", de: "Olaf Scholz", nl: "Olaf Scholz" },
          { en: "Angela Merkel", es: "Angela Merkel", de: "Angela Merkel", nl: "Angela Merkel" },
          { en: "Armin Laschet", es: "Armin Laschet", de: "Armin Laschet", nl: "Armin Laschet" },
          { en: "Friedrich Merz", es: "Friedrich Merz", de: "Friedrich Merz", nl: "Friedrich Merz" }
        ],
        correct: 0,
        explanation: {
          en: "Olaf Scholz became Chancellor of Germany in December 2021, succeeding Angela Merkel after leading the Social Democratic Party to victory.",
          es: "Olaf Scholz se convirtió en Canciller de Alemania en diciembre de 2021, sucediendo a Angela Merkel después de liderar al Partido Socialdemócrata a la victoria.",
          de: "Olaf Scholz wurde im Dezember 2021 Bundeskanzler Deutschlands und folgte Angela Merkel nach, nachdem er die Sozialdemokratische Partei zum Sieg geführt hatte.",
          nl: "Olaf Scholz werd in december 2021 Bondskanselier van Duitsland, als opvolger van Angela Merkel nadat hij de Sociaaldemocratische Partij naar de overwinning leidde."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of the United Kingdom?",
          es: "¿Quién es el actual Primer Ministro del Reino Unido?",
          de: "Wer ist der aktuelle Premierminister des Vereinigten Königreichs?",
          nl: "Wie is de huidige Premier van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "Rishi Sunak", es: "Rishi Sunak", de: "Rishi Sunak", nl: "Rishi Sunak" },
          { en: "Liz Truss", es: "Liz Truss", de: "Liz Truss", nl: "Liz Truss" },
          { en: "Boris Johnson", es: "Boris Johnson", de: "Boris Johnson", nl: "Boris Johnson" },
          { en: "Keir Starmer", es: "Keir Starmer", de: "Keir Starmer", nl: "Keir Starmer" }
        ],
        correct: 0,
        explanation: {
          en: "Rishi Sunak became Prime Minister in October 2022, becoming the first person of Indian heritage to hold the office.",
          es: "Rishi Sunak se convirtió en Primer Ministro en octubre de 2022, convirtiéndose en la primera persona de herencia india en ocupar el cargo.",
          de: "Rishi Sunak wurde im Oktober 2022 Premierminister und war der erste Mensch mit indischer Herkunft, der dieses Amt innehatte.",
          nl: "Rishi Sunak werd in oktober 2022 Premier en was de eerste persoon met Indiase afkomst die dit ambt bekleedde."
        }
      },
      {
        question: {
          en: "Who is the current President of Russia?",
          es: "¿Quién es el actual Presidente de Rusia?",
          de: "Wer ist der aktuelle Präsident Russlands?",
          nl: "Wie is de huidige President van Rusland?"
        },
        options: [
          { en: "Vladimir Putin", es: "Vladimir Putin", de: "Wladimir Putin", nl: "Vladimir Poetin" },
          { en: "Dmitry Medvedev", es: "Dmitry Medvedev", de: "Dmitri Medwedew", nl: "Dmitri Medvedev" },
          { en: "Boris Yeltsin", es: "Boris Yeltsin", de: "Boris Jelzin", nl: "Boris Jeltsin" },
          { en: "Mikhail Gorbachev", es: "Mikhail Gorbachev", de: "Michail Gorbatschow", nl: "Michail Gorbatsjov" }
        ],
        correct: 0,
        explanation: {
          en: "Vladimir Putin has been President of Russia since 2012, previously serving from 2000-2008, making him one of the longest-serving leaders in modern Russia.",
          es: "Vladimir Putin ha sido Presidente de Rusia desde 2012, habiendo servido previamente de 2000-2008, convirtiéndolo en uno de los líderes más duraderos de la Rusia moderna.",
          de: "Wladimir Putin ist seit 2012 Präsident Russlands, nachdem er bereits von 2000-2008 gedient hatte, was ihn zu einem der am längsten amtierenden Führer im modernen Russland macht.",
          nl: "Vladimir Poetin is sinds 2012 President van Rusland, na eerder van 2000-2008 te hebben gediend, wat hem een van de langst dienende leiders van het moderne Rusland maakt."
        }
      },
      {
        question: {
          en: "Who is the current President of China?",
          es: "¿Quién es el actual Presidente de China?",
          de: "Wer ist der aktuelle Präsident Chinas?",
          nl: "Wie is de huidige President van China?"
        },
        options: [
          { en: "Xi Jinping", es: "Xi Jinping", de: "Xi Jinping", nl: "Xi Jinping" },
          { en: "Hu Jintao", es: "Hu Jintao", de: "Hu Jintao", nl: "Hu Jintao" },
          { en: "Jiang Zemin", es: "Jiang Zemin", de: "Jiang Zemin", nl: "Jiang Zemin" },
          { en: "Li Keqiang", es: "Li Keqiang", de: "Li Keqiang", nl: "Li Keqiang" }
        ],
        correct: 0,
        explanation: {
          en: "Xi Jinping has been General Secretary of the Communist Party and President of China since 2013, leading China's rise as a global superpower.",
          es: "Xi Jinping ha sido Secretario General del Partido Comunista y Presidente de China desde 2013, liderando el ascenso de China como superpotencia global.",
          de: "Xi Jinping ist seit 2013 Generalsekretär der Kommunistischen Partei und Präsident Chinas und führt Chinas Aufstieg als globale Supermacht an.",
          nl: "Xi Jinping is sinds 2013 Secretaris-Generaal van de Communistische Partij en President van China, en leidt China's opkomst als mondiale supermacht."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Canada?",
          es: "¿Quién es el actual Primer Ministro de Canadá?",
          de: "Wer ist der aktuelle Premierminister Kanadas?",
          nl: "Wie is de huidige Premier van Canada?"
        },
        options: [
          { en: "Justin Trudeau", es: "Justin Trudeau", de: "Justin Trudeau", nl: "Justin Trudeau" },
          { en: "Stephen Harper", es: "Stephen Harper", de: "Stephen Harper", nl: "Stephen Harper" },
          { en: "Pierre Poilievre", es: "Pierre Poilievre", de: "Pierre Poilievre", nl: "Pierre Poilievre" },
          { en: "Jean Chrétien", es: "Jean Chrétien", de: "Jean Chrétien", nl: "Jean Chrétien" }
        ],
        correct: 0,
        explanation: {
          en: "Justin Trudeau has been Prime Minister of Canada since 2015, leading the Liberal Party and known for his progressive policies.",
          es: "Justin Trudeau ha sido Primer Ministro de Canadá desde 2015, liderando el Partido Liberal y conocido por sus políticas progresistas.",
          de: "Justin Trudeau ist seit 2015 Premierminister Kanadas, führt die Liberale Partei an und ist für seine progressiven Politiken bekannt.",
          nl: "Justin Trudeau is sinds 2015 Premier van Canada, leidt de Liberale Partij en staat bekend om zijn progressieve beleid."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Australia?",
          es: "¿Quién es el actual Primer Ministro de Australia?",
          de: "Wer ist der aktuelle Premierminister Australiens?",
          nl: "Wie is de huidige Premier van Australië?"
        },
        options: [
          { en: "Anthony Albanese", es: "Anthony Albanese", de: "Anthony Albanese", nl: "Anthony Albanese" },
          { en: "Scott Morrison", es: "Scott Morrison", de: "Scott Morrison", nl: "Scott Morrison" },
          { en: "Malcolm Turnbull", es: "Malcolm Turnbull", de: "Malcolm Turnbull", nl: "Malcolm Turnbull" },
          { en: "Tony Abbott", es: "Tony Abbott", de: "Tony Abbott", nl: "Tony Abbott" }
        ],
        correct: 0,
        explanation: {
          en: "Anthony Albanese became Prime Minister of Australia in May 2022, leading the Labor Party to victory after nine years in opposition.",
          es: "Anthony Albanese se convirtió en Primer Ministro de Australia en mayo de 2022, llevando al Partido Laborista a la victoria después de nueve años en la oposición.",
          de: "Anthony Albanese wurde im Mai 2022 Premierminister Australiens und führte die Labor Party nach neun Jahren in der Opposition zum Sieg.",
          nl: "Anthony Albanese werd in mei 2022 Premier van Australië en leidde de Labor Party naar de overwinning na negen jaar in de oppositie."
        }
      },
      {
        question: {
          en: "Who is the current President of Brazil?",
          es: "¿Quién es el actual Presidente de Brasil?",
          de: "Wer ist der aktuelle Präsident Brasiliens?",
          nl: "Wie is de huidige President van Brazilië?"
        },
        options: [
          { en: "Luiz Inácio Lula da Silva", es: "Luiz Inácio Lula da Silva", de: "Luiz Inácio Lula da Silva", nl: "Luiz Inácio Lula da Silva" },
          { en: "Jair Bolsonaro", es: "Jair Bolsonaro", de: "Jair Bolsonaro", nl: "Jair Bolsonaro" },
          { en: "Dilma Rousseff", es: "Dilma Rousseff", de: "Dilma Rousseff", nl: "Dilma Rousseff" },
          { en: "Fernando Henrique Cardoso", es: "Fernando Henrique Cardoso", de: "Fernando Henrique Cardoso", nl: "Fernando Henrique Cardoso" }
        ],
        correct: 0,
        explanation: {
          en: "Luiz Inácio Lula da Silva returned to the presidency in January 2023, having previously served from 2003-2010, defeating Jair Bolsonaro in the 2022 election.",
          es: "Luiz Inácio Lula da Silva regresó a la presidencia en enero de 2023, habiendo servido previamente de 2003-2010, derrotando a Jair Bolsonaro en las elecciones de 2022.",
          de: "Luiz Inácio Lula da Silva kehrte im Januar 2023 in die Präsidentschaft zurück, nachdem er bereits von 2003-2010 gedient hatte und Jair Bolsonaro bei den Wahlen 2022 besiegte.",
          nl: "Luiz Inácio Lula da Silva keerde in januari 2023 terug als president, na eerder van 2003-2010 te hebben gediend, en versloeg Jair Bolsonaro in de verkiezingen van 2022."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of India?",
          es: "¿Quién es el actual Primer Ministro de India?",
          de: "Wer ist der aktuelle Premierminister Indiens?",
          nl: "Wie is de huidige Premier van India?"
        },
        options: [
          { en: "Narendra Modi", es: "Narendra Modi", de: "Narendra Modi", nl: "Narendra Modi" },
          { en: "Rahul Gandhi", es: "Rahul Gandhi", de: "Rahul Gandhi", nl: "Rahul Gandhi" },
          { en: "Manmohan Singh", es: "Manmohan Singh", de: "Manmohan Singh", nl: "Manmohan Singh" },
          { en: "Amit Shah", es: "Amit Shah", de: "Amit Shah", nl: "Amit Shah" }
        ],
        correct: 0,
        explanation: {
          en: "Narendra Modi has been Prime Minister of India since 2014, leading the Bharatiya Janata Party (BJP) and winning re-election in 2019 and 2024.",
          es: "Narendra Modi ha sido Primer Ministro de India desde 2014, liderando el Bharatiya Janata Party (BJP) y ganando la reelección en 2019 y 2024.",
          de: "Narendra Modi ist seit 2014 Premierminister Indiens, führt die Bharatiya Janata Party (BJP) an und gewann die Wiederwahl 2019 und 2024.",
          nl: "Narendra Modi is sinds 2014 Premier van India, leidt de Bharatiya Janata Party (BJP) en won de herverkiezing in 2019 en 2024."
        }
      },
      {
        question: {
          en: "Who is the current President of Ukraine?",
          es: "¿Quién es el actual Presidente de Ucrania?",
          de: "Wer ist der aktuelle Präsident der Ukraine?",
          nl: "Wie is de huidige President van Oekraïne?"
        },
        options: [
          { en: "Volodymyr Zelenskyy", es: "Volodymyr Zelenskyy", de: "Wolodymyr Selenskyj", nl: "Volodymyr Zelensky" },
          { en: "Petro Poroshenko", es: "Petro Poroshenko", de: "Petro Poroschenko", nl: "Petro Poroshenko" },
          { en: "Viktor Yanukovych", es: "Viktor Yanukovych", de: "Viktor Janukowitsch", nl: "Viktor Janoekovitsj" },
          { en: "Yulia Tymoshenko", es: "Yulia Tymoshenko", de: "Julia Timoschenko", nl: "Joelia Timosjenko" }
        ],
        correct: 0,
        explanation: {
          en: "Volodymyr Zelenskyy has been President of Ukraine since 2019, gaining international recognition for his leadership during the Russian invasion that began in 2022.",
          es: "Volodymyr Zelenskyy ha sido Presidente de Ucrania desde 2019, ganando reconocimiento internacional por su liderazgo durante la invasión rusa que comenzó en 2022.",
          de: "Wolodymyr Selenskyj ist seit 2019 Präsident der Ukraine und erlangte internationale Anerkennung für seine Führung während der russischen Invasion, die 2022 begann.",
          nl: "Volodymyr Zelensky is sinds 2019 President van Oekraïne en kreeg internationale erkenning voor zijn leiderschap tijdens de Russische invasie die in 2022 begon."
        }
      },
      {
        question: {
          en: "Who is the current President of Turkey?",
          es: "¿Quién es el actual Presidente de Turquía?",
          de: "Wer ist der aktuelle Präsident der Türkei?",
          nl: "Wie is de huidige President van Turkije?"
        },
        options: [
          { en: "Recep Tayyip Erdoğan", es: "Recep Tayyip Erdoğan", de: "Recep Tayyip Erdoğan", nl: "Recep Tayyip Erdoğan" },
          { en: "Abdullah Gül", es: "Abdullah Gül", de: "Abdullah Gül", nl: "Abdullah Gül" },
          { en: "Kemal Kılıçdaroğlu", es: "Kemal Kılıçdaroğlu", de: "Kemal Kılıçdaroğlu", nl: "Kemal Kılıçdaroğlu" },
          { en: "Meral Akşener", es: "Meral Akşener", de: "Meral Akşener", nl: "Meral Akşener" }
        ],
        correct: 0,
        explanation: {
          en: "Recep Tayyip Erdoğan has been President of Turkey since 2014, previously serving as Prime Minister from 2003-2014, making him Turkey's dominant political figure.",
          es: "Recep Tayyip Erdoğan ha sido Presidente de Turquía desde 2014, habiendo servido previamente como Primer Ministro de 2003-2014, convirtiéndolo en la figura política dominante de Turquía.",
          de: "Recep Tayyip Erdoğan ist seit 2014 Präsident der Türkei, nachdem er von 2003-2014 als Premierminister gedient hatte, was ihn zur dominierenden politischen Figur der Türkei macht.",
          nl: "Recep Tayyip Erdoğan is sinds 2014 President van Turkije, na eerder van 2003-2014 als Premier te hebben gediend, wat hem de dominante politieke figuur van Turkije maakt."
        }
      },
      {
        question: {
          en: "Who is the current President of South Korea?",
          es: "¿Quién es el actual Presidente de Corea del Sur?",
          de: "Wer ist der aktuelle Präsident Südkoreas?",
          nl: "Wie is de huidige President van Zuid-Korea?"
        },
        options: [
          { en: "Yoon Suk-yeol", es: "Yoon Suk-yeol", de: "Yoon Suk-yeol", nl: "Yoon Suk-yeol" },
          { en: "Moon Jae-in", es: "Moon Jae-in", de: "Moon Jae-in", nl: "Moon Jae-in" },
          { en: "Park Geun-hye", es: "Park Geun-hye", de: "Park Geun-hye", nl: "Park Geun-hye" },
          { en: "Lee Myung-bak", es: "Lee Myung-bak", de: "Lee Myung-bak", nl: "Lee Myung-bak" }
        ],
        correct: 0,
        explanation: {
          en: "Yoon Suk-yeol became President of South Korea in May 2022, representing the conservative People Power Party and focusing on strengthening ties with the US.",
          es: "Yoon Suk-yeol se convirtió en Presidente de Corea del Sur en mayo de 2022, representando al conservador Partido del Poder Popular y enfocándose en fortalecer los lazos con EE.UU.",
          de: "Yoon Suk-yeol wurde im Mai 2022 Präsident Südkoreas, vertritt die konservative People Power Party und konzentriert sich auf die Stärkung der Beziehungen zu den USA.",
          nl: "Yoon Suk-yeol werd in mei 2022 President van Zuid-Korea, vertegenwoordigt de conservatieve People Power Party en richt zich op het versterken van de banden met de VS."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Japan?",
          es: "¿Quién es el actual Primer Ministro de Japón?",
          de: "Wer ist der aktuelle Premierminister Japans?",
          nl: "Wie is de huidige Premier van Japan?"
        },
        options: [
          { en: "Fumio Kishida", es: "Fumio Kishida", de: "Fumio Kishida", nl: "Fumio Kishida" },
          { en: "Yoshihide Suga", es: "Yoshihide Suga", de: "Yoshihide Suga", nl: "Yoshihide Suga" },
          { en: "Shinzo Abe", es: "Shinzo Abe", de: "Shinzo Abe", nl: "Shinzo Abe" },
          { en: "Taro Aso", es: "Taro Aso", de: "Taro Aso", nl: "Taro Aso" }
        ],
        correct: 0,
        explanation: {
          en: "Fumio Kishida became Prime Minister of Japan in October 2021, leading the Liberal Democratic Party and focusing on economic recovery and defense policy.",
          es: "Fumio Kishida se convirtió en Primer Ministro de Japón en octubre de 2021, liderando el Partido Liberal Democrático y enfocándose en la recuperación económica y política de defensa.",
          de: "Fumio Kishida wurde im Oktober 2021 Premierminister Japans, führt die Liberaldemokratische Partei an und konzentriert sich auf wirtschaftliche Erholung und Verteidigungspolitik.",
          nl: "Fumio Kishida werd in oktober 2021 Premier van Japan, leidt de Liberaal-Democratische Partij en richt zich op economisch herstel en defensiebeleid."
        }
      },
      {
        question: {
          en: "Who is the current President of Mexico?",
          es: "¿Quién es el actual Presidente de México?",
          de: "Wer ist der aktuelle Präsident Mexikos?",
          nl: "Wie is de huidige President van Mexico?"
        },
        options: [
          { en: "Andrés Manuel López Obrador", es: "Andrés Manuel López Obrador", de: "Andrés Manuel López Obrador", nl: "Andrés Manuel López Obrador" },
          { en: "Enrique Peña Nieto", es: "Enrique Peña Nieto", de: "Enrique Peña Nieto", nl: "Enrique Peña Nieto" },
          { en: "Felipe Calderón", es: "Felipe Calderón", de: "Felipe Calderón", nl: "Felipe Calderón" },
          { en: "Vicente Fox", es: "Vicente Fox", de: "Vicente Fox", nl: "Vicente Fox" }
        ],
        correct: 0,
        explanation: {
          en: "Andrés Manuel López Obrador (AMLO) has been President of Mexico since 2018, representing the MORENA party and implementing populist policies.",
          es: "Andrés Manuel López Obrador (AMLO) ha sido Presidente de México desde 2018, representando al partido MORENA e implementando políticas populistas.",
          de: "Andrés Manuel López Obrador (AMLO) ist seit 2018 Präsident Mexikos, vertritt die MORENA-Partei und setzt populistische Politiken um.",
          nl: "Andrés Manuel López Obrador (AMLO) is sinds 2018 President van Mexico, vertegenwoordigt de MORENA-partij en implementeert populistische beleidsmaatregelen."
        }
      },
      {
        question: {
          en: "Who is the current King of the United Kingdom?",
          es: "¿Quién es el actual Rey del Reino Unido?",
          de: "Wer ist der aktuelle König des Vereinigten Königreichs?",
          nl: "Wie is de huidige Koning van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "King Charles III", es: "Rey Carlos III", de: "König Charles III", nl: "Koning Charles III" },
          { en: "Queen Elizabeth II", es: "Reina Isabel II", de: "Königin Elizabeth II", nl: "Koningin Elizabeth II" },
          { en: "Prince William", es: "Príncipe William", de: "Prinz William", nl: "Prins William" },
          { en: "Prince Harry", es: "Príncipe Harry", de: "Prinz Harry", nl: "Prins Harry" }
        ],
        correct: 0,
        explanation: {
          en: "King Charles III became King in September 2022 following the death of his mother Queen Elizabeth II, who had reigned for 70 years.",
          es: "El Rey Carlos III se convirtió en Rey en septiembre de 2022 tras la muerte de su madre la Reina Isabel II, quien había reinado durante 70 años.",
          de: "König Charles III wurde im September 2022 König nach dem Tod seiner Mutter Königin Elizabeth II, die 70 Jahre lang regiert hatte.",
          nl: "Koning Charles III werd in september 2022 Koning na de dood van zijn moeder Koningin Elizabeth II, die 70 jaar had geregeerd."
        }
      },
      {
        question: {
          en: "Who is the current President of South Africa?",
          es: "¿Quién es el actual Presidente de Sudáfrica?",
          de: "Wer ist der aktuelle Präsident Südafrikas?",
          nl: "Wie is de huidige President van Zuid-Afrika?"
        },
        options: [
          { en: "Cyril Ramaphosa", es: "Cyril Ramaphosa", de: "Cyril Ramaphosa", nl: "Cyril Ramaphosa" },
          { en: "Jacob Zuma", es: "Jacob Zuma", de: "Jacob Zuma", nl: "Jacob Zuma" },
          { en: "Thabo Mbeki", es: "Thabo Mbeki", de: "Thabo Mbeki", nl: "Thabo Mbeki" },
          { en: "Julius Malema", es: "Julius Malema", de: "Julius Malema", nl: "Julius Malema" }
        ],
        correct: 0,
        explanation: {
          en: "Cyril Ramaphosa has been President of South Africa since 2018, leading the African National Congress (ANC) and focusing on economic reform and anti-corruption efforts.",
          es: "Cyril Ramaphosa ha sido Presidente de Sudáfrica desde 2018, liderando el Congreso Nacional Africano (ANC) y enfocándose en la reforma económica y esfuerzos anticorrupción.",
          de: "Cyril Ramaphosa ist seit 2018 Präsident Südafrikas, führt den African National Congress (ANC) an und konzentriert sich auf Wirtschaftsreformen und Antikorruptionsbemühungen.",
          nl: "Cyril Ramaphosa is sinds 2018 President van Zuid-Afrika, leidt het African National Congress (ANC) en richt zich op economische hervormingen en anticorruptie-inspanningen."
        }
      },
      {
        question: {
          en: "Who is the current President of Argentina?",
          es: "¿Quién es el actual Presidente de Argentina?",
          de: "Wer ist der aktuelle Präsident Argentiniens?",
          nl: "Wie is de huidige President van Argentinië?"
        },
        options: [
          { en: "Javier Milei", es: "Javier Milei", de: "Javier Milei", nl: "Javier Milei" },
          { en: "Alberto Fernández", es: "Alberto Fernández", de: "Alberto Fernández", nl: "Alberto Fernández" },
          { en: "Mauricio Macri", es: "Mauricio Macri", de: "Mauricio Macri", nl: "Mauricio Macri" },
          { en: "Cristina Fernández", es: "Cristina Fernández", de: "Cristina Fernández", nl: "Cristina Fernández" }
        ],
        correct: 0,
        explanation: {
          en: "Javier Milei became President of Argentina in December 2023, representing a libertarian political movement and promising radical economic reforms.",
          es: "Javier Milei se convirtió en Presidente de Argentina en diciembre de 2023, representando un movimiento político libertario y prometiendo reformas económicas radicales.",
          de: "Javier Milei wurde im Dezember 2023 Präsident Argentiniens, vertritt eine libertäre politische Bewegung und verspricht radikale Wirtschaftsreformen.",
          nl: "Javier Milei werd in december 2023 President van Argentinië, vertegenwoordigt een libertaire politieke beweging en belooft radicale economische hervormingen."
        }
      },
      {
        question: {
          en: "Who is the current President of Egypt?",
          es: "¿Quién es el actual Presidente de Egipto?",
          de: "Wer ist der aktuelle Präsident Ägyptens?",
          nl: "Wie is de huidige President van Egypte?"
        },
        options: [
          { en: "Abdel Fattah el-Sisi", es: "Abdel Fattah el-Sisi", de: "Abdel Fattah el-Sisi", nl: "Abdel Fattah el-Sisi" },
          { en: "Mohamed Morsi", es: "Mohamed Morsi", de: "Mohamed Morsi", nl: "Mohamed Morsi" },
          { en: "Hosni Mubarak", es: "Hosni Mubarak", de: "Hosni Mubarak", nl: "Hosni Mubarak" },
          { en: "Anwar Sadat", es: "Anwar Sadat", de: "Anwar Sadat", nl: "Anwar Sadat" }
        ],
        correct: 0,
        explanation: {
          en: "Abdel Fattah el-Sisi has been President of Egypt since 2014, coming to power after the military coup that removed Mohamed Morsi from office.",
          es: "Abdel Fattah el-Sisi ha sido Presidente de Egipto desde 2014, llegando al poder después del golpe militar que removió a Mohamed Morsi del cargo.",
          de: "Abdel Fattah el-Sisi ist seit 2014 Präsident Ägyptens, kam nach dem Militärputsch an die Macht, der Mohamed Morsi aus dem Amt entfernte.",
          nl: "Abdel Fattah el-Sisi is sinds 2014 President van Egypte, kwam aan de macht na de militaire coup die Mohamed Morsi uit zijn ambt verwijderde."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Italy?",
          es: "¿Quién es la actual Primera Ministra de Italia?",
          de: "Wer ist die aktuelle Premierministerin Italiens?",
          nl: "Wie is de huidige Premier van Italië?"
        },
        options: [
          { en: "Giorgia Meloni", es: "Giorgia Meloni", de: "Giorgia Meloni", nl: "Giorgia Meloni" },
          { en: "Mario Draghi", es: "Mario Draghi", de: "Mario Draghi", nl: "Mario Draghi" },
          { en: "Giuseppe Conte", es: "Giuseppe Conte", de: "Giuseppe Conte", nl: "Giuseppe Conte" },
          { en: "Matteo Salvini", es: "Matteo Salvini", de: "Matteo Salvini", nl: "Matteo Salvini" }
        ],
        correct: 0,
        explanation: {
          en: "Giorgia Meloni became Prime Minister of Italy in October 2022, leading the Brothers of Italy party and becoming Italy's first female Prime Minister.",
          es: "Giorgia Meloni se convirtió en Primera Ministra de Italia en octubre de 2022, liderando el partido Hermanos de Italia y convirtiéndose en la primera mujer Primera Ministra de Italia.",
          de: "Giorgia Meloni wurde im Oktober 2022 Premierministerin Italiens, führt die Partei Brüder Italiens an und wurde Italiens erste weibliche Premierministerin.",
          nl: "Giorgia Meloni werd in oktober 2022 Premier van Italië, leidt de partij Broeders van Italië en werd Italië's eerste vrouwelijke Premier."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();