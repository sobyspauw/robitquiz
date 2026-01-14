(() => {
    const questions = [
        {
            question: {
                en: "What technique involves using very fine gradations of light and shadow, as perfected by Leonardo da Vinci?",
                es: "¿Qué técnica implica usar gradaciones muy finas de luz y sombra, como la perfeccionó Leonardo da Vinci?",
                de: "Welche Technik verwendet sehr feine Abstufungen von Licht und Schatten, wie sie Leonardo da Vinci perfektionierte?",
                nl: "Welke techniek houdt zeer fijne gradaties van licht en schaduw in, zoals geperfectioneerd door Leonardo da Vinci?"
            },
            options: [
                {
                    en: "Sfumato",
                    es: "Sfumato",
                    de: "Sfumato",
                    nl: "Sfumato"
                },
                {
                    en: "Chiaroscuro",
                    es: "Claroscuro",
                    de: "Chiaroscuro",
                    nl: "Chiaroscuro"
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
            correct: 0,
            explanation: {
                en: "Sfumato is Leonardo's technique of soft, subtle gradations without harsh outlines. The term means 'smoky' in Italian and creates atmospheric effects seen in the Mona Lisa.",
                es: "Sfumato es la técnica de Leonardo de gradaciones suaves y sutiles sin contornos duros. El término significa 'humeante' en italiano y crea efectos atmosféricos vistos en la Mona Lisa.",
                de: "Sfumato ist Leonardos Technik weicher, subtiler Abstufungen ohne harte Konturen. Der Begriff bedeutet 'rauchig' auf Italienisch und erzeugt atmosphärische Effekte, die in der Mona Lisa zu sehen sind.",
                nl: "Sfumato is Leonardo's techniek van zachte, subtiele gradaties zonder harde contouren. De term betekent 'rokerig' in het Italiaans en creëert atmosferische effecten zoals te zien in de Mona Lisa."
            }
        },
        {
            question: {
                en: "Which Quattrocento master painted 'The Tribute Money' fresco in the Brancacci Chapel?",
                es: "¿Qué maestro del Quattrocento pintó el fresco 'El Tributo' en la Capilla Brancacci?",
                de: "Welcher Quattrocento-Meister malte das Fresko 'Der Zinsgroschen' in der Brancacci-Kapelle?",
                nl: "Welke Quattrocento-meester schilderde het fresco 'Het Cijns Geld' in de Brancacci Kapel?"
            },
            options: [
                {
                    en: "Masaccio",
                    es: "Masaccio",
                    de: "Masaccio",
                    nl: "Masaccio"
                },
                {
                    en: "Fra Angelico",
                    es: "Fra Angélico",
                    de: "Fra Angelico",
                    nl: "Fra Angelico"
                },
                {
                    en: "Piero della Francesca",
                    es: "Piero della Francesca",
                    de: "Piero della Francesca",
                    nl: "Piero della Francesca"
                },
                {
                    en: "Andrea Mantegna",
                    es: "Andrea Mantegna",
                    de: "Andrea Mantegna",
                    nl: "Andrea Mantegna"
                }
            ],
            correct: 0,
            explanation: {
                en: "Masaccio painted 'The Tribute Money' (1425-1427) in the Brancacci Chapel, Santa Maria del Carmine, Florence. This work revolutionized painting with its use of linear perspective and psychological realism.",
                es: "Masaccio pintó 'El Tributo' (1425-1427) en la Capilla Brancacci, Santa Maria del Carmine, Florencia. Esta obra revolucionó la pintura con su uso de perspectiva lineal y realismo psicológico.",
                de: "Masaccio malte 'Der Zinsgroschen' (1425-1427) in der Brancacci-Kapelle, Santa Maria del Carmine, Florenz. Dieses Werk revolutionierte die Malerei mit seiner Verwendung linearer Perspektive und psychologischem Realismus.",
                nl: "Masaccio schilderde 'Het Cijns Geld' (1425-1427) in de Brancacci Kapel, Santa Maria del Carmine, Florence. Dit werk revolutioneerde de schilderkunst met zijn gebruik van lineair perspectief en psychologisch realisme."
            }
        },
        {
            question: {
                en: "Who painted 'The School of Athens' in the Vatican?",
                es: "¿Quién pintó 'La Escuela de Atenas' en el Vaticano?",
                de: "Wer malte 'Die Schule von Athen' im Vatikan?",
                nl: "Wie schilderde 'De School van Athene' in het Vaticaan?"
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
                    en: "Bramante",
                    es: "Bramante",
                    de: "Bramante",
                    nl: "Bramante"
                }
            ],
            correct: 0,
            explanation: {
                en: "Raphael painted 'The School of Athens' (1509-1511) in the Apostolic Palace's Stanza della Segnatura. This Renaissance masterpiece depicts ancient Greek philosophers with contemporary artists' faces.",
                es: "Rafael pintó 'La Escuela de Atenas' (1509-1511) en la Stanza della Segnatura del Palacio Apostólico. Esta obra maestra renacentista representa filósofos griegos antiguos con rostros de artistas contemporáneos.",
                de: "Raffael malte 'Die Schule von Athen' (1509-1511) in der Stanza della Segnatura des Apostolischen Palastes. Dieses Renaissance-Meisterwerk zeigt antike griechische Philosophen mit Gesichtern zeitgenössischer Künstler.",
                nl: "Rafaël schilderde 'De School van Athene' (1509-1511) in de Stanza della Segnatura van het Apostolisch Paleis. Dit Renaissance meesterwerk toont oude Griekse filosofen met gezichten van hedendaagse kunstenaars."
            }
        },
        {
            question: {
                en: "Which technique involves painting with pigments suspended in hot wax?",
                es: "¿Qué técnica implica pintar con pigmentos suspendidos en cera caliente?",
                de: "Welche Technik beinhaltet das Malen mit in heißem Wachs suspendierten Pigmenten?",
                nl: "Welke techniek houdt schilderen in met pigmenten die zijn opgehangen in hete was?"
            },
            options: [
                {
                    en: "Encaustic",
                    es: "Encáustica",
                    de: "Enkaustik",
                    nl: "Encaustiek"
                },
                {
                    en: "Tempera",
                    es: "Témpera",
                    de: "Tempera",
                    nl: "Tempera"
                },
                {
                    en: "Fresco",
                    es: "Fresco",
                    de: "Fresko",
                    nl: "Fresco"
                },
                {
                    en: "Casein",
                    es: "Caseína",
                    de: "Kasein",
                    nl: "Caseïne"
                }
            ],
            correct: 0,
            explanation: {
                en: "Encaustic painting uses heated beeswax mixed with colored pigments. This ancient technique was used by the Greeks and Romans and revived by modern artists like Jasper Johns.",
                es: "La pintura encáustica usa cera de abeja calentada mezclada con pigmentos de color. Esta técnica antigua fue usada por griegos y romanos y revivida por artistas modernos como Jasper Johns.",
                de: "Die Enkaustik-Malerei verwendet erhitztes Bienenwachs gemischt mit farbigen Pigmenten. Diese antike Technik wurde von Griechen und Römern verwendet und von modernen Künstlern wie Jasper Johns wiederbelebt.",
                nl: "Encaustiek schilderen gebruikt verwarmde bijenwas gemengd met gekleurde pigmenten. Deze oude techniek werd gebruikt door Grieken en Romeinen en nieuw leven ingeblazen door moderne kunstenaars zoals Jasper Johns."
            }
        },
        {
            question: {
                en: "Who painted 'The Annunciation' now in the Uffizi Gallery?",
                es: "¿Quién pintó 'La Anunciación' que ahora está en la Galería Uffizi?",
                de: "Wer malte 'Die Verkündigung', die sich jetzt in der Uffizien-Galerie befindet?",
                nl: "Wie schilderde 'De Aankondiging' die nu in de Uffizi Gallery hangt?"
            },
            options: [
                {
                    en: "Leonardo da Vinci",
                    es: "Leonardo da Vinci",
                    de: "Leonardo da Vinci",
                    nl: "Leonardo da Vinci"
                },
                {
                    en: "Botticelli",
                    es: "Botticelli",
                    de: "Botticelli",
                    nl: "Botticelli"
                },
                {
                    en: "Fra Angelico",
                    es: "Fra Angélico",
                    de: "Fra Angelico",
                    nl: "Fra Angelico"
                },
                {
                    en: "Verrocchio",
                    es: "Verrocchio",
                    de: "Verrocchio",
                    nl: "Verrocchio"
                }
            ],
            correct: 0,
            explanation: {
                en: "Leonardo da Vinci painted 'The Annunciation' (1472-1475) early in his career while in Verrocchio's workshop. The painting shows his developing mastery of perspective and natural detail.",
                es: "Leonardo da Vinci pintó 'La Anunciación' (1472-1475) temprano en su carrera mientras estaba en el taller de Verrocchio. La pintura muestra su maestría en desarrollo de perspectiva y detalle natural.",
                de: "Leonardo da Vinci malte 'Die Verkündigung' (1472-1475) früh in seiner Laufbahn, während er in Verrocchios Werkstatt war. Das Gemälde zeigt seine sich entwickelnde Meisterschaft in Perspektive und natürlichem Detail.",
                nl: "Leonardo da Vinci schilderde 'De Aankondiging' (1472-1475) vroeg in zijn carrière terwijl hij in Verrocchio's werkplaats was. Het schilderij toont zijn zich ontwikkelende meesterschap van perspectief en natuurlijk detail."
            }
        },
        {
            question: {
                en: "Which artist developed the technique of divisionism?",
                es: "¿Qué artista desarrolló la técnica del divisionismo?",
                de: "Welcher Künstler entwickelte die Technik des Divisionismus?",
                nl: "Welke kunstenaar ontwikkelde de techniek van het divisionisme?"
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
                    en: "Henri-Edmond Cross",
                    es: "Henri-Edmond Cross",
                    de: "Henri-Edmond Cross",
                    nl: "Henri-Edmond Cross"
                },
                {
                    en: "Maximilien Luce",
                    es: "Maximilien Luce",
                    de: "Maximilien Luce",
                    nl: "Maximilien Luce"
                }
            ],
            correct: 0,
            explanation: {
                en: "Georges Seurat developed divisionism (or pointillism), systematically applying color theory to separate pure colors in small dots. His scientific approach influenced the Neo-Impressionist movement.",
                es: "Georges Seurat desarrolló el divisionismo (o puntillismo), aplicando sistemáticamente la teoría del color para separar colores puros en pequeños puntos. Su enfoque científico influyó en el movimiento Neo-Impresionista.",
                de: "Georges Seurat entwickelte den Divisionismus (oder Pointillismus), indem er systematisch Farbtheorie anwendete, um reine Farben in kleinen Punkten zu trennen. Sein wissenschaftlicher Ansatz beeinflusste die Neo-Impressionistische Bewegung.",
                nl: "Georges Seurat ontwikkelde het divisionisme (of pointillisme), waarbij hij systematisch kleurtheorie toepaste om pure kleuren in kleine stippen te scheiden. Zijn wetenschappelijke benadering beïnvloedde de Neo-Impressionistische beweging."
            }
        },
        {
            question: {
                en: "Who painted 'The Arnolfini Portrait' featuring a convex mirror?",
                es: "¿Quién pintó 'El Retrato de Arnolfini' que presenta un espejo convexo?",
                de: "Wer malte 'Das Arnolfini-Porträt' mit einem konvexen Spiegel?",
                nl: "Wie schilderde 'Het Arnolfini Portret' met een bolle spiegel?"
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
                en: "Jan van Eyck painted 'The Arnolfini Portrait' (1434), famous for its detailed symbolism and the convex mirror that reflects two additional figures, possibly including van Eyck himself.",
                es: "Jan van Eyck pintó 'El Retrato de Arnolfini' (1434), famoso por su simbolismo detallado y el espejo convexo que refleja dos figuras adicionales, posiblemente incluyendo al propio van Eyck.",
                de: "Jan van Eyck malte 'Das Arnolfini-Porträt' (1434), berühmt für seine detaillierte Symbolik und den konvexen Spiegel, der zwei zusätzliche Figuren reflektiert, möglicherweise einschließlich van Eyck selbst.",
                nl: "Jan van Eyck schilderde 'Het Arnolfini Portret' (1434), beroemd om zijn gedetailleerde symboliek en de bolle spiegel die twee extra figuren weerkaatst, mogelijk inclusief van Eyck zelf."
            }
        },
        {
            question: {
                en: "Which Northern Renaissance painter created 'The Garden of Earthly Delights'?",
                es: "¿Qué pintor del Renacimiento del Norte creó 'El Jardín de las Delicias Terrenales'?",
                de: "Welcher Maler der Nordrenaissance schuf 'Der Garten der Lüste'?",
                nl: "Welke Noord-Renaissance schilder creëeerde 'De Tuin der Lusten'?"
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
                    en: "Albrecht Dürer",
                    es: "Alberto Durero",
                    de: "Albrecht Dürer",
                    nl: "Albrecht Dürer"
                },
                {
                    en: "Hans Holbein the Younger",
                    es: "Hans Holbein el Joven",
                    de: "Hans Holbein der Jüngere",
                    nl: "Hans Holbein de Jongere"
                }
            ],
            correct: 0,
            explanation: {
                en: "Hieronymus Bosch painted this complex triptych (c. 1490-1510) depicting paradise, earthly pleasures, and hell with fantastical imagery that influenced Surrealists centuries later.",
                es: "Hieronymus Bosch pintó este complejo tríptico (c. 1490-1510) representando el paraíso, los placeres terrenales y el infierno con imágenes fantásticas que influyeron en los surrealistas siglos después.",
                de: "Hieronymus Bosch malte dieses komplexe Triptychon (c. 1490-1510), das Paradies, irdische Freuden und Hölle mit fantastischen Bildern darstellt, die Jahrhunderte später die Surrealisten beeinflussten.",
                nl: "Hieronymus Bosch schilderde dit complexe drieluik (c. 1490-1510) dat het paradijs, aardse genoegens en de hel uitbeeldt met fantastische beeldspraak die eeuwen later de Surrealisten beïnvloedde."
            }
        },
        {
            question: {
                en: "Who founded the Venetian school of painting and influenced Giorgione and Titian?",
                es: "¿Quién fundó la escuela veneciana de pintura e influyó en Giorgione y Tiziano?",
                de: "Wer gründete die venezianische Malschule und beeinflusste Giorgione und Tizian?",
                nl: "Wie stichtte de Venetiaanse schilderschool en beïnvloedde Giorgione en Titiaan?"
            },
            options: [
                {
                    en: "Giovanni Bellini",
                    es: "Giovanni Bellini",
                    de: "Giovanni Bellini",
                    nl: "Giovanni Bellini"
                },
                {
                    en: "Andrea Mantegna",
                    es: "Andrea Mantegna",
                    de: "Andrea Mantegna",
                    nl: "Andrea Mantegna"
                },
                {
                    en: "Jacopo Bellini",
                    es: "Jacopo Bellini",
                    de: "Jacopo Bellini",
                    nl: "Jacopo Bellini"
                },
                {
                    en: "Vittore Carpaccio",
                    es: "Vittore Carpaccio",
                    de: "Vittore Carpaccio",
                    nl: "Vittore Carpaccio"
                }
            ],
            correct: 0,
            explanation: {
                en: "Giovanni Bellini (c. 1430-1516) established the Venetian High Renaissance style, emphasizing color over line. His innovations in oil painting and atmospheric effects influenced all subsequent Venetian masters.",
                es: "Giovanni Bellini (c. 1430-1516) estableció el estilo del Alto Renacimiento veneciano, enfatizando el color sobre la línea. Sus innovaciones en pintura al óleo y efectos atmosféricos influyeron en todos los maestros venecianos posteriores.",
                de: "Giovanni Bellini (c. 1430-1516) etablierte den venezianischen Hochrenaissance-Stil und betonte Farbe über Linie. Seine Innovationen in der Ölmalerei und atmosphärischen Effekten beeinflussten alle nachfolgenden venezianischen Meister.",
                nl: "Giovanni Bellini (c. 1430-1516) vestigde de Venetiaanse Hoge Renaissance stijl, waarbij kleur werd benadrukt boven lijn. Zijn innovaties in olieverfschildering en atmosferische effecten beïnvloedden alle volgende Venetiaanse meesters."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Apotheosis of Homer' in the Louvre ceiling?",
                es: "¿Qué artista pintó 'La Apoteosis de Homero' en el techo del Louvre?",
                de: "Welcher Künstler malte 'Die Apotheose Homers' an der Louvre-Decke?",
                nl: "Welke kunstenaar schilderde 'De Apotheose van Homerus' in het Louvre plafond?"
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
                    en: "Jacques-Louis David",
                    es: "Jacques-Louis David",
                    de: "Jacques-Louis David",
                    nl: "Jacques-Louis David"
                },
                {
                    en: "Charles Le Brun",
                    es: "Charles Le Brun",
                    de: "Charles Le Brun",
                    nl: "Charles Le Brun"
                }
            ],
            correct: 0,
            explanation: {
                en: "Ingres painted 'The Apotheosis of Homer' (1827) for the ceiling of one of the Louvre's galleries. This neoclassical masterpiece shows Homer being crowned by Victory with famous writers and artists gathered around.",
                es: "Ingres pintó 'La Apoteosis de Homero' (1827) para el techo de una de las galerías del Louvre. Esta obra maestra neoclásica muestra a Homero siendo coronado por la Victoria con famosos escritores y artistas reunidos alrededor.",
                de: "Ingres malte 'Die Apotheose Homers' (1827) für die Decke einer der Louvre-Galerien. Dieses neoklassische Meisterwerk zeigt Homer, der von Victoria gekrönt wird, mit berühmten Schriftstellern und Künstlern versammelt herum.",
                nl: "Ingres schilderde 'De Apotheose van Homerus' (1827) voor het plafond van een van de Louvre galerijen. Dit neoklassieke meesterwerk toont Homerus die door Victoria wordt gekroond met beroemde schrijvers en kunstenaars eromheen verzameld."
            }
        },
        {
            question: {
                en: "What is the term for the Renaissance painting technique of gradually blending colors without visible brushstrokes?",
                es: "¿Cuál es el término para la técnica de pintura renacentista de mezclar gradualmente colores sin pinceladas visibles?",
                de: "Wie nennt man die Renaissance-Maltechnik der allmählichen Farbmischung ohne sichtbare Pinselstriche?",
                nl: "Wat is de term voor de Renaissance schildertechniek van geleidelijk kleuren mengen zonder zichtbare penseelstreken?"
            },
            options: [
                {
                    en: "Sfumato",
                    es: "Sfumato",
                    de: "Sfumato",
                    nl: "Sfumato"
                },
                {
                    en: "Impasto",
                    es: "Impasto",
                    de: "Impasto",
                    nl: "Impasto"
                },
                {
                    en: "Grisaille",
                    es: "Grisalla",
                    de: "Grisaille",
                    nl: "Grisaille"
                },
                {
                    en: "Verdaccio",
                    es: "Verdaccio",
                    de: "Verdaccio",
                    nl: "Verdaccio"
                }
            ],
            correct: 0,
            explanation: {
                en: "Sfumato, meaning 'smoky' in Italian, involves imperceptible transitions between colors and tones. Leonardo da Vinci was the master of this technique, particularly evident in the Mona Lisa's mysterious atmosphere.",
                es: "Sfumato, que significa 'humeante' en italiano, implica transiciones imperceptibles entre colores y tonos. Leonardo da Vinci fue el maestro de esta técnica, particularmente evidente en la atmósfera misteriosa de la Mona Lisa.",
                de: "Sfumato, was auf Italienisch 'rauchig' bedeutet, beinhaltet unmerkliche Übergänge zwischen Farben und Tönen. Leonardo da Vinci war der Meister dieser Technik, besonders evident in der mysteriösen Atmosphäre der Mona Lisa.",
                nl: "Sfumato, wat 'rokerig' betekent in het Italiaans, behelst onmerkbare overgangen tussen kleuren en tonen. Leonardo da Vinci was de meester van deze techniek, vooral duidelijk in de mysterieuze sfeer van de Mona Lisa."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Adoration of the Mystic Lamb' in Ghent Cathedral?",
                es: "¿Qué artista pintó 'La Adoración del Cordero Místico' en la Catedral de Gante?",
                de: "Welcher Künstler malte 'Die Anbetung des Lamm Gottes' in der Kathedrale von Gent?",
                nl: "Welke kunstenaar schilderde 'De Aanbidding van het Lam Gods' in de Kathedraal van Gent?"
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
                    en: "Robert Campin",
                    es: "Robert Campin",
                    de: "Robert Campin",
                    nl: "Robert Campin"
                },
                {
                    en: "Dieric Bouts",
                    es: "Dieric Bouts",
                    de: "Dieric Bouts",
                    nl: "Dieric Bouts"
                }
            ],
            correct: 0,
            explanation: {
                en: "Jan van Eyck completed 'The Adoration of the Mystic Lamb' (Ghent Altarpiece) around 1432, begun by his brother Hubert. This masterpiece revolutionized oil painting techniques in Northern Europe.",
                es: "Jan van Eyck completó 'La Adoración del Cordero Místico' (Retablo de Gante) alrededor de 1432, comenzado por su hermano Hubert. Esta obra maestra revolucionó las técnicas de pintura al óleo en el norte de Europa.",
                de: "Jan van Eyck vollendete 'Die Anbetung des Lamm Gottes' (Genter Altar) um 1432, begonnen von seinem Bruder Hubert. Dieses Meisterwerk revolutionierte die Ölmaltechniken in Nordeuropa.",
                nl: "Jan van Eyck voltooide 'De Aanbidding van het Lam Gods' (Het Lam Godsretabel) rond 1432, begonnen door zijn broer Hubert. Dit meesterwerk revolutioneerde de olieverftechnieken in Noord-Europa."
            }
        },
        {
            question: {
                en: "Who was the court painter to Charles V and Philip II of Spain?",
                es: "¿Quién fue el pintor de la corte de Carlos V y Felipe II de España?",
                de: "Wer war der Hofmaler von Karl V. und Philipp II. von Spanien?",
                nl: "Wie was de hofchilder van Karel V en Filips II van Spanje?"
            },
            options: [
                {
                    en: "Titian",
                    es: "Tiziano",
                    de: "Tizian",
                    nl: "Titiaan"
                },
                {
                    en: "El Greco",
                    es: "El Greco",
                    de: "El Greco",
                    nl: "El Greco"
                },
                {
                    en: "Veronese",
                    es: "Veronés",
                    de: "Veronese",
                    nl: "Veronese"
                },
                {
                    en: "Tintoretto",
                    es: "Tintoretto",
                    de: "Tintoretto",
                    nl: "Tintoretto"
                }
            ],
            correct: 0,
            explanation: {
                en: "Titian (Tiziano Vecellio) served as court painter to both Charles V and his son Philip II. His portraits of the Habsburg rulers established the standard for royal portraiture in Europe.",
                es: "Tiziano (Tiziano Vecellio) sirvió como pintor de la corte tanto de Carlos V como de su hijo Felipe II. Sus retratos de los gobernantes Habsburgo establecieron el estándar para el retrato real en Europa.",
                de: "Tizian (Tiziano Vecellio) diente beiden, Karl V. und seinem Sohn Philipp II., als Hofmaler. Seine Porträts der Habsburg-Herrscher setzten den Standard für königliche Porträtmalerei in Europa.",
                nl: "Titiaan (Tiziano Vecellio) diende als hofchilder van zowel Karel V als zijn zoon Filips II. Zijn portretten van de Habsburg heersers zetten de standaard voor koninklijke portretkunst in Europa."
            }
        },
        {
            question: {
                en: "Which artist created the ceiling fresco 'Allegory of Divine Providence' in Palazzo Barberini?",
                es: "¿Qué artista creó el fresco del techo 'Alegoría de la Divina Providencia' en el Palazzo Barberini?",
                de: "Welcher Künstler schuf das Deckenfresko 'Allegorie der Göttlichen Vorsehung' im Palazzo Barberini?",
                nl: "Welke kunstenaar creëerde het plafondfresco 'Allegorie van de Goddelijke Voorzienigheid' in Palazzo Barberini?"
            },
            options: [
                {
                    en: "Pietro da Cortona",
                    es: "Pietro da Cortona",
                    de: "Pietro da Cortona",
                    nl: "Pietro da Cortona"
                },
                {
                    en: "Annibale Carracci",
                    es: "Annibale Carracci",
                    de: "Annibale Carracci",
                    nl: "Annibale Carracci"
                },
                {
                    en: "Giovanni Battista Gaulli",
                    es: "Giovanni Battista Gaulli",
                    de: "Giovanni Battista Gaulli",
                    nl: "Giovanni Battista Gaulli"
                },
                {
                    en: "Andrea Pozzo",
                    es: "Andrea Pozzo",
                    de: "Andrea Pozzo",
                    nl: "Andrea Pozzo"
                }
            ],
            correct: 0,
            explanation: {
                en: "Pietro da Cortona painted this Baroque masterpiece (1633-1639) celebrating the Barberini family. The illusionistic ceiling creates the impression of figures floating in space above the viewer.",
                es: "Pietro da Cortona pintó esta obra maestra barroca (1633-1639) celebrando a la familia Barberini. El techo ilusionista crea la impresión de figuras flotando en el espacio sobre el espectador.",
                de: "Pietro da Cortona malte dieses barocke Meisterwerk (1633-1639) zur Feier der Familie Barberini. Die illusionistische Decke erzeugt den Eindruck von Figuren, die im Raum über dem Betrachter schweben.",
                nl: "Pietro da Cortona schilderde dit barokke meesterwerk (1633-1639) ter ere van de familie Barberini. Het illusionistische plafond wekt de indruk van figuren die in de ruimte boven de kijker zweven."
            }
        },
        {
            question: {
                en: "What painting technique involves applying paint in small, separate brushstrokes that appear to shimmer?",
                es: "¿Qué técnica de pintura implica aplicar pintura en pequeñas pinceladas separadas que parecen brillar?",
                de: "Welche Maltechnik beinhaltet das Auftragen von Farbe in kleinen, separaten Pinselstrichen, die zu schimmern scheinen?",
                nl: "Welke schildertechniek houdt in dat verf wordt aangebracht in kleine, afzonderlijke penseelstreken die lijken te glinsteren?"
            },
            options: [
                {
                    en: "Broken color technique",
                    es: "Técnica de color roto",
                    de: "Gebrochene Farbentechnik",
                    nl: "Gebroken kleur techniek"
                },
                {
                    en: "Alla prima",
                    es: "Alla prima",
                    de: "Alla prima",
                    nl: "Alla prima"
                },
                {
                    en: "Underpainting",
                    es: "Subpintura",
                    de: "Untermalung",
                    nl: "Onderschildering"
                },
                {
                    en: "Glazing",
                    es: "Veladuras",
                    de: "Lasierung",
                    nl: "Glacering"
                }
            ],
            correct: 0,
            explanation: {
                en: "Broken color technique involves placing pure colors side by side rather than mixing them on the palette. This creates optical mixing and vibrant effects, used extensively by Impressionists.",
                es: "La técnica de color roto implica colocar colores puros uno al lado del otro en lugar de mezclarlos en la paleta. Esto crea mezcla óptica y efectos vibrantes, usado extensivamente por los impresionistas.",
                de: "Die gebrochene Farbentechnik beinhaltet das Platzieren reiner Farben nebeneinander, anstatt sie auf der Palette zu mischen. Dies erzeugt optische Mischung und lebendige Effekte, ausgiebig von Impressionisten verwendet.",
                nl: "De gebroken kleur techniek houdt in dat pure kleuren naast elkaar worden geplaatst in plaats van ze op het palet te mengen. Dit creëert optische menging en levendige effecten, uitgebreid gebruikt door Impressionisten."
            }
        },
        {
            question: {
                en: "Who painted 'View of Delft' considered one of the finest Dutch landscape paintings?",
                es: "¿Quién pintó 'Vista de Delft' considerada una de las mejores pinturas de paisaje holandés?",
                de: "Wer malte 'Ansicht von Delft', die als eines der schönsten niederländischen Landschaftsgemälde gilt?",
                nl: "Wie schilderde 'Gezicht op Delft' beschouwd als een van de mooiste Nederlandse landschapsschilderijen?"
            },
            options: [
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
                },
                {
                    en: "Aelbert Cuyp",
                    es: "Aelbert Cuyp",
                    de: "Aelbert Cuyp",
                    nl: "Aelbert Cuyp"
                },
                {
                    en: "Meindert Hobbema",
                    es: "Meindert Hobbema",
                    de: "Meindert Hobbema",
                    nl: "Meindert Hobbema"
                }
            ],
            correct: 0,
            explanation: {
                en: "Johannes Vermeer painted 'View of Delft' (c. 1660-1661), one of only two known cityscapes by the master. The painting captures morning light and weather effects with remarkable precision and poetry.",
                es: "Johannes Vermeer pintó 'Vista de Delft' (c. 1660-1661), uno de solo dos paisajes urbanos conocidos del maestro. La pintura captura la luz matutina y efectos climáticos con notable precisión y poesía.",
                de: "Johannes Vermeer malte 'Ansicht von Delft' (c. 1660-1661), eine von nur zwei bekannten Stadtansichten des Meisters. Das Gemälde fängt Morgenlicht und Wettereffekte mit bemerkenswerter Präzision und Poesie ein.",
                nl: "Johannes Vermeer schilderde 'Gezicht op Delft' (c. 1660-1661), een van slechts twee bekende stadsgezichten van de meester. Het schilderij vangt het ochtendlicht en weereffecten met opmerkelijke precisie en poëzie."
            }
        },
        {
            question: {
                en: "Which Renaissance artist created the bronze doors called 'Gates of Paradise' for Florence Baptistry?",
                es: "¿Qué artista del Renacimiento creó las puertas de bronce llamadas 'Puertas del Paraíso' para el Baptisterio de Florencia?",
                de: "Welcher Renaissance-Künstler schuf die Bronzetüren namens 'Paradiesespforten' für das Florentiner Baptisterium?",
                nl: "Welke Renaissance kunstenaar creëerde de bronzen deuren genaamd 'Poorten van het Paradijs' voor het Baptisterium van Florence?"
            },
            options: [
                {
                    en: "Lorenzo Ghiberti",
                    es: "Lorenzo Ghiberti",
                    de: "Lorenzo Ghiberti",
                    nl: "Lorenzo Ghiberti"
                },
                {
                    en: "Donatello",
                    es: "Donatello",
                    de: "Donatello",
                    nl: "Donatello"
                },
                {
                    en: "Andrea Pisano",
                    es: "Andrea Pisano",
                    de: "Andrea Pisano",
                    nl: "Andrea Pisano"
                },
                {
                    en: "Luca della Robbia",
                    es: "Luca della Robbia",
                    de: "Luca della Robbia",
                    nl: "Luca della Robbia"
                }
            ],
            correct: 0,
            explanation: {
                en: "Lorenzo Ghiberti created the 'Gates of Paradise' (1425-1452), the east doors of Florence Baptistry. Michelangelo supposedly gave them this name because they were worthy of being the gates of Paradise.",
                es: "Lorenzo Ghiberti creó las 'Puertas del Paraíso' (1425-1452), las puertas orientales del Baptisterio de Florencia. Miguel Ángel supuestamente les dio este nombre porque eran dignas de ser las puertas del Paraíso.",
                de: "Lorenzo Ghiberti schuf die 'Paradiesespforten' (1425-1452), die Osttüren des Florentiner Baptisteriums. Michelangelo gab ihnen angeblich diesen Namen, weil sie würdig waren, die Pforten des Paradieses zu sein.",
                nl: "Lorenzo Ghiberti creëerde de 'Poorten van het Paradijs' (1425-1452), de oostelijke deuren van het Baptisterium van Florence. Michelangelo gaf ze naar verluidt deze naam omdat ze waardig waren om de poorten van het Paradijs te zijn."
            }
        },
        {
            question: {
                en: "Which Mannerist painter created elongated figures in works like 'Madonna with the Long Neck'?",
                es: "¿Qué pintor manierista creó figuras alargadas en obras como 'Madonna del Cuello Largo'?",
                de: "Welcher manieristische Maler schuf langgestreckte Figuren in Werken wie 'Madonna mit dem langen Hals'?",
                nl: "Welke maniëristische schilder creëerde langgerekte figuren in werken zoals 'Madonna met de Lange Hals'?"
            },
            options: [
                {
                    en: "Parmigianino",
                    es: "Parmigianino",
                    de: "Parmigianino",
                    nl: "Parmigianino"
                },
                {
                    en: "Bronzino",
                    es: "Bronzino",
                    de: "Bronzino",
                    nl: "Bronzino"
                },
                {
                    en: "Rosso Fiorentino",
                    es: "Rosso Fiorentino",
                    de: "Rosso Fiorentino",
                    nl: "Rosso Fiorentino"
                },
                {
                    en: "Pontormo",
                    es: "Pontormo",
                    de: "Pontormo",
                    nl: "Pontormo"
                }
            ],
            correct: 0,
            explanation: {
                en: "Parmigianino (Francesco Mazzola) painted 'Madonna with the Long Neck' (1534-1540), exemplifying Mannerist aesthetics with its elegant, elongated proportions and artificial grace.",
                es: "Parmigianino (Francesco Mazzola) pintó 'Madonna del Cuello Largo' (1534-1540), ejemplificando la estética manierista con sus proporciones elegantes y alargadas y gracia artificial.",
                de: "Parmigianino (Francesco Mazzola) malte 'Madonna mit dem langen Hals' (1534-1540), ein Beispiel für manieristische Ästhetik mit seinen eleganten, langgestreckten Proportionen und künstlicher Anmut.",
                nl: "Parmigianino (Francesco Mazzola) schilderde 'Madonna met de Lange Hals' (1534-1540), een voorbeeld van maniëristische esthetiek met zijn elegante, langgerekte proporties en kunstmatige gratie."
            }
        }
    ,
        {
            question: {
                en: "Which Baroque painter created 'The Calling of Saint Matthew' with dramatic tenebrism?",
                es: "¿Qué pintor barroco creó 'El Llamado de San Mateo' con tenebrismo dramático?",
                de: "Welcher Barockmaler schuf 'Die Berufung des Heiligen Matthäus' mit dramatischem Tenebrismus?",
                nl: "Welke baroqschilder creëerde 'De Roeping van Sint-Mattheüs' met dramatisch tenebrisme?"
            },
            options: [
                {
                    en: "Caravaggio",
                    es: "Caravaggio",
                    de: "Caravaggio",
                    nl: "Caravaggio"
                },
                {
                    en: "Artemisia Gentileschi",
                    es: "Artemisia Gentileschi",
                    de: "Artemisia Gentileschi",
                    nl: "Artemisia Gentileschi"
                },
                {
                    en: "Guido Reni",
                    es: "Guido Reni",
                    de: "Guido Reni",
                    nl: "Guido Reni"
                },
                {
                    en: "Annibale Carracci",
                    es: "Annibale Carracci",
                    de: "Annibale Carracci",
                    nl: "Annibale Carracci"
                }
            ],
            correct: 0,
            explanation: {
                en: "Caravaggio painted 'The Calling of Saint Matthew' (1599-1600) for the Contarelli Chapel in San Luigi dei Francesi, Rome. His revolutionary use of tenebrism creates intense spiritual drama through dramatic light-dark contrasts.",
                es: "Caravaggio pintó 'El Llamado de San Mateo' (1599-1600) para la Capilla Contarelli en San Luigi dei Francesi, Roma. Su uso revolucionario del tenebrismo crea intenso drama espiritual a través de contrastes dramáticos de luz y oscuridad.",
                de: "Caravaggio malte 'Die Berufung des Heiligen Matthäus' (1599-1600) für die Contarelli-Kapelle in San Luigi dei Francesi, Rom. Seine revolutionäre Verwendung des Tenebrismus schafft intensives spirituelles Drama durch dramatische Hell-Dunkel-Kontraste.",
                nl: "Caravaggio schilderde 'De Roeping van Sint-Mattheüs' (1599-1600) voor de Contarelli Kapel in San Luigi dei Francesi, Rome. Zijn revolutionaire gebruik van tenebrisme creëert intens spiritueel drama door dramatische licht-donker contrasten."
            }
        },
        {
            question: {
                en: "Who painted 'Las Meninas' featuring a complex mirror reflection?",
                es: "¿Quién pintó 'Las Meninas' con un complejo reflejo de espejo?",
                de: "Wer malte 'Las Meninas' mit einer komplexen Spiegelreflexion?",
                nl: "Wie schilderde 'Las Meninas' met een complexe spiegelreflectie?"
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
                en: "Diego Velázquez painted 'Las Meninas' (1656) depicting the Infanta Margarita surrounded by her entourage. The painting shows Velázquez himself painting, with the king and queen reflected in a mirror, creating a complex meta-representation that has fascinated art historians for centuries.",
                es: "Diego Velázquez pintó 'Las Meninas' (1656) representando a la Infanta Margarita rodeada de su séquito. La pintura muestra al propio Velázquez pintando, con el rey y la reina reflejados en un espejo, creando una meta-representación compleja que ha fascinado a historiadores del arte durante siglos.",
                de: "Diego Velázquez malte 'Las Meninas' (1656) und zeigte die Infantin Margarita umgeben von ihrem Gefolge. Das Gemälde zeigt Velázquez selbst beim Malen, mit dem König und der Königin, die sich in einem Spiegel widerspiegeln, und schafft eine komplexe Meta-Darstellung, die Kunsthistoriker seit Jahrhunderten fasziniert.",
                nl: "Diego Velázquez schilderde 'Las Meninas' (1656) met de Infanta Margarita omringd door haar gevolg. Het schilderij toont Velázquez zelf schilderend, met de koning en koningin weerspiegeld in een spiegel, waardoor een complexe meta-representatie ontstaat die kunsthistorici al eeuwenlang fascineert."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Marriage at Cana', the largest painting in the Louvre?",
                es: "¿Qué artista pintó 'Las Bodas de Caná', la pintura más grande del Louvre?",
                de: "Welcher Künstler malte 'Die Hochzeit zu Kana', das größte Gemälde im Louvre?",
                nl: "Welke kunstenaar schilderde 'De Bruiloft te Kana', het grootste schilderij in het Louvre?"
            },
            options: [
                {
                    en: "Paolo Veronese",
                    es: "Paolo Veronese",
                    de: "Paolo Veronese",
                    nl: "Paolo Veronese"
                },
                {
                    en: "Tintoretto",
                    es: "Tintoretto",
                    de: "Tintoretto",
                    nl: "Tintoretto"
                },
                {
                    en: "Titian",
                    es: "Tiziano",
                    de: "Tizian",
                    nl: "Titiaan"
                },
                {
                    en: "Giorgione",
                    es: "Giorgione",
                    de: "Giorgione",
                    nl: "Giorgione"
                }
            ],
            correct: 0,
            explanation: {
                en: "Paolo Veronese painted 'The Wedding at Cana' (1563) for the refectory of San Giorgio Maggiore in Venice. This massive work (67 x 994 cm) depicts Christ's first miracle with over 130 figures, including portraits of contemporary artists and nobility.",
                es: "Paolo Veronese pintó 'Las Bodas de Caná' (1563) para el refectorio de San Giorgio Maggiore en Venecia. Esta obra masiva (67 x 994 cm) representa el primer milagro de Cristo con más de 130 figuras, incluyendo retratos de artistas contemporáneos y nobleza.",
                de: "Paolo Veronese malte 'Die Hochzeit zu Kana' (1563) für das Refektorium von San Giorgio Maggiore in Venedig. Dieses massive Werk (67 x 994 cm) zeigt Christi erstes Wunder mit über 130 Figuren, darunter Porträts zeitgenössischer Künstler und des Adels.",
                nl: "Paolo Veronese schilderde 'De Bruiloft te Kana' (1563) voor het refectorium van San Giorgio Maggiore in Venetië. Dit enorme werk (67 x 994 cm) toont Christus' eerste wonder met meer dan 130 figuren, waaronder portretten van hedendaagse kunstenaars en adel."
            }
        },
        {
            question: {
                en: "Who created 'The Raft of the Medusa', depicting a contemporary maritime disaster?",
                es: "¿Quién creó 'La Balsa de la Medusa', representando un desastre marítimo contemporáneo?",
                de: "Wer schuf 'Das Floß der Medusa', das eine zeitgenössische maritime Katastrophe darstellt?",
                nl: "Wie creëerde 'Het Vlot van de Medusa', waarin een hedendaagse maritieme ramp wordt afgebeeld?"
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
                en: "Théodore Géricault painted 'The Raft of the Medusa' (1818-1819) depicting survivors of the French naval frigate Méduse shipwreck. The monumental Romantic painting caused scandal for criticizing government incompetence and showing human suffering graphically.",
                es: "Théodore Géricault pintó 'La Balsa de la Medusa' (1818-1819) representando a sobrevivientes del naufragio de la fragata naval francesa Méduse. La monumental pintura romántica causó escándalo por criticar la incompetencia del gobierno y mostrar sufrimiento humano gráficamente.",
                de: "Théodore Géricault malte 'Das Floß der Medusa' (1818-1819), das Überlebende des Untergangs der französischen Marinefregattemedusa zeigt. Das monumentale romantische Gemälde verursachte einen Skandal, weil es Regierungsincompetenz kritisierte und menschliches Leid grafisch darstellte.",
                nl: "Théodore Géricault schilderde 'Het Vlot van de Medusa' (1818-1819) met overlevenden van de schipbreuk van het Franse marinefregat Méduse. Het monumentale Romantische schilderij veroorzaakte een schandaal door kritiek op regeringsincompetentie en grafische weergave van menselijk lijden."
            }
        },
        {
            question: {
                en: "Which Dutch master painted 'The Night Watch', officially titled 'Militia Company of District II'?",
                es: "¿Qué maestro holandés pintó 'La Ronda de Noche', oficialmente titulada 'Compañía de Milicia del Distrito II'?",
                de: "Welcher niederländische Meister malte 'Die Nachtwache', offiziell 'Schützenkompanie des Bezirks II'?",
                nl: "Welke Nederlandse meester schilderde 'De Nachtwacht', officieel getiteld 'Schutters van wijk II'?"
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
                    en: "Pieter de Hooch",
                    es: "Pieter de Hooch",
                    de: "Pieter de Hooch",
                    nl: "Pieter de Hooch"
                }
            ],
            correct: 0,
            explanation: {
                en: "Rembrandt van Rijn painted 'The Night Watch' (1642) for Amsterdam's civic guard hall. The revolutionary group portrait uses dramatic lighting and movement instead of static poses, though darkened varnish gave it the 'night' misnomer.",
                es: "Rembrandt van Rijn pintó 'La Ronda de Noche' (1642) para la sala de la guardia cívica de Ámsterdam. El revolucionario retrato grupal usa iluminación dramática y movimiento en lugar de poses estáticas, aunque el barniz oscurecido le dio el nombre erróneo de 'noche'.",
                de: "Rembrandt van Rijn malte 'Die Nachtwache' (1642) für die Bürgerwehrhalle von Amsterdam. Das revolutionäre Gruppenporträt verwendet dramatische Beleuchtung und Bewegung anstelle statischer Posen, obwohl verdunkelter Firnis den 'Nacht'-Fehlnamen gab.",
                nl: "Rembrandt van Rijn schilderde 'De Nachtwacht' (1642) voor de schutterszaal van Amsterdam. Het revolutionaire groepsportret gebruikt dramatische belichting en beweging in plaats van statische poses, hoewel verdonkerde vernis de 'nacht' verkeerde benaming gaf."
            }
        },
        {
            question: {
                en: "Who painted 'The Birth of Venus', showing the goddess emerging from a shell?",
                es: "¿Quién pintó 'El Nacimiento de Venus', mostrando a la diosa emergiendo de una concha?",
                de: "Wer malte 'Die Geburt der Venus', die die Göttin aus einer Muschel kommend zeigt?",
                nl: "Wie schilderde 'De Geboorte van Venus', waarop de godin uit een schelp komt?"
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
                }
            ],
            correct: 0,
            explanation: {
                en: "Sandro Botticelli painted 'The Birth of Venus' (c. 1484-1486) for the Medici family. This iconic Renaissance work depicts Venus arriving at the shore after her birth, blown by winds and greeted by a nymph with a cloak.",
                es: "Sandro Botticelli pintó 'El Nacimiento de Venus' (c. 1484-1486) para la familia Medici. Esta icónica obra renacentista representa a Venus llegando a la orilla después de su nacimiento, impulsada por vientos y recibida por una ninfa con un manto.",
                de: "Sandro Botticelli malte 'Die Geburt der Venus' (c. 1484-1486) für die Medici-Familie. Dieses ikonische Renaissance-Werk zeigt Venus, die nach ihrer Geburt am Ufer ankommt, von Winden geweht und von einer Nymphe mit einem Mantel begrüßt wird.",
                nl: "Sandro Botticelli schilderde 'De Geboorte van Venus' (c. 1484-1486) voor de familie Medici. Dit iconische Renaissance werk toont Venus die na haar geboorte op de kust aankomt, geblazen door winden en begroet door een nimf met een mantel."
            }
        },
        {
            question: {
                en: "Which artist created 'The Persistence of Memory' with its melting clocks?",
                es: "¿Qué artista creó 'La Persistencia de la Memoria' con sus relojes derretidos?",
                de: "Welcher Künstler schuf 'Die Beständigkeit der Erinnerung' mit seinen schmelzenden Uhren?",
                nl: "Welke kunstenaar creëerde 'De Volharding van de Herinnering' met zijn smeltende klokken?"
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
                en: "Salvador Dalí painted 'The Persistence of Memory' (1931), one of Surrealism's most recognizable images. The soft, melting pocket watches draped over a barren landscape symbolize the relativity of time and space in dreams and memory.",
                es: "Salvador Dalí pintó 'La Persistencia de la Memoria' (1931), una de las imágenes más reconocibles del Surrealismo. Los relojes de bolsillo suaves y derretidos sobre un paisaje árido simbolizan la relatividad del tiempo y el espacio en sueños y memoria.",
                de: "Salvador Dalí malte 'Die Beständigkeit der Erinnerung' (1931), eines der bekanntesten Bilder des Surrealismus. Die weichen, schmelzenden Taschenuhren über einer kargen Landschaft symbolisieren die Relativität von Zeit und Raum in Träumen und Erinnerung.",
                nl: "Salvador Dalí schilderde 'De Volharding van de Herinnering' (1931), een van de meest herkenbare beelden van het Surrealisme. De zachte, smeltende zakhorloges over een kaal landschap symboliseren de relativiteit van tijd en ruimte in dromen en herinnering."
            }
        },
        {
            question: {
                en: "Who painted 'Girl with a Pearl Earring', often called the 'Dutch Mona Lisa'?",
                es: "¿Quién pintó 'Muchacha con Pendiente de Perla', a menudo llamada la 'Mona Lisa holandesa'?",
                de: "Wer malte 'Mädchen mit dem Perlenohrring', oft die 'holländische Mona Lisa' genannt?",
                nl: "Wie schilderde 'Meisje met de Parel', vaak de 'Nederlandse Mona Lisa' genoemd?"
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
                en: "Johannes Vermeer painted 'Girl with a Pearl Earring' (c. 1665), an intimate portrait study using his signature luminous colors and subtle lighting. The girl's enigmatic expression and exotic turban have captivated viewers for centuries.",
                es: "Johannes Vermeer pintó 'Muchacha con Pendiente de Perla' (c. 1665), un estudio de retrato íntimo usando sus característicos colores luminosos e iluminación sutil. La expresión enigmática de la muchacha y su turbante exótico han cautivado a espectadores durante siglos.",
                de: "Johannes Vermeer malte 'Mädchen mit dem Perlenohrring' (c. 1665), eine intime Porträtstudie mit seinen charakteristischen leuchtenden Farben und subtiler Beleuchtung. Der rätselhafte Ausdruck des Mädchens und der exotische Turban faszinieren Betrachter seit Jahrhunderten.",
                nl: "Johannes Vermeer schilderde 'Meisje met de Parel' (c. 1665), een intieme portraitstudie met zijn kenmerkende lumineuze kleuren en subtiele belichting. De raadselachtige uitdrukking van het meisje en de exotische tulband boeien kijkers al eeuwenlang."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Third of May 1808', depicting Spanish resistance to Napoleon?",
                es: "¿Qué artista pintó 'El Tres de Mayo de 1808', representando la resistencia española a Napoleón?",
                de: "Welcher Künstler malte 'Der Dritte Mai 1808', das den spanischen Widerstand gegen Napoleon zeigt?",
                nl: "Welke kunstenaar schilderde 'De Derde Mei 1808', waarin het Spaanse verzet tegen Napoleon wordt afgebeeld?"
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
                    en: "Jusepe de Ribera",
                    es: "José de Ribera",
                    de: "Jusepe de Ribera",
                    nl: "Jusepe de Ribera"
                }
            ],
            correct: 0,
            explanation: {
                en: "Francisco Goya painted 'The Third of May 1808' (1814) depicting the execution of Spanish rebels by French troops. The painting's emotional power and modern treatment of war violence influenced later artists like Manet and Picasso.",
                es: "Francisco Goya pintó 'El Tres de Mayo de 1808' (1814) representando la ejecución de rebeldes españoles por tropas francesas. El poder emocional de la pintura y el tratamiento moderno de la violencia de guerra influyeron en artistas posteriores como Manet y Picasso.",
                de: "Francisco Goya malte 'Der Dritte Mai 1808' (1814), das die Hinrichtung spanischer Rebellen durch französische Truppen zeigt. Die emotionale Kraft des Gemäldes und die moderne Behandlung von Kriegsgewalt beeinflussten spätere Künstler wie Manet und Picasso.",
                nl: "Francisco Goya schilderde 'De Derde Mei 1808' (1814) met de executie van Spaanse rebellen door Franse troepen. De emotionele kracht van het schilderij en de moderne behandeling van oorlogsgeweld beïnvloedden latere kunstenaars zoals Manet en Picasso."
            }
        },
        {
            question: {
                en: "Who created 'American Gothic', featuring a farmer and his daughter with a pitchfork?",
                es: "¿Quién creó 'Gótico Americano', presentando a un granjero y su hija con una horca?",
                de: "Wer schuf 'American Gothic', das einen Bauern und seine Tochter mit einer Heugabel zeigt?",
                nl: "Wie creëerde 'American Gothic', met een boer en zijn dochter met een hooivork?"
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
                en: "Grant Wood painted 'American Gothic' (1930), one of the most famous American paintings. Inspired by a Gothic Revival house in Iowa, Wood depicted his sister and dentist as models for this satirical yet affectionate portrayal of rural American values.",
                es: "Grant Wood pintó 'Gótico Americano' (1930), una de las pinturas estadounidenses más famosas. Inspirado por una casa de estilo neogótico en Iowa, Wood representó a su hermana y dentista como modelos para este retrato satírico pero afectuoso de valores rurales americanos.",
                de: "Grant Wood malte 'American Gothic' (1930), eines der berühmtesten amerikanischen Gemälde. Inspiriert von einem neugotischen Haus in Iowa, stellte Wood seine Schwester und seinen Zahnarzt als Modelle für diese satirische, aber liebevolle Darstellung ländlicher amerikanischer Werte dar.",
                nl: "Grant Wood schilderde 'American Gothic' (1930), een van de beroemdste Amerikaanse schilderijen. Geïnspireerd door een neogotisch huis in Iowa, beeldde Wood zijn zus en tandarts af als modellen voor deze satirische maar genegenheidsvolle weergave van landelijke Amerikaanse waarden."
            }
        },
        {
            question: {
                en: "Which artist painted 'Olympia', causing scandal with its direct gaze and modern subject?",
                es: "¿Qué artista pintó 'Olympia', causando escándalo con su mirada directa y tema moderno?",
                de: "Welcher Künstler malte 'Olympia', was mit seinem direkten Blick und modernem Thema einen Skandal verursachte?",
                nl: "Welke kunstenaar schilderde 'Olympia', dat schandaal veroorzaakte met zijn directe blik en moderne onderwerp?"
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
                }
            ],
            correct: 0,
            explanation: {
                en: "Édouard Manet painted 'Olympia' (1863), depicting a reclining nude courtesan staring boldly at the viewer. The painting's modern realism and frank sexuality shocked the Paris Salon audience, but it became a foundational work of modern art.",
                es: "Édouard Manet pintó 'Olympia' (1863), representando a una cortesana desnuda reclinada mirando audazmente al espectador. El realismo moderno de la pintura y la sexualidad franca impactaron a la audiencia del Salón de París, pero se convirtió en una obra fundamental del arte moderno.",
                de: "Édouard Manet malte 'Olympia' (1863), das eine liegende nackte Kurtisane zeigt, die den Betrachter kühn anstarrt. Der moderne Realismus des Gemäldes und die offene Sexualität schockierten das Publikum des Pariser Salons, aber es wurde zu einem grundlegenden Werk der modernen Kunst.",
                nl: "Édouard Manet schilderde 'Olympia' (1863), met een liggende naakte courtisane die de kijker stoutmoedig aankijkt. Het moderne realisme van het schilderij en de openlijke seksualiteit schokte het Parijse Salon publiek, maar het werd een fundamenteel werk van moderne kunst."
            }
        },
        {
            question: {
                en: "Who painted 'The Last Judgment' on the altar wall of the Sistine Chapel?",
                es: "¿Quién pintó 'El Juicio Final' en la pared del altar de la Capilla Sixtina?",
                de: "Wer malte 'Das Jüngste Gericht' an der Altarwand der Sixtinischen Kapelle?",
                nl: "Wie schilderde 'Het Laatste Oordeel' op de altaarwand van de Sixtijnse Kapel?"
            },
            options: [
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
                    en: "Leonardo da Vinci",
                    es: "Leonardo da Vinci",
                    de: "Leonardo da Vinci",
                    nl: "Leonardo da Vinci"
                },
                {
                    en: "Botticelli",
                    es: "Botticelli",
                    de: "Botticelli",
                    nl: "Botticelli"
                }
            ],
            correct: 0,
            explanation: {
                en: "Michelangelo painted 'The Last Judgment' (1536-1541) on the altar wall of the Sistine Chapel, 25 years after completing the ceiling. The massive fresco depicts Christ judging souls, with over 300 figures in dramatic poses showing the Renaissance master's unparalleled understanding of human anatomy.",
                es: "Miguel Ángel pintó 'El Juicio Final' (1536-1541) en la pared del altar de la Capilla Sixtina, 25 años después de completar el techo. El fresco masivo representa a Cristo juzgando almas, con más de 300 figuras en poses dramáticas mostrando la comprensión incomparable del maestro renacentista de la anatomía humana.",
                de: "Michelangelo malte 'Das Jüngste Gericht' (1536-1541) an der Altarwand der Sixtinischen Kapelle, 25 Jahre nach Fertigstellung der Decke. Das massive Fresko zeigt Christus, der Seelen richtet, mit über 300 Figuren in dramatischen Posen, die das unvergleichliche Verständnis des Renaissance-Meisters für menschliche Anatomie zeigen.",
                nl: "Michelangelo schilderde 'Het Laatste Oordeel' (1536-1541) op de altaarwand van de Sixtijnse Kapel, 25 jaar na voltooiing van het plafond. Het enorme fresco toont Christus die zielen oordeelt, met meer dan 300 figuren in dramatische poses die het ongeëvenaarde begrip van de Renaissance meester van menselijke anatomie tonen."
            }
        },
        {
            question: {
                en: "Which Post-Impressionist painted 'A Sunday Afternoon on the Island of La Grande Jatte' using pointillism?",
                es: "¿Qué postimpresionista pintó 'Una Tarde de Domingo en la Isla de la Grande Jatte' usando puntillismo?",
                de: "Welcher Post-Impressionist malte 'Ein Sonntagnachmittag auf der Insel La Grande Jatte' mit Pointillismus?",
                nl: "Welke Post-impressionist schilderde 'Een Zondagmiddag op het Eiland La Grande Jatte' met pointillisme?"
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
                    en: "Paul Cézanne",
                    es: "Paul Cézanne",
                    de: "Paul Cézanne",
                    nl: "Paul Cézanne"
                },
                {
                    en: "Vincent van Gogh",
                    es: "Vincent van Gogh",
                    de: "Vincent van Gogh",
                    nl: "Vincent van Gogh"
                }
            ],
            correct: 0,
            explanation: {
                en: "Georges Seurat spent two years creating 'A Sunday Afternoon on the Island of La Grande Jatte' (1884-1886), applying thousands of tiny dots of pure color. This masterpiece of Neo-Impressionism demonstrates his scientific approach to color theory and optical mixing.",
                es: "Georges Seurat pasó dos años creando 'Una Tarde de Domingo en la Isla de la Grande Jatte' (1884-1886), aplicando miles de puntos diminutos de color puro. Esta obra maestra del Neo-Impresionismo demuestra su enfoque científico de la teoría del color y la mezcla óptica.",
                de: "Georges Seurat verbrachte zwei Jahre mit der Schaffung von 'Ein Sonntagnachmittag auf der Insel La Grande Jatte' (1884-1886), indem er Tausende von winzigen Punkten reiner Farbe auftrug. Dieses Meisterwerk des Neo-Impressionismus demonstriert seinen wissenschaftlichen Ansatz zur Farbtheorie und optischen Mischung.",
                nl: "Georges Seurat besteedde twee jaar aan het creëren van 'Een Zondagmiddag op het Eiland La Grande Jatte' (1884-1886), waarbij hij duizenden kleine stippen van pure kleur aanbracht. Dit meesterwerk van Neo-Impressionisme toont zijn wetenschappelijke benadering van kleurtheorie en optische menging."
            }
        },
        {
            question: {
                en: "Who painted 'The Scream', expressing modern existential anxiety?",
                es: "¿Quién pintó 'El Grito', expresando ansiedad existencial moderna?",
                de: "Wer malte 'Der Schrei', der moderne existenzielle Angst ausdrückt?",
                nl: "Wie schilderde 'De Schreeuw', waarin moderne existentiële angst wordt uitgedrukt?"
            },
            options: [
                {
                    en: "Edvard Munch",
                    es: "Edvard Munch",
                    de: "Edvard Munch",
                    nl: "Edvard Munch"
                },
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
                }
            ],
            correct: 0,
            explanation: {
                en: "Edvard Munch created 'The Scream' (1893) in four versions, depicting a figure on a bridge under a blood-red sky. The Norwegian artist wrote that the work expressed his experience of anxiety walking at sunset, creating an icon of modern psychological angst.",
                es: "Edvard Munch creó 'El Grito' (1893) en cuatro versiones, representando una figura en un puente bajo un cielo rojo sangre. El artista noruego escribió que la obra expresaba su experiencia de ansiedad caminando al atardecer, creando un ícono de la angustia psicológica moderna.",
                de: "Edvard Munch schuf 'Der Schrei' (1893) in vier Versionen, das eine Figur auf einer Brücke unter einem blutroten Himmel zeigt. Der norwegische Künstler schrieb, dass das Werk seine Erfahrung von Angst beim Spaziergang bei Sonnenuntergang ausdrückte und eine Ikone moderner psychologischer Angst schuf.",
                nl: "Edvard Munch creëerde 'De Schreeuw' (1893) in vier versies, met een figuur op een brug onder een bloedroode hemel. De Noorse kunstenaar schreef dat het werk zijn ervaring van angst tijdens een wandeling bij zonsondergang uitdrukte, waardoor een icoon van moderne psychologische angst ontstond."
            }
        },
        {
            question: {
                en: "Which artist painted 'Guernica', depicting the bombing of a Basque town during the Spanish Civil War?",
                es: "¿Qué artista pintó 'Guernica', representando el bombardeo de un pueblo vasco durante la Guerra Civil Española?",
                de: "Welcher Künstler malte 'Guernica', das die Bombardierung einer baskischen Stadt während des Spanischen Bürgerkriegs zeigt?",
                nl: "Welke kunstenaar schilderde 'Guernica', waarin het bombardement van een Baskische stad tijdens de Spaanse Burgeroorlog wordt afgebeeld?"
            },
            options: [
                {
                    en: "Pablo Picasso",
                    es: "Pablo Picasso",
                    de: "Pablo Picasso",
                    nl: "Pablo Picasso"
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
                },
                {
                    en: "Francisco Goya",
                    es: "Francisco Goya",
                    de: "Francisco Goya",
                    nl: "Francisco Goya"
                }
            ],
            correct: 0,
            explanation: {
                en: "Pablo Picasso painted 'Guernica' (1937) in response to the Nazi bombing of Guernica during the Spanish Civil War. The massive anti-war mural in black, white, and grey depicts suffering people, animals, and buildings shattered by violence, becoming one of the most powerful political statements in art.",
                es: "Pablo Picasso pintó 'Guernica' (1937) en respuesta al bombardeo nazi de Guernica durante la Guerra Civil Española. El mural anti-guerra masivo en negro, blanco y gris representa personas sufrientes, animales y edificios destrozados por la violencia, convirtiéndose en una de las declaraciones políticas más poderosas del arte.",
                de: "Pablo Picasso malte 'Guernica' (1937) als Reaktion auf die Nazi-Bombardierung von Guernica während des Spanischen Bürgerkriegs. Das massive Anti-Kriegs-Wandbild in Schwarz, Weiß und Grau zeigt leidende Menschen, Tiere und durch Gewalt zerstörte Gebäude und wurde zu einer der mächtigsten politischen Aussagen in der Kunst.",
                nl: "Pablo Picasso schilderde 'Guernica' (1937) als reactie op het nazi-bombardement op Guernica tijdens de Spaanse Burgeroorlog. Het enorme anti-oorlogswandschildering in zwart, wit en grijs toont lijdende mensen, dieren en gebouwen verwoest door geweld, en werd een van de krachtigste politieke verklaringen in de kunst."
            }
        },
        {
            question: {
                en: "Who created 'Water Lilies', a series of approximately 250 oil paintings of his garden?",
                es: "¿Quién creó 'Nenúfares', una serie de aproximadamente 250 pinturas al óleo de su jardín?",
                de: "Wer schuf 'Seerosen', eine Serie von ungefähr 250 Ölgemälden seines Gartens?",
                nl: "Wie creëerde 'Waterlelies', een serie van ongeveer 250 olieverfschilderijen van zijn tuin?"
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
                en: "Claude Monet painted approximately 250 'Water Lilies' paintings during the last 30 years of his life (1896-1926), depicting his garden pond at Giverny. These large-scale works, especially the monumental panels at l'Orangerie in Paris, are considered precursors to Abstract Expressionism.",
                es: "Claude Monet pintó aproximadamente 250 pinturas de 'Nenúfares' durante los últimos 30 años de su vida (1896-1926), representando el estanque de su jardín en Giverny. Estas obras a gran escala, especialmente los paneles monumentales en l'Orangerie en París, se consideran precursores del Expresionismo Abstracto.",
                de: "Claude Monet malte während der letzten 30 Jahre seines Lebens (1896-1926) ungefähr 250 'Seerosen'-Gemälde, die seinen Gartenteich in Giverny darstellen. Diese großformatigen Werke, insbesondere die monumentalen Paneele in der Orangerie in Paris, gelten als Vorläufer des abstrakten Expressionismus.",
                nl: "Claude Monet schilderde ongeveer 250 'Waterlelies' schilderijen gedurende de laatste 30 jaar van zijn leven (1896-1926), waarin zijn tuinvijver in Giverny wordt afgebeeld. Deze grootschalige werken, vooral de monumentale panelen in l'Orangerie in Parijs, worden beschouwd als voorlopers van Abstract Expressionisme."
            }
        },
        {
            question: {
                en: "Which Baroque artist painted 'The Descent from the Cross' for Antwerp Cathedral?",
                es: "¿Qué artista barroco pintó 'El Descendimiento de la Cruz' para la Catedral de Amberes?",
                de: "Welcher Barockkünstler malte 'Die Kreuzabnahme' für die Kathedrale von Antwerpen?",
                nl: "Welke barokkunstenaar schilderde 'De Kruisafname' voor de Antwerpse Kathedraal?"
            },
            options: [
                {
                    en: "Peter Paul Rubens",
                    es: "Pedro Pablo Rubens",
                    de: "Peter Paul Rubens",
                    nl: "Peter Paul Rubens"
                },
                {
                    en: "Anthony van Dyck",
                    es: "Antonio van Dyck",
                    de: "Anthonis van Dyck",
                    nl: "Antoon van Dyck"
                },
                {
                    en: "Jacob Jordaens",
                    es: "Jacob Jordaens",
                    de: "Jacob Jordaens",
                    nl: "Jacob Jordaens"
                },
                {
                    en: "Caravaggio",
                    es: "Caravaggio",
                    de: "Caravaggio",
                    nl: "Caravaggio"
                }
            ],
            correct: 0,
            explanation: {
                en: "Peter Paul Rubens painted 'The Descent from the Cross' (1612-1614) as a triptych for Antwerp Cathedral. The central panel shows Christ being lowered from the cross with dramatic movement and emotion, exemplifying Rubens' dynamic Baroque style and masterful use of color and composition.",
                es: "Pedro Pablo Rubens pintó 'El Descendimiento de la Cruz' (1612-1614) como un tríptico para la Catedral de Amberes. El panel central muestra a Cristo siendo bajado de la cruz con movimiento dramático y emoción, ejemplificando el dinámico estilo barroco de Rubens y uso magistral del color y composición.",
                de: "Peter Paul Rubens malte 'Die Kreuzabnahme' (1612-1614) als Triptychon für die Kathedrale von Antwerpen. Das Mittelpaneel zeigt Christus, der mit dramatischer Bewegung und Emotion vom Kreuz herabgelassen wird, was Rubens' dynamischen Barockstil und meisterhafte Verwendung von Farbe und Komposition veranschaulicht.",
                nl: "Peter Paul Rubens schilderde 'De Kruisafname' (1612-1614) als drieluik voor de Antwerpse Kathedraal. Het middenpaneel toont Christus die met dramatische beweging en emotie van het kruis wordt gehaald, wat Rubens' dynamische barokstijl en meesterlijk gebruik van kleur en compositie illustreert."
            }
        },
        {
            question: {
                en: "Who painted 'The Kiss', featuring a couple embraced in golden robes with geometric patterns?",
                es: "¿Quién pintó 'El Beso', presentando a una pareja abrazada en túnicas doradas con patrones geométricos?",
                de: "Wer malte 'Der Kuss', das ein Paar in goldenen Gewändern mit geometrischen Mustern zeigt?",
                nl: "Wie schilderde 'De Kus', met een paar omarmd in gouden gewaden met geometrische patronen?"
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
                    en: "Ferdinand Hodler",
                    es: "Ferdinand Hodler",
                    de: "Ferdinand Hodler",
                    nl: "Ferdinand Hodler"
                }
            ],
            correct: 0,
            explanation: {
                en: "Gustav Klimt painted 'The Kiss' (1907-1908) during his 'Golden Period', characterized by lavish use of gold leaf. The painting shows a couple locked in an intimate embrace, surrounded by ornate patterns mixing Art Nouveau sensuality with Byzantine decorative traditions.",
                es: "Gustav Klimt pintó 'El Beso' (1907-1908) durante su 'Período Dorado', caracterizado por el uso generoso de pan de oro. La pintura muestra a una pareja en un abrazo íntimo, rodeada de patrones ornamentados que mezclan sensualidad Art Nouveau con tradiciones decorativas bizantinas.",
                de: "Gustav Klimt malte 'Der Kuss' (1907-1908) während seiner 'Goldenen Periode', die durch großzügige Verwendung von Blattgold gekennzeichnet ist. Das Gemälde zeigt ein Paar in einer intimen Umarmung, umgeben von kunstvollen Mustern, die Jugendstil-Sinnlichkeit mit byzantinischen dekorativen Traditionen mischen.",
                nl: "Gustav Klimt schilderde 'De Kus' (1907-1908) tijdens zijn 'Gouden Periode', gekenmerkt door overvloedig gebruik van bladgoud. Het schilderij toont een paar in een intieme omhelzing, omringd door sierlijke patronen die Art Nouveau sensualiteit mengen met Byzantijnse decoratieve tradities."
            }
        },
        {
            question: {
                en: "Which artist painted 'The Garden of Earthly Delights', a triptych filled with fantastical imagery?",
                es: "¿Qué artista pintó 'El Jardín de las Delicias Terrenales', un tríptico lleno de imágenes fantásticas?",
                de: "Welcher Künstler malte 'Der Garten der Lüste', ein Triptychon voller fantastischer Bilder?",
                nl: "Welke kunstenaar schilderde 'De Tuin der Lusten', een drieluik vol fantastische beelden?"
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
                    en: "Albrecht Dürer",
                    es: "Alberto Durero",
                    de: "Albrecht Dürer",
                    nl: "Albrecht Dürer"
                }
            ],
            correct: 0,
            explanation: {
                en: "Hieronymus Bosch painted 'The Garden of Earthly Delights' (c. 1490-1510), a complex triptych showing paradise, earthly pleasures, and hell. The central panel teems with naked figures and bizarre hybrid creatures engaging in fantastical activities, creating one of the most enigmatic works in art history.",
                es: "Hieronymus Bosch pintó 'El Jardín de las Delicias Terrenales' (c. 1490-1510), un complejo tríptico que muestra el paraíso, los placeres terrenales y el infierno. El panel central rebosa de figuras desnudas y criaturas híbridas extrañas participando en actividades fantásticas, creando una de las obras más enigmáticas de la historia del arte.",
                de: "Hieronymus Bosch malte 'Der Garten der Lüste' (c. 1490-1510), ein komplexes Triptychon, das Paradies, irdische Freuden und Hölle zeigt. Das Mittelpaneel wimmelt von nackten Figuren und bizarren Hybridkreaturen, die fantastische Aktivitäten ausüben, und schafft eines der rätselhaftesten Werke der Kunstgeschichte.",
                nl: "Hieronymus Bosch schilderde 'De Tuin der Lusten' (c. 1490-1510), een complex drieluik dat het paradijs, aardse genoegens en de hel toont. Het middenpaneel wemelt van naakte figuren en bizarre hybride wezens die fantastische activiteiten ondernemen, waardoor een van de meest raadselachtige werken in de kunstgeschiedenis ontstaat."
            }
        },
        {
            question: {
                en: "Who created 'Impression, Sunrise', the painting that gave Impressionism its name?",
                es: "¿Quién creó 'Impresión, Sol Naciente', la pintura que dio al Impresionismo su nombre?",
                de: "Wer schuf 'Impression, Sonnenaufgang', das Gemälde, das dem Impressionismus seinen Namen gab?",
                nl: "Wie creëerde 'Impressie, Zonsopgang', het schilderij dat het Impressionisme zijn naam gaf?"
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
                    en: "Edgar Degas",
                    es: "Edgar Degas",
                    de: "Edgar Degas",
                    nl: "Edgar Degas"
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
                en: "Claude Monet painted 'Impression, Sunrise' (1872), depicting Le Havre harbor at dawn. When exhibited in 1874, critic Louis Leroy mockingly used the title to coin the term 'Impressionism', which the artists embraced. The painting captures fleeting light effects with loose brushwork.",
                es: "Claude Monet pintó 'Impresión, Sol Naciente' (1872), representando el puerto de Le Havre al amanecer. Cuando se exhibió en 1874, el crítico Louis Leroy usó burlonamente el título para acuñar el término 'Impresionismo', que los artistas adoptaron. La pintura captura efectos de luz fugaces con pinceladas sueltas.",
                de: "Claude Monet malte 'Impression, Sonnenaufgang' (1872), das den Hafen von Le Havre im Morgengrauen zeigt. Als es 1874 ausgestellt wurde, verwendete der Kritiker Louis Leroy spöttisch den Titel, um den Begriff 'Impressionismus' zu prägen, den die Künstler annahmen. Das Gemälde fängt flüchtige Lichteffekte mit lockeren Pinselstrichen ein.",
                nl: "Claude Monet schilderde 'Impressie, Zonsopgang' (1872), met de haven van Le Havre bij dageraad. Toen het in 1874 werd tentoongesteld, gebruikte criticus Louis Leroy spottend de titel om de term 'Impressionisme' te bedenken, die de kunstenaars omarmd. Het schilderij vangt vluchtige lichteffecten met losse penseelstreken."
            }
        },
        {
            question: {
                en: "Which Renaissance artist painted 'Primavera' (Spring), featuring mythological figures in a garden?",
                es: "¿Qué artista renacentista pintó 'Primavera', presentando figuras mitológicas en un jardín?",
                de: "Welcher Renaissance-Künstler malte 'Primavera' (Frühling), das mythologische Figuren in einem Garten zeigt?",
                nl: "Welke Renaissance kunstenaar schilderde 'Primavera' (Lente), met mythologische figuren in een tuin?"
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
                en: "Sandro Botticelli painted 'Primavera' (c. 1480) for the Medici family, depicting Venus in a garden with Mercury, the Three Graces, and other mythological figures. The complex allegorical painting celebrates love, beauty, and the arrival of spring through classical mythology and Renaissance Neoplatonism.",
                es: "Sandro Botticelli pintó 'Primavera' (c. 1480) para la familia Medici, representando a Venus en un jardín con Mercurio, las Tres Gracias y otras figuras mitológicas. La compleja pintura alegórica celebra el amor, la belleza y la llegada de la primavera a través de la mitología clásica y el neoplatonismo renacentista.",
                de: "Sandro Botticelli malte 'Primavera' (c. 1480) für die Medici-Familie, das Venus in einem Garten mit Merkur, den Drei Grazien und anderen mythologischen Figuren zeigt. Das komplexe allegorische Gemälde feiert Liebe, Schönheit und die Ankunft des Frühlings durch klassische Mythologie und Renaissance-Neuplatonismus.",
                nl: "Sandro Botticelli schilderde 'Primavera' (c. 1480) voor de familie Medici, met Venus in een tuin met Mercurius, de Drie Gratiën en andere mythologische figuren. Het complexe allegorische schilderij viert liefde, schoonheid en de komst van de lente door klassieke mythologie en Renaissance neoplatonisme."
            }
        }
    ,
    {
      question: {
            "en": "When was this artist born?",
            "es": "When was este/a artist born?",
            "de": "When was diese(r) artist born?",
            "nl": "When was deze artist born?"
      },
      options: [
        {
                "en": "Correct year",
                "es": "Correct year",
                "de": "Correct year",
                "nl": "Correct year"
        },
        {
                "en": "5 years earlier",
                "es": "5 years earlier",
                "de": "5 years earlier",
                "nl": "5 years earlier"
        },
        {
                "en": "5 years later",
                "es": "5 years later",
                "de": "5 years later",
                "nl": "5 years later"
        },
        {
                "en": "10 years later",
                "es": "10 years later",
                "de": "10 years later",
                "nl": "10 years later"
        }
      ],
      correct: 0,
      explanation: {
            "en": "This fact about this artist is historically accurate and well-documented.",
            "es": "Este hecho sobre this artist es históricamente preciso y bien documentado.",
            "de": "Diese Tatsache über this artist ist historisch korrekt und gut dokumentiert.",
            "nl": "Dit feit over this artist is historisch accuraat en goed gedocumenteerd."
      }
    }
  ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else if (typeof window !== 'undefined') {
        window.kunstenaarsLevel5 = questions;
    }
})();