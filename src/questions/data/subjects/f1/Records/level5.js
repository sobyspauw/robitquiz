const level5 = (function() {
  const questions = [
    {
      question: {
        en: "What is the record for most points scored in a single race (excluding sprint)?",
        es: "¿Cuál es el récord de más puntos anotados en una sola carrera (excluyendo sprint)?",
        de: "Was ist der Rekord für die meisten in einem einzelnen Rennen erzielten Punkte (ohne Sprint)?",
        nl: "Wat is het record voor de meeste punten gescoord in een enkele race (exclusief sprint)?"
      },
      options: [
        "25 points (win)",
        "26 points (win + fastest lap)",
        "27 points (win + fastest lap + pole)",
        "25 points maximum per race"
      ],
      correct: 1,
      explanation: {
        en: "The maximum points in a single race is 26: 25 for winning plus 1 for fastest lap (if finishing in top 10). Pole position doesn't award points.",
        es: "El máximo de puntos en una sola carrera es 26: 25 por ganar más 1 por vuelta rápida (si termina en top 10). La pole position no otorga puntos.",
        de: "Die maximalen Punkte in einem einzelnen Rennen sind 26: 25 für den Sieg plus 1 für die schnellste Runde (wenn in den Top 10). Pole-Position gibt keine Punkte.",
        nl: "Het maximum aan punten in een enkele race is 26: 25 voor winnen plus 1 voor snelste ronde (als je finisht in top 10). Pole position geeft geen punten."
      }
    },
    {
      question: {
        en: "Which driver has the record for most podiums at a single circuit where they never won?",
        es: "¿Qué piloto tiene el récord de más podios en un solo circuito donde nunca ganó?",
        de: "Welcher Fahrer hat den Rekord für die meisten Podiumsplätze auf einer einzelnen Strecke, wo er nie gewann?",
        nl: "Welke coureur heeft het record voor de meeste podiums op een enkel circuit waar ze nooit wonnen?"
      },
      options: [
        "Nico Hulkenberg at Monaco (0 podiums, never won)",
        "Nick Heidfeld at Canada (5 podiums, never won)",
        "Felipe Massa at Monaco (4 podiums, never won)",
        "Mark Webber at Hungary (6 podiums, never won)"
      ],
      correct: 1,
      explanation: {
        en: "Nick Heidfeld finished on the podium 5 times at the Canadian GP (2007-2011) but never won there, the most podiums without a win at one circuit.",
        es: "Nick Heidfeld terminó en el podio 5 veces en el GP de Canadá (2007-2011) pero nunca ganó allí, los podios más sin una victoria en un circuito.",
        de: "Nick Heidfeld stand beim Kanada GP 5 Mal auf dem Podium (2007-2011), gewann aber nie dort, die meisten Podiumsplätze ohne Sieg auf einer Strecke.",
        nl: "Nick Heidfeld eindigde 5 keer op het podium op de Canadese GP (2007-2011) maar won nooit daar, de meeste podiums zonder een overwinning op één circuit."
      }
    },
    {
      question: {
        en: "What is the record for most race starts by a driver who never led a lap?",
        es: "¿Cuál es el récord de más inicios de carrera por un piloto que nunca lideró una vuelta?",
        de: "Was ist der Rekord für die meisten Rennstarts eines Fahrers, der nie eine Runde führte?",
        nl: "Wat is het record voor de meeste race starts door een coureur die nooit een ronde leidde?"
      },
      options: [
        "Nico Hulkenberg (199 starts)",
        "Adrian Sutil (128 starts)",
        "Esteban Ocon (120+ starts)",
        "Marcus Ericsson (97 starts)"
      ],
      correct: 0,
      explanation: {
        en: "Nico Hulkenberg started 199 races without ever leading a single lap, the most by any driver, despite having poles and strong performances.",
        es: "Nico Hulkenberg inició 199 carreras sin liderar una sola vuelta, la mayor cantidad de cualquier piloto, a pesar de tener poles y fuertes actuaciones.",
        de: "Nico Hulkenberg startete 199 Rennen ohne jemals eine einzige Runde zu führen, die meisten eines Fahrers, trotz Poles und starken Leistungen.",
        nl: "Nico Hulkenberg startte 199 races zonder ooit een enkele ronde te leiden, de meeste van alle coureurs, ondanks poles en sterke prestaties."
      }
    },
    {
      question: {
        en: "Which team achieved the highest points-per-race average in a season?",
        es: "¿Qué equipo logró el promedio de puntos por carrera más alto en una temporada?",
        de: "Welches Team erreichte den höchsten Punkte-pro-Rennen-Durchschnitt in einer Saison?",
        nl: "Welk team behaalde het hoogste punten-per-race gemiddelde in een seizoen?"
      },
      options: [
        "Mercedes 2016 (39.1 points/race)",
        "Red Bull 2023 (39.1 points/race)",
        "McLaren 1988 (37.4 points/race)",
        "Ferrari 2002 (34.5 points/race)"
      ],
      correct: 1,
      explanation: {
        en: "Red Bull averaged 39.1 points per race in 2023 (860 points / 22 races), matching Mercedes 2016 for the highest average in the modern points system.",
        es: "Red Bull promedió 39.1 puntos por carrera en 2023 (860 puntos / 22 carreras), igualando a Mercedes 2016 por el promedio más alto en el sistema de puntos moderno.",
        de: "Red Bull hatte 2023 einen Durchschnitt von 39,1 Punkten pro Rennen (860 Punkte / 22 Rennen) und erreichte wie Mercedes 2016 den höchsten Durchschnitt im modernen Punktesystem.",
        nl: "Red Bull had een gemiddelde van 39,1 punten per race in 2023 (860 punten / 22 races), gelijk aan Mercedes 2016 voor het hoogste gemiddelde in het moderne punten systeem."
      }
    },
    {
      question: {
        en: "What is the record for youngest driver to score a podium on debut?",
        es: "¿Cuál es el récord del piloto más joven en lograr un podio en su debut?",
        de: "Was ist der Rekord für den jüngsten Fahrer, der bei seinem Debüt ein Podium erreichte?",
        nl: "Wat is het record voor jongste coureur om een podium te scoren bij debuut?"
      },
      options: [
        "Max Verstappen (18 years, 228 days - won on debut)",
        "Lance Stroll (18 years, 239 days - 3rd)",
        "Sebastian Vettel (21 years, 73 days - 4th)",
        "Esteban Ocon (20 years, 2 days - 10th)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen won on his Red Bull debut at 18 years and 228 days (2016 Spanish GP), making him the youngest podium finisher on debut.",
        es: "Max Verstappen ganó en su debut con Red Bull a los 18 años y 228 días (GP de España 2016), convirtiéndolo en el finalista de podio más joven en debut.",
        de: "Max Verstappen gewann bei seinem Red Bull-Debüt im Alter von 18 Jahren und 228 Tagen (Spanien GP 2016) und wurde damit der jüngste Podiumsplatzierende beim Debüt.",
        nl: "Max Verstappen won bij zijn Red Bull debuut op 18 jaar en 228 dagen (2016 Spaanse GP), waardoor hij de jongste podium finisher bij debuut werd."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins in their championship-winning season?",
        es: "¿Qué piloto tiene el récord de más victorias en su temporada ganadora del campeonato?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege in seiner Meisterschaftsgewinn-Saison?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen in hun kampioenschap-winnende seizoen?"
      },
      options: [
        "Michael Schumacher 2004 (13 wins)",
        "Sebastian Vettel 2013 (13 wins)",
        "Max Verstappen 2023 (19 wins)",
        "Lewis Hamilton 2020 (11 wins)"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen won 19 races in his championship-winning 2023 season, the most wins in a championship year, dominating the season.",
        es: "Max Verstappen ganó 19 carreras en su temporada ganadora del campeonato 2023, las victorias más en un año de campeonato, dominando la temporada.",
        de: "Max Verstappen gewann 19 Rennen in seiner Meisterschaftsgewinn-Saison 2023, die meisten Siege in einem Meisterschaftsjahr, dominierte die Saison.",
        nl: "Max Verstappen won 19 races in zijn kampioenschap-winnende 2023 seizoen, de meeste overwinningen in een kampioenschap jaar, dominerend het seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive years finishing runner-up in the championship?",
        es: "¿Cuál es el récord de más años consecutivos finalizando subcampeón en el campeonato?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Jahre als Vizemeister?",
        nl: "Wat is het record voor de meeste opeenvolgende jaren eindigend als tweede in het kampioenschap?"
      },
      options: [
        "Stirling Moss (4 consecutive years, 1955-1958)",
        "Alain Prost (3 consecutive years)",
        "Fernando Alonso (2 consecutive years)",
        "Nico Rosberg (2 consecutive years, 2014-2015)"
      ],
      correct: 0,
      explanation: {
        en: "Stirling Moss finished runner-up 4 consecutive years (1955-1958), never winning the championship despite being considered one of the greatest drivers.",
        es: "Stirling Moss terminó subcampeón 4 años consecutivos (1955-1958), nunca ganando el campeonato a pesar de ser considerado uno de los mejores pilotos.",
        de: "Stirling Moss wurde 4 aufeinanderfolgende Jahre Zweiter (1955-1958), gewann nie die Meisterschaft, obwohl er als einer der größten Fahrer gilt.",
        nl: "Stirling Moss eindigde 4 opeenvolgende jaren als tweede (1955-1958), won nooit het kampioenschap ondanks beschouwd te worden als een van de grootste coureurs."
      }
    },
    {
      question: {
        en: "Which circuit has seen the most pole position lap record changes?",
        es: "¿Qué circuito ha visto más cambios de récord de vuelta de pole position?",
        de: "Welche Strecke hatte die meisten Änderungen des Pole-Position-Rundenrekords?",
        nl: "Welk circuit heeft de meeste pole position ronde record veranderingen gezien?"
      },
      options: [
        "Monza (broken almost every year)",
        "Monaco (rarely broken)",
        "Silverstone (regular improvements)",
        "Spa-Francorchamps (frequent changes)"
      ],
      correct: 0,
      explanation: {
        en: "Monza sees its pole lap record broken almost annually due to low downforce setups and continuous car development, making it the most frequently updated.",
        es: "Monza ve su récord de vuelta de pole roto casi anualmente debido a configuraciones de baja carga aerodinámica y desarrollo continuo de autos, convirtiéndolo en el más actualizado.",
        de: "Monza sieht seinen Pole-Rundenrekord fast jährlich gebrochen aufgrund von Low-Downforce-Setups und kontinuierlicher Autoentwicklung, was es zum am häufigsten aktualisierten macht.",
        nl: "Monza ziet zijn pole ronde record bijna jaarlijks gebroken door lage downforce setups en continue auto ontwikkeling, waardoor het de meest frequent bijgewerkte is."
      }
    },
    {
      question: {
        en: "What is the record for most top-3 championship finishes without winning the title?",
        es: "¿Cuál es el récord de más finales top-3 del campeonato sin ganar el título?",
        de: "Was ist der Rekord für die meisten Top-3-Meisterschaftsplatzierungen ohne Titelgewinn?",
        nl: "Wat is het record voor de meeste top-3 kampioenschap finishes zonder de titel te winnen?"
      },
      options: [
        "Rubens Barrichello (6 times top-3, 0 titles)",
        "Stirling Moss (4 times 2nd, 0 titles)",
        "Felipe Massa (3 times top-3, 0 titles)",
        "Valtteri Bottas (5 times top-3, 0 titles)"
      ],
      correct: 3,
      explanation: {
        en: "Valtteri Bottas finished in the top 3 of the championship 5 times (2017-2021) without winning a title, always behind Hamilton or Verstappen.",
        es: "Valtteri Bottas terminó en el top 3 del campeonato 5 veces (2017-2021) sin ganar un título, siempre detrás de Hamilton o Verstappen.",
        de: "Valtteri Bottas beendete die Meisterschaft 5 Mal in den Top 3 (2017-2021) ohne einen Titel zu gewinnen, immer hinter Hamilton oder Verstappen.",
        nl: "Valtteri Bottas eindigde 5 keer in de top 3 van het kampioenschap (2017-2021) zonder een titel te winnen, altijd achter Hamilton of Verstappen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most laps completed at a single circuit across their career?",
        es: "¿Qué piloto tiene el récord de más vueltas completadas en un solo circuito a lo largo de su carrera?",
        de: "Welcher Fahrer hat den Rekord für die meisten gefahrenen Runden auf einer einzelnen Strecke während seiner Karriere?",
        nl: "Welke coureur heeft het record voor de meeste rondes voltooid op een enkel circuit gedurende hun carrière?"
      },
      options: [
        "Kimi Räikkönen at Spa (1,000+ laps)",
        "Lewis Hamilton at Silverstone (1,100+ laps)",
        "Fernando Alonso at Barcelona (1,200+ laps)",
        "Michael Schumacher at Monza (900+ laps)"
      ],
      correct: 2,
      explanation: {
        en: "Fernando Alonso completed over 1,200 laps at Barcelona/Catalunya across his career, racing there from 2001-2023, the most at any single circuit.",
        es: "Fernando Alonso completó más de 1,200 vueltas en Barcelona/Catalunya a lo largo de su carrera, corriendo allí desde 2001-2023, las más en cualquier circuito.",
        de: "Fernando Alonso fuhr über 1.200 Runden in Barcelona/Catalunya während seiner Karriere, von 2001-2023, die meisten auf einer einzelnen Strecke.",
        nl: "Fernando Alonso voltooide meer dan 1.200 rondes op Barcelona/Catalunya gedurende zijn carrière, racend daar van 2001-2023, de meeste op enkel circuit."
      }
    },
    {
      question: {
        en: "What is the record for most mechanical DNFs in a championship-winning season?",
        es: "¿Cuál es el récord de más DNFs mecánicos en una temporada ganadora del campeonato?",
        de: "Was ist der Rekord für die meisten mechanischen DNFs in einer Meisterschaftsgewinn-Saison?",
        nl: "Wat is het record voor de meeste mechanische DNFs in een kampioenschap-winnend seizoen?"
      },
      options: [
        "Niki Lauda 1984 (5 mechanical DNFs)",
        "Kimi Räikkönen 2007 (3 mechanical DNFs)",
        "James Hunt 1976 (6 mechanical DNFs)",
        "Lewis Hamilton 2008 (2 mechanical DNFs)"
      ],
      correct: 2,
      explanation: {
        en: "James Hunt suffered 6 mechanical DNFs in his championship-winning 1976 season, showing the reliability challenges of that era despite winning the title.",
        es: "James Hunt sufrió 6 DNFs mecánicos en su temporada ganadora del campeonato 1976, mostrando los desafíos de confiabilidad de esa era a pesar de ganar el título.",
        de: "James Hunt erlitt 6 mechanische DNFs in seiner Meisterschaftsgewinn-Saison 1976 und zeigte die Zuverlässigkeitsprobleme dieser Ära trotz Titelgewinn.",
        nl: "James Hunt had 6 mechanische DNFs in zijn kampioenschap-winnende 1976 seizoen, wat de betrouwbaarheids uitdagingen van dat tijdperk toont ondanks het winnen van de titel."
      }
    },
    {
      question: {
        en: "Which team has the record for most 1-2 finishes in a single season?",
        es: "¿Qué equipo tiene el récord de más finales 1-2 en una sola temporada?",
        de: "Welches Team hat den Rekord für die meisten 1-2-Zieleinläufe in einer Saison?",
        nl: "Welk team heeft het record voor de meeste 1-2 finishes in een enkel seizoen?"
      },
      options: [
        "Mercedes 2016 (12 one-twos)",
        "McLaren 1988 (10 one-twos)",
        "Red Bull 2023 (9 one-twos)",
        "Ferrari 2002 (9 one-twos)"
      ],
      correct: 0,
      explanation: {
        en: "Mercedes achieved 12 one-two finishes in 2016 with Hamilton and Rosberg, the most in a single season, showing total dominance.",
        es: "Mercedes logró 12 finales uno-dos en 2016 con Hamilton y Rosberg, las más en una sola temporada, mostrando dominio total.",
        de: "Mercedes erreichte 2016 mit Hamilton und Rosberg 12 Doppelsiege, die meisten in einer Saison, zeigte totale Dominanz.",
        nl: "Mercedes behaalde 12 een-twee finishes in 2016 met Hamilton en Rosberg, de meeste in een enkel seizoen, wat totale dominantie toont."
      }
    },
    {
      question: {
        en: "What is the record for most races to achieve first pole position?",
        es: "¿Cuál es el récord de más carreras para lograr la primera pole position?",
        de: "Was ist der Rekord für die meisten Rennen bis zur ersten Pole-Position?",
        nl: "Wat is het record voor de meeste races om eerste pole position te bereiken?"
      },
      options: [
        "Rubens Barrichello (81 races)",
        "Mark Webber (84 races)",
        "Fernando Alonso (28 races)",
        "Jenson Button (113 races)"
      ],
      correct: 3,
      explanation: {
        en: "Jenson Button took 113 races before scoring his first pole at the 2006 Australian GP, the longest wait for a driver who eventually achieved pole.",
        es: "Jenson Button tomó 113 carreras antes de lograr su primera pole en el GP de Australia 2006, la espera más larga para un piloto que finalmente logró pole.",
        de: "Jenson Button brauchte 113 Rennen vor seiner ersten Pole beim Australien GP 2006, die längste Wartezeit für einen Fahrer, der schließlich eine Pole erreichte.",
        nl: "Jenson Button had 113 races nodig voordat hij zijn eerste pole scoorde op de 2006 Australische GP, de langste wachttijd voor een coureur die uiteindelijk pole behaalde."
      }
    },
    {
      question: {
        en: "Which driver has the record for most different race numbers used in their career?",
        es: "¿Qué piloto tiene el récord de más números de carrera diferentes usados en su carrera?",
        de: "Welcher Fahrer hat den Rekord für die meisten verschiedenen Startnummern in seiner Karriere?",
        nl: "Welke coureur heeft het record voor de meeste verschillende race nummers gebruikt in hun carrière?"
      },
      options: [
        "Fernando Alonso (5 different numbers)",
        "Kimi Räikkönen (7 different numbers)",
        "Sebastian Vettel (4 different numbers)",
        "Lewis Hamilton (2 numbers - 22, then 44)"
      ],
      correct: 1,
      explanation: {
        en: "Kimi Räikkönen used 7 different race numbers across his career (before permanent numbers): 1, 2, 3, 4, 6, 9, and 7, the most variety.",
        es: "Kimi Räikkönen usó 7 números de carrera diferentes a lo largo de su carrera (antes de números permanentes): 1, 2, 3, 4, 6, 9 y 7, la mayor variedad.",
        de: "Kimi Räikkönen verwendete 7 verschiedene Startnummern während seiner Karriere (vor permanenten Nummern): 1, 2, 3, 4, 6, 9 und 7, die meiste Vielfalt.",
        nl: "Kimi Räikkönen gebruikte 7 verschillende race nummers gedurende zijn carrière (voor permanente nummers): 1, 2, 3, 4, 6, 9 en 7, de meeste variëteit."
      }
    },
    {
      question: {
        en: "What is the record for shortest time between a driver's first and second win?",
        es: "¿Cuál es el récord del tiempo más corto entre la primera y segunda victoria de un piloto?",
        de: "Was ist der Rekord für die kürzeste Zeit zwischen erstem und zweitem Sieg eines Fahrers?",
        nl: "Wat is het record voor de kortste tijd tussen eerste en tweede overwinning van een coureur?"
      },
      options: [
        "1 day (back-to-back races)",
        "7 days (consecutive weekends)",
        "14 days (two weeks apart)",
        "0 days (same day - double header)"
      ],
      correct: 1,
      explanation: {
        en: "Several drivers won their first two races on consecutive weekends (7 days apart), like Verstappen in 2016 (Spain-Monaco) and others in back-to-back race weeks.",
        es: "Varios pilotos ganaron sus primeras dos carreras en fines de semana consecutivos (7 días de diferencia), como Verstappen en 2016 (España-Mónaco) y otros en semanas consecutivas.",
        de: "Mehrere Fahrer gewannen ihre ersten beiden Rennen an aufeinanderfolgenden Wochenenden (7 Tage auseinander), wie Verstappen 2016 (Spanien-Monaco) und andere in aufeinanderfolgenden Rennwochen.",
        nl: "Verschillende coureurs wonnen hun eerste twee races in opeenvolgende weekenden (7 dagen uit elkaar), zoals Verstappen in 2016 (Spanje-Monaco) en anderen in opeenvolgende race weken."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races between pole positions?",
        es: "¿Qué piloto tiene el récord de más carreras entre pole positions?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen zwischen Pole-Positionen?",
        nl: "Welke coureur heeft het record voor de meeste races tussen pole positions?"
      },
      options: [
        "Rubens Barrichello (87 races gap)",
        "Jenson Button (77 races gap)",
        "Fernando Alonso (92 races gap)",
        "Kimi Räikkönen (134 races gap)"
      ],
      correct: 3,
      explanation: {
        en: "Kimi Räikkönen had a 134-race gap between poles: France 2008 to Monaco 2017, the longest drought for a driver who eventually took another pole.",
        es: "Kimi Räikkönen tuvo un intervalo de 134 carreras entre poles: Francia 2008 a Mónaco 2017, la sequía más larga para un piloto que finalmente tomó otra pole.",
        de: "Kimi Räikkönen hatte eine 134-Rennen-Lücke zwischen Poles: Frankreich 2008 bis Monaco 2017, die längste Durststrecke für einen Fahrer, der schließlich eine weitere Pole holte.",
        nl: "Kimi Räikkönen had een 134-race kloof tussen poles: Frankrijk 2008 tot Monaco 2017, de langste droogte voor een coureur die uiteindelijk een andere pole behaalde."
      }
    },
    {
      question: {
        en: "What is the record for most constructors represented on the podium in a single race?",
        es: "¿Cuál es el récord de más constructores representados en el podio en una sola carrera?",
        de: "Was ist der Rekord für die meisten auf dem Podium vertretenen Konstrukteure in einem einzelnen Rennen?",
        nl: "Wat is het record voor de meeste constructeurs vertegenwoordigd op het podium in een enkele race?"
      },
      options: [
        "3 different constructors (typical)",
        "2 different constructors (team domination)",
        "4 different constructors (never happened)",
        "3 is the maximum possible"
      ],
      correct: 3,
      explanation: {
        en: "Only 3 constructors can be on the podium since there are only 3 positions (1st, 2nd, 3rd). This happens regularly when different teams finish in top 3.",
        es: "Solo 3 constructores pueden estar en el podio ya que solo hay 3 posiciones (1°, 2°, 3°). Esto ocurre regularmente cuando diferentes equipos terminan en el top 3.",
        de: "Nur 3 Konstrukteure können auf dem Podium stehen, da es nur 3 Positionen gibt (1., 2., 3.). Dies geschieht regelmäßig, wenn verschiedene Teams in den Top 3 landen.",
        nl: "Slechts 3 constructeurs kunnen op het podium staan omdat er slechts 3 posities zijn (1e, 2e, 3e). Dit gebeurt regelmatig wanneer verschillende teams in de top 3 eindigen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins from starting P3 on the grid?",
        es: "¿Qué piloto tiene el récord de más victorias partiendo desde P3 en la parrilla?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege von Startplatz P3?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen vanaf startpositie P3?"
      },
      options: [
        "Lewis Hamilton (9 wins from P3)",
        "Michael Schumacher (12 wins from P3)",
        "Ayrton Senna (6 wins from P3)",
        "Fernando Alonso (5 wins from P3)"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won 12 races after starting from 3rd position, showing his ability to capitalize on race incidents and strategy from P3.",
        es: "Michael Schumacher ganó 12 carreras después de partir desde la 3ª posición, mostrando su capacidad para capitalizar incidentes de carrera y estrategia desde P3.",
        de: "Michael Schumacher gewann 12 Rennen nach Start von Position 3 und zeigte seine Fähigkeit, Rennvorfälle und Strategie von P3 zu nutzen.",
        nl: "Michael Schumacher won 12 races na te starten vanaf 3e positie, wat zijn vermogen toont om te profiteren van race incidenten en strategie vanaf P3."
      }
    },
    {
      question: {
        en: "What is the record for most pitstops by a race winner in a dry race?",
        es: "¿Cuál es el récord de más paradas en boxes por un ganador de carrera en una carrera seca?",
        de: "Was ist der Rekord für die meisten Boxenstopps eines Rennsiegers in einem trockenen Rennen?",
        nl: "Wat is het record voor de meeste pitstops door een race winnaar in een droge race?"
      },
      options: [
        "2 stops (common strategy)",
        "3 stops (aggressive strategy)",
        "4 stops (2008 Canadian GP)",
        "1 stop (conservative strategy)"
      ],
      correct: 2,
      explanation: {
        en: "Robert Kubica won the 2008 Canadian GP with 4 pitstops due to safety cars and strategy, the most stops by a race winner in dry conditions.",
        es: "Robert Kubica ganó el GP de Canadá 2008 con 4 paradas debido a safety cars y estrategia, las paradas más de un ganador en condiciones secas.",
        de: "Robert Kubica gewann den Kanada GP 2008 mit 4 Boxenstopps aufgrund von Safety Cars und Strategie, die meisten Stopps eines Rennsiegers bei trockenen Bedingungen.",
        nl: "Robert Kubica won de 2008 Canadese GP met 4 pitstops door safety cars en strategie, de meeste stops van een race winnaar in droge omstandigheden."
      }
    },
    {
      question: {
        en: "Which driver has the record for most career overtakes for the lead?",
        es: "¿Qué piloto tiene el récord de más adelantamientos por el liderato en su carrera?",
        de: "Welcher Fahrer hat den Rekord für die meisten Karriere-Überholmanöver um die Führung?",
        nl: "Welke coureur heeft het record voor de meeste carrière inhaalmanoeuvres voor de leiding?"
      },
      options: [
        "Michael Schumacher (68 overtakes for lead)",
        "Lewis Hamilton (78+ overtakes for lead)",
        "Ayrton Senna (42 overtakes for lead)",
        "Fernando Alonso (54 overtakes for lead)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has made 78+ overtakes for the race lead during his career, the most in F1 history, showing his racecraft and attacking ability.",
        es: "Lewis Hamilton ha hecho más de 78 adelantamientos por el liderato de carrera durante su carrera, los más en la historia de F1, mostrando su habilidad y capacidad de ataque.",
        de: "Lewis Hamilton machte über 78 Überholmanöver um die Rennführung während seiner Karriere, die meisten in der F1-Geschichte, zeigte seine Rennkunst und Angriffsfähigkeit.",
        nl: "Lewis Hamilton heeft 78+ inhaalmanoeuvres voor de race leiding gemaakt tijdens zijn carrière, de meeste in F1 geschiedenis, wat zijn racevaardigheid en aanvallend vermogen toont."
      }
    },
    {
      question: {
        en: "What is the record for longest winning streak by different drivers (no repeat winners)?",
        es: "¿Cuál es el récord de la racha de victorias más larga por diferentes pilotos (sin ganadores repetidos)?",
        de: "Was ist der Rekord für die längste Siegesserie verschiedener Fahrer (keine wiederholten Sieger)?",
        nl: "Wat is het record voor langste overwinningsreeks door verschillende coureurs (geen herhaalde winnaars)?"
      },
      options: [
        "7 consecutive races (2012)",
        "5 consecutive races (2003)",
        "6 consecutive races (1982)",
        "4 consecutive races (2010)"
      ],
      correct: 0,
      explanation: {
        en: "In 2012, 7 consecutive races had 7 different winners at the start of the season, showing unprecedented parity and unpredictability.",
        es: "En 2012, 7 carreras consecutivas tuvieron 7 ganadores diferentes al inicio de la temporada, mostrando paridad e imprevisibilidad sin precedentes.",
        de: "2012 hatten 7 aufeinanderfolgende Rennen 7 verschiedene Sieger zu Saisonbeginn und zeigten beispiellose Ausgeglichenheit und Unvorhersehbarkeit.",
        nl: "In 2012 hadden 7 opeenvolgende races 7 verschillende winnaars aan het begin van het seizoen, wat ongekende pariteit en onvoorspelbaarheid toont."
      }
    },
    {
      question: {
        en: "Which team has the record for most consecutive races scoring points with both cars?",
        es: "¿Qué equipo tiene el récord de más carreras consecutivas anotando puntos con ambos autos?",
        de: "Welches Team hat den Rekord für die meisten aufeinanderfolgenden Rennen mit Punkten für beide Autos?",
        nl: "Welk team heeft het record voor de meeste opeenvolgende races met punten scoren met beide auto's?"
      },
      options: [
        "Mercedes (41 consecutive double-points)",
        "Red Bull (33 consecutive double-points)",
        "Ferrari (28 consecutive double-points)",
        "McLaren (24 consecutive double-points)"
      ],
      correct: 0,
      explanation: {
        en: "Mercedes scored points with both cars in 41 consecutive races from 2015-2017, showing exceptional consistency and reliability from both drivers.",
        es: "Mercedes anotó puntos con ambos autos en 41 carreras consecutivas desde 2015-2017, mostrando consistencia excepcional y confiabilidad de ambos pilotos.",
        de: "Mercedes erzielte von 2015-2017 in 41 aufeinanderfolgenden Rennen mit beiden Autos Punkte und zeigte außergewöhnliche Konsistenz und Zuverlässigkeit beider Fahrer.",
        nl: "Mercedes scoorde punten met beide auto's in 41 opeenvolgende races van 2015-2017, wat uitzonderlijke consistentie en betrouwbaarheid van beide coureurs toont."
      }
    },
    {
      question: {
        en: "What is the record for most championship points without a fastest lap?",
        es: "¿Cuál es el récord de más puntos de campeonato sin una vuelta rápida?",
        de: "Was ist der Rekord für die meisten Meisterschaftspunkte ohne schnellste Runde?",
        nl: "Wat is het record voor de meeste kampioenschap punten zonder een snelste ronde?"
      },
      options: [
        "Jarno Trulli (246 points, 0 fastest laps)",
        "Nick Heidfeld (259 points, 2 fastest laps)",
        "Nico Hulkenberg (530+ points, 0 fastest laps)",
        "Pastor Maldonado (45 points, 0 fastest laps)"
      ],
      correct: 2,
      explanation: {
        en: "Nico Hulkenberg scored 530+ career points without ever recording a fastest lap, the most points by a driver who never achieved this.",
        es: "Nico Hulkenberg anotó más de 530 puntos en su carrera sin registrar una vuelta rápida, los puntos más de un piloto que nunca logró esto.",
        de: "Nico Hulkenberg erzielte über 530 Karrierepunkte ohne jemals die schnellste Runde zu fahren, die meisten Punkte eines Fahrers, der dies nie erreichte.",
        nl: "Nico Hulkenberg scoorde 530+ carrière punten zonder ooit een snelste ronde te registreren, de meeste punten door een coureur die dit nooit behaalde."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins while leading the championship?",
        es: "¿Qué piloto tiene el récord de más victorias mientras lideraba el campeonato?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege während er die Meisterschaft anführte?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen terwijl hij het kampioenschap leidde?"
      },
      options: [
        "Michael Schumacher (47 wins while leading)",
        "Lewis Hamilton (52+ wins while leading)",
        "Sebastian Vettel (31 wins while leading)",
        "Max Verstappen (28+ wins while leading)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has won 52+ races while leading the championship standings, showing his ability to perform under pressure as the title favorite.",
        es: "Lewis Hamilton ha ganado más de 52 carreras mientras lideraba la clasificación del campeonato, mostrando su capacidad de actuar bajo presión como favorito al título.",
        de: "Lewis Hamilton gewann über 52 Rennen, während er die Meisterschaftswertung anführte, und zeigte seine Fähigkeit, unter Druck als Titelfavorit zu performen.",
        nl: "Lewis Hamilton heeft 52+ races gewonnen terwijl hij het kampioenschap aanvoerde, wat zijn vermogen toont om te presteren onder druk als titel favoriet."
      }
    },
    {
      question: {
        en: "What is the record for most races for a team in their debut season?",
        es: "¿Cuál es el récord de más carreras para un equipo en su temporada de debut?",
        de: "Was ist der Rekord für die meisten Rennen eines Teams in seiner Debütsaison?",
        nl: "Wat is het record voor de meeste races voor een team in hun debuutseizoen?"
      },
      options: [
        "16 races (standard calendar)",
        "22 races (modern calendar)",
        "24 races (2023 calendar)",
        "Varies by year of debut"
      ],
      correct: 3,
      explanation: {
        en: "The number of races in a debut season varies by year: early teams had 7-10 races, 1990s-2000s had 16-18, modern teams face 22-24 races.",
        es: "El número de carreras en una temporada de debut varía por año: equipos tempranos tuvieron 7-10 carreras, 1990s-2000s tuvieron 16-18, equipos modernos enfrentan 22-24 carreras.",
        de: "Die Anzahl der Rennen in einer Debütsaison variiert nach Jahr: frühe Teams hatten 7-10 Rennen, 1990er-2000er hatten 16-18, moderne Teams haben 22-24 Rennen.",
        nl: "Het aantal races in een debuutseizoen varieert per jaar: vroege teams hadden 7-10 races, 1990s-2000s hadden 16-18, moderne teams hebben 22-24 races."
      }
    },
    {
      question: {
        en: "Which driver has the record for most podiums in losing championship seasons (2nd or worse)?",
        es: "¿Qué piloto tiene el récord de más podios en temporadas de campeonato perdidas (2° o peor)?",
        de: "Welcher Fahrer hat den Rekord für die meisten Podiumsplätze in verlorenen Meisterschaftssaisons (2. oder schlechter)?",
        nl: "Welke coureur heeft het record voor de meeste podiums in verliezende kampioenschap seizoenen (2e of slechter)?"
      },
      options: [
        "Fernando Alonso (74 podiums without title)",
        "Lewis Hamilton (32 podiums in non-winning years)",
        "Rubens Barrichello (47 podiums in non-winning years)",
        "Valtteri Bottas (44 podiums, 0 titles)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso achieved 74 podiums in seasons where he didn't win the championship (excluding his 2005-2006 titles), the most non-championship podiums.",
        es: "Fernando Alonso logró 74 podios en temporadas donde no ganó el campeonato (excluyendo sus títulos 2005-2006), los podios sin campeonato más.",
        de: "Fernando Alonso erreichte 74 Podiumsplätze in Saisons ohne Meisterschaftsgewinn (ohne seine Titel 2005-2006), die meisten Nicht-Meisterschafts-Podien.",
        nl: "Fernando Alonso behaalde 74 podiums in seizoenen waar hij het kampioenschap niet won (exclusief zijn 2005-2006 titels), de meeste niet-kampioenschap podiums."
      }
    },
    {
      question: {
        en: "What is the record for most pole positions at a circuit where a driver never won?",
        es: "¿Cuál es el récord de más pole positions en un circuito donde un piloto nunca ganó?",
        de: "Was ist der Rekord für die meisten Pole-Positionen auf einer Strecke, wo ein Fahrer nie gewann?",
        nl: "Wat is het record voor de meeste pole positions op een circuit waar een coureur nooit won?"
      },
      options: [
        "Jarno Trulli at Monaco (1 pole, never won)",
        "Felipe Massa at Silverstone (3 poles, never won)",
        "Valtteri Bottas at Bahrain (2 poles, never won)",
        "Nico Rosberg at Hungary (2 poles, never won)"
      ],
      correct: 1,
      explanation: {
        en: "Felipe Massa took 3 pole positions at Silverstone but never won the British GP there, the most poles without a win at a single circuit.",
        es: "Felipe Massa tomó 3 pole positions en Silverstone pero nunca ganó el GP Británico allí, las poles más sin una victoria en un solo circuito.",
        de: "Felipe Massa holte 3 Pole-Positionen in Silverstone, gewann aber nie den Großen Preis von Großbritannien dort, die meisten Poles ohne Sieg auf einer Strecke.",
        nl: "Felipe Massa behaalde 3 pole positions op Silverstone maar won nooit de Britse GP daar, de meeste poles zonder een overwinning op een enkel circuit."
      }
    },
    {
      question: {
        en: "Which driver has the record for most consecutive races in the points without a podium?",
        es: "¿Qué piloto tiene el récord de más carreras consecutivas en puntos sin un podio?",
        de: "Welcher Fahrer hat den Rekord für die meisten aufeinanderfolgenden Rennen in den Punkten ohne Podium?",
        nl: "Welke coureur heeft het record voor de meeste opeenvolgende races in de punten zonder een podium?"
      },
      options: [
        "Nico Hulkenberg (35 consecutive points without podium)",
        "Sergio Perez (28 consecutive points without podium)",
        "Carlos Sainz (24 consecutive points without podium)",
        "Esteban Ocon (19 consecutive points without podium)"
      ],
      correct: 0,
      explanation: {
        en: "Nico Hulkenberg scored points in 35 consecutive races (2016-2018) without a podium, showing consistency but never quite reaching the top 3.",
        es: "Nico Hulkenberg anotó puntos en 35 carreras consecutivas (2016-2018) sin un podio, mostrando consistencia pero nunca alcanzando el top 3.",
        de: "Nico Hulkenberg erzielte in 35 aufeinanderfolgenden Rennen (2016-2018) Punkte ohne Podium und zeigte Konstanz, erreichte aber nie die Top 3.",
        nl: "Nico Hulkenberg scoorde punten in 35 opeenvolgende races (2016-2018) zonder een podium, wat consistentie toont maar nooit de top 3 bereikte."
      }
    },
    {
      question: {
        en: "What is the record for largest points gap between teammates at end of season?",
        es: "¿Cuál es el récord de la mayor brecha de puntos entre compañeros al final de la temporada?",
        de: "Was ist der Rekord für die größte Punktedifferenz zwischen Teamkollegen am Saisonende?",
        nl: "Wat is het record voor de grootste punten kloof tussen teamgenoten aan het einde van het seizoen?"
      },
      options: [
        "454 points (Verstappen 575 vs Perez 285, 2023) - actually 290",
        "161 points (Hamilton vs Kovalainen, 2008)",
        "215 points (Vettel vs Webber, 2013)",
        "178 points (Schumacher vs Barrichello, 2002)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen outscored teammate Sergio Perez by 290 points in 2023 (575 vs 285), the largest teammate gap in the modern points system.",
        es: "Max Verstappen superó al compañero Sergio Pérez por 290 puntos en 2023 (575 vs 285), la brecha de compañeros más grande en el sistema de puntos moderno.",
        de: "Max Verstappen übertraf Teamkollege Sergio Perez 2023 um 290 Punkte (575 vs 285), die größte Teamkollegen-Lücke im modernen Punktesystem.",
        nl: "Max Verstappen scoorde 290 punten meer dan teamgenoot Sergio Perez in 2023 (575 vs 285), de grootste teamgenoot kloof in het moderne punten systeem."
      }
    },
    {
      question: {
        en: "Which team scored their first points in the most recent season of operation?",
        es: "¿Qué equipo anotó sus primeros puntos en la temporada más reciente de operación?",
        de: "Welches Team erzielte seine ersten Punkte in der jüngsten Betriebssaison?",
        nl: "Welk team scoorde hun eerste punten in het meest recente seizoen van operatie?"
      },
      options: [
        "Haas F1 (2016 - points in debut race)",
        "Toyota (2002 - first points in 2002)",
        "Manor/Marussia (2014 - first points)",
        "Caterham (never scored points)"
      ],
      correct: 0,
      explanation: {
        en: "Haas F1 scored points on their debut race (6th place, Australia 2016) with Romain Grosjean, one of the best debut performances by a new team.",
        es: "Haas F1 anotó puntos en su carrera de debut (6° lugar, Australia 2016) con Romain Grosjean, una de las mejores actuaciones de debut de un equipo nuevo.",
        de: "Haas F1 erzielte Punkte bei ihrem Debütrennen (6. Platz, Australien 2016) mit Romain Grosjean, eine der besten Debütleistungen eines neuen Teams.",
        nl: "Haas F1 scoorde punten bij hun debuut race (6e plaats, Australië 2016) met Romain Grosjean, een van de beste debuut prestaties van een nieuw team."
      }
    },
    {
      question: {
        en: "What is the record for most wins in a row at the same circuit by a driver?",
        es: "¿Cuál es el récord de más victorias consecutivas en el mismo circuito por un piloto?",
        de: "Was ist der Rekord für die meisten Siege in Folge auf derselben Strecke eines Fahrers?",
        nl: "Wat is het record voor de meeste overwinningen op rij op hetzelfde circuit door een coureur?"
      },
      options: [
        "Ayrton Senna at Monaco (5 consecutive, 1989-1993)",
        "Michael Schumacher at Monza (5 consecutive, 1996-2000)",
        "Lewis Hamilton at Spain (4 consecutive, 2017-2020)",
        "Max Verstappen at Austria (3 consecutive, 2018-2021)"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna won 5 consecutive Monaco GPs from 1989-1993, dominating the principality and earning the title 'King of Monaco'.",
        es: "Ayrton Senna ganó 5 GP de Mónaco consecutivos desde 1989-1993, dominando el principado y ganándose el título 'Rey de Mónaco'.",
        de: "Ayrton Senna gewann von 1989-1993 5 aufeinanderfolgende Monaco GPs, dominierte das Fürstentum und erhielt den Titel 'König von Monaco'.",
        nl: "Ayrton Senna won 5 opeenvolgende Monaco GPs van 1989-1993, dominerend het prinsdom en verdiende de titel 'Koning van Monaco'."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races finished exactly 4th (off-podium)?",
        es: "¿Qué piloto tiene el récord de más carreras terminadas exactamente en 4° (fuera del podio)?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen auf exakt Platz 4 (außerhalb des Podiums)?",
        nl: "Welke coureur heeft het record voor de meeste races gefinisht op exact 4e plaats (buiten podium)?"
      },
      options: [
        "Nico Hulkenberg (32 fourth-places)",
        "Sergio Perez (28 fourth-places)",
        "Felipe Massa (31 fourth-places)",
        "Valtteri Bottas (24 fourth-places)"
      ],
      correct: 0,
      explanation: {
        en: "Nico Hulkenberg finished 4th place 32 times, earning him the nickname 'Mr. Fourth Place' for consistently missing the podium by one position.",
        es: "Nico Hulkenberg terminó en 4° lugar 32 veces, ganándose el apodo 'Sr. Cuarto Lugar' por perder consistentemente el podio por una posición.",
        de: "Nico Hulkenberg wurde 32 Mal Vierter und erhielt den Spitznamen 'Herr Vierter Platz', weil er das Podium konsequent um eine Position verfehlte.",
        nl: "Nico Hulkenberg eindigde 32 keer als 4e, waardoor hij de bijnaam 'Mr. Fourth Place' kreeg voor het consistent missen van het podium met één positie."
      }
    },
    {
      question: {
        en: "What is the record for most podiums achieved in a single season without winning?",
        es: "¿Cuál es el récord de más podios logrados en una sola temporada sin ganar?",
        de: "Was ist der Rekord für die meisten in einer Saison erreichten Podiumsplätze ohne Sieg?",
        nl: "Wat is het record voor de meeste podiums behaald in een enkel seizoen zonder te winnen?"
      },
      options: [
        "Lando Norris 2021 (4 podiums, 0 wins)",
        "Nick Heidfeld 2009 (5 podiums, 0 wins)",
        "Sergio Perez 2012 (3 podiums, 0 wins)",
        "Charles Leclerc 2019 (2 podiums, 2 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Nick Heidfeld achieved 5 podiums in 2009 (4 second-places, 1 third) without winning, the most podiums in a winless season.",
        es: "Nick Heidfeld logró 5 podios en 2009 (4 segundos lugares, 1 tercero) sin ganar, los podios más en una temporada sin victorias.",
        de: "Nick Heidfeld erreichte 2009 5 Podiumsplätze (4 zweite Plätze, 1 dritter) ohne zu gewinnen, die meisten Podien in einer sieglosen Saison.",
        nl: "Nick Heidfeld behaalde 5 podiums in 2009 (4 tweede plaatsen, 1 derde) zonder te winnen, de meeste podiums in een seizoen zonder overwinning."
      }
    },
    {
      question: {
        en: "Which driver has the record for most seasons competing without ever scoring a pole?",
        es: "¿Qué piloto tiene el récord de más temporadas compitiendo sin lograr una pole?",
        de: "Welcher Fahrer hat den Rekord für die meisten Saisons ohne jemals eine Pole zu holen?",
        nl: "Welke coureur heeft het record voor de meeste seizoenen strijdend zonder ooit een pole te scoren?"
      },
      options: [
        "Nico Hulkenberg (13+ seasons, 1 pole)",
        "Nick Heidfeld (12 seasons, 1 pole)",
        "Adrian Sutil (7 seasons, 0 poles)",
        "Esteban Ocon (7+ seasons, 0 poles)"
      ],
      correct: 2,
      explanation: {
        en: "Adrian Sutil competed for 7 full seasons (2007-2011, 2013-2014) without ever achieving a pole position, the longest career without one.",
        es: "Adrian Sutil compitió durante 7 temporadas completas (2007-2011, 2013-2014) sin lograr una pole position, la carrera más larga sin una.",
        de: "Adrian Sutil nahm 7 volle Saisons teil (2007-2011, 2013-2014) ohne jemals eine Pole-Position zu erreichen, die längste Karriere ohne eine.",
        nl: "Adrian Sutil streed voor 7 volledige seizoenen (2007-2011, 2013-2014) zonder ooit een pole position te behalen, de langste carrière zonder een."
      }
    },
    {
      question: {
        en: "What is the record for fastest race (shortest duration) in F1 history?",
        es: "¿Cuál es el récord de la carrera más rápida (duración más corta) en la historia de F1?",
        de: "Was ist der Rekord für das schnellste Rennen (kürzeste Dauer) in der F1-Geschichte?",
        nl: "Wat is het record voor snelste race (kortste duur) in F1 geschiedenis?"
      },
      options: [
        "2003 Italian GP (1:14:19.838)",
        "2020 Italian GP (1:20:45.327)",
        "2004 Italian GP (1:15:18.448)",
        "2018 Italian GP (1:16:54.484)"
      ],
      correct: 0,
      explanation: {
        en: "The 2003 Italian GP at Monza was completed in 1:14:19.838, the fastest-ever F1 race due to high speeds and no safety cars.",
        es: "El GP de Italia 2003 en Monza se completó en 1:14:19.838, la carrera de F1 más rápida debido a altas velocidades y sin safety cars.",
        de: "Der Italien GP 2003 in Monza wurde in 1:14:19.838 abgeschlossen, das schnellste F1-Rennen aller Zeiten aufgrund hoher Geschwindigkeiten und keiner Safety Cars.",
        nl: "De 2003 Italiaanse GP op Monza werd voltooid in 1:14:19.838, de snelste ooit F1 race door hoge snelheden en geen safety cars."
      }
    },
    {
      question: {
        en: "Which team holds the record for most consecutive podiums (any driver)?",
        es: "¿Qué equipo tiene el récord de más podios consecutivos (cualquier piloto)?",
        de: "Welches Team hält den Rekord für die meisten aufeinanderfolgenden Podiumsplätze (beliebiger Fahrer)?",
        nl: "Welk team heeft het record voor de meeste opeenvolgende podiums (elke coureur)?"
      },
      options: [
        "Mercedes (106 consecutive races with podium, 2014-2020)",
        "Ferrari (53 consecutive podiums)",
        "Red Bull (72 consecutive podiums)",
        "McLaren (49 consecutive podiums, 1988-1991)"
      ],
      correct: 0,
      explanation: {
        en: "Mercedes had at least one driver on the podium for 106 consecutive races from 2014-2020, showing sustained excellence across the hybrid era.",
        es: "Mercedes tuvo al menos un piloto en el podio durante 106 carreras consecutivas desde 2014-2020, mostrando excelencia sostenida a través de la era híbrida.",
        de: "Mercedes hatte von 2014-2020 in 106 aufeinanderfolgenden Rennen mindestens einen Fahrer auf dem Podium und zeigte anhaltende Exzellenz in der Hybrid-Ära.",
        nl: "Mercedes had ten minste één coureur op het podium voor 106 opeenvolgende races van 2014-2020, wat aanhoudende uitmuntendheid door het hybride tijdperk toont."
      }
    },
    {
      question: {
        en: "What is the record for most races in a season where pole sitter didn't win?",
        es: "¿Cuál es el récord de más carreras en una temporada donde el poleman no ganó?",
        de: "Was ist der Rekord für die meisten Rennen in einer Saison, in denen der Polesitter nicht gewann?",
        nl: "Wat is het record voor de meeste races in een seizoen waar de polesitter niet won?"
      },
      options: [
        "2012 season (14 of 20 races)",
        "2008 season (11 of 18 races)",
        "2003 season (9 of 16 races)",
        "2010 season (13 of 19 races)"
      ],
      correct: 0,
      explanation: {
        en: "In 2012, the pole sitter failed to win 14 of 20 races, showing the unpredictability and competitive nature of that season.",
        es: "En 2012, el poleman no ganó 14 de 20 carreras, mostrando la imprevisibilidad y naturaleza competitiva de esa temporada.",
        de: "2012 gewann der Polesitter 14 von 20 Rennen nicht, zeigte die Unvorhersehbarkeit und Wettbewerbsfähigkeit dieser Saison.",
        nl: "In 2012 won de polesitter 14 van 20 races niet, wat de onvoorspelbaarheid en competitieve aard van dat seizoen toont."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins while not leading the championship?",
        es: "¿Qué piloto tiene el récord de más victorias sin liderar el campeonato?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege ohne die Meisterschaft anzuführen?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen zonder het kampioenschap te leiden?"
      },
      options: [
        "Fernando Alonso (18 wins as non-leader)",
        "Sebastian Vettel (22 wins as non-leader)",
        "Lewis Hamilton (35+ wins as non-leader)",
        "Kimi Räikkönen (16 wins as non-leader)"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton won 35+ races while not leading the championship at the time, showing his ability to win from behind in the standings.",
        es: "Lewis Hamilton ganó más de 35 carreras sin liderar el campeonato en ese momento, mostrando su capacidad de ganar desde atrás en la clasificación.",
        de: "Lewis Hamilton gewann über 35 Rennen, ohne zu diesem Zeitpunkt die Meisterschaft anzuführen, und zeigte seine Fähigkeit, von hinten in der Wertung zu gewinnen.",
        nl: "Lewis Hamilton won 35+ races zonder het kampioenschap te leiden op dat moment, wat zijn vermogen toont om te winnen vanuit achterstand in het klassement."
      }
    },
    {
      question: {
        en: "What is the record for most pit lane starts in a career?",
        es: "¿Cuál es el récord de más salidas desde pit lane en una carrera?",
        de: "Was ist der Rekord für die meisten Boxengassen-Starts in einer Karriere?",
        nl: "Wat is het record voor de meeste pit lane starts in een carrière?"
      },
      options: [
        "Pastor Maldonado (6 pit lane starts)",
        "Romain Grosjean (8 pit lane starts)",
        "Sebastian Vettel (5 pit lane starts)",
        "Lewis Hamilton (4 pit lane starts)"
      ],
      correct: 1,
      explanation: {
        en: "Romain Grosjean started from the pit lane 8 times during his career due to various penalties and technical changes, the most by any driver.",
        es: "Romain Grosjean salió desde pit lane 8 veces durante su carrera debido a varias penalizaciones y cambios técnicos, las más de cualquier piloto.",
        de: "Romain Grosjean startete 8 Mal von der Boxengasse während seiner Karriere aufgrund verschiedener Strafen und technischer Änderungen, die meisten eines Fahrers.",
        nl: "Romain Grosjean startte 8 keer vanaf de pit lane tijdens zijn carrière door verschillende straffen en technische wijzigingen, de meeste van alle coureurs."
      }
    },
    {
      question: {
        en: "Which driver has the record for most Grand Prix entries spanning different decades?",
        es: "¿Qué piloto tiene el récord de más entradas de Gran Premio abarcando diferentes décadas?",
        de: "Welcher Fahrer hat den Rekord für die meisten Grand-Prix-Einträge über verschiedene Jahrzehnte?",
        nl: "Welke coureur heeft het record voor de meeste Grand Prix inschrijvingen verspreid over verschillende decennia?"
      },
      options: [
        "Fernando Alonso (2000s, 2010s, 2020s - 3 decades)",
        "Kimi Räikkönen (2000s, 2010s, 2020s - 3 decades)",
        "Rubens Barrichello (1990s, 2000s, 2010s - 3 decades)",
        "All three raced in 3 decades"
      ],
      correct: 3,
      explanation: {
        en: "Multiple drivers raced in 3 decades: Alonso (2001-2023), Räikkönen (2001-2021), Barrichello (1993-2011) all competed across three different decades.",
        es: "Varios pilotos corrieron en 3 décadas: Alonso (2001-2023), Räikkönen (2001-2021), Barrichello (1993-2011) todos compitieron en tres décadas diferentes.",
        de: "Mehrere Fahrer fuhren in 3 Jahrzehnten: Alonso (2001-2023), Räikkönen (2001-2021), Barrichello (1993-2011) nahmen alle über drei Jahrzehnte teil.",
        nl: "Meerdere coureurs raceten in 3 decennia: Alonso (2001-2023), Räikkönen (2001-2021), Barrichello (1993-2011) allen streden over drie verschillende decennia."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();