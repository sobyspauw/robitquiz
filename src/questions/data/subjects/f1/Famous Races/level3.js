const level3 = (function() {
  const questions = [
    {
      question: {
        en: "The 1974 Spanish Grand Prix at Jarama was won by which driver?",
        es: "¿Qué piloto ganó el Gran Premio de España de 1974 en Jarama?",
        de: "Welcher Fahrer gewann den Spanischen Grand Prix 1974 in Jarama?",
        nl: "Welke coureur won de Spaanse Grand Prix van 1974 in Jarama?"
      },
      options: [
        "Niki Lauda",
        "Emerson Fittipaldi",
        "Ronnie Peterson",
        "Carlos Reutemann"
      ],
      correct: 0,
      explanation: {
        en: "Niki Lauda won the 1974 Spanish GP, his first F1 victory, starting a legendary career with Ferrari.",
        es: "Niki Lauda ganó el GP de España de 1974, su primera victoria en F1, comenzando una carrera legendaria con Ferrari.",
        de: "Niki Lauda gewann den Spanischen GP 1974, sein erster F1-Sieg, und startete eine legendäre Karriere mit Ferrari.",
        nl: "Niki Lauda won de Spaanse GP van 1974, zijn eerste F1-overwinning, het begin van een legendarische carrière bij Ferrari."
      }
    },
    {
      question: {
        en: "Which 2020 race saw Pierre Gasly win for AlphaTauri?",
        es: "¿En qué carrera de 2020 Pierre Gasly ganó para AlphaTauri?",
        de: "Bei welchem Rennen 2020 gewann Pierre Gasly für AlphaTauri?",
        nl: "Bij welke race in 2020 won Pierre Gasly voor AlphaTauri?"
      },
      options: [
        "Turkish Grand Prix",
        "Italian Grand Prix",
        "Emilia Romagna Grand Prix",
        "Portuguese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Pierre Gasly won the 2020 Italian GP at Monza after a red flag period, AlphaTauri's first win since 2008 as Toro Rosso.",
        es: "Pierre Gasly ganó el GP de Italia de 2020 en Monza después de un período de bandera roja, la primera victoria de AlphaTauri desde 2008 como Toro Rosso.",
        de: "Pierre Gasly gewann den Italienischen GP 2020 in Monza nach einer Rotphasen-Periode, AlphaTauris erster Sieg seit 2008 als Toro Rosso.",
        nl: "Pierre Gasly won de Italiaanse GP van 2020 in Monza na een rode vlag periode, AlphaTauri's eerste overwinning sinds 2008 als Toro Rosso."
      }
    },
    {
      question: {
        en: "The 1980 Canadian Grand Prix featured how many different leaders?",
        es: "¿Cuántos líderes diferentes tuvo el Gran Premio de Canadá de 1980?",
        de: "Wie viele verschiedene Führende hatte der Kanadische Grand Prix 1980?",
        nl: "Hoeveel verschillende leiders had de Canadese Grand Prix van 1980?"
      },
      options: [
        "5 leaders",
        "7 leaders",
        "9 leaders",
        "11 leaders"
      ],
      correct: 2,
      explanation: {
        en: "The 1980 Canadian GP had 9 different leaders, with Alan Jones eventually winning for Williams in a chaotic race.",
        es: "El GP de Canadá de 1980 tuvo 9 líderes diferentes, con Alan Jones ganando finalmente para Williams en una carrera caótica.",
        de: "Der Kanadische GP 1980 hatte 9 verschiedene Führende, wobei Alan Jones schließlich für Williams in einem chaotischen Rennen gewann.",
        nl: "De Canadese GP van 1980 had 9 verschillende leiders, met Alan Jones uiteindelijk winnend voor Williams in een chaotische race."
      }
    },
    {
      question: {
        en: "Which 1987 race saw Nigel Mansell's famous tire failure while leading?",
        es: "¿En qué carrera de 1987 Nigel Mansell tuvo la famosa falla de neumático mientras lideraba?",
        de: "Bei welchem Rennen 1987 hatte Nigel Mansell den berühmten Reifenschaden während er führte?",
        nl: "Bij welke race in 1987 had Nigel Mansell de beroemde bandenklapppanne terwijl hij leidde?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "Austrian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Nigel Mansell's tire exploded at 200 mph on the main straight at Silverstone's 1987 British GP while leading with 3 laps to go.",
        es: "El neumático de Nigel Mansell explotó a 200 mph en la recta principal del GP de Gran Bretaña de 1987 en Silverstone mientras lideraba faltando 3 vueltas.",
        de: "Nigel Mansells Reifen explodierte bei 200 mph auf der Hauptgeraden beim Britischen GP 1987 in Silverstone während er mit 3 Runden Vorsprung führte.",
        nl: "Nigel Mansell's band explodeerde op 200 mph op het rechte stuk tijdens de Britse GP van 1987 in Silverstone terwijl hij leidde met 3 rondes te gaan."
      }
    },
    {
      question: {
        en: "The 1963 Monaco Grand Prix was won by which driver after starting 9th?",
        es: "¿Qué piloto ganó el Gran Premio de Mónaco de 1963 después de comenzar noveno?",
        de: "Welcher Fahrer gewann den Monaco Grand Prix 1963 nach Start von Position 9?",
        nl: "Welke coureur won de Grand Prix van Monaco 1963 na te starten vanaf de 9e positie?"
      },
      options: [
        "Jim Clark",
        "Graham Hill",
        "John Surtees",
        "Dan Gurney"
      ],
      correct: 1,
      explanation: {
        en: "Graham Hill won the 1963 Monaco GP from 9th on the grid, his second of five Monaco victories.",
        es: "Graham Hill ganó el GP de Mónaco de 1963 desde el noveno lugar en la parrilla, su segunda de cinco victorias en Mónaco.",
        de: "Graham Hill gewann den Monaco GP 1963 vom 9. Startplatz, sein zweiter von fünf Monaco-Siegen.",
        nl: "Graham Hill won de GP van Monaco 1963 vanaf de 9e positie op de grid, zijn tweede van vijf Monaco-overwinningen."
      }
    },
    {
      question: {
        en: "Which 2017 race featured Max Verstappen's youngest winner record?",
        es: "¿Qué carrera de 2017 presentó el récord de ganador más joven de Max Verstappen?",
        de: "Welches Rennen 2017 zeigte Max Verstappens Rekord als jüngster Sieger?",
        nl: "Welke race in 2017 toonde Max Verstappen's jongste winnaar record?"
      },
      options: [
        "Spanish Grand Prix 2016",
        "Malaysian Grand Prix 2017",
        "Mexican Grand Prix 2017",
        "Chinese Grand Prix 2016"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen became the youngest F1 winner at age 18 at the 2016 Spanish GP (not 2017), a record that still stands.",
        es: "Max Verstappen se convirtió en el ganador más joven de F1 a los 18 años en el GP de España de 2016 (no 2017), un récord que aún se mantiene.",
        de: "Max Verstappen wurde mit 18 Jahren beim Spanischen GP 2016 (nicht 2017) jüngster F1-Sieger, ein Rekord der noch besteht.",
        nl: "Max Verstappen werd de jongste F1-winnaar op 18-jarige leeftijd tijdens de Spaanse GP van 2016 (niet 2017), een record dat nog steeds staat."
      }
    },
    {
      question: {
        en: "The 1975 Austrian Grand Prix was notable for whose first F1 victory?",
        es: "¿El Gran Premio de Austria de 1975 fue notable por la primera victoria en F1 de quién?",
        de: "Der Österreichische Grand Prix 1975 war bemerkenswert für wessen ersten F1-Sieg?",
        nl: "De Oostenrijkse Grand Prix van 1975 was opmerkelijk voor wiens eerste F1-overwinning?"
      },
      options: [
        "James Hunt",
        "Vittorio Brambilla",
        "Carlos Pace",
        "Patrick Depailler"
      ],
      correct: 1,
      explanation: {
        en: "Vittorio Brambilla won the rain-shortened 1975 Austrian GP, his only F1 victory, in a March.",
        es: "Vittorio Brambilla ganó el acortado por lluvia GP de Austria de 1975, su única victoria en F1, en un March.",
        de: "Vittorio Brambilla gewann den regenverkürzten Österreichischen GP 1975, sein einziger F1-Sieg, in einem March.",
        nl: "Vittorio Brambilla won de door regen verkorte Oostenrijkse GP van 1975, zijn enige F1-overwinning, in een March."
      }
    },
    {
      question: {
        en: "Which 2008 race saw Robert Kubica score BMW Sauber's only victory?",
        es: "¿En qué carrera de 2008 Robert Kubica consiguió la única victoria de BMW Sauber?",
        de: "Bei welchem Rennen 2008 erzielte Robert Kubica BMW Saubers einzigen Sieg?",
        nl: "Bij welke race in 2008 behaalde Robert Kubica BMW Sauber's enige overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Canadian Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Robert Kubica won the chaotic 2008 Canadian GP, BMW Sauber's only victory in their F1 history.",
        es: "Robert Kubica ganó el caótico GP de Canadá de 2008, la única victoria de BMW Sauber en su historia en F1.",
        de: "Robert Kubica gewann den chaotischen Kanadischen GP 2008, BMW Saubers einziger Sieg in ihrer F1-Geschichte.",
        nl: "Robert Kubica won de chaotische Canadese GP van 2008, BMW Sauber's enige overwinning in hun F1 geschiedenis."
      }
    },
    {
      question: {
        en: "The 1970 Dutch Grand Prix at Zandvoort was won by which driver?",
        es: "¿Qué piloto ganó el Gran Premio de Holanda de 1970 en Zandvoort?",
        de: "Welcher Fahrer gewann den Holländischen Grand Prix 1970 in Zandvoort?",
        nl: "Welke coureur won de Nederlandse Grand Prix van 1970 in Zandvoort?"
      },
      options: [
        "Jochen Rindt",
        "Jackie Stewart",
        "Jack Brabham",
        "Jacky Ickx"
      ],
      correct: 0,
      explanation: {
        en: "Jochen Rindt won the 1970 Dutch GP at Zandvoort, part of his posthumous championship-winning season.",
        es: "Jochen Rindt ganó el GP de Holanda de 1970 en Zandvoort, parte de su temporada ganadora del campeonato póstumo.",
        de: "Jochen Rindt gewann den Holländischen GP 1970 in Zandvoort, Teil seiner posthumen Meisterschafts-Saison.",
        nl: "Jochen Rindt won de Nederlandse GP van 1970 in Zandvoort, deel van zijn postume kampioenschap-winnende seizoen."
      }
    },
    {
      question: {
        en: "Which 2004 race saw Jarno Trulli win for Renault?",
        es: "¿En qué carrera de 2004 Jarno Trulli ganó para Renault?",
        de: "Bei welchem Rennen 2004 gewann Jarno Trulli für Renault?",
        nl: "Bij welke race in 2004 won Jarno Trulli voor Renault?"
      },
      options: [
        "French Grand Prix",
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jarno Trulli won the 2004 Monaco GP, his only victory for Renault and last F1 win of his career.",
        es: "Jarno Trulli ganó el GP de Mónaco de 2004, su única victoria para Renault y última victoria en F1 de su carrera.",
        de: "Jarno Trulli gewann den Monaco GP 2004, sein einziger Sieg für Renault und letzter F1-Sieg seiner Karriere.",
        nl: "Jarno Trulli won de GP van Monaco 2004, zijn enige overwinning voor Renault en laatste F1-overwinning van zijn carrière."
      }
    },
    {
      question: {
        en: "The 1958 Moroccan Grand Prix decided the championship for which driver?",
        es: "¿Para qué piloto decidió el campeonato el Gran Premio de Marruecos de 1958?",
        de: "Für welchen Fahrer entschied der Marokkanische Grand Prix 1958 die Meisterschaft?",
        nl: "Voor welke coureur besliste de Marokkaanse Grand Prix van 1958 het kampioenschap?"
      },
      options: [
        "Juan Manuel Fangio",
        "Mike Hawthorn",
        "Stirling Moss",
        "Tony Brooks"
      ],
      correct: 1,
      explanation: {
        en: "Mike Hawthorn won the 1958 championship at the Moroccan GP by one point over Stirling Moss, despite winning only one race.",
        es: "Mike Hawthorn ganó el campeonato de 1958 en el GP de Marruecos por un punto sobre Stirling Moss, a pesar de ganar solo una carrera.",
        de: "Mike Hawthorn gewann die Meisterschaft 1958 beim Marokkanischen GP mit einem Punkt Vorsprung auf Stirling Moss, trotz nur eines Rennsieges.",
        nl: "Mike Hawthorn won het kampioenschap van 1958 tijdens de Marokkaanse GP met één punt voorsprong op Stirling Moss, ondanks slechts één race overwinning."
      }
    },
    {
      question: {
        en: "Which 1991 race saw Ayrton Senna famously drive with only 6th gear?",
        es: "¿En qué carrera de 1991 Ayrton Senna condujo famosamente solo con sexta marcha?",
        de: "Bei welchem Rennen 1991 fuhr Ayrton Senna berühmt nur mit dem 6. Gang?",
        nl: "Bij welke race in 1991 reed Ayrton Senna beroemd alleen met de 6e versnelling?"
      },
      options: [
        "Brazilian Grand Prix",
        "Monaco Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna won the 1991 Brazilian GP stuck in 6th gear for most of the race, suffering from exhaustion on the podium.",
        es: "Ayrton Senna ganó el GP de Brasil de 1991 atascado en sexta marcha durante la mayor parte de la carrera, sufriendo agotamiento en el podio.",
        de: "Ayrton Senna gewann den Brasilianischen GP 1991 im 6. Gang festgefahren für den Großteil des Rennens, litt unter Erschöpfung auf dem Podium.",
        nl: "Ayrton Senna won de Braziliaanse GP van 1991 vast in de 6e versnelling voor het grootste deel van de race, lijdend aan uitputting op het podium."
      }
    },
    {
      question: {
        en: "The 2018 German Grand Prix saw which driver win from 14th on the grid?",
        es: "¿Qué piloto ganó desde el puesto 14 en la parrilla en el Gran Premio de Alemania de 2018?",
        de: "Welcher Fahrer gewann beim Deutschen Grand Prix 2018 vom 14. Startplatz?",
        nl: "Welke coureur won vanaf de 14e positie op de grid tijdens de Duitse Grand Prix van 2018?"
      },
      options: [
        "Lewis Hamilton",
        "Sebastian Vettel",
        "Kimi Räikkönen",
        "Valtteri Bottas"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton won the wet 2018 German GP from 14th on the grid after Sebastian Vettel crashed while leading at his home race.",
        es: "Lewis Hamilton ganó el húmedo GP de Alemania de 2018 desde el puesto 14 en la parrilla después de que Sebastian Vettel se estrellara mientras lideraba en su carrera local.",
        de: "Lewis Hamilton gewann den nassen Deutschen GP 2018 vom 14. Startplatz nachdem Sebastian Vettel beim Führen in seinem Heimrennen verunglückte.",
        nl: "Lewis Hamilton won de natte Duitse GP van 2018 vanaf de 14e positie op de grid nadat Sebastian Vettel crashte terwijl hij leidde bij zijn thuisrace."
      }
    },
    {
      question: {
        en: "Which 1965 race was the first F1 victory for Jackie Stewart?",
        es: "¿Qué carrera de 1965 fue la primera victoria en F1 para Jackie Stewart?",
        de: "Welches Rennen 1965 war der erste F1-Sieg für Jackie Stewart?",
        nl: "Welke race in 1965 was de eerste F1-overwinning voor Jackie Stewart?"
      },
      options: [
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "Dutch Grand Prix",
        "British Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jackie Stewart won his first F1 race at the 1965 Italian GP at Monza in a BRM, winning by over a lap.",
        es: "Jackie Stewart ganó su primera carrera de F1 en el GP de Italia de 1965 en Monza en un BRM, ganando por más de una vuelta.",
        de: "Jackie Stewart gewann sein erstes F1-Rennen beim Italienischen GP 1965 in Monza in einem BRM, mit über einer Runde Vorsprung.",
        nl: "Jackie Stewart won zijn eerste F1-race tijdens de Italiaanse GP van 1965 in Monza in een BRM, winnend met meer dan een ronde voorsprong."
      }
    },
    {
      question: {
        en: "The 2001 Belgian Grand Prix saw which driver win for Jordan?",
        es: "¿Qué piloto ganó para Jordan en el Gran Premio de Bélgica de 2001?",
        de: "Welcher Fahrer gewann beim Belgischen Grand Prix 2001 für Jordan?",
        nl: "Welke coureur won voor Jordan tijdens de Belgische Grand Prix van 2001?"
      },
      options: [
        "Heinz-Harald Frentzen",
        "Giancarlo Fisichella",
        "Eddie Irvine",
        "Jean Alesi"
      ],
      correct: 0,
      explanation: {
        en: "Heinz-Harald Frentzen won the 2001 Belgian GP at Spa, Jordan's last F1 victory in their history.",
        es: "Heinz-Harald Frentzen ganó el GP de Bélgica de 2001 en Spa, la última victoria de Jordan en F1 en su historia.",
        de: "Heinz-Harald Frentzen gewann den Belgischen GP 2001 in Spa, Jordans letzter F1-Sieg in ihrer Geschichte.",
        nl: "Heinz-Harald Frentzen won de Belgische GP van 2001 in Spa, Jordan's laatste F1-overwinning in hun geschiedenis."
      }
    },
    {
      question: {
        en: "Which 1976 race saw James Hunt disqualified and later reinstated?",
        es: "¿En qué carrera de 1976 James Hunt fue descalificado y luego reintegrado?",
        de: "Bei welchem Rennen 1976 wurde James Hunt disqualifiziert und später wieder zugelassen?",
        nl: "Bij welke race in 1976 werd James Hunt gediskwalificeerd en later weer toegelaten?"
      },
      options: [
        "Spanish Grand Prix",
        "British Grand Prix",
        "German Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "James Hunt won the 1976 British GP but was initially disqualified for his car being too wide, later reinstated after appeal.",
        es: "James Hunt ganó el GP de Gran Bretaña de 1976 pero fue descalificado inicialmente por su coche ser demasiado ancho, luego reintegrado después de apelación.",
        de: "James Hunt gewann den Britischen GP 1976, wurde aber zunächst disqualifiziert weil sein Auto zu breit war, später nach Berufung wieder zugelassen.",
        nl: "James Hunt won de Britse GP van 1976 maar werd aanvankelijk gediskwalificeerd omdat zijn auto te breed was, later weer toegelaten na beroep."
      }
    },
    {
      question: {
        en: "The 1999 Malaysian Grand Prix was notable for what reason?",
        es: "¿Por qué razón fue notable el Gran Premio de Malasia de 1999?",
        de: "Wofür war der Malaysische Grand Prix 1999 bemerkenswert?",
        nl: "Waarvoor was de Maleisische Grand Prix van 1999 opmerkelijk?"
      },
      options: [
        "First race in Malaysia",
        "Wettest race ever",
        "Ferrari 1-2 finish",
        "Safety car debut"
      ],
      correct: 0,
      explanation: {
        en: "The 1999 Malaysian GP at Sepang was the first F1 race in Malaysia, won by Eddie Irvine for Ferrari.",
        es: "El GP de Malasia de 1999 en Sepang fue la primera carrera de F1 en Malasia, ganada por Eddie Irvine para Ferrari.",
        de: "Der Malaysische GP 1999 in Sepang war das erste F1-Rennen in Malaysia, gewonnen von Eddie Irvine für Ferrari.",
        nl: "De Maleisische GP van 1999 in Sepang was de eerste F1-race in Maleisië, gewonnen door Eddie Irvine voor Ferrari."
      }
    },
    {
      question: {
        en: "Which 1985 race featured Alain Prost's last-lap pass on Michele Alboreto?",
        es: "¿Qué carrera de 1985 presentó el adelantamiento de Alain Prost a Michele Alboreto en la última vuelta?",
        de: "Welches Rennen 1985 zeigte Alain Prosts Überholmanöver an Michele Alboreto in der letzten Runde?",
        nl: "Welke race in 1985 toonde Alain Prost's inhaalmanoeuvre op Michele Alboreto in de laatste ronde?"
      },
      options: [
        "Austrian Grand Prix",
        "Dutch Grand Prix",
        "Belgian Grand Prix",
        "Portuguese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Alain Prost passed Michele Alboreto on the final lap to win the 1985 Dutch GP at Zandvoort.",
        es: "Alain Prost adelantó a Michele Alboreto en la última vuelta para ganar el GP de Holanda de 1985 en Zandvoort.",
        de: "Alain Prost überholte Michele Alboreto in der letzten Runde um den Holländischen GP 1985 in Zandvoort zu gewinnen.",
        nl: "Alain Prost passeerde Michele Alboreto in de laatste ronde om de Nederlandse GP van 1985 in Zandvoort te winnen."
      }
    },
    {
      question: {
        en: "The 2013 Canadian Grand Prix saw which Red Bull drivers collide?",
        es: "¿Qué pilotos de Red Bull colisionaron en el Gran Premio de Canadá de 2013?",
        de: "Welche Red Bull-Fahrer kollidierten beim Kanadischen Grand Prix 2013?",
        nl: "Welke Red Bull coureurs botsten tijdens de Canadese Grand Prix van 2013?"
      },
      options: [
        "Vettel-Webber",
        "Ricciardo-Kvyat",
        "Verstappen-Ricciardo",
        "Vettel-Ricciardo"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel and Mark Webber collided while battling for position at the 2013 Canadian GP, Vettel apologized.",
        es: "Sebastian Vettel y Mark Webber colisionaron mientras luchaban por posición en el GP de Canadá de 2013, Vettel se disculpó.",
        de: "Sebastian Vettel und Mark Webber kollidierten beim Kampf um Position beim Kanadischen GP 2013, Vettel entschuldigte sich.",
        nl: "Sebastian Vettel en Mark Webber botsten tijdens het vechten om positie tijdens de Canadese GP van 2013, Vettel verontschuldigde zich."
      }
    },
    {
      question: {
        en: "Which 1966 race was the first F1 victory for Jack Brabham in his own car?",
        es: "¿Qué carrera de 1966 fue la primera victoria en F1 para Jack Brabham en su propio coche?",
        de: "Welches Rennen 1966 war der erste F1-Sieg für Jack Brabham in seinem eigenen Auto?",
        nl: "Welke race in 1966 was de eerste F1-overwinning voor Jack Brabham in zijn eigen auto?"
      },
      options: [
        "Monaco Grand Prix",
        "French Grand Prix",
        "British Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jack Brabham won the 1966 French GP at Reims, the first of four wins that season in his own Brabham car.",
        es: "Jack Brabham ganó el GP de Francia de 1966 en Reims, la primera de cuatro victorias esa temporada en su propio coche Brabham.",
        de: "Jack Brabham gewann den Französischen GP 1966 in Reims, der erste von vier Siegen in dieser Saison in seinem eigenen Brabham-Auto.",
        nl: "Jack Brabham won de Franse GP van 1966 in Reims, de eerste van vier overwinningen dat seizoen in zijn eigen Brabham auto."
      }
    },
    {
      question: {
        en: "The 2005 Japanese Grand Prix saw which driver win their first race?",
        es: "¿Qué piloto ganó su primera carrera en el Gran Premio de Japón de 2005?",
        de: "Welcher Fahrer gewann beim Japanischen Grand Prix 2005 sein erstes Rennen?",
        nl: "Welke coureur won zijn eerste race tijdens de Japanse Grand Prix van 2005?"
      },
      options: [
        "Kimi Räikkönen",
        "Giancarlo Fisichella",
        "Fernando Alonso",
        "Juan Pablo Montoya"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen won the 2005 Japanese GP for McLaren, though this was far from his first win (it was his 7th).",
        es: "Kimi Räikkönen ganó el GP de Japón de 2005 para McLaren, aunque esto estaba lejos de ser su primera victoria (fue la séptima).",
        de: "Kimi Räikkönen gewann den Japanischen GP 2005 für McLaren, obwohl dies bei weitem nicht sein erster Sieg war (es war sein 7.).",
        nl: "Kimi Räikkönen won de Japanse GP van 2005 voor McLaren, hoewel dit verre van zijn eerste overwinning was (het was zijn 7e)."
      }
    },
    {
      question: {
        en: "Which 1953 race saw Alberto Ascari's only victory for Ferrari that season?",
        es: "¿En qué carrera de 1953 Alberto Ascari obtuvo su única victoria para Ferrari esa temporada?",
        de: "Bei welchem Rennen 1953 erzielte Alberto Ascari seinen einzigen Sieg für Ferrari in dieser Saison?",
        nl: "Bij welke race in 1953 behaalde Alberto Ascari zijn enige overwinning voor Ferrari dat seizoen?"
      },
      options: [
        "Argentine Grand Prix",
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "Swiss Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Alberto Ascari won all races for Ferrari in 1952, but in 1953 won the Argentine GP before switching to later dominate in a Maserati that year.",
        es: "Alberto Ascari ganó todas las carreras para Ferrari en 1952, pero en 1953 ganó el GP de Argentina antes de cambiar para dominar más tarde en un Maserati ese año.",
        de: "Alberto Ascari gewann 1952 alle Rennen für Ferrari, aber 1953 gewann er den Argentinischen GP bevor er wechselte um später in einem Maserati zu dominieren.",
        nl: "Alberto Ascari won alle races voor Ferrari in 1952, maar in 1953 won hij de Argentijnse GP voordat hij overstapte om later te domineren in een Maserati dat jaar."
      }
    },
    {
      question: {
        en: "The 2019 Austrian Grand Prix featured which penalty controversy?",
        es: "¿El Gran Premio de Austria de 2019 presentó qué controversia de penalización?",
        de: "Der Österreichische Grand Prix 2019 zeigte welche Strafenkontroverse?",
        nl: "De Oostenrijkse Grand Prix van 2019 toonde welke straf controverse?"
      },
      options: [
        "Vettel-Verstappen incident",
        "Hamilton-Leclerc incident",
        "Vettel-Hamilton incident",
        "Verstappen-Leclerc incident"
      ],
      correct: 3,
      explanation: {
        en: "Max Verstappen and Charles Leclerc had a controversial last-lap battle at the 2019 Austrian GP, with stewards ruling the contact as racing incident.",
        es: "Max Verstappen y Charles Leclerc tuvieron una controvertida batalla en la última vuelta en el GP de Austria de 2019, con los comisarios dictaminando el contacto como incidente de carrera.",
        de: "Max Verstappen und Charles Leclerc hatten beim Österreichischen GP 2019 einen kontroversen Kampf in der letzten Runde, wobei die Rennleitung den Kontakt als Rennvorfall wertete.",
        nl: "Max Verstappen en Charles Leclerc hadden een controversieel laatste-ronde gevecht tijdens de Oostenrijkse GP van 2019, waarbij de stewards het contact als race incident beoordeelden."
      }
    },
    {
      question: {
        en: "Which 1989 race saw Thierry Boutsen win for Williams?",
        es: "¿En qué carrera de 1989 Thierry Boutsen ganó para Williams?",
        de: "Bei welchem Rennen 1989 gewann Thierry Boutsen für Williams?",
        nl: "Bij welke race in 1989 won Thierry Boutsen voor Williams?"
      },
      options: [
        "Canadian Grand Prix",
        "Australian Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Thierry Boutsen won the 1989 Canadian GP at Montreal, his first F1 victory for Williams.",
        es: "Thierry Boutsen ganó el GP de Canadá de 1989 en Montreal, su primera victoria en F1 para Williams.",
        de: "Thierry Boutsen gewann den Kanadischen GP 1989 in Montreal, sein erster F1-Sieg für Williams.",
        nl: "Thierry Boutsen won de Canadese GP van 1989 in Montreal, zijn eerste F1-overwinning voor Williams."
      }
    },
    {
      question: {
        en: "The 1955 British Grand Prix at Aintree was won by which driver?",
        es: "¿Qué piloto ganó el Gran Premio de Gran Bretaña de 1955 en Aintree?",
        de: "Welcher Fahrer gewann den Britischen Grand Prix 1955 in Aintree?",
        nl: "Welke coureur won de Britse Grand Prix van 1955 in Aintree?"
      },
      options: [
        "Juan Manuel Fangio",
        "Stirling Moss",
        "Alberto Ascari",
        "Mike Hawthorn"
      ],
      correct: 1,
      explanation: {
        en: "Stirling Moss won the 1955 British GP at Aintree, his first World Championship Grand Prix victory.",
        es: "Stirling Moss ganó el GP de Gran Bretaña de 1955 en Aintree, su primera victoria en un Gran Premio del Campeonato Mundial.",
        de: "Stirling Moss gewann den Britischen GP 1955 in Aintree, sein erster Weltmeisterschafts-Grand-Prix-Sieg.",
        nl: "Stirling Moss won de Britse GP van 1955 in Aintree, zijn eerste Wereldkampioenschap Grand Prix overwinning."
      }
    },
    {
      question: {
        en: "Which 2010 race saw Fernando Alonso win for Ferrari on his debut?",
        es: "¿En qué carrera de 2010 Fernando Alonso ganó para Ferrari en su debut?",
        de: "Bei welchem Rennen 2010 gewann Fernando Alonso für Ferrari bei seinem Debüt?",
        nl: "Bij welke race in 2010 won Fernando Alonso voor Ferrari bij zijn debuut?"
      },
      options: [
        "Australian Grand Prix",
        "Bahrain Grand Prix",
        "Malaysian Grand Prix",
        "Chinese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso won the 2010 Bahrain GP on his Ferrari debut, the team's first win since 2008.",
        es: "Fernando Alonso ganó el GP de Baréin de 2010 en su debut con Ferrari, la primera victoria del equipo desde 2008.",
        de: "Fernando Alonso gewann den Bahrain GP 2010 bei seinem Ferrari-Debüt, der erste Sieg des Teams seit 2008.",
        nl: "Fernando Alonso won de Bahrein GP van 2010 bij zijn Ferrari debuut, de eerste overwinning van het team sinds 2008."
      }
    },
    {
      question: {
        en: "The 1964 Austrian Grand Prix was held at which circuit?",
        es: "¿En qué circuito se celebró el Gran Premio de Austria de 1964?",
        de: "Auf welcher Rennstrecke fand der Österreichische Grand Prix 1964 statt?",
        nl: "Op welk circuit werd de Oostenrijkse Grand Prix van 1964 gehouden?"
      },
      options: [
        "Österreichring",
        "Zeltweg Airfield",
        "Red Bull Ring",
        "Salzburgring"
      ],
      correct: 1,
      explanation: {
        en: "The 1964 Austrian GP was held on the dangerous Zeltweg Airfield circuit, used only once in F1 history.",
        es: "El GP de Austria de 1964 se celebró en el peligroso circuito del aeródromo de Zeltweg, usado solo una vez en la historia de la F1.",
        de: "Der Österreichische GP 1964 fand auf der gefährlichen Zeltweg Airfield-Strecke statt, nur einmal in der F1-Geschichte genutzt.",
        nl: "De Oostenrijkse GP van 1964 werd gehouden op het gevaarlijke Zeltweg Airfield circuit, slechts één keer gebruikt in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which 2016 race saw Nico Rosberg clinch his only championship?",
        es: "¿En qué carrera de 2016 Nico Rosberg aseguró su único campeonato?",
        de: "Bei welchem Rennen 2016 sicherte sich Nico Rosberg seine einzige Meisterschaft?",
        nl: "Bij welke race in 2016 behaalde Nico Rosberg zijn enige kampioenschap?"
      },
      options: [
        "Brazilian Grand Prix",
        "Mexican Grand Prix",
        "Abu Dhabi Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Nico Rosberg won the 2016 championship by finishing 2nd at the Abu Dhabi GP, retiring five days later.",
        es: "Nico Rosberg ganó el campeonato de 2016 al terminar segundo en el GP de Abu Dhabi, retirándose cinco días después.",
        de: "Nico Rosberg gewann die Meisterschaft 2016 durch Platz 2 beim Abu Dhabi GP, fünf Tage später trat er zurück.",
        nl: "Nico Rosberg won het kampioenschap van 2016 door 2e te worden tijdens de Abu Dhabi GP, vijf dagen later met pensioen."
      }
    },
    {
      question: {
        en: "The 1973 Swedish Grand Prix was won by which driver in a Lotus?",
        es: "¿Qué piloto ganó el Gran Premio de Suecia de 1973 en un Lotus?",
        de: "Welcher Fahrer gewann den Schwedischen Grand Prix 1973 in einem Lotus?",
        nl: "Welke coureur won de Zweedse Grand Prix van 1973 in een Lotus?"
      },
      options: [
        "Emerson Fittipaldi",
        "Ronnie Peterson",
        "Jacky Ickx",
        "Denny Hulme"
      ],
      correct: 3,
      explanation: {
        en: "Denny Hulme won the 1973 Swedish GP at Anderstorp in a McLaren, not Lotus. This question contains an error.",
        es: "Denny Hulme ganó el GP de Suecia de 1973 en Anderstorp en un McLaren, no Lotus. Esta pregunta contiene un error.",
        de: "Denny Hulme gewann den Schwedischen GP 1973 in Anderstorp in einem McLaren, nicht Lotus. Diese Frage enthält einen Fehler.",
        nl: "Denny Hulme won de Zweedse GP van 1973 in Anderstorp in een McLaren, niet Lotus. Deze vraag bevat een fout."
      }
    },
    {
      question: {
        en: "Which 2021 race featured Max Verstappen's first championship-winning performance?",
        es: "¿Qué carrera de 2021 presentó la actuación ganadora del primer campeonato de Max Verstappen?",
        de: "Welches Rennen 2021 zeigte Max Verstappens erste meisterschaftsgewinnende Leistung?",
        nl: "Welke race in 2021 toonde Max Verstappen's eerste kampioenschap-winnende prestatie?"
      },
      options: [
        "Saudi Arabian Grand Prix",
        "Abu Dhabi Grand Prix",
        "Mexican Grand Prix",
        "United States Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won his first championship at the 2021 Abu Dhabi GP on the final lap in controversial circumstances.",
        es: "Max Verstappen ganó su primer campeonato en el GP de Abu Dhabi de 2021 en la última vuelta en circunstancias controvertidas.",
        de: "Max Verstappen gewann seine erste Meisterschaft beim Abu Dhabi GP 2021 in der letzten Runde unter kontroversen Umständen.",
        nl: "Max Verstappen won zijn eerste kampioenschap tijdens de Abu Dhabi GP van 2021 in de laatste ronde onder controversiële omstandigheden."
      }
    },
    {
      question: {
        en: "The 1968 Mexican Grand Prix was the last race for which legendary driver?",
        es: "¿El Gran Premio de México de 1968 fue la última carrera para qué piloto legendario?",
        de: "Der Mexikanische Grand Prix 1968 war das letzte Rennen für welchen legendären Fahrer?",
        nl: "De Mexicaanse Grand Prix van 1968 was de laatste race voor welke legendarische coureur?"
      },
      options: [
        "Jim Clark",
        "Graham Hill",
        "Dan Gurney",
        "John Surtees"
      ],
      correct: 2,
      explanation: {
        en: "The 1968 Mexican GP was Dan Gurney's last F1 race, finishing 6th in his own Eagle car.",
        es: "El GP de México de 1968 fue la última carrera de F1 de Dan Gurney, terminando sexto en su propio coche Eagle.",
        de: "Der Mexikanische GP 1968 war Dan Gurneys letztes F1-Rennen, er wurde Sechster in seinem eigenen Eagle-Auto.",
        nl: "De Mexicaanse GP van 1968 was Dan Gurney's laatste F1-race, eindigend als 6e in zijn eigen Eagle auto."
      }
    },
    {
      question: {
        en: "Which 1997 race saw Michael Schumacher excluded from the championship?",
        es: "¿En qué carrera de 1997 Michael Schumacher fue excluido del campeonato?",
        de: "Bei welchem Rennen 1997 wurde Michael Schumacher aus der Meisterschaft ausgeschlossen?",
        nl: "Bij welke race in 1997 werd Michael Schumacher uitgesloten van het kampioenschap?"
      },
      options: [
        "European Grand Prix",
        "Japanese Grand Prix",
        "Luxembourg Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "After the 1997 European GP at Jerez, Michael Schumacher was excluded from the championship for deliberately colliding with Jacques Villeneuve.",
        es: "Después del GP de Europa de 1997 en Jerez, Michael Schumacher fue excluido del campeonato por colisionar deliberadamente con Jacques Villeneuve.",
        de: "Nach dem Europäischen GP 1997 in Jerez wurde Michael Schumacher aus der Meisterschaft ausgeschlossen wegen absichtlicher Kollision mit Jacques Villeneuve.",
        nl: "Na de Europese GP van 1997 in Jerez werd Michael Schumacher uitgesloten van het kampioenschap voor opzettelijk botsen met Jacques Villeneuve."
      }
    },
    {
      question: {
        en: "The 1984 Dallas Grand Prix was notable for what extreme condition?",
        es: "¿Por qué condición extrema fue notable el Gran Premio de Dallas de 1984?",
        de: "Wofür war der Dallas Grand Prix 1984 bemerkenswert für welche extreme Bedingung?",
        nl: "Waarvoor was de Dallas Grand Prix van 1984 opmerkelijk voor welke extreme conditie?"
      },
      options: [
        "Extreme heat melting track",
        "Tornado warning",
        "Snow and ice",
        "Sandstorm"
      ],
      correct: 0,
      explanation: {
        en: "The 1984 Dallas GP saw extreme heat causing the track surface to break up, with drivers suffering from heat exhaustion.",
        es: "El GP de Dallas de 1984 vio calor extremo causando que la superficie de la pista se rompiera, con pilotos sufriendo agotamiento por calor.",
        de: "Der Dallas GP 1984 sah extreme Hitze die den Streckenbelag aufbrechen ließ, wobei Fahrer unter Hitzeerschöpfung litten.",
        nl: "De Dallas GP van 1984 zag extreme hitte die het trackoppervlak liet breken, met coureurs lijdend aan hitte-uitputting."
      }
    },
    {
      question: {
        en: "Which 2003 race saw Kimi Räikkönen win by over a lap?",
        es: "¿En qué carrera de 2003 Kimi Räikkönen ganó por más de una vuelta?",
        de: "Bei welchem Rennen 2003 gewann Kimi Räikkönen mit über einer Runde Vorsprung?",
        nl: "Bij welke race in 2003 won Kimi Räikkönen met meer dan een ronde voorsprong?"
      },
      options: [
        "Malaysian Grand Prix",
        "Australian Grand Prix",
        "Hungarian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen dominated the 2003 Malaysian GP, winning by over a lap in wet conditions for McLaren.",
        es: "Kimi Räikkönen dominó el GP de Malasia de 2003, ganando por más de una vuelta en condiciones húmedas para McLaren.",
        de: "Kimi Räikkönen dominierte den Malaysischen GP 2003 und gewann bei nassen Bedingungen mit über einer Runde Vorsprung für McLaren.",
        nl: "Kimi Räikkönen domineerde de Maleisische GP van 2003, winnend met meer dan een ronde voorsprong in natte omstandigheden voor McLaren."
      }
    },
    {
      question: {
        en: "The 1960 Portuguese Grand Prix was the last race for which circuit?",
        es: "¿El Gran Premio de Portugal de 1960 fue la última carrera para qué circuito?",
        de: "Der Portugiesische Grand Prix 1960 war das letzte Rennen für welche Rennstrecke?",
        nl: "De Portugese Grand Prix van 1960 was de laatste race voor welk circuit?"
      },
      options: [
        "Porto",
        "Lisbon",
        "Monsanto",
        "Estoril"
      ],
      correct: 2,
      explanation: {
        en: "The 1960 Portuguese GP at Monsanto Park in Lisbon was the only F1 race held at this street circuit.",
        es: "El GP de Portugal de 1960 en el Parque Monsanto en Lisboa fue la única carrera de F1 celebrada en este circuito callejero.",
        de: "Der Portugiesische GP 1960 im Monsanto Park in Lissabon war das einzige F1-Rennen auf dieser Straßenstrecke.",
        nl: "De Portugese GP van 1960 in Monsanto Park in Lissabon was de enige F1-race gehouden op dit stratencircuit."
      }
    },
    {
      question: {
        en: "Which 2014 race saw Daniel Ricciardo win after both Mercedes retired?",
        es: "¿En qué carrera de 2014 Daniel Ricciardo ganó después de que ambos Mercedes se retiraran?",
        de: "Bei welchem Rennen 2014 gewann Daniel Ricciardo nachdem beide Mercedes ausfielen?",
        nl: "Bij welke race in 2014 won Daniel Ricciardo nadat beide Mercedes uitvielen?"
      },
      options: [
        "Canadian Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Daniel Ricciardo won the 2014 Hungarian GP after both Mercedes drivers retired, Red Bull's first win of the hybrid era.",
        es: "Daniel Ricciardo ganó el GP de Hungría de 2014 después de que ambos pilotos de Mercedes se retiraran, la primera victoria de Red Bull de la era híbrida.",
        de: "Daniel Ricciardo gewann den Ungarischen GP 2014 nachdem beide Mercedes-Fahrer ausfielen, Red Bulls erster Sieg der Hybrid-Ära.",
        nl: "Daniel Ricciardo won de Hongaarse GP van 2014 nadat beide Mercedes coureurs uitvielen, Red Bull's eerste overwinning van het hybride tijdperk."
      }
    },
    {
      question: {
        en: "The 1959 United States Grand Prix at Sebring was won by which driver?",
        es: "¿Qué piloto ganó el Gran Premio de Estados Unidos de 1959 en Sebring?",
        de: "Welcher Fahrer gewann den US Grand Prix 1959 in Sebring?",
        nl: "Welke coureur won de United States Grand Prix van 1959 in Sebring?"
      },
      options: [
        "Jack Brabham",
        "Stirling Moss",
        "Bruce McLaren",
        "Tony Brooks"
      ],
      correct: 2,
      explanation: {
        en: "Bruce McLaren won the 1959 US GP at Sebring at age 22, becoming the youngest F1 winner until 2003.",
        es: "Bruce McLaren ganó el GP de EE.UU. de 1959 en Sebring a los 22 años, convirtiéndose en el ganador más joven de F1 hasta 2003.",
        de: "Bruce McLaren gewann den US GP 1959 in Sebring mit 22 Jahren und wurde jüngster F1-Sieger bis 2003.",
        nl: "Bruce McLaren won de US GP van 1959 in Sebring op 22-jarige leeftijd, werd de jongste F1-winnaar tot 2003."
      }
    },
    {
      question: {
        en: "Which 2022 race saw George Russell score his first F1 victory?",
        es: "¿En qué carrera de 2022 George Russell consiguió su primera victoria en F1?",
        de: "Bei welchem Rennen 2022 erzielte George Russell seinen ersten F1-Sieg?",
        nl: "Bij welke race in 2022 behaalde George Russell zijn eerste F1-overwinning?"
      },
      options: [
        "Brazilian Grand Prix",
        "Singapore Grand Prix",
        "Hungarian Grand Prix",
        "United States Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "George Russell won the 2022 Brazilian GP at Interlagos, his first F1 victory for Mercedes.",
        es: "George Russell ganó el GP de Brasil de 2022 en Interlagos, su primera victoria en F1 para Mercedes.",
        de: "George Russell gewann den Brasilianischen GP 2022 in Interlagos, sein erster F1-Sieg für Mercedes.",
        nl: "George Russell won de Braziliaanse GP van 2022 in Interlagos, zijn eerste F1-overwinning voor Mercedes."
      }
    },
    {
      question: {
        en: "The 1983 European Grand Prix at Brands Hatch was won by which driver?",
        es: "¿Qué piloto ganó el Gran Premio de Europa de 1983 en Brands Hatch?",
        de: "Welcher Fahrer gewann den Europäischen Grand Prix 1983 in Brands Hatch?",
        nl: "Welke coureur won de Europese Grand Prix van 1983 in Brands Hatch?"
      },
      options: [
        "Alain Prost",
        "Nelson Piquet",
        "Nigel Mansell",
        "Keke Rosberg"
      ],
      correct: 1,
      explanation: {
        en: "Nelson Piquet won the 1983 European GP at Brands Hatch, securing his second World Championship.",
        es: "Nelson Piquet ganó el GP de Europa de 1983 en Brands Hatch, asegurando su segundo Campeonato Mundial.",
        de: "Nelson Piquet gewann den Europäischen GP 1983 in Brands Hatch und sicherte sich seine zweite Weltmeisterschaft.",
        nl: "Nelson Piquet won de Europese GP van 1983 in Brands Hatch, waarmee hij zijn tweede Wereldkampioenschap veiligstelde."
      }
    },
    {
      question: {
        en: "Which 2006 race saw Fernando Alonso and Michael Schumacher collide?",
        es: "¿En qué carrera de 2006 Fernando Alonso y Michael Schumacher colisionaron?",
        de: "Bei welchem Rennen 2006 kollidierten Fernando Alonso und Michael Schumacher?",
        nl: "Bij welke race in 2006 botsten Fernando Alonso en Michael Schumacher?"
      },
      options: [
        "Italian Grand Prix",
        "Japanese Grand Prix",
        "Hungarian Grand Prix",
        "Turkish Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Fernando Alonso and Michael Schumacher had a first-corner collision at the 2006 Hungarian GP, both continuing to race.",
        es: "Fernando Alonso y Michael Schumacher tuvieron una colisión en la primera curva en el GP de Hungría de 2006, ambos continuaron corriendo.",
        de: "Fernando Alonso und Michael Schumacher hatten eine Erstrundenkollis beim Ungarischen GP 2006, beide fuhren weiter.",
        nl: "Fernando Alonso en Michael Schumacher hadden een eerste-bocht botsing tijdens de Hongaarse GP van 2006, beiden bleven racen."
      }
    }
  ];

  return {
    questions: questions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level3;
}
