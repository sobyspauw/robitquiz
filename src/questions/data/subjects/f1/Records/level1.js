const level1 = (function() {
  const questions = [
    {
      question: {
        en: "Which driver holds the record for most race wins in Formula 1 history?",
        es: "¿Qué piloto tiene el récord de más victorias de carrera en la historia de la Fórmula 1?",
        de: "Welcher Fahrer hält den Rekord für die meisten Rennsiege in der Formel-1-Geschichte?",
        nl: "Welke coureur heeft het record voor de meeste race overwinningen in Formule 1 geschiedenis?"
      },
      options: [
        "Michael Schumacher",
        "Lewis Hamilton",
        "Sebastian Vettel",
        "Alain Prost"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton holds the record with 103 race wins, surpassing Michael Schumacher's previous record of 91 wins in 2020.",
        es: "Lewis Hamilton tiene el récord con 103 victorias de carrera, superando el récord anterior de Michael Schumacher de 91 victorias en 2020.",
        de: "Lewis Hamilton hält den Rekord mit 103 Rennsiegen und überholte 2020 Michael Schumachers vorherigen Rekord von 91 Siegen.",
        nl: "Lewis Hamilton heeft het record met 103 race overwinningen, hij overtrof Michael Schumachers vorige record van 91 overwinningen in 2020."
      }
    },
    {
      question: {
        en: "What is the fastest qualifying lap time ever recorded at Monza?",
        es: "¿Cuál es el tiempo de vuelta de clasificación más rápido jamás registrado en Monza?",
        de: "Was ist die schnellste Qualifying-Rundenzeit, die jemals in Monza aufgezeichnet wurde?",
        nl: "Wat is de snelste kwalificatie rondetijd ooit opgenomen op Monza?"
      },
      options: [
        "1:14.260",
        "1:15.118",
        "1:13.078",
        "1:16.545"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton set the fastest qualifying lap at Monza with 1:13.078 during the 2020 Italian Grand Prix qualifying session.",
        es: "Lewis Hamilton estableció la vuelta de clasificación más rápida en Monza con 1:13.078 durante la sesión de clasificación del Gran Premio de Italia 2020.",
        de: "Lewis Hamilton stellte die schnellste Qualifying-Runde in Monza mit 1:13.078 während der Qualifying-Session des Italien GP 2020 auf.",
        nl: "Lewis Hamilton zette de snelste kwalificatie ronde op Monza neer met 1:13.078 tijdens de kwalificatie sessie van de Italiaanse Grand Prix 2020."
      }
    },
    {
      question: {
        en: "Which driver achieved the most consecutive race wins in a single season?",
        es: "¿Qué piloto logró la mayor cantidad de victorias consecutivas de carrera en una sola temporada?",
        de: "Welcher Fahrer erzielte die meisten aufeinanderfolgenden Rennsiege in einer einzigen Saison?",
        nl: "Welke coureur behaalde de meeste opeenvolgende race overwinningen in een seizoen?"
      },
      options: [
        "Sebastian Vettel (9 wins)",
        "Max Verstappen (10 wins)",
        "Michael Schumacher (7 wins)",
        "Lewis Hamilton (8 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won 10 consecutive races in 2023, breaking Sebastian Vettel's previous record of 9 consecutive wins from 2013.",
        es: "Max Verstappen ganó 10 carreras consecutivas en 2023, rompiendo el récord previo de Sebastian Vettel de 9 victorias consecutivas de 2013.",
        de: "Max Verstappen gewann 2023 10 aufeinanderfolgende Rennen und brach damit Sebastian Vettels vorherigen Rekord von 9 aufeinanderfolgenden Siegen aus 2013.",
        nl: "Max Verstappen won 10 opeenvolgende races in 2023, waarmee hij Sebastian Vettels vorige record van 9 opeenvolgende overwinningen uit 2013 verbrak."
      }
    },
    {
      question: {
        en: "What is the record for most pole positions in F1 history?",
        es: "¿Cuál es el récord de más pole positions en la historia de F1?",
        de: "Was ist der Rekord für die meisten Pole-Positionen in der F1-Geschichte?",
        nl: "Wat is het record voor de meeste pole positions in F1 geschiedenis?"
      },
      options: [
        "91 pole positions",
        "103 pole positions",
        "68 pole positions",
        "57 pole positions"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton holds the record for most pole positions with 103, demonstrating his exceptional qualifying speed throughout his career.",
        es: "Lewis Hamilton tiene el récord de más pole positions con 103, demostrando su velocidad excepcional de clasificación a lo largo de su carrera.",
        de: "Lewis Hamilton hält den Rekord für die meisten Pole-Positionen mit 103 und zeigt damit seine außergewöhnliche Qualifying-Geschwindigkeit während seiner Karriere.",
        nl: "Lewis Hamilton heeft het record voor de meeste pole positions met 103, wat zijn uitzonderlijke kwalificatie snelheid gedurende zijn carrière toont."
      }
    },
    {
      question: {
        en: "Which team holds the record for most consecutive Constructors' Championship wins?",
        es: "¿Qué equipo tiene el récord de más victorias consecutivas del Campeonato de Constructores?",
        de: "Welches Team hält den Rekord für die meisten aufeinanderfolgenden Konstrukteurs-Meisterschaftssiege?",
        nl: "Welk team heeft het record voor de meeste opeenvolgende Constructeurskampioenschap overwinningen?"
      },
      options: [
        "Ferrari (6 consecutive)",
        "McLaren (4 consecutive)",
        "Mercedes (8 consecutive)",
        "Red Bull Racing (4 consecutive)"
      ],
      correct: 2,
      explanation: {
        en: "Mercedes won 8 consecutive Constructors' Championships from 2014-2021, dominating the hybrid era of Formula 1 with their superior power unit technology.",
        es: "Mercedes ganó 8 Campeonatos de Constructores consecutivos de 2014-2021, dominando la era híbrida de la Fórmula 1 con su tecnología superior de unidad de potencia.",
        de: "Mercedes gewann von 2014-2021 8 aufeinanderfolgende Konstrukteurs-Meisterschaften und dominierte die Hybrid-Ära der Formel 1 mit ihrer überlegenen Antriebstechnologie.",
        nl: "Mercedes won 8 opeenvolgende Constructeurskampioenschappen van 2014-2021, en domineerde het hybride tijdperk van Formule 1 met hun superieure krachtbron technologie."
      }
    },
    {
      question: {
        en: "Who holds the record for most World Championships won by a driver?",
        es: "¿Quién tiene el récord de más Campeonatos Mundiales ganados por un piloto?",
        de: "Wer hält den Rekord für die meisten von einem Fahrer gewonnenen Weltmeisterschaften?",
        nl: "Wie heeft het record voor de meeste Wereldkampioenschappen gewonnen door een coureur?"
      },
      options: [
        "Juan Manuel Fangio (5 titles)",
        "Lewis Hamilton and Michael Schumacher (7 titles each)",
        "Alain Prost (4 titles)",
        "Sebastian Vettel (4 titles)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton and Michael Schumacher are tied with 7 World Championships each, the most in F1 history. Hamilton matched Schumacher's record in 2020.",
        es: "Lewis Hamilton y Michael Schumacher están empatados con 7 Campeonatos Mundiales cada uno, lo máximo en la historia de F1. Hamilton igualó el récord de Schumacher en 2020.",
        de: "Lewis Hamilton und Michael Schumacher sind mit jeweils 7 Weltmeisterschaften gleichauf, die meisten in der F1-Geschichte. Hamilton stellte 2020 Schumachers Rekord ein.",
        nl: "Lewis Hamilton en Michael Schumacher staan gelijk met elk 7 Wereldkampioenschappen, de meeste in F1 geschiedenis. Hamilton evenaarde Schumachers record in 2020."
      }
    },
    {
      question: {
        en: "What is the record for most podium finishes in F1 history?",
        es: "¿Cuál es el récord de más podios en la historia de F1?",
        de: "Was ist der Rekord für die meisten Podiumsplatzierungen in der F1-Geschichte?",
        nl: "Wat is het record voor de meeste podium finishes in F1 geschiedenis?"
      },
      options: [
        "155 podiums",
        "191 podiums",
        "201 podiums",
        "183 podiums"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton holds the record with 201 podium finishes, showcasing his remarkable consistency at the front of the field throughout his career.",
        es: "Lewis Hamilton tiene el récord con 201 podios, mostrando su notable consistencia en la parte delantera del campo a lo largo de su carrera.",
        de: "Lewis Hamilton hält den Rekord mit 201 Podiumsplatzierungen und zeigt damit seine bemerkenswerte Konstanz an der Spitze des Feldes während seiner Karriere.",
        nl: "Lewis Hamilton heeft het record met 201 podium finishes, wat zijn opmerkelijke consistentie aan de voorkant van het veld tijdens zijn carrière toont."
      }
    },
    {
      question: {
        en: "Who holds the record for youngest F1 World Champion?",
        es: "¿Quién tiene el récord del Campeón Mundial de F1 más joven?",
        de: "Wer hält den Rekord für den jüngsten F1-Weltmeister?",
        nl: "Wie heeft het record voor de jongste F1 Wereldkampioen?"
      },
      options: [
        "Lewis Hamilton (23 years)",
        "Sebastian Vettel (23 years)",
        "Fernando Alonso (24 years)",
        "Max Verstappen (24 years)"
      ],
      correct: 1,
      explanation: {
        en: "Sebastian Vettel became the youngest F1 World Champion at 23 years and 134 days when he won the 2010 championship with Red Bull Racing.",
        es: "Sebastian Vettel se convirtió en el Campeón Mundial de F1 más joven a los 23 años y 134 días cuando ganó el campeonato de 2010 con Red Bull Racing.",
        de: "Sebastian Vettel wurde mit 23 Jahren und 134 Tagen der jüngste F1-Weltmeister, als er 2010 die Meisterschaft mit Red Bull Racing gewann.",
        nl: "Sebastian Vettel werd de jongste F1 Wereldkampioen op 23 jaar en 134 dagen toen hij het 2010 kampioenschap won met Red Bull Racing."
      }
    },
    {
      question: {
        en: "Which circuit has hosted the most F1 Grand Prix races?",
        es: "¿Qué circuito ha albergado la mayor cantidad de Grandes Premios de F1?",
        de: "Welche Rennstrecke hat die meisten F1-Grand-Prix-Rennen ausgetragen?",
        nl: "Welk circuit heeft de meeste F1 Grand Prix races georganiseerd?"
      },
      options: [
        "Silverstone",
        "Monaco",
        "Monza",
        "Spa-Francorchamps"
      ],
      correct: 2,
      explanation: {
        en: "Monza has hosted the most F1 races with over 70 Italian Grand Prix events since 1950, missing only the 1980 season when it was held at Imola.",
        es: "Monza ha albergado la mayor cantidad de carreras de F1 con más de 70 Grandes Premios de Italia desde 1950, faltando solo la temporada 1980 cuando se realizó en Imola.",
        de: "Monza hat die meisten F1-Rennen ausgetragen, mit über 70 Italien-Grand-Prix seit 1950, nur die Saison 1980 fehlte, als es in Imola stattfand.",
        nl: "Monza heeft de meeste F1 races georganiseerd met meer dan 70 Italiaanse Grand Prix evenementen sinds 1950, alleen het 1980 seizoen ontbrak toen het in Imola werd gehouden."
      }
    },
    {
      question: {
        en: "What is the record for most points scored in a single F1 season?",
        es: "¿Cuál es el récord de más puntos anotados en una sola temporada de F1?",
        de: "Was ist der Rekord für die meisten Punkte in einer einzigen F1-Saison?",
        nl: "Wat is het record voor de meeste punten gescoord in een enkel F1 seizoen?"
      },
      options: [
        "381 points",
        "413 points",
        "454 points",
        "478 points"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen scored a record 454 points in the 2023 season, dominating with 19 race wins out of 22 races.",
        es: "Max Verstappen anotó un récord de 454 puntos en la temporada 2023, dominando con 19 victorias de carrera de 22 carreras.",
        de: "Max Verstappen erzielte in der Saison 2023 Rekord 454 Punkte und dominierte mit 19 Rennsiegen bei 22 Rennen.",
        nl: "Max Verstappen scoorde een record 454 punten in het 2023 seizoen, dominerend met 19 race overwinningen uit 22 races."
      }
    },
    {
      question: {
        en: "Who was the oldest driver to win a World Championship?",
        es: "¿Quién fue el piloto más viejo en ganar un Campeonato Mundial?",
        de: "Wer war der älteste Fahrer, der eine Weltmeisterschaft gewann?",
        nl: "Wie was de oudste coureur om een Wereldkampioenschap te winnen?"
      },
      options: [
        "Nigel Mansell (39 years)",
        "Juan Manuel Fangio (46 years)",
        "Damon Hill (36 years)",
        "Kimi Räikkönen (38 years)"
      ],
      correct: 1,
      explanation: {
        en: "Juan Manuel Fangio won his fifth and final World Championship in 1957 at the age of 46 years and 41 days, a record that still stands.",
        es: "Juan Manuel Fangio ganó su quinto y último Campeonato Mundial en 1957 a la edad de 46 años y 41 días, un récord que aún se mantiene.",
        de: "Juan Manuel Fangio gewann seine fünfte und letzte Weltmeisterschaft 1957 im Alter von 46 Jahren und 41 Tagen, ein Rekord, der bis heute besteht.",
        nl: "Juan Manuel Fangio won zijn vijfde en laatste Wereldkampioenschap in 1957 op de leeftijd van 46 jaar en 41 dagen, een record dat nog steeds staat."
      }
    },
    {
      question: {
        en: "What is the record for most wins in a single season?",
        es: "¿Cuál es el récord de más victorias en una sola temporada?",
        de: "Was ist der Rekord für die meisten Siege in einer einzigen Saison?",
        nl: "Wat is het record voor de meeste overwinningen in een enkel seizoen?"
      },
      options: [
        "13 wins",
        "15 wins",
        "17 wins",
        "19 wins"
      ],
      correct: 3,
      explanation: {
        en: "Max Verstappen won 19 races in the 2023 season, breaking the previous record of 13 wins held by Michael Schumacher (2004) and Sebastian Vettel (2013).",
        es: "Max Verstappen ganó 19 carreras en la temporada 2023, rompiendo el récord anterior de 13 victorias en poder de Michael Schumacher (2004) y Sebastian Vettel (2013).",
        de: "Max Verstappen gewann 2023 19 Rennen und brach damit den vorherigen Rekord von 13 Siegen von Michael Schumacher (2004) und Sebastian Vettel (2013).",
        nl: "Max Verstappen won 19 races in het 2023 seizoen, waarmee hij het vorige record van 13 overwinningen van Michael Schumacher (2004) en Sebastian Vettel (2013) verbrak."
      }
    },
    {
      question: {
        en: "Who has the most fastest laps in F1 history?",
        es: "¿Quién tiene la mayor cantidad de vueltas más rápidas en la historia de F1?",
        de: "Wer hat die meisten schnellsten Runden in der F1-Geschichte?",
        nl: "Wie heeft de meeste snelste ronden in F1 geschiedenis?"
      },
      options: [
        "Michael Schumacher (77)",
        "Lewis Hamilton (67)",
        "Kimi Räikkönen (46)",
        "Max Verstappen (32)"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher holds the record with 77 fastest laps during races, demonstrating his consistent pace and tire management throughout his career.",
        es: "Michael Schumacher tiene el récord con 77 vueltas más rápidas durante las carreras, demostrando su ritmo consistente y gestión de neumáticos a lo largo de su carrera.",
        de: "Michael Schumacher hält den Rekord mit 77 schnellsten Runden während der Rennen und zeigt damit sein konstantes Tempo und Reifenmanagement während seiner Karriere.",
        nl: "Michael Schumacher heeft het record met 77 snelste ronden tijdens races, wat zijn consistente tempo en banden management gedurende zijn carrière toont."
      }
    },
    {
      question: {
        en: "Which driver has competed in the most F1 races?",
        es: "¿Qué piloto ha competido en la mayor cantidad de carreras de F1?",
        de: "Welcher Fahrer hat an den meisten F1-Rennen teilgenommen?",
        nl: "Welke coureur heeft aan de meeste F1 races deelgenomen?"
      },
      options: [
        "Rubens Barrichello (326 races)",
        "Fernando Alonso (380+ races)",
        "Michael Schumacher (308 races)",
        "Lewis Hamilton (340+ races)"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso has competed in over 380 F1 races, the most in history. He continues to race and extends his record with each Grand Prix.",
        es: "Fernando Alonso ha competido en más de 380 carreras de F1, la mayor cantidad en la historia. Continúa corriendo y extiende su récord con cada Gran Premio.",
        de: "Fernando Alonso hat an über 380 F1-Rennen teilgenommen, die meisten in der Geschichte. Er fährt weiterhin und erweitert seinen Rekord mit jedem Grand Prix.",
        nl: "Fernando Alonso heeft aan meer dan 380 F1 races deelgenomen, de meeste in de geschiedenis. Hij blijft racen en breidt zijn record uit met elke Grand Prix."
      }
    },
    {
      question: {
        en: "What is the record for longest time between race wins?",
        es: "¿Cuál es el récord del tiempo más largo entre victorias de carrera?",
        de: "Was ist der Rekord für die längste Zeit zwischen Rennsiegen?",
        nl: "Wat is het record voor de langste tijd tussen race overwinningen?"
      },
      options: [
        "6 years 211 days",
        "7 years 185 days",
        "8 years 229 days",
        "5 years 142 days"
      ],
      correct: 0,
      explanation: {
        en: "Sergio Pérez holds this record with 6 years and 211 days between his 2011 Italian GP win and his 2020 Sakhir GP victory.",
        es: "Sergio Pérez tiene este récord con 6 años y 211 días entre su victoria en el GP de Italia 2011 y su victoria en el GP de Sakhir 2020.",
        de: "Sergio Pérez hält diesen Rekord mit 6 Jahren und 211 Tagen zwischen seinem Sieg beim Italien-GP 2011 und seinem Sieg beim Sakhir-GP 2020.",
        nl: "Sergio Pérez heeft dit record met 6 jaar en 211 dagen tussen zijn 2011 Italiaanse GP overwinning en zijn 2020 Sakhir GP overwinning."
      }
    },
    {
      question: {
        en: "Which team has the most Constructors' Championship titles?",
        es: "¿Qué equipo tiene la mayor cantidad de títulos de Campeonato de Constructores?",
        de: "Welches Team hat die meisten Konstrukteurs-Meisterschaftstitel?",
        nl: "Welk team heeft de meeste Constructeurskampioenschap titels?"
      },
      options: [
        "McLaren (8 titles)",
        "Williams (9 titles)",
        "Ferrari (16 titles)",
        "Mercedes (8 titles)"
      ],
      correct: 2,
      explanation: {
        en: "Ferrari has won 16 Constructors' Championships, the most of any team, with their first in 1961 and most recent in 2008.",
        es: "Ferrari ha ganado 16 Campeonatos de Constructores, la mayor cantidad de cualquier equipo, con su primero en 1961 y el más reciente en 2008.",
        de: "Ferrari hat 16 Konstrukteurs-Meisterschaften gewonnen, die meisten von allen Teams, die erste 1961 und die letzte 2008.",
        nl: "Ferrari heeft 16 Constructeurskampioenschappen gewonnen, de meeste van alle teams, met hun eerste in 1961 en meest recente in 2008."
      }
    },
    {
      question: {
        en: "What is the record for most career points without a win?",
        es: "¿Cuál es el récord de más puntos de carrera sin una victoria?",
        de: "Was ist der Rekord für die meisten Karrierepunkte ohne Sieg?",
        nl: "Wat is het record voor de meeste carrière punten zonder een overwinning?"
      },
      options: [
        "485 points",
        "614 points",
        "521 points",
        "578 points"
      ],
      correct: 1,
      explanation: {
        en: "Nico Hulkenberg holds this record with 614 career points without ever winning a race, despite 194 race starts and numerous podium finishes.",
        es: "Nico Hulkenberg tiene este récord con 614 puntos de carrera sin ganar nunca una carrera, a pesar de 194 salidas de carrera y numerosos podios.",
        de: "Nico Hulkenberg hält diesen Rekord mit 614 Karrierepunkten ohne jemals ein Rennen gewonnen zu haben, trotz 194 Rennstarts und zahlreichen Podiumsplatzierungen.",
        nl: "Nico Hulkenberg heeft dit record met 614 carrière punten zonder ooit een race te hebben gewonnen, ondanks 194 race starts en tal van podium finishes."
      }
    },
    {
      question: {
        en: "Who was the youngest driver to score points in F1?",
        es: "¿Quién fue el piloto más joven en anotar puntos en F1?",
        de: "Wer war der jüngste Fahrer, der in der F1 Punkte erzielte?",
        nl: "Wie was de jongste coureur om punten te scoren in F1?"
      },
      options: [
        "Lance Stroll (18 years)",
        "Max Verstappen (17 years)",
        "Daniil Kvyat (19 years)",
        "Sebastian Vettel (19 years)"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen scored his first points at age 17 years and 180 days at the 2015 Malaysian Grand Prix, becoming the youngest points scorer in F1 history.",
        es: "Max Verstappen anotó sus primeros puntos a la edad de 17 años y 180 días en el Gran Premio de Malasia 2015, convirtiéndose en el anotador de puntos más joven en la historia de F1.",
        de: "Max Verstappen erzielte seine ersten Punkte im Alter von 17 Jahren und 180 Tagen beim Malaysia-Grand-Prix 2015 und wurde damit der jüngste Punktesammler der F1-Geschichte.",
        nl: "Max Verstappen scoorde zijn eerste punten op 17 jaar en 180 dagen tijdens de 2015 Maleisische Grand Prix, en werd de jongste punten scorer in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most Grand Slam wins (pole, win, fastest lap, lead every lap)?",
        es: "¿Cuál es el récord de más victorias de Grand Slam (pole, victoria, vuelta rápida, liderar cada vuelta)?",
        de: "Was ist der Rekord für die meisten Grand-Slam-Siege (Pole, Sieg, schnellste Runde, jede Runde führen)?",
        nl: "Wat is het record voor de meeste Grand Slam overwinningen (pole, win, snelste ronde, elke ronde leiden)?"
      },
      options: [
        "5 Grand Slams",
        "8 Grand Slams",
        "6 Grand Slams",
        "10 Grand Slams"
      ],
      correct: 1,
      explanation: {
        en: "Jim Clark holds the record with 8 Grand Slam victories, demonstrating total dominance in those races. This achievement requires pole position, race win, fastest lap, and leading every lap.",
        es: "Jim Clark tiene el récord con 8 victorias de Grand Slam, demostrando dominio total en esas carreras. Este logro requiere pole position, victoria de carrera, vuelta más rápida y liderar cada vuelta.",
        de: "Jim Clark hält den Rekord mit 8 Grand-Slam-Siegen und demonstriert damit totale Dominanz in diesen Rennen. Diese Leistung erfordert Pole-Position, Rennsieg, schnellste Runde und jede Runde zu führen.",
        nl: "Jim Clark heeft het record met 8 Grand Slam overwinningen, wat totale dominantie in die races toont. Deze prestatie vereist pole position, race overwinning, snelste ronde en elke ronde leiden."
      }
    },
    {
      question: {
        en: "Which driver has the most podium finishes without ever winning a race?",
        es: "¿Qué piloto tiene la mayor cantidad de podios sin ganar nunca una carrera?",
        de: "Welcher Fahrer hat die meisten Podiumsplatzierungen ohne jemals ein Rennen zu gewinnen?",
        nl: "Welke coureur heeft de meeste podium finishes zonder ooit een race te hebben gewonnen?"
      },
      options: [
        "Chris Amon (11 podiums)",
        "Nico Hulkenberg (0 podiums)",
        "Nick Heidfeld (13 podiums)",
        "Kamui Kobayashi (3 podiums)"
      ],
      correct: 2,
      explanation: {
        en: "Nick Heidfeld achieved 13 podium finishes without ever winning a race, the most of any driver who never stood on the top step of the podium.",
        es: "Nick Heidfeld logró 13 podios sin ganar nunca una carrera, la mayor cantidad de cualquier piloto que nunca estuvo en el escalón más alto del podio.",
        de: "Nick Heidfeld erreichte 13 Podiumsplatzierungen ohne jemals ein Rennen zu gewinnen, die meisten von allen Fahrern, die nie auf der obersten Stufe des Podiums standen.",
        nl: "Nick Heidfeld behaalde 13 podium finishes zonder ooit een race te hebben gewonnen, de meeste van elke coureur die nooit op de hoogste trede van het podium stond."
      }
    },
    {
      question: {
        en: "What is the record for youngest race winner in F1?",
        es: "¿Cuál es el récord del ganador de carrera más joven en F1?",
        de: "Was ist der Rekord für den jüngsten Rennsieger in der F1?",
        nl: "Wat is het record voor de jongste race winnaar in F1?"
      },
      options: [
        "Fernando Alonso (22 years)",
        "Sebastian Vettel (21 years)",
        "Max Verstappen (18 years)",
        "Lewis Hamilton (22 years)"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen became the youngest race winner at 18 years and 228 days when he won the 2016 Spanish Grand Prix for Red Bull Racing.",
        es: "Max Verstappen se convirtió en el ganador de carrera más joven a los 18 años y 228 días cuando ganó el Gran Premio de España 2016 para Red Bull Racing.",
        de: "Max Verstappen wurde mit 18 Jahren und 228 Tagen der jüngste Rennsieger, als er den Spanien-Grand-Prix 2016 für Red Bull Racing gewann.",
        nl: "Max Verstappen werd de jongste race winnaar op 18 jaar en 228 dagen toen hij de 2016 Spaanse Grand Prix won voor Red Bull Racing."
      }
    },
    {
      question: {
        en: "Which driver has the most retirements in F1 history?",
        es: "¿Qué piloto tiene la mayor cantidad de retiros en la historia de F1?",
        de: "Welcher Fahrer hat die meisten Ausfälle in der F1-Geschichte?",
        nl: "Welke coureur heeft de meeste uitvalbeurten in F1 geschiedenis?"
      },
      options: [
        "Andrea de Cesaris (147 retirements)",
        "Fernando Alonso (129 retirements)",
        "Rubens Barrichello (124 retirements)",
        "Michael Schumacher (118 retirements)"
      ],
      correct: 0,
      explanation: {
        en: "Andrea de Cesaris holds this unfortunate record with 147 retirements from 208 race starts, often due to reliability issues and accidents during his career from 1980-1994.",
        es: "Andrea de Cesaris tiene este récord desafortunado con 147 retiros de 208 salidas de carrera, a menudo debido a problemas de confiabilidad y accidentes durante su carrera de 1980-1994.",
        de: "Andrea de Cesaris hält diesen unglücklichen Rekord mit 147 Ausfällen bei 208 Rennstarts, oft aufgrund von Zuverlässigkeitsproblemen und Unfällen während seiner Karriere von 1980-1994.",
        nl: "Andrea de Cesaris heeft dit ongelukkige record met 147 uitvalbeurten uit 208 race starts, vaak door betrouwbaarheidsproblemen en ongelukken tijdens zijn carrière van 1980-1994."
      }
    },
    {
      question: {
        en: "What is the record for most wins at a single circuit?",
        es: "¿Cuál es el récord de más victorias en un solo circuito?",
        de: "Was ist der Rekord für die meisten Siege auf einer einzigen Rennstrecke?",
        nl: "Wat is het record voor de meeste overwinningen op een enkel circuit?"
      },
      options: [
        "7 wins",
        "8 wins",
        "9 wins",
        "10 wins"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has won 8 times at the Hungarian Grand Prix (Hungaroring) and 8 times at the British Grand Prix (Silverstone), tied for the most wins at a single circuit.",
        es: "Lewis Hamilton ha ganado 8 veces en el Gran Premio de Hungría (Hungaroring) y 8 veces en el Gran Premio de Gran Bretaña (Silverstone), empatado por la mayor cantidad de victorias en un solo circuito.",
        de: "Lewis Hamilton hat 8 Mal beim Ungarn-Grand-Prix (Hungaroring) und 8 Mal beim Großbritannien-Grand-Prix (Silverstone) gewonnen, gleichauf für die meisten Siege auf einer einzigen Rennstrecke.",
        nl: "Lewis Hamilton heeft 8 keer gewonnen bij de Hongaarse Grand Prix (Hungaroring) en 8 keer bij de Britse Grand Prix (Silverstone), gelijk voor de meeste overwinningen op een enkel circuit."
      }
    },
    {
      question: {
        en: "Which team achieved the most 1-2 finishes in a single season?",
        es: "¿Qué equipo logró la mayor cantidad de finales 1-2 en una sola temporada?",
        de: "Welches Team erreichte die meisten 1-2-Platzierungen in einer einzigen Saison?",
        nl: "Welk team behaalde de meeste 1-2 finishes in een enkel seizoen?"
      },
      options: [
        "Ferrari 2002 (9 times)",
        "Mercedes 2016 (12 times)",
        "McLaren 1988 (10 times)",
        "Red Bull 2023 (15 times)"
      ],
      correct: 3,
      explanation: {
        en: "Red Bull Racing achieved 15 one-two finishes in the 2023 season with Max Verstappen and Sergio Pérez, showcasing their dominant car performance.",
        es: "Red Bull Racing logró 15 finales uno-dos en la temporada 2023 con Max Verstappen y Sergio Pérez, mostrando el rendimiento dominante de su auto.",
        de: "Red Bull Racing erreichte 2023 15 Doppelsiege mit Max Verstappen und Sergio Pérez und zeigte damit die dominante Fahrzeugleistung.",
        nl: "Red Bull Racing behaalde 15 een-twee finishes in het 2023 seizoen met Max Verstappen en Sergio Pérez, wat hun dominante auto prestatie toont."
      }
    },
    {
      question: {
        en: "What is the record for most laps led in F1 history?",
        es: "¿Cuál es el récord de más vueltas lideradas en la historia de F1?",
        de: "Was ist der Rekord für die meisten geführten Runden in der F1-Geschichte?",
        nl: "Wat is het record voor de meeste gelede ronden in F1 geschiedenis?"
      },
      options: [
        "4,632 laps",
        "5,111 laps",
        "5,689 laps",
        "6,247 laps"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton has led 5,689 laps in his career, the most in F1 history, demonstrating his ability to control races from the front.",
        es: "Lewis Hamilton ha liderado 5,689 vueltas en su carrera, la mayor cantidad en la historia de F1, demostrando su capacidad para controlar carreras desde el frente.",
        de: "Lewis Hamilton hat in seiner Karriere 5.689 Runden angeführt, die meisten in der F1-Geschichte, was seine Fähigkeit zeigt, Rennen von vorne zu kontrollieren.",
        nl: "Lewis Hamilton heeft 5,689 ronden geleid in zijn carrière, de meeste in F1 geschiedenis, wat zijn vermogen toont om races van voren te controleren."
      }
    },
    {
      question: {
        en: "Who has the most pole positions in a single season?",
        es: "¿Quién tiene la mayor cantidad de pole positions en una sola temporada?",
        de: "Wer hat die meisten Pole-Positionen in einer einzigen Saison?",
        nl: "Wie heeft de meeste pole positions in een enkel seizoen?"
      },
      options: [
        "Ayrton Senna (13 poles)",
        "Nigel Mansell (14 poles)",
        "Sebastian Vettel (15 poles)",
        "Max Verstappen (9 poles)"
      ],
      correct: 1,
      explanation: {
        en: "Nigel Mansell achieved 14 pole positions in the 1992 season, the most in a single year, on his way to winning the World Championship with Williams.",
        es: "Nigel Mansell logró 14 pole positions en la temporada 1992, la mayor cantidad en un solo año, en su camino a ganar el Campeonato Mundial con Williams.",
        de: "Nigel Mansell erreichte 1992 14 Pole-Positionen, die meisten in einem einzigen Jahr, auf seinem Weg zum Gewinn der Weltmeisterschaft mit Williams.",
        nl: "Nigel Mansell behaalde 14 pole positions in het 1992 seizoen, de meeste in een enkel jaar, op weg naar het winnen van het Wereldkampioenschap met Williams."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive podium finishes?",
        es: "¿Cuál es el récord de más podios consecutivos?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Podiumsplatzierungen?",
        nl: "Wat is het record voor de meeste opeenvolgende podium finishes?"
      },
      options: [
        "17 consecutive podiums",
        "19 consecutive podiums",
        "21 consecutive podiums",
        "23 consecutive podiums"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton achieved 21 consecutive podium finishes from the 2019 Spanish GP to the 2020 Portuguese GP, showcasing remarkable consistency.",
        es: "Lewis Hamilton logró 21 podios consecutivos desde el GP de España 2019 hasta el GP de Portugal 2020, mostrando una consistencia notable.",
        de: "Lewis Hamilton erreichte 21 aufeinanderfolgende Podiumsplatzierungen vom Spanien-GP 2019 bis zum Portugal-GP 2020 und zeigte damit bemerkenswerte Konstanz.",
        nl: "Lewis Hamilton behaalde 21 opeenvolgende podium finishes van de 2019 Spaanse GP tot de 2020 Portugese GP, wat opmerkelijke consistentie toont."
      }
    },
    {
      question: {
        en: "Which team scored the most points in a single season?",
        es: "¿Qué equipo anotó la mayor cantidad de puntos en una sola temporada?",
        de: "Welches Team erzielte die meisten Punkte in einer einzigen Saison?",
        nl: "Welk team scoorde de meeste punten in een enkel seizoen?"
      },
      options: [
        "McLaren 1988 (199 points)",
        "Mercedes 2016 (765 points)",
        "Red Bull 2023 (860 points)",
        "Ferrari 2004 (262 points)"
      ],
      correct: 2,
      explanation: {
        en: "Red Bull Racing scored 860 points in the 2023 season, the most ever by a team, with Max Verstappen's record-breaking 19 wins and Sergio Pérez's contributions.",
        es: "Red Bull Racing anotó 860 puntos en la temporada 2023, la mayor cantidad jamás lograda por un equipo, con las 19 victorias récord de Max Verstappen y las contribuciones de Sergio Pérez.",
        de: "Red Bull Racing erzielte 2023 860 Punkte, die meisten jemals von einem Team, mit Max Verstappens rekordverdächtigen 19 Siegen und Sergio Pérez' Beiträgen.",
        nl: "Red Bull Racing scoorde 860 punten in het 2023 seizoen, de meeste ooit door een team, met Max Verstappens record-brekende 19 overwinningen en Sergio Pérez' bijdragen."
      }
    },
    {
      question: {
        en: "Who has the highest win percentage in F1 history (minimum 100 races)?",
        es: "¿Quién tiene el mayor porcentaje de victorias en la historia de F1 (mínimo 100 carreras)?",
        de: "Wer hat die höchste Siegquote in der F1-Geschichte (mindestens 100 Rennen)?",
        nl: "Wie heeft het hoogste win percentage in F1 geschiedenis (minimum 100 races)?"
      },
      options: [
        "Michael Schumacher (30.2%)",
        "Juan Manuel Fangio (46.2%)",
        "Lewis Hamilton (29.8%)",
        "Alain Prost (25.6%)"
      ],
      correct: 1,
      explanation: {
        en: "Juan Manuel Fangio achieved a 46.2% win rate with 24 wins from 52 starts, the highest of any driver with significant race participation.",
        es: "Juan Manuel Fangio logró una tasa de victorias del 46.2% con 24 victorias de 52 salidas, la más alta de cualquier piloto con participación significativa en carreras.",
        de: "Juan Manuel Fangio erreichte eine Siegquote von 46,2% mit 24 Siegen bei 52 Starts, die höchste aller Fahrer mit bedeutender Rennteilnahme.",
        nl: "Juan Manuel Fangio behaalde een 46,2% win rate met 24 overwinningen uit 52 starts, de hoogste van elke coureur met significante race deelname."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive race finishes?",
        es: "¿Cuál es el récord de más finales de carrera consecutivos?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennabschlüsse?",
        nl: "Wat is het record voor de meeste opeenvolgende race finishes?"
      },
      options: [
        "18 consecutive finishes",
        "24 consecutive finishes",
        "33 consecutive finishes",
        "41 consecutive finishes"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton finished 33 consecutive races from the 2018 Spanish GP to the 2020 Turkish GP, showcasing exceptional reliability and consistency.",
        es: "Lewis Hamilton terminó 33 carreras consecutivas desde el GP de España 2018 hasta el GP de Turquía 2020, mostrando confiabilidad y consistencia excepcionales.",
        de: "Lewis Hamilton beendete 33 aufeinanderfolgende Rennen vom Spanien-GP 2018 bis zum Türkei-GP 2020 und zeigte dabei außergewöhnliche Zuverlässigkeit und Konstanz.",
        nl: "Lewis Hamilton finishte 33 opeenvolgende races van de 2018 Spaanse GP tot de 2020 Turkse GP, wat uitzonderlijke betrouwbaarheid en consistentie toont."
      }
    },
    {
      question: {
        en: "Which driver has the most DNFs (Did Not Finish) without ever finishing on the podium?",
        es: "¿Qué piloto tiene la mayor cantidad de DNFs (No Terminó) sin terminar nunca en el podio?",
        de: "Welcher Fahrer hat die meisten DNFs (Did Not Finish) ohne jemals auf dem Podium zu stehen?",
        nl: "Welke coureur heeft de meeste DNFs (Did Not Finish) zonder ooit op het podium te finishen?"
      },
      options: [
        "Taki Inoue (18 DNFs)",
        "Perry McCarthy (6 DNFs)",
        "Luca Badoer (50 DNFs)",
        "Yuji Ide (4 DNFs)"
      ],
      correct: 2,
      explanation: {
        en: "Luca Badoer had 50 DNFs in his 58 race starts without ever finishing on the podium, racing from 1993-1999 and briefly in 2009.",
        es: "Luca Badoer tuvo 50 DNFs en sus 58 salidas de carrera sin terminar nunca en el podio, corriendo de 1993-1999 y brevemente en 2009.",
        de: "Luca Badoer hatte 50 DNFs bei 58 Rennstarts ohne jemals auf dem Podium zu stehen, fuhr von 1993-1999 und kurz 2009.",
        nl: "Luca Badoer had 50 DNFs in zijn 58 race starts zonder ooit op het podium te finishen, racend van 1993-1999 en kort in 2009."
      }
    },
    {
      question: {
        en: "What is the record for most points scored in a race weekend (including sprint)?",
        es: "¿Cuál es el récord de más puntos anotados en un fin de semana de carrera (incluyendo sprint)?",
        de: "Was ist der Rekord für die meisten Punkte an einem Rennwochenende (einschließlich Sprint)?",
        nl: "Wat is het record voor de meeste punten gescoord in een race weekend (inclusief sprint)?"
      },
      options: [
        "26 points",
        "29 points",
        "34 points",
        "44 points"
      ],
      correct: 3,
      explanation: {
        en: "Max Verstappen scored 44 points at the 2023 Austrian Grand Prix weekend with pole (1pt), sprint pole (bonus), sprint win (8pts), fastest lap in sprint (1pt), race win (25pts), and fastest lap (1pt), plus the extra point for leading most laps.",
        es: "Max Verstappen anotó 44 puntos en el fin de semana del Gran Premio de Austria 2023 con pole (1pt), pole de sprint (bonus), victoria de sprint (8pts), vuelta más rápida en sprint (1pt), victoria de carrera (25pts), y vuelta más rápida (1pt), más el punto extra por liderar la mayoría de las vueltas.",
        de: "Max Verstappen erzielte 44 Punkte beim Österreich-Grand-Prix-Wochenende 2023 mit Pole (1Pt), Sprint-Pole (Bonus), Sprint-Sieg (8Pts), schnellster Runde im Sprint (1Pt), Rennsieg (25Pts) und schnellster Runde (1Pt), plus den Extrapunkt fürs Führen der meisten Runden.",
        nl: "Max Verstappen scoorde 44 punten tijdens het 2023 Oostenrijkse Grand Prix weekend met pole (1pt), sprint pole (bonus), sprint win (8pts), snelste ronde in sprint (1pt), race win (25pts), en snelste ronde (1pt), plus het extra punt voor het leiden van de meeste ronden."
      }
    },
    {
      question: {
        en: "Which driver won the most races for a single team?",
        es: "¿Qué piloto ganó la mayor cantidad de carreras para un solo equipo?",
        de: "Welcher Fahrer gewann die meisten Rennen für ein einzelnes Team?",
        nl: "Welke coureur won de meeste races voor een enkel team?"
      },
      options: [
        "Michael Schumacher for Ferrari (72 wins)",
        "Lewis Hamilton for Mercedes (84 wins)",
        "Ayrton Senna for McLaren (35 wins)",
        "Alain Prost for McLaren (30 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has won 84 races for Mercedes from 2013 onwards, the most wins a driver has achieved with a single team in F1 history.",
        es: "Lewis Hamilton ha ganado 84 carreras para Mercedes desde 2013 en adelante, la mayor cantidad de victorias que un piloto ha logrado con un solo equipo en la historia de F1.",
        de: "Lewis Hamilton hat seit 2013 84 Rennen für Mercedes gewonnen, die meisten Siege, die ein Fahrer mit einem einzelnen Team in der F1-Geschichte erzielt hat.",
        nl: "Lewis Hamilton heeft 84 races gewonnen voor Mercedes vanaf 2013, de meeste overwinningen die een coureur heeft behaald met een enkel team in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most seasons competed in F1?",
        es: "¿Cuál es el récord de más temporadas competidas en F1?",
        de: "Was ist der Rekord für die meisten in der F1 bestrittenen Saisons?",
        nl: "Wat is het record voor de meeste seizoenen geracet in F1?"
      },
      options: [
        "19 seasons",
        "21 seasons",
        "23 seasons",
        "25 seasons"
      ],
      correct: 1,
      explanation: {
        en: "Rubens Barrichello competed in 21 seasons from 1993 to 2011, and Fernando Alonso has matched this with his ongoing career spanning multiple eras.",
        es: "Rubens Barrichello compitió en 21 temporadas de 1993 a 2011, y Fernando Alonso ha igualado esto con su carrera en curso que abarca múltiples eras.",
        de: "Rubens Barrichello nahm von 1993 bis 2011 an 21 Saisons teil, und Fernando Alonso hat dies mit seiner laufenden Karriere über mehrere Ären hinweg erreicht.",
        nl: "Rubens Barrichello racete in 21 seizoenen van 1993 tot 2011, en Fernando Alonso heeft dit geëvenaard met zijn voortdurende carrière die meerdere tijdperken omspant."
      }
    },
    {
      question: {
        en: "Which driver achieved the most pole-to-win conversions in their career?",
        es: "¿Qué piloto logró la mayor cantidad de conversiones de pole a victoria en su carrera?",
        de: "Welcher Fahrer erreichte die meisten Pole-zu-Sieg-Umwandlungen in seiner Karriere?",
        nl: "Welke coureur behaalde de meeste pole-naar-win conversies in hun carrière?"
      },
      options: [
        "Michael Schumacher (40 conversions)",
        "Lewis Hamilton (61 conversions)",
        "Ayrton Senna (29 conversions)",
        "Juan Manuel Fangio (20 conversions)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has converted 61 pole positions into race wins, the most in F1 history, showing his ability to maintain the lead from the front.",
        es: "Lewis Hamilton ha convertido 61 pole positions en victorias de carrera, la mayor cantidad en la historia de F1, mostrando su capacidad para mantener el liderazgo desde el frente.",
        de: "Lewis Hamilton hat 61 Pole-Positionen in Rennsiege umgewandelt, die meisten in der F1-Geschichte, was seine Fähigkeit zeigt, die Führung von vorne zu halten.",
        nl: "Lewis Hamilton heeft 61 pole positions omgezet in race overwinningen, de meeste in F1 geschiedenis, wat zijn vermogen toont om de leiding van voren te behouden."
      }
    },
    {
      question: {
        en: "What is the record for most wins from pole position in a single season?",
        es: "¿Cuál es el récord de más victorias desde pole position en una sola temporada?",
        de: "Was ist der Rekord für die meisten Siege von der Pole-Position in einer einzigen Saison?",
        nl: "Wat is het record voor de meeste overwinningen vanaf pole position in een enkel seizoen?"
      },
      options: [
        "11 wins from pole",
        "13 wins from pole",
        "15 wins from pole",
        "17 wins from pole)"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won 13 races from pole position in the 2023 season, demonstrating total dominance in qualifying and race pace.",
        es: "Max Verstappen ganó 13 carreras desde pole position en la temporada 2023, demostrando dominio total en clasificación y ritmo de carrera.",
        de: "Max Verstappen gewann 2023 13 Rennen von der Pole-Position und demonstrierte damit totale Dominanz im Qualifying und Renntempo.",
        nl: "Max Verstappen won 13 races vanaf pole position in het 2023 seizoen, wat totale dominantie in kwalificatie en race tempo toont."
      }
    },
    {
      question: {
        en: "Which team has scored points in the most consecutive races?",
        es: "¿Qué equipo ha anotado puntos en la mayor cantidad de carreras consecutivas?",
        de: "Welches Team hat in den meisten aufeinanderfolgenden Rennen Punkte erzielt?",
        nl: "Welk team heeft punten gescoord in de meeste opeenvolgende races?"
      },
      options: [
        "McLaren (49 races)",
        "Ferrari (53 races)",
        "Red Bull (61 races)",
        "Mercedes (78 races)"
      ],
      correct: 3,
      explanation: {
        en: "Mercedes scored points in 78 consecutive races from 2014 to 2020, showcasing remarkable consistency during their dominant hybrid era.",
        es: "Mercedes anotó puntos en 78 carreras consecutivas de 2014 a 2020, mostrando una consistencia notable durante su era híbrida dominante.",
        de: "Mercedes erzielte von 2014 bis 2020 in 78 aufeinanderfolgenden Rennen Punkte und zeigte damit bemerkenswerte Konstanz während ihrer dominanten Hybrid-Ära.",
        nl: "Mercedes scoorde punten in 78 opeenvolgende races van 2014 tot 2020, wat opmerkelijke consistentie toont tijdens hun dominante hybride tijdperk."
      }
    },
    {
      question: {
        en: "What is the record for most hat-tricks (pole, win, fastest lap) in F1 history?",
        es: "¿Cuál es el récord de más hat-tricks (pole, victoria, vuelta rápida) en la historia de F1?",
        de: "Was ist der Rekord für die meisten Hattricks (Pole, Sieg, schnellste Runde) in der F1-Geschichte?",
        nl: "Wat is het record voor de meeste hattricks (pole, win, snelste ronde) in F1 geschiedenis?"
      },
      options: [
        "22 hat-tricks",
        "28 hat-tricks",
        "33 hat-tricks",
        "41 hat-tricks"
      ],
      correct: 3,
      explanation: {
        en: "Michael Schumacher achieved 41 hat-tricks during his career, the most in F1 history, showing his all-around dominance in qualifying and race performance.",
        es: "Michael Schumacher logró 41 hat-tricks durante su carrera, la mayor cantidad en la historia de F1, mostrando su dominio integral en clasificación y rendimiento de carrera.",
        de: "Michael Schumacher erzielte während seiner Karriere 41 Hattricks, die meisten in der F1-Geschichte, was seine allumfassende Dominanz im Qualifying und Rennperformance zeigt.",
        nl: "Michael Schumacher behaalde 41 hattricks tijdens zijn carrière, de meeste in F1 geschiedenis, wat zijn algehele dominantie in kwalificatie en race prestatie toont."
      }
    },
    {
      question: {
        en: "Which driver has the most career starts from the back of the grid?",
        es: "¿Qué piloto tiene la mayor cantidad de salidas de carrera desde la parte trasera de la parrilla?",
        de: "Welcher Fahrer hat die meisten Karrierestarts vom Ende des Feldes?",
        nl: "Welke coureur heeft de meeste carrière starts vanaf de achterkant van de grid?"
      },
      options: [
        "Fernando Alonso (27 starts)",
        "Lewis Hamilton (18 starts)",
        "Max Verstappen (14 starts)",
        "Sebastian Vettel (22 starts)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso has started from the back of the grid 27 times in his long career, often due to engine penalties, showcasing his recovery drives through the field.",
        es: "Fernando Alonso ha comenzado desde la parte trasera de la parrilla 27 veces en su larga carrera, a menudo debido a penalizaciones de motor, mostrando sus recuperaciones a través del campo.",
        de: "Fernando Alonso ist in seiner langen Karriere 27 Mal vom Ende des Feldes gestartet, oft wegen Motorstrafen, was seine Aufholjagden durch das Feld zeigt.",
        nl: "Fernando Alonso is 27 keer gestart vanaf de achterkant van de grid in zijn lange carrière, vaak door motor straffen, wat zijn herstel drives door het veld toont."
      }
    },
    {
      question: {
        en: "What is the record for most overtakes in a single race?",
        es: "¿Cuál es el récord de más adelantamientos en una sola carrera?",
        de: "Was ist der Rekord für die meisten Überholmanöver in einem einzigen Rennen?",
        nl: "Wat is het record voor de meeste inhaalacties in een enkele race?"
      },
      options: [
        "16 overtakes",
        "20 overtakes",
        "24 overtakes",
        "28 overtakes"
      ],
      correct: 2,
      explanation: {
        en: "Sebastian Vettel completed 24 overtakes at the 2012 Abu Dhabi GP, starting from the pit lane and finishing on the podium in third place.",
        es: "Sebastian Vettel completó 24 adelantamientos en el GP de Abu Dhabi 2012, comenzando desde el pit lane y terminando en el podio en tercer lugar.",
        de: "Sebastian Vettel vollendete 24 Überholmanöver beim Abu Dhabi GP 2012, startete aus der Boxengasse und beendete auf dem Podium auf dem dritten Platz.",
        nl: "Sebastian Vettel voltooide 24 inhaalacties bij de 2012 Abu Dhabi GP, startend vanuit de pit lane en finishend op het podium op de derde plaats."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();