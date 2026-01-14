const level8 = (function() {
  const questions = [
    {
      question: {
        en: "At which 1953 race did Alberto Ascari crash into Monaco harbor and survive?",
        es: "¿En qué carrera de 1953 Alberto Ascari se estrelló en el puerto de Mónaco y sobrevivió?",
        de: "Bei welchem Rennen 1953 stürzte Alberto Ascari in den Hafen von Monaco und überlebte?",
        nl: "Bij welke race van 1953 crashte Alberto Ascari in de haven van Monaco en overleefde?"
      },
      options: [
        "Monaco Grand Prix 1955",
        "Monaco Grand Prix 1953",
        "Monaco Grand Prix 1954",
        "Monaco Grand Prix 1952"
      ],
      correct: 0,
      explanation: {
        en: "Alberto Ascari crashed into Monaco harbor at the 1955 Monaco GP, escaping with minor injuries. Tragically, he died four days later testing at Monza.",
        es: "Alberto Ascari se estrelló en el puerto de Mónaco en el GP de Mónaco de 1955, escapando con lesiones menores. Trágicamente, murió cuatro días después probando en Monza.",
        de: "Alberto Ascari stürzte beim Monaco GP 1955 in den Hafen von Monaco, entkam mit leichten Verletzungen. Tragisch starb er vier Tage später beim Testen in Monza.",
        nl: "Alberto Ascari crashte in de haven van Monaco bij de GP van Monaco 1955, ontsnapte met lichte verwondingen. Tragisch overleed hij vier dagen later tijdens testen in Monza."
      }
    },
    {
      question: {
        en: "Which 1958 race saw Maurice Trintignant win for the last time at age 40?",
        es: "¿Qué carrera de 1958 vio a Maurice Trintignant ganar por última vez a los 40 años?",
        de: "Welches Rennen 1958 sah Maurice Trintignant zum letzten Mal mit 40 Jahren gewinnen?",
        nl: "Welke race van 1958 zag Maurice Trintignant voor het laatst winnen op 40-jarige leeftijd?"
      },
      options: [
        "French Grand Prix",
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Maurice Trintignant won the 1958 Monaco GP for Cooper at age 40, his second and final F1 victory, becoming one of the oldest race winners.",
        es: "Maurice Trintignant ganó el GP de Mónaco de 1958 para Cooper a los 40 años, su segunda y última victoria en F1, convirtiéndose en uno de los ganadores de carreras más viejos.",
        de: "Maurice Trintignant gewann den Monaco GP 1958 für Cooper im Alter von 40 Jahren, sein zweiter und letzter F1-Sieg, wurde einer der ältesten Rennsieger.",
        nl: "Maurice Trintignant won de GP van Monaco 1958 voor Cooper op 40-jarige leeftijd, zijn tweede en laatste F1-overwinning, werd een van de oudste racewinnaars."
      }
    },
    {
      question: {
        en: "At which 1964 race did Lorenzo Bandini score Ferrari's first win since 1961?",
        es: "¿En qué carrera de 1964 logró Lorenzo Bandini la primera victoria de Ferrari desde 1961?",
        de: "Bei welchem Rennen 1964 erzielte Lorenzo Bandini Ferraris ersten Sieg seit 1961?",
        nl: "Bij welke race van 1964 behaalde Lorenzo Bandini Ferrari's eerste overwinning sinds 1961?"
      },
      options: [
        "Austrian Grand Prix",
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Lorenzo Bandini won the 1964 Austrian GP at Zeltweg for Ferrari, ending a 3-year winless drought for the Scuderia in their 500th race.",
        es: "Lorenzo Bandini ganó el GP de Austria de 1964 en Zeltweg para Ferrari, terminando una sequía de 3 años sin victorias para la Scuderia en su carrera número 500.",
        de: "Lorenzo Bandini gewann den Österreich GP 1964 in Zeltweg für Ferrari, beendete eine 3-jährige Sieglos-Durststrecke für die Scuderia in ihrem 500. Rennen.",
        nl: "Lorenzo Bandini won de Oostenrijkse GP van 1964 in Zeltweg voor Ferrari, beëindigde een 3-jaar durende droogte zonder overwinningen voor de Scuderia in hun 500e race."
      }
    },
    {
      question: {
        en: "Which 1976 race did James Hunt win after being disqualified then reinstated on appeal?",
        es: "¿Qué carrera de 1976 ganó James Hunt después de ser descalificado y luego reinstaurado en apelación?",
        de: "Welches Rennen 1976 gewann James Hunt nachdem er disqualifiziert und dann nach Berufung wieder eingesetzt wurde?",
        nl: "Welke race van 1976 won James Hunt na gediskwalificeerd te zijn en daarna hersteld op beroep?"
      },
      options: [
        "British Grand Prix",
        "Spanish Grand Prix",
        "French Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "James Hunt won the 1976 British GP but was disqualified for his car being too wide. Two months later, he was reinstated as winner after McLaren's appeal.",
        es: "James Hunt ganó el GP Británico de 1976 pero fue descalificado porque su coche era demasiado ancho. Dos meses después, fue reinstaurado como ganador tras la apelación de McLaren.",
        de: "James Hunt gewann den Britischen GP 1976 wurde aber disqualifiziert weil sein Auto zu breit war. Zwei Monate später wurde er nach McLarens Berufung wieder als Sieger eingesetzt.",
        nl: "James Hunt won de Britse GP van 1976 maar werd gediskwalificeerd omdat zijn auto te breed was. Twee maanden later werd hij na McLaren's beroep hersteld als winnaar."
      }
    },
    {
      question: {
        en: "At which 1957 race did Stirling Moss win in a privately-entered Vanwall?",
        es: "¿En qué carrera de 1957 ganó Stirling Moss en un Vanwall de entrada privada?",
        de: "Bei welchem Rennen 1957 gewann Stirling Moss in einem privat eingeschriebenen Vanwall?",
        nl: "Bij welke race van 1957 won Stirling Moss in een privaat ingeschreven Vanwall?"
      },
      options: [
        "British Grand Prix",
        "Italian Grand Prix",
        "Pescara Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Stirling Moss won the 1957 Pescara GP in Italy driving a Vanwall, giving Britain its first F1 victory and Vanwall its first-ever win.",
        es: "Stirling Moss ganó el GP de Pescara de 1957 en Italia conduciendo un Vanwall, dando a Gran Bretaña su primera victoria en F1 y a Vanwall su primera victoria.",
        de: "Stirling Moss gewann den Pescara GP 1957 in Italien in einem Vanwall und gab Großbritannien seinen ersten F1-Sieg und Vanwall seinen allerersten Sieg.",
        nl: "Stirling Moss won de Pescara GP van 1957 in Italië rijdend in een Vanwall, gaf Groot-Brittannië zijn eerste F1-overwinning en Vanwall zijn allereerste overwinning."
      }
    },
    {
      question: {
        en: "Which 1961 race saw Phil Hill become America's first World Champion?",
        es: "¿Qué carrera de 1961 vio a Phil Hill convertirse en el primer Campeón Mundial de América?",
        de: "Welches Rennen 1961 sah Phil Hill als Amerikas ersten Weltmeister werden?",
        nl: "Welke race van 1961 zag Phil Hill Amerika's eerste Wereldkampioen worden?"
      },
      options: [
        "United States Grand Prix",
        "Italian Grand Prix",
        "Monaco Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Phil Hill won the tragic 1961 Italian GP where teammate von Trips was killed, clinching America's first F1 World Championship in somber circumstances.",
        es: "Phil Hill ganó el trágico GP de Italia de 1961 donde su compañero von Trips murió, asegurando el primer Campeonato Mundial de F1 de América en circunstancias sombrías.",
        de: "Phil Hill gewann den tragischen Italien GP 1961 wo Teamkollege von Trips starb, sicherte Amerikas erste F1-Weltmeisterschaft unter düsteren Umständen.",
        nl: "Phil Hill won de tragische Italiaanse GP van 1961 waar teamgenoot von Trips werd gedood, stelde Amerika's eerste F1 Wereldkampioenschap veilig onder sombere omstandigheden."
      }
    },
    {
      question: {
        en: "At which 1968 race did Jo Siffert score his only F1 victory?",
        es: "¿En qué carrera de 1968 logró Jo Siffert su única victoria en F1?",
        de: "Bei welchem Rennen 1968 erzielte Jo Siffert seinen einzigen F1-Sieg?",
        nl: "Bij welke race van 1968 behaalde Jo Siffert zijn enige F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "French Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jo Siffert won the 1968 British GP at Brands Hatch for Rob Walker Racing, his only F1 victory in a privately-entered Lotus 49B.",
        es: "Jo Siffert ganó el GP Británico de 1968 en Brands Hatch para Rob Walker Racing, su única victoria en F1 en un Lotus 49B de entrada privada.",
        de: "Jo Siffert gewann den Britischen GP 1968 in Brands Hatch für Rob Walker Racing, sein einziger F1-Sieg in einem privat eingeschriebenen Lotus 49B.",
        nl: "Jo Siffert won de Britse GP van 1968 op Brands Hatch voor Rob Walker Racing, zijn enige F1-overwinning in een privaat ingeschreven Lotus 49B."
      }
    },
    {
      question: {
        en: "Which 1950 race saw the first-ever Formula 1 World Championship victory?",
        es: "¿Qué carrera de 1950 vio la primera victoria del Campeonato Mundial de Fórmula 1?",
        de: "Welches Rennen 1950 sah den allerersten Formel-1-Weltmeisterschaftssieg?",
        nl: "Welke race van 1950 zag de allereerste Formule 1 Wereldkampioenschap overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Swiss Grand Prix",
        "British Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Giuseppe Farina won the 1950 British GP at Silverstone on May 13, 1950, the first-ever Formula 1 World Championship race for Alfa Romeo.",
        es: "Giuseppe Farina ganó el GP Británico de 1950 en Silverstone el 13 de mayo de 1950, la primera carrera del Campeonato Mundial de Fórmula 1 para Alfa Romeo.",
        de: "Giuseppe Farina gewann den Britischen GP 1950 in Silverstone am 13. Mai 1950, das allererste Formel-1-Weltmeisterschaftsrennen für Alfa Romeo.",
        nl: "Giuseppe Farina won de Britse GP van 1950 op Silverstone op 13 mei 1950, de allereerste Formule 1 Wereldkampioenschap race voor Alfa Romeo."
      }
    },
    {
      question: {
        en: "At which 1983 race did John Watson win from 22nd on the grid?",
        es: "¿En qué carrera de 1983 ganó John Watson desde la 22ª posición en la parrilla?",
        de: "Bei welchem Rennen 1983 gewann John Watson von Startplatz 22?",
        nl: "Bij welke race van 1983 won John Watson vanaf plek 22 op de grid?"
      },
      options: [
        "British Grand Prix",
        "United States Grand Prix West",
        "Monaco Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "John Watson won the 1983 US GP West at Long Beach from 22nd on the grid, still the lowest grid position for a race winner in F1 history.",
        es: "John Watson ganó el GP del Oeste de EE.UU. de 1983 en Long Beach desde la 22ª posición en la parrilla, todavía la posición de parrilla más baja para un ganador de carrera en la historia de F1.",
        de: "John Watson gewann den US GP West 1983 in Long Beach von Startplatz 22, immer noch die niedrigste Startposition für einen Rennsieger in der F1-Geschichte.",
        nl: "John Watson won de US GP West van 1983 in Long Beach vanaf plek 22 op de grid, nog steeds de laagste gridpositie voor een racewinnaar in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "Which 1971 race did François Cevert win for his only F1 victory?",
        es: "¿Qué carrera de 1971 ganó François Cevert para su única victoria en F1?",
        de: "Welches Rennen 1971 gewann François Cevert für seinen einzigen F1-Sieg?",
        nl: "Welke race van 1971 won François Cevert voor zijn enige F1-overwinning?"
      },
      options: [
        "French Grand Prix",
        "Belgian Grand Prix",
        "United States Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "François Cevert won the 1971 United States GP at Watkins Glen for Tyrrell, his only F1 victory before his fatal crash at the same circuit in 1973.",
        es: "François Cevert ganó el GP de Estados Unidos de 1971 en Watkins Glen para Tyrrell, su única victoria en F1 antes de su accidente fatal en el mismo circuito en 1973.",
        de: "François Cevert gewann den US GP 1971 in Watkins Glen für Tyrrell, sein einziger F1-Sieg vor seinem tödlichen Unfall auf derselben Strecke 1973.",
        nl: "François Cevert won de US GP van 1971 op Watkins Glen voor Tyrrell, zijn enige F1-overwinning voor zijn fatale crash op hetzelfde circuit in 1973."
      }
    },
    {
      question: {
        en: "At which 1955 race did Stirling Moss score his first F1 victory?",
        es: "¿En qué carrera de 1955 logró Stirling Moss su primera victoria en F1?",
        de: "Bei welchem Rennen 1955 erzielte Stirling Moss seinen ersten F1-Sieg?",
        nl: "Bij welke race van 1955 behaalde Stirling Moss zijn eerste F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Stirling Moss won the 1955 British GP at Aintree for Mercedes, his first F1 victory in front of his home crowd driving alongside Fangio.",
        es: "Stirling Moss ganó el GP Británico de 1955 en Aintree para Mercedes, su primera victoria en F1 frente a su público local conduciendo junto a Fangio.",
        de: "Stirling Moss gewann den Britischen GP 1955 in Aintree für Mercedes, sein erster F1-Sieg vor heimischem Publikum an der Seite von Fangio.",
        nl: "Stirling Moss won de Britse GP van 1955 in Aintree voor Mercedes, zijn eerste F1-overwinning voor zijn thuispubliek rijdend naast Fangio."
      }
    },
    {
      question: {
        en: "Which 1982 race saw Elio de Angelis win in a dramatic finish for Lotus?",
        es: "¿Qué carrera de 1982 vio a Elio de Angelis ganar en un final dramático para Lotus?",
        de: "Welches Rennen 1982 sah Elio de Angelis in einem dramatischen Finish für Lotus gewinnen?",
        nl: "Welke race van 1982 zag Elio de Angelis winnen in een dramatische finish voor Lotus?"
      },
      options: [
        "Monaco Grand Prix",
        "Austrian Grand Prix",
        "Belgian Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Elio de Angelis won the chaotic 1982 Austrian GP for Lotus after multiple leaders retired, one of two wins in his F1 career.",
        es: "Elio de Angelis ganó el caótico GP de Austria de 1982 para Lotus después de que múltiples líderes se retiraran, una de dos victorias en su carrera de F1.",
        de: "Elio de Angelis gewann den chaotischen Österreich GP 1982 für Lotus nachdem mehrere Führende ausschieden, einer von zwei Siegen in seiner F1-Karriere.",
        nl: "Elio de Angelis won de chaotische Oostenrijkse GP van 1982 voor Lotus nadat meerdere leiders uitvielen, een van twee overwinningen in zijn F1-carrière."
      }
    },
    {
      question: {
        en: "At which 1987 race did Gerhard Berger score his first F1 victory?",
        es: "¿En qué carrera de 1987 logró Gerhard Berger su primera victoria en F1?",
        de: "Bei welchem Rennen 1987 erzielte Gerhard Berger seinen ersten F1-Sieg?",
        nl: "Bij welke race van 1987 behaalde Gerhard Berger zijn eerste F1-overwinning?"
      },
      options: [
        "Japanese Grand Prix",
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "Portuguese Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Gerhard Berger won the 1987 Japanese GP at Suzuka for Ferrari, his first F1 victory, helping Ferrari secure the Constructors' Championship.",
        es: "Gerhard Berger ganó el GP de Japón de 1987 en Suzuka para Ferrari, su primera victoria en F1, ayudando a Ferrari a asegurar el Campeonato de Constructores.",
        de: "Gerhard Berger gewann den Japan GP 1987 in Suzuka für Ferrari, sein erster F1-Sieg, half Ferrari die Konstrukteurs-Meisterschaft zu sichern.",
        nl: "Gerhard Berger won de Japanse GP van 1987 in Suzuka voor Ferrari, zijn eerste F1-overwinning, hielp Ferrari het Constructeurskampioenschap veilig te stellen."
      }
    },
    {
      question: {
        en: "Which 1960 race did Bruce McLaren win to become F1's youngest winner at the time?",
        es: "¿Qué carrera de 1960 ganó Bruce McLaren para convertirse en el ganador más joven de F1 en ese momento?",
        de: "Welches Rennen 1960 gewann Bruce McLaren um damals jüngster F1-Sieger zu werden?",
        nl: "Welke race van 1960 won Bruce McLaren om destijds F1's jongste winnaar te worden?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "United States Grand Prix",
        "Portuguese Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Bruce McLaren won the 1959 United States GP at Sebring at 22 years and 104 days old, becoming F1's youngest winner, a record that stood until 2003.",
        es: "Bruce McLaren ganó el GP de Estados Unidos de 1959 en Sebring con 22 años y 104 días, convirtiéndose en el ganador más joven de F1, un récord que se mantuvo hasta 2003.",
        de: "Bruce McLaren gewann den US GP 1959 in Sebring im Alter von 22 Jahren und 104 Tagen, wurde jüngster F1-Sieger, ein Rekord der bis 2003 bestand.",
        nl: "Bruce McLaren won de US GP van 1959 in Sebring op 22 jaar en 104 dagen oud, werd F1's jongste winnaar, een record dat standhield tot 2003."
      }
    },
    {
      question: {
        en: "At which 1963 race did John Surtees win for Ferrari in only his 16th Grand Prix start?",
        es: "¿En qué carrera de 1963 ganó John Surtees para Ferrari en solo su 16ª salida de Gran Premio?",
        de: "Bei welchem Rennen 1963 gewann John Surtees für Ferrari in nur seinem 16. Grand-Prix-Start?",
        nl: "Bij welke race van 1963 won John Surtees voor Ferrari in slechts zijn 16e Grand Prix start?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "Italian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "John Surtees won the 1963 German GP at the Nürburgring for Ferrari in his 16th F1 start, the only man to win World Championships on both two and four wheels.",
        es: "John Surtees ganó el GP de Alemania de 1963 en el Nürburgring para Ferrari en su 16ª salida de F1, el único hombre en ganar Campeonatos Mundiales en dos y cuatro ruedas.",
        de: "John Surtees gewann den Deutschland GP 1963 am Nürburgring für Ferrari in seinem 16. F1-Start, der einzige Mann der Weltmeisterschaften auf zwei und vier Rädern gewann.",
        nl: "John Surtees won de Duitse GP van 1963 op de Nürburgring voor Ferrari in zijn 16e F1 start, de enige man die Wereldkampioenschappen won op zowel twee als vier wielen."
      }
    },
    {
      question: {
        en: "Which 1999 race did Mika Häkkinen win after passing Michael Schumacher with a backmarker?",
        es: "¿Qué carrera de 1999 ganó Mika Häkkinen después de pasar a Michael Schumacher con un retrasado?",
        de: "Welches Rennen 1999 gewann Mika Häkkinen nachdem er Michael Schumacher mit einem Hinterbänkler überholte?",
        nl: "Welke race van 1999 won Mika Häkkinen na Michael Schumacher te passeren met een achterblijver?"
      },
      options: [
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "Japanese Grand Prix",
        "Malaysian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Mika Häkkinen passed Michael Schumacher around the backmarker Ricardo Zonta at Spa in the 1999 Belgian GP, one of F1's most iconic overtaking moves.",
        es: "Mika Häkkinen pasó a Michael Schumacher alrededor del retrasado Ricardo Zonta en Spa en el GP de Bélgica de 1999, uno de los adelantamientos más icónicos de F1.",
        de: "Mika Häkkinen überholte Michael Schumacher um den Hinterbänkler Ricardo Zonta in Spa beim Belgien GP 1999, eines der ikonischsten Überholmanöver der F1.",
        nl: "Mika Häkkinen passeerde Michael Schumacher rond de achterblijver Ricardo Zonta in Spa bij de Belgische GP van 1999, een van F1's meest iconische inhaalmanoeuvres."
      }
    },
    {
      question: {
        en: "At which 1956 race did Peter Collins give his car to Juan Manuel Fangio mid-race?",
        es: "¿En qué carrera de 1956 Peter Collins dio su coche a Juan Manuel Fangio a mitad de carrera?",
        de: "Bei welchem Rennen 1956 gab Peter Collins sein Auto mitten im Rennen an Juan Manuel Fangio?",
        nl: "Bij welke race van 1956 gaf Peter Collins zijn auto mid-race aan Juan Manuel Fangio?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "Italian Grand Prix",
        "German Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Peter Collins handed his Ferrari to Fangio at the 1956 Italian GP after Fangio's car failed, a sporting gesture that helped Fangio win his 4th championship.",
        es: "Peter Collins entregó su Ferrari a Fangio en el GP de Italia de 1956 después de que el coche de Fangio fallara, un gesto deportivo que ayudó a Fangio a ganar su 4º campeonato.",
        de: "Peter Collins übergab sein Ferrari an Fangio beim Italien GP 1956 nachdem Fangios Auto ausfiel, eine sportliche Geste die Fangio half seine 4. Meisterschaft zu gewinnen.",
        nl: "Peter Collins gaf zijn Ferrari aan Fangio bij de Italiaanse GP van 1956 nadat Fangio's auto uitviel, een sportief gebaar dat Fangio hielp zijn 4e kampioenschap te winnen."
      }
    },
    {
      question: {
        en: "Which 1974 race did Ronnie Peterson win for his last F1 victory?",
        es: "¿Qué carrera de 1974 ganó Ronnie Peterson para su última victoria en F1?",
        de: "Welches Rennen 1974 gewann Ronnie Peterson für seinen letzten F1-Sieg?",
        nl: "Welke race van 1974 won Ronnie Peterson voor zijn laatste F1-overwinning?"
      },
      options: [
        "Italian Grand Prix",
        "Monaco Grand Prix",
        "French Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 3,
      explanation: {
        en: "Ronnie Peterson won the 1978 Austrian GP for Lotus, his 10th and final F1 victory just weeks before his fatal crash at Monza.",
        es: "Ronnie Peterson ganó el GP de Austria de 1978 para Lotus, su 10ª y última victoria en F1 solo semanas antes de su accidente fatal en Monza.",
        de: "Ronnie Peterson gewann den Österreich GP 1978 für Lotus, sein 10. und letzter F1-Sieg nur Wochen vor seinem tödlichen Unfall in Monza.",
        nl: "Ronnie Peterson won de Oostenrijkse GP van 1978 voor Lotus, zijn 10e en laatste F1-overwinning slechts weken voor zijn fatale crash in Monza."
      }
    },
    {
      question: {
        en: "At which 1952 race did Alberto Ascari win to secure his first World Championship?",
        es: "¿En qué carrera de 1952 ganó Alberto Ascari para asegurar su primer Campeonato Mundial?",
        de: "Bei welchem Rennen 1952 gewann Alberto Ascari um seine erste Weltmeisterschaft zu sichern?",
        nl: "Bij welke race van 1952 won Alberto Ascari om zijn eerste Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "German Grand Prix",
        "Dutch Grand Prix",
        "Belgian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Alberto Ascari won the 1952 Dutch GP at Zandvoort to clinch his first championship for Ferrari, dominating the season with 6 wins.",
        es: "Alberto Ascari ganó el GP de Holanda de 1952 en Zandvoort para asegurar su primer campeonato para Ferrari, dominando la temporada con 6 victorias.",
        de: "Alberto Ascari gewann den Niederländischen GP 1952 in Zandvoort um seine erste Meisterschaft für Ferrari zu sichern, dominierte die Saison mit 6 Siegen.",
        nl: "Alberto Ascari won de Nederlandse GP van 1952 in Zandvoort om zijn eerste kampioenschap voor Ferrari veilig te stellen, domineerde het seizoen met 6 overwinningen."
      }
    },
    {
      question: {
        en: "Which 1984 race did Niki Lauda win by half a point to secure his third title?",
        es: "¿Qué carrera de 1984 ganó Niki Lauda por medio punto para asegurar su tercer título?",
        de: "Welches Rennen 1984 gewann Niki Lauda mit einem halben Punkt um seinen dritten Titel zu sichern?",
        nl: "Welke race van 1984 won Niki Lauda met een half punt om zijn derde titel veilig te stellen?"
      },
      options: [
        "European Grand Prix",
        "Portuguese Grand Prix",
        "Italian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Niki Lauda finished 2nd at the 1984 Portuguese GP to beat teammate Prost to the championship by just half a point, the narrowest margin in F1 history.",
        es: "Niki Lauda terminó 2º en el GP de Portugal de 1984 para vencer a su compañero Prost por el campeonato por solo medio punto, el margen más estrecho en la historia de F1.",
        de: "Niki Lauda wurde beim Portugal GP 1984 Zweiter um Teamkollege Prost um die Meisterschaft mit nur einem halben Punkt zu schlagen, die knappste Spanne in der F1-Geschichte.",
        nl: "Niki Lauda eindigde als 2e in de Portugese GP van 1984 om teamgenoot Prost te verslaan voor het kampioenschap met slechts een half punt, de kleinste marge in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "At which 1991 race did Ayrton Senna famously give a lift to Nigel Mansell after winning?",
        es: "¿En qué carrera de 1991 Ayrton Senna dio famosamente un aventón a Nigel Mansell después de ganar?",
        de: "Bei welchem Rennen 1991 gab Ayrton Senna Nigel Mansell berühmt eine Mitfahrgelegenheit nach dem Sieg?",
        nl: "Bij welke race van 1991 gaf Ayrton Senna Nigel Mansell beroemd een lift na het winnen?"
      },
      options: [
        "British Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix",
        "German Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "After Mansell's Williams stopped on the final lap of the 1991 British GP while leading, Senna stopped to give him a lift back to the pits on the cooldown lap.",
        es: "Después de que el Williams de Mansell se detuviera en la última vuelta del GP Británico de 1991 mientras lideraba, Senna se detuvo para darle un aventón de regreso a los boxes en la vuelta de enfriamiento.",
        de: "Nachdem Mansells Williams in der letzten Runde des Britischen GP 1991 während er führte stehen blieb, stoppte Senna um ihm eine Mitfahrgelegenheit zur Box in der Ausrollrunde zu geben.",
        nl: "Nadat Mansell's Williams in de laatste ronde van de Britse GP van 1991 stopte terwijl hij leidde, stopte Senna om hem een lift terug naar de pits te geven in de cooldown ronde."
      }
    },
    {
      question: {
        en: "Which 1953 race did Juan Manuel Fangio win to secure his first championship?",
        es: "¿Qué carrera de 1953 ganó Juan Manuel Fangio para asegurar su primer campeonato?",
        de: "Welches Rennen 1953 gewann Juan Manuel Fangio um seine erste Meisterschaft zu sichern?",
        nl: "Welke race van 1953 won Juan Manuel Fangio om zijn eerste kampioenschap veilig te stellen?"
      },
      options: [
        "Swiss Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "French Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Juan Manuel Fangio won the 1953 Italian GP at Monza for Maserati to clinch his first of five World Championships, beginning his legendary career.",
        es: "Juan Manuel Fangio ganó el GP de Italia de 1953 en Monza para Maserati para asegurar el primero de cinco Campeonatos Mundiales, comenzando su legendaria carrera.",
        de: "Juan Manuel Fangio gewann den Italien GP 1953 in Monza für Maserati um seine erste von fünf Weltmeisterschaften zu sichern und begann seine legendäre Karriere.",
        nl: "Juan Manuel Fangio won de Italiaanse GP van 1953 in Monza voor Maserati om zijn eerste van vijf Wereldkampioenschappen veilig te stellen, begon zijn legendarische carrière."
      }
    },
    {
      question: {
        en: "At which 1986 race did Nigel Mansell collapse while pushing his car to the finish?",
        es: "¿En qué carrera de 1986 Nigel Mansell colapsó mientras empujaba su coche a la meta?",
        de: "Bei welchem Rennen 1986 brach Nigel Mansell zusammen während er sein Auto ins Ziel schob?",
        nl: "Bij welke race van 1986 stortte Nigel Mansell in terwijl hij zijn auto naar de finish duwde?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "Spanish Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Nigel Mansell collapsed from heat exhaustion after pushing his Williams to 6th place at the 1986 Spanish GP in extreme temperatures at Jerez.",
        es: "Nigel Mansell colapsó por insolación después de empujar su Williams al 6º lugar en el GP de España de 1986 en temperaturas extremas en Jerez.",
        de: "Nigel Mansell brach wegen Hitzeerschöpfung zusammen nachdem er seinen Williams auf Platz 6 beim Spanien GP 1986 bei extremen Temperaturen in Jerez schob.",
        nl: "Nigel Mansell stortte in door hitte-uitputting na het duwen van zijn Williams naar 6e plaats bij de Spaanse GP van 1986 in extreme temperaturen in Jerez."
      }
    },
    {
      question: {
        en: "Which 1977 race did Jody Scheckter win for Wolf Racing's debut victory?",
        es: "¿Qué carrera de 1977 ganó Jody Scheckter para la victoria de debut de Wolf Racing?",
        de: "Welches Rennen 1977 gewann Jody Scheckter für Wolf Racings Debütsieg?",
        nl: "Welke race van 1977 won Jody Scheckter voor Wolf Racing's debuut overwinning?"
      },
      options: [
        "Brazilian Grand Prix",
        "South African Grand Prix",
        "Argentine Grand Prix",
        "United States Grand Prix West"
      ],
      correct: 2,
      explanation: {
        en: "Jody Scheckter won Wolf Racing's first-ever race at the 1977 Argentine GP, a remarkable achievement for the brand-new team in their debut season.",
        es: "Jody Scheckter ganó la primera carrera de Wolf Racing en el GP de Argentina de 1977, un logro notable para el equipo nuevo en su temporada de debut.",
        de: "Jody Scheckter gewann Wolf Racings allererstes Rennen beim Argentinien GP 1977, eine bemerkenswerte Leistung für das brandneue Team in ihrer Debütsaison.",
        nl: "Jody Scheckter won Wolf Racing's allereerste race bij de Argentijnse GP van 1977, een opmerkelijke prestatie voor het gloednieuwe team in hun debuutseizoen."
      }
    },
    {
      question: {
        en: "At which 1962 race did Graham Hill win to secure his first World Championship?",
        es: "¿En qué carrera de 1962 ganó Graham Hill para asegurar su primer Campeonato Mundial?",
        de: "Bei welchem Rennen 1962 gewann Graham Hill um seine erste Weltmeisterschaft zu sichern?",
        nl: "Bij welke race van 1962 won Graham Hill om zijn eerste Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "South African Grand Prix",
        "Italian Grand Prix",
        "United States Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Graham Hill won the 1962 South African GP at East London to clinch his first championship for BRM, beating Jim Clark to the title.",
        es: "Graham Hill ganó el GP de Sudáfrica de 1962 en East London para asegurar su primer campeonato para BRM, venciendo a Jim Clark por el título.",
        de: "Graham Hill gewann den Südafrika GP 1962 in East London um seine erste Meisterschaft für BRM zu sichern, schlug Jim Clark um den Titel.",
        nl: "Graham Hill won de Zuid-Afrikaanse GP van 1962 in East London om zijn eerste kampioenschap voor BRM veilig te stellen, versloeg Jim Clark voor de titel."
      }
    },
    {
      question: {
        en: "Which 1990 race did Alessandro Nannini win for his only F1 victory?",
        es: "¿Qué carrera de 1990 ganó Alessandro Nannini para su única victoria en F1?",
        de: "Welches Rennen 1990 gewann Alessandro Nannini für seinen einzigen F1-Sieg?",
        nl: "Welke race van 1990 won Alessandro Nannini voor zijn enige F1-overwinning?"
      },
      options: [
        "Canadian Grand Prix",
        "Japanese Grand Prix",
        "Monaco Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Alessandro Nannini won the controversial 1989 Japanese GP for Benetton after Senna was disqualified, his only F1 victory before losing his arm in a helicopter crash.",
        es: "Alessandro Nannini ganó el controvertido GP de Japón de 1989 para Benetton después de que Senna fuera descalificado, su única victoria en F1 antes de perder su brazo en un accidente de helicóptero.",
        de: "Alessandro Nannini gewann den umstrittenen Japan GP 1989 für Benetton nachdem Senna disqualifiziert wurde, sein einziger F1-Sieg bevor er seinen Arm bei einem Hubschrauberunfall verlor.",
        nl: "Alessandro Nannini won de controversiële Japanse GP van 1989 voor Benetton nadat Senna gediskwalificeerd werd, zijn enige F1-overwinning voordat hij zijn arm verloor in een helikoptercrash."
      }
    },
    {
      question: {
        en: "At which 2003 race did Giancarlo Fisichella win for Jordan's last-ever victory?",
        es: "¿En qué carrera de 2003 ganó Giancarlo Fisichella para la última victoria de Jordan?",
        de: "Bei welchem Rennen 2003 gewann Giancarlo Fisichella für Jordans letzten Sieg?",
        nl: "Bij welke race van 2003 won Giancarlo Fisichella voor Jordan's allerlaatste overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Brazilian Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Giancarlo Fisichella won the chaotic 2003 Brazilian GP for Jordan after the race was red-flagged, Jordan's last F1 victory before becoming Midland F1.",
        es: "Giancarlo Fisichella ganó el caótico GP de Brasil de 2003 para Jordan después de que la carrera fuera detenida con bandera roja, la última victoria de Jordan en F1 antes de convertirse en Midland F1.",
        de: "Giancarlo Fisichella gewann den chaotischen Brasilien GP 2003 für Jordan nachdem das Rennen mit roter Flagge gestoppt wurde, Jordans letzter F1-Sieg bevor sie Midland F1 wurden.",
        nl: "Giancarlo Fisichella won de chaotische Braziliaanse GP van 2003 voor Jordan nadat de race met rode vlag gestopt werd, Jordan's laatste F1-overwinning voordat ze Midland F1 werden."
      }
    },
    {
      question: {
        en: "Which 1973 race did Denny Hulme win for his last F1 victory?",
        es: "¿Qué carrera de 1973 ganó Denny Hulme para su última victoria en F1?",
        de: "Welches Rennen 1973 gewann Denny Hulme für seinen letzten F1-Sieg?",
        nl: "Welke race van 1973 won Denny Hulme voor zijn laatste F1-overwinning?"
      },
      options: [
        "Swedish Grand Prix",
        "Canadian Grand Prix",
        "South African Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Denny Hulme won the 1973 Swedish GP at Anderstorp for McLaren, his 8th and final F1 victory before retiring at the end of 1974.",
        es: "Denny Hulme ganó el GP de Suecia de 1973 en Anderstorp para McLaren, su 8ª y última victoria en F1 antes de retirarse al final de 1974.",
        de: "Denny Hulme gewann den Schweden GP 1973 in Anderstorp für McLaren, sein 8. und letzter F1-Sieg vor dem Rücktritt Ende 1974.",
        nl: "Denny Hulme won de Zweedse GP van 1973 in Anderstorp voor McLaren, zijn 8e en laatste F1-overwinning voor zijn pensioen eind 1974."
      }
    },
    {
      question: {
        en: "At which 1995 race did David Coulthard score his first F1 victory?",
        es: "¿En qué carrera de 1995 logró David Coulthard su primera victoria en F1?",
        de: "Bei welchem Rennen 1995 erzielte David Coulthard seinen ersten F1-Sieg?",
        nl: "Bij welke race van 1995 behaalde David Coulthard zijn eerste F1-overwinning?"
      },
      options: [
        "Portuguese Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "David Coulthard won the 1995 Portuguese GP at Estoril for Williams, his first F1 victory in only his 8th race start for the team.",
        es: "David Coulthard ganó el GP de Portugal de 1995 en Estoril para Williams, su primera victoria en F1 en solo su 8ª salida para el equipo.",
        de: "David Coulthard gewann den Portugal GP 1995 in Estoril für Williams, sein erster F1-Sieg in nur seinem 8. Rennstart für das Team.",
        nl: "David Coulthard won de Portugese GP van 1995 in Estoril voor Williams, zijn eerste F1-overwinning in slechts zijn 8e race start voor het team."
      }
    },
    {
      question: {
        en: "Which 1951 race did José Froilán González win for Ferrari's first-ever F1 victory?",
        es: "¿Qué carrera de 1951 ganó José Froilán González para la primera victoria de Ferrari en F1?",
        de: "Welches Rennen 1951 gewann José Froilán González für Ferraris allerersten F1-Sieg?",
        nl: "Welke race van 1951 won José Froilán González voor Ferrari's allereerste F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "German Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "José Froilán González won the 1951 British GP at Silverstone for Ferrari, breaking Alfa Romeo's dominance and giving Ferrari their first-ever F1 victory.",
        es: "José Froilán González ganó el GP Británico de 1951 en Silverstone para Ferrari, rompiendo el dominio de Alfa Romeo y dando a Ferrari su primera victoria en F1.",
        de: "José Froilán González gewann den Britischen GP 1951 in Silverstone für Ferrari, brach Alfa Romeos Dominanz und gab Ferrari seinen allerersten F1-Sieg.",
        nl: "José Froilán González won de Britse GP van 1951 op Silverstone voor Ferrari, brak Alfa Romeo's dominantie en gaf Ferrari hun allereerste F1-overwinning."
      }
    },
    {
      question: {
        en: "At which 1978 race did Mario Andretti clinch his only World Championship?",
        es: "¿En qué carrera de 1978 Mario Andretti aseguró su único Campeonato Mundial?",
        de: "Bei welchem Rennen 1978 sicherte Mario Andretti seine einzige Weltmeisterschaft?",
        nl: "Bij welke race van 1978 stelde Mario Andretti zijn enige Wereldkampioenschap veilig?"
      },
      options: [
        "Dutch Grand Prix",
        "Italian Grand Prix",
        "United States Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Mario Andretti finished 6th at the tragic 1978 Italian GP to clinch the championship for Lotus, overshadowed by Ronnie Peterson's fatal crash.",
        es: "Mario Andretti terminó 6º en el trágico GP de Italia de 1978 para asegurar el campeonato para Lotus, eclipsado por el accidente fatal de Ronnie Peterson.",
        de: "Mario Andretti wurde beim tragischen Italien GP 1978 Sechster um die Meisterschaft für Lotus zu sichern, überschattet von Ronnie Petersons tödlichem Unfall.",
        nl: "Mario Andretti eindigde als 6e in de tragische Italiaanse GP van 1978 om het kampioenschap voor Lotus veilig te stellen, overschaduwd door Ronnie Peterson's fatale crash."
      }
    },
    {
      question: {
        en: "Which 2006 race did Michael Schumacher announce his retirement?",
        es: "¿En qué carrera de 2006 Michael Schumacher anunció su retiro?",
        de: "Bei welchem Rennen 2006 kündigte Michael Schumacher seinen Rücktritt an?",
        nl: "Bij welke race van 2006 kondigde Michael Schumacher zijn pensioen aan?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "Turkish Grand Prix",
        "Hungarian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher announced his retirement before the 2006 Italian GP at Monza, his final race for Ferrari, though he would return with Mercedes in 2010.",
        es: "Michael Schumacher anunció su retiro antes del GP de Italia de 2006 en Monza, su última carrera para Ferrari, aunque regresaría con Mercedes en 2010.",
        de: "Michael Schumacher kündigte seinen Rücktritt vor dem Italien GP 2006 in Monza an, sein letztes Rennen für Ferrari, obwohl er 2010 mit Mercedes zurückkehrte.",
        nl: "Michael Schumacher kondigde zijn pensioen aan voor de Italiaanse GP van 2006 in Monza, zijn laatste race voor Ferrari, hoewel hij in 2010 zou terugkeren met Mercedes."
      }
    },
    {
      question: {
        en: "At which 1989 race did Maurício Gugelmin score Leyton House's only podium?",
        es: "¿En qué carrera de 1989 logró Maurício Gugelmin el único podio de Leyton House?",
        de: "Bei welchem Rennen 1989 erzielte Maurício Gugelmin Leyton Houses einziges Podium?",
        nl: "Bij welke race van 1989 behaalde Maurício Gugelmin Leyton House's enige podium?"
      },
      options: [
        "Monaco Grand Prix",
        "Brazilian Grand Prix",
        "Canadian Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Maurício Gugelmin finished 3rd at the 1989 Brazilian GP for Leyton House March, the team's only podium finish in their F1 history.",
        es: "Maurício Gugelmin terminó 3º en el GP de Brasil de 1989 para Leyton House March, el único podio del equipo en su historia de F1.",
        de: "Maurício Gugelmin wurde beim Brasilien GP 1989 Dritter für Leyton House March, das einzige Podium des Teams in ihrer F1-Geschichte.",
        nl: "Maurício Gugelmin eindigde als 3e in de Braziliaanse GP van 1989 voor Leyton House March, het enige podium van het team in hun F1-geschiedenis."
      }
    },
    {
      question: {
        en: "Which 1994 race did Michael Schumacher win despite serving a 5-second stop-and-go penalty?",
        es: "¿Qué carrera de 1994 ganó Michael Schumacher a pesar de cumplir una penalización de parada de 5 segundos?",
        de: "Welches Rennen 1994 gewann Michael Schumacher trotz einer 5-Sekunden-Stop-and-Go-Strafe?",
        nl: "Welke race van 1994 won Michael Schumacher ondanks het uitzitten van een 5-seconden stop-and-go straf?"
      },
      options: [
        "British Grand Prix",
        "Belgian Grand Prix",
        "Spanish Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won the 1994 Belgian GP despite a 5-second stop-and-go penalty for overtaking Hill under yellow flags, dominating in wet conditions.",
        es: "Michael Schumacher ganó el GP de Bélgica de 1994 a pesar de una penalización de parada de 5 segundos por adelantar a Hill bajo banderas amarillas, dominando en condiciones húmedas.",
        de: "Michael Schumacher gewann den Belgien GP 1994 trotz einer 5-Sekunden-Stop-and-Go-Strafe fürs Überholen von Hill unter gelben Flaggen, dominierte bei nassen Bedingungen.",
        nl: "Michael Schumacher won de Belgische GP van 1994 ondanks een 5-seconden stop-and-go straf voor het inhalen van Hill onder gele vlaggen, domineerde in natte omstandigheden."
      }
    },
    {
      question: {
        en: "At which 1951 race did Juan Manuel Fangio win his first F1 victory?",
        es: "¿En qué carrera de 1951 logró Juan Manuel Fangio su primera victoria en F1?",
        de: "Bei welchem Rennen 1951 erzielte Juan Manuel Fangio seinen ersten F1-Sieg?",
        nl: "Bij welke race van 1951 behaalde Juan Manuel Fangio zijn eerste F1-overwinning?"
      },
      options: [
        "Swiss Grand Prix",
        "French Grand Prix",
        "Spanish Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Juan Manuel Fangio won the 1951 French GP at Reims for Alfa Romeo, his first F1 victory on the way to winning his first championship that year.",
        es: "Juan Manuel Fangio ganó el GP de Francia de 1951 en Reims para Alfa Romeo, su primera victoria en F1 en camino a ganar su primer campeonato ese año.",
        de: "Juan Manuel Fangio gewann den Frankreich GP 1951 in Reims für Alfa Romeo, sein erster F1-Sieg auf dem Weg zum Gewinn seiner ersten Meisterschaft in diesem Jahr.",
        nl: "Juan Manuel Fangio won de Franse GP van 1951 in Reims voor Alfa Romeo, zijn eerste F1-overwinning op weg naar het winnen van zijn eerste kampioenschap dat jaar."
      }
    },
    {
      question: {
        en: "Which 2011 race did Pastor Maldonado score his only pole position?",
        es: "¿En qué carrera de 2011 logró Pastor Maldonado su única pole position?",
        de: "Bei welchem Rennen 2011 erzielte Pastor Maldonado seine einzige Pole-Position?",
        nl: "Bij welke race van 2011 behaalde Pastor Maldonado zijn enige pole position?"
      },
      options: [
        "Monaco Grand Prix",
        "Spanish Grand Prix",
        "Belgian Grand Prix",
        "Singapore Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Pastor Maldonado took pole position at the 2012 Spanish GP for Williams, going on to win the race the next day for his only F1 victory.",
        es: "Pastor Maldonado logró la pole position en el GP de España de 2012 para Williams, ganando la carrera al día siguiente para su única victoria en F1.",
        de: "Pastor Maldonado holte die Pole-Position beim Spanien GP 2012 für Williams, gewann am nächsten Tag das Rennen für seinen einzigen F1-Sieg.",
        nl: "Pastor Maldonado behaalde pole position bij de Spaanse GP van 2012 voor Williams, won de volgende dag de race voor zijn enige F1-overwinning."
      }
    },
    {
      question: {
        en: "At which 1956 race did Stirling Moss win to give Maserati their last F1 victory?",
        es: "¿En qué carrera de 1956 ganó Stirling Moss para dar a Maserati su última victoria en F1?",
        de: "Bei welchem Rennen 1956 gewann Stirling Moss um Maserati seinen letzten F1-Sieg zu geben?",
        nl: "Bij welke race van 1956 won Stirling Moss om Maserati hun laatste F1-overwinning te geven?"
      },
      options: [
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Stirling Moss won the 1957 Italian GP at Monza for Maserati, the marque's last F1 victory before they withdrew from Grand Prix racing.",
        es: "Stirling Moss ganó el GP de Italia de 1957 en Monza para Maserati, la última victoria de la marca en F1 antes de retirarse de las carreras de Gran Premio.",
        de: "Stirling Moss gewann den Italien GP 1957 in Monza für Maserati, der letzte F1-Sieg der Marke bevor sie sich aus dem Grand-Prix-Rennsport zurückzogen.",
        nl: "Stirling Moss won de Italiaanse GP van 1957 in Monza voor Maserati, de laatste F1-overwinning van het merk voordat ze zich terugtrokken uit Grand Prix racing."
      }
    },
    {
      question: {
        en: "Which 1983 race did Keke Rosberg win by just 0.014 seconds, the closest margin in F1 history?",
        es: "¿Qué carrera de 1983 ganó Keke Rosberg por solo 0.014 segundos, el margen más ajustado en la historia de F1?",
        de: "Welches Rennen 1983 gewann Keke Rosberg mit nur 0,014 Sekunden, der knappste Vorsprung in der F1-Geschichte?",
        nl: "Welke race van 1983 won Keke Rosberg met slechts 0,014 seconden, de kleinste marge in F1-geschiedenis?"
      },
      options: [
        "Dutch Grand Prix",
        "Austrian Grand Prix",
        "Belgian Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Keke Rosberg won the 1982 Austrian GP at Österreichring by just 0.050 seconds over Alain Prost, though the closest official finish was the 1971 Italian GP at 0.010 seconds.",
        es: "Keke Rosberg ganó el GP de Austria de 1982 en Österreichring por solo 0.050 segundos sobre Alain Prost, aunque el final oficial más ajustado fue el GP de Italia de 1971 con 0.010 segundos.",
        de: "Keke Rosberg gewann den Österreich GP 1982 am Österreichring mit nur 0,050 Sekunden vor Alain Prost, obwohl das knappste offizielle Finish der Italien GP 1971 mit 0,010 Sekunden war.",
        nl: "Keke Rosberg won de Oostenrijkse GP van 1982 op de Österreichring met slechts 0,050 seconden voor Alain Prost, hoewel de kleinste officiële finish de Italiaanse GP van 1971 was met 0,010 seconden."
      }
    },
    {
      question: {
        en: "At which 1969 race did Jackie Stewart win by lapping the entire field except 2nd place?",
        es: "¿En qué carrera de 1969 ganó Jackie Stewart doblando a todo el campo excepto el 2º lugar?",
        de: "Bei welchem Rennen 1969 gewann Jackie Stewart und überrundete das gesamte Feld außer dem Zweitplatzierten?",
        nl: "Bij welke race van 1969 won Jackie Stewart door het hele veld te ronden behalve de 2e plaats?"
      },
      options: [
        "Spanish Grand Prix",
        "Dutch Grand Prix",
        "French Grand Prix",
        "British Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jackie Stewart dominated the 1969 Spanish GP at Montjuïc, winning by over a lap and lapping the entire field except 2nd-place finisher Bruce McLaren in his Matra.",
        es: "Jackie Stewart dominó el GP de España de 1969 en Montjuïc, ganando por más de una vuelta y doblando a todo el campo excepto Bruce McLaren en 2º lugar en su Matra.",
        de: "Jackie Stewart dominierte den Spanien GP 1969 in Montjuïc, gewann mit über einer Runde Vorsprung und überrundete das gesamte Feld außer Bruce McLaren auf Platz 2 in seinem Matra.",
        nl: "Jackie Stewart domineerde de Spaanse GP van 1969 in Montjuïc, won met meer dan een ronde voorsprong en rondde het hele veld behalve Bruce McLaren op de 2e plaats in zijn Matra."
      }
    },
    {
      question: {
        en: "Which 1961 race did Wolfgang von Trips win before his fatal accident at the next race?",
        es: "¿Qué carrera de 1961 ganó Wolfgang von Trips antes de su accidente fatal en la siguiente carrera?",
        de: "Welches Rennen 1961 gewann Wolfgang von Trips vor seinem tödlichen Unfall beim nächsten Rennen?",
        nl: "Welke race van 1961 won Wolfgang von Trips voor zijn fatale ongeluk in de volgende race?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "Dutch Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Wolfgang von Trips won the 1961 Dutch GP at Zandvoort, his second and final F1 victory before his fatal crash at Monza two races later while leading the championship.",
        es: "Wolfgang von Trips ganó el GP de Holanda de 1961 en Zandvoort, su segunda y última victoria en F1 antes de su accidente fatal en Monza dos carreras después mientras lideraba el campeonato.",
        de: "Wolfgang von Trips gewann den Niederländischen GP 1961 in Zandvoort, sein zweiter und letzter F1-Sieg vor seinem tödlichen Unfall in Monza zwei Rennen später während er die Meisterschaft anführte.",
        nl: "Wolfgang von Trips won de Nederlandse GP van 1961 in Zandvoort, zijn tweede en laatste F1-overwinning voor zijn fatale crash in Monza twee races later terwijl hij het kampioenschap leidde."
      }
    }
  ];

  return { questions: questions };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level8;
}
