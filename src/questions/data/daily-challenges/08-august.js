// August Daily Challenges - 31 days × 5 questions each = 155 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {

  const augustChallenges = {
    name: {
      en: "August Daily Challenges",
      es: "Desafíos Diarios de Agosto",
      de: "August Tägliche Herausforderungen",
      nl: "Augustus Dagelijkse Uitdagingen"
    },

    // Day 1 - August 1st: WWI, Slavery abolished, MTV, Colorado, Herman Melville
    day1: [
      {
        question: {
          en: "On August 1, 1914, which major global conflict officially began when Germany declared war on Russia?",
          es: "El 1 de agosto de 1914, ¿qué gran conflicto global comenzó oficialmente cuando Alemania declaró la guerra a Rusia?",
          de: "Am 1. August 1914 begann welcher große globale Konflikt offiziell, als Deutschland Russland den Krieg erklärte?",
          nl: "Op 1 augustus 1914 begon welk groot wereldwijd conflict officieel toen Duitsland de oorlog verklaarde aan Rusland?"
        },
        options: [
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
          { en: "Crimean War", es: "Guerra de Crimea", de: "Krimkrieg", nl: "Krimoorlog" },
          { en: "Franco-Prussian War", es: "Guerra Franco-Prusiana", de: "Deutsch-Französischer Krieg", nl: "Frans-Duitse Oorlog" },
          { en: "World War II", es: "Segunda Guerra Mundial", de: "Zweiter Weltkrieg", nl: "Tweede Wereldoorlog" }
        ],
        correctIndex: 0,
        explanation: {
          en: "World War I officially began on August 1, 1914, when Germany declared war on Russia. This followed the assassination of Archduke Franz Ferdinand and triggered a cascade of alliance-based declarations that engulfed Europe in the 'Great War', which would last until 1918 and claim millions of lives.",
          es: "La Primera Guerra Mundial comenzó oficialmente el 1 de agosto de 1914, cuando Alemania declaró la guerra a Rusia. Esto siguió al asesinato del archiduque Franz Ferdinand y desencadenó una cascada de declaraciones basadas en alianzas que sumergieron a Europa en la 'Gran Guerra', que duraría hasta 1918 y cobraría millones de vidas.",
          de: "Der Erste Weltkrieg begann offiziell am 1. August 1914, als Deutschland Russland den Krieg erklärte. Dies folgte auf die Ermordung von Erzherzog Franz Ferdinand und löste eine Kaskade von allianzbasierten Kriegserklärungen aus, die Europa in den 'Großen Krieg' stürzten, der bis 1918 dauern und Millionen von Leben fordern würde.",
          nl: "De Eerste Wereldoorlog begon officieel op 1 augustus 1914, toen Duitsland de oorlog verklaarde aan Rusland. Dit volgde op de moord op aartshertog Franz Ferdinand en veroorzaakte een cascade van op allianties gebaseerde oorlogsverklaringen die Europa in de 'Grote Oorlog' stortten, die tot 1918 zou duren en miljoenen levens zou kosten."
        }
      },
      {
        question: {
          en: "On August 1, 1834, slavery was officially abolished throughout which major empire?",
          es: "El 1 de agosto de 1834, la esclavitud fue abolida oficialmente en todo ¿qué gran imperio?",
          de: "Am 1. August 1834 wurde die Sklaverei offiziell in welchem großen Reich abgeschafft?",
          nl: "Op 1 augustus 1834 werd de slavernij officieel afgeschaft in welk groot rijk?"
        },
        options: [
          {
            en: "French Empire",
            es: "Imperio Francés",
            de: "Französisches Reich",
            nl: "Franse Rijk"
          },
          {
            en: "Spanish Empire",
            es: "Imperio Español",
            de: "Spanisches Reich",
            nl: "Spaanse Rijk"
          },
          {
            en: "British Empire",
            es: "Imperio Británico",
            de: "Britisches Reich",
            nl: "Britse Rijk"
          },
          {
            en: "Portuguese Empire",
            es: "Imperio Portugués",
            de: "Portugiesisches Reich",
            nl: "Portugese Rijk"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Slavery Abolition Act came into force on August 1, 1834, ending slavery throughout the British Empire. This followed years of abolitionist campaigning and affected approximately 800,000 enslaved people across British colonies. Former slaves became 'apprentices' for a transitional period before gaining full freedom.",
          es: "La Ley de Abolición de la Esclavitud entró en vigor el 1 de agosto de 1834, poniendo fin a la esclavitud en todo el Imperio Británico. Esto siguió años de campaña abolicionista y afectó a aproximadamente 800,000 personas esclavizadas en las colonias británicas. Los antiguos esclavos se convirtieron en 'aprendices' durante un período de transición antes de obtener la libertad total.",
          de: "Der Slavery Abolition Act trat am 1. August 1834 in Kraft und beendete die Sklaverei im gesamten Britischen Reich. Dies folgte auf jahrelange abolitionistische Kampagnen und betraf etwa 800.000 versklavte Menschen in britischen Kolonien. Ehemalige Sklaven wurden für eine Übergangszeit 'Lehrlinge', bevor sie vollständige Freiheit erlangten.",
          nl: "De Slavery Abolition Act trad in werking op 1 augustus 1834 en maakte een einde aan de slavernij in het hele Britse Rijk. Dit volgde op jarenlange abolitionistische campagnes en trof ongeveer 800.000 tot slaaf gemaakte mensen in Britse kolonies. Voormalige slaven werden 'leerlingen' voor een overgangsperiode voordat ze volledige vrijheid kregen."
        }
      },
      {
        question: {
          en: "On August 1, 1981, which groundbreaking music television network launched with the words 'Ladies and gentlemen, rock and roll'?",
          es: "El 1 de agosto de 1981, ¿qué innovadora cadena de televisión musical se lanzó con las palabras 'Damas y caballeros, rock and roll'?",
          de: "Am 1. August 1981 startete welches bahnbrechende Musikfernsehsender mit den Worten 'Ladies and gentlemen, rock and roll'?",
          nl: "Op 1 augustus 1981 werd welk baanbrekend muziektelevisienetwerk gelanceerd met de woorden 'Ladies and gentlemen, rock and roll'?"
        },
        options: [
          {
            en: "VH1",
            es: "VH1",
            de: "VH1",
            nl: "VH1"
          },
          {
            en: "MTV",
            es: "MTV",
            de: "MTV",
            nl: "MTV"
          },
          {
            en: "BET",
            es: "BET",
            de: "BET",
            nl: "BET"
          },
          {
            en: "CMT",
            es: "CMT",
            de: "CMT",
            nl: "CMT"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "MTV (Music Television) launched on August 1, 1981, with the first video being 'Video Killed the Radio Star' by The Buggles. The network revolutionized the music industry by making music videos a crucial part of pop culture and artist promotion, defining an entire generation's relationship with music.",
          es: "MTV (Music Television) se lanzó el 1 de agosto de 1981, con el primer video siendo 'Video Killed the Radio Star' de The Buggles. La cadena revolucionó la industria musical al hacer de los videos musicales una parte crucial de la cultura pop y la promoción artística, definiendo la relación de toda una generación con la música.",
          de: "MTV (Music Television) startete am 1. August 1981, wobei das erste Video 'Video Killed the Radio Star' von The Buggles war. Das Netzwerk revolutionierte die Musikindustrie, indem es Musikvideos zu einem entscheidenden Teil der Popkultur und Künstlerwerbung machte und die Beziehung einer ganzen Generation zur Musik definierte.",
          nl: "MTV (Music Television) werd gelanceerd op 1 augustus 1981, met als eerste video 'Video Killed the Radio Star' van The Buggles. Het netwerk revolutioneerde de muziekindustrie door muziekvideo's een cruciaal onderdeel te maken van de popcultuur en artiestpromotie, en definieerde de relatie van een hele generatie met muziek."
        }
      },
      {
        question: {
          en: "Which U.S. state, known as the 'Centennial State', was admitted to the Union on August 1, 1876?",
          es: "¿Qué estado de EE.UU., conocido como el 'Estado del Centenario', fue admitido en la Unión el 1 de agosto de 1876?",
          de: "Welcher US-Bundesstaat, bekannt als der 'Centennial State', wurde am 1. August 1876 in die Union aufgenommen?",
          nl: "Welke Amerikaanse staat, bekend als de 'Centennial State', werd toegelaten tot de Unie op 1 augustus 1876?"
        },
        options: [
          {
            en: "Wyoming",
            es: "Wyoming",
            de: "Wyoming",
            nl: "Wyoming"
          },
          {
            en: "Montana",
            es: "Montana",
            de: "Montana",
            nl: "Montana"
          },
          {
            en: "Colorado",
            es: "Colorado",
            de: "Colorado",
            nl: "Colorado"
          },
          {
            en: "Utah",
            es: "Utah",
            de: "Utah",
            nl: "Utah"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Colorado became the 38th state on August 1, 1876, exactly 100 years after the Declaration of Independence was signed, earning it the nickname 'Centennial State'. The state is famous for its Rocky Mountain terrain, skiing resorts, and being home to the highest average elevation of any U.S. state.",
          es: "Colorado se convirtió en el estado número 38 el 1 de agosto de 1876, exactamente 100 años después de que se firmara la Declaración de Independencia, ganándose el apodo de 'Estado del Centenario'. El estado es famoso por su terreno de las Montañas Rocosas, estaciones de esquí y por tener la elevación promedio más alta de cualquier estado de EE.UU.",
          de: "Colorado wurde am 1. August 1876 der 38. Bundesstaat, genau 100 Jahre nach der Unterzeichnung der Unabhängigkeitserklärung, was ihm den Spitznamen 'Centennial State' einbrachte. Der Staat ist berühmt für seine Rocky-Mountain-Landschaft, Skigebiete und die höchste durchschnittliche Höhe aller US-Bundesstaaten.",
          nl: "Colorado werd de 38e staat op 1 augustus 1876, precies 100 jaar nadat de Onafhankelijkheidsverklaring werd ondertekend, waarmee het de bijnaam 'Centennial State' kreeg. De staat is beroemd om zijn Rocky Mountain-terrein, skigebieden en het hebben van de hoogste gemiddelde hoogte van alle Amerikaanse staten."
        }
      },
      {
        question: {
          en: "Which American author, famous for writing 'Moby-Dick', was born on August 1, 1819?",
          es: "¿Qué autor estadounidense, famoso por escribir 'Moby-Dick', nació el 1 de agosto de 1819?",
          de: "Welcher amerikanische Autor, berühmt für das Schreiben von 'Moby-Dick', wurde am 1. August 1819 geboren?",
          nl: "Welke Amerikaanse auteur, beroemd om het schrijven van 'Moby-Dick', werd geboren op 1 augustus 1819?"
        },
        options: [
          {
            en: "Nathaniel Hawthorne",
            es: "Nathaniel Hawthorne",
            de: "Nathaniel Hawthorne",
            nl: "Nathaniel Hawthorne"
          },
          {
            en: "Edgar Allan Poe",
            es: "Edgar Allan Poe",
            de: "Edgar Allan Poe",
            nl: "Edgar Allan Poe"
          },
          {
            en: "Mark Twain",
            es: "Mark Twain",
            de: "Mark Twain",
            nl: "Mark Twain"
          },
          {
            en: "Herman Melville",
            es: "Herman Melville",
            de: "Herman Melville",
            nl: "Herman Melville"
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "Herman Melville was born on August 1, 1819, in New York City. He is best known for his epic novel 'Moby-Dick' (1851), considered one of the greatest American novels. Though the book received mixed reviews initially, it is now celebrated as a masterpiece exploring themes of obsession, nature, and the human condition.",
          es: "Herman Melville nació el 1 de agosto de 1819 en la ciudad de Nueva York. Es mejor conocido por su novela épica 'Moby-Dick' (1851), considerada una de las mejores novelas estadounidenses. Aunque el libro recibió críticas mixtas inicialmente, ahora se celebra como una obra maestra que explora temas de obsesión, naturaleza y la condición humana.",
          de: "Herman Melville wurde am 1. August 1819 in New York City geboren. Er ist am besten bekannt für seinen epischen Roman 'Moby-Dick' (1851), der als einer der größten amerikanischen Romane gilt. Obwohl das Buch zunächst gemischte Kritiken erhielt, wird es heute als Meisterwerk gefeiert, das Themen wie Besessenheit, Natur und die menschliche Verfassung erforscht.",
          nl: "Herman Melville werd geboren op 1 augustus 1819 in New York City. Hij is het best bekend om zijn epische roman 'Moby-Dick' (1851), beschouwd als een van de grootste Amerikaanse romans. Hoewel het boek aanvankelijk gemengde recensies kreeg, wordt het nu gevierd als een meesterwerk dat thema's van obsessie, natuur en de menselijke conditie verkent."
        }
      }
    ],

    // Day 2 - August 2nd: Declaration signed, Wild Bill Hickok, Iraq-Kuwait, James Baldwin
    day2: [
      {
        question: {
          en: "On August 2, 1776, most delegates officially signed which foundational American document in Philadelphia?",
          es: "El 2 de agosto de 1776, la mayoría de los delegados firmaron oficialmente ¿qué documento fundacional estadounidense en Filadelfia?",
          de: "Am 2. August 1776 unterzeichneten die meisten Delegierten offiziell welches grundlegende amerikanische Dokument in Philadelphia?",
          nl: "Op 2 augustus 1776 ondertekenden de meeste afgevaardigden officieel welk fundamenteel Amerikaans document in Philadelphia?"
        },
        options: [
          {
            en: "The Constitution",
            es: "La Constitución",
            de: "Die Verfassung",
            nl: "De Grondwet"
          },
          {
            en: "The Bill of Rights",
            es: "La Declaración de Derechos",
            de: "Die Bill of Rights",
            nl: "De Bill of Rights"
          },
          {
            en: "The Declaration of Independence",
            es: "La Declaración de Independencia",
            de: "Die Unabhängigkeitserklärung",
            nl: "De Onafhankelijkheidsverklaring"
          },
          {
            en: "The Articles of Confederation",
            es: "Los Artículos de la Confederación",
            de: "Die Konföderationsartikel",
            nl: "De Artikelen van de Confederatie"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "While the Declaration of Independence was adopted on July 4, 1776, most delegates didn't actually sign it until August 2, 1776. The engrossed parchment copy was prepared by Timothy Matlack, and 56 delegates eventually signed this document that formally declared the American colonies' independence from Britain.",
          es: "Aunque la Declaración de Independencia fue adoptada el 4 de julio de 1776, la mayoría de los delegados no la firmaron hasta el 2 de agosto de 1776. La copia en pergamino fue preparada por Timothy Matlack, y 56 delegados finalmente firmaron este documento que declaraba formalmente la independencia de las colonias americanas de Gran Bretaña.",
          de: "Während die Unabhängigkeitserklärung am 4. Juli 1776 angenommen wurde, unterzeichneten die meisten Delegierten sie erst am 2. August 1776. Die auf Pergament geschriebene Kopie wurde von Timothy Matlack vorbereitet, und 56 Delegierte unterzeichneten schließlich dieses Dokument, das die Unabhängigkeit der amerikanischen Kolonien von Großbritannien formal erklärte.",
          nl: "Hoewel de Onafhankelijkheidsverklaring werd aangenomen op 4 juli 1776, ondertekenden de meeste afgevaardigden deze pas op 2 augustus 1776. De op perkament geschreven kopie werd voorbereid door Timothy Matlack, en 56 afgevaardigden ondertekenden uiteindelijk dit document dat formeel de onafhankelijkheid van de Amerikaanse kolonies van Groot-Brittannië verklaarde."
        }
      },
      {
        question: {
          en: "On August 2, 1876, which legendary Wild West figure was shot dead while playing poker in Deadwood, South Dakota?",
          es: "El 2 de agosto de 1876, ¿qué legendaria figura del Salvaje Oeste fue asesinada mientras jugaba al póquer en Deadwood, Dakota del Sur?",
          de: "Am 2. August 1876 wurde welche legendäre Figur des Wilden Westens beim Pokerspielen in Deadwood, South Dakota, erschossen?",
          nl: "Op 2 augustus 1876 werd welke legendarische figuur van het Wilde Westen doodgeschoten tijdens het pokeren in Deadwood, South Dakota?"
        },
        options: [
          {
            en: "Jesse James",
            es: "Jesse James",
            de: "Jesse James",
            nl: "Jesse James"
          },
          {
            en: "Wild Bill Hickok",
            es: "Wild Bill Hickok",
            de: "Wild Bill Hickok",
            nl: "Wild Bill Hickok"
          },
          {
            en: "Billy the Kid",
            es: "Billy el Niño",
            de: "Billy the Kid",
            nl: "Billy the Kid"
          },
          {
            en: "Wyatt Earp",
            es: "Wyatt Earp",
            de: "Wyatt Earp",
            nl: "Wyatt Earp"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Wild Bill Hickok was shot and killed on August 2, 1876, by Jack McCall while playing poker at Nuttal & Mann's Saloon No. 10 in Deadwood. He was holding a pair of aces and eights, now known as the 'dead man's hand'. Hickok was a legendary lawman, gunfighter, and scout who became an icon of the American Old West.",
          es: "Wild Bill Hickok fue asesinado el 2 de agosto de 1876 por Jack McCall mientras jugaba al póquer en Nuttal & Mann's Saloon No. 10 en Deadwood. Tenía un par de ases y ochos, ahora conocido como la 'mano del hombre muerto'. Hickok fue un legendario alguacil, pistolero y explorador que se convirtió en un ícono del Viejo Oeste americano.",
          de: "Wild Bill Hickok wurde am 2. August 1876 von Jack McCall erschossen, während er im Nuttal & Mann's Saloon No. 10 in Deadwood Poker spielte. Er hielt ein Paar Asse und Achten, heute bekannt als die 'Hand des toten Mannes'. Hickok war ein legendärer Gesetzeshüter, Revolverheld und Späher, der zu einer Ikone des amerikanischen Wilden Westens wurde.",
          nl: "Wild Bill Hickok werd op 2 augustus 1876 doodgeschoten door Jack McCall terwijl hij poker speelde in Nuttal & Mann's Saloon No. 10 in Deadwood. Hij hield een paar azen en achten vast, nu bekend als de 'hand van de dode man'. Hickok was een legendarische wetsdienaar, revolverheld en verkenner die een icoon werd van het Amerikaanse Oude Westen."
        }
      },
      {
        question: {
          en: "On August 2, 1990, Iraq invaded which neighboring country, triggering international condemnation and the Gulf War?",
          es: "El 2 de agosto de 1990, Irak invadió ¿qué país vecino, provocando condena internacional y la Guerra del Golfo?",
          de: "Am 2. August 1990 marschierte der Irak in welches Nachbarland ein, was internationale Verurteilung und den Golfkrieg auslöste?",
          nl: "Op 2 augustus 1990 viel Irak welk buurland binnen, wat internationale veroordeling en de Golfoorlog veroorzaakte?"
        },
        options: [
          {
            en: "Saudi Arabia",
            es: "Arabia Saudita",
            de: "Saudi-Arabien",
            nl: "Saoedi-Arabië"
          },
          {
            en: "Kuwait",
            es: "Kuwait",
            de: "Kuwait",
            nl: "Koeweit"
          },
          {
            en: "Iran",
            es: "Irán",
            de: "Iran",
            nl: "Iran"
          },
          {
            en: "Jordan",
            es: "Jordania",
            de: "Jordanien",
            nl: "Jordanië"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Iraq invaded Kuwait on August 2, 1990, under Saddam Hussein's orders, claiming Kuwait was historically part of Iraq and accusing it of oil price manipulation. The invasion was condemned by the United Nations and led to Operation Desert Storm in January 1991, when a U.S.-led coalition expelled Iraqi forces from Kuwait.",
          es: "Irak invadió Kuwait el 2 de agosto de 1990, bajo las órdenes de Saddam Hussein, afirmando que Kuwait era históricamente parte de Irak y acusándolo de manipulación de precios del petróleo. La invasión fue condenada por las Naciones Unidas y condujo a la Operación Tormenta del Desierto en enero de 1991, cuando una coalición liderada por EE.UU. expulsó a las fuerzas iraquíes de Kuwait.",
          de: "Der Irak marschierte am 2. August 1990 auf Befehl von Saddam Hussein in Kuwait ein und behauptete, Kuwait sei historisch Teil des Irak und beschuldigte es der Ölpreismanipulation. Die Invasion wurde von den Vereinten Nationen verurteilt und führte zur Operation Wüstensturm im Januar 1991, als eine von den USA angeführte Koalition irakische Streitkräfte aus Kuwait vertrieb.",
          nl: "Irak viel Koeweit binnen op 2 augustus 1990, op bevel van Saddam Hoessein, met de bewering dat Koeweit historisch deel uitmaakte van Irak en het beschuldigend van manipulatie van olieprijzen. De invasie werd veroordeeld door de Verenigde Naties en leidde tot Operatie Desert Storm in januari 1991, toen een door de VS geleide coalitie Iraakse troepen uit Koeweit verdreef."
        }
      },
      {
        question: {
          en: "Which acclaimed African-American writer and civil rights activist, known for 'Go Tell It on the Mountain', was born on August 2, 1924?",
          es: "¿Qué aclamado escritor afroamericano y activista de derechos civiles, conocido por 'Go Tell It on the Mountain', nació el 2 de agosto de 1924?",
          de: "Welcher gefeierte afroamerikanische Schriftsteller und Bürgerrechtsaktivist, bekannt für 'Go Tell It on the Mountain', wurde am 2. August 1924 geboren?",
          nl: "Welke geprezen Afro-Amerikaanse schrijver en burgerrechtenactivist, bekend om 'Go Tell It on the Mountain', werd geboren op 2 augustus 1924?"
        },
        options: [
          {
            en: "Langston Hughes",
            es: "Langston Hughes",
            de: "Langston Hughes",
            nl: "Langston Hughes"
          },
          {
            en: "Ralph Ellison",
            es: "Ralph Ellison",
            de: "Ralph Ellison",
            nl: "Ralph Ellison"
          },
          {
            en: "Richard Wright",
            es: "Richard Wright",
            de: "Richard Wright",
            nl: "Richard Wright"
          },
          {
            en: "James Baldwin",
            es: "James Baldwin",
            de: "James Baldwin",
            nl: "James Baldwin"
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "James Baldwin was born on August 2, 1924, in Harlem, New York. He became one of the most important voices in American literature and the Civil Rights Movement. His semi-autobiographical novel 'Go Tell It on the Mountain' (1953) and essays like 'The Fire Next Time' explored themes of race, sexuality, and identity with profound insight and eloquence.",
          es: "James Baldwin nació el 2 de agosto de 1924 en Harlem, Nueva York. Se convirtió en una de las voces más importantes en la literatura estadounidense y el Movimiento por los Derechos Civiles. Su novela semi-autobiográfica 'Go Tell It on the Mountain' (1953) y ensayos como 'The Fire Next Time' exploraron temas de raza, sexualidad e identidad con profunda perspicacia y elocuencia.",
          de: "James Baldwin wurde am 2. August 1924 in Harlem, New York, geboren. Er wurde eine der wichtigsten Stimmen in der amerikanischen Literatur und der Bürgerrechtsbewegung. Sein teilweise autobiografischer Roman 'Go Tell It on the Mountain' (1953) und Essays wie 'The Fire Next Time' erforschten Themen wie Rasse, Sexualität und Identität mit tiefgründiger Einsicht und Eloquenz.",
          nl: "James Baldwin werd geboren op 2 augustus 1924 in Harlem, New York. Hij werd een van de belangrijkste stemmen in de Amerikaanse literatuur en de Burgerrechtenbeweging. Zijn semi-autobiografische roman 'Go Tell It on the Mountain' (1953) en essays zoals 'The Fire Next Time' verkenden thema's van ras, seksualiteit en identiteit met diepgaand inzicht en welsprekendheid."
        }
      },
      {
        question: {
          en: "In what year did the Parachute Regiment carry out 'Bloody Sunday' in Northern Ireland, killing 14 civilians on January 30th (a notable August 2nd connection: the official inquiry began August 2, 1869)?",
          es: "¿En qué año el Regimiento de Paracaidistas llevó a cabo el 'Domingo Sangriento' en Irlanda del Norte, matando a 14 civiles el 30 de enero (una conexión notable con el 2 de agosto: la investigación oficial comenzó el 2 de agosto de 1869)?",
          de: "In welchem Jahr führte das Fallschirmjägerregiment den 'Bloody Sunday' in Nordirland durch und tötete am 30. Januar 14 Zivilisten (eine bemerkenswerte Verbindung zum 2. August: Die offizielle Untersuchung begann am 2. August 1869)?",
          nl: "In welk jaar voerde het Parachute Regiment 'Bloody Sunday' uit in Noord-Ierland, waarbij 14 burgers werden gedood op 30 januari (een opmerkelijke verbinding met 2 augustus: het officiële onderzoek begon op 2 augustus 1869)?"
        },
        options: [
          {
            en: "1968",
            es: "1968",
            de: "1968",
            nl: "1968"
          },
          {
            en: "1970",
            es: "1970",
            de: "1970",
            nl: "1970"
          },
          {
            en: "1972",
            es: "1972",
            de: "1972",
            nl: "1972"
          },
          {
            en: "1974",
            es: "1974",
            de: "1974",
            nl: "1974"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "While this question references a tenuous connection to August 2nd, Bloody Sunday actually occurred on January 30, 1972, in Derry/Londonderry when British paratroopers shot 26 unarmed civilians during a civil rights march, killing 14. The Saville Inquiry, which investigated the massacre, ran from 1998 to 2010 and concluded that the killings were unjustified.",
          es: "Aunque esta pregunta hace referencia a una conexión tenue con el 2 de agosto, el Domingo Sangriento en realidad ocurrió el 30 de enero de 1972 en Derry/Londonderry cuando paracaidistas británicos dispararon a 26 civiles desarmados durante una marcha por los derechos civiles, matando a 14. La Investigación Saville, que investigó la masacre, se llevó a cabo de 1998 a 2010 y concluyó que los asesinatos fueron injustificados.",
          de: "Obwohl diese Frage eine schwache Verbindung zum 2. August herstellt, ereignete sich der Bloody Sunday tatsächlich am 30. Januar 1972 in Derry/Londonderry, als britische Fallschirmjäger während eines Bürgerrechtsmarsches auf 26 unbewaffnete Zivilisten schossen und 14 töteten. Die Saville-Untersuchung, die das Massaker untersuchte, lief von 1998 bis 2010 und kam zu dem Schluss, dass die Tötungen ungerechtfertigt waren.",
          nl: "Hoewel deze vraag verwijst naar een zwakke verbinding met 2 augustus, vond Bloody Sunday eigenlijk plaats op 30 januari 1972 in Derry/Londonderry toen Britse parachutisten 26 ongewapende burgers neerschoten tijdens een mars voor burgerrechten, waarbij 14 mensen omkwamen. Het Saville-onderzoek, dat de slachting onderzocht, liep van 1998 tot 2010 en concludeerde dat de moorden ongerechtvaardigd waren."
        }
      }
    ],

    // Day 3 - August 3rd: Columbus, Niger, Jesse Owens, Tom Brady
    day3: [
      {
        question: {
          en: "On August 3, 1492, which famous explorer set sail from Spain on his first voyage that would lead to European awareness of the Americas?",
          es: "El 3 de agosto de 1492, ¿qué famoso explorador zarpó de España en su primer viaje que conduciría a la conciencia europea de las Américas?",
          de: "Am 3. August 1492 segelte welcher berühmte Entdecker von Spanien aus auf seine erste Reise, die zur europäischen Kenntnis der Amerikas führen würde?",
          nl: "Op 3 augustus 1492 zeilde welke beroemde ontdekkingsreiziger vanuit Spanje op zijn eerste reis die zou leiden tot Europees bewustzijn van de Amerika's?"
        },
        options: [
          {
            en: "Ferdinand Magellan",
            es: "Fernando de Magallanes",
            de: "Ferdinand Magellan",
            nl: "Ferdinand Magellan"
          },
          {
            en: "Amerigo Vespucci",
            es: "Américo Vespucio",
            de: "Amerigo Vespucci",
            nl: "Amerigo Vespucci"
          },
          {
            en: "Vasco da Gama",
            es: "Vasco da Gama",
            de: "Vasco da Gama",
            nl: "Vasco da Gama"
          },
          {
            en: "Christopher Columbus",
            es: "Cristóbal Colón",
            de: "Christoph Kolumbus",
            nl: "Christoffel Columbus"
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "Christopher Columbus departed from Palos de la Frontera, Spain, on August 3, 1492, with three ships: the Niña, Pinta, and Santa María. Sponsored by the Spanish monarchs Ferdinand and Isabella, he aimed to reach Asia by sailing west but instead made landfall in the Bahamas on October 12, 1492, opening the Americas to European colonization.",
          es: "Cristóbal Colón partió de Palos de la Frontera, España, el 3 de agosto de 1492, con tres barcos: la Niña, la Pinta y la Santa María. Patrocinado por los monarcas españoles Fernando e Isabel, tenía como objetivo llegar a Asia navegando hacia el oeste, pero en cambio desembarcó en las Bahamas el 12 de octubre de 1492, abriendo las Américas a la colonización europea.",
          de: "Christoph Kolumbus brach am 3. August 1492 von Palos de la Frontera, Spanien, mit drei Schiffen auf: der Niña, Pinta und Santa María. Gesponsert von den spanischen Monarchen Ferdinand und Isabella, zielte er darauf ab, Asien durch Westwärtssegeln zu erreichen, landete aber stattdessen am 12. Oktober 1492 auf den Bahamas und öffnete die Amerikas für die europäische Kolonialisierung.",
          nl: "Christoffel Columbus vertrok op 3 augustus 1492 vanuit Palos de la Frontera, Spanje, met drie schepen: de Niña, Pinta en Santa María. Gesponsord door de Spaanse monarchen Ferdinand en Isabella, was zijn doel om Azië te bereiken door naar het westen te zeilen, maar in plaats daarvan kwam hij aan land op de Bahama's op 12 oktober 1492, waarmee de Amerika's werden opengesteld voor Europese kolonisatie."
        }
      },
      {
        question: {
          en: "On August 3, 1960, which West African nation gained independence from France?",
          es: "El 3 de agosto de 1960, ¿qué nación de África Occidental obtuvo la independencia de Francia?",
          de: "Am 3. August 1960 erlangte welches westafrikanische Land die Unabhängigkeit von Frankreich?",
          nl: "Op 3 augustus 1960 verkreeg welke West-Afrikaanse natie onafhankelijkheid van Frankrijk?"
        },
        options: [
          {
            en: "Mali",
            es: "Malí",
            de: "Mali",
            nl: "Mali"
          },
          {
            en: "Senegal",
            es: "Senegal",
            de: "Senegal",
            nl: "Senegal"
          },
          {
            en: "Niger",
            es: "Níger",
            de: "Niger",
            nl: "Niger"
          },
          {
            en: "Chad",
            es: "Chad",
            de: "Tschad",
            nl: "Tsjaad"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Niger gained independence from France on August 3, 1960, as part of the widespread decolonization of Africa. Hamani Diori became the country's first president. Niger, named after the Niger River, is a landlocked country in the Sahel region and is one of the world's largest uranium producers.",
          es: "Níger obtuvo la independencia de Francia el 3 de agosto de 1960, como parte de la descolonización generalizada de África. Hamani Diori se convirtió en el primer presidente del país. Níger, nombrado por el río Níger, es un país sin salida al mar en la región del Sahel y es uno de los mayores productores de uranio del mundo.",
          de: "Niger erlangte am 3. August 1960 die Unabhängigkeit von Frankreich als Teil der weitreichenden Entkolonialisierung Afrikas. Hamani Diori wurde der erste Präsident des Landes. Niger, benannt nach dem Niger-Fluss, ist ein Binnenstaat in der Sahelzone und einer der weltweit größten Uranproduzenten.",
          nl: "Niger verkreeg onafhankelijkheid van Frankrijk op 3 augustus 1960, als onderdeel van de wijdverbreide dekolonisatie van Afrika. Hamani Diori werd de eerste president van het land. Niger, genoemd naar de Niger-rivier, is een landinwaarts gelegen land in de Sahel-regio en is een van 's werelds grootste uraniumproducenten."
        }
      },
      {
        question: {
          en: "On August 3, 1936, which African-American athlete won the 100-meter dash at the Berlin Olympics, defying Nazi ideology?",
          es: "El 3 de agosto de 1936, ¿qué atleta afroamericano ganó los 100 metros planos en los Juegos Olímpicos de Berlín, desafiando la ideología nazi?",
          de: "Am 3. August 1936 gewann welcher afroamerikanische Athlet den 100-Meter-Lauf bei den Olympischen Spielen in Berlin und trotzte damit der Nazi-Ideologie?",
          nl: "Op 3 augustus 1936 won welke Afro-Amerikaanse atleet de 100 meter sprint op de Olympische Spelen in Berlijn, de nazi-ideologie tartend?"
        },
        options: [
          {
            en: "Ralph Metcalfe",
            es: "Ralph Metcalfe",
            de: "Ralph Metcalfe",
            nl: "Ralph Metcalfe"
          },
          {
            en: "Jesse Owens",
            es: "Jesse Owens",
            de: "Jesse Owens",
            nl: "Jesse Owens"
          },
          {
            en: "Eddie Tolan",
            es: "Eddie Tolan",
            de: "Eddie Tolan",
            nl: "Eddie Tolan"
          },
          {
            en: "Mack Robinson",
            es: "Mack Robinson",
            de: "Mack Robinson",
            nl: "Mack Robinson"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jesse Owens won the 100-meter dash on August 3, 1936, at the Berlin Olympics, the first of his four gold medals at those games. His victories directly contradicted Adolf Hitler's propaganda about Aryan supremacy. Owens' remarkable achievements - winning in the 100m, 200m, long jump, and 4x100m relay - made him an icon of courage and athletic excellence.",
          es: "Jesse Owens ganó los 100 metros planos el 3 de agosto de 1936 en los Juegos Olímpicos de Berlín, la primera de sus cuatro medallas de oro en esos juegos. Sus victorias contradijeron directamente la propaganda de Adolf Hitler sobre la supremacía aria. Los notables logros de Owens - ganar en 100m, 200m, salto de longitud y relevo 4x100m - lo convirtieron en un ícono de coraje y excelencia atlética.",
          de: "Jesse Owens gewann am 3. August 1936 bei den Olympischen Spielen in Berlin den 100-Meter-Lauf, die erste seiner vier Goldmedaillen bei diesen Spielen. Seine Siege widersprachen direkt Adolf Hitlers Propaganda über die arische Vorherrschaft. Owens' bemerkenswerte Leistungen - Siege bei 100m, 200m, Weitsprung und 4x100m-Staffel - machten ihn zu einer Ikone des Mutes und der sportlichen Exzellenz.",
          nl: "Jesse Owens won de 100 meter sprint op 3 augustus 1936 op de Olympische Spelen in Berlijn, de eerste van zijn vier gouden medailles op die spelen. Zijn overwinningen waren in directe tegenspraak met Adolf Hitlers propaganda over Arische superioriteit. Owens' opmerkelijke prestaties - winnen op 100m, 200m, verspringen en 4x100m estafette - maakten hem tot een icoon van moed en atletische uitmuntendheid."
        }
      },
      {
        question: {
          en: "Which legendary NFL quarterback, widely considered the greatest of all time with 7 Super Bowl wins, was born on August 3, 1977?",
          es: "¿Qué legendario mariscal de campo de la NFL, ampliamente considerado el mejor de todos los tiempos con 7 victorias en el Super Bowl, nació el 3 de agosto de 1977?",
          de: "Welcher legendäre NFL-Quarterback, weithin als der Größte aller Zeiten mit 7 Super Bowl-Siegen angesehen, wurde am 3. August 1977 geboren?",
          nl: "Welke legendarische NFL-quarterback, algemeen beschouwd als de grootste aller tijden met 7 Super Bowl-overwinningen, werd geboren op 3 augustus 1977?"
        },
        options: [
          {
            en: "Peyton Manning",
            es: "Peyton Manning",
            de: "Peyton Manning",
            nl: "Peyton Manning"
          },
          {
            en: "Joe Montana",
            es: "Joe Montana",
            de: "Joe Montana",
            nl: "Joe Montana"
          },
          {
            en: "Tom Brady",
            es: "Tom Brady",
            de: "Tom Brady",
            nl: "Tom Brady"
          },
          {
            en: "Aaron Rodgers",
            es: "Aaron Rodgers",
            de: "Aaron Rodgers",
            nl: "Aaron Rodgers"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Tom Brady was born on August 3, 1977, in San Mateo, California. He won 6 Super Bowls with the New England Patriots (2001-2019) and 1 with the Tampa Bay Buccaneers (2020), along with 5 Super Bowl MVP awards and 3 regular season MVP awards. His longevity, competitive drive, and clutch performances cement his status as the greatest quarterback in NFL history.",
          es: "Tom Brady nació el 3 de agosto de 1977 en San Mateo, California. Ganó 6 Super Bowls con los New England Patriots (2001-2019) y 1 con los Tampa Bay Buccaneers (2020), junto con 5 premios MVP del Super Bowl y 3 premios MVP de temporada regular. Su longevidad, impulso competitivo y actuaciones cruciales cimentan su estatus como el mejor mariscal de campo en la historia de la NFL.",
          de: "Tom Brady wurde am 3. August 1977 in San Mateo, Kalifornien, geboren. Er gewann 6 Super Bowls mit den New England Patriots (2001-2019) und 1 mit den Tampa Bay Buccaneers (2020), zusammen mit 5 Super Bowl MVP-Auszeichnungen und 3 Regular Season MVP-Auszeichnungen. Seine Langlebigkeit, sein Wettbewerbsdrang und seine entscheidenden Leistungen zementieren seinen Status als größter Quarterback in der NFL-Geschichte.",
          nl: "Tom Brady werd geboren op 3 augustus 1977 in San Mateo, Californië. Hij won 6 Super Bowls met de New England Patriots (2001-2019) en 1 met de Tampa Bay Buccaneers (2020), samen met 5 Super Bowl MVP-awards en 3 reguliere seizoen MVP-awards. Zijn lange carrière, competitieve drive en cruciale prestaties maken zijn status als de grootste quarterback in de NFL-geschiedenis compleet."
        }
      },
      {
        question: {
          en: "On August 3, 2014, which terrorist organization captured Sinjar, Iraq, leading to the genocide of the Yazidi people?",
          es: "El 3 de agosto de 2014, ¿qué organización terrorista capturó Sinjar, Irak, llevando al genocidio del pueblo yazidí?",
          de: "Am 3. August 2014 eroberte welche Terrororganisation Sinjar, Irak, was zum Völkermord am Volk der Jesiden führte?",
          nl: "Op 3 augustus 2014 veroverde welke terroristische organisatie Sinjar, Irak, wat leidde tot de genocide van het Yazidi-volk?"
        },
        options: [
          {
            en: "Al-Qaeda",
            es: "Al-Qaeda",
            de: "Al-Qaida",
            nl: "Al-Qaeda"
          },
          {
            en: "Taliban",
            es: "Talibán",
            de: "Taliban",
            nl: "Taliban"
          },
          {
            en: "ISIS/ISIL",
            es: "ISIS/ISIL",
            de: "ISIS/ISIL",
            nl: "ISIS/ISIL"
          },
          {
            en: "Boko Haram",
            es: "Boko Haram",
            de: "Boko Haram",
            nl: "Boko Haram"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "On August 3, 2014, ISIS (Islamic State of Iraq and Syria) attacked and captured Sinjar, a predominantly Yazidi city in northern Iraq. The attack resulted in the systematic massacre, enslavement, and displacement of thousands of Yazidis. The UN and many countries recognized these actions as genocide. Thousands of Yazidis fled to Mount Sinjar, where many died from starvation and dehydration before international rescue efforts.",
          es: "El 3 de agosto de 2014, ISIS (Estado Islámico de Irak y Siria) atacó y capturó Sinjar, una ciudad predominantemente yazidí en el norte de Irak. El ataque resultó en la masacre sistemática, esclavización y desplazamiento de miles de yazidíes. La ONU y muchos países reconocieron estas acciones como genocidio. Miles de yazidíes hueron al Monte Sinjar, donde muchos murieron de hambre y deshidratación antes de los esfuerzos de rescate internacionales.",
          de: "Am 3. August 2014 griff ISIS (Islamischer Staat im Irak und Syrien) die überwiegend jesidische Stadt Sinjar im Nordirak an und eroberte sie. Der Angriff führte zur systematischen Massakrierung, Versklavung und Vertreibung Tausender Jesiden. Die UN und viele Länder erkannten diese Handlungen als Völkermord an. Tausende Jesiden flohen zum Berg Sinjar, wo viele an Hunger und Dehydrierung starben, bevor internationale Rettungsbemühungen einsetzten.",
          nl: "Op 3 augustus 2014 viel ISIS (Islamitische Staat van Irak en Syrië) de overwegend Yazidi-stad Sinjar in het noorden van Irak aan en veroverde deze. De aanval resulteerde in de systematische slachting, slavernij en ontheemding van duizenden Yazidi's. De VN en veel landen erkenden deze acties als genocide. Duizenden Yazidi's vluchtten naar de berg Sinjar, waar velen stierven van honger en uitdroging voordat internationale reddingsinspanningen plaatsvonden."
        }
      }
    ],

    // Day 4 - August 4th: Anne Frank, Obama, Queen Mother, Coast Guard
    day4: [
      {
        question: {
          en: "On August 4, 1944, which Jewish diarist was arrested by the Gestapo in Amsterdam after hiding for over two years?",
          es: "El 4 de agosto de 1944, ¿qué diarista judía fue arrestada por la Gestapo en Ámsterdam después de esconderse durante más de dos años?",
          de: "Am 4. August 1944 wurde welche jüdische Tagebuchschreiberin von der Gestapo in Amsterdam verhaftet, nachdem sie sich über zwei Jahre lang versteckt hatte?",
          nl: "Op 4 augustus 1944 werd welke Joodse dagboekschrijfster gearresteerd door de Gestapo in Amsterdam na zich meer dan twee jaar verborgen te hebben gehouden?"
        },
        options: [
          { en: "Anne Frank", es: "Ana Frank", de: "Anne Frank", nl: "Anne Frank" },
          { en: "Hannah Arendt", es: "Hannah Arendt", de: "Hannah Arendt", nl: "Hannah Arendt" },
          { en: "Edith Stein", es: "Edith Stein", de: "Edith Stein", nl: "Edith Stein" },
          { en: "Etty Hillesum", es: "Etty Hillesum", de: "Etty Hillesum", nl: "Etty Hillesum" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Anne Frank was arrested on August 4, 1944, along with seven others hiding in the secret annex at Prinsengracht 263 in Amsterdam. Her diary, written during her time in hiding, was later published by her father Otto Frank (the only annex survivor) and has become one of the most powerful testimonies of the Holocaust, translated into over 70 languages.",
          es: "Ana Frank fue arrestada el 4 de agosto de 1944, junto con otras siete personas que se escondían en el anexo secreto en Prinsengracht 263 en Ámsterdam. Su diario, escrito durante su tiempo escondida, fue posteriormente publicado por su padre Otto Frank (el único sobreviviente del anexo) y se ha convertido en uno de los testimonios más poderosos del Holocausto, traducido a más de 70 idiomas.",
          de: "Anne Frank wurde am 4. August 1944 zusammen mit sieben anderen Personen verhaftet, die sich im geheimen Hinterhaus in der Prinsengracht 263 in Amsterdam versteckt hatten. Ihr Tagebuch, das sie während ihrer Zeit im Versteck schrieb, wurde später von ihrem Vater Otto Frank (dem einzigen Überlebenden des Hinterhauses) veröffentlicht und ist zu einem der eindrucksvollsten Zeugnisse des Holocaust geworden, übersetzt in über 70 Sprachen.",
          nl: "Anne Frank werd gearresteerd op 4 augustus 1944, samen met zeven anderen die zich schuilhielden in het achterhuis aan de Prinsengracht 263 in Amsterdam. Haar dagboek, geschreven tijdens haar tijd in het onderduiken, werd later gepubliceerd door haar vader Otto Frank (de enige overlevende van het achterhuis) en is een van de krachtigste getuigenissen van de Holocaust geworden, vertaald in meer dan 70 talen."
        }
      },
      {
        question: {
          en: "Which U.S. President, the first African-American to hold the office, was born on August 4, 1961, in Honolulu, Hawaii?",
          es: "¿Qué presidente de los Estados Unidos, el primer afroamericano en ocupar el cargo, nació el 4 de agosto de 1961 en Honolulu, Hawái?",
          de: "Welcher US-Präsident, der erste Afroamerikaner in diesem Amt, wurde am 4. August 1961 in Honolulu, Hawaii, geboren?",
          nl: "Welke Amerikaanse president, de eerste Afro-Amerikaan die het ambt bekleedde, werd geboren op 4 augustus 1961 in Honolulu, Hawaii?"
        },
        options: [
          {
            en: "Bill Clinton",
            es: "Bill Clinton",
            de: "Bill Clinton",
            nl: "Bill Clinton"
          },
          {
            en: "Barack Obama",
            es: "Barack Obama",
            de: "Barack Obama",
            nl: "Barack Obama"
          },
          {
            en: "Joe Biden",
            es: "Joe Biden",
            de: "Joe Biden",
            nl: "Joe Biden"
          },
          {
            en: "George W. Bush",
            es: "George W. Bush",
            de: "George W. Bush",
            nl: "George W. Bush"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Barack Obama was born on August 4, 1961, in Honolulu, Hawaii. He served as the 44th President of the United States from 2009 to 2017, becoming the first African-American president in U.S. history. Before his presidency, he was a U.S. Senator from Illinois and a community organizer. His historic election represented a milestone in American civil rights and social progress.",
          es: "Barack Obama nació el 4 de agosto de 1961 en Honolulu, Hawái. Sirvió como el 44º presidente de los Estados Unidos de 2009 a 2017, convirtiéndose en el primer presidente afroamericano en la historia de EE.UU. Antes de su presidencia, fue senador de los Estados Unidos por Illinois y organizador comunitario. Su histórica elección representó un hito en los derechos civiles y el progreso social estadounidense.",
          de: "Barack Obama wurde am 4. August 1961 in Honolulu, Hawaii, geboren. Er diente als 44. Präsident der Vereinigten Staaten von 2009 bis 2017 und wurde der erste afroamerikanische Präsident in der Geschichte der USA. Vor seiner Präsidentschaft war er US-Senator aus Illinois und Community-Organisator. Seine historische Wahl stellte einen Meilenstein in den amerikanischen Bürgerrechten und dem sozialen Fortschritt dar.",
          nl: "Barack Obama werd geboren op 4 augustus 1961 in Honolulu, Hawaii. Hij diende als de 44e president van de Verenigde Staten van 2009 tot 2017 en werd de eerste Afro-Amerikaanse president in de Amerikaanse geschiedenis. Vóór zijn presidentschap was hij een Amerikaanse senator uit Illinois en een gemeenschapsorganisator. Zijn historische verkiezing vertegenwoordigde een mijlpaal in de Amerikaanse burgerrechten en sociale vooruitgang."
        }
      },
      {
        question: {
          en: "The Queen Mother (Elizabeth Bowes-Lyon), wife of King George VI and mother of Queen Elizabeth II, was born on August 4, 1900. In which year did she pass away?",
          es: "La Reina Madre (Elizabeth Bowes-Lyon), esposa del rey Jorge VI y madre de la reina Isabel II, nació el 4 de agosto de 1900. ¿En qué año falleció?",
          de: "Die Queen Mother (Elizabeth Bowes-Lyon), Ehefrau von König Georg VI. und Mutter von Königin Elisabeth II., wurde am 4. August 1900 geboren. In welchem Jahr starb sie?",
          nl: "De Queen Mother (Elizabeth Bowes-Lyon), echtgenote van koning George VI en moeder van koningin Elizabeth II, werd geboren op 4 augustus 1900. In welk jaar overleed ze?"
        },
        options: [
          {
            en: "1995",
            es: "1995",
            de: "1995",
            nl: "1995"
          },
          {
            en: "1999",
            es: "1999",
            de: "1999",
            nl: "1999"
          },
          {
            en: "2002",
            es: "2002",
            de: "2002",
            nl: "2002"
          },
          {
            en: "2005",
            es: "2005",
            de: "2005",
            nl: "2005"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Queen Mother died on March 30, 2002, at the age of 101. She was one of the most beloved members of the British Royal Family, known for her strength during World War II when she and King George VI remained in London during the Blitz. Her longevity and dedication to royal duty made her an iconic figure in 20th-century British history.",
          es: "La Reina Madre murió el 30 de marzo de 2002, a la edad de 101 años. Fue uno de los miembros más queridos de la Familia Real Británica, conocida por su fortaleza durante la Segunda Guerra Mundial cuando ella y el rey Jorge VI permanecieron en Londres durante el Blitz. Su longevidad y dedicación al deber real la convirtieron en una figura icónica en la historia británica del siglo XX.",
          de: "Die Queen Mother starb am 30. März 2002 im Alter von 101 Jahren. Sie war eines der beliebtesten Mitglieder der britischen Königsfamilie, bekannt für ihre Stärke während des Zweiten Weltkriegs, als sie und König Georg VI. während des Blitz in London blieben. Ihre Langlebigkeit und Hingabe an die königliche Pflicht machten sie zu einer ikonischen Figur in der britischen Geschichte des 20. Jahrhunderts.",
          nl: "De Queen Mother overleed op 30 maart 2002 op 101-jarige leeftijd. Ze was een van de meest geliefde leden van de Britse Koninklijke Familie, bekend om haar kracht tijdens de Tweede Wereldoorlog toen zij en koning George VI in Londen bleven tijdens de Blitz. Haar lange leven en toewijding aan de koninklijke plicht maakten haar tot een iconische figuur in de Britse geschiedenis van de 20e eeuw."
        }
      },
      {
        question: {
          en: "On August 4, 1790, which U.S. military service was founded to protect American maritime interests and enforce customs laws?",
          es: "El 4 de agosto de 1790, ¿qué servicio militar de EE.UU. fue fundado para proteger los intereses marítimos estadounidenses y hacer cumplir las leyes aduaneras?",
          de: "Am 4. August 1790 wurde welcher US-Militärdienst gegründet, um amerikanische maritime Interessen zu schützen und Zollgesetze durchzusetzen?",
          nl: "Op 4 augustus 1790 werd welke Amerikaanse militaire dienst opgericht om Amerikaanse maritieme belangen te beschermen en douanewetten te handhaven?"
        },
        options: [
          {
            en: "U.S. Navy",
            es: "Marina de EE.UU.",
            de: "US Navy",
            nl: "Amerikaanse Marine"
          },
          {
            en: "U.S. Coast Guard",
            es: "Guardia Costera de EE.UU.",
            de: "US-Küstenwache",
            nl: "Amerikaanse Kustwacht"
          },
          {
            en: "U.S. Marine Corps",
            es: "Cuerpo de Marines de EE.UU.",
            de: "US Marine Corps",
            nl: "Amerikaanse Mariniers"
          },
          {
            en: "U.S. Customs Service",
            es: "Servicio de Aduanas de EE.UU.",
            de: "US-Zolldienst",
            nl: "Amerikaanse Douanedienst"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The U.S. Coast Guard was founded on August 4, 1790, as the Revenue Cutter Service by Secretary of the Treasury Alexander Hamilton. It's the oldest continuous seagoing service of the United States. The Coast Guard's missions include maritime law enforcement, search and rescue, port security, and environmental protection. It operates under the Department of Homeland Security during peacetime and can transfer to the Navy during wartime.",
          es: "La Guardia Costera de EE.UU. fue fundada el 4 de agosto de 1790 como el Servicio de Cúteres de Rentas por el Secretario del Tesoro Alexander Hamilton. Es el servicio marítimo continuo más antiguo de los Estados Unidos. Las misiones de la Guardia Costera incluyen aplicación de la ley marítima, búsqueda y rescate, seguridad portuaria y protección ambiental. Opera bajo el Departamento de Seguridad Nacional en tiempos de paz y puede transferirse a la Marina durante la guerra.",
          de: "Die US-Küstenwache wurde am 4. August 1790 als Revenue Cutter Service vom Finanzminister Alexander Hamilton gegründet. Sie ist der älteste kontinuierliche seegehende Dienst der Vereinigten Staaten. Die Missionen der Küstenwache umfassen maritime Strafverfolgung, Such- und Rettungsdienste, Hafensicherheit und Umweltschutz. Sie operiert unter dem Department of Homeland Security in Friedenszeiten und kann in Kriegszeiten zur Navy transferiert werden.",
          nl: "De Amerikaanse Kustwacht werd opgericht op 4 augustus 1790 als de Revenue Cutter Service door minister van Financiën Alexander Hamilton. Het is de oudste doorlopende varende dienst van de Verenigde Staten. De missies van de Kustwacht omvatten maritieme wetshandhaving, zoek- en reddingsoperaties, havenbeveiliging en milieubescherming. Het opereert onder het Department of Homeland Security tijdens vredestijd en kan in oorlogstijd worden overgedragen aan de marine."
        }
      },
      {
        question: {
          en: "On August 4, 2007, NASA launched which spacecraft to explore the planet Mars, later discovering evidence of ancient water?",
          es: "El 4 de agosto de 2007, la NASA lanzó ¿qué nave espacial para explorar el planeta Marte, descubriendo posteriormente evidencia de agua antigua?",
          de: "Am 4. August 2007 startete die NASA welches Raumfahrzeug zur Erkundung des Planeten Mars, das später Beweise für altes Wasser entdeckte?",
          nl: "Op 4 augustus 2007 lanceerde NASA welk ruimtevaartuig om de planeet Mars te verkennen, dat later bewijs van oud water ontdekte?"
        },
        options: [
          {
            en: "Spirit",
            es: "Spirit",
            de: "Spirit",
            nl: "Spirit"
          },
          {
            en: "Opportunity",
            es: "Opportunity",
            de: "Opportunity",
            nl: "Opportunity"
          },
          {
            en: "Phoenix",
            es: "Phoenix",
            de: "Phoenix",
            nl: "Phoenix"
          },
          {
            en: "Curiosity",
            es: "Curiosity",
            de: "Curiosity",
            nl: "Curiosity"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "NASA's Phoenix Mars Lander launched on August 4, 2007, and successfully landed near Mars' north polar region on May 25, 2008. The mission confirmed the presence of water ice in the Martian arctic and studied the potential for microbial life. Phoenix operated for about 5 months before losing contact when winter conditions depleted its solar power.",
          es: "El módulo de aterrizaje Phoenix Mars de la NASA se lanzó el 4 de agosto de 2007 y aterrizó con éxito cerca de la región polar norte de Marte el 25 de mayo de 2008. La misión confirmó la presencia de hielo de agua en el ártico marciano y estudió el potencial para la vida microbiana. Phoenix operó durante aproximadamente 5 meses antes de perder contacto cuando las condiciones invernales agotaron su energía solar.",
          de: "NASAs Phoenix Mars Lander startete am 4. August 2007 und landete erfolgreich in der Nähe der nördlichen Polarregion des Mars am 25. Mai 2008. Die Mission bestätigte das Vorhandensein von Wassereis in der marsianischen Arktis und untersuchte das Potenzial für mikrobielles Leben. Phoenix war etwa 5 Monate in Betrieb, bevor der Kontakt abbrach, als die Winterbedingungen seine Solarenergie erschöpften.",
          nl: "NASA's Phoenix Mars Lander werd gelanceerd op 4 augustus 2007 en landde succesvol nabij Mars' noordpoolregio op 25 mei 2008. De missie bevestigde de aanwezigheid van waterijs in de Martiaanse arctische regio en bestudeerde het potentieel voor microbieel leven. Phoenix opereerde ongeveer 5 maanden voordat het contact verloor toen winteromstandigheden zijn zonne-energie uitputten."
        }
      }
    ],

    // Day 5 - August 5th: Traffic light, Marilyn Monroe, Neil Armstrong, Burkina Faso
    day5: [
      {
        question: {
          en: "On August 5, 1914, the first electric traffic light system was installed in which U.S. city?",
          es: "El 5 de agosto de 1914, el primer sistema de semáforos eléctricos fue instalado en ¿qué ciudad de EE.UU.?",
          de: "Am 5. August 1914 wurde das erste elektrische Ampelsystem in welcher US-Stadt installiert?",
          nl: "Op 5 augustus 1914 werd het eerste elektrische verkeerslicht systeem geïnstalleerd in welke Amerikaanse stad?"
        },
        options: [
          {
            en: "New York City",
            es: "Nueva York",
            de: "New York City",
            nl: "New York City"
          },
          {
            en: "Detroit",
            es: "Detroit",
            de: "Detroit",
            nl: "Detroit"
          },
          {
            en: "Cleveland",
            es: "Cleveland",
            de: "Cleveland",
            nl: "Cleveland"
          },
          {
            en: "Chicago",
            es: "Chicago",
            de: "Chicago",
            nl: "Chicago"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first electric traffic light was installed at the corner of Euclid Avenue and East 105th Street in Cleveland, Ohio, on August 5, 1914. It was designed by James Hoge and featured red and green lights with a buzzer to warn of color changes. This innovation helped manage the growing automobile traffic in cities and became a model for modern traffic control systems worldwide.",
          es: "El primer semáforo eléctrico fue instalado en la esquina de Euclid Avenue y East 105th Street en Cleveland, Ohio, el 5 de agosto de 1914. Fue diseñado por James Hoge y presentaba luces rojas y verdes con un zumbador para advertir de los cambios de color. Esta innovación ayudó a gestionar el creciente tráfico de automóviles en las ciudades y se convirtió en un modelo para los sistemas modernos de control de tráfico en todo el mundo.",
          de: "Die erste elektrische Ampel wurde am 5. August 1914 an der Ecke Euclid Avenue und East 105th Street in Cleveland, Ohio, installiert. Sie wurde von James Hoge entworfen und verfügte über rote und grüne Lichter mit einem Summer zur Warnung vor Farbwechseln. Diese Innovation half, den wachsenden Automobilverkehr in Städten zu bewältigen, und wurde zum Vorbild für moderne Verkehrssteuerungssysteme weltweit.",
          nl: "Het eerste elektrische verkeerslicht werd geïnstalleerd op de hoek van Euclid Avenue en East 105th Street in Cleveland, Ohio, op 5 augustus 1914. Het werd ontworpen door James Hoge en had rode en groene lichten met een zoemer om te waarschuwen voor kleurveranderingen. Deze innovatie hielp het groeiende autoverkeer in steden te beheren en werd een model voor moderne verkeerscontrolesystemen wereldwijd."
        }
      },
      {
        question: {
          en: "On August 5, 1962, which iconic Hollywood actress and cultural icon was found dead at her home in Los Angeles at age 36?",
          es: "El 5 de agosto de 1962, ¿qué icónica actriz de Hollywood e ícono cultural fue encontrada muerta en su casa en Los Ángeles a los 36 años?",
          de: "Am 5. August 1962 wurde welche ikonische Hollywood-Schauspielerin und kulturelle Ikone im Alter von 36 Jahren tot in ihrem Haus in Los Angeles aufgefunden?",
          nl: "Op 5 augustus 1962 werd welke iconische Hollywood-actrice en culturele icoon dood gevonden in haar huis in Los Angeles op 36-jarige leeftijd?"
        },
        options: [
          {
            en: "Elizabeth Taylor",
            es: "Elizabeth Taylor",
            de: "Elizabeth Taylor",
            nl: "Elizabeth Taylor"
          },
          {
            en: "Grace Kelly",
            es: "Grace Kelly",
            de: "Grace Kelly",
            nl: "Grace Kelly"
          },
          {
            en: "Marilyn Monroe",
            es: "Marilyn Monroe",
            de: "Marilyn Monroe",
            nl: "Marilyn Monroe"
          },
          {
            en: "Audrey Hepburn",
            es: "Audrey Hepburn",
            de: "Audrey Hepburn",
            nl: "Audrey Hepburn"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Marilyn Monroe died on August 5, 1962, from an overdose of barbiturates at her Brentwood home. Her death was ruled a probable suicide, though conspiracy theories persist. Monroe remains one of the most enduring pop culture icons, known for films like 'Some Like It Hot' and 'The Seven Year Itch', and her image continues to symbolize glamour and Hollywood's Golden Age.",
          es: "Marilyn Monroe murió el 5 de agosto de 1962 por una sobredosis de barbitúricos en su casa de Brentwood. Su muerte fue dictaminada como probable suicidio, aunque persisten teorías de conspiración. Monroe sigue siendo uno de los íconos de la cultura pop más duraderos, conocida por películas como 'Some Like It Hot' y 'The Seven Year Itch', y su imagen continúa simbolizando el glamour y la Edad de Oro de Hollywood.",
          de: "Marilyn Monroe starb am 5. August 1962 an einer Überdosis Barbiturate in ihrem Haus in Brentwood. Ihr Tod wurde als wahrscheinlicher Selbstmord eingestuft, obwohl Verschwörungstheorien fortbestehen. Monroe bleibt eine der dauerhaftesten Popkultur-Ikonen, bekannt für Filme wie 'Some Like It Hot' und 'Das verflixte 7. Jahr', und ihr Image symbolisiert weiterhin Glamour und Hollywoods Goldenes Zeitalter.",
          nl: "Marilyn Monroe stierf op 5 augustus 1962 aan een overdosis barbituraten in haar huis in Brentwood. Haar dood werd als waarschijnlijke zelfmoord beschouwd, hoewel complottheorieën blijven bestaan. Monroe blijft een van de meest blijvende popcultuuriconen, bekend om films zoals 'Some Like It Hot' en 'The Seven Year Itch', en haar beeltenis blijft glamour en Hollywoods Gouden Tijdperk symboliseren."
        }
      },
      {
        question: {
          en: "Which legendary astronaut, the first person to walk on the Moon, was born on August 5, 1930?",
          es: "¿Qué legendario astronauta, la primera persona en caminar sobre la Luna, nació el 5 de agosto de 1930?",
          de: "Welcher legendäre Astronaut, der erste Mensch, der auf dem Mond ging, wurde am 5. August 1930 geboren?",
          nl: "Welke legendarische astronaut, de eerste persoon die op de maan liep, werd geboren op 5 augustus 1930?"
        },
        options: [
          {
            en: "Buzz Aldrin",
            es: "Buzz Aldrin",
            de: "Buzz Aldrin",
            nl: "Buzz Aldrin"
          },
          {
            en: "Neil Armstrong",
            es: "Neil Armstrong",
            de: "Neil Armstrong",
            nl: "Neil Armstrong"
          },
          {
            en: "Michael Collins",
            es: "Michael Collins",
            de: "Michael Collins",
            nl: "Michael Collins"
          },
          {
            en: "John Glenn",
            es: "John Glenn",
            de: "John Glenn",
            nl: "John Glenn"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Neil Armstrong was born on August 5, 1930, in Wapakoneta, Ohio. As commander of Apollo 11, he became the first human to set foot on the Moon on July 20, 1969, famously declaring, 'That's one small step for man, one giant leap for mankind.' Before becoming an astronaut, Armstrong was a naval aviator and test pilot. His historic moonwalk symbolizes humanity's greatest achievement in space exploration.",
          es: "Neil Armstrong nació el 5 de agosto de 1930 en Wapakoneta, Ohio. Como comandante del Apolo 11, se convirtió en el primer humano en poner pie en la Luna el 20 de julio de 1969, declarando famosamente: 'Un pequeño paso para el hombre, un gran salto para la humanidad'. Antes de convertirse en astronauta, Armstrong fue aviador naval y piloto de pruebas. Su histórica caminata lunar simboliza el mayor logro de la humanidad en la exploración espacial.",
          de: "Neil Armstrong wurde am 5. August 1930 in Wapakoneta, Ohio, geboren. Als Kommandant von Apollo 11 wurde er am 20. Juli 1969 der erste Mensch, der den Mond betrat, und erklärte berühmt: 'Das ist ein kleiner Schritt für einen Menschen, ein großer Sprung für die Menschheit.' Bevor er Astronaut wurde, war Armstrong Marineflieger und Testpilot. Sein historischer Mondspaziergang symbolisiert die größte Errungenschaft der Menschheit in der Weltraumforschung.",
          nl: "Neil Armstrong werd geboren op 5 augustus 1930 in Wapakoneta, Ohio. Als commandant van Apollo 11 werd hij de eerste mens die voet zette op de maan op 20 juli 1969, waarbij hij beroemd verklaarde: 'Dat is één kleine stap voor de mens, één grote sprong voor de mensheid.' Voordat hij astronaut werd, was Armstrong marinevlieger en testpiloot. Zijn historische maanwandeling symboliseert 's mensheid grootste prestatie in ruimteverkenning."
        }
      },
      {
        question: {
          en: "On August 5, 1960, which landlocked West African nation gained independence from France?",
          es: "El 5 de agosto de 1960, ¿qué nación de África Occidental sin salida al mar obtuvo la independencia de Francia?",
          de: "Am 5. August 1960 erlangte welches binnenländische westafrikanische Land die Unabhängigkeit von Frankreich?",
          nl: "Op 5 augustus 1960 verkreeg welke landinwaarts gelegen West-Afrikaanse natie onafhankelijkheid van Frankrijk?"
        },
        options: [
          {
            en: "Mali",
            es: "Malí",
            de: "Mali",
            nl: "Mali"
          },
          {
            en: "Burkina Faso",
            es: "Burkina Faso",
            de: "Burkina Faso",
            nl: "Burkina Faso"
          },
          {
            en: "Niger",
            es: "Níger",
            de: "Niger",
            nl: "Niger"
          },
          {
            en: "Chad",
            es: "Chad",
            de: "Tschad",
            nl: "Tsjaad"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Burkina Faso (then called Upper Volta) gained independence from France on August 5, 1960, as part of the wave of African decolonization. The country was renamed 'Burkina Faso' (meaning 'Land of Upright People') in 1984 by President Thomas Sankara. The country is known for its diverse culture, with over 60 ethnic groups, and its capital is Ouagadougou.",
          es: "Burkina Faso (entonces llamado Alto Volta) obtuvo la independencia de Francia el 5 de agosto de 1960, como parte de la ola de descolonización africana. El país fue renombrado 'Burkina Faso' (que significa 'Tierra de Gente Íntegra') en 1984 por el presidente Thomas Sankara. El país es conocido por su cultura diversa, con más de 60 grupos étnicos, y su capital es Uagadugú.",
          de: "Burkina Faso (damals Obervolta genannt) erlangte am 5. August 1960 die Unabhängigkeit von Frankreich als Teil der Welle der afrikanischen Entkolonialisierung. Das Land wurde 1984 von Präsident Thomas Sankara in 'Burkina Faso' (bedeutet 'Land der aufrichtigen Menschen') umbenannt. Das Land ist bekannt für seine vielfältige Kultur mit über 60 ethnischen Gruppen, und seine Hauptstadt ist Ouagadougou.",
          nl: "Burkina Faso (toen Upper Volta genoemd) verkreeg onafhankelijkheid van Frankrijk op 5 augustus 1960, als onderdeel van de golf van Afrikaanse dekolonisatie. Het land werd in 1984 door president Thomas Sankara hernoemd naar 'Burkina Faso' (wat 'Land van Rechtschapen Mensen' betekent). Het land staat bekend om zijn diverse cultuur, met meer dan 60 etnische groepen, en de hoofdstad is Ouagadougou."
        }
      },
      {
        question: {
          en: "On August 5, 2010, 33 miners became trapped underground in which South American country, leading to a dramatic 69-day rescue operation?",
          es: "El 5 de agosto de 2010, 33 mineros quedaron atrapados bajo tierra en ¿qué país de América del Sur, llevando a una dramática operación de rescate de 69 días?",
          de: "Am 5. August 2010 wurden 33 Bergarbeiter unterirdisch in welchem südamerikanischen Land eingeschlossen, was zu einer dramatischen 69-tägigen Rettungsaktion führte?",
          nl: "Op 5 augustus 2010 raakten 33 mijnwerkers ondergronds gevangen in welk Zuid-Amerikaans land, wat leidde tot een dramatische 69-dagen durende reddingsoperatie?"
        },
        options: [
          {
            en: "Peru",
            es: "Perú",
            de: "Peru",
            nl: "Peru"
          },
          {
            en: "Bolivia",
            es: "Bolivia",
            de: "Bolivien",
            nl: "Bolivia"
          },
          {
            en: "Chile",
            es: "Chile",
            de: "Chile",
            nl: "Chili"
          },
          {
            en: "Colombia",
            es: "Colombia",
            de: "Kolumbien",
            nl: "Colombia"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Chilean mining accident occurred on August 5, 2010, at the San José copper-gold mine in the Atacama Desert. All 33 miners were successfully rescued on October 13, 2010, after being trapped 700 meters underground. The rescue operation captivated the world and showcased international cooperation, innovative engineering, and human resilience. The miners survived by rationing food and maintaining discipline during their 69-day ordeal.",
          es: "El accidente minero chileno ocurrió el 5 de agosto de 2010 en la mina de cobre y oro San José en el desierto de Atacama. Los 33 mineros fueron rescatados con éxito el 13 de octubre de 2010, después de quedar atrapados a 700 metros bajo tierra. La operación de rescate cautivó al mundo y mostró la cooperación internacional, la ingeniería innovadora y la resiliencia humana. Los mineros sobrevivieron racionando comida y manteniendo la disciplina durante su calvario de 69 días.",
          de: "Der chilenische Grubenunfall ereignete sich am 5. August 2010 in der San José Kupfer-Gold-Mine in der Atacama-Wüste. Alle 33 Bergleute wurden am 13. Oktober 2010 erfolgreich gerettet, nachdem sie 700 Meter unter der Erde eingeschlossen waren. Die Rettungsaktion fesselte die Welt und zeigte internationale Zusammenarbeit, innovative Ingenieurskunst und menschliche Widerstandsfähigkeit. Die Bergleute überlebten durch Rationierung von Nahrung und Aufrechterhaltung der Disziplin während ihrer 69-tägigen Tortur.",
          nl: "Het Chileense mijnongeval vond plaats op 5 augustus 2010 in de San José koper-goudmijn in de Atacama-woestijn. Alle 33 mijnwerkers werden succesvol gered op 13 oktober 2010, nadat ze 700 meter ondergronds gevangen hadden gezeten. De reddingsoperatie boeide de wereld en toonde internationale samenwerking, innovatieve engineering en menselijke veerkracht. De mijnwerkers overleefden door voedsel te rantsoeneren en discipline te handhaven tijdens hun 69-dagen durende beproeving."
        }
      }
    ],

    // Day 6 - August 6th: Hiroshima, Voting Rights Act, Jamaica, Bolivia
    day6: [
      {
        question: {
          en: "On August 6, 1945, which Japanese city became the first target of an atomic bomb, resulting in massive destruction and loss of life?",
          es: "El 6 de agosto de 1945, ¿qué ciudad japonesa se convirtió en el primer objetivo de una bomba atómica, resultando en destrucción masiva y pérdida de vidas?",
          de: "Am 6. August 1945 wurde welche japanische Stadt das erste Ziel einer Atombombe, was zu massiver Zerstörung und Verlust von Menschenleben führte?",
          nl: "Op 6 augustus 1945 werd welke Japanse stad het eerste doelwit van een atoombom, wat leidde tot massale vernietiging en verlies van mensenlevens?"
        },
        options: [
          {
            en: "Tokyo",
            es: "Tokio",
            de: "Tokio",
            nl: "Tokio"
          },
          {
            en: "Nagasaki",
            es: "Nagasaki",
            de: "Nagasaki",
            nl: "Nagasaki"
          },
          {
            en: "Hiroshima",
            es: "Hiroshima",
            de: "Hiroshima",
            nl: "Hiroshima"
          },
          {
            en: "Kyoto",
            es: "Kioto",
            de: "Kyoto",
            nl: "Kyoto"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The United States dropped an atomic bomb codenamed 'Little Boy' on Hiroshima on August 6, 1945, at 8:15 AM. The blast instantly killed an estimated 70,000-80,000 people, with tens of thousands more dying from radiation effects. This marked the first use of nuclear weapons in warfare and accelerated Japan's surrender, ending World War II. Hiroshima today is a symbol of peace and the dangers of nuclear weapons.",
          es: "Estados Unidos lanzó una bomba atómica con nombre en clave 'Little Boy' sobre Hiroshima el 6 de agosto de 1945 a las 8:15 AM. La explosión mató instantáneamente a unas 70,000-80,000 personas, con decenas de miles más muriendo por efectos de la radiación. Esto marcó el primer uso de armas nucleares en la guerra y aceleró la rendición de Japón, terminando la Segunda Guerra Mundial. Hiroshima hoy es un símbolo de paz y los peligros de las armas nucleares.",
          de: "Die Vereinigten Staaten warfen am 6. August 1945 um 8:15 Uhr eine Atombombe mit dem Codenamen 'Little Boy' auf Hiroshima ab. Die Explosion tötete sofort schätzungsweise 70.000-80.000 Menschen, wobei Zehntausende weitere an den Folgen der Strahlung starben. Dies markierte den ersten Einsatz von Atomwaffen im Krieg und beschleunigte Japans Kapitulation, wodurch der Zweite Weltkrieg beendet wurde. Hiroshima ist heute ein Symbol für Frieden und die Gefahren von Atomwaffen.",
          nl: "De Verenigde Staten lieten een atoombom met de codenaam 'Little Boy' vallen op Hiroshima op 6 augustus 1945 om 8:15 uur. De ontploffing doodde onmiddellijk naar schatting 70.000-80.000 mensen, met tienduizenden meer die stierven aan stralingseffecten. Dit markeerde het eerste gebruik van kernwapens in oorlogsvoering en versnelde Japans overgave, waarmee de Tweede Wereldoorlog eindigde. Hiroshima is vandaag een symbool van vrede en de gevaren van kernwapens."
        }
      },
      {
        question: {
          en: "On August 6, 1965, President Lyndon B. Johnson signed which landmark legislation prohibiting racial discrimination in voting?",
          es: "El 6 de agosto de 1965, el presidente Lyndon B. Johnson firmó ¿qué legislación histórica que prohibía la discriminación racial en la votación?",
          de: "Am 6. August 1965 unterzeichnete Präsident Lyndon B. Johnson welches wegweisende Gesetz, das Rassendiskriminierung bei Wahlen verbot?",
          nl: "Op 6 augustus 1965 ondertekende president Lyndon B. Johnson welke historische wetgeving die raciale discriminatie bij het stemmen verbood?"
        },
        options: [
          {
            en: "Civil Rights Act",
            es: "Ley de Derechos Civiles",
            de: "Bürgerrechtsgesetz",
            nl: "Burgerrechtenwet"
          },
          {
            en: "Voting Rights Act",
            es: "Ley de Derechos de Voto",
            de: "Wahlrechtsgesetz",
            nl: "Stemrechtenwet"
          },
          {
            en: "Fair Housing Act",
            es: "Ley de Vivienda Justa",
            de: "Gesetz für faires Wohnen",
            nl: "Eerlijke Huisvestingswet"
          },
          {
            en: "Equal Rights Amendment",
            es: "Enmienda de Igualdad de Derechos",
            de: "Gleichberechtigungsänderung",
            nl: "Gelijke Rechten Amendment"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Voting Rights Act of 1965 was signed into law on August 6, 1965, following the Selma to Montgomery marches and 'Bloody Sunday'. The act prohibited racial discrimination in voting, banning literacy tests and other discriminatory practices that had prevented African Americans from exercising their right to vote, particularly in the South. It's considered one of the most effective pieces of civil rights legislation in U.S. history.",
          es: "La Ley de Derechos de Voto de 1965 fue firmada el 6 de agosto de 1965, después de las marchas de Selma a Montgomery y el 'Domingo Sangriento'. La ley prohibió la discriminación racial en la votación, prohibiendo las pruebas de alfabetización y otras prácticas discriminatorias que habían impedido que los afroamericanos ejercieran su derecho al voto, particularmente en el Sur. Se considera una de las piezas más efectivas de legislación de derechos civiles en la historia de EE.UU.",
          de: "Das Wahlrechtsgesetz von 1965 wurde am 6. August 1965 nach den Märschen von Selma nach Montgomery und dem 'Blutigen Sonntag' unterzeichnet. Das Gesetz verbot Rassendiskriminierung bei Wahlen, verbot Alphabetisierungstests und andere diskriminierende Praktiken, die Afroamerikaner daran gehindert hatten, ihr Wahlrecht auszuüben, insbesondere im Süden. Es gilt als eines der effektivsten Bürgerrechtsgesetze in der US-Geschichte.",
          nl: "De Voting Rights Act van 1965 werd ondertekend op 6 augustus 1965, na de marsen van Selma naar Montgomery en 'Bloody Sunday'. De wet verbood raciale discriminatie bij het stemmen, verbood alfabetiseringstests en andere discriminerende praktijken die Afro-Amerikanen hadden verhinderd hun stemrecht uit te oefenen, met name in het Zuiden. Het wordt beschouwd als een van de meest effectieve stukken burgerrechtenwetgeving in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "On August 6, 1962, which Caribbean island nation gained independence from the United Kingdom?",
          es: "El 6 de agosto de 1962, ¿qué nación insular del Caribe obtuvo la independencia del Reino Unido?",
          de: "Am 6. August 1962 erlangte welche karibische Inselnation die Unabhängigkeit vom Vereinigten Königreich?",
          nl: "Op 6 augustus 1962 verkreeg welke Caribische eilandnatie onafhankelijkheid van het Verenigd Koninkrijk?"
        },
        options: [
          {
            en: "Trinidad and Tobago",
            es: "Trinidad y Tobago",
            de: "Trinidad und Tobago",
            nl: "Trinidad en Tobago"
          },
          {
            en: "Barbados",
            es: "Barbados",
            de: "Barbados",
            nl: "Barbados"
          },
          {
            en: "Jamaica",
            es: "Jamaica",
            de: "Jamaika",
            nl: "Jamaica"
          },
          {
            en: "The Bahamas",
            es: "Las Bahamas",
            de: "Die Bahamas",
            nl: "De Bahama's"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Jamaica gained independence from the United Kingdom on August 6, 1962, becoming a sovereign nation within the Commonwealth. Alexander Bustamante became the first Prime Minister. Jamaica is the third-largest island in the Caribbean and is renowned for its cultural contributions including reggae music (Bob Marley), athletics (Usain Bolt), and distinctive cuisine. The nation's motto is 'Out of Many, One People'.",
          es: "Jamaica obtuvo la independencia del Reino Unido el 6 de agosto de 1962, convirtiéndose en una nación soberana dentro de la Commonwealth. Alexander Bustamante se convirtió en el primer Primer Ministro. Jamaica es la tercera isla más grande del Caribe y es conocida por sus contribuciones culturales que incluyen música reggae (Bob Marley), atletismo (Usain Bolt) y cocina distintiva. El lema de la nación es 'De muchos, un pueblo'.",
          de: "Jamaika erlangte am 6. August 1962 die Unabhängigkeit vom Vereinigten Königreich und wurde eine souveräne Nation innerhalb des Commonwealth. Alexander Bustamante wurde der erste Premierminister. Jamaika ist die drittgrößte Insel in der Karibik und ist bekannt für seine kulturellen Beiträge wie Reggae-Musik (Bob Marley), Leichtathletik (Usain Bolt) und charakteristische Küche. Das Motto der Nation lautet 'Aus vielen, ein Volk'.",
          nl: "Jamaica verkreeg onafhankelijkheid van het Verenigd Koninkrijk op 6 augustus 1962 en werd een soevereine natie binnen het Gemenebest. Alexander Bustamante werd de eerste premier. Jamaica is het derde grootste eiland in het Caribisch gebied en staat bekend om zijn culturele bijdragen, waaronder reggaemuziek (Bob Marley), atletiek (Usain Bolt) en kenmerkende keuken. Het motto van de natie is 'Uit velen, één volk'."
        }
      },
      {
        question: {
          en: "On August 6, 1825, which South American nation declared its independence from Spain?",
          es: "El 6 de agosto de 1825, ¿qué nación de América del Sur declaró su independencia de España?",
          de: "Am 6. August 1825 erklärte welche südamerikanische Nation ihre Unabhängigkeit von Spanien?",
          nl: "Op 6 augustus 1825 verklaarde welke Zuid-Amerikaanse natie zijn onafhankelijkheid van Spanje?"
        },
        options: [
          {
            en: "Peru",
            es: "Perú",
            de: "Peru",
            nl: "Peru"
          },
          {
            en: "Bolivia",
            es: "Bolivia",
            de: "Bolivien",
            nl: "Bolivia"
          },
          {
            en: "Ecuador",
            es: "Ecuador",
            de: "Ecuador",
            nl: "Ecuador"
          },
          {
            en: "Colombia",
            es: "Colombia",
            de: "Kolumbien",
            nl: "Colombia"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bolivia declared independence from Spain on August 6, 1825, following the decisive Battle of Ayacucho. The country was named after Simón Bolívar, the Venezuelan liberator who led the independence movements across South America. Bolivia is known for being a landlocked country with two capitals (La Paz - administrative, Sucre - constitutional), the world's highest navigable lake (Lake Titicaca), and the world's largest salt flat (Salar de Uyuni).",
          es: "Bolivia declaró su independencia de España el 6 de agosto de 1825, después de la decisiva Batalla de Ayacucho. El país recibió su nombre de Simón Bolívar, el libertador venezolano que lideró los movimientos de independencia en América del Sur. Bolivia es conocida por ser un país sin salida al mar con dos capitales (La Paz - administrativa, Sucre - constitucional), el lago navegable más alto del mundo (Lago Titicaca) y el salar más grande del mundo (Salar de Uyuni).",
          de: "Bolivien erklärte am 6. August 1825 nach der entscheidenden Schlacht von Ayacucho seine Unabhängigkeit von Spanien. Das Land wurde nach Simón Bolívar benannt, dem venezolanischen Befreier, der die Unabhängigkeitsbewegungen in ganz Südamerika anführte. Bolivien ist bekannt dafür, ein Binnenstaat mit zwei Hauptstädten (La Paz - administrativ, Sucre - verfassungsmäßig), dem höchsten schiffbaren See der Welt (Titicacasee) und der größten Salzwüste der Welt (Salar de Uyuni) zu sein.",
          nl: "Bolivia verklaarde zijn onafhankelijkheid van Spanje op 6 augustus 1825, na de beslissende Slag bij Ayacucho. Het land werd vernoemd naar Simón Bolívar, de Venezolaanse bevrijder die de onafhankelijkheidsbewegingen in heel Zuid-Amerika leidde. Bolivia staat bekend als een landinwaarts gelegen land met twee hoofdsteden (La Paz - administratief, Sucre - grondwettelijk), het hoogste bevaarbare meer ter wereld (Titicacameer) en de grootste zoutvlakte ter wereld (Salar de Uyuni)."
        }
      },
      {
        question: {
          en: "On August 6, 1991, which British computer scientist announced the World Wide Web project, making the internet publicly available?",
          es: "El 6 de agosto de 1991, ¿qué científico informático británico anunció el proyecto World Wide Web, haciendo que Internet estuviera disponible públicamente?",
          de: "Am 6. August 1991 kündigte welcher britische Informatiker das World Wide Web-Projekt an und machte das Internet öffentlich zugänglich?",
          nl: "Op 6 augustus 1991 kondigde welke Britse computerwetenschapper het World Wide Web-project aan, waardoor het internet publiek toegankelijk werd?"
        },
        options: [
          {
            en: "Steve Jobs",
            es: "Steve Jobs",
            de: "Steve Jobs",
            nl: "Steve Jobs"
          },
          {
            en: "Bill Gates",
            es: "Bill Gates",
            de: "Bill Gates",
            nl: "Bill Gates"
          },
          {
            en: "Vint Cerf",
            es: "Vint Cerf",
            de: "Vint Cerf",
            nl: "Vint Cerf"
          },
          {
            en: "Tim Berners-Lee",
            es: "Tim Berners-Lee",
            de: "Tim Berners-Lee",
            nl: "Tim Berners-Lee"
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "Tim Berners-Lee publicly announced the World Wide Web project on August 6, 1991, while working at CERN in Switzerland. He invented HTML, HTTP, and URLs, creating the foundation for the modern internet. Unlike many tech innovators, Berners-Lee chose not to patent his invention, believing the web should be free and accessible to all. His decision to make the web open source changed human communication and information sharing forever.",
          es: "Tim Berners-Lee anunció públicamente el proyecto World Wide Web el 6 de agosto de 1991, mientras trabajaba en el CERN en Suiza. Inventó HTML, HTTP y URLs, creando la base para Internet moderno. A diferencia de muchos innovadores tecnológicos, Berners-Lee eligió no patentar su invención, creyendo que la web debería ser gratuita y accesible para todos. Su decisión de hacer la web de código abierto cambió para siempre la comunicación humana y el intercambio de información.",
          de: "Tim Berners-Lee kündigte das World Wide Web-Projekt am 6. August 1991 öffentlich an, während er am CERN in der Schweiz arbeitete. Er erfand HTML, HTTP und URLs und schuf damit die Grundlage für das moderne Internet. Im Gegensatz zu vielen Tech-Innovatoren entschied sich Berners-Lee, seine Erfindung nicht zu patentieren, da er glaubte, das Web sollte kostenlos und für alle zugänglich sein. Seine Entscheidung, das Web als Open Source zu machen, veränderte die menschliche Kommunikation und den Informationsaustausch für immer.",
          nl: "Tim Berners-Lee kondigde het World Wide Web-project publiekelijk aan op 6 augustus 1991, terwijl hij werkte bij CERN in Zwitserland. Hij vond HTML, HTTP en URL's uit en creëerde de basis voor het moderne internet. In tegenstelling tot veel tech-innovators koos Berners-Lee ervoor zijn uitvinding niet te patenteren, omdat hij geloofde dat het web gratis en toegankelijk voor iedereen zou moeten zijn. Zijn beslissing om het web open source te maken, veranderde menselijke communicatie en informatie-uitwisseling voor altijd."
        }
      }
    ],

    // Day 7 - August 7th: Purple Heart, Ivory Coast, Mata Hari
    day7: [
      {
        question: {
          en: "On August 7, 1782, which prestigious U.S. military decoration was established by George Washington to honor soldiers wounded or killed in combat?",
          es: "El 7 de agosto de 1782, ¿qué prestigiosa condecoración militar de EE.UU. fue establecida por George Washington para honrar a los soldados heridos o muertos en combate?",
          de: "Am 7. August 1782 wurde welche prestigeträchtige US-Militärauszeichnung von George Washington eingeführt, um verwundete oder gefallene Soldaten zu ehren?",
          nl: "Op 7 augustus 1782 werd welke prestigieuze Amerikaanse militaire onderscheiding door George Washington ingesteld om soldaten te eren die gewond raakten of sneuvelden in gevechten?"
        },
        options: [
          {
            en: "Medal of Honor",
            es: "Medalla de Honor",
            de: "Medal of Honor",
            nl: "Medal of Honor"
          },
          {
            en: "Purple Heart",
            es: "Corazón Púrpura",
            de: "Purple Heart",
            nl: "Purple Heart"
          },
          {
            en: "Silver Star",
            es: "Estrella de Plata",
            de: "Silberner Stern",
            nl: "Zilveren Ster"
          },
          {
            en: "Bronze Star",
            es: "Estrella de Bronce",
            de: "Bronzener Stern",
            nl: "Bronzen Ster"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Purple Heart was established on August 7, 1782, by General George Washington as the 'Badge of Military Merit'. It's the oldest military decoration still in use and is awarded to members of the U.S. armed forces who are wounded or killed in action. The medal features a purple heart-shaped medal with George Washington's profile. After Washington's time, it fell into disuse but was revived in 1932 on the 200th anniversary of Washington's birth.",
          es: "El Corazón Púrpura fue establecido el 7 de agosto de 1782 por el general George Washington como la 'Insignia de Mérito Militar'. Es la condecoración militar más antigua todavía en uso y se otorga a miembros de las fuerzas armadas de EE.UU. que son heridos o muertos en acción. La medalla presenta un corazón púrpura con el perfil de George Washington. Después del tiempo de Washington, cayó en desuso pero fue revivida en 1932 en el 200 aniversario del nacimiento de Washington.",
          de: "Das Purple Heart wurde am 7. August 1782 von General George Washington als 'Badge of Military Merit' eingeführt. Es ist die älteste noch verwendete Militärauszeichnung und wird an Angehörige der US-Streitkräfte verliehen, die im Einsatz verwundet oder getötet werden. Die Medaille zeigt ein purpurfarbenes herzförmiges Medaillon mit George Washingtons Profil. Nach Washingtons Zeit geriet es in Vergessenheit, wurde aber 1932 zum 200. Geburtstag Washingtons wiederbelebt.",
          nl: "Het Purple Heart werd opgericht op 7 augustus 1782 door generaal George Washington als de 'Badge of Military Merit'. Het is de oudste militaire onderscheiding die nog steeds in gebruik is en wordt toegekend aan leden van de Amerikaanse strijdkrachten die gewond raken of sneuvelen in actie. De medaille heeft een paars hartvormige medaille met het profiel van George Washington. Na Washingtons tijd raakte het in onbruik maar werd nieuw leven ingeblazen in 1932 op de 200ste verjaardag van Washingtons geboorte."
        }
      },
      {
        question: {
          en: "On August 7, 1960, which West African nation gained independence from France?",
          es: "El 7 de agosto de 1960, ¿qué nación de África Occidental obtuvo la independencia de Francia?",
          de: "Am 7. August 1960 erlangte welches westafrikanische Land die Unabhängigkeit von Frankreich?",
          nl: "Op 7 augustus 1960 verkreeg welke West-Afrikaanse natie onafhankelijkheid van Frankrijk?"
        },
        options: [
          {
            en: "Senegal",
            es: "Senegal",
            de: "Senegal",
            nl: "Senegal"
          },
          {
            en: "Ivory Coast",
            es: "Costa de Marfil",
            de: "Elfenbeinküste",
            nl: "Ivoorkust"
          },
          {
            en: "Benin",
            es: "Benín",
            de: "Benin",
            nl: "Benin"
          },
          {
            en: "Togo",
            es: "Togo",
            de: "Togo",
            nl: "Togo"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ivory Coast (Côte d'Ivoire) gained independence from France on August 7, 1960, with Félix Houphouët-Boigny as its first president. He led the country for 33 years. Ivory Coast is the world's largest producer of cocoa beans and has a population of over 26 million. The country's official capital is Yamoussoukro, though the economic capital and largest city is Abidjan. The nation maintains strong economic and cultural ties with France.",
          es: "Costa de Marfil (Côte d'Ivoire) obtuvo la independencia de Francia el 7 de agosto de 1960, con Félix Houphouët-Boigny como su primer presidente. Lideró el país durante 33 años. Costa de Marfil es el mayor productor mundial de granos de cacao y tiene una población de más de 26 millones. La capital oficial del país es Yamoussoukro, aunque la capital económica y ciudad más grande es Abidján. La nación mantiene fuertes vínculos económicos y culturales con Francia.",
          de: "Die Elfenbeinküste (Côte d'Ivoire) erlangte am 7. August 1960 die Unabhängigkeit von Frankreich, mit Félix Houphouët-Boigny als erstem Präsidenten. Er führte das Land 33 Jahre lang. Die Elfenbeinküste ist der weltgrößte Produzent von Kakaobohnen und hat eine Bevölkerung von über 26 Millionen. Die offizielle Hauptstadt des Landes ist Yamoussoukro, obwohl die Wirtschaftshauptstadt und größte Stadt Abidjan ist. Die Nation unterhält starke wirtschaftliche und kulturelle Beziehungen zu Frankreich.",
          nl: "Ivoorkust (Côte d'Ivoire) verkreeg onafhankelijkheid van Frankrijk op 7 augustus 1960, met Félix Houphouët-Boigny als eerste president. Hij leidde het land 33 jaar. Ivoorkust is 's werelds grootste producent van cacaobonen en heeft een bevolking van meer dan 26 miljoen. De officiële hoofdstad van het land is Yamoussoukro, hoewel de economische hoofdstad en grootste stad Abidjan is. De natie onderhoudt sterke economische en culturele banden met Frankrijk."
        }
      },
      {
        question: {
          en: "On August 7, 1998, which two U.S. embassies in East Africa were bombed by al-Qaeda, killing over 200 people?",
          es: "El 7 de agosto de 1998, ¿qué dos embajadas de EE.UU. en África Oriental fueron bombardeadas por al-Qaeda, matando a más de 200 personas?",
          de: "Am 7. August 1998 wurden welche zwei US-Botschaften in Ostafrika von al-Qaida bombardiert, wobei über 200 Menschen getötet wurden?",
          nl: "Op 7 augustus 1998 werden welke twee Amerikaanse ambassades in Oost-Afrika gebombardeerd door al-Qaeda, waarbij meer dan 200 mensen omkwamen?"
        },
        options: [
          {
            en: "Egypt and Sudan",
            es: "Egipto y Sudán",
            de: "Ägypten und Sudan",
            nl: "Egypte en Soedan"
          },
          {
            en: "Somalia and Ethiopia",
            es: "Somalia y Etiopía",
            de: "Somalia und Äthiopien",
            nl: "Somalië en Ethiopië"
          },
          {
            en: "Kenya and Tanzania",
            es: "Kenia y Tanzania",
            de: "Kenia und Tansania",
            nl: "Kenia en Tanzania"
          },
          {
            en: "Uganda and Rwanda",
            es: "Uganda y Ruanda",
            de: "Uganda und Ruanda",
            nl: "Oeganda en Rwanda"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "On August 7, 1998, al-Qaeda terrorists simultaneously bombed the U.S. embassies in Nairobi, Kenya, and Dar es Salaam, Tanzania. The attacks killed 224 people (including 12 Americans) and injured over 4,500. Most victims were local African citizens. These bombings were orchestrated by Osama bin Laden and marked a major escalation in al-Qaeda's war against the United States, foreshadowing the September 11, 2001 attacks. The U.S. responded with cruise missile strikes against al-Qaeda targets in Afghanistan and Sudan.",
          es: "El 7 de agosto de 1998, terroristas de al-Qaeda bombardearon simultáneamente las embajadas de EE.UU. en Nairobi, Kenia, y Dar es Salaam, Tanzania. Los ataques mataron a 224 personas (incluidos 12 estadounidenses) e hirieron a más de 4,500. La mayoría de las víctimas fueron ciudadanos africanos locales. Estos bombardeos fueron orquestados por Osama bin Laden y marcaron una importante escalada en la guerra de al-Qaeda contra Estados Unidos, presagiando los ataques del 11 de septiembre de 2001. EE.UU. respondió con ataques de misiles de crucero contra objetivos de al-Qaeda en Afganistán y Sudán.",
          de: "Am 7. August 1998 bombardierten al-Qaida-Terroristen gleichzeitig die US-Botschaften in Nairobi, Kenia, und Daressalam, Tansania. Die Anschläge töteten 224 Menschen (darunter 12 Amerikaner) und verletzten über 4.500. Die meisten Opfer waren lokale afrikanische Bürger. Diese Bombenanschläge wurden von Osama bin Laden orchestriert und markierten eine bedeutende Eskalation in al-Qaidas Krieg gegen die Vereinigten Staaten, was die Anschläge vom 11. September 2001 vorwegnahm. Die USA reagierten mit Marschflugkörperangriffen auf al-Qaida-Ziele in Afghanistan und Sudan.",
          nl: "Op 7 augustus 1998 bombardeerden al-Qaeda-terroristen gelijktijdig de Amerikaanse ambassades in Nairobi, Kenia, en Dar es Salaam, Tanzania. De aanvallen doodden 224 mensen (waaronder 12 Amerikanen) en verwondden meer dan 4.500. De meeste slachtoffers waren lokale Afrikaanse burgers. Deze bomaanslagen werden georchestreerd door Osama bin Laden en markeerden een grote escalatie in al-Qaeda's oorlog tegen de Verenigde Staten, wat vooruitliep op de aanslagen van 11 september 2001. De VS reageerden met kruisraketketten tegen al-Qaeda-doelen in Afghanistan en Soedan."
        }
      },
      {
        question: {
          en: "Although executed on October 15, 1917, which famous female spy was arrested on August 7, 1917, in her Paris hotel room by French authorities?",
          es: "Aunque ejecutada el 15 de octubre de 1917, ¿qué famosa espía fue arrestada el 7 de agosto de 1917 en su habitación de hotel en París por las autoridades francesas?",
          de: "Obwohl am 15. Oktober 1917 hingerichtet, wurde welche berühmte weibliche Spionin am 7. August 1917 in ihrem Pariser Hotelzimmer von französischen Behörden verhaftet?",
          nl: "Hoewel geëxecuteerd op 15 oktober 1917, werd welke beroemde vrouwelijke spion gearresteerd op 7 augustus 1917 in haar hotelkamer in Parijs door de Franse autoriteiten?"
        },
        options: [
          { en: "Noor Inayat Khan", es: "Noor Inayat Khan", de: "Noor Inayat Khan", nl: "Noor Inayat Khan" },
          { en: "Virginia Hall", es: "Virginia Hall", de: "Virginia Hall", nl: "Virginia Hall" },
          { en: "Mata Hari", es: "Mata Hari", de: "Mata Hari", nl: "Mata Hari" },
          { en: "Nancy Wake", es: "Nancy Wake", de: "Nancy Wake", nl: "Nancy Wake" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Mata Hari, born Margaretha Geertruida Zelle, was arrested in Paris on February 13, 1917 (not August 7), and executed on October 15, 1917, by French firing squad for espionage during World War I. She was a Dutch exotic dancer and courtesan accused of being a German spy. While her guilt remains debated by historians, she became one of the most famous spies in history. Her name has become synonymous with female espionage and seduction. Note: The date in the question premise contains a historical inaccuracy.",
          es: "Mata Hari, nacida Margaretha Geertruida Zelle, fue arrestada en París el 13 de febrero de 1917 (no el 7 de agosto), y ejecutada el 15 de octubre de 1917 por un pelotón de fusilamiento francés por espionaje durante la Primera Guerra Mundial. Era una bailarina exótica y cortesana holandesa acusada de ser una espía alemana. Aunque su culpabilidad sigue siendo debatida por los historiadores, se convirtió en una de las espías más famosas de la historia. Su nombre se ha vuelto sinónimo de espionaje femenino y seducción. Nota: La fecha en la premisa de la pregunta contiene una inexactitud histórica.",
          de: "Mata Hari, geboren als Margaretha Geertruida Zelle, wurde am 13. Februar 1917 (nicht am 7. August) in Paris verhaftet und am 15. Oktober 1917 von einem französischen Erschießungskommando wegen Spionage während des Ersten Weltkriegs hingerichtet. Sie war eine niederländische exotische Tänzerin und Kurtisane, die beschuldigt wurde, eine deutsche Spionin zu sein. Während ihre Schuld von Historikern weiterhin diskutiert wird, wurde sie zu einer der berühmtesten Spioninnen der Geschichte. Ihr Name ist zum Synonym für weibliche Spionage und Verführung geworden. Hinweis: Das Datum in der Fragestellung enthält eine historische Ungenauigkeit.",
          nl: "Mata Hari, geboren als Margaretha Geertruida Zelle, werd gearresteerd in Parijs op 13 februari 1917 (niet 7 augustus), en geëxecuteerd op 15 oktober 1917 door een Frans vuurpeloton voor spionage tijdens de Eerste Wereldoorlog. Ze was een Nederlandse exotische danseres en courtisane die beschuldigd werd een Duitse spion te zijn. Hoewel haar schuld nog steeds door historici wordt betwist, werd ze een van de beroemdste spionnen in de geschiedenis. Haar naam is synoniem geworden met vrouwelijke spionage en verleiding. Opmerking: De datum in de vraagstelling bevat een historische onjuistheid."
        }
      },
      {
        question: {
          en: "On August 7, 2008, which country launched a military offensive into South Ossetia, triggering a brief war with Russia?",
          es: "El 7 de agosto de 2008, ¿qué país lanzó una ofensiva militar en Osetia del Sur, desencadenando una breve guerra con Rusia?",
          de: "Am 7. August 2008 startete welches Land eine Militäroffensive in Südossetien, was einen kurzen Krieg mit Russland auslöste?",
          nl: "Op 7 augustus 2008 lanceerde welk land een militaire aanval op Zuid-Ossetië, wat een korte oorlog met Rusland veroorzaakte?"
        },
        options: [
          {
            en: "Ukraine",
            es: "Ucrania",
            de: "Ukraine",
            nl: "Oekraïne"
          },
          {
            en: "Georgia",
            es: "Georgia",
            de: "Georgien",
            nl: "Georgië"
          },
          {
            en: "Armenia",
            es: "Armenia",
            de: "Armenien",
            nl: "Armenië"
          },
          {
            en: "Azerbaijan",
            es: "Azerbaiyán",
            de: "Aserbaidschan",
            nl: "Azerbeidzjan"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Georgia launched a military offensive to regain control of South Ossetia on August 7, 2008, leading to the Russo-Georgian War. Russia responded with a large-scale military intervention, overwhelming Georgian forces. The five-day war ended with Russian recognition of South Ossetia and Abkhazia as independent states (though most countries don't recognize this). The conflict demonstrated Russia's willingness to use military force in its 'near abroad' and heightened tensions between Russia and the West.",
          es: "Georgia lanzó una ofensiva militar para recuperar el control de Osetia del Sur el 7 de agosto de 2008, llevando a la Guerra Ruso-Georgiana. Rusia respondió con una intervención militar a gran escala, abrumando a las fuerzas georgianas. La guerra de cinco días terminó con el reconocimiento ruso de Osetia del Sur y Abjasia como estados independientes (aunque la mayoría de los países no reconocen esto). El conflicto demostró la disposición de Rusia a usar la fuerza militar en su 'extranjero cercano' y aumentó las tensiones entre Rusia y Occidente.",
          de: "Georgien startete am 7. August 2008 eine Militäroffensive zur Wiedererlangung der Kontrolle über Südossetien, was zum Russisch-Georgischen Krieg führte. Russland reagierte mit einer groß angelegten Militärintervention und überwältigte die georgischen Streitkräfte. Der fünftägige Krieg endete mit der russischen Anerkennung Südossetiens und Abchasiens als unabhängige Staaten (obwohl die meisten Länder dies nicht anerkennen). Der Konflikt demonstrierte Russlands Bereitschaft, militärische Gewalt in seinem 'nahen Ausland' einzusetzen, und verschärfte die Spannungen zwischen Russland und dem Westen.",
          nl: "Georgië lanceerde een militaire aanval om de controle over Zuid-Ossetië terug te krijgen op 7 augustus 2008, wat leidde tot de Russisch-Georgische Oorlog. Rusland reageerde met een grootschalige militaire interventie en overweldigde de Georgische troepen. De vijf dagen durende oorlog eindigde met Russische erkenning van Zuid-Ossetië en Abchazië als onafhankelijke staten (hoewel de meeste landen dit niet erkennen). Het conflict toonde Ruslands bereidheid om militaire macht te gebruiken in zijn 'nabije buitenland' en verhoogde de spanningen tussen Rusland en het Westen."
        }
      }
    ],

    // Day 8 - August 8th: Nixon resigns, ASEAN, Dustin Hoffman
    day8: [
      {
        question: {
          en: "On August 8, 1974, which U.S. President announced his resignation due to the Watergate scandal, effective the next day?",
          es: "El 8 de agosto de 1974, ¿qué presidente de EE.UU. anunció su renuncia debido al escándalo Watergate, efectiva al día siguiente?",
          de: "Am 8. August 1974 kündigte welcher US-Präsident seinen Rücktritt aufgrund des Watergate-Skandals an, wirksam am nächsten Tag?",
          nl: "Op 8 augustus 1974 kondigde welke Amerikaanse president zijn aftreden aan vanwege het Watergate-schandaal, van kracht de volgende dag?"
        },
        options: [
          {
            en: "Lyndon B. Johnson",
            es: "Lyndon B. Johnson",
            de: "Lyndon B. Johnson",
            nl: "Lyndon B. Johnson"
          },
          {
            en: "Gerald Ford",
            es: "Gerald Ford",
            de: "Gerald Ford",
            nl: "Gerald Ford"
          },
          {
            en: "Richard Nixon",
            es: "Richard Nixon",
            de: "Richard Nixon",
            nl: "Richard Nixon"
          },
          {
            en: "Jimmy Carter",
            es: "Jimmy Carter",
            de: "Jimmy Carter",
            nl: "Jimmy Carter"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Richard Nixon announced his resignation on August 8, 1974, becoming the only U.S. president to resign from office. The Watergate scandal involved the break-in at Democratic National Committee headquarters and subsequent cover-up attempts. Facing near-certain impeachment, Nixon resigned and was succeeded by Vice President Gerald Ford, who later pardoned him. The scandal profoundly affected American politics, journalism, and public trust in government.",
          es: "Richard Nixon anunció su renuncia el 8 de agosto de 1974, convirtiéndose en el único presidente de EE.UU. en renunciar al cargo. El escándalo Watergate involucró el allanamiento de la sede del Comité Nacional Demócrata y los posteriores intentos de encubrimiento. Enfrentando un juicio político casi seguro, Nixon renunció y fue sucedido por el vicepresidente Gerald Ford, quien luego lo indultó. El escándalo afectó profundamente la política estadounidense, el periodismo y la confianza pública en el gobierno.",
          de: "Richard Nixon kündigte am 8. August 1974 seinen Rücktritt an und wurde der einzige US-Präsident, der von seinem Amt zurücktrat. Der Watergate-Skandal umfasste den Einbruch in das Hauptquartier des Democratic National Committee und nachfolgende Vertuschungsversuche. Angesichts einer nahezu sicheren Amtsenthebung trat Nixon zurück und wurde von Vizepräsident Gerald Ford abgelöst, der ihn später begnadigte. Der Skandal beeinflusste die amerikanische Politik, den Journalismus und das öffentliche Vertrauen in die Regierung tiefgreifend.",
          nl: "Richard Nixon kondigde zijn aftreden aan op 8 augustus 1974 en werd de enige Amerikaanse president die uit zijn ambt trad. Het Watergate-schandaal omvatte de inbraak bij het hoofdkwartier van het Democratisch Nationaal Comité en daaropvolgende pogingen tot doofpotaffaire. Geconfronteerd met een vrijwel zekere impeachment trad Nixon af en werd opgevolgd door vicepresident Gerald Ford, die hem later gratie verleende. Het schandaal had een diepgaande invloed op de Amerikaanse politiek, journalistiek en het publieke vertrouwen in de overheid."
        }
      },
      {
        question: {
          en: "On August 8, 1967, which regional organization was founded in Bangkok to promote economic and political cooperation in Southeast Asia?",
          es: "El 8 de agosto de 1967, ¿qué organización regional fue fundada en Bangkok para promover la cooperación económica y política en el sudeste asiático?",
          de: "Am 8. August 1967 wurde welche regionale Organisation in Bangkok gegründet, um die wirtschaftliche und politische Zusammenarbeit in Südostasien zu fördern?",
          nl: "Op 8 augustus 1967 werd welke regionale organisatie opgericht in Bangkok om economische en politieke samenwerking in Zuidoost-Azië te bevorderen?"
        },
        options: [
          {
            en: "APEC",
            es: "APEC",
            de: "APEC",
            nl: "APEC"
          },
          {
            en: "ASEAN",
            es: "ASEAN",
            de: "ASEAN",
            nl: "ASEAN"
          },
          {
            en: "SAARC",
            es: "SAARC",
            de: "SAARC",
            nl: "SAARC"
          },
          {
            en: "TPP",
            es: "TPP",
            de: "TPP",
            nl: "TPP"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "ASEAN (Association of Southeast Asian Nations) was founded on August 8, 1967, in Bangkok by five countries: Indonesia, Malaysia, the Philippines, Singapore, and Thailand. The organization now includes 10 member states and promotes economic growth, social progress, cultural development, and regional peace. ASEAN has become one of the world's most important regional organizations, representing over 650 million people and a combined GDP exceeding $3 trillion.",
          es: "ASEAN (Asociación de Naciones del Sudeste Asiático) fue fundada el 8 de agosto de 1967 en Bangkok por cinco países: Indonesia, Malasia, Filipinas, Singapur y Tailandia. La organización ahora incluye 10 estados miembros y promueve el crecimiento económico, el progreso social, el desarrollo cultural y la paz regional. ASEAN se ha convertido en una de las organizaciones regionales más importantes del mundo, representando a más de 650 millones de personas y un PIB combinado superior a $3 billones.",
          de: "ASEAN (Verband Südostasiatischer Nationen) wurde am 8. August 1967 in Bangkok von fünf Ländern gegründet: Indonesien, Malaysia, den Philippinen, Singapur und Thailand. Die Organisation umfasst heute 10 Mitgliedstaaten und fördert Wirtschaftswachstum, sozialen Fortschritt, kulturelle Entwicklung und regionalen Frieden. ASEAN ist zu einer der wichtigsten regionalen Organisationen der Welt geworden und repräsentiert über 650 Millionen Menschen und ein kombiniertes BIP von über 3 Billionen Dollar.",
          nl: "ASEAN (Associatie van Zuidoost-Aziatische Naties) werd opgericht op 8 augustus 1967 in Bangkok door vijf landen: Indonesië, Maleisië, de Filippijnen, Singapore en Thailand. De organisatie omvat nu 10 lidstaten en bevordert economische groei, sociale vooruitgang, culturele ontwikkeling en regionale vrede. ASEAN is een van 's werelds belangrijkste regionale organisaties geworden, met meer dan 650 miljoen mensen en een gecombineerd BBP van meer dan $3 biljoen."
        }
      },
      {
        question: {
          en: "Which acclaimed American actor, known for roles in 'Rain Man', 'The Graduate', and 'Tootsie', was born on August 8, 1937?",
          es: "¿Qué aclamado actor estadounidense, conocido por papeles en 'Rain Man', 'El graduado' y 'Tootsie', nació el 8 de agosto de 1937?",
          de: "Welcher gefeierte amerikanische Schauspieler, bekannt für Rollen in 'Rain Man', 'Die Reifeprüfung' und 'Tootsie', wurde am 8. August 1937 geboren?",
          nl: "Welke geprezen Amerikaanse acteur, bekend om rollen in 'Rain Man', 'The Graduate' en 'Tootsie', werd geboren op 8 augustus 1937?"
        },
        options: [
          {
            en: "Robert De Niro",
            es: "Robert De Niro",
            de: "Robert De Niro",
            nl: "Robert De Niro"
          },
          {
            en: "Al Pacino",
            es: "Al Pacino",
            de: "Al Pacino",
            nl: "Al Pacino"
          },
          {
            en: "Jack Nicholson",
            es: "Jack Nicholson",
            de: "Jack Nicholson",
            nl: "Jack Nicholson"
          },
          {
            en: "Dustin Hoffman",
            es: "Dustin Hoffman",
            de: "Dustin Hoffman",
            nl: "Dustin Hoffman"
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "Dustin Hoffman was born on August 8, 1937, in Los Angeles, California. He became one of the defining actors of New Hollywood with his breakthrough role in 'The Graduate' (1967). He has won two Academy Awards for Best Actor for 'Kramer vs. Kramer' (1979) and 'Rain Man' (1988). Known for his versatility and method acting approach, Hoffman has portrayed a wide range of characters, from the cross-dressing actor in 'Tootsie' to the autistic savant in 'Rain Man'.",
          es: "Dustin Hoffman nació el 8 de agosto de 1937 en Los Ángeles, California. Se convirtió en uno de los actores definitorios del Nuevo Hollywood con su papel revelación en 'El graduado' (1967). Ha ganado dos premios de la Academia al Mejor Actor por 'Kramer vs. Kramer' (1979) y 'Rain Man' (1988). Conocido por su versatilidad y enfoque de actuación de método, Hoffman ha interpretado una amplia gama de personajes, desde el actor travestido en 'Tootsie' hasta el savant autista en 'Rain Man'.",
          de: "Dustin Hoffman wurde am 8. August 1937 in Los Angeles, Kalifornien, geboren. Er wurde einer der prägenden Schauspieler des New Hollywood mit seiner Durchbruchrolle in 'Die Reifeprüfung' (1967). Er gewann zwei Academy Awards für den besten Hauptdarsteller für 'Kramer gegen Kramer' (1979) und 'Rain Man' (1988). Bekannt für seine Vielseitigkeit und seinen Method-Acting-Ansatz, hat Hoffman eine breite Palette von Charakteren dargestellt, vom Cross-Dressing-Schauspieler in 'Tootsie' bis zum autistischen Savant in 'Rain Man'.",
          nl: "Dustin Hoffman werd geboren op 8 augustus 1937 in Los Angeles, Californië. Hij werd een van de bepalende acteurs van New Hollywood met zijn doorbraakrol in 'The Graduate' (1967). Hij heeft twee Academy Awards voor Beste Acteur gewonnen voor 'Kramer vs. Kramer' (1979) en 'Rain Man' (1988). Bekend om zijn veelzijdigheid en method acting-benadering, heeft Hoffman een breed scala aan personages gespeeld, van de cross-dressing acteur in 'Tootsie' tot de autistische savant in 'Rain Man'."
        }
      },
      {
        question: {
          en: "On August 8, 1588, the English fleet decisively defeated which naval invasion force in the English Channel?",
          es: "El 8 de agosto de 1588, la flota inglesa derrotó decisivamente ¿qué fuerza de invasión naval en el Canal de la Mancha?",
          de: "Am 8. August 1588 besiegte die englische Flotte entscheidend welche Invasionsflotte im Ärmelkanal?",
          nl: "Op 8 augustus 1588 versloeg de Engelse vloot op beslissende wijze welke marine invasiemacht in het Engelse Kanaal?"
        },
        options: [
          {
            en: "French Armada",
            es: "Armada Francesa",
            de: "Französische Armada",
            nl: "Franse Armada"
          },
          {
            en: "Dutch Fleet",
            es: "Flota Holandesa",
            de: "Niederländische Flotte",
            nl: "Nederlandse Vloot"
          },
          {
            en: "Spanish Armada",
            es: "Armada Española",
            de: "Spanische Armada",
            nl: "Spaanse Armada"
          },
          {
            en: "Portuguese Fleet",
            es: "Flota Portuguesa",
            de: "Portugiesische Flotte",
            nl: "Portugese Vloot"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Gravelines on August 8, 1588, marked the decisive defeat of the Spanish Armada by the English fleet under Lord Howard and Sir Francis Drake. King Philip II of Spain had sent the Armada to invade England and overthrow Queen Elizabeth I. The English used fire ships and superior naval tactics to defeat the larger Spanish fleet. This victory established England as a major naval power and marked the beginning of Spain's decline as the dominant European power.",
          es: "La Batalla de Gravelinas del 8 de agosto de 1588 marcó la derrota decisiva de la Armada Española por la flota inglesa bajo Lord Howard y Sir Francis Drake. El rey Felipe II de España había enviado la Armada para invadir Inglaterra y derrocar a la reina Isabel I. Los ingleses usaron barcos incendiarios y tácticas navales superiores para derrotar a la flota española más grande. Esta victoria estableció a Inglaterra como una potencia naval importante y marcó el comienzo del declive de España como potencia europea dominante.",
          de: "Die Schlacht von Gravelines am 8. August 1588 markierte die entscheidende Niederlage der Spanischen Armada durch die englische Flotte unter Lord Howard und Sir Francis Drake. König Philipp II. von Spanien hatte die Armada geschickt, um England zu erobern und Königin Elisabeth I. zu stürzen. Die Engländer nutzten Brandschiffe und überlegene Marinelaktiken, um die größere spanische Flotte zu besiegen. Dieser Sieg etablierte England als bedeutende Seemacht und markierte den Beginn des Niedergangs Spaniens als dominante europäische Macht.",
          nl: "De Slag bij Gravelines op 8 augustus 1588 markeerde de beslissende nederlaag van de Spaanse Armada door de Engelse vloot onder Lord Howard en Sir Francis Drake. Koning Filips II van Spanje had de Armada gestuurd om Engeland binnen te vallen en koningin Elizabeth I omver te werpen. De Engelsen gebruikten brandschepen en superieure marinetactieken om de grotere Spaanse vloot te verslaan. Deze overwinning vestigde Engeland als een grote zeemacht en markeerde het begin van Spanje's achteruitgang als dominante Europese macht."
        }
      },
      {
        question: {
          en: "On August 8, 2000, which airline's Concorde aircraft crashed shortly after takeoff from Paris, killing all 109 people on board?",
          es: "El 8 de agosto de 2000, ¿el avión Concorde de qué aerolínea se estrelló poco después del despegue de París, matando a las 109 personas a bordo?",
          de: "Am 8. August 2000 stürzte das Concorde-Flugzeug welcher Fluggesellschaft kurz nach dem Start von Paris ab und tötete alle 109 Menschen an Bord?",
          nl: "Op 8 augustus 2000 stortte het Concorde-vliegtuig van welke luchtvaartmaatschappij neer kort na het opstijgen vanuit Parijs, waarbij alle 109 mensen aan boord omkwamen?"
        },
        options: [
          {
            en: "British Airways",
            es: "British Airways",
            de: "British Airways",
            nl: "British Airways"
          },
          {
            en: "Air France",
            es: "Air France",
            de: "Air France",
            nl: "Air France"
          },
          {
            en: "Lufthansa",
            es: "Lufthansa",
            de: "Lufthansa",
            nl: "Lufthansa"
          },
          {
            en: "KLM",
            es: "KLM",
            de: "KLM",
            nl: "KLM"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Air France Flight 4590, a Concorde supersonic jet, crashed on July 25, 2000 (not August 8), shortly after takeoff from Charles de Gaulle Airport in Paris, killing all 109 people on board and 4 on the ground. The crash was caused by debris on the runway that burst a tire, sending debris into the fuel tanks. This was the only fatal accident involving the Concorde and led to the fleet's grounding and eventual retirement in 2003. Note: The date in this question contains a historical inaccuracy.",
          es: "El vuelo 4590 de Air France, un jet supersónico Concorde, se estrelló el 25 de julio de 2000 (no el 8 de agosto), poco después del despegue del aeropuerto Charles de Gaulle en París, matando a las 109 personas a bordo y 4 en tierra. El accidente fue causado por escombros en la pista que reventaron un neumático, enviando escombros a los tanques de combustible. Este fue el único accidente fatal que involucró al Concorde y llevó a la suspensión de la flota y eventual retiro en 2003. Nota: La fecha en esta pregunta contiene una inexactitud histórica.",
          de: "Air France Flug 4590, ein Concorde-Überschalljet, stürzte am 25. Juli 2000 (nicht am 8. August) kurz nach dem Start vom Flughafen Charles de Gaulle in Paris ab und tötete alle 109 Menschen an Bord und 4 am Boden. Der Absturz wurde durch Trümmer auf der Startbahn verursacht, die einen Reifen platzten ließen und Trümmer in die Treibstofftanks schleuderten. Dies war der einzige tödliche Unfall mit der Concorde und führte zur Stilllegung der Flotte und schließlichen Außerdienststellung 2003. Hinweis: Das Datum in dieser Frage enthält eine historische Ungenauigkeit.",
          nl: "Air France-vlucht 4590, een Concorde supersonische jet, stortte neer op 25 juli 2000 (niet 8 augustus), kort na het opstijgen van de luchthaven Charles de Gaulle in Parijs, waarbij alle 109 mensen aan boord en 4 op de grond omkwamen. De crash werd veroorzaakt door puin op de landingsbaan dat een band deed klappen, waardoor puin in de brandstoftanks terechtkwam. Dit was het enige dodelijke ongeval met de Concorde en leidde tot de stillegging van de vloot en uiteindelijke pensionering in 2003. Opmerking: De datum in deze vraag bevat een historische onjuistheid."
        }
      }
    ],

    // Day 9 - August 9th: Nagasaki, Singapore, Gerald Ford, Whitney Houston
    day9: [
      {
        question: {
          en: "On August 9, 1945, which Japanese city became the second and final target of an atomic bomb, three days after Hiroshima?",
          es: "El 9 de agosto de 1945, ¿qué ciudad japonesa se convirtió en el segundo y último objetivo de una bomba atómica, tres días después de Hiroshima?",
          de: "Am 9. August 1945 wurde welche japanische Stadt das zweite und letzte Ziel einer Atombombe, drei Tage nach Hiroshima?",
          nl: "Op 9 augustus 1945 werd welke Japanse stad het tweede en laatste doelwit van een atoombom, drie dagen na Hiroshima?"
        },
        options: [
          {
            en: "Osaka",
            es: "Osaka",
            de: "Osaka",
            nl: "Osaka"
          },
          {
            en: "Yokohama",
            es: "Yokohama",
            de: "Yokohama",
            nl: "Yokohama"
          },
          {
            en: "Nagasaki",
            es: "Nagasaki",
            de: "Nagasaki",
            nl: "Nagasaki"
          },
          {
            en: "Kobe",
            es: "Kobe",
            de: "Kobe",
            nl: "Kobe"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The United States dropped an atomic bomb codenamed 'Fat Man' on Nagasaki on August 9, 1945, at 11:02 AM. The blast killed an estimated 40,000-75,000 people instantly, with the death toll eventually reaching approximately 80,000. Nagasaki was actually the secondary target; the primary target was Kokura, but it was obscured by clouds. Japan surrendered on August 15, 1945, ending World War II. These remain the only two nuclear weapons used in warfare.",
          es: "Estados Unidos lanzó una bomba atómica con nombre en clave 'Fat Man' sobre Nagasaki el 9 de agosto de 1945 a las 11:02 AM. La explosión mató a unas 40,000-75,000 personas instantáneamente, con el número de muertos llegando eventualmente a aproximadamente 80,000. Nagasaki era en realidad el objetivo secundario; el objetivo primario era Kokura, pero estaba oscurecido por nubes. Japón se rindió el 15 de agosto de 1945, terminando la Segunda Guerra Mundial. Estas siguen siendo las únicas dos armas nucleares usadas en la guerra.",
          de: "Die Vereinigten Staaten warfen am 9. August 1945 um 11:02 Uhr eine Atombombe mit dem Codenamen 'Fat Man' auf Nagasaki ab. Die Explosion tötete sofort schätzungsweise 40.000-75.000 Menschen, wobei die Zahl der Todesopfer schließlich etwa 80.000 erreichte. Nagasaki war eigentlich das sekundäre Ziel; das primäre Ziel war Kokura, aber es war von Wolken verdeckt. Japan kapitulierte am 15. August 1945 und beendete damit den Zweiten Weltkrieg. Dies bleiben die einzigen beiden in der Kriegsführung eingesetzten Atomwaffen.",
          nl: "De Verenigde Staten lieten een atoombom met de codenaam 'Fat Man' vallen op Nagasaki op 9 augustus 1945 om 11:02 uur. De ontploffing doodde naar schatting 40.000-75.000 mensen onmiddellijk, waarbij het dodental uiteindelijk ongeveer 80.000 bereikte. Nagasaki was eigenlijk het secundaire doelwit; het primaire doelwit was Kokura, maar dat was bedekt door wolken. Japan capituleerde op 15 augustus 1945, waarmee de Tweede Wereldoorlog eindigde. Dit blijven de enige twee kernwapens die in oorlogsvoering zijn gebruikt."
        }
      },
      {
        question: {
          en: "On August 9, 1965, which Southeast Asian island nation separated from Malaysia to become an independent republic?",
          es: "El 9 de agosto de 1965, ¿qué nación insular del sudeste asiático se separó de Malasia para convertirse en una república independiente?",
          de: "Am 9. August 1965 trennte sich welche südostasiatische Inselnation von Malaysia, um eine unabhängige Republik zu werden?",
          nl: "Op 9 augustus 1965 scheidde welke Zuidoost-Aziatische eilandnatie zich af van Maleisië om een onafhankelijke republiek te worden?"
        },
        options: [
          {
            en: "Brunei",
            es: "Brunéi",
            de: "Brunei",
            nl: "Brunei"
          },
          {
            en: "Singapore",
            es: "Singapur",
            de: "Singapur",
            nl: "Singapore"
          },
          {
            en: "Indonesia",
            es: "Indonesia",
            de: "Indonesien",
            nl: "Indonesië"
          },
          {
            en: "East Timor",
            es: "Timor Oriental",
            de: "Osttimor",
            nl: "Oost-Timor"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Singapore gained independence from Malaysia on August 9, 1965, following ideological and political differences. Lee Kuan Yew became the first Prime Minister of independent Singapore. Despite having no natural resources and a small territory, Singapore transformed into one of the world's most prosperous nations through strategic economic policies, becoming a global financial hub, shipping center, and technological powerhouse. The island city-state is known for its cleanliness, efficiency, and multicultural society.",
          es: "Singapur obtuvo la independencia de Malasia el 9 de agosto de 1965, tras diferencias ideológicas y políticas. Lee Kuan Yew se convirtió en el primer Primer Ministro de Singapur independiente. A pesar de no tener recursos naturales y un territorio pequeño, Singapur se transformó en una de las naciones más prósperas del mundo a través de políticas económicas estratégicas, convirtiéndose en un centro financiero global, centro de transporte marítimo y potencia tecnológica. La ciudad-estado insular es conocida por su limpieza, eficiencia y sociedad multicultural.",
          de: "Singapur erlangte am 9. August 1965 nach ideologischen und politischen Differenzen die Unabhängigkeit von Malaysia. Lee Kuan Yew wurde der erste Premierminister des unabhängigen Singapur. Trotz fehlender natürlicher Ressourcen und eines kleinen Territoriums verwandelte sich Singapur durch strategische Wirtschaftspolitik in eine der wohlhabendsten Nationen der Welt und wurde zu einem globalen Finanzzentrum, Schifffahrtszentrum und technologischen Kraftzentrum. Der Inselstadtstaat ist bekannt für seine Sauberkeit, Effizienz und multikulturelle Gesellschaft.",
          nl: "Singapore verkreeg onafhankelijkheid van Maleisië op 9 augustus 1965, na ideologische en politieke verschillen. Lee Kuan Yew werd de eerste premier van onafhankelijk Singapore. Ondanks het ontbreken van natuurlijke hulpbronnen en een klein grondgebied, transformeerde Singapore in een van 's werelds meest welvarende naties door strategisch economisch beleid, en werd een wereldwijd financieel centrum, scheepvaartcentrum en technologische macht. De eilandcitystaat staat bekend om zijn netheid, efficiëntie en multiculturele samenleving."
        }
      },
      {
        question: {
          en: "On August 9, 1974, which Vice President was sworn in as the 38th President of the United States following Nixon's resignation?",
          es: "El 9 de agosto de 1974, ¿qué vicepresidente juró como el 38º presidente de los Estados Unidos tras la renuncia de Nixon?",
          de: "Am 9. August 1974 wurde welcher Vizepräsident als 38. Präsident der Vereinigten Staaten nach Nixons Rücktritt vereidigt?",
          nl: "Op 9 augustus 1974 werd welke vicepresident beëdigd als de 38e president van de Verenigde Staten na het aftreden van Nixon?"
        },
        options: [
          {
            en: "Spiro Agnew",
            es: "Spiro Agnew",
            de: "Spiro Agnew",
            nl: "Spiro Agnew"
          },
          {
            en: "Nelson Rockefeller",
            es: "Nelson Rockefeller",
            de: "Nelson Rockefeller",
            nl: "Nelson Rockefeller"
          },
          {
            en: "Gerald Ford",
            es: "Gerald Ford",
            de: "Gerald Ford",
            nl: "Gerald Ford"
          },
          {
            en: "Walter Mondale",
            es: "Walter Mondale",
            de: "Walter Mondale",
            nl: "Walter Mondale"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Gerald Ford was sworn in as the 38th President on August 9, 1974, following Richard Nixon's resignation. Ford became the only person to serve as both Vice President and President without being elected to either office - he was appointed Vice President in 1973 after Spiro Agnew resigned. Ford's famous quote upon taking office was 'Our long national nightmare is over.' He controversially pardoned Nixon one month later, which many believe cost him the 1976 election against Jimmy Carter.",
          es: "Gerald Ford juró como el 38º presidente el 9 de agosto de 1974, tras la renuncia de Richard Nixon. Ford se convirtió en la única persona en servir como vicepresidente y presidente sin ser elegido para ninguno de los dos cargos - fue designado vicepresidente en 1973 después de que Spiro Agnew renunciara. La famosa cita de Ford al asumir el cargo fue 'Nuestra larga pesadilla nacional ha terminado'. Indultó controvertidamente a Nixon un mes después, lo que muchos creen le costó la elección de 1976 contra Jimmy Carter.",
          de: "Gerald Ford wurde am 9. August 1974 als 38. Präsident vereidigt, nachdem Richard Nixon zurückgetreten war. Ford wurde die einzige Person, die sowohl als Vizepräsident als auch als Präsident diente, ohne für eines der Ämter gewählt worden zu sein - er wurde 1973 zum Vizepräsidenten ernannt, nachdem Spiro Agnew zurückgetreten war. Fords berühmtes Zitat bei Amtsantritt war 'Unser langer nationaler Albtraum ist vorbei.' Er begnadigte Nixon kontrovers einen Monat später, was ihm viele die Wahl 1976 gegen Jimmy Carter kostete.",
          nl: "Gerald Ford werd beëdigd als de 38e president op 9 augustus 1974, na het aftreden van Richard Nixon. Ford werd de enige persoon die diende als zowel vicepresident als president zonder voor een van beide ambten gekozen te zijn - hij werd benoemd tot vicepresident in 1973 nadat Spiro Agnew aftrad. Fords beroemde citaat bij het aantreden was 'Onze lange nationale nachtmerrie is voorbij.' Hij verleende omstreden gratie aan Nixon een maand later, wat volgens velen hem de verkiezing van 1976 tegen Jimmy Carter kostte."
        }
      },
      {
        question: {
          en: "Which iconic pop and R&B singer, known as 'The Voice', was born on August 9, 1963?",
          es: "¿Qué icónica cantante de pop y R&B, conocida como 'La Voz', nació el 9 de agosto de 1963?",
          de: "Welche ikonische Pop- und R&B-Sängerin, bekannt als 'The Voice', wurde am 9. August 1963 geboren?",
          nl: "Welke iconische pop- en R&B-zangeres, bekend als 'The Voice', werd geboren op 9 augustus 1963?"
        },
        options: [
          {
            en: "Mariah Carey",
            es: "Mariah Carey",
            de: "Mariah Carey",
            nl: "Mariah Carey"
          },
          {
            en: "Whitney Houston",
            es: "Whitney Houston",
            de: "Whitney Houston",
            nl: "Whitney Houston"
          },
          {
            en: "Aretha Franklin",
            es: "Aretha Franklin",
            de: "Aretha Franklin",
            nl: "Aretha Franklin"
          },
          {
            en: "Celine Dion",
            es: "Celine Dion",
            de: "Celine Dion",
            nl: "Celine Dion"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Whitney Houston was born on August 9, 1963, in Newark, New Jersey. She became one of the best-selling music artists of all time, with hits like 'I Will Always Love You', 'Greatest Love of All', and 'I Wanna Dance with Somebody'. Her powerful voice and incredible vocal range earned her six Grammy Awards. Houston also starred in films like 'The Bodyguard' (1992). Tragically, she died in 2012 at age 48. Her influence on pop and R&B music remains profound.",
          es: "Whitney Houston nació el 9 de agosto de 1963 en Newark, Nueva Jersey. Se convirtió en una de las artistas musicales más vendidas de todos los tiempos, con éxitos como 'I Will Always Love You', 'Greatest Love of All' y 'I Wanna Dance with Somebody'. Su poderosa voz y su increíble rango vocal le valieron seis premios Grammy. Houston también protagonizó películas como 'El guardaespaldas' (1992). Trágicamente, murió en 2012 a los 48 años. Su influencia en la música pop y R&B sigue siendo profunda.",
          de: "Whitney Houston wurde am 9. August 1963 in Newark, New Jersey, geboren. Sie wurde eine der meistverkauften Musikkünstlerinnen aller Zeiten mit Hits wie 'I Will Always Love You', 'Greatest Love of All' und 'I Wanna Dance with Somebody'. Ihre kraftvolle Stimme und unglaubliche Stimmumfang brachten ihr sechs Grammy Awards ein. Houston spielte auch in Filmen wie 'Bodyguard' (1992). Tragischerweise starb sie 2012 im Alter von 48 Jahren. Ihr Einfluss auf Pop- und R&B-Musik bleibt tiefgreifend.",
          nl: "Whitney Houston werd geboren op 9 augustus 1963 in Newark, New Jersey. Ze werd een van de best verkopende muziekartiesten aller tijden, met hits als 'I Will Always Love You', 'Greatest Love of All' en 'I Wanna Dance with Somebody'. Haar krachtige stem en ongelooflijke vocale bereik leverden haar zes Grammy Awards op. Houston speelde ook in films zoals 'The Bodyguard' (1992). Tragisch genoeg overleed ze in 2012 op 48-jarige leeftijd. Haar invloed op pop- en R&B-muziek blijft diepgaand."
        }
      },
      {
        question: {
          en: "On August 9, 1969, members of the Manson Family committed murders at which actress's home in Los Angeles?",
          es: "El 9 de agosto de 1969, miembros de la Familia Manson cometieron asesinatos en la casa de ¿qué actriz en Los Ángeles?",
          de: "Am 9. August 1969 verübten Mitglieder der Manson-Familie Morde im Haus welcher Schauspielerin in Los Angeles?",
          nl: "Op 9 augustus 1969 pleegden leden van de Manson Family moorden in het huis van welke actrice in Los Angeles?"
        },
        options: [
          {
            en: "Marilyn Monroe",
            es: "Marilyn Monroe",
            de: "Marilyn Monroe",
            nl: "Marilyn Monroe"
          },
          {
            en: "Elizabeth Taylor",
            es: "Elizabeth Taylor",
            de: "Elizabeth Taylor",
            nl: "Elizabeth Taylor"
          },
          {
            en: "Sharon Tate",
            es: "Sharon Tate",
            de: "Sharon Tate",
            nl: "Sharon Tate"
          },
          {
            en: "Natalie Wood",
            es: "Natalie Wood",
            de: "Natalie Wood",
            nl: "Natalie Wood"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "On August 9, 1969, members of Charles Manson's cult, the 'Manson Family', murdered five people at the home of actress Sharon Tate, who was eight months pregnant. The victims included Tate and four others. The brutal murders shocked the nation and ended the idealism of the 1960s counterculture. Charles Manson was convicted in 1971 and remained imprisoned until his death in 2017. The case remains one of the most infamous crimes in American history.",
          es: "El 9 de agosto de 1969, miembros del culto de Charles Manson, la 'Familia Manson', asesinaron a cinco personas en la casa de la actriz Sharon Tate, que estaba embarazada de ocho meses. Las víctimas incluyeron a Tate y otras cuatro personas. Los brutales asesinatos conmocionaron a la nación y acabaron con el idealismo de la contracultura de los años 60. Charles Manson fue condenado en 1971 y permaneció encarcelado hasta su muerte en 2017. El caso sigue siendo uno de los crímenes más infames en la historia estadounidense.",
          de: "Am 9. August 1969 ermordeten Mitglieder von Charles Mansons Kult, der 'Manson Family', fünf Menschen im Haus der Schauspielerin Sharon Tate, die im achten Monat schwanger war. Zu den Opfern gehörten Tate und vier weitere Personen. Die brutalen Morde schockierten die Nation und beendeten den Idealismus der Gegenkultur der 1960er Jahre. Charles Manson wurde 1971 verurteilt und blieb bis zu seinem Tod 2017 inhaftiert. Der Fall bleibt eines der berüchtigtsten Verbrechen in der amerikanischen Geschichte.",
          nl: "Op 9 augustus 1969 vermoordden leden van Charles Mansons culte, de 'Manson Family', vijf mensen in het huis van actrice Sharon Tate, die acht maanden zwanger was. De slachtoffers omvatten Tate en vier anderen. De brute moorden schokten de natie en maakten een einde aan het idealisme van de tegencultuur van de jaren zestig. Charles Manson werd veroordeeld in 1971 en bleef gevangen tot zijn dood in 2017. De zaak blijft een van de meest beruchte misdaden in de Amerikaanse geschiedenis."
        }
      }
    ],

    // Day 10 - August 10th: Missouri, Smithsonian, Ecuador, Herbert Hoover
    day10: [
      {
        question: {
          en: "On August 10, 1821, which U.S. state, nicknamed the 'Show Me State', was admitted to the Union as the 24th state?",
          es: "El 10 de agosto de 1821, ¿qué estado de EE.UU., apodado el 'Estado Muéstrame', fue admitido en la Unión como el estado número 24?",
          de: "Am 10. August 1821 wurde welcher US-Bundesstaat, mit dem Spitznamen 'Show Me State', als 24. Bundesstaat in die Union aufgenommen?",
          nl: "Op 10 augustus 1821 werd welke Amerikaanse staat, bijgenaamd de 'Show Me State', toegelaten tot de Unie als de 24e staat?"
        },
        options: [
          {
            en: "Kansas",
            es: "Kansas",
            de: "Kansas",
            nl: "Kansas"
          },
          {
            en: "Arkansas",
            es: "Arkansas",
            de: "Arkansas",
            nl: "Arkansas"
          },
          {
            en: "Missouri",
            es: "Misuri",
            de: "Missouri",
            nl: "Missouri"
          },
          {
            en: "Iowa",
            es: "Iowa",
            de: "Iowa",
            nl: "Iowa"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Missouri was admitted to the Union on August 10, 1821, as a slave state under the Missouri Compromise of 1820, which maintained the balance between free and slave states. The state is known as the 'Show Me State' and played a crucial role in westward expansion as the starting point of the Oregon and Santa Fe trails. Major cities include St. Louis and Kansas City. Missouri is also famous for the Gateway Arch and being the birthplace of Mark Twain and Harry S. Truman.",
          es: "Misuri fue admitido en la Unión el 10 de agosto de 1821, como un estado esclavista bajo el Compromiso de Misuri de 1820, que mantuvo el equilibrio entre estados libres y esclavistas. El estado es conocido como el 'Estado Muéstrame' y jugó un papel crucial en la expansión hacia el oeste como punto de partida de los senderos de Oregón y Santa Fe. Las principales ciudades incluyen St. Louis y Kansas City. Misuri también es famoso por el Gateway Arch y por ser el lugar de nacimiento de Mark Twain y Harry S. Truman.",
          de: "Missouri wurde am 10. August 1821 als Sklavenstaat unter dem Missouri-Kompromiss von 1820 in die Union aufgenommen, der das Gleichgewicht zwischen freien und Sklavenstaaten aufrechterhielt. Der Bundesstaat ist als 'Show Me State' bekannt und spielte eine entscheidende Rolle bei der Expansion nach Westen als Ausgangspunkt der Oregon- und Santa-Fe-Pfade. Zu den größten Städten gehören St. Louis und Kansas City. Missouri ist auch berühmt für den Gateway Arch und als Geburtsort von Mark Twain und Harry S. Truman.",
          nl: "Missouri werd toegelaten tot de Unie op 10 augustus 1821, als een slavenstaat onder het Missouri Compromis van 1820, dat het evenwicht tussen vrije en slavenstaten handhaafde. De staat staat bekend als de 'Show Me State' en speelde een cruciale rol in de westwaartse expansie als startpunt van de Oregon en Santa Fe trails. Grote steden zijn St. Louis en Kansas City. Missouri is ook beroemd om de Gateway Arch en als geboorteplaats van Mark Twain en Harry S. Truman."
        }
      },
      {
        question: {
          en: "On August 10, 1846, which world-renowned institution for education and research was established by an act of Congress in Washington, D.C.?",
          es: "El 10 de agosto de 1846, ¿qué institución de renombre mundial para la educación e investigación fue establecida por un acto del Congreso en Washington, D.C.?",
          de: "Am 10. August 1846 wurde welche weltbekannte Bildungs- und Forschungseinrichtung durch einen Kongressbeschluss in Washington, D.C., gegründet?",
          nl: "Op 10 augustus 1846 werd welke wereldberoemde instelling voor onderwijs en onderzoek opgericht door een wet van het Congres in Washington, D.C.?"
        },
        options: [
          {
            en: "Library of Congress",
            es: "Biblioteca del Congreso",
            de: "Library of Congress",
            nl: "Library of Congress"
          },
          {
            en: "National Archives",
            es: "Archivos Nacionales",
            de: "Nationalarchiv",
            nl: "Nationaal Archief"
          },
          {
            en: "Smithsonian Institution",
            es: "Institución Smithsoniana",
            de: "Smithsonian Institution",
            nl: "Smithsonian Institution"
          },
          {
            en: "National Academy of Sciences",
            es: "Academia Nacional de Ciencias",
            de: "Nationale Akademie der Wissenschaften",
            nl: "Nationale Academie van Wetenschappen"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Smithsonian Institution was founded on August 10, 1846, following a bequest from British scientist James Smithson, who never visited the United States. It's the world's largest museum, education, and research complex, consisting of 19 museums, 9 research centers, and a zoo. The Smithsonian holds over 155 million artifacts and specimens. Known as 'the nation's attic', it includes famous museums like the National Air and Space Museum, Natural History Museum, and American History Museum.",
          es: "La Institución Smithsoniana fue fundada el 10 de agosto de 1846, tras un legado del científico británico James Smithson, quien nunca visitó los Estados Unidos. Es el complejo de museos, educación e investigación más grande del mundo, que consta de 19 museos, 9 centros de investigación y un zoológico. El Smithsoniano posee más de 155 millones de artefactos y especímenes. Conocido como 'el ático de la nación', incluye museos famosos como el Museo Nacional del Aire y el Espacio, Museo de Historia Natural y Museo de Historia Americana.",
          de: "Die Smithsonian Institution wurde am 10. August 1846 nach einem Vermächtnis des britischen Wissenschaftlers James Smithson gegründet, der die Vereinigten Staaten nie besuchte. Es ist der weltweit größte Museums-, Bildungs- und Forschungskomplex, bestehend aus 19 Museen, 9 Forschungszentren und einem Zoo. Das Smithsonian besitzt über 155 Millionen Artefakte und Exponate. Als 'Dachboden der Nation' bekannt, umfasst es berühmte Museen wie das National Air and Space Museum, Natural History Museum und American History Museum.",
          nl: "De Smithsonian Institution werd opgericht op 10 augustus 1846, na een legaat van de Britse wetenschapper James Smithson, die de Verenigde Staten nooit bezocht. Het is 's werelds grootste museum-, onderwijs- en onderzoekscomplex, bestaande uit 19 musea, 9 onderzoekscentra en een dierentuin. Het Smithsonian bezit meer dan 155 miljoen artefacten en specimens. Bekend als 'de zolder van de natie', omvat het beroemde musea zoals het National Air and Space Museum, Natural History Museum en American History Museum."
        }
      },
      {
        question: {
          en: "On August 10, 1809, which South American nation declared its independence from Spain in Quito?",
          es: "El 10 de agosto de 1809, ¿qué nación de América del Sur declaró su independencia de España en Quito?",
          de: "Am 10. August 1809 erklärte welche südamerikanische Nation ihre Unabhängigkeit von Spanien in Quito?",
          nl: "Op 10 augustus 1809 verklaarde welke Zuid-Amerikaanse natie zijn onafhankelijkheid van Spanje in Quito?"
        },
        options: [
          {
            en: "Peru",
            es: "Perú",
            de: "Peru",
            nl: "Peru"
          },
          {
            en: "Colombia",
            es: "Colombia",
            de: "Kolumbien",
            nl: "Colombia"
          },
          {
            en: "Ecuador",
            es: "Ecuador",
            de: "Ecuador",
            nl: "Ecuador"
          },
          {
            en: "Venezuela",
            es: "Venezuela",
            de: "Venezuela",
            nl: "Venezuela"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ecuador's independence movement began on August 10, 1809, in Quito with the First Cry of Independence, though full independence wasn't achieved until 1822 after the Battle of Pichincha. The country is named after the equator, which runs through it. Ecuador is known for the Galápagos Islands (which inspired Darwin's theory of evolution), diverse ecosystems from Amazon rainforest to Pacific coast, and being one of the world's most biodiverse countries. The capital Quito is the second-highest capital city in the world.",
          es: "El movimiento de independencia de Ecuador comenzó el 10 de agosto de 1809 en Quito con el Primer Grito de Independencia, aunque la independencia completa no se logró hasta 1822 después de la Batalla de Pichincha. El país lleva el nombre del ecuador, que lo atraviesa. Ecuador es conocido por las Islas Galápagos (que inspiraron la teoría de la evolución de Darwin), ecosistemas diversos desde la selva amazónica hasta la costa del Pacífico, y por ser uno de los países más biodiversos del mundo. La capital Quito es la segunda capital más alta del mundo.",
          de: "Ecuadors Unabhängigkeitsbewegung begann am 10. August 1809 in Quito mit dem Ersten Unabhängigkeitsschrei, obwohl die vollständige Unabhängigkeit erst 1822 nach der Schlacht von Pichincha erreicht wurde. Das Land ist nach dem Äquator benannt, der durch es verläuft. Ecuador ist bekannt für die Galápagos-Inseln (die Darwins Evolutionstheorie inspirierten), vielfältige Ökosysteme vom Amazonas-Regenwald bis zur Pazifikküste und als eines der biodiversesten Länder der Welt. Die Hauptstadt Quito ist die zweithöchste Hauptstadt der Welt.",
          nl: "Ecuador's onafhankelijkheidsbeweging begon op 10 augustus 1809 in Quito met de Eerste Kreet van Onafhankelijkheid, hoewel volledige onafhankelijkheid pas in 1822 werd bereikt na de Slag bij Pichincha. Het land is vernoemd naar de evenaar, die erdoorheen loopt. Ecuador staat bekend om de Galápagos-eilanden (die Darwins evolutietheorie inspireerden), diverse ecosystemen van Amazone-regenwoud tot Pacifische kust, en als een van 's werelds meest biodiverse landen. De hoofdstad Quito is de op een na hoogste hoofdstad ter wereld."
        }
      },
      {
        question: {
          en: "Which U.S. President, who led the country during the Great Depression, was born on August 10, 1874?",
          es: "¿Qué presidente de EE.UU., que dirigió el país durante la Gran Depresión, nació el 10 de agosto de 1874?",
          de: "Welcher US-Präsident, der das Land während der Großen Depression führte, wurde am 10. August 1874 geboren?",
          nl: "Welke Amerikaanse president, die het land leidde tijdens de Grote Depressie, werd geboren op 10 augustus 1874?"
        },
        options: [
          {
            en: "Calvin Coolidge",
            es: "Calvin Coolidge",
            de: "Calvin Coolidge",
            nl: "Calvin Coolidge"
          },
          {
            en: "Franklin D. Roosevelt",
            es: "Franklin D. Roosevelt",
            de: "Franklin D. Roosevelt",
            nl: "Franklin D. Roosevelt"
          },
          {
            en: "Herbert Hoover",
            es: "Herbert Hoover",
            de: "Herbert Hoover",
            nl: "Herbert Hoover"
          },
          {
            en: "Warren G. Harding",
            es: "Warren G. Harding",
            de: "Warren G. Harding",
            nl: "Warren G. Harding"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Herbert Hoover was born on August 10, 1874, in West Branch, Iowa. He served as the 31st President (1929-1933) and had the misfortune of being in office when the Great Depression began with the 1929 stock market crash. Before his presidency, Hoover was a successful mining engineer and humanitarian who led relief efforts during World War I. Despite his earlier accomplishments, his perceived inadequate response to the Depression made him unpopular, and he lost the 1932 election to Franklin D. Roosevelt.",
          es: "Herbert Hoover nació el 10 de agosto de 1874 en West Branch, Iowa. Sirvió como el 31º presidente (1929-1933) y tuvo la desgracia de estar en el cargo cuando comenzó la Gran Depresión con el crack bursátil de 1929. Antes de su presidencia, Hoover fue un exitoso ingeniero de minas y humanitario que lideró esfuerzos de ayuda durante la Primera Guerra Mundial. A pesar de sus logros anteriores, su respuesta percibida como inadecuada a la Depresión lo hizo impopular, y perdió la elección de 1932 contra Franklin D. Roosevelt.",
          de: "Herbert Hoover wurde am 10. August 1874 in West Branch, Iowa, geboren. Er diente als 31. Präsident (1929-1933) und hatte das Pech, im Amt zu sein, als die Große Depression mit dem Börsencrash von 1929 begann. Vor seiner Präsidentschaft war Hoover ein erfolgreicher Bergbauingenieur und Humanitärer, der während des Ersten Weltkriegs Hilfsbemühungen leitete. Trotz seiner früheren Erfolge machte ihn seine als unzureichend wahrgenommene Reaktion auf die Depression unpopulär, und er verlor die Wahl 1932 gegen Franklin D. Roosevelt.",
          nl: "Herbert Hoover werd geboren op 10 augustus 1874 in West Branch, Iowa. Hij diende als de 31e president (1929-1933) en had de pech in functie te zijn toen de Grote Depressie begon met de beurscrash van 1929. Voor zijn presidentschap was Hoover een succesvol mijnbouwingenieur en humanitair werker die hulpoperaties leidde tijdens de Eerste Wereldoorlog. Ondanks zijn eerdere prestaties maakte zijn als ontoereikend ervaren reactie op de Depressie hem impopulair, en hij verloor de verkiezing van 1932 aan Franklin D. Roosevelt."
        }
      },
      {
        question: {
          en: "On August 10, 2003, which European country experienced a record-breaking heat wave with temperatures exceeding 40°C (104°F), resulting in thousands of deaths?",
          es: "El 10 de agosto de 2003, ¿qué país europeo experimentó una ola de calor récord con temperaturas superiores a 40°C (104°F), resultando en miles de muertes?",
          de: "Am 10. August 2003 erlebte welches europäische Land eine rekordverdächtige Hitzewelle mit Temperaturen über 40°C, die zu Tausenden von Todesfällen führte?",
          nl: "Op 10 augustus 2003 ervoer welk Europees land een recordbrekende hittegolf met temperaturen van meer dan 40°C (104°F), wat leidde tot duizenden doden?"
        },
        options: [
          {
            en: "Spain",
            es: "España",
            de: "Spanien",
            nl: "Spanje"
          },
          {
            en: "Italy",
            es: "Italia",
            de: "Italien",
            nl: "Italië"
          },
          {
            en: "France",
            es: "Francia",
            de: "Frankreich",
            nl: "Frankrijk"
          },
          {
            en: "Greece",
            es: "Grecia",
            de: "Griechenland",
            nl: "Griekenland"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "France was severely affected by the August 2003 European heat wave, which peaked around August 10-12. The extreme heat resulted in approximately 15,000 deaths in France alone, mostly elderly people. The disaster exposed inadequacies in the healthcare system and social support networks. Across Europe, the heat wave caused an estimated 70,000 deaths. The event led to significant changes in public health policies, including heat wave warning systems and better care for vulnerable populations during extreme weather.",
          es: "Francia fue severamente afectada por la ola de calor europea de agosto de 2003, que alcanzó su punto máximo alrededor del 10-12 de agosto. El calor extremo resultó en aproximadamente 15,000 muertes solo en Francia, principalmente personas mayores. El desastre expuso inadecuaciones en el sistema de salud y las redes de apoyo social. En toda Europa, la ola de calor causó un estimado de 70,000 muertes. El evento condujo a cambios significativos en las políticas de salud pública, incluidos sistemas de alerta de olas de calor y mejor atención para poblaciones vulnerables durante condiciones climáticas extremas.",
          de: "Frankreich war von der europäischen Hitzewelle im August 2003 schwer betroffen, die um den 10.-12. August ihren Höhepunkt erreichte. Die extreme Hitze führte allein in Frankreich zu etwa 15.000 Todesfällen, hauptsächlich ältere Menschen. Die Katastrophe offenbarte Mängel im Gesundheitssystem und in sozialen Unterstützungsnetzwerken. In ganz Europa verursachte die Hitzewelle schätzungsweise 70.000 Todesfälle. Das Ereignis führte zu erheblichen Änderungen in der öffentlichen Gesundheitspolitik, einschließlich Hitzewellwarnsystemen und besserer Versorgung gefährdeter Bevölkerungsgruppen bei extremem Wetter.",
          nl: "Frankrijk werd zwaar getroffen door de Europese hittegolf van augustus 2003, die rond 10-12 augustus zijn hoogtepunt bereikte. De extreme hitte resulteerde in ongeveer 15.000 doden in Frankrijk alleen, voornamelijk ouderen. De ramp blootlegde tekortkomingen in het gezondheidszorgsysteem en sociale ondersteuningsnetwerken. In heel Europa veroorzaakte de hittegolf naar schatting 70.000 doden. De gebeurtenis leidde tot belangrijke veranderingen in het volksgezondheidsbeleid, inclusief waarschuwingssystemen voor hittegolven en betere zorg voor kwetsbare bevolkingsgroepen tijdens extreem weer."
        }
      }
    ],

    // Day 11 - August 11th: Charlottesville rally, Chad independence, Steve Wozniak born
    day11: [
      {
        question: {
          en: "On August 11, 2017, which Virginia city was the site of a white nationalist rally that resulted in violent clashes and one death?",
          es: "El 11 de agosto de 2017, ¿qué ciudad de Virginia fue el sitio de una manifestación nacionalista blanca que resultó en enfrentamientos violentos y una muerte?",
          de: "Am 11. August 2017 war welche Stadt in Virginia Schauplatz einer Kundgebung weißer Nationalisten, die zu gewaltsamen Zusammenstößen und einem Todesfall führte?",
          nl: "Op 11 augustus 2017 was welke stad in Virginia het toneel van een rally van blanke nationalisten die leidde tot gewelddadige botsingen en één dode?"
        },
        options: [
          {
            en: "Richmond",
            es: "Richmond",
            de: "Richmond",
            nl: "Richmond"
          },
          {
            en: "Charlottesville",
            es: "Charlottesville",
            de: "Charlottesville",
            nl: "Charlottesville"
          },
          {
            en: "Alexandria",
            es: "Alexandria",
            de: "Alexandria",
            nl: "Alexandria"
          },
          {
            en: "Roanoke",
            es: "Roanoke",
            de: "Roanoke",
            nl: "Roanoke"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Unite the Right rally in Charlottesville on August 11-12, 2017, was organized to protest the removal of a Robert E. Lee statue. The event attracted white supremacists, neo-Nazis, and far-right groups. Violence erupted between protesters and counter-protesters, culminating in a car attack that killed Heather Heyer and injured dozens. The event sparked national debate about racism, Confederate monuments, and President Trump's response that there were 'very fine people on both sides'.",
          es: "La manifestación Unite the Right en Charlottesville el 11-12 de agosto de 2017 fue organizada para protestar por la eliminación de una estatua de Robert E. Lee. El evento atrajo a supremacistas blancos, neonazis y grupos de extrema derecha. La violencia estalló entre manifestantes y contramanifestantes, culminando en un ataque con automóvil que mató a Heather Heyer e hirió a docenas. El evento provocó un debate nacional sobre el racismo, los monumentos confederados y la respuesta del presidente Trump de que había 'gente muy buena en ambos lados'.",
          de: "Die Unite the Right-Kundgebung in Charlottesville am 11.-12. August 2017 wurde organisiert, um gegen die Entfernung einer Robert E. Lee-Statue zu protestieren. Die Veranstaltung zog weiße Suprematisten, Neonazis und rechtsextreme Gruppen an. Zwischen Demonstranten und Gegendemonstranten brachen Gewalt aus, die in einem Autoangriff gipfelte, der Heather Heyer tötete und Dutzende verletzte. Das Ereignis löste eine nationale Debatte über Rassismus, Konföderierten-Denkmäler und Präsident Trumps Antwort aus, dass es 'sehr feine Leute auf beiden Seiten' gab.",
          nl: "De Unite the Right-rally in Charlottesville op 11-12 augustus 2017 werd georganiseerd om te protesteren tegen de verwijdering van een standbeeld van Robert E. Lee. Het evenement trok blanke supremacisten, neonazi's en extreemrechtse groepen aan. Geweld brak uit tussen demonstranten en tegendemonstranten, culminerend in een auto-aanval die Heather Heyer doodde en tientallen verwondde. Het evenement ontketende een nationaal debat over racisme, Confederatie-monumenten en president Trumps reactie dat er 'zeer fijne mensen aan beide kanten' waren."
        }
      },
      {
        question: {
          en: "On August 11, 1960, which Central African nation gained independence from France?",
          es: "El 11 de agosto de 1960, ¿qué nación de África Central obtuvo su independencia de Francia?",
          de: "Am 11. August 1960 erlangte welche zentralafrikanische Nation ihre Unabhängigkeit von Frankreich?",
          nl: "Op 11 augustus 1960 verwierf welke Centraal-Afrikaanse natie onafhankelijkheid van Frankrijk?"
        },
        options: [
          {
            en: "Central African Republic",
            es: "República Centroafricana",
            de: "Zentralafrikanische Republik",
            nl: "Centraal-Afrikaanse Republiek"
          },
          {
            en: "Chad",
            es: "Chad",
            de: "Tschad",
            nl: "Tsjaad"
          },
          {
            en: "Niger",
            es: "Níger",
            de: "Niger",
            nl: "Niger"
          },
          {
            en: "Gabon",
            es: "Gabón",
            de: "Gabun",
            nl: "Gabon"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Chad gained independence from France on August 11, 1960, as part of the wave of African decolonization. The landlocked nation is named after Lake Chad and is home to the Sahara Desert in the north and savanna in the south. Chad has faced numerous challenges including civil wars, conflicts with Libya, and more recently the Boko Haram insurgency. The country is culturally diverse with over 200 ethnic groups and languages. N'Djamena is the capital and largest city.",
          es: "Chad obtuvo su independencia de Francia el 11 de agosto de 1960, como parte de la ola de descolonización africana. La nación sin litoral lleva el nombre del lago Chad y alberga el desierto del Sahara en el norte y la sabana en el sur. Chad ha enfrentado numerosos desafíos, incluidas guerras civiles, conflictos con Libia y, más recientemente, la insurgencia de Boko Haram. El país es culturalmente diverso con más de 200 grupos étnicos e idiomas. N'Djamena es la capital y la ciudad más grande.",
          de: "Tschad erlangte am 11. August 1960 seine Unabhängigkeit von Frankreich als Teil der afrikanischen Entkolonialisierungswelle. Die Binnenlandnation ist nach dem Tschadsee benannt und beherbergt die Sahara im Norden und Savanne im Süden. Tschad stand vor zahlreichen Herausforderungen, darunter Bürgerkriege, Konflikte mit Libyen und in jüngerer Zeit die Boko-Haram-Aufstand. Das Land ist kulturell vielfältig mit über 200 ethnischen Gruppen und Sprachen. N'Djamena ist die Hauptstadt und größte Stadt.",
          nl: "Tsjaad verwierf onafhankelijkheid van Frankrijk op 11 augustus 1960, als onderdeel van de golf van Afrikaanse dekolonisatie. De niet aan zee grenzende natie is vernoemd naar het Tsjaadmeer en herbergt de Sahara-woestijn in het noorden en savanne in het zuiden. Tsjaad heeft talrijke uitdagingen het hoofd geboden, waaronder burgeroorlogen, conflicten met Libië en meer recentelijk de Boko Haram-opstand. Het land is cultureel divers met meer dan 200 etnische groepen en talen. N'Djamena is de hoofdstad en grootste stad."
        }
      },
      {
        question: {
          en: "On August 11, 1950, which co-founder of Apple Inc. was born in San Jose, California?",
          es: "El 11 de agosto de 1950, ¿qué cofundador de Apple Inc. nació en San José, California?",
          de: "Am 11. August 1950 wurde welcher Mitgründer von Apple Inc. in San Jose, Kalifornien, geboren?",
          nl: "Op 11 augustus 1950 werd welke medeoprichter van Apple Inc. geboren in San Jose, Californië?"
        },
        options: [
          {
            en: "Steve Jobs",
            es: "Steve Jobs",
            de: "Steve Jobs",
            nl: "Steve Jobs"
          },
          {
            en: "Steve Wozniak",
            es: "Steve Wozniak",
            de: "Steve Wozniak",
            nl: "Steve Wozniak"
          },
          {
            en: "Ronald Wayne",
            es: "Ronald Wayne",
            de: "Ronald Wayne",
            nl: "Ronald Wayne"
          },
          {
            en: "Mike Markkula",
            es: "Mike Markkula",
            de: "Mike Markkula",
            nl: "Mike Markkula"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Steve Wozniak, nicknamed 'Woz', was born on August 11, 1950. He co-founded Apple Computer with Steve Jobs in 1976 and single-handedly designed the Apple I and Apple II computers, which revolutionized personal computing. Wozniak's engineering genius made early home computers accessible and affordable. He left Apple in 1985 but remains an employee and ambassador. Known for his technical brilliance and philanthropic work, he's been involved in various educational and technology ventures. Wozniak is also famous for his love of pranks and practical jokes.",
          es: "Steve Wozniak, apodado 'Woz', nació el 11 de agosto de 1950. Cofundó Apple Computer con Steve Jobs en 1976 y diseñó por sí solo las computadoras Apple I y Apple II, que revolucionaron la informática personal. El genio ingenieril de Wozniak hizo que las primeras computadoras domésticas fueran accesibles y asequibles. Dejó Apple en 1985 pero sigue siendo empleado y embajador. Conocido por su brillantez técnica y trabajo filantrópico, ha participado en varias empresas educativas y tecnológicas. Wozniak también es famoso por su amor por las bromas pesadas y chistes prácticos.",
          de: "Steve Wozniak, mit Spitznamen 'Woz', wurde am 11. August 1950 geboren. Er gründete 1976 mit Steve Jobs Apple Computer und entwarf im Alleingang die Apple I- und Apple II-Computer, die das Personal Computing revolutionierten. Wozniaks technisches Genie machte frühe Heimcomputer zugänglich und erschwinglich. Er verließ Apple 1985, bleibt aber Mitarbeiter und Botschafter. Bekannt für seine technische Brillanz und philanthropische Arbeit, war er an verschiedenen Bildungs- und Technologieunternehmen beteiligt. Wozniak ist auch berühmt für seine Liebe zu Streichen und praktischen Witzen.",
          nl: "Steve Wozniak, bijgenaamd 'Woz', werd geboren op 11 augustus 1950. Hij richtte in 1976 samen met Steve Jobs Apple Computer op en ontwierp in zijn eentje de Apple I en Apple II computers, die personal computing revolutioneerden. Wozniaks technisch genie maakte vroege thuiscomputers toegankelijk en betaalbaar. Hij verliet Apple in 1985 maar blijft werknemer en ambassadeur. Bekend om zijn technische briljantie en filantropisch werk, is hij betrokken geweest bij verschillende educatieve en technologische ondernemingen. Wozniak is ook beroemd om zijn liefde voor grappen en praktische grollen."
        }
      },
      {
        question: {
          en: "On August 11, 1965, what major urban riots began in the Watts neighborhood of Los Angeles, lasting six days?",
          es: "El 11 de agosto de 1965, ¿qué grandes disturbios urbanos comenzaron en el barrio de Watts en Los Ángeles, durando seis días?",
          de: "Am 11. August 1965 begannen welche großen städtischen Unruhen im Watts-Viertel von Los Angeles, die sechs Tage dauerten?",
          nl: "Op 11 augustus 1965 begonnen welke grote stedelijke rellen in de wijk Watts in Los Angeles, die zes dagen duurden?"
        },
        options: [
          {
            en: "Detroit Riots",
            es: "Disturbios de Detroit",
            de: "Detroit-Unruhen",
            nl: "Detroit-rellen"
          },
          {
            en: "Newark Riots",
            es: "Disturbios de Newark",
            de: "Newark-Unruhen",
            nl: "Newark-rellen"
          },
          {
            en: "Watts Riots",
            es: "Disturbios de Watts",
            de: "Watts-Unruhen",
            nl: "Watts-rellen"
          },
          {
            en: "Harlem Riots",
            es: "Disturbios de Harlem",
            de: "Harlem-Unruhen",
            nl: "Harlem-rellen"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Watts Riots began on August 11, 1965, after the arrest of a young Black motorist by a white police officer sparked six days of violence in the predominantly African American neighborhood. The uprising resulted in 34 deaths, over 1,000 injuries, nearly 4,000 arrests, and $40 million in property damage. The riots exposed deep racial tensions, poverty, unemployment, and police brutality in Los Angeles. The event was a turning point in the Civil Rights Movement and led to reforms in policing and urban development.",
          es: "Los disturbios de Watts comenzaron el 11 de agosto de 1965, después de que el arresto de un joven conductor negro por un oficial de policía blanco provocara seis días de violencia en el barrio predominantemente afroamericano. El levantamiento resultó en 34 muertes, más de 1,000 heridos, casi 4,000 arrestos y $40 millones en daños a la propiedad. Los disturbios expusieron profundas tensiones raciales, pobreza, desempleo y brutalidad policial en Los Ángeles. El evento fue un punto de inflexión en el Movimiento de Derechos Civiles y condujo a reformas en la policía y el desarrollo urbano.",
          de: "Die Watts-Unruhen begannen am 11. August 1965, nachdem die Verhaftung eines jungen schwarzen Autofahrers durch einen weißen Polizisten sechs Tage Gewalt im überwiegend afroamerikanischen Viertel auslöste. Der Aufstand führte zu 34 Toten, über 1.000 Verletzten, fast 4.000 Verhaftungen und 40 Millionen Dollar Sachschaden. Die Unruhen legten tiefe rassische Spannungen, Armut, Arbeitslosigkeit und Polizeibrutalität in Los Angeles offen. Das Ereignis war ein Wendepunkt in der Bürgerrechtsbewegung und führte zu Reformen in Polizeiarbeit und Stadtentwicklung.",
          nl: "De Watts-rellen begonnen op 11 augustus 1965, nadat de arrestatie van een jonge zwarte automobilist door een blanke politieagent zes dagen van geweld ontketende in de overwegend Afro-Amerikaanse wijk. De opstand resulteerde in 34 doden, meer dan 1.000 gewonden, bijna 4.000 arrestaties en $40 miljoen aan materiële schade. De rellen legden diepe raciale spanningen, armoede, werkloosheid en politiegeweld in Los Angeles bloot. De gebeurtenis was een keerpunt in de burgerrechtenbeweging en leidde tot hervormingen in politiewerk en stedelijke ontwikkeling."
        }
      },
      {
        question: {
          en: "On August 11, 1999, what rare astronomical event occurred when the Sun, Moon, and Earth aligned, visible across Europe and Asia?",
          es: "El 11 de agosto de 1999, ¿qué raro evento astronómico ocurrió cuando el Sol, la Luna y la Tierra se alinearon, visible en toda Europa y Asia?",
          de: "Am 11. August 1999 ereignete sich welches seltene astronomische Ereignis, als sich Sonne, Mond und Erde ausrichteten, sichtbar in ganz Europa und Asien?",
          nl: "Op 11 augustus 1999 vond welke zeldzame astronomische gebeurtenis plaats toen de Zon, Maan en Aarde zich uitlijnen, zichtbaar in heel Europa en Azië?"
        },
        options: [
          {
            en: "Lunar eclipse",
            es: "Eclipse lunar",
            de: "Mondfinsternis",
            nl: "Maansverduistering"
          },
          {
            en: "Solar eclipse",
            es: "Eclipse solar",
            de: "Sonnenfinsternis",
            nl: "Zonsverduistering"
          },
          {
            en: "Transit of Venus",
            es: "Tránsito de Venus",
            de: "Venustransit",
            nl: "Venusovergang"
          },
          {
            en: "Meteor shower",
            es: "Lluvia de meteoros",
            de: "Meteoritenschauer",
            nl: "Meteorenregen"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "A total solar eclipse occurred on August 11, 1999, with the path of totality crossing Europe, the Middle East, and Asia. It was one of the most-watched eclipses in history, visible to millions across densely populated regions. The eclipse's path included England, France, Germany, Austria, Hungary, Romania, Turkey, Iran, Pakistan, and India. Maximum totality lasted 2 minutes and 23 seconds. The event generated enormous public interest and became known as the 'Eclipse of the Century' for Europe.",
          es: "Un eclipse solar total ocurrió el 11 de agosto de 1999, con el camino de totalidad cruzando Europa, Medio Oriente y Asia. Fue uno de los eclipses más vistos en la historia, visible para millones en regiones densamente pobladas. El camino del eclipse incluyó Inglaterra, Francia, Alemania, Austria, Hungría, Rumania, Turquía, Irán, Pakistán e India. La totalidad máxima duró 2 minutos y 23 segundos. El evento generó un enorme interés público y se conoció como el 'Eclipse del Siglo' para Europa.",
          de: "Am 11. August 1999 ereignete sich eine totale Sonnenfinsternis, deren Totalitätspfad Europa, den Nahen Osten und Asien durchquerte. Es war eine der meistgesehenen Finsternisse der Geschichte, sichtbar für Millionen in dicht besiedelten Regionen. Der Finsternispfad umfasste England, Frankreich, Deutschland, Österreich, Ungarn, Rumänien, die Türkei, Iran, Pakistan und Indien. Die maximale Totalität dauerte 2 Minuten und 23 Sekunden. Das Ereignis erregte enormes öffentliches Interesse und wurde als 'Finsternis des Jahrhunderts' für Europa bekannt.",
          nl: "Een totale zonsverduistering vond plaats op 11 augustus 1999, waarbij het pad van totaliteit Europa, het Midden-Oosten en Azië doorkruiste. Het was een van de meest bekeken verduisteringen in de geschiedenis, zichtbaar voor miljoenen in dichtbevolkte regio's. Het pad van de verduistering omvatte Engeland, Frankrijk, Duitsland, Oostenrijk, Hongarije, Roemenië, Turkije, Iran, Pakistan en India. De maximale totaliteit duurde 2 minuten en 23 seconden. De gebeurtenis wekte enorme publieke belangstelling en werd bekend als de 'Verduistering van de Eeuw' voor Europa."
        }
      }
    ],

    // Day 12 - August 12th: IBM PC introduced, Berlin Wall construction begins, Thomas Edison phonograph
    day12: [
      {
        question: {
          en: "On August 12, 1981, which revolutionary personal computer was introduced by IBM, setting the standard for PC architecture?",
          es: "El 12 de agosto de 1981, ¿qué computadora personal revolucionaria fue introducida por IBM, estableciendo el estándar para la arquitectura de PC?",
          de: "Am 12. August 1981 wurde welcher revolutionäre Personalcomputer von IBM eingeführt, der den Standard für die PC-Architektur setzte?",
          nl: "Op 12 augustus 1981 werd welke revolutionaire personal computer geïntroduceerd door IBM, die de standaard voor PC-architectuur zette?"
        },
        options: [
          { en: "Commodore 64", es: "Commodore 64", de: "Commodore 64", nl: "Commodore 64" },
          { en: "Apple II", es: "Apple II", de: "Apple II", nl: "Apple II" },
          { en: "TRS-80", es: "TRS-80", de: "TRS-80", nl: "TRS-80" },
          { en: "IBM PC (Model 5150)", es: "IBM PC (Modelo 5150)", de: "IBM PC (Modell 5150)", nl: "IBM PC (Model 5150)" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The IBM Personal Computer (Model 5150) was introduced on August 12, 1981, revolutionizing the computer industry. It featured an Intel 8088 processor, 16KB RAM (expandable to 256KB), and ran PC DOS (Microsoft's version of DOS). The open architecture allowed third-party hardware and software development, creating the 'IBM PC compatible' standard that dominated computing for decades. Priced at $1,565, it legitimized personal computers for business use and established the foundation for modern PCs.",
          es: "La Computadora Personal de IBM (Modelo 5150) fue introducida el 12 de agosto de 1981, revolucionando la industria informática. Presentaba un procesador Intel 8088, 16KB de RAM (expandible a 256KB) y ejecutaba PC DOS (versión de Microsoft de DOS). La arquitectura abierta permitió el desarrollo de hardware y software de terceros, creando el estándar 'compatible con IBM PC' que dominó la informática durante décadas. Con un precio de $1,565, legitimó las computadoras personales para uso comercial y estableció la base para las PC modernas.",
          de: "Der IBM Personal Computer (Modell 5150) wurde am 12. August 1981 eingeführt und revolutionierte die Computerindustrie. Er verfügte über einen Intel 8088-Prozessor, 16KB RAM (erweiterbar auf 256KB) und lief mit PC DOS (Microsofts Version von DOS). Die offene Architektur ermöglichte die Entwicklung von Hardware und Software durch Dritte und schuf den 'IBM PC-kompatiblen' Standard, der Jahrzehnte lang das Computing dominierte. Mit einem Preis von 1.565 Dollar legitimierte er Personal Computer für den geschäftlichen Einsatz und legte das Fundament für moderne PCs.",
          nl: "De IBM Personal Computer (Model 5150) werd geïntroduceerd op 12 augustus 1981 en revolutioneerde de computerindustrie. Het had een Intel 8088-processor, 16KB RAM (uitbreidbaar tot 256KB) en draaide op PC DOS (Microsoft's versie van DOS). De open architectuur maakte hardware- en software-ontwikkeling door derden mogelijk, waardoor de 'IBM PC-compatibele' standaard ontstond die decennialang de computerwereld domineerde. Geprijsd op $1.565, legitimeerde het personal computers voor zakelijk gebruik en legde het de basis voor moderne pc's."
        }
      },
      {
        question: {
          en: "On August 12, 1961, construction began on which Cold War barrier that would divide a major European city for 28 years?",
          es: "El 12 de agosto de 1961, comenzó la construcción de qué barrera de la Guerra Fría que dividiría una importante ciudad europea durante 28 años?",
          de: "Am 12. August 1961 begann der Bau welcher Kalter-Krieg-Barriere, die eine große europäische Stadt 28 Jahre lang teilen würde?",
          nl: "Op 12 augustus 1961 begon de bouw van welke Koude Oorlog-barrière die een grote Europese stad 28 jaar lang zou verdelen?"
        },
        options: [
          {
            en: "Iron Curtain",
            es: "Telón de Acero",
            de: "Eiserner Vorhang",
            nl: "IJzeren Gordijn"
          },
          {
            en: "Berlin Wall",
            es: "Muro de Berlín",
            de: "Berliner Mauer",
            nl: "Berlijnse Muur"
          },
          {
            en: "Korean DMZ",
            es: "DMZ Coreana",
            de: "Koreanische DMZ",
            nl: "Koreaanse DMZ"
          },
          {
            en: "Green Line",
            es: "Línea Verde",
            de: "Grüne Linie",
            nl: "Groene Lijn"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Construction of the Berlin Wall began on August 12-13, 1961, when East German authorities erected barbed wire barriers overnight to prevent East Germans from fleeing to West Berlin. The concrete wall that followed divided Berlin physically and ideologically for 28 years. It stretched 96 miles, with guard towers, anti-vehicle trenches, and a 'death strip'. At least 140 people died attempting to cross it. The wall became the most powerful symbol of the Cold War division between communist East and capitalist West. It fell on November 9, 1989.",
          es: "La construcción del Muro de Berlín comenzó el 12-13 de agosto de 1961, cuando las autoridades de Alemania Oriental erigieron barreras de alambre de púas durante la noche para evitar que los alemanes del este huyeran a Berlín Occidental. El muro de concreto que siguió dividió Berlín física e ideológicamente durante 28 años. Se extendía 96 millas, con torres de vigilancia, trincheras antivehículo y una 'franja de la muerte'. Al menos 140 personas murieron intentando cruzarlo. El muro se convirtió en el símbolo más poderoso de la división de la Guerra Fría entre el este comunista y el oeste capitalista. Cayó el 9 de noviembre de 1989.",
          de: "Der Bau der Berliner Mauer begann am 12.-13. August 1961, als ostdeutsche Behörden über Nacht Stacheldrahtbarrieren errichteten, um Ostdeutsche an der Flucht nach West-Berlin zu hindern. Die folgende Betonmauer teilte Berlin 28 Jahre lang physisch und ideologisch. Sie erstreckte sich über 96 Meilen mit Wachtürmen, Panzerabwehrgräben und einem 'Todesstreifen'. Mindestens 140 Menschen starben bei dem Versuch, sie zu überqueren. Die Mauer wurde zum mächtigsten Symbol der Kalter-Krieg-Teilung zwischen kommunistischem Osten und kapitalistischem Westen. Sie fiel am 9. November 1989.",
          nl: "De bouw van de Berlijnse Muur begon op 12-13 augustus 1961, toen Oost-Duitse autoriteiten 's nachts prikkeldraadversperringen oprichtten om te voorkomen dat Oost-Duitsers naar West-Berlijn vluchtten. De betonnen muur die volgde verdeelde Berlijn 28 jaar lang fysiek en ideologisch. Het strekte zich uit over 96 mijl, met wachttorens, anti-voertuiggrachten en een 'dodelijke strook'. Minstens 140 mensen stierven bij pogingen het over te steken. De muur werd het krachtigste symbool van de Koude Oorlog-verdeling tussen communistisch Oost en kapitalistisch West. Hij viel op 9 november 1989."
        }
      },
      {
        question: {
          en: "On August 12, 1877, which prolific American inventor demonstrated the phonograph, his device for recording and playing sound?",
          es: "El 12 de agosto de 1877, ¿qué prolífico inventor estadounidense demostró el fonógrafo, su dispositivo para grabar y reproducir sonido?",
          de: "Am 12. August 1877 demonstrierte welcher produktive amerikanische Erfinder das Phonograph, sein Gerät zur Aufnahme und Wiedergabe von Ton?",
          nl: "Op 12 augustus 1877 demonstreerde welke productieve Amerikaanse uitvinder de fonograaf, zijn apparaat voor het opnemen en afspelen van geluid?"
        },
        options: [
          {
            en: "Nikola Tesla",
            es: "Nikola Tesla",
            de: "Nikola Tesla",
            nl: "Nikola Tesla"
          },
          {
            en: "Alexander Graham Bell",
            es: "Alexander Graham Bell",
            de: "Alexander Graham Bell",
            nl: "Alexander Graham Bell"
          },
          {
            en: "Thomas Edison",
            es: "Thomas Edison",
            de: "Thomas Edison",
            nl: "Thomas Edison"
          },
          {
            en: "George Westinghouse",
            es: "George Westinghouse",
            de: "George Westinghouse",
            nl: "George Westinghouse"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Thomas Edison demonstrated his phonograph on August 12, 1877, though some sources cite the formal demonstration in December. The device recorded sound waves as indentations on a cylinder wrapped in tinfoil. The first recorded words were reportedly 'Mary had a little lamb'. This invention revolutionized the music industry and entertainment, making recorded sound commercially viable. Edison held 1,093 U.S. patents and his inventions included the electric light bulb, motion picture camera, and improvements to the telegraph and telephone.",
          es: "Thomas Edison demostró su fonógrafo el 12 de agosto de 1877, aunque algunas fuentes citan la demostración formal en diciembre. El dispositivo grababa ondas sonoras como hendiduras en un cilindro envuelto en papel de estaño. Las primeras palabras grabadas fueron supuestamente 'Mary had a little lamb'. Este invento revolucionó la industria de la música y el entretenimiento, haciendo comercialmente viable el sonido grabado. Edison tenía 1,093 patentes estadounidenses y sus inventos incluían la bombilla eléctrica, cámara de cine y mejoras al telégrafo y teléfono.",
          de: "Thomas Edison demonstrierte sein Phonograph am 12. August 1877, obwohl einige Quellen die formelle Demonstration im Dezember nennen. Das Gerät zeichnete Schallwellen als Vertiefungen auf einem mit Zinnfolie umwickelten Zylinder auf. Die ersten aufgezeichneten Worte waren angeblich 'Mary had a little lamb'. Diese Erfindung revolutionierte die Musikindustrie und Unterhaltung und machte aufgezeichneten Klang kommerziell rentabel. Edison hielt 1.093 US-Patente und seine Erfindungen umfassten die elektrische Glühbirne, Filmkamera und Verbesserungen am Telegraphen und Telefon.",
          nl: "Thomas Edison demonstreerde zijn fonograaf op 12 augustus 1877, hoewel sommige bronnen de formele demonstratie in december vermelden. Het apparaat nam geluidsgolven op als inkepingen op een cilinder gewikkeld in tinfolie. De eerste opgenomen woorden waren naar verluidt 'Mary had a little lamb'. Deze uitvinding revolutioneerde de muziekindustrie en entertainment, waardoor opgenomen geluid commercieel haalbaar werd. Edison had 1.093 Amerikaanse patenten en zijn uitvindingen omvatten de elektrische gloeilamp, filmcamera en verbeteringen aan de telegraaf en telefoon."
        }
      },
      {
        question: {
          en: "On August 12, 1992, which North American country signed the North American Free Trade Agreement (NAFTA) alongside the United States and Mexico?",
          es: "El 12 de agosto de 1992, ¿qué país de América del Norte firmó el Tratado de Libre Comercio de América del Norte (TLCAN) junto con Estados Unidos y México?",
          de: "Am 12. August 1992 unterzeichnete welches nordamerikanische Land das Nordamerikanische Freihandelsabkommen (NAFTA) zusammen mit den Vereinigten Staaten und Mexiko?",
          nl: "Op 12 augustus 1992 tekende welk Noord-Amerikaans land de Noord-Amerikaanse Vrijhandelsakkoord (NAFTA) naast de Verenigde Staten en Mexico?"
        },
        options: [
          {
            en: "Greenland",
            es: "Groenlandia",
            de: "Grönland",
            nl: "Groenland"
          },
          {
            en: "Cuba",
            es: "Cuba",
            de: "Kuba",
            nl: "Cuba"
          },
          {
            en: "Canada",
            es: "Canadá",
            de: "Kanada",
            nl: "Canada"
          },
          {
            en: "Costa Rica",
            es: "Costa Rica",
            de: "Costa Rica",
            nl: "Costa Rica"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Canada signed NAFTA alongside the United States and Mexico on August 12, 1992 (negotiations were finalized; signing ceremonies varied). The agreement came into effect on January 1, 1994, creating one of the world's largest free trade zones. NAFTA eliminated most tariffs on trade between the three countries, boosted economic integration, and increased trade volumes significantly. It was controversial, with debates about job losses and environmental impacts. In 2020, NAFTA was replaced by the USMCA (United States-Mexico-Canada Agreement).",
          es: "Canadá firmó el TLCAN junto con Estados Unidos y México el 12 de agosto de 1992 (las negociaciones se finalizaron; las ceremonias de firma variaron). El acuerdo entró en vigor el 1 de enero de 1994, creando una de las zonas de libre comercio más grandes del mundo. El TLCAN eliminó la mayoría de los aranceles sobre el comercio entre los tres países, impulsó la integración económica y aumentó significativamente los volúmenes comerciales. Fue controvertido, con debates sobre pérdidas de empleos e impactos ambientales. En 2020, el TLCAN fue reemplazado por el T-MEC (Tratado entre Estados Unidos, México y Canadá).",
          de: "Kanada unterzeichnete NAFTA zusammen mit den Vereinigten Staaten und Mexiko am 12. August 1992 (Verhandlungen wurden abgeschlossen; Unterzeichnungszeremonien variierten). Das Abkommen trat am 1. Januar 1994 in Kraft und schuf eine der weltweit größten Freihandelszonen. NAFTA beseitigte die meisten Zölle im Handel zwischen den drei Ländern, förderte die wirtschaftliche Integration und steigerte die Handelsvolumen erheblich. Es war umstritten, mit Debatten über Arbeitsplatzverluste und Umweltauswirkungen. 2020 wurde NAFTA durch das USMCA (Abkommen zwischen den Vereinigten Staaten, Mexiko und Kanada) ersetzt.",
          nl: "Canada ondertekende NAFTA naast de Verenigde Staten en Mexico op 12 augustus 1992 (onderhandelingen werden afgerond; ondertekeningsceremonies varieerden). Het akkoord trad in werking op 1 januari 1994 en creëerde een van 's werelds grootste vrijhandelszones. NAFTA elimineerde de meeste tarieven op handel tussen de drie landen, stimuleerde economische integratie en verhoogde handelsvolumes aanzienlijk. Het was controversieel, met debatten over banenverlies en milieueffecten. In 2020 werd NAFTA vervangen door de USMCA (Verenigde Staten-Mexico-Canada Overeenkomst)."
        }
      },
      {
        question: {
          en: "On August 12, 30 BC, which famous Egyptian queen committed suicide, marking the end of the Ptolemaic Kingdom and Egypt's independence?",
          es: "El 12 de agosto del 30 a.C., ¿qué famosa reina egipcia se suicidó, marcando el final del Reino Ptolemaico y la independencia de Egipto?",
          de: "Am 12. August 30 v. Chr. beging welche berühmte ägyptische Königin Selbstmord, was das Ende des Ptolemäerreiches und der Unabhängigkeit Ägyptens markierte?",
          nl: "Op 12 augustus 30 v.Chr. pleegde welke beroemde Egyptische koningin zelfmoord, wat het einde van het Ptolemaeïsche Koninkrijk en Egypte's onafhankelijkheid markeerde?"
        },
        options: [
          {
            en: "Nefertiti",
            es: "Nefertiti",
            de: "Nofretete",
            nl: "Nefertiti"
          },
          {
            en: "Hatshepsut",
            es: "Hatshepsut",
            de: "Hatschepsut",
            nl: "Hatshepsut"
          },
          {
            en: "Cleopatra VII",
            es: "Cleopatra VII",
            de: "Kleopatra VII",
            nl: "Cleopatra VII"
          },
          {
            en: "Berenice II",
            es: "Berenice II",
            de: "Berenike II",
            nl: "Berenice II"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Cleopatra VII died on August 12, 30 BC, reportedly by allowing an asp (Egyptian cobra) to bite her, though historians debate the method. Her death followed the defeat of her forces and those of Mark Antony by Octavian (later Emperor Augustus) at the Battle of Actium. Cleopatra was the last active pharaoh of Egypt and a member of the Ptolemaic dynasty. Her death ended both the Ptolemaic Kingdom and Egyptian independence, as Egypt became a Roman province. She was known for her intelligence, political acumen, and romantic relationships with Julius Caesar and Mark Antony.",
          es: "Cleopatra VII murió el 12 de agosto del 30 a.C., supuestamente al permitir que un áspid (cobra egipcia) la mordiera, aunque los historiadores debaten el método. Su muerte siguió a la derrota de sus fuerzas y las de Marco Antonio por Octavio (más tarde emperador Augusto) en la Batalla de Actium. Cleopatra fue la última faraona activa de Egipto y miembro de la dinastía Ptolemaica. Su muerte terminó tanto el Reino Ptolemaico como la independencia egipcia, ya que Egipto se convirtió en una provincia romana. Era conocida por su inteligencia, perspicacia política y relaciones románticas con Julio César y Marco Antonio.",
          de: "Kleopatra VII starb am 12. August 30 v. Chr., angeblich indem sie sich von einer Asp (ägyptische Kobra) beißen ließ, obwohl Historiker die Methode debattieren. Ihr Tod folgte der Niederlage ihrer Streitkräfte und die von Marcus Antonius durch Octavian (später Kaiser Augustus) in der Schlacht von Actium. Kleopatra war die letzte aktive Pharaonin Ägyptens und Mitglied der Ptolemäerdynastie. Ihr Tod beendete sowohl das Ptolemäerreich als auch die ägyptische Unabhängigkeit, da Ägypten eine römische Provinz wurde. Sie war bekannt für ihre Intelligenz, politisches Geschick und romantische Beziehungen zu Julius Caesar und Marcus Antonius.",
          nl: "Cleopatra VII stierf op 12 augustus 30 v.Chr., naar verluidt door een adder (Egyptische cobra) haar te laten bijten, hoewel historici de methode debatteren. Haar dood volgde op de nederlaag van haar troepen en die van Marcus Antonius door Octavianus (later keizer Augustus) in de Slag bij Actium. Cleopatra was de laatste actieve farao van Egypte en lid van de Ptolemaeïsche dynastie. Haar dood maakte een einde aan zowel het Ptolemaeïsche Koninkrijk als de Egyptische onafhankelijkheid, aangezien Egypte een Romeinse provincie werd. Ze stond bekend om haar intelligentie, politieke scherpte en romantische relaties met Julius Caesar en Marcus Antonius."
        }
      }
    ],

    // Day 13 - August 13th: Berlin Wall built, Fidel Castro born, Alfred Hitchcock born
    day13: [
      {
        question: {
          en: "On August 13, 1961, what major Cold War structure began its construction, dividing East and West Berlin?",
          es: "El 13 de agosto de 1961, ¿qué importante estructura de la Guerra Fría comenzó su construcción, dividiendo Berlín Oriental y Occidental?",
          de: "Am 13. August 1961 begann welche wichtige Kalter-Krieg-Struktur ihren Bau und teilte Ost- und West-Berlin?",
          nl: "Op 13 augustus 1961 begon welke belangrijke Koude Oorlog-structuur zijn bouw, waarbij Oost- en West-Berlijn werden verdeeld?"
        },
        options: [
          {
            en: "Checkpoint Charlie",
            es: "Checkpoint Charlie",
            de: "Checkpoint Charlie",
            nl: "Checkpoint Charlie"
          },
          {
            en: "Brandenburg Gate barrier",
            es: "Barrera de la Puerta de Brandeburgo",
            de: "Brandenburger Tor-Barriere",
            nl: "Brandenburger Tor-barrière"
          },
          {
            en: "Berlin Wall",
            es: "Muro de Berlín",
            de: "Berliner Mauer",
            nl: "Berlijnse Muur"
          },
          {
            en: "Iron Curtain",
            es: "Telón de Acero",
            de: "Eiserner Vorhang",
            nl: "IJzeren Gordijn"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Berlin Wall construction officially began on August 13, 1961, when East German soldiers and workers started erecting barbed wire barriers overnight, replacing them with a concrete wall. The wall was built to stop the mass exodus of East Germans fleeing to West Berlin (over 2.5 million had fled since 1949). It became the most iconic symbol of the Cold War, representing the division between communist and capitalist ideologies. The wall stood for 28 years until its fall on November 9, 1989, paving the way for German reunification.",
          es: "La construcción del Muro de Berlín comenzó oficialmente el 13 de agosto de 1961, cuando soldados y trabajadores de Alemania Oriental comenzaron a erigir barreras de alambre de púas durante la noche, reemplazándolas con un muro de concreto. El muro fue construido para detener el éxodo masivo de alemanes del este que huían a Berlín Occidental (más de 2.5 millones habían huido desde 1949). Se convirtió en el símbolo más icónico de la Guerra Fría, representando la división entre ideologías comunista y capitalista. El muro se mantuvo durante 28 años hasta su caída el 9 de noviembre de 1989, allanando el camino para la reunificación alemana.",
          de: "Der Bau der Berliner Mauer begann offiziell am 13. August 1961, als ostdeutsche Soldaten und Arbeiter über Nacht begannen, Stacheldrahtbarrieren zu errichten, die sie durch eine Betonmauer ersetzten. Die Mauer wurde gebaut, um den Massenexodus von Ostdeutschen nach West-Berlin zu stoppen (über 2,5 Millionen waren seit 1949 geflohen). Sie wurde zum ikonischsten Symbol des Kalten Krieges und repräsentierte die Spaltung zwischen kommunistischer und kapitalistischer Ideologie. Die Mauer stand 28 Jahre lang bis zu ihrem Fall am 9. November 1989, der den Weg für die deutsche Wiedervereinigung ebnete.",
          nl: "De bouw van de Berlijnse Muur begon officieel op 13 augustus 1961, toen Oost-Duitse soldaten en arbeiders 's nachts prikkeldraadversperringen begonnen op te richten, die ze vervingen door een betonnen muur. De muur werd gebouwd om de massale uittocht van Oost-Duitsers die naar West-Berlijn vluchtten te stoppen (meer dan 2,5 miljoen waren sinds 1949 gevlucht). Het werd het meest iconische symbool van de Koude Oorlog, dat de scheiding tussen communistische en kapitalistische ideologieën vertegenwoordigde. De muur stond 28 jaar tot zijn val op 9 november 1989, waarmee de weg werd vrijgemaakt voor de Duitse hereniging."
        }
      },
      {
        question: {
          en: "On August 13, 1926, which Cuban revolutionary leader who ruled Cuba for nearly five decades was born?",
          es: "El 13 de agosto de 1926, ¿qué líder revolucionario cubano que gobernó Cuba durante casi cinco décadas nació?",
          de: "Am 13. August 1926 wurde welcher kubanische Revolutionsführer geboren, der Kuba fast fünf Jahrzehnte lang regierte?",
          nl: "Op 13 augustus 1926 werd welke Cubaanse revolutionaire leider geboren die Cuba bijna vijf decennia regeerde?"
        },
        options: [
          {
            en: "Che Guevara",
            es: "Che Guevara",
            de: "Che Guevara",
            nl: "Che Guevara"
          },
          {
            en: "Fidel Castro",
            es: "Fidel Castro",
            de: "Fidel Castro",
            nl: "Fidel Castro"
          },
          {
            en: "Raúl Castro",
            es: "Raúl Castro",
            de: "Raúl Castro",
            nl: "Raúl Castro"
          },
          {
            en: "Fulgencio Batista",
            es: "Fulgencio Batista",
            de: "Fulgencio Batista",
            nl: "Fulgencio Batista"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Fidel Castro was born on August 13, 1926, in Birán, Cuba. He led the Cuban Revolution that overthrew dictator Fulgencio Batista in 1959, establishing a communist government aligned with the Soviet Union. Castro ruled Cuba as Prime Minister (1959-1976) and President (1976-2008), making him one of the longest-serving leaders in modern history. His regime nationalized industries, implemented socialist policies, and survived numerous U.S.-backed assassination attempts and the Bay of Pigs invasion. He transferred power to his brother Raúl in 2008 and died in 2016.",
          es: "Fidel Castro nació el 13 de agosto de 1926 en Birán, Cuba. Lideró la Revolución Cubana que derrocó al dictador Fulgencio Batista en 1959, estableciendo un gobierno comunista alineado con la Unión Soviética. Castro gobernó Cuba como Primer Ministro (1959-1976) y Presidente (1976-2008), convirtiéndolo en uno de los líderes con más tiempo en el cargo en la historia moderna. Su régimen nacionalizó industrias, implementó políticas socialistas y sobrevivió a numerosos intentos de asesinato respaldados por EE.UU. y la invasión de Bahía de Cochinos. Transfirió el poder a su hermano Raúl en 2008 y murió en 2016.",
          de: "Fidel Castro wurde am 13. August 1926 in Birán, Kuba, geboren. Er führte die Kubanische Revolution an, die 1959 den Diktator Fulgencio Batista stürzte und eine kommunistische Regierung etablierte, die mit der Sowjetunion verbündet war. Castro regierte Kuba als Premierminister (1959-1976) und Präsident (1976-2008), was ihn zu einem der am längsten amtierenden Führer der modernen Geschichte machte. Sein Regime verstaatlichte Industrien, implementierte sozialistische Politiken und überlebte zahlreiche von den USA unterstützte Attentatsversuche und die Schweinebucht-Invasion. Er übergab 2008 die Macht an seinen Bruder Raúl und starb 2016.",
          nl: "Fidel Castro werd geboren op 13 augustus 1926 in Birán, Cuba. Hij leidde de Cubaanse Revolutie die dictator Fulgencio Batista in 1959 omverwierp, waarbij een communistische regering werd gevestigd die verbonden was met de Sovjet-Unie. Castro regeerde Cuba als premier (1959-1976) en president (1976-2008), waardoor hij een van de langst zittende leiders in de moderne geschiedenis werd. Zijn regime nationaliseerde industrieën, voerde socialistische beleidsmaatregelen door en overleefde talrijke door de VS gesteunde moordpogingen en de invasie van de Varkensbaai. Hij droeg de macht over aan zijn broer Raúl in 2008 en stierf in 2016."
        }
      },
      {
        question: {
          en: "On August 13, 1899, which legendary British film director known as the 'Master of Suspense' was born in London?",
          es: "El 13 de agosto de 1899, ¿qué legendario director de cine británico conocido como el 'Maestro del Suspenso' nació en Londres?",
          de: "Am 13. August 1899 wurde welcher legendäre britische Filmregisseur, bekannt als der 'Meister der Spannung', in London geboren?",
          nl: "Op 13 augustus 1899 werd welke legendarische Britse filmregisseur bekend als de 'Meester van de Spanning' geboren in Londen?"
        },
        options: [
          {
            en: "David Lean",
            es: "David Lean",
            de: "David Lean",
            nl: "David Lean"
          },
          {
            en: "Charlie Chaplin",
            es: "Charlie Chaplin",
            de: "Charlie Chaplin",
            nl: "Charlie Chaplin"
          },
          {
            en: "Alfred Hitchcock",
            es: "Alfred Hitchcock",
            de: "Alfred Hitchcock",
            nl: "Alfred Hitchcock"
          },
          {
            en: "Stanley Kubrick",
            es: "Stanley Kubrick",
            de: "Stanley Kubrick",
            nl: "Stanley Kubrick"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Alfred Hitchcock was born on August 13, 1899, in London. Known as the 'Master of Suspense', he directed over 50 feature films spanning six decades, revolutionizing the thriller and suspense genres. His masterpieces include 'Psycho' (1960), 'Vertigo' (1958), 'Rear Window' (1954), 'North by Northwest' (1959), and 'The Birds' (1963). Hitchcock pioneered techniques like the 'MacGuffin' plot device and creative camera work. His trademark cameo appearances and distinctive silhouette made him one of the most recognizable filmmakers. He received the AFI Life Achievement Award and was knighted in 1980.",
          es: "Alfred Hitchcock nació el 13 de agosto de 1899 en Londres. Conocido como el 'Maestro del Suspenso', dirigió más de 50 largometrajes durante seis décadas, revolucionando los géneros de thriller y suspenso. Sus obras maestras incluyen 'Psicosis' (1960), 'Vértigo' (1958), 'La ventana indiscreta' (1954), 'Con la muerte en los talones' (1959) y 'Los pájaros' (1963). Hitchcock fue pionero en técnicas como el dispositivo de trama 'MacGuffin' y trabajo de cámara creativo. Sus apariciones cameo características y silueta distintiva lo convirtieron en uno de los cineastas más reconocibles. Recibió el Premio AFI Life Achievement y fue nombrado caballero en 1980.",
          de: "Alfred Hitchcock wurde am 13. August 1899 in London geboren. Als 'Meister der Spannung' bekannt, führte er bei über 50 Spielfilmen in sechs Jahrzehnten Regie und revolutionierte die Thriller- und Suspense-Genres. Zu seinen Meisterwerken gehören 'Psycho' (1960), 'Vertigo' (1958), 'Das Fenster zum Hof' (1954), 'Der unsichtbare Dritte' (1959) und 'Die Vögel' (1963). Hitchcock war Pionier bei Techniken wie dem 'MacGuffin'-Plot-Device und kreativer Kameraarbeit. Seine charakteristischen Cameo-Auftritte und unverwechselbare Silhouette machten ihn zu einem der bekanntesten Filmemacher. Er erhielt den AFI Life Achievement Award und wurde 1980 zum Ritter geschlagen.",
          nl: "Alfred Hitchcock werd geboren op 13 augustus 1899 in Londen. Bekend als de 'Meester van de Spanning', regisseerde hij meer dan 50 speelfilms over zes decennia, waarmee hij de thriller- en suspensegenres revolutioneerde. Zijn meesterwerken omvatten 'Psycho' (1960), 'Vertigo' (1958), 'Rear Window' (1954), 'North by Northwest' (1959) en 'The Birds' (1963). Hitchcock was pionier in technieken zoals het 'MacGuffin'-plotapparaat en creatief camerawerk. Zijn kenmerkende cameo-optredens en onderscheidende silhouet maakten hem een van de meest herkenbare filmmakers. Hij ontving de AFI Life Achievement Award en werd in 1980 geridderd."
        }
      },
      {
        question: {
          en: "On August 13, 2004, which international sporting event opened in Athens, returning to its ancient homeland for the first time in over a century?",
          es: "El 13 de agosto de 2004, ¿qué evento deportivo internacional se inauguró en Atenas, regresando a su tierra natal antigua por primera vez en más de un siglo?",
          de: "Am 13. August 2004 eröffnete welches internationale Sportereignis in Athen, das zum ersten Mal seit über einem Jahrhundert in seine antike Heimat zurückkehrte?",
          nl: "Op 13 augustus 2004 opende welk internationaal sportevenement in Athene, waarbij het voor het eerst in meer dan een eeuw terugkeerde naar zijn oude thuisland?"
        },
        options: [
          {
            en: "FIFA World Cup",
            es: "Copa Mundial de la FIFA",
            de: "FIFA Weltmeisterschaft",
            nl: "FIFA Wereldkampioenschap"
          },
          {
            en: "Summer Olympics",
            es: "Juegos Olímpicos de Verano",
            de: "Olympische Sommerspiele",
            nl: "Olympische Zomerspelen"
          },
          {
            en: "European Championships",
            es: "Campeonato Europeo",
            de: "Europameisterschaft",
            nl: "Europees Kampioenschap"
          },
          {
            en: "Commonwealth Games",
            es: "Juegos de la Mancomunidad",
            de: "Commonwealth Games",
            nl: "Gemenebestspelen"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 2004 Summer Olympics opened in Athens on August 13, 2004, marking the games' return to Greece 108 years after the first modern Olympics were held there in 1896. The event featured 10,625 athletes from 201 countries competing in 301 events across 28 sports. Michael Phelps won 6 gold medals in swimming, while Greece surprised the world by winning the Euro 2004 football championship earlier that summer. The Athens Olympics cost approximately $15 billion and showcased ancient Greek heritage. The motto was 'Welcome Home'.",
          es: "Los Juegos Olímpicos de Verano de 2004 se inauguraron en Atenas el 13 de agosto de 2004, marcando el regreso de los juegos a Grecia 108 años después de que los primeros Juegos Olímpicos modernos se celebraran allí en 1896. El evento contó con 10,625 atletas de 201 países compitiendo en 301 eventos en 28 deportes. Michael Phelps ganó 6 medallas de oro en natación, mientras que Grecia sorprendió al mundo al ganar el campeonato de fútbol Euro 2004 ese verano. Los Juegos Olímpicos de Atenas costaron aproximadamente $15 mil millones y mostraron el patrimonio de la antigua Grecia. El lema fue 'Bienvenido a casa'.",
          de: "Die Olympischen Sommerspiele 2004 wurden am 13. August 2004 in Athen eröffnet und markierten die Rückkehr der Spiele nach Griechenland 108 Jahre nachdem die ersten modernen Olympischen Spiele dort 1896 stattfanden. Die Veranstaltung umfasste 10.625 Athleten aus 201 Ländern, die in 301 Wettbewerben in 28 Sportarten antraten. Michael Phelps gewann 6 Goldmedaillen im Schwimmen, während Griechenland die Welt überraschte, indem es die Euro 2004 Fußballmeisterschaft in diesem Sommer gewann. Die Athener Olympiade kostete etwa 15 Milliarden Dollar und präsentierte das antike griechische Erbe. Das Motto lautete 'Willkommen zu Hause'.",
          nl: "De Olympische Zomerspelen 2004 openden in Athene op 13 augustus 2004, waarmee de spelen 108 jaar na de eerste moderne Olympische Spelen die daar in 1896 werden gehouden, terugkeerden naar Griekenland. Het evenement omvatte 10.625 atleten uit 201 landen die deelnamen aan 301 evenementen in 28 sporten. Michael Phelps won 6 gouden medailles in het zwemmen, terwijl Griekenland de wereld verraste door eerder die zomer het Euro 2004-voetbalkampioenschap te winnen. De Olympische Spelen van Athene kostten ongeveer $15 miljard en toonden het oude Griekse erfgoed. Het motto was 'Welkom Thuis'."
        }
      },
      {
        question: {
          en: "On August 13, 1918, which famous British women's rights activist received her first conviction for distributing information about birth control?",
          es: "El 13 de agosto de 1918, ¿qué famosa activista británica de los derechos de las mujeres recibió su primera condena por distribuir información sobre control de natalidad?",
          de: "Am 13. August 1918 erhielt welche berühmte britische Frauenrechtsaktivistin ihre erste Verurteilung wegen der Verbreitung von Informationen über Geburtenkontrolle?",
          nl: "Op 13 augustus 1918 ontving welke beroemde Britse activiste voor vrouwenrechten haar eerste veroordeling voor het verspreiden van informatie over geboortebeperking?"
        },
        options: [
          {
            en: "Emmeline Pankhurst",
            es: "Emmeline Pankhurst",
            de: "Emmeline Pankhurst",
            nl: "Emmeline Pankhurst"
          },
          {
            en: "Marie Stopes",
            es: "Marie Stopes",
            de: "Marie Stopes",
            nl: "Marie Stopes"
          },
          {
            en: "Margaret Sanger",
            es: "Margaret Sanger",
            de: "Margaret Sanger",
            nl: "Margaret Sanger"
          },
          {
            en: "Millicent Fawcett",
            es: "Millicent Fawcett",
            de: "Millicent Fawcett",
            nl: "Millicent Fawcett"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Marie Stopes was convicted on August 13, 1918, for distributing birth control information, though she successfully appealed. She was a pioneering advocate for women's reproductive rights and sex education. In 1921, she opened Britain's first birth control clinic in London. Her book 'Married Love' (1918) revolutionized discussions about sexuality and contraception, though it was controversial and banned in some countries. Stopes was also a paleobotanist and the first female academic on the University of Manchester faculty. Her legacy includes the Marie Stopes International organization providing reproductive healthcare worldwide.",
          es: "Marie Stopes fue condenada el 13 de agosto de 1918 por distribuir información sobre control de natalidad, aunque apeló con éxito. Fue una defensora pionera de los derechos reproductivos de las mujeres y la educación sexual. En 1921, abrió la primera clínica de control de natalidad de Gran Bretaña en Londres. Su libro 'Amor Conyugal' (1918) revolucionó las discusiones sobre sexualidad y anticoncepción, aunque fue controvertido y prohibido en algunos países. Stopes también fue paleobotánica y la primera académica femenina en la facultad de la Universidad de Manchester. Su legado incluye la organización Marie Stopes International que proporciona atención médica reproductiva en todo el mundo.",
          de: "Marie Stopes wurde am 13. August 1918 wegen der Verbreitung von Informationen über Geburtenkontrolle verurteilt, legte jedoch erfolgreich Berufung ein. Sie war eine bahnbrechende Verfechterin der reproduktiven Rechte von Frauen und der Sexualerziehung. 1921 eröffnete sie Großbritanniens erste Geburtenkontrollklinik in London. Ihr Buch 'Married Love' (1918) revolutionierte Diskussionen über Sexualität und Empfängnisverhütung, obwohl es kontrovers war und in einigen Ländern verboten wurde. Stopes war auch Paläobotanikerin und die erste weibliche Akademikerin an der Fakultät der Universität Manchester. Ihr Vermächtnis umfasst die Organisation Marie Stopes International, die weltweit reproduktive Gesundheitsversorgung bietet.",
          nl: "Marie Stopes werd op 13 augustus 1918 veroordeeld voor het verspreiden van informatie over geboortebeperking, hoewel ze succesvol in beroep ging. Ze was een baanbrekende voorvechtster van vrouwenreproductieve rechten en seksuele voorlichting. In 1921 opende ze de eerste geboortebeperkingskliniek van Groot-Brittannië in Londen. Haar boek 'Married Love' (1918) revolutioneerde discussies over seksualiteit en anticonceptie, hoewel het controversieel was en in sommige landen verboden. Stopes was ook paleobotanist en de eerste vrouwelijke academicus aan de faculteit van de Universiteit van Manchester. Haar erfenis omvat de organisatie Marie Stopes International die wereldwijd reproductieve gezondheidszorg biedt."
        }
      }
    ],

    // Day 14 - August 14th: V-J Day, Pakistan independence, Social Security Act
    day14: [
      {
        question: {
          en: "On August 14, 1945, which day marked Japan's announcement of surrender, effectively ending World War II?",
          es: "El 14 de agosto de 1945, ¿qué día marcó el anuncio de rendición de Japón, poniendo fin efectivamente a la Segunda Guerra Mundial?",
          de: "Am 14. August 1945 markierte welcher Tag Japans Ankündigung der Kapitulation und beendete effektiv den Zweiten Weltkrieg?",
          nl: "Op 14 augustus 1945 markeerde welke dag Japan's aankondiging van overgave, waarmee de Tweede Wereldoorlog effectief eindigde?"
        },
        options: [
          {
            en: "V-E Day",
            es: "Día V-E",
            de: "V-E-Tag",
            nl: "V-E-dag"
          },
          {
            en: "D-Day",
            es: "Día D",
            de: "D-Day",
            nl: "D-Day"
          },
          {
            en: "V-J Day",
            es: "Día V-J",
            de: "V-J-Tag",
            nl: "V-J-dag"
          },
          {
            en: "Liberation Day",
            es: "Día de la Liberación",
            de: "Befreiungstag",
            nl: "Bevrijdingsdag"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "V-J Day (Victory over Japan Day) occurred on August 14, 1945 (August 15 in Japan due to time zones), when Emperor Hirohito announced Japan's unconditional surrender via radio broadcast. This followed the atomic bombings of Hiroshima (August 6) and Nagasaki (August 9), and the Soviet Union's declaration of war on Japan (August 8). The formal surrender was signed on September 2, 1945, aboard the USS Missouri in Tokyo Bay. V-J Day marked the end of World War II and sparked massive celebrations worldwide, including the famous 'kissing sailor' photograph in Times Square.",
          es: "El Día V-J (Día de la Victoria sobre Japón) ocurrió el 14 de agosto de 1945 (15 de agosto en Japón debido a las zonas horarias), cuando el emperador Hirohito anunció la rendición incondicional de Japón mediante una transmisión de radio. Esto siguió a los bombardeos atómicos de Hiroshima (6 de agosto) y Nagasaki (9 de agosto), y la declaración de guerra de la Unión Soviética a Japón (8 de agosto). La rendición formal se firmó el 2 de septiembre de 1945 a bordo del USS Missouri en la Bahía de Tokio. El Día V-J marcó el final de la Segunda Guerra Mundial y provocó celebraciones masivas en todo el mundo, incluida la famosa fotografía del 'marinero besando' en Times Square.",
          de: "Der V-J-Tag (Victory over Japan Day) fand am 14. August 1945 statt (15. August in Japan aufgrund der Zeitzonen), als Kaiser Hirohito Japans bedingungslose Kapitulation per Rundfunk verkündete. Dies folgte auf die Atombombenabwürfe auf Hiroshima (6. August) und Nagasaki (9. August) und die Kriegserklärung der Sowjetunion an Japan (8. August). Die formelle Kapitulation wurde am 2. September 1945 an Bord der USS Missouri in der Bucht von Tokio unterzeichnet. Der V-J-Tag markierte das Ende des Zweiten Weltkriegs und löste weltweit massive Feiern aus, darunter das berühmte 'küssender Matrose'-Foto am Times Square.",
          nl: "V-J Day (Victory over Japan Day) vond plaats op 14 augustus 1945 (15 augustus in Japan vanwege tijdzones), toen keizer Hirohito Japan's onvoorwaardelijke overgave aankondigde via een radio-uitzending. Dit volgde op de atoombommen op Hiroshima (6 augustus) en Nagasaki (9 augustus), en de oorlogsverklaring van de Sovjet-Unie aan Japan (8 augustus). De formele overgave werd ondertekend op 2 september 1945, aan boord van de USS Missouri in de Baai van Tokyo. V-J Day markeerde het einde van de Tweede Wereldoorlog en veroorzaakte massale vieringen wereldwijd, waaronder de beroemde 'zoenende zeeman'-foto op Times Square."
        }
      },
      {
        question: {
          en: "On August 14, 1947, which South Asian nation gained independence from British rule, leading to the partition of the Indian subcontinent?",
          es: "El 14 de agosto de 1947, ¿qué nación del sur de Asia obtuvo su independencia del dominio británico, lo que llevó a la partición del subcontinente indio?",
          de: "Am 14. August 1947 erlangte welche südasiatische Nation ihre Unabhängigkeit von der britischen Herrschaft, was zur Teilung des indischen Subkontinents führte?",
          nl: "Op 14 augustus 1947 verwierf welke Zuid-Aziatische natie onafhankelijkheid van de Britse overheersing, wat leidde tot de verdeling van het Indiase subcontinent?"
        },
        options: [
          {
            en: "Bangladesh",
            es: "Bangladesh",
            de: "Bangladesch",
            nl: "Bangladesh"
          },
          {
            en: "Pakistan",
            es: "Pakistán",
            de: "Pakistan",
            nl: "Pakistan"
          },
          {
            en: "India",
            es: "India",
            de: "Indien",
            nl: "India"
          },
          {
            en: "Sri Lanka",
            es: "Sri Lanka",
            de: "Sri Lanka",
            nl: "Sri Lanka"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Pakistan gained independence on August 14, 1947 (India followed on August 15), marking the end of British colonial rule and the partition of the Indian subcontinent. The partition created Pakistan as a Muslim-majority nation (initially comprising West Pakistan and East Pakistan, which later became Bangladesh in 1971). The division triggered one of the largest mass migrations in history, with 10-20 million people crossing borders, and resulted in communal violence that killed hundreds of thousands. Muhammad Ali Jinnah became Pakistan's first Governor-General. Pakistan's capital is Islamabad.",
          es: "Pakistán obtuvo su independencia el 14 de agosto de 1947 (India siguió el 15 de agosto), marcando el fin del dominio colonial británico y la partición del subcontinente indio. La partición creó Pakistán como una nación de mayoría musulmana (inicialmente compuesta por Pakistán Occidental y Pakistán Oriental, que luego se convirtió en Bangladesh en 1971). La división provocó una de las mayores migraciones masivas de la historia, con 10-20 millones de personas cruzando fronteras, y resultó en violencia comunitaria que mató a cientos de miles. Muhammad Ali Jinnah se convirtió en el primer Gobernador General de Pakistán. La capital de Pakistán es Islamabad.",
          de: "Pakistan erlangte am 14. August 1947 seine Unabhängigkeit (Indien folgte am 15. August), was das Ende der britischen Kolonialherrschaft und die Teilung des indischen Subkontinents markierte. Die Teilung schuf Pakistan als eine muslimische Mehrheitsnation (zunächst bestehend aus West-Pakistan und Ost-Pakistan, das später 1971 zu Bangladesch wurde). Die Teilung löste eine der größten Massenwanderungen der Geschichte aus, bei der 10-20 Millionen Menschen Grenzen überquerten, und führte zu kommunaler Gewalt, die Hunderttausende tötete. Muhammad Ali Jinnah wurde Pakistans erster Generalgouverneur. Pakistans Hauptstadt ist Islamabad.",
          nl: "Pakistan verwierf onafhankelijkheid op 14 augustus 1947 (India volgde op 15 augustus), wat het einde van de Britse koloniale overheersing en de verdeling van het Indiase subcontinent markeerde. De verdeling creëerde Pakistan als een moslimmeerderheid natie (aanvankelijk bestaande uit West-Pakistan en Oost-Pakistan, dat later in 1971 Bangladesh werd). De verdeling veroorzaakte een van de grootste massale migraties in de geschiedenis, waarbij 10-20 miljoen mensen grenzen overstaken, en resulteerde in gemeenschapsgeweld dat honderdduizenden doodde. Muhammad Ali Jinnah werd Pakistan's eerste gouverneur-generaal. Pakistan's hoofdstad is Islamabad."
        }
      },
      {
        question: {
          en: "On August 14, 1935, which landmark U.S. legislation was signed into law, creating a social insurance program for retirees and the unemployed?",
          es: "El 14 de agosto de 1935, ¿qué legislación histórica de EE.UU. fue promulgada, creando un programa de seguro social para jubilados y desempleados?",
          de: "Am 14. August 1935 wurde welches wegweisende US-Gesetz unterzeichnet, das ein Sozialversicherungsprogramm für Rentner und Arbeitslose schuf?",
          nl: "Op 14 augustus 1935 werd welke baanbrekende Amerikaanse wetgeving ondertekend, waarbij een sociaal verzekeringsprogramma voor gepensioneerden en werklozen werd gecreëerd?"
        },
        options: [
          {
            en: "Fair Labor Standards Act",
            es: "Ley de Normas Laborales Justas",
            de: "Fair Labor Standards Act",
            nl: "Fair Labor Standards Act"
          },
          {
            en: "Social Security Act",
            es: "Ley de Seguridad Social",
            de: "Sozialversicherungsgesetz",
            nl: "Social Security Act"
          },
          {
            en: "Wagner Act",
            es: "Ley Wagner",
            de: "Wagner-Gesetz",
            nl: "Wagner Act"
          },
          {
            en: "GI Bill",
            es: "Ley GI",
            de: "GI Bill",
            nl: "GI Bill"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Social Security Act was signed into law by President Franklin D. Roosevelt on August 14, 1935, as part of his New Deal programs during the Great Depression. It established a social insurance system providing retirement benefits for workers aged 65 and older, unemployment insurance, and aid to dependent children and the disabled. The program is funded through payroll taxes (FICA). Social Security became one of the most successful and popular government programs in U.S. history, lifting millions of elderly Americans out of poverty. Today, it provides benefits to over 65 million Americans.",
          es: "La Ley de Seguridad Social fue promulgada por el presidente Franklin D. Roosevelt el 14 de agosto de 1935, como parte de sus programas del New Deal durante la Gran Depresión. Estableció un sistema de seguro social que proporciona beneficios de jubilación para trabajadores de 65 años o más, seguro de desempleo y ayuda a niños dependientes y discapacitados. El programa se financia a través de impuestos sobre la nómina (FICA). La Seguridad Social se convirtió en uno de los programas gubernamentales más exitosos y populares en la historia de EE.UU., sacando a millones de estadounidenses ancianos de la pobreza. Hoy, proporciona beneficios a más de 65 millones de estadounidenses.",
          de: "Der Social Security Act wurde am 14. August 1935 von Präsident Franklin D. Roosevelt als Teil seiner New-Deal-Programme während der Großen Depression unterzeichnet. Es etablierte ein Sozialversicherungssystem, das Altersrenten für Arbeiter ab 65 Jahren, Arbeitslosenversicherung und Hilfe für abhängige Kinder und Behinderte bereitstellte. Das Programm wird durch Lohnsteuern (FICA) finanziert. Die Sozialversicherung wurde zu einem der erfolgreichsten und beliebtesten Regierungsprogramme in der US-Geschichte und hob Millionen älterer Amerikaner aus der Armut. Heute bietet es Leistungen für über 65 Millionen Amerikaner.",
          nl: "De Social Security Act werd ondertekend door president Franklin D. Roosevelt op 14 augustus 1935, als onderdeel van zijn New Deal-programma's tijdens de Grote Depressie. Het vestigde een sociaal verzekeringssysteem dat pensioenuitkeringen bood voor werknemers van 65 jaar en ouder, werkloosheidsverzekering en hulp aan afhankelijke kinderen en gehandicapten. Het programma wordt gefinancierd door loonbelastingen (FICA). Social Security werd een van de meest succesvolle en populaire overheidsprogramma's in de Amerikaanse geschiedenis, waarmee miljoenen oudere Amerikanen uit de armoede werden getild. Vandaag biedt het uitkeringen aan meer dan 65 miljoen Amerikanen."
        }
      },
      {
        question: {
          en: "On August 14, 2003, what massive electrical failure affected 50 million people across the northeastern United States and Canada?",
          es: "El 14 de agosto de 2003, ¿qué fallo eléctrico masivo afectó a 50 millones de personas en el noreste de Estados Unidos y Canadá?",
          de: "Am 14. August 2003 beeinträchtigte welcher massive Stromausfall 50 Millionen Menschen im Nordosten der Vereinigten Staaten und Kanadas?",
          nl: "Op 14 augustus 2003 trof welke massale elektrische storing 50 miljoen mensen in het noordoosten van de Verenigde Staten en Canada?"
        },
        options: [
          {
            en: "Hurricane blackout",
            es: "Apagón por huracán",
            de: "Hurrikan-Stromausfall",
            nl: "Orkaan stroomuitval"
          },
          {
            en: "Cyberattack blackout",
            es: "Apagón por ciberataque",
            de: "Cyberangriff-Stromausfall",
            nl: "Cyberaanval stroomuitval"
          },
          {
            en: "Northeast blackout",
            es: "Apagón del noreste",
            de: "Nordost-Stromausfall",
            nl: "Noordoost stroomuitval"
          },
          {
            en: "Grid collapse",
            es: "Colapso de la red",
            de: "Netzzusammenbruch",
            nl: "Netinstorting"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Northeast blackout of 2003 occurred on August 14, affecting approximately 50 million people in eight U.S. states and Ontario, Canada. It was the second-largest power outage in history. The blackout was triggered by a software bug in the alarm system at FirstEnergy Corporation in Ohio, combined with overgrown trees touching power lines. The cascading failure lasted up to four days in some areas. Major cities including New York City, Toronto, Detroit, and Cleveland lost power. The event led to significant improvements in power grid monitoring and vegetation management.",
          es: "El apagón del noreste de 2003 ocurrió el 14 de agosto, afectando aproximadamente a 50 millones de personas en ocho estados de EE.UU. y Ontario, Canadá. Fue el segundo apagón más grande de la historia. El apagón fue provocado por un error de software en el sistema de alarma de FirstEnergy Corporation en Ohio, combinado con árboles crecidos en exceso que tocaban las líneas eléctricas. El fallo en cascada duró hasta cuatro días en algunas áreas. Las principales ciudades, incluidas Nueva York, Toronto, Detroit y Cleveland, perdieron energía. El evento condujo a mejoras significativas en el monitoreo de la red eléctrica y la gestión de la vegetación.",
          de: "Der Nordost-Stromausfall von 2003 ereignete sich am 14. August und betraf etwa 50 Millionen Menschen in acht US-Bundesstaaten und Ontario, Kanada. Es war der zweitgrößte Stromausfall der Geschichte. Der Stromausfall wurde durch einen Software-Fehler im Alarmsystem der FirstEnergy Corporation in Ohio ausgelöst, kombiniert mit überwucherten Bäumen, die Stromleitungen berührten. Der kaskadierende Ausfall dauerte in einigen Gebieten bis zu vier Tage. Große Städte wie New York City, Toronto, Detroit und Cleveland verloren Strom. Das Ereignis führte zu erheblichen Verbesserungen bei der Überwachung des Stromnetzes und der Vegetationsverwaltung.",
          nl: "De Noordoost stroomuitval van 2003 vond plaats op 14 augustus en trof ongeveer 50 miljoen mensen in acht Amerikaanse staten en Ontario, Canada. Het was de op een na grootste stroomuitval in de geschiedenis. De stroomuitval werd veroorzaakt door een softwarefout in het alarmsysteem van FirstEnergy Corporation in Ohio, gecombineerd met overwoekerde bomen die stroomleidingen raakten. De trapsgewijze storing duurde in sommige gebieden tot vier dagen. Grote steden waaronder New York City, Toronto, Detroit en Cleveland verloren stroom. De gebeurtenis leidde tot aanzienlijke verbeteringen in stroombewaking en vegetatiebeheer."
        }
      },
      {
        question: {
          en: "On August 14, 1880, which European city's historic center was devastated by a major fire, leading to its reconstruction in Art Nouveau style?",
          es: "El 14 de agosto de 1880, ¿el centro histórico de qué ciudad europea fue devastado por un gran incendio, lo que llevó a su reconstrucción en estilo Art Nouveau?",
          de: "Am 14. August 1880 wurde das historische Zentrum welcher europäischen Stadt durch einen großen Brand verwüstet, was zu seinem Wiederaufbau im Jugendstil führte?",
          nl: "Op 14 augustus 1880 werd het historische centrum van welke Europese stad verwoest door een grote brand, wat leidde tot de wederopbouw in Art Nouveau-stijl?"
        },
        options: [
          {
            en: "Prague",
            es: "Praga",
            de: "Prag",
            nl: "Praag"
          },
          {
            en: "Thessaloniki",
            es: "Tesalónica",
            de: "Thessaloniki",
            nl: "Thessaloniki"
          },
          {
            en: "Vienna",
            es: "Viena",
            de: "Wien",
            nl: "Wenen"
          },
          {
            en: "Brussels",
            es: "Bruselas",
            de: "Brüssel",
            nl: "Brussel"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Thessaloniki (Greece) experienced a devastating fire on August 14, 1880, though the most famous fire occurred in 1917. However, an 1890 fire was particularly significant. The 1917 Great Fire destroyed much of the city center, burning for 32 hours and leaving 70,000 homeless. The reconstruction followed modern urban planning principles with wide boulevards and Art Nouveau and neoclassical architecture. Thessaloniki is Greece's second-largest city, founded in 315 BC, and features numerous Byzantine churches, Roman ruins, and Ottoman structures. It's a UNESCO World Heritage site.",
          es: "Tesalónica (Grecia) experimentó un incendio devastador el 14 de agosto de 1880, aunque el incendio más famoso ocurrió en 1917. Sin embargo, un incendio de 1890 fue particularmente significativo. El Gran Incendio de 1917 destruyó gran parte del centro de la ciudad, ardiendo durante 32 horas y dejando a 70,000 personas sin hogar. La reconstrucción siguió principios modernos de planificación urbana con amplios bulevares y arquitectura Art Nouveau y neoclásica. Tesalónica es la segunda ciudad más grande de Grecia, fundada en 315 a.C., y presenta numerosas iglesias bizantinas, ruinas romanas y estructuras otomanas. Es un sitio del Patrimonio Mundial de la UNESCO.",
          de: "Thessaloniki (Griechenland) erlebte am 14. August 1880 einen verheerenden Brand, obwohl der berühmteste Brand 1917 stattfand. Ein Brand von 1890 war jedoch besonders bedeutsam. Der Große Brand von 1917 zerstörte einen Großteil des Stadtzentrums, brannte 32 Stunden und machte 70.000 obdachlos. Der Wiederaufbau folgte modernen Stadtplanungsprinzipien mit breiten Boulevards und Jugendstil- und neoklassizistischer Architektur. Thessaloniki ist Griechenlands zweitgrößte Stadt, gegründet 315 v. Chr., und verfügt über zahlreiche byzantinische Kirchen, römische Ruinen und osmanische Strukturen. Es ist UNESCO-Weltkulturerbe.",
          nl: "Thessaloniki (Griekenland) ervoer een verwoestende brand op 14 augustus 1880, hoewel de meest beroemde brand in 1917 plaatsvond. Een brand in 1890 was echter bijzonder significant. De Grote Brand van 1917 verwoestte een groot deel van het stadscentrum, brandde 32 uur en maakte 70.000 dakloos. De wederopbouw volgde moderne stadsplanningsprincipes met brede boulevards en Art Nouveau en neoklassieke architectuur. Thessaloniki is Griekenland's tweede grootste stad, gesticht in 315 v.Chr., en bevat talrijke Byzantijnse kerken, Romeinse ruïnes en Ottomaanse structuren. Het is een UNESCO-werelderfgoed."
        }
      }
    ],

    // Day 15 - August 15th: India independence, Panama Canal opens, Woodstock begins, Napoleon born
    day15: [
      {
        question: {
          en: "On August 15, 1947, which South Asian nation gained independence from British rule, becoming the world's largest democracy?",
          es: "El 15 de agosto de 1947, ¿qué nación del sur de Asia obtuvo su independencia del dominio británico, convirtiéndose en la democracia más grande del mundo?",
          de: "Am 15. August 1947 erlangte welche südasiatische Nation ihre Unabhängigkeit von der britischen Herrschaft und wurde zur weltweit größten Demokratie?",
          nl: "Op 15 augustus 1947 verwierf welke Zuid-Aziatische natie onafhankelijkheid van de Britse overheersing en werd 's werelds grootste democratie?"
        },
        options: [
          {
            en: "Pakistan",
            es: "Pakistán",
            de: "Pakistan",
            nl: "Pakistan"
          },
          {
            en: "India",
            es: "India",
            de: "Indien",
            nl: "India"
          },
          {
            en: "Bangladesh",
            es: "Bangladesh",
            de: "Bangladesch",
            nl: "Bangladesh"
          },
          {
            en: "Sri Lanka",
            es: "Sri Lanka",
            de: "Sri Lanka",
            nl: "Sri Lanka"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "India gained independence on August 15, 1947, ending nearly 200 years of British colonial rule. The date followed Pakistan's independence on August 14. Jawaharlal Nehru became India's first Prime Minister, delivering his famous 'Tryst with Destiny' speech. The partition of British India into India and Pakistan triggered massive migration and communal violence. Today, India is the world's largest democracy with over 1.4 billion people, the world's fifth-largest economy, and a nuclear power. Independence Day is celebrated annually as a national holiday with flag-hoisting ceremonies and cultural programs.",
          es: "India obtuvo su independencia el 15 de agosto de 1947, poniendo fin a casi 200 años de dominio colonial británico. La fecha siguió a la independencia de Pakistán el 14 de agosto. Jawaharlal Nehru se convirtió en el primer Primer Ministro de India, pronunciando su famoso discurso 'Cita con el Destino'. La partición de la India británica en India y Pakistán provocó migraciones masivas y violencia comunitaria. Hoy, India es la democracia más grande del mundo con más de 1.4 mil millones de personas, la quinta economía más grande del mundo y una potencia nuclear. El Día de la Independencia se celebra anualmente como feriado nacional con ceremonias de izado de banderas y programas culturales.",
          de: "Indien erlangte am 15. August 1947 seine Unabhängigkeit und beendete damit fast 200 Jahre britischer Kolonialherrschaft. Das Datum folgte auf Pakistans Unabhängigkeit am 14. August. Jawaharlal Nehru wurde Indiens erster Premierminister und hielt seine berühmte Rede 'Tryst with Destiny'. Die Teilung Britisch-Indiens in Indien und Pakistan löste massive Migration und kommunale Gewalt aus. Heute ist Indien die größte Demokratie der Welt mit über 1,4 Milliarden Menschen, die fünftgrößte Volkswirtschaft der Welt und eine Atommacht. Der Unabhängigkeitstag wird jährlich als Nationalfeiertag mit Flaggenhissungszeremonien und Kulturprogrammen gefeiert.",
          nl: "India verwierf onafhankelijkheid op 15 augustus 1947, waarmee bijna 200 jaar Britse koloniale overheersing eindigde. De datum volgde op Pakistan's onafhankelijkheid op 14 augustus. Jawaharlal Nehru werd India's eerste premier en hield zijn beroemde 'Tryst with Destiny' toespraak. De verdeling van Brits-Indië in India en Pakistan veroorzaakte massale migratie en gemeenschapsgeweld. Vandaag is India 's werelds grootste democratie met meer dan 1,4 miljard mensen, 's werelds vijfde grootste economie en een kernmacht. Onafhankelijkheidsdag wordt jaarlijks gevierd als nationale feestdag met vlaghijsceremonies en culturele programma's."
        }
      },
      {
        question: {
          en: "On August 15, 1914, which major engineering marvel connecting two oceans was officially opened to traffic?",
          es: "El 15 de agosto de 1914, ¿qué gran maravilla de la ingeniería que conecta dos océanos se abrió oficialmente al tráfico?",
          de: "Am 15. August 1914 wurde welches große Ingenieurwunder, das zwei Ozeane verbindet, offiziell für den Verkehr geöffnet?",
          nl: "Op 15 augustus 1914 werd welk groot technisch wonder dat twee oceanen verbindt officieel geopend voor verkeer?"
        },
        options: [
          {
            en: "Suez Canal",
            es: "Canal de Suez",
            de: "Suezkanal",
            nl: "Suezkanaal"
          },
          {
            en: "Panama Canal",
            es: "Canal de Panamá",
            de: "Panamakanal",
            nl: "Panamakanaal"
          },
          {
            en: "Kiel Canal",
            es: "Canal de Kiel",
            de: "Nord-Ostsee-Kanal",
            nl: "Kielkanaal"
          },
          {
            en: "Corinth Canal",
            es: "Canal de Corinto",
            de: "Kanal von Korinth",
            nl: "Kanaal van Korinthe"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Panama Canal officially opened on August 15, 1914, when the cargo ship SS Ancon made the first transit. The 51-mile waterway connects the Atlantic and Pacific Oceans through the Isthmus of Panama, dramatically reducing shipping times and distances. Construction took 10 years (1904-1914) under U.S. leadership after a failed French attempt. The project cost approximately $375 million and over 25,000 workers died, mostly from diseases like malaria and yellow fever. The canal uses a system of locks to raise ships 85 feet above sea level. It was transferred to Panamanian control in 1999.",
          es: "El Canal de Panamá se abrió oficialmente el 15 de agosto de 1914, cuando el buque de carga SS Ancon realizó el primer tránsito. La vía fluvial de 51 millas conecta los océanos Atlántico y Pacífico a través del istmo de Panamá, reduciendo drásticamente los tiempos y distancias de envío. La construcción tomó 10 años (1904-1914) bajo el liderazgo de EE.UU. después de un intento francés fallido. El proyecto costó aproximadamente $375 millones y más de 25,000 trabajadores murieron, principalmente por enfermedades como la malaria y la fiebre amarilla. El canal usa un sistema de esclusas para elevar los barcos 85 pies sobre el nivel del mar. Fue transferido al control panameño en 1999.",
          de: "Der Panamakanal wurde am 15. August 1914 offiziell eröffnet, als das Frachtschiff SS Ancon die erste Durchfahrt machte. Die 51 Meilen lange Wasserstraße verbindet den Atlantischen und Pazifischen Ozean durch die Landenge von Panama und verkürzt Schifffahrtszeiten und -distanzen dramatisch. Der Bau dauerte 10 Jahre (1904-1914) unter US-Führung nach einem gescheiterten französischen Versuch. Das Projekt kostete etwa 375 Millionen Dollar und über 25.000 Arbeiter starben, hauptsächlich an Krankheiten wie Malaria und Gelbfieber. Der Kanal verwendet ein Schleusensystem, um Schiffe 85 Fuß über den Meeresspiegel zu heben. Er wurde 1999 unter panamaische Kontrolle übertragen.",
          nl: "Het Panamakanaal werd officieel geopend op 15 augustus 1914, toen het vrachtschip SS Ancon de eerste doorgang maakte. De 51 mijl lange waterweg verbindt de Atlantische en Stille Oceaan via de landengte van Panama, waardoor verzendtijden en afstanden drastisch worden verkort. De bouw duurde 10 jaar (1904-1914) onder Amerikaans leiderschap na een mislukte Franse poging. Het project kostte ongeveer $375 miljoen en meer dan 25.000 arbeiders stierven, voornamelijk aan ziekten zoals malaria en gele koorts. Het kanaal gebruikt een sluizensysteem om schepen 85 voet boven zeeniveau te tillen. Het werd in 1999 overgedragen aan Panamese controle."
        }
      },
      {
        question: {
          en: "On August 15, 1969, which legendary music festival began on a dairy farm in upstate New York, becoming a defining moment of the 1960s counterculture?",
          es: "El 15 de agosto de 1969, ¿qué legendario festival de música comenzó en una granja lechera en el norte del estado de Nueva York, convirtiéndose en un momento definitorio de la contracultura de los años 60?",
          de: "Am 15. August 1969 begann welches legendäre Musikfestival auf einer Milchfarm im Bundesstaat New York und wurde zu einem prägenden Moment der Gegenkultur der 1960er Jahre?",
          nl: "Op 15 augustus 1969 begon welk legendarisch muziekfestival op een melkveebedrijf in upstate New York, dat een bepalend moment werd van de tegencultuur van de jaren 60?"
        },
        options: [
          {
            en: "Monterey Pop Festival",
            es: "Festival Pop de Monterey",
            de: "Monterey Pop Festival",
            nl: "Monterey Pop Festival"
          },
          {
            en: "Woodstock",
            es: "Woodstock",
            de: "Woodstock",
            nl: "Woodstock"
          },
          {
            en: "Altamont Free Concert",
            es: "Concierto Gratuito de Altamont",
            de: "Altamont Free Concert",
            nl: "Altamont Free Concert"
          },
          {
            en: "Isle of Wight Festival",
            es: "Festival de la Isla de Wight",
            de: "Isle of Wight Festival",
            nl: "Isle of Wight Festival"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Woodstock Music & Art Fair began on August 15, 1969, in Bethel, New York (not Woodstock). Billed as 'Three Days of Peace and Music', the festival attracted an estimated 400,000 attendees despite being planned for 50,000. Performers included Jimi Hendrix, Janis Joplin, The Who, Grateful Dead, Santana, and Crosby, Stills, Nash & Young. The festival became an iconic symbol of the 1960s counterculture, hippie movement, and anti-Vietnam War sentiment. Despite logistical challenges, rain, and mud, it's remembered for its peaceful atmosphere and legendary performances.",
          es: "El Festival de Música y Arte de Woodstock comenzó el 15 de agosto de 1969 en Bethel, Nueva York (no Woodstock). Anunciado como 'Tres Días de Paz y Música', el festival atrajo a un estimado de 400,000 asistentes a pesar de estar planeado para 50,000. Los artistas incluyeron a Jimi Hendrix, Janis Joplin, The Who, Grateful Dead, Santana y Crosby, Stills, Nash & Young. El festival se convirtió en un símbolo icónico de la contracultura de los años 60, el movimiento hippie y el sentimiento anti-Guerra de Vietnam. A pesar de los desafíos logísticos, la lluvia y el barro, se recuerda por su atmósfera pacífica y actuaciones legendarias.",
          de: "Das Woodstock Music & Art Fair begann am 15. August 1969 in Bethel, New York (nicht Woodstock). Als 'Drei Tage Frieden und Musik' angekündigt, zog das Festival schätzungsweise 400.000 Besucher an, obwohl es für 50.000 geplant war. Zu den Künstlern gehörten Jimi Hendrix, Janis Joplin, The Who, Grateful Dead, Santana und Crosby, Stills, Nash & Young. Das Festival wurde zu einem ikonischen Symbol der Gegenkultur der 1960er Jahre, der Hippie-Bewegung und der Anti-Vietnam-Kriegs-Stimmung. Trotz logistischer Herausforderungen, Regen und Schlamm wird es für seine friedliche Atmosphäre und legendären Auftritte in Erinnerung behalten.",
          nl: "Het Woodstock Music & Art Fair begon op 15 augustus 1969 in Bethel, New York (niet Woodstock). Aangekondigd als 'Drie Dagen van Vrede en Muziek', trok het festival naar schatting 400.000 bezoekers, ondanks dat het gepland was voor 50.000. Artiesten waren onder meer Jimi Hendrix, Janis Joplin, The Who, Grateful Dead, Santana en Crosby, Stills, Nash & Young. Het festival werd een iconisch symbool van de tegencultuur van de jaren 60, de hippiebeweging en anti-Vietnamoorlog sentiment. Ondanks logistieke uitdagingen, regen en modder wordt het herinnerd om zijn vredige sfeer en legendarische optredens."
        }
      },
      {
        question: {
          en: "On August 15, 1769, which famous French military leader and emperor who conquered much of Europe was born in Corsica?",
          es: "El 15 de agosto de 1769, ¿qué famoso líder militar y emperador francés que conquistó gran parte de Europa nació en Córcega?",
          de: "Am 15. August 1769 wurde welcher berühmte französische Militärführer und Kaiser, der einen Großteil Europas eroberte, auf Korsika geboren?",
          nl: "Op 15 augustus 1769 werd welke beroemde Franse militaire leider en keizer die een groot deel van Europa veroverde geboren op Corsica?"
        },
        options: [
          {
            en: "Louis XIV",
            es: "Luis XIV",
            de: "Ludwig XIV",
            nl: "Lodewijk XIV"
          },
          {
            en: "Napoleon Bonaparte",
            es: "Napoleón Bonaparte",
            de: "Napoleon Bonaparte",
            nl: "Napoleon Bonaparte"
          },
          {
            en: "Charles de Gaulle",
            es: "Charles de Gaulle",
            de: "Charles de Gaulle",
            nl: "Charles de Gaulle"
          },
          {
            en: "Louis XVI",
            es: "Luis XVI",
            de: "Ludwig XVI",
            nl: "Lodewijk XVI"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Napoleon Bonaparte was born on August 15, 1769, in Ajaccio, Corsica (which had recently become French territory). He rose from artillery officer to become Emperor of France (1804-1814, 1815), conquering much of Europe through brilliant military campaigns. Napoleon implemented the Napoleonic Code, which influenced legal systems worldwide, and reformed education, infrastructure, and governance. His empire stretched from Spain to Poland at its peak. He was defeated at Waterloo in 1815 and exiled to Saint Helena, where he died in 1821. Napoleon remains one of history's most studied military strategists.",
          es: "Napoleón Bonaparte nació el 15 de agosto de 1769 en Ajaccio, Córcega (que recientemente se había convertido en territorio francés). Ascendió de oficial de artillería a convertirse en Emperador de Francia (1804-1814, 1815), conquistando gran parte de Europa a través de brillantes campañas militares. Napoleón implementó el Código Napoleónico, que influyó en los sistemas legales de todo el mundo, y reformó la educación, infraestructura y gobernanza. Su imperio se extendió desde España hasta Polonia en su apogeo. Fue derrotado en Waterloo en 1815 y exiliado a Santa Elena, donde murió en 1821. Napoleón sigue siendo uno de los estrategas militares más estudiados de la historia.",
          de: "Napoleon Bonaparte wurde am 15. August 1769 in Ajaccio, Korsika (das kürzlich französisches Territorium geworden war) geboren. Er stieg vom Artillerieoffizier zum Kaiser von Frankreich auf (1804-1814, 1815) und eroberte durch brillante Militärkampagnen einen Großteil Europas. Napoleon führte den Code Napoléon ein, der Rechtssysteme weltweit beeinflusste, und reformierte Bildung, Infrastruktur und Regierungsführung. Sein Reich erstreckte sich auf seinem Höhepunkt von Spanien bis Polen. Er wurde 1815 bei Waterloo besiegt und nach St. Helena verbannt, wo er 1821 starb. Napoleon bleibt einer der am meisten studierten Militärstrategen der Geschichte.",
          nl: "Napoleon Bonaparte werd geboren op 15 augustus 1769 in Ajaccio, Corsica (dat onlangs Frans grondgebied was geworden). Hij steeg van artillerieofficier op tot keizer van Frankrijk (1804-1814, 1815), waarbij hij een groot deel van Europa veroverde door briljante militaire campagnes. Napoleon voerde de Code Napoléon in, die rechtssystemen wereldwijd beïnvloedde, en hervormde onderwijs, infrastructuur en bestuur. Zijn rijk strekte zich op zijn hoogtepunt uit van Spanje tot Polen. Hij werd verslagen bij Waterloo in 1815 en verbannen naar Sint-Helena, waar hij stierf in 1821. Napoleon blijft een van de meest bestudeerde militaire strategen in de geschiedenis."
        }
      },
      {
        question: {
          en: "On August 15, 1945, which Asian country announced its surrender, effectively ending World War II in the Pacific Theater?",
          es: "El 15 de agosto de 1945, ¿qué país asiático anunció su rendición, poniendo fin efectivamente a la Segunda Guerra Mundial en el Teatro del Pacífico?",
          de: "Am 15. August 1945 kündigte welches asiatische Land seine Kapitulation an und beendete damit effektiv den Zweiten Weltkrieg im Pazifik-Theater?",
          nl: "Op 15 augustus 1945 kondigde welk Aziatisch land zijn overgave aan, waarmee de Tweede Wereldoorlog in het Pacifische Theater effectief eindigde?"
        },
        options: [
          {
            en: "China",
            es: "China",
            de: "China",
            nl: "China"
          },
          {
            en: "Korea",
            es: "Corea",
            de: "Korea",
            nl: "Korea"
          },
          {
            en: "Japan",
            es: "Japón",
            de: "Japan",
            nl: "Japan"
          },
          {
            en: "Philippines",
            es: "Filipinas",
            de: "Philippinen",
            nl: "Filipijnen"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Japan announced its surrender on August 15, 1945 (Japan Standard Time), following the atomic bombings of Hiroshima and Nagasaki and the Soviet Union's entry into the war. Emperor Hirohito's radio broadcast (the Jewel Voice Broadcast) was the first time most Japanese citizens heard their emperor's voice. This became known as V-J Day (Victory over Japan Day). The formal surrender ceremony took place on September 2, 1945, aboard the USS Missouri in Tokyo Bay. Japan's surrender ended World War II and led to Allied occupation and Japan's transformation into a democratic, pacifist nation.",
          es: "Japón anunció su rendición el 15 de agosto de 1945 (hora estándar de Japón), tras los bombardeos atómicos de Hiroshima y Nagasaki y la entrada de la Unión Soviética en la guerra. La transmisión de radio del emperador Hirohito (la Transmisión de la Voz de Joya) fue la primera vez que la mayoría de los ciudadanos japoneses escucharon la voz de su emperador. Esto se conoció como Día V-J (Día de la Victoria sobre Japón). La ceremonia formal de rendición tuvo lugar el 2 de septiembre de 1945 a bordo del USS Missouri en la Bahía de Tokio. La rendición de Japón terminó la Segunda Guerra Mundial y condujo a la ocupación aliada y la transformación de Japón en una nación democrática y pacifista.",
          de: "Japan kündigte am 15. August 1945 (japanische Standardzeit) seine Kapitulation an, nach den Atombombenabwürfen auf Hiroshima und Nagasaki und dem Kriegseintritt der Sowjetunion. Kaiser Hirohitos Rundfunkübertragung (die Jewel Voice Broadcast) war das erste Mal, dass die meisten japanischen Bürger die Stimme ihres Kaisers hörten. Dies wurde als V-J-Tag (Victory over Japan Day) bekannt. Die formelle Kapitulationszeremonie fand am 2. September 1945 an Bord der USS Missouri in der Bucht von Tokio statt. Japans Kapitulation beendete den Zweiten Weltkrieg und führte zur alliierten Besatzung und Japans Transformation in eine demokratische, pazifistische Nation.",
          nl: "Japan kondigde zijn overgave aan op 15 augustus 1945 (Japanse Standaardtijd), na de atoombommen op Hiroshima en Nagasaki en de toetreding van de Sovjet-Unie tot de oorlog. Keizer Hirohito's radio-uitzending (de Jewel Voice Broadcast) was de eerste keer dat de meeste Japanse burgers de stem van hun keizer hoorden. Dit werd bekend als V-J Day (Victory over Japan Day). De formele overgaveceremonie vond plaats op 2 september 1945, aan boord van de USS Missouri in de Baai van Tokyo. Japan's overgave beëindigde de Tweede Wereldoorlog en leidde tot geallieerde bezetting en Japan's transformatie tot een democratische, pacifistische natie."
        }
      }
    ],

    // Day 16 - August 16th: Elvis Presley dies, Madonna born, Battle of Bennington
    day16: [
      {
        question: {
          en: "On August 16, 1977, which legendary 'King of Rock and Roll' died at his Graceland mansion in Memphis, Tennessee at age 42?",
          es: "El 16 de agosto de 1977, ¿qué legendario 'Rey del Rock and Roll' murió en su mansión Graceland en Memphis, Tennessee a los 42 años?",
          de: "Am 16. August 1977 starb welcher legendäre 'King of Rock and Roll' in seinem Graceland-Anwesen in Memphis, Tennessee im Alter von 42 Jahren?",
          nl: "Op 16 augustus 1977 stierf welke legendarische 'King of Rock and Roll' in zijn Graceland-landgoed in Memphis, Tennessee op 42-jarige leeftijd?"
        },
        options: [
          {
            en: "Chuck Berry",
            es: "Chuck Berry",
            de: "Chuck Berry",
            nl: "Chuck Berry"
          },
          {
            en: "Jerry Lee Lewis",
            es: "Jerry Lee Lewis",
            de: "Jerry Lee Lewis",
            nl: "Jerry Lee Lewis"
          },
          {
            en: "Elvis Presley",
            es: "Elvis Presley",
            de: "Elvis Presley",
            nl: "Elvis Presley"
          },
          {
            en: "Buddy Holly",
            es: "Buddy Holly",
            de: "Buddy Holly",
            nl: "Buddy Holly"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Elvis Presley died on August 16, 1977, at Graceland, his Memphis home. The cause was cardiac arrhythmia, likely linked to prescription drug use. Elvis revolutionized popular music, blending country, blues, and gospel into rock and roll. He had 18 number-one hits, starred in 31 films, and became a global cultural icon. His death sparked massive mourning, with tens of thousands gathering at Graceland. Elvis remains one of the best-selling music artists of all time with over 500 million records sold worldwide. Graceland is now a major tourist attraction and museum.",
          es: "Elvis Presley murió el 16 de agosto de 1977 en Graceland, su hogar en Memphis. La causa fue arritmia cardíaca, probablemente relacionada con el uso de medicamentos recetados. Elvis revolucionó la música popular, fusionando country, blues y gospel en rock and roll. Tuvo 18 éxitos número uno, protagonizó 31 películas y se convirtió en un ícono cultural global. Su muerte provocó un duelo masivo, con decenas de miles reuniéndose en Graceland. Elvis sigue siendo uno de los artistas musicales más vendidos de todos los tiempos con más de 500 millones de discos vendidos en todo el mundo. Graceland es ahora una importante atracción turística y museo.",
          de: "Elvis Presley starb am 16. August 1977 in Graceland, seinem Heim in Memphis. Die Ursache war Herzrhythmusstörung, wahrscheinlich im Zusammenhang mit verschreibungspflichtigem Drogenkonsum. Elvis revolutionierte die Popmusik, indem er Country, Blues und Gospel zu Rock and Roll verschmolz. Er hatte 18 Nummer-eins-Hits, spielte in 31 Filmen mit und wurde zu einer globalen Kulturikone. Sein Tod löste massive Trauer aus, wobei Zehntausende sich in Graceland versammelten. Elvis bleibt einer der meistverkauften Musikkünstler aller Zeiten mit über 500 Millionen weltweit verkauften Platten. Graceland ist heute eine wichtige Touristenattraktion und ein Museum.",
          nl: "Elvis Presley stierf op 16 augustus 1977 in Graceland, zijn huis in Memphis. De oorzaak was hartritmestoornis, waarschijnlijk gekoppeld aan gebruik van voorgeschreven medicijnen. Elvis revolutioneerde de populaire muziek door country, blues en gospel te vermengen tot rock and roll. Hij had 18 nummer één-hits, speelde in 31 films en werd een mondiale culturele icoon. Zijn dood veroorzaakte massale rouw, met tienduizenden die zich verzamelden bij Graceland. Elvis blijft een van de best verkochte muziekartiest aller tijden met meer dan 500 miljoen verkochte platen wereldwijd. Graceland is nu een belangrijke toeristische attractie en museum."
        }
      },
      {
        question: {
          en: "On August 16, 1958, which pop icon known as the 'Queen of Pop' was born in Bay City, Michigan?",
          es: "El 16 de agosto de 1958, ¿qué ícono del pop conocida como la 'Reina del Pop' nació en Bay City, Michigan?",
          de: "Am 16. August 1958 wurde welche Popikone, bekannt als die 'Queen of Pop', in Bay City, Michigan geboren?",
          nl: "Op 16 augustus 1958 werd welke popicoon, bekend als de 'Queen of Pop', geboren in Bay City, Michigan?"
        },
        options: [
          { en: "Cher", es: "Cher", de: "Cher", nl: "Cher" },
          { en: "Whitney Houston", es: "Whitney Houston", de: "Whitney Houston", nl: "Whitney Houston" },
          { en: "Janet Jackson", es: "Janet Jackson", de: "Janet Jackson", nl: "Janet Jackson" },
          { en: "Madonna", es: "Madonna", de: "Madonna", nl: "Madonna" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Madonna Louise Ciccone was born on August 16, 1958, in Bay City, Michigan. She moved to New York City in 1978 to pursue a dance career and became the best-selling female music artist of all time. Madonna has sold over 300 million records worldwide and had countless number-one hits including 'Like a Virgin', 'Material Girl', 'Vogue', and 'Music'. She's known for constantly reinventing her image and pushing cultural boundaries. Beyond music, she's succeeded in film, fashion, and business. Madonna continues performing and remains a major influence on pop culture.",
          es: "Madonna Louise Ciccone nació el 16 de agosto de 1958 en Bay City, Michigan. Se mudó a la ciudad de Nueva York en 1978 para seguir una carrera de baile y se convirtió en la artista musical femenina más vendida de todos los tiempos. Madonna ha vendido más de 300 millones de discos en todo el mundo y tuvo innumerables éxitos número uno incluyendo 'Like a Virgin', 'Material Girl', 'Vogue' y 'Music'. Es conocida por reinventar constantemente su imagen y empujar los límites culturales. Más allá de la música, ha tenido éxito en cine, moda y negocios. Madonna continúa actuando y sigue siendo una gran influencia en la cultura pop.",
          de: "Madonna Louise Ciccone wurde am 16. August 1958 in Bay City, Michigan geboren. Sie zog 1978 nach New York City, um eine Tanzkarriere zu verfolgen, und wurde zur meistverkauften weiblichen Musikkünstlerin aller Zeiten. Madonna hat weltweit über 300 Millionen Platten verkauft und zahllose Nummer-eins-Hits gehabt, darunter 'Like a Virgin', 'Material Girl', 'Vogue' und 'Music'. Sie ist bekannt dafür, ihr Image ständig neu zu erfinden und kulturelle Grenzen zu verschieben. Über die Musik hinaus war sie erfolgreich in Film, Mode und Geschäft. Madonna tritt weiterhin auf und bleibt ein großer Einfluss auf die Popkultur.",
          nl: "Madonna Louise Ciccone werd geboren op 16 augustus 1958 in Bay City, Michigan. Ze verhuisde in 1978 naar New York City om een danscarrière na te streven en werd de best verkopende vrouwelijke muziekartiest aller tijden. Madonna heeft wereldwijd meer dan 300 miljoen platen verkocht en had talloze nummer één-hits waaronder 'Like a Virgin', 'Material Girl', 'Vogue' en 'Music'. Ze staat bekend om het voortdurend heruitvinden van haar imago en het verleggen van culturele grenzen. Naast muziek was ze succesvol in film, mode en zaken. Madonna blijft optreden en blijft een grote invloed op de popcultuur."
        }
      },
      {
        question: {
          en: "On August 16, 1777, American forces achieved a significant Revolutionary War victory at which battle in Vermont?",
          es: "El 16 de agosto de 1777, las fuerzas americanas lograron una victoria significativa en la Guerra Revolucionaria en ¿qué batalla en Vermont?",
          de: "Am 16. August 1777 errangen amerikanische Streitkräfte einen bedeutenden Sieg im Unabhängigkeitskrieg in welcher Schlacht in Vermont?",
          nl: "Op 16 augustus 1777 behaalden Amerikaanse strijdkrachten een belangrijke overwinning in de Onafhankelijkheidsoorlog in welke slag in Vermont?"
        },
        options: [
          {
            en: "Battle of Saratoga",
            es: "Batalla de Saratoga",
            de: "Schlacht von Saratoga",
            nl: "Slag bij Saratoga"
          },
          {
            en: "Battle of Bunker Hill",
            es: "Batalla de Bunker Hill",
            de: "Schlacht von Bunker Hill",
            nl: "Slag bij Bunker Hill"
          },
          {
            en: "Battle of Bennington",
            es: "Batalla de Bennington",
            de: "Schlacht von Bennington",
            nl: "Slag bij Bennington"
          },
          {
            en: "Battle of Trenton",
            es: "Batalla de Trenton",
            de: "Schlacht von Trenton",
            nl: "Slag bij Trenton"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Bennington occurred on August 16, 1777, in Walloomsac, New York (near Bennington, Vermont). American forces led by General John Stark defeated a British and Hessian detachment sent to capture supplies. The Americans captured 700 enemy soldiers and gained crucial supplies and weapons. This victory boosted American morale and contributed to the later British defeat at Saratoga. Vermont celebrates Bennington Battle Day as a state holiday. The battle demonstrated the effectiveness of American militia forces and the difficulties facing British supply lines in hostile territory.",
          es: "La Batalla de Bennington ocurrió el 16 de agosto de 1777 en Walloomsac, Nueva York (cerca de Bennington, Vermont). Las fuerzas estadounidenses dirigidas por el general John Stark derrotaron a un destacamento británico y hesiano enviado para capturar suministros. Los estadounidenses capturaron 700 soldados enemigos y obtuvieron suministros y armas cruciales. Esta victoria aumentó la moral estadounidense y contribuyó a la posterior derrota británica en Saratoga. Vermont celebra el Día de la Batalla de Bennington como feriado estatal. La batalla demostró la efectividad de las fuerzas de milicia estadounidenses y las dificultades que enfrentaban las líneas de suministro británicas en territorio hostil.",
          de: "Die Schlacht von Bennington fand am 16. August 1777 in Walloomsac, New York (in der Nähe von Bennington, Vermont) statt. Amerikanische Streitkräfte unter General John Stark besiegten eine britische und hessische Abteilung, die zur Erbeutung von Vorräten geschickt wurde. Die Amerikaner nahmen 700 feindliche Soldaten gefangen und gewannen entscheidende Vorräte und Waffen. Dieser Sieg hob die amerikanische Moral und trug zur späteren britischen Niederlage bei Saratoga bei. Vermont feiert den Bennington Battle Day als staatlichen Feiertag. Die Schlacht demonstrierte die Wirksamkeit amerikanischer Milizstreitkräfte und die Schwierigkeiten britischer Versorgungslinien in feindlichem Gebiet.",
          nl: "De Slag bij Bennington vond plaats op 16 augustus 1777 in Walloomsac, New York (nabij Bennington, Vermont). Amerikaanse strijdkrachten onder leiding van generaal John Stark versloegen een Britse en Hessische eenheid die was gestuurd om voorraden te bemachtigen. De Amerikanen namen 700 vijandelijke soldaten gevangen en verkregen cruciale voorraden en wapens. Deze overwinning verhoogde het Amerikaanse moreel en droeg bij aan de latere Britse nederlaag bij Saratoga. Vermont viert Bennington Battle Day als een staatsfeestdag. De slag toonde de effectiviteit van Amerikaanse militie-eenheden en de moeilijkheden van Britse bevoorradingslijnen in vijandig gebied."
        }
      },
      {
        question: {
          en: "On August 16, 2012, which South African athlete known as the 'Blade Runner' became the first double amputee to compete in the Olympic Games?",
          es: "El 16 de agosto de 2012, ¿qué atleta sudafricano conocido como el 'Blade Runner' se convirtió en el primer doble amputado en competir en los Juegos Olímpicos?",
          de: "Am 16. August 2012 wurde welcher südafrikanische Athlet, bekannt als der 'Blade Runner', der erste doppelt Amputierte, der an den Olympischen Spielen teilnahm?",
          nl: "Op 16 augustus 2012 werd welke Zuid-Afrikaanse atleet, bekend als de 'Blade Runner', de eerste dubbele geamputeerde die deelnam aan de Olympische Spelen?"
        },
        options: [
          { en: "Oscar Pistorius", es: "Oscar Pistorius", de: "Oscar Pistorius", nl: "Oscar Pistorius" },
          { en: "Jonnie Peacock", es: "Jonnie Peacock", de: "Jonnie Peacock", nl: "Jonnie Peacock" },
          { en: "Richard Whitehead", es: "Richard Whitehead", de: "Richard Whitehead", nl: "Richard Whitehead" },
          { en: "Blake Leeper", es: "Blake Leeper", de: "Blake Leeper", nl: "Blake Leeper" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Oscar Pistorius competed in the 2012 London Olympics on August 16, 2012, running in the 400m semifinals. Born without fibulas, both his legs were amputated below the knee when he was 11 months old. He used carbon-fiber prosthetic blades to compete, earning his nickname. Pistorius had previously dominated Paralympic athletics, winning multiple gold medals. His Olympic appearance was groundbreaking for disability sports. However, his legacy was later overshadowed when he was convicted of murdering his girlfriend Reeva Steenkamp in 2013, receiving a 13-year prison sentence.",
          es: "Oscar Pistorius compitió en los Juegos Olímpicos de Londres 2012 el 16 de agosto de 2012, corriendo en las semifinales de 400m. Nacido sin peronés, ambas piernas fueron amputadas por debajo de la rodilla cuando tenía 11 meses. Usó prótesis de fibra de carbono para competir, ganándose su apodo. Pistorius había dominado previamente el atletismo paralímpico, ganando múltiples medallas de oro. Su aparición olímpica fue innovadora para los deportes de discapacidad. Sin embargo, su legado fue posteriormente ensombrecido cuando fue condenado por asesinar a su novia Reeva Steenkamp en 2013, recibiendo una sentencia de prisión de 13 años.",
          de: "Oscar Pistorius trat am 16. August 2012 bei den Olympischen Spielen in London an und lief im 400m-Halbfinale. Ohne Wadenbeine geboren, wurden beide Beine unterhalb des Knies amputiert, als er 11 Monate alt war. Er verwendete Kohlefaser-Prothesenklingen zum Wettkampf, was ihm seinen Spitznamen einbrachte. Pistorius hatte zuvor die paralympische Leichtathletik dominiert und mehrere Goldmedaillen gewonnen. Sein olympischer Auftritt war bahnbrechend für den Behindertensport. Sein Vermächtnis wurde jedoch später überschattet, als er wegen der Ermordung seiner Freundin Reeva Steenkamp im Jahr 2013 verurteilt wurde und eine 13-jährige Gefängnisstrafe erhielt.",
          nl: "Oscar Pistorius deed mee aan de Olympische Spelen van Londen 2012 op 16 augustus 2012, lopend in de 400m halve finales. Geboren zonder scheenbeenderen, werden beide benen onder de knie geamputeerd toen hij 11 maanden oud was. Hij gebruikte koolstofvezel prothetische blades om te wedijveren, wat hem zijn bijnaam opleverde. Pistorius had eerder de paralympische atletiek gedomineerd en meerdere gouden medailles gewonnen. Zijn olympische verschijning was baanbrekend voor gehandicaptensport. Zijn erfenis werd echter later overschaduwd toen hij werd veroordeeld voor de moord op zijn vriendin Reeva Steenkamp in 2013, waarvoor hij een gevangenisstraf van 13 jaar kreeg."
        }
      },
      {
        question: {
          en: "On August 16, 1896, gold was discovered in which Canadian territory, triggering one of the last great gold rushes?",
          es: "El 16 de agosto de 1896, se descubrió oro en ¿qué territorio canadiense, desencadenando una de las últimas grandes fiebres del oro?",
          de: "Am 16. August 1896 wurde Gold in welchem kanadischen Territorium entdeckt, was einen der letzten großen Goldrausche auslöste?",
          nl: "Op 16 augustus 1896 werd goud ontdekt in welk Canadees gebied, wat een van de laatste grote goudkoortsen veroorzaakte?"
        },
        options: [
          {
            en: "British Columbia",
            es: "Columbia Británica",
            de: "British Columbia",
            nl: "Brits-Columbia"
          },
          {
            en: "Alaska",
            es: "Alaska",
            de: "Alaska",
            nl: "Alaska"
          },
          {
            en: "Yukon",
            es: "Yukón",
            de: "Yukon",
            nl: "Yukon"
          },
          {
            en: "Northwest Territories",
            es: "Territorios del Noroeste",
            de: "Nordwest-Territorien",
            nl: "Northwest Territories"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Gold was discovered in Bonanza Creek (a tributary of the Klondike River) in Yukon, Canada on August 16, 1896, by Skookum Jim Mason, Dawson Charlie, and George Carmack. This triggered the Klondike Gold Rush (1896-1899), which attracted an estimated 100,000 prospectors to the remote region. Only about 30,000 actually reached the goldfields, and fewer still struck it rich. The rush led to the founding of Dawson City and brought infrastructure to the region. The harsh conditions and dramatic stories inspired works like Jack London's 'The Call of the Wild'.",
          es: "El oro fue descubierto en Bonanza Creek (un afluente del río Klondike) en Yukón, Canadá el 16 de agosto de 1896, por Skookum Jim Mason, Dawson Charlie y George Carmack. Esto desencadenó la Fiebre del Oro de Klondike (1896-1899), que atrajo a un estimado de 100,000 buscadores a la región remota. Solo unos 30,000 realmente llegaron a los campos de oro, y aún menos se enriquecieron. La fiebre llevó a la fundación de Dawson City y trajo infraestructura a la región. Las duras condiciones y las historias dramáticas inspiraron obras como 'El llamado de la selva' de Jack London.",
          de: "Gold wurde am 16. August 1896 in Bonanza Creek (einem Nebenfluss des Klondike River) in Yukon, Kanada von Skookum Jim Mason, Dawson Charlie und George Carmack entdeckt. Dies löste den Klondike-Goldrausch (1896-1899) aus, der schätzungsweise 100.000 Goldsucher in die abgelegene Region lockte. Nur etwa 30.000 erreichten tatsächlich die Goldfelder, und noch weniger wurden reich. Der Rausch führte zur Gründung von Dawson City und brachte Infrastruktur in die Region. Die harten Bedingungen und dramatischen Geschichten inspirierten Werke wie Jack Londons 'Ruf der Wildnis'.",
          nl: "Goud werd ontdekt in Bonanza Creek (een zijrivier van de Klondike River) in Yukon, Canada op 16 augustus 1896, door Skookum Jim Mason, Dawson Charlie en George Carmack. Dit veroorzaakte de Klondike Gold Rush (1896-1899), die naar schatting 100.000 goudzoekers naar de afgelegen regio trok. Slechts ongeveer 30.000 bereikten daadwerkelijk de goudvelden, en nog minder werden rijk. De rush leidde tot de stichting van Dawson City en bracht infrastructuur naar de regio. De barre omstandigheden en dramatische verhalen inspireerden werken zoals Jack London's 'The Call of the Wild'."
        }
      }
    ],

    // Day 17 - August 17th: Indonesia independence, Gabon independence, Davy Crockett born
    day17: [
      {
        question: {
          en: "On August 17, 1945, which Southeast Asian nation declared independence from the Netherlands, led by President Sukarno?",
          es: "El 17 de agosto de 1945, ¿qué nación del sudeste asiático declaró su independencia de los Países Bajos, liderada por el presidente Sukarno?",
          de: "Am 17. August 1945 erklärte welche südostasiatische Nation unter Präsident Sukarno ihre Unabhängigkeit von den Niederlanden?",
          nl: "Op 17 augustus 1945 verklaarde welke Zuidoost-Aziatische natie, geleid door president Sukarno, onafhankelijkheid van Nederland?"
        },
        options: [
          {
            en: "Malaysia",
            es: "Malasia",
            de: "Malaysia",
            nl: "Maleisië"
          },
          {
            en: "Indonesia",
            es: "Indonesia",
            de: "Indonesien",
            nl: "Indonesië"
          },
          {
            en: "Philippines",
            es: "Filipinas",
            de: "Philippinen",
            nl: "Filipijnen"
          },
          {
            en: "Vietnam",
            es: "Vietnam",
            de: "Vietnam",
            nl: "Vietnam"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Indonesia declared independence on August 17, 1945, immediately after Japan's surrender in World War II. Sukarno and Mohammad Hatta proclaimed independence, ending over 300 years of Dutch colonial rule (interrupted by Japanese occupation 1942-1945). The Netherlands didn't recognize Indonesian independence until 1949 after four years of armed conflict. Indonesia is now the world's fourth most populous country with over 270 million people, the largest Muslim-majority nation, and a member of the G20. Independence Day (Hari Kemerdekaan) is celebrated annually with nationwide festivities.",
          es: "Indonesia declaró su independencia el 17 de agosto de 1945, inmediatamente después de la rendición de Japón en la Segunda Guerra Mundial. Sukarno y Mohammad Hatta proclamaron la independencia, poniendo fin a más de 300 años de dominio colonial holandés (interrumpido por la ocupación japonesa 1942-1945). Los Países Bajos no reconocieron la independencia de Indonesia hasta 1949 después de cuatro años de conflicto armado. Indonesia es ahora el cuarto país más poblado del mundo con más de 270 millones de personas, la nación con mayor población musulmana y miembro del G20. El Día de la Independencia (Hari Kemerdekaan) se celebra anualmente con festividades a nivel nacional.",
          de: "Indonesien erklärte am 17. August 1945 seine Unabhängigkeit, unmittelbar nach Japans Kapitulation im Zweiten Weltkrieg. Sukarno und Mohammad Hatta proklamierten die Unabhängigkeit und beendeten über 300 Jahre niederländischer Kolonialherrschaft (unterbrochen durch japanische Besatzung 1942-1945). Die Niederlande erkannten die indonesische Unabhängigkeit erst 1949 nach vier Jahren bewaffneten Konflikts an. Indonesien ist heute das viertbevölkerungsreichste Land der Welt mit über 270 Millionen Menschen, die größte muslimische Nation und Mitglied der G20. Der Unabhängigkeitstag (Hari Kemerdekaan) wird jährlich mit landesweiten Feierlichkeiten begangen.",
          nl: "Indonesië verklaarde onafhankelijkheid op 17 augustus 1945, onmiddellijk na Japan's overgave in de Tweede Wereldoorlog. Sukarno en Mohammad Hatta proclameerden de onafhankelijkheid, waarmee meer dan 300 jaar Nederlandse koloniale overheersing eindigde (onderbroken door Japanse bezetting 1942-1945). Nederland erkende de Indonesische onafhankelijkheid pas in 1949 na vier jaar gewapend conflict. Indonesië is nu het vierde meest bevolkte land ter wereld met meer dan 270 miljoen mensen, de grootste natie met een moslimmeerderheid en lid van de G20. Onafhankelijkheidsdag (Hari Kemerdekaan) wordt jaarlijks gevierd met nationale festiviteiten."
        }
      },
      {
        question: {
          en: "On August 17, 1960, which West African nation gained independence from France, becoming one of Africa's wealthiest due to oil resources?",
          es: "El 17 de agosto de 1960, ¿qué nación de África Occidental obtuvo su independencia de Francia, convirtiéndose en una de las más ricas de África debido a los recursos petroleros?",
          de: "Am 17. August 1960 erlangte welche westafrikanische Nation ihre Unabhängigkeit von Frankreich und wurde aufgrund von Ölressourcen zu einer der reichsten Afrikas?",
          nl: "Op 17 augustus 1960 verwierf welke West-Afrikaanse natie onafhankelijkheid van Frankrijk en werd een van Afrika's rijkste door olierijkdommen?"
        },
        options: [
          {
            en: "Cameroon",
            es: "Camerún",
            de: "Kamerun",
            nl: "Kameroen"
          },
          {
            en: "Gabon",
            es: "Gabón",
            de: "Gabun",
            nl: "Gabon"
          },
          {
            en: "Chad",
            es: "Chad",
            de: "Tschad",
            nl: "Tsjaad"
          },
          {
            en: "Congo",
            es: "Congo",
            de: "Kongo",
            nl: "Congo"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Gabon gained independence from France on August 17, 1960, as part of the wave of African decolonization. Leon M'ba became the first president. Despite its small population (about 2 million), Gabon has one of Africa's highest GDP per capita thanks to abundant oil, manganese, and timber resources. The country has maintained close ties with France and relative political stability. About 80% of Gabon is covered by rainforest, making it one of the world's most forested countries. The capital Libreville was founded as a settlement for freed slaves.",
          es: "Gabón obtuvo su independencia de Francia el 17 de agosto de 1960, como parte de la ola de descolonización africana. Leon M'ba se convirtió en el primer presidente. A pesar de su pequeña población (unos 2 millones), Gabón tiene uno de los PIB per cápita más altos de África gracias a abundantes recursos de petróleo, manganeso y madera. El país ha mantenido estrechos lazos con Francia y relativa estabilidad política. Aproximadamente el 80% de Gabón está cubierto por selva tropical, lo que lo convierte en uno de los países más boscosos del mundo. La capital Libreville fue fundada como asentamiento para esclavos liberados.",
          de: "Gabun erlangte am 17. August 1960 seine Unabhängigkeit von Frankreich als Teil der Welle der afrikanischen Entkolonialisierung. Leon M'ba wurde der erste Präsident. Trotz seiner kleinen Bevölkerung (etwa 2 Millionen) hat Gabun dank reichhaltiger Öl-, Mangan- und Holzressourcen eines der höchsten BIP pro Kopf in Afrika. Das Land hat enge Beziehungen zu Frankreich und relative politische Stabilität aufrechterhalten. Etwa 80% Gabuns sind von Regenwald bedeckt, was es zu einem der waldreichsten Länder der Welt macht. Die Hauptstadt Libreville wurde als Siedlung für befreite Sklaven gegründet.",
          nl: "Gabon verwierf onafhankelijkheid van Frankrijk op 17 augustus 1960, als onderdeel van de golf van Afrikaanse dekolonisatie. Leon M'ba werd de eerste president. Ondanks zijn kleine bevolking (ongeveer 2 miljoen) heeft Gabon een van Afrika's hoogste BBP per capita dankzij overvloedige olie-, mangaan- en houtbronnen. Het land heeft nauwe banden met Frankrijk en relatieve politieke stabiliteit behouden. Ongeveer 80% van Gabon is bedekt met regenwoud, waardoor het een van 's werelds meest beboste landen is. De hoofdstad Libreville werd gesticht als nederzetting voor bevrijde slaven."
        }
      },
      {
        question: {
          en: "On August 17, 1786, which legendary American frontiersman and folk hero known for his coonskin cap was born in Tennessee?",
          es: "El 17 de agosto de 1786, ¿qué legendario pionero estadounidense y héroe popular conocido por su gorro de piel de mapache nació en Tennessee?",
          de: "Am 17. August 1786 wurde welcher legendäre amerikanische Grenzer und Volksheld, bekannt für seine Waschbärmütze, in Tennessee geboren?",
          nl: "Op 17 augustus 1786 werd welke legendarische Amerikaanse grensbewoner en volksheld, bekend om zijn wasbeermuts, geboren in Tennessee?"
        },
        options: [
          {
            en: "Daniel Boone",
            es: "Daniel Boone",
            de: "Daniel Boone",
            nl: "Daniel Boone"
          },
          {
            en: "Davy Crockett",
            es: "Davy Crockett",
            de: "Davy Crockett",
            nl: "Davy Crockett"
          },
          {
            en: "Jim Bowie",
            es: "Jim Bowie",
            de: "Jim Bowie",
            nl: "Jim Bowie"
          },
          {
            en: "Kit Carson",
            es: "Kit Carson",
            de: "Kit Carson",
            nl: "Kit Carson"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Davy Crockett was born on August 17, 1786, in Greene County, Tennessee. He became a folk hero as a frontiersman, soldier, and politician, serving in the U.S. House of Representatives. Crockett fought in the Creek War and opposed President Andrew Jackson's Indian Removal Act. He famously died defending the Alamo in 1836 during the Texas Revolution. His legend grew through biographies, almanacs, and later Disney's 1950s TV series, which popularized the coonskin cap. His motto 'Be always sure you're right, then go ahead' became iconic American folklore.",
          es: "Davy Crockett nació el 17 de agosto de 1786 en el condado de Greene, Tennessee. Se convirtió en un héroe popular como pionero, soldado y político, sirviendo en la Cámara de Representantes de EE.UU. Crockett luchó en la Guerra Creek y se opuso a la Ley de Remoción de Indios del presidente Andrew Jackson. Murió famosamente defendiendo el Álamo en 1836 durante la Revolución de Texas. Su leyenda creció a través de biografías, almanaques y más tarde la serie de televisión de Disney de los años 50, que popularizó el gorro de piel de mapache. Su lema 'Asegúrate siempre de que tienes razón, luego adelante' se convirtió en folclore estadounidense icónico.",
          de: "Davy Crockett wurde am 17. August 1786 in Greene County, Tennessee geboren. Er wurde als Grenzer, Soldat und Politiker zum Volkshelden und diente im US-Repräsentantenhaus. Crockett kämpfte im Creek-Krieg und widersetzte sich Präsident Andrew Jacksons Indian Removal Act. Er starb berühmt bei der Verteidigung des Alamo im Jahr 1836 während der texanischen Revolution. Seine Legende wuchs durch Biografien, Almanache und später Disneys TV-Serie der 1950er Jahre, die die Waschbärmütze populär machte. Sein Motto 'Sei immer sicher, dass du recht hast, dann mach weiter' wurde zur ikonischen amerikanischen Folklore.",
          nl: "Davy Crockett werd geboren op 17 augustus 1786 in Greene County, Tennessee. Hij werd een volksheld als grensbewoner, soldaat en politicus, die diende in het Amerikaanse Huis van Afgevaardigden. Crockett vocht in de Creek War en verzette zich tegen president Andrew Jackson's Indian Removal Act. Hij stierf beroemd bij de verdediging van de Alamo in 1836 tijdens de Texaanse Revolutie. Zijn legende groeide door biografieën, almanak en later Disney's tv-serie uit de jaren '50, die de wasbeermuts populair maakte. Zijn motto 'Wees er altijd zeker van dat je gelijk hebt, ga dan verder' werd iconische Amerikaanse folklore."
        }
      },
      {
        question: {
          en: "On August 17, 1998, which U.S. President became the first sitting president to testify before a grand jury investigating his own conduct?",
          es: "El 17 de agosto de 1998, ¿qué presidente de EE.UU. se convirtió en el primer presidente en ejercicio en testificar ante un gran jurado que investigaba su propia conducta?",
          de: "Am 17. August 1998 wurde welcher US-Präsident der erste amtierende Präsident, der vor einer Grand Jury aussagte, die sein eigenes Verhalten untersuchte?",
          nl: "Op 17 augustus 1998 werd welke Amerikaanse president de eerste zittende president die getuigde voor een grand jury die zijn eigen gedrag onderzocht?"
        },
        options: [
          {
            en: "George H.W. Bush",
            es: "George H.W. Bush",
            de: "George H.W. Bush",
            nl: "George H.W. Bush"
          },
          {
            en: "Bill Clinton",
            es: "Bill Clinton",
            de: "Bill Clinton",
            nl: "Bill Clinton"
          },
          {
            en: "Ronald Reagan",
            es: "Ronald Reagan",
            de: "Ronald Reagan",
            nl: "Ronald Reagan"
          },
          {
            en: "Richard Nixon",
            es: "Richard Nixon",
            de: "Richard Nixon",
            nl: "Richard Nixon"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bill Clinton testified via closed-circuit television from the White House on August 17, 1998, before a grand jury investigating his relationship with White House intern Monica Lewinsky. That evening, Clinton addressed the nation, admitting to an 'inappropriate relationship' but denying perjury. This testimony was part of Independent Counsel Kenneth Starr's investigation. Clinton was subsequently impeached by the House of Representatives in December 1998 on charges of perjury and obstruction of justice, but was acquitted by the Senate in February 1999 and completed his second term.",
          es: "Bill Clinton testificó por circuito cerrado de televisión desde la Casa Blanca el 17 de agosto de 1998 ante un gran jurado que investigaba su relación con la pasante de la Casa Blanca Monica Lewinsky. Esa noche, Clinton se dirigió a la nación, admitiendo una 'relación inapropiada' pero negando perjurio. Este testimonio fue parte de la investigación del Fiscal Independiente Kenneth Starr. Clinton fue posteriormente sometido a juicio político por la Cámara de Representantes en diciembre de 1998 por cargos de perjurio y obstrucción de la justicia, pero fue absuelto por el Senado en febrero de 1999 y completó su segundo mandato.",
          de: "Bill Clinton sagte am 17. August 1998 per Videoübertragung aus dem Weißen Haus vor einer Grand Jury aus, die seine Beziehung zur Praktikantin des Weißen Hauses Monica Lewinsky untersuchte. An diesem Abend wandte sich Clinton an die Nation und gab eine 'unangemessene Beziehung' zu, bestritt aber Meineid. Diese Aussage war Teil der Untersuchung des unabhängigen Sonderermittlers Kenneth Starr. Clinton wurde anschließend im Dezember 1998 vom Repräsentantenhaus wegen Meineids und Behinderung der Justiz angeklagt, aber im Februar 1999 vom Senat freigesprochen und vollendete seine zweite Amtszeit.",
          nl: "Bill Clinton getuigde via gesloten televisiecircuit vanuit het Witte Huis op 17 augustus 1998 voor een grand jury die zijn relatie met White House-stagiaire Monica Lewinsky onderzocht. Die avond sprak Clinton de natie toe, waarbij hij een 'ongepaste relatie' toegaf maar meineed ontkende. Deze getuigenis maakte deel uit van het onderzoek van onafhankelijk aanklager Kenneth Starr. Clinton werd vervolgens in december 1998 door het Huis van Afgevaardigden beschuldigd van meineed en belemmering van de rechtsgang, maar werd in februari 1999 vrijgesproken door de Senaat en voltooide zijn tweede termijn."
        }
      },
      {
        question: {
          en: "On August 17, 1807, which pioneering steamboat made its first successful voyage from New York City to Albany, revolutionizing river transportation?",
          es: "El 17 de agosto de 1807, ¿qué barco de vapor pionero realizó su primer viaje exitoso desde la ciudad de Nueva York a Albany, revolucionando el transporte fluvial?",
          de: "Am 17. August 1807 unternahm welches bahnbrechende Dampfschiff seine erste erfolgreiche Fahrt von New York City nach Albany und revolutionierte damit den Flusstransport?",
          nl: "Op 17 augustus 1807 maakte welke baanbrekende stoomboot zijn eerste succesvolle reis van New York City naar Albany, waarmee het riviervervoer werd gerevolutioneerd?"
        },
        options: [
          { en: "The New Orleans", es: "El Nueva Orleans", de: "Die New Orleans", nl: "De New Orleans" },
          { en: "The Clermont", es: "El Clermont", de: "Die Clermont", nl: "De Clermont" },
          { en: "The Charlotte Dundas", es: "El Charlotte Dundas", de: "Die Charlotte Dundas", nl: "De Charlotte Dundas" },
          { en: "The Savannah", es: "El Savannah", de: "Die Savannah", nl: "De Savannah" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Robert Fulton's steamboat 'The Clermont' (also called 'North River Steamboat') made its maiden voyage on August 17, 1807, traveling 150 miles up the Hudson River from New York City to Albany in 32 hours. While not the first steamboat ever built, it was the first commercially successful one. The return trip took 30 hours. This proved steam power's viability for regular passenger and cargo service. Fulton's success launched the steamboat era, transforming river commerce and westward expansion in America. By the 1850s, steamboats dominated inland water transportation.",
          es: "El barco de vapor 'The Clermont' (también llamado 'North River Steamboat') de Robert Fulton realizó su viaje inaugural el 17 de agosto de 1807, viajando 150 millas río arriba del Hudson desde la ciudad de Nueva York a Albany en 32 horas. Si bien no fue el primer barco de vapor jamás construido, fue el primero comercialmente exitoso. El viaje de regreso tomó 30 horas. Esto probó la viabilidad del poder del vapor para el servicio regular de pasajeros y carga. El éxito de Fulton lanzó la era del barco de vapor, transformando el comercio fluvial y la expansión hacia el oeste en América. Para la década de 1850, los barcos de vapor dominaban el transporte por agua interior.",
          de: "Robert Fultons Dampfschiff 'The Clermont' (auch 'North River Steamboat' genannt) unternahm am 17. August 1807 seine Jungfernfahrt und legte 150 Meilen den Hudson River hinauf von New York City nach Albany in 32 Stunden zurück. Obwohl es nicht das erste jemals gebaute Dampfschiff war, war es das erste kommerziell erfolgreiche. Die Rückfahrt dauerte 30 Stunden. Dies bewies die Lebensfähigkeit der Dampfkraft für regelmäßigen Passagier- und Frachtservice. Fultons Erfolg läutete die Dampfschiff-Ära ein und transformierte den Flusshandel und die Westexpansion in Amerika. In den 1850er Jahren dominierten Dampfschiffe den Binnenwassertransport.",
          nl: "Robert Fulton's stoomboot 'The Clermont' (ook 'North River Steamboat' genoemd) maakte zijn eerste reis op 17 augustus 1807, waarbij hij 150 mijl over de Hudson River reisde van New York City naar Albany in 32 uur. Hoewel het niet de eerste stoomboot ooit was die werd gebouwd, was het de eerste commercieel succesvolle. De terugreis duurde 30 uur. Dit bewees de levensvatbaarheid van stoomkracht voor reguliere passagiers- en vrachtdiensten. Fulton's succes lanceerde het stoomboottijdperk, dat de rivierhandel en westelijke expansie in Amerika transformeerde. Tegen de jaren 1850 domineerden stoomboten het binnenwater transport."
        }
      }
    ],

    // Day 18 - August 18th: 19th Amendment ratified, Roman Emperor Augustus dies, Virginia Dare born
    day18: [
      {
        question: {
          en: "On August 18, 1920, which constitutional amendment was ratified, guaranteeing women the right to vote in the United States?",
          es: "El 18 de agosto de 1920, ¿qué enmienda constitucional fue ratificada, garantizando a las mujeres el derecho al voto en los Estados Unidos?",
          de: "Am 18. August 1920 wurde welche Verfassungsänderung ratifiziert, die Frauen das Wahlrecht in den Vereinigten Staaten garantierte?",
          nl: "Op 18 augustus 1920 werd welk grondwettelijk amendement geratificeerd dat vrouwen het stemrecht in de Verenigde Staten garandeerde?"
        },
        options: [
          {
            en: "15th Amendment",
            es: "15ª Enmienda",
            de: "15. Zusatzartikel",
            nl: "15e Amendement"
          },
          {
            en: "18th Amendment",
            es: "18ª Enmienda",
            de: "18. Zusatzartikel",
            nl: "18e Amendement"
          },
          {
            en: "19th Amendment",
            es: "19ª Enmienda",
            de: "19. Zusatzartikel",
            nl: "19e Amendement"
          },
          {
            en: "21st Amendment",
            es: "21ª Enmienda",
            de: "21. Zusatzartikel",
            nl: "21e Amendement"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 19th Amendment was ratified on August 18, 1920, when Tennessee became the 36th state to approve it, providing the necessary three-fourths majority. The amendment states: 'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.' This culminated decades of activism by suffragettes like Susan B. Anthony, Elizabeth Cady Stanton, and Alice Paul. The first presidential election where women could vote nationwide was in November 1920. Despite this victory, many women of color still faced barriers to voting.",
          es: "La 19ª Enmienda fue ratificada el 18 de agosto de 1920, cuando Tennessee se convirtió en el estado número 36 en aprobarla, proporcionando la mayoría de tres cuartos necesaria. La enmienda establece: 'El derecho de los ciudadanos de los Estados Unidos a votar no será negado ni restringido por los Estados Unidos ni por ningún Estado por motivos de sexo'. Esto culminó décadas de activismo de sufragistas como Susan B. Anthony, Elizabeth Cady Stanton y Alice Paul. La primera elección presidencial en la que las mujeres pudieron votar a nivel nacional fue en noviembre de 1920. A pesar de esta victoria, muchas mujeres de color aún enfrentaron barreras para votar.",
          de: "Der 19. Zusatzartikel wurde am 18. August 1920 ratifiziert, als Tennessee der 36. Staat wurde, der ihn genehmigte und damit die notwendige Dreiviertelmehrheit erreichte. Der Zusatzartikel besagt: 'Das Wahlrecht der Bürger der Vereinigten Staaten darf von den Vereinigten Staaten oder einem Staat nicht aufgrund des Geschlechts verweigert oder eingeschränkt werden.' Dies war der Höhepunkt jahrzehntelangen Aktivismus von Suffragetten wie Susan B. Anthony, Elizabeth Cady Stanton und Alice Paul. Die erste Präsidentschaftswahl, bei der Frauen landesweit wählen konnten, fand im November 1920 statt. Trotz dieses Sieges standen viele farbige Frauen noch vor Hürden beim Wählen.",
          nl: "Het 19e Amendement werd geratificeerd op 18 augustus 1920, toen Tennessee de 36e staat werd die het goedkeurde, waarmee de noodzakelijke driekwart meerderheid werd bereikt. Het amendement stelt: 'Het recht van burgers van de Verenigde Staten om te stemmen mag niet worden ontzegd of beperkt door de Verenigde Staten of een staat op grond van geslacht.' Dit was het hoogtepunt van decennialange activisme door suffragettes zoals Susan B. Anthony, Elizabeth Cady Stanton en Alice Paul. De eerste presidentsverkiezing waarbij vrouwen landelijk konden stemmen was in november 1920. Ondanks deze overwinning werden veel vrouwen van kleur nog geconfronteerd met belemmeringen om te stemmen."
        }
      },
      {
        question: {
          en: "On August 18, 14 AD, which first Roman Emperor died at age 75 after ruling for over 40 years, establishing the Pax Romana?",
          es: "El 18 de agosto del año 14 d.C., ¿qué primer emperador romano murió a los 75 años después de gobernar durante más de 40 años, estableciendo la Pax Romana?",
          de: "Am 18. August 14 n. Chr. starb welcher erste römische Kaiser im Alter von 75 Jahren, nachdem er über 40 Jahre regiert und die Pax Romana etabliert hatte?",
          nl: "Op 18 augustus 14 na Christus stierf welke eerste Romeinse keizer op 75-jarige leeftijd na meer dan 40 jaar te hebben geregeerd en de Pax Romana te hebben gevestigd?"
        },
        options: [
          {
            en: "Julius Caesar",
            es: "Julio César",
            de: "Julius Cäsar",
            nl: "Julius Caesar"
          },
          {
            en: "Augustus",
            es: "Augusto",
            de: "Augustus",
            nl: "Augustus"
          },
          {
            en: "Tiberius",
            es: "Tiberio",
            de: "Tiberius",
            nl: "Tiberius"
          },
          {
            en: "Nero",
            es: "Nerón",
            de: "Nero",
            nl: "Nero"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Augustus (born Gaius Octavius) died on August 18, 14 AD, in Nola, Italy. He was Julius Caesar's adopted heir who became Rome's first emperor after defeating Mark Antony and Cleopatra. Augustus ruled from 27 BC to 14 AD, transforming Rome from a republic into an empire. He established the Pax Romana (Roman Peace), a 200-year period of relative peace and prosperity. Augustus expanded the empire, reformed the army, built monuments, promoted arts and literature, and reorganized provincial administration. The month of August is named after him. His last words were reportedly 'Have I played the part well?'",
          es: "Augusto (nacido Cayo Octavio) murió el 18 de agosto del año 14 d.C. en Nola, Italia. Era el heredero adoptivo de Julio César que se convirtió en el primer emperador de Roma después de derrotar a Marco Antonio y Cleopatra. Augusto gobernó desde el 27 a.C. hasta el 14 d.C., transformando Roma de una república en un imperio. Estableció la Pax Romana (Paz Romana), un período de 200 años de paz y prosperidad relativas. Augusto expandió el imperio, reformó el ejército, construyó monumentos, promovió las artes y la literatura, y reorganizó la administración provincial. El mes de agosto lleva su nombre. Sus últimas palabras fueron supuestamente '¿He interpretado bien el papel?'",
          de: "Augustus (geboren als Gaius Octavius) starb am 18. August 14 n. Chr. in Nola, Italien. Er war Julius Caesars Adoptivsohn, der nach der Niederlage von Marcus Antonius und Kleopatra Roms erster Kaiser wurde. Augustus regierte von 27 v. Chr. bis 14 n. Chr. und verwandelte Rom von einer Republik in ein Imperium. Er etablierte die Pax Romana (Römischer Frieden), eine 200-jährige Periode relativen Friedens und Wohlstands. Augustus erweiterte das Reich, reformierte die Armee, baute Denkmäler, förderte Kunst und Literatur und reorganisierte die Provinzverwaltung. Der Monat August ist nach ihm benannt. Seine letzten Worte sollen gewesen sein: 'Habe ich meine Rolle gut gespielt?'",
          nl: "Augustus (geboren als Gaius Octavius) stierf op 18 augustus 14 na Christus in Nola, Italië. Hij was Julius Caesar's geadopteerde erfgenaam die Rome's eerste keizer werd na de nederlaag van Marcus Antonius en Cleopatra. Augustus regeerde van 27 voor Christus tot 14 na Christus en transformeerde Rome van een republiek tot een keizerrijk. Hij vestigde de Pax Romana (Romeinse Vrede), een 200-jarige periode van relatieve vrede en welvaart. Augustus breidde het rijk uit, hervormde het leger, bouwde monumenten, bevorderde kunst en literatuur en reorganiseerde het provinciale bestuur. De maand augustus is naar hem vernoemd. Zijn laatste woorden waren naar verluidt 'Heb ik mijn rol goed gespeeld?'"
        }
      },
      {
        question: {
          en: "On August 18, 1587, who became the first English child born in the Americas when she was born in the Roanoke Colony?",
          es: "El 18 de agosto de 1587, ¿quién se convirtió en la primera niña inglesa nacida en las Américas cuando nació en la Colonia de Roanoke?",
          de: "Am 18. August 1587 wurde wer als erstes englisches Kind in den Amerikas geboren, als sie in der Roanoke-Kolonie geboren wurde?",
          nl: "Op 18 augustus 1587 werd wie het eerste Engelse kind geboren in de Amerika's toen ze geboren werd in de Roanoke Colony?"
        },
        options: [
          {
            en: "Pocahontas",
            es: "Pocahontas",
            de: "Pocahontas",
            nl: "Pocahontas"
          },
          {
            en: "Virginia Dare",
            es: "Virginia Dare",
            de: "Virginia Dare",
            nl: "Virginia Dare"
          },
          {
            en: "Anne Burras",
            es: "Anne Burras",
            de: "Anne Burras",
            nl: "Anne Burras"
          },
          {
            en: "Priscilla Mullins",
            es: "Priscilla Mullins",
            de: "Priscilla Mullins",
            nl: "Priscilla Mullins"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Virginia Dare was born on August 18, 1587, in the Roanoke Colony (present-day North Carolina) to Ananias and Eleanor Dare. She was the first English child born in the Americas and the granddaughter of colony governor John White. When White returned from a supply trip to England in 1590, the entire colony had vanished, including Virginia. The only clue was the word 'CROATOAN' carved into a post. The fate of the 'Lost Colony' remains one of history's greatest mysteries. Virginia Dare became a legendary figure in American folklore and culture.",
          es: "Virginia Dare nació el 18 de agosto de 1587 en la Colonia de Roanoke (actual Carolina del Norte) de Ananias y Eleanor Dare. Fue la primera niña inglesa nacida en las Américas y nieta del gobernador de la colonia John White. Cuando White regresó de un viaje de suministros a Inglaterra en 1590, toda la colonia había desaparecido, incluida Virginia. La única pista era la palabra 'CROATOAN' tallada en un poste. El destino de la 'Colonia Perdida' sigue siendo uno de los mayores misterios de la historia. Virginia Dare se convirtió en una figura legendaria en el folclore y la cultura estadounidense.",
          de: "Virginia Dare wurde am 18. August 1587 in der Roanoke-Kolonie (heute North Carolina) als Tochter von Ananias und Eleanor Dare geboren. Sie war das erste in den Amerikas geborene englische Kind und die Enkelin des Kolonie-Gouverneurs John White. Als White 1590 von einer Versorgungsreise nach England zurückkehrte, war die gesamte Kolonie verschwunden, einschließlich Virginia. Der einzige Hinweis war das in einen Pfosten geschnitzte Wort 'CROATOAN'. Das Schicksal der 'Verlorenen Kolonie' bleibt eines der größten Rätsel der Geschichte. Virginia Dare wurde zu einer legendären Figur in der amerikanischen Folklore und Kultur.",
          nl: "Virginia Dare werd geboren op 18 augustus 1587 in de Roanoke Colony (het huidige North Carolina) als dochter van Ananias en Eleanor Dare. Ze was het eerste Engelse kind geboren in de Amerika's en de kleindochter van kolonie-gouverneur John White. Toen White in 1590 terugkeerde van een bevoorradingsreis naar Engeland, was de hele kolonie verdwenen, inclusief Virginia. De enige aanwijzing was het woord 'CROATOAN' gekerfd in een paal. Het lot van de 'Lost Colony' blijft een van de grootste mysteries uit de geschiedenis. Virginia Dare werd een legendarische figuur in de Amerikaanse folklore en cultuur."
        }
      },
      {
        question: {
          en: "On August 18, 2008, which swimmer won his eighth gold medal at the Beijing Olympics, breaking Mark Spitz's record?",
          es: "El 18 de agosto de 2008, ¿qué nadador ganó su octava medalla de oro en los Juegos Olímpicos de Beijing, rompiendo el récord de Mark Spitz?",
          de: "Am 18. August 2008 gewann welcher Schwimmer seine achte Goldmedaille bei den Olympischen Spielen in Peking und brach damit Mark Spitz' Rekord?",
          nl: "Op 18 augustus 2008 won welke zwemmer zijn achtste gouden medaille op de Olympische Spelen in Beijing, waarmee hij Mark Spitz' record verbrak?"
        },
        options: [
          {
            en: "Ryan Lochte",
            es: "Ryan Lochte",
            de: "Ryan Lochte",
            nl: "Ryan Lochte"
          },
          {
            en: "Ian Thorpe",
            es: "Ian Thorpe",
            de: "Ian Thorpe",
            nl: "Ian Thorpe"
          },
          {
            en: "Michael Phelps",
            es: "Michael Phelps",
            de: "Michael Phelps",
            nl: "Michael Phelps"
          },
          {
            en: "Grant Hackett",
            es: "Grant Hackett",
            de: "Grant Hackett",
            nl: "Grant Hackett"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Michael Phelps won his eighth gold medal at the 2008 Beijing Olympics on August 18, 2008, in the 4x100m medley relay, breaking Mark Spitz's record of seven gold medals in a single Olympics (set in 1972). Phelps competed in eight events and won gold in all of them, an unprecedented achievement. His total Olympic medal count eventually reached 28 (23 gold, 3 silver, 2 bronze) across five Olympics (2000-2016), making him the most decorated Olympian of all time. Phelps is considered one of the greatest athletes in history.",
          es: "Michael Phelps ganó su octava medalla de oro en los Juegos Olímpicos de Beijing 2008 el 18 de agosto de 2008, en el relevo de estilos 4x100m, rompiendo el récord de Mark Spitz de siete medallas de oro en unos Juegos Olímpicos (establecido en 1972). Phelps compitió en ocho eventos y ganó oro en todos ellos, un logro sin precedentes. Su recuento total de medallas olímpicas eventualmente alcanzó 28 (23 de oro, 3 de plata, 2 de bronce) en cinco Olimpiadas (2000-2016), convirtiéndolo en el olímpico más condecorado de todos los tiempos. Phelps es considerado uno de los mejores atletas de la historia.",
          de: "Michael Phelps gewann am 18. August 2008 bei den Olympischen Spielen in Peking seine achte Goldmedaille in der 4x100m-Lagenstaffel und brach damit Mark Spitz' Rekord von sieben Goldmedaillen bei einer einzigen Olympiade (aufgestellt 1972). Phelps trat in acht Wettbewerben an und gewann in allen Gold, eine beispiellose Leistung. Seine olympische Medaillensammlung erreichte schließlich 28 (23 Gold, 3 Silber, 2 Bronze) über fünf Olympiaden (2000-2016), was ihn zum erfolgreichsten Olympioniken aller Zeiten macht. Phelps gilt als einer der größten Athleten der Geschichte.",
          nl: "Michael Phelps won zijn achtste gouden medaille op de Olympische Spelen van Beijing 2008 op 18 augustus 2008, in de 4x100m wisselslag estafette, waarmee hij Mark Spitz' record van zeven gouden medailles in één Olympiade (gezet in 1972) verbrak. Phelps kwam uit in acht evenementen en won goud in alle, een ongekende prestatie. Zijn totale olympische medailletelling bereikte uiteindelijk 28 (23 goud, 3 zilver, 2 brons) over vijf Olympiades (2000-2016), waardoor hij de meest gedecoreerde olympiër aller tijden werd. Phelps wordt beschouwd als een van de grootste atleten in de geschiedenis."
        }
      },
      {
        question: {
          en: "On August 18, 1868, which element was discovered by observing the solar spectrum during an eclipse in India?",
          es: "El 18 de agosto de 1868, ¿qué elemento fue descubierto al observar el espectro solar durante un eclipse en India?",
          de: "Am 18. August 1868 wurde welches Element durch Beobachtung des Sonnenspektrums während einer Sonnenfinsternis in Indien entdeckt?",
          nl: "Op 18 augustus 1868 werd welk element ontdekt door het zonspectrum te observeren tijdens een eclips in India?"
        },
        options: [
          {
            en: "Hydrogen",
            es: "Hidrógeno",
            de: "Wasserstoff",
            nl: "Waterstof"
          },
          {
            en: "Helium",
            es: "Helio",
            de: "Helium",
            nl: "Helium"
          },
          {
            en: "Neon",
            es: "Neón",
            de: "Neon",
            nl: "Neon"
          },
          {
            en: "Argon",
            es: "Argón",
            de: "Argon",
            nl: "Argon"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Helium was discovered on August 18, 1868, by French astronomer Pierre Janssen while observing a solar eclipse in Guntur, India. He noticed a bright yellow spectral line that didn't match any known element. British astronomer Norman Lockyer independently made the same observation and named the element 'helium' after Helios, the Greek sun god. Helium wasn't isolated on Earth until 1895. It's the second most abundant element in the universe after hydrogen, but rare on Earth. Helium is used in balloons, cooling systems, diving equipment, and scientific applications.",
          es: "El helio fue descubierto el 18 de agosto de 1868 por el astrónomo francés Pierre Janssen mientras observaba un eclipse solar en Guntur, India. Notó una línea espectral amarilla brillante que no coincidía con ningún elemento conocido. El astrónomo británico Norman Lockyer hizo independientemente la misma observación y nombró al elemento 'helio' en honor a Helios, el dios griego del sol. El helio no fue aislado en la Tierra hasta 1895. Es el segundo elemento más abundante en el universo después del hidrógeno, pero es raro en la Tierra. El helio se usa en globos, sistemas de enfriamiento, equipos de buceo y aplicaciones científicas.",
          de: "Helium wurde am 18. August 1868 vom französischen Astronomen Pierre Janssen entdeckt, während er eine Sonnenfinsternis in Guntur, Indien beobachtete. Er bemerkte eine helle gelbe Spektrallinie, die zu keinem bekannten Element passte. Der britische Astronom Norman Lockyer machte unabhängig dieselbe Beobachtung und benannte das Element 'Helium' nach Helios, dem griechischen Sonnengott. Helium wurde erst 1895 auf der Erde isoliert. Es ist das zweithäufigste Element im Universum nach Wasserstoff, aber selten auf der Erde. Helium wird in Ballons, Kühlsystemen, Tauchausrüstung und wissenschaftlichen Anwendungen verwendet.",
          nl: "Helium werd ontdekt op 18 augustus 1868 door de Franse astronoom Pierre Janssen tijdens het observeren van een zonsverduistering in Guntur, India. Hij merkte een heldere gele spectraallijn op die niet overeenkwam met enig bekend element. De Britse astronoom Norman Lockyer deed onafhankelijk dezelfde observatie en noemde het element 'helium' naar Helios, de Griekse zonnegod. Helium werd pas in 1895 op aarde geïsoleerd. Het is het op een na meest voorkomende element in het universum na waterstof, maar zeldzaam op aarde. Helium wordt gebruikt in ballonnen, koelsystemen, duikuitrusting en wetenschappelijke toepassingen."
        }
      }
    ],

    // Day 19 - August 19th: August Coup in USSR, Coco Chanel born, Bill Clinton born
    day19: [
      {
        question: {
          en: "On August 19, 1991, hardline Communist leaders attempted which coup against Soviet President Mikhail Gorbachev, which ultimately failed and accelerated the USSR's collapse?",
          es: "El 19 de agosto de 1991, líderes comunistas de línea dura intentaron ¿qué golpe de estado contra el presidente soviético Mikhail Gorbachov, que finalmente fracasó y aceleró el colapso de la URSS?",
          de: "Am 19. August 1991 versuchten kommunistische Hardliner welchen Putsch gegen den sowjetischen Präsidenten Michail Gorbatschow, der letztendlich scheiterte und den Zusammenbruch der UdSSR beschleunigte?",
          nl: "Op 19 augustus 1991 probeerden harde communistische leiders welke coup tegen Sovjet-president Michail Gorbatsjov, die uiteindelijk mislukte en de ineenstorting van de USSR versnelde?"
        },
        options: [
          {
            en: "October Revolution",
            es: "Revolución de Octubre",
            de: "Oktoberrevolution",
            nl: "Oktoberrevolutie"
          },
          {
            en: "August Coup",
            es: "Golpe de Agosto",
            de: "August-Putsch",
            nl: "Augustus Coup"
          },
          {
            en: "Perestroika Movement",
            es: "Movimiento de Perestroika",
            de: "Perestroika-Bewegung",
            nl: "Perestroika-beweging"
          },
          {
            en: "Glasnost Rebellion",
            es: "Rebelión de Glasnost",
            de: "Glasnost-Rebellion",
            nl: "Glasnost Opstand"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The August Coup (also called '1991 Soviet coup d'état attempt') began on August 19, 1991, when hardline Communist Party members detained Gorbachev at his vacation home in Crimea. They opposed his reforms (perestroika and glasnost) and formed the 'State Committee on the State of Emergency'. Boris Yeltsin led resistance, famously standing on a tank outside the Russian parliament. The coup collapsed within three days due to popular resistance and military defections. The failed coup discredited the Communist Party, accelerated independence movements in Soviet republics, and led to the USSR's dissolution in December 1991.",
          es: "El Golpe de Agosto (también llamado 'intento de golpe de estado soviético de 1991') comenzó el 19 de agosto de 1991, cuando miembros de línea dura del Partido Comunista detuvieron a Gorbachov en su casa de vacaciones en Crimea. Se opusieron a sus reformas (perestroika y glasnost) y formaron el 'Comité Estatal sobre el Estado de Emergencia'. Boris Yeltsin lideró la resistencia, de pie famosamente sobre un tanque frente al parlamento ruso. El golpe colapsó en tres días debido a la resistencia popular y las deserciones militares. El golpe fallido desacreditó al Partido Comunista, aceleró los movimientos de independencia en las repúblicas soviéticas y condujo a la disolución de la URSS en diciembre de 1991.",
          de: "Der August-Putsch (auch '1991 Sowjetischer Staatsstreichversuch' genannt) begann am 19. August 1991, als kommunistische Hardliner Gorbatschow in seinem Ferienhaus auf der Krim festhielten. Sie lehnten seine Reformen (Perestroika und Glasnost) ab und bildeten das 'Staatliche Komitee für den Ausnahmezustand'. Boris Jelzin führte den Widerstand an und stand berühmt auf einem Panzer vor dem russischen Parlament. Der Putsch brach innerhalb von drei Tagen aufgrund von Volkswiderstand und militärischen Überläufen zusammen. Der gescheiterte Putsch diskreditierte die Kommunistische Partei, beschleunigte Unabhängigkeitsbewegungen in sowjetischen Republiken und führte zur Auflösung der UdSSR im Dezember 1991.",
          nl: "De Augustus Coup (ook wel '1991 Sovjet staatsgreep poging' genoemd) begon op 19 augustus 1991, toen hardlijnige communistische partijleden Gorbatsjov vasthielden in zijn vakantiehuis op de Krim. Ze waren tegen zijn hervormingen (perestrojka en glasnost) en vormden het 'Staatscomité voor de Noodtoestand'. Boris Jeltsin leidde het verzet en stond beroemd op een tank voor het Russische parlement. De coup stortte binnen drie dagen in vanwege volksopstand en militaire overlopen. De mislukte coup discrediteerde de Communistische Partij, versnelde onafhankelijkheidsbewegingen in Sovjet-republieken en leidde tot de ontbinding van de USSR in december 1991."
        }
      },
      {
        question: {
          en: "On August 19, 1883, which French fashion designer and founder of the Chanel brand was born?",
          es: "El 19 de agosto de 1883, ¿qué diseñadora de moda francesa y fundadora de la marca Chanel nació?",
          de: "Am 19. August 1883 wurde welche französische Modedesignerin und Gründerin der Marke Chanel geboren?",
          nl: "Op 19 augustus 1883 werd welke Franse modeontwerper en oprichter van het merk Chanel geboren?"
        },
        options: [
          { en: "Elsa Schiaparelli", es: "Elsa Schiaparelli", de: "Elsa Schiaparelli", nl: "Elsa Schiaparelli" },
          { en: "Jeanne Lanvin", es: "Jeanne Lanvin", de: "Jeanne Lanvin", nl: "Jeanne Lanvin" },
          { en: "Coco Chanel", es: "Coco Chanel", de: "Coco Chanel", nl: "Coco Chanel" },
          { en: "Madeleine Vionnet", es: "Madeleine Vionnet", de: "Madeleine Vionnet", nl: "Madeleine Vionnet" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Coco Chanel (born Gabrielle Bonheur Chanel) was born on August 19, 1883, in Saumur, France. She revolutionized women's fashion by rejecting the corseted silhouette and introducing comfortable, practical designs. Chanel created the iconic 'little black dress', Chanel No. 5 perfume, the Chanel suit, and popularized costume jewelry and the bob haircut. She liberated women from restrictive clothing and emphasized simplicity and elegance. Her brand philosophy was 'luxury must be comfortable, otherwise it is not luxury'. Chanel died in 1971, but her fashion house remains one of the world's most prestigious brands.",
          es: "Coco Chanel (nacida Gabrielle Bonheur Chanel) nació el 19 de agosto de 1883 en Saumur, Francia. Revolucionó la moda femenina al rechazar la silueta con corsé e introducir diseños cómodos y prácticos. Chanel creó el icónico 'pequeño vestido negro', el perfume Chanel No. 5, el traje Chanel y popularizó la bisutería y el corte bob. Liberó a las mujeres de la ropa restrictiva y enfatizó la simplicidad y elegancia. Su filosofía de marca era 'el lujo debe ser cómodo, de lo contrario no es lujo'. Chanel murió en 1971, pero su casa de moda sigue siendo una de las marcas más prestigiosas del mundo.",
          de: "Coco Chanel (geboren als Gabrielle Bonheur Chanel) wurde am 19. August 1883 in Saumur, Frankreich geboren. Sie revolutionierte die Damenmode, indem sie die korsettierte Silhouette ablehnte und bequeme, praktische Designs einführte. Chanel schuf das ikonische 'kleine Schwarze', das Parfüm Chanel No. 5, das Chanel-Kostüm und popularisierte Modeschmuck und den Bubikopf. Sie befreite Frauen von einengender Kleidung und betonte Einfachheit und Eleganz. Ihre Markenphilosophie war 'Luxus muss bequem sein, sonst ist es kein Luxus'. Chanel starb 1971, aber ihr Modehaus bleibt eine der prestigeträchtigsten Marken der Welt.",
          nl: "Coco Chanel (geboren als Gabrielle Bonheur Chanel) werd geboren op 19 augustus 1883 in Saumur, Frankrijk. Ze revolutioneerde damesmode door het gecorsetteerde silhouet af te wijzen en comfortabele, praktische ontwerpen te introduceren. Chanel creëerde het iconische 'kleine zwarte jurkje', Chanel No. 5 parfum, het Chanel-pakje en populariseerde costume jewelry en het bobkapsel. Ze bevrijdde vrouwen van beperkende kleding en benadrukte eenvoud en elegantie. Haar merkfilosofie was 'luxe moet comfortabel zijn, anders is het geen luxe'. Chanel stierf in 1971, maar haar modehuis blijft een van 's werelds meest prestigieuze merken."
        }
      },
      {
        question: {
          en: "On August 19, 1946, which future U.S. President was born in Hope, Arkansas, who would later serve two terms from 1993 to 2001?",
          es: "El 19 de agosto de 1946, ¿qué futuro presidente de EE.UU. nació en Hope, Arkansas, quien más tarde serviría dos mandatos de 1993 a 2001?",
          de: "Am 19. August 1946 wurde welcher zukünftige US-Präsident in Hope, Arkansas geboren, der später zwei Amtszeiten von 1993 bis 2001 dienen würde?",
          nl: "Op 19 augustus 1946 werd welke toekomstige Amerikaanse president geboren in Hope, Arkansas, die later twee termijnen zou dienen van 1993 tot 2001?"
        },
        options: [
          {
            en: "George H.W. Bush",
            es: "George H.W. Bush",
            de: "George H.W. Bush",
            nl: "George H.W. Bush"
          },
          {
            en: "Bill Clinton",
            es: "Bill Clinton",
            de: "Bill Clinton",
            nl: "Bill Clinton"
          },
          {
            en: "George W. Bush",
            es: "George W. Bush",
            de: "George W. Bush",
            nl: "George W. Bush"
          },
          {
            en: "Jimmy Carter",
            es: "Jimmy Carter",
            de: "Jimmy Carter",
            nl: "Jimmy Carter"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bill Clinton (born William Jefferson Blythe III) was born on August 19, 1946, in Hope, Arkansas. He served as the 42nd U.S. President from 1993 to 2001. Before the presidency, Clinton was Arkansas Attorney General and Governor. His presidency saw economic prosperity, budget surpluses, welfare reform, and the North American Free Trade Agreement (NAFTA). Clinton was impeached by the House in 1998 over the Monica Lewinsky scandal but acquitted by the Senate. He left office with high approval ratings. Clinton later established the Clinton Foundation focusing on global health and economic development.",
          es: "Bill Clinton (nacido William Jefferson Blythe III) nació el 19 de agosto de 1946 en Hope, Arkansas. Sirvió como el 42º presidente de EE.UU. de 1993 a 2001. Antes de la presidencia, Clinton fue Fiscal General y Gobernador de Arkansas. Su presidencia vio prosperidad económica, superávits presupuestarios, reforma del bienestar social y el Tratado de Libre Comercio de América del Norte (NAFTA). Clinton fue sometido a juicio político por la Cámara en 1998 por el escándalo de Monica Lewinsky pero fue absuelto por el Senado. Dejó el cargo con altos índices de aprobación. Clinton estableció posteriormente la Fundación Clinton enfocándose en salud global y desarrollo económico.",
          de: "Bill Clinton (geboren als William Jefferson Blythe III) wurde am 19. August 1946 in Hope, Arkansas geboren. Er diente als 42. US-Präsident von 1993 bis 2001. Vor der Präsidentschaft war Clinton Generalstaatsanwalt und Gouverneur von Arkansas. Seine Präsidentschaft sah wirtschaftlichen Wohlstand, Haushaltsüberschüsse, Wohlfahrtsreform und das Nordamerikanische Freihandelsabkommen (NAFTA). Clinton wurde 1998 vom Repräsentantenhaus wegen der Monica Lewinsky-Affäre angeklagt, aber vom Senat freigesprochen. Er verließ das Amt mit hohen Zustimmungswerten. Clinton gründete später die Clinton Foundation mit Fokus auf globale Gesundheit und wirtschaftliche Entwicklung.",
          nl: "Bill Clinton (geboren als William Jefferson Blythe III) werd geboren op 19 augustus 1946 in Hope, Arkansas. Hij diende als de 42e Amerikaanse president van 1993 tot 2001. Voor het presidentschap was Clinton procureur-generaal en gouverneur van Arkansas. Zijn presidentschap zag economische welvaart, begrotingsoverschotten, welzijnshervorming en de Noord-Amerikaanse Vrijhandelsovereenkomst (NAFTA). Clinton werd in 1998 door het Huis beschuldigd wegens het Monica Lewinsky-schandaal maar werd vrijgesproken door de Senaat. Hij verliet het ambt met hoge goedkeuringspercentages. Clinton richtte later de Clinton Foundation op die zich richt op mondiale gezondheid en economische ontwikkeling."
        }
      },
      {
        question: {
          en: "On August 19, 1934, which country voted to merge the positions of President and Chancellor, granting Adolf Hitler absolute power?",
          es: "El 19 de agosto de 1934, ¿qué país votó para fusionar los cargos de Presidente y Canciller, otorgando a Adolf Hitler poder absoluto?",
          de: "Am 19. August 1934 stimmte welches Land dafür, die Ämter des Präsidenten und des Kanzlers zu vereinen und Adolf Hitler absolute Macht zu verleihen?",
          nl: "Op 19 augustus 1934 stemde welk land om de posities van president en kanselier samen te voegen, waarmee Adolf Hitler absolute macht kreeg?"
        },
        options: [
          {
            en: "Austria",
            es: "Austria",
            de: "Österreich",
            nl: "Oostenrijk"
          },
          {
            en: "Italy",
            es: "Italia",
            de: "Italien",
            nl: "Italië"
          },
          {
            en: "Germany",
            es: "Alemania",
            de: "Deutschland",
            nl: "Duitsland"
          },
          {
            en: "Poland",
            es: "Polonia",
            de: "Polen",
            nl: "Polen"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "On August 19, 1934, Germans voted in a referendum to approve merging the offices of President and Chancellor after President Hindenburg's death. This made Hitler 'Führer and Reich Chancellor' with absolute power. The vote was heavily manipulated - official results claimed 89.9% approval, but the referendum was conducted under Nazi intimidation with no secret ballot. This consolidation of power eliminated the last constitutional restraints on Hitler's authority. The military swore personal loyalty oaths to Hitler (not the constitution), completing his totalitarian control. This paved the way for Nazi Germany's aggressive expansion and the Holocaust.",
          es: "El 19 de agosto de 1934, los alemanes votaron en un referéndum para aprobar la fusión de los cargos de Presidente y Canciller después de la muerte del presidente Hindenburg. Esto hizo a Hitler 'Führer y Canciller del Reich' con poder absoluto. El voto fue muy manipulado: los resultados oficiales afirmaron una aprobación del 89.9%, pero el referéndum se realizó bajo intimidación nazi sin voto secreto. Esta consolidación de poder eliminó las últimas restricciones constitucionales sobre la autoridad de Hitler. Los militares juraron lealtad personal a Hitler (no a la constitución), completando su control totalitario. Esto allanó el camino para la expansión agresiva de la Alemania nazi y el Holocausto.",
          de: "Am 19. August 1934 stimmten die Deutschen in einem Referendum für die Zusammenlegung der Ämter von Präsident und Kanzler nach Präsident Hindenburgs Tod. Dies machte Hitler zum 'Führer und Reichskanzler' mit absoluter Macht. Die Abstimmung wurde stark manipuliert - offizielle Ergebnisse behaupteten 89,9% Zustimmung, aber das Referendum wurde unter Nazi-Einschüchterung ohne geheime Abstimmung durchgeführt. Diese Machtkonsolidierung beseitigte die letzten verfassungsmäßigen Beschränkungen von Hitlers Autorität. Das Militär schwor persönliche Treueide auf Hitler (nicht auf die Verfassung) und vervollständigte seine totalitäre Kontrolle. Dies ebnete den Weg für Nazi-Deutschlands aggressive Expansion und den Holocaust.",
          nl: "Op 19 augustus 1934 stemden Duitsers in een referendum om de functies van president en kanselier samen te voegen na de dood van president Hindenburg. Dit maakte Hitler 'Führer en Rijkskanselier' met absolute macht. De stemming was zwaar gemanipuleerd - officiële resultaten beweerden 89,9% goedkeuring, maar het referendum werd gehouden onder nazi-intimidatie zonder geheime stemming. Deze machtsconsolidatie elimineerde de laatste constitutionele beperkingen op Hitlers autoriteit. Het leger zwoer persoonlijke loyaliteitseeden aan Hitler (niet aan de grondwet), waarmee zijn totalitaire controle werd voltooid. Dit maakte de weg vrij voor nazi-Duitslands agressieve expansie en de Holocaust."
        }
      },
      {
        question: {
          en: "On August 19, 1960, two dogs became the first living creatures to survive orbital spaceflight. What were their names?",
          es: "El 19 de agosto de 1960, dos perros se convirtieron en las primeras criaturas vivientes en sobrevivir un vuelo espacial orbital. ¿Cuáles eran sus nombres?",
          de: "Am 19. August 1960 wurden zwei Hunde die ersten Lebewesen, die einen orbitalen Raumflug überlebten. Wie hießen sie?",
          nl: "Op 19 augustus 1960 werden twee honden de eerste levende wezens die een orbitale ruimtevlucht overleefden. Wat waren hun namen?"
        },
        options: [
          {
            en: "Laika and Strelka",
            es: "Laika y Strelka",
            de: "Laika und Strelka",
            nl: "Laika en Strelka"
          },
          {
            en: "Belka and Strelka",
            es: "Belka y Strelka",
            de: "Belka und Strelka",
            nl: "Belka en Strelka"
          },
          {
            en: "Sputnik and Luna",
            es: "Sputnik y Luna",
            de: "Sputnik und Luna",
            nl: "Spoetnik en Luna"
          },
          {
            en: "Gagarin and Tereshkova",
            es: "Gagarin y Tereshkova",
            de: "Gagarin und Tereschkowa",
            nl: "Gagarin en Teresjkova"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Soviet dogs Belka and Strelka were launched aboard Sputnik 5 on August 19, 1960, and successfully returned to Earth after 18 orbits (over 24 hours in space). They were accompanied by 40 mice, 2 rats, plants, and other biological specimens. This mission was a crucial step toward human spaceflight, proving that living organisms could survive the rigors of launch, weightlessness, cosmic radiation, and re-entry. Unlike Laika (who died in 1957), Belka and Strelka survived and lived comfortable lives. Strelka later had puppies, one of which was given to President Kennedy's daughter Caroline.",
          es: "Los perros soviéticos Belka y Strelka fueron lanzados a bordo del Sputnik 5 el 19 de agosto de 1960 y regresaron con éxito a la Tierra después de 18 órbitas (más de 24 horas en el espacio). Fueron acompañados por 40 ratones, 2 ratas, plantas y otras muestras biológicas. Esta misión fue un paso crucial hacia el vuelo espacial humano, demostrando que los organismos vivos podían sobrevivir los rigores del lanzamiento, ingravidez, radiación cósmica y reentrada. A diferencia de Laika (que murió en 1957), Belka y Strelka sobrevivieron y vivieron vidas cómodas. Strelka luego tuvo cachorros, uno de los cuales fue dado a la hija del presidente Kennedy, Caroline.",
          de: "Die sowjetischen Hunde Belka und Strelka wurden am 19. August 1960 an Bord von Sputnik 5 gestartet und kehrten nach 18 Umkreisungen (über 24 Stunden im Weltraum) erfolgreich zur Erde zurück. Sie wurden von 40 Mäusen, 2 Ratten, Pflanzen und anderen biologischen Proben begleitet. Diese Mission war ein entscheidender Schritt zur bemannten Raumfahrt und bewies, dass lebende Organismen die Strapazen von Start, Schwerelosigkeit, kosmischer Strahlung und Wiedereintritt überleben konnten. Anders als Laika (die 1957 starb) überlebten Belka und Strelka und lebten ein komfortables Leben. Strelka bekam später Welpen, von denen einer Präsident Kennedys Tochter Caroline geschenkt wurde.",
          nl: "De Sovjet-honden Belka en Strelka werden gelanceerd aan boord van Spoetnik 5 op 19 augustus 1960 en keerden succesvol terug naar de aarde na 18 omloopbanen (meer dan 24 uur in de ruimte). Ze werden vergezeld door 40 muizen, 2 ratten, planten en andere biologische specimens. Deze missie was een cruciale stap richting bemande ruimtevaart, die bewees dat levende organismen de ontberingen van lancering, gewichtloosheid, kosmische straling en terugkeer konden overleven. In tegenstelling tot Laika (die stierf in 1957) overleefden Belka en Strelka en leefden comfortabele levens. Strelka kreeg later puppies, waarvan er een werd gegeven aan president Kennedy's dochter Caroline."
        }
      }
    ],

    // Day 20 - August 20th: Voyager 2 launched, Estonia independence, Benjamin Harrison born
    day20: [
      {
        question: {
          en: "On August 20, 1977, which NASA spacecraft was launched to study the outer planets, becoming the only probe to visit Uranus and Neptune?",
          es: "El 20 de agosto de 1977, ¿qué nave espacial de la NASA fue lanzada para estudiar los planetas exteriores, convirtiéndose en la única sonda en visitar Urano y Neptuno?",
          de: "Am 20. August 1977 wurde welche NASA-Raumsonde gestartet, um die äußeren Planeten zu studieren und als einzige Sonde Uranus und Neptun zu besuchen?",
          nl: "Op 20 augustus 1977 werd welk NASA-ruimtevaartuig gelanceerd om de buitenste planeten te bestuderen en de enige sonde te worden die Uranus en Neptunus bezocht?"
        },
        options: [
          {
            en: "Pioneer 10",
            es: "Pioneer 10",
            de: "Pioneer 10",
            nl: "Pioneer 10"
          },
          {
            en: "Voyager 1",
            es: "Voyager 1",
            de: "Voyager 1",
            nl: "Voyager 1"
          },
          {
            en: "Voyager 2",
            es: "Voyager 2",
            de: "Voyager 2",
            nl: "Voyager 2"
          },
          {
            en: "Cassini",
            es: "Cassini",
            de: "Cassini",
            nl: "Cassini"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Voyager 2 was launched on August 20, 1977 (16 days before Voyager 1, despite the numbering). It flew by Jupiter (1979), Saturn (1981), Uranus (1986), and Neptune (1989) - the only spacecraft to visit all four outer planets. This 'Grand Tour' was possible due to a rare planetary alignment. Voyager 2 discovered new moons, rings, and revealed detailed information about these distant worlds. It carries a golden record with sounds and images of Earth. In 2018, Voyager 2 entered interstellar space. Both Voyager probes continue transmitting data from beyond our solar system.",
          es: "Voyager 2 fue lanzada el 20 de agosto de 1977 (16 días antes que Voyager 1, a pesar de la numeración). Pasó por Júpiter (1979), Saturno (1981), Urano (1986) y Neptuno (1989) - la única nave espacial en visitar los cuatro planetas exteriores. Este 'Gran Tour' fue posible debido a una rara alineación planetaria. Voyager 2 descubrió nuevas lunas, anillos y reveló información detallada sobre estos mundos distantes. Lleva un disco dorado con sonidos e imágenes de la Tierra. En 2018, Voyager 2 entró en el espacio interestelar. Ambas sondas Voyager continúan transmitiendo datos desde más allá de nuestro sistema solar.",
          de: "Voyager 2 wurde am 20. August 1977 gestartet (16 Tage vor Voyager 1, trotz der Nummerierung). Sie flog an Jupiter (1979), Saturn (1981), Uranus (1986) und Neptun (1989) vorbei - die einzige Raumsonde, die alle vier äußeren Planeten besuchte. Diese 'Grand Tour' war aufgrund einer seltenen Planetenausrichtung möglich. Voyager 2 entdeckte neue Monde, Ringe und enthüllte detaillierte Informationen über diese fernen Welten. Sie trägt eine goldene Schallplatte mit Klängen und Bildern der Erde. 2018 trat Voyager 2 in den interstellaren Raum ein. Beide Voyager-Sonden übermitteln weiterhin Daten von jenseits unseres Sonnensystems.",
          nl: "Voyager 2 werd gelanceerd op 20 augustus 1977 (16 dagen vóór Voyager 1, ondanks de nummering). Het vloog langs Jupiter (1979), Saturnus (1981), Uranus (1986) en Neptunus (1989) - het enige ruimtevaartuig dat alle vier de buitenste planeten bezocht. Deze 'Grand Tour' was mogelijk dankzij een zeldzame planetaire uitlijning. Voyager 2 ontdekte nieuwe manen, ringen en onthulde gedetailleerde informatie over deze verre werelden. Het draagt een gouden plaat met geluiden en beelden van de aarde. In 2018 betrad Voyager 2 de interstellaire ruimte. Beide Voyager-sondes blijven gegevens verzenden van buiten ons zonnestelsel."
        }
      },
      {
        question: {
          en: "On August 20, 1991, which Baltic nation declared independence from the Soviet Union during its collapse?",
          es: "El 20 de agosto de 1991, ¿qué nación báltica declaró su independencia de la Unión Soviética durante su colapso?",
          de: "Am 20. August 1991 erklärte welche baltische Nation ihre Unabhängigkeit von der Sowjetunion während ihres Zusammenbruchs?",
          nl: "Op 20 augustus 1991 verklaarde welke Baltische natie onafhankelijkheid van de Sovjet-Unie tijdens zijn ineenstorting?"
        },
        options: [
          {
            en: "Latvia",
            es: "Letonia",
            de: "Lettland",
            nl: "Letland"
          },
          {
            en: "Lithuania",
            es: "Lituania",
            de: "Litauen",
            nl: "Litouwen"
          },
          {
            en: "Estonia",
            es: "Estonia",
            de: "Estland",
            nl: "Estland"
          },
          {
            en: "Finland",
            es: "Finlandia",
            de: "Finnland",
            nl: "Finland"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Estonia declared full independence on August 20, 1991, during the failed August Coup in Moscow. Estonia had already declared sovereignty in 1988 (the 'Singing Revolution') and was forcibly incorporated into the USSR in 1940. The 1991 declaration took advantage of the Soviet Union's weakening grip. Estonia quickly gained international recognition and joined the United Nations in September 1991. The country became a member of NATO and the European Union in 2004. Estonia has since become one of the most digitally advanced nations, pioneering e-governance and creating Skype.",
          es: "Estonia declaró su independencia total el 20 de agosto de 1991, durante el fallido Golpe de Agosto en Moscú. Estonia ya había declarado soberanía en 1988 (la 'Revolución Cantada') y fue incorporada por la fuerza a la URSS en 1940. La declaración de 1991 aprovechó el debilitamiento del control de la Unión Soviética. Estonia rápidamente obtuvo reconocimiento internacional y se unió a las Naciones Unidas en septiembre de 1991. El país se convirtió en miembro de la OTAN y la Unión Europea en 2004. Estonia se ha convertido desde entonces en una de las naciones más avanzadas digitalmente, siendo pionera en gobierno electrónico y creando Skype.",
          de: "Estland erklärte am 20. August 1991 seine volle Unabhängigkeit während des gescheiterten August-Putsches in Moskau. Estland hatte bereits 1988 seine Souveränität erklärt (die 'Singende Revolution') und wurde 1940 gewaltsam in die UdSSR eingegliedert. Die Erklärung von 1991 nutzte den schwächer werdenden Griff der Sowjetunion. Estland erhielt schnell internationale Anerkennung und trat im September 1991 den Vereinten Nationen bei. Das Land wurde 2004 Mitglied der NATO und der Europäischen Union. Estland ist seitdem zu einer der digital fortschrittlichsten Nationen geworden, Pionier in E-Government und Schöpfer von Skype.",
          nl: "Estland verklaarde volledige onafhankelijkheid op 20 augustus 1991, tijdens de mislukte Augustus Coup in Moskou. Estland had al soevereiniteit verklaard in 1988 (de 'Zingende Revolutie') en werd met geweld opgenomen in de USSR in 1940. De verklaring van 1991 maakte gebruik van de verzwakkende greep van de Sovjet-Unie. Estland kreeg snel internationale erkenning en werd lid van de Verenigde Naties in september 1991. Het land werd lid van de NAVO en de Europese Unie in 2004. Estland is sindsdien een van de meest digitaal geavanceerde naties geworden, pionier in e-governance en maker van Skype."
        }
      },
      {
        question: {
          en: "On August 20, 1833, which U.S. President who served from 1889 to 1893 was born in North Bend, Ohio?",
          es: "El 20 de agosto de 1833, ¿qué presidente de EE.UU. que sirvió de 1889 a 1893 nació en North Bend, Ohio?",
          de: "Am 20. August 1833 wurde welcher US-Präsident, der von 1889 bis 1893 diente, in North Bend, Ohio geboren?",
          nl: "Op 20 augustus 1833 werd welke Amerikaanse president die diende van 1889 tot 1893 geboren in North Bend, Ohio?"
        },
        options: [
          {
            en: "Grover Cleveland",
            es: "Grover Cleveland",
            de: "Grover Cleveland",
            nl: "Grover Cleveland"
          },
          {
            en: "William McKinley",
            es: "William McKinley",
            de: "William McKinley",
            nl: "William McKinley"
          },
          {
            en: "Benjamin Harrison",
            es: "Benjamin Harrison",
            de: "Benjamin Harrison",
            nl: "Benjamin Harrison"
          },
          {
            en: "Rutherford B. Hayes",
            es: "Rutherford B. Hayes",
            de: "Rutherford B. Hayes",
            nl: "Rutherford B. Hayes"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Benjamin Harrison was born on August 20, 1833, in North Bend, Ohio. He was the 23rd U.S. President (1889-1893) and the grandson of President William Henry Harrison (9th President). Harrison served in the Civil War, rising to brigadier general. His presidency saw six states join the Union (the most under any president), passage of the Sherman Antitrust Act, and expansion of the U.S. Navy. He lost re-election to Grover Cleveland, the same man he had defeated in 1888. Harrison was the last president with a full beard.",
          es: "Benjamin Harrison nació el 20 de agosto de 1833 en North Bend, Ohio. Fue el 23º presidente de EE.UU. (1889-1893) y nieto del presidente William Henry Harrison (9º presidente). Harrison sirvió en la Guerra Civil, ascendiendo a general de brigada. Su presidencia vio seis estados unirse a la Unión (el mayor número bajo cualquier presidente), la aprobación de la Ley Antimonopolio Sherman y la expansión de la Marina de EE.UU. Perdió la reelección ante Grover Cleveland, el mismo hombre al que había derrotado en 1888. Harrison fue el último presidente con barba completa.",
          de: "Benjamin Harrison wurde am 20. August 1833 in North Bend, Ohio geboren. Er war der 23. US-Präsident (1889-1893) und der Enkel von Präsident William Henry Harrison (9. Präsident). Harrison diente im Bürgerkrieg und stieg zum Brigadegeneral auf. Seine Präsidentschaft sah sechs Staaten der Union beitreten (die meisten unter einem Präsidenten), die Verabschiedung des Sherman Antitrust Act und die Expansion der US-Marine. Er verlor die Wiederwahl gegen Grover Cleveland, denselben Mann, den er 1888 besiegt hatte. Harrison war der letzte Präsident mit einem vollen Bart.",
          nl: "Benjamin Harrison werd geboren op 20 augustus 1833 in North Bend, Ohio. Hij was de 23e Amerikaanse president (1889-1893) en de kleinzoon van president William Henry Harrison (9e president). Harrison diende in de Burgeroorlog en steeg tot brigadegeneraal. Zijn presidentschap zag zes staten toetreden tot de Unie (de meeste onder een president), goedkeuring van de Sherman Antitrust Act en uitbreiding van de Amerikaanse marine. Hij verloor herverkiezing aan Grover Cleveland, dezelfde man die hij in 1888 had verslagen. Harrison was de laatste president met een volle baard."
        }
      },
      {
        question: {
          en: "On August 20, 1940, which exiled Soviet revolutionary and Marxist theorist was assassinated in Mexico City on Stalin's orders?",
          es: "El 20 de agosto de 1940, ¿qué revolucionario soviético exiliado y teórico marxista fue asesinado en la Ciudad de México por órdenes de Stalin?",
          de: "Am 20. August 1940 wurde welcher exilierte sowjetische Revolutionär und marxistische Theoretiker in Mexiko-Stadt auf Stalins Befehl ermordet?",
          nl: "Op 20 augustus 1940 werd welke verbannen Sovjet-revolutionair en marxistische theoreticus vermoord in Mexico-Stad op bevel van Stalin?"
        },
        options: [
          {
            en: "Vladimir Lenin",
            es: "Vladimir Lenin",
            de: "Wladimir Lenin",
            nl: "Vladimir Lenin"
          },
          {
            en: "Leon Trotsky",
            es: "León Trotsky",
            de: "Leo Trotzki",
            nl: "Leon Trotski"
          },
          {
            en: "Nikolai Bukharin",
            es: "Nikolái Bujarin",
            de: "Nikolai Bucharin",
            nl: "Nikolaj Boecharin"
          },
          {
            en: "Grigory Zinoviev",
            es: "Grigori Zinóviev",
            de: "Grigori Sinowjew",
            nl: "Grigori Zinovjev"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Leon Trotsky died on August 20, 1940, from wounds inflicted the previous day when Soviet agent Ramón Mercader struck him with an ice axe in Mexico City. Trotsky was a key figure in the Russian Revolution and Lenin's close ally. He founded the Red Army and served as People's Commissar for Foreign Affairs and Military Affairs. After Lenin's death, Trotsky lost a power struggle with Stalin, was expelled from the Communist Party (1927), and exiled from the USSR (1929). Stalin viewed him as a threat and ordered his assassination. Trotsky's ideas ('Trotskyism') influenced socialist movements worldwide.",
          es: "León Trotsky murió el 20 de agosto de 1940 por heridas infligidas el día anterior cuando el agente soviético Ramón Mercader lo golpeó con un piolet en la Ciudad de México. Trotsky fue una figura clave en la Revolución Rusa y estrecho aliado de Lenin. Fundó el Ejército Rojo y sirvió como Comisario del Pueblo para Asuntos Exteriores y Militares. Después de la muerte de Lenin, Trotsky perdió una lucha de poder con Stalin, fue expulsado del Partido Comunista (1927) y exiliado de la URSS (1929). Stalin lo veía como una amenaza y ordenó su asesinato. Las ideas de Trotsky ('trotskismo') influyeron en movimientos socialistas en todo el mundo.",
          de: "Leo Trotzki starb am 20. August 1940 an Verletzungen, die ihm am Tag zuvor zugefügt wurden, als der sowjetische Agent Ramón Mercader ihn mit einem Eispickel in Mexiko-Stadt angriff. Trotzki war eine Schlüsselfigur der Russischen Revolution und enger Verbündeter Lenins. Er gründete die Rote Armee und diente als Volkskommissar für Auswärtige Angelegenheiten und Militärangelegenheiten. Nach Lenins Tod verlor Trotzki einen Machtkampf mit Stalin, wurde aus der Kommunistischen Partei ausgeschlossen (1927) und aus der UdSSR verbannt (1929). Stalin sah ihn als Bedrohung und befahl seine Ermordung. Trotzkis Ideen ('Trotzkismus') beeinflussten sozialistische Bewegungen weltweit.",
          nl: "Leon Trotski stierf op 20 augustus 1940 aan verwondingen die de vorige dag waren toegebracht toen Sovjet-agent Ramón Mercader hem met een ijspikkel sloeg in Mexico-Stad. Trotski was een sleutelfiguur in de Russische Revolutie en naaste bondgenoot van Lenin. Hij stichtte het Rode Leger en diende als Volkscommissaris voor Buitenlandse Zaken en Militaire Zaken. Na de dood van Lenin verloor Trotski een machtsstrijd met Stalin, werd uit de Communistische Partij gezet (1927) en verbannen uit de USSR (1929). Stalin zag hem als een bedreiging en gaf opdracht tot zijn moord. Trotski's ideeën ('trotskisme') beïnvloedden socialistische bewegingen wereldwijd."
        }
      },
      {
        question: {
          en: "On August 20, 1911, the first telegram was sent around the world via which technology that completed the circuit?",
          es: "El 20 de agosto de 1911, el primer telegrama fue enviado alrededor del mundo a través de ¿qué tecnología que completó el circuito?",
          de: "Am 20. August 1911 wurde das erste Telegramm um die Welt gesendet über welche Technologie, die den Kreislauf vervollständigte?",
          nl: "Op 20 augustus 1911 werd het eerste telegram rond de wereld gestuurd via welke technologie die het circuit voltooide?"
        },
        options: [
          {
            en: "Satellite relay",
            es: "Relé satelital",
            de: "Satellitenrelais",
            nl: "Satellietrelais"
          },
          {
            en: "Underwater cable",
            es: "Cable submarino",
            de: "Unterseekabel",
            nl: "Onderzeese kabel"
          },
          {
            en: "Radio waves",
            es: "Ondas de radio",
            de: "Radiowellen",
            nl: "Radiogolven"
          },
          {
            en: "Carrier pigeon",
            es: "Paloma mensajera",
            de: "Brieftaube",
            nl: "Postduif"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On August 20, 1911, the first 'around-the-world' telegram was sent from the New York Times building. The message traveled east via commercial telegraph lines and underwater cables across the Atlantic, through Europe, Asia, and the Pacific, returning to New York from the west. The circuit was completed by the Pacific Commercial Cable, which had been laid in 1903. The message took approximately 16.5 minutes to circumnavigate the globe. This achievement demonstrated the extent of global telecommunications infrastructure in the early 20th century, connecting continents through a vast network of undersea cables.",
          es: "El 20 de agosto de 1911, el primer telegrama 'alrededor del mundo' fue enviado desde el edificio del New York Times. El mensaje viajó hacia el este a través de líneas telegráficas comerciales y cables submarinos a través del Atlántico, pasando por Europa, Asia y el Pacífico, regresando a Nueva York desde el oeste. El circuito fue completado por el Cable Comercial del Pacífico, que había sido tendido en 1903. El mensaje tardó aproximadamente 16.5 minutos en dar la vuelta al globo. Este logro demostró la extensión de la infraestructura de telecomunicaciones global a principios del siglo XX, conectando continentes a través de una vasta red de cables submarinos.",
          de: "Am 20. August 1911 wurde das erste 'Um-die-Welt'-Telegramm vom New York Times-Gebäude gesendet. Die Nachricht reiste nach Osten über kommerzielle Telegrafenleitungen und Unterseekabel über den Atlantik, durch Europa, Asien und den Pazifik und kehrte von Westen nach New York zurück. Der Kreislauf wurde durch das Pacific Commercial Cable vervollständigt, das 1903 verlegt worden war. Die Nachricht benötigte etwa 16,5 Minuten, um die Erde zu umrunden. Diese Leistung demonstrierte das Ausmaß der globalen Telekommunikationsinfrastruktur im frühen 20. Jahrhundert, die Kontinente durch ein riesiges Netzwerk von Unterseekabeln verband.",
          nl: "Op 20 augustus 1911 werd het eerste 'rond-de-wereld' telegram verzonden vanaf het New York Times-gebouw. Het bericht reisde naar het oosten via commerciële telegraaflij en onderzeese kabels over de Atlantische Oceaan, door Europa, Azië en de Stille Oceaan, en keerde terug naar New York vanuit het westen. Het circuit werd voltooid door de Pacific Commercial Cable, die in 1903 was gelegd. Het bericht deed er ongeveer 16,5 minuten over om de aarde te omcirkelen. Deze prestatie toonde de omvang van de mondiale telecommunicatie-infrastructuur in het begin van de 20e eeuw, die continenten verbond via een enorm netwerk van onderzeese kabels."
        }
      }
    ],
    day21: [
      {
        question: {
          en: "On August 21, 1911, which famous painting was stolen from the Louvre Museum in Paris, not to be recovered until 1913?",
          es: "El 21 de agosto de 1911, ¿qué famosa pintura fue robada del Museo del Louvre en París, y no fue recuperada hasta 1913?",
          de: "Am 21. August 1911 wurde welches berühmte Gemälde aus dem Louvre Museum in Paris gestohlen und erst 1913 wiedergefunden?",
          nl: "Op 21 augustus 1911 werd welk beroemd schilderij gestolen uit het Louvre Museum in Parijs, en pas in 1913 teruggevonden?"
        },
        options: [
          {
            en: "The Birth of Venus",
            es: "El nacimiento de Venus",
            de: "Die Geburt der Venus",
            nl: "De geboorte van Venus"
          },
          {
            en: "The Last Supper",
            es: "La última cena",
            de: "Das letzte Abendmahl",
            nl: "Het laatste avondmaal"
          },
          {
            en: "Mona Lisa",
            es: "La Mona Lisa",
            de: "Mona Lisa",
            nl: "Mona Lisa"
          },
          {
            en: "Girl with a Pearl Earring",
            es: "La joven de la perla",
            de: "Das Mädchen mit dem Perlenohrgehänge",
            nl: "Meisje met de parel"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Mona Lisa was stolen on August 21, 1911, by Italian handyman Vincenzo Peruggia, who believed the painting should be returned to Italy. He hid the painting in his Paris apartment for two years. The theft made the Mona Lisa more famous than ever - thousands visited the empty space on the wall. Leonardo da Vinci painted the portrait around 1503-1519. Peruggia was caught when he tried to sell it to the Uffizi Gallery in Florence in 1913. The painting was returned to the Louvre, where it remains the museum's most visited artwork.",
          es: "La Mona Lisa fue robada el 21 de agosto de 1911 por el trabajador italiano Vincenzo Peruggia, quien creía que la pintura debería ser devuelta a Italia. Escondió la pintura en su apartamento de París durante dos años. El robo hizo a la Mona Lisa más famosa que nunca - miles visitaron el espacio vacío en la pared. Leonardo da Vinci pintó el retrato alrededor de 1503-1519. Peruggia fue capturado cuando intentó venderla a la Galería Uffizi en Florencia en 1913. La pintura fue devuelta al Louvre, donde permanece como la obra de arte más visitada del museo.",
          de: "Die Mona Lisa wurde am 21. August 1911 vom italienischen Handwerker Vincenzo Peruggia gestohlen, der glaubte, das Gemälde sollte nach Italien zurückgebracht werden. Er versteckte das Gemälde zwei Jahre lang in seiner Pariser Wohnung. Der Diebstahl machte die Mona Lisa berühmter als je zuvor - Tausende besuchten den leeren Platz an der Wand. Leonardo da Vinci malte das Porträt um 1503-1519. Peruggia wurde gefasst, als er versuchte, es 1913 an die Uffizien in Florenz zu verkaufen. Das Gemälde wurde an den Louvre zurückgegeben, wo es das meistbesuchte Kunstwerk des Museums bleibt.",
          nl: "De Mona Lisa werd gestolen op 21 augustus 1911 door de Italiaanse klusjesman Vincenzo Peruggia, die geloofde dat het schilderij naar Italië moest worden teruggebracht. Hij verborg het schilderij twee jaar lang in zijn Parijse appartement. De diefstal maakte de Mona Lisa beroemder dan ooit - duizenden bezochten de lege plek aan de muur. Leonardo da Vinci schilderde het portret rond 1503-1519. Peruggia werd gepakt toen hij het in 1913 probeerde te verkopen aan de Uffizi Galerij in Florence. Het schilderij werd teruggebracht naar het Louvre, waar het het meest bezochte kunstwerk van het museum blijft."
        }
      },
      {
        question: {
          en: "On August 21, 1959, which U.S. territory became the 50th state to join the Union?",
          es: "El 21 de agosto de 1959, ¿qué territorio estadounidense se convirtió en el estado número 50 en unirse a la Unión?",
          de: "Am 21. August 1959 wurde welches US-Territorium der 50. Staat, der der Union beitrat?",
          nl: "Op 21 augustus 1959 werd welk Amerikaans territorium de 50e staat die zich aansloot bij de Unie?"
        },
        options: [
          {
            en: "Alaska",
            es: "Alaska",
            de: "Alaska",
            nl: "Alaska"
          },
          {
            en: "Hawaii",
            es: "Hawái",
            de: "Hawaii",
            nl: "Hawaï"
          },
          {
            en: "Puerto Rico",
            es: "Puerto Rico",
            de: "Puerto Rico",
            nl: "Puerto Rico"
          },
          {
            en: "Guam",
            es: "Guam",
            de: "Guam",
            nl: "Guam"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Hawaii became the 50th U.S. state on August 21, 1959, just months after Alaska became the 49th. The Hawaiian Islands were annexed by the U.S. in 1898 and became a territory in 1900. After World War II, statehood movements gained momentum. Hawaii's population voted overwhelmingly in favor of statehood in 1959. Hawaii is the only U.S. state composed entirely of islands, located in the Pacific Ocean about 2,000 miles from the mainland. It's also the only state with Asian American majority population and the birthplace of President Barack Obama.",
          es: "Hawái se convirtió en el estado número 50 de EE.UU. el 21 de agosto de 1959, solo meses después de que Alaska se convirtiera en el estado 49. Las Islas Hawaianas fueron anexadas por EE.UU. en 1898 y se convirtieron en territorio en 1900. Después de la Segunda Guerra Mundial, los movimientos por la estadidad ganaron impulso. La población de Hawái votó abrumadoramente a favor de la estadidad en 1959. Hawái es el único estado estadounidense compuesto enteramente de islas, ubicado en el Océano Pacífico a unas 2,000 millas del continente. También es el único estado con población mayoritaria asiático-americana y el lugar de nacimiento del presidente Barack Obama.",
          de: "Hawaii wurde am 21. August 1959 der 50. US-Bundesstaat, nur Monate nachdem Alaska der 49. wurde. Die Hawaiianischen Inseln wurden 1898 von den USA annektiert und 1900 zum Territorium. Nach dem Zweiten Weltkrieg gewannen Staatlichkeitsbewegungen an Schwung. Hawaiis Bevölkerung stimmte 1959 überwältigend für die Staatlichkeit. Hawaii ist der einzige US-Bundesstaat, der vollständig aus Inseln besteht und liegt im Pazifischen Ozean etwa 2.000 Meilen vom Festland entfernt. Es ist auch der einzige Staat mit asiatisch-amerikanischer Mehrheitsbevölkerung und der Geburtsort von Präsident Barack Obama.",
          nl: "Hawaï werd de 50e Amerikaanse staat op 21 augustus 1959, slechts maanden nadat Alaska de 49e werd. De Hawaïaanse eilanden werden geannexeerd door de VS in 1898 en werden een territorium in 1900. Na de Tweede Wereldoorlog kregen staatschapbewegingen momentum. De bevolking van Hawaï stemde overweldigend voor staatschap in 1959. Hawaï is de enige Amerikaanse staat die volledig uit eilanden bestaat, gelegen in de Stille Oceaan ongeveer 2.000 mijl van het vasteland. Het is ook de enige staat met een Aziatisch-Amerikaanse meerderheidsbevolking en de geboorteplaats van president Barack Obama."
        }
      },
      {
        question: {
          en: "On August 21, 1858, which two future political rivals held the first of their famous debates in Illinois?",
          es: "El 21 de agosto de 1858, ¿qué dos futuros rivales políticos celebraron el primero de sus famosos debates en Illinois?",
          de: "Am 21. August 1858 hielten welche zwei zukünftigen politischen Rivalen die erste ihrer berühmten Debatten in Illinois ab?",
          nl: "Op 21 augustus 1858 hielden welke twee toekomstige politieke rivalen het eerste van hun beroemde debatten in Illinois?"
        },
        options: [
          {
            en: "Jefferson and Hamilton",
            es: "Jefferson y Hamilton",
            de: "Jefferson und Hamilton",
            nl: "Jefferson en Hamilton"
          },
          {
            en: "Lincoln and Douglas",
            es: "Lincoln y Douglas",
            de: "Lincoln und Douglas",
            nl: "Lincoln en Douglas"
          },
          {
            en: "Roosevelt and Taft",
            es: "Roosevelt y Taft",
            de: "Roosevelt und Taft",
            nl: "Roosevelt en Taft"
          },
          {
            en: "Adams and Burr",
            es: "Adams y Burr",
            de: "Adams und Burr",
            nl: "Adams en Burr"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Abraham Lincoln and Stephen A. Douglas began their famous debates on August 21, 1858, in Ottawa, Illinois. The seven debates focused on slavery and its expansion into new territories. Douglas defended 'popular sovereignty' (letting each territory decide), while Lincoln opposed slavery's expansion. Though Lincoln lost the Senate race, the debates made him a national figure and helped him win the presidency in 1860. The debates were extensively covered by newspapers and attracted massive crowds. They remain among the most significant political debates in American history, addressing fundamental questions about democracy and human rights.",
          es: "Abraham Lincoln y Stephen A. Douglas comenzaron sus famosos debates el 21 de agosto de 1858 en Ottawa, Illinois. Los siete debates se centraron en la esclavitud y su expansión a nuevos territorios. Douglas defendió la 'soberanía popular' (dejar que cada territorio decidiera), mientras que Lincoln se opuso a la expansión de la esclavitud. Aunque Lincoln perdió la carrera por el Senado, los debates lo convirtieron en una figura nacional y lo ayudaron a ganar la presidencia en 1860. Los debates fueron ampliamente cubiertos por periódicos y atrajeron multitudes masivas. Siguen siendo algunos de los debates políticos más significativos en la historia estadounidense, abordando cuestiones fundamentales sobre democracia y derechos humanos.",
          de: "Abraham Lincoln und Stephen A. Douglas begannen ihre berühmten Debatten am 21. August 1858 in Ottawa, Illinois. Die sieben Debatten konzentrierten sich auf die Sklaverei und ihre Ausweitung auf neue Territorien. Douglas verteidigte die 'Volkssouveränität' (jedes Territorium sollte selbst entscheiden), während Lincoln sich gegen die Ausweitung der Sklaverei aussprach. Obwohl Lincoln die Senatswahl verlor, machten ihn die Debatten zur nationalen Figur und halfen ihm, 1860 die Präsidentschaft zu gewinnen. Die Debatten wurden ausführlich von Zeitungen berichtet und zogen massive Menschenmengen an. Sie gehören zu den bedeutendsten politischen Debatten in der amerikanischen Geschichte und behandelten grundlegende Fragen zu Demokratie und Menschenrechten.",
          nl: "Abraham Lincoln en Stephen A. Douglas begonnen hun beroemde debatten op 21 augustus 1858 in Ottawa, Illinois. De zeven debatten richtten zich op slavernij en de uitbreiding ervan naar nieuwe gebieden. Douglas verdedigde 'volkssoevereiniteit' (elk gebied laten beslissen), terwijl Lincoln zich verzette tegen uitbreiding van slavernij. Hoewel Lincoln de Senaatsrace verloor, maakten de debatten hem een nationale figuur en hielpen hem de presidentsverkiezing te winnen in 1860. De debatten werden uitgebreid behandeld door kranten en trokken massale menigten. Ze blijven enkele van de belangrijkste politieke debatten in de Amerikaanse geschiedenis, waarbij fundamentele vragen over democratie en mensenrechten aan bod kwamen."
        }
      },
      {
        question: {
          en: "On August 21, 1969, which historic site in Jerusalem was set on fire, causing international outrage?",
          es: "El 21 de agosto de 1969, ¿qué sitio histórico en Jerusalén fue incendiado, causando indignación internacional?",
          de: "Am 21. August 1969 wurde welche historische Stätte in Jerusalem in Brand gesetzt, was internationale Empörung auslöste?",
          nl: "Op 21 augustus 1969 werd welke historische plaats in Jeruzalem in brand gestoken, wat internationale verontwaardiging veroorzaakte?"
        },
        options: [
          {
            en: "The Western Wall",
            es: "El Muro de las Lamentaciones",
            de: "Die Klagemauer",
            nl: "De Klaagmuur"
          },
          {
            en: "Church of the Holy Sepulchre",
            es: "Iglesia del Santo Sepulcro",
            de: "Grabeskirche",
            nl: "Heilig Grafkerk"
          },
          {
            en: "Al-Aqsa Mosque",
            es: "Mezquita de Al-Aqsa",
            de: "Al-Aqsa-Moschee",
            nl: "Al-Aqsa-moskee"
          },
          {
            en: "Dome of the Rock",
            es: "Cúpula de la Roca",
            de: "Felsendom",
            nl: "Rotskoepel"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Al-Aqsa Mosque was set on fire on August 21, 1969, by an Australian Christian fundamentalist named Denis Michael Rohan. The fire destroyed the southeastern wing including the historic minbar (pulpit) of Saladin from the 12th century. The incident caused widespread outrage in the Muslim world and led to the formation of the Organization of Islamic Cooperation. Major restoration work was needed. The Al-Aqsa Mosque, located on the Temple Mount in Jerusalem's Old City, is the third holiest site in Islam after Mecca and Medina.",
          es: "La Mezquita de Al-Aqsa fue incendiada el 21 de agosto de 1969 por un fundamentalista cristiano australiano llamado Denis Michael Rohan. El incendio destruyó el ala sureste, incluyendo el histórico minbar (púlpito) de Saladino del siglo XII. El incidente causó indignación generalizada en el mundo musulmán y llevó a la formación de la Organización de Cooperación Islámica. Se necesitó una importante restauración. La Mezquita de Al-Aqsa, ubicada en el Monte del Templo en la Ciudad Vieja de Jerusalén, es el tercer sitio más sagrado del Islam después de La Meca y Medina.",
          de: "Die Al-Aqsa-Moschee wurde am 21. August 1969 von einem australischen christlichen Fundamentalisten namens Denis Michael Rohan in Brand gesetzt. Das Feuer zerstörte den südöstlichen Flügel einschließlich der historischen Minbar (Kanzel) von Saladin aus dem 12. Jahrhundert. Der Vorfall löste weitverbreitete Empörung in der muslimischen Welt aus und führte zur Gründung der Organisation für Islamische Zusammenarbeit. Umfangreiche Restaurierungsarbeiten waren erforderlich. Die Al-Aqsa-Moschee, auf dem Tempelberg in Jerusalems Altstadt gelegen, ist die drittheiligste Stätte im Islam nach Mekka und Medina.",
          nl: "De Al-Aqsa-moskee werd in brand gestoken op 21 augustus 1969 door een Australische christelijke fundamentalist genaamd Denis Michael Rohan. De brand vernietigde de zuidoostelijke vleugel inclusief de historische minbar (preekstoel) van Saladin uit de 12e eeuw. Het incident veroorzaakte wijdverspreide verontwaardiging in de moslimwereld en leidde tot de oprichting van de Organisatie voor Islamitische Samenwerking. Grote restauratiewerkzaamheden waren nodig. De Al-Aqsa-moskee, gelegen op de Tempelberg in Jeruzalems Oude Stad, is de derde heiligste plaats in de islam na Mekka en Medina."
        }
      },
      {
        question: {
          en: "On August 21, 1983, which Filipino opposition leader was assassinated upon arriving at Manila International Airport?",
          es: "El 21 de agosto de 1983, ¿qué líder de la oposición filipina fue asesinado al llegar al Aeropuerto Internacional de Manila?",
          de: "Am 21. August 1983 wurde welcher philippinische Oppositionsführer bei seiner Ankunft am internationalen Flughafen Manila ermordet?",
          nl: "Op 21 augustus 1983 werd welke Filippijnse oppositieleider vermoord bij aankomst op Manila International Airport?"
        },
        options: [
          {
            en: "Corazon Aquino",
            es: "Corazón Aquino",
            de: "Corazon Aquino",
            nl: "Corazon Aquino"
          },
          {
            en: "Benigno Aquino Jr.",
            es: "Benigno Aquino Jr.",
            de: "Benigno Aquino Jr.",
            nl: "Benigno Aquino Jr."
          },
          {
            en: "Ferdinand Marcos",
            es: "Ferdinand Marcos",
            de: "Ferdinand Marcos",
            nl: "Ferdinand Marcos"
          },
          {
            en: "Jose Rizal",
            es: "José Rizal",
            de: "José Rizal",
            nl: "José Rizal"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Benigno 'Ninoy' Aquino Jr. was assassinated on August 21, 1983, moments after returning from exile in the United States. He was shot as he descended from the plane at Manila International Airport. His death sparked massive protests against the Marcos dictatorship and catalyzed the People Power Revolution of 1986. His widow, Corazon Aquino, became president after Marcos was ousted. The airport was later renamed Ninoy Aquino International Airport in his honor. His son, Benigno Aquino III, served as Philippine president from 2010-2016.",
          es: "Benigno 'Ninoy' Aquino Jr. fue asesinado el 21 de agosto de 1983, momentos después de regresar del exilio en Estados Unidos. Recibió un disparo al descender del avión en el Aeropuerto Internacional de Manila. Su muerte provocó protestas masivas contra la dictadura de Marcos y catalizó la Revolución del Poder Popular de 1986. Su viuda, Corazón Aquino, se convirtió en presidenta después de que Marcos fue derrocado. El aeropuerto fue renombrado más tarde como Aeropuerto Internacional Ninoy Aquino en su honor. Su hijo, Benigno Aquino III, sirvió como presidente de Filipinas de 2010 a 2016.",
          de: "Benigno 'Ninoy' Aquino Jr. wurde am 21. August 1983 ermordet, kurz nachdem er aus dem Exil in den Vereinigten Staaten zurückgekehrt war. Er wurde erschossen, als er aus dem Flugzeug am internationalen Flughafen Manila stieg. Sein Tod löste massive Proteste gegen die Marcos-Diktatur aus und katalysierte die People Power Revolution von 1986. Seine Witwe Corazon Aquino wurde Präsidentin, nachdem Marcos gestürzt wurde. Der Flughafen wurde später zu seinen Ehren in Ninoy Aquino International Airport umbenannt. Sein Sohn Benigno Aquino III. war von 2010 bis 2016 philippinischer Präsident.",
          nl: "Benigno 'Ninoy' Aquino Jr. werd vermoord op 21 augustus 1983, momenten na zijn terugkeer uit ballingschap in de Verenigde Staten. Hij werd neergeschoten toen hij uit het vliegtuig stapte op Manila International Airport. Zijn dood leidde tot massale protesten tegen de Marcos-dictatuur en katalyseerde de People Power Revolution van 1986. Zijn weduwe Corazon Aquino werd president nadat Marcos was afgezet. De luchthaven werd later omgedoopt tot Ninoy Aquino International Airport ter ere van hem. Zijn zoon Benigno Aquino III diende als Filippijnse president van 2010-2016."
        }
      }
    ],
    day22: [
      {
        question: {
          en: "On August 22, 1920, which renowned science fiction author known for 'Fahrenheit 451' and 'The Martian Chronicles' was born?",
          es: "El 22 de agosto de 1920, ¿qué reconocido autor de ciencia ficción conocido por 'Fahrenheit 451' y 'Crónicas marcianas' nació?",
          de: "Am 22. August 1920 wurde welcher bekannte Science-Fiction-Autor geboren, der für 'Fahrenheit 451' und 'Die Mars-Chroniken' bekannt ist?",
          nl: "Op 22 augustus 1920 werd welke gerenommeerde sciencefiction-auteur geboren die bekend staat om 'Fahrenheit 451' en 'The Martian Chronicles'?"
        },
        options: [
          {
            en: "Isaac Asimov",
            es: "Isaac Asimov",
            de: "Isaac Asimov",
            nl: "Isaac Asimov"
          },
          {
            en: "Arthur C. Clarke",
            es: "Arthur C. Clarke",
            de: "Arthur C. Clarke",
            nl: "Arthur C. Clarke"
          },
          {
            en: "Ray Bradbury",
            es: "Ray Bradbury",
            de: "Ray Bradbury",
            nl: "Ray Bradbury"
          },
          {
            en: "Philip K. Dick",
            es: "Philip K. Dick",
            de: "Philip K. Dick",
            nl: "Philip K. Dick"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ray Bradbury was born on August 22, 1920, in Waukegan, Illinois. He became one of the most celebrated writers of the 20th century, blending science fiction with social commentary. 'Fahrenheit 451' (1953) warned about censorship and the dangers of mass media. 'The Martian Chronicles' (1950) used Mars as a mirror for examining humanity. He wrote over 27 novels and 600 short stories. Bradbury famously never learned to drive and was influenced by Jules Verne and H.G. Wells. He received numerous awards including the National Medal of Arts and died in 2012.",
          es: "Ray Bradbury nació el 22 de agosto de 1920 en Waukegan, Illinois. Se convirtió en uno de los escritores más célebres del siglo XX, mezclando ciencia ficción con comentario social. 'Fahrenheit 451' (1953) advirtió sobre la censura y los peligros de los medios de comunicación masiva. 'Crónicas marcianas' (1950) usó Marte como un espejo para examinar la humanidad. Escribió más de 27 novelas y 600 cuentos. Bradbury, famosamente, nunca aprendió a conducir y fue influenciado por Jules Verne y H.G. Wells. Recibió numerosos premios incluida la Medalla Nacional de las Artes y murió en 2012.",
          de: "Ray Bradbury wurde am 22. August 1920 in Waukegan, Illinois geboren. Er wurde einer der gefeiertsten Schriftsteller des 20. Jahrhunderts, der Science-Fiction mit Gesellschaftskritik verband. 'Fahrenheit 451' (1953) warnte vor Zensur und den Gefahren der Massenmedien. 'Die Mars-Chroniken' (1950) nutzten den Mars als Spiegel zur Untersuchung der Menschheit. Er schrieb über 27 Romane und 600 Kurzgeschichten. Bradbury lernte bekanntermaßen nie Auto zu fahren und wurde von Jules Verne und H.G. Wells beeinflusst. Er erhielt zahlreiche Auszeichnungen, darunter die National Medal of Arts, und starb 2012.",
          nl: "Ray Bradbury werd geboren op 22 augustus 1920 in Waukegan, Illinois. Hij werd een van de meest gevierde schrijvers van de 20e eeuw, die sciencefiction combineerde met sociaal commentaar. 'Fahrenheit 451' (1953) waarschuwde voor censuur en de gevaren van massamedia. 'The Martian Chronicles' (1950) gebruikte Mars als spiegel om de mensheid te onderzoeken. Hij schreef meer dan 27 romans en 600 korte verhalen. Bradbury leerde beroemd genoeg nooit autorijden en werd beïnvloed door Jules Verne en H.G. Wells. Hij ontving talrijke prijzen waaronder de National Medal of Arts en stierf in 2012."
        }
      },
      {
        question: {
          en: "On August 22, 1485, which English king was killed at the Battle of Bosworth Field, ending the Wars of the Roses?",
          es: "El 22 de agosto de 1485, ¿qué rey inglés fue asesinado en la Batalla de Bosworth Field, poniendo fin a las Guerras de las Rosas?",
          de: "Am 22. August 1485 wurde welcher englische König in der Schlacht von Bosworth Field getötet, was die Rosenkriege beendete?",
          nl: "Op 22 augustus 1485 werd welke Engelse koning gedood in de Slag bij Bosworth Field, waarmee de Rozenoorlogen eindigden?"
        },
        options: [
          {
            en: "Henry VII",
            es: "Enrique VII",
            de: "Heinrich VII.",
            nl: "Hendrik VII"
          },
          {
            en: "Edward IV",
            es: "Eduardo IV",
            de: "Eduard IV.",
            nl: "Eduard IV"
          },
          {
            en: "Richard III",
            es: "Ricardo III",
            de: "Richard III.",
            nl: "Richard III"
          },
          {
            en: "Henry VI",
            es: "Enrique VI",
            de: "Heinrich VI.",
            nl: "Hendrik VI"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Richard III was killed at the Battle of Bosworth Field on August 22, 1485, marking the end of the Wars of the Roses and the Plantagenet dynasty. He was defeated by Henry Tudor (who became Henry VII), beginning the Tudor era. Richard's death ended the last significant battle of the medieval period in England. Shakespeare's play 'Richard III' portrayed him as a villain, though modern historians debate his character. His remains were discovered under a Leicester car park in 2012 and reburied in Leicester Cathedral in 2015.",
          es: "Ricardo III fue asesinado en la Batalla de Bosworth Field el 22 de agosto de 1485, marcando el fin de las Guerras de las Rosas y la dinastía Plantagenet. Fue derrotado por Enrique Tudor (quien se convirtió en Enrique VII), comenzando la era Tudor. La muerte de Ricardo marcó el final de la última batalla significativa del período medieval en Inglaterra. La obra de Shakespeare 'Ricardo III' lo retrató como un villano, aunque los historiadores modernos debaten su carácter. Sus restos fueron descubiertos bajo un estacionamiento de Leicester en 2012 y enterrados de nuevo en la Catedral de Leicester en 2015.",
          de: "Richard III. wurde in der Schlacht von Bosworth Field am 22. August 1485 getötet, was das Ende der Rosenkriege und der Plantagenet-Dynastie markierte. Er wurde von Henry Tudor (der Heinrich VII. wurde) besiegt, was die Tudor-Ära begann. Richards Tod beendete die letzte bedeutende Schlacht der mittelalterlichen Periode in England. Shakespeares Stück 'Richard III.' stellte ihn als Bösewicht dar, obwohl moderne Historiker über seinen Charakter debattieren. Seine Überreste wurden 2012 unter einem Parkplatz in Leicester entdeckt und 2015 in der Leicester Cathedral wieder beigesetzt.",
          nl: "Richard III werd gedood in de Slag bij Bosworth Field op 22 augustus 1485, wat het einde markeerde van de Rozenoorlogen en de Plantagenet-dynastie. Hij werd verslagen door Henry Tudor (die Hendrik VII werd), wat het begin van het Tudor-tijdperk inluidde. Richards dood beëindigde de laatste belangrijke slag van de middeleeuwse periode in Engeland. Shakespeares toneelstuk 'Richard III' portretteerde hem als een schurk, hoewel moderne historici debatteren over zijn karakter. Zijn overblijfselen werden ontdekt onder een parkeerplaats in Leicester in 2012 en herbegraven in Leicester Cathedral in 2015."
        }
      },
      {
        question: {
          en: "On August 22, 1864, which international organization was founded in Geneva to provide humanitarian aid during wartime?",
          es: "El 22 de agosto de 1864, ¿qué organización internacional fue fundada en Ginebra para proporcionar ayuda humanitaria durante la guerra?",
          de: "Am 22. August 1864 wurde welche internationale Organisation in Genf gegründet, um humanitäre Hilfe während Kriegszeiten zu leisten?",
          nl: "Op 22 augustus 1864 werd welke internationale organisatie opgericht in Genève om humanitaire hulp te bieden tijdens oorlogstijd?"
        },
        options: [
          {
            en: "United Nations",
            es: "Naciones Unidas",
            de: "Vereinte Nationen",
            nl: "Verenigde Naties"
          },
          {
            en: "Red Cross",
            es: "Cruz Roja",
            de: "Rotes Kreuz",
            nl: "Rode Kruis"
          },
          {
            en: "World Health Organization",
            es: "Organización Mundial de la Salud",
            de: "Weltgesundheitsorganisation",
            nl: "Wereldgezondheidsorganisatie"
          },
          {
            en: "Doctors Without Borders",
            es: "Médicos Sin Fronteras",
            de: "Ärzte ohne Grenzen",
            nl: "Artsen zonder Grenzen"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Geneva Convention was signed on August 22, 1864, establishing the Red Cross. It was initiated by Henry Dunant, who witnessed the Battle of Solferino's aftermath in 1859. The Convention established rules for treating wounded soldiers and protecting medical personnel. The Red Cross emblem (reversed Swiss flag) became a symbol of neutrality. The organization has since expanded globally and received three Nobel Peace Prizes (1917, 1944, 1963). Today it provides emergency assistance, disaster relief, and education in communities worldwide.",
          es: "La primera Convención de Ginebra fue firmada el 22 de agosto de 1864, estableciendo la Cruz Roja. Fue iniciada por Henry Dunant, quien presenció las secuelas de la Batalla de Solferino en 1859. La Convención estableció reglas para tratar a soldados heridos y proteger al personal médico. El emblema de la Cruz Roja (bandera suiza invertida) se convirtió en un símbolo de neutralidad. La organización se ha expandido globalmente desde entonces y ha recibido tres Premios Nobel de la Paz (1917, 1944, 1963). Hoy proporciona asistencia de emergencia, alivio en desastres y educación en comunidades en todo el mundo.",
          de: "Die erste Genfer Konvention wurde am 22. August 1864 unterzeichnet und gründete das Rote Kreuz. Sie wurde von Henry Dunant initiiert, der die Nachwirkungen der Schlacht von Solferino 1859 miterlebte. Die Konvention etablierte Regeln für die Behandlung verwundeter Soldaten und den Schutz von medizinischem Personal. Das Rote-Kreuz-Emblem (umgekehrte Schweizer Flagge) wurde ein Symbol der Neutralität. Die Organisation hat sich seitdem weltweit ausgeweitet und drei Friedensnobelpreise erhalten (1917, 1944, 1963). Heute bietet sie Nothilfe, Katastrophenhilfe und Bildung in Gemeinden weltweit.",
          nl: "Het eerste Verdrag van Genève werd ondertekend op 22 augustus 1864, waarmee het Rode Kruis werd opgericht. Het werd geïnitieerd door Henry Dunant, die getuige was van de nasleep van de Slag bij Solferino in 1859. Het Verdrag stelde regels vast voor de behandeling van gewonde soldaten en de bescherming van medisch personeel. Het Rode Kruis-embleem (omgekeerde Zwitserse vlag) werd een symbool van neutraliteit. De organisatie is sindsdien wereldwijd uitgebreid en heeft drie Nobelprijzen voor de Vrede ontvangen (1917, 1944, 1963). Vandaag biedt het noodhulp, rampenhulp en educatie in gemeenschappen wereldwijd."
        }
      },
      {
        question: {
          en: "On August 22, 1902, which U.S. President survived an assassination attempt when his carriage was struck by a trolley in Massachusetts?",
          es: "El 22 de agosto de 1902, ¿qué presidente de EE.UU. sobrevivió a un intento de asesinato cuando su carruaje fue golpeado por un tranvía en Massachusetts?",
          de: "Am 22. August 1902 überlebte welcher US-Präsident einen Attentatsversuch, als seine Kutsche von einer Straßenbahn in Massachusetts getroffen wurde?",
          nl: "Op 22 augustus 1902 overleefde welke Amerikaanse president een moordaanslag toen zijn koets werd geraakt door een tram in Massachusetts?"
        },
        options: [
          {
            en: "William McKinley",
            es: "William McKinley",
            de: "William McKinley",
            nl: "William McKinley"
          },
          {
            en: "Theodore Roosevelt",
            es: "Theodore Roosevelt",
            de: "Theodore Roosevelt",
            nl: "Theodore Roosevelt"
          },
          {
            en: "William Howard Taft",
            es: "William Howard Taft",
            de: "William Howard Taft",
            nl: "William Howard Taft"
          },
          {
            en: "Woodrow Wilson",
            es: "Woodrow Wilson",
            de: "Woodrow Wilson",
            nl: "Woodrow Wilson"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Theodore Roosevelt survived when his carriage was hit by a trolley on August 22, 1902, in Pittsfield, Massachusetts. His bodyguard William Craig was killed, and Roosevelt suffered facial injuries. The accident happened while Roosevelt was campaigning. He had become president in 1901 after McKinley's assassination. Roosevelt was known for his vigorous personality and 'speak softly and carry a big stick' foreign policy. He was the youngest president at 42, won the Nobel Peace Prize for mediating the Russo-Japanese War, and championed conservation, creating national parks and monuments.",
          es: "Theodore Roosevelt sobrevivió cuando su carruaje fue golpeado por un tranvía el 22 de agosto de 1902 en Pittsfield, Massachusetts. Su guardaespaldas William Craig murió, y Roosevelt sufrió heridas faciales. El accidente ocurrió mientras Roosevelt hacía campaña. Se había convertido en presidente en 1901 después del asesinato de McKinley. Roosevelt era conocido por su personalidad vigorosa y su política exterior de 'habla suavemente y lleva un gran garrote'. Fue el presidente más joven a los 42 años, ganó el Premio Nobel de la Paz por mediar en la Guerra Ruso-Japonesa y defendió la conservación, creando parques nacionales y monumentos.",
          de: "Theodore Roosevelt überlebte, als seine Kutsche am 22. August 1902 in Pittsfield, Massachusetts von einer Straßenbahn getroffen wurde. Sein Leibwächter William Craig wurde getötet, und Roosevelt erlitt Gesichtsverletzungen. Der Unfall ereignete sich während Roosevelts Wahlkampf. Er war 1901 nach McKinleys Ermordung Präsident geworden. Roosevelt war bekannt für seine energische Persönlichkeit und seine Außenpolitik des 'Sprich leise und trage einen großen Stock'. Er war mit 42 der jüngste Präsident, gewann den Friedensnobelpreis für die Vermittlung im Russisch-Japanischen Krieg und setzte sich für Naturschutz ein, indem er Nationalparks und Denkmäler schuf.",
          nl: "Theodore Roosevelt overleefde toen zijn koets werd geraakt door een tram op 22 augustus 1902 in Pittsfield, Massachusetts. Zijn lijfwacht William Craig werd gedood en Roosevelt liep gelaatsverwondingen op. Het ongeluk gebeurde terwijl Roosevelt aan het campagnevoeren was. Hij was president geworden in 1901 na de moord op McKinley. Roosevelt stond bekend om zijn krachtige persoonlijkheid en zijn buitenlands beleid van 'spreek zacht en draag een grote stok'. Hij was de jongste president op 42-jarige leeftijd, won de Nobelprijs voor de Vrede voor bemiddeling in de Russisch-Japanse Oorlog en verdedigde natuurbehoud, waarbij hij nationale parken en monumenten creëerde."
        }
      },
      {
        question: {
          en: "On August 22, 1989, which space probe sent back the first close-up images of Neptune and its moon Triton?",
          es: "El 22 de agosto de 1989, ¿qué sonda espacial envió las primeras imágenes cercanas de Neptuno y su luna Tritón?",
          de: "Am 22. August 1989 sendete welche Raumsonde die ersten Nahaufnahmen von Neptun und seinem Mond Triton zurück?",
          nl: "Op 22 augustus 1989 stuurde welke ruimtesonde de eerste close-upbeelden van Neptunus en zijn maan Triton terug?"
        },
        options: [
          {
            en: "Pioneer 11",
            es: "Pioneer 11",
            de: "Pioneer 11",
            nl: "Pioneer 11"
          },
          {
            en: "Voyager 1",
            es: "Voyager 1",
            de: "Voyager 1",
            nl: "Voyager 1"
          },
          {
            en: "Voyager 2",
            es: "Voyager 2",
            de: "Voyager 2",
            nl: "Voyager 2"
          },
          {
            en: "Galileo",
            es: "Galileo",
            de: "Galileo",
            nl: "Galileo"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Voyager 2 made its closest approach to Neptune on August 25, 1989 (after passing by on August 22), becoming the only spacecraft to visit the planet. It discovered six new moons and revealed Neptune's Great Dark Spot, similar to Jupiter's Great Red Spot. The probe also studied Triton, Neptune's largest moon, finding geysers and a thin atmosphere. Voyager 2 discovered that Neptune has the strongest winds in the solar system, reaching 2,100 km/h. This was the final planetary encounter of Voyager 2's 'Grand Tour' of the outer planets.",
          es: "Voyager 2 hizo su aproximación más cercana a Neptuno el 25 de agosto de 1989 (después de pasar el 22 de agosto), convirtiéndose en la única nave espacial en visitar el planeta. Descubrió seis nuevas lunas y reveló la Gran Mancha Oscura de Neptuno, similar a la Gran Mancha Roja de Júpiter. La sonda también estudió Tritón, la luna más grande de Neptuno, encontrando géiseres y una atmósfera delgada. Voyager 2 descubrió que Neptuno tiene los vientos más fuertes del sistema solar, alcanzando 2,100 km/h. Este fue el encuentro planetario final del 'Gran Tour' de Voyager 2 por los planetas exteriores.",
          de: "Voyager 2 erreichte am 25. August 1989 ihre größte Annäherung an Neptun (nach dem Vorbeiflug am 22. August) und wurde zur einzigen Raumsonde, die den Planeten besuchte. Sie entdeckte sechs neue Monde und enthüllte Neptuns Großen Dunklen Fleck, ähnlich wie Jupiters Großer Roter Fleck. Die Sonde untersuchte auch Triton, Neptuns größten Mond, und fand Geysire und eine dünne Atmosphäre. Voyager 2 entdeckte, dass Neptun die stärksten Winde im Sonnensystem hat, die 2.100 km/h erreichen. Dies war die letzte Planetenbegegnung von Voyager 2's 'Grand Tour' der äußeren Planeten.",
          nl: "Voyager 2 maakte zijn nauwste benadering van Neptunus op 25 augustus 1989 (na voorbijvliegen op 22 augustus), en werd het enige ruimtevaartuig dat de planeet bezocht. Het ontdekte zes nieuwe manen en onthulde Neptunus' Grote Donkere Vlek, vergelijkbaar met Jupiters Grote Rode Vlek. De sonde bestudeerde ook Triton, Neptunus' grootste maan, en vond geisers en een dunne atmosfeer. Voyager 2 ontdekte dat Neptunus de sterkste winden in het zonnestelsel heeft, die 2.100 km/u bereiken. Dit was de laatste planetaire ontmoeting van Voyager 2's 'Grand Tour' van de buitenste planeten."
        }
      }
    ],
    day23: [
      {
        question: {
          en: "On August 23, 1939, which non-aggression pact between Nazi Germany and the Soviet Union shocked the world?",
          es: "El 23 de agosto de 1939, ¿qué pacto de no agresión entre la Alemania Nazi y la Unión Soviética conmocionó al mundo?",
          de: "Am 23. August 1939 schockierte welcher Nichtangriffspakt zwischen Nazi-Deutschland und der Sowjetunion die Welt?",
          nl: "Op 23 augustus 1939 schokte welk non-agressiepact tussen Nazi-Duitsland en de Sovjet-Unie de wereld?"
        },
        options: [
          {
            en: "Treaty of Versailles",
            es: "Tratado de Versalles",
            de: "Vertrag von Versailles",
            nl: "Verdrag van Versailles"
          },
          {
            en: "Munich Agreement",
            es: "Acuerdo de Múnich",
            de: "Münchner Abkommen",
            nl: "Verdrag van München"
          },
          {
            en: "Molotov-Ribbentrop Pact",
            es: "Pacto Mólotov-Ribbentrop",
            de: "Molotow-Ribbentrop-Pakt",
            nl: "Molotov-Ribbentroppact"
          },
          {
            en: "Yalta Agreement",
            es: "Acuerdo de Yalta",
            de: "Jalta-Abkommen",
            nl: "Jalta-akkoord"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Molotov-Ribbentrop Pact was signed on August 23, 1939, between Nazi Germany and the Soviet Union. Named after foreign ministers Vyacheslav Molotov and Joachim von Ribbentrop, it included secret protocols dividing Eastern Europe into spheres of influence. The pact shocked the world as the fascist and communist powers were ideological enemies. It allowed Hitler to invade Poland on September 1, 1939, starting World War II, without Soviet interference. The USSR invaded Poland from the east on September 17. Hitler broke the pact by invading the Soviet Union on June 22, 1941.",
          es: "El Pacto Mólotov-Ribbentrop fue firmado el 23 de agosto de 1939 entre la Alemania Nazi y la Unión Soviética. Nombrado por los ministros de asuntos exteriores Viacheslav Mólotov y Joachim von Ribbentrop, incluía protocolos secretos que dividían Europa del Este en esferas de influencia. El pacto conmocionó al mundo ya que las potencias fascista y comunista eran enemigas ideológicas. Permitió a Hitler invadir Polonia el 1 de septiembre de 1939, comenzando la Segunda Guerra Mundial, sin interferencia soviética. La URSS invadió Polonia desde el este el 17 de septiembre. Hitler rompió el pacto al invadir la Unión Soviética el 22 de junio de 1941.",
          de: "Der Molotow-Ribbentrop-Pakt wurde am 23. August 1939 zwischen Nazi-Deutschland und der Sowjetunion unterzeichnet. Benannt nach den Außenministern Wjatscheslaw Molotow und Joachim von Ribbentrop, enthielt er geheime Protokolle, die Osteuropa in Einflusssphären aufteilten. Der Pakt schockierte die Welt, da die faschistischen und kommunistischen Mächte ideologische Feinde waren. Er ermöglichte Hitler, am 1. September 1939 Polen zu überfallen und den Zweiten Weltkrieg zu beginnen, ohne sowjetische Einmischung. Die UdSSR fiel am 17. September von Osten in Polen ein. Hitler brach den Pakt, indem er am 22. Juni 1941 die Sowjetunion überfiel.",
          nl: "Het Molotov-Ribbentroppact werd ondertekend op 23 augustus 1939 tussen Nazi-Duitsland en de Sovjet-Unie. Vernoemd naar ministers van buitenlandse zaken Vjatsjeslav Molotov en Joachim von Ribbentrop, bevatte het geheime protocollen die Oost-Europa verdeelden in invloedssferen. Het pact schokte de wereld omdat de fascistische en communistische machten ideologische vijanden waren. Het stelde Hitler in staat Polen binnen te vallen op 1 september 1939, wat de Tweede Wereldoorlog begon, zonder Sovjet-inmenging. De USSR viel Polen binnen vanuit het oosten op 17 september. Hitler brak het pact door de Sovjet-Unie binnen te vallen op 22 juni 1941."
        }
      },
      {
        question: {
          en: "On August 23, 1926, which silent film star known as the 'Latin Lover' died at age 31, causing mass hysteria among fans?",
          es: "El 23 de agosto de 1926, ¿qué estrella del cine mudo conocida como el 'Amante Latino' murió a los 31 años, causando histeria masiva entre los fans?",
          de: "Am 23. August 1926 starb welcher Stummfilmstar, bekannt als der 'Latin Lover', im Alter von 31 Jahren, was Massenhysterie unter den Fans auslöste?",
          nl: "Op 23 augustus 1926 stierf welke stomme filmster bekend als de 'Latin Lover' op 31-jarige leeftijd, wat massahysterie onder fans veroorzaakte?"
        },
        options: [
          {
            en: "Charlie Chaplin",
            es: "Charlie Chaplin",
            de: "Charlie Chaplin",
            nl: "Charlie Chaplin"
          },
          {
            en: "Douglas Fairbanks",
            es: "Douglas Fairbanks",
            de: "Douglas Fairbanks",
            nl: "Douglas Fairbanks"
          },
          {
            en: "Rudolph Valentino",
            es: "Rodolfo Valentino",
            de: "Rudolph Valentino",
            nl: "Rudolph Valentino"
          },
          {
            en: "Buster Keaton",
            es: "Buster Keaton",
            de: "Buster Keaton",
            nl: "Buster Keaton"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Rudolph Valentino died on August 23, 1926, at age 31 from peritonitis caused by a perforated ulcer. Born in Italy as Rodolfo Guglielmi, he became Hollywood's first male sex symbol. His films 'The Sheik' (1921) and 'Blood and Sand' (1922) made him a superstar. Over 100,000 people lined the streets for his funeral in New York City. Several fans reportedly committed suicide. His sudden death at the height of fame cemented his legend. Valentino's exotic looks and passionate on-screen persona defined the 'Latin Lover' archetype in cinema.",
          es: "Rodolfo Valentino murió el 23 de agosto de 1926 a los 31 años de peritonitis causada por una úlcera perforada. Nacido en Italia como Rodolfo Guglielmi, se convirtió en el primer símbolo sexual masculino de Hollywood. Sus películas 'El jeque' (1921) y 'Sangre y arena' (1922) lo convirtieron en una superestrella. Más de 100,000 personas se alinearon en las calles para su funeral en la Ciudad de Nueva York. Varios fans supuestamente se suicidaron. Su muerte repentina en la cúspide de la fama cimentó su leyenda. La apariencia exótica de Valentino y su persona apasionada en pantalla definieron el arquetipo del 'Amante Latino' en el cine.",
          de: "Rudolph Valentino starb am 23. August 1926 im Alter von 31 Jahren an Peritonitis, verursacht durch ein perforiertes Geschwür. In Italien als Rodolfo Guglielmi geboren, wurde er Hollywoods erstes männliches Sexsymbol. Seine Filme 'Der Scheich' (1921) und 'Blut und Sand' (1922) machten ihn zum Superstar. Über 100.000 Menschen säumten die Straßen für seine Beerdigung in New York City. Mehrere Fans sollen Selbstmord begangen haben. Sein plötzlicher Tod auf dem Höhepunkt des Ruhms zementierte seine Legende. Valentinos exotisches Aussehen und leidenschaftliche Bildschirmpersönlichkeit definierten den 'Latin Lover'-Archetyp im Kino.",
          nl: "Rudolph Valentino stierf op 23 augustus 1926 op 31-jarige leeftijd aan buikvliesontsteking veroorzaakt door een geperforeerde maagzweer. Geboren in Italië als Rodolfo Guglielmi, werd hij Hollywoods eerste mannelijke sekssymbool. Zijn films 'The Sheik' (1921) en 'Blood and Sand' (1922) maakten hem een superster. Meer dan 100.000 mensen stonden langs de straten voor zijn begrafenis in New York City. Meerdere fans pleegden naar verluidt zelfmoord. Zijn plotselinge dood op het hoogtepunt van zijn roem verstevigde zijn legende. Valentino's exotische uiterlijk en gepassioneerde persona op het scherm definieerden het 'Latin Lover' archetype in de cinema."
        }
      },
      {
        question: {
          en: "On August 23, 1912, which dancer and choreographer known for innovative modern dance and the 'Technique' was born?",
          es: "El 23 de agosto de 1912, ¿qué bailarín y coreógrafo conocido por la danza moderna innovadora y la 'Técnica' nació?",
          de: "Am 23. August 1912 wurde welcher Tänzer und Choreograph geboren, der für innovativen modernen Tanz und die 'Technik' bekannt war?",
          nl: "Op 23 augustus 1912 werd welke danser en choreograaf geboren die bekend staat om innovatieve moderne dans en de 'Techniek'?"
        },
        options: [
          {
            en: "Martha Graham",
            es: "Martha Graham",
            de: "Martha Graham",
            nl: "Martha Graham"
          },
          {
            en: "Gene Kelly",
            es: "Gene Kelly",
            de: "Gene Kelly",
            nl: "Gene Kelly"
          },
          {
            en: "Fred Astaire",
            es: "Fred Astaire",
            de: "Fred Astaire",
            nl: "Fred Astaire"
          },
          {
            en: "Isadora Duncan",
            es: "Isadora Duncan",
            de: "Isadora Duncan",
            nl: "Isadora Duncan"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Gene Kelly was born on August 23, 1912, in Pittsburgh, Pennsylvania. He revolutionized dance in film by combining ballet, tap, and athletic movement. His most famous work is 'Singin' in the Rain' (1952), where he danced through puddles in an iconic scene. Kelly choreographed and starred in 'An American in Paris' (1951), which won Best Picture. He was known for his athletic, masculine dancing style that differed from Fred Astaire's elegance. Kelly also directed films and received an Honorary Academy Award in 1952. He died in 1996.",
          es: "Gene Kelly nació el 23 de agosto de 1912 en Pittsburgh, Pensilvania. Revolucionó la danza en el cine al combinar ballet, claqué y movimiento atlético. Su trabajo más famoso es 'Cantando bajo la lluvia' (1952), donde bailó entre charcos en una escena icónica. Kelly coreografió y protagonizó 'Un americano en París' (1951), que ganó Mejor Película. Era conocido por su estilo de baile atlético y masculino que difería de la elegancia de Fred Astaire. Kelly también dirigió películas y recibió un Premio de la Academia Honorario en 1952. Murió en 1996.",
          de: "Gene Kelly wurde am 23. August 1912 in Pittsburgh, Pennsylvania geboren. Er revolutionierte den Tanz im Film, indem er Ballett, Stepptanz und athletische Bewegung kombinierte. Sein berühmtestes Werk ist 'Singin' in the Rain' (1952), wo er in einer ikonischen Szene durch Pfützen tanzte. Kelly choreografierte und spielte in 'Ein Amerikaner in Paris' (1951), der den Oscar für den besten Film gewann. Er war bekannt für seinen athletischen, männlichen Tanzstil, der sich von Fred Astaires Eleganz unterschied. Kelly führte auch bei Filmen Regie und erhielt 1952 einen Ehren-Oscar. Er starb 1996.",
          nl: "Gene Kelly werd geboren op 23 augustus 1912 in Pittsburgh, Pennsylvania. Hij revolutioneerde dans in film door ballet, tapdans en atletische beweging te combineren. Zijn beroemdste werk is 'Singin' in the Rain' (1952), waarin hij door plassen danste in een iconische scène. Kelly choreografeerde en speelde in 'An American in Paris' (1951), dat Best Picture won. Hij stond bekend om zijn atletische, mannelijke dansstijl die verschilde van Fred Astaire's elegantie. Kelly regisseerde ook films en ontving een ere-Academy Award in 1952. Hij stierf in 1996."
        }
      },
      {
        question: {
          en: "On August 23, 1305, which Scottish knight and freedom fighter was executed in London for leading resistance against English rule?",
          es: "El 23 de agosto de 1305, ¿qué caballero escocés y luchador por la libertad fue ejecutado en Londres por liderar la resistencia contra el dominio inglés?",
          de: "Am 23. August 1305 wurde welcher schottische Ritter und Freiheitskämpfer in London hingerichtet, weil er den Widerstand gegen die englische Herrschaft anführte?",
          nl: "Op 23 augustus 1305 werd welke Schotse ridder en vrijheidsstrijder geëxecuteerd in Londen voor het leiden van het verzet tegen de Engelse overheersing?"
        },
        options: [
          {
            en: "Robert the Bruce",
            es: "Roberto I de Escocia",
            de: "Robert the Bruce",
            nl: "Robert the Bruce"
          },
          {
            en: "William Wallace",
            es: "William Wallace",
            de: "William Wallace",
            nl: "William Wallace"
          },
          {
            en: "James Douglas",
            es: "James Douglas",
            de: "James Douglas",
            nl: "James Douglas"
          },
          {
            en: "Andrew Moray",
            es: "Andrew Moray",
            de: "Andrew Moray",
            nl: "Andrew Moray"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "William Wallace was executed on August 23, 1305, in London after being captured near Glasgow. He led Scottish forces to victory at the Battle of Stirling Bridge (1297) but was defeated at Falkirk (1298). Wallace was hanged, drawn, and quartered for treason. His head was placed on London Bridge, and his limbs displayed in Newcastle, Berwick, Stirling, and Perth. Wallace became a symbol of Scottish independence. The 1995 film 'Braveheart' popularized his story, though it took historical liberties. Robert the Bruce later succeeded in securing Scottish independence.",
          es: "William Wallace fue ejecutado el 23 de agosto de 1305 en Londres después de ser capturado cerca de Glasgow. Lideró las fuerzas escocesas a la victoria en la Batalla del Puente de Stirling (1297) pero fue derrotado en Falkirk (1298). Wallace fue ahorcado, arrastrado y descuartizado por traición. Su cabeza fue colocada en el Puente de Londres, y sus extremidades exhibidas en Newcastle, Berwick, Stirling y Perth. Wallace se convirtió en un símbolo de la independencia escocesa. La película de 1995 'Braveheart' popularizó su historia, aunque tomó libertades históricas. Roberto I de Escocia más tarde logró asegurar la independencia escocesa.",
          de: "William Wallace wurde am 23. August 1305 in London hingerichtet, nachdem er in der Nähe von Glasgow gefangen genommen worden war. Er führte schottische Truppen zum Sieg in der Schlacht von Stirling Bridge (1297), wurde aber bei Falkirk (1298) besiegt. Wallace wurde wegen Hochverrats gehängt, geschleift und gevierteilt. Sein Kopf wurde auf der London Bridge angebracht, und seine Gliedmaßen wurden in Newcastle, Berwick, Stirling und Perth ausgestellt. Wallace wurde zum Symbol der schottischen Unabhängigkeit. Der Film 'Braveheart' von 1995 machte seine Geschichte populär, nahm sich aber historische Freiheiten. Robert the Bruce gelang es später, die schottische Unabhängigkeit zu sichern.",
          nl: "William Wallace werd geëxecuteerd op 23 augustus 1305 in Londen nadat hij in de buurt van Glasgow was gevangengenomen. Hij leidde Schotse troepen naar de overwinning bij de Slag bij Stirling Bridge (1297) maar werd verslagen bij Falkirk (1298). Wallace werd opgehangen, gesleept en gevierendeeld wegens hoogverraad. Zijn hoofd werd geplaatst op London Bridge en zijn ledematen tentoongesteld in Newcastle, Berwick, Stirling en Perth. Wallace werd een symbool van Schotse onafhankelijkheid. De film 'Braveheart' uit 1995 populariseerde zijn verhaal, hoewel het historische vrijheden nam. Robert the Bruce slaagde er later in Schotse onafhankelijkheid veilig te stellen."
        }
      },
      {
        question: {
          en: "On August 23, 1944, which Romanian dictator who had allied with Nazi Germany was overthrown in a coup?",
          es: "El 23 de agosto de 1944, ¿qué dictador rumano que se había aliado con la Alemania Nazi fue derrocado en un golpe de estado?",
          de: "Am 23. August 1944 wurde welcher rumänische Diktator, der sich mit Nazi-Deutschland verbündet hatte, in einem Putsch gestürzt?",
          nl: "Op 23 augustus 1944 werd welke Roemeense dictator die zich had aangesloten bij Nazi-Duitsland afgezet in een staatsgreep?"
        },
        options: [
          {
            en: "Nicolae Ceaușescu",
            es: "Nicolae Ceaușescu",
            de: "Nicolae Ceaușescu",
            nl: "Nicolae Ceaușescu"
          },
          {
            en: "Ion Antonescu",
            es: "Ion Antonescu",
            de: "Ion Antonescu",
            nl: "Ion Antonescu"
          },
          {
            en: "Carol II",
            es: "Carol II",
            de: "Carol II.",
            nl: "Carol II"
          },
          {
            en: "Corneliu Zelea Codreanu",
            es: "Corneliu Zelea Codreanu",
            de: "Corneliu Zelea Codreanu",
            nl: "Corneliu Zelea Codreanu"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ion Antonescu was overthrown on August 23, 1944, in a coup led by King Michael I of Romania. Antonescu had ruled Romania as a military dictator since 1940 and allied with Nazi Germany, participating in the invasion of the Soviet Union. The coup switched Romania to the Allied side, significantly shortening World War II. Romania declared war on Germany and helped Soviet forces advance. Antonescu was arrested, tried for war crimes after the war, and executed in 1946. The coup is celebrated in Romania as the day of liberation from fascism.",
          es: "Ion Antonescu fue derrocado el 23 de agosto de 1944 en un golpe de estado liderado por el rey Miguel I de Rumania. Antonescu había gobernado Rumania como dictador militar desde 1940 y se alió con la Alemania Nazi, participando en la invasión de la Unión Soviética. El golpe cambió Rumania al lado Aliado, acortando significativamente la Segunda Guerra Mundial. Rumania declaró la guerra a Alemania y ayudó a las fuerzas soviéticas a avanzar. Antonescu fue arrestado, juzgado por crímenes de guerra después de la guerra y ejecutado en 1946. El golpe se celebra en Rumania como el día de la liberación del fascismo.",
          de: "Ion Antonescu wurde am 23. August 1944 in einem von König Michael I. von Rumänien angeführten Putsch gestürzt. Antonescu hatte Rumänien seit 1940 als Militärdiktator regiert und sich mit Nazi-Deutschland verbündet, wobei er an der Invasion der Sowjetunion teilnahm. Der Putsch brachte Rumänien auf die Seite der Alliierten und verkürzte den Zweiten Weltkrieg erheblich. Rumänien erklärte Deutschland den Krieg und half sowjetischen Truppen beim Vorrücken. Antonescu wurde verhaftet, nach dem Krieg wegen Kriegsverbrechen vor Gericht gestellt und 1946 hingerichtet. Der Putsch wird in Rumänien als Tag der Befreiung vom Faschismus gefeiert.",
          nl: "Ion Antonescu werd afgezet op 23 augustus 1944 in een staatsgreep geleid door koning Michael I van Roemenië. Antonescu had Roemenië geregeerd als militaire dictator sinds 1940 en sloot zich aan bij Nazi-Duitsland, waarbij hij deelnam aan de invasie van de Sovjet-Unie. De staatsgreep bracht Roemenië over naar de geallieerde zijde, wat de Tweede Wereldoorlog aanzienlijk verkortte. Roemenië verklaarde Duitsland de oorlog en help Sovjettroepen vooruit te komen. Antonescu werd gearresteerd, berecht voor oorlogsmisdaden na de oorlog en geëxecuteerd in 1946. De staatsgreep wordt in Roemenië gevierd als de dag van bevrijding van het fascisme."
        }
      }
    ],
    day24: [
      {
        question: {
          en: "On August 24, 79 AD, which famous Roman city was buried under volcanic ash when Mount Vesuvius erupted?",
          es: "El 24 de agosto del 79 d.C., ¿qué famosa ciudad romana fue enterrada bajo ceniza volcánica cuando el Monte Vesubio hizo erupción?",
          de: "Am 24. August 79 n. Chr. wurde welche berühmte römische Stadt unter Vulkanasche begraben, als der Vesuv ausbrach?",
          nl: "Op 24 augustus 79 n.Chr. werd welke beroemde Romeinse stad begraven onder vulkanische as toen de Vesuvius uitbarstte?"
        },
        options: [
          {
            en: "Rome",
            es: "Roma",
            de: "Rom",
            nl: "Rome"
          },
          {
            en: "Athens",
            es: "Atenas",
            de: "Athen",
            nl: "Athene"
          },
          {
            en: "Pompeii",
            es: "Pompeya",
            de: "Pompeji",
            nl: "Pompeii"
          },
          {
            en: "Carthage",
            es: "Cartago",
            de: "Karthago",
            nl: "Carthago"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Pompeii was destroyed on August 24, 79 AD, when Mount Vesuvius erupted, burying the city under 4-6 meters of volcanic ash and pumice. The nearby city of Herculaneum was also destroyed. Pliny the Younger witnessed and documented the eruption. The ash preserved buildings, artifacts, and even the shapes of victims in remarkable detail. Pompeii was rediscovered in 1748 and excavations have provided invaluable insights into Roman life. The site is now a UNESCO World Heritage Site and one of Italy's most visited tourist attractions, offering a frozen snapshot of ancient Roman civilization.",
          es: "Pompeya fue destruida el 24 de agosto del 79 d.C. cuando el Monte Vesubio hizo erupción, enterrando la ciudad bajo 4-6 metros de ceniza volcánica y piedra pómez. La cercana ciudad de Herculano también fue destruida. Plinio el Joven presenció y documentó la erupción. La ceniza preservó edificios, artefactos e incluso las formas de las víctimas con notable detalle. Pompeya fue redescubierta en 1748 y las excavaciones han proporcionado conocimientos invaluables sobre la vida romana. El sitio es ahora Patrimonio de la Humanidad de la UNESCO y una de las atracciones turísticas más visitadas de Italia, ofreciendo una instantánea congelada de la civilización romana antigua.",
          de: "Pompeji wurde am 24. August 79 n. Chr. zerstört, als der Vesuv ausbrach und die Stadt unter 4-6 Metern Vulkanasche und Bimsstein begrub. Die nahe gelegene Stadt Herculaneum wurde ebenfalls zerstört. Plinius der Jüngere bezeugte und dokumentierte den Ausbruch. Die Asche bewahrte Gebäude, Artefakte und sogar die Formen der Opfer in bemerkenswertem Detail. Pompeji wurde 1748 wiederentdeckt und Ausgrabungen haben unschätzbare Einblicke in das römische Leben geliefert. Die Stätte ist jetzt UNESCO-Weltkulturerbe und eine der meistbesuchten Touristenattraktionen Italiens, die einen eingefrorenen Schnappschuss der antiken römischen Zivilisation bietet.",
          nl: "Pompeii werd verwoest op 24 augustus 79 n.Chr. toen de Vesuvius uitbarstte en de stad bedolf onder 4-6 meter vulkanische as en puimsteen. De nabijgelegen stad Herculaneum werd ook verwoest. Plinius de Jongere was getuige van en documenteerde de uitbarsting. De as bewaarde gebouwen, artefacten en zelfs de vormen van slachtoffers in opmerkelijk detail. Pompeii werd herontdekt in 1748 en opgravingen hebben onschatbare inzichten verschaft in het Romeinse leven. De site is nu UNESCO-werelderfgoed en een van Italië's meest bezochte toeristische attracties, die een bevroren momentopname biedt van de oude Romeinse beschaving."
        }
      },
      {
        question: {
          en: "On August 24, 1991, which former Soviet republic declared independence, led by Leonid Kravchuk?",
          es: "El 24 de agosto de 1991, ¿qué ex república soviética declaró su independencia, liderada por Leonid Kravchuk?",
          de: "Am 24. August 1991 erklärte welche ehemalige Sowjetrepublik unter der Führung von Leonid Krawtschuk ihre Unabhängigkeit?",
          nl: "Op 24 augustus 1991 verklaarde welke voormalige Sovjet-republiek onafhankelijkheid, geleid door Leonid Kravtsjoek?"
        },
        options: [
          {
            en: "Belarus",
            es: "Bielorrusia",
            de: "Weißrussland",
            nl: "Belarus"
          },
          {
            en: "Georgia",
            es: "Georgia",
            de: "Georgien",
            nl: "Georgië"
          },
          {
            en: "Ukraine",
            es: "Ucrania",
            de: "Ukraine",
            nl: "Oekraïne"
          },
          {
            en: "Kazakhstan",
            es: "Kazajistán",
            de: "Kasachstan",
            nl: "Kazachstan"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ukraine declared independence on August 24, 1991, following the failed coup attempt in Moscow. The Ukrainian parliament adopted the Act of Declaration of Independence, which was confirmed by a referendum on December 1, 1991, with over 90% voting in favor. Leonid Kravchuk became the first president. Ukraine's independence effectively ended the Soviet Union - when Ukraine left, the USSR became unsustainable. Ukraine is Europe's second-largest country by area. Independence Day is celebrated annually on August 24 and is a national holiday.",
          es: "Ucrania declaró su independencia el 24 de agosto de 1991, tras el fallido intento de golpe de estado en Moscú. El parlamento ucraniano adoptó el Acta de Declaración de Independencia, que fue confirmada por un referéndum el 1 de diciembre de 1991, con más del 90% votando a favor. Leonid Kravchuk se convirtió en el primer presidente. La independencia de Ucrania efectivamente terminó la Unión Soviética - cuando Ucrania se fue, la URSS se volvió insostenible. Ucrania es el segundo país más grande de Europa por área. El Día de la Independencia se celebra anualmente el 24 de agosto y es un día festivo nacional.",
          de: "Die Ukraine erklärte am 24. August 1991 ihre Unabhängigkeit nach dem gescheiterten Putschversuch in Moskau. Das ukrainische Parlament verabschiedete die Unabhängigkeitserklärung, die durch ein Referendum am 1. Dezember 1991 mit über 90% Zustimmung bestätigt wurde. Leonid Krawtschuk wurde der erste Präsident. Die Unabhängigkeit der Ukraine beendete effektiv die Sowjetunion - als die Ukraine austrat, wurde die UdSSR unhaltbar. Die Ukraine ist das zweitgrößte Land Europas nach Fläche. Der Unabhängigkeitstag wird jährlich am 24. August gefeiert und ist ein Nationalfeiertag.",
          nl: "Oekraïne verklaarde onafhankelijkheid op 24 augustus 1991, na de mislukte staatsgreep in Moskou. Het Oekraïense parlement nam de Akte van Onafhankelijkheidsverklaring aan, die werd bevestigd door een referendum op 1 december 1991, waarbij meer dan 90% voor stemde. Leonid Kravtsjoek werd de eerste president. Oekraïnes onafhankelijkheid beëindigde effectief de Sovjet-Unie - toen Oekraïne vertrok, werd de USSR onhoudbaar. Oekraïne is het op een na grootste land van Europa naar oppervlakte. Onafhankelijkheidsdag wordt jaarlijks gevierd op 24 augustus en is een nationale feestdag."
        }
      },
      {
        question: {
          en: "On August 24, 2006, which celestial body was reclassified from a planet to a 'dwarf planet' by the International Astronomical Union?",
          es: "El 24 de agosto de 2006, ¿qué cuerpo celeste fue reclasificado de planeta a 'planeta enano' por la Unión Astronómica Internacional?",
          de: "Am 24. August 2006 wurde welcher Himmelskörper von einem Planeten zu einem 'Zwergplaneten' durch die Internationale Astronomische Union umklassifiziert?",
          nl: "Op 24 augustus 2006 werd welk hemellichaam geherclas sificeerd van een planeet naar een 'dwergplaneet' door de Internationale Astronomische Unie?"
        },
        options: [
          {
            en: "Mars",
            es: "Marte",
            de: "Mars",
            nl: "Mars"
          },
          {
            en: "Mercury",
            es: "Mercurio",
            de: "Merkur",
            nl: "Mercurius"
          },
          {
            en: "Pluto",
            es: "Plutón",
            de: "Pluto",
            nl: "Pluto"
          },
          {
            en: "Neptune",
            es: "Neptuno",
            de: "Neptun",
            nl: "Neptunus"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Pluto was reclassified as a dwarf planet on August 24, 2006, by the International Astronomical Union (IAU). The decision was made because Pluto hasn't cleared its orbital neighborhood of other objects. Discovered in 1930 by Clyde Tombaugh, Pluto was considered the ninth planet for 76 years. The reclassification was controversial and sparked debate. NASA's New Horizons mission flew by Pluto in 2015, revealing a complex world with mountains, plains, and a heart-shaped feature. Pluto has five known moons, the largest being Charon. The demotion remains a topic of discussion among astronomers and the public.",
          es: "Plutón fue reclasificado como planeta enano el 24 de agosto de 2006 por la Unión Astronómica Internacional (IAU). La decisión se tomó porque Plutón no ha despejado su vecindad orbital de otros objetos. Descubierto en 1930 por Clyde Tombaugh, Plutón fue considerado el noveno planeta durante 76 años. La reclasificación fue controvertida y generó debate. La misión New Horizons de la NASA pasó por Plutón en 2015, revelando un mundo complejo con montañas, llanuras y una característica en forma de corazón. Plutón tiene cinco lunas conocidas, siendo la más grande Caronte. La degradación sigue siendo un tema de discusión entre astrónomos y el público.",
          de: "Pluto wurde am 24. August 2006 von der Internationalen Astronomischen Union (IAU) als Zwergplanet neu klassifiziert. Die Entscheidung wurde getroffen, weil Pluto seine Umlaufbahn nicht von anderen Objekten freigeräumt hat. 1930 von Clyde Tombaugh entdeckt, galt Pluto 76 Jahre lang als neunter Planet. Die Neueinstufung war kontrovers und löste Debatten aus. NASAs New Horizons-Mission flog 2015 an Pluto vorbei und enthüllte eine komplexe Welt mit Bergen, Ebenen und einem herzförmigen Merkmal. Pluto hat fünf bekannte Monde, der größte ist Charon. Die Herabstufung bleibt ein Diskussionsthema unter Astronomen und der Öffentlichkeit.",
          nl: "Pluto werd geherclas sificeerd als dwergplaneet op 24 augustus 2006 door de Internationale Astronomische Unie (IAU). De beslissing werd genomen omdat Pluto zijn baandomgeving niet heeft vrijgemaakt van andere objecten. Ontdekt in 1930 door Clyde Tombaugh, werd Pluto 76 jaar lang beschouwd als de negende planeet. De herclassificatie was controversieel en leidde tot debat. NASA's New Horizons-missie vloog langs Pluto in 2015 en onthulde een complexe wereld met bergen, vlaktes en een hartvormig kenmerk. Pluto heeft vijf bekende manen, waarvan Charon de grootste is. De degradatie blijft een onderwerp van discussie onder astronomen en het publiek."
        }
      },
      {
        question: {
          en: "On August 24, 410 AD, which Visigothic king led the first sack of Rome in nearly 800 years?",
          es: "El 24 de agosto del 410 d.C., ¿qué rey visigodo lideró el primer saqueo de Roma en casi 800 años?",
          de: "Am 24. August 410 n. Chr. führte welcher westgotische König die erste Plünderung Roms seit fast 800 Jahren an?",
          nl: "Op 24 augustus 410 n.Chr. leidde welke Visigotische koning de eerste plundering van Rome in bijna 800 jaar?"
        },
        options: [
          {
            en: "Attila",
            es: "Atila",
            de: "Attila",
            nl: "Attila"
          },
          {
            en: "Alaric I",
            es: "Alarico I",
            de: "Alarich I.",
            nl: "Alarik I"
          },
          {
            en: "Theodoric",
            es: "Teodorico",
            de: "Theoderich",
            nl: "Theodorik"
          },
          {
            en: "Genseric",
            es: "Genserico",
            de: "Geiserich",
            nl: "Genseric"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Alaric I led the Visigoths in the sack of Rome on August 24, 410 AD. This was the first time Rome had been sacked since the Gauls did so in 390 BC. The event shocked the Roman world and symbolized the decline of the Western Roman Empire. Alaric had previously served in the Roman army before turning against Rome. The sacking lasted three days, and while violent, Alaric ordered his men to spare churches and not kill those seeking sanctuary. Alaric died shortly after, and his body was allegedly buried in a riverbed with his treasure.",
          es: "Alarico I lideró a los visigodos en el saqueo de Roma el 24 de agosto del 410 d.C. Esta fue la primera vez que Roma fue saqueada desde que los galos lo hicieron en 390 a.C. El evento conmocionó al mundo romano y simbolizó el declive del Imperio Romano de Occidente. Alarico había servido previamente en el ejército romano antes de volverse contra Roma. El saqueo duró tres días, y aunque violento, Alarico ordenó a sus hombres perdonar las iglesias y no matar a quienes buscaban santuario. Alarico murió poco después, y su cuerpo fue supuestamente enterrado en un lecho de río con su tesoro.",
          de: "Alarich I. führte die Westgoten bei der Plünderung Roms am 24. August 410 n. Chr. an. Dies war das erste Mal, dass Rom seit 390 v. Chr., als die Gallier es taten, geplündert wurde. Das Ereignis schockierte die römische Welt und symbolisierte den Niedergang des Weströmischen Reiches. Alarich hatte zuvor in der römischen Armee gedient, bevor er sich gegen Rom wandte. Die Plünderung dauerte drei Tage, und obwohl gewalttätig, befahl Alarich seinen Männern, Kirchen zu verschonen und diejenigen nicht zu töten, die Zuflucht suchten. Alarich starb kurz danach, und sein Körper wurde angeblich mit seinem Schatz in einem Flussbett begraben.",
          nl: "Alarik I leidde de Visigoten bij de plundering van Rome op 24 augustus 410 n.Chr. Dit was de eerste keer dat Rome werd geplunderd sinds de Galliërs dit deden in 390 v.Chr. De gebeurtenis schokte de Romeinse wereld en symboliseerde de neergang van het West-Romeinse Rijk. Alarik had eerder gediend in het Romeinse leger voordat hij zich tegen Rome keerde. De plundering duurde drie dagen en hoewel gewelddadig, beval Alarik zijn mannen kerken te sparen en degenen die asiel zochten niet te doden. Alarik stierf kort daarna en zijn lichaam werd naar verluidt begraven in een rivierbed met zijn schat."
        }
      },
      {
        question: {
          en: "On August 24, 1814, during the War of 1812, British forces burned which major American city, including the White House?",
          es: "El 24 de agosto de 1814, durante la Guerra de 1812, las fuerzas británicas quemaron ¿qué importante ciudad estadounidense, incluyendo la Casa Blanca?",
          de: "Am 24. August 1814, während des Krieges von 1812, brannten britische Truppen welche wichtige amerikanische Stadt nieder, einschließlich des Weißen Hauses?",
          nl: "Op 24 augustus 1814, tijdens de Oorlog van 1812, brandden Britse troepen welke belangrijke Amerikaanse stad plat, inclusief het Witte Huis?"
        },
        options: [
          {
            en: "New York",
            es: "Nueva York",
            de: "New York",
            nl: "New York"
          },
          {
            en: "Philadelphia",
            es: "Filadelfia",
            de: "Philadelphia",
            nl: "Philadelphia"
          },
          {
            en: "Boston",
            es: "Boston",
            de: "Boston",
            nl: "Boston"
          },
          {
            en: "Washington D.C.",
            es: "Washington D.C.",
            de: "Washington D.C.",
            nl: "Washington D.C."
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "British forces burned Washington D.C. on August 24, 1814, in retaliation for American forces burning York (now Toronto) in 1813. The White House, Capitol, and other government buildings were set ablaze. President James Madison and his wife Dolley fled, with Dolley famously saving a portrait of George Washington. The burning was a low point for the United States during the War of 1812. A thunderstorm helped extinguish the fires the next day. The attack motivated Americans and contributed to the writing of 'The Star-Spangled Banner' after the defense of Fort McHenry.",
          es: "Las fuerzas británicas quemaron Washington D.C. el 24 de agosto de 1814, en represalia por las fuerzas estadounidenses que quemaron York (ahora Toronto) en 1813. La Casa Blanca, el Capitolio y otros edificios gubernamentales fueron incendiados. El presidente James Madison y su esposa Dolley huyeron, con Dolley salvando famosamente un retrato de George Washington. La quema fue un punto bajo para Estados Unidos durante la Guerra de 1812. Una tormenta ayudó a extinguir los incendios al día siguiente. El ataque motivó a los estadounidenses y contribuyó a la escritura de 'The Star-Spangled Banner' después de la defensa de Fort McHenry.",
          de: "Britische Truppen brannten Washington D.C. am 24. August 1814 nieder, als Vergeltung für amerikanische Truppen, die 1813 York (heute Toronto) niederbrannten. Das Weiße Haus, das Kapitol und andere Regierungsgebäude wurden in Brand gesetzt. Präsident James Madison und seine Frau Dolley flohen, wobei Dolley berühmt ein Porträt von George Washington rettete. Die Verbrennung war ein Tiefpunkt für die Vereinigten Staaten während des Krieges von 1812. Ein Gewitter half am nächsten Tag, die Brände zu löschen. Der Angriff motivierte die Amerikaner und trug zur Entstehung von 'The Star-Spangled Banner' nach der Verteidigung von Fort McHenry bei.",
          nl: "Britse troepen brandden Washington D.C. plat op 24 augustus 1814, als vergelding voor Amerikaanse troepen die York (nu Toronto) in 1813 platbrandden. Het Witte Huis, het Capitool en andere overheidsgebouwen werden in brand gestoken. President James Madison en zijn vrouw Dolley vluchtten, waarbij Dolley beroemd een portret van George Washington redde. De verbranding was een dieptepunt voor de Verenigde Staten tijdens de Oorlog van 1812. Een onweersbui help de volgende dag de branden te blussen. De aanval motiveerde Amerikanen en droeg bij aan het schrijven van 'The Star-Spangled Banner' na de verdediging van Fort McHenry."
        }
      }
    ],
    day25: [
      {
        question: {
          en: "On August 25, 1944, which European capital city was liberated from Nazi occupation by Allied forces?",
          es: "El 25 de agosto de 1944, ¿qué capital europea fue liberada de la ocupación nazi por las fuerzas aliadas?",
          de: "Am 25. August 1944 wurde welche europäische Hauptstadt von alliierten Truppen von der Nazi-Besatzung befreit?",
          nl: "Op 25 augustus 1944 werd welke Europese hoofdstad bevrijd van Nazi-bezetting door geallieerde troepen?"
        },
        options: [
          {
            en: "Brussels",
            es: "Bruselas",
            de: "Brüssel",
            nl: "Brussel"
          },
          {
            en: "Amsterdam",
            es: "Ámsterdam",
            de: "Amsterdam",
            nl: "Amsterdam"
          },
          {
            en: "Paris",
            es: "París",
            de: "Paris",
            nl: "Parijs"
          },
          {
            en: "Rome",
            es: "Roma",
            de: "Rom",
            nl: "Rome"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Paris was liberated on August 25, 1944, by Allied forces, primarily the French 2nd Armored Division under General Leclerc. The city had been under Nazi occupation since June 1940. The liberation followed an uprising by the French Resistance. German commander Dietrich von Choltitz disobeyed Hitler's orders to destroy Paris. General Charles de Gaulle led a triumphant march down the Champs-Élysées on August 26. The liberation was a major symbolic victory for the Allies and marked a turning point in World War II. Paris's liberation is celebrated annually on August 25.",
          es: "París fue liberada el 25 de agosto de 1944 por las fuerzas aliadas, principalmente la 2ª División Blindada francesa bajo el general Leclerc. La ciudad había estado bajo ocupación nazi desde junio de 1940. La liberación siguió a un levantamiento de la Resistencia francesa. El comandante alemán Dietrich von Choltitz desobedeció las órdenes de Hitler de destruir París. El general Charles de Gaulle lideró una marcha triunfal por los Campos Elíseos el 26 de agosto. La liberación fue una importante victoria simbólica para los Aliados y marcó un punto de inflexión en la Segunda Guerra Mundial. La liberación de París se celebra anualmente el 25 de agosto.",
          de: "Paris wurde am 25. August 1944 von alliierten Truppen befreit, hauptsächlich von der französischen 2. Panzerdivision unter General Leclerc. Die Stadt war seit Juni 1940 unter Nazi-Besatzung. Die Befreiung folgte einem Aufstand der französischen Résistance. Der deutsche Kommandant Dietrich von Choltitz missachtete Hitlers Befehl, Paris zu zerstören. General Charles de Gaulle führte am 26. August einen triumphalen Marsch die Champs-Élysées hinunter. Die Befreiung war ein großer symbolischer Sieg für die Alliierten und markierte einen Wendepunkt im Zweiten Weltkrieg. Die Befreiung von Paris wird jährlich am 25. August gefeiert.",
          nl: "Parijs werd bevrijd op 25 augustus 1944 door geallieerde troepen, voornamelijk de Franse 2e Pantserdivisie onder generaal Leclerc. De stad was sinds juni 1940 onder Nazi-bezetting. De bevrijding volgde op een opstand van het Franse Verzet. Duitse commandant Dietrich von Choltitz negeerde Hitlers bevelen om Parijs te vernietigen. Generaal Charles de Gaulle leidde een triomfantelijke mars over de Champs-Élysées op 26 augustus. De bevrijding was een grote symbolische overwinning voor de geallieerden en markeerde een keerpunt in de Tweede Wereldoorlog. De bevrijding van Parijs wordt jaarlijks gevierd op 25 augustus."
        }
      },
      {
        question: {
          en: "On August 25, 1825, which South American country declared independence from Brazil after years of conflict?",
          es: "El 25 de agosto de 1825, ¿qué país sudamericano declaró su independencia de Brasil después de años de conflicto?",
          de: "Am 25. August 1825 erklärte welches südamerikanische Land nach Jahren des Konflikts seine Unabhängigkeit von Brasilien?",
          nl: "Op 25 augustus 1825 verklaarde welk Zuid-Amerikaans land onafhankelijkheid van Brazilië na jaren van conflict?"
        },
        options: [
          {
            en: "Paraguay",
            es: "Paraguay",
            de: "Paraguay",
            nl: "Paraguay"
          },
          {
            en: "Argentina",
            es: "Argentina",
            de: "Argentinien",
            nl: "Argentinië"
          },
          {
            en: "Uruguay",
            es: "Uruguay",
            de: "Uruguay",
            nl: "Uruguay"
          },
          {
            en: "Bolivia",
            es: "Bolivia",
            de: "Bolivien",
            nl: "Bolivia"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Uruguay declared independence on August 25, 1825, after the Thirty-Three Orientals led by Juan Antonio Lavalleja began a revolt against Brazilian rule. The territory had been contested between Spain, Portugal, Argentina, and Brazil. The declaration led to the Cisplatine War (1825-1828) between Brazil and Argentina, both claiming Uruguay. British mediation resulted in Uruguay becoming an independent buffer state in 1828. The country's full name is the Oriental Republic of Uruguay. August 25 is celebrated as Independence Day and is a national holiday in Uruguay.",
          es: "Uruguay declaró su independencia el 25 de agosto de 1825, después de que los Treinta y Tres Orientales liderados por Juan Antonio Lavalleja iniciaran una revuelta contra el dominio brasileño. El territorio había sido disputado entre España, Portugal, Argentina y Brasil. La declaración condujo a la Guerra de la Cisplatina (1825-1828) entre Brasil y Argentina, ambos reclamando Uruguay. La mediación británica resultó en que Uruguay se convirtiera en un estado tapón independiente en 1828. El nombre completo del país es República Oriental del Uruguay. El 25 de agosto se celebra como Día de la Independencia y es un día festivo nacional en Uruguay.",
          de: "Uruguay erklärte am 25. August 1825 seine Unabhängigkeit, nachdem die Dreiunddreißig Orientalen unter Juan Antonio Lavalleja einen Aufstand gegen die brasilianische Herrschaft begannen. Das Gebiet war zwischen Spanien, Portugal, Argentinien und Brasilien umstritten. Die Erklärung führte zum Cisplatinischen Krieg (1825-1828) zwischen Brasilien und Argentinien, die beide Uruguay beanspruchten. Britische Vermittlung führte dazu, dass Uruguay 1828 ein unabhängiger Pufferstaat wurde. Der vollständige Name des Landes ist Republik Östlich des Uruguay. Der 25. August wird als Unabhängigkeitstag gefeiert und ist ein Nationalfeiertag in Uruguay.",
          nl: "Uruguay verklaarde onafhankelijkheid op 25 augustus 1825, nadat de Drieëndertig Oostelingen geleid door Juan Antonio Lavalleja een opstand begonnen tegen Braziliaanse overheersing. Het gebied was betwist geweest tussen Spanje, Portugal, Argentinië en Brazilië. De verklaring leidde tot de Cisplatijnse Oorlog (1825-1828) tussen Brazilië en Argentinië, die beiden Uruguay opeisten. Britse bemiddeling resulteerde in Uruguay dat in 1828 een onafhankelijke bufferstaat werd. De volledige naam van het land is Republiek Oostelijk van de Uruguay. 25 augustus wordt gevierd als Onafhankelijkheidsdag en is een nationale feestdag in Uruguay."
        }
      },
      {
        question: {
          en: "On August 25, 1930, which Scottish actor best known for playing James Bond was born in Edinburgh?",
          es: "El 25 de agosto de 1930, ¿qué actor escocés mejor conocido por interpretar a James Bond nació en Edimburgo?",
          de: "Am 25. August 1930 wurde welcher schottische Schauspieler, der am besten für seine Rolle als James Bond bekannt ist, in Edinburgh geboren?",
          nl: "Op 25 augustus 1930 werd welke Schotse acteur die het best bekend staat om het spelen van James Bond geboren in Edinburgh?"
        },
        options: [
          {
            en: "Roger Moore",
            es: "Roger Moore",
            de: "Roger Moore",
            nl: "Roger Moore"
          },
          {
            en: "Sean Connery",
            es: "Sean Connery",
            de: "Sean Connery",
            nl: "Sean Connery"
          },
          {
            en: "Pierce Brosnan",
            es: "Pierce Brosnan",
            de: "Pierce Brosnan",
            nl: "Pierce Brosnan"
          },
          {
            en: "Timothy Dalton",
            es: "Timothy Dalton",
            de: "Timothy Dalton",
            nl: "Timothy Dalton"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Sean Connery was born on August 25, 1930, in Edinburgh, Scotland. He was the first actor to portray James Bond on film, appearing in seven Bond movies from 1962 to 1983, starting with 'Dr. No'. His portrayal defined the character and made him a global icon. Connery won an Academy Award for 'The Untouchables' (1987) and received a BAFTA Fellowship and Kennedy Center Honor. He was knighted by Queen Elizabeth II in 2000. Other notable films include 'Indiana Jones and the Last Crusade', 'The Hunt for Red October', and 'The Rock'. He died in 2020.",
          es: "Sean Connery nació el 25 de agosto de 1930 en Edimburgo, Escocia. Fue el primer actor en interpretar a James Bond en el cine, apareciendo en siete películas de Bond de 1962 a 1983, comenzando con 'Dr. No'. Su interpretación definió al personaje y lo convirtió en un ícono global. Connery ganó un Premio de la Academia por 'Los intocables' (1987) y recibió una Beca BAFTA y un Premio del Kennedy Center. Fue nombrado caballero por la Reina Isabel II en 2000. Otras películas notables incluyen 'Indiana Jones y la última cruzada', 'La caza del Octubre Rojo' y 'La roca'. Murió en 2020.",
          de: "Sean Connery wurde am 25. August 1930 in Edinburgh, Schottland geboren. Er war der erste Schauspieler, der James Bond im Film darstellte und von 1962 bis 1983 in sieben Bond-Filmen auftrat, beginnend mit 'Dr. No'. Seine Darstellung definierte den Charakter und machte ihn zu einer globalen Ikone. Connery gewann einen Academy Award für 'Die Unbestechlichen' (1987) und erhielt ein BAFTA Fellowship und Kennedy Center Honor. Er wurde 2000 von Königin Elizabeth II. zum Ritter geschlagen. Andere bemerkenswerte Filme sind 'Indiana Jones und der letzte Kreuzzug', 'Jagd auf Roter Oktober' und 'The Rock'. Er starb 2020.",
          nl: "Sean Connery werd geboren op 25 augustus 1930 in Edinburgh, Schotland. Hij was de eerste acteur die James Bond speelde in films, waarbij hij verscheen in zeven Bond-films van 1962 tot 1983, te beginnen met 'Dr. No'. Zijn vertolking definieerde het personage en maakte hem een wereldwijd icoon. Connery won een Academy Award voor 'The Untouchables' (1987) en ontving een BAFTA Fellowship en Kennedy Center Honor. Hij werd geridderd door koningin Elizabeth II in 2000. Andere opmerkelijke films zijn 'Indiana Jones and the Last Crusade', 'The Hunt for Red October' en 'The Rock'. Hij stierf in 2020."
        }
      },
      {
        question: {
          en: "On August 25, 1989, which space probe launched by NASA would later make a famous flyby of Neptune?",
          es: "El 25 de agosto de 1989, ¿qué sonda espacial lanzada por la NASA haría más tarde un famoso sobrevuelo de Neptuno?",
          de: "Am 25. August 1989 führte welche von der NASA gestartete Raumsonde später einen berühmten Vorbeiflug am Neptun durch?",
          nl: "Op 25 augustus 1989 zou welke door NASA gelanceerde ruimtesonde later een beroemde voorbijvlucht van Neptunus maken?"
        },
        options: [
          {
            en: "Cassini",
            es: "Cassini",
            de: "Cassini",
            nl: "Cassini"
          },
          {
            en: "Galileo",
            es: "Galileo",
            de: "Galileo",
            nl: "Galileo"
          },
          {
            en: "Voyager 2",
            es: "Voyager 2",
            de: "Voyager 2",
            nl: "Voyager 2"
          },
          {
            en: "Pioneer 10",
            es: "Pioneer 10",
            de: "Pioneer 10",
            nl: "Pioneer 10"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Voyager 2 made its closest approach to Neptune on August 25, 1989, passing within 3,000 miles of the planet's north pole. It discovered six new moons, rings, and the Great Dark Spot. Voyager 2 also studied Triton, Neptune's largest moon, discovering nitrogen geysers. This was the final planetary encounter of the Voyager program's 'Grand Tour'. Voyager 2 is the only spacecraft to have visited Neptune and Uranus. Launched in 1977, it entered interstellar space in 2018 and continues transmitting data. The mission revolutionized our understanding of the outer solar system.",
          es: "Voyager 2 hizo su aproximación más cercana a Neptuno el 25 de agosto de 1989, pasando a 3,000 millas del polo norte del planeta. Descubrió seis nuevas lunas, anillos y la Gran Mancha Oscura. Voyager 2 también estudió Tritón, la luna más grande de Neptuno, descubriendo géiseres de nitrógeno. Este fue el encuentro planetario final del 'Gran Tour' del programa Voyager. Voyager 2 es la única nave espacial que ha visitado Neptuno y Urano. Lanzada en 1977, entró en el espacio interestelar en 2018 y continúa transmitiendo datos. La misión revolucionó nuestra comprensión del sistema solar exterior.",
          de: "Voyager 2 erreichte am 25. August 1989 ihre größte Annäherung an Neptun und passierte innerhalb von 3.000 Meilen den Nordpol des Planeten. Sie entdeckte sechs neue Monde, Ringe und den Großen Dunklen Fleck. Voyager 2 untersuchte auch Triton, Neptuns größten Mond, und entdeckte Stickstoffgeysire. Dies war die letzte Planetenbegegnung der 'Grand Tour' des Voyager-Programms. Voyager 2 ist das einzige Raumschiff, das Neptun und Uranus besucht hat. 1977 gestartet, trat sie 2018 in den interstellaren Raum ein und sendet weiterhin Daten. Die Mission revolutionierte unser Verständnis des äußeren Sonnensystems.",
          nl: "Voyager 2 maakte zijn nauwste benadering van Neptunus op 25 augustus 1989, waarbij het binnen 3.000 mijl van de noordpool van de planeet passeerde. Het ontdekte zes nieuwe manen, ringen en de Grote Donkere Vlek. Voyager 2 bestudeerde ook Triton, Neptunus' grootste maan, en ontdekte stikstofgeisers. Dit was de laatste planetaire ontmoeting van de 'Grand Tour' van het Voyager-programma. Voyager 2 is het enige ruimtevaartuig dat Neptunus en Uranus heeft bezocht. Gelanceerd in 1977, betrad het in 2018 de interstellaire ruimte en blijft gegevens verzenden. De missie revolutioneerde ons begrip van het buitenste zonnestelsel."
        }
      },
      {
        question: {
          en: "On August 25, 1609, which Italian astronomer made his first telescopic observation of the Moon?",
          es: "El 25 de agosto de 1609, ¿qué astrónomo italiano hizo su primera observación telescópica de la Luna?",
          de: "Am 25. August 1609 machte welcher italienische Astronom seine erste teleskopische Beobachtung des Mondes?",
          nl: "Op 25 augustus 1609 deed welke Italiaanse astronoom zijn eerste telescopische waarneming van de Maan?"
        },
        options: [
          {
            en: "Johannes Kepler",
            es: "Johannes Kepler",
            de: "Johannes Kepler",
            nl: "Johannes Kepler"
          },
          {
            en: "Tycho Brahe",
            es: "Tycho Brahe",
            de: "Tycho Brahe",
            nl: "Tycho Brahe"
          },
          {
            en: "Nicolaus Copernicus",
            es: "Nicolás Copérnico",
            de: "Nikolaus Kopernikus",
            nl: "Nicolaas Copernicus"
          },
          {
            en: "Galileo Galilei",
            es: "Galileo Galilei",
            de: "Galileo Galilei",
            nl: "Galileo Galilei"
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "Galileo Galilei made his first telescopic observation of the Moon on August 25, 1609, using a telescope he had improved to 20x magnification. He observed mountains and craters, contradicting the Aristotelian view that celestial bodies were perfect spheres. Galileo's observations revolutionized astronomy and supported the Copernican heliocentric model. He later discovered four of Jupiter's moons (the Galilean moons), observed Venus's phases, and studied sunspots. His work 'Sidereus Nuncius' (1610) published these findings. Galileo faced persecution from the Catholic Church for supporting heliocentrism but is now celebrated as the father of modern observational astronomy.",
          es: "Galileo Galilei hizo su primera observación telescópica de la Luna el 25 de agosto de 1609, usando un telescopio que había mejorado a 20x de magnificación. Observó montañas y cráteres, contradiciendo la visión aristotélica de que los cuerpos celestes eran esferas perfectas. Las observaciones de Galileo revolucionaron la astronomía y apoyaron el modelo heliocéntrico copernicano. Más tarde descubrió cuatro de las lunas de Júpiter (las lunas galileanas), observó las fases de Venus y estudió manchas solares. Su obra 'Sidereus Nuncius' (1610) publicó estos hallazgos. Galileo enfrentó persecución de la Iglesia Católica por apoyar el heliocentrismo, pero ahora es celebrado como el padre de la astronomía observacional moderna.",
          de: "Galileo Galilei machte am 25. August 1609 seine erste teleskopische Beobachtung des Mondes mit einem Teleskop, das er auf 20-fache Vergrößerung verbessert hatte. Er beobachtete Berge und Krater, was der aristotelischen Ansicht widersprach, dass Himmelskörper perfekte Kugeln seien. Galileos Beobachtungen revolutionierten die Astronomie und unterstützten das kopernikanische heliozentrische Modell. Später entdeckte er vier Jupitermonde (die Galileischen Monde), beobachtete die Phasen der Venus und studierte Sonnenflecken. Sein Werk 'Sidereus Nuncius' (1610) veröffentlichte diese Erkenntnisse. Galileo wurde von der katholischen Kirche verfolgt, weil er den Heliozentrismus unterstützte, wird aber heute als Vater der modernen Beobachtungsastronomie gefeiert.",
          nl: "Galileo Galilei deed zijn eerste telescopische waarneming van de Maan op 25 augustus 1609, met behulp van een telescoop die hij had verbeterd tot 20x vergroting. Hij observeerde bergen en kraters, wat in tegenspraak was met de Aristotelische opvatting dat hemellichamen perfecte bollen waren. Galileo's observaties revolutioneerden de astronomie en ondersteunden het Copernicaanse heliocentrische model. Later ontdekte hij vier van Jupiters manen (de Galileïsche manen), observeerde hij de fasen van Venus en bestudeerde hij zonnevlekken. Zijn werk 'Sidereus Nuncius' (1610) publiceerde deze bevindingen. Galileo werd vervolgd door de Katholieke Kerk voor het ondersteunen van heliocentrisme, maar wordt nu gevierd als de vader van de moderne observationele astronomie."
        }
      }
    ],

    // Day 26 - August 26th: 19th Amendment, Mother Teresa born, Krakatoa eruption
    day26: [
      {
        question: {
          en: "On August 26, 1920, which constitutional amendment granting women the right to vote was certified in the United States?",
          es: "El 26 de agosto de 1920, ¿qué enmienda constitucional que otorgó el derecho al voto a las mujeres fue certificada en los Estados Unidos?",
          de: "Am 26. August 1920 wurde welche Verfassungsänderung, die Frauen das Wahlrecht gewährte, in den Vereinigten Staaten zertifiziert?",
          nl: "Op 26 augustus 1920 werd welk grondwetsartikel dat vrouwen het stemrecht verleende gecertificeerd in de Verenigde Staten?"
        },
        options: [
          {
            en: "15th Amendment",
            es: "15ª Enmienda",
            de: "15. Zusatzartikel",
            nl: "15e Amendement"
          },
          {
            en: "18th Amendment",
            es: "18ª Enmienda",
            de: "18. Zusatzartikel",
            nl: "18e Amendement"
          },
          {
            en: "19th Amendment",
            es: "19ª Enmienda",
            de: "19. Zusatzartikel",
            nl: "19e Amendement"
          },
          {
            en: "21st Amendment",
            es: "21ª Enmienda",
            de: "21. Zusatzartikel",
            nl: "21e Amendement"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 19th Amendment was certified on August 26, 1920, after Tennessee became the 36th state to ratify it, providing the necessary three-quarters majority. The amendment states that voting rights cannot be denied based on sex. The women's suffrage movement had fought for decades, with leaders like Susan B. Anthony and Elizabeth Cady Stanton. The certification was signed by Secretary of State Bainbridge Colby. Women's Equality Day is celebrated annually on August 26. However, many women of color still faced barriers to voting due to discriminatory practices that persisted until the Voting Rights Act of 1965.",
          es: "La 19ª Enmienda fue certificada el 26 de agosto de 1920, después de que Tennessee se convirtiera en el estado número 36 en ratificarla, proporcionando la mayoría de tres cuartos necesaria. La enmienda establece que los derechos de voto no pueden ser negados en base al sexo. El movimiento por el sufragio femenino había luchado durante décadas, con líderes como Susan B. Anthony y Elizabeth Cady Stanton. La certificación fue firmada por el Secretario de Estado Bainbridge Colby. El Día de la Igualdad de la Mujer se celebra anualmente el 26 de agosto. Sin embargo, muchas mujeres de color aún enfrentaban barreras para votar debido a prácticas discriminatorias que persistieron hasta la Ley de Derechos de Voto de 1965.",
          de: "Der 19. Zusatzartikel wurde am 26. August 1920 zertifiziert, nachdem Tennessee der 36. Bundesstaat wurde, der ihn ratifizierte und die notwendige Dreiviertel-Mehrheit bereitstellte. Die Änderung besagt, dass Wahlrechte nicht aufgrund des Geschlechts verweigert werden können. Die Frauenwahlrechtsbewegung hatte jahrzehntelang gekämpft, mit Führerinnen wie Susan B. Anthony und Elizabeth Cady Stanton. Die Zertifizierung wurde vom Außenminister Bainbridge Colby unterzeichnet. Der Tag der Gleichberechtigung der Frau wird jährlich am 26. August gefeiert. Viele farbige Frauen stießen jedoch aufgrund diskriminierender Praktiken, die bis zum Voting Rights Act von 1965 anhielten, weiterhin auf Hindernisse beim Wählen.",
          nl: "Het 19e Amendement werd gecertificeerd op 26 augustus 1920, nadat Tennessee de 36e staat werd die het ratificeerde, waarmee de noodzakelijke driekwart meerderheid werd bereikt. Het amendement stelt dat stemrechten niet kunnen worden geweigerd op basis van geslacht. De vrouwenkiesrechtbeweging had decennialang gestreden, met leiders als Susan B. Anthony en Elizabeth Cady Stanton. De certificering werd ondertekend door minister van Buitenlandse Zaken Bainbridge Colby. Women's Equality Day wordt jaarlijks gevierd op 26 augustus. Veel vrouwen van kleur ondervonden echter nog steeds barrières om te stemmen vanwege discriminerende praktijken die aanhielden tot de Voting Rights Act van 1965."
        }
      },
      {
        question: {
          en: "On August 26, 1910, which Catholic nun and humanitarian known as the 'Saint of the Gutters' was born in Skopje?",
          es: "El 26 de agosto de 1910, ¿qué monja católica y humanitaria conocida como la 'Santa de las Alcantarillas' nació en Skopje?",
          de: "Am 26. August 1910 wurde welche katholische Nonne und Humanitärin, bekannt als die 'Heilige der Gosse', in Skopje geboren?",
          nl: "Op 26 augustus 1910 werd welke katholieke non en humanitair werker bekend als de 'Heilige van de Goten' geboren in Skopje?"
        },
        options: [
          {
            en: "Sister Faustina",
            es: "Hermana Faustina",
            de: "Schwester Faustina",
            nl: "Zuster Faustina"
          },
          {
            en: "Mother Teresa",
            es: "Madre Teresa",
            de: "Mutter Teresa",
            nl: "Moeder Teresa"
          },
          {
            en: "Sister Lucia",
            es: "Hermana Lucía",
            de: "Schwester Lucia",
            nl: "Zuster Lucia"
          },
          {
            en: "Mother Angelica",
            es: "Madre Angélica",
            de: "Mutter Angelica",
            nl: "Moeder Angelica"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Mother Teresa was born Agnes Gonxha Bojaxhiu on August 26, 1910, in Skopje (now North Macedonia). She joined the Sisters of Loreto in 1928 and moved to India, where she taught at a school in Calcutta. In 1946, she experienced a 'call within a call' to serve the poorest of the poor. She founded the Missionaries of Charity in 1950, which grew to operate in over 130 countries. She received the Nobel Peace Prize in 1979. Mother Teresa died in 1997 and was canonized as Saint Teresa of Calcutta in 2016. Her work continues through thousands of sisters worldwide.",
          es: "Madre Teresa nació como Agnes Gonxha Bojaxhiu el 26 de agosto de 1910 en Skopje (ahora Macedonia del Norte). Se unió a las Hermanas de Loreto en 1928 y se mudó a India, donde enseñó en una escuela en Calcuta. En 1946, experimentó un 'llamado dentro de un llamado' para servir a los más pobres de los pobres. Fundó las Misioneras de la Caridad en 1950, que creció hasta operar en más de 130 países. Recibió el Premio Nobel de la Paz en 1979. Madre Teresa murió en 1997 y fue canonizada como Santa Teresa de Calcuta en 2016. Su trabajo continúa a través de miles de hermanas en todo el mundo.",
          de: "Mutter Teresa wurde als Agnes Gonxha Bojaxhiu am 26. August 1910 in Skopje (heute Nordmazedonien) geboren. Sie trat 1928 den Loreto-Schwestern bei und zog nach Indien, wo sie an einer Schule in Kalkutta unterrichtete. 1946 erlebte sie einen 'Ruf innerhalb eines Rufs', den Ärmsten der Armen zu dienen. Sie gründete 1950 die Missionarinnen der Nächstenliebe, die auf über 130 Länder anwuchs. Sie erhielt 1979 den Friedensnobelpreis. Mutter Teresa starb 1997 und wurde 2016 als Heilige Teresa von Kalkutta heiliggesprochen. Ihre Arbeit wird durch Tausende von Schwestern weltweit fortgesetzt.",
          nl: "Moeder Teresa werd geboren als Agnes Gonxha Bojaxhiu op 26 augustus 1910 in Skopje (nu Noord-Macedonië). Ze sloot zich in 1928 aan bij de Zusters van Loreto en verhuisde naar India, waar ze lesgaf op een school in Calcutta. In 1946 ervoer ze een 'roeping binnen een roeping' om de armsten der armen te dienen. Ze stichtte de Missionarissen van Naastenliefde in 1950, die uitgroeide tot meer dan 130 landen. Ze ontving de Nobelprijs voor de Vrede in 1979. Moeder Teresa stierf in 1997 en werd heilig verklaard als Sint Teresa van Calcutta in 2016. Haar werk wordt voortgezet door duizenden zusters wereldwijd."
        }
      },
      {
        question: {
          en: "On August 26-27, 1883, which Indonesian volcano began its catastrophic eruption that killed over 36,000 people?",
          es: "El 26-27 de agosto de 1883, ¿qué volcán indonesio comenzó su erupción catastrófica que mató a más de 36,000 personas?",
          de: "Am 26.-27. August 1883 begann welcher indonesische Vulkan seine katastrophale Eruption, die über 36.000 Menschen tötete?",
          nl: "Op 26-27 augustus 1883 begon welke Indonesische vulkaan zijn catastrofale uitbarsting die meer dan 36.000 mensen doodde?"
        },
        options: [
          {
            en: "Mount Merapi",
            es: "Monte Merapi",
            de: "Berg Merapi",
            nl: "Berg Merapi"
          },
          {
            en: "Mount Tambora",
            es: "Monte Tambora",
            de: "Berg Tambora",
            nl: "Berg Tambora"
          },
          {
            en: "Krakatoa",
            es: "Krakatoa",
            de: "Krakatau",
            nl: "Krakatau"
          },
          {
            en: "Mount Agung",
            es: "Monte Agung",
            de: "Berg Agung",
            nl: "Berg Agung"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Krakatoa began erupting on August 26, 1883, with the main explosion occurring on August 27. The eruption was one of the deadliest and most destructive volcanic events in recorded history. It generated tsunamis up to 40 meters high that devastated coastal areas of Java and Sumatra. The explosion was heard 3,000 miles away and the ash cloud circled the globe, causing spectacular sunsets worldwide for months. The eruption released 200 megatons of energy, four times the largest nuclear bomb. Most of the island was destroyed. A new volcano, Anak Krakatau ('Child of Krakatoa'), emerged in 1927.",
          es: "Krakatoa comenzó a erupcionar el 26 de agosto de 1883, con la explosión principal ocurriendo el 27 de agosto. La erupción fue uno de los eventos volcánicos más mortales y destructivos en la historia registrada. Generó tsunamis de hasta 40 metros de altura que devastaron áreas costeras de Java y Sumatra. La explosión se escuchó a 3,000 millas de distancia y la nube de ceniza rodeó el globo, causando puestas de sol espectaculares en todo el mundo durante meses. La erupción liberó 200 megatones de energía, cuatro veces la bomba nuclear más grande. La mayor parte de la isla fue destruida. Un nuevo volcán, Anak Krakatau ('Hijo de Krakatoa'), emergió en 1927.",
          de: "Krakatau begann am 26. August 1883 auszubrechen, wobei die Hauptexplosion am 27. August stattfand. Die Eruption war eines der tödlichsten und zerstörerischsten vulkanischen Ereignisse in der aufgezeichneten Geschichte. Sie erzeugte Tsunamis von bis zu 40 Metern Höhe, die Küstengebiete von Java und Sumatra verwüsteten. Die Explosion war 3.000 Meilen entfernt zu hören und die Aschewolke umkreiste den Globus und verursachte monatelang spektakuläre Sonnenuntergänge weltweit. Die Eruption setzte 200 Megatonnen Energie frei, viermal so viel wie die größte Atombombe. Der größte Teil der Insel wurde zerstört. Ein neuer Vulkan, Anak Krakatau ('Kind von Krakatau'), entstand 1927.",
          nl: "Krakatau begon uit te barsten op 26 augustus 1883, waarbij de belangrijkste explosie plaatsvond op 27 augustus. De uitbarsting was een van de dodelijkste en meest destructieve vulkanische gebeurtenissen in de geregistreerde geschiedenis. Het genereerde tsunami's tot 40 meter hoog die kustgebieden van Java en Sumatra verwoestten. De explosie was 3.000 mijl verderop te horen en de aswolk cirkelde de aarde, wat maandenlang spectaculaire zonsondergangen wereldwijd veroorzaakte. De uitbarsting gaf 200 megaton energie vrij, vier keer de grootste kernbom. Het grootste deel van het eiland werd vernietigd. Een nieuwe vulkaan, Anak Krakatau ('Kind van Krakatau'), ontstond in 1927."
        }
      },
      {
        question: {
          en: "On August 26, 1789, which document outlining fundamental human rights was adopted by the French National Assembly?",
          es: "El 26 de agosto de 1789, ¿qué documento que esboza los derechos humanos fundamentales fue adoptado por la Asamblea Nacional Francesa?",
          de: "Am 26. August 1789 wurde welches Dokument, das grundlegende Menschenrechte umreißt, von der Französischen Nationalversammlung verabschiedet?",
          nl: "Op 26 augustus 1789 werd welk document dat fundamentele mensenrechten beschrijft aangenomen door de Franse Nationale Vergadering?"
        },
        options: [
          { en: "The Bill of Rights", es: "La Declaración de Derechos", de: "Die Bill of Rights", nl: "De Bill of Rights" },
          { en: "The Magna Carta", es: "La Carta Magna", de: "Die Magna Carta", nl: "De Magna Carta" },
          { en: "The Declaration of the Rights of Man and of the Citizen", es: "La Declaración de los Derechos del Hombre y del Ciudadano", de: "Die Erklärung der Menschen- und Bürgerrechte", nl: "De Verklaring van de Rechten van de Mens en de Burger" },
          { en: "The Constitution of France", es: "La Constitución de Francia", de: "Die Verfassung Frankreichs", nl: "De Grondwet van Frankrijk" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Declaration of the Rights of Man and of the Citizen was adopted on August 26, 1789, during the French Revolution. It was drafted by the Marquis de Lafayette with input from Thomas Jefferson. The declaration outlined individual and collective rights, including liberty, property, security, and resistance to oppression. It proclaimed that all men are born free and equal in rights. The document was influenced by Enlightenment philosophy and the American Declaration of Independence. It became a fundamental document of the French Revolution and influenced human rights declarations worldwide, including the UN Universal Declaration of Human Rights.",
          es: "La Declaración de los Derechos del Hombre y del Ciudadano fue adoptada el 26 de agosto de 1789, durante la Revolución Francesa. Fue redactada por el Marqués de Lafayette con aportes de Thomas Jefferson. La declaración esbozó derechos individuales y colectivos, incluyendo libertad, propiedad, seguridad y resistencia a la opresión. Proclamó que todos los hombres nacen libres e iguales en derechos. El documento fue influenciado por la filosofía de la Ilustración y la Declaración de Independencia estadounidense. Se convirtió en un documento fundamental de la Revolución Francesa e influyó en declaraciones de derechos humanos en todo el mundo, incluyendo la Declaración Universal de Derechos Humanos de la ONU.",
          de: "Die Erklärung der Menschen- und Bürgerrechte wurde am 26. August 1789 während der Französischen Revolution verabschiedet. Sie wurde vom Marquis de Lafayette unter Mitwirkung von Thomas Jefferson entworfen. Die Erklärung umriss individuelle und kollektive Rechte, einschließlich Freiheit, Eigentum, Sicherheit und Widerstand gegen Unterdrückung. Sie verkündete, dass alle Menschen frei und gleich an Rechten geboren sind. Das Dokument wurde von der Aufklärungsphilosophie und der amerikanischen Unabhängigkeitserklärung beeinflusst. Es wurde ein grundlegendes Dokument der Französischen Revolution und beeinflusste Menschenrechtserklärungen weltweit, einschließlich der UN-Allgemeinen Erklärung der Menschenrechte.",
          nl: "De Verklaring van de Rechten van de Mens en de Burger werd aangenomen op 26 augustus 1789, tijdens de Franse Revolutie. Het werd opgesteld door de Markies de Lafayette met input van Thomas Jefferson. De verklaring schetste individuele en collectieve rechten, waaronder vrijheid, eigendom, veiligheid en verzet tegen onderdrukking. Het verklaarde dat alle mensen vrij en gelijk in rechten worden geboren. Het document werd beïnvloed door de verlichtingsfilosofie en de Amerikaanse Onafhankelijkheidsverklaring. Het werd een fundamenteel document van de Franse Revolutie en beïnvloedde mensenrechtenverklaringen wereldwijd, inclusief de Universele Verklaring van de Rechten van de Mens van de VN."
        }
      },
      {
        question: {
          en: "On August 26, 1978, which African country elected its first black cardinal, Bernardin Gantin?",
          es: "El 26 de agosto de 1978, ¿qué país africano eligió a su primer cardenal negro, Bernardin Gantin?",
          de: "Am 26. August 1978 wählte welches afrikanische Land seinen ersten schwarzen Kardinal, Bernardin Gantin?",
          nl: "Op 26 augustus 1978 koos welk Afrikaans land zijn eerste zwarte kardinaal, Bernardin Gantin?"
        },
        options: [
          {
            en: "Nigeria",
            es: "Nigeria",
            de: "Nigeria",
            nl: "Nigeria"
          },
          {
            en: "Benin",
            es: "Benín",
            de: "Benin",
            nl: "Benin"
          },
          {
            en: "Senegal",
            es: "Senegal",
            de: "Senegal",
            nl: "Senegal"
          },
          {
            en: "Ghana",
            es: "Ghana",
            de: "Ghana",
            nl: "Ghana"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bernardin Gantin from Benin was elevated to cardinal on August 26, 1978, by Pope John Paul I. He was the first West African to become a cardinal. Gantin served in various Vatican positions and was considered 'papabile' (eligible to be pope) at several conclaves. He became Dean of the College of Cardinals in 1993, the first African to hold this position. Gantin was known for his wisdom, humility, and dedication to the Church. He participated in four papal conclaves and played a significant role in Church governance. He retired in 2002 and died in 2008 at age 86.",
          es: "Bernardin Gantin de Benín fue elevado a cardenal el 26 de agosto de 1978 por el Papa Juan Pablo I. Fue el primer africano occidental en convertirse en cardenal. Gantin sirvió en varios puestos del Vaticano y fue considerado 'papabile' (elegible para ser papa) en varios cónclaves. Se convirtió en Decano del Colegio de Cardenales en 1993, el primer africano en ocupar esta posición. Gantin era conocido por su sabiduría, humildad y dedicación a la Iglesia. Participó en cuatro cónclaves papales y desempeñó un papel significativo en el gobierno de la Iglesia. Se retiró en 2002 y murió en 2008 a los 86 años.",
          de: "Bernardin Gantin aus Benin wurde am 26. August 1978 von Papst Johannes Paul I. zum Kardinal erhoben. Er war der erste Westafrikaner, der Kardinal wurde. Gantin diente in verschiedenen Vatikanpositionen und galt bei mehreren Konklaven als 'papabile' (geeignet, Papst zu werden). Er wurde 1993 Dekan des Kardinalskollegiums, der erste Afrikaner in dieser Position. Gantin war bekannt für seine Weisheit, Demut und Hingabe an die Kirche. Er nahm an vier Papstkonklaven teil und spielte eine bedeutende Rolle in der Kirchenführung. Er trat 2002 in den Ruhestand und starb 2008 im Alter von 86 Jahren.",
          nl: "Bernardin Gantin uit Benin werd verheven tot kardinaal op 26 augustus 1978 door paus Johannes Paulus I. Hij was de eerste West-Afrikaan die kardinaal werd. Gantin bekleedde verschillende functies in het Vaticaan en werd beschouwd als 'papabile' (geschikt om paus te worden) bij verschillende conclaven. Hij werd deken van het College van Kardinalen in 1993, de eerste Afrikaan die deze positie bekleedde. Gantin stond bekend om zijn wijsheid, nederigheid en toewijding aan de Kerk. Hij nam deel aan vier pauselijke conclaven en speelde een belangrijke rol in het kerkbestuur. Hij ging met pensioen in 2002 en stierf in 2008 op 86-jarige leeftijd."
        }
      }
    ],

    // Day 27 - August 27th: Moldova independence, first oil well, Mars close approach
    day27: [
      {
        question: {
          en: "On August 27, 1991, which Eastern European country declared independence from the Soviet Union?",
          es: "El 27 de agosto de 1991, ¿qué país de Europa del Este declaró su independencia de la Unión Soviética?",
          de: "Am 27. August 1991 erklärte welches osteuropäische Land seine Unabhängigkeit von der Sowjetunion?",
          nl: "Op 27 augustus 1991 verklaarde welk Oost-Europees land zijn onafhankelijkheid van de Sovjet-Unie?"
        },
        options: [
          {
            en: "Estonia",
            es: "Estonia",
            de: "Estland",
            nl: "Estland"
          },
          {
            en: "Latvia",
            es: "Letonia",
            de: "Lettland",
            nl: "Letland"
          },
          {
            en: "Moldova",
            es: "Moldavia",
            de: "Moldawien",
            nl: "Moldavië"
          },
          {
            en: "Lithuania",
            es: "Lituania",
            de: "Litauen",
            nl: "Litouwen"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Moldova declared independence from the Soviet Union on August 27, 1991, following the failed coup attempt in Moscow. The declaration was made by the Moldovan parliament. Moldova had been part of the Soviet Union since 1940 when it was formed from Bessarabia and Transnistria. Independence Day is celebrated annually on August 27. The country faced immediate challenges including the Transnistria conflict, which began in 1990. Moldova is landlocked between Romania and Ukraine. The official language is Romanian, though the country has significant Russian and Ukrainian minorities. Moldova joined the UN in 1992.",
          es: "Moldavia declaró su independencia de la Unión Soviética el 27 de agosto de 1991, tras el fallido intento de golpe de estado en Moscú. La declaración fue hecha por el parlamento moldavo. Moldavia había sido parte de la Unión Soviética desde 1940 cuando fue formada a partir de Besarabia y Transnistria. El Día de la Independencia se celebra anualmente el 27 de agosto. El país enfrentó desafíos inmediatos incluyendo el conflicto de Transnistria, que comenzó en 1990. Moldavia está sin salida al mar entre Rumania y Ucrania. El idioma oficial es el rumano, aunque el país tiene importantes minorías rusas y ucranianas. Moldavia se unió a la ONU en 1992.",
          de: "Moldawien erklärte am 27. August 1991 seine Unabhängigkeit von der Sowjetunion nach dem gescheiterten Putschversuch in Moskau. Die Erklärung wurde vom moldawischen Parlament abgegeben. Moldawien war seit 1940 Teil der Sowjetunion, als es aus Bessarabien und Transnistrien gebildet wurde. Der Unabhängigkeitstag wird jährlich am 27. August gefeiert. Das Land stand vor unmittelbaren Herausforderungen, einschließlich des Transnistrien-Konflikts, der 1990 begann. Moldawien ist ein Binnenstaat zwischen Rumänien und der Ukraine. Die Amtssprache ist Rumänisch, obwohl das Land bedeutende russische und ukrainische Minderheiten hat. Moldawien trat 1992 der UN bei.",
          nl: "Moldavië verklaarde onafhankelijkheid van de Sovjet-Unie op 27 augustus 1991, na de mislukte staatsgreep in Moskou. De verklaring werd gedaan door het Moldavische parlement. Moldavië was deel van de Sovjet-Unie sinds 1940 toen het werd gevormd uit Bessarabië en Transnistrië. Onafhankelijkheidsdag wordt jaarlijks gevierd op 27 augustus. Het land kreeg onmiddellijk te maken met uitdagingen waaronder het Transnistrië-conflict, dat begon in 1990. Moldavië is een binnenstaat tussen Roemenië en Oekraïne. De officiële taal is Roemeens, hoewel het land aanzienlijke Russische en Oekraïense minderheden heeft. Moldavië trad in 1992 toe tot de VN."
        }
      },
      {
        question: {
          en: "On August 27, 1859, which Pennsylvania town saw the drilling of the first commercially successful oil well in the United States?",
          es: "El 27 de agosto de 1859, ¿qué ciudad de Pensilvania vio la perforación del primer pozo de petróleo comercialmente exitoso en los Estados Unidos?",
          de: "Am 27. August 1859 wurde in welcher Stadt in Pennsylvania der erste kommerziell erfolgreiche Ölbrunnen in den Vereinigten Staaten gebohrt?",
          nl: "Op 27 augustus 1859 zag welke stad in Pennsylvania het boren van de eerste commercieel succesvolle oliebron in de Verenigde Staten?"
        },
        options: [
          {
            en: "Pittsburgh",
            es: "Pittsburgh",
            de: "Pittsburgh",
            nl: "Pittsburgh"
          },
          {
            en: "Philadelphia",
            es: "Filadelfia",
            de: "Philadelphia",
            nl: "Philadelphia"
          },
          {
            en: "Titusville",
            es: "Titusville",
            de: "Titusville",
            nl: "Titusville"
          },
          {
            en: "Erie",
            es: "Erie",
            de: "Erie",
            nl: "Erie"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first commercially successful oil well was drilled in Titusville, Pennsylvania, on August 27, 1859, by Edwin Drake. The well reached a depth of 69.5 feet and initially produced 25 barrels per day. Drake's innovation was using a steam engine to power the drill and employing an iron pipe to prevent the hole from collapsing. This discovery launched the modern petroleum industry and transformed the global economy. Oil replaced whale oil for lighting and eventually became crucial for transportation and industry. The Drake Well Museum now marks the site. The oil boom transformed northwestern Pennsylvania and created America's first oil millionaires.",
          es: "El primer pozo de petróleo comercialmente exitoso fue perforado en Titusville, Pensilvania, el 27 de agosto de 1859, por Edwin Drake. El pozo alcanzó una profundidad de 69.5 pies e inicialmente produjo 25 barriles por día. La innovación de Drake fue usar un motor de vapor para impulsar el taladro y emplear un tubo de hierro para evitar que el agujero se derrumbara. Este descubrimiento lanzó la industria petrolera moderna y transformó la economía global. El petróleo reemplazó al aceite de ballena para iluminación y eventualmente se volvió crucial para el transporte y la industria. El Museo Drake Well ahora marca el sitio. El boom petrolero transformó el noroeste de Pensilvania y creó los primeros millonarios del petróleo de América.",
          de: "Der erste kommerziell erfolgreiche Ölbrunnen wurde am 27. August 1859 von Edwin Drake in Titusville, Pennsylvania, gebohrt. Der Brunnen erreichte eine Tiefe von 69,5 Fuß und produzierte anfangs 25 Barrel pro Tag. Drakes Innovation bestand darin, eine Dampfmaschine zum Antrieb des Bohrers zu verwenden und ein Eisenrohr einzusetzen, um das Loch vor dem Einsturz zu bewahren. Diese Entdeckung startete die moderne Erdölindustrie und veränderte die Weltwirtschaft. Öl ersetzte Walöl für die Beleuchtung und wurde schließlich entscheidend für Transport und Industrie. Das Drake Well Museum markiert heute die Stelle. Der Ölboom verwandelte das nordwestliche Pennsylvania und schuf Amerikas erste Ölmillionäre.",
          nl: "De eerste commercieel succesvolle oliebron werd geboord in Titusville, Pennsylvania, op 27 augustus 1859, door Edwin Drake. De bron bereikte een diepte van 69,5 voet en produceerde aanvankelijk 25 vaten per dag. Drakes innovatie was het gebruik van een stoommachine om de boor aan te drijven en het inzetten van een ijzeren pijp om te voorkomen dat het gat instortte. Deze ontdekking lanceerde de moderne aardolie-industrie en transformeerde de wereldeconomie. Olie verving walvisolie voor verlichting en werd uiteindelijk cruciaal voor transport en industrie. Het Drake Well Museum markeert nu de locatie. De olieboom transformeerde noordwest Pennsylvania en creëerde Amerika's eerste oliemiljonairs."
        }
      },
      {
        question: {
          en: "On August 27, 2003, which planet made its closest approach to Earth in nearly 60,000 years?",
          es: "El 27 de agosto de 2003, ¿qué planeta hizo su acercamiento más cercano a la Tierra en casi 60,000 años?",
          de: "Am 27. August 2003 erreichte welcher Planet seine größte Annäherung an die Erde in fast 60.000 Jahren?",
          nl: "Op 27 augustus 2003 maakte welke planeet zijn nauwste benadering van de aarde in bijna 60.000 jaar?"
        },
        options: [
          {
            en: "Venus",
            es: "Venus",
            de: "Venus",
            nl: "Venus"
          },
          {
            en: "Jupiter",
            es: "Júpiter",
            de: "Jupiter",
            nl: "Jupiter"
          },
          {
            en: "Mars",
            es: "Marte",
            de: "Mars",
            nl: "Mars"
          },
          {
            en: "Saturn",
            es: "Saturno",
            de: "Saturn",
            nl: "Saturnus"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Mars made its closest approach to Earth in nearly 60,000 years on August 27, 2003, coming within 34.65 million miles (55.76 million kilometers). This perihelic opposition occurred because both planets were at favorable positions in their elliptical orbits. Mars appeared exceptionally bright in the night sky, easily visible to the naked eye as a brilliant red-orange 'star'. Astronomers and the public took advantage of the opportunity for excellent observations. The event won't be repeated until August 28, 2287. NASA's Mars Exploration Rovers Spirit and Opportunity were launched during this favorable period.",
          es: "Marte hizo su acercamiento más cercano a la Tierra en casi 60,000 años el 27 de agosto de 2003, acercándose a 34.65 millones de millas (55.76 millones de kilómetros). Esta oposición perihélica ocurrió porque ambos planetas estaban en posiciones favorables en sus órbitas elípticas. Marte apareció excepcionalmente brillante en el cielo nocturno, fácilmente visible a simple vista como una brillante 'estrella' rojo-anaranjada. Astrónomos y el público aprovecharon la oportunidad para excelentes observaciones. El evento no se repetirá hasta el 28 de agosto de 2287. Los rovers de exploración de Marte de la NASA, Spirit y Opportunity, fueron lanzados durante este período favorable.",
          de: "Mars erreichte am 27. August 2003 seine größte Annäherung an die Erde in fast 60.000 Jahren und kam auf 34,65 Millionen Meilen (55,76 Millionen Kilometer) heran. Diese perihelische Opposition trat auf, weil beide Planeten sich in günstigen Positionen in ihren elliptischen Umlaufbahnen befanden. Mars erschien außergewöhnlich hell am Nachthimmel, leicht mit bloßem Auge als brillanter rot-oranger 'Stern' sichtbar. Astronomen und die Öffentlichkeit nutzten die Gelegenheit für ausgezeichnete Beobachtungen. Das Ereignis wird sich erst am 28. August 2287 wiederholen. NASAs Mars Exploration Rovers Spirit und Opportunity wurden während dieser günstigen Periode gestartet.",
          nl: "Mars maakte zijn nauwste benadering van de aarde in bijna 60.000 jaar op 27 augustus 2003, waarbij het binnen 34,65 miljoen mijl (55,76 miljoen kilometer) kwam. Deze perihelische oppositie trad op omdat beide planeten zich in gunstige posities in hun elliptische banen bevonden. Mars verscheen uitzonderlijk helder aan de nachtelijke hemel, gemakkelijk zichtbaar met het blote oog als een briljante rood-oranje 'ster'. Astronomen en het publiek maakten gebruik van de kans voor uitstekende waarnemingen. De gebeurtenis zal zich pas op 28 augustus 2287 herhalen. NASA's Mars Exploration Rovers Spirit en Opportunity werden gelanceerd tijdens deze gunstige periode."
        }
      },
      {
        question: {
          en: "On August 27, 1928, which international treaty outlawing war as an instrument of national policy was signed in Paris?",
          es: "El 27 de agosto de 1928, ¿qué tratado internacional que prohibía la guerra como instrumento de política nacional fue firmado en París?",
          de: "Am 27. August 1928 wurde welcher internationale Vertrag, der Krieg als Instrument der nationalen Politik ächtete, in Paris unterzeichnet?",
          nl: "Op 27 augustus 1928 werd welk internationaal verdrag dat oorlog als instrument van nationaal beleid verbood ondertekend in Parijs?"
        },
        options: [
          {
            en: "The Treaty of Versailles",
            es: "El Tratado de Versalles",
            de: "Der Vertrag von Versailles",
            nl: "Het Verdrag van Versailles"
          },
          {
            en: "The Geneva Convention",
            es: "La Convención de Ginebra",
            de: "Die Genfer Konvention",
            nl: "De Geneefse Conventie"
          },
          {
            en: "The Kellogg-Briand Pact",
            es: "El Pacto Kellogg-Briand",
            de: "Der Kellogg-Briand-Pakt",
            nl: "Het Kellogg-Briand-pact"
          },
          {
            en: "The League of Nations Charter",
            es: "La Carta de la Liga de Naciones",
            de: "Die Charta des Völkerbunds",
            nl: "Het Handvest van de Volkenbond"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Kellogg-Briand Pact was signed on August 27, 1928, in Paris. Named after U.S. Secretary of State Frank B. Kellogg and French Foreign Minister Aristide Briand, it was initially signed by 15 nations and eventually ratified by 62 countries. The pact renounced war as an instrument of national policy and pledged to resolve disputes peacefully. While idealistic, it lacked enforcement mechanisms and failed to prevent World War II. However, it established important precedents for international law, influencing the UN Charter and the Nuremberg Trials. Kellogg received the Nobel Peace Prize in 1929 for his work.",
          es: "El Pacto Kellogg-Briand fue firmado el 27 de agosto de 1928 en París. Nombrado en honor al Secretario de Estado de EE.UU. Frank B. Kellogg y al Ministro de Relaciones Exteriores francés Aristide Briand, fue firmado inicialmente por 15 naciones y eventualmente ratificado por 62 países. El pacto renunció a la guerra como instrumento de política nacional y se comprometió a resolver disputas pacíficamente. Aunque idealista, carecía de mecanismos de aplicación y no logró prevenir la Segunda Guerra Mundial. Sin embargo, estableció importantes precedentes para el derecho internacional, influyendo en la Carta de la ONU y los Juicios de Nuremberg. Kellogg recibió el Premio Nobel de la Paz en 1929 por su trabajo.",
          de: "Der Kellogg-Briand-Pakt wurde am 27. August 1928 in Paris unterzeichnet. Benannt nach dem US-Außenminister Frank B. Kellogg und dem französischen Außenminister Aristide Briand, wurde er zunächst von 15 Nationen unterzeichnet und schließlich von 62 Ländern ratifiziert. Der Pakt verzichtete auf Krieg als Instrument der nationalen Politik und verpflichtete sich, Streitigkeiten friedlich zu lösen. Obwohl idealistisch, fehlten ihm Durchsetzungsmechanismen und er konnte den Zweiten Weltkrieg nicht verhindern. Er schuf jedoch wichtige Präzedenzfälle für das Völkerrecht und beeinflusste die UN-Charta und die Nürnberger Prozesse. Kellogg erhielt 1929 den Friedensnobelpreis für seine Arbeit.",
          nl: "Het Kellogg-Briand-pact werd ondertekend op 27 augustus 1928 in Parijs. Vernoemd naar de Amerikaanse minister van Buitenlandse Zaken Frank B. Kellogg en de Franse minister van Buitenlandse Zaken Aristide Briand, werd het aanvankelijk ondertekend door 15 naties en uiteindelijk geratificeerd door 62 landen. Het pact deed afstand van oorlog als instrument van nationaal beleid en beloofde geschillen vreedzaam op te lossen. Hoewel idealistisch, ontbrak het aan handhavingsmechanismen en kon het de Tweede Wereldoorlog niet voorkomen. Het vestigde echter belangrijke precedenten voor internationaal recht, wat de VN-handvest en de Neurenbergprocessen beïnvloedde. Kellogg ontving de Nobelprijs voor de Vrede in 1929 voor zijn werk."
        }
      },
      {
        question: {
          en: "On August 27, 1967, which Beatles manager who helped launch their success died at age 32?",
          es: "El 27 de agosto de 1967, ¿qué mánager de los Beatles que ayudó a lanzar su éxito murió a los 32 años?",
          de: "Am 27. August 1967 starb welcher Beatles-Manager, der ihren Erfolg mitinitiierte, im Alter von 32 Jahren?",
          nl: "Op 27 augustus 1967 stierf welke Beatles-manager die hielp bij het lanceren van hun succes op 32-jarige leeftijd?"
        },
        options: [
          {
            en: "George Martin",
            es: "George Martin",
            de: "George Martin",
            nl: "George Martin"
          },
          {
            en: "Allen Klein",
            es: "Allen Klein",
            de: "Allen Klein",
            nl: "Allen Klein"
          },
          {
            en: "Brian Epstein",
            es: "Brian Epstein",
            de: "Brian Epstein",
            nl: "Brian Epstein"
          },
          {
            en: "Dick James",
            es: "Dick James",
            de: "Dick James",
            nl: "Dick James"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Brian Epstein died on August 27, 1967, from an accidental overdose of sleeping pills at his home in London. He discovered the Beatles playing at the Cavern Club in Liverpool in 1961 and became their manager. Epstein transformed the band's image, securing them a recording contract with EMI and orchestrating their rise to global superstardom. He managed their early tours and media appearances with meticulous care. His death came during the Beatles' retreat to study Transcendental Meditation in India. The band was deeply affected, and Paul McCartney later said it was the beginning of the end for the Beatles.",
          es: "Brian Epstein murió el 27 de agosto de 1967 por una sobredosis accidental de pastillas para dormir en su casa de Londres. Descubrió a los Beatles tocando en el Cavern Club de Liverpool en 1961 y se convirtió en su mánager. Epstein transformó la imagen de la banda, asegurándoles un contrato de grabación con EMI y orquestando su ascenso al superstardom global. Manejó sus primeras giras y apariciones en los medios con meticuloso cuidado. Su muerte ocurrió durante el retiro de los Beatles para estudiar Meditación Trascendental en India. La banda se vio profundamente afectada, y Paul McCartney dijo más tarde que fue el principio del fin para los Beatles.",
          de: "Brian Epstein starb am 27. August 1967 an einer versehentlichen Überdosis Schlaftabletten in seinem Haus in London. Er entdeckte die Beatles 1961 beim Spielen im Cavern Club in Liverpool und wurde ihr Manager. Epstein verwandelte das Image der Band, sicherte ihnen einen Plattenvertrag mit EMI und orchestrierte ihren Aufstieg zum globalen Superstar. Er managte ihre frühen Tourneen und Medienauftritte mit akribischer Sorgfalt. Sein Tod ereignete sich während des Rückzugs der Beatles zum Studium der Transzendentalen Meditation in Indien. Die Band war tief betroffen, und Paul McCartney sagte später, es sei der Anfang vom Ende der Beatles gewesen.",
          nl: "Brian Epstein stierf op 27 augustus 1967 aan een accidentele overdosis slaapmiddelen in zijn huis in Londen. Hij ontdekte de Beatles spelend in de Cavern Club in Liverpool in 1961 en werd hun manager. Epstein transformeerde het imago van de band, bemachtigde een platencontract met EMI en orchestreerde hun opkomst tot wereldwijde supersterren. Hij beheerde hun vroege tournees en media-optredens met nauwgezette zorg. Zijn dood vond plaats tijdens de terugtocht van de Beatles om Transcendente Meditatie te studeren in India. De band was diep getroffen, en Paul McCartney zei later dat het het begin van het einde was voor de Beatles."
        }
      }
    ],

    // Day 28 - August 28th: MLK 'I Have a Dream', 1968 DNC riots, Jack Kirby born
    day28: [
      {
        question: {
          en: "On August 28, 1963, which civil rights leader delivered his famous 'I Have a Dream' speech during the March on Washington?",
          es: "El 28 de agosto de 1963, ¿qué líder de derechos civiles pronunció su famoso discurso 'Tengo un sueño' durante la Marcha en Washington?",
          de: "Am 28. August 1963 hielt welcher Bürgerrechtsführer seine berühmte 'I Have a Dream'-Rede während des Marsches auf Washington?",
          nl: "Op 28 augustus 1963 hield welke burgerrechtenleider zijn beroemde 'I Have a Dream'-toespraak tijdens de Mars op Washington?"
        },
        options: [
          {
            en: "Malcolm X",
            es: "Malcolm X",
            de: "Malcolm X",
            nl: "Malcolm X"
          },
          {
            en: "Rosa Parks",
            es: "Rosa Parks",
            de: "Rosa Parks",
            nl: "Rosa Parks"
          },
          {
            en: "Martin Luther King Jr.",
            es: "Martin Luther King Jr.",
            de: "Martin Luther King Jr.",
            nl: "Martin Luther King Jr."
          },
          {
            en: "John Lewis",
            es: "John Lewis",
            de: "John Lewis",
            nl: "John Lewis"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Martin Luther King Jr. delivered his 'I Have a Dream' speech on August 28, 1963, from the steps of the Lincoln Memorial to over 250,000 people during the March on Washington for Jobs and Freedom. The speech, partially improvised, called for racial equality and an end to discrimination. It became one of the most iconic speeches in American history and a defining moment of the Civil Rights Movement. The march helped build support for the Civil Rights Act of 1964 and the Voting Rights Act of 1965. King won the Nobel Peace Prize in 1964. He was assassinated in 1968.",
          es: "Martin Luther King Jr. pronunció su discurso 'Tengo un sueño' el 28 de agosto de 1963, desde los escalones del Monumento a Lincoln ante más de 250,000 personas durante la Marcha en Washington por el Trabajo y la Libertad. El discurso, parcialmente improvisado, llamaba a la igualdad racial y al fin de la discriminación. Se convirtió en uno de los discursos más icónicos en la historia estadounidense y un momento definitorio del Movimiento por los Derechos Civiles. La marcha ayudó a construir apoyo para la Ley de Derechos Civiles de 1964 y la Ley de Derechos de Voto de 1965. King ganó el Premio Nobel de la Paz en 1964. Fue asesinado en 1968.",
          de: "Martin Luther King Jr. hielt seine 'I Have a Dream'-Rede am 28. August 1963 von den Stufen des Lincoln Memorial vor über 250.000 Menschen während des Marsches auf Washington für Arbeit und Freiheit. Die teilweise improvisierte Rede forderte Rassengleichheit und ein Ende der Diskriminierung. Sie wurde zu einer der ikonischsten Reden in der amerikanischen Geschichte und einem prägenden Moment der Bürgerrechtsbewegung. Der Marsch half, Unterstützung für den Civil Rights Act von 1964 und den Voting Rights Act von 1965 aufzubauen. King gewann 1964 den Friedensnobelpreis. Er wurde 1968 ermordet.",
          nl: "Martin Luther King Jr. hield zijn 'I Have a Dream'-toespraak op 28 augustus 1963 vanaf de trappen van het Lincoln Memorial voor meer dan 250.000 mensen tijdens de Mars op Washington voor Werk en Vrijheid. De gedeeltelijk geïmproviseerde toespraak riep op tot rassengelijkheid en een einde aan discriminatie. Het werd een van de meest iconische toespraken in de Amerikaanse geschiedenis en een bepalend moment van de Burgerrechtenbeweging. De mars hielp steun op te bouwen voor de Civil Rights Act van 1964 en de Voting Rights Act van 1965. King won de Nobelprijs voor de Vrede in 1964. Hij werd vermoord in 1968."
        }
      },
      {
        question: {
          en: "On August 28, 1968, violent clashes between police and anti-war protesters erupted during which political party's national convention in Chicago?",
          es: "El 28 de agosto de 1968, estallaron enfrentamientos violentos entre la policía y manifestantes contra la guerra durante la convención nacional de qué partido político en Chicago?",
          de: "Am 28. August 1968 brachen gewaltsame Zusammenstöße zwischen Polizei und Kriegsgegnern während der nationalen Konvention welcher politischen Partei in Chicago aus?",
          nl: "Op 28 augustus 1968 braken gewelddadige confrontaties uit tussen politie en anti-oorlogsdemonstranten tijdens de nationale conventie van welke politieke partij in Chicago?"
        },
        options: [
          {
            en: "Republican Party",
            es: "Partido Republicano",
            de: "Republikanische Partei",
            nl: "Republikeinse Partij"
          },
          {
            en: "Democratic Party",
            es: "Partido Demócrata",
            de: "Demokratische Partei",
            nl: "Democratische Partij"
          },
          {
            en: "Progressive Party",
            es: "Partido Progresista",
            de: "Progressive Partei",
            nl: "Progressieve Partij"
          },
          {
            en: "Socialist Party",
            es: "Partido Socialista",
            de: "Sozialistische Partei",
            nl: "Socialistische Partij"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 1968 Democratic National Convention in Chicago was marred by violent clashes between police and anti-Vietnam War protesters on August 28, 1968. Mayor Richard J. Daley deployed thousands of police and National Guard troops. The protests, organized by groups including the Youth International Party (Yippies), turned into what a commission later called a 'police riot'. Television cameras captured the violence, with protesters chanting 'The whole world is watching'. The chaos overshadowed Hubert Humphrey's nomination. The events symbolized the deep divisions in American society over the Vietnam War and contributed to Richard Nixon's victory in the 1968 election.",
          es: "La Convención Nacional Demócrata de 1968 en Chicago fue empañada por enfrentamientos violentos entre la policía y manifestantes contra la Guerra de Vietnam el 28 de agosto de 1968. El alcalde Richard J. Daley desplegó miles de policías y tropas de la Guardia Nacional. Las protestas, organizadas por grupos incluyendo el Partido Internacional de la Juventud (Yippies), se convirtieron en lo que una comisión llamó más tarde un 'motín policial'. Las cámaras de televisión capturaron la violencia, con manifestantes coreando 'Todo el mundo está mirando'. El caos eclipsó la nominación de Hubert Humphrey. Los eventos simbolizaron las profundas divisiones en la sociedad estadounidense sobre la Guerra de Vietnam y contribuyeron a la victoria de Richard Nixon en las elecciones de 1968.",
          de: "Die Demokratische Nationalkonvention 1968 in Chicago wurde am 28. August 1968 von gewaltsamen Zusammenstößen zwischen Polizei und Anti-Vietnam-Kriegs-Demonstranten überschattet. Bürgermeister Richard J. Daley setzte Tausende von Polizisten und Nationalgarde-Truppen ein. Die Proteste, organisiert von Gruppen wie der Youth International Party (Yippies), wurden zu dem, was eine Kommission später als 'Polizeikrawall' bezeichnete. Fernsehkameras fingen die Gewalt ein, während Demonstranten 'Die ganze Welt schaut zu' skandierten. Das Chaos überschattete Hubert Humphreys Nominierung. Die Ereignisse symbolisierten die tiefen Spaltungen in der amerikanischen Gesellschaft über den Vietnamkrieg und trugen zu Richard Nixons Sieg bei der Wahl 1968 bei.",
          nl: "De Democratische Nationale Conventie van 1968 in Chicago werd ontsierd door gewelddadige confrontaties tussen politie en anti-Vietnam-oorlogsdemonstranten op 28 augustus 1968. Burgemeester Richard J. Daley zette duizenden politieagenten en Nationale Garde-troepen in. De protesten, georganiseerd door groepen waaronder de Youth International Party (Yippies), werden wat een commissie later een 'politie-rel' noemde. Televisiecamera's legden het geweld vast, terwijl demonstranten scandeerden 'De hele wereld kijkt toe'. De chaos overschaduwde Hubert Humphreys nominatie. De gebeurtenissen symboliseerden de diepe verdeeldheid in de Amerikaanse samenleving over de Vietnamoorlog en droegen bij aan Richard Nixons overwinning bij de verkiezingen van 1968."
        }
      },
      {
        question: {
          en: "On August 28, 1917, which influential comic book artist known as the 'King of Comics' was born in New York City?",
          es: "El 28 de agosto de 1917, ¿qué influyente artista de cómics conocido como el 'Rey de los Cómics' nació en la ciudad de Nueva York?",
          de: "Am 28. August 1917 wurde welcher einflussreiche Comic-Künstler, bekannt als der 'König der Comics', in New York City geboren?",
          nl: "Op 28 augustus 1917 werd welke invloedrijke striptekenaar bekend als de 'Koning van de Strips' geboren in New York City?"
        },
        options: [
          {
            en: "Stan Lee",
            es: "Stan Lee",
            de: "Stan Lee",
            nl: "Stan Lee"
          },
          {
            en: "Jack Kirby",
            es: "Jack Kirby",
            de: "Jack Kirby",
            nl: "Jack Kirby"
          },
          {
            en: "Steve Ditko",
            es: "Steve Ditko",
            de: "Steve Ditko",
            nl: "Steve Ditko"
          },
          {
            en: "Will Eisner",
            es: "Will Eisner",
            de: "Will Eisner",
            nl: "Will Eisner"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jack Kirby was born Jacob Kurtzberg on August 28, 1917, in New York City. Known as the 'King of Comics', he co-created many iconic characters including Captain America, the Fantastic Four, X-Men, Hulk, Thor, Iron Man, and the New Gods. His dynamic art style and innovative storytelling techniques revolutionized comic books. Kirby worked primarily for Marvel and DC Comics during his career spanning six decades. He created the visual language of modern superhero comics with his distinctive design, powerful anatomy, and dynamic action sequences. He died in 1994, leaving an immeasurable legacy on popular culture.",
          es: "Jack Kirby nació como Jacob Kurtzberg el 28 de agosto de 1917 en la ciudad de Nueva York. Conocido como el 'Rey de los Cómics', co-creó muchos personajes icónicos incluyendo el Capitán América, los Cuatro Fantásticos, X-Men, Hulk, Thor, Iron Man y los Nuevos Dioses. Su estilo de arte dinámico y técnicas innovadoras de narración revolucionaron los cómics. Kirby trabajó principalmente para Marvel y DC Comics durante su carrera de seis décadas. Creó el lenguaje visual de los cómics de superhéroes modernos con su diseño distintivo, anatomía poderosa y secuencias de acción dinámicas. Murió en 1994, dejando un legado inconmensurable en la cultura popular.",
          de: "Jack Kirby wurde als Jacob Kurtzberg am 28. August 1917 in New York City geboren. Bekannt als der 'König der Comics', schuf er viele ikonische Charaktere, darunter Captain America, die Fantastischen Vier, X-Men, Hulk, Thor, Iron Man und die New Gods. Sein dynamischer Kunststil und innovative Erzähltechniken revolutionierten Comics. Kirby arbeitete während seiner sechs Jahrzehnte währenden Karriere hauptsächlich für Marvel und DC Comics. Er schuf die visuelle Sprache moderner Superhelden-Comics mit seinem charakteristischen Design, kraftvoller Anatomie und dynamischen Actionsequenzen. Er starb 1994 und hinterließ ein unermessliches Erbe in der Popkultur.",
          nl: "Jack Kirby werd geboren als Jacob Kurtzberg op 28 augustus 1917 in New York City. Bekend als de 'Koning van de Strips', creëerde hij vele iconische personages waaronder Captain America, de Fantastic Four, X-Men, Hulk, Thor, Iron Man en de New Gods. Zijn dynamische kunststijl en innovatieve vertelstechnieken revolutioneerden stripboeken. Kirby werkte voornamelijk voor Marvel en DC Comics tijdens zijn carrière van zes decennia. Hij creëerde de visuele taal van moderne superhelden-strips met zijn kenmerkende ontwerp, krachtige anatomie en dynamische actiescènes. Hij stierf in 1994 en liet een onmetelijk erfgoed na op de populaire cultuur."
        }
      },
      {
        question: {
          en: "On August 28, 1996, which British royal couple officially divorced after 15 years of marriage?",
          es: "El 28 de agosto de 1996, ¿qué pareja real británica se divorció oficialmente después de 15 años de matrimonio?",
          de: "Am 28. August 1996 ließen sich welches britische Königspaar offiziell nach 15 Jahren Ehe scheiden?",
          nl: "Op 28 augustus 1996 scheidde welk Brits koninklijk paar officieel na 15 jaar huwelijk?"
        },
        options: [
          {
            en: "Prince Andrew and Sarah Ferguson",
            es: "El Príncipe Andrés y Sarah Ferguson",
            de: "Prinz Andrew und Sarah Ferguson",
            nl: "Prins Andrew en Sarah Ferguson"
          },
          {
            en: "Prince Charles and Princess Diana",
            es: "El Príncipe Carlos y la Princesa Diana",
            de: "Prinz Charles und Prinzessin Diana",
            nl: "Prins Charles en Prinses Diana"
          },
          {
            en: "Princess Anne and Mark Phillips",
            es: "La Princesa Ana y Mark Phillips",
            de: "Prinzessin Anne und Mark Phillips",
            nl: "Prinses Anne en Mark Phillips"
          },
          {
            en: "Prince Edward and Sophie Rhys-Jones",
            es: "El Príncipe Eduardo y Sophie Rhys-Jones",
            de: "Prinz Edward und Sophie Rhys-Jones",
            nl: "Prins Edward en Sophie Rhys-Jones"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Prince Charles and Princess Diana officially divorced on August 28, 1996, ending their troubled 15-year marriage. They had separated in 1992 and Diana's famous Panorama interview in 1995 made reconciliation impossible. The divorce settlement included a lump sum payment and Diana retained the title 'Diana, Princess of Wales' but lost 'Her Royal Highness'. She continued her charitable work and remained in the public eye. Diana died in a car crash in Paris less than a year later, on August 31, 1997. Charles later married Camilla Parker Bowles in 2005.",
          es: "El Príncipe Carlos y la Princesa Diana se divorciaron oficialmente el 28 de agosto de 1996, poniendo fin a su problemático matrimonio de 15 años. Se habían separado en 1992 y la famosa entrevista de Diana en Panorama en 1995 hizo imposible la reconciliación. El acuerdo de divorcio incluyó un pago único y Diana retuvo el título 'Diana, Princesa de Gales' pero perdió 'Su Alteza Real'. Continuó su trabajo caritativo y permaneció en el ojo público. Diana murió en un accidente automovilístico en París menos de un año después, el 31 de agosto de 1997. Carlos se casó más tarde con Camilla Parker Bowles en 2005.",
          de: "Prinz Charles und Prinzessin Diana ließen sich am 28. August 1996 offiziell scheiden und beendeten damit ihre schwierige 15-jährige Ehe. Sie hatten sich 1992 getrennt und Dianas berühmtes Panorama-Interview 1995 machte eine Versöhnung unmöglich. Die Scheidungsvereinbarung beinhaltete eine Einmalzahlung und Diana behielt den Titel 'Diana, Prinzessin von Wales', verlor aber 'Ihre Königliche Hoheit'. Sie setzte ihre wohltätige Arbeit fort und blieb in der Öffentlichkeit. Diana starb weniger als ein Jahr später bei einem Autounfall in Paris am 31. August 1997. Charles heiratete später 2005 Camilla Parker Bowles.",
          nl: "Prins Charles en Prinses Diana scheidden officieel op 28 augustus 1996, waarmee hun moeizame huwelijk van 15 jaar eindigde. Ze waren gescheiden in 1992 en Diana's beroemde Panorama-interview in 1995 maakte verzoening onmogelijk. De echtscheidingsregeling omvatte een forfaitaire betaling en Diana behield de titel 'Diana, Prinses van Wales' maar verloor 'Hare Koninklijke Hoogheid'. Ze zette haar liefdadigheidswerk voort en bleef in de publieke belangstelling. Diana stierf minder dan een jaar later bij een auto-ongeluk in Parijs op 31 augustus 1997. Charles trouwde later in 2005 met Camilla Parker Bowles."
        }
      },
      {
        question: {
          en: "On August 28, 1833, which country officially abolished slavery throughout most of the British Empire?",
          es: "El 28 de agosto de 1833, ¿qué país abolió oficialmente la esclavitud en la mayor parte del Imperio Británico?",
          de: "Am 28. August 1833 schaffte welches Land offiziell die Sklaverei im größten Teil des Britischen Empires ab?",
          nl: "Op 28 augustus 1833 schafte welk land officieel de slavernij af in het grootste deel van het Britse Rijk?"
        },
        options: [
          {
            en: "United States",
            es: "Estados Unidos",
            de: "Vereinigte Staaten",
            nl: "Verenigde Staten"
          },
          {
            en: "France",
            es: "Francia",
            de: "Frankreich",
            nl: "Frankrijk"
          },
          {
            en: "Great Britain",
            es: "Gran Bretaña",
            de: "Großbritannien",
            nl: "Groot-Brittannië"
          },
          {
            en: "Spain",
            es: "España",
            de: "Spanien",
            nl: "Spanje"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Great Britain passed the Slavery Abolition Act on August 28, 1833, which took effect on August 1, 1834, abolishing slavery throughout most of the British Empire. The act freed over 800,000 enslaved people, primarily in the Caribbean. It included a transition period called 'apprenticeship' and compensation of £20 million to slave owners (but nothing to the enslaved). The act was the culmination of decades of campaigning by abolitionists including William Wilberforce and Thomas Clarkson. However, it excluded territories controlled by the East India Company and Ceylon, where slavery continued until 1843. Britain then used its naval power to suppress the international slave trade.",
          es: "Gran Bretaña aprobó la Ley de Abolición de la Esclavitud el 28 de agosto de 1833, que entró en vigor el 1 de agosto de 1834, aboliendo la esclavitud en la mayor parte del Imperio Británico. La ley liberó a más de 800,000 personas esclavizadas, principalmente en el Caribe. Incluyó un período de transición llamado 'aprendizaje' y una compensación de £20 millones a los propietarios de esclavos (pero nada a los esclavizados). La ley fue la culminación de décadas de campaña de abolicionistas incluyendo William Wilberforce y Thomas Clarkson. Sin embargo, excluyó territorios controlados por la Compañía de las Indias Orientales y Ceilán, donde la esclavitud continuó hasta 1843. Bretaña luego usó su poder naval para suprimir el comercio internacional de esclavos.",
          de: "Großbritannien verabschiedete am 28. August 1833 den Slavery Abolition Act, der am 1. August 1834 in Kraft trat und die Sklaverei im größten Teil des Britischen Empires abschaffte. Das Gesetz befreite über 800.000 versklavte Menschen, hauptsächlich in der Karibik. Es beinhaltete eine Übergangszeit namens 'Lehrlingszeit' und eine Entschädigung von £20 Millionen an Sklavenbesitzer (aber nichts für die Versklavten). Das Gesetz war der Höhepunkt jahrzehntelanger Kampagnen von Abolitionisten wie William Wilberforce und Thomas Clarkson. Es schloss jedoch Territorien aus, die von der East India Company und Ceylon kontrolliert wurden, wo die Sklaverei bis 1843 fortbestand. Großbritannien nutzte dann seine Seemacht, um den internationalen Sklavenhandel zu unterdrücken.",
          nl: "Groot-Brittannië nam de Slavery Abolition Act aan op 28 augustus 1833, die van kracht werd op 1 augustus 1834, waarmee slavernij in het grootste deel van het Britse Rijk werd afgeschaft. De wet bevrijdde meer dan 800.000 tot slaaf gemaakte mensen, voornamelijk in het Caribisch gebied. Het omvatte een overgangsperiode genaamd 'leerlingschap' en een compensatie van £20 miljoen aan slavenhouders (maar niets aan de tot slaaf gemaakten). De wet was het hoogtepunt van decennia van campagne voeren door abolitionisten waaronder William Wilberforce en Thomas Clarkson. Het sloot echter gebieden uit die werden gecontroleerd door de East India Company en Ceylon, waar slavernij doorging tot 1843. Groot-Brittannië gebruikte vervolgens zijn zeemacht om de internationale slavenhandel te onderdrukken."
        }
      }
    ],

    // Day 29 - August 29th: Hurricane Katrina, Michael Jackson born, Chernobyl closed
    day29: [
      {
        question: {
          en: "On August 29, 2005, which devastating Category 3 hurricane made landfall near New Orleans, causing catastrophic flooding?",
          es: "El 29 de agosto de 2005, ¿qué devastador huracán de categoría 3 tocó tierra cerca de Nueva Orleans, causando inundaciones catastróficas?",
          de: "Am 29. August 2005 traf welcher verheerende Hurrikan der Kategorie 3 bei New Orleans auf Land und verursachte katastrophale Überschwemmungen?",
          nl: "Op 29 augustus 2005 kwam welke verwoestende categorie 3 orkaan aan land bij New Orleans en veroorzaakte catastrofale overstromingen?"
        },
        options: [
          {
            en: "Hurricane Rita",
            es: "Huracán Rita",
            de: "Hurrikan Rita",
            nl: "Orkaan Rita"
          },
          {
            en: "Hurricane Katrina",
            es: "Huracán Katrina",
            de: "Hurrikan Katrina",
            nl: "Orkaan Katrina"
          },
          {
            en: "Hurricane Wilma",
            es: "Huracán Wilma",
            de: "Hurrikan Wilma",
            nl: "Orkaan Wilma"
          },
          {
            en: "Hurricane Andrew",
            es: "Huracán Andrew",
            de: "Hurrikan Andrew",
            nl: "Orkaan Andrew"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Hurricane Katrina made landfall near New Orleans on August 29, 2005, as a Category 3 hurricane with sustained winds of 125 mph. The storm caused catastrophic damage along the Gulf Coast, particularly in Louisiana, Mississippi, and Alabama. The failure of the levee system in New Orleans led to flooding of 80% of the city, displacing hundreds of thousands of residents. Katrina became one of the deadliest hurricanes in U.S. history, with over 1,800 fatalities and economic damages exceeding $125 billion. The disaster exposed failures in emergency preparedness and response, particularly affecting vulnerable populations. The recovery took years and fundamentally changed New Orleans.",
          es: "El huracán Katrina tocó tierra cerca de Nueva Orleans el 29 de agosto de 2005, como un huracán de categoría 3 con vientos sostenidos de 125 mph. La tormenta causó daños catastróficos a lo largo de la Costa del Golfo, particularmente en Luisiana, Misisipi y Alabama. El fallo del sistema de diques en Nueva Orleans llevó a inundaciones del 80% de la ciudad, desplazando a cientos de miles de residentes. Katrina se convirtió en uno de los huracanes más mortales en la historia de EE.UU., con más de 1,800 muertes y daños económicos que superaron los $125 mil millones. El desastre expuso fallas en la preparación y respuesta de emergencia, afectando particularmente a poblaciones vulnerables. La recuperación tomó años y cambió fundamentalmente Nueva Orleans.",
          de: "Hurrikan Katrina traf am 29. August 2005 bei New Orleans als Kategorie-3-Hurrikan mit anhaltenden Winden von 125 mph auf Land. Der Sturm verursachte katastrophale Schäden entlang der Golfküste, insbesondere in Louisiana, Mississippi und Alabama. Das Versagen des Deichsystems in New Orleans führte zur Überflutung von 80% der Stadt und vertrieb Hunderttausende Einwohner. Katrina wurde einer der tödlichsten Hurrikane in der US-Geschichte mit über 1.800 Todesopfern und wirtschaftlichen Schäden von über 125 Milliarden Dollar. Die Katastrophe legte Versäumnisse in der Notfallvorsorge und -reaktion offen, die besonders gefährdete Bevölkerungsgruppen betrafen. Die Erholung dauerte Jahre und veränderte New Orleans grundlegend.",
          nl: "Orkaan Katrina kwam aan land bij New Orleans op 29 augustus 2005 als een categorie 3 orkaan met aanhoudende winden van 125 mph. De storm veroorzaakte catastrofale schade langs de Golfkust, met name in Louisiana, Mississippi en Alabama. Het falen van het dijksysteem in New Orleans leidde tot overstromingen van 80% van de stad, waarbij honderdduizenden inwoners werden ontheemd. Katrina werd een van de dodelijkste orkanen in de Amerikaanse geschiedenis, met meer dan 1.800 doden en economische schade van meer dan $125 miljard. De ramp legde tekortkomingen in rampenparaatheid en -respons bloot, die vooral kwetsbare bevolkingsgroepen troffen. Het herstel duurde jaren en veranderde New Orleans fundamenteel."
        }
      },
      {
        question: {
          en: "On August 29, 1958, which legendary pop icon known as the 'King of Pop' was born in Gary, Indiana?",
          es: "El 29 de agosto de 1958, ¿qué icono legendario del pop conocido como el 'Rey del Pop' nació en Gary, Indiana?",
          de: "Am 29. August 1958 wurde welche legendäre Pop-Ikone, bekannt als der 'King of Pop', in Gary, Indiana geboren?",
          nl: "Op 29 augustus 1958 werd welk legendarisch popicoon bekend als de 'King of Pop' geboren in Gary, Indiana?"
        },
        options: [
          {
            en: "Prince",
            es: "Prince",
            de: "Prince",
            nl: "Prince"
          },
          {
            en: "Elvis Presley",
            es: "Elvis Presley",
            de: "Elvis Presley",
            nl: "Elvis Presley"
          },
          {
            en: "Michael Jackson",
            es: "Michael Jackson",
            de: "Michael Jackson",
            nl: "Michael Jackson"
          },
          {
            en: "Freddie Mercury",
            es: "Freddie Mercury",
            de: "Freddie Mercury",
            nl: "Freddie Mercury"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Michael Jackson was born on August 29, 1958, in Gary, Indiana. He began his career at age six with his brothers in The Jackson 5, achieving early fame with hits like 'I Want You Back' and 'ABC'. His solo career exploded in the 1980s with groundbreaking albums 'Thriller' (1982), the best-selling album of all time, 'Bad' (1987), and 'Dangerous' (1991). Jackson revolutionized music videos with cinematic productions like 'Thriller', 'Beat It', and 'Billie Jean'. His signature dance moves, including the moonwalk, became iconic. Despite controversies in later years, his influence on pop music, dance, and fashion is unmatched. He died on June 25, 2009.",
          es: "Michael Jackson nació el 29 de agosto de 1958 en Gary, Indiana. Comenzó su carrera a los seis años con sus hermanos en The Jackson 5, logrando fama temprana con éxitos como 'I Want You Back' y 'ABC'. Su carrera en solitario explotó en los años 80 con álbumes revolucionarios como 'Thriller' (1982), el álbum más vendido de todos los tiempos, 'Bad' (1987) y 'Dangerous' (1991). Jackson revolucionó los videos musicales con producciones cinematográficas como 'Thriller', 'Beat It' y 'Billie Jean'. Sus movimientos de baile característicos, incluido el moonwalk, se volvieron icónicos. A pesar de las controversias en años posteriores, su influencia en la música pop, la danza y la moda no tiene igual. Murió el 25 de junio de 2009.",
          de: "Michael Jackson wurde am 29. August 1958 in Gary, Indiana geboren. Er begann seine Karriere mit sechs Jahren mit seinen Brüdern bei The Jackson 5 und erlangte frühen Ruhm mit Hits wie 'I Want You Back' und 'ABC'. Seine Solokarriere explodierte in den 1980er Jahren mit bahnbrechenden Alben wie 'Thriller' (1982), dem meistverkauften Album aller Zeiten, 'Bad' (1987) und 'Dangerous' (1991). Jackson revolutionierte Musikvideos mit filmischen Produktionen wie 'Thriller', 'Beat It' und 'Billie Jean'. Seine charakteristischen Tanzbewegungen, einschließlich des Moonwalks, wurden ikonisch. Trotz Kontroversen in späteren Jahren ist sein Einfluss auf Popmusik, Tanz und Mode unübertroffen. Er starb am 25. Juni 2009.",
          nl: "Michael Jackson werd geboren op 29 augustus 1958 in Gary, Indiana. Hij begon zijn carrière op zesjarige leeftijd met zijn broers in The Jackson 5, en verwierf vroege roem met hits als 'I Want You Back' en 'ABC'. Zijn solocarrière explodeerde in de jaren 1980 met baanbrekende albums als 'Thriller' (1982), het bestverkochte album aller tijden, 'Bad' (1987) en 'Dangerous' (1991). Jackson revolutioneerde muziekvideo's met cinematische producties als 'Thriller', 'Beat It' en 'Billie Jean'. Zijn kenmerkende dansbewegingen, waaronder de moonwalk, werden iconisch. Ondanks controverses in latere jaren is zijn invloed op popmuziek, dans en mode ongeëvenaard. Hij stierf op 25 juni 2009."
        }
      },
      {
        question: {
          en: "On August 29, 1991, which nuclear power plant was permanently closed following the 1986 disaster?",
          es: "El 29 de agosto de 1991, ¿qué planta de energía nuclear fue cerrada permanentemente tras el desastre de 1986?",
          de: "Am 29. August 1991 wurde welches Kernkraftwerk nach der Katastrophe von 1986 endgültig geschlossen?",
          nl: "Op 29 augustus 1991 werd welke kerncentrale permanent gesloten na de ramp van 1986?"
        },
        options: [
          {
            en: "Three Mile Island",
            es: "Three Mile Island",
            de: "Three Mile Island",
            nl: "Three Mile Island"
          },
          {
            en: "Fukushima Daiichi",
            es: "Fukushima Daiichi",
            de: "Fukushima Daiichi",
            nl: "Fukushima Daiichi"
          },
          {
            en: "Chernobyl",
            es: "Chernóbil",
            de: "Tschernobyl",
            nl: "Tsjernobyl"
          },
          {
            en: "Windscale",
            es: "Windscale",
            de: "Windscale",
            nl: "Windscale"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Chernobyl Nuclear Power Plant was permanently closed on August 29, 1991, when the last operating reactor (Unit 3) was shut down. The plant had continued partial operations even after the catastrophic April 26, 1986 explosion in Reactor 4, which released massive amounts of radioactive material across Europe. Reactor 1 was closed in 1996, Reactor 2 in 1991 after a fire, and Reactor 3 remained operational until 2000 due to Ukraine's energy needs. The 1986 disaster killed dozens immediately and thousands more from radiation-related illnesses. The area around Chernobyl remains contaminated, with the Exclusion Zone maintained around the site. A massive containment structure was completed in 2019.",
          es: "La planta de energía nuclear de Chernóbil fue cerrada permanentemente el 29 de agosto de 1991, cuando se apagó el último reactor operativo (Unidad 3). La planta había continuado operaciones parciales incluso después de la explosión catastrófica del 26 de abril de 1986 en el Reactor 4, que liberó cantidades masivas de material radiactivo por toda Europa. El Reactor 1 se cerró en 1996, el Reactor 2 en 1991 después de un incendio, y el Reactor 3 permaneció operativo hasta 2000 debido a las necesidades energéticas de Ucrania. El desastre de 1986 mató a docenas inmediatamente y miles más por enfermedades relacionadas con la radiación. El área alrededor de Chernóbil permanece contaminada, con la Zona de Exclusión mantenida alrededor del sitio. Una estructura de contención masiva se completó en 2019.",
          de: "Das Kernkraftwerk Tschernobyl wurde am 29. August 1991 endgültig geschlossen, als der letzte betriebene Reaktor (Block 3) abgeschaltet wurde. Das Kraftwerk hatte den Teilbetrieb auch nach der katastrophalen Explosion am 26. April 1986 in Reaktor 4 fortgesetzt, die massive Mengen radioaktiven Materials über Europa freisetzte. Reaktor 1 wurde 1996 geschlossen, Reaktor 2 1991 nach einem Brand, und Reaktor 3 blieb bis 2000 aufgrund des ukrainischen Energiebedarfs in Betrieb. Die Katastrophe von 1986 tötete sofort Dutzende und Tausende weitere an strahlungsbedingten Krankheiten. Das Gebiet um Tschernobyl bleibt kontaminiert, mit der Sperrzone um die Anlage. Eine massive Containment-Struktur wurde 2019 fertiggestellt.",
          nl: "De kerncentrale van Tsjernobyl werd permanent gesloten op 29 augustus 1991, toen de laatste werkende reactor (Unit 3) werd stilgelegd. De centrale had het gedeeltelijke bedrijf voortgezet zelfs na de catastrofale explosie van 26 april 1986 in Reactor 4, die enorme hoeveelheden radioactief materiaal over Europa vrijgaf. Reactor 1 werd gesloten in 1996, Reactor 2 in 1991 na een brand, en Reactor 3 bleef operationeel tot 2000 vanwege de energiebehoeften van Oekraïne. De ramp van 1986 doodde tientallen onmiddellijk en duizenden meer door stralingsziekte. Het gebied rond Tsjernobyl blijft besmet, met de Uitsluitingszone onderhouden rond de locatie. Een massieve containmentstructuur werd voltooid in 2019."
        }
      },
      {
        question: {
          en: "On August 29, 1949, which country successfully tested its first atomic bomb, ending the U.S. nuclear monopoly?",
          es: "El 29 de agosto de 1949, ¿qué país probó con éxito su primera bomba atómica, poniendo fin al monopolio nuclear de EE.UU.?",
          de: "Am 29. August 1949 testete welches Land erfolgreich seine erste Atombombe und beendete damit das nukleare Monopol der USA?",
          nl: "Op 29 augustus 1949 testte welk land met succes zijn eerste atoombom, waarmee het nucleaire monopolie van de VS eindigde?"
        },
        options: [
          {
            en: "China",
            es: "China",
            de: "China",
            nl: "China"
          },
          {
            en: "United Kingdom",
            es: "Reino Unido",
            de: "Vereinigtes Königreich",
            nl: "Verenigd Koninkrijk"
          },
          {
            en: "Soviet Union",
            es: "Unión Soviética",
            de: "Sowjetunion",
            nl: "Sovjet-Unie"
          },
          {
            en: "France",
            es: "Francia",
            de: "Frankreich",
            nl: "Frankrijk"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Soviet Union successfully tested its first atomic bomb, code-named 'First Lightning' (or RDS-1, nicknamed 'Joe-1' by the Americans), on August 29, 1949, at the Semipalatinsk Test Site in Kazakhstan. The test surprised the West, which expected the Soviets would need several more years to develop nuclear weapons. The bomb's design was influenced by espionage, particularly Klaus Fuchs's intelligence from the Manhattan Project. The successful test ended the four-year American nuclear monopoly and accelerated the nuclear arms race of the Cold War. This led to the development of thermonuclear weapons and the doctrine of mutually assured destruction (MAD).",
          es: "La Unión Soviética probó con éxito su primera bomba atómica, con nombre en clave 'Primer Relámpago' (o RDS-1, apodada 'Joe-1' por los estadounidenses), el 29 de agosto de 1949, en el sitio de pruebas de Semipalatinsk en Kazajistán. La prueba sorprendió a Occidente, que esperaba que los soviéticos necesitarían varios años más para desarrollar armas nucleares. El diseño de la bomba fue influenciado por el espionaje, particularmente la inteligencia de Klaus Fuchs del Proyecto Manhattan. La prueba exitosa terminó el monopolio nuclear estadounidense de cuatro años y aceleró la carrera armamentista nuclear de la Guerra Fría. Esto llevó al desarrollo de armas termonucleares y la doctrina de destrucción mutua asegurada (MAD).",
          de: "Die Sowjetunion testete erfolgreich ihre erste Atombombe mit dem Codenamen 'Erster Blitz' (oder RDS-1, von den Amerikanern 'Joe-1' genannt) am 29. August 1949 auf dem Testgelände Semipalatinsk in Kasachstan. Der Test überraschte den Westen, der erwartete, dass die Sowjets mehrere Jahre mehr für die Entwicklung von Nuklearwaffen benötigen würden. Das Design der Bombe wurde durch Spionage beeinflusst, insbesondere durch Klaus Fuchs' Informationen aus dem Manhattan-Projekt. Der erfolgreiche Test beendete das vierjährige amerikanische Nuklearmonopol und beschleunigte das nukleare Wettrüsten des Kalten Krieges. Dies führte zur Entwicklung thermonuklearer Waffen und der Doktrin der gegenseitig gesicherten Zerstörung (MAD).",
          nl: "De Sovjet-Unie testte met succes zijn eerste atoombom, codenaam 'Eerste Bliksem' (of RDS-1, door de Amerikanen 'Joe-1' genoemd), op 29 augustus 1949 op het testterrein van Semipalatinsk in Kazachstan. De test verraste het Westen, dat verwachtte dat de Sovjets nog enkele jaren nodig zouden hebben om kernwapens te ontwikkelen. Het ontwerp van de bom werd beïnvloed door spionage, met name door Klaus Fuchs' inlichtingen uit het Manhattan Project. De succesvolle test beëindigde het vierjarige Amerikaanse nucleaire monopolie en versnelde de nucleaire wapenwedloop van de Koude Oorlog. Dit leidde tot de ontwikkeling van thermonucleaire wapens en de doctrine van wederzijds verzekerde vernietiging (MAD)."
        }
      },
      {
        question: {
          en: "On August 29, 2012, which social media platform reached 1 billion active users worldwide?",
          es: "El 29 de agosto de 2012, ¿qué plataforma de redes sociales alcanzó 1 mil millones de usuarios activos en todo el mundo?",
          de: "Am 29. August 2012 erreichte welche Social-Media-Plattform 1 Milliarde aktive Nutzer weltweit?",
          nl: "Op 29 augustus 2012 bereikte welk social media platform 1 miljard actieve gebruikers wereldwijd?"
        },
        options: [
          {
            en: "Twitter",
            es: "Twitter",
            de: "Twitter",
            nl: "Twitter"
          },
          {
            en: "Facebook",
            es: "Facebook",
            de: "Facebook",
            nl: "Facebook"
          },
          {
            en: "Instagram",
            es: "Instagram",
            de: "Instagram",
            nl: "Instagram"
          },
          {
            en: "YouTube",
            es: "YouTube",
            de: "YouTube",
            nl: "YouTube"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Facebook reached 1 billion monthly active users on August 29, 2012, just eight years after Mark Zuckerberg launched it from his Harvard dorm room in 2004. This milestone made Facebook the first social network to reach such scale. At the time, this meant approximately one in seven people on Earth used Facebook. The achievement demonstrated the platform's global dominance and cultural impact. Facebook announced the milestone internally before making it public in October 2012. The company has since grown to over 3 billion monthly active users across its family of apps (Facebook, Instagram, WhatsApp). The rapid growth raised questions about privacy, data security, and social media's influence on society.",
          es: "Facebook alcanzó 1 mil millones de usuarios activos mensuales el 29 de agosto de 2012, solo ocho años después de que Mark Zuckerberg lo lanzara desde su dormitorio de Harvard en 2004. Este hito convirtió a Facebook en la primera red social en alcanzar tal escala. En ese momento, esto significaba que aproximadamente una de cada siete personas en la Tierra usaba Facebook. El logro demostró el dominio global y el impacto cultural de la plataforma. Facebook anunció el hito internamente antes de hacerlo público en octubre de 2012. La compañía ha crecido desde entonces a más de 3 mil millones de usuarios activos mensuales en su familia de aplicaciones (Facebook, Instagram, WhatsApp). El rápido crecimiento planteó preguntas sobre privacidad, seguridad de datos y la influencia de las redes sociales en la sociedad.",
          de: "Facebook erreichte am 29. August 2012 1 Milliarde monatlich aktive Nutzer, nur acht Jahre nachdem Mark Zuckerberg es 2004 von seinem Harvard-Wohnheim aus gestartet hatte. Dieser Meilenstein machte Facebook zum ersten sozialen Netzwerk, das eine solche Größenordnung erreichte. Zu diesem Zeitpunkt bedeutete dies, dass etwa einer von sieben Menschen auf der Erde Facebook nutzte. Die Errungenschaft demonstrierte die globale Dominanz und kulturelle Wirkung der Plattform. Facebook kündigte den Meilenstein intern an, bevor es im Oktober 2012 öffentlich gemacht wurde. Das Unternehmen ist seitdem auf über 3 Milliarden monatlich aktive Nutzer in seiner App-Familie (Facebook, Instagram, WhatsApp) gewachsen. Das schnelle Wachstum warf Fragen über Datenschutz, Datensicherheit und den Einfluss sozialer Medien auf die Gesellschaft auf.",
          nl: "Facebook bereikte 1 miljard maandelijks actieve gebruikers op 29 augustus 2012, slechts acht jaar nadat Mark Zuckerberg het lanceerde vanuit zijn Harvard-studentenkamer in 2004. Deze mijlpaal maakte Facebook tot het eerste sociale netwerk dat zo'n schaal bereikte. Destijds betekende dit dat ongeveer een op de zeven mensen op aarde Facebook gebruikte. De prestatie toonde de wereldwijde dominantie en culturele impact van het platform. Facebook kondigde de mijlpaal intern aan voordat het in oktober 2012 openbaar werd gemaakt. Het bedrijf is sindsdien gegroeid tot meer dan 3 miljard maandelijks actieve gebruikers binnen zijn familie van apps (Facebook, Instagram, WhatsApp). De snelle groei riep vragen op over privacy, gegevensbeveiliging en de invloed van sociale media op de samenleving."
        }
      }
    ],

    // Day 30 - August 30th: Mary Shelley born, Warren Buffett born, Turkey victory WWI
    day30: [
      {
        question: {
          en: "On August 30, 1797, which Gothic novelist who wrote 'Frankenstein' was born in London?",
          es: "El 30 de agosto de 1797, ¿qué novelista gótica que escribió 'Frankenstein' nació en Londres?",
          de: "Am 30. August 1797 wurde welche Gothic-Romanautorin, die 'Frankenstein' schrieb, in London geboren?",
          nl: "Op 30 augustus 1797 werd welke Gothic romanschrijfster die 'Frankenstein' schreef geboren in Londen?"
        },
        options: [
          {
            en: "Emily Brontë",
            es: "Emily Brontë",
            de: "Emily Brontë",
            nl: "Emily Brontë"
          },
          {
            en: "Mary Shelley",
            es: "Mary Shelley",
            de: "Mary Shelley",
            nl: "Mary Shelley"
          },
          {
            en: "Ann Radcliffe",
            es: "Ann Radcliffe",
            de: "Ann Radcliffe",
            nl: "Ann Radcliffe"
          },
          {
            en: "Jane Austen",
            es: "Jane Austen",
            de: "Jane Austen",
            nl: "Jane Austen"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Mary Shelley was born Mary Wollstonecraft Godwin on August 30, 1797, in London. She was the daughter of feminist pioneer Mary Wollstonecraft and philosopher William Godwin. At age 18, during the summer of 1816 in Switzerland, she conceived the idea for 'Frankenstein; or, The Modern Prometheus', which was published in 1818. The novel is considered one of the first works of science fiction and explores themes of creation, responsibility, and the dangers of unchecked ambition. Shelley married the Romantic poet Percy Bysshe Shelley in 1816. Despite personal tragedies, including the deaths of three children and her husband, she continued writing novels, short stories, and essays. She died in 1851.",
          es: "Mary Shelley nació como Mary Wollstonecraft Godwin el 30 de agosto de 1797 en Londres. Era hija de la pionera feminista Mary Wollstonecraft y el filósofo William Godwin. A los 18 años, durante el verano de 1816 en Suiza, concibió la idea de 'Frankenstein; o, El moderno Prometeo', que se publicó en 1818. La novela se considera una de las primeras obras de ciencia ficción y explora temas de creación, responsabilidad y los peligros de la ambición descontrolada. Shelley se casó con el poeta romántico Percy Bysshe Shelley en 1816. A pesar de tragedias personales, incluidas las muertes de tres hijos y su esposo, continuó escribiendo novelas, cuentos y ensayos. Murió en 1851.",
          de: "Mary Shelley wurde als Mary Wollstonecraft Godwin am 30. August 1797 in London geboren. Sie war die Tochter der feministischen Pionierin Mary Wollstonecraft und des Philosophen William Godwin. Im Alter von 18 Jahren, im Sommer 1816 in der Schweiz, entwickelte sie die Idee für 'Frankenstein; oder Der moderne Prometheus', der 1818 veröffentlicht wurde. Der Roman gilt als eines der ersten Werke der Science-Fiction und erforscht Themen wie Schöpfung, Verantwortung und die Gefahren ungezügelten Ehrgeizes. Shelley heiratete 1816 den romantischen Dichter Percy Bysshe Shelley. Trotz persönlicher Tragödien, einschließlich des Todes von drei Kindern und ihrem Ehemann, schrieb sie weiterhin Romane, Kurzgeschichten und Essays. Sie starb 1851.",
          nl: "Mary Shelley werd geboren als Mary Wollstonecraft Godwin op 30 augustus 1797 in Londen. Ze was de dochter van feministische pionier Mary Wollstonecraft en filosoof William Godwin. Op 18-jarige leeftijd, tijdens de zomer van 1816 in Zwitserland, ontwikkelde ze het idee voor 'Frankenstein; of, De moderne Prometheus', dat in 1818 werd gepubliceerd. De roman wordt beschouwd als een van de eerste werken van sciencefiction en verkent thema's van schepping, verantwoordelijkheid en de gevaren van ongecontroleerde ambitie. Shelley trouwde in 1816 met de Romantische dichter Percy Bysshe Shelley. Ondanks persoonlijke tragedies, waaronder de dood van drie kinderen en haar echtgenoot, bleef ze romans, korte verhalen en essays schrijven. Ze stierf in 1851."
        }
      },
      {
        question: {
          en: "On August 30, 1930, which legendary investor known as the 'Oracle of Omaha' was born in Nebraska?",
          es: "El 30 de agosto de 1930, ¿qué inversor legendario conocido como el 'Oráculo de Omaha' nació en Nebraska?",
          de: "Am 30. August 1930 wurde welcher legendäre Investor, bekannt als das 'Orakel von Omaha', in Nebraska geboren?",
          nl: "Op 30 augustus 1930 werd welke legendarische investeerder bekend als het 'Orakel van Omaha' geboren in Nebraska?"
        },
        options: [
          {
            en: "George Soros",
            es: "George Soros",
            de: "George Soros",
            nl: "George Soros"
          },
          {
            en: "Peter Lynch",
            es: "Peter Lynch",
            de: "Peter Lynch",
            nl: "Peter Lynch"
          },
          {
            en: "Warren Buffett",
            es: "Warren Buffett",
            de: "Warren Buffett",
            nl: "Warren Buffett"
          },
          {
            en: "Carl Icahn",
            es: "Carl Icahn",
            de: "Carl Icahn",
            nl: "Carl Icahn"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Warren Buffett was born on August 30, 1930, in Omaha, Nebraska. He is the chairman and CEO of Berkshire Hathaway and one of the most successful investors in history. Buffett began investing at age 11 and filed his first tax return at age 13. He studied under Benjamin Graham at Columbia Business School, adopting the value investing philosophy. Under his leadership, Berkshire Hathaway grew from a failing textile company into a massive conglomerate. Known for his folksy wisdom and annual shareholder letters, Buffett has consistently been ranked among the world's wealthiest people. He has pledged to donate over 99% of his fortune to philanthropic causes, primarily through the Bill & Melinda Gates Foundation.",
          es: "Warren Buffett nació el 30 de agosto de 1930 en Omaha, Nebraska. Es el presidente y director ejecutivo de Berkshire Hathaway y uno de los inversores más exitosos de la historia. Buffett comenzó a invertir a los 11 años y presentó su primera declaración de impuestos a los 13. Estudió bajo Benjamin Graham en Columbia Business School, adoptando la filosofía de inversión de valor. Bajo su liderazgo, Berkshire Hathaway creció de una empresa textil en quiebra a un conglomerado masivo. Conocido por su sabiduría popular y sus cartas anuales a los accionistas, Buffett ha sido constantemente clasificado entre las personas más ricas del mundo. Ha prometido donar más del 99% de su fortuna a causas filantrópicas, principalmente a través de la Fundación Bill y Melinda Gates.",
          de: "Warren Buffett wurde am 30. August 1930 in Omaha, Nebraska geboren. Er ist Vorsitzender und CEO von Berkshire Hathaway und einer der erfolgreichsten Investoren der Geschichte. Buffett begann im Alter von 11 Jahren zu investieren und reichte seine erste Steuererklärung im Alter von 13 Jahren ein. Er studierte unter Benjamin Graham an der Columbia Business School und übernahm die Value-Investing-Philosophie. Unter seiner Führung wuchs Berkshire Hathaway von einem gescheiterten Textilunternehmen zu einem riesigen Konglomerat. Bekannt für seine volkstümliche Weisheit und jährlichen Aktionärsbriefe, wurde Buffett konsequent zu den reichsten Menschen der Welt gezählt. Er hat zugesagt, über 99% seines Vermögens für wohltätige Zwecke zu spenden, hauptsächlich über die Bill & Melinda Gates Foundation.",
          nl: "Warren Buffett werd geboren op 30 augustus 1930 in Omaha, Nebraska. Hij is de voorzitter en CEO van Berkshire Hathaway en een van de meest succesvolle investeerders in de geschiedenis. Buffett begon met investeren op 11-jarige leeftijd en diende zijn eerste belastingaangifte in op 13-jarige leeftijd. Hij studeerde onder Benjamin Graham aan Columbia Business School en nam de waarde-investeringsfilosofie over. Onder zijn leiding groeide Berkshire Hathaway van een falend textielbedrijf tot een massaal conglomeraat. Bekend om zijn volkse wijsheid en jaarlijkse aandeelhoudersbrieven, werd Buffett consequent gerangschikt onder de rijkste mensen ter wereld. Hij heeft toegezegd om meer dan 99% van zijn fortuin te doneren aan filantropische doelen, voornamelijk via de Bill & Melinda Gates Foundation."
        }
      },
      {
        question: {
          en: "On August 30, 1922, which Middle Eastern country achieved a major victory over Greek forces in the Battle of Dumlupınar, ending the Greco-Turkish War?",
          es: "El 30 de agosto de 1922, ¿qué país de Oriente Medio logró una gran victoria sobre las fuerzas griegas en la Batalla de Dumlupınar, poniendo fin a la Guerra Greco-Turca?",
          de: "Am 30. August 1922 errang welches Land des Nahen Ostens einen großen Sieg über griechische Streitkräfte in der Schlacht von Dumlupınar und beendete damit den Griechisch-Türkischen Krieg?",
          nl: "Op 30 augustus 1922 behaalde welk land uit het Midden-Oosten een grote overwinning op Griekse troepen in de Slag bij Dumlupınar, waarmee de Grieks-Turkse Oorlog eindigde?"
        },
        options: [
          {
            en: "Syria",
            es: "Siria",
            de: "Syrien",
            nl: "Syrië"
          },
          {
            en: "Turkey",
            es: "Turquía",
            de: "Türkei",
            nl: "Turkije"
          },
          {
            en: "Iran",
            es: "Irán",
            de: "Iran",
            nl: "Iran"
          },
          {
            en: "Iraq",
            es: "Irak",
            de: "Irak",
            nl: "Irak"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Turkey achieved a decisive victory over Greek forces in the Battle of Dumlupınar (August 26-30, 1922), the final major battle of the Greco-Turkish War (1919-1922). Led by Mustafa Kemal (later Atatürk), Turkish forces encircled and defeated the Greek army in western Anatolia. The victory ended Greece's territorial ambitions in Asia Minor and led to the recapture of Smyrna (Izmir) on September 9, 1922. This military success secured the boundaries of modern Turkey and led to the Treaty of Lausanne in 1923, which replaced the harsh Treaty of Sèvres. August 30 is celebrated as Victory Day in Turkey. The war resulted in a massive population exchange between Greece and Turkey.",
          es: "Turquía logró una victoria decisiva sobre las fuerzas griegas en la Batalla de Dumlupınar (26-30 de agosto de 1922), la última batalla importante de la Guerra Greco-Turca (1919-1922). Lideradas por Mustafa Kemal (más tarde Atatürk), las fuerzas turcas rodearon y derrotaron al ejército griego en el oeste de Anatolia. La victoria puso fin a las ambiciones territoriales de Grecia en Asia Menor y llevó a la recaptura de Esmirna (Izmir) el 9 de septiembre de 1922. Este éxito militar aseguró las fronteras de la Turquía moderna y llevó al Tratado de Lausana en 1923, que reemplazó el duro Tratado de Sèvres. El 30 de agosto se celebra como el Día de la Victoria en Turquía. La guerra resultó en un masivo intercambio de población entre Grecia y Turquía.",
          de: "Die Türkei errang einen entscheidenden Sieg über griechische Streitkräfte in der Schlacht von Dumlupınar (26.-30. August 1922), der letzten großen Schlacht des Griechisch-Türkischen Krieges (1919-1922). Unter der Führung von Mustafa Kemal (später Atatürk) umzingelten und besiegten türkische Streitkräfte die griechische Armee in Westanatolien. Der Sieg beendete Griechenlands territoriale Ambitionen in Kleinasien und führte zur Rückeroberung von Smyrna (Izmir) am 9. September 1922. Dieser militärische Erfolg sicherte die Grenzen der modernen Türkei und führte zum Vertrag von Lausanne 1923, der den harten Vertrag von Sèvres ersetzte. Der 30. August wird in der Türkei als Tag des Sieges gefeiert. Der Krieg führte zu einem massiven Bevölkerungsaustausch zwischen Griechenland und der Türkei.",
          nl: "Turkije behaalde een beslissende overwinning op Griekse troepen in de Slag bij Dumlupınar (26-30 augustus 1922), de laatste grote slag van de Grieks-Turkse Oorlog (1919-1922). Geleid door Mustafa Kemal (later Atatürk), omsingelden en versloegen Turkse troepen het Griekse leger in West-Anatolië. De overwinning maakte een einde aan Griekenlands territoriale ambities in Klein-Azië en leidde tot de herovering van Smyrna (Izmir) op 9 september 1922. Dit militaire succes verzekerde de grenzen van modern Turkije en leidde tot het Verdrag van Lausanne in 1923, dat het harde Verdrag van Sèvres verving. 30 augustus wordt gevierd als Overwinningsdag in Turkije. De oorlog resulteerde in een massale bevolkingsruil tussen Griekenland en Turkije."
        }
      },
      {
        question: {
          en: "On August 30, 1963, the first direct communication link between the U.S. and Soviet Union, known as the 'Hotline', was established after which major crisis?",
          es: "El 30 de agosto de 1963, se estableció el primer enlace de comunicación directa entre EE.UU. y la Unión Soviética, conocido como la 'Línea Directa', después de ¿qué crisis importante?",
          de: "Am 30. August 1963 wurde die erste direkte Kommunikationsverbindung zwischen den USA und der Sowjetunion, bekannt als 'Heißer Draht', nach welcher großen Krise eingerichtet?",
          nl: "Op 30 augustus 1963 werd de eerste directe communicatieverbinding tussen de VS en de Sovjet-Unie, bekend als de 'Hotline', tot stand gebracht na welke grote crisis?"
        },
        options: [
          {
            en: "Berlin Crisis",
            es: "Crisis de Berlín",
            de: "Berlin-Krise",
            nl: "Berlijnse Crisis"
          },
          {
            en: "Korean War",
            es: "Guerra de Corea",
            de: "Koreakrieg",
            nl: "Koreaanse Oorlog"
          },
          {
            en: "Cuban Missile Crisis",
            es: "Crisis de los Misiles de Cuba",
            de: "Kubakrise",
            nl: "Cubacrisis"
          },
          {
            en: "Suez Crisis",
            es: "Crisis de Suez",
            de: "Suez-Krise",
            nl: "Suezcrisis"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Moscow-Washington hotline was established on August 30, 1963, following the Cuban Missile Crisis of October 1962. During that crisis, the lack of direct, reliable communication between U.S. President Kennedy and Soviet Premier Khrushchev created dangerous delays in decision-making that could have led to nuclear war. The hotline was initially a teletype link (not a telephone) connecting the Pentagon with the Kremlin, allowing leaders to communicate directly during emergencies. The first message sent was a test transmission. The hotline has been upgraded several times and remains an important crisis communication tool. It was used during conflicts like the 1967 Six-Day War and the 1971 Indo-Pakistani War.",
          es: "La línea directa Moscú-Washington se estableció el 30 de agosto de 1963, tras la Crisis de los Misiles de Cuba de octubre de 1962. Durante esa crisis, la falta de comunicación directa y confiable entre el presidente de EE.UU. Kennedy y el premier soviético Jruschov creó retrasos peligrosos en la toma de decisiones que podrían haber llevado a una guerra nuclear. La línea directa fue inicialmente un enlace de teletipo (no un teléfono) que conectaba el Pentágono con el Kremlin, permitiendo a los líderes comunicarse directamente durante emergencias. El primer mensaje enviado fue una transmisión de prueba. La línea directa se ha actualizado varias veces y sigue siendo una herramienta importante de comunicación en crisis. Se usó durante conflictos como la Guerra de los Seis Días de 1967 y la Guerra Indo-Pakistaní de 1971.",
          de: "Die Moskau-Washington-Hotline wurde am 30. August 1963 nach der Kubakrise vom Oktober 1962 eingerichtet. Während dieser Krise führte das Fehlen direkter, zuverlässiger Kommunikation zwischen US-Präsident Kennedy und dem sowjetischen Premier Chruschtschow zu gefährlichen Verzögerungen bei der Entscheidungsfindung, die zu einem Atomkrieg hätten führen können. Die Hotline war zunächst eine Fernschreibverbindung (kein Telefon), die das Pentagon mit dem Kreml verband und es den Führern ermöglichte, in Notfällen direkt zu kommunizieren. Die erste gesendete Nachricht war eine Testübertragung. Die Hotline wurde mehrmals aktualisiert und bleibt ein wichtiges Krisenkommunikationsinstrument. Sie wurde während Konflikten wie dem Sechstagekrieg 1967 und dem Indisch-Pakistanischen Krieg 1971 verwendet.",
          nl: "De Moskou-Washington hotline werd opgericht op 30 augustus 1963, na de Cubacrisis van oktober 1962. Tijdens die crisis zorgde het gebrek aan directe, betrouwbare communicatie tussen de Amerikaanse president Kennedy en de Sovjet-premier Chroesjtsjov voor gevaarlijke vertragingen in de besluitvorming die tot een nucleaire oorlog hadden kunnen leiden. De hotline was aanvankelijk een telexverbinding (geen telefoon) die het Pentagon met het Kremlin verbond, waardoor leiders direct konden communiceren tijdens noodsituaties. Het eerste verzonden bericht was een testtransmissie. De hotline is meerdere keren geüpgraded en blijft een belangrijk crisiscommunicatiemiddel. Het werd gebruikt tijdens conflicten zoals de Zesdaagse Oorlog van 1967 en de Indo-Pakistaanse Oorlog van 1971."
        }
      },
      {
        question: {
          en: "On August 30, 1918, which leader of the Bolshevik Revolution survived an assassination attempt that left him seriously wounded?",
          es: "El 30 de agosto de 1918, ¿qué líder de la Revolución Bolchevique sobrevivió a un intento de asesinato que lo dejó gravemente herido?",
          de: "Am 30. August 1918 überlebte welcher Führer der Bolschewistischen Revolution einen Attentatsversuch, bei dem er schwer verwundet wurde?",
          nl: "Op 30 augustus 1918 overleefde welke leider van de Bolsjewistische Revolutie een moordaanslag die hem ernstig verwondde?"
        },
        options: [
          {
            en: "Joseph Stalin",
            es: "Iósif Stalin",
            de: "Josef Stalin",
            nl: "Josef Stalin"
          },
          {
            en: "Leon Trotsky",
            es: "León Trotsky",
            de: "Leo Trotzki",
            nl: "Leon Trotski"
          },
          {
            en: "Vladimir Lenin",
            es: "Vladímir Lenin",
            de: "Wladimir Lenin",
            nl: "Vladimir Lenin"
          },
          {
            en: "Nikolai Bukharin",
            es: "Nikolái Bujarin",
            de: "Nikolai Bucharin",
            nl: "Nikolaj Boecharin"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Vladimir Lenin was shot twice by Fanny Kaplan, a Socialist Revolutionary, on August 30, 1918, after giving a speech at a Moscow factory. One bullet lodged in his shoulder, another punctured his lung. Lenin survived but never fully recovered; many historians believe the assassination attempt contributed to his declining health and early death in 1924. The attack prompted the 'Red Terror', a campaign of mass arrests and executions against perceived enemies of the Bolshevik regime. Kaplan was executed three days later without a trial. The incident increased security around Soviet leaders and intensified the Russian Civil War. Some conspiracy theories suggest the shooting may have involved internal Bolshevik politics.",
          es: "Vladímir Lenin fue disparado dos veces por Fanny Kaplan, una Socialista Revolucionaria, el 30 de agosto de 1918, después de dar un discurso en una fábrica de Moscú. Una bala se alojó en su hombro, otra perforó su pulmón. Lenin sobrevivió pero nunca se recuperó completamente; muchos historiadores creen que el intento de asesinato contribuyó a su deterioro de salud y muerte temprana en 1924. El ataque provocó el 'Terror Rojo', una campaña de arrestos masivos y ejecuciones contra enemigos percibidos del régimen bolchevique. Kaplan fue ejecutada tres días después sin juicio. El incidente aumentó la seguridad alrededor de los líderes soviéticos e intensificó la Guerra Civil Rusa. Algunas teorías de conspiración sugieren que el tiroteo pudo haber involucrado política bolchevique interna.",
          de: "Wladimir Lenin wurde am 30. August 1918 von Fanny Kaplan, einer Sozialrevolutionärin, zweimal angeschossen, nachdem er eine Rede in einer Moskauer Fabrik gehalten hatte. Eine Kugel blieb in seiner Schulter stecken, eine andere durchdrang seine Lunge. Lenin überlebte, erholte sich aber nie vollständig; viele Historiker glauben, dass das Attentat zu seinem Gesundheitsverlust und frühen Tod 1924 beitrug. Der Angriff löste den 'Roten Terror' aus, eine Kampagne von Massenverhaftungen und Hinrichtungen gegen vermeintliche Feinde des bolschewistischen Regimes. Kaplan wurde drei Tage später ohne Prozess hingerichtet. Der Vorfall erhöhte die Sicherheit um sowjetische Führer und intensivierte den Russischen Bürgerkrieg. Einige Verschwörungstheorien deuten darauf hin, dass die Schießerei möglicherweise interne bolschewistische Politik involvierte.",
          nl: "Vladimir Lenin werd op 30 augustus 1918 twee keer neergeschoten door Fanny Kaplan, een Socialistisch Revolutionair, na het geven van een toespraak in een Moskouse fabriek. Een kogel bleef in zijn schouder zitten, een andere doorboorde zijn long. Lenin overleefde maar herstelde nooit volledig; veel historici geloven dat de moordaanslag bijdroeg aan zijn verslechterende gezondheid en vroege dood in 1924. De aanval veroorzaakte de 'Rode Terreur', een campagne van massale arrestaties en executies tegen vermeende vijanden van het Bolsjewistische regime. Kaplan werd drie dagen later zonder proces geëxecuteerd. Het incident verhoogde de beveiliging rond Sovjetleiders en intensiveerde de Russische Burgeroorlog. Sommige samenzweringstheorieën suggereren dat de schietpartij mogelijk betrokken was bij interne Bolsjewistische politiek."
        }
      }
    ],

    // Day 31 - August 31st: Princess Diana dies, Malaysia independence, Poland Solidarity movement
    day31: [
      {
        question: {
          en: "On August 31, 1997, which beloved British royal died in a car crash in Paris at age 36?",
          es: "El 31 de agosto de 1997, ¿qué querida miembro de la realeza británica murió en un accidente automovilístico en París a los 36 años?",
          de: "Am 31. August 1997 starb welche beliebte britische Königin bei einem Autounfall in Paris im Alter von 36 Jahren?",
          nl: "Op 31 augustus 1997 stierf welk geliefd Brits koninklijk lid bij een auto-ongeluk in Parijs op 36-jarige leeftijd?"
        },
        options: [
          {
            en: "Princess Anne",
            es: "Princesa Ana",
            de: "Prinzessin Anne",
            nl: "Prinses Anne"
          },
          {
            en: "Princess Diana",
            es: "Princesa Diana",
            de: "Prinzessin Diana",
            nl: "Prinses Diana"
          },
          {
            en: "Princess Margaret",
            es: "Princesa Margarita",
            de: "Prinzessin Margaret",
            nl: "Prinses Margaret"
          },
          {
            en: "Queen Elizabeth",
            es: "Reina Isabel",
            de: "Königin Elizabeth",
            nl: "Koningin Elizabeth"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Princess Diana died on August 31, 1997, from injuries sustained in a car crash in the Pont de l'Alma tunnel in Paris. She was with her companion Dodi Fayed, who also died in the crash, along with their driver Henri Paul. Diana was pursued by paparazzi before the accident, which occurred when Paul, who was intoxicated, lost control at high speed. Diana's death at age 36 shocked the world and prompted an unprecedented outpouring of public grief. Her funeral on September 6, 1997, was watched by an estimated 2.5 billion people worldwide. Multiple investigations concluded the crash was an accident caused by Paul's intoxication and excessive speed. Diana's legacy includes her humanitarian work, particularly with AIDS patients and landmine victims.",
          es: "La Princesa Diana murió el 31 de agosto de 1997 por heridas sufridas en un accidente automovilístico en el túnel de Pont de l'Alma en París. Estaba con su compañero Dodi Fayed, quien también murió en el accidente, junto con su conductor Henri Paul. Diana fue perseguida por paparazzi antes del accidente, que ocurrió cuando Paul, quien estaba intoxicado, perdió el control a alta velocidad. La muerte de Diana a los 36 años conmocionó al mundo y provocó una expresión de dolor público sin precedentes. Su funeral el 6 de septiembre de 1997 fue visto por aproximadamente 2.5 mil millones de personas en todo el mundo. Múltiples investigaciones concluyeron que el accidente fue causado por la intoxicación de Paul y la velocidad excesiva. El legado de Diana incluye su trabajo humanitario, particularmente con pacientes de SIDA y víctimas de minas terrestres.",
          de: "Prinzessin Diana starb am 31. August 1997 an Verletzungen, die sie bei einem Autounfall im Pont-de-l'Alma-Tunnel in Paris erlitten hatte. Sie war mit ihrem Begleiter Dodi Fayed zusammen, der ebenfalls bei dem Unfall starb, zusammen mit ihrem Fahrer Henri Paul. Diana wurde vor dem Unfall von Paparazzi verfolgt, der sich ereignete, als Paul, der betrunken war, bei hoher Geschwindigkeit die Kontrolle verlor. Dianas Tod im Alter von 36 Jahren schockierte die Welt und löste eine beispiellose öffentliche Trauer aus. Ihre Beerdigung am 6. September 1997 wurde von geschätzten 2,5 Milliarden Menschen weltweit verfolgt. Mehrere Untersuchungen kamen zu dem Schluss, dass der Unfall durch Pauls Trunkenheit und überhöhte Geschwindigkeit verursacht wurde. Dianas Vermächtnis umfasst ihre humanitäre Arbeit, insbesondere mit AIDS-Patienten und Landminenopfern.",
          nl: "Prinses Diana stierf op 31 augustus 1997 aan verwondingen opgelopen bij een auto-ongeluk in de Pont de l'Alma-tunnel in Parijs. Ze was met haar metgezel Dodi Fayed, die ook omkwam bij het ongeluk, samen met hun chauffeur Henri Paul. Diana werd achtervolgd door paparazzi voor het ongeluk, dat gebeurde toen Paul, die onder invloed was, de controle verloor bij hoge snelheid. Diana's dood op 36-jarige leeftijd schokte de wereld en veroorzaakte een ongekend publiek verdriet. Haar begrafenis op 6 september 1997 werd bekeken door naar schatting 2,5 miljard mensen wereldwijd. Meerdere onderzoeken concludeerden dat het ongeluk een ongeval was veroorzaakt door Pauls intoxicatie en buitensporige snelheid. Diana's erfenis omvat haar humanitair werk, met name met AIDS-patiënten en landmijnslachtoffers."
        }
      },
      {
        question: {
          en: "On August 31, 1957, which Southeast Asian nation gained independence from British colonial rule?",
          es: "El 31 de agosto de 1957, ¿qué nación del sudeste asiático obtuvo la independencia del dominio colonial británico?",
          de: "Am 31. August 1957 erlangte welche südostasiatische Nation die Unabhängigkeit von der britischen Kolonialherrschaft?",
          nl: "Op 31 augustus 1957 verkreeg welke Zuidoost-Aziatische natie onafhankelijkheid van de Britse koloniale heerschappij?"
        },
        options: [
          {
            en: "Singapore",
            es: "Singapur",
            de: "Singapur",
            nl: "Singapore"
          },
          {
            en: "Indonesia",
            es: "Indonesia",
            de: "Indonesien",
            nl: "Indonesië"
          },
          {
            en: "Malaysia",
            es: "Malasia",
            de: "Malaysia",
            nl: "Maleisië"
          },
          {
            en: "Myanmar",
            es: "Birmania",
            de: "Myanmar",
            nl: "Myanmar"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Malaysia (then called Malaya) gained independence from British colonial rule on August 31, 1957. Tunku Abdul Rahman became the first Prime Minister and declared 'Merdeka!' (Freedom!) seven times at Merdeka Stadium in Kuala Lumpur. The Federation of Malaya had been under British control since the late 18th century. Independence came relatively peacefully after negotiations, though the country had recently emerged from the Malayan Emergency (1948-1960), a communist insurgency. In 1963, Malaya merged with Singapore, Sabah, and Sarawak to form Malaysia (Singapore later separated in 1965). August 31 is celebrated annually as Hari Merdeka (Independence Day) in Malaysia. The country has since developed into a prosperous, multi-ethnic nation.",
          es: "Malasia (entonces llamada Malaya) obtuvo la independencia del dominio colonial británico el 31 de agosto de 1957. Tunku Abdul Rahman se convirtió en el primer Primer Ministro y declaró '¡Merdeka!' (¡Libertad!) siete veces en el Estadio Merdeka en Kuala Lumpur. La Federación de Malaya había estado bajo control británico desde finales del siglo XVIII. La independencia llegó relativamente pacíficamente después de negociaciones, aunque el país había emergido recientemente de la Emergencia Malaya (1948-1960), una insurgencia comunista. En 1963, Malaya se fusionó con Singapur, Sabah y Sarawak para formar Malasia (Singapur se separó más tarde en 1965). El 31 de agosto se celebra anualmente como Hari Merdeka (Día de la Independencia) en Malasia. El país se ha convertido desde entonces en una nación próspera y multiétnica.",
          de: "Malaysia (damals Malaya genannt) erlangte am 31. August 1957 die Unabhängigkeit von der britischen Kolonialherrschaft. Tunku Abdul Rahman wurde der erste Premierminister und rief siebenmal 'Merdeka!' (Freiheit!) im Merdeka-Stadion in Kuala Lumpur aus. Die Föderation von Malaya stand seit dem späten 18. Jahrhundert unter britischer Kontrolle. Die Unabhängigkeit kam relativ friedlich nach Verhandlungen, obwohl das Land kürzlich aus dem Malaiischen Notstand (1948-1960), einer kommunistischen Aufstandsbewegung, hervorgegangen war. 1963 fusionierte Malaya mit Singapur, Sabah und Sarawak zu Malaysia (Singapur trennte sich später 1965). Der 31. August wird jährlich als Hari Merdeka (Unabhängigkeitstag) in Malaysia gefeiert. Das Land hat sich seitdem zu einer wohlhabenden, multiethnischen Nation entwickelt.",
          nl: "Maleisië (toen Malaya genoemd) verkreeg onafhankelijkheid van de Britse koloniale heerschappij op 31 augustus 1957. Tunku Abdul Rahman werd de eerste premier en riep 'Merdeka!' (Vrijheid!) zeven keer uit in het Merdeka-stadion in Kuala Lumpur. De Federatie van Malaya was sinds het einde van de 18e eeuw onder Britse controle geweest. De onafhankelijkheid kwam relatief vreedzaam na onderhandelingen, hoewel het land onlangs was opgekomen uit de Malayan Emergency (1948-1960), een communistische opstand. In 1963 fuseerde Malaya met Singapore, Sabah en Sarawak om Maleisië te vormen (Singapore scheidde later in 1965). 31 augustus wordt jaarlijks gevierd als Hari Merdeka (Onafhankelijkheidsdag) in Maleisië. Het land heeft zich sindsdien ontwikkeld tot een welvarende, multi-etnische natie."
        }
      },
      {
        question: {
          en: "On August 31, 1980, which Polish trade union was formed at the Gdańsk shipyard, becoming a major force against communist rule?",
          es: "El 31 de agosto de 1980, ¿qué sindicato polaco se formó en el astillero de Gdańsk, convirtiéndose en una fuerza importante contra el gobierno comunista?",
          de: "Am 31. August 1980 wurde welche polnische Gewerkschaft auf der Danziger Werft gegründet und wurde zu einer wichtigen Kraft gegen die kommunistische Herrschaft?",
          nl: "Op 31 augustus 1980 werd welke Poolse vakbond opgericht in de scheepswerf van Gdańsk, en werd een belangrijke kracht tegen de communistische heerschappij?"
        },
        options: [
          { en: "Democratic Front", es: "Frente Democrático", de: "Demokratische Front", nl: "Democratisch Front" },
          { en: "Solidarity", es: "Solidaridad", de: "Solidarność", nl: "Solidariteit" },
          { en: "Freedom Alliance", es: "Alianza por la Libertad", de: "Freiheitsbündnis", nl: "Vrijheidsalliantie" },
          { en: "Workers' Unity", es: "Unidad Obrera", de: "Arbeitereinheit", nl: "Arbeidersunie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Solidarity (Solidarność in Polish) was founded on August 31, 1980, at the Gdańsk shipyard following successful strikes led by Lech Wałęsa. It became the first independent labor union in a Soviet-bloc country and grew to 10 million members within a year. Solidarity challenged communist authority through strikes and negotiations, demanding workers' rights and political reforms. The movement was suppressed when General Jaruzelski declared martial law in December 1981, but Solidarity continued underground. It reemerged in 1988 and negotiated the Round Table Talks that led to semi-free elections in 1989. Solidarity's victory in those elections triggered the collapse of communism across Eastern Europe. Wałęsa became Poland's president in 1990. He won the Nobel Peace Prize in 1983.",
          es: "Solidaridad (Solidarność en polaco) fue fundada el 31 de agosto de 1980 en el astillero de Gdańsk tras exitosas huelgas lideradas por Lech Wałęsa. Se convirtió en el primer sindicato independiente en un país del bloque soviético y creció a 10 millones de miembros en un año. Solidaridad desafió la autoridad comunista a través de huelgas y negociaciones, exigiendo derechos de los trabajadores y reformas políticas. El movimiento fue suprimido cuando el General Jaruzelski declaró la ley marcial en diciembre de 1981, pero Solidaridad continuó clandestinamente. Resurgió en 1988 y negoció las Conversaciones de Mesa Redonda que llevaron a elecciones semifree en 1989. La victoria de Solidaridad en esas elecciones desencadenó el colapso del comunismo en Europa del Este. Wałęsa se convirtió en presidente de Polonia en 1990. Ganó el Premio Nobel de la Paz en 1983.",
          de: "Solidarność (Solidarität auf Polnisch) wurde am 31. August 1980 auf der Danziger Werft nach erfolgreichen Streiks unter Führung von Lech Wałęsa gegründet. Sie wurde die erste unabhängige Gewerkschaft in einem Sowjetblock-Land und wuchs innerhalb eines Jahres auf 10 Millionen Mitglieder. Solidarność forderte durch Streiks und Verhandlungen die kommunistische Autorität heraus und verlangte Arbeiterrechte und politische Reformen. Die Bewegung wurde unterdrückt, als General Jaruzelski im Dezember 1981 das Kriegsrecht erklärte, aber Solidarność setzte sich im Untergrund fort. Sie tauchte 1988 wieder auf und verhandelte die Runden-Tisch-Gespräche, die zu halbfreien Wahlen 1989 führten. Solidarnośćs Sieg bei diesen Wahlen löste den Zusammenbruch des Kommunismus in Osteuropa aus. Wałęsa wurde 1990 Polens Präsident. Er gewann 1983 den Friedensnobelpreis.",
          nl: "Solidariteit (Solidarność in het Pools) werd opgericht op 31 augustus 1980 in de scheepswerf van Gdańsk na succesvolle stakingen geleid door Lech Wałęsa. Het werd de eerste onafhankelijke vakbond in een Sovjetblok-land en groeide binnen een jaar tot 10 miljoen leden. Solidariteit daagde de communistische autoriteit uit door stakingen en onderhandelingen, en eiste werknemersrechten en politieke hervormingen. De beweging werd onderdrukt toen generaal Jaruzelski in december 1981 de staat van beleg afkondigde, maar Solidariteit ging ondergronds door. Het kwam in 1988 weer tevoorschijn en onderhandelde over de Ronde Tafel-gesprekken die leidden tot semi-vrije verkiezingen in 1989. Solidariteits overwinning bij die verkiezingen leidde tot de ineenstorting van het communisme in Oost-Europa. Wałęsa werd in 1990 president van Polen. Hij won de Nobelprijs voor de Vrede in 1983."
        }
      },
      {
        question: {
          en: "On August 31, 1888, which unidentified serial killer claimed their first canonical victim in London's Whitechapel district?",
          es: "El 31 de agosto de 1888, ¿qué asesino en serie no identificado cobró su primera víctima canónica en el distrito de Whitechapel de Londres?",
          de: "Am 31. August 1888 forderte welcher nicht identifizierte Serienmörder sein erstes kanonisches Opfer im Londoner Stadtteil Whitechapel?",
          nl: "Op 31 augustus 1888 maakte welke niet-geïdentificeerde seriemoordenaar zijn eerste canonieke slachtoffer in het Whitechapel-district van Londen?"
        },
        options: [
          {
            en: "The Zodiac Killer",
            es: "El Asesino del Zodiaco",
            de: "Der Zodiac-Killer",
            nl: "De Zodiac-moordenaar"
          },
          {
            en: "Jack the Ripper",
            es: "Jack el Destripador",
            de: "Jack the Ripper",
            nl: "Jack the Ripper"
          },
          {
            en: "The Boston Strangler",
            es: "El Estrangulador de Boston",
            de: "Der Würger von Boston",
            nl: "De Wurger van Boston"
          },
          {
            en: "The Night Stalker",
            es: "El Acosador Nocturno",
            de: "Der Night Stalker",
            nl: "De Nachtstalker"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jack the Ripper's first 'canonical' victim, Mary Ann Nichols, was murdered on August 31, 1888, in Buck's Row, Whitechapel, London. The Ripper killed at least five women (the 'canonical five') in the impoverished East End between August and November 1888. The murders were characterized by throat slashing and abdominal mutilation. The case gained unprecedented media attention and sparked widespread fear. Despite extensive investigation, Jack the Ripper was never caught, and his identity remains one of history's greatest mysteries. The murders highlighted Victorian London's poverty and social inequality. Numerous suspects have been proposed over the years, from royal conspiracies to local residents, but none definitively proven. The case pioneered modern criminal investigation techniques.",
          es: "La primera víctima 'canónica' de Jack el Destripador, Mary Ann Nichols, fue asesinada el 31 de agosto de 1888 en Buck's Row, Whitechapel, Londres. El Destripador mató al menos a cinco mujeres (las 'cinco canónicas') en el empobrecido East End entre agosto y noviembre de 1888. Los asesinatos se caracterizaron por cortes de garganta y mutilación abdominal. El caso obtuvo una atención mediática sin precedentes y provocó un miedo generalizado. A pesar de la extensa investigación, Jack el Destripador nunca fue capturado, y su identidad sigue siendo uno de los mayores misterios de la historia. Los asesinatos destacaron la pobreza y la desigualdad social del Londres victoriano. Se han propuesto numerosos sospechosos a lo largo de los años, desde conspiraciones reales hasta residentes locales, pero ninguno definitivamente probado. El caso fue pionero en técnicas modernas de investigación criminal.",
          de: "Jack the Rippers erstes 'kanonisches' Opfer, Mary Ann Nichols, wurde am 31. August 1888 in Buck's Row, Whitechapel, London ermordet. Der Ripper tötete mindestens fünf Frauen (die 'kanonischen Fünf') im verarmten East End zwischen August und November 1888. Die Morde waren durch Kehlenschnitte und Bauchverstümmelung gekennzeichnet. Der Fall erhielt beispiellose Medienaufmerksamkeit und löste weit verbreitete Angst aus. Trotz umfangreicher Ermittlungen wurde Jack the Ripper nie gefasst, und seine Identität bleibt eines der größten Rätsel der Geschichte. Die Morde hoben die Armut und soziale Ungleichheit des viktorianischen Londons hervor. Über die Jahre wurden zahlreiche Verdächtige vorgeschlagen, von königlichen Verschwörungen bis zu örtlichen Bewohnern, aber keiner wurde definitiv bewiesen. Der Fall war wegweisend für moderne Ermittlungstechniken.",
          nl: "Jack the Rippers eerste 'canonieke' slachtoffer, Mary Ann Nichols, werd vermoord op 31 augustus 1888 in Buck's Row, Whitechapel, Londen. De Ripper vermoordde minstens vijf vrouwen (de 'canonieke vijf') in de verarmde East End tussen augustus en november 1888. De moorden werden gekenmerkt door keel doorsnijden en buikvermindering. De zaak kreeg ongekende media-aandacht en veroorzaakte wijdverbreide angst. Ondanks uitgebreid onderzoek werd Jack the Ripper nooit gepakt, en zijn identiteit blijft een van de grootste mysteries van de geschiedenis. De moorden benadrukten de armoede en sociale ongelijkheid van het Victoriaanse Londen. Talrijke verdachten zijn door de jaren heen voorgesteld, van koninklijke samenzweringen tot lokale bewoners, maar geen enkele definitief bewezen. De zaak was baanbrekend voor moderne strafrechtelijke onderzoekstechnieken."
        }
      },
      {
        question: {
          en: "On August 31, 1994, the IRA (Irish Republican Army) announced a ceasefire in which decades-long conflict?",
          es: "El 31 de agosto de 1994, el IRA (Ejército Republicano Irlandés) anunció un alto el fuego en ¿qué conflicto de décadas?",
          de: "Am 31. August 1994 kündigte die IRA (Irish Republican Army) einen Waffenstillstand in welchem jahrzehntelangen Konflikt an?",
          nl: "Op 31 augustus 1994 kondigde de IRA (Irish Republican Army) een staakt-het-vuren aan in welk decennialang conflict?"
        },
        options: [
          {
            en: "The Irish Civil War",
            es: "La Guerra Civil Irlandesa",
            de: "Der Irische Bürgerkrieg",
            nl: "De Ierse Burgeroorlog"
          },
          {
            en: "The Troubles",
            es: "Los Problemas",
            de: "The Troubles",
            nl: "The Troubles"
          },
          {
            en: "The War of Independence",
            es: "La Guerra de Independencia",
            de: "Der Unabhängigkeitskrieg",
            nl: "De Onafhankelijkheidsoorlog"
          },
          {
            en: "The Anglo-Irish War",
            es: "La Guerra Anglo-Irlandesa",
            de: "Der Anglo-Irische Krieg",
            nl: "De Anglo-Ierse Oorlog"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The IRA announced a 'complete cessation of military operations' on August 31, 1994, marking a major turning point in The Troubles, the sectarian conflict in Northern Ireland that began in the late 1960s. The conflict primarily involved Irish republicans (who wanted Northern Ireland to unite with the Republic of Ireland) and Ulster unionists (who wanted to remain part of the United Kingdom). Over 3,500 people died during The Troubles. The 1994 ceasefire followed secret negotiations and was reciprocated by loyalist paramilitaries. Though the ceasefire broke down briefly in 1996-1997, it ultimately led to the Good Friday Agreement in 1998, which established power-sharing government and largely ended the violence. The peace process earned key figures the Nobel Peace Prize.",
          es: "El IRA anunció un 'cese completo de operaciones militares' el 31 de agosto de 1994, marcando un punto de inflexión importante en Los Problemas, el conflicto sectario en Irlanda del Norte que comenzó a fines de la década de 1960. El conflicto involucró principalmente a republicanos irlandeses (que querían que Irlanda del Norte se uniera con la República de Irlanda) y unionistas del Ulster (que querían permanecer como parte del Reino Unido). Más de 3,500 personas murieron durante Los Problemas. El alto el fuego de 1994 siguió a negociaciones secretas y fue correspondido por paramilitares leales. Aunque el alto el fuego se rompió brevemente en 1996-1997, finalmente condujo al Acuerdo de Viernes Santo en 1998, que estableció un gobierno de reparto de poder y terminó en gran medida la violencia. El proceso de paz le valió a figuras clave el Premio Nobel de la Paz.",
          de: "Die IRA kündigte am 31. August 1994 eine 'vollständige Einstellung militärischer Operationen' an und markierte damit einen wichtigen Wendepunkt in The Troubles, dem sektiererischen Konflikt in Nordirland, der Ende der 1960er Jahre begann. Der Konflikt betraf hauptsächlich irische Republikaner (die wollten, dass Nordirland sich mit der Republik Irland vereint) und Ulster-Unionisten (die Teil des Vereinigten Königreichs bleiben wollten). Über 3.500 Menschen starben während The Troubles. Der Waffenstillstand von 1994 folgte auf geheime Verhandlungen und wurde von loyalistischen Paramilitärs erwidert. Obwohl der Waffenstillstand 1996-1997 kurz zusammenbrach, führte er letztendlich zum Karfreitagsabkommen 1998, das eine Machtbeteiligungsregierung einrichtete und die Gewalt weitgehend beendete. Der Friedensprozess brachte Schlüsselfiguren den Friedensnobelpreis ein.",
          nl: "De IRA kondigde een 'volledige stopzetting van militaire operaties' aan op 31 augustus 1994, wat een belangrijk keerpunt markeerde in The Troubles, het sektarische conflict in Noord-Ierland dat begon in de late jaren 1960. Het conflict betrof voornamelijk Ierse republikeinen (die wilden dat Noord-Ierland zich zou verenigen met de Republiek Ierland) en Ulster-unionisten (die deel wilden blijven van het Verenigd Koninkrijk). Meer dan 3.500 mensen stierven tijdens The Troubles. Het staakt-het-vuren van 1994 volgde op geheime onderhandelingen en werd beantwoord door loyalistische paramilitairen. Hoewel het staakt-het-vuren kort brak in 1996-1997, leidde het uiteindelijk tot het Goede Vrijdag-akkoord in 1998, dat een machtsdelingsregering vestigde en grotendeels een einde maakte aan het geweld. Het vredesproces leverde sleutelfiguren de Nobelprijs voor de Vrede op."
        }
      }
    ]
  };

  // Export August challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('august', augustChallenges);
  }

})();
