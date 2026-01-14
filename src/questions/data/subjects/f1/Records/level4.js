const level4 = (function() {
  const questions = [
    {
      question: {
        en: "What is the record for most pole positions converted to wins in a single season?",
        es: "¿Cuál es el récord de más poles convertidas en victorias en una sola temporada?",
        de: "Was ist der Rekord für die meisten in Siege umgewandelten Pole-Positionen in einer Saison?",
        nl: "Wat is het record voor de meeste poles omgezet in overwinningen in een enkel seizoen?"
      },
      options: [
        "Ayrton Senna 1988 (13/13)",
        "Michael Schumacher 2004 (8/12)",
        "Sebastian Vettel 2011 (11/15)",
        "Max Verstappen 2023 (9/9)"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna achieved a perfect 13/13 pole-to-win conversion in 1988 with McLaren, the only driver to convert all poles to wins in a season with 10+ poles.",
        es: "Ayrton Senna logró una conversión perfecta de 13/13 pole-a-victoria en 1988 con McLaren, el único piloto en convertir todas las poles en victorias en una temporada con 10+ poles.",
        de: "Ayrton Senna erreichte 1988 mit McLaren eine perfekte 13/13 Pole-zu-Sieg-Konversion, der einzige Fahrer, der alle Poles in einer Saison mit 10+ Poles in Siege umwandelte.",
        nl: "Ayrton Senna behaalde een perfecte 13/13 pole-naar-overwinning conversie in 1988 met McLaren, de enige coureur die alle poles omzette in overwinningen in een seizoen met 10+ poles."
      }
    },
    {
      question: {
        en: "Which driver holds the record for most hat-tricks (pole, win, fastest lap)?",
        es: "¿Qué piloto tiene el récord de más hat-tricks (pole, victoria, vuelta rápida)?",
        de: "Welcher Fahrer hält den Rekord für die meisten Hat-Tricks (Pole, Sieg, schnellste Runde)?",
        nl: "Welke coureur heeft het record voor de meeste hat-tricks (pole, overwinning, snelste ronde)?"
      },
      options: [
        "Michael Schumacher (22 hat-tricks)",
        "Lewis Hamilton (18 hat-tricks)",
        "Jim Clark (11 hat-tricks)",
        "Sebastian Vettel (14 hat-tricks)"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher achieved 22 hat-tricks during his career, more than any other driver. A hat-trick requires pole position, race win, and fastest lap.",
        es: "Michael Schumacher logró 22 hat-tricks durante su carrera, más que cualquier otro piloto. Un hat-trick requiere pole position, victoria y vuelta rápida.",
        de: "Michael Schumacher erreichte 22 Hat-Tricks während seiner Karriere, mehr als jeder andere Fahrer. Ein Hat-Trick erfordert Pole-Position, Rennsieg und schnellste Runde.",
        nl: "Michael Schumacher behaalde 22 hat-tricks tijdens zijn carrière, meer dan enige andere coureur. Een hat-trick vereist pole position, race overwinning en snelste ronde."
      }
    },
    {
      question: {
        en: "What is the record for most wins in a debut season with a new team?",
        es: "¿Cuál es el récord de más victorias en una temporada de debut con un nuevo equipo?",
        de: "Was ist der Rekord für die meisten Siege in einer Debütsaison mit einem neuen Team?",
        nl: "Wat is het record voor de meeste overwinningen in een debuutseizoen met een nieuw team?"
      },
      options: [
        "Lewis Hamilton with Mercedes 2013 (1 win)",
        "Max Verstappen with Red Bull 2016 (1 win)",
        "Fernando Alonso with Ferrari 2010 (5 wins)",
        "Nico Rosberg with Mercedes 2010 (0 wins)"
      ],
      correct: 2,
      explanation: {
        en: "Fernando Alonso won 5 races in his first season with Ferrari (2010), nearly winning the championship. This shows exceptional adaptation to a new team.",
        es: "Fernando Alonso ganó 5 carreras en su primera temporada con Ferrari (2010), casi ganando el campeonato. Esto muestra una adaptación excepcional a un nuevo equipo.",
        de: "Fernando Alonso gewann 5 Rennen in seiner ersten Saison mit Ferrari (2010) und verfehlte die Meisterschaft knapp. Dies zeigt außergewöhnliche Anpassung an ein neues Team.",
        nl: "Fernando Alonso won 5 races in zijn eerste seizoen met Ferrari (2010), bijna het kampioenschap winnend. Dit toont uitzonderlijke aanpassing aan een nieuw team."
      }
    },
    {
      question: {
        en: "Which team has the record for most consecutive race wins?",
        es: "¿Qué equipo tiene el récord de más victorias consecutivas de carrera?",
        de: "Welches Team hält den Rekord für die meisten aufeinanderfolgenden Rennsiege?",
        nl: "Welk team heeft het record voor de meeste opeenvolgende race overwinningen?"
      },
      options: [
        "McLaren 1988 (11 consecutive wins)",
        "Ferrari 2002-2003 (9 consecutive wins)",
        "Red Bull 2013 (9 consecutive wins)",
        "Mercedes 2014-2015 (10 consecutive wins)"
      ],
      correct: 0,
      explanation: {
        en: "McLaren won 11 consecutive races from Brazil 1988 to Belgium 1988, with Senna and Prost dominating. They won 15 of 16 races that season.",
        es: "McLaren ganó 11 carreras consecutivas desde Brasil 1988 hasta Bélgica 1988, con Senna y Prost dominando. Ganaron 15 de 16 carreras esa temporada.",
        de: "McLaren gewann 11 aufeinanderfolgende Rennen von Brasilien 1988 bis Belgien 1988 mit Senna und Prost. Sie gewannen 15 von 16 Rennen dieser Saison.",
        nl: "McLaren won 11 opeenvolgende races van Brazilië 1988 tot België 1988, met Senna en Prost dominerend. Ze wonnen 15 van 16 races dat seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most different race winners in a single season?",
        es: "¿Cuál es el récord de más ganadores de carrera diferentes en una sola temporada?",
        de: "Was ist der Rekord für die meisten verschiedenen Rennsieger in einer einzelnen Saison?",
        nl: "Wat is het record voor de meeste verschillende race winnaars in een enkel seizoen?"
      },
      options: [
        "11 different winners (2012)",
        "8 different winners (2003)",
        "9 different winners (2010)",
        "10 different winners (1982)"
      ],
      correct: 0,
      explanation: {
        en: "The 2012 season had 11 different winners in 20 races, the most diverse season. The first 7 races had 7 different winners, showing unpredictability.",
        es: "La temporada 2012 tuvo 11 ganadores diferentes en 20 carreras, la temporada más diversa. Las primeras 7 carreras tuvieron 7 ganadores diferentes, mostrando imprevisibilidad.",
        de: "Die Saison 2012 hatte 11 verschiedene Sieger in 20 Rennen, die vielfältigste Saison. Die ersten 7 Rennen hatten 7 verschiedene Sieger und zeigten Unvorhersehbarkeit.",
        nl: "Het 2012 seizoen had 11 verschillende winnaars in 20 races, het meest diverse seizoen. De eerste 7 races hadden 7 verschillende winnaars, wat onvoorspelbaarheid toont."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins from non-pole starting positions?",
        es: "¿Qué piloto tiene el récord de más victorias desde posiciones de salida sin pole?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege von Nicht-Pole-Startpositionen?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen vanaf niet-pole startposities?"
      },
      options: [
        "Lewis Hamilton (48 wins)",
        "Michael Schumacher (52 wins)",
        "Sebastian Vettel (34 wins)",
        "Fernando Alonso (28 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won 52 races without starting from pole (out of 91 total wins), showing strong race craft and overtaking ability beyond qualifying.",
        es: "Michael Schumacher ganó 52 carreras sin partir desde pole (de 91 victorias totales), mostrando fuerte habilidad de carrera y adelantamiento más allá de la clasificación.",
        de: "Michael Schumacher gewann 52 Rennen ohne von der Pole zu starten (von 91 Gesamtsiegen), zeigte starke Rennkunst und Überholmanöver jenseits des Qualifyings.",
        nl: "Michael Schumacher won 52 races zonder te starten vanaf pole (van 91 totale overwinningen), wat sterke racevaardigheid en inhaalvermogen buiten kwalificatie toont."
      }
    },
    {
      question: {
        en: "What is the record for youngest driver to lead a race lap?",
        es: "¿Cuál es el récord del piloto más joven en liderar una vuelta de carrera?",
        de: "Was ist der Rekord für den jüngsten Fahrer, der eine Rennrunde anführte?",
        nl: "Wat is het record voor jongste coureur om een race ronde te leiden?"
      },
      options: [
        "Max Verstappen (17 years, 166 days)",
        "Sebastian Vettel (19 years, 349 days)",
        "Lance Stroll (18 years, 268 days)",
        "Lando Norris (19 years, 124 days)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen led his first lap at 17 years and 166 days during the 2015 Malaysian GP, making him the youngest to ever lead a lap in F1.",
        es: "Max Verstappen lideró su primera vuelta a los 17 años y 166 días durante el GP de Malasia 2015, convirtiéndolo en el más joven en liderar una vuelta en F1.",
        de: "Max Verstappen führte seine erste Runde mit 17 Jahren und 166 Tagen beim Malaysia GP 2015 an und wurde damit der jüngste Rundenführer in der F1.",
        nl: "Max Verstappen leidde zijn eerste ronde op 17 jaar en 166 dagen tijdens de 2015 Maleisische GP, waardoor hij de jongste werd om ooit een ronde te leiden in F1."
      }
    },
    {
      question: {
        en: "Which circuit has the highest average speed lap record in F1?",
        es: "¿Qué circuito tiene el récord de vuelta con la velocidad promedio más alta en F1?",
        de: "Welche Strecke hat den Rekord für die höchste Durchschnittsgeschwindigkeit in der F1?",
        nl: "Welk circuit heeft het record voor de hoogste gemiddelde snelheid ronde in F1?"
      },
      options: [
        "Monza (264.4 km/h)",
        "Silverstone (252.8 km/h)",
        "Spa-Francorchamps (245.6 km/h)",
        "Baku (235.7 km/h)"
      ],
      correct: 0,
      explanation: {
        en: "Monza holds the record with an average lap speed of 264.4 km/h set by Lewis Hamilton in 2020 qualifying, making it the fastest circuit in F1.",
        es: "Monza tiene el récord con una velocidad promedio de vuelta de 264.4 km/h establecida por Lewis Hamilton en la clasificación de 2020, convirtiéndolo en el circuito más rápido de F1.",
        de: "Monza hält den Rekord mit einer durchschnittlichen Rundengeschwindigkeit von 264,4 km/h von Lewis Hamilton im Qualifying 2020, was es zur schnellsten Strecke der F1 macht.",
        nl: "Monza heeft het record met een gemiddelde ronde snelheid van 264,4 km/u gezet door Lewis Hamilton in 2020 kwalificatie, waardoor het het snelste circuit in F1 is."
      }
    },
    {
      question: {
        en: "What is the record for most retirements (DNFs) in a single season by a driver?",
        es: "¿Cuál es el récord de más retiros (DNFs) en una sola temporada por un piloto?",
        de: "Was ist der Rekord für die meisten Ausfälle (DNFs) in einer einzelnen Saison eines Fahrers?",
        nl: "Wat is het record voor de meeste uitvalbeurten (DNFs) in een enkel seizoen door een coureur?"
      },
      options: [
        "Andrea de Cesaris 1987 (11 DNFs)",
        "Riccardo Patrese 1992 (9 DNFs)",
        "Max Verstappen 2017 (7 DNFs)",
        "Daniel Ricciardo 2018 (8 DNFs)"
      ],
      correct: 0,
      explanation: {
        en: "Andrea de Cesaris had 11 DNFs in 16 races during 1987 with Brabham, earning him the nickname 'Andrea de Crasheris' despite showing speed.",
        es: "Andrea de Cesaris tuvo 11 DNFs en 16 carreras durante 1987 con Brabham, ganándose el apodo 'Andrea de Crasheris' a pesar de mostrar velocidad.",
        de: "Andrea de Cesaris hatte 1987 mit Brabham 11 DNFs in 16 Rennen und erhielt den Spitznamen 'Andrea de Crasheris', obwohl er Geschwindigkeit zeigte.",
        nl: "Andrea de Cesaris had 11 DNFs in 16 races tijdens 1987 met Brabham, waardoor hij de bijnaam 'Andrea de Crasheris' kreeg ondanks snelheid te tonen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most seasons scoring points?",
        es: "¿Qué piloto tiene el récord de más temporadas anotando puntos?",
        de: "Welcher Fahrer hat den Rekord für die meisten Saisons mit Punkten?",
        nl: "Welke coureur heeft het record voor de meeste seizoenen met punten scoren?"
      },
      options: [
        "Kimi Räikkönen (19 seasons)",
        "Fernando Alonso (20 seasons)",
        "Rubens Barrichello (18 seasons)",
        "Lewis Hamilton (17 seasons)"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso scored points in 20 different seasons (2001-2003, 2005-2018, 2021-2023), the most of any driver, showing remarkable longevity.",
        es: "Fernando Alonso anotó puntos en 20 temporadas diferentes (2001-2003, 2005-2018, 2021-2023), las más de cualquier piloto, mostrando notable longevidad.",
        de: "Fernando Alonso erzielte in 20 verschiedenen Saisons Punkte (2001-2003, 2005-2018, 2021-2023), die meisten eines Fahrers, zeigte bemerkenswerte Langlebigkeit.",
        nl: "Fernando Alonso scoorde punten in 20 verschillende seizoenen (2001-2003, 2005-2018, 2021-2023), de meeste van alle coureurs, wat opmerkelijke duurzaamheid toont."
      }
    },
    {
      question: {
        en: "What is the record for most races in a season without a podium finish?",
        es: "¿Cuál es el récord de más carreras en una temporada sin un final de podio?",
        de: "Was ist der Rekord für die meisten Rennen in einer Saison ohne Podiumsplatz?",
        nl: "Wat is het record voor de meeste races in een seizoen zonder een podium finish?"
      },
      options: [
        "Nico Hulkenberg 2013 (19 races, 0 podiums)",
        "Adrian Sutil 2008 (18 races, 0 podiums)",
        "Daniel Ricciardo 2019 (21 races, 0 podiums)",
        "Pierre Gasly 2020 (17 races, 1 podium)"
      ],
      correct: 2,
      explanation: {
        en: "Daniel Ricciardo completed all 21 races of 2019 with Renault without a podium (best: 4th), his only winless season in his prime years.",
        es: "Daniel Ricciardo completó las 21 carreras de 2019 con Renault sin un podio (mejor: 4°), su única temporada sin victorias en sus años principales.",
        de: "Daniel Ricciardo absolvierte 2019 mit Renault alle 21 Rennen ohne Podium (beste: 4.), seine einzige sieglose Saison in seinen besten Jahren.",
        nl: "Daniel Ricciardo voltooide alle 21 races van 2019 met Renault zonder een podium (beste: 4e), zijn enige winloze seizoen in zijn topjaren."
      }
    },
    {
      question: {
        en: "Which team holds the record for most front row lockouts in a single season?",
        es: "¿Qué equipo tiene el récord de más bloqueos de primera fila en una sola temporada?",
        de: "Welches Team hält den Rekord für die meisten Sperrungen der ersten Reihe in einer Saison?",
        nl: "Welk team heeft het record voor de meeste eerste rij lockouts in een enkel seizoen?"
      },
      options: [
        "Mercedes 2016 (18 front row lockouts)",
        "McLaren 1988 (15 front row lockouts)",
        "Ferrari 2004 (12 front row lockouts)",
        "Red Bull 2011 (14 front row lockouts)"
      ],
      correct: 0,
      explanation: {
        en: "Mercedes locked out the front row 18 times in 21 races during 2016, with Hamilton and Rosberg dominating qualifying all season long.",
        es: "Mercedes bloqueó la primera fila 18 veces en 21 carreras durante 2016, con Hamilton y Rosberg dominando la clasificación toda la temporada.",
        de: "Mercedes sperrte 2016 18 Mal in 21 Rennen die erste Reihe, wobei Hamilton und Rosberg das Qualifying die ganze Saison dominierten.",
        nl: "Mercedes blokkeerde de eerste rij 18 keer in 21 races tijdens 2016, met Hamilton en Rosberg die de kwalificatie het hele seizoen domineerden."
      }
    },
    {
      question: {
        en: "What is the record for highest points total without winning the championship?",
        es: "¿Cuál es el récord del total de puntos más alto sin ganar el campeonato?",
        de: "Was ist der Rekord für die höchste Punktzahl ohne Meisterschaftsgewinn?",
        nl: "Wat is het record voor het hoogste punten totaal zonder het kampioenschap te winnen?"
      },
      options: [
        "Lewis Hamilton 2016 (380 points)",
        "Nico Rosberg 2014 (317 points)",
        "Charles Leclerc 2022 (308 points)",
        "Fernando Alonso 2010 (252 points)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton scored 380 points in 2016 but finished 2nd to teammate Nico Rosberg (385 points), the highest points total for a non-champion.",
        es: "Lewis Hamilton anotó 380 puntos en 2016 pero terminó 2° detrás del compañero Nico Rosberg (385 puntos), el total de puntos más alto para un no campeón.",
        de: "Lewis Hamilton erzielte 2016 380 Punkte, wurde aber Zweiter hinter Teamkollege Nico Rosberg (385 Punkte), die höchste Punktzahl für einen Nicht-Champion.",
        nl: "Lewis Hamilton scoorde 380 punten in 2016 maar eindigde als 2e achter teamgenoot Nico Rosberg (385 punten), het hoogste punten totaal voor een niet-kampioen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most successive seasons finishing in championship top 5?",
        es: "¿Qué piloto tiene el récord de más temporadas sucesivas finalizando en el top 5 del campeonato?",
        de: "Welcher Fahrer hat den Rekord für die meisten aufeinanderfolgenden Saisons in den Top 5 der Meisterschaft?",
        nl: "Welke coureur heeft het record voor de meeste opeenvolgende seizoenen eindigend in kampioenschap top 5?"
      },
      options: [
        "Lewis Hamilton (14 consecutive seasons)",
        "Michael Schumacher (12 consecutive seasons)",
        "Fernando Alonso (10 consecutive seasons)",
        "Sebastian Vettel (11 consecutive seasons)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton finished in the top 5 for 14 consecutive seasons from 2007-2021 (excluding 2022), showing incredible consistency throughout his career.",
        es: "Lewis Hamilton terminó en el top 5 durante 14 temporadas consecutivas desde 2007-2021 (excluyendo 2022), mostrando consistencia increíble durante su carrera.",
        de: "Lewis Hamilton beendete 14 aufeinanderfolgende Saisons von 2007-2021 (ohne 2022) in den Top 5 und zeigte unglaubliche Konsistenz während seiner Karriere.",
        nl: "Lewis Hamilton eindigde in de top 5 voor 14 opeenvolgende seizoenen van 2007-2021 (exclusief 2022), wat ongelooflijke consistentie tijdens zijn carrière toont."
      }
    },
    {
      question: {
        en: "What is the record for most races led without winning?",
        es: "¿Cuál es el récord de más carreras lideradas sin ganar?",
        de: "Was ist der Rekord für die meisten geführten Rennen ohne Sieg?",
        nl: "Wat is het record voor de meeste races geleid zonder te winnen?"
      },
      options: [
        "Chris Amon (31 races led)",
        "Stirling Moss (24 races led)",
        "Nico Hulkenberg (5 races led)",
        "Felipe Massa (45 races led)"
      ],
      correct: 0,
      explanation: {
        en: "Chris Amon led 31 races during his career but never won, earning him the title of 'best driver never to win a race' due to bad luck and reliability.",
        es: "Chris Amon lideró 31 carreras durante su carrera pero nunca ganó, ganándose el título de 'mejor piloto que nunca ganó una carrera' debido a mala suerte y confiabilidad.",
        de: "Chris Amon führte 31 Rennen während seiner Karriere an, gewann aber nie und erhielt den Titel 'bester Fahrer, der nie ein Rennen gewann' wegen Pech und Zuverlässigkeit.",
        nl: "Chris Amon leidde 31 races tijdens zijn carrière maar won nooit, waardoor hij de titel 'beste coureur die nooit een race won' kreeg vanwege pech en betrouwbaarheid."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins at their home Grand Prix?",
        es: "¿Qué piloto tiene el récord de más victorias en su Gran Premio local?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege bei seinem Heimrennen?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen op hun thuisrace Grand Prix?"
      },
      options: [
        "Lewis Hamilton at British GP (8 wins)",
        "Alain Prost at French GP (6 wins)",
        "Michael Schumacher at German GP (4 wins)",
        "Fernando Alonso at Spanish GP (2 wins)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has won 8 British Grands Prix at Silverstone, more than any driver at their home race, delighting home crowds throughout his career.",
        es: "Lewis Hamilton ha ganado 8 Grandes Premios Británicos en Silverstone, más que cualquier piloto en su carrera local, deleitando al público local durante su carrera.",
        de: "Lewis Hamilton gewann 8 Mal den Großen Preis von Großbritannien in Silverstone, mehr als jeder Fahrer bei seinem Heimrennen, begeisterte das Heimpublikum während seiner Karriere.",
        nl: "Lewis Hamilton heeft 8 Britse Grands Prix gewonnen op Silverstone, meer dan enige coureur op hun thuisrace, tot vreugde van het thuispubliek tijdens zijn carrière."
      }
    },
    {
      question: {
        en: "What is the record for fewest different podium finishers in a season?",
        es: "¿Cuál es el récord del menor número de finalistas de podio diferentes en una temporada?",
        de: "Was ist der Rekord für die wenigsten verschiedenen Podiumsplatzierten in einer Saison?",
        nl: "Wat is het record voor de minste verschillende podium finishers in een seizoen?"
      },
      options: [
        "2002 (9 different podium finishers)",
        "2011 (11 different podium finishers)",
        "2020 (14 different podium finishers)",
        "1952 (7 different podium finishers)"
      ],
      correct: 3,
      explanation: {
        en: "The 1952 season had only 7 different podium finishers across 8 races, showing the dominance of Ferrari and limited competition in the early F1 era.",
        es: "La temporada 1952 tuvo solo 7 finalistas de podio diferentes en 8 carreras, mostrando el dominio de Ferrari y competencia limitada en la era temprana de F1.",
        de: "Die Saison 1952 hatte nur 7 verschiedene Podiumsplatzierten über 8 Rennen und zeigte die Dominanz von Ferrari und begrenzte Konkurrenz in der frühen F1-Ära.",
        nl: "Het 1952 seizoen had slechts 7 verschillende podium finishers in 8 races, wat de dominantie van Ferrari en beperkte competitie in het vroege F1 tijdperk toont."
      }
    },
    {
      question: {
        en: "Which driver holds the record for most laps completed in F1 history?",
        es: "¿Qué piloto tiene el récord de más vueltas completadas en la historia de F1?",
        de: "Welcher Fahrer hält den Rekord für die meisten gefahrenen Runden in der F1-Geschichte?",
        nl: "Welke coureur heeft het record voor de meeste volledige rondes in F1 geschiedenis?"
      },
      options: [
        "Kimi Räikkönen (19,180 laps)",
        "Fernando Alonso (18,900+ laps)",
        "Lewis Hamilton (19,500+ laps)",
        "Rubens Barrichello (17,268 laps)"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton has completed over 19,500 racing laps, the most in F1 history, reflecting his longevity and reliability across 17 seasons.",
        es: "Lewis Hamilton ha completado más de 19,500 vueltas de carrera, las más en la historia de F1, reflejando su longevidad y confiabilidad en 17 temporadas.",
        de: "Lewis Hamilton hat über 19.500 Rennrunden absolviert, die meisten in der F1-Geschichte, was seine Langlebigkeit und Zuverlässigkeit über 17 Saisons widerspiegelt.",
        nl: "Lewis Hamilton heeft meer dan 19.500 race rondes voltooid, de meeste in F1 geschiedenis, wat zijn duurzaamheid en betrouwbaarheid over 17 seizoenen weerspiegelt."
      }
    },
    {
      question: {
        en: "What is the record for most points scored in consecutive races?",
        es: "¿Cuál es el récord de más puntos anotados en carreras consecutivas?",
        de: "Was ist der Rekord für die meisten in aufeinanderfolgenden Rennen erzielten Punkte?",
        nl: "Wat is het record voor de meeste punten gescoord in opeenvolgende races?"
      },
      options: [
        "Max Verstappen 2023 (575 points in 22 races)",
        "Lewis Hamilton 2019 (413 points in 21 races)",
        "Sebastian Vettel 2013 (397 points in 19 races)",
        "Michael Schumacher 2004 (148 points in 18 races)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen scored 575 points across all 22 races in 2023, the highest points haul in consecutive races, with 19 wins and consistency.",
        es: "Max Verstappen anotó 575 puntos en todas las 22 carreras en 2023, el botín de puntos más alto en carreras consecutivas, con 19 victorias y consistencia.",
        de: "Max Verstappen erzielte 2023 über alle 22 Rennen 575 Punkte, die höchste Punkteausbeute in aufeinanderfolgenden Rennen, mit 19 Siegen und Konstanz.",
        nl: "Max Verstappen scoorde 575 punten in alle 22 races in 2023, de hoogste punten oogst in opeenvolgende races, met 19 overwinningen en consistentie."
      }
    },
    {
      question: {
        en: "Which constructor won their first championship in the fewest races?",
        es: "¿Qué constructor ganó su primer campeonato en el menor número de carreras?",
        de: "Welcher Konstrukteur gewann seine erste Meisterschaft in den wenigsten Rennen?",
        nl: "Welke constructeur won hun eerste kampioenschap in de minste races?"
      },
      options: [
        "Brawn GP (17 races in 2009)",
        "Mercedes (125 races, won 2014)",
        "Red Bull (113 races, won 2010)",
        "Williams (71 races, won 1980)"
      ],
      correct: 0,
      explanation: {
        en: "Brawn GP won the constructors' championship in their debut and only season (2009) after just 17 races, the fastest team to win from debut.",
        es: "Brawn GP ganó el campeonato de constructores en su temporada de debut y única (2009) después de solo 17 carreras, el equipo más rápido en ganar desde el debut.",
        de: "Brawn GP gewann 2009 die Konstrukteurs-Meisterschaft in ihrer Debüt- und einzigen Saison nach nur 17 Rennen, das schnellste Team zum Sieg ab Debüt.",
        nl: "Brawn GP won het constructeurs kampioenschap in hun debuut en enige seizoen (2009) na slechts 17 races, het snelste team om te winnen vanaf debuut."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive seasons with at least one pole position?",
        es: "¿Cuál es el récord de más temporadas consecutivas con al menos una pole position?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Saisons mit mindestens einer Pole-Position?",
        nl: "Wat is het record voor de meeste opeenvolgende seizoenen met ten minste één pole position?"
      },
      options: [
        "Lewis Hamilton (16 seasons, 2007-2022)",
        "Michael Schumacher (14 seasons, 1994-2006)",
        "Ayrton Senna (10 seasons, 1985-1994)",
        "Sebastian Vettel (9 seasons, 2009-2017)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton took at least one pole in 16 consecutive seasons from 2007-2022, breaking Schumacher's record and showing consistent qualifying speed.",
        es: "Lewis Hamilton tomó al menos una pole en 16 temporadas consecutivas desde 2007-2022, rompiendo el récord de Schumacher y mostrando velocidad de clasificación consistente.",
        de: "Lewis Hamilton holte von 2007-2022 in 16 aufeinanderfolgenden Saisons mindestens eine Pole und brach Schumachers Rekord mit konstanter Qualifying-Geschwindigkeit.",
        nl: "Lewis Hamilton behaalde ten minste één pole in 16 opeenvolgende seizoenen van 2007-2022, Schumachers record verbrekend en consistente kwalificatie snelheid tonend."
      }
    },
    {
      question: {
        en: "Which driver has the record for most different teammates in their F1 career?",
        es: "¿Qué piloto tiene el récord de más compañeros de equipo diferentes en su carrera de F1?",
        de: "Welcher Fahrer hat den Rekord für die meisten verschiedenen Teamkollegen in seiner F1-Karriere?",
        nl: "Welke coureur heeft het record voor de meeste verschillende teamgenoten in hun F1 carrière?"
      },
      options: [
        "Rubens Barrichello (21 teammates)",
        "Fernando Alonso (17 teammates)",
        "Kimi Räikkönen (19 teammates)",
        "Lewis Hamilton (12 teammates)"
      ],
      correct: 0,
      explanation: {
        en: "Rubens Barrichello had 21 different teammates across his 19-season career (1993-2011), the most of any driver, driving for 5 teams.",
        es: "Rubens Barrichello tuvo 21 compañeros diferentes en su carrera de 19 temporadas (1993-2011), la mayor cantidad de cualquier piloto, conduciendo para 5 equipos.",
        de: "Rubens Barrichello hatte 21 verschiedene Teamkollegen in seiner 19-jährigen Karriere (1993-2011), die meisten eines Fahrers, fuhr für 5 Teams.",
        nl: "Rubens Barrichello had 21 verschillende teamgenoten gedurende zijn 19-seizoen carrière (1993-2011), de meeste van alle coureurs, rijdend voor 5 teams."
      }
    },
    {
      question: {
        en: "What is the record for most podium lockouts (1-2-3) by a single team in a season?",
        es: "¿Cuál es el récord de más bloqueos de podio (1-2-3) por un solo equipo en una temporada?",
        de: "Was ist der Rekord für die meisten Podiumssperrungen (1-2-3) eines Teams in einer Saison?",
        nl: "Wat is het record voor de meeste podium lockouts (1-2-3) door een enkel team in een seizoen?"
      },
      options: [
        "Ferrari 1952 (6 podium lockouts)",
        "McLaren 1988 (10 podium lockouts)",
        "Mercedes 2015 (12 podium lockouts)",
        "Red Bull 2011 (5 podium lockouts)"
      ],
      correct: 2,
      explanation: {
        en: "Mercedes achieved 12 podium lockouts (1-2-3 with customer teams) in 2015, though if counting only factory teams, McLaren 1988 had 10.",
        es: "Mercedes logró 12 bloqueos de podio (1-2-3 con equipos clientes) en 2015, aunque contando solo equipos de fábrica, McLaren 1988 tuvo 10.",
        de: "Mercedes erreichte 2015 12 Podiumssperrungen (1-2-3 mit Kundenteams), obwohl McLaren 1988 bei reinen Werksteams 10 hatte.",
        nl: "Mercedes behaalde 12 podium lockouts (1-2-3 met klantteams) in 2015, hoewel als alleen fabrieks teams worden geteld, McLaren 1988 er 10 had."
      }
    },
    {
      question: {
        en: "Which driver has the best win conversion rate (wins/races) with minimum 50 races?",
        es: "¿Qué piloto tiene la mejor tasa de conversión de victorias (victorias/carreras) con mínimo 50 carreras?",
        de: "Welcher Fahrer hat die beste Siegquote (Siege/Rennen) mit mindestens 50 Rennen?",
        nl: "Welke coureur heeft de beste overwinnings conversie ratio (overwinningen/races) met minimaal 50 races?"
      },
      options: [
        "Juan Manuel Fangio (46.2%, 24/51)",
        "Jim Clark (34.7%, 25/72)",
        "Alberto Ascari (31.2%, 13/32)",
        "Max Verstappen (33%, 54/163 and rising)"
      ],
      correct: 0,
      explanation: {
        en: "Juan Manuel Fangio won 24 of 51 races (46.2%), the highest win rate of any driver with 50+ starts, dominating the 1950s with 5 championships.",
        es: "Juan Manuel Fangio ganó 24 de 51 carreras (46.2%), la tasa de victorias más alta de cualquier piloto con 50+ inicios, dominando los años 50 con 5 campeonatos.",
        de: "Juan Manuel Fangio gewann 24 von 51 Rennen (46,2%), die höchste Gewinnrate eines Fahrers mit 50+ Starts, dominierte die 1950er mit 5 Meisterschaften.",
        nl: "Juan Manuel Fangio won 24 van 51 races (46,2%), het hoogste winpercentage van alle coureurs met 50+ starts, dominerend in de jaren 50 met 5 kampioenschappen."
      }
    },
    {
      question: {
        en: "What is the record for largest championship comeback from deficit to win?",
        es: "¿Cuál es el récord de la mayor remontada de campeonato desde un déficit hasta ganar?",
        de: "Was ist der Rekord für das größte Meisterschafts-Comeback von einem Rückstand zum Sieg?",
        nl: "Wat is het record voor de grootste kampioenschap comeback van een achterstand naar winst?"
      },
      options: [
        "Niki Lauda 1984 (0.5 points behind, won by 0.5)",
        "Kimi Räikkönen 2007 (17 points behind, won by 1)",
        "Max Verstappen 2021 (8 points behind, won by 8)",
        "Lewis Hamilton 2008 (7 points behind, won by 1)"
      ],
      correct: 1,
      explanation: {
        en: "Kimi Räikkönen overcame a 17-point deficit with 2 races to go in 2007, winning both and taking the championship by 1 point, the largest comeback.",
        es: "Kimi Räikkönen superó un déficit de 17 puntos con 2 carreras por disputar en 2007, ganando ambas y tomando el campeonato por 1 punto, la remontada más grande.",
        de: "Kimi Räikkönen machte 2007 einen 17-Punkte-Rückstand mit 2 verbleibenden Rennen wett, gewann beide und die Meisterschaft mit 1 Punkt Vorsprung, das größte Comeback.",
        nl: "Kimi Räikkönen overwon een 17-punten achterstand met 2 races te gaan in 2007, won beide en nam het kampioenschap met 1 punt, de grootste comeback."
      }
    },
    {
      question: {
        en: "Which team has the record for most years as a constructor without winning a race?",
        es: "¿Qué equipo tiene el récord de más años como constructor sin ganar una carrera?",
        de: "Welches Team hat den Rekord für die meisten Jahre als Konstrukteur ohne Rennsieg?",
        nl: "Welk team heeft het record voor de meeste jaren als constructeur zonder een race te winnen?"
      },
      options: [
        "Sauber (30+ years, 1993-present)",
        "Force India/Racing Point (12 years, 2008-2020)",
        "Haas (8+ years, 2016-present)",
        "Williams (since 2012, 11+ years)"
      ],
      correct: 0,
      explanation: {
        en: "Sauber (now Alfa Romeo/Stake) has competed for 30+ years without a win, though they've had podiums, making them the longest-running winless team.",
        es: "Sauber (ahora Alfa Romeo/Stake) ha competido durante 30+ años sin una victoria, aunque han tenido podios, convirtiéndolos en el equipo sin victorias más longevo.",
        de: "Sauber (jetzt Alfa Romeo/Stake) nimmt seit 30+ Jahren ohne Sieg teil, hatte aber Podiumsplätze, was sie zum am längsten sieglosen Team macht.",
        nl: "Sauber (nu Alfa Romeo/Stake) heeft 30+ jaar gestreden zonder een overwinning, hoewel ze podiums hadden, waardoor ze het langst lopende team zonder overwinning zijn."
      }
    },
    {
      question: {
        en: "What is the record for most points lost due to team orders in a season?",
        es: "¿Cuál es el récord de más puntos perdidos debido a órdenes de equipo en una temporada?",
        de: "Was ist der Rekord für die meisten durch Teamorder verlorenen Punkte in einer Saison?",
        nl: "Wat is het record voor de meeste punten verloren door teamorders in een seizoen?"
      },
      options: [
        "Rubens Barrichello 2002 (estimated 14 points)",
        "Valtteri Bottas 2017 (estimated 10 points)",
        "Felipe Massa 2007 (estimated 8 points)",
        "Mark Webber 2013 (estimated 7 points)"
      ],
      correct: 0,
      explanation: {
        en: "Rubens Barrichello lost an estimated 14 points in 2002 due to team orders favoring Schumacher, including the infamous Austria GP gift victory.",
        es: "Rubens Barrichello perdió unos 14 puntos estimados en 2002 debido a órdenes de equipo favoreciendo a Schumacher, incluyendo la infame victoria regalada en Austria GP.",
        de: "Rubens Barrichello verlor 2002 geschätzt 14 Punkte durch Teamorder zugunsten Schumachers, einschließlich des berüchtigten geschenkten Siegs beim Österreich GP.",
        nl: "Rubens Barrichello verloor naar schatting 14 punten in 2002 door teamorders die Schumacher begunstigden, inclusief de beruchte cadeau overwinning op de Oostenrijk GP."
      }
    },
    {
      question: {
        en: "Which driver has the record for most poles without a fastest lap in career?",
        es: "¿Qué piloto tiene el récord de más poles sin una vuelta rápida en su carrera?",
        de: "Welcher Fahrer hat den Rekord für die meisten Poles ohne schnellste Runde in der Karriere?",
        nl: "Welke coureur heeft het record voor de meeste poles zonder een snelste ronde in carrière?"
      },
      options: [
        "Jarno Trulli (4 poles, 0 fastest laps)",
        "Pastor Maldonado (1 pole, 0 fastest laps)",
        "Heikki Kovalainen (1 pole, 0 fastest laps)",
        "Romain Grosjean (0 poles, 0 fastest laps)"
      ],
      correct: 0,
      explanation: {
        en: "Jarno Trulli achieved 4 pole positions but never recorded a fastest lap, the most poles without that achievement, showing qualifying pace over race pace.",
        es: "Jarno Trulli logró 4 pole positions pero nunca registró una vuelta rápida, las poles más sin ese logro, mostrando ritmo de clasificación sobre ritmo de carrera.",
        de: "Jarno Trulli holte 4 Pole-Positionen, fuhr aber nie die schnellste Runde, die meisten Poles ohne diese Leistung, zeigte Qualifying-Tempo über Renntempo.",
        nl: "Jarno Trulli behaalde 4 pole positions maar registreerde nooit een snelste ronde, de meeste poles zonder die prestatie, wat kwalificatie tempo over race tempo toont."
      }
    },
    {
      question: {
        en: "What is the record for most races to score first career point?",
        es: "¿Cuál es el récord de más carreras para anotar el primer punto de carrera?",
        de: "Was ist der Rekord für die meisten Rennen bis zum ersten Karrierepunkt?",
        nl: "Wat is het record voor de meeste races om eerste carrière punt te scoren?"
      },
      options: [
        "Luca Badoer (50 races)",
        "Timo Glock (20 races)",
        "Alex Albon (9 races)",
        "Nico Hulkenberg (3 races)"
      ],
      correct: 0,
      explanation: {
        en: "Luca Badoer started 50 races before scoring his first and only point (6th at 1999 European GP), the longest wait for a first point in F1 history.",
        es: "Luca Badoer inició 50 carreras antes de anotar su primer y único punto (6° en 1999 GP Europeo), la espera más larga para un primer punto en la historia de F1.",
        de: "Luca Badoer startete 50 Rennen vor seinem ersten und einzigen Punkt (6. beim Europäischen GP 1999), die längste Wartezeit auf einen ersten Punkt in der F1-Geschichte.",
        nl: "Luca Badoer startte 50 races voordat hij zijn eerste en enige punt scoorde (6e op 1999 Europese GP), de langste wachttijd voor een eerste punt in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins after their 35th birthday?",
        es: "¿Qué piloto tiene el récord de más victorias después de su 35° cumpleaños?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege nach seinem 35. Geburtstag?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen na hun 35e verjaardag?"
      },
      options: [
        "Michael Schumacher (16 wins)",
        "Fernando Alonso (5 wins)",
        "Lewis Hamilton (25+ wins)",
        "Nigel Mansell (14 wins)"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton has won 25+ races after turning 35, more than any driver, showing longevity and sustained performance in the modern era.",
        es: "Lewis Hamilton ha ganado más de 25 carreras después de cumplir 35 años, más que cualquier piloto, mostrando longevidad y rendimiento sostenido en la era moderna.",
        de: "Lewis Hamilton gewann über 25 Rennen nach seinem 35. Geburtstag, mehr als jeder Fahrer, zeigte Langlebigkeit und anhaltende Leistung in der modernen Ära.",
        nl: "Lewis Hamilton heeft 25+ races gewonnen na 35 jaar oud te worden, meer dan enige coureur, wat duurzaamheid en aanhoudende prestatie in het moderne tijdperk toont."
      }
    },
    {
      question: {
        en: "What is the record for fastest lap set from the lowest grid position?",
        es: "¿Cuál es el récord de vuelta rápida establecida desde la posición de parrilla más baja?",
        de: "Was ist der Rekord für die schnellste Runde von der niedrigsten Grid-Position?",
        nl: "Wat is het record voor snelste ronde gezet vanaf de laagste grid positie?"
      },
      options: [
        "Started 20th, set fastest lap",
        "Started 18th, set fastest lap",
        "Started 22nd, set fastest lap",
        "Started 15th, set fastest lap"
      ],
      correct: 2,
      explanation: {
        en: "Several drivers have set fastest laps from last (22nd+) on grid, including after pit stops or penalties, showing that track position doesn't always determine pace.",
        es: "Varios pilotos han establecido vueltas rápidas desde el último (22+) en la parrilla, incluyendo después de paradas en boxes o penalizaciones, mostrando que la posición en pista no siempre determina el ritmo.",
        de: "Mehrere Fahrer fuhren die schnellste Runde vom letzten Platz (22.+), auch nach Boxenstopps oder Strafen, zeigten, dass die Streckenposition nicht immer das Tempo bestimmt.",
        nl: "Verschillende coureurs hebben snelste rondes gezet vanaf laatste (22e+) op grid, inclusief na pitstops of straffen, wat toont dat track positie niet altijd het tempo bepaalt."
      }
    },
    {
      question: {
        en: "Which team holds the record for longest gap between first and second win?",
        es: "¿Qué equipo tiene el récord de la brecha más larga entre la primera y segunda victoria?",
        de: "Welches Team hält den Rekord für die längste Lücke zwischen erstem und zweitem Sieg?",
        nl: "Welk team heeft het record voor de langste kloof tussen eerste en tweede overwinning?"
      },
      options: [
        "BMW Sauber (2008 to never)",
        "Jordan (1998 to 1999, 1 season gap)",
        "Benetton (1986 to 1989, 3 years)",
        "Red Bull (2009 to 2010, 1 year)"
      ],
      correct: 0,
      explanation: {
        en: "BMW Sauber won the 2008 Canadian GP (Kubica) but never won again before leaving F1 in 2009, making it an infinite gap for a team with only 1 win.",
        es: "BMW Sauber ganó el GP de Canadá 2008 (Kubica) pero nunca ganó de nuevo antes de dejar F1 en 2009, convirtiéndolo en una brecha infinita para un equipo con solo 1 victoria.",
        de: "BMW Sauber gewann 2008 den Kanada GP (Kubica), gewann aber nie wieder vor dem F1-Ausstieg 2009, was es zu einer unendlichen Lücke für ein Team mit nur 1 Sieg macht.",
        nl: "BMW Sauber won de 2008 Canadese GP (Kubica) maar won nooit meer voordat ze F1 verlieten in 2009, waardoor het een oneindige kloof is voor een team met slechts 1 overwinning."
      }
    },
    {
      question: {
        en: "What is the record for most positions lost from start to finish in a race?",
        es: "¿Cuál es el récord de más posiciones perdidas desde el inicio hasta el final en una carrera?",
        de: "Was ist der Rekord für die meisten vom Start bis zum Ziel verlorenen Positionen?",
        nl: "Wat is het record voor de meeste posities verloren van start tot finish in een race?"
      },
      options: [
        "Started 1st, finished 20th (-19 positions)",
        "Started 2nd, finished 18th (-16 positions)",
        "Started 3rd, finished 21st (-18 positions)",
        "Started 1st, finished 22nd (-21 positions)"
      ],
      correct: 3,
      explanation: {
        en: "Drivers who started on pole and retired last (or DNF classified last) lost the most positions, around -21 in modern 22-car grids.",
        es: "Los pilotos que partieron en pole y se retiraron últimos (o DNF clasificados últimos) perdieron la mayor cantidad de posiciones, alrededor de -21 en las parrillas modernas de 22 autos.",
        de: "Fahrer, die von der Pole starteten und als Letzte ausfielen (oder DNF als Letzte klassifiziert) verloren die meisten Positionen, etwa -21 in modernen 22-Auto-Grids.",
        nl: "Coureurs die op pole startten en als laatste uitvielen (of DNF geclassificeerd als laatste) verloren de meeste posities, ongeveer -21 in moderne 22-auto grids."
      }
    },
    {
      question: {
        en: "Which driver has the record for most championships won in non-consecutive years?",
        es: "¿Qué piloto tiene el récord de más campeonatos ganados en años no consecutivos?",
        de: "Welcher Fahrer hat den Rekord für die meisten in nicht aufeinanderfolgenden Jahren gewonnenen Meisterschaften?",
        nl: "Welke coureur heeft het record voor de meeste kampioenschappen gewonnen in niet-opeenvolgende jaren?"
      },
      options: [
        "Juan Manuel Fangio (5 titles, 4 non-consecutive)",
        "Niki Lauda (3 titles, all non-consecutive)",
        "Lewis Hamilton (7 titles, mixed)",
        "Alain Prost (4 titles, 3 non-consecutive)"
      ],
      correct: 1,
      explanation: {
        en: "Niki Lauda won 3 championships all in non-consecutive years (1975, 1977, 1984), showing remarkable comebacks and resilience after setbacks.",
        es: "Niki Lauda ganó 3 campeonatos todos en años no consecutivos (1975, 1977, 1984), mostrando remontadas notables y resistencia después de contratiempos.",
        de: "Niki Lauda gewann 3 Meisterschaften alle in nicht aufeinanderfolgenden Jahren (1975, 1977, 1984) und zeigte bemerkenswerte Comebacks und Widerstandsfähigkeit nach Rückschlägen.",
        nl: "Niki Lauda won 3 kampioenschappen allemaal in niet-opeenvolgende jaren (1975, 1977, 1984), wat opmerkelijke comebacks en veerkracht na tegenslagen toont."
      }
    },
    {
      question: {
        en: "What is the record for most laps led in a race without winning?",
        es: "¿Cuál es el récord de más vueltas lideradas en una carrera sin ganar?",
        de: "Was ist der Rekord für die meisten in einem Rennen geführten Runden ohne Sieg?",
        nl: "Wat is het record voor de meeste rondes geleid in een race zonder te winnen?"
      },
      options: [
        "Nico Rosberg, Monaco 2014 (64 of 78 laps)",
        "Fernando Alonso, Italy 2012 (50 of 53 laps)",
        "Lewis Hamilton, Malaysia 2016 (45 of 56 laps)",
        "Sebastian Vettel, Bahrain 2018 (43 of 57 laps)"
      ],
      correct: 0,
      explanation: {
        en: "Nico Rosberg led 64 of 78 laps at 2014 Monaco GP but finished 2nd after a late mistake, the most laps led without winning in modern F1.",
        es: "Nico Rosberg lideró 64 de 78 vueltas en el GP de Mónaco 2014 pero terminó 2° después de un error tardío, las vueltas más lideradas sin ganar en F1 moderna.",
        de: "Nico Rosberg führte beim Monaco GP 2014 64 von 78 Runden an, wurde aber nach einem späten Fehler Zweiter, die meisten geführten Runden ohne Sieg in der modernen F1.",
        nl: "Nico Rosberg leidde 64 van 78 rondes op de 2014 Monaco GP maar eindigde als 2e na een late fout, de meeste rondes geleid zonder te winnen in moderne F1."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races without ever qualifying in top 10?",
        es: "¿Qué piloto tiene el récord de más carreras sin clasificarse en el top 10?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen ohne jemals unter den Top 10 zu qualifizieren?",
        nl: "Welke coureur heeft het record voor de meeste races zonder ooit in top 10 te kwalificeren?"
      },
      options: [
        "Taki Inoue (18 races, 0 top-10 qualifications)",
        "Chanoch Nissany (2 races, 0 top-10)",
        "Alex Yoong (14 races, 0 top-10)",
        "Yuji Ide (4 races, 0 top-10)"
      ],
      correct: 0,
      explanation: {
        en: "Taki Inoue never qualified in the top 10 across 18 race entries in 1994-1995 with backmarker teams, though he showed determination despite lack of pace.",
        es: "Taki Inoue nunca clasificó en el top 10 en 18 entradas de carrera en 1994-1995 con equipos rezagados, aunque mostró determinación a pesar de la falta de ritmo.",
        de: "Taki Inoue qualifizierte sich 1994-1995 über 18 Renneintragungen mit Hinterbänkler-Teams nie unter den Top 10, zeigte aber Entschlossenheit trotz fehlenden Tempos.",
        nl: "Taki Inoue kwalificeerde nooit in de top 10 over 18 race inschrijvingen in 1994-1995 met achterblijver teams, hoewel hij vastberadenheid toonde ondanks gebrek aan tempo."
      }
    },
    {
      question: {
        en: "Which team has the record for most seasons without scoring a podium?",
        es: "¿Qué equipo tiene el récord de más temporadas sin lograr un podio?",
        de: "Welches Team hat den Rekord für die meisten Saisons ohne Podiumsplatz?",
        nl: "Welk team heeft het record voor de meeste seizoenen zonder een podium te scoren?"
      },
      options: [
        "Minardi (20 seasons without podium)",
        "Caterham (3 seasons)",
        "HRT (3 seasons)",
        "Manor (2 seasons)"
      ],
      correct: 0,
      explanation: {
        en: "Minardi competed from 1985-2005 (20 seasons) without a podium, the longest drought. Their best finishes were two 4th places showing resilience despite limited resources.",
        es: "Minardi compitió desde 1985-2005 (20 temporadas) sin un podio, la sequía más larga. Sus mejores finales fueron dos 4° lugares mostrando resistencia a pesar de recursos limitados.",
        de: "Minardi nahm von 1985-2005 (20 Saisons) ohne Podium teil, die längste Durststrecke. Ihre besten Ergebnisse waren zwei 4. Plätze, zeigten Widerstandsfähigkeit trotz begrenzter Ressourcen.",
        nl: "Minardi streed van 1985-2005 (20 seizoenen) zonder een podium, de langste droogte. Hun beste finishes waren twee 4e plaatsen wat veerkracht toont ondanks beperkte middelen."
      }
    },
    {
      question: {
        en: "What is the record for most safety car periods in a single race?",
        es: "¿Cuál es el récord de más períodos de safety car en una sola carrera?",
        de: "Was ist der Rekord für die meisten Safety-Car-Phasen in einem einzelnen Rennen?",
        nl: "Wat is het record voor de meeste safety car periodes in een enkele race?"
      },
      options: [
        "4 safety car periods (Canada 2011)",
        "3 safety car periods (typical chaotic race)",
        "5 safety car periods (Singapore 2017)",
        "6 safety car periods (Baku 2017)"
      ],
      correct: 0,
      explanation: {
        en: "The 2011 Canadian GP had 4 safety car deployments during the rain-affected race, contributing to the longest-ever F1 race at 4 hours and 4 minutes.",
        es: "El GP de Canadá 2011 tuvo 4 despliegues de safety car durante la carrera afectada por lluvia, contribuyendo a la carrera de F1 más larga de 4 horas y 4 minutos.",
        de: "Der Kanada GP 2011 hatte 4 Safety-Car-Einsätze während des regenbeeinträchtigten Rennens und trug zum längsten F1-Rennen mit 4 Stunden und 4 Minuten bei.",
        nl: "De 2011 Canadese GP had 4 safety car inzetten tijdens de door regen beïnvloede race, bijdragend aan de langste ooit F1 race van 4 uur en 4 minuten."
      }
    },
    {
      question: {
        en: "Which driver has the record for most career pole positions at different circuits?",
        es: "¿Qué piloto tiene el récord de más pole positions de carrera en diferentes circuitos?",
        de: "Welcher Fahrer hat den Rekord für die meisten Karriere-Pole-Positionen auf verschiedenen Strecken?",
        nl: "Welke coureur heeft het record voor de meeste carrière pole positions op verschillende circuits?"
      },
      options: [
        "Lewis Hamilton (30+ different circuits)",
        "Michael Schumacher (22 different circuits)",
        "Ayrton Senna (16 different circuits)",
        "Sebastian Vettel (19 different circuits)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has taken pole at 30+ different circuits during his career, the most variety, showing qualifying speed across all track types and eras.",
        es: "Lewis Hamilton ha tomado pole en más de 30 circuitos diferentes durante su carrera, la mayor variedad, mostrando velocidad de clasificación en todos los tipos de pista y eras.",
        de: "Lewis Hamilton holte auf 30+ verschiedenen Strecken während seiner Karriere die Pole, die meiste Vielfalt, zeigte Qualifying-Geschwindigkeit auf allen Streckentypen und Epochen.",
        nl: "Lewis Hamilton heeft pole behaald op 30+ verschillende circuits tijdens zijn carrière, de meeste variëteit, wat kwalificatie snelheid toont op alle track types en tijdperken."
      }
    },
    {
      question: {
        en: "What is the record for oldest driver to set a fastest lap?",
        es: "¿Cuál es el récord del piloto más viejo en establecer una vuelta rápida?",
        de: "Was ist der Rekord für den ältesten Fahrer, der eine schnellste Runde fuhr?",
        nl: "Wat is het record voor oudste coureur om een snelste ronde te zetten?"
      },
      options: [
        "Kimi Räikkönen (41 years, 337 days)",
        "Fernando Alonso (41 years, 279 days)",
        "Rubens Barrichello (38 years, 98 days)",
        "Michael Schumacher (43 years, 173 days)"
      ],
      correct: 3,
      explanation: {
        en: "Michael Schumacher set the fastest lap at 2012 European GP aged 43 years and 173 days, the oldest to achieve this, showing pace in his comeback years.",
        es: "Michael Schumacher estableció la vuelta rápida en el GP Europeo 2012 a los 43 años y 173 días, el más viejo en lograrlo, mostrando ritmo en sus años de regreso.",
        de: "Michael Schumacher fuhr beim Europäischen GP 2012 im Alter von 43 Jahren und 173 Tagen die schnellste Runde, der älteste, der dies erreichte, zeigte Tempo in seinen Comeback-Jahren.",
        nl: "Michael Schumacher zette de snelste ronde op de 2012 Europese GP op 43 jaar en 173 dagen oud, de oudste om dit te bereiken, wat tempo toont in zijn comeback jaren."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();