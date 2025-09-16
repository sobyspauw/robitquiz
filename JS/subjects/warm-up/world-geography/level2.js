// World Geography - Level 2: Continents and Oceans
(function() {
  const level2 = {
    name: {
      en: "Continents and Oceans",
      es: "Continentes y Océanos",
      de: "Kontinente und Ozeane",
      nl: "Continenten en Oceanen"
    },
    questions: [
      {
        question: {
          en: "How many continents are there?",
          es: "¿Cuántos continentes hay?",
          de: "Wie viele Kontinente gibt es?",
          nl: "Hoeveel continenten zijn er?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 0,
        explanation: {
          en: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia/Oceania.",
          es: "Hay 7 continentes: Asia, África, América del Norte, América del Sur, Antártida, Europa y Australia/Oceanía.",
          de: "Es gibt 7 Kontinente: Asien, Afrika, Nordamerika, Südamerika, Antarktis, Europa und Australien/Ozeanien.",
          nl: "Er zijn 7 continenten: Azië, Afrika, Noord-Amerika, Zuid-Amerika, Antarctica, Europa en Australië/Oceanië."
        }
      },
      {
        question: {
          en: "Which is the largest continent?",
          es: "¿Cuál es el continente más grande?",
          de: "Welcher ist der größte Kontinent?",
          nl: "Welk is het grootste continent?"
        },
        options: [
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" }
        ],
        correct: 0,
        explanation: {
          en: "Asia is the largest continent, covering about 30% of Earth's land area and home to over 4.5 billion people.",
          es: "Asia es el continente más grande, cubriendo aproximadamente el 30% del área terrestre de la Tierra y hogar de más de 4.5 mil millones de personas.",
          de: "Asien ist der größte Kontinent und bedeckt etwa 30% der Landfläche der Erde mit über 4,5 Milliarden Einwohnern.",
          nl: "Azië is het grootste continent, dat ongeveer 30% van het landoppervlak van de aarde beslaat en de thuisbasis is van meer dan 4,5 miljard mensen."
        }
      },
      {
        question: {
          en: "Which is the smallest continent?",
          es: "¿Cuál es el continente más pequeño?",
          de: "Welcher ist der kleinste Kontinent?",
          nl: "Welk is het kleinste continent?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "Australia is the smallest continent, sometimes called Oceania, covering about 8.6 million square kilometers.",
          es: "Australia es el continente más pequeño, a veces llamado Oceanía, cubriendo aproximadamente 8.6 millones de kilómetros cuadrados.",
          de: "Australien ist der kleinste Kontinent, manchmal Ozeanien genannt, mit einer Fläche von etwa 8,6 Millionen Quadratkilometern.",
          nl: "Australië is het kleinste continent, soms Oceanië genoemd, dat ongeveer 8,6 miljoen vierkante kilometer beslaat."
        }
      },
      {
        question: {
          en: "Which ocean is the largest?",
          es: "¿Cuál es el océano más grande?",
          de: "Welcher Ozean ist der größte?",
          nl: "Welke oceaan is de grootste?"
        },
        options: [
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correct: 0,
        explanation: {
          en: "The Pacific Ocean is the largest ocean, covering about one-third of Earth's surface and containing more water than all other oceans combined.",
          es: "El Océano Pacífico es el océano más grande, cubriendo aproximadamente un tercio de la superficie de la Tierra y conteniendo más agua que todos los otros océanos combinados.",
          de: "Der Pazifische Ozean ist der größte Ozean, bedeckt etwa ein Drittel der Erdoberfläche und enthält mehr Wasser als alle anderen Ozeane zusammen.",
          nl: "De Grote Oceaan is de grootste oceaan, die ongeveer een derde van het aardoppervlak beslaat en meer water bevat dan alle andere oceanen samen."
        }
      },
      {
        question: {
          en: "How many oceans are there?",
          es: "¿Cuántos océanos hay?",
          de: "Wie viele Ozeane gibt es?",
          nl: "Hoeveel oceanen zijn er?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "3", es: "3", de: "3", nl: "3" }
        ],
        correct: 0,
        explanation: {
          en: "There are 5 oceans: Pacific, Atlantic, Indian, Arctic, and Southern (Antarctic) Ocean, recognized by most countries since 2000.",
          es: "Hay 5 océanos: Pacífico, Atlántico, Índico, Ártico y Austral (Antártico), reconocidos por la mayoría de países desde 2000.",
          de: "Es gibt 5 Ozeane: Pazifik, Atlantik, Indischer Ozean, Arktischer Ozean und Südlicher (Antarktischer) Ozean, seit 2000 von den meisten Ländern anerkannt.",
          nl: "Er zijn 5 oceanen: Grote Oceaan, Atlantische Oceaan, Indische Oceaan, Noordelijke IJszee en Zuidelijke (Antarctische) Oceaan, sinds 2000 erkend door de meeste landen."
        }
      },
      {
        question: {
          en: "Which continent has no permanent residents?",
          es: "¿Qué continente no tiene residentes permanentes?",
          de: "Welcher Kontinent hat keine dauerhaften Bewohner?",
          nl: "Welk continent heeft geen permanente bewoners?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" }
        ],
        correct: 0,
        explanation: {
          en: "Antarctica has no permanent residents, only research station staff who stay temporarily. The continent is too cold and harsh for permanent human settlement.",
          es: "La Antártida no tiene residentes permanentes, solo personal de estaciones de investigación que se queda temporalmente. El continente es demasiado frío y duro para el asentamiento humano permanente.",
          de: "Die Antarktis hat keine dauerhaften Bewohner, nur Forschungsstationspersonal, das sich vorübergehend aufhält. Der Kontinent ist zu kalt und hart für dauerhafte menschliche Besiedlung.",
          nl: "Antarctica heeft geen permanente bewoners, alleen onderzoeksstationpersoneel dat tijdelijk verblijft. Het continent is te koud en hard voor permanente menselijke bewoning."
        }
      },
      {
        question: {
          en: "Which continent is known as the 'Dark Continent'?",
          es: "¿Qué continente se conoce como el 'Continente Oscuro'?",
          de: "Welcher Kontinent ist als 'Dunkler Kontinent' bekannt?",
          nl: "Welk continent staat bekend als het 'Donkere Continent'?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correct: 0,
        explanation: {
          en: "Africa was historically called the 'Dark Continent' by European explorers because it was largely unexplored and unknown to them, not because of skin color.",
          es: "África fue históricamente llamada el 'Continente Oscuro' por exploradores europeos porque era en gran medida inexplorada y desconocida para ellos, no por el color de piel.",
          de: "Afrika wurde historisch von europäischen Entdeckern der 'Dunkle Kontinent' genannt, weil er für sie weitgehend unerforscht und unbekannt war, nicht wegen der Hautfarbe.",
          nl: "Afrika werd historisch het 'Donkere Continent' genoemd door Europese ontdekkingsreizigers omdat het grotendeels onontdekt en onbekend was voor hen, niet vanwege huidskleur."
        }
      },
      {
        question: {
          en: "Which ocean surrounds Antarctica?",
          es: "¿Qué océano rodea la Antártida?",
          de: "Welcher Ozean umgibt die Antarktis?",
          nl: "Welke oceaan omringt Antarctica?"
        },
        options: [
          { en: "Southern Ocean", es: "Océano Austral", de: "Südlicher Ozean", nl: "Zuidelijke Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Southern Ocean (also called Antarctic Ocean) completely surrounds Antarctica and connects the Pacific, Atlantic, and Indian Oceans.",
          es: "El Océano Austral (también llamado Océano Antártico) rodea completamente la Antártida y conecta los océanos Pacífico, Atlántico e Índico.",
          de: "Der Südliche Ozean (auch Antarktischer Ozean genannt) umgibt die Antarktis vollständig und verbindet Pazifik, Atlantik und Indischen Ozean.",
          nl: "De Zuidelijke Oceaan (ook wel Antarctische Oceaan genoemd) omringt Antarctica volledig en verbindt de Grote Oceaan, Atlantische Oceaan en Indische Oceaan."
        }
      },
      {
        question: {
          en: "Which continent has the most countries?",
          es: "¿Qué continente tiene más países?",
          de: "Welcher Kontinent hat die meisten Länder?",
          nl: "Welk continent heeft de meeste landen?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "Africa has 54 recognized countries, making it the continent with the most nations. Asia has 48 countries, Europe has 44, and the Americas have fewer.",
          es: "África tiene 54 países reconocidos, convirtiéndolo en el continente con más naciones. Asia tiene 48 países, Europa tiene 44, y las Américas tienen menos.",
          de: "Afrika hat 54 anerkannte Länder und ist damit der Kontinent mit den meisten Nationen. Asien hat 48 Länder, Europa hat 44, und die Amerikas haben weniger.",
          nl: "Afrika heeft 54 erkende landen, waardoor het het continent met de meeste naties is. Azië heeft 48 landen, Europa heeft 44, en de Amerika's hebben er minder."
        }
      },
      {
        question: {
          en: "The Sahara Desert is located in which continent?",
          es: "¿En qué continente se encuentra el Desierto del Sahara?",
          de: "Auf welchem Kontinent liegt die Sahara-Wüste?",
          nl: "Op welk continent ligt de Sahara-woestijn?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "The Sahara Desert is located in North Africa, spanning across multiple countries including Morocco, Algeria, Tunisia, Libya, Egypt, and others.",
          es: "El Desierto del Sahara está ubicado en el Norte de África, extendiéndose a través de múltiples países incluyendo Marruecos, Argelia, Túnez, Libia, Egipto y otros.",
          de: "Die Sahara-Wüste liegt in Nordafrika und erstreckt sich über mehrere Länder einschließlich Marokko, Algerien, Tunesien, Libyen, Ägypten und andere.",
          nl: "De Sahara-woestijn ligt in Noord-Afrika en strekt zich uit over meerdere landen waaronder Marokko, Algerije, Tunesië, Libië, Egypte en anderen."
        }
      },
      {
        question: {
          en: "Which ocean is between Europe and North America?",
          es: "¿Qué océano está entre Europa y América del Norte?",
          de: "Welcher Ozean liegt zwischen Europa und Nordamerika?",
          nl: "Welke oceaan ligt tussen Europa en Noord-Amerika?"
        },
        options: [
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correct: 0,
        explanation: {
          en: "The Atlantic Ocean lies between Europe and North America, separating continents like a massive water highway for ships and marine life.",
          es: "El Océano Atlántico se encuentra entre Europa y América del Norte, separando continentes como una carretera acuática masiva para barcos y vida marina.",
          de: "Der Atlantische Ozean liegt zwischen Europa und Nordamerika und trennt Kontinente wie eine riesige Wasserstraße für Schiffe und Meereslebewesen.",
          nl: "De Atlantische Oceaan ligt tussen Europa en Noord-Amerika en scheidt continenten als een massale waterweg voor schepen en zeeleven."
        }
      },
      {
        question: {
          en: "Which continent is home to the Amazon rainforest?",
          es: "¿Qué continente alberga la selva amazónica?",
          de: "Welcher Kontinent beherbergt den Amazonas-Regenwald?",
          nl: "Welk continent herbergt het Amazone regenwoud?"
        },
        options: [
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "South America contains the Amazon rainforest, the world's largest tropical rainforest, covering much of the Amazon Basin in Brazil and neighboring countries.",
          es: "América del Sur contiene la selva amazónica, la selva tropical más grande del mundo, cubriendo gran parte de la Cuenca del Amazonas en Brasil y países vecinos.",
          de: "Südamerika enthält den Amazonas-Regenwald, den größten tropischen Regenwald der Welt, der einen Großteil des Amazonasbeckens in Brasilien und Nachbarländern bedeckt.",
          nl: "Zuid-Amerika bevat het Amazone regenwoud, 's werelds grootste tropische regenwoud, dat een groot deel van het Amazonebekken in Brazilië en buurlanden bedekt."
        }
      },
      {
        question: {
          en: "The Great Barrier Reef is located near which continent?",
          es: "¿Cerca de qué continente se encuentra la Gran Barrera de Coral?",
          de: "In der Nähe welches Kontinents liegt das Great Barrier Reef?",
          nl: "Bij welk continent ligt het Great Barrier Reef?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Barrier Reef is located off the coast of Australia in the Coral Sea, making it the world's largest coral reef system.",
          es: "La Gran Barrera de Coral está ubicada frente a la costa de Australia en el Mar del Coral, convirtiéndola en el sistema de arrecifes de coral más grande del mundo.",
          de: "Das Great Barrier Reef liegt vor der Küste Australiens in der Korallensee und ist das größte Korallenriffsystem der Welt.",
          nl: "Het Great Barrier Reef ligt voor de kust van Australië in de Koraalzee, waardoor het het grootste koraalrifsysteem ter wereld is."
        }
      },
      {
        question: {
          en: "Which ocean is the coldest?",
          es: "¿Cuál es el océano más frío?",
          de: "Welcher Ozean ist der kälteste?",
          nl: "Welke oceaan is de koudste?"
        },
        options: [
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Arctic Ocean is the coldest ocean, located around the North Pole and mostly covered by sea ice throughout the year.",
          es: "El Océano Ártico es el océano más frío, ubicado alrededor del Polo Norte y mayormente cubierto por hielo marino durante todo el año.",
          de: "Der Arktische Ozean ist der kälteste Ozean, liegt um den Nordpol und ist größtenteils das ganze Jahr über von Meereis bedeckt.",
          nl: "De Noordelijke IJszee is de koudste oceaan, gelegen rond de Noordpool en grotendeels bedekt met zee-ijs het hele jaar door."
        }
      },
      {
        question: {
          en: "Which continent contains the Gobi Desert?",
          es: "¿Qué continente contiene el Desierto de Gobi?",
          de: "Welcher Kontinent enthält die Gobi-Wüste?",
          nl: "Welk continent bevat de Gobi-woestijn?"
        },
        options: [
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "Asia contains the Gobi Desert, a large desert spanning northern China and southern Mongolia, known for its extreme temperatures and fossils.",
          es: "Asia contiene el Desierto de Gobi, un gran desierto que se extiende por el norte de China y el sur de Mongolia, conocido por sus temperaturas extremas y fósiles.",
          de: "Asien enthält die Gobi-Wüste, eine große Wüste, die sich über Nordchina und die südliche Mongolei erstreckt und für ihre extremen Temperaturen und Fossilien bekannt ist.",
          nl: "Azië bevat de Gobi-woestijn, een grote woestijn die zich uitstrekt over Noord-China en Zuid-Mongolië, bekend om zijn extreme temperaturen en fossielen."
        }
      },
      {
        question: {
          en: "The Panama Canal connects which two oceans?",
          es: "¿Qué dos océanos conecta el Canal de Panamá?",
          de: "Welche zwei Ozeane verbindet der Panamakanal?",
          nl: "Welke twee oceanen verbindt het Panamakanaal?"
        },
        options: [
          { en: "Pacific and Atlantic", es: "Pacífico y Atlántico", de: "Pazifik und Atlantik", nl: "Grote Oceaan en Atlantische Oceaan" },
          { en: "Atlantic and Indian", es: "Atlántico e Índico", de: "Atlantik und Indischer Ozean", nl: "Atlantische en Indische Oceaan" },
          { en: "Pacific and Indian", es: "Pacífico e Índico", de: "Pazifik und Indischer Ozean", nl: "Grote Oceaan en Indische Oceaan" },
          { en: "Arctic and Atlantic", es: "Ártico y Atlántico", de: "Arktis und Atlantik", nl: "Noordelijke IJszee en Atlantische Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Panama Canal connects the Pacific and Atlantic Oceans, allowing ships to travel between them without going around South America.",
          es: "El Canal de Panamá conecta los océanos Pacífico y Atlántico, permitiendo que los barcos viajen entre ellos sin rodear América del Sur.",
          de: "Der Panamakanal verbindet den Pazifik und den Atlantik und ermöglicht Schiffen, zwischen ihnen zu reisen, ohne Südamerika zu umrunden.",
          nl: "Het Panamakanaal verbindt de Grote Oceaan en de Atlantische Oceaan, waardoor schepen tussen hen kunnen reizen zonder Zuid-Amerika te omzeilen."
        }
      },
      {
        question: {
          en: "Which continent is sometimes called Oceania?",
          es: "¿Qué continente a veces se llama Oceanía?",
          de: "Welcher Kontinent wird manchmal Ozeanien genannt?",
          nl: "Welk continent wordt soms Oceanië genoemd?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" }
        ],
        correct: 0,
        explanation: {
          en: "Australia is sometimes called Oceania because it includes Australia and the Pacific islands, forming a geographical region in the Pacific Ocean.",
          es: "Australia a veces se llama Oceanía porque incluye Australia y las islas del Pacífico, formando una región geográfica en el Océano Pacífico.",
          de: "Australien wird manchmal Ozeanien genannt, weil es Australien und die Pazifikinseln umfasst und eine geografische Region im Pazifischen Ozean bildet.",
          nl: "Australië wordt soms Oceanië genoemd omdat het Australië en de Pacifische eilanden omvat, en een geografische regio in de Grote Oceaan vormt."
        }
      },
      {
        question: {
          en: "Which sea separates Europe and Africa?",
          es: "¿Qué mar separa Europa y África?",
          de: "Welches Meer trennt Europa und Afrika?",
          nl: "Welke zee scheidt Europa en Afrika?"
        },
        options: [
          { en: "Mediterranean Sea", es: "Mar Mediterráneo", de: "Mittelmeer", nl: "Middellandse Zee" },
          { en: "Red Sea", es: "Mar Rojo", de: "Rotes Meer", nl: "Rode Zee" },
          { en: "Black Sea", es: "Mar Negro", de: "Schwarzes Meer", nl: "Zwarte Zee" },
          { en: "Baltic Sea", es: "Mar Báltico", de: "Ostsee", nl: "Oostzee" }
        ],
        correct: 0,
        explanation: {
          en: "The Mediterranean Sea separates Europe and Africa, connecting the Atlantic Ocean and serving as a crucial waterway for trade and culture.",
          es: "El Mar Mediterráneo separa Europa y África, conectando el Océano Atlántico y sirviendo como una vía acuática crucial para el comercio y la cultura.",
          de: "Das Mittelmeer trennt Europa und Afrika, verbindet den Atlantischen Ozean und dient als wichtige Wasserstraße für Handel und Kultur.",
          nl: "De Middellandse Zee scheidt Europa en Afrika, verbindt de Atlantische Oceaan en dient als een cruciale waterweg voor handel en cultuur."
        }
      },
      {
        question: {
          en: "The Bering Strait separates which two continents?",
          es: "¿Qué dos continentes separa el Estrecho de Bering?",
          de: "Welche zwei Kontinente trennt die Beringstraße?",
          nl: "Welke twee continenten scheidt de Beringstraat?"
        },
        options: [
          { en: "Asia and North America", es: "Asia y América del Norte", de: "Asien und Nordamerika", nl: "Azië en Noord-Amerika" },
          { en: "Europe and Asia", es: "Europa y Asia", de: "Europa und Asien", nl: "Europa en Azië" },
          { en: "Africa and Europe", es: "África y Europa", de: "Afrika und Europa", nl: "Afrika en Europa" },
          { en: "North and South America", es: "América del Norte y del Sur", de: "Nord- und Südamerika", nl: "Noord- en Zuid-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "The Bering Strait separates Asia and North America, with only about 55 miles between Russia and Alaska at its narrowest point.",
          es: "El Estrecho de Bering separa Asia y América del Norte, con solo aproximadamente 55 millas entre Rusia y Alaska en su punto más estrecho.",
          de: "Die Beringstraße trennt Asien und Nordamerika, mit nur etwa 55 Meilen zwischen Russland und Alaska an der schmalsten Stelle.",
          nl: "De Beringstraat scheidt Azië en Noord-Amerika, met slechts ongeveer 55 mijl tussen Rusland en Alaska op het smalste punt."
        }
      },
      {
        question: {
          en: "Which continent has the highest average elevation?",
          es: "¿Qué continente tiene la elevación promedio más alta?",
          de: "Welcher Kontinent hat die höchste durchschnittliche Erhebung?",
          nl: "Welk continent heeft de hoogste gemiddelde hoogte?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "Antarctica has the highest average elevation of any continent, with an average height of about 2,300 meters due to its thick ice sheet.",
          es: "La Antártida tiene la elevación promedio más alta de cualquier continente, con una altura promedio de aproximadamente 2,300 metros debido a su gruesa capa de hielo.",
          de: "Die Antarktis hat die höchste durchschnittliche Erhebung aller Kontinente, mit einer durchschnittlichen Höhe von etwa 2.300 Metern aufgrund ihrer dicken Eisschicht.",
          nl: "Antarctica heeft de hoogste gemiddelde hoogte van alle continenten, met een gemiddelde hoogte van ongeveer 2.300 meter vanwege zijn dikke ijslaag."
        }
      },
      {
        question: {
          en: "The Ring of Fire is mostly around which ocean?",
          es: "¿El Anillo de Fuego está principalmente alrededor de qué océano?",
          de: "Der Feuerring liegt hauptsächlich um welchen Ozean?",
          nl: "De Ring van Vuur ligt voornamelijk rond welke oceaan?"
        },
        options: [
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correct: 0,
        explanation: {
          en: "The Ring of Fire is mostly around the Pacific Ocean, containing about 75% of the world's active volcanoes and earthquake zones.",
          es: "El Anillo de Fuego está principalmente alrededor del Océano Pacífico, conteniendo aproximadamente el 75% de los volcanes activos y zonas sísmicas del mundo.",
          de: "Der Feuerring liegt hauptsächlich um den Pazifischen Ozean und enthält etwa 75% der aktiven Vulkane und Erdbebenzonen der Welt.",
          nl: "De Ring van Vuur ligt voornamelijk rond de Grote Oceaan en bevat ongeveer 75% van 's werelds actieve vulkanen en aardbevingszones."
        }
      },
      {
        question: {
          en: "Which continent contains the Andes Mountains?",
          es: "¿Qué continente contiene las Montañas de los Andes?",
          de: "Welcher Kontinent enthält die Anden?",
          nl: "Welk continent bevat het Andesgebergte?"
        },
        options: [
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" }
        ],
        correct: 0,
        explanation: {
          en: "South America contains the Andes Mountains, the world's longest mountain range, stretching over 7,000 kilometers along the western coast.",
          es: "América del Sur contiene las Montañas de los Andes, la cordillera más larga del mundo, extendiéndose más de 7,000 kilómetros a lo largo de la costa occidental.",
          de: "Südamerika enthält die Anden, die längste Bergkette der Welt, die sich über 7.000 Kilometer entlang der Westküste erstreckt.",
          nl: "Zuid-Amerika bevat het Andesgebergte, de langste bergketen ter wereld, die zich meer dan 7.000 kilometer uitstrekt langs de westkust."
        }
      },
      {
        question: {
          en: "The Strait of Gibraltar separates which continent from Africa?",
          es: "¿El Estrecho de Gibraltar separa qué continente de África?",
          de: "Die Straße von Gibraltar trennt welchen Kontinent von Afrika?",
          nl: "De Straat van Gibraltar scheidt welk continent van Afrika?"
        },
        options: [
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "The Strait of Gibraltar separates Europe from Africa, with only about 14 kilometers between Spain and Morocco at its narrowest point.",
          es: "El Estrecho de Gibraltar separa Europa de África, con solo aproximadamente 14 kilómetros entre España y Marruecos en su punto más estrecho.",
          de: "Die Straße von Gibraltar trennt Europa von Afrika, mit nur etwa 14 Kilometern zwischen Spanien und Marokko an der schmalsten Stelle.",
          nl: "De Straat van Gibraltar scheidt Europa van Afrika, met slechts ongeveer 14 kilometer tussen Spanje en Marokko op het smalste punt."
        }
      },
      {
        question: {
          en: "Which continent has the Great Plains?",
          es: "¿Qué continente tiene las Grandes Llanuras?",
          de: "Welcher Kontinent hat die Great Plains?",
          nl: "Welk continent heeft de Great Plains?"
        },
        options: [
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" }
        ],
        correct: 0,
        explanation: {
          en: "North America has the Great Plains, a vast grassland region extending from Canada to Texas, known for agriculture and farming.",
          es: "América del Norte tiene las Grandes Llanuras, una vasta región de pastizales que se extiende desde Canadá hasta Texas, conocida por la agricultura y ganadéria.",
          de: "Nordamerika hat die Great Plains, eine riesige Graslandregion, die sich von Kanada bis Texas erstreckt und für Landwirtschaft und Viehzucht bekannt ist.",
          nl: "Noord-Amerika heeft de Great Plains, een uitgestrekte graslandregio die zich uitstrekt van Canada tot Texas, bekend om landbouw en veeteelt."
        }
      },
      {
        question: {
          en: "The Mariana Trench is in which ocean?",
          es: "¿En qué océano está la Fosa de las Marianas?",
          de: "In welchem Ozean liegt der Marianengraben?",
          nl: "In welke oceaan ligt de Marianentrog?"
        },
        options: [
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correct: 0,
        explanation: {
          en: "The Mariana Trench is in the Pacific Ocean, containing the deepest point on Earth at Challenger Deep, over 11,000 meters below sea level.",
          es: "La Fosa de las Marianas está en el Océano Pacífico, conteniendo el punto más profundo de la Tierra en el Abismo Challenger, más de 11,000 metros bajo el nivel del mar.",
          de: "Der Marianengraben liegt im Pazifischen Ozean und enthält den tiefsten Punkt der Erde im Challengertief, über 11.000 Meter unter dem Meeresspiegel.",
          nl: "De Marianentrog ligt in de Grote Oceaan en bevat het diepste punt op aarde bij Challenger Deep, meer dan 11.000 meter onder zeeniveau."
        }
      },
      {
        question: {
          en: "Which continent is known as the birthplace of humanity?",
          es: "¿Qué continente es conocido como la cuna de la humanidad?",
          de: "Welcher Kontinent ist als Wiege der Menschheit bekannt?",
          nl: "Welk continent staat bekend als de bakermat van de mensheid?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "Africa is known as the birthplace of humanity because the earliest human fossils and evidence of human evolution have been found there.",
          es: "África es conocida como la cuna de la humanidad porque los fósiles humanos más antiguos y evidencia de la evolución humana han sido encontrados allí.",
          de: "Afrika ist als Wiege der Menschheit bekannt, weil dort die ältesten menschlichen Fossilien und Beweise für die menschliche Evolution gefunden wurden.",
          nl: "Afrika staat bekend als de bakermat van de mensheid omdat de vroegste menselijke fossielen en bewijs van menselijke evolutie daar zijn gevonden."
        }
      },
      {
        question: {
          en: "The Drake Passage is between which continent and which landmass?",
          es: "¿El Pasaje de Drake está entre qué continente y qué masa terrestre?",
          de: "Die Drake-Passage liegt zwischen welchem Kontinent und welcher Landmasse?",
          nl: "De Drakepassage ligt tussen welk continent en welke landmassa?"
        },
        options: [
          { en: "South America and Antarctica", es: "América del Sur y Antártida", de: "Südamerika und Antarktis", nl: "Zuid-Amerika en Antarctica" },
          { en: "Africa and Antarctica", es: "África y Antártida", de: "Afrika und Antarktis", nl: "Afrika en Antarctica" },
          { en: "Australia and Antarctica", es: "Australia y Antártida", de: "Australien und Antarktis", nl: "Australië en Antarctica" },
          { en: "Asia and Antarctica", es: "Asia y Antártida", de: "Asien und Antarktis", nl: "Azië en Antarctica" }
        ],
        correct: 0,
        explanation: {
          en: "The Drake Passage is between South America and Antarctica, known for its rough seas and strong winds connecting the Atlantic and Pacific Oceans.",
          es: "El Pasaje de Drake está entre América del Sur y la Antártida, conocido por sus mares agitados y vientos fuertes que conectan los océanos Atlántico y Pacífico.",
          de: "Die Drake-Passage liegt zwischen Südamerika und der Antarktis, bekannt für ihre rauen Meere und starken Winde, die Atlantik und Pazifik verbinden.",
          nl: "De Drakepassage ligt tussen Zuid-Amerika en Antarctica, bekend om zijn ruwe zeeën en sterke winden die de Atlantische en Grote Oceaan verbinden."
        }
      },
      {
        question: {
          en: "Which ocean has the most islands?",
          es: "¿Qué océano tiene más islas?",
          de: "Welcher Ozean hat die meisten Inseln?",
          nl: "Welke oceaan heeft de meeste eilanden?"
        },
        options: [
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correct: 0,
        explanation: {
          en: "The Pacific Ocean has the most islands, with tens of thousands including major island groups like Indonesia, Philippines, and Pacific island nations.",
          es: "El Océano Pacífico tiene la mayoría de las islas, con decenas de miles incluyendo grandes grupos de islas como Indonesia, Filipinas y naciones island del Pacífico.",
          de: "Der Pazifische Ozean hat die meisten Inseln, mit Zehntausenden einschließlich großer Inselgruppen wie Indonesien, Philippinen und pazifischen Inselnationen.",
          nl: "De Grote Oceaan heeft de meeste eilanden, met tienduizenden inclusief grote eilandengroepen zoals Indonesië, Filipijnen en Pacifische eilandnaties."
        }
      },
      {
        question: {
          en: "The Suez Canal connects the Mediterranean Sea to which other sea?",
          es: "¿El Canal de Suez conecta el Mar Mediterráneo con qué otro mar?",
          de: "Der Suezkanal verbindet das Mittelmeer mit welchem anderen Meer?",
          nl: "Het Suezkanaal verbindt de Middellandse Zee met welke andere zee?"
        },
        options: [
          { en: "Red Sea", es: "Mar Rojo", de: "Rotes Meer", nl: "Rode Zee" },
          { en: "Black Sea", es: "Mar Negro", de: "Schwarzes Meer", nl: "Zwarte Zee" },
          { en: "Caspian Sea", es: "Mar Caspio", de: "Kaspisches Meer", nl: "Kaspische Zee" },
          { en: "Arabian Sea", es: "Mar Arábigo", de: "Arabisches Meer", nl: "Arabische Zee" }
        ],
        correct: 0,
        explanation: {
          en: "The Suez Canal connects the Mediterranean Sea to the Red Sea, providing a crucial shipping route between Europe and Asia.",
          es: "El Canal de Suez conecta el Mar Mediterráneo con el Mar Rojo, proporcionando una ruta de navegación crucial entre Europa y Asia.",
          de: "Der Suezkanal verbindet das Mittelmeer mit dem Roten Meer und bietet eine wichtige Schifffahrtsroute zwischen Europa und Asien.",
          nl: "Het Suezkanaal verbindt de Middellandse Zee met de Rode Zee en biedt een cruciale scheepvaartroute tussen Europa en Azië."
        }
      },
      {
        question: {
          en: "Which continent has the most time zones?",
          es: "¿Qué continente tiene más zonas horarias?",
          de: "Welcher Kontinent hat die meisten Zeitzonen?",
          nl: "Welk continent heeft de meeste tijdzones?"
        },
        options: [
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" }
        ],
        correct: 0,
        explanation: {
          en: "Asia has the most time zones, spanning 11 time zones from UTC+2 to UTC+12, mainly due to Russia's vast territory.",
          es: "Asia tiene la mayoría de zonas horarias, abarcando 11 zonas horarias desde UTC+2 hasta UTC+12, principalmente debido al vasto territorio de Rusia.",
          de: "Asien hat die meisten Zeitzonen und umfasst 11 Zeitzonen von UTC+2 bis UTC+12, hauptsächlich aufgrund von Russlands riesigem Territorium.",
          nl: "Azië heeft de meeste tijdzones, van UTC+2 tot UTC+12, voornamelijk vanwege Ruslands uitgestrekte grondgebied."
        }
      },
      {
        question: {
          en: "The Mid-Atlantic Ridge runs through which ocean?",
          es: "¿La Dorsal Mesoatlántica atraviesa qué océano?",
          de: "Der Mittelatlantische Rücken verläuft durch welchen Ozean?",
          nl: "De Mid-Atlantische Rug loopt door welke oceaan?"
        },
        options: [
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correct: 0,
        explanation: {
          en: "The Mid-Atlantic Ridge runs through the Atlantic Ocean, forming an underwater mountain range where new oceanic crust is created.",
          es: "La Dorsal Mesoatlántica atraviesa el Océano Atlántico, formando una cordillera submarina donde se crea nueva corteza oceánica.",
          de: "Der Mittelatlantische Rücken verläuft durch den Atlantischen Ozean und bildet eine Unterwasser-Bergkette, wo neue ozeanische Kruste entsteht.",
          nl: "De Mid-Atlantische Rug loopt door de Atlantische Oceaan en vormt een onderwater bergketen waar nieuwe oceanische korst wordt gecreëerd."
        }
      },
      {
        question: {
          en: "Which continent contains the Kalahari Desert?",
          es: "¿Qué continente contiene el Desierto de Kalahari?",
          de: "Welcher Kontinent enthält die Kalahari-Wüste?",
          nl: "Welk continent bevat de Kalahari-woestijn?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "Africa contains the Kalahari Desert, a large semi-arid sandy savanna in southern Africa covering parts of Botswana, Namibia, and South Africa.",
          es: "África contiene el Desierto de Kalahari, una gran sabana arenosa semiárida en el sur de África que cubre partes de Botsuana, Namibia y Sudáfrica.",
          de: "Afrika enthält die Kalahari-Wüste, eine große halbtrockene sandige Savanne im südlichen Afrika, die Teile von Botswana, Namibia und Südafrika bedeckt.",
          nl: "Afrika bevat de Kalahari-woestijn, een grote semi-droge zandige savanne in zuidelijk Afrika die delen van Botswana, Namibië en Zuid-Afrika bedekt."
        }
      },
      {
        question: {
          en: "The Coral Triangle, known for marine biodiversity, is in which ocean?",
          es: "¿El Triángulo de Coral, conocido por la biodiversidad marina, está en qué océano?",
          de: "Das Korallendreieck, bekannt für die marine Artenvielfalt, liegt in welchem Ozean?",
          nl: "De Koraaldriehoek, bekend om mariene biodiversiteit, ligt in welke oceaan?"
        },
        options: [
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Southern Ocean", es: "Océano Austral", de: "Südlicher Ozean", nl: "Zuidelijke Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Coral Triangle is in the Pacific Ocean, centered around Indonesia, Malaysia, and the Philippines, containing the richest marine biodiversity on Earth.",
          es: "El Triángulo de Coral está en el Océano Pacífico, centrado alrededor de Indonesia, Malasia y Filipinas, conteniendo la biodiversidad marina más rica de la Tierra.",
          de: "Das Korallendreieck liegt im Pazifischen Ozean, zentriert um Indonesien, Malaysia und die Philippinen, und enthält die reichste marine Artenvielfalt der Erde.",
          nl: "De Koraaldriehoek ligt in de Grote Oceaan, gecentreerd rond Indonesië, Maleisië en de Filipijnen, en bevat de rijkste mariene biodiversiteit op aarde."
        }
      },
      {
        question: {
          en: "Which continent is entirely in the Southern Hemisphere?",
          es: "¿Qué continente está completamente en el Hemisferio Sur?",
          de: "Welcher Kontinent liegt vollständig auf der Südhalbkugel?",
          nl: "Welk continent ligt volledig op het zuidelijk halfrond?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" }
        ],
        correct: 0,
        explanation: {
          en: "Antarctica is entirely in the Southern Hemisphere, while Australia mostly is, but small parts extend slightly north of the equator.",
          es: "La Antártida está completamente en el Hemisferio Sur, mientras que Australia mayormente lo está, pero pequeñas partes se extienden ligeramente al norte del ecuador.",
          de: "Die Antarktis liegt vollständig auf der Südhalbkugel, während Australien größtenteils dort liegt, aber kleine Teile sich leicht nördlich des Äquators erstrecken.",
          nl: "Antarctica ligt volledig op het zuidelijk halfrond, terwijl Australië grotendeels daar ligt, maar kleine delen zich lichtelijk ten noorden van de evenaar uitstrekken."
        }
      },
      {
        question: {
          en: "The Tasman Sea separates which two countries?",
          es: "¿El Mar de Tasmania separa qué dos países?",
          de: "Die Tasmansee trennt welche zwei Länder?",
          nl: "De Tasmanzee scheidt welke twee landen?"
        },
        options: [
          { en: "Australia and New Zealand", es: "Australia y Nueva Zelanda", de: "Australien und Neuseeland", nl: "Australië en Nieuw-Zeeland" },
          { en: "Australia and Indonesia", es: "Australia e Indonesia", de: "Australien und Indonesien", nl: "Australië en Indonesië" },
          { en: "New Zealand and Fiji", es: "Nueva Zelanda y Fiyi", de: "Neuseeland und Fidschi", nl: "Nieuw-Zeeland en Fiji" },
          { en: "Australia and Papua New Guinea", es: "Australia y Papúa Nueva Guinea", de: "Australien und Papua-Neuguinea", nl: "Australië en Papoea-Nieuw-Guinea" }
        ],
        correct: 0,
        explanation: {
          en: "The Tasman Sea separates Australia and New Zealand, named after Dutch explorer Abel Tasman who first reached the region in 1642.",
          es: "El Mar de Tasmania separa Australia y Nueva Zelanda, nombrado por el explorador holandés Abel Tasman quien llegó por primera vez a la región en 1642.",
          de: "Die Tasmansee trennt Australien und Neuseeland, benannt nach dem niederländischen Entdecker Abel Tasman, der die Region 1642 erstmals erreichte.",
          nl: "De Tasmanzee scheidt Australië en Nieuw-Zeeland, genoemd naar de Nederlandse ontdekkingsreiziger Abel Tasman die de regio in 1642 voor het eerst bereikte."
        }
      },
      {
        question: {
          en: "Which continent has the longest coastline?",
          es: "¿Qué continente tiene la costa más larga?",
          de: "Welcher Kontinent hat die längste Küstenlinie?",
          nl: "Welk continent heeft de langste kustlijn?"
        },
        options: [
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" }
        ],
        correct: 0,
        explanation: {
          en: "Asia has the longest coastline due to its enormous size and many peninsulas, islands, and complex geography including Russia, India, and Southeast Asia.",
          es: "Asia tiene la costa más larga debido a su tamaño enorme y muchas penínsulas, islas y geografía compleja incluyendo Rusia, India y el Sudeste Asiático.",
          de: "Asien hat die längste Küstenlinie aufgrund seiner enormen Größe und vielen Halbinseln, Inseln und komplexen Geografie einschließlich Russland, Indien und Südostasien.",
          nl: "Azië heeft de langste kustlijn vanwege zijn enorme grootte en vele schiereilanden, eilanden en complexe geografie inclusief Rusland, India en Zuidoost-Azië."
        }
      },
      {
        question: {
          en: "The Mozambique Channel separates Madagascar from which continent?",
          es: "¿El Canal de Mozambique separa Madagascar de qué continente?",
          de: "Der Mosambik-Kanal trennt Madagaskar von welchem Kontinent?",
          nl: "Het Kanaal van Mozambique scheidt Madagascar van welk continent?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" }
        ],
        correct: 0,
        explanation: {
          en: "The Mozambique Channel separates Madagascar from Africa, creating a 400-kilometer-wide waterway between the island and the mainland.",
          es: "El Canal de Mozambique separa Madagascar de África, creando una vía acuática de 400 kilómetros de ancho entre la isla y el continente.",
          de: "Der Mosambik-Kanal trennt Madagaskar von Afrika und schafft eine 400 Kilometer breite Wasserstraße zwischen der Insel und dem Festland.",
          nl: "Het Kanaal van Mozambique scheidt Madagaskar van Afrika en creëert een 400 kilometer brede waterweg tussen het eiland en het vasteland."
        }
      },
      {
        question: {
          en: "Which ocean current helps warm Western Europe's climate?",
          es: "¿Qué corriente oceánica ayuda a calentar el clima de Europa Occidental?",
          de: "Welcher Meeresstrom hilft dabei, Westeuropas Klima zu erwärmen?",
          nl: "Welke oceaanstroom helpt het klimaat van West-Europa te verwarmen?"
        },
        options: [
          { en: "Gulf Stream", es: "Corriente del Golfo", de: "Golfstrom", nl: "Golfstroom" },
          { en: "Kuroshio Current", es: "Corriente Kuroshio", de: "Kuroshio-Strom", nl: "Kuroshio-stroom" },
          { en: "California Current", es: "Corriente de California", de: "Kalifornienstrom", nl: "Californische stroom" },
          { en: "Benguela Current", es: "Corriente de Benguela", de: "Benguelastrom", nl: "Benguela-stroom" }
        ],
        correct: 0,
        explanation: {
          en: "The Gulf Stream helps warm Western Europe's climate by bringing warm water from the Caribbean across the Atlantic Ocean.",
          es: "La Corriente del Golfo ayuda a calentar el clima de Europa Occidental trayendo agua cálida desde el Caribe a través del Océano Atlántico.",
          de: "Der Golfstrom hilft dabei, Westeuropas Klima zu erwärmen, indem er warmes Wasser aus der Karibik über den Atlantischen Ozean bringt.",
          nl: "De Golfstroom helpt het klimaat van West-Europa te verwarmen door warm water uit de Caraïben over de Atlantische Oceaan te brengen."
        }
      },
      {
        question: {
          en: "The Torres Strait separates Australia from which island?",
          es: "¿El Estrecho de Torres separa Australia de qué isla?",
          de: "Die Torresstraße trennt Australien von welcher Insel?",
          nl: "De Torresstraat scheidt Australië van welk eiland?"
        },
        options: [
          { en: "New Guinea", es: "Nueva Guinea", de: "Neuguinea", nl: "Nieuw-Guinea" },
          { en: "Tasmania", es: "Tasmania", de: "Tasmanien", nl: "Tasmanië" },
          { en: "New Zealand", es: "Nueva Zelanda", de: "Neuseeland", nl: "Nieuw-Zeeland" },
          { en: "Borneo", es: "Borneo", de: "Borneo", nl: "Borneo" }
        ],
        correct: 0,
        explanation: {
          en: "The Torres Strait separates Australia from New Guinea (Papua New Guinea), creating a narrow waterway between the two landmasses.",
          es: "El Estrecho de Torres separa Australia de Nueva Guinea (Papúa Nueva Guinea), creando una vía acuática estrecha entre las dos masas terrestres.",
          de: "Die Torresstraße trennt Australien von Neuguinea (Papua-Neuguinea) und schafft eine schmale Wasserstraße zwischen den beiden Landmassen.",
          nl: "De Torresstraat scheidt Australië van Nieuw-Guinea (Papoea-Nieuw-Guinea) en creëert een smalle waterweg tussen de twee landmassa's."
        }
      },
      {
        question: {
          en: "Which continent contains both the equator and the prime meridian?",
          es: "¿Qué continente contiene tanto el ecuador como el meridiano principal?",
          de: "Welcher Kontinent enthält sowohl den Äquator als auch den Nullmeridian?",
          nl: "Welk continent bevat zowel de evenaar als de nulmeridiaan?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" }
        ],
        correct: 0,
        explanation: {
          en: "Africa contains both the equator and the prime meridian (0° longitude), making it unique among continents for having both reference lines.",
          es: "África contiene tanto el ecuador como el meridiano principal (0° de longitud), haciéndolo único entre los continentes por tener ambas líneas de referencia.",
          de: "Afrika enthält sowohl den Äquator als auch den Nullmeridian (0° Länge), was ihn unter den Kontinenten einzigartig macht, beide Referenzlinien zu haben.",
          nl: "Afrika bevat zowel de evenaar als de nulmeridiaan (0° lengtegraad), waardoor het uniek is onder de continenten omdat het beide referentielijnen heeft."
        }
      },
      {
        question: {
          en: "The Sargasso Sea is a region of which ocean?",
          es: "¿El Mar de los Sargazos es una región de qué océano?",
          de: "Die Sargassosee ist eine Region welches Ozeans?",
          nl: "De Sargassozee is een regio van welke oceaan?"
        },
        options: [
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Southern Ocean", es: "Océano Austral", de: "Südlicher Ozean", nl: "Zuidelijke Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Sargasso Sea is a region of the Atlantic Ocean, known for its floating sargassum seaweed and unique marine ecosystem.",
          es: "El Mar de los Sargazos es una región del Océano Atlántico, conocido por sus algas sargazo flotantes y ecosistema marino único.",
          de: "Die Sargassosee ist eine Region des Atlantischen Ozeans, bekannt für ihre schwimmenden Sargassum-Algen und das einzigartige marine Ökosystem.",
          nl: "De Sargassozee is een regio van de Atlantische Oceaan, bekend om zijn drijvende sargassum zeewier en unieke mariene ecosysteem."
        }
      },
      {
        question: {
          en: "Which continent has the Great Dividing Range?",
          es: "¿Qué continente tiene la Gran Cordillera Divisoria?",
          de: "Welcher Kontinent hat die Great Dividing Range?",
          nl: "Welk continent heeft de Great Dividing Range?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" }
        ],
        correct: 0,
        explanation: {
          en: "Australia has the Great Dividing Range, a mountain range running along the eastern coast from Queensland to Victoria.",
          es: "Australia tiene la Gran Cordillera Divisoria, una cordillera que corre a lo largo de la costa oriental desde Queensland hasta Victoria.",
          de: "Australien hat die Great Dividing Range, eine Bergkette, die entlang der Ostküste von Queensland bis Victoria verläuft.",
          nl: "Australië heeft de Great Dividing Range, een bergketen die langs de oostkust loopt van Queensland tot Victoria."
        }
      },
      {
        question: {
          en: "The Weddell Sea borders which continent?",
          es: "¿El Mar de Weddell bordea qué continente?",
          de: "Das Weddell-Meer grenzt an welchen Kontinent?",
          nl: "De Weddellzee grenst aan welk continent?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correct: 0,
        explanation: {
          en: "The Weddell Sea borders Antarctica, located in the southern part of the Southern Ocean and known for its ice shelves.",
          es: "El Mar de Weddell bordea la Antártida, ubicado en la parte sur del Océano Austral y conocido por sus plataformas de hielo.",
          de: "Das Weddell-Meer grenzt an die Antarktis, liegt im südlichen Teil des Südlichen Ozeans und ist für seine Eisschelfe bekannt.",
          nl: "De Weddellzee grenst aan Antarctica, gelegen in het zuidelijke deel van de Zuidelijke Oceaan en bekend om zijn ijsschotsen."
        }
      },
      {
        question: {
          en: "Which continent is crossed by all lines of longitude?",
          es: "¿Qué continente es atravesado por todas las líneas de longitud?",
          de: "Welcher Kontinent wird von allen Längengraden durchquert?",
          nl: "Welk continent wordt door alle lengtelijnen gekruist?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correct: 0,
        explanation: {
          en: "Antarctica is crossed by all lines of longitude because all meridians converge at the South Pole, which is located on this continent.",
          es: "La Antártida es atravesada por todas las líneas de longitud porque todos los meridianos convergen en el Polo Sur, que está ubicado en este continente.",
          de: "Die Antarktis wird von allen Längengraden durchquert, weil alle Meridiane am Südpol zusammenlaufen, der sich auf diesem Kontinent befindet.",
          nl: "Antarctica wordt door alle lengtelijnen gekruist omdat alle meridianen samenkomen op de Zuidpool, die zich op dit continent bevindt."
        }
      },
      {
        question: {
          en: "The Labrador Sea is part of which ocean?",
          es: "¿El Mar de Labrador es parte de qué océano?",
          de: "Die Labradorsee ist Teil welches Ozeans?",
          nl: "De Labradorzee is onderdeel van welke oceaan?"
        },
        options: [
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Labrador Sea is part of the Atlantic Ocean, located between Greenland and Canada, known for its cold waters and icebergs.",
          es: "El Mar de Labrador es parte del Océano Atlántico, ubicado entre Groenlandia y Canadá, conocido por sus aguas frías y icebergs.",
          de: "Die Labradorsee ist Teil des Atlantischen Ozeans, liegt zwischen Grönland und Kanada und ist für ihre kalten Gewässer und Eisberge bekannt.",
          nl: "De Labradorzee is onderdeel van de Atlantische Oceaan, gelegen tussen Groenland en Canada, bekend om zijn koude wateren en ijsbergen."
        }
      },
      {
        question: {
          en: "Which ocean is the warmest?",
          es: "¿Cuál océano es el más cálido?",
          de: "Welcher Ozean ist der wärmste?",
          nl: "Welke oceaan is het warmst?"
        },
        options: [
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Southern Ocean", es: "Océano Austral", de: "Südlicher Ozean", nl: "Zuidelijke Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Indian Ocean is the warmest ocean in the world, with an average surface temperature of 22°C (71.6°F), due to its location mostly in the tropical and subtropical zones.",
          es: "El Océano Índico es el océano más cálido del mundo, con una temperatura superficial promedio de 22°C (71.6°F), debido a su ubicación principalmente en las zonas tropicales y subtropicales.",
          de: "Der Indische Ozean ist der wärmste Ozean der Welt mit einer durchschnittlichen Oberflächentemperatur von 22°C (71,6°F), aufgrund seiner Lage hauptsächlich in den tropischen und subtropischen Zonen.",
          nl: "De Indische Oceaan is de warmste oceaan ter wereld, met een gemiddelde oppervlaktetemperatuur van 22°C (71,6°F), vanwege zijn ligging voornamelijk in de tropische en subtropische zones."
        }
      },
      {
        question: {
          en: "The Strait of Malacca connects which two bodies of water?",
          es: "¿El Estrecho de Malaca conecta cuáles dos cuerpos de agua?",
          de: "Die Straße von Malakka verbindet welche zwei Gewässer?",
          nl: "De Straat van Malakka verbindt welke twee waterlichamen?"
        },
        options: [
          { en: "Indian Ocean and South China Sea", es: "Océano Índico y Mar de China Meridional", de: "Indischer Ozean und Südchinesisches Meer", nl: "Indische Oceaan en Zuid-Chinese Zee" },
          { en: "Pacific Ocean and Indian Ocean", es: "Océano Pacífico y Océano Índico", de: "Pazifischer Ozean und Indischer Ozean", nl: "Grote Oceaan en Indische Oceaan" },
          { en: "Bay of Bengal and Arabian Sea", es: "Golfo de Bengala y Mar Arábigo", de: "Golf von Bengalen und Arabisches Meer", nl: "Golf van Bengalen en Arabische Zee" },
          { en: "South China Sea and East China Sea", es: "Mar de China Meridional y Mar de China Oriental", de: "Südchinesisches Meer und Ostchinesisches Meer", nl: "Zuid-Chinese Zee en Oost-Chinese Zee" }
        ],
        correct: 0,
        explanation: {
          en: "The Strait of Malacca connects the Indian Ocean and the South China Sea, serving as one of the world's most important shipping lanes between Malaysia and Indonesia.",
          es: "El Estrecho de Malaca conecta el Océano Índico y el Mar de China Meridional, sirviendo como una de las rutas marítimas más importantes del mundo entre Malasia e Indonesia.",
          de: "Die Straße von Malakka verbindet den Indischen Ozean und das Südchinesische Meer und dient als eine der wichtigsten Schifffahrtsrouten der Welt zwischen Malaysia und Indonesien.",
          nl: "De Straat van Malakka verbindt de Indische Oceaan en de Zuid-Chinese Zee, en dient als een van 's werelds belangrijkste scheepvaartroutes tussen Maleisië en Indonesië."
        }
      },
      {
        question: {
          en: "Which continent has the most countries?",
          es: "¿Qué continente tiene más países?",
          de: "Welcher Kontinent hat die meisten Länder?",
          nl: "Welk continent heeft de meeste landen?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "Africa has the most countries with 54 recognized sovereign states, making it the continent with the highest number of independent nations.",
          es: "África tiene más países con 54 estados soberanos reconocidos, convirtiéndolo en el continente con el mayor número de naciones independientes.",
          de: "Afrika hat mit 54 anerkannten souveränen Staaten die meisten Länder und ist damit der Kontinent mit der höchsten Anzahl unabhängiger Nationen.",
          nl: "Afrika heeft de meeste landen met 54 erkende soevereine staten, waardoor het het continent is met het hoogste aantal onafhankelijke naties."
        }
      },
      {
        question: {
          en: "The Bering Strait separates which two continents?",
          es: "¿El Estrecho de Bering separa cuáles dos continentes?",
          de: "Die Beringstraße trennt welche zwei Kontinente?",
          nl: "De Beringstraat scheidt welke twee continenten?"
        },
        options: [
          { en: "Asia and North America", es: "Asia y América del Norte", de: "Asien und Nordamerika", nl: "Azië en Noord-Amerika" },
          { en: "Europe and Asia", es: "Europa y Asia", de: "Europa und Asien", nl: "Europa en Azië" },
          { en: "North America and South America", es: "América del Norte y América del Sur", de: "Nordamerika und Südamerika", nl: "Noord-Amerika en Zuid-Amerika" },
          { en: "Africa and Asia", es: "África y Asia", de: "Afrika und Asien", nl: "Afrika en Azië" }
        ],
        correct: 0,
        explanation: {
          en: "The Bering Strait separates Asia (Russia) and North America (Alaska, USA), with a minimum width of about 55 miles (89 km) at its narrowest point.",
          es: "El Estrecho de Bering separa Asia (Rusia) y América del Norte (Alaska, EE.UU.), con un ancho mínimo de unas 55 millas (89 km) en su punto más estrecho.",
          de: "Die Beringstraße trennt Asien (Russland) und Nordamerika (Alaska, USA), mit einer minimalen Breite von etwa 55 Meilen (89 km) an ihrer schmalsten Stelle.",
          nl: "De Beringstraat scheidt Azië (Rusland) en Noord-Amerika (Alaska, VS), met een minimale breedte van ongeveer 55 mijl (89 km) op zijn smalste punt."
        }
      },
      {
        question: {
          en: "Which sea is located between Europe and Africa?",
          es: "¿Qué mar está ubicado entre Europa y África?",
          de: "Welches Meer liegt zwischen Europa und Afrika?",
          nl: "Welke zee ligt tussen Europa en Afrika?"
        },
        options: [
          { en: "Mediterranean Sea", es: "Mar Mediterráneo", de: "Mittelmeer", nl: "Middellandse Zee" },
          { en: "Red Sea", es: "Mar Rojo", de: "Rotes Meer", nl: "Rode Zee" },
          { en: "Black Sea", es: "Mar Negro", de: "Schwarzes Meer", nl: "Zwarte Zee" },
          { en: "North Sea", es: "Mar del Norte", de: "Nordsee", nl: "Noordzee" }
        ],
        correct: 0,
        explanation: {
          en: "The Mediterranean Sea is located between Europe and Africa, connected to the Atlantic Ocean through the Strait of Gibraltar and serving as a crucial maritime route throughout history.",
          es: "El Mar Mediterráneo está ubicado entre Europa y África, conectado al Océano Atlántico a través del Estrecho de Gibraltar y sirviendo como una ruta marítima crucial a lo largo de la historia.",
          de: "Das Mittelmeer liegt zwischen Europa und Afrika, ist durch die Straße von Gibraltar mit dem Atlantischen Ozean verbunden und diente der Geschichte als wichtige maritime Route.",
          nl: "De Middellandse Zee ligt tussen Europa en Afrika, verbonden met de Atlantische Oceaan via de Straat van Gibraltar en heeft door de geschiedenis heen gediend als een cruciale maritieme route."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/world-geography', level2);
  }
})();