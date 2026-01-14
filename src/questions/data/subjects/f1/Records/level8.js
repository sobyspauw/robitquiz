const level8 = (function() {
  const questions = [
    {
      question: {
        en: "What is the smallest points margin in a championship decided on the final race?",
        es: "¿Cuál es el margen de puntos más pequeño en un campeonato decidido en la última carrera?",
        de: "Was ist der kleinste Punktevorsprung in einer Meisterschaft, die im letzten Rennen entschieden wurde?",
        nl: "Wat is de kleinste puntenvoorsprong in een kampioenschap beslist in de laatste race?"
      },
      options: [
        "0.5 points (Lauda vs Prost 1984)",
        "1 point (Hamilton vs Massa 2008)",
        "2 points (Räikkönen vs Hamilton 2007)",
        "3 points (Prost vs Senna 1989)"
      ],
      correct: 0,
      explanation: {
        en: "The 1984 championship was decided by just 0.5 points, as Niki Lauda beat Alain Prost 72-71.5 after Monaco was halved due to rain.",
        es: "El campeonato de 1984 se decidió por solo 0.5 puntos, cuando Niki Lauda venció a Alain Prost 72-71.5 después de que Mónaco se redujo a la mitad por la lluvia.",
        de: "Die Meisterschaft 1984 wurde mit nur 0,5 Punkten entschieden, als Niki Lauda Alain Prost 72-71,5 schlug, nachdem Monaco wegen Regen halbiert wurde.",
        nl: "Het kampioenschap van 1984 werd beslist met slechts 0,5 punten, toen Niki Lauda Alain Prost 72-71,5 versloeg nadat Monaco gehalveerd werd door regen."
      }
    },
    {
      question: {
        en: "What is the record for most retirements in a single season by a race winner?",
        es: "¿Cuál es el récord de más abandonos en una temporada por un ganador de carrera?",
        de: "Was ist der Rekord für die meisten Ausfälle in einer Saison durch einen Rennsieger?",
        nl: "Wat is het record voor de meeste uitvalbeurten in een seizoen door een racewinnaar?"
      },
      options: [
        "Kimi Räikkönen 2005 (7 DNFs, 7 wins)",
        "Ayrton Senna 1988 (3 DNFs, 8 wins)",
        "Juan Manuel Fangio 1957 (2 DNFs, 4 wins)",
        "Nigel Mansell 1992 (2 DNFs, 9 wins)"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen suffered 7 retirements in 2005 despite winning 7 races, highlighting McLaren-Mercedes' speed but poor reliability that cost him the title.",
        es: "Kimi Räikkönen sufrió 7 abandonos en 2005 a pesar de ganar 7 carreras, destacando la velocidad pero mala fiabilidad del McLaren-Mercedes que le costó el título.",
        de: "Kimi Räikkönen hatte 7 Ausfälle 2005 trotz 7 Siegen, was die Geschwindigkeit aber schlechte Zuverlässigkeit des McLaren-Mercedes zeigte, die ihm den Titel kostete.",
        nl: "Kimi Räikkönen had 7 uitvalbeurten in 2005 ondanks 7 overwinningen, wat de snelheid maar slechte betrouwbaarheid van McLaren-Mercedes toonde die hem de titel kostte."
      }
    },
    {
      question: {
        en: "What is the record gap between a driver's first and last podium in the same season?",
        es: "¿Cuál es el récord de brecha entre el primer y último podio de un piloto en la misma temporada?",
        de: "Was ist der Rekordabstand zwischen dem ersten und letzten Podium eines Fahrers in derselben Saison?",
        nl: "Wat is de recordkloof tussen het eerste en laatste podium van een coureur in hetzelfde seizoen?"
      },
      options: [
        "21 races (Alonso 2023: Bahrain to Abu Dhabi)",
        "18 races (Kubica 2008: Australia to Brazil)",
        "19 races (Vettel 2020: Turkey to Abu Dhabi)",
        "17 races (Button 2011: Canada to Brazil)"
      ],
      correct: 1,
      explanation: {
        en: "Robert Kubica's podiums in 2008 were separated by 18 races, from his 2nd in Australia (R1) to 3rd in Brazil (R18), with no podiums in between.",
        es: "Los podios de Robert Kubica en 2008 estaban separados por 18 carreras, desde su 2º en Australia (C1) hasta 3º en Brasil (C18), sin podios intermedios.",
        de: "Robert Kubicas Podien 2008 waren durch 18 Rennen getrennt, von seinem 2. in Australien (R1) bis 3. in Brasilien (R18), ohne Podien dazwischen.",
        nl: "Robert Kubica's podiumplaatsen in 2008 werden gescheiden door 18 races, van zijn 2e in Australië (R1) tot 3e in Brazilië (R18), zonder tussenliggende podia."
      }
    },
    {
      question: {
        en: "What is the record for most laps led without winning in a single race?",
        es: "¿Cuál es el récord de más vueltas lideradas sin ganar en una sola carrera?",
        de: "Was ist der Rekord für die meisten geführten Runden ohne Sieg in einem einzelnen Rennen?",
        nl: "Wat is het record voor de meeste geleidde rondes zonder te winnen in een enkele race?"
      },
      options: [
        "Chris Amon Monaco 1972 (77/80 laps)",
        "Ronnie Peterson Italy 1978 (68/70 laps)",
        "Felipe Massa Singapore 2008 (60/61 laps)",
        "Kimi Räikkönen Spain 2005 (52/66 laps)"
      ],
      correct: 2,
      explanation: {
        en: "Felipe Massa led 60 of 61 laps in Singapore 2008 but lost due to the infamous premature pitstop release, handing victory to Fernando Alonso.",
        es: "Felipe Massa lideró 60 de 61 vueltas en Singapur 2008 pero perdió debido al infame lanzamiento prematuro en boxes, dando la victoria a Fernando Alonso.",
        de: "Felipe Massa führte 60 von 61 Runden in Singapur 2008, verlor aber durch die berüchtigte vorzeitige Boxenstoppfreigabe und gab den Sieg an Fernando Alonso ab.",
        nl: "Felipe Massa leidde 60 van de 61 rondes in Singapore 2008 maar verloor door de beruchte voortijdige pitstop-release, waardoor Fernando Alonso won."
      }
    },
    {
      question: {
        en: "What is the record for most points scored without a podium finish in a season?",
        es: "¿Cuál es el récord de más puntos anotados sin podio en una temporada?",
        de: "Was ist der Rekord für die meisten Punkte ohne Podium in einer Saison?",
        nl: "Wat is het record voor de meeste punten zonder podiumplaats in een seizoen?"
      },
      options: [
        "Nico Hulkenberg 2018 (69 points, 0 podiums)",
        "Sergio Perez 2013 (49 points, 0 podiums)",
        "Kamui Kobayashi 2012 (60 points, 1 podium)",
        "Adrian Sutil 2011 (42 points, 0 podiums)"
      ],
      correct: 0,
      explanation: {
        en: "Nico Hulkenberg scored 69 points in 2018 with Renault without a single podium, the most points ever by a driver in a season without reaching the top 3.",
        es: "Nico Hulkenberg anotó 69 puntos en 2018 con Renault sin un solo podio, los puntos más altos de un piloto en una temporada sin alcanzar el top 3.",
        de: "Nico Hulkenberg erzielte 69 Punkte 2018 mit Renault ohne ein einziges Podium, die meisten Punkte eines Fahrers in einer Saison ohne Top-3-Platzierung.",
        nl: "Nico Hulkenberg scoorde 69 punten in 2018 met Renault zonder een enkel podium, de meeste punten ooit door een coureur in een seizoen zonder top 3."
      }
    },
    {
      question: {
        en: "What is the record for most pole positions without a fastest lap in a season?",
        es: "¿Cuál es el récord de más poles sin vuelta rápida en una temporada?",
        de: "Was ist der Rekord für die meisten Pole-Positions ohne schnellste Runde in einer Saison?",
        nl: "Wat is het record voor de meeste polepositions zonder snelste ronde in een seizoen?"
      },
      options: [
        "Ayrton Senna 1988 (13 poles, 3 fastest laps)",
        "Michael Schumacher 2001 (11 poles, 3 fastest laps)",
        "Rubens Barrichello 2004 (2 poles, 0 fastest laps)",
        "Lewis Hamilton 2016 (12 poles, 7 fastest laps)"
      ],
      correct: 2,
      explanation: {
        en: "Rubens Barrichello took 2 pole positions in 2004 (Imola, Hockenheim) but remarkably scored zero fastest laps all season despite Ferrari's dominance.",
        es: "Rubens Barrichello logró 2 poles en 2004 (Imola, Hockenheim) pero notablemente no anotó vueltas rápidas en toda la temporada a pesar del dominio de Ferrari.",
        de: "Rubens Barrichello erzielte 2 Pole-Positions 2004 (Imola, Hockenheim), aber bemerkenswert null schnellste Runden die ganze Saison trotz Ferraris Dominanz.",
        nl: "Rubens Barrichello behaalde 2 polepositions in 2004 (Imola, Hockenheim) maar scoorde opvallend genoeg nul snelste rondes het hele seizoen ondanks Ferrari's dominantie."
      }
    },
    {
      question: {
        en: "What is the longest gap between consecutive wins by the same driver?",
        es: "¿Cuál es la brecha más larga entre victorias consecutivas del mismo piloto?",
        de: "Was ist der längste Abstand zwischen aufeinanderfolgenden Siegen desselben Fahrers?",
        nl: "Wat is de langste kloof tussen opeenvolgende overwinningen door dezelfde coureur?"
      },
      options: [
        "Sergio Perez: 215 races (Sakhir 2020 to Saudi Arabia 2023)",
        "Riccardo Patrese: 99 races (Monaco 1982 to San Marino 1990)",
        "Mark Webber: 48 races (Brazil 2009 to Spain 2010)",
        "Rubens Barrichello: 76 races (Germany 2004 to Italy 2009)"
      ],
      correct: 1,
      explanation: {
        en: "Riccardo Patrese waited 99 races between his Monaco 1982 win and San Marino 1990 victory, nearly 8 years spanning multiple teams.",
        es: "Riccardo Patrese esperó 99 carreras entre su victoria en Mónaco 1982 y San Marino 1990, casi 8 años abarcando múltiples equipos.",
        de: "Riccardo Patrese wartete 99 Rennen zwischen seinem Sieg in Monaco 1982 und San Marino 1990, fast 8 Jahre über mehrere Teams hinweg.",
        nl: "Riccardo Patrese wachtte 99 races tussen zijn overwinning in Monaco 1982 en San Marino 1990, bijna 8 jaar bij meerdere teams."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive races finishing on the lead lap?",
        es: "¿Cuál es el récord de más carreras consecutivas terminando en la vuelta líder?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennen auf der Führungsrunde beendet?",
        nl: "Wat is het record voor de meeste opeenvolgende races gefinisht in de leidende ronde?"
      },
      options: [
        "Lewis Hamilton 2019-2020 (33 races)",
        "Max Verstappen 2021-2023 (41 races)",
        "Sebastian Vettel 2010-2013 (46 races)",
        "Michael Schumacher 2001-2004 (38 races)"
      ],
      correct: 2,
      explanation: {
        en: "Sebastian Vettel finished 46 consecutive races on the lead lap from 2010-2013, an incredible streak of consistency and competitiveness during Red Bull's dominant era.",
        es: "Sebastian Vettel terminó 46 carreras consecutivas en la vuelta líder de 2010-2013, una racha increíble de consistencia y competitividad durante la era dominante de Red Bull.",
        de: "Sebastian Vettel beendete 46 aufeinanderfolgende Rennen auf der Führungsrunde von 2010-2013, eine unglaubliche Serie von Konsistenz und Wettbewerbsfähigkeit während Red Bulls dominanter Ära.",
        nl: "Sebastian Vettel finishte 46 opeenvolgende races in de leidende ronde van 2010-2013, een ongelooflijke reeks van consistentie en competitiviteit tijdens Red Bull's dominante tijdperk."
      }
    },
    {
      question: {
        en: "What is the record for most championship points scored by a non-winner in a season?",
        es: "¿Cuál es el récord de más puntos de campeonato anotados por un no ganador en una temporada?",
        de: "Was ist der Rekord für die meisten Meisterschaftspunkte eines Nicht-Siegers in einer Saison?",
        nl: "Wat is het record voor de meeste kampioenschapspunten gescoord door een niet-winnaar in een seizoen?"
      },
      options: [
        "Nick Heidfeld 2007 (61 points, 0 wins)",
        "Nico Hulkenberg 2018 (69 points, 0 wins)",
        "Sergio Perez 2016 (101 points, 0 wins)",
        "Valtteri Bottas 2021 (226 points, 0 wins)"
      ],
      correct: 2,
      explanation: {
        en: "Sergio Perez scored 101 points in 2016 with Force India without winning a race, the highest points total ever by a winless driver in a season.",
        es: "Sergio Perez anotó 101 puntos en 2016 con Force India sin ganar una carrera, el total de puntos más alto de un piloto sin victorias en una temporada.",
        de: "Sergio Perez erzielte 101 Punkte 2016 mit Force India ohne einen Sieg, die höchste Punktzahl eines sieglosen Fahrers in einer Saison.",
        nl: "Sergio Perez scoorde 101 punten in 2016 met Force India zonder een race te winnen, het hoogste puntentotaal ooit door een winnaarloze coureur in een seizoen."
      }
    },
    {
      question: {
        en: "What is the record for most races between pole positions for a multi-time pole sitter?",
        es: "¿Cuál es el récord de más carreras entre poles para un piloto con múltiples poles?",
        de: "Was ist der Rekord für die meisten Rennen zwischen Pole-Positions für einen mehrfachen Polesetter?",
        nl: "Wat is het record voor de meeste races tussen polepositions voor een meervoudig polesitter?"
      },
      options: [
        "Fernando Alonso: 201 races (Germany 2012 to Bahrain 2023)",
        "Kimi Räikkönen: 156 races (France 2008 to Monaco 2017)",
        "Jenson Button: 87 races (Monaco 2009 to Belgium 2012)",
        "Felipe Massa: 92 races (Singapore 2008 to Austria 2014)"
      ],
      correct: 1,
      explanation: {
        en: "Kimi Räikkönen went 156 races between pole positions, from France 2008 to Monaco 2017, nearly 9 years spanning Ferrari, Lotus, and second Ferrari stint.",
        es: "Kimi Räikkönen pasó 156 carreras entre poles, desde Francia 2008 hasta Mónaco 2017, casi 9 años abarcando Ferrari, Lotus y segundo periodo en Ferrari.",
        de: "Kimi Räikkönen ging 156 Rennen zwischen Pole-Positions, von Frankreich 2008 bis Monaco 2017, fast 9 Jahre über Ferrari, Lotus und zweite Ferrari-Zeit.",
        nl: "Kimi Räikkönen ging 156 races tussen polepositions, van Frankrijk 2008 tot Monaco 2017, bijna 9 jaar over Ferrari, Lotus en tweede Ferrari-periode."
      }
    },
    {
      question: {
        en: "What is the record for most different winners in consecutive races?",
        es: "¿Cuál es el récord de más ganadores diferentes en carreras consecutivas?",
        de: "Was ist der Rekord für die meisten verschiedenen Sieger in aufeinanderfolgenden Rennen?",
        nl: "Wat is het record voor de meeste verschillende winnaars in opeenvolgende races?"
      },
      options: [
        "10 different winners in 10 races (2012)",
        "8 different winners in 8 races (1982)",
        "7 different winners in 7 races (2000)",
        "9 different winners in 9 races (1999)"
      ],
      correct: 0,
      explanation: {
        en: "The 2012 season had 10 different winners in the first 10 races, the most diverse start to a season in F1 history, showcasing unprecedented competitiveness.",
        es: "La temporada 2012 tuvo 10 ganadores diferentes en las primeras 10 carreras, el inicio más diverso de una temporada en la historia de F1, mostrando competitividad sin precedentes.",
        de: "Die Saison 2012 hatte 10 verschiedene Sieger in den ersten 10 Rennen, der vielfältigste Saisonstart in der F1-Geschichte, der beispiellose Wettbewerbsfähigkeit zeigte.",
        nl: "Het seizoen 2012 had 10 verschillende winnaars in de eerste 10 races, de meest diverse start van een seizoen in F1-geschiedenis, met ongekende competitiviteit."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive seasons with at least one pole position?",
        es: "¿Cuál es el récord de más temporadas consecutivas con al menos una pole?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Saisons mit mindestens einer Pole-Position?",
        nl: "Wat is het record voor de meeste opeenvolgende seizoenen met minstens één poleposition?"
      },
      options: [
        "Lewis Hamilton 2007-2023 (17 seasons)",
        "Michael Schumacher 1992-2006 (15 seasons)",
        "Ayrton Senna 1985-1994 (10 seasons)",
        "Sebastian Vettel 2009-2019 (11 seasons)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton has taken at least one pole position in 17 consecutive seasons from 2007-2023, the longest such streak in F1 history.",
        es: "Lewis Hamilton ha logrado al menos una pole en 17 temporadas consecutivas desde 2007-2023, la racha más larga en la historia de F1.",
        de: "Lewis Hamilton hat in 17 aufeinanderfolgenden Saisons von 2007-2023 mindestens eine Pole-Position erzielt, die längste derartige Serie in der F1-Geschichte.",
        nl: "Lewis Hamilton heeft in 17 opeenvolgende seizoenen van 2007-2023 minstens één poleposition behaald, de langste dergelijke reeks in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for youngest driver to lead a race from pole to win?",
        es: "¿Cuál es el récord del piloto más joven en liderar una carrera desde pole hasta victoria?",
        de: "Was ist der Rekord für den jüngsten Fahrer, der ein Rennen von Pole zu Sieg führte?",
        nl: "Wat is het record voor jongste coureur om een race van pole naar overwinning te leiden?"
      },
      options: [
        "Sebastian Vettel - 21 years 73 days (Italy 2008)",
        "Max Verstappen - 18 years 228 days (Spain 2016)",
        "Fernando Alonso - 22 years 26 days (Malaysia 2003)",
        "Charles Leclerc - 21 years 246 days (Belgium 2019)"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel at 21 years 73 days dominated Italy 2008 from pole to victory in wet conditions, his first career win and pole-to-flag victory.",
        es: "Sebastian Vettel con 21 años y 73 días dominó Italia 2008 desde pole hasta victoria en condiciones mojadas, su primera victoria y triunfo de pole a bandera.",
        de: "Sebastian Vettel mit 21 Jahren 73 Tagen dominierte Italien 2008 von Pole zu Sieg bei Nässe, sein erster Karrieresieg und Pole-to-Flag-Sieg.",
        nl: "Sebastian Vettel met 21 jaar en 73 dagen domineerde Italië 2008 van pole naar overwinning in natte omstandigheden, zijn eerste carrièreoverwinning en pole-to-flag zege."
      }
    },
    {
      question: {
        en: "What is the record for most podiums without scoring a fastest lap in a career?",
        es: "¿Cuál es el récord de más podios sin lograr vuelta rápida en una carrera?",
        de: "Was ist der Rekord für die meisten Podien ohne schnellste Runde in einer Karriere?",
        nl: "Wat is het record voor de meeste podiumplaatsen zonder snelste ronde in een carrière?"
      },
      options: [
        "Heinz-Harald Frentzen (18 podiums, 0 fastest laps)",
        "Eddie Irvine (26 podiums, 0 fastest laps)",
        "Sergio Perez (39 podiums, 0 fastest laps)",
        "Esteban Ocon (3 podiums, 0 fastest laps)"
      ],
      correct: 2,
      explanation: {
        en: "Sergio Perez has achieved 39 podiums (as of 2023) without ever scoring an official fastest lap, the most podiums without this achievement.",
        es: "Sergio Perez ha logrado 39 podios (hasta 2023) sin anotar nunca una vuelta rápida oficial, los podios más altos sin este logro.",
        de: "Sergio Perez hat 39 Podien (Stand 2023) ohne jemals eine offizielle schnellste Runde zu erzielen, die meisten Podien ohne diese Leistung.",
        nl: "Sergio Perez heeft 39 podiumplaatsen behaald (tot 2023) zonder ooit een officiële snelste ronde te scoren, de meeste podia zonder deze prestatie."
      }
    },
    {
      question: {
        en: "What is the record for most races led at some point without winning?",
        es: "¿Cuál es el récord de más carreras lideradas en algún momento sin ganar?",
        de: "Was ist der Rekord für die meisten Rennen irgendwann geführt ohne zu gewinnen?",
        nl: "Wat is het record voor de meeste races op enig moment geleid zonder te winnen?"
      },
      options: [
        "Chris Amon (5 races led, 0 wins)",
        "Nick Heidfeld (8 races led, 0 wins)",
        "Nico Hulkenberg (2 races led, 0 wins)",
        "Romain Grosjean (3 races led, 0 wins)"
      ],
      correct: 1,
      explanation: {
        en: "Nick Heidfeld led 8 different races at various points during his career but never converted any into victories, the most races led without a win.",
        es: "Nick Heidfeld lideró 8 carreras diferentes en varios momentos durante su carrera pero nunca convirtió ninguna en victorias, las carreras más lideradas sin victoria.",
        de: "Nick Heidfeld führte 8 verschiedene Rennen zu verschiedenen Zeitpunkten seiner Karriere, konvertierte aber nie eines in einen Sieg, die meisten geführten Rennen ohne Sieg.",
        nl: "Nick Heidfeld leidde 8 verschillende races op verschillende momenten tijdens zijn carrière maar converteerde er nooit een naar een overwinning, de meeste geleidde races zonder zege."
      }
    },
    {
      question: {
        en: "What is the record for most pole positions in a season by a non-champion?",
        es: "¿Cuál es el récord de más poles en una temporada por un no campeón?",
        de: "Was ist der Rekord für die meisten Pole-Positions in einer Saison durch einen Nicht-Champion?",
        nl: "Wat is het record voor de meeste polepositions in een seizoen door een niet-kampioen?"
      },
      options: [
        "Felipe Massa 2008 (6 poles, finished 2nd)",
        "Valtteri Bottas 2019 (5 poles, finished 2nd)",
        "Nico Rosberg 2014 (7 poles, finished 2nd)",
        "René Arnoux 1982 (3 poles, finished 3rd)"
      ],
      correct: 2,
      explanation: {
        en: "Nico Rosberg took 7 pole positions in 2014 but finished 2nd to Lewis Hamilton, the most poles in a season without winning the championship.",
        es: "Nico Rosberg logró 7 poles en 2014 pero terminó 2º ante Lewis Hamilton, las poles más altas en una temporada sin ganar el campeonato.",
        de: "Nico Rosberg erzielte 7 Pole-Positions 2014, wurde aber 2. hinter Lewis Hamilton, die meisten Poles in einer Saison ohne Meisterschaftsgewinn.",
        nl: "Nico Rosberg behaalde 7 polepositions in 2014 maar eindigde 2e achter Lewis Hamilton, de meeste poles in een seizoen zonder het kampioenschap te winnen."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive seasons finishing in the top 10 of the championship?",
        es: "¿Cuál es el récord de más temporadas consecutivas terminando en el top 10 del campeonato?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Saisons in den Top 10 der Meisterschaft?",
        nl: "Wat is het record voor de meeste opeenvolgende seizoenen eindigend in de top 10 van het kampioenschap?"
      },
      options: [
        "Fernando Alonso: 20 seasons (2003-2023 excluding 2019-20)",
        "Kimi Räikkönen: 17 seasons (2001-2018 excluding 2010-11)",
        "Jenson Button: 15 consecutive seasons (2000-2014)",
        "Michael Schumacher: 16 consecutive seasons (1992-2006, 2010-12)"
      ],
      correct: 2,
      explanation: {
        en: "Jenson Button finished in the top 10 of the Drivers' Championship for 15 consecutive seasons from 2000-2014, showing remarkable consistency.",
        es: "Jenson Button terminó en el top 10 del Campeonato de Pilotos durante 15 temporadas consecutivas de 2000-2014, mostrando una consistencia notable.",
        de: "Jenson Button beendete 15 aufeinanderfolgende Saisons von 2000-2014 in den Top 10 der Fahrerwertung und zeigte bemerkenswerte Konsistenz.",
        nl: "Jenson Button eindigde 15 opeenvolgende seizoenen van 2000-2014 in de top 10 van het rijderskampioenschap, wat opmerkelijke consistentie toont."
      }
    },
    {
      question: {
        en: "What is the record for most Grand Slam victories (pole, win, fastest lap, led all laps)?",
        es: "¿Cuál es el récord de más victorias Grand Slam (pole, victoria, vuelta rápida, liderar todas las vueltas)?",
        de: "Was ist der Rekord für die meisten Grand-Slam-Siege (Pole, Sieg, schnellste Runde, alle Runden geführt)?",
        nl: "Wat is het record voor de meeste Grand Slam overwinningen (pole, zege, snelste ronde, alle rondes geleid)?"
      },
      options: [
        "Lewis Hamilton (6 Grand Slams)",
        "Jim Clark (8 Grand Slams)",
        "Ayrton Senna (5 Grand Slams)",
        "Michael Schumacher (5 Grand Slams)"
      ],
      correct: 1,
      explanation: {
        en: "Jim Clark achieved 8 Grand Slam victories in the 1960s, the most in F1 history, showcasing his complete dominance during the Lotus years.",
        es: "Jim Clark logró 8 victorias Grand Slam en los años 60, las más en la historia de F1, mostrando su dominio completo durante los años Lotus.",
        de: "Jim Clark erzielte 8 Grand-Slam-Siege in den 1960ern, die meisten in der F1-Geschichte, was seine vollständige Dominanz während der Lotus-Jahre zeigt.",
        nl: "Jim Clark behaalde 8 Grand Slam overwinningen in de jaren 60, de meeste in F1-geschiedenis, wat zijn complete dominantie tijdens de Lotus-jaren toont."
      }
    },
    {
      question: {
        en: "What is the record for most constructors' championships won consecutively?",
        es: "¿Cuál es el récord de más campeonatos de constructores ganados consecutivamente?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgend gewonnenen Konstrukteurs-Meisterschaften?",
        nl: "Wat is het record voor de meeste opeenvolgend gewonnen constructeurskampioenschappen?"
      },
      options: [
        "Ferrari 1999-2004 (6 consecutive)",
        "McLaren 1988-1991 (4 consecutive)",
        "Red Bull 2010-2013 (4 consecutive)",
        "Mercedes 2014-2021 (8 consecutive)"
      ],
      correct: 3,
      explanation: {
        en: "Mercedes won 8 consecutive Constructors' Championships from 2014-2021, the longest such streak in F1 history during the hybrid era dominance.",
        es: "Mercedes ganó 8 Campeonatos de Constructores consecutivos de 2014-2021, la racha más larga en la historia de F1 durante el dominio de la era híbrida.",
        de: "Mercedes gewann 8 aufeinanderfolgende Konstrukteurs-Meisterschaften von 2014-2021, die längste derartige Serie in der F1-Geschichte während der Hybrid-Ära-Dominanz.",
        nl: "Mercedes won 8 opeenvolgende constructeurskampioenschappen van 2014-2021, de langste dergelijke reeks in F1-geschiedenis tijdens de hybrid-tijdperk dominantie."
      }
    },
    {
      question: {
        en: "What is the record for most races started by a driver who never scored a point?",
        es: "¿Cuál es el récord de más carreras iniciadas por un piloto que nunca puntuó?",
        de: "Was ist der Rekord für die meisten gestarteten Rennen eines Fahrers ohne Punkt?",
        nl: "Wat is het record voor de meeste gestarte races door een coureur die nooit een punt scoorde?"
      },
      options: [
        "Luca Badoer (58 starts, 0 points)",
        "Andrea de Cesaris (208 starts, 59 points)",
        "Taki Inoue (18 starts, 0 points)",
        "Philippe Alliot (109 starts, 5 points)"
      ],
      correct: 0,
      explanation: {
        en: "Luca Badoer started 58 Grand Prix across his career (1993-99, 2009) without ever scoring a championship point, the most starts without points.",
        es: "Luca Badoer comenzó 58 Grandes Premios en su carrera (1993-99, 2009) sin anotar nunca un punto del campeonato, las salidas más altas sin puntos.",
        de: "Luca Badoer startete 58 Grand Prix in seiner Karriere (1993-99, 2009) ohne jemals einen Meisterschaftspunkt zu erzielen, die meisten Starts ohne Punkte.",
        nl: "Luca Badoer startte 58 Grand Prix tijdens zijn carrière (1993-99, 2009) zonder ooit een kampioenschapspunt te scoren, de meeste starts zonder punten."
      }
    },
    {
      question: {
        en: "What is the record for most different teams driven for by a world champion?",
        es: "¿Cuál es el récord de más equipos diferentes conducidos por un campeón mundial?",
        de: "Was ist der Rekord für die meisten verschiedenen Teams eines Weltmeisters?",
        nl: "Wat is het record voor de meeste verschillende teams gereden door een wereldkampioen?"
      },
      options: [
        "Fernando Alonso (7 teams)",
        "Kimi Räikkönen (5 teams)",
        "Jenson Button (7 teams)",
        "Niki Lauda (5 teams)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso has driven for 7 different teams (Minardi, Renault, McLaren, Ferrari, McLaren again, Alpine, Aston Martin) as a 2-time world champion.",
        es: "Fernando Alonso ha conducido para 7 equipos diferentes (Minardi, Renault, McLaren, Ferrari, McLaren de nuevo, Alpine, Aston Martin) como bicampeón mundial.",
        de: "Fernando Alonso ist für 7 verschiedene Teams gefahren (Minardi, Renault, McLaren, Ferrari, McLaren erneut, Alpine, Aston Martin) als zweifacher Weltmeister.",
        nl: "Fernando Alonso heeft gereden voor 7 verschillende teams (Minardi, Renault, McLaren, Ferrari, McLaren opnieuw, Alpine, Aston Martin) als tweevoudig wereldkampioen."
      }
    },
    {
      question: {
        en: "What is the record for most races between podiums by a regular podium finisher?",
        es: "¿Cuál es el récord de más carreras entre podios por un piloto regular de podios?",
        de: "Was ist der Rekord für die meisten Rennen zwischen Podien eines regelmäßigen Podiumsfinishers?",
        nl: "Wat is het record voor de meeste races tussen podia door een regelmatige podiumfinisher?"
      },
      options: [
        "Felipe Massa: 93 races (Korea 2013 to Austria 2014)",
        "Rubens Barrichello: 76 races (Germany 2004 to Italy 2009)",
        "Kimi Räikkönen: 52 races (Belgium 2013 to Australia 2018)",
        "Mark Webber: 38 races (Brazil 2008 to Germany 2009)"
      ],
      correct: 1,
      explanation: {
        en: "Rubens Barrichello went 76 races without a podium from Germany 2004 to Italy 2009, despite being a 68-time podium finisher in his career.",
        es: "Rubens Barrichello pasó 76 carreras sin podio desde Alemania 2004 hasta Italia 2009, a pesar de tener 68 podios en su carrera.",
        de: "Rubens Barrichello ging 76 Rennen ohne Podium von Deutschland 2004 bis Italien 2009, trotz 68 Podiumsplatzierungen in seiner Karriere.",
        nl: "Rubens Barrichello ging 76 races zonder podium van Duitsland 2004 tot Italië 2009, ondanks 68 podiumplaatsen in zijn carrière."
      }
    },
    {
      question: {
        en: "What is the record for most points scored in a single race weekend (including sprint)?",
        es: "¿Cuál es el récord de más puntos anotados en un solo fin de semana de carrera (incluyendo sprint)?",
        de: "Was ist der Rekord für die meisten Punkte an einem einzelnen Rennwochenende (einschließlich Sprint)?",
        nl: "Wat is het record voor de meeste punten gescoord in een enkel raceweekend (inclusief sprint)?"
      },
      options: [
        "Max Verstappen: 34 points (pole 1 + sprint win 8 + race win 25)",
        "Lewis Hamilton: 29 points (pole 1 + sprint 2nd 7 + race win 25)",
        "Valtteri Bottas: 26 points (pole 1 + race win 25)",
        "Charles Leclerc: 27 points (pole 1 + sprint 3rd 6 + race win 25)"
      ],
      correct: 0,
      explanation: {
        en: "Max Verstappen scored 34 points at sprint weekends by taking pole (1), winning the sprint (8), and winning the main race (25) in the modern sprint format.",
        es: "Max Verstappen anotó 34 puntos en fines de semana sprint al tomar pole (1), ganar el sprint (8) y ganar la carrera principal (25) en el formato sprint moderno.",
        de: "Max Verstappen erzielte 34 Punkte an Sprint-Wochenenden durch Pole (1), Sprint-Sieg (8) und Hauptrennen-Sieg (25) im modernen Sprint-Format.",
        nl: "Max Verstappen scoorde 34 punten op sprint-weekenden door pole (1), sprint-overwinning (8) en hoofdrace-overwinning (25) in het moderne sprint-format."
      }
    },
    {
      question: {
        en: "What is the record for most laps completed in a career?",
        es: "¿Cuál es el récord de más vueltas completadas en una carrera?",
        de: "Was ist der Rekord für die meisten absolvierten Runden in einer Karriere?",
        nl: "Wat is het record voor de meeste voltooide rondes in een carrière?"
      },
      options: [
        "Kimi Räikkönen: 18,700+ laps",
        "Fernando Alonso: 19,500+ laps",
        "Rubens Barrichello: 16,200+ laps",
        "Lewis Hamilton: 17,800+ laps"
      ],
      correct: 1,
      explanation: {
        en: "Fernando Alonso has completed over 19,500 laps across his 22+ year career (2001-2024), the most racing laps in F1 history.",
        es: "Fernando Alonso ha completado más de 19,500 vueltas en su carrera de 22+ años (2001-2024), las vueltas de carrera más altas en la historia de F1.",
        de: "Fernando Alonso hat über 19.500 Runden in seiner 22+ Jahre langen Karriere (2001-2024) absolviert, die meisten Rennrunden in der F1-Geschichte.",
        nl: "Fernando Alonso heeft meer dan 19.500 rondes voltooid tijdens zijn 22+ jaar carrière (2001-2024), de meeste racerondes in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most wins from outside the top 10 on the grid?",
        es: "¿Cuál es el récord de más victorias desde fuera del top 10 en la parrilla?",
        de: "Was ist der Rekord für die meisten Siege von außerhalb der Top 10 im Grid?",
        nl: "Wat is het record voor de meeste overwinningen van buiten de top 10 op de grid?"
      },
      options: [
        "Kimi Räikkönen (3 wins from 11th or lower)",
        "John Watson (2 wins from 17th or lower)",
        "Sebastian Vettel (2 wins from 15th or lower)",
        "Lewis Hamilton (1 win from 14th)"
      ],
      correct: 1,
      explanation: {
        en: "John Watson won from 17th (1982 Belgium) and 22nd (1983 USA West), the two lowest grid positions to win from, both at Long Beach street circuit.",
        es: "John Watson ganó desde 17º (1982 Bélgica) y 22º (1983 USA West), las posiciones de parrilla más bajas para ganar, ambas en el circuito callejero de Long Beach.",
        de: "John Watson gewann von 17. (1982 Belgien) und 22. (1983 USA West), die niedrigsten Gridpositionen für einen Sieg, beide auf dem Stadtkurs Long Beach.",
        nl: "John Watson won vanaf de 17e (1982 België) en 22e (1983 USA West), de laagste startposities voor een overwinning, beide op het stratencircuit Long Beach."
      }
    },
    {
      question: {
        en: "What is the record for most race entries without qualifying for a race?",
        es: "¿Cuál es el récord de más intentos sin clasificar para una carrera?",
        de: "Was ist der Rekord für die meisten Renneinträge ohne Qualifikation für ein Rennen?",
        nl: "Wat is het record voor de meeste race-inschrijvingen zonder kwalificatie voor een race?"
      },
      options: [
        "Claudio Langes: 12 DNQs (1990-91)",
        "Perry McCarthy: 8 DNQs (1992)",
        "Gabriele Tarquini: 15 DNQs (1987-95)",
        "Bertrand Gachot: 6 DNQs (1989-94)"
      ],
      options: [
        "Claudio Langes: 12 DNQs (1990-91)",
        "Perry McCarthy: 8 DNQs (1992)",
        "Gabriele Tarquini: 15 DNQs (1987-95)",
        "Bertrand Gachot: 6 DNQs (1989-94)"
      ],
      correct: 0,
      explanation: {
        en: "Claudio Langes attempted to qualify for 14 races in 1990-91 but failed to qualify 12 times, never actually starting a Grand Prix.",
        es: "Claudio Langes intentó clasificar para 14 carreras en 1990-91 pero no clasificó 12 veces, nunca comenzó realmente un Gran Premio.",
        de: "Claudio Langes versuchte sich für 14 Rennen 1990-91 zu qualifizieren, scheiterte aber 12 Mal, startete nie tatsächlich zu einem Grand Prix.",
        nl: "Claudio Langes probeerde te kwalificeren voor 14 races in 1990-91 maar kwalificeerde zich 12 keer niet, startte nooit daadwerkelijk in een Grand Prix."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive races with at least one DNF by a team?",
        es: "¿Cuál es el récord de más carreras consecutivas con al menos un DNF por un equipo?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennen mit mindestens einem DNF eines Teams?",
        nl: "Wat is het record voor de meeste opeenvolgende races met minstens één DNF door een team?"
      },
      options: [
        "McLaren-Honda 2015-16: 23 races",
        "Williams 2018-19: 18 races",
        "Renault 2017: 14 races",
        "Haas 2019-20: 16 races"
      ],
      correct: 0,
      explanation: {
        en: "McLaren-Honda had at least one car retire in 23 consecutive races from 2015-16, highlighting the partnership's notorious reliability problems.",
        es: "McLaren-Honda tuvo al menos un coche retirado en 23 carreras consecutivas de 2015-16, destacando los notorios problemas de fiabilidad de la asociación.",
        de: "McLaren-Honda hatte in 23 aufeinanderfolgenden Rennen von 2015-16 mindestens einen Ausfall, was die berüchtigten Zuverlässigkeitsprobleme der Partnerschaft zeigt.",
        nl: "McLaren-Honda had minstens één auto uitvallen in 23 opeenvolgende races van 2015-16, wat de beruchte betrouwbaarheidsproblemen van het partnerschap benadrukt."
      }
    },
    {
      question: {
        en: "What is the record for most points scored by a team in a single season?",
        es: "¿Cuál es el récord de más puntos anotados por un equipo en una sola temporada?",
        de: "Was ist der Rekord für die meisten Punkte eines Teams in einer einzelnen Saison?",
        nl: "Wat is het record voor de meeste punten gescoord door een team in een enkel seizoen?"
      },
      options: [
        "Mercedes 2016 (765 points)",
        "Red Bull 2023 (860 points)",
        "Ferrari 2004 (262 points)",
        "McLaren 1988 (199 points)"
      ],
      correct: 1,
      explanation: {
        en: "Red Bull Racing scored 860 points in 2023 with Max Verstappen and Sergio Perez, the highest constructor points total in F1 history.",
        es: "Red Bull Racing anotó 860 puntos en 2023 con Max Verstappen y Sergio Perez, el total de puntos de constructor más alto en la historia de F1.",
        de: "Red Bull Racing erzielte 860 Punkte 2023 mit Max Verstappen und Sergio Perez, die höchste Konstrukteurs-Punktzahl in der F1-Geschichte.",
        nl: "Red Bull Racing scoorde 860 punten in 2023 met Max Verstappen en Sergio Perez, het hoogste constructeurspuntentotaal in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive front row starts?",
        es: "¿Cuál es el récord de más salidas consecutivas desde primera fila?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Starts aus der ersten Reihe?",
        nl: "Wat is het record voor de meeste opeenvolgende starts vanaf de eerste rij?"
      },
      options: [
        "Ayrton Senna 1989 (8 front rows)",
        "Lewis Hamilton 2015-16 (12 front rows)",
        "Michael Schumacher 2001 (9 front rows)",
        "Sebastian Vettel 2011 (11 front rows)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton started from the front row in 12 consecutive races from Singapore 2015 to Bahrain 2016, the longest such streak in F1 history.",
        es: "Lewis Hamilton salió desde primera fila en 12 carreras consecutivas desde Singapur 2015 hasta Baréin 2016, la racha más larga en la historia de F1.",
        de: "Lewis Hamilton startete in 12 aufeinanderfolgenden Rennen von Singapur 2015 bis Bahrain 2016 aus der ersten Reihe, die längste derartige Serie in der F1-Geschichte.",
        nl: "Lewis Hamilton startte vanaf de eerste rij in 12 opeenvolgende races van Singapore 2015 tot Bahrein 2016, de langste dergelijke reeks in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most different nationalities to win a race in one season?",
        es: "¿Cuál es el récord de más nacionalidades diferentes en ganar una carrera en una temporada?",
        de: "Was ist der Rekord für die meisten verschiedenen Nationalitäten, die in einer Saison ein Rennen gewinnen?",
        nl: "Wat is het record voor de meeste verschillende nationaliteiten om een race te winnen in één seizoen?"
      },
      options: [
        "2012: 7 different nationalities",
        "1982: 6 different nationalities",
        "2009: 5 different nationalities",
        "1999: 5 different nationalities"
      ],
      correct: 0,
      explanation: {
        en: "The 2012 season had winners from 7 different countries: UK, Germany, Spain, Finland, Australia, Venezuela, and France, the most diverse season ever.",
        es: "La temporada 2012 tuvo ganadores de 7 países diferentes: Reino Unido, Alemania, España, Finlandia, Australia, Venezuela y Francia, la temporada más diversa.",
        de: "Die Saison 2012 hatte Sieger aus 7 verschiedenen Ländern: UK, Deutschland, Spanien, Finnland, Australien, Venezuela und Frankreich, die vielfältigste Saison überhaupt.",
        nl: "Het seizoen 2012 had winnaars uit 7 verschillende landen: VK, Duitsland, Spanje, Finland, Australië, Venezuela en Frankrijk, het meest diverse seizoen ooit."
      }
    },
    {
      question: {
        en: "What is the record for most hat-tricks (pole, win, fastest lap) in a career?",
        es: "¿Cuál es el récord de más hat-tricks (pole, victoria, vuelta rápida) en una carrera?",
        de: "Was ist der Rekord für die meisten Hat-Tricks (Pole, Sieg, schnellste Runde) in einer Karriere?",
        nl: "Wat is het record voor de meeste hat-tricks (pole, zege, snelste ronde) in een carrière?"
      },
      options: [
        "Michael Schumacher (22 hat-tricks)",
        "Lewis Hamilton (23 hat-tricks)",
        "Ayrton Senna (19 hat-tricks)",
        "Sebastian Vettel (17 hat-tricks)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has achieved 23 hat-tricks (pole, win, fastest lap) in his career, the most in F1 history, showcasing complete race weekend dominance.",
        es: "Lewis Hamilton ha logrado 23 hat-tricks (pole, victoria, vuelta rápida) en su carrera, los más en la historia de F1, mostrando dominio completo del fin de semana.",
        de: "Lewis Hamilton hat 23 Hat-Tricks (Pole, Sieg, schnellste Runde) in seiner Karriere erzielt, die meisten in der F1-Geschichte, was vollständige Rennwochenend-Dominanz zeigt.",
        nl: "Lewis Hamilton heeft 23 hat-tricks (pole, zege, snelste ronde) behaald in zijn carrière, de meeste in F1-geschiedenis, wat complete raceweekend-dominantie toont."
      }
    },
    {
      question: {
        en: "What is the record for most podiums by teammates in a single season?",
        es: "¿Cuál es el récord de más podios por compañeros de equipo en una sola temporada?",
        de: "Was ist der Rekord für die meisten Podien von Teamkollegen in einer einzelnen Saison?",
        nl: "Wat is het record voor de meeste podia door teamgenoten in een enkel seizoen?"
      },
      options: [
        "Hamilton-Rosberg 2015 (32 combined podiums)",
        "Hamilton-Bottas 2019 (29 combined podiums)",
        "Vettel-Webber 2011 (27 combined podiums)",
        "Schumacher-Barrichello 2002 (26 combined podiums)"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton and Nico Rosberg combined for 32 podiums in 2015 (19 races), with Mercedes finishing 1-2 in 12 races that season.",
        es: "Lewis Hamilton y Nico Rosberg combinaron 32 podios en 2015 (19 carreras), con Mercedes terminando 1-2 en 12 carreras esa temporada.",
        de: "Lewis Hamilton und Nico Rosberg kombinierten 32 Podien 2015 (19 Rennen), wobei Mercedes in 12 Rennen dieser Saison 1-2 beendete.",
        nl: "Lewis Hamilton en Nico Rosberg combineerden 32 podia in 2015 (19 races), waarbij Mercedes in 12 races dat seizoen 1-2 eindigde."
      }
    },
    {
      question: {
        en: "What is the record for oldest driver to score their first career podium?",
        es: "¿Cuál es el récord del piloto más viejo en lograr su primer podio de carrera?",
        de: "Was ist der Rekord für den ältesten Fahrer, der sein erstes Karriere-Podium erzielt?",
        nl: "Wat is het record voor oudste coureur om hun eerste carrière-podium te scoren?"
      },
      options: [
        "Sergio Perez - 30 years 277 days (Sakhir 2020)",
        "Mark Webber - 27 years 226 days (Monaco 2010)",
        "Esteban Ocon - 24 years 271 days (Sakhir 2020)",
        "Pierre Gasly - 24 years 69 days (Brazil 2019)"
      ],
      correct: 0,
      explanation: {
        en: "Sergio Perez was 30 years 277 days old when he scored his first podium at Sakhir 2020 (he actually won), the oldest first-time podium finisher.",
        es: "Sergio Perez tenía 30 años y 277 días cuando logró su primer podio en Sakhir 2020 (de hecho ganó), el piloto de primer podio más viejo.",
        de: "Sergio Perez war 30 Jahre 277 Tage alt, als er sein erstes Podium in Sakhir 2020 erzielte (er gewann tatsächlich), der älteste Erstpodium-Finisher.",
        nl: "Sergio Perez was 30 jaar en 277 dagen oud toen hij zijn eerste podium scoorde in Sakhir 2020 (hij won eigenlijk), de oudste eerste-keer-podiumfinisher."
      }
    },
    {
      question: {
        en: "What is the record for most seasons with at least one win?",
        es: "¿Cuál es el récord de más temporadas con al menos una victoria?",
        de: "Was ist der Rekord für die meisten Saisons mit mindestens einem Sieg?",
        nl: "Wat is het record voor de meeste seizoenen met minstens één overwinning?"
      },
      options: [
        "Michael Schumacher (15 winning seasons)",
        "Lewis Hamilton (17 winning seasons)",
        "Fernando Alonso (10 winning seasons)",
        "Kimi Räikkönen (11 winning seasons)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has won at least one race in 17 different seasons from 2007-2024 (excluding 2022), the most winning seasons in F1 history.",
        es: "Lewis Hamilton ha ganado al menos una carrera en 17 temporadas diferentes de 2007-2024 (excluyendo 2022), las temporadas ganadoras más altas en la historia de F1.",
        de: "Lewis Hamilton hat in 17 verschiedenen Saisons von 2007-2024 (ausgenommen 2022) mindestens ein Rennen gewonnen, die meisten Gewinner-Saisons in der F1-Geschichte.",
        nl: "Lewis Hamilton heeft minstens één race gewonnen in 17 verschillende seizoenen van 2007-2024 (exclusief 2022), de meeste winnende seizoenen in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most laps led in a single race by a driver who didn't win?",
        es: "¿Cuál es el récord de más vueltas lideradas en una sola carrera por un piloto que no ganó?",
        de: "Was ist der Rekord für die meisten geführten Runden in einem einzelnen Rennen durch einen Fahrer, der nicht gewann?",
        nl: "Wat is het record voor de meeste geleidde rondes in een enkele race door een coureur die niet won?"
      },
      options: [
        "Felipe Massa Singapore 2008 (60/61 laps)",
        "Kimi Räikkönen Spain 2005 (52/66 laps)",
        "Fernando Alonso Canada 2007 (49/70 laps)",
        "Lewis Hamilton Malaysia 2016 (40/56 laps)"
      ],
      correct: 0,
      explanation: {
        en: "Felipe Massa led 60 of 61 laps in Singapore 2008 but finished 13th after the infamous fuel hose incident during his pitstop, the most laps led without winning.",
        es: "Felipe Massa lideró 60 de 61 vueltas en Singapur 2008 pero terminó 13º después del infame incidente de la manguera de combustible, las vueltas más lideradas sin ganar.",
        de: "Felipe Massa führte 60 von 61 Runden in Singapur 2008, beendete aber als 13. nach dem berüchtigten Tankleitungsvorfall, die meisten geführten Runden ohne Sieg.",
        nl: "Felipe Massa leidde 60 van 61 rondes in Singapore 2008 maar eindigde 13e na het beruchte brandstofslang-incident, de meeste geleidde rondes zonder te winnen."
      }
    },
    {
      question: {
        en: "What is the record for most pole positions converted to wins in a career percentage?",
        es: "¿Cuál es el récord de más poles convertidas en victorias en porcentaje de carrera?",
        de: "Was ist der Rekord für die meisten in Siege umgewandelten Pole-Positions in Karriere-Prozent?",
        nl: "Wat is het record voor de meeste polepositions omgezet in overwinningen in carrière-percentage?"
      },
      options: [
        "Juan Manuel Fangio: 56.5% (29 poles, 24 wins from pole)",
        "Ayrton Senna: 40.2% (65 poles, 29 wins from pole)",
        "Jim Clark: 63.6% (33 poles, 21 wins from pole)",
        "Michael Schumacher: 48.1% (68 poles, 40 wins from pole)"
      ],
      correct: 2,
      explanation: {
        en: "Jim Clark converted 63.6% of his 33 pole positions into wins (21 victories), the highest pole-to-win conversion rate among drivers with 20+ poles.",
        es: "Jim Clark convirtió 63.6% de sus 33 poles en victorias (21 victorias), la tasa de conversión pole-victoria más alta entre pilotos con 20+ poles.",
        de: "Jim Clark konvertierte 63,6% seiner 33 Pole-Positions in Siege (21 Siege), die höchste Pole-zu-Sieg-Konversionsrate unter Fahrern mit 20+ Poles.",
        nl: "Jim Clark converteerde 63,6% van zijn 33 polepositions in overwinningen (21 overwinningen), de hoogste pole-naar-zege-conversieratio onder coureurs met 20+ poles."
      }
    },
    {
      question: {
        en: "What is the record for most consecutive races finishing in the points-paying positions?",
        es: "¿Cuál es el récord de más carreras consecutivas terminando en posiciones de puntos?",
        de: "Was ist der Rekord für die meisten aufeinanderfolgenden Rennen in den Punkterängen beendet?",
        nl: "Wat is het record voor de meeste opeenvolgende races gefinisht in de punten-betalende posities?"
      },
      options: [
        "Lewis Hamilton 2019-2020 (27 consecutive points finishes)",
        "Max Verstappen 2020-2022 (35 consecutive points finishes)",
        "Kimi Räikkönen 2012-2013 (27 consecutive points finishes)",
        "Sebastian Vettel 2010-2011 (23 consecutive points finishes)"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen scored points in 35 consecutive races from Spain 2020 to Monaco 2022, the longest points-scoring streak in F1 history.",
        es: "Max Verstappen puntuó en 35 carreras consecutivas desde España 2020 hasta Mónaco 2022, la racha de puntuación más larga en la historia de F1.",
        de: "Max Verstappen punktete in 35 aufeinanderfolgenden Rennen von Spanien 2020 bis Monaco 2022, die längste Punkte-Serie in der F1-Geschichte.",
        nl: "Max Verstappen scoorde punten in 35 opeenvolgende races van Spanje 2020 tot Monaco 2022, de langste punten-scorende reeks in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most wins by a naturally aspirated engine in the turbo/hybrid era?",
        es: "¿Cuál es el récord de más victorias por un motor de aspiración natural en la era turbo/híbrida?",
        de: "Was ist der Rekord für die meisten Siege eines Saugmotors in der Turbo/Hybrid-Ära?",
        nl: "Wat is het record voor de meeste overwinningen door een atmosferische motor in het turbo/hybride-tijdperk?"
      },
      options: [
        "Renault V8 2010-2013 (78 wins)",
        "Ferrari V8 2008-2013 (24 wins)",
        "Mercedes V8 2009-2013 (12 wins)",
        "Cosworth V8 2006-2013 (0 wins)"
      ],
      correct: 0,
      explanation: {
        en: "The Renault V8 won 78 races from 2010-2013 (Red Bull dominance), the most successful naturally aspirated engine before the 2014 turbo-hybrid era.",
        es: "El Renault V8 ganó 78 carreras de 2010-2013 (dominio Red Bull), el motor de aspiración natural más exitoso antes de la era turbo-híbrida de 2014.",
        de: "Der Renault-V8 gewann 78 Rennen von 2010-2013 (Red-Bull-Dominanz), der erfolgreichste Saugmotor vor der Turbo-Hybrid-Ära 2014.",
        nl: "De Renault V8 won 78 races van 2010-2013 (Red Bull-dominantie), de meest succesvolle atmosferische motor vóór het 2014 turbo-hybride tijdperk."
      }
    },
    {
      question: {
        en: "What is the record for most different circuits won at by a single driver?",
        es: "¿Cuál es el récord de más circuitos diferentes ganados por un solo piloto?",
        de: "Was ist der Rekord für die meisten verschiedenen Rennstrecken, auf denen ein einzelner Fahrer gewann?",
        nl: "Wat is het record voor de meeste verschillende circuits gewonnen door een enkele coureur?"
      },
      options: [
        "Michael Schumacher (23 different circuits)",
        "Lewis Hamilton (32 different circuits)",
        "Sebastian Vettel (21 different circuits)",
        "Fernando Alonso (19 different circuits)"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton has won at 32 different circuits throughout his career, the most diverse winning record across different tracks in F1 history.",
        es: "Lewis Hamilton ha ganado en 32 circuitos diferentes a lo largo de su carrera, el récord de victorias más diverso en diferentes pistas en la historia de F1.",
        de: "Lewis Hamilton hat auf 32 verschiedenen Rennstrecken während seiner Karriere gewonnen, das vielfältigste Siegesrekord über verschiedene Strecken in der F1-Geschichte.",
        nl: "Lewis Hamilton heeft gewonnen op 32 verschillende circuits gedurende zijn carrière, het meest diverse overwinningsrecord over verschillende circuits in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "What is the record for most wins without leading the championship at any point in the season?",
        es: "¿Cuál es el récord de más victorias sin liderar el campeonato en ningún momento de la temporada?",
        de: "Was ist der Rekord für die meisten Siege ohne jemals die Meisterschaft in der Saison anzuführen?",
        nl: "Wat is het record voor de meeste overwinningen zonder het kampioenschap op enig moment in het seizoen te leiden?"
      },
      options: [
        "Rubens Barrichello 2004 (2 wins, never led)",
        "Valtteri Bottas 2019 (4 wins, never led)",
        "Felipe Massa 2008 (6 wins, led until final lap)",
        "Mark Webber 2010 (4 wins, led midseason)"
      ],
      correct: 1,
      explanation: {
        en: "Valtteri Bottas won 4 races in 2019 but never led the championship standings at any point, always trailing Lewis Hamilton throughout the season.",
        es: "Valtteri Bottas ganó 4 carreras en 2019 pero nunca lideró la clasificación del campeonato en ningún momento, siempre detrás de Lewis Hamilton durante la temporada.",
        de: "Valtteri Bottas gewann 4 Rennen 2019, führte aber zu keinem Zeitpunkt die Meisterschaftswertung an und lag die ganze Saison hinter Lewis Hamilton.",
        nl: "Valtteri Bottas won 4 races in 2019 maar leidde het kampioenschap op geen enkel moment, altijd achter Lewis Hamilton gedurende het seizoen."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();
