(() => {
    const questions = [
        {
            question: {
                en: "Which lesser-known Picasso painting features African mask influences from his early period?",
                es: "¿Qué pintura menos conocida de Picasso presenta influencias de máscaras africanas de su período temprano?",
                de: "Welches weniger bekannte Picasso-Gemälde zeigt afrikanische Maskeneinflüsse aus seiner frühen Periode?",
                nl: "Welk minder bekend schilderij van Picasso toont Afrikaanse maskerinvloeden uit zijn vroege periode?"
            },
            options: [
                {
                    en: "Les Demoiselles d'Avignon",
                    es: "Las Señoritas de Avignon",
                    de: "Les Demoiselles d'Avignon",
                    nl: "Les Demoiselles d'Avignon"
                },
                {
                    en: "The Old Guitarist",
                    es: "El Guitarrista Viejo",
                    de: "Der alte Gitarrist",
                    nl: "De Oude Gitarist"
                },
                {
                    en: "Boy with a Pipe",
                    es: "Niño con Pipa",
                    de: "Junge mit Pfeife",
                    nl: "Jongen met Pijp"
                },
                {
                    en: "The Blue Room",
                    es: "La Habitación Azul",
                    de: "Das Blaue Zimmer",
                    nl: "De Blauwe Kamer"
                }
            ],
            correct: 0,
            explanation: {
                en: "Les Demoiselles d'Avignon (1907) marked Picasso's transition from his Rose Period to Cubism, heavily influenced by African masks and Iberian sculpture.",
                es: "Las Señoritas de Avignon (1907) marcó la transición de Picasso de su Período Rosa al Cubismo, fuertemente influenciado por máscaras africanas y escultura ibérica.",
                de: "Les Demoiselles d'Avignon (1907) markierte Picassos Übergang von seiner Rosa Periode zum Kubismus, stark beeinflusst von afrikanischen Masken und iberischer Skulptur.",
                nl: "Les Demoiselles d'Avignon (1907) markeerde Picasso's overgang van zijn Roze Periode naar het Kubisme, sterk beïnvloed door Afrikaanse maskers en Iberische beeldhouwkunst."
            }
        },
        {
            question: {
                en: "What was the original title of Van Gogh's painting now known as 'The Potato Eaters'?",
                es: "¿Cuál era el título original de la pintura de Van Gogh ahora conocida como 'Los Comedores de Patatas'?",
                de: "Wie lautete der ursprüngliche Titel von Van Goghs Gemälde, das heute als 'Die Kartoffelesser' bekannt ist?",
                nl: "Wat was de oorspronkelijke titel van Van Goghs schilderij dat nu bekend staat als 'De Aardappeleters'?"
            },
            options: [
                {
                    en: "De Aardappeleters",
                    es: "De Aardappeleters",
                    de: "De Aardappeleters",
                    nl: "De Aardappeleters"
                },
                {
                    en: "Peasant Family at Dinner",
                    es: "Familia Campesina en la Cena",
                    de: "Bauernfamilie beim Abendessen",
                    nl: "Boerenfamilie aan het Diner"
                },
                {
                    en: "The Evening Meal",
                    es: "La Cena",
                    de: "Das Abendmahl",
                    nl: "De Avondmaaltijd"
                },
                {
                    en: "Rural Supper",
                    es: "Cena Rural",
                    de: "Ländliches Abendessen",
                    nl: "Landelijk Avondmaal"
                }
            ],
            correct: 0,
            explanation: {
                en: "Van Gogh titled this 1885 painting 'De Aardappeleters' in Dutch. He wanted to show the harsh reality of peasant life and considered it one of his finest works.",
                es: "Van Gogh tituló esta pintura de 1885 'De Aardappeleters' en holandés. Quería mostrar la dura realidad de la vida campesina y la consideraba una de sus mejores obras.",
                de: "Van Gogh betitelte dieses Gemälde von 1885 'De Aardappeleters' auf Niederländisch. Er wollte die harte Realität des Bauernlebens zeigen und hielt es für eines seiner besten Werke.",
                nl: "Van Gogh noemde dit schilderij uit 1885 'De Aardappeleters' in het Nederlands. Hij wilde de harde realiteit van het boerenleven tonen en beschouwde het als een van zijn beste werken."
            }
        },
        {
            question: {
                en: "Which Monet series was painted during his stay at the Savoy Hotel in London?",
                es: "¿Qué serie de Monet fue pintada durante su estancia en el Hotel Savoy en Londres?",
                de: "Welche Monet-Serie wurde während seines Aufenthalts im Savoy Hotel in London gemalt?",
                nl: "Welke Monet-serie werd geschilderd tijdens zijn verblijf in het Savoy Hotel in Londen?"
            },
            options: [
                {
                    en: "Charing Cross Bridge",
                    es: "Puente de Charing Cross",
                    de: "Charing Cross Brücke",
                    nl: "Charing Cross Brug"
                },
                {
                    en: "Rouen Cathedral",
                    es: "Catedral de Rouen",
                    de: "Kathedrale von Rouen",
                    nl: "Kathedraal van Rouen"
                },
                {
                    en: "Poplar Trees",
                    es: "Álamos",
                    de: "Pappelbäume",
                    nl: "Populieren"
                },
                {
                    en: "Haystacks",
                    es: "Almiares",
                    de: "Heuhaufen",
                    nl: "Hooibergen"
                }
            ],
            correct: 0,
            explanation: {
                en: "Between 1899-1901, Monet painted his Thames series including Charing Cross Bridge from his room at the Savoy Hotel, capturing London's foggy atmosphere.",
                es: "Entre 1899-1901, Monet pintó su serie del Támesis incluyendo el Puente de Charing Cross desde su habitación en el Hotel Savoy, capturando la atmósfera brumosa de Londres.",
                de: "Zwischen 1899-1901 malte Monet seine Themse-Serie einschließlich der Charing Cross Brücke von seinem Zimmer im Savoy Hotel aus und fing Londons neblige Atmosphäre ein.",
                nl: "Tussen 1899-1901 schilderde Monet zijn Thames-serie inclusief Charing Cross Brug vanuit zijn kamer in het Savoy Hotel, waarbij hij de mistige sfeer van Londen vastlegde."
            }
        },
        {
            question: {
                en: "What was Caravaggio's technique of dramatic light and shadow called?",
                es: "¿Cómo se llamaba la técnica de Caravaggio de luz y sombra dramáticas?",
                de: "Wie hieß Caravaggios Technik dramatischer Licht- und Schatteneffekte?",
                nl: "Hoe heette Caravaggio's techniek van dramatisch licht en schaduw?"
            },
            options: [
                {
                    en: "Chiaroscuro",
                    es: "Claroscuro",
                    de: "Chiaroscuro",
                    nl: "Chiaroscuro"
                },
                {
                    en: "Sfumato",
                    es: "Sfumato",
                    de: "Sfumato",
                    nl: "Sfumato"
                },
                {
                    en: "Tenebrism",
                    es: "Tenebrismo",
                    de: "Tenebrismus",
                    nl: "Tenebrisme"
                },
                {
                    en: "Cangiante",
                    es: "Cangiante",
                    de: "Cangiante",
                    nl: "Cangiante"
                }
            ],
            correct: 2,
            explanation: {
                en: "Tenebrism, developed by Caravaggio, uses extreme contrasts of light and dark to create dramatic, theatrical effects. While related to chiaroscuro, tenebrism is more extreme.",
                es: "El tenebrismo, desarrollado por Caravaggio, usa contrastes extremos de luz y oscuridad para crear efectos dramáticos y teatrales. Aunque relacionado con el claroscuro, el tenebrismo es más extremo.",
                de: "Der von Caravaggio entwickelte Tenebrismus nutzt extreme Kontraste von Licht und Dunkelheit für dramatische, theatralische Effekte. Obwohl verwandt mit Chiaroscuro, ist Tenebrismus extremer.",
                nl: "Tenebrisme, ontwikkeld door Caravaggio, gebruikt extreme contrasten van licht en donker om dramatische, theatrale effecten te creëren. Hoewel gerelateerd aan chiaroscuro, is tenebrisme extremer."
            }
        },
        {
            question: {
                en: "Which Dalí painting features elephants with spider-like legs?",
                es: "¿Qué pintura de Dalí presenta elefantes con patas similares a arañas?",
                de: "Welches Dalí-Gemälde zeigt Elefanten mit spinnenartigen Beinen?",
                nl: "Welk Dalí-schilderij toont olifanten met spinachtige poten?"
            },
            options: [
                {
                    en: "The Temptation of St. Anthony",
                    es: "La Tentación de San Antonio",
                    de: "Die Versuchung des Heiligen Antonius",
                    nl: "De Verzoeking van de Heilige Antonius"
                },
                {
                    en: "Dream Caused by the Flight of a Bee",
                    es: "Sueño Causado por el Vuelo de una Abeja",
                    de: "Traum, verursacht durch den Flug einer Biene",
                    nl: "Droom Veroorzaakt door de Vlucht van een Bij"
                },
                {
                    en: "The Burning Giraffe",
                    es: "La Jirafa en Llamas",
                    de: "Die Brennende Giraffe",
                    nl: "De Brandende Giraf"
                },
                {
                    en: "Swans Reflecting Elephants",
                    es: "Cisnes Reflejando Elefantes",
                    de: "Schwäne, die Elefanten reflektieren",
                    nl: "Zwanen die Olifanten Reflecteren"
                }
            ],
            correct: 0,
            explanation: {
                en: "'The Temptation of St. Anthony' (1946) features Dalí's signature elongated elephants carrying symbolic burdens on their backs, inspired by Bernini's obelisk-carrying elephant.",
                es: "'La Tentación de San Antonio' (1946) presenta los elefantes alargados característicos de Dalí cargando cargas simbólicas en sus espaldas, inspirado en el elefante portador de obelisco de Bernini.",
                de: "'Die Versuchung des Heiligen Antonius' (1946) zeigt Dalís charakteristische langbeinige Elefanten, die symbolische Lasten auf ihren Rücken tragen, inspiriert von Berninis obelisktragenden Elefanten.",
                nl: "'De Verzoeking van de Heilige Antonius' (1946) toont Dalí's kenmerkende langbenige olifanten die symbolische lasten op hun rug dragen, geïnspireerd door Bernini's obelisk-dragende olifant."
            }
        },
        {
            question: {
                en: "In which period did Picasso create his 'Blue Period' works?",
                es: "¿En qué período creó Picasso sus obras del 'Período Azul'?",
                de: "In welcher Zeit schuf Picasso seine Werke der 'Blauen Periode'?",
                nl: "In welke periode creëerde Picasso zijn werken uit de 'Blauwe Periode'?"
            },
            options: [
                {
                    en: "1901-1904",
                    es: "1901-1904",
                    de: "1901-1904",
                    nl: "1901-1904"
                },
                {
                    en: "1905-1907",
                    es: "1905-1907",
                    de: "1905-1907",
                    nl: "1905-1907"
                },
                {
                    en: "1898-1901",
                    es: "1898-1901",
                    de: "1898-1901",
                    nl: "1898-1901"
                },
                {
                    en: "1907-1909",
                    es: "1907-1909",
                    de: "1907-1909",
                    nl: "1907-1909"
                }
            ],
            correct: 0,
            explanation: {
                en: "Picasso's Blue Period lasted from 1901-1904, triggered by his friend Carlos Casagemas's suicide. This period featured predominantly blue tones and melancholic subjects.",
                es: "El Período Azul de Picasso duró de 1901-1904, desencadenado por el suicidio de su amigo Carlos Casagemas. Este período presentó predominantemente tonos azules y temas melancólicos.",
                de: "Picassos Blaue Periode dauerte von 1901-1904, ausgelöst durch den Selbstmord seines Freundes Carlos Casagemas. Diese Periode zeigte überwiegend blaue Töne und melancholische Themen.",
                nl: "Picasso's Blauwe Periode duurde van 1901-1904, veroorzaakt door de zelfmoord van zijn vriend Carlos Casagemas. Deze periode kenmerkte zich door overwegend blauwe tinten en melancholische onderwerpen."
            }
        },
        {
            question: {
                en: "Which artist painted 'Nighthawks' depicting people in a late-night diner?",
                es: "¿Qué artista pintó 'Noctámbulos' representando personas en un restaurante nocturno?",
                de: "Welcher Künstler malte 'Nighthawks', das Menschen in einem Nachtlokal zeigt?",
                nl: "Welke kunstenaar schilderde 'Nighthawks' met mensen in een laat-nacht diner?"
            },
            options: [
                {
                    en: "Edward Hopper",
                    es: "Edward Hopper",
                    de: "Edward Hopper",
                    nl: "Edward Hopper"
                },
                {
                    en: "Grant Wood",
                    es: "Grant Wood",
                    de: "Grant Wood",
                    nl: "Grant Wood"
                },
                {
                    en: "Norman Rockwell",
                    es: "Norman Rockwell",
                    de: "Norman Rockwell",
                    nl: "Norman Rockwell"
                },
                {
                    en: "Andrew Wyeth",
                    es: "Andrew Wyeth",
                    de: "Andrew Wyeth",
                    nl: "Andrew Wyeth"
                }
            ],
            correct: 0,
            explanation: {
                en: "Edward Hopper painted 'Nighthawks' in 1942, capturing urban isolation and loneliness. The painting is housed in the Art Institute of Chicago and has become an American icon.",
                es: "Edward Hopper pintó 'Noctámbulos' en 1942, capturando el aislamiento urbano y la soledad. La pintura se encuentra en el Instituto de Arte de Chicago y se ha convertido en un ícono americano.",
                de: "Edward Hopper malte 'Nighthawks' 1942 und fing städtische Isolation und Einsamkeit ein. Das Gemälde befindet sich im Art Institute of Chicago und ist zu einer amerikanischen Ikone geworden.",
                nl: "Edward Hopper schilderde 'Nighthawks' in 1942, waarbij hij stedelijke isolatie en eenzaamheid vastlegde. Het schilderij hangt in het Art Institute of Chicago en is een Amerikaans icoon geworden."
            }
        },
        {
            question: {
                en: "What was the Fauves art movement primarily characterized by?",
                es: "¿Por qué se caracterizaba principalmente el movimiento artístico de los Fauves?",
                de: "Wwodurch war die Kunstbewegung der Fauves hauptsächlich charakterisiert?",
                nl: "Waar werd de Fauves kunstbeweging hoofdzakelijk door gekenmerkt?"
            },
            options: [
                {
                    en: "Bold, non-naturalistic colors",
                    es: "Colores audaces y no naturalistas",
                    de: "Kühne, nicht-naturalistische Farben",
                    nl: "Gedurfde, niet-naturalistische kleuren"
                },
                {
                    en: "Geometric shapes and forms",
                    es: "Formas y figuras geométricas",
                    de: "Geometrische Formen und Gestalten",
                    nl: "Geometrische vormen en figuren"
                },
                {
                    en: "Dream-like imagery",
                    es: "Imágenes oníricas",
                    de: "Traumartige Bilder",
                    nl: "Droomachtige beelden"
                },
                {
                    en: "Photographic realism",
                    es: "Realismo fotográfico",
                    de: "Fotografischer Realismus",
                    nl: "Fotografisch realisme"
                }
            ],
            correct: 0,
            explanation: {
                en: "The Fauves (1905-1910) led by Henri Matisse used bold, non-naturalistic colors applied straight from the tube. The name 'Fauves' means 'wild beasts' in French.",
                es: "Los Fauves (1905-1910) liderados por Henri Matisse usaron colores audaces y no naturalistas aplicados directamente del tubo. El nombre 'Fauves' significa 'bestias salvajes' en francés.",
                de: "Die Fauves (1905-1910) unter Führung von Henri Matisse verwendeten kühne, nicht-naturalistische Farben direkt aus der Tube. Der Name 'Fauves' bedeutet 'wilde Bestien' auf Französisch.",
                nl: "De Fauves (1905-1910) onder leiding van Henri Matisse gebruikten gedurfde, niet-naturalistische kleuren direct uit de tube. De naam 'Fauves' betekent 'wilde beesten' in het Frans."
            }
        },
        {
            question: {
                en: "Which Renaissance artist wrote extensive backwards mirror writing in his notebooks?",
                es: "¿Qué artista del Renacimiento escribió extensamente al revés en escritura espejo en sus cuadernos?",
                de: "Welcher Renaissance-Künstler schrieb ausführlich rückwärts in Spiegelschrift in seinen Notizbüchern?",
                nl: "Welke Renaissance kunstenaar schreef uitgebreid achterwaarts in spiegelschrift in zijn notitieboeken?"
            },
            options: [
                {
                    en: "Leonardo da Vinci",
                    es: "Leonardo da Vinci",
                    de: "Leonardo da Vinci",
                    nl: "Leonardo da Vinci"
                },
                {
                    en: "Michelangelo",
                    es: "Miguel Ángel",
                    de: "Michelangelo",
                    nl: "Michelangelo"
                },
                {
                    en: "Raphael",
                    es: "Rafael",
                    de: "Raffael",
                    nl: "Rafaël"
                },
                {
                    en: "Donatello",
                    es: "Donatello",
                    de: "Donatello",
                    nl: "Donatello"
                }
            ],
            correct: 0,
            explanation: {
                en: "Leonardo da Vinci wrote most of his notes in mirror writing, readable only when held up to a mirror. This may have been to keep his ideas secret or because he was left-handed.",
                es: "Leonardo da Vinci escribió la mayoría de sus notas en escritura espejo, legible solo cuando se sostiene frente a un espejo. Esto pudo haber sido para mantener sus ideas en secreto o porque era zurdo.",
                de: "Leonardo da Vinci schrieb die meisten seiner Notizen in Spiegelschrift, nur lesbar wenn man sie vor einen Spiegel hält. Dies könnte gewesen sein, um seine Ideen geheim zu halten oder weil er Linkshänder war.",
                nl: "Leonardo da Vinci schreef de meeste van zijn notities in spiegelschrift, alleen leesbaar wanneer ze voor een spiegel gehouden worden. Dit was mogelijk om zijn ideeën geheim te houden of omdat hij linkshandig was."
            }
        },
        {
            question: {
                en: "What is the technique called where colors are applied in small dots to create an image?",
                es: "¿Cómo se llama la técnica donde los colores se aplican en pequeños puntos para crear una imagen?",
                de: "Wie heißt die Technik, bei der Farben in kleinen Punkten aufgetragen werden, um ein Bild zu erzeugen?",
                nl: "Hoe heet de techniek waarbij kleuren in kleine stippen worden aangebracht om een beeld te creëren?"
            },
            options: [
                {
                    en: "Pointillism",
                    es: "Puntillismo",
                    de: "Pointillismus",
                    nl: "Pointillisme"
                },
                {
                    en: "Divisionism",
                    es: "Divisionismo",
                    de: "Divisionismus",
                    nl: "Divisionisme"
                },
                {
                    en: "Stippling",
                    es: "Punteado",
                    de: "Punktieren",
                    nl: "Stippen"
                },
                {
                    en: "Hatching",
                    es: "Tramado",
                    de: "Schraffieren",
                    nl: "Arceren"
                }
            ],
            correct: 0,
            explanation: {
                en: "Pointillism, developed by Georges Seurat and Paul Signac, uses small dots of pure color that blend optically when viewed from a distance, creating more vibrant effects.",
                es: "El puntillismo, desarrollado por Georges Seurat y Paul Signac, usa pequeños puntos de color puro que se mezclan ópticamente cuando se ven desde la distancia, creando efectos más vibrantes.",
                de: "Der Pointillismus, entwickelt von Georges Seurat und Paul Signac, verwendet kleine Punkte reiner Farbe, die sich optisch mischen, wenn sie aus der Entfernung betrachtet werden, und lebhaftere Effekte erzeugen.",
                nl: "Pointillisme, ontwikkeld door Georges Seurat en Paul Signac, gebruikt kleine stippen van pure kleur die optisch mengen wanneer ze van een afstand bekeken worden, waardoor levendigere effecten ontstaan."
            }
        },
        {
            question: {
                en: "Which artist created the sculpture 'Bird in Space' series?",
                es: "¿Qué artista creó la serie de esculturas 'Pájaro en el Espacio'?",
                de: "Welcher Künstler schuf die Skulpturenserie 'Vogel im Raum'?",
                nl: "Welke kunstenaar creëerde de sculptuurreeks 'Vogel in de Ruimte'?"
            },
            options: [
                {
                    en: "Constantin Brâncuși",
                    es: "Constantin Brâncuși",
                    de: "Constantin Brâncuși",
                    nl: "Constantin Brâncuși"
                },
                {
                    en: "Alberto Giacometti",
                    es: "Alberto Giacometti",
                    de: "Alberto Giacometti",
                    nl: "Alberto Giacometti"
                },
                {
                    en: "Henry Moore",
                    es: "Henry Moore",
                    de: "Henry Moore",
                    nl: "Henry Moore"
                },
                {
                    en: "Barbara Hepworth",
                    es: "Barbara Hepworth",
                    de: "Barbara Hepworth",
                    nl: "Barbara Hepworth"
                }
            ],
            correct: 0,
            explanation: {
                en: "Constantin Brâncuși created 16 versions of 'Bird in Space' between 1923-1940, exploring pure form and movement. These abstract bronze and marble sculptures revolutionized modern sculpture.",
                es: "Constantin Brâncuși creó 16 versiones de 'Pájaro en el Espacio' entre 1923-1940, explorando la forma pura y el movimiento. Estas esculturas abstractas de bronce y mármol revolucionaron la escultura moderna.",
                de: "Constantin Brâncuși schuf zwischen 1923-1940 16 Versionen von 'Vogel im Raum' und erforschte reine Form und Bewegung. Diese abstrakten Bronze- und Marmorskulpturen revolutionierten die moderne Skulptur.",
                nl: "Constantin Brâncuși creëerde 16 versies van 'Vogel in de Ruimte' tussen 1923-1940, waarbij hij pure vorm en beweging verkende. Deze abstracte bronzen en marmeren sculpturen revolutioneerden de moderne beeldhouwkunst."
            }
        },
        {
            question: {
                en: "In which museum can you find Guernica by Picasso?",
                es: "¿En qué museo puedes encontrar Guernica de Picasso?",
                de: "In welchem Museum kann man Guernica von Picasso finden?",
                nl: "In welk museum kun je Guernica van Picasso vinden?"
            },
            options: [
                {
                    en: "Museo Reina Sofía, Madrid",
                    es: "Museo Reina Sofía, Madrid",
                    de: "Museo Reina Sofía, Madrid",
                    nl: "Museo Reina Sofía, Madrid"
                },
                {
                    en: "Prado Museum, Madrid",
                    es: "Museo del Prado, Madrid",
                    de: "Prado-Museum, Madrid",
                    nl: "Prado Museum, Madrid"
                },
                {
                    en: "Louvre, Paris",
                    es: "Louvre, París",
                    de: "Louvre, Paris",
                    nl: "Louvre, Parijs"
                },
                {
                    en: "MoMA, New York",
                    es: "MoMA, Nueva York",
                    de: "MoMA, New York",
                    nl: "MoMA, New York"
                }
            ],
            correct: 0,
            explanation: {
                en: "Guernica has been housed in the Museo Reina Sofía in Madrid since 1992. Picasso stipulated that the painting should only return to Spain after democracy was restored.",
                es: "Guernica se encuentra en el Museo Reina Sofía en Madrid desde 1992. Picasso estipuló que la pintura solo debería regresar a España después de que se restaurara la democracia.",
                de: "Guernica befindet sich seit 1992 im Museo Reina Sofía in Madrid. Picasso bestimmte, dass das Gemälde erst nach der Wiederherstellung der Demokratie nach Spanien zurückkehren sollte.",
                nl: "Guernica hangt sinds 1992 in het Museo Reina Sofía in Madrid. Picasso bepaalde dat het schilderij pas naar Spanje mocht terugkeren nadat de democratie was hersteld."
            }
        },
        {
            question: {
                en: "Which art movement did Wassily Kandinsky help pioneer with his abstract paintings?",
                es: "¿Qué movimiento artístico ayudó a pionerear Wassily Kandinsky con sus pinturas abstractas?",
                de: "Welche Kunstbewegung half Wassily Kandinsky mit seinen abstrakten Gemälden zu begründen?",
                nl: "Welke kunstbeweging hielp Wassily Kandinsky pionieren met zijn abstracte schilderijen?"
            },
            options: [
                {
                    en: "Abstract Expressionism",
                    es: "Expresionismo Abstracto",
                    de: "Abstrakter Expressionismus",
                    nl: "Abstract Expressionisme"
                },
                {
                    en: "Der Blaue Reiter",
                    es: "Der Blaue Reiter",
                    de: "Der Blaue Reiter",
                    nl: "Der Blaue Reiter"
                },
                {
                    en: "Suprematism",
                    es: "Suprematismo",
                    de: "Suprematismus",
                    nl: "Suprematisme"
                },
                {
                    en: "Constructivism",
                    es: "Constructivismo",
                    de: "Konstruktivismus",
                    nl: "Constructivisme"
                }
            ],
            correct: 1,
            explanation: {
                en: "Kandinsky co-founded Der Blaue Reiter (The Blue Rider) in 1911 with Franz Marc. This German Expressionist group emphasized spiritual and emotional content in abstract art.",
                es: "Kandinsky co-fundó Der Blaue Reiter (El Jinete Azul) en 1911 con Franz Marc. Este grupo expresionista alemán enfatizaba el contenido espiritual y emocional en el arte abstracto.",
                de: "Kandinsky gründete 1911 zusammen mit Franz Marc Der Blaue Reiter. Diese deutsche Expressionistengruppe betonte geistigen und emotionalen Inhalt in der abstrakten Kunst.",
                nl: "Kandinsky was medeoprichter van Der Blaue Reiter (De Blauwe Ruiter) in 1911 samen met Franz Marc. Deze Duitse expressionistische groep benadrukte spirituele en emotionele inhoud in abstracte kunst."
            }
        },
        {
            question: {
                en: "What material did Auguste Rodin primarily use for 'The Gates of Hell'?",
                es: "¿Qué material usó principalmente Auguste Rodin para 'Las Puertas del Infierno'?",
                de: "Welches Material verwendete Auguste Rodin hauptsächlich für 'Das Höllentor'?",
                nl: "Welk materiaal gebruikte Auguste Rodin voornamelijk voor 'De Poorten van de Hel'?"
            },
            options: [
                {
                    en: "Bronze",
                    es: "Bronce",
                    de: "Bronze",
                    nl: "Brons"
                },
                {
                    en: "Marble",
                    es: "Mármol",
                    de: "Marmor",
                    nl: "Marmer"
                },
                {
                    en: "Clay",
                    es: "Arcilla",
                    de: "Ton",
                    nl: "Klei"
                },
                {
                    en: "Plaster",
                    es: "Yeso",
                    de: "Gips",
                    nl: "Gips"
                }
            ],
            correct: 0,
            explanation: {
                en: "Rodin worked on 'The Gates of Hell' for 37 years (1880-1917) in bronze. This monumental work contains 180 figures including 'The Thinker' and was inspired by Dante's Inferno.",
                es: "Rodin trabajó en 'Las Puertas del Infierno' durante 37 años (1880-1917) en bronce. Esta obra monumental contiene 180 figuras incluyendo 'El Pensador' y fue inspirada por el Infierno de Dante.",
                de: "Rodin arbeitete 37 Jahre (1880-1917) an 'Das Höllentor' aus Bronze. Dieses monumentale Werk enthält 180 Figuren einschließlich 'Der Denker' und wurde von Dantes Inferno inspiriert.",
                nl: "Rodin werkte 37 jaar (1880-1917) aan 'De Poorten van de Hel' in brons. Dit monumentale werk bevat 180 figuren waaronder 'De Denker' en was geïnspireerd door Dante's Inferno."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Garden of Earthly Delights'?",
                es: "¿Qué artista pintó 'El Jardín de las Delicias Terrenales'?",
                de: "Welcher Künstler malte 'Der Garten der Lüste'?",
                nl: "Welke kunstenaar schilderde 'De Tuin der Lusten'?"
            },
            options: [
                {
                    en: "Hieronymus Bosch",
                    es: "Hieronymus Bosch",
                    de: "Hieronymus Bosch",
                    nl: "Hieronymus Bosch"
                },
                {
                    en: "Pieter Bruegel the Elder",
                    es: "Pieter Bruegel el Viejo",
                    de: "Pieter Bruegel der Ältere",
                    nl: "Pieter Bruegel de Oudere"
                },
                {
                    en: "Jan van Eyck",
                    es: "Jan van Eyck",
                    de: "Jan van Eyck",
                    nl: "Jan van Eyck"
                },
                {
                    en: "Rogier van der Weyden",
                    es: "Rogier van der Weyden",
                    de: "Rogier van der Weyden",
                    nl: "Rogier van der Weyden"
                }
            ],
            correct: 0,
            explanation: {
                en: "Hieronymus Bosch painted this famous triptych around 1495-1505. The work depicts paradise, earthly pleasures, and hell, and is housed in the Prado Museum in Madrid.",
                es: "Hieronymus Bosch pintó este famoso tríptico alrededor de 1495-1505. La obra representa el paraíso, los placeres terrenales y el infierno, y se encuentra en el Museo del Prado en Madrid.",
                de: "Hieronymus Bosch malte dieses berühmte Triptychon um 1495-1505. Das Werk zeigt das Paradies, irdische Freuden und die Hölle und befindet sich im Prado-Museum in Madrid.",
                nl: "Hieronymus Bosch schilderde dit beroemde drieluik rond 1495-1505. Het werk toont het paradijs, aardse genoegens en de hel, en hangt in het Prado Museum in Madrid."
            }
        },
        {
            question: {
                en: "What was the name of the art school where the Bauhaus movement originated?",
                es: "¿Cuál era el nombre de la escuela de arte donde se originó el movimiento Bauhaus?",
                de: "Wie hieß die Kunstschule, wo die Bauhaus-Bewegung entstand?",
                nl: "Wat was de naam van de kunstschool waar de Bauhaus-beweging ontstond?"
            },
            options: [
                {
                    en: "Staatliches Bauhaus",
                    es: "Staatliches Bauhaus",
                    de: "Staatliches Bauhaus",
                    nl: "Staatliches Bauhaus"
                },
                {
                    en: "École des Beaux-Arts",
                    es: "École des Beaux-Arts",
                    de: "École des Beaux-Arts",
                    nl: "École des Beaux-Arts"
                },
                {
                    en: "Royal Academy of Arts",
                    es: "Real Academia de las Artes",
                    de: "Royal Academy of Arts",
                    nl: "Royal Academy of Arts"
                },
                {
                    en: "Art Students League",
                    es: "Liga de Estudiantes de Arte",
                    de: "Art Students League",
                    nl: "Art Students League"
                }
            ],
            correct: 0,
            explanation: {
                en: "The Staatliches Bauhaus was founded by Walter Gropius in Weimar in 1919. It combined crafts and fine arts, emphasizing functional design and modern industrial methods.",
                es: "El Staatliches Bauhaus fue fundado por Walter Gropius en Weimar en 1919. Combinaba artesanías y bellas artes, enfatizando el diseño funcional y los métodos industriales modernos.",
                de: "Das Staatliche Bauhaus wurde 1919 von Walter Gropius in Weimar gegründet. Es verband Handwerk und bildende Kunst und betonte funktionales Design und moderne Industriemethoden.",
                nl: "Het Staatliches Bauhaus werd opgericht door Walter Gropius in Weimar in 1919. Het combineerde ambachten en beeldende kunst, met nadruk op functioneel ontwerp en moderne industriële methoden."
            }
        },
        {
            question: {
                en: "Which artist created the famous sculpture 'Balloon Dog'?",
                es: "¿Qué artista creó la famosa escultura 'Perro Globo'?",
                de: "Welcher Künstler schuf die berühmte Skulptur 'Balloon Dog'?",
                nl: "Welke kunstenaar creëerde de beroemde sculptuur 'Balloon Dog'?"
            },
            options: [
                {
                    en: "Jeff Koons",
                    es: "Jeff Koons",
                    de: "Jeff Koons",
                    nl: "Jeff Koons"
                },
                {
                    en: "Damien Hirst",
                    es: "Damien Hirst",
                    de: "Damien Hirst",
                    nl: "Damien Hirst"
                },
                {
                    en: "Anish Kapoor",
                    es: "Anish Kapoor",
                    de: "Anish Kapoor",
                    nl: "Anish Kapoor"
                },
                {
                    en: "Takashi Murakami",
                    es: "Takashi Murakami",
                    de: "Takashi Murakami",
                    nl: "Takashi Murakami"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jeff Koons created the 'Balloon Dog' series in the 1990s. These large-scale stainless steel sculptures mimic the appearance of balloon animals and are among the most expensive artworks sold.",
                es: "Jeff Koons creó la serie 'Perro Globo' en los años 1990. Estas esculturas de acero inoxidable a gran escala imitan la apariencia de animales de globo y están entre las obras de arte más caras vendidas.",
                de: "Jeff Koons schuf die 'Balloon Dog'-Serie in den 1990er Jahren. Diese großformatigen Edelstahlskulpturen imitieren das Aussehen von Ballontieren und gehören zu den teuersten verkauften Kunstwerken.",
                nl: "Jeff Koons creëerde de 'Balloon Dog' serie in de jaren 1990. Deze grootschalige roestvrijstalen sculpturen imiteren het uiterlijk van ballondieren en behoren tot de duurste verkochte kunstwerken."
            }
        },
        {
            question: {
                en: "In which period did El Greco work and develop his distinctive elongated figures?",
                es: "¿En qué período trabajó El Greco y desarrolló sus distintivas figuras alargadas?",
                de: "In welcher Zeit arbeitete El Greco und entwickelte seine charakteristischen langgestreckten Figuren?",
                nl: "In welke periode werkte El Greco en ontwikkelde hij zijn kenmerkende langgerekte figuren?"
            },
            options: [
                {
                    en: "Late Renaissance/Mannerism",
                    es: "Renacimiento Tardío/Manierismo",
                    de: "Spätrenaissance/Manierismus",
                    nl: "Late Renaissance/Maniërisme"
                },
                {
                    en: "Early Renaissance",
                    es: "Renacimiento Temprano",
                    de: "Frührenaissance",
                    nl: "Vroege Renaissance"
                },
                {
                    en: "Baroque",
                    es: "Barroco",
                    de: "Barock",
                    nl: "Barok"
                },
                {
                    en: "Gothic",
                    es: "Gótico",
                    de: "Gotik",
                    nl: "Gotiek"
                }
            ],
            correct: 0,
            explanation: {
                en: "El Greco (1541-1614) worked during the Late Renaissance/Mannerist period. His distinctive style with elongated figures and vibrant colors was influenced by Byzantine, Venetian, and Spanish traditions.",
                es: "El Greco (1541-1614) trabajó durante el período del Renacimiento Tardío/Manierismo. Su estilo distintivo con figuras alargadas y colores vibrantes fue influenciado por tradiciones bizantinas, venecianas y españolas.",
                de: "El Greco (1541-1614) arbeitete während der Spätrenaissance/Manierismus-Periode. Sein charakteristischer Stil mit langgestreckten Figuren und lebhaften Farben war von byzantinischen, venezianischen und spanischen Traditionen beeinflusst.",
                nl: "El Greco (1541-1614) werkte tijdens de Late Renaissance/Maniërisme periode. Zijn kenmerkende stijl met langgerekte figuren en levendige kleuren werd beïnvloed door Byzantijnse, Venetiaanse en Spaanse tradities."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Hay Wain' depicting rural English countryside?",
                es: "¿Qué artista pintó 'El Carro de Heno' representando el campo rural inglés?",
                de: "Welcher Künstler malte 'Der Heuwagen', der die englische Landschaft zeigt?",
                nl: "Welke kunstenaar schilderde 'The Hay Wain' dat het Engelse platteland weergeeft?"
            },
            options: [
                {
                    en: "John Constable",
                    es: "John Constable",
                    de: "John Constable",
                    nl: "John Constable"
                },
                {
                    en: "J.M.W. Turner",
                    es: "J.M.W. Turner",
                    de: "J.M.W. Turner",
                    nl: "J.M.W. Turner"
                },
                {
                    en: "Thomas Gainsborough",
                    es: "Thomas Gainsborough",
                    de: "Thomas Gainsborough",
                    nl: "Thomas Gainsborough"
                },
                {
                    en: "Joshua Reynolds",
                    es: "Joshua Reynolds",
                    de: "Joshua Reynolds",
                    nl: "Joshua Reynolds"
                }
            ],
            correct: 0,
            explanation: {
                en: "John Constable painted 'The Hay Wain' in 1821, depicting a scene from the River Stour in Suffolk. This Romantic landscape painting is housed in the National Gallery, London.",
                es: "John Constable pintó 'El Carro de Heno' en 1821, representando una escena del Río Stour en Suffolk. Esta pintura paisajística romántica se encuentra en la Galería Nacional de Londres.",
                de: "John Constable malte 'Der Heuwagen' 1821 und zeigte eine Szene vom Fluss Stour in Suffolk. Dieses romantische Landschaftsgemälde befindet sich in der National Gallery, London.",
                nl: "John Constable schilderde 'The Hay Wain' in 1821, met een tafereel van de rivier Stour in Suffolk. Dit romantische landschapsschilderij hangt in de National Gallery, Londen."
            }
        }
    ,
        {
            question: {
                en: "Which artist created the 'Fountain' sculpture, submitting a urinal as art?",
                es: "¿Qué artista creó la escultura 'Fuente', presentando un urinario como arte?",
                de: "Welcher Künstler schuf die Skulptur 'Fountain', indem er ein Urinal als Kunst einreichte?",
                nl: "Welke kunstenaar creëerde de sculptuur 'Fountain', door een urinoir als kunst in te dienen?"
            },
            options: [
                {
                    en: "Marcel Duchamp",
                    es: "Marcel Duchamp",
                    de: "Marcel Duchamp",
                    nl: "Marcel Duchamp"
                },
                {
                    en: "Man Ray",
                    es: "Man Ray",
                    de: "Man Ray",
                    nl: "Man Ray"
                },
                {
                    en: "Francis Picabia",
                    es: "Francis Picabia",
                    de: "Francis Picabia",
                    nl: "Francis Picabia"
                },
                {
                    en: "Hans Arp",
                    es: "Hans Arp",
                    de: "Hans Arp",
                    nl: "Hans Arp"
                }
            ],
            correct: 0,
            explanation: {
                en: "Marcel Duchamp submitted 'Fountain', a porcelain urinal signed 'R. Mutt', to the 1917 Society of Independent Artists exhibition. This readymade revolutionized conceptual art by questioning what could be considered art.",
                es: "Marcel Duchamp presentó 'Fuente', un urinario de porcelana firmado 'R. Mutt', a la exposición de la Sociedad de Artistas Independientes de 1917. Este readymade revolucionó el arte conceptual al cuestionar qué podía considerarse arte.",
                de: "Marcel Duchamp reichte 'Fountain', ein Porzellan-Urinal signiert mit 'R. Mutt', zur Ausstellung der Society of Independent Artists 1917 ein. Dieses Readymade revolutionierte die Konzeptkunst, indem es die Frage stellte, was als Kunst betrachtet werden kann.",
                nl: "Marcel Duchamp diende 'Fountain' in, een porseleinen urinoir gesigneerd 'R. Mutt', bij de tentoonstelling van de Society of Independent Artists in 1917. Dit readymade revolutioneerde de conceptuele kunst door te bevragen wat als kunst beschouwd kan worden."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else if (typeof window !== 'undefined') {
        window.kunstenaarsLevel4 = questions;
    }
})();