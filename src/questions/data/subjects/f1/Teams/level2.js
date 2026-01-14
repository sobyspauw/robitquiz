// Teams Quiz - Level 2
(function() {
  const level2 = {
    name: {
      en: "Teams Level 2",
      es: "Teams Nivel 2",
      de: "Teams Stufe 2",
      nl: "Teams Level 2"
    },
    questions: [
      {
        question: {
          en: "How many Constructors' Championships has Ferrari won in their F1 history?",
          es: "Cuantos Campeonatos de Constructores ha ganado Ferrari en su historia de F1?",
          de: "Wie viele Konstrukteurs-Meisterschaften hat Ferrari in ihrer F1-Geschichte gewonnen?",
          nl: "Hoeveel Constructeurskampioenschappen heeft Ferrari gewonnen in hun F1 geschiedenis?"
        },
        options: ["12", "14", "16", "18"],
        correct: 2,
        explanation: {
          en: "Ferrari has won 16 Constructors' Championships (1961, 1964, 1975, 1976, 1977, 1979, 1982, 1983, 1999, 2000, 2001, 2002, 2003, 2004, 2007, 2008), the most of any team in F1 history.",
          es: "Ferrari ha ganado 16 Campeonatos de Constructores (1961, 1964, 1975, 1976, 1977, 1979, 1982, 1983, 1999, 2000, 2001, 2002, 2003, 2004, 2007, 2008), la mayor cantidad de cualquier equipo en la historia de F1.",
          de: "Ferrari hat 16 Konstrukteurs-Meisterschaften gewonnen (1961, 1964, 1975, 1976, 1977, 1979, 1982, 1983, 1999, 2000, 2001, 2002, 2003, 2004, 2007, 2008), die meisten aller Teams in der F1-Geschichte.",
          nl: "Ferrari heeft 16 Constructeurskampioenschappen gewonnen (1961, 1964, 1975, 1976, 1977, 1979, 1982, 1983, 1999, 2000, 2001, 2002, 2003, 2004, 2007, 2008), de meeste van alle teams in F1 geschiedenis."
        }
      },
      {
        question: {
          en: "In which year did Red Bull Racing win their first Constructors' Championship?",
          es: "En que ano Red Bull Racing gano su primer Campeonato de Constructores?",
          de: "In welchem Jahr gewann Red Bull Racing ihre erste Konstrukteurs-Meisterschaft?",
          nl: "In welk jaar won Red Bull Racing hun eerste Constructeurskampioenschap?"
        },
        options: ["2009", "2010", "2011", "2012"],
        correct: 1,
        explanation: {
          en: "Red Bull Racing won their first Constructors' Championship in 2010 with Sebastian Vettel and Mark Webber. They then dominated 2011-2013, winning four consecutive titles.",
          es: "Red Bull Racing gano su primer Campeonato de Constructores en 2010 con Sebastian Vettel y Mark Webber. Luego dominaron 2011-2013, ganando cuatro titulos consecutivos.",
          de: "Red Bull Racing gewann 2010 ihre erste Konstrukteurs-Meisterschaft mit Sebastian Vettel und Mark Webber. Sie dominierten dann 2011-2013 und gewannen vier aufeinanderfolgende Titel.",
          nl: "Red Bull Racing won hun eerste Constructeurskampioenschap in 2010 met Sebastian Vettel en Mark Webber. Ze domineerden toen 2011-2013 en wonnen vier opeenvolgende titels."
        }
      },
      {
        question: {
          en: "Which team did Mercedes buy in 2010 to create their works F1 team?",
          es: "Que equipo compro Mercedes en 2010 para crear su equipo de fabrica de F1?",
          de: "Welches Team kaufte Mercedes 2010, um ihr Werksteam zu schaffen?",
          nl: "Welk team kocht Mercedes in 2010 om hun werksteam te creëren?"
        },
        options: ["McLaren", "Brawn GP", "Force India", "BAR Honda"],
        correct: 1,
        explanation: {
          en: "Mercedes purchased Brawn GP after their championship-winning 2009 season. Brawn GP had been formed from Honda Racing when Honda withdrew from F1. Mercedes turned it into the dominant force of the hybrid era.",
          es: "Mercedes compro Brawn GP despues de su temporada ganadora del campeonato 2009. Brawn GP se habia formado de Honda Racing cuando Honda se retiro de F1. Mercedes lo convirtio en la fuerza dominante de la era hibrida.",
          de: "Mercedes kaufte Brawn GP nach ihrer Meisterschaftssaison 2009. Brawn GP war aus Honda Racing entstanden, als Honda sich aus der F1 zurueckzog. Mercedes machte daraus die dominierende Kraft der Hybrid-Aera.",
          nl: "Mercedes kocht Brawn GP na hun kampioenschapswinst in het 2009 seizoen. Brawn GP was gevormd uit Honda Racing toen Honda zich terugtrok uit F1. Mercedes maakte het tot de dominante kracht van het hybride tijdperk."
        }
      },
      {
        question: {
          en: "Which team principal has led Mercedes F1 since 2013?",
          es: "Que director de equipo ha liderado Mercedes F1 desde 2013?",
          de: "Welcher Teamchef leitet Mercedes F1 seit 2013?",
          nl: "Welke teambaas heeft Mercedes F1 geleid sinds 2013?"
        },
        options: ["Ross Brawn", "Toto Wolff", "Niki Lauda", "Norbert Haug"],
        correct: 1,
        explanation: {
          en: "Toto Wolff became Team Principal and CEO of Mercedes-AMG Petronas F1 Team in 2013. Under his leadership, Mercedes won 8 consecutive Constructors' Championships (2014-2021) and 7 Drivers' Championships.",
          es: "Toto Wolff se convirtio en Director de Equipo y CEO del Mercedes-AMG Petronas F1 Team en 2013. Bajo su liderazgo, Mercedes gano 8 Campeonatos de Constructores consecutivos (2014-2021) y 7 Campeonatos de Pilotos.",
          de: "Toto Wolff wurde 2013 Teamchef und CEO von Mercedes-AMG Petronas F1 Team. Unter seiner Fuehrung gewann Mercedes 8 aufeinanderfolgende Konstrukteurs-Meisterschaften (2014-2021) und 7 Fahrer-Meisterschaften.",
          nl: "Toto Wolff werd in 2013 Teambaas en CEO van Mercedes-AMG Petronas F1 Team. Onder zijn leiding won Mercedes 8 opeenvolgende Constructeurskampioenschappen (2014-2021) en 7 Rijderskampioenschappen."
        }
      },
      {
        question: {
          en: "What was McLaren's most successful era in terms of Constructors' Championships?",
          es: "Cual fue la era mas exitosa de McLaren en terminos de Campeonatos de Constructores?",
          de: "Was war McLarens erfolgreichste Aera in Bezug auf Konstrukteurs-Meisterschaften?",
          nl: "Wat was McLaren's meest succesvolle tijdperk in termen van Constructeurskampioenschappen?"
        },
        options: ["1970s with Emerson Fittipaldi", "1980s-90s with Prost, Senna, Hakkinen", "2000s with Raikkonen and Hamilton", "2010s with Button and Alonso"],
        correct: 1,
        explanation: {
          en: "McLaren's golden era was the late 1980s and 1990s, winning Constructors' Championships in 1984, 1985, 1988, 1989, 1990, 1991, 1998. This period featured drivers like Alain Prost, Ayrton Senna, and Mika Hakkinen.",
          es: "La era dorada de McLaren fue finales de los 80 y los 90, ganando Campeonatos de Constructores en 1984, 1985, 1988, 1989, 1990, 1991, 1998. Este periodo presento pilotos como Alain Prost, Ayrton Senna y Mika Hakkinen.",
          de: "McLarens goldene Aera waren die spaten 1980er und 1990er Jahre, mit Konstrukteurs-Meisterschaften 1984, 1985, 1988, 1989, 1990, 1991, 1998. Diese Zeit brachte Fahrer wie Alain Prost, Ayrton Senna und Mika Hakkinen.",
          nl: "McLaren's gouden tijdperk was eind jaren 80 en jaren 90, met Constructeurskampioenschappen in 1984, 1985, 1988, 1989, 1990, 1991, 1998. Deze periode bevatte coureurs als Alain Prost, Ayrton Senna en Mika Hakkinen."
        }
      },
      {
        question: {
          en: "Which team was founded by Ken Tyrrell and won 3 Drivers' Championships with Jackie Stewart?",
          es: "Que equipo fue fundado por Ken Tyrrell y gano 3 Campeonatos de Pilotos con Jackie Stewart?",
          de: "Welches Team wurde von Ken Tyrrell gegruendet und gewann 3 Fahrer-Meisterschaften mit Jackie Stewart?",
          nl: "Welk team werd opgericht door Ken Tyrrell en won 3 Rijderskampioenschappen met Jackie Stewart?"
        },
        options: ["Tyrrell Racing", "Stewart Grand Prix", "Lotus", "March"],
        correct: 0,
        explanation: {
          en: "Tyrrell Racing Organization was founded by Ken Tyrrell in 1970. Jackie Stewart won three World Championships with Tyrrell (1971, 1973). The team later became BAR, then Honda, then Brawn GP, and finally Mercedes.",
          es: "Tyrrell Racing Organization fue fundada por Ken Tyrrell en 1970. Jackie Stewart gano tres Campeonatos Mundiales con Tyrrell (1971, 1973). El equipo luego se convirtio en BAR, luego Honda, luego Brawn GP y finalmente Mercedes.",
          de: "Tyrrell Racing Organization wurde 1970 von Ken Tyrrell gegruendet. Jackie Stewart gewann drei Weltmeisterschaften mit Tyrrell (1971, 1973). Das Team wurde spaeter BAR, dann Honda, dann Brawn GP und schliesslich Mercedes.",
          nl: "Tyrrell Racing Organization werd opgericht door Ken Tyrrell in 1970. Jackie Stewart won drie Wereldkampioenschappen met Tyrrell (1971, 1973). Het team werd later BAR, toen Honda, toen Brawn GP en uiteindelijk Mercedes."
        }
      },
      {
        question: {
          en: "Which team designed the revolutionary ground effect Lotus 79 in 1978?",
          es: "Que equipo diseno el revolucionario Lotus 79 con efecto suelo en 1978?",
          de: "Welches Team entwarf den revolutionaeren Ground-Effect Lotus 79 1978?",
          nl: "Welk team ontwierp de revolutionaire ground effect Lotus 79 in 1978?"
        },
        options: ["Team Lotus", "Brabham", "Williams", "McLaren"],
        correct: 0,
        explanation: {
          en: "Team Lotus, led by Colin Chapman, designed the Lotus 79 which perfected ground effect aerodynamics. Mario Andretti won the 1978 championship with this car, which revolutionized F1 car design.",
          es: "Team Lotus, liderado por Colin Chapman, diseno el Lotus 79 que perfecciono la aerodinamica de efecto suelo. Mario Andretti gano el campeonato 1978 con este auto, que revoluciono el diseno de autos F1.",
          de: "Team Lotus unter Colin Chapman entwarf den Lotus 79, der die Ground-Effect-Aerodynamik perfektionierte. Mario Andretti gewann 1978 die Meisterschaft mit diesem Auto, das das F1-Autodesign revolutionierte.",
          nl: "Team Lotus, geleid door Colin Chapman, ontwierp de Lotus 79 die ground effect aerodynamica perfectioneerde. Mario Andretti won het 1978 kampioenschap met deze auto, die F1 autodesign revolutioneerde."
        }
      },
      {
        question: {
          en: "How many Constructors' Championships did Williams win during their dominant 1990s era?",
          es: "Cuantos Campeonatos de Constructores gano Williams durante su era dominante de los 90?",
          de: "Wie viele Konstrukteurs-Meisterschaften gewann Williams waehrend ihrer dominanten 1990er Aera?",
          nl: "Hoeveel Constructeurskampioenschappen won Williams tijdens hun dominante jaren 90 tijdperk?"
        },
        options: ["3 titles", "5 titles", "7 titles", "4 titles"],
        correct: 1,
        explanation: {
          en: "Williams won 5 Constructors' Championships in the 1990s (1992, 1993, 1994, 1996, 1997) with drivers including Nigel Mansell, Alain Prost, Damon Hill, and Jacques Villeneuve. This was their most dominant period.",
          es: "Williams gano 5 Campeonatos de Constructores en los 90 (1992, 1993, 1994, 1996, 1997) con pilotos incluyendo Nigel Mansell, Alain Prost, Damon Hill y Jacques Villeneuve. Este fue su periodo mas dominante.",
          de: "Williams gewann in den 1990ern 5 Konstrukteurs-Meisterschaften (1992, 1993, 1994, 1996, 1997) mit Fahrern wie Nigel Mansell, Alain Prost, Damon Hill und Jacques Villeneuve. Dies war ihre dominanteste Periode.",
          nl: "Williams won 5 Constructeurskampioenschappen in de jaren 90 (1992, 1993, 1994, 1996, 1997) met coureurs waaronder Nigel Mansell, Alain Prost, Damon Hill en Jacques Villeneuve. Dit was hun meest dominante periode."
        }
      },
      {
        question: {
          en: "Which team was owned by Bernie Ecclestone and won two championships with Nelson Piquet?",
          es: "Que equipo fue propiedad de Bernie Ecclestone y gano dos campeonatos con Nelson Piquet?",
          de: "Welches Team gehoerte Bernie Ecclestone und gewann zwei Meisterschaften mit Nelson Piquet?",
          nl: "Welk team was eigendom van Bernie Ecclestone en won twee kampioenschappen met Nelson Piquet?"
        },
        options: ["Brabham", "Lotus", "Tyrrell", "March"],
        correct: 0,
        explanation: {
          en: "Brabham was owned by Bernie Ecclestone from 1972-1988. The team won two Drivers' Championships with Nelson Piquet (1981, 1983). Brabham was known for technical innovation, including the controversial 'fan car' BT46B.",
          es: "Brabham fue propiedad de Bernie Ecclestone de 1972-1988. El equipo gano dos Campeonatos de Pilotos con Nelson Piquet (1981, 1983). Brabham era conocido por innovacion tecnica, incluyendo el controversial 'auto ventilador' BT46B.",
          de: "Brabham gehoerte Bernie Ecclestone von 1972-1988. Das Team gewann zwei Fahrer-Meisterschaften mit Nelson Piquet (1981, 1983). Brabham war bekannt fuer technische Innovation, einschliesslich des umstrittenen 'Luefter-Autos' BT46B.",
          nl: "Brabham was eigendom van Bernie Ecclestone van 1972-1988. Het team won twee Rijderskampioenschappen met Nelson Piquet (1981, 1983). Brabham stond bekend om technische innovatie, waaronder de controversiële 'ventilator auto' BT46B."
        }
      },
      {
        question: {
          en: "What was unique about the Benetton B186 that gave them an advantage in 1986?",
          es: "Que era unico del Benetton B186 que les dio una ventaja en 1986?",
          de: "Was war einzigartig am Benetton B186, das ihnen 1986 einen Vorteil verschaffte?",
          nl: "Wat was uniek aan de Benetton B186 die hen een voordeel gaf in 1986?"
        },
        options: ["It was the first turbo car", "It used BMW's powerful turbo engine", "It had active suspension", "It pioneered carbon fiber construction"],
        correct: 1,
        explanation: {
          en: "The Benetton B186 (designed by Rory Byrne) used BMW's powerful turbo engine, producing over 1,000 hp in qualifying trim. Gerhard Berger won Mexico 1986 with it, Benetton's first F1 victory.",
          es: "El Benetton B186 (disenado por Rory Byrne) uso el potente motor turbo de BMW, produciendo mas de 1,000 hp en configuracion de clasificacion. Gerhard Berger gano Mexico 1986 con el, la primera victoria de Benetton en F1.",
          de: "Der Benetton B186 (entworfen von Rory Byrne) verwendete BMWs leistungsstarken Turbomotor, der im Qualifying-Setup ueber 1.000 PS produzierte. Gerhard Berger gewann Mexiko 1986 damit, Benettons erster F1-Sieg.",
          nl: "De Benetton B186 (ontworpen door Rory Byrne) gebruikte BMW's krachtige turbomotor, die meer dan 1.000 pk produceerde in kwalificatie trim. Gerhard Berger won Mexico 1986 ermee, Benetton's eerste F1 overwinning."
        }
      },
      {
        question: {
          en: "Which team introduced the 'zero-keel' front suspension design in the early 2000s?",
          es: "Que equipo introdujo el diseno de suspension delantera 'zero-keel' a principios de los 2000?",
          de: "Welches Team fuehrte das 'Zero-Keel' Vorderradaufhaengungs-Design Anfang der 2000er ein?",
          nl: "Welk team introduceerde het 'zero-keel' voorophanging ontwerp begin jaren 2000?"
        },
        options: ["Ferrari", "McLaren", "Sauber", "Williams"],
        correct: 2,
        explanation: {
          en: "Sauber introduced the innovative 'zero-keel' (twin-keel) front suspension design with the C20 in 2001. This design improved airflow under the car. Other teams, including McLaren and Jordan, later adopted variations of this concept.",
          es: "Sauber introdujo el innovador diseno de suspension delantera 'zero-keel' (doble quilla) con el C20 en 2001. Este diseno mejoro el flujo de aire bajo el auto. Otros equipos, incluyendo McLaren y Jordan, luego adoptaron variaciones de este concepto.",
          de: "Sauber fuehrte das innovative 'Zero-Keel' (Twin-Keel) Vorderradaufhaengungs-Design mit dem C20 2001 ein. Dieses Design verbesserte den Luftstrom unter dem Auto. Andere Teams, einschliesslich McLaren und Jordan, uebernahmen spaeter Variationen dieses Konzepts.",
          nl: "Sauber introduceerde het innovatieve 'zero-keel' (twin-keel) voorophanging ontwerp met de C20 in 2001. Dit ontwerp verbeterde de luchtstroom onder de auto. Andere teams, waaronder McLaren en Jordan, adopteerden later variaties van dit concept."
        }
      },
      {
        question: {
          en: "Which team's headquarters features a distinctive curved glass facade designed by Norman Foster?",
          es: "La sede de que equipo presenta una distintiva fachada de vidrio curva disenada por Norman Foster?",
          de: "Welches Teams Hauptquartier hat eine markante geschwungene Glasfassade, entworfen von Norman Foster?",
          nl: "Het hoofdkwartier van welk team heeft een kenmerkende gebogen glazen gevel ontworpen door Norman Foster?"
        },
        options: ["Mercedes", "McLaren Technology Centre", "Red Bull", "Ferrari"],
        correct: 1,
        explanation: {
          en: "McLaren Technology Centre (MTC) in Woking, designed by Norman Foster, opened in 2004. The futuristic building features a curved glass facade, man-made lake, and is considered one of the world's most advanced automotive facilities.",
          es: "McLaren Technology Centre (MTC) en Woking, disenado por Norman Foster, abrio en 2004. El edificio futurista presenta una fachada de vidrio curva, lago artificial, y es considerado una de las instalaciones automotrices mas avanzadas del mundo.",
          de: "McLaren Technology Centre (MTC) in Woking, entworfen von Norman Foster, eroeffnete 2004. Das futuristische Gebaeude hat eine geschwungene Glasfassade, einen kuenstlichen See und gilt als eine der fortschrittlichsten Automobilanlagen der Welt.",
          nl: "McLaren Technology Centre (MTC) in Woking, ontworpen door Norman Foster, opende in 2004. Het futuristische gebouw heeft een gebogen glazen gevel, kunstmatig meer, en wordt beschouwd als een van 's werelds meest geavanceerde automotive faciliteiten."
        }
      },
      {
        question: {
          en: "Which team did Eddie Jordan found in 1991 that became known for discovering young talent?",
          es: "Que equipo fundo Eddie Jordan en 1991 que se volvio conocido por descubrir talento joven?",
          de: "Welches Team gruendete Eddie Jordan 1991, das fuer die Entdeckung junger Talente bekannt wurde?",
          nl: "Welk team richtte Eddie Jordan op in 1991 dat bekend werd om het ontdekken van jong talent?"
        },
        options: ["Jordan Grand Prix", "Stewart Grand Prix", "Minardi", "Arrows"],
        correct: 0,
        explanation: {
          en: "Eddie Jordan founded Jordan Grand Prix in 1991. The team gave debuts to future champions Michael Schumacher (1991) and became known for nurturing talents like Eddie Irvine, Rubens Barrichello, Giancarlo Fisichella, and others.",
          es: "Eddie Jordan fundo Jordan Grand Prix en 1991. El equipo dio debuts a futuros campeones como Michael Schumacher (1991) y se volvio conocido por nutrir talentos como Eddie Irvine, Rubens Barrichello, Giancarlo Fisichella y otros.",
          de: "Eddie Jordan gruendete Jordan Grand Prix 1991. Das Team gab zukuenftigen Champions wie Michael Schumacher (1991) ihr Debuet und wurde bekannt fuer die Foerderung von Talenten wie Eddie Irvine, Rubens Barrichello, Giancarlo Fisichella und anderen.",
          nl: "Eddie Jordan richtte Jordan Grand Prix op in 1991. Het team gaf toekomstige kampioenen zoals Michael Schumacher (1991) hun debuut en werd bekend om het koesteren van talenten als Eddie Irvine, Rubens Barrichello, Giancarlo Fisichella en anderen."
        }
      },
      {
        question: {
          en: "What innovative technology did Renault introduce in 2005 that other teams later copied?",
          es: "Que tecnologia innovadora introdujo Renault en 2005 que otros equipos luego copiaron?",
          de: "Welche innovative Technologie fuehrte Renault 2005 ein, die andere Teams spaeter kopierten?",
          nl: "Welke innovatieve technologie introduceerde Renault in 2005 die andere teams later kopieerden?"
        },
        options: ["Mass damper system", "Paddle-shift gearbox", "Kinetic energy recovery", "Drag reduction system"],
        correct: 0,
        explanation: {
          en: "Renault's mass damper system (tuned mass damper) reduced car vibrations and improved tire performance. It helped Fernando Alonso win 2005-2006 championships. The FIA banned it mid-2006, but it demonstrated Renault's innovative engineering approach.",
          es: "El sistema de amortiguador de masa de Renault (amortiguador de masa sintonizado) redujo las vibraciones del auto y mejoro el rendimiento de los neumaticos. Ayudo a Fernando Alonso a ganar los campeonatos 2005-2006. La FIA lo prohibio a mediados de 2006, pero demostro el enfoque de ingenieria innovador de Renault.",
          de: "Renaults Massendaempfer-System (abgestimmter Massendaempfer) reduzierte Fahrzeugvibrationen und verbesserte die Reifenleistung. Es half Fernando Alonso, die Meisterschaften 2005-2006 zu gewinnen. Die FIA verbot es Mitte 2006, aber es zeigte Renaults innovativen Engineering-Ansatz.",
          nl: "Renault's massa demper systeem (afgestemde massa demper) verminderde auto trillingen en verbeterde bandprestaties. Het hielp Fernando Alonso de 2005-2006 kampioenschappen te winnen. De FIA verbood het medio 2006, maar het toonde Renault's innovatieve engineering aanpak."
        }
      },
      {
        question: {
          en: "Which team was the first to use carbon fiber composite monocoque chassis in F1?",
          es: "Que equipo fue el primero en usar chasis monocasco de composite de fibra de carbono en F1?",
          de: "Welches Team war das erste, das Monocoque-Chassis aus Kohlefaser-Verbundwerkstoff in der F1 verwendete?",
          nl: "Welk team was het eerste dat carbon fiber composiet monocoque chassis gebruikte in F1?"
        },
        options: ["Ferrari", "McLaren MP4/1 (1981)", "Williams", "Lotus"],
        correct: 1,
        explanation: {
          en: "McLaren introduced the first carbon fiber composite monocoque with the MP4/1 in 1981, designed by John Barnard. This revolutionary technology was stronger and lighter than aluminum, transforming F1 car construction and improving safety.",
          es: "McLaren introdujo el primer monocasco de composite de fibra de carbono con el MP4/1 en 1981, disenado por John Barnard. Esta tecnologia revolucionaria era mas fuerte y ligera que el aluminio, transformando la construccion de autos F1 y mejorando la seguridad.",
          de: "McLaren fuehrte 1981 das erste Kohlefaser-Verbundwerkstoff-Monocoque mit dem MP4/1 ein, entworfen von John Barnard. Diese revolutionaere Technologie war staerker und leichter als Aluminium, transformierte den F1-Autobau und verbesserte die Sicherheit.",
          nl: "McLaren introduceerde de eerste carbon fiber composiet monocoque met de MP4/1 in 1981, ontworpen door John Barnard. Deze revolutionaire technologie was sterker en lichter dan aluminium, transformeerde F1 auto constructie en verbeterde veiligheid."
        }
      },
      {
        question: {
          en: "Which team was formed from the Jaguar F1 team when Red Bull purchased it in 2005?",
          es: "Que equipo se formo del equipo Jaguar F1 cuando Red Bull lo compro en 2005?",
          de: "Welches Team entstand aus dem Jaguar F1 Team, als Red Bull es 2005 kaufte?",
          nl: "Welk team werd gevormd uit het Jaguar F1 team toen Red Bull het in 2005 kocht?"
        },
        options: ["Red Bull Racing", "Toro Rosso", "AlphaTauri", "RB F1 Team"],
        correct: 0,
        explanation: {
          en: "Red Bull purchased Jaguar Racing in 2005 and renamed it Red Bull Racing. The team, based in Milton Keynes, UK, went on to win 6 Constructors' Championships (2010-2013, 2022-2023) and 7 Drivers' Championships.",
          es: "Red Bull compro Jaguar Racing en 2005 y lo renombro Red Bull Racing. El equipo, con base en Milton Keynes, Reino Unido, paso a ganar 6 Campeonatos de Constructores (2010-2013, 2022-2023) y 7 Campeonatos de Pilotos.",
          de: "Red Bull kaufte Jaguar Racing 2005 und benannte es in Red Bull Racing um. Das Team mit Sitz in Milton Keynes, Grossbritannien, gewann 6 Konstrukteurs-Meisterschaften (2010-2013, 2022-2023) und 7 Fahrer-Meisterschaften.",
          nl: "Red Bull kocht Jaguar Racing in 2005 en noemde het Red Bull Racing. Het team, gevestigd in Milton Keynes, VK, ging door met het winnen van 6 Constructeurskampioenschappen (2010-2013, 2022-2023) en 7 Rijderskampioenschappen."
        }
      },
      {
        question: {
          en: "Which team introduced active suspension to F1 in the late 1980s?",
          es: "Que equipo introdujo la suspension activa a F1 a finales de los 80?",
          de: "Welches Team fuehrte Ende der 1980er aktive Federung in die F1 ein?",
          nl: "Welk team introduceerde actieve vering in F1 eind jaren 80?"
        },
        options: ["Ferrari", "McLaren", "Lotus", "Williams"],
        correct: 3,
        explanation: {
          en: "Williams pioneered active suspension in F1 with their FW14 and FW14B (1991-1992). The computer-controlled system adjusted suspension in real-time, giving superior handling. Nigel Mansell and Alain Prost won championships with this technology before it was banned in 1994.",
          es: "Williams fue pionero en suspension activa en F1 con sus FW14 y FW14B (1991-1992). El sistema controlado por computadora ajustaba la suspension en tiempo real, dando un manejo superior. Nigel Mansell y Alain Prost ganaron campeonatos con esta tecnologia antes de que fuera prohibida en 1994.",
          de: "Williams war Pionier der aktiven Federung in der F1 mit ihren FW14 und FW14B (1991-1992). Das computergesteuerte System passte die Federung in Echtzeit an und bot ueberlegenes Handling. Nigel Mansell und Alain Prost gewannen Meisterschaften mit dieser Technologie, bevor sie 1994 verboten wurde.",
          nl: "Williams was pionier van actieve vering in F1 met hun FW14 en FW14B (1991-1992). Het computergestuurde systeem paste de vering in real-time aan, wat superieur handling gaf. Nigel Mansell en Alain Prost wonnen kampioenschappen met deze technologie voordat het in 1994 werd verboden."
        }
      },
      {
        question: {
          en: "What was special about the 1988 McLaren MP4/4 in terms of race wins?",
          es: "Que fue especial del McLaren MP4/4 de 1988 en terminos de victorias de carrera?",
          de: "Was war am McLaren MP4/4 von 1988 in Bezug auf Rennsiege besonders?",
          nl: "Wat was speciaal aan de 1988 McLaren MP4/4 in termen van race overwinningen?"
        },
        options: ["Won 10 of 16 races", "Won 12 of 16 races", "Won 15 of 16 races", "Won all 16 races"],
        correct: 2,
        explanation: {
          en: "The McLaren MP4/4 won 15 of 16 races in 1988, the highest win percentage in F1 history (93.75%). Ayrton Senna (8 wins) and Alain Prost (7 wins) dominated. Only Ferrari's Gerhard Berger at Monza prevented a perfect season.",
          es: "El McLaren MP4/4 gano 15 de 16 carreras en 1988, el porcentaje de victorias mas alto en la historia de F1 (93.75%). Ayrton Senna (8 victorias) y Alain Prost (7 victorias) dominaron. Solo Gerhard Berger de Ferrari en Monza previno una temporada perfecta.",
          de: "Der McLaren MP4/4 gewann 1988 15 von 16 Rennen, die hoechste Siegquote in der F1-Geschichte (93,75%). Ayrton Senna (8 Siege) und Alain Prost (7 Siege) dominierten. Nur Ferraris Gerhard Berger in Monza verhinderte eine perfekte Saison.",
          nl: "De McLaren MP4/4 won 15 van 16 races in 1988, het hoogste winpercentage in F1 geschiedenis (93,75%). Ayrton Senna (8 overwinningen) en Alain Prost (7 overwinningen) domineerden. Alleen Ferrari's Gerhard Berger in Monza voorkwam een perfect seizoen."
        }
      },
      {
        question: {
          en: "Which team won the first ever F1 Constructors' Championship in 1958?",
          es: "Que equipo gano el primer Campeonato de Constructores de F1 en 1958?",
          de: "Welches Team gewann 1958 die erste F1-Konstrukteurs-Meisterschaft?",
          nl: "Welk team won het allereerste F1 Constructeurskampioenschap in 1958?"
        },
        options: ["Ferrari", "Cooper", "Vanwall", "Maserati"],
        correct: 2,
        explanation: {
          en: "Vanwall won the first Constructors' Championship in 1958 with drivers Stirling Moss, Tony Brooks, and Stuart Lewis-Evans. The championship was introduced in 1958, seven years after the first Drivers' Championship (1950).",
          es: "Vanwall gano el primer Campeonato de Constructores en 1958 con los pilotos Stirling Moss, Tony Brooks y Stuart Lewis-Evans. El campeonato se introdujo en 1958, siete anos despues del primer Campeonato de Pilotos (1950).",
          de: "Vanwall gewann 1958 die erste Konstrukteurs-Meisterschaft mit den Fahrern Stirling Moss, Tony Brooks und Stuart Lewis-Evans. Die Meisterschaft wurde 1958 eingefuehrt, sieben Jahre nach der ersten Fahrer-Meisterschaft (1950).",
          nl: "Vanwall won het eerste Constructeurskampioenschap in 1958 met coureurs Stirling Moss, Tony Brooks en Stuart Lewis-Evans. Het kampioenschap werd geïntroduceerd in 1958, zeven jaar na het eerste Rijderskampioenschap (1950)."
        }
      },
      {
        question: {
          en: "Which team's car was nicknamed 'La Piccionaia' (The Dovecote) in the 1950s?",
          es: "El auto de que equipo fue apodado 'La Piccionaia' (El Palomar) en los anos 50?",
          de: "Welches Teams Auto wurde in den 1950ern 'La Piccionaia' (Der Taubenschlag) genannt?",
          nl: "De auto van welk team kreeg de bijnaam 'La Piccionaia' (De Duiventil) in de jaren 50?"
        },
        options: ["Maserati 250F", "Ferrari Squalo", "Alfa Romeo Tipo 159", "Lancia D50"],
        correct: 1,
        explanation: {
          en: "Ferrari's 1954 Tipo 553 Squalo was nicknamed 'La Piccionaia' because its distinctive side air intakes resembled dovecotes. The car's innovative design featured offset driveline for improved weight distribution.",
          es: "El Ferrari Tipo 553 Squalo de 1954 fue apodado 'La Piccionaia' porque sus distintivas tomas de aire laterales se asemejaban a palomares. El diseno innovador del auto presentaba linea de transmision descentrada para mejorar la distribucion del peso.",
          de: "Ferraris Tipo 553 Squalo von 1954 wurde 'La Piccionaia' genannt, weil seine markanten seitlichen Lufteinlaesse Taubenschlaegen aehnelten. Das innovative Design des Autos hatte einen versetzten Antriebsstrang fuer verbesserte Gewichtsverteilung.",
          nl: "Ferrari's 1954 Tipo 553 Squalo kreeg de bijnaam 'La Piccionaia' omdat zijn kenmerkende zij-luchtinlaten leken op duiventillen. Het innovatieve ontwerp van de auto had een offset aandrijflijn voor verbeterde gewichtsverdeling."
        }
      },
      {
        question: {
          en: "Which team did Michael Schumacher win his first two championships with (1994-1995)?",
          es: "Con que equipo Michael Schumacher gano sus primeros dos campeonatos (1994-1995)?",
          de: "Mit welchem Team gewann Michael Schumacher seine ersten beiden Meisterschaften (1994-1995)?",
          nl: "Met welk team won Michael Schumacher zijn eerste twee kampioenschappen (1994-1995)?"
        },
        options: ["Ferrari", "Benetton", "Jordan", "Mercedes"],
        correct: 1,
        explanation: {
          en: "Michael Schumacher won his first two World Championships with Benetton in 1994 and 1995. He then moved to Ferrari in 1996, where he won five more consecutive championships (2000-2004), creating a dynasty.",
          es: "Michael Schumacher gano sus primeros dos Campeonatos Mundiales con Benetton en 1994 y 1995. Luego se mudo a Ferrari en 1996, donde gano cinco campeonatos mas consecutivos (2000-2004), creando una dinastia.",
          de: "Michael Schumacher gewann seine ersten beiden Weltmeisterschaften 1994 und 1995 mit Benetton. 1996 wechselte er zu Ferrari, wo er fuenf weitere aufeinanderfolgende Meisterschaften gewann (2000-2004) und eine Dynastie schuf.",
          nl: "Michael Schumacher won zijn eerste twee Wereldkampioenschappen met Benetton in 1994 en 1995. Hij verhuisde toen naar Ferrari in 1996, waar hij vijf meer opeenvolgende kampioenschappen won (2000-2004), creërend een dynastie."
        }
      },
      {
        question: {
          en: "What was the name of the team that later became Red Bull Racing's sister team Toro Rosso?",
          es: "Cual era el nombre del equipo que luego se convirtio en el equipo hermano de Red Bull Racing, Toro Rosso?",
          de: "Wie hiess das Team, das spaeter Red Bull Racings Schwesterteam Toro Rosso wurde?",
          nl: "Wat was de naam van het team dat later Red Bull Racing's zusterteam Toro Rosso werd?"
        },
        options: ["Stewart Grand Prix", "Minardi", "Arrows", "Prost Grand Prix"],
        correct: 1,
        explanation: {
          en: "Red Bull purchased Minardi in 2005 and renamed it Scuderia Toro Rosso (Italian for 'Red Bull Racing'). The team served as a junior team for developing young drivers. In 2020, it was rebranded as Scuderia AlphaTauri.",
          es: "Red Bull compro Minardi en 2005 y lo renombro Scuderia Toro Rosso (italiano para 'Red Bull Racing'). El equipo sirvio como equipo junior para desarrollar pilotos jovenes. En 2020, fue rebautizado como Scuderia AlphaTauri.",
          de: "Red Bull kaufte Minardi 2005 und benannte es in Scuderia Toro Rosso um (italienisch fuer 'Red Bull Racing'). Das Team diente als Nachwuchsteam zur Entwicklung junger Fahrer. 2020 wurde es in Scuderia AlphaTauri umbenannt.",
          nl: "Red Bull kocht Minardi in 2005 en noemde het Scuderia Toro Rosso (Italiaans voor 'Red Bull Racing'). Het team diende als junior team voor het ontwikkelen van jonge coureurs. In 2020 werd het omgedoopt tot Scuderia AlphaTauri."
        }
      },
      {
        question: {
          en: "Which team introduced the 'F-duct' system that allowed drivers to stall the rear wing for more straight-line speed?",
          es: "Que equipo introdujo el sistema 'F-duct' que permitio a los pilotos detener el ala trasera para mas velocidad en linea recta?",
          de: "Welches Team fuehrte das 'F-Duct'-System ein, das es Fahrern erlaubte, den Heckfluegel fuer mehr Geradeaus-Geschwindigkeit zu stoppen?",
          nl: "Welk team introduceerde het 'F-duct' systeem dat coureurs toestond de achtervleugel te stoppen voor meer rechte lijn snelheid?"
        },
        options: ["Red Bull", "McLaren", "Ferrari", "Mercedes"],
        correct: 1,
        explanation: {
          en: "McLaren introduced the innovative F-duct system in 2010. Drivers could block an air duct with their hand/knee to stall the rear wing, reducing drag on straights. Other teams copied it, but the FIA banned it for 2011, leading to DRS instead.",
          es: "McLaren introdujo el innovador sistema F-duct en 2010. Los pilotos podian bloquear un conducto de aire con su mano/rodilla para detener el ala trasera, reduciendo el arrastre en rectas. Otros equipos lo copiaron, pero la FIA lo prohibio para 2011, llevando al DRS en su lugar.",
          de: "McLaren fuehrte 2010 das innovative F-Duct-System ein. Fahrer konnten einen Luftkanal mit Hand/Knie blockieren, um den Heckfluegel zu stoppen und den Luftwiderstand auf Geraden zu reduzieren. Andere Teams kopierten es, aber die FIA verbot es 2011, was stattdessen zu DRS fuehrte.",
          nl: "McLaren introduceerde het innovatieve F-duct systeem in 2010. Coureurs konden een luchtkanaal blokkeren met hun hand/knie om de achtervleugel te stoppen, wat weerstand op rechte stukken verminderde. Andere teams kopieerden het, maar de FIA verbood het voor 2011, wat leidde tot DRS."
        }
      },
      {
        question: {
          en: "Which team was founded by three-time World Champion Jackie Stewart in 1997?",
          es: "Que equipo fue fundado por el tres veces Campeon Mundial Jackie Stewart en 1997?",
          de: "Welches Team wurde 1997 vom dreifachen Weltmeister Jackie Stewart gegruendet?",
          nl: "Welk team werd opgericht door drievoudig Wereldkampioen Jackie Stewart in 1997?"
        },
        options: ["Stewart Grand Prix", "Jaguar Racing", "Red Bull Racing", "Tyrrell"],
        correct: 0,
        explanation: {
          en: "Jackie Stewart founded Stewart Grand Prix in 1997 with his son Paul. The team achieved 1 race win (Johnny Herbert, 1999 European GP). Ford purchased it in 2000, renaming it Jaguar Racing, which later became Red Bull Racing in 2005.",
          es: "Jackie Stewart fundo Stewart Grand Prix en 1997 con su hijo Paul. El equipo logro 1 victoria de carrera (Johnny Herbert, GP Europeo 1999). Ford lo compro en 2000, renombrandolo Jaguar Racing, que luego se convirtio en Red Bull Racing en 2005.",
          de: "Jackie Stewart gruendete 1997 Stewart Grand Prix mit seinem Sohn Paul. Das Team erzielte 1 Rennsieg (Johnny Herbert, Europa GP 1999). Ford kaufte es 2000 und benannte es in Jaguar Racing um, das 2005 zu Red Bull Racing wurde.",
          nl: "Jackie Stewart richtte in 1997 Stewart Grand Prix op met zijn zoon Paul. Het team behaalde 1 race overwinning (Johnny Herbert, 1999 Europese GP). Ford kocht het in 2000 en noemde het Jaguar Racing, wat later in 2005 Red Bull Racing werd."
        }
      },
      {
        question: {
          en: "Which team holds the record for most consecutive race wins (19 wins)?",
          es: "Que equipo tiene el record de mas victorias consecutivas de carrera (19 victorias)?",
          de: "Welches Team haelt den Rekord fuer die meisten aufeinanderfolgenden Rennsiege (19 Siege)?",
          nl: "Welk team heeft het record voor de meeste opeenvolgende race overwinningen (19 overwinningen)?"
        },
        options: ["Ferrari (2002-2004)", "McLaren (1988)", "Mercedes (2014-2016)", "Red Bull (2023)"],
        correct: 3,
        explanation: {
          en: "Red Bull Racing set the record for consecutive wins with 19 straight victories from the 2023 Dutch GP through the 2024 Austrian GP (with Max Verstappen winning all 19). This surpassed Ferrari's previous record of 14 wins (2000-2001, Schumacher era).",
          es: "Red Bull Racing establecio el record de victorias consecutivas con 19 victorias seguidas desde el GP Holandes 2023 hasta el GP Austriaco 2024 (con Max Verstappen ganando las 19). Esto supero el record anterior de Ferrari de 14 victorias (2000-2001, era Schumacher).",
          de: "Red Bull Racing stellte den Rekord fuer aufeinanderfolgende Siege mit 19 aufeinanderfolgenden Siegen vom GP der Niederlande 2023 bis zum GP von Oesterreich 2024 auf (alle 19 von Max Verstappen gewonnen). Dies uebertraf Ferraris bisherigen Rekord von 14 Siegen (2000-2001, Schumacher-Aera).",
          nl: "Red Bull Racing zette het record voor opeenvolgende overwinningen met 19 opeenvolgende overwinningen van de 2023 Nederlandse GP tot de 2024 Oostenrijkse GP (alle 19 gewonnen door Max Verstappen). Dit overtrof Ferrari's vorige record van 14 overwinningen (2000-2001, Schumacher tijdperk)."
        }
      },
      {
        question: {
          en: "What was significant about the Force India team's financial model that allowed them to compete with bigger teams?",
          es: "Que fue significativo del modelo financiero del equipo Force India que les permitio competir con equipos mas grandes?",
          de: "Was war am Finanzmodell des Force India Teams bedeutend, das es ihnen erlaubte, mit groesseren Teams zu konkurrieren?",
          nl: "Wat was significant aan het financiële model van het Force India team dat hen toestond te concurreren met grotere teams?"
        },
        options: ["They had the largest budget", "They operated efficiently on a limited budget, punching above their weight", "They received special FIA funding", "They shared resources with Mercedes"],
        correct: 1,
        explanation: {
          en: "Force India (2008-2018) was known for achieving strong results with one of F1's smallest budgets. They consistently finished 4th-7th in Constructors' despite spending far less than top teams, demonstrating exceptional efficiency and technical innovation under technical director Andy Green.",
          es: "Force India (2008-2018) era conocido por lograr fuertes resultados con uno de los presupuestos mas pequenos de F1. Terminaron consistentemente 4to-7mo en Constructores a pesar de gastar mucho menos que equipos top, demostrando eficiencia excepcional e innovacion tecnica bajo el director tecnico Andy Green.",
          de: "Force India (2008-2018) war bekannt dafuer, mit einem der kleinsten F1-Budgets starke Ergebnisse zu erzielen. Sie beendeten konsistent auf Platz 4-7 bei den Konstrukteuren, obwohl sie weit weniger als Topteams ausgaben, was außergewoehnliche Effizienz und technische Innovation unter Technikdirektor Andy Green zeigte.",
          nl: "Force India (2008-2018) stond bekend om het behalen van sterke resultaten met een van F1's kleinste budgetten. Ze eindigden consistent 4e-7e bij de Constructeurs ondanks dat ze veel minder uitgaven dan topteams, wat uitzonderlijke efficiëntie en technische innovatie toonde onder technisch directeur Andy Green."
        }
      },
      {
        question: {
          en: "Which team introduced the radical 'double diffuser' concept that was later banned?",
          es: "Que equipo introdujo el concepto radical del 'difusor doble' que luego fue prohibido?",
          de: "Welches Team fuehrte das radikale 'Doppeldiffusor'-Konzept ein, das spaeter verboten wurde?",
          nl: "Welk team introduceerde het radicale 'dubbele diffuser' concept dat later werd verboden?"
        },
        options: ["McLaren", "Ferrari", "Brawn GP (along with Toyota and Williams)", "Red Bull"],
        correct: 2,
        explanation: {
          en: "Brawn GP, Toyota, and Williams exploited a loophole to create double diffusers in 2009, generating massive downforce. Brawn GP dominated early 2009, winning both championships. Other teams protested but the FIA initially allowed it before banning it for 2011.",
          es: "Brawn GP, Toyota y Williams explotaron una laguna para crear difusores dobles en 2009, generando carga aerodinamica masiva. Brawn GP domino principios de 2009, ganando ambos campeonatos. Otros equipos protestaron pero la FIA inicialmente lo permitio antes de prohibirlo para 2011.",
          de: "Brawn GP, Toyota und Williams nutzten 2009 ein Schlupfloch fuer Doppeldiffusoren, die massiven Abtrieb erzeugten. Brawn GP dominierte Anfang 2009 und gewann beide Meisterschaften. Andere Teams protestierten, aber die FIA erlaubte es zunaechst, bevor es 2011 verboten wurde.",
          nl: "Brawn GP, Toyota en Williams maakten gebruik van een maas in de regels om dubbele diffusers te creëren in 2009, wat massale downforce genereerde. Brawn GP domineerde begin 2009 en won beide kampioenschappen. Andere teams protesteerden maar de FIA stond het aanvankelijk toe voordat het in 2011 werd verboden."
        }
      },
      {
        question: {
          en: "Which team's livery featured the iconic Marlboro chevron design in the 1970s-80s?",
          es: "La librea de que equipo presento el iconico diseno chevron de Marlboro en los 70-80?",
          de: "Welches Teams Lackierung zeigte das ikonische Marlboro-Chevron-Design in den 1970er-80ern?",
          nl: "De livery van welk team bevatte het iconische Marlboro chevron ontwerp in de jaren 70-80?"
        },
        options: ["Ferrari", "McLaren", "Williams", "Lotus"],
        correct: 1,
        explanation: {
          en: "McLaren featured the iconic white Marlboro chevron on red background from 1974-1996. This became one of F1's most recognizable liveries. When tobacco advertising was banned, McLaren retained a similar design without Marlboro branding.",
          es: "McLaren presento el iconico chevron blanco de Marlboro sobre fondo rojo de 1974-1996. Esto se convirtio en una de las libreas mas reconocibles de F1. Cuando se prohibio la publicidad de tabaco, McLaren mantuvo un diseno similar sin la marca Marlboro.",
          de: "McLaren zeigte von 1974-1996 das ikonische weisse Marlboro-Chevron auf rotem Hintergrund. Dies wurde zu einer der erkennbarsten F1-Lackierungen. Als Tabakwerbung verboten wurde, behielt McLaren ein aehnliches Design ohne Marlboro-Branding bei.",
          nl: "McLaren bevatte het iconische witte Marlboro chevron op rode achtergrond van 1974-1996. Dit werd een van F1's meest herkenbare liveries. Toen tabaksreclame werd verboden, behield McLaren een vergelijkbaar ontwerp zonder Marlboro branding."
        }
      },
      {
        question: {
          en: "Which team was the first to score over 800 points in a single season (2014)?",
          es: "Que equipo fue el primero en anotar mas de 800 puntos en una sola temporada (2014)?",
          de: "Welches Team war das erste, das in einer einzigen Saison ueber 800 Punkte erzielte (2014)?",
          nl: "Welk team was het eerste dat meer dan 800 punten scoorde in een enkel seizoen (2014)?"
        },
        options: ["Red Bull (2013)", "Mercedes (2014)", "Ferrari (2004)", "McLaren (1988)"],
        correct: 1,
        explanation: {
          en: "Mercedes scored 701 points in 2014 under the old points system. With the current system, they would have scored over 800. In 2016, Mercedes actually scored 765 points, the highest ever under the current points structure, dominating the hybrid era.",
          es: "Mercedes anoto 701 puntos en 2014 bajo el antiguo sistema de puntos. Con el sistema actual, habrian anotado mas de 800. En 2016, Mercedes realmente anoto 765 puntos, el mas alto jamas bajo la estructura de puntos actual, dominando la era hibrida.",
          de: "Mercedes erzielte 2014 unter dem alten Punktesystem 701 Punkte. Mit dem aktuellen System haetten sie ueber 800 Punkte erzielt. 2016 erzielte Mercedes tatsaechlich 765 Punkte, die hoechste Punktzahl unter der aktuellen Punktestruktur, dominierend in der Hybrid-Aera.",
          nl: "Mercedes scoorde 701 punten in 2014 onder het oude puntensysteem. Met het huidige systeem zouden ze meer dan 800 hebben gescoord. In 2016 scoorde Mercedes daadwerkelijk 765 punten, de hoogste ooit onder de huidige puntenstructuur, dominerend in het hybride tijdperk."
        }
      },
      {
        question: {
          en: "Which team was known for their distinctive orange and black 'Arrows' livery in the 1980s-90s?",
          es: "Que equipo era conocido por su distintiva librea naranja y negra 'Arrows' en los 80-90?",
          de: "Welches Team war bekannt fuer seine markante orange-schwarze 'Arrows'-Lackierung in den 1980er-90ern?",
          nl: "Welk team stond bekend om hun kenmerkende oranje en zwarte 'Arrows' livery in de jaren 80-90?"
        },
        options: ["Arrows", "Zakspeed", "Leyton House", "Onyx"],
        correct: 0,
        explanation: {
          en: "Arrows Grand Prix International competed from 1978-2002. Despite never winning a race, they were competitive midfield runners, achieving 9 podium finishes. Their orange/black livery (1980s) and later variations became iconic. The team folded in 2002 due to financial issues.",
          es: "Arrows Grand Prix International compitio de 1978-2002. A pesar de nunca ganar una carrera, fueron corredores competitivos del medio campo, logrando 9 podios. Su librea naranja/negra (1980s) y variaciones posteriores se volvieron iconicas. El equipo se disolvio en 2002 debido a problemas financieros.",
          de: "Arrows Grand Prix International trat von 1978-2002 an. Obwohl sie nie ein Rennen gewannen, waren sie wettbewerbsfaehige Mittelfeld-Teams mit 9 Podiumsplaetzen. Ihre orange/schwarze Lackierung (1980er) und spaetere Variationen wurden ikonisch. Das Team loeste sich 2002 aufgrund finanzieller Probleme auf.",
          nl: "Arrows Grand Prix International racete van 1978-2002. Ondanks dat ze nooit een race wonnen, waren ze competitieve middenveld renners, met 9 podiumplaatsen. Hun oranje/zwarte livery (1980s) en latere variaties werden iconisch. Het team vouwde in 2002 op door financiële problemen."
        }
      },
      {
        question: {
          en: "Which team did Nico Rosberg drive for when he won his 2016 World Championship?",
          es: "Para que equipo condujo Nico Rosberg cuando gano su Campeonato Mundial 2016?",
          de: "Fuer welches Team fuhr Nico Rosberg, als er seine Weltmeisterschaft 2016 gewann?",
          nl: "Voor welk team reed Nico Rosberg toen hij zijn 2016 Wereldkampioenschap won?"
        },
        options: ["Williams", "McLaren", "Mercedes-AMG Petronas", "Red Bull"],
        correct: 2,
        explanation: {
          en: "Nico Rosberg won the 2016 World Championship with Mercedes-AMG Petronas, defeating teammate Lewis Hamilton. Five days after clinching the title in Abu Dhabi, Rosberg shocked the F1 world by announcing his immediate retirement from racing.",
          es: "Nico Rosberg gano el Campeonato Mundial 2016 con Mercedes-AMG Petronas, derrotando al companero de equipo Lewis Hamilton. Cinco dias despues de asegurar el titulo en Abu Dhabi, Rosberg sorprendio al mundo F1 al anunciar su retiro inmediato de las carreras.",
          de: "Nico Rosberg gewann die Weltmeisterschaft 2016 mit Mercedes-AMG Petronas und besiegte Teamkollege Lewis Hamilton. Fuenf Tage nach der Titelgewinnung in Abu Dhabi schockierte Rosberg die F1-Welt mit der Ankuendigung seines sofortigen Ruecktritts vom Rennsport.",
          nl: "Nico Rosberg won het 2016 Wereldkampioenschap met Mercedes-AMG Petronas, versloeg teamgenoot Lewis Hamilton. Vijf dagen na het veroveren van de titel in Abu Dhabi, schokte Rosberg de F1 wereld door zijn onmiddellijke pensioen van het racen aan te kondigen."
        }
      },
      {
        question: {
          en: "Which team was the first to achieve 100 pole positions?",
          es: "Que equipo fue el primero en lograr 100 pole positions?",
          de: "Welches Team war das erste, das 100 Pole-Positions erreichte?",
          nl: "Welk team was het eerste dat 100 pole positions behaalde?"
        },
        options: ["McLaren", "Ferrari", "Williams", "Mercedes"],
        correct: 1,
        explanation: {
          en: "Ferrari became the first team to reach 100 pole positions in 1998 at the Belgian Grand Prix with Michael Schumacher. As of 2024, Ferrari has over 240 pole positions, though Mercedes surpassed them during the hybrid era.",
          es: "Ferrari se convirtio en el primer equipo en alcanzar 100 pole positions en 1998 en el Gran Premio de Belgica con Michael Schumacher. A partir de 2024, Ferrari tiene mas de 240 pole positions, aunque Mercedes los supero durante la era hibrida.",
          de: "Ferrari wurde 1998 beim Grossen Preis von Belgien mit Michael Schumacher das erste Team, das 100 Pole-Positions erreichte. Ab 2024 hat Ferrari ueber 240 Pole-Positions, obwohl Mercedes sie waehrend der Hybrid-Aera ueberholte.",
          nl: "Ferrari werd het eerste team dat 100 pole positions bereikte in 1998 bij de Belgische Grand Prix met Michael Schumacher. Vanaf 2024 heeft Ferrari meer dan 240 pole positions, hoewel Mercedes hen tijdens het hybride tijdperk overtrof."
        }
      },
      {
        question: {
          en: "Which team introduced the innovative 'third spring' suspension system?",
          es: "Que equipo introdujo el innovador sistema de suspension de 'tercer resorte'?",
          de: "Welches Team fuehrte das innovative 'Dritte-Feder'-Aufhaengungssystem ein?",
          nl: "Welk team introduceerde het innovatieve 'derde veer' veersysteem?"
        },
        options: ["Williams", "Renault", "Ferrari", "McLaren"],
        correct: 2,
        explanation: {
          en: "Ferrari developed the 'third spring' (or 'third damper') system to control ride height while maintaining compliance with regulations banning active suspension. Other teams copied it, leading to debates about legality. The system helped optimize aerodynamic performance.",
          es: "Ferrari desarrollo el sistema de 'tercer resorte' (o 'tercer amortiguador') para controlar la altura de conduccion mientras se mantenia el cumplimiento con las regulaciones que prohibian la suspension activa. Otros equipos lo copiaron, llevando a debates sobre legalidad. El sistema ayudo a optimizar el rendimiento aerodinamico.",
          de: "Ferrari entwickelte das 'Dritte-Feder'-System (oder 'Dritter Daempfer'), um die Bodenfreiheit zu kontrollieren und gleichzeitig die Vorschriften einzuhalten, die aktive Federung verboten. Andere Teams kopierten es, was zu Debatten ueber Legalitaet fuehrte. Das System half, die aerodynamische Leistung zu optimieren.",
          nl: "Ferrari ontwikkelde het 'derde veer' (of 'derde demper') systeem om rijhoogte te controleren terwijl het voldeed aan regelgeving die actieve vering verbood. Andere teams kopieerden het, wat leidde tot debatten over legaliteit. Het systeem hielp aerodynamische prestaties te optimaliseren."
        }
      },
      {
        question: {
          en: "Which team was founded by American businessman Gene Haas in 2016?",
          es: "Que equipo fue fundado por el empresario estadounidense Gene Haas en 2016?",
          de: "Welches Team wurde 2016 vom amerikanischen Geschaeftsmann Gene Haas gegruendet?",
          nl: "Welk team werd opgericht door Amerikaanse zakenman Gene Haas in 2016?"
        },
        options: ["Haas F1 Team", "Stewart-Haas Racing", "USF1", "American Racing"],
        correct: 0,
        explanation: {
          en: "Haas F1 Team joined F1 in 2016, becoming the first American team since 1986. Founded by Gene Haas (owner of NASCAR's Stewart-Haas Racing), the team has a close technical partnership with Ferrari and scored points in their debut season.",
          es: "Haas F1 Team se unio a F1 en 2016, convirtiendose en el primer equipo estadounidense desde 1986. Fundado por Gene Haas (propietario de Stewart-Haas Racing de NASCAR), el equipo tiene una estrecha asociacion tecnica con Ferrari y anoto puntos en su temporada de debut.",
          de: "Haas F1 Team trat 2016 der F1 bei und wurde das erste amerikanische Team seit 1986. Gegruendet von Gene Haas (Besitzer von NASCARs Stewart-Haas Racing) hat das Team eine enge technische Partnerschaft mit Ferrari und erzielte in der Debuetsaison Punkte.",
          nl: "Haas F1 Team kwam in 2016 bij F1, werd het eerste Amerikaanse team sinds 1986. Opgericht door Gene Haas (eigenaar van NASCAR's Stewart-Haas Racing), heeft het team een nauwe technische samenwerking met Ferrari en scoorde punten in hun debuut seizoen."
        }
      },
      {
        question: {
          en: "Which team's technical director Adrian Newey is considered one of F1's greatest designers?",
          es: "El director tecnico de que equipo, Adrian Newey, es considerado uno de los mejores disenadores de F1?",
          de: "Welches Teams Technikdirektor Adrian Newey gilt als einer der groessten F1-Designer?",
          nl: "De technisch directeur van welk team, Adrian Newey, wordt beschouwd als een van F1's grootste ontwerpers?"
        },
        options: ["McLaren", "Ferrari", "Red Bull Racing", "Williams"],
        correct: 2,
        explanation: {
          en: "Adrian Newey has been Red Bull Racing's Chief Technical Officer since 2006. He previously designed championship-winning cars for Williams (1990s) and McLaren (1998). His Red Bull designs won 7 Constructors' Championships (2010-2013, 2022-2024) and 7 Drivers' titles.",
          es: "Adrian Newey ha sido Director Tecnico de Red Bull Racing desde 2006. Previamente diseno autos ganadores de campeonatos para Williams (1990s) y McLaren (1998). Sus disenos de Red Bull ganaron 7 Campeonatos de Constructores (2010-2013, 2022-2024) y 7 titulos de Pilotos.",
          de: "Adrian Newey ist seit 2006 Chief Technical Officer von Red Bull Racing. Zuvor entwarf er meisterschaftsgewinnende Autos fuer Williams (1990er) und McLaren (1998). Seine Red Bull-Designs gewannen 7 Konstrukteurs-Meisterschaften (2010-2013, 2022-2024) und 7 Fahrertitel.",
          nl: "Adrian Newey is sinds 2006 Chief Technical Officer van Red Bull Racing. Hij ontwierp eerder kampioenschapswinnende auto's voor Williams (1990s) en McLaren (1998). Zijn Red Bull ontwerpen wonnen 7 Constructeurskampioenschappen (2010-2013, 2022-2024) en 7 Rijderstitels."
        }
      },
      {
        question: {
          en: "Which team was known for their innovative 'X-wing' front wing design in 1998?",
          es: "Que equipo era conocido por su innovador diseno de ala delantera 'X-wing' en 1998?",
          de: "Welches Team war bekannt fuer sein innovatives 'X-Wing' Frontfluegel-Design 1998?",
          nl: "Welk team stond bekend om hun innovatieve 'X-wing' voorvleugel ontwerp in 1998?"
        },
        options: ["Tyrrell (and others)", "Ferrari only", "McLaren only", "Williams only"],
        correct: 0,
        explanation: {
          en: "Tyrrell pioneered the bizarre 'X-wing' design in 1998 - elevated front wings mounted on tall struts above the chassis. McLaren, Jordan, and others briefly copied it. The FIA quickly banned it for safety and aesthetic reasons before the season ended.",
          es: "Tyrrell fue pionero en el extrano diseno 'X-wing' en 1998 - alas delanteras elevadas montadas en puntales altos sobre el chasis. McLaren, Jordan y otros brevemente lo copiaron. La FIA rapidamente lo prohibio por razones de seguridad y esteticas antes del final de la temporada.",
          de: "Tyrrell war 1998 Pionier des bizarren 'X-Wing'-Designs - erhöhte Frontfluegel auf hohen Stuetzen ueber dem Chassis. McLaren, Jordan und andere kopierten es kurzzeitig. Die FIA verbot es schnell aus Sicherheits- und aesthetischen Gruenden vor Saisonende.",
          nl: "Tyrrell was pionier van het bizarre 'X-wing' ontwerp in 1998 - verhoogde voorvleugels gemonteerd op hoge steunen boven het chassis. McLaren, Jordan en anderen kopieerden het kort. De FIA verbood het snel om veiligheids- en esthetische redenen voor het einde van het seizoen."
        }
      },
      {
        question: {
          en: "Which team achieved the highest percentage of laps led in a single season?",
          es: "Que equipo logro el mayor porcentaje de vueltas lideradas en una sola temporada?",
          de: "Welches Team erreichte den hoechsten Prozentsatz gefuehrter Runden in einer einzigen Saison?",
          nl: "Welk team behaalde het hoogste percentage geleide ronden in een enkel seizoen?"
        },
        options: ["Ferrari (2004)", "Red Bull (2023)", "McLaren (1988)", "Mercedes (2016)"],
        correct: 1,
        explanation: {
          en: "Red Bull Racing led an astounding 86% of all laps in the 2023 season with Max Verstappen and Sergio Perez. This dominance surpassed even McLaren's 1988 performance (MP4/4 era) and Ferrari's 2002-2004 Schumacher era, demonstrating unprecedented control.",
          es: "Red Bull Racing lidero un asombroso 86% de todas las vueltas en la temporada 2023 con Max Verstappen y Sergio Perez. Esta dominancia supero incluso el rendimiento de McLaren en 1988 (era MP4/4) y la era Schumacher de Ferrari 2002-2004, demostrando control sin precedentes.",
          de: "Red Bull Racing fuehrte erstaunliche 86% aller Runden in der Saison 2023 mit Max Verstappen und Sergio Perez. Diese Dominanz uebertraf sogar McLarens 1988-Leistung (MP4/4-Aera) und Ferraris 2002-2004 Schumacher-Aera und zeigte beispiellose Kontrolle.",
          nl: "Red Bull Racing leidde een verbazingwekkende 86% van alle ronden in het 2023 seizoen met Max Verstappen en Sergio Perez. Deze dominantie overtrof zelfs McLaren's 1988 prestatie (MP4/4 tijdperk) en Ferrari's 2002-2004 Schumacher tijdperk, tonend ongekende controle."
        }
      },
      {
        question: {
          en: "Which team was the last to win a race with a naturally aspirated (non-turbo/non-hybrid) engine?",
          es: "Que equipo fue el ultimo en ganar una carrera con un motor de aspiracion natural (sin turbo/sin hibrido)?",
          de: "Welches Team war das letzte, das ein Rennen mit einem Saugmotor (ohne Turbo/ohne Hybrid) gewann?",
          nl: "Welk team was het laatste dat een race won met een natuurlijk aangezogen (niet-turbo/niet-hybride) motor?"
        },
        options: ["Ferrari (2013)", "Red Bull Racing (2013)", "McLaren (2012)", "Lotus (2013)"],
        correct: 1,
        explanation: {
          en: "Red Bull Racing's Sebastian Vettel won the 2013 Brazilian GP, the final race before F1 switched to hybrid V6 turbo engines in 2014. This marked the end of the naturally aspirated V8 era (2006-2013). Red Bull won all championships from 2010-2013 with Renault V8 engines.",
          es: "Sebastian Vettel de Red Bull Racing gano el GP de Brasil 2013, la carrera final antes de que F1 cambiara a motores turbo V6 hibridos en 2014. Esto marco el fin de la era de V8 de aspiracion natural (2006-2013). Red Bull gano todos los campeonatos de 2010-2013 con motores V8 Renault.",
          de: "Red Bull Racings Sebastian Vettel gewann den Brasilien GP 2013, das letzte Rennen bevor F1 2014 zu Hybrid-V6-Turbomotoren wechselte. Dies markierte das Ende der Saugmotor-V8-Aera (2006-2013). Red Bull gewann 2010-2013 alle Meisterschaften mit Renault-V8-Motoren.",
          nl: "Red Bull Racing's Sebastian Vettel won de 2013 Braziliaanse GP, de laatste race voordat F1 in 2014 overschakelde naar hybride V6 turbomotoren. Dit markeerde het einde van het natuurlijk aangezogen V8 tijdperk (2006-2013). Red Bull won alle kampioenschappen van 2010-2013 met Renault V8 motoren."
        }
      },
      {
        question: {
          en: "Which team holds the record for most podium finishes in F1 history?",
          es: "Que equipo tiene el record de mas podios en la historia de F1?",
          de: "Welches Team haelt den Rekord fuer die meisten Podiumsplaetze in der F1-Geschichte?",
          nl: "Welk team heeft het record voor de meeste podiumplaatsen in F1 geschiedenis?"
        },
        options: ["McLaren", "Ferrari", "Mercedes", "Red Bull"],
        correct: 1,
        explanation: {
          en: "Ferrari holds the record for most podium finishes with over 800 podiums in their F1 history. Their longevity (competing since 1950) and consistent competitiveness have allowed them to accumulate the most podiums, wins, and pole positions in F1 history.",
          es: "Ferrari tiene el record de mas podios con mas de 800 podios en su historia de F1. Su longevidad (compitiendo desde 1950) y competitividad consistente les ha permitido acumular la mayor cantidad de podios, victorias y pole positions en la historia de F1.",
          de: "Ferrari haelt den Rekord fuer die meisten Podiumsplaetze mit ueber 800 Podien in ihrer F1-Geschichte. Ihre Langlebigkeit (seit 1950 im Wettbewerb) und konstante Wettbewerbsfaehigkeit haben es ihnen ermoeglicht, die meisten Podien, Siege und Pole-Positions in der F1-Geschichte anzuhaeufen.",
          nl: "Ferrari heeft het record voor de meeste podiumplaatsen met meer dan 800 podia in hun F1 geschiedenis. Hun lange bestaan (racend sinds 1950) en consistente concurrentievermogen hebben hen in staat gesteld de meeste podia, overwinningen en pole positions in F1 geschiedenis te verzamelen."
        }
      },
      {
        question: {
          en: "Which team was the first to introduce pit-to-car radio communication in F1?",
          es: "Que equipo fue el primero en introducir comunicacion por radio del pit al auto en F1?",
          de: "Welches Team fuehrte als erstes Boxenfunk-Kommunikation in der F1 ein?",
          nl: "Welk team was het eerste dat pit-naar-auto radiocommunicatie introduceerde in F1?"
        },
        options: ["McLaren (1980s)", "Ferrari (1970s)", "Lotus (1960s)", "Williams (1980s)"],
        correct: 0,
        explanation: {
          en: "McLaren pioneered pit-to-car radio communication in the early 1980s, allowing real-time strategy discussions during races. This innovation revolutionized race strategy and team communication. By the late 1980s, all teams had adopted radio systems, which are now fundamental to modern F1 racing.",
          es: "McLaren fue pionero en comunicacion por radio del pit al auto a principios de los 80, permitiendo discusiones de estrategia en tiempo real durante las carreras. Esta innovacion revoluciono la estrategia de carrera y comunicacion del equipo. A finales de los 80, todos los equipos habian adoptado sistemas de radio, que ahora son fundamentales para las carreras modernas de F1.",
          de: "McLaren war Anfang der 1980er Pionier der Boxenfunk-Kommunikation, die Echtzeit-Strategiegespraeche waehrend der Rennen ermoeglichte. Diese Innovation revolutionierte Rennstrategie und Teamkommunikation. Ende der 1980er hatten alle Teams Funksysteme eingefuehrt, die heute grundlegend fuer modernes F1-Rennen sind.",
          nl: "McLaren was pionier van pit-naar-auto radiocommunicatie begin jaren 80, waardoor realtime strategiediscussies tijdens races mogelijk werden. Deze innovatie revolutioneerde racestrategie en teamcommunicatie. Tegen eind jaren 80 hadden alle teams radiosystemen geadopteerd, die nu fundamenteel zijn voor modern F1 racen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
