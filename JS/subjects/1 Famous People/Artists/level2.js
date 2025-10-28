(() => {
    const questions = [
        {
            question: {
                en: "Which art movement featured artists like Monet, Renoir, and Degas?",
                es: "¿Qué movimiento artístico incluía artistas como Monet, Renoir y Degas?",
                de: "Welche Kunstbewegung umfasste Künstler wie Monet, Renoir und Degas?",
                nl: "Welke kunststroming omvatte kunstenaars zoals Monet, Renoir en Degas?"
            },
            options: [
                {
                    en: "Impressionism",
                    es: "Impresionismo",
                    de: "Impressionismus",
                    nl: "Impressionisme"
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
                },
                {
                    en: "Surrealism",
                    es: "Surrealismo",
                    de: "Surrealismus",
                    nl: "Surrealisme"
                }
            ],
            correct: 0,
            explanation: {
                en: "Impressionism emerged in the 1870s and emphasized light, color, and everyday scenes. Monet, Renoir, and Degas were key figures in this revolutionary movement.",
                es: "El Impresionismo surgió en la década de 1870 y enfatizaba la luz, el color y las escenas cotidianas. Monet, Renoir y Degas fueron figuras clave en este movimiento revolucionario.",
                de: "Der Impressionismus entstand in den 1870er Jahren und betonte Licht, Farbe und Alltagsszenen. Monet, Renoir und Degas waren Schlüsselfiguren dieser revolutionären Bewegung.",
                nl: "Het Impressionisme ontstond in de jaren 1870 en legde de nadruk op licht, kleur en alledaagse taferelen. Monet, Renoir en Degas waren sleutelfiguren in deze revolutionaire beweging."
            }
        },
        {
            question: {
                en: "Who painted 'A Sunday Afternoon on the Island of La Grande Jatte'?",
                es: "¿Quién pintó 'Una tarde de domingo en la isla de la Grande Jatte'?",
                de: "Wer malte 'Ein Sonntagnachmittag auf der Insel La Grande Jatte'?",
                nl: "Wie schilderde 'Een zondagmiddag op het eiland La Grande Jatte'?"
            },
            options: [
                {
                    en: "Georges Seurat",
                    es: "Georges Seurat",
                    de: "Georges Seurat",
                    nl: "Georges Seurat"
                },
                {
                    en: "Paul Signac",
                    es: "Paul Signac",
                    de: "Paul Signac",
                    nl: "Paul Signac"
                },
                {
                    en: "Henri de Toulouse-Lautrec",
                    es: "Henri de Toulouse-Lautrec",
                    de: "Henri de Toulouse-Lautrec",
                    nl: "Henri de Toulouse-Lautrec"
                },
                {
                    en: "Paul Gauguin",
                    es: "Paul Gauguin",
                    de: "Paul Gauguin",
                    nl: "Paul Gauguin"
                }
            ],
            correct: 0,
            explanation: {
                en: "Georges Seurat painted this masterpiece using pointillism, a technique where small dots of color create the image. The painting took him two years to complete (1884-1886).",
                es: "Georges Seurat pintó esta obra maestra usando el puntillismo, una técnica donde pequeños puntos de color crean la imagen. La pintura le tomó dos años completar (1884-1886).",
                de: "Georges Seurat malte dieses Meisterwerk mit Pointillismus, einer Technik, bei der kleine Farbpunkte das Bild erzeugen. Das Gemälde dauerte zwei Jahre (1884-1886).",
                nl: "Georges Seurat schilderde dit meesterwerk met pointillisme, een techniek waarbij kleine kleurpunten het beeld creëren. Het schilderij kostte hem twee jaar om te voltooien (1884-1886)."
            }
        },
        {
            question: {
                en: "Which artist created the sculpture 'The Kiss'?",
                es: "¿Qué artista creó la escultura 'El Beso'?",
                de: "Welcher Künstler schuf die Skulptur 'Der Kuss'?",
                nl: "Welke kunstenaar creëerde de sculptuur 'De Kus'?"
            },
            options: [
                {
                    en: "Auguste Rodin",
                    es: "Auguste Rodin",
                    de: "Auguste Rodin",
                    nl: "Auguste Rodin"
                },
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
                    en: "Barbara Hepworth",
                    es: "Barbara Hepworth",
                    de: "Barbara Hepworth",
                    nl: "Barbara Hepworth"
                }
            ],
            correct: 0,
            explanation: {
                en: "Auguste Rodin created 'The Kiss' in 1889. Originally part of 'The Gates of Hell', it became one of the most famous sculptures depicting romantic love.",
                es: "Auguste Rodin creó 'El Beso' en 1889. Originalmente parte de 'Las Puertas del Infierno', se convirtió en una de las esculturas más famosas que representa el amor romántico.",
                de: "Auguste Rodin schuf 'Der Kuss' 1889. Ursprünglich Teil von 'Das Höllentor', wurde es zu einer der berühmtesten Skulpturen, die romantische Liebe darstellt.",
                nl: "Auguste Rodin creëerde 'De Kus' in 1889. Oorspronkelijk onderdeel van 'De Poorten van de Hel', werd het een van de beroemdste sculpturen die romantische liefde uitbeeldt."
            }
        },
        {
            question: {
                en: "Who painted 'Café Terrace at Night'?",
                es: "¿Quién pintó 'Terraza de café por la noche'?",
                de: "Wer malte 'Caféterrasse bei Nacht'?",
                nl: "Wie schilderde 'Caféterras bij nacht'?"
            },
            options: [
                {
                    en: "Vincent van Gogh",
                    es: "Vincent van Gogh",
                    de: "Vincent van Gogh",
                    nl: "Vincent van Gogh"
                },
                {
                    en: "Paul Cézanne",
                    es: "Paul Cézanne",
                    de: "Paul Cézanne",
                    nl: "Paul Cézanne"
                },
                {
                    en: "Edgar Degas",
                    es: "Edgar Degas",
                    de: "Edgar Degas",
                    nl: "Edgar Degas"
                },
                {
                    en: "Henri Matisse",
                    es: "Henri Matisse",
                    de: "Henri Matisse",
                    nl: "Henri Matisse"
                }
            ],
            correct: 0,
            explanation: {
                en: "Vincent van Gogh painted 'Café Terrace at Night' in 1888 in Arles, France. It was his first painting to feature a starry night sky, a theme he would return to.",
                es: "Vincent van Gogh pintó 'Terraza de café por la noche' en 1888 en Arles, Francia. Fue su primera pintura en presentar un cielo nocturno estrellado, un tema al que regresaría.",
                de: "Vincent van Gogh malte 'Caféterrasse bei Nacht' 1888 in Arles, Frankreich. Es war sein erstes Gemälde mit einem sternenklaren Nachthimmel, ein Thema, zu dem er zurückkehren würde.",
                nl: "Vincent van Gogh schilderde 'Caféterras bij nacht' in 1888 in Arles, Frankrijk. Het was zijn eerste schilderij met een sterrenhemel, een thema waar hij op terug zou komen."
            }
        },
        {
            question: {
                en: "Which artist is known for painting dancers and ballet scenes?",
                es: "¿Qué artista es conocido por pintar bailarinas y escenas de ballet?",
                de: "Welcher Künstler ist bekannt für das Malen von Tänzerinnen und Ballettszenen?",
                nl: "Welke kunstenaar staat bekend om het schilderen van dansers en balletscènes?"
            },
            options: [
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
                },
                {
                    en: "Camille Pissarro",
                    es: "Camille Pissarro",
                    de: "Camille Pissarro",
                    nl: "Camille Pissarro"
                },
                {
                    en: "Mary Cassatt",
                    es: "Mary Cassatt",
                    de: "Mary Cassatt",
                    nl: "Mary Cassatt"
                }
            ],
            correct: 0,
            explanation: {
                en: "Edgar Degas was fascinated by ballet dancers and painted them extensively, capturing their movements, rehearsals, and behind-the-scenes moments. About half of his works featured dancers.",
                es: "Edgar Degas estaba fascinado por las bailarinas de ballet y las pintó extensamente, capturando sus movimientos, ensayos y momentos tras bambalinas. Aproximadamente la mitad de sus obras presentaba bailarinas.",
                de: "Edgar Degas war fasziniert von Balletttänzerinnen und malte sie ausgiebig, fing ihre Bewegungen, Proben und Momente hinter den Kulissen ein. Etwa die Hälfte seiner Werke zeigte Tänzerinnen.",
                nl: "Edgar Degas was gefascineerd door balletdansers en schilderde ze uitgebreid, waarbij hij hun bewegingen, repetities en momenten achter de schermen vastlegde. Ongeveer de helft van zijn werken toonde dansers."
            }
        },
        {
            question: {
                en: "Who painted 'Luncheon on the Grass' (Le Déjeuner sur l'herbe)?",
                es: "¿Quién pintó 'Almuerzo en la hierba' (Le Déjeuner sur l'herbe)?",
                de: "Wer malte 'Das Frühstück im Grünen' (Le Déjeuner sur l'herbe)?",
                nl: "Wie schilderde 'Ontbijt op het gras' (Le Déjeuner sur l'herbe)?"
            },
            options: [
                {
                    en: "Édouard Manet",
                    es: "Édouard Manet",
                    de: "Édouard Manet",
                    nl: "Édouard Manet"
                },
                {
                    en: "Claude Monet",
                    es: "Claude Monet",
                    de: "Claude Monet",
                    nl: "Claude Monet"
                },
                {
                    en: "Gustave Courbet",
                    es: "Gustave Courbet",
                    de: "Gustave Courbet",
                    nl: "Gustave Courbet"
                },
                {
                    en: "Jean-Baptiste-Camille Corot",
                    es: "Jean-Baptiste-Camille Corot",
                    de: "Jean-Baptiste-Camille Corot",
                    nl: "Jean-Baptiste-Camille Corot"
                }
            ],
            correct: 0,
            explanation: {
                en: "Édouard Manet painted 'Luncheon on the Grass' in 1863. This controversial work challenged academic traditions and is considered a pivotal work in the transition to modern art.",
                es: "Édouard Manet pintó 'Almuerzo en la hierba' en 1863. Esta obra controvertida desafió las tradiciones académicas y se considera una obra fundamental en la transición al arte moderno.",
                de: "Édouard Manet malte 'Das Frühstück im Grünen' 1863. Dieses kontroverse Werk stellte akademische Traditionen in Frage und gilt als Schlüsselwerk im Übergang zur modernen Kunst.",
                nl: "Édouard Manet schilderde 'Ontbijt op het gras' in 1863. Dit controversiële werk daagde academische tradities uit en wordt beschouwd als een belangrijk werk in de overgang naar moderne kunst."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Card Players' series?",
                es: "¿Qué artista pintó la serie 'Los Jugadores de Cartas'?",
                de: "Welcher Künstler malte die Serie 'Die Kartenspieler'?",
                nl: "Welke kunstenaar schilderde de serie 'De Kaartspelers'?"
            },
            options: [
                {
                    en: "Paul Cézanne",
                    es: "Paul Cézanne",
                    de: "Paul Cézanne",
                    nl: "Paul Cézanne"
                },
                {
                    en: "Georges Braque",
                    es: "Georges Braque",
                    de: "Georges Braque",
                    nl: "Georges Braque"
                },
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
                }
            ],
            correct: 0,
            explanation: {
                en: "Paul Cézanne painted a series of five paintings titled 'The Card Players' in the 1890s. These works represent his mature style and are among the most expensive paintings ever sold.",
                es: "Paul Cézanne pintó una serie de cinco pinturas tituladas 'Los Jugadores de Cartas' en la década de 1890. Estas obras representan su estilo maduro y están entre las pinturas más caras jamás vendidas.",
                de: "Paul Cézanne malte in den 1890er Jahren eine Serie von fünf Gemälden mit dem Titel 'Die Kartenspieler'. Diese Werke repräsentieren seinen reifen Stil und gehören zu den teuersten jemals verkauften Gemälden.",
                nl: "Paul Cézanne schilderde in de jaren 1890 een serie van vijf schilderijen genaamd 'De Kaartspelers'. Deze werken vertegenwoordigen zijn rijpe stijl en behoren tot de duurste ooit verkochte schilderijen."
            }
        },
        {
            question: {
                en: "Who created the sculpture 'Bird in Space'?",
                es: "¿Quién creó la escultura 'Pájaro en el Espacio'?",
                de: "Wer schuf die Skulptur 'Vogel im Raum'?",
                nl: "Wie creëerde de sculptuur 'Vogel in de Ruimte'?"
            },
            options: [
                {
                    en: "Constantin Brâncuși",
                    es: "Constantin Brâncuși",
                    de: "Constantin Brâncuși",
                    nl: "Constantin Brâncuși"
                },
                {
                    en: "Henry Moore",
                    es: "Henry Moore",
                    de: "Henry Moore",
                    nl: "Henry Moore"
                },
                {
                    en: "Jean Arp",
                    es: "Jean Arp",
                    de: "Jean Arp",
                    nl: "Jean Arp"
                },
                {
                    en: "Alexander Calder",
                    es: "Alexander Calder",
                    de: "Alexander Calder",
                    nl: "Alexander Calder"
                }
            ],
            correct: 0,
            explanation: {
                en: "Constantin Brâncuși created multiple versions of 'Bird in Space' between 1923 and 1940. These abstract sculptures reduce the essence of a bird's flight to its purest form.",
                es: "Constantin Brâncuși creó múltiples versiones de 'Pájaro en el Espacio' entre 1923 y 1940. Estas esculturas abstractas reducen la esencia del vuelo de un pájaro a su forma más pura.",
                de: "Constantin Brâncuși schuf zwischen 1923 und 1940 mehrere Versionen von 'Vogel im Raum'. Diese abstrakten Skulpturen reduzieren die Essenz eines Vogelflugs auf seine reinste Form.",
                nl: "Constantin Brâncuși creëerde meerdere versies van 'Vogel in de Ruimte' tussen 1923 en 1940. Deze abstracte sculpturen reduceren de essentie van een vogelvlucht tot zijn zuiverste vorm."
            }
        },
        {
            question: {
                en: "Which artist painted 'Olympia'?",
                es: "¿Qué artista pintó 'Olimpia'?",
                de: "Welcher Künstler malte 'Olympia'?",
                nl: "Welke kunstenaar schilderde 'Olympia'?"
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
                }
            ],
            correct: 0,
            explanation: {
                en: "Édouard Manet painted 'Olympia' in 1863, inspired by Titian's 'Venus of Urbino'. The painting caused a scandal when exhibited due to its modern interpretation of a classical theme.",
                es: "Édouard Manet pintó 'Olimpia' en 1863, inspirado en la 'Venus de Urbino' de Tiziano. La pintura causó un escándalo cuando se exhibió debido a su interpretación moderna de un tema clásico.",
                de: "Édouard Manet malte 'Olympia' 1863, inspiriert von Tizians 'Venus von Urbino'. Das Gemälde verursachte bei der Ausstellung einen Skandal aufgrund seiner modernen Interpretation eines klassischen Themas.",
                nl: "Édouard Manet schilderde 'Olympia' in 1863, geïnspireerd door Titiaans 'Venus van Urbino'. Het schilderij veroorzaakte een schandaal toen het werd tentoongesteld vanwege zijn moderne interpretatie van een klassiek thema."
            }
        },
        {
            question: {
                en: "Who painted 'Sunflowers' series?",
                es: "¿Quién pintó la serie 'Girasoles'?",
                de: "Wer malte die 'Sonnenblumen'-Serie?",
                nl: "Wie schilderde de 'Zonnebloemen' serie?"
            },
            options: [
                {
                    en: "Vincent van Gogh",
                    es: "Vincent van Gogh",
                    de: "Vincent van Gogh",
                    nl: "Vincent van Gogh"
                },
                {
                    en: "Paul Gauguin",
                    es: "Paul Gauguin",
                    de: "Paul Gauguin",
                    nl: "Paul Gauguin"
                },
                {
                    en: "Henri Matisse",
                    es: "Henri Matisse",
                    de: "Henri Matisse",
                    nl: "Henri Matisse"
                },
                {
                    en: "André Derain",
                    es: "André Derain",
                    de: "André Derain",
                    nl: "André Derain"
                }
            ],
            correct: 0,
            explanation: {
                en: "Vincent van Gogh painted several still life paintings of sunflowers in Arles in 1888 and 1889. These vibrant yellow paintings are among his most celebrated works.",
                es: "Vincent van Gogh pintó varias naturalezas muertas de girasoles en Arles en 1888 y 1889. Estas vibrantes pinturas amarillas están entre sus obras más celebradas.",
                de: "Vincent van Gogh malte in Arles 1888 und 1889 mehrere Stillleben mit Sonnenblumen. Diese lebendigen gelben Gemälde gehören zu seinen berühmtesten Werken.",
                nl: "Vincent van Gogh schilderde verschillende stillevens van zonnebloemen in Arles in 1888 en 1889. Deze levendige gele schilderijen behoren tot zijn meest gevierde werken."
            }
        },
        {
            question: {
                en: "Which art movement was characterized by emotional expression and bold colors?",
                es: "¿Qué movimiento artístico se caracterizó por la expresión emocional y los colores audaces?",
                de: "Welche Kunstbewegung war durch emotionalen Ausdruck und kräftige Farben gekennzeichnet?",
                nl: "Welke kunststroming werd gekenmerkt door emotionele expressie en gedurfde kleuren?"
            },
            options: [
                {
                    en: "Fauvism",
                    es: "Fauvismo",
                    de: "Fauvismus",
                    nl: "Fauvisme"
                },
                {
                    en: "Realism",
                    es: "Realismo",
                    de: "Realismus",
                    nl: "Realisme"
                },
                {
                    en: "Neoclassicism",
                    es: "Neoclasicismo",
                    de: "Neoklassizismus",
                    nl: "Neoclassicisme"
                },
                {
                    en: "Romanticism",
                    es: "Romanticismo",
                    de: "Romantik",
                    nl: "Romantiek"
                }
            ],
            correct: 0,
            explanation: {
                en: "Fauvism, led by Henri Matisse, was characterized by wild brushwork and vivid colors. The name comes from 'fauve' meaning 'wild beast' in French.",
                es: "El Fauvismo, liderado por Henri Matisse, se caracterizó por pinceladas salvajes y colores vívidos. El nombre proviene de 'fauve' que significa 'bestia salvaje' en francés.",
                de: "Der Fauvismus, angeführt von Henri Matisse, war durch wilde Pinselführung und lebendige Farben gekennzeichnet. Der Name stammt von 'fauve', was auf Französisch 'wildes Tier' bedeutet.",
                nl: "Het Fauvisme, geleid door Henri Matisse, werd gekenmerkt door wilde penseelvoering en levendige kleuren. De naam komt van 'fauve' wat 'wild beest' betekent in het Frans."
            }
        },
        {
            question: {
                en: "Who painted 'The Bedroom'?",
                es: "¿Quién pintó 'El Dormitorio'?",
                de: "Wer malte 'Das Schlafzimmer'?",
                nl: "Wie schilderde 'De Slaapkamer'?"
            },
            options: [
                {
                    en: "Vincent van Gogh",
                    es: "Vincent van Gogh",
                    de: "Vincent van Gogh",
                    nl: "Vincent van Gogh"
                },
                {
                    en: "Paul Gauguin",
                    es: "Paul Gauguin",
                    de: "Paul Gauguin",
                    nl: "Paul Gauguin"
                },
                {
                    en: "Émile Bernard",
                    es: "Émile Bernard",
                    de: "Émile Bernard",
                    nl: "Émile Bernard"
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
                en: "Vincent van Gogh painted three versions of 'The Bedroom' showing his room in the Yellow House in Arles. The paintings express his desire for rest and tranquility.",
                es: "Vincent van Gogh pintó tres versiones de 'El Dormitorio' mostrando su habitación en la Casa Amarilla en Arles. Las pinturas expresan su deseo de descanso y tranquilidad.",
                de: "Vincent van Gogh malte drei Versionen von 'Das Schlafzimmer', die sein Zimmer im Gelben Haus in Arles zeigen. Die Gemälde drücken sein Verlangen nach Ruhe und Gelassenheit aus.",
                nl: "Vincent van Gogh schilderde drie versies van 'De Slaapkamer' die zijn kamer in het Gele Huis in Arles toont. De schilderijen drukken zijn verlangen naar rust en kalmte uit."
            }
        },
        {
            question: {
                en: "Which artist was a leader of the Hudson River School?",
                es: "¿Qué artista fue líder de la Escuela del Río Hudson?",
                de: "Welcher Künstler war ein Anführer der Hudson River School?",
                nl: "Welke kunstenaar was een leider van de Hudson River School?"
            },
            options: [
                {
                    en: "Thomas Cole",
                    es: "Thomas Cole",
                    de: "Thomas Cole",
                    nl: "Thomas Cole"
                },
                {
                    en: "Winslow Homer",
                    es: "Winslow Homer",
                    de: "Winslow Homer",
                    nl: "Winslow Homer"
                },
                {
                    en: "John Singer Sargent",
                    es: "John Singer Sargent",
                    de: "John Singer Sargent",
                    nl: "John Singer Sargent"
                },
                {
                    en: "James McNeill Whistler",
                    es: "James McNeill Whistler",
                    de: "James McNeill Whistler",
                    nl: "James McNeill Whistler"
                }
            ],
            correct: 0,
            explanation: {
                en: "Thomas Cole founded the Hudson River School in the 1820s, America's first major art movement. The school focused on romantic landscape paintings of the American wilderness.",
                es: "Thomas Cole fundó la Escuela del Río Hudson en la década de 1820, el primer movimiento artístico importante de América. La escuela se centró en pinturas de paisajes románticos de la naturaleza salvaje americana.",
                de: "Thomas Cole gründete in den 1820er Jahren die Hudson River School, Amerikas erste große Kunstbewegung. Die Schule konzentrierte sich auf romantische Landschaftsmalerei der amerikanischen Wildnis.",
                nl: "Thomas Cole stichtte de Hudson River School in de jaren 1820, Amerika's eerste grote kunstbeweging. De school richtte zich op romantische landschapsschilderijen van de Amerikaanse wildernis."
            }
        },
        {
            question: {
                en: "Who painted 'Liberty Leading the People'?",
                es: "¿Quién pintó 'La Libertad Guiando al Pueblo'?",
                de: "Wer malte 'Die Freiheit führt das Volk'?",
                nl: "Wie schilderde 'De Vrijheid leidt het Volk'?"
            },
            options: [
                {
                    en: "Eugène Delacroix",
                    es: "Eugène Delacroix",
                    de: "Eugène Delacroix",
                    nl: "Eugène Delacroix"
                },
                {
                    en: "Jacques-Louis David",
                    es: "Jacques-Louis David",
                    de: "Jacques-Louis David",
                    nl: "Jacques-Louis David"
                },
                {
                    en: "Jean-Auguste-Dominique Ingres",
                    es: "Jean-Auguste-Dominique Ingres",
                    de: "Jean-Auguste-Dominique Ingres",
                    nl: "Jean-Auguste-Dominique Ingres"
                },
                {
                    en: "Théodore Géricault",
                    es: "Théodore Géricault",
                    de: "Théodore Géricault",
                    nl: "Théodore Géricault"
                }
            ],
            correct: 0,
            explanation: {
                en: "Eugène Delacroix painted 'Liberty Leading the People' in 1830 to commemorate the July Revolution in France. It became an iconic symbol of freedom and revolution.",
                es: "Eugène Delacroix pintó 'La Libertad Guiando al Pueblo' en 1830 para conmemorar la Revolución de Julio en Francia. Se convirtió en un símbolo icónico de libertad y revolución.",
                de: "Eugène Delacroix malte 'Die Freiheit führt das Volk' 1830 zur Erinnerung an die Julirevolution in Frankreich. Es wurde zu einem ikonischen Symbol für Freiheit und Revolution.",
                nl: "Eugène Delacroix schilderde 'De Vrijheid leidt het Volk' in 1830 ter nagedachtenis aan de Julirevolutie in Frankrijk. Het werd een iconisch symbool van vrijheid en revolutie."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Luncheon of the Boating Party'?",
                es: "¿Qué artista pintó 'El Almuerzo de los Remeros'?",
                de: "Welcher Künstler malte 'Das Frühstück der Ruderer'?",
                nl: "Welke kunstenaar schilderde 'Het Ontbijt van de Roeiers'?"
            },
            options: [
                {
                    en: "Pierre-Auguste Renoir",
                    es: "Pierre-Auguste Renoir",
                    de: "Pierre-Auguste Renoir",
                    nl: "Pierre-Auguste Renoir"
                },
                {
                    en: "Gustave Caillebotte",
                    es: "Gustave Caillebotte",
                    de: "Gustave Caillebotte",
                    nl: "Gustave Caillebotte"
                },
                {
                    en: "Berthe Morisot",
                    es: "Berthe Morisot",
                    de: "Berthe Morisot",
                    nl: "Berthe Morisot"
                },
                {
                    en: "Marie Bracquemond",
                    es: "Marie Bracquemond",
                    de: "Marie Bracquemond",
                    nl: "Marie Bracquemond"
                }
            ],
            correct: 0,
            explanation: {
                en: "Pierre-Auguste Renoir painted 'The Luncheon of the Boating Party' in 1880-1881. This masterpiece captures the joy and leisure of Parisian society in the late 19th century.",
                es: "Pierre-Auguste Renoir pintó 'El Almuerzo de los Remeros' en 1880-1881. Esta obra maestra captura la alegría y el ocio de la sociedad parisina a finales del siglo XIX.",
                de: "Pierre-Auguste Renoir malte 'Das Frühstück der Ruderer' 1880-1881. Dieses Meisterwerk fängt die Freude und Muße der Pariser Gesellschaft im späten 19. Jahrhundert ein.",
                nl: "Pierre-Auguste Renoir schilderde 'Het Ontbijt van de Roeiers' in 1880-1881. Dit meesterwerk vangt de vreugde en ontspanning van de Parijse samenleving in de late 19e eeuw."
            }
        },
        {
            question: {
                en: "Who created the mobile sculpture 'Calder's Circus'?",
                es: "¿Quién creó la escultura móvil 'El Circo de Calder'?",
                de: "Wer schuf die mobile Skulptur 'Calders Zirkus'?",
                nl: "Wie creëerde de mobiele sculptuur 'Calders Circus'?"
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
                    en: "László Moholy-Nagy",
                    es: "László Moholy-Nagy",
                    de: "László Moholy-Nagy",
                    nl: "László Moholy-Nagy"
                }
            ],
            correct: 0,
            explanation: {
                en: "Alexander Calder created 'Calder's Circus' starting in 1926. This miniature circus with wire figures was performed by Calder himself and helped establish his reputation as an artist.",
                es: "Alexander Calder creó 'El Circo de Calder' comenzando en 1926. Este circo en miniatura con figuras de alambre fue interpretado por el propio Calder y ayudó a establecer su reputación como artista.",
                de: "Alexander Calder schuf 'Calders Zirkus' ab 1926. Dieser Miniaturzirkus mit Drahtfiguren wurde von Calder selbst aufgeführt und half dabei, seinen Ruf als Künstler zu etablieren.",
                nl: "Alexander Calder creëerde 'Calders Circus' vanaf 1926. Dit miniatuurcircus met draadbeelden werd door Calder zelf uitgevoerd en hielp zijn reputatie als kunstenaar vestigen."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Dance' (La Danse)?",
                es: "¿Qué artista pintó 'La Danza' (La Danse)?",
                de: "Welcher Künstler malte 'Der Tanz' (La Danse)?",
                nl: "Welke kunstenaar schilderde 'De Dans' (La Danse)?"
            },
            options: [
                {
                    en: "Henri Matisse",
                    es: "Henri Matisse",
                    de: "Henri Matisse",
                    nl: "Henri Matisse"
                },
                {
                    en: "André Derain",
                    es: "André Derain",
                    de: "André Derain",
                    nl: "André Derain"
                },
                {
                    en: "Maurice de Vlaminck",
                    es: "Maurice de Vlaminck",
                    de: "Maurice de Vlaminck",
                    nl: "Maurice de Vlaminck"
                },
                {
                    en: "Raoul Dufy",
                    es: "Raoul Dufy",
                    de: "Raoul Dufy",
                    nl: "Raoul Dufy"
                }
            ],
            correct: 0,
            explanation: {
                en: "Henri Matisse painted 'The Dance' in 1909-1910. This iconic Fauvist work uses simple forms and bold colors to express the joy and energy of dance.",
                es: "Henri Matisse pintó 'La Danza' en 1909-1910. Esta obra icónica fauvista usa formas simples y colores audaces para expresar la alegría y energía de la danza.",
                de: "Henri Matisse malte 'Der Tanz' 1909-1910. Dieses ikonische fauvistische Werk verwendet einfache Formen und kräftige Farben, um die Freude und Energie des Tanzes auszudrücken.",
                nl: "Henri Matisse schilderde 'De Dans' in 1909-1910. Dit iconische fauvistische werk gebruikt eenvoudige vormen en gedurfde kleuren om de vreugde en energie van dans uit te drukken."
            }
        },
        {
            question: {
                en: "Who painted 'The Potato Eaters'?",
                es: "¿Quién pintó 'Los Comedores de Patatas'?",
                de: "Wer malte 'Die Kartoffelesser'?",
                nl: "Wie schilderde 'De Aardappeleters'?"
            },
            options: [
                {
                    en: "Vincent van Gogh",
                    es: "Vincent van Gogh",
                    de: "Vincent van Gogh",
                    nl: "Vincent van Gogh"
                },
                {
                    en: "Jean-François Millet",
                    es: "Jean-François Millet",
                    de: "Jean-François Millet",
                    nl: "Jean-François Millet"
                },
                {
                    en: "Gustave Courbet",
                    es: "Gustave Courbet",
                    de: "Gustave Courbet",
                    nl: "Gustave Courbet"
                },
                {
                    en: "Honoré Daumier",
                    es: "Honoré Daumier",
                    de: "Honoré Daumier",
                    nl: "Honoré Daumier"
                }
            ],
            correct: 0,
            explanation: {
                en: "Vincent van Gogh painted 'The Potato Eaters' in 1885. He considered it one of his finest works, depicting the harsh reality of peasant life with dignity and respect.",
                es: "Vincent van Gogh pintó 'Los Comedores de Patatas' en 1885. Lo consideraba una de sus mejores obras, representando la dura realidad de la vida campesina con dignidad y respeto.",
                de: "Vincent van Gogh malte 'Die Kartoffelesser' 1885. Er betrachtete es als eines seiner besten Werke, das die harte Realität des Bauernlebens mit Würde und Respekt darstellt.",
                nl: "Vincent van Gogh schilderde 'De Aardappeleters' in 1885. Hij beschouwde het als een van zijn beste werken, waarbij hij de harde realiteit van het boerenleven met waardigheid en respect weergeeft."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Birth of Venus'?",
                es: "¿Qué artista pintó 'El Nacimiento de Venus'?",
                de: "Welcher Künstler malte 'Die Geburt der Venus'?",
                nl: "Welke kunstenaar schilderde 'De Geboorte van Venus'?"
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
                en: "Sandro Botticelli painted 'The Birth of Venus' around 1485 during the Italian Renaissance. This iconic painting shows the goddess Venus emerging from the sea on a shell, and is housed in the Uffizi Gallery in Florence.",
                es: "Sandro Botticelli pintó 'El Nacimiento de Venus' alrededor de 1485 durante el Renacimiento italiano. Esta icónica pintura muestra a la diosa Venus emergiendo del mar en una concha, y se encuentra en la Galería Uffizi en Florencia.",
                de: "Sandro Botticelli malte 'Die Geburt der Venus' um 1485 während der italienischen Renaissance. Dieses ikonische Gemälde zeigt die Göttin Venus, die aus dem Meer auf einer Muschel auftaucht, und befindet sich in den Uffizien in Florenz.",
                nl: "Sandro Botticelli schilderde 'De Geboorte van Venus' rond 1485 tijdens de Italiaanse Renaissance. Dit iconische schilderij toont de godin Venus die uit de zee op een schelp verschijnt, en hangt in de Uffizi Galerij in Florence."
            }
        },
        {
            question: {
                en: "Who painted 'Las Meninas' (The Maids of Honour)?",
                es: "¿Quién pintó 'Las Meninas'?",
                de: "Wer malte 'Las Meninas' (Die Hoffräulein)?",
                nl: "Wie schilderde 'Las Meninas' (De Hofdames)?"
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
                    en: "Bartolomé Esteban Murillo",
                    es: "Bartolomé Esteban Murillo",
                    de: "Bartolomé Esteban Murillo",
                    nl: "Bartolomé Esteban Murillo"
                }
            ],
            correct: 0,
            explanation: {
                en: "Diego Velázquez painted 'Las Meninas' in 1656. This masterpiece depicts the Spanish royal family and is famous for its complex composition and use of perspective, showing Velázquez himself painting the scene.",
                es: "Diego Velázquez pintó 'Las Meninas' en 1656. Esta obra maestra representa a la familia real española y es famosa por su composición compleja y uso de perspectiva, mostrando al propio Velázquez pintando la escena.",
                de: "Diego Velázquez malte 'Las Meninas' 1656. Dieses Meisterwerk zeigt die spanische Königsfamilie und ist berühmt für seine komplexe Komposition und Perspektiveneinsatz, zeigt Velázquez selbst beim Malen der Szene.",
                nl: "Diego Velázquez schilderde 'Las Meninas' in 1656. Dit meesterwerk toont de Spaanse koninklijke familie en is beroemd om zijn complexe compositie en gebruik van perspectief, waarbij Velázquez zichzelf toont terwijl hij de scène schildert."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else if (typeof window !== 'undefined') {
        window.kunstenaarsLevel2 = questions;
    }
})();