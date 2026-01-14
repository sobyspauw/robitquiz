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
      },
      {
        question: {
          en: "What type of building is the Burj Khalifa?",
          es: "¿Qué tipo de edificio es el Burj Khalifa?",
          de: "Was für ein Gebäude ist der Burj Khalifa?",
          nl: "Wat voor soort gebouw is de Burj Khalifa?"
        },
        options: [
          {
            en: "Skyscraper",
            es: "Rascacielos",
            de: "Wolkenkratzer",
            nl: "Wolkenkrabber"
          },
          {
            en: "Bridge",
            es: "Puente",
            de: "Brücke",
            nl: "Brug"
          },
          {
            en: "Palace",
            es: "Palacio",
            de: "Palast",
            nl: "Paleis"
          },
          {
            en: "Stadium",
            es: "Estadio",
            de: "Stadion",
            nl: "Stadion"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Burj Khalifa is a skyscraper, the tallest building in the world at 828 meters.",
          es: "El Burj Khalifa es un rascacielos, el edificio más alto del mundo con 828 metros.",
          de: "Der Burj Khalifa ist ein Wolkenkratzer, das höchste Gebäude der Welt mit 828 Metern.",
          nl: "De Burj Khalifa is een wolkenkrabber, het hoogste gebouw ter wereld met 828 meter."
        }
      },
      {
        question: {
          en: "What color is the exterior of the Burj Khalifa primarily?",
          es: "¿De qué color es principalmente el exterior del Burj Khalifa?",
          de: "Welche Farbe hat die Außenseite des Burj Khalifa hauptsächlich?",
          nl: "Welke kleur heeft de buitenkant van de Burj Khalifa voornamelijk?"
        },
        options: [
          {
            en: "Red",
            es: "Rojo",
            de: "Rot",
            nl: "Rood"
          },
          {
            en: "Silver/reflective",
            es: "Plateado/reflectante",
            de: "Silber/reflektierend",
            nl: "Zilver/reflecterend"
          },
          {
            en: "Black",
            es: "Negro",
            de: "Schwarz",
            nl: "Zwart"
          },
          {
            en: "Green",
            es: "Verde",
            de: "Grün",
            nl: "Groen"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa has a silver, reflective exterior made of glass and steel panels.",
          es: "El Burj Khalifa tiene un exterior plateado y reflectante hecho de paneles de vidrio y acero.",
          de: "Der Burj Khalifa hat eine silberne, reflektierende Außenseite aus Glas- und Stahlpaneelen.",
          nl: "De Burj Khalifa heeft een zilverkleurige, reflecterende buitenkant gemaakt van glas en stalen panelen."
        }
      },
      {
        question: {
          en: "What was the original name before it became Burj Khalifa?",
          es: "¿Cuál era el nombre original antes de convertirse en Burj Khalifa?",
          de: "Wie hieß es ursprünglich, bevor es Burj Khalifa wurde?",
          nl: "Wat was de oorspronkelijke naam voordat het Burj Khalifa werd?"
        },
        options: [
          {
            en: "Burj Dubai",
            es: "Burj Dubai",
            de: "Burj Dubai",
            nl: "Burj Dubai"
          },
          {
            en: "Dubai Tower",
            es: "Torre Dubai",
            de: "Dubai Turm",
            nl: "Dubai Toren"
          },
          {
            en: "Burj Emirates",
            es: "Burj Emirates",
            de: "Burj Emirates",
            nl: "Burj Emirates"
          },
          {
            en: "Sky Tower",
            es: "Torre del Cielo",
            de: "Himmelsturm",
            nl: "Luchttoren"
          }
        ],
        correct: 0,
        explanation: {
          en: "The building was originally called Burj Dubai during construction, renamed at opening in 2010.",
          es: "El edificio se llamaba originalmente Burj Dubai durante la construcción, renombrado en la inauguración de 2010.",
          de: "Das Gebäude hieß während des Baus ursprünglich Burj Dubai und wurde bei der Eröffnung 2010 umbenannt.",
          nl: "Het gebouw heette oorspronkelijk Burj Dubai tijdens de bouw, hernoemd bij de opening in 2010."
        }
      },
      {
        question: {
          en: "Which region of the world is the Burj Khalifa located?",
          es: "¿En qué región del mundo se encuentra el Burj Khalifa?",
          de: "In welcher Region der Welt befindet sich der Burj Khalifa?",
          nl: "In welke regio van de wereld staat de Burj Khalifa?"
        },
        options: [
          {
            en: "Europe",
            es: "Europa",
            de: "Europa",
            nl: "Europa"
          },
          {
            en: "Asia",
            es: "Asia",
            de: "Asien",
            nl: "Azië"
          },
          {
            en: "Middle East",
            es: "Medio Oriente",
            de: "Naher Osten",
            nl: "Midden-Oosten"
          },
          {
            en: "Africa",
            es: "África",
            de: "Afrika",
            nl: "Afrika"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa is located in Dubai, in the Middle East region.",
          es: "El Burj Khalifa está ubicado en Dubái, en la región del Medio Oriente.",
          de: "Der Burj Khalifa befindet sich in Dubai, in der Region Naher Osten.",
          nl: "De Burj Khalifa staat in Dubai, in de regio Midden-Oosten."
        }
      },
      {
        question: {
          en: "Can visitors go to the top of the Burj Khalifa?",
          es: "¿Pueden los visitantes subir a la cima del Burj Khalifa?",
          de: "Können Besucher auf die Spitze des Burj Khalifa gehen?",
          nl: "Kunnen bezoekers naar de top van de Burj Khalifa gaan?"
        },
        options: [
          {
            en: "No, it's closed to public",
            es: "No, está cerrado al público",
            de: "Nein, es ist für die Öffentlichkeit geschlossen",
            nl: "Nee, het is gesloten voor publiek"
          },
          {
            en: "Yes, to observation decks",
            es: "Sí, a los miradores",
            de: "Ja, zu Aussichtsplattformen",
            nl: "Ja, naar observatiedekken"
          },
          {
            en: "Only for residents",
            es: "Solo para residentes",
            de: "Nur für Bewohner",
            nl: "Alleen voor bewoners"
          },
          {
            en: "Only by helicopter",
            es: "Solo en helicóptero",
            de: "Nur mit Hubschrauber",
            nl: "Alleen per helikopter"
          }
        ],
        correct: 1,
        explanation: {
          en: "Visitors can access observation decks on floors 124, 125, and 148 to enjoy panoramic views.",
          es: "Los visitantes pueden acceder a los miradores en los pisos 124, 125 y 148 para disfrutar de vistas panorámicas.",
          de: "Besucher können die Aussichtsplattformen in den Stockwerken 124, 125 und 148 besuchen, um Panoramablicke zu genießen.",
          nl: "Bezoekers hebben toegang tot observatiedekken op verdiepingen 124, 125 en 148 om te genieten van panoramische uitzichten."
        }
      },
      {
        question: {
          en: "What area of Dubai is the Burj Khalifa in?",
          es: "¿En qué área de Dubái está el Burj Khalifa?",
          de: "In welchem Bereich von Dubai befindet sich der Burj Khalifa?",
          nl: "In welk gebied van Dubai staat de Burj Khalifa?"
        },
        options: [
          {
            en: "Dubai Marina",
            es: "Dubai Marina",
            de: "Dubai Marina",
            nl: "Dubai Marina"
          },
          {
            en: "Downtown Dubai",
            es: "Centro de Dubái",
            de: "Downtown Dubai",
            nl: "Downtown Dubai"
          },
          {
            en: "Jumeirah",
            es: "Jumeirah",
            de: "Jumeirah",
            nl: "Jumeirah"
          },
          {
            en: "Deira",
            es: "Deira",
            de: "Deira",
            nl: "Deira"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa is located in Downtown Dubai, a major development area in the city.",
          es: "El Burj Khalifa está ubicado en el centro de Dubái, una importante área de desarrollo en la ciudad.",
          de: "Der Burj Khalifa befindet sich in Downtown Dubai, einem wichtigen Entwicklungsgebiet der Stadt.",
          nl: "De Burj Khalifa staat in Downtown Dubai, een belangrijk ontwikkelingsgebied in de stad."
        }
      },
      {
        question: {
          en: "How does the Burj Khalifa rank among world's tallest buildings?",
          es: "¿Cómo se clasifica el Burj Khalifa entre los edificios más altos del mundo?",
          de: "Wie rangiert der Burj Khalifa unter den höchsten Gebäuden der Welt?",
          nl: "Hoe staat de Burj Khalifa gerangschikt tussen 's werelds hoogste gebouwen?"
        },
        options: [
          {
            en: "5th tallest",
            es: "5to más alto",
            de: "5. höchste",
            nl: "5e hoogste"
          },
          {
            en: "3rd tallest",
            es: "3ro más alto",
            de: "3. höchste",
            nl: "3e hoogste"
          },
          {
            en: "2nd tallest",
            es: "2do más alto",
            de: "2. höchste",
            nl: "2e hoogste"
          },
          {
            en: "1st tallest",
            es: "1ro más alto",
            de: "1. höchste",
            nl: "1e hoogste"
          }
        ],
        correct: 3,
        explanation: {
          en: "The Burj Khalifa is the tallest building in the world since its completion in 2010.",
          es: "El Burj Khalifa es el edificio más alto del mundo desde su finalización en 2010.",
          de: "Der Burj Khalifa ist seit seiner Fertigstellung im Jahr 2010 das höchste Gebäude der Welt.",
          nl: "De Burj Khalifa is het hoogste gebouw ter wereld sinds de voltooiing in 2010."
        }
      },
      {
        question: {
          en: "What is at the base of the Burj Khalifa?",
          es: "¿Qué hay en la base del Burj Khalifa?",
          de: "Was befindet sich an der Basis des Burj Khalifa?",
          nl: "Wat bevindt zich aan de basis van de Burj Khalifa?"
        },
        options: [
          {
            en: "A park",
            es: "Un parque",
            de: "Ein Park",
            nl: "Een park"
          },
          {
            en: "The Dubai Mall and fountains",
            es: "El Dubai Mall y fuentes",
            de: "Die Dubai Mall und Springbrunnen",
            nl: "De Dubai Mall en fonteinen"
          },
          {
            en: "A beach",
            es: "Una playa",
            de: "Ein Strand",
            nl: "Een strand"
          },
          {
            en: "A desert",
            es: "Un desierto",
            de: "Eine Wüste",
            nl: "Een woestijn"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Dubai Mall and the famous Dubai Fountain are located at the base of the Burj Khalifa.",
          es: "El Dubai Mall y la famosa Fuente de Dubái están ubicados en la base del Burj Khalifa.",
          de: "Die Dubai Mall und der berühmte Dubai Fountain befinden sich an der Basis des Burj Khalifa.",
          nl: "De Dubai Mall en de beroemde Dubai Fountain bevinden zich aan de basis van de Burj Khalifa."
        }
      },
      {
        question: {
          en: "Is the Burj Khalifa taller than the Eiffel Tower?",
          es: "¿Es el Burj Khalifa más alto que la Torre Eiffel?",
          de: "Ist der Burj Khalifa höher als der Eiffelturm?",
          nl: "Is de Burj Khalifa hoger dan de Eiffeltoren?"
        },
        options: [
          {
            en: "No, shorter",
            es: "No, más bajo",
            de: "Nein, niedriger",
            nl: "Nee, lager"
          },
          {
            en: "Same height",
            es: "Misma altura",
            de: "Gleiche Höhe",
            nl: "Zelfde hoogte"
          },
          {
            en: "Yes, much taller",
            es: "Sí, mucho más alto",
            de: "Ja, viel höher",
            nl: "Ja, veel hoger"
          },
          {
            en: "Slightly taller",
            es: "Ligeramente más alto",
            de: "Etwas höher",
            nl: "Iets hoger"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa at 828m is almost 3 times taller than the Eiffel Tower at 330m.",
          es: "El Burj Khalifa con 828m es casi 3 veces más alto que la Torre Eiffel con 330m.",
          de: "Der Burj Khalifa mit 828m ist fast 3-mal höher als der Eiffelturm mit 330m.",
          nl: "De Burj Khalifa van 828m is bijna 3 keer hoger dan de Eiffeltoren van 330m."
        }
      },
      {
        question: {
          en: "What time of day can you visit the observation decks?",
          es: "¿A qué hora del día puedes visitar los miradores?",
          de: "Zu welcher Tageszeit kann man die Aussichtsplattformen besuchen?",
          nl: "Op welk moment van de dag kun je de observatiedekken bezoeken?"
        },
        options: [
          {
            en: "Only morning",
            es: "Solo por la mañana",
            de: "Nur morgens",
            nl: "Alleen 's ochtends"
          },
          {
            en: "Morning and afternoon",
            es: "Mañana y tarde",
            de: "Morgens und nachmittags",
            nl: "Ochtend en middag"
          },
          {
            en: "All day and evening",
            es: "Todo el día y la noche",
            de: "Den ganzen Tag und Abend",
            nl: "De hele dag en avond"
          },
          {
            en: "Only at sunset",
            es: "Solo al atardecer",
            de: "Nur bei Sonnenuntergang",
            nl: "Alleen bij zonsondergang"
          }
        ],
        correct: 2,
        explanation: {
          en: "The observation decks are open from early morning until late evening, offering views at different times.",
          es: "Los miradores están abiertos desde temprano en la mañana hasta tarde en la noche, ofreciendo vistas en diferentes momentos.",
          de: "Die Aussichtsplattformen sind von früh morgens bis spät abends geöffnet und bieten Aussichten zu verschiedenen Zeiten.",
          nl: "De observatiedekken zijn open van vroeg in de ochtend tot laat in de avond, met uitzichten op verschillende momenten."
        }
      },
      {
        question: {
          en: "What can you see from the top of the Burj Khalifa?",
          es: "¿Qué puedes ver desde la cima del Burj Khalifa?",
          de: "Was kann man von der Spitze des Burj Khalifa sehen?",
          nl: "Wat kun je zien vanaf de top van de Burj Khalifa?"
        },
        options: [
          {
            en: "Only the building itself",
            es: "Solo el edificio mismo",
            de: "Nur das Gebäude selbst",
            nl: "Alleen het gebouw zelf"
          },
          {
            en: "Dubai city and desert",
            es: "Ciudad de Dubái y desierto",
            de: "Dubai Stadt und Wüste",
            nl: "Dubai stad en woestijn"
          },
          {
            en: "Only the ocean",
            es: "Solo el océano",
            de: "Nur der Ozean",
            nl: "Alleen de oceaan"
          },
          {
            en: "Other countries",
            es: "Otros países",
            de: "Andere Länder",
            nl: "Andere landen"
          }
        ],
        correct: 1,
        explanation: {
          en: "From the top, visitors can see panoramic views of Dubai city, the desert, and the Arabian Gulf.",
          es: "Desde la cima, los visitantes pueden ver vistas panorámicas de la ciudad de Dubái, el desierto y el Golfo Arábigo.",
          de: "Von der Spitze aus können Besucher Panoramablicke auf die Stadt Dubai, die Wüste und den Arabischen Golf genießen.",
          nl: "Vanaf de top kunnen bezoekers panoramische uitzichten zien op Dubai stad, de woestijn en de Arabische Golf."
        }
      },
      {
        question: {
          en: "What transport do people use inside the Burj Khalifa?",
          es: "¿Qué transporte usa la gente dentro del Burj Khalifa?",
          de: "Welches Transportmittel nutzen Menschen im Burj Khalifa?",
          nl: "Welk vervoer gebruiken mensen in de Burj Khalifa?"
        },
        options: [
          {
            en: "Only stairs",
            es: "Solo escaleras",
            de: "Nur Treppen",
            nl: "Alleen trappen"
          },
          {
            en: "Elevators",
            es: "Ascensores",
            de: "Aufzüge",
            nl: "Liften"
          },
          {
            en: "Helicopters",
            es: "Helicópteros",
            de: "Hubschrauber",
            nl: "Helikopters"
          },
          {
            en: "Cable cars",
            es: "Teleféricos",
            de: "Seilbahnen",
            nl: "Kabelbanen"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa has 57 high-speed elevators that transport people between floors.",
          es: "El Burj Khalifa tiene 57 ascensores de alta velocidad que transportan personas entre pisos.",
          de: "Der Burj Khalifa verfügt über 57 Hochgeschwindigkeitsaufzüge, die Menschen zwischen den Stockwerken transportieren.",
          nl: "De Burj Khalifa heeft 57 hogesnelheidsliften die mensen tussen verdiepingen vervoeren."
        }
      },
      {
        question: {
          en: "Does the Burj Khalifa have windows?",
          es: "¿El Burj Khalifa tiene ventanas?",
          de: "Hat der Burj Khalifa Fenster?",
          nl: "Heeft de Burj Khalifa ramen?"
        },
        options: [
          {
            en: "No windows",
            es: "Sin ventanas",
            de: "Keine Fenster",
            nl: "Geen ramen"
          },
          {
            en: "Only at the top",
            es: "Solo en la cima",
            de: "Nur oben",
            nl: "Alleen bovenaan"
          },
          {
            en: "Yes, thousands of glass panels",
            es: "Sí, miles de paneles de vidrio",
            de: "Ja, Tausende von Glaspaneelen",
            nl: "Ja, duizenden glazen panelen"
          },
          {
            en: "Only small openings",
            es: "Solo pequeñas aberturas",
            de: "Nur kleine Öffnungen",
            nl: "Alleen kleine openingen"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa has about 26,000 glass panels covering the exterior, providing natural light and views.",
          es: "El Burj Khalifa tiene aproximadamente 26,000 paneles de vidrio cubriendo el exterior, proporcionando luz natural y vistas.",
          de: "Der Burj Khalifa hat etwa 26.000 Glaspaneele, die die Außenseite bedecken und natürliches Licht und Aussichten bieten.",
          nl: "De Burj Khalifa heeft ongeveer 26.000 glazen panelen die de buitenkant bedekken, wat natuurlijk licht en uitzicht biedt."
        }
      },
      {
        question: {
          en: "What famous fashion designer designed the hotel inside?",
          es: "¿Qué famoso diseñador de moda diseñó el hotel interior?",
          de: "Welcher berühmte Modedesigner entwarf das Hotel im Inneren?",
          nl: "Welke beroemde modeontwerper ontwierp het hotel binnenin?"
        },
        options: [
          {
            en: "Versace",
            es: "Versace",
            de: "Versace",
            nl: "Versace"
          },
          {
            en: "Giorgio Armani",
            es: "Giorgio Armani",
            de: "Giorgio Armani",
            nl: "Giorgio Armani"
          },
          {
            en: "Gucci",
            es: "Gucci",
            de: "Gucci",
            nl: "Gucci"
          },
          {
            en: "Prada",
            es: "Prada",
            de: "Prada",
            nl: "Prada"
          }
        ],
        correct: 1,
        explanation: {
          en: "Giorgio Armani designed the Armani Hotel Dubai located on the lower floors of the Burj Khalifa.",
          es: "Giorgio Armani diseñó el Armani Hotel Dubai ubicado en los pisos inferiores del Burj Khalifa.",
          de: "Giorgio Armani entwarf das Armani Hotel Dubai in den unteren Stockwerken des Burj Khalifa.",
          nl: "Giorgio Armani ontwierp het Armani Hotel Dubai gelegen op de lagere verdiepingen van de Burj Khalifa."
        }
      },
      {
        question: {
          en: "How many countries were workers from during construction?",
          es: "¿De cuántos países eran los trabajadores durante la construcción?",
          de: "Aus wie vielen Ländern kamen die Arbeiter während des Baus?",
          nl: "Uit hoeveel landen kwamen de werknemers tijdens de bouw?"
        },
        options: [
          {
            en: "20 countries",
            es: "20 países",
            de: "20 Länder",
            nl: "20 landen"
          },
          {
            en: "50 countries",
            es: "50 países",
            de: "50 Länder",
            nl: "50 landen"
          },
          {
            en: "Over 100 countries",
            es: "Más de 100 países",
            de: "Über 100 Länder",
            nl: "Meer dan 100 landen"
          },
          {
            en: "Only UAE",
            es: "Solo EAU",
            de: "Nur VAE",
            nl: "Alleen VAE"
          }
        ],
        correct: 2,
        explanation: {
          en: "Workers from over 100 different countries helped build the Burj Khalifa, making it a global project.",
          es: "Trabajadores de más de 100 países diferentes ayudaron a construir el Burj Khalifa, convirtiéndolo en un proyecto global.",
          de: "Arbeiter aus über 100 verschiedenen Ländern halfen beim Bau des Burj Khalifa und machten es zu einem globalen Projekt.",
          nl: "Werknemers uit meer dan 100 verschillende landen hielpen de Burj Khalifa te bouwen, waardoor het een wereldwijd project werd."
        }
      },
      {
        question: {
          en: "What are the floors of the Burj Khalifa used for?",
          es: "¿Para qué se utilizan los pisos del Burj Khalifa?",
          de: "Wofür werden die Stockwerke des Burj Khalifa genutzt?",
          nl: "Waarvoor worden de verdiepingen van de Burj Khalifa gebruikt?"
        },
        options: [
          {
            en: "Only offices",
            es: "Solo oficinas",
            de: "Nur Büros",
            nl: "Alleen kantoren"
          },
          {
            en: "Homes, hotels, offices, and viewing areas",
            es: "Hogares, hoteles, oficinas y áreas de observación",
            de: "Wohnungen, Hotels, Büros und Aussichtsbereiche",
            nl: "Woningen, hotels, kantoren en observatiegebieden"
          },
          {
            en: "Only a hotel",
            es: "Solo un hotel",
            de: "Nur ein Hotel",
            nl: "Alleen een hotel"
          },
          {
            en: "Only apartments",
            es: "Solo apartamentos",
            de: "Nur Wohnungen",
            nl: "Alleen appartementen"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa is mixed-use with residences, hotel, offices, and observation decks on different floors.",
          es: "El Burj Khalifa es de uso mixto con residencias, hotel, oficinas y miradores en diferentes pisos.",
          de: "Der Burj Khalifa hat gemischte Nutzung mit Wohnungen, Hotel, Büros und Aussichtsplattformen auf verschiedenen Stockwerken.",
          nl: "De Burj Khalifa heeft gemengd gebruik met woningen, hotel, kantoren en observatiedekken op verschillende verdiepingen."
        }
      },
      {
        question: {
          en: "What makes the Burj Khalifa special?",
          es: "¿Qué hace especial al Burj Khalifa?",
          de: "Was macht den Burj Khalifa besonders?",
          nl: "Wat maakt de Burj Khalifa bijzonder?"
        },
        options: [
          {
            en: "Oldest building",
            es: "Edificio más antiguo",
            de: "Ältestes Gebäude",
            nl: "Oudste gebouw"
          },
          {
            en: "Tallest building in the world",
            es: "Edificio más alto del mundo",
            de: "Höchstes Gebäude der Welt",
            nl: "Hoogste gebouw ter wereld"
          },
          {
            en: "Widest building",
            es: "Edificio más ancho",
            de: "Breitestes Gebäude",
            nl: "Breedste gebouw"
          },
          {
            en: "First building ever",
            es: "Primer edificio jamás",
            de: "Erstes Gebäude überhaupt",
            nl: "Eerste gebouw ooit"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa is the tallest building in the world, holding multiple height records.",
          es: "El Burj Khalifa es el edificio más alto del mundo, manteniendo múltiples récords de altura.",
          de: "Der Burj Khalifa ist das höchste Gebäude der Welt und hält mehrere Höhenrekorde.",
          nl: "De Burj Khalifa is het hoogste gebouw ter wereld, met meerdere hoogterecords."
        }
      },
      {
        question: {
          en: "Does the Burj Khalifa light up at night?",
          es: "¿Se ilumina el Burj Khalifa por la noche?",
          de: "Leuchtet der Burj Khalifa nachts?",
          nl: "Licht de Burj Khalifa 's nachts op?"
        },
        options: [
          {
            en: "No, always dark",
            es: "No, siempre oscuro",
            de: "Nein, immer dunkel",
            nl: "Nee, altijd donker"
          },
          {
            en: "Only the top lights up",
            es: "Solo la cima se ilumina",
            de: "Nur die Spitze leuchtet",
            nl: "Alleen de top licht op"
          },
          {
            en: "Yes, with LED light shows",
            es: "Sí, con espectáculos de luces LED",
            de: "Ja, mit LED-Lichtshows",
            nl: "Ja, met LED-lichtshows"
          },
          {
            en: "Only on holidays",
            es: "Solo en días festivos",
            de: "Nur an Feiertagen",
            nl: "Alleen op feestdagen"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa features spectacular LED light shows on its exterior every evening.",
          es: "El Burj Khalifa presenta espectaculares espectáculos de luces LED en su exterior todas las noches.",
          de: "Der Burj Khalifa bietet jeden Abend spektakuläre LED-Lichtshows an seiner Außenseite.",
          nl: "De Burj Khalifa heeft elke avond spectaculaire LED-lichtshows aan de buitenkant."
        }
      },
      {
        question: {
          en: "Is the Burj Khalifa in a hot or cold climate?",
          es: "¿Está el Burj Khalifa en un clima cálido o frío?",
          de: "Befindet sich der Burj Khalifa in einem heißen oder kalten Klima?",
          nl: "Staat de Burj Khalifa in een warm of koud klimaat?"
        },
        options: [
          {
            en: "Cold climate",
            es: "Clima frío",
            de: "Kaltes Klima",
            nl: "Koud klimaat"
          },
          {
            en: "Hot desert climate",
            es: "Clima desértico cálido",
            de: "Heißes Wüstenklima",
            nl: "Heet woestijnklimaat"
          },
          {
            en: "Tropical climate",
            es: "Clima tropical",
            de: "Tropisches Klima",
            nl: "Tropisch klimaat"
          },
          {
            en: "Arctic climate",
            es: "Clima ártico",
            de: "Arktisches Klima",
            nl: "Arctisch klimaat"
          }
        ],
        correct: 1,
        explanation: {
          en: "Dubai has a hot desert climate with very high temperatures, especially in summer months.",
          es: "Dubái tiene un clima desértico cálido con temperaturas muy altas, especialmente en los meses de verano.",
          de: "Dubai hat ein heißes Wüstenklima mit sehr hohen Temperaturen, besonders in den Sommermonaten.",
          nl: "Dubai heeft een heet woestijnklimaat met zeer hoge temperaturen, vooral in de zomermaanden."
        }
      },
      {
        question: {
          en: "Does the Burj Khalifa have a swimming pool?",
          es: "¿Tiene el Burj Khalifa una piscina?",
          de: "Hat der Burj Khalifa ein Schwimmbad?",
          nl: "Heeft de Burj Khalifa een zwembad?"
        },
        options: [
          {
            en: "No swimming pools",
            es: "Sin piscinas",
            de: "Keine Schwimmbäder",
            nl: "Geen zwembaden"
          },
          {
            en: "Yes, multiple pools",
            es: "Sí, múltiples piscinas",
            de: "Ja, mehrere Schwimmbäder",
            nl: "Ja, meerdere zwembaden"
          },
          {
            en: "Only for hotel guests",
            es: "Solo para huéspedes del hotel",
            de: "Nur für Hotelgäste",
            nl: "Alleen voor hotelgasten"
          },
          {
            en: "On the roof only",
            es: "Solo en el techo",
            de: "Nur auf dem Dach",
            nl: "Alleen op het dak"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa has multiple swimming pools for residents, hotel guests, and fitness facilities.",
          es: "El Burj Khalifa tiene múltiples piscinas para residentes, huéspedes del hotel e instalaciones de fitness.",
          de: "Der Burj Khalifa hat mehrere Schwimmbäder für Bewohner, Hotelgäste und Fitnesseinrichtungen.",
          nl: "De Burj Khalifa heeft meerdere zwembaden voor bewoners, hotelgasten en fitnessvoorzieningen."
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
