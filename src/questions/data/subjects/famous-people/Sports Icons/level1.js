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
      },
      {
        question: {
          en: "Which athlete is known as 'The Rocket'?",
          es: "¿Qué atleta es conocido como 'El Cohete'?",
          de: "Welcher Athlet ist als 'Die Rakete' bekannt?",
          nl: "Welke atleet staat bekend als 'The Rocket'?"
        },
        options: [
          { en: "Roger Clemens", es: "Roger Clemens", de: "Roger Clemens", nl: "Roger Clemens" },
          { en: "LeBron James", es: "LeBron James", de: "LeBron James", nl: "LeBron James" },
          { en: "Cristiano Ronaldo", es: "Cristiano Ronaldo", de: "Cristiano Ronaldo", nl: "Cristiano Ronaldo" },
          { en: "Tom Brady", es: "Tom Brady", de: "Tom Brady", nl: "Tom Brady" }
        ],
        correct: 0,
        explanation: {
          en: "Roger Clemens is known as 'The Rocket' and is one of baseball's greatest pitchers, winning 7 Cy Young Awards during his career.",
          es: "Roger Clemens es conocido como 'El Cohete' y es uno de los mejores lanzadores del béisbol, ganando 7 premios Cy Young durante su carrera.",
          de: "Roger Clemens ist als 'Die Rakete' bekannt und ist einer der größten Pitcher im Baseball, er gewann 7 Cy Young Awards während seiner Karriere.",
          nl: "Roger Clemens staat bekend als 'The Rocket' en is een van de grootste pitchers in het honkbal, hij won 7 Cy Young Awards tijdens zijn carrière."
        }
      },
      {
        question: {
          en: "Which NBA player is known for his 'Skyhook' shot?",
          es: "¿Qué jugador de la NBA es conocido por su tiro 'Skyhook'?",
          de: "Welcher NBA-Spieler ist für seinen 'Skyhook'-Wurf bekannt?",
          nl: "Welke NBA-speler staat bekend om zijn 'Skyhook' schot?"
        },
        options: [
          { en: "Kareem Abdul-Jabbar", es: "Kareem Abdul-Jabbar", de: "Kareem Abdul-Jabbar", nl: "Kareem Abdul-Jabbar" },
          { en: "Wilt Chamberlain", es: "Wilt Chamberlain", de: "Wilt Chamberlain", nl: "Wilt Chamberlain" },
          { en: "Bill Russell", es: "Bill Russell", de: "Bill Russell", nl: "Bill Russell" },
          { en: "Magic Johnson", es: "Magic Johnson", de: "Magic Johnson", nl: "Magic Johnson" }
        ],
        correct: 0,
        explanation: {
          en: "Kareem Abdul-Jabbar's 'Skyhook' was his signature shot and one of the most unstoppable moves in basketball history. He is the NBA's all-time leading scorer.",
          es: "El 'Skyhook' de Kareem Abdul-Jabbar fue su tiro característico y uno de los movimientos más imparables en la historia del baloncesto. Es el máximo anotador de todos los tiempos en la NBA.",
          de: "Kareem Abdul-Jabbars 'Skyhook' war sein Markenzeichen und einer der unaufhaltsamen Züge in der Basketballgeschichte. Er ist der erfolgreichste Scorer aller Zeiten in der NBA.",
          nl: "Kareem Abdul-Jabbar's 'Skyhook' was zijn kenmerkende schot en een van de meest onstuitbare bewegingen in de basketbalgeschiedenis. Hij is de all-time leidende scorer van de NBA."
        }
      },
      {
        question: {
          en: "Which country does tennis star Novak Djokovic represent?",
          es: "¿Qué país representa la estrella del tenis Novak Djokovic?",
          de: "Welches Land vertritt der Tennisstar Novak Djokovic?",
          nl: "Welk land vertegenwoordigt tennisster Novak Djokovic?"
        },
        options: [
          { en: "Serbia", es: "Serbia", de: "Serbien", nl: "Servië" },
          { en: "Croatia", es: "Croacia", de: "Kroatien", nl: "Kroatië" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" }
        ],
        correct: 0,
        explanation: {
          en: "Novak Djokovic represents Serbia and has won 24 Grand Slam singles titles, the most in men's tennis history.",
          es: "Novak Djokovic representa a Serbia y ha ganado 24 títulos individuales de Grand Slam, la mayor cantidad en la historia del tenis masculino.",
          de: "Novak Djokovic vertritt Serbien und hat 24 Grand-Slam-Einzeltitel gewonnen, die meisten in der Geschichte des Herrentennis.",
          nl: "Novak Djokovic vertegenwoordigt Servië en heeft 24 Grand Slam enkelspeltitels gewonnen, de meeste in de geschiedenis van het herentennis."
        }
      },
      {
        question: {
          en: "Which NFL team did Peyton Manning NOT play for?",
          es: "¿Para qué equipo de la NFL NO jugó Peyton Manning?",
          de: "Für welches NFL-Team spielte Peyton Manning NICHT?",
          nl: "Voor welk NFL-team speelde Peyton Manning NIET?"
        },
        options: [
          { en: "New England Patriots", es: "New England Patriots", de: "New England Patriots", nl: "New England Patriots" },
          { en: "Indianapolis Colts", es: "Indianapolis Colts", de: "Indianapolis Colts", nl: "Indianapolis Colts" },
          { en: "Denver Broncos", es: "Denver Broncos", de: "Denver Broncos", nl: "Denver Broncos" },
          { en: "Tennessee Volunteers", es: "Tennessee Volunteers", de: "Tennessee Volunteers", nl: "Tennessee Volunteers" }
        ],
        correct: 0,
        explanation: {
          en: "Peyton Manning played for the Indianapolis Colts and Denver Broncos in the NFL. He never played for the New England Patriots.",
          es: "Peyton Manning jugó para los Indianapolis Colts y Denver Broncos en la NFL. Nunca jugó para los New England Patriots.",
          de: "Peyton Manning spielte für die Indianapolis Colts und Denver Broncos in der NFL. Er spielte nie für die New England Patriots.",
          nl: "Peyton Manning speelde voor de Indianapolis Colts en Denver Broncos in de NFL. Hij speelde nooit voor de New England Patriots."
        }
      },
      {
        question: {
          en: "Which sport is associated with 'The Masters' tournament?",
          es: "¿Con qué deporte está asociado el torneo 'The Masters'?",
          de: "Mit welcher Sportart ist das 'Masters'-Turnier verbunden?",
          nl: "Met welke sport wordt het 'Masters' toernooi geassocieerd?"
        },
        options: [
          { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" },
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Snooker", es: "Snooker", de: "Snooker", nl: "Snooker" },
          { en: "Darts", es: "Dardos", de: "Darts", nl: "Darts" }
        ],
        correct: 0,
        explanation: {
          en: "The Masters is one of golf's four major championships, held annually at Augusta National Golf Club in Georgia.",
          es: "The Masters es uno de los cuatro campeonatos mayores del golf, celebrado anualmente en el Augusta National Golf Club en Georgia.",
          de: "The Masters ist eine der vier Major-Meisterschaften im Golf, die jährlich im Augusta National Golf Club in Georgia stattfindet.",
          nl: "The Masters is een van de vier grote kampioenschappen in het golf, jaarlijks gehouden in de Augusta National Golf Club in Georgia."
        }
      },
      {
        question: {
          en: "Which athlete is known for the phrase 'Float like a butterfly, sting like a bee'?",
          es: "¿Qué atleta es conocido por la frase 'Flota como una mariposa, pica como una abeja'?",
          de: "Welcher Athlet ist für den Spruch 'Schwebe wie ein Schmetterling, stich wie eine Biene' bekannt?",
          nl: "Welke atleet staat bekend om de uitspraak 'Zweef als een vlinder, steek als een bij'?"
        },
        options: [
          { en: "Muhammad Ali", es: "Muhammad Ali", de: "Muhammad Ali", nl: "Muhammad Ali" },
          { en: "Mike Tyson", es: "Mike Tyson", de: "Mike Tyson", nl: "Mike Tyson" },
          { en: "Floyd Mayweather", es: "Floyd Mayweather", de: "Floyd Mayweather", nl: "Floyd Mayweather" },
          { en: "Manny Pacquiao", es: "Manny Pacquiao", de: "Manny Pacquiao", nl: "Manny Pacquiao" }
        ],
        correct: 0,
        explanation: {
          en: "Muhammad Ali famously said 'Float like a butterfly, sting like a bee' to describe his boxing style - quick footwork combined with powerful punches.",
          es: "Muhammad Ali dijo famosamente 'Flota como una mariposa, pica como una abeja' para describir su estilo de boxeo - juego de pies rápido combinado con golpes poderosos.",
          de: "Muhammad Ali sagte berühmt 'Schwebe wie ein Schmetterling, stich wie eine Biene', um seinen Boxstil zu beschreiben - schnelle Beinarbeit kombiniert mit kraftvollen Schlägen.",
          nl: "Muhammad Ali zei beroemd 'Zweef als een vlinder, steek als een bij' om zijn boksstijl te beschrijven - snel voetenwerk gecombineerd met krachtige stoten."
        }
      },
      {
        question: {
          en: "Which sport features a 'hat trick'?",
          es: "¿En qué deporte se presenta un 'hat trick'?",
          de: "In welcher Sportart gibt es einen 'Hat Trick'?",
          nl: "In welke sport komt een 'hat trick' voor?"
        },
        options: [
          { en: "Ice Hockey or Soccer", es: "Hockey sobre hielo o Fútbol", de: "Eishockey oder Fußball", nl: "IJshockey of Voetbal" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "American Football", es: "Fútbol americano", de: "American Football", nl: "American Football" },
          { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" }
        ],
        correct: 0,
        explanation: {
          en: "A 'hat trick' means scoring three goals in a single game, commonly used in ice hockey and soccer.",
          es: "Un 'hat trick' significa anotar tres goles en un solo partido, comúnmente usado en hockey sobre hielo y fútbol.",
          de: "Ein 'Hat Trick' bedeutet drei Tore in einem einzigen Spiel zu erzielen, häufig im Eishockey und Fußball verwendet.",
          nl: "Een 'hat trick' betekent drie doelpunten scoren in één wedstrijd, vaak gebruikt in ijshockey en voetbal."
        }
      },
      {
        question: {
          en: "Which Olympic sport combines skiing and shooting?",
          es: "¿Qué deporte olímpico combina esquí y tiro?",
          de: "Welche olympische Sportart kombiniert Skifahren und Schießen?",
          nl: "Welke Olympische sport combineert skiën en schieten?"
        },
        options: [
          { en: "Biathlon", es: "Biatlón", de: "Biathlon", nl: "Biatlon" },
          { en: "Modern Pentathlon", es: "Pentatlón moderno", de: "Moderner Fünfkampf", nl: "Moderne vijfkamp" },
          { en: "Alpine Skiing", es: "Esquí alpino", de: "Alpinski", nl: "Alpineskiën" },
          { en: "Cross-country Skiing", es: "Esquí de fondo", de: "Skilanglauf", nl: "Langlaufen" }
        ],
        correct: 0,
        explanation: {
          en: "Biathlon is an Olympic winter sport that combines cross-country skiing and rifle shooting.",
          es: "El biatlón es un deporte olímpico de invierno que combina esquí de fondo y tiro con rifle.",
          de: "Biathlon ist eine olympische Wintersportart, die Skilanglauf und Schießen kombiniert.",
          nl: "Biatlon is een Olympische wintersport die langlaufen en geweer schieten combineert."
        }
      },
      {
        question: {
          en: "Which athlete is known as 'The Special One'?",
          es: "¿Qué atleta es conocido como 'The Special One'?",
          de: "Welcher Athlet ist als 'The Special One' bekannt?",
          nl: "Welke atleet staat bekend als 'The Special One'?"
        },
        options: [
          { en: "José Mourinho", es: "José Mourinho", de: "José Mourinho", nl: "José Mourinho" },
          { en: "Pep Guardiola", es: "Pep Guardiola", de: "Pep Guardiola", nl: "Pep Guardiola" },
          { en: "Jürgen Klopp", es: "Jürgen Klopp", de: "Jürgen Klopp", nl: "Jürgen Klopp" },
          { en: "Carlo Ancelotti", es: "Carlo Ancelotti", de: "Carlo Ancelotti", nl: "Carlo Ancelotti" }
        ],
        correct: 0,
        explanation: {
          en: "José Mourinho, the famous football manager, famously called himself 'The Special One' when he arrived at Chelsea in 2004.",
          es: "José Mourinho, el famoso entrenador de fútbol, se llamó a sí mismo 'The Special One' cuando llegó al Chelsea en 2004.",
          de: "José Mourinho, der berühmte Fußballmanager, nannte sich selbst 'The Special One', als er 2004 zu Chelsea kam.",
          nl: "José Mourinho, de beroemde voetbalmanager, noemde zichzelf 'The Special One' toen hij in 2004 bij Chelsea aankwam."
        }
      },
      {
        question: {
          en: "Which female athlete is nicknamed 'The Flying Finn'?",
          es: "¿Qué atleta femenina es apodada 'La Finlandesa Voladora'?",
          de: "Welche weibliche Athletin wird 'Die fliegende Finnin' genannt?",
          nl: "Welke vrouwelijke atleet wordt 'De Vliegende Finse' genoemd?"
        },
        options: [
          { en: "Mika Häkkinen", es: "Mika Häkkinen", de: "Mika Häkkinen", nl: "Mika Häkkinen" },
          { en: "Kimi Räikkönen", es: "Kimi Räikkönen", de: "Kimi Räikkönen", nl: "Kimi Räikkönen" },
          { en: "Valtteri Bottas", es: "Valtteri Bottas", de: "Valtteri Bottas", nl: "Valtteri Bottas" },
          { en: "Paavo Nurmi", es: "Paavo Nurmi", de: "Paavo Nurmi", nl: "Paavo Nurmi" }
        ],
        correct: 3,
        explanation: {
          en: "Paavo Nurmi, the legendary Finnish runner, was known as 'The Flying Finn' and won 9 Olympic gold medals in the 1920s.",
          es: "Paavo Nurmi, el legendario corredor finlandés, era conocido como 'El Finlandés Volador' y ganó 9 medallas de oro olímpicas en los años 1920.",
          de: "Paavo Nurmi, der legendäre finnische Läufer, war als 'Der fliegende Finne' bekannt und gewann in den 1920er Jahren 9 olympische Goldmedaillen.",
          nl: "Paavo Nurmi, de legendarische Finse hardloper, stond bekend als 'De Vliegende Fin' en won 9 olympische gouden medailles in de jaren 1920."
        }
      },
      {
        question: {
          en: "Which sport uses the term 'love' for zero points?",
          es: "¿Qué deporte usa el término 'love' para cero puntos?",
          de: "Welche Sportart verwendet den Begriff 'Love' für null Punkte?",
          nl: "Welke sport gebruikt de term 'love' voor nul punten?"
        },
        options: [
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Badminton", es: "Bádminton", de: "Badminton", nl: "Badminton" },
          { en: "Table Tennis", es: "Tenis de mesa", de: "Tischtennis", nl: "Tafeltennis" },
          { en: "Squash", es: "Squash", de: "Squash", nl: "Squash" }
        ],
        correct: 0,
        explanation: {
          en: "In tennis, 'love' means zero points. The term possibly comes from the French word 'l'oeuf' (egg), referring to the shape of zero.",
          es: "En tenis, 'love' significa cero puntos. El término posiblemente viene de la palabra francesa 'l'oeuf' (huevo), refiriéndose a la forma del cero.",
          de: "Im Tennis bedeutet 'Love' null Punkte. Der Begriff stammt möglicherweise vom französischen Wort 'l'oeuf' (Ei), das auf die Form der Null verweist.",
          nl: "In tennis betekent 'love' nul punten. De term komt mogelijk van het Franse woord 'l'oeuf' (ei), verwijzend naar de vorm van nul."
        }
      },
      {
        question: {
          en: "Which basketball team has won the most NBA championships?",
          es: "¿Qué equipo de baloncesto ha ganado más campeonatos de la NBA?",
          de: "Welches Basketballteam hat die meisten NBA-Meisterschaften gewonnen?",
          nl: "Welk basketbalteam heeft de meeste NBA-kampioenschappen gewonnen?"
        },
        options: [
          { en: "Boston Celtics", es: "Boston Celtics", de: "Boston Celtics", nl: "Boston Celtics" },
          { en: "Los Angeles Lakers", es: "Los Angeles Lakers", de: "Los Angeles Lakers", nl: "Los Angeles Lakers" },
          { en: "Chicago Bulls", es: "Chicago Bulls", de: "Chicago Bulls", nl: "Chicago Bulls" },
          { en: "Golden State Warriors", es: "Golden State Warriors", de: "Golden State Warriors", nl: "Golden State Warriors" }
        ],
        correct: 0,
        explanation: {
          en: "The Boston Celtics have won 17 NBA championships, the most in NBA history, with their most recent title in 2008.",
          es: "Los Boston Celtics han ganado 17 campeonatos de la NBA, la mayor cantidad en la historia de la NBA, con su título más reciente en 2008.",
          de: "Die Boston Celtics haben 17 NBA-Meisterschaften gewonnen, die meisten in der NBA-Geschichte, mit ihrem jüngsten Titel im Jahr 2008.",
          nl: "De Boston Celtics hebben 17 NBA-kampioenschappen gewonnen, de meeste in de NBA-geschiedenis, met hun meest recente titel in 2008."
        }
      },
      {
        question: {
          en: "Which athlete holds the record for most Olympic medals of all time?",
          es: "¿Qué atleta tiene el récord de más medallas olímpicas de todos los tiempos?",
          de: "Welcher Athlet hält den Rekord für die meisten olympischen Medaillen aller Zeiten?",
          nl: "Welke atleet heeft het record voor de meeste olympische medailles aller tijden?"
        },
        options: [
          { en: "Michael Phelps", es: "Michael Phelps", de: "Michael Phelps", nl: "Michael Phelps" },
          { en: "Usain Bolt", es: "Usain Bolt", de: "Usain Bolt", nl: "Usain Bolt" },
          { en: "Carl Lewis", es: "Carl Lewis", de: "Carl Lewis", nl: "Carl Lewis" },
          { en: "Simone Biles", es: "Simone Biles", de: "Simone Biles", nl: "Simone Biles" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Phelps won 28 Olympic medals (23 gold, 3 silver, 2 bronze) in swimming, making him the most decorated Olympian in history.",
          es: "Michael Phelps ganó 28 medallas olímpicas (23 de oro, 3 de plata, 2 de bronce) en natación, convirtiéndolo en el olímpico más condecorado de la historia.",
          de: "Michael Phelps gewann 28 olympische Medaillen (23 Gold, 3 Silber, 2 Bronze) im Schwimmen und ist damit der erfolgreichste Olympionike der Geschichte.",
          nl: "Michael Phelps won 28 olympische medailles (23 goud, 3 zilver, 2 brons) in het zwemmen, waardoor hij de meest gedecoreerde Olympiër in de geschiedenis is."
        }
      },
      {
        question: {
          en: "Which country has hosted the Summer Olympics the most times?",
          es: "¿Qué país ha organizado los Juegos Olímpicos de Verano más veces?",
          de: "Welches Land hat die Olympischen Sommerspiele am häufigsten ausgerichtet?",
          nl: "Welk land heeft de Olympische Zomerspelen het vaakst georganiseerd?"
        },
        options: [
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" }
        ],
        correct: 0,
        explanation: {
          en: "The United States has hosted the Summer Olympics four times (St. Louis 1904, Los Angeles 1932 and 1984, Atlanta 1996) and will host again in Los Angeles 2028.",
          es: "Estados Unidos ha organizado los Juegos Olímpicos de Verano cuatro veces (St. Louis 1904, Los Ángeles 1932 y 1984, Atlanta 1996) y los organizará nuevamente en Los Ángeles 2028.",
          de: "Die Vereinigten Staaten haben die Olympischen Sommerspiele viermal ausgerichtet (St. Louis 1904, Los Angeles 1932 und 1984, Atlanta 1996) und werden sie 2028 erneut in Los Angeles ausrichten.",
          nl: "De Verenigde Staten hebben de Olympische Zomerspelen vier keer georganiseerd (St. Louis 1904, Los Angeles 1932 en 1984, Atlanta 1996) en zullen ze in 2028 opnieuw in Los Angeles organiseren."
        }
      },
      {
        question: {
          en: "Which sport is Lionel Messi famous for?",
          es: "¿Por qué deporte es famoso Lionel Messi?",
          de: "Für welche Sportart ist Lionel Messi berühmt?",
          nl: "Voor welke sport is Lionel Messi beroemd?"
        },
        options: [
          { en: "Soccer/Football", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" }
        ],
        correct: 0,
        explanation: {
          en: "Lionel Messi is one of the greatest soccer players of all time, winning multiple Ballon d'Or awards and leading Argentina to World Cup victory in 2022.",
          es: "Lionel Messi es uno de los mejores futbolistas de todos los tiempos, ganando múltiples premios Balón de Oro y llevando a Argentina a la victoria en la Copa del Mundo en 2022.",
          de: "Lionel Messi ist einer der größten Fußballspieler aller Zeiten, er gewann mehrere Ballon d'Or-Auszeichnungen und führte Argentinien 2022 zum WM-Sieg.",
          nl: "Lionel Messi is een van de grootste voetballers aller tijden, hij won meerdere Ballon d'Or prijzen en leidde Argentinië naar de wereldbekerzege in 2022."
        }
      },
      {
        question: {
          en: "Which sport features a 'slam dunk'?",
          es: "¿Qué deporte presenta un 'mate'?",
          de: "In welcher Sportart gibt es einen 'Slam Dunk'?",
          nl: "In welke sport komt een 'slam dunk' voor?"
        },
        options: [
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Volleyball", es: "Voleibol", de: "Volleyball", nl: "Volleybal" },
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Handball", es: "Balonmano", de: "Handball", nl: "Handbal" }
        ],
        correct: 0,
        explanation: {
          en: "A 'slam dunk' is a basketball move where a player jumps and forcefully puts the ball through the hoop.",
          es: "Un 'mate' es un movimiento de baloncesto donde un jugador salta y mete el balón con fuerza a través del aro.",
          de: "Ein 'Slam Dunk' ist ein Basketball-Zug, bei dem ein Spieler springt und den Ball kraftvoll durch den Korb wirft.",
          nl: "Een 'slam dunk' is een basketbalbeweging waarbij een speler springt en de bal krachtig door de ring gooit."
        }
      },
      {
        question: {
          en: "Which athlete is known as 'King James'?",
          es: "¿Qué atleta es conocido como 'King James'?",
          de: "Welcher Athlet ist als 'King James' bekannt?",
          nl: "Welke atleet staat bekend als 'King James'?"
        },
        options: [
          { en: "LeBron James", es: "LeBron James", de: "LeBron James", nl: "LeBron James" },
          { en: "James Harden", es: "James Harden", de: "James Harden", nl: "James Harden" },
          { en: "Kevin Durant", es: "Kevin Durant", de: "Kevin Durant", nl: "Kevin Durant" },
          { en: "Stephen Curry", es: "Stephen Curry", de: "Stephen Curry", nl: "Stephen Curry" }
        ],
        correct: 0,
        explanation: {
          en: "LeBron James is known as 'King James' and is considered one of the greatest basketball players of all time, winning 4 NBA championships.",
          es: "LeBron James es conocido como 'King James' y es considerado uno de los mejores jugadores de baloncesto de todos los tiempos, ganando 4 campeonatos de la NBA.",
          de: "LeBron James ist als 'King James' bekannt und gilt als einer der größten Basketballspieler aller Zeiten, er gewann 4 NBA-Meisterschaften.",
          nl: "LeBron James staat bekend als 'King James' en wordt beschouwd als een van de grootste basketbalspelers aller tijden, hij won 4 NBA-kampioenschappen."
        }
      },
      {
        question: {
          en: "Which sport uses a puck instead of a ball?",
          es: "¿Qué deporte usa un disco en lugar de una pelota?",
          de: "Welche Sportart verwendet einen Puck anstelle eines Balls?",
          nl: "Welke sport gebruikt een puck in plaats van een bal?"
        },
        options: [
          { en: "Ice Hockey", es: "Hockey sobre hielo", de: "Eishockey", nl: "IJshockey" },
          { en: "Field Hockey", es: "Hockey sobre césped", de: "Feldhockey", nl: "Veldhockey" },
          { en: "Lacrosse", es: "Lacrosse", de: "Lacrosse", nl: "Lacrosse" },
          { en: "Polo", es: "Polo", de: "Polo", nl: "Polo" }
        ],
        correct: 0,
        explanation: {
          en: "Ice hockey is played with a puck, a flat rubber disc, instead of a ball.",
          es: "El hockey sobre hielo se juega con un disco, un disco plano de goma, en lugar de una pelota.",
          de: "Eishockey wird mit einem Puck gespielt, einer flachen Gummischeibe, anstelle eines Balls.",
          nl: "IJshockey wordt gespeeld met een puck, een platte rubberen schijf, in plaats van een bal."
        }
      },
      {
        question: {
          en: "Which country won the first FIFA World Cup in 1930?",
          es: "¿Qué país ganó la primera Copa Mundial de la FIFA en 1930?",
          de: "Welches Land gewann die erste FIFA-Weltmeisterschaft 1930?",
          nl: "Welk land won de eerste FIFA Wereldbeker in 1930?"
        },
        options: [
          { en: "Uruguay", es: "Uruguay", de: "Uruguay", nl: "Uruguay" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
        ],
        correct: 0,
        explanation: {
          en: "Uruguay won the first FIFA World Cup in 1930, which was hosted in Uruguay. They defeated Argentina 4-2 in the final.",
          es: "Uruguay ganó la primera Copa Mundial de la FIFA en 1930, que se celebró en Uruguay. Derrotaron a Argentina 4-2 en la final.",
          de: "Uruguay gewann die erste FIFA-Weltmeisterschaft 1930, die in Uruguay ausgetragen wurde. Sie besiegten Argentinien im Finale 4:2.",
          nl: "Uruguay won de eerste FIFA Wereldbeker in 1930, die in Uruguay werd gehouden. Ze versloegen Argentinië met 4-2 in de finale."
        }
      },
      {
        question: {
          en: "Which sport did Wayne Gretzky dominate?",
          es: "¿En qué deporte dominó Wayne Gretzky?",
          de: "Welche Sportart dominierte Wayne Gretzky?",
          nl: "Welke sport domineerde Wayne Gretzky?"
        },
        options: [
          { en: "Ice Hockey", es: "Hockey sobre hielo", de: "Eishockey", nl: "IJshockey" },
          { en: "Field Hockey", es: "Hockey sobre césped", de: "Feldhockey", nl: "Veldhockey" },
          { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" }
        ],
        correct: 0,
        explanation: {
          en: "Wayne Gretzky, known as 'The Great One', is considered the greatest ice hockey player of all time, holding numerous NHL records.",
          es: "Wayne Gretzky, conocido como 'El Grande', es considerado el mejor jugador de hockey sobre hielo de todos los tiempos, con numerosos récords de la NHL.",
          de: "Wayne Gretzky, bekannt als 'The Great One', gilt als der größte Eishockeyspieler aller Zeiten und hält zahlreiche NHL-Rekorde.",
          nl: "Wayne Gretzky, bekend als 'The Great One', wordt beschouwd als de grootste ijshockeyer aller tijden en heeft talloze NHL-records."
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