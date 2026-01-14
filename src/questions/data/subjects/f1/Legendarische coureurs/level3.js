// Legendarische coureurs Quiz - Level 3
(function() {
  const level3 = {
    name: {
      en: "Legendarische coureurs Level 3",
      es: "Legendarische coureurs Nivel 3",
      de: "Legendarische coureurs Stufe 3",
      nl: "Legendarische coureurs Level 3"
    },
    questions: [
      {
        question: {
          en: "What was Ayrton Senna's winning percentage in Monaco Grand Prix races?",
          es: "¿Cuál fue el porcentaje de victorias de Ayrton Senna en carreras del Gran Premio de Mónaco?",
          de: "Wie hoch war Ayrton Sennas Siegquote beim Monaco Grand Prix?",
          nl: "Wat was Ayrton Senna's winpercentage in Monaco Grand Prix-races?"
        },
        options: ["5 wins from 10 races", "6 wins from 10 races", "6 wins from 11 races", "5 wins from 9 races"],
        correct: 1,
        explanation: {
          en: "Ayrton Senna won the Monaco Grand Prix 6 times from 10 attempts (1987, 1989, 1990, 1991, 1992, 1993), earning him the nickname 'King of Monaco'.",
          es: "Ayrton Senna ganó el Gran Premio de Mónaco 6 veces de 10 intentos (1987, 1989, 1990, 1991, 1992, 1993), ganándose el apodo de 'Rey de Mónaco'.",
          de: "Ayrton Senna gewann den Monaco Grand Prix 6 Mal von 10 Versuchen (1987, 1989, 1990, 1991, 1992, 1993) und verdiente sich den Spitznamen 'König von Monaco'.",
          nl: "Ayrton Senna won de Monaco Grand Prix 6 keer van 10 pogingen (1987, 1989, 1990, 1991, 1992, 1993), waarmee hij de bijnaam 'Koning van Monaco' verdiende."
        }
      },
      {
        question: {
          en: "Which race in 1993 is considered Ayrton Senna's greatest performance in wet conditions?",
          es: "¿Qué carrera en 1993 se considera la mejor actuación de Ayrton Senna en condiciones húmedas?",
          de: "Welches Rennen 1993 gilt als Ayrton Sennas größte Leistung bei Regenwetter?",
          nl: "Welke race in 1993 wordt beschouwd als Ayrton Senna's grootste prestatie in natte omstandigheden?"
        },
        options: ["Brazilian GP", "European GP at Donington Park", "Monaco GP", "Belgian GP"],
        correct: 1,
        explanation: {
          en: "The 1993 European Grand Prix at Donington Park is considered Senna's masterpiece, where he went from 5th to 1st on the opening lap in wet conditions and lapped all but second place.",
          es: "El Gran Premio de Europa de 1993 en Donington Park es considerado la obra maestra de Senna, donde pasó del 5º al 1º en la vuelta de apertura en condiciones húmedas y dio una vuelta a todos excepto al segundo lugar.",
          de: "Der Große Preis von Europa 1993 in Donington Park gilt als Sennas Meisterwerk, wo er in der Eröffnungsrunde bei Regen vom 5. auf den 1. Platz vorrückte und alle außer dem Zweiten überrundete.",
          nl: "De Europese Grand Prix van 1993 in Donington Park wordt beschouwd als Senna's meesterwerk, waar hij van de 5e naar de 1e plaats ging in de openingsronde in natte omstandigheden en iedereen behalve de tweede plaats op een ronde zette."
        }
      },
      {
        question: {
          en: "How many fastest laps did Michael Schumacher achieve during his career?",
          es: "¿Cuántas vueltas más rápidas logró Michael Schumacher durante su carrera?",
          de: "Wie viele schnellste Runden erreichte Michael Schumacher während seiner Karriere?",
          nl: "Hoeveel snelste rondes behaalde Michael Schumacher tijdens zijn carrière?"
        },
        options: ["68", "77", "82", "91"],
        correct: 1,
        explanation: {
          en: "Michael Schumacher achieved 77 fastest laps during his career, a record that stood until Lewis Hamilton surpassed it in 2021.",
          es: "Michael Schumacher logró 77 vueltas más rápidas durante su carrera, un récord que se mantuvo hasta que Lewis Hamilton lo superó en 2021.",
          de: "Michael Schumacher erreichte 77 schnellste Runden während seiner Karriere, ein Rekord der bis 2021 bestand, als Lewis Hamilton ihn übertraf.",
          nl: "Michael Schumacher behaalde 77 snelste rondes tijdens zijn carrière, een record dat standhield totdat Lewis Hamilton het in 2021 overtrof."
        }
      },
      {
        question: {
          en: "What percentage of races did Michael Schumacher win during his dominant 2004 season?",
          es: "¿Qué porcentaje de carreras ganó Michael Schumacher durante su dominante temporada 2004?",
          de: "Wie viel Prozent der Rennen gewann Michael Schumacher in seiner dominanten Saison 2004?",
          nl: "Welk percentage van de races won Michael Schumacher tijdens zijn dominante seizoen 2004?"
        },
        options: ["11 of 18 races", "12 of 18 races", "13 of 18 races", "14 of 18 races"],
        correct: 2,
        explanation: {
          en: "Michael Schumacher won 13 of 18 races in 2004 (72%), finishing on the podium in all 18 races and clinching the championship with 4 races remaining.",
          es: "Michael Schumacher ganó 13 de 18 carreras en 2004 (72%), terminando en el podio en las 18 carreras y asegurando el campeonato faltando 4 carreras.",
          de: "Michael Schumacher gewann 2004 13 von 18 Rennen (72%), stand in allen 18 Rennen auf dem Podium und sicherte sich die Meisterschaft 4 Rennen vor Schluss.",
          nl: "Michael Schumacher won 13 van 18 races in 2004 (72%), eindigde in alle 18 races op het podium en verzekerde zich van het kampioenschap met nog 4 races te gaan."
        }
      },
      {
        question: {
          en: "Which legendary performance did Juan Manuel Fangio deliver at the 1957 German Grand Prix?",
          es: "¿Qué actuación legendaria entregó Juan Manuel Fangio en el Gran Premio de Alemania de 1957?",
          de: "Welche legendäre Leistung erbrachte Juan Manuel Fangio beim Großen Preis von Deutschland 1957?",
          nl: "Welke legendarische prestatie leverde Juan Manuel Fangio bij de Duitse Grand Prix van 1957?"
        },
        options: ["Pit stop comeback", "Lap record broken 10 times", "Won from last place", "Led every lap"],
        correct: 1,
        explanation: {
          en: "At the 1957 Nürburgring, Fangio made a long pit stop, dropped to 3rd, then broke the lap record 10 times in pursuit, ultimately passing both Ferraris to win at age 46.",
          es: "En Nürburgring 1957, Fangio hizo una larga parada en boxes, cayó al 3er lugar, luego rompió el récord de vuelta 10 veces en persecución, finalmente pasando ambos Ferraris para ganar a los 46 años.",
          de: "Beim Nürburgring 1957 machte Fangio einen langen Boxenstopp, fiel auf Platz 3 zurück, brach dann 10 Mal den Rundenrekord auf der Verfolgung und überholte schließlich beide Ferraris zum Sieg mit 46 Jahren.",
          nl: "Bij de Nürburgring 1957 maakte Fangio een lange pitstop, viel terug naar de 3e plaats, brak toen 10 keer het ronderecord tijdens de achtervolging en passeerde uiteindelijk beide Ferrari's om te winnen op 46-jarige leeftijd."
        }
      },
      {
        question: {
          en: "How many different teams did Juan Manuel Fangio win World Championships with?",
          es: "¿Con cuántos equipos diferentes ganó Juan Manuel Fangio Campeonatos Mundiales?",
          de: "Mit wie vielen verschiedenen Teams gewann Juan Manuel Fangio Weltmeisterschaften?",
          nl: "Met hoeveel verschillende teams won Juan Manuel Fangio Wereldkampioenschappen?"
        },
        options: ["3 teams", "4 teams", "5 teams", "2 teams"],
        correct: 1,
        explanation: {
          en: "Fangio won championships with 4 different teams: Alfa Romeo (1951), Mercedes (1954-55), Ferrari (1956), and Maserati (1957), a record of versatility never matched.",
          es: "Fangio ganó campeonatos con 4 equipos diferentes: Alfa Romeo (1951), Mercedes (1954-55), Ferrari (1956) y Maserati (1957), un récord de versatilidad nunca igualado.",
          de: "Fangio gewann Meisterschaften mit 4 verschiedenen Teams: Alfa Romeo (1951), Mercedes (1954-55), Ferrari (1956) und Maserati (1957), ein nie erreichte Rekord an Vielseitigkeit.",
          nl: "Fangio won kampioenschappen met 4 verschillende teams: Alfa Romeo (1951), Mercedes (1954-55), Ferrari (1956) en Maserati (1957), een record van veelzijdigheid dat nooit is geëvenaard."
        }
      },
      {
        question: {
          en: "How long after Niki Lauda's 1976 Nürburgring crash did he return to racing?",
          es: "¿Cuánto tiempo después del accidente de Niki Lauda en Nürburgring de 1976 regresó a las carreras?",
          de: "Wie lange nach Niki Laudas Nürburgring-Unfall 1976 kehrte er zum Rennsport zurück?",
          nl: "Hoe lang na Niki Lauda's Nürburgring-crash van 1976 keerde hij terug naar het racen?"
        },
        options: ["4 weeks", "6 weeks", "8 weeks", "10 weeks"],
        correct: 1,
        explanation: {
          en: "Niki Lauda returned to racing just 6 weeks (42 days) after his near-fatal fiery crash at the Nürburgring, with severe burns still healing, finishing 4th at Monza.",
          es: "Niki Lauda regresó a las carreras solo 6 semanas (42 días) después de su casi fatal accidente con fuego en Nürburgring, con quemaduras graves aún sanando, terminando 4º en Monza.",
          de: "Niki Lauda kehrte nur 6 Wochen (42 Tage) nach seinem fast tödlichen Feuerunfall am Nürburgring zum Rennsport zurück, mit schweren Verbrennungen die noch heilten, und wurde in Monza Vierter.",
          nl: "Niki Lauda keerde slechts 6 weken (42 dagen) na zijn bijna dodelijke brand-crash op de Nürburgring terug naar het racen, met ernstige brandwonden die nog steeds genazen, eindigde als 4e in Monza."
        }
      },
      {
        question: {
          en: "What unique circumstance surrounded Niki Lauda's third World Championship in 1984?",
          es: "¿Qué circunstancia única rodeó el tercer Campeonato Mundial de Niki Lauda en 1984?",
          de: "Welche einzigartige Umstände umgaben Niki Laudas dritte Weltmeisterschaft 1984?",
          nl: "Welke unieke omstandigheid omringde Niki Lauda's derde Wereldkampioenschap in 1984?"
        },
        options: ["Won by 0.5 points", "Won from retirement", "Oldest champion", "Fewest wins as champion"],
        correct: 0,
        explanation: {
          en: "Lauda won the 1984 championship by just 0.5 points over teammate Alain Prost, the smallest margin in F1 history at the time (when half-points were awarded for shortened races).",
          es: "Lauda ganó el campeonato de 1984 por solo 0.5 puntos sobre su compañero de equipo Alain Prost, el margen más pequeño en la historia de F1 en ese momento (cuando se otorgaban medios puntos por carreras acortadas).",
          de: "Lauda gewann die Meisterschaft 1984 mit nur 0,5 Punkten Vorsprung vor Teamkollege Alain Prost, der kleinste Vorsprung in der F1-Geschichte zu dieser Zeit (als halbe Punkte für verkürzte Rennen vergeben wurden).",
          nl: "Lauda won het kampioenschap van 1984 met slechts 0,5 punten voorsprong op teamgenoot Alain Prost, de kleinste marge in de F1-geschiedenis op dat moment (toen halve punten werden toegekend voor verkorte races)."
        }
      },
      {
        question: {
          en: "Which circuit did Alain Prost win at a record number of times during his career?",
          es: "¿En qué circuito ganó Alain Prost un número récord de veces durante su carrera?",
          de: "Auf welcher Strecke gewann Alain Prost während seiner Karriere rekordverdächtig oft?",
          nl: "Op welk circuit won Alain Prost een recordaantal keren tijdens zijn carrière?"
        },
        options: ["Monaco - 4 times", "Brazil - 6 times", "Monaco - 5 times", "France - 7 times"],
        correct: 1,
        explanation: {
          en: "Alain Prost won the Brazilian Grand Prix 6 times (1982, 1984, 1985, 1987, 1988, 1990), more than any other driver at a single venue during his era.",
          es: "Alain Prost ganó el Gran Premio de Brasil 6 veces (1982, 1984, 1985, 1987, 1988, 1990), más que cualquier otro piloto en un solo lugar durante su era.",
          de: "Alain Prost gewann den Großen Preis von Brasilien 6 Mal (1982, 1984, 1985, 1987, 1988, 1990), öfter als jeder andere Fahrer an einem einzigen Ort während seiner Ära.",
          nl: "Alain Prost won de Braziliaanse Grand Prix 6 keer (1982, 1984, 1985, 1987, 1988, 1990), meer dan enige andere coureur op één locatie tijdens zijn tijdperk."
        }
      },
      {
        question: {
          en: "What was significant about Alain Prost's retirement at the end of 1993?",
          es: "¿Qué fue significativo sobre la retirada de Alain Prost al final de 1993?",
          de: "Was war bedeutsam an Alain Prosts Rücktritt Ende 1993?",
          nl: "Wat was belangrijk aan Alain Prost's pensioen aan het einde van 1993?"
        },
        options: ["Retired as points record holder", "Youngest to retire as champion", "Most wins record", "Longest career"],
        correct: 0,
        explanation: {
          en: "Prost retired after winning his 4th championship in 1993, holding the records for most wins (51), podiums (106), and points (798.5), all later broken by Michael Schumacher.",
          es: "Prost se retiró después de ganar su 4º campeonato en 1993, teniendo los récords de más victorias (51), podios (106) y puntos (798.5), todos luego superados por Michael Schumacher.",
          de: "Prost zog sich nach seinem 4. Meistertitel 1993 zurück und hielt die Rekorde für die meisten Siege (51), Podiumsplätze (106) und Punkte (798,5), die alle später von Michael Schumacher gebrochen wurden.",
          nl: "Prost trad af na het winnen van zijn 4e kampioenschap in 1993, met de records voor meeste overwinningen (51), podiumplaatsen (106) en punten (798,5), allemaal later gebroken door Michael Schumacher."
        }
      },
      {
        question: {
          en: "What safety innovation did Jackie Stewart champion that changed F1 forever?",
          es: "¿Qué innovación de seguridad defendió Jackie Stewart que cambió la F1 para siempre?",
          de: "Welche Sicherheitsinnovation setzte Jackie Stewart durch, die die F1 für immer veränderte?",
          nl: "Welke veiligheidsinnovatie verdedigde Jackie Stewart die F1 voor altijd veranderde?"
        },
        options: ["Mandatory helmets", "Medical facilities at tracks", "HANS device", "Fireproof suits"],
        correct: 1,
        explanation: {
          en: "Jackie Stewart campaigned for proper medical facilities, barriers, run-off areas, and safety standards at circuits after witnessing numerous fatal accidents in the 1960s-70s.",
          es: "Jackie Stewart hizo campaña por instalaciones médicas adecuadas, barreras, áreas de escape y estándares de seguridad en circuitos después de presenciar numerosos accidentes fatales en los años 1960-70.",
          de: "Jackie Stewart setzte sich für angemessene medizinische Einrichtungen, Barrieren, Auslaufzonen und Sicherheitsstandards auf Rennstrecken ein, nachdem er in den 1960er-70er Jahren zahlreiche tödliche Unfälle miterlebt hatte.",
          nl: "Jackie Stewart voerde campagne voor goede medische faciliteiten, barrières, uitloopzones en veiligheidsnormen op circuits na het meemaken van talrijke dodelijke ongelukken in de jaren 1960-70."
        }
      },
      {
        question: {
          en: "How many races did Jim Clark lead from start to finish during his 1963 championship season?",
          es: "¿Cuántas carreras lideró Jim Clark de principio a fin durante su temporada de campeonato de 1963?",
          de: "Wie viele Rennen führte Jim Clark während seiner Meisterschaftssaison 1963 von Start bis Ziel an?",
          nl: "Hoeveel races leidde Jim Clark van start tot finish tijdens zijn kampioenschap seizoen van 1963?"
        },
        options: ["5 races", "6 races", "7 races", "8 races"],
        correct: 2,
        explanation: {
          en: "Jim Clark led all 7 of his winning races from start to finish in 1963, dominating the season with his Lotus 25 in unprecedented fashion, winning 7 of 10 races.",
          es: "Jim Clark lideró las 7 carreras que ganó de principio a fin en 1963, dominando la temporada con su Lotus 25 de manera sin precedentes, ganando 7 de 10 carreras.",
          de: "Jim Clark führte alle 7 seiner gewinnenden Rennen 1963 von Start bis Ziel an und dominierte die Saison mit seinem Lotus 25 auf beispiellose Weise, gewann 7 von 10 Rennen.",
          nl: "Jim Clark leidde alle 7 van zijn winnende races van start tot finish in 1963, domineerde het seizoen met zijn Lotus 25 op ongekende wijze, won 7 van 10 races."
        }
      },
      {
        question: {
          en: "What tragic event occurred the day after Jochen Rindt clinched the 1970 championship posthumously?",
          es: "¿Qué evento trágico ocurrió el día después de que Jochen Rindt asegurara el campeonato de 1970 póstumamente?",
          de: "Welches tragische Ereignis ereignete sich einen Tag nachdem Jochen Rindt die Meisterschaft 1970 posthum gesichert hatte?",
          nl: "Welke tragische gebeurtenis vond plaats de dag nadat Jochen Rindt het kampioenschap van 1970 postuum had verzekerd?"
        },
        options: ["Another driver died", "His car was destroyed", "His team withdrew", "Circuit was closed"],
        correct: 2,
        explanation: {
          en: "Actually, Rindt was killed in practice at Monza in September 1970, and posthumously won the championship when no one could beat his points total by season's end at Watkins Glen.",
          es: "En realidad, Rindt murió en práctica en Monza en septiembre de 1970, y ganó póstumamente el campeonato cuando nadie pudo superar su total de puntos al final de la temporada en Watkins Glen.",
          de: "Tatsächlich wurde Rindt im September 1970 beim Training in Monza getötet und gewann posthum die Meisterschaft, als niemand seine Punktzahl bis zum Saisonende in Watkins Glen schlagen konnte.",
          nl: "Eigenlijk werd Rindt gedood tijdens de training in Monza in september 1970, en won postuum het kampioenschap toen niemand zijn puntentotaal kon verslaan tegen het einde van het seizoen in Watkins Glen."
        }
      },
      {
        question: {
          en: "What extraordinary feat did Stirling Moss accomplish despite never winning a championship?",
          es: "¿Qué hazaña extraordinaria logró Stirling Moss a pesar de nunca ganar un campeonato?",
          de: "Welche außergewöhnliche Leistung vollbrachte Stirling Moss, obwohl er nie eine Meisterschaft gewann?",
          nl: "Welke buitengewone prestatie volbracht Stirling Moss ondanks dat hij nooit een kampioenschap won?"
        },
        options: ["Won in 4 different cars", "16 wins from 66 races", "Oldest race winner", "Most consecutive podiums"],
        correct: 1,
        explanation: {
          en: "Stirling Moss won 16 races from 66 starts (24% win rate), driving for multiple teams and often in inferior machinery, demonstrating his exceptional talent.",
          es: "Stirling Moss ganó 16 carreras de 66 salidas (24% de tasa de victorias), manejando para múltiples equipos y a menudo en maquinaria inferior, demostrando su talento excepcional.",
          de: "Stirling Moss gewann 16 Rennen von 66 Starts (24% Siegquote), fuhr für mehrere Teams und oft in unterlegenen Autos, was sein außergewöhnliches Talent bewies.",
          nl: "Stirling Moss won 16 races van 66 starts (24% winstpercentage), reed voor meerdere teams en vaak in inferieure machines, wat zijn uitzonderlijke talent aantoonde."
        }
      },
      {
        question: {
          en: "What was Nelson Piquet's strategy that earned him the nickname 'The Professor' before Prost?",
          es: "¿Cuál fue la estrategia de Nelson Piquet que le valió el apodo de 'El Profesor' antes que Prost?",
          de: "Was war Nelson Piquets Strategie, die ihm vor Prost den Spitznamen 'Der Professor' einbrachte?",
          nl: "Wat was Nelson Piquet's strategie die hem de bijnaam 'De Professor' opleverde vóór Prost?"
        },
        options: ["Fuel conservation", "Tire management", "Points scoring strategy", "Technical development"],
        correct: 2,
        explanation: {
          en: "Piquet was known for his calculated approach to scoring points consistently rather than always pushing for wins, winning championships with fewer wins but great consistency (1981, 1983, 1987).",
          es: "Piquet era conocido por su enfoque calculado para sumar puntos de manera consistente en lugar de siempre buscar victorias, ganando campeonatos con menos victorias pero gran consistencia (1981, 1983, 1987).",
          de: "Piquet war bekannt für seinen kalkulierten Ansatz, konstant Punkte zu sammeln, anstatt immer auf Siege zu drängen, gewann Meisterschaften mit weniger Siegen aber großer Beständigkeit (1981, 1983, 1987).",
          nl: "Piquet stond bekend om zijn berekende aanpak om consistent punten te scoren in plaats van altijd voor overwinningen te gaan, won kampioenschappen met minder overwinningen maar grote consistentie (1981, 1983, 1987)."
        }
      },
      {
        question: {
          en: "At what age did Emerson Fittipaldi become the youngest World Champion in 1972?",
          es: "¿A qué edad se convirtió Emerson Fittipaldi en el Campeón Mundial más joven en 1972?",
          de: "In welchem Alter wurde Emerson Fittipaldi 1972 jüngster Weltmeister?",
          nl: "Op welke leeftijd werd Emerson Fittipaldi in 1972 de jongste Wereldkampioen?"
        },
        options: ["24 years old", "25 years old", "26 years old", "23 years old"],
        correct: 1,
        explanation: {
          en: "Emerson Fittipaldi won the 1972 championship at age 25 years and 273 days, a record that stood until Fernando Alonso won at 24 in 2005.",
          es: "Emerson Fittipaldi ganó el campeonato de 1972 a los 25 años y 273 días, un récord que se mantuvo hasta que Fernando Alonso ganó a los 24 en 2005.",
          de: "Emerson Fittipaldi gewann die Meisterschaft 1972 im Alter von 25 Jahren und 273 Tagen, ein Rekord der bis 2005 bestand, als Fernando Alonso mit 24 gewann.",
          nl: "Emerson Fittipaldi won het kampioenschap van 1972 op 25 jaar en 273 dagen, een record dat standhield tot Fernando Alonso op 24 won in 2005."
        }
      },
      {
        question: {
          en: "What was controversial about Damon Hill's 1996 championship season?",
          es: "¿Qué fue controvertido sobre la temporada de campeonato de 1996 de Damon Hill?",
          de: "Was war kontrovers an Damon Hills Meisterschaftssaison 1996?",
          nl: "Wat was controversieel aan Damon Hill's kampioenschap seizoen van 1996?"
        },
        options: ["Williams dropped him after winning", "Collision with Schumacher", "Team orders", "Illegal car"],
        correct: 0,
        explanation: {
          en: "Williams announced they would not retain Damon Hill for 1997 mid-season, even though he went on to win the championship, replacing him with Heinz-Harald Frentzen.",
          es: "Williams anunció que no retendría a Damon Hill para 1997 a mitad de temporada, aunque ganó el campeonato, reemplazándolo con Heinz-Harald Frentzen.",
          de: "Williams kündigte mitten in der Saison an, dass sie Damon Hill nicht für 1997 behalten würden, obwohl er die Meisterschaft gewann, und ersetzten ihn durch Heinz-Harald Frentzen.",
          nl: "Williams kondigde halverwege het seizoen aan dat ze Damon Hill niet zouden behouden voor 1997, ook al won hij het kampioenschap, en vervingen hem door Heinz-Harald Frentzen."
        }
      },
      {
        question: {
          en: "What record did Giuseppe Farina hold as the first F1 World Champion in 1950?",
          es: "¿Qué récord tenía Giuseppe Farina como el primer Campeón Mundial de F1 en 1950?",
          de: "Welchen Rekord hielt Giuseppe Farina als erster F1-Weltmeister 1950?",
          nl: "Welk record had Giuseppe Farina als eerste F1 Wereldkampioen in 1950?"
        },
        options: ["Oldest champion at 44", "Most wins in debut season", "Led every lap", "Won first ever race"],
        correct: 0,
        explanation: {
          en: "Giuseppe Farina became World Champion at age 44 in 1950, making him the oldest first-time champion in F1 history, a record that still stands.",
          es: "Giuseppe Farina se convirtió en Campeón Mundial a los 44 años en 1950, convirtiéndolo en el campeón por primera vez más viejo en la historia de F1, un récord que aún se mantiene.",
          de: "Giuseppe Farina wurde 1950 im Alter von 44 Jahren Weltmeister und ist damit der älteste Erstmeister in der F1-Geschichte, ein Rekord der noch besteht.",
          nl: "Giuseppe Farina werd Wereldkampioen op 44-jarige leeftijd in 1950, waardoor hij de oudste eerste kampioen in de F1-geschiedenis is, een record dat nog steeds staat."
        }
      },
      {
        question: {
          en: "What unique double did Graham Hill achieve in 1968?",
          es: "¿Qué doble único logró Graham Hill en 1968?",
          de: "Welches einzigartige Double erreichte Graham Hill 1968?",
          nl: "Welke unieke dubbele prestatie behaalde Graham Hill in 1968?"
        },
        options: ["F1 and Le Mans", "F1 and Indy 500", "Both in same year", "Monaco and Indy 500"],
        correct: 1,
        explanation: {
          en: "Graham Hill won the F1 World Championship and had previously won the Indianapolis 500 (1966), working towards the Triple Crown which he completed with Le Mans in 1972.",
          es: "Graham Hill ganó el Campeonato Mundial de F1 y había ganado previamente las Indianápolis 500 (1966), trabajando hacia la Triple Corona que completó con Le Mans en 1972.",
          de: "Graham Hill gewann die F1-Weltmeisterschaft und hatte zuvor die Indianapolis 500 (1966) gewonnen, arbeitete auf die Triple Crown hin, die er 1972 mit Le Mans vervollständigte.",
          nl: "Graham Hill won het F1 Wereldkampioenschap en had eerder de Indianapolis 500 (1966) gewonnen, werkte aan de Triple Crown die hij in 1972 met Le Mans voltooide."
        }
      },
      {
        question: {
          en: "How did Mika Häkkinen's rivalry with Michael Schumacher define the late 1990s?",
          es: "¿Cómo definió la rivalidad de Mika Häkkinen con Michael Schumacher finales de los años 90?",
          de: "Wie definierte Mika Häkkinens Rivalität mit Michael Schumacher die späten 1990er Jahre?",
          nl: "Hoe definieerde Mika Häkkinen's rivaliteit met Michael Schumacher de late jaren 1990?"
        },
        options: ["Won titles alternating years", "Split championships equally", "Decided by final race both years", "Never finished 1-2"],
        correct: 2,
        explanation: {
          en: "Häkkinen and Schumacher's championships in 1998 and 1999 were both decided at the final race, with Häkkinen winning both in thrilling season finales at Suzuka and Sepang.",
          es: "Los campeonatos de Häkkinen y Schumacher en 1998 y 1999 se decidieron ambos en la carrera final, con Häkkinen ganando ambos en emocionantes finales de temporada en Suzuka y Sepang.",
          de: "Häkkinens und Schumachers Meisterschaften 1998 und 1999 wurden beide beim letzten Rennen entschieden, wobei Häkkinen beide in spannenden Saisonfinales in Suzuka und Sepang gewann.",
          nl: "Häkkinen en Schumacher's kampioenschappen in 1998 en 1999 werden beide beslist in de laatste race, met Häkkinen die beide won in spannende seizoensfinales in Suzuka en Sepang."
        }
      },
      {
        question: {
          en: "What was remarkable about Nigel Mansell's 1992 championship with Williams?",
          es: "¿Qué fue notable sobre el campeonato de 1992 de Nigel Mansell con Williams?",
          de: "Was war bemerkenswert an Nigel Mansells Meisterschaft 1992 mit Williams?",
          nl: "Wat was opmerkelijk aan Nigel Mansell's kampioenschap van 1992 met Williams?"
        },
        options: ["Won title earliest in season", "Most poles in season", "Led every lap of season", "Won all races"],
        correct: 0,
        explanation: {
          en: "Mansell clinched the 1992 championship at the Hungarian GP in August (race 11 of 16), the earliest championship win at the time, after dominating with 9 wins.",
          es: "Mansell aseguró el campeonato de 1992 en el GP de Hungría en agosto (carrera 11 de 16), la victoria de campeonato más temprana en ese momento, después de dominar con 9 victorias.",
          de: "Mansell sicherte sich die Meisterschaft 1992 beim Ungarn-GP im August (Rennen 11 von 16), der früheste Meistertitel zu dieser Zeit, nach Dominanz mit 9 Siegen.",
          nl: "Mansell verzekerde zich van het kampioenschap van 1992 bij de Hongaarse GP in augustus (race 11 van 16), de vroegste kampioenschapsoverwinning op dat moment, na te domineren met 9 overwinningen."
        }
      },
      {
        question: {
          en: "What was Alberto Ascari's winning streak in 1952-1953?",
          es: "¿Cuál fue la racha ganadora de Alberto Ascari en 1952-1953?",
          de: "Was war Alberto Ascaris Siegesserie 1952-1953?",
          nl: "Wat was Alberto Ascari's winstreeks in 1952-1953?"
        },
        options: ["7 consecutive wins", "9 consecutive wins", "11 consecutive wins", "6 consecutive wins"],
        correct: 1,
        explanation: {
          en: "Alberto Ascari won 9 consecutive races from Belgium 1952 to Argentina 1953, a record that stood for 46 years until Sebastian Vettel won 9 straight in 2013.",
          es: "Alberto Ascari ganó 9 carreras consecutivas desde Bélgica 1952 hasta Argentina 1953, un récord que se mantuvo por 46 años hasta que Sebastian Vettel ganó 9 seguidas en 2013.",
          de: "Alberto Ascari gewann 9 aufeinanderfolgende Rennen von Belgien 1952 bis Argentinien 1953, ein Rekord der 46 Jahre bestand bis Sebastian Vettel 2013 9 in Folge gewann.",
          nl: "Alberto Ascari won 9 opeenvolgende races van België 1952 tot Argentinië 1953, een record dat 46 jaar standhield totdat Sebastian Vettel in 2013 9 op rij won."
        }
      },
      {
        question: {
          en: "What made Keke Rosberg's 1982 championship unique?",
          es: "¿Qué hizo único el campeonato de 1982 de Keke Rosberg?",
          de: "Was machte Keke Rosbergs Meisterschaft 1982 einzigartig?",
          nl: "Wat maakte Keke Rosberg's kampioenschap van 1982 uniek?"
        },
        options: ["Only one win as champion", "Fewest points to win", "Most retirements", "No pole positions"],
        correct: 0,
        explanation: {
          en: "Keke Rosberg won the 1982 championship with only one victory (Switzerland), the lowest number of wins for a champion in the modern points system, due to a chaotic season.",
          es: "Keke Rosberg ganó el campeonato de 1982 con solo una victoria (Suiza), el menor número de victorias para un campeón en el sistema de puntos moderno, debido a una temporada caótica.",
          de: "Keke Rosberg gewann die Meisterschaft 1982 mit nur einem Sieg (Schweiz), die niedrigste Anzahl an Siegen für einen Meister im modernen Punktesystem, aufgrund einer chaotischen Saison.",
          nl: "Keke Rosberg won het kampioenschap van 1982 met slechts één overwinning (Zwitserland), het laagste aantal overwinningen voor een kampioen in het moderne puntensysteem, door een chaotisch seizoen."
        }
      },
      {
        question: {
          en: "What controversy marked Jody Scheckter's 1979 championship season?",
          es: "¿Qué controversia marcó la temporada de campeonato de 1979 de Jody Scheckter?",
          de: "Welche Kontroverse kennzeichnete Jody Scheckters Meisterschaftssaison 1979?",
          nl: "Welke controverse kenmerkte Jody Scheckter's kampioenschap seizoen van 1979?"
        },
        options: ["Team orders at Monza", "Illegal car parts", "Protest from teammate", "Disqualification reversed"],
        correct: 0,
        explanation: {
          en: "Scheckter beat teammate Gilles Villeneuve to the 1979 title, with controversy over team orders particularly at Monza where Villeneuve was told not to challenge Scheckter.",
          es: "Scheckter venció a su compañero de equipo Gilles Villeneuve por el título de 1979, con controversia sobre las órdenes del equipo particularmente en Monza donde se le dijo a Villeneuve que no desafiara a Scheckter.",
          de: "Scheckter schlug Teamkollege Gilles Villeneuve um den Titel 1979, mit Kontroversen über Teamorder, besonders in Monza, wo Villeneuve gesagt wurde, Scheckter nicht herauszufordern.",
          nl: "Scheckter versloeg teamgenoot Gilles Villeneuve voor de titel van 1979, met controverse over teamorders vooral in Monza waar Villeneuve werd verteld Scheckter niet uit te dagen."
        }
      },
      {
        question: {
          en: "What record did Phil Hill set as America's first F1 champion in 1961?",
          es: "¿Qué récord estableció Phil Hill como el primer campeón de F1 de Estados Unidos en 1961?",
          de: "Welchen Rekord stellte Phil Hill 1961 als Amerikas erster F1-Meister auf?",
          nl: "Welk record vestigde Phil Hill als Amerika's eerste F1-kampioen in 1961?"
        },
        options: ["First American-born champion", "Oldest American winner", "Most wins by American", "Only American with Ferrari"],
        correct: 0,
        explanation: {
          en: "Phil Hill became the first American-born driver to win the F1 World Championship in 1961 with Ferrari, winning the title at Monza in tragic circumstances after teammate Wolfgang von Trips' fatal crash.",
          es: "Phil Hill se convirtió en el primer piloto nacido en Estados Unidos en ganar el Campeonato Mundial de F1 en 1961 con Ferrari, ganando el título en Monza en circunstancias trágicas después del accidente fatal de su compañero de equipo Wolfgang von Trips.",
          de: "Phil Hill wurde 1961 mit Ferrari der erste in Amerika geborene Fahrer, der die F1-Weltmeisterschaft gewann, und gewann den Titel in Monza unter tragischen Umständen nach dem tödlichen Unfall seines Teamkollegen Wolfgang von Trips.",
          nl: "Phil Hill werd in 1961 de eerste in Amerika geboren coureur die het F1 Wereldkampioenschap won met Ferrari, won de titel in Monza onder tragische omstandigheden na de dodelijke crash van teamgenoot Wolfgang von Trips."
        }
      },
      {
        question: {
          en: "What was special about Mario Andretti's 1978 championship season with Lotus?",
          es: "¿Qué fue especial sobre la temporada de campeonato de 1978 de Mario Andretti con Lotus?",
          de: "Was war besonders an Mario Andrettis Meisterschaftssaison 1978 mit Lotus?",
          nl: "Wat was speciaal aan Mario Andretti's kampioenschap seizoen van 1978 met Lotus?"
        },
        options: ["First ground effect car", "Won from pole every time", "Team 1-2 finish in points", "Led all championship laps"],
        correct: 0,
        explanation: {
          en: "Andretti won the 1978 championship in the revolutionary Lotus 79 ground effect car, which dominated the season and changed F1 aerodynamics forever with 6 wins.",
          es: "Andretti ganó el campeonato de 1978 en el revolucionario Lotus 79 de efecto suelo, que dominó la temporada y cambió la aerodinámica de F1 para siempre con 6 victorias.",
          de: "Andretti gewann die Meisterschaft 1978 im revolutionären Lotus 79 Ground-Effect-Auto, das die Saison dominierte und die F1-Aerodynamik mit 6 Siegen für immer veränderte.",
          nl: "Andretti won het kampioenschap van 1978 in de revolutionaire Lotus 79 ground effect auto, die het seizoen domineerde en F1 aerodynamica voor altijd veranderde met 6 overwinningen."
        }
      },
      {
        question: {
          en: "What was unique about Jack Brabham's achievement in 1966?",
          es: "¿Qué fue único sobre el logro de Jack Brabham en 1966?",
          de: "Was war einzigartig an Jack Brabhams Leistung 1966?",
          nl: "Wat was uniek aan Jack Brabham's prestatie in 1966?"
        },
        options: ["Won in own-name car", "Built own engine", "Oldest champion", "Constructor and driver double"],
        correct: 3,
        explanation: {
          en: "Jack Brabham won the 1966 championship in a Brabham-Repco, becoming the only driver to win both the Drivers' and Constructors' Championships in a car bearing his own name.",
          es: "Jack Brabham ganó el campeonato de 1966 en un Brabham-Repco, convirtiéndose en el único piloto en ganar tanto los Campeonatos de Pilotos como de Constructores en un coche con su propio nombre.",
          de: "Jack Brabham gewann 1966 die Meisterschaft in einem Brabham-Repco und wurde der einzige Fahrer, der sowohl die Fahrer- als auch Konstrukteursweltmeisterschaft in einem Auto mit seinem eigenen Namen gewann.",
          nl: "Jack Brabham won het kampioenschap van 1966 in een Brabham-Repco, en werd de enige coureur die zowel de Coureurs- als Constructeurskampioenschappen won in een auto met zijn eigen naam."
        }
      },
      {
        question: {
          en: "What remarkable achievement did John Surtees accomplish before F1?",
          es: "¿Qué logro notable logró John Surtees antes de la F1?",
          de: "Welche bemerkenswerte Leistung erreichte John Surtees vor der F1?",
          nl: "Welke opmerkelijke prestatie behaalde John Surtees vóór F1?"
        },
        options: ["6 motorcycle titles", "7 motorcycle titles", "8 motorcycle titles", "5 motorcycle titles"],
        correct: 1,
        explanation: {
          en: "John Surtees won 7 motorcycle Grand Prix World Championships (1956, 1958-1960 at 500cc, 1958-1960 at 350cc) before switching to cars and winning the 1964 F1 title.",
          es: "John Surtees ganó 7 Campeonatos Mundiales de Grandes Premios de motociclismo (1956, 1958-1960 en 500cc, 1958-1960 en 350cc) antes de cambiar a autos y ganar el título de F1 de 1964.",
          de: "John Surtees gewann 7 Motorrad-Grand-Prix-Weltmeisterschaften (1956, 1958-1960 bei 500cc, 1958-1960 bei 350cc), bevor er zu Autos wechselte und 1964 den F1-Titel gewann.",
          nl: "John Surtees won 7 motorcross Grand Prix Wereldkampioenschappen (1956, 1958-1960 bij 500cc, 1958-1960 bij 350cc) voordat hij overstapte naar auto's en de F1-titel van 1964 won."
        }
      },
      {
        question: {
          en: "How many years separated Niki Lauda's second and third championships?",
          es: "¿Cuántos años separaron el segundo y tercer campeonatos de Niki Lauda?",
          de: "Wie viele Jahre lagen zwischen Niki Laudas zweiter und dritter Meisterschaft?",
          nl: "Hoeveel jaar zaten er tussen Niki Lauda's tweede en derde kampioenschappen?"
        },
        options: ["5 years", "6 years", "7 years", "8 years"],
        correct: 2,
        explanation: {
          en: "Niki Lauda won in 1975, 1977, then retired before returning to win again in 1984, making it 7 years between his second and third titles with McLaren.",
          es: "Niki Lauda ganó en 1975, 1977, luego se retiró antes de regresar para ganar nuevamente en 1984, haciendo 7 años entre su segundo y tercer títulos con McLaren.",
          de: "Niki Lauda gewann 1975, 1977, zog sich dann zurück, bevor er zurückkehrte, um 1984 wieder zu gewinnen, was 7 Jahre zwischen seinem zweiten und dritten Titel mit McLaren bedeutete.",
          nl: "Niki Lauda won in 1975, 1977, trad toen af voordat hij terugkeerde om opnieuw te winnen in 1984, waardoor er 7 jaar zat tussen zijn tweede en derde titels met McLaren."
        }
      },
      {
        question: {
          en: "What was remarkable about Alan Jones' Williams in 1980?",
          es: "¿Qué fue notable sobre el Williams de Alan Jones en 1980?",
          de: "Was war bemerkenswert an Alan Jones' Williams 1980?",
          nl: "Wat was opmerkelijk aan Alan Jones' Williams in 1980?"
        },
        options: ["First turbocharged winner", "First carbon fiber car", "Ended Ferrari dominance", "First Williams title"],
        correct: 3,
        explanation: {
          en: "Alan Jones won Williams' first Drivers' Championship in 1980 (also their first Constructors' title), establishing Williams as a dominant force in F1 with 5 wins.",
          es: "Alan Jones ganó el primer Campeonato de Pilotos de Williams en 1980 (también su primer título de Constructores), estableciendo a Williams como una fuerza dominante en F1 con 5 victorias.",
          de: "Alan Jones gewann 1980 Williams' erste Fahrerweltmeisterschaft (auch ihren ersten Konstrukteurstitel) und etablierte Williams als dominierende Kraft in der F1 mit 5 Siegen.",
          nl: "Alan Jones won Williams' eerste Coureurskampioenschap in 1980 (ook hun eerste Constructeurstitel), vestigde Williams als een dominante kracht in F1 met 5 overwinningen."
        }
      },
      {
        question: {
          en: "What record did Denny Hulme set in 1967?",
          es: "¿Qué récord estableció Denny Hulme en 1967?",
          de: "Welchen Rekord stellte Denny Hulme 1967 auf?",
          nl: "Welk record vestigde Denny Hulme in 1967?"
        },
        options: ["First New Zealand champion", "Most consistent season", "Fewest wins to win title", "Oldest rookie champion"],
        correct: 0,
        explanation: {
          en: "Denny Hulme became New Zealand's first and only F1 World Champion in 1967, beating teammate Jack Brabham with 2 wins for Brabham.",
          es: "Denny Hulme se convirtió en el primer y único Campeón Mundial de F1 de Nueva Zelanda en 1967, venciendo a su compañero de equipo Jack Brabham con 2 victorias para Brabham.",
          de: "Denny Hulme wurde 1967 Neuseelands erster und einziger F1-Weltmeister und schlug Teamkollege Jack Brabham mit 2 Siegen für Brabham.",
          nl: "Denny Hulme werd in 1967 Nieuw-Zeelands eerste en enige F1 Wereldkampioen, versloeg teamgenoot Jack Brabham met 2 overwinningen voor Brabham."
        }
      },
      {
        question: {
          en: "What was Jim Clark's win percentage in his 1965 championship season?",
          es: "¿Cuál fue el porcentaje de victorias de Jim Clark en su temporada de campeonato de 1965?",
          de: "Wie hoch war Jim Clarks Siegquote in seiner Meisterschaftssaison 1965?",
          nl: "Wat was Jim Clark's winpercentage in zijn kampioenschap seizoen van 1965?"
        },
        options: ["5 of 10 races", "6 of 10 races", "7 of 10 races", "6 of 9 races"],
        correct: 1,
        explanation: {
          en: "Jim Clark won 6 of 10 races in his 1965 championship season with Lotus, also winning the Indianapolis 500 that year in a remarkable double achievement.",
          es: "Jim Clark ganó 6 de 10 carreras en su temporada de campeonato de 1965 con Lotus, también ganando las Indianápolis 500 ese año en un notable doble logro.",
          de: "Jim Clark gewann 6 von 10 Rennen in seiner Meisterschaftssaison 1965 mit Lotus und gewann auch die Indianapolis 500 in diesem Jahr in einer bemerkenswerten Doppelleistung.",
          nl: "Jim Clark won 6 van 10 races in zijn kampioenschap seizoen van 1965 met Lotus, won ook de Indianapolis 500 dat jaar in een opmerkelijke dubbele prestatie."
        }
      },
      {
        question: {
          en: "What tragedy surrounded Mike Hawthorn's 1958 championship?",
          es: "¿Qué tragedia rodeó el campeonato de 1958 de Mike Hawthorn?",
          de: "Welche Tragödie umgab Mike Hawthorns Meisterschaft 1958?",
          nl: "Welke tragedie omringde Mike Hawthorn's kampioenschap van 1958?"
        },
        options: ["Teammate died", "Retired immediately after", "Died months later", "All of the above"],
        correct: 3,
        explanation: {
          en: "Hawthorn's teammate Peter Collins died during the 1958 season. Hawthorn won the title by one point, retired immediately after, then died in a road accident three months later in January 1959.",
          es: "El compañero de equipo de Hawthorn, Peter Collins, murió durante la temporada de 1958. Hawthorn ganó el título por un punto, se retiró inmediatamente después, luego murió en un accidente de tráfico tres meses después en enero de 1959.",
          de: "Hawthorns Teamkollege Peter Collins starb während der Saison 1958. Hawthorn gewann den Titel mit einem Punkt, zog sich sofort zurück und starb drei Monate später im Januar 1959 bei einem Verkehrsunfall.",
          nl: "Hawthorn's teamgenoot Peter Collins stierf tijdens het seizoen van 1958. Hawthorn won de titel met één punt, trad onmiddellijk daarna af, en stierf drie maanden later in januari 1959 bij een auto-ongeluk."
        }
      },
      {
        question: {
          en: "What was significant about Ayrton Senna's McLaren partnership from 1988-1993?",
          es: "¿Qué fue significativo sobre la asociación de Ayrton Senna con McLaren de 1988-1993?",
          de: "Was war bedeutsam an Ayrton Sennas McLaren-Partnerschaft von 1988-1993?",
          nl: "Wat was belangrijk aan Ayrton Senna's McLaren-partnerschap van 1988-1993?"
        },
        options: ["35 wins in 6 years", "3 championships in 6 years", "Never missed podium", "Won every Monaco"],
        correct: 0,
        explanation: {
          en: "Senna won 35 of his 41 career victories during his McLaren years (1988-1993), including all three championships and 5 of his 6 Monaco wins.",
          es: "Senna ganó 35 de sus 41 victorias en su carrera durante sus años en McLaren (1988-1993), incluyendo los tres campeonatos y 5 de sus 6 victorias en Mónaco.",
          de: "Senna gewann 35 seiner 41 Karrieresiege während seiner McLaren-Jahre (1988-1993), einschließlich aller drei Meisterschaften und 5 seiner 6 Monaco-Siege.",
          nl: "Senna won 35 van zijn 41 carrière-overwinningen tijdens zijn McLaren-jaren (1988-1993), inclusief alle drie kampioenschappen en 5 van zijn 6 Monaco-overwinningen."
        }
      },
      {
        question: {
          en: "What made Jacques Villeneuve's 1997 championship victory controversial?",
          es: "¿Qué hizo controvertida la victoria del campeonato de 1997 de Jacques Villeneuve?",
          de: "Was machte Jacques Villeneuves Meisterschaftssieg 1997 kontrovers?",
          nl: "Wat maakte Jacques Villeneuve's kampioenschap overwinning van 1997 controversieel?"
        },
        options: ["Schumacher collision at Jerez", "Team orders", "Illegal car parts", "Points penalty"],
        correct: 0,
        explanation: {
          en: "Villeneuve won the 1997 title after Michael Schumacher attempted to take him out at Jerez in the final race, resulting in Schumacher's disqualification from the championship.",
          es: "Villeneuve ganó el título de 1997 después de que Michael Schumacher intentara sacarlo en Jerez en la carrera final, resultando en la descalificación de Schumacher del campeonato.",
          de: "Villeneuve gewann 1997 den Titel, nachdem Michael Schumacher beim Finale in Jerez versuchte, ihn rauszunehmen, was zu Schumachers Disqualifikation von der Meisterschaft führte.",
          nl: "Villeneuve won de titel van 1997 nadat Michael Schumacher probeerde hem eruit te rijden in Jerez in de laatste race, wat resulteerde in Schumacher's diskwalificatie van het kampioenschap."
        }
      },
      {
        question: {
          en: "What was Jenson Button's remarkable achievement in the 2009 Brawn GP?",
          es: "¿Cuál fue el logro notable de Jenson Button en el Brawn GP de 2009?",
          de: "Was war Jenson Buttons bemerkenswerte Leistung im Brawn GP 2009?",
          nl: "Wat was Jenson Button's opmerkelijke prestatie in de Brawn GP van 2009?"
        },
        options: ["6 of first 7 races", "Won with new team", "Team only existed one year", "All of the above"],
        correct: 3,
        explanation: {
          en: "Button won 6 of the first 7 races with the new Brawn GP team (formed from Honda's withdrawal), won the championship in the team's only season before becoming Mercedes.",
          es: "Button ganó 6 de las primeras 7 carreras con el nuevo equipo Brawn GP (formado tras la retirada de Honda), ganó el campeonato en la única temporada del equipo antes de convertirse en Mercedes.",
          de: "Button gewann 6 der ersten 7 Rennen mit dem neuen Brawn GP-Team (entstanden aus Hondas Rückzug), gewann die Meisterschaft in der einzigen Saison des Teams, bevor es zu Mercedes wurde.",
          nl: "Button won 6 van de eerste 7 races met het nieuwe Brawn GP-team (gevormd uit Honda's terugtrekking), won het kampioenschap in het enige seizoen van het team voordat het Mercedes werd."
        }
      },
      {
        question: {
          en: "What was dramatic about Kimi Räikkönen's 2007 championship win?",
          es: "¿Qué fue dramático sobre la victoria del campeonato de 2007 de Kimi Räikkönen?",
          de: "Was war dramatisch an Kimi Räikkönen's Meisterschaftssieg 2007?",
          nl: "Wat was dramatisch aan Kimi Räikkönen's kampioenschap overwinning van 2007?"
        },
        options: ["Won at final race", "Came from behind", "McLaren drivers excluded", "Three-way battle"],
        correct: 3,
        explanation: {
          en: "Räikkönen won the 2007 title by 1 point in a three-way battle with McLaren's Hamilton and Alonso at the final race in Brazil, with all three mathematically in contention.",
          es: "Räikkönen ganó el título de 2007 por 1 punto en una batalla a tres con Hamilton y Alonso de McLaren en la carrera final en Brasil, con los tres matemáticamente en contienda.",
          de: "Räikkönen gewann den Titel 2007 mit 1 Punkt Vorsprung in einem Dreikampf mit McLarens Hamilton und Alonso beim Finale in Brasilien, wobei alle drei mathematisch im Rennen waren.",
          nl: "Räikkönen won de titel van 2007 met 1 punt voorsprong in een driewegsstrijd met McLaren's Hamilton en Alonso in de laatste race in Brazilië, met alle drie wiskundig in de race."
        }
      },
      {
        question: {
          en: "What records did Fernando Alonso break with his 2005 championship?",
          es: "¿Qué récords rompió Fernando Alonso con su campeonato de 2005?",
          de: "Welche Rekorde brach Fernando Alonso mit seiner Meisterschaft 2005?",
          nl: "Welke records brak Fernando Alonso met zijn kampioenschap van 2005?"
        },
        options: ["Youngest champion at 24", "First Spanish champion", "Ended Schumacher dominance", "All of the above"],
        correct: 3,
        explanation: {
          en: "Alonso became the youngest champion at 24 in 2005, first Spanish F1 champion, and ended Michael Schumacher's five-year reign with Renault, winning 7 races.",
          es: "Alonso se convirtió en el campeón más joven a los 24 en 2005, primer campeón español de F1, y terminó el reinado de cinco años de Michael Schumacher con Renault, ganando 7 carreras.",
          de: "Alonso wurde 2005 mit 24 Jahren jüngster Meister, erster spanischer F1-Meister und beendete Michael Schumachers fünfjährige Herrschaft mit Renault, gewann 7 Rennen.",
          nl: "Alonso werd in 2005 de jongste kampioen op 24, eerste Spaanse F1-kampioen, en beëindigde Michael Schumacher's vijfjarige heerschappij met Renault, won 7 races."
        }
      },
      {
        question: {
          en: "What was Sebastian Vettel's achievement during his Red Bull dominance (2010-2013)?",
          es: "¿Cuál fue el logro de Sebastian Vettel durante su dominio de Red Bull (2010-2013)?",
          de: "Was war Sebastian Vettels Leistung während seiner Red Bull-Dominanz (2010-2013)?",
          nl: "Wat was Sebastian Vettel's prestatie tijdens zijn Red Bull-dominantie (2010-2013)?"
        },
        options: ["4 consecutive titles", "38 wins in 4 years", "Youngest 4-time champion", "All of the above"],
        correct: 3,
        explanation: {
          en: "Vettel won 4 consecutive championships (2010-2013), achieved 38 wins in those 4 years, and became the youngest ever 4-time World Champion at age 26.",
          es: "Vettel ganó 4 campeonatos consecutivos (2010-2013), logró 38 victorias en esos 4 años y se convirtió en el 4 veces Campeón Mundial más joven a los 26 años.",
          de: "Vettel gewann 4 aufeinanderfolgende Meisterschaften (2010-2013), erreichte 38 Siege in diesen 4 Jahren und wurde mit 26 Jahren jüngster 4-facher Weltmeister.",
          nl: "Vettel won 4 opeenvolgende kampioenschappen (2010-2013), behaalde 38 overwinningen in die 4 jaar en werd de jongste 4-voudige Wereldkampioen ooit op 26-jarige leeftijd."
        }
      },
      {
        question: {
          en: "Why was Nico Rosberg's 2016 championship retirement so shocking?",
          es: "¿Por qué fue tan impactante la retirada del campeonato de 2016 de Nico Rosberg?",
          de: "Warum war Nico Rosbergs Rücktritt nach der Meisterschaft 2016 so schockierend?",
          nl: "Waarom was Nico Rosberg's pensioen na het kampioenschap van 2016 zo schokkend?"
        },
        options: ["Retired 5 days after winning", "Peak of career", "Beat Hamilton finally", "All of the above"],
        correct: 3,
        explanation: {
          en: "Rosberg shocked F1 by retiring just 5 days after beating Lewis Hamilton to win his first championship, walking away at the peak of his career after achieving his life goal.",
          es: "Rosberg impactó a la F1 al retirarse solo 5 días después de vencer a Lewis Hamilton para ganar su primer campeonato, retirándose en el pico de su carrera después de lograr su objetivo de vida.",
          de: "Rosberg schockierte die F1, indem er sich nur 5 Tage nach dem Sieg über Lewis Hamilton für seinen ersten Titel zurückzog und auf dem Höhepunkt seiner Karriere ging, nachdem er sein Lebensziel erreicht hatte.",
          nl: "Rosberg schokte F1 door slechts 5 dagen na het verslaan van Lewis Hamilton voor zijn eerste kampioenschap af te treden, ging weg op het hoogtepunt van zijn carrière na het bereiken van zijn levensdoel."
        }
      },
      {
        question: {
          en: "What remarkable feat did Stirling Moss accomplish in the 1961 Monaco GP?",
          es: "¿Qué hazaña notable logró Stirling Moss en el GP de Mónaco de 1961?",
          de: "Welche bemerkenswerte Leistung vollbrachte Stirling Moss beim Monaco GP 1961?",
          nl: "Welke opmerkelijke prestatie volbracht Stirling Moss bij de Monaco GP van 1961?"
        },
        options: ["Won in privateer car", "Beat all factory teams", "Held off Ferrari", "All of the above"],
        correct: 3,
        explanation: {
          en: "Moss won the 1961 Monaco GP in a privateer Lotus, holding off the factory Ferraris of Richie Ginther and Phil Hill in one of the greatest drives in F1 history.",
          es: "Moss ganó el GP de Mónaco de 1961 en un Lotus privado, conteniendo los Ferrari de fábrica de Richie Ginther y Phil Hill en una de las mejores carreras en la historia de F1.",
          de: "Moss gewann den Monaco GP 1961 in einem privaten Lotus und hielt die Werks-Ferraris von Richie Ginther und Phil Hill in einer der größten Fahrleistungen der F1-Geschichte zurück.",
          nl: "Moss won de Monaco GP van 1961 in een particuliere Lotus, hield de fabriek Ferrari's van Richie Ginther en Phil Hill tegen in een van de grootste prestaties in F1-geschiedenis."
        }
      },
      {
        question: {
          en: "What dramatic moment defined Lewis Hamilton's 2008 championship win?",
          es: "¿Qué momento dramático definió la victoria del campeonato de 2008 de Lewis Hamilton?",
          de: "Welcher dramatische Moment definierte Lewis Hamiltons Meisterschaftssieg 2008?",
          nl: "Welk dramatisch moment definieerde Lewis Hamilton's kampioenschap overwinning van 2008?"
        },
        options: ["Last corner pass", "Final lap of season", "Beat Massa by 1 point", "All of the above"],
        correct: 3,
        explanation: {
          en: "Hamilton passed Timo Glock on the final corner of the final lap of the season in Brazil to take 5th place, winning the championship by 1 point over Felipe Massa in dramatic fashion.",
          es: "Hamilton pasó a Timo Glock en la última curva de la última vuelta de la temporada en Brasil para tomar el 5º lugar, ganando el campeonato por 1 punto sobre Felipe Massa de manera dramática.",
          de: "Hamilton überholte Timo Glock in der letzten Kurve der letzten Runde der Saison in Brasilien, um Fünfter zu werden und die Meisterschaft mit 1 Punkt Vorsprung vor Felipe Massa dramatisch zu gewinnen.",
          nl: "Hamilton passeerde Timo Glock in de laatste bocht van de laatste ronde van het seizoen in Brazilië om de 5e plaats te pakken, won het kampioenschap met 1 punt voorsprong op Felipe Massa op dramatische wijze."
        }
      },
      {
        question: {
          en: "What nickname did Kimi Räikkönen earn for his personality and driving style?",
          es: "¿Qué apodo ganó Kimi Räikkönen por su personalidad y estilo de conducción?",
          de: "Welchen Spitznamen verdiente sich Kimi Räikkönen für seine Persönlichkeit und Fahrstil?",
          nl: "Welke bijnaam verdiende Kimi Räikkönen voor zijn persoonlijkheid en rijstijl?"
        },
        options: ["The Iceman", "The Flying Finn", "Ice Cool", "The Quiet Champion"],
        correct: 0,
        explanation: {
          en: "Räikkönen earned the nickname 'The Iceman' for his emotionless demeanor, minimal communication, and ice-cold performance under pressure throughout his long career.",
          es: "Räikkönen ganó el apodo de 'El Hombre de Hielo' por su comportamiento sin emociones, comunicación mínima y actuación fría bajo presión a lo largo de su larga carrera.",
          de: "Räikkönen verdiente sich den Spitznamen 'Der Eismann' für sein emotionsloses Auftreten, minimale Kommunikation und eiskalte Leistung unter Druck während seiner langen Karriere.",
          nl: "Räikkönen verdiende de bijnaam 'The Iceman' voor zijn emotieloze gedrag, minimale communicatie en ijskoude prestaties onder druk tijdens zijn lange carrière."
        }
      },
      {
        question: {
          en: "At what age did Max Verstappen break the record for youngest F1 race winner?",
          es: "¿A qué edad rompió Max Verstappen el récord de ganador de carreras de F1 más joven?",
          de: "In welchem Alter brach Max Verstappen den Rekord für den jüngsten F1-Rennsieger?",
          nl: "Op welke leeftijd brak Max Verstappen het record voor jongste F1-racewinnaar?"
        },
        options: ["18 years 227 days", "18 years 228 days", "18 years 229 days", "19 years 100 days"],
        correct: 1,
        explanation: {
          en: "Max Verstappen became the youngest F1 race winner at 18 years and 228 days when he won the 2016 Spanish Grand Prix on his Red Bull Racing debut after being promoted from Toro Rosso.",
          es: "Max Verstappen se convirtió en el ganador de carreras de F1 más joven a los 18 años y 228 días cuando ganó el Gran Premio de España de 2016 en su debut con Red Bull Racing después de ser promovido desde Toro Rosso.",
          de: "Max Verstappen wurde mit 18 Jahren und 228 Tagen jüngster F1-Rennsieger, als er 2016 beim Spanien-Grand-Prix bei seinem Red Bull Racing-Debüt gewann, nachdem er von Toro Rosso befördert wurde.",
          nl: "Max Verstappen werd de jongste F1-racewinnaar op 18 jaar en 228 dagen toen hij de Spaanse Grand Prix van 2016 won bij zijn Red Bull Racing-debuut na promotie van Toro Rosso."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
