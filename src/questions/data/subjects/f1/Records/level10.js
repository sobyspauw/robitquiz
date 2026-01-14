const level10 = (function() {
  const questions = [
    {
      question: {
        en: "What is the exact championship points deficit overcome to win the title in the final race?",
        es: "¿Cuál es el déficit exacto de puntos del campeonato superado para ganar el título en la última carrera?",
        de: "Was ist das genaue Meisterschaftspunkte-Defizit, das überwunden wurde, um den Titel im letzten Rennen zu gewinnen?",
        nl: "Wat is het exacte kampioenschapspunten-tekort overwonnen om de titel in de laatste race te winnen?"
      },
      options: [
        "7 points (Hamilton over Massa 2008)",
        "9 points (Räikkönen over Hamilton/Alonso 2007)",
        "10 points (Lauda over Prost 1984)",
        "13 points (Rosberg over Hamilton 2016)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton overcame a 7-point deficit to Felipe Massa before Brazil 2008, winning the title by 1 point after passing Glock on the final lap.",
        es: "Lewis Hamilton superó un déficit de 7 puntos ante Felipe Massa antes de Brasil 2008, ganando el título por 1 punto después de pasar a Glock en la última vuelta.",
        de: "Lewis Hamilton überwand ein 7-Punkte-Defizit zu Felipe Massa vor Brasilien 2008 und gewann den Titel mit 1 Punkt Vorsprung nach Überholung von Glock in der letzten Runde.",
        nl: "Lewis Hamilton overwon een 7-punten tekort op Felipe Massa vóór Brazilië 2008, won de titel met 1 punt na het passeren van Glock in de laatste ronde."
      }
    },
    {
      question: {
        en: "What is the record for most laps led in a season without winning the championship?",
        es: "¿Cuál es el récord de más vueltas lideradas en una temporada sin ganar el campeonato?",
        de: "Was ist der Rekord für die meisten geführten Runden in einer Saison ohne Meisterschaftsgewinn?",
        nl: "Wat is het record voor de meeste geleidde rondes in een seizoen zonder het kampioenschap te winnen?"
      },
      options: [
        "Felipe Massa 2008: 424 laps led (finished 2nd)",
        "Nico Rosberg 2014: 386 laps led (finished 2nd)",
        "Fernando Alonso 2012: 298 laps led (finished 2nd)",
        "Lewis Hamilton 2007: 312 laps led (finished 2nd)"
      ],
      correct: 0,
      explanation: {
        en: "Felipe Massa led 424 laps in 2008 but lost the championship by 1 point, the most laps led by a driver who didn't win the title.",
        es: "Felipe Massa lideró 424 vueltas en 2008 pero perdió el campeonato por 1 punto, las vueltas más lideradas por un piloto que no ganó el título.",
        de: "Felipe Massa führte 424 Runden 2008, verlor aber die Meisterschaft mit 1 Punkt, die meisten geführten Runden durch einen Fahrer ohne Titelgewinn.",
        nl: "Felipe Massa leidde 424 rondes in 2008 maar verloor het kampioenschap met 1 punt, de meeste geleidde rondes door een coureur die de titel niet won."
      }
    },
    {
      question: {
        en: "What is the record for most race classifications (finishes) by a constructor without a win?",
        es: "¿Cuál es el récord de más clasificaciones de carrera (finales) por un constructor sin una victoria?",
        de: "Was ist der Rekord für die meisten Rennklassifizierungen (Zielankünfte) eines Konstrukteurs ohne Sieg?",
        nl: "Wat is het record voor de meeste raceclassificaties (finishes) door een constructeur zonder overwinning?"
      },
      options: [
        "Force India/Racing Point: 230 classified finishes, 0 wins",
        "Sauber: 450+ classified finishes, 1 win",
        "Haas: 140 classified finishes, 0 wins",
        "Manor/Marussia: 80 classified finishes, 0 wins"
      ],
      correct: 0,
      explanation: {
        en: "Force India (later Racing Point) achieved 230+ classified finishes across their existence (2008-2020) without winning a race, the most finishes without victory.",
        es: "Force India (luego Racing Point) logró 230+ finales clasificados durante su existencia (2008-2020) sin ganar una carrera, los finales más altos sin victoria.",
        de: "Force India (später Racing Point) erreichte 230+ klassifizierte Zielankünfte während ihrer Existenz (2008-2020) ohne Rennsieg, die meisten Finishes ohne Sieg.",
        nl: "Force India (later Racing Point) behaalde 230+ geclassificeerde finishes tijdens hun bestaan (2008-2020) zonder een race te winnen, de meeste finishes zonder overwinning."
      }
    },
    {
      question: {
        en: "What is the narrowest margin of victory in total championship points (modern era)?",
        es: "¿Cuál es el margen de victoria más estrecho en puntos totales del campeonato (era moderna)?",
        de: "Was ist der knappste Siegesvorsprung in gesamten Meisterschaftspunkten (moderne Ära)?",
        nl: "Wat is de kleinste overwinningsvoorsprong in totale kampioenschapspunten (moderne tijdperk)?"
      },
      options: [
        "0.5 points (Lauda vs Prost 1984)",
        "1 point (Hamilton vs Massa 2008)",
        "2 points (Räikkönen vs Hamilton 2007)",
        "3 points (Prost vs Senna 1989)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton beat Felipe Massa by exactly 1 point in 2008 (98-97), the narrowest championship margin in the modern points system.",
        es: "Lewis Hamilton venció a Felipe Massa por exactamente 1 punto en 2008 (98-97), el margen de campeonato más estrecho en el sistema de puntos moderno.",
        de: "Lewis Hamilton schlug Felipe Massa mit exakt 1 Punkt 2008 (98-97), der knappste Meisterschaftsvorsprung im modernen Punktesystem.",
        nl: "Lewis Hamilton versloeg Felipe Massa met precies 1 punt in 2008 (98-97), de kleinste kampioenschapsvoorsprong in het moderne puntensysteem."
      }
    },
    {
      question: {
        en: "What is the record for most different scoring systems raced under by a single driver?",
        es: "¿Cuál es el récord de más sistemas de puntuación diferentes bajo los que corrió un solo piloto?",
        de: "Was ist der Rekord für die meisten verschiedenen Punktesysteme, unter denen ein einzelner Fahrer fuhr?",
        nl: "Wat is het record voor de meeste verschillende puntensystemen waaronder een enkele coureur racete?"
      },
      options: [
        "Rubens Barrichello: 4 systems (10-6-4-3-2-1, 10-8-6..., 25-18-15..., 25-18-15... with FL)",
        "Kimi Räikkönen: 4 systems (same as above)",
        "Fernando Alonso: 3 systems (10-8-6..., 25-18-15..., 25-18-15... with FL)",
        "Michael Schumacher: 4 systems (9-6-4..., 10-6-4..., 10-8-6..., 25-18-15...)"
      ],
      correct: 0,
      explanation: {
        en: "Rubens Barrichello raced under 4 different F1 points systems from 1993-2011, spanning the evolution from 10-6-4 to modern 25-18-15 scoring.",
        es: "Rubens Barrichello corrió bajo 4 sistemas de puntos de F1 diferentes de 1993-2011, abarcando la evolución de 10-6-4 a la puntuación moderna 25-18-15.",
        de: "Rubens Barrichello fuhr unter 4 verschiedenen F1-Punktesystemen von 1993-2011, umfassend die Evolution von 10-6-4 zu modernem 25-18-15-Scoring.",
        nl: "Rubens Barrichello racete onder 4 verschillende F1-puntensystemen van 1993-2011, over de evolutie van 10-6-4 naar moderne 25-18-15 scoring."
      }
    },
    {
      question: {
        en: "What is the record for fastest pit stop time in F1 history (official stationary time)?",
        es: "¿Cuál es el récord del pit stop más rápido en la historia de F1 (tiempo estacionario oficial)?",
        de: "Was ist der Rekord für die schnellste Boxenstoppzeit in der F1-Geschichte (offizielle Standzeit)?",
        nl: "Wat is het record voor snelste pitstop-tijd in F1-geschiedenis (officiële stationaire tijd)?"
      },
      options: [
        "Red Bull Racing Brazil 2019: 1.82 seconds (Verstappen)",
        "Williams Canada 2016: 1.92 seconds (Bottas)",
        "McLaren Germany 2012: 2.31 seconds (Button)",
        "Ferrari Bahrain 2018: 1.96 seconds (Räikkönen)"
      ],
      correct: 0,
      explanation: {
        en: "Red Bull Racing achieved a 1.82-second pit stop for Max Verstappen at Brazil 2019, the fastest official stationary pit stop in F1 history.",
        es: "Red Bull Racing logró un pit stop de 1.82 segundos para Max Verstappen en Brasil 2019, el pit stop estacionario oficial más rápido en la historia de F1.",
        de: "Red Bull Racing erreichte einen 1,82-Sekunden-Boxenstopp für Max Verstappen in Brasilien 2019, der schnellste offizielle stationäre Boxenstopp in der F1-Geschichte.",
        nl: "Red Bull Racing behaalde een 1,82-seconden pitstop voor Max Verstappen in Brazilië 2019, de snelste officiële stationaire pitstop in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most driver championships won with different teams?",
        es: "¿Cuál es el récord de más campeonatos de pilotos ganados con diferentes equipos?",
        de: "Was ist der Rekord für die meisten Fahrer-Meisterschaften mit verschiedenen Teams gewonnen?",
        nl: "Wat is het record voor de meeste rijderskampioenschappen gewonnen met verschillende teams?"
      },
      options: [
        "Juan Manuel Fangio: 5 titles with 4 teams (Alfa, Mercedes, Ferrari, Maserati)",
        "Alain Prost: 4 titles with 2 teams (McLaren, Williams)",
        "Niki Lauda: 3 titles with 2 teams (Ferrari, McLaren)",
        "Lewis Hamilton: 7 titles with 2 teams (McLaren, Mercedes)"
      ],
      correct: 0,
      explanation: {
        en: "Juan Manuel Fangio won 5 championships with 4 different teams: Alfa Romeo (1951), Mercedes (1954-55), Ferrari (1956), and Maserati (1957).",
        es: "Juan Manuel Fangio ganó 5 campeonatos con 4 equipos diferentes: Alfa Romeo (1951), Mercedes (1954-55), Ferrari (1956) y Maserati (1957).",
        de: "Juan Manuel Fangio gewann 5 Meisterschaften mit 4 verschiedenen Teams: Alfa Romeo (1951), Mercedes (1954-55), Ferrari (1956) und Maserati (1957).",
        nl: "Juan Manuel Fangio won 5 kampioenschappen met 4 verschillende teams: Alfa Romeo (1951), Mercedes (1954-55), Ferrari (1956) en Maserati (1957)."
      }
    },
    {
      question: {
        en: "What is the record for most constructors' points scored in a single race weekend?",
        es: "¿Cuál es el récord de más puntos de constructores anotados en un solo fin de semana de carrera?",
        de: "Was ist der Rekord für die meisten Konstrukteurspunkte an einem einzelnen Rennwochenende?",
        nl: "Wat is het record voor de meeste constructeurspunten gescoord in een enkel raceweekend?"
      },
      options: [
        "Red Bull 2023 sprint weekend: 59 points (1-2 in sprint, 1-2 in race, both FL)",
        "Mercedes 2016: 43 points (1-2 finish)",
        "Ferrari 2002: 28 points (1-2 finish, old system)",
        "McLaren 1988: 18 points (1-2 finish, old system)"
      ],
      correct: 0,
      explanation: {
        en: "Red Bull scored 59 points at sprint weekends in 2023 with perfect 1-2 finishes: sprint 1-2 (16pts), race 1-2 (43pts including fastest laps).",
        es: "Red Bull anotó 59 puntos en fines de semana sprint en 2023 con finales 1-2 perfectos: sprint 1-2 (16pts), carrera 1-2 (43pts incluyendo vueltas rápidas).",
        de: "Red Bull erzielte 59 Punkte an Sprint-Wochenenden 2023 mit perfekten 1-2-Zieleinläufen: Sprint 1-2 (16 Pkt.), Rennen 1-2 (43 Pkt. inkl. schnellster Runden).",
        nl: "Red Bull scoorde 59 punten op sprint-weekenden in 2023 met perfecte 1-2 finishes: sprint 1-2 (16pts), race 1-2 (43pts inclusief snelste rondes)."
      }
    },
    {
      question: {
        en: "What is the record for highest percentage of available points scored in a championship season?",
        es: "¿Cuál es el récord del porcentaje más alto de puntos disponibles anotados en una temporada de campeonato?",
        de: "Was ist der Rekord für den höchsten Prozentsatz verfügbarer Punkte in einer Meisterschaftssaison?",
        nl: "Wat is het record voor hoogste percentage beschikbare punten gescoord in een kampioenschapsseizoen?"
      },
      options: [
        "Max Verstappen 2023: 87.1% of available points (575/660)",
        "Michael Schumacher 2002: 86.2% of available points (144/170)",
        "Sebastian Vettel 2013: 82.4% of available points (397/475)",
        "Lewis Hamilton 2020: 79.8% of available points (347/442)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen scored 575 of 660 possible points in 2023 (87.1%), the highest percentage of available championship points in F1 history.",
        es: "Max Verstappen anotó 575 de 660 puntos posibles en 2023 (87.1%), el porcentaje más alto de puntos de campeonato disponibles en la historia de F1.",
        de: "Max Verstappen erzielte 575 von 660 möglichen Punkten 2023 (87,1%), der höchste Prozentsatz verfügbarer Meisterschaftspunkte in der F1-Geschichte.",
        nl: "Max Verstappen scoorde 575 van 660 mogelijke punten in 2023 (87,1%), het hoogste percentage beschikbare kampioenschapspunten in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most races led at some point by a driver in a winless season?",
        es: "¿Cuál es el récord de más carreras lideradas en algún momento por un piloto en una temporada sin victorias?",
        de: "Was ist der Rekord für die meisten Rennen irgendwann geführt durch einen Fahrer in einer sieglosen Saison?",
        nl: "Wat is het record voor de meeste races op enig moment geleid door een coureur in een winnerloos seizoen?"
      },
      options: [
        "Valtteri Bottas 2021: 6 races led, 0 wins",
        "Felipe Massa 2013: 4 races led, 0 wins",
        "Nico Rosberg 2013: 5 races led, 0 wins",
        "Sergio Perez 2016: 3 races led, 0 wins"
      ],
      correct: 0,
      explanation: {
        en: "Valtteri Bottas led 6 different races at various points in 2021 but failed to win any, the most races led without converting to victory in a season.",
        es: "Valtteri Bottas lideró 6 carreras diferentes en varios momentos en 2021 pero no ganó ninguna, las carreras más lideradas sin convertir en victoria en una temporada.",
        de: "Valtteri Bottas führte 6 verschiedene Rennen zu verschiedenen Zeitpunkten 2021, gewann aber keines, die meisten geführten Rennen ohne Sieg in einer Saison.",
        nl: "Valtteri Bottas leidde 6 verschillende races op verschillende momenten in 2021 maar won er geen, de meeste geleidde races zonder conversie naar overwinning in een seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most race wins by an engine manufacturer in their debut season?",
        es: "¿Cuál es el récord de más victorias de carrera por un fabricante de motores en su temporada de debut?",
        de: "Was ist der Rekord für die meisten Rennsiege eines Motorenherstellers in seiner Debütsaison?",
        nl: "Wat is het record voor de meeste raceoverwinningen door een motorfabrikant in hun debuutseizoen?"
      },
      options: [
        "Honda 2015: 0 wins (McLaren partnership)",
        "Renault 1977: 0 wins (debut turbo era)",
        "BMW 2000: 0 wins (Williams partnership)",
        "Mercedes 1954: 9 wins (Fangio/Herrmann)"
      ],
      correct: 3,
      explanation: {
        en: "Mercedes won 9 of 10 races in their debut 1954 season with Fangio and Kling, the most dominant manufacturer debut in F1 history.",
        es: "Mercedes ganó 9 de 10 carreras en su temporada de debut de 1954 con Fangio y Kling, el debut de fabricante más dominante en la historia de F1.",
        de: "Mercedes gewann 9 von 10 Rennen in ihrer Debütsaison 1954 mit Fangio und Kling, das dominanteste Hersteller-Debüt in der F1-Geschichte.",
        nl: "Mercedes won 9 van 10 races in hun debuutseizoen 1954 met Fangio en Kling, het meest dominante fabrikant-debuut in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most championship-deciding races at the final Grand Prix?",
        es: "¿Cuál es el récord de más carreras decisivas del campeonato en el último Gran Premio?",
        de: "Was ist der Rekord für die meisten meisterschaftsentscheidenden Rennen beim letzten Grand Prix?",
        nl: "Wat is het record voor de meeste kampioenschap-beslissende races bij de laatste Grand Prix?"
      },
      options: [
        "31 times (out of 74 championships to 2023)",
        "28 times (out of 74 championships to 2023)",
        "35 times (out of 74 championships to 2023)",
        "24 times (out of 74 championships to 2023)"
      ],
      correct: 0,
      explanation: {
        en: "The championship has been decided at the final race 31 times in 74 seasons (42%), including dramatic finales like 2008, 2010, 2012, 2021.",
        es: "El campeonato se ha decidido en la última carrera 31 veces en 74 temporadas (42%), incluyendo finales dramáticos como 2008, 2010, 2012, 2021.",
        de: "Die Meisterschaft wurde 31 Mal in 74 Saisons (42%) im letzten Rennen entschieden, einschließlich dramatischer Finales wie 2008, 2010, 2012, 2021.",
        nl: "Het kampioenschap is 31 keer beslist in de laatste race in 74 seizoenen (42%), inclusief dramatische finales zoals 2008, 2010, 2012, 2021."
      }
    },
    {
      question: {
        en: "What is the record for most laps completed by all drivers combined in a single race?",
        es: "¿Cuál es el récord de más vueltas completadas por todos los pilotos combinados en una sola carrera?",
        de: "Was ist der Rekord für die meisten absolvierten Runden aller Fahrer kombiniert in einem einzelnen Rennen?",
        nl: "Wat is het record voor de meeste voltooide rondes door alle coureurs gecombineerd in een enkele race?"
      },
      options: [
        "Malaysia 2001: 1,142 laps (56-lap race, 26 starters, 11 finishers)",
        "Australia 2016: 1,268 laps (57-lap race, 22 starters, 15 finishers)",
        "Brazil 2012: 1,301 laps (71-lap race, 24 starters, 18 finishers)",
        "Monaco 2011: 1,124 laps (78-lap race, 24 starters, 16 finishers)"
      ],
      correct: 2,
      explanation: {
        en: "Brazil 2012 saw 1,301 total laps completed by all drivers (71-lap race, 24 starters, 18 classified finishers), the most combined laps in a race.",
        es: "Brasil 2012 vio 1,301 vueltas totales completadas por todos los pilotos (carrera de 71 vueltas, 24 iniciadores, 18 finalizadores clasificados), las vueltas combinadas más altas en una carrera.",
        de: "Brasilien 2012 sah 1.301 Gesamtrunden aller Fahrer (71-Runden-Rennen, 24 Starter, 18 klassifizierte Finisher), die meisten kombinierten Runden in einem Rennen.",
        nl: "Brazilië 2012 zag 1.301 totale rondes voltooid door alle coureurs (71-rondes race, 24 starters, 18 geclassificeerde finishers), de meeste gecombineerde rondes in een race."
      }
    },
    {
      question: {
        en: "What is the record for most positions lost from start to finish in a points-scoring race?",
        es: "¿Cuál es el récord de más posiciones perdidas desde la salida hasta el final en una carrera de puntuación?",
        de: "Was ist der Rekord für die meisten verlorenen Positionen vom Start bis zum Ziel in einem Punkte-Rennen?",
        nl: "Wat is het record voor de meeste posities verloren van start tot finish in een punten-scorende race?"
      },
      options: [
        "Lewis Hamilton Monaco 2016: Started 1st, finished 7th (-6, scored 6 points)",
        "Kimi Räikkönen Singapore 2008: Started 1st, finished 13th (no points)",
        "Sebastian Vettel Malaysia 2016: Started 1st, finished 16th (no points)",
        "Max Verstappen Monaco 2015: Started 5th, finished 8th (-3, scored 4 points)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton started from pole at Monaco 2016 but finished 7th (losing 6 positions) while still scoring 6 points, the most positions lost while scoring.",
        es: "Lewis Hamilton comenzó desde pole en Mónaco 2016 pero terminó 7º (perdiendo 6 posiciones) mientras aún anotaba 6 puntos, las posiciones más perdidas mientras puntuaba.",
        de: "Lewis Hamilton startete von der Pole in Monaco 2016, wurde aber 7. (6 Positionen verloren) und punktete noch 6 Punkte, die meisten verlorenen Positionen mit Punkten.",
        nl: "Lewis Hamilton startte vanaf pole in Monaco 2016 maar eindigde 7e (verloor 6 posities) terwijl hij nog 6 punten scoorde, de meeste verloren posities terwijl scorend."
      }
    },
    {
      question: {
        en: "What is the record for youngest driver pairing (combined age) to finish 1-2?",
        es: "¿Cuál es el récord de pareja de pilotos más joven (edad combinada) para terminar 1-2?",
        de: "Was ist der Rekord für das jüngste Fahrerpaar (kombiniertes Alter) mit 1-2-Zieleinlauf?",
        nl: "Wat is het record voor jongste coureurskoppeling (gecombineerde leeftijd) om 1-2 te eindigen?"
      },
      options: [
        "Verstappen-Leclerc Austria 2019: 43 years 265 days combined",
        "Vettel-Webber Japan 2009: 54 years 103 days combined",
        "Hamilton-Alonso USA 2007: 47 years 224 days combined",
        "Verstappen-Gasly Brazil 2019: 46 years 98 days combined"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen (21y 292d) and Charles Leclerc (21y 338d) finished 1-2 at Austria 2019, combined age 43 years 265 days, the youngest 1-2 pairing.",
        es: "Max Verstappen (21a 292d) y Charles Leclerc (21a 338d) terminaron 1-2 en Austria 2019, edad combinada 43 años 265 días, la pareja 1-2 más joven.",
        de: "Max Verstappen (21J 292T) und Charles Leclerc (21J 338T) wurden 1-2 in Österreich 2019, kombiniertes Alter 43 Jahre 265 Tage, das jüngste 1-2-Paar.",
        nl: "Max Verstappen (21j 292d) en Charles Leclerc (21j 338d) eindigden 1-2 in Oostenrijk 2019, gecombineerde leeftijd 43 jaar 265 dagen, de jongste 1-2 koppeling."
      }
    },
    {
      question: {
        en: "What is the record for most constructors represented on podium in a single season?",
        es: "¿Cuál es el récord de más constructores representados en el podio en una sola temporada?",
        de: "Was ist der Rekord für die meisten auf dem Podium vertretenen Konstrukteure in einer einzelnen Saison?",
        nl: "Wat is het record voor de meeste constructeurs vertegenwoordigd op het podium in een enkel seizoen?"
      },
      options: [
        "2012: 9 different constructors on podium",
        "1982: 11 different constructors on podium",
        "2003: 7 different constructors on podium",
        "2021: 6 different constructors on podium"
      ],
      correct: 1,
      explanation: {
        en: "The 1982 season had 11 different constructors reach the podium, the most diverse podium representation in F1 history during the turbo transition.",
        es: "La temporada 1982 tuvo 11 constructores diferentes alcanzando el podio, la representación de podio más diversa en la historia de F1 durante la transición turbo.",
        de: "Die Saison 1982 hatte 11 verschiedene Konstrukteure auf dem Podium, die vielfältigste Podiumsvertretung in der F1-Geschichte während des Turbo-Übergangs.",
        nl: "Het seizoen 1982 had 11 verschillende constructeurs het podium bereiken, de meest diverse podiumvertegenwoordiging in F1-geschiedenis tijdens de turbo-transitie."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive races with a different pole sitter?",
        es: "¿Cuál es el récord de más carreras consecutivas con un poleman diferente?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennen mit verschiedenen Polesittern?",
        nl: "Wat is het record voor de meeste opeenvolgende races met een verschillende polesitter?"
      },
      options: [
        "10 consecutive races (2012 season start)",
        "8 consecutive races (1982 season)",
        "7 consecutive races (2003 mid-season)",
        "6 consecutive races (1999 mid-season)"
      ],
      correct: 0,
      explanation: {
        en: "The 2012 season started with 10 consecutive races having different pole sitters, matching the record for different winners in that unprecedented season.",
        es: "La temporada 2012 comenzó con 10 carreras consecutivas teniendo diferentes polemen, igualando el récord de diferentes ganadores en esa temporada sin precedentes.",
        de: "Die Saison 2012 startete mit 10 aufeinanderfolgenden Rennen mit verschiedenen Polesittern, passend zum Rekord verschiedener Sieger in dieser beispiellosen Saison.",
        nl: "Het seizoen 2012 begon met 10 opeenvolgende races met verschillende polesitters, passend bij het record voor verschillende winnaars in dat ongekende seizoen."
      }
    },
    {
      question: {
        en: "What is the record for oldest driver to achieve a fastest lap?",
        es: "¿Cuál es el récord del piloto más viejo en lograr una vuelta rápida?",
        de: "Was ist der Rekord für den ältesten Fahrer, der eine schnellste Runde erzielte?",
        nl: "Wat is het record voor oudste coureur om een snelste ronde te behalen?"
      },
      options: [
        "Kimi Räikkönen USA 2021: 41 years 319 days",
        "Fernando Alonso Monaco 2023: 41 years 307 days",
        "Michael Schumacher Belgium 2011: 42 years 165 days",
        "Nigel Mansell Australia 1994: 40 years 321 days"
      ],
      correct: 2,
      explanation: {
        en: "Michael Schumacher set the fastest lap at Belgium 2011 aged 42 years 165 days, the oldest driver to achieve a fastest lap in F1 history.",
        es: "Michael Schumacher estableció la vuelta rápida en Bélgica 2011 con 42 años 165 días, el piloto más viejo en lograr una vuelta rápida en la historia de F1.",
        de: "Michael Schumacher fuhr die schnellste Runde in Belgien 2011 im Alter von 42 Jahren 165 Tagen, der älteste Fahrer mit schnellster Runde in der F1-Geschichte.",
        nl: "Michael Schumacher reed de snelste ronde in België 2011 op 42 jaar en 165 dagen, de oudste coureur om een snelste ronde te behalen in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most grid penalties served in a single season by a driver?",
        es: "¿Cuál es el récord de más penalizaciones de parrilla cumplidas en una sola temporada por un piloto?",
        de: "Was ist der Rekord für die meisten Gridstrafen in einer einzelnen Saison durch einen Fahrer?",
        nl: "Wat is het record voor de meeste gridstraffen uitgezeten in een enkel seizoen door een coureur?"
      },
      options: [
        "Fernando Alonso 2015: 105 grid places",
        "Carlos Sainz 2022: 140 grid places",
        "Max Verstappen 2018: 35 grid places",
        "Yuki Tsunoda 2021: 65 grid places"
      ],
      correct: 1,
      explanation: {
        en: "Carlos Sainz accumulated 140 grid place penalties in 2022 due to multiple power unit changes, the most grid penalties in a single season.",
        es: "Carlos Sainz acumuló 140 lugares de penalización de parrilla en 2022 debido a múltiples cambios de unidad de potencia, las penalizaciones de parrilla más altas en una sola temporada.",
        de: "Carlos Sainz sammelte 140 Gridstrafen-Plätze 2022 aufgrund mehrerer Power-Unit-Wechsel, die meisten Gridstrafen in einer einzelnen Saison.",
        nl: "Carlos Sainz verzamelde 140 gridstraf-plaatsen in 2022 door meerdere power unit-wissels, de meeste gridstraffen in een enkel seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most races between teammates finishing 1-2 in consecutive order?",
        es: "¿Cuál es el récord de más carreras entre compañeros de equipo terminando 1-2 en orden consecutivo?",
        de: "Was ist der Rekord für die meisten Rennen mit Teamkollegen-1-2-Zieleinläufen in Folge?",
        nl: "Wat is het record voor de meeste races tussen teamgenoten eindigend 1-2 in opeenvolgende volgorde?"
      },
      options: [
        "Mercedes 2015: 5 consecutive 1-2 finishes (Hamilton-Rosberg)",
        "Ferrari 2002: 7 consecutive 1-2 finishes (Schumacher-Barrichello)",
        "Red Bull 2011: 4 consecutive 1-2 finishes (Vettel-Webber)",
        "McLaren 1988: 6 consecutive 1-2 finishes (Senna-Prost)"
      ],
      correct: 1,
      explanation: {
        en: "Ferrari achieved 7 consecutive 1-2 finishes in 2002 (Malaysia through France), the longest streak of teammate 1-2 finishes in F1 history.",
        es: "Ferrari logró 7 finales 1-2 consecutivos en 2002 (Malasia hasta Francia), la racha más larga de finales 1-2 de compañeros en la historia de F1.",
        de: "Ferrari erreichte 7 aufeinanderfolgende 1-2-Zieleinläufe 2002 (Malaysia bis Frankreich), die längste Serie von Teamkollegen-1-2-Zieleinläufen in der F1-Geschichte.",
        nl: "Ferrari behaalde 7 opeenvolgende 1-2 finishes in 2002 (Maleisië tot Frankrijk), de langste reeks teamgenoot-1-2 finishes in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for longest race duration (time elapsed) in F1 history?",
        es: "¿Cuál es el récord de duración de carrera más larga (tiempo transcurrido) en la historia de F1?",
        de: "Was ist der Rekord für die längste Renndauer (verstrichene Zeit) in der F1-Geschichte?",
        nl: "Wat is het record voor langste raceduur (verstreken tijd) in F1-geschiedenis?"
      },
      options: [
        "Canada 2011: 4 hours 4 minutes 39 seconds",
        "Monaco 2008: 2 hours 18 minutes 25 seconds",
        "Brazil 2003: 3 hours 14 minutes 28 seconds",
        "Malaysia 2009: 2 hours 1 minute 36 seconds"
      ],
      correct: 0,
      explanation: {
        en: "The 2011 Canadian Grand Prix lasted 4 hours 4 minutes 39 seconds due to a 2-hour red flag for rain, the longest race in F1 history.",
        es: "El Gran Premio de Canadá 2011 duró 4 horas 4 minutos 39 segundos debido a una bandera roja de 2 horas por lluvia, la carrera más larga en la historia de F1.",
        de: "Der Kanadische Grand Prix 2011 dauerte 4 Stunden 4 Minuten 39 Sekunden aufgrund einer 2-stündigen roten Flagge wegen Regen, das längste Rennen in der F1-Geschichte.",
        nl: "De Canadese Grand Prix 2011 duurde 4 uur 4 minuten 39 seconden door een 2 uur rode vlag voor regen, de langste race in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most fastest laps without a pole position in a career?",
        es: "¿Cuál es el récord de más vueltas rápidas sin una pole position en una carrera?",
        de: "Was ist der Rekord für die meisten schnellsten Runden ohne Pole-Position in einer Karriere?",
        nl: "Wat is het record voor de meeste snelste rondes zonder poleposition in een carrière?"
      },
      options: [
        "Carlos Reutemann: 6 fastest laps, 6 poles",
        "Clay Regazzoni: 5 fastest laps, 4 poles",
        "Andrea de Cesaris: 0 fastest laps, 1 pole",
        "Derek Warwick: 2 fastest laps, 0 poles"
      ],
      correct: 3,
      explanation: {
        en: "Derek Warwick scored 2 fastest laps (1984 Dallas, 1985 Britain) without ever taking a pole position in his 147-race career.",
        es: "Derek Warwick anotó 2 vueltas rápidas (1984 Dallas, 1985 Gran Bretaña) sin lograr nunca una pole position en su carrera de 147 carreras.",
        de: "Derek Warwick erzielte 2 schnellste Runden (1984 Dallas, 1985 Großbritannien) ohne jemals eine Pole-Position in seiner 147-Rennen-Karriere zu nehmen.",
        nl: "Derek Warwick scoorde 2 snelste rondes (1984 Dallas, 1985 Groot-Brittannië) zonder ooit een poleposition te behalen in zijn 147-race carrière."
      }
    },
    {
      question: {
        en: "What is the record for most wins by a constructor in their final season before leaving F1?",
        es: "¿Cuál es el récord de más victorias de un constructor en su última temporada antes de dejar F1?",
        de: "Was ist der Rekord für die meisten Siege eines Konstrukteurs in seiner letzten Saison vor dem F1-Ausstieg?",
        nl: "Wat is het record voor de meeste overwinningen door een constructeur in hun laatste seizoen voor het verlaten van F1?"
      },
      options: [
        "Honda 2008: 1 win (Barrichello, Italy)",
        "BMW Sauber 2009: 0 wins",
        "Toyota 2009: 0 wins",
        "Stewart 1999: 1 win (Barrichello, Europe)"
      ],
      correct: 0,
      explanation: {
        en: "Honda (as constructor) won once in 2008 (Barrichello at Monza) before withdrawing, then the team became Brawn GP and won both 2009 titles.",
        es: "Honda (como constructor) ganó una vez en 2008 (Barrichello en Monza) antes de retirarse, luego el equipo se convirtió en Brawn GP y ganó ambos títulos 2009.",
        de: "Honda (als Konstrukteur) gewann einmal 2008 (Barrichello in Monza) vor dem Rückzug, dann wurde das Team Brawn GP und gewann beide 2009-Titel.",
        nl: "Honda (als constructeur) won eenmaal in 2008 (Barrichello in Monza) voor terugtrekking, toen werd het team Brawn GP en won beide 2009-titels."
      }
    },
    {
      question: {
        en: "What is the record for most race retirements in a season while still finishing top 3 in championship?",
        es: "¿Cuál es el récord de más abandonos de carrera en una temporada mientras aún termina en el top 3 del campeonato?",
        de: "Was ist der Rekord für die meisten Rennausfälle in einer Saison bei Top-3-Platzierung in der Meisterschaft?",
        nl: "Wat is het record voor de meeste race-uitvalbeurten in een seizoen terwijl nog steeds eindigend in top 3 in kampioenschap?"
      },
      options: [
        "Kimi Räikkönen 2005: 7 DNFs (finished 2nd)",
        "Fernando Alonso 2006: 4 DNFs (finished 1st)",
        "Lewis Hamilton 2007: 2 DNFs (finished 2nd)",
        "Felipe Massa 2008: 3 DNFs (finished 2nd)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen suffered 7 retirements in 2005 yet still finished 2nd in the championship with 7 wins, the most DNFs while finishing top 3.",
        es: "Kimi Räikkönen sufrió 7 abandonos en 2005 pero aún terminó 2º en el campeonato con 7 victorias, los DNFs más altos mientras termina en el top 3.",
        de: "Kimi Räikkönen hatte 7 Ausfälle 2005, wurde aber dennoch 2. in der Meisterschaft mit 7 Siegen, die meisten DNFs bei Top-3-Platzierung.",
        nl: "Kimi Räikkönen had 7 uitvalbeurten in 2005 maar eindigde nog steeds 2e in het kampioenschap met 7 overwinningen, de meeste DNFs terwijl eindigend in top 3."
      }
    },
    {
      question: {
        en: "What is the record for most pole-to-flag victories (led every lap) in a career?",
        es: "¿Cuál es el récord de más victorias de pole a bandera (lideró cada vuelta) en una carrera?",
        de: "Was ist der Rekord für die meisten Pole-to-Flag-Siege (jede Runde geführt) in einer Karriere?",
        nl: "Wat is het record voor de meeste pole-naar-vlag overwinningen (elke ronde geleid) in een carrière?"
      },
      options: [
        "Michael Schumacher: 40 pole-to-flag wins",
        "Ayrton Senna: 29 pole-to-flag wins",
        "Jim Clark: 18 pole-to-flag wins",
        "Lewis Hamilton: 38 pole-to-flag wins"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher led every lap from pole to victory 40 times in his career, the most dominant pole-to-flag wins in F1 history.",
        es: "Michael Schumacher lideró cada vuelta desde pole hasta victoria 40 veces en su carrera, las victorias de pole a bandera más dominantes en la historia de F1.",
        de: "Michael Schumacher führte 40 Mal in seiner Karriere jede Runde von Pole zu Sieg, die meisten dominanten Pole-to-Flag-Siege in der F1-Geschichte.",
        nl: "Michael Schumacher leidde elke ronde van pole naar overwinning 40 keer in zijn carrière, de meest dominante pole-naar-vlag overwinningen in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most different circuits at which a driver scored points?",
        es: "¿Cuál es el récord de más circuitos diferentes en los que un piloto puntuó?",
        de: "Was ist der Rekord für die meisten verschiedenen Rennstrecken, auf denen ein Fahrer punktete?",
        nl: "Wat is het record voor de meeste verschillende circuits waarop een coureur punten scoorde?"
      },
      options: [
        "Fernando Alonso: 60+ different circuits",
        "Kimi Räikkönen: 58+ different circuits",
        "Lewis Hamilton: 62+ different circuits",
        "Sebastian Vettel: 55+ different circuits"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso has scored points at 60+ different circuits across his 22+ year career, the most diverse points-scoring record in F1 history.",
        es: "Fernando Alonso ha puntuado en 60+ circuitos diferentes en su carrera de 22+ años, el récord de puntuación más diverso en la historia de F1.",
        de: "Fernando Alonso hat auf 60+ verschiedenen Rennstrecken während seiner 22+ Jahre langen Karriere gepunktet, das vielfältigste Punkte-Scoring-Rekord in der F1-Geschichte.",
        nl: "Fernando Alonso heeft punten gescoord op 60+ verschillende circuits gedurende zijn 22+ jaar carrière, het meest diverse punten-scorende record in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most wins without leading the most laps in a season?",
        es: "¿Cuál es el récord de más victorias sin liderar la mayoría de las vueltas en una temporada?",
        de: "Was ist der Rekord für die meisten Siege ohne die meisten Runden zu führen in einer Saison?",
        nl: "Wat is het record voor de meeste overwinningen zonder de meeste rondes te leiden in een seizoen?"
      },
      options: [
        "Jenson Button 2009: 6 wins (led 136 laps total)",
        "Nico Rosberg 2016: 9 wins (led 298 laps, Hamilton led 403)",
        "Fernando Alonso 2006: 7 wins (led 312 laps, Schumacher led 459)",
        "Kimi Räikkönen 2007: 6 wins (led 254 laps, Hamilton led 388)"
      ],
      correct: 1,
      explanation: {
        en: "Nico Rosberg won 9 races and the 2016 championship despite leading fewer total laps (298) than teammate Lewis Hamilton (403 laps led).",
        es: "Nico Rosberg ganó 9 carreras y el campeonato 2016 a pesar de liderar menos vueltas totales (298) que su compañero Lewis Hamilton (403 vueltas lideradas).",
        de: "Nico Rosberg gewann 9 Rennen und die Meisterschaft 2016 trotz weniger geführter Gesamtrunden (298) als Teamkollege Lewis Hamilton (403 geführte Runden).",
        nl: "Nico Rosberg won 9 races en het 2016-kampioenschap ondanks minder totale rondes leiden (298) dan teamgenoot Lewis Hamilton (403 geleidde rondes)."
      }
    },
    {
      question: {
        en: "What is the record for most race starts by a driver who never qualified in top 10?",
        es: "¿Cuál es el récord de más salidas de carrera por un piloto que nunca clasificó en el top 10?",
        de: "Was ist der Rekord für die meisten Rennstarts eines Fahrers, der nie in den Top 10 qualifizierte?",
        nl: "Wat is het record voor de meeste racestarts door een coureur die nooit in de top 10 kwalificeerde?"
      },
      options: [
        "Taki Inoue: 18 starts, best grid 16th",
        "Pedro Diniz: 98 starts, best grid 6th",
        "Gastón Mazzacane: 21 starts, best grid 14th",
        "Narain Karthikeyan: 48 starts, best grid 4th"
      ],
      correct: 2,
      explanation: {
        en: "Gastón Mazzacane made 21 race starts in 2000-2001 with a best qualifying of 14th, never reaching the top 10 on the grid in his career.",
        es: "Gastón Mazzacane hizo 21 salidas de carrera en 2000-2001 con una mejor clasificación de 14º, nunca alcanzando el top 10 en la parrilla en su carrera.",
        de: "Gastón Mazzacane hatte 21 Rennstarts 2000-2001 mit bester Qualifikation als 14., erreichte nie die Top 10 im Grid in seiner Karriere.",
        nl: "Gastón Mazzacane maakte 21 racestarts in 2000-2001 met een beste kwalificatie van 14e, bereikte nooit de top 10 op de grid in zijn carrière."
      }
    },
    {
      question: {
        en: "What is the record for most laps completed without being classified in a race?",
        es: "¿Cuál es el récord de más vueltas completadas sin ser clasificado en una carrera?",
        de: "Was ist der Rekord für die meisten absolvierten Runden ohne im Rennen klassifiziert zu werden?",
        nl: "Wat is het record voor de meeste voltooide rondes zonder geclassificeerd te worden in een race?"
      },
      options: [
        "61 laps (Trulli Singapore 2008: 61/61 laps, disqualified)",
        "53 laps (Schumacher Britain 1995: 53/61 laps, mechanical DNF)",
        "68 laps (Heidfeld Europe 2007: 68/69 laps, accident final lap)",
        "45 laps (90% rule violation 1980s: not classified)"
      ],
      correct: 0,
      explanation: {
        en: "Jarno Trulli completed all 61 laps at Singapore 2008 finishing 3rd but was disqualified for overtaking under yellow, completing most laps without classification.",
        es: "Jarno Trulli completó las 61 vueltas en Singapur 2008 terminando 3º pero fue descalificado por adelantar bajo amarillo, completando las vueltas más altas sin clasificación.",
        de: "Jarno Trulli absolvierte alle 61 Runden in Singapur 2008 als 3., wurde aber wegen Überholens unter Gelb disqualifiziert, absolvierte die meisten Runden ohne Klassifizierung.",
        nl: "Jarno Trulli voltooide alle 61 rondes in Singapore 2008 eindigend 3e maar werd gediskwalificeerd voor inhalen onder geel, voltooide meeste rondes zonder classificatie."
      }
    },
    {
      question: {
        en: "What is the record for most races with all starters classified as finishers?",
        es: "¿Cuál es el récord de más carreras con todos los iniciadores clasificados como finalizadores?",
        de: "Was ist der Rekord für die meisten Rennen mit allen Startern als klassifizierte Finisher?",
        nl: "Wat is het record voor de meeste races met alle starters geclassificeerd als finishers?"
      },
      options: [
        "Italy 2005: All 20 starters finished",
        "Canada 1961: All 15 starters finished",
        "No race has ever had 100% finishers",
        "Monaco 2011: All 24 starters finished"
      ],
      correct: 2,
      explanation: {
        en: "No F1 race in history has ever had all starters classified as finishers; even races with high finish rates had at least one retirement or DNF.",
        es: "Ninguna carrera de F1 en la historia ha tenido todos los iniciadores clasificados como finalizadores; incluso carreras con altas tasas de finalización tuvieron al menos un retiro o DNF.",
        de: "Kein F1-Rennen in der Geschichte hatte jemals alle Starter als klassifizierte Finisher; selbst Rennen mit hohen Finisher-Raten hatten mindestens einen Ausfall oder DNF.",
        nl: "Geen F1-race in de geschiedenis heeft ooit alle starters geclassificeerd als finishers gehad; zelfs races met hoge finish-percentages hadden minstens één uitval of DNF."
      }
    },
    {
      question: {
        en: "What is the record for most world champions defeated by a non-champion in head-to-head seasons?",
        es: "¿Cuál es el récord de más campeones mundiales derrotados por un no campeón en temporadas cara a cara?",
        de: "Was ist der Rekord für die meisten Weltmeister, die von einem Nicht-Champion in direkten Saisons geschlagen wurden?",
        nl: "Wat is het record voor de meeste wereldkampioenen verslagen door een niet-kampioen in head-to-head seizoenen?"
      },
      options: [
        "Stirling Moss: Beat 3 world champions as teammates (never won title)",
        "Carlos Reutemann: Beat 2 world champions as teammates (never won title)",
        "Rubens Barrichello: Beat 1 world champion as teammate (never won title)",
        "Felipe Massa: Beat 2 world champions as teammates (never won title)"
      ],
      correct: 0,
      explanation: {
        en: "Stirling Moss beat world champions Fangio (1955 teammate), Hawthorn (1958 rival), and others in direct competition despite never winning the title himself.",
        es: "Stirling Moss venció a los campeones mundiales Fangio (1955 compañero), Hawthorn (1958 rival) y otros en competencia directa a pesar de nunca ganar el título.",
        de: "Stirling Moss schlug Weltmeister Fangio (1955 Teamkollege), Hawthorn (1958 Rivale) und andere im direkten Wettbewerb, obwohl er selbst nie den Titel gewann.",
        nl: "Stirling Moss versloeg wereldkampioenen Fangio (1955 teamgenoot), Hawthorn (1958 rivaal) en anderen in directe competitie ondanks zelf nooit de titel te winnen."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive seasons scoring points for different teams?",
        es: "¿Cuál es el récord de más temporadas consecutivas puntuando para diferentes equipos?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Saisons mit Punkten für verschiedene Teams?",
        nl: "Wat is het record voor de meeste opeenvolgende seizoenen punten scorend voor verschillende teams?"
      },
      options: [
        "Jarno Trulli 2002-2005: 4 teams (Renault, Toyota, Renault, Toyota)",
        "Fernando Alonso 2018-2021: 4 teams (McLaren, out, Renault, Alpine)",
        "Nico Hulkenberg 2012-2019: 4 teams (Force India, Sauber, Force India, Renault)",
        "Sergio Perez 2011-2020: 5 teams (Sauber, McLaren, Force India, Racing Point)"
      ],
      correct: 3,
      explanation: {
        en: "Sergio Perez scored points for 5 different teams across consecutive seasons: Sauber, McLaren, Force India (multiple years), Racing Point, the most team diversity.",
        es: "Sergio Perez puntuó para 5 equipos diferentes en temporadas consecutivas: Sauber, McLaren, Force India (múltiples años), Racing Point, la diversidad de equipos más alta.",
        de: "Sergio Perez punktete für 5 verschiedene Teams über aufeinanderfolgende Saisons: Sauber, McLaren, Force India (mehrere Jahre), Racing Point, die größte Team-Vielfalt.",
        nl: "Sergio Perez scoorde punten voor 5 verschillende teams over opeenvolgende seizoenen: Sauber, McLaren, Force India (meerdere jaren), Racing Point, de meeste team-diversiteit."
      }
    },
    {
      question: {
        en: "What is the record for most race wins accumulated before first pole position?",
        es: "¿Cuál es el récord de más victorias de carrera acumuladas antes de la primera pole position?",
        de: "Was ist der Rekord für die meisten Rennsiege vor der ersten Pole-Position?",
        nl: "Wat is het record voor de meeste raceoverwinningen verzameld vóór eerste poleposition?"
      },
      options: [
        "Sergio Perez: 6 wins before first pole (Sakhir 2022)",
        "Mark Webber: 3 wins before first pole (Brazil 2009)",
        "Giancarlo Fisichella: 3 wins before first pole (Belgium 2009)",
        "Max Verstappen: 0 wins before first pole (Hungary 2019)"
      ],
      correct: 0,
      explanation: {
        en: "Sergio Perez won 6 races (Sakhir 2020, Baku 2021, Monaco 2022, Singapore 2022, Jeddah 2023, Baku 2023) before taking his first pole at Jeddah 2023.",
        es: "Sergio Perez ganó 6 carreras (Sakhir 2020, Baku 2021, Mónaco 2022, Singapur 2022, Jeddah 2023, Baku 2023) antes de lograr su primera pole en Jeddah 2023.",
        de: "Sergio Perez gewann 6 Rennen (Sakhir 2020, Baku 2021, Monaco 2022, Singapur 2022, Dschidda 2023, Baku 2023) bevor er seine erste Pole in Dschidda 2023 nahm.",
        nl: "Sergio Perez won 6 races (Sakhir 2020, Baku 2021, Monaco 2022, Singapore 2022, Jeddah 2023, Baku 2023) voordat hij zijn eerste pole behaalde in Jeddah 2023."
      }
    },
    {
      question: {
        en: "What is the record for largest points haul in a season without a single front-row start?",
        es: "¿Cuál es el récord de mayor cantidad de puntos en una temporada sin una sola salida de primera fila?",
        de: "Was ist der Rekord für die größte Punkteausbeute in einer Saison ohne einen einzigen Start aus der ersten Reihe?",
        nl: "Wat is het record voor grootste puntenbuit in een seizoen zonder een enkele eerste-rij start?"
      },
      options: [
        "Fernando Alonso 2021: 81 points (best grid 3rd)",
        "Carlos Sainz 2021: 164.5 points (best grid 3rd)",
        "Sergio Perez 2020: 125 points (best grid 3rd)",
        "Daniel Ricciardo 2021: 115 points (best grid 3rd)"
      ],
      correct: 1,
      explanation: {
        en: "Carlos Sainz scored 164.5 points in 2021 finishing 5th in the championship without starting from the front row once (best qualifying 3rd).",
        es: "Carlos Sainz anotó 164.5 puntos en 2021 terminando 5º en el campeonato sin comenzar desde la primera fila una vez (mejor clasificación 3º).",
        de: "Carlos Sainz erzielte 164,5 Punkte 2021 als 5. in der Meisterschaft ohne einmal aus der ersten Reihe zu starten (beste Qualifikation 3.).",
        nl: "Carlos Sainz scoorde 164,5 punten in 2021 eindigend 5e in het kampioenschap zonder één keer vanaf de eerste rij te starten (beste kwalificatie 3e)."
      }
    },
    {
      question: {
        en: "What is the record for most races led for at least one lap in a championship-winning season?",
        es: "¿Cuál es el récord de más carreras lideradas durante al menos una vuelta en una temporada ganadora del campeonato?",
        de: "Was ist der Rekord für die meisten Rennen mit mindestens einer geführten Runde in einer Meisterschaftsgewinn-Saison?",
        nl: "Wat is het record voor de meeste races geleid voor minstens één ronde in een kampioenschap-winnend seizoen?"
      },
      options: [
        "Sebastian Vettel 2013: Led 18/19 races",
        "Michael Schumacher 2004: Led 17/18 races",
        "Max Verstappen 2023: Led 21/22 races",
        "Lewis Hamilton 2019: Led 19/21 races"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen led at least one lap in 21 of 22 races in 2023 (only exception: Singapore), the most races led in a championship-winning season.",
        es: "Max Verstappen lideró al menos una vuelta en 21 de 22 carreras en 2023 (única excepción: Singapur), las carreras más lideradas en una temporada ganadora del campeonato.",
        de: "Max Verstappen führte in 21 von 22 Rennen 2023 mindestens eine Runde (einzige Ausnahme: Singapur), die meisten geführten Rennen in einer Meisterschaftsgewinn-Saison.",
        nl: "Max Verstappen leidde minstens één ronde in 21 van 22 races in 2023 (enige uitzondering: Singapore), de meeste geleidde races in een kampioenschap-winnend seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most podiums by a driver before their teammate's first podium (same team)?",
        es: "¿Cuál es el récord de más podios de un piloto antes del primer podio de su compañero de equipo (mismo equipo)?",
        de: "Was ist der Rekord für die meisten Podien eines Fahrers vor dem ersten Podium seines Teamkollegen (gleiches Team)?",
        nl: "Wat is het record voor de meeste podia door een coureur vóór het eerste podium van hun teamgenoot (zelfde team)?"
      },
      options: [
        "Lewis Hamilton: 9 podiums before Heikki Kovalainen's 1st (McLaren 2008)",
        "Fernando Alonso: 12 podiums before Felipe Massa's 1st (Ferrari 2010)",
        "Max Verstappen: 8 podiums before Pierre Gasly's 1st (Red Bull 2019)",
        "Sebastian Vettel: 7 podiums before Mark Webber's 1st (Red Bull 2009)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton scored 9 podiums for McLaren in 2008 before teammate Heikki Kovalainen's first podium for the team (Hungary 2008, his 10th race).",
        es: "Lewis Hamilton anotó 9 podios para McLaren en 2008 antes del primer podio de su compañero Heikki Kovalainen para el equipo (Hungría 2008, su 10ª carrera).",
        de: "Lewis Hamilton erzielte 9 Podien für McLaren 2008, bevor Teamkollege Heikki Kovalainen sein erstes Podium für das Team hatte (Ungarn 2008, sein 10. Rennen).",
        nl: "Lewis Hamilton scoorde 9 podia voor McLaren in 2008 voordat teamgenoot Heikki Kovalainen zijn eerste podium voor het team had (Hongarije 2008, zijn 10e race)."
      }
    },
    {
      question: {
        en: "What is the record for most championship points scored by both drivers of a backmarker team?",
        es: "¿Cuál es el récord de más puntos de campeonato anotados por ambos pilotos de un equipo rezagado?",
        de: "Was ist der Rekord für die meisten Meisterschaftspunkte beider Fahrer eines Hinterbänkler-Teams?",
        nl: "Wat is het record voor de meeste kampioenschapspunten gescoord door beide coureurs van een achterblijver-team?"
      },
      options: [
        "Sauber 2012: 126 points (finished 6th in constructors)",
        "Williams 2014: 320 points (finished 3rd in constructors)",
        "Force India 2017: 187 points (finished 4th in constructors)",
        "Toro Rosso 2008: 39 points (Vettel win, finished 6th)"
      ],
      correct: 3,
      explanation: {
        en: "Toro Rosso scored 39 points in 2008 as a backmarker team (6th in constructors) with Vettel's shock Monza win contributing 8 points of that total.",
        es: "Toro Rosso anotó 39 puntos en 2008 como equipo rezagado (6º en constructores) con la sorprendente victoria de Vettel en Monza contribuyendo 8 puntos de ese total.",
        de: "Toro Rosso erzielte 39 Punkte 2008 als Hinterbänkler-Team (6. bei Konstrukteuren) wobei Vettels Überraschungssieg in Monza 8 Punkte davon beitrug.",
        nl: "Toro Rosso scoorde 39 punten in 2008 als achterblijver-team (6e bij constructeurs) met Vettel's verrassende Monza-overwinning die 8 punten van dat totaal bijdroeg."
      }
    },
    {
      question: {
        en: "What is the record for most different power unit manufacturers raced with by a single driver?",
        es: "¿Cuál es el récord de más fabricantes de unidades de potencia diferentes con los que corrió un solo piloto?",
        de: "Was ist der Rekord für die meisten verschiedenen Power-Unit-Hersteller, mit denen ein einzelner Fahrer fuhr?",
        nl: "Wat is het record voor de meeste verschillende power unit-fabrikanten waarmee een enkele coureur racete?"
      },
      options: [
        "Fernando Alonso hybrid era: 4 PU manufacturers (Ferrari, Honda, Renault, Mercedes)",
        "Carlos Sainz hybrid era: 3 PU manufacturers (Renault, Ferrari, Honda)",
        "Sergio Perez hybrid era: 3 PU manufacturers (Ferrari, Mercedes, Honda)",
        "Daniel Ricciardo hybrid era: 3 PU manufacturers (Renault, Renault, Mercedes)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso used 4 different hybrid-era power units: Ferrari (2014), Honda (2015-17), Renault (2018, 2021), Mercedes (2022-23), the most PU diversity.",
        es: "Fernando Alonso usó 4 unidades de potencia diferentes de la era híbrida: Ferrari (2014), Honda (2015-17), Renault (2018, 2021), Mercedes (2022-23), la diversidad de PU más alta.",
        de: "Fernando Alonso nutzte 4 verschiedene Hybrid-Ära Power Units: Ferrari (2014), Honda (2015-17), Renault (2018, 2021), Mercedes (2022-23), die größte PU-Vielfalt.",
        nl: "Fernando Alonso gebruikte 4 verschillende hybrid-tijdperk power units: Ferrari (2014), Honda (2015-17), Renault (2018, 2021), Mercedes (2022-23), de meeste PU-diversiteit."
      }
    },
    {
      question: {
        en: "What is the record for most races finishing as the last classified driver (but still classified)?",
        es: "¿Cuál es el récord de más carreras terminando como el último piloto clasificado (pero aún clasificado)?",
        de: "Was ist der Rekord für die meisten Rennen als letzter klassifizierter Fahrer beendet (aber noch klassifiziert)?",
        nl: "Wat is het record voor de meeste races eindigend als laatste geclassificeerde coureur (maar nog steeds geclassificeerd)?"
      },
      options: [
        "Pedro Diniz career: 12 last-place classified finishes",
        "Andrea de Cesaris career: 8 last-place classified finishes",
        "Minardi drivers 1990s: Combined 15+ last-place finishes",
        "Luca Badoer career: 5 last-place classified finishes"
      ],
      correct: 0,
      explanation: {
        en: "Pedro Diniz finished last (but classified within 90% rule) in 12 races during his career (1995-2000), the most last-place classified finishes.",
        es: "Pedro Diniz terminó último (pero clasificado dentro de la regla del 90%) en 12 carreras durante su carrera (1995-2000), los finales clasificados en último lugar más altos.",
        de: "Pedro Diniz wurde in 12 Rennen während seiner Karriere (1995-2000) Letzter (aber klassifiziert innerhalb 90%-Regel), die meisten klassifizierten Letztplatz-Finishes.",
        nl: "Pedro Diniz eindigde laatste (maar geclassificeerd binnen 90%-regel) in 12 races tijdens zijn carrière (1995-2000), de meeste laatste-plaats geclassificeerde finishes."
      }
    },
    {
      question: {
        en: "What is the record for most wins by a driver in races where they didn't set fastest lap?",
        es: "¿Cuál es el récord de más victorias de un piloto en carreras donde no estableció la vuelta rápida?",
        de: "Was ist der Rekord für die meisten Siege eines Fahrers in Rennen, in denen er nicht die schnellste Runde fuhr?",
        nl: "Wat is het record voor de meeste overwinningen door een coureur in races waar ze niet de snelste ronde reden?"
      },
      options: [
        "Lewis Hamilton: 65+ wins without fastest lap",
        "Michael Schumacher: 51 wins without fastest lap",
        "Sebastian Vettel: 35 wins without fastest lap",
        "Alain Prost: 38 wins without fastest lap"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has won 65+ races without setting the fastest lap in those races, the most wins achieved without also taking fastest lap.",
        es: "Lewis Hamilton ha ganado 65+ carreras sin establecer la vuelta rápida en esas carreras, las victorias más altas logradas sin tomar también la vuelta rápida.",
        de: "Lewis Hamilton hat 65+ Rennen ohne schnellste Runde in diesen Rennen gewonnen, die meisten Siege ohne auch die schnellste Runde zu nehmen.",
        nl: "Lewis Hamilton heeft 65+ races gewonnen zonder de snelste ronde in die races te rijden, de meeste overwinningen behaald zonder ook de snelste ronde te pakken."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();
