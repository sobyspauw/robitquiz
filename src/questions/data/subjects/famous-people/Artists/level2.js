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
        },
        {
            question: {
                en: "Which artist painted 'The Gleaners'?",
                es: "¿Qué artista pintó 'Las Espigadoras'?",
                de: "Welcher Künstler malte 'Die Ährenleserinnen'?",
                nl: "Welke kunstenaar schilderde 'De Arenleessters'?"
            },
            options: [
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
                },
                {
                    en: "Camille Corot",
                    es: "Camille Corot",
                    de: "Camille Corot",
                    nl: "Camille Corot"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jean-François Millet painted 'The Gleaners' in 1857. The painting depicts three peasant women gleaning grain after the harvest, symbolizing rural labor and poverty.",
                es: "Jean-François Millet pintó 'Las Espigadoras' en 1857. La pintura representa a tres mujeres campesinas espigando grano después de la cosecha, simbolizando el trabajo rural y la pobreza.",
                de: "Jean-François Millet malte 'Die Ährenleserinnen' 1857. Das Gemälde zeigt drei Bäuerinnen beim Ährenlesen nach der Ernte und symbolisiert ländliche Arbeit und Armut.",
                nl: "Jean-François Millet schilderde 'De Arenleessters' in 1857. Het schilderij toont drie boerenvrouwen die graan verzamelen na de oogst, symboliserend landelijk werk en armoede."
            }
        },
        {
            question: {
                en: "Who created the sculpture 'The Thinker'?",
                es: "¿Quién creó la escultura 'El Pensador'?",
                de: "Wer schuf die Skulptur 'Der Denker'?",
                nl: "Wie creëerde de sculptuur 'De Denker'?"
            },
            options: [
                {
                    en: "Auguste Rodin",
                    es: "Auguste Rodin",
                    de: "Auguste Rodin",
                    nl: "Auguste Rodin"
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
                },
                {
                    en: "Camille Claudel",
                    es: "Camille Claudel",
                    de: "Camille Claudel",
                    nl: "Camille Claudel"
                }
            ],
            correct: 0,
            explanation: {
                en: "Auguste Rodin created 'The Thinker' around 1880-1882. Originally part of 'The Gates of Hell', it became one of the most recognizable sculptures in the world, representing philosophy and poetry.",
                es: "Auguste Rodin creó 'El Pensador' alrededor de 1880-1882. Originalmente parte de 'Las Puertas del Infierno', se convirtió en una de las esculturas más reconocibles del mundo, representando la filosofía y la poesía.",
                de: "Auguste Rodin schuf 'Der Denker' um 1880-1882. Ursprünglich Teil von 'Das Höllentor', wurde es zu einer der bekanntesten Skulpturen der Welt und repräsentiert Philosophie und Poesie.",
                nl: "Auguste Rodin creëerde 'De Denker' rond 1880-1882. Oorspronkelijk onderdeel van 'De Poorten van de Hel', werd het een van de meest herkenbare sculpturen ter wereld, die filosofie en poëzie vertegenwoordigt."
            }
        },
        {
            question: {
                en: "Which artist painted 'Christina's World'?",
                es: "¿Qué artista pintó 'El Mundo de Cristina'?",
                de: "Welcher Künstler malte 'Christinas Welt'?",
                nl: "Welke kunstenaar schilderde 'Christina's Wereld'?"
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
                    en: "Thomas Hart Benton",
                    es: "Thomas Hart Benton",
                    de: "Thomas Hart Benton",
                    nl: "Thomas Hart Benton"
                }
            ],
            correct: 0,
            explanation: {
                en: "Andrew Wyeth painted 'Christina's World' in 1948. The painting depicts Christina Olson, who had a degenerative muscular disorder, crawling through a field toward her farmhouse in Maine.",
                es: "Andrew Wyeth pintó 'El Mundo de Cristina' en 1948. La pintura representa a Christina Olson, quien tenía un trastorno muscular degenerativo, arrastrándose por un campo hacia su granja en Maine.",
                de: "Andrew Wyeth malte 'Christinas Welt' 1948. Das Gemälde zeigt Christina Olson, die an einer degenerativen Muskelerkrankung litt, wie sie durch ein Feld zu ihrem Bauernhaus in Maine kriecht.",
                nl: "Andrew Wyeth schilderde 'Christina's Wereld' in 1948. Het schilderij toont Christina Olson, die een degeneratieve spierziekte had, kruipend door een veld naar haar boerderij in Maine."
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
                    en: "Joaquín Sorolla",
                    es: "Joaquín Sorolla",
                    de: "Joaquín Sorolla",
                    nl: "Joaquín Sorolla"
                }
            ],
            correct: 0,
            explanation: {
                en: "Francisco Goya painted 'The Third of May 1808' in 1814. This powerful anti-war painting depicts the execution of Spanish resisters by Napoleon's forces during the Peninsular War.",
                es: "Francisco Goya pintó 'El Tres de Mayo de 1808' en 1814. Esta poderosa pintura anti-guerra representa la ejecución de resistentes españoles por las fuerzas de Napoleón durante la Guerra Peninsular.",
                de: "Francisco Goya malte 'Der 3. Mai 1808' 1814. Dieses kraftvolle Anti-Kriegs-Gemälde zeigt die Hinrichtung spanischer Widerstandskämpfer durch Napoleons Truppen während des Halbinselkriegs.",
                nl: "Francisco Goya schilderde 'De Derde Mei 1808' in 1814. Dit krachtige anti-oorlogsschilderij toont de executie van Spaanse verzetsleden door Napoleons troepen tijdens de Peninsulaire Oorlog."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Great Wave off Kanagawa'?",
                es: "¿Qué artista pintó 'La Gran Ola de Kanagawa'?",
                de: "Welcher Künstler malte 'Die große Welle vor Kanagawa'?",
                nl: "Welke kunstenaar schilderde 'De Grote Golf bij Kanagawa'?"
            },
            options: [
                {
                    en: "Katsushika Hokusai",
                    es: "Katsushika Hokusai",
                    de: "Katsushika Hokusai",
                    nl: "Katsushika Hokusai"
                },
                {
                    en: "Utagawa Hiroshige",
                    es: "Utagawa Hiroshige",
                    de: "Utagawa Hiroshige",
                    nl: "Utagawa Hiroshige"
                },
                {
                    en: "Kitagawa Utamaro",
                    es: "Kitagawa Utamaro",
                    de: "Kitagawa Utamaro",
                    nl: "Kitagawa Utamaro"
                },
                {
                    en: "Katsukawa Shunshō",
                    es: "Katsukawa Shunshō",
                    de: "Katsukawa Shunshō",
                    nl: "Katsukawa Shunshō"
                }
            ],
            correct: 0,
            explanation: {
                en: "Katsushika Hokusai created 'The Great Wave off Kanagawa' around 1830-1831. This iconic Japanese woodblock print is one of the most recognizable works of Asian art in the world.",
                es: "Katsushika Hokusai creó 'La Gran Ola de Kanagawa' alrededor de 1830-1831. Este icónico grabado en madera japonés es una de las obras de arte asiático más reconocibles del mundo.",
                de: "Katsushika Hokusai schuf 'Die große Welle vor Kanagawa' um 1830-1831. Dieser ikonische japanische Holzschnitt ist eines der bekanntesten Werke asiatischer Kunst weltweit.",
                nl: "Katsushika Hokusai creëerde 'De Grote Golf bij Kanagawa' rond 1830-1831. Deze iconische Japanse houtsnede is een van de meest herkenbare werken van Aziatische kunst ter wereld."
            }
        },
        {
            question: {
                en: "Who painted 'Girl with a Pearl Earring'?",
                es: "¿Quién pintó 'La Joven de la Perla'?",
                de: "Wer malte 'Das Mädchen mit dem Perlenohrring'?",
                nl: "Wie schilderde 'Meisje met de Parel'?"
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
                en: "Johannes Vermeer painted 'Girl with a Pearl Earring' around 1665. Often called the 'Mona Lisa of the North', this masterpiece is renowned for its use of light and the captivating gaze of the subject.",
                es: "Johannes Vermeer pintó 'La Joven de la Perla' alrededor de 1665. A menudo llamada la 'Mona Lisa del Norte', esta obra maestra es famosa por su uso de la luz y la mirada cautivadora del sujeto.",
                de: "Johannes Vermeer malte 'Das Mädchen mit dem Perlenohrring' um 1665. Oft als 'Mona Lisa des Nordens' bezeichnet, ist dieses Meisterwerk berühmt für seinen Lichteinsatz und den fesselnden Blick der Dargestellten.",
                nl: "Johannes Vermeer schilderde 'Meisje met de Parel' rond 1665. Vaak 'de Mona Lisa van het Noorden' genoemd, is dit meesterwerk beroemd om het gebruik van licht en de boeiende blik van het onderwerp."
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
                    en: "Johannes Vermeer",
                    es: "Johannes Vermeer",
                    de: "Johannes Vermeer",
                    nl: "Johannes Vermeer"
                },
                {
                    en: "Frans Hals",
                    es: "Frans Hals",
                    de: "Frans Hals",
                    nl: "Frans Hals"
                },
                {
                    en: "Pieter Bruegel",
                    es: "Pieter Bruegel",
                    de: "Pieter Bruegel",
                    nl: "Pieter Bruegel"
                }
            ],
            correct: 0,
            explanation: {
                en: "Rembrandt van Rijn painted 'The Night Watch' in 1642. This massive group portrait of a civic guard company is considered one of the masterpieces of the Dutch Golden Age, famous for its use of light and shadow.",
                es: "Rembrandt van Rijn pintó 'La Ronda de Noche' en 1642. Este masivo retrato grupal de una compañía de guardia cívica se considera una de las obras maestras del Siglo de Oro holandés, famosa por su uso de luz y sombra.",
                de: "Rembrandt van Rijn malte 'Die Nachtwache' 1642. Dieses monumentale Gruppenporträt einer Bürgerwehrgruppe gilt als eines der Meisterwerke des niederländischen Goldenen Zeitalters, berühmt für seinen Licht- und Schatteneinsatz.",
                nl: "Rembrandt van Rijn schilderde 'De Nachtwacht' in 1642. Dit massale groepsportret van een schutterscompagnie wordt beschouwd als een van de meesterwerken van de Nederlandse Gouden Eeuw, beroemd om het gebruik van licht en schaduw."
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
                    en: "Andrew Wyeth",
                    es: "Andrew Wyeth",
                    de: "Andrew Wyeth",
                    nl: "Andrew Wyeth"
                },
                {
                    en: "Norman Rockwell",
                    es: "Norman Rockwell",
                    de: "Norman Rockwell",
                    nl: "Norman Rockwell"
                }
            ],
            correct: 0,
            explanation: {
                en: "Grant Wood painted 'American Gothic' in 1930. This iconic painting depicts a farmer and his daughter standing before a house with Gothic Revival architecture, becoming a symbol of rural American life.",
                es: "Grant Wood pintó 'Gótico Americano' en 1930. Esta pintura icónica representa a un granjero y su hija frente a una casa con arquitectura neogótica, convirtiéndose en un símbolo de la vida rural americana.",
                de: "Grant Wood malte 'American Gothic' 1930. Dieses ikonische Gemälde zeigt einen Farmer und seine Tochter vor einem Haus mit neugotischer Architektur und wurde zum Symbol des ländlichen amerikanischen Lebens.",
                nl: "Grant Wood schilderde 'American Gothic' in 1930. Dit iconische schilderij toont een boer en zijn dochter voor een huis met neogotische architectuur, en werd een symbool van het rurale Amerikaanse leven."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Garden of Earthly Delights'?",
                es: "¿Qué artista pintó 'El Jardín de las Delicias'?",
                de: "Welcher Künstler malte 'Der Garten der Lüste'?",
                nl: "Welke kunstenaar schilderde 'De Tuin der Lusten'?"
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
                en: "Hieronymus Bosch painted 'The Garden of Earthly Delights' between 1490-1510. This triptych is famous for its surreal imagery, depicting paradise, earthly pleasures, and hell in intricate detail.",
                es: "Hieronymus Bosch pintó 'El Jardín de las Delicias' entre 1490-1510. Este tríptico es famoso por su imaginería surrealista, representando el paraíso, los placeres terrenales y el infierno con detalles intrincados.",
                de: "Hieronymus Bosch malte 'Der Garten der Lüste' zwischen 1490-1510. Dieses Triptychon ist berühmt für seine surrealen Bilder und zeigt Paradies, irdische Freuden und Hölle in komplizierten Details.",
                nl: "Jheronimus Bosch schilderde 'De Tuin der Lusten' tussen 1490-1510. Dit drieluik is beroemd om zijn surrealistische beeldtaal en toont het paradijs, aardse genoegens en de hel in gedetailleerd detail."
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
                    en: "William Blake",
                    es: "William Blake",
                    de: "William Blake",
                    nl: "William Blake"
                }
            ],
            correct: 0,
            explanation: {
                en: "John Constable painted 'The Hay Wain' in 1821. This landscape painting of rural Suffolk became one of the most famous paintings of the English countryside and influenced the French Romantic movement.",
                es: "John Constable pintó 'El Carro de Heno' en 1821. Esta pintura de paisaje del Suffolk rural se convirtió en una de las pinturas más famosas del campo inglés e influyó en el movimiento romántico francés.",
                de: "John Constable malte 'Der Heuwagen' 1821. Dieses Landschaftsgemälde des ländlichen Suffolk wurde zu einem der berühmtesten Gemälde der englischen Landschaft und beeinflusste die französische Romantik.",
                nl: "John Constable schilderde 'De Hooiwagen' in 1821. Dit landschapsschilderij van het landelijke Suffolk werd een van de beroemdste schilderijen van het Engelse platteland en beïnvloedde de Franse Romantiek."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Swing'?",
                es: "¿Qué artista pintó 'El Columpio'?",
                de: "Welcher Künstler malte 'Die Schaukel'?",
                nl: "Welke kunstenaar schilderde 'De Schommel'?"
            },
            options: [
                {
                    en: "Jean-Honoré Fragonard",
                    es: "Jean-Honoré Fragonard",
                    de: "Jean-Honoré Fragonard",
                    nl: "Jean-Honoré Fragonard"
                },
                {
                    en: "François Boucher",
                    es: "François Boucher",
                    de: "François Boucher",
                    nl: "François Boucher"
                },
                {
                    en: "Antoine Watteau",
                    es: "Antoine Watteau",
                    de: "Antoine Watteau",
                    nl: "Antoine Watteau"
                },
                {
                    en: "Nicolas Lancret",
                    es: "Nicolas Lancret",
                    de: "Nicolas Lancret",
                    nl: "Nicolas Lancret"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jean-Honoré Fragonard painted 'The Swing' in 1767. This Rococo masterpiece is famous for its playful subject matter, pastel colors, and elaborate composition depicting a young woman on a swing.",
                es: "Jean-Honoré Fragonard pintó 'El Columpio' en 1767. Esta obra maestra rococó es famosa por su tema lúdico, colores pastel y elaborada composición que representa a una joven en un columpio.",
                de: "Jean-Honoré Fragonard malte 'Die Schaukel' 1767. Dieses Rokoko-Meisterwerk ist berühmt für sein verspieltes Thema, Pastellfarben und aufwendige Komposition, die eine junge Frau auf einer Schaukel zeigt.",
                nl: "Jean-Honoré Fragonard schilderde 'De Schommel' in 1767. Dit rococo-meesterwerk is beroemd om zijn speelse onderwerp, pastelkleuren en uitgebreide compositie die een jonge vrouw op een schommel toont."
            }
        },
        {
            question: {
                en: "Who painted 'The Arnolfini Portrait'?",
                es: "¿Quién pintó 'El Retrato de los Arnolfini'?",
                de: "Wer malte 'Das Arnolfini-Porträt'?",
                nl: "Wie schilderde 'Het Arnolfini-portret'?"
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
                    en: "Petrus Christus",
                    es: "Petrus Christus",
                    de: "Petrus Christus",
                    nl: "Petrus Christus"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jan van Eyck painted 'The Arnolfini Portrait' in 1434. This complex double portrait is famous for its detailed realism, use of symbolism, and the convex mirror reflecting the room and artist.",
                es: "Jan van Eyck pintó 'El Retrato de los Arnolfini' en 1434. Este complejo retrato doble es famoso por su realismo detallado, uso de simbolismo y el espejo convexo que refleja la habitación y al artista.",
                de: "Jan van Eyck malte 'Das Arnolfini-Porträt' 1434. Dieses komplexe Doppelporträt ist berühmt für seinen detaillierten Realismus, Symbolismus und den konvexen Spiegel, der den Raum und den Künstler reflektiert.",
                nl: "Jan van Eyck schilderde 'Het Arnolfini-portret' in 1434. Dit complexe dubbelportret is beroemd om zijn gedetailleerd realisme, gebruik van symboliek en de bolle spiegel die de kamer en de kunstenaar weerspiegelt."
            }
        },
        {
            question: {
                en: "Which artist painted 'Whistler's Mother'?",
                es: "¿Qué artista pintó 'La Madre de Whistler'?",
                de: "Welcher Künstler malte 'Whistlers Mutter'?",
                nl: "Welke kunstenaar schilderde 'Whistlers Moeder'?"
            },
            options: [
                {
                    en: "James McNeill Whistler",
                    es: "James McNeill Whistler",
                    de: "James McNeill Whistler",
                    nl: "James McNeill Whistler"
                },
                {
                    en: "John Singer Sargent",
                    es: "John Singer Sargent",
                    de: "John Singer Sargent",
                    nl: "John Singer Sargent"
                },
                {
                    en: "Winslow Homer",
                    es: "Winslow Homer",
                    de: "Winslow Homer",
                    nl: "Winslow Homer"
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
                en: "James McNeill Whistler painted 'Arrangement in Grey and Black No. 1' (known as 'Whistler's Mother') in 1871. This portrait of the artist's mother became an American icon symbolizing motherhood.",
                es: "James McNeill Whistler pintó 'Arreglo en Gris y Negro No. 1' (conocida como 'La Madre de Whistler') en 1871. Este retrato de la madre del artista se convirtió en un ícono americano que simboliza la maternidad.",
                de: "James McNeill Whistler malte 'Arrangement in Grau und Schwarz Nr. 1' (bekannt als 'Whistlers Mutter') 1871. Dieses Porträt der Mutter des Künstlers wurde zu einer amerikanischen Ikone, die Mutterschaft symbolisiert.",
                nl: "James McNeill Whistler schilderde 'Arrangement in Grijs en Zwart No. 1' (bekend als 'Whistlers Moeder') in 1871. Dit portret van de moeder van de kunstenaar werd een Amerikaans icoon dat moederschap symboliseert."
            }
        },
        {
            question: {
                en: "Who painted 'The Fighting Temeraire'?",
                es: "¿Quién pintó 'El Temerario Luchando'?",
                de: "Wer malte 'Die letzte Fahrt der Temeraire'?",
                nl: "Wie schilderde 'Het Gevecht van de Temeraire'?"
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
                    en: "Thomas Lawrence",
                    es: "Thomas Lawrence",
                    de: "Thomas Lawrence",
                    nl: "Thomas Lawrence"
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
                en: "J.M.W. Turner painted 'The Fighting Temeraire' in 1838. The painting depicts the warship HMS Temeraire being towed to be broken up, symbolizing the end of an era as sail gave way to steam.",
                es: "J.M.W. Turner pintó 'El Temerario Luchando' en 1838. La pintura representa al buque de guerra HMS Temeraire siendo remolcado para su desguace, simbolizando el fin de una era cuando la vela dio paso al vapor.",
                de: "J.M.W. Turner malte 'Die letzte Fahrt der Temeraire' 1838. Das Gemälde zeigt das Kriegsschiff HMS Temeraire beim Abschleppen zum Abwracken und symbolisiert das Ende einer Ära, als Segel dem Dampf wichen.",
                nl: "J.M.W. Turner schilderde 'Het Gevecht van de Temeraire' in 1838. Het schilderij toont het oorlogsschip HMS Temeraire dat wordt gesleept om te worden gesloopt, symboliserend het einde van een tijdperk toen zeil plaats maakte voor stoom."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Blue Boy'?",
                es: "¿Qué artista pintó 'El Niño Azul'?",
                de: "Welcher Künstler malte 'Der blaue Knabe'?",
                nl: "Welke kunstenaar schilderde 'De Blauwe Jongen'?"
            },
            options: [
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
                },
                {
                    en: "John Constable",
                    es: "John Constable",
                    de: "John Constable",
                    nl: "John Constable"
                },
                {
                    en: "Thomas Lawrence",
                    es: "Thomas Lawrence",
                    de: "Thomas Lawrence",
                    nl: "Thomas Lawrence"
                }
            ],
            correct: 0,
            explanation: {
                en: "Thomas Gainsborough painted 'The Blue Boy' around 1770. This portrait of a young man in elaborate blue costume is one of the most famous British paintings and showcases Gainsborough's mastery of color and texture.",
                es: "Thomas Gainsborough pintó 'El Niño Azul' alrededor de 1770. Este retrato de un joven con elaborado traje azul es una de las pinturas británicas más famosas y muestra el dominio de Gainsborough del color y la textura.",
                de: "Thomas Gainsborough malte 'Der blaue Knabe' um 1770. Dieses Porträt eines jungen Mannes in aufwendigem blauen Kostüm ist eines der berühmtesten britischen Gemälde und zeigt Gainsboroughs Meisterschaft in Farbe und Textur.",
                nl: "Thomas Gainsborough schilderde 'De Blauwe Jongen' rond 1770. Dit portret van een jonge man in een uitgebreid blauw kostuum is een van de beroemdste Britse schilderijen en toont Gainsboroughs meesterschap in kleur en textuur."
            }
        },
        {
            question: {
                en: "Who created the sculpture 'Unique Forms of Continuity in Space'?",
                es: "¿Quién creó la escultura 'Formas Únicas de Continuidad en el Espacio'?",
                de: "Wer schuf die Skulptur 'Einzigartige Formen der Kontinuität im Raum'?",
                nl: "Wie creëerde de sculptuur 'Unieke Vormen van Continuïteit in de Ruimte'?"
            },
            options: [
                {
                    en: "Umberto Boccioni",
                    es: "Umberto Boccioni",
                    de: "Umberto Boccioni",
                    nl: "Umberto Boccioni"
                },
                {
                    en: "Filippo Marinetti",
                    es: "Filippo Marinetti",
                    de: "Filippo Marinetti",
                    nl: "Filippo Marinetti"
                },
                {
                    en: "Giacomo Balla",
                    es: "Giacomo Balla",
                    de: "Giacomo Balla",
                    nl: "Giacomo Balla"
                },
                {
                    en: "Carlo Carrà",
                    es: "Carlo Carrà",
                    de: "Carlo Carrà",
                    nl: "Carlo Carrà"
                }
            ],
            correct: 0,
            explanation: {
                en: "Umberto Boccioni created 'Unique Forms of Continuity in Space' in 1913. This bronze sculpture is a masterpiece of Futurism, depicting a dynamic figure in motion that embodies speed and modernity.",
                es: "Umberto Boccioni creó 'Formas Únicas de Continuidad en el Espacio' en 1913. Esta escultura de bronce es una obra maestra del Futurismo, representando una figura dinámica en movimiento que encarna velocidad y modernidad.",
                de: "Umberto Boccioni schuf 'Einzigartige Formen der Kontinuität im Raum' 1913. Diese Bronzeskulptur ist ein Meisterwerk des Futurismus und zeigt eine dynamische Figur in Bewegung, die Geschwindigkeit und Modernität verkörpert.",
                nl: "Umberto Boccioni creëerde 'Unieke Vormen van Continuïteit in de Ruimte' in 1913. Deze bronzen sculptuur is een meesterwerk van het Futurisme, dat een dynamische figuur in beweging toont die snelheid en moderniteit belichaamt."
            }
        },
        {
            question: {
                en: "Which artist painted 'Rain, Steam and Speed'?",
                es: "¿Qué artista pintó 'Lluvia, Vapor y Velocidad'?",
                de: "Welcher Künstler malte 'Regen, Dampf und Geschwindigkeit'?",
                nl: "Welke kunstenaar schilderde 'Regen, Stoom en Snelheid'?"
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
                    en: "Claude Monet",
                    es: "Claude Monet",
                    de: "Claude Monet",
                    nl: "Claude Monet"
                },
                {
                    en: "Camille Pissarro",
                    es: "Camille Pissarro",
                    de: "Camille Pissarro",
                    nl: "Camille Pissarro"
                }
            ],
            correct: 0,
            explanation: {
                en: "J.M.W. Turner painted 'Rain, Steam and Speed' in 1844. This revolutionary painting depicts a steam train crossing a bridge in atmospheric conditions, celebrating the power of modern technology.",
                es: "J.M.W. Turner pintó 'Lluvia, Vapor y Velocidad' en 1844. Esta pintura revolucionaria representa un tren de vapor cruzando un puente en condiciones atmosféricas, celebrando el poder de la tecnología moderna.",
                de: "J.M.W. Turner malte 'Regen, Dampf und Geschwindigkeit' 1844. Dieses revolutionäre Gemälde zeigt einen Dampfzug, der bei atmosphärischen Bedingungen eine Brücke überquert und die Kraft moderner Technologie feiert.",
                nl: "J.M.W. Turner schilderde 'Regen, Stoom en Snelheid' in 1844. Dit revolutionaire schilderij toont een stoomtrein die een brug oversteekt in atmosferische omstandigheden, ter viering van de kracht van moderne technologie."
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
                }
            ],
            correct: 0,
            explanation: {
                en: "Théodore Géricault painted 'The Raft of the Medusa' in 1819. This monumental Romantic painting depicts survivors of the French naval frigate Méduse after its 1816 shipwreck, exposing a government scandal.",
                es: "Théodore Géricault pintó 'La Balsa de la Medusa' en 1819. Esta monumental pintura romántica representa a los sobrevivientes de la fragata naval francesa Méduse después de su naufragio en 1816, exponiendo un escándalo gubernamental.",
                de: "Théodore Géricault malte 'Das Floß der Medusa' 1819. Dieses monumentale romantische Gemälde zeigt Überlebende der französischen Marinefregatte Méduse nach ihrem Schiffbruch 1816 und deckt einen Regierungsskandal auf.",
                nl: "Théodore Géricault schilderde 'Het Vlot van de Medusa' in 1819. Dit monumentale romantische schilderij toont overlevenden van het Franse marinefregat Méduse na het schipbreuk in 1816, waarmee een regeringsschandaal aan het licht kwam."
            }
        },
        {
            question: {
                en: "Which artist painted 'Bathers at Asnières'?",
                es: "¿Qué artista pintó 'Bañistas en Asnières'?",
                de: "Welcher Künstler malte 'Badende in Asnières'?",
                nl: "Welke kunstenaar schilderde 'Badende mensen bij Asnières'?"
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
                }
            ],
            correct: 0,
            explanation: {
                en: "Georges Seurat painted 'Bathers at Asnières' in 1884. This large-scale painting was Seurat's first major work and preceded his development of pointillism, showing his interest in scientific color theory.",
                es: "Georges Seurat pintó 'Bañistas en Asnières' en 1884. Esta pintura a gran escala fue la primera obra importante de Seurat y precedió su desarrollo del puntillismo, mostrando su interés en la teoría científica del color.",
                de: "Georges Seurat malte 'Badende in Asnières' 1884. Dieses großformatige Gemälde war Seurats erstes Hauptwerk und ging seiner Entwicklung des Pointillismus voraus, zeigt sein Interesse an wissenschaftlicher Farbtheorie.",
                nl: "Georges Seurat schilderde 'Badende mensen bij Asnières' in 1884. Dit grootschalige schilderij was Seurats eerste grote werk en ging vooraf aan zijn ontwikkeling van pointillisme, wat zijn interesse in wetenschappelijke kleurentheorie toont."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Anatomy Lesson of Dr. Nicolaes Tulp'?",
                es: "¿Qué artista pintó 'La Lección de Anatomía del Dr. Nicolaes Tulp'?",
                de: "Welcher Künstler malte 'Die Anatomie des Dr. Nicolaes Tulp'?",
                nl: "Welke kunstenaar schilderde 'De Anatomische Les van Dr. Nicolaes Tulp'?"
            },
            options: [
                {
                    en: "Rembrandt van Rijn",
                    es: "Rembrandt van Rijn",
                    de: "Rembrandt van Rijn",
                    nl: "Rembrandt van Rijn"
                },
                {
                    en: "Johannes Vermeer",
                    es: "Johannes Vermeer",
                    de: "Johannes Vermeer",
                    nl: "Johannes Vermeer"
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
                en: "Rembrandt van Rijn painted 'The Anatomy Lesson of Dr. Nicolaes Tulp' in 1632. This group portrait shows Dr. Tulp demonstrating the anatomy of the arm to medical professionals, marking Rembrandt's breakthrough in Amsterdam.",
                es: "Rembrandt van Rijn pintó 'La Lección de Anatomía del Dr. Nicolaes Tulp' en 1632. Este retrato grupal muestra al Dr. Tulp demostrando la anatomía del brazo a profesionales médicos, marcando el avance de Rembrandt en Ámsterdam.",
                de: "Rembrandt van Rijn malte 'Die Anatomie des Dr. Nicolaes Tulp' 1632. Dieses Gruppenporträt zeigt Dr. Tulp, der Medizinern die Anatomie des Arms demonstriert, und markiert Rembrandts Durchbruch in Amsterdam.",
                nl: "Rembrandt van Rijn schilderde 'De Anatomische Les van Dr. Nicolaes Tulp' in 1632. Dit groepsportret toont Dr. Tulp die de anatomie van de arm demonstreert aan medische professionals, wat Rembrandts doorbraak in Amsterdam markeerde."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else if (typeof window !== 'undefined') {
        window.kunstenaarsLevel2 = questions;
    }
})();