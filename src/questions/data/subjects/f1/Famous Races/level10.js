const level10 = (function() {
  const questions = [
    {
      question: {
        en: "At which 1955 race did Juan Manuel Fangio win his third championship by sharing his car mid-race with teammate Castellotti?",
        es: "¿En qué carrera de 1955 Juan Manuel Fangio ganó su tercer campeonato compartiendo su coche a mitad de carrera con su compañero Castellotti?",
        de: "Bei welchem Rennen 1955 gewann Juan Manuel Fangio seine dritte Meisterschaft indem er sein Auto mitten im Rennen mit Teamkollege Castellotti teilte?",
        nl: "Bij welke race van 1955 won Juan Manuel Fangio zijn derde kampioenschap door zijn auto mid-race te delen met teamgenoot Castellotti?"
      },
      options: [
        "Italian Grand Prix",
        "Argentine Grand Prix",
        "Monaco Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "At the 1955 Italian GP, Fangio's Mercedes retired, he took over Castellotti's Lancia mid-race and won, clinching his 3rd championship in one of F1's most remarkable drives.",
        es: "En el GP de Italia de 1955, el Mercedes de Fangio se retiró, tomó el Lancia de Castellotti a mitad de carrera y ganó, asegurando su 3er campeonato en una de las actuaciones más notables de F1.",
        de: "Beim Italien GP 1955 fiel Fangios Mercedes aus, er übernahm Castellottis Lancia mitten im Rennen und gewann, sicherte seine 3. Meisterschaft in einer der bemerkenswertesten Fahrten der F1.",
        nl: "Bij de Italiaanse GP van 1955 viel Fangio's Mercedes uit, hij nam Castellotti's Lancia mid-race over en won, stelde zijn 3e kampioenschap veilig in een van F1's meest opmerkelijke ritten."
      }
    },
    {
      question: {
        en: "Which 1954 race saw Juan Manuel Fangio execute a brilliant strategic fuel-saving drive to win his second championship?",
        es: "¿Qué carrera de 1954 vio a Juan Manuel Fangio ejecutar una brillante conducción estratégica de ahorro de combustible para ganar su segundo campeonato?",
        de: "Welches Rennen 1954 sah Juan Manuel Fangio eine brillante strategische kraftstoffsparende Fahrt ausführen um seine zweite Meisterschaft zu gewinnen?",
        nl: "Welke race van 1954 zag Juan Manuel Fangio een briljante strategische brandstofbesparende rit uitvoeren om zijn tweede kampioenschap te winnen?"
      },
      options: [
        "Swiss Grand Prix",
        "Italian Grand Prix",
        "Spanish Grand Prix",
        "British Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "At the 1954 Spanish GP in Barcelona, Fangio executed a masterful fuel-saving strategy in the Mercedes W196, conserving fuel while maintaining speed to win his 2nd title.",
        es: "En el GP de España de 1954 en Barcelona, Fangio ejecutó una magistral estrategia de ahorro de combustible en el Mercedes W196, conservando combustible mientras mantenía la velocidad para ganar su 2º título.",
        de: "Beim Spanien GP 1954 in Barcelona führte Fangio eine meisterhafte kraftstoffsparende Strategie im Mercedes W196 aus, sparte Kraftstoff während er Geschwindigkeit hielt um seinen 2. Titel zu gewinnen.",
        nl: "Bij de Spaanse GP van 1954 in Barcelona voerde Fangio een meesterlijke brandstofbesparende strategie uit in de Mercedes W196, spaarde brandstof terwijl hij snelheid behield om zijn 2e titel te winnen."
      }
    },
    {
      question: {
        en: "At which 1956 race did Stirling Moss win to give Maserati the Constructors' Championship despite not winning the Drivers' title?",
        es: "¿En qué carrera de 1956 ganó Stirling Moss para dar a Maserati el Campeonato de Constructores a pesar de no ganar el título de Pilotos?",
        de: "Bei welchem Rennen 1956 gewann Stirling Moss um Maserati die Konstrukteurs-Meisterschaft zu geben trotz nicht gewonnener Fahrer-Meisterschaft?",
        nl: "Bij welke race van 1956 won Stirling Moss om Maserati het Constructeurskampioenschap te geven ondanks het niet winnen van de Rijderstitel?"
      },
      options: [
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Stirling Moss won the 1957 Italian GP for Maserati, giving them their only Constructors' title. Moss never won a Drivers' Championship despite 16 wins.",
        es: "Stirling Moss ganó el GP de Italia de 1957 para Maserati, dándoles su único título de Constructores. Moss nunca ganó un Campeonato de Pilotos a pesar de 16 victorias.",
        de: "Stirling Moss gewann den Italien GP 1957 für Maserati und gab ihnen ihren einzigen Konstrukteurs-Titel. Moss gewann nie eine Fahrer-Meisterschaft trotz 16 Siegen.",
        nl: "Stirling Moss won de Italiaanse GP van 1957 voor Maserati, gaf hen hun enige Constructeurstitel. Moss won nooit een Rijderskampioenschap ondanks 16 overwinningen."
      }
    },
    {
      question: {
        en: "Which 1968 race saw Jacky Ickx win in horrific conditions to prevent Jackie Stewart from clinching the championship early?",
        es: "¿Qué carrera de 1968 vio a Jacky Ickx ganar en condiciones horribles para evitar que Jackie Stewart asegurara el campeonato temprano?",
        de: "Welches Rennen 1968 sah Jacky Ickx unter schrecklichen Bedingungen gewinnen um zu verhindern dass Jackie Stewart die Meisterschaft früh sichert?",
        nl: "Welke race van 1968 zag Jacky Ickx winnen in verschrikkelijke omstandigheden om te voorkomen dat Jackie Stewart het kampioenschap vroeg veiligstelde?"
      },
      options: [
        "French Grand Prix",
        "Belgian Grand Prix",
        "German Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jacky Ickx won the rain-shortened 1968 French GP at Rouen in thick fog, delaying Stewart's championship which he clinched at the next race in Britain.",
        es: "Jacky Ickx ganó el GP de Francia de 1968 acortado por lluvia en Rouen en niebla espesa, retrasando el campeonato de Stewart que aseguró en la siguiente carrera en Gran Bretaña.",
        de: "Jacky Ickx gewann den regen-verkürzten Frankreich GP 1968 in Rouen im dichten Nebel, verzögerte Stewarts Meisterschaft die er beim nächsten Rennen in Großbritannien sicherte.",
        nl: "Jacky Ickx won de door regen verkorte Franse GP van 1968 in Rouen in dichte mist, vertraagde Stewart's kampioenschap dat hij bij de volgende race in Groot-Brittannië veiligstelde."
      }
    },
    {
      question: {
        en: "At which 1961 race did Phil Hill win the championship in tragic circumstances after his teammate von Trips was killed?",
        es: "¿En qué carrera de 1961 Phil Hill ganó el campeonato en circunstancias trágicas después de que su compañero von Trips muriera?",
        de: "Bei welchem Rennen 1961 gewann Phil Hill die Meisterschaft unter tragischen Umständen nachdem sein Teamkollege von Trips getötet wurde?",
        nl: "Bij welke race van 1961 won Phil Hill het kampioenschap in tragische omstandigheden nadat zijn teamgenoot von Trips werd gedood?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "Monaco Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "At the 1961 Italian GP, Wolfgang von Trips crashed fatally at Monza while battling for the championship. Phil Hill won the race and title but celebrations were muted.",
        es: "En el GP de Italia de 1961, Wolfgang von Trips se estrelló fatalmente en Monza mientras luchaba por el campeonato. Phil Hill ganó la carrera y el título pero las celebraciones fueron apagadas.",
        de: "Beim Italien GP 1961 verunglückte Wolfgang von Trips tödlich in Monza während er um die Meisterschaft kämpfte. Phil Hill gewann Rennen und Titel aber Feiern waren gedämpft.",
        nl: "Bij de Italiaanse GP van 1961 crashte Wolfgang von Trips fataal in Monza terwijl hij vocht om het kampioenschap. Phil Hill won de race en titel maar vieringen waren ingetogen."
      }
    },
    {
      question: {
        en: "Which 1967 race saw Denny Hulme clinch the championship for Brabham after Jack Brabham's late-season mechanical failures?",
        es: "¿Qué carrera de 1967 vio a Denny Hulme asegurar el campeonato para Brabham después de las fallas mecánicas de Jack Brabham al final de la temporada?",
        de: "Welches Rennen 1967 sah Denny Hulme die Meisterschaft für Brabham sichern nach Jack Brabhams mechanischen Ausfällen am Saisonende?",
        nl: "Welke race van 1967 zag Denny Hulme het kampioenschap voor Brabham veiligstellen na Jack Brabham's mechanische problemen laat in het seizoen?"
      },
      options: [
        "United States Grand Prix",
        "Mexican Grand Prix",
        "Italian Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Denny Hulme clinched the 1967 championship at the Mexican GP finale after teammate Jack Brabham suffered multiple mechanical failures late in the season, Hulme won by 5 points.",
        es: "Denny Hulme aseguró el campeonato de 1967 en la final del GP de México después de que su compañero Jack Brabham sufriera múltiples fallas mecánicas al final de la temporada, Hulme ganó por 5 puntos.",
        de: "Denny Hulme sicherte die Meisterschaft 1967 beim Mexiko GP Finale nachdem Teamkollege Jack Brabham mehrere mechanische Ausfälle am Saisonende erlitt, Hulme gewann mit 5 Punkten.",
        nl: "Denny Hulme stelde het kampioenschap van 1967 veilig bij de Mexicaanse GP finale nadat teamgenoot Jack Brabham meerdere mechanische problemen laat in het seizoen kreeg, Hulme won met 5 punten."
      }
    },
    {
      question: {
        en: "At which 1969 race did Jackie Stewart dominate in the wet to win by over a lap and secure his first championship?",
        es: "¿En qué carrera de 1969 Jackie Stewart dominó en mojado para ganar por más de una vuelta y asegurar su primer campeonato?",
        de: "Bei welchem Rennen 1969 dominierte Jackie Stewart im Regen um mit über einer Runde Vorsprung zu gewinnen und seine erste Meisterschaft zu sichern?",
        nl: "Bij welke race van 1969 domineerde Jackie Stewart in het natte om met meer dan een ronde te winnen en zijn eerste kampioenschap veilig te stellen?"
      },
      options: [
        "German Grand Prix",
        "Dutch Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jackie Stewart won the 1969 Italian GP at Monza by over a lap in wet conditions to clinch his first championship for Matra, dominating with 6 wins that season.",
        es: "Jackie Stewart ganó el GP de Italia de 1969 en Monza por más de una vuelta en condiciones húmedas para asegurar su primer campeonato para Matra, dominando con 6 victorias esa temporada.",
        de: "Jackie Stewart gewann den Italien GP 1969 in Monza mit über einer Runde Vorsprung bei nassen Bedingungen um seine erste Meisterschaft für Matra zu sichern, dominierte mit 6 Siegen diese Saison.",
        nl: "Jackie Stewart won de Italiaanse GP van 1969 in Monza met meer dan een ronde voorsprong in natte omstandigheden om zijn eerste kampioenschap voor Matra veilig te stellen, domineerde met 6 overwinningen dat seizoen."
      }
    },
    {
      question: {
        en: "Which 1975 race saw Niki Lauda clinch his first championship for Ferrari after dominating the season?",
        es: "¿Qué carrera de 1975 vio a Niki Lauda asegurar su primer campeonato para Ferrari después de dominar la temporada?",
        de: "Welches Rennen 1975 sah Niki Lauda seine erste Meisterschaft für Ferrari sichern nach Dominanz der Saison?",
        nl: "Welke race van 1975 zag Niki Lauda zijn eerste kampioenschap voor Ferrari veiligstellen na dominantie van het seizoen?"
      },
      options: [
        "Italian Grand Prix",
        "United States Grand Prix",
        "German Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Niki Lauda finished 3rd at the 1975 United States GP at Watkins Glen to clinch his first championship for Ferrari, winning 5 races in his breakthrough season.",
        es: "Niki Lauda terminó 3º en el GP de Estados Unidos de 1975 en Watkins Glen para asegurar su primer campeonato para Ferrari, ganando 5 carreras en su temporada de ruptura.",
        de: "Niki Lauda wurde beim US GP 1975 in Watkins Glen Dritter um seine erste Meisterschaft für Ferrari zu sichern, gewann 5 Rennen in seiner Durchbruch-Saison.",
        nl: "Niki Lauda eindigde als 3e in de US GP van 1975 op Watkins Glen om zijn eerste kampioenschap voor Ferrari veilig te stellen, won 5 races in zijn doorbraakseizoen."
      }
    },
    {
      question: {
        en: "At which 1977 race did Niki Lauda clinch his second championship after recovering from his near-fatal 1976 crash?",
        es: "¿En qué carrera de 1977 Niki Lauda aseguró su segundo campeonato después de recuperarse de su casi fatal accidente de 1976?",
        de: "Bei welchem Rennen 1977 sicherte Niki Lauda seine zweite Meisterschaft nach Erholung von seinem fast tödlichen Unfall 1976?",
        nl: "Bij welke race van 1977 stelde Niki Lauda zijn tweede kampioenschap veilig na herstel van zijn bijna fatale crash van 1976?"
      },
      options: [
        "United States Grand Prix",
        "Italian Grand Prix",
        "German Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Niki Lauda finished 4th at the 1977 United States GP to clinch his 2nd championship for Ferrari, an incredible comeback just 15 months after his fiery Nürburgring crash.",
        es: "Niki Lauda terminó 4º en el GP de Estados Unidos de 1977 para asegurar su 2º campeonato para Ferrari, un increíble regreso solo 15 meses después de su accidente con fuego en Nürburgring.",
        de: "Niki Lauda wurde beim US GP 1977 Vierter um seine 2. Meisterschaft für Ferrari zu sichern, ein unglaubliches Comeback nur 15 Monate nach seinem Feuerunfall am Nürburgring.",
        nl: "Niki Lauda eindigde als 4e in de US GP van 1977 om zijn 2e kampioenschap voor Ferrari veilig te stellen, een ongelooflijke comeback slechts 15 maanden na zijn brandende Nürburgring crash."
      }
    },
    {
      question: {
        en: "Which 1980 race saw Alan Jones win the championship for Williams after dominating with the ground-effect FW07?",
        es: "¿Qué carrera de 1980 vio a Alan Jones ganar el campeonato para Williams después de dominar con el FW07 de efecto suelo?",
        de: "Welches Rennen 1980 sah Alan Jones die Meisterschaft für Williams gewinnen nach Dominanz mit dem Ground-Effect FW07?",
        nl: "Welke race van 1980 zag Alan Jones het kampioenschap voor Williams winnen na dominantie met de ground-effect FW07?"
      },
      options: [
        "Canadian Grand Prix",
        "British Grand Prix",
        "Monaco Grand Prix",
        "United States Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Alan Jones won the 1980 Canadian GP to clinch Williams' first Drivers' Championship, dominating the season with 5 wins in the revolutionary ground-effect FW07.",
        es: "Alan Jones ganó el GP de Canadá de 1980 para asegurar el primer Campeonato de Pilotos de Williams, dominando la temporada con 5 victorias en el revolucionario FW07 de efecto suelo.",
        de: "Alan Jones gewann den Kanada GP 1980 um Williams' erste Fahrermeisterschaft zu sichern, dominierte die Saison mit 5 Siegen im revolutionären Ground-Effect FW07.",
        nl: "Alan Jones won de Canadese GP van 1980 om Williams' eerste Rijderskampioenschap veilig te stellen, domineerde het seizoen met 5 overwinningen in de revolutionaire ground-effect FW07."
      }
    },
    {
      question: {
        en: "At which 1984 race did Niki Lauda win his third championship by just half a point in the closest title fight ever?",
        es: "¿En qué carrera de 1984 Niki Lauda ganó su tercer campeonato por solo medio punto en la lucha de títulos más cerrada de la historia?",
        de: "Bei welchem Rennen 1984 gewann Niki Lauda seine dritte Meisterschaft mit nur einem halben Punkt im knappsten Titelkampf aller Zeiten?",
        nl: "Bij welke race van 1984 won Niki Lauda zijn derde kampioenschap met slechts een half punt in het nauwste titelgevecht ooit?"
      },
      options: [
        "European Grand Prix",
        "Portuguese Grand Prix",
        "Italian Grand Prix",
        "South African Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Niki Lauda finished 2nd at the 1984 Portuguese GP to beat McLaren teammate Prost by 0.5 points, the narrowest championship margin in F1 history.",
        es: "Niki Lauda terminó 2º en el GP de Portugal de 1984 para vencer a su compañero de McLaren Prost por 0.5 puntos, el margen de campeonato más estrecho en la historia de F1.",
        de: "Niki Lauda wurde beim Portugal GP 1984 Zweiter um McLaren-Teamkollege Prost mit 0,5 Punkten zu schlagen, die knappste Meisterschaftsspanne in der F1-Geschichte.",
        nl: "Niki Lauda eindigde als 2e in de Portugese GP van 1984 om McLaren-teamgenoot Prost met 0,5 punten te verslaan, de kleinste kampioenschapsmarge in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "Which 1988 race did Alain Prost win after Ayrton Senna's famous Monaco crash while dominating?",
        es: "¿Qué carrera de 1988 ganó Alain Prost después del famoso accidente de Ayrton Senna en Mónaco mientras dominaba?",
        de: "Welches Rennen 1988 gewann Alain Prost nach Ayrton Sennas berühmtem Monaco-Crash während er dominierte?",
        nl: "Welke race van 1988 won Alain Prost na Ayrton Senna's beroemde Monaco crash terwijl hij domineerde?"
      },
      options: [
        "Monaco Grand Prix",
        "Belgian Grand Prix",
        "Portuguese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Prost won the 1988 Monaco GP after Senna crashed at Portier while leading by 50 seconds, one of Senna's most painful defeats on his way to his first championship.",
        es: "Prost ganó el GP de Mónaco de 1988 después de que Senna se estrellara en Portier mientras lideraba por 50 segundos, una de las derrotas más dolorosas de Senna en camino a su primer campeonato.",
        de: "Prost gewann den Monaco GP 1988 nachdem Senna in Portier crashte während er mit 50 Sekunden führte, eine von Sennas schmerzhaftesten Niederlagen auf dem Weg zu seiner ersten Meisterschaft.",
        nl: "Prost won de GP van Monaco 1988 nadat Senna crashte bij Portier terwijl hij met 50 seconden leidde, een van Senna's pijnlijkste nederlagen op weg naar zijn eerste kampioenschap."
      }
    },
    {
      question: {
        en: "At which 1993 race did Alain Prost clinch his fourth and final championship before retiring?",
        es: "¿En qué carrera de 1993 Alain Prost aseguró su cuarto y último campeonato antes de retirarse?",
        de: "Bei welchem Rennen 1993 sicherte Alain Prost seine vierte und letzte Meisterschaft vor dem Rücktritt?",
        nl: "Bij welke race van 1993 stelde Alain Prost zijn vierde en laatste kampioenschap veilig voor zijn pensioen?"
      },
      options: [
        "Portuguese Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix",
        "Hungarian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Alain Prost won the 1993 Portuguese GP to clinch his 4th championship for Williams with 5 races to spare, then retired at season's end with 51 career wins.",
        es: "Alain Prost ganó el GP de Portugal de 1993 para asegurar su 4º campeonato para Williams faltando 5 carreras, luego se retiró al final de la temporada con 51 victorias de carrera.",
        de: "Alain Prost gewann den Portugal GP 1993 um seine 4. Meisterschaft für Williams mit 5 Rennen Vorsprung zu sichern, zog sich dann am Saisonende mit 51 Karrieresiegen zurück.",
        nl: "Alain Prost won de Portugese GP van 1993 om zijn 4e kampioenschap voor Williams veilig te stellen met 5 races te gaan, stopte toen aan het einde van het seizoen met 51 carrière-overwinningen."
      }
    },
    {
      question: {
        en: "Which 1996 race saw Damon Hill clinch the championship 22 years after his father Graham won his second title?",
        es: "¿Qué carrera de 1996 vio a Damon Hill asegurar el campeonato 22 años después de que su padre Graham ganara su segundo título?",
        de: "Welches Rennen 1996 sah Damon Hill die Meisterschaft sichern 22 Jahre nachdem sein Vater Graham seinen zweiten Titel gewann?",
        nl: "Welke race van 1996 zag Damon Hill het kampioenschap veiligstellen 22 jaar nadat zijn vader Graham zijn tweede titel won?"
      },
      options: [
        "Japanese Grand Prix",
        "Portuguese Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Damon Hill won the 1996 Japanese GP at Suzuka to clinch the championship for Williams, becoming the first son of a World Champion to win the title himself.",
        es: "Damon Hill ganó el GP de Japón de 1996 en Suzuka para asegurar el campeonato para Williams, convirtiéndose en el primer hijo de un Campeón Mundial en ganar el título él mismo.",
        de: "Damon Hill gewann den Japan GP 1996 in Suzuka um die Meisterschaft für Williams zu sichern, wurde der erste Sohn eines Weltmeisters der selbst den Titel gewann.",
        nl: "Damon Hill won de Japanse GP van 1996 in Suzuka om het kampioenschap voor Williams veilig te stellen, werd de eerste zoon van een Wereldkampioen die zelf de titel won."
      }
    },
    {
      question: {
        en: "At which 1999 race did Mika Häkkinen win his second consecutive championship for McLaren-Mercedes?",
        es: "¿En qué carrera de 1999 Mika Häkkinen ganó su segundo campeonato consecutivo para McLaren-Mercedes?",
        de: "Bei welchem Rennen 1999 gewann Mika Häkkinen seine zweite aufeinanderfolgende Meisterschaft für McLaren-Mercedes?",
        nl: "Bij welke race van 1999 won Mika Häkkinen zijn tweede opeenvolgende kampioenschap voor McLaren-Mercedes?"
      },
      options: [
        "Malaysian Grand Prix",
        "Japanese Grand Prix",
        "European Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Mika Häkkinen won the 1999 Japanese GP finale to beat Eddie Irvine by 2 points for his 2nd consecutive championship, after Schumacher's mid-season injury helped Irvine's challenge.",
        es: "Mika Häkkinen ganó la final del GP de Japón de 1999 para vencer a Eddie Irvine por 2 puntos para su 2º campeonato consecutivo, después de que la lesión de Schumacher a mitad de temporada ayudara al desafío de Irvine.",
        de: "Mika Häkkinen gewann das Japan GP Finale 1999 um Eddie Irvine mit 2 Punkten für seine 2. aufeinanderfolgende Meisterschaft zu schlagen, nachdem Schumachers Verletzung Mitte der Saison Irvines Herausforderung half.",
        nl: "Mika Häkkinen won de Japanse GP finale van 1999 om Eddie Irvine met 2 punten te verslaan voor zijn 2e opeenvolgende kampioenschap, nadat Schumacher's mid-season blessure Irvine's uitdaging hielp."
      }
    },
    {
      question: {
        en: "Which 2001 race saw Michael Schumacher equal Alain Prost's record of 4 World Championships?",
        es: "¿Qué carrera de 2001 vio a Michael Schumacher igualar el récord de Alain Prost de 4 Campeonatos Mundiales?",
        de: "Welches Rennen 2001 sah Michael Schumacher Alain Prosts Rekord von 4 Weltmeisterschaften egalisieren?",
        nl: "Welke race van 2001 zag Michael Schumacher Alain Prost's record van 4 Wereldkampioenschappen evenaren?"
      },
      options: [
        "Belgian Grand Prix",
        "Hungarian Grand Prix",
        "Italian Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won the 2001 Hungarian GP to clinch his 4th championship for Ferrari with 4 races remaining, equaling Prost's record before breaking it in 2002.",
        es: "Michael Schumacher ganó el GP de Hungría de 2001 para asegurar su 4º campeonato para Ferrari faltando 4 carreras, igualando el récord de Prost antes de romperlo en 2002.",
        de: "Michael Schumacher gewann den Ungarn GP 2001 um seine 4. Meisterschaft für Ferrari mit 4 verbleibenden Rennen zu sichern, egalisierte Prosts Rekord bevor er ihn 2002 brach.",
        nl: "Michael Schumacher won de Hongaarse GP van 2001 om zijn 4e kampioenschap voor Ferrari veilig te stellen met 4 races te gaan, evenaarde Prost's record voordat hij het in 2002 brak."
      }
    },
    {
      question: {
        en: "At which 2002 race did Michael Schumacher clinch his record-breaking fifth championship with 6 races remaining?",
        es: "¿En qué carrera de 2002 Michael Schumacher aseguró su récord de quinto campeonato faltando 6 carreras?",
        de: "Bei welchem Rennen 2002 sicherte Michael Schumacher seine rekordverdächtige fünfte Meisterschaft mit 6 verbleibenden Rennen?",
        nl: "Bij welke race van 2002 stelde Michael Schumacher zijn recordbrekende vijfde kampioenschap veilig met 6 races te gaan?"
      },
      options: [
        "French Grand Prix",
        "British Grand Prix",
        "German Grand Prix",
        "Hungarian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher won the 2002 French GP to clinch his record 5th championship for Ferrari with 6 races to spare, breaking Fangio's 46-year-old record.",
        es: "Michael Schumacher ganó el GP de Francia de 2002 para asegurar su récord de 5º campeonato para Ferrari faltando 6 carreras, rompiendo el récord de 46 años de Fangio.",
        de: "Michael Schumacher gewann den Frankreich GP 2002 um seine Rekord-5. Meisterschaft für Ferrari mit 6 Rennen Vorsprung zu sichern, brach Fangios 46 Jahre alten Rekord.",
        nl: "Michael Schumacher won de Franse GP van 2002 om zijn record 5e kampioenschap voor Ferrari veilig te stellen met 6 races te gaan, brak Fangio's 46 jaar oude record."
      }
    },
    {
      question: {
        en: "Which 2004 race saw Michael Schumacher break Fangio's 46-year-old championship record by winning his seventh title?",
        es: "¿Qué carrera de 2004 vio a Michael Schumacher romper el récord de campeonato de 46 años de Fangio al ganar su séptimo título?",
        de: "Welches Rennen 2004 sah Michael Schumacher Fangios 46 Jahre alten Meisterschaftsrekord brechen durch Gewinn seines siebten Titels?",
        nl: "Welke race van 2004 zag Michael Schumacher Fangio's 46 jaar oude kampioenschapsrecord breken door zijn zevende titel te winnen?"
      },
      options: [
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "Hungarian Grand Prix",
        "Turkish Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won the 2004 Belgian GP to clinch his record 7th championship for Ferrari, surpassing Fangio's legendary 5 titles that stood since 1957.",
        es: "Michael Schumacher ganó el GP de Bélgica de 2004 para asegurar su récord de 7º campeonato para Ferrari, superando los legendarios 5 títulos de Fangio que se mantuvieron desde 1957.",
        de: "Michael Schumacher gewann den Belgien GP 2004 um seine Rekord-7. Meisterschaft für Ferrari zu sichern, übertraf Fangios legendäre 5 Titel die seit 1957 bestanden.",
        nl: "Michael Schumacher won de Belgische GP van 2004 om zijn record 7e kampioenschap voor Ferrari veilig te stellen, overtrof Fangio's legendarische 5 titels die sinds 1957 stonden."
      }
    },
    {
      question: {
        en: "At which 2006 race did Fernando Alonso clinch his second consecutive championship for Renault?",
        es: "¿En qué carrera de 2006 Fernando Alonso aseguró su segundo campeonato consecutivo para Renault?",
        de: "Bei welchem Rennen 2006 sicherte Fernando Alonso seine zweite aufeinanderfolgende Meisterschaft für Renault?",
        nl: "Bij welke race van 2006 stelde Fernando Alonso zijn tweede opeenvolgende kampioenschap voor Renault veilig?"
      },
      options: [
        "Japanese Grand Prix",
        "Chinese Grand Prix",
        "Brazilian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso finished 2nd at the 2006 Chinese GP to clinch his 2nd consecutive championship for Renault, beating Schumacher in the German's final season with Ferrari.",
        es: "Fernando Alonso terminó 2º en el GP de China de 2006 para asegurar su 2º campeonato consecutivo para Renault, venciendo a Schumacher en la última temporada del alemán con Ferrari.",
        de: "Fernando Alonso wurde beim China GP 2006 Zweiter um seine 2. aufeinanderfolgende Meisterschaft für Renault zu sichern, schlug Schumacher in dessen letzter Saison mit Ferrari.",
        nl: "Fernando Alonso eindigde als 2e in de Chinese GP van 2006 om zijn 2e opeenvolgende kampioenschap voor Renault veilig te stellen, versloeg Schumacher in de Duitser's laatste seizoen met Ferrari."
      }
    },
    {
      question: {
        en: "Which 2009 race saw Jenson Button clinch the championship for Brawn GP in their miracle season?",
        es: "¿Qué carrera de 2009 vio a Jenson Button asegurar el campeonato para Brawn GP en su temporada milagrosa?",
        de: "Welches Rennen 2009 sah Jenson Button die Meisterschaft für Brawn GP in ihrer Wunder-Saison sichern?",
        nl: "Welke race van 2009 zag Jenson Button het kampioenschap voor Brawn GP veiligstellen in hun wonder seizoen?"
      },
      options: [
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Italian Grand Prix",
        "Abu Dhabi Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jenson Button won the 2009 Brazilian GP to clinch the championship for Brawn GP, the team formed from Honda's ashes winning both titles in their only season.",
        es: "Jenson Button ganó el GP de Brasil de 2009 para asegurar el campeonato para Brawn GP, el equipo formado de las cenizas de Honda ganando ambos títulos en su única temporada.",
        de: "Jenson Button gewann den Brasilien GP 2009 um die Meisterschaft für Brawn GP zu sichern, das Team aus Hondas Asche gewann beide Titel in ihrer einzigen Saison.",
        nl: "Jenson Button won de Braziliaanse GP van 2009 om het kampioenschap voor Brawn GP veilig te stellen, het team gevormd uit Honda's as won beide titels in hun enige seizoen."
      }
    },
    {
      question: {
        en: "At which 2011 race did Sebastian Vettel clinch his second consecutive championship for Red Bull?",
        es: "¿En qué carrera de 2011 Sebastian Vettel aseguró su segundo campeonato consecutivo para Red Bull?",
        de: "Bei welchem Rennen 2011 sicherte Sebastian Vettel seine zweite aufeinanderfolgende Meisterschaft für Red Bull?",
        nl: "Bij welke race van 2011 stelde Sebastian Vettel zijn tweede opeenvolgende kampioenschap voor Red Bull veilig?"
      },
      options: [
        "Japanese Grand Prix",
        "Korean Grand Prix",
        "Singapore Grand Prix",
        "Indian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel won the 2011 Japanese GP to clinch his 2nd consecutive championship for Red Bull with 4 races remaining, dominating with 11 wins that season.",
        es: "Sebastian Vettel ganó el GP de Japón de 2011 para asegurar su 2º campeonato consecutivo para Red Bull faltando 4 carreras, dominando con 11 victorias esa temporada.",
        de: "Sebastian Vettel gewann den Japan GP 2011 um seine 2. aufeinanderfolgende Meisterschaft für Red Bull mit 4 verbleibenden Rennen zu sichern, dominierte mit 11 Siegen diese Saison.",
        nl: "Sebastian Vettel won de Japanse GP van 2011 om zijn 2e opeenvolgende kampioenschap voor Red Bull veilig te stellen met 4 races te gaan, domineerde met 11 overwinningen dat seizoen."
      }
    },
    {
      question: {
        en: "Which 2014 race saw Lewis Hamilton clinch his second championship after an intense battle with Nico Rosberg?",
        es: "¿Qué carrera de 2014 vio a Lewis Hamilton asegurar su segundo campeonato después de una intensa batalla con Nico Rosberg?",
        de: "Welches Rennen 2014 sah Lewis Hamilton seine zweite Meisterschaft sichern nach intensivem Kampf mit Nico Rosberg?",
        nl: "Welke race van 2014 zag Lewis Hamilton zijn tweede kampioenschap veiligstellen na een intense strijd met Nico Rosberg?"
      },
      options: [
        "Brazilian Grand Prix",
        "Abu Dhabi Grand Prix",
        "Russian Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton won the 2014 Abu Dhabi GP finale with double points to beat Mercedes teammate Rosberg by 67 points, his 2nd championship after intense rivalry.",
        es: "Lewis Hamilton ganó la final del GP de Abu Dhabi de 2014 con puntos dobles para vencer a su compañero de Mercedes Rosberg por 67 puntos, su 2º campeonato después de intensa rivalidad.",
        de: "Lewis Hamilton gewann das Abu Dhabi GP Finale 2014 mit doppelten Punkten um Mercedes-Teamkollege Rosberg mit 67 Punkten zu schlagen, seine 2. Meisterschaft nach intensiver Rivalität.",
        nl: "Lewis Hamilton won de Abu Dhabi GP finale van 2014 met dubbele punten om Mercedes-teamgenoot Rosberg met 67 punten te verslaan, zijn 2e kampioenschap na intense rivaliteit."
      }
    },
    {
      question: {
        en: "At which 2015 race did Lewis Hamilton clinch his third championship and second consecutive title?",
        es: "¿En qué carrera de 2015 Lewis Hamilton aseguró su tercer campeonato y segundo título consecutivo?",
        de: "Bei welchem Rennen 2015 sicherte Lewis Hamilton seine dritte Meisterschaft und zweiten aufeinanderfolgenden Titel?",
        nl: "Bij welke race van 2015 stelde Lewis Hamilton zijn derde kampioenschap en tweede opeenvolgende titel veilig?"
      },
      options: [
        "Russian Grand Prix",
        "United States Grand Prix",
        "Japanese Grand Prix",
        "Mexican Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton won the 2015 United States GP in Austin to clinch his 3rd championship with 3 races remaining, dominating the hybrid era for Mercedes.",
        es: "Lewis Hamilton ganó el GP de Estados Unidos de 2015 en Austin para asegurar su 3er campeonato faltando 3 carreras, dominando la era híbrida para Mercedes.",
        de: "Lewis Hamilton gewann den US GP 2015 in Austin um seine 3. Meisterschaft mit 3 verbleibenden Rennen zu sichern, dominierte die Hybrid-Ära für Mercedes.",
        nl: "Lewis Hamilton won de US GP van 2015 in Austin om zijn 3e kampioenschap veilig te stellen met 3 races te gaan, domineerde het hybride tijdperk voor Mercedes."
      }
    },
    {
      question: {
        en: "Which 2017 race saw Lewis Hamilton equal Fangio's record of 5 World Championships?",
        es: "¿Qué carrera de 2017 vio a Lewis Hamilton igualar el récord de Fangio de 5 Campeonatos Mundiales?",
        de: "Welches Rennen 2017 sah Lewis Hamilton Fangios Rekord von 5 Weltmeisterschaften egalisieren?",
        nl: "Welke race van 2017 zag Lewis Hamilton Fangio's record van 5 Wereldkampioenschappen evenaren?"
      },
      options: [
        "United States Grand Prix",
        "Mexican Grand Prix",
        "Japanese Grand Prix",
        "Brazilian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton finished 9th at the 2017 Mexican GP to clinch his 4th championship for Mercedes, then won his 5th in 2018 to equal Fangio's legendary record.",
        es: "Lewis Hamilton terminó 9º en el GP de México de 2017 para asegurar su 4º campeonato para Mercedes, luego ganó su 5º en 2018 para igualar el legendario récord de Fangio.",
        de: "Lewis Hamilton wurde beim Mexiko GP 2017 Neunter um seine 4. Meisterschaft für Mercedes zu sichern, gewann dann 2018 seine 5. um Fangios legendären Rekord zu egalisieren.",
        nl: "Lewis Hamilton eindigde als 9e in de Mexicaanse GP van 2017 om zijn 4e kampioenschap voor Mercedes veilig te stellen, won toen zijn 5e in 2018 om Fangio's legendarische record te evenaren."
      }
    },
    {
      question: {
        en: "At which 2018 race did Lewis Hamilton clinch his fifth championship to equal Fangio's record?",
        es: "¿En qué carrera de 2018 Lewis Hamilton aseguró su quinto campeonato para igualar el récord de Fangio?",
        de: "Bei welchem Rennen 2018 sicherte Lewis Hamilton seine fünfte Meisterschaft um Fangios Rekord zu egalisieren?",
        nl: "Bij welke race van 2018 stelde Lewis Hamilton zijn vijfde kampioenschap veilig om Fangio's record te evenaren?"
      },
      options: [
        "United States Grand Prix",
        "Mexican Grand Prix",
        "Brazilian Grand Prix",
        "Abu Dhabi Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton finished 4th at the 2018 Mexican GP to clinch his 5th championship for Mercedes, equaling Fangio's legendary record of 5 titles.",
        es: "Lewis Hamilton terminó 4º en el GP de México de 2018 para asegurar su 5º campeonato para Mercedes, igualando el legendario récord de Fangio de 5 títulos.",
        de: "Lewis Hamilton wurde beim Mexiko GP 2018 Vierter um seine 5. Meisterschaft für Mercedes zu sichern und egalisierte Fangios legendären Rekord von 5 Titeln.",
        nl: "Lewis Hamilton eindigde als 4e in de Mexicaanse GP van 2018 om zijn 5e kampioenschap voor Mercedes veilig te stellen, evenaarde Fangio's legendarische record van 5 titels."
      }
    },
    {
      question: {
        en: "Which 2019 race saw Lewis Hamilton clinch his sixth championship, moving past Fangio?",
        es: "¿Qué carrera de 2019 vio a Lewis Hamilton asegurar su sexto campeonato, superando a Fangio?",
        de: "Welches Rennen 2019 sah Lewis Hamilton seine sechste Meisterschaft sichern und Fangio übertreffen?",
        nl: "Welke race van 2019 zag Lewis Hamilton zijn zesde kampioenschap veiligstellen, Fangio voorbijgaand?"
      },
      options: [
        "United States Grand Prix",
        "Mexican Grand Prix",
        "Brazilian Grand Prix",
        "Abu Dhabi Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton finished 2nd at the 2019 United States GP to clinch his 6th championship for Mercedes, surpassing Fangio and trailing only Schumacher's 7 titles.",
        es: "Lewis Hamilton terminó 2º en el GP de Estados Unidos de 2019 para asegurar su 6º campeonato para Mercedes, superando a Fangio y solo detrás de los 7 títulos de Schumacher.",
        de: "Lewis Hamilton wurde beim US GP 2019 Zweiter um seine 6. Meisterschaft für Mercedes zu sichern, übertraf Fangio und lag nur hinter Schumachers 7 Titeln.",
        nl: "Lewis Hamilton eindigde als 2e in de US GP van 2019 om zijn 6e kampioenschap voor Mercedes veilig te stellen, ging Fangio voorbij en volgde alleen Schumacher's 7 titels."
      }
    },
    {
      question: {
        en: "At which 2020 race did Lewis Hamilton equal Michael Schumacher's record of 7 World Championships?",
        es: "¿En qué carrera de 2020 Lewis Hamilton igualó el récord de Michael Schumacher de 7 Campeonatos Mundiales?",
        de: "Bei welchem Rennen 2020 egalisierte Lewis Hamilton Michael Schumachers Rekord von 7 Weltmeisterschaften?",
        nl: "Bij welke race van 2020 evenaarde Lewis Hamilton Michael Schumacher's record van 7 Wereldkampioenschappen?"
      },
      options: [
        "Portuguese Grand Prix",
        "Turkish Grand Prix",
        "Emilia Romagna Grand Prix",
        "Bahrain Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton won the 2020 Turkish GP to clinch his record-equaling 7th championship for Mercedes, matching Schumacher's all-time record with 3 races remaining.",
        es: "Lewis Hamilton ganó el GP de Turquía de 2020 para asegurar su 7º campeonato que iguala el récord para Mercedes, igualando el récord histórico de Schumacher faltando 3 carreras.",
        de: "Lewis Hamilton gewann den Türkei GP 2020 um seine rekordgleichende 7. Meisterschaft für Mercedes zu sichern, egalisierte Schumachers Allzeitrekord mit 3 verbleibenden Rennen.",
        nl: "Lewis Hamilton won de Turkse GP van 2020 om zijn recordevenerende 7e kampioenschap voor Mercedes veilig te stellen, evenaarde Schumacher's all-time record met 3 races te gaan."
      }
    },
    {
      question: {
        en: "Which 2022 race did Max Verstappen clinch his second consecutive championship with dominant performance?",
        es: "¿Qué carrera de 2022 Max Verstappen aseguró su segundo campeonato consecutivo con actuación dominante?",
        de: "Welches Rennen 2022 sicherte Max Verstappen seine zweite aufeinanderfolgende Meisterschaft mit dominanter Leistung?",
        nl: "Welke race van 2022 stelde Max Verstappen zijn tweede opeenvolgende kampioenschap veilig met dominante prestatie?"
      },
      options: [
        "United States Grand Prix",
        "Japanese Grand Prix",
        "Singapore Grand Prix",
        "Mexican Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won the 2022 Japanese GP to clinch his 2nd consecutive championship with 4 races remaining, dominating the season with 12 wins for Red Bull.",
        es: "Max Verstappen ganó el GP de Japón de 2022 para asegurar su 2º campeonato consecutivo faltando 4 carreras, dominando la temporada con 12 victorias para Red Bull.",
        de: "Max Verstappen gewann den Japan GP 2022 um seine 2. aufeinanderfolgende Meisterschaft mit 4 verbleibenden Rennen zu sichern, dominierte die Saison mit 12 Siegen für Red Bull.",
        nl: "Max Verstappen won de Japanse GP van 2022 om zijn 2e opeenvolgende kampioenschap veilig te stellen met 4 races te gaan, domineerde het seizoen met 12 overwinningen voor Red Bull."
      }
    },
    {
      question: {
        en: "At which 2023 race did Max Verstappen clinch his third consecutive championship after record-breaking dominance?",
        es: "¿En qué carrera de 2023 Max Verstappen aseguró su tercer campeonato consecutivo después de una dominancia récord?",
        de: "Bei welchem Rennen 2023 sicherte Max Verstappen seine dritte aufeinanderfolgende Meisterschaft nach rekordverdächtiger Dominanz?",
        nl: "Bij welke race van 2023 stelde Max Verstappen zijn derde opeenvolgende kampioenschap veilig na recordbrekende dominantie?"
      },
      options: [
        "Japanese Grand Prix",
        "Qatar Grand Prix",
        "Singapore Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won the 2023 Qatar GP Sprint to clinch his 3rd consecutive championship with 6 races remaining, after winning 15 races and dominating the season for Red Bull.",
        es: "Max Verstappen ganó la Sprint del GP de Catar de 2023 para asegurar su 3er campeonato consecutivo faltando 6 carreras, después de ganar 15 carreras y dominar la temporada para Red Bull.",
        de: "Max Verstappen gewann den Katar GP Sprint 2023 um seine 3. aufeinanderfolgende Meisterschaft mit 6 verbleibenden Rennen zu sichern, nach 15 Rennsiegen und Dominanz der Saison für Red Bull.",
        nl: "Max Verstappen won de Qatar GP Sprint van 2023 om zijn 3e opeenvolgende kampioenschap veilig te stellen met 6 races te gaan, na het winnen van 15 races en dominantie van het seizoen voor Red Bull."
      }
    },
    {
      question: {
        en: "Which 1971 race saw Jackie Stewart win despite suffering from a stomach ulcer that nearly cost him his life?",
        es: "¿Qué carrera de 1971 vio a Jackie Stewart ganar a pesar de sufrir de una úlcera estomacal que casi le cuesta la vida?",
        de: "Welches Rennen 1971 sah Jackie Stewart gewinnen trotz eines Magengeschwürs das ihn fast das Leben kostete?",
        nl: "Welke race van 1971 zag Jackie Stewart winnen ondanks lijden aan een maagzweer die hem bijna het leven kostte?"
      },
      options: [
        "Monaco Grand Prix",
        "Dutch Grand Prix",
        "German Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jackie Stewart won the 1971 German GP at the Nürburgring despite suffering from a bleeding stomach ulcer, driving through extreme pain in one of his most courageous victories.",
        es: "Jackie Stewart ganó el GP de Alemania de 1971 en el Nürburgring a pesar de sufrir de una úlcera estomacal sangrante, conduciendo a través de dolor extremo en una de sus victorias más valientes.",
        de: "Jackie Stewart gewann den Deutschland GP 1971 am Nürburgring trotz eines blutenden Magengeschwürs, fuhr durch extreme Schmerzen in einem seiner mutigsten Siege.",
        nl: "Jackie Stewart won de Duitse GP van 1971 op de Nürburgring ondanks lijden aan een bloedende maagzweer, reed door extreme pijn in een van zijn meest moedige overwinningen."
      }
    },
    {
      question: {
        en: "At which 1965 race did Jim Clark lap the entire field except second place in dominant fashion?",
        es: "¿En qué carrera de 1965 Jim Clark dobló a todo el campo excepto al segundo lugar de forma dominante?",
        de: "Bei welchem Rennen 1965 überrundete Jim Clark das gesamte Feld außer dem Zweiten auf dominante Weise?",
        nl: "Bij welke race van 1965 rondde Jim Clark het hele veld behalve de tweede plaats op dominante wijze?"
      },
      options: [
        "Dutch Grand Prix",
        "Belgian Grand Prix",
        "French Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jim Clark dominated the 1965 Belgian GP at Spa, lapping everyone except 2nd-placed Stewart in the Lotus 33, one of the most dominant performances in F1 history.",
        es: "Jim Clark dominó el GP de Bélgica de 1965 en Spa, doblando a todos excepto a Stewart en 2º lugar en el Lotus 33, una de las actuaciones más dominantes en la historia de F1.",
        de: "Jim Clark dominierte den Belgien GP 1965 in Spa, überrundete alle außer dem Zweiten Stewart im Lotus 33, eine der dominantesten Leistungen in der F1-Geschichte.",
        nl: "Jim Clark domineerde de Belgische GP van 1965 in Spa, rondde iedereen behalve de 2e geplaatste Stewart in de Lotus 33, een van de meest dominante prestaties in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "Which 1953 race saw Alberto Ascari win his second consecutive championship for Ferrari?",
        es: "¿Qué carrera de 1953 vio a Alberto Ascari ganar su segundo campeonato consecutivo para Ferrari?",
        de: "Welches Rennen 1953 sah Alberto Ascari seine zweite aufeinanderfolgende Meisterschaft für Ferrari gewinnen?",
        nl: "Welke race van 1953 zag Alberto Ascari zijn tweede opeenvolgende kampioenschap voor Ferrari winnen?"
      },
      options: [
        "Swiss Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Alberto Ascari won the 1953 Swiss GP to clinch his 2nd consecutive championship for Ferrari, dominating both 1952 and 1953 in the Ferrari 500.",
        es: "Alberto Ascari ganó el GP de Suiza de 1953 para asegurar su 2º campeonato consecutivo para Ferrari, dominando tanto 1952 como 1953 en el Ferrari 500.",
        de: "Alberto Ascari gewann den Schweizer GP 1953 um seine 2. aufeinanderfolgende Meisterschaft für Ferrari zu sichern, dominierte sowohl 1952 als auch 1953 im Ferrari 500.",
        nl: "Alberto Ascari won de Zwitserse GP van 1953 om zijn 2e opeenvolgende kampioenschap voor Ferrari veilig te stellen, domineerde zowel 1952 als 1953 in de Ferrari 500."
      }
    },
    {
      question: {
        en: "At which 1959 race did Jack Brabham push his Cooper across the line to win his first championship?",
        es: "¿En qué carrera de 1959 Jack Brabham empujó su Cooper hasta la línea para ganar su primer campeonato?",
        de: "Bei welchem Rennen 1959 schob Jack Brabham seinen Cooper über die Linie um seine erste Meisterschaft zu gewinnen?",
        nl: "Bij welke race van 1959 duwde Jack Brabham zijn Cooper over de lijn om zijn eerste kampioenschap te winnen?"
      },
      options: [
        "Italian Grand Prix",
        "Portuguese Grand Prix",
        "United States Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jack Brabham's Cooper ran out of fuel at the 1959 US GP finale, he pushed it across the line to finish 4th and win his first championship, an iconic F1 moment.",
        es: "El Cooper de Jack Brabham se quedó sin combustible en la final del GP de EE.UU. de 1959, lo empujó hasta la línea para terminar 4º y ganar su primer campeonato, un momento icónico de F1.",
        de: "Jack Brabhams Cooper ging beim US GP Finale 1959 der Kraftstoff aus, er schob es über die Linie um Vierter zu werden und seine erste Meisterschaft zu gewinnen, ein ikonischer F1-Moment.",
        nl: "Jack Brabham's Cooper had geen brandstof meer bij de US GP finale van 1959, hij duwde het over de lijn om 4e te worden en zijn eerste kampioenschap te winnen, een iconisch F1-moment."
      }
    },
    {
      question: {
        en: "Which 1960 race saw Jack Brabham clinch his second consecutive championship in the revolutionary rear-engine Cooper?",
        es: "¿Qué carrera de 1960 vio a Jack Brabham asegurar su segundo campeonato consecutivo en el revolucionario Cooper de motor trasero?",
        de: "Welches Rennen 1960 sah Jack Brabham seine zweite aufeinanderfolgende Meisterschaft im revolutionären Heckmotor-Cooper sichern?",
        nl: "Welke race van 1960 zag Jack Brabham zijn tweede opeenvolgende kampioenschap veiligstellen in de revolutionaire achtermotorige Cooper?"
      },
      options: [
        "Portuguese Grand Prix",
        "Italian Grand Prix",
        "United States Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jack Brabham won the 1960 Portuguese GP to clinch his 2nd consecutive championship, revolutionizing F1 with Cooper's rear-engine layout that became the standard.",
        es: "Jack Brabham ganó el GP de Portugal de 1960 para asegurar su 2º campeonato consecutivo, revolucionando F1 con el diseño de motor trasero de Cooper que se convirtió en el estándar.",
        de: "Jack Brabham gewann den Portugal GP 1960 um seine 2. aufeinanderfolgende Meisterschaft zu sichern, revolutionierte F1 mit Coopers Heckmotor-Layout das zum Standard wurde.",
        nl: "Jack Brabham won de Portugese GP van 1960 om zijn 2e opeenvolgende kampioenschap veilig te stellen, revolutioneerde F1 met Cooper's achtermotorindeling die de standaard werd."
      }
    },
    {
      question: {
        en: "At which 1966 race did Jack Brabham become the only driver to win a championship in a car bearing his own name?",
        es: "¿En qué carrera de 1966 Jack Brabham se convirtió en el único piloto en ganar un campeonato en un coche que lleva su propio nombre?",
        de: "Bei welchem Rennen 1966 wurde Jack Brabham der einzige Fahrer der eine Meisterschaft in einem Auto mit seinem eigenen Namen gewann?",
        nl: "Bij welke race van 1966 werd Jack Brabham de enige coureur die een kampioenschap won in een auto met zijn eigen naam?"
      },
      options: [
        "Dutch Grand Prix",
        "German Grand Prix",
        "Italian Grand Prix",
        "Mexican Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jack Brabham won the 1966 Dutch GP to clinch his 3rd championship in his own Brabham-Repco, the only driver to win a championship in a car bearing his own name.",
        es: "Jack Brabham ganó el GP de Holanda de 1966 para asegurar su 3er campeonato en su propio Brabham-Repco, el único piloto en ganar un campeonato en un coche que lleva su propio nombre.",
        de: "Jack Brabham gewann den Niederländischen GP 1966 um seine 3. Meisterschaft im eigenen Brabham-Repco zu sichern, der einzige Fahrer der eine Meisterschaft in einem Auto mit eigenem Namen gewann.",
        nl: "Jack Brabham won de Nederlandse GP van 1966 om zijn 3e kampioenschap veilig te stellen in zijn eigen Brabham-Repco, de enige coureur die een kampioenschap won in een auto met zijn eigen naam."
      }
    },
    {
      question: {
        en: "Which 1968 race saw Graham Hill clinch his second championship after teammate Jim Clark's fatal crash earlier that season?",
        es: "¿Qué carrera de 1968 vio a Graham Hill asegurar su segundo campeonato después del accidente fatal de su compañero Jim Clark antes esa temporada?",
        de: "Welches Rennen 1968 sah Graham Hill seine zweite Meisterschaft sichern nach Teamkollege Jim Clarks tödlichem Unfall früher in der Saison?",
        nl: "Welke race van 1968 zag Graham Hill zijn tweede kampioenschap veiligstellen na teamgenoot Jim Clark's fatale crash eerder dat seizoen?"
      },
      options: [
        "Italian Grand Prix",
        "Canadian Grand Prix",
        "Mexican Grand Prix",
        "United States Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Graham Hill won the 1968 Mexican GP to clinch his 2nd championship for Lotus, carrying the team through tragedy after Jim Clark's death at Hockenheim in April.",
        es: "Graham Hill ganó el GP de México de 1968 para asegurar su 2º campeonato para Lotus, llevando al equipo a través de la tragedia después de la muerte de Jim Clark en Hockenheim en abril.",
        de: "Graham Hill gewann den Mexiko GP 1968 um seine 2. Meisterschaft für Lotus zu sichern, führte das Team durch die Tragödie nach Jim Clarks Tod in Hockenheim im April.",
        nl: "Graham Hill won de Mexicaanse GP van 1968 om zijn 2e kampioenschap voor Lotus veilig te stellen, leidde het team door de tragedie na Jim Clark's dood in Hockenheim in april."
      }
    },
    {
      question: {
        en: "At which 1969 race did Jackie Stewart dominate in monsoon conditions to win by over 4 minutes?",
        es: "¿En qué carrera de 1969 Jackie Stewart dominó en condiciones de monzón para ganar por más de 4 minutos?",
        de: "Bei welchem Rennen 1969 dominierte Jackie Stewart unter Monsunbedingungen mit über 4 Minuten Vorsprung?",
        nl: "Bij welke race van 1969 domineerde Jackie Stewart in moessonachtige omstandigheden om met meer dan 4 minuten te winnen?"
      },
      options: [
        "German Grand Prix",
        "Dutch Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jackie Stewart won the 1969 German GP at the Nürburgring by over 4 minutes in torrential rain and fog, lapping all but second place in one of the greatest wet-weather drives ever.",
        es: "Jackie Stewart ganó el GP de Alemania de 1969 en el Nürburgring por más de 4 minutos bajo lluvia torrencial y niebla, doblando a todos excepto al segundo en una de las mejores carreras en mojado jamás vistas.",
        de: "Jackie Stewart gewann den Deutschland GP 1969 am Nürburgring mit über 4 Minuten Vorsprung bei strömendem Regen und Nebel, überrundete alle außer dem Zweiten in einer der besten Regenfahrten aller Zeiten.",
        nl: "Jackie Stewart won de Duitse GP van 1969 op de Nürburgring met meer dan 4 minuten voorsprong in stromende regen en mist, rondde iedereen behalve de tweede in een van de beste regenraces ooit."
      }
    },
    {
      question: {
        en: "Which 1970 race saw Jochen Rindt posthumously crowned F1's only posthumous World Champion?",
        es: "¿Qué carrera de 1970 vio a Jochen Rindt coronado póstumamente como el único Campeón Mundial póstumo de F1?",
        de: "Welches Rennen 1970 sah Jochen Rindt posthum zu F1s einzigem posthumen Weltmeister gekrönt?",
        nl: "Welke race van 1970 zag Jochen Rindt posthum gekroond worden als F1's enige postume Wereldkampioen?"
      },
      options: [
        "United States Grand Prix",
        "Mexican Grand Prix",
        "Canadian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1970 Mexican GP finale confirmed Jochen Rindt as F1's only posthumous champion for Lotus after his fatal crash at Monza in September, no one could catch his points total.",
        es: "La final del GP de México de 1970 confirmó a Jochen Rindt como el único campeón póstumo de F1 para Lotus después de su accidente fatal en Monza en septiembre, nadie pudo alcanzar su total de puntos.",
        de: "Das Mexiko GP Finale 1970 bestätigte Jochen Rindt als F1s einzigen posthumen Champion für Lotus nach seinem tödlichen Unfall in Monza im September, niemand konnte seine Punktzahl erreichen.",
        nl: "De Mexicaanse GP finale van 1970 bevestigde Jochen Rindt als F1's enige postume kampioen voor Lotus na zijn fatale crash in Monza in september, niemand kon zijn punten totaal inhalen."
      }
    },
    {
      question: {
        en: "At which 1974 race did Emerson Fittipaldi clinch his second championship and first for McLaren?",
        es: "¿En qué carrera de 1974 Emerson Fittipaldi aseguró su segundo campeonato y primero para McLaren?",
        de: "Bei welchem Rennen 1974 sicherte Emerson Fittipaldi seine zweite Meisterschaft und erste für McLaren?",
        nl: "Bij welke race van 1974 stelde Emerson Fittipaldi zijn tweede kampioenschap en eerste voor McLaren veilig?"
      },
      options: [
        "Italian Grand Prix",
        "Canadian Grand Prix",
        "United States Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Emerson Fittipaldi finished 4th at the 1974 United States GP at Watkins Glen to clinch his 2nd championship and first for McLaren, beating Ferrari's Clay Regazzoni by 3 points.",
        es: "Emerson Fittipaldi terminó 4º en el GP de Estados Unidos de 1974 en Watkins Glen para asegurar su 2º campeonato y primero para McLaren, venciendo al Clay Regazzoni de Ferrari por 3 puntos.",
        de: "Emerson Fittipaldi wurde beim USA GP 1974 in Watkins Glen Vierter um seine 2. Meisterschaft und erste für McLaren zu sichern, schlug Ferraris Clay Regazzoni um 3 Punkte.",
        nl: "Emerson Fittipaldi eindigde als 4e in de Verenigde Staten GP van 1974 op Watkins Glen om zijn 2e kampioenschap en eerste voor McLaren veilig te stellen, versloeg Ferrari's Clay Regazzoni met 3 punten."
      }
    },
    {
      question: {
        en: "Which 1955 race saw Juan Manuel Fangio win his third championship for Mercedes after switching from Maserati?",
        es: "¿Qué carrera de 1955 vio a Juan Manuel Fangio ganar su tercer campeonato para Mercedes después de cambiar de Maserati?",
        de: "Welches Rennen 1955 sah Juan Manuel Fangio seine dritte Meisterschaft für Mercedes gewinnen nach Wechsel von Maserati?",
        nl: "Welke race van 1955 zag Juan Manuel Fangio zijn derde kampioenschap voor Mercedes winnen na het overstappen van Maserati?"
      },
      options: [
        "Italian Grand Prix",
        "British Grand Prix",
        "Dutch Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Juan Manuel Fangio won the 1955 Italian GP at Monza to clinch his 3rd championship for Mercedes-Benz, dominating the season alongside Stirling Moss in the legendary W196.",
        es: "Juan Manuel Fangio ganó el GP de Italia de 1955 en Monza para asegurar su 3er campeonato para Mercedes-Benz, dominando la temporada junto a Stirling Moss en el legendario W196.",
        de: "Juan Manuel Fangio gewann den Italien GP 1955 in Monza um seine 3. Meisterschaft für Mercedes-Benz zu sichern, dominierte die Saison neben Stirling Moss im legendären W196.",
        nl: "Juan Manuel Fangio won de Italiaanse GP van 1955 in Monza om zijn 3e kampioenschap voor Mercedes-Benz veilig te stellen, domineerde het seizoen naast Stirling Moss in de legendarische W196."
      }
    }
  ];

  return { questions: questions };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level10;
}
