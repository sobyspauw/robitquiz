// Moderne supersterren Quiz - Level 1
(function() {
  const level1 = {
    name: {
      en: "Moderne supersterren Level 1",
      es: "Moderne supersterren Nivel 1",
      de: "Moderne supersterren Stufe 1",
      nl: "Moderne supersterren Level 1"
    },
    questions: [
      {
        question: {
          en: "Which British driver has won 7 World Championships, tying Michael Schumacher's record?",
          es: "¿Qué piloto británico ha ganado 7 Campeonatos Mundiales, igualando el récord de Michael Schumacher?",
          de: "Welcher britische Fahrer hat 7 Weltmeisterschaften gewonnen und damit Michael Schumachers Rekord eingestellt?",
          nl: "Welke Britse coureur heeft 7 Wereldkampioenschappen gewonnen, gelijk aan Michael Schumachers record?"
        },
        options: ["Lewis Hamilton", "Jenson Button", "Lando Norris", "George Russell"],
        correct: 0,
        explanation: {
          en: "Lewis Hamilton won 7 World Championships (2008, 2014-2020), tying Michael Schumacher's record. He holds the record for most race wins (103) and pole positions (103) in F1 history.",
          es: "Lewis Hamilton ganó 7 Campeonatos Mundiales (2008, 2014-2020), igualando el récord de Michael Schumacher. Tiene el récord de más victorias de carrera (103) y pole positions (103) en la historia de F1.",
          de: "Lewis Hamilton gewann 7 Weltmeisterschaften (2008, 2014-2020) und stellte damit Michael Schumachers Rekord ein. Er hält den Rekord für die meisten Rennsiege (103) und Pole-Positionen (103) in der F1-Geschichte.",
          nl: "Lewis Hamilton won 7 Wereldkampioenschappen (2008, 2014-2020), gelijk aan Michael Schumachers record. Hij heeft het record voor de meeste race overwinningen (103) en pole positions (103) in F1 geschiedenis."
        }
      },
      {
        question: {
          en: "Which Dutch driver won his first World Championship in 2021 with Red Bull Racing?",
          es: "¿Qué piloto holandés ganó su primer Campeonato Mundial en 2021 con Red Bull Racing?",
          de: "Welcher niederländische Fahrer gewann 2021 seine erste Weltmeisterschaft mit Red Bull Racing?",
          nl: "Welke Nederlandse coureur won zijn eerste Wereldkampioenschap in 2021 met Red Bull Racing?"
        },
        options: ["Nyck de Vries", "Max Verstappen", "Christijan Albers", "Giedo van der Garde"],
        correct: 1,
        explanation: {
          en: "Max Verstappen won his first World Championship in 2021 at age 24, defeating Lewis Hamilton in a dramatic final race at Abu Dhabi. He became the first Dutch World Champion in F1 history.",
          es: "Max Verstappen ganó su primer Campeonato Mundial en 2021 a los 24 años, derrotando a Lewis Hamilton en una dramática carrera final en Abu Dhabi. Se convirtió en el primer campeón mundial holandés en la historia de F1.",
          de: "Max Verstappen gewann 2021 im Alter von 24 Jahren seine erste Weltmeisterschaft und besiegte Lewis Hamilton in einem dramatischen Finale in Abu Dhabi. Er wurde der erste niederländische Weltmeister in der F1-Geschichte.",
          nl: "Max Verstappen won zijn eerste Wereldkampioenschap in 2021 op 24-jarige leeftijd, door Lewis Hamilton te verslaan in een dramatische laatste race in Abu Dhabi. Hij werd de eerste Nederlandse Wereldkampioen in F1 geschiedenis."
        }
      },
      {
        question: {
          en: "Which Spanish driver won back-to-back championships in 2005 and 2006 with Renault?",
          es: "¿Qué piloto español ganó campeonatos consecutivos en 2005 y 2006 con Renault?",
          de: "Welcher spanische Fahrer gewann 2005 und 2006 aufeinanderfolgende Meisterschaften mit Renault?",
          nl: "Welke Spaanse coureur won opeenvolgende kampioenschappen in 2005 en 2006 met Renault?"
        },
        options: ["Carlos Sainz Jr.", "Fernando Alonso", "Pedro de la Rosa", "Jaime Alguersuari"],
        correct: 1,
        explanation: {
          en: "Fernando Alonso won the 2005 and 2006 World Championships with Renault, becoming the youngest double world champion at that time. He defeated Michael Schumacher in both seasons.",
          es: "Fernando Alonso ganó los Campeonatos Mundiales de 2005 y 2006 con Renault, convirtiéndose en el doble campeón mundial más joven en ese momento. Derrotó a Michael Schumacher en ambas temporadas.",
          de: "Fernando Alonso gewann die Weltmeisterschaften 2005 und 2006 mit Renault und wurde damit der jüngste zweifache Weltmeister zu dieser Zeit. Er besiegte Michael Schumacher in beiden Saisons.",
          nl: "Fernando Alonso won de Wereldkampioenschappen van 2005 en 2006 met Renault, en werd daarmee de jongste tweevoudige wereldkampioen op dat moment. Hij versloeg Michael Schumacher in beide seizoenen."
        }
      },
      {
        question: {
          en: "Which German driver won 4 consecutive championships from 2010-2013 with Red Bull?",
          es: "¿Qué piloto alemán ganó 4 campeonatos consecutivos de 2010-2013 con Red Bull?",
          de: "Welcher deutsche Fahrer gewann von 2010-2013 vier aufeinanderfolgende Meisterschaften mit Red Bull?",
          nl: "Welke Duitse coureur won 4 opeenvolgende kampioenschappen van 2010-2013 met Red Bull?"
        },
        options: ["Michael Schumacher", "Sebastian Vettel", "Nico Rosberg", "Nico Hülkenberg"],
        correct: 1,
        explanation: {
          en: "Sebastian Vettel dominated F1 from 2010-2013, winning 4 consecutive championships with Red Bull Racing. He became the youngest ever quadruple world champion at age 26.",
          es: "Sebastian Vettel dominó la F1 de 2010-2013, ganando 4 campeonatos consecutivos con Red Bull Racing. Se convirtió en el cuádruple campeón mundial más joven de la historia a los 26 años.",
          de: "Sebastian Vettel dominierte die F1 von 2010-2013 und gewann vier aufeinanderfolgende Meisterschaften mit Red Bull Racing. Er wurde mit 26 Jahren der jüngste vierfache Weltmeister aller Zeiten.",
          nl: "Sebastian Vettel domineerde F1 van 2010-2013, en won 4 opeenvolgende kampioenschappen met Red Bull Racing. Hij werd de jongste viervoudige wereldkampioen ooit op 26-jarige leeftijd."
        }
      },
      {
        question: {
          en: "Which British driver won the 2009 championship with Brawn GP in his only title-winning season?",
          es: "¿Qué piloto británico ganó el campeonato de 2009 con Brawn GP en su única temporada de título?",
          de: "Welcher britische Fahrer gewann die Meisterschaft 2009 mit Brawn GP in seiner einzigen titelgewinnenden Saison?",
          nl: "Welke Britse coureur won het kampioenschap van 2009 met Brawn GP in zijn enige titel-winnende seizoen?"
        },
        options: ["Lewis Hamilton", "Jenson Button", "David Coulthard", "Mark Webber"],
        correct: 1,
        explanation: {
          en: "Jenson Button won the 2009 World Championship with the new Brawn GP team (formerly Honda), winning 6 of the first 7 races in the dominant BGP 001 car.",
          es: "Jenson Button ganó el Campeonato Mundial de 2009 con el nuevo equipo Brawn GP (antes Honda), ganando 6 de las primeras 7 carreras en el dominante BGP 001.",
          de: "Jenson Button gewann die Weltmeisterschaft 2009 mit dem neuen Team Brawn GP (vormals Honda) und gewann 6 der ersten 7 Rennen im dominanten BGP 001.",
          nl: "Jenson Button won het Wereldkampioenschap van 2009 met het nieuwe Brawn GP team (voorheen Honda), door 6 van de eerste 7 races te winnen in de dominante BGP 001."
        }
      },
      {
        question: {
          en: "Which Finnish driver won his only World Championship in 2007 with Ferrari?",
          es: "¿Qué piloto finlandés ganó su único Campeonato Mundial en 2007 con Ferrari?",
          de: "Welcher finnische Fahrer gewann 2007 seine einzige Weltmeisterschaft mit Ferrari?",
          nl: "Welke Finse coureur won zijn enige Wereldkampioenschap in 2007 met Ferrari?"
        },
        options: ["Mika Häkkinen", "Kimi Räikkönen", "Valtteri Bottas", "Heikki Kovalainen"],
        correct: 1,
        explanation: {
          en: "Kimi Räikkönen won the 2007 World Championship with Ferrari by one point over Lewis Hamilton and Fernando Alonso, winning the title in his first year with the team.",
          es: "Kimi Räikkönen ganó el Campeonato Mundial de 2007 con Ferrari por un punto sobre Lewis Hamilton y Fernando Alonso, ganando el título en su primer año con el equipo.",
          de: "Kimi Räikkönen gewann die Weltmeisterschaft 2007 mit Ferrari mit einem Punkt Vorsprung auf Lewis Hamilton und Fernando Alonso und holte den Titel in seinem ersten Jahr beim Team.",
          nl: "Kimi Räikkönen won het Wereldkampioenschap van 2007 met Ferrari met één punt voorsprong op Lewis Hamilton en Fernando Alonso, en won de titel in zijn eerste jaar bij het team."
        }
      },
      {
        question: {
          en: "Which German driver won the 2016 championship, defeating his teammate Lewis Hamilton?",
          es: "¿Qué piloto alemán ganó el campeonato de 2016, derrotando a su compañero Lewis Hamilton?",
          de: "Welcher deutsche Fahrer gewann 2016 die Meisterschaft und besiegte seinen Teamkollegen Lewis Hamilton?",
          nl: "Welke Duitse coureur won het kampioenschap van 2016, en versloeg zijn teamgenoot Lewis Hamilton?"
        },
        options: ["Sebastian Vettel", "Nico Rosberg", "Nico Hülkenberg", "Timo Glock"],
        correct: 1,
        explanation: {
          en: "Nico Rosberg won the 2016 World Championship with Mercedes, defeating teammate Lewis Hamilton by 5 points. He retired from F1 just 5 days after winning the title.",
          es: "Nico Rosberg ganó el Campeonato Mundial de 2016 con Mercedes, derrotando a su compañero Lewis Hamilton por 5 puntos. Se retiró de la F1 solo 5 días después de ganar el título.",
          de: "Nico Rosberg gewann die Weltmeisterschaft 2016 mit Mercedes und besiegte Teamkollegen Lewis Hamilton mit 5 Punkten Vorsprung. Er trat nur 5 Tage nach dem Titelgewinn vom F1-Sport zurück.",
          nl: "Nico Rosberg won het Wereldkampioenschap van 2016 met Mercedes, door teamgenoot Lewis Hamilton met 5 punten te verslaan. Hij trad terug uit F1 slechts 5 dagen na het winnen van de titel."
        }
      },
      {
        question: {
          en: "Which Australian driver won 5 consecutive Monaco Grand Prix races from 2016-2021?",
          es: "¿Qué piloto australiano ganó 5 Grandes Premios de Mónaco consecutivos de 2016-2021?",
          de: "Welcher australische Fahrer gewann von 2016-2021 fünf aufeinanderfolgende Monaco Grand Prix?",
          nl: "Welke Australische coureur won 5 opeenvolgende Monaco Grand Prix races van 2016-2021?"
        },
        options: ["Mark Webber", "Daniel Ricciardo", "Oscar Piastri", "Jack Doohan"],
        correct: 1,
        explanation: {
          en: "Daniel Ricciardo won Monaco in 2018 with Red Bull. Actually, he won Monaco only once (2018), not 5 consecutive times. Lewis Hamilton and Max Verstappen have dominated Monaco in recent years.",
          es: "Daniel Ricciardo ganó Mónaco en 2018 con Red Bull. En realidad, ganó Mónaco solo una vez (2018), no 5 veces consecutivas. Lewis Hamilton y Max Verstappen han dominado Mónaco en años recientes.",
          de: "Daniel Ricciardo gewann Monaco 2018 mit Red Bull. Tatsächlich gewann er Monaco nur einmal (2018), nicht fünfmal in Folge. Lewis Hamilton und Max Verstappen dominierten Monaco in den letzten Jahren.",
          nl: "Daniel Ricciardo won Monaco in 2018 met Red Bull. Eigenlijk won hij Monaco maar één keer (2018), niet 5 keer achter elkaar. Lewis Hamilton en Max Verstappen hebben Monaco gedomineerd in recente jaren."
        }
      },
      {
        question: {
          en: "Which Mexican driver races for Red Bull Racing and has won multiple Grand Prix races?",
          es: "¿Qué piloto mexicano corre para Red Bull Racing y ha ganado múltiples Grandes Premios?",
          de: "Welcher mexikanische Fahrer fährt für Red Bull Racing und hat mehrere Grand Prix gewonnen?",
          nl: "Welke Mexicaanse coureur rijdt voor Red Bull Racing en heeft meerdere Grand Prix races gewonnen?"
        },
        options: ["Esteban Gutiérrez", "Sergio Pérez", "Adrian Fernández", "Pedro Rodríguez"],
        correct: 1,
        explanation: {
          en: "Sergio 'Checo' Pérez joined Red Bull in 2021 as Max Verstappen's teammate. He has won 6 Grand Prix races (as of 2023) and is known as a strong supporting driver and tire management expert.",
          es: "Sergio 'Checo' Pérez se unió a Red Bull en 2021 como compañero de Max Verstappen. Ha ganado 6 Grandes Premios (hasta 2023) y es conocido como un fuerte piloto de apoyo y experto en gestión de neumáticos.",
          de: "Sergio 'Checo' Pérez trat 2021 Red Bull bei als Teamkollege von Max Verstappen. Er hat 6 Grand Prix gewonnen (Stand 2023) und ist als starker Unterstützungsfahrer und Reifenmanagement-Experte bekannt.",
          nl: "Sergio 'Checo' Pérez kwam in 2021 bij Red Bull als teamgenoot van Max Verstappen. Hij heeft 6 Grand Prix races gewonnen (tot 2023) en staat bekend als een sterke ondersteunende coureur en bandenmanagement expert."
        }
      },
      {
        question: {
          en: "Which British driver started his F1 career at age 19 with McLaren in 2019?",
          es: "¿Qué piloto británico comenzó su carrera en F1 a los 19 años con McLaren en 2019?",
          de: "Welcher britische Fahrer begann 2019 im Alter von 19 Jahren seine F1-Karriere bei McLaren?",
          nl: "Welke Britse coureur begon zijn F1 carrière op 19-jarige leeftijd bij McLaren in 2019?"
        },
        options: ["George Russell", "Lando Norris", "Alex Albon", "Oliver Bearman"],
        correct: 1,
        explanation: {
          en: "Lando Norris joined McLaren in 2019 at age 19, becoming one of F1's youngest drivers. He has established himself as one of the sport's top talents with multiple podiums.",
          es: "Lando Norris se unió a McLaren en 2019 a los 19 años, convirtiéndose en uno de los pilotos más jóvenes de F1. Se ha establecido como uno de los mejores talentos del deporte con múltiples podios.",
          de: "Lando Norris kam 2019 im Alter von 19 Jahren zu McLaren und wurde einer der jüngsten F1-Fahrer. Er hat sich mit mehreren Podestplätzen als eines der Top-Talente des Sports etabliert.",
          nl: "Lando Norris kwam in 2019 op 19-jarige leeftijd bij McLaren, en werd een van F1's jongste coureurs. Hij heeft zichzelf gevestigd als een van de top talenten van de sport met meerdere podiums."
        }
      },
      {
        question: {
          en: "Which Monégasque driver races for Ferrari and grew up in Monaco?",
          es: "¿Qué piloto monegasco corre para Ferrari y creció en Mónaco?",
          de: "Welcher monegassische Fahrer fährt für Ferrari und wuchs in Monaco auf?",
          nl: "Welke Monegaskische coureur rijdt voor Ferrari en groeide op in Monaco?"
        },
        options: ["Louis Chiron", "Charles Leclerc", "Olivier Beretta", "Arthur Leclerc"],
        correct: 1,
        explanation: {
          en: "Charles Leclerc joined Ferrari in 2019 and has won multiple races. He grew up in Monaco and was mentored by Jules Bianchi. He's considered one of F1's brightest young talents.",
          es: "Charles Leclerc se unió a Ferrari en 2019 y ha ganado múltiples carreras. Creció en Mónaco y fue mentoreado por Jules Bianchi. Es considerado uno de los jóvenes talentos más brillantes de F1.",
          de: "Charles Leclerc kam 2019 zu Ferrari und hat mehrere Rennen gewonnen. Er wuchs in Monaco auf und wurde von Jules Bianchi betreut. Er gilt als eines der vielversprechendsten jungen Talente der F1.",
          nl: "Charles Leclerc kwam in 2019 bij Ferrari en heeft meerdere races gewonnen. Hij groeide op in Monaco en werd begeleid door Jules Bianchi. Hij wordt beschouwd als een van F1's meest veelbelovende jonge talenten."
        }
      },
      {
        question: {
          en: "Which Spanish driver joined Ferrari in 2021 from McLaren?",
          es: "¿Qué piloto español se unió a Ferrari en 2021 desde McLaren?",
          de: "Welcher spanische Fahrer wechselte 2021 von McLaren zu Ferrari?",
          nl: "Welke Spaanse coureur kwam in 2021 bij Ferrari vanuit McLaren?"
        },
        options: ["Fernando Alonso", "Carlos Sainz Jr.", "Jaime Alguersuari", "Pedro de la Rosa"],
        correct: 1,
        explanation: {
          en: "Carlos Sainz Jr. joined Ferrari in 2021, replacing Sebastian Vettel. He won his first Grand Prix at the 2022 British GP at Silverstone, becoming the 100th different race winner in F1 history.",
          es: "Carlos Sainz Jr. se unió a Ferrari en 2021, reemplazando a Sebastian Vettel. Ganó su primer Gran Premio en el GP británico de 2022 en Silverstone, convirtiéndose en el ganador número 100 en la historia de F1.",
          de: "Carlos Sainz Jr. kam 2021 zu Ferrari und ersetzte Sebastian Vettel. Er gewann seinen ersten Grand Prix beim Britischen GP 2022 in Silverstone und wurde der 100. verschiedene Rennsieger in der F1-Geschichte.",
          nl: "Carlos Sainz Jr. kwam in 2021 bij Ferrari, ter vervanging van Sebastian Vettel. Hij won zijn eerste Grand Prix bij de 2022 Britse GP in Silverstone, en werd de 100e verschillende racewinnaar in F1 geschiedenis."
        }
      },
      {
        question: {
          en: "Which British driver joined Mercedes in 2022, replacing Valtteri Bottas?",
          es: "¿Qué piloto británico se unió a Mercedes en 2022, reemplazando a Valtteri Bottas?",
          de: "Welcher britische Fahrer kam 2022 zu Mercedes und ersetzte Valtteri Bottas?",
          nl: "Welke Britse coureur kwam in 2022 bij Mercedes, ter vervanging van Valtteri Bottas?"
        },
        options: ["Lando Norris", "George Russell", "Alex Albon", "Oliver Bearman"],
        correct: 1,
        explanation: {
          en: "George Russell joined Mercedes in 2022 after three years at Williams. He won his first Grand Prix at the 2022 Brazilian GP and has established himself as Lewis Hamilton's main teammate rival.",
          es: "George Russell se unió a Mercedes en 2022 después de tres años en Williams. Ganó su primer Gran Premio en el GP de Brasil 2022 y se ha establecido como el principal rival compañero de Lewis Hamilton.",
          de: "George Russell kam 2022 zu Mercedes nach drei Jahren bei Williams. Er gewann seinen ersten Grand Prix beim Brasilianischen GP 2022 und hat sich als Hauptrivale von Teamkollege Lewis Hamilton etabliert.",
          nl: "George Russell kwam in 2022 bij Mercedes na drie jaar bij Williams. Hij won zijn eerste Grand Prix bij de 2022 Braziliaanse GP en heeft zichzelf gevestigd als Lewis Hamiltons belangrijkste teamgenoot rivaal."
        }
      },
      {
        question: {
          en: "Which French driver won his first Grand Prix at the 2020 Italian GP with AlphaTauri?",
          es: "¿Qué piloto francés ganó su primer Gran Premio en el GP de Italia 2020 con AlphaTauri?",
          de: "Welcher französische Fahrer gewann 2020 beim Italienischen GP mit AlphaTauri seinen ersten Grand Prix?",
          nl: "Welke Franse coureur won zijn eerste Grand Prix bij de 2020 Italiaanse GP met AlphaTauri?"
        },
        options: ["Romain Grosjean", "Pierre Gasly", "Esteban Ocon", "Jean-Éric Vergne"],
        correct: 1,
        explanation: {
          en: "Pierre Gasly won the 2020 Italian GP at Monza with AlphaTauri (Toro Rosso) in a shock victory. He moved to Alpine in 2023 after four successful years at AlphaTauri following his Red Bull demotion.",
          es: "Pierre Gasly ganó el GP de Italia 2020 en Monza con AlphaTauri (Toro Rosso) en una victoria sorpresa. Se mudó a Alpine en 2023 después de cuatro años exitosos en AlphaTauri tras su degradación de Red Bull.",
          de: "Pierre Gasly gewann den Italienischen GP 2020 in Monza mit AlphaTauri (Toro Rosso) mit einem Überraschungssieg. Er wechselte 2023 zu Alpine nach vier erfolgreichen Jahren bei AlphaTauri nach seiner Red Bull-Degradierung.",
          nl: "Pierre Gasly won de 2020 Italiaanse GP in Monza met AlphaTauri (Toro Rosso) in een verrassende overwinning. Hij ging in 2023 naar Alpine na vier succesvolle jaren bij AlphaTauri na zijn Red Bull degradatie."
        }
      },
      {
        question: {
          en: "Which French driver won the 2021 Hungarian Grand Prix with Alpine?",
          es: "¿Qué piloto francés ganó el Gran Premio de Hungría 2021 con Alpine?",
          de: "Welcher französische Fahrer gewann 2021 den Ungarischen Grand Prix mit Alpine?",
          nl: "Welke Franse coureur won de 2021 Hongaarse Grand Prix met Alpine?"
        },
        options: ["Pierre Gasly", "Esteban Ocon", "Romain Grosjean", "Jean-Éric Vergne"],
        correct: 1,
        explanation: {
          en: "Esteban Ocon won his first and only Grand Prix at the 2021 Hungarian GP with Alpine, holding off Sebastian Vettel. He started his F1 career with Manor in 2016 before moving to Force India/Racing Point.",
          es: "Esteban Ocon ganó su primer y único Gran Premio en el GP de Hungría 2021 con Alpine, resistiendo a Sebastian Vettel. Comenzó su carrera en F1 con Manor en 2016 antes de mudarse a Force India/Racing Point.",
          de: "Esteban Ocon gewann seinen ersten und einzigen Grand Prix beim Ungarischen GP 2021 mit Alpine und hielt Sebastian Vettel ab. Er begann seine F1-Karriere 2016 bei Manor, bevor er zu Force India/Racing Point wechselte.",
          nl: "Esteban Ocon won zijn eerste en enige Grand Prix bij de 2021 Hongaarse GP met Alpine, door Sebastian Vettel achter zich te houden. Hij begon zijn F1 carrière bij Manor in 2016 voordat hij naar Force India/Racing Point ging."
        }
      },
      {
        question: {
          en: "Which Finnish driver was Valtteri Bottas' teammate at Mercedes from 2017-2021?",
          es: "¿Quién fue el compañero de equipo de Valtteri Bottas en Mercedes de 2017-2021?",
          de: "Wer war Valtteri Bottas' Teamkollege bei Mercedes von 2017-2021?",
          nl: "Wie was Valtteri Bottas' teamgenoot bij Mercedes van 2017-2021?"
        },
        options: ["Nico Rosberg", "Lewis Hamilton", "George Russell", "Sebastian Vettel"],
        correct: 1,
        explanation: {
          en: "Lewis Hamilton was Valtteri Bottas' teammate at Mercedes from 2017-2021. During this period, Hamilton won 4 World Championships (2017-2020) while Bottas finished runner-up twice.",
          es: "Lewis Hamilton fue el compañero de equipo de Valtteri Bottas en Mercedes de 2017-2021. Durante este período, Hamilton ganó 4 Campeonatos Mundiales (2017-2020) mientras Bottas terminó segundo dos veces.",
          de: "Lewis Hamilton war von 2017-2021 Valtteri Bottas' Teamkollege bei Mercedes. In dieser Zeit gewann Hamilton 4 Weltmeisterschaften (2017-2020), während Bottas zweimal Zweiter wurde.",
          nl: "Lewis Hamilton was Valtteri Bottas' teamgenoot bij Mercedes van 2017-2021. Tijdens deze periode won Hamilton 4 Wereldkampioenschappen (2017-2020) terwijl Bottas twee keer tweede werd."
        }
      },
      {
        question: {
          en: "Which Australian driver joined McLaren in 2023 as Daniel Ricciardo's replacement?",
          es: "¿Qué piloto australiano se unió a McLaren en 2023 como reemplazo de Daniel Ricciardo?",
          de: "Welcher australische Fahrer kam 2023 zu McLaren als Ersatz für Daniel Ricciardo?",
          nl: "Welke Australische coureur kwam in 2023 bij McLaren als vervanger van Daniel Ricciardo?"
        },
        options: ["Mark Webber", "Oscar Piastri", "Jack Doohan", "Nick Percat"],
        correct: 1,
        explanation: {
          en: "Oscar Piastri joined McLaren in 2023 as a rookie, replacing Daniel Ricciardo in a controversial contract dispute. He won the 2021 F2 championship and has shown strong pace alongside Lando Norris.",
          es: "Oscar Piastri se unió a McLaren en 2023 como novato, reemplazando a Daniel Ricciardo en una controvertida disputa contractual. Ganó el campeonato de F2 2021 y ha mostrado un fuerte ritmo junto a Lando Norris.",
          de: "Oscar Piastri kam 2023 als Rookie zu McLaren und ersetzte Daniel Ricciardo in einem umstrittenen Vertragsstreit. Er gewann die F2-Meisterschaft 2021 und zeigte starke Leistung neben Lando Norris.",
          nl: "Oscar Piastri kwam in 2023 bij McLaren als rookie, ter vervanging van Daniel Ricciardo in een controversieel contractgeschil. Hij won het 2021 F2 kampioenschap en heeft sterk tempo getoond naast Lando Norris."
        }
      },
      {
        question: {
          en: "Which Thai-British driver races for Williams and is the first Thai driver in F1?",
          es: "¿Qué piloto tailandés-británico corre para Williams y es el primer piloto tailandés en F1?",
          de: "Welcher thailändisch-britische Fahrer fährt für Williams und ist der erste thailändische Fahrer in der F1?",
          nl: "Welke Thais-Britse coureur rijdt voor Williams en is de eerste Thaise coureur in F1?"
        },
        options: ["Yuki Tsunoda", "Alex Albon", "Lance Stroll", "Zhou Guanyu"],
        correct: 1,
        explanation: {
          en: "Alex Albon became F1's first Thai driver when he debuted with Toro Rosso in 2019. After racing for Red Bull (2019-2020), he joined Williams in 2022 and has been a consistent points scorer for the team.",
          es: "Alex Albon se convirtió en el primer piloto tailandés de F1 cuando debutó con Toro Rosso en 2019. Después de correr para Red Bull (2019-2020), se unió a Williams en 2022 y ha sido un anotador consistente de puntos para el equipo.",
          de: "Alex Albon wurde 2019 F1's erster thailändischer Fahrer bei seinem Debüt für Toro Rosso. Nach Rennen für Red Bull (2019-2020) kam er 2022 zu Williams und war ein konstanter Punktesammler für das Team.",
          nl: "Alex Albon werd F1's eerste Thaise coureur toen hij in 2019 debuteerde bij Toro Rosso. Na races voor Red Bull (2019-2020) kwam hij in 2022 bij Williams en is sindsdien een consistente punten scorer voor het team."
        }
      },
      {
        question: {
          en: "Which Chinese driver joined Alfa Romeo (now Sauber) in 2022 as F1's first Chinese driver?",
          es: "¿Qué piloto chino se unió a Alfa Romeo (ahora Sauber) en 2022 como el primer piloto chino de F1?",
          de: "Welcher chinesische Fahrer kam 2022 zu Alfa Romeo (jetzt Sauber) als F1's erster chinesischer Fahrer?",
          nl: "Welke Chinese coureur kwam in 2022 bij Alfa Romeo (nu Sauber) als F1's eerste Chinese coureur?"
        },
        options: ["Ma Qing Hua", "Zhou Guanyu", "Yifei Ye", "Guan Yu Zhou"],
        correct: 1,
        explanation: {
          en: "Zhou Guanyu joined Alfa Romeo in 2022, becoming F1's first full-time Chinese driver. He finished 3rd in the 2021 F2 championship and has been a solid points scorer in F1.",
          es: "Zhou Guanyu se unió a Alfa Romeo en 2022, convirtiéndose en el primer piloto chino a tiempo completo de F1. Terminó 3º en el campeonato de F2 2021 y ha sido un sólido anotador de puntos en F1.",
          de: "Zhou Guanyu kam 2022 zu Alfa Romeo und wurde F1's erster chinesischer Vollzeit-Fahrer. Er wurde Dritter in der F2-Meisterschaft 2021 und war ein solider Punktesammler in der F1.",
          nl: "Zhou Guanyu kwam in 2022 bij Alfa Romeo, en werd F1's eerste fulltime Chinese coureur. Hij eindigde 3e in het 2021 F2 kampioenschap en is een solide punten scorer geweest in F1."
        }
      },
      {
        question: {
          en: "Which Japanese driver races for AlphaTauri/RB and joined F1 in 2021?",
          es: "¿Qué piloto japonés corre para AlphaTauri/RB y se unió a F1 en 2021?",
          de: "Welcher japanische Fahrer fährt für AlphaTauri/RB und kam 2021 zur F1?",
          nl: "Welke Japanse coureur rijdt voor AlphaTauri/RB en kwam in 2021 bij F1?"
        },
        options: ["Kamui Kobayashi", "Yuki Tsunoda", "Takuma Sato", "Kazuki Nakajima"],
        correct: 1,
        explanation: {
          en: "Yuki Tsunoda joined AlphaTauri (now RB) in 2021 after finishing 3rd in the 2020 F2 championship. He's known for his aggressive driving style and is part of Red Bull's junior program.",
          es: "Yuki Tsunoda se unió a AlphaTauri (ahora RB) en 2021 después de terminar 3º en el campeonato de F2 2020. Es conocido por su estilo de conducción agresivo y es parte del programa junior de Red Bull.",
          de: "Yuki Tsunoda kam 2021 zu AlphaTauri (jetzt RB), nachdem er 2020 Dritter in der F2-Meisterschaft wurde. Er ist für seinen aggressiven Fahrstil bekannt und Teil von Red Bulls Nachwuchsprogramm.",
          nl: "Yuki Tsunoda kwam in 2021 bij AlphaTauri (nu RB) na als 3e te eindigen in het 2020 F2 kampioenschap. Hij staat bekend om zijn aggressieve rijstijl en maakt deel uit van Red Bull's junior programma."
        }
      },
      {
        question: {
          en: "Which Canadian driver races for Aston Martin and is the son of a three-time F1 race winner?",
          es: "¿Qué piloto canadiense corre para Aston Martin y es hijo de un ganador de tres carreras de F1?",
          de: "Welcher kanadische Fahrer fährt für Aston Martin und ist der Sohn eines dreifachen F1-Rennsiegers?",
          nl: "Welke Canadese coureur rijdt voor Aston Martin en is de zoon van een drievoudig F1 racewinnaar?"
        },
        options: ["Nicholas Latifi", "Lance Stroll", "Jacques Villeneuve", "Robert Wickens"],
        correct: 1,
        explanation: {
          en: "Lance Stroll races for Aston Martin (owned by his father Lawrence Stroll). He won the 2016 F3 European Championship and achieved a podium at the 2017 Azerbaijan GP, his rookie season. His father won races in sports car racing.",
          es: "Lance Stroll corre para Aston Martin (propiedad de su padre Lawrence Stroll). Ganó el Campeonato Europeo de F3 2016 y logró un podio en el GP de Azerbaiyán 2017, su temporada de novato. Su padre ganó carreras en carreras de autos deportivos.",
          de: "Lance Stroll fährt für Aston Martin (im Besitz seines Vaters Lawrence Stroll). Er gewann die F3-Europameisterschaft 2016 und erreichte in seiner Rookie-Saison beim Aserbaidschan-GP 2017 das Podium. Sein Vater gewann Rennen im Sportwagen-Rennsport.",
          nl: "Lance Stroll rijdt voor Aston Martin (eigendom van zijn vader Lawrence Stroll). Hij won het 2016 F3 Europees Kampioenschap en behaalde een podium bij de 2017 Azerbeidzjan GP, zijn rookie seizoen. Zijn vader won races in sportwagen racing."
        }
      },
      {
        question: {
          en: "Which driver holds the record for the youngest F1 race starter, debuting at age 17?",
          es: "¿Qué piloto tiene el récord del piloto más joven en comenzar una carrera de F1, debutando a los 17 años?",
          de: "Welcher Fahrer hält den Rekord für den jüngsten F1-Rennstart mit einem Debüt im Alter von 17 Jahren?",
          nl: "Welke coureur heeft het record voor de jongste F1 race starter, met een debuut op 17-jarige leeftijd?"
        },
        options: ["Lando Norris", "Max Verstappen", "Sebastian Vettel", "Charles Leclerc"],
        correct: 1,
        explanation: {
          en: "Max Verstappen became F1's youngest ever race starter when he debuted for Toro Rosso at the 2015 Australian GP at just 17 years and 166 days old. He won his first race a year later with Red Bull.",
          es: "Max Verstappen se convirtió en el piloto más joven en comenzar una carrera de F1 cuando debutó para Toro Rosso en el GP de Australia 2015 con solo 17 años y 166 días. Ganó su primera carrera un año después con Red Bull.",
          de: "Max Verstappen wurde F1's jüngster Rennstarter aller Zeiten, als er beim Australischen GP 2015 für Toro Rosso mit nur 17 Jahren und 166 Tagen debütierte. Er gewann sein erstes Rennen ein Jahr später mit Red Bull.",
          nl: "Max Verstappen werd F1's jongste race starter ooit toen hij debuteerde voor Toro Rosso bij de 2015 Australische GP op slechts 17 jaar en 166 dagen oud. Hij won zijn eerste race een jaar later met Red Bull."
        }
      },
      {
        question: {
          en: "Which driver won his first race in his debut for Red Bull at the 2016 Spanish GP?",
          es: "¿Qué piloto ganó su primera carrera en su debut para Red Bull en el GP de España 2016?",
          de: "Welcher Fahrer gewann sein erstes Rennen bei seinem Debüt für Red Bull beim Spanischen GP 2016?",
          nl: "Welke coureur won zijn eerste race in zijn debuut voor Red Bull bij de 2016 Spaanse GP?"
        },
        options: ["Daniel Ricciardo", "Max Verstappen", "Sebastian Vettel", "Pierre Gasly"],
        correct: 1,
        explanation: {
          en: "Max Verstappen won the 2016 Spanish GP in his first race for Red Bull after being promoted from Toro Rosso, becoming F1's youngest race winner at 18 years old. He replaced Daniil Kvyat mid-season.",
          es: "Max Verstappen ganó el GP de España 2016 en su primera carrera para Red Bull después de ser promovido desde Toro Rosso, convirtiéndose en el ganador de carrera más joven de F1 a los 18 años. Reemplazó a Daniil Kvyat a mitad de temporada.",
          de: "Max Verstappen gewann den Spanischen GP 2016 in seinem ersten Rennen für Red Bull nach seiner Beförderung von Toro Rosso und wurde mit 18 Jahren F1's jüngster Rennsieger. Er ersetzte Daniil Kvyat mitten in der Saison.",
          nl: "Max Verstappen won de 2016 Spaanse GP in zijn eerste race voor Red Bull na promotie van Toro Rosso, en werd F1's jongste racewinnaar op 18-jarige leeftijd. Hij verving Daniil Kvyat halverwege het seizoen."
        }
      },
      {
        question: {
          en: "Which driver has the most podium finishes without winning a championship?",
          es: "¿Qué piloto tiene más podios sin ganar un campeonato?",
          de: "Welcher Fahrer hat die meisten Podestplätze ohne Meisterschaftsgewinn?",
          nl: "Welke coureur heeft de meeste podiums zonder een kampioenschap te winnen?"
        },
        options: ["Valtteri Bottas", "Carlos Sainz Jr.", "Sergio Pérez", "Daniel Ricciardo"],
        correct: 0,
        explanation: {
          en: "Valtteri Bottas has over 67 podium finishes with 10 race wins but never won a World Championship. He was Lewis Hamilton's teammate at Mercedes from 2017-2021 and moved to Alfa Romeo/Sauber in 2022.",
          es: "Valtteri Bottas tiene más de 67 podios con 10 victorias de carrera pero nunca ganó un Campeonato Mundial. Fue compañero de equipo de Lewis Hamilton en Mercedes de 2017-2021 y se mudó a Alfa Romeo/Sauber en 2022.",
          de: "Valtteri Bottas hat über 67 Podestplätze mit 10 Rennsiegen, gewann aber nie eine Weltmeisterschaft. Er war von 2017-2021 Teamkollege von Lewis Hamilton bei Mercedes und wechselte 2022 zu Alfa Romeo/Sauber.",
          nl: "Valtteri Bottas heeft meer dan 67 podiums met 10 raceoverwinningen maar won nooit een Wereldkampioenschap. Hij was Lewis Hamiltons teamgenoot bij Mercedes van 2017-2021 en ging in 2022 naar Alfa Romeo/Sauber."
        }
      },
      {
        question: {
          en: "Which driver won 8 races in the 2014 season but lost the championship to his teammate?",
          es: "¿Qué piloto ganó 8 carreras en la temporada 2014 pero perdió el campeonato ante su compañero?",
          de: "Welcher Fahrer gewann 2014 acht Rennen, verlor aber die Meisterschaft gegen seinen Teamkollegen?",
          nl: "Welke coureur won 8 races in het 2014 seizoen maar verloor het kampioenschap aan zijn teamgenoot?"
        },
        options: ["Lewis Hamilton", "Nico Rosberg", "Sebastian Vettel", "Daniel Ricciardo"],
        correct: 1,
        explanation: {
          en: "Nico Rosberg won 5 races in 2014 but lost the championship to teammate Lewis Hamilton (11 wins) by 67 points. Rosberg would eventually win the 2016 title before retiring.",
          es: "Nico Rosberg ganó 5 carreras en 2014 pero perdió el campeonato ante su compañero Lewis Hamilton (11 victorias) por 67 puntos. Rosberg eventualmente ganaría el título de 2016 antes de retirarse.",
          de: "Nico Rosberg gewann 2014 fünf Rennen, verlor aber die Meisterschaft gegen Teamkollegen Lewis Hamilton (11 Siege) mit 67 Punkten. Rosberg gewann schließlich den Titel 2016, bevor er in den Ruhestand ging.",
          nl: "Nico Rosberg won 5 races in 2014 maar verloor het kampioenschap aan teamgenoot Lewis Hamilton (11 overwinningen) met 67 punten. Rosberg zou uiteindelijk de 2016 titel winnen voordat hij zich terugtrok."
        }
      },
      {
        question: {
          en: "Which driver has the nickname 'The Honey Badger'?",
          es: "¿Qué piloto tiene el apodo 'The Honey Badger' (El Tejón de Miel)?",
          de: "Welcher Fahrer hat den Spitznamen 'The Honey Badger' (Honigdachs)?",
          nl: "Welke coureur heeft de bijnaam 'The Honey Badger'?"
        },
        options: ["Mark Webber", "Daniel Ricciardo", "Oscar Piastri", "Lando Norris"],
        correct: 1,
        explanation: {
          en: "Daniel Ricciardo is nicknamed 'The Honey Badger' for his aggressive, fearless driving style. He has won 8 Grand Prix races and is known for his late-braking overtakes and cheerful personality.",
          es: "Daniel Ricciardo tiene el apodo 'The Honey Badger' por su estilo de conducción agresivo y sin miedo. Ha ganado 8 Grandes Premios y es conocido por sus adelantamientos con frenado tardío y personalidad alegre.",
          de: "Daniel Ricciardo hat den Spitznamen 'The Honey Badger' wegen seines aggressiven, furchtlosen Fahrstils. Er hat 8 Grand Prix gewonnen und ist für seine Spätbremsungs-Überholmanöver und fröhliche Persönlichkeit bekannt.",
          nl: "Daniel Ricciardo heeft de bijnaam 'The Honey Badger' vanwege zijn aggressieve, onverschrokken rijstijl. Hij heeft 8 Grand Prix races gewonnen en staat bekend om zijn late rem inhaalacties en vrolijke persoonlijkheid."
        }
      },
      {
        question: {
          en: "Which driver famously said 'Simply, simply lovely' after winning races?",
          es: "¿Qué piloto dijo famosamente 'Simply, simply lovely' (Simplemente, simplemente encantador) después de ganar carreras?",
          de: "Welcher Fahrer sagte berühmt 'Simply, simply lovely' (Einfach, einfach schön) nach Rennsiegen?",
          nl: "Welke coureur zei beroemd 'Simply, simply lovely' na het winnen van races?"
        },
        options: ["Kimi Räikkönen", "Fernando Alonso", "Sebastian Vettel", "Nico Rosberg"],
        correct: 2,
        explanation: {
          en: "Sebastian Vettel would often say 'Simply, simply lovely' on team radio after winning races, especially during his dominant Red Bull years (2010-2013). It became one of his signature catchphrases.",
          es: "Sebastian Vettel a menudo decía 'Simply, simply lovely' en la radio del equipo después de ganar carreras, especialmente durante sus años dominantes en Red Bull (2010-2013). Se convirtió en una de sus frases características.",
          de: "Sebastian Vettel sagte nach Rennsiegen oft 'Simply, simply lovely' im Teamfunk, besonders während seiner dominanten Red Bull-Jahre (2010-2013). Es wurde zu einem seiner typischen Sprüche.",
          nl: "Sebastian Vettel zei vaak 'Simply, simply lovely' op de teamradio na het winnen van races, vooral tijdens zijn dominante Red Bull jaren (2010-2013). Het werd een van zijn kenmerkende uitspraken."
        }
      },
      {
        question: {
          en: "Which driver is known for his extensive environmental activism and vegan lifestyle?",
          es: "¿Qué piloto es conocido por su activismo ambiental extenso y estilo de vida vegano?",
          de: "Welcher Fahrer ist für seinen umfangreichen Umweltaktivismus und veganen Lebensstil bekannt?",
          nl: "Welke coureur staat bekend om zijn uitgebreide milieu-activisme en veganistische levensstijl?"
        },
        options: ["Sebastian Vettel", "Lewis Hamilton", "Charles Leclerc", "Fernando Alonso"],
        correct: 1,
        explanation: {
          en: "Lewis Hamilton is a vocal environmental activist and has been vegan since 2017. He advocates for sustainability, diversity in motorsport, and animal rights, and has invested in plant-based companies.",
          es: "Lewis Hamilton es un activista ambiental vocal y ha sido vegano desde 2017. Aboga por la sostenibilidad, diversidad en el automovilismo y derechos de los animales, y ha invertido en empresas basadas en plantas.",
          de: "Lewis Hamilton ist ein lautstarker Umweltaktivist und seit 2017 Veganer. Er setzt sich für Nachhaltigkeit, Vielfalt im Motorsport und Tierrechte ein und hat in pflanzenbasierte Unternehmen investiert.",
          nl: "Lewis Hamilton is een vocale milieu-activist en is sinds 2017 veganist. Hij pleit voor duurzaamheid, diversiteit in de motorsport en dierenrechten, en heeft geïnvesteerd in plantaardige bedrijven."
        }
      },
      {
        question: {
          en: "Which driver wore a special helmet design at every race weekend?",
          es: "¿Qué piloto usó un diseño especial de casco en cada fin de semana de carrera?",
          de: "Welcher Fahrer trug an jedem Rennwochenende ein spezielles Helmdesign?",
          nl: "Welke coureur droeg een speciaal helmontwerp bij elk race weekend?"
        },
        options: ["Sebastian Vettel", "Lewis Hamilton", "Max Verstappen", "Daniel Ricciardo"],
        correct: 0,
        explanation: {
          en: "Sebastian Vettel was famous for designing unique helmet designs for nearly every race weekend throughout his career, featuring creative artwork and themes relevant to each Grand Prix location.",
          es: "Sebastian Vettel fue famoso por diseñar cascos únicos para casi cada fin de semana de carrera durante su carrera, con obras de arte creativas y temas relevantes para cada ubicación de Gran Premio.",
          de: "Sebastian Vettel war berühmt dafür, dass er während seiner Karriere für fast jedes Rennwochenende einzigartige Helmdesigns entwarf, mit kreativen Kunstwerken und Themen passend zu jedem Grand-Prix-Standort.",
          nl: "Sebastian Vettel stond bekend om het ontwerpen van unieke helmontwerpen voor bijna elk race weekend tijdens zijn carrière, met creatief artwork en thema's relevant voor elke Grand Prix locatie."
        }
      },
      {
        question: {
          en: "Which driver is Fernando Alonso's teammate at Aston Martin since 2023?",
          es: "¿Quién es el compañero de equipo de Fernando Alonso en Aston Martin desde 2023?",
          de: "Wer ist seit 2023 Fernando Alonsos Teamkollege bei Aston Martin?",
          nl: "Wie is Fernando Alonso's teamgenoot bij Aston Martin sinds 2023?"
        },
        options: ["Sebastian Vettel", "Lance Stroll", "Sergio Pérez", "Nico Hülkenberg"],
        correct: 1,
        explanation: {
          en: "Lance Stroll has been Fernando Alonso's teammate at Aston Martin since Alonso joined in 2023, replacing the retired Sebastian Vettel. The team showed strong pace in early 2023 with multiple podiums.",
          es: "Lance Stroll ha sido el compañero de equipo de Fernando Alonso en Aston Martin desde que Alonso se unió en 2023, reemplazando al retirado Sebastian Vettel. El equipo mostró un fuerte ritmo a principios de 2023 con múltiples podios.",
          de: "Lance Stroll ist seit 2023 Fernando Alonsos Teamkollege bei Aston Martin, als Alonso den zurückgetretenen Sebastian Vettel ersetzte. Das Team zeigte Anfang 2023 starke Leistung mit mehreren Podestplätzen.",
          nl: "Lance Stroll is Fernando Alonso's teamgenoot bij Aston Martin sinds Alonso in 2023 toetrad, ter vervanging van de gepensioneerde Sebastian Vettel. Het team toonde sterk tempo begin 2023 met meerdere podiums."
        }
      },
      {
        question: {
          en: "Which driver returned to F1 in 2021 with Alpine after a two-year sabbatical?",
          es: "¿Qué piloto regresó a F1 en 2021 con Alpine después de un descanso de dos años?",
          de: "Welcher Fahrer kehrte 2021 mit Alpine nach einer zweijährigen Auszeit zur F1 zurück?",
          nl: "Welke coureur keerde in 2021 terug naar F1 bij Alpine na een tweejarige sabbatical?"
        },
        options: ["Kimi Räikkönen", "Fernando Alonso", "Robert Kubica", "Nico Hülkenberg"],
        correct: 1,
        explanation: {
          en: "Fernando Alonso returned to F1 in 2021 with Alpine (formerly Renault) after a two-year break. He spent those years competing in endurance racing, winning the 24 Hours of Le Mans twice and the World Endurance Championship.",
          es: "Fernando Alonso regresó a F1 en 2021 con Alpine (antes Renault) después de un descanso de dos años. Pasó esos años compitiendo en carreras de resistencia, ganando las 24 Horas de Le Mans dos veces y el Campeonato Mundial de Resistencia.",
          de: "Fernando Alonso kehrte 2021 mit Alpine (vormals Renault) nach einer zweijährigen Pause zur F1 zurück. Er verbrachte diese Jahre im Langstreckenrennsport und gewann zweimal die 24 Stunden von Le Mans und die Langstrecken-Weltmeisterschaft.",
          nl: "Fernando Alonso keerde in 2021 terug naar F1 bij Alpine (voorheen Renault) na een tweejarige pauze. Hij bracht die jaren door met racen in endurance racing, won tweemaal de 24 uur van Le Mans en het World Endurance Championship."
        }
      },
      {
        question: {
          en: "Which driver holds the record for most consecutive race finishes in the points?",
          es: "¿Qué piloto tiene el récord de más finales consecutivos en los puntos?",
          de: "Welcher Fahrer hält den Rekord für die meisten aufeinanderfolgenden Zielankünfte in den Punkten?",
          nl: "Welke coureur heeft het record voor de meeste opeenvolgende race finishes in de punten?"
        },
        options: ["Lewis Hamilton", "Max Verstappen", "Sergio Pérez", "Valtteri Bottas"],
        correct: 1,
        explanation: {
          en: "Max Verstappen set a record with 23 consecutive points finishes from 2020-2021. He demonstrated exceptional consistency during Red Bull's dominant period, rarely finishing outside the top positions.",
          es: "Max Verstappen estableció un récord con 23 finales consecutivos en puntos de 2020-2021. Demostró una consistencia excepcional durante el período dominante de Red Bull, rara vez terminando fuera de las primeras posiciones.",
          de: "Max Verstappen stellte einen Rekord mit 23 aufeinanderfolgenden Punkteplatzierungen von 2020-2021 auf. Er zeigte außergewöhnliche Konstanz während Red Bulls dominanter Phase und beendete selten außerhalb der Top-Positionen.",
          nl: "Max Verstappen zette een record neer met 23 opeenvolgende punten finishes van 2020-2021. Hij toonde uitzonderlijke consistentie tijdens Red Bull's dominante periode, en eindigde zelden buiten de top posities."
        }
      },
      {
        question: {
          en: "Which driver won the 2022 championship with the most dominant season in recent F1 history?",
          es: "¿Qué piloto ganó el campeonato de 2022 con la temporada más dominante en la historia reciente de F1?",
          de: "Welcher Fahrer gewann die Meisterschaft 2022 mit der dominantesten Saison in der jüngeren F1-Geschichte?",
          nl: "Welke coureur won het 2022 kampioenschap met het meest dominante seizoen in de recente F1 geschiedenis?"
        },
        options: ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc", "Sergio Pérez"],
        correct: 1,
        explanation: {
          en: "Max Verstappen won the 2022 championship with 15 race wins out of 22 races, one of the most dominant seasons in F1 history. He clinched the title with 4 races remaining and broke multiple records.",
          es: "Max Verstappen ganó el campeonato de 2022 con 15 victorias de carrera de 22 carreras, una de las temporadas más dominantes en la historia de F1. Aseguró el título con 4 carreras restantes y rompió múltiples récords.",
          de: "Max Verstappen gewann die Meisterschaft 2022 mit 15 Rennsiegen aus 22 Rennen, eine der dominantesten Saisons in der F1-Geschichte. Er sicherte sich den Titel mit noch 4 verbleibenden Rennen und brach mehrere Rekorde.",
          nl: "Max Verstappen won het 2022 kampioenschap met 15 raceoverwinningen uit 22 races, een van de meest dominante seizoenen in F1 geschiedenis. Hij behaalde de titel met 4 races te gaan en brak meerdere records."
        }
      },
      {
        question: {
          en: "Which driver achieved his first pole position at the 2019 Belgian Grand Prix for Ferrari?",
          es: "¿Qué piloto logró su primera pole position en el Gran Premio de Bélgica 2019 para Ferrari?",
          de: "Welcher Fahrer erzielte 2019 beim Belgischen Grand Prix für Ferrari seine erste Pole-Position?",
          nl: "Welke coureur behaalde zijn eerste pole position bij de 2019 Belgische Grand Prix voor Ferrari?"
        },
        options: ["Carlos Sainz Jr.", "Charles Leclerc", "Sebastian Vettel", "Kimi Räikkönen"],
        correct: 1,
        explanation: {
          en: "Charles Leclerc took his first F1 pole position at the 2019 Belgian GP at Spa, and went on to win the race. It was an emotional weekend as it came after the death of his friend Anthoine Hubert in F2.",
          es: "Charles Leclerc obtuvo su primera pole position de F1 en el GP de Bélgica 2019 en Spa, y ganó la carrera. Fue un fin de semana emotivo ya que llegó después de la muerte de su amigo Anthoine Hubert en F2.",
          de: "Charles Leclerc holte sich beim Belgischen GP 2019 in Spa seine erste F1-Pole-Position und gewann das Rennen. Es war ein emotionales Wochenende, da es nach dem Tod seines Freundes Anthoine Hubert in der F2 stattfand.",
          nl: "Charles Leclerc behaalde zijn eerste F1 pole position bij de 2019 Belgische GP in Spa, en won de race. Het was een emotioneel weekend omdat het kwam na de dood van zijn vriend Anthoine Hubert in F2."
        }
      },
      {
        question: {
          en: "Which driver made a remarkable comeback after a horror crash at the 2020 Bahrain GP?",
          es: "¿Qué piloto hizo un regreso notable después de un terrible accidente en el GP de Bahréin 2020?",
          de: "Welcher Fahrer machte nach einem schrecklichen Unfall beim Bahrain-GP 2020 ein bemerkenswertes Comeback?",
          nl: "Welke coureur maakte een opmerkelijke comeback na een verschrikkelijke crash bij de 2020 Bahrein GP?"
        },
        options: ["Romain Grosjean", "Lance Stroll", "Kevin Magnussen", "Antonio Giovinazzi"],
        correct: 0,
        explanation: {
          en: "Romain Grosjean survived a horrific fiery crash at the 2020 Bahrain GP where his car split in half and caught fire. He escaped with minor burns and returned to racing just weeks later before retiring from F1.",
          es: "Romain Grosjean sobrevivió a un horrible accidente con fuego en el GP de Bahréin 2020 donde su auto se partió por la mitad y se incendió. Escapó con quemaduras menores y regresó a correr solo semanas después antes de retirarse de F1.",
          de: "Romain Grosjean überlebte beim Bahrain-GP 2020 einen schrecklichen Feuerunfall, bei dem sein Auto entzweibrach und Feuer fing. Er entkam mit leichten Verbrennungen und kehrte nur Wochen später zum Rennsport zurück, bevor er sich aus der F1 zurückzog.",
          nl: "Romain Grosjean overleefde een verschrikkelijke brand crash bij de 2020 Bahrein GP waarbij zijn auto in tweeën brak en vlam vatte. Hij ontsnapte met lichte brandwonden en keerde slechts weken later terug naar het racen voordat hij zich terugtrok uit F1."
        }
      },
      {
        question: {
          en: "Which driver scored points on his F1 debut, substituting for Lewis Hamilton at the 2020 Sakhir GP?",
          es: "¿Qué piloto anotó puntos en su debut en F1, sustituyendo a Lewis Hamilton en el GP de Sakhir 2020?",
          de: "Welcher Fahrer erzielte bei seinem F1-Debüt Punkte, als er beim Sakhir-GP 2020 Lewis Hamilton vertrat?",
          nl: "Welke coureur scoorde punten bij zijn F1 debuut, als vervanger van Lewis Hamilton bij de 2020 Sakhir GP?"
        },
        options: ["George Russell", "Valtteri Bottas", "Esteban Ocon", "Nico Hülkenberg"],
        correct: 0,
        explanation: {
          en: "George Russell substituted for Lewis Hamilton at the 2020 Sakhir GP while racing for Williams. He dominated the race and was leading before a pit stop error and puncture denied him victory, but he still scored points finishing 9th.",
          es: "George Russell sustituyó a Lewis Hamilton en el GP de Sakhir 2020 mientras corría para Williams. Dominó la carrera y lideraba antes de que un error en boxes y un pinchazo le negaran la victoria, pero aún anotó puntos terminando 9º.",
          de: "George Russell vertrat Lewis Hamilton beim Sakhir-GP 2020, während er für Williams fuhr. Er dominierte das Rennen und führte, bevor ein Boxenstopp-Fehler und eine Reifenpanne ihm den Sieg verweigerten, aber er erzielte dennoch Punkte als Neunter.",
          nl: "George Russell verving Lewis Hamilton bij de 2020 Sakhir GP terwijl hij voor Williams reed. Hij domineerde de race en leidde voordat een pitstop fout en lekke band hem de overwinning ontzegden, maar hij scoorde toch punten door 9e te worden."
        }
      },
      {
        question: {
          en: "Which driver competed in the most F1 races before retiring in 2021?",
          es: "¿Qué piloto compitió en más carreras de F1 antes de retirarse en 2021?",
          de: "Welcher Fahrer bestritt die meisten F1-Rennen, bevor er sich 2021 zurückzog?",
          nl: "Welke coureur reed de meeste F1 races voordat hij zich in 2021 terugtrok?"
        },
        options: ["Fernando Alonso", "Kimi Räikkönen", "Sebastian Vettel", "Rubens Barrichello"],
        correct: 1,
        explanation: {
          en: "Kimi Räikkönen holds the record for most F1 race starts with 349 races before retiring at the end of 2021. He raced from 2001-2021 (with a two-year rally break in 2010-2011) and won the 2007 championship.",
          es: "Kimi Räikkönen tiene el récord de más inicios de carreras de F1 con 349 carreras antes de retirarse a finales de 2021. Corrió de 2001-2021 (con un descanso de rally de dos años en 2010-2011) y ganó el campeonato de 2007.",
          de: "Kimi Räikkönen hält den Rekord für die meisten F1-Rennstarts mit 349 Rennen, bevor er Ende 2021 in den Ruhestand ging. Er fuhr von 2001-2021 (mit einer zweijährigen Rallye-Pause 2010-2011) und gewann die Meisterschaft 2007.",
          nl: "Kimi Räikkönen heeft het record voor de meeste F1 race starts met 349 races voordat hij eind 2021 terugkwam. Hij reed van 2001-2021 (met een tweejarige rally pauze in 2010-2011) en won het 2007 kampioenschap."
        }
      },
      {
        question: {
          en: "Which driver won his first race at the 2020 Monza GP in a shocking upset?",
          es: "¿Qué piloto ganó su primera carrera en el GP de Monza 2020 en una sorprendente victoria?",
          de: "Welcher Fahrer gewann 2020 beim GP von Monza sein erstes Rennen in einer schockierenden Überraschung?",
          nl: "Welke coureur won zijn eerste race bij de 2020 Monza GP in een schokkende verrassing?"
        },
        options: ["Pierre Gasly", "Esteban Ocon", "Daniel Ricciardo", "Carlos Sainz Jr."],
        correct: 0,
        explanation: {
          en: "Pierre Gasly won the 2020 Italian GP at Monza for AlphaTauri (Toro Rosso) after a series of fortunate events including a red flag and Lewis Hamilton's penalty. It was one of F1's biggest upsets in recent years.",
          es: "Pierre Gasly ganó el GP de Italia 2020 en Monza para AlphaTauri (Toro Rosso) después de una serie de eventos afortunados incluyendo una bandera roja y la penalización de Lewis Hamilton. Fue una de las mayores sorpresas de F1 en años recientes.",
          de: "Pierre Gasly gewann den Italienischen GP 2020 in Monza für AlphaTauri (Toro Rosso) nach einer Reihe glücklicher Umstände, darunter eine rote Flagge und Lewis Hamiltons Strafe. Es war eine der größten Überraschungen der F1 der letzten Jahre.",
          nl: "Pierre Gasly won de 2020 Italiaanse GP in Monza voor AlphaTauri (Toro Rosso) na een reeks gelukkige gebeurtenissen inclusief een rode vlag en Lewis Hamiltons straf. Het was een van F1's grootste verrassingen in recente jaren."
        }
      },
      {
        question: {
          en: "Which driver is the tallest on the current F1 grid?",
          es: "¿Qué piloto es el más alto en la parrilla actual de F1?",
          de: "Welcher Fahrer ist der größte im aktuellen F1-Feld?",
          nl: "Welke coureur is de langste op de huidige F1 grid?"
        },
        options: ["George Russell", "Alex Albon", "Esteban Ocon", "Nico Hülkenberg"],
        correct: 2,
        explanation: {
          en: "Esteban Ocon is one of the tallest F1 drivers at 186 cm (6'1\"). His height is often considered a disadvantage in F1 due to weight distribution and cockpit fit, but he has successfully overcome this challenge.",
          es: "Esteban Ocon es uno de los pilotos de F1 más altos con 186 cm (6'1\"). Su altura a menudo se considera una desventaja en F1 debido a la distribución de peso y el ajuste del cockpit, pero ha superado con éxito este desafío.",
          de: "Esteban Ocon ist mit 186 cm einer der größten F1-Fahrer. Seine Größe wird oft als Nachteil in der F1 angesehen aufgrund der Gewichtsverteilung und Cockpit-Passform, aber er hat diese Herausforderung erfolgreich gemeistert.",
          nl: "Esteban Ocon is een van de langste F1 coureurs met 186 cm. Zijn lengte wordt vaak beschouwd als een nadeel in F1 vanwege gewichtsverdeling en cockpit pasvorm, maar hij heeft deze uitdaging succesvol overwonnen."
        }
      },
      {
        question: {
          en: "Which driver won the first-ever F1 Sprint Race at the 2021 British Grand Prix?",
          es: "¿Qué piloto ganó la primera Sprint Race de F1 en el Gran Premio Británico de 2021?",
          de: "Welcher Fahrer gewann das allererste F1-Sprintrennen beim Britischen Grand Prix 2021?",
          nl: "Welke coureur won de allereerste F1 Sprint Race bij de 2021 Britse Grand Prix?"
        },
        options: ["Lewis Hamilton", "Max Verstappen", "Valtteri Bottas", "Charles Leclerc"],
        correct: 1,
        explanation: {
          en: "Max Verstappen won the first-ever F1 Sprint Race at Silverstone in 2021, which set the grid for Sunday's main race. The sprint format has since been used at select races to add excitement to race weekends.",
          es: "Max Verstappen ganó la primera Sprint Race de F1 en Silverstone en 2021, que estableció la parrilla para la carrera principal del domingo. El formato sprint se ha utilizado desde entonces en carreras seleccionadas para agregar emoción a los fines de semana de carrera.",
          de: "Max Verstappen gewann das erste F1-Sprintrennen in Silverstone 2021, das die Startaufstellung für das Hauptrennen am Sonntag festlegte. Das Sprint-Format wird seitdem bei ausgewählten Rennen verwendet, um den Rennwochenenden mehr Spannung zu verleihen.",
          nl: "Max Verstappen won de eerste F1 Sprint Race in Silverstone in 2021, die de grid bepaalde voor de hoofdrace op zondag. Het sprint formaat wordt sindsdien gebruikt bij geselecteerde races om spanning toe te voegen aan race weekends."
        }
      },
      {
        question: {
          en: "Which driver holds the record for most pole positions in F1 history?",
          es: "¿Qué piloto tiene el récord de más pole positions en la historia de F1?",
          de: "Welcher Fahrer hält den Rekord für die meisten Pole-Positionen in der F1-Geschichte?",
          nl: "Welke coureur heeft het record voor de meeste pole positions in F1 geschiedenis?"
        },
        options: ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Sebastian Vettel"],
        correct: 1,
        explanation: {
          en: "Lewis Hamilton holds the record for most pole positions with 104 poles (as of end of 2023). He surpassed Michael Schumacher's previous record of 68 poles in 2017 and has continued to extend his record.",
          es: "Lewis Hamilton tiene el récord de más pole positions con 104 poles (hasta finales de 2023). Superó el récord anterior de Michael Schumacher de 68 poles en 2017 y ha continuado extendiendo su récord.",
          de: "Lewis Hamilton hält den Rekord für die meisten Pole-Positionen mit 104 Poles (Stand Ende 2023). Er überbot Michael Schumachers bisherigen Rekord von 68 Poles im Jahr 2017 und hat seinen Rekord seitdem weiter ausgebaut.",
          nl: "Lewis Hamilton heeft het record voor de meeste pole positions met 104 poles (tot eind 2023). Hij overtrof Michael Schumachers vorige record van 68 poles in 2017 en heeft zijn record sindsdien verder uitgebreid."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
