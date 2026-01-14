const level7 = (function() {
  const questions = [
    {
      question: {
        en: "At which 1968 race did Jacky Ickx win in thick fog despite starting last?",
        es: "¿En qué carrera de 1968 ganó Jacky Ickx en niebla espesa a pesar de salir último?",
        de: "Bei welchem Rennen 1968 gewann Jacky Ickx im dichten Nebel trotz Start vom letzten Platz?",
        nl: "Bij welke race van 1968 won Jacky Ickx in dichte mist ondanks start vanaf laatste plaats?"
      },
      options: [
        "French Grand Prix",
        "Belgian Grand Prix",
        "German Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jacky Ickx won the fog-shortened 1968 French GP at Rouen after starting last due to gearbox issues, one of his four career victories.",
        es: "Jacky Ickx ganó el GP de Francia de 1968 acortado por niebla en Rouen después de salir último debido a problemas de caja de cambios, una de sus cuatro victorias de carrera.",
        de: "Jacky Ickx gewann den nebel-verkürzten Frankreich GP 1968 in Rouen nach Start vom letzten Platz wegen Getriebeproblemen, einer seiner vier Karrieresiege.",
        nl: "Jacky Ickx won de door mist verkorte Franse GP van 1968 in Rouen na start vanaf laatste plaats door versnellingsbakproblemen, een van zijn vier carrière-overwinningen."
      }
    },
    {
      question: {
        en: "Which 1984 race did Elio de Angelis win for his only victory that season?",
        es: "¿Qué carrera de 1984 ganó Elio de Angelis para su única victoria esa temporada?",
        de: "Welches Rennen 1984 gewann Elio de Angelis für seinen einzigen Sieg dieser Saison?",
        nl: "Welke race van 1984 won Elio de Angelis voor zijn enige overwinning dat seizoen?"
      },
      options: [
        "Monaco Grand Prix",
        "San Marino Grand Prix",
        "Dallas Grand Prix",
        "Detroit Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Elio de Angelis won the 1984 San Marino GP at Imola for Lotus, holding off the Ferraris on their home circuit in one of his finest drives.",
        es: "Elio de Angelis ganó el GP de San Marino de 1984 en Imola para Lotus, manteniendo a raya a los Ferraris en su circuito local en una de sus mejores actuaciones.",
        de: "Elio de Angelis gewann den San Marino GP 1984 in Imola für Lotus, hielt die Ferraris auf ihrer Heimstrecke in einer seiner besten Fahrleistungen ab.",
        nl: "Elio de Angelis won de San Marino GP van 1984 in Imola voor Lotus, hield de Ferrari's af op hun thuiscircuit in een van zijn beste rijprestaties."
      }
    },
    {
      question: {
        en: "At which 1972 race did Emerson Fittipaldi clinch his first World Championship at age 25?",
        es: "¿En qué carrera de 1972 Emerson Fittipaldi aseguró su primer Campeonato Mundial a los 25 años?",
        de: "Bei welchem Rennen 1972 sicherte Emerson Fittipaldi seine erste Weltmeisterschaft im Alter von 25 Jahren?",
        nl: "Bij welke race van 1972 stelde Emerson Fittipaldi zijn eerste Wereldkampioenschap veilig op 25-jarige leeftijd?"
      },
      options: [
        "German Grand Prix",
        "Austrian Grand Prix",
        "Italian Grand Prix",
        "United States Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Emerson Fittipaldi won the 1972 Italian GP at Monza to clinch his first title for Lotus, becoming F1's youngest champion at the time at 25 years old.",
        es: "Emerson Fittipaldi ganó el GP de Italia de 1972 en Monza para asegurar su primer título para Lotus, convirtiéndose en el campeón más joven de F1 en ese momento a los 25 años.",
        de: "Emerson Fittipaldi gewann den Italien GP 1972 in Monza um seinen ersten Titel für Lotus zu sichern, wurde damals jüngster F1-Champion mit 25 Jahren.",
        nl: "Emerson Fittipaldi won de Italiaanse GP van 1972 in Monza om zijn eerste titel voor Lotus veilig te stellen, werd destijds F1's jongste kampioen op 25-jarige leeftijd."
      }
    },
    {
      question: {
        en: "Which 1951 race saw the first use of the safety car in Formula 1?",
        es: "¿Qué carrera de 1951 vio el primer uso del coche de seguridad en Fórmula 1?",
        de: "Welches Rennen 1951 sah die erste Verwendung des Safety Cars in der Formel 1?",
        nl: "Welke race van 1951 zag het eerste gebruik van de safety car in Formule 1?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "Belgian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1951 British GP saw the first safety car deployment in F1 history after a multi-car accident, though it wasn't standardized until much later.",
        es: "El GP Británico de 1951 vio el primer despliegue de coche de seguridad en la historia de F1 después de un accidente de múltiples coches, aunque no se estandarizó hasta mucho después.",
        de: "Der Britische GP 1951 sah den ersten Safety-Car-Einsatz in der F1-Geschichte nach einem Mehrauto-Unfall, wurde aber erst viel später standardisiert.",
        nl: "De Britse GP van 1951 zag de eerste safety car inzet in F1-geschiedenis na een multi-auto ongeluk, hoewel het pas veel later gestandaardiseerd werd."
      }
    },
    {
      question: {
        en: "At which 1995 race did Jean Alesi score his only career F1 victory?",
        es: "¿En qué carrera de 1995 logró Jean Alesi su única victoria de carrera en F1?",
        de: "Bei welchem Rennen 1995 erzielte Jean Alesi seinen einzigen Karriere-F1-Sieg?",
        nl: "Bij welke race van 1995 behaalde Jean Alesi zijn enige carrière F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Canadian Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jean Alesi won the 1995 Canadian GP for Ferrari, his only victory in 201 race starts, leading the final 30 laps in an emotional triumph.",
        es: "Jean Alesi ganó el GP de Canadá de 1995 para Ferrari, su única victoria en 201 salidas, liderando las últimas 30 vueltas en un triunfo emocional.",
        de: "Jean Alesi gewann den Kanada GP 1995 für Ferrari, sein einziger Sieg in 201 Rennstarts, führte die letzten 30 Runden in einem emotionalen Triumph.",
        nl: "Jean Alesi won de Canadese GP van 1995 voor Ferrari, zijn enige overwinning in 201 race starts, leidde de laatste 30 ronden in een emotionele triomf."
      }
    },
    {
      question: {
        en: "Which 1963 race saw Jim Clark win despite starting from 8th on the grid?",
        es: "¿Qué carrera de 1963 vio a Jim Clark ganar a pesar de salir 8º en la parrilla?",
        de: "Welches Rennen 1963 sah Jim Clark gewinnen trotz Start von Platz 8?",
        nl: "Welke race van 1963 zag Jim Clark winnen ondanks start vanaf plek 8 op de grid?"
      },
      options: [
        "Monaco Grand Prix",
        "Belgian Grand Prix",
        "Dutch Grand Prix",
        "British Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jim Clark won the 1963 Belgian GP at Spa from 8th on the grid, driving through the field in wet conditions in his championship-winning season.",
        es: "Jim Clark ganó el GP de Bélgica de 1963 en Spa desde la 8ª posición en la parrilla, avanzando por el campo en condiciones húmedas en su temporada de campeonato.",
        de: "Jim Clark gewann den Belgien GP 1963 in Spa von Platz 8 der Startaufstellung, fuhr durch das Feld bei nassen Bedingungen in seiner Meisterschaftssaison.",
        nl: "Jim Clark won de Belgische GP van 1963 in Spa vanaf plek 8 op de grid, reed door het veld in natte omstandigheden in zijn kampioensseizoen."
      }
    },
    {
      question: {
        en: "At which 2013 race did Sebastian Vettel clinch his fourth consecutive World Championship?",
        es: "¿En qué carrera de 2013 Sebastian Vettel aseguró su cuarto Campeonato Mundial consecutivo?",
        de: "Bei welchem Rennen 2013 sicherte Sebastian Vettel seine vierte aufeinanderfolgende Weltmeisterschaft?",
        nl: "Bij welke race van 2013 stelde Sebastian Vettel zijn vierde opeenvolgende Wereldkampioenschap veilig?"
      },
      options: [
        "Korean Grand Prix",
        "Japanese Grand Prix",
        "Indian Grand Prix",
        "Abu Dhabi Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Sebastian Vettel finished 2nd at the 2013 Indian GP to clinch his fourth consecutive championship, equaling the record of Fangio and Schumacher.",
        es: "Sebastian Vettel terminó 2º en el GP de India de 2013 para asegurar su cuarto campeonato consecutivo, igualando el récord de Fangio y Schumacher.",
        de: "Sebastian Vettel wurde beim Indien GP 2013 Zweiter um seine vierte aufeinanderfolgende Meisterschaft zu sichern und egalisierte den Rekord von Fangio und Schumacher.",
        nl: "Sebastian Vettel eindigde als 2e in de Indiase GP van 2013 om zijn vierde opeenvolgende kampioenschap veilig te stellen, evenaarde het record van Fangio en Schumacher."
      }
    },
    {
      question: {
        en: "Which 1970 race featured Pedro Rodriguez's masterful wet-weather victory for BRM?",
        es: "¿Qué carrera de 1970 presentó la magistral victoria de Pedro Rodríguez en condiciones húmedas para BRM?",
        de: "Welches Rennen 1970 hatte Pedro Rodriguez' meisterhafte Nasswetter-Sieg für BRM?",
        nl: "Welke race van 1970 had Pedro Rodriguez' meesterlijke nat-weer overwinning voor BRM?"
      },
      options: [
        "Monaco Grand Prix",
        "Belgian Grand Prix",
        "Dutch Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Pedro Rodriguez dominated the 1970 Belgian GP at Spa in torrential rain, winning by over a lap in one of the greatest wet-weather drives in F1 history.",
        es: "Pedro Rodríguez dominó el GP de Bélgica de 1970 en Spa bajo lluvia torrencial, ganando por más de una vuelta en una de las mejores actuaciones en lluvia en la historia de F1.",
        de: "Pedro Rodriguez dominierte den Belgien GP 1970 in Spa bei strömenden Regen, gewann mit über einer Runde Vorsprung in einer der besten Nasswetter-Fahrten der F1-Geschichte.",
        nl: "Pedro Rodriguez domineerde de Belgische GP van 1970 in Spa in zware regen, won met meer dan een ronde voorsprong in een van de beste nat-weer rijprestaties in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "At which 1977 race did Mario Andretti win for the first time with Team Lotus?",
        es: "¿En qué carrera de 1977 ganó Mario Andretti por primera vez con el equipo Lotus?",
        de: "Bei welchem Rennen 1977 gewann Mario Andretti zum ersten Mal mit Team Lotus?",
        nl: "Bij welke race van 1977 won Mario Andretti voor het eerst met Team Lotus?"
      },
      options: [
        "United States Grand Prix West",
        "Spanish Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Mario Andretti won the 1977 US GP West at Long Beach for Lotus in the team's first race with the revolutionary ground-effect Lotus 78.",
        es: "Mario Andretti ganó el GP del Oeste de EE.UU. de 1977 en Long Beach para Lotus en la primera carrera del equipo con el revolucionario Lotus 78 de efecto suelo.",
        de: "Mario Andretti gewann den US GP West 1977 in Long Beach für Lotus im ersten Rennen des Teams mit dem revolutionären Ground-Effect Lotus 78.",
        nl: "Mario Andretti won de US GP West van 1977 in Long Beach voor Lotus in de eerste race van het team met de revolutionaire ground-effect Lotus 78."
      }
    },
    {
      question: {
        en: "Which 1966 race saw Jack Brabham become the only driver to win in a car bearing his own name?",
        es: "¿Qué carrera de 1966 vio a Jack Brabham convertirse en el único piloto en ganar en un coche con su propio nombre?",
        de: "Welches Rennen 1966 sah Jack Brabham als einzigen Fahrer in einem Auto mit seinem eigenen Namen gewinnen?",
        nl: "Welke race van 1966 zag Jack Brabham de enige coureur worden om te winnen in een auto met zijn eigen naam?"
      },
      options: [
        "Monaco Grand Prix",
        "French Grand Prix",
        "British Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jack Brabham won the 1966 French GP at Reims in his own Brabham-Repco, the first of four wins that season en route to his third championship.",
        es: "Jack Brabham ganó el GP de Francia de 1966 en Reims en su propio Brabham-Repco, la primera de cuatro victorias esa temporada en camino a su tercer campeonato.",
        de: "Jack Brabham gewann den Frankreich GP 1966 in Reims in seinem eigenen Brabham-Repco, der erste von vier Siegen dieser Saison auf dem Weg zu seiner dritten Meisterschaft.",
        nl: "Jack Brabham won de Franse GP van 1966 in Reims in zijn eigen Brabham-Repco, de eerste van vier overwinningen dat seizoen op weg naar zijn derde kampioenschap."
      }
    },
    {
      question: {
        en: "At which 2002 race did Michael Schumacher equal Ayrton Senna's pole position record?",
        es: "¿En qué carrera de 2002 Michael Schumacher igualó el récord de pole positions de Ayrton Senna?",
        de: "Bei welchem Rennen 2002 egalisierte Michael Schumacher Ayrton Sennas Pole-Position-Rekord?",
        nl: "Bij welke race van 2002 evenaarde Michael Schumacher Ayrton Senna's pole position record?"
      },
      options: [
        "French Grand Prix",
        "British Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher took his 65th pole position at the 2002 French GP, equaling Senna's record before breaking it later that season.",
        es: "Michael Schumacher logró su 65ª pole position en el GP de Francia de 2002, igualando el récord de Senna antes de romperlo más tarde esa temporada.",
        de: "Michael Schumacher holte seine 65. Pole-Position beim Frankreich GP 2002, egalisierte Sennas Rekord bevor er ihn später in der Saison brach.",
        nl: "Michael Schumacher behaalde zijn 65e pole position bij de Franse GP van 2002, evenaarde Senna's record voordat hij het later dat seizoen brak."
      }
    },
    {
      question: {
        en: "Which 1959 race did Jack Brabham famously push his Cooper across the finish line?",
        es: "¿En qué carrera de 1959 Jack Brabham empujó famosamente su Cooper hasta la línea de meta?",
        de: "Bei welchem Rennen 1959 schob Jack Brabham berühmt seinen Cooper über die Ziellinie?",
        nl: "Bij welke race van 1959 duwde Jack Brabham beroemd zijn Cooper over de finish?"
      },
      options: [
        "Portuguese Grand Prix",
        "Italian Grand Prix",
        "United States Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jack Brabham pushed his Cooper across the line to finish 4th at the 1959 US GP, securing enough points to win his first World Championship.",
        es: "Jack Brabham empujó su Cooper hasta la línea para terminar 4º en el GP de EE.UU. de 1959, asegurando suficientes puntos para ganar su primer Campeonato Mundial.",
        de: "Jack Brabham schob seinen Cooper über die Linie um beim US GP 1959 Vierter zu werden, sicherte genug Punkte um seine erste Weltmeisterschaft zu gewinnen.",
        nl: "Jack Brabham duwde zijn Cooper over de lijn om 4e te worden in de US GP van 1959, verzekerde genoeg punten om zijn eerste Wereldkampioenschap te winnen."
      }
    },
    {
      question: {
        en: "At which 2019 race did Max Verstappen win after starting from the back of the grid?",
        es: "¿En qué carrera de 2019 ganó Max Verstappen después de salir desde el fondo de la parrilla?",
        de: "Bei welchem Rennen 2019 gewann Max Verstappen nach Start vom Ende des Feldes?",
        nl: "Bij welke race van 2019 won Max Verstappen na start vanaf de achterkant van de grid?"
      },
      options: [
        "Belgian Grand Prix",
        "German Grand Prix",
        "Hungarian Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won the chaotic wet 2019 German GP from 20th on the grid after multiple drivers including Hamilton and Leclerc crashed out.",
        es: "Max Verstappen ganó el caótico GP de Alemania mojado de 2019 desde la 20ª posición tras múltiples pilotos incluyendo Hamilton y Leclerc salirse.",
        de: "Max Verstappen gewann den chaotischen nassen Deutschland GP 2019 von Startplatz 20 nachdem mehrere Fahrer inklusive Hamilton und Leclerc crashten.",
        nl: "Max Verstappen won de chaotische natte Duitse GP van 2019 vanaf plek 20 nadat meerdere coureurs waaronder Hamilton en Leclerc crashten."
      }
    },
    {
      question: {
        en: "Which 1954 race did Juan Manuel Fangio win to secure his second World Championship?",
        es: "¿Qué carrera de 1954 ganó Juan Manuel Fangio para asegurar su segundo Campeonato Mundial?",
        de: "Welches Rennen 1954 gewann Juan Manuel Fangio um seine zweite Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1954 won Juan Manuel Fangio om zijn tweede Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Swiss Grand Prix",
        "Italian Grand Prix",
        "Spanish Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Juan Manuel Fangio won the 1954 Spanish GP at Barcelona for Mercedes to clinch his second championship, dominating the new 2.5L formula era.",
        es: "Juan Manuel Fangio ganó el GP de España de 1954 en Barcelona para Mercedes para asegurar su segundo campeonato, dominando la nueva era de fórmula de 2.5L.",
        de: "Juan Manuel Fangio gewann den Spanien GP 1954 in Barcelona für Mercedes um seine zweite Meisterschaft zu sichern, dominierte die neue 2,5L-Formel-Ära.",
        nl: "Juan Manuel Fangio won de Spaanse GP van 1954 in Barcelona voor Mercedes om zijn tweede kampioenschap veilig te stellen, domineerde het nieuwe 2.5L formule tijdperk."
      }
    },
    {
      question: {
        en: "At which 1988 race did Alain Prost win despite Senna dominating the weekend?",
        es: "¿En qué carrera de 1988 ganó Alain Prost a pesar de que Senna dominó el fin de semana?",
        de: "Bei welchem Rennen 1988 gewann Alain Prost trotz Sennas Dominanz am Wochenende?",
        nl: "Bij welke race van 1988 won Alain Prost ondanks Senna's dominantie tijdens het weekend?"
      },
      options: [
        "British Grand Prix",
        "Portuguese Grand Prix",
        "Spanish Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Alain Prost won the 1988 Portuguese GP after Senna crashed while dominating with a huge lead, a crucial win in their intense championship battle.",
        es: "Alain Prost ganó el GP de Portugal de 1988 después de que Senna se estrellara mientras dominaba con una gran ventaja, una victoria crucial en su intensa batalla de campeonato.",
        de: "Alain Prost gewann den Portugal GP 1988 nachdem Senna crashte während er mit großem Vorsprung dominierte, ein entscheidender Sieg in ihrem intensiven Meisterschaftskampf.",
        nl: "Alain Prost won de Portugese GP van 1988 nadat Senna crashte terwijl hij domineerde met een grote voorsprong, een cruciale overwinning in hun intense kampioenschapsstrijd."
      }
    },
    {
      question: {
        en: "Which 1975 race did Niki Lauda win to secure his first World Championship?",
        es: "¿Qué carrera de 1975 ganó Niki Lauda para asegurar su primer Campeonato Mundial?",
        de: "Welches Rennen 1975 gewann Niki Lauda um seine erste Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1975 won Niki Lauda om zijn eerste Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Italian Grand Prix",
        "United States Grand Prix",
        "Austrian Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Niki Lauda finished 3rd at the 1975 US GP at Watkins Glen to clinch his first championship for Ferrari, beginning his legendary career.",
        es: "Niki Lauda terminó 3º en el GP de EE.UU. de 1975 en Watkins Glen para asegurar su primer campeonato para Ferrari, comenzando su legendaria carrera.",
        de: "Niki Lauda wurde beim US GP 1975 in Watkins Glen Dritter um seine erste Meisterschaft für Ferrari zu sichern und begann seine legendäre Karriere.",
        nl: "Niki Lauda eindigde als 3e in de US GP van 1975 op Watkins Glen om zijn eerste kampioenschap voor Ferrari veilig te stellen, begon zijn legendarische carrière."
      }
    },
    {
      question: {
        en: "At which 1983 race did Riccardo Patrese score his first F1 victory after 116 starts?",
        es: "¿En qué carrera de 1983 logró Riccardo Patrese su primera victoria en F1 después de 116 salidas?",
        de: "Bei welchem Rennen 1983 erzielte Riccardo Patrese seinen ersten F1-Sieg nach 116 Starts?",
        nl: "Bij welke race van 1983 behaalde Riccardo Patrese zijn eerste F1-overwinning na 116 starts?"
      },
      options: [
        "San Marino Grand Prix",
        "Monaco Grand Prix",
        "South African Grand Prix",
        "Brazilian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Riccardo Patrese won the 1982 Monaco GP for Brabham after 116 race starts, finally breaking through in the wet race shortened by Pironi's accident.",
        es: "Riccardo Patrese ganó el GP de Mónaco de 1982 para Brabham después de 116 salidas, finalmente logrando en la carrera húmeda acortada por el accidente de Pironi.",
        de: "Riccardo Patrese gewann den Monaco GP 1982 für Brabham nach 116 Rennstarts, brach endlich durch im nassen Rennen das durch Pironis Unfall verkürzt wurde.",
        nl: "Riccardo Patrese won de GP van Monaco 1982 voor Brabham na 116 race starts, brak eindelijk door in de natte race verkort door Pironi's ongeluk."
      }
    },
    {
      question: {
        en: "Which 1967 race saw Denny Hulme clinch his only World Championship?",
        es: "¿Qué carrera de 1967 vio a Denny Hulme asegurar su único Campeonato Mundial?",
        de: "Welches Rennen 1967 sah Denny Hulme seine einzige Weltmeisterschaft sichern?",
        nl: "Welke race van 1967 zag Denny Hulme zijn enige Wereldkampioenschap veiligstellen?"
      },
      options: [
        "Mexican Grand Prix",
        "Italian Grand Prix",
        "Canadian Grand Prix",
        "United States Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Denny Hulme clinched the 1967 championship at the Mexican GP season finale for Brabham, edging out teammate Jack Brabham for the title.",
        es: "Denny Hulme aseguró el campeonato de 1967 en la final del GP de México para Brabham, superando a su compañero Jack Brabham por el título.",
        de: "Denny Hulme sicherte die Meisterschaft 1967 beim Mexiko GP Saisonfinale für Brabham, setzte sich gegen Teamkollege Jack Brabham durch für den Titel.",
        nl: "Denny Hulme stelde het kampioenschap van 1967 veilig bij de Mexicaanse GP seizoensfinale voor Brabham, versloeg teamgenoot Jack Brabham voor de titel."
      }
    },
    {
      question: {
        en: "At which 2012 race did Pastor Maldonado score his only F1 victory?",
        es: "¿En qué carrera de 2012 logró Pastor Maldonado su única victoria en F1?",
        de: "Bei welchem Rennen 2012 erzielte Pastor Maldonado seinen einzigen F1-Sieg?",
        nl: "Bij welke race van 2012 behaalde Pastor Maldonado zijn enige F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "European Grand Prix",
        "Spanish Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Pastor Maldonado won the 2012 Spanish GP for Williams, beating Fernando Alonso on his home circuit in what would be his only career victory.",
        es: "Pastor Maldonado ganó el GP de España de 2012 para Williams, venciendo a Fernando Alonso en su circuito local en lo que sería su única victoria de carrera.",
        de: "Pastor Maldonado gewann den Spanien GP 2012 für Williams, schlug Fernando Alonso auf seiner Heimstrecke in was sein einziger Karrieresieg sein würde.",
        nl: "Pastor Maldonado won de Spaanse GP van 2012 voor Williams, versloeg Fernando Alonso op zijn thuiscircuit in wat zijn enige carrière-overwinning zou zijn."
      }
    },
    {
      question: {
        en: "Which 1969 race did Jackie Stewart win to secure his first World Championship?",
        es: "¿Qué carrera de 1969 ganó Jackie Stewart para asegurar su primer Campeonato Mundial?",
        de: "Welches Rennen 1969 gewann Jackie Stewart um seine erste Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1969 won Jackie Stewart om zijn eerste Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Italian Grand Prix",
        "Canadian Grand Prix",
        "United States Grand Prix",
        "Mexican Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jackie Stewart won the 1969 Italian GP at Monza to clinch his first championship for Matra, dominating the season with 6 victories.",
        es: "Jackie Stewart ganó el GP de Italia de 1969 en Monza para asegurar su primer campeonato para Matra, dominando la temporada con 6 victorias.",
        de: "Jackie Stewart gewann den Italien GP 1969 in Monza um seine erste Meisterschaft für Matra zu sichern, dominierte die Saison mit 6 Siegen.",
        nl: "Jackie Stewart won de Italiaanse GP van 1969 in Monza om zijn eerste kampioenschap voor Matra veilig te stellen, domineerde het seizoen met 6 overwinningen."
      }
    },
    {
      question: {
        en: "At which 1997 race did Jacques Villeneuve clinch his only World Championship?",
        es: "¿En qué carrera de 1997 Jacques Villeneuve aseguró su único Campeonato Mundial?",
        de: "Bei welchem Rennen 1997 sicherte Jacques Villeneuve seine einzige Weltmeisterschaft?",
        nl: "Bij welke race van 1997 stelde Jacques Villeneuve zijn enige Wereldkampioenschap veilig?"
      },
      options: [
        "Japanese Grand Prix",
        "European Grand Prix",
        "Luxembourg Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jacques Villeneuve clinched the 1997 championship at the European GP at Jerez after Schumacher's infamous attempt to take him out failed.",
        es: "Jacques Villeneuve aseguró el campeonato de 1997 en el GP de Europa en Jerez después del infame intento de Schumacher de sacarlo fallara.",
        de: "Jacques Villeneuve sicherte die Meisterschaft 1997 beim Europa GP in Jerez nachdem Schumachers berüchtigter Versuch ihn rauszunehmen scheiterte.",
        nl: "Jacques Villeneuve stelde het kampioenschap van 1997 veilig bij de Europese GP in Jerez nadat Schumacher's beruchte poging hem eruit te rijden faalde."
      }
    },
    {
      question: {
        en: "Which 1973 race did Jackie Stewart win to equal Jim Clark's win record?",
        es: "¿Qué carrera de 1973 ganó Jackie Stewart para igualar el récord de victorias de Jim Clark?",
        de: "Welches Rennen 1973 gewann Jackie Stewart um Jim Clarks Siegrekord zu egalisieren?",
        nl: "Welke race van 1973 won Jackie Stewart om Jim Clark's overwinningsrecord te evenaren?"
      },
      options: [
        "German Grand Prix",
        "Austrian Grand Prix",
        "Dutch Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jackie Stewart won the 1973 German GP at the Nürburgring for his 25th career victory, equaling Jim Clark's then-record before retiring.",
        es: "Jackie Stewart ganó el GP de Alemania de 1973 en el Nürburgring para su 25ª victoria de carrera, igualando el récord de Jim Clark antes de retirarse.",
        de: "Jackie Stewart gewann den Deutschland GP 1973 am Nürburgring für seinen 25. Karrieresieg, egalisierte Jim Clarks damaliges Rekord vor dem Rücktritt.",
        nl: "Jackie Stewart won de Duitse GP van 1973 op de Nürburgring voor zijn 25e carrière-overwinning, evenaarde Jim Clark's toenmalige record voordat hij stopte."
      }
    },
    {
      question: {
        en: "At which 2008 race did Robert Kubica score his only F1 victory?",
        es: "¿En qué carrera de 2008 logró Robert Kubica su única victoria en F1?",
        de: "Bei welchem Rennen 2008 erzielte Robert Kubica seinen einzigen F1-Sieg?",
        nl: "Bij welke race van 2008 behaalde Robert Kubica zijn enige F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Belgian Grand Prix",
        "Canadian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Robert Kubica won the chaotic 2008 Canadian GP for BMW Sauber after Hamilton crashed into the back of Räikkönen under the safety car.",
        es: "Robert Kubica ganó el caótico GP de Canadá de 2008 para BMW Sauber después de que Hamilton chocara contra la parte trasera de Räikkönen bajo el coche de seguridad.",
        de: "Robert Kubica gewann den chaotischen Kanada GP 2008 für BMW Sauber nachdem Hamilton unter Safety Car in Räikkönen hineinfuhr.",
        nl: "Robert Kubica won de chaotische Canadese GP van 2008 voor BMW Sauber nadat Hamilton tegen de achterkant van Räikkönen aanreed onder de safety car."
      }
    },
    {
      question: {
        en: "Which 1981 race did Nelson Piquet win to secure his first World Championship?",
        es: "¿Qué carrera de 1981 ganó Nelson Piquet para asegurar su primer Campeonato Mundial?",
        de: "Welches Rennen 1981 gewann Nelson Piquet um seine erste Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1981 won Nelson Piquet om zijn eerste Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Italian Grand Prix",
        "Canadian Grand Prix",
        "Las Vegas Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Nelson Piquet finished 5th at the 1981 Las Vegas GP to clinch his first championship for Brabham after Reutemann mysteriously faded to 8th.",
        es: "Nelson Piquet terminó 5º en el GP de Las Vegas de 1981 para asegurar su primer campeonato para Brabham después de que Reutemann misteriosamente cayera a 8º.",
        de: "Nelson Piquet wurde beim Las Vegas GP 1981 Fünfter um seine erste Meisterschaft für Brabham zu sichern nachdem Reutemann mysteriös auf Platz 8 zurückfiel.",
        nl: "Nelson Piquet eindigde als 5e in de Las Vegas GP van 1981 om zijn eerste kampioenschap voor Brabham veilig te stellen nadat Reutemann mysterieus terugviel naar 8e."
      }
    },
    {
      question: {
        en: "At which 2005 race did Fernando Alonso clinch his first World Championship?",
        es: "¿En qué carrera de 2005 Fernando Alonso aseguró su primer Campeonato Mundial?",
        de: "Bei welchem Rennen 2005 sicherte Fernando Alonso seine erste Weltmeisterschaft?",
        nl: "Bij welke race van 2005 stelde Fernando Alonso zijn eerste Wereldkampioenschap veilig?"
      },
      options: [
        "Chinese Grand Prix",
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Fernando Alonso clinched his first championship at the 2005 Brazilian GP for Renault, becoming F1's youngest champion at 24 years old.",
        es: "Fernando Alonso aseguró su primer campeonato en el GP de Brasil de 2005 para Renault, convirtiéndose en el campeón más joven de F1 a los 24 años.",
        de: "Fernando Alonso sicherte seine erste Meisterschaft beim Brasilien GP 2005 für Renault, wurde mit 24 Jahren jüngster F1-Champion.",
        nl: "Fernando Alonso stelde zijn eerste kampioenschap veilig bij de Braziliaanse GP van 2005 voor Renault, werd F1's jongste kampioen op 24-jarige leeftijd."
      }
    },
    {
      question: {
        en: "Which 1971 race saw Peter Gethin win by just 0.01 seconds?",
        es: "¿Qué carrera de 1971 vio a Peter Gethin ganar por solo 0.01 segundos?",
        de: "Welches Rennen 1971 sah Peter Gethin mit nur 0,01 Sekunden gewinnen?",
        nl: "Welke race van 1971 zag Peter Gethin winnen met slechts 0,01 seconden?"
      },
      options: [
        "Belgian Grand Prix",
        "French Grand Prix",
        "Italian Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Peter Gethin won the 1971 Italian GP by 0.01s in the closest finish in F1 history, with the top 5 separated by just 0.61 seconds.",
        es: "Peter Gethin ganó el GP de Italia de 1971 por 0.01s en el final más cerrado en la historia de F1, con los 5 primeros separados por solo 0.61 segundos.",
        de: "Peter Gethin gewann den Italien GP 1971 mit 0,01s im knappsten Finish der F1-Geschichte, die Top 5 waren nur durch 0,61 Sekunden getrennt.",
        nl: "Peter Gethin won de Italiaanse GP van 1971 met 0,01s in de nauwste finish in F1-geschiedenis, met de top 5 gescheiden door slechts 0,61 seconden."
      }
    },
    {
      question: {
        en: "At which 1992 race did Nigel Mansell clinch his only World Championship with 5 races remaining?",
        es: "¿En qué carrera de 1992 Nigel Mansell aseguró su único Campeonato Mundial faltando 5 carreras?",
        de: "Bei welchem Rennen 1992 sicherte Nigel Mansell seine einzige Weltmeisterschaft mit 5 verbleibenden Rennen?",
        nl: "Bij welke race van 1992 stelde Nigel Mansell zijn enige Wereldkampioenschap veilig met 5 races te gaan?"
      },
      options: [
        "German Grand Prix",
        "British Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Nigel Mansell won the 1992 Hungarian GP to clinch the championship with 5 races to spare, his 9th win in 11 races in a dominant season.",
        es: "Nigel Mansell ganó el GP de Hungría de 1992 para asegurar el campeonato faltando 5 carreras, su 9ª victoria en 11 carreras en una temporada dominante.",
        de: "Nigel Mansell gewann den Ungarn GP 1992 um die Meisterschaft mit 5 Rennen Vorsprung zu sichern, sein 9. Sieg in 11 Rennen in einer dominanten Saison.",
        nl: "Nigel Mansell won de Hongaarse GP van 1992 om het kampioenschap veilig te stellen met 5 races te gaan, zijn 9e overwinning in 11 races in een dominant seizoen."
      }
    },
    {
      question: {
        en: "Which 1989 race did Thierry Boutsen win for his first F1 victory?",
        es: "¿Qué carrera de 1989 ganó Thierry Boutsen para su primera victoria en F1?",
        de: "Welches Rennen 1989 gewann Thierry Boutsen für seinen ersten F1-Sieg?",
        nl: "Welke race van 1989 won Thierry Boutsen voor zijn eerste F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Belgian Grand Prix",
        "Canadian Grand Prix",
        "Australian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Thierry Boutsen won the 1989 Canadian GP for Williams, his first F1 victory after the McLarens of Senna and Prost collided.",
        es: "Thierry Boutsen ganó el GP de Canadá de 1989 para Williams, su primera victoria en F1 después de que los McLaren de Senna y Prost chocaran.",
        de: "Thierry Boutsen gewann den Kanada GP 1989 für Williams, sein erster F1-Sieg nachdem die McLarens von Senna und Prost kollidierten.",
        nl: "Thierry Boutsen won de Canadese GP van 1989 voor Williams, zijn eerste F1-overwinning nadat de McLarens van Senna en Prost botsten."
      }
    },
    {
      question: {
        en: "At which 1978 race did Carlos Reutemann win for Ferrari on home soil?",
        es: "¿En qué carrera de 1978 ganó Carlos Reutemann para Ferrari en su tierra natal?",
        de: "Bei welchem Rennen 1978 gewann Carlos Reutemann für Ferrari auf heimischem Boden?",
        nl: "Bij welke race van 1978 won Carlos Reutemann voor Ferrari op eigen bodem?"
      },
      options: [
        "Argentine Grand Prix",
        "Brazilian Grand Prix",
        "United States Grand Prix West",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Carlos Reutemann won the 1978 Brazilian GP at Jacarepaguá for Ferrari, though he was Argentine, Brazil was close to home in South America.",
        es: "Carlos Reutemann ganó el GP de Brasil de 1978 en Jacarepaguá para Ferrari, aunque era argentino, Brasil estaba cerca de casa en América del Sur.",
        de: "Carlos Reutemann gewann den Brasilien GP 1978 in Jacarepaguá für Ferrari, obwohl er Argentinier war, Brasilien war nah an der Heimat in Südamerika.",
        nl: "Carlos Reutemann won de Braziliaanse GP van 1978 in Jacarepaguá voor Ferrari, hoewel hij Argentijns was, Brazilië was dicht bij huis in Zuid-Amerika."
      }
    },
    {
      question: {
        en: "Which 1974 race did Jody Scheckter win for his first F1 victory?",
        es: "¿Qué carrera de 1974 ganó Jody Scheckter para su primera victoria en F1?",
        de: "Welches Rennen 1974 gewann Jody Scheckter für seinen ersten F1-Sieg?",
        nl: "Welke race van 1974 won Jody Scheckter voor zijn eerste F1-overwinning?"
      },
      options: [
        "Swedish Grand Prix",
        "Monaco Grand Prix",
        "British Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jody Scheckter won the 1974 Swedish GP at Anderstorp for Tyrrell, his first F1 victory in only his second full season.",
        es: "Jody Scheckter ganó el GP de Suecia de 1974 en Anderstorp para Tyrrell, su primera victoria en F1 en solo su segunda temporada completa.",
        de: "Jody Scheckter gewann den Schweden GP 1974 in Anderstorp für Tyrrell, sein erster F1-Sieg in nur seiner zweiten vollen Saison.",
        nl: "Jody Scheckter won de Zweedse GP van 1974 in Anderstorp voor Tyrrell, zijn eerste F1-overwinning in slechts zijn tweede volledige seizoen."
      }
    },
    {
      question: {
        en: "At which 2000 race did Rubens Barrichello score his first F1 victory after 123 starts?",
        es: "¿En qué carrera de 2000 logró Rubens Barrichello su primera victoria en F1 después de 123 salidas?",
        de: "Bei welchem Rennen 2000 erzielte Rubens Barrichello seinen ersten F1-Sieg nach 123 Starts?",
        nl: "Bij welke race van 2000 behaalde Rubens Barrichello zijn eerste F1-overwinning na 123 starts?"
      },
      options: [
        "Brazilian Grand Prix",
        "German Grand Prix",
        "Italian Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Rubens Barrichello won the 2000 German GP at Hockenheim for Ferrari in torrential rain, his first victory after 123 race starts.",
        es: "Rubens Barrichello ganó el GP de Alemania de 2000 en Hockenheim para Ferrari bajo lluvia torrencial, su primera victoria después de 123 salidas.",
        de: "Rubens Barrichello gewann den Deutschland GP 2000 in Hockenheim für Ferrari bei strömenden Regen, sein erster Sieg nach 123 Rennstarts.",
        nl: "Rubens Barrichello won de Duitse GP van 2000 op Hockenheim voor Ferrari in zware regen, zijn eerste overwinning na 123 race starts."
      }
    },
    {
      question: {
        en: "Which 1979 race did Jody Scheckter win to secure his only World Championship?",
        es: "¿Qué carrera de 1979 ganó Jody Scheckter para asegurar su único Campeonato Mundial?",
        de: "Welches Rennen 1979 gewann Jody Scheckter um seine einzige Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1979 won Jody Scheckter om zijn enige Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Dutch Grand Prix",
        "Canadian Grand Prix",
        "Italian Grand Prix",
        "United States Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jody Scheckter won the 1979 Italian GP at Monza to clinch the championship for Ferrari, the last championship for the team until 2000.",
        es: "Jody Scheckter ganó el GP de Italia de 1979 en Monza para asegurar el campeonato para Ferrari, el último campeonato para el equipo hasta 2000.",
        de: "Jody Scheckter gewann den Italien GP 1979 in Monza um die Meisterschaft für Ferrari zu sichern, die letzte Meisterschaft für das Team bis 2000.",
        nl: "Jody Scheckter won de Italiaanse GP van 1979 in Monza om het kampioenschap voor Ferrari veilig te stellen, het laatste kampioenschap voor het team tot 2000."
      }
    },
    {
      question: {
        en: "At which 2009 race did Sebastian Vettel become F1's youngest race winner?",
        es: "¿En qué carrera de 2009 Sebastian Vettel se convirtió en el ganador de carreras más joven de F1?",
        de: "Bei welchem Rennen 2009 wurde Sebastian Vettel jüngster Rennsieger der F1?",
        nl: "Bij welke race van 2009 werd Sebastian Vettel F1's jongste racewinnaar?"
      },
      options: [
        "Chinese Grand Prix",
        "Italian Grand Prix",
        "British Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Sebastian Vettel won the 2008 Italian GP for Toro Rosso at 21 years old, becoming F1's youngest race winner in a wet Monza thriller.",
        es: "Sebastian Vettel ganó el GP de Italia de 2008 para Toro Rosso con 21 años, convirtiéndose en el ganador de carreras más joven de F1 en un emocionante Monza mojado.",
        de: "Sebastian Vettel gewann den Italien GP 2008 für Toro Rosso mit 21 Jahren und wurde jüngster Rennsieger der F1 in einem nassen Monza-Thriller.",
        nl: "Sebastian Vettel won de Italiaanse GP van 2008 voor Toro Rosso op 21-jarige leeftijd, werd F1's jongste racewinnaar in een natte Monza thriller."
      }
    },
    {
      question: {
        en: "Which 1980 race did Alan Jones win to secure Williams' first Drivers' Championship?",
        es: "¿Qué carrera de 1980 ganó Alan Jones para asegurar el primer Campeonato de Pilotos de Williams?",
        de: "Welches Rennen 1980 gewann Alan Jones um Williams' erste Fahrermeisterschaft zu sichern?",
        nl: "Welke race van 1980 won Alan Jones om Williams' eerste Rijderskampioenschap veilig te stellen?"
      },
      options: [
        "Canadian Grand Prix",
        "British Grand Prix",
        "Dutch Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Alan Jones won the 1980 Canadian GP at Montreal to clinch Williams' first Drivers' Championship, cementing the team's dominance.",
        es: "Alan Jones ganó el GP de Canadá de 1980 en Montreal para asegurar el primer Campeonato de Pilotos de Williams, cementando el dominio del equipo.",
        de: "Alan Jones gewann den Kanada GP 1980 in Montreal um Williams' erste Fahrermeisterschaft zu sichern, zementierte die Dominanz des Teams.",
        nl: "Alan Jones won de Canadese GP van 1980 in Montreal om Williams' eerste Rijderskampioenschap veilig te stellen, cementeerde de dominantie van het team."
      }
    },
    {
      question: {
        en: "At which 1991 race did Ayrton Senna drive with only 6th gear to win?",
        es: "¿En qué carrera de 1991 Ayrton Senna condujo con solo 6ª marcha para ganar?",
        de: "Bei welchem Rennen 1991 fuhr Ayrton Senna nur mit dem 6. Gang zum Sieg?",
        nl: "Bij welke race van 1991 reed Ayrton Senna met alleen 6e versnelling naar de overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Brazilian Grand Prix",
        "Hungarian Grand Prix",
        "San Marino Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Ayrton Senna won the 1991 Brazilian GP stuck in 6th gear for the final laps, physically exhausted but determined to win his home race.",
        es: "Ayrton Senna ganó el GP de Brasil de 1991 atascado en 6ª marcha durante las últimas vueltas, físicamente exhausto pero determinado a ganar su carrera local.",
        de: "Ayrton Senna gewann den Brasilien GP 1991 im 6. Gang steckend in den letzten Runden, körperlich erschöpft aber entschlossen sein Heimrennen zu gewinnen.",
        nl: "Ayrton Senna won de Braziliaanse GP van 1991 vast in 6e versnelling in de laatste ronden, fysiek uitgeput maar vastbesloten zijn thuisrace te winnen."
      }
    },
    {
      question: {
        en: "Which 1985 race did Alain Prost win to secure his first World Championship?",
        es: "¿Qué carrera de 1985 ganó Alain Prost para asegurar su primer Campeonato Mundial?",
        de: "Welches Rennen 1985 gewann Alain Prost um seine erste Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1985 won Alain Prost om zijn eerste Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "European Grand Prix",
        "South African Grand Prix",
        "Austrian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Alain Prost won the 1985 European GP at Brands Hatch to clinch his first championship for McLaren, beating Senna in the final rounds.",
        es: "Alain Prost ganó el GP de Europa de 1985 en Brands Hatch para asegurar su primer campeonato para McLaren, venciendo a Senna en las rondas finales.",
        de: "Alain Prost gewann den Europa GP 1985 in Brands Hatch um seine erste Meisterschaft für McLaren zu sichern, schlug Senna in den Finalrunden.",
        nl: "Alain Prost won de Europese GP van 1985 op Brands Hatch om zijn eerste kampioenschap voor McLaren veilig te stellen, versloeg Senna in de finale rondes."
      }
    },
    {
      question: {
        en: "At which 2014 race did Daniel Ricciardo score his first F1 victory?",
        es: "¿En qué carrera de 2014 logró Daniel Ricciardo su primera victoria en F1?",
        de: "Bei welchem Rennen 2014 erzielte Daniel Ricciardo seinen ersten F1-Sieg?",
        nl: "Bij welke race van 2014 behaalde Daniel Ricciardo zijn eerste F1-overwinning?"
      },
      options: [
        "Australian Grand Prix",
        "Monaco Grand Prix",
        "Canadian Grand Prix",
        "Hungarian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Daniel Ricciardo won the 2014 Canadian GP for Red Bull, his first F1 victory after being disqualified from 2nd place in Australia earlier that season.",
        es: "Daniel Ricciardo ganó el GP de Canadá de 2014 para Red Bull, su primera victoria en F1 después de ser descalificado del 2º lugar en Australia antes esa temporada.",
        de: "Daniel Ricciardo gewann den Kanada GP 2014 für Red Bull, sein erster F1-Sieg nachdem er vom 2. Platz in Australien früher in der Saison disqualifiziert wurde.",
        nl: "Daniel Ricciardo won de Canadese GP van 2014 voor Red Bull, zijn eerste F1-overwinning na gediskwalificeerd te zijn van de 2e plaats in Australië eerder dat seizoen."
      }
    },
    {
      question: {
        en: "Which 1996 race did Damon Hill win to secure his only World Championship?",
        es: "¿Qué carrera de 1996 ganó Damon Hill para asegurar su único Campeonato Mundial?",
        de: "Welches Rennen 1996 gewann Damon Hill um seine einzige Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1996 won Damon Hill om zijn enige Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Italian Grand Prix",
        "Portuguese Grand Prix",
        "European Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 3,
      explanation: {
        en: "Damon Hill won the 1996 Japanese GP at Suzuka to clinch the championship for Williams, fulfilling his dream after his father Graham's legacy.",
        es: "Damon Hill ganó el GP de Japón de 1996 en Suzuka para asegurar el campeonato para Williams, cumpliendo su sueño tras el legado de su padre Graham.",
        de: "Damon Hill gewann den Japan GP 1996 in Suzuka um die Meisterschaft für Williams zu sichern, erfüllte seinen Traum nach dem Vermächtnis seines Vaters Graham.",
        nl: "Damon Hill won de Japanse GP van 1996 op Suzuka om het kampioenschap voor Williams veilig te stellen, vervulde zijn droom na het erfgoed van zijn vader Graham."
      }
    },
    {
      question: {
        en: "At which 1998 race did Michael Schumacher start from the pit lane and finish 3rd?",
        es: "¿En qué carrera de 1998 Michael Schumacher salió del pit lane y terminó 3º?",
        de: "Bei welchem Rennen 1998 startete Michael Schumacher aus der Boxengasse und wurde 3.?",
        nl: "Bij welke race van 1998 startte Michael Schumacher vanuit de pitlane en werd 3e?"
      },
      options: [
        "British Grand Prix",
        "Belgian Grand Prix",
        "German Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Michael Schumacher started from the pit lane at the 1998 German GP after stalling on the grid, drove through the field to finish 3rd in a heroic home race recovery.",
        es: "Michael Schumacher salió del pit lane en el GP de Alemania de 1998 después de calarse en la parrilla, atravesó el campo para terminar 3º en una heroica recuperación en su carrera local.",
        de: "Michael Schumacher startete aus der Boxengasse beim Deutschland GP 1998 nach Motorausfall im Grid, fuhr durch das Feld auf Platz 3 in einer heroischen Heimrennen-Aufholjagd.",
        nl: "Michael Schumacher startte vanuit de pitlane bij de Duitse GP van 1998 na afslaan op de grid, reed door het veld naar de 3e plaats in een heroïsche thuisrace comeback."
      }
    },
    {
      question: {
        en: "Which 1975 race did Niki Lauda win to secure his first World Championship?",
        es: "¿Qué carrera de 1975 ganó Niki Lauda para asegurar su primer Campeonato Mundial?",
        de: "Welches Rennen 1975 gewann Niki Lauda um seine erste Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1975 won Niki Lauda om zijn eerste Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Italian Grand Prix",
        "United States Grand Prix",
        "Canadian Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Niki Lauda clinched his first championship at the 1975 United States GP at Watkins Glen for Ferrari, beginning his legendary career with the Scuderia.",
        es: "Niki Lauda aseguró su primer campeonato en el GP de Estados Unidos de 1975 en Watkins Glen para Ferrari, comenzando su legendaria carrera con la Scuderia.",
        de: "Niki Lauda sicherte seine erste Meisterschaft beim USA GP 1975 in Watkins Glen für Ferrari, begann seine legendäre Karriere mit der Scuderia.",
        nl: "Niki Lauda stelde zijn eerste kampioenschap veilig bij de Verenigde Staten GP van 1975 op Watkins Glen voor Ferrari, begon zijn legendarische carrière met de Scuderia."
      }
    }
  ];

  return { questions: questions };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level7;
}
