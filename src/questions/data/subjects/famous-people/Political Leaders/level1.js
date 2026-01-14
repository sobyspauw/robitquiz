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
      },
      {
        question: {
          en: "Who is the current President of Poland?",
          es: "¿Quién es el actual Presidente de Polonia?",
          de: "Wer ist der aktuelle Präsident Polens?",
          nl: "Wie is de huidige President van Polen?"
        },
        options: [
          { en: "Andrzej Duda", es: "Andrzej Duda", de: "Andrzej Duda", nl: "Andrzej Duda" },
          { en: "Donald Tusk", es: "Donald Tusk", de: "Donald Tusk", nl: "Donald Tusk" },
          { en: "Lech Wałęsa", es: "Lech Wałęsa", de: "Lech Wałęsa", nl: "Lech Wałęsa" },
          { en: "Bronisław Komorowski", es: "Bronisław Komorowski", de: "Bronisław Komorowski", nl: "Bronisław Komorowski" }
        ],
        correct: 0,
        explanation: {
          en: "Andrzej Duda has been President of Poland since 2015, representing the Law and Justice party and supporting conservative policies.",
          es: "Andrzej Duda ha sido Presidente de Polonia desde 2015, representando al partido Ley y Justicia y apoyando políticas conservadoras.",
          de: "Andrzej Duda ist seit 2015 Präsident Polens, vertritt die Partei Recht und Gerechtigkeit und unterstützt konservative Politik.",
          nl: "Andrzej Duda is sinds 2015 President van Polen, vertegenwoordigt de partij Recht en Rechtvaardigheid en steunt conservatief beleid."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Spain?",
          es: "¿Quién es el actual Primer Ministro de España?",
          de: "Wer ist der aktuelle Premierminister Spaniens?",
          nl: "Wie is de huidige Premier van Spanje?"
        },
        options: [
          { en: "Pedro Sánchez", es: "Pedro Sánchez", de: "Pedro Sánchez", nl: "Pedro Sánchez" },
          { en: "Mariano Rajoy", es: "Mariano Rajoy", de: "Mariano Rajoy", nl: "Mariano Rajoy" },
          { en: "José Luis Rodríguez Zapatero", es: "José Luis Rodríguez Zapatero", de: "José Luis Rodríguez Zapatero", nl: "José Luis Rodríguez Zapatero" },
          { en: "Pablo Iglesias", es: "Pablo Iglesias", de: "Pablo Iglesias", nl: "Pablo Iglesias" }
        ],
        correct: 0,
        explanation: {
          en: "Pedro Sánchez has been Prime Minister of Spain since 2018, leading the Spanish Socialist Workers' Party (PSOE) through coalition governments.",
          es: "Pedro Sánchez ha sido Primer Ministro de España desde 2018, liderando el Partido Socialista Obrero Español (PSOE) a través de gobiernos de coalición.",
          de: "Pedro Sánchez ist seit 2018 Premierminister Spaniens und führt die Spanische Sozialistische Arbeiterpartei (PSOE) durch Koalitionsregierungen.",
          nl: "Pedro Sánchez is sinds 2018 Premier van Spanje en leidt de Spaanse Socialistische Arbeiderspartij (PSOE) door coalitieregeringen."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of the Netherlands?",
          es: "¿Quién es el actual Primer Ministro de los Países Bajos?",
          de: "Wer ist der aktuelle Premierminister der Niederlande?",
          nl: "Wie is de huidige Minister-President van Nederland?"
        },
        options: [
          { en: "Mark Rutte", es: "Mark Rutte", de: "Mark Rutte", nl: "Mark Rutte" },
          { en: "Geert Wilders", es: "Geert Wilders", de: "Geert Wilders", nl: "Geert Wilders" },
          { en: "Jan Peter Balkenende", es: "Jan Peter Balkenende", de: "Jan Peter Balkenende", nl: "Jan Peter Balkenende" },
          { en: "Wim Kok", es: "Wim Kok", de: "Wim Kok", nl: "Wim Kok" }
        ],
        correct: 0,
        explanation: {
          en: "Mark Rutte has been Prime Minister of the Netherlands since 2010, becoming the longest-serving Dutch Prime Minister and leading multiple coalition governments.",
          es: "Mark Rutte ha sido Primer Ministro de los Países Bajos desde 2010, convirtiéndose en el Primer Ministro holandés con más tiempo en el cargo y liderando múltiples gobiernos de coalición.",
          de: "Mark Rutte ist seit 2010 Premierminister der Niederlande, wurde der am längsten amtierende niederländische Premierminister und führte mehrere Koalitionsregierungen.",
          nl: "Mark Rutte is sinds 2010 Minister-President van Nederland, werd de langst zittende Nederlandse premier en leidde meerdere coalitieregeringen."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Israel?",
          es: "¿Quién es el actual Primer Ministro de Israel?",
          de: "Wer ist der aktuelle Premierminister Israels?",
          nl: "Wie is de huidige Premier van Israël?"
        },
        options: [
          { en: "Benjamin Netanyahu", es: "Benjamin Netanyahu", de: "Benjamin Netanyahu", nl: "Benjamin Netanyahu" },
          { en: "Yair Lapid", es: "Yair Lapid", de: "Yair Lapid", nl: "Yair Lapid" },
          { en: "Naftali Bennett", es: "Naftali Bennett", de: "Naftali Bennett", nl: "Naftali Bennett" },
          { en: "Benny Gantz", es: "Benny Gantz", de: "Benny Gantz", nl: "Benny Gantz" }
        ],
        correct: 0,
        explanation: {
          en: "Benjamin Netanyahu returned as Prime Minister in December 2022, having previously served multiple terms, making him Israel's longest-serving Prime Minister.",
          es: "Benjamin Netanyahu regresó como Primer Ministro en diciembre de 2022, habiendo servido previamente múltiples términos, convirtiéndolo en el Primer Ministro de Israel con más tiempo en el cargo.",
          de: "Benjamin Netanyahu kehrte im Dezember 2022 als Premierminister zurück, nachdem er zuvor mehrere Amtszeiten gedient hatte, was ihn zu Israels am längsten amtierendem Premierminister macht.",
          nl: "Benjamin Netanyahu keerde in december 2022 terug als Premier, na eerder meerdere termijnen te hebben gediend, wat hem Israëls langst dienende Premier maakt."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of New Zealand?",
          es: "¿Quién es el actual Primer Ministro de Nueva Zelanda?",
          de: "Wer ist der aktuelle Premierminister Neuseelands?",
          nl: "Wie is de huidige Premier van Nieuw-Zeeland?"
        },
        options: [
          { en: "Christopher Luxon", es: "Christopher Luxon", de: "Christopher Luxon", nl: "Christopher Luxon" },
          { en: "Jacinda Ardern", es: "Jacinda Ardern", de: "Jacinda Ardern", nl: "Jacinda Ardern" },
          { en: "Chris Hipkins", es: "Chris Hipkins", de: "Chris Hipkins", nl: "Chris Hipkins" },
          { en: "John Key", es: "John Key", de: "John Key", nl: "John Key" }
        ],
        correct: 0,
        explanation: {
          en: "Christopher Luxon became Prime Minister of New Zealand in November 2023, leading the National Party and forming a coalition government.",
          es: "Christopher Luxon se convirtió en Primer Ministro de Nueva Zelanda en noviembre de 2023, liderando el Partido Nacional y formando un gobierno de coalición.",
          de: "Christopher Luxon wurde im November 2023 Premierminister Neuseelands, führt die National Party an und bildete eine Koalitionsregierung.",
          nl: "Christopher Luxon werd in november 2023 Premier van Nieuw-Zeeland, leidt de Nationale Partij en vormde een coalitieregering."
        }
      },
      {
        question: {
          en: "Who is the current President of Indonesia?",
          es: "¿Quién es el actual Presidente de Indonesia?",
          de: "Wer ist der aktuelle Präsident Indonesiens?",
          nl: "Wie is de huidige President van Indonesië?"
        },
        options: [
          { en: "Joko Widodo", es: "Joko Widodo", de: "Joko Widodo", nl: "Joko Widodo" },
          { en: "Prabowo Subianto", es: "Prabowo Subianto", de: "Prabowo Subianto", nl: "Prabowo Subianto" },
          { en: "Megawati Sukarnoputri", es: "Megawati Sukarnoputri", de: "Megawati Sukarnoputri", nl: "Megawati Sukarnoputri" },
          { en: "Susilo Bambang Yudhoyono", es: "Susilo Bambang Yudhoyono", de: "Susilo Bambang Yudhoyono", nl: "Susilo Bambang Yudhoyono" }
        ],
        correct: 0,
        explanation: {
          en: "Joko Widodo has been President of Indonesia since 2014, known for infrastructure development and economic reforms in Southeast Asia's largest economy.",
          es: "Joko Widodo ha sido Presidente de Indonesia desde 2014, conocido por el desarrollo de infraestructura y reformas económicas en la economía más grande del sudeste asiático.",
          de: "Joko Widodo ist seit 2014 Präsident Indonesiens, bekannt für Infrastrukturentwicklung und Wirtschaftsreformen in Südostasiens größter Volkswirtschaft.",
          nl: "Joko Widodo is sinds 2014 President van Indonesië, bekend om infrastructuurontwikkeling en economische hervormingen in de grootste economie van Zuidoost-Azië."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Pakistan?",
          es: "¿Quién es el actual Primer Ministro de Pakistán?",
          de: "Wer ist der aktuelle Premierminister Pakistans?",
          nl: "Wie is de huidige Premier van Pakistan?"
        },
        options: [
          { en: "Shehbaz Sharif", es: "Shehbaz Sharif", de: "Shehbaz Sharif", nl: "Shehbaz Sharif" },
          { en: "Imran Khan", es: "Imran Khan", de: "Imran Khan", nl: "Imran Khan" },
          { en: "Nawaz Sharif", es: "Nawaz Sharif", de: "Nawaz Sharif", nl: "Nawaz Sharif" },
          { en: "Bilawal Bhutto Zardari", es: "Bilawal Bhutto Zardari", de: "Bilawal Bhutto Zardari", nl: "Bilawal Bhutto Zardari" }
        ],
        correct: 0,
        explanation: {
          en: "Shehbaz Sharif has been Prime Minister of Pakistan since 2022, leading the Pakistan Muslim League (N) and navigating economic challenges.",
          es: "Shehbaz Sharif ha sido Primer Ministro de Pakistán desde 2022, liderando la Liga Musulmana de Pakistán (N) y navegando desafíos económicos.",
          de: "Shehbaz Sharif ist seit 2022 Premierminister Pakistans, führt die Pakistan Muslim League (N) an und bewältigt wirtschaftliche Herausforderungen.",
          nl: "Shehbaz Sharif is sinds 2022 Premier van Pakistan, leidt de Pakistan Muslim League (N) en navigeert door economische uitdagingen."
        }
      },
      {
        question: {
          en: "Who is the current President of Nigeria?",
          es: "¿Quién es el actual Presidente de Nigeria?",
          de: "Wer ist der aktuelle Präsident Nigerias?",
          nl: "Wie is de huidige President van Nigeria?"
        },
        options: [
          { en: "Bola Tinubu", es: "Bola Tinubu", de: "Bola Tinubu", nl: "Bola Tinubu" },
          { en: "Muhammadu Buhari", es: "Muhammadu Buhari", de: "Muhammadu Buhari", nl: "Muhammadu Buhari" },
          { en: "Goodluck Jonathan", es: "Goodluck Jonathan", de: "Goodluck Jonathan", nl: "Goodluck Jonathan" },
          { en: "Atiku Abubakar", es: "Atiku Abubakar", de: "Atiku Abubakar", nl: "Atiku Abubakar" }
        ],
        correct: 0,
        explanation: {
          en: "Bola Tinubu became President of Nigeria in May 2023, leading Africa's most populous nation and implementing economic reforms.",
          es: "Bola Tinubu se convirtió en Presidente de Nigeria en mayo de 2023, liderando la nación más poblada de África e implementando reformas económicas.",
          de: "Bola Tinubu wurde im Mai 2023 Präsident Nigerias, führt Afrikas bevölkerungsreichste Nation an und implementiert Wirtschaftsreformen.",
          nl: "Bola Tinubu werd in mei 2023 President van Nigeria, leidt Afrika's dichtstbevolkte natie en implementeert economische hervormingen."
        }
      },
      {
        question: {
          en: "Who is the current President of Iran?",
          es: "¿Quién es el actual Presidente de Irán?",
          de: "Wer ist der aktuelle Präsident des Iran?",
          nl: "Wie is de huidige President van Iran?"
        },
        options: [
          { en: "Ebrahim Raisi", es: "Ebrahim Raisi", de: "Ebrahim Raisi", nl: "Ebrahim Raisi" },
          { en: "Hassan Rouhani", es: "Hassan Rouhani", de: "Hassan Rouhani", nl: "Hassan Rouhani" },
          { en: "Mahmoud Ahmadinejad", es: "Mahmoud Ahmadinejad", de: "Mahmoud Ahmadinedschad", nl: "Mahmoud Ahmadinejad" },
          { en: "Ali Khamenei", es: "Ali Khamenei", de: "Ali Chamenei", nl: "Ali Khamenei" }
        ],
        correct: 0,
        explanation: {
          en: "Ebrahim Raisi has been President of Iran since 2021, representing conservative factions and maintaining hardline positions on foreign policy.",
          es: "Ebrahim Raisi ha sido Presidente de Irán desde 2021, representando facciones conservadoras y manteniendo posiciones de línea dura en política exterior.",
          de: "Ebrahim Raisi ist seit 2021 Präsident des Iran, vertritt konservative Fraktionen und behält harte Positionen in der Außenpolitik bei.",
          nl: "Ebrahim Raisi is sinds 2021 President van Iran, vertegenwoordigt conservatieve facties en handhaaft hardlijnposities in buitenlands beleid."
        }
      },
      {
        question: {
          en: "Who is the current President of Kenya?",
          es: "¿Quién es el actual Presidente de Kenia?",
          de: "Wer ist der aktuelle Präsident Kenias?",
          nl: "Wie is de huidige President van Kenia?"
        },
        options: [
          { en: "William Ruto", es: "William Ruto", de: "William Ruto", nl: "William Ruto" },
          { en: "Uhuru Kenyatta", es: "Uhuru Kenyatta", de: "Uhuru Kenyatta", nl: "Uhuru Kenyatta" },
          { en: "Raila Odinga", es: "Raila Odinga", de: "Raila Odinga", nl: "Raila Odinga" },
          { en: "Mwai Kibaki", es: "Mwai Kibaki", de: "Mwai Kibaki", nl: "Mwai Kibaki" }
        ],
        correct: 0,
        explanation: {
          en: "William Ruto became President of Kenya in September 2022, after serving as Deputy President and winning a closely contested election.",
          es: "William Ruto se convirtió en Presidente de Kenia en septiembre de 2022, después de servir como Vice Presidente y ganar una elección muy reñida.",
          de: "William Ruto wurde im September 2022 Präsident Kenias, nachdem er als stellvertretender Präsident gedient und eine hart umkämpfte Wahl gewonnen hatte.",
          nl: "William Ruto werd in september 2022 President van Kenia, na als Vice-President te hebben gediend en een nauw bevochten verkiezing te hebben gewonnen."
        }
      },
      {
        question: {
          en: "Who is the current President of Colombia?",
          es: "¿Quién es el actual Presidente de Colombia?",
          de: "Wer ist der aktuelle Präsident Kolumbiens?",
          nl: "Wie is de huidige President van Colombia?"
        },
        options: [
          { en: "Gustavo Petro", es: "Gustavo Petro", de: "Gustavo Petro", nl: "Gustavo Petro" },
          { en: "Iván Duque", es: "Iván Duque", de: "Iván Duque", nl: "Iván Duque" },
          { en: "Juan Manuel Santos", es: "Juan Manuel Santos", de: "Juan Manuel Santos", nl: "Juan Manuel Santos" },
          { en: "Álvaro Uribe", es: "Álvaro Uribe", de: "Álvaro Uribe", nl: "Álvaro Uribe" }
        ],
        correct: 0,
        explanation: {
          en: "Gustavo Petro became President of Colombia in August 2022, becoming the country's first leftist president and promising social reforms.",
          es: "Gustavo Petro se convirtió en Presidente de Colombia en agosto de 2022, convirtiéndose en el primer presidente de izquierda del país y prometiendo reformas sociales.",
          de: "Gustavo Petro wurde im August 2022 Präsident Kolumbiens, wurde der erste linke Präsident des Landes und versprach Sozialreformen.",
          nl: "Gustavo Petro werd in augustus 2022 President van Colombia, werd de eerste linkse president van het land en beloofde sociale hervormingen."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Sweden?",
          es: "¿Quién es el actual Primer Ministro de Suecia?",
          de: "Wer ist der aktuelle Premierminister Schwedens?",
          nl: "Wie is de huidige Premier van Zweden?"
        },
        options: [
          { en: "Ulf Kristersson", es: "Ulf Kristersson", de: "Ulf Kristersson", nl: "Ulf Kristersson" },
          { en: "Magdalena Andersson", es: "Magdalena Andersson", de: "Magdalena Andersson", nl: "Magdalena Andersson" },
          { en: "Stefan Löfven", es: "Stefan Löfven", de: "Stefan Löfven", nl: "Stefan Löfven" },
          { en: "Fredrik Reinfeldt", es: "Fredrik Reinfeldt", de: "Fredrik Reinfeldt", nl: "Fredrik Reinfeldt" }
        ],
        correct: 0,
        explanation: {
          en: "Ulf Kristersson became Prime Minister of Sweden in October 2022, leading a center-right coalition government and marking a shift in Swedish politics.",
          es: "Ulf Kristersson se convirtió en Primer Ministro de Suecia en octubre de 2022, liderando un gobierno de coalición de centro-derecha y marcando un cambio en la política sueca.",
          de: "Ulf Kristersson wurde im Oktober 2022 Premierminister Schwedens, führt eine Mitte-Rechts-Koalitionsregierung an und markiert einen Wandel in der schwedischen Politik.",
          nl: "Ulf Kristersson werd in oktober 2022 Premier van Zweden, leidt een centrum-rechtse coalitieregering en markeert een verschuiving in de Zweedse politiek."
        }
      },
      {
        question: {
          en: "Who is the current Prime Minister of Norway?",
          es: "¿Quién es el actual Primer Ministro de Noruega?",
          de: "Wer ist der aktuelle Premierminister Norwegens?",
          nl: "Wie is de huidige Premier van Noorwegen?"
        },
        options: [
          { en: "Jonas Gahr Støre", es: "Jonas Gahr Støre", de: "Jonas Gahr Støre", nl: "Jonas Gahr Støre" },
          { en: "Erna Solberg", es: "Erna Solberg", de: "Erna Solberg", nl: "Erna Solberg" },
          { en: "Jens Stoltenberg", es: "Jens Stoltenberg", de: "Jens Stoltenberg", nl: "Jens Stoltenberg" },
          { en: "Kjell Magne Bondevik", es: "Kjell Magne Bondevik", de: "Kjell Magne Bondevik", nl: "Kjell Magne Bondevik" }
        ],
        correct: 0,
        explanation: {
          en: "Jonas Gahr Støre has been Prime Minister of Norway since October 2021, leading the Labour Party and a center-left coalition government.",
          es: "Jonas Gahr Støre ha sido Primer Ministro de Noruega desde octubre de 2021, liderando el Partido Laborista y un gobierno de coalición de centro-izquierda.",
          de: "Jonas Gahr Støre ist seit Oktober 2021 Premierminister Norwegens, führt die Arbeiterpartei und eine Mitte-Links-Koalitionsregierung an.",
          nl: "Jonas Gahr Støre is sinds oktober 2021 Premier van Noorwegen, leidt de Arbeiderspartij en een centrum-linkse coalitieregering."
        }
      ,
      {
        question: {
                  "en": "When was this political leader born?",
                  "es": "When was este/a political leader born?",
                  "de": "When was diese(r) political leader born?",
                  "nl": "When was deze political leader born?"
        },
        options: [
          {
                    "en": "Correct year",
                    "es": "Correct year",
                    "de": "Correct year",
                    "nl": "Correct year"
          },
          {
                    "en": "5 years earlier",
                    "es": "5 years earlier",
                    "de": "5 years earlier",
                    "nl": "5 years earlier"
          },
          {
                    "en": "5 years later",
                    "es": "5 years later",
                    "de": "5 years later",
                    "nl": "5 years later"
          },
          {
                    "en": "10 years later",
                    "es": "10 years later",
                    "de": "10 years later",
                    "nl": "10 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this political leader is historically accurate and well-documented.",
                  "es": "Este hecho sobre this political leader es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this political leader ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this political leader is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "Where was this political leader born?",
                  "es": "Where was este/a political leader born?",
                  "de": "Where was diese(r) political leader born?",
                  "nl": "Where was deze political leader born?"
        },
        options: [
          {
                    "en": "Correct location",
                    "es": "Correct location",
                    "de": "Correct location",
                    "nl": "Correct location"
          },
          {
                    "en": "Neighboring country",
                    "es": "Neighboring country",
                    "de": "Neighboring country",
                    "nl": "Neighboring country"
          },
          {
                    "en": "Different continent",
                    "es": "Different continent",
                    "de": "Different continent",
                    "nl": "Different continent"
          },
          {
                    "en": "Capital city",
                    "es": "Capital city",
                    "de": "Capital city",
                    "nl": "Capital city"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this political leader is historically accurate and well-documented.",
                  "es": "Este hecho sobre this political leader es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this political leader ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this political leader is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What was this political leader's full name?",
                  "es": "What was este/a political leader's full name?",
                  "de": "What was diese(r) political leader's full name?",
                  "nl": "What was deze political leader's full name?"
        },
        options: [
          {
                    "en": "Correct name",
                    "es": "Correct name",
                    "de": "Correct name",
                    "nl": "Correct name"
          },
          {
                    "en": "Similar name",
                    "es": "Similar name",
                    "de": "Similar name",
                    "nl": "Similar name"
          },
          {
                    "en": "Common name",
                    "es": "Common name",
                    "de": "Common name",
                    "nl": "Common name"
          },
          {
                    "en": "Stage name only",
                    "es": "Stage name only",
                    "de": "Stage name only",
                    "nl": "Stage name only"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this political leader is historically accurate and well-documented.",
                  "es": "Este hecho sobre this political leader es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this political leader ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this political leader is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "When did this political leader pass away?",
                  "es": "When did este/a political leader pass away?",
                  "de": "When did diese(r) political leader pass away?",
                  "nl": "When did deze political leader pass away?"
        },
        options: [
          {
                    "en": "Correct year",
                    "es": "Correct year",
                    "de": "Correct year",
                    "nl": "Correct year"
          },
          {
                    "en": "10 years earlier",
                    "es": "10 years earlier",
                    "de": "10 years earlier",
                    "nl": "10 years earlier"
          },
          {
                    "en": "10 years later",
                    "es": "10 years later",
                    "de": "10 years later",
                    "nl": "10 years later"
          },
          {
                    "en": "Still alive",
                    "es": "Still alive",
                    "de": "Still alive",
                    "nl": "Still alive"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this political leader is historically accurate and well-documented.",
                  "es": "Este hecho sobre this political leader es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this political leader ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this political leader is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "How old was this political leader when they died?",
                  "es": "How old was este/a political leader when they died?",
                  "de": "How old was diese(r) political leader when they died?",
                  "nl": "How old was deze political leader when they died?"
        },
        options: [
          {
                    "en": "Correct age",
                    "es": "Correct age",
                    "de": "Correct age",
                    "nl": "Correct age"
          },
          {
                    "en": "10 years younger",
                    "es": "10 years younger",
                    "de": "10 years younger",
                    "nl": "10 years younger"
          },
          {
                    "en": "10 years older",
                    "es": "10 years older",
                    "de": "10 years older",
                    "nl": "10 years older"
          },
          {
                    "en": "Different age",
                    "es": "Different age",
                    "de": "Different age",
                    "nl": "Different age"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this political leader is historically accurate and well-documented.",
                  "es": "Este hecho sobre this political leader es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this political leader ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this political leader is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What was this political leader's nationality?",
                  "es": "What was este/a political leader's nationality?",
                  "de": "What was diese(r) political leader's nationality?",
                  "nl": "What was deze political leader's nationality?"
        },
        options: [
          {
                    "en": "Correct nationality",
                    "es": "Correct nationality",
                    "de": "Correct nationality",
                    "nl": "Correct nationality"
          },
          {
                    "en": "Neighboring country",
                    "es": "Neighboring country",
                    "de": "Neighboring country",
                    "nl": "Neighboring country"
          },
          {
                    "en": "Colonial power",
                    "es": "Colonial power",
                    "de": "Colonial power",
                    "nl": "Colonial power"
          },
          {
                    "en": "Different continent",
                    "es": "Different continent",
                    "de": "Different continent",
                    "nl": "Different continent"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this political leader is historically accurate and well-documented.",
                  "es": "Este hecho sobre this political leader es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this political leader ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this political leader is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What was this political leader's education?",
                  "es": "What was este/a political leader's education?",
                  "de": "What was diese(r) political leader's education?",
                  "nl": "What was deze political leader's education?"
        },
        options: [
          {
                    "en": "Correct education",
                    "es": "Correct education",
                    "de": "Correct education",
                    "nl": "Correct education"
          },
          {
                    "en": "No formal education",
                    "es": "No formal education",
                    "de": "No formal education",
                    "nl": "No formal education"
          },
          {
                    "en": "Different field",
                    "es": "Different field",
                    "de": "Different field",
                    "nl": "Different field"
          },
          {
                    "en": "PhD only",
                    "es": "PhD only",
                    "de": "PhD only",
                    "nl": "PhD only"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this political leader is historically accurate and well-documented.",
                  "es": "Este hecho sobre this political leader es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this political leader ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this political leader is historisch accuraat en goed gedocumenteerd."
        }
      }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();
