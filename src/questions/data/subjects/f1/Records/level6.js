const level6 = (function() {
  const questions = [
    {
      question: {
        en: "What is the record for most races led from start to finish without pitstops?",
        es: "¿Cuál es el récord de más carreras lideradas de principio a fin sin paradas en boxes?",
        de: "Was ist der Rekord für die meisten Rennen von Start bis Ziel geführt ohne Boxenstopps?",
        nl: "Wat is het record voor de meeste races geleid van start tot finish zonder pitstops?"
      },
      options: [
        "Jim Clark 1960s (several non-stop wins)",
        "Stirling Moss 1950s (multiple non-stop victories)",
        "Modern F1 requires pitstops by regulation",
        "Jack Brabham 1966 (4 non-stop wins)"
      ],
      correct: 2,
      explanation: {
        en: "Modern F1 regulations require at least one pitstop in dry races (compound change rule), making non-stop victories impossible since 2007.",
        es: "Las regulaciones modernas de F1 requieren al menos una parada en boxes en carreras secas (regla de cambio de compuesto), haciendo imposibles victorias sin paradas desde 2007.",
        de: "Moderne F1-Regeln erfordern mindestens einen Boxenstopp bei trockenen Rennen (Mischungswechselregel), was Siege ohne Stopp seit 2007 unmöglich macht.",
        nl: "Moderne F1 reglementen vereisen minstens één pitstop in droge races (compound verandering regel), waardoor non-stop overwinningen onmogelijk zijn sinds 2007."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins at circuits no longer on the calendar?",
        es: "¿Qué piloto tiene el récord de más victorias en circuitos que ya no están en el calendario?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege auf Strecken, die nicht mehr im Kalender sind?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen op circuits niet meer op de kalender?"
      },
      options: [
        "Michael Schumacher (15+ wins at defunct circuits)",
        "Alain Prost (12 wins at defunct circuits)",
        "Ayrton Senna (8 wins at defunct circuits)",
        "Juan Manuel Fangio (18 wins at defunct circuits)"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher won races at many circuits no longer used: Magny-Cours (8), Imola (7), Nürburgring, A1-Ring, and others, totaling 15+ wins.",
        es: "Michael Schumacher ganó carreras en muchos circuitos que ya no se usan: Magny-Cours (8), Imola (7), Nürburgring, A1-Ring y otros, totalizando más de 15 victorias.",
        de: "Michael Schumacher gewann Rennen auf vielen nicht mehr genutzten Strecken: Magny-Cours (8), Imola (7), Nürburgring, A1-Ring und andere, insgesamt über 15 Siege.",
        nl: "Michael Schumacher won races op vele circuits die niet meer worden gebruikt: Magny-Cours (8), Imola (7), Nürburgring, A1-Ring en anderen, in totaal 15+ overwinningen."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive qualifying sessions in Q3?",
        es: "¿Cuál es el récord de más sesiones de clasificación consecutivas en Q3?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Qualifying-Sessions in Q3?",
        nl: "Wat is het record voor de meeste opeenvolgende kwalificatie sessies in Q3?"
      },
      options: [
        "Lewis Hamilton (175+ consecutive Q3 appearances)",
        "Sebastian Vettel (142 consecutive Q3)",
        "Fernando Alonso (97 consecutive Q3)",
        "Max Verstappen (120+ consecutive Q3)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton reached Q3 in 175+ consecutive qualifying sessions from 2007-2020, showing remarkable consistency in qualifying performance.",
        es: "Lewis Hamilton alcanzó Q3 en más de 175 sesiones de clasificación consecutivas desde 2007-2020, mostrando consistencia notable en rendimiento de clasificación.",
        de: "Lewis Hamilton erreichte von 2007-2020 in über 175 aufeinanderfolgenden Qualifying-Sessions Q3 und zeigte bemerkenswerte Konstanz in der Qualifying-Leistung.",
        nl: "Lewis Hamilton bereikte Q3 in 175+ opeenvolgende kwalificatie sessies van 2007-2020, wat opmerkelijke consistentie in kwalificatie prestatie toont."
      }
    },
    {
      question: {
        en: "Which driver has the record for highest percentage of races finishing in points?",
        es: "¿Qué piloto tiene el récord del porcentaje más alto de carreras terminando en puntos?",
        de: "Welcher Fahrer hat den Rekord für den höchsten Prozentsatz an Rennen in den Punkten?",
        nl: "Welke coureur heeft het record voor hoogste percentage races eindigend in de punten?"
      },
      options: [
        "Max Verstappen (78% of races in points)",
        "Lewis Hamilton (89% of races in points)",
        "Fernando Alonso (72% of races in points)",
        "Charles Leclerc (81% of races in points)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton finished in points (top 10) in 89% of his career starts, the highest percentage among drivers with 100+ races.",
        es: "Lewis Hamilton terminó en puntos (top 10) en el 89% de sus inicios de carrera, el porcentaje más alto entre pilotos con más de 100 carreras.",
        de: "Lewis Hamilton landete in 89% seiner Karrierestarts in den Punkten (Top 10), der höchste Prozentsatz unter Fahrern mit 100+ Rennen.",
        nl: "Lewis Hamilton eindigde in punten (top 10) in 89% van zijn carrière starts, het hoogste percentage onder coureurs met 100+ races."
      }
    },
    {
      question: {
        en: "What is the record for most teammates beaten over a full season?",
        es: "¿Cuál es el récord de más compañeros vencidos durante una temporada completa?",
        de: "Was ist der Rekord für die meisten über eine volle Saison geschlagenen Teamkollegen?",
        nl: "Wat is het record voor de meeste teamgenoten verslagen over een volledig seizoen?"
      },
      options: [
        "4 teammates (team used 5 drivers total)",
        "3 teammates (team used 4 drivers)",
        "2 teammates (typical maximum)",
        "5 teammates (chaotic season)"
      ],
      correct: 1,
      explanation: {
        en: "Some drivers beat 3 teammates in seasons where teams used 4 different drivers due to injuries, performance, or other factors.",
        es: "Algunos pilotos vencieron a 3 compañeros en temporadas donde los equipos usaron 4 pilotos diferentes debido a lesiones, rendimiento u otros factores.",
        de: "Einige Fahrer schlugen 3 Teamkollegen in Saisons, in denen Teams 4 verschiedene Fahrer einsetzten aufgrund von Verletzungen, Leistung oder anderen Faktoren.",
        nl: "Sommige coureurs versloegen 3 teamgenoten in seizoenen waar teams 4 verschillende coureurs gebruikten door blessures, prestatie of andere factoren."
      }
    },
    {
      question: {
        en: "Which team holds the record for most seasons finishing last in the championship?",
        es: "¿Qué equipo tiene el récord de más temporadas terminando último en el campeonato?",
        de: "Welches Team hält den Rekord für die meisten Saisons auf dem letzten Platz der Meisterschaft?",
        nl: "Welk team heeft het record voor de meeste seizoenen eindigend als laatste in het kampioenschap?"
      },
      options: [
        "Minardi (8 times last place)",
        "Marussia/Manor (4 times last place)",
        "HRT (3 times last place)",
        "Caterham (4 times last place)"
      ],
      correct: 0,
      explanation: {
        en: "Minardi finished last in the Constructors' Championship 8 times during their 1985-2005 tenure, the most of any team.",
        es: "Minardi terminó último en el Campeonato de Constructores 8 veces durante su período 1985-2005, las más de cualquier equipo.",
        de: "Minardi beendete die Konstrukteurs-Meisterschaft 8 Mal als Letzter während ihrer Zeit von 1985-2005, die meisten eines Teams.",
        nl: "Minardi eindigde 8 keer als laatste in het Constructeurs Kampioenschap tijdens hun 1985-2005 periode, de meeste van elk team."
      }
    },
    {
      question: {
        en: "What is the record for most wins from P10 or lower on the grid?",
        es: "¿Cuál es el récord de más victorias desde P10 o inferior en la parrilla?",
        de: "Was ist der Rekord für die meisten Siege von P10 oder niedriger auf dem Grid?",
        nl: "Wat is het record voor de meeste overwinningen vanaf P10 of lager op de grid?"
      },
      options: [
        "Kimi Räikkönen (3 wins from P10+)",
        "Lewis Hamilton (2 wins from P10+)",
        "Sebastian Vettel (2 wins from P10+)",
        "No driver has won from P10+ more than twice"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen won 3 times after starting P10 or lower: Japan 2005 (17th), Belgium 2004 (10th), and Suzuka (back of grid).",
        es: "Kimi Räikkönen ganó 3 veces después de partir P10 o inferior: Japón 2005 (17°), Bélgica 2004 (10°) y Suzuka (fondo de parrilla).",
        de: "Kimi Räikkönen gewann 3 Mal nach Start von P10 oder niedriger: Japan 2005 (17.), Belgien 2004 (10.) und Suzuka (Ende des Grids).",
        nl: "Kimi Räikkönen won 3 keer na te starten P10 of lager: Japan 2005 (17e), België 2004 (10e) en Suzuka (achterkant grid)."
      }
    },
    {
      question: {
        en: "Which driver has the record for most pole-to-retirement conversions in a season?",
        es: "¿Qué piloto tiene el récord de más conversiones de pole a retiro en una temporada?",
        de: "Welcher Fahrer hat den Rekord für die meisten Pole-zu-Ausfall-Konversionen in einer Saison?",
        nl: "Welke coureur heeft het record voor de meeste pole-naar-uitval conversies in een seizoen?"
      },
      options: [
        "Ayrton Senna 1993 (4 pole-to-DNF)",
        "Nico Rosberg 2016 (3 pole-to-DNF)",
        "Lewis Hamilton 2016 (2 pole-to-DNF)",
        "Max Verstappen 2017 (1 pole-to-DNF)"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna took pole and retired 4 times in 1993, showing the reliability issues even championship contenders faced in that era.",
        es: "Ayrton Senna tomó pole y se retiró 4 veces en 1993, mostrando los problemas de confiabilidad que incluso los contendientes al campeonato enfrentaban en esa era.",
        de: "Ayrton Senna holte 1993 4 Mal die Pole und fiel aus, zeigte die Zuverlässigkeitsprobleme, mit denen selbst Meisterschaftsanwärter in dieser Ära konfrontiert waren.",
        nl: "Ayrton Senna behaalde pole en viel 4 keer uit in 1993, wat de betrouwbaarheidsproblemen toont die zelfs kampioenschaps kandidaten in dat tijdperk hadden."
      }
    },
    {
      question: {
        en: "What is the record for shortest career from debut to final race (minimum 50 races)?",
        es: "¿Cuál es el récord de la carrera más corta desde el debut hasta la carrera final (mínimo 50 carreras)?",
        de: "Was ist der Rekord für die kürzeste Karriere vom Debüt bis zum letzten Rennen (mindestens 50 Rennen)?",
        nl: "Wat is het record voor kortste carrière van debuut tot laatste race (minimaal 50 races)?"
      },
      options: [
        "Robert Kubica (76 races over 3.5 years)",
        "Heikki Kovalainen (111 races over 6 years)",
        "Pastor Maldonado (95 races over 5 years)",
        "Careers vary widely by era"
      ],
      correct: 0,
      explanation: {
        en: "Robert Kubica's initial F1 career spanned just 76 races from 2006-2010 before his rally accident, one of the shortest intense careers.",
        es: "La carrera inicial de F1 de Robert Kubica abarcó solo 76 carreras desde 2006-2010 antes de su accidente de rally, una de las carreras intensas más cortas.",
        de: "Robert Kubicas erste F1-Karriere umfasste nur 76 Rennen von 2006-2010 vor seinem Rallye-Unfall, eine der kürzesten intensiven Karrieren.",
        nl: "Robert Kubica's initiële F1 carrière omvatte slechts 76 races van 2006-2010 voor zijn rally ongeluk, een van de kortste intense carrières."
      }
    },
    {
      question: {
        en: "Which driver has the record for most points scored on street circuits?",
        es: "¿Qué piloto tiene el récord de más puntos anotados en circuitos urbanos?",
        de: "Welcher Fahrer hat den Rekord für die meisten auf Stadtkursen erzielten Punkte?",
        nl: "Welke coureur heeft het record voor de meeste punten gescoord op stratencircuits?"
      },
      options: [
        "Lewis Hamilton (550+ points on street circuits)",
        "Sebastian Vettel (420 points on street circuits)",
        "Fernando Alonso (380 points on street circuits)",
        "Daniel Ricciardo (290 points on street circuits)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has scored 550+ points on street circuits (Monaco, Singapore, Baku, etc.), more than any driver, excelling on tight tracks.",
        es: "Lewis Hamilton ha anotado más de 550 puntos en circuitos urbanos (Mónaco, Singapur, Bakú, etc.), más que cualquier piloto, destacándose en pistas estrechas.",
        de: "Lewis Hamilton erzielte über 550 Punkte auf Stadtkursen (Monaco, Singapur, Baku usw.), mehr als jeder Fahrer, exzellierte auf engen Strecken.",
        nl: "Lewis Hamilton heeft 550+ punten gescoord op stratencircuits (Monaco, Singapore, Baku, etc.), meer dan enige coureur, uitblinkend op nauwe circuits."
      }
    },
    {
      question: {
        en: "What is the record for most seasons with at least one DNF?",
        es: "¿Cuál es el récord de más temporadas con al menos un DNF?",
        de: "Was ist der Rekord für die meisten Saisons mit mindestens einem DNF?",
        nl: "Wat is het record voor de meeste seizoenen met ten minste één DNF?"
      },
      options: [
        "Fernando Alonso (20+ seasons with DNF)",
        "Kimi Räikkönen (19 seasons with DNF)",
        "Rubens Barrichello (17 seasons with DNF)",
        "Michael Schumacher (15 seasons with DNF)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso had at least one DNF in 20+ of his seasons, showing the challenges of reliability even for top drivers across eras.",
        es: "Fernando Alonso tuvo al menos un DNF en más de 20 de sus temporadas, mostrando los desafíos de confiabilidad incluso para pilotos top a través de eras.",
        de: "Fernando Alonso hatte in über 20 seiner Saisons mindestens einen DNF und zeigte die Herausforderungen der Zuverlässigkeit selbst für Top-Fahrer über Epochen.",
        nl: "Fernando Alonso had ten minste één DNF in 20+ van zijn seizoenen, wat de uitdagingen van betrouwbaarheid toont zelfs voor top coureurs over tijdperken."
      }
    },
    {
      question: {
        en: "Which team has the record for most different engine suppliers used?",
        es: "¿Qué equipo tiene el récord de más proveedores de motores diferentes utilizados?",
        de: "Welches Team hat den Rekord für die meisten verwendeten verschiedenen Motorenlieferanten?",
        nl: "Welk team heeft het record voor de meeste verschillende motor leveranciers gebruikt?"
      },
      options: [
        "McLaren (8 different engine suppliers)",
        "Williams (7 different suppliers)",
        "Lotus/Renault (6 different suppliers)",
        "Sauber (9 different suppliers)"
      ],
      correct: 0,
      explanation: {
        en: "McLaren used 8 engine suppliers: Ford, Honda (twice), TAG/Porsche, Peugeot, Mercedes, Renault, showcasing their adaptability.",
        es: "McLaren usó 8 proveedores de motores: Ford, Honda (dos veces), TAG/Porsche, Peugeot, Mercedes, Renault, mostrando su adaptabilidad.",
        de: "McLaren nutzte 8 Motorenlieferanten: Ford, Honda (zweimal), TAG/Porsche, Peugeot, Mercedes, Renault und zeigte ihre Anpassungsfähigkeit.",
        nl: "McLaren gebruikte 8 motor leveranciers: Ford, Honda (tweemaal), TAG/Porsche, Peugeot, Mercedes, Renault, wat hun aanpassingsvermogen toont."
      }
    },
    {
      question: {
        en: "What is the record for most laps completed in championship-deciding race?",
        es: "¿Cuál es el récord de más vueltas completadas en carrera decisiva del campeonato?",
        de: "Was ist der Rekord für die meisten gefahrenen Runden im Meisterschafts-entscheidenden Rennen?",
        nl: "Wat is het record voor de meeste rondes voltooid in kampioenschap-beslissende race?"
      },
      options: [
        "71 laps (Abu Dhabi standard distance)",
        "78 laps (Monaco maximum)",
        "58 laps (Singapore)",
        "Varies by circuit layout"
      ],
      correct: 3,
      explanation: {
        en: "Championship-deciding races vary by circuit: Abu Dhabi (58 laps), Brazil (71), Japan (53). The record depends on which circuit hosts the finale.",
        es: "Las carreras decisivas del campeonato varían por circuito: Abu Dhabi (58 vueltas), Brasil (71), Japón (53). El récord depende del circuito que aloje la final.",
        de: "Meisterschafts-entscheidende Rennen variieren nach Strecke: Abu Dhabi (58 Runden), Brasilien (71), Japan (53). Der Rekord hängt davon ab, welche Strecke das Finale austrägt.",
        nl: "Kampioenschap-beslissende races variëren per circuit: Abu Dhabi (58 rondes), Brazilië (71), Japan (53). Het record hangt af van welk circuit de finale organiseert."
      }
    },
    {
      question: {
        en: "Which driver has the record for most fastest laps without a pole position?",
        es: "¿Qué piloto tiene el récord de más vueltas rápidas sin una pole position?",
        de: "Welcher Fahrer hat den Rekord für die meisten schnellsten Runden ohne Pole-Position?",
        nl: "Welke coureur heeft het record voor de meeste snelste rondes zonder een pole position?"
      },
      options: [
        "Kimi Räikkönen (46 fastest laps, 18 poles)",
        "Rubens Barrichello (17 fastest laps, 14 poles)",
        "Carlos Reutemann (6 fastest laps, 6 poles)",
        "All drivers with fastest laps also have poles"
      ],
      correct: 3,
      explanation: {
        en: "Nearly all drivers with multiple fastest laps also have pole positions, as both require single-lap pace. Very few achieved fastest laps without poles.",
        es: "Casi todos los pilotos con múltiples vueltas rápidas también tienen pole positions, ya que ambos requieren ritmo de vuelta única. Muy pocos lograron vueltas rápidas sin poles.",
        de: "Fast alle Fahrer mit mehreren schnellsten Runden haben auch Pole-Positionen, da beide Einzelrunden-Tempo erfordern. Sehr wenige erreichten schnellste Runden ohne Poles.",
        nl: "Bijna alle coureurs met meerdere snelste rondes hebben ook pole positions, omdat beide enkele-ronde tempo vereisen. Zeer weinigen behaalden snelste rondes zonder poles."
      }
    },
    {
      question: {
        en: "What is the record for most driver changes at a single race weekend?",
        es: "¿Cuál es el récord de más cambios de piloto en un solo fin de semana de carrera?",
        de: "Was ist der Rekord für die meisten Fahrerwechsel an einem einzelnen Rennwochenende?",
        nl: "Wat is het record voor de meeste coureur wisselingen in een enkel race weekend?"
      },
      options: [
        "3 driver changes (various teams)",
        "4 driver changes (chaotic weekend)",
        "2 driver changes (typical maximum)",
        "5 driver changes (COVID era)"
      ],
      correct: 3,
      explanation: {
        en: "During COVID-19 affected 2020-2021 seasons, up to 5 drivers changed between practice/qualifying/race due to positive tests and reserve drivers.",
        es: "Durante las temporadas 2020-2021 afectadas por COVID-19, hasta 5 pilotos cambiaron entre práctica/clasificación/carrera debido a pruebas positivas y pilotos de reserva.",
        de: "Während der von COVID-19 betroffenen Saisons 2020-2021 wechselten bis zu 5 Fahrer zwischen Training/Qualifying/Rennen aufgrund positiver Tests und Ersatzfahrer.",
        nl: "Tijdens COVID-19 getroffen 2020-2021 seizoenen wisselden tot 5 coureurs tussen training/kwalificatie/race door positieve tests en reserve coureurs."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins at their least successful circuit (minimum 3 appearances)?",
        es: "¿Qué piloto tiene el récord de más victorias en su circuito menos exitoso (mínimo 3 apariciones)?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege auf seiner am wenigsten erfolgreichen Strecke (mindestens 3 Auftritte)?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen op hun minst succesvolle circuit (minimaal 3 optredens)?"
      },
      options: [
        "Lewis Hamilton (consistency across all circuits)",
        "Michael Schumacher (won at least once at most circuits)",
        "This statistic is paradoxical by definition",
        "Sebastian Vettel (varied success)"
      ],
      correct: 2,
      explanation: {
        en: "This question is paradoxical: a 'least successful' circuit implies poor performance, contradicting 'most wins'. At any circuit with wins, that's successful.",
        es: "Esta pregunta es paradójica: un circuito 'menos exitoso' implica mal rendimiento, contradice 'más victorias'. En cualquier circuito con victorias, eso es exitoso.",
        de: "Diese Frage ist paradox: Eine 'am wenigsten erfolgreiche' Strecke impliziert schlechte Leistung, widerspricht 'meisten Siegen'. Auf jeder Strecke mit Siegen ist das erfolgreich.",
        nl: "Deze vraag is paradoxaal: een 'minst succesvol' circuit impliceert slechte prestatie, tegenstrijdig met 'meeste overwinningen'. Op elk circuit met overwinningen is dat succesvol."
      }
    },
    {
      question: {
        en: "What is the record for most race weekends postponed in a single season?",
        es: "¿Cuál es el récord de más fines de semana de carrera pospuestos en una sola temporada?",
        de: "Was ist der Rekord für die meisten verschobenen Rennwochenenden in einer einzelnen Saison?",
        nl: "Wat is het record voor de meeste uitgestelde race weekenden in een enkel seizoen?"
      },
      options: [
        "2020 season (10 races cancelled/postponed due to COVID)",
        "1984 season (3 races cancelled)",
        "2011 season (Bahrain postponed)",
        "1955 season (multiple cancellations)"
      ],
      correct: 0,
      explanation: {
        en: "The 2020 season had 10 races initially cancelled or postponed due to COVID-19, with the calendar heavily revised and reduced from planned 22 to 17 races.",
        es: "La temporada 2020 tuvo 10 carreras inicialmente canceladas o pospuestas debido a COVID-19, con el calendario muy revisado y reducido de 22 planeadas a 17 carreras.",
        de: "Die Saison 2020 hatte 10 Rennen, die zunächst wegen COVID-19 abgesagt oder verschoben wurden, der Kalender wurde stark überarbeitet und von geplanten 22 auf 17 Rennen reduziert.",
        nl: "Het 2020 seizoen had 10 races initieel geannuleerd of uitgesteld door COVID-19, met de kalender sterk herzien en verminderd van geplande 22 naar 17 races."
      }
    },
    {
      question: {
        en: "Which driver has the record for best championship finish without a fastest lap?",
        es: "¿Qué piloto tiene el récord del mejor final de campeonato sin una vuelta rápida?",
        de: "Welcher Fahrer hat den Rekord für die beste Meisterschaftsplatzierung ohne schnellste Runde?",
        nl: "Welke coureur heeft het record voor beste kampioenschap finish zonder een snelste ronde?"
      },
      options: [
        "Jarno Trulli (6th in 2004, 0 fastest laps career)",
        "Nick Heidfeld (5th in 2007, 2 fastest laps career)",
        "Pastor Maldonado (13th in 2012, 0 fastest laps)",
        "Kamui Kobayashi (12th in 2012, 0 fastest laps)"
      ],
      correct: 0,
      explanation: {
        en: "Jarno Trulli finished 6th in 2004 championship despite never recording a fastest lap in his entire career, the best finish without this achievement.",
        es: "Jarno Trulli terminó 6° en el campeonato 2004 a pesar de nunca registrar una vuelta rápida en toda su carrera, el mejor final sin este logro.",
        de: "Jarno Trulli wurde 2004 Sechster in der Meisterschaft, obwohl er nie eine schnellste Runde in seiner gesamten Karriere fuhr, das beste Ergebnis ohne diese Leistung.",
        nl: "Jarno Trulli eindigde 6e in het 2004 kampioenschap ondanks nooit een snelste ronde te registreren in zijn hele carrière, de beste finish zonder deze prestatie."
      }
    },
    {
      question: {
        en: "What is the record for most team principals a driver has worked under?",
        es: "¿Cuál es el récord de más directores de equipo con los que un piloto ha trabajado?",
        de: "Was ist der Rekord für die meisten Teamchefs, unter denen ein Fahrer gearbeitet hat?",
        nl: "Wat is het record voor de meeste team principals waar een coureur onder heeft gewerkt?"
      },
      options: [
        "Fernando Alonso (15+ team principals)",
        "Kimi Räikkönen (12 team principals)",
        "Lewis Hamilton (5 team principals)",
        "Rubens Barrichello (10 team principals)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso worked under 15+ different team principals across his teams (Minardi, Renault, McLaren, Ferrari, Alpine, Aston Martin), the most variety.",
        es: "Fernando Alonso trabajó bajo más de 15 directores de equipo diferentes en sus equipos (Minardi, Renault, McLaren, Ferrari, Alpine, Aston Martin), la mayor variedad.",
        de: "Fernando Alonso arbeitete unter über 15 verschiedenen Teamchefs in seinen Teams (Minardi, Renault, McLaren, Ferrari, Alpine, Aston Martin), die meiste Vielfalt.",
        nl: "Fernando Alonso werkte onder 15+ verschillende team principals over zijn teams (Minardi, Renault, McLaren, Ferrari, Alpine, Aston Martin), de meeste variëteit."
      }
    },
    {
      question: {
        en: "Which constructor won the championship with the fewest total laps led?",
        es: "¿Qué constructor ganó el campeonato con el menor total de vueltas lideradas?",
        de: "Welcher Konstrukteur gewann die Meisterschaft mit den wenigsten insgesamt geführten Runden?",
        nl: "Welke constructeur won het kampioenschap met de minste totaal geleidde rondes?"
      },
      options: [
        "Brawn GP 2009 (456 laps led)",
        "Williams 1980 (298 laps led)",
        "Lotus 1963 (312 laps led)",
        "Tyrrell 1971 (267 laps led)"
      ],
      correct: 3,
      explanation: {
        en: "Tyrrell won the 1971 Constructors' Championship leading only 267 laps with Jackie Stewart, winning through consistency rather than domination.",
        es: "Tyrrell ganó el Campeonato de Constructores 1971 liderando solo 267 vueltas con Jackie Stewart, ganando por consistencia en lugar de dominación.",
        de: "Tyrrell gewann die Konstrukteurs-Meisterschaft 1971 mit nur 267 geführten Runden mit Jackie Stewart und gewann durch Konstanz statt Dominanz.",
        nl: "Tyrrell won het 1971 Constructeurs Kampioenschap leidend slechts 267 rondes met Jackie Stewart, winnend door consistentie in plaats van dominantie."
      }
    },
    {
      question: {
        en: "What is the record for most DNFs caused by first-lap incidents in a season?",
        es: "¿Cuál es el récord de más DNFs causados por incidentes de primera vuelta en una temporada?",
        de: "Was ist der Rekord für die meisten DNFs durch Vorfälle in der ersten Runde in einer Saison?",
        nl: "Wat is het record voor de meeste DNFs veroorzaakt door eerste-ronde incidenten in een seizoen?"
      },
      options: [
        "Romain Grosjean 2012 (6 first-lap DNFs)",
        "Pastor Maldonado 2011 (5 first-lap DNFs)",
        "Andrea de Cesaris 1987 (7 first-lap DNFs)",
        "Takuma Sato 2004 (4 first-lap DNFs)"
      ],
      correct: 2,
      explanation: {
        en: "Andrea de Cesaris suffered 7 first-lap DNFs in 1987, contributing to his reputation for incidents despite showing speed when staying on track.",
        es: "Andrea de Cesaris sufrió 7 DNFs de primera vuelta en 1987, contribuyendo a su reputación por incidentes a pesar de mostrar velocidad cuando se mantenía en pista.",
        de: "Andrea de Cesaris erlitt 1987 7 Ausfälle in der ersten Runde und trug zu seinem Ruf für Vorfälle bei, obwohl er Geschwindigkeit zeigte, wenn er auf der Strecke blieb.",
        nl: "Andrea de Cesaris had 7 eerste-ronde DNFs in 1987, bijdragend aan zijn reputatie voor incidenten ondanks snelheid te tonen wanneer hij op de baan bleef."
      }
    },
    {
      question: {
        en: "Which driver has the record for most seasons with exactly one win?",
        es: "¿Qué piloto tiene el récord de más temporadas con exactamente una victoria?",
        de: "Welcher Fahrer hat den Rekord für die meisten Saisons mit genau einem Sieg?",
        nl: "Welke coureur heeft het record voor de meeste seizoenen met exact één overwinning?"
      },
      options: [
        "Jenson Button (5 seasons with 1 win)",
        "David Coulthard (4 seasons with 1 win)",
        "Rubens Barrichello (4 seasons with 1 win)",
        "Kimi Räikkönen (3 seasons with 1 win)"
      ],
      correct: 0,
      explanation: {
        en: "Jenson Button had 5 seasons with exactly one win (2004, 2006, 2010, 2011, 2012), showing he could win but struggled for consistent dominance.",
        es: "Jenson Button tuvo 5 temporadas con exactamente una victoria (2004, 2006, 2010, 2011, 2012), mostrando que podía ganar pero luchaba por dominio consistente.",
        de: "Jenson Button hatte 5 Saisons mit genau einem Sieg (2004, 2006, 2010, 2011, 2012) und zeigte, dass er gewinnen konnte, aber für konstante Dominanz kämpfte.",
        nl: "Jenson Button had 5 seizoenen met exact één overwinning (2004, 2006, 2010, 2011, 2012), wat toont dat hij kon winnen maar worstelde voor consistente dominantie."
      }
    },
    {
      question: {
        en: "What is the record for most gearbox penalty grid drops in a single season?",
        es: "¿Cuál es el récord de más caídas de parrilla por penalización de caja de cambios en una sola temporada?",
        de: "Was ist der Rekord für die meisten Gridstrafen wegen Getriebewechsel in einer Saison?",
        nl: "Wat is het record voor de meeste versnellingsbak straf grid drops in een enkel seizoen?"
      },
      options: [
        "Sebastian Vettel 2014 (4 gearbox penalties)",
        "Fernando Alonso 2015 (3 gearbox penalties)",
        "Max Verstappen 2017 (2 gearbox penalties)",
        "Varies by reliability and incidents"
      ],
      correct: 3,
      explanation: {
        en: "Gearbox penalties vary widely by season based on reliability and crash damage. Some drivers took multiple penalties, but no single season record stands out.",
        es: "Las penalizaciones de caja de cambios varían ampliamente por temporada según confiabilidad y daño por choques. Algunos pilotos tomaron múltiples penalizaciones, pero ningún récord de temporada individual se destaca.",
        de: "Getriebe-Strafen variieren stark nach Saison basierend auf Zuverlässigkeit und Unfallschäden. Einige Fahrer nahmen mehrere Strafen, aber kein einzelner Saisonrekord sticht hervor.",
        nl: "Versnellingsbak straffen variëren sterk per seizoen gebaseerd op betrouwbaarheid en crash schade. Sommige coureurs kregen meerdere straffen, maar geen enkel seizoen record springt eruit."
      }
    },
    {
      question: {
        en: "Which team scored points with the most different drivers in a single season?",
        es: "¿Qué equipo anotó puntos con la mayor cantidad de pilotos diferentes en una sola temporada?",
        de: "Welches Team erzielte mit den meisten verschiedenen Fahrern in einer Saison Punkte?",
        nl: "Welk team scoorde punten met de meeste verschillende coureurs in een enkel seizoen?"
      },
      options: [
        "Toro Rosso 2019 (4 different drivers scored)",
        "Minardi 2005 (5 different drivers)",
        "Sauber 2014 (3 different drivers)",
        "Williams 2020 (3 different drivers)"
      ],
      correct: 0,
      explanation: {
        en: "Toro Rosso in 2019 had 4 different drivers score points: Kvyat, Gasly, Albon, and possibly a reserve, showing their driver rotation that year.",
        es: "Toro Rosso en 2019 tuvo 4 pilotos diferentes anotando puntos: Kvyat, Gasly, Albon y posiblemente un reserva, mostrando su rotación de pilotos ese año.",
        de: "Toro Rosso hatte 2019 4 verschiedene Fahrer, die Punkte erzielten: Kvyat, Gasly, Albon und möglicherweise einen Ersatzfahrer, zeigten ihre Fahrerrotation in diesem Jahr.",
        nl: "Toro Rosso had in 2019 4 verschillende coureurs punten scoren: Kvyat, Gasly, Albon en mogelijk een reserve, wat hun coureur rotatie dat jaar toont."
      }
    },
    {
      question: {
        en: "What is the record for most wins by a driver in their final F1 season?",
        es: "¿Cuál es el récord de más victorias por un piloto en su última temporada de F1?",
        de: "Was ist der Rekord für die meisten Siege eines Fahrers in seiner letzten F1-Saison?",
        nl: "Wat is het record voor de meeste overwinningen door een coureur in hun laatste F1 seizoen?"
      },
      options: [
        "Alain Prost 1993 (7 wins)",
        "Niki Lauda 1985 (5 wins)",
        "Mika Häkkinen 2001 (2 wins)",
        "Michael Schumacher 2012 (0 wins)"
      ],
      correct: 0,
      explanation: {
        en: "Alain Prost won 7 races and the championship in his final 1993 season, retiring at the peak of his powers as world champion.",
        es: "Alain Prost ganó 7 carreras y el campeonato en su última temporada 1993, retirándose en el pico de sus poderes como campeón mundial.",
        de: "Alain Prost gewann 7 Rennen und die Meisterschaft in seiner letzten Saison 1993 und ging auf dem Höhepunkt seiner Kräfte als Weltmeister.",
        nl: "Alain Prost won 7 races en het kampioenschap in zijn laatste 1993 seizoen, afscheid nemend op het hoogtepunt van zijn kunnen als wereldkampioen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most years between their first and last podium?",
        es: "¿Qué piloto tiene el récord de más años entre su primer y último podio?",
        de: "Welcher Fahrer hat den Rekord für die meisten Jahre zwischen seinem ersten und letzten Podium?",
        nl: "Welke coureur heeft het record voor de meeste jaren tussen hun eerste en laatste podium?"
      },
      options: [
        "Kimi Räikkönen (18 years, 2003-2020)",
        "Fernando Alonso (20+ years, 2003-2024)",
        "Michael Schumacher (19 years, 1992-2012)",
        "Rubens Barrichello (15 years, 1994-2009)"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso's podiums spanned 20+ years from 2003 to 2024, the longest gap, showing remarkable longevity at the highest level.",
        es: "Los podios de Fernando Alonso abarcaron más de 20 años desde 2003 hasta 2024, la brecha más larga, mostrando longevidad notable al más alto nivel.",
        de: "Fernando Alonsos Podien erstreckten sich über 20+ Jahre von 2003 bis 2024, die längste Spanne, zeigte bemerkenswerte Langlebigkeit auf höchstem Niveau.",
        nl: "Fernando Alonso's podiums besloegen 20+ jaar van 2003 tot 2024, de langste kloof, wat opmerkelijke duurzaamheid op het hoogste niveau toont."
      }
    },
    {
      question: {
        en: "What is the record for most qualifying positions improved from grid to first lap completed?",
        es: "¿Cuál es el récord de más posiciones de clasificación mejoradas desde la parrilla hasta la primera vuelta completada?",
        de: "Was ist der Rekord für die meisten vom Grid zur ersten vollendeten Runde verbesserten Qualifyingpositionen?",
        nl: "Wat is het record voor de meeste kwalificatie posities verbeterd van grid tot eerste voltooide ronde?"
      },
      options: [
        "+12 positions (chaos at start)",
        "+8 positions (good first lap)",
        "+15 positions (extreme carnage)",
        "+10 positions (typical maximum)"
      ],
      correct: 2,
      explanation: {
        en: "In chaotic starts with multiple incidents, drivers have gained 15+ positions by lap 1, though exact records vary by era and race circumstances.",
        es: "En salidas caóticas con múltiples incidentes, los pilotos han ganado más de 15 posiciones en la vuelta 1, aunque los récords exactos varían por era y circunstancias de carrera.",
        de: "Bei chaotischen Starts mit mehreren Vorfällen gewannen Fahrer 15+ Positionen bis Runde 1, obwohl genaue Rekorde nach Ära und Rennumständen variieren.",
        nl: "In chaotische starts met meerdere incidenten hebben coureurs 15+ posities gewonnen tegen ronde 1, hoewel exacte records variëren per tijdperk en race omstandigheden."
      }
    },
    {
      question: {
        en: "Which driver has the record for most points scored as a reserve/substitute driver?",
        es: "¿Qué piloto tiene el récord de más puntos anotados como piloto de reserva/sustituto?",
        de: "Welcher Fahrer hat den Rekord für die meisten als Reserve-/Ersatzfahrer erzielten Punkte?",
        nl: "Welke coureur heeft het record voor de meeste punten gescoord als reserve/vervangende coureur?"
      },
      options: [
        "Nico Hulkenberg 2020-2022 (39 points as substitute)",
        "Pedro de la Rosa 2010-2012 (8 points)",
        "Stoffel Vandoorne 2016 (1 point on debut)",
        "Paul di Resta 2017 (0 points)"
      ],
      correct: 0,
      explanation: {
        en: "Nico Hulkenberg scored 39 points across multiple substitute appearances for Racing Point/Aston Martin (2020-2022), the most by a reserve driver.",
        es: "Nico Hulkenberg anotó 39 puntos en múltiples apariciones de sustituto para Racing Point/Aston Martin (2020-2022), los más por un piloto de reserva.",
        de: "Nico Hulkenberg erzielte 39 Punkte über mehrere Ersatzeinsätze für Racing Point/Aston Martin (2020-2022), die meisten eines Ersatzfahrers.",
        nl: "Nico Hulkenberg scoorde 39 punten over meerdere vervangende optredens voor Racing Point/Aston Martin (2020-2022), de meeste door een reserve coureur."
      }
    },
    {
      question: {
        en: "What is the record for most yellow flags shown during a single race?",
        es: "¿Cuál es el récord de más banderas amarillas mostradas durante una sola carrera?",
        de: "Was ist der Rekord für die meisten gelben Flaggen während eines einzelnen Rennens?",
        nl: "Wat is het record voor de meeste gele vlaggen getoond tijdens een enkele race?"
      },
      options: [
        "2011 Canadian GP (over 100 yellow flag periods)",
        "2008 Monaco GP (80+ yellow flags)",
        "2021 Azerbaijan GP (50+ yellow flags)",
        "Yellow flags not officially counted"
      ],
      correct: 3,
      explanation: {
        en: "While yellow flags occur frequently in wet/incident-filled races, they're not officially tallied as a statistic by the FIA, only safety cars are counted.",
        es: "Aunque las banderas amarillas ocurren frecuentemente en carreras húmedas/llenas de incidentes, no se cuentan oficialmente como estadística por la FIA, solo se cuentan safety cars.",
        de: "Während gelbe Flaggen häufig bei nassen/vorfallreichen Rennen auftreten, werden sie von der FIA nicht offiziell als Statistik gezählt, nur Safety Cars werden gezählt.",
        nl: "Hoewel gele vlaggen vaak voorkomen in natte/incident gevulde races, worden ze niet officieel geteld als statistiek door de FIA, alleen safety cars worden geteld."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races finishing exactly where they started?",
        es: "¿Qué piloto tiene el récord de más carreras terminando exactamente donde comenzaron?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen mit Zieleinlauf an der Startposition?",
        nl: "Welke coureur heeft het record voor de meeste races eindigend exact waar ze startten?"
      },
      options: [
        "This is tracked but no clear leader",
        "Nico Rosberg (12 races same position)",
        "Valtteri Bottas (15 races same position)",
        "Lewis Hamilton (8 races same position)"
      ],
      correct: 0,
      explanation: {
        en: "While finishing in starting position happens occasionally, this specific statistic isn't comprehensively tracked across all drivers and eras.",
        es: "Aunque terminar en posición de salida ocurre ocasionalmente, esta estadística específica no se rastrea exhaustivamente en todos los pilotos y eras.",
        de: "Obwohl das Ziel an der Startposition gelegentlich auftritt, wird diese spezifische Statistik nicht umfassend über alle Fahrer und Epochen erfasst.",
        nl: "Hoewel eindigen in startpositie af en toe gebeurt, wordt deze specifieke statistiek niet uitgebreid bijgehouden voor alle coureurs en tijdperken."
      }
    },
    {
      question: {
        en: "What is the record for most fastest laps set in wet/mixed conditions in a career?",
        es: "¿Cuál es el récord de más vueltas rápidas establecidas en condiciones húmedas/mixtas en una carrera?",
        de: "Was ist der Rekord für die meisten bei nassen/gemischten Bedingungen gefahrenen schnellsten Runden in einer Karriere?",
        nl: "Wat is het record voor de meeste snelste rondes gezet in natte/gemengde omstandigheden in een carrière?"
      },
      options: [
        "Michael Schumacher (14 wet fastest laps)",
        "Lewis Hamilton (16+ wet fastest laps)",
        "Ayrton Senna (9 wet fastest laps)",
        "Wet conditions fastest laps not separately tracked"
      ],
      correct: 3,
      explanation: {
        en: "Fastest laps in wet conditions aren't separately categorized in official statistics. Only overall fastest lap counts are recorded regardless of conditions.",
        es: "Las vueltas rápidas en condiciones húmedas no se categorizan por separado en estadísticas oficiales. Solo se registran recuentos generales de vueltas rápidas independientemente de las condiciones.",
        de: "Schnellste Runden bei nassen Bedingungen werden in offiziellen Statistiken nicht separat kategorisiert. Nur die Gesamtzahl schnellster Runden wird unabhängig von Bedingungen erfasst.",
        nl: "Snelste rondes in natte omstandigheden worden niet apart gecategoriseerd in officiële statistieken. Alleen algemene snelste ronde tellingen worden geregistreerd ongeacht omstandigheden."
      }
    },
    {
      question: {
        en: "Which driver holds the record for most races where they were classified despite not finishing?",
        es: "¿Qué piloto tiene el récord de más carreras donde fueron clasificados a pesar de no terminar?",
        de: "Welcher Fahrer hält den Rekord für die meisten Rennen, in denen er klassifiziert wurde, obwohl er nicht ins Ziel kam?",
        nl: "Welke coureur heeft het record voor de meeste races waar ze werden geclassificeerd ondanks niet te finishen?"
      },
      options: [
        "Kimi Räikkönen (45+ classified DNFs)",
        "Fernando Alonso (38 classified DNFs)",
        "Rubens Barrichello (32 classified DNFs)",
        "Depends on 90% distance rule"
      ],
      correct: 3,
      explanation: {
        en: "Drivers are classified if completing 90% race distance. The record varies by era and driver longevity, with longest careers accumulating more.",
        es: "Los pilotos se clasifican si completan el 90% de la distancia de carrera. El récord varía por era y longevidad del piloto, con carreras más largas acumulando más.",
        de: "Fahrer werden klassifiziert, wenn sie 90% der Renndistanz absolvieren. Der Rekord variiert nach Ära und Fahrerlanglebigkeit, längste Karrieren sammeln mehr.",
        nl: "Coureurs worden geclassificeerd als ze 90% race afstand voltooien. Het record varieert per tijdperk en coureur duurzaamheid, met langste carrières meer verzamelend."
      }
    },
    {
      question: {
        en: "What is the record for most laps led by a driver who finished outside the points?",
        es: "¿Cuál es el récord de más vueltas lideradas por un piloto que terminó fuera de los puntos?",
        de: "Was ist der Rekord für die meisten von einem Fahrer geführten Runden, der außerhalb der Punkte landete?",
        nl: "Wat is het record voor de meeste rondes geleid door een coureur die buiten de punten eindigde?"
      },
      options: [
        "58 laps (led most of race, late failure)",
        "42 laps (mechanical issues)",
        "35 laps (strategy backfire)",
        "Varies significantly by race"
      ],
      correct: 3,
      explanation: {
        en: "Drivers have led 50+ laps and finished outside points due to late failures, penalties, or strategy errors. Specific records vary by race incidents.",
        es: "Los pilotos han liderado más de 50 vueltas y terminado fuera de puntos debido a fallas tardías, penalizaciones o errores de estrategia. Los récords específicos varían por incidentes de carrera.",
        de: "Fahrer führten 50+ Runden an und landeten außerhalb der Punkte aufgrund später Ausfälle, Strafen oder Strategiefehlern. Spezifische Rekorde variieren nach Rennvorfällen.",
        nl: "Coureurs hebben 50+ rondes geleid en eindigden buiten de punten door late uitval, straffen of strategie fouten. Specifieke records variëren per race incidenten."
      }
    },
    {
      question: {
        en: "Which constructor achieved their first podium in the shortest time from debut?",
        es: "¿Qué constructor logró su primer podio en el tiempo más corto desde su debut?",
        de: "Welcher Konstrukteur erreichte sein erstes Podium in der kürzesten Zeit ab Debüt?",
        nl: "Welke constructeur behaalde hun eerste podium in de kortste tijd vanaf debuut?"
      },
      options: [
        "Mercedes (podium on debut, 2010)",
        "Haas (8th in debut, podium came later)",
        "Brawn GP (1-2 on debut, 2009)",
        "Red Bull (podium in 3rd race, 2005)"
      ],
      correct: 2,
      explanation: {
        en: "Brawn GP achieved a 1-2 finish on their debut race (Australia 2009), the fastest time to podium for a new constructor, winning the championship that year.",
        es: "Brawn GP logró un final 1-2 en su carrera de debut (Australia 2009), el tiempo más rápido a podio para un nuevo constructor, ganando el campeonato ese año.",
        de: "Brawn GP erreichte einen Doppelsieg bei ihrem Debütrennen (Australien 2009), die schnellste Zeit zum Podium für einen neuen Konstrukteur, gewann die Meisterschaft in diesem Jahr.",
        nl: "Brawn GP behaalde een 1-2 finish bij hun debuut race (Australië 2009), de snelste tijd naar podium voor een nieuwe constructeur, won het kampioenschap dat jaar."
      }
    },
    {
      question: {
        en: "What is the record for most different point-scoring systems a driver competed under?",
        es: "¿Cuál es el récord de más sistemas de puntuación diferentes bajo los que compitió un piloto?",
        de: "Was ist der Rekord für die meisten verschiedenen Punktesysteme, unter denen ein Fahrer antrat?",
        nl: "Wat is het record voor de meeste verschillende punten systemen waaronder een coureur streed?"
      },
      options: [
        "Rubens Barrichello (4 different systems)",
        "Fernando Alonso (5 different systems)",
        "Kimi Räikkönen (4 different systems)",
        "Michael Schumacher (3 different systems)"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso competed under 5 systems: 10-6-4-3-2-1 (2001-2002), 10-8-6-5-4-3-2-1 (2003-2009), 25-18-15... (2010-2018, 2021-present), showing longevity across eras.",
        es: "Fernando Alonso compitió bajo 5 sistemas: 10-6-4-3-2-1 (2001-2002), 10-8-6-5-4-3-2-1 (2003-2009), 25-18-15... (2010-2018, 2021-presente), mostrando longevidad a través de eras.",
        de: "Fernando Alonso trat unter 5 Systemen an: 10-6-4-3-2-1 (2001-2002), 10-8-6-5-4-3-2-1 (2003-2009), 25-18-15... (2010-2018, 2021-heute), zeigte Langlebigkeit über Epochen.",
        nl: "Fernando Alonso streed onder 5 systemen: 10-6-4-3-2-1 (2001-2002), 10-8-6-5-4-3-2-1 (2003-2009), 25-18-15... (2010-2018, 2021-heden), wat duurzaamheid over tijdperken toont."
      }
    },
    {
      question: {
        en: "Which driver has the record for most laps completed in a single race distance?",
        es: "¿Qué piloto tiene el récord de más vueltas completadas en una sola distancia de carrera?",
        de: "Welcher Fahrer hat den Rekord für die meisten in einer einzelnen Renndistanz gefahrenen Runden?",
        nl: "Welke coureur heeft het record voor de meeste rondes voltooid in een enkele race afstand?"
      },
      options: [
        "78 laps (Monaco GP)",
        "71 laps (Brazil GP)",
        "87 laps (old Pescara circuit 1957)",
        "Standard 305km distance varies"
      ],
      correct: 2,
      explanation: {
        en: "The 1957 Pescara GP had 87 laps on a 25.8km circuit, the most laps in a single F1 race, taking over 3 hours to complete.",
        es: "El GP de Pescara 1957 tuvo 87 vueltas en un circuito de 25.8km, las vueltas más en una sola carrera de F1, tomando más de 3 horas completar.",
        de: "Der Pescara GP 1957 hatte 87 Runden auf einer 25,8 km-Strecke, die meisten Runden in einem einzelnen F1-Rennen, dauerte über 3 Stunden.",
        nl: "De 1957 Pescara GP had 87 rondes op een 25,8km circuit, de meeste rondes in een enkele F1 race, duurde meer dan 3 uur."
      }
    },
    {
      question: {
        en: "What is the record for most driver nationalities represented in a single race?",
        es: "¿Cuál es el récord de más nacionalidades de pilotos representadas en una sola carrera?",
        de: "Was ist der Rekord für die meisten in einem einzelnen Rennen vertretenen Fahrernat ionalitäten?",
        nl: "Wat is het record voor de meeste coureur nationaliteiten vertegenwoordigd in een enkele race?"
      },
      options: [
        "18 nationalities (2012 season races)",
        "15 nationalities (typical modern grid)",
        "22 nationalities (never achieved)",
        "20 nationalities (2023 season)"
      ],
      correct: 0,
      explanation: {
        en: "The 2012 season featured up to 18 different nationalities on the grid in single races, one of the most diverse years in F1 history.",
        es: "La temporada 2012 presentó hasta 18 nacionalidades diferentes en la parrilla en carreras individuales, uno de los años más diversos en la historia de F1.",
        de: "Die Saison 2012 hatte bis zu 18 verschiedene Nationalitäten auf dem Grid in einzelnen Rennen, eines der vielfältigsten Jahre in der F1-Geschichte.",
        nl: "Het 2012 seizoen had tot 18 verschillende nationaliteiten op de grid in enkele races, een van de meest diverse jaren in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins with a customer team (non-works)?",
        es: "¿Qué piloto tiene el récord de más victorias con un equipo cliente (no oficial)?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege mit einem Kundenteam (Nicht-Werksteam)?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen met een klant team (niet-fabriek)?"
      },
      options: [
        "Sebastian Vettel with Red Bull (customer Renault, 39 wins)",
        "Daniel Ricciardo with Red Bull (7 wins)",
        "Max Verstappen with Red Bull (54+ wins)",
        "Customer teams rarely win in modern F1"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel won 39 races with Red Bull using customer Renault engines (2009-2013), the most by a driver with a non-works team.",
        es: "Sebastian Vettel ganó 39 carreras con Red Bull usando motores Renault de cliente (2009-2013), las más por un piloto con un equipo no oficial.",
        de: "Sebastian Vettel gewann 39 Rennen mit Red Bull mit Kunden-Renault-Motoren (2009-2013), die meisten eines Fahrers mit einem Nicht-Werksteam.",
        nl: "Sebastian Vettel won 39 races met Red Bull met klant Renault motoren (2009-2013), de meeste door een coureur met een niet-fabriek team."
      }
    },
    {
      question: {
        en: "What is the record for most races held at different configurations of the same venue?",
        es: "¿Cuál es el récord de más carreras realizadas en diferentes configuraciones del mismo lugar?",
        de: "Was ist der Rekord für die meisten Rennen auf verschiedenen Konfigurationen desselben Veranstaltungsortes?",
        nl: "Wat is het record voor de meeste races gehouden op verschillende configuraties van hetzelfde locatie?"
      },
      options: [
        "Nürburgring (3 configurations used)",
        "Silverstone (5 configurations used)",
        "Hockenheim (3 configurations used)",
        "Monza (2 configurations used)"
      ],
      correct: 1,
      explanation: {
        en: "Silverstone has used 5 different track configurations since 1950: various versions of the circuit with different layouts over the decades.",
        es: "Silverstone ha usado 5 configuraciones de pista diferentes desde 1950: varias versiones del circuito con diseños diferentes a lo largo de las décadas.",
        de: "Silverstone nutzte seit 1950 5 verschiedene Streckenkonfigurationen: verschiedene Versionen der Strecke mit unterschiedlichen Layouts über die Jahrzehnte.",
        nl: "Silverstone heeft 5 verschillende circuit configuraties gebruikt sinds 1950: verschillende versies van het circuit met andere lay-outs over de decennia."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races started from pit lane in a career?",
        es: "¿Qué piloto tiene el récord de más carreras iniciadas desde pit lane en una carrera?",
        de: "Welcher Fahrer hat den Rekord für die meisten von der Boxengasse gestarteten Rennen in einer Karriere?",
        nl: "Welke coureur heeft het record voor de meeste races gestart vanaf pit lane in een carrière?"
      },
      options: [
        "Romain Grosjean (8 pit lane starts)",
        "Pastor Maldonado (6 pit lane starts)",
        "Lewis Hamilton (5 pit lane starts)",
        "Sebastian Vettel (7 pit lane starts)"
      ],
      correct: 0,
      explanation: {
        en: "Romain Grosjean started from the pit lane 8 times during his F1 career due to various technical changes and penalties, the most of any driver.",
        es: "Romain Grosjean salió desde pit lane 8 veces durante su carrera de F1 debido a varios cambios técnicos y penalizaciones, las más de cualquier piloto.",
        de: "Romain Grosjean startete 8 Mal von der Boxengasse während seiner F1-Karriere aufgrund verschiedener technischer Änderungen und Strafen, die meisten eines Fahrers.",
        nl: "Romain Grosjean startte 8 keer vanaf de pit lane tijdens zijn F1 carrière door verschillende technische wijzigingen en straffen, de meeste van alle coureurs."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();