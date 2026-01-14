const level7 = (function() {
  const questions = [
    {
      question: {
        en: "What is the record for most consecutive laps completed without a single off-track excursion in a season?",
        es: "¿Cuál es el récord de más vueltas consecutivas completadas sin una sola excursión fuera de pista en una temporada?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Runden ohne eine einzige Abfahrt von der Strecke in einer Saison?",
        nl: "Wat is het record voor de meeste opeenvolgende rondes voltooid zonder een enkele uitstap buiten de baan in een seizoen?"
      },
      options: [
        "This statistic is not officially tracked",
        "Max Verstappen 2023 (1298 laps)",
        "Lewis Hamilton 2019 (1100+ laps)",
        "Sebastian Vettel 2011 (950 laps)"
      ],
      correct: 0,
      explanation: {
        en: "Off-track excursions (running wide, missing corners) aren't comprehensively tracked as an official F1 statistic, only major incidents are recorded.",
        es: "Las excursiones fuera de pista (salirse de pista, perder esquinas) no se rastrean exhaustivamente como estadística oficial de F1, solo se registran incidentes mayores.",
        de: "Abfahrten von der Strecke (weit fahren, Kurven verpassen) werden nicht umfassend als offizielle F1-Statistik erfasst, nur größere Vorfälle werden aufgezeichnet.",
        nl: "Uitstappen buiten de baan (wijd rijden, hoeken missen) worden niet uitgebreid bijgehouden als officiële F1 statistiek, alleen grote incidenten worden geregistreerd."
      }
    },
    {
      question: {
        en: "Which driver has the record for most race wins at circuits that debuted during their career?",
        es: "¿Qué piloto tiene el récord de más victorias en circuitos que debutaron durante su carrera?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennsiege auf Strecken, die während seiner Karriere debütierten?",
        nl: "Welke coureur heeft het record voor de meeste race overwinningen op circuits die debuteerden tijdens hun carrière?"
      },
      options: [
        "Lewis Hamilton (15+ wins at new circuits)",
        "Sebastian Vettel (12 wins at new circuits)",
        "Michael Schumacher (8 wins at new circuits)",
        "Fernando Alonso (7 wins at new circuits)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton won at 15+ circuits that were added to F1 during his career (2007-present), including Abu Dhabi, Singapore, Baku, Saudi Arabia, showing adaptability.",
        es: "Lewis Hamilton ganó en más de 15 circuitos que se agregaron a F1 durante su carrera (2007-presente), incluyendo Abu Dhabi, Singapur, Bakú, Arabia Saudita, mostrando adaptabilidad.",
        de: "Lewis Hamilton gewann auf über 15 Strecken, die während seiner Karriere (2007-heute) zur F1 hinzugefügt wurden, darunter Abu Dhabi, Singapur, Baku, Saudi-Arabien, zeigte Anpassungsfähigkeit.",
        nl: "Lewis Hamilton won op 15+ circuits die toegevoegd werden aan F1 tijdens zijn carrière (2007-heden), inclusief Abu Dhabi, Singapore, Baku, Saudi-Arabië, wat aanpassingsvermogen toont."
      }
    },
    {
      question: {
        en: "What is the record for highest percentage of laps led by a race winner?",
        es: "¿Cuál es el récord del porcentaje más alto de vueltas lideradas por un ganador de carrera?",
        de: "Was ist der Rekord für den höchsten Prozentsatz von einem Rennsieger geführter Runden?",
        nl: "Wat is het record voor het hoogste percentage rondes geleid door een race winnaar?"
      },
      options: [
        "100% (led every lap)",
        "99.5% (all but half a lap)",
        "97.8% (all but final lap)",
        "100% is common in dominant wins"
      ],
      correct: 0,
      explanation: {
        en: "Leading 100% of laps (lights to flag) has been achieved many times, with drivers like Schumacher, Senna, and Verstappen doing it multiple times.",
        es: "Liderar el 100% de las vueltas (de semáforo a bandera) se ha logrado muchas veces, con pilotos como Schumacher, Senna y Verstappen haciéndolo múltiples veces.",
        de: "100% der Runden zu führen (von Ampel bis Flagge) wurde viele Male erreicht, wobei Fahrer wie Schumacher, Senna und Verstappen es mehrmals taten.",
        nl: "100% van de rondes leiden (van lichten tot vlag) is vele malen bereikt, met coureurs zoals Schumacher, Senna en Verstappen die het meerdere keren deden."
      }
    },
    {
      question: {
        en: "Which team holds the record for most consecutive races without both cars finishing?",
        es: "¿Qué equipo tiene el récord de más carreras consecutivas sin que ambos autos terminen?",
        de: "Welches Team hält den Rekord für die meisten aufeinanderfolgenden Rennen ohne dass beide Autos ins Ziel kamen?",
        nl: "Welk team heeft het record voor de meeste opeenvolgende races zonder dat beide auto's finishen?"
      },
      options: [
        "McLaren 2015 (8 consecutive races)",
        "Honda 1967 (entire season)",
        "Andrea Moda 1992 (11 races)",
        "Minardi 1998 (7 races)"
      ],
      correct: 2,
      explanation: {
        en: "Andrea Moda in 1992 failed to get both cars to finish in 11 consecutive races, one of the worst reliability records in F1 history.",
        es: "Andrea Moda en 1992 no logró que ambos autos terminaran en 11 carreras consecutivas, uno de los peores récords de confiabilidad en la historia de F1.",
        de: "Andrea Moda gelang es 1992 nicht, beide Autos in 11 aufeinanderfolgenden Rennen ins Ziel zu bringen, einer der schlechtesten Zuverlässigkeitsrekorde in der F1-Geschichte.",
        nl: "Andrea Moda in 1992 slaagde er niet in beide auto's te laten finishen in 11 opeenvolgende races, een van de slechtste betrouwbaarheids records in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most wins from pole position in a single championship-winning season?",
        es: "¿Cuál es el récord de más victorias desde pole position en una sola temporada ganadora del campeonato?",
        de: "Was ist der Rekord für die meisten Siege von der Pole-Position in einer einzelnen Meisterschaftsgewinn-Saison?",
        nl: "Wat is het record voor de meeste overwinningen vanaf pole position in een enkel kampioenschap-winnend seizoen?"
      },
      options: [
        "Ayrton Senna 1988 (13 pole-to-win)",
        "Sebastian Vettel 2011 (11 pole-to-win)",
        "Max Verstappen 2023 (9 pole-to-win)",
        "Michael Schumacher 2004 (8 pole-to-win)"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna won all 13 races where he took pole in 1988 with McLaren, a perfect pole-to-win conversion in his championship season.",
        es: "Ayrton Senna ganó las 13 carreras donde tomó pole en 1988 con McLaren, una conversión perfecta de pole-a-victoria en su temporada de campeonato.",
        de: "Ayrton Senna gewann alle 13 Rennen, bei denen er 1988 mit McLaren die Pole holte, eine perfekte Pole-zu-Sieg-Konversion in seiner Meisterschaftssaison.",
        nl: "Ayrton Senna won alle 13 races waar hij pole behaalde in 1988 met McLaren, een perfecte pole-naar-overwinning conversie in zijn kampioenschap seizoen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most points scored in races they didn't win?",
        es: "¿Qué piloto tiene el récord de más puntos anotados en carreras que no ganó?",
        de: "Welcher Fahrer hat den Rekord für die meisten in Rennen erzielten Punkte, die er nicht gewann?",
        nl: "Welke coureur heeft het record voor de meeste punten gescoord in races die ze niet wonnen?"
      },
      options: [
        "Fernando Alonso (1,450+ points without winning)",
        "Lewis Hamilton (800+ points in non-wins)",
        "Rubens Barrichello (420 points in non-wins)",
        "Valtteri Bottas (550 points in non-wins)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso scored 1,450+ points in races he didn't win (out of 2,000+ total), the most non-winning points, showing consistent podiums and top-5 finishes.",
        es: "Fernando Alonso anotó más de 1,450 puntos en carreras que no ganó (de más de 2,000 totales), los puntos más sin ganar, mostrando podios consistentes y finales top-5.",
        de: "Fernando Alonso erzielte über 1.450 Punkte in Rennen, die er nicht gewann (von über 2.000 insgesamt), die meisten Nicht-Gewinn-Punkte, zeigte konstante Podien und Top-5-Platzierungen.",
        nl: "Fernando Alonso scoorde 1.450+ punten in races die hij niet won (van 2.000+ totaal), de meeste niet-winnende punten, wat consistente podiums en top-5 finishes toont."
      }
    },
    {
      question: {
        en: "What is the record for most team name changes a driver experienced?",
        es: "¿Cuál es el récord de más cambios de nombre de equipo que experimentó un piloto?",
        de: "Was ist der Rekord für die meisten Teamnamenswechsel, die ein Fahrer erlebte?",
        nl: "Wat is het record voor de meeste team naamsveranderingen die een coureur meemaakte?"
      },
      options: [
        "Fernando Alonso (Alpine/Renault, 3 name changes)",
        "Sergio Perez (Force India/Racing Point/Aston Martin, 2 changes)",
        "Kimi Räikkönen (Sauber/Alfa Romeo, 1 change)",
        "Romain Grosjean (Renault/Lotus, 1 change)"
      ],
      correct: 1,
      explanation: {
        en: "Sergio Perez experienced 2 team name changes while staying: Force India→Racing Point (2018)→Aston Martin (2021), though he left before the final change.",
        es: "Sergio Pérez experimentó 2 cambios de nombre de equipo mientras permanecía: Force India→Racing Point (2018)→Aston Martin (2021), aunque se fue antes del cambio final.",
        de: "Sergio Perez erlebte 2 Teamnamenswechsel während seines Aufenthalts: Force India→Racing Point (2018)→Aston Martin (2021), obwohl er vor dem letzten Wechsel ging.",
        nl: "Sergio Perez maakte 2 team naamsveranderingen mee terwijl hij bleef: Force India→Racing Point (2018)→Aston Martin (2021), hoewel hij vertrok voor de laatste verandering."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races with at least one championship rival retiring?",
        es: "¿Qué piloto tiene el récord de más carreras con al menos un rival de campeonato retirándose?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen mit mindestens einem ausscheidenden Meisterschaftsrivalen?",
        nl: "Welke coureur heeft het record voor de meeste races met ten minste één kampioenschap rivaal die uitvalt?"
      },
      options: [
        "This statistic is not systematically tracked",
        "Lewis Hamilton (benefited from many retirements)",
        "Sebastian Vettel (rivals DNF'd often in 2010)",
        "Niki Lauda (1976 season)"
      ],
      correct: 0,
      explanation: {
        en: "While memorable instances exist (Hamilton/Rosberg, Vettel/Alonso), comprehensive tracking of rival retirements benefiting a specific driver isn't maintained.",
        es: "Aunque existen instancias memorables (Hamilton/Rosberg, Vettel/Alonso), no se mantiene un seguimiento exhaustivo de retiros de rivales beneficiando a un piloto específico.",
        de: "Obwohl denkwürdige Fälle existieren (Hamilton/Rosberg, Vettel/Alonso), wird keine umfassende Verfolgung von Rivalen-Ausfällen zugunsten eines bestimmten Fahrers geführt.",
        nl: "Hoewel gedenkwaardige gevallen bestaan (Hamilton/Rosberg, Vettel/Alonso), wordt er geen uitgebreide tracking van rivaal uitvallers ten gunste van een specifieke coureur bijgehouden."
      }
    },
    {
      question: {
        en: "What is the record for most laps completed before scoring first championship point?",
        es: "¿Cuál es el récord de más vueltas completadas antes de anotar el primer punto de campeonato?",
        de: "Was ist der Rekord für die meisten gefahrenen Runden vor dem ersten Meisterschaftspunkt?",
        nl: "Wat is het record voor de meeste rondes voltooid voor het scoren van eerste kampioenschap punt?"
      },
      options: [
        "Luca Badoer (2,364 laps over 50 races)",
        "Taki Inoue (1,100 laps)",
        "Alex Yoong (890 laps)",
        "Yuji Ide (270 laps, 0 points)"
      ],
      correct: 0,
      explanation: {
        en: "Luca Badoer completed approximately 2,364 racing laps across 50 races before scoring his only point (6th at 1999 European GP), the longest wait.",
        es: "Luca Badoer completó aproximadamente 2,364 vueltas de carrera en 50 carreras antes de anotar su único punto (6° en 1999 GP Europeo), la espera más larga.",
        de: "Luca Badoer fuhr etwa 2.364 Rennrunden über 50 Rennen, bevor er seinen einzigen Punkt erzielte (6. beim Europäischen GP 1999), die längste Wartezeit.",
        nl: "Luca Badoer voltooide ongeveer 2.364 race rondes over 50 races voordat hij zijn enige punt scoorde (6e op 1999 Europese GP), de langste wachttijd."
      }
    },
    {
      question: {
        en: "Which team achieved the highest points-per-race ratio in their final season?",
        es: "¿Qué equipo logró la relación puntos-por-carrera más alta en su temporada final?",
        de: "Welches Team erreichte das höchste Punkte-pro-Rennen-Verhältnis in seiner letzten Saison?",
        nl: "Welk team behaalde de hoogste punten-per-race ratio in hun laatste seizoen?"
      },
      options: [
        "Brawn GP 2009 (8.65 points/race, won championship)",
        "Honda 2008 (0 points/race)",
        "Lotus 2015 (0.24 points/race)",
        "Caterham 2014 (0 points/race)"
      ],
      correct: 0,
      explanation: {
        en: "Brawn GP averaged 8.65 points per race in their only 2009 season before becoming Mercedes, winning both championships and folding at their peak.",
        es: "Brawn GP promedió 8.65 puntos por carrera en su única temporada 2009 antes de convertirse en Mercedes, ganando ambos campeonatos y cerrando en su pico.",
        de: "Brawn GP hatte 2009 einen Durchschnitt von 8,65 Punkten pro Rennen in ihrer einzigen Saison, bevor sie zu Mercedes wurden, gewannen beide Meisterschaften und lösten sich auf ihrem Höhepunkt auf.",
        nl: "Brawn GP had een gemiddelde van 8,65 punten per race in hun enige 2009 seizoen voordat ze Mercedes werden, wonnen beide kampioenschappen en stopten op hun hoogtepunt."
      }
    },
    {
      question: {
        en: "What is the record for most wins from non-front row starting positions in a career?",
        es: "¿Cuál es el récord de más victorias desde posiciones de salida fuera de la primera fila en una carrera?",
        de: "Was ist der Rekord für die meisten Siege von Nicht-Erste-Reihe-Startpositionen in einer Karriere?",
        nl: "Wat is het record voor de meeste overwinningen vanaf niet-eerste rij startposities in een carrière?"
      },
      options: [
        "Michael Schumacher (57 wins from P3 or lower)",
        "Lewis Hamilton (52 wins from P3 or lower)",
        "Fernando Alonso (24 wins from P3 or lower)",
        "Sebastian Vettel (39 wins from P3 or lower)"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher won 57 races after starting P3 or lower, showing exceptional race craft beyond qualifying pace throughout his career.",
        es: "Michael Schumacher ganó 57 carreras después de partir P3 o inferior, mostrando habilidad de carrera excepcional más allá del ritmo de clasificación durante su carrera.",
        de: "Michael Schumacher gewann 57 Rennen nach Start von P3 oder niedriger und zeigte außergewöhnliche Rennkunst jenseits des Qualifying-Tempos während seiner Karriere.",
        nl: "Michael Schumacher won 57 races na te starten P3 of lager, wat uitzonderlijke racevaardigheid buiten kwalificatie tempo toont gedurende zijn carrière."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races between podiums?",
        es: "¿Qué piloto tiene el récord de más carreras entre podios?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen zwischen Podiumsplätzen?",
        nl: "Welke coureur heeft het record voor de meeste races tussen podiums?"
      },
      options: [
        "Sergio Perez (133 races gap, 2013-2020)",
        "Rubens Barrichello (87 races gap)",
        "Jenson Button (76 races gap)",
        "Nico Hulkenberg (never achieved second podium)"
      ],
      correct: 0,
      explanation: {
        en: "Sergio Perez had a 133-race gap between podiums: Russia 2015 to Sakhir 2020, the longest drought for a driver who eventually returned to the podium.",
        es: "Sergio Pérez tuvo un intervalo de 133 carreras entre podios: Rusia 2015 a Sakhir 2020, la sequía más larga para un piloto que finalmente regresó al podio.",
        de: "Sergio Perez hatte eine 133-Rennen-Lücke zwischen Podien: Russland 2015 bis Sakhir 2020, die längste Durststrecke für einen Fahrer, der schließlich zum Podium zurückkehrte.",
        nl: "Sergio Perez had een 133-race kloof tussen podiums: Rusland 2015 tot Sakhir 2020, de langste droogte voor een coureur die uiteindelijk terugkeerde naar het podium."
      }
    },
    {
      question: {
        en: "What is the record for fewest pitstops by a constructor in a full season (all races)?",
        es: "¿Cuál es el récord de menos paradas en boxes por un constructor en una temporada completa (todas las carreras)?",
        de: "Was ist der Rekord für die wenigsten Boxenstopps eines Konstrukteurs in einer vollen Saison (alle Rennen)?",
        nl: "Wat is het record voor de minste pitstops door een constructeur in een volledig seizoen (alle races)?"
      },
      options: [
        "Pre-1950s era (0 mandatory stops)",
        "1960s-1980s (fuel loads allowed no-stops)",
        "Modern era requires minimum 1 stop per race",
        "2005 season (no refueling, 1-stop strategies)"
      ],
      correct: 2,
      explanation: {
        en: "Since 2007, regulations mandate tire compound changes in dry races, requiring minimum 1 stop per car per race, making zero or ultra-low stops impossible.",
        es: "Desde 2007, las regulaciones exigen cambios de compuesto de neumáticos en carreras secas, requiriendo mínimo 1 parada por auto por carrera, haciendo imposibles cero o muy pocas paradas.",
        de: "Seit 2007 schreiben Vorschriften Reifenmischungswechsel bei trockenen Rennen vor und erfordern mindestens 1 Stopp pro Auto pro Rennen, was null oder ultra-niedrige Stopps unmöglich macht.",
        nl: "Sinds 2007 vereisen reglementen band compound veranderingen in droge races, vereisend minimaal 1 stop per auto per race, waardoor nul of ultra-lage stops onmogelijk zijn."
      }
    },
    {
      question: {
        en: "Which driver holds the record for most wins in their first 100 races?",
        es: "¿Qué piloto tiene el récord de más victorias en sus primeras 100 carreras?",
        de: "Welcher Fahrer hält den Rekord für die meisten Siege in seinen ersten 100 Rennen?",
        nl: "Welke coureur heeft het record voor de meeste overwinningen in hun eerste 100 races?"
      },
      options: [
        "Max Verstappen (35 wins in first 100)",
        "Sebastian Vettel (27 wins in first 100)",
        "Lewis Hamilton (21 wins in first 100)",
        "Michael Schumacher (19 wins in first 100)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen won 35 races in his first 100 F1 starts, the most by any driver in their opening century of races, showing early dominance.",
        es: "Max Verstappen ganó 35 carreras en sus primeros 100 inicios de F1, las más de cualquier piloto en su primer centenar de carreras, mostrando dominio temprano.",
        de: "Max Verstappen gewann 35 Rennen in seinen ersten 100 F1-Starts, die meisten eines Fahrers in seinem ersten Jahrhundert von Rennen, zeigte frühe Dominanz.",
        nl: "Max Verstappen won 35 races in zijn eerste 100 F1 starts, de meeste van alle coureurs in hun eerste honderd races, wat vroege dominantie toont."
      }
    },
    {
      question: {
        en: "What is the record for most different power unit manufacturers used by a single team in consecutive seasons?",
        es: "¿Cuál es el récord de más fabricantes de unidades de potencia diferentes utilizados por un solo equipo en temporadas consecutivas?",
        de: "Was ist der Rekord für die meisten verschiedenen Antriebseinheiten-Hersteller eines einzelnen Teams in aufeinanderfolgenden Saisons?",
        nl: "Wat is het record voor de meeste verschillende power unit fabrikanten gebruikt door een enkel team in opeenvolgende seizoenen?"
      },
      options: [
        "McLaren 2014-2018 (3 manufacturers: Mercedes→Honda→Renault)",
        "Red Bull 2015-2016 (2 manufacturers)",
        "Williams 2013-2014 (1 manufacturer)",
        "Toro Rosso/AlphaTauri (multiple changes)"
      ],
      correct: 0,
      explanation: {
        en: "McLaren used 3 different power units in consecutive years: Mercedes (2014), Honda (2015-2017), Renault (2018-2020), the most consecutive changes.",
        es: "McLaren usó 3 unidades de potencia diferentes en años consecutivos: Mercedes (2014), Honda (2015-2017), Renault (2018-2020), los cambios consecutivos más.",
        de: "McLaren nutzte 3 verschiedene Antriebseinheiten in aufeinanderfolgenden Jahren: Mercedes (2014), Honda (2015-2017), Renault (2018-2020), die meisten aufeinanderfolgenden Wechsel.",
        nl: "McLaren gebruikte 3 verschillende power units in opeenvolgende jaren: Mercedes (2014), Honda (2015-2017), Renault (2018-2020), de meeste opeenvolgende veranderingen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most Grand Prix starts without ever leading the championship?",
        es: "¿Qué piloto tiene el récord de más inicios de Gran Premio sin liderar el campeonato?",
        de: "Welcher Fahrer hat den Rekord für die meisten Grand-Prix-Starts ohne jemals die Meisterschaft anzuführen?",
        nl: "Welke coureur heeft het record voor de meeste Grand Prix starts zonder ooit het kampioenschap te leiden?"
      },
      options: [
        "Nico Hulkenberg (199 starts, never led)",
        "Nick Heidfeld (183 starts, never led)",
        "Rubens Barrichello (326 starts, led briefly)",
        "Adrian Sutil (128 starts, never led)"
      ],
      correct: 0,
      explanation: {
        en: "Nico Hulkenberg started 199 races without ever leading the championship standings at any point, the most starts without this achievement.",
        es: "Nico Hulkenberg inició 199 carreras sin liderar la clasificación del campeonato en ningún momento, los inicios más sin este logro.",
        de: "Nico Hulkenberg startete 199 Rennen ohne jemals die Meisterschaftswertung anzuführen, die meisten Starts ohne diese Leistung.",
        nl: "Nico Hulkenberg startte 199 races zonder ooit het kampioenschap klassement te leiden op enig moment, de meeste starts zonder deze prestatie."
      }
    },
    {
      question: {
        en: "What is the record for most races needed to achieve 10 different podium finishes?",
        es: "¿Cuál es el récord de más carreras necesarias para lograr 10 finales de podio diferentes?",
        de: "Was ist der Rekord für die meisten Rennen, die benötigt werden, um 10 verschiedene Podiumsplätze zu erreichen?",
        nl: "Wat is het record voor de meeste races nodig om 10 verschillende podium finishes te bereiken?"
      },
      options: [
        "Max Verstappen (33 races to 10 podiums)",
        "Lewis Hamilton (27 races to 10 podiums)",
        "Sebastian Vettel (25 races to 10 podiums)",
        "Fernando Alonso (30 races to 10 podiums)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton reached 10 podiums in just 27 races (debut 2007-2008), one of the fastest starts to an F1 career in terms of podium accumulation.",
        es: "Lewis Hamilton alcanzó 10 podios en solo 27 carreras (debut 2007-2008), uno de los inicios más rápidos de una carrera de F1 en términos de acumulación de podios.",
        de: "Lewis Hamilton erreichte 10 Podien in nur 27 Rennen (Debüt 2007-2008), einer der schnellsten Starts einer F1-Karriere in Bezug auf Podiumsansammlung.",
        nl: "Lewis Hamilton bereikte 10 podiums in slechts 27 races (debuut 2007-2008), een van de snelste starts van een F1 carrière in termen van podium verzameling."
      }
    },
    {
      question: {
        en: "Which team scored the highest percentage of available points in a season?",
        es: "¿Qué equipo anotó el porcentaje más alto de puntos disponibles en una temporada?",
        de: "Welches Team erzielte den höchsten Prozentsatz der verfügbaren Punkte in einer Saison?",
        nl: "Welk team scoorde het hoogste percentage van beschikbare punten in een seizoen?"
      },
      options: [
        "Mercedes 2016 (84% of available points)",
        "McLaren 1988 (76% of available points)",
        "Red Bull 2023 (78% of available points)",
        "Ferrari 2002 (72% of available points)"
      ],
      correct: 0,
      explanation: {
        en: "Mercedes scored 765 of 914 available points in 2016 (84%), the highest percentage under the current points system, dominating with Hamilton and Rosberg.",
        es: "Mercedes anotó 765 de 914 puntos disponibles en 2016 (84%), el porcentaje más alto bajo el sistema de puntos actual, dominando con Hamilton y Rosberg.",
        de: "Mercedes erzielte 2016 765 von 914 verfügbaren Punkten (84%), der höchste Prozentsatz im aktuellen Punktesystem, dominierte mit Hamilton und Rosberg.",
        nl: "Mercedes scoorde 765 van 914 beschikbare punten in 2016 (84%), het hoogste percentage onder het huidige punten systeem, dominerend met Hamilton en Rosberg."
      }
    },
    {
      question: {
        en: "What is the record for most retirements while leading a race in a single season?",
        es: "¿Cuál es el récord de más retiros mientras se lideraba una carrera en una sola temporada?",
        de: "Was ist der Rekord für die meisten Ausfälle während man ein Rennen führte in einer Saison?",
        nl: "Wat is het record voor de meeste uitvalbeurten terwijl men een race leidde in een enkel seizoen?"
      },
      options: [
        "Ayrton Senna 1993 (4 DNF while leading)",
        "Nigel Mansell 1986 (5 DNF while leading)",
        "Kimi Räikkönen 2005 (3 DNF while leading)",
        "Max Verstappen 2017 (2 DNF while leading)"
      ],
      correct: 1,
      explanation: {
        en: "Nigel Mansell retired while leading 5 times in 1986 due to reliability issues, costing him a likely championship despite his pace.",
        es: "Nigel Mansell se retiró mientras lideraba 5 veces en 1986 debido a problemas de confiabilidad, costándole un campeonato probable a pesar de su ritmo.",
        de: "Nigel Mansell fiel 1986 5 Mal aus, während er führte, aufgrund von Zuverlässigkeitsproblemen, was ihn trotz seines Tempos eine wahrscheinliche Meisterschaft kostete.",
        nl: "Nigel Mansell viel 5 keer uit terwijl hij leidde in 1986 door betrouwbaarheidsproblemen, wat hem een waarschijnlijk kampioenschap kostte ondanks zijn tempo."
      }
    },
    {
      question: {
        en: "Which driver has the record for most consecutive seasons scoring a win?",
        es: "¿Qué piloto tiene el récord de más temporadas consecutivas anotando una victoria?",
        de: "Welcher Fahrer hat den Rekord für die meisten aufeinanderfolgenden Saisons mit einem Sieg?",
        nl: "Welke coureur heeft het record voor de meeste opeenvolgende seizoenen met een overwinning scoren?"
      },
      options: [
        "Michael Schumacher (15 seasons, 1992-2006)",
        "Lewis Hamilton (16 seasons, 2007-2022)",
        "Fernando Alonso (7 seasons, 2003-2013)",
        "Sebastian Vettel (9 seasons, 2008-2019)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton won at least one race in 16 consecutive seasons (2007-2022), breaking Schumacher's record of 15 and showing sustained excellence.",
        es: "Lewis Hamilton ganó al menos una carrera en 16 temporadas consecutivas (2007-2022), rompiendo el récord de Schumacher de 15 y mostrando excelencia sostenida.",
        de: "Lewis Hamilton gewann in 16 aufeinanderfolgenden Saisons (2007-2022) mindestens ein Rennen, brach Schumachers Rekord von 15 und zeigte anhaltende Exzellenz.",
        nl: "Lewis Hamilton won ten minste één race in 16 opeenvolgende seizoenen (2007-2022), Schumachers record van 15 verbrekend en aanhoudende excellentie tonend."
      }
    },
    {
      question: {
        en: "What is the record for largest margin of victory by laps (not time)?",
        es: "¿Cuál es el récord del mayor margen de victoria por vueltas (no tiempo)?",
        de: "Was ist der Rekord für den größten Siegvorsprung in Runden (nicht Zeit)?",
        nl: "Wat is het record voor de grootste overwinnings marge in rondes (niet tijd)?"
      },
      options: [
        "5 laps (Damon Hill, Australia 1995)",
        "3 laps (various early races)",
        "2 laps (common in reliability-challenged eras)",
        "6 laps (Giancarlo Baghetti, France 1961)"
      ],
      correct: 0,
      explanation: {
        en: "Damon Hill won the 1995 Australian GP by 5 laps (2 laps ahead of 2nd place finisher), the largest winning margin by laps in F1 history.",
        es: "Damon Hill ganó el GP de Australia 1995 por 5 vueltas (2 vueltas adelante del finalista 2°), el margen de victoria más grande por vueltas en la historia de F1.",
        de: "Damon Hill gewann den Australien GP 1995 mit 5 Runden Vorsprung (2 Runden vor dem Zweitplatzierten), der größte Siegvorsprung in Runden in der F1-Geschichte.",
        nl: "Damon Hill won de 1995 Australische GP met 5 rondes (2 rondes voor de 2e plaats finisher), de grootste overwinnings marge in rondes in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "Which driver has the record for most pole positions at their least successful circuit (minimum 5 appearances)?",
        es: "¿Qué piloto tiene el récord de más pole positions en su circuito menos exitoso (mínimo 5 apariciones)?",
        de: "Welcher Fahrer hat den Rekord für die meisten Pole-Positionen auf seiner am wenigsten erfolgreichen Strecke (mindestens 5 Auftritte)?",
        nl: "Welke coureur heeft het record voor de meeste pole positions op hun minst succesvolle circuit (minimaal 5 optredens)?"
      },
      options: [
        "Felipe Massa at Silverstone (3 poles, 0 wins)",
        "Nico Rosberg at Monaco (2 poles, 0 wins)",
        "Jarno Trulli at Monaco (1 pole, 0 wins)",
        "Varies by driver definition of 'least successful'"
      ],
      correct: 0,
      explanation: {
        en: "Felipe Massa took 3 poles at Silverstone but never won the British GP there despite strong qualifying performances, his most poles without winning.",
        es: "Felipe Massa tomó 3 poles en Silverstone pero nunca ganó el GP Británico allí a pesar de fuertes actuaciones de clasificación, sus poles más sin ganar.",
        de: "Felipe Massa holte 3 Poles in Silverstone, gewann aber nie den Großen Preis von Großbritannien dort trotz starker Qualifying-Leistungen, seine meisten Poles ohne Sieg.",
        nl: "Felipe Massa behaalde 3 poles op Silverstone maar won nooit de Britse GP daar ondanks sterke kwalificatie prestaties, zijn meeste poles zonder te winnen."
      }
    },
    {
      question: {
        en: "What is the record for most different race numbers worn in a single season (pre-permanent numbers)?",
        es: "¿Cuál es el récord de más números de carrera diferentes usados en una sola temporada (antes de números permanentes)?",
        de: "Was ist der Rekord für die meisten verschiedenen Startnummern in einer Saison (vor permanenten Nummern)?",
        nl: "Wat is het record voor de meeste verschillende race nummers gedragen in een enkel seizoen (voor permanente nummers)?"
      },
      options: [
        "3 numbers (driver changed teams mid-season)",
        "2 numbers (typical for team changes)",
        "4 numbers (multiple team changes)",
        "Numbers changed based on championship position"
      ],
      correct: 3,
      explanation: {
        en: "Before permanent numbers (introduced 2014), drivers' numbers changed based on previous year's championship position, with champions getting #1, teammates #2, etc.",
        es: "Antes de los números permanentes (introducidos 2014), los números de los pilotos cambiaban según la posición del campeonato del año anterior, con campeones obteniendo #1, compañeros #2, etc.",
        de: "Vor permanenten Nummern (eingeführt 2014) änderten sich die Nummern der Fahrer basierend auf der Meisterschaftsposition des Vorjahres, wobei Champions #1 bekamen, Teamkollegen #2 usw.",
        nl: "Voor permanente nummers (geïntroduceerd 2014) veranderden coureurs' nummers gebaseerd op vorig jaar's kampioenschap positie, met kampioenen die #1 kregen, teamgenoten #2, etc."
      }
    },
    {
      question: {
        en: "Which team holds the record for most races between 1-2 finishes?",
        es: "¿Qué equipo tiene el récord de más carreras entre finales 1-2?",
        de: "Welches Team hält den Rekord für die meisten Rennen zwischen 1-2-Zieleinläufen?",
        nl: "Welk team heeft het record voor de meeste races tussen 1-2 finishes?"
      },
      options: [
        "Williams 1994-1996 (18 races gap)",
        "McLaren 1998-1999 (23 races gap)",
        "Ferrari 2000-2001 (15 races gap)",
        "Varies significantly by team competitiveness"
      ],
      correct: 3,
      explanation: {
        en: "The gap between 1-2 finishes varies widely based on team performance. Top teams have short gaps during dominance, struggling teams have infinite gaps.",
        es: "La brecha entre finales 1-2 varía ampliamente según el rendimiento del equipo. Los equipos top tienen brechas cortas durante la dominación, los equipos en lucha tienen brechas infinitas.",
        de: "Die Lücke zwischen 1-2-Zieleinläufen variiert stark je nach Teamleistung. Spitzenteams haben kurze Lücken während der Dominanz, kämpfende Teams haben unendliche Lücken.",
        nl: "De kloof tussen 1-2 finishes varieert sterk gebaseerd op team prestatie. Top teams hebben korte kloofjes tijdens dominantie, strijdende teams hebben oneindige kloofjes."
      }
    },
    {
      question: {
        en: "What is the record for most wins from the lowest average qualifying position in a season?",
        es: "¿Cuál es el récord de más victorias desde la posición de clasificación promedio más baja en una temporada?",
        de: "Was ist der Rekord für die meisten Siege von der niedrigsten durchschnittlichen Qualifying-Position in einer Saison?",
        nl: "Wat is het record voor de meeste overwinningen vanaf de laagste gemiddelde kwalificatie positie in een seizoen?"
      },
      options: [
        "Kimi Räikkönen 2007 (6 wins, avg P3.2)",
        "Fernando Alonso 2012 (3 wins, avg P5.8)",
        "Jenson Button 2011 (3 wins, avg P4.1)",
        "Lewis Hamilton 2008 (5 wins, avg P4.0)"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso won 3 races in 2012 despite an average qualifying position of P5.8, showing exceptional race craft to overcome poor grid positions.",
        es: "Fernando Alonso ganó 3 carreras en 2012 a pesar de una posición de clasificación promedio de P5.8, mostrando habilidad de carrera excepcional para superar posiciones de parrilla pobres.",
        de: "Fernando Alonso gewann 2012 3 Rennen trotz einer durchschnittlichen Qualifying-Position von P5.8 und zeigte außergewöhnliche Rennkunst, um schlechte Gridpositionen zu überwinden.",
        nl: "Fernando Alonso won 3 races in 2012 ondanks een gemiddelde kwalificatie positie van P5.8, wat uitzonderlijke racevaardigheid toont om slechte grid posities te overwinnen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races with exactly 0 points scored?",
        es: "¿Qué piloto tiene el récord de más carreras con exactamente 0 puntos anotados?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen mit genau 0 erzielten Punkten?",
        nl: "Welke coureur heeft het record voor de meeste races met exact 0 punten gescoord?"
      },
      options: [
        "Luca Badoer (49 pointless races)",
        "Andrea de Cesaris (110 pointless races)",
        "Taki Inoue (18 pointless races)",
        "Varies by era and points system"
      ],
      correct: 1,
      explanation: {
        en: "Andrea de Cesaris started 110 races without points (finished 11th or worse), though he scored points in 48 others for a total of 158 starts.",
        es: "Andrea de Cesaris inició 110 carreras sin puntos (terminó 11° o peor), aunque anotó puntos en 48 otras para un total de 158 inicios.",
        de: "Andrea de Cesaris startete 110 Rennen ohne Punkte (landete 11. oder schlechter), obwohl er in 48 anderen Punkte erzielte für insgesamt 158 Starts.",
        nl: "Andrea de Cesaris startte 110 races zonder punten (eindigde 11e of slechter), hoewel hij punten scoorde in 48 anderen voor een totaal van 158 starts."
      }
    },
    {
      question: {
        en: "What is the record for most podium positions (1st, 2nd, 3rd) achieved at a single circuit?",
        es: "¿Cuál es el récord de más posiciones de podio (1°, 2°, 3°) logradas en un solo circuito?",
        de: "Was ist der Rekord für die meisten Podiumspositionen (1., 2., 3.) auf einer einzelnen Strecke?",
        nl: "Wat is het record voor de meeste podium posities (1e, 2e, 3e) behaald op een enkel circuit?"
      },
      options: [
        "Lewis Hamilton at Silverstone (8 wins, 2 seconds, 1 third = 11 podiums)",
        "Michael Schumacher at Monza (5 wins, 3 seconds, 1 third = 9 podiums)",
        "Ayrton Senna at Monaco (6 wins, 2 seconds, 1 third = 9 podiums)",
        "Sebastian Vettel at Singapore (5 wins, 1 second, 2 thirds = 8 podiums)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has 11 podiums at Silverstone (8 wins, plus seconds and thirds), the most podiums at a single circuit by any driver.",
        es: "Lewis Hamilton tiene 11 podios en Silverstone (8 victorias, más segundos y terceros), los podios más en un solo circuito por cualquier piloto.",
        de: "Lewis Hamilton hat 11 Podien in Silverstone (8 Siege plus Zweite und Dritte), die meisten Podien auf einer einzelnen Strecke eines Fahrers.",
        nl: "Lewis Hamilton heeft 11 podiums op Silverstone (8 overwinningen, plus tweedes en derdes), de meeste podiums op een enkel circuit door enige coureur."
      }
    },
    {
      question: {
        en: "Which driver achieved the most wins in a season without winning the championship?",
        es: "¿Qué piloto logró más victorias en una temporada sin ganar el campeonato?",
        de: "Welcher Fahrer erzielte die meisten Siege in einer Saison ohne die Meisterschaft zu gewinnen?",
        nl: "Welke coureur behaalde de meeste overwinningen in een seizoen zonder het kampioenschap te winnen?"
      },
      options: [
        "Max Verstappen 2020 (2 wins, no title)",
        "Fernando Alonso 2012 (3 wins, no title)",
        "Lewis Hamilton 2016 (10 wins, finished 2nd)",
        "Kimi Räikkönen 2018 (1 win, no title)"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton won 10 races in 2016 but lost the championship to teammate Nico Rosberg (9 wins), the most wins in a losing season.",
        es: "Lewis Hamilton ganó 10 carreras en 2016 pero perdió el campeonato ante el compañero Nico Rosberg (9 victorias), las victorias más en una temporada perdedora.",
        de: "Lewis Hamilton gewann 2016 10 Rennen, verlor aber die Meisterschaft an Teamkollege Nico Rosberg (9 Siege), die meisten Siege in einer verlorenen Saison.",
        nl: "Lewis Hamilton won 10 races in 2016 maar verloor het kampioenschap aan teamgenoot Nico Rosberg (9 overwinningen), de meeste overwinningen in een verliezend seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most mechanical failures suffered in a championship-winning season?",
        es: "¿Cuál es el récord de más fallas mecánicas sufridas en una temporada ganadora del campeonato?",
        de: "Was ist der Rekord für die meisten mechanischen Ausfälle in einer Meisterschaftsgewinn-Saison?",
        nl: "Wat is het record voor de meeste mechanische storingen geleden in een kampioenschap-winnend seizoen?"
      },
      options: [
        "James Hunt 1976 (6 mechanical DNFs)",
        "Niki Lauda 1984 (5 mechanical DNFs)",
        "Kimi Räikkönen 2007 (3 mechanical DNFs)",
        "Modern reliability makes this rare"
      ],
      correct: 0,
      explanation: {
        en: "James Hunt suffered 6 mechanical DNFs in his championship-winning 1976 season, the most by a champion, showing reliability challenges of that era.",
        es: "James Hunt sufrió 6 DNFs mecánicos en su temporada ganadora del campeonato 1976, los más de un campeón, mostrando desafíos de confiabilidad de esa era.",
        de: "James Hunt erlitt 6 mechanische DNFs in seiner Meisterschaftsgewinn-Saison 1976, die meisten eines Champions, zeigte Zuverlässigkeitsprobleme dieser Ära.",
        nl: "James Hunt had 6 mechanische DNFs in zijn kampioenschap-winnende 1976 seizoen, de meeste door een kampioen, wat betrouwbaarheids uitdagingen van dat tijdperk toont."
      }
    },
    {
      question: {
        en: "Which team holds the record for most different engine configurations used in a single season?",
        es: "¿Qué equipo tiene el récord de más configuraciones de motor diferentes utilizadas en una sola temporada?",
        de: "Welches Team hält den Rekord für die meisten verschiedenen Motorkonfigurationen in einer Saison?",
        nl: "Welk team heeft het record voor de meeste verschillende motor configuraties gebruikt in een enkel seizoen?"
      },
      options: [
        "McLaren-Honda 2015 (multiple spec updates)",
        "Ferrari 2020 (3 different specs)",
        "Renault 2014 (4 power unit upgrades)",
        "Engine specs evolve throughout season"
      ],
      correct: 3,
      explanation: {
        en: "All teams introduce multiple engine/power unit specifications during a season with development tokens and upgrades, but exact counts aren't publicly tracked.",
        es: "Todos los equipos introducen múltiples especificaciones de motor/unidad de potencia durante una temporada con tokens de desarrollo y actualizaciones, pero los recuentos exactos no se rastrean públicamente.",
        de: "Alle Teams führen während einer Saison mehrere Motor-/Antriebseinheitenspezifikationen mit Entwicklungs-Tokens und Upgrades ein, aber genaue Zahlen werden nicht öffentlich erfasst.",
        nl: "Alle teams introduceren meerdere motor/power unit specificaties tijdens een seizoen met ontwikkelings tokens en upgrades, maar exacte tellingen worden niet publiekelijk bijgehouden."
      }
    },
    {
      question: {
        en: "What is the record for most races where the pole sitter finished outside the top 5?",
        es: "¿Cuál es el récord de más carreras donde el poleman terminó fuera del top 5?",
        de: "Was ist der Rekord für die meisten Rennen, bei denen der Polesitter außerhalb der Top 5 landete?",
        nl: "Wat is het record voor de meeste races waar de polesitter buiten de top 5 eindigde?"
      },
      options: [
        "Felipe Massa (8 poles, finished 6th or worse)",
        "Nico Rosberg (5 poles, finished 6th or worse)",
        "Lewis Hamilton (4 poles, finished 6th or worse)",
        "Varies by reliability and incidents"
      ],
      correct: 3,
      explanation: {
        en: "Pole sitters finishing outside top 5 due to reliability, accidents, or strategy varies by driver and era. No comprehensive single-driver record exists.",
        es: "Los polemen que terminan fuera del top 5 debido a confiabilidad, accidentes o estrategia varía por piloto y era. No existe un récord exhaustivo de un solo piloto.",
        de: "Polesitter, die aufgrund von Zuverlässigkeit, Unfällen oder Strategie außerhalb der Top 5 landen, variieren nach Fahrer und Ära. Es existiert kein umfassender Einzelfahrer-Rekord.",
        nl: "Polesitters die buiten top 5 eindigen door betrouwbaarheid, ongelukken of strategie varieert per coureur en tijdperk. Geen uitgebreid enkele-coureur record bestaat."
      }
    },
    {
      question: {
        en: "Which driver has the record for most points scored in Sprint races?",
        es: "¿Qué piloto tiene el récord de más puntos anotados en carreras Sprint?",
        de: "Welcher Fahrer hat den Rekord für die meisten in Sprint-Rennen erzielten Punkte?",
        nl: "Welke coureur heeft het record voor de meeste punten gescoord in Sprint races?"
      },
      options: [
        "Max Verstappen (60+ Sprint points)",
        "Lewis Hamilton (45 Sprint points)",
        "Sergio Perez (38 Sprint points)",
        "Charles Leclerc (32 Sprint points)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen has scored 60+ points in Sprint races since their introduction in 2021, the most of any driver, winning multiple Sprints.",
        es: "Max Verstappen ha anotado más de 60 puntos en carreras Sprint desde su introducción en 2021, las más de cualquier piloto, ganando múltiples Sprints.",
        de: "Max Verstappen erzielte über 60 Punkte in Sprint-Rennen seit ihrer Einführung 2021, die meisten eines Fahrers, gewann mehrere Sprints.",
        nl: "Max Verstappen heeft 60+ punten gescoord in Sprint races sinds hun introductie in 2021, de meeste van alle coureurs, winnend meerdere Sprints."
      }
    },
    {
      question: {
        en: "What is the record for most laps led by a driver in races they didn't start from pole?",
        es: "¿Cuál es el récord de más vueltas lideradas por un piloto en carreras que no comenzó desde pole?",
        de: "Was ist der Rekord für die meisten von einem Fahrer geführten Runden in Rennen, die er nicht von der Pole startete?",
        nl: "Wat is het record voor de meeste rondes geleid door een coureur in races die ze niet startten vanaf pole?"
      },
      options: [
        "Michael Schumacher (2,500+ laps led without pole)",
        "Lewis Hamilton (2,200+ laps led without pole)",
        "Ayrton Senna (1,800 laps led without pole)",
        "Sebastian Vettel (1,600 laps led without pole)"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher led approximately 2,500+ laps in races he didn't start from pole, showing his ability to overtake and control races from non-pole positions.",
        es: "Michael Schumacher lideró aproximadamente más de 2,500 vueltas en carreras que no comenzó desde pole, mostrando su capacidad de adelantar y controlar carreras desde posiciones sin pole.",
        de: "Michael Schumacher führte etwa 2.500+ Runden in Rennen an, die er nicht von der Pole startete, zeigte seine Fähigkeit zu überholen und Rennen von Nicht-Pole-Positionen zu kontrollieren.",
        nl: "Michael Schumacher leidde ongeveer 2.500+ rondes in races die hij niet startte vanaf pole, wat zijn vermogen toont om in te halen en races te controleren vanaf niet-pole posities."
      }
    },
    {
      question: {
        en: "Which constructor achieved the most wins in their debut season?",
        es: "¿Qué constructor logró más victorias en su temporada de debut?",
        de: "Welcher Konstrukteur erzielte die meisten Siege in seiner Debütsaison?",
        nl: "Welke constructeur behaalde de meeste overwinningen in hun debuutseizoen?"
      },
      options: [
        "Brawn GP 2009 (8 wins, won championship)",
        "Mercedes 2010 (0 wins in debut)",
        "Haas 2016 (0 wins in debut)",
        "AlphaTauri 2020 (1 win - Monza)"
      ],
      correct: 0,
      explanation: {
        en: "Brawn GP won 8 races in their debut and only 2009 season, also winning both championships, the most successful debut team in F1 history.",
        es: "Brawn GP ganó 8 carreras en su debut y única temporada 2009, también ganando ambos campeonatos, el equipo de debut más exitoso en la historia de F1.",
        de: "Brawn GP gewann 8 Rennen in ihrer Debüt- und einzigen Saison 2009 und gewann auch beide Meisterschaften, das erfolgreichste Debütteam in der F1-Geschichte.",
        nl: "Brawn GP won 8 races in hun debuut en enige 2009 seizoen, ook winnend beide kampioenschappen, het meest succesvolle debuut team in F1 geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most different teammates beaten in a single race (team used 3+ drivers)?",
        es: "¿Cuál es el récord de más compañeros diferentes vencidos en una sola carrera (equipo usó 3+ pilotos)?",
        de: "Was ist der Rekord für die meisten verschiedenen geschlagenen Teamkollegen in einem einzelnen Rennen (Team nutzte 3+ Fahrer)?",
        nl: "Wat is het record voor de meeste verschillende verslagen teamgenoten in een enkele race (team gebruikte 3+ coureurs)?"
      },
      options: [
        "Maximum 2 teammates per race (2-car teams)",
        "3 teammates in rare multi-car entry races",
        "Modern F1 limits teams to 2 cars",
        "Historical races had 3-4 car teams"
      ],
      correct: 2,
      explanation: {
        en: "Since 1985, teams are limited to 2 cars per race, so a driver can only beat 1 teammate maximum in any single race under current regulations.",
        es: "Desde 1985, los equipos están limitados a 2 autos por carrera, por lo que un piloto solo puede vencer a 1 compañero máximo en cualquier carrera bajo las regulaciones actuales.",
        de: "Seit 1985 sind Teams auf 2 Autos pro Rennen beschränkt, sodass ein Fahrer unter aktuellen Vorschriften nur maximal 1 Teamkollegen in einem Rennen schlagen kann.",
        nl: "Sinds 1985 zijn teams beperkt tot 2 auto's per race, dus een coureur kan slechts maximaal 1 teamgenoot verslaan in een enkele race onder huidige reglementen."
      }
    },
    {
      question: {
        en: "Which driver has the record for most races finishing in exactly the position they qualified?",
        es: "¿Qué piloto tiene el récord de más carreras terminando en exactamente la posición donde clasificó?",
        de: "Welcher Fahrer hat den Rekord für die meisten Rennen mit Ziel an exakt der Qualifying-Position?",
        nl: "Welke coureur heeft het record voor de meeste races eindigend op exact de positie waar ze kwalificeerden?"
      },
      options: [
        "This specific statistic is not tracked comprehensively",
        "Nico Rosberg (estimated 25 same-position finishes)",
        "Valtteri Bottas (estimated 20 same-position)",
        "Varies by driver and competitive level"
      ],
      correct: 0,
      explanation: {
        en: "While individual instances of finishing in qualifying position are noted, comprehensive career-long tracking of this statistic doesn't exist in official F1 records.",
        es: "Aunque se notan instancias individuales de terminar en posición de clasificación, no existe un seguimiento exhaustivo de esta estadística en los récords oficiales de F1.",
        de: "Obwohl einzelne Fälle des Zieleinlaufs an der Qualifying-Position vermerkt werden, existiert keine umfassende karrierelange Verfolgung dieser Statistik in offiziellen F1-Aufzeichnungen.",
        nl: "Hoewel individuele gevallen van eindigen in kwalificatie positie worden opgemerkt, bestaat er geen uitgebreide carrière-lange tracking van deze statistiek in officiële F1 records."
      }
    },
    {
      question: {
        en: "What is the record for most wins achieved with exactly one pitstop?",
        es: "¿Cuál es el récord de más victorias logradas con exactamente una parada en boxes?",
        de: "Was ist der Rekord für die meisten Siege mit genau einem Boxenstopp?",
        nl: "Wat is het record voor de meeste overwinningen behaald met exact één pitstop?"
      },
      options: [
        "Michael Schumacher (35+ one-stop wins)",
        "Lewis Hamilton (28 one-stop wins)",
        "Sebastian Vettel (22 one-stop wins)",
        "One-stop strategies common in modern era"
      ],
      correct: 3,
      explanation: {
        en: "One-stop strategies are common in modern F1 due to tire regulations. Many drivers have won with one stop, but comprehensive records aren't maintained.",
        es: "Las estrategias de una parada son comunes en F1 moderna debido a regulaciones de neumáticos. Muchos pilotos han ganado con una parada, pero no se mantienen récords exhaustivos.",
        de: "Ein-Stopp-Strategien sind in der modernen F1 aufgrund von Reifenvorschriften üblich. Viele Fahrer gewannen mit einem Stopp, aber umfassende Aufzeichnungen werden nicht geführt.",
        nl: "Eén-stop strategieën zijn gebruikelijk in moderne F1 door band reglementen. Vele coureurs hebben gewonnen met één stop, maar uitgebreide records worden niet bijgehouden."
      }
    },
    {
      question: {
        en: "Which driver holds the record for most years active in F1 (including breaks)?",
        es: "¿Qué piloto tiene el récord de más años activo en F1 (incluyendo descansos)?",
        de: "Welcher Fahrer hält den Rekord für die meisten aktiven Jahre in der F1 (einschließlich Pausen)?",
        nl: "Welke coureur heeft het record voor de meeste jaren actief in F1 (inclusief pauzes)?"
      },
      options: [
        "Kimi Räikkönen (21 years, 2001-2021 with breaks)",
        "Fernando Alonso (22+ years, 2001-2024 with breaks)",
        "Rubens Barrichello (19 consecutive years)",
        "Graham Hill (18 years total)"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso raced across 22+ years from 2001-2024 (with 2019-2020 break), the longest span of any driver including non-consecutive seasons.",
        es: "Fernando Alonso corrió durante más de 22 años desde 2001-2024 (con descanso 2019-2020), el período más largo de cualquier piloto incluyendo temporadas no consecutivas.",
        de: "Fernando Alonso fuhr über 22+ Jahre von 2001-2024 (mit 2019-2020 Pause), die längste Spanne eines Fahrers einschließlich nicht aufeinanderfolgender Saisons.",
        nl: "Fernando Alonso racete gedurende 22+ jaar van 2001-2024 (met 2019-2020 pauze), de langste periode van alle coureurs inclusief niet-opeenvolgende seizoenen."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive races scoring points by a constructor?",
        es: "¿Cuál es el récord de más carreras consecutivas puntuando por un constructor?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennen mit Punkten eines Konstrukteurs?",
        nl: "Wat is het record voor de meeste opeenvolgende races met punten door een constructeur?"
      },
      options: [
        "Mercedes 2014-2020 (134 races)",
        "Ferrari 2000-2009 (173 races)",
        "Red Bull 2011-2016 (98 races)",
        "McLaren 1990-1998 (142 races)"
      ],
      correct: 1,
      explanation: {
        en: "Ferrari scored points in 173 consecutive races from 2000-2009, an unprecedented streak of reliability and performance across multiple regulation changes.",
        es: "Ferrari puntuó en 173 carreras consecutivas de 2000-2009, una racha sin precedentes de fiabilidad y rendimiento a través de múltiples cambios de regulación.",
        de: "Ferrari punktete in 173 aufeinanderfolgenden Rennen von 2000-2009, eine beispiellose Serie von Zuverlässigkeit und Leistung über mehrere Regeländerungen hinweg.",
        nl: "Ferrari scoorde punten in 173 opeenvolgende races van 2000-2009, een ongekende reeks van betrouwbaarheid en prestaties over meerdere regelwijzigingen."
      }
    },
    {
      question: {
        en: "What is the record for most wins in a season without winning the championship?",
        es: "¿Cuál es el récord de más victorias en una temporada sin ganar el campeonato?",
        de: "Was ist der Rekord für die meisten Siege in einer Saison ohne Meisterschaftsgewinn?",
        nl: "Wat is het record voor de meeste overwinningen in een seizoen zonder het kampioenschap te winnen?"
      },
      options: [
        "Kimi Räikkönen 2005 (7 wins, finished 2nd)",
        "Fernando Alonso 2012 (3 wins, finished 2nd)",
        "Sebastian Vettel 2009 (4 wins, finished 2nd)",
        "Max Verstappen 2020 (2 wins, finished 3rd)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen won 7 races in 2005 but lost the championship to Fernando Alonso due to reliability issues with his McLaren-Mercedes.",
        es: "Kimi Räikkönen ganó 7 carreras en 2005 pero perdió el campeonato ante Fernando Alonso debido a problemas de fiabilidad con su McLaren-Mercedes.",
        de: "Kimi Räikkönen gewann 7 Rennen 2005, verlor aber die Meisterschaft an Fernando Alonso aufgrund von Zuverlässigkeitsproblemen mit seinem McLaren-Mercedes.",
        nl: "Kimi Räikkönen won 7 races in 2005 maar verloor het kampioenschap aan Fernando Alonso vanwege betrouwbaarheidsproblemen met zijn McLaren-Mercedes."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();