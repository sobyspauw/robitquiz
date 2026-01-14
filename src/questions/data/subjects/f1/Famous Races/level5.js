const level5 = (function() {
  const questions = [
    {
      question: {
        en: "Which 1967 race did Dan Gurney win and start the champagne-spraying tradition?",
        es: "¿Qué carrera de 1967 ganó Dan Gurney e inició la tradición de rociar champán?",
        de: "Welches Rennen 1967 gewann Dan Gurney und begann die Champagner-Sprüh-Tradition?",
        nl: "Welke race van 1967 won Dan Gurney en startte de champagne-spuit traditie?"
      },
      options: [
        "French Grand Prix",
        "Belgian Grand Prix",
        "Dutch Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Dan Gurney won the 1967 Belgian GP at Spa and spontaneously sprayed champagne from the podium, starting F1's iconic celebration tradition.",
        es: "Dan Gurney ganó el GP de Bélgica de 1967 en Spa y espontáneamente roció champán desde el podio, iniciando la icónica tradición de celebración de F1.",
        de: "Dan Gurney gewann den Belgien GP 1967 in Spa und sprühte spontan Champagner vom Podium, begann damit F1s ikonische Feiertradition.",
        nl: "Dan Gurney won de Belgische GP van 1967 in Spa en spoot spontaan champagne vanaf het podium, wat F1's iconische vierings traditie startte."
      }
    },
    {
      question: {
        en: "At which 1958 race did six drivers share the same Ferrari, yet one still won?",
        es: "¿En qué carrera de 1958 seis pilotos compartieron el mismo Ferrari, pero uno aún ganó?",
        de: "Bei welchem Rennen 1958 teilten sich sechs Fahrer denselben Ferrari und einer gewann trotzdem?",
        nl: "Bij welke race van 1958 deelden zes coureurs dezelfde Ferrari, maar won er toch één?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "Italian Grand Prix",
        "Argentine Grand Prix"
      ],
      correct: 3,
      explanation: {
        en: "At the 1958 Argentine GP, Musso's Ferrari was shared by 6 drivers due to heat exhaustion. Fangio still won despite sharing his car with Collins.",
        es: "En el GP de Argentina de 1958, el Ferrari de Musso fue compartido por 6 pilotos debido a la insolación. Fangio aún ganó a pesar de compartir su coche con Collins.",
        de: "Beim Argentinien GP 1958 wurde Mussos Ferrari von 6 Fahrern geteilt wegen Hitzeerschöpfung. Fangio gewann trotzdem obwohl er sein Auto mit Collins teilte.",
        nl: "Bij de Argentijnse GP van 1958 werd Musso's Ferrari gedeeld door 6 coureurs vanwege hitte-uitputting. Fangio won nog steeds ondanks het delen van zijn auto met Collins."
      }
    },
    {
      question: {
        en: "Which 1977 race saw a six-wheeled Tyrrell P34 take its last podium?",
        es: "¿En qué carrera de 1977 el Tyrrell P34 de seis ruedas logró su último podio?",
        de: "Bei welchem Rennen 1977 erreichte der sechsrädrige Tyrrell P34 sein letztes Podium?",
        nl: "Bij welke race van 1977 behaalde de zeswielige Tyrrell P34 zijn laatste podium?"
      },
      options: [
        "Monaco Grand Prix",
        "Belgian Grand Prix",
        "Swedish Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Ronnie Peterson finished 2nd in the six-wheeled Tyrrell P34 at the 1977 Swedish GP, the last podium for the unique car design.",
        es: "Ronnie Peterson terminó 2º en el Tyrrell P34 de seis ruedas en el GP de Suecia de 1977, el último podio para el diseño de coche único.",
        de: "Ronnie Peterson wurde Zweiter im sechsrädrigen Tyrrell P34 beim Schweden GP 1977, das letzte Podium für das einzigartige Auto-Design.",
        nl: "Ronnie Peterson eindigde als 2e in de zeswielige Tyrrell P34 bij de Zweedse GP van 1977, het laatste podium voor het unieke auto-ontwerp."
      }
    },
    {
      question: {
        en: "What made the 1966 Italian Grand Prix particularly dangerous?",
        es: "¿Qué hizo particularmente peligroso el Gran Premio de Italia de 1966?",
        de: "Was machte den Italien GP 1966 besonders gefährlich?",
        nl: "Wat maakte de Italiaanse Grand Prix van 1966 bijzonder gevaarlijk?"
      },
      options: [
        "Track surface breaking apart",
        "Banking at Monza still in use",
        "No safety barriers installed",
        "Race held in complete darkness"
      ],
      correct: 1,
      explanation: {
        en: "The 1966 Italian GP used Monza's high-speed banking circuit in combination with the road course, creating extremely dangerous speeds over 220 mph.",
        es: "El GP de Italia de 1966 usó el circuito de peralte de alta velocidad de Monza en combinación con el circuito de carretera, creando velocidades extremadamente peligrosas sobre 220 mph.",
        de: "Der Italien GP 1966 nutzte Monzas Hochgeschwindigkeits-Steilkurven-Kurs kombiniert mit der Straßenstrecke, was extrem gefährliche Geschwindigkeiten über 220 mph schuf.",
        nl: "De Italiaanse GP van 1966 gebruikte Monza's hoge snelheids banking circuit in combinatie met het wegcircuit, wat extreem gevaarlijke snelheden boven 220 mph creëerde."
      }
    },
    {
      question: {
        en: "At which 2004 race did Michael Schumacher break Fangio's 46-year championship record?",
        es: "¿En qué carrera de 2004 rompió Michael Schumacher el récord de campeonato de 46 años de Fangio?",
        de: "Bei welchem Rennen 2004 brach Michael Schumacher Fangios 46 Jahre alten Meisterschaftsrekord?",
        nl: "Bij welke race van 2004 brak Michael Schumacher Fangio's 46 jaar oude kampioenschapsrecord?"
      },
      options: [
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "Chinese Grand Prix",
        "Hungarian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher won the 2004 Belgian Grand Prix to secure his 7th World Championship, breaking Fangio's record of 5 titles that stood since 1957.",
        es: "Michael Schumacher ganó el Gran Premio de Bélgica de 2004 para asegurar su 7º Campeonato Mundial, rompiendo el récord de 5 títulos de Fangio que se mantuvo desde 1957.",
        de: "Michael Schumacher gewann den Belgien GP 2004 um seine 7. Weltmeisterschaft zu sichern und brach Fangios Rekord von 5 Titeln der seit 1957 bestand.",
        nl: "Michael Schumacher won de Belgische GP van 2004 om zijn 7e Wereldkampioenschap veilig te stellen, Fangio's record van 5 titels brekend dat sinds 1957 stond."
      }
    },
    {
      question: {
        en: "Which 1996 race did Damon Hill win to clinch his World Championship?",
        es: "¿Qué carrera de 1996 ganó Damon Hill para asegurar su Campeonato Mundial?",
        de: "Welches Rennen 1996 gewann Damon Hill um seine Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1996 won Damon Hill om zijn Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Italian Grand Prix",
        "Portuguese Grand Prix",
        "Japanese Grand Prix",
        "European Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Damon Hill won the 1996 Japanese GP at Suzuka to clinch the World Championship, fulfilling his father Graham's legacy 22 years after his death.",
        es: "Damon Hill ganó el GP de Japón de 1996 en Suzuka para asegurar el Campeonato Mundial, cumpliendo el legado de su padre Graham 22 años después de su muerte.",
        de: "Damon Hill gewann den Japan GP 1996 in Suzuka um die Weltmeisterschaft zu sichern und erfüllte das Vermächtnis seines Vaters Graham 22 Jahre nach dessen Tod.",
        nl: "Damon Hill won de Japanse GP van 1996 in Suzuka om het Wereldkampioenschap veilig te stellen, zijn vader Graham's nalatenschap vervullend 22 jaar na zijn dood."
      }
    },
    {
      question: {
        en: "What was remarkable about Jackie Stewart's 1968 German Grand Prix victory?",
        es: "¿Qué fue notable sobre la victoria de Jackie Stewart en el Gran Premio de Alemania de 1968?",
        de: "Was war bemerkenswert an Jackie Stewarts Sieg beim Deutschland GP 1968?",
        nl: "Wat was opmerkelijk aan Jackie Stewart's overwinning in de Duitse Grand Prix van 1968?"
      },
      options: [
        "Won by over 4 minutes in thick fog",
        "Drove entire race with broken arm",
        "Started from pit lane",
        "Won despite running out of fuel"
      ],
      correct: 0,
      explanation: {
        en: "Jackie Stewart won the 1968 German GP at the Nürburgring in thick fog by over 4 minutes, one of the most dominant drives in F1 history.",
        es: "Jackie Stewart ganó el GP de Alemania de 1968 en el Nürburgring en niebla espesa por más de 4 minutos, una de las actuaciones más dominantes en la historia de F1.",
        de: "Jackie Stewart gewann den Deutschland GP 1968 am Nürburgring im dichten Nebel mit über 4 Minuten Vorsprung, eine der dominantesten Fahrleistungen der F1-Geschichte.",
        nl: "Jackie Stewart won de Duitse GP van 1968 op de Nürburgring in dichte mist met meer dan 4 minuten voorsprong, een van de meest dominante rijprestaties in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "Which 1970 race saw Jochen Rindt posthumously crowned World Champion?",
        es: "¿En qué carrera de 1970 fue coronado póstumamente Jochen Rindt como Campeón Mundial?",
        de: "Bei welchem Rennen 1970 wurde Jochen Rindt posthum Weltmeister gekrönt?",
        nl: "Bij welke race van 1970 werd Jochen Rindt postuum tot Wereldkampioen gekroond?"
      },
      options: [
        "Italian Grand Prix",
        "United States Grand Prix",
        "Canadian Grand Prix",
        "Mexican Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "After Rindt's fatal crash at Monza, his points lead was secured when rivals failed to catch him by the 1970 US GP, making him F1's only posthumous champion.",
        es: "Después del accidente fatal de Rindt en Monza, su ventaja de puntos se aseguró cuando los rivales no pudieron alcanzarlo en el GP de EE.UU. de 1970, haciéndolo el único campeón póstumo de F1.",
        de: "Nach Rindts tödlichem Unfall in Monza wurde sein Punktevorsprung beim USA GP 1970 gesichert als Rivalen ihn nicht einholen konnten, er wurde F1s einziger posthumer Champion.",
        nl: "Na Rindt's fatale crash in Monza werd zijn puntenvoorsprong veiliggesteld toen rivalen hem niet konden inhalen bij de US GP van 1970, hij werd F1's enige postume kampioen."
      }
    },
    {
      question: {
        en: "At which 1991 race did Ayrton Senna famously give Gerhard Berger a lift back to the pits?",
        es: "¿En qué carrera de 1991 Ayrton Senna dio famosamente un aventón a Gerhard Berger de regreso a los boxes?",
        de: "Bei welchem Rennen 1991 gab Ayrton Senna Gerhard Berger berühmt eine Mitfahrgelegenheit zurück zur Box?",
        nl: "Bij welke race van 1991 gaf Ayrton Senna Gerhard Berger beroemd een lift terug naar de pits?"
      },
      options: [
        "British Grand Prix",
        "Japanese Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "After winning the 1991 Japanese GP, Senna stopped on the cooldown lap to give his friend Berger, who had run out of fuel, a lift back to the pits.",
        es: "Después de ganar el GP de Japón de 1991, Senna se detuvo en la vuelta de enfriamiento para darle a su amigo Berger, que se había quedado sin combustible, un aventón de regreso a los boxes.",
        de: "Nach dem Gewinn des Japan GP 1991 stoppte Senna in der Ausrollrunde um seinem Freund Berger, dem der Sprit ausging, eine Mitfahrgelegenheit zur Box zu geben.",
        nl: "Na het winnen van de Japanse GP van 1991 stopte Senna in de cooldown ronde om zijn vriend Berger, die zonder brandstof was gevallen, een lift terug naar de pits te geven."
      }
    },
    {
      question: {
        en: "Which 1985 race did Michele Alboreto win for Ferrari's last victory until 1994?",
        es: "¿Qué carrera de 1985 ganó Michele Alboreto para la última victoria de Ferrari hasta 1994?",
        de: "Welches Rennen 1985 gewann Michele Alboreto für Ferraris letzten Sieg bis 1994?",
        nl: "Welke race van 1985 won Michele Alboreto voor Ferrari's laatste overwinning tot 1994?"
      },
      options: [
        "German Grand Prix",
        "Canadian Grand Prix",
        "Austrian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Michele Alboreto won the 1985 German GP, Ferrari's last win for 59 races until Gerhard Berger won the 1994 German GP, also for Ferrari.",
        es: "Michele Alboreto ganó el GP de Alemania de 1985, la última victoria de Ferrari durante 59 carreras hasta que Gerhard Berger ganó el GP de Alemania de 1994, también para Ferrari.",
        de: "Michele Alboreto gewann den Deutschland GP 1985, Ferraris letzter Sieg für 59 Rennen bis Gerhard Berger den Deutschland GP 1994 gewann, auch für Ferrari.",
        nl: "Michele Alboreto won de Duitse GP van 1985, Ferrari's laatste overwinning gedurende 59 races totdat Gerhard Berger de Duitse GP van 1994 won, ook voor Ferrari."
      }
    },
    {
      question: {
        en: "What happened at the 1978 Swedish Grand Prix that changed F1 safety forever?",
        es: "¿Qué pasó en el Gran Premio de Suecia de 1978 que cambió la seguridad de F1 para siempre?",
        de: "Was geschah beim Schweden GP 1978 das die F1-Sicherheit für immer veränderte?",
        nl: "Wat gebeurde er bij de Zweedse Grand Prix van 1978 dat F1-veiligheid voor altijd veranderde?"
      },
      options: [
        "Ronnie Peterson's fatal crash",
        "First use of HANS device",
        "Track invasion by protesters",
        "Fire in the pits"
      ],
      correct: 0,
      explanation: {
        en: "Ronnie Peterson's fatal crash at the 1978 Swedish GP led to major safety improvements including better medical facilities and stronger crash structures.",
        es: "El accidente fatal de Ronnie Peterson en el GP de Suecia de 1978 llevó a mejoras importantes de seguridad incluyendo mejores instalaciones médicas y estructuras de choque más fuertes.",
        de: "Ronnie Petersons tödlicher Unfall beim Schweden GP 1978 führte zu wichtigen Sicherheitsverbesserungen einschließlich besserer medizinischer Einrichtungen und stärkerer Crash-Strukturen.",
        nl: "Ronnie Peterson's fatale crash bij de Zweedse GP van 1978 leidde tot belangrijke veiligheidsverbeteringen inclusief betere medische faciliteiten en sterkere crash-structuren."
      }
    },
    {
      question: {
        en: "Which 2006 race did Fernando Alonso win to secure his second consecutive championship?",
        es: "¿Qué carrera de 2006 ganó Fernando Alonso para asegurar su segundo campeonato consecutivo?",
        de: "Welches Rennen 2006 gewann Fernando Alonso um seine zweite aufeinanderfolgende Meisterschaft zu sichern?",
        nl: "Welke race van 2006 won Fernando Alonso om zijn tweede opeenvolgende kampioenschap veilig te stellen?"
      },
      options: [
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Chinese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Fernando Alonso finished 2nd at the 2006 Chinese GP to clinch his second consecutive World Championship for Renault, becoming the youngest double champion.",
        es: "Fernando Alonso terminó 2º en el GP de China de 2006 para asegurar su segundo Campeonato Mundial consecutivo para Renault, convirtiéndose en el campeón doble más joven.",
        de: "Fernando Alonso wurde beim China GP 2006 Zweiter um seine zweite aufeinanderfolgende Weltmeisterschaft für Renault zu sichern und wurde jüngster Doppelweltmeister.",
        nl: "Fernando Alonso eindigde als 2e in de Chinese GP van 2006 om zijn tweede opeenvolgende Wereldkampioenschap voor Renault veilig te stellen, de jongste dubbele kampioen wordend."
      }
    },
    {
      question: {
        en: "At which 1987 race did Nigel Mansell have his famous tire blowout while leading?",
        es: "¿En qué carrera de 1987 tuvo Nigel Mansell su famoso reventón de neumático mientras lideraba?",
        de: "Bei welchem Rennen 1987 hatte Nigel Mansell seinen berühmten Reifenplatzer während er führte?",
        nl: "Bij welke race van 1987 had Nigel Mansell zijn beroemde bandenklappers terwijl hij leidde?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "Austrian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Nigel Mansell's tire exploded on the main straight at the 1987 British GP while leading with 3 laps to go, handing victory to teammate Piquet.",
        es: "El neumático de Nigel Mansell explotó en la recta principal del GP Británico de 1987 mientras lideraba a 3 vueltas del final, dando la victoria a su compañero Piquet.",
        de: "Nigel Mansells Reifen explodierte auf der Hauptgeraden beim Britischen GP 1987 während er mit 3 Runden Vorsprung führte, Sieg ging an Teamkollege Piquet.",
        nl: "Nigel Mansell's band explodeerde op het rechte stuk bij de Britse GP van 1987 terwijl hij leidde met 3 ronden te gaan, overwinning ging naar teamgenoot Piquet."
      }
    },
    {
      question: {
        en: "Which 1993 race did Alain Prost win to secure his fourth and final World Championship?",
        es: "¿Qué carrera de 1993 ganó Alain Prost para asegurar su cuarto y último Campeonato Mundial?",
        de: "Welches Rennen 1993 gewann Alain Prost um seine vierte und letzte Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1993 won Alain Prost om zijn vierde en laatste Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "Portuguese Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix",
        "Hungarian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Alain Prost won the 1993 Portuguese GP to clinch his 4th World Championship for Williams, then retired at season's end with 51 career wins.",
        es: "Alain Prost ganó el GP de Portugal de 1993 para asegurar su 4º Campeonato Mundial para Williams, luego se retiró al final de la temporada con 51 victorias de carrera.",
        de: "Alain Prost gewann den Portugal GP 1993 um seine 4. Weltmeisterschaft für Williams zu sichern, zog sich dann am Saisonende mit 51 Karrieresiegen zurück.",
        nl: "Alain Prost won de Portugese GP van 1993 om zijn 4e Wereldkampioenschap voor Williams veilig te stellen, stopte toen aan het einde van het seizoen met 51 carrière-overwinningen."
      }
    },
    {
      question: {
        en: "What made the 1969 Spanish Grand Prix particularly significant for safety?",
        es: "¿Qué hizo particularmente significativo el Gran Premio de España de 1969 para la seguridad?",
        de: "Was machte den Spanien GP 1969 besonders bedeutsam für die Sicherheit?",
        nl: "Wat maakte de Spaanse Grand Prix van 1969 bijzonder belangrijk voor veiligheid?"
      },
      options: [
        "First race with roll bars mandatory",
        "Introduction of rear wings caused crashes",
        "First medical helicopter deployed",
        "Armco barriers first installed"
      ],
      correct: 1,
      explanation: {
        en: "The 1969 Spanish GP saw multiple high-speed crashes when tall rear wings failed, leading to regulations limiting wing size and mounting for safety.",
        es: "El GP de España de 1969 vio múltiples choques a alta velocidad cuando las alas traseras altas fallaron, llevando a regulaciones limitando el tamaño y montaje de alas por seguridad.",
        de: "Der Spanien GP 1969 sah mehrere Hochgeschwindigkeits-Unfälle als hohe Heckflügel versagten, führte zu Vorschriften die Flügelgröße und Montage aus Sicherheitsgründen limitierten.",
        nl: "De Spaanse GP van 1969 zag meerdere hoge snelheid crashes toen hoge achtervleugels faalden, leidde tot regelgeving die vleugel grootte en montage voor veiligheid beperkte."
      }
    },
    {
      question: {
        en: "Which 2007 race did Kimi Räikkönen win to become World Champion?",
        es: "¿Qué carrera de 2007 ganó Kimi Räikkönen para convertirse en Campeón Mundial?",
        de: "Welches Rennen 2007 gewann Kimi Räikkönen um Weltmeister zu werden?",
        nl: "Welke race van 2007 won Kimi Räikkönen om Wereldkampioen te worden?"
      },
      options: [
        "Chinese Grand Prix",
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Kimi Räikkönen won the 2007 Brazilian GP to snatch the championship from Hamilton and Alonso by just 1 point in a dramatic finale.",
        es: "Kimi Räikkönen ganó el GP de Brasil de 2007 para arrebatar el campeonato a Hamilton y Alonso por solo 1 punto en un final dramático.",
        de: "Kimi Räikkönen gewann den Brasilien GP 2007 um Hamilton und Alonso die Meisterschaft mit nur 1 Punkt Vorsprung in einem dramatischen Finale zu entreißen.",
        nl: "Kimi Räikkönen won de Braziliaanse GP van 2007 om het kampioenschap van Hamilton en Alonso met slechts 1 punt verschil in een dramatische finale te grijpen."
      }
    },
    {
      question: {
        en: "At which 1959 race did Bruce McLaren become F1's youngest winner at the time?",
        es: "¿En qué carrera de 1959 se convirtió Bruce McLaren en el ganador más joven de F1 en ese momento?",
        de: "Bei welchem Rennen 1959 wurde Bruce McLaren damals jüngster F1-Sieger?",
        nl: "Bij welke race van 1959 werd Bruce McLaren destijds F1's jongste winnaar?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "United States Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Bruce McLaren won the 1959 US GP at Sebring at age 22 years and 104 days, becoming F1's youngest winner until 2003.",
        es: "Bruce McLaren ganó el GP de EE.UU. de 1959 en Sebring con 22 años y 104 días, convirtiéndose en el ganador más joven de F1 hasta 2003.",
        de: "Bruce McLaren gewann den USA GP 1959 in Sebring im Alter von 22 Jahren und 104 Tagen und wurde jüngster F1-Sieger bis 2003.",
        nl: "Bruce McLaren won de US GP van 1959 in Sebring op 22 jaar en 104 dagen oud, werd F1's jongste winnaar tot 2003."
      }
    },
    {
      question: {
        en: "Which 1999 race did Eddie Irvine nearly win the championship for Ferrari?",
        es: "¿En qué carrera de 1999 Eddie Irvine casi ganó el campeonato para Ferrari?",
        de: "Bei welchem Rennen 1999 hätte Eddie Irvine fast die Meisterschaft für Ferrari gewonnen?",
        nl: "Bij welke race van 1999 had Eddie Irvine bijna het kampioenschap voor Ferrari gewonnen?"
      },
      options: [
        "Malaysian Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix",
        "European Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Eddie Irvine finished 3rd at the 1999 Japanese GP finale, losing the championship to Häkkinen by just 2 points after Schumacher's mid-season injury.",
        es: "Eddie Irvine terminó 3º en la final del GP de Japón de 1999, perdiendo el campeonato ante Häkkinen por solo 2 puntos tras la lesión de Schumacher a mitad de temporada.",
        de: "Eddie Irvine wurde beim Japan GP Finale 1999 Dritter und verlor die Meisterschaft an Häkkinen mit nur 2 Punkten nach Schumachers Verletzung Mitte der Saison.",
        nl: "Eddie Irvine eindigde als 3e in de Japanse GP finale van 1999, verloor het kampioenschap aan Häkkinen met slechts 2 punten na Schumacher's mid-season blessure."
      }
    },
    {
      question: {
        en: "What was unique about the 1963 Mexican Grand Prix?",
        es: "¿Qué fue único sobre el Gran Premio de México de 1963?",
        de: "Was war einzigartig am Mexiko GP 1963?",
        nl: "Wat was uniek aan de Mexicaanse Grand Prix van 1963?"
      },
      options: [
        "Held at highest altitude circuit",
        "Race run entirely at night",
        "First race in Americas",
        "Shortest race in F1 history"
      ],
      correct: 0,
      explanation: {
        en: "The 1963 Mexican GP at Autódromo Hermanos Rodríguez was held at 2,285m altitude, the highest circuit in F1 history, affecting engine performance.",
        es: "El GP de México de 1963 en el Autódromo Hermanos Rodríguez se celebró a 2.285m de altitud, el circuito más alto en la historia de F1, afectando el rendimiento del motor.",
        de: "Der Mexiko GP 1963 im Autódromo Hermanos Rodríguez fand auf 2.285m Höhe statt, die höchste Strecke in der F1-Geschichte, beeinflusste Motorleistung.",
        nl: "De Mexicaanse GP van 1963 op Autódromo Hermanos Rodríguez werd gehouden op 2.285m hoogte, het hoogste circuit in F1-geschiedenis, beïnvloedde motorprestaties."
      }
    },
    {
      question: {
        en: "Which 2018 race did Lewis Hamilton win to equal Fangio's 5 World Championships?",
        es: "¿Qué carrera de 2018 ganó Lewis Hamilton para igualar los 5 Campeonatos Mundiales de Fangio?",
        de: "Welches Rennen 2018 gewann Lewis Hamilton um Fangios 5 Weltmeisterschaften zu egalisieren?",
        nl: "Welke race van 2018 won Lewis Hamilton om Fangio's 5 Wereldkampioenschappen te evenaren?"
      },
      options: [
        "United States Grand Prix",
        "Brazilian Grand Prix",
        "Mexican Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton finished 4th at the 2018 Mexican GP to clinch his 5th World Championship, equaling Fangio's record set in 1957.",
        es: "Lewis Hamilton terminó 4º en el GP de México de 2018 para asegurar su 5º Campeonato Mundial, igualando el récord de Fangio establecido en 1957.",
        de: "Lewis Hamilton wurde beim Mexiko GP 2018 Vierter um seine 5. Weltmeisterschaft zu sichern und egalisierte Fangios Rekord von 1957.",
        nl: "Lewis Hamilton eindigde als 4e in de Mexicaanse GP van 2018 om zijn 5e Wereldkampioenschap veilig te stellen, Fangio's record uit 1957 evenarend."
      }
    },
    {
      question: {
        en: "At which 1976 race did Niki Lauda nearly lose his life in a fiery crash?",
        es: "¿En qué carrera de 1976 Niki Lauda casi perdió la vida en un accidente con fuego?",
        de: "Bei welchem Rennen 1976 wäre Niki Lauda bei einem Feuerunfall fast gestorben?",
        nl: "Bij welke race van 1976 verloor Niki Lauda bijna zijn leven in een brandende crash?"
      },
      options: [
        "Belgian Grand Prix",
        "German Grand Prix",
        "Austrian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Niki Lauda crashed and was trapped in his burning Ferrari at the 1976 German GP at the Nürburgring, suffering severe burns and lung damage.",
        es: "Niki Lauda se estrelló y quedó atrapado en su Ferrari en llamas en el GP de Alemania de 1976 en el Nürburgring, sufriendo quemaduras graves y daño pulmonar.",
        de: "Niki Lauda verunglückte und war in seinem brennenden Ferrari beim Deutschland GP 1976 am Nürburgring gefangen, erlitt schwere Verbrennungen und Lungenschäden.",
        nl: "Niki Lauda crashte en zat vast in zijn brandende Ferrari bij de Duitse GP van 1976 op de Nürburgring, leed ernstige brandwonden en longschade."
      }
    },
    {
      question: {
        en: "Which 1980 race did Alan Jones win to secure Williams' first Drivers' Championship?",
        es: "¿Qué carrera de 1980 ganó Alan Jones para asegurar el primer Campeonato de Pilotos de Williams?",
        de: "Welches Rennen 1980 gewann Alan Jones um Williams erste Fahrermeisterschaft zu sichern?",
        nl: "Welke race van 1980 won Alan Jones om Williams' eerste Rijderskampioenschap veilig te stellen?"
      },
      options: [
        "Canadian Grand Prix",
        "United States Grand Prix",
        "Italian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Alan Jones won the 1980 Canadian GP to clinch Williams' first Drivers' Championship, cementing the team's rise to F1 dominance.",
        es: "Alan Jones ganó el GP de Canadá de 1980 para asegurar el primer Campeonato de Pilotos de Williams, cementando el ascenso del equipo al dominio de F1.",
        de: "Alan Jones gewann den Kanada GP 1980 um Williams erste Fahrermeisterschaft zu sichern und festigte den Aufstieg des Teams zur F1-Dominanz.",
        nl: "Alan Jones won de Canadese GP van 1980 om Williams' eerste Rijderskampioenschap veilig te stellen, de opkomst van het team naar F1-dominantie cementerend."
      }
    },
    {
      question: {
        en: "What happened at the start of the 2022 Saudi Arabian Grand Prix?",
        es: "¿Qué pasó en la salida del Gran Premio de Arabia Saudita de 2022?",
        de: "Was geschah beim Start des Saudi-Arabien GP 2022?",
        nl: "Wat gebeurde er bij de start van de Saoedi-Arabische Grand Prix van 2022?"
      },
      options: [
        "Nearby missile strike during race",
        "Mass collision on lap 1",
        "Track surface collapsed",
        "Power failure stopped race"
      ],
      correct: 0,
      explanation: {
        en: "During the 2022 Saudi Arabian GP weekend, a missile strike on a nearby oil facility caused smoke visible from the track, raising safety concerns.",
        es: "Durante el fin de semana del GP de Arabia Saudita de 2022, un ataque con misiles a una instalación petrolera cercana causó humo visible desde la pista, generando preocupaciones de seguridad.",
        de: "Während des Saudi-Arabien GP Wochenendes 2022 verursachte ein Raketenangriff auf eine nahe Ölanlage Rauch der von der Strecke sichtbar war und Sicherheitsbedenken aufwarf.",
        nl: "Tijdens het Saudi-Arabische GP weekend van 2022 veroorzaakte een raketaanval op een nabijgelegen oliefaciliteit rook zichtbaar vanaf het circuit, wat veiligheidszorgen opriep."
      }
    },
    {
      question: {
        en: "Which 1955 race saw the deadliest accident in motorsport history?",
        es: "¿En qué carrera de 1955 ocurrió el accidente más mortífero en la historia del automovilismo?",
        de: "Bei welchem Rennen 1955 ereignete sich der tödlichste Unfall in der Motorsportgeschichte?",
        nl: "Bij welke race van 1955 vond het dodelijkste ongeluk in de motorsportgeschiedenis plaats?"
      },
      options: [
        "Monaco Grand Prix",
        "German Grand Prix",
        "Le Mans 24 Hours",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The 1955 Le Mans disaster killed 83 spectators when Pierre Levegh's Mercedes flew into the crowd, leading to racing bans in several countries.",
        es: "El desastre de Le Mans de 1955 mató a 83 espectadores cuando el Mercedes de Pierre Levegh voló hacia la multitud, llevando a prohibiciones de carreras en varios países.",
        de: "Die Le Mans Katastrophe 1955 tötete 83 Zuschauer als Pierre Leveghs Mercedes in die Menge flog, führte zu Rennverboten in mehreren Ländern.",
        nl: "De Le Mans ramp van 1955 doodde 83 toeschouwers toen Pierre Levegh's Mercedes de menigte invloog, leidde tot race-verboden in meerdere landen."
      }
    },
    {
      question: {
        en: "At which 2010 race did Sebastian Vettel become F1's youngest World Champion?",
        es: "¿En qué carrera de 2010 se convirtió Sebastian Vettel en el Campeón Mundial más joven de F1?",
        de: "Bei welchem Rennen 2010 wurde Sebastian Vettel jüngster F1-Weltmeister?",
        nl: "Bij welke race van 2010 werd Sebastian Vettel F1's jongste Wereldkampioen?"
      },
      options: [
        "Brazilian Grand Prix",
        "Korean Grand Prix",
        "Abu Dhabi Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Sebastian Vettel won the 2010 Abu Dhabi GP finale to snatch the championship from Alonso and become F1's youngest champion at 23 years old.",
        es: "Sebastian Vettel ganó la final del GP de Abu Dhabi de 2010 para arrebatar el campeonato a Alonso y convertirse en el campeón más joven de F1 con 23 años.",
        de: "Sebastian Vettel gewann das Abu Dhabi GP Finale 2010 um Alonso die Meisterschaft zu entreißen und wurde mit 23 Jahren jüngster F1-Weltmeister.",
        nl: "Sebastian Vettel won de Abu Dhabi GP finale van 2010 om het kampioenschap van Alonso te grijpen en werd F1's jongste kampioen op 23-jarige leeftijd."
      }
    },
    {
      question: {
        en: "Which 1964 race decided the championship between three drivers on the final lap?",
        es: "¿Qué carrera de 1964 decidió el campeonato entre tres pilotos en la última vuelta?",
        de: "Welches Rennen 1964 entschied die Meisterschaft zwischen drei Fahrern in der letzten Runde?",
        nl: "Welke race van 1964 besliste het kampioenschap tussen drie coureurs in de laatste ronde?"
      },
      options: [
        "Italian Grand Prix",
        "United States Grand Prix",
        "Mexican Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The 1964 Mexican GP finale saw Surtees, Hill, and Clark all able to win the title. Surtees took 2nd place to win by 1 point.",
        es: "La final del GP de México de 1964 vio a Surtees, Hill y Clark todos capaces de ganar el título. Surtees tomó el 2º lugar para ganar por 1 punto.",
        de: "Das Mexiko GP Finale 1964 hatte Surtees, Hill und Clark alle mit Chance auf den Titel. Surtees wurde Zweiter und gewann mit 1 Punkt Vorsprung.",
        nl: "De Mexicaanse GP finale van 1964 zag Surtees, Hill en Clark allen met kans op de titel. Surtees werd 2e en won met 1 punt verschil."
      }
    },
    {
      question: {
        en: "At which 2001 race did Michael Schumacher equal Alain Prost's 51 wins record?",
        es: "¿En qué carrera de 2001 igualó Michael Schumacher el récord de 51 victorias de Alain Prost?",
        de: "Bei welchem Rennen 2001 egalisierte Michael Schumacher Alain Prosts Rekord von 51 Siegen?",
        nl: "Bij welke race van 2001 evenaarde Michael Schumacher Alain Prost's record van 51 overwinningen?"
      },
      options: [
        "Belgian Grand Prix",
        "Hungarian Grand Prix",
        "Italian Grand Prix",
        "Malaysian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher won the 2001 Belgian GP at Spa for his 51st career victory, equaling Prost's all-time record before breaking it later that season.",
        es: "Michael Schumacher ganó el GP de Bélgica de 2001 en Spa para su 51ª victoria de carrera, igualando el récord histórico de Prost antes de romperlo más tarde esa temporada.",
        de: "Michael Schumacher gewann den Belgien GP 2001 in Spa für seinen 51. Karrieresieg und egalisierte Prosts Allzeitrekord bevor er ihn später in der Saison brach.",
        nl: "Michael Schumacher won de Belgische GP van 2001 in Spa voor zijn 51e carrière-overwinning, Prost's all-time record evenarend voordat hij het later dat seizoen brak."
      }
    },
    {
      question: {
        en: "Which 1953 race saw the first use of disc brakes in Formula 1?",
        es: "¿Qué carrera de 1953 vio el primer uso de frenos de disco en Fórmula 1?",
        de: "Bei welchem Rennen 1953 wurden erstmals Scheibenbremsen in der Formel 1 verwendet?",
        nl: "Welke race van 1953 zag het eerste gebruik van schijfremmen in Formule 1?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The 1953 British GP saw the first use of disc brakes in F1 when Jaguar tested them on their C-Type, revolutionizing braking technology.",
        es: "El GP Británico de 1953 vio el primer uso de frenos de disco en F1 cuando Jaguar los probó en su C-Type, revolucionando la tecnología de frenado.",
        de: "Der Britische GP 1953 sah die erste Verwendung von Scheibenbremsen in F1 als Jaguar sie am C-Type testete und revolutionierte die Bremstechnologie.",
        nl: "De Britse GP van 1953 zag het eerste gebruik van schijfremmen in F1 toen Jaguar ze testte op hun C-Type, wat de remtechnologie revolutioneerde."
      }
    },
    {
      question: {
        en: "What was remarkable about the 2017 Singapore Grand Prix start?",
        es: "¿Qué fue notable sobre la salida del Gran Premio de Singapur de 2017?",
        de: "Was war bemerkenswert am Start des Singapur GP 2017?",
        nl: "Wat was opmerkelijk aan de start van de Singaporese Grand Prix van 2017?"
      },
      options: [
        "Three championship contenders crashed",
        "Safety car deployed before start",
        "Red flag before lights out",
        "Grid formation errors"
      ],
      correct: 0,
      explanation: {
        en: "At the 2017 Singapore GP start, Vettel, Räikkönen, and Verstappen crashed together, eliminating all three and effectively ending Vettel's title hopes.",
        es: "En la salida del GP de Singapur de 2017, Vettel, Räikkönen y Verstappen chocaron juntos, eliminando a los tres y efectivamente terminando las esperanzas de título de Vettel.",
        de: "Beim Start des Singapur GP 2017 crashten Vettel, Räikkönen und Verstappen zusammen, eliminierten alle drei und beendeten effektiv Vettels Titelchancen.",
        nl: "Bij de start van de Singaporese GP van 2017 crashten Vettel, Räikkönen en Verstappen samen, elimineerden alle drie en beëindigden effectief Vettel's titelkansen."
      }
    },
    {
      question: {
        en: "Which 1951 race featured the first use of the now-famous podium ceremony?",
        es: "¿Qué carrera de 1951 presentó el primer uso de la ahora famosa ceremonia del podio?",
        de: "Bei welchem Rennen 1951 gab es die erste Verwendung der heute berühmten Podiumszeremonie?",
        nl: "Welke race van 1951 had het eerste gebruik van de nu beroemde podiumceremonie?"
      },
      options: [
        "British Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1951 Italian Grand Prix at Monza introduced the podium ceremony tradition, which has become an iconic part of motorsport celebrations worldwide.",
        es: "El Gran Premio de Italia de 1951 en Monza introdujo la tradición de la ceremonia del podio, que se ha convertido en una parte icónica de las celebraciones de automovilismo en todo el mundo.",
        de: "Der Italien GP 1951 in Monza führte die Podiumszeremonie-Tradition ein, die ein ikonischer Teil von Motorsport-Feiern weltweit wurde.",
        nl: "De Italiaanse Grand Prix van 1951 in Monza introduceerde de podiumceremonie traditie, die een iconisch onderdeel van motorsport vieringen wereldwijd is geworden."
      }
    },
    {
      question: {
        en: "At which 2015 race did Nico Rosberg secure his first career pole position?",
        es: "¿En qué carrera de 2015 aseguró Nico Rosberg su primera pole position de carrera?",
        de: "Bei welchem Rennen 2015 sicherte sich Nico Rosberg seine erste Karriere-Pole-Position?",
        nl: "Bij welke race van 2015 behaalde Nico Rosberg zijn eerste carrière pole position?"
      },
      options: [
        "Australian Grand Prix 2010",
        "Chinese Grand Prix 2012",
        "Bahrain Grand Prix 2010",
        "Monaco Grand Prix 2013"
      ],
      correct: 1,
      explanation: {
        en: "Nico Rosberg scored his first pole position at the 2012 Chinese GP for Mercedes, starting a run that would see him take 30 poles in his career.",
        es: "Nico Rosberg logró su primera pole position en el GP de China de 2012 para Mercedes, iniciando una racha que lo vería tomar 30 poles en su carrera.",
        de: "Nico Rosberg erzielte seine erste Pole-Position beim China GP 2012 für Mercedes und startete eine Serie von 30 Poles in seiner Karriere.",
        nl: "Nico Rosberg behaalde zijn eerste pole position bij de Chinese GP van 2012 voor Mercedes, wat een reeks startte van 30 poles in zijn carrière."
      }
    },
    {
      question: {
        en: "Which 1974 race did Clay Regazzoni win for Ferrari after team orders controversy?",
        es: "¿Qué carrera de 1974 ganó Clay Regazzoni para Ferrari después de controversia de órdenes de equipo?",
        de: "Welches Rennen 1974 gewann Clay Regazzoni für Ferrari nach Teamorder-Kontroverse?",
        nl: "Welke race van 1974 won Clay Regazzoni voor Ferrari na teamorders controverse?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "Spanish Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Clay Regazzoni won the 1974 German GP after teammate Lauda was ordered to let him through, a rare instance of Ferrari team orders favoring the number two driver.",
        es: "Clay Regazzoni ganó el GP de Alemania de 1974 después de que se ordenara a su compañero Lauda que lo dejara pasar, un caso raro de órdenes de equipo de Ferrari favoreciendo al piloto número dos.",
        de: "Clay Regazzoni gewann den Deutschland GP 1974 nachdem Teamkollege Lauda angewiesen wurde ihn vorbei zu lassen, ein seltener Fall von Ferrari-Teamorders zugunsten des Zweiten Fahrers.",
        nl: "Clay Regazzoni won de Duitse GP van 1974 nadat teamgenoot Lauda bevolen werd hem te laten passeren, een zeldzaam geval van Ferrari teamorders ten gunste van de nummer twee coureur."
      }
    },
    {
      question: {
        en: "What made the 2020 Tuscan Grand Prix particularly chaotic?",
        es: "¿Qué hizo particularmente caótico el Gran Premio de Toscana de 2020?",
        de: "Was machte den Toskana GP 2020 besonders chaotisch?",
        nl: "Wat maakte de Toscaanse Grand Prix van 2020 bijzonder chaotisch?"
      },
      options: [
        "Three separate red flag stoppages",
        "Race abandoned after 10 laps",
        "All Mercedes retired",
        "Track surface melted"
      ],
      correct: 0,
      explanation: {
        en: "The 2020 Tuscan GP had three red flag periods due to multiple crashes, including a massive restart accident that eliminated several cars.",
        es: "El GP de Toscana de 2020 tuvo tres períodos de bandera roja debido a múltiples choques, incluyendo un accidente masivo en la reanudación que eliminó varios coches.",
        de: "Der Toskana GP 2020 hatte drei rote Flaggen-Perioden aufgrund mehrerer Unfälle, einschließlich eines massiven Neustart-Unfalls der mehrere Autos eliminierte.",
        nl: "De Toscaanse GP van 2020 had drie rode vlag periodes door meerdere crashes, inclusief een enorm herstart ongeluk dat meerdere auto's elimineerde."
      }
    },
    {
      question: {
        en: "Which 1965 race did Jim Clark win to secure his second World Championship?",
        es: "¿Qué carrera de 1965 ganó Jim Clark para asegurar su segundo Campeonato Mundial?",
        de: "Welches Rennen 1965 gewann Jim Clark um seine zweite Weltmeisterschaft zu sichern?",
        nl: "Welke race van 1965 won Jim Clark om zijn tweede Wereldkampioenschap veilig te stellen?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "Dutch Grand Prix",
        "British Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jim Clark won the 1965 German GP at the Nürburgring to clinch his second World Championship for Lotus, dominating the season with 6 wins.",
        es: "Jim Clark ganó el GP de Alemania de 1965 en el Nürburgring para asegurar su segundo Campeonato Mundial para Lotus, dominando la temporada con 6 victorias.",
        de: "Jim Clark gewann den Deutschland GP 1965 am Nürburgring um seine zweite Weltmeisterschaft für Lotus zu sichern, dominierte die Saison mit 6 Siegen.",
        nl: "Jim Clark won de Duitse GP van 1965 op de Nürburgring om zijn tweede Wereldkampioenschap voor Lotus veilig te stellen, domineerde het seizoen met 6 overwinningen."
      }
    },
    {
      question: {
        en: "At which 2022 race did Max Verstappen clinch his second World Championship?",
        es: "¿En qué carrera de 2022 aseguró Max Verstappen su segundo Campeonato Mundial?",
        de: "Bei welchem Rennen 2022 sicherte Max Verstappen seine zweite Weltmeisterschaft?",
        nl: "Bij welke race van 2022 stelde Max Verstappen zijn tweede Wereldkampioenschap veilig?"
      },
      options: [
        "Singapore Grand Prix",
        "Japanese Grand Prix",
        "United States Grand Prix",
        "Mexican Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won the 2022 Japanese GP to clinch his second consecutive World Championship with 4 races remaining, dominating the season.",
        es: "Max Verstappen ganó el GP de Japón de 2022 para asegurar su segundo Campeonato Mundial consecutivo con 4 carreras restantes, dominando la temporada.",
        de: "Max Verstappen gewann den Japan GP 2022 um seine zweite aufeinanderfolgende Weltmeisterschaft mit 4 verbleibenden Rennen zu sichern, dominierte die Saison.",
        nl: "Max Verstappen won de Japanse GP van 2022 om zijn tweede opeenvolgende Wereldkampioenschap veilig te stellen met 4 races te gaan, domineerde het seizoen."
      }
    },
    {
      question: {
        en: "Which 1957 race did Juan Manuel Fangio win to secure his fifth and final title?",
        es: "¿Qué carrera de 1957 ganó Juan Manuel Fangio para asegurar su quinto y último título?",
        de: "Welches Rennen 1957 gewann Juan Manuel Fangio um seinen fünften und letzten Titel zu sichern?",
        nl: "Welke race van 1957 won Juan Manuel Fangio om zijn vijfde en laatste titel veilig te stellen?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "Monaco Grand Prix",
        "French Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Fangio won the legendary 1957 German GP at the Nürburgring with an epic comeback drive, securing his 5th championship at age 46.",
        es: "Fangio ganó el legendario GP de Alemania de 1957 en el Nürburgring con una épica remontada, asegurando su 5º campeonato a los 46 años.",
        de: "Fangio gewann den legendären Deutschland GP 1957 am Nürburgring mit einer epischen Aufholjagd und sicherte seine 5. Meisterschaft im Alter von 46 Jahren.",
        nl: "Fangio won de legendarische Duitse GP van 1957 op de Nürburgring met een epische comeback, zijn 5e kampioenschap veiligstellend op 46-jarige leeftijd."
      }
    },
    {
      question: {
        en: "What was controversial about the 1994 Australian Grand Prix?",
        es: "¿Qué fue controvertido sobre el Gran Premio de Australia de 1994?",
        de: "Was war umstritten am Australien GP 1994?",
        nl: "Wat was controversieel aan de Australische Grand Prix van 1994?"
      },
      options: [
        "Schumacher collided with Hill to win title",
        "Race canceled mid-way",
        "Wrong driver declared champion",
        "Team disqualified after race"
      ],
      correct: 0,
      explanation: {
        en: "The 1994 Australian GP saw Schumacher collide with title rival Hill, eliminating both. Schumacher won the championship but controversy remains over intent.",
        es: "El GP de Australia de 1994 vio a Schumacher chocar con su rival de título Hill, eliminando a ambos. Schumacher ganó el campeonato pero la controversia permanece sobre la intención.",
        de: "Der Australien GP 1994 sah Schumacher mit Titelrivale Hill kollidieren, beide schieden aus. Schumacher gewann die Meisterschaft aber Kontroversen über Absicht bleiben.",
        nl: "De Australische GP van 1994 zag Schumacher botsen met titelrivaal Hill, beiden elimineerde. Schumacher won het kampioenschap maar controverse blijft over opzet."
      }
    },
    {
      question: {
        en: "Which 1968 race was the first Grand Prix held in the rain using wet-weather tires?",
        es: "¿Qué carrera de 1968 fue el primer Gran Premio celebrado bajo lluvia usando neumáticos de lluvia?",
        de: "Welches Rennen 1968 war der erste Grand Prix bei Regen mit Regenreifen gefahren?",
        nl: "Welke race van 1968 was de eerste Grand Prix gehouden in de regen met regenbanden?"
      },
      options: [
        "German Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix",
        "British Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The 1968 German GP at the Nürburgring was the first F1 race where teams used purpose-built wet-weather tires, won by Jackie Stewart in heavy fog and rain.",
        es: "El GP de Alemania de 1968 en el Nürburgring fue la primera carrera de F1 donde los equipos usaron neumáticos específicos para lluvia, ganada por Jackie Stewart en niebla densa y lluvia.",
        de: "Der Deutschland GP 1968 am Nürburgring war das erste F1-Rennen bei dem Teams speziell entwickelte Regenreifen nutzten, gewonnen von Jackie Stewart bei dichtem Nebel und Regen.",
        nl: "De Duitse GP van 1968 op de Nürburgring was de eerste F1-race waarbij teams speciaal gemaakte regenbanden gebruikten, gewonnen door Jackie Stewart in dichte mist en regen."
      }
    },
    {
      question: {
        en: "At which 1973 race did Jody Scheckter cause a massive first-lap pile-up?",
        es: "¿En qué carrera de 1973 causó Jody Scheckter un masivo accidente múltiple en la primera vuelta?",
        de: "Bei welchem Rennen 1973 verursachte Jody Scheckter eine massive Massenkarambolage in der ersten Runde?",
        nl: "Bij welke race van 1973 veroorzaakte Jody Scheckter een massale eerste ronde crash?"
      },
      options: [
        "British Grand Prix",
        "Italian Grand Prix",
        "German Grand Prix",
        "French Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The 1973 British GP at Silverstone saw Jody Scheckter spin at Woodcote corner on the first lap, causing a massive pile-up that eliminated 11 cars.",
        es: "El GP británico de 1973 en Silverstone vio a Jody Scheckter girar en la curva Woodcote en la primera vuelta, causando un accidente masivo que eliminó 11 coches.",
        de: "Der Britische GP 1973 in Silverstone sah Jody Scheckter in der Woodcote-Kurve in der ersten Runde drehen, was eine massive Massenkarambolage verursachte die 11 Autos eliminierte.",
        nl: "De Britse GP van 1973 op Silverstone zag Jody Scheckter spinnen bij de Woodcote bocht in de eerste ronde, wat een massale crash veroorzaakte die 11 auto's elimineerde."
      }
    },
    {
      question: {
        en: "Which 1981 race saw Carlos Reutemann lose the championship by finishing 8th?",
        es: "¿En qué carrera de 1981 perdió Carlos Reutemann el campeonato al terminar 8º?",
        de: "Bei welchem Rennen 1981 verlor Carlos Reutemann die Meisterschaft durch Platz 8?",
        nl: "Bij welke race van 1981 verloor Carlos Reutemann het kampioenschap door 8e te worden?"
      },
      options: [
        "Las Vegas Grand Prix",
        "Canadian Grand Prix",
        "Monaco Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The 1981 Las Vegas GP saw Carlos Reutemann finish 8th, losing the championship by one point to Nelson Piquet who finished 5th in one of F1's closest title battles.",
        es: "El GP de Las Vegas de 1981 vio a Carlos Reutemann terminar 8º, perdiendo el campeonato por un punto ante Nelson Piquet que terminó 5º en una de las batallas por el título más reñidas de F1.",
        de: "Der Las Vegas GP 1981 sah Carlos Reutemann auf Platz 8 enden, verlor die Meisterschaft um einen Punkt an Nelson Piquet der 5. wurde in einem der knappsten Titelkämpfe der F1.",
        nl: "De Las Vegas GP van 1981 zag Carlos Reutemann 8e worden, het kampioenschap verliezend met één punt aan Nelson Piquet die 5e werd in een van F1's spannendste titelgevechten."
      }
    }
  ];

  return { questions: questions };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level5;
}
