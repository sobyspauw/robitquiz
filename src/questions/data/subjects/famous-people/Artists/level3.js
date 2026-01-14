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
        },
        {
            question: {
                en: "Who painted 'Guernica'?",
                es: "¿Quién pintó 'Guernica'?",
                de: "Wer malte 'Guernica'?",
                nl: "Wie schilderde 'Guernica'?"
            },
            options: [
                {
                    en: "Pablo Picasso",
                    es: "Pablo Picasso",
                    de: "Pablo Picasso",
                    nl: "Pablo Picasso"
                },
                {
                    en: "Georges Braque",
                    es: "Georges Braque",
                    de: "Georges Braque",
                    nl: "Georges Braque"
                },
                {
                    en: "Joan Miró",
                    es: "Joan Miró",
                    de: "Joan Miró",
                    nl: "Joan Miró"
                },
                {
                    en: "Salvador Dalí",
                    es: "Salvador Dalí",
                    de: "Salvador Dalí",
                    nl: "Salvador Dalí"
                }
            ],
            correct: 0,
            explanation: {
                en: "Pablo Picasso painted 'Guernica' in 1937 in response to the bombing of the Basque town during the Spanish Civil War. This monumental anti-war painting has become one of the most powerful political statements in art.",
                es: "Pablo Picasso pintó 'Guernica' en 1937 en respuesta al bombardeo del pueblo vasco durante la Guerra Civil Española. Esta monumental pintura anti-guerra se ha convertido en una de las declaraciones políticas más poderosas del arte.",
                de: "Pablo Picasso malte 'Guernica' 1937 als Reaktion auf die Bombardierung der baskischen Stadt während des Spanischen Bürgerkriegs. Dieses monumentale Anti-Kriegs-Gemälde ist zu einer der kraftvollsten politischen Aussagen in der Kunst geworden.",
                nl: "Pablo Picasso schilderde 'Guernica' in 1937 als reactie op het bombardement van de Baskische stad tijdens de Spaanse Burgeroorlog. Dit monumentale anti-oorlogsschilderij is een van de krachtigste politieke statements in de kunst geworden."
            }
        },
        {
            question: {
                en: "Which artist is known for painting ballet dancers and tutus?",
                es: "¿Qué artista es conocido por pintar bailarinas de ballet y tutús?",
                de: "Welcher Künstler ist bekannt für das Malen von Balletttänzerinnen und Tutus?",
                nl: "Welke kunstenaar staat bekend om het schilderen van balletdansers en tutu's?"
            },
            options: [
                {
                    en: "Edgar Degas",
                    es: "Edgar Degas",
                    de: "Edgar Degas",
                    nl: "Edgar Degas"
                },
                {
                    en: "Henri de Toulouse-Lautrec",
                    es: "Henri de Toulouse-Lautrec",
                    de: "Henri de Toulouse-Lautrec",
                    nl: "Henri de Toulouse-Lautrec"
                },
                {
                    en: "Mary Cassatt",
                    es: "Mary Cassatt",
                    de: "Mary Cassatt",
                    nl: "Mary Cassatt"
                },
                {
                    en: "Berthe Morisot",
                    es: "Berthe Morisot",
                    de: "Berthe Morisot",
                    nl: "Berthe Morisot"
                }
            ],
            correct: 0,
            explanation: {
                en: "Edgar Degas is renowned for his paintings, sculptures, and drawings of ballet dancers. More than half of his works depict dancers, capturing both rehearsals and performances with remarkable insight into their world.",
                es: "Edgar Degas es reconocido por sus pinturas, esculturas y dibujos de bailarinas de ballet. Más de la mitad de sus obras representan bailarinas, capturando tanto ensayos como actuaciones con notable percepción de su mundo.",
                de: "Edgar Degas ist berühmt für seine Gemälde, Skulpturen und Zeichnungen von Balletttänzerinnen. Mehr als die Hälfte seiner Werke zeigt Tänzerinnen und fängt sowohl Proben als auch Aufführungen mit bemerkenswertem Einblick in ihre Welt ein.",
                nl: "Edgar Degas is beroemd om zijn schilderijen, sculpturen en tekeningen van balletdansers. Meer dan de helft van zijn werken toont dansers, waarbij hij zowel repetities als optredens vastlegt met opmerkelijk inzicht in hun wereld."
            }
        },
        {
            question: {
                en: "Who painted 'Water Lilies' series?",
                es: "¿Quién pintó la serie 'Nenúfares'?",
                de: "Wer malte die Serie 'Seerosen'?",
                nl: "Wie schilderde de serie 'Waterlelies'?"
            },
            options: [
                {
                    en: "Claude Monet",
                    es: "Claude Monet",
                    de: "Claude Monet",
                    nl: "Claude Monet"
                },
                {
                    en: "Pierre-Auguste Renoir",
                    es: "Pierre-Auguste Renoir",
                    de: "Pierre-Auguste Renoir",
                    nl: "Pierre-Auguste Renoir"
                },
                {
                    en: "Camille Pissarro",
                    es: "Camille Pissarro",
                    de: "Camille Pissarro",
                    nl: "Camille Pissarro"
                },
                {
                    en: "Alfred Sisley",
                    es: "Alfred Sisley",
                    de: "Alfred Sisley",
                    nl: "Alfred Sisley"
                }
            ],
            correct: 0,
            explanation: {
                en: "Claude Monet painted approximately 250 oil paintings of water lilies over the last 30 years of his life. These paintings of his garden in Giverny are among the most celebrated works of Impressionism.",
                es: "Claude Monet pintó aproximadamente 250 pinturas al óleo de nenúfares durante los últimos 30 años de su vida. Estas pinturas de su jardín en Giverny están entre las obras más celebradas del Impresionismo.",
                de: "Claude Monet malte in den letzten 30 Jahren seines Lebens etwa 250 Ölgemälde von Seerosen. Diese Gemälde seines Gartens in Giverny gehören zu den gefeiertsten Werken des Impressionismus.",
                nl: "Claude Monet schilderde ongeveer 250 olieverfschilderijen van waterlelies gedurende de laatste 30 jaar van zijn leven. Deze schilderijen van zijn tuin in Giverny behoren tot de meest gevierde werken van het Impressionisme."
            }
        },
        {
            question: {
                en: "Which artist founded the suprematist movement?",
                es: "¿Qué artista fundó el movimiento suprematista?",
                de: "Welcher Künstler gründete die suprematistische Bewegung?",
                nl: "Welke kunstenaar stichtte de suprematistische beweging?"
            },
            options: [
                {
                    en: "Kazimir Malevich",
                    es: "Kazimir Malevich",
                    de: "Kasimir Malewitsch",
                    nl: "Kazimir Malevich"
                },
                {
                    en: "Wassily Kandinsky",
                    es: "Wassily Kandinsky",
                    de: "Wassily Kandinsky",
                    nl: "Wassily Kandinsky"
                },
                {
                    en: "El Lissitzky",
                    es: "El Lissitzky",
                    de: "El Lissitzky",
                    nl: "El Lissitzky"
                },
                {
                    en: "Alexander Rodchenko",
                    es: "Alexander Rodchenko",
                    de: "Alexander Rodtschenko",
                    nl: "Alexander Rodchenko"
                }
            ],
            correct: 0,
            explanation: {
                en: "Kazimir Malevich founded Suprematism around 1913, focusing on basic geometric shapes and a limited color palette. His 'Black Square' (1915) became an icon of abstract art and the movement.",
                es: "Kazimir Malevich fundó el Suprematismo alrededor de 1913, enfocándose en formas geométricas básicas y una paleta de colores limitada. Su 'Cuadrado Negro' (1915) se convirtió en un ícono del arte abstracto y del movimiento.",
                de: "Kasimir Malewitsch gründete den Suprematismus um 1913, mit Fokus auf grundlegende geometrische Formen und begrenzter Farbpalette. Sein 'Schwarzes Quadrat' (1915) wurde zur Ikone der abstrakten Kunst und der Bewegung.",
                nl: "Kazimir Malevich stichtte het Suprematisme rond 1913, met focus op basale geometrische vormen en een beperkt kleurenpalet. Zijn 'Zwart Vierkant' (1915) werd een icoon van abstracte kunst en de beweging."
            }
        },
        {
            question: {
                en: "Who painted 'The Garden of Earthly Delights'?",
                es: "¿Quién pintó 'El Jardín de las Delicias'?",
                de: "Wer malte 'Der Garten der Lüste'?",
                nl: "Wie schilderde 'De Tuin der Lusten'?"
            },
            options: [
                {
                    en: "Hieronymus Bosch",
                    es: "Hieronymus Bosch",
                    de: "Hieronymus Bosch",
                    nl: "Jheronimus Bosch"
                },
                {
                    en: "Pieter Bruegel the Elder",
                    es: "Pieter Bruegel el Viejo",
                    de: "Pieter Bruegel der Ältere",
                    nl: "Pieter Bruegel de Oudere"
                },
                {
                    en: "Albrecht Dürer",
                    es: "Alberto Durero",
                    de: "Albrecht Dürer",
                    nl: "Albrecht Dürer"
                },
                {
                    en: "Hans Holbein",
                    es: "Hans Holbein",
                    de: "Hans Holbein",
                    nl: "Hans Holbein"
                }
            ],
            correct: 0,
            explanation: {
                en: "Hieronymus Bosch painted 'The Garden of Earthly Delights' around 1490-1510. This triptych is filled with fantastical imagery depicting paradise, earthly pleasures, and hell, making it one of the most intriguing works in art history.",
                es: "Hieronymus Bosch pintó 'El Jardín de las Delicias' alrededor de 1490-1510. Este tríptico está lleno de imágenes fantásticas que representan el paraíso, los placeres terrenales y el infierno, convirtiéndolo en una de las obras más intrigantes de la historia del arte.",
                de: "Hieronymus Bosch malte 'Der Garten der Lüste' um 1490-1510. Dieses Triptychon ist gefüllt mit fantastischen Bildern, die Paradies, irdische Freuden und Hölle darstellen, was es zu einem der faszinierendsten Werke der Kunstgeschichte macht.",
                nl: "Jheronimus Bosch schilderde 'De Tuin der Lusten' rond 1490-1510. Dit drieluik is gevuld met fantastische beeldtaal die het paradijs, aardse genoegens en de hel uitbeeldt, waardoor het een van de meest intrigerende werken in de kunstgeschiedenis is."
            }
        },
        {
            question: {
                en: "Which artist created 'The Persistence of Memory' with melting clocks?",
                es: "¿Qué artista creó 'La Persistencia de la Memoria' con relojes derretidos?",
                de: "Welcher Künstler schuf 'Die Beständigkeit der Erinnerung' mit schmelzenden Uhren?",
                nl: "Welke kunstenaar creëerde 'De Volharding der Herinnering' met smeltende klokken?"
            },
            options: [
                {
                    en: "Salvador Dalí",
                    es: "Salvador Dalí",
                    de: "Salvador Dalí",
                    nl: "Salvador Dalí"
                },
                {
                    en: "René Magritte",
                    es: "René Magritte",
                    de: "René Magritte",
                    nl: "René Magritte"
                },
                {
                    en: "Max Ernst",
                    es: "Max Ernst",
                    de: "Max Ernst",
                    nl: "Max Ernst"
                },
                {
                    en: "Joan Miró",
                    es: "Joan Miró",
                    de: "Joan Miró",
                    nl: "Joan Miró"
                }
            ],
            correct: 0,
            explanation: {
                en: "Salvador Dalí painted 'The Persistence of Memory' in 1931. The surrealist masterpiece featuring melting pocket watches in a dreamlike landscape has become one of the most recognizable and parodied images in modern art.",
                es: "Salvador Dalí pintó 'La Persistencia de la Memoria' en 1931. Esta obra maestra surrealista con relojes de bolsillo derretidos en un paisaje onírico se ha convertido en una de las imágenes más reconocibles y parodiadas del arte moderno.",
                de: "Salvador Dalí malte 'Die Beständigkeit der Erinnerung' 1931. Das surrealistische Meisterwerk mit schmelzenden Taschenuhren in einer traumhaften Landschaft ist zu einem der erkennbarsten und am meisten parodierten Bilder der modernen Kunst geworden.",
                nl: "Salvador Dalí schilderde 'De Volharding der Herinnering' in 1931. Het surrealistische meesterwerk met smeltende zakhorloges in een droomachtig landschap is een van de meest herkenbare en geparodieerde beelden in de moderne kunst geworden."
            }
        },
        {
            question: {
                en: "Who painted 'The Kiss' featuring a couple in elaborate golden robes?",
                es: "¿Quién pintó 'El Beso' con una pareja en elaboradas túnicas doradas?",
                de: "Wer malte 'Der Kuss' mit einem Paar in aufwendigen goldenen Gewändern?",
                nl: "Wie schilderde 'De Kus' met een paar in uitgebreide gouden gewaden?"
            },
            options: [
                {
                    en: "Gustav Klimt",
                    es: "Gustav Klimt",
                    de: "Gustav Klimt",
                    nl: "Gustav Klimt"
                },
                {
                    en: "Egon Schiele",
                    es: "Egon Schiele",
                    de: "Egon Schiele",
                    nl: "Egon Schiele"
                },
                {
                    en: "Oskar Kokoschka",
                    es: "Oskar Kokoschka",
                    de: "Oskar Kokoschka",
                    nl: "Oskar Kokoschka"
                },
                {
                    en: "Koloman Moser",
                    es: "Koloman Moser",
                    de: "Koloman Moser",
                    nl: "Koloman Moser"
                }
            ],
            correct: 0,
            explanation: {
                en: "Gustav Klimt painted 'The Kiss' during his 'Golden Period' in 1907-1908. This iconic Art Nouveau work features elaborate gold leaf decoration and is considered Klimt's most popular masterpiece.",
                es: "Gustav Klimt pintó 'El Beso' durante su 'Período Dorado' en 1907-1908. Esta icónica obra del Art Nouveau presenta elaborada decoración con pan de oro y se considera la obra maestra más popular de Klimt.",
                de: "Gustav Klimt malte 'Der Kuss' während seiner 'Goldenen Periode' 1907-1908. Dieses ikonische Jugendstil-Werk zeigt aufwendige Blattgold-Dekoration und gilt als Klimts beliebtestes Meisterwerk.",
                nl: "Gustav Klimt schilderde 'De Kus' tijdens zijn 'Gouden Periode' in 1907-1908. Dit iconische Art Nouveau werk toont uitgebreide bladgoudversiering en wordt beschouwd als Klimts populairste meesterwerk."
            }
        },
        {
            question: {
                en: "Which artist painted 'The School of Athens'?",
                es: "¿Qué artista pintó 'La Escuela de Atenas'?",
                de: "Welcher Künstler malte 'Die Schule von Athen'?",
                nl: "Welke kunstenaar schilderde 'De School van Athene'?"
            },
            options: [
                {
                    en: "Raphael",
                    es: "Rafael",
                    de: "Raffael",
                    nl: "Rafaël"
                },
                {
                    en: "Michelangelo",
                    es: "Miguel Ángel",
                    de: "Michelangelo",
                    nl: "Michelangelo"
                },
                {
                    en: "Leonardo da Vinci",
                    es: "Leonardo da Vinci",
                    de: "Leonardo da Vinci",
                    nl: "Leonardo da Vinci"
                },
                {
                    en: "Titian",
                    es: "Tiziano",
                    de: "Tizian",
                    nl: "Titiaan"
                }
            ],
            correct: 0,
            explanation: {
                en: "Raphael painted 'The School of Athens' between 1509-1511 as part of his commission to decorate the Vatican's Apostolic Palace. This fresco depicts ancient Greek philosophers including Plato and Aristotle.",
                es: "Rafael pintó 'La Escuela de Atenas' entre 1509-1511 como parte de su encargo para decorar el Palacio Apostólico del Vaticano. Este fresco representa a antiguos filósofos griegos incluyendo a Platón y Aristóteles.",
                de: "Raffael malte 'Die Schule von Athen' zwischen 1509-1511 als Teil seines Auftrags zur Dekoration des Apostolischen Palastes im Vatikan. Dieses Fresko zeigt antike griechische Philosophen einschließlich Platon und Aristoteles.",
                nl: "Rafaël schilderde 'De School van Athene' tussen 1509-1511 als onderdeel van zijn opdracht om het Apostolisch Paleis van Vaticaanstad te decoreren. Dit fresco toont oude Griekse filosofen waaronder Plato en Aristoteles."
            }
        },
        {
            question: {
                en: "Who created the mobile sculpture art form?",
                es: "¿Quién creó la forma artística de escultura móvil?",
                de: "Wer schuf die Kunstform der mobilen Skulptur?",
                nl: "Wie creëerde de mobiele sculptuurkunstvorm?"
            },
            options: [
                {
                    en: "Alexander Calder",
                    es: "Alexander Calder",
                    de: "Alexander Calder",
                    nl: "Alexander Calder"
                },
                {
                    en: "Jean Tinguely",
                    es: "Jean Tinguely",
                    de: "Jean Tinguely",
                    nl: "Jean Tinguely"
                },
                {
                    en: "Naum Gabo",
                    es: "Naum Gabo",
                    de: "Naum Gabo",
                    nl: "Naum Gabo"
                },
                {
                    en: "Henry Moore",
                    es: "Henry Moore",
                    de: "Henry Moore",
                    nl: "Henry Moore"
                }
            ],
            correct: 0,
            explanation: {
                en: "Alexander Calder invented the mobile, a type of kinetic sculpture made with delicately balanced or suspended components that move in response to air currents. Marcel Duchamp coined the term 'mobile' for Calder's work in 1931.",
                es: "Alexander Calder inventó el móvil, un tipo de escultura cinética hecha con componentes delicadamente equilibrados o suspendidos que se mueven en respuesta a las corrientes de aire. Marcel Duchamp acuñó el término 'móvil' para el trabajo de Calder en 1931.",
                de: "Alexander Calder erfand das Mobile, eine Art kinetische Skulptur aus zart ausbalancierten oder aufgehängten Komponenten, die sich als Reaktion auf Luftströmungen bewegen. Marcel Duchamp prägte 1931 den Begriff 'Mobile' für Calders Werk.",
                nl: "Alexander Calder vond de mobiele sculptuur uit, een soort kinetische sculptuur gemaakt van delicaat gebalanceerde of opgehangen componenten die bewegen als reactie op luchtstromen. Marcel Duchamp bedacht in 1931 de term 'mobile' voor Calders werk."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Arnolfini Portrait'?",
                es: "¿Qué artista pintó 'El Retrato de Arnolfini'?",
                de: "Welcher Künstler malte 'Das Arnolfini-Porträt'?",
                nl: "Welke kunstenaar schilderde 'Het Arnolfini-portret'?"
            },
            options: [
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
                },
                {
                    en: "Hans Memling",
                    es: "Hans Memling",
                    de: "Hans Memling",
                    nl: "Hans Memling"
                },
                {
                    en: "Robert Campin",
                    es: "Robert Campin",
                    de: "Robert Campin",
                    nl: "Robert Campin"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jan van Eyck painted 'The Arnolfini Portrait' in 1434. This masterpiece of Early Netherlandish painting is famous for its complex iconography, detailed realism, and the convex mirror reflecting the entire room.",
                es: "Jan van Eyck pintó 'El Retrato de Arnolfini' en 1434. Esta obra maestra de la pintura neerlandesa temprana es famosa por su iconografía compleja, realismo detallado y el espejo convexo que refleja toda la habitación.",
                de: "Jan van Eyck malte 'Das Arnolfini-Porträt' 1434. Dieses Meisterwerk der frühen niederländischen Malerei ist berühmt für seine komplexe Ikonographie, detaillierten Realismus und den konvexen Spiegel, der den gesamten Raum reflektiert.",
                nl: "Jan van Eyck schilderde 'Het Arnolfini-portret' in 1434. Dit meesterwerk van de vroege Nederlandse schilderkunst is beroemd om zijn complexe iconografie, gedetailleerd realisme en de bolle spiegel die de hele kamer weerspiegelt."
            }
        },
        {
            question: {
                en: "Who painted 'The Birth of Venus'?",
                es: "¿Quién pintó 'El Nacimiento de Venus'?",
                de: "Wer malte 'Die Geburt der Venus'?",
                nl: "Wie schilderde 'De Geboorte van Venus'?"
            },
            options: [
                {
                    en: "Sandro Botticelli",
                    es: "Sandro Botticelli",
                    de: "Sandro Botticelli",
                    nl: "Sandro Botticelli"
                },
                {
                    en: "Leonardo da Vinci",
                    es: "Leonardo da Vinci",
                    de: "Leonardo da Vinci",
                    nl: "Leonardo da Vinci"
                },
                {
                    en: "Raphael",
                    es: "Rafael",
                    de: "Raffael",
                    nl: "Rafaël"
                },
                {
                    en: "Titian",
                    es: "Tiziano",
                    de: "Tizian",
                    nl: "Titiaan"
                }
            ],
            correct: 0,
            explanation: {
                en: "Sandro Botticelli painted 'The Birth of Venus' in the mid-1480s. This iconic Renaissance painting depicts the goddess Venus arriving at the shore after her birth, and is housed in the Uffizi Gallery in Florence.",
                es: "Sandro Botticelli pintó 'El Nacimiento de Venus' a mediados de la década de 1480. Esta icónica pintura renacentista representa a la diosa Venus llegando a la orilla después de su nacimiento, y se encuentra en la Galería Uffizi en Florencia.",
                de: "Sandro Botticelli malte 'Die Geburt der Venus' Mitte der 1480er Jahre. Dieses ikonische Renaissance-Gemälde zeigt die Göttin Venus, die nach ihrer Geburt am Ufer ankommt, und befindet sich in den Uffizien in Florenz.",
                nl: "Sandro Botticelli schilderde 'De Geboorte van Venus' in het midden van de jaren 1480. Dit iconische renaissance-schilderij toont de godin Venus die na haar geboorte aan de kust aankomt, en hangt in de Uffizi Galerij in Florence."
            }
        },
        {
            question: {
                en: "Which artist painted 'Girl with a Pearl Earring'?",
                es: "¿Qué artista pintó 'La Joven de la Perla'?",
                de: "Welcher Künstler malte 'Mädchen mit dem Perlenohrring'?",
                nl: "Welke kunstenaar schilderde 'Meisje met de Parel'?"
            },
            options: [
                {
                    en: "Johannes Vermeer",
                    es: "Johannes Vermeer",
                    de: "Johannes Vermeer",
                    nl: "Johannes Vermeer"
                },
                {
                    en: "Rembrandt van Rijn",
                    es: "Rembrandt van Rijn",
                    de: "Rembrandt van Rijn",
                    nl: "Rembrandt van Rijn"
                },
                {
                    en: "Frans Hals",
                    es: "Frans Hals",
                    de: "Frans Hals",
                    nl: "Frans Hals"
                },
                {
                    en: "Jan Steen",
                    es: "Jan Steen",
                    de: "Jan Steen",
                    nl: "Jan Steen"
                }
            ],
            correct: 0,
            explanation: {
                en: "Johannes Vermeer painted 'Girl with a Pearl Earring' around 1665. This Dutch Golden Age tronie is famous for its intimate portrayal, mysterious expression, and masterful use of light, earning it the nickname 'Mona Lisa of the North'.",
                es: "Johannes Vermeer pintó 'La Joven de la Perla' alrededor de 1665. Este tronie de la Edad de Oro holandesa es famoso por su retrato íntimo, expresión misteriosa y uso magistral de la luz, ganándose el apodo de 'Mona Lisa del Norte'.",
                de: "Johannes Vermeer malte 'Mädchen mit dem Perlenohrring' um 1665. Dieses niederländische Goldene Zeitalter Tronie ist berühmt für seine intime Darstellung, mysteriöse Ausdruck und meisterhafte Lichtführung, was ihm den Spitznamen 'Mona Lisa des Nordens' einbrachte.",
                nl: "Johannes Vermeer schilderde 'Meisje met de Parel' rond 1665. Deze Nederlandse Gouden Eeuw tronie is beroemd om zijn intieme portret, mysterieuze uitdrukking en meesterlijk gebruik van licht, wat het de bijnaam 'Mona Lisa van het Noorden' opleverde."
            }
        },
        {
            question: {
                en: "Who created 'The Gates of Hell' sculpture?",
                es: "¿Quién creó la escultura 'Las Puertas del Infierno'?",
                de: "Wer schuf die Skulptur 'Das Höllentor'?",
                nl: "Wie creëerde de sculptuur 'De Poorten van de Hel'?"
            },
            options: [
                {
                    en: "Auguste Rodin",
                    es: "Auguste Rodin",
                    de: "Auguste Rodin",
                    nl: "Auguste Rodin"
                },
                {
                    en: "Camille Claudel",
                    es: "Camille Claudel",
                    de: "Camille Claudel",
                    nl: "Camille Claudel"
                },
                {
                    en: "Antoine Bourdelle",
                    es: "Antoine Bourdelle",
                    de: "Antoine Bourdelle",
                    nl: "Antoine Bourdelle"
                },
                {
                    en: "Aristide Maillol",
                    es: "Aristide Maillol",
                    de: "Aristide Maillol",
                    nl: "Aristide Maillol"
                }
            ],
            correct: 0,
            explanation: {
                en: "Auguste Rodin worked on 'The Gates of Hell' from 1880 until his death in 1917. This monumental sculptural group inspired by Dante's Inferno contains 180 figures, including 'The Thinker' and 'The Kiss'.",
                es: "Auguste Rodin trabajó en 'Las Puertas del Infierno' desde 1880 hasta su muerte en 1917. Este monumental grupo escultórico inspirado en el Infierno de Dante contiene 180 figuras, incluyendo 'El Pensador' y 'El Beso'.",
                de: "Auguste Rodin arbeitete von 1880 bis zu seinem Tod 1917 an 'Das Höllentor'. Diese monumentale Skulpturengruppe, inspiriert von Dantes Inferno, enthält 180 Figuren, darunter 'Der Denker' und 'Der Kuss'.",
                nl: "Auguste Rodin werkte aan 'De Poorten van de Hel' van 1880 tot zijn dood in 1917. Deze monumentale sculptuurgroep geïnspireerd door Dante's Inferno bevat 180 figuren, waaronder 'De Denker' en 'De Kus'."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Night Watch'?",
                es: "¿Qué artista pintó 'La Ronda de Noche'?",
                de: "Welcher Künstler malte 'Die Nachtwache'?",
                nl: "Welke kunstenaar schilderde 'De Nachtwacht'?"
            },
            options: [
                {
                    en: "Rembrandt van Rijn",
                    es: "Rembrandt van Rijn",
                    de: "Rembrandt van Rijn",
                    nl: "Rembrandt van Rijn"
                },
                {
                    en: "Frans Hals",
                    es: "Frans Hals",
                    de: "Frans Hals",
                    nl: "Frans Hals"
                },
                {
                    en: "Johannes Vermeer",
                    es: "Johannes Vermeer",
                    de: "Johannes Vermeer",
                    nl: "Johannes Vermeer"
                },
                {
                    en: "Jacob van Ruisdael",
                    es: "Jacob van Ruisdael",
                    de: "Jacob van Ruisdael",
                    nl: "Jacob van Ruisdael"
                }
            ],
            correct: 0,
            explanation: {
                en: "Rembrandt van Rijn painted 'The Night Watch' in 1642. This massive group portrait of a militia company is considered one of the most famous Dutch Golden Age paintings, revolutionary for its dynamic composition and dramatic use of light.",
                es: "Rembrandt van Rijn pintó 'La Ronda de Noche' en 1642. Este masivo retrato grupal de una compañía de milicia se considera una de las pinturas más famosas de la Edad de Oro holandesa, revolucionaria por su composición dinámica y uso dramático de la luz.",
                de: "Rembrandt van Rijn malte 'Die Nachtwache' 1642. Dieses massive Gruppenporträt einer Milizgruppe gilt als eines der berühmtesten Gemälde des niederländischen Goldenen Zeitalters, revolutionär für seine dynamische Komposition und dramatische Lichtführung.",
                nl: "Rembrandt van Rijn schilderde 'De Nachtwacht' in 1642. Dit massale groepsportret van een schutterscompagnie wordt beschouwd als een van de beroemdste schilderijen van de Nederlandse Gouden Eeuw, revolutionair om zijn dynamische compositie en dramatisch gebruik van licht."
            }
        },
        {
            question: {
                en: "Who painted 'American Gothic'?",
                es: "¿Quién pintó 'Gótico Americano'?",
                de: "Wer malte 'American Gothic'?",
                nl: "Wie schilderde 'American Gothic'?"
            },
            options: [
                {
                    en: "Grant Wood",
                    es: "Grant Wood",
                    de: "Grant Wood",
                    nl: "Grant Wood"
                },
                {
                    en: "Edward Hopper",
                    es: "Edward Hopper",
                    de: "Edward Hopper",
                    nl: "Edward Hopper"
                },
                {
                    en: "Thomas Hart Benton",
                    es: "Thomas Hart Benton",
                    de: "Thomas Hart Benton",
                    nl: "Thomas Hart Benton"
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
                en: "Grant Wood painted 'American Gothic' in 1930. This iconic image of a farmer and his daughter standing before a house with Gothic Revival architecture has become one of the most recognizable paintings in American art.",
                es: "Grant Wood pintó 'Gótico Americano' en 1930. Esta imagen icónica de un granjero y su hija parados frente a una casa con arquitectura neogótica se ha convertido en una de las pinturas más reconocibles del arte estadounidense.",
                de: "Grant Wood malte 'American Gothic' 1930. Dieses ikonische Bild eines Farmers und seiner Tochter vor einem Haus mit neugotischer Architektur ist zu einem der erkennbarsten Gemälde der amerikanischen Kunst geworden.",
                nl: "Grant Wood schilderde 'American Gothic' in 1930. Dit iconische beeld van een boer en zijn dochter die voor een huis met neogotische architectuur staan is een van de meest herkenbare schilderijen in de Amerikaanse kunst geworden."
            }
        },
        {
            question: {
                en: "Which artist painted 'No. 5, 1948' which sold for $140 million?",
                es: "¿Qué artista pintó 'No. 5, 1948' que se vendió por 140 millones de dólares?",
                de: "Welcher Künstler malte 'Nr. 5, 1948', das für 140 Millionen Dollar verkauft wurde?",
                nl: "Welke kunstenaar schilderde 'No. 5, 1948' dat voor $140 miljoen werd verkocht?"
            },
            options: [
                {
                    en: "Jackson Pollock",
                    es: "Jackson Pollock",
                    de: "Jackson Pollock",
                    nl: "Jackson Pollock"
                },
                {
                    en: "Willem de Kooning",
                    es: "Willem de Kooning",
                    de: "Willem de Kooning",
                    nl: "Willem de Kooning"
                },
                {
                    en: "Mark Rothko",
                    es: "Mark Rothko",
                    de: "Mark Rothko",
                    nl: "Mark Rothko"
                },
                {
                    en: "Franz Kline",
                    es: "Franz Kline",
                    de: "Franz Kline",
                    nl: "Franz Kline"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jackson Pollock created 'No. 5, 1948' using his famous drip painting technique. The abstract expressionist work measures 8 by 4 feet and sold for approximately $140 million in 2006, making it one of the most expensive paintings ever sold.",
                es: "Jackson Pollock creó 'No. 5, 1948' usando su famosa técnica de pintura por goteo. La obra expresionista abstracta mide 8 por 4 pies y se vendió por aproximadamente 140 millones de dólares en 2006, convirtiéndola en una de las pinturas más caras jamás vendidas.",
                de: "Jackson Pollock schuf 'Nr. 5, 1948' mit seiner berühmten Tropfmaltechnik. Das abstrakt-expressionistische Werk misst 8 mal 4 Fuß und wurde 2006 für etwa 140 Millionen Dollar verkauft, was es zu einem der teuersten jemals verkauften Gemälde macht.",
                nl: "Jackson Pollock creëerde 'No. 5, 1948' met zijn beroemde druppelschildertechniek. Het abstract expressionistische werk meet 8 bij 4 voet en werd in 2006 verkocht voor ongeveer $140 miljoen, waardoor het een van de duurste ooit verkochte schilderijen is."
            }
        },
        {
            question: {
                en: "Who painted 'The Third of May 1808'?",
                es: "¿Quién pintó 'El Tres de Mayo de 1808'?",
                de: "Wer malte 'Der 3. Mai 1808'?",
                nl: "Wie schilderde 'De Derde Mei 1808'?"
            },
            options: [
                {
                    en: "Francisco Goya",
                    es: "Francisco Goya",
                    de: "Francisco Goya",
                    nl: "Francisco Goya"
                },
                {
                    en: "Diego Velázquez",
                    es: "Diego Velázquez",
                    de: "Diego Velázquez",
                    nl: "Diego Velázquez"
                },
                {
                    en: "El Greco",
                    es: "El Greco",
                    de: "El Greco",
                    nl: "El Greco"
                },
                {
                    en: "Bartolomé Murillo",
                    es: "Bartolomé Murillo",
                    de: "Bartolomé Murillo",
                    nl: "Bartolomé Murillo"
                }
            ],
            correct: 0,
            explanation: {
                en: "Francisco Goya painted 'The Third of May 1808' in 1814, depicting the execution of Spanish citizens by Napoleon's forces during the Peninsular War. This powerful anti-war painting influenced later artists like Picasso and Manet.",
                es: "Francisco Goya pintó 'El Tres de Mayo de 1808' en 1814, representando la ejecución de ciudadanos españoles por las fuerzas de Napoleón durante la Guerra Peninsular. Esta poderosa pintura anti-guerra influyó en artistas posteriores como Picasso y Manet.",
                de: "Francisco Goya malte 'Der 3. Mai 1808' 1814, das die Hinrichtung spanischer Bürger durch Napoleons Truppen während des Halbinselkriegs zeigt. Dieses kraftvolle Anti-Kriegs-Gemälde beeinflusste spätere Künstler wie Picasso und Manet.",
                nl: "Francisco Goya schilderde 'De Derde Mei 1808' in 1814, waarbij de executie van Spaanse burgers door Napoleons troepen tijdens de Peninsulaire Oorlog wordt afgebeeld. Dit krachtige anti-oorlogsschilderij beïnvloedde latere kunstenaars zoals Picasso en Manet."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Son of Man' featuring a man in a bowler hat?",
                es: "¿Qué artista pintó 'El Hijo del Hombre' con un hombre con sombrero de bombín?",
                de: "Welcher Künstler malte 'Der Sohn des Menschen' mit einem Mann mit Melone?",
                nl: "Welke kunstenaar schilderde 'De Zoon van de Mens' met een man in een bolhoed?"
            },
            options: [
                {
                    en: "René Magritte",
                    es: "René Magritte",
                    de: "René Magritte",
                    nl: "René Magritte"
                },
                {
                    en: "Salvador Dalí",
                    es: "Salvador Dalí",
                    de: "Salvador Dalí",
                    nl: "Salvador Dalí"
                },
                {
                    en: "Max Ernst",
                    es: "Max Ernst",
                    de: "Max Ernst",
                    nl: "Max Ernst"
                },
                {
                    en: "Man Ray",
                    es: "Man Ray",
                    de: "Man Ray",
                    nl: "Man Ray"
                }
            ],
            correct: 0,
            explanation: {
                en: "René Magritte painted 'The Son of Man' in 1964. This surrealist self-portrait features a man in a suit and bowler hat with his face obscured by a green apple, exploring themes of hidden identity and the visible versus the invisible.",
                es: "René Magritte pintó 'El Hijo del Hombre' en 1964. Este autorretrato surrealista presenta a un hombre con traje y sombrero de bombín con su rostro oculto por una manzana verde, explorando temas de identidad oculta y lo visible versus lo invisible.",
                de: "René Magritte malte 'Der Sohn des Menschen' 1964. Dieses surrealistische Selbstporträt zeigt einen Mann in Anzug und Melone, dessen Gesicht durch einen grünen Apfel verdeckt ist, und erforscht Themen verborgener Identität und des Sichtbaren versus des Unsichtbaren.",
                nl: "René Magritte schilderde 'De Zoon van de Mens' in 1964. Dit surrealistische zelfportret toont een man in pak en bolhoed met zijn gezicht verborgen door een groene appel, waarbij thema's van verborgen identiteit en het zichtbare versus het onzichtbare worden verkend."
            }
        },
        {
            question: {
                en: "Who painted 'Las Meninas'?",
                es: "¿Quién pintó 'Las Meninas'?",
                de: "Wer malte 'Las Meninas'?",
                nl: "Wie schilderde 'Las Meninas'?"
            },
            options: [
                {
                    en: "Diego Velázquez",
                    es: "Diego Velázquez",
                    de: "Diego Velázquez",
                    nl: "Diego Velázquez"
                },
                {
                    en: "Francisco Goya",
                    es: "Francisco Goya",
                    de: "Francisco Goya",
                    nl: "Francisco Goya"
                },
                {
                    en: "El Greco",
                    es: "El Greco",
                    de: "El Greco",
                    nl: "El Greco"
                },
                {
                    en: "Bartolomé Murillo",
                    es: "Bartolomé Murillo",
                    de: "Bartolomé Murillo",
                    nl: "Bartolomé Murillo"
                }
            ],
            correct: 0,
            explanation: {
                en: "Diego Velázquez painted 'Las Meninas' in 1656. This complex masterpiece depicts the Spanish royal family and is renowned for its sophisticated composition, use of perspective, and the artist's inclusion of himself painting the scene.",
                es: "Diego Velázquez pintó 'Las Meninas' en 1656. Esta compleja obra maestra representa a la familia real española y es reconocida por su sofisticada composición, uso de perspectiva y la inclusión del artista pintándose a sí mismo en la escena.",
                de: "Diego Velázquez malte 'Las Meninas' 1656. Dieses komplexe Meisterwerk zeigt die spanische Königsfamilie und ist berühmt für seine raffinierte Komposition, Perspektivennutzung und die Einbeziehung des Künstlers beim Malen der Szene.",
                nl: "Diego Velázquez schilderde 'Las Meninas' in 1656. Dit complexe meesterwerk toont de Spaanse koninklijke familie en is beroemd om zijn geavanceerde compositie, gebruik van perspectief en de opname van de kunstenaar zelf die de scène schildert."
            }
        },
        {
            question: {
                en: "Who painted 'The Kiss', a golden masterpiece of Art Nouveau?",
                es: "¿Quién pintó 'El Beso', una obra maestra dorada del Art Nouveau?",
                de: "Wer malte 'Der Kuss', ein goldenes Meisterwerk des Jugendstils?",
                nl: "Wie schilderde 'De Kus', een gouden meesterwerk van de Art Nouveau?"
            },
            options: [
                {
                    en: "Gustav Klimt",
                    es: "Gustav Klimt",
                    de: "Gustav Klimt",
                    nl: "Gustav Klimt"
                },
                {
                    en: "Egon Schiele",
                    es: "Egon Schiele",
                    de: "Egon Schiele",
                    nl: "Egon Schiele"
                },
                {
                    en: "Alphonse Mucha",
                    es: "Alphonse Mucha",
                    de: "Alphonse Mucha",
                    nl: "Alphonse Mucha"
                },
                {
                    en: "Henri de Toulouse-Lautrec",
                    es: "Henri de Toulouse-Lautrec",
                    de: "Henri de Toulouse-Lautrec",
                    nl: "Henri de Toulouse-Lautrec"
                }
            ],
            correct: 0,
            explanation: {
                en: "Gustav Klimt painted 'The Kiss' (1907-1908) during his 'Golden Period'. The painting uses gold leaf and depicts an embracing couple, becoming an icon of the Vienna Secession movement.",
                es: "Gustav Klimt pintó 'El Beso' (1907-1908) durante su 'Período Dorado'. La pintura usa pan de oro y representa a una pareja abrazándose, convirtiéndose en un ícono del movimiento de la Secesión de Viena.",
                de: "Gustav Klimt malte 'Der Kuss' (1907-1908) während seiner 'Goldenen Periode'. Das Gemälde verwendet Blattgold und zeigt ein sich umarmendes Paar, wurde zur Ikone der Wiener Secession.",
                nl: "Gustav Klimt schilderde 'De Kus' (1907-1908) tijdens zijn 'Gouden Periode'. Het schilderij gebruikt bladgoud en toont een omhelzend paar, werd een icoon van de Weense Secessie beweging."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else if (typeof window !== 'undefined') {
        window.kunstenaarsLevel3 = questions;
    }
})();