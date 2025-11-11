(function() {
  const level1 = {
    name: {
      en: "Basics",
      es: "Conceptos Básicos",
      de: "Grundlagen",
      nl: "Basiskennis"
    },
    questions: [
      {
        question: {
          en: "In which city is the Burj Khalifa located?",
          es: "¿En qué ciudad se encuentra el Burj Khalifa?",
          de: "In welcher Stadt befindet sich der Burj Khalifa?",
          nl: "In welke stad staat de Burj Khalifa?"
        },
        options: [
          {
            en: "Abu Dhabi",
            es: "Abu Dabi",
            de: "Abu Dhabi",
            nl: "Abu Dhabi"
          },
          {
            en: "Dubai",
            es: "Dubái",
            de: "Dubai",
            nl: "Dubai"
          },
          {
            en: "Doha",
            es: "Doha",
            de: "Doha",
            nl: "Doha"
          },
          {
            en: "Riyadh",
            es: "Riad",
            de: "Riad",
            nl: "Riyad"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa is located in Dubai, United Arab Emirates. It stands in the heart of Downtown Dubai.",
          es: "El Burj Khalifa se encuentra en Dubái, Emiratos Árabes Unidos. Se encuentra en el corazón del centro de Dubái.",
          de: "Der Burj Khalifa befindet sich in Dubai, Vereinigte Arabische Emirate. Er steht im Herzen von Downtown Dubai.",
          nl: "De Burj Khalifa staat in Dubai, Verenigde Arabische Emiraten. Het staat in het hart van Downtown Dubai."
        }
      },
      {
        question: {
          en: "What is the total height of the Burj Khalifa?",
          es: "¿Cuál es la altura total del Burj Khalifa?",
          de: "Wie hoch ist der Burj Khalifa insgesamt?",
          nl: "Wat is de totale hoogte van de Burj Khalifa?"
        },
        options: [
          {
            en: "632 m",
            es: "632 metros",
            de: "632 Meter",
            nl: "632 meter"
          },
          {
            en: "828 m",
            es: "828 metros",
            de: "828 Meter",
            nl: "828 meter"
          },
          {
            en: "729 m",
            es: "729 metros",
            de: "729 Meter",
            nl: "729 meter"
          },
          {
            en: "915 m",
            es: "915 metros",
            de: "915 Meter",
            nl: "915 meter"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa stands at 828 meters (2,717 feet) tall, making it the tallest building in the world.",
          es: "El Burj Khalifa mide 828 metros (2.717 pies) de altura, lo que lo convierte en el edificio más alto del mundo.",
          de: "Der Burj Khalifa ist 828 Meter (2.717 Fuß) hoch und damit das höchste Gebäude der Welt.",
          nl: "De Burj Khalifa is 828 meter (2.717 voet) hoog, waarmee het het hoogste gebouw ter wereld is."
        }
      },
      {
        question: {
          en: "In what year was the Burj Khalifa completed?",
          es: "¿En qué año se completó el Burj Khalifa?",
          de: "In welchem Jahr wurde der Burj Khalifa fertiggestellt?",
          nl: "In welk jaar werd de Burj Khalifa voltooid?"
        },
        options: [
          {
            en: "2008",
            es: "2008",
            de: "2008",
            nl: "2008"
          },
          {
            en: "2010",
            es: "2010",
            de: "2010",
            nl: "2010"
          },
          {
            en: "2012",
            es: "2012",
            de: "2012",
            nl: "2012"
          },
          {
            en: "2014",
            es: "2014",
            de: "2014",
            nl: "2014"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa was officially completed and opened on January 4, 2010.",
          es: "El Burj Khalifa se completó y se abrió oficialmente el 4 de enero de 2010.",
          de: "Der Burj Khalifa wurde am 4. Januar 2010 offiziell fertiggestellt und eröffnet.",
          nl: "De Burj Khalifa werd officieel voltooid en geopend op 4 januari 2010."
        }
      },
      {
        question: {
          en: "How many usable floors does the Burj Khalifa have?",
          es: "¿Cuántos pisos utilizables tiene el Burj Khalifa?",
          de: "Wie viele nutzbare Etagen hat der Burj Khalifa?",
          nl: "Hoeveel bruikbare verdiepingen heeft de Burj Khalifa?"
        },
        options: [
          {
            en: "120 floors",
            es: "120 pisos",
            de: "120 Etagen",
            nl: "120 verdiepingen"
          },
          {
            en: "163 floors",
            es: "163 pisos",
            de: "163 Etagen",
            nl: "163 verdiepingen"
          },
          {
            en: "200 floors",
            es: "200 pisos",
            de: "200 Etagen",
            nl: "200 verdiepingen"
          },
          {
            en: "145 floors",
            es: "145 pisos",
            de: "145 Etagen",
            nl: "145 verdiepingen"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa has 163 usable floors above ground, plus additional floors in the spire.",
          es: "El Burj Khalifa tiene 163 pisos utilizables sobre el suelo, además de pisos adicionales en la aguja.",
          de: "Der Burj Khalifa hat 163 nutzbare Etagen über dem Boden, plus zusätzliche Etagen im Turm.",
          nl: "De Burj Khalifa heeft 163 bruikbare verdiepingen boven de grond, plus extra verdiepingen in de spits."
        }
      },
      {
        question: {
          en: "Which architectural firm designed the Burj Khalifa?",
          es: "¿Qué firma de arquitectura diseñó el Burj Khalifa?",
          de: "Welches Architekturbüro entwarf den Burj Khalifa?",
          nl: "Welk architectenbureau ontwierp de Burj Khalifa?"
        },
        options: [
          {
            en: "Foster + Partners",
            es: "Foster + Partners",
            de: "Foster + Partners",
            nl: "Foster + Partners"
          },
          {
            en: "Zaha Hadid Architects",
            es: "Zaha Hadid Architects",
            de: "Zaha Hadid Architects",
            nl: "Zaha Hadid Architects"
          },
          {
            en: "Skidmore, Owings & Merrill",
            es: "Skidmore, Owings & Merrill",
            de: "Skidmore, Owings & Merrill",
            nl: "Skidmore, Owings & Merrill"
          },
          {
            en: "Gensler",
            es: "Gensler",
            de: "Gensler",
            nl: "Gensler"
          }
        ],
        correct: 2,
        explanation: {
          en: "Skidmore, Owings & Merrill (SOM) designed the Burj Khalifa, with Adrian Smith as the lead architect.",
          es: "Skidmore, Owings & Merrill (SOM) diseñó el Burj Khalifa, con Adrian Smith como arquitecto principal.",
          de: "Skidmore, Owings & Merrill (SOM) entwarf den Burj Khalifa, mit Adrian Smith als leitendem Architekten.",
          nl: "Skidmore, Owings & Merrill (SOM) ontwierp de Burj Khalifa, met Adrian Smith als hoofdarchitect."
        }
      },
      {
        question: {
          en: "Who was the lead architect of the Burj Khalifa?",
          es: "¿Quién fue el arquitecto principal del Burj Khalifa?",
          de: "Wer war der leitende Architekt des Burj Khalifa?",
          nl: "Wie was de hoofdarchitect van de Burj Khalifa?"
        },
        options: [
          {
            en: "Frank Gehry",
            es: "Frank Gehry",
            de: "Frank Gehry",
            nl: "Frank Gehry"
          },
          {
            en: "Adrian Smith",
            es: "Adrian Smith",
            de: "Adrian Smith",
            nl: "Adrian Smith"
          },
          {
            en: "Norman Foster",
            es: "Norman Foster",
            de: "Norman Foster",
            nl: "Norman Foster"
          },
          {
            en: "Renzo Piano",
            es: "Renzo Piano",
            de: "Renzo Piano",
            nl: "Renzo Piano"
          }
        ],
        correct: 1,
        explanation: {
          en: "Adrian Smith was the lead architect of the Burj Khalifa while working at Skidmore, Owings & Merrill.",
          es: "Adrian Smith fue el arquitecto principal del Burj Khalifa mientras trabajaba en Skidmore, Owings & Merrill.",
          de: "Adrian Smith war der leitende Architekt des Burj Khalifa, als er bei Skidmore, Owings & Merrill arbeitete.",
          nl: "Adrian Smith was de hoofdarchitect van de Burj Khalifa toen hij werkte bij Skidmore, Owings & Merrill."
        }
      },
      {
        question: {
          en: "When did construction of the Burj Khalifa begin?",
          es: "¿Cuándo comenzó la construcción del Burj Khalifa?",
          de: "Wann begann der Bau des Burj Khalifa?",
          nl: "Wanneer begon de bouw van de Burj Khalifa?"
        },
        options: [
          {
            en: "2002",
            es: "2002",
            de: "2002",
            nl: "2002"
          },
          {
            en: "2004",
            es: "2004",
            de: "2004",
            nl: "2004"
          },
          {
            en: "2006",
            es: "2006",
            de: "2006",
            nl: "2006"
          },
          {
            en: "2008",
            es: "2008",
            de: "2008",
            nl: "2008"
          }
        ],
        correct: 1,
        explanation: {
          en: "Construction of the Burj Khalifa began in January 2004 and took approximately 6 years to complete.",
          es: "La construcción del Burj Khalifa comenzó en enero de 2004 y tardó aproximadamente 6 años en completarse.",
          de: "Der Bau des Burj Khalifa begann im Januar 2004 und dauerte etwa 6 Jahre bis zur Fertigstellung.",
          nl: "De bouw van de Burj Khalifa begon in januari 2004 en duurde ongeveer 6 jaar om te voltooien."
        }
      },
      {
        question: {
          en: "Which company developed the Burj Khalifa?",
          es: "¿Qué empresa desarrolló el Burj Khalifa?",
          de: "Welches Unternehmen entwickelte den Burj Khalifa?",
          nl: "Welk bedrijf ontwikkelde de Burj Khalifa?"
        },
        options: [
          {
            en: "Emaar Properties",
            es: "Emaar Properties",
            de: "Emaar Properties",
            nl: "Emaar Properties"
          },
          {
            en: "Aldar Properties",
            es: "Aldar Properties",
            de: "Aldar Properties",
            nl: "Aldar Properties"
          },
          {
            en: "Damac Properties",
            es: "Damac Properties",
            de: "Damac Properties",
            nl: "Damac Properties"
          },
          {
            en: "Nakheel Properties",
            es: "Nakheel Properties",
            de: "Nakheel Properties",
            nl: "Nakheel Properties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Emaar Properties, a major Dubai-based real estate developer, was responsible for developing the Burj Khalifa.",
          es: "Emaar Properties, una importante empresa inmobiliaria con sede en Dubái, fue responsable del desarrollo del Burj Khalifa.",
          de: "Emaar Properties, ein großer in Dubai ansässiger Immobilienentwickler, war für die Entwicklung des Burj Khalifa verantwortlich.",
          nl: "Emaar Properties, een grote vastgoedontwikkelaar gevestigd in Dubai, was verantwoordelijk voor de ontwikkeling van de Burj Khalifa."
        }
      },
      {
        question: {
          en: "What shape is the floor plan of the Burj Khalifa?",
          es: "¿Qué forma tiene la planta del Burj Khalifa?",
          de: "Welche Form hat der Grundriss des Burj Khalifa?",
          nl: "Welke vorm heeft de plattegrond van de Burj Khalifa?"
        },
        options: [
          {
            en: "Square",
            es: "Cuadrada",
            de: "Quadratisch",
            nl: "Vierkant"
          },
          {
            en: "Circular",
            es: "Circular",
            de: "Kreisförmig",
            nl: "Cirkelvormig"
          },
          {
            en: "Y-shaped",
            es: "En forma de Y",
            de: "Y-förmig",
            nl: "Y-vormig"
          },
          {
            en: "Triangular",
            es: "Triangular",
            de: "Dreieckig",
            nl: "Driehoekig"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa has a distinctive Y-shaped floor plan, which helps reduce wind forces and maximize views.",
          es: "El Burj Khalifa tiene una distintiva planta en forma de Y, que ayuda a reducir las fuerzas del viento y maximizar las vistas.",
          de: "Der Burj Khalifa hat einen markanten Y-förmigen Grundriss, der hilft, Windkräfte zu reduzieren und Ausblicke zu maximieren.",
          nl: "De Burj Khalifa heeft een kenmerkende Y-vormige plattegrond, die helpt om windkrachten te verminderen en uitzichten te maximaliseren."
        }
      },
      {
        question: {
          en: "What is the primary use of the Burj Khalifa?",
          es: "¿Cuál es el uso principal del Burj Khalifa?",
          de: "Was ist die Hauptnutzung des Burj Khalifa?",
          nl: "Wat is het primaire gebruik van de Burj Khalifa?"
        },
        options: [
          {
            en: "Only offices",
            es: "Solo oficinas",
            de: "Nur Büros",
            nl: "Alleen kantoren"
          },
          {
            en: "Mixed-use: residential, hotel, observation decks, offices",
            es: "Uso mixto: residencial, hotel, miradores, oficinas",
            de: "Gemischte Nutzung: Wohnungen, Hotel, Aussichtsplattformen, Büros",
            nl: "Gemengd gebruik: residentieel, hotel, observatiedekken, kantoren"
          },
          {
            en: "Only hotel",
            es: "Solo hotel",
            de: "Nur Hotel",
            nl: "Alleen hotel"
          },
          {
            en: "Only residential",
            es: "Solo residencial",
            de: "Nur Wohnungen",
            nl: "Alleen residentieel"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa is a mixed-use building containing residential apartments, the Armani Hotel, observation decks, and office spaces.",
          es: "El Burj Khalifa es un edificio de uso mixto que contiene apartamentos residenciales, el Hotel Armani, miradores y espacios de oficinas.",
          de: "Der Burj Khalifa ist ein gemischt genutztes Gebäude mit Wohnungen, dem Armani Hotel, Aussichtsplattformen und Büroräumen.",
          nl: "De Burj Khalifa is een gebouw met gemengd gebruik met residentiële appartementen, het Armani Hotel, observatiedekken en kantoorruimtes."
        }
      },
      {
        question: {
          en: "Which luxury hotel is located inside the Burj Khalifa?",
          es: "¿Qué hotel de lujo se encuentra dentro del Burj Khalifa?",
          de: "Welches Luxushotel befindet sich im Burj Khalifa?",
          nl: "Welk luxe hotel bevindt zich in de Burj Khalifa?"
        },
        options: [
          {
            en: "Versace Hotel",
            es: "Hotel Versace",
            de: "Versace Hotel",
            nl: "Versace Hotel"
          },
          {
            en: "Armani Hotel",
            es: "Hotel Armani",
            de: "Armani Hotel",
            nl: "Armani Hotel"
          },
          {
            en: "Bulgari Hotel",
            es: "Hotel Bulgari",
            de: "Bulgari Hotel",
            nl: "Bulgari Hotel"
          },
          {
            en: "Gucci Hotel",
            es: "Hotel Gucci",
            de: "Gucci Hotel",
            nl: "Gucci Hotel"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Armani Hotel Dubai occupies floors 1 to 8 and 38 to 39 of the Burj Khalifa, designed by Giorgio Armani.",
          es: "El Hotel Armani Dubai ocupa los pisos 1 al 8 y 38 al 39 del Burj Khalifa, diseñado por Giorgio Armani.",
          de: "Das Armani Hotel Dubai belegt die Etagen 1 bis 8 und 38 bis 39 des Burj Khalifa, entworfen von Giorgio Armani.",
          nl: "Het Armani Hotel Dubai beslaat verdiepingen 1 tot 8 en 38 tot 39 van de Burj Khalifa, ontworpen door Giorgio Armani."
        }
      },
      {
        question: {
          en: "What is the name of the main observation deck experience?",
          es: "¿Cuál es el nombre de la experiencia principal del mirador?",
          de: "Wie heißt das Haupterlebnis der Aussichtsplattform?",
          nl: "Wat is de naam van de belangrijkste observatiedek-ervaring?"
        },
        options: [
          {
            en: "Sky View",
            es: "Sky View",
            de: "Sky View",
            nl: "Sky View"
          },
          {
            en: "At the Top",
            es: "At the Top",
            de: "At the Top",
            nl: "At the Top"
          },
          {
            en: "Top of the World",
            es: "Top of the World",
            de: "Top of the World",
            nl: "Top of the World"
          },
          {
            en: "The Summit",
            es: "The Summit",
            de: "The Summit",
            nl: "The Summit"
          }
        ],
        correct: 1,
        explanation: {
          en: "The observation deck experience is called 'At the Top' and is located on levels 124, 125, and 148.",
          es: "La experiencia del mirador se llama 'At the Top' y se encuentra en los niveles 124, 125 y 148.",
          de: "Das Aussichtsplattform-Erlebnis heißt 'At the Top' und befindet sich auf den Ebenen 124, 125 und 148.",
          nl: "De observatiedek-ervaring heet 'At the Top' en bevindt zich op niveaus 124, 125 en 148."
        }
      },
      {
        question: {
          en: "On which levels are the main observation decks located?",
          es: "¿En qué niveles se encuentran los miradores principales?",
          de: "Auf welchen Ebenen befinden sich die Hauptaussichtsplattformen?",
          nl: "Op welke niveaus bevinden zich de belangrijkste observatiedekken?"
        },
        options: [
          {
            en: "100, 101, 102",
            es: "100, 101, 102",
            de: "100, 101, 102",
            nl: "100, 101, 102"
          },
          {
            en: "124, 125, 148",
            es: "124, 125, 148",
            de: "124, 125, 148",
            nl: "124, 125, 148"
          },
          {
            en: "150, 151, 152",
            es: "150, 151, 152",
            de: "150, 151, 152",
            nl: "150, 151, 152"
          },
          {
            en: "90, 91, 92",
            es: "90, 91, 92",
            de: "90, 91, 92",
            nl: "90, 91, 92"
          }
        ],
        correct: 1,
        explanation: {
          en: "The main observation decks are on levels 124 and 125, with the highest public deck on level 148 at 555 meters.",
          es: "Los miradores principales están en los niveles 124 y 125, con el mirador público más alto en el nivel 148 a 555 metros.",
          de: "Die Hauptaussichtsplattformen befinden sich auf den Ebenen 124 und 125, mit der höchsten öffentlichen Plattform auf Ebene 148 in 555 Metern Höhe.",
          nl: "De belangrijkste observatiedekken bevinden zich op niveaus 124 en 125, met het hoogste openbare dek op niveau 148 op 555 meter."
        }
      },
      {
        question: {
          en: "What architectural style does the Burj Khalifa represent?",
          es: "¿Qué estilo arquitectónico representa el Burj Khalifa?",
          de: "Welchen Architekturstil repräsentiert der Burj Khalifa?",
          nl: "Welke architectonische stijl vertegenwoordigt de Burj Khalifa?"
        },
        options: [
          {
            en: "Art Deco",
            es: "Art Deco",
            de: "Art Deco",
            nl: "Art Deco"
          },
          {
            en: "Gothic Revival",
            es: "Neogótico",
            de: "Neugotik",
            nl: "Neogotiek"
          },
          {
            en: "Neo-futurism with Islamic architecture influences",
            es: "Neo-futurismo con influencias de arquitectura islámica",
            de: "Neo-Futurismus mit islamischen Architektureinflüssen",
            nl: "Neo-futurisme met islamitische architectuurinvloeden"
          },
          {
            en: "Brutalism",
            es: "Brutalismo",
            de: "Brutalismus",
            nl: "Brutalisme"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa combines neo-futuristic design with Islamic architectural elements, particularly inspired by the Hymenocallis flower.",
          es: "El Burj Khalifa combina diseño neo-futurista con elementos arquitectónicos islámicos, particularmente inspirado en la flor Hymenocallis.",
          de: "Der Burj Khalifa kombiniert neo-futuristisches Design mit islamischen Architekturelementen, besonders inspiriert von der Hymenocallis-Blume.",
          nl: "De Burj Khalifa combineert neo-futuristisch ontwerp met islamitische architectonische elementen, met name geïnspireerd door de Hymenocallis-bloem."
        }
      },
      {
        question: {
          en: "What world record does the Burj Khalifa currently hold?",
          es: "¿Qué récord mundial tiene actualmente el Burj Khalifa?",
          de: "Welchen Weltrekord hält der Burj Khalifa derzeit?",
          nl: "Welk wereldrecord heeft de Burj Khalifa momenteel?"
        },
        options: [
          {
            en: "Tallest building in Asia only",
            es: "Edificio más alto solo en Asia",
            de: "Höchstes Gebäude nur in Asien",
            nl: "Hoogste gebouw alleen in Azië"
          },
          {
            en: "Tallest building in the world",
            es: "Edificio más alto del mundo",
            de: "Höchstes Gebäude der Welt",
            nl: "Hoogste gebouw ter wereld"
          },
          {
            en: "Second tallest building in the world",
            es: "Segundo edificio más alto del mundo",
            de: "Zweithöchstes Gebäude der Welt",
            nl: "Op een na hoogste gebouw ter wereld"
          },
          {
            en: "Tallest building in the Middle East only",
            es: "Edificio más alto solo en Medio Oriente",
            de: "Höchstes Gebäude nur im Nahen Osten",
            nl: "Hoogste gebouw alleen in het Midden-Oosten"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa holds the record as the tallest building in the world, as well as the tallest free-standing structure.",
          es: "El Burj Khalifa tiene el récord del edificio más alto del mundo, así como la estructura independiente más alta.",
          de: "Der Burj Khalifa hält den Rekord als höchstes Gebäude der Welt sowie als höchste freistehende Struktur.",
          nl: "De Burj Khalifa heeft het record als hoogste gebouw ter wereld, evenals de hoogste vrijstaande structuur."
        }
      },
      {
        question: {
          en: "How many elevators does the Burj Khalifa have?",
          es: "¿Cuántos ascensores tiene el Burj Khalifa?",
          de: "Wie viele Aufzüge hat der Burj Khalifa?",
          nl: "Hoeveel liften heeft de Burj Khalifa?"
        },
        options: [
          {
            en: "37 elevators",
            es: "37 ascensores",
            de: "37 Aufzüge",
            nl: "37 liften"
          },
          {
            en: "57 elevators",
            es: "57 ascensores",
            de: "57 Aufzüge",
            nl: "57 liften"
          },
          {
            en: "77 elevators",
            es: "77 ascensores",
            de: "77 Aufzüge",
            nl: "77 liften"
          },
          {
            en: "97 elevators",
            es: "97 ascensores",
            de: "97 Aufzüge",
            nl: "97 liften"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa contains 57 elevators and 8 escalators to transport people throughout the building.",
          es: "El Burj Khalifa contiene 57 ascensores y 8 escaleras mecánicas para transportar personas por todo el edificio.",
          de: "Der Burj Khalifa verfügt über 57 Aufzüge und 8 Rolltreppen, um Menschen im gesamten Gebäude zu transportieren.",
          nl: "De Burj Khalifa bevat 57 liften en 8 roltrappen om mensen door het gebouw te vervoeren."
        }
      },
      {
        question: {
          en: "What was the primary structural material used in construction?",
          es: "¿Cuál fue el material estructural principal utilizado en la construcción?",
          de: "Was war das primäre Strukturmaterial beim Bau?",
          nl: "Wat was het primaire structurele materiaal dat bij de bouw werd gebruikt?"
        },
        options: [
          {
            en: "Wood",
            es: "Madera",
            de: "Holz",
            nl: "Hout"
          },
          {
            en: "Steel only",
            es: "Solo acero",
            de: "Nur Stahl",
            nl: "Alleen staal"
          },
          {
            en: "Reinforced concrete",
            es: "Hormigón armado",
            de: "Stahlbeton",
            nl: "Gewapend beton"
          },
          {
            en: "Brick",
            es: "Ladrillo",
            de: "Ziegel",
            nl: "Baksteen"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa's primary structure is made of reinforced concrete, with steel used for support and the spire.",
          es: "La estructura principal del Burj Khalifa está hecha de hormigón armado, con acero utilizado para soporte y la aguja.",
          de: "Die Hauptstruktur des Burj Khalifa besteht aus Stahlbeton, wobei Stahl für die Unterstützung und den Turm verwendet wird.",
          nl: "De primaire structuur van de Burj Khalifa is gemaakt van gewapend beton, met staal gebruikt voor ondersteuning en de spits."
        }
      },
      {
        question: {
          en: "In which country is the Burj Khalifa located?",
          es: "¿En qué país se encuentra el Burj Khalifa?",
          de: "In welchem Land befindet sich der Burj Khalifa?",
          nl: "In welk land staat de Burj Khalifa?"
        },
        options: [
          {
            en: "Saudi Arabia",
            es: "Arabia Saudita",
            de: "Saudi-Arabien",
            nl: "Saoedi-Arabië"
          },
          {
            en: "United Arab Emirates",
            es: "Emiratos Árabes Unidos",
            de: "Vereinigte Arabische Emirate",
            nl: "Verenigde Arabische Emiraten"
          },
          {
            en: "Qatar",
            es: "Catar",
            de: "Katar",
            nl: "Qatar"
          },
          {
            en: "Kuwait",
            es: "Kuwait",
            de: "Kuwait",
            nl: "Koeweit"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa is located in the United Arab Emirates (UAE), specifically in Dubai.",
          es: "El Burj Khalifa se encuentra en los Emiratos Árabes Unidos (EAU), específicamente en Dubái.",
          de: "Der Burj Khalifa befindet sich in den Vereinigten Arabischen Emiraten (VAE), speziell in Dubai.",
          nl: "De Burj Khalifa staat in de Verenigde Arabische Emiraten (VAE), specifiek in Dubai."
        }
      },
      {
        question: {
          en: "What natural element inspired the design of the Burj Khalifa?",
          es: "¿Qué elemento natural inspiró el diseño del Burj Khalifa?",
          de: "Welches natürliche Element inspirierte das Design des Burj Khalifa?",
          nl: "Welk natuurlijk element inspireerde het ontwerp van de Burj Khalifa?"
        },
        options: [
          {
            en: "Palm tree",
            es: "Palmera",
            de: "Palme",
            nl: "Palmboom"
          },
          {
            en: "Sand dune",
            es: "Duna de arena",
            de: "Sanddüne",
            nl: "Zandduin"
          },
          {
            en: "Hymenocallis flower",
            es: "Flor Hymenocallis",
            de: "Hymenocallis-Blume",
            nl: "Hymenocallis-bloem"
          },
          {
            en: "Mountain peak",
            es: "Pico de montaña",
            de: "Berggipfel",
            nl: "Bergtop"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Y-shaped floor plan of the Burj Khalifa was inspired by the regional desert flower Hymenocallis.",
          es: "La planta en forma de Y del Burj Khalifa se inspiró en la flor del desierto regional Hymenocallis.",
          de: "Der Y-förmige Grundriss des Burj Khalifa wurde von der regionalen Wüstenblume Hymenocallis inspiriert.",
          nl: "De Y-vormige plattegrond van de Burj Khalifa was geïnspireerd door de regionale woestijnbloem Hymenocallis."
        }
      },
      {
        question: {
          en: "Approximately how long did it take to build the Burj Khalifa?",
          es: "¿Aproximadamente cuánto tiempo llevó construir el Burj Khalifa?",
          de: "Wie lange dauerte ungefähr der Bau des Burj Khalifa?",
          nl: "Ongeveer hoelang duurde het om de Burj Khalifa te bouwen?"
        },
        options: [
          {
            en: "3 yrs",
            es: "3 años",
            de: "3 Jahre",
            nl: "3 jaar"
          },
          {
            en: "6 yrs",
            es: "6 años",
            de: "6 Jahre",
            nl: "6 jaar"
          },
          {
            en: "9 yrs",
            es: "9 años",
            de: "9 Jahre",
            nl: "9 jaar"
          },
          {
            en: "12 yrs",
            es: "12 años",
            de: "12 Jahre",
            nl: "12 jaar"
          }
        ],
        correct: 1,
        explanation: {
          en: "Construction of the Burj Khalifa took approximately 6 years, from January 2004 to January 2010.",
          es: "La construcción del Burj Khalifa tardó aproximadamente 6 años, desde enero de 2004 hasta enero de 2010.",
          de: "Der Bau des Burj Khalifa dauerte etwa 6 Jahre, von Januar 2004 bis Januar 2010.",
          nl: "De bouw van de Burj Khalifa duurde ongeveer 6 jaar, van januari 2004 tot januari 2010."
        }
      }
    ]
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
  if (typeof window !== 'undefined') {
    window.level1Data = level1;
  }
  return level1;
})();
