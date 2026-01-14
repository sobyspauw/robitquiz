const level9 = (function() {
  const questions = [
    {
      question: {
        en: "What is the record for most consecutive races with a mechanical DNF for a race winner?",
        es: "¿Cuál es el récord de más carreras consecutivas con DNF mecánico para un ganador de carrera?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennen mit technischem Ausfall für einen Rennsieger?",
        nl: "Wat is het record voor de meeste opeenvolgende races met mechanische DNF voor een racewinnaar?"
      },
      options: [
        "Kimi Räikkönen 2005: 5 consecutive mechanical DNFs",
        "Ayrton Senna 1988: 3 consecutive mechanical DNFs",
        "Mika Häkkinen 2001: 4 consecutive mechanical DNFs",
        "Fernando Alonso 2006: 3 consecutive mechanical DNFs"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen suffered 5 consecutive mechanical retirements in 2005 (Nürburgring, Canada, USA, France, Germany) despite winning 7 races that season.",
        es: "Kimi Räikkönen sufrió 5 abandonos mecánicos consecutivos en 2005 (Nürburgring, Canadá, EE.UU., Francia, Alemania) a pesar de ganar 7 carreras esa temporada.",
        de: "Kimi Räikkönen erlitt 5 aufeinanderfolgende technische Ausfälle 2005 (Nürburgring, Kanada, USA, Frankreich, Deutschland) trotz 7 Siege in dieser Saison.",
        nl: "Kimi Räikkönen had 5 opeenvolgende mechanische uitvalbeurten in 2005 (Nürburgring, Canada, VS, Frankrijk, Duitsland) ondanks 7 overwinningen dat seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most podium finishes in succession by different drivers?",
        es: "¿Cuál es el récord de más podios en sucesión por diferentes pilotos?",
        de: "Was ist der Rekord für die meisten Podiumsplätze in Folge durch verschiedene Fahrer?",
        nl: "Wat is het record voor de meeste podiumplaatsen achter elkaar door verschillende coureurs?"
      },
      options: [
        "24 consecutive podiums (Alonso 2012-13)",
        "17 consecutive podiums (Senna 1988-89)",
        "33 consecutive podiums (Hamilton 2014-16)",
        "27 consecutive podiums (Schumacher 2001-03)"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton finished on the podium in 33 consecutive races from Hungary 2014 to Mexico 2016, the longest podium streak in F1 history.",
        es: "Lewis Hamilton terminó en el podio en 33 carreras consecutivas desde Hungría 2014 hasta México 2016, la racha de podios más larga en la historia de F1.",
        de: "Lewis Hamilton beendete 33 aufeinanderfolgende Rennen von Ungarn 2014 bis Mexiko 2016 auf dem Podium, die längste Podiumsserie in der F1-Geschichte.",
        nl: "Lewis Hamilton eindigde op het podium in 33 opeenvolgende races van Hongarije 2014 tot Mexico 2016, de langste podiumreeks in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for fastest average speed over a race distance?",
        es: "¿Cuál es el récord de velocidad promedio más rápida sobre una distancia de carrera?",
        de: "Was ist der Rekord für die schnellste Durchschnittsgeschwindigkeit über eine Renndistanz?",
        nl: "Wat is het record voor snelste gemiddelde snelheid over een raceafstand?"
      },
      options: [
        "Valtteri Bottas Italy 2020: 264.362 km/h",
        "Peter Gethin Italy 1971: 242.615 km/h",
        "Michael Schumacher Italy 2003: 247.586 km/h",
        "Lewis Hamilton Belgium 2020: 241.778 km/h"
      ],
      correct: 0,
      explanation: {
        en: "Valtteri Bottas achieved 264.362 km/h average speed at Monza 2020, the fastest race average in F1 history, benefiting from slipstream and low downforce setup.",
        es: "Valtteri Bottas alcanzó 264.362 km/h de velocidad promedio en Monza 2020, el promedio de carrera más rápido en la historia de F1, beneficiándose del rebufo y configuración de baja carga aerodinámica.",
        de: "Valtteri Bottas erreichte 264,362 km/h Durchschnittsgeschwindigkeit in Monza 2020, der schnellste Renndurchschnitt in der F1-Geschichte, profitierend von Windschatten und Low-Downforce-Setup.",
        nl: "Valtteri Bottas behaalde 264,362 km/h gemiddelde snelheid in Monza 2020, het snelste race-gemiddelde in F1-geschiedenis, profiterend van slipstream en lage-downforce setup."
      }
    },
    {
      question: {
        en: "What is the record for most races led without a pole or win in a career?",
        es: "¿Cuál es el récord de más carreras lideradas sin pole o victoria en una carrera?",
        de: "Was ist der Rekord für die meisten geführten Rennen ohne Pole oder Sieg in einer Karriere?",
        nl: "Wat is het record voor de meeste geleidde races zonder pole of overwinning in een carrière?"
      },
      options: [
        "Chris Amon: 5 races led, 0 poles, 0 wins",
        "Andrea de Cesaris: 7 races led, 1 pole, 0 wins",
        "Martin Brundle: 3 races led, 0 poles, 0 wins",
        "Jean-Pierre Jarier: 4 races led, 3 poles, 0 wins"
      ],
      correct: 1,
      explanation: {
        en: "Andrea de Cesaris led 7 different races during his 208-race career but never won, despite taking one pole position, epitomizing F1's unluckiest driver.",
        es: "Andrea de Cesaris lideró 7 carreras diferentes durante su carrera de 208 carreras pero nunca ganó, a pesar de lograr una pole, personificando al piloto más desafortunado de F1.",
        de: "Andrea de Cesaris führte 7 verschiedene Rennen während seiner 208-Rennen-Karriere, gewann aber nie, trotz einer Pole-Position, verkörpert F1s unglücklichsten Fahrer.",
        nl: "Andrea de Cesaris leidde 7 verschillende races tijdens zijn 208-race carrière maar won nooit, ondanks één poleposition, belichaming van F1's meest ongelukkige coureur."
      }
    },
    {
      question: {
        en: "What is the record for most points scored by a team in races where both cars finished?",
        es: "¿Cuál es el récord de más puntos anotados por un equipo en carreras donde ambos coches terminaron?",
        de: "Was ist der Rekord für die meisten Punkte eines Teams in Rennen, in denen beide Autos ins Ziel kamen?",
        nl: "Wat is het record voor de meeste punten gescoord door een team in races waar beide auto's finishten?"
      },
      options: [
        "Mercedes 2019: 43 points (1-2 finish)",
        "Red Bull 2023: 44 points (1-2 finish with sprint)",
        "Ferrari 2002: 28 points (1-2 finish, old scoring)",
        "McLaren 1988: 18 points (1-2 finish, old scoring)"
      ],
      correct: 1,
      explanation: {
        en: "Red Bull scored 44 points at sprint weekends in 2023 with 1-2 finishes (1st+sprint win: 33, 2nd: 11), the maximum possible in modern sprint format.",
        es: "Red Bull anotó 44 puntos en fines de semana sprint en 2023 con finales 1-2 (1º+victoria sprint: 33, 2º: 11), el máximo posible en formato sprint moderno.",
        de: "Red Bull erzielte 44 Punkte an Sprint-Wochenenden 2023 mit 1-2-Zieleinläufen (1.+Sprint-Sieg: 33, 2.: 11), das Maximum im modernen Sprint-Format.",
        nl: "Red Bull scoorde 44 punten op sprint-weekenden in 2023 met 1-2 finishes (1e+sprint-overwinning: 33, 2e: 11), het maximaal mogelijke in modern sprint-format."
      }
    },
    {
      question: {
        en: "What is the record for most pole positions at a single circuit without winning there?",
        es: "¿Cuál es el récord de más poles en un solo circuito sin ganar allí?",
        de: "Was ist der Rekord für die meisten Pole-Positions auf einer einzelnen Rennstrecke ohne dort zu gewinnen?",
        nl: "Wat is het record voor de meeste polepositions op een enkel circuit zonder daar te winnen?"
      },
      options: [
        "Ralf Schumacher at Monaco: 3 poles, 0 wins",
        "Jarno Trulli at Monaco: 4 poles, 0 wins",
        "Felipe Massa at Hungary: 3 poles, 0 wins",
        "Nico Rosberg at Singapore: 2 poles, 0 wins"
      ],
      correct: 1,
      explanation: {
        en: "Jarno Trulli took 4 pole positions at Monaco (2004, 2005, 2009, 2010) but never won there, the most poles at a single circuit without victory.",
        es: "Jarno Trulli logró 4 poles en Mónaco (2004, 2005, 2009, 2010) pero nunca ganó allí, las poles más altas en un solo circuito sin victoria.",
        de: "Jarno Trulli erzielte 4 Pole-Positions in Monaco (2004, 2005, 2009, 2010), gewann aber nie dort, die meisten Poles auf einer Strecke ohne Sieg.",
        nl: "Jarno Trulli behaalde 4 polepositions in Monaco (2004, 2005, 2009, 2010) maar won daar nooit, de meeste poles op een enkel circuit zonder overwinning."
      }
    },
    {
      question: {
        en: "What is the record for shortest time gap between 1st and 2nd in a race finish?",
        es: "¿Cuál es el récord de brecha de tiempo más corta entre 1º y 2º en un final de carrera?",
        de: "Was ist der Rekord für den kleinsten Zeitabstand zwischen 1. und 2. bei einem Rennfinish?",
        nl: "Wat is het record voor kortste tijdsverschil tussen 1e en 2e in een racefinish?"
      },
      options: [
        "Italy 1971: 0.010 seconds (Gethin vs Peterson)",
        "Spain 2016: 0.063 seconds (Verstappen vs Räikkönen)",
        "USA 2002: 0.011 seconds (Barrichello vs Schumacher)",
        "Bahrain 2014: 0.259 seconds (Hamilton vs Rosberg)"
      ],
      correct: 0,
      explanation: {
        en: "Peter Gethin beat Ronnie Peterson by 0.010 seconds at Monza 1971, the closest finish in F1 history, with 5 cars within 0.61 seconds.",
        es: "Peter Gethin venció a Ronnie Peterson por 0.010 segundos en Monza 1971, el final más ajustado en la historia de F1, con 5 coches en 0.61 segundos.",
        de: "Peter Gethin schlug Ronnie Peterson mit 0,010 Sekunden in Monza 1971, das knappste Finish in der F1-Geschichte, mit 5 Autos innerhalb 0,61 Sekunden.",
        nl: "Peter Gethin versloeg Ronnie Peterson met 0,010 seconden in Monza 1971, de spannendste finish in F1-geschiedenis, met 5 auto's binnen 0,61 seconden."
      }
    },
    {
      question: {
        en: "What is the record for most championship points lost due to team orders in a season?",
        es: "¿Cuál es el récord de más puntos de campeonato perdidos por órdenes de equipo en una temporada?",
        de: "Was ist der Rekord für die meisten verlorenen Meisterschaftspunkte durch Teamorder in einer Saison?",
        nl: "Wat is het record voor de meeste kampioenschapspunten verloren door teamorders in een seizoen?"
      },
      options: [
        "Rubens Barrichello 2002: 18 points given to Schumacher",
        "Valtteri Bottas 2018: 14 points given to Hamilton",
        "Eddie Irvine 1999: 10 points given to Schumacher",
        "Felipe Massa 2007: 16 points given to Räikkönen"
      ],
      correct: 0,
      explanation: {
        en: "Rubens Barrichello lost 18 points in 2002 from team orders, most notably Austria (10pts) and USA (8pts), gifting wins to Michael Schumacher.",
        es: "Rubens Barrichello perdió 18 puntos en 2002 por órdenes de equipo, notablemente Austria (10pts) y EE.UU. (8pts), regalando victorias a Michael Schumacher.",
        de: "Rubens Barrichello verlor 18 Punkte 2002 durch Teamorder, insbesondere Österreich (10 Pkt.) und USA (8 Pkt.), schenkte Siege an Michael Schumacher.",
        nl: "Rubens Barrichello verloor 18 punten in 2002 door teamorders, met name Oostenrijk (10pts) en VS (8pts), gaf overwinningen aan Michael Schumacher."
      }
    },
    {
      question: {
        en: "What is the record for longest gap between a driver's first and last fastest lap?",
        es: "¿Cuál es el récord de brecha más larga entre la primera y última vuelta rápida de un piloto?",
        de: "Was ist der Rekord für den längsten Abstand zwischen der ersten und letzten schnellsten Runde eines Fahrers?",
        nl: "Wat is het record voor langste kloof tussen de eerste en laatste snelste ronde van een coureur?"
      },
      options: [
        "Kimi Räikkönen: 18 years 8 months (2003-2022)",
        "Fernando Alonso: 17 years 4 months (2004-2021)",
        "Michael Schumacher: 15 years 9 months (1992-2012)",
        "Lewis Hamilton: 16 years 2 months (2007-2023)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen's fastest laps span 18 years 8 months from Malaysia 2003 to USA 2022, the longest career span for fastest laps in F1 history.",
        es: "Las vueltas rápidas de Kimi Räikkönen abarcan 18 años 8 meses desde Malasia 2003 hasta EE.UU. 2022, el lapso de carrera más largo para vueltas rápidas en la historia de F1.",
        de: "Kimi Räikkönens schnellste Runden erstrecken sich über 18 Jahre 8 Monate von Malaysia 2003 bis USA 2022, die längste Karrierespanne für schnellste Runden in der F1-Geschichte.",
        nl: "Kimi Räikkönen's snelste rondes beslaan 18 jaar en 8 maanden van Maleisië 2003 tot VS 2022, de langste carrière-span voor snelste rondes in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most wins from lowest average grid position in a season?",
        es: "¿Cuál es el récord de más victorias desde la posición de parrilla promedio más baja en una temporada?",
        de: "Was ist der Rekord für die meisten Siege von der niedrigsten durchschnittlichen Gridposition in einer Saison?",
        nl: "Wat is het record voor de meeste overwinningen vanaf de laagste gemiddelde gridpositie in een seizoen?"
      },
      options: [
        "Kimi Räikkönen 2012: 1 win, avg grid 11.2",
        "Sebastian Vettel 2015: 3 wins, avg grid 6.8",
        "Max Verstappen 2022: 15 wins, avg grid 1.8",
        "Lewis Hamilton 2014: 11 wins, avg grid 2.1"
      ],
      correct: 1,
      explanation: {
        en: "Sebastian Vettel won 3 races in 2015 with an average starting position of 6.8, the most wins from the poorest average grid position in a season.",
        es: "Sebastian Vettel ganó 3 carreras en 2015 con una posición de salida promedio de 6.8, las victorias más altas desde la posición de parrilla promedio más pobre en una temporada.",
        de: "Sebastian Vettel gewann 3 Rennen 2015 mit einer durchschnittlichen Startposition von 6,8, die meisten Siege von der schlechtesten durchschnittlichen Gridposition in einer Saison.",
        nl: "Sebastian Vettel won 3 races in 2015 met een gemiddelde startpositie van 6,8, de meeste overwinningen vanaf de slechtste gemiddelde gridpositie in een seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive race classifications (finished & classified)?",
        es: "¿Cuál es el récord de más clasificaciones consecutivas de carrera (terminado y clasificado)?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennklassifizierungen (beendet & klassifiziert)?",
        nl: "Wat is het record voor de meeste opeenvolgende raceclassificaties (gefinisht & geclassificeerd)?"
      },
      options: [
        "Lewis Hamilton: 48 consecutive classifications (2016-18)",
        "Nick Heidfeld: 41 consecutive classifications (2007-09)",
        "Jenson Button: 38 consecutive classifications (2009-11)",
        "Fernando Alonso: 42 consecutive classifications (2015-17)"
      ],
      correct: 1,
      explanation: {
        en: "Nick Heidfeld was classified in 41 consecutive races from Canada 2007 to Malaysia 2009, the longest streak of consecutive race classifications.",
        es: "Nick Heidfeld fue clasificado en 41 carreras consecutivas desde Canadá 2007 hasta Malasia 2009, la racha más larga de clasificaciones consecutivas de carrera.",
        de: "Nick Heidfeld wurde in 41 aufeinanderfolgenden Rennen von Kanada 2007 bis Malaysia 2009 klassifiziert, die längste Serie aufeinanderfolgender Rennklassifizierungen.",
        nl: "Nick Heidfeld werd geclassificeerd in 41 opeenvolgende races van Canada 2007 tot Maleisië 2009, de langste reeks opeenvolgende raceclassificaties."
      }
    },
    {
      question: {
        en: "What is the record for most retirements while leading a race in a career?",
        es: "¿Cuál es el récord de más abandonos mientras lideraba una carrera en una carrera?",
        de: "Was ist der Rekord für die meisten Ausfälle während der Führung eines Rennens in einer Karriere?",
        nl: "Wat is het record voor de meeste uitvalbeurten terwijl men een race leidde in een carrière?"
      },
      options: [
        "Kimi Räikkönen: 7 DNFs while leading",
        "Ayrton Senna: 9 DNFs while leading",
        "Michael Schumacher: 6 DNFs while leading",
        "Nigel Mansell: 11 DNFs while leading"
      ],
      correct: 3,
      explanation: {
        en: "Nigel Mansell retired while leading 11 times in his career, including the infamous 1986 Australian GP tire failure that cost him the championship.",
        es: "Nigel Mansell se retiró mientras lideraba 11 veces en su carrera, incluida la infame falla de neumático en el GP de Australia 1986 que le costó el campeonato.",
        de: "Nigel Mansell schied 11 Mal in Führung liegend aus, einschließlich des berüchtigten Reifenschadens beim Australien GP 1986, der ihm die Meisterschaft kostete.",
        nl: "Nigel Mansell viel 11 keer uit terwijl hij leidde in zijn carrière, inclusief de beruchte bandenbreuk in Australische GP 1986 die hem het kampioenschap kostte."
      }
    },
    {
      question: {
        en: "What is the record for highest percentage of races won in a season (min 10 races)?",
        es: "¿Cuál es el récord del porcentaje más alto de carreras ganadas en una temporada (mín 10 carreras)?",
        de: "Was ist der Rekord für den höchsten Prozentsatz gewonnener Rennen in einer Saison (min 10 Rennen)?",
        nl: "Wat is het record voor hoogste percentage races gewonnen in een seizoen (min 10 races)?"
      },
      options: [
        "Alberto Ascari 1952: 75% (6/8 wins)",
        "Max Verstappen 2023: 86.4% (19/22 wins)",
        "Michael Schumacher 2004: 72.2% (13/18 wins)",
        "Sebastian Vettel 2013: 68.4% (13/19 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won 19 of 22 races in 2023 (86.4%), the highest winning percentage in a season with 10+ races in F1 history.",
        es: "Max Verstappen ganó 19 de 22 carreras en 2023 (86.4%), el porcentaje de victorias más alto en una temporada con 10+ carreras en la historia de F1.",
        de: "Max Verstappen gewann 19 von 22 Rennen 2023 (86,4%), der höchste Siegprozentsatz in einer Saison mit 10+ Rennen in der F1-Geschichte.",
        nl: "Max Verstappen won 19 van 22 races in 2023 (86,4%), het hoogste overwinningspercentage in een seizoen met 10+ races in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most points scored by a driver who never won a race?",
        es: "¿Cuál es el récord de más puntos anotados por un piloto que nunca ganó una carrera?",
        de: "Was ist der Rekord für die meisten Punkte eines Fahrers, der nie ein Rennen gewann?",
        nl: "Wat is het record voor de meeste punten gescoord door een coureur die nooit een race won?"
      },
      options: [
        "Nick Heidfeld: 259 career points, 0 wins",
        "Nico Hulkenberg: 530 career points, 0 wins",
        "Adrian Sutil: 124 career points, 0 wins",
        "Sergio Perez: 101 points in 2016, 0 wins that year"
      ],
      correct: 1,
      explanation: {
        en: "Nico Hulkenberg has scored 530+ career points without ever winning a race, the most points by a winless driver in F1 history (as of 2023).",
        es: "Nico Hulkenberg ha anotado 530+ puntos de carrera sin ganar nunca una carrera, los puntos más altos de un piloto sin victorias en la historia de F1 (hasta 2023).",
        de: "Nico Hulkenberg hat 530+ Karrierepunkte ohne jemals ein Rennen zu gewinnen erzielt, die meisten Punkte eines sieglosen Fahrers in der F1-Geschichte (Stand 2023).",
        nl: "Nico Hulkenberg heeft 530+ carrièrepunten gescoord zonder ooit een race te winnen, de meeste punten door een winnaarloze coureur in F1-geschiedenis (vanaf 2023)."
      }
    },
    {
      question: {
        en: "What is the record for most different podium positions achieved in consecutive races?",
        es: "¿Cuál es el récord de más posiciones de podio diferentes logradas en carreras consecutivas?",
        de: "Was ist der Rekord für die meisten verschiedenen Podiumsplätze in aufeinanderfolgenden Rennen?",
        nl: "Wat is het record voor de meeste verschillende podiumposities behaald in opeenvolgende races?"
      },
      options: [
        "Lewis Hamilton 2007-08: 1st-2nd-3rd-1st pattern (12 races)",
        "Fernando Alonso 2012: 2nd-1st-3rd-2nd pattern (8 races)",
        "Sebastian Vettel 2010: 3rd-1st-2nd-3rd pattern (9 races)",
        "Kimi Räikkönen 2012-13: 1st-3rd-2nd-1st pattern (11 races)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton achieved all three podium positions (1st, 2nd, 3rd) in a rotating pattern for 12 consecutive podium finishes from 2007-08.",
        es: "Lewis Hamilton logró las tres posiciones de podio (1º, 2º, 3º) en un patrón rotativo durante 12 finales de podio consecutivos de 2007-08.",
        de: "Lewis Hamilton erreichte alle drei Podiumsplätze (1., 2., 3.) in einem rotierenden Muster für 12 aufeinanderfolgende Podiumsplatzierungen von 2007-08.",
        nl: "Lewis Hamilton behaalde alle drie podiumposities (1e, 2e, 3e) in een roterend patroon gedurende 12 opeenvolgende podiumfinishes van 2007-08."
      }
    },
    {
      question: {
        en: "What is the record for most Grand Prix entries before scoring first points?",
        es: "¿Cuál es el récord de más entradas de Gran Premio antes de anotar los primeros puntos?",
        de: "Was ist der Rekord für die meisten Grand-Prix-Einsätze vor den ersten Punkten?",
        nl: "Wat is het record voor de meeste Grand Prix-deelnames voordat de eerste punten werden gescoord?"
      },
      options: [
        "Kamui Kobayashi: 27 races before first points",
        "Sergio Perez: 31 races before first podium",
        "Pastor Maldonado: 26 races before first win",
        "Jarno Trulli: 48 races before first points"
      ],
      correct: 3,
      explanation: {
        en: "Jarno Trulli started 48 races before scoring his first point at Austria 1999, the longest wait for a first points finish in the modern points era.",
        es: "Jarno Trulli comenzó 48 carreras antes de anotar su primer punto en Austria 1999, la espera más larga para un primer punto en la era moderna de puntos.",
        de: "Jarno Trulli startete 48 Rennen, bevor er seinen ersten Punkt in Österreich 1999 erzielte, die längste Wartezeit für erste Punkte in der modernen Punkte-Ära.",
        nl: "Jarno Trulli startte 48 races voordat hij zijn eerste punt scoorde in Oostenrijk 1999, de langste wachttijd voor een eerste punt in het moderne punten-tijdperk."
      }
    },
    {
      question: {
        en: "What is the record for most laps completed without being lapped in a single season?",
        es: "¿Cuál es el récord de más vueltas completadas sin ser doblado en una sola temporada?",
        de: "Was ist der Rekord für die meisten absolvierten Runden ohne überrundet zu werden in einer einzelnen Saison?",
        nl: "Wat is het record voor de meeste voltooide rondes zonder gedubbeld te worden in een enkel seizoen?"
      },
      options: [
        "Michael Schumacher 2004: 100% unlapped (1,118 laps)",
        "Lewis Hamilton 2019: 98.7% unlapped (1,024/1,037 laps)",
        "Max Verstappen 2023: 99.2% unlapped (1,089/1,098 laps)",
        "Sebastian Vettel 2013: 97.8% unlapped (1,012/1,035 laps)"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher completed all 1,118 racing laps in 2004 without being lapped once, a perfect season of staying on the lead lap in every finish.",
        es: "Michael Schumacher completó todas las 1,118 vueltas de carrera en 2004 sin ser doblado una vez, una temporada perfecta manteniéndose en la vuelta líder en cada final.",
        de: "Michael Schumacher absolvierte alle 1.118 Rennrunden 2004 ohne einmal überrundet zu werden, eine perfekte Saison auf der Führungsrunde bei jedem Zieleinlauf.",
        nl: "Michael Schumacher voltooide alle 1.118 racerondes in 2004 zonder één keer gedubbeld te worden, een perfect seizoen op de leidende ronde bij elke finish."
      }
    },
    {
      question: {
        en: "What is the record for most positions gained from start to finish in a single race?",
        es: "¿Cuál es el récord de más posiciones ganadas desde la salida hasta el final en una sola carrera?",
        de: "Was ist der Rekord für die meisten gewonnenen Positionen vom Start bis zum Ziel in einem einzelnen Rennen?",
        nl: "Wat is het record voor de meeste posities gewonnen van start tot finish in een enkele race?"
      },
      options: [
        "John Watson USA 1983: 22nd to 1st (+21 positions)",
        "Kimi Räikkönen Japan 2005: 17th to 1st (+16 positions)",
        "Sebastian Vettel Abu Dhabi 2012: 24th to 3rd (+21 positions)",
        "Lewis Hamilton Germany 2018: 14th to 1st (+13 positions)"
      ],
      correct: 0,
      explanation: {
        en: "John Watson started 22nd (last) and won the 1983 USA West GP at Long Beach, gaining 21 positions, the most positions gained to victory.",
        es: "John Watson comenzó 22º (último) y ganó el GP USA West 1983 en Long Beach, ganando 21 posiciones, las posiciones más altas ganadas para la victoria.",
        de: "John Watson startete als 22. (Letzter) und gewann den USA-West-GP 1983 in Long Beach, gewann 21 Positionen, die meisten gewonnenen Positionen zum Sieg.",
        nl: "John Watson startte 22e (laatste) en won de 1983 VS West GP in Long Beach, met 21 posities gewonnen, de meeste posities gewonnen naar overwinning."
      }
    },
    {
      question: {
        en: "What is the record for longest career without a front row start (pole or 2nd)?",
        es: "¿Cuál es el récord de carrera más larga sin una salida de primera fila (pole o 2º)?",
        de: "Was ist der Rekord für die längste Karriere ohne einen Start aus der ersten Reihe (Pole oder 2.)?",
        nl: "Wat is het record voor langste carrière zonder een eerste-rij start (pole of 2e)?"
      },
      options: [
        "Adrian Sutil: 128 races, best grid 4th",
        "Giancarlo Fisichella: 231 races, 4 poles",
        "Nico Hulkenberg: 215 races, best grid 3rd",
        "Sergio Perez: 285 races, 3 poles"
      ],
      correct: 2,
      explanation: {
        en: "Nico Hulkenberg completed 215+ races with his best qualifying being 3rd, never starting from the front row, the longest such career.",
        es: "Nico Hulkenberg completó 215+ carreras con su mejor clasificación siendo 3º, nunca comenzando desde la primera fila, la carrera más larga así.",
        de: "Nico Hulkenberg absolvierte 215+ Rennen mit seiner besten Qualifikation als 3., startete nie aus der ersten Reihe, die längste derartige Karriere.",
        nl: "Nico Hulkenberg voltooide 215+ races met zijn beste kwalificatie als 3e, nooit gestart vanaf de eerste rij, de langste dergelijke carrière."
      }
    },
    {
      question: {
        en: "What is the record for most races with at least one safety car period in a season?",
        es: "¿Cuál es el récord de más carreras con al menos un período de coche de seguridad en una temporada?",
        de: "Was ist der Rekord für die meisten Rennen mit mindestens einer Safety-Car-Phase in einer Saison?",
        nl: "Wat is het record voor de meeste races met minstens één safety car-periode in een seizoen?"
      },
      options: [
        "2021: 20/22 races had safety cars (90.9%)",
        "2008: 16/18 races had safety cars (88.9%)",
        "2012: 18/20 races had safety cars (90.0%)",
        "2018: 19/21 races had safety cars (90.5%)"
      ],
      correct: 0,
      explanation: {
        en: "The 2021 season had safety cars in 20 of 22 races (90.9%), the highest proportion of safety car interventions in a modern F1 season.",
        es: "La temporada 2021 tuvo coches de seguridad en 20 de 22 carreras (90.9%), la proporción más alta de intervenciones de coche de seguridad en una temporada moderna de F1.",
        de: "Die Saison 2021 hatte Safety Cars in 20 von 22 Rennen (90,9%), der höchste Anteil an Safety-Car-Einsätzen in einer modernen F1-Saison.",
        nl: "Het seizoen 2021 had safety cars in 20 van 22 races (90,9%), de hoogste verhouding safety car-interventies in een modern F1-seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most wins by a driver in their final F1 season?",
        es: "¿Cuál es el récord de más victorias de un piloto en su última temporada de F1?",
        de: "Was ist der Rekord für die meisten Siege eines Fahrers in seiner letzten F1-Saison?",
        nl: "Wat is het record voor de meeste overwinningen door een coureur in hun laatste F1-seizoen?"
      },
      options: [
        "Alain Prost 1993: 7 wins",
        "Niki Lauda 1985: 1 win",
        "Jim Clark 1968: 1 win (died mid-season)",
        "Juan Manuel Fangio 1958: 2 wins"
      ],
      correct: 0,
      explanation: {
        en: "Alain Prost won 7 races and the championship in his final season (1993), the most wins by a driver in their retirement year.",
        es: "Alain Prost ganó 7 carreras y el campeonato en su última temporada (1993), las victorias más altas de un piloto en su año de retiro.",
        de: "Alain Prost gewann 7 Rennen und die Meisterschaft in seiner letzten Saison (1993), die meisten Siege eines Fahrers in seinem Rücktrittsjahr.",
        nl: "Alain Prost won 7 races en het kampioenschap in zijn laatste seizoen (1993), de meeste overwinningen door een coureur in hun pensioenjaar."
      }
    },
    {
      question: {
        en: "What is the record for most podium lockouts (1-2-3) by a single team in a season?",
        es: "¿Cuál es el récord de más podios completos (1-2-3) por un solo equipo en una temporada?",
        de: "Was ist der Rekord für die meisten Podium-Lockouts (1-2-3) eines einzelnen Teams in einer Saison?",
        nl: "Wat is het record voor de meeste podium-lockouts (1-2-3) door een enkel team in een seizoen?"
      },
      options: [
        "Ferrari 2002: 9 podium lockouts",
        "Mercedes 2016: 12 podium lockouts (but only 2 drivers)",
        "McLaren 1988: 10 podium lockouts (but only 2 drivers)",
        "Red Bull 2023: 8 podium lockouts"
      ],
      correct: 0,
      explanation: {
        en: "Ferrari achieved 9 complete podium lockouts (1-2-3) in 2002 with Schumacher-Barrichello-Irvine/Massa, the most by a team in a season.",
        es: "Ferrari logró 9 podios completos (1-2-3) en 2002 con Schumacher-Barrichello-Irvine/Massa, los más altos de un equipo en una temporada.",
        de: "Ferrari erreichte 9 komplette Podium-Lockouts (1-2-3) 2002 mit Schumacher-Barrichello-Irvine/Massa, die meisten eines Teams in einer Saison.",
        nl: "Ferrari behaalde 9 complete podium-lockouts (1-2-3) in 2002 met Schumacher-Barrichello-Irvine/Massa, de meeste door een team in een seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive years with at least one driver retirement per race?",
        es: "¿Cuál es el récord de más años consecutivos con al menos un retiro de piloto por carrera?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Jahre mit mindestens einem Fahrerausfall pro Rennen?",
        nl: "Wat is het record voor de meeste opeenvolgende jaren met minstens één coureur-uitval per race?"
      },
      options: [
        "1950-2005: Every race had at least 1 DNF (55 years)",
        "1982-1997: Every race had at least 2 DNFs (15 years)",
        "2000-2012: Average 4+ DNFs per race (12 years)",
        "1970-1985: Average 6+ DNFs per race (15 years)"
      ],
      correct: 0,
      explanation: {
        en: "From 1950-2005, every single F1 race had at least one driver retirement, a 55-year streak ended by the 2005 USA GP (6 finishers).",
        es: "Desde 1950-2005, cada carrera de F1 tuvo al menos un retiro de piloto, una racha de 55 años terminada por el GP USA 2005 (6 finalizadores).",
        de: "Von 1950-2005 hatte jedes einzelne F1-Rennen mindestens einen Fahrerausfall, eine 55-jährige Serie endete beim USA-GP 2005 (6 Finisher).",
        nl: "Van 1950-2005 had elke F1-race minstens één coureur-uitval, een 55-jaar reeks eindigde bij de 2005 VS GP (6 finishers)."
      }
    },
    {
      question: {
        en: "What is the record for youngest driver to complete a full race distance?",
        es: "¿Cuál es el récord del piloto más joven en completar una distancia de carrera completa?",
        de: "Was ist der Rekord für den jüngsten Fahrer, der eine volle Renndistanz absolvierte?",
        nl: "Wat is het record voor jongste coureur om een volledige raceafstand te voltooien?"
      },
      options: [
        "Max Verstappen: 17 years 166 days (Australia 2015)",
        "Lance Stroll: 18 years 148 days (Australia 2017)",
        "Lando Norris: 19 years 124 days (Australia 2019)",
        "Sebastian Vettel: 19 years 349 days (USA 2007)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen finished his first race at 17 years 166 days in Australia 2015 (7th place), the youngest driver to complete a full Grand Prix distance.",
        es: "Max Verstappen terminó su primera carrera con 17 años 166 días en Australia 2015 (7º lugar), el piloto más joven en completar una distancia completa de Gran Premio.",
        de: "Max Verstappen beendete sein erstes Rennen mit 17 Jahren 166 Tagen in Australien 2015 (7. Platz), der jüngste Fahrer, der eine volle Grand-Prix-Distanz absolvierte.",
        nl: "Max Verstappen finishte zijn eerste race met 17 jaar en 166 dagen in Australië 2015 (7e plaats), de jongste coureur om een volledige Grand Prix-afstand te voltooien."
      }
    },
    {
      question: {
        en: "What is the record for most constructors beaten by a backmarker team in a single race?",
        es: "¿Cuál es el récord de más constructores vencidos por un equipo rezagado en una sola carrera?",
        de: "Was ist der Rekord für die meisten Konstrukteure, die von einem Hinterbänkler-Team in einem einzelnen Rennen geschlagen wurden?",
        nl: "Wat is het record voor de meeste constructeurs verslagen door een achterblijver-team in een enkele race?"
      },
      options: [
        "Minardi Canada 2001: Beat 7 teams (5th/6th place)",
        "Jordan Belgium 1998: Beat 6 teams (1st/4th place)",
        "Sauber Italy 2008: Beat 5 teams (1st/3rd place)",
        "Williams Canada 2014: Beat 6 teams (2nd/3rd place)"
      ],
      correct: 0,
      explanation: {
        en: "Minardi finished 5th and 6th in Canada 2001, beating 7 teams including Ferrari, McLaren, and Williams, the most constructors beaten by a backmarker in one race.",
        es: "Minardi terminó 5º y 6º en Canadá 2001, venciendo a 7 equipos incluyendo Ferrari, McLaren y Williams, los constructores más vencidos por un rezagado en una carrera.",
        de: "Minardi wurde 5. und 6. in Kanada 2001 und schlug 7 Teams einschließlich Ferrari, McLaren und Williams, die meisten von einem Hinterbänkler geschlagenen Konstrukteure in einem Rennen.",
        nl: "Minardi eindigde 5e en 6e in Canada 2001, versloeg 7 teams inclusief Ferrari, McLaren en Williams, de meeste constructeurs verslagen door een achterblijver in één race."
      }
    },
    {
      question: {
        en: "What is the record for most fastest laps in a season without winning a race?",
        es: "¿Cuál es el récord de más vueltas rápidas en una temporada sin ganar una carrera?",
        de: "Was ist der Rekord für die meisten schnellsten Runden in einer Saison ohne Rennsieg?",
        nl: "Wat is het record voor de meeste snelste rondes in een seizoen zonder een race te winnen?"
      },
      options: [
        "Nico Rosberg 2013: 4 fastest laps, 0 wins",
        "Nick Heidfeld 2005: 2 fastest laps, 0 wins",
        "Valtteri Bottas 2021: 5 fastest laps, 0 wins",
        "Felipe Massa 2013: 1 fastest lap, 0 wins"
      ],
      correct: 2,
      explanation: {
        en: "Valtteri Bottas scored 5 fastest laps in 2021 without winning a race, the most fastest laps in a winless season (though he won in other years).",
        es: "Valtteri Bottas anotó 5 vueltas rápidas en 2021 sin ganar una carrera, las vueltas rápidas más altas en una temporada sin victorias (aunque ganó en otros años).",
        de: "Valtteri Bottas erzielte 5 schnellste Runden 2021 ohne Rennsieg, die meisten schnellsten Runden in einer sieglosen Saison (obwohl er in anderen Jahren gewann).",
        nl: "Valtteri Bottas scoorde 5 snelste rondes in 2021 zonder een race te winnen, de meeste snelste rondes in een winnerloos seizoen (hoewel hij in andere jaren won)."
      }
    },
    {
      question: {
        en: "What is the record for longest time between consecutive race wins for the same team?",
        es: "¿Cuál es el récord de mayor tiempo entre victorias consecutivas de carrera para el mismo equipo?",
        de: "Was ist der Rekord für die längste Zeit zwischen aufeinanderfolgenden Rennsiegen desselben Teams?",
        nl: "Wat is het record voor langste tijd tussen opeenvolgende raceoverwinningen voor hetzelfde team?"
      },
      options: [
        "Williams: 7 years 10 months (Spain 2012 to Belgium 2020 - never won)",
        "McLaren: 9 years (Brazil 2012 to Italy 2021)",
        "Renault: 6 years 5 months (Japan 2008 to Australia 2021)",
        "Sauber/Alfa: Never won consecutive races"
      ],
      correct: 1,
      explanation: {
        en: "McLaren waited 9 years between wins, from Brazil 2012 (Jenson Button) to Italy 2021 (Daniel Ricciardo), the longest gap for a winning team.",
        es: "McLaren esperó 9 años entre victorias, desde Brasil 2012 (Jenson Button) hasta Italia 2021 (Daniel Ricciardo), la brecha más larga para un equipo ganador.",
        de: "McLaren wartete 9 Jahre zwischen Siegen, von Brasilien 2012 (Jenson Button) bis Italien 2021 (Daniel Ricciardo), die längste Lücke für ein Siegerteam.",
        nl: "McLaren wachtte 9 jaar tussen overwinningen, van Brazilië 2012 (Jenson Button) tot Italië 2021 (Daniel Ricciardo), de langste kloof voor een winnend team."
      }
    },
    {
      question: {
        en: "What is the record for most pole positions at different circuits in a single season?",
        es: "¿Cuál es el récord de más poles en diferentes circuitos en una sola temporada?",
        de: "Was ist der Rekord für die meisten Pole-Positions auf verschiedenen Rennstrecken in einer einzelnen Saison?",
        nl: "Wat is het record voor de meeste polepositions op verschillende circuits in een enkel seizoen?"
      },
      options: [
        "Ayrton Senna 1989: 13 poles at 13 different circuits",
        "Sebastian Vettel 2011: 15 poles at 14 different circuits",
        "Lewis Hamilton 2016: 12 poles at 11 different circuits",
        "Michael Schumacher 2001: 11 poles at 10 different circuits"
      ],
      correct: 1,
      explanation: {
        en: "Sebastian Vettel took 15 poles at 14 different circuits in 2011 (repeated Spa), the most diverse pole position collection in a single season.",
        es: "Sebastian Vettel logró 15 poles en 14 circuitos diferentes en 2011 (repitió Spa), la colección de poles más diversa en una sola temporada.",
        de: "Sebastian Vettel erzielte 15 Poles auf 14 verschiedenen Rennstrecken 2011 (wiederholte Spa), die vielfältigste Pole-Position-Sammlung in einer einzelnen Saison.",
        nl: "Sebastian Vettel behaalde 15 poles op 14 verschillende circuits in 2011 (herhaalde Spa), de meest diverse poleposition-verzameling in een enkel seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most races with points for both drivers by a team in a season?",
        es: "¿Cuál es el récord de más carreras con puntos para ambos pilotos por un equipo en una temporada?",
        de: "Was ist der Rekord für die meisten Rennen mit Punkten für beide Fahrer eines Teams in einer Saison?",
        nl: "Wat is het record voor de meeste races met punten voor beide coureurs door een team in een seizoen?"
      },
      options: [
        "Mercedes 2019: 21/21 races both scored (100%)",
        "Ferrari 2018: 20/21 races both scored (95.2%)",
        "Red Bull 2011: 18/19 races both scored (94.7%)",
        "McLaren 2007: 17/17 races both scored (100%)"
      ],
      correct: 0,
      explanation: {
        en: "Mercedes had both drivers score points in all 21 races of 2019 (Hamilton and Bottas), a perfect 100% double-points season.",
        es: "Mercedes tuvo ambos pilotos puntuando en las 21 carreras de 2019 (Hamilton y Bottas), una temporada perfecta 100% de doble puntuación.",
        de: "Mercedes hatte beide Fahrer in allen 21 Rennen 2019 (Hamilton und Bottas) Punkte erzielen, eine perfekte 100% Doppelpunkt-Saison.",
        nl: "Mercedes had beide coureurs punten scoren in alle 21 races van 2019 (Hamilton en Bottas), een perfect 100% dubbel-punten seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most overtakes completed in a single race by the race winner?",
        es: "¿Cuál es el récord de más adelantamientos completados en una sola carrera por el ganador?",
        de: "Was ist der Rekord für die meisten Überholmanöver in einem einzelnen Rennen durch den Rennsieger?",
        nl: "Wat is het record voor de meeste inhaalacties voltooid in een enkele race door de racewinnaar?"
      },
      options: [
        "Kimi Räikkönen Japan 2005: 16 overtakes (17th to 1st)",
        "Sebastian Vettel Abu Dhabi 2012: 18 overtakes (24th to 3rd)",
        "Lewis Hamilton Germany 2018: 13 overtakes (14th to 1st)",
        "Max Verstappen Brazil 2016: 12 overtakes (16th to 3rd)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen completed 16 overtakes to win from 17th on the grid at Japan 2005, the most overtakes by a race winner in F1 history.",
        es: "Kimi Räikkönen completó 16 adelantamientos para ganar desde 17º en la parrilla en Japón 2005, los adelantamientos más altos por un ganador de carrera en la historia de F1.",
        de: "Kimi Räikkönen vollzog 16 Überholmanöver, um von Startplatz 17 in Japan 2005 zu gewinnen, die meisten Überholmanöver eines Rennsiegers in der F1-Geschichte.",
        nl: "Kimi Räikkönen voltooide 16 inhaalacties om te winnen vanaf de 17e op de grid in Japan 2005, de meeste inhaalacties door een racewinnaar in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most championship points scored by a driver before their first pole?",
        es: "¿Cuál es el récord de más puntos de campeonato anotados por un piloto antes de su primera pole?",
        de: "Was ist der Rekord für die meisten Meisterschaftspunkte eines Fahrers vor seiner ersten Pole?",
        nl: "Wat is het record voor de meeste kampioenschapspunten gescoord door een coureur vóór hun eerste pole?"
      },
      options: [
        "Sergio Perez: 800+ points before first pole (Sakhir 2022)",
        "Mark Webber: 450+ points before first pole (Brazil 2009)",
        "Nico Rosberg: 250+ points before first pole (China 2012)",
        "Valtteri Bottas: 150+ points before first pole (Bahrain 2017)"
      ],
      correct: 0,
      explanation: {
        en: "Sergio Perez scored over 800 career points before taking his first pole at Sakhir 2022, the most points accumulated before a maiden pole position.",
        es: "Sergio Perez anotó más de 800 puntos de carrera antes de lograr su primera pole en Sakhir 2022, los puntos más altos acumulados antes de una pole inaugural.",
        de: "Sergio Perez erzielte über 800 Karrierepunkte, bevor er seine erste Pole in Sakhir 2022 nahm, die meisten Punkte vor einer Debüt-Pole-Position.",
        nl: "Sergio Perez scoorde meer dan 800 carrièrepunten voordat hij zijn eerste pole behaalde in Sakhir 2022, de meeste punten verzameld vóór een eerste poleposition."
      }
    },
    {
      question: {
        en: "What is the record for most different engine manufacturers used by a driver across their career?",
        es: "¿Cuál es el récord de más fabricantes de motores diferentes utilizados por un piloto en su carrera?",
        de: "Was ist der Rekord für die meisten verschiedenen Motorenhersteller, die ein Fahrer in seiner Karriere verwendete?",
        nl: "Wat is het record voor de meeste verschillende motorfabrikanten gebruikt door een coureur gedurende hun carrière?"
      },
      options: [
        "Fernando Alonso: 6 manufacturers (Renault, Mercedes, Ferrari, Honda, Renault, Mercedes again)",
        "Kimi Räikkönen: 4 manufacturers (Ford/Cosworth, Mercedes, Ferrari, Renault)",
        "Jenson Button: 5 manufacturers (Ford, Renault, Honda, Mercedes, Renault again)",
        "Sebastian Vettel: 3 manufacturers (BMW, Renault, Ferrari)"
      ],
      correct: 2,
      explanation: {
        en: "Jenson Button used 5 different engine manufacturers (Ford, Renault, Honda, Mercedes, Renault) across his career, the most engine diversity for a world champion.",
        es: "Jenson Button usó 5 fabricantes de motores diferentes (Ford, Renault, Honda, Mercedes, Renault) en su carrera, la diversidad de motores más alta para un campeón mundial.",
        de: "Jenson Button nutzte 5 verschiedene Motorenhersteller (Ford, Renault, Honda, Mercedes, Renault) in seiner Karriere, die größte Motor-Vielfalt für einen Weltmeister.",
        nl: "Jenson Button gebruikte 5 verschillende motorfabrikanten (Ford, Renault, Honda, Mercedes, Renault) gedurende zijn carrière, de meeste motor-diversiteit voor een wereldkampioen."
      }
    },
    {
      question: {
        en: "What is the record for most races without a top-5 finish by a pole sitter in a season?",
        es: "¿Cuál es el récord de más carreras sin un top-5 por un poleman en una temporada?",
        de: "Was ist der Rekord für die meisten Rennen ohne Top-5-Platzierung eines Polesitters in einer Saison?",
        nl: "Wat is het record voor de meeste races zonder top-5 finish door een polesitter in een seizoen?"
      },
      options: [
        "Rubens Barrichello 2004: 2 poles, both finished outside top-5",
        "Jarno Trulli 2004: 4 poles, 2 finished outside top-5",
        "Felipe Massa 2008: 6 poles, 1 finished outside top-5",
        "Nico Rosberg 2014: 7 poles, 0 finished outside top-5"
      ],
      correct: 0,
      explanation: {
        en: "Rubens Barrichello took 2 poles in 2004 (Imola, Hockenheim) but finished both races outside the top 5 (6th and 13th), a 0% pole conversion rate to top-5.",
        es: "Rubens Barrichello logró 2 poles en 2004 (Imola, Hockenheim) pero terminó ambas carreras fuera del top 5 (6º y 13º), una tasa de conversión de pole a top-5 del 0%.",
        de: "Rubens Barrichello erzielte 2 Poles 2004 (Imola, Hockenheim), beendete aber beide Rennen außerhalb der Top 5 (6. und 13.), eine 0% Pole-Konversionsrate zu Top-5.",
        nl: "Rubens Barrichello behaalde 2 poles in 2004 (Imola, Hockenheim) maar eindigde beide races buiten de top 5 (6e en 13e), een 0% pole-conversieratio naar top-5."
      }
    },
    {
      question: {
        en: "What is the record for most wins at a single circuit by a driver who never won the championship?",
        es: "¿Cuál es el récord de más victorias en un solo circuito por un piloto que nunca ganó el campeonato?",
        de: "Was ist der Rekord für die meisten Siege auf einer einzelnen Rennstrecke durch einen Fahrer, der nie Weltmeister wurde?",
        nl: "Wat is het record voor de meeste overwinningen op een enkel circuit door een coureur die nooit wereldkampioen werd?"
      },
      options: [
        "Stirling Moss at Monaco: 3 wins (1956, 1960, 1961)",
        "Mark Webber at Monaco: 2 wins (2010, 2012)",
        "Carlos Reutemann at Brazil: 3 wins (1972, 1977, 1981)",
        "Valtteri Bottas at Russia: 2 wins (2017, 2020)"
      ],
      correct: 0,
      explanation: {
        en: "Stirling Moss won Monaco 3 times (1956, 1960, 1961) without ever winning a world championship, the most wins at a single circuit by a non-champion.",
        es: "Stirling Moss ganó Mónaco 3 veces (1956, 1960, 1961) sin ganar nunca un campeonato mundial, las victorias más altas en un solo circuito por un no campeón.",
        de: "Stirling Moss gewann Monaco 3 Mal (1956, 1960, 1961) ohne jemals Weltmeister zu werden, die meisten Siege auf einer Strecke durch einen Nicht-Champion.",
        nl: "Stirling Moss won Monaco 3 keer (1956, 1960, 1961) zonder ooit wereldkampioen te worden, de meeste overwinningen op een enkel circuit door een niet-kampioen."
      }
    },
    {
      question: {
        en: "What is the record for most races completed at 100% race distance in a career?",
        es: "¿Cuál es el récord de más carreras completadas al 100% de distancia en una carrera?",
        de: "Was ist der Rekord für die meisten Rennen mit 100% Renndistanz in einer Karriere?",
        nl: "Wat is het record voor de meeste races voltooid op 100% raceafstand in een carrière?"
      },
      options: [
        "Lewis Hamilton: 280+ races at 100% distance",
        "Fernando Alonso: 260+ races at 100% distance",
        "Kimi Räikkönen: 240+ races at 100% distance",
        "Rubens Barrichello: 220+ races at 100% distance"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso has completed 260+ races at full race distance across his 22+ year career, the most full-distance races in F1 history.",
        es: "Fernando Alonso ha completado 260+ carreras a distancia completa en su carrera de 22+ años, las carreras de distancia completa más altas en la historia de F1.",
        de: "Fernando Alonso hat 260+ Rennen über die volle Renndistanz in seiner 22+ Jahre langen Karriere absolviert, die meisten Volldistanz-Rennen in der F1-Geschichte.",
        nl: "Fernando Alonso heeft 260+ races op volledige raceafstand voltooid gedurende zijn 22+ jaar carrière, de meeste volledige-afstand races in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most races between pole positions for the same circuit?",
        es: "¿Cuál es el récord de más carreras entre poles para el mismo circuito?",
        de: "Was ist der Rekord für die meisten Rennen zwischen Pole-Positions auf derselben Rennstrecke?",
        nl: "Wat is het record voor de meeste races tussen polepositions voor hetzelfde circuit?"
      },
      options: [
        "Monaco: 156 races between Räikkönen poles (2008-2017)",
        "Silverstone: 98 races between Alonso poles (2006-2014)",
        "Spa: 76 races between Hamilton poles (2009-2015)",
        "Monza: 112 races between Vettel poles (2008-2018)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen took pole at Monaco in 2008 and again in 2017, a gap of 156 Grand Prix, the longest gap between poles at the same circuit.",
        es: "Kimi Räikkönen logró pole en Mónaco en 2008 y de nuevo en 2017, una brecha de 156 Grandes Premios, la brecha más larga entre poles en el mismo circuito.",
        de: "Kimi Räikkönen erzielte die Pole in Monaco 2008 und erneut 2017, eine Lücke von 156 Grand Prix, die längste Lücke zwischen Poles auf derselben Strecke.",
        nl: "Kimi Räikkönen behaalde pole in Monaco in 2008 en opnieuw in 2017, een kloof van 156 Grand Prix, de langste kloof tussen poles op hetzelfde circuit."
      }
    },
    {
      question: {
        en: "What is the record for most wins by a driver in wet/mixed conditions?",
        es: "¿Cuál es el récord de más victorias de un piloto en condiciones mojadas/mixtas?",
        de: "Was ist der Rekord für die meisten Siege eines Fahrers bei nassen/gemischten Bedingungen?",
        nl: "Wat is het record voor de meeste overwinningen door een coureur in natte/gemengde omstandigheden?"
      },
      options: [
        "Ayrton Senna: 19 wet-weather wins",
        "Michael Schumacher: 22 wet-weather wins",
        "Lewis Hamilton: 16 wet-weather wins",
        "Sebastian Vettel: 8 wet-weather wins"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won 22 races in wet or mixed conditions, the most wet-weather victories in F1 history, showcasing exceptional car control.",
        es: "Michael Schumacher ganó 22 carreras en condiciones mojadas o mixtas, las victorias en mojado más altas en la historia de F1, mostrando control excepcional del coche.",
        de: "Michael Schumacher gewann 22 Rennen bei nassen oder gemischten Bedingungen, die meisten Regensiege in der F1-Geschichte, zeigte außergewöhnliche Fahrzeugbeherrschung.",
        nl: "Michael Schumacher won 22 races in natte of gemengde omstandigheden, de meeste nat-weer overwinningen in F1-geschiedenis, toont uitzonderlijke autocontrole."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive races without a mechanical DNF?",
        es: "¿Cuál es el récord de más carreras consecutivas sin DNF mecánico?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennen ohne technischen Ausfall?",
        nl: "Wat is het record voor de meeste opeenvolgende races zonder mechanische DNF?"
      },
      options: [
        "Lewis Hamilton 2008-2016: 47 races without mechanical DNF",
        "Fernando Alonso 2012-2015: 58 races without mechanical DNF",
        "Max Verstappen 2020-2022: 35 races without mechanical DNF",
        "Sebastian Vettel 2010-2013: 42 races without mechanical DNF"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso completed 58 consecutive races from Malaysia 2012 to Belgium 2015 without a mechanical retirement, the longest such streak.",
        es: "Fernando Alonso completó 58 carreras consecutivas desde Malasia 2012 hasta Bélgica 2015 sin un retiro mecánico, la racha más larga así.",
        de: "Fernando Alonso absolvierte 58 aufeinanderfolgende Rennen von Malaysia 2012 bis Belgien 2015 ohne technischen Ausfall, die längste derartige Serie.",
        nl: "Fernando Alonso voltooide 58 opeenvolgende races van Maleisië 2012 tot België 2015 zonder mechanische uitval, de langste dergelijke reeks."
      }
    },
    {
      question: {
        en: "What is the record for most driver pairings (teammates) for a single driver in their career?",
        es: "¿Cuál es el récord de más parejas de pilotos (compañeros de equipo) para un solo piloto en su carrera?",
        de: "Was ist der Rekord für die meisten Fahrerpaarungen (Teamkollegen) für einen einzelnen Fahrer in seiner Karriere?",
        nl: "Wat is het record voor de meeste coureurskoppelingen (teamgenoten) voor een enkele coureur in hun carrière?"
      },
      options: [
        "Fernando Alonso: 14 different teammates",
        "Rubens Barrichello: 16 different teammates",
        "Kimi Räikkönen: 13 different teammates",
        "Jenson Button: 15 different teammates"
      ],
      correct: 1,
      explanation: {
        en: "Rubens Barrichello had 16 different teammates across his 19-season career, the most teammate pairings in F1 history due to his long career.",
        es: "Rubens Barrichello tuvo 16 compañeros de equipo diferentes en su carrera de 19 temporadas, las parejas de compañeros más altas en la historia de F1 debido a su larga carrera.",
        de: "Rubens Barrichello hatte 16 verschiedene Teamkollegen während seiner 19-Saisons-Karriere, die meisten Teamkollegen-Paarungen in der F1-Geschichte aufgrund seiner langen Karriere.",
        nl: "Rubens Barrichello had 16 verschillende teamgenoten gedurende zijn 19-seizoenen carrière, de meeste teamgenoot-koppelingen in F1-geschiedenis vanwege zijn lange carrière."
      }
    },
    {
      question: {
        en: "What is the record for most points scored in a season by a driver finishing outside top 3 in championship?",
        es: "¿Cuál es el récord de más puntos anotados en una temporada por un piloto terminando fuera del top 3 en campeonato?",
        de: "Was ist der Rekord für die meisten Punkte in einer Saison durch einen Fahrer außerhalb der Top 3 in der Meisterschaft?",
        nl: "Wat is het record voor de meeste punten gescoord in een seizoen door een coureur eindigend buiten top 3 in kampioenschap?"
      },
      options: [
        "Daniel Ricciardo 2014: 238 points (finished 3rd)",
        "Sergio Perez 2023: 285 points (finished 2nd)",
        "Carlos Sainz 2023: 200 points (finished 5th)",
        "Charles Leclerc 2022: 308 points (finished 2nd)"
      ],
      correct: 2,
      explanation: {
        en: "Carlos Sainz scored 200 points in 2023 but finished 5th in the championship, the most points by a driver finishing outside the top 3.",
        es: "Carlos Sainz anotó 200 puntos en 2023 pero terminó 5º en el campeonato, los puntos más altos por un piloto terminando fuera del top 3.",
        de: "Carlos Sainz erzielte 200 Punkte 2023, wurde aber 5. in der Meisterschaft, die meisten Punkte eines Fahrers außerhalb der Top 3.",
        nl: "Carlos Sainz scoorde 200 punten in 2023 maar eindigde 5e in het kampioenschap, de meeste punten door een coureur eindigend buiten de top 3."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();
