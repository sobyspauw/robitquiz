(() => {
    const questions = [
        {
            question: {
                en: "Which technique involves applying thick layers of paint to create texture?",
                es: "¿Qué técnica implica aplicar capas gruesas de pintura para crear textura?",
                de: "Welche Technik beinhaltet das Auftragen dicker Farbschichten zur Texturerstellung?",
                nl: "Welke techniek houdt in dat dikke verflagen worden aangebracht om textuur te creëren?"
            },
            options: [
                {
                    en: "Impasto",
                    es: "Impasto",
                    de: "Impasto",
                    nl: "Impasto"
                },
                {
                    en: "Glazing",
                    es: "Veladuras",
                    de: "Lasieren",
                    nl: "Glaceren"
                },
                {
                    en: "Scumbling",
                    es: "Esfumado",
                    de: "Schichtmalerei",
                    nl: "Scumbling"
                },
                {
                    en: "Sfumato",
                    es: "Sfumato",
                    de: "Sfumato",
                    nl: "Sfumato"
                }
            ],
            correct: 0,
            explanation: {
                en: "Impasto is a painting technique where paint is laid on thickly, often with visible brush or palette knife marks. Van Gogh and Cézanne were masters of this technique.",
                es: "El impasto es una técnica de pintura donde la pintura se aplica espesamente, a menudo con marcas visibles de pincel o espátula. Van Gogh y Cézanne fueron maestros de esta técnica.",
                de: "Impasto ist eine Maltechnik, bei der Farbe dick aufgetragen wird, oft mit sichtbaren Pinsel- oder Spachtelspuren. Van Gogh und Cézanne waren Meister dieser Technik.",
                nl: "Impasto is een schildertechniek waarbij verf dik wordt opgebracht, vaak met zichtbare penseel- of paletmesstreken. Van Gogh en Cézanne waren meesters van deze techniek."
            }
        },
        {
            question: {
                en: "Who painted 'The Raft of the Medusa'?",
                es: "¿Quién pintó 'La Balsa de la Medusa'?",
                de: "Wer malte 'Das Floß der Medusa'?",
                nl: "Wie schilderde 'Het Vlot van de Medusa'?"
            },
            options: [
                {
                    en: "Théodore Géricault",
                    es: "Théodore Géricault",
                    de: "Théodore Géricault",
                    nl: "Théodore Géricault"
                },
                {
                    en: "Eugène Delacroix",
                    es: "Eugène Delacroix",
                    de: "Eugène Delacroix",
                    nl: "Eugène Delacroix"
                },
                {
                    en: "Caspar David Friedrich",
                    es: "Caspar David Friedrich",
                    de: "Caspar David Friedrich",
                    nl: "Caspar David Friedrich"
                },
                {
                    en: "J.M.W. Turner",
                    es: "J.M.W. Turner",
                    de: "J.M.W. Turner",
                    nl: "J.M.W. Turner"
                }
            ],
            correct: 0,
            explanation: {
                en: "Théodore Géricault painted 'The Raft of the Medusa' in 1819. This Romantic masterpiece depicts survivors of a real shipwreck and marked a shift from Neoclassical to Romantic art.",
                es: "Théodore Géricault pintó 'La Balsa de la Medusa' en 1819. Esta obra maestra romántica representa a los supervivientes de un naufragio real y marcó un cambio del arte neoclásico al romántico.",
                de: "Théodore Géricault malte 'Das Floß der Medusa' 1819. Dieses romantische Meisterwerk zeigt Überlebende eines echten Schiffbruchs und markierte einen Wandel von der neoklassischen zur romantischen Kunst.",
                nl: "Théodore Géricault schilderde 'Het Vlot van de Medusa' in 1819. Dit romantische meesterwerk toont overlevenden van een echte schipbreuk en markeerde een verschuiving van neoklassieke naar romantische kunst."
            }
        },
        {
            question: {
                en: "Which artist founded the Pre-Raphaelite Brotherhood?",
                es: "¿Qué artista fundó la Hermandad Prerrafaelita?",
                de: "Welcher Künstler gründete die Präraffaelitische Bruderschaft?",
                nl: "Welke kunstenaar stichtte de Pre-Raphaelite Brotherhood?"
            },
            options: [
                {
                    en: "Dante Gabriel Rossetti",
                    es: "Dante Gabriel Rossetti",
                    de: "Dante Gabriel Rossetti",
                    nl: "Dante Gabriel Rossetti"
                },
                {
                    en: "John Everett Millais",
                    es: "John Everett Millais",
                    de: "John Everett Millais",
                    nl: "John Everett Millais"
                },
                {
                    en: "William Holman Hunt",
                    es: "William Holman Hunt",
                    de: "William Holman Hunt",
                    nl: "William Holman Hunt"
                },
                {
                    en: "Edward Burne-Jones",
                    es: "Edward Burne-Jones",
                    de: "Edward Burne-Jones",
                    nl: "Edward Burne-Jones"
                }
            ],
            correct: 0,
            explanation: {
                en: "Dante Gabriel Rossetti co-founded the Pre-Raphaelite Brotherhood in 1848 with John Everett Millais and William Holman Hunt. The movement sought to return to detailed, intense colors and complex compositions of Quattrocento Italian art.",
                es: "Dante Gabriel Rossetti co-fundó la Hermandad Prerrafaelita en 1848 con John Everett Millais y William Holman Hunt. El movimiento buscaba volver a los colores intensos y detallados y las composiciones complejas del arte italiano del Quattrocento.",
                de: "Dante Gabriel Rossetti gründete 1848 mit John Everett Millais und William Holman Hunt die Präraffaelitische Bruderschaft. Die Bewegung suchte die Rückkehr zu detaillierten, intensiven Farben und komplexen Kompositionen der italienischen Quattrocento-Kunst.",
                nl: "Dante Gabriel Rossetti stichtte in 1848 samen met John Everett Millais en William Holman Hunt de Pre-Raphaelite Brotherhood. De beweging streefde naar een terugkeer naar gedetailleerde, intense kleuren en complexe composities van Quattrocento Italiaanse kunst."
            }
        },
        {
            question: {
                en: "What art movement did Wassily Kandinsky help pioneer?",
                es: "¿Qué movimiento artístico ayudó a ser pionero Wassily Kandinsky?",
                de: "Welche Kunstbewegung half Wassily Kandinsky zu begründen?",
                nl: "Welke kunststroming hielp Wassily Kandinsky pionieren?"
            },
            options: [
                {
                    en: "Abstract art",
                    es: "Arte abstracto",
                    de: "Abstrakte Kunst",
                    nl: "Abstracte kunst"
                },
                {
                    en: "Dadaism",
                    es: "Dadaísmo",
                    de: "Dadaismus",
                    nl: "Dadaïsme"
                },
                {
                    en: "Constructivism",
                    es: "Constructivismo",
                    de: "Konstruktivismus",
                    nl: "Constructivisme"
                },
                {
                    en: "Futurism",
                    es: "Futurismo",
                    de: "Futurismus",
                    nl: "Futurisme"
                }
            ],
            correct: 0,
            explanation: {
                en: "Wassily Kandinsky is credited with creating the first purely abstract painting around 1910. His work 'Composition VII' and theoretical writings laid the foundation for abstract art.",
                es: "A Wassily Kandinsky se le atribuye la creación de la primera pintura puramente abstracta alrededor de 1910. Su obra 'Composición VII' y escritos teóricos sentaron las bases del arte abstracto.",
                de: "Wassily Kandinsky wird die Schaffung des ersten rein abstrakten Gemäldes um 1910 zugeschrieben. Sein Werk 'Komposition VII' und theoretische Schriften legten das Fundament für die abstrakte Kunst.",
                nl: "Wassily Kandinsky wordt gecrediteerd met het creëren van het eerste puur abstracte schilderij rond 1910. Zijn werk 'Compositie VII' en theoretische geschriften legden de basis voor abstracte kunst."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Large Bathers' (Les Grandes Baigneuses)?",
                es: "¿Qué artista pintó 'Las Grandes Bañistas' (Les Grandes Baigneuses)?",
                de: "Welcher Künstler malte 'Die großen Badenden' (Les Grandes Baigneuses)?",
                nl: "Welke kunstenaar schilderde 'De Grote Badsters' (Les Grandes Baigneuses)?"
            },
            options: [
                {
                    en: "Paul Cézanne",
                    es: "Paul Cézanne",
                    de: "Paul Cézanne",
                    nl: "Paul Cézanne"
                },
                {
                    en: "Pierre-Auguste Renoir",
                    es: "Pierre-Auguste Renoir",
                    de: "Pierre-Auguste Renoir",
                    nl: "Pierre-Auguste Renoir"
                },
                {
                    en: "Edgar Degas",
                    es: "Edgar Degas",
                    de: "Edgar Degas",
                    nl: "Edgar Degas"
                },
                {
                    en: "Jean-Auguste-Dominique Ingres",
                    es: "Jean-Auguste-Dominique Ingres",
                    de: "Jean-Auguste-Dominique Ingres",
                    nl: "Jean-Auguste-Dominique Ingres"
                }
            ],
            correct: 0,
            explanation: {
                en: "Paul Cézanne painted three versions of 'The Large Bathers' between 1895-1906. These works synthesized his observations of nature with geometric structure, influencing both Fauvism and Cubism.",
                es: "Paul Cézanne pintó tres versiones de 'Las Grandes Bañistas' entre 1895-1906. Estas obras sintetizaron sus observaciones de la naturaleza con estructura geométrica, influyendo tanto en el Fauvismo como en el Cubismo.",
                de: "Paul Cézanne malte zwischen 1895-1906 drei Versionen von 'Die großen Badenden'. Diese Werke synthethisierten seine Naturbeobachtungen mit geometrischer Struktur und beeinflussten sowohl Fauvismus als auch Kubismus.",
                nl: "Paul Cézanne schilderde drie versies van 'De Grote Badsters' tussen 1895-1906. Deze werken combineerden zijn observaties van de natuur met geometrische structuur, wat zowel het Fauvisme als het Kubisme beïnvloedde."
            }
        },
        {
            question: {
                en: "Who was the leading figure of the Ashcan School?",
                es: "¿Quién fue la figura principal de la Escuela del Basurero?",
                de: "Wer war die führende Figur der Ashcan School?",
                nl: "Wie was de leidende figuur van de Ashcan School?"
            },
            options: [
                {
                    en: "Robert Henri",
                    es: "Robert Henri",
                    de: "Robert Henri",
                    nl: "Robert Henri"
                },
                {
                    en: "George Bellows",
                    es: "George Bellows",
                    de: "George Bellows",
                    nl: "George Bellows"
                },
                {
                    en: "John Sloan",
                    es: "John Sloan",
                    de: "John Sloan",
                    nl: "John Sloan"
                },
                {
                    en: "Edward Hopper",
                    es: "Edward Hopper",
                    de: "Edward Hopper",
                    nl: "Edward Hopper"
                }
            ],
            correct: 0,
            explanation: {
                en: "Robert Henri led the Ashcan School, an American art movement of the early 20th century that depicted scenes of daily life in New York's poorer neighborhoods with a realistic style.",
                es: "Robert Henri lideró la Escuela del Basurero, un movimiento artístico estadounidense de principios del siglo XX que representaba escenas de la vida diaria en los barrios más pobres de Nueva York con un estilo realista.",
                de: "Robert Henri führte die Ashcan School an, eine amerikanische Kunstbewegung des frühen 20. Jahrhunderts, die Szenen des täglichen Lebens in New Yorks ärmeren Vierteln in realistischem Stil darstellte.",
                nl: "Robert Henri leidde de Ashcan School, een Amerikaanse kunstbeweging van het begin van de 20e eeuw die scènes van het dagelijks leven in New York's armere buurten met een realistische stijl uitbeeldde."
            }
        },
        {
            question: {
                en: "Which artist painted 'Nighthawks'?",
                es: "¿Qué artista pintó 'Nighthawks'?",
                de: "Welcher Künstler malte 'Nighthawks'?",
                nl: "Welke kunstenaar schilderde 'Nighthawks'?"
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
                    en: "Thomas Hart Benton",
                    es: "Thomas Hart Benton",
                    de: "Thomas Hart Benton",
                    nl: "Thomas Hart Benton"
                },
                {
                    en: "John Steuart Curry",
                    es: "John Steuart Curry",
                    de: "John Steuart Curry",
                    nl: "John Steuart Curry"
                }
            ],
            correct: 0,
            explanation: {
                en: "Edward Hopper painted 'Nighthawks' in 1942. This iconic work depicts urban isolation and has become one of the most recognizable images in American art.",
                es: "Edward Hopper pintó 'Nighthawks' en 1942. Esta obra icónica representa el aislamiento urbano y se ha convertido en una de las imágenes más reconocibles del arte estadounidense.",
                de: "Edward Hopper malte 'Nighthawks' 1942. Dieses ikonische Werk zeigt urbane Isolation und ist zu einem der erkennbarsten Bilder der amerikanischen Kunst geworden.",
                nl: "Edward Hopper schilderde 'Nighthawks' in 1942. Dit iconische werk toont stedelijke isolatie en is een van de meest herkenbare beelden in de Amerikaanse kunst geworden."
            }
        },
        {
            question: {
                en: "Who painted 'The Turkish Bath'?",
                es: "¿Quién pintó 'El Baño Turco'?",
                de: "Wer malte 'Das türkische Bad'?",
                nl: "Wie schilderde 'Het Turkse Bad'?"
            },
            options: [
                {
                    en: "Jean-Auguste-Dominique Ingres",
                    es: "Jean-Auguste-Dominique Ingres",
                    de: "Jean-Auguste-Dominique Ingres",
                    nl: "Jean-Auguste-Dominique Ingres"
                },
                {
                    en: "Eugène Delacroix",
                    es: "Eugène Delacroix",
                    de: "Eugène Delacroix",
                    nl: "Eugène Delacroix"
                },
                {
                    en: "Jean-Léon Gérôme",
                    es: "Jean-Léon Gérôme",
                    de: "Jean-Léon Gérôme",
                    nl: "Jean-Léon Gérôme"
                },
                {
                    en: "Alexandre Cabanel",
                    es: "Alexandre Cabanel",
                    de: "Alexandre Cabanel",
                    nl: "Alexandre Cabanel"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jean-Auguste-Dominique Ingres painted 'The Turkish Bath' in 1862 when he was 82 years old. This orientalist masterpiece features his characteristic precise line and sensual forms.",
                es: "Jean-Auguste-Dominique Ingres pintó 'El Baño Turco' en 1862 cuando tenía 82 años. Esta obra maestra orientalista presenta su línea precisa característica y formas sensuales.",
                de: "Jean-Auguste-Dominique Ingres malte 'Das türkische Bad' 1862, als er 82 Jahre alt war. Dieses orientalistische Meisterwerk zeigt seine charakteristische präzise Linie und sinnliche Formen.",
                nl: "Jean-Auguste-Dominique Ingres schilderde 'Het Turkse Bad' in 1862 toen hij 82 jaar oud was. Dit oriëntalistische meesterwerk toont zijn karakteristieke precieze lijn en sensuele vormen."
            }
        },
        {
            question: {
                en: "Which artist created the 'Campbell's Soup Cans' series?",
                es: "¿Qué artista creó la serie 'Latas de Sopa Campbell's'?",
                de: "Welcher Künstler schuf die Serie 'Campbell's Soup Cans'?",
                nl: "Welke kunstenaar creëerde de serie 'Campbell's Soup Cans'?"
            },
            options: [
                {
                    en: "Andy Warhol",
                    es: "Andy Warhol",
                    de: "Andy Warhol",
                    nl: "Andy Warhol"
                },
                {
                    en: "Roy Lichtenstein",
                    es: "Roy Lichtenstein",
                    de: "Roy Lichtenstein",
                    nl: "Roy Lichtenstein"
                },
                {
                    en: "Claes Oldenburg",
                    es: "Claes Oldenburg",
                    de: "Claes Oldenburg",
                    nl: "Claes Oldenburg"
                },
                {
                    en: "James Rosenquist",
                    es: "James Rosenquist",
                    de: "James Rosenquist",
                    nl: "James Rosenquist"
                }
            ],
            correct: 0,
            explanation: {
                en: "Andy Warhol created the 'Campbell's Soup Cans' series in 1962, consisting of 32 canvases each depicting a different variety of Campbell's soup. This work launched his career and defined Pop Art.",
                es: "Andy Warhol creó la serie 'Latas de Sopa Campbell's' en 1962, consistente en 32 lienzos cada uno representando una variedad diferente de sopa Campbell's. Esta obra lanzó su carrera y definió el Arte Pop.",
                de: "Andy Warhol schuf 1962 die Serie 'Campbell's Soup Cans', bestehend aus 32 Leinwänden, die jeweils eine andere Campbell's Suppensorte darstellen. Dieses Werk startete seine Karriere und definierte Pop Art.",
                nl: "Andy Warhol creëerde de serie 'Campbell's Soup Cans' in 1962, bestaande uit 32 doeken die elk een andere variëteit Campbell's soep uitbeelden. Dit werk lanceerde zijn carrière en definieerde Pop Art."
            }
        },
        {
            question: {
                en: "What painting technique did Jackson Pollock famously use?",
                es: "¿Qué técnica de pintura usó famosamente Jackson Pollock?",
                de: "Welche Maltechnik verwendete Jackson Pollock berühmt?",
                nl: "Welke schildertechniek gebruikte Jackson Pollock beroemd?"
            },
            options: [
                {
                    en: "Drip painting",
                    es: "Pintura por goteo",
                    de: "Tropfmalerei",
                    nl: "Druppelschilderen"
                },
                {
                    en: "Color field painting",
                    es: "Pintura de campo de color",
                    de: "Farbfeldmalerei",
                    nl: "Kleurvlakschilderen"
                },
                {
                    en: "Hard-edge painting",
                    es: "Pintura de borde duro",
                    de: "Hard-Edge-Malerei",
                    nl: "Hard-edge schilderen"
                },
                {
                    en: "Photorealism",
                    es: "Fotorrealismo",
                    de: "Fotorealismus",
                    nl: "Fotorealisme"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jackson Pollock developed the drip painting technique, where he would drip or pour paint onto canvas laid on the floor. This method allowed him to work from all sides and became central to Abstract Expressionism.",
                es: "Jackson Pollock desarrolló la técnica de pintura por goteo, donde goteaba o vertía pintura sobre lienzo puesto en el suelo. Este método le permitía trabajar desde todos los lados y se volvió central al Expresionismo Abstracto.",
                de: "Jackson Pollock entwickelte die Tropfmaltechnik, bei der er Farbe auf eine am Boden liegende Leinwand tropfte oder goss. Diese Methode erlaubte ihm, von allen Seiten zu arbeiten und wurde zentral für den Abstrakten Expressionismus.",
                nl: "Jackson Pollock ontwikkelde de druppelschildertechniek, waarbij hij verf op een op de grond liggend doek druppelde of goot. Deze methode stelde hem in staat om van alle kanten te werken en werd centraal voor het Abstract Expressionisme."
            }
        },
        {
            question: {
                en: "Who painted 'The Hay Wain'?",
                es: "¿Quién pintó 'El Carro de Heno'?",
                de: "Wer malte 'Der Heuwagen'?",
                nl: "Wie schilderde 'De Hooiwagen'?"
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
                    en: "Richard Wilson",
                    es: "Richard Wilson",
                    de: "Richard Wilson",
                    nl: "Richard Wilson"
                }
            ],
            correct: 0,
            explanation: {
                en: "John Constable painted 'The Hay Wain' in 1821. This landscape painting of the English countryside is one of the most famous works in British art and influenced the French Impressionists.",
                es: "John Constable pintó 'El Carro de Heno' en 1821. Esta pintura de paisaje del campo inglés es una de las obras más famosas del arte británico e influyó en los impresionistas franceses.",
                de: "John Constable malte 'Der Heuwagen' 1821. Dieses Landschaftsgemälde der englischen Landschaft ist eines der berühmtesten Werke der britischen Kunst und beeinflusste die französischen Impressionisten.",
                nl: "John Constable schilderde 'De Hooiwagen' in 1821. Dit landschapsschilderij van het Engelse platteland is een van de beroemdste werken in de Britse kunst en beïnvloedde de Franse Impressionisten."
            }
        },
        {
            question: {
                en: "Which art movement was characterized by geometric shapes and multiple perspectives?",
                es: "¿Qué movimiento artístico se caracterizó por formas geométricas y múltiples perspectivas?",
                de: "Welche Kunstbewegung war durch geometrische Formen und multiple Perspektiven gekennzeichnet?",
                nl: "Welke kunststroming werd gekenmerkt door geometrische vormen en meerdere perspectieven?"
            },
            options: [
                {
                    en: "Cubism",
                    es: "Cubismo",
                    de: "Kubismus",
                    nl: "Kubisme"
                },
                {
                    en: "Futurism",
                    es: "Futurismo",
                    de: "Futurismus",
                    nl: "Futurisme"
                },
                {
                    en: "Constructivism",
                    es: "Constructivismo",
                    de: "Konstruktivismus",
                    nl: "Constructivisme"
                },
                {
                    en: "Suprematism",
                    es: "Suprematismo",
                    de: "Suprematismus",
                    nl: "Suprematisme"
                }
            ],
            correct: 0,
            explanation: {
                en: "Cubism, developed by Picasso and Braque, revolutionized European painting by depicting subjects from multiple viewpoints simultaneously and reducing them to geometric forms.",
                es: "El Cubismo, desarrollado por Picasso y Braque, revolucionó la pintura europea al representar sujetos desde múltiples puntos de vista simultáneamente y reduciéndolos a formas geométricas.",
                de: "Der Kubismus, entwickelt von Picasso und Braque, revolutionierte die europäische Malerei, indem Motive gleichzeitig aus mehreren Blickwinkeln dargestellt und auf geometrische Formen reduziert wurden.",
                nl: "Het Kubisme, ontwikkeld door Picasso en Braque, revolutioneerde de Europese schilderkunst door onderwerpen gelijktijdig vanuit meerdere gezichtspunten weer te geven en ze tot geometrische vormen te reduceren."
            }
        },
        {
            question: {
                en: "Who painted 'The Fighting Temeraire'?",
                es: "¿Quién pintó 'El Temerario Luchador'?",
                de: "Wer malte 'The Fighting Temeraire'?",
                nl: "Wie schilderde 'The Fighting Temeraire'?"
            },
            options: [
                {
                    en: "J.M.W. Turner",
                    es: "J.M.W. Turner",
                    de: "J.M.W. Turner",
                    nl: "J.M.W. Turner"
                },
                {
                    en: "John Constable",
                    es: "John Constable",
                    de: "John Constable",
                    nl: "John Constable"
                },
                {
                    en: "Caspar David Friedrich",
                    es: "Caspar David Friedrich",
                    de: "Caspar David Friedrich",
                    nl: "Caspar David Friedrich"
                },
                {
                    en: "Thomas Cole",
                    es: "Thomas Cole",
                    de: "Thomas Cole",
                    nl: "Thomas Cole"
                }
            ],
            correct: 0,
            explanation: {
                en: "J.M.W. Turner painted 'The Fighting Temeraire' in 1839. This Romantic masterpiece depicts the old warship being towed to be broken up, symbolizing the end of an era.",
                es: "J.M.W. Turner pintó 'El Temerario Luchador' en 1839. Esta obra maestra romántica representa el viejo buque de guerra siendo remolcado para ser desguazado, simbolizando el fin de una era.",
                de: "J.M.W. Turner malte 'The Fighting Temeraire' 1839. Dieses romantische Meisterwerk zeigt das alte Kriegsschiff, das zum Abwracken geschleppt wird, und symbolisiert das Ende einer Ära.",
                nl: "J.M.W. Turner schilderde 'The Fighting Temeraire' in 1839. Dit romantische meesterwerk toont het oude oorlogsschip dat wordt weggesleept om gesloopt te worden, wat het einde van een tijdperk symboliseert."
            }
        },
        {
            question: {
                en: "Which artist painted 'Where Do We Come From? What Are We? Where Are We Going?'?",
                es: "¿Qué artista pintó '¿De dónde venimos? ¿Qué somos? ¿A dónde vamos?'?",
                de: "Welcher Künstler malte 'Woher kommen wir? Was sind wir? Wohin gehen wir?'?",
                nl: "Welke kunstenaar schilderde 'Waar komen we vandaan? Wat zijn we? Waar gaan we heen?'?"
            },
            options: [
                {
                    en: "Paul Gauguin",
                    es: "Paul Gauguin",
                    de: "Paul Gauguin",
                    nl: "Paul Gauguin"
                },
                {
                    en: "Henri de Toulouse-Lautrec",
                    es: "Henri de Toulouse-Lautrec",
                    de: "Henri de Toulouse-Lautrec",
                    nl: "Henri de Toulouse-Lautrec"
                },
                {
                    en: "Paul Sérusier",
                    es: "Paul Sérusier",
                    de: "Paul Sérusier",
                    nl: "Paul Sérusier"
                },
                {
                    en: "Émile Bernard",
                    es: "Émile Bernard",
                    de: "Émile Bernard",
                    nl: "Émile Bernard"
                }
            ],
            correct: 0,
            explanation: {
                en: "Paul Gauguin painted this philosophical masterpiece in 1897-1898 during his time in Tahiti. The large canvas explores the cycle of human life through Polynesian figures.",
                es: "Paul Gauguin pintó esta obra maestra filosófica en 1897-1898 durante su tiempo en Tahití. El gran lienzo explora el ciclo de la vida humana a través de figuras polinesias.",
                de: "Paul Gauguin malte dieses philosophische Meisterwerk 1897-1898 während seiner Zeit in Tahiti. Die große Leinwand erforscht den Zyklus des menschlichen Lebens durch polynesische Figuren.",
                nl: "Paul Gauguin schilderde dit filosofische meesterwerk in 1897-1898 tijdens zijn tijd in Tahiti. Het grote doek verkent de cyclus van het menselijk leven door Polynesische figuren."
            }
        },
        {
            question: {
                en: "Who was the founder of the Bauhaus school?",
                es: "¿Quién fue el fundador de la escuela Bauhaus?",
                de: "Wer war der Gründer der Bauhaus-Schule?",
                nl: "Wie was de oprichter van de Bauhaus school?"
            },
            options: [
                {
                    en: "Walter Gropius",
                    es: "Walter Gropius",
                    de: "Walter Gropius",
                    nl: "Walter Gropius"
                },
                {
                    en: "Ludwig Mies van der Rohe",
                    es: "Ludwig Mies van der Rohe",
                    de: "Ludwig Mies van der Rohe",
                    nl: "Ludwig Mies van der Rohe"
                },
                {
                    en: "Marcel Breuer",
                    es: "Marcel Breuer",
                    de: "Marcel Breuer",
                    nl: "Marcel Breuer"
                },
                {
                    en: "Paul Klee",
                    es: "Paul Klee",
                    de: "Paul Klee",
                    nl: "Paul Klee"
                }
            ],
            correct: 0,
            explanation: {
                en: "Walter Gropius founded the Bauhaus school in Weimar, Germany in 1919. This influential design school combined crafts and fine arts, emphasizing functional design and modern materials.",
                es: "Walter Gropius fundó la escuela Bauhaus en Weimar, Alemania en 1919. Esta influyente escuela de diseño combinó artesanías y bellas artes, enfatizando el diseño funcional y materiales modernos.",
                de: "Walter Gropius gründete 1919 die Bauhaus-Schule in Weimar, Deutschland. Diese einflussreiche Designschule kombinierte Handwerk und bildende Kunst und betonte funktionales Design und moderne Materialien.",
                nl: "Walter Gropius stichtte de Bauhaus school in Weimar, Duitsland in 1919. Deze invloedrijke ontwerpschool combineerde ambachten en beeldende kunst, met nadruk op functioneel ontwerp en moderne materialen."
            }
        },
        {
            question: {
                en: "Which artist painted 'Composition with Red Blue and Yellow'?",
                es: "¿Qué artista pintó 'Composición con Rojo Azul y Amarillo'?",
                de: "Welcher Künstler malte 'Komposition mit Rot Blau und Gelb'?",
                nl: "Welke kunstenaar schilderde 'Compositie met Rood Blauw en Geel'?"
            },
            options: [
                {
                    en: "Piet Mondrian",
                    es: "Piet Mondrian",
                    de: "Piet Mondrian",
                    nl: "Piet Mondrian"
                },
                {
                    en: "Theo van Doesburg",
                    es: "Theo van Doesburg",
                    de: "Theo van Doesburg",
                    nl: "Theo van Doesburg"
                },
                {
                    en: "Gerrit Rietveld",
                    es: "Gerrit Rietveld",
                    de: "Gerrit Rietveld",
                    nl: "Gerrit Rietveld"
                },
                {
                    en: "Bart van der Leck",
                    es: "Bart van der Leck",
                    de: "Bart van der Leck",
                    nl: "Bart van der Leck"
                }
            ],
            correct: 0,
            explanation: {
                en: "Piet Mondrian painted 'Composition with Red Blue and Yellow' in 1930. This work exemplifies his neoplastic style with geometric forms and primary colors, central to the De Stijl movement.",
                es: "Piet Mondrian pintó 'Composición con Rojo Azul y Amarillo' en 1930. Esta obra ejemplifica su estilo neoplástico con formas geométricas y colores primarios, central al movimiento De Stijl.",
                de: "Piet Mondrian malte 'Komposition mit Rot Blau und Gelb' 1930. Dieses Werk verkörpert seinen neoplastischen Stil mit geometrischen Formen und Grundfarben, zentral für die De Stijl-Bewegung.",
                nl: "Piet Mondrian schilderde 'Compositie met Rood Blauw en Geel' in 1930. Dit werk is exemplarisch voor zijn neoplastische stijl met geometrische vormen en primaire kleuren, centraal in de De Stijl beweging."
            }
        },
        {
            question: {
                en: "Who painted 'Christina's World'?",
                es: "¿Quién pintó 'El Mundo de Christina'?",
                de: "Wer malte 'Christinas Welt'?",
                nl: "Wie schilderde 'Christina's Wereld'?"
            },
            options: [
                {
                    en: "Andrew Wyeth",
                    es: "Andrew Wyeth",
                    de: "Andrew Wyeth",
                    nl: "Andrew Wyeth"
                },
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
                    en: "Georgia O'Keeffe",
                    es: "Georgia O'Keeffe",
                    de: "Georgia O'Keeffe",
                    nl: "Georgia O'Keeffe"
                }
            ],
            correct: 0,
            explanation: {
                en: "Andrew Wyeth painted 'Christina's World' in 1948. This iconic American painting depicts Christina Olson, who was paralyzed from the waist down, in a field near her home in Maine.",
                es: "Andrew Wyeth pintó 'El Mundo de Christina' en 1948. Esta pintura americana icónica representa a Christina Olson, quien estaba paralizada de la cintura para abajo, en un campo cerca de su hogar en Maine.",
                de: "Andrew Wyeth malte 'Christinas Welt' 1948. Dieses ikonische amerikanische Gemälde zeigt Christina Olson, die von der Taille abwärts gelähmt war, auf einem Feld in der Nähe ihres Hauses in Maine.",
                nl: "Andrew Wyeth schilderde 'Christina's Wereld' in 1948. Dit iconische Amerikaanse schilderij toont Christina Olson, die vanaf haar middel verlamd was, in een veld bij haar huis in Maine."
            }
        },
        {
            question: {
                en: "Which movement did Henri Matisse lead with André Derain?",
                es: "¿Qué movimiento lideró Henri Matisse con André Derain?",
                de: "Welche Bewegung führte Henri Matisse mit André Derain an?",
                nl: "Welke beweging leidde Henri Matisse samen met André Derain?"
            },
            options: [
                {
                    en: "Fauvism",
                    es: "Fauvismo",
                    de: "Fauvismus",
                    nl: "Fauvisme"
                },
                {
                    en: "Post-Impressionism",
                    es: "Post-Impresionismo",
                    de: "Post-Impressionismus",
                    nl: "Post-Impressionisme"
                },
                {
                    en: "Expressionism",
                    es: "Expresionismo",
                    de: "Expressionismus",
                    nl: "Expressionisme"
                },
                {
                    en: "Cubism",
                    es: "Cubismo",
                    de: "Kubismus",
                    nl: "Kubisme"
                }
            ],
            correct: 0,
            explanation: {
                en: "Henri Matisse and André Derain were leaders of Fauvism, an early 20th-century movement characterized by bold, non-naturalistic colors and expressive brushwork.",
                es: "Henri Matisse y André Derain fueron líderes del Fauvismo, un movimiento de principios del siglo XX caracterizado por colores audaces no naturalistas y pinceladas expresivas.",
                de: "Henri Matisse und André Derain waren Anführer des Fauvismus, einer Bewegung des frühen 20. Jahrhunderts, die durch kühne, nicht-naturalistische Farben und expressive Pinselführung gekennzeichnet war.",
                nl: "Henri Matisse en André Derain waren leiders van het Fauvisme, een beweging van het begin van de 20e eeuw gekenmerkt door gedurfde, niet-naturalistische kleuren en expressieve penseelvoering."
            }
        }
    ,
        {
            question: {
                en: "Who painted 'Olympia', which caused scandal at the 1865 Paris Salon?",
                es: "¿Quién pintó 'Olympia', que causó escándalo en el Salón de París de 1865?",
                de: "Wer malte 'Olympia', das 1865 im Pariser Salon für Skandal sorgte?",
                nl: "Wie schilderde 'Olympia', dat voor schandaal zorgde in de Parijse Salon van 1865?"
            },
            options: [
                {
                    en: "Édouard Manet",
                    es: "Édouard Manet",
                    de: "Édouard Manet",
                    nl: "Édouard Manet"
                },
                {
                    en: "Gustave Courbet",
                    es: "Gustave Courbet",
                    de: "Gustave Courbet",
                    nl: "Gustave Courbet"
                },
                {
                    en: "Edgar Degas",
                    es: "Edgar Degas",
                    de: "Edgar Degas",
                    nl: "Edgar Degas"
                },
                {
                    en: "Pierre-Auguste Renoir",
                    es: "Pierre-Auguste Renoir",
                    de: "Pierre-Auguste Renoir",
                    nl: "Pierre-Auguste Renoir"
                }
            ],
            correct: 0,
            explanation: {
                en: "Édouard Manet painted 'Olympia' in 1863, exhibiting it in 1865. The nude's direct gaze and modern setting shocked audiences, challenging traditional representations of the female nude and marking a break from academic painting.",
                es: "Édouard Manet pintó 'Olympia' en 1863, exhibiéndola en 1865. La mirada directa de la desnuda y el escenario moderno sorprendieron al público, desafiando las representaciones tradicionales del desnudo femenino y marcando una ruptura con la pintura académica.",
                de: "Édouard Manet malte 'Olympia' 1863 und stellte es 1865 aus. Der direkte Blick der Nackten und die moderne Kulisse schockierten das Publikum, stellten traditionelle Darstellungen des weiblichen Aktes in Frage und markierten einen Bruch mit der akademischen Malerei.",
                nl: "Édouard Manet schilderde 'Olympia' in 1863 en stelde het tentoon in 1865. De directe blik van de naakte en de moderne setting schokten het publiek, daagden traditionele representaties van het vrouwelijk naakt uit en markeerden een breuk met de academische schilderkunst."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Scream' in multiple versions?",
                es: "¿Qué artista pintó 'El Grito' en múltiples versiones?",
                de: "Welcher Künstler malte 'Der Schrei' in mehreren Versionen?",
                nl: "Welke kunstenaar schilderde 'De Schreeuw' in meerdere versies?"
            },
            options: [
                {
                    en: "Edvard Munch",
                    es: "Edvard Munch",
                    de: "Edvard Munch",
                    nl: "Edvard Munch"
                },
                {
                    en: "James Ensor",
                    es: "James Ensor",
                    de: "James Ensor",
                    nl: "James Ensor"
                },
                {
                    en: "Egon Schiele",
                    es: "Egon Schiele",
                    de: "Egon Schiele",
                    nl: "Egon Schiele"
                },
                {
                    en: "Ernst Ludwig Kirchner",
                    es: "Ernst Ludwig Kirchner",
                    de: "Ernst Ludwig Kirchner",
                    nl: "Ernst Ludwig Kirchner"
                }
            ],
            correct: 0,
            explanation: {
                en: "Edvard Munch created four versions of 'The Scream' between 1893-1910, using tempera, oil, pastel, and crayon. This Expressionist masterpiece depicts existential anxiety and has become one of the most iconic images in art history.",
                es: "Edvard Munch creó cuatro versiones de 'El Grito' entre 1893-1910, usando témpera, óleo, pastel y crayón. Esta obra maestra expresionista representa la ansiedad existencial y se ha convertido en una de las imágenes más icónicas de la historia del arte.",
                de: "Edvard Munch schuf vier Versionen von 'Der Schrei' zwischen 1893-1910 mit Tempera, Öl, Pastell und Kreide. Dieses expressionistische Meisterwerk zeigt existenzielle Angst und ist zu einem der ikonischsten Bilder der Kunstgeschichte geworden.",
                nl: "Edvard Munch creëerde vier versies van 'De Schreeuw' tussen 1893-1910, gebruikmakend van tempera, olie, pastel en krijt. Dit expressionistische meesterwerk toont existentiële angst en is een van de meest iconische beelden in de kunstgeschiedenis geworden."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else if (typeof window !== 'undefined') {
        window.kunstenaarsLevel3 = questions;
    }
})();