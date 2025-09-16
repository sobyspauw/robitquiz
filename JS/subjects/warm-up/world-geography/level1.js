// World Geography - Level 1: Countries and Capitals Basics
(function() {
  const level1 = {
    name: {
      en: "Countries and Capitals Basics",
      es: "Países y Capitales Básicos",
      de: "Länder und Hauptstädte Grundlagen",
      nl: "Landen en Hoofdsteden Basis"
    },
    questions: [
      {
        question: {
          en: "What is the capital of France?",
          es: "¿Cuál es la capital de Francia?",
          de: "Was ist die Hauptstadt von Frankreich?",
          nl: "Wat is de hoofdstad van Frankrijk?"
        },
        options: [
          { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" }
        ],
        correct: 0,
        explanation: {
          en: "Paris is the capital and largest city of France, located on the River Seine in northern France.",
          es: "París es la capital y ciudad más grande de Francia, ubicada en el río Sena en el norte de Francia.",
          de: "Paris ist die Hauptstadt und größte Stadt Frankreichs, gelegen an der Seine in Nordfrankreich.",
          nl: "Parijs is de hoofdstad en grootste stad van Frankrijk, gelegen aan de rivier de Seine in Noord-Frankrijk."
        }
      },
      {
        question: {
          en: "What is the capital of the United Kingdom?",
          es: "¿Cuál es la capital del Reino Unido?",
          de: "Was ist die Hauptstadt des Vereinigten Königreichs?",
          nl: "Wat is de hoofdstad van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "Edinburgh", es: "Edimburgo", de: "Edinburgh", nl: "Edinburgh" },
          { en: "Manchester", es: "Mánchester", de: "Manchester", nl: "Manchester" },
          { en: "Liverpool", es: "Liverpool", de: "Liverpool", nl: "Liverpool" }
        ],
        correct: 0,
        explanation: {
          en: "London is the capital city of the United Kingdom and England, known for its rich history and cultural landmarks.",
          es: "Londres es la capital del Reino Unido e Inglaterra, conocida por su rica historia y monumentos culturales.",
          de: "London ist die Hauptstadt des Vereinigten Königreichs und Englands, bekannt für seine reiche Geschichte und kulturellen Sehenswürdigkeiten.",
          nl: "Londen is de hoofdstad van het Verenigd Koninkrijk en Engeland, bekend om zijn rijke geschiedenis en culturele monumenten."
        }
      },
      {
        question: {
          en: "What is the capital of Germany?",
          es: "¿Cuál es la capital de Alemania?",
          de: "Was ist die Hauptstadt von Deutschland?",
          nl: "Wat is de hoofdstad van Duitsland?"
        },
        options: [
          { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" },
          { en: "Munich", es: "Múnich", de: "München", nl: "München" },
          { en: "Hamburg", es: "Hamburgo", de: "Hamburg", nl: "Hamburg" },
          { en: "Cologne", es: "Colonia", de: "Köln", nl: "Keulen" }
        ],
        correct: 0,
        explanation: {
          en: "Berlin is the capital and largest city of Germany, serving as the country's political and cultural center.",
          es: "Berlín es la capital y ciudad más grande de Alemania, siendo el centro político y cultural del país.",
          de: "Berlin ist die Hauptstadt und größte Stadt Deutschlands und dient als politisches und kulturelles Zentrum des Landes.",
          nl: "Berlijn is de hoofdstad en grootste stad van Duitsland, en dient als het politieke en culturele centrum van het land."
        }
      },
      {
        question: {
          en: "What is the capital of Italy?",
          es: "¿Cuál es la capital de Italia?",
          de: "Was ist die Hauptstadt von Italien?",
          nl: "Wat is de hoofdstad van Italië?"
        },
        options: [
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Milan", es: "Milán", de: "Mailand", nl: "Milaan" },
          { en: "Venice", es: "Venecia", de: "Venedig", nl: "Venetië" },
          { en: "Naples", es: "Nápoles", de: "Neapel", nl: "Napels" }
        ],
        correct: 0,
        explanation: {
          en: "Rome is the capital of Italy and was the heart of the ancient Roman Empire, known as the 'Eternal City'.",
          es: "Roma es la capital de Italia y fue el corazón del antiguo Imperio Romano, conocida como la 'Ciudad Eterna'.",
          de: "Rom ist die Hauptstadt Italiens und war das Herz des antiken Römischen Reiches, bekannt als die 'Ewige Stadt'.",
          nl: "Rome is de hoofdstad van Italië en was het hart van het oude Romeinse Rijk, bekend als de 'Eeuwige Stad'."
        }
      },
      {
        question: {
          en: "What is the capital of Spain?",
          es: "¿Cuál es la capital de España?",
          de: "Was ist die Hauptstadt von Spanien?",
          nl: "Wat is de hoofdstad van Spanje?"
        },
        options: [
          { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" },
          { en: "Barcelona", es: "Barcelona", de: "Barcelona", nl: "Barcelona" },
          { en: "Seville", es: "Sevilla", de: "Sevilla", nl: "Sevilla" },
          { en: "Valencia", es: "Valencia", de: "Valencia", nl: "Valencia" }
        ],
        correct: 0,
        explanation: {
          en: "Madrid is the capital and largest city of Spain, located in the center of the country.",
          es: "Madrid es la capital y ciudad más grande de España, ubicada en el centro del país.",
          de: "Madrid ist die Hauptstadt und größte Stadt Spaniens, gelegen im Zentrum des Landes.",
          nl: "Madrid is de hoofdstad en grootste stad van Spanje, gelegen in het centrum van het land."
        }
      },
      {
        question: {
          en: "What is the capital of the Netherlands?",
          es: "¿Cuál es la capital de los Países Bajos?",
          de: "Was ist die Hauptstadt der Niederlande?",
          nl: "Wat is de hoofdstad van Nederland?"
        },
        options: [
          { en: "Amsterdam", es: "Ámsterdam", de: "Amsterdam", nl: "Amsterdam" },
          { en: "The Hague", es: "La Haya", de: "Den Haag", nl: "Den Haag" },
          { en: "Rotterdam", es: "Róterdam", de: "Rotterdam", nl: "Rotterdam" },
          { en: "Utrecht", es: "Utrecht", de: "Utrecht", nl: "Utrecht" }
        ],
        correct: 0,
        explanation: {
          en: "Amsterdam is the capital of the Netherlands, famous for its canals, museums, and historic architecture.",
          es: "Ámsterdam es la capital de los Países Bajos, famosa por sus canales, museos y arquitectura histórica.",
          de: "Amsterdam ist die Hauptstadt der Niederlande, berühmt für seine Kanäle, Museen und historische Architektur.",
          nl: "Amsterdam is de hoofdstad van Nederland, beroemd om zijn grachten, musea en historische architectuur."
        }
      },
      {
        question: {
          en: "What is the capital of the United States?",
          es: "¿Cuál es la capital de Estados Unidos?",
          de: "Was ist die Hauptstadt der Vereinigten Staaten?",
          nl: "Wat is de hoofdstad van de Verenigde Staten?"
        },
        options: [
          { en: "Washington, D.C.", es: "Washington, D.C.", de: "Washington, D.C.", nl: "Washington, D.C." },
          { en: "New York", es: "Nueva York", de: "New York", nl: "New York" },
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" }
        ],
        correct: 0,
        explanation: {
          en: "Washington, D.C. is the capital of the United States, home to the federal government and many national monuments.",
          es: "Washington, D.C. es la capital de Estados Unidos, hogar del gobierno federal y muchos monumentos nacionales.",
          de: "Washington, D.C. ist die Hauptstadt der Vereinigten Staaten, Sitz der Bundesregierung und vieler nationaler Denkmäler.",
          nl: "Washington, D.C. is de hoofdstad van de Verenigde Staten, thuisbasis van de federale regering en vele nationale monumenten."
        }
      },
      {
        question: {
          en: "What is the capital of Canada?",
          es: "¿Cuál es la capital de Canadá?",
          de: "Was ist die Hauptstadt von Kanada?",
          nl: "Wat is de hoofdstad van Canada?"
        },
        options: [
          { en: "Ottawa", es: "Ottawa", de: "Ottawa", nl: "Ottawa" },
          { en: "Toronto", es: "Toronto", de: "Toronto", nl: "Toronto" },
          { en: "Montreal", es: "Montreal", de: "Montreal", nl: "Montreal" },
          { en: "Vancouver", es: "Vancouver", de: "Vancouver", nl: "Vancouver" }
        ],
        correct: 0,
        explanation: {
          en: "Ottawa is the capital city of Canada, located in southeastern Ontario on the Ottawa River.",
          es: "Ottawa es la capital de Canadá, ubicada en el sureste de Ontario en el río Ottawa.",
          de: "Ottawa ist die Hauptstadt Kanadas, gelegen im Südosten Ontarios am Ottawa-Fluss.",
          nl: "Ottawa is de hoofdstad van Canada, gelegen in het zuidoosten van Ontario aan de Ottawa-rivier."
        }
      },
      {
        question: {
          en: "What is the capital of Australia?",
          es: "¿Cuál es la capital de Australia?",
          de: "Was ist die Hauptstadt von Australien?",
          nl: "Wat is de hoofdstad van Australië?"
        },
        options: [
          { en: "Canberra", es: "Canberra", de: "Canberra", nl: "Canberra" },
          { en: "Sydney", es: "Sídney", de: "Sydney", nl: "Sydney" },
          { en: "Melbourne", es: "Melbourne", de: "Melbourne", nl: "Melbourne" },
          { en: "Brisbane", es: "Brisbane", de: "Brisbane", nl: "Brisbane" }
        ],
        correct: 0,
        explanation: {
          en: "Canberra is the capital of Australia, chosen as a compromise between rivals Sydney and Melbourne.",
          es: "Canberra es la capital de Australia, elegida como un compromiso entre las ciudades rivales Sydney y Melbourne.",
          de: "Canberra ist die Hauptstadt Australiens, als Kompromiss zwischen den rivalisierenden Städten Sydney und Melbourne gewählt.",
          nl: "Canberra is de hoofdstad van Australië, gekozen als compromis tussen de rivaliserende steden Sydney en Melbourne."
        }
      },
      {
        question: {
          en: "What is the capital of Japan?",
          es: "¿Cuál es la capital de Japón?",
          de: "Was ist die Hauptstadt von Japan?",
          nl: "Wat is de hoofdstad van Japan?"
        },
        options: [
          { en: "Tokyo", es: "Tokio", de: "Tokio", nl: "Tokio" },
          { en: "Osaka", es: "Osaka", de: "Osaka", nl: "Osaka" },
          { en: "Kyoto", es: "Kioto", de: "Kyoto", nl: "Kyoto" },
          { en: "Nagoya", es: "Nagoya", de: "Nagoya", nl: "Nagoya" }
        ],
        correct: 0,
        explanation: {
          en: "Tokyo is the capital of Japan and one of the world's most populous metropolitan areas.",
          es: "Tokio es la capital de Japón y una de las áreas metropolitanas más pobladas del mundo.",
          de: "Tokio ist die Hauptstadt Japans und eine der bevölkerungsreichsten Metropolregionen der Welt.",
          nl: "Tokio is de hoofdstad van Japan en een van de dichtstbevolkte metropoolgebieden ter wereld."
        }
      },
      {
        question: {
          en: "What is the capital of China?",
          es: "¿Cuál es la capital de China?",
          de: "Was ist die Hauptstadt von China?",
          nl: "Wat is de hoofdstad van China?"
        },
        options: [
          { en: "Beijing", es: "Pekín", de: "Peking", nl: "Peking" },
          { en: "Shanghai", es: "Shanghái", de: "Shanghai", nl: "Shanghai" },
          { en: "Hong Kong", es: "Hong Kong", de: "Hongkong", nl: "Hong Kong" },
          { en: "Guangzhou", es: "Cantón", de: "Guangzhou", nl: "Guangzhou" }
        ],
        correct: 0,
        explanation: {
          en: "Beijing is the capital of China and has been the country's political center for centuries.",
          es: "Pekín es la capital de China y ha sido el centro político del país durante siglos.",
          de: "Peking ist die Hauptstadt Chinas und seit Jahrhunderten das politische Zentrum des Landes.",
          nl: "Peking is de hoofdstad van China en is al eeuwenlang het politieke centrum van het land."
        }
      },
      {
        question: {
          en: "What is the capital of India?",
          es: "¿Cuál es la capital de la India?",
          de: "Was ist die Hauptstadt von Indien?",
          nl: "Wat is de hoofdstad van India?"
        },
        options: [
          { en: "New Delhi", es: "Nueva Delhi", de: "Neu-Delhi", nl: "New Delhi" },
          { en: "Mumbai", es: "Bombay", de: "Mumbai", nl: "Mumbai" },
          { en: "Kolkata", es: "Calcuta", de: "Kalkutta", nl: "Kolkata" },
          { en: "Chennai", es: "Chennai", de: "Chennai", nl: "Chennai" }
        ],
        correct: 0,
        explanation: {
          en: "New Delhi is the capital of India, serving as the seat of the Indian government.",
          es: "Nueva Delhi es la capital de la India, sirviendo como sede del gobierno indio.",
          de: "Neu-Delhi ist die Hauptstadt Indiens und Sitz der indischen Regierung.",
          nl: "New Delhi is de hoofdstad van India en de zetel van de Indiase regering."
        }
      },
      {
        question: {
          en: "What is the capital of Russia?",
          es: "¿Cuál es la capital de Rusia?",
          de: "Was ist die Hauptstadt von Russland?",
          nl: "Wat is de hoofdstad van Rusland?"
        },
        options: [
          { en: "Moscow", es: "Moscú", de: "Moskau", nl: "Moskou" },
          { en: "St. Petersburg", es: "San Petersburgo", de: "Sankt Petersburg", nl: "Sint-Petersburg" },
          { en: "Novosibirsk", es: "Novosibirsk", de: "Novosibirsk", nl: "Novosibirsk" },
          { en: "Yekaterinburg", es: "Ekaterimburgo", de: "Jekaterinburg", nl: "Jekaterinburg" }
        ],
        correct: 0,
        explanation: {
          en: "Moscow is the capital of Russia and the country's largest city, serving as its political and economic center.",
          es: "Moscú es la capital de Rusia y la ciudad más grande del país, sirviendo como su centro político y económico.",
          de: "Moskau ist die Hauptstadt Russlands und die größte Stadt des Landes, die als politisches und wirtschaftliches Zentrum dient.",
          nl: "Moskou is de hoofdstad van Rusland en de grootste stad van het land, en dient als politiek en economisch centrum."
        }
      },
      {
        question: {
          en: "What is the capital of Brazil?",
          es: "¿Cuál es la capital de Brasil?",
          de: "Was ist die Hauptstadt von Brasilien?",
          nl: "Wat is de hoofdstad van Brazilië?"
        },
        options: [
          { en: "Brasilia", es: "Brasilia", de: "Brasília", nl: "Brasilia" },
          { en: "São Paulo", es: "São Paulo", de: "São Paulo", nl: "São Paulo" },
          { en: "Rio de Janeiro", es: "Río de Janeiro", de: "Rio de Janeiro", nl: "Rio de Janeiro" },
          { en: "Salvador", es: "Salvador", de: "Salvador", nl: "Salvador" }
        ],
        correct: 0,
        explanation: {
          en: "Brasilia is the capital of Brazil, a planned city built in the 1950s to serve as the new capital.",
          es: "Brasilia es la capital de Brasil, una ciudad planificada construida en los años 1950 para servir como la nueva capital.",
          de: "Brasília ist die Hauptstadt Brasiliens, eine geplante Stadt, die in den 1950er Jahren als neue Hauptstadt erbaut wurde.",
          nl: "Brasilia is de hoofdstad van Brazilië, een geplande stad gebouwd in de jaren 1950 om als nieuwe hoofdstad te dienen."
        }
      },
      {
        question: {
          en: "What is the capital of Argentina?",
          es: "¿Cuál es la capital de Argentina?",
          de: "Was ist die Hauptstadt von Argentinien?",
          nl: "Wat is de hoofdstad van Argentinië?"
        },
        options: [
          { en: "Buenos Aires", es: "Buenos Aires", de: "Buenos Aires", nl: "Buenos Aires" },
          { en: "Córdoba", es: "Córdoba", de: "Córdoba", nl: "Córdoba" },
          { en: "Rosario", es: "Rosario", de: "Rosario", nl: "Rosario" },
          { en: "Mendoza", es: "Mendoza", de: "Mendoza", nl: "Mendoza" }
        ],
        correct: 0,
        explanation: {
          en: "Buenos Aires is the capital of Argentina, known as the 'Paris of South America' for its European architecture.",
          es: "Buenos Aires es la capital de Argentina, conocida como el 'París de Sudamérica' por su arquitectura europea.",
          de: "Buenos Aires ist die Hauptstadt Argentiniens, bekannt als das 'Paris Südamerikas' wegen seiner europäischen Architektur.",
          nl: "Buenos Aires is de hoofdstad van Argentinië, bekend als het 'Parijs van Zuid-Amerika' vanwege zijn Europese architectuur."
        }
      },
      {
        question: {
          en: "What is the capital of Mexico?",
          es: "¿Cuál es la capital de México?",
          de: "Was ist die Hauptstadt von Mexiko?",
          nl: "Wat is de hoofdstad van Mexico?"
        },
        options: [
          { en: "Mexico City", es: "Ciudad de México", de: "Mexiko-Stadt", nl: "Mexico-Stad" },
          { en: "Guadalajara", es: "Guadalajara", de: "Guadalajara", nl: "Guadalajara" },
          { en: "Monterrey", es: "Monterrey", de: "Monterrey", nl: "Monterrey" },
          { en: "Puebla", es: "Puebla", de: "Puebla", nl: "Puebla" }
        ],
        correct: 0,
        explanation: {
          en: "Mexico City is the capital of Mexico and one of the largest metropolitan areas in the world.",
          es: "Ciudad de México es la capital de México y una de las áreas metropolitanas más grandes del mundo.",
          de: "Mexiko-Stadt ist die Hauptstadt Mexikos und eine der größten Metropolregionen der Welt.",
          nl: "Mexico-Stad is de hoofdstad van Mexico en een van de grootste metropoolgebieden ter wereld."
        }
      },
      {
        question: {
          en: "What is the capital of Egypt?",
          es: "¿Cuál es la capital de Egipto?",
          de: "Was ist die Hauptstadt von Ägypten?",
          nl: "Wat is de hoofdstad van Egypte?"
        },
        options: [
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Caïro" },
          { en: "Alexandria", es: "Alejandría", de: "Alexandria", nl: "Alexandrië" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" }
        ],
        correct: 0,
        explanation: {
          en: "Cairo is the capital of Egypt and the largest city in Africa, located on the Nile River near the ancient pyramids.",
          es: "El Cairo es la capital de Egipto y la ciudad más grande de África, ubicada en el río Nilo cerca de las pirámides antiguas.",
          de: "Kairo ist die Hauptstadt Ägyptens und die größte Stadt Afrikas, gelegen am Nil in der Nähe der antiken Pyramiden.",
          nl: "Caïro is de hoofdstad van Egypte en de grootste stad van Afrika, gelegen aan de Nijl nabij de oude piramides."
        }
      },
      {
        question: {
          en: "What is the capital of South Africa?",
          es: "¿Cuál es la capital de Sudáfrica?",
          de: "Was ist die Hauptstadt von Südafrika?",
          nl: "Wat is de hoofdstad van Zuid-Afrika?"
        },
        options: [
          { en: "Cape Town", es: "Ciudad del Cabo", de: "Kapstadt", nl: "Kaapstad" },
          { en: "Johannesburg", es: "Johannesburgo", de: "Johannesburg", nl: "Johannesburg" },
          { en: "Durban", es: "Durban", de: "Durban", nl: "Durban" },
          { en: "Pretoria", es: "Pretoria", de: "Pretoria", nl: "Pretoria" }
        ],
        correct: 0,
        explanation: {
          en: "Cape Town is the legislative capital of South Africa, known for its stunning mountain and ocean views.",
          es: "Ciudad del Cabo es la capital legislativa de Sudáfrica, conocida por sus impresionantes vistas de montañas y océano.",
          de: "Kapstadt ist die gesetzgebende Hauptstadt Südafrikas, bekannt für seine atemberaubenden Berg- und Meeresblicke.",
          nl: "Kaapstad is de wetgevende hoofdstad van Zuid-Afrika, bekend om zijn prachtige berg- en oceaanzichten."
        }
      },
      {
        question: {
          en: "What is the capital of Turkey?",
          es: "¿Cuál es la capital de Turquía?",
          de: "Was ist die Hauptstadt der Türkei?",
          nl: "Wat is de hoofdstad van Turkije?"
        },
        options: [
          { en: "Ankara", es: "Ankara", de: "Ankara", nl: "Ankara" },
          { en: "Istanbul", es: "Estambul", de: "Istanbul", nl: "Istanbul" },
          { en: "Izmir", es: "Esmirna", de: "Izmir", nl: "Izmir" },
          { en: "Bursa", es: "Bursa", de: "Bursa", nl: "Bursa" }
        ],
        correct: 0,
        explanation: {
          en: "Ankara is the capital of Turkey, chosen as capital in 1923 to replace Istanbul as the seat of government.",
          es: "Ankara es la capital de Turquía, elegida como capital en 1923 para reemplazar a Estambul como sede del gobierno.",
          de: "Ankara ist die Hauptstadt der Türkei, 1923 als Hauptstadt gewählt, um Istanbul als Regierungssitz zu ersetzen.",
          nl: "Ankara is de hoofdstad van Turkije, gekozen als hoofdstad in 1923 om Istanbul te vervangen als regeringszetel."
        }
      },
      {
        question: {
          en: "What is the capital of Greece?",
          es: "¿Cuál es la capital de Grecia?",
          de: "Was ist die Hauptstadt von Griechenland?",
          nl: "Wat is de hoofdstad van Griekenland?"
        },
        options: [
          { en: "Athens", es: "Atenas", de: "Athen", nl: "Athene" },
          { en: "Thessaloniki", es: "Tesalónica", de: "Thessaloniki", nl: "Thessaloniki" },
          { en: "Patras", es: "Patras", de: "Patras", nl: "Patras" },
          { en: "Heraklion", es: "Heraclión", de: "Heraklion", nl: "Heraklion" }
        ],
        correct: 0,
        explanation: {
          en: "Athens is the capital of Greece and is considered the birthplace of democracy and Western civilization.",
          es: "Atenas es la capital de Grecia y es considerada la cuna de la democracia y la civilización occidental.",
          de: "Athen ist die Hauptstadt Griechenlands und gilt als Wiege der Demokratie und der westlichen Zivilisation.",
          nl: "Athene is de hoofdstad van Griekenland en wordt beschouwd als de bakermat van de democratie en de westerse beschaving."
        }
      },
      {
        question: {
          en: "What is the capital of Portugal?",
          es: "¿Cuál es la capital de Portugal?",
          de: "Was ist die Hauptstadt von Portugal?",
          nl: "Wat is de hoofdstad van Portugal?"
        },
        options: [
          { en: "Lisbon", es: "Lisboa", de: "Lissabon", nl: "Lissabon" },
          { en: "Porto", es: "Oporto", de: "Porto", nl: "Porto" },
          { en: "Coimbra", es: "Coimbra", de: "Coimbra", nl: "Coimbra" },
          { en: "Braga", es: "Braga", de: "Braga", nl: "Braga" }
        ],
        correct: 0,
        explanation: {
          en: "Lisbon is the capital of Portugal, located on the Atlantic coast and known for its historic neighborhoods.",
          es: "Lisboa es la capital de Portugal, ubicada en la costa atlántica y conocida por sus barrios históricos.",
          de: "Lissabon ist die Hauptstadt Portugals, an der Atlantikküste gelegen und bekannt für seine historischen Viertel.",
          nl: "Lissabon is de hoofdstad van Portugal, gelegen aan de Atlantische kust en bekend om zijn historische wijken."
        }
      },
      {
        question: {
          en: "What is the capital of Sweden?",
          es: "¿Cuál es la capital de Suecia?",
          de: "Was ist die Hauptstadt von Schweden?",
          nl: "Wat is de hoofdstad van Zweden?"
        },
        options: [
          { en: "Stockholm", es: "Estocolmo", de: "Stockholm", nl: "Stockholm" },
          { en: "Gothenburg", es: "Gotemburgo", de: "Göteborg", nl: "Göteborg" },
          { en: "Malmö", es: "Malmö", de: "Malmö", nl: "Malmö" },
          { en: "Uppsala", es: "Uppsala", de: "Uppsala", nl: "Uppsala" }
        ],
        correct: 0,
        explanation: {
          en: "Stockholm is the capital of Sweden, built on 14 islands and known as the 'Venice of the North'.",
          es: "Estocolmo es la capital de Suecia, construida sobre 14 islas y conocida como la 'Venecia del Norte'.",
          de: "Stockholm ist die Hauptstadt Schwedens, auf 14 Inseln erbaut und als 'Venedig des Nordens' bekannt.",
          nl: "Stockholm is de hoofdstad van Zweden, gebouwd op 14 eilanden en bekend als het 'Venetië van het Noorden'."
        }
      },
      {
        question: {
          en: "What is the capital of Norway?",
          es: "¿Cuál es la capital de Noruega?",
          de: "Was ist die Hauptstadt von Norwegen?",
          nl: "Wat is de hoofdstad van Noorwegen?"
        },
        options: [
          { en: "Oslo", es: "Oslo", de: "Oslo", nl: "Oslo" },
          { en: "Bergen", es: "Bergen", de: "Bergen", nl: "Bergen" },
          { en: "Trondheim", es: "Trondheim", de: "Trondheim", nl: "Trondheim" },
          { en: "Stavanger", es: "Stavanger", de: "Stavanger", nl: "Stavanger" }
        ],
        correct: 0,
        explanation: {
          en: "Oslo is the capital of Norway, located at the head of the Oslofjord and surrounded by forests and hills.",
          es: "Oslo es la capital de Noruega, ubicada en la cabecera del fiordo de Oslo y rodeada de bosques y colinas.",
          de: "Oslo ist die Hauptstadt Norwegens, am Kopf des Oslofjords gelegen und von Wäldern und Hügeln umgeben.",
          nl: "Oslo is de hoofdstad van Noorwegen, gelegen aan het hoofd van het Oslofjord en omgeven door bossen en heuvels."
        }
      },
      {
        question: {
          en: "What is the capital of Denmark?",
          es: "¿Cuál es la capital de Dinamarca?",
          de: "Was ist die Hauptstadt von Dänemark?",
          nl: "Wat is de hoofdstad van Denemarken?"
        },
        options: [
          { en: "Copenhagen", es: "Copenhague", de: "Kopenhagen", nl: "Kopenhagen" },
          { en: "Aarhus", es: "Aarhus", de: "Aarhus", nl: "Aarhus" },
          { en: "Odense", es: "Odense", de: "Odense", nl: "Odense" },
          { en: "Aalborg", es: "Aalborg", de: "Aalborg", nl: "Aalborg" }
        ],
        correct: 0,
        explanation: {
          en: "Copenhagen is the capital of Denmark, known for its colorful harbor district and rich Viking history.",
          es: "Copenhague es la capital de Dinamarca, conocida por su colorido distrito portuario y rica historia vikinga.",
          de: "Kopenhagen ist die Hauptstadt Dänemarks, bekannt für sein farbenfrohen Hafenviertel und seine reiche Wikingergeschichte.",
          nl: "Kopenhagen is de hoofdstad van Denemarken, bekend om zijn kleurrijke havenwijk en rijke Viking-geschiedenis."
        }
      },
      {
        question: {
          en: "What is the capital of Finland?",
          es: "¿Cuál es la capital de Finlandia?",
          de: "Was ist die Hauptstadt von Finnland?",
          nl: "Wat is de hoofdstad van Finland?"
        },
        options: [
          { en: "Helsinki", es: "Helsinki", de: "Helsinki", nl: "Helsinki" },
          { en: "Tampere", es: "Tampere", de: "Tampere", nl: "Tampere" },
          { en: "Turku", es: "Turku", de: "Turku", nl: "Turku" },
          { en: "Oulu", es: "Oulu", de: "Oulu", nl: "Oulu" }
        ],
        correct: 0,
        explanation: {
          en: "Helsinki is the capital of Finland, located on the Baltic Sea and known for its modern architecture and design.",
          es: "Helsinki es la capital de Finlandia, ubicada en el Mar Báltico y conocida por su arquitectura moderna y diseño.",
          de: "Helsinki ist die Hauptstadt Finnlands, an der Ostsee gelegen und bekannt für seine moderne Architektur und Design.",
          nl: "Helsinki is de hoofdstad van Finland, gelegen aan de Oostzee en bekend om zijn moderne architectuur en design."
        }
      },
      {
        question: {
          en: "What is the capital of Poland?",
          es: "¿Cuál es la capital de Polonia?",
          de: "Was ist die Hauptstadt von Polen?",
          nl: "Wat is de hoofdstad van Polen?"
        },
        options: [
          { en: "Warsaw", es: "Varsovia", de: "Warschau", nl: "Warschau" },
          { en: "Krakow", es: "Cracovia", de: "Krakau", nl: "Krakau" },
          { en: "Gdansk", es: "Gdansk", de: "Danzig", nl: "Gdansk" },
          { en: "Wroclaw", es: "Breslavia", de: "Breslau", nl: "Wroclaw" }
        ],
        correct: 0,
        explanation: {
          en: "Warsaw is the capital of Poland, rebuilt after World War II and now a major cultural and economic center.",
          es: "Varsovia es la capital de Polonia, reconstruida después de la Segunda Guerra Mundial y ahora un importante centro cultural y económico.",
          de: "Warschau ist die Hauptstadt Polens, nach dem Zweiten Weltkrieg wiederaufgebaut und heute ein wichtiges kulturelles und wirtschaftliches Zentrum.",
          nl: "Warschau is de hoofdstad van Polen, herbouwd na de Tweede Wereldoorlog en nu een belangrijk cultureel en economisch centrum."
        }
      },
      {
        question: {
          en: "What is the capital of South Korea?",
          es: "¿Cuál es la capital de Corea del Sur?",
          de: "Was ist die Hauptstadt von Südkorea?",
          nl: "Wat is de hoofdstad van Zuid-Korea?"
        },
        options: [
          { en: "Seoul", es: "Seúl", de: "Seoul", nl: "Seoul" },
          { en: "Busan", es: "Busan", de: "Busan", nl: "Busan" },
          { en: "Incheon", es: "Incheon", de: "Incheon", nl: "Incheon" },
          { en: "Daegu", es: "Daegu", de: "Daegu", nl: "Daegu" }
        ],
        correct: 0,
        explanation: {
          en: "Seoul is the capital of South Korea, a modern metropolis with a rich cultural heritage and advanced technology.",
          es: "Seúl es la capital de Corea del Sur, una metrópolis moderna con un rico patrimonio cultural y tecnología avanzada.",
          de: "Seoul ist die Hauptstadt Südkoreas, eine moderne Metropole mit reichem kulturellen Erbe und fortschrittlicher Technologie.",
          nl: "Seoul is de hoofdstad van Zuid-Korea, een moderne metropool met een rijk cultureel erfgoed en geavanceerde technologie."
        }
      },
      {
        question: {
          en: "What is the capital of Thailand?",
          es: "¿Cuál es la capital de Tailandia?",
          de: "Was ist die Hauptstadt von Thailand?",
          nl: "Wat is de hoofdstad van Thailand?"
        },
        options: [
          { en: "Bangkok", es: "Bangkok", de: "Bangkok", nl: "Bangkok" },
          { en: "Chiang Mai", es: "Chiang Mai", de: "Chiang Mai", nl: "Chiang Mai" },
          { en: "Phuket", es: "Phuket", de: "Phuket", nl: "Phuket" },
          { en: "Pattaya", es: "Pattaya", de: "Pattaya", nl: "Pattaya" }
        ],
        correct: 0,
        explanation: {
          en: "Bangkok is the capital of Thailand, known for its vibrant street life, ornate temples, and bustling markets.",
          es: "Bangkok es la capital de Tailandia, conocida por su vibrante vida callejera, templos ornamentados y mercados bulliciosos.",
          de: "Bangkok ist die Hauptstadt Thailands, bekannt für sein lebendiges Straßenleben, kunstvollen Tempel und geschäftigen Märkte.",
          nl: "Bangkok is de hoofdstad van Thailand, bekend om zijn levendige straatleven, sierlijke tempels en bruisende markten."
        }
      },
      {
        question: {
          en: "What is the capital of Indonesia?",
          es: "¿Cuál es la capital de Indonesia?",
          de: "Was ist die Hauptstadt von Indonesien?",
          nl: "Wat is de hoofdstad van Indonesië?"
        },
        options: [
          { en: "Jakarta", es: "Yakarta", de: "Jakarta", nl: "Jakarta" },
          { en: "Surabaya", es: "Surabaya", de: "Surabaya", nl: "Surabaya" },
          { en: "Bandung", es: "Bandung", de: "Bandung", nl: "Bandung" },
          { en: "Medan", es: "Medan", de: "Medan", nl: "Medan" }
        ],
        correct: 0,
        explanation: {
          en: "Jakarta is the capital of Indonesia, the largest archipelagic country in the world with over 17,000 islands.",
          es: "Yakarta es la capital de Indonesia, el país archipelágico más grande del mundo con más de 17,000 islas.",
          de: "Jakarta ist die Hauptstadt Indonesiens, des größten Inselstaates der Welt mit über 17.000 Inseln.",
          nl: "Jakarta is de hoofdstad van Indonesië, het grootste eilandland ter wereld met meer dan 17.000 eilanden."
        }
      },
      {
        question: {
          en: "What is the capital of Chile?",
          es: "¿Cuál es la capital de Chile?",
          de: "Was ist die Hauptstadt von Chile?",
          nl: "Wat is de hoofdstad van Chili?"
        },
        options: [
          { en: "Santiago", es: "Santiago", de: "Santiago", nl: "Santiago" },
          { en: "Valparaíso", es: "Valparaíso", de: "Valparaíso", nl: "Valparaíso" },
          { en: "Concepción", es: "Concepción", de: "Concepción", nl: "Concepción" },
          { en: "La Serena", es: "La Serena", de: "La Serena", nl: "La Serena" }
        ],
        correct: 0,
        explanation: {
          en: "Santiago is the capital of Chile, located in a valley surrounded by the snow-capped Andes mountains.",
          es: "Santiago es la capital de Chile, ubicada en un valle rodeado por las montañas nevadas de los Andes.",
          de: "Santiago ist die Hauptstadt Chiles, gelegen in einem Tal, umgeben von den schneebedeckten Anden.",
          nl: "Santiago is de hoofdstad van Chili, gelegen in een vallei omringd door de sneeuwbedekte Andes-bergen."
        }
      },
      {
        question: {
          en: "What is the capital of Peru?",
          es: "¿Cuál es la capital de Perú?",
          de: "Was ist die Hauptstadt von Peru?",
          nl: "Wat is de hoofdstad van Peru?"
        },
        options: [
          { en: "Lima", es: "Lima", de: "Lima", nl: "Lima" },
          { en: "Cusco", es: "Cusco", de: "Cusco", nl: "Cusco" },
          { en: "Arequipa", es: "Arequipa", de: "Arequipa", nl: "Arequipa" },
          { en: "Trujillo", es: "Trujillo", de: "Trujillo", nl: "Trujillo" }
        ],
        correct: 0,
        explanation: {
          en: "Lima is the capital of Peru, founded by Spanish conquistador Francisco Pizarro in 1535.",
          es: "Lima es la capital de Perú, fundada por el conquistador español Francisco Pizarro en 1535.",
          de: "Lima ist die Hauptstadt Perus, gegründet vom spanischen Eroberer Francisco Pizarro im Jahr 1535.",
          nl: "Lima is de hoofdstad van Peru, gesticht door de Spaanse conquistador Francisco Pizarro in 1535."
        }
      },
      {
        question: {
          en: "What is the capital of Colombia?",
          es: "¿Cuál es la capital de Colombia?",
          de: "Was ist die Hauptstadt von Kolumbien?",
          nl: "Wat is de hoofdstad van Colombia?"
        },
        options: [
          { en: "Bogotá", es: "Bogotá", de: "Bogotá", nl: "Bogotá" },
          { en: "Medellín", es: "Medellín", de: "Medellín", nl: "Medellín" },
          { en: "Cali", es: "Cali", de: "Cali", nl: "Cali" },
          { en: "Barranquilla", es: "Barranquilla", de: "Barranquilla", nl: "Barranquilla" }
        ],
        correct: 0,
        explanation: {
          en: "Bogotá is the capital of Colombia, located high in the Andes mountains at over 2,600 meters above sea level.",
          es: "Bogotá es la capital de Colombia, ubicada en lo alto de las montañas de los Andes a más de 2,600 metros sobre el nivel del mar.",
          de: "Bogotá ist die Hauptstadt Kolumbiens, hoch in den Anden auf über 2.600 Metern über dem Meeresspiegel gelegen.",
          nl: "Bogotá is de hoofdstad van Colombia, gelegen hoog in de Andes-bergen op meer dan 2.600 meter boven zeeniveau."
        }
      },
      {
        question: {
          en: "What is the capital of Venezuela?",
          es: "¿Cuál es la capital de Venezuela?",
          de: "Was ist die Hauptstadt von Venezuela?",
          nl: "Wat is de hoofdstad van Venezuela?"
        },
        options: [
          { en: "Caracas", es: "Caracas", de: "Caracas", nl: "Caracas" },
          { en: "Maracaibo", es: "Maracaibo", de: "Maracaibo", nl: "Maracaibo" },
          { en: "Valencia", es: "Valencia", de: "Valencia", nl: "Valencia" },
          { en: "Barquisimeto", es: "Barquisimeto", de: "Barquisimeto", nl: "Barquisimeto" }
        ],
        correct: 0,
        explanation: {
          en: "Caracas is the capital of Venezuela, located in a valley in the northern part of the country.",
          es: "Caracas es la capital de Venezuela, ubicada en un valle en la parte norte del país.",
          de: "Caracas ist die Hauptstadt Venezuelas, gelegen in einem Tal im nördlichen Teil des Landes.",
          nl: "Caracas is de hoofdstad van Venezuela, gelegen in een vallei in het noordelijke deel van het land."
        }
      },
      {
        question: {
          en: "What is the capital of Nigeria?",
          es: "¿Cuál es la capital de Nigeria?",
          de: "Was ist die Hauptstadt von Nigeria?",
          nl: "Wat is de hoofdstad van Nigeria?"
        },
        options: [
          { en: "Abuja", es: "Abuja", de: "Abuja", nl: "Abuja" },
          { en: "Lagos", es: "Lagos", de: "Lagos", nl: "Lagos" },
          { en: "Kano", es: "Kano", de: "Kano", nl: "Kano" },
          { en: "Ibadan", es: "Ibadan", de: "Ibadan", nl: "Ibadan" }
        ],
        correct: 0,
        explanation: {
          en: "Abuja is the capital of Nigeria, a planned city built in the 1980s to replace Lagos as the capital.",
          es: "Abuja es la capital de Nigeria, una ciudad planificada construida en los años 1980 para reemplazar a Lagos como capital.",
          de: "Abuja ist die Hauptstadt Nigerias, eine geplante Stadt, die in den 1980er Jahren erbaut wurde, um Lagos als Hauptstadt zu ersetzen.",
          nl: "Abuja is de hoofdstad van Nigeria, een geplande stad gebouwd in de jaren 1980 om Lagos te vervangen als hoofdstad."
        }
      },
      {
        question: {
          en: "What is the capital of Kenya?",
          es: "¿Cuál es la capital de Kenia?",
          de: "Was ist die Hauptstadt von Kenia?",
          nl: "Wat is de hoofdstad van Kenia?"
        },
        options: [
          { en: "Nairobi", es: "Nairobi", de: "Nairobi", nl: "Nairobi" },
          { en: "Mombasa", es: "Mombasa", de: "Mombasa", nl: "Mombasa" },
          { en: "Kisumu", es: "Kisumu", de: "Kisumu", nl: "Kisumu" },
          { en: "Nakuru", es: "Nakuru", de: "Nakuru", nl: "Nakuru" }
        ],
        correct: 0,
        explanation: {
          en: "Nairobi is the capital of Kenya, known as the 'Green City in the Sun' and gateway to East African safari destinations.",
          es: "Nairobi es la capital de Kenia, conocida como la 'Ciudad Verde bajo el Sol' y puerta de entrada a los destinos de safari de África Oriental.",
          de: "Nairobi ist die Hauptstadt Kenias, bekannt als die 'Grüne Stadt in der Sonne' und Tor zu den Safari-Zielen Ostafrikas.",
          nl: "Nairobi is de hoofdstad van Kenia, bekend als de 'Groene Stad in de Zon' en toegangspoort tot Oost-Afrikaanse safari-bestemmingen."
        }
      },
      {
        question: {
          en: "What is the capital of Morocco?",
          es: "¿Cuál es la capital de Marruecos?",
          de: "Was ist die Hauptstadt von Marokko?",
          nl: "Wat is de hoofdstad van Marokko?"
        },
        options: [
          { en: "Rabat", es: "Rabat", de: "Rabat", nl: "Rabat" },
          { en: "Casablanca", es: "Casablanca", de: "Casablanca", nl: "Casablanca" },
          { en: "Marrakech", es: "Marrakech", de: "Marrakesch", nl: "Marrakech" },
          { en: "Fez", es: "Fez", de: "Fès", nl: "Fez" }
        ],
        correct: 0,
        explanation: {
          en: "Rabat is the capital of Morocco, located on the Atlantic coast and known for its historic medina.",
          es: "Rabat es la capital de Marruecos, ubicada en la costa atlántica y conocida por su medina histórica.",
          de: "Rabat ist die Hauptstadt Marokkos, an der Atlantikküste gelegen und bekannt für seine historische Medina.",
          nl: "Rabat is de hoofdstad van Marokko, gelegen aan de Atlantische kust en bekend om zijn historische medina."
        }
      },
      {
        question: {
          en: "What is the capital of Israel?",
          es: "¿Cuál es la capital de Israel?",
          de: "Was ist die Hauptstadt von Israel?",
          nl: "Wat is de hoofdstad van Israël?"
        },
        options: [
          { en: "Jerusalem", es: "Jerusalén", de: "Jerusalem", nl: "Jeruzalem" },
          { en: "Tel Aviv", es: "Tel Aviv", de: "Tel Aviv", nl: "Tel Aviv" },
          { en: "Haifa", es: "Haifa", de: "Haifa", nl: "Haifa" },
          { en: "Eilat", es: "Eilat", de: "Eilat", nl: "Eilat" }
        ],
        correct: 0,
        explanation: {
          en: "Jerusalem is the capital of Israel, a holy city for Judaism, Christianity, and Islam with over 3,000 years of history.",
          es: "Jerusalén es la capital de Israel, una ciudad sagrada para el judaísmo, cristianismo e islam con más de 3,000 años de historia.",
          de: "Jerusalem ist die Hauptstadt Israels, eine heilige Stadt für Judentum, Christentum und Islam mit über 3.000 Jahren Geschichte.",
          nl: "Jeruzalem is de hoofdstad van Israël, een heilige stad voor het jodendom, christendom en islam met meer dan 3.000 jaar geschiedenis."
        }
      },
      {
        question: {
          en: "What is the capital of New Zealand?",
          es: "¿Cuál es la capital de Nueva Zelanda?",
          de: "Was ist die Hauptstadt von Neuseeland?",
          nl: "Wat is de hoofdstad van Nieuw-Zeeland?"
        },
        options: [
          { en: "Wellington", es: "Wellington", de: "Wellington", nl: "Wellington" },
          { en: "Auckland", es: "Auckland", de: "Auckland", nl: "Auckland" },
          { en: "Christchurch", es: "Christchurch", de: "Christchurch", nl: "Christchurch" },
          { en: "Hamilton", es: "Hamilton", de: "Hamilton", nl: "Hamilton" }
        ],
        correct: 0,
        explanation: {
          en: "Wellington is the capital of New Zealand, located at the southern tip of the North Island and known for its windy weather.",
          es: "Wellington es la capital de Nueva Zelanda, ubicada en la punta sur de la Isla Norte y conocida por su clima ventoso.",
          de: "Wellington ist die Hauptstadt Neuseelands, an der Südspitze der Nordinsel gelegen und bekannt für sein windiges Wetter.",
          nl: "Wellington is de hoofdstad van Nieuw-Zeeland, gelegen aan de zuidpunt van het Noordereiland en bekend om zijn winderige weer."
        }
      },
      {
        question: {
          en: "What is the capital of Switzerland?",
          es: "¿Cuál es la capital de Suiza?",
          de: "Was ist die Hauptstadt der Schweiz?",
          nl: "Wat is de hoofdstad van Zwitserland?"
        },
        options: [
          { en: "Bern", es: "Berna", de: "Bern", nl: "Bern" },
          { en: "Zurich", es: "Zúrich", de: "Zürich", nl: "Zürich" },
          { en: "Geneva", es: "Ginebra", de: "Genf", nl: "Genève" },
          { en: "Basel", es: "Basilea", de: "Basel", nl: "Basel" }
        ],
        correct: 0,
        explanation: {
          en: "Bern is the capital of Switzerland, known for its well-preserved medieval old town and bear park.",
          es: "Berna es la capital de Suiza, conocida por su casco antiguo medieval bien conservado y parque de osos.",
          de: "Bern ist die Hauptstadt der Schweiz, bekannt für seine gut erhaltene mittelalterliche Altstadt und den Bärenpark.",
          nl: "Bern is de hoofdstad van Zwitserland, bekend om zijn goed bewaarde middeleeuwse oude stad en berenpark."
        }
      },
      {
        question: {
          en: "What is the capital of Austria?",
          es: "¿Cuál es la capital de Austria?",
          de: "Was ist die Hauptstadt von Österreich?",
          nl: "Wat is de hoofdstad van Oostenrijk?"
        },
        options: [
          { en: "Vienna", es: "Viena", de: "Wien", nl: "Wenen" },
          { en: "Salzburg", es: "Salzburgo", de: "Salzburg", nl: "Salzburg" },
          { en: "Graz", es: "Graz", de: "Graz", nl: "Graz" },
          { en: "Innsbruck", es: "Innsbruck", de: "Innsbruck", nl: "Innsbruck" }
        ],
        correct: 0,
        explanation: {
          en: "Vienna is the capital of Austria, famous for its imperial palaces, classical music heritage, and coffeehouse culture.",
          es: "Viena es la capital de Austria, famosa por sus palacios imperiales, patrimonio de música clásica y cultura de cafeterías.",
          de: "Wien ist die Hauptstadt Österreichs, berühmt für seine kaiserlichen Paläste, das klassische Musikerbe und die Kaffeehauskultur.",
          nl: "Wenen is de hoofdstad van Oostenrijk, beroemd om zijn keizerlijke paleizen, klassieke muziekerfgoed en koffiehuis-cultuur."
        }
      },
      {
        question: {
          en: "What is the capital of Belgium?",
          es: "¿Cuál es la capital de Bélgica?",
          de: "Was ist die Hauptstadt von Belgien?",
          nl: "Wat is de hoofdstad van België?"
        },
        options: [
          { en: "Brussels", es: "Bruselas", de: "Brüssel", nl: "Brussel" },
          { en: "Antwerp", es: "Amberes", de: "Antwerpen", nl: "Antwerpen" },
          { en: "Ghent", es: "Gante", de: "Gent", nl: "Gent" },
          { en: "Bruges", es: "Brujas", de: "Brügge", nl: "Brugge" }
        ],
        correct: 0,
        explanation: {
          en: "Brussels is the capital of Belgium and serves as the headquarters of the European Union and NATO.",
          es: "Bruselas es la capital de Bélgica y sirve como sede de la Unión Europea y la OTAN.",
          de: "Brüssel ist die Hauptstadt Belgiens und dient als Hauptquartier der Europäischen Union und der NATO.",
          nl: "Brussel is de hoofdstad van België en dient als hoofdkwartier van de Europese Unie en de NAVO."
        }
      },
      {
        question: {
          en: "What is the capital of Luxembourg?",
          es: "¿Cuál es la capital de Luxemburgo?",
          de: "Was ist die Hauptstadt von Luxemburg?",
          nl: "Wat is de hoofdstad van Luxemburg?"
        },
        options: [
          { en: "Luxembourg City", es: "Ciudad de Luxemburgo", de: "Luxemburg-Stadt", nl: "Luxemburg-Stad" },
          { en: "Esch-sur-Alzette", es: "Esch-sur-Alzette", de: "Esch-sur-Alzette", nl: "Esch-sur-Alzette" },
          { en: "Differdange", es: "Differdange", de: "Differdange", nl: "Differdange" },
          { en: "Dudelange", es: "Dudelange", de: "Dudelange", nl: "Dudelange" }
        ],
        correct: 0,
        explanation: {
          en: "Luxembourg City is the capital of Luxembourg, one of the smallest countries in Europe and a major financial center.",
          es: "Ciudad de Luxemburgo es la capital de Luxemburgo, uno de los países más pequeños de Europa y un importante centro financiero.",
          de: "Luxemburg-Stadt ist die Hauptstadt Luxemburgs, eines der kleinsten Länder Europas und ein wichtiges Finanzzentrum.",
          nl: "Luxemburg-Stad is de hoofdstad van Luxemburg, een van de kleinste landen van Europa en een belangrijk financieel centrum."
        }
      },
      {
        question: {
          en: "What is the capital of Ireland?",
          es: "¿Cuál es la capital de Irlanda?",
          de: "Was ist die Hauptstadt von Irland?",
          nl: "Wat is de hoofdstad van Ierland?"
        },
        options: [
          { en: "Dublin", es: "Dublín", de: "Dublin", nl: "Dublin" },
          { en: "Cork", es: "Cork", de: "Cork", nl: "Cork" },
          { en: "Limerick", es: "Limerick", de: "Limerick", nl: "Limerick" },
          { en: "Galway", es: "Galway", de: "Galway", nl: "Galway" }
        ],
        correct: 0,
        explanation: {
          en: "Dublin is the capital of Ireland, known for its literary heritage, friendly pubs, and Georgian architecture.",
          es: "Dublín es la capital de Irlanda, conocida por su patrimonio literario, pubs acogedores y arquitectura georgiana.",
          de: "Dublin ist die Hauptstadt Irlands, bekannt für sein literarisches Erbe, freundliche Pubs und georgianische Architektur.",
          nl: "Dublin is de hoofdstad van Ierland, bekend om zijn literaire erfgoed, gezellige pubs en Georgische architectuur."
        }
      },
      {
        question: {
          en: "What is the capital of Czech Republic?",
          es: "¿Cuál es la capital de la República Checa?",
          de: "Was ist die Hauptstadt der Tschechischen Republik?",
          nl: "Wat is de hoofdstad van Tsjechië?"
        },
        options: [
          { en: "Prague", es: "Praga", de: "Prag", nl: "Praag" },
          { en: "Brno", es: "Brno", de: "Brünn", nl: "Brno" },
          { en: "Ostrava", es: "Ostrava", de: "Ostrava", nl: "Ostrava" },
          { en: "Plzen", es: "Plzen", de: "Pilsen", nl: "Plzen" }
        ],
        correct: 0,
        explanation: {
          en: "Prague is the capital of the Czech Republic, known as the 'City of a Hundred Spires' for its stunning architecture.",
          es: "Praga es la capital de la República Checa, conocida como la 'Ciudad de las Cien Torres' por su impresionante arquitectura.",
          de: "Prag ist die Hauptstadt der Tschechischen Republik, bekannt als die 'Stadt der hundert Türme' für ihre beeindruckende Architektur.",
          nl: "Praag is de hoofdstad van Tsjechië, bekend als de 'Stad van Honderd Torens' vanwege zijn prachtige architectuur."
        }
      },
      {
        question: {
          en: "What is the capital of Poland?",
          es: "¿Cuál es la capital de Polonia?",
          de: "Was ist die Hauptstadt von Polen?",
          nl: "Wat is de hoofdstad van Polen?"
        },
        options: [
          { en: "Warsaw", es: "Varsovia", de: "Warschau", nl: "Warschau" },
          { en: "Krakow", es: "Cracovia", de: "Krakau", nl: "Krakau" },
          { en: "Gdansk", es: "Gdansk", de: "Danzig", nl: "Gdansk" },
          { en: "Wroclaw", es: "Wroclaw", de: "Breslau", nl: "Wrocław" }
        ],
        correct: 0,
        explanation: {
          en: "Warsaw is the capital and largest city of Poland, rebuilt after World War II and now a major cultural and economic center.",
          es: "Varsovia es la capital y ciudad más grande de Polonia, reconstruida después de la Segunda Guerra Mundial y ahora un importante centro cultural y económico.",
          de: "Warschau ist die Hauptstadt und größte Stadt Polens, nach dem Zweiten Weltkrieg wiederaufgebaut und heute ein wichtiges kulturelles und wirtschaftliches Zentrum.",
          nl: "Warschau is de hoofdstad en grootste stad van Polen, herbouwd na de Tweede Wereldoorlog en nu een belangrijk cultureel en economisch centrum."
        }
      },
      {
        question: {
          en: "What is the capital of Hungary?",
          es: "¿Cuál es la capital de Hungría?",
          de: "Was ist die Hauptstadt von Ungarn?",
          nl: "Wat is de hoofdstad van Hongarije?"
        },
        options: [
          { en: "Budapest", es: "Budapest", de: "Budapest", nl: "Boedapest" },
          { en: "Debrecen", es: "Debrecen", de: "Debrecen", nl: "Debrecen" },
          { en: "Szeged", es: "Szeged", de: "Szeged", nl: "Szeged" },
          { en: "Miskolc", es: "Miskolc", de: "Miskolc", nl: "Miskolc" }
        ],
        correct: 0,
        explanation: {
          en: "Budapest is the capital of Hungary, formed by uniting Buda and Pest across the Danube River. It's known for its thermal baths and stunning architecture.",
          es: "Budapest es la capital de Hungría, formada al unir Buda y Pest a través del río Danubio. Es conocida por sus baños termales y arquitectura impresionante.",
          de: "Budapest ist die Hauptstadt Ungarns, entstanden durch die Vereinigung von Buda und Pest über die Donau. Es ist bekannt für seine Thermalbäder und beeindruckende Architektur.",
          nl: "Boedapest is de hoofdstad van Hongarije, ontstaan door de vereniging van Buda en Pest over de Donau. Het staat bekend om zijn thermale baden en prachtige architectuur."
        }
      },
      {
        question: {
          en: "What is the capital of Romania?",
          es: "¿Cuál es la capital de Rumania?",
          de: "Was ist die Hauptstadt von Rumänien?",
          nl: "Wat is de hoofdstad van Roemenië?"
        },
        options: [
          { en: "Bucharest", es: "Bucarest", de: "Bukarest", nl: "Boekarest" },
          { en: "Cluj-Napoca", es: "Cluj-Napoca", de: "Klausenburg", nl: "Cluj-Napoca" },
          { en: "Timisoara", es: "Timisoara", de: "Temeswar", nl: "Timișoara" },
          { en: "Constanta", es: "Constanta", de: "Konstanza", nl: "Constanța" }
        ],
        correct: 0,
        explanation: {
          en: "Bucharest is the capital of Romania, known as 'Little Paris' for its elegant architecture and wide boulevards.",
          es: "Bucarest es la capital de Rumania, conocida como 'Pequeño París' por su arquitectura elegante y amplios bulevares.",
          de: "Bukarest ist die Hauptstadt Rumäniens, bekannt als 'Kleines Paris' für seine elegante Architektur und breiten Boulevards.",
          nl: "Boekarest is de hoofdstad van Roemenië, bekend als 'Klein Parijs' vanwege zijn elegante architectuur en brede boulevards."
        }
      },
      {
        question: {
          en: "What is the capital of Bulgaria?",
          es: "¿Cuál es la capital de Bulgaria?",
          de: "Was ist die Hauptstadt von Bulgarien?",
          nl: "Wat is de hoofdstad van Bulgarije?"
        },
        options: [
          { en: "Sofia", es: "Sofía", de: "Sofia", nl: "Sofia" },
          { en: "Plovdiv", es: "Plovdiv", de: "Plowdiw", nl: "Plovdiv" },
          { en: "Varna", es: "Varna", de: "Warna", nl: "Varna" },
          { en: "Burgas", es: "Burgas", de: "Burgas", nl: "Boergas" }
        ],
        correct: 0,
        explanation: {
          en: "Sofia is the capital of Bulgaria, one of the oldest cities in Europe with a history spanning over 2,400 years.",
          es: "Sofía es la capital de Bulgaria, una de las ciudades más antiguas de Europa con una historia que abarca más de 2,400 años.",
          de: "Sofia ist die Hauptstadt Bulgariens, eine der ältesten Städte Europas mit einer über 2.400-jährigen Geschichte.",
          nl: "Sofia is de hoofdstad van Bulgarije, een van de oudste steden in Europa met een geschiedenis van meer dan 2.400 jaar."
        }
      },
      {
        question: {
          en: "What is the capital of Croatia?",
          es: "¿Cuál es la capital de Croacia?",
          de: "Was ist die Hauptstadt von Kroatien?",
          nl: "Wat is de hoofdstad van Kroatië?"
        },
        options: [
          { en: "Zagreb", es: "Zagreb", de: "Zagreb", nl: "Zagreb" },
          { en: "Split", es: "Split", de: "Split", nl: "Split" },
          { en: "Rijeka", es: "Rijeka", de: "Rijeka", nl: "Rijeka" },
          { en: "Dubrovnik", es: "Dubrovnik", de: "Dubrovnik", nl: "Dubrovnik" }
        ],
        correct: 0,
        explanation: {
          en: "Zagreb is the capital of Croatia, known for its Austro-Hungarian architecture and vibrant cultural scene.",
          es: "Zagreb es la capital de Croacia, conocida por su arquitectura austro-húngara y vibrante escena cultural.",
          de: "Zagreb ist die Hauptstadt Kroatiens, bekannt für seine österreichisch-ungarische Architektur und lebendige Kulturszene.",
          nl: "Zagreb is de hoofdstad van Kroatië, bekend om zijn Oostenrijks-Hongaarse architectuur en levendige culturele scene."
        }
      },
      {
        question: {
          en: "What is the capital of Slovenia?",
          es: "¿Cuál es la capital de Eslovenia?",
          de: "Was ist die Hauptstadt von Slowenien?",
          nl: "Wat is de hoofdstad van Slovenië?"
        },
        options: [
          { en: "Ljubljana", es: "Liubliana", de: "Ljubljana", nl: "Ljubljana" },
          { en: "Maribor", es: "Maribor", de: "Marburg", nl: "Maribor" },
          { en: "Celje", es: "Celje", de: "Cilli", nl: "Celje" },
          { en: "Kranj", es: "Kranj", de: "Krainburg", nl: "Kranj" }
        ],
        correct: 0,
        explanation: {
          en: "Ljubljana is the capital of Slovenia, a charming city with a medieval castle overlooking the old town and the Ljubljanica River.",
          es: "Liubliana es la capital de Eslovenia, una ciudad encantadora con un castillo medieval que domina el casco antiguo y el río Ljubljanica.",
          de: "Ljubljana ist die Hauptstadt Sloweniens, eine charmante Stadt mit einer mittelalterlichen Burg, die die Altstadt und den Fluss Ljubljanica überblickt.",
          nl: "Ljubljana is de hoofdstad van Slovenië, een charmante stad met een middeleeuws kasteel dat uitkijkt over de oude stad en de rivier Ljubljanica."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/world-geography', level1);
  }
})();