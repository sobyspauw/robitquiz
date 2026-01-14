const level1 = (function() {
  const questions = [
    {
      question: {
        en: "Which Grand Prix is known as the 'Crown Jewel' of Formula 1?",
        es: "¿Qué Gran Premio es conocido como la 'Joya de la Corona' de la Fórmula 1?",
        de: "Welcher Grand Prix ist als 'Kronjuwel' der Formel 1 bekannt?",
        nl: "Welke Grand Prix staat bekend als het 'Kronjuweel' van Formule 1?"
      },
      options: [
        "Italian Grand Prix",
        "Monaco Grand Prix",
        "British Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The Monaco Grand Prix is considered the crown jewel of Formula 1, held on the streets of Monte Carlo since 1929.",
        es: "El Gran Premio de Mónaco es considerado la joya de la corona de la Fórmula 1, celebrado en las calles de Montecarlo desde 1929.",
        de: "Der Monaco Grand Prix gilt als Kronjuwel der Formel 1, wird seit 1929 auf den Straßen von Monte Carlo ausgetragen.",
        nl: "De Grand Prix van Monaco wordt beschouwd als het kronjuweel van Formule 1, gehouden op de straten van Monte Carlo sinds 1929."
      }
    },
    {
      question: {
        en: "In which year did the first Formula 1 World Championship race take place?",
        es: "¿En qué año tuvo lugar la primera carrera del Campeonato Mundial de Fórmula 1?",
        de: "In welchem Jahr fand das erste Formel-1-Weltmeisterschaftsrennen statt?",
        nl: "In welk jaar vond de eerste Formule 1 Wereldkampioenschap race plaats?"
      },
      options: [
        "1948",
        "1950",
        "1952",
        "1946"
      ],
      correct: 1,
      explanation: {
        en: "The first Formula 1 World Championship race was held at Silverstone, UK on May 13, 1950.",
        es: "La primera carrera del Campeonato Mundial de Fórmula 1 se celebró en Silverstone, Reino Unido, el 13 de mayo de 1950.",
        de: "Das erste Formel-1-Weltmeisterschaftsrennen fand am 13. Mai 1950 in Silverstone, Großbritannien, statt.",
        nl: "De eerste Formule 1 Wereldkampioenschap race werd gehouden op Silverstone, VK op 13 mei 1950."
      }
    },
    {
      question: {
        en: "The 1976 Japanese Grand Prix at Fuji was famous for which dramatic title showdown?",
        es: "¿Por qué dramático enfrentamiento por el título fue famoso el Gran Premio de Japón de 1976 en Fuji?",
        de: "Wofür war der Japanische Grand Prix 1976 in Fuji bekannt als dramatisches Titelduell?",
        nl: "Waarom was de Japanse Grand Prix van 1976 op Fuji beroemd voor welke dramatische titelstrijd?"
      },
      options: [
        "Senna vs Prost",
        "Hunt vs Lauda",
        "Mansell vs Piquet",
        "Schumacher vs Hill"
      ],
      correct: 1,
      explanation: {
        en: "The 1976 Japanese GP saw James Hunt clinch the title by finishing 3rd, while Niki Lauda withdrew due to dangerous wet conditions.",
        es: "El GP de Japón de 1976 vio a James Hunt conseguir el título terminando 3º, mientras Niki Lauda se retiró debido a las peligrosas condiciones húmedas.",
        de: "Beim Japanischen GP 1976 sicherte sich James Hunt den Titel mit Platz 3, während Niki Lauda wegen gefährlicher nasser Bedingungen aufgab.",
        nl: "De Japanse GP van 1976 zag James Hunt de titel winnen door 3e te worden, terwijl Niki Lauda zich terugtrok vanwege gevaarlijke natte omstandigheden."
      }
    },
    {
      question: {
        en: "Which race is known for the famous Eau Rouge corner?",
        es: "¿Qué carrera es conocida por la famosa curva Eau Rouge?",
        de: "Welches Rennen ist für die berühmte Kurve Eau Rouge bekannt?",
        nl: "Welke race staat bekend om de beroemde Eau Rouge bocht?"
      },
      options: [
        "French Grand Prix",
        "Belgian Grand Prix",
        "Dutch Grand Prix",
        "Luxembourg Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The Belgian Grand Prix at Spa-Francorchamps features the iconic Eau Rouge corner, one of the most challenging in F1.",
        es: "El Gran Premio de Bélgica en Spa-Francorchamps cuenta con la icónica curva Eau Rouge, una de las más desafiantes de la F1.",
        de: "Der Belgische Grand Prix in Spa-Francorchamps hat die ikonische Kurve Eau Rouge, eine der anspruchsvollsten in der F1.",
        nl: "De Belgische Grand Prix op Spa-Francorchamps heeft de iconische Eau Rouge bocht, een van de meest uitdagende in F1."
      }
    },
    {
      question: {
        en: "In 1988, who won the Monaco Grand Prix by over a lap?",
        es: "¿Quién ganó el Gran Premio de Mónaco de 1988 por más de una vuelta?",
        de: "Wer gewann 1988 den Monaco Grand Prix mit über einer Runde Vorsprung?",
        nl: "Wie won de Grand Prix van Monaco in 1988 met meer dan een ronde voorsprong?"
      },
      options: [
        "Ayrton Senna",
        "Alain Prost",
        "Nelson Piquet",
        "Nigel Mansell"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna dominated the 1988 Monaco GP, winning by over a minute in wet conditions, one of his greatest drives.",
        es: "Ayrton Senna dominó el GP de Mónaco de 1988, ganando por más de un minuto en condiciones húmedas, una de sus mejores carreras.",
        de: "Ayrton Senna dominierte den Monaco GP 1988 und gewann bei nassen Bedingungen mit über einer Minute Vorsprung, eine seiner größten Fahrten.",
        nl: "Ayrton Senna domineerde de GP van Monaco 1988, winnend met meer dan een minuut in natte omstandigheden, een van zijn grootste races."
      }
    },
    {
      question: {
        en: "The 2008 Brazilian GP saw which driver win their first championship?",
        es: "¿Qué piloto ganó su primer campeonato en el GP de Brasil de 2008?",
        de: "Welcher Fahrer gewann beim Brasilianischen GP 2008 seine erste Meisterschaft?",
        nl: "Welke coureur won zijn eerste kampioenschap tijdens de Braziliaanse GP van 2008?"
      },
      options: [
        "Fernando Alonso",
        "Felipe Massa",
        "Lewis Hamilton",
        "Kimi Räikkönen"
      ],
      correct: 2,
      explanation: {
        en: "Lewis Hamilton overtook Timo Glock on the last corner of the last lap to secure his first championship by one point over Felipe Massa.",
        es: "Lewis Hamilton adelantó a Timo Glock en la última curva de la última vuelta para asegurar su primer campeonato por un punto sobre Felipe Massa.",
        de: "Lewis Hamilton überholte Timo Glock in der letzten Kurve der letzten Runde und sicherte sich seine erste Meisterschaft mit einem Punkt Vorsprung auf Felipe Massa.",
        nl: "Lewis Hamilton haalde Timo Glock in de laatste bocht van de laatste ronde in om zijn eerste kampioenschap te behalen met één punt voorsprong op Felipe Massa."
      }
    },
    {
      question: {
        en: "Which race features the famous Parabolica corner?",
        es: "¿Qué carrera cuenta con la famosa curva Parabolica?",
        de: "Welches Rennen hat die berühmte Parabolica-Kurve?",
        nl: "Welke race heeft de beroemde Parabolica bocht?"
      },
      options: [
        "San Marino Grand Prix",
        "Italian Grand Prix",
        "Monaco Grand Prix",
        "Spanish Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The Italian Grand Prix at Monza features the Parabolica, the final corner before the main straight.",
        es: "El Gran Premio de Italia en Monza cuenta con la Parabolica, la última curva antes de la recta principal.",
        de: "Der Italienische Grand Prix in Monza hat die Parabolica, die letzte Kurve vor der Hauptgeraden.",
        nl: "De Italiaanse Grand Prix op Monza heeft de Parabolica, de laatste bocht voor het rechte stuk."
      }
    },
    {
      question: {
        en: "The 2011 Canadian Grand Prix is famous for what reason?",
        es: "¿Por qué razón es famoso el Gran Premio de Canadá de 2011?",
        de: "Wofür ist der Kanadische Grand Prix 2011 berühmt?",
        nl: "Waarom is de Canadese Grand Prix van 2011 beroemd?"
      },
      options: [
        "First wet race",
        "Longest race ever",
        "First night race",
        "Shortest race"
      ],
      correct: 1,
      explanation: {
        en: "The 2011 Canadian GP was the longest race in F1 history at over 4 hours, won by Jenson Button after multiple red flags.",
        es: "El GP de Canadá de 2011 fue la carrera más larga en la historia de la F1 con más de 4 horas, ganada por Jenson Button después de múltiples banderas rojas.",
        de: "Der Kanadische GP 2011 war mit über 4 Stunden das längste Rennen in der F1-Geschichte, gewonnen von Jenson Button nach mehreren roten Flaggen.",
        nl: "De Canadese GP van 2011 was de langste race in F1 geschiedenis met meer dan 4 uur, gewonnen door Jenson Button na meerdere rode vlaggen."
      }
    },
    {
      question: {
        en: "Which Grand Prix was first held in 1950 and is the oldest on the calendar?",
        es: "¿Qué Gran Premio se celebró por primera vez en 1950 y es el más antiguo del calendario?",
        de: "Welcher Grand Prix fand erstmals 1950 statt und ist der älteste im Kalender?",
        nl: "Welke Grand Prix werd voor het eerst gehouden in 1950 en is de oudste op de kalender?"
      },
      options: [
        "Monaco Grand Prix",
        "Italian Grand Prix",
        "British Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The British Grand Prix at Silverstone was the first race of the F1 World Championship in 1950 and has been held every year since.",
        es: "El Gran Premio Británico en Silverstone fue la primera carrera del Campeonato Mundial de F1 en 1950 y se ha celebrado cada año desde entonces.",
        de: "Der Britische Grand Prix in Silverstone war 1950 das erste Rennen der F1-Weltmeisterschaft und wird seitdem jedes Jahr ausgetragen.",
        nl: "De Britse Grand Prix op Silverstone was de eerste race van het F1 Wereldkampioenschap in 1950 en wordt sindsdien elk jaar gehouden."
      }
    },
    {
      question: {
        en: "The 1994 San Marino Grand Prix is remembered for what tragic event?",
        es: "¿Por qué trágico evento se recuerda el Gran Premio de San Marino de 1994?",
        de: "Wofür wird der San-Marino-Grand-Prix 1994 erinnert als tragisches Ereignis?",
        nl: "Waarvoor wordt de San Marino Grand Prix van 1994 herinnerd als tragische gebeurtenis?"
      },
      options: [
        "Fatal crashes",
        "Track fire",
        "Mass collision",
        "Car explosion"
      ],
      correct: 0,
      explanation: {
        en: "The 1994 San Marino GP at Imola saw the deaths of Roland Ratzenberger and Ayrton Senna, F1's darkest weekend.",
        es: "El GP de San Marino de 1994 en Imola vio las muertes de Roland Ratzenberger y Ayrton Senna, el fin de semana más oscuro de la F1.",
        de: "Der San-Marino-GP 1994 in Imola sah die Tode von Roland Ratzenberger und Ayrton Senna, das dunkelste Wochenende der F1.",
        nl: "De San Marino GP van 1994 in Imola zag de dood van Roland Ratzenberger en Ayrton Senna, het donkerste weekend van F1."
      }
    },
    {
      question: {
        en: "Which circuit is nicknamed 'The Temple of Speed'?",
        es: "¿Qué circuito tiene el apodo de 'El Templo de la Velocidad'?",
        de: "Welche Rennstrecke trägt den Spitznamen 'Tempel der Geschwindigkeit'?",
        nl: "Welk circuit heeft de bijnaam 'De Tempel van Snelheid'?"
      },
      options: [
        "Silverstone",
        "Monza",
        "Spa",
        "Suzuka"
      ],
      correct: 1,
      explanation: {
        en: "Monza is called the 'Temple of Speed' due to its long straights and high average speeds.",
        es: "Monza se llama el 'Templo de la Velocidad' debido a sus largas rectas y altas velocidades promedio.",
        de: "Monza wird 'Tempel der Geschwindigkeit' genannt wegen seiner langen Geraden und hohen Durchschnittsgeschwindigkeiten.",
        nl: "Monza wordt de 'Tempel van Snelheid' genoemd vanwege zijn lange rechte stukken en hoge gemiddelde snelheden."
      }
    },
    {
      question: {
        en: "The 2012 Brazilian Grand Prix saw which driver win his first championship?",
        es: "¿Qué piloto ganó su primer campeonato en el Gran Premio de Brasil de 2012?",
        de: "Welcher Fahrer gewann beim Brasilianischen Grand Prix 2012 seine erste Meisterschaft?",
        nl: "Welke coureur won zijn eerste kampioenschap tijdens de Braziliaanse Grand Prix van 2012?"
      },
      options: [
        "Lewis Hamilton",
        "Fernando Alonso",
        "Sebastian Vettel",
        "Jenson Button"
      ],
      correct: 2,
      explanation: {
        en: "Sebastian Vettel won his third consecutive championship at the 2012 Brazilian GP, recovering from a first-lap collision.",
        es: "Sebastian Vettel ganó su tercer campeonato consecutivo en el GP de Brasil de 2012, recuperándose de una colisión en la primera vuelta.",
        de: "Sebastian Vettel gewann seine dritte aufeinanderfolgende Meisterschaft beim Brasilianischen GP 2012, nachdem er sich von einer Kollision in der ersten Runde erholte.",
        nl: "Sebastian Vettel won zijn derde opeenvolgende kampioenschap tijdens de Braziliaanse GP van 2012, herstellend van een botsing in de eerste ronde."
      }
    },
    {
      question: {
        en: "Which Grand Prix features the famous Casino Square section?",
        es: "¿Qué Gran Premio cuenta con la famosa sección de la Plaza del Casino?",
        de: "Welcher Grand Prix hat den berühmten Casino-Platz-Abschnitt?",
        nl: "Welke Grand Prix heeft het beroemde Casino Square gedeelte?"
      },
      options: [
        "Monaco Grand Prix",
        "Singapore Grand Prix",
        "Abu Dhabi Grand Prix",
        "Las Vegas Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The Monaco Grand Prix circuit passes through Casino Square, one of the most iconic sections of the race.",
        es: "El circuito del Gran Premio de Mónaco pasa por la Plaza del Casino, una de las secciones más icónicas de la carrera.",
        de: "Die Strecke des Monaco Grand Prix führt durch den Casino-Platz, einen der ikonischsten Abschnitte des Rennens.",
        nl: "Het Monaco Grand Prix circuit loopt door Casino Square, een van de meest iconische delen van de race."
      }
    },
    {
      question: {
        en: "The 1982 Monaco Grand Prix is famous for what chaotic finish?",
        es: "¿Por qué caótico final es famoso el Gran Premio de Mónaco de 1982?",
        de: "Wofür ist der Monaco Grand Prix 1982 mit welchem chaotischen Finish berühmt?",
        nl: "Waarvoor is de Grand Prix van Monaco 1982 beroemd met welke chaotische finish?"
      },
      options: [
        "Five leaders in final laps",
        "Rain shower",
        "Mass crash",
        "Red flag finish"
      ],
      correct: 0,
      explanation: {
        en: "The 1982 Monaco GP saw five different leaders in the final laps, with several drivers crashing or running out of fuel.",
        es: "El GP de Mónaco de 1982 vio cinco líderes diferentes en las últimas vueltas, con varios pilotos estrellándose o quedándose sin combustible.",
        de: "Der Monaco GP 1982 sah fünf verschiedene Führende in den letzten Runden, wobei mehrere Fahrer verunglückten oder kein Benzin mehr hatten.",
        nl: "De GP van Monaco 1982 zag vijf verschillende leiders in de laatste rondes, met meerdere coureurs crashend of zonder brandstof."
      }
    },
    {
      question: {
        en: "Which race was the first Formula 1 night race?",
        es: "¿Cuál fue la primera carrera nocturna de Fórmula 1?",
        de: "Welches war das erste Formel-1-Nachtrennen?",
        nl: "Welke race was de eerste Formule 1 nachtrace?"
      },
      options: [
        "Abu Dhabi Grand Prix",
        "Bahrain Grand Prix",
        "Singapore Grand Prix",
        "Las Vegas Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The 2008 Singapore Grand Prix was the first night race in F1 history, held under floodlights on the streets of Singapore.",
        es: "El Gran Premio de Singapur de 2008 fue la primera carrera nocturna en la historia de la F1, celebrada bajo reflectores en las calles de Singapur.",
        de: "Der Singapur Grand Prix 2008 war das erste Nachtrennen in der F1-Geschichte, unter Flutlicht auf den Straßen Singapurs ausgetragen.",
        nl: "De Singapore Grand Prix van 2008 was de eerste nachtrace in F1 geschiedenis, gehouden onder kunstlicht op de straten van Singapore."
      }
    },
    {
      question: {
        en: "The 2005 United States Grand Prix is infamous for having how many cars start?",
        es: "¿Por cuántos coches que empezaron es infame el Gran Premio de Estados Unidos de 2005?",
        de: "Wofür ist der US Grand Prix 2005 berüchtigt mit wie vielen startenden Autos?",
        nl: "Waarvoor is de United States Grand Prix van 2005 berucht met hoeveel startende auto's?"
      },
      options: [
        "6 cars",
        "10 cars",
        "14 cars",
        "18 cars"
      ],
      correct: 0,
      explanation: {
        en: "Only 6 cars started the 2005 US GP at Indianapolis due to a Michelin tire safety issue, causing a major controversy.",
        es: "Solo 6 coches comenzaron el GP de EE.UU. de 2005 en Indianápolis debido a un problema de seguridad de neumáticos Michelin, causando una gran controversia.",
        de: "Nur 6 Autos starteten beim US GP 2005 in Indianapolis aufgrund eines Michelin-Reifensicherheitsproblems, was große Kontroversen auslöste.",
        nl: "Slechts 6 auto's startten de US GP van 2005 in Indianapolis vanwege een Michelin band veiligheidsprobleem, wat grote controversie veroorzaakte."
      }
    },
    {
      question: {
        en: "Which Grand Prix circuit features the Suzuka 'figure-eight' layout?",
        es: "¿Qué circuito de Gran Premio cuenta con el trazado de 'ocho' de Suzuka?",
        de: "Welche Grand-Prix-Strecke hat das Suzuka-'Achter'-Layout?",
        nl: "Welk Grand Prix circuit heeft het Suzuka 'figuur-acht' layout?"
      },
      options: [
        "Chinese Grand Prix",
        "Korean Grand Prix",
        "Japanese Grand Prix",
        "Malaysian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The Japanese Grand Prix at Suzuka features a unique figure-eight layout with the track crossing over itself.",
        es: "El Gran Premio de Japón en Suzuka cuenta con un diseño único en forma de ocho con la pista cruzándose sobre sí misma.",
        de: "Der Japanische Grand Prix in Suzuka hat ein einzigartiges Achter-Layout, bei dem die Strecke sich selbst überquert.",
        nl: "De Japanse Grand Prix op Suzuka heeft een uniek figuur-acht layout waarbij het circuit zichzelf kruist."
      }
    },
    {
      question: {
        en: "The 1997 European Grand Prix at Jerez is famous for what incident?",
        es: "¿Por qué incidente es famoso el Gran Premio de Europa de 1997 en Jerez?",
        de: "Wofür ist der Europäische Grand Prix 1997 in Jerez berühmt für welchen Vorfall?",
        nl: "Waarvoor is de Europese Grand Prix van 1997 in Jerez beroemd voor welk incident?"
      },
      options: [
        "Schumacher-Villeneuve collision",
        "Hill-Schumacher collision",
        "Prost-Senna collision",
        "Mansell-Piquet collision"
      ],
      correct: 0,
      explanation: {
        en: "Michael Schumacher attempted to take out Jacques Villeneuve in the title-deciding race but damaged his own car and was disqualified from the championship.",
        es: "Michael Schumacher intentó sacar a Jacques Villeneuve en la carrera decisiva del título pero dañó su propio coche y fue descalificado del campeonato.",
        de: "Michael Schumacher versuchte Jacques Villeneuve im titelentscheidenden Rennen rauszunehmen, beschädigte aber sein eigenes Auto und wurde aus der Meisterschaft disqualifiziert.",
        nl: "Michael Schumacher probeerde Jacques Villeneuve eruit te halen in de titelbeslissende race maar beschadigde zijn eigen auto en werd gediskwalificeerd van het kampioenschap."
      }
    },
    {
      question: {
        en: "Which race features the famous Copse Corner?",
        es: "¿Qué carrera cuenta con la famosa Curva Copse?",
        de: "Welches Rennen hat die berühmte Copse-Kurve?",
        nl: "Welke race heeft de beroemde Copse bocht?"
      },
      options: [
        "British Grand Prix",
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "Spanish Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Copse Corner is the first corner at Silverstone Circuit, home of the British Grand Prix, taken at very high speed.",
        es: "La Curva Copse es la primera curva del Circuito de Silverstone, sede del Gran Premio Británico, tomada a muy alta velocidad.",
        de: "Copse Corner ist die erste Kurve des Silverstone Circuit, Heimat des Britischen Grand Prix, mit sehr hoher Geschwindigkeit genommen.",
        nl: "Copse Corner is de eerste bocht van het Silverstone Circuit, thuisbasis van de Britse Grand Prix, genomen op zeer hoge snelheid."
      }
    },
    {
      question: {
        en: "The 2019 German Grand Prix is remembered for what weather-affected chaos?",
        es: "¿Por qué caos afectado por el clima se recuerda el Gran Premio de Alemania de 2019?",
        de: "Wofür wird der Deutsche Grand Prix 2019 erinnert als wetterbedingt chaotisch?",
        nl: "Waarvoor wordt de Duitse Grand Prix van 2019 herinnerd als weer-beïnvloed chaos?"
      },
      options: [
        "Heavy rain causing crashes",
        "Extreme heat",
        "Snowstorm",
        "Lightning delay"
      ],
      correct: 0,
      explanation: {
        en: "The 2019 German GP saw heavy rain causing numerous crashes and safety cars, with Max Verstappen winning the chaotic race.",
        es: "El GP de Alemania de 2019 vio fuertes lluvias causando numerosos accidentes y coches de seguridad, con Max Verstappen ganando la carrera caótica.",
        de: "Der Deutsche GP 2019 sah starken Regen, der zahlreiche Unfälle und Safety Cars verursachte, wobei Max Verstappen das chaotische Rennen gewann.",
        nl: "De Duitse GP van 2019 zag zware regen die talrijke crashes en safety cars veroorzaakte, met Max Verstappen die de chaotische race won."
      }
    },
    {
      question: {
        en: "Which circuit was known as the 'Green Hell' and hosted the German GP until 1976?",
        es: "¿Qué circuito era conocido como el 'Infierno Verde' y acogió el GP de Alemania hasta 1976?",
        de: "Welche Rennstrecke war als 'Grüne Hölle' bekannt und Gastgeber des Deutschen GP bis 1976?",
        nl: "Welk circuit stond bekend als de 'Groene Hel' en organiseerde de Duitse GP tot 1976?"
      },
      options: [
        "Hockenheimring",
        "Nürburgring Nordschleife",
        "AVUS",
        "Österreichring"
      ],
      correct: 1,
      explanation: {
        en: "The Nürburgring Nordschleife, known as the 'Green Hell', was deemed too dangerous and was replaced after Niki Lauda's 1976 crash.",
        es: "El Nürburgring Nordschleife, conocido como el 'Infierno Verde', fue considerado demasiado peligroso y fue reemplazado después del accidente de Niki Lauda en 1976.",
        de: "Die Nürburgring Nordschleife, bekannt als 'Grüne Hölle', wurde als zu gefährlich eingestuft und nach Niki Laudas Unfall 1976 ersetzt.",
        nl: "De Nürburgring Nordschleife, bekend als de 'Groene Hel', werd te gevaarlijk bevonden en vervangen na de crash van Niki Lauda in 1976."
      }
    },
    {
      question: {
        en: "The 2016 Spanish Grand Prix saw which teammates crash on the first lap?",
        es: "¿Qué compañeros de equipo chocaron en la primera vuelta del Gran Premio de España de 2016?",
        de: "Welche Teamkollegen crashten in der ersten Runde des Spanischen GP 2016?",
        nl: "Welke teamgenoten crashten in de eerste ronde van de Spaanse Grand Prix van 2016?"
      },
      options: [
        "Vettel-Räikkönen",
        "Hamilton-Rosberg",
        "Ricciardo-Verstappen",
        "Alonso-Button"
      ],
      correct: 1,
      explanation: {
        en: "Lewis Hamilton and Nico Rosberg collided on the first lap of the 2016 Spanish GP while battling for the lead.",
        es: "Lewis Hamilton y Nico Rosberg colisionaron en la primera vuelta del GP de España de 2016 mientras luchaban por el liderato.",
        de: "Lewis Hamilton und Nico Rosberg kollidierten in der ersten Runde des Spanischen GP 2016 während des Kampfes um die Führung.",
        nl: "Lewis Hamilton en Nico Rosberg botsten in de eerste ronde van de Spaanse GP van 2016 terwijl ze vochten voor de leiding."
      }
    },
    {
      question: {
        en: "Which Grand Prix is held on the Circuit Gilles Villeneuve?",
        es: "¿Qué Gran Premio se celebra en el Circuito Gilles Villeneuve?",
        de: "Welcher Grand Prix findet auf dem Circuit Gilles Villeneuve statt?",
        nl: "Welke Grand Prix wordt gehouden op het Circuit Gilles Villeneuve?"
      },
      options: [
        "United States Grand Prix",
        "Canadian Grand Prix",
        "Mexican Grand Prix",
        "Brazilian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The Canadian Grand Prix is held at Circuit Gilles Villeneuve in Montreal, named after the legendary Canadian F1 driver.",
        es: "El Gran Premio de Canadá se celebra en el Circuito Gilles Villeneuve en Montreal, nombrado en honor al legendario piloto canadiense de F1.",
        de: "Der Kanadische Grand Prix findet auf dem Circuit Gilles Villeneuve in Montreal statt, benannt nach dem legendären kanadischen F1-Fahrer.",
        nl: "De Canadese Grand Prix wordt gehouden op het Circuit Gilles Villeneuve in Montreal, genoemd naar de legendarische Canadese F1-coureur."
      }
    },
    {
      question: {
        en: "The 1999 European Grand Prix at Nürburgring is famous for what dramatic event?",
        es: "¿Por qué evento dramático es famoso el Gran Premio de Europa de 1999 en Nürburgring?",
        de: "Wofür ist der Europäische Grand Prix 1999 am Nürburgring berühmt für welches dramatische Ereignis?",
        nl: "Waarvoor is de Europese Grand Prix van 1999 op de Nürburgring beroemd voor welke dramatische gebeurtenis?"
      },
      options: [
        "First win for a rookie",
        "Schumacher's leg break",
        "Mass first-lap crash",
        "Rain causing red flag"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher broke his leg in a crash during the 1999 European GP, forcing him to miss several races.",
        es: "Michael Schumacher se rompió la pierna en un accidente durante el GP de Europa de 1999, obligándole a perderse varias carreras.",
        de: "Michael Schumacher brach sich beim Europäischen GP 1999 das Bein in einem Unfall und musste mehrere Rennen verpassen.",
        nl: "Michael Schumacher brak zijn been in een crash tijdens de Europese GP van 1999, waardoor hij meerdere races moest missen."
      }
    },
    {
      question: {
        en: "Which race features the famous Rascasse hairpin corner?",
        es: "¿Qué carrera cuenta con la famosa horquilla Rascasse?",
        de: "Welches Rennen hat die berühmte Rascasse-Haarnadelkurve?",
        nl: "Welke race heeft de beroemde Rascasse haarspeldbocht?"
      },
      options: [
        "Monaco Grand Prix",
        "French Grand Prix",
        "Singapore Grand Prix",
        "Abu Dhabi Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The Monaco Grand Prix circuit includes the Rascasse hairpin, one of the slowest corners in Formula 1.",
        es: "El circuito del Gran Premio de Mónaco incluye la horquilla Rascasse, una de las curvas más lentas de la Fórmula 1.",
        de: "Die Monaco-Grand-Prix-Strecke umfasst die Rascasse-Haarnadelkurve, eine der langsamsten Kurven in der Formel 1.",
        nl: "Het Monaco Grand Prix circuit bevat de Rascasse haarspeldbocht, een van de langzaamste bochten in Formule 1."
      }
    },
    {
      question: {
        en: "The 2010 Abu Dhabi Grand Prix saw which driver win their first championship?",
        es: "¿Qué piloto ganó su primer campeonato en el Gran Premio de Abu Dhabi de 2010?",
        de: "Welcher Fahrer gewann beim Abu Dhabi Grand Prix 2010 seine erste Meisterschaft?",
        nl: "Welke coureur won zijn eerste kampioenschap tijdens de Abu Dhabi Grand Prix van 2010?"
      },
      options: [
        "Fernando Alonso",
        "Mark Webber",
        "Sebastian Vettel",
        "Lewis Hamilton"
      ],
      correct: 2,
      explanation: {
        en: "Sebastian Vettel won his first championship at the 2010 Abu Dhabi GP, becoming the youngest champion at age 23.",
        es: "Sebastian Vettel ganó su primer campeonato en el GP de Abu Dhabi de 2010, convirtiéndose en el campeón más joven a los 23 años.",
        de: "Sebastian Vettel gewann seine erste Meisterschaft beim Abu Dhabi GP 2010 und wurde mit 23 Jahren jüngster Champion.",
        nl: "Sebastian Vettel won zijn eerste kampioenschap tijdens de Abu Dhabi GP van 2010, en werd de jongste kampioen op 23-jarige leeftijd."
      }
    },
    {
      question: {
        en: "Which Grand Prix features the famous Degner Curves section?",
        es: "¿Qué Gran Premio cuenta con la famosa sección de Curvas Degner?",
        de: "Welcher Grand Prix hat den berühmten Degner-Kurven-Abschnitt?",
        nl: "Welke Grand Prix heeft het beroemde Degner Curves gedeelte?"
      },
      options: [
        "Japanese Grand Prix",
        "Chinese Grand Prix",
        "Korean Grand Prix",
        "Malaysian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The Japanese Grand Prix at Suzuka features the Degner Curves, named after motorcycle racer Ernst Degner.",
        es: "El Gran Premio de Japón en Suzuka cuenta con las Curvas Degner, nombradas en honor al piloto de motocicletas Ernst Degner.",
        de: "Der Japanische Grand Prix in Suzuka hat die Degner-Kurven, benannt nach dem Motorradrennfahrer Ernst Degner.",
        nl: "De Japanse Grand Prix op Suzuka heeft de Degner Curves, genoemd naar motorcoureur Ernst Degner."
      }
    },
    {
      question: {
        en: "The 1986 Australian Grand Prix decided the championship in whose favor?",
        es: "¿A favor de quién decidió el campeonato el Gran Premio de Australia de 1986?",
        de: "Zugunsten von wem entschied der Australische Grand Prix 1986 die Meisterschaft?",
        nl: "In wiens voordeel besliste de Australische Grand Prix van 1986 het kampioenschap?"
      },
      options: [
        "Nigel Mansell",
        "Nelson Piquet",
        "Alain Prost",
        "Ayrton Senna"
      ],
      correct: 2,
      explanation: {
        en: "Alain Prost won the 1986 championship at the Australian GP after Nigel Mansell's tire exploded and Nelson Piquet crashed.",
        es: "Alain Prost ganó el campeonato de 1986 en el GP de Australia después de que el neumático de Nigel Mansell explotara y Nelson Piquet se estrellara.",
        de: "Alain Prost gewann die Meisterschaft 1986 beim Australischen GP nachdem Nigel Mansells Reifen explodierte und Nelson Piquet verunglückte.",
        nl: "Alain Prost won het kampioenschap van 1986 tijdens de Australische GP nadat Nigel Mansells band explodeerde en Nelson Piquet crashte."
      }
    },
    {
      question: {
        en: "Which race is held at the Yas Marina Circuit?",
        es: "¿Qué carrera se celebra en el Circuito Yas Marina?",
        de: "Welches Rennen findet auf dem Yas Marina Circuit statt?",
        nl: "Welke race wordt gehouden op het Yas Marina Circuit?"
      },
      options: [
        "Bahrain Grand Prix",
        "Abu Dhabi Grand Prix",
        "Qatar Grand Prix",
        "Saudi Arabian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The Abu Dhabi Grand Prix is held at Yas Marina Circuit, featuring a unique day-to-night race format.",
        es: "El Gran Premio de Abu Dhabi se celebra en el Circuito Yas Marina, con un formato único de carrera de día a noche.",
        de: "Der Abu Dhabi Grand Prix findet auf dem Yas Marina Circuit statt, mit einem einzigartigen Tag-zu-Nacht-Rennformat.",
        nl: "De Abu Dhabi Grand Prix wordt gehouden op het Yas Marina Circuit, met een uniek dag-naar-nacht race format."
      }
    },
    {
      question: {
        en: "The 1989 Japanese Grand Prix at Suzuka saw which famous collision?",
        es: "¿Qué famosa colisión vio el Gran Premio de Japón de 1989 en Suzuka?",
        de: "Welche berühmte Kollision sah der Japanische Grand Prix 1989 in Suzuka?",
        nl: "Welke beroemde botsing zag de Japanse Grand Prix van 1989 in Suzuka?"
      },
      options: [
        "Prost-Senna",
        "Mansell-Piquet",
        "Schumacher-Hill",
        "Vettel-Webber"
      ],
      correct: 0,
      explanation: {
        en: "Alain Prost and Ayrton Senna collided at the chicane in the 1989 Japanese GP, deciding the championship in Prost's favor.",
        es: "Alain Prost y Ayrton Senna colisionaron en la chicana en el GP de Japón de 1989, decidiendo el campeonato a favor de Prost.",
        de: "Alain Prost und Ayrton Senna kollidierten in der Schikane beim Japanischen GP 1989, was die Meisterschaft zugunsten Prosts entschied.",
        nl: "Alain Prost en Ayrton Senna botsten bij de chicane in de Japanse GP van 1989, wat het kampioenschap in het voordeel van Prost besliste."
      }
    },
    {
      question: {
        en: "Which circuit features the famous Maggotts-Becketts complex?",
        es: "¿Qué circuito cuenta con el famoso complejo Maggotts-Becketts?",
        de: "Welche Rennstrecke hat den berühmten Maggotts-Becketts-Komplex?",
        nl: "Welk circuit heeft het beroemde Maggotts-Becketts complex?"
      },
      options: [
        "Silverstone",
        "Spa-Francorchamps",
        "Monza",
        "Suzuka"
      ],
      correct: 0,
      explanation: {
        en: "Silverstone Circuit features the high-speed Maggotts-Becketts complex, one of the most challenging sections in F1.",
        es: "El Circuito de Silverstone cuenta con el complejo de alta velocidad Maggotts-Becketts, una de las secciones más desafiantes de la F1.",
        de: "Der Silverstone Circuit hat den Hochgeschwindigkeits-Maggotts-Becketts-Komplex, einen der anspruchsvollsten Abschnitte in der F1.",
        nl: "Silverstone Circuit heeft het hoge-snelheid Maggotts-Becketts complex, een van de meest uitdagende secties in F1."
      }
    },
    {
      question: {
        en: "The 2003 Brazilian Grand Prix is famous for what controversial finish?",
        es: "¿Por qué final controvertido es famoso el Gran Premio de Brasil de 2003?",
        de: "Wofür ist der Brasilianische Grand Prix 2003 berühmt für welches kontroverse Finish?",
        nl: "Waarvoor is de Braziliaanse Grand Prix van 2003 beroemd voor welke controversiële finish?"
      },
      options: [
        "Wrong winner declared",
        "Red flag confusion",
        "Tie between drivers",
        "Race canceled"
      ],
      correct: 1,
      explanation: {
        en: "The 2003 Brazilian GP was red-flagged due to rain, and initially the wrong winner was declared before Giancarlo Fisichella was confirmed as the winner.",
        es: "El GP de Brasil de 2003 fue detenido con bandera roja debido a la lluvia, y inicialmente se declaró al ganador equivocado antes de que Giancarlo Fisichella fuera confirmado como ganador.",
        de: "Der Brasilianische GP 2003 wurde wegen Regen mit roter Flagge gestoppt, und zunächst wurde der falsche Gewinner erklärt bevor Giancarlo Fisichella als Sieger bestätigt wurde.",
        nl: "De Braziliaanse GP van 2003 werd met rode vlag gestopt vanwege regen, en aanvankelijk werd de verkeerde winnaar uitgeroepen voordat Giancarlo Fisichella als winnaar werd bevestigd."
      }
    },
    {
      question: {
        en: "Which Grand Prix first introduced the DRS (Drag Reduction System) in 2011?",
        es: "¿Qué Gran Premio introdujo por primera vez el DRS (Sistema de Reducción de Resistencia) en 2011?",
        de: "Welcher Grand Prix führte 2011 erstmals das DRS (Drag Reduction System) ein?",
        nl: "Welke Grand Prix introduceerde voor het eerst het DRS (Drag Reduction System) in 2011?"
      },
      options: [
        "Australian Grand Prix",
        "Malaysian Grand Prix",
        "Chinese Grand Prix",
        "Bahrain Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "The DRS system was first used at the 2011 Australian Grand Prix to aid overtaking in F1.",
        es: "El sistema DRS se utilizó por primera vez en el Gran Premio de Australia de 2011 para ayudar en los adelantamientos en F1.",
        de: "Das DRS-System wurde erstmals beim Australischen Grand Prix 2011 eingesetzt, um Überholmanöver in der F1 zu erleichtern.",
        nl: "Het DRS-systeem werd voor het eerst gebruikt tijdens de Australische Grand Prix van 2011 om inhalen in F1 te vergemakkelijken."
      }
    },
    {
      question: {
        en: "The 2021 Abu Dhabi Grand Prix is controversial for deciding the championship how?",
        es: "¿Cómo es controvertido el Gran Premio de Abu Dhabi de 2021 por decidir el campeonato?",
        de: "Wie ist der Abu Dhabi Grand Prix 2021 kontrovers bei der Meisterschaftsentscheidung?",
        nl: "Hoe is de Abu Dhabi Grand Prix van 2021 controversieel bij het beslissen van het kampioenschap?"
      },
      options: [
        "Safety car restart rules",
        "Red flag confusion",
        "Fuel irregularity",
        "Track limits violation"
      ],
      correct: 0,
      explanation: {
        en: "The 2021 Abu Dhabi GP saw Max Verstappen win the championship on the final lap after a controversial safety car restart decision.",
        es: "El GP de Abu Dhabi de 2021 vio a Max Verstappen ganar el campeonato en la última vuelta después de una controvertida decisión de reinicio del coche de seguridad.",
        de: "Der Abu Dhabi GP 2021 sah Max Verstappen die Meisterschaft in der letzten Runde gewinnen nach einer kontroversen Safety-Car-Neustart-Entscheidung.",
        nl: "De Abu Dhabi GP van 2021 zag Max Verstappen het kampioenschap winnen in de laatste ronde na een controversiële safety car herstart beslissing."
      }
    },
    {
      question: {
        en: "Which circuit is nicknamed 'The Cathedral of Speed'?",
        es: "¿Qué circuito tiene el apodo de 'La Catedral de la Velocidad'?",
        de: "Welche Rennstrecke trägt den Spitznamen 'Kathedrale der Geschwindigkeit'?",
        nl: "Welk circuit heeft de bijnaam 'De Kathedraal van Snelheid'?"
      },
      options: [
        "Monza",
        "Imola",
        "Mugello",
        "Spa-Francorchamps"
      ],
      correct: 1,
      explanation: {
        en: "Imola (Autodromo Enzo e Dino Ferrari) is known as the 'Cathedral of Speed' and hosted the San Marino Grand Prix.",
        es: "Imola (Autodromo Enzo e Dino Ferrari) es conocido como la 'Catedral de la Velocidad' y acogió el Gran Premio de San Marino.",
        de: "Imola (Autodromo Enzo e Dino Ferrari) ist als 'Kathedrale der Geschwindigkeit' bekannt und war Gastgeber des San-Marino-Grand-Prix.",
        nl: "Imola (Autodromo Enzo e Dino Ferrari) staat bekend als de 'Kathedraal van Snelheid' en organiseerde de San Marino Grand Prix."
      }
    },
    {
      question: {
        en: "The 2020 Tuscan Grand Prix at Mugello saw how many red flags?",
        es: "¿Cuántas banderas rojas vio el Gran Premio de Toscana de 2020 en Mugello?",
        de: "Wie viele rote Flaggen sah der Toskanische Grand Prix 2020 in Mugello?",
        nl: "Hoeveel rode vlaggen zag de Toscaanse Grand Prix van 2020 in Mugello?"
      },
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      correct: 2,
      explanation: {
        en: "The 2020 Tuscan GP saw two red flags due to separate major crashes, making it one of the most chaotic races.",
        es: "El GP de Toscana de 2020 vio dos banderas rojas debido a accidentes importantes separados, convirtiéndola en una de las carreras más caóticas.",
        de: "Der Toskanische GP 2020 sah zwei rote Flaggen aufgrund separater schwerer Unfälle, was es zu einem der chaotischsten Rennen machte.",
        nl: "De Toscaanse GP van 2020 zag twee rode vlaggen vanwege aparte grote crashes, waardoor het een van de meest chaotische races werd."
      }
    },
    {
      question: {
        en: "Which race features the famous Turn 8 hairpin at Istanbul Park?",
        es: "¿Qué carrera cuenta con la famosa horquilla de la Curva 8 en el Parque de Estambul?",
        de: "Welches Rennen hat die berühmte Haarnadelkurve 8 im Istanbul Park?",
        nl: "Welke race heeft de beroemde Bocht 8 haarspeld bij Istanbul Park?"
      },
      options: [
        "Abu Dhabi Grand Prix",
        "Bahrain Grand Prix",
        "Turkish Grand Prix",
        "Azerbaijan Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "The Turkish Grand Prix at Istanbul Park features Turn 8, a multi-apex left-hander that is one of the most challenging corners in F1.",
        es: "El Gran Premio de Turquía en el Parque de Estambul cuenta con la Curva 8, una curva a la izquierda de múltiples ápices que es una de las más desafiantes en F1.",
        de: "Der Türkische Grand Prix im Istanbul Park hat Kurve 8, eine Links-Kurve mit mehreren Scheitelpunkten, die eine der anspruchsvollsten Kurven in der F1 ist.",
        nl: "De Turkse Grand Prix bij Istanbul Park heeft Bocht 8, een linkerbocht met meerdere apexen die een van de meest uitdagende bochten in F1 is."
      }
    },
    {
      question: {
        en: "The 2012 European Grand Prix in Valencia saw which driver win from 11th on the grid?",
        es: "¿Qué piloto ganó desde el puesto 11 en la parrilla en el Gran Premio de Europa de 2012 en Valencia?",
        de: "Welcher Fahrer gewann beim Europäischen Grand Prix 2012 in Valencia vom 11. Startplatz?",
        nl: "Welke coureur won vanaf de 11e positie op de grid tijdens de Europese Grand Prix van 2012 in Valencia?"
      },
      options: [
        "Sebastian Vettel",
        "Kimi Räikkönen",
        "Fernando Alonso",
        "Lewis Hamilton"
      ],
      correct: 2,
      explanation: {
        en: "Fernando Alonso won the 2012 European GP in Valencia from 11th on the grid in a Ferrari, one of his greatest drives.",
        es: "Fernando Alonso ganó el GP de Europa de 2012 en Valencia desde el puesto 11 en la parrilla en un Ferrari, una de sus mejores carreras.",
        de: "Fernando Alonso gewann den Europäischen GP 2012 in Valencia vom 11. Startplatz in einem Ferrari, eine seiner größten Fahrten.",
        nl: "Fernando Alonso won de Europese GP van 2012 in Valencia vanaf de 11e positie op de grid in een Ferrari, een van zijn grootste races."
      }
    },
    {
      question: {
        en: "Which Grand Prix was first held in 2004 and features a double-apex first corner?",
        es: "¿Qué Gran Premio se celebró por primera vez en 2004 y cuenta con una primera curva de doble ápice?",
        de: "Welcher Grand Prix fand erstmals 2004 statt und hat eine erste Kurve mit doppeltem Scheitelpunkt?",
        nl: "Welke Grand Prix werd voor het eerst gehouden in 2004 en heeft een eerste bocht met dubbele apex?"
      },
      options: [
        "Chinese Grand Prix",
        "Bahrain Grand Prix",
        "Turkish Grand Prix",
        "Korean Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The Bahrain Grand Prix at Sakhir Circuit, first held in 2004, features a double-apex Turn 1 followed by tight Turn 2.",
        es: "El Gran Premio de Baréin en el Circuito de Sakhir, celebrado por primera vez en 2004, cuenta con una Curva 1 de doble ápice seguida de una Curva 2 cerrada.",
        de: "Der Bahrain Grand Prix auf dem Sakhir Circuit, erstmals 2004 ausgetragen, hat eine Kurve 1 mit doppeltem Scheitelpunkt gefolgt von der engen Kurve 2.",
        nl: "De Bahrein Grand Prix op het Sakhir Circuit, voor het eerst gehouden in 2004, heeft een Bocht 1 met dubbele apex gevolgd door strakke Bocht 2."
      }
    },
    {
      question: {
        en: "The 1990 Japanese Grand Prix saw which collision deciding the championship?",
        es: "¿Qué colisión decidió el campeonato en el Gran Premio de Japón de 1990?",
        de: "Welche Kollision entschied beim Japanischen Grand Prix 1990 die Meisterschaft?",
        nl: "Welke botsing besliste het kampioenschap tijdens de Japanse Grand Prix van 1990?"
      },
      options: [
        "Prost-Senna at first corner",
        "Mansell-Piquet",
        "Schumacher-Hill",
        "Vettel-Webber"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna deliberately crashed into Alain Prost at the first corner of the 1990 Japanese GP, securing his second championship.",
        es: "Ayrton Senna chocó deliberadamente contra Alain Prost en la primera curva del GP de Japón de 1990, asegurando su segundo campeonato.",
        de: "Ayrton Senna crashte absichtlich in Alain Prost in der ersten Kurve des Japanischen GP 1990 und sicherte sich seine zweite Meisterschaft.",
        nl: "Ayrton Senna crashte opzettelijk in Alain Prost bij de eerste bocht van de Japanse GP van 1990, waarmee hij zijn tweede kampioenschap veiligstelde."
      }
    }
  ];

  return {
    questions: questions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level1;
}
