// Sports Icons Quiz - Level 1: Famous Athletes Beginner
(function() {
  const level1 = {
    name: {
      en: "Famous Sports Icons - Beginner",
      es: "Iconos del Deporte Famosos - Principiante",
      de: "Berühmte Sport-Ikonen - Anfänger",
      nl: "Beroemde Sporticonen - Beginner"
    },
    questions: [
      {
        question: {
          en: "Which footballer is known as 'The King of Football'?",
          es: "¿Qué futbolista es conocido como 'El Rey del Fútbol'?",
          de: "Welcher Fußballspieler ist als 'Der König des Fußballs' bekannt?",
          nl: "Welke voetballer staat bekend als 'De Koning van het Voetbal'?"
        },
        options: [
          { en: "Pelé", es: "Pelé", de: "Pelé", nl: "Pelé" },
          { en: "Diego Maradona", es: "Diego Maradona", de: "Diego Maradona", nl: "Diego Maradona" },
          { en: "Lionel Messi", es: "Lionel Messi", de: "Lionel Messi", nl: "Lionel Messi" },
          { en: "Cristiano Ronaldo", es: "Cristiano Ronaldo", de: "Cristiano Ronaldo", nl: "Cristiano Ronaldo" }
        ],
        correct: 0,
        explanation: {
          en: "Pelé, the Brazilian football legend, is widely known as 'The King of Football'. He won three World Cups and scored over 1,000 career goals.",
          es: "Pelé, la leyenda del fútbol brasileño, es ampliamente conocido como 'El Rey del Fútbol'. Ganó tres Copas del Mundo y marcó más de 1,000 goles en su carrera.",
          de: "Pelé, die brasilianische Fußballlegende, ist weithin als 'Der König des Fußballs' bekannt. Er gewann drei Weltmeisterschaften und erzielte über 1.000 Karrieretore.",
          nl: "Pelé, de Braziliaanse voetballegende, staat algemeen bekend als 'De Koning van het Voetbal'. Hij won drie Wereldkampioenschappen en scoorde meer dan 1.000 doelpunten in zijn carrière."
        }
      },
      {
        question: {
          en: "Which basketball player is known as 'His Airness'?",
          es: "¿Qué jugador de baloncesto es conocido como 'Su Alteza Aérea'?",
          de: "Welcher Basketballspieler ist als 'His Airness' bekannt?",
          nl: "Welke basketbalspeler staat bekend als 'His Airness'?"
        },
        options: [
          { en: "Michael Jordan", es: "Michael Jordan", de: "Michael Jordan", nl: "Michael Jordan" },
          { en: "LeBron James", es: "LeBron James", de: "LeBron James", nl: "LeBron James" },
          { en: "Kobe Bryant", es: "Kobe Bryant", de: "Kobe Bryant", nl: "Kobe Bryant" },
          { en: "Magic Johnson", es: "Magic Johnson", de: "Magic Johnson", nl: "Magic Johnson" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Jordan earned the nickname 'His Airness' for his incredible jumping ability and spectacular dunks. He won six NBA championships with the Chicago Bulls.",
          es: "Michael Jordan se ganó el apodo 'Su Alteza Aérea' por su increíble capacidad de salto y clavadas espectaculares. Ganó seis campeonatos de la NBA con los Chicago Bulls.",
          de: "Michael Jordan erhielt den Spitznamen 'His Airness' für seine unglaubliche Sprungkraft und spektakulären Dunks. Er gewann sechs NBA-Meisterschaften mit den Chicago Bulls.",
          nl: "Michael Jordan verdiende de bijnaam 'His Airness' vanwege zijn ongelooflijke springvermogen en spectaculaire dunks. Hij won zes NBA-kampioenschappen met de Chicago Bulls."
        }
      },
      {
        question: {
          en: "Which tennis player has won the most Grand Slam titles in men's tennis?",
          es: "¿Qué tenista ha ganado más títulos de Grand Slam en tenis masculino?",
          de: "Welcher Tennisspieler hat die meisten Grand Slam-Titel im Herrentennis gewonnen?",
          nl: "Welke tennisspeler heeft de meeste Grand Slam-titels gewonnen in het herentennis?"
        },
        options: [
          { en: "Novak Djokovic", es: "Novak Djokovic", de: "Novak Djokovic", nl: "Novak Djokovic" },
          { en: "Rafael Nadal", es: "Rafael Nadal", de: "Rafael Nadal", nl: "Rafael Nadal" },
          { en: "Roger Federer", es: "Roger Federer", de: "Roger Federer", nl: "Roger Federer" },
          { en: "Pete Sampras", es: "Pete Sampras", de: "Pete Sampras", nl: "Pete Sampras" }
        ],
        correct: 0,
        explanation: {
          en: "Novak Djokovic currently holds the record for most men's Grand Slam singles titles with 24 titles, surpassing Rafael Nadal and Roger Federer.",
          es: "Novak Djokovic actualmente tiene el récord de más títulos individuales de Grand Slam masculinos con 24 títulos, superando a Rafael Nadal y Roger Federer.",
          de: "Novak Djokovic hält derzeit den Rekord für die meisten Herren-Grand Slam-Einzeltitel mit 24 Titeln und übertrifft damit Rafael Nadal und Roger Federer.",
          nl: "Novak Djokovic heeft momenteel het record voor de meeste heren Grand Slam enkelspeltitels met 24 titels, waarmee hij Rafael Nadal en Roger Federer overtreft."
        }
      },
      {
        question: {
          en: "Which swimmer is known as the most decorated Olympian of all time?",
          es: "¿Qué nadador es conocido como el olímpico más condecorado de todos los tiempos?",
          de: "Welcher Schwimmer ist als der erfolgreichste Olympionike aller Zeiten bekannt?",
          nl: "Welke zwemmer staat bekend als de meest gedecoreerde Olympiër aller tijden?"
        },
        options: [
          { en: "Michael Phelps", es: "Michael Phelps", de: "Michael Phelps", nl: "Michael Phelps" },
          { en: "Mark Spitz", es: "Mark Spitz", de: "Mark Spitz", nl: "Mark Spitz" },
          { en: "Ian Thorpe", es: "Ian Thorpe", de: "Ian Thorpe", nl: "Ian Thorpe" },
          { en: "Adam Peaty", es: "Adam Peaty", de: "Adam Peaty", nl: "Adam Peaty" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Phelps holds the record for most Olympic medals with 28 total medals (23 gold, 3 silver, 2 bronze) across four Olympic Games.",
          es: "Michael Phelps tiene el récord de más medallas olímpicas con 28 medallas totales (23 de oro, 3 de plata, 2 de bronce) en cuatro Juegos Olímpicos.",
          de: "Michael Phelps hält den Rekord für die meisten olympischen Medaillen mit insgesamt 28 Medaillen (23 Gold, 3 Silber, 2 Bronze) bei vier Olympischen Spielen.",
          nl: "Michael Phelps heeft het record voor de meeste Olympische medailles met 28 totale medailles (23 goud, 3 zilver, 2 brons) over vier Olympische Spelen."
        }
      },
      {
        question: {
          en: "Which golfer is known as 'The Golden Bear'?",
          es: "¿Qué golfista es conocido como 'El Oso Dorado'?",
          de: "Welcher Golfer ist als 'The Golden Bear' bekannt?",
          nl: "Welke golfer staat bekend als 'The Golden Bear'?"
        },
        options: [
          { en: "Jack Nicklaus", es: "Jack Nicklaus", de: "Jack Nicklaus", nl: "Jack Nicklaus" },
          { en: "Tiger Woods", es: "Tiger Woods", de: "Tiger Woods", nl: "Tiger Woods" },
          { en: "Arnold Palmer", es: "Arnold Palmer", de: "Arnold Palmer", nl: "Arnold Palmer" },
          { en: "Gary Player", es: "Gary Player", de: "Gary Player", nl: "Gary Player" }
        ],
        correct: 0,
        explanation: {
          en: "Jack Nicklaus is nicknamed 'The Golden Bear' and holds the record for most major championships with 18 titles in professional golf.",
          es: "Jack Nicklaus es apodado 'El Oso Dorado' y tiene el récord de más campeonatos mayores con 18 títulos en golf profesional.",
          de: "Jack Nicklaus wird 'The Golden Bear' genannt und hält den Rekord für die meisten Major-Meisterschaften mit 18 Titeln im Profigolf.",
          nl: "Jack Nicklaus wordt 'The Golden Bear' genoemd en heeft het record voor de meeste major-kampioenschappen met 18 titels in het professionele golf."
        }
      },
      {
        question: {
          en: "Which sprinter is known as 'Lightning Bolt'?",
          es: "¿Qué velocista es conocido como 'Rayo'?",
          de: "Welcher Sprinter ist als 'Lightning Bolt' bekannt?",
          nl: "Welke sprinter staat bekend als 'Lightning Bolt'?"
        },
        options: [
          { en: "Usain Bolt", es: "Usain Bolt", de: "Usain Bolt", nl: "Usain Bolt" },
          { en: "Carl Lewis", es: "Carl Lewis", de: "Carl Lewis", nl: "Carl Lewis" },
          { en: "Maurice Greene", es: "Maurice Greene", de: "Maurice Greene", nl: "Maurice Greene" },
          { en: "Justin Gatlin", es: "Justin Gatlin", de: "Justin Gatlin", nl: "Justin Gatlin" }
        ],
        correct: 0,
        explanation: {
          en: "Usain Bolt from Jamaica is known as 'Lightning Bolt' and holds world records in 100m (9.58s) and 200m (19.19s). He won 8 Olympic gold medals.",
          es: "Usain Bolt de Jamaica es conocido como 'Rayo' y tiene récords mundiales en 100m (9.58s) y 200m (19.19s). Ganó 8 medallas de oro olímpicas.",
          de: "Usain Bolt aus Jamaika ist als 'Lightning Bolt' bekannt und hält Weltrekorde über 100m (9,58s) und 200m (19,19s). Er gewann 8 olympische Goldmedaillen.",
          nl: "Usain Bolt uit Jamaica staat bekend als 'Lightning Bolt' en heeft wereldrecords op de 100m (9,58s) en 200m (19,19s). Hij won 8 Olympische gouden medailles."
        }
      },
      {
        question: {
          en: "Which boxer was known as 'The Greatest'?",
          es: "¿Qué boxeador era conocido como 'El Más Grande'?",
          de: "Welcher Boxer war als 'The Greatest' bekannt?",
          nl: "Welke bokser stond bekend als 'The Greatest'?"
        },
        options: [
          { en: "Muhammad Ali", es: "Muhammad Ali", de: "Muhammad Ali", nl: "Muhammad Ali" },
          { en: "Mike Tyson", es: "Mike Tyson", de: "Mike Tyson", nl: "Mike Tyson" },
          { en: "Sugar Ray Robinson", es: "Sugar Ray Robinson", de: "Sugar Ray Robinson", nl: "Sugar Ray Robinson" },
          { en: "Joe Frazier", es: "Joe Frazier", de: "Joe Frazier", nl: "Joe Frazier" }
        ],
        correct: 0,
        explanation: {
          en: "Muhammad Ali proclaimed himself 'The Greatest' and is widely considered one of the best heavyweight boxers ever, winning the title three times.",
          es: "Muhammad Ali se proclamó 'El Más Grande' y es ampliamente considerado uno de los mejores boxeadores de peso pesado de todos los tiempos, ganando el título tres veces.",
          de: "Muhammad Ali bezeichnete sich selbst als 'The Greatest' und gilt weithin als einer der besten Schwergewichtsboxer aller Zeiten, der den Titel dreimal gewann.",
          nl: "Muhammad Ali noemde zichzelf 'The Greatest' en wordt algemeen beschouwd als een van de beste zwaargewicht boksers ooit, die de titel drie keer won."
        }
      },
      {
        question: {
          en: "Which Formula 1 driver has won the most World Championships?",
          es: "¿Qué piloto de Fórmula 1 ha ganado más Campeonatos Mundiales?",
          de: "Welcher Formel-1-Fahrer hat die meisten Weltmeisterschaften gewonnen?",
          nl: "Welke Formule 1-coureur heeft de meeste Wereldkampioenschappen gewonnen?"
        },
        options: [
          { en: "Lewis Hamilton and Michael Schumacher (7 each)", es: "Lewis Hamilton y Michael Schumacher (7 cada uno)", de: "Lewis Hamilton und Michael Schumacher (je 7)", nl: "Lewis Hamilton en Michael Schumacher (7 elk)" },
          { en: "Ayrton Senna", es: "Ayrton Senna", de: "Ayrton Senna", nl: "Ayrton Senna" },
          { en: "Sebastian Vettel", es: "Sebastian Vettel", de: "Sebastian Vettel", nl: "Sebastian Vettel" },
          { en: "Max Verstappen", es: "Max Verstappen", de: "Max Verstappen", nl: "Max Verstappen" }
        ],
        correct: 0,
        explanation: {
          en: "Both Lewis Hamilton and Michael Schumacher share the record for most F1 World Championships with 7 titles each.",
          es: "Tanto Lewis Hamilton como Michael Schumacher comparten el récord de más Campeonatos Mundiales de F1 con 7 títulos cada uno.",
          de: "Sowohl Lewis Hamilton als auch Michael Schumacher teilen sich den Rekord für die meisten F1-Weltmeisterschaften mit jeweils 7 Titeln.",
          nl: "Zowel Lewis Hamilton als Michael Schumacher delen het record voor de meeste F1-Wereldkampioenschappen met elk 7 titels."
        }
      },
      {
        question: {
          en: "Which female tennis player has won the most Grand Slam singles titles?",
          es: "¿Qué tenista femenina ha ganado más títulos individuales de Grand Slam?",
          de: "Welche Tennisspielerin hat die meisten Grand Slam-Einzeltitel gewonnen?",
          nl: "Welke vrouwelijke tennisspeler heeft de meeste Grand Slam enkelspeltitels gewonnen?"
        },
        options: [
          { en: "Serena Williams", es: "Serena Williams", de: "Serena Williams", nl: "Serena Williams" },
          { en: "Steffi Graf", es: "Steffi Graf", de: "Steffi Graf", nl: "Steffi Graf" },
          { en: "Martina Navratilova", es: "Martina Navratilova", de: "Martina Navratilova", nl: "Martina Navratilova" },
          { en: "Chris Evert", es: "Chris Evert", de: "Chris Evert", nl: "Chris Evert" }
        ],
        correct: 0,
        explanation: {
          en: "Serena Williams holds the Open Era record for most Grand Slam women's singles titles with 23, one short of Margaret Court's all-time record of 24.",
          es: "Serena Williams tiene el récord de la Era Abierta de más títulos individuales femeninos de Grand Slam con 23, uno menos que el récord histórico de Margaret Court de 24.",
          de: "Serena Williams hält den Open Era-Rekord für die meisten Grand Slam-Damen-Einzeltitel mit 23, einen weniger als Margaret Courts Allzeit-Rekord von 24.",
          nl: "Serena Williams heeft het Open Era-record voor de meeste Grand Slam dames enkelspeltitels met 23, één minder dan Margaret Court's all-time record van 24."
        }
      },
      {
        question: {
          en: "Which footballer has scored the most goals in FIFA World Cup history?",
          es: "¿Qué futbolista ha marcado más goles en la historia de la Copa Mundial de la FIFA?",
          de: "Welcher Fußballspieler hat die meisten Tore in der Geschichte der FIFA-Weltmeisterschaft erzielt?",
          nl: "Welke voetballer heeft de meeste doelpunten gescoord in de geschiedenis van het FIFA Wereldkampioenschap?"
        },
        options: [
          { en: "Miroslav Klose", es: "Miroslav Klose", de: "Miroslav Klose", nl: "Miroslav Klose" },
          { en: "Ronaldo Nazário", es: "Ronaldo Nazário", de: "Ronaldo Nazário", nl: "Ronaldo Nazário" },
          { en: "Gerd Müller", es: "Gerd Müller", de: "Gerd Müller", nl: "Gerd Müller" },
          { en: "Pelé", es: "Pelé", de: "Pelé", nl: "Pelé" }
        ],
        correct: 0,
        explanation: {
          en: "Miroslav Klose from Germany holds the record for most World Cup goals with 16 goals scored across four tournaments (2002-2014).",
          es: "Miroslav Klose de Alemania tiene el récord de más goles en Copas del Mundo con 16 goles marcados en cuatro torneos (2002-2014).",
          de: "Miroslav Klose aus Deutschland hält den Rekord für die meisten WM-Tore mit 16 Toren in vier Turnieren (2002-2014).",
          nl: "Miroslav Klose uit Duitsland heeft het record voor de meeste WK-doelpunten met 16 doelpunten gescoord over vier toernooien (2002-2014)."
        }
      },
      {
        question: {
          en: "Which gymnast is famous for being the first to score a perfect 10 in Olympic gymnastics?",
          es: "¿Qué gimnasta es famosa por ser la primera en obtener un 10 perfecto en gimnasia olímpica?",
          de: "Welche Turnerin ist berühmt dafür, die erste zu sein, die eine perfekte 10 im olympischen Turnen erzielte?",
          nl: "Welke gymnast is beroemd omdat zij de eerste was die een perfecte 10 scoorde in de Olympische gymnastiek?"
        },
        options: [
          { en: "Nadia Comăneci", es: "Nadia Comăneci", de: "Nadia Comăneci", nl: "Nadia Comăneci" },
          { en: "Mary Lou Retton", es: "Mary Lou Retton", de: "Mary Lou Retton", nl: "Mary Lou Retton" },
          { en: "Shannon Miller", es: "Shannon Miller", de: "Shannon Miller", nl: "Shannon Miller" },
          { en: "Nastia Liukin", es: "Nastia Liukin", de: "Nastia Liukin", nl: "Nastia Liukin" }
        ],
        correct: 0,
        explanation: {
          en: "Nadia Comăneci from Romania scored the first perfect 10 in Olympic gymnastics history at the 1976 Montreal Olympics on the uneven bars at age 14.",
          es: "Nadia Comăneci de Rumania obtuvo el primer 10 perfecto en la historia de la gimnasia olímpica en los Juegos Olímpicos de Montreal 1976 en las barras asimétricas a los 14 años.",
          de: "Nadia Comăneci aus Rumänien erzielte die erste perfekte 10 in der Geschichte des olympischen Turnens bei den Olympischen Spielen 1976 in Montreal am Stufenbarren im Alter von 14 Jahren.",
          nl: "Nadia Comăneci uit Roemenië scoorde de eerste perfecte 10 in de geschiedenis van de Olympische gymnastiek bij de Olympische Spelen van Montreal 1976 op de ongelijke liggers op 14-jarige leeftijd."
        }
      },
      {
        question: {
          en: "Which baseball player is known as 'The Bambino'?",
          es: "¿Qué jugador de béisbol es conocido como 'El Bambino'?",
          de: "Welcher Baseballspieler ist als 'The Bambino' bekannt?",
          nl: "Welke honkbalspeler staat bekend als 'The Bambino'?"
        },
        options: [
          { en: "Babe Ruth", es: "Babe Ruth", de: "Babe Ruth", nl: "Babe Ruth" },
          { en: "Lou Gehrig", es: "Lou Gehrig", de: "Lou Gehrig", nl: "Lou Gehrig" },
          { en: "Ted Williams", es: "Ted Williams", de: "Ted Williams", nl: "Ted Williams" },
          { en: "Mickey Mantle", es: "Mickey Mantle", de: "Mickey Mantle", nl: "Mickey Mantle" }
        ],
        correct: 0,
        explanation: {
          en: "Babe Ruth, nicknamed 'The Bambino' and 'The Sultan of Swat', revolutionized baseball and held the home run record for 39 years with 714 home runs.",
          es: "Babe Ruth, apodado 'El Bambino' y 'El Sultán del Batazo', revolucionó el béisbol y mantuvo el récord de jonrones durante 39 años con 714 jonrones.",
          de: "Babe Ruth, genannt 'The Bambino' und 'The Sultan of Swat', revolutionierte Baseball und hielt 39 Jahre lang den Homerun-Rekord mit 714 Homeruns.",
          nl: "Babe Ruth, bijgenaamd 'The Bambino' en 'The Sultan of Swat', revolutioneerde honkbal en hield het homerun-record 39 jaar vast met 714 homeruns."
        }
      },
      {
        question: {
          en: "Which hockey player is known as 'The Great One'?",
          es: "¿Qué jugador de hockey es conocido como 'El Grande'?",
          de: "Welcher Hockeyspieler ist als 'The Great One' bekannt?",
          nl: "Welke hockeyspeler staat bekend als 'The Great One'?"
        },
        options: [
          { en: "Wayne Gretzky", es: "Wayne Gretzky", de: "Wayne Gretzky", nl: "Wayne Gretzky" },
          { en: "Mario Lemieux", es: "Mario Lemieux", de: "Mario Lemieux", nl: "Mario Lemieux" },
          { en: "Gordie Howe", es: "Gordie Howe", de: "Gordie Howe", nl: "Gordie Howe" },
          { en: "Mark Messier", es: "Mark Messier", de: "Mark Messier", nl: "Mark Messier" }
        ],
        correct: 0,
        explanation: {
          en: "Wayne Gretzky is universally known as 'The Great One' and holds numerous NHL records, including most career goals (894) and assists (1,963).",
          es: "Wayne Gretzky es universalmente conocido como 'El Grande' y tiene numerosos récords de la NHL, incluyendo más goles (894) y asistencias (1,963) en su carrera.",
          de: "Wayne Gretzky ist allgemein als 'The Great One' bekannt und hält zahlreiche NHL-Rekorde, einschließlich der meisten Karrieretore (894) und Assists (1.963).",
          nl: "Wayne Gretzky staat universeel bekend als 'The Great One' en heeft talrijke NHL-records, waaronder de meeste carrière doelpunten (894) en assists (1.963)."
        }
      },
      {
        question: {
          en: "Which cyclist won the Tour de France seven consecutive times?",
          es: "¿Qué ciclista ganó el Tour de Francia siete veces consecutivas?",
          de: "Welcher Radfahrer gewann die Tour de France siebenmal in Folge?",
          nl: "Welke wielrenner won de Tour de France zeven keer op rij?"
        },
        options: [
          { en: "Lance Armstrong", es: "Lance Armstrong", de: "Lance Armstrong", nl: "Lance Armstrong" },
          { en: "Miguel Indurain", es: "Miguel Induráin", de: "Miguel Induráin", nl: "Miguel Induráin" },
          { en: "Eddy Merckx", es: "Eddy Merckx", de: "Eddy Merckx", nl: "Eddy Merckx" },
          { en: "Bernard Hinault", es: "Bernard Hinault", de: "Bernard Hinault", nl: "Bernard Hinault" }
        ],
        correct: 0,
        explanation: {
          en: "Lance Armstrong won seven consecutive Tours de France (1999-2005), though these titles were later stripped due to doping violations.",
          es: "Lance Armstrong ganó siete Tours de Francia consecutivos (1999-2005), aunque estos títulos fueron posteriormente retirados debido a violaciones de dopaje.",
          de: "Lance Armstrong gewann sieben aufeinanderfolgende Tours de France (1999-2005), obwohl diese Titel später wegen Dopingverstößen aberkannt wurden.",
          nl: "Lance Armstrong won zeven opeenvolgende Tours de France (1999-2005), hoewel deze titels later werden weggenomen vanwege dopingschendingen."
        }
      },
      {
        question: {
          en: "Which track and field athlete is known as 'Flo-Jo'?",
          es: "¿Qué atleta de pista y campo es conocida como 'Flo-Jo'?",
          de: "Welche Leichtathletin ist als 'Flo-Jo' bekannt?",
          nl: "Welke atletiek atleet staat bekend als 'Flo-Jo'?"
        },
        options: [
          { en: "Florence Griffith-Joyner", es: "Florence Griffith-Joyner", de: "Florence Griffith-Joyner", nl: "Florence Griffith-Joyner" },
          { en: "Jackie Joyner-Kersee", es: "Jackie Joyner-Kersee", de: "Jackie Joyner-Kersee", nl: "Jackie Joyner-Kersee" },
          { en: "Wilma Rudolph", es: "Wilma Rudolph", de: "Wilma Rudolph", nl: "Wilma Rudolph" },
          { en: "Gail Devers", es: "Gail Devers", de: "Gail Devers", nl: "Gail Devers" }
        ],
        correct: 0,
        explanation: {
          en: "Florence Griffith-Joyner, known as 'Flo-Jo', still holds the world records in women's 100m (10.49s) and 200m (21.34s) set in 1988.",
          es: "Florence Griffith-Joyner, conocida como 'Flo-Jo', aún mantiene los récords mundiales femeninos en 100m (10.49s) y 200m (21.34s) establecidos en 1988.",
          de: "Florence Griffith-Joyner, bekannt als 'Flo-Jo', hält immer noch die Weltrekorde der Frauen über 100m (10,49s) und 200m (21,34s) aus dem Jahr 1988.",
          nl: "Florence Griffith-Joyner, bekend als 'Flo-Jo', heeft nog steeds de wereldrecords bij de vrouwen op de 100m (10,49s) en 200m (21,34s) uit 1988."
        }
      },
      {
        question: {
          en: "Which American football player is known as 'Joe Cool'?",
          es: "¿Qué jugador de fútbol americano es conocido como 'Joe Cool'?",
          de: "Welcher American Football-Spieler ist als 'Joe Cool' bekannt?",
          nl: "Welke American football speler staat bekend als 'Joe Cool'?"
        },
        options: [
          { en: "Joe Montana", es: "Joe Montana", de: "Joe Montana", nl: "Joe Montana" },
          { en: "Joe Namath", es: "Joe Namath", de: "Joe Namath", nl: "Joe Namath" },
          { en: "Johnny Unitas", es: "Johnny Unitas", de: "Johnny Unitas", nl: "Johnny Unitas" },
          { en: "Brett Favre", es: "Brett Favre", de: "Brett Favre", nl: "Brett Favre" }
        ],
        correct: 0,
        explanation: {
          en: "Joe Montana earned the nickname 'Joe Cool' for his calm demeanor under pressure. He won four Super Bowls with the San Francisco 49ers.",
          es: "Joe Montana se ganó el apodo 'Joe Cool' por su comportamiento calmado bajo presión. Ganó cuatro Super Bowls con los San Francisco 49ers.",
          de: "Joe Montana erhielt den Spitznamen 'Joe Cool' für sein ruhiges Verhalten unter Druck. Er gewann vier Super Bowls mit den San Francisco 49ers.",
          nl: "Joe Montana verdiende de bijnaam 'Joe Cool' vanwege zijn kalme houding onder druk. Hij won vier Super Bowls met de San Francisco 49ers."
        }
      },
      {
        question: {
          en: "Which martial artist and actor was known as 'The Dragon'?",
          es: "¿Qué artista marcial y actor era conocido como 'El Dragón'?",
          de: "Welcher Kampfkünstler und Schauspieler war als 'The Dragon' bekannt?",
          nl: "Welke vechtsporter en acteur stond bekend als 'The Dragon'?"
        },
        options: [
          { en: "Bruce Lee", es: "Bruce Lee", de: "Bruce Lee", nl: "Bruce Lee" },
          { en: "Jackie Chan", es: "Jackie Chan", de: "Jackie Chan", nl: "Jackie Chan" },
          { en: "Jet Li", es: "Jet Li", de: "Jet Li", nl: "Jet Li" },
          { en: "Chuck Norris", es: "Chuck Norris", de: "Chuck Norris", nl: "Chuck Norris" }
        ],
        correct: 0,
        explanation: {
          en: "Bruce Lee was known as 'The Dragon' and revolutionized martial arts in cinema. He founded Jeet Kune Do and became a global icon.",
          es: "Bruce Lee era conocido como 'El Dragón' y revolucionó las artes marciales en el cine. Fundó el Jeet Kune Do y se convirtió en un ícono global.",
          de: "Bruce Lee war als 'The Dragon' bekannt und revolutionierte die Kampfkünste im Kino. Er gründete Jeet Kune Do und wurde zu einer globalen Ikone.",
          nl: "Bruce Lee stond bekend als 'The Dragon' en revolutioneerde vechtsporten in de cinema. Hij stichtte Jeet Kune Do en werd een wereldwijd icoon."
        }
      },
      {
        question: {
          en: "Which volleyball player is considered one of the greatest beach volleyball players ever?",
          es: "¿Qué jugador de voleibol es considerado uno de los mejores jugadores de voleibol de playa de todos los tiempos?",
          de: "Welcher Volleyballspieler gilt als einer der größten Beachvolleyballspieler aller Zeiten?",
          nl: "Welke volleybalspeler wordt beschouwd als een van de grootste beachvolleybalspelers ooit?"
        },
        options: [
          { en: "Kerri Walsh Jennings", es: "Kerri Walsh Jennings", de: "Kerri Walsh Jennings", nl: "Kerri Walsh Jennings" },
          { en: "Misty May-Treanor", es: "Misty May-Treanor", de: "Misty May-Treanor", nl: "Misty May-Treanor" },
          { en: "April Ross", es: "April Ross", de: "April Ross", nl: "April Ross" },
          { en: "Laura Ludwig", es: "Laura Ludwig", de: "Laura Ludwig", nl: "Laura Ludwig" }
        ],
        correct: 0,
        explanation: {
          en: "Kerri Walsh Jennings won three Olympic gold medals in beach volleyball (2004, 2008, 2012) and is considered one of the greatest players in the sport.",
          es: "Kerri Walsh Jennings ganó tres medallas de oro olímpicas en voleibol de playa (2004, 2008, 2012) y es considerada una de las mejores jugadoras del deporte.",
          de: "Kerri Walsh Jennings gewann drei olympische Goldmedaillen im Beachvolleyball (2004, 2008, 2012) und gilt als eine der größten Spielerinnen des Sports.",
          nl: "Kerri Walsh Jennings won drie Olympische gouden medailles in beachvolleybal (2004, 2008, 2012) en wordt beschouwd als een van de grootste speelsters in de sport."
        }
      },
      {
        question: {
          en: "Which soccer player is known for the 'Hand of God' goal?",
          es: "¿Qué futbolista es conocido por el gol de la 'Mano de Dios'?",
          de: "Welcher Fußballspieler ist für das 'Hand Gottes'-Tor bekannt?",
          nl: "Welke voetballer staat bekend om het 'Hand van God' doelpunt?"
        },
        options: [
          { en: "Diego Maradona", es: "Diego Maradona", de: "Diego Maradona", nl: "Diego Maradona" },
          { en: "Pelé", es: "Pelé", de: "Pelé", nl: "Pelé" },
          { en: "Johan Cruyff", es: "Johan Cruyff", de: "Johan Cruyff", nl: "Johan Cruijff" },
          { en: "Franz Beckenbauer", es: "Franz Beckenbauer", de: "Franz Beckenbauer", nl: "Franz Beckenbauer" }
        ],
        correct: 0,
        explanation: {
          en: "Diego Maradona scored the controversial 'Hand of God' goal against England in the 1986 World Cup quarterfinal, using his hand to punch the ball into the net.",
          es: "Diego Maradona marcó el controvertido gol de la 'Mano de Dios' contra Inglaterra en los cuartos de final de la Copa del Mundo de 1986, usando su mano para empujar la pelota a la red.",
          de: "Diego Maradona erzielte das umstrittene 'Hand Gottes'-Tor gegen England im Viertelfinale der WM 1986, indem er den Ball mit der Hand ins Netz schlug.",
          nl: "Diego Maradona scoorde het controversiële 'Hand van God' doelpunt tegen Engeland in de kwartfinale van het WK 1986, waarbij hij zijn hand gebruikte om de bal in het net te slaan."
        }
      },
      {
        question: {
          en: "Which sport is Serena Williams famous for?",
          es: "¿Por qué deporte es famosa Serena Williams?",
          de: "Für welche Sportart ist Serena Williams berühmt?",
          nl: "Voor welke sport is Serena Williams beroemd?"
        },
        options: [
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" }
        ],
        correct: 0,
        explanation: {
          en: "Serena Williams is one of the greatest tennis players of all time, winning 23 Grand Slam singles titles and dominating women's tennis for over two decades.",
          es: "Serena Williams es una de las mejores tenistas de todos los tiempos, ganando 23 títulos de Grand Slam individuales y dominando el tenis femenino durante más de dos décadas.",
          de: "Serena Williams ist eine der größten Tennisspielerinnen aller Zeiten, sie gewann 23 Grand-Slam-Einzeltitel und dominierte das Damen-Tennis über zwei Jahrzehnte.",
          nl: "Serena Williams is een van de grootste tennissers aller tijden, ze won 23 Grand Slam enkelspeltitels en domineerde het damestennis gedurende meer dan twee decennia."
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