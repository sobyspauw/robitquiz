const level2 = (function() {
  const questions = [
    {
      question: {
        en: "Which driver scored points in the most consecutive races?",
        es: "¿Qué piloto anotó puntos en la mayor cantidad de carreras consecutivas?",
        de: "Welcher Fahrer erzielte in den meisten aufeinanderfolgenden Rennen Punkte?",
        nl: "Welke coureur scoorde punten in de meeste opeenvolgende races?"
      },
      options: [
        "Lewis Hamilton (265 races)",
        "Kimi Räikkönen (27 races)",
        "Sebastian Vettel (47 races)",
        "Fernando Alonso (56 races)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton scored points in 265 consecutive races from 2007 Belgian GP to ongoing, an extraordinary streak showing remarkable consistency and reliability.",
        es: "Lewis Hamilton anotó puntos en 265 carreras consecutivas desde el GP de Bélgica 2007 hasta el presente, una racha extraordinaria que muestra notable consistencia y confiabilidad.",
        de: "Lewis Hamilton erzielte von 2007 Belgien GP bis heute in 265 aufeinanderfolgenden Rennen Punkte, eine außergewöhnliche Serie mit bemerkenswerter Konstanz und Zuverlässigkeit.",
        nl: "Lewis Hamilton scoorde punten in 265 opeenvolgende races vanaf de 2007 Belgische GP tot heden, een buitengewone reeks die opmerkelijke consistentie en betrouwbaarheid toont."
      }
    },
    {
      question: {
        en: "What is the record for most podiums in a single season?",
        es: "¿Cuál es el récord de más podios en una sola temporada?",
        de: "Was ist der Rekord für die meisten Podiumsplatzierungen in einer einzigen Saison?",
        nl: "Wat is het record voor de meeste podiums in een enkel seizoen?"
      },
      options: [
        "15 podiums",
        "17 podiums",
        "19 podiums",
        "21 podiums"
      ],
      correct: 3,
      explanation: {
        en: "Max Verstappen achieved 21 podiums in the 2023 season (winning 19 and finishing 2nd twice), the most in a single season.",
        es: "Max Verstappen logró 21 podios en la temporada 2023 (ganando 19 y terminando 2° dos veces), la mayor cantidad en una sola temporada.",
        de: "Max Verstappen erreichte 2023 21 Podiumsplatzierungen (19 Siege und 2 zweite Plätze), die meisten in einer einzigen Saison.",
        nl: "Max Verstappen behaalde 21 podiums in het 2023 seizoen (19 overwinningen en 2 keer tweede), de meeste in een enkel seizoen."
      }
    },
    {
      question: {
        en: "Who holds the record for most front row starts (pole or P2) in F1 history?",
        es: "¿Quién tiene el récord de más salidas en primera fila (pole o P2) en la historia de F1?",
        de: "Wer hält den Rekord für die meisten Starts aus der ersten Reihe (Pole oder P2) in der F1-Geschichte?",
        nl: "Wie heeft het record voor de meeste eerste rij starts (pole of P2) in F1 geschiedenis?"
      },
      options: [
        "Ayrton Senna (87)",
        "Lewis Hamilton (142)",
        "Michael Schumacher (116)",
        "Sebastian Vettel (92)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has started from the front row 142 times, combining his 103 poles with 39 second-place grid positions.",
        es: "Lewis Hamilton ha comenzado desde la primera fila 142 veces, combinando sus 103 poles con 39 posiciones de segunda posición en la parrilla.",
        de: "Lewis Hamilton ist 142 Mal aus der ersten Reihe gestartet, kombiniert seine 103 Pole-Positionen mit 39 zweiten Startplätzen.",
        nl: "Lewis Hamilton is 142 keer gestart vanaf de eerste rij, zijn 103 poles combinerend met 39 tweede plaats grid posities."
      }
    },
    {
      question: {
        en: "Which driver won from the most different starting positions?",
        es: "¿Qué piloto ganó desde la mayor cantidad de posiciones de salida diferentes?",
        de: "Welcher Fahrer gewann von den meisten verschiedenen Startpositionen?",
        nl: "Welke coureur won vanaf de meeste verschillende startposities?"
      },
      options: [
        "Lewis Hamilton (10 positions)",
        "Michael Schumacher (9 positions)",
        "Kimi Räikkönen (11 positions)",
        "Sebastian Vettel (8 positions)"
      ],
      correct: 2,
      explanation: {
        en: "Kimi Räikkönen won from 11 different grid positions, including his famous 2005 Japanese GP win from 17th on the grid.",
        es: "Kimi Räikkönen ganó desde 11 posiciones de parrilla diferentes, incluyendo su famosa victoria en el GP de Japón 2005 desde el 17° en la parrilla.",
        de: "Kimi Räikkönen gewann von 11 verschiedenen Startplätzen, einschließlich seines berühmten Siegs beim Japan GP 2005 von Platz 17.",
        nl: "Kimi Räikkönen won vanaf 11 verschillende grid posities, inclusief zijn beroemde 2005 Japanse GP overwinning vanaf 17e op de grid."
      }
    },
    {
      question: {
        en: "What is the record for most wins at the Monaco Grand Prix?",
        es: "¿Cuál es el récord de más victorias en el Gran Premio de Mónaco?",
        de: "Was ist der Rekord für die meisten Siege beim Monaco Grand Prix?",
        nl: "Wat is het record voor de meeste overwinningen bij de Monaco Grand Prix?"
      },
      options: [
        "5 wins",
        "6 wins",
        "7 wins",
        "8 wins"
      ],
      correct: 1,
      explanation: {
        en: "Ayrton Senna won the Monaco Grand Prix 6 times (1987, 1989, 1990, 1991, 1992, 1993), earning him the title 'King of Monaco'.",
        es: "Ayrton Senna ganó el Gran Premio de Mónaco 6 veces (1987, 1989, 1990, 1991, 1992, 1993), ganándose el título de 'Rey de Mónaco'.",
        de: "Ayrton Senna gewann den Monaco Grand Prix 6 Mal (1987, 1989, 1990, 1991, 1992, 1993) und erwarb sich den Titel 'König von Monaco'.",
        nl: "Ayrton Senna won de Monaco Grand Prix 6 keer (1987, 1989, 1990, 1991, 1992, 1993), waarmee hij de titel 'Koning van Monaco' verdiende."
      }
    },
    {
      question: {
        en: "Which team scored the most 1-2-3 finishes in F1 history?",
        es: "¿Qué equipo logró la mayor cantidad de finales 1-2-3 en la historia de F1?",
        de: "Welches Team erreichte die meisten 1-2-3-Platzierungen in der F1-Geschichte?",
        nl: "Welk team behaalde de meeste 1-2-3 finishes in F1 geschiedenis?"
      },
      options: [
        "Ferrari (83 times)",
        "McLaren (45 times)",
        "Mercedes (22 times)",
        "Williams (31 times)"
      ],
      correct: 0,
      explanation: {
        en: "Ferrari achieved 1-2-3 finishes 83 times throughout their long F1 history, the most of any team thanks to their longevity and periods of dominance.",
        es: "Ferrari logró finales 1-2-3 83 veces a lo largo de su larga historia en F1, la mayor cantidad de cualquier equipo gracias a su longevidad y períodos de dominio.",
        de: "Ferrari erreichte in ihrer langen F1-Geschichte 83 Mal 1-2-3-Platzierungen, die meisten aller Teams dank ihrer Langlebigkeit und Dominanzphasen.",
        nl: "Ferrari behaalde 83 keer 1-2-3 finishes gedurende hun lange F1 geschiedenis, de meeste van alle teams dankzij hun duurzaamheid en periodes van dominantie."
      }
    },
    {
      question: {
        en: "Who has the best qualifying record (pole positions as percentage of races)?",
        es: "¿Quién tiene el mejor récord de clasificación (pole positions como porcentaje de carreras)?",
        de: "Wer hat das beste Qualifying-Rekord (Pole-Positionen als Prozentsatz der Rennen)?",
        nl: "Wie heeft het beste kwalificatie record (pole positions als percentage van races)?"
      },
      options: [
        "Ayrton Senna (40.2%)",
        "Juan Manuel Fangio (55.8%)",
        "Jim Clark (45.3%)",
        "Lewis Hamilton (29.7%)"
      ],
      correct: 1,
      explanation: {
        en: "Juan Manuel Fangio achieved pole position in 29 of his 52 race starts (55.8%), the highest percentage in F1 history.",
        es: "Juan Manuel Fangio logró pole position en 29 de sus 52 salidas de carrera (55.8%), el porcentaje más alto en la historia de F1.",
        de: "Juan Manuel Fangio erreichte in 29 von 52 Rennstarts die Pole-Position (55,8%), der höchste Prozentsatz in der F1-Geschichte.",
        nl: "Juan Manuel Fangio behaalde pole position in 29 van zijn 52 race starts (55,8%), het hoogste percentage in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most Driver of the Day awards?",
        es: "¿Cuál es el récord de más premios Piloto del Día?",
        de: "Was ist der Rekord für die meisten Fahrer-des-Tages-Auszeichnungen?",
        nl: "Wat is het record voor de meeste Coureur van de Dag awards?"
      },
      options: [
        "Max Verstappen (43 awards)",
        "Lewis Hamilton (31 awards)",
        "Charles Leclerc (18 awards)",
        "Sebastian Vettel (25 awards)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen has won 43 Driver of the Day awards since the fan vote was introduced in 2016, the most of any driver.",
        es: "Max Verstappen ha ganado 43 premios de Piloto del Día desde que se introdujo la votación de fans en 2016, la mayor cantidad de cualquier piloto.",
        de: "Max Verstappen hat seit Einführung der Fan-Abstimmung 2016 43 Fahrer-des-Tages-Auszeichnungen gewonnen, die meisten aller Fahrer.",
        nl: "Max Verstappen heeft 43 Coureur van de Dag awards gewonnen sinds de fan stemming werd geïntroduceerd in 2016, de meeste van alle coureurs."
      }
    },
    {
      question: {
        en: "Which driver has the most second-place finishes without winning a title?",
        es: "¿Qué piloto tiene la mayor cantidad de finales en segundo lugar sin ganar un título?",
        de: "Welcher Fahrer hat die meisten zweiten Plätze ohne einen Titel zu gewinnen?",
        nl: "Welke coureur heeft de meeste tweede plaats finishes zonder een titel te winnen?"
      },
      options: [
        "Stirling Moss (16 second places)",
        "Rubens Barrichello (68 second places)",
        "David Coulthard (42 second places)",
        "Valtteri Bottas (58 second places)"
      ],
      correct: 1,
      explanation: {
        en: "Rubens Barrichello finished second 68 times but never won a World Championship, often playing support to Michael Schumacher at Ferrari.",
        es: "Rubens Barrichello terminó segundo 68 veces pero nunca ganó un Campeonato Mundial, a menudo jugando un papel de apoyo a Michael Schumacher en Ferrari.",
        de: "Rubens Barrichello wurde 68 Mal Zweiter, gewann aber nie eine Weltmeisterschaft, oft in der Unterstützerrolle zu Michael Schumacher bei Ferrari.",
        nl: "Rubens Barrichello finishte 68 keer als tweede maar won nooit een Wereldkampioenschap, vaak in een ondersteunende rol voor Michael Schumacher bij Ferrari."
      }
    },
    {
      question: {
        en: "What is the record for lowest championship-winning points total?",
        es: "¿Cuál es el récord del total de puntos más bajo para ganar el campeonato?",
        de: "Was ist der Rekord für die niedrigste Punktzahl zum Gewinn der Meisterschaft?",
        nl: "Wat is het record voor het laagste kampioenschaps-winnende punten totaal?"
      },
      options: [
        "30 points",
        "40 points",
        "50 points",
        "60 points"
      ],
      correct: 0,
      explanation: {
        en: "Mike Hawthorn won the 1958 championship with just 42 points (under the old scoring system where only best results counted), the lowest winning total.",
        es: "Mike Hawthorn ganó el campeonato de 1958 con solo 42 puntos (bajo el antiguo sistema de puntuación donde solo contaban los mejores resultados), el total ganador más bajo.",
        de: "Mike Hawthorn gewann die Meisterschaft 1958 mit nur 42 Punkten (unter dem alten Punktesystem, wo nur die besten Ergebnisse zählten), die niedrigste Siegpunktzahl.",
        nl: "Mike Hawthorn won het 1958 kampioenschap met slechts 42 punten (onder het oude score systeem waar alleen beste resultaten telden), het laagste winnende totaal."
      }
    },
    {
      question: {
        en: "Which driver has led the most laps in a single season?",
        es: "¿Qué piloto ha liderado la mayor cantidad de vueltas en una sola temporada?",
        de: "Welcher Fahrer hat in einer einzigen Saison die meisten Runden angeführt?",
        nl: "Welke coureur heeft de meeste ronden geleid in een enkel seizoen?"
      },
      options: [
        "Sebastian Vettel (739 laps in 2011)",
        "Lewis Hamilton (652 laps in 2015)",
        "Max Verstappen (1003 laps in 2023)",
        "Michael Schumacher (705 laps in 2004)"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen led 1003 laps in the 2023 season, the most ever in a single year, dominating almost every race.",
        es: "Max Verstappen lideró 1003 vueltas en la temporada 2023, la mayor cantidad en un solo año, dominando casi todas las carreras.",
        de: "Max Verstappen führte 2023 1003 Runden an, die meisten jemals in einem Jahr, dominierte fast jedes Rennen.",
        nl: "Max Verstappen leidde 1003 ronden in het 2023 seizoen, de meeste ooit in een enkel jaar, bijna elke race dominerend."
      }
    },
    {
      question: {
        en: "Who was the first driver to score 1000 career points?",
        es: "¿Quién fue el primer piloto en anotar 1000 puntos de carrera?",
        de: "Wer war der erste Fahrer, der 1000 Karrierepunkte erzielte?",
        nl: "Wie was de eerste coureur om 1000 carrière punten te scoren?"
      },
      options: [
        "Michael Schumacher",
        "Alain Prost",
        "Ayrton Senna",
        "Fernando Alonso"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher became the first driver to score 1000 career points at the 2001 Belgian Grand Prix.",
        es: "Michael Schumacher se convirtió en el primer piloto en anotar 1000 puntos de carrera en el Gran Premio de Bélgica 2001.",
        de: "Michael Schumacher wurde beim Belgien Grand Prix 2001 der erste Fahrer, der 1000 Karrierepunkte erzielte.",
        nl: "Michael Schumacher werd de eerste coureur om 1000 carrière punten te scoren bij de 2001 Belgische Grand Prix."
      }
    },
    {
      question: {
        en: "What is the record for most wins from the furthest back on the grid?",
        es: "¿Cuál es el récord de más victorias desde más atrás en la parrilla?",
        de: "Was ist der Rekord für die meisten Siege von weiter hinten im Feld?",
        nl: "Wat is het record voor de meeste overwinningen vanaf het verst achter op de grid?"
      },
      options: [
        "20th position",
        "22nd position",
        "24th position",
        "Last position"
      ],
      correct: 0,
      explanation: {
        en: "John Watson won the 1983 US Grand Prix West at Long Beach starting from 22nd position (last on grid), the furthest back winning start.",
        es: "John Watson ganó el Gran Premio de EE.UU. Oeste 1983 en Long Beach comenzando desde la posición 22 (último en parrilla), la victoria desde más atrás.",
        de: "John Watson gewann den US Grand Prix West 1983 in Long Beach von Startplatz 22 (Letzter im Feld), der weiteste Rückstand bei einem Sieg.",
        nl: "John Watson won de 1983 US Grand Prix West in Long Beach startend vanaf 22e positie (laatste op grid), de verst achter winnende start."
      }
    },
    {
      question: {
        en: "Which driver has the most career points per race average?",
        es: "¿Qué piloto tiene el promedio más alto de puntos por carrera en su carrera?",
        de: "Welcher Fahrer hat den höchsten durchschnittlichen Punkte pro Rennen?",
        nl: "Welke coureur heeft het hoogste gemiddelde carrière punten per race?"
      },
      options: [
        "Max Verstappen (17.2 points/race)",
        "Lewis Hamilton (15.3 points/race)",
        "Michael Schumacher (13.1 points/race)",
        "Fernando Alonso (11.7 points/race)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen has the highest points-per-race average at approximately 17.2, reflecting his dominance with Red Bull Racing.",
        es: "Max Verstappen tiene el promedio más alto de puntos por carrera con aproximadamente 17.2, reflejando su dominio con Red Bull Racing.",
        de: "Max Verstappen hat mit etwa 17,2 den höchsten Punkte-pro-Rennen-Durchschnitt, was seine Dominanz mit Red Bull Racing widerspiegelt.",
        nl: "Max Verstappen heeft het hoogste punten-per-race gemiddelde met ongeveer 17,2, wat zijn dominantie met Red Bull Racing weerspiegelt."
      }
    },
    {
      question: {
        en: "What is the record for most teammate battles won in a season?",
        es: "¿Cuál es el récord de más batallas ganadas contra compañeros de equipo en una temporada?",
        de: "Was ist der Rekord für die meisten gewonnenen Teamkollegen-Duelle in einer Saison?",
        nl: "Wat is het record voor de meeste gewonnen teamgenoot gevechten in een seizoen?"
      },
      options: [
        "18 times",
        "20 times",
        "22 times",
        "24 times"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen beat his teammate in qualifying and races 22 times out of 22 races in 2023, a perfect teammate battle record.",
        es: "Max Verstappen venció a su compañero de equipo en clasificación y carreras 22 veces de 22 carreras en 2023, un récord perfecto contra compañeros de equipo.",
        de: "Max Verstappen schlug 2023 seinen Teamkollegen in Qualifying und Rennen 22 von 22 Mal, ein perfektes Teamkollegen-Duel-Rekord.",
        nl: "Max Verstappen versloeg zijn teamgenoot in kwalificatie en races 22 keer uit 22 races in 2023, een perfect teamgenoot gevecht record."
      }
    },
    {
      question: {
        en: "Which team has won the most races at their home Grand Prix?",
        es: "¿Qué equipo ha ganado la mayor cantidad de carreras en su Gran Premio local?",
        de: "Welches Team hat die meisten Rennen beim Heim-Grand-Prix gewonnen?",
        nl: "Welk team heeft de meeste races gewonnen bij hun thuisrace Grand Prix?"
      },
      options: [
        "Ferrari at Monza (20 wins)",
        "Mercedes at Hockenheim (12 wins)",
        "McLaren at Silverstone (17 wins)",
        "Williams at Silverstone (9 wins)"
      ],
      correct: 0,
      explanation: {
        en: "Ferrari has won the Italian Grand Prix at Monza 20 times, the most wins by any team at their designated home race.",
        es: "Ferrari ha ganado el Gran Premio de Italia en Monza 20 veces, la mayor cantidad de victorias de cualquier equipo en su carrera local designada.",
        de: "Ferrari hat den Italienischen Grand Prix in Monza 20 Mal gewonnen, die meisten Siege eines Teams bei seinem Heimrennen.",
        nl: "Ferrari heeft de Italiaanse Grand Prix op Monza 20 keer gewonnen, de meeste overwinningen van elk team bij hun aangewezen thuisrace."
      }
    },
    {
      question: {
        en: "Who has the record for most points scored from outside the top 10 on the grid?",
        es: "¿Quién tiene el récord de más puntos anotados desde fuera del top 10 en la parrilla?",
        de: "Wer hat den Rekord für die meisten erzielten Punkte von außerhalb der Top 10 im Feld?",
        nl: "Wie heeft het record voor de meeste punten gescoord vanaf buiten de top 10 op de grid?"
      },
      options: [
        "Fernando Alonso",
        "Lewis Hamilton",
        "Max Verstappen",
        "Sergio Pérez"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso has scored the most points starting outside the top 10, often due to grid penalties, showcasing his exceptional racecraft and recovery drives.",
        es: "Fernando Alonso ha anotado la mayor cantidad de puntos comenzando fuera del top 10, a menudo debido a penalizaciones de parrilla, mostrando su excepcional habilidad de carrera y recuperación.",
        de: "Fernando Alonso hat die meisten Punkte von außerhalb der Top 10 erzielt, oft wegen Gridstrafen, was sein außergewöhnliches Renngeschick und Aufholfahrten zeigt.",
        nl: "Fernando Alonso heeft de meeste punten gescoord startend buiten de top 10, vaak door grid straffen, wat zijn uitzonderlijke race vaardigheden en herstel drives toont."
      }
    },
    {
      question: {
        en: "What is the record for most wins without finishing on pole?",
        es: "¿Cuál es el récord de más victorias sin terminar en pole?",
        de: "Was ist der Rekord für die meisten Siege ohne Pole-Position?",
        nl: "Wat is het record voor de meeste overwinningen zonder pole position?"
      },
      options: [
        "5 wins",
        "7 wins",
        "9 wins",
        "11 wins"
      ],
      correct: 2,
      explanation: {
        en: "Sergio Pérez won 9 races without ever securing pole position in his career, showing his strength in race pace over qualifying.",
        es: "Sergio Pérez ganó 9 carreras sin asegurar nunca pole position en su carrera, mostrando su fortaleza en ritmo de carrera sobre clasificación.",
        de: "Sergio Pérez gewann 9 Rennen ohne jemals eine Pole-Position gesichert zu haben, was seine Stärke im Renntempo über Qualifying zeigt.",
        nl: "Sergio Pérez won 9 races zonder ooit pole position te hebben behaald in zijn carrière, wat zijn kracht in race tempo over kwalificatie toont."
      }
    },
    {
      question: {
        en: "Which driver has the best record of leading from lights to flag?",
        es: "¿Qué piloto tiene el mejor récord de liderar de luces a bandera?",
        de: "Welcher Fahrer hat das beste Rekord von Start bis Ziel zu führen?",
        nl: "Welke coureur heeft het beste record van leiden van start tot finish?"
      },
      options: [
        "Max Verstappen (22 times)",
        "Jim Clark (18 times)",
        "Michael Schumacher (40 times)",
        "Lewis Hamilton (37 times)"
      ],
      correct: 2,
      explanation: {
        en: "Michael Schumacher led from lights to flag 40 times in his career, demonstrating his ability to control races from the front.",
        es: "Michael Schumacher lideró de luces a bandera 40 veces en su carrera, demostrando su capacidad para controlar carreras desde el frente.",
        de: "Michael Schumacher führte in seiner Karriere 40 Mal von Start bis Ziel und demonstrierte seine Fähigkeit, Rennen von vorne zu kontrollieren.",
        nl: "Michael Schumacher leidde 40 keer van start tot finish in zijn carrière, wat zijn vermogen toont om races van voren te controleren."
      }
    },
    {
      question: {
        en: "What is the record for most races without scoring a point?",
        es: "¿Cuál es el récord de más carreras sin anotar un punto?",
        de: "Was ist der Rekord für die meisten Rennen ohne einen Punkt zu erzielen?",
        nl: "Wat is het record voor de meeste races zonder een punt te scoren?"
      },
      options: [
        "84 races",
        "109 races",
        "131 races",
        "158 races"
      ],
      correct: 2,
      explanation: {
        en: "Luca Badoer competed in 131 consecutive races without scoring a point from 1993-1999, the longest pointless streak in F1 history.",
        es: "Luca Badoer compitió en 131 carreras consecutivas sin anotar un punto de 1993-1999, la racha sin puntos más larga en la historia de F1.",
        de: "Luca Badoer nahm von 1993-1999 an 131 aufeinanderfolgenden Rennen teil ohne einen Punkt zu erzielen, die längste punktelose Serie der F1-Geschichte.",
        nl: "Luca Badoer racete in 131 opeenvolgende races zonder een punt te scoren van 1993-1999, de langste puntenloze reeks in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which driver achieved the most wins in their debut season?",
        es: "¿Qué piloto logró la mayor cantidad de victorias en su temporada de debut?",
        de: "Welcher Fahrer erzielte die meisten Siege in seiner Debütsaison?",
        nl: "Welke coureur behaalde de meeste overwinningen in hun debuut seizoen?"
      },
      options: [
        "Lewis Hamilton (4 wins in 2007)",
        "Jacques Villeneuve (4 wins in 1996)",
        "Giuseppe Farina (3 wins in 1950)",
        "Juan Manuel Fangio (1 win in 1950)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton won 4 races in his debut 2007 season and finished just 1 point behind the champion, the best debut performance.",
        es: "Lewis Hamilton ganó 4 carreras en su temporada de debut 2007 y terminó solo 1 punto detrás del campeón, el mejor rendimiento de debut.",
        de: "Lewis Hamilton gewann in seiner Debütsaison 2007 4 Rennen und wurde nur 1 Punkt hinter dem Champion Zweiter, die beste Debütleistung.",
        nl: "Lewis Hamilton won 4 races in zijn debuut 2007 seizoen en finishte slechts 1 punt achter de kampioen, de beste debuut prestatie."
      }
    },
    {
      question: {
        en: "What is the record for highest percentage of laps led in a season?",
        es: "¿Cuál es el récord del mayor porcentaje de vueltas lideradas en una temporada?",
        de: "Was ist der Rekord für den höchsten Prozentsatz geführter Runden in einer Saison?",
        nl: "Wat is het record voor het hoogste percentage gelede ronden in een seizoen?"
      },
      options: [
        "71.4%",
        "78.2%",
        "84.3%",
        "91.7%"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen led 84.3% of all laps in the 2023 season, the highest percentage ever, showing complete dominance.",
        es: "Max Verstappen lideró el 84.3% de todas las vueltas en la temporada 2023, el porcentaje más alto jamás, mostrando dominio completo.",
        de: "Max Verstappen führte 2023 84,3% aller Runden an, der höchste Prozentsatz jemals, zeigt komplette Dominanz.",
        nl: "Max Verstappen leidde 84,3% van alle ronden in het 2023 seizoen, het hoogste percentage ooit, wat complete dominantie toont."
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
        "Ferrari (87 races)",
        "McLaren (63 races)",
        "Mercedes (78 races)",
        "Red Bull (94 races)"
      ],
      correct: 3,
      explanation: {
        en: "Red Bull Racing scored points in 94 consecutive races from 2020 to 2024, demonstrating exceptional consistency and reliability.",
        es: "Red Bull Racing anotó puntos en 94 carreras consecutivas de 2020 a 2024, demostrando consistencia y confiabilidad excepcionales.",
        de: "Red Bull Racing erzielte von 2020 bis 2024 in 94 aufeinanderfolgenden Rennen Punkte und zeigt außergewöhnliche Konstanz und Zuverlässigkeit.",
        nl: "Red Bull Racing scoorde punten in 94 opeenvolgende races van 2020 tot 2024, wat uitzonderlijke consistentie en betrouwbaarheid toont."
      }
    },
    {
      question: {
        en: "Who has won the most races from penalty-affected grid positions?",
        es: "¿Quién ha ganado la mayor cantidad de carreras desde posiciones de parrilla afectadas por penalizaciones?",
        de: "Wer hat die meisten Rennen von strafenbetroffenen Startplätzen gewonnen?",
        nl: "Wie heeft de meeste races gewonnen vanaf door straffen beïnvloede grid posities?"
      },
      options: [
        "Max Verstappen (6 wins)",
        "Lewis Hamilton (8 wins)",
        "Sebastian Vettel (4 wins)",
        "Fernando Alonso (3 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has won 8 races after receiving grid penalties, showing his ability to recover through the field.",
        es: "Lewis Hamilton ha ganado 8 carreras después de recibir penalizaciones de parrilla, mostrando su capacidad para recuperarse a través del campo.",
        de: "Lewis Hamilton hat nach Erhalt von Gridstrafen 8 Rennen gewonnen und zeigt seine Fähigkeit, sich durch das Feld zu kämpfen.",
        nl: "Lewis Hamilton heeft 8 races gewonnen na het ontvangen van grid straffen, wat zijn vermogen toont om door het veld te herstellen."
      }
    },
    {
      question: {
        en: "What is the record for most seasons with at least one pole position?",
        es: "¿Cuál es el récord de más temporadas con al menos una pole position?",
        de: "Was ist der Rekord für die meisten Saisons mit mindestens einer Pole-Position?",
        nl: "Wat is het record voor de meeste seizoenen met tenminste één pole position?"
      },
      options: [
        "13 seasons",
        "15 seasons",
        "17 seasons",
        "19 seasons"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton secured at least one pole position in 17 different seasons from 2007-2023, the most in F1 history.",
        es: "Lewis Hamilton aseguró al menos una pole position en 17 temporadas diferentes de 2007-2023, la mayor cantidad en la historia de F1.",
        de: "Lewis Hamilton sicherte sich von 2007-2023 in 17 verschiedenen Saisons mindestens eine Pole-Position, die meisten in der F1-Geschichte.",
        nl: "Lewis Hamilton behaalde tenminste één pole position in 17 verschillende seizoenen van 2007-2023, de meeste in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which driver has the most wins at Spa-Francorchamps?",
        es: "¿Qué piloto tiene la mayor cantidad de victorias en Spa-Francorchamps?",
        de: "Welcher Fahrer hat die meisten Siege in Spa-Francorchamps?",
        nl: "Welke coureur heeft de meeste overwinningen op Spa-Francorchamps?"
      },
      options: [
        "Michael Schumacher (6 wins)",
        "Ayrton Senna (5 wins)",
        "Lewis Hamilton (4 wins)",
        "Kimi Räikkönen (4 wins)"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher won the Belgian Grand Prix at Spa 6 times (1992, 1995, 1996, 1997, 2001, 2002), the most at this historic circuit.",
        es: "Michael Schumacher ganó el Gran Premio de Bélgica en Spa 6 veces (1992, 1995, 1996, 1997, 2001, 2002), la mayor cantidad en este circuito histórico.",
        de: "Michael Schumacher gewann den Belgien Grand Prix in Spa 6 Mal (1992, 1995, 1996, 1997, 2001, 2002), die meisten auf dieser historischen Strecke.",
        nl: "Michael Schumacher won de Belgische Grand Prix op Spa 6 keer (1992, 1995, 1996, 1997, 2001, 2002), de meeste op dit historische circuit."
      }
    },
    {
      question: {
        en: "What is the record for most points scored without a fastest lap?",
        es: "¿Cuál es el récord de más puntos anotados sin una vuelta más rápida?",
        de: "Was ist der Rekord für die meisten erzielten Punkte ohne schnellste Runde?",
        nl: "Wat is het record voor de meeste gescoorde punten zonder een snelste ronde?"
      },
      options: [
        "219 points",
        "287 points",
        "345 points",
        "412 points)"
      ],
      correct: 1,
      explanation: {
        en: "Sergio Pérez scored 287 points in the 2023 season without recording a single fastest lap, focusing on consistency over single-lap pace.",
        es: "Sergio Pérez anotó 287 puntos en la temporada 2023 sin registrar una sola vuelta más rápida, enfocándose en consistencia sobre ritmo de una vuelta.",
        de: "Sergio Pérez erzielte 2023 287 Punkte ohne eine einzige schnellste Runde und konzentrierte sich auf Konstanz statt Einzelrunden-Tempo.",
        nl: "Sergio Pérez scoorde 287 punten in het 2023 seizoen zonder een enkele snelste ronde te noteren, focussend op consistentie over enkele ronde tempo."
      }
    },
    {
      question: {
        en: "Which driver has the most wins at their debut race for a team?",
        es: "¿Qué piloto tiene la mayor cantidad de victorias en su carrera de debut para un equipo?",
        de: "Welcher Fahrer hat die meisten Siege beim Debütrennen für ein Team?",
        nl: "Welke coureur heeft de meeste overwinningen bij hun debuutrace voor een team?"
      },
      options: [
        "Lewis Hamilton (1 win)",
        "Max Verstappen (1 win)",
        "Jenson Button (0 wins)",
        "Nico Rosberg (0 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won his first race for Red Bull at the 2016 Spanish GP, becoming the youngest winner at 18 years old in his team debut.",
        es: "Max Verstappen ganó su primera carrera para Red Bull en el GP de España 2016, convirtiéndose en el ganador más joven a los 18 años en su debut con el equipo.",
        de: "Max Verstappen gewann sein erstes Rennen für Red Bull beim Spanien GP 2016 und wurde mit 18 Jahren der jüngste Sieger bei seinem Teamdebüt.",
        nl: "Max Verstappen won zijn eerste race voor Red Bull bij de 2016 Spaanse GP, werd de jongste winnaar op 18 jaar bij zijn team debuut."
      }
    },
    {
      question: {
        en: "What is the record for most top-3 finishes in a career?",
        es: "¿Cuál es el récord de más finales en el top-3 en una carrera?",
        de: "Was ist der Rekord für die meisten Top-3-Platzierungen in einer Karriere?",
        nl: "Wat is het record voor de meeste top-3 finishes in een carrière?"
      },
      options: [
        "155 podiums",
        "183 podiums",
        "201 podiums",
        "228 podiums"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton has finished in the top 3 a record 201 times, showcasing his consistent front-running performance throughout his career.",
        es: "Lewis Hamilton ha terminado en el top 3 un récord de 201 veces, mostrando su consistente rendimiento en la parte delantera a lo largo de su carrera.",
        de: "Lewis Hamilton hat rekordverdächtige 201 Mal in den Top 3 beendet und zeigt seine konstante Spitzenleistung während seiner Karriere.",
        nl: "Lewis Hamilton heeft een record 201 keer in de top 3 gefinisht, wat zijn consistente vooraan-lopende prestatie gedurende zijn carrière toont."
      }
    },
    {
      question: {
        en: "Which driver achieved pole position at the most different circuits?",
        es: "¿Qué piloto logró pole position en la mayor cantidad de circuitos diferentes?",
        de: "Welcher Fahrer erreichte die Pole-Position auf den meisten verschiedenen Strecken?",
        nl: "Welke coureur behaalde pole position op de meeste verschillende circuits?"
      },
      options: [
        "Lewis Hamilton (30 circuits)",
        "Michael Schumacher (23 circuits)",
        "Sebastian Vettel (25 circuits)",
        "Ayrton Senna (19 circuits)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has secured pole position at 30 different circuits, the most in F1 history, showing his qualifying prowess across all track types.",
        es: "Lewis Hamilton ha asegurado pole position en 30 circuitos diferentes, la mayor cantidad en la historia de F1, mostrando su destreza de clasificación en todos los tipos de pistas.",
        de: "Lewis Hamilton hat auf 30 verschiedenen Strecken die Pole-Position gesichert, die meisten in der F1-Geschichte, zeigt seine Qualifying-Stärke auf allen Streckentypen.",
        nl: "Lewis Hamilton heeft pole position behaald op 30 verschillende circuits, de meeste in F1 geschiedenis, wat zijn kwalificatie kracht toont over alle baan types."
      }
    },
    {
      question: {
        en: "What is the record for most wins with different teams?",
        es: "¿Cuál es el récord de más victorias con diferentes equipos?",
        de: "Was ist der Rekord für die meisten Siege mit verschiedenen Teams?",
        nl: "Wat is het record voor de meeste overwinningen met verschillende teams?"
      },
      options: [
        "3 teams",
        "4 teams",
        "5 teams",
        "6 teams"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso won races with 4 different teams: Renault, McLaren, Ferrari, and Aston Martin (if recent wins count), showing his adaptability.",
        es: "Fernando Alonso ganó carreras con 4 equipos diferentes: Renault, McLaren, Ferrari y Aston Martin, mostrando su adaptabilidad.",
        de: "Fernando Alonso gewann Rennen mit 4 verschiedenen Teams: Renault, McLaren, Ferrari und Aston Martin, zeigt seine Anpassungsfähigkeit.",
        nl: "Fernando Alonso won races met 4 verschillende teams: Renault, McLaren, Ferrari en Aston Martin, wat zijn aanpassingsvermogen toont."
      }
    },
    {
      question: {
        en: "Which driver has the best conversion rate from pole to win?",
        es: "¿Qué piloto tiene la mejor tasa de conversión de pole a victoria?",
        de: "Welcher Fahrer hat die beste Umwandlungsrate von Pole zu Sieg?",
        nl: "Welke coureur heeft de beste conversie ratio van pole naar win?"
      },
      options: [
        "Jim Clark (58.6%)",
        "Juan Manuel Fangio (65.5%)",
        "Ayrton Senna (40.4%)",
        "Lewis Hamilton (59.2%)"
      ],
      correct: 1,
      explanation: {
        en: "Juan Manuel Fangio converted 19 of his 29 pole positions into wins (65.5%), the highest conversion rate in F1 history.",
        es: "Juan Manuel Fangio convirtió 19 de sus 29 pole positions en victorias (65.5%), la tasa de conversión más alta en la historia de F1.",
        de: "Juan Manuel Fangio wandelte 19 seiner 29 Pole-Positionen in Siege um (65,5%), die höchste Umwandlungsrate in der F1-Geschichte.",
        nl: "Juan Manuel Fangio zette 19 van zijn 29 pole positions om in overwinningen (65,5%), de hoogste conversie ratio in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most points scored from the pitlane start?",
        es: "¿Cuál es el récord de más puntos anotados desde la salida del pitlane?",
        de: "Was ist der Rekord für die meisten Punkte von einem Boxengassenstart?",
        nl: "Wat is het record voor de meeste punten gescoord vanaf de pitlane start?"
      },
      options: [
        "3 points",
        "6 points",
        "10 points",
        "15 points"
      ],
      correct: 3,
      explanation: {
        en: "Sebastian Vettel scored 15 points (3rd place) at the 2012 Abu Dhabi GP after starting from the pitlane, the most points from such a disadvantaged position.",
        es: "Sebastian Vettel anotó 15 puntos (3er lugar) en el GP de Abu Dhabi 2012 después de comenzar desde el pitlane, la mayor cantidad de puntos desde una posición tan desventajosa.",
        de: "Sebastian Vettel erzielte beim Abu Dhabi GP 2012 15 Punkte (3. Platz) nach Start aus der Boxengasse, die meisten Punkte von einer so benachteiligten Position.",
        nl: "Sebastian Vettel scoorde 15 punten (3e plaats) bij de 2012 Abu Dhabi GP na te starten vanaf de pitlane, de meeste punten vanaf zo'n benadeelde positie."
      }
    },
    {
      question: {
        en: "Which team achieved the highest winning percentage in a season?",
        es: "¿Qué equipo logró el mayor porcentaje de victorias en una temporada?",
        de: "Welches Team erreichte den höchsten Siegprozentsatz in einer Saison?",
        nl: "Welk team behaalde het hoogste winnende percentage in een seizoen?"
      },
      options: [
        "McLaren 1988 (93.8%)",
        "Mercedes 2016 (90.5%)",
        "Ferrari 2002 (88.2%)",
        "Red Bull 2023 (86.4%)"
      ],
      correct: 0,
      explanation: {
        en: "McLaren won 15 of 16 races in 1988 (93.8%), with Senna and Prost dominating the season with the MP4/4 chassis.",
        es: "McLaren ganó 15 de 16 carreras en 1988 (93.8%), con Senna y Prost dominando la temporada con el chasis MP4/4.",
        de: "McLaren gewann 1988 15 von 16 Rennen (93,8%), Senna und Prost dominierten die Saison mit dem MP4/4-Chassis.",
        nl: "McLaren won 15 van 16 races in 1988 (93,8%), met Senna en Prost dominerend het seizoen met het MP4/4 chassis."
      }
    },
    {
      question: {
        en: "Who has the most wins in wet weather conditions?",
        es: "¿Quién tiene la mayor cantidad de victorias en condiciones de lluvia?",
        de: "Wer hat die meisten Siege bei nassen Wetterbedingungen?",
        nl: "Wie heeft de meeste overwinningen in natte weer condities?"
      },
      options: [
        "Michael Schumacher (11 wins)",
        "Ayrton Senna (7 wins)",
        "Lewis Hamilton (16 wins)",
        "Max Verstappen (8 wins)"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton has won 16 races in wet or mixed conditions, showcasing his exceptional car control and racecraft in changeable weather.",
        es: "Lewis Hamilton ha ganado 16 carreras en condiciones húmedas o mixtas, mostrando su excepcional control del auto y habilidad de carrera en clima cambiante.",
        de: "Lewis Hamilton hat 16 Rennen bei nassen oder gemischten Bedingungen gewonnen und zeigt außergewöhnliche Fahrzeugkontrolle und Renngeschick bei wechselndem Wetter.",
        nl: "Lewis Hamilton heeft 16 races gewonnen in natte of gemengde condities, wat zijn uitzonderlijke auto controle en race vaardigheden toont in wisselend weer."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive seasons finishing in the top 3 of championship?",
        es: "¿Cuál es el récord de más temporadas consecutivas terminando en el top 3 del campeonato?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Saisons in den Top 3 der Meisterschaft?",
        nl: "Wat is het record voor de meeste opeenvolgende seizoenen finishend in de top 3 van kampioenschap?"
      },
      options: [
        "9 seasons",
        "11 seasons",
        "13 seasons",
        "15 seasons"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton finished in the top 3 of the championship for 13 consecutive seasons from 2007-2021, showing remarkable consistency.",
        es: "Lewis Hamilton terminó en el top 3 del campeonato durante 13 temporadas consecutivas de 2007-2021, mostrando notable consistencia.",
        de: "Lewis Hamilton beendete von 2007-2021 13 aufeinanderfolgende Saisons in den Top 3 der Meisterschaft und zeigte bemerkenswerte Konstanz.",
        nl: "Lewis Hamilton finishte in de top 3 van het kampioenschap gedurende 13 opeenvolgende seizoenen van 2007-2021, wat opmerkelijke consistentie toont."
      }
    },
    {
      question: {
        en: "Which driver won the most races after turning 40 years old?",
        es: "¿Qué piloto ganó la mayor cantidad de carreras después de cumplir 40 años?",
        de: "Welcher Fahrer gewann die meisten Rennen nach seinem 40. Geburtstag?",
        nl: "Welke coureur won de meeste races na 40 jaar oud te worden?"
      },
      options: [
        "Nigel Mansell (2 wins)",
        "Juan Manuel Fangio (5 wins)",
        "Fernando Alonso (0 wins)",
        "Kimi Räikkönen (1 win)"
      ],
      correct: 1,
      explanation: {
        en: "Juan Manuel Fangio won 5 races after turning 40, including his final championship-winning season in 1957 at age 46.",
        es: "Juan Manuel Fangio ganó 5 carreras después de cumplir 40 años, incluyendo su última temporada ganadora del campeonato en 1957 a los 46 años.",
        de: "Juan Manuel Fangio gewann nach seinem 40. Geburtstag 5 Rennen, einschließlich seiner letzten Meistersaison 1957 im Alter von 46 Jahren.",
        nl: "Juan Manuel Fangio won 5 races na 40 jaar oud te worden, inclusief zijn laatste kampioenschap-winnende seizoen in 1957 op 46-jarige leeftijd."
      }
    },
    {
      question: {
        en: "What is the record for most races led for at least one lap in a season?",
        es: "¿Cuál es el récord de más carreras lideradas por al menos una vuelta en una temporada?",
        de: "Was ist der Rekord für die meisten Rennen mit mindestens einer geführten Runde in einer Saison?",
        nl: "Wat is het record voor de meeste races geleid voor tenminste één ronde in een seizoen?"
      },
      options: [
        "18 races",
        "20 races",
        "22 races",
        "24 races"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen led at least one lap in all 22 races of the 2023 season, demonstrating his presence at the front throughout the year.",
        es: "Max Verstappen lideró al menos una vuelta en todas las 22 carreras de la temporada 2023, demostrando su presencia al frente durante todo el año.",
        de: "Max Verstappen führte 2023 in allen 22 Rennen mindestens eine Runde an und zeigte seine Präsenz an der Spitze das ganze Jahr über.",
        nl: "Max Verstappen leidde tenminste één ronde in alle 22 races van het 2023 seizoen, wat zijn aanwezigheid vooraan het hele jaar toont."
      }
    },
    {
      question: {
        en: "Which driver has the most points finishes (top 10) in F1 history?",
        es: "¿Qué piloto tiene la mayor cantidad de finales con puntos (top 10) en la historia de F1?",
        de: "Welcher Fahrer hat die meisten Punkte-Platzierungen (Top 10) in der F1-Geschichte?",
        nl: "Welke coureur heeft de meeste punten finishes (top 10) in F1 geschiedenis?"
      },
      options: [
        "Lewis Hamilton (289)",
        "Fernando Alonso (267)",
        "Michael Schumacher (221)",
        "Kimi Räikkönen (231)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has finished in the points-scoring positions 289 times, the most in F1 history, reflecting his consistent performance.",
        es: "Lewis Hamilton ha terminado en posiciones con puntos 289 veces, la mayor cantidad en la historia de F1, reflejando su rendimiento consistente.",
        de: "Lewis Hamilton ist 289 Mal in den punktebringenden Positionen gelandet, die meisten in der F1-Geschichte, was seine konstante Leistung widerspiegelt.",
        nl: "Lewis Hamilton heeft 289 keer gefinisht in de punten-scorende posities, de meeste in F1 geschiedenis, wat zijn consistente prestatie weerspiegelt."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive seasons finishing in the top 3 of the championship?",
        es: "¿Cuál es el récord de más temporadas consecutivas finalizando en el top 3 del campeonato?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Saisons mit Top-3-Platzierung in der Meisterschaft?",
        nl: "Wat is het record voor de meeste opeenvolgende seizoenen eindigend in de top 3 van het kampioenschap?"
      },
      options: [
        "9 consecutive seasons",
        "11 consecutive seasons",
        "13 consecutive seasons",
        "15 consecutive seasons"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton finished in the top 3 of the Drivers' Championship for 13 consecutive seasons (2007-2021, excluding 2022), the longest streak in F1 history.",
        es: "Lewis Hamilton terminó en el top 3 del Campeonato de Pilotos durante 13 temporadas consecutivas (2007-2021, excluyendo 2022), la racha más larga en la historia de F1.",
        de: "Lewis Hamilton beendete 13 aufeinanderfolgende Saisons (2007-2021, ohne 2022) unter den Top 3 der Fahrerwertung, die längste Serie in der F1-Geschichte.",
        nl: "Lewis Hamilton eindigde 13 opeenvolgende seizoenen (2007-2021, exclusief 2022) in de top 3 van het Rijderskampioenschap, de langste reeks in F1 geschiedenis."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();