// Legendarische coureurs Quiz - Level 1
(function() {
  const level1 = {
    name: {
      en: "Legendarische coureurs Level 1",
      es: "Legendarische coureurs Nivel 1",
      de: "Legendarische coureurs Stufe 1",
      nl: "Legendarische coureurs Level 1"
    },
    questions: [
      {
        question: {
          en: "Which Brazilian driver won 3 World Championships and tragically died at Imola in 1994?",
          es: "¿Qué piloto brasileño ganó 3 Campeonatos Mundiales y murió trágicamente en Imola en 1994?",
          de: "Welcher brasilianische Fahrer gewann 3 Weltmeisterschaften und starb tragisch in Imola 1994?",
          nl: "Welke Braziliaanse coureur won 3 Wereldkampioenschappen en stierf tragisch in Imola in 1994?"
        },
        options: ["Ayrton Senna", "Nelson Piquet", "Rubens Barrichello", "Emerson Fittipaldi"],
        correct: 0,
        explanation: {
          en: "Ayrton Senna won World Championships in 1988, 1990, and 1991. He was killed in a crash at the San Marino Grand Prix at Imola on May 1, 1994, shocking the racing world.",
          es: "Ayrton Senna ganó Campeonatos Mundiales en 1988, 1990 y 1991. Murió en un accidente en el Gran Premio de San Marino en Imola el 1 de mayo de 1994, conmocionando al mundo de las carreras.",
          de: "Ayrton Senna gewann Weltmeisterschaften 1988, 1990 und 1991. Er wurde bei einem Unfall beim San Marino Grand Prix in Imola am 1. Mai 1994 getötet, was die Rennwelt schockierte.",
          nl: "Ayrton Senna won Wereldkampioenschappen in 1988, 1990 en 1991. Hij kwam om bij een crash bij de San Marino Grand Prix in Imola op 1 mei 1994, wat de racerij wereld schokte."
        }
      },
      {
        question: {
          en: "Which driver holds the record for most F1 World Championships with 7 titles?",
          es: "¿Qué piloto tiene el récord de más Campeonatos Mundiales de F1 con 7 títulos?",
          de: "Welcher Fahrer hält den Rekord für die meisten F1-Weltmeisterschaften mit 7 Titeln?",
          nl: "Welke coureur heeft het record voor de meeste F1 Wereldkampioenschappen met 7 titels?"
        },
        options: ["Michael Schumacher and Lewis Hamilton (tied)", "Juan Manuel Fangio", "Sebastian Vettel", "Alain Prost"],
        correct: 0,
        explanation: {
          en: "Both Michael Schumacher and Lewis Hamilton hold the record with 7 World Championships each. Schumacher won his from 1994-2004, while Hamilton achieved his between 2008-2020.",
          es: "Tanto Michael Schumacher como Lewis Hamilton tienen el récord con 7 Campeonatos Mundiales cada uno. Schumacher ganó los suyos de 1994-2004, mientras que Hamilton logró los suyos entre 2008-2020.",
          de: "Sowohl Michael Schumacher als auch Lewis Hamilton halten den Rekord mit jeweils 7 Weltmeisterschaften. Schumacher gewann seine von 1994-2004, während Hamilton seine zwischen 2008-2020 erreichte.",
          nl: "Zowel Michael Schumacher als Lewis Hamilton houden het record met elk 7 Wereldkampioenschappen. Schumacher won de zijne van 1994-2004, terwijl Hamilton de zijne behaalde tussen 2008-2020."
        }
      },
      {
        question: {
          en: "Juan Manuel Fangio won 5 World Championships driving for how many different teams?",
          es: "¿Juan Manuel Fangio ganó 5 Campeonatos Mundiales conduciendo para cuántos equipos diferentes?",
          de: "Juan Manuel Fangio gewann 5 Weltmeisterschaften für wie viele verschiedene Teams?",
          nl: "Juan Manuel Fangio won 5 Wereldkampioenschappen rijdend voor hoeveel verschillende teams?"
        },
        options: ["4 teams", "2 teams", "3 teams", "5 teams"],
        correct: 0,
        explanation: {
          en: "Fangio won his 5 championships with 4 different teams: Alfa Romeo (1951), Mercedes (1954-1955), Ferrari (1956), and Maserati (1957). This demonstrates his extraordinary adaptability.",
          es: "Fangio ganó sus 5 campeonatos con 4 equipos diferentes: Alfa Romeo (1951), Mercedes (1954-1955), Ferrari (1956) y Maserati (1957). Esto demuestra su extraordinaria adaptabilidad.",
          de: "Fangio gewann seine 5 Meisterschaften mit 4 verschiedenen Teams: Alfa Romeo (1951), Mercedes (1954-1955), Ferrari (1956) und Maserati (1957). Dies zeigt seine außergewöhnliche Anpassungsfähigkeit.",
          nl: "Fangio won zijn 5 kampioenschappen met 4 verschillende teams: Alfa Romeo (1951), Mercedes (1954-1955), Ferrari (1956) en Maserati (1957). Dit toont zijn buitengewone aanpassingsvermogen."
        }
      },
      {
        question: {
          en: "Which Austrian driver won 3 World Championships and survived a near-fatal fiery crash in 1976?",
          es: "¿Qué piloto austriaco ganó 3 Campeonatos Mundiales y sobrevivió a un accidente de fuego casi fatal en 1976?",
          de: "Welcher österreichische Fahrer gewann 3 Weltmeisterschaften und überlebte 1976 einen nahezu tödlichen Feuerunfall?",
          nl: "Welke Oostenrijkse coureur won 3 Wereldkampioenschappen en overleefde een bijna fatale brand-crash in 1976?"
        },
        options: ["Niki Lauda", "Jochen Rindt", "Gerhard Berger", "Karl Wendlinger"],
        correct: 0,
        explanation: {
          en: "Niki Lauda won championships in 1975, 1977, and 1984. He was severely burned in a crash at the Nürburgring in 1976 but remarkably returned to racing just 6 weeks later.",
          es: "Niki Lauda ganó campeonatos en 1975, 1977 y 1984. Sufrió graves quemaduras en un accidente en Nürburgring en 1976 pero notablemente regresó a las carreras solo 6 semanas después.",
          de: "Niki Lauda gewann Meisterschaften 1975, 1977 und 1984. Er erlitt schwere Verbrennungen bei einem Unfall am Nürburgring 1976, kehrte aber bemerkenswert bereits 6 Wochen später zum Rennsport zurück.",
          nl: "Niki Lauda won kampioenschappen in 1975, 1977 en 1984. Hij liep ernstige brandwonden op bij een crash op de Nürburgring in 1976 maar keerde opmerkelijk genoeg slechts 6 weken later terug naar de racerij."
        }
      },
      {
        question: {
          en: "Alain Prost earned which nickname for his calculated driving style?",
          es: "¿Alain Prost ganó qué apodo por su estilo de conducción calculado?",
          de: "Welchen Spitznamen erhielt Alain Prost für seinen kalkulierten Fahrstil?",
          nl: "Alain Prost verdiende welke bijnaam voor zijn berekenende rijstijl?"
        },
        options: ["The Professor", "The Iceman", "The Flying Frenchman", "The Maestro"],
        correct: 0,
        explanation: {
          en: "Alain Prost was nicknamed 'The Professor' for his intelligent, calculated approach to racing. He won 4 World Championships (1985, 1986, 1989, 1993) with this methodical style.",
          es: "Alain Prost fue apodado 'El Profesor' por su enfoque inteligente y calculado de las carreras. Ganó 4 Campeonatos Mundiales (1985, 1986, 1989, 1993) con este estilo metódico.",
          de: "Alain Prost wurde 'Der Professor' genannt für seinen intelligenten, kalkulierten Rennansatz. Er gewann 4 Weltmeisterschaften (1985, 1986, 1989, 1993) mit diesem methodischen Stil.",
          nl: "Alain Prost kreeg de bijnaam 'The Professor' voor zijn intelligente, berekenende benadering van racen. Hij won 4 Wereldkampioenschappen (1985, 1986, 1989, 1993) met deze methodische stijl."
        }
      },
      {
        question: {
          en: "Which British driver won the 1976 World Championship in dramatic fashion?",
          es: "¿Qué piloto británico ganó el Campeonato Mundial de 1976 de manera dramática?",
          de: "Welcher britische Fahrer gewann 1976 auf dramatische Weise die Weltmeisterschaft?",
          nl: "Welke Britse coureur won het Wereldkampioenschap van 1976 op dramatische wijze?"
        },
        options: ["James Hunt", "Jackie Stewart", "Nigel Mansell", "Graham Hill"],
        correct: 0,
        explanation: {
          en: "James Hunt won the 1976 championship by one point over Niki Lauda at the final race in Japan. The season was immortalized in the film 'Rush'.",
          es: "James Hunt ganó el campeonato de 1976 por un punto sobre Niki Lauda en la carrera final en Japón. La temporada fue inmortalizada en la película 'Rush'.",
          de: "James Hunt gewann die Meisterschaft 1976 mit einem Punkt Vorsprung vor Niki Lauda beim letzten Rennen in Japan. Die Saison wurde im Film 'Rush' verewigt.",
          nl: "James Hunt won het kampioenschap van 1976 met één punt voorsprong op Niki Lauda in de laatste race in Japan. Het seizoen werd vereeuwigd in de film 'Rush'."
        }
      },
      {
        question: {
          en: "Which Scottish driver won 3 World Championships and was a pioneering safety advocate?",
          es: "¿Qué piloto escocés ganó 3 Campeonatos Mundiales y fue un pionero defensor de la seguridad?",
          de: "Welcher schottische Fahrer gewann 3 Weltmeisterschaften und war ein Vorkämpfer für Sicherheit?",
          nl: "Welke Schotse coureur won 3 Wereldkampioenschappen en was een baanbrekend veiligheidsvoorvechter?"
        },
        options: ["Jackie Stewart", "Jim Clark", "David Coulthard", "Dario Franchitti"],
        correct: 0,
        explanation: {
          en: "Jackie Stewart won championships in 1969, 1971, and 1973. He campaigned tirelessly for improved safety in Formula 1, saving countless lives through circuit improvements and medical facilities.",
          es: "Jackie Stewart ganó campeonatos en 1969, 1971 y 1973. Hizo campaña incansablemente por la mejora de la seguridad en la Fórmula 1, salvando innumerables vidas a través de mejoras en circuitos e instalaciones médicas.",
          de: "Jackie Stewart gewann Meisterschaften 1969, 1971 und 1973. Er setzte sich unermüdlich für verbesserte Sicherheit in der Formel 1 ein und rettete unzählige Leben durch Streckenverbesserungen und medizinische Einrichtungen.",
          nl: "Jackie Stewart won kampioenschappen in 1969, 1971 en 1973. Hij voerde onvermoeibaar campagne voor verbeterde veiligheid in Formule 1, waardoor talloze levens werden gered door circuitverbeteringen en medische faciliteiten."
        }
      },
      {
        question: {
          en: "Jim Clark won 2 World Championships driving primarily for which team?",
          es: "¿Jim Clark ganó 2 Campeonatos Mundiales conduciendo principalmente para qué equipo?",
          de: "Jim Clark gewann 2 Weltmeisterschaften hauptsächlich für welches Team?",
          nl: "Jim Clark won 2 Wereldkampioenschappen hoofdzakelijk rijdend voor welk team?"
        },
        options: ["Lotus", "Ferrari", "BRM", "Cooper"],
        correct: 0,
        explanation: {
          en: "Jim Clark won championships in 1963 and 1965 with Lotus. He was considered one of the greatest drivers ever, winning 25 races before his tragic death in 1968.",
          es: "Jim Clark ganó campeonatos en 1963 y 1965 con Lotus. Fue considerado uno de los mejores pilotos de todos los tiempos, ganando 25 carreras antes de su trágica muerte en 1968.",
          de: "Jim Clark gewann 1963 und 1965 Meisterschaften mit Lotus. Er galt als einer der größten Fahrer aller Zeiten und gewann 25 Rennen vor seinem tragischen Tod 1968.",
          nl: "Jim Clark won kampioenschappen in 1963 en 1965 met Lotus. Hij werd beschouwd als een van de grootste coureurs ooit, met 25 overwinningen voor zijn tragische dood in 1968."
        }
      },
      {
        question: {
          en: "Which driver is the only posthumous Formula 1 World Champion?",
          es: "¿Qué piloto es el único Campeón Mundial póstumo de Fórmula 1?",
          de: "Welcher Fahrer ist der einzige posthume Formel-1-Weltmeister?",
          nl: "Welke coureur is de enige postume Formule 1 Wereldkampioen?"
        },
        options: ["Jochen Rindt", "Ayrton Senna", "Gilles Villeneuve", "Ronnie Peterson"],
        correct: 0,
        explanation: {
          en: "Jochen Rindt was killed at Monza in 1970 but had accumulated enough points that no one could overtake him in the championship. He was declared champion posthumously.",
          es: "Jochen Rindt murió en Monza en 1970 pero había acumulado suficientes puntos para que nadie pudiera superarlo en el campeonato. Fue declarado campeón póstumamente.",
          de: "Jochen Rindt wurde 1970 in Monza getötet, hatte aber genug Punkte gesammelt, dass niemand ihn in der Meisterschaft überholen konnte. Er wurde posthum zum Champion erklärt.",
          nl: "Jochen Rindt kwam om in Monza in 1970 maar had genoeg punten verzameld dat niemand hem kon inhalen in het kampioenschap. Hij werd postuum tot kampioen uitgeroepen."
        }
      },
      {
        question: {
          en: "Stirling Moss is famous for being a great driver who never won what?",
          es: "¿Stirling Moss es famoso por ser un gran piloto que nunca ganó qué?",
          de: "Stirling Moss ist berühmt dafür, ein großartiger Fahrer zu sein, der nie was gewann?",
          nl: "Stirling Moss is beroemd als een geweldige coureur die nooit wat won?"
        },
        options: ["A World Championship", "A race", "A pole position", "The Monaco Grand Prix"],
        correct: 0,
        explanation: {
          en: "Stirling Moss finished runner-up in the championship 4 times (1955-1958) and won 16 races, but never won a World Championship. He's considered the greatest driver never to win the title.",
          es: "Stirling Moss terminó subcampeón del campeonato 4 veces (1955-1958) y ganó 16 carreras, pero nunca ganó un Campeonato Mundial. Es considerado el mejor piloto que nunca ganó el título.",
          de: "Stirling Moss wurde 4 Mal Vizemeister (1955-1958) und gewann 16 Rennen, gewann aber nie eine Weltmeisterschaft. Er gilt als der größte Fahrer, der nie den Titel gewann.",
          nl: "Stirling Moss eindigde 4 keer als runner-up in het kampioenschap (1955-1958) en won 16 races, maar won nooit een Wereldkampioenschap. Hij wordt beschouwd als de grootste coureur die nooit de titel won."
        }
      },
      {
        question: {
          en: "Which Brazilian won the first F1 World Championship for a Brazilian driver?",
          es: "¿Qué brasileño ganó el primer Campeonato Mundial de F1 para un piloto brasileño?",
          de: "Welcher Brasilianer gewann die erste F1-Weltmeisterschaft für einen brasilianischen Fahrer?",
          nl: "Welke Braziliaan won het eerste F1 Wereldkampioenschap voor een Braziliaanse coureur?"
        },
        options: ["Emerson Fittipaldi", "Nelson Piquet", "Ayrton Senna", "Carlos Pace"],
        correct: 0,
        explanation: {
          en: "Emerson Fittipaldi won the 1972 World Championship at age 25, becoming the youngest champion at that time and Brazil's first F1 World Champion. He won again in 1974.",
          es: "Emerson Fittipaldi ganó el Campeonato Mundial de 1972 a los 25 años, convirtiéndose en el campeón más joven en ese momento y el primer Campeón Mundial de F1 de Brasil. Ganó de nuevo en 1974.",
          de: "Emerson Fittipaldi gewann die Weltmeisterschaft 1972 im Alter von 25 Jahren, wurde der jüngste Champion zu dieser Zeit und Brasiliens erster F1-Weltmeister. Er gewann erneut 1974.",
          nl: "Emerson Fittipaldi won het Wereldkampioenschap van 1972 op 25-jarige leeftijd, werd de jongste kampioen op dat moment en Brazilië's eerste F1 Wereldkampioen. Hij won opnieuw in 1974."
        }
      },
      {
        question: {
          en: "Nelson Piquet won 3 World Championships in which years?",
          es: "¿Nelson Piquet ganó 3 Campeonatos Mundiales en qué años?",
          de: "Nelson Piquet gewann 3 Weltmeisterschaften in welchen Jahren?",
          nl: "Nelson Piquet won 3 Wereldkampioenschappen in welke jaren?"
        },
        options: ["1981, 1983, 1987", "1980, 1982, 1986", "1982, 1984, 1988", "1979, 1981, 1985"],
        correct: 0,
        explanation: {
          en: "Nelson Piquet won World Championships in 1981 (Brabham), 1983 (Brabham), and 1987 (Williams). He was known for his technical understanding and political savvy.",
          es: "Nelson Piquet ganó Campeonatos Mundiales en 1981 (Brabham), 1983 (Brabham) y 1987 (Williams). Era conocido por su comprensión técnica y astucia política.",
          de: "Nelson Piquet gewann Weltmeisterschaften 1981 (Brabham), 1983 (Brabham) und 1987 (Williams). Er war bekannt für sein technisches Verständnis und politisches Geschick.",
          nl: "Nelson Piquet won Wereldkampioenschappen in 1981 (Brabham), 1983 (Brabham) en 1987 (Williams). Hij stond bekend om zijn technisch inzicht en politieke slimheid."
        }
      },
      {
        question: {
          en: "Which British driver won the championship in 1996 driving for Williams?",
          es: "¿Qué piloto británico ganó el campeonato en 1996 conduciendo para Williams?",
          de: "Welcher britische Fahrer gewann 1996 die Meisterschaft für Williams?",
          nl: "Welke Britse coureur won het kampioenschap in 1996 rijdend voor Williams?"
        },
        options: ["Damon Hill", "Nigel Mansell", "David Coulthard", "Jenson Button"],
        correct: 0,
        explanation: {
          en: "Damon Hill won the 1996 World Championship for Williams, following in his father Graham Hill's footsteps as a World Champion. He won 8 races that season.",
          es: "Damon Hill ganó el Campeonato Mundial de 1996 para Williams, siguiendo los pasos de su padre Graham Hill como Campeón Mundial. Ganó 8 carreras esa temporada.",
          de: "Damon Hill gewann die Weltmeisterschaft 1996 für Williams und folgte damit den Fußstapfen seines Vaters Graham Hill als Weltmeister. Er gewann 8 Rennen in dieser Saison.",
          nl: "Damon Hill won het Wereldkampioenschap van 1996 voor Williams, in de voetsporen tredend van zijn vader Graham Hill als Wereldkampioen. Hij won 8 races dat seizoen."
        }
      },
      {
        question: {
          en: "Which driver known as 'Il Leone' (The Lion) won the 1950 inaugural F1 World Championship?",
          es: "¿Qué piloto conocido como 'Il Leone' (El León) ganó el Campeonato Mundial inaugural de F1 de 1950?",
          de: "Welcher als 'Il Leone' (Der Löwe) bekannte Fahrer gewann die erste F1-Weltmeisterschaft 1950?",
          nl: "Welke coureur bekend als 'Il Leone' (De Leeuw) won het inaugurele F1 Wereldkampioenschap van 1950?"
        },
        options: ["Giuseppe Farina", "Juan Manuel Fangio", "Alberto Ascari", "Luigi Fagioli"],
        correct: 0,
        explanation: {
          en: "Giuseppe 'Nino' Farina won the very first F1 World Championship in 1950 driving for Alfa Romeo. He was known for his straight-arm driving style and nicknamed 'The Lion'.",
          es: "Giuseppe 'Nino' Farina ganó el primer Campeonato Mundial de F1 en 1950 conduciendo para Alfa Romeo. Era conocido por su estilo de conducción con brazos rectos y apodado 'El León'.",
          de: "Giuseppe 'Nino' Farina gewann 1950 die allererste F1-Weltmeisterschaft für Alfa Romeo. Er war bekannt für seinen gestreckten Fahrstil und wurde 'Der Löwe' genannt.",
          nl: "Giuseppe 'Nino' Farina won het allereerste F1 Wereldkampioenschap in 1950 rijdend voor Alfa Romeo. Hij stond bekend om zijn rechte-arm rijstijl en de bijnaam 'De Leeuw'."
        }
      },
      {
        question: {
          en: "Graham Hill won championships in which years?",
          es: "¿Graham Hill ganó campeonatos en qué años?",
          de: "Graham Hill gewann Meisterschaften in welchen Jahren?",
          nl: "Graham Hill won kampioenschappen in welke jaren?"
        },
        options: ["1962 and 1968", "1963 and 1969", "1961 and 1967", "1964 and 1970"],
        correct: 0,
        explanation: {
          en: "Graham Hill won World Championships in 1962 (BRM) and 1968 (Lotus). He's also the only driver to complete the 'Triple Crown' of motorsport (Monaco GP, Indy 500, Le Mans 24h).",
          es: "Graham Hill ganó Campeonatos Mundiales en 1962 (BRM) y 1968 (Lotus). También es el único piloto en completar la 'Triple Corona' del automovilismo (GP de Mónaco, Indy 500, 24h de Le Mans).",
          de: "Graham Hill gewann Weltmeisterschaften 1962 (BRM) und 1968 (Lotus). Er ist auch der einzige Fahrer, der die 'Triple Crown' des Motorsports (Monaco GP, Indy 500, 24h Le Mans) gewann.",
          nl: "Graham Hill won Wereldkampioenschappen in 1962 (BRM) en 1968 (Lotus). Hij is ook de enige coureur die de 'Triple Crown' van de motorsport voltooide (Monaco GP, Indy 500, Le Mans 24u)."
        }
      },
      {
        question: {
          en: "Which Finnish driver won 2 World Championships with McLaren in 1998 and 1999?",
          es: "¿Qué piloto finlandés ganó 2 Campeonatos Mundiales con McLaren en 1998 y 1999?",
          de: "Welcher finnische Fahrer gewann 1998 und 1999 zwei Weltmeisterschaften mit McLaren?",
          nl: "Welke Finse coureur won 2 Wereldkampioenschappen met McLaren in 1998 en 1999?"
        },
        options: ["Mika Häkkinen", "Kimi Räikkönen", "Mika Salo", "Heikki Kovalainen"],
        correct: 0,
        explanation: {
          en: "Mika Häkkinen, nicknamed 'The Flying Finn', won back-to-back championships in 1998 and 1999. He had epic battles with Michael Schumacher during this period.",
          es: "Mika Häkkinen, apodado 'El Finlandés Volador', ganó campeonatos consecutivos en 1998 y 1999. Tuvo batallas épicas con Michael Schumacher durante este período.",
          de: "Mika Häkkinen, genannt 'The Flying Finn', gewann aufeinanderfolgende Meisterschaften 1998 und 1999. Er hatte epische Kämpfe mit Michael Schumacher in dieser Zeit.",
          nl: "Mika Häkkinen, bijgenaamd 'The Flying Finn', won achtereenvolgende kampioenschappen in 1998 en 1999. Hij had epische gevechten met Michael Schumacher tijdens deze periode."
        }
      },
      {
        question: {
          en: "Which driver won the 1992 World Championship for Williams?",
          es: "¿Qué piloto ganó el Campeonato Mundial de 1992 para Williams?",
          de: "Welcher Fahrer gewann 1992 die Weltmeisterschaft für Williams?",
          nl: "Welke coureur won het Wereldkampioenschap van 1992 voor Williams?"
        },
        options: ["Nigel Mansell", "Alain Prost", "Riccardo Patrese", "Damon Hill"],
        correct: 0,
        explanation: {
          en: "Nigel Mansell dominated the 1992 season, winning his only World Championship with Williams. He won 9 races and clinched the title with 5 races still remaining.",
          es: "Nigel Mansell dominó la temporada de 1992, ganando su único Campeonato Mundial con Williams. Ganó 9 carreras y aseguró el título con 5 carreras aún restantes.",
          de: "Nigel Mansell dominierte die Saison 1992 und gewann seine einzige Weltmeisterschaft mit Williams. Er gewann 9 Rennen und sicherte sich den Titel mit noch 5 verbleibenden Rennen.",
          nl: "Nigel Mansell domineerde het seizoen 1992, won zijn enige Wereldkampioenschap met Williams. Hij won 9 races en behaalde de titel met nog 5 races te gaan."
        }
      },
      {
        question: {
          en: "Alberto Ascari won back-to-back championships in which years?",
          es: "¿Alberto Ascari ganó campeonatos consecutivos en qué años?",
          de: "Alberto Ascari gewann aufeinanderfolgende Meisterschaften in welchen Jahren?",
          nl: "Alberto Ascari won achtereenvolgende kampioenschappen in welke jaren?"
        },
        options: ["1952 and 1953", "1951 and 1952", "1953 and 1954", "1950 and 1951"],
        correct: 0,
        explanation: {
          en: "Alberto Ascari won consecutive championships in 1952 and 1953 driving for Ferrari. He dominated both seasons, winning 11 of 15 races across the two years.",
          es: "Alberto Ascari ganó campeonatos consecutivos en 1952 y 1953 conduciendo para Ferrari. Dominó ambas temporadas, ganando 11 de 15 carreras en los dos años.",
          de: "Alberto Ascari gewann aufeinanderfolgende Meisterschaften 1952 und 1953 für Ferrari. Er dominierte beide Saisons und gewann 11 von 15 Rennen in den zwei Jahren.",
          nl: "Alberto Ascari won achtereenvolgende kampioenschappen in 1952 en 1953 rijdend voor Ferrari. Hij domineerde beide seizoenen, won 11 van 15 races over de twee jaar."
        }
      },
      {
        question: {
          en: "Which driver's career spanned from 1950 to 1958, setting records for wins and titles?",
          es: "¿La carrera de qué piloto abarcó de 1950 a 1958, estableciendo récords de victorias y títulos?",
          de: "Welcher Fahrer hatte eine Karriere von 1950 bis 1958 und stellte Rekorde für Siege und Titel auf?",
          nl: "Welke coureurs carrière strekte zich uit van 1950 tot 1958, records vestigend voor overwinningen en titels?"
        },
        options: ["Juan Manuel Fangio", "Giuseppe Farina", "Alberto Ascari", "Stirling Moss"],
        correct: 0,
        explanation: {
          en: "Juan Manuel Fangio competed from 1950-1958, winning 5 championships and 24 races. His winning percentage of 46.15% stood as a record for decades.",
          es: "Juan Manuel Fangio compitió de 1950-1958, ganando 5 campeonatos y 24 carreras. Su porcentaje de victorias del 46.15% se mantuvo como récord durante décadas.",
          de: "Juan Manuel Fangio fuhr von 1950-1958, gewann 5 Meisterschaften und 24 Rennen. Seine Siegquote von 46,15% war jahrzehntelang ein Rekord.",
          nl: "Juan Manuel Fangio racete van 1950-1958, won 5 kampioenschappen en 24 races. Zijn winpercentage van 46,15% bleef decennia lang een record."
        }
      },
      {
        question: {
          en: "Keke Rosberg won the 1982 World Championship driving for which team?",
          es: "¿Keke Rosberg ganó el Campeonato Mundial de 1982 conduciendo para qué equipo?",
          de: "Keke Rosberg gewann 1982 die Weltmeisterschaft für welches Team?",
          nl: "Keke Rosberg won het Wereldkampioenschap van 1982 rijdend voor welk team?"
        },
        options: ["Williams", "McLaren", "Ferrari", "Lotus"],
        correct: 0,
        explanation: {
          en: "Keke Rosberg won the 1982 championship for Williams despite winning only one race that season. The 1982 season was one of the most chaotic in F1 history.",
          es: "Keke Rosberg ganó el campeonato de 1982 para Williams a pesar de ganar solo una carrera esa temporada. La temporada de 1982 fue una de las más caóticas en la historia de F1.",
          de: "Keke Rosberg gewann die Meisterschaft 1982 für Williams, obwohl er in dieser Saison nur ein Rennen gewann. Die Saison 1982 war eine der chaotischsten in der F1-Geschichte.",
          nl: "Keke Rosberg won het kampioenschap van 1982 voor Williams ondanks slechts één race te winnen dat seizoen. Het seizoen 1982 was een van de meest chaotische in F1-geschiedenis."
        }
      },
      {
        question: {
          en: "Which South African driver won the 1979 World Championship?",
          es: "¿Qué piloto sudafricano ganó el Campeonato Mundial de 1979?",
          de: "Welcher südafrikanische Fahrer gewann die Weltmeisterschaft 1979?",
          nl: "Welke Zuid-Afrikaanse coureur won het Wereldkampioenschap van 1979?"
        },
        options: ["Jody Scheckter", "Tom Pryce", "Tony Maggs", "Bruce McLaren"],
        correct: 0,
        explanation: {
          en: "Jody Scheckter won the 1979 World Championship driving for Ferrari. This was Ferrari's last drivers' championship until Michael Schumacher in 2000.",
          es: "Jody Scheckter ganó el Campeonato Mundial de 1979 conduciendo para Ferrari. Este fue el último campeonato de pilotos de Ferrari hasta Michael Schumacher en 2000.",
          de: "Jody Scheckter gewann 1979 die Weltmeisterschaft für Ferrari. Dies war Ferraris letzte Fahrermeisterschaft bis Michael Schumacher im Jahr 2000.",
          nl: "Jody Scheckter won het Wereldkampioenschap van 1979 rijdend voor Ferrari. Dit was Ferrari's laatste coureurskampioenschap tot Michael Schumacher in 2000."
        }
      },
      {
        question: {
          en: "Which American driver won the 1961 and 1980 World Championships?",
          es: "¿Qué piloto estadounidense ganó los Campeonatos Mundiales de 1961 y 1980?",
          de: "Welcher amerikanische Fahrer gewann die Weltmeisterschaften 1961 und 1980?",
          nl: "Welke Amerikaanse coureur won de Wereldkampioenschappen van 1961 en 1980?"
        },
        options: ["None - no American won in both years", "Phil Hill (1961), no American in 1980", "Mario Andretti", "Dan Gurney"],
        correct: 1,
        explanation: {
          en: "Phil Hill won in 1961 for Ferrari (America's first F1 champion), but no American won in 1980 (Alan Jones of Australia won). Mario Andretti won in 1978.",
          es: "Phil Hill ganó en 1961 para Ferrari (el primer campeón de F1 de América), pero ningún estadounidense ganó en 1980 (Alan Jones de Australia ganó). Mario Andretti ganó en 1978.",
          de: "Phil Hill gewann 1961 für Ferrari (Amerikas erster F1-Champion), aber kein Amerikaner gewann 1980 (Alan Jones aus Australien gewann). Mario Andretti gewann 1978.",
          nl: "Phil Hill won in 1961 voor Ferrari (Amerika's eerste F1 kampioen), maar geen Amerikaan won in 1980 (Alan Jones uit Australië won). Mario Andretti won in 1978."
        }
      },
      {
        question: {
          en: "Mario Andretti won the World Championship in which year?",
          es: "¿Mario Andretti ganó el Campeonato Mundial en qué año?",
          de: "Mario Andretti gewann die Weltmeisterschaft in welchem Jahr?",
          nl: "Mario Andretti won het Wereldkampioenschap in welk jaar?"
        },
        options: ["1978", "1977", "1979", "1976"],
        correct: 0,
        explanation: {
          en: "Mario Andretti won the 1978 World Championship driving for Lotus. He won 6 races that season and remains the last American F1 World Champion.",
          es: "Mario Andretti ganó el Campeonato Mundial de 1978 conduciendo para Lotus. Ganó 6 carreras esa temporada y sigue siendo el último Campeón Mundial de F1 estadounidense.",
          de: "Mario Andretti gewann 1978 die Weltmeisterschaft für Lotus. Er gewann 6 Rennen in dieser Saison und bleibt der letzte amerikanische F1-Weltmeister.",
          nl: "Mario Andretti won het Wereldkampioenschap van 1978 rijdend voor Lotus. Hij won 6 races dat seizoen en blijft de laatste Amerikaanse F1 Wereldkampioen."
        }
      },
      {
        question: {
          en: "Jack Brabham is unique for winning a championship in a car bearing his own name in which year?",
          es: "¿Jack Brabham es único por ganar un campeonato en un auto con su propio nombre en qué año?",
          de: "Jack Brabham ist einzigartig, weil er in welchem Jahr eine Meisterschaft in einem Auto mit seinem eigenen Namen gewann?",
          nl: "Jack Brabham is uniek voor het winnen van een kampioenschap in een auto die zijn eigen naam draagt in welk jaar?"
        },
        options: ["1966", "1965", "1967", "1964"],
        correct: 0,
        explanation: {
          en: "Jack Brabham won the 1966 championship in a Brabham-Repco, becoming the only driver to win a championship in a car bearing his own name. He won 3 titles total (1959, 1960, 1966).",
          es: "Jack Brabham ganó el campeonato de 1966 en un Brabham-Repco, convirtiéndose en el único piloto en ganar un campeonato en un auto con su propio nombre. Ganó 3 títulos en total (1959, 1960, 1966).",
          de: "Jack Brabham gewann 1966 die Meisterschaft in einem Brabham-Repco und wurde der einzige Fahrer, der eine Meisterschaft in einem Auto mit seinem eigenen Namen gewann. Er gewann insgesamt 3 Titel (1959, 1960, 1966).",
          nl: "Jack Brabham won het kampioenschap van 1966 in een Brabham-Repco, de enige coureur die een kampioenschap won in een auto die zijn eigen naam droeg. Hij won 3 titels in totaal (1959, 1960, 1966)."
        }
      },
      {
        question: {
          en: "Which British driver won the 1964 World Championship in dramatic fashion at the final race?",
          es: "¿Qué piloto británico ganó el Campeonato Mundial de 1964 de manera dramática en la carrera final?",
          de: "Welcher britische Fahrer gewann 1964 auf dramatische Weise beim letzten Rennen die Weltmeisterschaft?",
          nl: "Welke Britse coureur won het Wereldkampioenschap van 1964 op dramatische wijze in de laatste race?"
        },
        options: ["John Surtees", "Graham Hill", "Jim Clark", "Jackie Stewart"],
        correct: 0,
        explanation: {
          en: "John Surtees won the 1964 championship at the final race in Mexico. He remains the only person to win World Championships on both two wheels (motorcycling) and four wheels (F1).",
          es: "John Surtees ganó el campeonato de 1964 en la carrera final en México. Sigue siendo la única persona en ganar Campeonatos Mundiales tanto en dos ruedas (motociclismo) como en cuatro ruedas (F1).",
          de: "John Surtees gewann 1964 beim letzten Rennen in Mexiko die Meisterschaft. Er bleibt die einzige Person, die Weltmeisterschaften sowohl auf zwei Rädern (Motorrad) als auch auf vier Rädern (F1) gewann.",
          nl: "John Surtees won het kampioenschap van 1964 in de laatste race in Mexico. Hij blijft de enige persoon die Wereldkampioenschappen won op zowel twee wielen (motorracen) als vier wielen (F1)."
        }
      },
      {
        question: {
          en: "Which driver known as 'The Maestro' won the 1975 World Championship?",
          es: "¿Qué piloto conocido como 'El Maestro' ganó el Campeonato Mundial de 1975?",
          de: "Welcher als 'Der Maestro' bekannte Fahrer gewann die Weltmeisterschaft 1975?",
          nl: "Welke coureur bekend als 'The Maestro' won het Wereldkampioenschap van 1975?"
        },
        options: ["Niki Lauda", "Emerson Fittipaldi", "James Hunt", "Ronnie Peterson"],
        correct: 0,
        explanation: {
          en: "Niki Lauda won his first championship in 1975 driving for Ferrari. Though 'The Maestro' is sometimes used for Fangio, Lauda won in 1975.",
          es: "Niki Lauda ganó su primer campeonato en 1975 conduciendo para Ferrari. Aunque 'El Maestro' a veces se usa para Fangio, Lauda ganó en 1975.",
          de: "Niki Lauda gewann 1975 seine erste Meisterschaft für Ferrari. Obwohl 'Der Maestro' manchmal für Fangio verwendet wird, gewann Lauda 1975.",
          nl: "Niki Lauda won zijn eerste kampioenschap in 1975 rijdend voor Ferrari. Hoewel 'The Maestro' soms wordt gebruikt voor Fangio, won Lauda in 1975."
        }
      },
      {
        question: {
          en: "Which driver won the 1980 World Championship driving for Williams?",
          es: "¿Qué piloto ganó el Campeonato Mundial de 1980 conduciendo para Williams?",
          de: "Welcher Fahrer gewann 1980 die Weltmeisterschaft für Williams?",
          nl: "Welke coureur won het Wereldkampioenschap van 1980 rijdend voor Williams?"
        },
        options: ["Alan Jones", "Carlos Reutemann", "Clay Regazzoni", "Jacques Laffite"],
        correct: 0,
        explanation: {
          en: "Australian Alan Jones won the 1980 World Championship for Williams, winning 5 races that season. This was Williams' first drivers' championship.",
          es: "El australiano Alan Jones ganó el Campeonato Mundial de 1980 para Williams, ganando 5 carreras esa temporada. Este fue el primer campeonato de pilotos de Williams.",
          de: "Der Australier Alan Jones gewann 1980 die Weltmeisterschaft für Williams und gewann 5 Rennen in dieser Saison. Dies war Williams' erste Fahrermeisterschaft.",
          nl: "De Australiër Alan Jones won het Wereldkampioenschap van 1980 voor Williams, won 5 races dat seizoen. Dit was Williams' eerste coureurskampioenschap."
        }
      },
      {
        question: {
          en: "Denny Hulme won the 1967 World Championship for which team?",
          es: "¿Denny Hulme ganó el Campeonato Mundial de 1967 para qué equipo?",
          de: "Denny Hulme gewann 1967 die Weltmeisterschaft für welches Team?",
          nl: "Denny Hulme won het Wereldkampioenschap van 1967 voor welk team?"
        },
        options: ["Brabham", "McLaren", "Lotus", "Cooper"],
        correct: 0,
        explanation: {
          en: "New Zealander Denny Hulme won the 1967 championship for Brabham. Known as 'The Bear', he won 8 races in his F1 career.",
          es: "El neozelandés Denny Hulme ganó el campeonato de 1967 para Brabham. Conocido como 'El Oso', ganó 8 carreras en su carrera de F1.",
          de: "Der Neuseeländer Denny Hulme gewann 1967 die Meisterschaft für Brabham. Bekannt als 'Der Bär', gewann er 8 Rennen in seiner F1-Karriere.",
          nl: "De Nieuw-Zeelander Denny Hulme won het kampioenschap van 1967 voor Brabham. Bekend als 'The Bear', won hij 8 races in zijn F1-carrière."
        }
      },
      {
        question: {
          en: "Which driver won the 1963 World Championship driving for Lotus?",
          es: "¿Qué piloto ganó el Campeonato Mundial de 1963 conduciendo para Lotus?",
          de: "Welcher Fahrer gewann 1963 die Weltmeisterschaft für Lotus?",
          nl: "Welke coureur won het Wereldkampioenschap van 1963 rijdend voor Lotus?"
        },
        options: ["Jim Clark", "Graham Hill", "John Surtees", "Jackie Stewart"],
        correct: 0,
        explanation: {
          en: "Jim Clark won the 1963 championship for Lotus, winning 7 of 10 races. This was the first of his two World Championships.",
          es: "Jim Clark ganó el campeonato de 1963 para Lotus, ganando 7 de 10 carreras. Este fue el primero de sus dos Campeonatos Mundiales.",
          de: "Jim Clark gewann 1963 die Meisterschaft für Lotus und gewann 7 von 10 Rennen. Dies war die erste seiner zwei Weltmeisterschaften.",
          nl: "Jim Clark won het kampioenschap van 1963 voor Lotus, won 7 van 10 races. Dit was de eerste van zijn twee Wereldkampioenschappen."
        }
      },
      {
        question: {
          en: "Mike Hawthorn won his only World Championship in which year?",
          es: "¿Mike Hawthorn ganó su único Campeonato Mundial en qué año?",
          de: "Mike Hawthorn gewann seine einzige Weltmeisterschaft in welchem Jahr?",
          nl: "Mike Hawthorn won zijn enige Wereldkampioenschap in welk jaar?"
        },
        options: ["1958", "1957", "1959", "1956"],
        correct: 0,
        explanation: {
          en: "Mike Hawthorn won the 1958 championship by one point over Stirling Moss, despite Moss winning more races. Hawthorn retired after the season and died in a road accident months later.",
          es: "Mike Hawthorn ganó el campeonato de 1958 por un punto sobre Stirling Moss, a pesar de que Moss ganó más carreras. Hawthorn se retiró después de la temporada y murió en un accidente de tráfico meses después.",
          de: "Mike Hawthorn gewann 1958 die Meisterschaft mit einem Punkt Vorsprung vor Stirling Moss, obwohl Moss mehr Rennen gewann. Hawthorn trat nach der Saison zurück und starb Monate später bei einem Verkehrsunfall.",
          nl: "Mike Hawthorn won het kampioenschap van 1958 met één punt voorsprong op Stirling Moss, ondanks dat Moss meer races won. Hawthorn ging met pensioen na het seizoen en overleed maanden later bij een auto-ongeluk."
        }
      },
      {
        question: {
          en: "Which team did Ayrton Senna drive for when he won his first World Championship?",
          es: "¿Para qué equipo conducía Ayrton Senna cuando ganó su primer Campeonato Mundial?",
          de: "Für welches Team fuhr Ayrton Senna, als er seine erste Weltmeisterschaft gewann?",
          nl: "Voor welk team reed Ayrton Senna toen hij zijn eerste Wereldkampioenschap won?"
        },
        options: ["McLaren", "Lotus", "Williams", "Toleman"],
        correct: 0,
        explanation: {
          en: "Ayrton Senna won his first championship in 1988 driving for McLaren-Honda, winning 8 races that season alongside teammate Alain Prost.",
          es: "Ayrton Senna ganó su primer campeonato en 1988 conduciendo para McLaren-Honda, ganando 8 carreras esa temporada junto a su compañero Alain Prost.",
          de: "Ayrton Senna gewann 1988 seine erste Meisterschaft für McLaren-Honda und gewann 8 Rennen in dieser Saison neben Teamkollege Alain Prost.",
          nl: "Ayrton Senna won zijn eerste kampioenschap in 1988 rijdend voor McLaren-Honda, won 8 races dat seizoen naast teamgenoot Alain Prost."
        }
      },
      {
        question: {
          en: "Jacques Villeneuve won the 1997 World Championship for which team?",
          es: "¿Jacques Villeneuve ganó el Campeonato Mundial de 1997 para qué equipo?",
          de: "Jacques Villeneuve gewann 1997 die Weltmeisterschaft für welches Team?",
          nl: "Jacques Villeneuve won het Wereldkampioenschap van 1997 voor welk team?"
        },
        options: ["Williams", "McLaren", "Benetton", "Ferrari"],
        correct: 0,
        explanation: {
          en: "Jacques Villeneuve won the 1997 championship for Williams in a dramatic final race at Jerez, where Michael Schumacher was disqualified after a collision.",
          es: "Jacques Villeneuve ganó el campeonato de 1997 para Williams en una dramática carrera final en Jerez, donde Michael Schumacher fue descalificado después de una colisión.",
          de: "Jacques Villeneuve gewann 1997 die Meisterschaft für Williams in einem dramatischen Finale in Jerez, wo Michael Schumacher nach einer Kollision disqualifiziert wurde.",
          nl: "Jacques Villeneuve won het kampioenschap van 1997 voor Williams in een dramatische laatste race in Jerez, waar Michael Schumacher werd gediskwalificeerd na een botsing."
        }
      },
      {
        question: {
          en: "Jenson Button won the 2009 World Championship driving for which team?",
          es: "¿Jenson Button ganó el Campeonato Mundial de 2009 conduciendo para qué equipo?",
          de: "Jenson Button gewann 2009 die Weltmeisterschaft für welches Team?",
          nl: "Jenson Button won het Wereldkampioenschap van 2009 rijdend voor welk team?"
        },
        options: ["Brawn GP", "McLaren", "Honda", "Williams"],
        correct: 0,
        explanation: {
          en: "Jenson Button won the 2009 championship for Brawn GP, a team formed from the ashes of Honda. He won 6 of the first 7 races in the dominant BGP 001 car.",
          es: "Jenson Button ganó el campeonato de 2009 para Brawn GP, un equipo formado de las cenizas de Honda. Ganó 6 de las primeras 7 carreras en el dominante BGP 001.",
          de: "Jenson Button gewann 2009 die Meisterschaft für Brawn GP, ein Team aus der Asche von Honda. Er gewann 6 der ersten 7 Rennen im dominanten BGP 001.",
          nl: "Jenson Button won het kampioenschap van 2009 voor Brawn GP, een team gevormd uit de as van Honda. Hij won 6 van de eerste 7 races in de dominante BGP 001."
        }
      },
      {
        question: {
          en: "Kimi Räikkönen won his only World Championship in which year?",
          es: "¿Kimi Räikkönen ganó su único Campeonato Mundial en qué año?",
          de: "Kimi Räikkönen gewann seine einzige Weltmeisterschaft in welchem Jahr?",
          nl: "Kimi Räikkönen won zijn enige Wereldkampioenschap in welk jaar?"
        },
        options: ["2007", "2003", "2005", "2012"],
        correct: 0,
        explanation: {
          en: "Kimi Räikkönen won the 2007 championship for Ferrari by one point, coming from behind to beat McLaren's Lewis Hamilton and Fernando Alonso at the final race in Brazil.",
          es: "Kimi Räikkönen ganó el campeonato de 2007 para Ferrari por un punto, viniendo de atrás para vencer a Lewis Hamilton y Fernando Alonso de McLaren en la carrera final en Brasil.",
          de: "Kimi Räikkönen gewann 2007 die Meisterschaft für Ferrari mit einem Punkt Vorsprung, kam von hinten und schlug McLarens Lewis Hamilton und Fernando Alonso beim letzten Rennen in Brasilien.",
          nl: "Kimi Räikkönen won het kampioenschap van 2007 voor Ferrari met één punt, kwam van achteren en versloeg McLaren's Lewis Hamilton en Fernando Alonso in de laatste race in Brazilië."
        }
      },
      {
        question: {
          en: "Fernando Alonso won back-to-back championships in which years?",
          es: "¿Fernando Alonso ganó campeonatos consecutivos en qué años?",
          de: "Fernando Alonso gewann aufeinanderfolgende Meisterschaften in welchen Jahren?",
          nl: "Fernando Alonso won achtereenvolgende kampioenschappen in welke jaren?"
        },
        options: ["2005 and 2006", "2004 and 2005", "2006 and 2007", "2003 and 2004"],
        correct: 0,
        explanation: {
          en: "Fernando Alonso won consecutive championships in 2005 and 2006 driving for Renault. He became the youngest champion at the time in 2005 at age 24.",
          es: "Fernando Alonso ganó campeonatos consecutivos en 2005 y 2006 conduciendo para Renault. Se convirtió en el campeón más joven en ese momento en 2005 a los 24 años.",
          de: "Fernando Alonso gewann aufeinanderfolgende Meisterschaften 2005 und 2006 für Renault. Er wurde 2005 im Alter von 24 Jahren der bis dahin jüngste Champion.",
          nl: "Fernando Alonso won achtereenvolgende kampioenschappen in 2005 en 2006 rijdend voor Renault. Hij werd de jongste kampioen op dat moment in 2005 op 24-jarige leeftijd."
        }
      },
      {
        question: {
          en: "Sebastian Vettel won 4 consecutive championships from 2010-2013 for which team?",
          es: "¿Sebastian Vettel ganó 4 campeonatos consecutivos de 2010-2013 para qué equipo?",
          de: "Sebastian Vettel gewann von 2010-2013 vier aufeinanderfolgende Meisterschaften für welches Team?",
          nl: "Sebastian Vettel won 4 achtereenvolgende kampioenschappen van 2010-2013 voor welk team?"
        },
        options: ["Red Bull Racing", "Ferrari", "McLaren", "Mercedes"],
        correct: 0,
        explanation: {
          en: "Sebastian Vettel dominated F1 from 2010-2013, winning 4 consecutive championships for Red Bull Racing. He became the youngest multiple champion and youngest 4-time champion.",
          es: "Sebastian Vettel dominó F1 de 2010-2013, ganando 4 campeonatos consecutivos para Red Bull Racing. Se convirtió en el campeón múltiple más joven y el campeón de 4 veces más joven.",
          de: "Sebastian Vettel dominierte die F1 von 2010-2013 und gewann 4 aufeinanderfolgende Meisterschaften für Red Bull Racing. Er wurde der jüngste mehrfache Champion und jüngste vierfache Champion.",
          nl: "Sebastian Vettel domineerde F1 van 2010-2013, won 4 achtereenvolgende kampioenschappen voor Red Bull Racing. Hij werd de jongste meervoudig kampioen en jongste 4-voudig kampioen."
        }
      },
      {
        question: {
          en: "Nico Rosberg won his only championship in 2016 and then immediately did what?",
          es: "¿Nico Rosberg ganó su único campeonato en 2016 e inmediatamente hizo qué?",
          de: "Nico Rosberg gewann 2016 seine einzige Meisterschaft und tat dann sofort was?",
          nl: "Nico Rosberg won zijn enige kampioenschap in 2016 en deed toen onmiddellijk wat?"
        },
        options: ["Retired from F1", "Moved to Ferrari", "Moved to Red Bull", "Became team principal"],
        correct: 0,
        explanation: {
          en: "Nico Rosberg shocked the F1 world by announcing his retirement just 5 days after winning the 2016 championship, saying he had achieved his childhood dream.",
          es: "Nico Rosberg conmocionó al mundo de F1 al anunciar su retiro solo 5 días después de ganar el campeonato de 2016, diciendo que había logrado su sueño de infancia.",
          de: "Nico Rosberg schockierte die F1-Welt, indem er nur 5 Tage nach dem Gewinn der Meisterschaft 2016 seinen Rücktritt ankündigte und sagte, er habe seinen Kindheitstraum erfüllt.",
          nl: "Nico Rosberg schokte de F1-wereld door zijn pensioen aan te kondigen slechts 5 dagen na het winnen van het kampioenschap van 2016, zeggend dat hij zijn kinderdroom had bereikt."
        }
      },
      {
        question: {
          en: "Which driver has the most race wins without winning a World Championship?",
          es: "¿Qué piloto tiene más victorias de carrera sin ganar un Campeonato Mundial?",
          de: "Welcher Fahrer hat die meisten Rennsiege ohne Weltmeisterschaftsgewinn?",
          nl: "Welke coureur heeft de meeste race-overwinningen zonder een Wereldkampioenschap te winnen?"
        },
        options: ["Stirling Moss (16 wins)", "Carlos Reutemann (12 wins)", "David Coulthard (13 wins)", "Rubens Barrichello (11 wins)"],
        correct: 0,
        explanation: {
          en: "Stirling Moss won 16 races but never won the World Championship, finishing runner-up 4 times. He's widely regarded as the greatest driver never to win the title.",
          es: "Stirling Moss ganó 16 carreras pero nunca ganó el Campeonato Mundial, terminando subcampeón 4 veces. Es ampliamente considerado como el mejor piloto que nunca ganó el título.",
          de: "Stirling Moss gewann 16 Rennen, aber nie die Weltmeisterschaft, wurde 4 Mal Zweiter. Er gilt weithin als der größte Fahrer, der nie den Titel gewann.",
          nl: "Stirling Moss won 16 races maar won nooit het Wereldkampioenschap, eindigde 4 keer als runner-up. Hij wordt algemeen beschouwd als de grootste coureur die nooit de titel won."
        }
      },
      {
        question: {
          en: "Lewis Hamilton won his first championship in 2008 by how many points?",
          es: "¿Lewis Hamilton ganó su primer campeonato en 2008 por cuántos puntos?",
          de: "Lewis Hamilton gewann 2008 seine erste Meisterschaft mit wie vielen Punkten Vorsprung?",
          nl: "Lewis Hamilton won zijn eerste kampioenschap in 2008 met hoeveel punten?"
        },
        options: ["1 point", "2 points", "3 points", "5 points"],
        correct: 0,
        explanation: {
          en: "Lewis Hamilton won the 2008 championship by just 1 point over Felipe Massa, passing Timo Glock on the final corner of the final lap of the season at Brazil.",
          es: "Lewis Hamilton ganó el campeonato de 2008 por solo 1 punto sobre Felipe Massa, adelantando a Timo Glock en la última curva de la última vuelta de la temporada en Brasil.",
          de: "Lewis Hamilton gewann 2008 die Meisterschaft mit nur 1 Punkt Vorsprung vor Felipe Massa, indem er Timo Glock in der letzten Kurve der letzten Runde der Saison in Brasilien überholte.",
          nl: "Lewis Hamilton won het kampioenschap van 2008 met slechts 1 punt voor Felipe Massa, passeerde Timo Glock in de laatste bocht van de laatste ronde van het seizoen in Brazilië."
        }
      },
      {
        question: {
          en: "Which driver is known as 'The Iceman'?",
          es: "¿Qué piloto es conocido como 'El Hombre de Hielo'?",
          de: "Welcher Fahrer ist bekannt als 'The Iceman'?",
          nl: "Welke coureur staat bekend als 'The Iceman'?"
        },
        options: ["Kimi Räikkönen", "Mika Häkkinen", "Nico Rosberg", "Valtteri Bottas"],
        correct: 0,
        explanation: {
          en: "Kimi Räikkönen is known as 'The Iceman' for his cool, unflappable demeanor and minimal radio communications. He won the 2007 World Championship.",
          es: "Kimi Räikkönen es conocido como 'El Hombre de Hielo' por su actitud fría e imperturbable y comunicaciones de radio mínimas. Ganó el Campeonato Mundial de 2007.",
          de: "Kimi Räikkönen ist bekannt als 'The Iceman' für seine coole, unerschütterliche Art und minimale Funkkommunikation. Er gewann die Weltmeisterschaft 2007.",
          nl: "Kimi Räikkönen staat bekend als 'The Iceman' voor zijn koele, onverstoorbare houding en minimale radiocommunicatie. Hij won het Wereldkampioenschap van 2007."
        }
      },
      {
        question: {
          en: "Max Verstappen became the youngest race winner at what age?",
          es: "¿Max Verstappen se convirtió en el ganador de carrera más joven a qué edad?",
          de: "Max Verstappen wurde im Alter von wie vielen Jahren der jüngste Rennsieger?",
          nl: "Max Verstappen werd de jongste racewinnaar op welke leeftijd?"
        },
        options: ["18 years old", "19 years old", "17 years old", "20 years old"],
        correct: 0,
        explanation: {
          en: "Max Verstappen won the 2016 Spanish Grand Prix at 18 years and 228 days old, becoming the youngest race winner in F1 history. This was his first race for Red Bull.",
          es: "Max Verstappen ganó el Gran Premio de España 2016 a los 18 años y 228 días, convirtiéndose en el ganador de carrera más joven en la historia de F1. Esta fue su primera carrera para Red Bull.",
          de: "Max Verstappen gewann den Spanien GP 2016 mit 18 Jahren und 228 Tagen und wurde der jüngste Rennsieger in der F1-Geschichte. Dies war sein erstes Rennen für Red Bull.",
          nl: "Max Verstappen won de Spaanse Grand Prix 2016 op 18 jaar en 228 dagen oud, werd de jongste racewinnaar in F1-geschiedenis. Dit was zijn eerste race voor Red Bull."
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