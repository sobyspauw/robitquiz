const level3 = (function() {
  const questions = [
    {
      question: {
        en: "Who holds the record for most fastest laps in F1 history?",
        es: "¿Quién tiene el récord de más vueltas rápidas en la historia de F1?",
        de: "Wer hält den Rekord für die meisten schnellsten Runden in der F1-Geschichte?",
        nl: "Wie heeft het record voor de meeste snelste rondes in F1 geschiedenis?"
      },
      options: [
        "Michael Schumacher (77)",
        "Lewis Hamilton (67)",
        "Kimi Räikkönen (46)",
        "Sebastian Vettel (38)"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher holds the record with 77 fastest laps during his career, ahead of Lewis Hamilton's 67. This record shows Schumacher's pace and tire management.",
        es: "Michael Schumacher tiene el récord con 77 vueltas rápidas durante su carrera, por delante de las 67 de Lewis Hamilton. Este récord muestra el ritmo y gestión de neumáticos de Schumacher.",
        de: "Michael Schumacher hält den Rekord mit 77 schnellsten Runden während seiner Karriere, vor Lewis Hamiltons 67. Dieser Rekord zeigt Schumachers Tempo und Reifenmanagement.",
        nl: "Michael Schumacher heeft het record met 77 snelste rondes tijdens zijn carrière, voor Lewis Hamiltons 67. Dit record toont Schumachers tempo en bandenbeheer."
      }
    },
    {
      question: {
        en: "What is the record for most laps led in a single F1 season?",
        es: "¿Cuál es el récord de más vueltas lideradas en una sola temporada de F1?",
        de: "Was ist der Rekord für die meisten geführten Runden in einer einzelnen F1-Saison?",
        nl: "Wat is het record voor de meeste geleidde rondes in een enkel F1 seizoen?"
      },
      options: [
        "739 laps",
        "826 laps",
        "1013 laps",
        "652 laps"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen led 1013 laps during the 2023 season, the most in a single season. This represents dominance throughout the year.",
        es: "Max Verstappen lideró 1013 vueltas durante la temporada 2023, la mayor cantidad en una sola temporada. Esto representa dominio durante todo el año.",
        de: "Max Verstappen führte 2023 1013 Runden an, die meisten in einer einzelnen Saison. Dies zeigt Dominanz das ganze Jahr über.",
        nl: "Max Verstappen leidde 1013 rondes tijdens het 2023 seizoen, de meeste in een enkel seizoen. Dit vertegenwoordigt dominantie het hele jaar door."
      }
    },
    {
      question: {
        en: "Which driver has the record for most wins at a single circuit?",
        es: "¿Qué piloto tiene el récord de más victorias en un solo circuito?",
        de: "Welcher Fahrer hat den Rekord für die meisten Siege auf einer einzelnen Strecke?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen op een enkel circuit?"
      },
      options: [
        "Ayrton Senna at Monaco (6 wins)",
        "Lewis Hamilton at Hungary (8 wins)",
        "Michael Schumacher at Magny-Cours (8 wins)",
        "Sebastian Vettel at Singapore (5 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has won 8 times at the Hungaroring, more than any driver at a single circuit. He's also won Monaco 3 times and Silverstone 8 times.",
        es: "Lewis Hamilton ha ganado 8 veces en Hungaroring, más que cualquier piloto en un solo circuito. También ganó 3 veces en Mónaco y 8 veces en Silverstone.",
        de: "Lewis Hamilton gewann 8 Mal am Hungaroring, mehr als jeder Fahrer auf einer einzelnen Strecke. Er gewann auch 3 Mal in Monaco und 8 Mal in Silverstone.",
        nl: "Lewis Hamilton heeft 8 keer gewonnen op de Hungaroring, meer dan enige coureur op een enkel circuit. Hij won ook 3 keer op Monaco en 8 keer op Silverstone."
      }
    },
    {
      question: {
        en: "What is the record for most podiums achieved by a driver in their debut season?",
        es: "¿Cuál es el récord de más podios logrados por un piloto en su temporada de debut?",
        de: "Was ist der Rekord für die meisten Podiumsplätze eines Fahrers in seiner Debütsaison?",
        nl: "Wat is het record voor de meeste podiums behaald door een coureur in hun debuutseizoen?"
      },
      options: [
        "9 podiums (Lewis Hamilton, 2007)",
        "12 podiums (Jacques Villeneuve, 1996)",
        "6 podiums (Fernando Alonso, 2001)",
        "7 podiums (Kimi Räikkönen, 2001)"
      ],
      correct: 1,
      explanation: {
        en: "Jacques Villeneuve achieved 12 podiums in his debut 1996 season with Williams, winning the championship the following year. Hamilton had 9 podiums in 2007.",
        es: "Jacques Villeneuve logró 12 podios en su temporada de debut de 1996 con Williams, ganando el campeonato al año siguiente. Hamilton tuvo 9 podios en 2007.",
        de: "Jacques Villeneuve erreichte 12 Podiumsplätze in seiner Debütsaison 1996 mit Williams und gewann im Folgejahr die Meisterschaft. Hamilton hatte 2007 9 Podiumsplätze.",
        nl: "Jacques Villeneuve behaalde 12 podiums in zijn debuutseizoen 1996 met Williams, en won het kampioenschap het volgende jaar. Hamilton had 9 podiums in 2007."
      }
    },
    {
      question: {
        en: "Which driver holds the record for most races before achieving their first win?",
        es: "¿Qué piloto tiene el récord de más carreras antes de lograr su primera victoria?",
        de: "Welcher Fahrer hält den Rekord für die meisten Rennen vor seinem ersten Sieg?",
        nl: "Welke coureur heeft het record voor de meeste races voor het behalen van hun eerste overwinning?"
      },
      options: [
        "Mark Webber (130 races)",
        "Rubens Barrichello (124 races)",
        "Sergio Perez (190 races)",
        "Nico Rosberg (111 races)"
      ],
      correct: 2,
      explanation: {
        en: "Sergio Perez waited 190 races before winning the 2020 Sakhir GP. Mark Webber won after 130 races, Rubens Barrichello after 124.",
        es: "Sergio Pérez esperó 190 carreras antes de ganar el GP de Sakhir 2020. Mark Webber ganó después de 130 carreras, Rubens Barrichello después de 124.",
        de: "Sergio Perez wartete 190 Rennen vor seinem Sieg beim Sakhir GP 2020. Mark Webber gewann nach 130 Rennen, Rubens Barrichello nach 124.",
        nl: "Sergio Perez wachtte 190 races voordat hij de 2020 Sakhir GP won. Mark Webber won na 130 races, Rubens Barrichello na 124."
      }
    },
    {
      question: {
        en: "What is the record for most Grand Slams (pole, win, fastest lap, led every lap)?",
        es: "¿Cuál es el récord de más Grand Slams (pole, victoria, vuelta rápida, lideró cada vuelta)?",
        de: "Was ist der Rekord für die meisten Grand Slams (Pole, Sieg, schnellste Runde, jede Runde geführt)?",
        nl: "Wat is het record voor de meeste Grand Slams (pole, overwinning, snelste ronde, elke ronde geleid)?"
      },
      options: [
        "Jim Clark (8 Grand Slams)",
        "Michael Schumacher (5 Grand Slams)",
        "Lewis Hamilton (6 Grand Slams)",
        "Ayrton Senna (3 Grand Slams)"
      ],
      correct: 0,
      explanation: {
        en: "Jim Clark achieved 8 Grand Slams during his career, the most in F1 history. This feat shows complete dominance in a race weekend.",
        es: "Jim Clark logró 8 Grand Slams durante su carrera, la mayor cantidad en la historia de F1. Esta hazaña muestra dominio completo en un fin de semana de carrera.",
        de: "Jim Clark erreichte 8 Grand Slams während seiner Karriere, die meisten in der F1-Geschichte. Diese Leistung zeigt vollständige Dominanz an einem Rennwochenende.",
        nl: "Jim Clark behaalde 8 Grand Slams tijdens zijn carrière, de meeste in F1 geschiedenis. Deze prestatie toont complete dominantie in een raceweekend."
      }
    },
    {
      question: {
        en: "Which team scored the most points in a single F1 season?",
        es: "¿Qué equipo anotó más puntos en una sola temporada de F1?",
        de: "Welches Team erzielte die meisten Punkte in einer einzelnen F1-Saison?",
        nl: "Welk team scoorde de meeste punten in een enkel F1 seizoen?"
      },
      options: [
        "Mercedes 2014 (701 points)",
        "Red Bull Racing 2023 (860 points)",
        "Ferrari 2004 (262 points)",
        "McLaren 1988 (199 points)"
      ],
      correct: 1,
      explanation: {
        en: "Red Bull Racing scored 860 points in 2023, the most ever by a team. Mercedes held the previous record with 765 points in 2016.",
        es: "Red Bull Racing anotó 860 puntos en 2023, la mayor cantidad de un equipo. Mercedes tenía el récord anterior con 765 puntos en 2016.",
        de: "Red Bull Racing erzielte 2023 860 Punkte, die meisten jemals von einem Team. Mercedes hielt den vorherigen Rekord mit 765 Punkten 2016.",
        nl: "Red Bull Racing scoorde 860 punten in 2023, de meeste ooit door een team. Mercedes had het vorige record met 765 punten in 2016."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive points finishes from race starts?",
        es: "¿Cuál es el récord de más finales con puntos consecutivos desde inicios de carrera?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Punkte-Platzierungen ab Karrierebeginn?",
        nl: "Wat is het record voor de meeste opeenvolgende punten finishes vanaf race starts?"
      },
      options: [
        "Lewis Hamilton (33 races)",
        "Charles Leclerc (16 races)",
        "Max Verstappen (18 races)",
        "George Russell (36 races)"
      ],
      correct: 3,
      explanation: {
        en: "George Russell scored points in his first 36 consecutive race starts with Mercedes (2022-2023), a remarkable consistency record from the beginning.",
        es: "George Russell anotó puntos en sus primeros 36 inicios de carrera consecutivos con Mercedes (2022-2023), un récord notable de consistencia desde el principio.",
        de: "George Russell erzielte in seinen ersten 36 aufeinanderfolgenden Rennstarts mit Mercedes (2022-2023) Punkte, ein bemerkenswerter Konsistenzrekord von Anfang an.",
        nl: "George Russell scoorde punten in zijn eerste 36 opeenvolgende race starts met Mercedes (2022-2023), een opmerkelijk consistentie record vanaf het begin."
      }
    },
    {
      question: {
        en: "Which driver has the most wins from starting outside the top 10?",
        es: "¿Qué piloto tiene más victorias partiendo fuera del top 10?",
        de: "Welcher Fahrer hat die meisten Siege von Starts außerhalb der Top 10?",
        nl: "Welke coureur heeft de meeste overwinningen vanaf een start buiten de top 10?"
      },
      options: [
        "Kimi Räikkönen (5 wins)",
        "Lewis Hamilton (3 wins)",
        "Sebastian Vettel (4 wins)",
        "Fernando Alonso (3 wins)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen won 5 races after starting outside the top 10, including famous drives like Japan 2005 (started 17th). This shows exceptional racecraft.",
        es: "Kimi Räikkönen ganó 5 carreras después de partir fuera del top 10, incluyendo conducciones famosas como Japón 2005 (partió 17°). Esto muestra habilidad excepcional.",
        de: "Kimi Räikkönen gewann 5 Rennen nach Starts außerhalb der Top 10, darunter berühmte Fahrten wie Japan 2005 (Start von P17). Dies zeigt außergewöhnliche Rennkunst.",
        nl: "Kimi Räikkönen won 5 races na te starten buiten de top 10, inclusief beroemde ritten zoals Japan 2005 (startte 17e). Dit toont uitzonderlijke racevaardigheid."
      }
    },
    {
      question: {
        en: "What is the record for highest percentage of poles converted to wins in a season (min. 5 poles)?",
        es: "¿Cuál es el récord del porcentaje más alto de poles convertidas en victorias en una temporada (mín. 5 poles)?",
        de: "Was ist der Rekord für den höchsten Prozentsatz von Poles, die in einer Saison in Siege umgewandelt wurden (mind. 5 Poles)?",
        nl: "Wat is het record voor het hoogste percentage poles omgezet in overwinningen in een seizoen (min. 5 poles)?"
      },
      options: [
        "Ayrton Senna 1988 (100%, 13/13)",
        "Michael Schumacher 2004 (83%, 10/12)",
        "Sebastian Vettel 2011 (90%, 9/10)",
        "Lewis Hamilton 2015 (85%, 11/13)"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna converted all 13 pole positions into wins during 1988 with McLaren, a perfect 100% conversion rate, the highest ever with 5+ poles.",
        es: "Ayrton Senna convirtió las 13 pole positions en victorias durante 1988 con McLaren, una tasa de conversión perfecta del 100%, la más alta con 5+ poles.",
        de: "Ayrton Senna wandelte 1988 mit McLaren alle 13 Pole-Positionen in Siege um, eine perfekte Erfolgsquote von 100%, die höchste mit 5+ Poles.",
        nl: "Ayrton Senna zette alle 13 pole positions om in overwinningen tijdens 1988 met McLaren, een perfecte conversie van 100%, de hoogste ooit met 5+ poles."
      }
    },
    {
      question: {
        en: "Which circuit has hosted the most F1 World Championship races?",
        es: "¿Qué circuito ha albergado más carreras del Campeonato Mundial de F1?",
        de: "Welche Strecke hat die meisten F1-Weltmeisterschaftsrennen ausgetragen?",
        nl: "Welk circuit heeft de meeste F1 Wereldkampioenschap races georganiseerd?"
      },
      options: [
        "Monza (74 races)",
        "Monaco (71 races)",
        "Silverstone (77 races)",
        "Spa-Francorchamps (69 races)"
      ],
      correct: 0,
      explanation: {
        en: "Monza has hosted 74 Italian Grands Prix since 1950, the most races at a single circuit. It's been on the calendar every year except 1980.",
        es: "Monza ha albergado 74 Grandes Premios de Italia desde 1950, la mayor cantidad de carreras en un solo circuito. Ha estado en el calendario todos los años excepto 1980.",
        de: "Monza hat seit 1950 74 Große Preise von Italien ausgetragen, die meisten Rennen auf einer einzelnen Strecke. Es war außer 1980 jedes Jahr im Kalender.",
        nl: "Monza heeft 74 Italiaanse Grands Prix georganiseerd sinds 1950, de meeste races op een enkel circuit. Het staat elk jaar op de kalender behalve 1980."
      }
    },
    {
      question: {
        en: "What is the record for most overtakes completed by a driver in a single race?",
        es: "¿Cuál es el récord de más adelantamientos completados por un piloto en una sola carrera?",
        de: "Was ist der Rekord für die meisten Überholmanöver eines Fahrers in einem einzelnen Rennen?",
        nl: "Wat is het record voor de meeste inhaalbewegingen voltooid door een coureur in een enkele race?"
      },
      options: [
        "Kimi Räikkönen, Japan 2005 (23 overtakes)",
        "Sebastian Vettel, Brazil 2012 (19 overtakes)",
        "Max Verstappen, Brazil 2016 (16 overtakes)",
        "Lewis Hamilton, Brazil 2021 (20 overtakes)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen completed 23 overtakes at the 2005 Japanese GP after starting 17th and finishing 1st, the most recorded overtakes in a single race.",
        es: "Kimi Räikkönen completó 23 adelantamientos en el GP de Japón 2005 después de partir 17° y terminar 1°, los adelantamientos más registrados en una sola carrera.",
        de: "Kimi Räikkönen vollendete 23 Überholmanöver beim Japan GP 2005 nach Start von P17 und Ziel auf P1, die meisten aufgezeichneten Überholmanöver in einem Rennen.",
        nl: "Kimi Räikkönen voltooide 23 inhaalmanoeuvres op de 2005 Japanse GP na te starten als 17e en te eindigen als 1e, de meeste geregistreerde inhaalmanoeuvres in een enkele race."
      }
    },
    {
      question: {
        en: "Which driver has the record for most championships won with different teams?",
        es: "¿Qué piloto tiene el récord de más campeonatos ganados con diferentes equipos?",
        de: "Welcher Fahrer hat den Rekord für die meisten mit verschiedenen Teams gewonnenen Meisterschaften?",
        nl: "Welke coureur heeft het record voor de meeste kampioenschappen gewonnen met verschillende teams?"
      },
      options: [
        "Lewis Hamilton (2 teams - McLaren, Mercedes)",
        "Michael Schumacher (2 teams - Benetton, Ferrari)",
        "Fernando Alonso (1 team - Renault)",
        "All tied with 2 teams"
      ],
      correct: 3,
      explanation: {
        en: "Multiple drivers won championships with 2 different teams: Hamilton (McLaren 2008, Mercedes 2014-20), Schumacher (Benetton 1994-95, Ferrari 2000-04), Fangio won with 4 teams.",
        es: "Varios pilotos ganaron campeonatos con 2 equipos diferentes: Hamilton (McLaren 2008, Mercedes 2014-20), Schumacher (Benetton 1994-95, Ferrari 2000-04), Fangio ganó con 4 equipos.",
        de: "Mehrere Fahrer gewannen Meisterschaften mit 2 verschiedenen Teams: Hamilton (McLaren 2008, Mercedes 2014-20), Schumacher (Benetton 1994-95, Ferrari 2000-04), Fangio gewann mit 4 Teams.",
        nl: "Meerdere coureurs wonnen kampioenschappen met 2 verschillende teams: Hamilton (McLaren 2008, Mercedes 2014-20), Schumacher (Benetton 1994-95, Ferrari 2000-04), Fangio won met 4 teams."
      }
    },
    {
      question: {
        en: "What is the record for most laps completed without a single DNF in a season?",
        es: "¿Cuál es el récord de más vueltas completadas sin un solo DNF en una temporada?",
        de: "Was ist der Rekord für die meisten gefahrenen Runden ohne einen einzigen DNF in einer Saison?",
        nl: "Wat is het record voor de meeste rondes voltooid zonder een enkele DNF in een seizoen?"
      },
      options: [
        "Lewis Hamilton 2019 (1181 laps)",
        "Nico Rosberg 2016 (1203 laps)",
        "Fernando Alonso 2022 (1152 laps)",
        "Max Verstappen 2023 (1298 laps)"
      ],
      correct: 3,
      explanation: {
        en: "Max Verstappen completed all 1298 racing laps in the 2023 season without a DNF, finishing all 22 races, the most laps ever in a perfect reliability season.",
        es: "Max Verstappen completó todas las 1298 vueltas de carrera en la temporada 2023 sin un DNF, terminando todas las 22 carreras, las vueltas más en una temporada de confiabilidad perfecta.",
        de: "Max Verstappen fuhr 2023 alle 1298 Rennrunden ohne DNF und beendete alle 22 Rennen, die meisten Runden jemals in einer Saison mit perfekter Zuverlässigkeit.",
        nl: "Max Verstappen voltooide alle 1298 race rondes in het 2023 seizoen zonder een DNF, alle 22 races uitrijdend, de meeste rondes ooit in een perfect betrouwbaarheids seizoen."
      }
    },
    {
      question: {
        en: "Which driver holds the record for most races led from start to finish?",
        es: "¿Qué piloto tiene el récord de más carreras lideradas de principio a fin?",
        de: "Welcher Fahrer hält den Rekord für die meisten Rennen von Start bis Ziel geführt?",
        nl: "Welke coureur heeft het record voor de meeste races geleid van start tot finish?"
      },
      options: [
        "Ayrton Senna (19 races)",
        "Michael Schumacher (24 races)",
        "Lewis Hamilton (21 races)",
        "Jim Clark (17 races)"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher led 24 races from lights to flag, showing complete control. This includes dominant performances at tracks like Suzuka and Magny-Cours.",
        es: "Michael Schumacher lideró 24 carreras de semáforo a bandera, mostrando control completo. Esto incluye actuaciones dominantes en circuitos como Suzuka y Magny-Cours.",
        de: "Michael Schumacher führte 24 Rennen von Ampel bis Flagge und zeigte vollständige Kontrolle. Dies umfasst dominante Leistungen auf Strecken wie Suzuka und Magny-Cours.",
        nl: "Michael Schumacher leidde 24 races van lichten tot vlag, wat complete controle toont. Dit omvat dominante prestaties op circuits zoals Suzuka en Magny-Cours."
      }
    },
    {
      question: {
        en: "What is the record for most pit stops completed in a single F1 race?",
        es: "¿Cuál es el récord de más paradas en boxes completadas en una sola carrera de F1?",
        de: "Was ist der Rekord für die meisten Boxenstopps in einem einzelnen F1-Rennen?",
        nl: "Wat is het record voor de meeste pitstops voltooid in een enkele F1 race?"
      },
      options: [
        "11 pit stops (Canada 2011)",
        "8 pit stops (Malaysia 2013)",
        "9 pit stops (China 2007)",
        "7 pit stops (Monaco 2016)"
      ],
      correct: 0,
      explanation: {
        en: "Several drivers made 11 pit stops during the chaotic 2011 Canadian GP due to heavy rain and changing conditions, the most in a single race.",
        es: "Varios pilotos hicieron 11 paradas en boxes durante el caótico GP de Canadá 2011 debido a la lluvia intensa y las condiciones cambiantes, las más en una sola carrera.",
        de: "Mehrere Fahrer machten 11 Boxenstopps während des chaotischen Kanada GP 2011 aufgrund von starkem Regen und wechselnden Bedingungen, die meisten in einem Rennen.",
        nl: "Verschillende coureurs maakten 11 pitstops tijdens de chaotische 2011 Canadese GP vanwege hevige regen en wisselende omstandigheden, de meeste in een enkele race."
      }
    },
    {
      question: {
        en: "Which driver has the most race starts without ever winning a championship?",
        es: "¿Qué piloto tiene más inicios de carrera sin ganar un campeonato?",
        de: "Welcher Fahrer hat die meisten Rennstarts ohne jemals eine Meisterschaft gewonnen zu haben?",
        nl: "Welke coureur heeft de meeste race starts zonder ooit een kampioenschap te winnen?"
      },
      options: [
        "Rubens Barrichello (326 starts)",
        "Nick Heidfeld (183 starts)",
        "Sergio Perez (260+ starts)",
        "Felipe Massa (269 starts)"
      ],
      correct: 0,
      explanation: {
        en: "Rubens Barrichello started 326 races without winning a championship, though he finished runner-up twice (2002, 2004) with Ferrari.",
        es: "Rubens Barrichello inició 326 carreras sin ganar un campeonato, aunque terminó subcampeón dos veces (2002, 2004) con Ferrari.",
        de: "Rubens Barrichello startete 326 Rennen ohne eine Meisterschaft zu gewinnen, obwohl er zweimal Zweiter wurde (2002, 2004) mit Ferrari.",
        nl: "Rubens Barrichello startte 326 races zonder een kampioenschap te winnen, hoewel hij twee keer tweede werd (2002, 2004) met Ferrari."
      }
    },
    {
      question: {
        en: "What is the record for youngest podium finisher in F1 history?",
        es: "¿Cuál es el récord del finalista más joven en podio en la historia de F1?",
        de: "Was ist der Rekord für den jüngsten Podiumsplatzierten in der F1-Geschichte?",
        nl: "Wat is het record voor jongste podium finisher in F1 geschiedenis?"
      },
      options: [
        "Max Verstappen (18 years, 228 days)",
        "Sebastian Vettel (21 years, 73 days)",
        "Lance Stroll (18 years, 239 days)",
        "Lando Norris (19 years, 210 days)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen finished 2nd at the 2016 Spanish GP aged 18 years and 228 days, the youngest ever podium finisher after winning on debut with Red Bull.",
        es: "Max Verstappen terminó 2° en el GP de España 2016 con 18 años y 228 días, el finalista más joven en podio tras ganar en su debut con Red Bull.",
        de: "Max Verstappen wurde beim Spanien GP 2016 im Alter von 18 Jahren und 228 Tagen Zweiter, der jüngste Podiumsplatzierende nach seinem Debütsieg mit Red Bull.",
        nl: "Max Verstappen eindigde als 2e op de 2016 Spaanse GP op 18 jaar en 228 dagen oud, de jongste podium finisher ooit na te winnen bij zijn debuut met Red Bull."
      }
    },
    {
      question: {
        en: "Which constructor has the most 1-2 finishes in F1 history?",
        es: "¿Qué constructor tiene más finales 1-2 en la historia de F1?",
        de: "Welcher Konstrukteur hat die meisten 1-2-Zieleinläufe in der F1-Geschichte?",
        nl: "Welke constructeur heeft de meeste 1-2 finishes in F1 geschiedenis?"
      },
      options: [
        "Ferrari (86 times)",
        "Mercedes (82 times)",
        "McLaren (64 times)",
        "Red Bull Racing (57 times)"
      ],
      correct: 1,
      explanation: {
        en: "Mercedes achieved 82 one-two finishes, particularly during their dominant 2014-2020 era. Ferrari has 85 and McLaren 64 in their long histories.",
        es: "Mercedes logró 82 finales uno-dos, particularmente durante su era dominante 2014-2020. Ferrari tiene 85 y McLaren 64 en sus largas historias.",
        de: "Mercedes erreichte 82 Doppelsiege, besonders während ihrer dominanten Ära 2014-2020. Ferrari hat 85 und McLaren 64 in ihren langen Geschichten.",
        nl: "Mercedes behaalde 82 een-twee finishes, vooral tijdens hun dominante 2014-2020 era. Ferrari heeft 85 en McLaren 64 in hun lange geschiedenissen."
      }
    },
    {
      question: {
        en: "What is the record for most race wins in a driver's final season?",
        es: "¿Cuál es el récord de más victorias de carrera en la última temporada de un piloto?",
        de: "Was ist der Rekord für die meisten Rennsiege in der letzten Saison eines Fahrers?",
        nl: "Wat is het record voor de meeste race overwinningen in het laatste seizoen van een coureur?"
      },
      options: [
        "Alain Prost 1993 (7 wins)",
        "Niki Lauda 1985 (5 wins)",
        "Michael Schumacher 2012 (0 wins)",
        "Kimi Räikkönen 2021 (0 wins)"
      ],
      correct: 0,
      explanation: {
        en: "Alain Prost won 7 races and the championship in his final 1993 season with Williams, retiring as champion at the peak of his powers.",
        es: "Alain Prost ganó 7 carreras y el campeonato en su última temporada 1993 con Williams, retirándose como campeón en el pico de sus poderes.",
        de: "Alain Prost gewann 7 Rennen und die Meisterschaft in seiner letzten Saison 1993 mit Williams und ging als Champion auf dem Höhepunkt seiner Kräfte.",
        nl: "Alain Prost won 7 races en het kampioenschap in zijn laatste 1993 seizoen met Williams, afscheid nemend als kampioen op het hoogtepunt van zijn kunnen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races between their first and last win?",
        es: "¿Qué piloto tiene el récord de más carreras entre su primera y última victoria?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen zwischen seinem ersten und letzten Sieg?",
        nl: "Welke coureur heeft het record voor de meeste races tussen hun eerste en laatste overwinning?"
      },
      options: [
        "Kimi Räikkönen (347 races)",
        "Fernando Alonso (240+ races)",
        "Rubens Barrichello (178 races)",
        "Lewis Hamilton (280+ races)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen's wins spanned 347 races from Malaysia 2003 to USA 2018, showing his longevity and ability to remain competitive across eras.",
        es: "Las victorias de Kimi Räikkönen abarcaron 347 carreras desde Malasia 2003 hasta USA 2018, mostrando su longevidad y capacidad de mantenerse competitivo a través de eras.",
        de: "Kimi Räikkönens Siege erstreckten sich über 347 Rennen von Malaysia 2003 bis USA 2018 und zeigten seine Langlebigkeit und Wettbewerbsfähigkeit über Epochen hinweg.",
        nl: "Kimi Räikkönens overwinningen besloegen 347 races van Maleisië 2003 tot USA 2018, wat zijn duurzaamheid en vermogen om competitief te blijven over tijdperken toont."
      }
    },
    {
      question: {
        en: "What is the record for fewest races needed to reach 50 wins?",
        es: "¿Cuál es el récord de menos carreras necesarias para alcanzar 50 victorias?",
        de: "Was ist der Rekord für die wenigsten Rennen, die benötigt werden, um 50 Siege zu erreichen?",
        nl: "Wat is het record voor de minste races nodig om 50 overwinningen te bereiken?"
      },
      options: [
        "Sebastian Vettel (166 races)",
        "Michael Schumacher (158 races)",
        "Lewis Hamilton (190 races)",
        "Max Verstappen (141 races)"
      ],
      correct: 3,
      explanation: {
        en: "Max Verstappen reached 50 wins in just 141 races at the 2023 USA GP, the fastest rate to 50 wins, ahead of Vettel (166) and Schumacher (158).",
        es: "Max Verstappen alcanzó 50 victorias en solo 141 carreras en el GP de USA 2023, el ritmo más rápido a 50 victorias, por delante de Vettel (166) y Schumacher (158).",
        de: "Max Verstappen erreichte 50 Siege in nur 141 Rennen beim USA GP 2023, die schnellste Rate zu 50 Siegen, vor Vettel (166) und Schumacher (158).",
        nl: "Max Verstappen bereikte 50 overwinningen in slechts 141 races op de 2023 USA GP, het snelste tempo naar 50 overwinningen, voor Vettel (166) en Schumacher (158)."
      }
    },
    {
      question: {
        en: "Which driver has the most wins at wet/mixed condition races?",
        es: "¿Qué piloto tiene más victorias en carreras con condiciones húmedas/mixtas?",
        de: "Welcher Fahrer hat die meisten Siege bei Nass-/Mischbedingungsrennen?",
        nl: "Welke coureur heeft de meeste overwinningen in natte/gemengde omstandigheden races?"
      },
      options: [
        "Lewis Hamilton (11 wins)",
        "Michael Schumacher (9 wins)",
        "Ayrton Senna (6 wins)",
        "Max Verstappen (8 wins)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has won 11 wet or mixed condition races, more than any driver. Senna was famous for wet races but Hamilton has surpassed his tally.",
        es: "Lewis Hamilton ha ganado 11 carreras en condiciones húmedas o mixtas, más que cualquier piloto. Senna era famoso por carreras húmedas pero Hamilton superó su cuenta.",
        de: "Lewis Hamilton hat 11 Rennen bei nassen oder gemischten Bedingungen gewonnen, mehr als jeder Fahrer. Senna war berühmt für Nassrennen, aber Hamilton übertraf seine Bilanz.",
        nl: "Lewis Hamilton heeft 11 natte of gemengde omstandigheden races gewonnen, meer dan enige coureur. Senna was beroemd voor natte races maar Hamilton heeft zijn aantal overtroffen."
      }
    },
    {
      question: {
        en: "What is the record for highest winning percentage in a season (min. 10 races)?",
        es: "¿Cuál es el récord del porcentaje de victorias más alto en una temporada (mín. 10 carreras)?",
        de: "Was ist der Rekord für den höchsten Siegprozentsatz in einer Saison (mind. 10 Rennen)?",
        nl: "Wat is het record voor het hoogste winnende percentage in een seizoen (min. 10 races)?"
      },
      options: [
        "Michael Schumacher 2004 (72%, 13/18)",
        "Sebastian Vettel 2013 (84%, 13/19)",
        "Max Verstappen 2023 (86%, 19/22)",
        "Alberto Ascari 1952 (75%, 6/8)"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen won 86% of races in 2023 (19/22), the highest win rate in a season with 10+ races, surpassing Vettel's 84% in 2013.",
        es: "Max Verstappen ganó el 86% de las carreras en 2023 (19/22), la tasa de victoria más alta en una temporada con 10+ carreras, superando el 84% de Vettel en 2013.",
        de: "Max Verstappen gewann 2023 86% der Rennen (19/22), die höchste Gewinnrate in einer Saison mit 10+ Rennen, übertraf Vettels 84% von 2013.",
        nl: "Max Verstappen won 86% van de races in 2023 (19/22), het hoogste winpercentage in een seizoen met 10+ races, overtroffen Vettels 84% in 2013."
      }
    },
    {
      question: {
        en: "Which driver has the record for most consecutive seasons with at least one win?",
        es: "¿Qué piloto tiene el récord de más temporadas consecutivas con al menos una victoria?",
        de: "Welcher Fahrer hat den Rekord für die meisten aufeinanderfolgenden Saisons mit mindestens einem Sieg?",
        nl: "Welke coureur heeft het record voor de meeste opeenvolgende seizoenen met ten minste één overwinning?"
      },
      options: [
        "Michael Schumacher (15 seasons, 1992-2006)",
        "Lewis Hamilton (16 seasons, 2007-2022)",
        "Fernando Alonso (7 seasons, 2003-2013)",
        "Sebastian Vettel (9 seasons, 2008-2019)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton won at least one race in 16 consecutive seasons from 2007-2022, breaking Schumacher's record of 15 seasons (1992-2006).",
        es: "Lewis Hamilton ganó al menos una carrera en 16 temporadas consecutivas desde 2007-2022, rompiendo el récord de Schumacher de 15 temporadas (1992-2006).",
        de: "Lewis Hamilton gewann von 2007-2022 in 16 aufeinanderfolgenden Saisons mindestens ein Rennen und brach Schumachers Rekord von 15 Saisons (1992-2006).",
        nl: "Lewis Hamilton won ten minste één race in 16 opeenvolgende seizoenen van 2007-2022, waarmee hij Schumachers record van 15 seizoenen (1992-2006) verbrak."
      }
    },
    {
      question: {
        en: "What is the record for most points scored in a single race weekend (Sprint + Race)?",
        es: "¿Cuál es el récord de más puntos anotados en un solo fin de semana de carrera (Sprint + Carrera)?",
        de: "Was ist der Rekord für die meisten in einem Rennwochenende erzielten Punkte (Sprint + Rennen)?",
        nl: "Wat is het record voor de meeste punten gescoord in een enkel race weekend (Sprint + Race)?"
      },
      options: [
        "26 points (1st Sprint, 1st Race)",
        "34 points (1st Sprint, 1st Race, Fastest Lap)",
        "27 points (1st Sprint, 1st Race)",
        "35 points (1st Sprint, 1st Race, Fastest Lap)"
      ],
      correct: 1,
      explanation: {
        en: "With the Sprint format, a driver can score 34 points maximum: 8 for Sprint win, 25 for race win, and 1 for fastest lap.",
        es: "Con el formato Sprint, un piloto puede anotar 34 puntos máximo: 8 por victoria en Sprint, 25 por victoria en carrera, y 1 por vuelta rápida.",
        de: "Mit dem Sprint-Format kann ein Fahrer maximal 34 Punkte erzielen: 8 für Sprint-Sieg, 25 für Rennsieg und 1 für schnellste Runde.",
        nl: "Met het Sprint formaat kan een coureur maximaal 34 punten scoren: 8 voor Sprint overwinning, 25 voor race overwinning, en 1 voor snelste ronde."
      }
    },
    {
      question: {
        en: "Which driver has the most podiums without ever scoring a Grand Slam?",
        es: "¿Qué piloto tiene más podios sin lograr un Grand Slam?",
        de: "Welcher Fahrer hat die meisten Podiumsplätze ohne jemals einen Grand Slam erzielt zu haben?",
        nl: "Welke coureur heeft de meeste podiums zonder ooit een Grand Slam te scoren?"
      },
      options: [
        "Fernando Alonso (106 podiums)",
        "Valtteri Bottas (67 podiums)",
        "Rubens Barrichello (68 podiums)",
        "Felipe Massa (41 podiums)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso has 106 podiums (32 wins) but never achieved a Grand Slam (pole, win, fastest lap, led every lap) despite his success.",
        es: "Fernando Alonso tiene 106 podios (32 victorias) pero nunca logró un Grand Slam (pole, victoria, vuelta rápida, liderar cada vuelta) a pesar de su éxito.",
        de: "Fernando Alonso hat 106 Podiumsplätze (32 Siege), aber nie einen Grand Slam (Pole, Sieg, schnellste Runde, jede Runde geführt) erreicht trotz seines Erfolgs.",
        nl: "Fernando Alonso heeft 106 podiums (32 overwinningen) maar behaalde nooit een Grand Slam (pole, overwinning, snelste ronde, elke ronde geleid) ondanks zijn succes."
      }
    },
    {
      question: {
        en: "What is the record for largest points swing between consecutive races?",
        es: "¿Cuál es el récord del mayor cambio de puntos entre carreras consecutivas?",
        de: "Was ist der Rekord für die größte Punkteschwankung zwischen aufeinanderfolgenden Rennen?",
        nl: "Wat is het record voor de grootste punten schommeling tussen opeenvolgende races?"
      },
      options: [
        "44 points (Verstappen, 2021 Silverstone-Hungary)",
        "32 points (Hamilton, 2007 China-Brazil)",
        "36 points (Vettel, 2010 Korea-Abu Dhabi)",
        "39 points (Räikkönen, 2007 Belgium-Japan)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen had a 44-point swing in 2021: lost 25 at Silverstone (DNF while leading), then won Hungary while Hamilton finished 2nd, closing a 33-point gap.",
        es: "Max Verstappen tuvo un cambio de 44 puntos en 2021: perdió 25 en Silverstone (DNF liderando), luego ganó Hungría mientras Hamilton terminó 2°, cerrando una brecha de 33 puntos.",
        de: "Max Verstappen hatte 2021 eine 44-Punkte-Schwankung: verlor 25 in Silverstone (DNF während er führte), gewann dann Ungarn während Hamilton Zweiter wurde, schloss eine 33-Punkte-Lücke.",
        nl: "Max Verstappen had een 44-punten schommeling in 2021: verloor 25 op Silverstone (DNF terwijl hij leidde), won toen Hongarije terwijl Hamilton 2e werd, sloot een 33-punten gat."
      }
    },
    {
      question: {
        en: "Which driver holds the record for most race entries (starts + DNQs)?",
        es: "¿Qué piloto tiene el récord de más entradas de carrera (salidas + DNQs)?",
        de: "Welcher Fahrer hält den Rekord für die meisten Renneintragungen (Starts + DNQs)?",
        nl: "Welke coureur heeft het record voor de meeste race inschrijvingen (starts + DNQs)?"
      },
      options: [
        "Rubens Barrichello (326 entries)",
        "Fernando Alonso (370+ entries)",
        "Kimi Räikkönen (353 entries)",
        "Lewis Hamilton (330+ entries)"
      ],
      correct: 2,
      explanation: {
        en: "Kimi Räikkönen entered 353 races (started 349) during his career from 2001-2021, the most race entries in F1 history.",
        es: "Kimi Räikkönen participó en 353 carreras (salió en 349) durante su carrera de 2001-2021, las entradas de carrera más en la historia de F1.",
        de: "Kimi Räikkönen trat von 2001-2021 zu 353 Rennen an (startete 349), die meisten Renneintragungen in der F1-Geschichte.",
        nl: "Kimi Räikkönen schreef zich in voor 353 races (startte 349) tijdens zijn carrière van 2001-2021, de meeste race inschrijvingen in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive front row lockouts by a team?",
        es: "¿Cuál es el récord de más bloqueos consecutivos de primera fila por un equipo?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Sperrungen der ersten Reihe durch ein Team?",
        nl: "Wat is het record voor de meeste opeenvolgende eerste rij lockouts door een team?"
      },
      options: [
        "McLaren 1988 (10 consecutive)",
        "Mercedes 2015-2016 (12 consecutive)",
        "Ferrari 2001-2002 (8 consecutive)",
        "Red Bull 2011 (7 consecutive)"
      ],
      correct: 1,
      explanation: {
        en: "Mercedes locked out the front row for 12 consecutive races from Mexico 2015 to Russia 2016, showing complete qualifying dominance during the hybrid era.",
        es: "Mercedes bloqueó la primera fila durante 12 carreras consecutivas desde México 2015 hasta Rusia 2016, mostrando dominio completo en clasificación durante la era híbrida.",
        de: "Mercedes sperrte von Mexiko 2015 bis Russland 2016 12 aufeinanderfolgende Rennen die erste Reihe und zeigte vollständige Qualifying-Dominanz in der Hybrid-Ära.",
        nl: "Mercedes blokkeerde de eerste rij voor 12 opeenvolgende races van Mexico 2015 tot Rusland 2016, wat complete kwalificatie dominantie tijdens het hybride tijdperk toont."
      }
    },
    {
      question: {
        en: "Which driver has the record for most different teams driven for in F1?",
        es: "¿Qué piloto tiene el récord de más equipos diferentes para los que ha conducido en F1?",
        de: "Welcher Fahrer hat den Rekord für die meisten verschiedenen Teams in der F1 gefahren?",
        nl: "Welke coureur heeft het record voor de meeste verschillende teams waarvoor gereden in F1?"
      },
      options: [
        "Jarno Trulli (7 teams)",
        "Fernando Alonso (5 teams)",
        "Vitantonio Liuzzi (8 teams)",
        "Jean-Pierre Jarier (11 teams)"
      ],
      correct: 3,
      explanation: {
        en: "Jean-Pierre Jarier drove for 11 different teams between 1971-1983: March, Shadow, Penske, ATS, Lotus, Ligier, Osella, and others during a journeyman career.",
        es: "Jean-Pierre Jarier condujo para 11 equipos diferentes entre 1971-1983: March, Shadow, Penske, ATS, Lotus, Ligier, Osella, y otros durante una carrera itinerante.",
        de: "Jean-Pierre Jarier fuhr zwischen 1971-1983 für 11 verschiedene Teams: March, Shadow, Penske, ATS, Lotus, Ligier, Osella und andere während einer Wanderkarriere.",
        nl: "Jean-Pierre Jarier reed voor 11 verschillende teams tussen 1971-1983: March, Shadow, Penske, ATS, Lotus, Ligier, Osella, en anderen tijdens een zwervende carrière."
      }
    },
    {
      question: {
        en: "What is the record for most points scored by a non-winning driver in a season?",
        es: "¿Cuál es el récord de más puntos anotados por un piloto sin victorias en una temporada?",
        de: "Was ist der Rekord für die meisten Punkte eines nicht siegreichen Fahrers in einer Saison?",
        nl: "Wat is het record voor de meeste punten gescoord door een niet-winnende coureur in een seizoen?"
      },
      options: [
        "Fernando Alonso 2022 (81 points)",
        "Sergio Perez 2023 (285 points)",
        "Valtteri Bottas 2017 (305 points)",
        "Lando Norris 2021 (160 points)"
      ],
      correct: 1,
      explanation: {
        en: "Sergio Perez scored 285 points in 2023 with 2 wins, but excluding wins, drivers like Bottas (2017) and Norris (2021) scored high without winning.",
        es: "Sergio Pérez anotó 285 puntos en 2023 con 2 victorias, pero excluyendo victorias, pilotos como Bottas (2017) y Norris (2021) anotaron alto sin ganar.",
        de: "Sergio Perez erzielte 2023 285 Punkte mit 2 Siegen, aber ohne Siege erzielten Fahrer wie Bottas (2017) und Norris (2021) hohe Punktzahlen.",
        nl: "Sergio Perez scoorde 285 punten in 2023 met 2 overwinningen, maar exclusief overwinningen scoorden coureurs zoals Bottas (2017) en Norris (2021) hoog zonder te winnen."
      }
    },
    {
      question: {
        en: "Which circuit has seen the most different winners in F1 history?",
        es: "¿Qué circuito ha visto más ganadores diferentes en la historia de F1?",
        de: "Welche Strecke hatte die meisten verschiedenen Sieger in der F1-Geschichte?",
        nl: "Welk circuit heeft de meeste verschillende winnaars gezien in F1 geschiedenis?"
      },
      options: [
        "Monaco (19 different winners)",
        "Monza (28 different winners)",
        "Silverstone (23 different winners)",
        "Spa-Francorchamps (26 different winners)"
      ],
      correct: 1,
      explanation: {
        en: "Monza has seen 28 different winners since 1950, the most of any circuit due to its long history and variety of competitive eras.",
        es: "Monza ha visto 28 ganadores diferentes desde 1950, la mayor cantidad de cualquier circuito debido a su larga historia y variedad de eras competitivas.",
        de: "Monza hatte seit 1950 28 verschiedene Sieger, die meisten einer Strecke aufgrund ihrer langen Geschichte und Vielfalt an Wettbewerbsären.",
        nl: "Monza heeft 28 verschillende winnaars gezien sinds 1950, de meeste van elk circuit vanwege zijn lange geschiedenis en variëteit aan competitieve tijdperken."
      }
    },
    {
      question: {
        en: "What is the record for most positions gained from start to finish in a single race?",
        es: "¿Cuál es el récord de más posiciones ganadas desde el inicio hasta el final en una sola carrera?",
        de: "Was ist der Rekord für die meisten vom Start bis zum Ziel gewonnenen Positionen in einem einzelnen Rennen?",
        nl: "Wat is het record voor de meeste posities gewonnen van start tot finish in een enkele race?"
      },
      options: [
        "John Watson, USA 1983 (22nd to 1st, +21)",
        "Kimi Räikkönen, Japan 2005 (17th to 1st, +16)",
        "Sebastian Vettel, Brazil 2012 (24th to 6th, +18)",
        "Max Verstappen, Belgium 2022 (14th to 1st, +13)"
      ],
      correct: 0,
      explanation: {
        en: "John Watson started 22nd and won the 1983 USA GP (Long Beach), gaining 21 positions, the most in F1 history from grid to finish.",
        es: "John Watson partió 22° y ganó el GP de USA 1983 (Long Beach), ganando 21 posiciones, las más en la historia de F1 desde la parrilla hasta el final.",
        de: "John Watson startete 22. und gewann den USA GP 1983 (Long Beach) und gewann 21 Positionen, die meisten in der F1-Geschichte vom Grid bis zum Ziel.",
        nl: "John Watson startte als 22e en won de 1983 USA GP (Long Beach), 21 posities winnend, de meeste in F1 geschiedenis van grid tot finish."
      }
    },
    {
      question: {
        en: "Which driver has the record for most seasons finishing in the points every race?",
        es: "¿Qué piloto tiene el récord de más temporadas terminando en los puntos cada carrera?",
        de: "Welcher Fahrer hat den Rekord für die meisten Saisons mit Punkten in jedem Rennen?",
        nl: "Welke coureur heeft het record voor de meeste seizoenen eindigend in de punten elke race?"
      },
      options: [
        "Lewis Hamilton (1 season - 2019)",
        "Max Verstappen (2 seasons - 2020, 2023)",
        "Nico Rosberg (1 season - 2016)",
        "No driver has achieved this"
      ],
      correct: 3,
      explanation: {
        en: "No driver has finished in points (top 10) in every single race of a season. Even the most consistent drivers had at least one race outside points.",
        es: "Ningún piloto ha terminado en puntos (top 10) en cada carrera de una temporada. Incluso los pilotos más consistentes tuvieron al menos una carrera fuera de puntos.",
        de: "Kein Fahrer hat in jedem einzelnen Rennen einer Saison Punkte (Top 10) erzielt. Selbst die konsistentesten Fahrer hatten mindestens ein Rennen ohne Punkte.",
        nl: "Geen coureur heeft in elke race van een seizoen in de punten (top 10) gefinisht. Zelfs de meest consistente coureurs hadden minstens één race buiten de punten."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive races finishing on the same podium position?",
        es: "¿Cuál es el récord de más carreras consecutivas finalizando en la misma posición de podio?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennen auf derselben Podiumsposition?",
        nl: "Wat is het record voor de meeste opeenvolgende races eindigend op dezelfde podium positie?"
      },
      options: [
        "Michael Schumacher (5 consecutive 2nds)",
        "Valtteri Bottas (4 consecutive 2nds)",
        "Lewis Hamilton (4 consecutive 3rds)",
        "Rubens Barrichello (6 consecutive 2nds)"
      ],
      correct: 3,
      explanation: {
        en: "Rubens Barrichello finished 2nd in 6 consecutive races during 2002 with Ferrari, always behind teammate Michael Schumacher in team orders era.",
        es: "Rubens Barrichello terminó 2° en 6 carreras consecutivas durante 2002 con Ferrari, siempre detrás del compañero Michael Schumacher en la era de órdenes de equipo.",
        de: "Rubens Barrichello wurde 2002 mit Ferrari 6 aufeinanderfolgende Rennen Zweiter, immer hinter Teamkollege Michael Schumacher in der Teamorder-Ära.",
        nl: "Rubens Barrichello eindigde als 2e in 6 opeenvolgende races tijdens 2002 met Ferrari, altijd achter teamgenoot Michael Schumacher in het teamorders tijdperk."
      }
    },
    {
      question: {
        en: "Which driver has the most career points without ever winning a race?",
        es: "¿Qué piloto tiene más puntos en su carrera sin ganar una carrera?",
        de: "Welcher Fahrer hat die meisten Karrierepunkte ohne jemals ein Rennen gewonnen zu haben?",
        nl: "Welke coureur heeft de meeste carrière punten zonder ooit een race te winnen?"
      },
      options: [
        "Nick Heidfeld (259 points)",
        "Nico Hulkenberg (530+ points)",
        "Sergio Perez (before his first win, 190 points)",
        "Adrian Sutil (124 points)"
      ],
      correct: 1,
      explanation: {
        en: "Nico Hulkenberg has scored 530+ career points without a win, the most by a non-winner. He has 2 pole positions but never stood on the podium.",
        es: "Nico Hulkenberg ha anotado más de 530 puntos en su carrera sin una victoria, la mayor cantidad de un no ganador. Tiene 2 pole positions pero nunca subió al podio.",
        de: "Nico Hulkenberg hat über 530 Karrierepunkte ohne Sieg erzielt, die meisten eines Nichtsiegers. Er hat 2 Pole-Positionen, stand aber nie auf dem Podium.",
        nl: "Nico Hulkenberg heeft 530+ carrière punten gescoord zonder een overwinning, de meeste door een niet-winnaar. Hij heeft 2 pole positions maar stond nooit op het podium."
      }
    },
    {
      question: {
        en: "What is the record for fastest time from last place to race leader during a race?",
        es: "¿Cuál es el récord del tiempo más rápido desde el último lugar hasta líder de carrera durante una carrera?",
        de: "Was ist der Rekord für die schnellste Zeit vom letzten Platz zum Rennführer während eines Rennens?",
        nl: "Wat is het record voor de snelste tijd van laatste plaats naar race leider tijdens een race?"
      },
      options: [
        "Lewis Hamilton, Germany 2018 (13 laps)",
        "Kimi Räikkönen, Japan 2005 (19 laps)",
        "Max Verstappen, Hungary 2022 (39 laps)",
        "Sebastian Vettel, Abu Dhabi 2012 (15 laps)"
      ],
      correct: 1,
      explanation: {
        en: "Kimi Räikkönen started last (17th) at 2005 Japan GP and led the race by lap 19, one of the fastest climbs from back to front in F1 history.",
        es: "Kimi Räikkönen partió último (17°) en el GP de Japón 2005 y lideró la carrera en la vuelta 19, uno de los ascensos más rápidos de atrás hacia adelante en la historia de F1.",
        de: "Kimi Räikkönen startete beim Japan GP 2005 als Letzter (17.) und führte das Rennen in Runde 19, einer der schnellsten Aufstiege von hinten nach vorne in der F1-Geschichte.",
        nl: "Kimi Räikkönen startte als laatste (17e) op de 2005 Japan GP en leidde de race bij ronde 19, een van de snelste klimmen van achter naar voren in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which team holds the record for most races without scoring a point?",
        es: "¿Qué equipo tiene el récord de más carreras sin anotar un punto?",
        de: "Welches Team hält den Rekord für die meisten Rennen ohne Punkte?",
        nl: "Welk team heeft het record voor de meeste races zonder een punt te scoren?"
      },
      options: [
        "HRT (56 consecutive races, 2010-2012)",
        "Marussia (34 consecutive races)",
        "Caterham (37 consecutive races)",
        "Manor (28 consecutive races)"
      ],
      correct: 0,
      explanation: {
        en: "HRT (Hispania Racing Team) competed in all 56 races from 2010-2012 without scoring a single point before folding, the longest pointless streak.",
        es: "HRT (Hispania Racing Team) compitió en todas las 56 carreras desde 2010-2012 sin anotar un solo punto antes de cerrar, la racha sin puntos más larga.",
        de: "HRT (Hispania Racing Team) nahm von 2010-2012 an allen 56 Rennen teil, ohne einen einzigen Punkt zu erzielen, bevor es aufgab, die längste punktlose Serie.",
        nl: "HRT (Hispania Racing Team) nam deel aan alle 56 races van 2010-2012 zonder een enkel punt te scoren voordat het ophield, de langste puntenloze reeks."
      }
    },
    {
      question: {
        en: "What is the record for most driver changes by a team in a single season?",
        es: "¿Cuál es el récord de más cambios de pilotos por un equipo en una sola temporada?",
        de: "Was ist der Rekord für die meisten Fahrerwechsel eines Teams in einer einzelnen Saison?",
        nl: "Wat is het record voor de meeste coureur wisselingen door een team in een enkel seizoen?"
      },
      options: [
        "Minardi 2005 (7 drivers)",
        "Toro Rosso 2019 (4 drivers)",
        "Sauber 2014 (5 drivers)",
        "Williams 2021 (3 drivers)"
      ],
      correct: 0,
      explanation: {
        en: "Minardi used 7 different drivers during the 2005 season: Albers, Doornbos, Friesacher, Albers again, and others due to financial and performance issues.",
        es: "Minardi usó 7 pilotos diferentes durante la temporada 2005: Albers, Doornbos, Friesacher, Albers nuevamente, y otros debido a problemas financieros y de rendimiento.",
        de: "Minardi setzte 2005 7 verschiedene Fahrer ein: Albers, Doornbos, Friesacher, wieder Albers und andere aufgrund finanzieller und Leistungsprobleme.",
        nl: "Minardi gebruikte 7 verschillende coureurs tijdens het 2005 seizoen: Albers, Doornbos, Friesacher, Albers opnieuw, en anderen vanwege financiële en prestatie problemen."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();