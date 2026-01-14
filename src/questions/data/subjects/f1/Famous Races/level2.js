const level2 = (function() {
  const questions = [
    {
      question: {
        en: "Which driver won the rain-soaked 1996 Monaco Grand Prix in a Ligier?",
        es: "¿Qué piloto ganó el lluvioso Gran Premio de Mónaco de 1996 en un Ligier?",
        de: "Welcher Fahrer gewann den verregneten Monaco Grand Prix 1996 in einem Ligier?",
        nl: "Welke coureur won de regenachtige Grand Prix van Monaco 1996 in een Ligier?"
      },
      options: [
        "Olivier Panis",
        "Martin Brundle",
        "Jean Alesi",
        "Mika Häkkinen"
      ],
      correct: 0,
      explanation: {
        en: "Olivier Panis won the chaotic 1996 Monaco GP, Ligier's last F1 victory, with only 3 cars finishing the race.",
        es: "Olivier Panis ganó el caótico GP de Mónaco de 1996, la última victoria de Ligier en F1, con solo 3 coches terminando la carrera.",
        de: "Olivier Panis gewann den chaotischen Monaco GP 1996, Ligiers letzter F1-Sieg, wobei nur 3 Autos das Rennen beendeten.",
        nl: "Olivier Panis won de chaotische GP van Monaco 1996, Ligiers laatste F1-overwinning, met slechts 3 auto's die de race uitreden."
      }
    },
    {
      question: {
        en: "The 1971 Italian Grand Prix at Monza had the closest finish ever with how many seconds?",
        es: "¿El Gran Premio de Italia de 1971 en Monza tuvo el final más cerrado de la historia con cuántos segundos?",
        de: "Der Italienische Grand Prix 1971 in Monza hatte das knappste Finish aller Zeiten mit wie vielen Sekunden?",
        nl: "De Italiaanse Grand Prix van 1971 in Monza had de nauwste finish ooit met hoeveel seconden?"
      },
      options: [
        "0.01 seconds",
        "0.61 seconds",
        "0.28 seconds",
        "0.05 seconds"
      ],
      correct: 0,
      explanation: {
        en: "Peter Gethin won by 0.01 seconds in 1971, with 5 cars finishing within 0.61 seconds in the closest finish in F1 history.",
        es: "Peter Gethin ganó por 0.01 segundos en 1971, con 5 coches terminando dentro de 0.61 segundos en el final más cerrado en la historia de la F1.",
        de: "Peter Gethin gewann 1971 mit 0.01 Sekunden Vorsprung, wobei 5 Autos innerhalb von 0.61 Sekunden im Ziel waren, das knappste Finish der F1-Geschichte.",
        nl: "Peter Gethin won met 0.01 seconden in 1971, met 5 auto's die binnen 0.61 seconden finishten in de nauwste finish in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which 2009 race saw Jenson Button clinch the drivers' championship?",
        es: "¿En qué carrera de 2009 Jenson Button aseguró el campeonato de pilotos?",
        de: "Bei welchem Rennen 2009 sicherte sich Jenson Button die Fahrerweltmeisterschaft?",
        nl: "Bij welke race in 2009 behaalde Jenson Button het rijderskampioenschap?"
      },
      options: [
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Singapore Grand Prix",
        "Chinese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jenson Button secured his only championship at the 2009 Brazilian Grand Prix driving for Brawn GP.",
        es: "Jenson Button aseguró su único campeonato en el Gran Premio de Brasil de 2009 conduciendo para Brawn GP.",
        de: "Jenson Button sicherte sich seine einzige Meisterschaft beim Brasilianischen Grand Prix 2009 für Brawn GP.",
        nl: "Jenson Button behaalde zijn enige kampioenschap tijdens de Braziliaanse Grand Prix van 2009 rijdend voor Brawn GP."
      }
    },
    {
      question: {
        en: "The 1998 Belgian Grand Prix saw how many cars eliminated on the first lap?",
        es: "¿Cuántos coches fueron eliminados en la primera vuelta del Gran Premio de Bélgica de 1998?",
        de: "Wie viele Autos schieden in der ersten Runde des Belgischen Grand Prix 1998 aus?",
        nl: "Hoeveel auto's werden uitgeschakeld in de eerste ronde van de Belgische Grand Prix van 1998?"
      },
      options: [
        "8 cars",
        "10 cars",
        "13 cars",
        "15 cars"
      ],
      correct: 2,
      explanation: {
        en: "The 1998 Belgian GP started in heavy rain, with 13 cars eliminated in a massive first-lap crash at La Source.",
        es: "El GP de Bélgica de 1998 comenzó bajo fuerte lluvia, con 13 coches eliminados en un enorme accidente en la primera vuelta en La Source.",
        de: "Der Belgische GP 1998 startete bei starkem Regen, wobei 13 Autos in einem massiven Unfall in der ersten Runde bei La Source ausschieden.",
        nl: "De Belgische GP van 1998 startte in zware regen, met 13 auto's uitgeschakeld in een massale eerste ronde crash bij La Source."
      }
    },
    {
      question: {
        en: "Which 1984 race saw Ayrton Senna's first podium finish?",
        es: "¿En qué carrera de 1984 Ayrton Senna obtuvo su primer podio?",
        de: "Bei welchem Rennen 1984 erreichte Ayrton Senna sein erstes Podium?",
        nl: "Bij welke race in 1984 behaalde Ayrton Senna zijn eerste podiumplaats?"
      },
      options: [
        "Brazilian Grand Prix",
        "Monaco Grand Prix",
        "British Grand Prix",
        "Portuguese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Senna's first podium was 2nd place at the rain-shortened 1984 Monaco GP in a Toleman, showing his wet-weather brilliance.",
        es: "El primer podio de Senna fue el segundo lugar en el acortado por lluvia GP de Mónaco de 1984 en un Toleman, mostrando su brillantez en condiciones húmedas.",
        de: "Sennas erstes Podium war Platz 2 beim regenverkürzten Monaco GP 1984 in einem Toleman, was seine Regenfahrkünste zeigte.",
        nl: "Senna's eerste podium was een 2e plaats tijdens de door regen verkorte GP van Monaco 1984 in een Toleman, wat zijn nat-weer kunnen toonde."
      }
    },
    {
      question: {
        en: "The 2014 Bahrain Grand Prix featured an epic battle between which two drivers?",
        es: "¿El Gran Premio de Baréin de 2014 presentó una batalla épica entre qué dos pilotos?",
        de: "Der Bahrain Grand Prix 2014 zeigte einen epischen Kampf zwischen welchen zwei Fahrern?",
        nl: "De Bahrein Grand Prix van 2014 toonde een episch gevecht tussen welke twee coureurs?"
      },
      options: [
        "Hamilton-Rosberg",
        "Vettel-Webber",
        "Alonso-Räikkönen",
        "Ricciardo-Verstappen"
      ],
      correct: 0,
      explanation: {
        en: "The 2014 Bahrain GP featured an intense wheel-to-wheel battle between Mercedes teammates Hamilton and Rosberg for the win.",
        es: "El GP de Baréin de 2014 presentó una intensa batalla rueda a rueda entre los compañeros de Mercedes Hamilton y Rosberg por la victoria.",
        de: "Der Bahrain GP 2014 zeigte einen intensiven Zweikampf zwischen den Mercedes-Teamkollegen Hamilton und Rosberg um den Sieg.",
        nl: "De Bahrein GP van 2014 toonde een intense wiel-aan-wiel strijd tussen Mercedes teamgenoten Hamilton en Rosberg voor de overwinning."
      }
    },
    {
      question: {
        en: "Which 1950s race was held on the Pescara Circuit, the longest F1 track ever?",
        es: "¿Qué carrera de los años 50 se celebró en el Circuito de Pescara, la pista de F1 más larga de la historia?",
        de: "Welches Rennen der 1950er fand auf dem Pescara Circuit statt, der längsten F1-Strecke aller Zeiten?",
        nl: "Welke race uit de jaren 50 werd gehouden op het Pescara Circuit, het langste F1 circuit ooit?"
      },
      options: [
        "1955 Italian Grand Prix",
        "1957 Pescara Grand Prix",
        "1953 Italian Grand Prix",
        "1958 Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1957 Pescara Grand Prix was held on a 25.8 km public road circuit, the longest ever used in F1.",
        es: "El Gran Premio de Pescara de 1957 se celebró en un circuito de carretera pública de 25.8 km, el más largo jamás utilizado en F1.",
        de: "Der Pescara Grand Prix 1957 fand auf einer 25.8 km langen öffentlichen Straßenstrecke statt, der längsten jemals in der F1 genutzten.",
        nl: "De Pescara Grand Prix van 1957 werd gehouden op een 25.8 km openbaar wegencircuit, het langste ooit gebruikt in F1."
      }
    },
    {
      question: {
        en: "The 2007 European Grand Prix at Nürburgring was won by which driver in the rain?",
        es: "¿Qué piloto ganó bajo la lluvia el Gran Premio de Europa de 2007 en Nürburgring?",
        de: "Welcher Fahrer gewann den Europäischen Grand Prix 2007 am Nürburgring im Regen?",
        nl: "Welke coureur won de Europese Grand Prix van 2007 op de Nürburgring in de regen?"
      },
      options: [
        "Lewis Hamilton",
        "Fernando Alonso",
        "Kimi Räikkönen",
        "Felipe Massa"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton dominated the wet 2007 European GP at Nürburgring, winning by over 8 seconds in his rookie season.",
        es: "Lewis Hamilton dominó el húmedo GP de Europa de 2007 en Nürburgring, ganando por más de 8 segundos en su temporada de novato.",
        de: "Lewis Hamilton dominierte den nassen Europäischen GP 2007 am Nürburgring und gewann in seiner Rookie-Saison mit über 8 Sekunden Vorsprung.",
        nl: "Lewis Hamilton domineerde de natte Europese GP van 2007 op de Nürburgring, winnend met meer dan 8 seconden in zijn rookie seizoen."
      }
    },
    {
      question: {
        en: "Which 1979 race featured the famous Villeneuve-Arnoux battle?",
        es: "¿Qué carrera de 1979 presentó la famosa batalla Villeneuve-Arnoux?",
        de: "Welches Rennen 1979 zeigte den berühmten Villeneuve-Arnoux-Kampf?",
        nl: "Welke race in 1979 toonde het beroemde Villeneuve-Arnoux gevecht?"
      },
      options: [
        "British Grand Prix",
        "French Grand Prix",
        "Belgian Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1979 French GP at Dijon saw an epic final-lap battle between Gilles Villeneuve and René Arnoux for 2nd place.",
        es: "El GP de Francia de 1979 en Dijon vio una batalla épica en la última vuelta entre Gilles Villeneuve y René Arnoux por el segundo lugar.",
        de: "Der Französische GP 1979 in Dijon sah einen epischen Kampf in der letzten Runde zwischen Gilles Villeneuve und René Arnoux um Platz 2.",
        nl: "De Franse GP van 1979 in Dijon zag een episch laatste-ronde gevecht tussen Gilles Villeneuve en René Arnoux voor de 2e plaats."
      }
    },
    {
      question: {
        en: "The 2017 Azerbaijan Grand Prix featured which controversial incident?",
        es: "¿El Gran Premio de Azerbaiyán de 2017 presentó qué incidente controvertido?",
        de: "Der Aserbaidschanische Grand Prix 2017 zeigte welchen kontroversen Vorfall?",
        nl: "De Azerbeidzjaanse Grand Prix van 2017 toonde welk controversieel incident?"
      },
      options: [
        "Vettel-Hamilton road rage",
        "Red Bull collision",
        "Pit lane speeding",
        "Track limits abuse"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel drove alongside Lewis Hamilton and deliberately hit his car after a safety car restart, earning a 10-second penalty.",
        es: "Sebastian Vettel condujo junto a Lewis Hamilton y golpeó deliberadamente su coche después de un reinicio del coche de seguridad, ganándose una penalización de 10 segundos.",
        de: "Sebastian Vettel fuhr neben Lewis Hamilton und rammte absichtlich dessen Auto nach einem Safety-Car-Neustart, was ihm eine 10-Sekunden-Strafe einbrachte.",
        nl: "Sebastian Vettel reed naast Lewis Hamilton en raakte opzettelijk zijn auto na een safety car herstart, wat hem een 10-seconden straf opleverde."
      }
    },
    {
      question: {
        en: "Which 1961 race saw Wolfgang von Trips fatally crash, killing 15 spectators?",
        es: "¿En qué carrera de 1961 Wolfgang von Trips tuvo un accidente fatal, matando a 15 espectadores?",
        de: "Bei welchem Rennen 1961 verunglückte Wolfgang von Trips tödlich und tötete 15 Zuschauer?",
        nl: "Bij welke race in 1961 crashte Wolfgang von Trips fataal, waarbij 15 toeschouwers omkwamen?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "French Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1961 Italian GP at Monza saw a horrific accident where von Trips' Ferrari crashed into the crowd, F1's deadliest accident.",
        es: "El GP de Italia de 1961 en Monza vio un horrible accidente donde el Ferrari de von Trips se estrelló contra la multitud, el accidente más mortífero de la F1.",
        de: "Der Italienische GP 1961 in Monza sah einen schrecklichen Unfall, bei dem von Trips' Ferrari in die Menge krachte, F1s tödlichster Unfall.",
        nl: "De Italiaanse GP van 1961 in Monza zag een verschrikkelijk ongeluk waarbij von Trips' Ferrari in de menigte crashte, F1's dodelijkste ongeluk."
      }
    },
    {
      question: {
        en: "The 2013 Malaysian Grand Prix featured which team orders controversy?",
        es: "¿El Gran Premio de Malasia de 2013 presentó qué controversia de órdenes de equipo?",
        de: "Der Malaysische Grand Prix 2013 zeigte welche Teamorder-Kontroverse?",
        nl: "De Maleisische Grand Prix van 2013 toonde welke team orders controverse?"
      },
      options: [
        "Multi-21 incident",
        "Fernando is faster",
        "Not bad for number 2",
        "Let them race"
      ],
      correct: 0,
      explanation: {
        en: "The 'Multi-21' incident saw Sebastian Vettel ignore team orders and overtake Mark Webber for the win at Red Bull.",
        es: "El incidente 'Multi-21' vio a Sebastian Vettel ignorar las órdenes del equipo y adelantar a Mark Webber para la victoria en Red Bull.",
        de: "Der 'Multi-21'-Vorfall sah Sebastian Vettel Teamorders ignorieren und Mark Webber bei Red Bull für den Sieg überholen.",
        nl: "Het 'Multi-21' incident zag Sebastian Vettel team orders negeren en Mark Webber inhalen voor de overwinning bij Red Bull."
      }
    },
    {
      question: {
        en: "Which 1985 race saw Alain Prost and Michele Alboreto run out of fuel on the final lap?",
        es: "¿En qué carrera de 1985 Alain Prost y Michele Alboreto se quedaron sin combustible en la última vuelta?",
        de: "Bei welchem Rennen 1985 ging Alain Prost und Michele Alboreto in der letzten Runde das Benzin aus?",
        nl: "Bij welke race in 1985 kwamen Alain Prost en Michele Alboreto zonder brandstof in de laatste ronde?"
      },
      options: [
        "San Marino Grand Prix",
        "Monaco Grand Prix",
        "British Grand Prix",
        "German Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The 1985 San Marino GP saw both leaders run out of fuel on the last lap, allowing Elio de Angelis to win.",
        es: "El GP de San Marino de 1985 vio a ambos líderes quedarse sin combustible en la última vuelta, permitiendo que Elio de Angelis ganara.",
        de: "Der San-Marino-GP 1985 sah beide Führenden in der letzten Runde ohne Benzin, wodurch Elio de Angelis gewinnen konnte.",
        nl: "De San Marino GP van 1985 zag beide leiders zonder brandstof in de laatste ronde, waardoor Elio de Angelis kon winnen."
      }
    },
    {
      question: {
        en: "The 2016 Monaco Grand Prix saw which driver win after a strategy error?",
        es: "¿Qué piloto ganó el Gran Premio de Mónaco de 2016 después de un error de estrategia?",
        de: "Welcher Fahrer gewann den Monaco Grand Prix 2016 nach einem Strategiefehler?",
        nl: "Welke coureur won de Grand Prix van Monaco 2016 na een strategie fout?"
      },
      options: [
        "Lewis Hamilton",
        "Daniel Ricciardo",
        "Nico Rosberg",
        "Sebastian Vettel"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton won after Red Bull's pit stop error for race leader Daniel Ricciardo cost him the victory at Monaco 2016.",
        es: "Lewis Hamilton ganó después de que el error en la parada en boxes de Red Bull para el líder de la carrera Daniel Ricciardo le costara la victoria en Mónaco 2016.",
        de: "Lewis Hamilton gewann nachdem Red Bulls Boxenstopp-Fehler für Rennführer Daniel Ricciardo ihm den Sieg in Monaco 2016 kostete.",
        nl: "Lewis Hamilton won nadat Red Bull's pitstop fout voor raceleider Daniel Ricciardo hem de overwinning in Monaco 2016 kostte."
      }
    },
    {
      question: {
        en: "Which 1968 race was the first F1 victory for a turbocharged car?",
        es: "¿Qué carrera de 1968 fue la primera victoria en F1 para un coche turboalimentado?",
        de: "Welches Rennen 1968 war der erste F1-Sieg für ein Turbo-Auto?",
        nl: "Welke race in 1968 was de eerste F1-overwinning voor een turbowagen?"
      },
      options: [
        "Dutch Grand Prix",
        "Belgian Grand Prix",
        "French Grand Prix",
        "German Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The 1968 Dutch GP saw no turbocharged victory; the first turbo win wasn't until 1979. This is a trick question!",
        es: "El GP de Holanda de 1968 no vio victoria turboalimentada; la primera victoria turbo no fue hasta 1979. ¡Esta es una pregunta trampa!",
        de: "Der Holländische GP 1968 sah keinen Turbo-Sieg; der erste Turbo-Sieg kam erst 1979. Das ist eine Trickfrage!",
        nl: "De Nederlandse GP van 1968 zag geen turbo-overwinning; de eerste turbo overwinning was pas in 1979. Dit is een strikvraag!"
      }
    },
    {
      question: {
        en: "The 2020 Sakhir Grand Prix saw which driver score their first F1 victory?",
        es: "¿Qué piloto consiguió su primera victoria en F1 en el Gran Premio de Sakhir de 2020?",
        de: "Welcher Fahrer erzielte beim Sakhir Grand Prix 2020 seinen ersten F1-Sieg?",
        nl: "Welke coureur behaalde zijn eerste F1-overwinning tijdens de Sakhir Grand Prix van 2020?"
      },
      options: [
        "George Russell",
        "Sergio Pérez",
        "Pierre Gasly",
        "Esteban Ocon"
      ],
      correct: 1,
      explanation: {
        en: "Sergio Pérez won the 2020 Sakhir GP for Racing Point after a chaotic race, while George Russell nearly won for Mercedes.",
        es: "Sergio Pérez ganó el GP de Sakhir de 2020 para Racing Point después de una carrera caótica, mientras George Russell casi ganó para Mercedes.",
        de: "Sergio Pérez gewann den Sakhir GP 2020 für Racing Point nach einem chaotischen Rennen, während George Russell fast für Mercedes gewann.",
        nl: "Sergio Pérez won de Sakhir GP van 2020 voor Racing Point na een chaotische race, terwijl George Russell bijna won voor Mercedes."
      }
    },
    {
      question: {
        en: "Which 1993 race saw Ayrton Senna's last victory?",
        es: "¿En qué carrera de 1993 Ayrton Senna obtuvo su última victoria?",
        de: "Bei welchem Rennen 1993 erzielte Ayrton Senna seinen letzten Sieg?",
        nl: "Bij welke race in 1993 behaalde Ayrton Senna zijn laatste overwinning?"
      },
      options: [
        "Brazilian Grand Prix",
        "Monaco Grand Prix",
        "Australian Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Senna's final victory was the 1993 Australian Grand Prix in Adelaide, his 41st and last F1 win before his death in 1994.",
        es: "La última victoria de Senna fue el Gran Premio de Australia de 1993 en Adelaida, su victoria número 41 y última en F1 antes de su muerte en 1994.",
        de: "Sennas letzter Sieg war der Australische Grand Prix 1993 in Adelaide, sein 41. und letzter F1-Sieg vor seinem Tod 1994.",
        nl: "Senna's laatste overwinning was de Australische Grand Prix van 1993 in Adelaide, zijn 41e en laatste F1-overwinning voor zijn dood in 1994."
      }
    },
    {
      question: {
        en: "The 1981 Las Vegas Grand Prix decided the championship in whose favor?",
        es: "¿A favor de quién decidió el campeonato el Gran Premio de Las Vegas de 1981?",
        de: "Zugunsten von wem entschied der Las Vegas Grand Prix 1981 die Meisterschaft?",
        nl: "In wiens voordeel besliste de Las Vegas Grand Prix van 1981 het kampioenschap?"
      },
      options: [
        "Alan Jones",
        "Carlos Reutemann",
        "Nelson Piquet",
        "Jacques Laffite"
      ],
      correct: 2,
      explanation: {
        en: "Nelson Piquet won the 1981 championship at the Las Vegas GP, finishing 5th while rival Carlos Reutemann finished 8th.",
        es: "Nelson Piquet ganó el campeonato de 1981 en el GP de Las Vegas, terminando 5º mientras su rival Carlos Reutemann terminó 8º.",
        de: "Nelson Piquet gewann die Meisterschaft 1981 beim Las Vegas GP, wurde Fünfter während Rivale Carlos Reutemann Achter wurde.",
        nl: "Nelson Piquet won het kampioenschap van 1981 tijdens de Las Vegas GP, eindigend als 5e terwijl rivaal Carlos Reutemann 8e werd."
      }
    },
    {
      question: {
        en: "Which 2001 race featured Michael Schumacher's emotional first win after 9/11?",
        es: "¿Qué carrera de 2001 presentó la emotiva primera victoria de Michael Schumacher después del 11 de septiembre?",
        de: "Welches Rennen 2001 zeigte Michael Schumachers emotionalen ersten Sieg nach 9/11?",
        nl: "Welke race in 2001 toonde Michael Schumachers emotionele eerste overwinning na 9/11?"
      },
      options: [
        "Italian Grand Prix",
        "United States Grand Prix",
        "Japanese Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher won the 2001 Italian GP at Monza two weeks after 9/11, securing his 4th championship in an emotional race.",
        es: "Michael Schumacher ganó el GP de Italia de 2001 en Monza dos semanas después del 11/9, asegurando su cuarto campeonato en una carrera emotiva.",
        de: "Michael Schumacher gewann den Italienischen GP 2001 in Monza zwei Wochen nach 9/11 und sicherte sich seine 4. Meisterschaft in einem emotionalen Rennen.",
        nl: "Michael Schumacher won de Italiaanse GP van 2001 in Monza twee weken na 9/11, waarmee hij zijn 4e kampioenschap veiligstelde in een emotionele race."
      }
    },
    {
      question: {
        en: "The 2004 Monaco Grand Prix saw which Jaguar driver score the team's only podium?",
        es: "¿Qué piloto de Jaguar consiguió el único podio del equipo en el Gran Premio de Mónaco de 2004?",
        de: "Welcher Jaguar-Fahrer erzielte beim Monaco Grand Prix 2004 das einzige Podium des Teams?",
        nl: "Welke Jaguar-coureur behaalde het enige podium van het team tijdens de Grand Prix van Monaco 2004?"
      },
      options: [
        "Mark Webber",
        "Christian Klien",
        "Eddie Irvine",
        "Justin Wilson"
      ],
      correct: 0,
      explanation: {
        en: "Mark Webber finished 3rd at the 2004 Monaco GP, Jaguar Racing's only podium finish in their F1 history.",
        es: "Mark Webber terminó 3º en el GP de Mónaco de 2004, el único podio de Jaguar Racing en su historia en F1.",
        de: "Mark Webber wurde Dritter beim Monaco GP 2004, Jaguar Racings einziges Podium in ihrer F1-Geschichte.",
        nl: "Mark Webber eindigde als 3e tijdens de GP van Monaco 2004, Jaguar Racing's enige podium in hun F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which 1992 race saw Nigel Mansell clinch his only championship?",
        es: "¿En qué carrera de 1992 Nigel Mansell aseguró su único campeonato?",
        de: "Bei welchem Rennen 1992 sicherte sich Nigel Mansell seine einzige Meisterschaft?",
        nl: "Bij welke race in 1992 behaalde Nigel Mansell zijn enige kampioenschap?"
      },
      options: [
        "British Grand Prix",
        "Hungarian Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Nigel Mansell secured the 1992 championship at the Hungarian GP with 5 races still remaining, dominating in the Williams.",
        es: "Nigel Mansell aseguró el campeonato de 1992 en el GP de Hungría con 5 carreras aún por disputar, dominando en el Williams.",
        de: "Nigel Mansell sicherte sich die Meisterschaft 1992 beim Ungarischen GP mit noch 5 verbleibenden Rennen, dominierend im Williams.",
        nl: "Nigel Mansell behaalde het kampioenschap van 1992 tijdens de Hongaarse GP met nog 5 races te gaan, dominerend in de Williams."
      }
    },
    {
      question: {
        en: "The 1967 Italian Grand Prix was won by which driver in a Honda?",
        es: "¿Qué piloto ganó el Gran Premio de Italia de 1967 en un Honda?",
        de: "Welcher Fahrer gewann den Italienischen Grand Prix 1967 in einem Honda?",
        nl: "Welke coureur won de Italiaanse Grand Prix van 1967 in een Honda?"
      },
      options: [
        "John Surtees",
        "Richie Ginther",
        "Dan Gurney",
        "Jackie Stewart"
      ],
      correct: 0,
      explanation: {
        en: "John Surtees won the 1967 Italian GP at Monza, Honda's only F1 victory as a constructor until the 1980s.",
        es: "John Surtees ganó el GP de Italia de 1967 en Monza, la única victoria de Honda en F1 como constructor hasta los años 80.",
        de: "John Surtees gewann den Italienischen GP 1967 in Monza, Hondas einziger F1-Sieg als Konstrukteur bis in die 1980er.",
        nl: "John Surtees won de Italiaanse GP van 1967 in Monza, Honda's enige F1-overwinning als constructor tot de jaren 80."
      }
    },
    {
      question: {
        en: "Which 2018 race saw Max Verstappen win from 14th on the grid?",
        es: "¿En qué carrera de 2018 Max Verstappen ganó desde el puesto 14 en la parrilla?",
        de: "Bei welchem Rennen 2018 gewann Max Verstappen vom 14. Startplatz?",
        nl: "Bij welke race in 2018 won Max Verstappen vanaf de 14e positie op de grid?"
      },
      options: [
        "Chinese Grand Prix",
        "Mexican Grand Prix",
        "Brazilian Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won the 2018 Mexican GP from 14th on the grid after qualifying penalties, one of his greatest drives.",
        es: "Max Verstappen ganó el GP de México de 2018 desde el puesto 14 en la parrilla después de penalizaciones en clasificación, una de sus mejores carreras.",
        de: "Max Verstappen gewann den Mexikanischen GP 2018 vom 14. Startplatz nach Qualifying-Strafen, eine seiner größten Fahrten.",
        nl: "Max Verstappen won de Mexicaanse GP van 2018 vanaf de 14e positie op de grid na kwalificatie straffen, een van zijn grootste races."
      }
    },
    {
      question: {
        en: "The 1973 Dutch Grand Prix saw which driver score their only F1 victory?",
        es: "¿Qué piloto consiguió su única victoria en F1 en el Gran Premio de Holanda de 1973?",
        de: "Welcher Fahrer erzielte beim Holländischen Grand Prix 1973 seinen einzigen F1-Sieg?",
        nl: "Welke coureur behaalde zijn enige F1-overwinning tijdens de Nederlandse Grand Prix van 1973?"
      },
      options: [
        "Jackie Oliver",
        "Peter Revson",
        "François Cevert",
        "Chris Amon"
      ],
      correct: 1,
      explanation: {
        en: "Peter Revson won the 1973 Dutch GP at Zandvoort, his second and final F1 victory for McLaren.",
        es: "Peter Revson ganó el GP de Holanda de 1973 en Zandvoort, su segunda y última victoria en F1 para McLaren.",
        de: "Peter Revson gewann den Holländischen GP 1973 in Zandvoort, sein zweiter und letzter F1-Sieg für McLaren.",
        nl: "Peter Revson won de Nederlandse GP van 1973 in Zandvoort, zijn tweede en laatste F1-overwinning voor McLaren."
      }
    },
    {
      question: {
        en: "Which 2006 race featured Fernando Alonso's championship-winning performance?",
        es: "¿Qué carrera de 2006 presentó la actuación ganadora del campeonato de Fernando Alonso?",
        de: "Welches Rennen 2006 zeigte Fernando Alonsos meisterschaftsgewinnende Leistung?",
        nl: "Welke race in 2006 toonde Fernando Alonso's kampioenschap-winnende prestatie?"
      },
      options: [
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Chinese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Fernando Alonso secured his second consecutive championship at the 2006 Chinese GP with a 2nd place finish.",
        es: "Fernando Alonso aseguró su segundo campeonato consecutivo en el GP de China de 2006 con un segundo lugar.",
        de: "Fernando Alonso sicherte sich seine zweite aufeinanderfolgende Meisterschaft beim Chinesischen GP 2006 mit Platz 2.",
        nl: "Fernando Alonso behaalde zijn tweede opeenvolgende kampioenschap tijdens de Chinese GP van 2006 met een 2e plaats."
      }
    },
    {
      question: {
        en: "The 1978 Swedish Grand Prix was the first F1 win for which team?",
        es: "¿El Gran Premio de Suecia de 1978 fue la primera victoria en F1 para qué equipo?",
        de: "Der Schwedische Grand Prix 1978 war der erste F1-Sieg für welches Team?",
        nl: "De Zweedse Grand Prix van 1978 was de eerste F1-overwinning voor welk team?"
      },
      options: [
        "Lotus",
        "Brabham",
        "Tyrrell",
        "Williams"
      ],
      correct: 0,
      explanation: {
        en: "The 1978 Swedish GP saw Lotus score their first win with the revolutionary ground-effect Lotus 79, driven by Andretti.",
        es: "El GP de Suecia de 1978 vio a Lotus conseguir su primera victoria con el revolucionario Lotus 79 de efecto suelo, conducido por Andretti.",
        de: "Der Schwedische GP 1978 sah Lotus ihren ersten Sieg mit dem revolutionären Ground-Effect Lotus 79 erzielen, gefahren von Andretti.",
        nl: "De Zweedse GP van 1978 zag Lotus hun eerste overwinning behalen met de revolutionaire ground-effect Lotus 79, bestuurd door Andretti."
      }
    },
    {
      question: {
        en: "Which 1991 race saw a mass start-line accident eliminate half the field?",
        es: "¿Qué carrera de 1991 vio un accidente masivo en la línea de salida que eliminó la mitad del campo?",
        de: "Welches Rennen 1991 sah einen Massenunfall an der Startlinie, der die Hälfte des Feldes ausschaltete?",
        nl: "Welke race in 1991 zag een massa startlijn ongeluk waarbij de helft van het veld werd uitgeschakeld?"
      },
      options: [
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "Portuguese Grand Prix",
        "Spanish Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The 1991 Belgian GP at Spa saw a massive accident at the start eliminating many cars, won by Senna.",
        es: "El GP de Bélgica de 1991 en Spa vio un accidente masivo al inicio eliminando muchos coches, ganado por Senna.",
        de: "Der Belgische GP 1991 in Spa sah einen massiven Unfall beim Start, der viele Autos ausschaltete, gewonnen von Senna.",
        nl: "De Belgische GP van 1991 in Spa zag een massaal ongeluk bij de start waarbij veel auto's werden uitgeschakeld, gewonnen door Senna."
      }
    },
    {
      question: {
        en: "The 2015 United States Grand Prix saw which driver win their first race?",
        es: "¿Qué piloto ganó su primera carrera en el Gran Premio de Estados Unidos de 2015?",
        de: "Welcher Fahrer gewann beim US Grand Prix 2015 sein erstes Rennen?",
        nl: "Welke coureur won zijn eerste race tijdens de United States Grand Prix van 2015?"
      },
      options: [
        "Max Verstappen",
        "Carlos Sainz",
        "Lewis Hamilton",
        "Nico Rosberg"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton won the 2015 US GP and secured his third championship, though this wasn't his first race win.",
        es: "Lewis Hamilton ganó el GP de EE.UU. de 2015 y aseguró su tercer campeonato, aunque esta no fue su primera victoria en carrera.",
        de: "Lewis Hamilton gewann den US GP 2015 und sicherte sich seine dritte Meisterschaft, obwohl dies nicht sein erster Rennsieg war.",
        nl: "Lewis Hamilton won de US GP van 2015 en behaalde zijn derde kampioenschap, hoewel dit niet zijn eerste race overwinning was."
      }
    },
    {
      question: {
        en: "Which 1954 race was the first German Grand Prix at the Nürburgring?",
        es: "¿Qué carrera de 1954 fue el primer Gran Premio de Alemania en el Nürburgring?",
        de: "Welches Rennen 1954 war der erste Deutsche Grand Prix am Nürburgring?",
        nl: "Welke race in 1954 was de eerste Duitse Grand Prix op de Nürburgring?"
      },
      options: [
        "Eifelrennen",
        "German Grand Prix",
        "European Grand Prix",
        "Rhineland Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1954 German Grand Prix at the Nürburgring Nordschleife was won by Juan Manuel Fangio for Mercedes.",
        es: "El Gran Premio de Alemania de 1954 en el Nürburgring Nordschleife fue ganado por Juan Manuel Fangio para Mercedes.",
        de: "Der Deutsche Grand Prix 1954 auf der Nürburgring Nordschleife wurde von Juan Manuel Fangio für Mercedes gewonnen.",
        nl: "De Duitse Grand Prix van 1954 op de Nürburgring Nordschleife werd gewonnen door Juan Manuel Fangio voor Mercedes."
      }
    },
    {
      question: {
        en: "The 2009 Hungarian Grand Prix saw which driver's final F1 victory?",
        es: "¿Qué piloto obtuvo su última victoria en F1 en el Gran Premio de Hungría de 2009?",
        de: "Welcher Fahrer erzielte beim Ungarischen Grand Prix 2009 seinen letzten F1-Sieg?",
        nl: "Welke coureur behaalde zijn laatste F1-overwinning tijdens de Hongaarse Grand Prix van 2009?"
      },
      options: [
        "Kimi Räikkönen",
        "Felipe Massa",
        "Lewis Hamilton",
        "Heikki Kovalainen"
      ],
      correct: 3,
      explanation: {
        en: "Heikki Kovalainen won the 2009 Hungarian GP, his only F1 victory, in a dominant display for McLaren.",
        es: "Heikki Kovalainen ganó el GP de Hungría de 2009, su única victoria en F1, en una exhibición dominante para McLaren.",
        de: "Heikki Kovalainen gewann den Ungarischen GP 2009, sein einziger F1-Sieg, in einer dominanten Vorstellung für McLaren.",
        nl: "Heikki Kovalainen won de Hongaarse GP van 2009, zijn enige F1-overwinning, in een dominante vertoning voor McLaren."
      }
    },
    {
      question: {
        en: "Which 1969 race was the first victory for the Matra team?",
        es: "¿Qué carrera de 1969 fue la primera victoria para el equipo Matra?",
        de: "Welches Rennen 1969 war der erste Sieg für das Matra-Team?",
        nl: "Welke race in 1969 was de eerste overwinning voor het Matra team?"
      },
      options: [
        "South African Grand Prix",
        "Spanish Grand Prix",
        "Monaco Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jackie Stewart won the 1969 South African GP, Matra's first F1 victory, starting a dominant season.",
        es: "Jackie Stewart ganó el GP de Sudáfrica de 1969, la primera victoria de Matra en F1, comenzando una temporada dominante.",
        de: "Jackie Stewart gewann den Südafrikanischen GP 1969, Matras erster F1-Sieg, und startete eine dominante Saison.",
        nl: "Jackie Stewart won de Zuid-Afrikaanse GP van 1969, Matra's eerste F1-overwinning, het begin van een dominant seizoen."
      }
    },
    {
      question: {
        en: "The 2002 Austrian Grand Prix featured which controversial team orders?",
        es: "¿El Gran Premio de Austria de 2002 presentó qué controvertidas órdenes de equipo?",
        de: "Der Österreichische Grand Prix 2002 zeigte welche kontroversen Teamorders?",
        nl: "De Oostenrijkse Grand Prix van 2002 toonde welke controversiële team orders?"
      },
      options: [
        "Barrichello let Schumacher win",
        "Coulthard let Häkkinen win",
        "Webber let Vettel win",
        "Bottas let Hamilton win"
      ],
      correct: 0,
      explanation: {
        en: "Rubens Barrichello was ordered to let Michael Schumacher pass on the final straight, causing major controversy and leading to team orders ban.",
        es: "Rubens Barrichello recibió la orden de dejar pasar a Michael Schumacher en la recta final, causando gran controversia y llevando a la prohibición de órdenes de equipo.",
        de: "Rubens Barrichello wurde angewiesen, Michael Schumacher auf der Zielgeraden vorbeilassen, was große Kontroversen auslöste und zum Teamorder-Verbot führte.",
        nl: "Rubens Barrichello kreeg de opdracht om Michael Schumacher te laten passeren op het rechte stuk, wat grote controverse veroorzaakte en leidde tot het team orders verbod."
      }
    },
    {
      question: {
        en: "Which 1983 race saw the debut of turbo power for Renault's return?",
        es: "¿Qué carrera de 1983 vio el debut del poder turbo para el regreso de Renault?",
        de: "Welches Rennen 1983 sah das Debüt von Turbo-Power für Renaults Rückkehr?",
        nl: "Welke race in 1983 zag het debuut van turbo power voor Renault's terugkeer?"
      },
      options: [
        "French Grand Prix",
        "Brazilian Grand Prix",
        "British Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Renault had already been using turbo engines since 1977; the 1983 Brazilian GP saw Nelson Piquet win for Brabham-BMW's turbo.",
        es: "Renault ya había estado usando motores turbo desde 1977; el GP de Brasil de 1983 vio a Nelson Piquet ganar para el turbo Brabham-BMW.",
        de: "Renault nutzte bereits seit 1977 Turbomotoren; der Brasilianische GP 1983 sah Nelson Piquet für Brabham-BMWs Turbo gewinnen.",
        nl: "Renault gebruikte al sinds 1977 turbomotoren; de Braziliaanse GP van 1983 zag Nelson Piquet winnen voor Brabham-BMW's turbo."
      }
    },
    {
      question: {
        en: "The 2019 Italian Grand Prix saw which driver score their only podium for Racing Point?",
        es: "¿Qué piloto consiguió su único podio para Racing Point en el Gran Premio de Italia de 2019?",
        de: "Welcher Fahrer erzielte beim Italienischen Grand Prix 2019 sein einziges Podium für Racing Point?",
        nl: "Welke coureur behaalde zijn enige podium voor Racing Point tijdens de Italiaanse Grand Prix van 2019?"
      },
      options: [
        "Sergio Pérez",
        "Lance Stroll",
        "Nico Hülkenberg",
        "Esteban Ocon"
      ],
      correct: 1,
      explanation: {
        en: "Lance Stroll finished 3rd at the 2019 Italian GP at Monza, his first podium since his rookie season.",
        es: "Lance Stroll terminó 3º en el GP de Italia de 2019 en Monza, su primer podio desde su temporada de novato.",
        de: "Lance Stroll wurde Dritter beim Italienischen GP 2019 in Monza, sein erstes Podium seit seiner Rookie-Saison.",
        nl: "Lance Stroll eindigde als 3e tijdens de Italiaanse GP van 2019 in Monza, zijn eerste podium sinds zijn rookie seizoen."
      }
    },
    {
      question: {
        en: "Which 1951 race was the first F1 World Championship Grand Prix held outside Europe?",
        es: "¿Qué carrera de 1951 fue el primer Gran Premio del Campeonato Mundial de F1 celebrado fuera de Europa?",
        de: "Welches Rennen 1951 war der erste F1-Weltmeisterschafts-Grand-Prix außerhalb Europas?",
        nl: "Welke race in 1951 was de eerste F1 Wereldkampioenschap Grand Prix gehouden buiten Europa?"
      },
      options: [
        "Argentine Grand Prix",
        "Moroccan Grand Prix",
        "South African Grand Prix",
        "Mexican Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The 1951 Argentine Grand Prix in Buenos Aires was the first F1 race held outside Europe, though it wasn't counted for the championship that year.",
        es: "El Gran Premio de Argentina de 1951 en Buenos Aires fue la primera carrera de F1 celebrada fuera de Europa, aunque no contó para el campeonato ese año.",
        de: "Der Argentinische Grand Prix 1951 in Buenos Aires war das erste F1-Rennen außerhalb Europas, obwohl es in diesem Jahr nicht für die Meisterschaft zählte.",
        nl: "De Argentijnse Grand Prix van 1951 in Buenos Aires was de eerste F1-race gehouden buiten Europa, hoewel het dat jaar niet meetelde voor het kampioenschap."
      }
    },
    {
      question: {
        en: "The 1995 Belgian Grand Prix saw which driver win in a Benetton?",
        es: "¿Qué piloto ganó en un Benetton en el Gran Premio de Bélgica de 1995?",
        de: "Welcher Fahrer gewann beim Belgischen Grand Prix 1995 in einem Benetton?",
        nl: "Welke coureur won in een Benetton tijdens de Belgische Grand Prix van 1995?"
      },
      options: [
        "Michael Schumacher",
        "Johnny Herbert",
        "Gerhard Berger",
        "Jean Alesi"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher won the 1995 Belgian GP at Spa in dominant fashion for Benetton on his way to his second championship.",
        es: "Michael Schumacher ganó el GP de Bélgica de 1995 en Spa de manera dominante para Benetton en su camino a su segundo campeonato.",
        de: "Michael Schumacher gewann den Belgischen GP 1995 in Spa dominant für Benetton auf dem Weg zu seiner zweiten Meisterschaft.",
        nl: "Michael Schumacher won de Belgische GP van 1995 in Spa op dominante wijze voor Benetton op weg naar zijn tweede kampioenschap."
      }
    },
    {
      question: {
        en: "Which 1977 race saw James Hunt's final F1 victory?",
        es: "¿En qué carrera de 1977 James Hunt obtuvo su última victoria en F1?",
        de: "Bei welchem Rennen 1977 erzielte James Hunt seinen letzten F1-Sieg?",
        nl: "Bij welke race in 1977 behaalde James Hunt zijn laatste F1-overwinning?"
      },
      options: [
        "British Grand Prix",
        "Japanese Grand Prix",
        "Canadian Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "James Hunt's last F1 victory was the 1977 Japanese GP at Fuji, his 10th and final win.",
        es: "La última victoria de James Hunt en F1 fue el GP de Japón de 1977 en Fuji, su décima y última victoria.",
        de: "James Hunts letzter F1-Sieg war der Japanische GP 1977 in Fuji, sein 10. und letzter Sieg.",
        nl: "James Hunt's laatste F1-overwinning was de Japanse GP van 1977 in Fuji, zijn 10e en laatste overwinning."
      }
    },
    {
      question: {
        en: "The 2022 Australian Grand Prix return after COVID saw which driver win?",
        es: "¿Qué piloto ganó el regreso del Gran Premio de Australia de 2022 después de COVID?",
        de: "Welcher Fahrer gewann die Rückkehr des Australischen Grand Prix 2022 nach COVID?",
        nl: "Welke coureur won de terugkeer van de Australische Grand Prix 2022 na COVID?"
      },
      options: [
        "Max Verstappen",
        "Charles Leclerc",
        "Lewis Hamilton",
        "George Russell"
      ],
      correct: 1,
      explanation: {
        en: "Charles Leclerc won the 2022 Australian GP at Albert Park, Ferrari's first win in Melbourne since 2007.",
        es: "Charles Leclerc ganó el GP de Australia de 2022 en Albert Park, la primera victoria de Ferrari en Melbourne desde 2007.",
        de: "Charles Leclerc gewann den Australischen GP 2022 in Albert Park, Ferraris erster Sieg in Melbourne seit 2007.",
        nl: "Charles Leclerc won de Australische GP van 2022 in Albert Park, Ferrari's eerste overwinning in Melbourne sinds 2007."
      }
    },
    {
      question: {
        en: "Which 1972 race was won by Emerson Fittipaldi at age 25?",
        es: "¿Qué carrera de 1972 fue ganada por Emerson Fittipaldi a los 25 años?",
        de: "Welches Rennen 1972 wurde von Emerson Fittipaldi im Alter von 25 Jahren gewonnen?",
        nl: "Welke race in 1972 werd gewonnen door Emerson Fittipaldi op 25-jarige leeftijd?"
      },
      options: [
        "Italian Grand Prix",
        "Austrian Grand Prix",
        "Spanish Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Emerson Fittipaldi won the 1972 Italian GP and became the youngest F1 champion at age 25, a record that stood until 2005.",
        es: "Emerson Fittipaldi ganó el GP de Italia de 1972 y se convirtió en el campeón de F1 más joven a los 25 años, un récord que se mantuvo hasta 2005.",
        de: "Emerson Fittipaldi gewann den Italienischen GP 1972 und wurde mit 25 Jahren jüngster F1-Champion, ein Rekord der bis 2005 hielt.",
        nl: "Emerson Fittipaldi won de Italiaanse GP van 1972 en werd de jongste F1-kampioen op 25-jarige leeftijd, een record dat stand hield tot 2005."
      }
    },
    {
      question: {
        en: "The 2000 Malaysian Grand Prix saw which driver score their first F1 win?",
        es: "¿Qué piloto consiguió su primera victoria en F1 en el Gran Premio de Malasia del 2000?",
        de: "Welcher Fahrer erzielte beim Malaysischen Grand Prix 2000 seinen ersten F1-Sieg?",
        nl: "Welke coureur behaalde zijn eerste F1-overwinning tijdens de Maleisische Grand Prix van 2000?"
      },
      options: [
        "Mika Häkkinen",
        "David Coulthard",
        "Michael Schumacher",
        "Rubens Barrichello"
      ],
      correct: 2,
      explanation: {
        en: "Michael Schumacher won the 2000 Malaysian GP for Ferrari, though this was far from his first win (it was his 41st).",
        es: "Michael Schumacher ganó el GP de Malasia del 2000 para Ferrari, aunque esto estaba lejos de ser su primera victoria (fue la 41ª).",
        de: "Michael Schumacher gewann den Malaysischen GP 2000 für Ferrari, obwohl dies bei weitem nicht sein erster Sieg war (es war sein 41.).",
        nl: "Michael Schumacher won de Maleisische GP van 2000 voor Ferrari, hoewel dit verre van zijn eerste overwinning was (het was zijn 41e)."
      }
    }
  ];

  return {
    questions: questions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level2;
}
