(function() {
    const level2 = {
    name: {
      en: "History",
      es: "Historia",
      de: "Geschichte",
      nl: "Geschiedenis"
},
    questions: [
        {
            question: {
                en: "During which period were the earliest sections of the Great Wall built?",
                es: "¿Durante qué período se construyeron las primeras secciones de la Gran Muralla?",
                de: "In welcher Zeit wurden die frühesten Abschnitte der Chinesischen Mauer gebaut?",
                nl: "In welke periode werden de vroegste secties van de Chinese Muur gebouwd?"
            },
            options: [
                {
                    en: "Warring States period",
                    es: "Período de los Reinos Combatientes",
                    de: "Zeit der Streitenden Reiche",
                    nl: "Periode van de Strijdende Staten"
                },
                {
                    en: "Tang Dynasty",
                    es: "Dinastía Tang",
                    de: "Tang-Dynastie",
                    nl: "Tang-dynastie"
                },
                {
                    en: "Song Dynasty",
                    es: "Dinastía Song",
                    de: "Song-Dynastie",
                    nl: "Song-dynastie"
                },
                {
                    en: "Yuan Dynasty",
                    es: "Dinastía Yuan",
                    de: "Yuan-Dynastie",
                    nl: "Yuan-dynastie"
                }
            ],
            correct: 0,
            explanation: {
                en: "The earliest walls were built during the Warring States period (475-221 BC) by various states to defend their territories before China was unified.",
                es: "Los primeros muros se construyeron durante el período de los Reinos Combatientes (475-221 a.C.) por varios estados para defender sus territorios antes de que China fuera unificada.",
                de: "Die frühesten Mauern wurden während der Zeit der Streitenden Reiche (475-221 v. Chr.) von verschiedenen Staaten gebaut, um ihre Territorien zu verteidigen, bevor China vereinigt wurde.",
                nl: "De vroegste muren werden gebouwd tijdens de periode van de Strijdende Staten (475-221 v.Chr.) door verschillende staten om hun gebieden te verdedigen voordat China werd verenigd."
            }
        },
        {
            question: {
                en: "What did Qin Shi Huang do with the pre-existing wall sections?",
                es: "¿Qué hizo Qin Shi Huang con las secciones de muro preexistentes?",
                de: "Was machte Qin Shi Huang mit den bereits existierenden Mauerabschnitten?",
                nl: "Wat deed Qin Shi Huang met de reeds bestaande muursecties?"
            },
            options: [
                {
                    en: "He destroyed them completely",
                    es: "Las destruyó completamente",
                    de: "Er zerstörte sie vollständig",
                    nl: "Hij vernietigde ze volledig"
                },
                {
                    en: "He connected and extended them",
                    es: "Las conectó y extendió",
                    de: "Er verband und erweiterte sie",
                    nl: "Hij verbond en breidde ze uit"
                },
                {
                    en: "He left them unchanged",
                    es: "Las dejó sin cambios",
                    de: "Er ließ sie unverändert",
                    nl: "Hij liet ze onveranderd"
                },
                {
                    en: "He moved them further south",
                    es: "Las movió más al sur",
                    de: "Er verlegte sie weiter nach Süden",
                    nl: "Hij verplaatste ze verder naar het zuiden"
                }
            ],
            correct: 1,
            explanation: {
                en: "Qin Shi Huang ordered the connection of pre-existing walls built by different states and extended them to create a unified defensive system.",
                es: "Qin Shi Huang ordenó la conexión de los muros preexistentes construidos por diferentes estados y los extendió para crear un sistema defensivo unificado.",
                de: "Qin Shi Huang ordnete die Verbindung bereits existierender Mauern an, die von verschiedenen Staaten gebaut wurden, und erweiterte sie zu einem einheitlichen Verteidigungssystem.",
                nl: "Qin Shi Huang gaf opdracht tot het verbinden van reeds bestaande muren gebouwd door verschillende staten en breidde ze uit om een verenigd verdedigingssysteem te creëren."
            }
        },
        {
            question: {
                en: "How long did it take to build the initial unified Great Wall under the Qin Dynasty?",
                es: "¿Cuánto tiempo tomó construir la Gran Muralla unificada inicial bajo la Dinastía Qin?",
                de: "Wie lange dauerte es, die erste vereinigte Chinesische Mauer unter der Qin-Dynastie zu bauen?",
                nl: "Hoe lang duurde het om de initiële verenigde Chinese Muur te bouwen onder de Qin-dynastie?"
            },
            options: [
                {
                    en: "5 yrs",
                    es: "5 años",
                    de: "5 Jahre",
                    nl: "5 jaar"
                },
                {
                    en: "About 10 yrs",
                    es: "Alrededor de 10 años",
                    de: "Etwa 10 Jahre",
                    nl: "Ongeveer 10 jaar"
                },
                {
                    en: "50 yrs",
                    es: "50 años",
                    de: "50 Jahre",
                    nl: "50 jaar"
                },
                {
                    en: "100 yrs",
                    es: "100 años",
                    de: "100 Jahre",
                    nl: "100 jaar"
                }
            ],
            correct: 1,
            explanation: {
                en: "The construction of the initial unified Great Wall under Qin Shi Huang took approximately 10 years, from around 221-210 BC, employing hundreds of thousands of workers.",
                es: "La construcción de la Gran Muralla unificada inicial bajo Qin Shi Huang tomó aproximadamente 10 años, desde alrededor del 221-210 a.C., empleando cientos de miles de trabajadores.",
                de: "Der Bau der ersten vereinigten Chinesischen Mauer unter Qin Shi Huang dauerte etwa 10 Jahre, von etwa 221-210 v. Chr., wobei Hunderttausende von Arbeitern beschäftigt waren.",
                nl: "De bouw van de initiële verenigde Chinese Muur onder Qin Shi Huang duurde ongeveer 10 jaar, van ongeveer 221-210 v.Chr., waarbij honderdduizenden arbeiders werden ingezet."
            }
        },
        {
            question: {
                en: "Who comprised the workforce that built the Great Wall?",
                es: "¿Quiénes componían la fuerza laboral que construyó la Gran Muralla?",
                de: "Aus wem bestand die Arbeiterschaft, die die Chinesische Mauer baute?",
                nl: "Uit wie bestond de arbeidskracht die de Chinese Muur bouwde?"
            },
            options: [
                {
                    en: "Only professional builders",
                    es: "Solo constructores profesionales",
                    de: "Nur professionelle Bauarbeiter",
                    nl: "Alleen professionele bouwers"
                },
                {
                    en: "Soldiers, peasants, and prisoners",
                    es: "Soldados, campesinos y prisioneros",
                    de: "Soldaten, Bauern und Gefangene",
                    nl: "Soldaten, boeren en gevangenen"
                },
                {
                    en: "Foreign slaves",
                    es: "Esclavos extranjeros",
                    de: "Ausländische Sklaven",
                    nl: "Buitenlandse slaven"
                },
                {
                    en: "Volunteers only",
                    es: "Solo voluntarios",
                    de: "Nur Freiwillige",
                    nl: "Alleen vrijwilligers"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall was built by a diverse workforce including soldiers, peasants performing corvée labor, and prisoners serving punishment through forced labor.",
                es: "La Gran Muralla fue construida por una fuerza laboral diversa que incluía soldados, campesinos realizando trabajo de corvea y prisioneros cumpliendo castigo mediante trabajo forzado.",
                de: "Die Chinesische Mauer wurde von einer vielfältigen Arbeiterschaft gebaut, darunter Soldaten, Bauern, die Fronarbeit leisteten, und Gefangene, die durch Zwangsarbeit ihre Strafe verbüßten.",
                nl: "De Chinese Muur werd gebouwd door een diverse arbeidskracht bestaande uit soldaten, boeren die herendienst verrichtten en gevangenen die hun straf uitzaten door dwangarbeid."
            }
        },
        {
            question: {
                en: "What construction method was used to create the earthen sections of the wall?",
                es: "¿Qué método de construcción se usó para crear las secciones de tierra del muro?",
                de: "Welche Baumethode wurde verwendet, um die Erdabschnitte der Mauer zu erstellen?",
                nl: "Welke bouwmethode werd gebruikt om de aarden secties van de muur te maken?"
            },
            options: [
                {
                    en: "Rammed earth technique",
                    es: "Técnica de tierra apisonada",
                    de: "Stampflehm-Technik",
                    nl: "Aangestampte aarde techniek"
                },
                {
                    en: "Mud brick stacking",
                    es: "Apilamiento de ladrillos de barro",
                    de: "Lehmziegelstapelung",
                    nl: "Moddersteenstapeling"
                },
                {
                    en: "Clay molding",
                    es: "Moldeado de arcilla",
                    de: "Tonformung",
                    nl: "Kleivorming"
                },
                {
                    en: "Sand compaction",
                    es: "Compactación de arena",
                    de: "Sandverdichtung",
                    nl: "Zandcompactie"
                }
            ],
            correct: 0,
            explanation: {
                en: "The rammed earth technique (hangtu) was used, where layers of earth were compressed between wooden frames to create solid, durable walls.",
                es: "Se utilizó la técnica de tierra apisonada (hangtu), donde se comprimían capas de tierra entre marcos de madera para crear muros sólidos y duraderos.",
                de: "Die Stampflehm-Technik (Hangtu) wurde verwendet, bei der Erdschichten zwischen Holzrahmen verdichtet wurden, um solide, langlebige Mauern zu schaffen.",
                nl: "De aangestampte aarde techniek (hangtu) werd gebruikt, waarbij lagen aarde werden samengeperst tussen houten frames om solide, duurzame muren te creëren."
            }
        },
        {
            question: {
                en: "During which dynasty was the Great Wall extended furthest west?",
                es: "¿Durante qué dinastía se extendió la Gran Muralla más al oeste?",
                de: "Unter welcher Dynastie wurde die Chinesische Mauer am weitesten nach Westen erweitert?",
                nl: "Tijdens welke dynastie werd de Chinese Muur het verst naar het westen uitgebreid?"
            },
            options: [
                {
                    en: "Qin Dynasty",
                    es: "Dinastía Qin",
                    de: "Qin-Dynastie",
                    nl: "Qin-dynastie"
                },
                {
                    en: "Han Dynasty",
                    es: "Dinastía Han",
                    de: "Han-Dynastie",
                    nl: "Han-dynastie"
                },
                {
                    en: "Ming Dynasty",
                    es: "Dinastía Ming",
                    de: "Ming-Dynastie",
                    nl: "Ming-dynastie"
                },
                {
                    en: "Song Dynasty",
                    es: "Dinastía Song",
                    de: "Song-Dynastie",
                    nl: "Song-dynastie"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Han Dynasty (206 BC - 220 AD) extended the Great Wall furthest west into the Gobi Desert to protect the Silk Road trade routes.",
                es: "La Dinastía Han (206 a.C. - 220 d.C.) extendió la Gran Muralla más al oeste en el Desierto de Gobi para proteger las rutas comerciales de la Ruta de la Seda.",
                de: "Die Han-Dynastie (206 v. Chr. - 220 n. Chr.) erweiterte die Chinesische Mauer am weitesten nach Westen in die Wüste Gobi, um die Handelsrouten der Seidenstraße zu schützen.",
                nl: "De Han-dynastie (206 v.Chr. - 220 n.Chr.) breidde de Chinese Muur het verst naar het westen uit in de Gobi-woestijn om de handelsroutes van de Zijderoute te beschermen."
            }
        },
        {
            question: {
                en: "What innovation did the Ming Dynasty introduce to wall construction?",
                es: "¿Qué innovación introdujo la Dinastía Ming en la construcción de muros?",
                de: "Welche Innovation führte die Ming-Dynastie beim Mauerbau ein?",
                nl: "Welke innovatie introduceerde de Ming-dynastie in de muurbouw?"
            },
            options: [
                {
                    en: "Use of concrete",
                    es: "Uso de hormigón",
                    de: "Verwendung von Beton",
                    nl: "Gebruik van beton"
                },
                {
                    en: "Extensive use of bricks and stone",
                    es: "Uso extensivo de ladrillos y piedra",
                    de: "Ausgiebige Verwendung von Ziegeln und Stein",
                    nl: "Uitgebreid gebruik van bakstenen en steen"
                },
                {
                    en: "Metal reinforcement",
                    es: "Refuerzo metálico",
                    de: "Metallverstärkung",
                    nl: "Metalen versterking"
                },
                {
                    en: "Glass windows",
                    es: "Ventanas de vidrio",
                    de: "Glasfenster",
                    nl: "Glazen ramen"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Ming Dynasty made extensive use of bricks and stone instead of rammed earth, creating the stronger, more durable sections that survive today.",
                es: "La Dinastía Ming hizo un uso extensivo de ladrillos y piedra en lugar de tierra apisonada, creando las secciones más fuertes y duraderas que sobreviven hoy.",
                de: "Die Ming-Dynastie verwendete ausgiebig Ziegel und Stein anstelle von Stampflehm und schuf die stärkeren, langlebigeren Abschnitte, die heute noch existieren.",
                nl: "De Ming-dynastie maakte uitgebreid gebruik van bakstenen en steen in plaats van aangestampte aarde, waardoor de sterkere, duurzamere secties werden gecreëerd die vandaag nog bestaan."
            }
        },
        {
            question: {
                en: "How were building materials transported to construction sites in mountainous areas?",
                es: "¿Cómo se transportaban los materiales de construcción a los sitios de construcción en áreas montañosas?",
                de: "Wie wurden Baumaterialien zu Baustellen in bergigen Gebieten transportiert?",
                nl: "Hoe werden bouwmaterialen naar bouwplaatsen in bergachtige gebieden getransporteerd?"
            },
            options: [
                {
                    en: "By cable systems",
                    es: "Por sistemas de cables",
                    de: "Durch Seilsysteme",
                    nl: "Via kabelsystemen"
                },
                {
                    en: "By human carriers, goats, and simple tools",
                    es: "Por cargadores humanos, cabras y herramientas simples",
                    de: "Durch menschliche Träger, Ziegen und einfache Werkzeuge",
                    nl: "Door menselijke dragers, geiten en eenvoudige gereedschappen"
                },
                {
                    en: "By helicopter",
                    es: "Por helicóptero",
                    de: "Per Hubschrauber",
                    nl: "Per helikopter"
                },
                {
                    en: "By river boats",
                    es: "Por botes fluviales",
                    de: "Per Flussboote",
                    nl: "Via rivierboten"
                }
            ],
            correct: 1,
            explanation: {
                en: "Materials were carried by human laborers, pack animals like goats, and using simple tools like baskets, wheelbarrows, and pulleys to navigate the difficult terrain.",
                es: "Los materiales eran transportados por trabajadores humanos, animales de carga como cabras, y usando herramientas simples como cestas, carretillas y poleas para navegar el terreno difícil.",
                de: "Materialien wurden von menschlichen Arbeitern, Lasttieren wie Ziegen transportiert und mit einfachen Werkzeugen wie Körben, Schubkarren und Flaschenzügen durch das schwierige Gelände bewegt.",
                nl: "Materialen werden gedragen door menselijke arbeiders, lastdieren zoals geiten, en met gebruik van eenvoudige gereedschappen zoals manden, kruiwagens en katrolsystemen om door het moeilijke terrein te navigeren."
            }
        },
        {
            question: {
                en: "What happened to much of the Great Wall during the Qing Dynasty?",
                es: "¿Qué pasó con gran parte de la Gran Muralla durante la Dinastía Qing?",
                de: "Was geschah mit einem Großteil der Chinesischen Mauer während der Qing-Dynastie?",
                nl: "Wat gebeurde er met een groot deel van de Chinese Muur tijdens de Qing-dynastie?"
            },
            options: [
                {
                    en: "It was completely rebuilt",
                    es: "Fue completamente reconstruida",
                    de: "Sie wurde vollständig umgebaut",
                    nl: "Het werd volledig herbouwd"
                },
                {
                    en: "It was neglected and fell into disrepair",
                    es: "Fue descuidada y cayó en mal estado",
                    de: "Sie wurde vernachlässigt und verfiel",
                    nl: "Het werd verwaarloosd en raakte in verval"
                },
                {
                    en: "It was extended further north",
                    es: "Fue extendida más al norte",
                    de: "Sie wurde weiter nach Norden erweitert",
                    nl: "Het werd verder naar het noorden uitgebreid"
                },
                {
                    en: "It was converted to a highway",
                    es: "Fue convertida en una carretera",
                    de: "Sie wurde zu einer Autobahn umgebaut",
                    nl: "Het werd omgebouwd tot een snelweg"
                }
            ],
            correct: 1,
            explanation: {
                en: "During the Qing Dynasty (1644-1912), the wall was largely neglected as the Manchu rulers had come from beyond the wall and saw less strategic value in maintaining it.",
                es: "Durante la Dinastía Qing (1644-1912), la muralla fue en gran medida descuidada ya que los gobernantes manchúes habían venido de más allá de la muralla y veían menos valor estratégico en mantenerla.",
                de: "Während der Qing-Dynastie (1644-1912) wurde die Mauer weitgehend vernachlässigt, da die Mandschu-Herrscher von jenseits der Mauer kamen und weniger strategischen Wert darin sahen, sie zu erhalten.",
                nl: "Tijdens de Qing-dynastie (1644-1912) werd de muur grotendeels verwaarloosd omdat de Mantsjoe-heersers van voorbij de muur kwamen en minder strategische waarde zagen in het onderhouden ervan."
            }
        },
        {
            question: {
                en: "What was sticky rice mortar used for in the Great Wall's construction?",
                es: "¿Para qué se usó el mortero de arroz glutinoso en la construcción de la Gran Muralla?",
                de: "Wofür wurde Klebreis-Mörtel beim Bau der Chinesischen Mauer verwendet?",
                nl: "Waarvoor werd kleverige rijstmortel gebruikt bij de bouw van de Chinese Muur?"
            },
            options: [
                {
                    en: "As food for workers",
                    es: "Como alimento para trabajadores",
                    de: "Als Nahrung für Arbeiter",
                    nl: "Als voedsel voor arbeiders"
                },
                {
                    en: "As a binding agent for bricks and stones",
                    es: "Como agente aglutinante para ladrillos y piedras",
                    de: "Als Bindemittel für Ziegel und Steine",
                    nl: "Als bindmiddel voor bakstenen en stenen"
                },
                {
                    en: "To waterproof the walls",
                    es: "Para impermeabilizar los muros",
                    de: "Zur Abdichtung der Mauern",
                    nl: "Om de muren waterdicht te maken"
                },
                {
                    en: "For decorative purposes",
                    es: "Con fines decorativos",
                    de: "Für dekorative Zwecke",
                    nl: "Voor decoratieve doeleinden"
                }
            ],
            correct: 1,
            explanation: {
                en: "Sticky rice mortar, mixed with lime, was used during the Ming Dynasty as a highly effective binding agent that made the wall extremely strong and durable.",
                es: "El mortero de arroz glutinoso, mezclado con cal, se usó durante la Dinastía Ming como un agente aglutinante altamente efectivo que hizo la muralla extremadamente fuerte y duradera.",
                de: "Klebreis-Mörtel, gemischt mit Kalk, wurde während der Ming-Dynastie als hocheffektives Bindemittel verwendet, das die Mauer extrem stark und langlebig machte.",
                nl: "Kleverige rijstmortel, gemengd met kalk, werd tijdens de Ming-dynastie gebruikt als een zeer effectief bindmiddel dat de muur extreem sterk en duurzaam maakte."
            }
        },
        {
            question: {
                en: "How long did the total construction of the Great Wall span across different dynasties?",
                es: "¿Cuánto tiempo abarcó la construcción total de la Gran Muralla a través de diferentes dinastías?",
                de: "Wie lange dauerte der gesamte Bau der Chinesischen Mauer über verschiedene Dynastien hinweg?",
                nl: "Hoe lang duurde de totale bouw van de Chinese Muur over verschillende dynastieën heen?"
            },
            options: [
                {
                    en: "500 yrs",
                    es: "500 años",
                    de: "500 Jahre",
                    nl: "500 jaar"
                },
                {
                    en: "1,000 yrs",
                    es: "1.000 años",
                    de: "1.000 Jahre",
                    nl: "1.000 jaar"
                },
                {
                    en: "Over 2,000 yrs",
                    es: "Más de 2.000 años",
                    de: "Über 2.000 Jahre",
                    nl: "Meer dan 2.000 jaar"
                },
                {
                    en: "3,500 yrs",
                    es: "3.500 años",
                    de: "3.500 Jahre",
                    nl: "3.500 jaar"
                }
            ],
            correct: 2,
            explanation: {
                en: "Construction of the Great Wall spanned over 2,000 years, from the 7th century BC through the Ming Dynasty (ended 1644), with different dynasties building and extending various sections.",
                es: "La construcción de la Gran Muralla abarcó más de 2.000 años, desde el siglo VII a.C. hasta la Dinastía Ming (terminó en 1644), con diferentes dinastías construyendo y extendiendo varias secciones.",
                de: "Der Bau der Chinesischen Mauer erstreckte sich über 2.000 Jahre, vom 7. Jahrhundert v. Chr. bis zur Ming-Dynastie (endete 1644), wobei verschiedene Dynastien verschiedene Abschnitte bauten und erweiterten.",
                nl: "De bouw van de Chinese Muur duurde meer dan 2.000 jaar, van de 7e eeuw v.Chr. tot de Ming-dynastie (eindigde in 1644), waarbij verschillende dynastieën verschillende secties bouwden en uitbreidden."
            }
        },
        {
            question: {
                en: "What was the primary building material used in desert sections of the Great Wall?",
                es: "¿Cuál fue el material de construcción principal usado en las secciones desérticas de la Gran Muralla?",
                de: "Was war das Hauptbaumaterial in den Wüstenabschnitten der Chinesischen Mauer?",
                nl: "Wat was het primaire bouwmateriaal dat werd gebruikt in woestijnsecties van de Chinese Muur?"
            },
            options: [
                {
                    en: "Brick",
                    es: "Ladrillo",
                    de: "Ziegel",
                    nl: "Baksteen"
                },
                {
                    en: "Tamarisk branches and reed",
                    es: "Ramas de tamarisco y junco",
                    de: "Tamariskenzweige und Schilf",
                    nl: "Tamarisk takken en riet"
                },
                {
                    en: "Sandstone blocks",
                    es: "Bloques de arenisca",
                    de: "Sandsteinblöcke",
                    nl: "Zandsteenblokken"
                },
                {
                    en: "Adobe",
                    es: "Adobe",
                    de: "Lehm",
                    nl: "Adobe"
                }
            ],
            correct: 1,
            explanation: {
                en: "In desert regions where stone and brick were scarce, builders used layers of tamarisk branches, reed, and gravel bound together with sand and clay.",
                es: "En regiones desérticas donde la piedra y el ladrillo escaseaban, los constructores usaban capas de ramas de tamarisco, junco y grava unidos con arena y arcilla.",
                de: "In Wüstenregionen, wo Stein und Ziegel knapp waren, verwendeten die Bauarbeiter Schichten aus Tamariskenzweigen, Schilf und Kies, die mit Sand und Lehm verbunden waren.",
                nl: "In woestijngebieden waar steen en baksteen schaars waren, gebruikten bouwers lagen tamarisk takken, riet en grind die met zand en klei werden verbonden."
            }
        },
        {
            question: {
                en: "Why was the Great Wall built with different materials in different regions?",
                es: "¿Por qué se construyó la Gran Muralla con diferentes materiales en diferentes regiones?",
                de: "Warum wurde die Chinesische Mauer in verschiedenen Regionen mit unterschiedlichen Materialien gebaut?",
                nl: "Waarom werd de Chinese Muur in verschillende regio's met verschillende materialen gebouwd?"
            },
            options: [
                {
                    en: "For aesthetic variety",
                    es: "Por variedad estética",
                    de: "Für ästhetische Vielfalt",
                    nl: "Voor esthetische variatie"
                },
                {
                    en: "Due to availability of local materials",
                    es: "Debido a la disponibilidad de materiales locales",
                    de: "Aufgrund der Verfügbarkeit lokaler Materialien",
                    nl: "Door beschikbaarheid van lokale materialen"
                },
                {
                    en: "Different emperors had different preferences",
                    es: "Diferentes emperadores tenían diferentes preferencias",
                    de: "Verschiedene Kaiser hatten unterschiedliche Vorlieben",
                    nl: "Verschillende keizers hadden verschillende voorkeuren"
                },
                {
                    en: "To confuse invaders",
                    es: "Para confundir a los invasores",
                    de: "Um Eindringlinge zu verwirren",
                    nl: "Om indringers te verwarren"
                }
            ],
            correct: 1,
            explanation: {
                en: "Builders used locally available materials to reduce transportation costs and time. Mountains provided stone, plains had earth, and forests supplied wood.",
                es: "Los constructores usaban materiales disponibles localmente para reducir costos y tiempo de transporte. Las montañas proporcionaban piedra, las llanuras tenían tierra y los bosques suministraban madera.",
                de: "Bauarbeiter verwendeten lokal verfügbare Materialien, um Transport kosten und -zeit zu reduzieren. Berge lieferten Stein, Ebenen hatten Erde und Wälder stellten Holz bereit.",
                nl: "Bouwers gebruikten lokaal beschikbare materialen om transportkosten en tijd te verminderen. Bergen leverden steen, vlaktes hadden aarde en bossen leverden hout."
            }
        },
        {
            question: {
                en: "What major reconstruction effort began in the 1950s?",
                es: "¿Qué importante esfuerzo de reconstrucción comenzó en la década de 1950?",
                de: "Welche große Wiederaufbaumaßnahme begann in den 1950er Jahren?",
                nl: "Welke grote wederopbouwinspanning begon in de jaren 1950?"
            },
            options: [
                {
                    en: "Complete demolition and rebuilding",
                    es: "Demolición completa y reconstrucción",
                    de: "Vollständiger Abriss und Wiederaufbau",
                    nl: "Volledige afbraak en herbouw"
                },
                {
                    en: "Restoration and preservation for tourism",
                    es: "Restauración y preservación para el turismo",
                    de: "Restaurierung und Erhaltung für den Tourismus",
                    nl: "Restauratie en behoud voor toerisme"
                },
                {
                    en: "Converting it into a military base",
                    es: "Convertirla en una base militar",
                    de: "Umwandlung in eine Militärbasis",
                    nl: "Omzetten naar een militaire basis"
                },
                {
                    en: "Adding modern fortifications",
                    es: "Añadir fortificaciones modernas",
                    de: "Hinzufügen moderner Befestigungen",
                    nl: "Toevoegen van moderne fortificaties"
                }
            ],
            correct: 1,
            explanation: {
                en: "In the 1950s, the Chinese government began systematic restoration of certain sections, particularly Badaling, to preserve the wall and develop it as a tourist attraction.",
                es: "En la década de 1950, el gobierno chino comenzó la restauración sistemática de ciertas secciones, particularmente Badaling, para preservar la muralla y desarrollarla como atracción turística.",
                de: "In den 1950er Jahren begann die chinesische Regierung mit der systematischen Restaurierung bestimmter Abschnitte, insbesondere Badaling, um die Mauer zu erhalten und als Touristenattraktion zu entwickeln.",
                nl: "In de jaren 1950 begon de Chinese regering met systematische restauratie van bepaalde secties, met name Badaling, om de muur te behouden en te ontwikkelen als toeristische attractie."
            }
        },
        {
            question: {
                en: "What construction technique helped the wall withstand earthquakes?",
                es: "¿Qué técnica de construcción ayudó al muro a resistir terremotos?",
                de: "Welche Bautechnik half der Mauer, Erdbeben standzuhalten?",
                nl: "Welke bouwtechniek hielp de muur om aardbevingen te weerstaan?"
            },
            options: [
                {
                    en: "Steel reinforcement bars",
                    es: "Barras de refuerzo de acero",
                    de: "Stahlbewehrungsstäbe",
                    nl: "Stalen wapeningsstaven"
                },
                {
                    en: "Flexible mortar joints",
                    es: "Juntas de mortero flexibles",
                    de: "Flexible Mörtelfugen",
                    nl: "Flexibele mortelvoegen"
                },
                {
                    en: "Rubber foundations",
                    es: "Cimientos de caucho",
                    de: "Gummifundamente",
                    nl: "Rubberen funderingen"
                },
                {
                    en: "Deep anchoring",
                    es: "Anclaje profundo",
                    de: "Tiefe Verankerung",
                    nl: "Diepe verankering"
                }
            ],
            correct: 1,
            explanation: {
                en: "The use of glutinous rice mortar created flexible joints between bricks and stones, allowing slight movement during earthquakes without collapse.",
                es: "El uso de mortero de arroz glutinoso creó juntas flexibles entre ladrillos y piedras, permitiendo movimiento ligero durante terremotos sin colapso.",
                de: "Die Verwendung von Klebreis-Mörtel schuf flexible Fugen zwischen Ziegeln und Steinen, die bei Erdbeben leichte Bewegungen ohne Einsturz ermöglichten.",
                nl: "Het gebruik van kleverige rijstmortel creëerde flexibele voegen tussen bakstenen en stenen, waardoor lichte beweging tijdens aardbevingen mogelijk was zonder instorting."
            }
        },
        {
            question: {
                en: "How did builders adapt construction techniques in mountainous terrain?",
                es: "¿Cómo adaptaron los constructores las técnicas de construcción en terreno montañoso?",
                de: "Wie passten die Bauarbeiter die Bautechniken im Berggelände an?",
                nl: "Hoe pasten bouwers bouwtechnieken aan in bergachtig terrein?"
            },
            options: [
                {
                    en: "They avoided mountains completely",
                    es: "Evitaron completamente las montañas",
                    de: "Sie mieden Berge vollständig",
                    nl: "Ze vermeden bergen volledig"
                },
                {
                    en: "They followed ridge lines and used natural slopes",
                    es: "Siguieron las líneas de las crestas y usaron pendientes naturales",
                    de: "Sie folgten Gebirgskämmen und nutzten natürliche Hänge",
                    nl: "Ze volgden bergkamlijnen en gebruikten natuurlijke hellingen"
                },
                {
                    en: "They tunneled through mountains",
                    es: "Hicieron túneles a través de las montañas",
                    de: "Sie gruben Tunnel durch Berge",
                    nl: "Ze groeven tunnels door bergen"
                },
                {
                    en: "They used explosives to level terrain",
                    es: "Usaron explosivos para nivelar el terreno",
                    de: "Sie verwendeten Sprengstoff zum Einebnen des Geländes",
                    nl: "Ze gebruikten explosieven om terrein te nivelleren"
                }
            ],
            correct: 1,
            explanation: {
                en: "Builders strategically followed mountain ridge lines, incorporating natural slopes and peaks into the wall's design to maximize defensive advantage while minimizing construction difficulty.",
                es: "Los constructores siguieron estratégicamente las líneas de las crestas montañosas, incorporando pendientes y picos naturales en el diseño del muro para maximizar la ventaja defensiva mientras minimizaban la dificultad de construcción.",
                de: "Bauarbeiter folgten strategisch den Bergkämmen und integrierten natürliche Hänge und Gipfel in das Design der Mauer, um den Verteidigungsvorteil zu maximieren und gleichzeitig die Bauschwierigkeiten zu minimieren.",
                nl: "Bouwers volgden strategisch bergkamlijnen en integreerden natuurlijke hellingen en toppen in het ontwerp van de muur om defensieve voordelen te maximaliseren terwijl ze bouwmoeilijkheden minimaliseerden."
            }
        },
        {
            question: {
                en: "What happened to many sections of the Great Wall during the Cultural Revolution?",
                es: "¿Qué pasó con muchas secciones de la Gran Muralla durante la Revolución Cultural?",
                de: "Was geschah mit vielen Abschnitten der Chinesischen Mauer während der Kulturrevolution?",
                nl: "Wat gebeurde er met veel secties van de Chinese Muur tijdens de Culturele Revolutie?"
            },
            options: [
                {
                    en: "They were extensively restored",
                    es: "Fueron ampliamente restauradas",
                    de: "Sie wurden umfassend restauriert",
                    nl: "Ze werden uitgebreid gerestaureerd"
                },
                {
                    en: "They were damaged as bricks were taken for other construction",
                    es: "Fueron dañadas ya que se tomaron ladrillos para otras construcciones",
                    de: "Sie wurden beschädigt, da Ziegel für andere Bauten entnommen wurden",
                    nl: "Ze werden beschadigd doordat stenen werden gebruikt voor andere constructies"
                },
                {
                    en: "They were declared protected monuments",
                    es: "Fueron declaradas monumentos protegidos",
                    de: "Sie wurden zu geschützten Denkmälern erklärt",
                    nl: "Ze werden uitgeroepen tot beschermde monumenten"
                },
                {
                    en: "They were completely rebuilt",
                    es: "Fueron completamente reconstruidas",
                    de: "Sie wurden vollständig umgebaut",
                    nl: "Ze werden volledig herbouwd"
                }
            ],
            correct: 1,
            explanation: {
                en: "During the Cultural Revolution (1966-1976), many sections of the Great Wall were damaged as people took bricks and stones for local construction projects, and the wall was sometimes seen as a symbol of feudalism.",
                es: "Durante la Revolución Cultural (1966-1976), muchas secciones de la Gran Muralla fueron dañadas ya que la gente tomó ladrillos y piedras para proyectos de construcción local, y la muralla a veces era vista como un símbolo del feudalismo.",
                de: "Während der Kulturrevolution (1966-1976) wurden viele Abschnitte der Chinesischen Mauer beschädigt, da Menschen Ziegel und Steine für lokale Bauvorhaben nahmen, und die Mauer manchmal als Symbol des Feudalismus angesehen wurde.",
                nl: "Tijdens de Culturele Revolutie (1966-1976) werden veel secties van de Chinese Muur beschadigd omdat mensen stenen en bakstenen namen voor lokale bouwprojecten, en de muur werd soms gezien als een symbool van feodalisme."
            }
        },
        {
            question: {
                en: "What was the typical width of the Great Wall at its base?",
                es: "¿Cuál era el ancho típico de la Gran Muralla en su base?",
                de: "Wie breit war die Chinesische Mauer typischerweise an ihrer Basis?",
                nl: "Wat was de typische breedte van de Chinese Muur aan de basis?"
            },
            options: [
                {
                    en: "1-2 m",
                    es: "1-2 metros",
                    de: "1-2 Meter",
                    nl: "1-2 meter"
                },
                {
                    en: "5-8 m",
                    es: "5-8 metros",
                    de: "5-8 Meter",
                    nl: "5-8 meter"
                },
                {
                    en: "10-12 m",
                    es: "10-12 metros",
                    de: "10-12 Meter",
                    nl: "10-12 meter"
                },
                {
                    en: "15-20 m",
                    es: "15-20 metros",
                    de: "15-20 Meter",
                    nl: "15-20 meter"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall was typically 5-8 meters wide at the base, allowing horses and soldiers to pass along the top, while being narrower at the top for easier defense.",
                es: "La Gran Muralla era típicamente de 5-8 metros de ancho en la base, permitiendo que caballos y soldados pasaran por la parte superior, mientras era más estrecha en la parte superior para una defensa más fácil.",
                de: "Die Chinesische Mauer war typischerweise 5-8 Meter breit an der Basis, was es Pferden und Soldaten ermöglichte, oben entlang zu gehen, während sie oben schmaler war für einfachere Verteidigung.",
                nl: "De Chinese Muur was typisch 5-8 meter breed aan de basis, waardoor paarden en soldaten bovenop konden passeren, terwijl deze smaller was bovenaan voor gemakkelijkere verdediging."
            }
        },
        {
            question: {
                en: "What motivated the Ming Dynasty to invest heavily in wall construction?",
                es: "¿Qué motivó a la Dinastía Ming a invertir fuertemente en la construcción de muros?",
                de: "Was motivierte die Ming-Dynastie, stark in den Mauerbau zu investieren?",
                nl: "Wat motiveerde de Ming-dynastie om zwaar te investeren in muurbouw?"
            },
            options: [
                {
                    en: "Economic expansion",
                    es: "Expansión económica",
                    de: "Wirtschaftliche Expansion",
                    nl: "Economische expansie"
                },
                {
                    en: "Threat from Mongol raids",
                    es: "Amenaza de incursiones mongolas",
                    de: "Bedrohung durch mongolische Überfälle",
                    nl: "Dreiging van Mongoolse invallen"
                },
                {
                    en: "Religious purposes",
                    es: "Propósitos religiosos",
                    de: "Religiöse Zwecke",
                    nl: "Religieuze doeleinden"
                },
                {
                    en: "International prestige",
                    es: "Prestigio internacional",
                    de: "Internationales Prestige",
                    nl: "Internationaal prestige"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Ming Dynasty invested heavily in the Great Wall due to persistent threats from Mongol raids. They built the most extensive and durable sections using brick and stone.",
                es: "La Dinastía Ming invirtió fuertemente en la Gran Muralla debido a las persistentes amenazas de incursiones mongolas. Construyeron las secciones más extensas y duraderas usando ladrillo y piedra.",
                de: "Die Ming-Dynastie investierte stark in die Chinesische Mauer aufgrund anhaltender Bedrohungen durch mongolische Überfälle. Sie bauten die umfangreichsten und langlebigsten Abschnitte aus Ziegeln und Stein.",
                nl: "De Ming-dynastie investeerde zwaar in de Chinese Muur vanwege aanhoudende bedreigingen van Mongoolse invallen. Ze bouwden de meest uitgebreide en duurzame secties met baksteen en steen."
            }
        },
        {
            question: {
                en: "What construction innovation helped speed up the building process during the Ming Dynasty?",
                es: "¿Qué innovación de construcción ayudó a acelerar el proceso de construcción durante la Dinastía Ming?",
                de: "Welche Bauinnovation beschleunigte den Bauprozess während der Ming-Dynastie?",
                nl: "Welke bouwinnovatie hielp het bouwproces te versnellen tijdens de Ming-dynastie?"
            },
            options: [
                {
                    en: "Steam-powered machinery",
                    es: "Maquinaria a vapor",
                    de: "Dampfbetriebene Maschinen",
                    nl: "Stoommachines"
                },
                {
                    en: "Standardized brick sizes and kiln networks",
                    es: "Tamaños de ladrillo estandarizados y redes de hornos",
                    de: "Standardisierte Ziegelgrößen und Brennofennetzwerke",
                    nl: "Gestandaardiseerde baksteenformaten en ovennettwerken"
                },
                {
                    en: "Concrete mixing",
                    es: "Mezcla de hormigón",
                    de: "Betonmischung",
                    nl: "Betonmenging"
                },
                {
                    en: "Prefabricated sections",
                    es: "Secciones prefabricadas",
                    de: "Vorgefertigte Abschnitte",
                    nl: "Geprefabriceerde secties"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Ming Dynasty established networks of brick kilns near construction sites and standardized brick sizes, which greatly sped up construction and ensured structural consistency.",
                es: "La Dinastía Ming estableció redes de hornos de ladrillos cerca de los sitios de construcción y estandarizó los tamaños de ladrillo, lo que aceleró enormemente la construcción y aseguró consistencia estructural.",
                de: "Die Ming-Dynastie richtete Netzwerke von Ziegelbrennöfen in der Nähe von Baustellen ein und standardisierte Ziegelgrößen, was den Bau erheblich beschleunigte und strukturelle Konsistenz gewährleistete.",
                nl: "De Ming-dynastie richtte netwerken van baksteenovens op nabij bouwplaatsen en standaardiseerde baksteenformaten, wat de bouw aanzienlijk versnelde en structurele consistentie verzekerde."
            }
        }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
  if (typeof window !== 'undefined') {
    window.level2Data = level2;
  }
  return level2;
})();
