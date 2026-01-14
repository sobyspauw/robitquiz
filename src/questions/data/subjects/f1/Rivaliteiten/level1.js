const level1 = (function() {
  const questions = [
    {
      question: {
        en: "Which famous rivalry was featured in the movie 'Rush'?",
        es: "¿Qué famosa rivalidad fue presentada en la película 'Rush'?",
        de: "Welche berühmte Rivalität wurde im Film 'Rush' gezeigt?",
        nl: "Welke beroemde rivaliteit werd getoond in de film 'Rush'?"
      },
      options: [
        "James Hunt vs Niki Lauda",
        "Ayrton Senna vs Alain Prost",
        "Lewis Hamilton vs Fernando Alonso",
        "Mika Häkkinen vs David Coulthard"
      ],
      correct: 0,
      explanation: {
        en: "The 1976 rivalry between James Hunt (McLaren) and Niki Lauda (Ferrari) was featured in 'Rush', focusing on their championship battle.",
        es: "La rivalidad de 1976 entre James Hunt (McLaren) y Niki Lauda (Ferrari) fue presentada en 'Rush', enfocándose en su batalla por el campeonato.",
        de: "Die Rivalität von 1976 zwischen James Hunt (McLaren) und Niki Lauda (Ferrari) wurde in 'Rush' gezeigt, mit Fokus auf ihren Meisterschaftskampf.",
        nl: "De rivaliteit van 1976 tussen James Hunt (McLaren) en Niki Lauda (Ferrari) werd getoond in 'Rush', gefocust op hun kampioenschap strijd."
      }
    },
    {
      question: {
        en: "Which two drivers had an intense McLaren rivalry in the late 1980s?",
        es: "¿Qué dos pilotos tuvieron una intensa rivalidad en McLaren a finales de los 80?",
        de: "Welche zwei Fahrer hatten Ende der 1980er eine intensive McLaren-Rivalität?",
        nl: "Welke twee coureurs hadden een intense McLaren-rivaliteit in de late jaren 80?"
      },
      options: [
        "Nigel Mansell vs Nelson Piquet",
        "Ayrton Senna vs Alain Prost",
        "Gerhard Berger vs Michele Alboreto",
        "Keke Rosberg vs Jacques Laffite"
      ],
      correct: 1,
      explanation: {
        en: "Ayrton Senna and Alain Prost had one of F1's most famous rivalries at McLaren, with controversial collisions at Suzuka in 1989 and 1990.",
        es: "Ayrton Senna y Alain Prost tuvieron una de las rivalidades más famosas de F1 en McLaren, con colisiones controversiales en Suzuka en 1989 y 1990.",
        de: "Ayrton Senna und Alain Prost hatten eine der berühmtesten F1-Rivalitäten bei McLaren, mit kontroversen Kollisionen in Suzuka 1989 und 1990.",
        nl: "Ayrton Senna en Alain Prost hadden een van F1's meest beroemde rivaliteiten bij McLaren, met controversiële botsingen in Suzuka in 1989 en 1990."
      }
    },
    {
      question: {
        en: "Which rivalry dominated F1 in 2021, decided in the final race?",
        es: "¿Qué rivalidad dominó F1 en 2021, decidida en la última carrera?",
        de: "Welche Rivalität dominierte 2021 die F1 und wurde im letzten Rennen entschieden?",
        nl: "Welke rivaliteit domineerde F1 in 2021, beslist in de laatste race?"
      },
      options: [
        "Charles Leclerc vs Lando Norris",
        "Lewis Hamilton vs Max Verstappen",
        "Sebastian Vettel vs Daniel Ricciardo",
        "George Russell vs Pierre Gasly"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton and Max Verstappen battled throughout 2021, entering the final race tied on points. Verstappen won at Abu Dhabi.",
        es: "Lewis Hamilton y Max Verstappen lucharon en 2021, llegando a la final empatados. Verstappen ganó en Abu Dhabi.",
        de: "Lewis Hamilton und Max Verstappen kämpften 2021, gingen punktgleich ins Finale. Verstappen gewann in Abu Dhabi.",
        nl: "Lewis Hamilton en Max Verstappen vochten in 2021, kwamen gelijk aan bij de finale. Verstappen won in Abu Dhabi."
      }
    },
    {
      question: {
        en: "Which Ferrari teammates had team orders controversy in the early 2000s?",
        es: "¿Qué compañeros de Ferrari tuvieron controversia de órdenes de equipo a principios de los 2000?",
        de: "Welche Ferrari-Teamkollegen hatten Anfang der 2000er Teamorder-Kontroversen?",
        nl: "Welke Ferrari-teamgenoten hadden begin jaren 2000 teamorder-controverse?"
      },
      options: [
        "Michael Schumacher vs Rubens Barrichello",
        "Felipe Massa vs Kimi Räikkönen",
        "Jean Alesi vs Gerhard Berger",
        "Fernando Alonso vs Felipe Massa"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher and Rubens Barrichello were Ferrari teammates 2000-2006. Team orders favored Schumacher, notably at 2002 Austrian GP.",
        es: "Michael Schumacher y Rubens Barrichello fueron compañeros en Ferrari 2000-2006. Las órdenes favorecían a Schumacher, notablemente en Austria 2002.",
        de: "Michael Schumacher und Rubens Barrichello waren 2000-2006 Ferrari-Teamkollegen. Teamorders bevorzugten Schumacher, besonders in Österreich 2002.",
        nl: "Michael Schumacher en Rubens Barrichello waren Ferrari-teamgenoten 2000-2006. Teamorders bevoordelen Schumacher, vooral in Oostenrijk 2002."
      }
    },
    {
      question: {
        en: "Which late 1990s rivalry featured Michael Schumacher vs Mika Häkkinen?",
        es: "¿Qué rivalidad de finales de los 90 presentó a Michael Schumacher vs Mika Häkkinen?",
        de: "Welche Rivalität Ende der 1990er zeigte Michael Schumacher vs Mika Häkkinen?",
        nl: "Welke rivaliteit eind jaren 90 toonde Michael Schumacher vs Mika Häkkinen?"
      },
      options: [
        "1996-1997 championships",
        "1998-2000 championships",
        "1994-1995 championships",
        "2001-2002 championships"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher (Ferrari) and Mika Häkkinen (McLaren) battled for championships from 1998-2000, with Häkkinen winning 1998-99.",
        es: "Michael Schumacher (Ferrari) y Mika Häkkinen (McLaren) lucharon por campeonatos de 1998-2000, con Häkkinen ganando 1998-99.",
        de: "Michael Schumacher (Ferrari) und Mika Häkkinen (McLaren) kämpften 1998-2000 um Meisterschaften, Häkkinen gewann 1998-99.",
        nl: "Michael Schumacher (Ferrari) en Mika Häkkinen (McLaren) vochten van 1998-2000 om kampioenschappen, Häkkinen won 1998-99."
      }
    },
    {
      question: {
        en: "Who were the Red Bull teammates with a tense rivalry from 2010-2013?",
        es: "¿Quiénes fueron los compañeros de Red Bull con una tensa rivalidad de 2010-2013?",
        de: "Wer waren die Red Bull-Teamkollegen mit angespannter Rivalität von 2010-2013?",
        nl: "Wie waren de Red Bull-teamgenoten met een gespannen rivaliteit van 2010-2013?"
      },
      options: [
        "Sebastian Vettel vs Mark Webber",
        "Daniel Ricciardo vs Max Verstappen",
        "Sebastian Vettel vs Daniel Ricciardo",
        "Max Verstappen vs Sergio Perez"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel and Mark Webber were Red Bull teammates 2009-2013, with famous incidents like 'Multi 21' at Malaysia 2013.",
        es: "Sebastian Vettel y Mark Webber fueron compañeros en Red Bull 2009-2013, con incidentes famosos como 'Multi 21' en Malasia 2013.",
        de: "Sebastian Vettel und Mark Webber waren 2009-2013 Red Bull-Teamkollegen, mit berühmten Vorfällen wie 'Multi 21' in Malaysia 2013.",
        nl: "Sebastian Vettel en Mark Webber waren Red Bull-teamgenoten 2009-2013, met beroemde incidenten zoals 'Multi 21' in Maleisië 2013."
      }
    },
    {
      question: {
        en: "Which McLaren teammates had a controversial 2007 season?",
        es: "¿Qué compañeros de McLaren tuvieron una temporada 2007 controvertida?",
        de: "Welche McLaren-Teamkollegen hatten eine kontroverse Saison 2007?",
        nl: "Welke McLaren-teamgenoten hadden een controversieel 2007-seizoen?"
      },
      options: [
        "Lewis Hamilton vs Fernando Alonso",
        "Mika Häkkinen vs David Coulthard",
        "Kimi Räikkönen vs Juan Pablo Montoya",
        "Jenson Button vs Sergio Perez"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton and Fernando Alonso were McLaren teammates in 2007, with tensions including the 'spy gate' scandal and Hungary qualifying incident.",
        es: "Lewis Hamilton y Fernando Alonso fueron compañeros en McLaren en 2007, con tensiones incluyendo el escándalo 'spy gate' e incidente en Hungría.",
        de: "Lewis Hamilton und Fernando Alonso waren 2007 McLaren-Teamkollegen, mit Spannungen wie dem 'Spy Gate'-Skandal und Ungarn-Qualifying-Vorfall.",
        nl: "Lewis Hamilton en Fernando Alonso waren McLaren-teamgenoten in 2007, met spanningen waaronder het 'spy gate'-schandaal en Hongarije-kwalificatie incident."
      }
    },
    {
      question: {
        en: "Which Williams teammates had an intense rivalry in 1986?",
        es: "¿Qué compañeros de Williams tuvieron una intensa rivalidad en 1986?",
        de: "Welche Williams-Teamkollegen hatten 1986 eine intensive Rivalität?",
        nl: "Welke Williams-teamgenoten hadden een intense rivaliteit in 1986?"
      },
      options: [
        "Nigel Mansell vs Nelson Piquet",
        "Damon Hill vs Jacques Villeneuve",
        "Alain Prost vs Nigel Mansell",
        "Ayrton Senna vs Thierry Boutsen"
      ],
      correct: 0,
      explanation: {
        en: "Nigel Mansell and Nelson Piquet were Williams teammates in 1986-87, battling for the 1986 championship alongside Alain Prost.",
        es: "Nigel Mansell y Nelson Piquet fueron compañeros en Williams en 1986-87, luchando por el campeonato 1986 junto a Alain Prost.",
        de: "Nigel Mansell und Nelson Piquet waren 1986-87 Williams-Teamkollegen und kämpften um die Meisterschaft 1986 neben Alain Prost.",
        nl: "Nigel Mansell en Nelson Piquet waren Williams-teamgenoten in 1986-87, vechtend om het 1986-kampioenschap naast Alain Prost."
      }
    },
    {
      question: {
        en: "Which drivers had the famous 'Senna-Prost' crashes at Suzuka?",
        es: "¿Qué pilotos tuvieron los famosos choques 'Senna-Prost' en Suzuka?",
        de: "Welche Fahrer hatten die berühmten 'Senna-Prost'-Unfälle in Suzuka?",
        nl: "Welke coureurs hadden de beroemde 'Senna-Prost' crashes in Suzuka?"
      },
      options: [
        "Ayrton Senna and Alain Prost",
        "Michael Schumacher and Damon Hill",
        "Lewis Hamilton and Nico Rosberg",
        "Max Verstappen and Lewis Hamilton"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna and Alain Prost collided at Suzuka in both 1989 (chicane) and 1990 (first corner), deciding both championships.",
        es: "Ayrton Senna y Alain Prost chocaron en Suzuka en 1989 (chicana) y 1990 (primera curva), decidiendo ambos campeonatos.",
        de: "Ayrton Senna und Alain Prost kollidierten in Suzuka sowohl 1989 (Schikane) als auch 1990 (erste Kurve), beide Meisterschaften entscheidend.",
        nl: "Ayrton Senna en Alain Prost botsten in Suzuka in 1989 (chicane) en 1990 (eerste bocht), beide kampioenschappen beslissend."
      }
    },
    {
      question: {
        en: "Which Mercedes teammates had a rivalry from 2014-2016?",
        es: "¿Qué compañeros de Mercedes tuvieron una rivalidad de 2014-2016?",
        de: "Welche Mercedes-Teamkollegen hatten von 2014-2016 eine Rivalität?",
        nl: "Welke Mercedes-teamgenoten hadden een rivaliteit van 2014-2016?"
      },
      options: [
        "Lewis Hamilton vs Nico Rosberg",
        "Lewis Hamilton vs Valtteri Bottas",
        "Michael Schumacher vs Nico Rosberg",
        "George Russell vs Lewis Hamilton"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton and Nico Rosberg were Mercedes teammates 2013-2016, with their rivalry intensifying as they battled for titles, culminating in Rosberg's 2016 championship.",
        es: "Lewis Hamilton y Nico Rosberg fueron compañeros en Mercedes 2013-2016, intensificándose su rivalidad mientras luchaban por títulos, culminando en el campeonato 2016 de Rosberg.",
        de: "Lewis Hamilton und Nico Rosberg waren 2013-2016 Mercedes-Teamkollegen, ihre Rivalität intensivierte sich im Titelkampf, gipfelnd in Rosbergs 2016-Meisterschaft.",
        nl: "Lewis Hamilton en Nico Rosberg waren Mercedes-teamgenoten 2013-2016, hun rivaliteit intensifieerde terwijl ze om titels vochten, culminerend in Rosbergs 2016-kampioenschap."
      }
    },
    {
      question: {
        en: "Who had the infamous 'Adelaide 1994' collision?",
        es: "¿Quién tuvo la infame colisión de 'Adelaide 1994'?",
        de: "Wer hatte die berüchtigte 'Adelaide 1994'-Kollision?",
        nl: "Wie had de beruchte 'Adelaide 1994' botsing?"
      },
      options: [
        "Michael Schumacher vs Damon Hill",
        "Ayrton Senna vs Alain Prost",
        "Nigel Mansell vs Nelson Piquet",
        "Lewis Hamilton vs Felipe Massa"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher and Damon Hill collided at Adelaide 1994, deciding the championship in Schumacher's favor in controversial circumstances.",
        es: "Michael Schumacher y Damon Hill chocaron en Adelaide 1994, decidiendo el campeonato a favor de Schumacher en circunstancias controversiales.",
        de: "Michael Schumacher und Damon Hill kollidierten in Adelaide 1994, die Meisterschaft unter kontroversen Umständen zugunsten Schumachers entscheidend.",
        nl: "Michael Schumacher en Damon Hill botsten in Adelaide 1994, het kampioenschap beslissend in Schumachers voordeel onder controversiële omstandigheden."
      }
    },
    {
      question: {
        en: "Which Ferrari drivers battled intensely in 2007-2008?",
        es: "¿Qué pilotos de Ferrari lucharon intensamente en 2007-2008?",
        de: "Welche Ferrari-Fahrer kämpften 2007-2008 intensiv?",
        nl: "Welke Ferrari-coureurs vochten intens in 2007-2008?"
      },
      options: [
        "Kimi Räikkönen vs Felipe Massa",
        "Fernando Alonso vs Felipe Massa",
        "Michael Schumacher vs Eddie Irvine",
        "Sebastian Vettel vs Kimi Räikkönen"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen and Felipe Massa were Ferrari teammates 2007-2009, with Räikkönen winning 2007 and Massa narrowly losing 2008.",
        es: "Kimi Räikkönen y Felipe Massa fueron compañeros en Ferrari 2007-2009, Räikkönen ganó 2007 y Massa perdió por poco en 2008.",
        de: "Kimi Räikkönen und Felipe Massa waren 2007-2009 Ferrari-Teamkollegen, Räikkönen gewann 2007 und Massa verlor 2008 knapp.",
        nl: "Kimi Räikkönen en Felipe Massa waren Ferrari-teamgenoten 2007-2009, Räikkönen won 2007 en Massa verloor nipt in 2008."
      }
    },
    {
      question: {
        en: "Who were the famous Williams teammates in 1996-1997?",
        es: "¿Quiénes fueron los famosos compañeros de Williams en 1996-1997?",
        de: "Wer waren die berühmten Williams-Teamkollegen 1996-1997?",
        nl: "Wie waren de beroemde Williams-teamgenoten in 1996-1997?"
      },
      options: [
        "Damon Hill vs Jacques Villeneuve",
        "Nigel Mansell vs Riccardo Patrese",
        "Alain Prost vs Nigel Mansell",
        "David Coulthard vs Juan Pablo Montoya"
      ],
      correct: 0,
      explanation: {
        en: "Damon Hill and Jacques Villeneuve were Williams teammates, with Hill winning 1996 and Villeneuve winning 1997 championships.",
        es: "Damon Hill y Jacques Villeneuve fueron compañeros en Williams, Hill ganó 1996 y Villeneuve ganó los campeonatos 1997.",
        de: "Damon Hill und Jacques Villeneuve waren Williams-Teamkollegen, Hill gewann 1996 und Villeneuve gewann die 1997-Meisterschaft.",
        nl: "Damon Hill en Jacques Villeneuve waren Williams-teamgenoten, Hill won 1996 en Villeneuve won de 1997-kampioenschappen."
      }
    },
    {
      question: {
        en: "Which Red Bull teammates had the 'Multi 21' incident?",
        es: "¿Qué compañeros de Red Bull tuvieron el incidente 'Multi 21'?",
        de: "Welche Red Bull-Teamkollegen hatten den 'Multi 21'-Vorfall?",
        nl: "Welke Red Bull-teamgenoten hadden het 'Multi 21' incident?"
      },
      options: [
        "Sebastian Vettel vs Mark Webber",
        "Daniel Ricciardo vs Max Verstappen",
        "Max Verstappen vs Pierre Gasly",
        "Sebastian Vettel vs Daniel Ricciardo"
      ],
      correct: 0,
      explanation: {
        en: "At Malaysia 2013, Sebastian Vettel ignored 'Multi 21' team orders and overtook Mark Webber to win, causing major controversy.",
        es: "En Malasia 2013, Sebastian Vettel ignoró las órdenes 'Multi 21' y adelantó a Mark Webber para ganar, causando gran controversia.",
        de: "In Malaysia 2013 ignorierte Sebastian Vettel die 'Multi 21'-Teamorder und überholte Mark Webber zum Sieg, was große Kontroversen auslöste.",
        nl: "In Maleisië 2013 negeerde Sebastian Vettel de 'Multi 21' teamorders en haalde Mark Webber in om te winnen, wat grote controverse veroorzaakte."
      }
    },
    {
      question: {
        en: "Which 1970s rivals battled at McLaren and Ferrari?",
        es: "¿Qué rivales de los 70 lucharon en McLaren y Ferrari?",
        de: "Welche Rivalen der 1970er kämpften bei McLaren und Ferrari?",
        nl: "Welke rivalen van de jaren 70 vochten bij McLaren en Ferrari?"
      },
      options: [
        "James Hunt vs Niki Lauda",
        "Emerson Fittipaldi vs Clay Regazzoni",
        "Jody Scheckter vs Gilles Villeneuve",
        "Mario Andretti vs Ronnie Peterson"
      ],
      correct: 0,
      explanation: {
        en: "James Hunt (McLaren) and Niki Lauda (Ferrari) had an epic 1976 championship battle, with Lauda's fiery crash and Hunt's title win.",
        es: "James Hunt (McLaren) y Niki Lauda (Ferrari) tuvieron una épica batalla por el campeonato 1976, con el accidente de Lauda y la victoria de Hunt.",
        de: "James Hunt (McLaren) und Niki Lauda (Ferrari) hatten einen epischen Meisterschaftskampf 1976, mit Laudas feurigem Unfall und Hunts Titelgewinn.",
        nl: "James Hunt (McLaren) en Niki Lauda (Ferrari) hadden een epische 1976-kampioenschapsstrijd, met Lauda's vurige crash en Hunts titelwinst."
      }
    },
    {
      question: {
        en: "Who were the Benetton teammates with internal rivalry in 1994?",
        es: "¿Quiénes fueron los compañeros de Benetton con rivalidad interna en 1994?",
        de: "Wer waren die Benetton-Teamkollegen mit interner Rivalität 1994?",
        nl: "Wie waren de Benetton-teamgenoten met interne rivaliteit in 1994?"
      },
      options: [
        "Michael Schumacher vs Jos Verstappen",
        "Michael Schumacher vs Johnny Herbert",
        "Gerhard Berger vs Alessandro Nannini",
        "Nelson Piquet vs Roberto Moreno"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher and Jos Verstappen were Benetton teammates in 1994, with Schumacher dominating and winning his first championship.",
        es: "Michael Schumacher y Jos Verstappen fueron compañeros en Benetton en 1994, con Schumacher dominando y ganando su primer campeonato.",
        de: "Michael Schumacher und Jos Verstappen waren 1994 Benetton-Teamkollegen, Schumacher dominierte und gewann seine erste Meisterschaft.",
        nl: "Michael Schumacher en Jos Verstappen waren Benetton-teamgenoten in 1994, met Schumacher dominerend en zijn eerste kampioenschap winnend."
      }
    },
    {
      question: {
        en: "Which drivers had the 'Jerez 1997' collision?",
        es: "¿Qué pilotos tuvieron la colisión de 'Jerez 1997'?",
        de: "Welche Fahrer hatten die 'Jerez 1997'-Kollision?",
        nl: "Welke coureurs hadden de 'Jerez 1997' botsing?"
      },
      options: [
        "Michael Schumacher vs Jacques Villeneuve",
        "Damon Hill vs Michael Schumacher",
        "Mika Häkkinen vs David Coulthard",
        "Jacques Villeneuve vs Damon Hill"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher tried to take out Jacques Villeneuve at Jerez 1997 to win the championship, but failed and was disqualified from the season.",
        es: "Michael Schumacher intentó eliminar a Jacques Villeneuve en Jerez 1997 para ganar el campeonato, pero falló y fue descalificado de la temporada.",
        de: "Michael Schumacher versuchte Jacques Villeneuve in Jerez 1997 rauszunehmen um die Meisterschaft zu gewinnen, scheiterte aber und wurde von der Saison disqualifiziert.",
        nl: "Michael Schumacher probeerde Jacques Villeneuve uit te schakelen in Jerez 1997 om het kampioenschap te winnen, maar faalde en werd gediskwalificeerd van het seizoen."
      }
    },
    {
      question: {
        en: "Who were the McLaren teammates in 1998-1999?",
        es: "¿Quiénes fueron los compañeros de McLaren en 1998-1999?",
        de: "Wer waren die McLaren-Teamkollegen 1998-1999?",
        nl: "Wie waren de McLaren-teamgenoten in 1998-1999?"
      },
      options: [
        "Mika Häkkinen vs David Coulthard",
        "Ayrton Senna vs Gerhard Berger",
        "Kimi Räikkönen vs Juan Pablo Montoya",
        "Lewis Hamilton vs Heikki Kovalainen"
      ],
      correct: 0,
      explanation: {
        en: "Mika Häkkinen and David Coulthard were McLaren teammates 1996-2001, with Häkkinen winning championships in 1998 and 1999.",
        es: "Mika Häkkinen y David Coulthard fueron compañeros en McLaren 1996-2001, Häkkinen ganó campeonatos en 1998 y 1999.",
        de: "Mika Häkkinen und David Coulthard waren 1996-2001 McLaren-Teamkollegen, Häkkinen gewann Meisterschaften 1998 und 1999.",
        nl: "Mika Häkkinen en David Coulthard waren McLaren-teamgenoten 1996-2001, Häkkinen won kampioenschappen in 1998 en 1999."
      }
    },
    {
      question: {
        en: "Which teammates had the 'Crashgate' scandal in 2008?",
        es: "¿Qué compañeros tuvieron el escándalo 'Crashgate' en 2008?",
        de: "Welche Teamkollegen hatten den 'Crashgate'-Skandal 2008?",
        nl: "Welke teamgenoten hadden het 'Crashgate' schandaal in 2008?"
      },
      options: [
        "Fernando Alonso and Nelson Piquet Jr (Renault)",
        "Lewis Hamilton and Heikki Kovalainen (McLaren)",
        "Felipe Massa and Kimi Räikkönen (Ferrari)",
        "Robert Kubica and Nick Heidfeld (BMW)"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso and Nelson Piquet Jr were Renault teammates in 2008 when Piquet crashed deliberately at Singapore to help Alonso win.",
        es: "Fernando Alonso y Nelson Piquet Jr fueron compañeros en Renault en 2008 cuando Piquet se estrelló deliberadamente en Singapur para ayudar a Alonso a ganar.",
        de: "Fernando Alonso und Nelson Piquet Jr waren 2008 Renault-Teamkollegen, als Piquet absichtlich in Singapur crashte um Alonso zu helfen zu gewinnen.",
        nl: "Fernando Alonso en Nelson Piquet Jr waren Renault-teamgenoten in 2008 toen Piquet opzettelijk crashte in Singapore om Alonso te helpen winnen."
      }
    },
    {
      question: {
        en: "Who had the famous Monaco 2016 strategy dispute?",
        es: "¿Quién tuvo la famosa disputa de estrategia de Mónaco 2016?",
        de: "Wer hatte die berühmte Monaco 2016 Strategie-Auseinandersetzung?",
        nl: "Wie had het beroemde Monaco 2016 strategie-geschil?"
      },
      options: [
        "Lewis Hamilton vs Nico Rosberg",
        "Sebastian Vettel vs Kimi Räikkönen",
        "Daniel Ricciardo vs Max Verstappen",
        "Fernando Alonso vs Jenson Button"
      ],
      correct: 0,
      explanation: {
        en: "At Monaco 2016, Mercedes' strategy allowed Nico Rosberg to undercut Lewis Hamilton, leading to tension and Hamilton's poor race performance.",
        es: "En Mónaco 2016, la estrategia de Mercedes permitió a Nico Rosberg hacer un undercut a Lewis Hamilton, generando tensión y mal rendimiento de Hamilton.",
        de: "In Monaco 2016 ermöglichte Mercedes' Strategie Nico Rosberg Lewis Hamilton zu undercut, was zu Spannung und Hamiltons schlechter Rennleistung führte.",
        nl: "In Monaco 2016 stelde Mercedes' strategie Nico Rosberg in staat Lewis Hamilton te undercutten, leidend tot spanning en Hamiltons slechte raceprestatie."
      }
    },
    {
      question: {
        en: "Which 2010s Red Bull teammates had the 'Azerbaijan 2018' incident?",
        es: "¿Qué compañeros de Red Bull de los 2010 tuvieron el incidente de 'Azerbaiyán 2018'?",
        de: "Welche Red Bull-Teamkollegen der 2010er hatten den 'Aserbaidschan 2018'-Vorfall?",
        nl: "Welke Red Bull-teamgenoten van de jaren 2010 hadden het 'Azerbeidzjan 2018' incident?"
      },
      options: [
        "Daniel Ricciardo vs Max Verstappen",
        "Sebastian Vettel vs Mark Webber",
        "Max Verstappen vs Pierre Gasly",
        "Max Verstappen vs Alex Albon"
      ],
      correct: 0,
      explanation: {
        en: "Daniel Ricciardo and Max Verstappen collided at Azerbaijan 2018 while battling for position, taking both Red Bulls out of the race.",
        es: "Daniel Ricciardo y Max Verstappen chocaron en Azerbaiyán 2018 mientras luchaban por posición, eliminando ambos Red Bulls de la carrera.",
        de: "Daniel Ricciardo und Max Verstappen kollidierten in Aserbaidschan 2018 beim Positionskampf und nahmen beide Red Bulls aus dem Rennen.",
        nl: "Daniel Ricciardo en Max Verstappen botsten in Azerbeidzjan 2018 tijdens gevecht om positie, beide Red Bulls uit de race nemend."
      }
    },
    {
      question: {
        en: "Who had the intense Ferrari rivalry in 2015-2018?",
        es: "¿Quién tuvo la intensa rivalidad de Ferrari en 2015-2018?",
        de: "Wer hatte die intensive Ferrari-Rivalität 2015-2018?",
        nl: "Wie had de intense Ferrari-rivaliteit in 2015-2018?"
      },
      options: [
        "Sebastian Vettel vs Kimi Räikkönen",
        "Fernando Alonso vs Kimi Räikkönen",
        "Charles Leclerc vs Sebastian Vettel",
        "Felipe Massa vs Fernando Alonso"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel and Kimi Räikkönen were Ferrari teammates 2015-2018, with Vettel as clear number one but occasional tensions.",
        es: "Sebastian Vettel y Kimi Räikkönen fueron compañeros en Ferrari 2015-2018, con Vettel como claro número uno pero tensiones ocasionales.",
        de: "Sebastian Vettel und Kimi Räikkönen waren 2015-2018 Ferrari-Teamkollegen, mit Vettel als klare Nummer eins aber gelegentlichen Spannungen.",
        nl: "Sebastian Vettel en Kimi Räikkönen waren Ferrari-teamgenoten 2015-2018, met Vettel als duidelijke nummer één maar occasionele spanningen."
      }
    },
    {
      question: {
        en: "Which McLaren duo had the 'Spygate' scandal in 2007?",
        es: "¿Qué dúo de McLaren tuvo el escándalo 'Spygate' en 2007?",
        de: "Welches McLaren-Duo hatte den 'Spygate'-Skandal 2007?",
        nl: "Welk McLaren-duo had het 'Spygate' schandaal in 2007?"
      },
      options: [
        "Lewis Hamilton and Fernando Alonso",
        "Mika Häkkinen and David Coulthard",
        "Kimi Räikkönen and Juan Pablo Montoya",
        "Jenson Button and Sergio Perez"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton and Fernando Alonso were McLaren teammates during the 2007 'Spygate' scandal involving Ferrari technical documents.",
        es: "Lewis Hamilton y Fernando Alonso fueron compañeros en McLaren durante el escándalo 'Spygate' de 2007 que involucró documentos técnicos de Ferrari.",
        de: "Lewis Hamilton und Fernando Alonso waren McLaren-Teamkollegen während des 'Spygate'-Skandals 2007 mit Ferrari-Technischen Dokumenten.",
        nl: "Lewis Hamilton en Fernando Alonso waren McLaren-teamgenoten tijdens het 2007 'Spygate' schandaal met Ferrari technische documenten."
      }
    },
    {
      question: {
        en: "Who were the Williams teammates in the early 1990s?",
        es: "¿Quiénes fueron los compañeros de Williams a principios de los 90?",
        de: "Wer waren die Williams-Teamkollegen Anfang der 1990er?",
        nl: "Wie waren de Williams-teamgenoten begin jaren 90?"
      },
      options: [
        "Nigel Mansell and Riccardo Patrese",
        "Damon Hill and David Coulthard",
        "Alain Prost and Damon Hill",
        "Jacques Villeneuve and Heinz-Harald Frentzen"
      ],
      correct: 0,
      explanation: {
        en: "Nigel Mansell and Riccardo Patrese were Williams teammates 1991-1992, with Mansell dominating the 1992 championship.",
        es: "Nigel Mansell y Riccardo Patrese fueron compañeros en Williams 1991-1992, con Mansell dominando el campeonato 1992.",
        de: "Nigel Mansell und Riccardo Patrese waren 1991-1992 Williams-Teamkollegen, Mansell dominierte die 1992-Meisterschaft.",
        nl: "Nigel Mansell en Riccardo Patrese waren Williams-teamgenoten 1991-1992, met Mansell dominerend in het 1992-kampioenschap."
      }
    },
    {
      question: {
        en: "Which Ferrari drivers had the 'Brazil 2019' controversy?",
        es: "¿Qué pilotos de Ferrari tuvieron la controversia de 'Brasil 2019'?",
        de: "Welche Ferrari-Fahrer hatten die 'Brasilien 2019'-Kontroverse?",
        nl: "Welke Ferrari-coureurs hadden de 'Brazilië 2019' controverse?"
      },
      options: [
        "Sebastian Vettel vs Charles Leclerc",
        "Kimi Räikkönen vs Sebastian Vettel",
        "Felipe Massa vs Fernando Alonso",
        "Charles Leclerc vs Carlos Sainz"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel and Charles Leclerc collided at Brazil 2019 while battling for position, taking both Ferraris out of contention.",
        es: "Sebastian Vettel y Charles Leclerc chocaron en Brasil 2019 mientras luchaban por posición, eliminando ambos Ferraris de la contienda.",
        de: "Sebastian Vettel und Charles Leclerc kollidierten in Brasilien 2019 beim Positionskampf und nahmen beide Ferraris aus dem Rennen.",
        nl: "Sebastian Vettel en Charles Leclerc botsten in Brazilië 2019 tijdens gevecht om positie, beide Ferrari's uit de strijd nemend."
      }
    },
    {
      question: {
        en: "Who had the famous 'Silverstone 2021' collision?",
        es: "¿Quién tuvo la famosa colisión de 'Silverstone 2021'?",
        de: "Wer hatte die berühmte 'Silverstone 2021'-Kollision?",
        nl: "Wie had de beroemde 'Silverstone 2021' botsing?"
      },
      options: [
        "Lewis Hamilton vs Max Verstappen",
        "Valtteri Bottas vs Sergio Perez",
        "Charles Leclerc vs Lando Norris",
        "Sebastian Vettel vs Fernando Alonso"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton and Max Verstappen collided at Copse corner during the British GP 2021, sending Verstappen into the barriers at high speed.",
        es: "Lewis Hamilton y Max Verstappen chocaron en la curva Copse durante el GP británico 2021, enviando a Verstappen contra las barreras a alta velocidad.",
        de: "Lewis Hamilton und Max Verstappen kollidierten in der Copse-Kurve beim Britischen GP 2021, wodurch Verstappen mit hoher Geschwindigkeit in die Barrieren flog.",
        nl: "Lewis Hamilton en Max Verstappen botsten in Copse-bocht tijdens de Britse GP 2021, Verstappen met hoge snelheid in de barrières stuurend."
      }
    },
    {
      question: {
        en: "Which teammates had the 'Hungary 2007' qualifying incident?",
        es: "¿Qué compañeros tuvieron el incidente de clasificación de 'Hungría 2007'?",
        de: "Welche Teamkollegen hatten den 'Ungarn 2007' Qualifying-Vorfall?",
        nl: "Welke teamgenoten hadden het 'Hongarije 2007' kwalificatie-incident?"
      },
      options: [
        "Lewis Hamilton vs Fernando Alonso",
        "Kimi Räikkönen vs Felipe Massa",
        "Nico Rosberg vs Michael Schumacher",
        "Sebastian Vettel vs Mark Webber"
      ],
      correct: 0,
      explanation: {
        en: "At Hungary 2007 qualifying, Fernando Alonso held Lewis Hamilton in the pits to prevent him from completing a final lap, resulting in Alonso's penalty.",
        es: "En la clasificación de Hungría 2007, Fernando Alonso retuvo a Lewis Hamilton en boxes para evitar que completara una vuelta final, resultando en penalización para Alonso.",
        de: "Beim Qualifying in Ungarn 2007 hielt Fernando Alonso Lewis Hamilton in den Boxen, um zu verhindern, dass er eine letzte Runde absolviert, was zu Alonsos Strafe führte.",
        nl: "In Hongarije 2007-kwalificatie hield Fernando Alonso Lewis Hamilton in de pits om te voorkomen dat hij een laatste ronde voltooide, resulterend in Alonso's straf."
      }
    },
    {
      question: {
        en: "Who were the Lotus teammates with occasional tension in 2012-2013?",
        es: "¿Quiénes fueron los compañeros de Lotus con tensión ocasional en 2012-2013?",
        de: "Wer waren die Lotus-Teamkollegen mit gelegentlicher Spannung 2012-2013?",
        nl: "Wie waren de Lotus-teamgenoten met occasionele spanning in 2012-2013?"
      },
      options: [
        "Kimi Räikkönen vs Romain Grosjean",
        "Jarno Trulli vs Heikki Kovalainen",
        "Pastor Maldonado vs Romain Grosjean",
        "Nick Heidfeld vs Vitaly Petrov"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen and Romain Grosjean were Lotus teammates 2012-2013, with Räikkönen winning races and Grosjean showing speed but more incidents.",
        es: "Kimi Räikkönen y Romain Grosjean fueron compañeros en Lotus 2012-2013, Räikkönen ganó carreras y Grosjean mostró velocidad pero más incidentes.",
        de: "Kimi Räikkönen und Romain Grosjean waren 2012-2013 Lotus-Teamkollegen, Räikkönen gewann Rennen und Grosjean zeigte Geschwindigkeit aber mehr Vorfälle.",
        nl: "Kimi Räikkönen en Romain Grosjean waren Lotus-teamgenoten 2012-2013, Räikkönen won races en Grosjean toonde snelheid maar meer incidenten."
      }
    },
    {
      question: {
        en: "Which Mercedes drivers had the 'Barcelona 2016' crash?",
        es: "¿Qué pilotos de Mercedes tuvieron el choque de 'Barcelona 2016'?",
        de: "Welche Mercedes-Fahrer hatten den 'Barcelona 2016'-Unfall?",
        nl: "Welke Mercedes-coureurs hadden de 'Barcelona 2016' crash?"
      },
      options: [
        "Lewis Hamilton vs Nico Rosberg",
        "Lewis Hamilton vs Valtteri Bottas",
        "Nico Rosberg vs Michael Schumacher",
        "George Russell vs Lewis Hamilton"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton and Nico Rosberg crashed on the first lap at Barcelona 2016, eliminating both Mercedes from the race.",
        es: "Lewis Hamilton y Nico Rosberg chocaron en la primera vuelta en Barcelona 2016, eliminando ambos Mercedes de la carrera.",
        de: "Lewis Hamilton und Nico Rosberg crashten in der ersten Runde in Barcelona 2016, beide Mercedes aus dem Rennen nehmend.",
        nl: "Lewis Hamilton en Nico Rosberg crashten in de eerste ronde in Barcelona 2016, beide Mercedes uit de race nemend."
      }
    },
    {
      question: {
        en: "Who were the Force India teammates with close battles in 2014-2016?",
        es: "¿Quiénes fueron los compañeros de Force India con batallas cercanas en 2014-2016?",
        de: "Wer waren die Force India-Teamkollegen mit engen Kämpfen 2014-2016?",
        nl: "Wie waren de Force India-teamgenoten met nauwe gevechten in 2014-2016?"
      },
      options: [
        "Sergio Perez vs Nico Hulkenberg",
        "Adrian Sutil vs Paul di Resta",
        "Giancarlo Fisichella vs Adrian Sutil",
        "Esteban Ocon vs Sergio Perez"
      ],
      correct: 0,
      explanation: {
        en: "Sergio Perez and Nico Hulkenberg were Force India teammates 2014-2016 (and 2017-2018), with many close battles and occasional contact.",
        es: "Sergio Perez y Nico Hulkenberg fueron compañeros en Force India 2014-2016 (y 2017-2018), con muchas batallas cercanas y contacto ocasional.",
        de: "Sergio Perez und Nico Hulkenberg waren 2014-2016 (und 2017-2018) Force India-Teamkollegen, mit vielen engen Kämpfen und gelegentlichem Kontakt.",
        nl: "Sergio Perez en Nico Hulkenberg waren Force India-teamgenoten 2014-2016 (en 2017-2018), met vele nauwe gevechten en occasioneel contact."
      }
    },
    {
      question: {
        en: "Which Williams teammates had the 'Maldonado era' rivalry?",
        es: "¿Qué compañeros de Williams tuvieron la rivalidad de la 'era Maldonado'?",
        de: "Welche Williams-Teamkollegen hatten die 'Maldonado-Ära'-Rivalität?",
        nl: "Welke Williams-teamgenoten hadden de 'Maldonado-tijdperk' rivaliteit?"
      },
      options: [
        "Pastor Maldonado vs Bruno Senna/Valtteri Bottas",
        "Nico Rosberg vs Kazuki Nakajima",
        "Felipe Massa vs Valtteri Bottas",
        "Alexander Wurz vs Nico Rosberg"
      ],
      correct: 0,
      explanation: {
        en: "Pastor Maldonado was paired with Bruno Senna (2012) and Valtteri Bottas (2013) at Williams, with notable incidents and tensions.",
        es: "Pastor Maldonado fue emparejado con Bruno Senna (2012) y Valtteri Bottas (2013) en Williams, con incidentes y tensiones notables.",
        de: "Pastor Maldonado war mit Bruno Senna (2012) und Valtteri Bottas (2013) bei Williams gepaart, mit bemerkenswerten Vorfällen und Spannungen.",
        nl: "Pastor Maldonado werd gekoppeld aan Bruno Senna (2012) en Valtteri Bottas (2013) bij Williams, met opvallende incidenten en spanningen."
      }
    },
    {
      question: {
        en: "Who had the Renault rivalry in 2017-2018?",
        es: "¿Quién tuvo la rivalidad de Renault en 2017-2018?",
        de: "Wer hatte die Renault-Rivalität 2017-2018?",
        nl: "Wie had de Renault-rivaliteit in 2017-2018?"
      },
      options: [
        "Nico Hulkenberg vs Carlos Sainz/Jolyon Palmer",
        "Fernando Alonso vs Giancarlo Fisichella",
        "Jarno Trulli vs Heikki Kovalainen",
        "Robert Kubica vs Vitaly Petrov"
      ],
      correct: 0,
      explanation: {
        en: "Nico Hulkenberg was paired with Jolyon Palmer (2017 first half) and Carlos Sainz (2017 second half-2018) at Renault, dominating Palmer but closer battles with Sainz.",
        es: "Nico Hulkenberg fue emparejado con Jolyon Palmer (primera mitad 2017) y Carlos Sainz (segunda mitad 2017-2018) en Renault, dominando a Palmer pero batallas más cercanas con Sainz.",
        de: "Nico Hulkenberg war mit Jolyon Palmer (2017 erste Hälfte) und Carlos Sainz (2017 zweite Hälfte-2018) bei Renault gepaart, Palmer dominierend aber engere Kämpfe mit Sainz.",
        nl: "Nico Hulkenberg werd gekoppeld aan Jolyon Palmer (2017 eerste helft) en Carlos Sainz (2017 tweede helft-2018) bij Renault, Palmer dominerend maar nauwere gevechten met Sainz."
      }
    },
    {
      question: {
        en: "Which Alpha Tauri/Toro Rosso pairing had the 'Belgium 2019' incident?",
        es: "¿Qué pareja de Alpha Tauri/Toro Rosso tuvo el incidente de 'Bélgica 2019'?",
        de: "Welches Alpha Tauri/Toro Rosso-Paar hatte den 'Belgien 2019'-Vorfall?",
        nl: "Welke Alpha Tauri/Toro Rosso-koppeling had het 'België 2019' incident?"
      },
      options: [
        "Daniil Kvyat vs Alexander Albon",
        "Pierre Gasly vs Brendon Hartley",
        "Max Verstappen vs Carlos Sainz",
        "Jean-Eric Vergne vs Daniel Ricciardo"
      ],
      correct: 0,
      explanation: {
        en: "Daniil Kvyat and Alexander Albon were Toro Rosso teammates in early 2019 before Albon's Red Bull promotion mid-season.",
        es: "Daniil Kvyat y Alexander Albon fueron compañeros en Toro Rosso a principios de 2019 antes de la promoción de Albon a Red Bull a mitad de temporada.",
        de: "Daniil Kvyat und Alexander Albon waren Anfang 2019 Toro Rosso-Teamkollegen vor Albons Red Bull-Beförderung zur Saisonmitte.",
        nl: "Daniil Kvyat en Alexander Albon waren Toro Rosso-teamgenoten begin 2019 voor Albon's Red Bull-promotie halverwege het seizoen."
      }
    },
    {
      question: {
        en: "Who were the McLaren teammates during the 'Honda era' struggles?",
        es: "¿Quiénes fueron los compañeros de McLaren durante las luchas de la 'era Honda'?",
        de: "Wer waren die McLaren-Teamkollegen während der 'Honda-Ära'-Schwierigkeiten?",
        nl: "Wie waren de McLaren-teamgenoten tijdens de 'Honda-tijdperk' worstelingen?"
      },
      options: [
        "Fernando Alonso vs Jenson Button/Stoffel Vandoorne",
        "Lewis Hamilton vs Heikki Kovalainen",
        "Kimi Räikkönen vs David Coulthard",
        "Kevin Magnussen vs Jenson Button"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso was paired with Jenson Button (2015-2016) and Stoffel Vandoorne (2017-2018) during McLaren's troubled Honda partnership.",
        es: "Fernando Alonso fue emparejado con Jenson Button (2015-2016) y Stoffel Vandoorne (2017-2018) durante la problemática asociación Honda de McLaren.",
        de: "Fernando Alonso war mit Jenson Button (2015-2016) und Stoffel Vandoorne (2017-2018) während McLarens problematischer Honda-Partnerschaft gepaart.",
        nl: "Fernando Alonso werd gekoppeld aan Jenson Button (2015-2016) en Stoffel Vandoorne (2017-2018) tijdens McLaren's problematische Honda-partnerschap."
      }
    },
    {
      question: {
        en: "Which Haas teammates had the 'Austria 2018' incident?",
        es: "¿Qué compañeros de Haas tuvieron el incidente de 'Austria 2018'?",
        de: "Welche Haas-Teamkollegen hatten den 'Österreich 2018'-Vorfall?",
        nl: "Welke Haas-teamgenoten hadden het 'Oostenrijk 2018' incident?"
      },
      options: [
        "Romain Grosjean vs Kevin Magnussen",
        "Nico Hulkenberg vs Sergio Perez",
        "Esteban Gutierrez vs Romain Grosjean",
        "Mick Schumacher vs Nikita Mazepin"
      ],
      correct: 0,
      explanation: {
        en: "Romain Grosjean and Kevin Magnussen collided at Austria 2018, highlighting their occasionally fractious Haas partnership from 2017-2020.",
        es: "Romain Grosjean y Kevin Magnussen chocaron en Austria 2018, destacando su ocasionalmente fracturada asociación en Haas de 2017-2020.",
        de: "Romain Grosjean und Kevin Magnussen kollidierten in Österreich 2018, was ihre gelegentlich angespannte Haas-Partnerschaft von 2017-2020 hervorhob.",
        nl: "Romain Grosjean en Kevin Magnussen botsten in Oostenrijk 2018, hun occasioneel brokkelige Haas-partnerschap van 2017-2020 benadrukkend."
      }
    },
    {
      question: {
        en: "Who were the Racing Point/Force India teammates in 2019-2020?",
        es: "¿Quiénes fueron los compañeros de Racing Point/Force India en 2019-2020?",
        de: "Wer waren die Racing Point/Force India-Teamkollegen 2019-2020?",
        nl: "Wie waren de Racing Point/Force India-teamgenoten in 2019-2020?"
      },
      options: [
        "Sergio Perez vs Lance Stroll",
        "Nico Hulkenberg vs Sergio Perez",
        "Esteban Ocon vs Sergio Perez",
        "Sebastian Vettel vs Lance Stroll"
      ],
      correct: 0,
      explanation: {
        en: "Sergio Perez and Lance Stroll were Racing Point teammates 2019-2020, with Perez generally outperforming before losing his seat for 2021.",
        es: "Sergio Perez y Lance Stroll fueron compañeros en Racing Point 2019-2020, con Perez generalmente superando antes de perder su asiento para 2021.",
        de: "Sergio Perez und Lance Stroll waren 2019-2020 Racing Point-Teamkollegen, Perez übertraf generell bevor er seinen Platz für 2021 verlor.",
        nl: "Sergio Perez en Lance Stroll waren Racing Point-teamgenoten 2019-2020, met Perez over het algemeen beter presterend voor hij zijn zitje verloor voor 2021."
      }
    },
    {
      question: {
        en: "Which Alpine teammates had tension in 2021-2022?",
        es: "¿Qué compañeros de Alpine tuvieron tensión en 2021-2022?",
        de: "Welche Alpine-Teamkollegen hatten 2021-2022 Spannungen?",
        nl: "Welke Alpine-teamgenoten hadden spanning in 2021-2022?"
      },
      options: [
        "Fernando Alonso vs Esteban Ocon",
        "Pierre Gasly vs Esteban Ocon",
        "Carlos Sainz vs Lando Norris",
        "Daniel Ricciardo vs Lando Norris"
      ],
      correct: 0,
      explanation: {
        en: "Fernando Alonso and Esteban Ocon were Alpine teammates 2021-2022, with occasional tension as Ocon sometimes matched or beat the veteran Alonso.",
        es: "Fernando Alonso y Esteban Ocon fueron compañeros en Alpine 2021-2022, con tensión ocasional ya que Ocon a veces igualaba o superaba al veterano Alonso.",
        de: "Fernando Alonso und Esteban Ocon waren 2021-2022 Alpine-Teamkollegen, mit gelegentlicher Spannung da Ocon manchmal den Veteranen Alonso erreichte oder schlug.",
        nl: "Fernando Alonso en Esteban Ocon waren Alpine-teamgenoten 2021-2022, met occasionele spanning omdat Ocon soms de veteraan Alonso evenaarde of versloeg."
      }
    },
    {
      question: {
        en: "Who had the 'Monza 2019' collision between teammates?",
        es: "¿Quién tuvo la colisión de 'Monza 2019' entre compañeros de equipo?",
        de: "Wer hatte die 'Monza 2019'-Kollision zwischen Teamkollegen?",
        nl: "Wie had de 'Monza 2019' botsing tussen teamgenoten?"
      },
      options: [
        "Sebastian Vettel vs Charles Leclerc (Ferrari)",
        "Lewis Hamilton vs Valtteri Bottas (Mercedes)",
        "Daniel Ricciardo vs Nico Hulkenberg (Renault)",
        "Max Verstappen vs Alex Albon (Red Bull)"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel and Charles Leclerc collided at Monza 2019, damaging both Ferraris and highlighting their intense intra-team rivalry.",
        es: "Sebastian Vettel y Charles Leclerc chocaron en Monza 2019, dañando ambos Ferraris y destacando su intensa rivalidad interna.",
        de: "Sebastian Vettel und Charles Leclerc kollidierten in Monza 2019, beide Ferraris beschädigend und ihre intensive interne Rivalität hervorhebend.",
        nl: "Sebastian Vettel en Charles Leclerc botsten in Monza 2019, beide Ferrari's beschadigend en hun intense interne rivaliteit benadrukkend."
      }
    },
    {
      question: {
        en: "Which Sauber/Alfa Romeo teammates had close battles in 2019?",
        es: "¿Qué compañeros de Sauber/Alfa Romeo tuvieron batallas cercanas en 2019?",
        de: "Welche Sauber/Alfa Romeo-Teamkollegen hatten 2019 enge Kämpfe?",
        nl: "Welke Sauber/Alfa Romeo-teamgenoten hadden nauwe gevechten in 2019?"
      },
      options: [
        "Kimi Räikkönen vs Antonio Giovinazzi",
        "Marcus Ericsson vs Charles Leclerc",
        "Felipe Nasr vs Marcus Ericsson",
        "Robert Kubica vs Kimi Räikkönen"
      ],
      correct: 0,
      explanation: {
        en: "Kimi Räikkönen and Antonio Giovinazzi were Alfa Romeo teammates 2019-2021, with the veteran Räikkönen generally having the upper hand.",
        es: "Kimi Räikkönen y Antonio Giovinazzi fueron compañeros en Alfa Romeo 2019-2021, con el veterano Räikkönen generalmente teniendo la ventaja.",
        de: "Kimi Räikkönen und Antonio Giovinazzi waren 2019-2021 Alfa Romeo-Teamkollegen, wobei der Veteran Räikkönen generell die Oberhand hatte.",
        nl: "Kimi Räikkönen en Antonio Giovinazzi waren Alfa Romeo-teamgenoten 2019-2021, met de veteraan Räikkönen over het algemeen de boventoon voerend."
      }
    },
    {
      question: {
        en: "Who were the Aston Martin teammates with close performance in 2021?",
        es: "¿Quiénes fueron los compañeros de Aston Martin con rendimiento cercano en 2021?",
        de: "Wer waren die Aston Martin-Teamkollegen mit enger Leistung 2021?",
        nl: "Wie waren de Aston Martin-teamgenoten met nauwe prestatie in 2021?"
      },
      options: [
        "Sebastian Vettel vs Lance Stroll",
        "Fernando Alonso vs Lance Stroll",
        "Lewis Hamilton vs Lance Stroll",
        "Sergio Perez vs Nico Hulkenberg"
      ],
      correct: 0,
      explanation: {
        en: "Sebastian Vettel and Lance Stroll were Aston Martin teammates from 2021, with Vettel struggling early but improving throughout the season.",
        es: "Sebastian Vettel y Lance Stroll fueron compañeros en Aston Martin desde 2021, con Vettel luchando al principio pero mejorando durante la temporada.",
        de: "Sebastian Vettel und Lance Stroll waren ab 2021 Aston Martin-Teamkollegen, Vettel kämpfte früh aber verbesserte sich im Laufe der Saison.",
        nl: "Sebastian Vettel en Lance Stroll waren Aston Martin-teamgenoten vanaf 2021, met Vettel aanvankelijk worstelend maar verbeterend gedurende het seizoen."
      }
    },
    {
      question: {
        en: "Which Haas rookies had a difficult partnership in 2021?",
        es: "¿Qué novatos de Haas tuvieron una asociación difícil en 2021?",
        de: "Welche Haas-Rookies hatten 2021 eine schwierige Partnerschaft?",
        nl: "Welke Haas-nieuwelingen hadden een moeilijk partnerschap in 2021?"
      },
      options: [
        "Mick Schumacher vs Nikita Mazepin",
        "Romain Grosjean vs Kevin Magnussen",
        "Pietro Fittipaldi vs Kevin Magnussen",
        "Nico Hulkenberg vs Kevin Magnussen"
      ],
      correct: 0,
      explanation: {
        en: "Mick Schumacher and Nikita Mazepin were Haas teammates in 2021, both rookies with Schumacher clearly outperforming and occasional tensions.",
        es: "Mick Schumacher y Nikita Mazepin fueron compañeros en Haas en 2021, ambos novatos con Schumacher claramente superando y tensiones ocasionales.",
        de: "Mick Schumacher und Nikita Mazepin waren 2021 Haas-Teamkollegen, beide Rookies wobei Schumacher klar übertraf und gelegentliche Spannungen.",
        nl: "Mick Schumacher en Nikita Mazepin waren Haas-teamgenoten in 2021, beide nieuwelingen met Schumacher duidelijk beter presterend en occasionele spanningen."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();
