const level9 = (function() {
  const questions = [
    {
      question: {
        en: "At which 1957 race did Fangio execute his legendary comeback drive to win by 3.6 seconds?",
        es: "¿En qué carrera de 1957 Fangio ejecutó su legendaria remontada para ganar por 3.6 segundos?",
        de: "Bei welchem Rennen 1957 führte Fangio seine legendäre Aufholjagd durch um mit 3,6 Sekunden zu gewinnen?",
        nl: "Bij welke race van 1957 voerde Fangio zijn legendarische inhaalrace uit om met 3,6 seconden te winnen?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "French Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Fangio's legendary 1957 German GP drive at the Nürburgring saw him make up 48 seconds after a pit stop, setting lap records to pass the Ferraris and win his 5th title.",
        es: "La legendaria actuación de Fangio en el GP de Alemania de 1957 en el Nürburgring lo vio recuperar 48 segundos después de una parada en boxes, estableciendo récords de vuelta para pasar a los Ferraris y ganar su 5º título.",
        de: "Fangios legendäre Fahrt beim Deutschland GP 1957 am Nürburgring sah ihn 48 Sekunden nach einem Boxenstopp aufholen, stellte Rundenrekorde auf um die Ferraris zu überholen und seinen 5. Titel zu gewinnen.",
        nl: "Fangio's legendarische rit bij de Duitse GP van 1957 op de Nürburgring zag hem 48 seconden inhalen na een pitstop, vestigde rondetijden om de Ferrari's te passeren en zijn 5e titel te winnen."
      }
    },
    {
      question: {
        en: "Which 1950 race saw Giuseppe Farina secure the first-ever F1 World Championship?",
        es: "¿Qué carrera de 1950 vio a Giuseppe Farina asegurar el primer Campeonato Mundial de F1?",
        de: "Welches Rennen 1950 sah Giuseppe Farina die allererste F1-Weltmeisterschaft sichern?",
        nl: "Welke race van 1950 zag Giuseppe Farina het allereerste F1 Wereldkampioenschap veiligstellen?"
      },
      options: [
        "Swiss Grand Prix",
        "Italian Grand Prix",
        "British Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Giuseppe Farina won the 1950 Italian GP at Monza to clinch the inaugural F1 World Championship, beating teammates Fangio and Fagioli in the Alfa Romeo 158.",
        es: "Giuseppe Farina ganó el GP de Italia de 1950 en Monza para asegurar el Campeonato Mundial inaugural de F1, venciendo a sus compañeros Fangio y Fagioli en el Alfa Romeo 158.",
        de: "Giuseppe Farina gewann den Italien GP 1950 in Monza um die erste F1-Weltmeisterschaft zu sichern, schlug Teamkollegen Fangio und Fagioli im Alfa Romeo 158.",
        nl: "Giuseppe Farina won de Italiaanse GP van 1950 in Monza om het inaugurele F1 Wereldkampioenschap veilig te stellen, versloeg teamgenoten Fangio en Fagioli in de Alfa Romeo 158."
      }
    },
    {
      question: {
        en: "At which 1965 race did Jackie Stewart make his F1 debut and finish on the podium?",
        es: "¿En qué carrera de 1965 Jackie Stewart hizo su debut en F1 y terminó en el podio?",
        de: "Bei welchem Rennen 1965 gab Jackie Stewart sein F1-Debüt und erreichte das Podium?",
        nl: "Bij welke race van 1965 maakte Jackie Stewart zijn F1-debuut en eindigde op het podium?"
      },
      options: [
        "Monaco Grand Prix",
        "South African Grand Prix",
        "Dutch Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jackie Stewart finished 6th on debut at the 1965 South African GP, then scored his first podium (3rd) at the next race in Monaco, announcing his arrival in F1.",
        es: "Jackie Stewart terminó 6º en su debut en el GP de Sudáfrica de 1965, luego logró su primer podio (3º) en la siguiente carrera en Mónaco, anunciando su llegada a F1.",
        de: "Jackie Stewart wurde bei seinem Debüt beim Südafrika GP 1965 Sechster, dann erzielte er sein erstes Podium (3.) beim nächsten Rennen in Monaco und kündigte seine Ankunft in der F1 an.",
        nl: "Jackie Stewart eindigde als 6e bij zijn debuut in de Zuid-Afrikaanse GP van 1965, behaalde toen zijn eerste podium (3e) bij de volgende race in Monaco, kondigde zijn aankomst in F1 aan."
      }
    },
    {
      question: {
        en: "Which 1982 race saw Keke Rosberg win for Williams despite scoring only one victory that season?",
        es: "¿Qué carrera de 1982 vio a Keke Rosberg ganar para Williams a pesar de lograr solo una victoria esa temporada?",
        de: "Welches Rennen 1982 sah Keke Rosberg für Williams gewinnen trotz nur einem Sieg dieser Saison?",
        nl: "Welke race van 1982 zag Keke Rosberg winnen voor Williams ondanks slechts één overwinning dat seizoen?"
      },
      options: [
        "Monaco Grand Prix",
        "Swiss Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Keke Rosberg won the 1982 Swiss Grand Prix at Dijon, his only victory en route to winning the championship with just one win, showcasing consistency in a chaotic season.",
        es: "Keke Rosberg ganó el Gran Premio de Suiza de 1982 en Dijon, su única victoria en camino a ganar el campeonato con solo una victoria, mostrando consistencia en una temporada caótica.",
        de: "Keke Rosberg gewann den Schweizer GP 1982 in Dijon, sein einziger Sieg auf dem Weg zum Meisterschaftsgewinn mit nur einem Sieg, zeigte Konstanz in einer chaotischen Saison.",
        nl: "Keke Rosberg won de Zwitserse Grand Prix van 1982 in Dijon, zijn enige overwinning op weg naar het winnen van het kampioenschap met slechts één overwinning, toonde consistentie in een chaotisch seizoen."
      }
    },
    {
      question: {
        en: "At which 1996 race did Olivier Panis win for Ligier in torrential rain?",
        es: "¿En qué carrera de 1996 ganó Olivier Panis para Ligier bajo lluvia torrencial?",
        de: "Bei welchem Rennen 1996 gewann Olivier Panis für Ligier bei strömenden Regen?",
        nl: "Bij welke race van 1996 won Olivier Panis voor Ligier in zware regen?"
      },
      options: [
        "Belgian Grand Prix",
        "Spanish Grand Prix",
        "Monaco Grand Prix",
        "Brazilian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Olivier Panis won the chaotic 1996 Monaco GP in torrential rain for Ligier, only 3 cars finished the race, giving Ligier their last-ever F1 victory.",
        es: "Olivier Panis ganó el caótico GP de Mónaco de 1996 bajo lluvia torrencial para Ligier, solo 3 coches terminaron la carrera, dando a Ligier su última victoria en F1.",
        de: "Olivier Panis gewann den chaotischen Monaco GP 1996 bei strömenden Regen für Ligier, nur 3 Autos beendeten das Rennen, gab Ligier seinen letzten F1-Sieg.",
        nl: "Olivier Panis won de chaotische GP van Monaco 1996 in zware regen voor Ligier, slechts 3 auto's finishten de race, gaf Ligier hun laatste F1-overwinning ooit."
      }
    },
    {
      question: {
        en: "Which 1988 race did Ayrton Senna win despite crashing while lapping backmarkers with a huge lead?",
        es: "¿Qué carrera de 1988 ganó Ayrton Senna a pesar de estrellarse mientras doblaba rezagados con una gran ventaja?",
        de: "Welches Rennen 1988 gewann Ayrton Senna trotz Crash beim Überrunden von Hinterbänklern mit großem Vorsprung?",
        nl: "Welke race van 1988 won Ayrton Senna ondanks crashen terwijl hij achterblijvers rondde met een grote voorsprong?"
      },
      options: [
        "Monaco Grand Prix",
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "Portuguese Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Senna crashed at Portier while leading the 1988 Monaco GP by 50 seconds, handing victory to Prost. It was one of Senna's most painful defeats, he walked home crying.",
        es: "Senna se estrelló en Portier mientras lideraba el GP de Mónaco de 1988 por 50 segundos, entregando la victoria a Prost. Fue una de las derrotas más dolorosas de Senna, caminó a casa llorando.",
        de: "Senna crashte in Portier während er den Monaco GP 1988 mit 50 Sekunden Vorsprung führte, übergab den Sieg an Prost. Es war eine von Sennas schmerzhaftesten Niederlagen, er ging weinend nach Hause.",
        nl: "Senna crashte bij Portier terwijl hij de GP van Monaco 1988 leidde met 50 seconden voorsprong, gaf de overwinning aan Prost. Het was een van Senna's pijnlijkste nederlagen, hij liep huilend naar huis."
      }
    },
    {
      question: {
        en: "At which 1981 race did Carlos Reutemann lose the championship despite leading most of the season?",
        es: "¿En qué carrera de 1981 Carlos Reutemann perdió el campeonato a pesar de liderar la mayor parte de la temporada?",
        de: "Bei welchem Rennen 1981 verlor Carlos Reutemann die Meisterschaft trotz Führung den Großteil der Saison?",
        nl: "Bij welke race van 1981 verloor Carlos Reutemann het kampioenschap ondanks het leiden van het grootste deel van het seizoen?"
      },
      options: [
        "Canadian Grand Prix",
        "Las Vegas Grand Prix",
        "Monaco Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "At the 1981 Las Vegas GP finale, Reutemann mysteriously faded to 8th when 5th would have won the title, allowing Piquet to clinch the championship with 5th place.",
        es: "En la final del GP de Las Vegas de 1981, Reutemann misteriosamente se desvaneció a 8º cuando 5º habría ganado el título, permitiendo a Piquet asegurar el campeonato con 5º lugar.",
        de: "Beim Las Vegas GP Finale 1981 fiel Reutemann mysteriös auf Platz 8 zurück als Fünfter den Titel gewonnen hätte, erlaubte Piquet mit Platz 5 die Meisterschaft zu sichern.",
        nl: "Bij de Las Vegas GP finale van 1981 viel Reutemann mysterieus terug naar 8e terwijl 5e de titel had gewonnen, stelde Piquet in staat het kampioenschap veilig te stellen met 5e plaats."
      }
    },
    {
      question: {
        en: "Which 1970 race saw Jochen Rindt posthumously crowned World Champion after his fatal crash earlier in the season?",
        es: "¿Qué carrera de 1970 vio a Jochen Rindt coronado póstumamente Campeón Mundial después de su accidente fatal antes en la temporada?",
        de: "Welches Rennen 1970 sah Jochen Rindt posthum zum Weltmeister gekrönt nach seinem tödlichen Unfall früher in der Saison?",
        nl: "Welke race van 1970 zag Jochen Rindt postuum tot Wereldkampioen gekroond na zijn fatale crash eerder in het seizoen?"
      },
      options: [
        "Italian Grand Prix",
        "United States Grand Prix",
        "Mexican Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "After Rindt's fatal Monza crash, his championship was secured when rivals couldn't catch his points total by the 1970 US GP, making him F1's only posthumous champion.",
        es: "Después del accidente fatal de Rindt en Monza, su campeonato se aseguró cuando los rivales no pudieron alcanzar su total de puntos en el GP de EE.UU. de 1970, haciéndolo el único campeón póstumo de F1.",
        de: "Nach Rindts tödlichem Monza-Unfall wurde seine Meisterschaft gesichert als Rivalen beim US GP 1970 seine Punktzahl nicht einholen konnten, machte ihn zu F1s einzigem posthumem Champion.",
        nl: "Na Rindt's fatale Monza-crash werd zijn kampioenschap veiliggesteld toen rivalen zijn punten totaal niet konden inhalen bij de US GP van 1970, maakte hem F1's enige postume kampioen."
      }
    },
    {
      question: {
        en: "At which 1994 race did Damon Hill almost catch Michael Schumacher in the championship before Adelaide?",
        es: "¿En qué carrera de 1994 Damon Hill casi alcanzó a Michael Schumacher en el campeonato antes de Adelaide?",
        de: "Bei welchem Rennen 1994 holte Damon Hill Michael Schumacher in der Meisterschaft fast ein vor Adelaide?",
        nl: "Bij welke race van 1994 haalde Damon Hill Michael Schumacher bijna in in het kampioenschap voor Adelaide?"
      },
      options: [
        "European Grand Prix",
        "Japanese Grand Prix",
        "Portuguese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Damon Hill won the 1994 Japanese GP to close to within 1 point of Schumacher, setting up the dramatic and controversial Adelaide finale where they collided.",
        es: "Damon Hill ganó el GP de Japón de 1994 para acercarse a 1 punto de Schumacher, preparando el dramático y controvertido final de Adelaide donde chocaron.",
        de: "Damon Hill gewann den Japan GP 1994 um auf 1 Punkt an Schumacher heranzukommen, bereitete das dramatische und umstrittene Adelaide-Finale vor wo sie kollidierten.",
        nl: "Damon Hill won de Japanse GP van 1994 om tot binnen 1 punt van Schumacher te komen, zette de dramatische en controversiële Adelaide finale op waarin ze botsten."
      }
    },
    {
      question: {
        en: "Which 1976 race did Niki Lauda heroically return to just 6 weeks after his near-fatal Nürburgring crash?",
        es: "¿En qué carrera de 1976 Niki Lauda regresó heroicamente solo 6 semanas después de su casi fatal accidente en Nürburgring?",
        de: "Bei welchem Rennen 1976 kehrte Niki Lauda heroisch nur 6 Wochen nach seinem fast tödlichen Nürburgring-Unfall zurück?",
        nl: "Bij welke race van 1976 keerde Niki Lauda heldhaftig terug slechts 6 weken na zijn bijna fatale Nürburgring-crash?"
      },
      options: [
        "Austrian Grand Prix",
        "Dutch Grand Prix",
        "Italian Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Niki Lauda returned at the 1976 Italian GP just 42 days after his horrific fiery crash, finishing 4th despite severe burns and barely healed wounds in an act of incredible bravery.",
        es: "Niki Lauda regresó en el GP de Italia de 1976 solo 42 días después de su horrible accidente con fuego, terminando 4º a pesar de quemaduras graves y heridas apenas sanadas en un acto de increíble valentía.",
        de: "Niki Lauda kehrte beim Italien GP 1976 nur 42 Tage nach seinem schrecklichen Feuerunfall zurück, wurde Vierter trotz schwerer Verbrennungen und kaum verheilter Wunden in einem Akt unglaublicher Tapferkeit.",
        nl: "Niki Lauda keerde terug bij de Italiaanse GP van 1976 slechts 42 dagen na zijn verschrikkelijke brandende crash, eindigde als 4e ondanks ernstige brandwonden en nauwelijks genezen wonden in een daad van ongelooflijke moed."
      }
    },
    {
      question: {
        en: "At which 2008 race did Lewis Hamilton win his first World Championship in the final corner of the final lap?",
        es: "¿En qué carrera de 2008 Lewis Hamilton ganó su primer Campeonato Mundial en la última curva de la última vuelta?",
        de: "Bei welchem Rennen 2008 gewann Lewis Hamilton seine erste Weltmeisterschaft in der letzten Kurve der letzten Runde?",
        nl: "Bij welke race van 2008 won Lewis Hamilton zijn eerste Wereldkampioenschap in de laatste bocht van de laatste ronde?"
      },
      options: [
        "Chinese Grand Prix",
        "Brazilian Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Hamilton passed Glock in the final corner of the 2008 Brazilian GP to finish 5th, snatching the championship from Massa by 1 point in the most dramatic finale ever.",
        es: "Hamilton pasó a Glock en la última curva del GP de Brasil de 2008 para terminar 5º, arrebatando el campeonato a Massa por 1 punto en el final más dramático de la historia.",
        de: "Hamilton überholte Glock in der letzten Kurve des Brasilien GP 2008 um Fünfter zu werden, entriss Massa die Meisterschaft mit 1 Punkt im dramatischsten Finale aller Zeiten.",
        nl: "Hamilton passeerde Glock in de laatste bocht van de Braziliaanse GP van 2008 om 5e te worden, greep het kampioenschap van Massa met 1 punt in de meest dramatische finale ooit."
      }
    },
    {
      question: {
        en: "Which 1986 race saw three drivers able to win the championship entering the final round?",
        es: "¿Qué carrera de 1986 vio a tres pilotos capaces de ganar el campeonato entrando en la ronda final?",
        de: "Welches Rennen 1986 hatte drei Fahrer die die Meisterschaft gewinnen konnten beim Eintritt in die Finalrunde?",
        nl: "Welke race van 1986 had drie coureurs die het kampioenschap konden winnen bij aanvang van de finale ronde?"
      },
      options: [
        "Portuguese Grand Prix",
        "Mexican Grand Prix",
        "Australian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "At the 1986 Australian GP, Mansell, Piquet and Prost all had championship chances. Mansell's tire exploded, Piquet crashed, Prost won the race and his 2nd title.",
        es: "En el GP de Australia de 1986, Mansell, Piquet y Prost todos tenían posibilidades de campeonato. El neumático de Mansell explotó, Piquet se estrelló, Prost ganó la carrera y su 2º título.",
        de: "Beim Australien GP 1986 hatten Mansell, Piquet und Prost alle Meisterschaftschancen. Mansells Reifen explodierte, Piquet crashte, Prost gewann das Rennen und seinen 2. Titel.",
        nl: "Bij de Australische GP van 1986 hadden Mansell, Piquet en Prost allen kampioenschapskansen. Mansell's band explodeerde, Piquet crashte, Prost won de race en zijn 2e titel."
      }
    },
    {
      question: {
        en: "At which 1999 race did Eddie Irvine lose the championship by 2 points to Mika Häkkinen?",
        es: "¿En qué carrera de 1999 Eddie Irvine perdió el campeonato por 2 puntos ante Mika Häkkinen?",
        de: "Bei welchem Rennen 1999 verlor Eddie Irvine die Meisterschaft mit 2 Punkten an Mika Häkkinen?",
        nl: "Bij welke race van 1999 verloor Eddie Irvine het kampioenschap met 2 punten aan Mika Häkkinen?"
      },
      options: [
        "Malaysian Grand Prix",
        "European Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Eddie Irvine finished 3rd at the 1999 Japanese GP finale, losing the championship to Häkkinen by 2 points after carrying Ferrari's hopes during Schumacher's injury absence.",
        es: "Eddie Irvine terminó 3º en la final del GP de Japón de 1999, perdiendo el campeonato ante Häkkinen por 2 puntos después de llevar las esperanzas de Ferrari durante la ausencia de Schumacher por lesión.",
        de: "Eddie Irvine wurde beim Japan GP Finale 1999 Dritter, verlor die Meisterschaft an Häkkinen mit 2 Punkten nachdem er Ferraris Hoffnungen während Schumachers Verletzungspause trug.",
        nl: "Eddie Irvine eindigde als 3e in de Japanse GP finale van 1999, verloor het kampioenschap aan Häkkinen met 2 punten na het dragen van Ferrari's hoop tijdens Schumacher's blessure-afwezigheid."
      }
    },
    {
      question: {
        en: "Which 2010 race saw Sebastian Vettel win the championship from 4th entering the final race?",
        es: "¿Qué carrera de 2010 vio a Sebastian Vettel ganar el campeonato desde 4º entrando en la carrera final?",
        de: "Welches Rennen 2010 sah Sebastian Vettel die Meisterschaft von Platz 4 aus gewinnen beim Eintritt ins Finalrennen?",
        nl: "Welke race van 2010 zag Sebastian Vettel het kampioenschap winnen vanaf 4e bij aanvang van de finale race?"
      },
      options: [
        "Korean Grand Prix",
        "Japanese Grand Prix",
        "Abu Dhabi Grand Prix",
        "Brazilian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "At the 2010 Abu Dhabi GP, Vettel won while Ferrari's poor strategy ruined Alonso's race, allowing Vettel to leapfrog from 4th to become F1's youngest champion at 23.",
        es: "En el GP de Abu Dhabi de 2010, Vettel ganó mientras la mala estrategia de Ferrari arruinó la carrera de Alonso, permitiendo a Vettel saltar del 4º para convertirse en el campeón más joven de F1 a los 23.",
        de: "Beim Abu Dhabi GP 2010 gewann Vettel während Ferraris schlechte Strategie Alonsos Rennen ruinierte, erlaubte Vettel von Platz 4 zu springen um mit 23 jüngster F1-Champion zu werden.",
        nl: "Bij de Abu Dhabi GP van 2010 won Vettel terwijl Ferrari's slechte strategie Alonso's race verpestte, stelde Vettel in staat van 4e te springen om F1's jongste kampioen te worden op 23."
      }
    },
    {
      question: {
        en: "At which 2012 race did Sebastian Vettel recover from a first-lap spin to win the championship?",
        es: "¿En qué carrera de 2012 Sebastian Vettel se recuperó de un trompo de primera vuelta para ganar el campeonato?",
        de: "Bei welchem Rennen 2012 erholte sich Sebastian Vettel von einem Ersten-Runden-Dreher um die Meisterschaft zu gewinnen?",
        nl: "Bij welke race van 2012 herstelde Sebastian Vettel zich van een eerste ronde spin om het kampioenschap te winnen?"
      },
      options: [
        "United States Grand Prix",
        "Brazilian Grand Prix",
        "Abu Dhabi Grand Prix",
        "Indian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "At the 2012 Brazilian GP, Vettel was hit on lap 1 and spun, recovered to 6th to beat Alonso by 3 points for his 3rd consecutive championship in dramatic fashion.",
        es: "En el GP de Brasil de 2012, Vettel fue golpeado en la vuelta 1 y giró, se recuperó a 6º para vencer a Alonso por 3 puntos para su 3er campeonato consecutivo de manera dramática.",
        de: "Beim Brasilien GP 2012 wurde Vettel in Runde 1 getroffen und drehte sich, erholte sich auf Platz 6 um Alonso mit 3 Punkten zu schlagen für seine 3. aufeinanderfolgende Meisterschaft auf dramatische Weise.",
        nl: "Bij de Braziliaanse GP van 2012 werd Vettel geraakt in ronde 1 en spinde, herstelde naar 6e om Alonso met 3 punten te verslaan voor zijn 3e opeenvolgende kampioenschap op dramatische wijze."
      }
    },
    {
      question: {
        en: "Which 2021 race saw Max Verstappen and Lewis Hamilton collide while battling for the championship?",
        es: "¿Qué carrera de 2021 vio a Max Verstappen y Lewis Hamilton chocar mientras luchaban por el campeonato?",
        de: "Welches Rennen 2021 sah Max Verstappen und Lewis Hamilton kollidieren während des Kampfes um die Meisterschaft?",
        nl: "Welke race van 2021 zag Max Verstappen en Lewis Hamilton botsen terwijl ze vochten om het kampioenschap?"
      },
      options: [
        "British Grand Prix",
        "Italian Grand Prix",
        "Saudi Arabian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "At the 2021 Italian GP, Verstappen and Hamilton collided at Turn 1 after a slow pit stop, both retiring with Verstappen's Red Bull landing on Hamilton's Mercedes halo.",
        es: "En el GP de Italia de 2021, Verstappen y Hamilton chocaron en la Curva 1 después de una parada lenta en boxes, ambos retirándose con el Red Bull de Verstappen aterrizando sobre el halo del Mercedes de Hamilton.",
        de: "Beim Italien GP 2021 kollidierten Verstappen und Hamilton in Kurve 1 nach einem langsamen Boxenstopp, beide schieden aus als Verstappens Red Bull auf Hamiltons Mercedes-Halo landete.",
        nl: "Bij de Italiaanse GP van 2021 botsten Verstappen en Hamilton in bocht 1 na een langzame pitstop, beiden vielen uit met Verstappen's Red Bull die op Hamilton's Mercedes halo landde."
      }
    },
    {
      question: {
        en: "At which 2016 race did Nico Rosberg clinch his championship before retiring 5 days later?",
        es: "¿En qué carrera de 2016 Nico Rosberg aseguró su campeonato antes de retirarse 5 días después?",
        de: "Bei welchem Rennen 2016 sicherte Nico Rosberg seine Meisterschaft bevor er 5 Tage später zurücktrat?",
        nl: "Bij welke race van 2016 stelde Nico Rosberg zijn kampioenschap veilig voordat hij 5 dagen later stopte?"
      },
      options: [
        "Brazilian Grand Prix",
        "Mexican Grand Prix",
        "Abu Dhabi Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Rosberg finished 2nd at the 2016 Abu Dhabi GP to beat Hamilton by 5 points for his only championship, then shocked the world by retiring 5 days later.",
        es: "Rosberg terminó 2º en el GP de Abu Dhabi de 2016 para vencer a Hamilton por 5 puntos para su único campeonato, luego conmocionó al mundo al retirarse 5 días después.",
        de: "Rosberg wurde beim Abu Dhabi GP 2016 Zweiter um Hamilton mit 5 Punkten für seine einzige Meisterschaft zu schlagen, schockierte dann die Welt indem er 5 Tage später zurücktrat.",
        nl: "Rosberg eindigde als 2e in de Abu Dhabi GP van 2016 om Hamilton met 5 punten te verslaan voor zijn enige kampioenschap, schokte toen de wereld door 5 dagen later te stoppen."
      }
    },
    {
      question: {
        en: "Which 1964 race decided the championship between Surtees, Hill and Clark on the final lap?",
        es: "¿Qué carrera de 1964 decidió el campeonato entre Surtees, Hill y Clark en la última vuelta?",
        de: "Welches Rennen 1964 entschied die Meisterschaft zwischen Surtees, Hill und Clark in der letzten Runde?",
        nl: "Welke race van 1964 besliste het kampioenschap tussen Surtees, Hill en Clark in de laatste ronde?"
      },
      options: [
        "Italian Grand Prix",
        "United States Grand Prix",
        "Mexican Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "At the 1964 Mexican GP, Surtees, Hill and Clark all had championship chances. Bandini let Surtees through for 2nd, Surtees won the title by 1 point in F1's closest 3-way finale.",
        es: "En el GP de México de 1964, Surtees, Hill y Clark todos tenían posibilidades de campeonato. Bandini dejó pasar a Surtees al 2º, Surtees ganó el título por 1 punto en el final de 3 vías más cerrado de F1.",
        de: "Beim Mexiko GP 1964 hatten Surtees, Hill und Clark alle Meisterschaftschancen. Bandini ließ Surtees auf Platz 2 vorbei, Surtees gewann den Titel mit 1 Punkt im knappsten 3-Wege-Finale der F1.",
        nl: "Bij de Mexicaanse GP van 1964 hadden Surtees, Hill en Clark allen kampioenschapskansen. Bandini liet Surtees door naar 2e, Surtees won de titel met 1 punt in F1's nauwste 3-weg finale."
      }
    },
    {
      question: {
        en: "At which 2007 race did Kimi Räikkönen snatch the championship from Hamilton and Alonso in the final race?",
        es: "¿En qué carrera de 2007 Kimi Räikkönen arrebató el campeonato a Hamilton y Alonso en la carrera final?",
        de: "Bei welchem Rennen 2007 entriss Kimi Räikkönen Hamilton und Alonso die Meisterschaft im Finalrennen?",
        nl: "Bij welke race van 2007 greep Kimi Räikkönen het kampioenschap van Hamilton en Alonso in de finale race?"
      },
      options: [
        "Japanese Grand Prix",
        "Chinese Grand Prix",
        "Brazilian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Räikkönen won the 2007 Brazilian GP while Hamilton's gearbox issues dropped him to 7th, allowing Räikkönen to win the championship by 1 point in a dramatic turnaround.",
        es: "Räikkönen ganó el GP de Brasil de 2007 mientras los problemas de caja de cambios de Hamilton lo dejaron 7º, permitiendo a Räikkönen ganar el campeonato por 1 punto en un cambio dramático.",
        de: "Räikkönen gewann den Brasilien GP 2007 während Hamiltons Getriebeprobleme ihn auf Platz 7 fallen ließen, erlaubte Räikkönen die Meisterschaft mit 1 Punkt in einer dramatischen Wende zu gewinnen.",
        nl: "Räikkönen won de Braziliaanse GP van 2007 terwijl Hamilton's versnellingsbakproblemen hem naar 7e lieten vallen, stelde Räikkönen in staat het kampioenschap met 1 punt te winnen in een dramatische ommekeer."
      }
    },
    {
      question: {
        en: "Which 1997 race saw Jacques Villeneuve win the championship after Schumacher's deliberate crash attempt failed?",
        es: "¿Qué carrera de 1997 vio a Jacques Villeneuve ganar el campeonato después de que el intento de choque deliberado de Schumacher fallara?",
        de: "Welches Rennen 1997 sah Jacques Villeneuve die Meisterschaft gewinnen nachdem Schumachers absichtlicher Crash-Versuch scheiterte?",
        nl: "Welke race van 1997 zag Jacques Villeneuve het kampioenschap winnen nadat Schumacher's opzettelijke crash poging faalde?"
      },
      options: [
        "Japanese Grand Prix",
        "Luxembourg Grand Prix",
        "European Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "At the 1997 European GP at Jerez, Schumacher deliberately tried to crash into Villeneuve but failed, Villeneuve finished 3rd to win the championship, Schumacher was excluded from standings.",
        es: "En el GP de Europa de 1997 en Jerez, Schumacher deliberadamente intentó chocar contra Villeneuve pero falló, Villeneuve terminó 3º para ganar el campeonato, Schumacher fue excluido de la clasificación.",
        de: "Beim Europa GP 1997 in Jerez versuchte Schumacher absichtlich in Villeneuve zu crashen scheiterte aber, Villeneuve wurde Dritter um die Meisterschaft zu gewinnen, Schumacher wurde aus der Wertung ausgeschlossen.",
        nl: "Bij de Europese GP van 1997 in Jerez probeerde Schumacher opzettelijk in Villeneuve te crashen maar faalde, Villeneuve eindigde als 3e om het kampioenschap te winnen, Schumacher werd uitgesloten van de stand."
      }
    },
    {
      question: {
        en: "At which 1976 race did James Hunt win the championship after Lauda withdrew in dangerous rain?",
        es: "¿En qué carrera de 1976 James Hunt ganó el campeonato después de que Lauda se retirara por lluvia peligrosa?",
        de: "Bei welchem Rennen 1976 gewann James Hunt die Meisterschaft nachdem Lauda bei gefährlichem Regen aufgab?",
        nl: "Bij welke race van 1976 won James Hunt het kampioenschap nadat Lauda zich terugtrok bij gevaarlijke regen?"
      },
      options: [
        "Canadian Grand Prix",
        "United States Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "At the 1976 Japanese GP at Fuji, Lauda withdrew after 2 laps in torrential rain, Hunt finished 3rd to win the championship by 1 point in one of F1's most dramatic title fights.",
        es: "En el GP de Japón de 1976 en Fuji, Lauda se retiró después de 2 vueltas bajo lluvia torrencial, Hunt terminó 3º para ganar el campeonato por 1 punto en una de las luchas de título más dramáticas de F1.",
        de: "Beim Japan GP 1976 in Fuji zog sich Lauda nach 2 Runden bei strömenden Regen zurück, Hunt wurde Dritter um die Meisterschaft mit 1 Punkt zu gewinnen in einem der dramatischsten Titelkämpfe der F1.",
        nl: "Bij de Japanse GP van 1976 in Fuji trok Lauda zich terug na 2 ronden in zware regen, Hunt eindigde als 3e om het kampioenschap met 1 punt te winnen in een van F1's meest dramatische titelgevechten."
      }
    },
    {
      question: {
        en: "Which 1958 race saw Mike Hawthorn win the championship despite winning only one race all season?",
        es: "¿Qué carrera de 1958 vio a Mike Hawthorn ganar el campeonato a pesar de ganar solo una carrera en toda la temporada?",
        de: "Welches Rennen 1958 sah Mike Hawthorn die Meisterschaft gewinnen trotz nur einem Rennsieg die ganze Saison?",
        nl: "Welke race van 1958 zag Mike Hawthorn het kampioenschap winnen ondanks slechts één race overwinning het hele seizoen?"
      },
      options: [
        "Italian Grand Prix",
        "Portuguese Grand Prix",
        "Moroccan Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Mike Hawthorn finished 2nd at the 1958 Moroccan GP to beat Stirling Moss by 1 point for the championship, despite Moss winning 4 races to Hawthorn's 1 win.",
        es: "Mike Hawthorn terminó 2º en el GP de Marruecos de 1958 para vencer a Stirling Moss por 1 punto por el campeonato, a pesar de que Moss ganó 4 carreras contra 1 victoria de Hawthorn.",
        de: "Mike Hawthorn wurde beim Marokko GP 1958 Zweiter um Stirling Moss mit 1 Punkt für die Meisterschaft zu schlagen, trotz Moss' 4 Rennsiegen zu Hawthorns 1 Sieg.",
        nl: "Mike Hawthorn eindigde als 2e in de Marokkaanse GP van 1958 om Stirling Moss met 1 punt te verslaan voor het kampioenschap, ondanks Moss' 4 raceoverwinningen tegen Hawthorn's 1 overwinning."
      }
    },
    {
      question: {
        en: "At which 2021 race did Max Verstappen win his first championship on the final lap in controversial circumstances?",
        es: "¿En qué carrera de 2021 Max Verstappen ganó su primer campeonato en la última vuelta en circunstancias controvertidas?",
        de: "Bei welchem Rennen 2021 gewann Max Verstappen seine erste Meisterschaft in der letzten Runde unter umstrittenen Umständen?",
        nl: "Bij welke race van 2021 won Max Verstappen zijn eerste kampioenschap in de laatste ronde onder controversiële omstandigheden?"
      },
      options: [
        "Saudi Arabian Grand Prix",
        "Brazilian Grand Prix",
        "Abu Dhabi Grand Prix",
        "Qatar Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Verstappen passed Hamilton on the final lap of the 2021 Abu Dhabi GP after a controversial safety car restart to win his first championship in the most dramatic finale in F1 history.",
        es: "Verstappen pasó a Hamilton en la última vuelta del GP de Abu Dhabi de 2021 después de una controvertida reanudación del coche de seguridad para ganar su primer campeonato en el final más dramático en la historia de F1.",
        de: "Verstappen überholte Hamilton in der letzten Runde des Abu Dhabi GP 2021 nach einem umstrittenen Safety-Car-Neustart um seine erste Meisterschaft im dramatischsten Finale der F1-Geschichte zu gewinnen.",
        nl: "Verstappen passeerde Hamilton in de laatste ronde van de Abu Dhabi GP van 2021 na een controversiële safety car herstart om zijn eerste kampioenschap te winnen in de meest dramatische finale in F1-geschiedenis."
      }
    },
    {
      question: {
        en: "Which 1983 race saw Nelson Piquet win his second championship for Brabham-BMW?",
        es: "¿Qué carrera de 1983 vio a Nelson Piquet ganar su segundo campeonato para Brabham-BMW?",
        de: "Welches Rennen 1983 sah Nelson Piquet seine zweite Meisterschaft für Brabham-BMW gewinnen?",
        nl: "Welke race van 1983 zag Nelson Piquet zijn tweede kampioenschap winnen voor Brabham-BMW?"
      },
      options: [
        "European Grand Prix",
        "South African Grand Prix",
        "Italian Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Nelson Piquet finished 3rd at the 1983 European GP at Brands Hatch to clinch his 2nd championship for Brabham, beating Prost and Arnoux in the turbo era.",
        es: "Nelson Piquet terminó 3º en el GP de Europa de 1983 en Brands Hatch para asegurar su 2º campeonato para Brabham, venciendo a Prost y Arnoux en la era turbo.",
        de: "Nelson Piquet wurde beim Europa GP 1983 in Brands Hatch Dritter um seine 2. Meisterschaft für Brabham zu sichern, schlug Prost und Arnoux in der Turbo-Ära.",
        nl: "Nelson Piquet eindigde als 3e in de Europese GP van 1983 op Brands Hatch om zijn 2e kampioenschap voor Brabham veilig te stellen, versloeg Prost en Arnoux in het turbo tijdperk."
      }
    },
    {
      question: {
        en: "At which 1987 race did Nelson Piquet win his third and final championship?",
        es: "¿En qué carrera de 1987 Nelson Piquet ganó su tercer y último campeonato?",
        de: "Bei welchem Rennen 1987 gewann Nelson Piquet seine dritte und letzte Meisterschaft?",
        nl: "Bij welke race van 1987 won Nelson Piquet zijn derde en laatste kampioenschap?"
      },
      options: [
        "Japanese Grand Prix",
        "Australian Grand Prix",
        "Portuguese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Nelson Piquet finished 3rd at the 1987 Australian GP to secure his 3rd championship for Williams, beating teammate Mansell by 12 points in a controversial season.",
        es: "Nelson Piquet terminó 3º en el GP de Australia de 1987 para asegurar su 3er campeonato para Williams, venciendo a su compañero Mansell por 12 puntos en una temporada controvertida.",
        de: "Nelson Piquet wurde beim Australien GP 1987 Dritter um seine 3. Meisterschaft für Williams zu sichern, schlug Teamkollege Mansell mit 12 Punkten in einer kontroversen Saison.",
        nl: "Nelson Piquet eindigde als 3e in de Australische GP van 1987 om zijn 3e kampioenschap voor Williams veilig te stellen, versloeg teamgenoot Mansell met 12 punten in een controversieel seizoen."
      }
    },
    {
      question: {
        en: "Which 1989 race saw Alain Prost win his third championship after the Senna disqualification controversy?",
        es: "¿Qué carrera de 1989 vio a Alain Prost ganar su tercer campeonato después de la controversia de descalificación de Senna?",
        de: "Welches Rennen 1989 sah Alain Prost seine dritte Meisterschaft gewinnen nach der Senna-Disqualifikations-Kontroverse?",
        nl: "Welke race van 1989 zag Alain Prost zijn derde kampioenschap winnen na de Senna diskwalificatie controverse?"
      },
      options: [
        "Japanese Grand Prix",
        "Australian Grand Prix",
        "Portuguese Grand Prix",
        "Spanish Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "At the 1989 Japanese GP, Prost and Senna collided. Senna rejoined to win but was controversially disqualified, giving Prost his 3rd championship in acrimonious circumstances.",
        es: "En el GP de Japón de 1989, Prost y Senna chocaron. Senna se reincorporó para ganar pero fue controvertidamente descalificado, dando a Prost su 3er campeonato en circunstancias acrimoniosas.",
        de: "Beim Japan GP 1989 kollidierten Prost und Senna. Senna fuhr weiter zum Sieg wurde aber kontrovers disqualifiziert, gab Prost seine 3. Meisterschaft unter bitteren Umständen.",
        nl: "Bij de Japanse GP van 1989 botsten Prost en Senna. Senna vervolgde naar de overwinning maar werd controversieel gediskwalificeerd, gaf Prost zijn 3e kampioenschap onder wrange omstandigheden."
      }
    },
    {
      question: {
        en: "At which 1994 race did Michael Schumacher win his first championship after the controversial Damon Hill collision?",
        es: "¿En qué carrera de 1994 Michael Schumacher ganó su primer campeonato después de la controvertida colisión con Damon Hill?",
        de: "Bei welchem Rennen 1994 gewann Michael Schumacher seine erste Meisterschaft nach der umstrittenen Damon-Hill-Kollision?",
        nl: "Bij welke race van 1994 won Michael Schumacher zijn eerste kampioenschap na de controversiële Damon Hill botsing?"
      },
      options: [
        "European Grand Prix",
        "Japanese Grand Prix",
        "Australian Grand Prix",
        "Portuguese Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "At the 1994 Australian GP, Schumacher collided with Hill while leading, eliminating both. The collision gave Schumacher his first championship by 1 point amid controversy over intent.",
        es: "En el GP de Australia de 1994, Schumacher chocó con Hill mientras lideraba, eliminando a ambos. La colisión dio a Schumacher su primer campeonato por 1 punto en medio de controversia sobre la intención.",
        de: "Beim Australien GP 1994 kollidierte Schumacher mit Hill während er führte, beide schieden aus. Die Kollision gab Schumacher seine erste Meisterschaft mit 1 Punkt unter Kontroversen über Absicht.",
        nl: "Bij de Australische GP van 1994 botste Schumacher met Hill terwijl hij leidde, beiden elimineerde. De botsing gaf Schumacher zijn eerste kampioenschap met 1 punt te midden van controverse over opzet."
      }
    },
    {
      question: {
        en: "Which 1986 race saw Alain Prost clinch his second championship in the three-way showdown?",
        es: "¿Qué carrera de 1986 vio a Alain Prost asegurar su segundo campeonato en el enfrentamiento de tres vías?",
        de: "Welches Rennen 1986 sah Alain Prost seine zweite Meisterschaft im Drei-Wege-Showdown sichern?",
        nl: "Welke race van 1986 zag Alain Prost zijn tweede kampioenschap veiligstellen in de drie-weg showdown?"
      },
      options: [
        "Mexican Grand Prix",
        "Australian Grand Prix",
        "Portuguese Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Prost won the 1986 Australian GP after Mansell's tire exploded and Piquet crashed, securing his 2nd championship in the only race where 3 drivers could win the title.",
        es: "Prost ganó el GP de Australia de 1986 después de que explotara el neumático de Mansell y Piquet se estrellara, asegurando su 2º campeonato en la única carrera donde 3 pilotos podían ganar el título.",
        de: "Prost gewann den Australien GP 1986 nachdem Mansells Reifen explodierte und Piquet crashte, sicherte seine 2. Meisterschaft im einzigen Rennen wo 3 Fahrer den Titel gewinnen konnten.",
        nl: "Prost won de Australische GP van 1986 nadat Mansell's band explodeerde en Piquet crashte, stelde zijn 2e kampioenschap veilig in de enige race waarbij 3 coureurs de titel konden winnen."
      }
    },
    {
      question: {
        en: "At which 1990 race did Ayrton Senna deliberately crash into Alain Prost to win the championship?",
        es: "¿En qué carrera de 1990 Ayrton Senna deliberadamente chocó contra Alain Prost para ganar el campeonato?",
        de: "Bei welchem Rennen 1990 krachte Ayrton Senna absichtlich in Alain Prost um die Meisterschaft zu gewinnen?",
        nl: "Bij welke race van 1990 crashte Ayrton Senna opzettelijk in Alain Prost om het kampioenschap te winnen?"
      },
      options: [
        "Brazilian Grand Prix",
        "Japanese Grand Prix",
        "Australian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "At the 1990 Japanese GP, Senna admitted years later he deliberately drove into Prost at Turn 1, eliminating both and securing his 2nd championship in revenge for 1989.",
        es: "En el GP de Japón de 1990, Senna admitió años después que deliberadamente condujo hacia Prost en la Curva 1, eliminando a ambos y asegurando su 2º campeonato en venganza por 1989.",
        de: "Beim Japan GP 1990 gab Senna Jahre später zu dass er absichtlich in Prost in Kurve 1 fuhr, beide eliminierte und seine 2. Meisterschaft als Rache für 1989 sicherte.",
        nl: "Bij de Japanse GP van 1990 gaf Senna jaren later toe dat hij opzettelijk in Prost reed in bocht 1, beiden elimineerde en zijn 2e kampioenschap veiligstelde als wraak voor 1989."
      }
    },
    {
      question: {
        en: "Which 1991 race did Ayrton Senna win his third and final championship?",
        es: "¿Qué carrera de 1991 ganó Ayrton Senna su tercer y último campeonato?",
        de: "Welches Rennen 1991 gewann Ayrton Senna seine dritte und letzte Meisterschaft?",
        nl: "Welke race van 1991 won Ayrton Senna zijn derde en laatste kampioenschap?"
      },
      options: [
        "Japanese Grand Prix",
        "Australian Grand Prix",
        "Portuguese Grand Prix",
        "Spanish Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Ayrton Senna won the 1991 Japanese GP to clinch his 3rd and final championship for McLaren, dominating the season with 7 wins before his tragic death in 1994.",
        es: "Ayrton Senna ganó el GP de Japón de 1991 para asegurar su 3er y último campeonato para McLaren, dominando la temporada con 7 victorias antes de su trágica muerte en 1994.",
        de: "Ayrton Senna gewann den Japan GP 1991 um seine 3. und letzte Meisterschaft für McLaren zu sichern, dominierte die Saison mit 7 Siegen vor seinem tragischen Tod 1994.",
        nl: "Ayrton Senna won de Japanse GP van 1991 om zijn 3e en laatste kampioenschap voor McLaren veilig te stellen, domineerde het seizoen met 7 overwinningen voor zijn tragische dood in 1994."
      }
    },
    {
      question: {
        en: "At which 1998 race did Mika Häkkinen win his first championship for McLaren-Mercedes?",
        es: "¿En qué carrera de 1998 Mika Häkkinen ganó su primer campeonato para McLaren-Mercedes?",
        de: "Bei welchem Rennen 1998 gewann Mika Häkkinen seine erste Meisterschaft für McLaren-Mercedes?",
        nl: "Bij welke race van 1998 won Mika Häkkinen zijn eerste kampioenschap voor McLaren-Mercedes?"
      },
      options: [
        "Japanese Grand Prix",
        "Luxembourg Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Mika Häkkinen won the 1998 Japanese GP to clinch his first championship, beating Ferrari's Michael Schumacher in the McLaren-Mercedes MP4/13 'Silver Arrow'.",
        es: "Mika Häkkinen ganó el GP de Japón de 1998 para asegurar su primer campeonato, venciendo al Ferrari de Michael Schumacher en el McLaren-Mercedes MP4/13 'Flecha de Plata'.",
        de: "Mika Häkkinen gewann den Japan GP 1998 um seine erste Meisterschaft zu sichern, schlug Ferraris Michael Schumacher im McLaren-Mercedes MP4/13 'Silberpfeil'.",
        nl: "Mika Häkkinen won de Japanse GP van 1998 om zijn eerste kampioenschap veilig te stellen, versloeg Ferrari's Michael Schumacher in de McLaren-Mercedes MP4/13 'Silver Arrow'."
      }
    },
    {
      question: {
        en: "Which 2000 race saw Michael Schumacher equal Ayrton Senna's championship record of 3 titles?",
        es: "¿Qué carrera de 2000 vio a Michael Schumacher igualar el récord de campeonato de Ayrton Senna de 3 títulos?",
        de: "Welches Rennen 2000 sah Michael Schumacher Ayrton Sennas Meisterschaftsrekord von 3 Titeln egalisieren?",
        nl: "Welke race van 2000 zag Michael Schumacher Ayrton Senna's kampioenschapsrecord van 3 titels evenaren?"
      },
      options: [
        "Italian Grand Prix",
        "Japanese Grand Prix",
        "Malaysian Grand Prix",
        "United States Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won the 2000 Japanese GP to clinch his 3rd championship for Ferrari, equaling Senna's record and beginning Ferrari's dominant era.",
        es: "Michael Schumacher ganó el GP de Japón de 2000 para asegurar su 3er campeonato para Ferrari, igualando el récord de Senna y comenzando la era dominante de Ferrari.",
        de: "Michael Schumacher gewann den Japan GP 2000 um seine 3. Meisterschaft für Ferrari zu sichern, egalisierte Sennas Rekord und begann Ferraris dominante Ära.",
        nl: "Michael Schumacher won de Japanse GP van 2000 om zijn 3e kampioenschap voor Ferrari veilig te stellen, evenaarde Senna's record en begon Ferrari's dominante tijdperk."
      }
    },
    {
      question: {
        en: "At which 2003 race did Michael Schumacher clinch his record 6th championship with 4 races remaining?",
        es: "¿En qué carrera de 2003 Michael Schumacher aseguró su récord de 6º campeonato faltando 4 carreras?",
        de: "Bei welchem Rennen 2003 sicherte Michael Schumacher seine Rekord-6. Meisterschaft mit 4 verbleibenden Rennen?",
        nl: "Bij welke race van 2003 stelde Michael Schumacher zijn record 6e kampioenschap veilig met 4 races te gaan?"
      },
      options: [
        "United States Grand Prix",
        "Japanese Grand Prix",
        "Italian Grand Prix",
        "Hungarian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Michael Schumacher won the 2003 Japanese GP to secure his record 6th championship with 4 races to spare, dominating the season for Ferrari.",
        es: "Michael Schumacher ganó el GP de Japón de 2003 para asegurar su récord de 6º campeonato faltando 4 carreras, dominando la temporada para Ferrari.",
        de: "Michael Schumacher gewann den Japan GP 2003 um seine Rekord-6. Meisterschaft mit 4 Rennen Vorsprung zu sichern, dominierte die Saison für Ferrari.",
        nl: "Michael Schumacher won de Japanse GP van 2003 om zijn record 6e kampioenschap veilig te stellen met 4 races te gaan, domineerde het seizoen voor Ferrari."
      }
    },
    {
      question: {
        en: "Which 2005 race did Fernando Alonso win to become F1's youngest champion at the time?",
        es: "¿Qué carrera de 2005 ganó Fernando Alonso para convertirse en el campeón más joven de F1 en ese momento?",
        de: "Welches Rennen 2005 gewann Fernando Alonso um damals jüngster F1-Champion zu werden?",
        nl: "Welke race van 2005 won Fernando Alonso om destijds F1's jongste kampioen te worden?"
      },
      options: [
        "Chinese Grand Prix",
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Fernando Alonso clinched his first championship at the 2005 Brazilian GP for Renault at 24 years old, becoming F1's youngest champion at the time.",
        es: "Fernando Alonso aseguró su primer campeonato en el GP de Brasil de 2005 para Renault a los 24 años, convirtiéndose en el campeón más joven de F1 en ese momento.",
        de: "Fernando Alonso sicherte seine erste Meisterschaft beim Brasilien GP 2005 für Renault mit 24 Jahren, wurde damals jüngster F1-Champion.",
        nl: "Fernando Alonso stelde zijn eerste kampioenschap veilig bij de Braziliaanse GP van 2005 voor Renault op 24-jarige leeftijd, werd destijds F1's jongste kampioen."
      }
    },
    {
      question: {
        en: "At which 1973 race did Jackie Stewart win his third and final championship?",
        es: "¿En qué carrera de 1973 Jackie Stewart ganó su tercer y último campeonato?",
        de: "Bei welchem Rennen 1973 gewann Jackie Stewart seine dritte und letzte Meisterschaft?",
        nl: "Bij welke race van 1973 won Jackie Stewart zijn derde en laatste kampioenschap?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "Austrian Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jackie Stewart clinched his 3rd championship at the 1973 Italian GP for Tyrrell, retiring at season's end after teammate François Cevert's fatal crash at Watkins Glen.",
        es: "Jackie Stewart aseguró su 3er campeonato en el GP de Italia de 1973 para Tyrrell, retirándose al final de la temporada después del accidente fatal de su compañero François Cevert en Watkins Glen.",
        de: "Jackie Stewart sicherte seine 3. Meisterschaft beim Italien GP 1973 für Tyrrell, zog sich am Saisonende nach Teamkollege François Ceverts tödlichem Unfall in Watkins Glen zurück.",
        nl: "Jackie Stewart stelde zijn 3e kampioenschap veilig bij de Italiaanse GP van 1973 voor Tyrrell, stopte aan het einde van het seizoen na teamgenoot François Cevert's fatale crash op Watkins Glen."
      }
    },
    {
      question: {
        en: "Which 1963 race saw Jim Clark clinch his first championship for Lotus?",
        es: "¿Qué carrera de 1963 vio a Jim Clark asegurar su primer campeonato para Lotus?",
        de: "Welches Rennen 1963 sah Jim Clark seine erste Meisterschaft für Lotus sichern?",
        nl: "Welke race van 1963 zag Jim Clark zijn eerste kampioenschap voor Lotus veiligstellen?"
      },
      options: [
        "Italian Grand Prix",
        "South African Grand Prix",
        "Mexican Grand Prix",
        "United States Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jim Clark won the 1963 Mexican GP to clinch his first championship for Lotus, dominating the season with 7 wins in 10 races in the legendary Lotus 25.",
        es: "Jim Clark ganó el GP de México de 1963 para asegurar su primer campeonato para Lotus, dominando la temporada con 7 victorias en 10 carreras en el legendario Lotus 25.",
        de: "Jim Clark gewann den Mexiko GP 1963 um seine erste Meisterschaft für Lotus zu sichern, dominierte die Saison mit 7 Siegen in 10 Rennen im legendären Lotus 25.",
        nl: "Jim Clark won de Mexicaanse GP van 1963 om zijn eerste kampioenschap voor Lotus veilig te stellen, domineerde het seizoen met 7 overwinningen in 10 races in de legendarische Lotus 25."
      }
    },
    {
      question: {
        en: "At which 1951 race did Juan Manuel Fangio win to secure his first of five championships?",
        es: "¿En qué carrera de 1951 Juan Manuel Fangio ganó para asegurar el primero de cinco campeonatos?",
        de: "Bei welchem Rennen 1951 gewann Juan Manuel Fangio um seine erste von fünf Meisterschaften zu sichern?",
        nl: "Bij welke race van 1951 won Juan Manuel Fangio om zijn eerste van vijf kampioenschappen veilig te stellen?"
      },
      options: [
        "Spanish Grand Prix",
        "Italian Grand Prix",
        "British Grand Prix",
        "French Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Juan Manuel Fangio won the 1951 Spanish GP at Barcelona to clinch his first championship for Alfa Romeo, beginning his legendary career with 5 titles in the 1950s.",
        es: "Juan Manuel Fangio ganó el GP de España de 1951 en Barcelona para asegurar su primer campeonato para Alfa Romeo, comenzando su legendaria carrera con 5 títulos en los años 50.",
        de: "Juan Manuel Fangio gewann den Spanien GP 1951 in Barcelona um seine erste Meisterschaft für Alfa Romeo zu sichern, begann seine legendäre Karriere mit 5 Titeln in den 1950ern.",
        nl: "Juan Manuel Fangio won de Spaanse GP van 1951 in Barcelona om zijn eerste kampioenschap voor Alfa Romeo veilig te stellen, begon zijn legendarische carrière met 5 titels in de jaren '50."
      }
    },
    {
      question: {
        en: "Which 1954 race did Juan Manuel Fangio win to clinch his second championship?",
        es: "¿Qué carrera de 1954 ganó Juan Manuel Fangio para asegurar su segundo campeonato?",
        de: "Welches Rennen 1954 gewann Juan Manuel Fangio um seine zweite Meisterschaft zu sichern?",
        nl: "Welke race van 1954 won Juan Manuel Fangio om zijn tweede kampioenschap veilig te stellen?"
      },
      options: [
        "Italian Grand Prix",
        "Swiss Grand Prix",
        "Spanish Grand Prix",
        "German Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Juan Manuel Fangio won the 1954 Spanish GP at Barcelona for Mercedes-Benz to secure his second championship, switching teams after Maserati withdrew from F1.",
        es: "Juan Manuel Fangio ganó el GP de España de 1954 en Barcelona para Mercedes-Benz para asegurar su segundo campeonato, cambiando de equipo después de que Maserati se retirara de F1.",
        de: "Juan Manuel Fangio gewann den Spanien GP 1954 in Barcelona für Mercedes-Benz um seine zweite Meisterschaft zu sichern, wechselte das Team nachdem Maserati sich aus der F1 zurückzog.",
        nl: "Juan Manuel Fangio won de Spaanse GP van 1954 in Barcelona voor Mercedes-Benz om zijn tweede kampioenschap veilig te stellen, wisselde van team nadat Maserati zich terugtrok uit F1."
      }
    },
    {
      question: {
        en: "At which 1958 race did Mike Hawthorn clinch Britain's first F1 championship by finishing 2nd?",
        es: "¿En qué carrera de 1958 Mike Hawthorn aseguró el primer campeonato de F1 de Gran Bretaña terminando 2º?",
        de: "Bei welchem Rennen 1958 sicherte Mike Hawthorn Großbritanniens erste F1-Meisterschaft durch Platz 2?",
        nl: "Bij welke race van 1958 stelde Mike Hawthorn Groot-Brittannië's eerste F1-kampioenschap veilig door 2e te worden?"
      },
      options: [
        "Italian Grand Prix",
        "Portuguese Grand Prix",
        "Moroccan Grand Prix",
        "German Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Mike Hawthorn finished 2nd at the 1958 Moroccan GP to clinch Britain's first championship for Ferrari by one point over Stirling Moss, retiring immediately after and dying in a road accident months later.",
        es: "Mike Hawthorn terminó 2º en el GP de Marruecos de 1958 para asegurar el primer campeonato de Gran Bretaña para Ferrari por un punto sobre Stirling Moss, retirándose inmediatamente después y muriendo en un accidente de tráfico meses después.",
        de: "Mike Hawthorn wurde beim Marokko GP 1958 Zweiter um Großbritanniens erste Meisterschaft für Ferrari mit einem Punkt Vorsprung auf Stirling Moss zu sichern, zog sich sofort zurück und starb Monate später bei einem Verkehrsunfall.",
        nl: "Mike Hawthorn eindigde als 2e in de Marokkaanse GP van 1958 om Groot-Brittannië's eerste kampioenschap voor Ferrari veilig te stellen met één punt voorsprong op Stirling Moss, stopte onmiddellijk daarna en overleed maanden later in een verkeersongeval."
      }
    },
    {
      question: {
        en: "Which 1982 race saw Keke Rosberg clinch the championship with only one win all season?",
        es: "¿Qué carrera de 1982 vio a Keke Rosberg asegurar el campeonato con solo una victoria en toda la temporada?",
        de: "Welches Rennen 1982 sah Keke Rosberg die Meisterschaft mit nur einem Sieg in der ganzen Saison sichern?",
        nl: "Welke race van 1982 zag Keke Rosberg het kampioenschap veiligstellen met slechts één overwinning het hele seizoen?"
      },
      options: [
        "Las Vegas Grand Prix",
        "Italian Grand Prix",
        "Canadian Grand Prix",
        "United States Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Keke Rosberg finished 5th at the 1982 Las Vegas GP to clinch the championship for Williams with only one win (Swiss GP), in F1's most unpredictable season with 11 different winners.",
        es: "Keke Rosberg terminó 5º en el GP de Las Vegas de 1982 para asegurar el campeonato para Williams con solo una victoria (GP de Suiza), en la temporada más impredecible de F1 con 11 ganadores diferentes.",
        de: "Keke Rosberg wurde beim Las Vegas GP 1982 Fünfter um die Meisterschaft für Williams mit nur einem Sieg (Schweiz GP) zu sichern, in F1s unvorhersehbarster Saison mit 11 verschiedenen Siegern.",
        nl: "Keke Rosberg eindigde als 5e in de Las Vegas GP van 1982 om het kampioenschap voor Williams veilig te stellen met slechts één overwinning (Zwitserse GP), in F1's meest onvoorspelbare seizoen met 11 verschillende winnaars."
      }
    }
  ];

  return { questions: questions };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level9;
}
