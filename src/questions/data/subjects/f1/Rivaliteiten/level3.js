const level3 = (function() {
  const questions = [
    {
      question: {
        en: "In which year did the Senna-Prost rivalry reach its peak with both Suzuka collisions?",
        es: "¿En qué año alcanzó su punto máximo la rivalidad Senna-Prost con ambas colisiones en Suzuka?",
        de: "In welchem Jahr erreichte die Senna-Prost-Rivalität ihren Höhepunkt mit beiden Suzuka-Kollisionen?",
        nl: "In welk jaar bereikte de Senna-Prost rivaliteit zijn hoogtepunt met beide Suzuka-botsingen?"
      },
      options: [
        "1989-1990",
        "1987-1988",
        "1991-1992",
        "1988-1989"
      ],
      correct: 0,
      explanation: {
        en: "Senna and Prost collided at Suzuka in both 1989 and 1990, with each collision deciding the championship. In 1989, Prost became champion; in 1990, Senna won the title.",
        es: "Senna y Prost chocaron en Suzuka tanto en 1989 como en 1990, con cada colisión decidiendo el campeonato. En 1989, Prost fue campeón; en 1990, Senna ganó el título.",
        de: "Senna und Prost kollidierten 1989 und 1990 in Suzuka, wobei jede Kollision die Meisterschaft entschied. 1989 wurde Prost Meister; 1990 gewann Senna den Titel.",
        nl: "Senna en Prost botsten in Suzuka in zowel 1989 als 1990, waarbij elke botsing het kampioenschap besliste. In 1989 werd Prost kampioen; in 1990 won Senna de titel."
      }
    },
    {
      question: {
        en: "Which race in 1997 saw Schumacher attempt to crash into Villeneuve to win the championship?",
        es: "¿En qué carrera de 1997 intentó Schumacher chocar contra Villeneuve para ganar el campeonato?",
        de: "Bei welchem Rennen 1997 versuchte Schumacher, in Villeneuve zu crashen, um die Meisterschaft zu gewinnen?",
        nl: "Bij welke race in 1997 probeerde Schumacher Villeneuve te raken om het kampioenschap te winnen?"
      },
      options: [
        "European GP (Jerez)",
        "Japanese GP (Suzuka)",
        "Australian GP (Melbourne)",
        "Belgian GP (Spa)"
      ],
      correct: 0,
      explanation: {
        en: "At the 1997 European GP in Jerez, Schumacher deliberately turned into Villeneuve's car in an attempt to take them both out. Villeneuve continued and won the championship, while Schumacher was later stripped of his points.",
        es: "En el GP de Europa de 1997 en Jerez, Schumacher giró deliberadamente hacia el auto de Villeneuve para sacarlos a ambos. Villeneuve continuó y ganó el campeonato, mientras que Schumacher fue despojado de sus puntos.",
        de: "Beim Europäischen GP 1997 in Jerez lenkte Schumacher absichtlich in Villeneuves Auto, um beide auszuschalten. Villeneuve fuhr weiter und gewann die Meisterschaft, während Schumacher später seine Punkte aberkannt wurden.",
        nl: "Bij de Europese GP van 1997 in Jerez stuurde Schumacher opzettelijk in op Villeneuves auto om beiden uit te schakelen. Villeneuve reed door en won het kampioenschap, terwijl Schumacher later zijn punten werden afgenomen."
      }
    },
    {
      question: {
        en: "At which 2016 race did Hamilton and Rosberg have their most controversial collision?",
        es: "¿En qué carrera de 2016 tuvieron Hamilton y Rosberg su colisión más controvertida?",
        de: "Bei welchem Rennen 2016 hatten Hamilton und Rosberg ihre umstrittenste Kollision?",
        nl: "Bij welke race in 2016 hadden Hamilton en Rosberg hun meest controversiële botsing?"
      },
      options: [
        "Spanish GP (Barcelona)",
        "Austrian GP (Spielberg)",
        "Belgian GP (Spa)",
        "Japanese GP (Suzuka)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2016 Spanish GP, Hamilton and Rosberg collided on lap 1, taking both Mercedes out of the race. The incident happened when Hamilton, on the grass, returned to the track and hit Rosberg.",
        es: "En el GP de España 2016, Hamilton y Rosberg chocaron en la vuelta 1, sacando a ambos Mercedes de la carrera. El incidente ocurrió cuando Hamilton, en la hierba, volvió a la pista y golpeó a Rosberg.",
        de: "Beim Spanien-GP 2016 kollidierten Hamilton und Rosberg in Runde 1 und schieden beide Mercedes aus. Der Vorfall ereignete sich, als Hamilton vom Gras auf die Strecke zurückkehrte und Rosberg traf.",
        nl: "Bij de Spaanse GP 2016 botsten Hamilton en Rosberg in ronde 1, waardoor beide Mercedes uit de race gingen. Het incident gebeurde toen Hamilton, op het gras, terugkeerde naar de baan en Rosberg raakte."
      }
    },
    {
      question: {
        en: "Which 1976 race saw Hunt and Lauda battle in torrential rain, with Lauda retiring due to safety concerns?",
        es: "¿Qué carrera de 1976 vio a Hunt y Lauda luchar bajo lluvia torrencial, con Lauda retirándose por preocupaciones de seguridad?",
        de: "Bei welchem Rennen 1976 kämpften Hunt und Lauda bei sintflutartigem Regen, wobei Lauda aus Sicherheitsgründen aufgab?",
        nl: "Bij welke race in 1976 vochten Hunt en Lauda in stromende regen, waarbij Lauda zich terugtrok vanwege veiligheidszorgen?"
      },
      options: [
        "Japanese GP (Fuji)",
        "Italian GP (Monza)",
        "Canadian GP (Montreal)",
        "British GP (Brands Hatch)"
      ],
      correct: 0,
      explanation: {
        en: "At the rain-soaked 1976 Japanese GP at Fuji, Lauda withdrew after 2 laps citing dangerous conditions. Hunt finished 3rd, securing the championship by 1 point. Lauda's decision was influenced by his near-fatal crash earlier that season.",
        es: "En el lluvioso GP de Japón 1976 en Fuji, Lauda se retiró después de 2 vueltas citando condiciones peligrosas. Hunt terminó 3º, asegurando el campeonato por 1 punto. La decisión de Lauda fue influenciada por su casi fatal accidente anterior esa temporada.",
        de: "Beim regennassen Japan-GP 1976 in Fuji zog sich Lauda nach 2 Runden wegen gefährlicher Bedingungen zurück. Hunt wurde Dritter und sicherte sich die Meisterschaft mit 1 Punkt Vorsprung. Laudas Entscheidung wurde von seinem fast tödlichen Unfall früher in der Saison beeinflusst.",
        nl: "Bij de regenachtige Japanse GP 1976 in Fuji trok Lauda zich na 2 ronden terug vanwege gevaarlijke omstandigheden. Hunt eindigde als 3e en verzekerde zich van het kampioenschap met 1 punt. Laudas beslissing werd beïnvloed door zijn bijna fatale crash eerder dat seizoen."
      }
    },
    {
      question: {
        en: "In what year did Vettel disobey team orders at Red Bull with the infamous 'Multi 21' incident?",
        es: "¿En qué año desobedeció Vettel las órdenes del equipo en Red Bull con el infame incidente 'Multi 21'?",
        de: "In welchem Jahr missachtete Vettel bei Red Bull die Teamanweisungen beim berüchtigten 'Multi 21'-Vorfall?",
        nl: "In welk jaar negeerde Vettel teamorders bij Red Bull met het beruchte 'Multi 21' incident?"
      },
      options: [
        "2013",
        "2012",
        "2014",
        "2011"
      ],
      correct: 0,
      explanation: {
        en: "At the 2013 Malaysian GP, Red Bull used code 'Multi 21' to tell Vettel to hold position behind Webber. Vettel ignored this and overtook Webber to win, severely damaging their relationship.",
        es: "En el GP de Malasia 2013, Red Bull usó el código 'Multi 21' para decirle a Vettel que mantuviera la posición detrás de Webber. Vettel ignoró esto y adelantó a Webber para ganar, dañando severamente su relación.",
        de: "Beim Malaysia-GP 2013 verwendete Red Bull den Code 'Multi 21', um Vettel mitzuteilen, die Position hinter Webber zu halten. Vettel ignorierte dies und überholte Webber zum Sieg, was ihre Beziehung schwer beschädigte.",
        nl: "Bij de Maleisische GP 2013 gebruikte Red Bull code 'Multi 21' om Vettel te vertellen positie te houden achter Webber. Vettel negeerde dit en haalde Webber in om te winnen, wat hun relatie ernstig schaadde."
      }
    },
    {
      question: {
        en: "Which 2019 race saw Vettel and Leclerc collide while battling for position at Ferrari?",
        es: "¿En qué carrera de 2019 chocaron Vettel y Leclerc mientras luchaban por posición en Ferrari?",
        de: "Bei welchem Rennen 2019 kollidierten Vettel und Leclerc während eines Positionskampfs bei Ferrari?",
        nl: "Bij welke race in 2019 botsten Vettel en Leclerc terwijl ze vochten om positie bij Ferrari?"
      },
      options: [
        "Brazilian GP (Interlagos)",
        "Austrian GP (Spielberg)",
        "Italian GP (Monza)",
        "Singapore GP"
      ],
      correct: 0,
      explanation: {
        en: "At the 2019 Brazilian GP, Vettel and Leclerc collided while fighting for 4th place on lap 66, causing both to retire. The incident highlighted the tension in their Ferrari partnership that season.",
        es: "En el GP de Brasil 2019, Vettel y Leclerc chocaron mientras luchaban por el 4º lugar en la vuelta 66, causando que ambos se retiraran. El incidente destacó la tensión en su asociación Ferrari esa temporada.",
        de: "Beim Brasilien-GP 2019 kollidierten Vettel und Leclerc in Runde 66 im Kampf um Platz 4, was beide zum Aufgeben zwang. Der Vorfall verdeutlichte die Spannungen in ihrer Ferrari-Partnerschaft in dieser Saison.",
        nl: "Bij de Braziliaanse GP 2019 botsten Vettel en Leclerc terwijl ze vochten om de 4e plaats in ronde 66, waardoor beiden moesten opgeven. Het incident benadrukte de spanning in hun Ferrari-samenwerking dat seizoen."
      }
    },
    {
      question: {
        en: "At which 2021 race did Hamilton and Verstappen collide at the Copse corner?",
        es: "¿En qué carrera de 2021 chocaron Hamilton y Verstappen en la curva Copse?",
        de: "Bei welchem Rennen 2021 kollidierten Hamilton und Verstappen in der Copse-Kurve?",
        nl: "Bij welke race in 2021 botsten Hamilton en Verstappen bij de Copse-bocht?"
      },
      options: [
        "British GP (Silverstone)",
        "Italian GP (Monza)",
        "Dutch GP (Zandvoort)",
        "Belgian GP (Spa)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2021 British GP, Hamilton and Verstappen collided at Copse corner on lap 1. Verstappen crashed heavily into the barriers at 51G, while Hamilton recovered to win. The incident sparked major controversy.",
        es: "En el GP británico 2021, Hamilton y Verstappen chocaron en la curva Copse en la vuelta 1. Verstappen se estrelló fuertemente contra las barreras a 51G, mientras Hamilton se recuperó para ganar. El incidente generó gran controversia.",
        de: "Beim britischen GP 2021 kollidierten Hamilton und Verstappen in Runde 1 in der Copse-Kurve. Verstappen krachte mit 51G in die Barrieren, während Hamilton sich erholte und gewann. Der Vorfall löste große Kontroversen aus.",
        nl: "Bij de Britse GP 2021 botsten Hamilton en Verstappen in ronde 1 bij de Copse-bocht. Verstappen crashte zwaar in de barrières bij 51G, terwijl Hamilton herstelde om te winnen. Het incident zorgde voor grote controverse."
      }
    },
    {
      question: {
        en: "Which 1994 race saw Hill and Schumacher's championship-deciding collision?",
        es: "¿Qué carrera de 1994 vio la colisión decisiva del campeonato entre Hill y Schumacher?",
        de: "Bei welchem Rennen 1994 kam es zur meisterschaftsentscheidenden Kollision zwischen Hill und Schumacher?",
        nl: "Bij welke race in 1994 was de kampioenschap-beslissende botsing tussen Hill en Schumacher?"
      },
      options: [
        "Australian GP (Adelaide)",
        "Japanese GP (Suzuka)",
        "European GP (Jerez)",
        "Belgian GP (Spa)"
      ],
      correct: 0,
      explanation: {
        en: "At the 1994 Australian GP in Adelaide, Schumacher and Hill collided while battling for the lead. Both retired, but Schumacher won the championship by 1 point. Many considered it a deliberate move by Schumacher.",
        es: "En el GP de Australia 1994 en Adelaide, Schumacher y Hill chocaron mientras luchaban por el liderazgo. Ambos se retiraron, pero Schumacher ganó el campeonato por 1 punto. Muchos lo consideraron un movimiento deliberado de Schumacher.",
        de: "Beim Australien-GP 1994 in Adelaide kollidierten Schumacher und Hill im Kampf um die Führung. Beide schieden aus, aber Schumacher gewann die Meisterschaft mit 1 Punkt Vorsprung. Viele hielten es für ein absichtliches Manöver Schumachers.",
        nl: "Bij de Australische GP 1994 in Adelaide botsten Schumacher en Hill terwijl ze vochten om de leiding. Beiden vielen uit, maar Schumacher won het kampioenschap met 1 punt. Velen beschouwden het als een opzettelijke actie van Schumacher."
      }
    },
    {
      question: {
        en: "At which 2018 race did Vettel spin while leading and battling Hamilton for the championship?",
        es: "¿En qué carrera de 2018 giró Vettel mientras lideraba y luchaba con Hamilton por el campeonato?",
        de: "Bei welchem Rennen 2018 drehte sich Vettel, während er führte und mit Hamilton um die Meisterschaft kämpfte?",
        nl: "Bij welke race in 2018 spinde Vettel terwijl hij leidde en vocht met Hamilton om het kampioenschap?"
      },
      options: [
        "German GP (Hockenheim)",
        "Italian GP (Monza)",
        "Singapore GP",
        "Japanese GP (Suzuka)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2018 German GP at Hockenheim, Vettel was leading in wet conditions when he spun off into the barriers on lap 51. Hamilton won the race, a turning point in the championship that Hamilton eventually won.",
        es: "En el GP de Alemania 2018 en Hockenheim, Vettel lideraba en condiciones húmedas cuando se salió y chocó contra las barreras en la vuelta 51. Hamilton ganó la carrera, un punto de inflexión en el campeonato que Hamilton finalmente ganó.",
        de: "Beim Deutschland-GP 2018 in Hockenheim führte Vettel bei nassen Bedingungen, als er in Runde 51 drehte und in die Barrieren fuhr. Hamilton gewann das Rennen, ein Wendepunkt in der Meisterschaft, die Hamilton schließlich gewann.",
        nl: "Bij de Duitse GP 2018 in Hockenheim leidde Vettel in natte omstandigheden toen hij in ronde 51 spinde en in de barrières belandde. Hamilton won de race, een keerpunt in het kampioenschap dat Hamilton uiteindelijk won."
      }
    },
    {
      question: {
        en: "Which 2007 McLaren rookies had an intense championship battle, ending equal on points?",
        es: "¿Qué rookies de McLaren de 2007 tuvieron una intensa batalla por el campeonato, terminando igualados en puntos?",
        de: "Welche McLaren-Rookies von 2007 hatten einen intensiven Meisterschaftskampf und endeten punktgleich?",
        nl: "Welke McLaren rookies van 2007 hadden een intense kampioenschapsstrijd en eindigden gelijk in punten?"
      },
      options: [
        "Hamilton and Alonso",
        "Hamilton and Kovalainen",
        "Alonso and de la Rosa",
        "Hamilton and Button"
      ],
      correct: 0,
      explanation: {
        en: "In 2007, rookie Lewis Hamilton and two-time champion Fernando Alonso were McLaren teammates. They finished the season tied on 109 points, both losing the championship to Kimi Räikkönen by 1 point. Their rivalry was fierce and acrimonious.",
        es: "En 2007, el novato Lewis Hamilton y el bicampeón Fernando Alonso fueron compañeros en McLaren. Terminaron la temporada empatados en 109 puntos, ambos perdiendo el campeonato ante Kimi Räikkönen por 1 punto. Su rivalidad fue feroz y amarga.",
        de: "2007 waren Rookie Lewis Hamilton und Zweifach-Champion Fernando Alonso McLaren-Teamkollegen. Sie beendeten die Saison mit je 109 Punkten und verloren beide die Meisterschaft an Kimi Räikkönen mit 1 Punkt. Ihre Rivalität war heftig und erbittert.",
        nl: "In 2007 waren rookie Lewis Hamilton en tweevoudig kampioen Fernando Alonso McLaren-teamgenoten. Ze eindigden het seizoen gelijk op 109 punten, beiden verloren het kampioenschap aan Kimi Räikkönen met 1 punt. Hun rivaliteit was hevig en bitter."
      }
    },
    {
      question: {
        en: "At which 2021 race did Verstappen and Hamilton collide at Monza's first chicane?",
        es: "¿En qué carrera de 2021 chocaron Verstappen y Hamilton en la primera chicana de Monza?",
        de: "Bei welchem Rennen 2021 kollidierten Verstappen und Hamilton an Monzas erster Schikane?",
        nl: "Bij welke race in 2021 botsten Verstappen en Hamilton bij Monza's eerste chicane?"
      },
      options: [
        "Italian GP (Monza)",
        "Dutch GP (Zandvoort)",
        "Russian GP (Sochi)",
        "Turkish GP (Istanbul)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2021 Italian GP, Verstappen and Hamilton collided at turn 2 following a slow pit stop for Verstappen. Verstappen's car ended up on top of Hamilton's Mercedes, with the halo saving Hamilton. Both retired from the race.",
        es: "En el GP de Italia 2021, Verstappen y Hamilton chocaron en la curva 2 después de un pit stop lento de Verstappen. El auto de Verstappen terminó encima del Mercedes de Hamilton, con el halo salvando a Hamilton. Ambos se retiraron de la carrera.",
        de: "Beim Italien-GP 2021 kollidierten Verstappen und Hamilton in Kurve 2 nach einem langsamen Boxenstopp für Verstappen. Verstappens Auto landete auf Hamiltons Mercedes, wobei der Halo Hamilton rettete. Beide schieden aus.",
        nl: "Bij de Italiaanse GP 2021 botsten Verstappen en Hamilton in bocht 2 na een trage pitstop voor Verstappen. Verstappens auto belandde bovenop Hamiltons Mercedes, waarbij de halo Hamilton redde. Beiden vielen uit."
      }
    },
    {
      question: {
        en: "Which 2010 race saw Vettel and Webber collide while battling for the lead at Red Bull?",
        es: "¿En qué carrera de 2010 chocaron Vettel y Webber mientras luchaban por el liderazgo en Red Bull?",
        de: "Bei welchem Rennen 2010 kollidierten Vettel und Webber im Kampf um die Führung bei Red Bull?",
        nl: "Bij welke race in 2010 botsten Vettel en Webber terwijl ze vochten om de leiding bij Red Bull?"
      },
      options: [
        "Turkish GP (Istanbul)",
        "British GP (Silverstone)",
        "German GP (Hockenheim)",
        "Belgian GP (Spa)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2010 Turkish GP, Vettel and Webber were running 1-2 when they collided on lap 40 while battling for the lead. Vettel retired, Webber finished 3rd. The incident severely strained their relationship.",
        es: "En el GP de Turquía 2010, Vettel y Webber corrían 1-2 cuando chocaron en la vuelta 40 mientras luchaban por el liderazgo. Vettel se retiró, Webber terminó 3º. El incidente tensó severamente su relación.",
        de: "Beim Türkei-GP 2010 fuhren Vettel und Webber auf den Plätzen 1-2, als sie in Runde 40 im Kampf um die Führung kollidierten. Vettel schied aus, Webber wurde Dritter. Der Vorfall belastete ihre Beziehung schwer.",
        nl: "Bij de Turkse GP 2010 reden Vettel en Webber 1-2 toen ze in ronde 40 botsten terwijl ze vochten om de leiding. Vettel viel uit, Webber eindigde als 3e. Het incident zorgde voor grote spanning in hun relatie."
      }
    },
    {
      question: {
        en: "At which 2016 race did Rosberg and Hamilton nearly collide on the final lap while battling for the win?",
        es: "¿En qué carrera de 2016 casi chocaron Rosberg y Hamilton en la última vuelta mientras luchaban por la victoria?",
        de: "Bei welchem Rennen 2016 kollidierten Rosberg und Hamilton in der letzten Runde fast im Kampf um den Sieg?",
        nl: "Bij welke race in 2016 botsten Rosberg en Hamilton bijna in de laatste ronde terwijl ze vochten om de overwinning?"
      },
      options: [
        "Austrian GP (Spielberg)",
        "Spanish GP (Barcelona)",
        "Canadian GP (Montreal)",
        "German GP (Hockenheim)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2016 Austrian GP, Hamilton and Rosberg had an intense final-lap battle for the win. They made contact in turn 2, with Rosberg damaging his front wing and Hamilton winning. Rosberg was deemed predominantly at fault.",
        es: "En el GP de Austria 2016, Hamilton y Rosberg tuvieron una intensa batalla en la última vuelta por la victoria. Hicieron contacto en la curva 2, con Rosberg dañando su alerón delantero y Hamilton ganando. Rosberg fue considerado principalmente culpable.",
        de: "Beim Österreich-GP 2016 hatten Hamilton und Rosberg einen intensiven Schlusskampf um den Sieg. Sie berührten sich in Kurve 2, wobei Rosberg seinen Frontflügel beschädigte und Hamilton gewann. Rosberg wurde überwiegend schuldig befunden.",
        nl: "Bij de Oostenrijkse GP 2016 hadden Hamilton en Rosberg een intense laatste-ronde strijd om de overwinning. Ze raakten elkaar in bocht 2, waarbij Rosberg zijn voorvleugel beschadigde en Hamilton won. Rosberg werd voornamelijk schuldig bevonden."
      }
    },
    {
      question: {
        en: "Which teammates had an infamous 2007 incident where one blocked the other in the pits during qualifying?",
        es: "¿Qué compañeros tuvieron un infame incidente en 2007 donde uno bloqueó al otro en los pits durante la clasificación?",
        de: "Welche Teamkollegen hatten 2007 einen berüchtigten Vorfall, bei dem einer den anderen in der Box während des Qualifyings blockierte?",
        nl: "Welke teamgenoten hadden een beruchte 2007 incident waarbij een de ander blokkeerde in de pits tijdens de kwalificatie?"
      },
      options: [
        "Alonso and Hamilton (Hungary)",
        "Vettel and Webber (Monaco)",
        "Rosberg and Hamilton (Monaco)",
        "Massa and Räikkönen (Brazil)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2007 Hungarian GP qualifying, Fernando Alonso deliberately held Lewis Hamilton in the pits to prevent him from completing a final qualifying lap. Alonso was penalized with a 5-place grid drop, severely damaging their relationship.",
        es: "En la clasificación del GP de Hungría 2007, Fernando Alonso deliberadamente retuvo a Lewis Hamilton en los pits para evitar que completara una última vuelta de clasificación. Alonso fue penalizado con 5 posiciones en la parrilla, dañando severamente su relación.",
        de: "Beim Qualifying zum Ungarn-GP 2007 hielt Fernando Alonso Lewis Hamilton absichtlich in der Box fest, um ihn an einer letzten Qualifying-Runde zu hindern. Alonso wurde mit 5 Startplätzen Strafe belegt, was ihre Beziehung schwer beschädigte.",
        nl: "Bij de kwalificatie voor de Hongaarse GP 2007 hield Fernando Alonso Lewis Hamilton opzettelijk vast in de pits om te voorkomen dat hij een laatste kwalificatieronde kon voltooien. Alonso kreeg een 5-plaatsen straf, wat hun relatie ernstig schaadde."
      }
    },
    {
      question: {
        en: "At which 2012 race did Grosjean cause a massive first-lap crash involving Alonso and Hamilton?",
        es: "¿En qué carrera de 2012 causó Grosjean un masivo accidente en la primera vuelta involucrando a Alonso y Hamilton?",
        de: "Bei welchem Rennen 2012 verursachte Grosjean einen massiven Crash in der ersten Runde mit Alonso und Hamilton?",
        nl: "Bij welke race in 2012 veroorzaakte Grosjean een massale eerste-ronde crash waarbij Alonso en Hamilton betrokken waren?"
      },
      options: [
        "Belgian GP (Spa)",
        "Japanese GP (Suzuka)",
        "Brazilian GP (Interlagos)",
        "Singapore GP"
      ],
      correct: 0,
      explanation: {
        en: "At the 2012 Belgian GP, Romain Grosjean caused a huge first-lap crash at turn 1 that took out Fernando Alonso, Lewis Hamilton, and Sergio Pérez. Grosjean was banned for one race. Alonso famously said 'GP2 engine' in frustration.",
        es: "En el GP de Bélgica 2012, Romain Grosjean causó un enorme accidente en la primera vuelta en la curva 1 que sacó a Fernando Alonso, Lewis Hamilton y Sergio Pérez. Grosjean fue suspendido por una carrera. Alonso dijo famosamente 'motor GP2' frustrado.",
        de: "Beim Belgien-GP 2012 verursachte Romain Grosjean einen riesigen Crash in der ersten Runde in Kurve 1, der Fernando Alonso, Lewis Hamilton und Sergio Pérez traf. Grosjean wurde für ein Rennen gesperrt. Alonso sagte frustriert 'GP2-Motor'.",
        nl: "Bij de Belgische GP 2012 veroorzaakte Romain Grosjean een enorme eerste-ronde crash in bocht 1 die Fernando Alonso, Lewis Hamilton en Sergio Pérez raakte. Grosjean werd voor één race geschorst. Alonso zei gefrustreerd 'GP2-motor'."
      }
    },
    {
      question: {
        en: "Which 2005 race saw Montoya and Schumacher battle wheel-to-wheel for multiple laps?",
        es: "¿Qué carrera de 2005 vio a Montoya y Schumacher luchar rueda a rueda durante múltiples vueltas?",
        de: "Bei welchem Rennen 2005 kämpften Montoya und Schumacher über mehrere Runden Rad an Rad?",
        nl: "Bij welke race in 2005 vochten Montoya en Schumacher wiel-aan-wiel gedurende meerdere ronden?"
      },
      options: [
        "Brazilian GP (Interlagos)",
        "Monaco GP",
        "Italian GP (Monza)",
        "Japanese GP (Suzuka)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2005 Brazilian GP, Juan Pablo Montoya and Michael Schumacher had an epic wheel-to-wheel battle for the lead lasting several laps at Interlagos. Montoya eventually won the race in one of the most memorable duels of the V10 era.",
        es: "En el GP de Brasil 2005, Juan Pablo Montoya y Michael Schumacher tuvieron una épica batalla rueda a rueda por el liderazgo que duró varias vueltas en Interlagos. Montoya eventualmente ganó la carrera en uno de los duelos más memorables de la era V10.",
        de: "Beim Brasilien-GP 2005 hatten Juan Pablo Montoya und Michael Schumacher einen epischen Rad-an-Rad-Kampf um die Führung über mehrere Runden in Interlagos. Montoya gewann schließlich das Rennen in einem der denkwürdigsten Duelle der V10-Ära.",
        nl: "Bij de Braziliaanse GP 2005 hadden Juan Pablo Montoya en Michael Schumacher een epische wiel-aan-wiel strijd om de leiding die meerdere ronden duurde in Interlagos. Montoya won uiteindelijk de race in een van de meest memorabele duels van het V10-tijdperk."
      }
    },
    {
      question: {
        en: "At which 2019 race did Verstappen and Leclerc have multiple position changes in an intense battle?",
        es: "¿En qué carrera de 2019 tuvieron Verstappen y Leclerc múltiples cambios de posición en una batalla intensa?",
        de: "Bei welchem Rennen 2019 hatten Verstappen und Leclerc mehrere Positionswechsel in einem intensiven Kampf?",
        nl: "Bij welke race in 2019 hadden Verstappen en Leclerc meerdere positiewisselingen in een intense strijd?"
      },
      options: [
        "Austrian GP (Spielberg)",
        "British GP (Silverstone)",
        "German GP (Hockenheim)",
        "Belgian GP (Spa)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2019 Austrian GP, Max Verstappen and Charles Leclerc had an intense final-lap battle for the win. Verstappen overtook Leclerc with 3 laps to go, with contact in the final corners. Verstappen won; the move was deemed legal despite Leclerc's protests.",
        es: "En el GP de Austria 2019, Max Verstappen y Charles Leclerc tuvieron una intensa batalla en la última vuelta por la victoria. Verstappen adelantó a Leclerc faltando 3 vueltas, con contacto en las últimas curvas. Verstappen ganó; el movimiento fue considerado legal pese a las protestas de Leclerc.",
        de: "Beim Österreich-GP 2019 hatten Max Verstappen und Charles Leclerc einen intensiven Schlusskampf um den Sieg. Verstappen überholte Leclerc 3 Runden vor Schluss mit Kontakt in den letzten Kurven. Verstappen gewann; das Manöver wurde trotz Leclercs Protesten als legal eingestuft.",
        nl: "Bij de Oostenrijkse GP 2019 hadden Max Verstappen en Charles Leclerc een intense laatste-ronde strijd om de overwinning. Verstappen haalde Leclerc in met 3 ronden te gaan, met contact in de laatste bochten. Verstappen won; de actie werd legaal bevonden ondanks Leclercs protesten."
      }
    },
    {
      question: {
        en: "Which 1990s teammates had an infamous crash at the 1997 European GP while battling for position?",
        es: "¿Qué compañeros de equipo de los años 90 tuvieron un infame accidente en el GP de Europa de 1997 mientras luchaban por posición?",
        de: "Welche Teamkollegen der 1990er Jahre hatten beim Europa-GP 1997 einen berüchtigten Crash im Kampf um die Position?",
        nl: "Welke teamgenoten uit de jaren 90 hadden een beruchte crash bij de Europese GP 1997 terwijl ze vochten om positie?"
      },
      options: [
        "Villeneuve and Frentzen",
        "Schumacher and Irvine",
        "Hill and Coulthard",
        "Häkkinen and Coulthard"
      ],
      correct: 2,
      explanation: {
        en: "At the 1997 European GP in Jerez, Williams teammates Damon Hill and David Coulthard had contact while battling for position. Though not as famous as the Schumacher-Villeneuve incident at the same race, it showed the intense rivalry within teams.",
        es: "En el GP de Europa 1997 en Jerez, los compañeros de Williams Damon Hill y David Coulthard tuvieron contacto mientras luchaban por posición. Aunque no tan famoso como el incidente Schumacher-Villeneuve en la misma carrera, mostró la intensa rivalidad dentro de los equipos.",
        de: "Beim Europa-GP 1997 in Jerez hatten die Williams-Teamkollegen Damon Hill und David Coulthard Kontakt im Kampf um die Position. Obwohl nicht so berühmt wie der Schumacher-Villeneuve-Vorfall im selben Rennen, zeigte es die intensive Rivalität innerhalb der Teams.",
        nl: "Bij de Europese GP 1997 in Jerez hadden Williams-teamgenoten Damon Hill en David Coulthard contact terwijl ze vochten om positie. Hoewel niet zo beroemd als het Schumacher-Villeneuve incident in dezelfde race, toonde het de intense rivaliteit binnen teams."
      }
    },
    {
      question: {
        en: "At which 2008 race did Massa and Hamilton have their most intense final-lap battle?",
        es: "¿En qué carrera de 2008 tuvieron Massa y Hamilton su batalla de última vuelta más intensa?",
        de: "Bei welchem Rennen 2008 hatten Massa und Hamilton ihren intensivsten Schlusskampf?",
        nl: "Bij welke race in 2008 hadden Massa en Hamilton hun meest intense laatste-ronde strijd?"
      },
      options: [
        "Brazilian GP (Interlagos)",
        "Italian GP (Monza)",
        "British GP (Silverstone)",
        "Japanese GP (Fuji)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2008 Brazilian GP finale, Massa won the race and briefly thought he was champion. But Hamilton passed Glock on the final corner of the final lap to take 5th place and win the championship by 1 point in dramatic fashion.",
        es: "En la final del GP de Brasil 2008, Massa ganó la carrera y pensó brevemente que era campeón. Pero Hamilton pasó a Glock en la última curva de la última vuelta para tomar el 5º lugar y ganar el campeonato por 1 punto de manera dramática.",
        de: "Beim Brasilien-GP-Finale 2008 gewann Massa das Rennen und dachte kurz, er sei Meister. Aber Hamilton überholte Glock in der letzten Kurve der letzten Runde, um Platz 5 zu erreichen und die Meisterschaft auf dramatische Weise mit 1 Punkt Vorsprung zu gewinnen.",
        nl: "Bij de Braziliaanse GP-finale 2008 won Massa de race en dacht kort dat hij kampioen was. Maar Hamilton passeerde Glock in de laatste bocht van de laatste ronde om 5e te worden en het kampioenschap met 1 punt te winnen op dramatische wijze."
      }
    },
    {
      question: {
        en: "Which 2016 race saw Verstappen make a controversial move on Räikkönen at turn 1?",
        es: "¿En qué carrera de 2016 hizo Verstappen un movimiento controvertido sobre Räikkönen en la curva 1?",
        de: "Bei welchem Rennen 2016 machte Verstappen ein kontroverses Manöver gegen Räikkönen in Kurve 1?",
        nl: "Bij welke race in 2016 maakte Verstappen een controversiële actie op Räikkönen in bocht 1?"
      },
      options: [
        "Belgian GP (Spa)",
        "Italian GP (Monza)",
        "Hungarian GP",
        "Japanese GP (Suzuka)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2016 Belgian GP, Max Verstappen made multiple aggressive defensive moves against Kimi Räikkönen on the Kemmel Straight, forcing Räikkönen to back off. The incident led to new rules about changing direction under braking.",
        es: "En el GP de Bélgica 2016, Max Verstappen hizo múltiples movimientos defensivos agresivos contra Kimi Räikkönen en la recta Kemmel, obligando a Räikkönen a retroceder. El incidente llevó a nuevas reglas sobre cambiar de dirección al frenar.",
        de: "Beim Belgien-GP 2016 machte Max Verstappen mehrere aggressive Defensivmanöver gegen Kimi Räikkönen auf der Kemmel-Geraden und zwang Räikkönen zurückzuweichen. Der Vorfall führte zu neuen Regeln über Richtungswechsel beim Bremsen.",
        nl: "Bij de Belgische GP 2016 maakte Max Verstappen meerdere aggressieve verdedigende acties tegen Kimi Räikkönen op het Kemmel Straight, waardoor Räikkönen moest afremmen. Het incident leidde tot nieuwe regels over richtingveranderingen tijdens remmen."
      }
    },
    {
      question: {
        en: "At which 2017 race did Vettel deliberately drive into Hamilton under safety car conditions?",
        es: "¿En qué carrera de 2017 condujo Vettel deliberadamente contra Hamilton bajo condiciones de coche de seguridad?",
        de: "Bei welchem Rennen 2017 fuhr Vettel absichtlich in Hamilton unter Safety-Car-Bedingungen?",
        nl: "Bij welke race in 2017 reed Vettel opzettelijk tegen Hamilton aan onder safety car-omstandigheden?"
      },
      options: [
        "Azerbaijan GP (Baku)",
        "Singapore GP",
        "Mexican GP",
        "Malaysian GP (Sepang)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2017 Azerbaijan GP, Sebastian Vettel drove alongside Lewis Hamilton and deliberately steered into him under safety car conditions, believing Hamilton had brake-tested him. Vettel received a 10-second stop-go penalty.",
        es: "En el GP de Azerbaiyán 2017, Sebastian Vettel condujo al lado de Lewis Hamilton y deliberadamente se dirigió hacia él bajo condiciones de coche de seguridad, creyendo que Hamilton le había hecho una prueba de frenos. Vettel recibió una penalización de 10 segundos stop-go.",
        de: "Beim Aserbaidschan-GP 2017 fuhr Sebastian Vettel neben Lewis Hamilton und lenkte absichtlich in ihn unter Safety-Car-Bedingungen, weil er glaubte, Hamilton hätte ihn ausgebremst. Vettel erhielt eine 10-Sekunden-Stop-and-Go-Strafe.",
        nl: "Bij de Azerbeidzjaanse GP 2017 reed Sebastian Vettel naast Lewis Hamilton en stuurde opzettelijk tegen hem aan onder safety car-omstandigheden, omdat hij dacht dat Hamilton hem had afgeremd. Vettel kreeg een 10-seconden stop-go straf."
      }
    },
    {
      question: {
        en: "Which 2014 race saw Rosberg and Hamilton collide at Spa's Les Combes chicane?",
        es: "¿En qué carrera de 2014 chocaron Rosberg y Hamilton en la chicana Les Combes de Spa?",
        de: "Bei welchem Rennen 2014 kollidierten Rosberg und Hamilton an Spas Les Combes-Schikane?",
        nl: "Bij welke race in 2014 botsten Rosberg en Hamilton bij Spa's Les Combes-chicane?"
      },
      options: [
        "Belgian GP (Spa)",
        "German GP (Hockenheim)",
        "Italian GP (Monza)",
        "Hungarian GP"
      ],
      correct: 0,
      explanation: {
        en: "At the 2014 Belgian GP, Nico Rosberg collided with Lewis Hamilton at Les Combes on lap 2, puncturing Hamilton's tire and forcing his retirement. Rosberg later admitted he could have avoided the collision, causing major tension between them.",
        es: "En el GP de Bélgica 2014, Nico Rosberg chocó con Lewis Hamilton en Les Combes en la vuelta 2, pinchando el neumático de Hamilton y forzando su retiro. Rosberg admitió más tarde que podría haber evitado la colisión, causando gran tensión entre ellos.",
        de: "Beim Belgien-GP 2014 kollidierte Nico Rosberg in Runde 2 mit Lewis Hamilton in Les Combes, durchstach Hamiltons Reifen und zwang ihn zum Aufgeben. Rosberg gab später zu, die Kollision hätte vermeiden können, was große Spannungen verursachte.",
        nl: "Bij de Belgische GP 2014 botste Nico Rosberg met Lewis Hamilton in Les Combes in ronde 2, waardoor Hamiltons band lek raakte en hij moest opgeven. Rosberg gaf later toe dat hij de botsing had kunnen vermijden, wat grote spanning veroorzaakte."
      }
    },
    {
      question: {
        en: "At which 2003 race did Montoya and Schumacher have an aggressive wheel-to-wheel battle?",
        es: "¿En qué carrera de 2003 tuvieron Montoya y Schumacher una agresiva batalla rueda a rueda?",
        de: "Bei welchem Rennen 2003 hatten Montoya und Schumacher einen aggressiven Rad-an-Rad-Kampf?",
        nl: "Bij welke race in 2003 hadden Montoya en Schumacher een aggressieve wiel-aan-wiel strijd?"
      },
      options: [
        "Brazilian GP (Interlagos)",
        "Monaco GP",
        "British GP (Silverstone)",
        "Italian GP (Monza)"
      ],
      correct: 0,
      explanation: {
        en: "At the chaotic 2003 Brazilian GP, Juan Pablo Montoya and Michael Schumacher had multiple aggressive battles for position. The race was red-flagged due to a massive crash, with Giancarlo Fisichella initially declared winner before Jordan's appeal gave it to Fisichella.",
        es: "En el caótico GP de Brasil 2003, Juan Pablo Montoya y Michael Schumacher tuvieron múltiples batallas agresivas por posición. La carrera fue detenida con bandera roja debido a un accidente masivo, con Giancarlo Fisichella inicialmente declarado ganador antes de que la apelación de Jordan se lo diera a Fisichella.",
        de: "Beim chaotischen Brasilien-GP 2003 hatten Juan Pablo Montoya und Michael Schumacher mehrere aggressive Kämpfe um Positionen. Das Rennen wurde wegen eines massiven Unfalls abgebrochen, wobei Giancarlo Fisichella zunächst als Sieger erklärt wurde, bevor Jordans Einspruch es Fisichella gab.",
        nl: "Bij de chaotische Braziliaanse GP 2003 hadden Juan Pablo Montoya en Michael Schumacher meerdere aggressieve gevechten om positie. De race werd met rode vlag gestopt vanwege een enorme crash, waarbij Giancarlo Fisichella aanvankelijk als winnaar werd uitgeroepen voordat Jordans protest het aan Fisichella gaf."
      }
    },
    {
      question: {
        en: "Which 2015 race saw Ricciardo and Verstappen collide as Red Bull teammates?",
        es: "¿En qué carrera de 2015 chocaron Ricciardo y Verstappen como compañeros de Red Bull?",
        de: "Bei welchem Rennen 2015 kollidierten Ricciardo und Verstappen als Red Bull-Teamkollegen?",
        nl: "Bij welke race in 2015 botsten Ricciardo en Verstappen als Red Bull-teamgenoten?"
      },
      options: [
        "They weren't teammates in 2015",
        "Brazilian GP (Interlagos)",
        "Mexican GP",
        "Japanese GP (Suzuka)"
      ],
      correct: 0,
      explanation: {
        en: "Verstappen and Ricciardo weren't Red Bull teammates in 2015. Verstappen was at Toro Rosso in 2015 and only joined Red Bull in May 2016. Their famous collisions as teammates came later, notably at Hungary 2017 and Azerbaijan 2018.",
        es: "Verstappen y Ricciardo no fueron compañeros de Red Bull en 2015. Verstappen estaba en Toro Rosso en 2015 y solo se unió a Red Bull en mayo de 2016. Sus famosas colisiones como compañeros llegaron más tarde, notablemente en Hungría 2017 y Azerbaiyán 2018.",
        de: "Verstappen und Ricciardo waren 2015 keine Red Bull-Teamkollegen. Verstappen war 2015 bei Toro Rosso und kam erst im Mai 2016 zu Red Bull. Ihre berühmten Kollisionen als Teamkollegen kamen später, besonders in Ungarn 2017 und Aserbaidschan 2018.",
        nl: "Verstappen en Ricciardo waren in 2015 geen Red Bull-teamgenoten. Verstappen zat in 2015 bij Toro Rosso en kwam pas in mei 2016 bij Red Bull. Hun beroemde botsingen als teamgenoten kwamen later, vooral in Hongarije 2017 en Azerbeidzjan 2018."
      }
    },
    {
      question: {
        en: "At which 2018 race did Verstappen and Ricciardo collide as Red Bull teammates?",
        es: "¿En qué carrera de 2018 chocaron Verstappen y Ricciardo como compañeros de Red Bull?",
        de: "Bei welchem Rennen 2018 kollidierten Verstappen und Ricciardo als Red Bull-Teamkollegen?",
        nl: "Bij welke race in 2018 botsten Verstappen en Ricciardo als Red Bull-teamgenoten?"
      },
      options: [
        "Azerbaijan GP (Baku)",
        "Hungarian GP",
        "Chinese GP (Shanghai)",
        "Brazilian GP (Interlagos)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2018 Azerbaijan GP, Max Verstappen and Daniel Ricciardo collided while battling for 4th place on lap 40, taking both Red Bulls out of the race. Both drivers blamed each other in one of the most controversial teammate incidents.",
        es: "En el GP de Azerbaiyán 2018, Max Verstappen y Daniel Ricciardo chocaron mientras luchaban por el 4º lugar en la vuelta 40, sacando a ambos Red Bulls de la carrera. Ambos pilotos se culparon mutuamente en uno de los incidentes más controvertidos entre compañeros.",
        de: "Beim Aserbaidschan-GP 2018 kollidierten Max Verstappen und Daniel Ricciardo in Runde 40 im Kampf um Platz 4, wodurch beide Red Bulls ausschieden. Beide Fahrer gaben sich gegenseitig die Schuld in einem der umstrittensten Teamkollegen-Vorfälle.",
        nl: "Bij de Azerbeidzjaanse GP 2018 botsten Max Verstappen en Daniel Ricciardo terwijl ze vochten om de 4e plaats in ronde 40, waardoor beide Red Bulls uit de race gingen. Beide coureurs gaven elkaar de schuld in een van de meest controversiële teamgenoot-incidenten."
      }
    },
    {
      question: {
        en: "Which 2011 race saw Hamilton and Massa collide for the sixth time that season?",
        es: "¿En qué carrera de 2011 chocaron Hamilton y Massa por sexta vez esa temporada?",
        de: "Bei welchem Rennen 2011 kollidierten Hamilton und Massa zum sechsten Mal in dieser Saison?",
        nl: "Bij welke race in 2011 botsten Hamilton en Massa voor de zesde keer dat seizoen?"
      },
      options: [
        "Indian GP (Buddh)",
        "Singapore GP",
        "Monaco GP",
        "Brazilian GP (Interlagos)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2011 Indian GP, Lewis Hamilton and Felipe Massa had their sixth collision of the season. After the race, an exasperated Massa famously complained to the media about Hamilton's aggressive racing, highlighting their season-long rivalry.",
        es: "En el GP de India 2011, Lewis Hamilton y Felipe Massa tuvieron su sexta colisión de la temporada. Después de la carrera, un exasperado Massa se quejó famosamente a los medios sobre el estilo agresivo de Hamilton, destacando su rivalidad de toda la temporada.",
        de: "Beim Indien-GP 2011 hatten Lewis Hamilton und Felipe Massa ihre sechste Kollision der Saison. Nach dem Rennen beschwerte sich ein frustrierter Massa bei den Medien über Hamiltons aggressives Fahren und unterstrich ihre saisonlange Rivalität.",
        nl: "Bij de Indiase GP 2011 hadden Lewis Hamilton en Felipe Massa hun zesde botsing van het seizoen. Na de race klaagde een gefrustreerde Massa bij de media over Hamiltons aggressieve rijstijl, wat hun seizoenlange rivaliteit benadrukte."
      }
    },
    {
      question: {
        en: "At which 2019 race did Verstappen and Leclerc have controversial contact that wasn't penalized?",
        es: "¿En qué carrera de 2019 tuvieron Verstappen y Leclerc un contacto controvertido que no fue penalizado?",
        de: "Bei welchem Rennen 2019 hatten Verstappen und Leclerc einen kontroversen Kontakt, der nicht bestraft wurde?",
        nl: "Bij welke race in 2019 hadden Verstappen en Leclerc controversieel contact dat niet werd bestraft?"
      },
      options: [
        "Austrian GP (Spielberg)",
        "British GP (Silverstone)",
        "Italian GP (Monza)",
        "Belgian GP (Spa)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2019 Austrian GP, Max Verstappen passed Charles Leclerc for the win with 3 laps to go, making contact in the process. Despite Leclerc's protests and a lengthy investigation, the stewards deemed it a racing incident and Verstappen kept the win.",
        es: "En el GP de Austria 2019, Max Verstappen adelantó a Charles Leclerc para ganar faltando 3 vueltas, haciendo contacto en el proceso. A pesar de las protestas de Leclerc y una larga investigación, los comisarios lo consideraron un incidente de carrera y Verstappen mantuvo la victoria.",
        de: "Beim Österreich-GP 2019 überholte Max Verstappen Charles Leclerc 3 Runden vor Schluss zum Sieg und berührte ihn dabei. Trotz Leclercs Protesten und langer Untersuchung bewerteten die Rennkommissare es als Rennvorfall und Verstappen behielt den Sieg.",
        nl: "Bij de Oostenrijkse GP 2019 passeerde Max Verstappen Charles Leclerc voor de overwinning met 3 ronden te gaan, waarbij contact was. Ondanks Leclercs protesten en een langdurig onderzoek oordeelden de stewards dat het een race-incident was en Verstappen behield de overwinning."
      }
    },
    {
      question: {
        en: "Which 2009 race saw Vettel and Webber finish 1-2 for Red Bull's first-ever 1-2 finish?",
        es: "¿En qué carrera de 2009 terminaron Vettel y Webber 1-2 para el primer 1-2 de Red Bull?",
        de: "Bei welchem Rennen 2009 fuhren Vettel und Webber auf 1-2 für Red Bulls ersten 1-2-Erfolg?",
        nl: "Bij welke race in 2009 eindigden Vettel en Webber 1-2 voor Red Bull's eerste 1-2 finish?"
      },
      options: [
        "Chinese GP (Shanghai)",
        "British GP (Silverstone)",
        "Turkish GP (Istanbul)",
        "Japanese GP (Suzuka)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2009 Chinese GP, Sebastian Vettel won with Mark Webber 2nd, giving Red Bull Racing their first-ever 1-2 finish. This early success marked the beginning of Red Bull's dominance era, though it also planted seeds for the Vettel-Webber rivalry.",
        es: "En el GP de China 2009, Sebastian Vettel ganó con Mark Webber 2º, dando a Red Bull Racing su primer 1-2. Este éxito temprano marcó el comienzo de la era de dominio de Red Bull, aunque también plantó las semillas de la rivalidad Vettel-Webber.",
        de: "Beim China-GP 2009 gewann Sebastian Vettel mit Mark Webber als Zweiter und bescherte Red Bull Racing den ersten 1-2-Erfolg. Dieser frühe Erfolg markierte den Beginn von Red Bulls Dominanz-Ära, säte aber auch die Saat für die Vettel-Webber-Rivalität.",
        nl: "Bij de Chinese GP 2009 won Sebastian Vettel met Mark Webber als 2e, wat Red Bull Racing hun eerste 1-2 finish opleverde. Dit vroege succes markeerde het begin van Red Bull's dominantie-tijdperk, hoewel het ook de kiemen plantte voor de Vettel-Webber rivaliteit."
      }
    },
    {
      question: {
        en: "At which 2020 race did Racing Point teammates Stroll and Perez have a controversial collision?",
        es: "¿En qué carrera de 2020 tuvieron los compañeros de Racing Point Stroll y Perez una colisión controvertida?",
        de: "Bei welchem Rennen 2020 hatten die Racing Point-Teamkollegen Stroll und Perez eine kontroverse Kollision?",
        nl: "Bij welke race in 2020 hadden Racing Point-teamgenoten Stroll en Perez een controversiële botsing?"
      },
      options: [
        "Portuguese GP (Portimão)",
        "Turkish GP (Istanbul)",
        "Belgian GP (Spa)",
        "Italian GP (Mugello)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2020 Portuguese GP at Portimão, Lance Stroll and Sergio Pérez collided while battling for position, damaging both Racing Point cars. The incident highlighted the competitive tension between the teammates fighting for points.",
        es: "En el GP de Portugal 2020 en Portimão, Lance Stroll y Sergio Pérez chocaron mientras luchaban por posición, dañando ambos autos de Racing Point. El incidente destacó la tensión competitiva entre los compañeros luchando por puntos.",
        de: "Beim Portugal-GP 2020 in Portimão kollidierten Lance Stroll und Sergio Pérez im Kampf um die Position und beschädigten beide Racing Point-Autos. Der Vorfall verdeutlichte die Wettbewerbsspannung zwischen den Teamkollegen im Punktekampf.",
        nl: "Bij de Portugese GP 2020 in Portimão botsten Lance Stroll en Sergio Pérez terwijl ze vochten om positie, waarbij beide Racing Point-auto's werden beschadigd. Het incident benadrukte de competitieve spanning tussen de teamgenoten die vochten om punten."
      }
    },
    {
      question: {
        en: "Which 2022 race saw Leclerc make an aggressive move on Verstappen at Les Combes?",
        es: "¿En qué carrera de 2022 hizo Leclerc un movimiento agresivo sobre Verstappen en Les Combes?",
        de: "Bei welchem Rennen 2022 machte Leclerc ein aggressives Manöver gegen Verstappen in Les Combes?",
        nl: "Bij welke race in 2022 maakte Leclerc een aggressieve actie op Verstappen bij Les Combes?"
      },
      options: [
        "Belgian GP (Spa)",
        "Austrian GP (Spielberg)",
        "Italian GP (Monza)",
        "British GP (Silverstone)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2022 Belgian GP, Charles Leclerc made a bold around-the-outside move on Max Verstappen at Les Combes on lap 1, one of the most spectacular overtakes of the season showcasing their intense rivalry for the championship.",
        es: "En el GP de Bélgica 2022, Charles Leclerc hizo un audaz movimiento por el exterior sobre Max Verstappen en Les Combes en la vuelta 1, uno de los adelantamientos más espectaculares de la temporada mostrando su intensa rivalidad por el campeonato.",
        de: "Beim Belgien-GP 2022 führte Charles Leclerc in Runde 1 ein kühnes Außenmanöver gegen Max Verstappen in Les Combes durch, eine der spektakulärsten Überholungen der Saison, die ihre intensive Rivalität um die Meisterschaft verdeutlichte.",
        nl: "Bij de Belgische GP 2022 maakte Charles Leclerc een gedurfde buitenom-actie op Max Verstappen bij Les Combes in ronde 1, een van de meest spectaculaire inhaalacties van het seizoen die hun intense rivaliteit om het kampioenschap liet zien."
      }
    },
    {
      question: {
        en: "At which 2012 race did Maldonado and Hamilton have a controversial collision?",
        es: "¿En qué carrera de 2012 tuvieron Maldonado y Hamilton una colisión controvertida?",
        de: "Bei welchem Rennen 2012 hatten Maldonado und Hamilton eine kontroverse Kollision?",
        nl: "Bij welke race in 2012 hadden Maldonado en Hamilton een controversiële botsing?"
      },
      options: [
        "European GP (Valencia)",
        "Monaco GP",
        "Belgian GP (Spa)",
        "Singapore GP"
      ],
      correct: 0,
      explanation: {
        en: "At the 2012 European GP in Valencia, Pastor Maldonado drove into Lewis Hamilton's car in the pits after qualifying, pushing him into the wall. Maldonado received a penalty, highlighting his aggressive and controversial racing style.",
        es: "En el GP de Europa 2012 en Valencia, Pastor Maldonado condujo contra el auto de Lewis Hamilton en los pits después de la clasificación, empujándolo contra el muro. Maldonado recibió una penalización, destacando su estilo de carrera agresivo y controvertido.",
        de: "Beim Europa-GP 2012 in Valencia fuhr Pastor Maldonado nach dem Qualifying in der Box in Lewis Hamiltons Auto und schob ihn in die Mauer. Maldonado erhielt eine Strafe, was seinen aggressiven und kontroversen Fahrstil unterstrich.",
        nl: "Bij de Europese GP 2012 in Valencia reed Pastor Maldonado na de kwalificatie in de pits tegen Lewis Hamiltons auto aan en duwde hem tegen de muur. Maldonado kreeg een straf, wat zijn aggressieve en controversiële rijstijl benadrukte."
      }
    },
    {
      question: {
        en: "Which 2005 race saw Alonso and Schumacher battle intensely for the championship lead?",
        es: "¿En qué carrera de 2005 lucharon Alonso y Schumacher intensamente por el liderazgo del campeonato?",
        de: "Bei welchem Rennen 2005 kämpften Alonso und Schumacher intensiv um die Meisterschaftsführung?",
        nl: "Bij welke race in 2005 vochten Alonso en Schumacher intens om de kampioenschapsleiding?"
      },
      options: [
        "San Marino GP (Imola)",
        "Monaco GP",
        "British GP (Silverstone)",
        "Japanese GP (Suzuka)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2005 San Marino GP at Imola, Fernando Alonso and Michael Schumacher had an intense battle, with Alonso successfully defending from Schumacher's Ferrari to win. This race showcased the changing of the guard as Alonso's Renault challenged Ferrari's dominance.",
        es: "En el GP de San Marino 2005 en Imola, Fernando Alonso y Michael Schumacher tuvieron una batalla intensa, con Alonso defendiéndose exitosamente del Ferrari de Schumacher para ganar. Esta carrera mostró el cambio de guardia mientras el Renault de Alonso desafiaba el dominio de Ferrari.",
        de: "Beim San Marino-GP 2005 in Imola hatten Fernando Alonso und Michael Schumacher einen intensiven Kampf, wobei Alonso erfolgreich gegen Schumachers Ferrari verteidigte und gewann. Dieses Rennen zeigte den Wachablösung, als Alonsos Renault Ferraris Dominanz herausforderte.",
        nl: "Bij de San Marino GP 2005 in Imola hadden Fernando Alonso en Michael Schumacher een intense strijd, waarbij Alonso zich succesvol verdedigde tegen Schumachers Ferrari om te winnen. Deze race toonde de wisseling van de wacht toen Alonso's Renault Ferrari's dominantie uitdaagde."
      }
    },
    {
      question: {
        en: "At which 2016 race did Hamilton slow down in the final laps trying to back Rosberg into rivals?",
        es: "¿En qué carrera de 2016 redujo Hamilton la velocidad en las últimas vueltas tratando de llevar a Rosberg hacia rivales?",
        de: "Bei welchem Rennen 2016 verlangsamte Hamilton in den Schlussrunden, um Rosberg in die Rivalen zurückzudrängen?",
        nl: "Bij welke race in 2016 vertraagde Hamilton in de laatste ronden om Rosberg terug te drijven naar rivalen?"
      },
      options: [
        "Abu Dhabi GP (Yas Marina)",
        "Brazilian GP (Interlagos)",
        "Japanese GP (Suzuka)",
        "Mexican GP"
      ],
      correct: 0,
      explanation: {
        en: "At the 2016 Abu Dhabi GP finale, Lewis Hamilton deliberately slowed the pace while leading, trying to back Nico Rosberg into Vettel and Verstappen so they could pass him. Despite Mercedes' orders to speed up, Hamilton persisted. Rosberg held position and won the championship.",
        es: "En la final del GP de Abu Dhabi 2016, Lewis Hamilton deliberadamente redujo el ritmo mientras lideraba, tratando de llevar a Nico Rosberg hacia Vettel y Verstappen para que pudieran pasarlo. A pesar de las órdenes de Mercedes de acelerar, Hamilton persistió. Rosberg mantuvo la posición y ganó el campeonato.",
        de: "Beim Abu Dhabi-GP-Finale 2016 verlangsamte Lewis Hamilton absichtlich das Tempo in Führung und versuchte, Nico Rosberg in Vettel und Verstappen zurückzudrängen, damit sie ihn überholen konnten. Trotz Mercedes' Anweisungen zu beschleunigen, blieb Hamilton dabei. Rosberg hielt die Position und gewann die Meisterschaft.",
        nl: "Bij de Abu Dhabi GP-finale 2016 vertraagde Lewis Hamilton opzettelijk het tempo terwijl hij leidde, om Nico Rosberg terug te drijven naar Vettel en Verstappen zodat ze hem konden passeren. Ondanks Mercedes' orders om te versnellen, persisteerde Hamilton. Rosberg hield positie en won het kampioenschap."
      }
    },
    {
      question: {
        en: "Which 2023 race saw Norris and Leclerc have an intense multi-lap battle for position?",
        es: "¿En qué carrera de 2023 tuvieron Norris y Leclerc una intensa batalla de múltiples vueltas por posición?",
        de: "Bei welchem Rennen 2023 hatten Norris und Leclerc einen intensiven Mehrundenkampf um die Position?",
        nl: "Bij welke race in 2023 hadden Norris en Leclerc een intense meerdere-ronden strijd om positie?"
      },
      options: [
        "Austrian GP (Spielberg)",
        "British GP (Silverstone)",
        "Italian GP (Monza)",
        "Singapore GP"
      ],
      correct: 0,
      explanation: {
        en: "At the 2023 Austrian GP, Lando Norris and Charles Leclerc had an epic multi-lap wheel-to-wheel battle for position, showcasing clean but intense racing. The battle highlighted the mutual respect between the young drivers and their fierce competitive spirit.",
        es: "En el GP de Austria 2023, Lando Norris y Charles Leclerc tuvieron una épica batalla rueda a rueda de múltiples vueltas por posición, mostrando carreras limpias pero intensas. La batalla destacó el respeto mutuo entre los jóvenes pilotos y su feroz espíritu competitivo.",
        de: "Beim Österreich-GP 2023 hatten Lando Norris und Charles Leclerc einen epischen Mehrunden-Rad-an-Rad-Kampf um die Position, der sauberes aber intensives Rennen zeigte. Der Kampf verdeutlichte den gegenseitigen Respekt zwischen den jungen Fahrern und ihren heftigen Kampfgeist.",
        nl: "Bij de Oostenrijkse GP 2023 hadden Lando Norris en Charles Leclerc een epische meerdere-ronden wiel-aan-wiel strijd om positie, waarbij schoon maar intens racen werd getoond. De strijd benadrukte het wederzijds respect tussen de jonge coureurs en hun felle competitieve geest."
      }
    },
    {
      question: {
        en: "At which 2006 race did Alonso and Schumacher battle for the championship in wet conditions?",
        es: "¿En qué carrera de 2006 lucharon Alonso y Schumacher por el campeonato en condiciones húmedas?",
        de: "Bei welchem Rennen 2006 kämpften Alonso und Schumacher um die Meisterschaft bei nassen Bedingungen?",
        nl: "Bij welke race in 2006 vochten Alonso en Schumacher om het kampioenschap in natte omstandigheden?"
      },
      options: [
        "Japanese GP (Suzuka)",
        "Chinese GP (Shanghai)",
        "Brazilian GP (Interlagos)",
        "Italian GP (Monza)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2006 Japanese GP at Suzuka in wet conditions, Fernando Alonso clinched his second consecutive championship by finishing ahead of Michael Schumacher. The race in the rain showcased Alonso's skill and marked the end of Schumacher's first Ferrari era.",
        es: "En el GP de Japón 2006 en Suzuka en condiciones húmedas, Fernando Alonso aseguró su segundo campeonato consecutivo al terminar delante de Michael Schumacher. La carrera bajo la lluvia mostró la habilidad de Alonso y marcó el final de la primera era de Schumacher en Ferrari.",
        de: "Beim Japan-GP 2006 in Suzuka bei nassen Bedingungen sicherte sich Fernando Alonso seine zweite aufeinanderfolgende Meisterschaft, indem er vor Michael Schumacher ins Ziel kam. Das Regenrennen zeigte Alonsos Können und markierte das Ende von Schumachers erster Ferrari-Ära.",
        nl: "Bij de Japanse GP 2006 in Suzuka in natte omstandigheden behaalde Fernando Alonso zijn tweede opeenvolgende kampioenschap door voor Michael Schumacher te eindigen. De race in de regen toonde Alonso's vaardigheid en markeerde het einde van Schumachers eerste Ferrari-tijdperk."
      }
    },
    {
      question: {
        en: "Which 2004 race saw Barrichello finally allowed to win by Ferrari after team orders controversy?",
        es: "¿En qué carrera de 2004 finalmente se le permitió a Barrichello ganar por Ferrari después de la controversia de órdenes de equipo?",
        de: "Bei welchem Rennen 2004 durfte Barrichello nach der Teamorder-Kontroverse endlich für Ferrari gewinnen?",
        nl: "Bij welke race in 2004 mocht Barrichello eindelijk winnen voor Ferrari na de team orders-controverse?"
      },
      options: [
        "Italian GP (Monza)",
        "Chinese GP (Shanghai)",
        "Brazilian GP (Interlagos)",
        "Belgian GP (Spa)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2004 Italian GP at Monza, Rubens Barrichello was finally allowed to win for Ferrari. In a gesture, Schumacher let Barrichello past on the final lap to repay the infamous 2002 Austrian GP team orders incident. The crowd booed Schumacher for the controversial move.",
        es: "En el GP de Italia 2004 en Monza, finalmente se le permitió a Rubens Barrichello ganar para Ferrari. En un gesto, Schumacher dejó pasar a Barrichello en la última vuelta para compensar el infame incidente de órdenes de equipo del GP de Austria 2002. La multitud abucheó a Schumacher por el movimiento controvertido.",
        de: "Beim Italien-GP 2004 in Monza durfte Rubens Barrichello endlich für Ferrari gewinnen. Als Geste ließ Schumacher Barrichello in der letzten Runde vorbei, um den berüchtigten Teamorder-Vorfall beim Österreich-GP 2002 wiedergutzumachen. Die Menge buhte Schumacher für das kontroverse Manöver aus.",
        nl: "Bij de Italiaanse GP 2004 in Monza mocht Rubens Barrichello eindelijk winnen voor Ferrari. Als gebaar liet Schumacher Barrichello in de laatste ronde passeren om het beruchte team orders-incident van de Oostenrijkse GP 2002 goed te maken. Het publiek joelde Schumacher uit voor de controversiële actie."
      }
    },
    {
      question: {
        en: "At which 2022 race did Pérez ignore Red Bull team orders to let Verstappen through?",
        es: "¿En qué carrera de 2022 ignoró Pérez las órdenes del equipo Red Bull de dejar pasar a Verstappen?",
        de: "Bei welchem Rennen 2022 ignorierte Pérez Red Bulls Teamanweisungen, Verstappen vorbeizulassen?",
        nl: "Bij welke race in 2022 negeerde Pérez Red Bulls teamorders om Verstappen door te laten?"
      },
      options: [
        "Spanish GP (Barcelona)",
        "Monaco GP",
        "Canadian GP (Montreal)",
        "British GP (Silverstone)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2022 Spanish GP, Sergio Pérez initially resisted Red Bull's order to let Max Verstappen through, saying 'No, I'm not letting him by.' Eventually he complied, but the incident showed tension in their partnership despite both racing for championships.",
        es: "En el GP de España 2022, Sergio Pérez inicialmente resistió la orden de Red Bull de dejar pasar a Max Verstappen, diciendo 'No, no lo dejo pasar.' Eventualmente cumplió, pero el incidente mostró tensión en su asociación a pesar de ambos competir por campeonatos.",
        de: "Beim Spanien-GP 2022 widersetzte sich Sergio Pérez zunächst Red Bulls Anweisung, Max Verstappen vorbeizulassen, und sagte 'Nein, ich lasse ihn nicht vorbei.' Schließlich fügte er sich, aber der Vorfall zeigte Spannungen in ihrer Partnerschaft trotz beider Meisterschaftskämpfe.",
        nl: "Bij de Spaanse GP 2022 weerstond Sergio Pérez aanvankelijk Red Bulls order om Max Verstappen door te laten, zeggende 'Nee, ik laat hem niet door.' Uiteindelijk voldeed hij, maar het incident toonde spanning in hun samenwerking ondanks beiden racend voor kampioenschappen."
      }
    },
    {
      question: {
        en: "Which 1999 race saw Häkkinen and Schumacher battle intensely, with Schumacher crashing out?",
        es: "¿En qué carrera de 1999 lucharon intensamente Häkkinen y Schumacher, con Schumacher saliendo por accidente?",
        de: "Bei welchem Rennen 1999 kämpften Häkkinen und Schumacher intensiv, wobei Schumacher ausschied?",
        nl: "Bij welke race in 1999 vochten Häkkinen en Schumacher intens, waarbij Schumacher crashte?"
      },
      options: [
        "British GP (Silverstone)",
        "Monaco GP",
        "Japanese GP (Suzuka)",
        "Italian GP (Monza)"
      ],
      correct: 0,
      explanation: {
        en: "At the 1999 British GP at Silverstone, Mika Häkkinen and Michael Schumacher had an intense battle. Schumacher crashed heavily at Stowe corner while chasing Häkkinen, breaking his leg. This injury forced him to miss several races, affecting the championship battle.",
        es: "En el GP británico 1999 en Silverstone, Mika Häkkinen y Michael Schumacher tuvieron una batalla intensa. Schumacher se estrelló fuertemente en la curva Stowe mientras perseguía a Häkkinen, rompiéndose la pierna. Esta lesión lo obligó a perderse varias carreras, afectando la batalla por el campeonato.",
        de: "Beim britischen GP 1999 in Silverstone hatten Mika Häkkinen und Michael Schumacher einen intensiven Kampf. Schumacher krachte schwer in der Stowe-Kurve, während er Häkkinen verfolgte, und brach sich das Bein. Diese Verletzung zwang ihn, mehrere Rennen zu verpassen, was den Meisterschaftskampf beeinflusste.",
        nl: "Bij de Britse GP 1999 in Silverstone hadden Mika Häkkinen en Michael Schumacher een intense strijd. Schumacher crashte zwaar in de Stowe-bocht terwijl hij Häkkinen achtervolgde, waarbij hij zijn been brak. Deze blessure dwong hem meerdere races te missen, wat de kampioenschapsstrijd beïnvloedde."
      }
    },
    {
      question: {
        en: "At which 2015 race did Hamilton and Rosberg collide at turn 1 on the opening lap?",
        es: "¿En qué carrera de 2015 chocaron Hamilton y Rosberg en la curva 1 en la vuelta de apertura?",
        de: "Bei welchem Rennen 2015 kollidierten Hamilton und Rosberg in Kurve 1 in der ersten Runde?",
        nl: "Bij welke race in 2015 botsten Hamilton en Rosberg in bocht 1 in de openingsronde?"
      },
      options: [
        "Austrian GP (Spielberg)",
        "Spanish GP (Barcelona)",
        "Monaco GP",
        "Hungarian GP"
      ],
      correct: 0,
      explanation: {
        en: "At the 2015 Austrian GP, Lewis Hamilton and Nico Rosberg collided at turn 1 on lap 1 while battling for the lead. Both Mercedes continued, but Rosberg had damage and later retired. Hamilton won the race, extending his championship lead.",
        es: "En el GP de Austria 2015, Lewis Hamilton y Nico Rosberg chocaron en la curva 1 en la vuelta 1 mientras luchaban por el liderazgo. Ambos Mercedes continuaron, pero Rosberg tenía daños y luego se retiró. Hamilton ganó la carrera, extendiendo su ventaja en el campeonato.",
        de: "Beim Österreich-GP 2015 kollidierten Lewis Hamilton und Nico Rosberg in Runde 1 in Kurve 1 im Kampf um die Führung. Beide Mercedes fuhren weiter, aber Rosberg hatte Schäden und gab später auf. Hamilton gewann das Rennen und baute seine Meisterschaftsführung aus.",
        nl: "Bij de Oostenrijkse GP 2015 botsten Lewis Hamilton en Nico Rosberg in bocht 1 in ronde 1 terwijl ze vochten om de leiding. Beide Mercedes reden door, maar Rosberg had schade en viel later uit. Hamilton won de race en breidde zijn kampioenschapsvoorsprong uit."
      }
    },
    {
      question: {
        en: "Which 2010 race saw Alonso and Petrov battle in the closing stages, costing Alonso the championship?",
        es: "¿En qué carrera de 2010 lucharon Alonso y Petrov en las etapas finales, costándole el campeonato a Alonso?",
        de: "Bei welchem Rennen 2010 kämpften Alonso und Petrov in den Schlussphase, was Alonso die Meisterschaft kostete?",
        nl: "Bij welke race in 2010 vochten Alonso en Petrov in de slotfase, wat Alonso het kampioenschap kostte?"
      },
      options: [
        "Abu Dhabi GP (Yas Marina)",
        "Brazilian GP (Interlagos)",
        "Korean GP (Yeongam)",
        "Japanese GP (Suzuka)"
      ],
      correct: 0,
      explanation: {
        en: "At the 2010 Abu Dhabi GP finale, Fernando Alonso was stuck behind Vitaly Petrov's Renault and couldn't pass despite being faster. This allowed Sebastian Vettel to win the race and championship. Alonso's inability to overtake Petrov cost him the title.",
        es: "En la final del GP de Abu Dhabi 2010, Fernando Alonso quedó atrapado detrás del Renault de Vitaly Petrov y no pudo pasar a pesar de ser más rápido. Esto permitió a Sebastian Vettel ganar la carrera y el campeonato. La incapacidad de Alonso para adelantar a Petrov le costó el título.",
        de: "Beim Abu Dhabi-GP-Finale 2010 steckte Fernando Alonso hinter Vitaly Petrovs Renault fest und konnte trotz höherer Geschwindigkeit nicht überholen. Dies ermöglichte Sebastian Vettel, das Rennen und die Meisterschaft zu gewinnen. Alonsos Unfähigkeit, Petrov zu überholen, kostete ihn den Titel.",
        nl: "Bij de Abu Dhabi GP-finale 2010 zat Fernando Alonso vast achter Vitaly Petrov's Renault en kon niet passeren ondanks sneller te zijn. Dit stelde Sebastian Vettel in staat de race en het kampioenschap te winnen. Alonso's onvermogen om Petrov in te halen kostte hem de titel."
      }
    }
  ];

  return {
    name: {
      en: "Rivaliteiten Level 3",
      es: "Rivaliteiten Nivel 3",
      de: "Rivaliteiten Stufe 3",
      nl: "Rivaliteiten Level 3"
    },
    questions: questions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level3;
} else if (typeof window !== 'undefined') {
  window.level3 = level3;
}
