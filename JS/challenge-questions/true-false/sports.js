// True/False Questions - Sports (Easy-Medium)
// Sports facts, records, rules, athletes
(function() {

  const sportsQuestions = [
    {
      id: 'sport_1',
      question: {
        en: "A soccer match has two halves of 45 minutes each.",
        es: "Un partido de fútbol tiene dos mitades de 45 minutos cada una.",
        de: "Ein Fußballspiel hat zwei Hälften von je 45 Minuten.",
        nl: "Een voetbalwedstrijd heeft twee helften van elk 45 minuten."
      },
      isTrue: true,
      explanation: {
        en: "A standard soccer match consists of two 45-minute halves, for a total of 90 minutes of regular play.",
        es: "Un partido de fútbol estándar consiste en dos mitades de 45 minutos, para un total de 90 minutos de juego regular.",
        de: "Ein Standard-Fußballspiel besteht aus zwei 45-Minuten-Hälften, insgesamt 90 Minuten regulärer Spielzeit.",
        nl: "Een standaard voetbalwedstrijd bestaat uit twee helften van 45 minuten, voor een totaal van 90 minuten reguliere speeltijd."
      }
    },
    {
      id: 'sport_2',
      question: {
        en: "Basketball was invented by a Canadian.",
        es: "El baloncesto fue inventado por un canadiense.",
        de: "Basketball wurde von einem Kanadier erfunden.",
        nl: "Basketbal werd uitgevonden door een Canadees."
      },
      isTrue: true,
      explanation: {
        en: "Basketball was invented in 1891 by James Naismith, a Canadian physical education instructor working in Massachusetts.",
        es: "El baloncesto fue inventado en 1891 por James Naismith, un instructor de educación física canadiense que trabajaba en Massachusetts.",
        de: "Basketball wurde 1891 von James Naismith erfunden, einem kanadischen Sportlehrer, der in Massachusetts arbeitete.",
        nl: "Basketbal werd uitgevonden in 1891 door James Naismith, een Canadese leraar lichamelijke opvoeding die in Massachusetts werkte."
      }
    },
    {
      id: 'sport_3',
      question: {
        en: "The Summer and Winter Olympics were held in the same year until 1992.",
        es: "Los Juegos Olímpicos de Verano e Invierno se celebraban en el mismo año hasta 1992.",
        de: "Die Olympischen Sommer- und Winterspiele fanden bis 1992 im selben Jahr statt.",
        nl: "De Olympische Zomer- en Winterspelen werden tot 1992 in hetzelfde jaar gehouden."
      },
      isTrue: true,
      explanation: {
        en: "Until 1992, both Summer and Winter Olympics were held in the same year. After 1992, they were staggered to alternate every two years.",
        es: "Hasta 1992, los Juegos Olímpicos de Verano e Invierno se celebraban en el mismo año. Después de 1992, se escalonaron para alternar cada dos años.",
        de: "Bis 1992 fanden beide Olympischen Spiele im selben Jahr statt. Nach 1992 wurden sie gestaffelt, um alle zwei Jahre zu wechseln.",
        nl: "Tot 1992 werden beide Olympische Spelen in hetzelfde jaar gehouden. Na 1992 werden ze gespreid om elke twee jaar af te wisselen."
      }
    },
    {
      id: 'sport_4',
      question: {
        en: "A golf course typically has 18 holes.",
        es: "Un campo de golf típicamente tiene 18 hoyos.",
        de: "Ein Golfplatz hat typischerweise 18 Löcher.",
        nl: "Een golfbaan heeft doorgaans 18 holes."
      },
      isTrue: true,
      explanation: {
        en: "A standard golf course has 18 holes, though there are also 9-hole courses and other variations.",
        es: "Un campo de golf estándar tiene 18 hoyos, aunque también hay campos de 9 hoyos y otras variaciones.",
        de: "Ein Standard-Golfplatz hat 18 Löcher, obwohl es auch 9-Loch-Plätze und andere Varianten gibt.",
        nl: "Een standaard golfbaan heeft 18 holes, hoewel er ook 9-holes banen en andere variaties zijn."
      }
    },
    {
      id: 'sport_5',
      question: {
        en: "Tennis was originally played on grass courts only.",
        es: "El tenis se jugaba originalmente solo en canchas de césped.",
        de: "Tennis wurde ursprünglich nur auf Rasenplätzen gespielt.",
        nl: "Tennis werd oorspronkelijk alleen op grasbanen gespeeld."
      },
      isTrue: true,
      explanation: {
        en: "Tennis originated as lawn tennis, played exclusively on grass courts. Other surfaces like clay and hard courts came later.",
        es: "El tenis se originó como tenis de césped, jugado exclusivamente en canchas de césped. Otras superficies como arcilla y canchas duras vinieron después.",
        de: "Tennis entstand als Rasentennis und wurde ausschließlich auf Rasenplätzen gespielt. Andere Beläge wie Sand und Hartplätze kamen später.",
        nl: "Tennis ontstond als lawn tennis, exclusief gespeeld op grasbanen. Andere ondergronden zoals gravel en hardcourt kwamen later."
      }
    },
    {
      id: 'sport_6',
      question: {
        en: "A marathon is exactly 42 kilometers long.",
        es: "Un maratón tiene exactamente 42 kilómetros de largo.",
        de: "Ein Marathon ist genau 42 Kilometer lang.",
        nl: "Een marathon is precies 42 kilometer lang."
      },
      isTrue: false,
      explanation: {
        en: "A marathon is 42.195 kilometers (26.2 miles) long, not exactly 42 km.",
        es: "Un maratón tiene 42.195 kilómetros (26.2 millas) de largo, no exactamente 42 km.",
        de: "Ein Marathon ist 42,195 Kilometer (26,2 Meilen) lang, nicht genau 42 km.",
        nl: "Een marathon is 42,195 kilometer (26,2 mijl) lang, niet precies 42 km."
      }
    },
    {
      id: 'sport_7',
      question: {
        en: "Michael Jordan played baseball professionally.",
        es: "Michael Jordan jugó béisbol profesionalmente.",
        de: "Michael Jordan spielte professionell Baseball.",
        nl: "Michael Jordan speelde professioneel honkbal."
      },
      isTrue: true,
      explanation: {
        en: "Michael Jordan briefly retired from basketball and played Minor League Baseball for the Birmingham Barons in 1994.",
        es: "Michael Jordan se retiró brevemente del baloncesto y jugó béisbol de ligas menores para los Birmingham Barons en 1994.",
        de: "Michael Jordan zog sich kurzzeitig vom Basketball zurück und spielte 1994 Minor League Baseball für die Birmingham Barons.",
        nl: "Michael Jordan stopte kort met basketbal en speelde Minor League Baseball voor de Birmingham Barons in 1994."
      }
    },
    {
      id: 'sport_8',
      question: {
        en: "The World Cup is held every two years.",
        es: "La Copa del Mundo se celebra cada dos años.",
        de: "Die Weltmeisterschaft findet alle zwei Jahre statt.",
        nl: "Het Wereldkampioenschap wordt elke twee jaar gehouden."
      },
      isTrue: false,
      explanation: {
        en: "The FIFA World Cup is held every four years, not two. The next tournament follows four years after the previous one.",
        es: "La Copa Mundial de la FIFA se celebra cada cuatro años, no dos. El siguiente torneo sigue cuatro años después del anterior.",
        de: "Die FIFA-Weltmeisterschaft findet alle vier Jahre statt, nicht alle zwei. Das nächste Turnier folgt vier Jahre nach dem vorherigen.",
        nl: "Het FIFA Wereldkampioenschap wordt elke vier jaar gehouden, niet twee. Het volgende toernooi vindt vier jaar na het vorige plaats."
      }
    },
    {
      id: 'sport_9',
      question: {
        en: "Usain Bolt holds the world record for the 100m sprint.",
        es: "Usain Bolt tiene el récord mundial de los 100m.",
        de: "Usain Bolt hält den Weltrekord über 100m Sprint.",
        nl: "Usain Bolt heeft het wereldrecord op de 100m sprint."
      },
      isTrue: true,
      explanation: {
        en: "Usain Bolt set the 100m world record of 9.58 seconds in 2009, which still stands today.",
        es: "Usain Bolt estableció el récord mundial de 100m de 9.58 segundos en 2009, que aún se mantiene hoy.",
        de: "Usain Bolt stellte 2009 den 100m-Weltrekord von 9,58 Sekunden auf, der noch heute besteht.",
        nl: "Usain Bolt vestigde in 2009 het 100m wereldrecord van 9,58 seconden, dat nog steeds staat."
      }
    },
    {
      id: 'sport_10',
      question: {
        en: "Boxing matches have 10 rounds.",
        es: "Los combates de boxeo tienen 10 asaltos.",
        de: "Boxkämpfe haben 10 Runden.",
        nl: "Bokswedstrijden hebben 10 rondes."
      },
      isTrue: false,
      explanation: {
        en: "Professional boxing matches can have varying numbers of rounds, typically 4, 6, 8, 10, or 12 rounds depending on the fight. Championship fights are usually 12 rounds.",
        es: "Los combates de boxeo profesional pueden tener un número variable de asaltos, típicamente 4, 6, 8, 10 o 12 asaltos según la pelea. Las peleas de campeonato suelen ser de 12 asaltos.",
        de: "Professionelle Boxkämpfe können unterschiedlich viele Runden haben, typischerweise 4, 6, 8, 10 oder 12 Runden je nach Kampf. Meisterschaftskämpfe haben normalerweise 12 Runden.",
        nl: "Professionele bokswedstrijden kunnen verschillende aantallen rondes hebben, meestal 4, 6, 8, 10 of 12 rondes afhankelijk van het gevecht. Kampioenschapsgevechten zijn meestal 12 rondes."
      }
    },
    {
      id: 'sport_11',
      question: {
        en: "The Tour de France is a bicycle race.",
        es: "El Tour de Francia es una carrera de bicicletas.",
        de: "Die Tour de France ist ein Fahrradrennen.",
        nl: "De Tour de France is een wielerwedstrijd."
      },
      isTrue: true,
      explanation: {
        en: "The Tour de France is an annual multi-stage bicycle race held primarily in France, considered one of the most prestigious cycling events.",
        es: "El Tour de Francia es una carrera de bicicletas anual de varias etapas que se celebra principalmente en Francia, considerada uno de los eventos ciclistas más prestigiosos.",
        de: "Die Tour de France ist ein jährliches mehrstufiges Fahrradrennen, das hauptsächlich in Frankreich stattfindet und als eines der prestigeträchtigsten Radsportereignisse gilt.",
        nl: "De Tour de France is een jaarlijkse meerdaagse wielerwedstrijd die voornamelijk in Frankrijk wordt gehouden, beschouwd als een van de meest prestigieuze wielerevenementen."
      }
    },
    {
      id: 'sport_12',
      question: {
        en: "American football and rugby are the same sport.",
        es: "El fútbol americano y el rugby son el mismo deporte.",
        de: "American Football und Rugby sind derselbe Sport.",
        nl: "American football en rugby zijn dezelfde sport."
      },
      isTrue: false,
      explanation: {
        en: "American football and rugby are different sports with different rules, equipment, and playing styles, though they share some historical origins.",
        es: "El fútbol americano y el rugby son deportes diferentes con reglas, equipamiento y estilos de juego diferentes, aunque comparten algunos orígenes históricos.",
        de: "American Football und Rugby sind verschiedene Sportarten mit unterschiedlichen Regeln, Ausrüstung und Spielstilen, obwohl sie einige historische Ursprünge teilen.",
        nl: "American football en rugby zijn verschillende sporten met verschillende regels, uitrusting en speelstijlen, hoewel ze enkele historische oorsprongen delen."
      }
    },
    {
      id: 'sport_13',
      question: {
        en: "Tennis uses a unique scoring system with terms like 'love,' 'deuce,' and 'advantage.'",
        es: "El tenis usa un sistema de puntuación único con términos como 'love,' 'deuce' y 'advantage.'",
        de: "Tennis verwendet ein einzigartiges Punktesystem mit Begriffen wie 'Love,' 'Deuce' und 'Advantage.'",
        nl: "Tennis gebruikt een uniek scoresysteem met termen als 'love,' 'deuce' en 'advantage.'"
      },
      isTrue: true,
      explanation: {
        en: "Tennis scoring is unique in sports: 'love' means zero, games are scored 15-30-40, and 'deuce' occurs at 40-40 requiring two consecutive points to win.",
        es: "La puntuación del tenis es única: 'love' significa cero, los juegos se puntúan 15-30-40, y 'deuce' ocurre en 40-40.",
        de: "Die Tennis-Punktzählung ist einzigartig: 'Love' bedeutet null, Spiele werden 15-30-40 gezählt, und 'Deuce' tritt bei 40-40 auf.",
        nl: "Tennisscores zijn uniek: 'love' betekent nul, games worden gescoord 15-30-40, en 'deuce' treedt op bij 40-40."
      }
    },
    {
      id: 'sport_14',
      question: {
        en: "Ice hockey originated in Canada.",
        es: "El hockey sobre hielo se originó en Canadá.",
        de: "Eishockey stammt aus Kanada.",
        nl: "IJshockey is ontstaan in Canada."
      },
      isTrue: true,
      explanation: {
        en: "Modern ice hockey developed in Canada in the 19th century, with the first organized indoor game played in Montreal in 1875.",
        es: "El hockey sobre hielo moderno se desarrolló en Canadá en el siglo XIX, con el primer juego organizado en interiores jugado en Montreal en 1875.",
        de: "Modernes Eishockey entwickelte sich im 19. Jahrhundert in Kanada, mit dem ersten organisierten Hallenspiel in Montreal 1875.",
        nl: "Modern ijshockey ontwikkelde zich in Canada in de 19e eeuw, met het eerste georganiseerde binnenwedstrijd gespeeld in Montreal in 1875."
      }
    },
    {
      id: 'sport_15',
      question: {
        en: "A tennis match can end in a tie.",
        es: "Un partido de tenis puede terminar en empate.",
        de: "Ein Tennisspiel kann unentschieden enden.",
        nl: "Een tenniswedstrijd kan eindigen in een gelijkspel."
      },
      isTrue: false,
      explanation: {
        en: "Tennis matches cannot end in a tie. Play continues until one player wins by the required margin of games and sets.",
        es: "Los partidos de tenis no pueden terminar en empate. El juego continúa hasta que un jugador gana por el margen requerido de juegos y sets.",
        de: "Tennisspiele können nicht unentschieden enden. Das Spiel wird fortgesetzt, bis ein Spieler mit dem erforderlichen Vorsprung an Spielen und Sätzen gewinnt.",
        nl: "Tenniswedstrijden kunnen niet eindigen in een gelijkspel. Het spel gaat door totdat een speler wint met de vereiste marge van games en sets."
      }
    },
    {
      id: 'sport_16',
      question: {
        en: "The Super Bowl is the championship game of American football.",
        es: "El Super Bowl es el juego de campeonato del fútbol americano.",
        de: "Der Super Bowl ist das Meisterschaftsspiel des American Football.",
        nl: "De Super Bowl is de kampioenschapswedstrijd van American football."
      },
      isTrue: true,
      explanation: {
        en: "The Super Bowl is the annual championship game of the National Football League (NFL) in the United States.",
        es: "El Super Bowl es el juego de campeonato anual de la National Football League (NFL) en los Estados Unidos.",
        de: "Der Super Bowl ist das jährliche Meisterschaftsspiel der National Football League (NFL) in den Vereinigten Staaten.",
        nl: "De Super Bowl is de jaarlijkse kampioenschapswedstrijd van de National Football League (NFL) in de Verenigde Staten."
      }
    },
    {
      id: 'sport_17',
      question: {
        en: "Formula 1 cars race on oval tracks.",
        es: "Los autos de Fórmula 1 corren en pistas ovaladas.",
        de: "Formel-1-Autos fahren auf ovalen Strecken.",
        nl: "Formule 1-auto's racen op ovale circuits."
      },
      isTrue: false,
      explanation: {
        en: "Formula 1 races take place on various types of circuits including street circuits and purpose-built tracks, but not oval tracks. Oval tracks are used in IndyCar racing.",
        es: "Las carreras de Fórmula 1 tienen lugar en varios tipos de circuitos, incluidos circuitos urbanos y pistas construidas específicamente, pero no pistas ovaladas. Las pistas ovaladas se usan en las carreras de IndyCar.",
        de: "Formel-1-Rennen finden auf verschiedenen Streckentypen statt, darunter Stadtkurse und speziell gebaute Strecken, aber keine Ovale. Ovale werden im IndyCar-Rennsport verwendet.",
        nl: "Formule 1-races vinden plaats op verschillende soorten circuits, waaronder stratencircuits en speciaal gebouwde circuits, maar geen ovale banen. Ovale banen worden gebruikt in IndyCar-races."
      }
    },
    {
      id: 'sport_18',
      question: {
        en: "Muhammad Ali's birth name was Cassius Clay.",
        es: "El nombre de nacimiento de Muhammad Ali era Cassius Clay.",
        de: "Muhammad Alis Geburtsname war Cassius Clay.",
        nl: "Muhammad Ali's geboortenaam was Cassius Clay."
      },
      isTrue: true,
      explanation: {
        en: "Muhammad Ali was born Cassius Marcellus Clay Jr. He changed his name after converting to Islam in 1964.",
        es: "Muhammad Ali nació como Cassius Marcellus Clay Jr. Cambió su nombre después de convertirse al Islam en 1964.",
        de: "Muhammad Ali wurde als Cassius Marcellus Clay Jr. geboren. Er änderte seinen Namen nach seiner Konversion zum Islam im Jahr 1964.",
        nl: "Muhammad Ali werd geboren als Cassius Marcellus Clay Jr. Hij veranderde zijn naam na zijn bekering tot de islam in 1964."
      }
    },
    {
      id: 'sport_19',
      question: {
        en: "Swimming is part of the triathlon.",
        es: "La natación es parte del triatlón.",
        de: "Schwimmen ist Teil des Triathlons.",
        nl: "Zwemmen maakt deel uit van de triatlon."
      },
      isTrue: true,
      explanation: {
        en: "A triathlon consists of three consecutive events: swimming, cycling, and running.",
        es: "Un triatlón consiste en tres eventos consecutivos: natación, ciclismo y carrera.",
        de: "Ein Triathlon besteht aus drei aufeinanderfolgenden Disziplinen: Schwimmen, Radfahren und Laufen.",
        nl: "Een triatlon bestaat uit drie opeenvolgende onderdelen: zwemmen, fietsen en hardlopen."
      }
    },
    {
      id: 'sport_20',
      question: {
        en: "Brazil has won the most FIFA World Cups.",
        es: "Brasil ha ganado la mayor cantidad de Copas del Mundo de la FIFA.",
        de: "Brasilien hat die meisten FIFA-Weltmeisterschaften gewonnen.",
        nl: "Brazilië heeft de meeste FIFA Wereldkampioenschappen gewonnen."
      },
      isTrue: true,
      explanation: {
        en: "Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002), more than any other nation.",
        es: "Brasil ha ganado la Copa del Mundo de la FIFA 5 veces (1958, 1962, 1970, 1994, 2002), más que cualquier otra nación.",
        de: "Brasilien hat die FIFA-Weltmeisterschaft 5-mal gewonnen (1958, 1962, 1970, 1994, 2002), mehr als jede andere Nation.",
        nl: "Brazilië heeft het FIFA Wereldkampioenschap 5 keer gewonnen (1958, 1962, 1970, 1994, 2002), meer dan enig ander land."
      }
    },
    {
      id: 'sport_21',
      question: {
        en: "Wimbledon requires players to wear white.",
        es: "Wimbledon requiere que los jugadores vistan de blanco.",
        de: "Wimbledon verlangt von Spielern, Weiß zu tragen.",
        nl: "Wimbledon vereist dat spelers wit dragen."
      },
      isTrue: true,
      explanation: {
        en: "Wimbledon has a strict all-white dress code for players, a tradition that has been maintained since the tournament's early days.",
        es: "Wimbledon tiene un estricto código de vestimenta completamente blanco para los jugadores, una tradición que se ha mantenido desde los primeros días del torneo.",
        de: "Wimbledon hat eine strenge Kleiderordnung nur in Weiß für Spieler, eine Tradition, die seit den frühen Tagen des Turniers beibehalten wird.",
        nl: "Wimbledon heeft een strikte kledingcode van alleen wit voor spelers, een traditie die sinds de begindagen van het toernooi wordt gehandhaafd."
      }
    },
    {
      id: 'sport_22',
      question: {
        en: "A basketball team has 6 players on the court.",
        es: "Un equipo de baloncesto tiene 6 jugadores en la cancha.",
        de: "Ein Basketballteam hat 6 Spieler auf dem Feld.",
        nl: "Een basketbalteam heeft 6 spelers op het veld."
      },
      isTrue: false,
      explanation: {
        en: "A basketball team has 5 players on the court at a time, not 6.",
        es: "Un equipo de baloncesto tiene 5 jugadores en la cancha a la vez, no 6.",
        de: "Ein Basketballteam hat 5 Spieler gleichzeitig auf dem Feld, nicht 6.",
        nl: "Een basketbalteam heeft 5 spelers tegelijk op het veld, niet 6."
      }
    },
    {
      id: 'sport_23',
      question: {
        en: "The Kentucky Derby is a horse race.",
        es: "El Derby de Kentucky es una carrera de caballos.",
        de: "Das Kentucky Derby ist ein Pferderennen.",
        nl: "De Kentucky Derby is een paardenrace."
      },
      isTrue: true,
      explanation: {
        en: "The Kentucky Derby is a famous annual horse race held in Louisville, Kentucky, often called 'The Most Exciting Two Minutes in Sports'.",
        es: "El Derby de Kentucky es una famosa carrera de caballos anual que se celebra en Louisville, Kentucky, a menudo llamada 'Los Dos Minutos Más Emocionantes en los Deportes'.",
        de: "Das Kentucky Derby ist ein berühmtes jährliches Pferderennen in Louisville, Kentucky, oft als 'Die aufregendsten zwei Minuten im Sport' bezeichnet.",
        nl: "De Kentucky Derby is een beroemde jaarlijkse paardenrace in Louisville, Kentucky, vaak 'De Meest Opwindende Twee Minuten in Sport' genoemd."
      }
    },
    {
      id: 'sport_24',
      question: {
        en: "Soccer players can use their hands during play.",
        es: "Los jugadores de fútbol pueden usar sus manos durante el juego.",
        de: "Fußballspieler dürfen während des Spiels ihre Hände benutzen.",
        nl: "Voetballers mogen hun handen gebruiken tijdens het spel."
      },
      isTrue: false,
      explanation: {
        en: "In soccer, only the goalkeeper can use their hands, and only within the penalty area. Other players cannot use their hands (except for throw-ins).",
        es: "En el fútbol, solo el portero puede usar sus manos, y solo dentro del área penal. Otros jugadores no pueden usar sus manos (excepto para saques de banda).",
        de: "Im Fußball darf nur der Torwart seine Hände benutzen, und das nur im Strafraum. Andere Spieler dürfen ihre Hände nicht benutzen (außer beim Einwurf).",
        nl: "In voetbal mag alleen de doelman zijn handen gebruiken, en alleen binnen het strafschopgebied. Andere spelers mogen hun handen niet gebruiken (behalve voor inworp)."
      }
    },
    {
      id: 'sport_25',
      question: {
        en: "The NBA stands for National Basketball Association.",
        es: "NBA significa Asociación Nacional de Baloncesto.",
        de: "NBA steht für National Basketball Association.",
        nl: "NBA staat voor National Basketball Association."
      },
      isTrue: true,
      explanation: {
        en: "NBA stands for National Basketball Association, the premier professional basketball league in North America.",
        es: "NBA significa National Basketball Association, la principal liga profesional de baloncesto en América del Norte.",
        de: "NBA steht für National Basketball Association, die führende professionelle Basketballliga in Nordamerika.",
        nl: "NBA staat voor National Basketball Association, de belangrijkste professionele basketbalcompetitie in Noord-Amerika."
      }
    },
    {
      id: 'sport_26',
      question: {
        en: "Cricket is played with a round ball.",
        es: "El cricket se juega con una pelota redonda.",
        de: "Cricket wird mit einem runden Ball gespielt.",
        nl: "Cricket wordt gespeeld met een ronde bal."
      },
      isTrue: true,
      explanation: {
        en: "Cricket is played with a hard, solid round ball, typically made of cork covered with leather.",
        es: "El cricket se juega con una pelota redonda dura y sólida, típicamente hecha de corcho cubierto con cuero.",
        de: "Cricket wird mit einem harten, festen runden Ball gespielt, der normalerweise aus Kork mit Lederüberzug besteht.",
        nl: "Cricket wordt gespeeld met een harde, solide ronde bal, meestal gemaakt van kurk bedekt met leer."
      }
    },
    {
      id: 'sport_27',
      question: {
        en: "Tiger Woods is a professional golfer.",
        es: "Tiger Woods es un golfista profesional.",
        de: "Tiger Woods ist ein professioneller Golfer.",
        nl: "Tiger Woods is een professionele golfer."
      },
      isTrue: true,
      explanation: {
        en: "Tiger Woods is one of the most successful professional golfers of all time, with numerous major championship wins.",
        es: "Tiger Woods es uno de los golfistas profesionales más exitosos de todos los tiempos, con numerosas victorias en campeonatos importantes.",
        de: "Tiger Woods ist einer der erfolgreichsten professionellen Golfer aller Zeiten mit zahlreichen Major-Championship-Siegen.",
        nl: "Tiger Woods is een van de meest succesvolle professionele golfers aller tijden, met talrijke overwinningen in grote kampioenschappen."
      }
    },
    {
      id: 'sport_28',
      question: {
        en: "Volleyball was invented in the United States.",
        es: "El voleibol fue inventado en Estados Unidos.",
        de: "Volleyball wurde in den Vereinigten Staaten erfunden.",
        nl: "Volleybal werd uitgevonden in de Verenigde Staten."
      },
      isTrue: true,
      explanation: {
        en: "Volleyball was invented in 1895 by William G. Morgan in Holyoke, Massachusetts, USA.",
        es: "El voleibol fue inventado en 1895 por William G. Morgan en Holyoke, Massachusetts, EE.UU.",
        de: "Volleyball wurde 1895 von William G. Morgan in Holyoke, Massachusetts, USA erfunden.",
        nl: "Volleybal werd uitgevonden in 1895 door William G. Morgan in Holyoke, Massachusetts, VS."
      }
    },
    {
      id: 'sport_29',
      question: {
        en: "A yellow card in soccer means immediate expulsion.",
        es: "Una tarjeta amarilla en fútbol significa expulsión inmediata.",
        de: "Eine gelbe Karte im Fußball bedeutet sofortigen Platzverweis.",
        nl: "Een gele kaart in voetbal betekent onmiddellijke verwijdering."
      },
      isTrue: false,
      explanation: {
        en: "A yellow card is a warning. A red card means expulsion. Two yellow cards in one match result in a red card.",
        es: "Una tarjeta amarilla es una advertencia. Una tarjeta roja significa expulsión. Dos tarjetas amarillas en un partido resultan en una tarjeta roja.",
        de: "Eine gelbe Karte ist eine Verwarnung. Eine rote Karte bedeutet Platzverweis. Zwei gelbe Karten in einem Spiel führen zu einer roten Karte.",
        nl: "Een gele kaart is een waarschuwing. Een rode kaart betekent verwijdering. Twee gele kaarten in één wedstrijd resulteren in een rode kaart."
      }
    },
    {
      id: 'sport_30',
      question: {
        en: "The Stanley Cup is awarded in ice hockey.",
        es: "La Copa Stanley se otorga en hockey sobre hielo.",
        de: "Der Stanley Cup wird im Eishockey vergeben.",
        nl: "De Stanley Cup wordt uitgereikt in ijshockey."
      },
      isTrue: true,
      explanation: {
        en: "The Stanley Cup is the championship trophy awarded annually to the National Hockey League (NHL) playoff winner.",
        es: "La Copa Stanley es el trofeo de campeonato otorgado anualmente al ganador de los playoffs de la National Hockey League (NHL).",
        de: "Der Stanley Cup ist die Meisterschaftstrophäe, die jährlich an den Playoff-Gewinner der National Hockey League (NHL) vergeben wird.",
        nl: "De Stanley Cup is de kampioenstrofee die jaarlijks wordt uitgereikt aan de winnaar van de playoffs van de National Hockey League (NHL)."
      }
    },
    {
      id: 'sport_31',
      question: {
        en: "Sumo wrestling originated in Japan.",
        es: "La lucha de sumo se originó en Japón.",
        de: "Sumo-Ringen stammt aus Japan.",
        nl: "Sumoworstelen is ontstaan in Japan."
      },
      isTrue: true,
      explanation: {
        en: "Sumo wrestling is a traditional Japanese sport with origins dating back over 1,500 years.",
        es: "La lucha de sumo es un deporte tradicional japonés con orígenes que se remontan a más de 1,500 años.",
        de: "Sumo-Ringen ist eine traditionelle japanische Sportart mit Ursprüngen, die über 1.500 Jahre zurückreichen.",
        nl: "Sumoworstelen is een traditionele Japanse sport met oorsprong die meer dan 1.500 jaar teruggaat."
      }
    },
    {
      id: 'sport_32',
      question: {
        en: "A decathlon consists of 10 different events.",
        es: "Un decatlón consiste en 10 eventos diferentes.",
        de: "Ein Zehnkampf besteht aus 10 verschiedenen Disziplinen.",
        nl: "Een tienkamp bestaat uit 10 verschillende onderdelen."
      },
      isTrue: true,
      explanation: {
        en: "A decathlon is an athletic competition consisting of 10 track and field events held over two days.",
        es: "Un decatlón es una competencia atlética que consiste en 10 eventos de pista y campo celebrados durante dos días.",
        de: "Ein Zehnkampf ist ein Leichtathletikwettbewerb, der aus 10 Leichtathletik-Disziplinen besteht, die über zwei Tage verteilt sind.",
        nl: "Een tienkamp is een atletiekwedstrijd bestaande uit 10 atletiekonderdelen verspreid over twee dagen."
      }
    },
    {
      id: 'sport_33',
      question: {
        en: "Baseball innings have 3 outs per team.",
        es: "Las entradas de béisbol tienen 3 outs por equipo.",
        de: "Baseball-Innings haben 3 Outs pro Team.",
        nl: "Honkalinningen hebben 3 outs per team."
      },
      isTrue: true,
      explanation: {
        en: "In baseball, each team gets 3 outs per inning. After 3 outs, the teams switch between batting and fielding.",
        es: "En el béisbol, cada equipo obtiene 3 outs por entrada. Después de 3 outs, los equipos cambian entre batear y fildear.",
        de: "Im Baseball bekommt jedes Team 3 Outs pro Inning. Nach 3 Outs wechseln die Teams zwischen Schlagen und Feldspielen.",
        nl: "In honkbal krijgt elk team 3 outs per inning. Na 3 outs wisselen de teams tussen slaan en veldspelen."
      }
    },
    {
      id: 'sport_34',
      question: {
        en: "Cristiano Ronaldo plays for Portugal.",
        es: "Cristiano Ronaldo juega para Portugal.",
        de: "Cristiano Ronaldo spielt für Portugal.",
        nl: "Cristiano Ronaldo speelt voor Portugal."
      },
      isTrue: true,
      explanation: {
        en: "Cristiano Ronaldo represents Portugal in international soccer and is one of the country's most famous athletes.",
        es: "Cristiano Ronaldo representa a Portugal en el fútbol internacional y es uno de los atletas más famosos del país.",
        de: "Cristiano Ronaldo vertritt Portugal im internationalen Fußball und ist einer der berühmtesten Athleten des Landes.",
        nl: "Cristiano Ronaldo vertegenwoordigt Portugal in internationaal voetbal en is een van de beroemdste atleten van het land."
      }
    },
    {
      id: 'sport_35',
      question: {
        en: "The Heisman Trophy is awarded in college basketball.",
        es: "El Trofeo Heisman se otorga en baloncesto universitario.",
        de: "Die Heisman Trophy wird im College-Basketball vergeben.",
        nl: "De Heisman Trophy wordt uitgereikt in college basketbal."
      },
      isTrue: false,
      explanation: {
        en: "The Heisman Trophy is awarded to the most outstanding player in college football, not basketball.",
        es: "El Trofeo Heisman se otorga al jugador más destacado en el fútbol americano universitario, no en baloncesto.",
        de: "Die Heisman Trophy wird an den herausragendsten Spieler im College-Football vergeben, nicht im Basketball.",
        nl: "De Heisman Trophy wordt uitgereikt aan de meest uitstekende speler in college football, niet basketbal."
      }
    },
    {
      id: 'sport_36',
      question: {
        en: "Figure skating is a Winter Olympic sport.",
        es: "El patinaje artístico es un deporte olímpico de invierno.",
        de: "Eiskunstlauf ist eine olympische Wintersportart.",
        nl: "Kunstschaatsen is een Olympische wintersport."
      },
      isTrue: true,
      explanation: {
        en: "Figure skating has been part of the Winter Olympics since 1924 and is one of the most popular events.",
        es: "El patinaje artístico ha sido parte de los Juegos Olímpicos de Invierno desde 1924 y es uno de los eventos más populares.",
        de: "Eiskunstlauf ist seit 1924 Teil der Olympischen Winterspiele und eines der beliebtesten Ereignisse.",
        nl: "Kunstschaatsen maakt sinds 1924 deel uit van de Olympische Winterspelen en is een van de populairste evenementen."
      }
    },
    {
      id: 'sport_37',
      question: {
        en: "A hat trick in soccer means scoring three goals in one game.",
        es: "Un hat trick en fútbol significa anotar tres goles en un juego.",
        de: "Ein Hattrick im Fußball bedeutet drei Tore in einem Spiel zu erzielen.",
        nl: "Een hattrick in voetbal betekent drie doelpunten scoren in één wedstrijd."
      },
      isTrue: true,
      explanation: {
        en: "A hat trick occurs when a player scores three goals in a single game. The term is used in several sports.",
        es: "Un hat trick ocurre cuando un jugador anota tres goles en un solo juego. El término se usa en varios deportes.",
        de: "Ein Hattrick liegt vor, wenn ein Spieler drei Tore in einem einzigen Spiel erzielt. Der Begriff wird in mehreren Sportarten verwendet.",
        nl: "Een hattrick vindt plaats wanneer een speler drie doelpunten scoort in één wedstrijd. De term wordt in verschillende sporten gebruikt."
      }
    },
    {
      id: 'sport_38',
      question: {
        en: "The Davis Cup is a team tennis competition.",
        es: "La Copa Davis es una competencia de tenis por equipos.",
        de: "Der Davis Cup ist ein Team-Tenniswettbewerb.",
        nl: "De Davis Cup is een teamtenniscompetitie."
      },
      isTrue: true,
      explanation: {
        en: "The Davis Cup is the premier international team event in men's tennis, with nations competing against each other.",
        es: "La Copa Davis es el evento internacional de equipos más importante en el tenis masculino, con naciones compitiendo entre sí.",
        de: "Der Davis Cup ist das wichtigste internationale Teamturnier im Herrentennis, bei dem Nationen gegeneinander antreten.",
        nl: "De Davis Cup is het belangrijkste internationale teamevenement in herentennis, waarbij naties tegen elkaar strijden."
      }
    },
    {
      id: 'sport_39',
      question: {
        en: "Polo is played on horses.",
        es: "El polo se juega a caballo.",
        de: "Polo wird auf Pferden gespielt.",
        nl: "Polo wordt gespeeld op paarden."
      },
      isTrue: true,
      explanation: {
        en: "Polo is a team sport played on horseback, where players use mallets to hit a ball into the opposing team's goal.",
        es: "El polo es un deporte de equipo jugado a caballo, donde los jugadores usan mazos para golpear una pelota hacia la portería del equipo contrario.",
        de: "Polo ist ein Mannschaftssport auf Pferden, bei dem Spieler Schläger verwenden, um einen Ball ins gegnerische Tor zu schlagen.",
        nl: "Polo is een teamsport gespeeld te paard, waarbij spelers hamers gebruiken om een bal in het doel van het andere team te slaan."
      }
    },
    {
      id: 'sport_40',
      question: {
        en: "Rafael Nadal is known as the 'King of Clay'.",
        es: "Rafael Nadal es conocido como el 'Rey de la Arcilla'.",
        de: "Rafael Nadal ist als 'König des Sands' bekannt.",
        nl: "Rafael Nadal staat bekend als de 'Koning van Gravel'."
      },
      isTrue: true,
      explanation: {
        en: "Rafael Nadal earned the nickname 'King of Clay' due to his exceptional record on clay courts, especially at the French Open.",
        es: "Rafael Nadal ganó el apodo de 'Rey de la Arcilla' debido a su excepcional récord en canchas de arcilla, especialmente en el Abierto de Francia.",
        de: "Rafael Nadal erhielt den Spitznamen 'König des Sands' aufgrund seiner außergewöhnlichen Bilanz auf Sandplätzen, insbesondere bei den French Open.",
        nl: "Rafael Nadal verdiende de bijnaam 'Koning van Gravel' vanwege zijn uitzonderlijke prestaties op gravelbanen, vooral bij Roland Garros."
      }
    },
    {
      id: 'sport_41',
      question: {
        en: "A perfect score in bowling is 300.",
        es: "Una puntuación perfecta en bolos es 300.",
        de: "Ein perfekter Score im Bowling ist 300.",
        nl: "Een perfecte score in bowling is 300."
      },
      isTrue: true,
      explanation: {
        en: "A perfect game in bowling consists of 12 consecutive strikes, resulting in a score of 300.",
        es: "Un juego perfecto en bolos consiste en 12 strikes consecutivos, resultando en una puntuación de 300.",
        de: "Ein perfektes Spiel im Bowling besteht aus 12 aufeinanderfolgenden Strikes, was zu einem Score von 300 führt.",
        nl: "Een perfect spel in bowling bestaat uit 12 opeenvolgende strikes, wat resulteert in een score van 300."
      }
    },
    {
      id: 'sport_42',
      question: {
        en: "Fencing is an Olympic sport.",
        es: "La esgrima es un deporte olímpico.",
        de: "Fechten ist eine olympische Sportart.",
        nl: "Schermen is een Olympische sport."
      },
      isTrue: true,
      explanation: {
        en: "Fencing has been part of the modern Olympic Games since 1896 and is one of the original sports.",
        es: "La esgrima ha sido parte de los Juegos Olímpicos modernos desde 1896 y es uno de los deportes originales.",
        de: "Fechten ist seit 1896 Teil der modernen Olympischen Spiele und eine der ursprünglichen Sportarten.",
        nl: "Schermen maakt sinds 1896 deel uit van de moderne Olympische Spelen en is een van de oorspronkelijke sporten."
      }
    },
    {
      id: 'sport_43',
      question: {
        en: "The Boston Marathon is held in October.",
        es: "El Maratón de Boston se celebra en octubre.",
        de: "Der Boston-Marathon findet im Oktober statt.",
        nl: "De Boston Marathon wordt gehouden in oktober."
      },
      isTrue: false,
      explanation: {
        en: "The Boston Marathon is traditionally held on Patriots' Day, the third Monday of April.",
        es: "El Maratón de Boston se celebra tradicionalmente en el Día de los Patriotas, el tercer lunes de abril.",
        de: "Der Boston-Marathon findet traditionell am Patriots' Day, dem dritten Montag im April, statt.",
        nl: "De Boston Marathon wordt traditioneel gehouden op Patriots' Day, de derde maandag van april."
      }
    },
    {
      id: 'sport_44',
      question: {
        en: "Badminton uses a shuttlecock.",
        es: "El bádminton usa un volante.",
        de: "Badminton verwendet einen Federball.",
        nl: "Badminton gebruikt een shuttle."
      },
      isTrue: true,
      explanation: {
        en: "Badminton is played with a shuttlecock (or birdie), a feathered or plastic projectile, rather than a ball.",
        es: "El bádminton se juega con un volante, un proyectil emplumado o de plástico, en lugar de una pelota.",
        de: "Badminton wird mit einem Federball gespielt, einem gefiederten oder Kunststoff-Projektil, anstelle eines Balls.",
        nl: "Badminton wordt gespeeld met een shuttle, een gevederd of plastic projectiel, in plaats van een bal."
      }
    },
    {
      id: 'sport_45',
      question: {
        en: "The Green Jacket is awarded at the Masters golf tournament.",
        es: "La Chaqueta Verde se otorga en el torneo de golf Masters.",
        de: "Das Green Jacket wird beim Masters-Golfturnier vergeben.",
        nl: "Het Green Jacket wordt uitgereikt bij het Masters golftoernooi."
      },
      isTrue: true,
      explanation: {
        en: "The winner of the Masters Tournament at Augusta National Golf Club receives the iconic Green Jacket.",
        es: "El ganador del Torneo Masters en el Augusta National Golf Club recibe la icónica Chaqueta Verde.",
        de: "Der Gewinner des Masters Tournament im Augusta National Golf Club erhält das ikonische Green Jacket.",
        nl: "De winnaar van het Masters Tournament in Augusta National Golf Club ontvangt het iconische Green Jacket."
      }
    },
    {
      id: 'sport_46',
      question: {
        en: "A regulation NFL football game has four quarters.",
        es: "Un juego de fútbol americano de la NFL tiene cuatro cuartos.",
        de: "Ein reguläres NFL-Footballspiel hat vier Viertel.",
        nl: "Een reguliere NFL footballwedstrijd heeft vier kwartalen."
      },
      isTrue: true,
      explanation: {
        en: "An NFL game consists of four 15-minute quarters, totaling 60 minutes of regulation play.",
        es: "Un juego de la NFL consiste en cuatro cuartos de 15 minutos, totalizando 60 minutos de juego regular.",
        de: "Ein NFL-Spiel besteht aus vier 15-Minuten-Vierteln, insgesamt 60 Minuten regulärer Spielzeit.",
        nl: "Een NFL-wedstrijd bestaat uit vier kwartalen van 15 minuten, in totaal 60 minuten reguliere speeltijd."
      }
    },
    {
      id: 'sport_47',
      question: {
        en: "Lionel Messi is from Argentina.",
        es: "Lionel Messi es de Argentina.",
        de: "Lionel Messi kommt aus Argentinien.",
        nl: "Lionel Messi komt uit Argentinië."
      },
      isTrue: true,
      explanation: {
        en: "Lionel Messi was born in Rosario, Argentina, and represents Argentina in international soccer.",
        es: "Lionel Messi nació en Rosario, Argentina, y representa a Argentina en el fútbol internacional.",
        de: "Lionel Messi wurde in Rosario, Argentinien, geboren und vertritt Argentinien im internationalen Fußball.",
        nl: "Lionel Messi werd geboren in Rosario, Argentinië, en vertegenwoordigt Argentinië in internationaal voetbal."
      }
    },
    {
      id: 'sport_48',
      question: {
        en: "Karate originated in China.",
        es: "El karate se originó en China.",
        de: "Karate stammt aus China.",
        nl: "Karate is ontstaan in China."
      },
      isTrue: false,
      explanation: {
        en: "Karate originated in Okinawa, Japan, though it was influenced by Chinese martial arts.",
        es: "El karate se originó en Okinawa, Japón, aunque fue influenciado por las artes marciales chinas.",
        de: "Karate stammt aus Okinawa, Japan, obwohl es von chinesischen Kampfkünsten beeinflusst wurde.",
        nl: "Karate is ontstaan in Okinawa, Japan, hoewel het werd beïnvloed door Chinese vechtsporten."
      }
    },
    {
      id: 'sport_49',
      question: {
        en: "The Ryder Cup is a golf competition between Europe and the USA.",
        es: "La Copa Ryder es una competencia de golf entre Europa y EE.UU.",
        de: "Der Ryder Cup ist ein Golfwettbewerb zwischen Europa und den USA.",
        nl: "De Ryder Cup is een golfcompetitie tussen Europa en de VS."
      },
      isTrue: true,
      explanation: {
        en: "The Ryder Cup is a biennial men's golf competition between teams from Europe and the United States.",
        es: "La Copa Ryder es una competencia de golf masculino bienal entre equipos de Europa y Estados Unidos.",
        de: "Der Ryder Cup ist ein zweijährlicher Herrengolf-Wettbewerb zwischen Teams aus Europa und den Vereinigten Staaten.",
        nl: "De Ryder Cup is een tweejaarlijkse herrengolfcompetitie tussen teams uit Europa en de Verenigde Staten."
      }
    },
    {
      id: 'sport_50',
      question: {
        en: "A snooker table is smaller than a pool table.",
        es: "Una mesa de snooker es más pequeña que una mesa de billar.",
        de: "Ein Snookertisch ist kleiner als ein Billardtisch.",
        nl: "Een snookertafel is kleiner dan een pooltafel."
      },
      isTrue: false,
      explanation: {
        en: "A snooker table is larger than a standard pool table. Snooker tables are typically 12 feet long, while pool tables are usually 7-9 feet.",
        es: "Una mesa de snooker es más grande que una mesa de billar estándar. Las mesas de snooker suelen tener 12 pies de largo, mientras que las mesas de billar generalmente tienen 7-9 pies.",
        de: "Ein Snookertisch ist größer als ein Standard-Billardtisch. Snookertische sind typischerweise 12 Fuß lang, während Billardtische normalerweise 7-9 Fuß sind.",
        nl: "Een snookertafel is groter dan een standaard pooltafel. Snookertafels zijn doorgaans 12 voet lang, terwijl pooltafels meestal 7-9 voet zijn."
      }
    },
    {
      id: 'sport_51',
      question: {
        en: "Synchronized swimming is now called artistic swimming.",
        es: "La natación sincronizada ahora se llama natación artística.",
        de: "Synchronschwimmen heißt jetzt Artistic Swimming.",
        nl: "Synchroonzwemmen heet nu artistiek zwemmen."
      },
      isTrue: true,
      explanation: {
        en: "In 2017, synchronized swimming was officially renamed artistic swimming by FINA (now World Aquatics).",
        es: "En 2017, la natación sincronizada fue oficialmente renombrada natación artística por FINA (ahora World Aquatics).",
        de: "2017 wurde Synchronschwimmen offiziell von FINA (jetzt World Aquatics) in Artistic Swimming umbenannt.",
        nl: "In 2017 werd synchroonzwemmen officieel hernoemd naar artistiek zwemmen door FINA (nu World Aquatics)."
      }
    },
    {
      id: 'sport_52',
      question: {
        en: "The Indy 500 is a famous car race.",
        es: "Las 500 Millas de Indianápolis es una famosa carrera de autos.",
        de: "Das Indy 500 ist ein berühmtes Autorennen.",
        nl: "De Indy 500 is een beroemde autorace."
      },
      isTrue: true,
      explanation: {
        en: "The Indianapolis 500 is one of the most prestigious automobile races in the world, held annually at the Indianapolis Motor Speedway.",
        es: "Las 500 Millas de Indianápolis es una de las carreras de automóviles más prestigiosas del mundo, celebrada anualmente en el Indianapolis Motor Speedway.",
        de: "Das Indianapolis 500 ist eines der prestigeträchtigsten Autorennen der Welt und findet jährlich auf dem Indianapolis Motor Speedway statt.",
        nl: "De Indianapolis 500 is een van de meest prestigieuze autoraces ter wereld, jaarlijks gehouden op de Indianapolis Motor Speedway."
      }
    },
    {
      id: 'sport_53',
      question: {
        en: "Taekwondo is a Korean martial art.",
        es: "El taekwondo es un arte marcial coreano.",
        de: "Taekwondo ist eine koreanische Kampfkunst.",
        nl: "Taekwondo is een Koreaanse vechtsport."
      },
      isTrue: true,
      explanation: {
        en: "Taekwondo originated in Korea and is characterized by its emphasis on head-height kicks and jumping spinning kicks.",
        es: "El taekwondo se originó en Corea y se caracteriza por su énfasis en patadas a la altura de la cabeza y patadas giratorias con salto.",
        de: "Taekwondo stammt aus Korea und zeichnet sich durch seinen Schwerpunkt auf Kopfhöhen-Kicks und springende Drehkicks aus.",
        nl: "Taekwondo is ontstaan in Korea en wordt gekenmerkt door de nadruk op trappen op hoofdhoogte en springende draaitrappen."
      }
    },
    {
      id: 'sport_54',
      question: {
        en: "A regulation soccer goal is 8 yards wide.",
        es: "Una portería de fútbol reglamentaria tiene 8 yardas de ancho.",
        de: "Ein reguläres Fußballtor ist 8 Yards breit.",
        nl: "Een regulier voetbaldoel is 8 yards breed."
      },
      isTrue: true,
      explanation: {
        en: "A standard soccer goal is 8 yards (7.32 meters) wide and 8 feet (2.44 meters) tall.",
        es: "Una portería de fútbol estándar tiene 8 yardas (7.32 metros) de ancho y 8 pies (2.44 metros) de alto.",
        de: "Ein Standard-Fußballtor ist 8 Yards (7,32 Meter) breit und 8 Fuß (2,44 Meter) hoch.",
        nl: "Een standaard voetbaldoel is 8 yards (7,32 meter) breed en 8 voet (2,44 meter) hoog."
      }
    },
    {
      id: 'sport_55',
      question: {
        en: "The Australian Open is played on clay courts.",
        es: "El Abierto de Australia se juega en canchas de arcilla.",
        de: "Die Australian Open werden auf Sandplätzen gespielt.",
        nl: "De Australian Open wordt gespeeld op gravelbanen."
      },
      isTrue: false,
      explanation: {
        en: "The Australian Open is played on hard courts, not clay. The French Open is the Grand Slam tournament played on clay.",
        es: "El Abierto de Australia se juega en canchas duras, no de arcilla. El Abierto de Francia es el torneo de Grand Slam jugado en arcilla.",
        de: "Die Australian Open werden auf Hartplätzen gespielt, nicht auf Sand. Die French Open sind das Grand-Slam-Turnier auf Sand.",
        nl: "De Australian Open wordt gespeeld op hardcourt, niet gravel. Roland Garros is het Grand Slam-toernooi op gravel."
      }
    },
    {
      id: 'sport_56',
      question: {
        en: "Babe Ruth was a famous baseball player.",
        es: "Babe Ruth fue un famoso jugador de béisbol.",
        de: "Babe Ruth war ein berühmter Baseballspieler.",
        nl: "Babe Ruth was een beroemde honkbalspeler."
      },
      isTrue: true,
      explanation: {
        en: "Babe Ruth is one of the most legendary baseball players in history, known for his home run hitting ability.",
        es: "Babe Ruth es uno de los jugadores de béisbol más legendarios de la historia, conocido por su habilidad para batear jonrones.",
        de: "Babe Ruth ist einer der legendärsten Baseballspieler der Geschichte, bekannt für seine Homerun-Schlagfähigkeit.",
        nl: "Babe Ruth is een van de meest legendarische honkbalspelers in de geschiedenis, bekend om zijn vermogen om homeruns te slaan."
      }
    },
    {
      id: 'sport_57',
      question: {
        en: "The World Series is the championship of Major League Baseball.",
        es: "La Serie Mundial es el campeonato de las Grandes Ligas de Béisbol.",
        de: "Die World Series ist die Meisterschaft der Major League Baseball.",
        nl: "De World Series is het kampioenschap van Major League Baseball."
      },
      isTrue: true,
      explanation: {
        en: "The World Series is the annual championship series of Major League Baseball (MLB) in North America.",
        es: "La Serie Mundial es la serie de campeonato anual de las Grandes Ligas de Béisbol (MLB) en América del Norte.",
        de: "Die World Series ist die jährliche Meisterschaftsserie der Major League Baseball (MLB) in Nordamerika.",
        nl: "De World Series is de jaarlijkse kampioenschapsserie van Major League Baseball (MLB) in Noord-Amerika."
      }
    },
    {
      id: 'sport_58',
      question: {
        en: "Curling is played on ice.",
        es: "El curling se juega sobre hielo.",
        de: "Curling wird auf Eis gespielt.",
        nl: "Curling wordt gespeeld op ijs."
      },
      isTrue: true,
      explanation: {
        en: "Curling is a sport played on ice where players slide stones toward a target area, sweeping the ice to control the stone's path.",
        es: "El curling es un deporte jugado sobre hielo donde los jugadores deslizan piedras hacia un área objetivo, barriendo el hielo para controlar el camino de la piedra.",
        de: "Curling ist ein Sport auf Eis, bei dem Spieler Steine auf eine Zielzone gleiten lassen und das Eis kehren, um den Weg des Steins zu kontrollieren.",
        nl: "Curling is een sport gespeeld op ijs waarbij spelers stenen naar een doelgebied schuiven en het ijs vegen om het pad van de steen te controleren."
      }
    },
    {
      id: 'sport_59',
      question: {
        en: "A grand slam in baseball means hitting a home run with bases loaded.",
        es: "Un grand slam en béisbol significa batear un jonrón con las bases llenas.",
        de: "Ein Grand Slam im Baseball bedeutet einen Homerun mit besetzten Bases zu schlagen.",
        nl: "Een grand slam in honkbal betekent een homerun slaan met geladen honken."
      },
      isTrue: true,
      explanation: {
        en: "In baseball, a grand slam is a home run hit when all three bases are occupied, scoring four runs.",
        es: "En béisbol, un grand slam es un jonrón bateado cuando las tres bases están ocupadas, anotando cuatro carreras.",
        de: "Im Baseball ist ein Grand Slam ein Homerun, der geschlagen wird, wenn alle drei Bases besetzt sind, wodurch vier Runs erzielt werden.",
        nl: "In honkbal is een grand slam een homerun die wordt geslagen wanneer alle drie de honken bezet zijn, waardoor vier runs worden gescoord."
      }
    },
    {
      id: 'sport_60',
      question: {
        en: "The Boston Celtics is an NBA team.",
        es: "Los Boston Celtics son un equipo de la NBA.",
        de: "Die Boston Celtics sind ein NBA-Team.",
        nl: "De Boston Celtics is een NBA-team."
      },
      isTrue: true,
      explanation: {
        en: "The Boston Celtics are one of the most successful franchises in NBA history, with numerous championship titles.",
        es: "Los Boston Celtics son una de las franquicias más exitosas en la historia de la NBA, con numerosos títulos de campeonato.",
        de: "Die Boston Celtics sind eines der erfolgreichsten Franchises in der NBA-Geschichte mit zahlreichen Meistertiteln.",
        nl: "De Boston Celtics is een van de meest succesvolle franchises in NBA-geschiedenis, met talrijke kampioenschapstitels."
      }
    },
    {
      id: 'sport_61',
      question: {
        en: "The Olympic rings represent the five continents.",
        es: "Los anillos olímpicos representan los cinco continentes.",
        de: "Die olympischen Ringe repräsentieren die fünf Kontinente.",
        nl: "De Olympische ringen vertegenwoordigen de vijf continenten."
      },
      isTrue: true,
      explanation: {
        en: "The five Olympic rings symbolize the five inhabited continents: Africa, Americas, Asia, Europe, and Oceania.",
        es: "Los cinco anillos olímpicos simbolizan los cinco continentes habitados: África, América, Asia, Europa y Oceanía.",
        de: "Die fünf olympischen Ringe symbolisieren die fünf bewohnten Kontinente: Afrika, Amerika, Asien, Europa und Ozeanien.",
        nl: "De vijf Olympische ringen symboliseren de vijf bewoonde continenten: Afrika, Amerika, Azië, Europa en Oceanië."
      }
    },
    {
      id: 'sport_62',
      question: {
        en: "Lacrosse originated in North America.",
        es: "El lacrosse se originó en América del Norte.",
        de: "Lacrosse stammt aus Nordamerika.",
        nl: "Lacrosse is ontstaan in Noord-Amerika."
      },
      isTrue: true,
      explanation: {
        en: "Lacrosse originated with Indigenous peoples of North America and is considered one of the oldest team sports in North America.",
        es: "El lacrosse se originó con los pueblos indígenas de América del Norte y se considera uno de los deportes de equipo más antiguos de América del Norte.",
        de: "Lacrosse stammt von den indigenen Völkern Nordamerikas und gilt als eine der ältesten Mannschaftssportarten in Nordamerika.",
        nl: "Lacrosse is ontstaan bij inheemse volkeren van Noord-Amerika en wordt beschouwd als een van de oudste teamsporten in Noord-Amerika."
      }
    },
    {
      id: 'sport_63',
      question: {
        en: "A regulation tennis match is best of 3 sets.",
        es: "Un partido de tenis reglamentario es al mejor de 3 sets.",
        de: "Ein reguläres Tennisspiel ist Best of 3 Sätze.",
        nl: "Een reguliere tenniswedstrijd is best of 3 sets."
      },
      isTrue: false,
      explanation: {
        en: "Women's matches and most men's matches are best of 3 sets, but men's Grand Slam matches are best of 5 sets.",
        es: "Los partidos femeninos y la mayoría de los partidos masculinos son al mejor de 3 sets, pero los partidos masculinos de Grand Slam son al mejor de 5 sets.",
        de: "Damenspiele und die meisten Herrenspiele sind Best of 3 Sätze, aber Herren-Grand-Slam-Spiele sind Best of 5 Sätze.",
        nl: "Dameswedstrijden en de meeste herrenwedstrijden zijn best of 3 sets, maar heren Grand Slam-wedstrijden zijn best of 5 sets."
      }
    },
    {
      id: 'sport_64',
      question: {
        en: "Peyton Manning played in the NFL.",
        es: "Peyton Manning jugó en la NFL.",
        de: "Peyton Manning spielte in der NFL.",
        nl: "Peyton Manning speelde in de NFL."
      },
      isTrue: true,
      explanation: {
        en: "Peyton Manning was a legendary NFL quarterback who played for the Indianapolis Colts and Denver Broncos.",
        es: "Peyton Manning fue un legendario quarterback de la NFL que jugó para los Indianapolis Colts y Denver Broncos.",
        de: "Peyton Manning war ein legendärer NFL-Quarterback, der für die Indianapolis Colts und Denver Broncos spielte.",
        nl: "Peyton Manning was een legendarische NFL-quarterback die speelde voor de Indianapolis Colts en Denver Broncos."
      }
    },
    {
      id: 'sport_65',
      question: {
        en: "Water polo is played in a swimming pool.",
        es: "El waterpolo se juega en una piscina.",
        de: "Wasserball wird in einem Schwimmbecken gespielt.",
        nl: "Waterpolo wordt gespeeld in een zwembad."
      },
      isTrue: true,
      explanation: {
        en: "Water polo is a team sport played in water, typically in a swimming pool, combining elements of swimming, soccer, and basketball.",
        es: "El waterpolo es un deporte de equipo jugado en el agua, típicamente en una piscina, combinando elementos de natación, fútbol y baloncesto.",
        de: "Wasserball ist ein Mannschaftssport im Wasser, typischerweise in einem Schwimmbecken, der Elemente von Schwimmen, Fußball und Basketball kombiniert.",
        nl: "Waterpolo is een teamsport gespeeld in water, meestal in een zwembad, waarbij elementen van zwemmen, voetbal en basketbal worden gecombineerd."
      }
    },
    {
      id: 'sport_66',
      question: {
        en: "The Tour de France winner wears a yellow jersey.",
        es: "El ganador del Tour de Francia viste un jersey amarillo.",
        de: "Der Tour-de-France-Gewinner trägt ein gelbes Trikot.",
        nl: "De winnaar van de Tour de France draagt een gele trui."
      },
      isTrue: true,
      explanation: {
        en: "The yellow jersey (maillot jaune) is worn by the overall leader in the Tour de France cycling race.",
        es: "El jersey amarillo (maillot jaune) es usado por el líder general en la carrera ciclista del Tour de Francia.",
        de: "Das gelbe Trikot (Maillot Jaune) wird vom Gesamtführenden im Tour-de-France-Radrennen getragen.",
        nl: "De gele trui (maillot jaune) wordt gedragen door de algemeen leider in de wielerwedstrijd Tour de France."
      }
    },
    {
      id: 'sport_67',
      question: {
        en: "Archery was removed from the Olympic Games.",
        es: "El tiro con arco fue eliminado de los Juegos Olímpicos.",
        de: "Bogenschießen wurde aus den Olympischen Spielen entfernt.",
        nl: "Boogschieten werd verwijderd uit de Olympische Spelen."
      },
      isTrue: false,
      explanation: {
        en: "Archery was part of the early Olympics, removed for several decades, but has been continuously included since 1972.",
        es: "El tiro con arco fue parte de los primeros Juegos Olímpicos, eliminado durante varias décadas, pero se ha incluido continuamente desde 1972.",
        de: "Bogenschießen war Teil der frühen Olympischen Spiele, wurde für mehrere Jahrzehnte entfernt, ist aber seit 1972 kontinuierlich enthalten.",
        nl: "Boogschieten maakte deel uit van de vroege Olympische Spelen, werd enkele decennia verwijderd, maar is sinds 1972 continu opgenomen."
      }
    },
    {
      id: 'sport_68',
      question: {
        en: "The Daytona 500 is a NASCAR race.",
        es: "Las 500 Millas de Daytona es una carrera de NASCAR.",
        de: "Das Daytona 500 ist ein NASCAR-Rennen.",
        nl: "De Daytona 500 is een NASCAR-race."
      },
      isTrue: true,
      explanation: {
        en: "The Daytona 500 is NASCAR's most prestigious and important race, held annually at Daytona International Speedway.",
        es: "Las 500 Millas de Daytona es la carrera más prestigiosa e importante de NASCAR, celebrada anualmente en el Daytona International Speedway.",
        de: "Das Daytona 500 ist NASCARs prestigeträchtigstes und wichtigstes Rennen, das jährlich auf dem Daytona International Speedway stattfindet.",
        nl: "De Daytona 500 is NASCAR's meest prestigieuze en belangrijke race, jaarlijks gehouden op de Daytona International Speedway."
      }
    },
    {
      id: 'sport_69',
      question: {
        en: "Judo originated in Japan.",
        es: "El judo se originó en Japón.",
        de: "Judo stammt aus Japan.",
        nl: "Judo is ontstaan in Japan."
      },
      isTrue: true,
      explanation: {
        en: "Judo was created in Japan in 1882 by Jigoro Kano as a modern martial art derived from jujitsu.",
        es: "El judo fue creado en Japón en 1882 por Jigoro Kano como un arte marcial moderno derivado del jujitsu.",
        de: "Judo wurde 1882 in Japan von Jigoro Kano als moderne Kampfkunst aus Jujitsu entwickelt.",
        nl: "Judo werd in 1882 in Japan gecreëerd door Jigoro Kano als een moderne vechtsport afgeleid van jujitsu."
      }
    },
    {
      id: 'sport_70',
      question: {
        en: "A perfect game in baseball means no hits allowed.",
        es: "Un juego perfecto en béisbol significa no permitir hits.",
        de: "Ein perfektes Spiel im Baseball bedeutet keine Hits erlaubt.",
        nl: "Een perfect spel in honkbal betekent geen toegestane honkslagen."
      },
      isTrue: true,
      explanation: {
        en: "A perfect game in baseball occurs when a pitcher allows no batters to reach base - no hits, walks, or errors - throughout the entire game.",
        es: "Un juego perfecto en béisbol ocurre cuando un lanzador no permite que ningún bateador llegue a base - sin hits, bases por bolas o errores - durante todo el juego.",
        de: "Ein perfektes Spiel im Baseball tritt auf, wenn ein Pitcher keinem Batter erlaubt, eine Base zu erreichen - keine Hits, Walks oder Fehler - während des gesamten Spiels.",
        nl: "Een perfect spel in honkbal vindt plaats wanneer een werper geen enkele slagman een honk laat bereiken - geen honkslagen, walks of fouten - gedurende de hele wedstrijd."
      }
    },
    {
      id: 'sport_71',
      question: {
        en: "Squash is played with a racket.",
        es: "El squash se juega con una raqueta.",
        de: "Squash wird mit einem Schläger gespielt.",
        nl: "Squash wordt gespeeld met een racket."
      },
      isTrue: true,
      explanation: {
        en: "Squash is played with a racket and a small rubber ball in a four-walled court.",
        es: "El squash se juega con una raqueta y una pequeña pelota de goma en una cancha de cuatro paredes.",
        de: "Squash wird mit einem Schläger und einem kleinen Gummiball in einem viertwandigen Court gespielt.",
        nl: "Squash wordt gespeeld met een racket en een kleine rubberen bal in een baan met vier muren."
      }
    },
    {
      id: 'sport_72',
      question: {
        en: "The Paralympic Games are held in the same year as the Olympics.",
        es: "Los Juegos Paralímpicos se celebran en el mismo año que los Juegos Olímpicos.",
        de: "Die Paralympischen Spiele finden im gleichen Jahr wie die Olympischen Spiele statt.",
        nl: "De Paralympische Spelen worden gehouden in hetzelfde jaar als de Olympische Spelen."
      },
      isTrue: true,
      explanation: {
        en: "The Paralympic Games are held shortly after the Olympic Games in the same host city and year.",
        es: "Los Juegos Paralímpicos se celebran poco después de los Juegos Olímpicos en la misma ciudad anfitriona y año.",
        de: "Die Paralympischen Spiele finden kurz nach den Olympischen Spielen in derselben Gastgeberstadt und im selben Jahr statt.",
        nl: "De Paralympische Spelen worden kort na de Olympische Spelen in dezelfde gaststad en hetzelfde jaar gehouden."
      }
    },
    {
      id: 'sport_73',
      question: {
        en: "Field hockey is played on grass.",
        es: "El hockey sobre césped se juega en césped.",
        de: "Feldhockey wird auf Gras gespielt.",
        nl: "Veldhockey wordt gespeeld op gras."
      },
      isTrue: true,
      explanation: {
        en: "Field hockey can be played on natural grass or artificial turf fields, though modern competitive matches often use turf.",
        es: "El hockey sobre césped se puede jugar en campos de césped natural o césped artificial, aunque los partidos competitivos modernos a menudo usan césped artificial.",
        de: "Feldhockey kann auf Naturrasen oder Kunstrasenfeldern gespielt werden, obwohl moderne Wettkampfspiele oft Kunstrasen verwenden.",
        nl: "Veldhockey kan worden gespeeld op natuurlijk gras of kunstgrasvelden, hoewel moderne competitiewedstrijden vaak kunstgras gebruiken."
      }
    },
    {
      id: 'sport_74',
      question: {
        en: "The NBA was founded in 1946.",
        es: "La NBA fue fundada en 1946.",
        de: "Die NBA wurde 1946 gegründet.",
        nl: "De NBA werd opgericht in 1946."
      },
      isTrue: true,
      explanation: {
        en: "The NBA (National Basketball Association) was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA).",
        es: "La NBA (Asociación Nacional de Baloncesto) fue fundada en la ciudad de Nueva York el 6 de junio de 1946, como la Asociación de Baloncesto de América (BAA).",
        de: "Die NBA (National Basketball Association) wurde am 6. Juni 1946 in New York City als Basketball Association of America (BAA) gegründet.",
        nl: "De NBA (National Basketball Association) werd opgericht in New York City op 6 juni 1946, als de Basketball Association of America (BAA)."
      }
    },
    {
      id: 'sport_75',
      question: {
        en: "Surfing originated in Hawaii.",
        es: "El surf se originó en Hawái.",
        de: "Surfen stammt aus Hawaii.",
        nl: "Surfen is ontstaan in Hawaï."
      },
      isTrue: true,
      explanation: {
        en: "Surfing originated in ancient Polynesia and was an important part of Hawaiian culture before spreading worldwide.",
        es: "El surf se originó en la antigua Polinesia y fue una parte importante de la cultura hawaiana antes de extenderse por todo el mundo.",
        de: "Surfen stammt aus dem alten Polynesien und war ein wichtiger Teil der hawaiianischen Kultur, bevor es sich weltweit verbreitete.",
        nl: "Surfen is ontstaan in het oude Polynesië en was een belangrijk onderdeel van de Hawaïaanse cultuur voordat het zich wereldwijd verspreidde."
      }
    },
    {
      id: 'sport_76',
      question: {
        en: "A handball team has 7 players on the court.",
        es: "Un equipo de balonmano tiene 7 jugadores en la cancha.",
        de: "Ein Handballteam hat 7 Spieler auf dem Feld.",
        nl: "Een handbalteam heeft 7 spelers op het veld."
      },
      isTrue: true,
      explanation: {
        en: "A handball team has 7 players on the court at a time, including one goalkeeper and six field players.",
        es: "Un equipo de balonmano tiene 7 jugadores en la cancha a la vez, incluyendo un portero y seis jugadores de campo.",
        de: "Ein Handballteam hat 7 Spieler gleichzeitig auf dem Feld, einschließlich eines Torwarts und sechs Feldspieler.",
        nl: "Een handbalteam heeft 7 spelers tegelijk op het veld, inclusief één keeper en zes veldspelers."
      }
    },
    {
      id: 'sport_77',
      question: {
        en: "The French Open is played at Wimbledon.",
        es: "El Abierto de Francia se juega en Wimbledon.",
        de: "Die French Open werden in Wimbledon gespielt.",
        nl: "Roland Garros wordt gespeeld in Wimbledon."
      },
      isTrue: false,
      explanation: {
        en: "The French Open is played at Roland-Garros in Paris, France. Wimbledon is a separate Grand Slam tournament held in London, England.",
        es: "El Abierto de Francia se juega en Roland-Garros en París, Francia. Wimbledon es un torneo de Grand Slam separado celebrado en Londres, Inglaterra.",
        de: "Die French Open werden in Roland-Garros in Paris, Frankreich, gespielt. Wimbledon ist ein separates Grand-Slam-Turnier in London, England.",
        nl: "Roland Garros wordt gespeeld in Roland-Garros in Parijs, Frankrijk. Wimbledon is een apart Grand Slam-toernooi in Londen, Engeland."
      }
    },
    {
      id: 'sport_78',
      question: {
        en: "Kobe Bryant won 5 NBA championships.",
        es: "Kobe Bryant ganó 5 campeonatos de la NBA.",
        de: "Kobe Bryant gewann 5 NBA-Meisterschaften.",
        nl: "Kobe Bryant won 5 NBA-kampioenschappen."
      },
      isTrue: true,
      explanation: {
        en: "Kobe Bryant won five NBA championships with the Los Angeles Lakers (2000, 2001, 2002, 2009, 2010).",
        es: "Kobe Bryant ganó cinco campeonatos de la NBA con Los Angeles Lakers (2000, 2001, 2002, 2009, 2010).",
        de: "Kobe Bryant gewann fünf NBA-Meisterschaften mit den Los Angeles Lakers (2000, 2001, 2002, 2009, 2010).",
        nl: "Kobe Bryant won vijf NBA-kampioenschappen met de Los Angeles Lakers (2000, 2001, 2002, 2009, 2010)."
      }
    },
    {
      id: 'sport_79',
      question: {
        en: "Rowing is done in a boat called a shell.",
        es: "El remo se hace en un bote llamado shell.",
        de: "Rudern wird in einem Boot namens Shell durchgeführt.",
        nl: "Roeien wordt gedaan in een boot genaamd shell."
      },
      isTrue: true,
      explanation: {
        en: "In competitive rowing, the boats are called shells. They are long, narrow vessels designed for speed.",
        es: "En el remo competitivo, los botes se llaman shells. Son embarcaciones largas y estrechas diseñadas para la velocidad.",
        de: "Beim Wettkampf-Rudern werden die Boote Shells genannt. Es sind lange, schmale Gefäße, die für Geschwindigkeit konzipiert sind.",
        nl: "In competitief roeien worden de boten shells genoemd. Het zijn lange, smalle vaartuigen ontworpen voor snelheid."
      }
    },
    {
      id: 'sport_80',
      question: {
        en: "Gymnastics includes floor exercises.",
        es: "La gimnasia incluye ejercicios de suelo.",
        de: "Turnen umfasst Bodenübungen.",
        nl: "Gymnastiek omvat vloeroefeningen."
      },
      isTrue: true,
      explanation: {
        en: "Floor exercise is one of the main events in artistic gymnastics, performed on a padded mat.",
        es: "El ejercicio de suelo es uno de los eventos principales en la gimnasia artística, realizado en una colchoneta acolchada.",
        de: "Bodenturnen ist eine der Hauptdisziplinen im Kunstturnen und wird auf einer gepolsterten Matte ausgeführt.",
        nl: "Vloeroefening is een van de belangrijkste onderdelen in artistieke gymnastiek, uitgevoerd op een gevoerde mat."
      }
    },
    {
      id: 'sport_81',
      question: {
        en: "The Ashes is a cricket series between England and Australia.",
        es: "The Ashes es una serie de cricket entre Inglaterra y Australia.",
        de: "The Ashes ist eine Cricket-Serie zwischen England und Australien.",
        nl: "The Ashes is een cricketreeks tussen Engeland en Australië."
      },
      isTrue: true,
      explanation: {
        en: "The Ashes is a biennial cricket Test match series between England and Australia, one of the sport's oldest and most celebrated rivalries.",
        es: "The Ashes es una serie de partidos de prueba de cricket bienal entre Inglaterra y Australia, una de las rivalidades más antiguas y celebradas del deporte.",
        de: "The Ashes ist eine zweijährliche Cricket-Test-Match-Serie zwischen England und Australien, eine der ältesten und gefeiertsten Rivalitäten des Sports.",
        nl: "The Ashes is een tweejaarlijkse cricket-testmatchreeks tussen Engeland en Australië, een van de oudste en meest gevierde rivaliteiten in de sport."
      }
    },
    {
      id: 'sport_82',
      question: {
        en: "Beach volleyball teams have 4 players per side.",
        es: "Los equipos de voleibol de playa tienen 4 jugadores por lado.",
        de: "Beach-Volleyball-Teams haben 4 Spieler pro Seite.",
        nl: "Beachvolleybalteams hebben 4 spelers per kant."
      },
      isTrue: false,
      explanation: {
        en: "Beach volleyball teams have 2 players per side, not 4. Indoor volleyball has 6 players per side.",
        es: "Los equipos de voleibol de playa tienen 2 jugadores por lado, no 4. El voleibol de interior tiene 6 jugadores por lado.",
        de: "Beach-Volleyball-Teams haben 2 Spieler pro Seite, nicht 4. Hallenvolleyball hat 6 Spieler pro Seite.",
        nl: "Beachvolleybalteams hebben 2 spelers per kant, niet 4. Indoor volleybal heeft 6 spelers per kant."
      }
    },
    {
      id: 'sport_83',
      question: {
        en: "MMA stands for Mixed Martial Arts.",
        es: "MMA significa Artes Marciales Mixtas.",
        de: "MMA steht für Mixed Martial Arts.",
        nl: "MMA staat voor Mixed Martial Arts."
      },
      isTrue: true,
      explanation: {
        en: "MMA stands for Mixed Martial Arts, a full-contact combat sport combining techniques from various martial arts and combat sports.",
        es: "MMA significa Artes Marciales Mixtas, un deporte de combate de contacto completo que combina técnicas de varias artes marciales y deportes de combate.",
        de: "MMA steht für Mixed Martial Arts, ein Vollkontakt-Kampfsport, der Techniken aus verschiedenen Kampfkünsten und Kampfsportarten kombiniert.",
        nl: "MMA staat voor Mixed Martial Arts, een full-contact gevechtssport die technieken uit verschillende vechtsporten en vechtsportstijlen combineert."
      }
    },
    {
      id: 'sport_84',
      question: {
        en: "Cycling uses a velodrome for track racing.",
        es: "El ciclismo usa un velódromo para carreras en pista.",
        de: "Beim Radsport wird ein Velodrom für Bahnrennen verwendet.",
        nl: "Wielrennen gebruikt een velodrome voor baanwedstrijden."
      },
      isTrue: true,
      explanation: {
        en: "A velodrome is a banked cycling track specifically designed for track cycling races.",
        es: "Un velódromo es una pista de ciclismo con peralte diseñada específicamente para carreras de ciclismo en pista.",
        de: "Ein Velodrom ist eine überhöhte Radrennbahn, die speziell für Bahnradsportrennen konzipiert ist.",
        nl: "Een velodrome is een schuine wielerbaan speciaal ontworpen voor baanwielrenwedstrijden."
      }
    },
    {
      id: 'sport_85',
      question: {
        en: "Ski jumping is part of the Winter Olympics.",
        es: "El salto de esquí es parte de los Juegos Olímpicos de Invierno.",
        de: "Skispringen ist Teil der Olympischen Winterspiele.",
        nl: "Schansspringen maakt deel uit van de Olympische Winterspelen."
      },
      isTrue: true,
      explanation: {
        en: "Ski jumping has been part of the Winter Olympics since the first Games in 1924.",
        es: "El salto de esquí ha sido parte de los Juegos Olímpicos de Invierno desde los primeros Juegos en 1924.",
        de: "Skispringen ist seit den ersten Spielen 1924 Teil der Olympischen Winterspiele.",
        nl: "Schansspringen maakt sinds de eerste Spelen in 1924 deel uit van de Olympische Winterspelen."
      }
    },
    {
      id: 'sport_86',
      question: {
        en: "Billiards and pool are exactly the same game.",
        es: "El billar y el pool son exactamente el mismo juego.",
        de: "Billard und Pool sind genau das gleiche Spiel.",
        nl: "Biljart en pool zijn precies hetzelfde spel."
      },
      isTrue: false,
      explanation: {
        en: "Billiards and pool are related but different games with different rules, table sizes, and number of balls.",
        es: "El billar y el pool son juegos relacionados pero diferentes con reglas, tamaños de mesa y número de bolas diferentes.",
        de: "Billard und Pool sind verwandte, aber unterschiedliche Spiele mit unterschiedlichen Regeln, Tischgrößen und Anzahl der Kugeln.",
        nl: "Biljart en pool zijn gerelateerde maar verschillende spellen met verschillende regels, tafelgroottes en aantal ballen."
      }
    },
    {
      id: 'sport_87',
      question: {
        en: "Skateboarding became an Olympic sport in 2020.",
        es: "El skateboarding se convirtió en un deporte olímpico en 2020.",
        de: "Skateboarden wurde 2020 zu einer olympischen Sportart.",
        nl: "Skateboarden werd in 2020 een Olympische sport."
      },
      isTrue: true,
      explanation: {
        en: "Skateboarding made its Olympic debut at the 2020 Tokyo Olympics (held in 2021 due to COVID-19).",
        es: "El skateboarding hizo su debut olímpico en los Juegos Olímpicos de Tokio 2020 (celebrados en 2021 debido al COVID-19).",
        de: "Skateboarden feierte sein olympisches Debüt bei den Olympischen Spielen 2020 in Tokio (abgehalten 2021 aufgrund von COVID-19).",
        nl: "Skateboarden maakte zijn Olympische debuut bij de Olympische Spelen van Tokio 2020 (gehouden in 2021 vanwege COVID-19)."
      }
    },
    {
      id: 'sport_88',
      question: {
        en: "A triathlon always has the events in the same order.",
        es: "Un triatlón siempre tiene los eventos en el mismo orden.",
        de: "Ein Triathlon hat die Disziplinen immer in derselben Reihenfolge.",
        nl: "Een triatlon heeft de onderdelen altijd in dezelfde volgorde."
      },
      isTrue: true,
      explanation: {
        en: "A standard triathlon always follows the same order: swimming, cycling, then running.",
        es: "Un triatlón estándar siempre sigue el mismo orden: natación, ciclismo, luego carrera.",
        de: "Ein Standard-Triathlon folgt immer derselben Reihenfolge: Schwimmen, Radfahren, dann Laufen.",
        nl: "Een standaard triatlon volgt altijd dezelfde volgorde: zwemmen, fietsen, dan hardlopen."
      }
    },
    {
      id: 'sport_89',
      question: {
        en: "Roger Federer has won 20 Grand Slam singles titles.",
        es: "Roger Federer ha ganado 20 títulos individuales de Grand Slam.",
        de: "Roger Federer hat 20 Grand-Slam-Einzeltitel gewonnen.",
        nl: "Roger Federer heeft 20 Grand Slam enkelspeltitels gewonnen."
      },
      isTrue: true,
      explanation: {
        en: "Roger Federer won 20 Grand Slam singles titles during his illustrious tennis career.",
        es: "Roger Federer ganó 20 títulos individuales de Grand Slam durante su ilustre carrera tenística.",
        de: "Roger Federer gewann während seiner illustren Tenniskarriere 20 Grand-Slam-Einzeltitel.",
        nl: "Roger Federer won 20 Grand Slam enkelspeltitels tijdens zijn illustere tenniscarrière."
      }
    },
    {
      id: 'sport_90',
      question: {
        en: "Softball uses a larger ball than baseball.",
        es: "El softbol usa una pelota más grande que el béisbol.",
        de: "Softball verwendet einen größeren Ball als Baseball.",
        nl: "Softbal gebruikt een grotere bal dan honkbal."
      },
      isTrue: true,
      explanation: {
        en: "Softballs are larger than baseballs, measuring about 12 inches in circumference compared to baseball's 9 inches.",
        es: "Las pelotas de softbol son más grandes que las de béisbol, midiendo alrededor de 12 pulgadas de circunferencia en comparación con las 9 pulgadas del béisbol.",
        de: "Softballs sind größer als Baseballs und haben einen Umfang von etwa 12 Zoll im Vergleich zu 9 Zoll beim Baseball.",
        nl: "Softballen zijn groter dan honkballen, met een omtrek van ongeveer 12 inch vergeleken met de 9 inch van honkbal."
      }
    },
    {
      id: 'sport_91',
      question: {
        en: "The modern pentathlon includes five different sports.",
        es: "El pentatlón moderno incluye cinco deportes diferentes.",
        de: "Der moderne Fünfkampf umfasst fünf verschiedene Sportarten.",
        nl: "De moderne vijfkamp omvat vijf verschillende sporten."
      },
      isTrue: true,
      explanation: {
        en: "The modern pentathlon consists of five events: fencing, swimming, equestrian show jumping, pistol shooting, and cross-country running.",
        es: "El pentatlón moderno consiste en cinco eventos: esgrima, natación, salto ecuestre, tiro con pistola y carrera a campo traviesa.",
        de: "Der moderne Fünfkampf besteht aus fünf Disziplinen: Fechten, Schwimmen, Springreiten, Pistolenschießen und Geländelauf.",
        nl: "De moderne vijfkamp bestaat uit vijf onderdelen: schermen, zwemmen, paardrijden springconcours, pistoolschieten en veldlopen."
      }
    },
    {
      id: 'sport_92',
      question: {
        en: "Weightlifting is divided into different weight classes.",
        es: "El levantamiento de pesas se divide en diferentes categorías de peso.",
        de: "Gewichtheben ist in verschiedene Gewichtsklassen unterteilt.",
        nl: "Gewichtheffen is verdeeld in verschillende gewichtsklassen."
      },
      isTrue: true,
      explanation: {
        en: "Weightlifting competitions are organized by weight classes to ensure fair competition between athletes of similar body sizes.",
        es: "Las competencias de levantamiento de pesas se organizan por categorías de peso para garantizar una competencia justa entre atletas de tamaños corporales similares.",
        de: "Gewichtheben-Wettbewerbe werden nach Gewichtsklassen organisiert, um einen fairen Wettbewerb zwischen Athleten ähnlicher Körpergröße zu gewährleisten.",
        nl: "Gewichtheffencompetities worden georganiseerd naar gewichtsklassen om eerlijke competitie tussen atleten van vergelijkbare lichaamsgrootte te waarborgen."
      }
    },
    {
      id: 'sport_93',
      question: {
        en: "Pelé played soccer for Brazil.",
        es: "Pelé jugó fútbol para Brasil.",
        de: "Pelé spielte Fußball für Brasilien.",
        nl: "Pelé speelde voetbal voor Brazilië."
      },
      isTrue: true,
      explanation: {
        en: "Pelé is a Brazilian soccer legend who won three World Cups with Brazil and is considered one of the greatest players of all time.",
        es: "Pelé es una leyenda del fútbol brasileño que ganó tres Copas del Mundo con Brasil y es considerado uno de los mejores jugadores de todos los tiempos.",
        de: "Pelé ist eine brasilianische Fußballlegende, die drei Weltmeisterschaften mit Brasilien gewann und als einer der größten Spieler aller Zeiten gilt.",
        nl: "Pelé is een Braziliaanse voetballegende die drie Wereldkampioenschappen won met Brazilië en wordt beschouwd als een van de grootste spelers aller tijden."
      }
    },
    {
      id: 'sport_94',
      question: {
        en: "A rugby ball is oval-shaped.",
        es: "Un balón de rugby tiene forma ovalada.",
        de: "Ein Rugbyball ist oval.",
        nl: "Een rugbybal is ovaalvormig."
      },
      isTrue: true,
      explanation: {
        en: "Rugby balls are oval or elliptical in shape, which allows for better handling and longer passing distances.",
        es: "Los balones de rugby tienen forma ovalada o elíptica, lo que permite un mejor manejo y distancias de pase más largas.",
        de: "Rugbybälle haben eine ovale oder elliptische Form, was ein besseres Handling und größere Passdistanzen ermöglicht.",
        nl: "Rugbyballen zijn ovaal of elliptisch van vorm, wat zorgt voor beter handling en langere pasafstanden."
      }
    },
    {
      id: 'sport_95',
      question: {
        en: "Darts is played by throwing at a circular board.",
        es: "Los dardos se juegan lanzando a un tablero circular.",
        de: "Darts wird gespielt, indem man auf eine runde Scheibe wirft.",
        nl: "Darts wordt gespeeld door te gooien naar een rond bord."
      },
      isTrue: true,
      explanation: {
        en: "Darts is a game where players throw small arrows (darts) at a circular target board divided into numbered sections.",
        es: "Los dardos son un juego donde los jugadores lanzan pequeñas flechas (dardos) a un tablero objetivo circular dividido en secciones numeradas.",
        de: "Darts ist ein Spiel, bei dem Spieler kleine Pfeile (Darts) auf eine runde Zielscheibe werfen, die in nummerierte Abschnitte unterteilt ist.",
        nl: "Darts is een spel waarbij spelers kleine pijltjes (darts) gooien naar een rond doelbord verdeeld in genummerde secties."
      }
    },
    {
      id: 'sport_96',
      question: {
        en: "The World Cup of soccer is held every year.",
        es: "La Copa del Mundo de fútbol se celebra cada año.",
        de: "Die Fußball-Weltmeisterschaft findet jedes Jahr statt.",
        nl: "Het Wereldkampioenschap voetbal wordt elk jaar gehouden."
      },
      isTrue: false,
      explanation: {
        en: "The FIFA World Cup is held every four years, not annually. The next tournament takes place four years after the previous one.",
        es: "La Copa del Mundo de la FIFA se celebra cada cuatro años, no anualmente. El siguiente torneo tiene lugar cuatro años después del anterior.",
        de: "Die FIFA-Weltmeisterschaft findet alle vier Jahre statt, nicht jährlich. Das nächste Turnier findet vier Jahre nach dem vorherigen statt.",
        nl: "Het FIFA Wereldkampioenschap wordt elke vier jaar gehouden, niet jaarlijks. Het volgende toernooi vindt vier jaar na het vorige plaats."
      }
    },
    {
      id: 'sport_97',
      question: {
        en: "Serena and Venus Williams are sisters.",
        es: "Serena y Venus Williams son hermanas.",
        de: "Serena und Venus Williams sind Schwestern.",
        nl: "Serena en Venus Williams zijn zussen."
      },
      isTrue: true,
      explanation: {
        en: "Serena and Venus Williams are sisters and both are legendary professional tennis players who have won multiple Grand Slam titles.",
        es: "Serena y Venus Williams son hermanas y ambas son legendarias jugadoras de tenis profesionales que han ganado múltiples títulos de Grand Slam.",
        de: "Serena und Venus Williams sind Schwestern und beide sind legendäre professionelle Tennisspielerinnen, die mehrere Grand-Slam-Titel gewonnen haben.",
        nl: "Serena en Venus Williams zijn zussen en beiden zijn legendarische professionele tennisspelers die meerdere Grand Slam-titels hebben gewonnen."
      }
    },
    {
      id: 'sport_98',
      question: {
        en: "Speed skating is performed on a short track.",
        es: "El patinaje de velocidad se realiza en una pista corta.",
        de: "Eisschnelllauf wird auf einer kurzen Bahn ausgeführt.",
        nl: "Schaatsen wordt uitgevoerd op een korte baan."
      },
      isTrue: false,
      explanation: {
        en: "Speed skating has two disciplines: long track (on a 400m oval) and short track (on a 111m track). Traditional speed skating is on the long track.",
        es: "El patinaje de velocidad tiene dos disciplinas: pista larga (en un óvalo de 400m) y pista corta (en una pista de 111m). El patinaje de velocidad tradicional es en la pista larga.",
        de: "Eisschnelllauf hat zwei Disziplinen: Langbahn (auf einer 400m-Bahn) und Shorttrack (auf einer 111m-Bahn). Traditionelles Eisschnelllaufen findet auf der Langbahn statt.",
        nl: "Schaatsen heeft twee disciplines: langebaan (op een 400m-baan) en shorttrack (op een 111m-baan). Traditioneel schaatsen is op de lange baan."
      }
    },
    {
      id: 'sport_99',
      question: {
        en: "A cricket Test match can last up to five days.",
        es: "Un partido de cricket Test puede durar hasta cinco días.",
        de: "Ein Cricket-Test-Match kann bis zu fünf Tage dauern.",
        nl: "Een cricket-testmatch kan tot vijf dagen duren."
      },
      isTrue: true,
      explanation: {
        en: "Test cricket matches are played over a maximum of five days, with each day having up to 90 overs (540 balls).",
        es: "Los partidos de cricket Test se juegan durante un máximo de cinco días, con cada día teniendo hasta 90 overs (540 lanzamientos).",
        de: "Test-Cricket-Spiele werden über maximal fünf Tage gespielt, wobei jeder Tag bis zu 90 Overs (540 Bälle) hat.",
        nl: "Test-cricketwedstrijden worden gespeeld over maximaal vijf dagen, waarbij elke dag tot 90 overs (540 ballen) heeft."
      }
    },
    {
      id: 'sport_100',
      question: {
        en: "The World Series is played in baseball.",
        es: "La Serie Mundial se juega en béisbol.",
        de: "Die World Series wird im Baseball gespielt.",
        nl: "De World Series wordt gespeeld in honkbal."
      },
      isTrue: true,
      explanation: {
        en: "The World Series is the championship series of Major League Baseball, determining the league champion each year.",
        es: "La Serie Mundial es la serie de campeonato de las Grandes Ligas de Béisbol, determinando el campeón de la liga cada año.",
        de: "Die World Series ist die Meisterschaftsserie der Major League Baseball, die jedes Jahr den Liga-Champion bestimmt.",
        nl: "De World Series is de kampioenschapsserie van Major League Baseball, die elk jaar de competitiekampioen bepaalt."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['sports'] = sportsQuestions;

  console.log(`Loaded ${sportsQuestions.length} sports true/false questions`);

})();
