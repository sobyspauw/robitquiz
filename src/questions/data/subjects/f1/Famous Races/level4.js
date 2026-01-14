const level4 = (function() {
  const questions = [
    {
      question: {
        en: "Which 1976 race did James Hunt win after being initially disqualified?",
        es: "¿En qué carrera de 1976 ganó James Hunt después de ser inicialmente descalificado?",
        de: "Welches Rennen 1976 gewann James Hunt nach zunächst erfolgter Disqualifikation?",
        nl: "Welke race van 1976 won James Hunt na eerst gediskwalificeerd te zijn?"
      },
      options: [
        "British Grand Prix",
        "Spanish Grand Prix",
        "Japanese Grand Prix",
        "German Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Hunt won the 1976 British GP but was disqualified for his car being too wide. He was later reinstated after an appeal.",
        es: "Hunt ganó el GP Británico de 1976 pero fue descalificado porque su coche era demasiado ancho. Fue reinstaurado después de una apelación.",
        de: "Hunt gewann den Britischen GP 1976, wurde aber disqualifiziert weil sein Auto zu breit war. Nach Berufung wurde er wieder eingesetzt.",
        nl: "Hunt won de Britse GP van 1976 maar werd gediskwalificeerd omdat zijn auto te breed was. Hij werd later na beroep hersteld."
      }
    },
    {
      question: {
        en: "At which 1997 race did Ralf Schumacher score his first F1 podium?",
        es: "¿En qué carrera de 1997 logró Ralf Schumacher su primer podio en F1?",
        de: "Bei welchem Rennen 1997 erreichte Ralf Schumacher sein erstes F1-Podium?",
        nl: "Bij welke race van 1997 behaalde Ralf Schumacher zijn eerste F1-podium?"
      },
      options: [
        "Argentine Grand Prix",
        "German Grand Prix",
        "European Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Ralf Schumacher finished third at the 1997 Argentine Grand Prix driving for Jordan, his first podium finish in Formula 1.",
        es: "Ralf Schumacher terminó tercero en el Gran Premio de Argentina de 1997 pilotando para Jordan, su primer podio en Fórmula 1.",
        de: "Ralf Schumacher wurde Dritter beim Argentinien GP 1997 für Jordan, sein erstes Podium in der Formel 1.",
        nl: "Ralf Schumacher eindigde als derde in de Grand Prix van Argentinië 1997 rijdend voor Jordan, zijn eerste podium in Formule 1."
      }
    },
    {
      question: {
        en: "Which 1982 race featured five different leaders in the final 10 laps?",
        es: "¿Qué carrera de 1982 presentó cinco líderes diferentes en las últimas 10 vueltas?",
        de: "Bei welchem Rennen 1982 gab es fünf verschiedene Führende in den letzten 10 Runden?",
        nl: "Welke race van 1982 had vijf verschillende leiders in de laatste 10 ronden?"
      },
      options: [
        "Monaco Grand Prix",
        "Detroit Grand Prix",
        "Las Vegas Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1982 Detroit GP had five different leaders in the closing stages due to multiple incidents and mechanical failures.",
        es: "El GP de Detroit de 1982 tuvo cinco líderes diferentes en las etapas finales debido a múltiples incidentes y fallos mecánicos.",
        de: "Der Detroit GP 1982 hatte fünf verschiedene Führende in der Schlussphase aufgrund mehrerer Zwischenfälle und mechanischer Ausfälle.",
        nl: "De GP van Detroit in 1982 had vijf verschillende leiders in de slotfase door meerdere incidenten en mechanische problemen."
      }
    },
    {
      question: {
        en: "What was special about the 1998 Belgian Grand Prix start?",
        es: "¿Qué fue especial sobre la salida del Gran Premio de Bélgica de 1998?",
        de: "Was war besonders am Start des Belgien GP 1998?",
        nl: "Wat was bijzonder aan de start van de Belgische Grand Prix van 1998?"
      },
      options: [
        "Multiple collisions in heavy rain",
        "Red flag before lap 1 completed",
        "13 cars eliminated on first lap",
        "Race started behind safety car"
      ],
      correct: 2,
      explanation: {
        en: "The 1998 Belgian GP saw 13 cars eliminated on the first lap in torrential rain, including a massive pileup at the first corner.",
        es: "El GP de Bélgica de 1998 vio 13 coches eliminados en la primera vuelta bajo lluvia torrencial, incluyendo un choque masivo en la primera curva.",
        de: "Beim Belgien GP 1998 schieden 13 Autos in der ersten Runde bei strömenden Regen aus, einschließlich einer massiven Karambolage in der ersten Kurve.",
        nl: "De Belgische GP van 1998 zag 13 auto's uitvallen in de eerste ronde door zware regen, inclusief een massale crash in de eerste bocht."
      }
    },
    {
      question: {
        en: "Who won the controversial 1989 Japanese Grand Prix that decided the championship?",
        es: "¿Quién ganó el controvertido Gran Premio de Japón de 1989 que decidió el campeonato?",
        de: "Wer gewann den umstrittenen Japan GP 1989, der die Meisterschaft entschied?",
        nl: "Wie won de controversiële Japanse Grand Prix van 1989 die het kampioenschap besliste?"
      },
      options: [
        "Alain Prost",
        "Ayrton Senna",
        "Alessandro Nannini",
        "Nigel Mansell"
      ],
      correct: 2,
      explanation: {
        en: "Alessandro Nannini won after Senna was disqualified for cutting the chicane after colliding with Prost, giving Prost the 1989 title.",
        es: "Alessandro Nannini ganó después de que Senna fuera descalificado por cortar la chicane tras chocar con Prost, dando a Prost el título de 1989.",
        de: "Alessandro Nannini gewann nachdem Senna disqualifiziert wurde weil er die Schikane schnitt nach Kollision mit Prost, Prost bekam den Titel 1989.",
        nl: "Alessandro Nannini won nadat Senna gediskwalificeerd werd voor het afsnijden van de chicane na botsing met Prost, Prost kreeg de titel van 1989."
      }
    },
    {
      question: {
        en: "Which 2003 race was stopped due to a track invasion by a spectator?",
        es: "¿Qué carrera de 2003 fue detenida debido a la invasión de la pista por un espectador?",
        de: "Welches Rennen 2003 wurde wegen eines Zuschauers auf der Strecke gestoppt?",
        nl: "Welke race van 2003 werd stopgezet vanwege een toeschouwer op de baan?"
      },
      options: [
        "French Grand Prix",
        "British Grand Prix",
        "German Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 2003 British GP was red-flagged when defrocked priest Neil Horan ran onto the Hangar Straight while cars were racing at full speed.",
        es: "El GP Británico de 2003 fue detenido con bandera roja cuando el ex sacerdote Neil Horan corrió hacia Hangar Straight mientras los coches corrían a máxima velocidad.",
        de: "Der Britische GP 2003 wurde mit roter Flagge gestoppt als der ehemalige Priester Neil Horan auf die Hangar Straight lief während Autos mit voller Geschwindigkeit fuhren.",
        nl: "De Britse GP van 2003 kreeg een rode vlag toen voormalig priester Neil Horan de Hangar Straight oprende terwijl auto's op volle snelheid reden."
      }
    },
    {
      question: {
        en: "What made the 1986 Australian Grand Prix unique in championship history?",
        es: "¿Qué hizo único al Gran Premio de Australia de 1986 en la historia del campeonato?",
        de: "Was machte den Australien GP 1986 einzigartig in der Meisterschaftsgeschichte?",
        nl: "Wat maakte de Australische Grand Prix van 1986 uniek in de kampioenschapsgeschiedenis?"
      },
      options: [
        "First night race",
        "Three drivers could win title",
        "Shortest race in history",
        "First race in Southern Hemisphere"
      ],
      correct: 1,
      explanation: {
        en: "The 1986 Australian GP was the only race where three drivers (Prost, Mansell, Piquet) entered the final round able to win the championship. Prost won.",
        es: "El GP de Australia de 1986 fue la única carrera donde tres pilotos (Prost, Mansell, Piquet) llegaron a la ronda final pudiendo ganar el campeonato. Ganó Prost.",
        de: "Der Australien GP 1986 war das einzige Rennen wo drei Fahrer (Prost, Mansell, Piquet) ins Finale kamen mit Chance auf die Meisterschaft. Prost gewann.",
        nl: "De Australische GP van 1986 was de enige race waarbij drie coureurs (Prost, Mansell, Piquet) de finale ronde ingingen met kans op de titel. Prost won."
      }
    },
    {
      question: {
        en: "Which driver won the chaotic 1999 European Grand Prix at Nürburgring?",
        es: "¿Qué piloto ganó el caótico Gran Premio de Europa de 1999 en Nürburgring?",
        de: "Welcher Fahrer gewann den chaotischen Europa GP 1999 am Nürburgring?",
        nl: "Welke coureur won de chaotische Europese Grand Prix van 1999 op de Nürburgring?"
      },
      options: [
        "Mika Häkkinen",
        "David Coulthard",
        "Johnny Herbert",
        "Ralf Schumacher"
      ],
      correct: 2,
      explanation: {
        en: "Johnny Herbert won the wet 1999 European GP for Stewart after starting 18th, with multiple crashes and changing conditions throughout the race.",
        es: "Johnny Herbert ganó el mojado GP de Europa de 1999 para Stewart tras salir 18º, con múltiples choques y condiciones cambiantes durante la carrera.",
        de: "Johnny Herbert gewann den nassen Europa GP 1999 für Stewart nach Start von Platz 18, mit mehreren Unfällen und wechselnden Bedingungen.",
        nl: "Johnny Herbert won de natte Europese GP van 1999 voor Stewart na start vanaf plek 18, met meerdere crashes en wisselende omstandigheden."
      }
    },
    {
      question: {
        en: "At which 1985 race did Ayrton Senna score his first F1 victory?",
        es: "¿En qué carrera de 1985 logró Ayrton Senna su primera victoria en F1?",
        de: "Bei welchem Rennen 1985 erzielte Ayrton Senna seinen ersten F1-Sieg?",
        nl: "Bij welke race van 1985 behaalde Ayrton Senna zijn eerste F1-overwinning?"
      },
      options: [
        "Brazilian Grand Prix",
        "Monaco Grand Prix",
        "Portuguese Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Senna won his first Grand Prix at the 1985 Portuguese GP in torrential rain, driving for Lotus. He dominated in wet conditions.",
        es: "Senna ganó su primer Gran Premio en el GP de Portugal de 1985 bajo lluvia torrencial, pilotando para Lotus. Dominó en condiciones húmedas.",
        de: "Senna gewann sein erstes Grand Prix beim Portugal GP 1985 bei strömenden Regen für Lotus. Er dominierte bei nassen Bedingungen.",
        nl: "Senna won zijn eerste Grand Prix in de Portugese GP van 1985 in zware regen, rijdend voor Lotus. Hij domineerde in natte omstandigheden."
      }
    },
    {
      question: {
        en: "What happened at the 2012 Brazilian Grand Prix that nearly cost Vettel the title?",
        es: "¿Qué pasó en el Gran Premio de Brasil de 2012 que casi le costó el título a Vettel?",
        de: "Was geschah beim Brasilien GP 2012 das Vettel fast den Titel kostete?",
        nl: "Wat gebeurde er bij de Braziliaanse Grand Prix van 2012 dat Vettel bijna de titel kostte?"
      },
      options: [
        "Engine failure on final lap",
        "Collision with Alonso",
        "First lap collision and spin",
        "Drive-through penalty"
      ],
      correct: 2,
      explanation: {
        en: "Vettel was hit by Bruno Senna on lap 1, spinning and damaging his car. He recovered to finish 6th and win the championship by 3 points.",
        es: "Vettel fue golpeado por Bruno Senna en la vuelta 1, girando y dañando su coche. Se recuperó para terminar 6º y ganar el campeonato por 3 puntos.",
        de: "Vettel wurde in Runde 1 von Bruno Senna getroffen, drehte sich und beschädigte sein Auto. Er erholte sich auf Platz 6 und gewann die Meisterschaft mit 3 Punkten Vorsprung.",
        nl: "Vettel werd in ronde 1 geraakt door Bruno Senna, spinde en beschadigde zijn auto. Hij herstelde naar plek 6 en won het kampioenschap met 3 punten."
      }
    },
    {
      question: {
        en: "Which 1995 race did Jean Alesi win for his only F1 victory?",
        es: "¿Qué carrera de 1995 ganó Jean Alesi para su única victoria en F1?",
        de: "Welches Rennen 1995 gewann Jean Alesi für seinen einzigen F1-Sieg?",
        nl: "Welke race van 1995 won Jean Alesi voor zijn enige F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "Canadian Grand Prix",
        "French Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jean Alesi won the 1995 Canadian Grand Prix for Ferrari, his only win in 201 race starts, leading the final 30 laps.",
        es: "Jean Alesi ganó el Gran Premio de Canadá de 1995 para Ferrari, su única victoria en 201 salidas, liderando las últimas 30 vueltas.",
        de: "Jean Alesi gewann den Kanada GP 1995 für Ferrari, sein einziger Sieg in 201 Rennen, führte die letzten 30 Runden.",
        nl: "Jean Alesi won de Canadese Grand Prix van 1995 voor Ferrari, zijn enige overwinning in 201 races, hij leidde de laatste 30 ronden."
      }
    },
    {
      question: {
        en: "What was controversial about the 2008 Belgian Grand Prix result?",
        es: "¿Qué fue controvertido sobre el resultado del Gran Premio de Bélgica de 2008?",
        de: "Was war umstritten am Ergebnis des Belgien GP 2008?",
        nl: "Wat was controversieel aan het resultaat van de Belgische Grand Prix van 2008?"
      },
      options: [
        "Hamilton penalized after race",
        "Race stopped early",
        "Wrong driver on podium",
        "Points awarded incorrectly"
      ],
      correct: 0,
      explanation: {
        en: "Hamilton crossed the line first but was given a 25-second penalty hours after the race for cutting a chicane, handing victory to Massa.",
        es: "Hamilton cruzó la línea primero pero recibió una penalización de 25 segundos horas después de la carrera por cortar una chicane, dando la victoria a Massa.",
        de: "Hamilton überquerte die Ziellinie als Erster erhielt aber Stunden nach dem Rennen 25 Sekunden Strafe für Schneiden einer Schikane, Massa bekam den Sieg.",
        nl: "Hamilton kwam als eerste over de finish maar kreeg uren na de race 25 seconden straf voor afsnijden chicane, Massa kreeg de overwinning."
      }
    },
    {
      question: {
        en: "Which 1973 race featured 11 different leaders?",
        es: "¿Qué carrera de 1973 presentó 11 líderes diferentes?",
        de: "Bei welchem Rennen 1973 gab es 11 verschiedene Führende?",
        nl: "Welke race van 1973 had 11 verschillende leiders?"
      },
      options: [
        "Italian Grand Prix",
        "British Grand Prix",
        "Monaco Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1973 British Grand Prix at Silverstone had 11 different race leaders, still a Formula 1 record. Peter Revson won for McLaren.",
        es: "El Gran Premio Británico de 1973 en Silverstone tuvo 11 líderes de carrera diferentes, aún un récord de Fórmula 1. Peter Revson ganó para McLaren.",
        de: "Der Britische GP 1973 in Silverstone hatte 11 verschiedene Rennführende, immer noch ein Formel-1-Rekord. Peter Revson gewann für McLaren.",
        nl: "De Britse Grand Prix van 1973 op Silverstone had 11 verschillende raceleiders, nog steeds een Formule 1-record. Peter Revson won voor McLaren."
      }
    },
    {
      question: {
        en: "Who won the 2011 Canadian Grand Prix after 6 red flag periods?",
        es: "¿Quién ganó el Gran Premio de Canadá de 2011 después de 6 períodos de bandera roja?",
        de: "Wer gewann den Kanada GP 2011 nach 6 roten Flaggen?",
        nl: "Wie won de Canadese Grand Prix van 2011 na 6 rode vlag periodes?"
      },
      options: [
        "Lewis Hamilton",
        "Sebastian Vettel",
        "Jenson Button",
        "Fernando Alonso"
      ],
      correct: 2,
      explanation: {
        en: "Jenson Button won the 2011 Canadian GP after the race was stopped for over 2 hours due to rain. He passed Vettel on the final lap.",
        es: "Jenson Button ganó el GP de Canadá de 2011 después de que la carrera se detuviera más de 2 horas por lluvia. Pasó a Vettel en la última vuelta.",
        de: "Jenson Button gewann den Kanada GP 2011 nachdem das Rennen über 2 Stunden wegen Regen gestoppt wurde. Er überholte Vettel in der letzten Runde.",
        nl: "Jenson Button won de Canadese GP van 2011 nadat de race meer dan 2 uur stopgezet was door regen. Hij passeerde Vettel in de laatste ronde."
      }
    },
    {
      question: {
        en: "At which 1961 race did both Ferrari drivers disobey team orders?",
        es: "¿En qué carrera de 1961 ambos pilotos de Ferrari desobedecieron las órdenes del equipo?",
        de: "Bei welchem Rennen 1961 missachteten beide Ferrari-Fahrer die Teamanweisungen?",
        nl: "Bij welke race van 1961 negeerden beide Ferrari-coureurs de teamorders?"
      },
      options: [
        "Italian Grand Prix",
        "British Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "At the 1961 Italian GP, Phil Hill and Wolfgang von Trips ignored team orders to hold position, racing wheel-to-wheel. Von Trips crashed fatally.",
        es: "En el GP de Italia de 1961, Phil Hill y Wolfgang von Trips ignoraron las órdenes del equipo de mantener posición, corriendo rueda con rueda. Von Trips tuvo un accidente fatal.",
        de: "Beim Italien GP 1961 ignorierten Phil Hill und Wolfgang von Trips Teamanweisungen zur Positionshaltung und fuhren Rad an Rad. Von Trips verunglückte tödlich.",
        nl: "Bij de Italiaanse GP van 1961 negeerden Phil Hill en Wolfgang von Trips teamorders om positie te houden, racend wiel aan wiel. Von Trips crashte dodelijk."
      }
    },
    {
      question: {
        en: "Which 1990 race did Nelson Piquet win for his final F1 victory?",
        es: "¿Qué carrera de 1990 ganó Nelson Piquet para su última victoria en F1?",
        de: "Welches Rennen 1990 gewann Nelson Piquet für seinen letzten F1-Sieg?",
        nl: "Welke race van 1990 won Nelson Piquet voor zijn laatste F1-overwinning?"
      },
      options: [
        "Brazilian Grand Prix",
        "Australian Grand Prix",
        "Japanese Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Nelson Piquet won the 1990 Australian Grand Prix for Benetton, his 23rd and final F1 victory in a race with many retirements.",
        es: "Nelson Piquet ganó el Gran Premio de Australia de 1990 para Benetton, su 23ª y última victoria en F1 en una carrera con muchos abandonos.",
        de: "Nelson Piquet gewann den Australien GP 1990 für Benetton, sein 23. und letzter F1-Sieg in einem Rennen mit vielen Ausfällen.",
        nl: "Nelson Piquet won de Australische Grand Prix van 1990 voor Benetton, zijn 23e en laatste F1-overwinning in een race met veel uitvallers."
      }
    },
    {
      question: {
        en: "What was unique about the 1975 Spanish Grand Prix?",
        es: "¿Qué fue único sobre el Gran Premio de España de 1975?",
        de: "Was war einzigartig am Spanien GP 1975?",
        nl: "Wat was uniek aan de Spaanse Grand Prix van 1975?"
      },
      options: [
        "First race with safety car",
        "Race stopped due to barrier collapse",
        "Shortest F1 race ever",
        "First race under lights"
      ],
      correct: 1,
      explanation: {
        en: "The 1975 Spanish GP was stopped after 29 laps when a barrier collapsed after being hit by the Hill-Stommelen crash, injuring spectators.",
        es: "El GP de España de 1975 fue detenido después de 29 vueltas cuando una barrera se derrumbó tras ser golpeada por el choque Hill-Stommelen, hiriendo espectadores.",
        de: "Der Spanien GP 1975 wurde nach 29 Runden gestoppt als eine Barriere nach dem Hill-Stommelen-Unfall zusammenbrach und Zuschauer verletzte.",
        nl: "De Spaanse GP van 1975 werd na 29 ronden gestopt toen een barrier instortte na geraakt te zijn door de Hill-Stommelen crash, toeschouwers raakten gewond."
      }
    },
    {
      question: {
        en: "Who won the dramatic 2019 German Grand Prix from 20th on the grid?",
        es: "¿Quién ganó el dramático Gran Premio de Alemania de 2019 desde la 20ª posición en la parrilla?",
        de: "Wer gewann den dramatischen Deutschland GP 2019 von Startplatz 20?",
        nl: "Wie won de dramatische Duitse Grand Prix van 2019 vanaf plek 20 op de grid?"
      },
      options: [
        "Sebastian Vettel",
        "Max Verstappen",
        "Daniil Kvyat",
        "Lewis Hamilton"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won the chaotic wet 2019 German GP from 20th on the grid after multiple crashes including Hamilton, Leclerc, and others.",
        es: "Max Verstappen ganó el caótico GP de Alemania mojado de 2019 desde la 20ª posición tras múltiples choques incluyendo Hamilton, Leclerc y otros.",
        de: "Max Verstappen gewann den chaotischen nassen Deutschland GP 2019 von Startplatz 20 nach mehreren Unfällen inklusive Hamilton, Leclerc und andere.",
        nl: "Max Verstappen won de chaotische natte Duitse GP van 2019 vanaf plek 20 na meerdere crashes waaronder Hamilton, Leclerc en anderen."
      }
    },
    {
      question: {
        en: "Which 1968 race was won by a driver in a car bearing his own name?",
        es: "¿Qué carrera de 1968 fue ganada por un piloto en un coche con su propio nombre?",
        de: "Welches Rennen 1968 wurde von einem Fahrer in einem Auto mit seinem eigenen Namen gewonnen?",
        nl: "Welke race van 1968 werd gewonnen door een coureur in een auto met zijn eigen naam?"
      },
      options: [
        "British Grand Prix",
        "Belgian Grand Prix",
        "German Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jackie Stewart won the 1968 German GP at the Nürburgring in the Matra MS10, dominating in thick fog by over 4 minutes.",
        es: "Jackie Stewart ganó el GP de Alemania de 1968 en el Nürburgring en el Matra MS10, dominando en niebla espesa por más de 4 minutos.",
        de: "Jackie Stewart gewann den Deutschland GP 1968 am Nürburgring im Matra MS10, dominierte im dichten Nebel mit über 4 Minuten Vorsprung.",
        nl: "Jackie Stewart won de Duitse GP van 1968 op de Nürburgring in de Matra MS10, dominerend in dichte mist met meer dan 4 minuten voorsprong."
      }
    },
    {
      question: {
        en: "At which 2014 race did Jules Bianchi suffer his fatal crash?",
        es: "¿En qué carrera de 2014 sufrió Jules Bianchi su accidente fatal?",
        de: "Bei welchem Rennen 2014 erlitt Jules Bianchi seinen tödlichen Unfall?",
        nl: "Bij welke race van 2014 kreeg Jules Bianchi zijn fatale crash?"
      },
      options: [
        "Russian Grand Prix",
        "Japanese Grand Prix",
        "Chinese Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jules Bianchi crashed into a recovery vehicle at the 2014 Japanese GP in wet conditions. He never regained consciousness and died in July 2015.",
        es: "Jules Bianchi chocó contra un vehículo de recuperación en el GP de Japón de 2014 en condiciones húmedas. Nunca recuperó la conciencia y murió en julio de 2015.",
        de: "Jules Bianchi krachte beim Japan GP 2014 bei nassen Bedingungen in ein Bergungsfahrzeug. Er erlangte nie das Bewusstsein zurück und starb im Juli 2015.",
        nl: "Jules Bianchi crashte tegen een bergingsvoertuig bij de Japanse GP van 2014 in natte omstandigheden. Hij werd nooit meer wakker en overleed in juli 2015."
      }
    },
    {
      question: {
        en: "Which 1984 race did Ayrton Senna nearly win on his debut for Toleman?",
        es: "¿Qué carrera de 1984 casi ganó Ayrton Senna en su debut para Toleman?",
        de: "Welches Rennen 1984 hätte Ayrton Senna bei seinem Debüt für Toleman fast gewonnen?",
        nl: "Welke race van 1984 had Ayrton Senna bijna gewonnen bij zijn debuut voor Toleman?"
      },
      options: [
        "Belgian Grand Prix",
        "British Grand Prix",
        "Monaco Grand Prix",
        "Brazilian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Senna finished 2nd at the 1984 Monaco GP in torrential rain, catching Prost rapidly when the race was controversially stopped early.",
        es: "Senna terminó 2º en el GP de Mónaco de 1984 bajo lluvia torrencial, alcanzando rápidamente a Prost cuando la carrera fue controvertidamente detenida temprano.",
        de: "Senna wurde beim Monaco GP 1984 Zweiter bei strömenden Regen und holte Prost schnell auf als das Rennen kontrovers früh gestoppt wurde.",
        nl: "Senna eindigde als 2e in de GP van Monaco 1984 in zware regen, haalde Prost snel in toen de race controversieel vroeg gestopt werd."
      }
    },
    {
      question: {
        en: "What happened at the start of the 2002 Austrian Grand Prix?",
        es: "¿Qué pasó en la salida del Gran Premio de Austria de 2002?",
        de: "Was geschah beim Start des Österreich GP 2002?",
        nl: "Wat gebeurde er bij de start van de Oostenrijkse Grand Prix van 2002?"
      },
      options: [
        "Mass collision eliminated 8 cars",
        "False start penalty for leader",
        "Safety car deployed immediately",
        "Red flag due to rain"
      ],
      correct: 0,
      explanation: {
        en: "The 2002 Austrian GP start saw a massive collision that eliminated 8 cars, one of the biggest first-lap pile-ups in F1 history.",
        es: "La salida del GP de Austria de 2002 vio una colisión masiva que eliminó 8 coches, uno de los mayores choques de primera vuelta en la historia de F1.",
        de: "Beim Start des Österreich GP 2002 gab es eine massive Kollision die 8 Autos eliminierte, eine der größten ersten Runden Karambolagen in der F1-Geschichte.",
        nl: "De start van de Oostenrijkse GP van 2002 zag een enorme botsing waarbij 8 auto's uitvielen, een van de grootste eerste ronde crashes in F1-historie."
      }
    },
    {
      question: {
        en: "Which 1979 race featured the famous 'Villeneuve vs Arnoux' battle?",
        es: "¿Qué carrera de 1979 presentó la famosa batalla 'Villeneuve vs Arnoux'?",
        de: "Bei welchem Rennen 1979 gab es die berühmte Schlacht 'Villeneuve vs Arnoux'?",
        nl: "Welke race van 1979 had het beroemde gevecht 'Villeneuve vs Arnoux'?"
      },
      options: [
        "Belgian Grand Prix",
        "British Grand Prix",
        "French Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The 1979 French GP at Dijon featured an epic wheel-to-wheel battle between Villeneuve and Arnoux for 2nd place in the closing laps.",
        es: "El GP de Francia de 1979 en Dijon presentó una batalla épica rueda con rueda entre Villeneuve y Arnoux por el 2º lugar en las vueltas finales.",
        de: "Der Frankreich GP 1979 in Dijon hatte einen epischen Rad-an-Rad-Kampf zwischen Villeneuve und Arnoux um Platz 2 in den Schlussrunden.",
        nl: "De Franse GP van 1979 in Dijon had een episch wiel-aan-wiel gevecht tussen Villeneuve en Arnoux om de 2e plaats in de slotronden."
      }
    },
    {
      question: {
        en: "Who won the 2020 Sakhir Grand Prix after Mercedes' pit stop error?",
        es: "¿Quién ganó el Gran Premio de Sakhir de 2020 después del error de parada en boxes de Mercedes?",
        de: "Wer gewann den Sakhir GP 2020 nach Mercedes' Boxenstopp-Fehler?",
        nl: "Wie won de Sakhir Grand Prix van 2020 na Mercedes' pitstop fout?"
      },
      options: [
        "Max Verstappen",
        "Sergio Perez",
        "Pierre Gasly",
        "Daniel Ricciardo"
      ],
      correct: 1,
      explanation: {
        en: "Sergio Perez won the 2020 Sakhir GP for Racing Point after Mercedes botched Russell's pit stop, costing him a likely maiden victory.",
        es: "Sergio Perez ganó el GP de Sakhir de 2020 para Racing Point después de que Mercedes estropeara la parada de Russell, costándole una probable primera victoria.",
        de: "Sergio Perez gewann den Sakhir GP 2020 für Racing Point nachdem Mercedes Russells Boxenstopp verpfuschte und ihm einen wahrscheinlichen ersten Sieg kostete.",
        nl: "Sergio Perez won de Sakhir GP van 2020 voor Racing Point nadat Mercedes Russell's pitstop verprutste, hem een waarschijnlijke eerste overwinning kostend."
      }
    },
    {
      question: {
        en: "At which 1983 race did Keke Rosberg score his only win of his championship season?",
        es: "¿En qué carrera de 1983 logró Keke Rosberg su única victoria de su temporada de campeonato?",
        de: "Bei welchem Rennen 1983 erzielte Keke Rosberg seinen einzigen Sieg seiner Meisterschaftssaison?",
        nl: "Bij welke race van 1983 behaalde Keke Rosberg zijn enige overwinning van zijn kampioensjaar?"
      },
      options: [
        "British Grand Prix",
        "Monaco Grand Prix",
        "Brazilian Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Keke Rosberg won the 1983 Monaco GP, his only win that season. He won the 1982 championship with just one victory total.",
        es: "Keke Rosberg ganó el GP de Mónaco de 1983, su única victoria esa temporada. Ganó el campeonato de 1982 con solo una victoria en total.",
        de: "Keke Rosberg gewann den Monaco GP 1983, sein einziger Sieg dieser Saison. Er gewann die Meisterschaft 1982 mit nur einem Sieg insgesamt.",
        nl: "Keke Rosberg won de GP van Monaco 1983, zijn enige overwinning dat seizoen. Hij won het kampioenschap van 1982 met slechts één overwinning totaal."
      }
    },
    {
      question: {
        en: "Which 1994 race was restarted after the Senna tragedy?",
        es: "¿Qué carrera de 1994 fue reiniciada después de la tragedia de Senna?",
        de: "Welches Rennen 1994 wurde nach der Senna-Tragödie neu gestartet?",
        nl: "Welke race van 1994 werd herstart na de Senna-tragedie?"
      },
      options: [
        "Brazilian Grand Prix",
        "Monaco Grand Prix",
        "San Marino Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The 1994 San Marino GP at Imola was restarted after Senna's fatal crash on lap 7. Michael Schumacher won the restarted race.",
        es: "El GP de San Marino de 1994 en Imola fue reiniciado después del accidente fatal de Senna en la vuelta 7. Michael Schumacher ganó la carrera reiniciada.",
        de: "Der San Marino GP 1994 in Imola wurde nach Sennas tödlichem Unfall in Runde 7 neu gestartet. Michael Schumacher gewann das neu gestartete Rennen.",
        nl: "De San Marino GP van 1994 in Imola werd herstart na Senna's fatale crash in ronde 7. Michael Schumacher won de herstartte race."
      }
    },
    {
      question: {
        en: "What made the 1971 Italian Grand Prix finish remarkable?",
        es: "¿Qué hizo notable el final del Gran Premio de Italia de 1971?",
        de: "Was machte das Finish des Italien GP 1971 bemerkenswert?",
        nl: "Wat maakte de finish van de Italiaanse Grand Prix van 1971 opmerkelijk?"
      },
      options: [
        "Top 5 separated by 0.6 seconds",
        "Dead heat between two drivers",
        "Winner by largest margin ever",
        "Photo finish for all podium spots"
      ],
      correct: 0,
      explanation: {
        en: "The 1971 Italian GP had the closest finish in F1 history with the top 5 separated by just 0.61 seconds. Peter Gethin won by 0.01s.",
        es: "El GP de Italia de 1971 tuvo el final más cerrado en la historia de F1 con los 5 primeros separados por solo 0.61 segundos. Peter Gethin ganó por 0.01s.",
        de: "Der Italien GP 1971 hatte das knappste Finish in der F1-Geschichte mit den Top 5 getrennt durch nur 0,61 Sekunden. Peter Gethin gewann mit 0,01s.",
        nl: "De Italiaanse GP van 1971 had de nauwste finish in F1-geschiedenis met de top 5 gescheiden door slechts 0,61 seconden. Peter Gethin won met 0,01s."
      }
    },
    {
      question: {
        en: "Which 2009 race did Jenson Button win to clinch the championship?",
        es: "¿Qué carrera de 2009 ganó Jenson Button para asegurar el campeonato?",
        de: "Welches Rennen 2009 gewann Jenson Button um die Meisterschaft zu sichern?",
        nl: "Welke race van 2009 won Jenson Button om het kampioenschap veilig te stellen?"
      },
      options: [
        "Italian Grand Prix",
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Singapore Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jenson Button won the 2009 Brazilian GP to clinch his only World Championship for Brawn GP, one of F1's greatest underdog stories.",
        es: "Jenson Button ganó el GP de Brasil de 2009 para asegurar su único Campeonato Mundial para Brawn GP, una de las mejores historias de F1.",
        es: "Jenson Button gewann den Brasilien GP 2009 um seine einzige Weltmeisterschaft für Brawn GP zu sichern, eine der größten Underdog-Geschichten der F1.",
        nl: "Jenson Button won de Braziliaanse GP van 2009 om zijn enige Wereldkampioenschap voor Brawn GP veilig te stellen, een van F1's grootste underdog verhalen."
      }
    },
    {
      question: {
        en: "At which 1993 race did Alain Prost score his 51st and final F1 victory?",
        es: "¿En qué carrera de 1993 logró Alain Prost su 51ª y última victoria en F1?",
        de: "Bei welchem Rennen 1993 erzielte Alain Prost seinen 51. und letzten F1-Sieg?",
        nl: "Bij welke race van 1993 behaalde Alain Prost zijn 51e en laatste F1-overwinning?"
      },
      options: [
        "Australian Grand Prix",
        "Japanese Grand Prix",
        "German Grand Prix",
        "French Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Alain Prost won the 1993 German Grand Prix at Hockenheim for his 51st and final career victory before retiring as World Champion.",
        es: "Alain Prost ganó el Gran Premio de Alemania de 1993 en Hockenheim para su 51ª y última victoria de carrera antes de retirarse como Campeón Mundial.",
        de: "Alain Prost gewann den Deutschland GP 1993 in Hockenheim für seinen 51. und letzten Karrieresieg bevor er als Weltmeister zurücktrat.",
        nl: "Alain Prost won de Duitse Grand Prix van 1993 op Hockenheim voor zijn 51e en laatste carrière-overwinning voordat hij als Wereldkampioen stopte."
      }
    },
    {
      question: {
        en: "Which 2016 race saw Max Verstappen become F1's youngest winner?",
        es: "¿Qué carrera de 2016 vio a Max Verstappen convertirse en el ganador más joven de F1?",
        de: "Bei welchem Rennen 2016 wurde Max Verstappen zum jüngsten F1-Sieger?",
        nl: "Bij welke race van 2016 werd Max Verstappen F1's jongste winnaar?"
      },
      options: [
        "Monaco Grand Prix",
        "Spanish Grand Prix",
        "Canadian Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won the 2016 Spanish GP at 18 years old in his first race for Red Bull after Hamilton and Rosberg collided on lap 1.",
        es: "Max Verstappen ganó el GP de España de 2016 con 18 años en su primera carrera para Red Bull después de que Hamilton y Rosberg chocaran en la vuelta 1.",
        de: "Max Verstappen gewann den Spanien GP 2016 mit 18 Jahren in seinem ersten Rennen für Red Bull nachdem Hamilton und Rosberg in Runde 1 kollidierten.",
        nl: "Max Verstappen won de Spaanse GP van 2016 op 18-jarige leeftijd in zijn eerste race voor Red Bull nadat Hamilton en Rosberg in ronde 1 botsten."
      }
    },
    {
      question: {
        en: "What was unusual about the 1997 European Grand Prix at Jerez?",
        es: "¿Qué fue inusual sobre el Gran Premio de Europa de 1997 en Jerez?",
        de: "Was war ungewöhnlich am Europa GP 1997 in Jerez?",
        nl: "Wat was ongebruikelijk aan de Europese Grand Prix van 1997 in Jerez?"
      },
      options: [
        "Schumacher deliberately crashed into Villeneuve",
        "Race stopped due to extreme heat",
        "All top 3 disqualified",
        "First race with mandatory pit stops"
      ],
      correct: 0,
      explanation: {
        en: "At the 1997 European GP, Schumacher deliberately tried to take out championship rival Villeneuve but failed. He was later excluded from the championship.",
        es: "En el GP de Europa de 1997, Schumacher deliberadamente intentó sacar a su rival de campeonato Villeneuve pero falló. Fue excluido del campeonato.",
        de: "Beim Europa GP 1997 versuchte Schumacher absichtlich seinen Meisterschaftsrivalen Villeneuve rauszunehmen scheiterte aber. Er wurde später von der Meisterschaft ausgeschlossen.",
        nl: "Bij de Europese GP van 1997 probeerde Schumacher opzettelijk zijn kampioenschapsrivaal Villeneuve eruit te rijden maar faalde. Hij werd later uitgesloten van het kampioenschap."
      }
    },
    {
      question: {
        en: "Which 1981 race did Carlos Reutemann throw away the championship?",
        es: "¿En qué carrera de 1981 perdió Carlos Reutemann el campeonato?",
        de: "Bei welchem Rennen 1981 verspielte Carlos Reutemann die Meisterschaft?",
        nl: "Bij welke race van 1981 verspeelde Carlos Reutemann het kampioenschap?"
      },
      options: [
        "Las Vegas Grand Prix",
        "Canadian Grand Prix",
        "Monaco Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "At the 1981 Las Vegas GP finale, Reutemann finished 8th when 5th would have won the title. Piquet finished 5th to win his first championship.",
        es: "En la final del GP de Las Vegas de 1981, Reutemann terminó 8º cuando 5º habría ganado el título. Piquet terminó 5º para ganar su primer campeonato.",
        de: "Beim Las Vegas GP Finale 1981 wurde Reutemann Achter als Fünfter den Titel gewonnen hätte. Piquet wurde Fünfter und gewann seine erste Meisterschaft.",
        nl: "Bij de Las Vegas GP finale van 1981 eindigde Reutemann als 8e terwijl 5e de titel had gewonnen. Piquet werd 5e en won zijn eerste kampioenschap."
      }
    },
    {
      question: {
        en: "At which 2021 race did Esteban Ocon score his first F1 victory?",
        es: "¿En qué carrera de 2021 logró Esteban Ocon su primera victoria en F1?",
        de: "Bei welchem Rennen 2021 erzielte Esteban Ocon seinen ersten F1-Sieg?",
        nl: "Bij welke race van 2021 behaalde Esteban Ocon zijn eerste F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "Hungarian Grand Prix",
        "Russian Grand Prix",
        "Turkish Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Esteban Ocon won the chaotic 2021 Hungarian GP for Alpine after a first-lap crash eliminated multiple cars and Vettel was later disqualified from 2nd.",
        es: "Esteban Ocon ganó el caótico GP de Hungría de 2021 para Alpine tras un choque de primera vuelta que eliminó múltiples coches y Vettel fue descalificado del 2º.",
        de: "Esteban Ocon gewann den chaotischen Ungarn GP 2021 für Alpine nach einem Ersten-Runden-Crash der mehrere Autos eliminierte und Vettel später vom 2. Platz disqualifiziert wurde.",
        nl: "Esteban Ocon won de chaotische Hongaarse GP van 2021 voor Alpine na een eerste ronde crash waarbij meerdere auto's uitvielen en Vettel later gediskwalificeerd werd van de 2e plaats."
      }
    },
    {
      question: {
        en: "Which 1972 race did Emerson Fittipaldi win to become youngest champion at the time?",
        es: "¿Qué carrera de 1972 ganó Emerson Fittipaldi para convertirse en el campeón más joven de la época?",
        de: "Welches Rennen 1972 gewann Emerson Fittipaldi um damals jüngster Champion zu werden?",
        nl: "Welke race van 1972 won Emerson Fittipaldi om destijds jongste kampioen te worden?"
      },
      options: [
        "British Grand Prix",
        "Italian Grand Prix",
        "Austrian Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Emerson Fittipaldi won the 1972 Italian Grand Prix to clinch the championship at 25 years old, the youngest at that time for Lotus.",
        es: "Emerson Fittipaldi ganó el Gran Premio de Italia de 1972 para asegurar el campeonato con 25 años, el más joven en ese momento para Lotus.",
        de: "Emerson Fittipaldi gewann den Italien GP 1972 um die Meisterschaft mit 25 Jahren zu sichern, damals der Jüngste für Lotus.",
        nl: "Emerson Fittipaldi won de Italiaanse Grand Prix van 1972 om het kampioenschap veilig te stellen op 25-jarige leeftijd, destijds de jongste voor Lotus."
      }
    },
    {
      question: {
        en: "What made the 2005 United States Grand Prix infamous?",
        es: "¿Qué hizo infame al Gran Premio de Estados Unidos de 2005?",
        de: "Was machte den USA GP 2005 berüchtigt?",
        nl: "Wat maakte de Grand Prix van de Verenigde Staten van 2005 berucht?"
      },
      options: [
        "Race canceled due to weather",
        "Only 6 cars started the race",
        "Mass disqualification after race",
        "Track surface collapsed"
      ],
      correct: 1,
      explanation: {
        en: "Only 6 cars started the 2005 US GP at Indianapolis after Michelin tire failures in practice led 14 teams to withdraw for safety reasons.",
        es: "Solo 6 coches salieron en el GP de EE.UU. de 2005 en Indianápolis después de que fallos de neumáticos Michelin en práctica llevaran a 14 equipos a retirarse por seguridad.",
        de: "Nur 6 Autos starteten beim USA GP 2005 in Indianapolis nachdem Michelin-Reifenprobleme im Training 14 Teams zum Rückzug aus Sicherheitsgründen führten.",
        nl: "Slechts 6 auto's startten in de US GP van 2005 in Indianapolis nadat Michelin bandenfouten in de training 14 teams deden terugtrekken om veiligheidsredenen."
      }
    },
    {
      question: {
        en: "Which 1988 race did Ayrton Senna win despite gearbox issues?",
        es: "¿Qué carrera de 1988 ganó Ayrton Senna a pesar de problemas de caja de cambios?",
        de: "Welches Rennen 1988 gewann Ayrton Senna trotz Getriebeproblemen?",
        nl: "Welke race van 1988 won Ayrton Senna ondanks versnellingsbakproblemen?"
      },
      options: [
        "Monaco Grand Prix",
        "Detroit Grand Prix",
        "British Grand Prix",
        "Hungarian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Senna won the 1988 Detroit GP stuck in 4th gear for much of the race, showcasing his skill in the McLaren-Honda.",
        es: "Senna ganó el GP de Detroit de 1988 atascado en 4ª marcha durante gran parte de la carrera, mostrando su habilidad en el McLaren-Honda.",
        de: "Senna gewann den Detroit GP 1988 während er einen Großteil des Rennens im 4. Gang feststeckte und sein Können im McLaren-Honda zeigte.",
        nl: "Senna won de GP van Detroit in 1988 vast in de 4e versnelling voor een groot deel van de race, zijn vaardigheid tonend in de McLaren-Honda."
      }
    },
    {
      question: {
        en: "At which 2000 race did Michael Schumacher equal Ayrton Senna's win record?",
        es: "¿En qué carrera de 2000 igualó Michael Schumacher el récord de victorias de Ayrton Senna?",
        de: "Bei welchem Rennen 2000 egalisierte Michael Schumacher Ayrton Sennas Siegrekord?",
        nl: "Bij welke race van 2000 evenaarde Michael Schumacher Ayrton Senna's overwinningsrecord?"
      },
      options: [
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "Japanese Grand Prix",
        "Malaysian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won the 2000 Italian Grand Prix at Monza for his 41st career victory, equaling Senna's then-record.",
        es: "Michael Schumacher ganó el Gran Premio de Italia de 2000 en Monza para su 41ª victoria de carrera, igualando el récord de Senna de entonces.",
        de: "Michael Schumacher gewann den Italien GP 2000 in Monza für seinen 41. Karrieresieg und egalisierte Sennas damaliges Rekord.",
        nl: "Michael Schumacher won de Italiaanse Grand Prix van 2000 in Monza voor zijn 41e carrière-overwinning, Senna's toenmalige record evenarend."
      }
    },
    {
      question: {
        en: "Which 1992 race did Nigel Mansell win to clinch his only World Championship?",
        es: "¿Qué carrera de 1992 ganó Nigel Mansell para asegurar su único Campeonato Mundial?",
        de: "Welches Rennen 1992 gewann Nigel Mansell um seine einzige Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1992 won Nigel Mansell om zijn enige Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Nigel Mansell clinched the 1992 World Championship by winning the Hungarian Grand Prix, his 9th win in 11 races that dominant season.",
        es: "Nigel Mansell aseguró el Campeonato Mundial de 1992 al ganar el Gran Premio de Hungría, su 9ª victoria en 11 carreras esa temporada dominante.",
        de: "Nigel Mansell sicherte sich die Weltmeisterschaft 1992 durch den Sieg beim Ungarn GP, sein 9. Sieg in 11 Rennen dieser dominanten Saison.",
        nl: "Nigel Mansell stelde het Wereldkampioenschap van 1992 veilig door de Hongaarse Grand Prix te winnen, zijn 9e overwinning in 11 races dat dominante seizoen."
      }
    },
    {
      question: {
        en: "What was notable about the 2013 Malaysian Grand Prix team orders incident?",
        es: "¿Qué fue notable sobre el incidente de órdenes de equipo del Gran Premio de Malasia de 2013?",
        de: "Was war bemerkenswert am Teamorder-Vorfall beim Malaysia GP 2013?",
        nl: "Wat was opmerkelijk aan het teamorders incident bij de Maleisische Grand Prix van 2013?"
      },
      options: [
        "Hamilton ignored team orders",
        "Vettel passed Webber against orders",
        "Rosberg let Hamilton win",
        "Alonso refused to let Massa pass"
      ],
      correct: 1,
      explanation: {
        en: "Vettel ignored Red Bull's 'Multi 21' team orders and passed teammate Webber for the win at the 2013 Malaysian GP, causing major controversy.",
        es: "Vettel ignoró las órdenes de equipo 'Multi 21' de Red Bull y pasó a su compañero Webber para la victoria en el GP de Malasia de 2013, causando gran controversia.",
        de: "Vettel ignorierte Red Bulls 'Multi 21' Teamorder und überholte Teamkollege Webber zum Sieg beim Malaysia GP 2013, was große Kontroversen verursachte.",
        nl: "Vettel negeerde Red Bull's 'Multi 21' teamorders en passeerde teamgenoot Webber voor de overwinning in de Maleisische GP van 2013, wat grote controverse veroorzaakte."
      }
    },
    {
      question: {
        en: "Which 1950 race was the very first Formula 1 World Championship Grand Prix?",
        es: "¿Qué carrera de 1950 fue el primer Gran Premio del Campeonato Mundial de Fórmula 1?",
        de: "Welches Rennen 1950 war der allererste Formel-1-Weltmeisterschafts-Grand-Prix?",
        nl: "Welke race van 1950 was de allereerste Formule 1 Wereldkampioenschap Grand Prix?"
      },
      options: [
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "British Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The 1950 British Grand Prix at Silverstone on May 13, 1950 was the first ever Formula 1 World Championship race, won by Giuseppe Farina.",
        es: "El Gran Premio Británico de 1950 en Silverstone el 13 de mayo de 1950 fue la primera carrera del Campeonato Mundial de Fórmula 1, ganada por Giuseppe Farina.",
        de: "Der Britische GP 1950 in Silverstone am 13. Mai 1950 war das allererste Formel-1-Weltmeisterschaftsrennen, gewonnen von Giuseppe Farina.",
        nl: "De Britse Grand Prix van 1950 op Silverstone op 13 mei 1950 was de allereerste Formule 1 Wereldkampioenschap race, gewonnen door Giuseppe Farina."
      }
    }
  ];

  return { questions: questions };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level4;
}
