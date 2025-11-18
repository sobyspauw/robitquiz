(function() {
  const level1 = {
    name: {
      en: "Adventure Books - Beginner",
      es: "Libros de Aventuras - Principiante",
      de: "Abenteuer Bücher - Anfänger",
      nl: "Avonturenboeken - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who wrote 'Robinson Crusoe'?",
          es: "¿Quién escribió 'Robinson Crusoe'?",
          de: "Wer schrieb 'Robinson Crusoe'?",
          nl: "Wie schreef 'Robinson Crusoe'?"
        },
        options: [
          { en: "Daniel Defoe", es: "Daniel Defoe", de: "Daniel Defoe", nl: "Daniel Defoe" },
          { en: "Robert Louis Stevenson", es: "Robert Louis Stevenson", de: "Robert Louis Stevenson", nl: "Robert Louis Stevenson" },
          { en: "Jules Verne", es: "Jules Verne", de: "Jules Verne", nl: "Jules Verne" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" }
        ],
        correct: 0,
        explanation: {
          en: "Daniel Defoe wrote 'Robinson Crusoe' in 1719, one of the first English novels and a classic adventure story about a man stranded on a desert island.",
          es: "Daniel Defoe escribió 'Robinson Crusoe' en 1719, una de las primeras novelas inglesas y una historia de aventuras clásica sobre un hombre varado en una isla desierta.",
          de: "Daniel Defoe schrieb 'Robinson Crusoe' 1719, einen der ersten englischen Romane und eine klassische Abenteuergeschichte über einen Mann, der auf einer einsamen Insel gestrandet ist.",
          nl: "Daniel Defoe schreef 'Robinson Crusoe' in 1719, een van de eerste Engelse romans en een klassiek avonturenverhaal over een man gestrand op een onbewoond eiland."
        }
      },
      {
        question: {
          en: "In which book does Captain Ahab hunt a white whale?",
          es: "¿En qué libro el Capitán Ahab caza una ballena blanca?",
          de: "In welchem Buch jagt Kapitän Ahab einen weißen Wal?",
          nl: "In welk boek jaagt Kapitein Ahab op een witte walvis?"
        },
        options: [
          { en: "Moby Dick", es: "Moby Dick", de: "Moby Dick", nl: "Moby Dick" },
          { en: "20,000 Leagues Under the Sea", es: "20,000 leguas de viaje submarino", de: "20.000 Meilen unter dem Meer", nl: "20.000 mijlen onder zee" },
          { en: "Treasure Island", es: "La isla del tesoro", de: "Die Schatzinsel", nl: "Schateiland" },
          { en: "The Old Man and the Sea", es: "El viejo y el mar", de: "Der alte Mann und das Meer", nl: "De oude man en de zee" }
        ],
        correct: 0,
        explanation: {
          en: "Herman Melville's 'Moby Dick' (1851) tells the story of Captain Ahab's obsessive quest to hunt the white whale Moby Dick.",
          es: "'Moby Dick' de Herman Melville (1851) cuenta la historia de la búsqueda obsesiva del Capitán Ahab para cazar la ballena blanca Moby Dick.",
          de: "Herman Melvilles 'Moby Dick' (1851) erzählt die Geschichte von Kapitän Ahabs obsessiver Jagd auf den weißen Wal Moby Dick.",
          nl: "Herman Melville's 'Moby Dick' (1851) vertelt het verhaal van Kapitein Ahabs obsessieve zoektocht naar de witte walvis Moby Dick."
        }
      },
      {
        question: {
          en: "Who wrote 'Treasure Island'?",
          es: "¿Quién escribió 'La Isla del Tesoro'?",
          de: "Wer schrieb 'Die Schatzinsel'?",
          nl: "Wie schreef 'Schateiland'?"
        },
        options: [
          { en: "Robert Louis Stevenson", es: "Robert Louis Stevenson", de: "Robert Louis Stevenson", nl: "Robert Louis Stevenson" },
          { en: "Daniel Defoe", es: "Daniel Defoe", de: "Daniel Defoe", nl: "Daniel Defoe" },
          { en: "Edgar Allan Poe", es: "Edgar Allan Poe", de: "Edgar Allan Poe", nl: "Edgar Allan Poe" },
          { en: "Alexandre Dumas", es: "Alexandre Dumas", de: "Alexandre Dumas", nl: "Alexandre Dumas" }
        ],
        correct: 0,
        explanation: {
          en: "Robert Louis Stevenson wrote 'Treasure Island' in 1883, a classic pirate adventure story featuring young Jim Hawkins and Long John Silver.",
          es: "Robert Louis Stevenson escribió 'La Isla del Tesoro' en 1883, una historia clásica de aventuras piratas que presenta al joven Jim Hawkins y Long John Silver.",
          de: "Robert Louis Stevenson schrieb 'Die Schatzinsel' 1883, eine klassische Piraten-Abenteuergeschichte mit dem jungen Jim Hawkins und Long John Silver.",
          nl: "Robert Louis Stevenson schreef 'Schateiland' in 1883, een klassiek piratenavontuur met de jonge Jim Hawkins en Long John Silver."
        }
      },
      {
        question: {
          en: "In 'Around the World in Eighty Days', what is the name of the main character?",
          es: "En 'La vuelta al mundo en ochenta días', ¿cuál es el nombre del personaje principal?",
          de: "In 'In 80 Tagen um die Welt', wie heißt die Hauptfigur?",
          nl: "In 'De reis om de wereld in tachtig dagen', wat is de naam van het hoofdpersonage?"
        },
        options: [
          { en: "Phileas Fogg", es: "Phileas Fogg", de: "Phileas Fogg", nl: "Phileas Fogg" },
          { en: "Captain Nemo", es: "Capitán Nemo", de: "Kapitän Nemo", nl: "Kapitein Nemo" },
          { en: "Passepartout", es: "Passepartout", de: "Passepartout", nl: "Passepartout" },
          { en: "Professor Aronnax", es: "Profesor Aronnax", de: "Professor Aronnax", nl: "Professor Aronnax" }
        ],
        correct: 0,
        explanation: {
          en: "Phileas Fogg is the protagonist of Jules Verne's 'Around the World in Eighty Days' (1873), a gentleman who attempts to circumnavigate the globe in 80 days.",
          es: "Phileas Fogg es el protagonista de 'La vuelta al mundo en ochenta días' de Jules Verne (1873), un caballero que intenta dar la vuelta al mundo en 80 días.",
          de: "Phileas Fogg ist der Protagonist von Jules Vernes 'In 80 Tagen um die Welt' (1873), ein Gentleman, der versucht, die Welt in 80 Tagen zu umrunden.",
          nl: "Phileas Fogg is de hoofdpersoon van Jules Verne's 'De reis om de wereld in tachtig dagen' (1873), een heer die probeert de wereld in 80 dagen rond te reizen."
        }
      },
      {
        question: {
          en: "Which author created the character Indiana Jones in literature before the movies?",
          es: "¿Qué autor creó el personaje de Indiana Jones en la literatura antes de las películas?",
          de: "Welcher Autor schuf die Figur Indiana Jones in der Literatur vor den Filmen?",
          nl: "Welke auteur creëerde het personage Indiana Jones in de literatuur voor de films?"
        },
        options: [
          { en: "None - Indiana Jones was created for movies first", es: "Ninguno - Indiana Jones fue creado primero para películas", de: "Keiner - Indiana Jones wurde zuerst für Filme geschaffen", nl: "Geen - Indiana Jones werd eerst voor films gecreëerd" },
          { en: "Clive Cussler", es: "Clive Cussler", de: "Clive Cussler", nl: "Clive Cussler" },
          { en: "Tom Clancy", es: "Tom Clancy", de: "Tom Clancy", nl: "Tom Clancy" },
          { en: "Robert Ludlum", es: "Robert Ludlum", de: "Robert Ludlum", nl: "Robert Ludlum" }
        ],
        correct: 0,
        explanation: {
          en: "Indiana Jones was actually created by George Lucas and Steven Spielberg for the 1981 film 'Raiders of the Lost Ark', not from literature.",
          es: "Indiana Jones fue creado por George Lucas y Steven Spielberg para la película de 1981 'En busca del arca perdida', no de la literatura.",
          de: "Indiana Jones wurde von George Lucas und Steven Spielberg für den Film 'Jäger des verlorenen Schatzes' von 1981 geschaffen, nicht aus der Literatur.",
          nl: "Indiana Jones werd gecreëerd door George Lucas en Steven Spielberg voor de film 'Raiders of the Lost Ark' uit 1981, niet uit de literatuur."
        }
      },
      {
        question: {
          en: "Who wrote 'The Adventures of Tom Sawyer'?",
          es: "¿Quién escribió 'Las aventuras de Tom Sawyer'?",
          de: "Wer schrieb 'Die Abenteuer von Tom Sawyer'?",
          nl: "Wie schreef 'De avonturen van Tom Sawyer'?"
        },
        options: [
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" },
          { en: "Louisa May Alcott", es: "Louisa May Alcott", de: "Louisa May Alcott", nl: "Louisa May Alcott" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "Robert Louis Stevenson", es: "Robert Louis Stevenson", de: "Robert Louis Stevenson", nl: "Robert Louis Stevenson" }
        ],
        correct: 0,
        explanation: {
          en: "Mark Twain (Samuel Clemens) wrote 'The Adventures of Tom Sawyer' in 1876, a classic American adventure novel set along the Mississippi River.",
          es: "Mark Twain (Samuel Clemens) escribió 'Las aventuras de Tom Sawyer' en 1876, una novela de aventuras americana clásica ambientada a lo largo del río Mississippi.",
          de: "Mark Twain (Samuel Clemens) schrieb 'Die Abenteuer von Tom Sawyer' 1876, einen klassischen amerikanischen Abenteuerroman am Mississippi.",
          nl: "Mark Twain (Samuel Clemens) schreef 'De avonturen van Tom Sawyer' in 1876, een klassieke Amerikaanse avonturenroman langs de Mississippi rivier."
        }
      },
      {
        question: {
          en: "In which novel does the character Santiago appear as an old fisherman?",
          es: "¿En qué novela aparece el personaje Santiago como un viejo pescador?",
          de: "In welchem Roman erscheint die Figur Santiago als alter Fischer?",
          nl: "In welke roman verschijnt het personage Santiago als een oude visser?"
        },
        options: [
          { en: "The Old Man and the Sea", es: "El viejo y el mar", de: "Der alte Mann und das Meer", nl: "De oude man en de zee" },
          { en: "For Whom the Bell Tolls", es: "Por quién doblan las campanas", de: "Wem die Stunde schlägt", nl: "Voor wie de klok luidt" },
          { en: "The Sun Also Rises", es: "También sale el sol", de: "Fiesta", nl: "En de zon gaat ook op" },
          { en: "A Farewell to Arms", es: "Adiós a las armas", de: "In einem anderen Land", nl: "Vaarwel wapenen" }
        ],
        correct: 0,
        explanation: {
          en: "Santiago is the protagonist of Ernest Hemingway's 'The Old Man and the Sea' (1952), a story about an aging Cuban fisherman's epic battle with a giant marlin.",
          es: "Santiago es el protagonista de 'El viejo y el mar' de Ernest Hemingway (1952), una historia sobre la batalla épica de un pescador cubano anciano con un marlín gigante.",
          de: "Santiago ist der Protagonist von Ernest Hemingways 'Der alte Mann und das Meer' (1952), eine Geschichte über den epischen Kampf eines alternden kubanischen Fischers mit einem riesigen Marlin.",
          nl: "Santiago is de hoofdpersoon van Ernest Hemingway's 'De oude man en de zee' (1952), een verhaal over de epische strijd van een verouderende Cubaanse visser met een reuzenmarlin."
        }
      },
      {
        question: {
          en: "Who wrote 'The Three Musketeers'?",
          es: "¿Quién escribió 'Los Tres Mosqueteros'?",
          de: "Wer schrieb 'Die drei Musketiere'?",
          nl: "Wie schreef 'De drie musketiers'?"
        },
        options: [
          { en: "Alexandre Dumas", es: "Alexandre Dumas", de: "Alexandre Dumas", nl: "Alexandre Dumas" },
          { en: "Victor Hugo", es: "Victor Hugo", de: "Victor Hugo", nl: "Victor Hugo" },
          { en: "Honoré de Balzac", es: "Honoré de Balzac", de: "Honoré de Balzac", nl: "Honoré de Balzac" },
          { en: "Émile Zola", es: "Émile Zola", de: "Émile Zola", nl: "Émile Zola" }
        ],
        correct: 0,
        explanation: {
          en: "Alexandre Dumas wrote 'The Three Musketeers' in 1844, following the adventures of d'Artagnan and his friends Athos, Porthos, and Aramis in 17th century France.",
          es: "Alexandre Dumas escribió 'Los Tres Mosqueteros' en 1844, siguiendo las aventuras de d'Artagnan y sus amigos Athos, Porthos y Aramis en la Francia del siglo XVII.",
          de: "Alexandre Dumas schrieb 'Die drei Musketiere' 1844, die Abenteuer von d'Artagnan und seinen Freunden Athos, Porthos und Aramis im Frankreich des 17. Jahrhunderts verfolgend.",
          nl: "Alexandre Dumas schreef 'De drie musketiers' in 1844, waarin de avonturen van d'Artagnan en zijn vrienden Athos, Porthos en Aramis in het 17e-eeuwse Frankrijk worden gevolgd."
        }
      },
      {
        question: {
          en: "Which book features the character Long John Silver?",
          es: "¿Qué libro presenta al personaje Long John Silver?",
          de: "Welches Buch zeigt die Figur Long John Silver?",
          nl: "Welk boek toont het personage Long John Silver?"
        },
        options: [
          { en: "Treasure Island", es: "La isla del tesoro", de: "Die Schatzinsel", nl: "Schateiland" },
          { en: "Pirates of the Caribbean", es: "Piratas del Caribe", de: "Fluch der Karibik", nl: "Pirates of the Caribbean" },
          { en: "Captain Blood", es: "Capitán Blood", de: "Captain Blood", nl: "Kapitein Blood" },
          { en: "The Black Pearl", es: "La Perla Negra", de: "Die schwarze Perle", nl: "De zwarte parel" }
        ],
        correct: 0,
        explanation: {
          en: "Long John Silver is the memorable one-legged pirate and antagonist in Robert Louis Stevenson's 'Treasure Island' (1883).",
          es: "Long John Silver es el memorable pirata de una pierna y antagonista en 'La Isla del Tesoro' de Robert Louis Stevenson (1883).",
          de: "Long John Silver ist der unvergessliche einbeinige Pirat und Antagonist in Robert Louis Stevensons 'Die Schatzinsel' (1883).",
          nl: "Long John Silver is de gedenkwaardige eenbenige piraat en antagonist in Robert Louis Stevenson's 'Schateiland' (1883)."
        }
      },
      {
        question: {
          en: "Who wrote 'Journey to the Center of the Earth'?",
          es: "¿Quién escribió 'Viaje al centro de la Tierra'?",
          de: "Wer schrieb 'Die Reise zum Mittelpunkt der Erde'?",
          nl: "Wie schreef 'Reis naar het middelpunt der aarde'?"
        },
        options: [
          { en: "Jules Verne", es: "Jules Verne", de: "Jules Verne", nl: "Jules Verne" },
          { en: "H.G. Wells", es: "H.G. Wells", de: "H.G. Wells", nl: "H.G. Wells" },
          { en: "Edgar Rice Burroughs", es: "Edgar Rice Burroughs", de: "Edgar Rice Burroughs", nl: "Edgar Rice Burroughs" },
          { en: "Arthur Conan Doyle", es: "Arthur Conan Doyle", de: "Arthur Conan Doyle", nl: "Arthur Conan Doyle" }
        ],
        correct: 0,
        explanation: {
          en: "Jules Verne wrote 'Journey to the Center of the Earth' in 1864, a science fiction adventure about Professor Lidenbrock's expedition into the Earth's core.",
          es: "Jules Verne escribió 'Viaje al centro de la Tierra' en 1864, una aventura de ciencia ficción sobre la expedición del Profesor Lidenbrock al núcleo de la Tierra.",
          de: "Jules Verne schrieb 'Die Reise zum Mittelpunkt der Erde' 1864, ein Science-Fiction-Abenteuer über Professor Liddenbrocks Expedition ins Erdinnere.",
          nl: "Jules Verne schreef 'Reis naar het middelpunt der aarde' in 1864, een science fiction avontuur over Professor Lidenbrock's expeditie naar het centrum van de aarde."
        }
      },
      {
        question: {
          en: "In which adventure novel does the character Huckleberry Finn appear?",
          es: "¿En qué novela de aventuras aparece el personaje Huckleberry Finn?",
          de: "In welchem Abenteuerroman erscheint die Figur Huckleberry Finn?",
          nl: "In welke avonturenroman verschijnt het personage Huckleberry Finn?"
        },
        options: [
          { en: "Adventures of Huckleberry Finn", es: "Las aventuras de Huckleberry Finn", de: "Die Abenteuer des Huckleberry Finn", nl: "De avonturen van Huckleberry Finn" },
          { en: "The Adventures of Tom Sawyer", es: "Las aventuras de Tom Sawyer", de: "Die Abenteuer von Tom Sawyer", nl: "De avonturen van Tom Sawyer" },
          { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" },
          { en: "The Prince and the Pauper", es: "El príncipe y el mendigo", de: "Der Prinz und der Bettelknabe", nl: "De prins en de bedelaar" }
        ],
        correct: 2,
        explanation: {
          en: "Huckleberry Finn appears in both 'The Adventures of Tom Sawyer' (1876) and his own book 'Adventures of Huckleberry Finn' (1884), both by Mark Twain.",
          es: "Huckleberry Finn aparece tanto en 'Las aventuras de Tom Sawyer' (1876) como en su propio libro 'Las aventuras de Huckleberry Finn' (1884), ambos de Mark Twain.",
          de: "Huckleberry Finn erscheint sowohl in 'Die Abenteuer von Tom Sawyer' (1876) als auch in seinem eigenen Buch 'Die Abenteuer des Huckleberry Finn' (1884), beide von Mark Twain.",
          nl: "Huckleberry Finn verschijnt zowel in 'De avonturen van Tom Sawyer' (1876) als in zijn eigen boek 'De avonturen van Huckleberry Finn' (1884), beide van Mark Twain."
        }
      },
      {
        question: {
          en: "Who wrote 'The Count of Monte Cristo'?",
          es: "¿Quién escribió 'El Conde de Montecristo'?",
          de: "Wer schrieb 'Der Graf von Monte Cristo'?",
          nl: "Wie schreef 'De graaf van Monte Cristo'?"
        },
        options: [
          { en: "Alexandre Dumas", es: "Alexandre Dumas", de: "Alexandre Dumas", nl: "Alexandre Dumas" },
          { en: "Victor Hugo", es: "Victor Hugo", de: "Victor Hugo", nl: "Victor Hugo" },
          { en: "Gustave Flaubert", es: "Gustave Flaubert", de: "Gustave Flaubert", nl: "Gustave Flaubert" },
          { en: "Stendhal", es: "Stendhal", de: "Stendhal", nl: "Stendhal" }
        ],
        correct: 0,
        explanation: {
          en: "Alexandre Dumas wrote 'The Count of Monte Cristo' in 1844, an adventure story of revenge and redemption featuring Edmond Dantès.",
          es: "Alexandre Dumas escribió 'El Conde de Montecristo' en 1844, una historia de aventuras de venganza y redención que presenta a Edmond Dantès.",
          de: "Alexandre Dumas schrieb 'Der Graf von Monte Cristo' 1844, eine Abenteuergeschichte von Rache und Erlösung mit Edmond Dantès.",
          nl: "Alexandre Dumas schreef 'De graaf van Monte Cristo' in 1844, een avonturenverhaal van wraak en verlossing met Edmond Dantès."
        }
      },
      {
        question: {
          en: "Which book tells the story of a boy raised by wolves in the jungle?",
          es: "¿Qué libro cuenta la historia de un niño criado por lobos en la selva?",
          de: "Welches Buch erzählt die Geschichte eines Jungen, der von Wölfen im Dschungel aufgezogen wurde?",
          nl: "Welk boek vertelt het verhaal van een jongen opgevoed door wolven in de jungle?"
        },
        options: [
          { en: "The Jungle Book", es: "El libro de la selva", de: "Das Dschungelbuch", nl: "Het jungleboek" },
          { en: "Tarzan of the Apes", es: "Tarzán de los simios", de: "Tarzan bei den Affen", nl: "Tarzan van de apen" },
          { en: "Lord of the Flies", es: "El señor de las moscas", de: "Herr der Fliegen", nl: "Heer der vliegen" },
          { en: "Island of the Blue Dolphins", es: "La isla de los delfines azules", de: "Insel der blauen Delphine", nl: "Eiland van de blauwe dolfijnen" }
        ],
        correct: 0,
        explanation: {
          en: "Rudyard Kipling's 'The Jungle Book' (1894) tells the story of Mowgli, a boy raised by wolves in the Indian jungle alongside characters like Baloo and Bagheera.",
          es: "'El libro de la selva' de Rudyard Kipling (1894) cuenta la historia de Mowgli, un niño criado por lobos en la selva india junto a personajes como Baloo y Bagheera.",
          de: "Rudyard Kiplings 'Das Dschungelbuch' (1894) erzählt die Geschichte von Mowgli, einem Jungen, der von Wölfen im indischen Dschungel aufgezogen wurde, zusammen mit Figuren wie Baloo und Bagheera.",
          nl: "Rudyard Kipling's 'Het jungleboek' (1894) vertelt het verhaal van Mowgli, een jongen opgevoed door wolven in de Indiase jungle samen met personages als Baloo en Bagheera."
        }
      },
      {
        question: {
          en: "In 'The Swiss Family Robinson', where does the family get stranded?",
          es: "En 'La familia Robinson suiza', ¿dónde queda varada la familia?",
          de: "In 'Der schweizerische Robinson', wo strandet die Familie?",
          nl: "In 'De Zwitserse familie Robinson', waar raakt de familie gestrand?"
        },
        options: [
          { en: "A deserted island", es: "Una isla desierta", de: "Eine einsame Insel", nl: "Een onbewoond eiland" },
          { en: "In the mountains", es: "En las montañas", de: "In den Bergen", nl: "In de bergen" },
          { en: "In the Amazon rainforest", es: "En la selva amazónica", de: "Im Amazonas-Regenwald", nl: "In het Amazone regenwoud" },
          { en: "On an ice floe", es: "En un témpano de hielo", de: "Auf einer Eisscholle", nl: "Op een ijsschots" }
        ],
        correct: 0,
        explanation: {
          en: "'The Swiss Family Robinson' by Johann David Wyss (1812) tells the story of a family shipwrecked on a deserted island and their survival adventures.",
          es: "'La familia Robinson suiza' de Johann David Wyss (1812) cuenta la historia de una familia náufraga en una isla desierta y sus aventuras de supervivencia.",
          de: "'Der schweizerische Robinson' von Johann David Wyss (1812) erzählt die Geschichte einer Familie, die auf einer einsamen Insel Schiffbruch erleidet und ihre Überlebensabenteuer.",
          nl: "'De Zwitserse familie Robinson' van Johann David Wyss (1812) vertelt het verhaal van een familie die schipbreuk lijdt op een onbewoond eiland en hun overlevingsavonturen."
        }
      },
      {
        question: {
          en: "Who is the author of 'The Adventures of Tintin' comic book series?",
          es: "¿Quién es el autor de la serie de cómics 'Las aventuras de Tintín'?",
          de: "Wer ist der Autor der Comic-Serie 'Die Abenteuer von Tim und Struppi'?",
          nl: "Wie is de auteur van de stripboekreeks 'De avonturen van Kuifje'?"
        },
        options: [
          { en: "Hergé", es: "Hergé", de: "Hergé", nl: "Hergé" },
          { en: "René Goscinny", es: "René Goscinny", de: "René Goscinny", nl: "René Goscinny" },
          { en: "Albert Uderzo", es: "Albert Uderzo", de: "Albert Uderzo", nl: "Albert Uderzo" },
          { en: "Morris", es: "Morris", de: "Morris", nl: "Morris" }
        ],
        correct: 0,
        explanation: {
          en: "Hergé (Georges Remi) created 'The Adventures of Tintin' starting in 1929, featuring the young reporter Tintin and his dog Snowy on various adventures around the world.",
          es: "Hergé (Georges Remi) creó 'Las aventuras de Tintín' comenzando en 1929, presentando al joven reportero Tintín y su perro Milú en varias aventuras alrededor del mundo.",
          de: "Hergé (Georges Remi) schuf 'Die Abenteuer von Tim und Struppi' ab 1929, mit dem jungen Reporter Tim und seinem Hund Struppi auf verschiedenen Abenteuern um die Welt.",
          nl: "Hergé (Georges Remi) creëerde 'De avonturen van Kuifje' vanaf 1929, met de jonge reporter Kuifje en zijn hond Bobbie op verschillende avonturen rond de wereld."
        }
      },
      {
        question: {
          en: "Which adventure novel features a character named Passepartout?",
          es: "¿Qué novela de aventuras presenta un personaje llamado Passepartout?",
          de: "Welcher Abenteuerroman zeigt eine Figur namens Passepartout?",
          nl: "Welke avonturenroman toont een personage genaamd Passepartout?"
        },
        options: [
          { en: "Around the World in Eighty Days", es: "La vuelta al mundo en ochenta días", de: "In 80 Tagen um die Welt", nl: "De reis om de wereld in tachtig dagen" },
          { en: "Twenty Thousand Leagues Under the Sea", es: "Veinte mil leguas de viaje submarino", de: "20.000 Meilen unter dem Meer", nl: "Twintigduizend mijlen onder zee" },
          { en: "The Mysterious Island", es: "La isla misteriosa", de: "Die geheimnisvolle Insel", nl: "Het geheimzinnige eiland" },
          { en: "From the Earth to the Moon", es: "De la Tierra a la Luna", de: "Von der Erde zum Mond", nl: "Van de aarde naar de maan" }
        ],
        correct: 0,
        explanation: {
          en: "Passepartout is Phileas Fogg's loyal French valet in Jules Verne's 'Around the World in Eighty Days' (1873), accompanying him on his journey around the globe.",
          es: "Passepartout es el leal valet francés de Phileas Fogg en 'La vuelta al mundo en ochenta días' de Jules Verne (1873), acompañándolo en su viaje alrededor del globo.",
          de: "Passepartout ist Phileas Foggs treuer französischer Diener in Jules Vernes 'In 80 Tagen um die Welt' (1873), der ihn auf seiner Reise um die Welt begleitet.",
          nl: "Passepartout is Phileas Fogg's trouwe Franse bediende in Jules Verne's 'De reis om de wereld in tachtig dagen' (1873), die hem vergezelt op zijn reis rond de wereld."
        }
      },
      {
        question: {
          en: "Who wrote 'King Solomon's Mines'?",
          es: "¿Quién escribió 'Las minas del Rey Salomón'?",
          de: "Wer schrieb 'König Salomons Diamanten'?",
          nl: "Wie schreef 'Koning Salomo's mijnen'?"
        },
        options: [
          { en: "H. Rider Haggard", es: "H. Rider Haggard", de: "H. Rider Haggard", nl: "H. Rider Haggard" },
          { en: "Joseph Conrad", es: "Joseph Conrad", de: "Joseph Conrad", nl: "Joseph Conrad" },
          { en: "Rudyard Kipling", es: "Rudyard Kipling", de: "Rudyard Kipling", nl: "Rudyard Kipling" },
          { en: "Edgar Rice Burroughs", es: "Edgar Rice Burroughs", de: "Edgar Rice Burroughs", nl: "Edgar Rice Burroughs" }
        ],
        correct: 0,
        explanation: {
          en: "H. Rider Haggard wrote 'King Solomon's Mines' in 1885, an adventure novel about Allan Quatermain's search for treasure in Africa.",
          es: "H. Rider Haggard escribió 'Las minas del Rey Salomón' en 1885, una novela de aventuras sobre la búsqueda de tesoros de Allan Quatermain en África.",
          de: "H. Rider Haggard schrieb 'König Salomons Diamanten' 1885, einen Abenteuerroman über Allan Quatermains Schatzsuche in Afrika.",
          nl: "H. Rider Haggard schreef 'Koning Salomo's mijnen' in 1885, een avonturenroman over Allan Quatermain's zoektocht naar schatten in Afrika."
        }
      },
      {
        question: {
          en: "Which character is the protagonist of 'The Call of the Wild'?",
          es: "¿Qué personaje es el protagonista de 'La llamada de lo salvaje'?",
          de: "Welche Figur ist der Protagonist von 'Ruf der Wildnis'?",
          nl: "Welk personage is de hoofdpersoon van 'De roep van het wild'?"
        },
        options: [
          { en: "Buck (a dog)", es: "Buck (un perro)", de: "Buck (ein Hund)", nl: "Buck (een hond)" },
          { en: "John Thornton", es: "John Thornton", de: "John Thornton", nl: "John Thornton" },
          { en: "Spitz", es: "Spitz", de: "Spitz", nl: "Spitz" },
          { en: "Francois", es: "Francois", de: "Francois", nl: "Francois" }
        ],
        correct: 0,
        explanation: {
          en: "Buck, a domesticated dog, is the protagonist of Jack London's 'The Call of the Wild' (1903), who gradually returns to his wild instincts in the Yukon.",
          es: "Buck, un perro domesticado, es el protagonista de 'La llamada de lo salvaje' de Jack London (1903), quien gradualmente regresa a sus instintos salvajes en el Yukon.",
          de: "Buck, ein domestizierter Hund, ist der Protagonist von Jack Londons 'Ruf der Wildnis' (1903), der allmählich zu seinen wilden Instinkten im Yukon zurückkehrt.",
          nl: "Buck, een gedomesticeerde hond, is de hoofdpersoon van Jack London's 'De roep van het wild' (1903), die geleidelijk terugkeert naar zijn wilde instincten in de Yukon."
        }
      },
      {
        question: {
          en: "In which book does Captain Nemo appear?",
          es: "¿En qué libro aparece el Capitán Nemo?",
          de: "In welchem Buch erscheint Kapitän Nemo?",
          nl: "In welk boek verschijnt Kapitein Nemo?"
        },
        options: [
          { en: "Twenty Thousand Leagues Under the Sea", es: "Veinte mil leguas de viaje submarino", de: "20.000 Meilen unter dem Meer", nl: "Twintigduizend mijlen onder zee" },
          { en: "Around the World in Eighty Days", es: "La vuelta al mundo en ochenta días", de: "In 80 Tagen um die Welt", nl: "De reis om de wereld in tachtig dagen" },
          { en: "Journey to the Center of the Earth", es: "Viaje al centro de la Tierra", de: "Die Reise zum Mittelpunkt der Erde", nl: "Reis naar het middelpunt der aarde" },
          { en: "The Mysterious Island", es: "La isla misteriosa", de: "Die geheimnisvolle Insel", nl: "Het geheimzinnige eiland" }
        ],
        correct: 0,
        explanation: {
          en: "Captain Nemo is the enigmatic commander of the submarine Nautilus in Jules Verne's 'Twenty Thousand Leagues Under the Sea' (1870). He also appears in 'The Mysterious Island'.",
          es: "El Capitán Nemo es el enigmático comandante del submarino Nautilus en 'Veinte mil leguas de viaje submarino' de Jules Verne (1870). También aparece en 'La isla misteriosa'.",
          de: "Kapitän Nemo ist der rätselhafte Kommandant des U-Boots Nautilus in Jules Vernes '20.000 Meilen unter dem Meer' (1870). Er erscheint auch in 'Die geheimnisvolle Insel'.",
          nl: "Kapitein Nemo is de raadselachtige commandant van de onderzeeër Nautilus in Jules Verne's 'Twintigduizend mijlen onder zee' (1870). Hij verschijnt ook in 'Het geheimzinnige eiland'."
        }
      },
      {
        question: {
          en: "Who wrote 'The Swiss Family Robinson'?",
          es: "¿Quién escribió 'La familia Robinson suiza'?",
          de: "Wer schrieb 'Der Schweizerische Robinson'?",
          nl: "Wie schreef 'De Zwitserse Robinson'?"
        },
        options: [
          { en: "Johann David Wyss", es: "Johann David Wyss", de: "Johann David Wyss", nl: "Johann David Wyss" },
          { en: "Daniel Defoe", es: "Daniel Defoe", de: "Daniel Defoe", nl: "Daniel Defoe" },
          { en: "Robert Louis Stevenson", es: "Robert Louis Stevenson", de: "Robert Louis Stevenson", nl: "Robert Louis Stevenson" },
          { en: "Jules Verne", es: "Jules Verne", de: "Jules Verne", nl: "Jules Verne" }
        ],
        correct: 0,
        explanation: {
          en: "Johann David Wyss wrote 'The Swiss Family Robinson' in 1812, inspired by Defoe's Robinson Crusoe but featuring a family's survival story.",
          es: "Johann David Wyss escribió 'La familia Robinson suiza' en 1812, inspirado en Robinson Crusoe de Defoe pero con la historia de supervivencia de una familia.",
          de: "Johann David Wyss schrieb 'Der Schweizerische Robinson' 1812, inspiriert von Defoes Robinson Crusoe, aber mit der Überlebensgeschichte einer Familie.",
          nl: "Johann David Wyss schreef 'De Zwitserse Robinson' in 1812, geïnspireerd door Defoe's Robinson Crusoe maar met het overlevingsverhaal van een familie."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();